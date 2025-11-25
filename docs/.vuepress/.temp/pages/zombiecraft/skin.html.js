import comp from "/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/skin.html.vue"
const data = JSON.parse("{\"path\":\"/zombiecraft/skin.html\",\"title\":\"皮肤站使用教程\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"注册\",\"slug\":\"注册\",\"link\":\"#注册\",\"children\":[]},{\"level\":2,\"title\":\"验证邮箱\",\"slug\":\"验证邮箱\",\"link\":\"#验证邮箱\",\"children\":[]},{\"level\":2,\"title\":\"上传皮肤\",\"slug\":\"上传皮肤\",\"link\":\"#上传皮肤\",\"children\":[]},{\"level\":2,\"title\":\"使用皮肤\",\"slug\":\"使用皮肤\",\"link\":\"#使用皮肤\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"zombiecraft/skin.md\"}")
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
