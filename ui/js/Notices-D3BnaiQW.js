import { d as k, w as g, r as c, f as C, g as w, h as l, o as t, b as a, i as N, j as y, c as u, F as T, k as B, u as p, l as d, a as F, t as P, m as x, T as E, p as L } from "./vendor-vue-BgOQH8dC.js";
import { u as M } from "./EcommerceCalculator-CIJmnT15.js";
const V = { class: "content" }, $ = ["onClick"], b = ["innerHTML"], j = /* @__PURE__ */ k({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(m) {
    const i = m, { notices: n, dismissNotice: v } = M(), f = c({}), e = c(null);
    g(() => n.value.length, (r) => {
      e.value && (r > 0 ? (e.value.matches(":popover-open") && e.value.hidePopover(), e.value.showPopover()) : e.value.matches(":popover-open") && e.value.hidePopover());
    }), C(() => {
      n.value.length > 0 && e.value && e.value.showPopover();
    });
    const h = x(() => i.position.includes("right") ? "notice-right" : "notice-left");
    return (r, A) => {
      const _ = w("FontAwesomeIcon");
      return t(), l(L, { to: "body" }, [
        a("div", {
          id: "smartcut-notices",
          ref_key: "noticesEl",
          ref: e,
          class: "smartcut-content",
          popover: "manual"
        }, [
          N(E, {
            name: h.value,
            "move-class": "notice-move",
            tag: "div",
            class: d(["notices-container", i.position])
          }, {
            default: y(() => [
              (t(!0), u(T, null, B(p(n), (s) => (t(), u("div", {
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
                a("div", V, [
                  a("div", {
                    class: "message",
                    onClick: (o) => s.action()
                  }, P(s.message), 9, $),
                  a("div", {
                    class: "additional-info",
                    innerHTML: s.additional
                  }, null, 8, b)
                ]),
                s.persistent ? F("", !0) : (t(), l(_, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (o) => p(v)(s.id)
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
