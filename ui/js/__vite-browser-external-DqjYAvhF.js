const { initializeZodTranslations: C } = await import("./zod-error-map-GFKLwkAp.js");
C();
const { initializeStaticRegistry: P } = await import("./static-class-registry-BV9eFGSs.js");
P();
const { clearStorageOnceAboveThreshold: b, createLocalStorageAdapter: x } = await import("./version-utils-DJMibzAZ.js"), F = "version/checkout/current", I = "version/checkout/last-clear", T = "4.0.58", O = "4.2.0";
{
  const e = x();
  b(
    O,
    T,
    F,
    I,
    e
  );
}
const { library: k } = await import("./vendor-fortawesome-lgMTL6gF.js").then((e) => e.z), { FontAwesomeIcon: z } = await import("./vendor-vue-BgOQH8dC.js").then((e) => e.a3), { createApp: H } = await import("./vendor-vue-BgOQH8dC.js").then((e) => e.a2), j = async () => {
  try {
    const [
      { faArrowsLeftRight: e },
      { faArrowsUpDown: r },
      { faExpand: o },
      { faPlusLarge: n },
      { faArrowUpRightFromSquare: s },
      { faCalculator: c },
      { faChevronLeft: m },
      { faChevronRight: l },
      { faChevronsLeft: p },
      { faChevronsRight: h },
      { faCube: f },
      { faExpand: u },
      { faFilePdf: d },
      { faFileLines: w },
      { faFiles: g },
      { faHammer: y },
      { faHammerBrush: L },
      { faImage: S },
      { faInfoCircle: R },
      { faPlusLarge: A },
      { faSprayCan: v },
      { faTrash: E },
      { faXmark: _ }
    ] = await Promise.all([
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.f),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.a),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.b),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.c),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.d),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.e),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.g),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.h),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.i),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.j),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.k),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.l),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.m),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.n),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.o),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.p),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.q),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.r),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.s),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.t),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.u),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.v),
      import("./vendor-fortawesome-lgMTL6gF.js").then((t) => t.w)
    ]);
    k.add(
      _,
      u,
      o,
      A,
      n,
      e,
      r,
      s,
      m,
      l,
      p,
      h,
      f,
      d,
      w,
      y,
      L,
      v,
      S,
      g,
      E,
      c,
      R
    );
  } catch (e) {
    console.warn("Failed to load icons:", e.message);
  }
}, q = async () => {
  try {
    return await (await import("./i18n-BkCqM2rg.js")).i18nextReady;
  } catch (e) {
    return console.warn("Failed to load i18n:", e.message), Promise.resolve();
  }
}, M = await import("./Launch-BRH4wqOZ.js").then((e) => e.L), N = M.default;
let a = null, i = !1;
const V = async () => {
  if (!i) {
    i = !0;
    try {
      const e = document.querySelector("#smartcut-app");
      if (!e) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const r = e.getAttribute("data-type") || "";
      a = H(N, { type: r });
      const [, o] = await Promise.all([
        j(),
        q()
      ]);
      o && await o, a.component("FontAwesomeIcon", z);
      const { vTooltip: n } = await import("./vTooltip-CtqGHCST.js");
      a.directive("tooltip", n), a.mount("#smartcut-app");
    } catch (e) {
      console.error("SmartCut mount error:", e);
    } finally {
      i = !1;
    }
  }
};
V();
const B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" }));
export {
  B as _,
  a,
  V as m
};
