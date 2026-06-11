import { d as g, w as k, h as C, L as w, o as t, b as r, j as a, i as y, E as N, e as l, F as T, C as B, u, y as d, t as E, f as F, V as L, T as P, g as p, c as V } from "./vendor-vue-QD0FJS8o.js";
import { a as x } from "./EcommerceCalculator-ClNeqZHE.js";
const M = { class: "content" }, $ = ["onClick"], b = ["innerHTML"], j = /* @__PURE__ */ g({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(m) {
    const i = m, { notices: n, dismissNotice: v } = x(), f = p({}), e = p(null);
    k(() => n.value.length, (c) => {
      e.value && (c > 0 ? (e.value.matches(":popover-open") && e.value.hidePopover(), e.value.showPopover()) : e.value.matches(":popover-open") && e.value.hidePopover());
    }), C(() => {
      n.value.length > 0 && e.value && e.value.showPopover();
    });
    const h = V(() => i.position.includes("right") ? "notice-right" : "notice-left");
    return (c, A) => {
      const _ = w("FontAwesomeIcon");
      return t(), r(P, { to: "body" }, [
        a("div", {
          id: "smartcut-notices",
          ref_key: "noticesEl",
          ref: e,
          class: "smartcut-content",
          popover: "manual"
        }, [
          y(L, {
            name: h.value,
            "move-class": "notice-move",
            tag: "div",
            class: d(["notices-container", i.position])
          }, {
            default: N(() => [
              (t(!0), l(T, null, B(u(n), (s) => (t(), l("div", {
                key: s.id,
                ref_for: !0,
                ref: (o) => {
                  o && (f.value[s.id] = o);
                },
                class: d([
                  "notice",
                  `notice--${s.type}`
                ])
              }, [
                a("div", M, [
                  a("div", {
                    class: "message",
                    onClick: (o) => s.action()
                  }, E(s.message), 9, $),
                  a("div", {
                    class: "additional-info",
                    innerHTML: s.additional
                  }, null, 8, b)
                ]),
                s.persistent ? F("", !0) : (t(), r(_, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (o) => u(v)(s.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ], 512)
      ]);
    };
  }
});
export {
  j as default
};
