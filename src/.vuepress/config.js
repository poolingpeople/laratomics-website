module.exports = {
  base: '/oloid-website/',
  dest: 'docs',

  themeConfig: {
    repo: 'ion2s-gmbh/oloid-laravel-patternlib',
    lastUpdated: true,
    nav: [
      {
        text: 'Documentation',
        link: '/introduction/'
      }
    ],
    sidebar: [
      {
        title: 'Introduction',
        children: [
          ['/introduction/', 'What it is']
        ]
      },
      {
        title: 'Setup',
        children: [
          ['/setup/', 'Get started'],
          '/setup/configuration',
          '/setup/finish',
        ]
      },
      {
        title: 'Usage',
        children: [
          ['/usage/', 'Opening the workshop'],
          '/usage/dashboard',
          '/usage/create-pattern',
          '/usage/preview-pattern',
          '/usage/remove-pattern'
        ]
      }
    ]
  }
};