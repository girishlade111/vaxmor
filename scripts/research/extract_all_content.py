import json
import os
from bs4 import BeautifulSoup

HTML_DIR = "research/reference/html"
OUT_DIR = "research/content"
os.makedirs(OUT_DIR, exist_ok=True)

assets_list = json.loads(open("research/manifests/assets.json", encoding="utf-8").read())
url_to_local = {a["sourceUrl"]: a["deliveryPath"] for a in assets_list}

def map_img(img):
    src = img.get("src", "")
    local = url_to_local.get(src)
    if not local and img.get("srcset"):
        # try last srcset
        parts = [p.strip().split(" ")[0] for p in img["srcset"].split(",") if p.strip()]
        for p in reversed(parts):
            if p in url_to_local:
                local = url_to_local[p]
                break
    return {
        "src": src,
        "local": local,
        "alt": img.get("alt", ""),
        "class": " ".join(img.get("class", [])),
    }

summary = {}

for fn in sorted(os.listdir(HTML_DIR)):
    if not fn.endswith(".html"):
        continue
    route = "/" if fn == "home.html" else "/" + fn[:-5].replace("__", "/")
    html = open(f"{HTML_DIR}/{fn}", encoding="utf-8").read()
    soup = BeautifulSoup(html, "lxml")

    title = soup.title.string.strip() if soup.title and soup.title.string else ""
    meta_desc = ""
    md = soup.find("meta", attrs={"name": "description"})
    if md:
        meta_desc = md.get("content", "")

    # Extract main content blocks (outside nav and footer, plus nav/footer separately on home)
    main = soup.find("main") or soup.body
    sections = []
    for sec in main.find_all(["section", "header", "footer"], recursive=True):
        # skip nested sections
        if sec.find_parent(["section", "footer"]) and sec.name != "footer":
            continue
        cls = " ".join(sec.get("class", []))
        headings = [{"tag": h.name, "class": " ".join(h.get("class", [])), "text": " ".join(h.get_text(" ", strip=True).split())} for h in sec.find_all(["h1", "h2", "h3", "h4", "h5", "h6"])]
        paras = [" ".join(p.get_text(" ", strip=True).split()) for p in sec.find_all("p")]
        links = [{"href": a.get("href", ""), "text": " ".join(a.get_text(" ", strip=True).split()), "class": " ".join(a.get("class", []))} for a in sec.find_all("a", href=True)]
        imgs = [map_img(im) for im in sec.find_all("img")]
        svgs = [str(sv) for sv in sec.find_all("svg")]
        sections.append({
            "tag": sec.name,
            "class": cls,
            "headings": headings,
            "paragraphs": paras,
            "links": links,
            "images": imgs,
            "svgCount": len(svgs),
        })

    out_name = "home" if route == "/" else route.strip("/").replace("/", "__")
    open(f"{OUT_DIR}/{out_name}.json", "w", encoding="utf-8").write(json.dumps({
        "route": route,
        "title": title,
        "metaDescription": meta_desc,
        "sections": sections,
    }, indent=2))
    summary[route] = {"title": title, "metaDescription": meta_desc, "sectionCount": len(sections)}

# Also extract unique SVGs across nav, footer, and home/services/blog
svg_catalog = {}
for fn in ["home.html", "services-v1.html", "services__private-banking.html", "about-us.html", "pricing.html", "blog.html", "contact-v1.html"]:
    p = os.path.join(HTML_DIR, fn)
    if not os.path.exists(p):
        continue
    soup = BeautifulSoup(open(p, encoding="utf-8").read(), "lxml")
    for sv in soup.find_all("svg"):
        s = str(sv)
        parent_cls = " ".join(sv.parent.get("class", [])) if sv.parent else ""
        key = s
        if key not in svg_catalog:
            svg_catalog[key] = {"parentClass": parent_cls, "files": [fn], "svg": s}
        elif fn not in svg_catalog[key]["files"]:
            svg_catalog[key]["files"].append(fn)

open(f"{OUT_DIR}/_svgs.json", "w", encoding="utf-8").write(json.dumps(list(svg_catalog.values()), indent=2))
open(f"{OUT_DIR}/_summary.json", "w", encoding="utf-8").write(json.dumps(summary, indent=2))
print(f"Extracted {len(summary)} pages and {len(svg_catalog)} unique inline SVGs.")
