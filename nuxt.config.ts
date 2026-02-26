// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.API_BASE_URL ||
        'https://www.ibc-csapagyak.hu/restapi/public',
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/app.css'],
  ssr: true,
  app: {
    head: {
      title: 'Precision Bearing: Minőségi Csapágyak és Lineártechnika',
      htmlAttrs: {
        lang: 'hu',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'NSK, IBC, INA, FAG, NTN, THK, Hiwin, CPC, Bosch Rexroth, UKF és GMN prémium csapágyak, golyósorsók és lineárvezetők forgalmazása, javítása és felújítása. Személyre szabott megoldásaink segítenek optimalizálni a főorsók és szervomotorok teljesítményét, hogy a gépek mindig maximális hatékonysággal működjenek.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.alkuszom.info' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"',
        },
      ],
      script: [
        {
          hid: 'clarity',
          type: 'text/javascript',
          children: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "p75v58i0zi");
          `,
        },
      ],
    },
  },

  modules: ['@nuxt/image', '@nuxtjs/sitemap', '@nuxt/content'],

  site: {
    url: 'www.ibc-csapagyak.hu',
    trailingSlash: true,
  },

  sitemap: {
    sources: ['/api/sitemap'],
  },
})
