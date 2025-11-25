import comp from "/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/login.html.vue"
const data = JSON.parse("{\"path\":\"/zombiecraft/login.html\",\"title\":\"皮肤站登录\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"PCL2\",\"slug\":\"pcl2\",\"link\":\"#pcl2\",\"children\":[]},{\"level\":2,\"title\":\"HMCL\",\"slug\":\"hmcl\",\"link\":\"#hmcl\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zombiecraft/login.md\"}")
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
