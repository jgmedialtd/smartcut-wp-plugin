import { P as te } from "./vendor-BwVe8GCL.js";
import { l as V } from "./result.zod-Jpm7fspL.js";
import { B as ne, a as W, b as K, f as ae, t as re, x as se, p as ie, d as oe, o as le, g as ce, u as ue, r as m, c as N } from "./vendor-vue-XczpOw2V.js";
import { _ as de } from "./Launch-Ctx3PgLR.js";
import { u as fe } from "./EcommerceCalculator-B91faSfl.js";
import { t as c } from "./i18n-CYUWq18B.js";
const he = {
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
      files: ne([])
    };
  },
  mounted() {
    this.events.forEach((u) => {
      this.$el.addEventListener(u, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((u) => {
      this.$el.removeEventListener(u, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(u) {
      return new Promise((f, l) => {
        const s = new FileReader();
        s.onloadend = () => {
          f(s.result);
        }, s.onerror = l, s.readAsText(u);
      });
    },
    async onDrop(u) {
      const f = [...u.dataTransfer.files];
      if (this.maxFiles && f.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (f.every((l) => l.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let l = 0; l < f.length; l++) {
        const s = f[l];
        let v;
        try {
          v = await this.readFileAsync(s);
        } catch (L) {
          console.error(L), alert(`Error reading file ${l + 1}`);
          return;
        }
        const g = {
          data: v,
          name: s.name
        };
        this.files.push(g);
        const b = l / f.length * 100;
        this.loadingProgress = b;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(u) {
      this.dropClass = u?.type ?? null, u.preventDefault();
    }
  }
};
function pe(u, f, l, s, v, g) {
  return K(), W("div", {
    id: "drop",
    class: ie({ thinking: l.thinking, [v.dropClass]: !0 }),
    onDrop: f[0] || (f[0] = se((...b) => g.onDrop && g.onDrop(...b), ["prevent"]))
  }, [
    ae("div", null, re(l.thinking ? "Loading, please wait..." : l.label), 1)
  ], 34);
}
const me = /* @__PURE__ */ de(he, [["render", pe]]), ge = { id: "import-file" }, Ce = /* @__PURE__ */ oe({
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
    }
  },
  emits: ["error", "import"],
  setup(u, { emit: f }) {
    const { addNotice: l } = fe(), s = u, v = f, g = m([]), b = m([]), L = m([]), q = m([]), w = m({}), P = m([]), S = m(!1), T = m(null), x = m(null), j = m({}), $ = [
      "l",
      "w",
      "t",
      "q",
      "orientationLock",
      "name",
      "material",
      "banding",
      "finish",
      "cost"
    ], B = N(() => {
      if (Object.keys(j.value).length === g.value.length)
        return j.value;
      const e = {};
      return g.value.forEach((t, n) => {
        e[n] = {};
        for (const [r, a] of Object.entries(t)) {
          if (!$.includes(r)) continue;
          const i = z(r, a);
          (i === !0 || i === !1) && (e[n][r] = i);
        }
      }), j.value = e, e;
    }), R = N(() => s.customFields.map((e) => e.label)), M = (e, t) => {
      if (!t || Array.isArray(t) && t.length === 0 || typeof t == "object" && Object.keys(t).length === 0)
        return;
      const n = (Array.isArray(t), t), r = (Array.isArray(n), Object.keys(n));
      if (r.length === 0)
        return;
      const a = [[]];
      r.forEach((o) => {
        const d = n[o], h = [];
        a.forEach((y) => {
          Array.isArray(d) && d.forEach((p) => h.push([...y, p]));
        }), a.splice(0, a.length, ...h);
      });
      const i = /* @__PURE__ */ new Set();
      a.forEach((o) => i.add(o.join("|").toLowerCase())), e === "banding" ? T.value = i : x.value = i;
    }, z = (e, t) => {
      if (t === "???") return !0;
      function n(a) {
        return a ? (a = a?.trim()?.toLowerCase(), a === "l" || a === "w") : !0;
      }
      const r = {
        banding: (a) => H(a, T.value, "banding"),
        finish: (a) => H(a, x.value, "finish"),
        orientationLock: n
      };
      return e in r ? r[e](t) : null;
    }, H = (e, t, n) => {
      if (e = E(e), !e) return !0;
      const r = e.split(","), a = r.every((i) => {
        if (!i) return !0;
        const o = i.toLowerCase();
        return t.has(o) ? !0 : Array.from(t).some((h) => h.startsWith(o + "|") || h === o);
      });
      if (!a) {
        const i = r.filter((o) => {
          if (!o) return !1;
          const d = o.toLowerCase();
          return t.has(d) ? !1 : !Array.from(t).some((h) => h.startsWith(d + "|") || h === d);
        });
        console.log(`Valid ${n} choices...`), console.log(Array.from(t).join()), console.log(`The following ${n} choices are invalid`, i), l({
          type: "error",
          message: c("errors.validation.options_invalid", [c(`woodwork.${n}`).toLowerCase()]),
          additional: i
        });
      }
      return a;
    }, I = (e, t) => {
      const n = B.value[t]?.banding !== !1, r = B.value[t]?.finish !== !1, a = !!e.banding, i = !!e.finish;
      if (!a && !i)
        return;
      const o = {};
      if (n && a) {
        const d = E(e.banding);
        if (d) {
          const h = d.split(","), y = ["l1", "l2", "w1", "w2"], p = {};
          h.forEach((k, D) => {
            if (k && k.trim() && y[D]) {
              const C = k.trim();
              if (C.includes("|") && s.bandingLabels.length > 1) {
                const F = C.split("|"), A = {};
                s.bandingLabels.forEach((_, O) => {
                  F[O] && (A[_] = F[O]);
                }), p[y[D]] = A;
              } else
                p[y[D]] = C;
            }
          }), Object.keys(p).length > 0 && (o.banding = { sides: p });
        }
      }
      if (r && i) {
        const d = E(e.finish);
        if (d) {
          const h = d.split(","), y = ["a", "b"], p = {};
          h.forEach((k, D) => {
            if (k && k.trim() && y[D]) {
              const C = k.trim();
              if (C.includes("|") && s.finishLabels.length > 1) {
                const F = C.split("|"), A = {};
                s.finishLabels.forEach((_, O) => {
                  F[O] && (A[_] = F[O]);
                }), p[y[D]] = A;
              } else
                p[y[D]] = C;
            }
          }), Object.keys(p).length > 0 && (o.finish = { faces: p });
        }
      }
      return Object.keys(o).length > 0 ? o : void 0;
    }, Y = () => g.value.map((e, t) => ({
      l: s.numberFormat === "decimal" ? V(e.l) : e.l,
      w: s.numberFormat === "decimal" ? V(e.w) : e.w,
      t: s.numberFormat === "decimal" ? V(e.t) : e.t,
      q: typeof e.q == "string" ? parseInt(e.q, 10) : e.q,
      orientationLock: e.orientationLock,
      name: e.name,
      material: e.material,
      extras: I(e, t),
      customData: Z(e)
    })), G = (e) => {
      const t = e?.[0]?.data;
      t && te.parse(t, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (n) => J(n),
        error: () => v("error")
      });
    }, J = (e) => {
      b.value = e.data.filter((t) => t.some((n) => n)), L.value = b.value[0], w.value = {};
      for (let t = L.value.length; t--; ) {
        const n = L.value[t], r = Q(n);
        r ? w.value[t] = r : (w.value[t] = null, R.value.includes(n) && (w.value[t] = "customData." + s.customFields.find((a) => a.label === n).id));
      }
      U(), b.value.shift(), X(), ee();
    }, Q = (e) => {
      const t = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", c("l"), c("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", c("w"), c("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", c("t"), c("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", c("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", c("quantity"), c("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", c("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", c("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", c("banding")],
        finish: ["finish", "paint"]
      }, n = Object.entries(t).reduce(
        (r, [a, i]) => (i.some((o) => e && e.toLowerCase() === o) && r.push(a), r),
        []
      );
      return n.length > 1 ? null : n[0];
    }, U = () => {
      S.value = !1, q.value = Object.values(w.value).map((t) => !t || t === "N" ? null : $.includes(t) ? t : (S.value = !0, null));
      const e = q.value.filter((t, n) => q.value.indexOf(t) !== n);
      P.value = e.map((t) => q.value.reduce(
        (n, r, a) => (r && r === t && n.push(a), n),
        []
      ));
    }, E = (e) => e && e.replace(/\s*,\s*/g, ","), X = () => {
      const e = b.value.map((t) => {
        const n = {};
        return L.value.forEach((r, a) => {
          if (P.value.flat().includes(a))
            return n[w.value[a]] = "???";
          n[w.value[a]] = t[a];
        }), n;
      });
      g.value = e;
    }, Z = (e) => {
      let t = {};
      for (let n in e)
        if (n.startsWith("customData.")) {
          let r = n.slice(11);
          t[r] = e[n];
        }
      return t;
    }, ee = () => {
      const e = Y();
      e?.length && v("import", e);
    };
    return le(() => {
      M("banding", s.bandingOptions), M("finish", s.finishOptions);
    }), (e, t) => (K(), W("div", ge, [
      ce(me, {
        label: ue(c)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: G
      }, null, 8, ["label"])
    ]));
  }
});
export {
  Ce as default
};
