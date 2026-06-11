const { initializeZodTranslations: x } = await import("./zod-error-map-kT2szFol.js");
x();
const { initializeStaticRegistry: F } = await import("./static-class-registry-BndGRtse.js");
F();
const { clearStorageOnceAboveThreshold: I, createLocalStorageAdapter: T } = await import("./version-utils-B1dFJ3xe.js"), _ = "version/checkout/current", b = "version/checkout/last-clear", O = "4.0.58", k = "4.3.0";
{
  const e = T();
  I(
    k,
    O,
    _,
    b,
    e
  );
}
const { library: H } = await import("./vendor-fortawesome-DRpSFlIU.js").then((e) => e.A), { FontAwesomeIcon: q } = await import("./vendor-vue-QD0FJS8o.js").then((e) => e.a3), { createApp: N } = await import("./vendor-vue-QD0FJS8o.js").then((e) => e.a2), U = async () => {
  try {
    const [
      { faArrowsLeftRight: e },
      { faArrowsUpDown: r },
      { faExpand: o },
      { faPlusLarge: n },
      { faArrowUpRightFromSquare: s },
      { faCalculator: c },
      { faChevronLeft: m },
      { faChevronRight: p },
      { faChevronsLeft: l },
      { faChevronsRight: h },
      { faCube: f },
      { faExpand: u },
      { faFilePdf: d },
      { faFileLines: w },
      { faFiles: g },
      { faHammer: L },
      { faHammerBrush: y },
      { faImage: A },
      { faInfoCircle: R },
      { faPlusLarge: S },
      { faSprayCan: E },
      { faTrash: v },
      { faUser: C },
      { faXmark: P }
    ] = await Promise.all([
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.f),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.a),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.b),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.c),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.d),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.e),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.g),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.h),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.i),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.j),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.k),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.l),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.m),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.n),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.o),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.p),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.q),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.r),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.s),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.t),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.u),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.v),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.w),
      import("./vendor-fortawesome-DRpSFlIU.js").then((t) => t.x)
    ]);
    H.add(
      P,
      u,
      o,
      S,
      n,
      e,
      r,
      s,
      m,
      p,
      l,
      h,
      f,
      d,
      w,
      L,
      y,
      E,
      A,
      g,
      v,
      c,
      R,
      C
    );
  } catch (e) {
    console.warn("Failed to load icons:", e.message);
  }
}, V = async () => {
  try {
    return await (await import("./i18n-Dj6izb6_.js")).i18nextReady;
  } catch (e) {
    return console.warn("Failed to load i18n:", e.message), Promise.resolve();
  }
}, z = await import("./Launch-NSW_K3VG.js").then((e) => e.L), D = z.default;
let a = null, i = !1;
const K = async () => {
  if (!i) {
    i = !0;
    try {
      const e = document.querySelector("#smartcut-app");
      if (!e) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const r = e.getAttribute("data-type") || "";
      a = N(D, { type: r });
      const [, o] = await Promise.all([
        U(),
        V()
      ]);
      o && await o, a.component("FontAwesomeIcon", q);
      const { vTooltip: n } = await import("./vTooltip-BnbzR9FD.js");
      a.directive("tooltip", n), a.mount("#smartcut-app");
    } catch (e) {
      console.error("SmartCut mount error:", e);
    } finally {
      i = !1;
    }
  }
};
K();
export {
  a as app,
  K as mount
};
