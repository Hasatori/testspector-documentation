const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/Hasatori/testspector-documentation/master/images/logo.svg',
    logoLink: 'https://www.testspector.com',
    title: "Testspector",
    githubUrl: 'https://github.com/Hasatori/Testspector',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/best-practices',
      '/plugin-architecture'
    ],
    collapsedNav: [],
    links: [
      { text: 'Jetbrains marketplace', link: 'https://plugins.jetbrains.com/plugin/16300-testspector' }
    ],
    frontline: false,
    ignoreIndex: true,
    title:"Testspector documentation",
  },
  siteMetadata: {
    title: 'Testspector documentation',
    description: 'Documentation for Jetbrains plugin Testspector',
    ogImage: null,
    docsLocation: 'https://github.com/Hasatori/testspector-documentation/tree/master/content',
    favicon: 'https://raw.githubusercontent.com/Hasatori/testspector-documentation/images/favicon.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Testspector documentation',
      short_name: 'Testspector',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
