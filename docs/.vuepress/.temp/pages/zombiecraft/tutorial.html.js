import comp from "/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/tutorial.html.vue"
const data = JSON.parse("{\"path\":\"/zombiecraft/tutorial.html\",\"title\":\"玩法教学\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"饮水系统\",\"slug\":\"饮水系统\",\"link\":\"#饮水系统\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zombiecraft/tutorial.md\"}")
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
