import "./sb-preview/runtime.js";
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    n(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const _ of o.addedNodes)
          _.tagName === "LINK" && _.rel === "modulepreload" && n(_);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const o = {};
    return e.integrity && (o.integrity = e.integrity), e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? o.credentials = "include" : e.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function n(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const o = s(e);
    fetch(e.href, o);
  }
})();
const { createBrowserChannel: O } = __STORYBOOK_MODULE_CHANNELS__, { addons: c } = __STORYBOOK_MODULE_PREVIEW_API__, i = O({ page: "preview" });
c.setChannel(i);
window.__STORYBOOK_ADDONS_CHANNEL__ = i;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = i);
const d = {
  "./src/stories/JsonEditor.stories.ts": async () => import("./JsonEditor.stories-f034f392.js")
};
async function p(t) {
  return d[t]();
}
const { composeConfigs: l, PreviewWeb: E, ClientApi: w } = __STORYBOOK_MODULE_PREVIEW_API__, a = async () => {
  const t = await Promise.all([
    import("./config-f9b9a286.js"),
    import("./preview-62dcbc4f.js"),
    import("./preview-77b6f5c0.js"),
    import("./preview-a0b578d2.js"),
    import("./preview-dcac1b9a.js"),
    import("./preview-e1239275.js"),
    import("./preview-e44d9a9d.js"),
    import("./preview-dfe67e85.js"),
    import("./preview-a3e3581d.js"),
    import("./preview-53ee0a19.js")
  ]);
  return l(t);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new E();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new w({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: p, getProjectAnnotations: a });
//# sourceMappingURL=iframe.js.map
