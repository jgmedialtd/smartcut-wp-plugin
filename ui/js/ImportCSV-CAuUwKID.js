import { G as de, o as _, c as M, a as I, t as z, w as G, g as ue, d as fe, l as pe, m as he, u as K, b as me, s as b, x as Y } from "./vendor-vue-CrNGqS0k.js";
import { P as ge } from "./vendor-CIXsT6Bd.js";
import { a0 as T } from "./NestingShape-JAVnw-aP.js";
import { _ as ye } from "./Launch-9LoYYNsk.js";
import { u as be } from "./EcommerceCalculator-CTmE4c2O.js";
import { t as u } from "./i18n-DGE8ywV5.js";
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
    },
    /**
     * How to read the dropped file. Binary formats — binary STL, GLB, 3MF,
     * binary PLY — cannot go through readAsText at all.
     */
    readAs: {
      type: String,
      default: "text",
      validator: (i) => i === "text" || i === "arrayBuffer"
    },
    /** `accept` attribute for the file picker, e.g. '.obj,.stl'. */
    accept: {
      type: String,
      default: ""
    }
  },
  emits: ["drop"],
  data() {
    return {
      dropClass: null,
      events: ["dragenter", "dragover", "dragleave", "dragend", "drop"],
      loadingProgress: 0,
      files: de([])
    };
  },
  mounted() {
    this.events.forEach((i) => {
      this.$el.addEventListener(i, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((i) => {
      this.$el.removeEventListener(i, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(i) {
      return new Promise((l, m) => {
        const o = new FileReader();
        o.onloadend = () => {
          l(o.result);
        }, o.onerror = m, this.readAs === "arrayBuffer" ? o.readAsArrayBuffer(i) : o.readAsText(i);
      });
    },
    browse() {
      this.thinking || this.$refs.fileInput?.click();
    },
    async onSelect(i) {
      const l = [...i.target?.files ?? []];
      l.length && (await this.process(l), i.target && (i.target.value = ""));
    },
    async onDrop(i) {
      await this.process([...i.dataTransfer.files]);
    },
    async process(i) {
      if (this.maxFiles && i.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (i.every((l) => l.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let l = 0; l < i.length; l++) {
        const m = i[l];
        let o;
        try {
          o = await this.readFileAsync(m);
        } catch (g) {
          console.error(g), alert(`Error reading file ${l + 1}`);
          return;
        }
        const D = {
          data: o,
          name: m.name
        };
        this.files.push(D);
        const h = l / i.length * 100;
        this.loadingProgress = h;
      }
      this.$emit("drop", this.readAs === "arrayBuffer" ? this.files.slice() : structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(i) {
      this.dropClass = i?.type ?? null, i.preventDefault();
    }
  }
}, we = ["accept", "multiple"];
function ke(i, l, m, o, D, h) {
  return _(), M("div", {
    id: "drop",
    class: ue({ thinking: m.thinking, [D.dropClass]: !0 }),
    onDrop: l[1] || (l[1] = G((...g) => h.onDrop && h.onDrop(...g), ["prevent"])),
    onClick: l[2] || (l[2] = (...g) => h.browse && h.browse(...g))
  }, [
    I("div", null, z(m.thinking ? "Loading, please wait..." : m.label), 1),
    I("input", {
      ref: "fileInput",
      type: "file",
      class: "drop-file-input",
      accept: m.accept || void 0,
      multiple: m.maxFiles !== 1,
      onChange: l[0] || (l[0] = (...g) => h.onSelect && h.onSelect(...g))
    }, null, 40, we)
  ], 34);
}
const Ce = /* @__PURE__ */ ye(ve, [["render", ke]]), De = { id: "import-file" }, Ee = /* @__PURE__ */ fe({
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
  setup(i, { emit: l }) {
    const { addNotice: m } = be(), o = i, D = l, h = b([]), g = b([]), j = b([]), O = b([]), v = b({}), P = b([]), B = b(!1), N = b(null), R = b(null), q = b({}), E = [
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
    ], H = Y(() => {
      if (Object.keys(q.value).length === h.value.length)
        return q.value;
      const e = {};
      return h.value.forEach((t, n) => {
        e[n] = {};
        for (const [r, a] of Object.entries(t)) {
          if (!E.includes(r)) continue;
          const c = Q(r, a);
          (c === !0 || c === !1) && (e[n][r] = c);
        }
      }), q.value = e, e;
    }), J = Y(() => o.customFields.map((e) => e.label)), $ = (e, t) => {
      if (!t || Array.isArray(t) && t.length === 0 || typeof t == "object" && Object.keys(t).length === 0)
        return;
      const n = (Array.isArray(t), t), r = (Array.isArray(n), Object.keys(n));
      if (r.length === 0)
        return;
      const a = [[]];
      r.forEach((s) => {
        const f = n[s], p = [];
        a.forEach((y) => {
          Array.isArray(f) && f.forEach((d) => p.push([...y, d]));
        }), a.splice(0, a.length, ...p);
      });
      const c = /* @__PURE__ */ new Set();
      a.forEach((s) => c.add(s.join("|").toLowerCase())), e === "banding" ? N.value = c : R.value = c;
    }, Q = (e, t) => {
      if (t === "???") return !0;
      function n(a) {
        return a ? (a = a?.trim()?.toLowerCase(), a === "l" || a === "w") : !0;
      }
      const r = {
        banding: (a) => U(a, N.value, "banding"),
        finish: (a) => U(a, R.value, "finish"),
        orientationLock: n
      };
      return e in r ? r[e](t) : null;
    }, U = (e, t, n) => {
      if (e = S(e), !e) return !0;
      const r = e.split(","), a = r.every((c) => {
        if (!c) return !0;
        const s = c.toLowerCase();
        return t.has(s) ? !0 : Array.from(t).some((p) => p.startsWith(s + "|") || p === s);
      });
      if (!a) {
        const c = r.filter((s) => {
          if (!s) return !1;
          const f = s.toLowerCase();
          return t.has(f) ? !1 : !Array.from(t).some((p) => p.startsWith(f + "|") || p === f);
        });
        console.log(`Valid ${n} choices...`), console.log(Array.from(t).join()), console.log(`The following ${n} choices are invalid`, c), m({
          type: "error",
          message: u("errors.validation.options_invalid", [u(`woodwork.${n}`).toLowerCase()]),
          additional: c
        });
      }
      return a;
    }, X = (e, t) => {
      const n = H.value[t]?.banding !== !1, r = H.value[t]?.finish !== !1, a = !!e.banding, c = !!e.finish;
      if (!a && !c)
        return;
      const s = {};
      if (n && a) {
        const f = S(e.banding);
        if (f) {
          const p = f.split(","), y = ["l1", "l2", "w1", "w2"], d = {};
          p.forEach((w, k) => {
            if (w && w.trim() && y[k]) {
              const C = w.trim();
              if (C.includes("|") && o.bandingLabels.length > 1) {
                const F = C.split("|"), L = {};
                o.bandingLabels.forEach((x, A) => {
                  F[A] && (L[x] = F[A]);
                }), d[y[k]] = L;
              } else
                d[y[k]] = C;
            }
          }), Object.keys(d).length > 0 && (s.banding = { sides: d });
        }
      }
      if (r && c) {
        const f = S(e.finish);
        if (f) {
          const p = f.split(","), y = ["a", "b"], d = {};
          p.forEach((w, k) => {
            if (w && w.trim() && y[k]) {
              const C = w.trim();
              if (C.includes("|") && o.finishLabels.length > 1) {
                const F = C.split("|"), L = {};
                o.finishLabels.forEach((x, A) => {
                  F[A] && (L[x] = F[A]);
                }), d[y[k]] = L;
              } else
                d[y[k]] = C;
            }
          }), Object.keys(d).length > 0 && (s.finish = { faces: d });
        }
      }
      return Object.keys(s).length > 0 ? s : void 0;
    }, Z = () => h.value.map((e, t) => ({
      l: o.numberFormat === "decimal" ? T(e.l) : e.l,
      w: o.numberFormat === "decimal" ? T(e.w) : e.w,
      t: o.numberFormat === "decimal" ? T(e.t) : e.t,
      q: typeof e.q == "string" ? parseInt(e.q, 10) : e.q,
      orientationLock: e.orientationLock,
      name: e.name,
      material: e.material,
      code: e.code || void 0,
      extras: X(e, t),
      customData: le(e)
    })), ee = (e) => {
      const t = e?.[0]?.data;
      t && ge.parse(t, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (n) => re(n),
        error: () => D("error")
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
    }, te = ["banding", "finish", "planing", "machining"], V = E.filter((e) => !te.includes(e)), ne = () => {
      const e = o.customFields.map((s) => s.label), t = [...V, ...e], n = V.map((s) => W[s]?.length || 0), r = Math.max(4, ...n), a = (s) => s.includes(",") ? `"${s.replace(/"/g, '""')}"` : s, c = [];
      for (let s = 0; s < r; s++) {
        const f = V.map((y) => {
          const d = W[y];
          return !d || d.length === 0 ? "" : a(d[s] ?? d[d.length - 1]);
        }), p = e.map(() => "");
        c.push([...f, ...p].join(","));
      }
      return [t.join(","), ...c].join(`
`);
    }, ae = () => {
      const e = ne(), t = new Blob([e], { type: "text/csv" }), n = URL.createObjectURL(t), r = document.createElement("a");
      r.href = n, r.download = "import template.csv", document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(n);
    }, re = (e) => {
      g.value = e.data.filter((t) => t.some((n) => n)), j.value = g.value[0], v.value = {};
      for (let t = j.value.length; t--; ) {
        const n = j.value[t], r = se(n);
        r ? v.value[t] = r : (v.value[t] = null, J.value.includes(n) && (v.value[t] = "customData." + o.customFields.find((a) => a.label === n).id));
      }
      ie(), g.value.shift(), oe(), ce();
    }, se = (e) => {
      const t = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", u("l"), u("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", u("w"), u("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", u("t"), u("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", u("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", u("quantity"), u("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", u("quantity")],
        code: ["code", "sku", "product_code", "productcode", "item_code", "itemcode", "ref", "reference", u("code")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", u("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", u("banding")],
        finish: ["finish", "paint"],
        cost: ["cost", "price", "unit_price", "unitprice"]
      }, n = Object.entries(t).reduce(
        (r, [a, c]) => (c.some((s) => e && e.toLowerCase() === s) && r.push(a), r),
        []
      );
      return n.length > 1 ? null : n[0];
    }, ie = () => {
      B.value = !1, O.value = Object.values(v.value).map((t) => !t || t === "N" ? null : E.includes(t) ? t : (B.value = !0, null));
      const e = O.value.filter((t, n) => O.value.indexOf(t) !== n);
      P.value = e.map((t) => O.value.reduce(
        (n, r, a) => (r && r === t && n.push(a), n),
        []
      ));
    }, S = (e) => e && e.replace(/\s*,\s*/g, ","), oe = () => {
      const e = g.value.map((t) => {
        const n = {};
        return j.value.forEach((r, a) => {
          if (P.value.flat().includes(a))
            return n[v.value[a]] = "???";
          n[v.value[a]] = t[a];
        }), n;
      });
      h.value = e;
    }, le = (e) => {
      let t = {};
      for (let n in e)
        if (n.startsWith("customData.")) {
          let r = n.slice(11);
          t[r] = e[n];
        }
      return t;
    }, ce = () => {
      const e = Z();
      e?.length && D("import", e);
    };
    return pe(() => {
      $("banding", o.bandingOptions), $("finish", o.finishOptions);
    }), (e, t) => (_(), M("div", De, [
      he(Ce, {
        label: K(u)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: ee
      }, null, 8, ["label"]),
      i.showTemplate ? (_(), M("a", {
        key: 0,
        href: "#",
        class: "template-download-link",
        onClick: G(ae, ["prevent"])
      }, z(K(u)("Download CSV template")), 1)) : me("", !0)
    ]));
  }
});
export {
  Ee as default
};
