import hashlib
import json
import os
import re
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image
import io

MANIFEST_IN = "research/manifests/media-urls.json"
ASSETS_SRC_DIR = "assets-source/original"
PUBLIC_ASSETS_DIR = "public/assets"
OUT_ASSETS_JSON = "research/manifests/assets.json"
OUT_RIGHTS_JSON = "research/manifests/asset-rights.json"

os.makedirs(ASSETS_SRC_DIR, exist_ok=True)
os.makedirs(PUBLIC_ASSETS_DIR, exist_ok=True)
os.makedirs("public/assets/fonts", exist_ok=True)
os.makedirs("assets-source/original/fonts", exist_ok=True)

data = json.loads(open(MANIFEST_IN, encoding="utf-8").read())

def safe_filename(url):
    parsed = urllib.parse.urlparse(url)
    base = os.path.basename(parsed.path)
    # Double-decoded name for local storage only
    decoded = urllib.parse.unquote(urllib.parse.unquote(base))
    clean = re.sub(r"[^a-zA-Z0-9._-]+", "-", decoded).strip("-")
    if not clean:
        clean = hashlib.sha1(url.encode()).hexdigest()[:12]
    return clean.lower()

def classify_subdir(url, roles):
    low = url.lower()
    if "vaxmor" in low and ("logo" in low or "dark" in low or "light" in low or "favicon" in low or "webclip" in low or "og-image" in low or "symbol" in low):
        return "brand"
    if "card" in low:
        return "graphics/cards"
    if "app-screen" in low or "phone" in low or "mockup" in low:
        return "graphics/app"
    if "logoipsum" in low or "partner" in low or "client-logo" in low:
        return "logos"
    if "map" in low or "screenshot" in low:
        return "maps"
    if "branch" in low or "skyscraper" in low or "concrete" in low or "minimalism" in low or "brickwork" in low:
        return "images/architecture"
    if low.endswith(".svg"):
        return "icons"
    return "images/media"

def download_one(item):
    url = item["url"]
    fn = safe_filename(url)
    subdir = classify_subdir(url, item["roles"])
    master_dir = os.path.join(ASSETS_SRC_DIR, subdir)
    pub_dir = os.path.join(PUBLIC_ASSETS_DIR, subdir)
    os.makedirs(master_dir, exist_ok=True)
    os.makedirs(pub_dir, exist_ok=True)
    master_path = os.path.join(master_dir, fn)
    pub_path = os.path.join(pub_dir, fn)

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            raw_bytes = resp.read()
            status = resp.status
            ctype = resp.headers.get("Content-Type", "")
            final_url = resp.geturl()
    except Exception as e:
        return {"url": url, "error": str(e), "acquisitionStatus": "FAILED"}

    sha = hashlib.sha256(raw_bytes).hexdigest()
    w = h = None
    has_alpha = None
    validation = "VALID"

    if fn.endswith(".svg") or "svg" in ctype:
        txt = raw_bytes.decode("utf-8", "ignore")
        if "<svg" not in txt:
            validation = "INVALID_SVG"
    else:
        try:
            im = Image.open(io.BytesIO(raw_bytes))
            im.verify()
            im2 = Image.open(io.BytesIO(raw_bytes))
            w, h = im2.size
            has_alpha = im2.mode in ("RGBA", "LA") or ("transparency" in im2.info)
        except Exception as e:
            validation = f"DECODE_ERROR:{e}"

    with open(master_path, "wb") as f:
        f.write(raw_bytes)
    with open(pub_path, "wb") as f:
        f.write(raw_bytes)

    return {
        "id": f"{subdir}/{fn}".replace("\\", "/"),
        "sourceUrl": url,
        "finalUrl": final_url,
        "referenceRoutes": item["routes"],
        "roles": item["roles"],
        "mimeType": ctype,
        "originalFilename": os.path.basename(urllib.parse.urlparse(url).path),
        "originalWidth": w,
        "originalHeight": h,
        "originalFileSize": len(raw_bytes),
        "hasTransparency": has_alpha,
        "masterPath": master_path.replace("\\", "/"),
        "deliveryPath": "/" + pub_path.replace("public/", "").replace("\\", "/"),
        "sha256": sha,
        "originalOrReplacement": "original",
        "acquisitionStatus": f"HTTP_{status}",
        "validationStatus": validation,
    }

records = []
with ThreadPoolExecutor(max_workers=8) as ex:
    futs = [ex.submit(download_one, m) for m in data["masters"]]
    for fut in as_completed(futs):
        r = fut.result()
        records.append(r)

# Deduplicate by sha256
seen_sha = {}
for r in sorted(records, key=lambda x: x.get("id", x.get("url", ""))):
    sha = r.get("sha256")
    if sha:
        if sha in seen_sha:
            r["duplicateOf"] = seen_sha[sha]
        else:
            seen_sha[sha] = r["id"]
            r["duplicateOf"] = None

open(OUT_ASSETS_JSON, "w", encoding="utf-8").write(json.dumps(records, indent=2))
valid = sum(1 for r in records if r.get("validationStatus") == "VALID")
failed = [r for r in records if r.get("validationStatus") != "VALID"]
print(f"Downloaded {len(records)} masters. Valid: {valid}, Failed: {len(failed)}, Unique SHA256: {len(seen_sha)}")
for f in failed:
    print("  FAIL:", f)
