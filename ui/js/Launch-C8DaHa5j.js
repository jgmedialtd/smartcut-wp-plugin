import { d as _, m as f, r as p, c as l, a as i, b as y, e as d, f as k, t as v, g as u, o as m } from "./vendor-vue-h1I-4LEU.js";
const h = {
  key: 1,
  class: "error-message"
}, C = /* @__PURE__ */ _({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(t, { expose: c }) {
    const o = p(!1), n = p(null), s = f({
      wordpress: u(() => import("./WordPress-Cox7ZS82.js")),
      vanilla: u(() => import("./Vanilla-DUDhZ9iE.js"))
    }), e = t, a = l(() => {
      if (!e.type) return null;
      const r = e?.type?.toLowerCase();
      return s[r] || null;
    });
    return c({
      componentType: l(() => e.type),
      isComponentMounted: o,
      checkout: n
    }), (r, b) => a.value ? (m(), i(k(a.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: n
    }, null, 512)) : e.type ? (m(), y("div", h, " Invalid component type: " + v(e.type), 1)) : d("", !0);
  }
}), g = (t, c) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of c)
    o[n] = s;
  return o;
}, L = /* @__PURE__ */ g(C, [["__scopeId", "data-v-86786479"]]), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: L }, Symbol.toStringTag, { value: "Module" }));
export {
  w as L,
  g as _
};
