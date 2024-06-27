const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/galeria"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/letoltheto-anyagok"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/szolgaltatasok"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/galeria"
            },
            {
                "loc": "/letoltheto-anyagok"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/ajanlatkeres"
            },
            {
                "loc": "/szolgaltatasok"
            },
            {
                "loc": "/rolunk"
            },
            {
                "loc": "/"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
