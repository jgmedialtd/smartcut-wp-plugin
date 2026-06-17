import { d as k, k as g, l as C, r as N, o as t, j as c, a, m as y, p as T, c as l, F as w, f as x, u, g as p, t as B, b as P, T as E, q as L, s as d, x as M } from "./vendor-vue-DcIxm_xE.js";
import { u as V } from "./EcommerceCalculator-xTmaI3ss.js";
const $ = { class: "content" }, b = ["onClick"], F = ["innerHTML"], q = /* @__PURE__ */ k({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(m) {
    const i = m, { notices: n, dismissNotice: v } = V(), f = d({}), e = d(null);
    g(() => n.value.length, (r) => {
      e.value && (r > 0 ? (e.value.matches(":popover-open") && e.value.hidePopover(), e.value.showPopover()) : e.value.matches(":popover-open") && e.value.hidePopover());
    }), C(() => {
      n.value.length > 0 && e.value && e.value.showPopover();
    });
    const h = M(() => i.position.includes("right") ? "notice-right" : "notice-left");
    return (r, H) => {
      const _ = N("Icon");
      return t(), c(L, { to: "body" }, [
        a("div", {
          id: "smartcut-notices",
          ref_key: "noticesEl",
          ref: e,
          class: "smartcut-content",
          popover: "manual"
        }, [
          y(E, {
            name: h.value,
            "move-class": "notice-move",
            tag: "div",
            class: p(["notices-container", i.position])
          }, {
            default: T(() => [
              (t(!0), l(w, null, x(u(n), (s) => (t(), l("div", {
                key: s.id,
                ref_for: !0,
                ref: (o) => {
                  o && (f.value[s.id] = o);
                },
                class: p([
                  "notice",
                  `notice--${s.type}`
                ])
              }, [
                a("div", $, [
                  a("div", {
                    class: "message",
                    onClick: (o) => s.action()
                  }, B(s.message), 9, b),
                  a("div", {
                    class: "additional-info",
                    innerHTML: s.additional
                  }, null, 8, F)
                ]),
                s.persistent ? P("", !0) : (t(), c(_, {
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
  q as default
};
