import { d as _, m as v, j as a, b as t, f as o, g as k, q as h, a as i, F as C, k as g, u as c, p as r, r as N, e as y, t as T, c as B, T as F, s as w } from "./vendor-vue-XczpOw2V.js";
import { u as x } from "./EcommerceCalculator-B91faSfl.js";
const L = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, V = { class: "content" }, $ = ["onClick"], b = ["innerHTML"], j = /* @__PURE__ */ _({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(l) {
    const n = l, { notices: d, dismissNotice: m } = x(), u = N({}), p = B(() => n.position.includes("right") ? "notice-right" : "notice-left");
    return (A, H) => {
      const f = v("FontAwesomeIcon");
      return t(), a(w, { to: "body" }, [
        o("div", L, [
          k(F, {
            name: p.value,
            "move-class": "notice-move",
            tag: "div",
            class: r(["notices-container", n.position])
          }, {
            default: h(() => [
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
