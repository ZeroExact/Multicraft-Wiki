// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Multicraft 8 聆风世界',
  tagline: '服务器帮助手册与规章制度',
  favicon: 'img/wikilogo.ico',

  // Set the production url of your site here
  url: 'https://zeroexact.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Multicraft-Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zeroexact', // Usually your GitHub org/user name.
  projectName: 'Multicraft-Wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/ZeroExact/Multicraft-Wiki/tree/main'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Multicraft',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '开始',
          },
          // 搜索框
          {
            type: 'search',
            position: 'left',
          },
          {
            href: 'https://github.com/ZeroExact/Multicraft-Wiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '皮肤站',
            items: [
              {
                label: '点击前往',
                href: 'https://www.multicraft.icu/',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: '点击加入QQ群',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FB5paTblxk7_aQNQaw2FolsX4RoJxqV8&authKey=gZNKHN4B4R9sJrDc5gwJv7NTFMclOF1Vj%2B3dTXQ3oc11NP6nHz96RVb6DU3RzKex&noverify=0&group_code=96681597',
              },
              {
                label: '点击联系服主',
                href: 'https://wpa.qq.com/msgrd?v=3&uin=2675562079&site=Minecraft(%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C)%E4%B8%AD%E6%96%87%E8%AE%BA%E5%9D%9B&menu=yes&from=discuz',
              },
            ],
          },
          {
            title: '宣传帖地址',
            items: [
              {
                label: 'MCBBS 中文论坛',
                href: 'https://www.mcbbs.net/thread-1464887-1-1.html',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} Multicraft, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
  
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
          docsRouteBasePath: "/"
        },
      ],
    ],
};

module.exports = config;
