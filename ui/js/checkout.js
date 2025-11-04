const { initializeZodTranslations: i } = await import("./zod-error-map-BoOlmhg_.js");
i();
const { initializeStaticRegistry: l } = await import("./static-class-registry-Vhg_tGWa.js");
l();
const { shouldClearStorage: u } = await import("./version-utils-Ds2b9_6L.js"), n = "checkout-app-version", o = "4.0.6";
{
  const t = localStorage.getItem(n);
  if (u(o, t)) {
    console.log(`[Checkout] Major version update detected (${t} → ${o}), clearing localStorage`);
    const r = o;
    localStorage.clear(), localStorage.setItem(n, r), console.log("[Checkout] localStorage cleared successfully");
  } else
    localStorage.setItem(n, o), t && console.log(`[Checkout] Version ${o} (from ${t || "first run"})`);
}
const { library: m } = await import("./vendor-pIOdV8fk.js").then((t) => t.aj), e = await import("./vendor-pIOdV8fk.js").then((t) => t.ak), a = await import("./vendor-pIOdV8fk.js").then((t) => t.al), { FontAwesomeIcon: p } = await import("./vendor-vue-U4l9SdFr.js").then((t) => t.a0), { createApp: f } = await import("./vendor-vue-U4l9SdFr.js").then((t) => t.$), { i18nextReady: g } = await import("./components-CrBxvcev.js").then((t) => t.bA);
m.add(
  a.faXmark,
  a.faExpand,
  e.faExpand,
  a.faPlusLarge,
  e.faPlusLarge,
  e.faArrowsLeftRight,
  e.faArrowsUpDown,
  a.faHammer,
  a.faHammerBrush,
  a.faSprayCan,
  a.faImage,
  a.faFiles,
  a.faTrash,
  a.faCalculator
);
const w = await import("./Launch-BMJaySSA.js"), d = w.default;
let s = null, c = !1;
const h = async () => {
  if (!c) {
    c = !0;
    try {
      const t = document.querySelector("#smartcut-app");
      if (!t) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const r = t.getAttribute("data-type") || "";
      s = f(d, { type: r }), await g, s.component("FontAwesomeIcon", p), s.mount("#smartcut-app");
    } catch (t) {
      console.error("SmartCut mount error:", t);
    } finally {
      c = !1;
    }
  }
};
h();
export {
  s as app,
  h as mount
};
