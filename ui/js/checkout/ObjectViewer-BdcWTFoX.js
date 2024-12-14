import { _ as m } from "./Launch-Bnfs2PvE.js";
import { j as n, k as a, F as y, l as _, t as c, v as d, p as h, A as g } from "./main-DOIjCRBz.js";
const j = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: !0
    },
    paths: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.data.forEach((e, p) => {
      this.expanded[p] = !0;
    });
  },
  methods: {
    toggle(e) {
      this.expanded[e] = !this.expanded[e];
    },
    getValueType(e) {
      return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
    },
    formatValue(e) {
      return e === null ? "null" : e === void 0 ? "undefined" : typeof e == "boolean" ? e.toString() : typeof e != "object" ? typeof e == "string" ? `'${e}'` : String(e) : Array.isArray(e) ? `[ ${e.map((t) => typeof t == "object" && t !== null ? `{ ${Object.entries(t).map(([o, i]) => `${o}: ${typeof i == "string" ? `'${i}'` : i}`).join(", ")} }` : typeof t == "string" ? `'${t}'` : String(t)).join(", ")} ]` : `{ ${Object.entries(e).map(([r, t]) => Array.isArray(t) ? `${r}: ${this.formatValue(t)}` : `${r}: ${typeof t == "string" ? `'${t}'` : t}`).join(", ")} }`;
    }
  }
}, $ = { class: "smartcut-object-viewer" }, b = ["onClick"], A = { class: "toggle-icon" }, V = { class: "path-label" }, k = {
  key: 0,
  class: "object-properties"
}, B = { class: "key" };
function C(e, p, r, t, l, o) {
  return n(), a("div", $, [
    (n(!0), a(y, null, _(r.data, (i, s) => (n(), a("div", {
      key: s,
      class: "array-item"
    }, [
      c("div", {
        class: "item-header",
        onClick: (u) => o.toggle(s)
      }, [
        c("div", A, d(l.expanded[s] ? "▼" : "▶"), 1),
        c("div", V, d(r.paths[s] || s), 1)
      ], 8, b),
      l.expanded[s] ? (n(), a("div", k, [
        (n(!0), a(y, null, _(i, (u, f) => (n(), a("div", {
          key: f,
          class: "property-item"
        }, [
          c("span", B, d(f) + ":", 1),
          c("span", {
            class: h(["value", o.getValueType(u)])
          }, d(o.formatValue(u)), 3)
        ]))), 128))
      ])) : g("", !0)
    ]))), 128))
  ]);
}
const w = /* @__PURE__ */ m(j, [["render", C]]);
export {
  w as default
};
