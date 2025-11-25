import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
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
            '/zombiecraft/tutorial.md'
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
  ],
  bundler: viteBundler(),
})
