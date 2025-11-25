import comp from "/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/login.html.vue"
const data = JSON.parse("{\"path\":\"/zombiecraft/login.html\",\"title\":\"皮肤站登录\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"PCL2\",\"slug\":\"pcl2\",\"link\":\"#pcl2\",\"children\":[]},{\"level\":2,\"title\":\"HMCL\",\"slug\":\"hmcl\",\"link\":\"#hmcl\",\"children\":[]}],\"git\":{\"updatedTime\":1764089179000,\"contributors\":[{\"name\":\"PaperXiang\",\"username\":\"PaperXiang\",\"email\":\"89193024+PaperXiang@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/PaperXiang\"}],\"changelog\":[{\"hash\":\"8342d1470dabfda059955af98ce01780a646b952\",\"time\":1764089179000,\"email\":\"89193024+PaperXiang@users.noreply.github.com\",\"author\":\"Paper_Xiang\",\"message\":\"login update\"}]},\"filePathRelative\":\"zombiecraft/login.md\"}")
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
