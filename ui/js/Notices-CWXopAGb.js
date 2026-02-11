import { d as _, L as v, a, o as t, j as o, i as h, J as k, b as i, F as C, q as g, u as c, x as r, r as N, e as y, t as T, c as x, U as B, T as F } from "./vendor-vue-h1I-4LEU.js";
import { a as L } from "./EcommerceCalculator-ROHa1p5B.js";
const w = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, V = { class: "content" }, $ = ["onClick"], b = ["innerHTML"], j = /* @__PURE__ */ _({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(l) {
    const n = l, { notices: d, dismissNotice: m } = L(), u = N({}), p = x(() => n.position.includes("right") ? "notice-right" : "notice-left");
    return (A, H) => {
      const f = v("FontAwesomeIcon");
      return t(), a(F, { to: "body" }, [
        o("div", w, [
          h(B, {
            name: p.value,
            "move-class": "notice-move",
            tag: "div",
            class: r(["notices-container", n.position])
          }, {
            default: k(() => [
              (t(!0), i(C, null, g(c(d), (s) => (t(), i("div", {
                key: s.id,
                ref_for: !0,
                ref: (e) => {
                  e && (u.value[s.id] = e);
                },
                class: r([
                  "notice",
                  `notice--${s.type}`
                ])
              }, [
                o("div", V, [
                  o("div", {
                    class: "message",
                    onClick: (e) => s.action()
                  }, T(s.message), 9, $),
                  o("div", {
                    class: "additional-info",
                    innerHTML: s.additional
                  }, null, 8, b)
                ]),
                s.persistent ? y("", !0) : (t(), a(f, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (e) => c(m)(s.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
});
export {
  j as default
};
