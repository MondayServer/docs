export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"介绍"} }],
  ["/guide/gfq.html", { loader: () => import(/* webpackChunkName: "guide_gfq.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/guide/gfq.html.js"), meta: {"title":"联系与交流"} }],
  ["/guide/help.html", { loader: () => import(/* webpackChunkName: "guide_help.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/guide/help.html.js"), meta: {"title":"帮助我们"} }],
  ["/zombiecraft/", { loader: () => import(/* webpackChunkName: "zombiecraft_index.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/index.html.js"), meta: {"title":"ZombieCraft 亡者黎明服务器"} }],
  ["/zombiecraft/login.html", { loader: () => import(/* webpackChunkName: "zombiecraft_login.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/login.html.js"), meta: {"title":"皮肤站登录"} }],
  ["/zombiecraft/rules.html", { loader: () => import(/* webpackChunkName: "zombiecraft_rules.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/rules.html.js"), meta: {"title":"服务器规则"} }],
  ["/zombiecraft/skin.html", { loader: () => import(/* webpackChunkName: "zombiecraft_skin.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/zombiecraft/skin.html.js"), meta: {"title":"皮肤站使用教程"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/workspaces/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
