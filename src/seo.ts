type SeoConfig = {
    title: string;
    description: string;
    canonical: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    schema?: Record<string, unknown> | null;
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([key, value]) => {
        element!.setAttribute(key, value);
    });
}

function upsertLink(rel: string, href: string) {
    let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

    if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
    }

    element.href = href;
}

function upsertSchema(id: string, schema?: Record<string, unknown> | null) {
    const existing = document.head.querySelector<HTMLScriptElement>(`script[data-seo-schema="${id}"]`);

    if (!schema) {
        existing?.remove();
        return;
    }

    const script = existing ?? document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoSchema = id;
    script.text = JSON.stringify(schema);

    if (!existing) {
        document.head.appendChild(script);
    }
}

export function applySeo(config: SeoConfig) {
    document.title = config.title;

    upsertMeta('meta[name="description"]', {
        name: 'description',
        content: config.description,
    });

    upsertMeta('meta[property="og:title"]', {
        property: 'og:title',
        content: config.ogTitle ?? config.title,
    });

    upsertMeta('meta[property="og:description"]', {
        property: 'og:description',
        content: config.ogDescription ?? config.description,
    });

    upsertMeta('meta[property="og:url"]', {
        property: 'og:url',
        content: config.canonical,
    });

    upsertMeta('meta[name="twitter:title"]', {
        name: 'twitter:title',
        content: config.twitterTitle ?? config.title,
    });

    upsertMeta('meta[name="twitter:description"]', {
        name: 'twitter:description',
        content: config.twitterDescription ?? config.description,
    });

    upsertLink('canonical', config.canonical);
    upsertSchema('page', config.schema);
}
