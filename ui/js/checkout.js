const { initializeZodTranslations: y } = await import("./zod-error-map-DO2sPmY2.js");
y();
const { initializeStaticRegistry: A } = await import("./static-class-registry-ChAE-fbo.js");
A();
const { clearStorageOnceAboveThreshold: L, createLocalStorageAdapter: S } = await import("./version-utils-DJMibzAZ.js"), E = "version/checkout/current", R = "version/checkout/last-clear", I = "4.0.58", P = "4.1.0";
{
  const a = S();
  L(
    P,
    I,
    E,
    R,
    a
  );
}
const { library: x } = await import("./vendor-fortawesome-CcY6mUuF.js").then((a) => a.r), { FontAwesomeIcon: C } = await import("./vendor-vue-h1I-4LEU.js").then((a) => a.a4), { createApp: T } = await import("./vendor-vue-h1I-4LEU.js").then((a) => a.a3), _ = async () => {
  try {
    const [
      { faArrowsLeftRight: a },
      { faArrowsUpDown: e },
      { faExpand: o },
      { faPlusLarge: i },
      { faCalculator: s },
      { faExpand: c },
      { faFiles: l },
      { faHammer: m },
      { faHammerBrush: p },
      { faImage: u },
      { faInfoCircle: h },
      { faPlusLarge: f },
      { faSprayCan: d },
      { faTrash: w },
      { faXmark: g }
    ] = await Promise.all([
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.f),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.a),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.b),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.c),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.d),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.e),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.g),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.h),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.i),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.j),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.k),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.l),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.m),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.n),
      import("./vendor-fortawesome-CcY6mUuF.js").then((t) => t.o)
    ]);
    x.add(
      g,
      c,
      o,
      f,
      i,
      a,
      e,
      m,
      p,
      d,
      u,
      l,
      w,
      s,
      h
    );
  } catch (a) {
    console.warn("Failed to load icons:", a.message);
  }
}, F = async () => {
  try {
    return await (await import("./i18n-b56ZOQhn.js")).i18nextReady;
  } catch (a) {
    return console.warn("Failed to load i18n:", a.message), Promise.resolve();
  }
}, O = await import("./Launch-C8DaHa5j.js").then((a) => a.L), b = O.default;
let r = null, n = !1;
const k = async () => {
  if (!n) {
    n = !0;
    try {
      const a = document.querySelector("#smartcut-app");
      if (!a) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const e = a.getAttribute("data-type") || "";
      r = T(b, { type: e });
      const [, o] = await Promise.all([
        _(),
        F()
      ]);
      o && await o, r.component("FontAwesomeIcon", C), r.mount("#smartcut-app");
    } catch (a) {
      console.error("SmartCut mount error:", a);
    } finally {
      n = !1;
    }
  }
};
k();
export {
  r as app,
  k as mount
};
