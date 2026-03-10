import { _ as g } from "./Launch-MjRX7mQF.js";
import { m as A, a as s, b as r, F as _, k as u, f as c, e as f, t as i, j as b, p as j } from "./vendor-vue-XczpOw2V.js";
const k = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: !0
    },
    paths: {
      type: Array,
      required: !0
    },
    root: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.data.forEach((e, o) => {
      this.expanded[o] = this.root;
    });
  },
  methods: {
    toggle(e) {
      this.expanded[e] = !this.expanded[e];
    },
    getValueType(e) {
      return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
    },
    isObjectOrArray(e) {
      return e && typeof e == "object";
    },
    getArrayPaths(e, o) {
      return Array.isArray(e) ? e.map((d, y) => y) : [o];
    },
    formatValue(e) {
      return e === null ? "null" : e === void 0 ? "undefined" : typeof e == "boolean" ? e.toString() : typeof e != "object" ? typeof e == "string" ? `'${e}'` : String(e) : "";
    }
  }
}, O = { class: "smartcut-object-viewer" }, V = ["onClick"], w = { class: "toggle-icon" }, B = { class: "path-label" }, C = {
  key: 0,
  class: "object-properties"
}, x = {
  key: 0,
  class: "key"
}, S = {
  key: 1,
  class: "null-value"
}, q = { key: 2 };
function E(e, o, d, y, p, a) {
  const h = A("ObjectViewer", !0);
  return r(), s("div", O, [
    (r(!0), s(_, null, u(d.data, (m, n) => (r(), s("div", {
      key: n,
      class: "array-item"
    }, [
      c("div", {
        class: "item-header",
        onClick: (t) => a.toggle(n)
      }, [
        c("div", w, i(p.expanded[n] ? "▼" : "▶"), 1),
        c("div", B, i(d.paths[n] || n), 1)
      ], 8, V),
      p.expanded[n] ? (r(), s("div", C, [
        (r(!0), s(_, null, u(m, (t, l) => (r(), s("div", {
          key: l,
          class: "property-item"
        }, [
          !a.isObjectOrArray(t) || t === null || Array.isArray(t) ? (r(), s("div", x, i(l) + ": ", 1)) : f("", !0),
          c("div", {
            class: j(["value", a.getValueType(t)])
          }, [
            a.isObjectOrArray(t) && t !== null ? (r(), b(h, {
              key: 0,
              data: Array.isArray(t) ? t : [t],
              paths: a.getArrayPaths(t, l),
              root: !1
            }, null, 8, ["data", "paths"])) : t === null ? (r(), s("span", S, "null")) : (r(), s("span", q, i(a.formatValue(t)), 1))
          ], 2)
        ]))), 128))
      ])) : f("", !0)
    ]))), 128))
  ]);
}
const P = /* @__PURE__ */ g(k, [["render", E]]);
export {
  P as default
};
