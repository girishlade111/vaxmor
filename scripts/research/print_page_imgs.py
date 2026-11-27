import json
d = json.loads(open('research/content/extracted/all-sections.json', encoding='utf-8').read())
for p in ['about-us', 'services-v1', 'services-v2', 'services-v3', 'pricing', 'blog', 'contact-v1', 'contact-v2', 'contact-v3']:
    print('===', p, '===')
    for i, s in enumerate(d[p]):
        imgs = [im['local'] for im in s['imgs'] if im['local']]
        uniq_imgs = list(dict.fromkeys(imgs))
        cls = s['class'][:45]
        print(f'  [{i}] {cls:45s} imgs={uniq_imgs[:5]}')
        if len(s['texts']) > 0:
            print('      texts:', s['texts'][:10])
