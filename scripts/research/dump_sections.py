import json
import os
from bs4 import BeautifulSoup

HTML_DIR = "research/reference/html"
ASSETS = json.loads(open("research/manifests/assets.json", encoding="utf-8").read())
URL_TO_LOCAL = {a["sourceUrl"]: a["deliveryPath"] for a in ASSETS}

def resolve_img(img):
    if not img:
        return ""
    src = img.get("src", "")
    if src in URL_TO_LOCAL:
        return URL_TO_LOCAL[src]
    srcset = img.get("srcset", "")
    for p in reversed([x.strip().split(" ")[0] for x in srcset.split(",") if x.strip()]):
        if p in URL_TO_LOCAL:
            return URL_TO_LOCAL[p]
    return src

def soup_of(fn):
    return BeautifulSoup(open(os.path.join(HTML_DIR, fn), encoding="utf-8").read(), "lxml")

# Extract all text + images cleanly for each section of key pages
def dump_page_sections(fn):
    s = soup_of(fn)
    out = []
    main = s.find("main") or s.body
    for sec in main.find_all("section", recursive=True):
        if sec.find_parent("section"):
            continue
        cls = " ".join(sec.get("class", []))
        texts = [t.strip() for t in sec.stripped_strings]
        imgs = [{"local": resolve_img(im), "alt": im.get("alt", ""), "cls": " ".join(im.get("class", []))} for im in sec.find_all("img")]
        links = [{"href": a.get("href", ""), "text": " ".join(a.stripped_strings)} for a in sec.find_all("a", href=True)]
        out.append({"class": cls, "texts": texts, "imgs": imgs, "links": links})
    return out

bundle = {}
for fn in [
    "home.html", "home-v2.html", "home-v3.html",
    "about-us.html", "services-v1.html", "services-v2.html", "services-v3.html",
    "pricing.html", "blog.html", "contact-v1.html", "contact-v2.html", "contact-v3.html",
    "instructions.html", "licenses.html", "changelog.html", "401.html", "404.html"
]:
    bundle[fn[:-5]] = dump_page_sections(fn)

open("research/content/extracted/all-sections.json", "w", encoding="utf-8").write(json.dumps(bundle, indent=2))

# Extract style-guide specimen groups
sg = soup_of("style-guide.html")
sg_groups = []
for grp in sg.select(".sg-section, .style-guide-section, .fs_styleguide_section, [class*='styleguide']"):
    texts = [t.strip() for t in grp.stripped_strings][:30]
    if texts:
        sg_groups.append({"class": " ".join(grp.get("class", [])), "texts": texts})
if not sg_groups:
    # Fallback: all direct children of main wrapper
    main_w = sg.select_one(".main-wrapper") or sg.body
    for child in main_w.find_all(recursive=False):
        texts = [t.strip() for t in child.stripped_strings][:25]
        if texts:
            sg_groups.append({"tag": child.name, "class": " ".join(child.get("class", [])), "texts": texts})
open("research/content/extracted/style-guide-structure.json", "w", encoding="utf-8").write(json.dumps(sg_groups, indent=2))
print("Dumped all-sections.json and style-guide-structure.json. SG groups:", len(sg_groups))
