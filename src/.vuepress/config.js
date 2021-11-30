const { description } = require('../../package')
const { config } = require("vuepress-theme-hope")

module.exports = config({
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue Router Next',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    readingDir: [ 'api'],
    hostname: "router.back-some.cc",
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'Migration',
        link: '/migration/'
      }
    ],
    sidebar: [
      [ '/introduction.md', 'Introduction' ],
      [ '/installation.md', 'Installation' ],
      {
        title: 'Essentiels',
        children: [
          ['/guide/', 'Pour commencer'],
          ['/guide/essentials/dynamic-matching.md', 'Correspondance d\'itinéraire dynamique'],
          ['/guide/essentials/route-matching-syntax.md', 'Syntaxe de correspondance des routes'],
          ['/guide/essentials/nested-routes.md', 'Routes imbriquées'],
          ['/guide/essentials/navigation.md', 'Navigation programmatique'],
          ['/guide/essentials/named-routes.md', 'Routes nommées'],
          ['/guide/essentials/named-views.md', 'Vues nommées'],
          ['/guide/essentials/redirect-and-alias.md', 'Redirection et alias'],
          ['/guide/essentials/passing-props.md', 'Passer des props aux composants de l\'itinéraire'],
          ['/guide/essentials/history-mode.md', 'Différents modes d\'histoire'],
        ]
      },
      {
        title: 'Avancé',
        chikldren: [
          [ '/guide/advanced/navigation-guards.md', 'Protection de la navigation'],
          [ '/guide/advanced/meta.md', 'Route Meta Fields'],
          [ '/guide/advanced/data-fetching.md', 'Extraction de données'],
          [ '/guide/advanced/composition-api.md', 'Composition API'],
          [ '/guide/advanced/transitions.md', 'Transitions'],
          [ '/guide/advanced/scroll-behavior.md', 'Comportement du défilement'],
          [ '/guide/advanced/lazy-loading.md', 'Routes de chargement paresseux'],
          [ '/guide/advanced/extending-router-link.md', 'Extension de RouterLink'],
          [ '/guide/advanced/navigation-failures.md', 'Défaillances de la navigation'],
          [ '/guide/advanced/dynamic-routing.md', 'Routage dynamique'],
        ]
      },

    ],

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'reading-progress',
  ]
})
