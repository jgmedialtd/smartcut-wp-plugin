import { d as _, G as i, x as p, j as y, H as f, c as d, t as k, b as v, s as l, C as u, o as m } from "./vendor-vue-D6ZfZC0P.js";
const h = {
  key: 1,
  class: "error-message"
}, C = /* @__PURE__ */ _({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(t, { expose: c }) {
    const o = l(!1), n = l(null), a = i({
      wordpress: u(() => import("./WordPress-BUpsthX3.js")),
      vanilla: u(() => import("./Vanilla-D2h50ts_.js").then((s) => s.V))
    }), e = t, r = p(() => {
      if (!e.type) return null;
      const s = e?.type?.toLowerCase();
      return a[s] || null;
    });
    return c({
      componentType: p(() => e.type),
      isComponentMounted: o,
      checkout: n
    }), (s, L) => r.value ? (m(), y(f(r.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: n
    }, null, 512)) : e.type ? (m(), d("div", h, " Invalid component type: " + k(e.type), 1)) : v("", !0);
  }
}), g = (t, c) => {
  const o = t.__vccOpts || t;
  for (const [n, a] of c)
    o[n] = a;
  return o;
}, x = /* @__PURE__ */ g(C, [["__scopeId", "data-v-86786479"]]), j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: x }, Symbol.toStringTag, { value: "Module" }));
export {
  j as L,
  g as _
};
