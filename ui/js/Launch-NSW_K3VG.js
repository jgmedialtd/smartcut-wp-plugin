import { d as _, m as f, a as p, c as l, o as u, b as i, r as y, e as d, t as k, f as v, g as m } from "./vendor-vue-QD0FJS8o.js";
const h = {
  key: 1,
  class: "error-message"
}, C = /* @__PURE__ */ _({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(t, { expose: s }) {
    const o = m(!1), n = m(null), a = f({
      wordpress: p(() => import("./WordPress-cmNxPlDD.js")),
      vanilla: p(() => import("./Vanilla-P5O8PTu8.js").then((c) => c.V))
    }), e = t, r = l(() => {
      if (!e.type) return null;
      const c = e?.type?.toLowerCase();
      return a[c] || null;
    });
    return s({
      componentType: l(() => e.type),
      isComponentMounted: o,
      checkout: n
    }), (c, b) => r.value ? (u(), i(y(r.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: n
    }, null, 512)) : e.type ? (u(), d("div", h, " Invalid component type: " + k(e.type), 1)) : v("", !0);
  }
}), g = (t, s) => {
  const o = t.__vccOpts || t;
  for (const [n, a] of s)
    o[n] = a;
  return o;
}, L = /* @__PURE__ */ g(C, [["__scopeId", "data-v-86786479"]]), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: L }, Symbol.toStringTag, { value: "Module" }));
export {
  w as L,
  g as _
};
