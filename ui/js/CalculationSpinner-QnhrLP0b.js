import { _ as i } from "./Launch-BnHg2-HI.js";
import { o as s, c, n as r, e as l, b as a, a as n, t as o } from "./vendor-vue-D6ZfZC0P.js";
const u = {
  name: "CalculationSpinner",
  props: {
    size: {
      type: Number,
      default: 100
    },
    showNumber: {
      type: Boolean,
      default: !0
    },
    number: {
      type: Number,
      default: 0
    },
    complete: {
      type: Boolean,
      default: !1
    }
  }
}, m = { id: "spinner" }, d = ["width", "height"], h = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function y(x, t, e, f, w, z) {
  return s(), c("div", m, [
    e.complete ? a("", !0) : (s(), c("svg", {
      key: 0,
      class: "loading",
      style: r({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, [...t[0] || (t[0] = [
      l('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, d)),
    e.complete ? (s(), c("svg", {
      key: 1,
      class: "complete",
      style: r({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...t[1] || (t[1] = [
      n("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : a("", !0),
    e.showNumber ? (s(), c("div", h, o(e.number), 1)) : a("", !0)
  ]);
}
const p = /* @__PURE__ */ i(u, [["render", y]]);
export {
  p as default
};
