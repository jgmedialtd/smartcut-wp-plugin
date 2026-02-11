import { _ as g } from "./Launch-C8DaHa5j.js";
import { L as A, b as s, o as r, F as _, q as u, j as c, e as f, t as i, a as b, x as j } from "./vendor-vue-h1I-4LEU.js";
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
    this.data.forEach((e, n) => {
      this.expanded[n] = this.root;
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
    getArrayPaths(e, n) {
      return Array.isArray(e) ? e.map((d, y) => y) : [n];
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
}, q = {
  key: 1,
  class: "null-value"
}, S = { key: 2 };
function E(e, n, d, y, p, a) {
  const h = A("ObjectViewer", !0);
  return r(), s("div", O, [
    (r(!0), s(_, null, u(d.data, (m, o) => (r(), s("div", {
      key: o,
      class: "array-item"
    }, [
      c("div", {
        class: "item-header",
        onClick: (t) => a.toggle(o)
      }, [
        c("div", w, i(p.expanded[o] ? "▼" : "▶"), 1),
        c("div", B, i(d.paths[o] || o), 1)
      ], 8, V),
      p.expanded[o] ? (r(), s("div", C, [
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
            }, null, 8, ["data", "paths"])) : t === null ? (r(), s("span", q, "null")) : (r(), s("span", S, i(a.formatValue(t)), 1))
          ], 2)
        ]))), 128))
      ])) : f("", !0)
    ]))), 128))
  ]);
}
const N = /* @__PURE__ */ g(k, [["render", E]]);
export {
  N as default
};
