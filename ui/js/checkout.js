const { initializeZodTranslations: c } = await import("./zod-error-map-fpxZzbhF.js");
c();
const { initializeStaticRegistry: i } = await import("./static-class-registry-frontend-NNtiykXn.js");
i();
const { clearStorageOnceAboveThreshold: s, createLocalStorageAdapter: l } = await import("./version-utils-DJMibzAZ.js"), u = "version/checkout/current", p = "version/checkout/last-clear", m = "4.0.58", d = "4.5.0";
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
const { Icon: w } = await import("./index-BYdfCLOt.js"), { createApp: y } = await import("./vendor-vue-CeWGZ1lm.js").then((t) => t.a2), h = async () => {
  try {
    return await (await import("./i18n-gSInbpCa.js")).i18nextReady;
  } catch (t) {
    return console.warn("Failed to load i18n:", t.message), Promise.resolve();
  }
}, S = await import("./Launch-_29Ox10h.js").then((t) => t.L), A = S.default;
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
