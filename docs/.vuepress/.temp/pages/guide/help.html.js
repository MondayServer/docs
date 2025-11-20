import comp from "/workspaces/docs/docs/.vuepress/.temp/pages/guide/help.html.vue"
const data = JSON.parse("{\"path\":\"/guide/help.html\",\"title\":\"帮助我们\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"jdnjk\",\"slug\":\"jdnjk\",\"link\":\"#jdnjk\",\"children\":[]}],\"git\":{\"updatedTime\":1737983937000,\"contributors\":[{\"name\":\"jdnjk\",\"username\":\"jdnjk\",\"email\":\"2394058778@qq.com\",\"commits\":2,\"url\":\"https://github.com/jdnjk\"}],\"changelog\":[{\"hash\":\"0edcda8b1010474df34b03f1ab22a04180860abc\",\"time\":1737983937000,\"email\":\"2394058778@qq.com\",\"author\":\"jdnjk\",\"message\":\"咕咕\"},{\"hash\":\"67f434af0b1ac777f5c271254971aa48b5d2fff0\",\"time\":1737981927000,\"email\":\"2394058778@qq.com\",\"author\":\"jdnjk\",\"message\":\"更新\"}]},\"filePathRelative\":\"guide/help.md\"}")
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
