import { d as _, B as i, r as p, c as l, j as y, a as f, e as d, C as k, t as v, h as u, b as m } from "./vendor-vue-9U543O5d.js";
const h = {
  key: 1,
  class: "error-message"
}, C = /* @__PURE__ */ _({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(t, { expose: s }) {
    const o = p(!1), n = p(null), a = i({
      wordpress: u(() => import("./WordPress-L1UCK6vc.js")),
      vanilla: u(() => import("./Vanilla-BLiO1VYv.js").then((c) => c.V))
    }), e = t, r = l(() => {
      if (!e.type) return null;
      const c = e?.type?.toLowerCase();
      return a[c] || null;
    });
    return s({
      componentType: l(() => e.type),
      isComponentMounted: o,
      checkout: n
    }), (c, b) => r.value ? (m(), y(k(r.value), {
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
}, L = /* @__PURE__ */ g(C, [["__scopeId", "data-v-86786479"]]), B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: L }, Symbol.toStringTag, { value: "Module" }));
export {
  B as L,
  g as _
};
