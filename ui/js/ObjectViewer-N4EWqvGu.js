import { l as w, a as n, b as s, e as p, t as l, F as k, k as g, f as a, m as A, p as h, q as j, v as m, j as v, s as O } from "./vendor-vue-DyIrsOEK.js";
import "./EcommerceCalculator-Baq5iGGk.js";
import { _ as C } from "./Launch-DG6yieBM.js";
const V = {
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
    }
  },
  data() {
    return {
      expanded: {}
    };
  },
  created() {
    this.data.forEach((e, r) => {
      this.expanded[r] = this.root;
    });
  },
  methods: {
    toggle(e) {
      this.expanded[e] = !this.expanded[e];
    },
    copyToClipboard(e) {
      const r = JSON.stringify(e, null, 2);
      navigator.clipboard.writeText(r);
    },
    getValueType(e) {
      return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
    },
    isObjectOrArray(e) {
      return e && typeof e == "object";
    },
    isSimpleArray(e) {
      return Array.isArray(e) && e.every((r) => !r || typeof r != "object");
    },
    getArrayPaths(e, r) {
      return Array.isArray(e) ? e.map((d, u) => u) : [r];
    },
    formatValue(e) {
      return e === null ? "null" : e === void 0 ? "undefined" : typeof e == "boolean" ? e.toString() : typeof e != "object" ? typeof e == "string" ? `'${e}'` : String(e) : "";
    }
  }
}, x = { class: "smartcut-object-viewer" }, S = {
  key: 0,
  class: "title"
}, B = ["onClick"], T = { class: "ov-label" }, N = {
  key: 0,
  class: "ov-count"
}, M = ["onClick"], q = { class: "ov-body" }, J = {
  key: 0,
  class: "ov-row"
}, L = {
  key: 0,
  class: "ov-key"
}, D = {
  key: 0,
  class: "ov-inline-array"
}, E = ["onClick"], F = {
  key: 2,
  class: "ov-null"
}, H = { key: 3 };
function P(e, r, d, u, f, o) {
  const b = w("ObjectViewer", !0);
  return s(), n("div", x, [
    d.title ? (s(), n("div", S, l(d.title), 1)) : p("", !0),
    (s(!0), n(k, null, g(d.data, (i, c) => (s(), n("div", {
      key: c,
      class: "ov-node"
    }, [
      a("div", {
        class: "ov-header",
        onClick: (t) => o.toggle(c)
      }, [
        (s(), n("svg", {
          class: h(["ov-chevron", { "is-open": f.expanded[c] }]),
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, [...r[0] || (r[0] = [
          a("path", {
            d: "M3 1 L7 5 L3 9",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])], 2)),
        a("span", T, l(d.paths[c] ?? c), 1),
        o.isObjectOrArray(i) ? (s(), n("span", N, l(Object.keys(i).length), 1)) : p("", !0),
        a("span", {
          class: "ov-copy",
          title: "Copy as JSON",
          onClick: j((t) => o.copyToClipboard(i), ["stop"])
        }, [...r[1] || (r[1] = [
          a("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            a("rect", {
              x: "5",
              y: "5",
              width: "9",
              height: "9",
              rx: "1"
            }),
            a("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
          ], -1)
        ])], 8, M)
      ], 8, B),
      A(a("div", q, [
        o.isObjectOrArray(i) ? (s(!0), n(k, { key: 1 }, g(i, (t, y) => (s(), n("div", {
          key: y,
          class: "ov-row"
        }, [
          !o.isObjectOrArray(t) || t === null || Array.isArray(t) ? (s(), n("span", L, l(y) + ":", 1)) : p("", !0),
          a("span", {
            class: h(["ov-val", o.getValueType(t)])
          }, [
            o.isSimpleArray(t) ? (s(), n("span", D, [
              O(" [" + l(t.map((_) => o.formatValue(_)).join(", ")) + "] ", 1),
              a("span", {
                class: "ov-copy ov-copy-inline",
                title: "Copy as JSON",
                onClick: (_) => o.copyToClipboard(t)
              }, [...r[2] || (r[2] = [
                a("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  a("rect", {
                    x: "5",
                    y: "5",
                    width: "9",
                    height: "9",
                    rx: "1"
                  }),
                  a("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
                ], -1)
              ])], 8, E)
            ])) : o.isObjectOrArray(t) && t !== null ? (s(), v(b, {
              key: 1,
              data: Array.isArray(t) ? t : [t],
              paths: o.getArrayPaths(t, y),
              root: !1
            }, null, 8, ["data", "paths"])) : t === null ? (s(), n("span", F, "null")) : (s(), n("span", H, l(o.formatValue(t)), 1))
          ], 2)
        ]))), 128)) : (s(), n("div", J, [
          a("span", {
            class: h(["ov-val", o.getValueType(i)])
          }, l(o.formatValue(i)), 3)
        ]))
      ], 512), [
        [m, f.expanded[c]]
      ])
    ]))), 128))
  ]);
}
const K = /* @__PURE__ */ C(V, [["render", P]]);
export {
  K as default
};
