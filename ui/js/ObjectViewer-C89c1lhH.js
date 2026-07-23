import { r as b, o as n, c as a, t as d, b as f, F as g, f as _, a as s, g as p, w as m, h as S, v as j, i as A, j as C } from "./vendor-vue-CeWGZ1lm.js";
import { _ as O } from "./Launch-_29Ox10h.js";
const v = {
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
    },
    title: {
      type: String,
      default: ""
    },
    ancestors: {
      type: Object,
      default: () => /* @__PURE__ */ new Set()
    }
  },
  data() {
    return {
      expanded: {},
      hasScroll: !1,
      atBottom: !0
    };
  },
  computed: {
    childAncestors() {
      const t = new Set(this.ancestors);
      for (const e of this.data)
        e && typeof e == "object" && t.add(e);
      return t;
    }
  },
  created() {
    this.data.forEach((t, e) => {
      this.expanded[e] = this.root || this.data.length === 1;
    });
  },
  mounted() {
    this.$nextTick(() => this.checkScroll());
  },
  methods: {
    checkScroll() {
      const t = this.$refs.container;
      t && (this.hasScroll = t.scrollHeight > t.clientHeight, this.atBottom = t.scrollTop + t.clientHeight >= t.scrollHeight - 10);
    },
    handleScroll() {
      this.checkScroll();
    },
    toggle(t) {
      this.expanded[t] = !this.expanded[t], this.$nextTick(() => this.checkScroll());
    },
    copyToClipboard(t, e) {
      const l = JSON.stringify({ [e]: t }, null, 2);
      navigator.clipboard.writeText(l);
    },
    getValueType(t) {
      return t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    },
    isObjectOrArray(t) {
      return t && typeof t == "object";
    },
    isSimpleArray(t) {
      return Array.isArray(t) && t.every((e) => !e || typeof e != "object");
    },
    getArrayPaths(t, e) {
      return Array.isArray(t) ? t.map((l, k) => k) : [e];
    },
    formatValue(t) {
      return t === null ? "null" : t === void 0 ? "undefined" : typeof t == "boolean" ? t.toString() : typeof t != "object" ? typeof t == "string" ? `'${t}'` : String(t) : "";
    }
  }
}, V = {
  key: 0,
  class: "title"
}, x = ["onClick"], B = { class: "ov-label" }, T = {
  key: 0,
  class: "ov-count"
}, H = ["onClick"], N = { class: "ov-body" }, M = {
  key: 0,
  class: "ov-row"
}, J = { class: "ov-key" }, L = ["onClick"], q = {
  key: 0,
  class: "ov-inline-array"
}, D = ["onClick"], E = {
  key: 2,
  class: "ov-circular"
}, F = {
  key: 3,
  class: "ov-null"
}, P = { key: 4 };
function z(t, e, l, k, y, r) {
  const w = b("ObjectViewer", !0);
  return n(), a("div", {
    ref: "container",
    class: p(["smartcut-object-viewer main", { "has-scroll": y.hasScroll, "at-bottom": y.atBottom }]),
    onScroll: e[0] || (e[0] = (...i) => r.handleScroll && r.handleScroll(...i))
  }, [
    l.title ? (n(), a("div", V, d(l.title), 1)) : f("", !0),
    (n(!0), a(g, null, _(l.data, (i, c) => (n(), a("div", {
      key: c,
      class: "ov-node"
    }, [
      s("div", {
        class: "ov-header",
        onClick: (o) => r.toggle(c)
      }, [
        (n(), a("svg", {
          class: p(["ov-chevron", { "is-open": y.expanded[c] }]),
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, [...e[1] || (e[1] = [
          s("path", {
            d: "M3 1 L7 5 L3 9",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])], 2)),
        s("span", B, d(l.paths[c] ?? c), 1),
        r.isObjectOrArray(i) ? (n(), a("span", T, d(Object.keys(i).length), 1)) : f("", !0),
        s("span", {
          class: "ov-copy",
          title: "Copy as JSON",
          onClick: m((o) => r.copyToClipboard(i, l.paths[c] ?? c), ["stop"])
        }, [...e[2] || (e[2] = [
          s("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            s("rect", {
              x: "5",
              y: "5",
              width: "9",
              height: "9",
              rx: "1"
            }),
            s("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
          ], -1)
        ])], 8, H)
      ], 8, x),
      S(s("div", N, [
        r.isObjectOrArray(i) ? (n(!0), a(g, { key: 1 }, _(i, (o, h) => (n(), a("div", {
          key: h,
          class: "ov-row"
        }, [
          s("span", J, d(h) + ":", 1),
          r.isObjectOrArray(o) && o !== null && !r.isSimpleArray(o) ? (n(), a("span", {
            key: 0,
            class: "ov-copy ov-copy-inline",
            title: "Copy all as JSON",
            onClick: (u) => r.copyToClipboard(o, h)
          }, [...e[3] || (e[3] = [
            s("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              s("rect", {
                x: "5",
                y: "5",
                width: "9",
                height: "9",
                rx: "1"
              }),
              s("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
            ], -1)
          ])], 8, L)) : f("", !0),
          s("span", {
            class: p(["ov-val", r.getValueType(o)])
          }, [
            r.isSimpleArray(o) ? (n(), a("span", q, [
              A(" [" + d(o.map((u) => r.formatValue(u)).join(", ")) + "] ", 1),
              s("span", {
                class: "ov-copy ov-copy-inline",
                title: "Copy as JSON",
                onClick: (u) => r.copyToClipboard(o, h)
              }, [...e[4] || (e[4] = [
                s("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  s("rect", {
                    x: "5",
                    y: "5",
                    width: "9",
                    height: "9",
                    rx: "1"
                  }),
                  s("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
                ], -1)
              ])], 8, D)
            ])) : r.isObjectOrArray(o) && o !== null && !r.childAncestors.has(o) ? (n(), C(w, {
              key: 1,
              data: Array.isArray(o) ? o : [o],
              paths: r.getArrayPaths(o, h),
              root: !1,
              ancestors: r.childAncestors
            }, null, 8, ["data", "paths", "ancestors"])) : r.isObjectOrArray(o) && o !== null ? (n(), a("span", E, "[Circular]")) : o === null ? (n(), a("span", F, "null")) : (n(), a("span", P, d(r.formatValue(o)), 1))
          ], 2)
        ]))), 128)) : (n(), a("div", M, [
          s("span", {
            class: p(["ov-val", r.getValueType(i)])
          }, d(r.formatValue(i)), 3)
        ]))
      ], 512), [
        [j, y.expanded[c]]
      ])
    ]))), 128))
  ], 34);
}
const K = /* @__PURE__ */ O(v, [["render", z]]);
export {
  K as default
};
