import json
import os
import re
from bs4 import BeautifulSoup

HTML_DIR = "research/reference/html"
CSS_PATH = "research/reference/css/vaxmor.shared.css"
OUT_DIR = "research/manifests"
os.makedirs(OUT_DIR, exist_ok=True)

css = open(CSS_PATH, encoding="utf-8").read()
css_urls = re.findall(r"url\((?:['\"])?(https?://[^)'\"]+)(?:['\"])?\)", css)

raw = json.loads(open(f"{OUT_DIR}/discovered-urls-raw.json", encoding="utf-8").read())
all_urls = set(raw.get("allAssets", []))
all_urls.update(css_urls)

# Track where each asset URL appears
asset_usage = {}
font_links = set()

def add_usage(url, route, role):
    url = url.strip().rstrip(",;)")
    if not url.startswith("http"):
        return
    if url.endswith(".css") or url.endswith(".js"):
        return
    all_urls.add(url)
    entry = asset_usage.setdefault(url, {"routes": set(), "roles": set()})
    entry["routes"].add(route)
    entry["roles"].add(role)

for fn in sorted(os.listdir(HTML_DIR)):
    if not fn.endswith(".html"):
        continue
    route = "/" if fn == "home.html" else "/" + fn[:-5].replace("__", "/")
    html = open(f"{HTML_DIR}/{fn}", encoding="utf-8").read()
    soup = BeautifulSoup(html, "lxml")

    for link in soup.find_all("link", href=True):
        href = link["href"]
        if "fonts.googleapis.com" in href:
            font_links.add(href)
        if any(ext in href.lower() for ext in [".png", ".svg", ".ico", ".webp", ".jpg", ".jpeg"]):
            add_usage(href, route, "link-icon")

    for meta in soup.find_all("meta"):
        c = meta.get("content", "")
        if c.startswith("https://cdn.prod.website-files.com/"):
            add_usage(c, route, f"meta-{meta.get('property') or meta.get('name')}")

    for img in soup.find_all("img"):
        src = img.get("src", "")
        if src:
            add_usage(src, route, "img-src")
        srcset = img.get("srcset", "")
        if srcset:
            # Find highest-res entry and also track all
            candidates = [p.strip() for p in srcset.split(",") if p.strip()]
            for c in candidates:
                u = c.split(" ")[0]
                add_usage(u, route, "img-srcset")

    for m in re.findall(r"https://cdn\.prod\.website-files\.com/[^\s\"'<>)]+", html):
        add_usage(m, route, "html-ref")

# Deduplicate responsive -p-500 / -p-800 / -p-1080 / -p-1600 / -p-2000 variants to prefer the master URL
def is_resized_variant(u):
    return bool(re.search(r"-p-(?:500|800|1080|1600|2000)\.[a-zA-Z0-9]+$", u))

masters = sorted(u for u in asset_usage if not is_resized_variant(u))
variants = sorted(u for u in asset_usage if is_resized_variant(u))

manifest = {
    "masterCount": len(masters),
    "variantCount": len(variants),
    "fontLinks": sorted(font_links),
    "masters": [
        {
            "url": u,
            "routes": sorted(asset_usage[u]["routes"]),
            "roles": sorted(asset_usage[u]["roles"]),
        }
        for u in masters
    ],
    "variants": variants,
}

open(f"{OUT_DIR}/media-urls.json", "w", encoding="utf-8").write(json.dumps(manifest, indent=2))
print(f"Masters: {len(masters)}, Variants: {len(variants)}, Font links: {len(font_links)}")
for fl in sorted(font_links):
    print("  FONT:", fl)
