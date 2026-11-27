import json, re, os
from bs4 import BeautifulSoup

css = open("research/reference/css/vaxmor.shared.css", encoding="utf-8").read()
# Format CSS rules cleanly for key prefixes
rules = re.findall(r"([^{}@]+\{[^{}]+\})", css)
prefixes = (
    ".topbar", ".nav", ".mega-", ".section-", ".hero-", ".card-", ".service-",
    ".pricing-", ".plan-", ".compare-", ".table-", ".testimonial-", ".facts-",
    ".counter-", ".news-", ".blog-", ".article-", ".faq-", ".cta-", ".footer-",
    ".banner-", ".about-", ".founder-", ".video-", ".timeline-", ".team-",
    ".contact-", ".location-", ".branch-", ".map-", ".results-", ".why-",
    ".security-", ".app-", ".step", ".segment", ".trust-", ".marquee", ".avatar",
    ".portfolio", ".salary", ".eyebrow", ".shadow-", ".box-", ".style-guide", ".sg-", ".protected", ".utility"
)
out_css = []
for r in rules:
    sel = r.split("{", 1)[0].strip()
    if any(p in sel for p in prefixes):
        out_css.append(r)

open("research/design-system/extracted-classes.css", "w", encoding="utf-8").write("\n".join(out_css))
print("Extracted component CSS rules:", len(out_css))

# Also extract articles full metadata + covers from blog.html + blog/*.html
ASSETS = json.loads(open("research/manifests/assets.json", encoding="utf-8").read())
URL_TO_LOCAL = {a["sourceUrl"]: a["deliveryPath"] for a in ASSETS}
def resolve_img(img):
    if not img: return ""
    src = img.get("src", "")
    if src in URL_TO_LOCAL: return URL_TO_LOCAL[src]
    for p in reversed([x.strip().split(" ")[0] for x in img.get("srcset", "").split(",") if x.strip()]):
        if p in URL_TO_LOCAL: return URL_TO_LOCAL[p]
    return src

blog_soup = BeautifulSoup(open("research/reference/html/blog.html", encoding="utf-8").read(), "lxml")
covers = {}
for a in blog_soup.select("a[href^='/blog/']"):
    href = a.get("href")
    im = a.find("img")
    texts = [t.strip() for t in a.stripped_strings]
    covers[href] = {"img": resolve_img(im), "texts": texts}

articles_full = []
for slug in [
    "how-much-cash-should-you-really-keep",
    "what-interest-rate-changes-mean-for-you-in-2026",
    "seven-questions-to-ask-before-choosing-a-financial-advisor",
    "diversification-explained-without-the-jargon",
    "planning-retirement-in-your-forties-five-steps",
    "cash-flow-habits-of-fast-growing-businesses",
]:
    sp = BeautifulSoup(open(f"research/reference/html/blog__{slug}.html", encoding="utf-8").read(), "lxml")
    banner = sp.select_one(".section-banner, .article-hero, section")
    title = sp.find("h1").get_text(" ", strip=True) if sp.find("h1") else ""
    hero_img = resolve_img(banner.find("img")) if banner else ""
    cat = covers.get(f"/blog/{slug}", {}).get("texts", [""])[0]
    rich = sp.select_one(".w-richtext")
    body_blocks = []
    if rich:
        for ch in rich.find_all(["h2", "h3", "p", "ul", "ol"], recursive=False):
            body_blocks.append({"tag": ch.name, "text": ch.get_text(" ", strip=True), "html": str(ch)})
    # sidebar in-short & callout
    aside_texts = [t.strip() for t in (sp.select_one(".article-aside, .blog-sidebar, .article-sidebar") or sp).stripped_strings][:20]
    articles_full.append({
        "slug": slug,
        "title": title,
        "category": cat,
        "publishedAt": "November 18, 2026",
        "coverImage": covers.get(f"/blog/{slug}", {}).get("img", hero_img),
        "heroImage": hero_img,
        "bodyBlocks": body_blocks,
        "sidebarSample": aside_texts[:10],
    })

open("research/content/extracted/articles-full.json", "w", encoding="utf-8").write(json.dumps(articles_full, indent=2))
print("Extracted full articles:", len(articles_full))
for art in articles_full:
    print(" ", art["slug"], "| cat:", art["category"], "| blocks:", len(art["bodyBlocks"]), "| cover:", art["coverImage"])
