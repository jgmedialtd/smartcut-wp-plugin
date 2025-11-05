const { initializeZodTranslations: i } = await import("./zod-error-map-Lyw2u48X.js");
i();
const { initializeStaticRegistry: l } = await import("./static-class-registry-WGWmsjPh.js");
l();
const { shouldClearStorage: m } = await import("./version-utils-Ds2b9_6L.js"), n = "checkout-app-version", o = "4.0.23";
{
  const t = localStorage.getItem(n);
  if (m(o, t)) {
    console.log(`[Checkout] Major version update detected (${t} → ${o}), clearing localStorage`);
    const r = o;
    localStorage.clear(), localStorage.setItem(n, r), console.log("[Checkout] localStorage cleared successfully");
  } else
    localStorage.setItem(n, o), t && console.log(`[Checkout] Version ${o} (from ${t || "first run"})`);
}
const { library: u } = await import("./vendor-4AnxBRif.js").then((t) => t.ak), e = await import("./vendor-4AnxBRif.js").then((t) => t.al), a = await import("./vendor-4AnxBRif.js").then((t) => t.am), { FontAwesomeIcon: p } = await import("./vendor-vue-V1I1Po2P.js").then((t) => t.a0), { createApp: f } = await import("./vendor-vue-V1I1Po2P.js").then((t) => t.$), { i18nextReady: g } = await import("./components-BBIVWlbL.js").then((t) => t.bA);
u.add(
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
const w = await import("./Launch-CEAglY2h.js"), d = w.default;
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
