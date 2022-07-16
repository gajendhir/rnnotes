// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Notes',
  tagline: 'Startup, Build, Release and Upgrade',
  url: 'https://gajendhir.github.io',
  baseUrl: '/rn-notes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icnlogo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gajendhir', // Usually your GitHub org/user name.
  projectName: 'rnnotes', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gajendhir/rnnotes',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Native Notes',
        logo: {
          alt: 'data spec',
          src: 'img/dslogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Introduction',
          },          
          {
            type: 'doc',
            docId: 'basics/the-env',
            position: 'left',
            label: 'Environment',
          },
          {
            type: 'doc',
            docId: 'npm/the-npm',
            position: 'left',
            label: 'Packages',
          },
          // {
          //   to: '#', 
          //   label: 'Blog', 
          //   position: 'left'},
          {
            href: 'https://github.com/gajendhir/rnnotes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Dev Env',
                to: '/docs/category/development-environment',
              },
              {
                label: 'Packages',
                to: '/docs/category/package-manager',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: '#',
          //     },
          //     {
          //       label: 'Discord',
          //       href: '#',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: '#',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '#',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gajendhir/rnnotes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Data Spec, India. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
