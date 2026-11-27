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

# 1. Testimonials full data from home.html + services-v1.html + testimonial/*.html
home = soup_of("home.html")
sv1 = soup_of("services-v1.html")
quotes_map = {}
for sp in [home, sv1]:
    for card in sp.select(".testimonial-featured-card, .testimonial-featured-item, .testimonial-card, .testimonial-side-item, [class*='testimonial']"):
        txt = " ".join(card.stripped_strings)
        for name in ["Marcus B.", "Patricia H.", "Daniel K.", "James P.", "Maria S.", "Thomas W.", "Karen D.", "Robert M."]:
            if name in txt and len(txt) > 30 and len(txt) < 600:
                quotes_map.setdefault(name, []).append(txt)

print("=== TESTIMONIALS TEXT MATCHES ===")
for k, v in quotes_map.items():
    # pick shortest clean card match
    best = min(v, key=len)
    print(k, "=>", best)

# 2. Extract exact partner logos on home
tb = home.select_one(".section-trust-bar")
logos = []
if tb:
    for im in tb.select("img"):
        p = resolve_img(im)
        if p not in logos:
            logos.append(p)
print("\n=== PARTNER LOGOS ===", logos)

# 3. Extract exact avatars on home hero
hero = home.select_one(".section-hero-split")
avatars = [resolve_img(im) for im in hero.select(".avatar-item")] if hero else []
hero_imgs = [resolve_img(im) for im in hero.select("img")] if hero else []
print("\n=== HOME HERO IMGS ===", hero_imgs)
print("=== HOME HERO AVATARS ===", avatars)

# 4. Extract team members from home-v2.html (all 7 + photos + bios from services-v3 / contact-v2)
hv2 = soup_of("home-v2.html")
cv2 = soup_of("contact-v2.html")
print("\n=== TEAM FROM CONTACT-V2 ===")
for card in cv2.select(".team-card-wrap"):
    im = resolve_img(card.find("img"))
    texts = [t.strip() for t in card.stripped_strings]
    if texts:
        print(im, "|", texts)

# 5. Extract branches from contact-v1.html
cv1 = soup_of("contact-v1.html")
print("\n=== BRANCHES FROM CONTACT-V1 ===")
for card in cv1.select(".location-card"):
    im = resolve_img(card.find("img"))
    texts = [t.strip() for t in card.stripped_strings]
    print(im, "|", texts)

# 6. Extract FAQs cleanly from all pages using actual Webflow FAQ classes (.faq-split-item)
print("\n=== FAQ ITEMS CHECK ===")
for fn in ["home.html", "home-v2.html", "services-v1.html", "services-v2.html", "services-v3.html", "pricing.html", "contact-v1.html", "contact-v2.html", "services__wealth-management.html"]:
    sp = soup_of(fn)
    fq = sp.select_one(".section-faq-split")
    if fq:
        items = []
        for it in fq.select(".faq-split-item"):
            q = it.select_one(".faq-split-question")
            a = it.select_one(".faq-split-answer")
            items.append((q.get_text(" ", strip=True) if q else "", a.get_text(" ", strip=True) if a else ""))
        card = fq.select_one(".faq-split-card")
        print(fn, "items:", len(items), "card:", [t for t in card.stripped_strings] if card else None)
        for q, a in items:
            print("  Q:", q, "| A:", a[:80])
