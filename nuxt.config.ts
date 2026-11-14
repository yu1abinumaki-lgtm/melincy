export default defineNuxtConfig({
  compatibilityDate: '2026-11-13',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', '~/assets/css/responsive.css'],
  typescript: { strict: true },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Melincy - Евгений Трофимович',
      meta: [
        { name: 'theme-color', content: '#0c0b11' },
        { name: 'description', content: 'Евгений Трофимович, Melincy. Фуллстек-разработчик: интерфейсы, серверная логика и веб-продукты.' },
        { property: 'og:title', content: 'Melincy - Фуллстек-разработчик' },
        { property: 'og:description', content: 'Интерфейс. Логика. Всё связано. Персональное портфолио Евгения Трофимовича.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  nitro: { prerender: { routes: ['/'], crawlLinks: true, failOnError: true } }
})
