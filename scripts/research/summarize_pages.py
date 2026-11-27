import json
import os

pages = [
    'home.json', 'home-v2.json', 'home-v3.json',
    'about-us.json', 'services-v1.json', 'services-v2.json', 'services-v3.json',
    'pricing.json', 'blog.json', 'contact-v1.json', 'contact-v2.json', 'contact-v3.json',
    '401.json', '404.json', 'testimonial__marcus-b.json', 'instructions.json', 'licenses.json', 'changelog.json'
]
for p in pages:
    d = json.loads(open('research/content/' + p, encoding='utf-8').read())
    print('===', p, '===')
    for i, s in enumerate(d['sections']):
        hs = [h['text'] for h in s['headings'][:3]]
        tag = s['tag']
        cls = s['class']
        print(f'  [{i}] <{tag}.{cls}> headings={hs} imgs={len(s["images"])} links={len(s["links"])}')
