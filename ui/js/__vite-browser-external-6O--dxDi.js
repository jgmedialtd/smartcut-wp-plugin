const { initializeZodTranslations: P } = await import("./zod-error-map-GFKLwkAp.js");
P();
const { initializeStaticRegistry: x } = await import("./static-class-registry-BvYrlxDc.js");
x();
const { clearStorageOnceAboveThreshold: b, createLocalStorageAdapter: F } = await import("./version-utils-DJMibzAZ.js"), I = "version/checkout/current", T = "version/checkout/last-clear", O = "4.0.58", k = "4.2.3";
{
  const e = F();
  b(
    k,
    O,
    I,
    T,
    e
  );
}
const { library: H } = await import("./vendor-fortawesome-relhcbvc.js").then((e) => e.A), { FontAwesomeIcon: j } = await import("./vendor-vue-Tt3m9hlc.js").then((e) => e.a3), { createApp: q } = await import("./vendor-vue-Tt3m9hlc.js").then((e) => e.a2), z = async () => {
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
      { faInfoCircle: A },
      { faPlusLarge: R },
      { faSprayCan: v },
      { faTrash: E },
      { faUser: _ },
      { faXmark: C }
    ] = await Promise.all([
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.f),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.a),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.b),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.c),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.d),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.e),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.g),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.h),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.i),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.j),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.k),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.l),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.m),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.n),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.o),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.p),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.q),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.r),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.s),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.t),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.u),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.v),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.w),
      import("./vendor-fortawesome-relhcbvc.js").then((t) => t.x)
    ]);
    H.add(
      C,
      u,
      o,
      R,
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
      A,
      _
    );
  } catch (e) {
    console.warn("Failed to load icons:", e.message);
  }
}, M = async () => {
  try {
    return await (await import("./i18n-BEBY52oR.js")).i18nextReady;
  } catch (e) {
    return console.warn("Failed to load i18n:", e.message), Promise.resolve();
  }
}, N = await import("./Launch-Br9fQuik.js").then((e) => e.L), U = N.default;
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
      a = q(U, { type: r });
      const [, o] = await Promise.all([
        z(),
        M()
      ]);
      o && await o, a.component("FontAwesomeIcon", j);
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
