export const themeData = JSON.parse("{\"repo\":\"MondayServer/docs\",\"docsRepo\":\"MondayServer/docs\",\"docsDir\":\"docs\",\"navbar\":[{\"text\":\"总览\",\"children\":[\"/guide/README.md\",\"/guide/gfq.md\",\"/guide/help.md\"]},{\"text\":\"服务器\",\"children\":[\"/zombiecraft/README.md\"]}],\"sidebar\":{\"/guide/\":[{\"text\":\"教程\",\"children\":[\"/guide/README.md\",\"/guide/gfq.md\",\"/guide/help.md\"]}],\"/zombiecraft/\":[{\"text\":\"教程\",\"children\":[\"/zombiecraft/README.md\",\"/zombiecraft/login.md\",\"/zombiecraft/skin.md\"]}]},\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换颜色模式\",\"toggleSidebar\":\"切换侧边栏\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"contributors\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
