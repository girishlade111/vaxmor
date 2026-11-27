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

out = {}

# 1. Testimonials full quotes + positions + photos
t_slugs = ["marcus-b", "patricia-h", "daniel-k", "james-p", "maria-s", "thomas-w", "karen-d", "robert-m"]
t_list = []
for i, slug in enumerate(t_slugs, 1):
    sp = soup_of(f"testimonial__{slug}.html")
    b = sp.select_one(".section-banner")
    name = b.find("h1").get_text(" ", strip=True)
    pos = b.select_one(".eyebrow-text").get_text(" ", strip=True) if b.select_one(".eyebrow-text") else ""
    quote = b.select_one("p").get_text(" ", strip=True) if b.select_one("p") else ""
    img = resolve_img(b.select_one("img"))
    t_list.append({"order": i, "slug": slug, "clientName": name, "position": pos, "quote": quote, "photo": img})
out["testimonials"] = t_list

# 2. All FAQs full text
faqs = {}
for fn in ["home.html", "home-v2.html", "services-v1.html", "services-v2.html", "services-v3.html", "pricing.html", "contact-v1.html", "contact-v2.html",
           "services__wealth-management.html", "services__investment-portfolios.html", "services__private-banking.html", "services__retirement-planning.html", "services__business-banking.html", "services__lending-and-mortgages.html"]:
    sp = soup_of(fn)
    fq = sp.select_one(".section-faq-split")
    if fq:
        ey_i = fq.select_one(".eyebrow-index")
        ey_t = fq.select_one(".eyebrow-text")
        h2 = fq.select_one("h2")
        desc = fq.select_one(".faq-split-intro > p")
        card = fq.select_one(".faq-split-card")
        card_title = card.find(["h3", "h4", "p"]).get_text(" ", strip=True) if card else ""
        card_ps = [p.get_text(" ", strip=True) for p in card.find_all("p")] if card else []
        card_a = card.find("a") if card else None
        items = []
        for it in fq.select(".faq-split-item"):
            q = it.select_one(".faq-split-question")
            a = it.select_one(".faq-split-answer")
            items.append({"question": q.get_text(" ", strip=True) if q else "", "answer": a.get_text(" ", strip=True) if a else ""})
        faqs[fn[:-5]] = {
            "eyebrowNum": ey_i.get_text(strip=True) if ey_i else "",
            "eyebrowText": ey_t.get_text(strip=True) if ey_t else "",
            "heading": h2.get_text(" ", strip=True) if h2 else "",
            "description": desc.get_text(" ", strip=True) if desc else "",
            "assistanceTitle": card_title,
            "assistanceCopy": card_ps[-1] if card_ps else "",
            "assistanceCta": {"label": card_a.get_text(" ", strip=True), "href": card_a.get("href", "/contact-v2")} if card_a else None,
            "items": items,
        }
out["faqs"] = faqs

# 3. Extract Mega Menu + Pages Dropdown items & SVGs
home = soup_of("home.html")
header = home.select_one("header.nav")
mega_menus = []
for dd in header.select(".mega-dropdown"):
    toggle = dd.select_one(".nav_link-dropdown, .w-dropdown-toggle")
    tabs = []
    tab_links = [t.get_text(" ", strip=True) for t in dd.select(".mega-tab-link")]
    panes = dd.select(".mega-tab-pane")
    for idx, pane in enumerate(panes):
        items = []
        for a in pane.select("a.mega-item"):
            texts = [t.strip() for t in a.stripped_strings]
            svg = a.select_one(".mega-icon-wrap svg")
            items.append({
                "href": a.get("href", "/"),
                "title": texts[0] if texts else "",
                "description": texts[1] if len(texts) > 1 else "",
                "svg": str(svg) if svg else "",
            })
        tabs.append({"label": tab_links[idx] if idx < len(tab_links) else f"Tab {idx}", "items": items})
    footer_el = dd.select_one(".mega-footer")
    footer_p = footer_el.select_one("p").get_text(" ", strip=True) if footer_el and footer_el.select_one("p") else ""
    footer_a = footer_el.select_one("a") if footer_el else None
    mega_menus.append({
        "trigger": toggle.get_text(" ", strip=True) if toggle else "",
        "tabs": tabs,
        "footer": {"text": footer_p, "ctaLabel": footer_a.get_text(" ", strip=True), "ctaHref": footer_a.get("href", "")} if footer_a else None,
    })
out["megaMenus"] = mega_menus

# 4. Pricing plans + Business Matrix + Compare table from pricing.html
pr = soup_of("pricing.html")
pricing_data = {"personalCards": [], "businessCmp": {}, "compareTable": []}
for card in pr.select(".pricing-card-wrap"):
    texts = [t.strip() for t in card.stripped_strings]
    a = card.find("a")
    pricing_data["personalCards"].append({"texts": texts, "ctaHref": a.get("href") if a else "", "ctaLabel": a.get_text(" ", strip=True) if a else ""})
for row in pr.select(".compare-row"):
    if "is-head" in row.get("class", []): continue
    texts = [t.strip() for t in row.stripped_strings]
    pricing_data["compareTable"].append({"href": row.get("href", ""), "texts": texts})
cmp_tiers = []
for t in pr.select(".pricing-cmp-tier, .pricing-cmp-tier-mark"):
    a = t.find("a")
    cmp_tiers.append({"texts": [x.strip() for x in t.stripped_strings], "href": a.get("href") if a else "", "isHighlighted": "pricing-cmp-tier-mark" in t.get("class", [])})
cmp_rows = []
for r in pr.select(".pricing-cmp-row"):
    key = r.select_one(".pricing-cmp-key")
    vals = r.select(".pricing-cmp-val, .pricing-cmp-val-mark")
    cmp_rows.append({"key": key.get_text(" ", strip=True) if key else "", "vals": [v.get_text(" ", strip=True) for v in vals]})
pricing_data["businessCmp"] = {"tiers": cmp_tiers, "rows": cmp_rows}
out["pricing"] = pricing_data

open("research/content/extracted/complete-data.json", "w", encoding="utf-8").write(json.dumps(out, indent=2))
print("Saved complete-data.json! Testimonials:", len(t_list), "FAQs:", len(faqs), "MegaMenus:", len(mega_menus))
