import { d as _, E as y, r as p, m as l, h as i, c as f, a as d, G as k, t as v, y as u, o as m } from "./vendor-vue-Tt3m9hlc.js";
const h = {
  key: 1,
  class: "error-message"
}, C = /* @__PURE__ */ _({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(t, { expose: s }) {
    const o = p(!1), n = p(null), a = y({
      wordpress: u(() => import("./WordPress-CrcENGCl.js")),
      vanilla: u(() => import("./Vanilla-DH-SnX5c.js").then((c) => c.V))
    }), e = t, r = l(() => {
      if (!e.type) return null;
      const c = e?.type?.toLowerCase();
      return a[c] || null;
    });
    return s({
      componentType: l(() => e.type),
      isComponentMounted: o,
      checkout: n
    }), (c, x) => r.value ? (m(), i(k(r.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: n
    }, null, 512)) : e.type ? (m(), f("div", h, " Invalid component type: " + v(e.type), 1)) : d("", !0);
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
