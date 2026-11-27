import json, os
from bs4 import BeautifulSoup

HTML_DIR = "research/reference/html"
ASSETS = json.loads(open("research/manifests/assets.json", encoding="utf-8").read())
URL_TO_LOCAL = {a["sourceUrl"]: a["deliveryPath"] for a in ASSETS}

def resolve_img(img):
    if not img: return ""
    src = img.get("src", "")
    if src in URL_TO_LOCAL: return URL_TO_LOCAL[src]
    for p in reversed([x.strip().split(" ")[0] for x in img.get("srcset", "").split(",") if x.strip()]):
        if p in URL_TO_LOCAL: return URL_TO_LOCAL[p]
    return src

def soup_of(fn):
    return BeautifulSoup(open(os.path.join(HTML_DIR, fn), encoding="utf-8").read(), "lxml")

# Extract all 8 testimonial quotes from services-v1 or home
sv1 = soup_of("services-v1.html")
home = soup_of("home.html")
quotes = {}
for sp in [home, sv1]:
    for item in sp.select(".w-dyn-item"):
        txt_list = [t.strip() for t in item.stripped_strings]
        for name in ["Marcus B.", "Patricia H.", "Daniel K.", "James P.", "Maria S.", "Thomas W.", "Karen D.", "Robert M."]:
            if name in txt_list and len(txt_list) >= 3:
                quotes[name] = txt_list

print("=== 8 TESTIMONIAL QUOTES ===")
for k, v in quotes.items():
    print(k, "->", v)

# Also check testimonial__marcus-b.html banner text
tm = soup_of("testimonial__marcus-b.html")
print("\n=== TESTIMONIAL DETAIL BANNER ===")
print([t.strip() for t in tm.select_one(".section-banner").stripped_strings])

# Also check home-v2 hero & home-v3 hero images
for fn in ["home-v2.html", "home-v3.html", "about-us.html", "services-v1.html", "services-v2.html", "services-v3.html", "pricing.html", "blog.html", "contact-v1.html", "contact-v2.html", "contact-v3.html"]:
    sp = soup_of(fn)
    sec1 = sp.select("main > section, section")[0] if sp.select("section") else None
    imgs = [resolve_img(im) for im in sec1.find_all("img")] if sec1 else []
    print(f"{fn:20s} hero imgs: {imgs[:6]}")
