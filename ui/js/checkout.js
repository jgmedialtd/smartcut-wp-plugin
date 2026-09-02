const { initializeZodTranslations: c } = await import("./zod-error-map-C6xdmkW9.js");
c();
const { initializeStaticRegistry: i } = await import("./static-class-registry-frontend-B4PV-c--.js");
i();
const { clearStorageOnceAboveThreshold: s, createLocalStorageAdapter: l } = await import("./version-utils-DJMibzAZ.js"), u = "version/checkout/current", p = "version/checkout/last-clear", m = "4.0.58", d = "4.6.4";
{
  const t = l();
  s(
    d,
    m,
    u,
    p,
    t
  );
}
const { Icon: w } = await import("./index-Cn_P_Cu_.js"), { createApp: y } = await import("./vendor-vue-CrNGqS0k.js").then((t) => t.a2), h = async () => {
  try {
    return await (await import("./i18n-DGE8ywV5.js")).i18nextReady;
  } catch (t) {
    return console.warn("Failed to load i18n:", t.message), Promise.resolve();
  }
}, S = await import("./Launch-9LoYYNsk.js").then((t) => t.L), A = S.default;
let o = null, e = !1;
const R = async () => {
  if (!e) {
    e = !0;
    try {
      const t = document.querySelector("#smartcut-app");
      if (!t) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const n = t.getAttribute("data-type") || "";
      o = y(A, { type: n });
      const a = await h();
      a && await a, o.component("Icon", w);
      const { vTooltip: r } = await import("./vTooltip-BnbzR9FD.js");
      o.directive("tooltip", r), o.mount("#smartcut-app");
    } catch (t) {
      console.error("SmartCut mount error:", t);
    } finally {
      e = !1;
    }
  }
};
R();
export {
  o as app,
  R as mount
};
