const { initializeZodTranslations: y } = await import("./zod-error-map-DuHGJg29.js");
y();
const { initializeStaticRegistry: S } = await import("./static-class-registry-DG0MpQ7V.js");
S();
const { clearStorageOnceAboveThreshold: A, createLocalStorageAdapter: E } = await import("./version-utils-DJMibzAZ.js"), L = "version/checkout/current", _ = "version/checkout/last-clear", R = "4.0.58", P = "4.1.7";
{
  const a = E();
  A(
    P,
    R,
    L,
    _,
    a
  );
}
const { library: x } = await import("./vendor-fortawesome-C_yAXOw5.js").then((a) => a.r), { FontAwesomeIcon: I } = await import("./vendor-vue-XczpOw2V.js").then((a) => a.a4), { createApp: b } = await import("./vendor-vue-XczpOw2V.js").then((a) => a.a3), O = async () => {
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
      { faInfoCircle: f },
      { faPlusLarge: h },
      { faSprayCan: d },
      { faTrash: w },
      { faXmark: g }
    ] = await Promise.all([
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.f),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.a),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.b),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.c),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.d),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.e),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.g),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.h),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.i),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.j),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.k),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.l),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.m),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.n),
      import("./vendor-fortawesome-C_yAXOw5.js").then((t) => t.o)
    ]);
    x.add(
      g,
      c,
      e,
      h,
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
      f
    );
  } catch (a) {
    console.warn("Failed to load icons:", a.message);
  }
}, T = async () => {
  try {
    return await (await import("./i18n-CYUWq18B.js")).i18nextReady;
  } catch (a) {
    return console.warn("Failed to load i18n:", a.message), Promise.resolve();
  }
}, v = await import("./Launch-CPiAvAe9.js").then((a) => a.L), C = v.default;
let r = null, n = !1;
const F = async () => {
  if (!n) {
    n = !0;
    try {
      const a = document.querySelector("#smartcut-app");
      if (!a) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const o = a.getAttribute("data-type") || "";
      r = b(C, { type: o });
      const [, e] = await Promise.all([
        O(),
        T()
      ]);
      e && await e, r.component("FontAwesomeIcon", I), r.mount("#smartcut-app");
    } catch (a) {
      console.error("SmartCut mount error:", a);
    } finally {
      n = !1;
    }
  }
};
F();
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" }));
export {
  k as _,
  r as a,
  F as m
};
