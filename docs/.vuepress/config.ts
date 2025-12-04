import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
export default defineUserConfig({
  
  lang: 'zh-CN',
  title: 'Monday 帮助文档',
  description: 'Monday官方服务器文档😋',

  theme: defaultTheme({
    repo: 'MondayServer/docs',
    docsRepo: 'MondayServer/docs',
    docsDir: 'docs',
    
    navbar: [
      {
        text: '总览',
        children: [
          '/guide/README.md',
          '/guide/gfq.md',
          '/guide/help.md'
        ],
      },
            {
        text: '服务器',
        children: [
          '/zombiecraft/README.md'
        ],
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '教程',
          children: [
            '/guide/README.md',
            '/guide/gfq.md',
            '/guide/help.md'
          ],
        },
      ],
            '/zombiecraft/': [
        {
          text: '教程',
          children: [
            '/zombiecraft/README.md',
            '/zombiecraft/login.md',
            '/zombiecraft/skin.md',
            '/zombiecraft/tutorial.md',
            '/zombiecraft/updatelog.md'
          ],
        },
      ],
    },
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),

  plugins: [
    sitemapPlugin({
      hostname: 'https://docs.monday-ovo.top',
    }),
    docsearchPlugin({
    appId: 'VXFWRUIH25',
    apiKey: '328e575a3431fb48ea09026db382e3ee',
    indexName: 'monday-ovo-eu',
    locales: {
      '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                clearButtonTitle: '清除查询条件',
                clearButtonAriaLabel: '清除查询条件',
                closeButtonText: '取消',
                closeButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                poweredByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
  ],
  
  bundler: viteBundler(),
})
