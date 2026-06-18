import { G as ce, o as M, c as P, a as de, t as z, w as G, g as ue, d as fe, l as me, m as pe, u as K, b as he, s as g, x as Y } from "./vendor-vue-D6ZfZC0P.js";
import { P as ge } from "./vendor-C76etQCp.js";
import { j as x } from "./InputUserGroup-pBQzFMX3.js";
import { _ as be } from "./Launch-BnHg2-HI.js";
import { u as ye } from "./EcommerceCalculator-D4REKTU7.js";
import { t as c } from "./i18n-cONG3r0U.js";
const ve = {
  name: "Drop",
  props: {
    requiredType: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Drop file here"
    },
    thinking: {
      type: Boolean,
      default: !1
    },
    maxFiles: {
      type: Number,
      default: 1
    }
  },
  emits: ["drop"],
  data() {
    return {
      dropClass: null,
      events: ["dragenter", "dragover", "dragleave", "dragend", "drop"],
      loadingProgress: 0,
      files: ce([])
    };
  },
  mounted() {
    this.events.forEach((f) => {
      this.$el.addEventListener(f, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((f) => {
      this.$el.removeEventListener(f, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(f) {
      return new Promise((p, d) => {
        const o = new FileReader();
        o.onloadend = () => {
          p(o.result);
        }, o.onerror = d, o.readAsText(f);
      });
    },
    async onDrop(f) {
      const p = [...f.dataTransfer.files];
      if (this.maxFiles && p.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (p.every((d) => d.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let d = 0; d < p.length; d++) {
        const o = p[d];
        let v;
        try {
          v = await this.readFileAsync(o);
        } catch (F) {
          console.error(F), alert(`Error reading file ${d + 1}`);
          return;
        }
        const b = {
          data: v,
          name: o.name
        };
        this.files.push(b);
        const y = d / p.length * 100;
        this.loadingProgress = y;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(f) {
      this.dropClass = f?.type ?? null, f.preventDefault();
    }
  }
};
function we(f, p, d, o, v, b) {
  return M(), P("div", {
    id: "drop",
    class: ue({ thinking: d.thinking, [v.dropClass]: !0 }),
    onDrop: p[0] || (p[0] = G((...y) => b.onDrop && b.onDrop(...y), ["prevent"]))
  }, [
    de("div", null, z(d.thinking ? "Loading, please wait..." : d.label), 1)
  ], 34);
}
const ke = /* @__PURE__ */ be(ve, [["render", we]]), De = { id: "import-file" }, Ae = /* @__PURE__ */ fe({
  __name: "ImportCSV",
  props: {
    numberFormat: {
      type: String,
      default: "decimal"
    },
    bandingOptions: {
      type: [Object, Array],
      default: () => []
    },
    finishOptions: {
      type: [Object, Array],
      default: () => []
    },
    bandingLabels: {
      type: Array,
      default: () => []
    },
    finishLabels: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    },
    showTemplate: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["error", "import"],
  setup(f, { emit: p }) {
    const { addNotice: d } = ye(), o = f, v = p, b = g([]), y = g([]), F = g([]), q = g([]), w = g({}), S = g([]), B = g(!1), $ = g(null), N = g(null), A = g({}), E = [
      "l",
      "w",
      "t",
      "q",
      "orientationLock",
      "name",
      "material",
      "code",
      "banding",
      "finish",
      "cost"
    ], R = Y(() => {
      if (Object.keys(A.value).length === b.value.length)
        return A.value;
      const e = {};
      return b.value.forEach((t, n) => {
        e[n] = {};
        for (const [s, a] of Object.entries(t)) {
          if (!E.includes(s)) continue;
          const i = J(s, a);
          (i === !0 || i === !1) && (e[n][s] = i);
        }
      }), A.value = e, e;
    }), I = Y(() => o.customFields.map((e) => e.label)), H = (e, t) => {
      if (!t || Array.isArray(t) && t.length === 0 || typeof t == "object" && Object.keys(t).length === 0)
        return;
      const n = (Array.isArray(t), t), s = (Array.isArray(n), Object.keys(n));
      if (s.length === 0)
        return;
      const a = [[]];
      s.forEach((r) => {
        const u = n[r], m = [];
        a.forEach((h) => {
          Array.isArray(u) && u.forEach((l) => m.push([...h, l]));
        }), a.splice(0, a.length, ...m);
      });
      const i = /* @__PURE__ */ new Set();
      a.forEach((r) => i.add(r.join("|").toLowerCase())), e === "banding" ? $.value = i : N.value = i;
    }, J = (e, t) => {
      if (t === "???") return !0;
      function n(a) {
        return a ? (a = a?.trim()?.toLowerCase(), a === "l" || a === "w") : !0;
      }
      const s = {
        banding: (a) => U(a, $.value, "banding"),
        finish: (a) => U(a, N.value, "finish"),
        orientationLock: n
      };
      return e in s ? s[e](t) : null;
    }, U = (e, t, n) => {
      if (e = _(e), !e) return !0;
      const s = e.split(","), a = s.every((i) => {
        if (!i) return !0;
        const r = i.toLowerCase();
        return t.has(r) ? !0 : Array.from(t).some((m) => m.startsWith(r + "|") || m === r);
      });
      if (!a) {
        const i = s.filter((r) => {
          if (!r) return !1;
          const u = r.toLowerCase();
          return t.has(u) ? !1 : !Array.from(t).some((m) => m.startsWith(u + "|") || m === u);
        });
        console.log(`Valid ${n} choices...`), console.log(Array.from(t).join()), console.log(`The following ${n} choices are invalid`, i), d({
          type: "error",
          message: c("errors.validation.options_invalid", [c(`woodwork.${n}`).toLowerCase()]),
          additional: i
        });
      }
      return a;
    }, Q = (e, t) => {
      const n = R.value[t]?.banding !== !1, s = R.value[t]?.finish !== !1, a = !!e.banding, i = !!e.finish;
      if (!a && !i)
        return;
      const r = {};
      if (n && a) {
        const u = _(e.banding);
        if (u) {
          const m = u.split(","), h = ["l1", "l2", "w1", "w2"], l = {};
          m.forEach((k, D) => {
            if (k && k.trim() && h[D]) {
              const C = k.trim();
              if (C.includes("|") && o.bandingLabels.length > 1) {
                const L = C.split("|"), j = {};
                o.bandingLabels.forEach((T, O) => {
                  L[O] && (j[T] = L[O]);
                }), l[h[D]] = j;
              } else
                l[h[D]] = C;
            }
          }), Object.keys(l).length > 0 && (r.banding = { sides: l });
        }
      }
      if (s && i) {
        const u = _(e.finish);
        if (u) {
          const m = u.split(","), h = ["a", "b"], l = {};
          m.forEach((k, D) => {
            if (k && k.trim() && h[D]) {
              const C = k.trim();
              if (C.includes("|") && o.finishLabels.length > 1) {
                const L = C.split("|"), j = {};
                o.finishLabels.forEach((T, O) => {
                  L[O] && (j[T] = L[O]);
                }), l[h[D]] = j;
              } else
                l[h[D]] = C;
            }
          }), Object.keys(l).length > 0 && (r.finish = { faces: l });
        }
      }
      return Object.keys(r).length > 0 ? r : void 0;
    }, X = () => b.value.map((e, t) => ({
      l: o.numberFormat === "decimal" ? x(e.l) : e.l,
      w: o.numberFormat === "decimal" ? x(e.w) : e.w,
      t: o.numberFormat === "decimal" ? x(e.t) : e.t,
      q: typeof e.q == "string" ? parseInt(e.q, 10) : e.q,
      orientationLock: e.orientationLock,
      name: e.name,
      material: e.material,
      code: e.code || void 0,
      extras: Q(e, t),
      customData: ie(e)
    })), Z = (e) => {
      const t = e?.[0]?.data;
      t && ge.parse(t, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (n) => ae(n),
        error: () => v("error")
      });
    }, W = {
      l: ["600", "800", "400", "1200"],
      w: ["400", "600", "300", "800"],
      t: ["18", "18", "12", "25"],
      q: ["2", "4", "6", "1"],
      name: ["Side Panel", "Top", "Shelf", "Back"],
      material: ["MDF", "MDF", "Plywood", "MDF"],
      code: ["MDF001", "MDF001", "PLY002", "MDF002"],
      orientationLock: ["", "l", "", "w"],
      banding: ["", "oak,oak,,", "", ""],
      finish: ["", "", "matt,gloss", ""],
      cost: ["", "", "", ""]
    }, ee = ["banding", "finish", "planing", "machining"], V = E.filter((e) => !ee.includes(e)), te = () => {
      const e = o.customFields.map((r) => r.label), t = [...V, ...e], n = V.map((r) => W[r]?.length || 0), s = Math.max(4, ...n), a = (r) => r.includes(",") ? `"${r.replace(/"/g, '""')}"` : r, i = [];
      for (let r = 0; r < s; r++) {
        const u = V.map((h) => {
          const l = W[h];
          return !l || l.length === 0 ? "" : a(l[r] ?? l[l.length - 1]);
        }), m = e.map(() => "");
        i.push([...u, ...m].join(","));
      }
      return [t.join(","), ...i].join(`
`);
    }, ne = () => {
      const e = te(), t = new Blob([e], { type: "text/csv" }), n = URL.createObjectURL(t), s = document.createElement("a");
      s.href = n, s.download = "import template.csv", document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(n);
    }, ae = (e) => {
      y.value = e.data.filter((t) => t.some((n) => n)), F.value = y.value[0], w.value = {};
      for (let t = F.value.length; t--; ) {
        const n = F.value[t], s = se(n);
        s ? w.value[t] = s : (w.value[t] = null, I.value.includes(n) && (w.value[t] = "customData." + o.customFields.find((a) => a.label === n).id));
      }
      re(), y.value.shift(), oe(), le();
    }, se = (e) => {
      const t = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", c("l"), c("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", c("w"), c("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", c("t"), c("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", c("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", c("quantity"), c("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", c("quantity")],
        code: ["code", "sku", "product_code", "productcode", "item_code", "itemcode", "ref", "reference", c("code")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", c("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", c("banding")],
        finish: ["finish", "paint"],
        cost: ["cost", "price", "unit_price", "unitprice"]
      }, n = Object.entries(t).reduce(
        (s, [a, i]) => (i.some((r) => e && e.toLowerCase() === r) && s.push(a), s),
        []
      );
      return n.length > 1 ? null : n[0];
    }, re = () => {
      B.value = !1, q.value = Object.values(w.value).map((t) => !t || t === "N" ? null : E.includes(t) ? t : (B.value = !0, null));
      const e = q.value.filter((t, n) => q.value.indexOf(t) !== n);
      S.value = e.map((t) => q.value.reduce(
        (n, s, a) => (s && s === t && n.push(a), n),
        []
      ));
    }, _ = (e) => e && e.replace(/\s*,\s*/g, ","), oe = () => {
      const e = y.value.map((t) => {
        const n = {};
        return F.value.forEach((s, a) => {
          if (S.value.flat().includes(a))
            return n[w.value[a]] = "???";
          n[w.value[a]] = t[a];
        }), n;
      });
      b.value = e;
    }, ie = (e) => {
      let t = {};
      for (let n in e)
        if (n.startsWith("customData.")) {
          let s = n.slice(11);
          t[s] = e[n];
        }
      return t;
    }, le = () => {
      const e = X();
      e?.length && v("import", e);
    };
    return me(() => {
      H("banding", o.bandingOptions), H("finish", o.finishOptions);
    }), (e, t) => (M(), P("div", De, [
      pe(ke, {
        label: K(c)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: Z
      }, null, 8, ["label"]),
      f.showTemplate ? (M(), P("a", {
        key: 0,
        href: "#",
        class: "template-download-link",
        onClick: G(ne, ["prevent"])
      }, z(K(c)("Download CSV template")), 1)) : he("", !0)
    ]));
  }
});
export {
  Ae as default
};
