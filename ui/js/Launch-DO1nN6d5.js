import { d as i, r as s, R as f, c as a, q as y, a as d, x as _, A as k, i as v, N as c, o as r } from "./vendor-vue-WkZl1F8L.js";
import { bt as h } from "./components-DaaD3Nlt.js";
const C = {
  key: 1,
  class: "error-message"
}, x = /* @__PURE__ */ i({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(p, { expose: l }) {
    const m = s(!1), o = s(null), u = f({
      wordpress: c(() => import("./WordPress-CVNcLLKt.js")),
      vanilla: c(() => import("./Vanilla-CCV5xi8Z.js"))
    }), e = p, t = a(() => {
      if (!e.type) return null;
      const n = e?.type?.toLowerCase();
      return u[n] || null;
    });
    return l({
      componentType: a(() => e.type),
      isComponentMounted: m,
      checkout: o
    }), (n, R) => t.value ? (r(), y(k(t.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: o
    }, null, 512)) : e.type ? (r(), d("div", C, " Invalid component type: " + v(e.type), 1)) : _("", !0);
  }
}), L = /* @__PURE__ */ h(x, [["__scopeId", "data-v-86786479"]]);
export {
  L as default
};
