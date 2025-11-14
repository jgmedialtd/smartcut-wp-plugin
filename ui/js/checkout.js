const { initializeZodTranslations: y } = await import("./zod-error-map-K15BIP3s.js");
y();
const { initializeStaticRegistry: A } = await import("./static-class-registry-D8Buzmlc.js");
A();
const { clearStorageOnceAboveThreshold: S, createLocalStorageAdapter: E } = await import("./version-utils-DJMibzAZ.js"), L = "version/checkout/current", R = "version/checkout/last-clear", I = "4.0.41", P = "4.0.48";
{
  const a = E();
  S(
    P,
    I,
    L,
    R,
    a
  );
}
const { library: x } = await import("./vendor-fortawesome-DNIDlNf7.js").then((a) => a.r), { FontAwesomeIcon: C } = await import("./vendor-vue-WkZl1F8L.js").then((a) => a.a0), { createApp: F } = await import("./vendor-vue-WkZl1F8L.js").then((a) => a.$), T = async () => {
  try {
    const [
      { faArrowsLeftRight: a },
      { faArrowsUpDown: o },
      { faExpand: e },
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
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.f),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.a),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.b),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.c),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.d),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.e),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.g),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.h),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.i),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.j),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.k),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.l),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.m),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.n),
      import("./vendor-fortawesome-DNIDlNf7.js").then((t) => t.o)
    ]);
    x.add(
      g,
      c,
      e,
      f,
      i,
      a,
      o,
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
}, _ = async () => {
  try {
    return await (await import("./components-DaaD3Nlt.js").then((o) => o.bF)).i18nextReady;
  } catch (a) {
    return console.warn("Failed to load i18n:", a.message), Promise.resolve();
  }
}, b = await import("./Launch-DO1nN6d5.js"), O = b.default;
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
      const o = a.getAttribute("data-type") || "";
      r = F(O, { type: o });
      const [, e] = await Promise.all([
        T(),
        _()
      ]);
      e && await e, r.component("FontAwesomeIcon", C), r.mount("#smartcut-app");
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
