import json
from bs4 import BeautifulSoup

arts = json.loads(open("research/content/extracted/articles-full.json", encoding="utf-8").read())

enriched = []
for i, a in enumerate(arts, 1):
    slug = a["slug"]
    sp = BeautifulSoup(open(f"research/reference/html/blog__{slug}.html", encoding="utf-8").read(), "lxml")
    sum_el = sp.select_one(".blog-detail-summary p:last-child")
    summary = sum_el.get_text(" ", strip=True) if sum_el else ""
    cta_title = sp.select_one(".blog-detail-cta-text p:first-child")
    cta_desc = sp.select_one(".blog-detail-cta-text p:last-child")
    md = sp.find("meta", attrs={"name": "description"})
    meta_desc = md.get("content", "") if md else ""

    # Clean body blocks (strip trailing disclaimer italic if present, store separately)
    blocks = []
    disclaimer = "This article is general information, not personal financial advice. The value of investments can go down as well as up."
    for b in a["bodyBlocks"]:
        txt = b["text"]
        if "general information, not personal financial advice" in txt:
            disclaimer = txt
            continue
        blocks.append({"tag": b["tag"], "text": txt})

    enriched.append({
        "id": slug,
        "slug": slug,
        "order": i,
        "title": a["title"],
        "category": a["category"],
        "publishedAt": a["publishedAt"],
        "coverImage": a["coverImage"],
        "heroImage": a["heroImage"] or a["coverImage"],
        "metaDescription": meta_desc,
        "summary": summary,
        "advisorCta": {
            "title": cta_title.get_text(" ", strip=True) if cta_title else "Talk it through",
            "description": cta_desc.get_text(" ", strip=True) if cta_desc else "Book a call with an advisor.",
            "href": "/contact-v1",
        },
        "disclaimer": disclaimer,
        "bodyBlocks": blocks,
        "relatedSlugs": [
            "how-much-cash-should-you-really-keep",
            "what-interest-rate-changes-mean-for-you-in-2026",
            "seven-questions-to-ask-before-choosing-a-financial-advisor",
        ],
    })

ts_out = """export interface ArticleBodyBlock {
  tag: 'h2' | 'h3' | 'p' | 'ul' | 'ol';
  text: string;
}

export interface ArticleRecord {
  id: string;
  slug: string;
  order: number;
  title: string;
  category: string;
  publishedAt: string;
  coverImage: string;
  heroImage: string;
  metaDescription: string;
  summary: string;
  advisorCta: {
    title: string;
    description: string;
    href: string;
  };
  disclaimer: string;
  bodyBlocks: ArticleBodyBlock[];
  relatedSlugs: string[];
}

export const ARTICLES: ArticleRecord[] = """ + json.dumps(enriched, indent=2) + ";\n"

open("src/content/articles.ts", "w", encoding="utf-8").write(ts_out)
print("Wrote src/content/articles.ts with", len(enriched), "articles")
for e in enriched:
    print(" ", e["slug"], "| summary:", e["summary"][:60], "| cta:", e["advisorCta"]["description"][:50])
