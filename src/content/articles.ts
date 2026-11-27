export interface ArticleBodyBlock {
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

export const ARTICLES: ArticleRecord[] = [
  {
    "id": "how-much-cash-should-you-really-keep",
    "slug": "how-much-cash-should-you-really-keep",
    "order": 1,
    "title": "How Much Cash Should You Really Keep?",
    "category": "Saving",
    "publishedAt": "November 18, 2026",
    "coverImage": "/assets/graphics/app/6afd141f81e51878ec0aedff_6afd11d9a4691909cb0cba1c_woman-using-smartphone-2-1.webp",
    "heroImage": "/assets/graphics/app/6afd141f81e51878ec0aedff_6afd11d9a4691909cb0cba1c_woman-using-smartphone-2-1.webp",
    "metaDescription": "How much cash should you keep in savings? A practical guide to sizing your emergency fund, where to hold it and when the rest is better invested for growth.",
    "summary": "In short",
    "advisorCta": {
      "title": "Talk it through",
      "description": "An advisor can size your cash buffer in one call.",
      "href": "/contact-v1"
    },
    "disclaimer": "This article is general information, not personal financial advice. The value of investments can go down as well as up.",
    "bodyBlocks": [
      {
        "tag": "p",
        "text": "It is the question we hear most from new clients, and the answer is rarely the one they expect. Cash feels safe, but holding far more than you need is one of the most common and least visible ways wealth erodes over time."
      },
      {
        "tag": "h2",
        "text": "Start with your monthly essentials"
      },
      {
        "tag": "p",
        "text": "Add up what you must pay every month regardless of circumstances: housing, utilities, insurance, food and debt repayments. That number, not your total spending, is the foundation of your emergency fund."
      },
      {
        "tag": "h2",
        "text": "Three to six months is a range, not a rule"
      },
      {
        "tag": "p",
        "text": "A salaried employee with a stable job and a working partner may be comfortable with three months of essentials. A self-employed professional or a single-income household should usually aim closer to six, sometimes more."
      },
      {
        "tag": "h2",
        "text": "Keep it accessible, but working"
      },
      {
        "tag": "p",
        "text": "Your buffer belongs in an easy-access savings account, not in a current account earning nothing. Shopping around for the rate can make a meaningful difference over a few years."
      },
      {
        "tag": "h2",
        "text": "Then put the rest to work"
      },
      {
        "tag": "p",
        "text": "Money you will not need for five years or more is usually better invested than held in cash, where inflation slowly reduces what it can buy. Your advisor can help decide how much belongs in each bucket."
      }
    ],
    "relatedSlugs": [
      "how-much-cash-should-you-really-keep",
      "what-interest-rate-changes-mean-for-you-in-2026",
      "seven-questions-to-ask-before-choosing-a-financial-advisor"
    ]
  },
  {
    "id": "what-interest-rate-changes-mean-for-you-in-2026",
    "slug": "what-interest-rate-changes-mean-for-you-in-2026",
    "order": 2,
    "title": "What Interest Rate Changes Mean for You in 2026",
    "category": "Markets",
    "publishedAt": "November 18, 2026",
    "coverImage": "/assets/images/media/6afd141f81e51878ec0aee02_6afd1241bca7125b3b3239eb_document-signing-scene-1.webp",
    "heroImage": "/assets/images/media/6afd141f81e51878ec0aee02_6afd1241bca7125b3b3239eb_document-signing-scene-1.webp",
    "metaDescription": "What interest rate changes in 2026 mean for your savings, mortgage and investments, explained in plain language by Vaxmor advisors, with what to do next.",
    "summary": "In short",
    "advisorCta": {
      "title": "Talk it through",
      "description": "An advisor can size your cash buffer in one call.",
      "href": "/contact-v1"
    },
    "disclaimer": "This article is general information, not personal financial advice. The value of investments can go down as well as up.",
    "bodyBlocks": [
      {
        "tag": "p",
        "text": "Every central bank announcement brings a wave of headlines, but the effect on your own finances depends on what you hold. Here is how rate changes typically flow through to savers, borrowers and investors."
      },
      {
        "tag": "h2",
        "text": "Savers"
      },
      {
        "tag": "p",
        "text": "When rates fall, easy-access savings rates usually follow within weeks. Fixed-term accounts lock in a rate for a set period, which can be useful if you expect further cuts and will not need the money."
      },
      {
        "tag": "h2",
        "text": "Borrowers"
      },
      {
        "tag": "p",
        "text": "Tracker and variable mortgages respond quickly. Fixed-rate borrowers are protected until their deal ends, which makes the remortgage date the moment that matters most. Start reviewing options three to six months before it arrives."
      },
      {
        "tag": "h2",
        "text": "Investors"
      },
      {
        "tag": "p",
        "text": "Bond prices tend to rise when rates fall, and some sectors of the share market react strongly to rate expectations. A diversified portfolio is designed so that no single rate decision determines your outcome."
      },
      {
        "tag": "h2",
        "text": "What not to do"
      },
      {
        "tag": "p",
        "text": "Avoid making large changes in reaction to a single announcement. Markets usually price in expected decisions well before they happen, so the surprise, not the decision itself, drives movement."
      },
      {
        "tag": "p",
        "text": "General information only, not personal financial advice. Past performance is not a reliable indicator of future results."
      }
    ],
    "relatedSlugs": [
      "how-much-cash-should-you-really-keep",
      "what-interest-rate-changes-mean-for-you-in-2026",
      "seven-questions-to-ask-before-choosing-a-financial-advisor"
    ]
  },
  {
    "id": "seven-questions-to-ask-before-choosing-a-financial-advisor",
    "slug": "seven-questions-to-ask-before-choosing-a-financial-advisor",
    "order": 3,
    "title": "Seven Questions to Ask Before Choosing a Financial Advisor",
    "category": "Advice",
    "publishedAt": "November 18, 2026",
    "coverImage": "/assets/images/media/6afd141f81e51878ec0aee06_6afd139d0cf70e9f0fda8954_professional-meeting-scene-6-1.webp",
    "heroImage": "/assets/images/media/6afd141f81e51878ec0aee06_6afd139d0cf70e9f0fda8954_professional-meeting-scene-6-1.webp",
    "metaDescription": "Seven questions to ask before choosing a financial advisor, from how they are paid to who you will speak to, so you can compare firms with confidence.",
    "summary": "In short",
    "advisorCta": {
      "title": "Talk it through",
      "description": "An advisor can size your cash buffer in one call.",
      "href": "/contact-v1"
    },
    "disclaimer": "This article is general information, not personal financial advice. The value of investments can go down as well as up.",
    "bodyBlocks": [
      {
        "tag": "p",
        "text": "Choosing an advisor is a long-term decision. These seven questions help you understand how someone works, how they are paid and whether their incentives line up with yours."
      },
      {
        "tag": "h2",
        "text": "1. How are you paid?"
      },
      {
        "tag": "p",
        "text": "Fixed fees, a percentage of assets and commission each create different incentives. Ask for the total annual cost in money, not only as a percentage."
      },
      {
        "tag": "h2",
        "text": "2. Are you independent?"
      },
      {
        "tag": "p",
        "text": "An independent advisor can recommend products from across the market. A restricted advisor works with a limited range. Both can be right for you, but you should know which one you are speaking to."
      },
      {
        "tag": "h2",
        "text": "3. Who will I actually speak to?"
      },
      {
        "tag": "p",
        "text": "Find out whether you will have one named advisor or a rotating team, and how quickly you can reach them."
      },
      {
        "tag": "h2",
        "text": "4. How will you measure progress?"
      },
      {
        "tag": "p",
        "text": "Good advisors measure progress against your goals, not against a market index you never chose."
      },
      {
        "tag": "h2",
        "text": "5. How often will we review my plan?"
      },
      {
        "tag": "p",
        "text": "At least once a year, and whenever your life changes significantly."
      },
      {
        "tag": "h2",
        "text": "6. What happens to my money if your firm closes?"
      },
      {
        "tag": "p",
        "text": "Client assets should be held separately with a regulated custodian."
      },
      {
        "tag": "h2",
        "text": "7. Can I leave easily?"
      },
      {
        "tag": "p",
        "text": "Ask about exit fees and how long a transfer usually takes."
      },
      {
        "tag": "p",
        "text": "General information only. Always check that an advisor is authorised by your national financial regulator."
      }
    ],
    "relatedSlugs": [
      "how-much-cash-should-you-really-keep",
      "what-interest-rate-changes-mean-for-you-in-2026",
      "seven-questions-to-ask-before-choosing-a-financial-advisor"
    ]
  },
  {
    "id": "diversification-explained-without-the-jargon",
    "slug": "diversification-explained-without-the-jargon",
    "order": 4,
    "title": "Diversification, Explained Without the Jargon",
    "category": "Investing",
    "publishedAt": "November 18, 2026",
    "coverImage": "/assets/images/media/6afd142081e51878ec0aee0e_6afd1343a5ab669ee9940a13_financial-analytics-business-setting-1.webp",
    "heroImage": "/assets/images/media/6afd142081e51878ec0aee0e_6afd1343a5ab669ee9940a13_financial-analytics-business-setting-1.webp",
    "metaDescription": "Diversification explained without the jargon: how spreading money across companies, regions and asset types protects your portfolio, and where it stops.",
    "summary": "In short",
    "advisorCta": {
      "title": "Talk it through",
      "description": "An advisor can size your cash buffer in one call.",
      "href": "/contact-v1"
    },
    "disclaimer": "This article is general information, not personal financial advice. The value of investments can go down as well as up.",
    "bodyBlocks": [
      {
        "tag": "p",
        "text": "Put simply, diversification means not relying on any single investment to do all the work. When one part of a portfolio struggles, another part is often holding steady or rising."
      },
      {
        "tag": "h2",
        "text": "Across companies"
      },
      {
        "tag": "p",
        "text": "Owning hundreds of companies through a fund means one firm's bad year barely registers. Owning five individual shares means it can define your year."
      },
      {
        "tag": "h2",
        "text": "Across regions"
      },
      {
        "tag": "p",
        "text": "Economies move at different speeds. Spreading money across markets reduces your dependence on any one country's fortunes or currency."
      },
      {
        "tag": "h2",
        "text": "Across asset types"
      },
      {
        "tag": "p",
        "text": "Shares, bonds, property and cash behave differently in the same conditions. Blending them smooths the ride, though it does not remove every bump."
      },
      {
        "tag": "h2",
        "text": "What diversification cannot do"
      },
      {
        "tag": "p",
        "text": "It cannot prevent losses during a broad market fall, and it will never let you capture the full gain of the single best performer. Its purpose is to make your outcome more dependable, not spectacular."
      },
      {
        "tag": "h2",
        "text": "Rebalancing keeps it working"
      },
      {
        "tag": "p",
        "text": "Over time, winners grow and your mix drifts. Rebalancing once or twice a year brings the portfolio back to the level of risk you chose."
      },
      {
        "tag": "p",
        "text": "General information only, not personal advice. Investments can fall as well as rise and you may get back less than you invest."
      }
    ],
    "relatedSlugs": [
      "how-much-cash-should-you-really-keep",
      "what-interest-rate-changes-mean-for-you-in-2026",
      "seven-questions-to-ask-before-choosing-a-financial-advisor"
    ]
  },
  {
    "id": "planning-retirement-in-your-forties-five-steps",
    "slug": "planning-retirement-in-your-forties-five-steps",
    "order": 5,
    "title": "Planning Retirement in Your Forties: Five Steps",
    "category": "Retirement",
    "publishedAt": "November 18, 2026",
    "coverImage": "/assets/images/media/6afd142081e51878ec0aee11_6afd13c06e639d605fb54cb7_focused-desk-work-1-1.webp",
    "heroImage": "/assets/images/media/6afd142081e51878ec0aee11_6afd13c06e639d605fb54cb7_focused-desk-work-1-1.webp",
    "metaDescription": "Planning retirement in your forties: five practical steps, from finding old pensions to raising contributions, that make the biggest long-term difference.",
    "summary": "In short",
    "advisorCta": {
      "title": "Talk it through",
      "description": "An advisor can size your cash buffer in one call.",
      "href": "/contact-v1"
    },
    "disclaimer": "This article is general information, not personal financial advice. The value of investments can go down as well as up.",
    "bodyBlocks": [
      {
        "tag": "p",
        "text": "In your forties, retirement is close enough to feel real and far enough away for good decisions to compound. These five steps tend to make the biggest difference."
      },
      {
        "tag": "h2",
        "text": "1. Find every pension you have"
      },
      {
        "tag": "p",
        "text": "Most people have changed jobs several times. Track down old workplace pensions and decide whether consolidating them would reduce fees and simplify management."
      },
      {
        "tag": "h2",
        "text": "2. Put a number on retirement"
      },
      {
        "tag": "p",
        "text": "Estimate the yearly income you will need, in today's money. A vague goal is hard to save for; a specific one becomes a monthly plan."
      },
      {
        "tag": "h2",
        "text": "3. Raise contributions with every pay rise"
      },
      {
        "tag": "p",
        "text": "Increasing your contribution each time your salary grows means you rarely feel the difference in take-home pay."
      },
      {
        "tag": "h2",
        "text": "4. Check your investment mix"
      },
      {
        "tag": "p",
        "text": "With twenty years to go, most people can afford to keep a meaningful share in growth investments. Being too cautious too early is a common and costly mistake."
      },
      {
        "tag": "h2",
        "text": "5. Review once a year"
      },
      {
        "tag": "p",
        "text": "A short annual review keeps your plan aligned with your income, family and goals as they change."
      },
      {
        "tag": "p",
        "text": "General information only, not personal financial advice. Pension and tax rules vary by country and can change."
      }
    ],
    "relatedSlugs": [
      "how-much-cash-should-you-really-keep",
      "what-interest-rate-changes-mean-for-you-in-2026",
      "seven-questions-to-ask-before-choosing-a-financial-advisor"
    ]
  },
  {
    "id": "cash-flow-habits-of-fast-growing-businesses",
    "slug": "cash-flow-habits-of-fast-growing-businesses",
    "order": 6,
    "title": "Cash Flow Habits of Fast-Growing Businesses",
    "category": "Business",
    "publishedAt": "November 18, 2026",
    "coverImage": "/assets/images/media/6afd142081e51878ec0aee14_6afd13ce1163da4bbf1f561f_professional-analysis-1-1.webp",
    "heroImage": "/assets/images/media/6afd142081e51878ec0aee14_6afd13ce1163da4bbf1f561f_professional-analysis-1-1.webp",
    "metaDescription": "Cash flow habits of fast-growing businesses, from thirteen-week forecasts to faster invoicing, that help companies keep growing without a cash crunch.",
    "summary": "In short",
    "advisorCta": {
      "title": "Talk it through",
      "description": "An advisor can size your cash buffer in one call.",
      "href": "/contact-v1"
    },
    "disclaimer": "This article is general information, not personal financial advice. The value of investments can go down as well as up.",
    "bodyBlocks": [
      {
        "tag": "p",
        "text": "Growth consumes cash. More stock, more staff and longer customer payment terms all arrive before the revenue does. The businesses that grow smoothly tend to share a handful of habits."
      },
      {
        "tag": "h2",
        "text": "They forecast thirteen weeks ahead"
      },
      {
        "tag": "p",
        "text": "A rolling weekly forecast shows a shortfall a quarter before it happens, when there is still time to act calmly."
      },
      {
        "tag": "h2",
        "text": "They invoice immediately"
      },
      {
        "tag": "p",
        "text": "Invoices go out the day work is delivered, with clear terms and simple ways to pay. Every day saved on collection is cash you do not have to borrow."
      },
      {
        "tag": "h2",
        "text": "They separate operating and reserve cash"
      },
      {
        "tag": "p",
        "text": "A dedicated reserve account, often in an interest-bearing sweep, stops tax and payroll money from being spent by accident."
      },
      {
        "tag": "h2",
        "text": "They arrange credit before they need it"
      },
      {
        "tag": "p",
        "text": "A facility agreed in a strong month costs less and comes with better terms than one requested in a difficult month."
      },
      {
        "tag": "h2",
        "text": "They review payment terms yearly"
      },
      {
        "tag": "p",
        "text": "Supplier and customer terms drift over time. A yearly review often releases more working capital than any loan."
      },
      {
        "tag": "p",
        "text": "General information only, not financial or tax advice. Speak to a business specialist about your company's circumstances."
      }
    ],
    "relatedSlugs": [
      "how-much-cash-should-you-really-keep",
      "what-interest-rate-changes-mean-for-you-in-2026",
      "seven-questions-to-ask-before-choosing-a-financial-advisor"
    ]
  }
];
