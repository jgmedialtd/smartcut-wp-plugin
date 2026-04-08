import { d as k, w as g, r, o as C, l as w, j as l, b as t, f as a, g as y, y as N, a as u, F as T, k as B, u as p, p as d, e as F, t as x, c as E, T as L, z as M } from "./vendor-vue-DyIrsOEK.js";
import { u as P } from "./EcommerceCalculator-Baq5iGGk.js";
const V = { class: "content" }, $ = ["onClick"], b = ["innerHTML"], I = /* @__PURE__ */ k({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(m) {
    const c = m, { notices: n, dismissNotice: v } = P(), f = r({}), e = r(null);
    g(() => n.value.length, (i) => {
      e.value && (i > 0 && !e.value.matches(":popover-open") ? e.value.showPopover() : i === 0 && e.value.matches(":popover-open") && e.value.hidePopover());
    }), C(() => {
      n.value.length > 0 && e.value && e.value.showPopover();
    });
    const _ = E(() => c.position.includes("right") ? "notice-right" : "notice-left");
    return (i, z) => {
      const h = w("FontAwesomeIcon");
      return t(), l(M, { to: "body" }, [
        a("div", {
          id: "smartcut-notices",
          ref_key: "noticesEl",
          ref: e,
          class: "smartcut-content",
          popover: "manual"
        }, [
          y(L, {
            name: _.value,
            "move-class": "notice-move",
            tag: "div",
            class: d(["notices-container", c.position])
          }, {
            default: N(() => [
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
                  }, x(s.message), 9, $),
                  a("div", {
                    class: "additional-info",
                    innerHTML: s.additional
                  }, null, 8, b)
                ]),
                s.persistent ? F("", !0) : (t(), l(h, {
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
  I as default
};
