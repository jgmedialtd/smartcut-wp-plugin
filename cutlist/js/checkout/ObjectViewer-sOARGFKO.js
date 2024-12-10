import { _ as f } from "./Launch-fuvmW32C.js";
import { j as r, k as a, F as u, l as h, t as o, v as i, p as y, A as b } from "./main-BFZHuxOW.js";
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
      return this.isObject(e) ? `{ ${Object.entries(e).map(([c, t]) => {
        const n = this.isObject(t) ? this.formatValue(t) : typeof t == "string" ? `'${t}'` : t;
        return `${c}: ${n}`;
      }).join(", ")} }` : e;
    }
  }
}, g = { class: "object-viewer" }, k = ["onClick"], V = { class: "toggle-icon" }, O = { class: "path-label" }, A = {
  key: 0,
  class: "object-properties"
}, C = { class: "key" };
function w(e, d, c, t, n, l) {
  return r(), a("div", g, [
    (r(!0), a(u, null, h(c.data, (m, s) => (r(), a("div", {
      key: s,
      class: "array-item"
    }, [
      o("div", {
        class: "item-header",
        onClick: (p) => l.toggle(s)
      }, [
        o("span", V, i(n.expanded[s] ? "▼" : "▶"), 1),
        o("span", O, i(c.paths[s] || s), 1)
      ], 8, k),
      n.expanded[s] ? (r(), a("div", A, [
        (r(!0), a(u, null, h(m, (p, _) => (r(), a("div", {
          key: _,
          class: "property-item"
        }, [
          o("span", C, i(_) + ":", 1),
          o("span", {
            class: y(["value", typeof p])
          }, i(l.formatValue(p)), 3)
        ]))), 128))
      ])) : b("", !0)
    ]))), 128))
  ]);
}
const $ = /* @__PURE__ */ f(j, [["render", w], ["__scopeId", "data-v-b5e9be66"]]);
export {
  $ as default
};
