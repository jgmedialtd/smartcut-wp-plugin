import { _ as f, o as r, d as a, F as u, e as h, f as o, t as i, n as y, h as b } from "./main-Da74uB3y.js";
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
    this.data.forEach((e, d) => {
      this.expanded[d] = !0;
    });
  },
  methods: {
    toggle(e) {
      this.expanded[e] = !this.expanded[e];
    },
    isObject(e) {
      return e !== null && typeof e == "object" && !Array.isArray(e);
    },
    formatValue(e) {
      return this.isObject(e) ? `{ ${Object.entries(e).map(([n, t]) => {
        const c = this.isObject(t) ? this.formatValue(t) : typeof t == "string" ? `'${t}'` : t;
        return `${n}: ${c}`;
      }).join(", ")} }` : e;
    }
  }
}, g = { class: "object-viewer" }, V = ["onClick"], k = { class: "toggle-icon" }, O = { class: "path-label" }, A = {
  key: 0,
  class: "object-properties"
}, C = { class: "key" };
function w(e, d, n, t, c, p) {
  return r(), a("div", g, [
    (r(!0), a(u, null, h(n.data, (m, s) => (r(), a("div", {
      key: s,
      class: "array-item"
    }, [
      o("div", {
        class: "item-header",
        onClick: (l) => p.toggle(s)
      }, [
        o("span", k, i(c.expanded[s] ? "▼" : "▶"), 1),
        o("span", O, i(n.paths[s] || s), 1)
      ], 8, V),
      c.expanded[s] ? (r(), a("div", A, [
        (r(!0), a(u, null, h(m, (l, _) => (r(), a("div", {
          key: _,
          class: "property-item"
        }, [
          o("span", C, i(_) + ":", 1),
          o("span", {
            class: y(["value", typeof l])
          }, i(p.formatValue(l)), 3)
        ]))), 128))
      ])) : b("", !0)
    ]))), 128))
  ]);
}
const B = /* @__PURE__ */ f(j, [["render", w], ["__scopeId", "data-v-bf4575d7"]]);
export {
  B as default
};
