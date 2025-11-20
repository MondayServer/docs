import comp from "/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/index.html.vue"
const data = JSON.parse("{\"path\":\"/zombiecraft/\",\"title\":\"ZombieCraft 亡者黎明服务器\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"关于\",\"slug\":\"关于\",\"link\":\"#关于\",\"children\":[]},{\"level\":2,\"title\":\"登录方式\",\"slug\":\"登录方式\",\"link\":\"#登录方式\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zombiecraft/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
