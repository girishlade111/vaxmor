import json
import os
import re
from bs4 import BeautifulSoup

HTML_DIR = "research/reference/html"
ASSETS = json.loads(open("research/manifests/assets.json", encoding="utf-8").read())
URL_TO_ASSET = {a["sourceUrl"]: a for a in ASSETS}

def resolve_img(img_tag):
    if not img_tag:
        return None
    src = img_tag.get("src", "")
    if src in URL_TO_ASSET:
        return URL_TO_ASSET[src]["deliveryPath"]
    srcset = img_tag.get("srcset", "")
    for part in reversed([p.strip().split(" ")[0] for p in srcset.split(",") if p.strip()]):
        if part in URL_TO_ASSET:
            return URL_TO_ASSET[part]["deliveryPath"]
    return src

def soup_of(fname):
    return BeautifulSoup(open(os.path.join(HTML_DIR, fname), encoding="utf-8").read(), "lxml")

# 1. Print asset inventory cleanly
print("=== ASSETS INVENTORY ===")
for a in sorted(ASSETS, key=lambda x: x["deliveryPath"]):
    print(f"{a['deliveryPath']} | {a['originalWidth']}x{a['originalHeight']} | alpha={a['hasTransparency']} | {a['originalFilename']}")

# 2. Extract Services CMS
print("\n=== SERVICES ===")
service_slugs = [
    "wealth-management",
    "investment-portfolios",
    "private-banking",
    "retirement-planning",
    "business-banking",
    "lending-and-mortgages",
]
services_data = []
for idx, slug in enumerate(service_slugs, 1):
    s = soup_of(f"services__{slug}.html")
    h1 = s.find("h1").get_text(" ", strip=True) if s.find("h1") else ""
    hero_p = s.select_one(".section-banner p")
    summary = hero_p.get_text(" ", strip=True) if hero_p else ""
    about_sec = s.select_one(".section-service-about") or s.select(".section-banner ~ section")[0]
    about_ps = [p.get_text(" ", strip=True) for p in about_sec.find_all("p")]
    about_imgs = [resolve_img(im) for im in about_sec.find_all("img")]
    about_svgs = [str(sv) for sv in about_sec.find_all("svg")]
    services_data.append({
        "number": idx,
        "slug": slug,
        "name": h1,
        "summary": summary,
        "aboutParagraphs": about_ps,
        "aboutImages": about_imgs,
        "iconSvg": about_svgs[0] if about_svgs else None,
    })
    print(f"Service {idx}: {slug} -> {h1} | imgs={about_imgs}")

# 3. Extract Articles CMS
print("\n=== ARTICLES ===")
article_slugs = [
    "how-much-cash-should-you-really-keep",
    "what-interest-rate-changes-mean-for-you-in-2026",
    "seven-questions-to-ask-before-choosing-a-financial-advisor",
    "diversification-explained-without-the-jargon",
    "planning-retirement-in-your-forties-five-steps",
    "cash-flow-habits-of-fast-growing-businesses",
]
articles_data = []
for idx, slug in enumerate(article_slugs, 1):
    s = soup_of(f"blog__{slug}.html")
    h1 = s.find("h1").get_text(" ", strip=True) if s.find("h1") else ""
    imgs = [resolve_img(im) for im in s.select("main img")[:3]]
    rich = s.select_one(".w-richtext")
    rich_html = str(rich) if rich else ""
    callout = s.select_one(".article-callout, .sidebar-callout, .article-aside")
    print(f"Article {idx}: {slug} -> {h1} | mainImgs={imgs[:2]}")
    articles_data.append({
        "order": idx,
        "slug": slug,
        "title": h1,
        "images": imgs,
        "richHtml": rich_html,
    })

# 4. Extract Testimonials CMS
print("\n=== TESTIMONIALS ===")
test_slugs = ["marcus-b", "patricia-h", "daniel-k", "james-p", "maria-s", "thomas-w", "karen-d", "robert-m"]
testimonials_data = []
for idx, slug in enumerate(test_slugs, 1):
    s = soup_of(f"testimonial__{slug}.html")
    h1 = s.find("h1").get_text(" ", strip=True) if s.find("h1") else ""
    banner = s.select_one(".section-banner")
    banner_ps = [p.get_text(" ", strip=True) for p in banner.find_all("p")] if banner else []
    banner_imgs = [resolve_img(im) for im in banner.find_all("img")] if banner else []
    print(f"Testimonial {idx}: {slug} -> {h1} | ps={banner_ps[:2]} | imgs={banner_imgs}")
    testimonials_data.append({
        "order": idx,
        "slug": slug,
        "clientName": h1,
        "paragraphs": banner_ps,
        "images": banner_imgs,
    })

os.makedirs("research/content/extracted", exist_ok=True)
open("research/content/extracted/services.json", "w", encoding="utf-8").write(json.dumps(services_data, indent=2))
open("research/content/extracted/articles.json", "w", encoding="utf-8").write(json.dumps(articles_data, indent=2))
open("research/content/extracted/testimonials.json", "w", encoding="utf-8").write(json.dumps(testimonials_data, indent=2))
