import { i as Ye, s as Pt, a as _t, g as Ft, b as Ue, e as xt, c as Tt, d as Nt, f as Et, h as Vt, j as ts, t as ce, k as yt, l as ge, m as bt, n as ss, o as ns, r as rs, p as De, q as as, u as xe, v as is, w as os, x as ls, S as us, y as cs, z as fs, A as Ke, B as fe, C as ds, D as St, E as ps, F as gs, I as vs } from "./components-By5q8-Op.js";
import { r as I, w as Me, c as k, Y as ee, t as he, L as Le } from "./vendor-vue-WkZl1F8L.js";
import { A as hs, o as ze, b as Te, a as ms, c as ys, n as Re, s as We, _ as bs, u as Ss, j as Lt, k as Ne, q as Ls, B as ws, C as wt, D as ks, e as Ee, t as Qe, v as Je, w as He } from "./vendor-zod-PVURV34D.js";
import { l as Cs } from "./vendor-socketio-C18vLChF.js";
let $e = null;
if (Ye())
  try {
    $e = require("~/helpers/applicationSettings").applicationSettings;
  } catch (r) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", r);
  }
function Ds(r, s, t = {}) {
  const {
    serializer: a = {
      read: (f) => {
        try {
          return JSON.parse(f);
        } catch {
          return f;
        }
      },
      write: (f) => JSON.stringify(f)
    }
  } = t;
  if (!Ye()) {
    const c = I((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const p = localStorage.getItem(r);
          if (p)
            return a.read(p);
        }
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from localStorage:", p);
      }
      return s;
    })());
    return Me(c, (p) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const g = a.write(p);
          localStorage.setItem(r, g);
        }
      } catch (g) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to localStorage:", g);
      }
    }, { deep: !0 }), c;
  }
  if (Ye()) {
    if (!$e)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), I(s);
    const c = I((() => {
      try {
        const p = $e.getString(r);
        if (p)
          return a.read(p);
      } catch (p) {
        console.error("[useCrossPlatformStorage] Failed to load", r, "from ApplicationSettings:", p);
      }
      return s;
    })());
    return Me(c, (p) => {
      try {
        const g = a.write(p);
        $e.setString(r, g);
      } catch (g) {
        console.error("[useCrossPlatformStorage] Failed to save", r, "to ApplicationSettings:", g);
      }
    }, { deep: !0 }), c;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", r, "- using in-memory fallback"), I(s);
}
const $t = "cle-extras-config", As = () => {
  try {
    const r = localStorage.getItem($t);
    return r ? JSON.parse(r) : {};
  } catch {
    return {};
  }
}, Os = (r) => {
  try {
    localStorage.setItem($t, JSON.stringify(r));
  } catch {
  }
}, we = I(As()), Ps = (r, s) => {
  we.value[r] = s, Os(we.value);
}, ve = (r) => we.value[r] || null, _s = () => we.value;
let kt = !1;
const Fs = () => {
  kt || (is({
    getExtrasConfig: ve,
    getAllExtrasConfigs: _s,
    setExtrasConfig: Ps
  }), kt = !0);
}, Ks = (r, s) => {
  const t = ve(r);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], u = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (u.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const f = (g) => t.options.length > 1 ? g.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, g) ? !0 : Object.keys(t.pricing).some((b) => b.startsWith(g + "|") || b === g) : g.split("|").every((v, b) => {
    if (b >= t.options.length) return !1;
    const P = t.options[b];
    return Array.isArray(P) && typeof P[0] == "string" && P.includes(v);
  }) : t.options.some((A) => Array.isArray(A) && typeof A[0] == "string" && A.includes(g)) : u.includes(g), c = /* @__PURE__ */ new Set();
  let p = 0;
  return s.forEach((g) => {
    if (!g.extras?.[r]) return;
    const A = g.extras[r].sides || {};
    Object.entries(A).forEach(([b, P]) => {
      typeof P == "string" && P && !f(P) && (c.add(P), A[b] = "", p++);
    });
    const v = g.extras[r].faces || {};
    Object.entries(v).forEach(([b, P]) => {
      typeof P == "string" && P && !f(P) && (c.add(P), v[b] = "", p++);
    });
  }), {
    cleanedCount: p,
    invalidOptions: Array.from(c)
  };
}, zs = (r) => {
  Fs();
  const {
    shape: s,
    extraType: t,
    allOptions: a,
    labels: u,
    userFriendlyFieldMap: f,
    allowCustomNames: c,
    customNames: p = I([]),
    enablePricing: g = !1,
    pricing: A,
    locations: v = I([]),
    locationGroups: b = I([]),
    orientationModel: P = 0,
    getAvailablePricingOptions: L,
    getPrice: y,
    findExtrasPrice: w,
    formatPrice: O
  } = r, N = () => {
    const e = ve(t), n = e?.options || a, l = e?.labels || u;
    ts(s.value, t, n, l, p.value);
  };
  if (N(), Me(
    () => s.value?.extras?.[t],
    (e) => {
      if (e) {
        const n = e?.sides || {}, l = e?.options?.sides || {};
        let o = !1;
        for (const [d, h] of Object.entries(n))
          if (typeof h == "string") {
            if (h.includes("|") && !l[d]) {
              o = !0;
              break;
            } else if (h !== "" && !l[d]) {
              o = !0;
              break;
            }
          }
        o && N();
      }
    },
    { immediate: !1 }
  ), Pt(P)) {
    const e = s.value ? { l: s.value.l, w: s.value.w } : null;
    if (e && s.value) {
      const n = e.w > e.l, o = s.value.extras?.[t]?.sides;
      if (o) {
        const d = o.l1 || o.l2, h = o.w1 || o.w2;
        (n && d && !h || !n && h && !d) && _t(s.value, t);
      }
    }
  }
  const z = k(() => we.value[t] || null), F = k(() => {
    const n = z.value?.options || a;
    if (n.length > 1)
      return "multiple";
    const o = (n[0] || []).filter(($) => typeof $ == "string"), d = (p.value || []).filter(($) => typeof $ == "string"), V = Array.from(/* @__PURE__ */ new Set([...o, ...d])).length;
    return V === 0 ? "boolean" : V === 1 ? "single" : "multiple";
  }), j = k(() => Ft(t)), _ = k(() => v.value && v.value.length > 0 ? v.value.filter((e) => e !== "all" && e !== "faces" && e !== "sides") : j.value), B = k(() => _.value.filter((e) => Ue(e) === "face")), U = k(() => _.value.filter((e) => Ue(e) === "side")), q = k(() => xt(t)), T = k(() => Tt(t)), G = k(() => Nt(t)), Z = () => z.value?.options && z.value.options.length > 1, D = (e, n, l) => {
    const { singleOption: o = me(), operation: d } = l;
    switch (n) {
      case "boolean":
        return !!e;
      case "single":
        return o ? d === "process" || d === "set" ? e && o ? o : "" : e === o ? o : "" : !!e;
      case "multiple":
        return e || "";
      default:
        return e;
    }
  }, H = (e, n, l) => D(n, l, { operation: "process" }), K = (e, n, l, o, d, h) => {
    switch (h) {
      case "boolean":
        xe(e, n, l, o, !!d);
        break;
      case "single": {
        const V = me();
        xe(e, n, l, o, d ? V : "");
        break;
      }
      case "multiple":
        xe(e, n, l, o, d || "");
        break;
    }
  }, Y = (e, n, l = {}) => {
    const o = l.singleOption || me();
    return l.allowCustomNames, D(e, n, {
      operation: "get",
      singleOption: o
    });
  }, se = (e, n, l, o) => {
    switch (o) {
      case "boolean":
        return !!e;
      case "single": {
        const d = me();
        if (d) {
          const h = n.map((C) => ge(s.value, t, C, l)), V = h.every((C) => C === d || C === !0), $ = h.every((C) => !C || C === "");
          return V ? d : $ ? "" : null;
        }
        return !!e;
      }
      case "multiple":
        return typeof e == "string" ? e : e || "";
      default:
        return e;
    }
  }, S = (e, n, l, o = !1) => {
    if (o)
      e.forEach((d) => M(d, n, l));
    else {
      const d = u[n] || "", h = H(d, l, F.value);
      e.forEach((V) => {
        K(s.value, t, V, d, h, F.value);
      });
    }
  }, i = (e, n) => {
    if (Z()) {
      const l = u[n] || "", o = e.map(($) => {
        const C = ge(s.value, t, $, l);
        return C === !0 ? oe(n)[0] || "" : String(C || "");
      }), d = o[0] || "";
      return o.every(($) => $ === d) ? d : null;
    } else {
      const l = u[n] || "";
      if (F.value === "single") {
        const d = me();
        if (d) {
          const h = e.map((C) => ge(s.value, t, C, l)), V = h.every((C) => C === d || C === !0), $ = h.every((C) => !C || C === "");
          return V ? d : $ ? "" : null;
        }
      }
      const o = bt(s.value, t, e, l, F.value);
      return F.value === "multiple" && o === !1 && e.every((h) => {
        const V = ge(s.value, t, h, l, F.value);
        return V === "" || V === !1 || V === null || V === void 0;
      }) ? "" : o;
    }
  }, m = (e) => {
    const { location: n, locationType: l = "single", optionIndex: o, stateValue: d, isAggregate: h = !1, customLabel: V } = e, $ = oe(o), C = $.length > 1 ? "select" : "checkbox", Q = h ? ie(o, V || l) : ie(o, n), R = F.value === "multiple" && Q.length === 1 && g;
    if (R && Q[0]) {
      if (h) {
        let ue = [];
        l === "all" ? ue = _.value : l === "faces" ? ue = B.value : l === "sides" ? ue = U.value : n && te(n) && (ue = ae(n)), ue.forEach((ht) => {
          const mt = x(ht, o);
          (!mt || mt !== Q[0]) && M(ht, o, Q[0]);
        });
      } else if (n) {
        const ue = x(n, o);
        (!ue || ue !== Q[0]) && M(n, o, Q[0]);
      }
    }
    const J = F.value === "multiple" && (Q.length === 0 || R), W = d !== void 0 ? d : n ? x(n, o) : null, pe = C === "select" ? dt(n || l, o) : void 0, le = C === "checkbox" && $.length === 1 ? $[0] : void 0;
    let qe, Ge;
    return C === "checkbox" && $.length === 1 && (qe = $[0], Ge = ""), {
      inputType: C,
      // Alias for backward compatibility
      type: C,
      value: W,
      options: pe,
      disabled: J,
      label: le,
      indeterminate: W === null && C === "checkbox",
      trueValue: qe,
      falseValue: Ge
    };
  }, E = (e, n, l) => m({
    locationType: e,
    optionIndex: n,
    stateValue: l,
    isAggregate: !0
  }), M = (e, n, l) => {
    const o = u[n] || "";
    if (t === "banding" && ["side.l1", "side.l2", "side.w1", "side.w2"].includes(e)) {
      const d = s.value ? { l: s.value.l, w: s.value.w } : null;
      console.log("[setValue] extraType:", t, "location:", e, "value:", l, "dims:", d, "model:", P);
    }
    if (Z()) {
      const d = Se(e, n);
      let h;
      if (d === "checkbox") {
        const $ = oe(n)[0];
        h = l ? $ : "";
      } else
        h = l || "";
      xe(s.value, t, e, o, h);
    } else
      K(s.value, t, e, o, l, F.value);
  }, x = (e, n) => {
    const l = u[n] || "";
    if (Z()) {
      const o = ge(s.value, t, e, l);
      if (Se(e, n) === "checkbox") {
        const V = oe(n)[0];
        return o === !0 || o === V ? V : "";
      } else
        return o || "";
    } else {
      const o = ge(s.value, t, e, l, F.value);
      return Y(o, F.value);
    }
  }, X = (e, n) => {
    S(_.value, e, n, Z());
  }, re = (e) => {
    if (Z()) {
      const n = u[e] || "", l = _.value.map((h) => {
        const V = ge(s.value, t, h, n);
        return V === !0 ? oe(e)[0] || "" : String(V || "");
      }), o = l[0] || "";
      return l.every((h) => h === o) ? o : null;
    } else {
      const n = u[e] || "", l = bt(s.value, t, _.value, n, F.value);
      return se(l, _.value, n, F.value);
    }
  }, Xe = () => {
    De(s.value, t, _.value, F.value);
  }, ke = (e) => e === "faces" ? {
    locations: B.value,
    isSupported: q.value
  } : {
    locations: U.value,
    isSupported: T.value
  }, et = (e, n, l) => {
    const { locations: o, isSupported: d } = ke(e);
    d && S(o, n, l, Z());
  }, Ie = (e, n) => {
    const { locations: l, isSupported: o } = ke(e);
    return o ? i(l, n) : null;
  }, tt = (e) => {
    const { locations: n, isSupported: l } = ke(e);
    l && De(s.value, t, n, F.value);
  }, st = (e, n) => {
    const { isSupported: l } = ke(e);
    if (!l) return { type: "checkbox", value: !1 };
    const o = Ie(e, n);
    return E(e, n, o);
  }, je = (e, n) => {
    et("faces", e, n);
  }, Be = (e, n) => {
    et("sides", e, n);
  }, Ce = (e) => Ie("faces", e), Ae = (e) => Ie("sides", e), nt = () => {
    tt("faces");
  }, rt = () => {
    tt("sides");
  }, be = (e) => b.value.find((n) => n.id === e), te = (e) => ["all", "faces", "sides"].includes(e) ? !1 : !e.includes("."), ae = (e) => {
    const n = be(e);
    return n ? n.locations.filter((l) => _.value.includes(l)) : [];
  }, at = (e, n, l) => {
    const o = ae(e);
    o.length !== 0 && (o.forEach((d) => M(d, n, l)), he(s));
  }, Oe = (e, n) => {
    const l = ae(e);
    if (l.length === 0) return null;
    const o = i(l, n);
    return !Z() && (o === null || o === !1 || o === "") ? "" : o;
  }, It = (e) => {
    const n = ae(e);
    n.length !== 0 && De(s.value, t, n, F.value);
  }, jt = (e, n) => {
    const l = Oe(e, n), o = be(e);
    return m({
      location: e,
      optionIndex: n,
      stateValue: l,
      isAggregate: !0,
      customLabel: o?.label
    });
  }, it = (e) => {
    as(s.value, t, e, F.value);
  }, ot = (e) => e === "all" ? _.value.some((n) => !!x(n, 0)) : e === "faces" && q.value ? B.value.some((n) => !!x(n, 0)) : e === "sides" && T.value ? U.value.some((n) => !!x(n, 0)) : te(e) ? ae(e).some((l) => !!x(l, 0)) : _.value.includes(e) ? !!x(e, 0) : !1, Pe = (e) => {
    if (e === "all") return ce("general.all");
    if (e === "faces") return `${ce("general.all")} ${ce("machining.face_other")}`;
    if (e === "sides") return `${ce("general.all")} ${ce("woodwork.edge_other")}`;
    if (te(e)) {
      const o = be(e);
      if (o) return o.label;
    }
    if (e.startsWith("face.")) {
      const d = `faces.${e.replace("face.", "")}`;
      return ce(d);
    }
    if (e.startsWith("side.")) {
      let o = e.replace("side.", "");
      (P === 1 || P === 2) && s.value && s.value.w > s.value.l && (o = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[o] || o);
      const d = `sides.${o}`;
      return ce(d);
    }
    const n = `fields.${e}`, l = ce(n);
    return l !== n ? l : f?.[e] ? f[e] : e;
  }, Se = (e, n) => F.value === "boolean" ? "checkbox" : oe(n).length > 1 ? "select" : "checkbox", lt = (e, n) => m({
    location: e,
    optionIndex: n,
    isAggregate: !1
  }), ut = (e) => {
    const n = re(e);
    return E("all", e, n);
  }, ct = (e) => st("faces", e), ft = (e) => st("sides", e), Bt = (e, n) => e === "all" ? ut(n) : e === "faces" ? ct(n) : e === "sides" ? ft(n) : te(e) ? jt(e, n) : lt(e, n), ie = (e, n) => {
    const d = (ve(t)?.options || a)[e];
    if (!d || d[0] === !0)
      return [];
    const h = n && typeof n == "string" && (n.startsWith("face.") || n.startsWith("side.")), V = n && typeof n == "string" && te(n), $ = !h && (n === "all" || n === "faces" || n === "sides" || V);
    if (Array.isArray(d) && d.length === 1 && typeof d[0] == "string" && !(g && L && (h || $) && e > 0))
      return d;
    if (g && L && h) {
      const R = [];
      if (e > 0)
        for (let J = 0; J < e; J++) {
          const W = x(n, J);
          if (typeof W == "string" && W)
            R.push(W);
          else if (typeof W == "boolean")
            R.push(W);
          else {
            const pe = ve(t), le = yt(s.value, t, n);
            return le && typeof le == "object" && !Array.isArray(le) && Object.keys(le).length > 1 && pe?.options[e] ? pe.options[e] : [];
          }
        }
      return L(A, R, e);
    }
    if (g && L && $) {
      const R = [];
      if (e > 0)
        for (let J = 0; J < e; J++) {
          let W;
          if (n === "all" ? W = re(J) : n === "faces" ? W = Ce(J) : n === "sides" ? W = Ae(J) : V && typeof n == "string" && (W = Oe(n, J)), typeof W == "string" && W)
            R.push(W);
          else if (typeof W == "boolean")
            R.push(W);
          else
            return [];
        }
      return L(A, R, e);
    }
    const C = d, Q = c ? (p.value || []).filter((R) => typeof R == "string") : [];
    return [.../* @__PURE__ */ new Set([...C, ...Q])];
  }, dt = (e, n) => {
    const o = ve(t)?.options[n] || [], d = c && p.value ? p.value.filter((Q) => typeof Q == "string") : [], h = [.../* @__PURE__ */ new Set([...o, ...d])], V = ie(n, e), $ = new Set(V);
    return h.map((Q) => ({
      value: Q,
      label: Q,
      disabled: !$.has(Q)
    }));
  }, me = () => {
    const e = ie(0);
    return e.length === 1 ? e[0] : void 0;
  }, Zt = (e) => {
    const n = ie(e);
    return n.length === 1 ? n[0] : void 0;
  }, oe = (e) => {
    const n = ve(t);
    let l = [];
    if (n?.options && n.options[e] && Array.isArray(n.options[e])) {
      const d = n.options[e];
      Array.isArray(d) && d.every((h) => typeof h == "string") && (l = d);
    }
    const o = c && p.value ? p.value.filter((d) => typeof d == "string") : [];
    return [.../* @__PURE__ */ new Set([...l, ...o])];
  }, qt = (e, n = 0) => {
    if (e === "all" || e === "faces" || e === "sides")
      return "";
    if (te(e)) {
      const o = be(e);
      return o?.price !== void 0 && Oe(e, n) ? O ? O(o.price) : o.price.toString() : "";
    }
    if (!g || !y)
      return "";
    if (!_.value.includes(e))
      return "N/A";
    const l = y(s.value, t, e, w);
    return l ? O ? O(l) : l.toString() : "N/A";
  }, Gt = (e) => !g || !y ? !1 : y(s.value, t, e, w), _e = k(() => _.value.length > 1), Fe = k(() => j.value.length > 1), pt = () => {
    if (v.value && v.value.length > 0) {
      const o = [];
      return b.value && b.value.length > 0 && b.value.forEach((d) => o.push(d.id)), o.push(...v.value), o;
    }
    const e = [];
    b.value && b.value.length > 0 && b.value.forEach((o) => e.push(o.id)), _e.value && e.push("all"), Fe.value && (Et(t).length > 0 && e.push("faces"), Vt(t).length > 0 && e.push("sides"));
    const n = /* @__PURE__ */ new Set();
    b.value && b.value.length > 0 && b.value.forEach((o) => {
      o.hideIndividualLocations && o.locations.forEach((d) => n.add(d));
    });
    const l = j.value.filter((o) => !n.has(o));
    return e.push(...l), e;
  }, Ut = () => F.value === "multiple", Dt = () => {
    const e = 1 + a.length, n = F.value === "multiple", l = g, o = e + (n ? 1 : 0) + (l ? 1 : 0);
    return {
      columns: o,
      style: `repeat(${o}, max-content)`
    };
  }, Ze = (e) => e === "all" ? "all" : e === "faces" ? "faces" : e === "sides" ? "sides" : "individual", gt = (e) => Ue(e), Kt = (e) => {
    if (e === "all")
      return _e.value;
    if (te(e))
      return be(e) ? ae(e).length > 0 : !1;
    if (v.value && v.value.length > 0)
      return v.value.includes(e);
    const n = Ze(e);
    return n === "all" ? _e.value : n === "faces" || n === "sides" ? n === "faces" && q.value && B.value.length > 0 || n === "sides" && T.value && U.value.length > 0 ? Fe.value : !1 : j.value.includes(e);
  }, zt = (e) => {
    rs(e, t, p);
  }, Rt = (e) => {
    ns([s.value], t, e, u);
  }, Wt = (e) => {
    ss([s.value], t, e);
  }, Qt = (e, n, l) => {
    if (e === "all")
      X(n, l);
    else if (e === "faces")
      je(n, l);
    else if (e === "sides")
      Be(n, l);
    else if (te(e)) {
      let d = l;
      if (!Z() && typeof l == "boolean") {
        const h = oe(n);
        h.length === 1 && (d = l ? h[0] : "");
      }
      if (!Z() && d) {
        const h = ae(e), V = new Set(h);
        b.value && (b.value.forEach(($) => {
          $.id !== e && ae($.id).filter((R) => !V.has(R)).forEach((R) => {
            M(R, n, "");
          });
        }), he(s));
      }
      at(e, n, d);
    } else
      M(e, n, l), Z() || he(s);
    const o = u.length;
    for (let d = n + 1; d < o; d++) {
      let h;
      if (e === "all" ? h = re(d) : e === "faces" ? h = Ce(d) : e === "sides" ? h = Ae(d) : te(e) ? h = Oe(e, d) : h = x(e, d), !h) {
        console.groupEnd();
        continue;
      }
      const V = ie(d, e);
      let $ = !1;
      if (typeof h == "string" ? $ = V.includes(h) : typeof h == "boolean" && h === !0 && ($ = V.length > 0), !$) {
        const C = Se(e, d) === "checkbox" ? !1 : "";
        e === "all" ? X(d, C) : e === "faces" ? je(d, C) : e === "sides" ? Be(d, C) : te(e) ? at(e, d, C) : M(e, d, C);
      }
      console.groupEnd();
    }
  }, Jt = (e, n = !0) => n && !confirm(`Delete ${t} for ${Pe(e)}?`) ? !1 : (e === "all" ? Xe() : e === "faces" ? nt() : e === "sides" ? rt() : te(e) ? It(e) : it(e), !0), Ht = () => {
    const e = s.value[t], n = s.value[`${t}Options`];
    return !(!e || typeof e != "object" || !n || typeof n != "object" || q.value && (!("faces" in e) || !("faces" in n)) || T.value && (!("sides" in e) || !("sides" in n)));
  }, Yt = () => {
    const e = [], n = s.value[t], l = s.value[`${t}Options`];
    return !n || typeof n != "object" ? e.push(`Missing or invalid ${t} property in shape`) : (q.value && !("faces" in n) && e.push(`Missing faces property in ${t}`), T.value && !("sides" in n) && e.push(`Missing sides property in ${t}`)), !l || typeof l != "object" ? e.push(`Missing or invalid ${t}Options property in shape`) : (q.value && !("faces" in l) && e.push(`Missing faces property in ${t}Options`), T.value && !("sides" in l) && e.push(`Missing sides property in ${t}Options`)), e;
  }, vt = (e) => {
    const n = [];
    if (!e || !Object.keys(e).length)
      return { valid: !0, errors: n };
    const l = Object.keys(e), o = Math.max(...l.map((d) => d.split("|").length));
    if (o <= 1)
      return { valid: !0, errors: n };
    for (const d of _.value) {
      let h;
      if (Z()) {
        const C = yt(s.value, t, d);
        C && typeof C == "object" && !Array.isArray(C) ? h = u.map((R) => {
          const J = C[R];
          if (J === !0) {
            const W = u.indexOf(R);
            return oe(W)[0] || "";
          }
          return String(J || "");
        }).join("|") : h = "";
      } else {
        const C = x(d, 0);
        h = typeof C == "string" ? C : "";
      }
      if (!h || h === "")
        continue;
      const V = h.includes("|") ? h.split("|") : [h], $ = V.filter((C) => C.trim() !== "").length;
      if ($ > 0 && $ < o) {
        const C = V.join("|"), Q = l.some((J) => J.startsWith(C + "|")), R = l.includes(C);
        if (Q && !R) {
          const J = o - $, W = V.filter((le) => le.trim() !== "").join(", "), pe = Pe(d);
          n.push(`${t} selection incomplete for ${pe}. Selected: "${W}" but ${J} more level${J > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: n.length === 0, errors: n };
  }, Xt = (e) => vt(e).errors, es = k(() => pt().map((e) => ({
    location: e,
    label: Pe(e),
    isAggregate: ["all", "faces", "sides"].includes(e) || te(e)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: F,
    // Raw computed ref (not readonly wrapped)
    allLocations: ee(_),
    faceLocations: ee(B),
    sideLocations: ee(U),
    shouldShowAll: _e,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: ee(Fe),
    renderLocations: ee(es),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: ee(q),
    supportsSides: ee(T),
    supportsBoth: ee(G),
    // Core operations
    setValue: M,
    getValue: x,
    setAll: X,
    getAll: re,
    getAllState: re,
    // Alias for backward compatibility
    deleteSingle: it,
    deleteAll: Xe,
    canDelete: ot,
    // Group-specific operations
    setAllFaces: je,
    setAllSides: Be,
    getAllFaces: Ce,
    getAllSides: Ae,
    deleteAllFaces: nt,
    deleteAllSides: rt,
    // UI helpers
    getLocationLabel: Pe,
    getInputType: Se,
    getInputConfig: lt,
    getAllInputConfig: ut,
    getAllFacesInputConfig: ct,
    getAllSidesInputConfig: ft,
    getInputConfigForLocation: Bt,
    getSelectOptions: dt,
    getSingleOptionLabel: Zt,
    // Pricing
    getPriceDisplay: qt,
    getCalculatedPrice: Gt,
    // Layout & rendering
    getRenderLocations: pt,
    shouldShowDeleteButton: Ut,
    getGridConfig: Dt,
    getLocationGroup: Ze,
    getLocationScope: gt,
    isLocationVisible: Kt,
    // Options management
    getAvailableOptions: ie,
    getSingleAvailableOption: me,
    // Initialization & migration
    initialize: N,
    initializeExtra: N,
    // Alias for backward compatibility
    initializeCustomNames: zt,
    migrateToSingle: Rt,
    migrateToBoolean: Wt,
    // Event handlers
    handleInputChange: Qt,
    handleDelete: Jt,
    // Validation
    validateShape: Ht,
    getValidationErrors: Yt,
    validateIncompleteSelections: vt,
    getIncompleteSelectionErrors: Xt,
    // Debug helpers (development only)
    getDebugInfo: (e, n) => ({
      mode: F.value,
      location: e,
      optionIndex: n,
      value: _.value.includes(e) ? x(e, n) : "N/A",
      inputType: Se(e, n),
      canDelete: ot(e),
      allState: re(n),
      availableOptions: ie(n),
      locationGroup: Ze(e),
      config: z.value,
      supportsFaces: q.value,
      supportsSides: T.value,
      supportsBoth: G.value,
      ...q.value && {
        allFacesState: Ce(n)
      },
      ...T.value && {
        allSidesState: Ae(n)
      },
      ..._.value.includes(e) && {
        locationScope: gt(e)
      }
    })
  };
}, Rs = (r) => {
  const {
    customNames: s,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: u,
    onCustomNameAdded: f,
    onCustomNameDeleted: c
  } = r, p = I(""), g = k(() => a && p.value?.trim()), A = k(() => !a || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((y) => typeof y == "string").every((y) => t.value.includes(y))), v = k(() => {
    const L = [];
    if (a && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return L;
      const w = [...s.value.filter((O) => typeof O == "string")].sort();
      L.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), w.forEach((O) => {
        (t.value?.includes(O) ?? !1) || L.push({
          id: `delete-${O}`,
          label: `Delete "${O}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return L;
  }), b = () => {
    const L = p.value?.trim();
    if (!L) return;
    if (u("", 0).map((w) => w.value).includes(L)) {
      p.value = "";
      return;
    }
    f(L), p.value = "";
  }, P = (L) => {
    const y = L.item || L;
    if (y.id?.startsWith("delete-")) {
      const w = y.id.replace("delete-", "");
      if (t.value?.includes(w)) {
        console.warn(`Cannot delete ${r.extraType} type "${w}" - it is currently in use`);
        return;
      }
      c(w);
    }
  };
  return {
    newCustomName: p,
    canAddCustomName: ee(g),
    isActionMenuDisabled: ee(A),
    customNameActions: v,
    handleAddCustomName: b,
    handleCustomNameAction: P
  };
}, Ws = (r) => {
  const {
    extraType: s,
    allOptions: t,
    labels: a,
    shapeIndex: u,
    enablePricing: f,
    mode: c,
    shouldShowAll: p,
    locations: g,
    locationGroups: A = I([]),
    shape: v = I(null),
    orientationModel: b = 0,
    getInputType: P,
    getInputConfig: L,
    getAllInputConfig: y,
    getInputConfigForLocation: w,
    canDelete: O,
    getLocationLabel: N,
    shouldShowDeleteButton: z
  } = r, F = k(() => {
    const T = [], G = /* @__PURE__ */ new Set();
    if (A.value && A.value.length > 0 && A.value.forEach((D) => {
      D.hideIndividualLocations && D.locations.forEach((H) => G.add(H));
    }), A.value && A.value.length > 0 && A.value.forEach((D) => T.push(D.id)), p.value && T.push("all"), g.value && g.value.length > 0)
      T.push(...g.value.filter((D) => D !== "all" && !G.has(D)));
    else {
      const D = Ft(s), H = Nt(s), K = xt(s), Y = Tt(s);
      H && K && Y && (Et(s).length > 0 && T.push("faces"), Vt(s).length > 0 && T.push("sides")), T.push(...D.filter((S) => !G.has(S)));
    }
    let Z = Array.from(new Set(T));
    if ((b === 1 || b === 2) && v.value && v.value.w > v.value.l) {
      const D = ["side.l1", "side.l2", "side.w1", "side.w2"], H = Z.map((K, Y) => ({ loc: K, i: Y })).filter((K) => D.includes(K.loc));
      if (H.length > 0) {
        const K = H[0].i, Y = H.filter((i) => i.loc.includes(".w")).sort((i, m) => i.loc.localeCompare(m.loc)), se = H.filter((i) => i.loc.includes(".l")).sort((i, m) => i.loc.localeCompare(m.loc)), S = [...Y.map((i) => i.loc), ...se.map((i) => i.loc)];
        Z = Z.filter((i) => !D.includes(i)), Z.splice(K, 0, ...S);
      }
    }
    return Z;
  }), j = k(() => {
    const T = 1 + t.length, G = c.value === "multiple", Z = f;
    return `repeat(${T + (G ? 1 : 0) + (Z ? 1 : 0)}, max-content)`;
  }), _ = (T, G) => `${s}-${T}-${a[G]}-${G}-${u}`, B = (T) => {
    const G = N(T);
    return `Delete ${s} for ${G}`;
  }, U = (T) => ({
    show: z(T),
    enabled: O(T),
    ariaLabel: B(T)
  }), q = (T, G) => P(T, G);
  return {
    renderLocations: ee(F),
    gridStyle: ee(j),
    getInputId: _,
    getDeleteAriaLabel: B,
    getInputConfigForLocation: w,
    getDeleteConfig: U,
    getInputTypeForLocation: q,
    // Re-export the passed functions for consistency
    getInputType: P,
    getInputConfig: L,
    getAllInputConfig: y,
    canDelete: O,
    shouldShowDeleteButton: z,
    getLocationLabel: N
  };
};
let Ve = null;
function xs() {
  const r = I(null), s = I(null), t = I(null), a = Le([]), u = Le([]), f = Le([]), c = Le([]), p = I([]), g = I(null), A = Le([]), v = I(null), b = I(null);
  return {
    // All state
    jobId: r,
    saw: s,
    activeStockAutoId: t,
    shapeList: a,
    stockList: u,
    cutList: f,
    segmentList: c,
    offcuts: p,
    metadata: g,
    unusableShapes: A,
    currentCutIndex: v,
    activeShape: b,
    r: {
      saw: s,
      activeStockAutoId: t,
      jobId: r,
      shapeList: a,
      stockList: u,
      cutList: f,
      segmentList: c,
      offcuts: p,
      unusableShapes: A,
      metadata: g,
      currentCutIndex: v
    }
  };
}
function Qs() {
  if (Ve) return Ve;
  const r = xs(), s = k(() => r.activeStockAutoId.value ? D(r.activeStockAutoId.value) : []), t = k(() => !r.activeStockAutoId.value || !r.stockList.value?.length ? null : Z(r.activeStockAutoId.value)), a = k(() => !t.value || !r.cutList.value?.length ? [] : K(t.value.autoId)), u = k(() => !t.value || !r.segmentList.value?.length ? [] : H(r.activeStockAutoId.value)), f = k(() => r.stockList.value?.length ? Y(r.stockList.value) : []), c = k(() => r.shapeList.value.filter((S) => S.added)), p = k(() => r.shapeList.value?.length ? r.shapeList.value.filter((S) => !S.added) : []), g = k(() => r.shapeList.value?.length ? os(r.shapeList.value) : []), A = k(() => r.shapeList.value?.length ? r.shapeList.value.filter((S) => !S.duplicate) : []), v = k(() => A.value.filter((S) => S.added)), b = k(() => r.stockList.value?.length ? r.stockList.value.filter((S) => S.used && !S.duplicate) : []), P = k(() => b.value.filter((S) => S.used)), L = k(() => r.cutList.value?.length ? a.value.reduce((S, i) => S + i.area, 0) : 0), y = k(() => !r.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), w = k(() => !r.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((S, i) => S + i.area, 0) : 0), O = k(() => !r.cutList.value?.length || !t.value ? null : t.value.cutType), N = k(() => r.stockList.value?.length ? r.stockList.value.filter((i) => i.used && !i.isStacked) : []), z = k(() => r.stockList.value?.length ? ls(t.value, r.stockList.value) : 0), F = k(() => {
    if (!r.stockList.value?.length) return 0;
    let S = y.value ? (L.value + w.value) / y.value : null;
    return S > 1 && (S = 1), S;
  }), j = () => {
    r.saw.value = null, r.shapeList.value.length = 0, r.stockList.value.length = 0, r.cutList.value.length = 0, r.segmentList.value.length = 0, r.offcuts.value.length = 0, r.unusableShapes.value.length = 0, r.currentCutIndex.value = null;
  }, _ = () => {
    r.saw.value = null, r.activeStockAutoId.value = null, r.activeShape.value = null, r.metadata.value = null, r.shapeList.value = [], r.stockList.value = [], r.cutList.value = [], r.segmentList.value = [], r.offcuts.value = [], r.currentCutIndex.value = null, r.unusableShapes.value = [];
  }, B = (S, i) => {
    S in this && this[S]?.sort(fs[i]);
  }, U = (S) => {
    he(S);
  }, q = () => {
    he(r.shapeList);
  }, T = () => {
    he(r.stockList);
  }, G = (S) => {
    if (!S?.shapeList?.some((i) => i.added)) {
      _();
      return;
    }
    r.metadata.value = S.metadata, r.unusableShapes.value = S.unusableShapes || [];
    try {
      S?.saw && (r.saw.value = new us(S.saw));
      const i = cs(S, {
        preventAutoRotation: !0
      });
      r.stockList.value = i.stockList, r.shapeList.value = i.shapeList, r.cutList.value = i.cutList, r.segmentList.value = i.segmentList, r.offcuts.value = i.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((E) => he(r[E])), r.activeStockAutoId.value = Y(r.stockList.value)?.[0]?.autoId || null;
    } catch (i) {
      console.error("Error updating from result", i);
    }
  }, Z = (S) => r.stockList.value?.length ? r.stockList.value.find((i) => i.autoId === S) : null, D = (S) => r.shapeList.value?.length ? r.shapeList.value.filter((i) => i.added && i?.stock?.autoId === S) : [], H = (S) => r.segmentList.value?.length ? r.segmentList.value.filter((m) => m?.stock?.autoId === S) : [], K = (S) => {
    const i = r?.cutList?.value;
    return !i && !i.length ? [] : i.filter((m) => m?.stock?.autoId === S).sort((m, E) => m?.guillotineState?.order - E?.guillotineState?.order);
  }, Y = (S) => S?.length ? S.filter((i) => i.used === !0) : [], se = (S) => {
    r.activeStockAutoId.value !== S && (r.activeShape.value = null, r.activeStockAutoId.value = S);
  };
  return Ve = {
    // all result items for convenience
    r: r.r,
    // state
    activeStockAutoId: r.activeStockAutoId,
    saw: r.saw,
    shapeList: r.shapeList,
    stockList: r.stockList,
    cutList: r.cutList,
    segmentList: r.segmentList,
    offcuts: r.offcuts,
    unusableShapes: r.unusableShapes,
    currentCutIndex: r.currentCutIndex,
    activeShape: r.activeShape,
    // computed
    addedShapes: c,
    activeShapes: s,
    unplacedShapes: p,
    uniqueShapes: A,
    uniqueAddedShapes: v,
    unplacedShapeTally: g,
    uniqueStock: b,
    uniqueUsedStock: P,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: L,
    activeCutType: O,
    usedStock: f,
    stackedStock: N,
    activeStockArea: y,
    activeShapeArea: w,
    activeStockStackCount: z,
    activeTotalArea: F,
    activeSegments: u,
    // methods
    reset: j,
    clear: _,
    sortItems: B,
    update: U,
    updateShapes: q,
    updateStock: T,
    updateFromResult: G,
    getStock: Z,
    getShapes: D,
    getSegments: H,
    getCuts: K,
    setActiveStockAutoId: se
  }, Ve;
}
const ne = I(null);
let Ts = 0;
function Js(r) {
  const s = r || `action-menu-${++Ts}-${Date.now()}`, t = k({
    get: () => ne.value === s,
    set: (v) => {
      v ? ne.value = s : ne.value === s && (ne.value = null);
    }
  }), a = () => {
    ne.value = s;
  }, u = () => {
    ne.value === s && (ne.value = null);
  }, f = () => {
    ne.value = null;
  }, c = () => {
    t.value = !t.value;
  }, p = k(() => ne.value !== null), g = k(() => ne.value), A = k(() => ne.value === s);
  return {
    // Instance-specific
    id: ee(I(s)),
    isOpen: t,
    open: a,
    close: u,
    toggle: c,
    isThisMenuOpen: A,
    // Global singleton state (shared across all instances)
    closeAll: f,
    isAnyMenuOpen: p,
    currentOpenMenuId: g
  };
}
function Ns() {
  const r = Date.now(), s = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${r.toString(36)}-${s}-${t}`;
}
const de = I([]), Es = 6;
function Hs() {
  const r = ({
    message: t,
    type: a = "info",
    additional: u = [],
    options: f = {},
    action: c = () => {
    }
  }) => {
    Array.isArray(u) || (console.warn("addNotice - additional must be an array"), u = []);
    const p = {
      id: Ns(),
      message: Ke(t),
      additional: u.length > 5 ? u.slice(0, 5).map((A) => Ke(A)).join("<br>") + "<br>..." : u.slice(0, 5).map((A) => Ke(A)).join("<br>"),
      type: a,
      persistent: f.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: c
    }, g = f.maxNotices ?? Es;
    if (de.value.length >= g) {
      const A = de.value.findIndex((v) => !v.persistent);
      if (A !== -1)
        de.value.splice(A, 1);
      else if (!p.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), p.id;
    }
    return de.value.push(p), !p.persistent && f.timeout !== 0 && setTimeout(() => s(p.id), f.timeout || 6e3), p.id;
  }, s = (t) => {
    de.value.findIndex((u) => u.id === t) !== -1 && (de.value = de.value.filter((u) => u.id !== t));
  };
  return {
    notices: de,
    addNotice: r,
    dismissNotice: s
  };
}
const Ct = I({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Vs() {
  return {
    progress: Ct,
    reset: () => {
      Ct.value = {
        queued: !1,
        started: !1,
        stockCount: 0,
        shapeCount: 0,
        resultCount: 0,
        complete: !1
      };
    }
  };
}
const $s = hs(() => ze({
  // Material field
  material: fe(
    We().optional(),
    {
      label: "fields.material",
      placeholder: "fields.material",
      propertyPath: "material",
      output: "string",
      group: "properties",
      order: 0
    }
  ),
  // Thickness field
  t: fe(
    Ss([Re(), We()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: St({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: St({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: fe(
    Re().int().positive().default(1),
    {
      label: "fields.q",
      placeholder: "fields.q",
      propertyPath: "q",
      group: "general",
      order: 1,
      step: 1
    }
  ),
  // Name field
  name: ds({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: fe(
    bs(["n", "l", "w"]).default("n").optional(),
    {
      label: "fields.orientationLock",
      propertyPath: "orientationLock",
      group: "properties",
      order: 3,
      options: [
        { value: "n", label: "fields.orientationLock.free" },
        { value: "l", label: "fields.orientationLock.length" },
        { value: "w", label: "fields.orientationLock.width" }
      ]
    }
  ),
  // Banding button
  banding: fe(
    Te().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: fe(
    ze({
      enabled: Te().default(!1),
      type: We().optional(),
      sides: Re().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: fe(
    ze({
      enabled: Te().default(!1),
      operations: ms(ys()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: fe(
    Te().default(!1),
    {
      label: "fields.planing",
      propertyPath: "planing",
      group: "extras",
      order: 4
    }
  )
  // Image upload
  /* imageUpload: field(
  	z.object( {
  		enabled: z.boolean().default( false ),
  		url: z.string().optional(),
  		file: z.any().optional()
  	} ).optional(),
  	{
  		label: 'image_upload',
  		propertyPath: 'imageUpload',
  		group: 'extras',
  		order: 4
  	}
  ) */
}));
function Ms(r) {
  const s = $s._def.getter();
  return r === "linear" ? s.omit({
    orientationLock: !0,
    banding: !0,
    machining: !0,
    planing: !0
  }) : r === "roll" ? s.omit({
    banding: !0,
    machining: !0,
    planing: !0
  }) : s;
}
class Is {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, t) {
    const a = [], u = this.unwrapSchema(s);
    if (!this.isZodObject(u))
      return console.warn("Schema is not a ZodObject:", u), a;
    const f = u.shape;
    for (const [c, p] of Object.entries(f)) {
      if (c.startsWith("_") || this.isComputedField(p))
        continue;
      if (c === "trim" && this.isTrimField(p)) {
        const A = this.generateTrimFields(p);
        a.push(...A);
        continue;
      }
      const g = this.extractFieldMetadata(c, p);
      g && a.push(g);
    }
    return t?.sortByOrder ? a.sort((c, p) => (c.order || 999) - (p.order || 999)) : a;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, t) {
    let a = t._metadata;
    const u = this.unwrapField(t);
    if (a || (a = u._metadata), a) {
      if (a.hidden)
        return null;
      const g = {
        name: s,
        type: a.type || this.getFieldType(u),
        label: a.label || this.formatLabel(s),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(u),
        ...a
      };
      return this.extractTypeSpecificMetadata(g, u), g;
    }
    const f = u._def?.description, c = this.parseFieldDescription(f), p = {
      name: s,
      type: this.getFieldType(u),
      label: c.label || this.formatLabel(s),
      description: c.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(u),
      ...c
    };
    return this.extractTypeSpecificMetadata(p, u), p;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const t = this.unwrapField(s);
    if (t instanceof Lt) {
      const a = t._def?.options || [];
      for (const u of a)
        if (u instanceof Ne)
          return this.isIntegerNumber(u) ? "integer" : "number";
    }
    return t instanceof Ne ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof Ls ? "string" : t instanceof ws ? "boolean" : t instanceof wt || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof ks ? "array" : t instanceof Ee ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, t) {
    const a = t;
    if (a.minValue !== void 0 && a.minValue !== -1 / 0) {
      s.min = a.minValue;
      const f = t._def?.checks?.find(
        (c) => c.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (f && a.minValue === 0) {
        const c = f._zod?.def?.inclusive ?? f.inclusive;
        s.allowZero = c === !0;
      } else
        s.allowZero = a.minValue === 0;
    }
    a.maxValue !== void 0 && a.maxValue !== 1 / 0 && (s.max = a.maxValue);
    const u = t._def?.checks || [];
    for (const f of u) {
      let c, p, g = !0;
      if (f.kind)
        c = f.kind, p = f.value, g = f.inclusive !== void 0 ? f.inclusive : !0;
      else if (f?._zod?.def) {
        const A = f._zod.def;
        c = A.check, p = A.value, g = A.inclusive !== void 0 ? A.inclusive : !0;
      } else
        continue;
      c === "min" || c === "greater_than" ? s.min === void 0 && (s.min = c === "greater_than" && !g ? p + 1e-6 : p, s.allowZero = s.min === 0) : c === "max" || c === "less_than" ? s.max === void 0 && (s.max = c === "less_than" && !g ? p - 1e-6 : p) : c === "int" && (s.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(s, t) {
    if (t instanceof Lt) {
      const a = t._def?.options || [];
      for (const u of a)
        if (u instanceof Ne) {
          this.extractNumberConstraints(s, u), s.type = "number";
          break;
        }
    } else t instanceof Ne && this.extractNumberConstraints(s, t);
    if (!s.options) {
      if (t instanceof wt) {
        const a = t._def?.values;
        Array.isArray(a) ? s.options = a.map((u) => ({
          value: u,
          label: this.formatLabel(String(u))
        })) : a ? s.options = Object.values(a).map((u) => ({
          value: u,
          label: this.formatLabel(String(u))
        })) : s.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const a = t._def?.values || {};
        s.options = Object.entries(a).filter(([u]) => isNaN(Number(u))).map(([u, f]) => ({
          value: f,
          label: this.formatLabel(u)
        }));
      }
    }
  }
  /**
   * Parse field description for metadata
   */
  parseFieldDescription(s) {
    if (!s) return {};
    const t = {}, a = s.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (a) {
      t.description = a[1].trim();
      const u = a[2].split(",");
      for (const f of u) {
        const [c, p] = f.split(":").map((g) => g.trim());
        c === "group" && (t.group = p), c === "order" && (t.order = parseInt(p)), c === "units" && (t.units = p), c === "hidden" && (t.hidden = p === "true"), c === "readonly" && (t.readonly = p === "true"), c === "placeholder" && (t.placeholder = p);
      }
    } else
      t.description = s;
    return t;
  }
  /**
   * Format a field name as a label
   */
  formatLabel(s) {
    return s.replace(/([A-Z])/g, " $1").replace(/^./, (t) => t.toUpperCase()).replace(/_/g, " ").trim();
  }
  /**
   * Check if a field is optional
   */
  isOptional(s) {
    if (s instanceof Qe || s instanceof Je)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.out, a = s._def?.in;
      if (t) {
        const u = this.isOptional(t);
        if (u) return u;
      }
      if (a) {
        const u = this.isOptional(a);
        if (u) return u;
      }
    }
    return s._def?.typeName === "ZodEffects" ? this.isOptional(s._def?.schema) : s instanceof He ? this.isOptional(s._def?.innerType) : !1;
  }
  /**
   * Check if a field is computed
   */
  isComputedField(s) {
    return s?._def?.typeName === "ZodComputed" || s?._def?.isComputed === !0;
  }
  /**
   * Unwrap schema from effects/transforms
   */
  unwrapSchema(s) {
    if (s._def?.typeName === "ZodEffects")
      return this.unwrapSchema(s._def?.schema);
    if (s._def?.typeName === "ZodLazy" || s._def?.type === "lazy") {
      const t = s._def?.getter;
      if (typeof t == "function")
        return this.unwrapSchema(t());
    }
    return s;
  }
  /**
   * Unwrap a field schema
   */
  unwrapField(s) {
    const t = s._def?.typeName, a = s.constructor.name;
    if (s instanceof Qe || s instanceof Je)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof He || a === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (t === "ZodEffects")
      return this.unwrapField(s._def?.schema);
    if (a === "ZodPipe" || s._def?.type === "pipe") {
      const u = s._def?.out;
      if (u)
        return this.unwrapField(u);
    }
    return s;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(s) {
    if (s instanceof He) {
      const t = s._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (s instanceof Qe || s instanceof Je) {
      const t = s._def?.innerType;
      if (t)
        return this.getDefaultValue(t);
    }
    if (s._def?.typeName === "ZodEffects") {
      const t = s._def?.schema;
      if (t)
        return this.getDefaultValue(t);
    }
    if ("_def" in s && "defaultValue" in s._def) {
      const t = s._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
  }
  /**
   * Check if a ZodNumber schema has integer constraints
   */
  isIntegerNumber(s) {
    return s.isInt === !0 ? !0 : (s._def?.checks || []).some((a) => a.kind === "int");
  }
  /**
   * Check if schema is a ZodObject
   */
  isZodObject(s) {
    return s instanceof Ee;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(s) {
    const t = /* @__PURE__ */ new Map(), a = [];
    for (const f of s)
      f.group ? (t.has(f.group) || t.set(f.group, []), t.get(f.group).push(f)) : a.push(f);
    const u = [];
    return t.forEach((f, c) => {
      u.push({
        name: c,
        label: this.formatLabel(c),
        fields: f.sort((p, g) => (p.order || 999) - (g.order || 999))
      });
    }), a.length > 0 && u.push({
      name: "general",
      label: "General",
      fields: a.sort((f, c) => (f.order || 999) - (c.order || 999))
    }), u.sort((f, c) => (f.order || 999) - (c.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(s) {
    const t = this.unwrapField(s);
    if (t instanceof Ee) {
      const a = t.shape;
      return "l1" in a && "l2" in a && "w1" in a && "w2" in a;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(s) {
    const t = [], a = this.unwrapField(s);
    if (!(a instanceof Ee))
      return t;
    const u = a.shape, f = ["l1", "l2", "w1", "w2"];
    for (const c of f)
      if (c in u) {
        const p = u[c], g = this.extractFieldMetadata(`trim.${c}`, p);
        g && (g.propertyPath = `trim.${c}`, g.name = `trim.${c}`, g.group || (g.group = "trim"), t.push(g));
      }
    return t;
  }
}
const At = new Is();
function js(r, s = {}) {
  const t = I([]), a = I([]), u = I(/* @__PURE__ */ new Map()), f = I(/* @__PURE__ */ new Map()), c = (L) => {
    let y = At.generateFields(r);
    s.overrides && (y = y.map((O) => {
      const N = s.overrides[O.name];
      if (N) {
        const z = { ...O, ...N };
        return N.min === void 0 && O.min !== void 0 && (z.min = O.min), N.max === void 0 && O.max !== void 0 && (z.max = O.max), z;
      }
      return O;
    })), f.value.clear();
    for (const O of y)
      f.value.set(O.name, O);
    const w = L || s.allowedFieldIds;
    if (w && w.length > 0) {
      const O = w, N = /* @__PURE__ */ new Map();
      for (const F of y)
        N.set(F.name, F);
      const z = [];
      for (const F of O) {
        const j = N.get(F);
        j && z.push(j);
      }
      y = z;
    }
    s.filter && (y = y.filter(s.filter)), t.value = y, u.value.clear();
    for (const O of y)
      u.value.set(O.name, O);
    s.grouped && (a.value = At.groupFields(y));
  };
  c();
  const p = (L) => u.value.get(L), g = (L) => f.value.get(L), A = () => f.value, v = (L, y) => {
    const w = u.value.get(L);
    w && Object.assign(w, y);
  }, b = (L) => {
    const y = p(L);
    return !(!y || y.hidden);
  }, P = (L) => {
    const y = p(L);
    if (!y) return {};
    const w = {};
    return y.required && (w.required = !0), y.type === "number" && (y.min !== void 0 && (w.min = y.min), y.max !== void 0 && (w.max = y.max)), w;
  };
  return {
    fields: k(() => t.value),
    groups: k(() => a.value),
    fieldMap: k(() => u.value),
    allFieldsMap: k(() => f.value),
    getField: p,
    getFieldMetadata: g,
    getAllFieldMetadata: A,
    updateField: v,
    isFieldVisible: b,
    getFieldValidation: P,
    regenerateFields: c
  };
}
function Ys(r) {
  const { stockType: s, materials: t = [], minDimension: a = 0 } = r, u = Ms(s), f = {
    // Add minimum dimensions for length/width
    l: {
      min: a,
      w: "1fr"
      // Full width for length field
    },
    w: {
      min: a,
      w: "1fr"
      // Full width for width field
    },
    // Specific widths for compact fields
    material: {
      w: "minmax(20px, max-content)"
    },
    t: {
      w: "minmax(20px, max-content)"
    },
    q: {
      w: "80px"
    },
    name: {
      w: "1fr"
    },
    // Icon-sized fields for special components
    orientationLock: {
      w: "36px"
    },
    banding: {
      w: "32px"
    },
    finish: {
      w: "32px"
    },
    planing: {
      w: "32px"
    },
    machining: {
      w: "32px"
    },
    imageUpload: {
      w: "32px"
    }
  };
  return t.length > 0 && (f.material = {
    ...f.material,
    type: "enum",
    options: t.map((c) => ({ value: c.name, label: c.name })),
    defaultValue: t[0]?.name
  }), js(u, {
    ...r,
    overrides: { ...f, ...r.overrides }
  });
}
const { progress: ye, reset: Ot } = Vs();
function Xs(r) {
  const s = "https://api.cutlistevo.com/";
  let t;
  const a = () => {
    t = Cs(s, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), t.on("connect", () => {
      r.refs?.connected && (r.refs.connected.value = !0), r.callbacks?.onConnect?.();
    }), t.on("connect_error", (c) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(c);
    }), t.on("connect_timeout", (c) => {
      r.refs?.connected && (r.refs.connected.value = !1), r.refs?.thinking && (r.refs.thinking.value = !1), r.callbacks?.onConnectError?.(c);
    }), t.on("result", (c) => {
      ye.value.complete = !0, r.callbacks?.onResult?.(c), t.disconnect();
    }), t.on("queued", () => {
      Ot(), ye.value.queued = !0;
    }), t.on("started", () => {
      ye.value.started = !0;
    }), t.on("progress", (c) => {
      c?.data?.message === "result" ? ye.value.resultCount++ : (ye.value.stockCount = c.data.stockCount, ye.value.shapeCount = c.data.shapeCount);
    }), t.on("user", (c) => {
      r.callbacks?.onUser?.(c);
    }), t.on("error", (c) => {
      r.refs?.thinking && (r.refs.thinking.value = !1), Ot(), r.callbacks?.onError?.(c);
    });
  }, u = () => t?.disconnect(), f = () => t?.connect();
  return a(), {
    socket: t,
    connect: f,
    disconnect: u
  };
}
function en(r, s, t) {
  let a = null;
  Me(
    () => r.value ? { l: r.value.l, w: r.value.w } : null,
    (u) => {
      const f = typeof s == "number" ? s : s.value;
      if (!Pt(f) || !u || !r.value) return;
      const c = u.w > u.l;
      if (a === null) {
        a = c;
        return;
      }
      if (a !== c) {
        const p = ps(f);
        for (const g of p)
          _t(r.value, g);
        a = c;
      }
    },
    { immediate: !0 }
  );
}
const Mt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Bs = (r) => Mt.includes(r);
function tn(r, s) {
  const t = (v) => {
    s.log?.(v);
  }, a = (v) => (s.error?.(v), { success: !1, error: v }), u = () => {
    for (const v of Mt) f(v, 0);
  }, f = (v, b) => {
    t(["setting price", v, b]);
    const { inputs: P, elements: L, setInputValue: y, formatPrice: w } = s;
    if (isNaN(b)) throw new Error("Price must be a number");
    if (!Bs(v)) return;
    const N = {
      //this should not include any extra costs
      custom: {
        visible: null,
        hidden: "smartcut-custom-price"
      },
      perPart: {
        hidden: "smartcut-per-part-price",
        visible: "per_part_price"
      },
      partArea: {
        hidden: null,
        visible: "part_area_price"
      },
      offcutArea: {
        hidden: null,
        visible: "offcut_area_price"
      },
      rollLength: {
        hidden: null,
        visible: "roll_length_price"
      },
      banding: {
        hidden: "smartcut-banding-price",
        visible: "banding_total_price"
      },
      finish: {
        hidden: "smartcut-finish-price",
        visible: "finish_total_price"
      },
      machining: {
        hidden: "smartcut-machining-price",
        visible: "machining_total_price"
      },
      surcharge: {
        hidden: "smartcut-cut-to-size-surcharge",
        visible: "surcharge_price"
      },
      cutLength: {
        hidden: "smartcut-cut-length-price",
        visible: "cut_length_price"
      },
      stock: {
        hidden: "smartcut-stock-total-price",
        visible: "stock_total_price"
      }
    }[v];
    N?.hidden && P[N.hidden] && (t(["setting hidden price", N.hidden, b]), y(N.hidden, b)), N?.visible && L[N.visible] && (L[N.visible].innerText = w(b));
  }, c = (v) => {
    const { product: b, getCurrentVariationPrice: P, isQuantityPricing: L, enableAddToCart: y, setCartQuantity: w } = s;
    let O = b?.price || P(!0) || 0;
    typeof O == "string" && (O = parseFloat(O));
    const N = r.unit_system === "imperial" ? "feet" : "meters", F = {
      full_stock: (_) => {
        if (t(["calculating cost by full sheet"]), !L()) {
          const B = _.metadata.totalStockCost;
          return f("stock", B), B;
        }
        return L() && w(_.metadata.totalUsedStock), 0;
      },
      part_area: (_) => {
        t([`calculating cost by part area in square ${N}`]);
        const B = r.unit_system === "imperial" ? 144 : 1e6, U = _.metadata.totalPartArea / B, q = U * O;
        f("partArea", q), t([`part area price in square ${N} is ${U} (part area) * ${O} (product price) = ${q}`]);
        let T = q;
        if (r?.enable_offcut_pricing && _?.offcuts) {
          const Z = _?.offcuts.reduce((H, K) => {
            const Y = K.l >= K.w ? K.l : K.w, se = K.l >= K.w ? K.w : K.l;
            return Y < r.offcut_min_length || se < r.offcut_min_width ? H + Y * se : H;
          }, 0) / B, D = Z * O;
          f("offcutArea", D), t([`calculated sellable offcut area as ${Z} square ${N}, with price ${D}`]), T += D;
        }
        if (t([`calculated total price as ${T}`]), L()) {
          const G = T / O;
          return t([`setting cart quantity to ${G}`]), w(G, 2), 0;
        } else
          return T;
      },
      cut_length: (_) => {
        t([`calculating cost by cut length in  ${N}`]);
        const B = r.unit_system === "imperial" ? 12 : 1e3, U = _.metadata.totalCutLength / B;
        return w(U, 2), 0;
      },
      full_stock_plus_cut_length: (_) => {
        t(["calculating cost by full sheet plus cut length"]);
        let B = 0;
        const U = _.metadata.totalStockCost;
        f("stock", U), B = U, L() && w(_.metadata.totalUsedStock);
        const q = r.unit_system === "imperial" ? 12 : 1e3, G = _.metadata.totalCutLength / q * r.cut_length_price;
        return f("cutLength", G), B + G;
      },
      full_stock_plus_num_parts: (_) => {
        t(["calculating cost by full sheet plus number of parts"]);
        let B = 0;
        const U = _.metadata.totalStockCost;
        f("stock", U), B = U, L() && w(_.metadata.totalUsedStock);
        const q = _.metadata.totalPartsProduced * r.per_part_price;
        return f("perPart", q), B + q;
      },
      roll_length: (_) => {
        t([`calculating cost by roll length in ${N}`]);
        const B = r.unit_system === "imperial" ? 12 : 1e3, U = _.stock.reduce((q, T) => q + T.analysis.rollLength / B * gs({ v: T.cost }), 0);
        return f("rollLength", U), U;
      }
    }[r.pricing_strategy], j = F(v);
    return y(), j;
  }, p = (v) => {
    const {
      isExtraEnabled: b,
      isMachiningEnabled: P,
      isSurchargeEnabled: L,
      inputType: y,
      getTotalBandingPrice: w,
      getTotalFinishPrice: O,
      getTotalMachiningPrice: N,
      getInputValue: z
    } = s;
    let F = 0;
    if (b("banding") && v.metadata.bandingLengthByType) {
      const j = w(v.metadata.bandingLengthByType);
      f("banding", j), F += j;
    }
    if (b("finish") && v.metadata.finishAreaByType) {
      const j = O(v.metadata.finishAreaByType);
      f("finish", j), F += j;
    }
    if (y.value === "formula") {
      const j = parseFloat(z("smartcut-hardware-price"));
      isNaN(j) || (F += j);
    }
    if (P()) {
      const j = N(v);
      f("machining", j), F += j;
    }
    if (L() && r.surcharge) {
      const j = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * v.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      f("surcharge", j), t(["added surcharge", j]), F += j;
    }
    return F;
  }, g = (v) => {
    const { getInputValue: b, setInputValue: P } = s, L = {
      "smartcut-job-id": v.jobId,
      "smartcut-dimensions": v.parts.map((y) => `${y.l}x${y.w} [${y.q}]`).join(", "),
      "smartcut-total-cut-length": v.metadata.totalCutLength,
      "smartcut-part-area": v.metadata.totalPartArea,
      "smartcut-total-cuts": v.metadata.totalCuts,
      "smartcut-total-parts": v.metadata.totalPartsProduced,
      "smartcut-machining": v.metadata.hasMachining
    };
    if (Object.entries(L).forEach(([y, w]) => {
      b(y) !== void 0 && P(y, w);
    }), b("smartcut-stock-summary") !== void 0) {
      const y = v.stock.map((w) => `${w.l}x${w.w}${w.t ? "x" + w.t : ""} [${w.q}]`).join(", ");
      P("smartcut-stock-summary", y);
    }
  };
  return {
    calculatePrice: async (v) => {
      u();
      const { isQuantityPricing: b, selectedVariation: P, setVariationPrice: L, setCartQuantity: y } = s;
      if (!v?.jobId)
        return a("No job ID provided");
      b() || y(1);
      let w = c(v);
      const O = p(v);
      if (w += O, b()) {
        const N = v.metadata.totalUsedStock, z = w / N;
        f("custom", z);
      } else {
        if (!v.metadata.totalStockCost)
          return a("Total stock cost not returned for a multiple size product");
        t([`total cost is ${w}`]), f("custom", w);
      }
      return P.value && L(w), g(v), { success: !0, totalPrice: w };
    },
    resetPricing: u
  };
}
function sn(r) {
  const {
    stockOptions: s,
    config: t,
    initialState: a,
    numberFormat: u = I("decimal")
  } = r, f = I(a?.activeFilters || []), c = I(a?.searchQuery || ""), p = I(a?.sortBy || t?.value?.defaultSort.field || "cost"), g = I(a?.sortOrder || t?.value?.defaultSort.order || "asc"), A = I(a?.displayMode || t?.value?.displayMode || "grid"), v = I(a?.currentPage || 1), b = I([]);
  function P(i, m) {
    return m.split(".").reduce((E, M) => E?.[M], i);
  }
  function L(i, m) {
    return typeof i == "object" && i !== null && typeof m == "object" && m !== null && "hex" in i && "hex" in m ? i.hex === m.hex : i === m;
  }
  function y(i, m) {
    const E = P(i, m.field);
    switch (m.type) {
      case "select":
        return L(E, m.value);
      case "multiselect":
        return Array.isArray(m.value) ? m.value.some((M) => L(E, M)) : L(E, m.value);
      case "range":
        if (m.value && typeof m.value == "object") {
          const { min: M, max: x } = m.value, X = Number(E);
          return !(isNaN(X) || M !== void 0 && X < M || x !== void 0 && X > x);
        }
        return !1;
      case "boolean":
        return !!E == !!m.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function w(i, m) {
    if (!m.trim()) return !0;
    const E = m.toLowerCase();
    return [
      i.name,
      i.material,
      i.description,
      i.category,
      ...i.tags || []
    ].some((x) => x && String(x).toLowerCase().includes(E));
  }
  const O = k(() => {
    let i = [...s.value];
    c.value && (i = i.filter((m) => w(m, c.value)));
    for (const m of f.value)
      i = i.filter((E) => y(E, m));
    return i;
  }), N = k(() => {
    const i = [...O.value];
    return i.sort((m, E) => {
      const M = P(m, p.value), x = P(E, p.value);
      if (M == null && x == null) return 0;
      if (M == null) return 1;
      if (x == null) return -1;
      let X = 0;
      return typeof M == "string" && typeof x == "string" ? X = M.localeCompare(x) : typeof M == "number" && typeof x == "number" ? X = M - x : X = String(M).localeCompare(String(x)), g.value === "asc" ? X : -X;
    }), i;
  }), z = k(() => {
    const i = t?.value?.itemsPerPage || 20, m = (v.value - 1) * i, E = m + i;
    return N.value.slice(m, E);
  }), F = k(() => {
    const i = t?.value?.itemsPerPage || 20;
    return Math.ceil(N.value.length / i);
  });
  function j(i, m, E = "select") {
    _(i), f.value.push({ field: i, value: m, type: E }), v.value = 1;
  }
  function _(i) {
    f.value = f.value.filter((m) => m.field !== i);
  }
  function B() {
    f.value = [], c.value = "", v.value = 1;
  }
  function U(i, m) {
    p.value = i, m ? g.value = m : g.value = g.value === "asc" ? "desc" : "asc", v.value = 1;
  }
  function q(i) {
    c.value = i, v.value = 1;
  }
  function T(i) {
    i >= 1 && i <= F.value && (v.value = i);
  }
  function G(i) {
    const m = i.id || `${i.material}-${i.l}-${i.w}-${i.t}`, E = b.value.indexOf(m);
    return E === -1 ? t?.value?.maxSelection && b.value.length >= t.value.maxSelection ? !1 : (b.value.push(m), !0) : (b.value.splice(E, 1), !1);
  }
  function Z(i) {
    const m = i.id || `${i.material}-${i.l}-${i.w}-${i.t}`;
    return b.value.includes(m);
  }
  const D = k(() => s.value.filter((i) => Z(i)));
  function H() {
    b.value = [];
  }
  function K(i) {
    const {
      ...m
    } = i;
    return new vs(m, u.value);
  }
  function Y(i) {
    if (i === "color") {
      const E = /* @__PURE__ */ new Map();
      return s.value.forEach((M) => {
        const x = P(M, i);
        x != null && (typeof x == "object" && "hex" in x ? E.has(x.hex) || E.set(x.hex, x) : typeof x == "string" && (E.has(x) || E.set(x, x)));
      }), Array.from(E.values()).sort((M, x) => {
        const X = typeof M == "object" && "name" in M ? M.name : String(M), re = typeof x == "object" && "name" in x ? x.name : String(x);
        return X.localeCompare(re);
      });
    }
    const m = /* @__PURE__ */ new Set();
    return s.value.forEach((E) => {
      const M = P(E, i);
      M != null && m.add(M);
    }), Array.from(m).sort();
  }
  function se(i) {
    const m = s.value.map((E) => Number(P(E, i))).filter((E) => !isNaN(E));
    return m.length === 0 ? null : {
      min: Math.min(...m),
      max: Math.max(...m)
    };
  }
  const S = k(() => ({
    activeFilters: f.value,
    searchQuery: c.value,
    sortBy: p.value,
    sortOrder: g.value,
    displayMode: A.value,
    currentPage: v.value,
    selectedStockIds: b.value
  }));
  return {
    // State
    activeFilters: f,
    searchQuery: c,
    sortBy: p,
    sortOrder: g,
    displayMode: A,
    currentPage: v,
    selectedStockIds: b,
    // Computed
    filteredStock: O,
    sortedStock: N,
    paginatedStock: z,
    selectedStock: D,
    totalPages: F,
    currentState: S,
    // Methods
    applyFilter: j,
    removeFilter: _,
    clearFilters: B,
    updateSort: U,
    updateSearch: q,
    goToPage: T,
    toggleStockSelection: G,
    isStockSelected: Z,
    clearSelection: H,
    createInputStock: K,
    getUniqueValues: Y,
    getFieldRange: se
  };
}
export {
  Qs as a,
  Js as b,
  zs as c,
  Rs as d,
  Ws as e,
  Hs as f,
  ve as g,
  en as h,
  Xs as i,
  Ys as j,
  Vs as k,
  sn as l,
  tn as m,
  Ps as s,
  Ds as u,
  Ks as v
};
