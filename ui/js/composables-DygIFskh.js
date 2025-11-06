import { u as ps, g as ds, S as gs, r as hs, s as vs, a as ms, b as _t, C as Je, c as Bt, d as it, e as Gt, f as Zt, h as Ut, i as zt, j as Kt, k as ys, l as Ss, t as ve, m as pe, n as Nt, o as ws, p as bs, q as ks, v as ot, w as Ls, x as We, y as Is, z as wt, I as Ie, A as Tt, B as lt, D as Qe, E as xs, F as ut, G as st, H as ct, J as ft, K as Os, L as Cs, M as pt, N as me, O as As, P as Pt, Q as Fs } from "./components-D1mzaAGH.js";
import "./vendor-i18n-BuJwRgtG.js";
import { h as A, e as U, K as je, X as we, Y as oe, j as nt, k as _s } from "./vendor-vue-V1I1Po2P.js";
import { j as He, p as Ns, W as Ts, o as dt, b as Ye, a as Ps, c as Es, n as gt, s as ht, _ as $s, u as Vs, k as Et, m as Xe, q as js, X as Ms, Y as $t, $ as Ds, f as et, t as vt, v as mt, w as yt, a0 as qs } from "./vendor-4AnxBRif.js";
let tt = null;
function Bs() {
  const a = U(null), s = U(null), e = U(null), l = je([]), f = je([]), p = je([]), c = je([]), y = U([]), b = U(null), _ = je([]), w = U(null), L = U(null);
  return {
    // All state
    jobId: a,
    saw: s,
    activeStockAutoId: e,
    shapeList: l,
    stockList: f,
    cutList: p,
    segmentList: c,
    offcuts: y,
    metadata: b,
    unusableShapes: _,
    currentCutIndex: w,
    activeShape: L,
    r: {
      saw: s,
      activeStockAutoId: e,
      jobId: a,
      shapeList: l,
      stockList: f,
      cutList: p,
      segmentList: c,
      offcuts: y,
      unusableShapes: _,
      metadata: b,
      currentCutIndex: w
    }
  };
}
function on() {
  if (tt) return tt;
  const a = Bs(), s = A(() => a.activeStockAutoId.value ? ie(a.activeStockAutoId.value) : []), e = A(() => !a.activeStockAutoId.value || !a.stockList.value?.length ? null : ae(a.activeStockAutoId.value)), l = A(() => !e.value || !a.cutList.value?.length ? [] : ue(e.value.autoId)), f = A(() => !e.value || !a.segmentList.value?.length ? [] : H(a.activeStockAutoId.value)), p = A(() => a.stockList.value?.length ? le(a.stockList.value) : []), c = A(() => a.shapeList.value.filter((u) => u.added)), y = A(() => a.shapeList.value?.length ? a.shapeList.value.filter((u) => !u.added) : []), b = A(() => a.shapeList.value?.length ? ps(a.shapeList.value) : []), _ = A(() => a.shapeList.value?.length ? a.shapeList.value.filter((u) => !u.duplicate) : []), w = A(() => _.value.filter((u) => u.added)), L = A(() => a.stockList.value?.length ? a.stockList.value.filter((u) => u.used && !u.duplicate) : []), $ = A(() => L.value.filter((u) => u.used)), O = A(() => a.cutList.value?.length ? l.value.reduce((u, S) => u + S.area, 0) : 0), k = A(() => !a.stockList.value?.length || !e.value ? 0 : e.value ? e.value.area : 0), x = A(() => !a.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((u, S) => u + S.area, 0) : 0), N = A(() => !a.cutList.value?.length || !e.value ? null : e.value.cutType), B = A(() => a.stockList.value?.length ? a.stockList.value.filter((S) => S.used && !S.isStacked) : []), D = A(() => a.stockList.value?.length ? ds(e.value, a.stockList.value) : 0), Q = A(() => {
    if (!a.stockList.value?.length) return 0;
    let u = k.value ? (O.value + x.value) / k.value : null;
    return u > 1 && (u = 1), u;
  }), j = () => {
    a.saw.value = null, a.shapeList.value.length = 0, a.stockList.value.length = 0, a.cutList.value.length = 0, a.segmentList.value.length = 0, a.offcuts.value.length = 0, a.unusableShapes.value.length = 0, a.currentCutIndex.value = null;
  }, R = () => {
    a.saw.value = null, a.activeStockAutoId.value = null, a.activeShape.value = null, a.metadata.value = null, a.shapeList.value = [], a.stockList.value = [], a.cutList.value = [], a.segmentList.value = [], a.offcuts.value = [], a.currentCutIndex.value = null, a.unusableShapes.value = [];
  }, W = () => {
    const u = new ms({
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }), S = new _t({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      added: !0
    });
    S.addToStock(u);
    const F = new _t({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      added: !0
    });
    F.addToStock(u);
    const M = [
      new Je({ x: 0, y: 0, l: 500, vertical: !0, stock: u }),
      new Je({ x: 500, y: 0, l: 500, vertical: !1, stock: u }),
      new Je({ x: 500, y: 500, l: 400, vertical: !0, stock: u }),
      new Je({ x: 900, y: 500, l: 400, vertical: !1, stock: u })
    ];
    a.stockList.value = [u], a.shapeList.value = [S, F], a.cutList.value = M, a.activeStockAutoId.value = u.autoId;
  }, T = (u, S) => {
    u in this && this[u]?.sort(vs[S]);
  }, G = (u) => {
    we(u);
  }, J = () => {
    we(a.shapeList);
  }, z = () => {
    we(a.stockList);
  }, ne = (u) => {
    if (!u?.shapeList?.some((S) => S.added)) {
      R();
      return;
    }
    a.metadata.value = u.metadata, a.unusableShapes.value = u.unusableShapes || [];
    try {
      u?.saw && (a.saw.value = new gs(u.saw));
      const S = hs(u, {
        preventAutoRotation: !0
      });
      a.stockList.value = S.stockList, a.shapeList.value = S.shapeList, a.cutList.value = S.cutList, a.segmentList.value = S.segmentList, a.offcuts.value = S.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((M) => we(a[M])), a.activeStockAutoId.value = le(a.stockList.value)?.[0]?.autoId || null;
    } catch (S) {
      console.error("Error updating from result", S);
    }
  }, ae = (u) => a.stockList.value?.length ? a.stockList.value.find((S) => S.autoId === u) : null, ie = (u) => a.shapeList.value?.length ? a.shapeList.value.filter((S) => S.added && S?.stock?.autoId === u) : [], H = (u) => a.segmentList.value?.length ? a.segmentList.value.filter((F) => F?.stock?.autoId === u) : [], ue = (u) => {
    const S = a?.cutList?.value;
    return !S && !S.length ? [] : S.filter((F) => F?.stock?.autoId === u).sort((F, M) => F?.guillotineState?.order - M?.guillotineState?.order);
  }, le = (u) => u?.length ? u.filter((S) => S.used === !0) : [], de = (u) => {
    a.activeStockAutoId.value !== u && (a.activeShape.value = null, a.activeStockAutoId.value = u);
  };
  return tt = {
    // all result items for convenience
    r: a.r,
    // state
    activeStockAutoId: a.activeStockAutoId,
    saw: a.saw,
    shapeList: a.shapeList,
    stockList: a.stockList,
    cutList: a.cutList,
    segmentList: a.segmentList,
    offcuts: a.offcuts,
    unusableShapes: a.unusableShapes,
    currentCutIndex: a.currentCutIndex,
    activeShape: a.activeShape,
    // computed
    addedShapes: c,
    activeShapes: s,
    unplacedShapes: y,
    uniqueShapes: _,
    uniqueAddedShapes: w,
    unplacedShapeTally: b,
    uniqueStock: L,
    uniqueUsedStock: $,
    activeStock: e,
    activeCuts: l,
    activeCutsArea: O,
    activeCutType: N,
    usedStock: p,
    stackedStock: B,
    activeStockArea: k,
    activeShapeArea: x,
    activeStockStackCount: D,
    activeTotalArea: Q,
    activeSegments: f,
    // methods
    reset: j,
    clear: R,
    createTestData: W,
    sortItems: T,
    update: G,
    updateShapes: J,
    updateStock: z,
    updateFromResult: ne,
    getStock: ae,
    getShapes: ie,
    getSegments: H,
    getCuts: ue,
    setActiveStockAutoId: de
  }, tt;
}
const fe = U(null);
let Gs = 0;
function ln(a) {
  const s = a || `action-menu-${++Gs}-${Date.now()}`, e = A({
    get: () => fe.value === s,
    set: (w) => {
      w ? fe.value = s : fe.value === s && (fe.value = null);
    }
  }), l = () => {
    fe.value = s;
  }, f = () => {
    fe.value === s && (fe.value = null);
  }, p = () => {
    fe.value = null;
  }, c = () => {
    e.value = !e.value;
  }, y = A(() => fe.value !== null), b = A(() => fe.value), _ = A(() => fe.value === s);
  return {
    // Instance-specific
    id: oe(U(s)),
    isOpen: e,
    open: l,
    close: f,
    toggle: c,
    isThisMenuOpen: _,
    // Global singleton state (shared across all instances)
    closeAll: p,
    isAnyMenuOpen: y,
    currentOpenMenuId: b
  };
}
const Rt = "cle-extras-config", Zs = () => {
  try {
    const a = localStorage.getItem(Rt);
    return a ? JSON.parse(a) : {};
  } catch {
    return {};
  }
}, Us = (a) => {
  try {
    localStorage.setItem(Rt, JSON.stringify(a));
  } catch {
  }
}, Vt = U(Zs()), jt = (a, s) => {
  Vt.value[a] = s, Is(a, s), Us(Vt.value);
}, Se = (a) => Ss(a), zs = (a, s) => {
  const e = Se(a);
  if (!e || !e.options || e.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const l = e.options[0], f = Array.isArray(l) && typeof l[0] == "string" ? l : [];
  if (f.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const p = (b) => e.options.length > 1 ? b.includes("|") ? e.pricing && Object.keys(e.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(e.pricing, b) ? !0 : Object.keys(e.pricing).some((L) => L.startsWith(b + "|") || L === b) : b.split("|").every((w, L) => {
    if (L >= e.options.length) return !1;
    const $ = e.options[L];
    return Array.isArray($) && typeof $[0] == "string" && $.includes(w);
  }) : e.options.some((_) => Array.isArray(_) && typeof _[0] == "string" && _.includes(b)) : f.includes(b), c = /* @__PURE__ */ new Set();
  let y = 0;
  return s.forEach((b) => {
    if (!b.extras?.[a]) return;
    const _ = b.extras[a].sides || {};
    Object.entries(_).forEach(([L, $]) => {
      typeof $ == "string" && $ && !p($) && (c.add($), _[L] = "", y++);
    });
    const w = b.extras[a].faces || {};
    Object.entries(w).forEach(([L, $]) => {
      typeof $ == "string" && $ && !p($) && (c.add($), w[L] = "", y++);
    });
  }), {
    cleanedCount: y,
    invalidOptions: Array.from(c)
  };
}, un = (a) => {
  const {
    shape: s,
    extraType: e,
    allOptions: l,
    labels: f,
    userFriendlyFieldMap: p,
    allowCustomNames: c,
    customNames: y = U([]),
    enablePricing: b = !1,
    pricing: _,
    locations: w = U([]),
    locationGroups: L = U([]),
    getAvailablePricingOptions: $,
    getPrice: O,
    findExtrasPrice: k,
    formatPrice: x
  } = a, N = () => {
    const t = Se(e), r = t?.options || l, d = t?.labels || f;
    ys(s.value, e, r, d, y.value);
  };
  N(), nt(s, (t) => {
    if (t) {
      const d = t.extras?.[e], v = d?.sides || {}, m = d?.options?.sides || {};
      let I = !1;
      for (const [V, Z] of Object.entries(v))
        if (typeof Z == "string") {
          if (Z.includes("|") && !m[V]) {
            I = !0;
            break;
          } else if (Z !== "" && !m[V]) {
            I = !0;
            break;
          }
        }
      I && N();
    }
  }, { deep: !0, immediate: !1 });
  const B = A(() => Se(e)), D = A(() => {
    const r = B.value?.options || l;
    if (r.length > 1)
      return "multiple";
    const v = (r[0] || []).filter((Z) => typeof Z == "string"), m = (y.value || []).filter((Z) => typeof Z == "string"), V = Array.from(/* @__PURE__ */ new Set([...v, ...m])).length;
    return V === 0 ? "boolean" : V === 1 ? "single" : "multiple";
  }), Q = A(() => Bt(e)), j = A(() => w.value && w.value.length > 0 ? w.value.filter((t) => t !== "all" && t !== "faces" && t !== "sides") : Q.value), R = A(() => j.value.filter((t) => it(t) === "face")), W = A(() => j.value.filter((t) => it(t) === "side")), T = A(() => Gt(e)), G = A(() => Zt(e)), J = A(() => Ut(e)), z = () => B.value?.options && B.value.options.length > 1, ne = (t, r, d) => {
    const { singleOption: v = Fe(), operation: m } = d;
    switch (r) {
      case "boolean":
        return !!t;
      case "single":
        return v ? m === "process" || m === "set" ? t && v ? v : "" : t === v ? v : "" : !!t;
      case "multiple":
        return t || "";
      default:
        return t;
    }
  }, ae = (t, r, d) => ne(r, d, { operation: "process" }), ie = (t, r, d, v, m, I) => {
    switch (I) {
      case "boolean":
        We(t, r, d, v, !!m);
        break;
      case "single": {
        const V = Fe();
        We(t, r, d, v, m ? V : "");
        break;
      }
      case "multiple":
        We(t, r, d, v, m || "");
        break;
    }
  }, H = (t, r, d = {}) => {
    const v = d.singleOption || Fe();
    return d.allowCustomNames ?? (v && [].includes(v.toString())), ne(t, r, {
      operation: "get",
      singleOption: v
    });
  }, ue = (t, r, d, v) => {
    switch (v) {
      case "boolean":
        return !!t;
      case "single": {
        const m = Fe();
        if (m) {
          const I = r.map((E) => pe(s.value, e, E, d)), V = I.every((E) => E === m || E === !0), Z = I.every((E) => !E || E === "");
          return V ? m : Z ? "" : null;
        }
        return !!t;
      }
      case "multiple":
        return typeof t == "string" ? t : t || "";
      default:
        return t;
    }
  }, le = (t, r, d, v = !1) => {
    if (v)
      t.forEach((m) => F(m, r, d));
    else {
      const m = f[r] || "", I = ae(m, d, D.value);
      t.forEach((V) => {
        ie(s.value, e, V, m, I, D.value);
      });
    }
  }, de = (t, r) => {
    if (z()) {
      const d = t.map((V) => (pe(s.value, e, V, "value") || "").split("|")[r] || ""), v = d[0] || "";
      return d.every((V) => V === v) ? v : null;
    } else {
      const d = f[r] || "";
      if (D.value === "single") {
        const m = Fe();
        if (m) {
          const I = t.map((E) => pe(s.value, e, E, d)), V = I.every((E) => E === m || E === !0), Z = I.every((E) => !E || E === "");
          return V ? m : Z ? "" : null;
        }
      }
      const v = Nt(s.value, e, t, d, D.value);
      return D.value === "multiple" && v === !1 && t.every((I) => {
        const V = pe(s.value, e, I, d, D.value);
        return V === "" || V === !1 || V === null || V === void 0;
      }) ? "" : v;
    }
  }, u = (t) => {
    const { location: r, locationType: d = "single", optionIndex: v, stateValue: m, isAggregate: I = !1, customLabel: V } = t, Z = Ve(v), E = Z.length > 1 ? "select" : "checkbox", X = I ? ge(v, V || d) : ge(v, r), ee = D.value === "multiple" && X.length === 1 && b;
    if (ee && X[0]) {
      if (I) {
        let he = [];
        d === "all" ? he = j.value : d === "faces" ? he = R.value : d === "sides" ? he = W.value : r && re(r) && (he = ce(r)), he.forEach((At) => {
          const Ft = M(At, v);
          (!Ft || Ft !== X[0]) && F(At, v, X[0]);
        });
      } else if (r) {
        const he = M(r, v);
        (!he || he !== X[0]) && F(r, v, X[0]);
      }
    }
    const se = D.value === "multiple" && (X.length === 0 || ee), te = m !== void 0 ? m : r ? M(r, v) : null, _e = E === "select" ? kt(r || d, v) : void 0, Ne = E === "checkbox" && Z.length === 1 ? Z[0] : void 0;
    let Ot, Ct;
    return E === "checkbox" && Z.length === 1 && (Ot = Z[0], Ct = ""), {
      inputType: E,
      // Alias for backward compatibility
      type: E,
      value: te,
      options: _e,
      disabled: se,
      label: Ne,
      indeterminate: te === null && E === "checkbox",
      trueValue: Ot,
      falseValue: Ct
    };
  }, S = (t, r, d) => u({
    locationType: t,
    optionIndex: r,
    stateValue: d,
    isAggregate: !0
  }), F = (t, r, d) => {
    const v = f[r] || "";
    if (z()) {
      const m = P(t, r);
      let I;
      if (m === "checkbox") {
        const X = Ve(r)[0];
        I = d ? X : "";
      } else
        I = d || "";
      const V = [];
      for (let E = 0; E < f.length; E++)
        if (E === r)
          V[E] = I;
        else {
          const ee = (pe(s.value, e, t, "value") || "").split("|");
          V[E] = ee[E] || "";
        }
      for (; V.length > 0 && V[V.length - 1] === ""; )
        V.pop();
      const Z = V.join("|");
      We(s.value, e, t, "value", Z);
    } else
      ie(s.value, e, t, v, d, D.value);
  }, M = (t, r) => {
    const d = f[r] || "";
    if (z()) {
      const I = (pe(s.value, e, t, "value") || "").split("|")[r] || "";
      if (P(t, r) === "checkbox") {
        const E = Ve(r)[0];
        return I === E ? E : "";
      } else
        return I;
    } else {
      const v = pe(s.value, e, t, d, D.value);
      return H(v, D.value);
    }
  }, K = (t, r) => {
    le(j.value, t, r, z());
  }, Y = (t) => {
    if (z()) {
      const r = j.value.map((m) => (pe(s.value, e, m, "value") || "").split("|")[t] || ""), d = r[0] || "";
      return r.every((m) => m === d) ? d : null;
    } else {
      const r = f[t] || "", d = Nt(s.value, e, j.value, r, D.value);
      return ue(d, j.value, r, D.value);
    }
  }, be = () => {
    ot(s.value, e, j.value, D.value);
  }, xe = (t) => t === "faces" ? {
    locations: R.value,
    isSupported: T.value
  } : {
    locations: W.value,
    isSupported: G.value
  }, Be = (t, r, d) => {
    const { locations: v, isSupported: m } = xe(t);
    m && le(v, r, d, z());
  }, Pe = (t, r) => {
    const { locations: d, isSupported: v } = xe(t);
    return v ? de(d, r) : null;
  }, Ge = (t) => {
    const { locations: r, isSupported: d } = xe(t);
    d && ot(s.value, e, r, D.value);
  }, Ze = (t, r) => {
    const { isSupported: d } = xe(t);
    if (!d) return { type: "checkbox", value: !1 };
    const v = Pe(t, r);
    return S(t, r, v);
  }, Ee = (t, r) => {
    Be("faces", t, r);
  }, $e = (t, r) => {
    Be("sides", t, r);
  }, Oe = (t) => Pe("faces", t), Ce = (t) => Pe("sides", t), Ue = () => {
    Ge("faces");
  }, ze = () => {
    Ge("sides");
  }, ke = (t) => L.value.find((r) => r.id === t), re = (t) => ["all", "faces", "sides"].includes(t) ? !1 : !t.includes("."), ce = (t) => {
    const r = ke(t);
    return r ? r.locations.filter((d) => j.value.includes(d)) : [];
  }, at = (t, r, d) => {
    const v = ce(t);
    v.length !== 0 && (v.forEach((m) => F(m, r, d)), we(s));
  }, i = (t, r) => {
    const d = ce(t);
    if (d.length === 0) return null;
    const v = de(d, r);
    return !z() && (v === null || v === !1 || v === "") ? "" : v;
  }, o = (t) => {
    const r = ce(t);
    r.length !== 0 && ot(s.value, e, r, D.value);
  }, n = (t, r) => {
    const d = i(t, r), v = ke(t);
    return u({
      location: t,
      optionIndex: r,
      stateValue: d,
      isAggregate: !0,
      customLabel: v?.label
    });
  }, g = (t) => {
    Ls(s.value, e, t, D.value);
  }, h = (t) => t === "all" ? j.value.some((r) => !!M(r, 0)) : t === "faces" && T.value ? R.value.some((r) => !!M(r, 0)) : t === "sides" && G.value ? W.value.some((r) => !!M(r, 0)) : re(t) ? ce(t).some((d) => !!M(d, 0)) : j.value.includes(t) ? !!M(t, 0) : !1, C = (t) => {
    if (t === "all") return ve("general.all");
    if (t === "faces") return `${ve("general.all")} ${ve("machining.face_other")}`;
    if (t === "sides") return `${ve("general.all")} ${ve("woodwork.edge_other")}`;
    if (re(t)) {
      const v = ke(t);
      if (v) return v.label;
    }
    if (t.startsWith("face.")) {
      const m = `faces.${t.replace("face.", "")}`;
      return ve(m);
    }
    if (t.startsWith("side.")) {
      const m = `sides.${t.replace("side.", "")}`;
      return ve(m);
    }
    const r = `fields.${t}`, d = ve(r);
    return d !== r ? d : p?.[t] ? p[t] : t;
  }, P = (t, r) => D.value === "boolean" ? "checkbox" : Ve(r).length > 1 ? "select" : "checkbox", q = (t, r) => u({
    location: t,
    optionIndex: r,
    isAggregate: !1
  }), Le = (t) => {
    const r = Y(t);
    return S("all", t, r);
  }, Ae = (t) => Ze("faces", t), bt = (t) => Ze("sides", t), Qt = (t, r) => t === "all" ? Le(r) : t === "faces" ? Ae(r) : t === "sides" ? bt(r) : re(t) ? n(t, r) : q(t, r), ge = (t, r) => {
    const m = (Se(e)?.options || l)[t];
    if (!m || m[0] === !0)
      return [];
    const I = r && typeof r == "string" && (r.startsWith("face.") || r.startsWith("side.")), V = r && typeof r == "string" && re(r), Z = !I && (r === "all" || r === "faces" || r === "sides" || V);
    if (Array.isArray(m) && m.length === 1 && typeof m[0] == "string" && !(b && $ && (I || Z) && t > 0))
      return m;
    if (b && $ && I) {
      const ee = [];
      if (t > 0)
        for (let se = 0; se < t; se++) {
          const te = M(r, se);
          if (typeof te == "string" && te)
            ee.push(te);
          else if (typeof te == "boolean")
            ee.push(te);
          else {
            const _e = Se(e), Ne = pe(s.value, e, r, "value");
            return Ne && Ne.includes("|") && _e?.options[t] ? _e.options[t] : [];
          }
        }
      return $(_, ee, t);
    }
    if (b && $ && Z) {
      const ee = [];
      if (t > 0)
        for (let se = 0; se < t; se++) {
          let te;
          if (r === "all" ? te = Y(se) : r === "faces" ? te = Oe(se) : r === "sides" ? te = Ce(se) : V && typeof r == "string" && (te = i(r, se)), typeof te == "string" && te)
            ee.push(te);
          else if (typeof te == "boolean")
            ee.push(te);
          else
            return [];
        }
      return $(_, ee, t);
    }
    const E = m, X = c ? (y.value || []).filter((ee) => typeof ee == "string") : [];
    return [.../* @__PURE__ */ new Set([...E, ...X])];
  }, kt = (t, r) => {
    const v = Se(e)?.options[r] || [], m = c && y.value ? y.value.filter((X) => typeof X == "string") : [], I = [.../* @__PURE__ */ new Set([...v, ...m])], V = ge(r, t), Z = new Set(V);
    return I.map((X) => ({
      value: X,
      label: X,
      disabled: !Z.has(X)
    }));
  }, Fe = () => {
    const t = ge(0);
    return t.length === 1 ? t[0] : void 0;
  }, Ht = (t) => {
    const r = ge(t);
    return r.length === 1 ? r[0] : void 0;
  }, Ve = (t) => {
    const r = Se(e);
    let d = [];
    if (r?.options && r.options[t] && Array.isArray(r.options[t])) {
      const m = r.options[t];
      Array.isArray(m) && m.every((I) => typeof I == "string") && (d = m);
    }
    const v = c && y.value ? y.value.filter((m) => typeof m == "string") : [];
    return [.../* @__PURE__ */ new Set([...d, ...v])];
  }, Yt = (t, r = 0) => {
    if (t === "all" || t === "faces" || t === "sides")
      return "";
    if (re(t)) {
      const v = ke(t);
      return v?.price !== void 0 && i(t, r) ? x ? x(v.price) : v.price.toString() : "";
    }
    if (!b || !O)
      return "";
    if (!j.value.includes(t))
      return "N/A";
    const d = O(s.value, e, t, k);
    return d ? x ? x(d) : d.toString() : "N/A";
  }, Xt = (t) => !b || !O ? !1 : O(s.value, e, t, k), Ke = A(() => j.value.length > 1), Re = A(() => Q.value.length > 1), Lt = () => {
    if (w.value && w.value.length > 0) {
      const v = [];
      return L.value && L.value.length > 0 && L.value.forEach((m) => v.push(m.id)), v.push(...w.value), v;
    }
    const t = [];
    L.value && L.value.length > 0 && L.value.forEach((v) => t.push(v.id)), Ke.value && t.push("all"), Re.value && (zt(e).length > 0 && t.push("faces"), Kt(e).length > 0 && t.push("sides"));
    const r = /* @__PURE__ */ new Set();
    L.value && L.value.length > 0 && L.value.forEach((v) => {
      v.hideIndividualLocations && v.locations.forEach((m) => r.add(m));
    });
    const d = Q.value.filter((v) => !r.has(v));
    return t.push(...d), t;
  }, es = () => D.value === "multiple", ts = () => {
    const t = 1 + l.length, r = D.value === "multiple", d = b, v = t + (r ? 1 : 0) + (d ? 1 : 0);
    return {
      columns: v,
      style: `repeat(${v}, max-content)`
    };
  }, rt = (t) => t === "all" ? "all" : t === "faces" ? "faces" : t === "sides" ? "sides" : "individual", It = (t) => it(t), ss = (t) => {
    if (t === "all")
      return Ke.value;
    if (re(t))
      return ke(t) ? ce(t).length > 0 : !1;
    if (w.value && w.value.length > 0)
      return w.value.includes(t);
    const r = rt(t);
    return r === "all" ? Ke.value : r === "faces" || r === "sides" ? r === "faces" && T.value && R.value.length > 0 || r === "sides" && G.value && W.value.length > 0 ? Re.value : !1 : Q.value.includes(t);
  }, ns = (t) => {
    ks(t, e, y);
  }, as = (t) => {
    bs([s.value], e, t, f);
  }, rs = (t) => {
    ws([s.value], e, t);
  }, is = (t, r, d) => {
    if (t === "all")
      K(r, d);
    else if (t === "faces")
      Ee(r, d);
    else if (t === "sides")
      $e(r, d);
    else if (re(t)) {
      let m = d;
      if (!z() && typeof d == "boolean") {
        const I = Ve(r);
        I.length === 1 && (m = d ? I[0] : "");
      }
      if (!z() && m) {
        const I = ce(t), V = new Set(I);
        L.value && (L.value.forEach((Z) => {
          Z.id !== t && ce(Z.id).filter((ee) => !V.has(ee)).forEach((ee) => {
            F(ee, r, "");
          });
        }), we(s));
      }
      at(t, r, m);
    } else
      F(t, r, d), z() || we(s);
    const v = f.length;
    for (let m = r + 1; m < v; m++) {
      console.group(`Checking downstream option at index: ${m}`);
      let I;
      if (t === "all" ? I = Y(m) : t === "faces" ? I = Oe(m) : t === "sides" ? I = Ce(m) : re(t) ? I = i(t, m) : I = M(t, m), !I) {
        console.groupEnd();
        continue;
      }
      const V = ge(m, t);
      let Z = !1;
      if (typeof I == "string" ? Z = V.includes(I) : typeof I == "boolean" && I === !0 && (Z = V.length > 0), !Z) {
        const E = P(t, m) === "checkbox" ? !1 : "";
        t === "all" ? K(m, E) : t === "faces" ? Ee(m, E) : t === "sides" ? $e(m, E) : re(t) ? at(t, m, E) : F(t, m, E);
      }
      console.groupEnd();
    }
  }, os = (t, r = !0) => r && !confirm(`Delete ${e} for ${C(t)}?`) ? !1 : (t === "all" ? be() : t === "faces" ? Ue() : t === "sides" ? ze() : re(t) ? o(t) : g(t), !0), ls = () => {
    const t = s.value[e], r = s.value[`${e}Options`];
    return !(!t || typeof t != "object" || !r || typeof r != "object" || T.value && (!("faces" in t) || !("faces" in r)) || G.value && (!("sides" in t) || !("sides" in r)));
  }, us = () => {
    const t = [], r = s.value[e], d = s.value[`${e}Options`];
    return !r || typeof r != "object" ? t.push(`Missing or invalid ${e} property in shape`) : (T.value && !("faces" in r) && t.push(`Missing faces property in ${e}`), G.value && !("sides" in r) && t.push(`Missing sides property in ${e}`)), !d || typeof d != "object" ? t.push(`Missing or invalid ${e}Options property in shape`) : (T.value && !("faces" in d) && t.push(`Missing faces property in ${e}Options`), G.value && !("sides" in d) && t.push(`Missing sides property in ${e}Options`)), t;
  }, xt = (t) => {
    const r = [];
    if (!t || !Object.keys(t).length)
      return { valid: !0, errors: r };
    const d = Object.keys(t), v = Math.max(...d.map((m) => m.split("|").length));
    if (v <= 1)
      return { valid: !0, errors: r };
    for (const m of j.value) {
      const I = z() ? pe(s.value, e, m, "value") || "" : M(m, 0);
      if (!I || typeof I != "string" || I === "")
        continue;
      const V = I.includes("|") ? I.split("|") : [I], Z = V.filter((E) => E.trim() !== "").length;
      if (Z > 0 && Z < v) {
        const E = V.join("|"), X = d.some((se) => se.startsWith(E + "|")), ee = d.includes(E);
        if (X && !ee) {
          const se = v - Z, te = V.filter((Ne) => Ne.trim() !== "").join(", "), _e = C(m);
          r.push(`${e} selection incomplete for ${_e}. Selected: "${te}" but ${se} more level${se > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: r.length === 0, errors: r };
  }, cs = (t) => xt(t).errors, fs = A(() => Lt().map((t) => ({
    location: t,
    label: C(t),
    isAggregate: ["all", "faces", "sides"].includes(t) || re(t)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: D,
    // Raw computed ref (not readonly wrapped)
    allLocations: oe(j),
    faceLocations: oe(R),
    sideLocations: oe(W),
    shouldShowAll: Ke,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: oe(Re),
    renderLocations: oe(fs),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: oe(T),
    supportsSides: oe(G),
    supportsBoth: oe(J),
    // Core operations
    setValue: F,
    getValue: M,
    setAll: K,
    getAll: Y,
    getAllState: Y,
    // Alias for backward compatibility
    deleteSingle: g,
    deleteAll: be,
    canDelete: h,
    // Group-specific operations
    setAllFaces: Ee,
    setAllSides: $e,
    getAllFaces: Oe,
    getAllSides: Ce,
    deleteAllFaces: Ue,
    deleteAllSides: ze,
    // UI helpers
    getLocationLabel: C,
    getInputType: P,
    getInputConfig: q,
    getAllInputConfig: Le,
    getAllFacesInputConfig: Ae,
    getAllSidesInputConfig: bt,
    getInputConfigForLocation: Qt,
    getSelectOptions: kt,
    getSingleOptionLabel: Ht,
    // Pricing
    getPriceDisplay: Yt,
    getCalculatedPrice: Xt,
    // Layout & rendering
    getRenderLocations: Lt,
    shouldShowDeleteButton: es,
    getGridConfig: ts,
    getLocationGroup: rt,
    getLocationScope: It,
    isLocationVisible: ss,
    // Options management
    getAvailableOptions: ge,
    getSingleAvailableOption: Fe,
    // Initialization & migration
    initialize: N,
    initializeExtra: N,
    // Alias for backward compatibility
    initializeCustomNames: ns,
    migrateToSingle: as,
    migrateToBoolean: rs,
    // Event handlers
    handleInputChange: is,
    handleDelete: os,
    // Validation
    validateShape: ls,
    getValidationErrors: us,
    validateIncompleteSelections: xt,
    getIncompleteSelectionErrors: cs,
    // Debug helpers (development only)
    getDebugInfo: (t, r) => ({
      mode: D.value,
      location: t,
      optionIndex: r,
      value: j.value.includes(t) ? M(t, r) : "N/A",
      inputType: P(t, r),
      canDelete: h(t),
      allState: Y(r),
      availableOptions: ge(r),
      locationGroup: rt(t),
      config: B.value,
      supportsFaces: T.value,
      supportsSides: G.value,
      supportsBoth: J.value,
      ...T.value && {
        allFacesState: Oe(r)
      },
      ...G.value && {
        allSidesState: Ce(r)
      },
      ...j.value.includes(t) && {
        locationScope: It(t)
      }
    })
  };
}, cn = (a) => {
  const {
    customNames: s,
    usedNames: e,
    allowCustomNames: l,
    getSelectOptions: f,
    onCustomNameAdded: p,
    onCustomNameDeleted: c
  } = a, y = U(""), b = A(() => l && y.value?.trim()), _ = A(() => !l || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((k) => typeof k == "string").every((k) => e.value.includes(k))), w = A(() => {
    const O = [];
    if (l && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return O;
      const x = [...s.value.filter((N) => typeof N == "string")].sort();
      O.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), x.forEach((N) => {
        (e.value?.includes(N) ?? !1) || O.push({
          id: `delete-${N}`,
          label: `Delete "${N}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return O;
  }), L = () => {
    const O = y.value?.trim();
    if (!O) return;
    if (f("", 0).map((x) => x.value).includes(O)) {
      y.value = "";
      return;
    }
    p(O), y.value = "";
  }, $ = (O) => {
    const k = O.item || O;
    if (k.id?.startsWith("delete-")) {
      const x = k.id.replace("delete-", "");
      if (e.value?.includes(x)) {
        console.warn(`Cannot delete ${a.extraType} type "${x}" - it is currently in use`);
        return;
      }
      c(x);
    }
  };
  return {
    newCustomName: y,
    canAddCustomName: oe(b),
    isActionMenuDisabled: oe(_),
    customNameActions: w,
    handleAddCustomName: L,
    handleCustomNameAction: $
  };
}, fn = (a) => {
  const {
    extraType: s,
    allOptions: e,
    labels: l,
    shapeIndex: f,
    enablePricing: p,
    mode: c,
    shouldShowAll: y,
    locations: b,
    locationGroups: _ = U([]),
    getInputType: w,
    getInputConfig: L,
    getAllInputConfig: $,
    getInputConfigForLocation: O,
    canDelete: k,
    getLocationLabel: x,
    shouldShowDeleteButton: N
  } = a, B = A(() => {
    const T = [], G = /* @__PURE__ */ new Set();
    if (_.value && _.value.length > 0 && _.value.forEach((J) => {
      J.hideIndividualLocations && J.locations.forEach((z) => G.add(z));
    }), _.value && _.value.length > 0 && _.value.forEach((J) => T.push(J.id)), y.value && T.push("all"), b.value && b.value.length > 0)
      T.push(...b.value.filter((J) => J !== "all" && !G.has(J)));
    else {
      const J = Bt(s), z = Ut(s), ne = Gt(s), ae = Zt(s);
      z && ne && ae && (zt(s).length > 0 && T.push("faces"), Kt(s).length > 0 && T.push("sides")), T.push(...J.filter((H) => !G.has(H)));
    }
    return Array.from(new Set(T));
  }), D = A(() => {
    const T = 1 + e.length, G = c.value === "multiple", J = p;
    return `repeat(${T + (G ? 1 : 0) + (J ? 1 : 0)}, max-content)`;
  }), Q = (T, G) => `${s}-${T}-${l[G]}-${G}-${f}`, j = (T) => {
    const G = x(T);
    return `Delete ${s} for ${G}`;
  }, R = (T) => ({
    show: N(T),
    enabled: k(T),
    ariaLabel: j(T)
  }), W = (T, G) => w(T, G);
  return {
    renderLocations: oe(B),
    gridStyle: oe(D),
    getInputId: Q,
    getDeleteAriaLabel: j,
    getInputConfigForLocation: O,
    getDeleteConfig: R,
    getInputTypeForLocation: W,
    // Re-export the passed functions for consistency
    getInputType: w,
    getInputConfig: L,
    getAllInputConfig: $,
    canDelete: k,
    shouldShowDeleteButton: N,
    getLocationLabel: x
  };
};
let qe = null;
function Ks() {
  if (!(!wt() || qe))
    try {
      const a = require("~/store");
      if (a && a.applicationSettings) {
        qe = a.applicationSettings;
        return;
      }
    } catch (a) {
      console.warn("Failed to load ApplicationSettings from store:", a.message);
    }
}
function Me(a, s, e = {}) {
  const {
    serializer: l = {
      read: (f) => {
        try {
          return JSON.parse(f);
        } catch {
          return f;
        }
      },
      write: (f) => JSON.stringify(f)
    }
  } = e;
  if (!wt()) {
    const p = U((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const c = localStorage.getItem(a);
          if (c)
            return l.read(c);
        }
      } catch (c) {
        console.error(`Failed to load ${a} from localStorage:`, c);
      }
      return s;
    })());
    return nt(p, (c) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const y = l.write(c);
          localStorage.setItem(a, y);
        }
      } catch (y) {
        console.error(`Failed to save ${a} to localStorage:`, y);
      }
    }, { deep: !0 }), p;
  }
  if (wt()) {
    if (Ks(), !qe)
      return console.warn("ApplicationSettings not available, using in-memory fallback"), U(s);
    const p = U((() => {
      try {
        const c = qe.getString(a);
        if (c)
          return l.read(c);
      } catch (c) {
        console.error(`Failed to load ${a} from ApplicationSettings:`, c);
      }
      return s;
    })());
    return nt(p, (c) => {
      try {
        const y = l.write(c);
        qe.setString(a, y);
      } catch (y) {
        console.error(`Failed to save ${a} to ApplicationSettings:`, y);
      }
    }, { deep: !0 }), p;
  }
  return console.warn(`No storage available for key '${a}', using in-memory fallback`), U(s);
}
function Jt(a) {
  const s = {}, e = a, l = e.code;
  if (l === "invalid_type") {
    let f = "unknown";
    if ("input" in e)
      f = typeof e.input;
    else if ("received" in e) {
      const p = e.received;
      f = typeof p == "string" ? p : typeof p;
    }
    s.expected = e.expected, s.received = f;
  } else l === "too_small" ? (s.minimum = e.minimum, s.min = e.minimum, s.inclusive = e.inclusive) : l === "too_big" ? (s.maximum = e.maximum, s.max = e.maximum, s.inclusive = e.inclusive) : l === "invalid_string" && (s.validation = e.validation);
  return s;
}
function Rs(a) {
  return a.map((s) => {
    const e = s.path.length > 0 ? s.path.join(".") : "root", l = Jt(s), f = Cs(s.message, l);
    return `[${e}] ${f}`;
  });
}
function De(a, s) {
  const e = a.safeParse(s);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    errors: e.success ? void 0 : e.error.issues
  };
}
function Js(a = {}) {
  const { numberFormat: s = "decimal" } = a, e = Me("inputs/inputShapes", [], {
    serializer: {
      read: (i) => {
        if (!i) {
          const g = "GlobalStore/inputShapes", h = localStorage.getItem(g);
          if (h)
            i = h, localStorage.removeItem(g);
          else return [];
        }
        let o;
        try {
          o = JSON.parse(i), console.log("[useInputs] Reading inputShapes from storage, raw parsed data:", o.slice(0, 2));
        } catch (g) {
          return console.error("Failed to parse input shapes JSON:", g), [];
        }
        const n = w(o, s);
        return console.log("[useInputs] After parseInputShapes, first shape:", n[0] ? {
          l: n[0].l,
          w: n[0].w,
          t: n[0].t,
          autoId: n[0].autoId
        } : "none"), n;
      },
      write: (i) => {
        const n = i.filter((h) => !h?.multiEdit).map((h) => h.toData());
        return console.log("[useInputs] Writing inputShapes to storage, first shape data:", n[0] ? {
          l: n[0].l,
          w: n[0].w,
          t: n[0].t,
          autoId: n[0].autoId
        } : "none"), JSON.stringify(n);
      }
    }
  }), l = Me("inputs/inputStock", [], {
    serializer: {
      read: (i) => {
        if (!i) return [];
        let o;
        try {
          o = JSON.parse(i), console.log("[useInputs] Reading inputStock from storage, raw parsed data:", o.slice(0, 2));
        } catch (g) {
          return console.error("  Failed to parse stock JSON:", g), [];
        }
        const n = L(o, s);
        return console.log("[useInputs] After parseInputStock, first stock:", n[0] ? {
          l: n[0].l,
          w: n[0].w,
          t: n[0].t,
          trim: n[0].trim,
          autoId: n[0].autoId
        } : "none"), n;
      },
      write: (i) => {
        const n = i.filter((h) => !h?.multiEdit).map((h) => h.toData());
        return console.log("[useInputs] Writing inputStock to storage, first stock data:", n[0] ? {
          l: n[0].l,
          w: n[0].w,
          t: n[0].t,
          trim: n[0].trim,
          autoId: n[0].autoId
        } : "none"), JSON.stringify(n);
      }
    }
  }), f = Me("inputs/inputSaw", new Ie({}), {
    serializer: {
      read: (i) => {
        if (!i) return new Ie({});
        try {
          const o = JSON.parse(i);
          return $(o);
        } catch (o) {
          return console.error("  Failed to parse saw JSON:", o), new Ie({});
        }
      },
      write: (i) => {
        if (!i)
          return JSON.stringify({});
        const o = i.toData();
        return JSON.stringify(o);
      }
    }
  }), p = Me("inputs/inputUserGroups", [], {
    serializer: {
      read: (i) => O(i ? JSON.parse(i) : []),
      write: (i) => JSON.stringify(i.map((o) => o.toData()))
    }
  }), c = Me("inputs/extrasOptions", {
    banding: { options: [] },
    finish: { options: [] },
    planing: { options: [] }
  }, {
    serializer: {
      read: (i) => {
        if (!i) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
        try {
          return JSON.parse(i);
        } catch {
          return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
        }
      },
      write: (i) => JSON.stringify(i)
    }
  }), y = U([]), b = U(!1);
  function _(i) {
    if (!i || typeof i != "object") return i;
    const o = { ...i };
    if (delete o.issues, delete o.warnings, o.trim && typeof o.trim == "object") {
      const n = o.trim;
      ("x1" in n || "x2" in n || "y1" in n || "y2" in n) && (o.trim = {
        l1: n.y1 ?? n.l1 ?? 0,
        l2: n.y2 ?? n.l2 ?? 0,
        w1: n.x1 ?? n.w1 ?? 0,
        w2: n.x2 ?? n.w2 ?? 0
      });
    }
    if (o.extras?.banding?.sides && typeof o.extras.banding.sides == "object") {
      const n = o.extras.banding.sides;
      ("x1" in n || "x2" in n || "y1" in n || "y2" in n) && (o.extras.banding.sides = {
        l1: n.y1 ?? n.l1,
        l2: n.y2 ?? n.l2,
        w1: n.x1 ?? n.w1,
        w2: n.x2 ?? n.w2
      });
    }
    if (o.extras?.finish?.sides && typeof o.extras.finish.sides == "object") {
      const n = o.extras.finish.sides;
      ("x1" in n || "x2" in n || "y1" in n || "y2" in n) && (o.extras.finish.sides = {
        l1: n.y1 ?? n.l1,
        l2: n.y2 ?? n.l2,
        w1: n.x1 ?? n.w1,
        w2: n.x2 ?? n.w2
      });
    }
    if (o.extras?.planing?.sides && typeof o.extras.planing.sides == "object") {
      const n = o.extras.planing.sides;
      ("x1" in n || "x2" in n || "y1" in n || "y2" in n) && (o.extras.planing.sides = {
        l1: n.y1 ?? n.l1,
        l2: n.y2 ?? n.l2,
        w1: n.x1 ?? n.w1,
        w2: n.x2 ?? n.w2
      });
    }
    if (o.efficiencyOptions?.primaryCompression) {
      const n = o.efficiencyOptions.primaryCompression;
      n === "x" ? o.efficiencyOptions = {
        ...o.efficiencyOptions,
        primaryCompression: "l"
      } : n === "y" && (o.efficiencyOptions = {
        ...o.efficiencyOptions,
        primaryCompression: "w"
      });
    }
    for (const n in o)
      o[n] === null && delete o[n];
    return o;
  }
  function w(i, o) {
    if (!Array.isArray(i))
      return [];
    const n = [];
    for (let g = 0; g < i.length; g++) {
      const h = i[g];
      console.log(`[parseInputShapes] Processing shape ${g}, raw item dimensions:`, {
        l: h.l,
        w: h.w,
        t: h.t,
        lType: typeof h.l,
        wType: typeof h.w,
        tType: typeof h.t
      });
      const C = _(h);
      console.log(`[parseInputShapes] After preprocessing shape ${g}:`, {
        l: C.l,
        w: C.w,
        t: C.t,
        lType: typeof C.l,
        wType: typeof C.w,
        tType: typeof C.t
      });
      try {
        const P = {
          ...C,
          skipSchemaValidation: !0
          // Skip Zod validation during construction
        };
        h.autoId && (P.autoId = h.autoId), delete P.issues, delete P.warnings;
        const q = new ft(P, o);
        console.log(`[parseInputShapes] Created shape ${g}, final values:`, {
          l: q.l,
          w: q.w,
          t: q.t,
          lType: typeof q.l,
          wType: typeof q.w,
          tType: typeof q.t
        }), n.push(q);
      } catch (P) {
        console.error(`Failed to create InputShape at index ${g}:`, P);
      }
    }
    return n;
  }
  function L(i, o) {
    if (!Array.isArray(i)) return [];
    const n = [];
    for (let g = 0; g < i.length; g++) {
      const h = i[g];
      console.log(`[parseInputStock] Processing stock ${g}, raw item:`, {
        l: h.l,
        w: h.w,
        t: h.t,
        trim: h.trim,
        lType: typeof h.l,
        wType: typeof h.w,
        tType: typeof h.t
      });
      const C = _(h);
      console.log(`[parseInputStock] After preprocessing stock ${g}:`, {
        l: C.l,
        w: C.w,
        t: C.t,
        trim: C.trim,
        lType: typeof C.l,
        wType: typeof C.w,
        tType: typeof C.t
      });
      try {
        const P = {
          ...C,
          skipSchemaValidation: !0
          // Skip Zod validation during construction
        };
        h.autoId && (P.autoId = h.autoId);
        const q = new st(P, o);
        console.log(`[parseInputStock] Created stock ${g}, final values:`, {
          l: q.l,
          w: q.w,
          t: q.t,
          trim: q.trim,
          lType: typeof q.l,
          wType: typeof q.w,
          tType: typeof q.t
        }), n.push(q);
      } catch (P) {
        console.error(`Failed to create InputStock at index ${g}:`, P);
      }
    }
    return n;
  }
  function $(i) {
    const o = _(i), n = De(lt, o);
    if (n.success && n.data) {
      const g = {
        ...n.data,
        issues: [],
        warnings: []
      };
      return i?.autoId && (g.autoId = i.autoId), new Ie(g);
    } else
      return console.error("Failed to parse input saw:", n.errors), new Ie({});
  }
  function O(i, o) {
    return Array.isArray(i) ? i.map((n) => new Os(n)).filter(Boolean) : [];
  }
  function k(i = {}) {
    try {
      const g = { ...Ns(
        (C) => {
          if (typeof C != "object" || C === null) return C;
          const P = { ...C };
          for (const q in P)
            P[q] === null && delete P[q];
          return P;
        },
        ct
      ).parse(i), isNew: !0 }, h = new ft(g, s);
      return console.log(`[useInputs] Created new InputShape with isNew=${h.isNew}, autoId=${h.autoId}`), h.createId(e.value.length), e.value.push(h), h;
    } catch (o) {
      return o instanceof He && (console.error("Shape validation failed:", o.issues), z("part", "Invalid shape data", o.issues)), null;
    }
  }
  function x(i = {}) {
    try {
      const n = { ...ut.parse(i), isNew: !0 }, g = new st(n, s);
      return g.createId(l.value.length), l.value.push(g), g;
    } catch (o) {
      return o instanceof He && (console.error("Stock validation failed:", o.issues), z("stock", "Invalid stock data", o.issues)), null;
    }
  }
  function N(i) {
    try {
      const o = i.toData(), n = ct.parse(o);
      return new ft(n, s);
    } catch (o) {
      return o instanceof He && (console.error("Shape clone validation failed:", o.issues), z("part", "Invalid shape data during cloning", o.issues)), null;
    }
  }
  function B(i) {
    try {
      const o = i.toData(), n = ut.parse(o);
      return new st(n, s);
    } catch (o) {
      return o instanceof He && (console.error("Stock clone validation failed:", o.issues), z("stock", "Invalid stock data during cloning", o.issues)), null;
    }
  }
  function D(i, o) {
    const n = e.value.find((C) => C.autoId === i);
    if (!n) return !1;
    const g = { ...n.toData(), ...o }, h = De(ct, g);
    if (h.success && h.data)
      return n.update(h.data), n.isNew ? console.log("[useInputs] Skipping validation for isNew shape in updateInputShape") : n.validate(), !0;
    {
      const C = h.errors ? Rs(h.errors) : [];
      console.error("Shape update validation failed:", C);
      const P = h.errors?.[0];
      if (P) {
        const q = Jt(P);
        new Qe({
          category: ["part"],
          message: P.message,
          // This is the translation key from Zod error map
          params: q,
          issues: y.value
        });
      } else
        z("part", "Invalid shape update");
      return !1;
    }
  }
  function Q(i, o) {
    const n = e.value.findIndex((h) => h.autoId === i);
    if (n === -1) return !1;
    const g = e.value[n];
    return g.validate({ fields: [o] }), g.issues.length === 0;
  }
  function j(i, o) {
    const n = l.value.find((C) => C.autoId === i);
    if (!n) return !1;
    const g = { ...n.toData(), ...o }, h = De(ut, g);
    return h.success && h.data ? (n.update(h.data), n.isNew || J(), !0) : (console.error("Stock update validation failed:", h.errors), z("stock", "Invalid stock update", h.errors), !1);
  }
  function R(i, o) {
    const n = l.value.findIndex((h) => h.autoId === i);
    if (n === -1) return !1;
    const g = l.value[n];
    return g.validate({ fields: [o] }), we(l), g.issues.length === 0;
  }
  function W(i) {
    if (e.value.length === 1) return !1;
    const o = e.value.findIndex((n) => n.autoId === i);
    return o === -1 ? !1 : (e.value.splice(o, 1), !0);
  }
  function T(i) {
    if (l.value.length === 1) return !1;
    const o = l.value.findIndex((n) => n.autoId === i);
    return o === -1 ? !1 : (l.value.splice(o, 1), !0);
  }
  function G(i) {
    b.value = !0;
    const o = [];
    try {
      e.value.forEach((n) => n.issues = []);
      for (let n = 0; n < e.value.length; n++) {
        const g = e.value[n];
        if (g.isNew)
          continue;
        const h = g.validate({
          inputStockList: l.value,
          index: n,
          stockType: i?.stockType ?? null,
          partTrim: 0,
          useInventory: !1,
          saw: i
        });
        o.push(...h);
      }
      e.value.some((n) => n.q > 0) || new Qe({
        category: ["part"],
        message: "errors.validation.no_parts",
        issues: o
      });
    } finally {
      b.value = !1;
    }
    return y.value = o, o;
  }
  function J(i) {
    b.value = !0;
    const o = [];
    try {
      l.value.forEach((n) => n.issues = []);
      for (let n = 0; n < l.value.length; n++) {
        const h = l.value[n].validate({ saw: i }, n);
        o.push(...h);
      }
      l.value.some((n) => n.q > 0 || n.autoAdd) || new Qe({
        category: ["stock"],
        message: "errors.validation.no_stock",
        issues: o
      });
    } finally {
      b.value = !1;
    }
    return y.value = o, o;
  }
  function z(i, o, n) {
    new Qe({
      category: [i],
      message: o,
      issues: y.value
    }), n && console.log("Validation details:", n);
  }
  function ne() {
    y.value = [], e.value.forEach((i) => i.issues = []), l.value.forEach((i) => i.issues = []);
  }
  function ae(i = {}) {
    const o = [], n = [], g = i.inputShapesOverride ?? e.value;
    if (!g.length)
      return { shapeList: [], issues: [] };
    for (let h = 0; h < g.length; h++) {
      const C = g[h];
      if (!C.q) continue;
      C.createId(h), C.applyPartTrim(i.trim, i.stockType);
      const P = C.toShape();
      i.minSpacing && i.maxDimension && (P.l <= i.maxDimension || P.w <= i.maxDimension) && (P.minSpacing = i.minSpacing), o.push(P), n.push(...P.issues);
    }
    return { shapeList: o, issues: n };
  }
  function ie(i) {
    if (!l.value.length)
      return { stockList: [], issues: [] };
    const o = [], n = [];
    for (let g = 0; g < l.value.length; g++) {
      const h = l.value[g];
      if (!h.q && !h.autoAdd) continue;
      h.createId(g), h.saw = i;
      const C = h.toStock();
      o.push(C), n.push(...C.issues);
    }
    return { stockList: o, issues: n };
  }
  function H(i, o = s) {
    const n = {
      saw: { success: !1, failed: !1 },
      shapes: { success: 0, failed: 0 },
      stock: { success: 0, failed: 0 },
      groups: { success: 0, failed: 0 }
    };
    if (i.saw) {
      const g = De(lt, _(i.saw));
      if (g.success && g.data) {
        const h = { ...g.data };
        i.saw?.autoId && (h.autoId = i.saw.autoId), f.value = new Ie(h), n.saw.success = !0;
      } else
        console.error("Failed to parse input saw:", g.errors), n.saw.failed = !0;
    }
    if (i.shapes) {
      const g = w(i.shapes, o);
      n.shapes.success = g.length, n.shapes.failed = i.shapes.length - g.length, e.value = g;
    }
    if (i.stock) {
      const g = L(i.stock, o);
      n.stock.success = g.length, n.stock.failed = i.stock.length - g.length, l.value = g;
    }
    if (i.groups) {
      const g = O(i.groups);
      n.groups.success = g.length, n.groups.failed = i.groups.length - g.length, p.value = g;
    }
    return i.extrasOptions && (c.value = { ...i.extrasOptions }), n;
  }
  function ue() {
    return {
      shapes: e.value.map((i) => i.toData()),
      stock: l.value.map((i) => i.toData()),
      inputUserGroups: p.value.map((i) => i.toData()),
      extrasOptions: c.value
    };
  }
  function le() {
    e.value = [], l.value = [], p.value = [], ne();
  }
  const de = A(() => e.value.reduce((i, o) => {
    const n = Number(o?.q);
    return n && n > 0 && !o?.multiEdit ? i + n : i;
  }, 0)), u = A(() => l.value.reduce((i, o) => {
    const n = Number(o?.q);
    return n && n > 0 && !o?.multiEdit ? i + n : i;
  }, 0)), S = A(() => e.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), F = A(() => l.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), M = A(() => y.value.length > 0), K = () => [
    {
      name: "banding",
      type: "object",
      label: "fields.banding",
      fieldMap: "banding",
      w: "32px",
      required: !1
    },
    {
      name: "finish",
      type: "object",
      label: "fields.finish",
      fieldMap: "finish",
      w: "32px",
      required: !1
    },
    {
      name: "planing",
      type: "object",
      label: "fields.planing",
      fieldMap: "planing",
      w: "32px",
      required: !1
    },
    {
      name: "machining",
      type: "object",
      label: "fields.machining",
      fieldMap: "machining",
      w: "32px",
      required: !1
    }
    // Temporarily removed DXF field
    // {
    // 	name: 'dxfPreview',
    // 	type: 'object' as const,
    // 	label: 'fields.dxfPreview',
    // 	fieldMap: 'dxfPreview',
    // 	w: '80px',
    // 	required: false
    // }
  ], Y = U(null), be = U(null), xe = () => {
    Y.value = null;
  }, Be = ne, Pe = (i = null) => {
    const o = i?.inputShapesOverride ?? e.value, n = G(i?.saw || void 0);
    return !n.length && o.length ? (xs(o, l.value, i?.saw || f.value), o.flatMap((h) => h.issues)) : n;
  }, Ge = (i, o = "decimal") => {
    const n = i?.inputSaw, g = i?.inputShapes, h = i?.inputStock, C = i?.inputUserGroups;
    return H({
      saw: n,
      shapes: g,
      stock: h,
      groups: C
    }, o);
  }, Ze = (i, o = "decimal") => H({ shapes: i }, o).shapes.success > 0, Ee = (i, o = "decimal") => H({ stock: i }, o).stock.success > 0, $e = (i, o, n, g) => {
    o[0]?.length > 0 && (c.value[i] || (c.value[i] = { options: [] }), c.value[i].options = [...o[0]]), n && g && o.length > 0 ? jt(i, {
      options: o,
      // Use all columns extracted from pricing
      labels: n,
      pricing: g
    }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: n, pricingData: g, pricingOptionsLength: o.length });
  }, Oe = () => {
    if (!Object.values(c.value).some(
      (n) => n.options.length > 0
    )) return;
    const o = (n, g) => {
      const h = {};
      for (const C of g)
        h[C] = [...n];
      return h;
    };
    return {
      banding: c.value.banding.options.length > 0 ? {
        options: {
          sides: o(c.value.banding.options, ["l1", "l2", "w1", "w2"])
        }
      } : void 0,
      finish: c.value.finish.options.length > 0 ? {
        options: {
          faces: o(c.value.finish.options, ["a", "b"])
        }
      } : void 0,
      planing: c.value.planing.options.length > 0 ? {
        options: {
          sides: o(c.value.planing.options, ["l1", "l2", "w1", "w2"]),
          faces: o(c.value.planing.options, ["a", "b"])
        }
      } : void 0
    };
  }, Ce = (i) => {
    if (!l.value.length) return "n";
    const o = i.material, n = i.t, g = l.value.filter((q) => q.material === o && q.t === n);
    if (!g.length)
      return "n";
    let h = !1, C = !1, P = !1;
    for (const q of g)
      q.grain === "l" ? (h = !0, C = !0) : q.grain === "w" && (h = !0, P = !0);
    return h ? C && P ? "y" : C ? "l" : P ? "w" : "n" : "n";
  }, Ue = (i) => {
    for (const o of e.value)
      Tt(o, i);
    for (const o of l.value)
      Tt(o, i);
  };
  function ze(i) {
    const o = { ...f.value.toData(), ...i }, n = De(lt, o);
    return n.success && n.data ? (f.value.update(n.data), !0) : (console.error("InputSaw update validation failed:", n.errors), z("saw", "Invalid saw update", n.errors), !1);
  }
  function ke() {
    f.value = new Ie({});
  }
  function re() {
    const i = f.value.validate();
    return y.value = [...y.value.filter((o) => o.category?.[0] !== "saw"), ...i], i;
  }
  let ce = !1;
  return nt(e, (i) => {
    ce || !i.length || _s(() => {
      const o = ["banding", "finish", "planing"], n = [];
      o.forEach((g) => {
        const h = /* @__PURE__ */ new Set();
        if (i.forEach((C) => {
          const P = C.extras?.[g];
          P && (P.faces && Object.values(P.faces).forEach((q) => {
            typeof q == "string" && q.trim() && q !== "Y" && h.add(q);
          }), P.sides && Object.values(P.sides).forEach((q) => {
            typeof q == "string" && q.trim() && q !== "Y" && h.add(q);
          }));
        }), h.size > 0) {
          const C = Se(g);
          if (C) {
            const P = C.options[0];
            if (Array.isArray(P) && (P.length === 0 || typeof P[0] == "string")) {
              const q = new Set(P), Le = Array.from(h).filter((Ae) => !q.has(Ae));
              if (Le.length > 0) {
                console.log(`[useInputs] Recovered ${Le.length} custom names for ${g}:`, Le);
                const Ae = [...P, ...Le];
                jt(g, {
                  ...C,
                  options: [Ae, ...C.options.slice(1)]
                });
              }
            }
          }
        }
      }), o.forEach((g) => {
        const h = zs(g, i);
        h.cleanedCount > 0 && n.push(
          `${g}: ${h.invalidOptions.join(", ")}`
        );
      }), n.length > 0 && (console.warn(
        `Some extras options no longer exist and have been reset:
` + n.join(`
`)
      ), typeof window < "u" && window.alert && setTimeout(() => {
        alert(
          `Some extras options no longer exist and have been reset:
` + n.join(`
`)
        );
      }, 500)), ce = !0;
    });
  }, { immediate: !0 }), {
    // Bundled object
    inputs: {
      inputStock: l,
      inputShapes: e,
      inputUserGroups: p,
      currentInputShape: Y,
      selectedSaw: be,
      inputSaw: f
    },
    // State
    inputShapes: e,
    inputStock: l,
    inputUserGroups: p,
    inputSaw: f,
    currentInputShape: Y,
    selectedSaw: be,
    validationIssues: y,
    isValidating: b,
    // Computed
    totalInputShapes: de,
    totalInputStock: u,
    totalInputShapeLines: S,
    totalInputStockLines: F,
    hasValidationIssues: M,
    // Actions
    addInputShape: k,
    addInputStock: x,
    cloneInputShape: N,
    cloneInputStock: B,
    updateInputShape: D,
    updateInputStock: j,
    updateInputSaw: ze,
    removeInputShape: W,
    removeInputStock: T,
    reset: xe,
    resetInputSaw: ke,
    clear: le,
    clearIssues: Be,
    // Validation
    validateInputShapes: Pe,
    validateInputShapeField: Q,
    validateInputStock: J,
    validateInputStockField: R,
    validateInputSaw: re,
    clearValidationIssues: ne,
    // Conversion
    createShapeList: ae,
    createStockList: ie,
    // Import/Export/Update
    importData: H,
    exportData: ue,
    updateInputs: Ge,
    importInputShapes: Ze,
    importInputStock: Ee,
    // Additional functions
    getShapeGrainSummary: Ce,
    updateNumberFormat: Ue,
    getSpecialShapeFields: K,
    // Extras Options Management
    extrasOptions: c,
    setExtrasOptionsFromPricing: $e,
    getCentralizedOptions: Oe
  };
}
let St = null;
function pn(a = { numberFormat: "decimal" }) {
  return St || (St = Js(a)), St;
}
const ye = U([]), Ws = 6;
function dn() {
  const a = ({
    message: e,
    type: l = "info",
    additional: f = [],
    options: p = {},
    action: c = () => {
    }
  }) => {
    Array.isArray(f) || (console.warn("addNotice - additional must be an array"), f = []);
    const y = {
      id: crypto.randomUUID(),
      message: pt(e),
      additional: f.length > 5 ? f.slice(0, 5).map((_) => pt(_)).join("<br>") + "<br>..." : f.slice(0, 5).map((_) => pt(_)).join("<br>"),
      type: l,
      persistent: p.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: c
    }, b = p.maxNotices ?? Ws;
    if (ye.value.length >= b) {
      const _ = ye.value.findIndex((w) => !w.persistent);
      if (_ !== -1)
        ye.value.splice(_, 1);
      else if (!y.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), y.id;
    }
    return ye.value.push(y), !y.persistent && p.timeout !== 0 && setTimeout(() => s(y.id), p.timeout || 6e3), y.id;
  }, s = (e) => {
    ye.value.findIndex((f) => f.id === e) !== -1 && (ye.value = ye.value.filter((f) => f.id !== e));
  };
  return {
    notices: ye,
    addNotice: a,
    dismissNotice: s
  };
}
const Mt = U({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Qs() {
  return {
    progress: Mt,
    reset: () => {
      Mt.value = {
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
const Hs = Ts(() => dt({
  // Material field
  material: me(
    ht().optional(),
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
  t: me(
    Vs([gt(), ht()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: Pt({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Pt({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: me(
    gt().int().positive().default(1),
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
  name: As({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: me(
    $s(["n", "l", "w"]).default("n").optional(),
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
  banding: me(
    Ye().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: me(
    dt({
      enabled: Ye().default(!1),
      type: ht().optional(),
      sides: gt().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: me(
    dt({
      enabled: Ye().default(!1),
      operations: Ps(Es()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: me(
    Ye().default(!1),
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
function Ys(a) {
  const s = Hs._def.getter();
  return a === "linear" ? s.omit({
    w: !0,
    orientationLock: !0,
    banding: !0,
    machining: !0,
    planing: !0
  }) : a === "roll" ? s.omit({
    banding: !0,
    machining: !0,
    planing: !0
  }) : s;
}
class Xs {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, e) {
    const l = [], f = this.unwrapSchema(s);
    if (!this.isZodObject(f))
      return console.warn("Schema is not a ZodObject:", f), l;
    const p = f.shape;
    for (const [c, y] of Object.entries(p)) {
      if (c.startsWith("_") || this.isComputedField(y))
        continue;
      if (c === "trim" && this.isTrimField(y)) {
        const _ = this.generateTrimFields(y);
        l.push(..._);
        continue;
      }
      const b = this.extractFieldMetadata(c, y);
      b && l.push(b);
    }
    return e?.sortByOrder ? l.sort((c, y) => (c.order || 999) - (y.order || 999)) : l;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, e) {
    let l = e._metadata;
    const f = this.unwrapField(e);
    if (l || (l = f._metadata), l) {
      if (l.hidden)
        return null;
      const b = {
        name: s,
        type: l.type || this.getFieldType(f),
        label: l.label || this.formatLabel(s),
        description: l.description,
        required: !this.isOptional(e),
        defaultValue: l.defaultValue ?? this.getDefaultValue(f),
        ...l
      };
      return this.extractTypeSpecificMetadata(b, f), b;
    }
    const p = f._def?.description, c = this.parseFieldDescription(p), y = {
      name: s,
      type: this.getFieldType(f),
      label: c.label || this.formatLabel(s),
      description: c.description,
      required: !this.isOptional(e),
      defaultValue: this.getDefaultValue(f),
      ...c
    };
    return this.extractTypeSpecificMetadata(y, f), y;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const e = this.unwrapField(s);
    if (e instanceof Et) {
      const l = e._def?.options || [];
      for (const f of l)
        if (f instanceof Xe)
          return this.isIntegerNumber(f) ? "integer" : "number";
    }
    return e instanceof Xe ? this.isIntegerNumber(e) ? "integer" : "number" : e instanceof js ? "string" : e instanceof Ms ? "boolean" : e instanceof $t || e._def?.typeName === "ZodNativeEnum" ? "enum" : e instanceof Ds ? "array" : e instanceof et ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, e) {
    const l = e;
    if (l.minValue !== void 0 && l.minValue !== -1 / 0) {
      s.min = l.minValue;
      const p = e._def?.checks?.find(
        (c) => c.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (p && l.minValue === 0) {
        const c = p._zod?.def?.inclusive ?? p.inclusive;
        s.allowZero = c === !0;
      } else
        s.allowZero = l.minValue === 0;
    }
    l.maxValue !== void 0 && l.maxValue !== 1 / 0 && (s.max = l.maxValue);
    const f = e._def?.checks || [];
    for (const p of f) {
      let c, y, b = !0;
      if (p.kind)
        c = p.kind, y = p.value, b = p.inclusive !== void 0 ? p.inclusive : !0;
      else if (p?._zod?.def) {
        const _ = p._zod.def;
        c = _.check, y = _.value, b = _.inclusive !== void 0 ? _.inclusive : !0;
      } else
        continue;
      c === "min" || c === "greater_than" ? s.min === void 0 && (s.min = c === "greater_than" && !b ? y + 1e-6 : y, s.allowZero = s.min === 0) : c === "max" || c === "less_than" ? s.max === void 0 && (s.max = c === "less_than" && !b ? y - 1e-6 : y) : c === "int" && (s.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(s, e) {
    if (e instanceof Et) {
      const l = e._def?.options || [];
      for (const f of l)
        if (f instanceof Xe) {
          this.extractNumberConstraints(s, f), s.type = "number";
          break;
        }
    } else e instanceof Xe && this.extractNumberConstraints(s, e);
    if (!s.options) {
      if (e instanceof $t) {
        const l = e._def?.values;
        Array.isArray(l) ? s.options = l.map((f) => ({
          value: f,
          label: this.formatLabel(String(f))
        })) : l ? s.options = Object.values(l).map((f) => ({
          value: f,
          label: this.formatLabel(String(f))
        })) : s.options = [];
      }
      if (e._def?.typeName === "ZodNativeEnum") {
        const l = e._def?.values || {};
        s.options = Object.entries(l).filter(([f]) => isNaN(Number(f))).map(([f, p]) => ({
          value: p,
          label: this.formatLabel(f)
        }));
      }
    }
  }
  /**
   * Parse field description for metadata
   */
  parseFieldDescription(s) {
    if (!s) return {};
    const e = {}, l = s.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (l) {
      e.description = l[1].trim();
      const f = l[2].split(",");
      for (const p of f) {
        const [c, y] = p.split(":").map((b) => b.trim());
        c === "group" && (e.group = y), c === "order" && (e.order = parseInt(y)), c === "units" && (e.units = y), c === "hidden" && (e.hidden = y === "true"), c === "readonly" && (e.readonly = y === "true"), c === "placeholder" && (e.placeholder = y);
      }
    } else
      e.description = s;
    return e;
  }
  /**
   * Format a field name as a label
   */
  formatLabel(s) {
    return s.replace(/([A-Z])/g, " $1").replace(/^./, (e) => e.toUpperCase()).replace(/_/g, " ").trim();
  }
  /**
   * Check if a field is optional
   */
  isOptional(s) {
    if (s instanceof vt || s instanceof mt)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const e = s._def?.out, l = s._def?.in;
      if (e) {
        const f = this.isOptional(e);
        if (f) return f;
      }
      if (l) {
        const f = this.isOptional(l);
        if (f) return f;
      }
    }
    return s._def?.typeName === "ZodEffects" ? this.isOptional(s._def?.schema) : s instanceof yt ? this.isOptional(s._def?.innerType) : !1;
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
      const e = s._def?.getter;
      if (typeof e == "function")
        return this.unwrapSchema(e());
    }
    return s;
  }
  /**
   * Unwrap a field schema
   */
  unwrapField(s) {
    const e = s._def?.typeName, l = s.constructor.name;
    if (s instanceof vt || s instanceof mt)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof yt || l === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (e === "ZodEffects")
      return this.unwrapField(s._def?.schema);
    if (l === "ZodPipe" || s._def?.type === "pipe") {
      const f = s._def?.out;
      if (f)
        return this.unwrapField(f);
    }
    return s;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(s) {
    if (s instanceof yt) {
      const e = s._def?.defaultValue;
      return typeof e == "function" ? e() : e;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const e = s._def?.in;
      if (e)
        return this.getDefaultValue(e);
    }
    if (s instanceof vt || s instanceof mt) {
      const e = s._def?.innerType;
      if (e)
        return this.getDefaultValue(e);
    }
    if (s._def?.typeName === "ZodEffects") {
      const e = s._def?.schema;
      if (e)
        return this.getDefaultValue(e);
    }
    if ("_def" in s && "defaultValue" in s._def) {
      const e = s._def?.defaultValue;
      return typeof e == "function" ? e() : e;
    }
  }
  /**
   * Check if a ZodNumber schema has integer constraints
   */
  isIntegerNumber(s) {
    return s.isInt === !0 ? !0 : (s._def?.checks || []).some((l) => l.kind === "int");
  }
  /**
   * Check if schema is a ZodObject
   */
  isZodObject(s) {
    return s instanceof et;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(s) {
    const e = /* @__PURE__ */ new Map(), l = [];
    for (const p of s)
      p.group ? (e.has(p.group) || e.set(p.group, []), e.get(p.group).push(p)) : l.push(p);
    const f = [];
    return e.forEach((p, c) => {
      f.push({
        name: c,
        label: this.formatLabel(c),
        fields: p.sort((y, b) => (y.order || 999) - (b.order || 999))
      });
    }), l.length > 0 && f.push({
      name: "general",
      label: "General",
      fields: l.sort((p, c) => (p.order || 999) - (c.order || 999))
    }), f.sort((p, c) => (p.order || 999) - (c.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(s) {
    const e = this.unwrapField(s);
    if (e instanceof et) {
      const l = e.shape;
      return "l1" in l && "l2" in l && "w1" in l && "w2" in l;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(s) {
    const e = [], l = this.unwrapField(s);
    if (!(l instanceof et))
      return e;
    const f = l.shape, p = ["l1", "l2", "w1", "w2"];
    for (const c of p)
      if (c in f) {
        const y = f[c], b = this.extractFieldMetadata(`trim.${c}`, y);
        b && (b.propertyPath = `trim.${c}`, b.name = `trim.${c}`, b.group || (b.group = "trim"), e.push(b));
      }
    return e;
  }
}
const Dt = new Xs();
function en(a, s = {}) {
  const e = U([]), l = U([]), f = U(/* @__PURE__ */ new Map()), p = U(/* @__PURE__ */ new Map()), c = (O) => {
    let k = Dt.generateFields(a);
    s.overrides && (k = k.map((N) => {
      const B = s.overrides[N.name];
      if (B) {
        const D = { ...N, ...B };
        return B.min === void 0 && N.min !== void 0 && (D.min = N.min), B.max === void 0 && N.max !== void 0 && (D.max = N.max), D;
      }
      return N;
    })), p.value.clear();
    for (const N of k)
      p.value.set(N.name, N);
    const x = O || s.allowedFieldIds;
    if (x && x.length > 0) {
      const N = x, B = /* @__PURE__ */ new Map();
      for (const Q of k)
        B.set(Q.name, Q);
      const D = [];
      for (const Q of N) {
        const j = B.get(Q);
        j && D.push(j);
      }
      k = D;
    }
    s.filter && (k = k.filter(s.filter)), e.value = k, f.value.clear();
    for (const N of k)
      f.value.set(N.name, N);
    s.grouped && (l.value = Dt.groupFields(k));
  };
  c();
  const y = (O) => f.value.get(O), b = (O) => p.value.get(O), _ = () => p.value, w = (O, k) => {
    const x = f.value.get(O);
    x && Object.assign(x, k);
  }, L = (O) => {
    const k = y(O);
    return !(!k || k.hidden);
  }, $ = (O) => {
    const k = y(O);
    if (!k) return {};
    const x = {};
    return k.required && (x.required = !0), k.type === "number" && (k.min !== void 0 && (x.min = k.min), k.max !== void 0 && (x.max = k.max)), x;
  };
  return {
    fields: A(() => e.value),
    groups: A(() => l.value),
    fieldMap: A(() => f.value),
    allFieldsMap: A(() => p.value),
    getField: y,
    getFieldMetadata: b,
    getAllFieldMetadata: _,
    updateField: w,
    isFieldVisible: L,
    getFieldValidation: $,
    regenerateFields: c
  };
}
function gn(a) {
  const { stockType: s, materials: e = [], minDimension: l = 0 } = a, f = Ys(s), p = {
    // Add minimum dimensions for length/width
    l: {
      min: l,
      w: "1fr"
      // Full width for length field
    },
    w: {
      min: l,
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
  return e.length > 0 && (p.material = {
    ...p.material,
    type: "enum",
    options: e.map((c) => ({ value: c.name, label: c.name })),
    defaultValue: e[0]?.name
  }), en(f, {
    ...a,
    overrides: { ...p, ...a.overrides }
  });
}
const { progress: Te, reset: qt } = Qs();
function hn(a) {
  const s = "https://api.cutlistevo.com/";
  let e;
  const l = () => {
    e = qs(s, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), e.on("connect", () => {
      a.refs?.connected && (a.refs.connected.value = !0), a.callbacks?.onConnect?.();
    }), e.on("connect_error", (c) => {
      a.refs?.connected && (a.refs.connected.value = !1), a.refs?.thinking && (a.refs.thinking.value = !1), a.callbacks?.onConnectError?.(c);
    }), e.on("connect_timeout", (c) => {
      a.refs?.connected && (a.refs.connected.value = !1), a.refs?.thinking && (a.refs.thinking.value = !1), a.callbacks?.onConnectError?.(c);
    }), e.on("result", (c) => {
      Te.value.complete = !0, a.callbacks?.onResult?.(c), e.disconnect();
    }), e.on("queued", () => {
      qt(), Te.value.queued = !0;
    }), e.on("started", () => {
      Te.value.started = !0;
    }), e.on("progress", (c) => {
      c?.data?.message === "result" ? Te.value.resultCount++ : (Te.value.stockCount = c.data.stockCount, Te.value.shapeCount = c.data.shapeCount);
    }), e.on("user", (c) => {
      a.callbacks?.onUser?.(c);
    }), e.on("error", (c) => {
      a.refs?.thinking && (a.refs.thinking.value = !1), qt(), a.callbacks?.onError?.(c);
    });
  }, f = () => e?.disconnect(), p = () => e?.connect();
  return l(), {
    socket: e,
    connect: p,
    disconnect: f
  };
}
const Wt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], tn = (a) => Wt.includes(a);
function vn(a, s) {
  const e = (w) => {
    s.log?.(w);
  }, l = (w) => (s.error?.(w), { success: !1, error: w }), f = () => {
    for (const w of Wt) p(w, 0);
  }, p = (w, L) => {
    e(["setting price", w, L]);
    const { inputs: $, elements: O, setInputValue: k, formatPrice: x } = s;
    if (isNaN(L)) throw new Error("Price must be a number");
    if (!tn(w)) return;
    const B = {
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
    }[w];
    B?.hidden && $[B.hidden] && (e(["setting hidden price", B.hidden, L]), k(B.hidden, L)), B?.visible && O[B.visible] && (O[B.visible].innerText = x(L));
  }, c = (w) => {
    const { product: L, getCurrentVariationPrice: $, isQuantityPricing: O, enableAddToCart: k, setCartQuantity: x } = s;
    let N = L?.price || $(!0) || 0;
    typeof N == "string" && (N = parseFloat(N));
    const B = a.unit_system === "imperial" ? "feet" : "meters", Q = {
      full_stock: (R) => {
        if (e(["calculating cost by full sheet"]), !O()) {
          const W = R.metadata.totalStockCost;
          return p("stock", W), W;
        }
        return O() && x(R.metadata.totalUsedStock), 0;
      },
      part_area: (R) => {
        e([`calculating cost by part area in square ${B}`]);
        const W = a.unit_system === "imperial" ? 144 : 1e6, T = R.metadata.totalPartArea / W, G = T * N;
        p("partArea", G), e([`part area price in square ${B} is ${T} (part area) * ${N} (product price) = ${G}`]);
        let J = G;
        if (a?.enable_offcut_pricing && R?.offcuts) {
          const ne = R?.offcuts.reduce((ie, H) => {
            const ue = H.l >= H.w ? H.l : H.w, le = H.l >= H.w ? H.w : H.l;
            return ue < a.offcut_min_length || le < a.offcut_min_width ? ie + ue * le : ie;
          }, 0) / W, ae = ne * N;
          p("offcutArea", ae), e([`calculated sellable offcut area as ${ne} square ${B}, with price ${ae}`]), J += ae;
        }
        if (e([`calculated total price as ${J}`]), O()) {
          const z = J / N;
          return e([`setting cart quantity to ${z}`]), x(z, 2), 0;
        } else
          return J;
      },
      cut_length: (R) => {
        e([`calculating cost by cut length in  ${B}`]);
        const W = a.unit_system === "imperial" ? 12 : 1e3, T = R.metadata.totalCutLength / W;
        return x(T, 2), 0;
      },
      full_stock_plus_cut_length: (R) => {
        e(["calculating cost by full sheet plus cut length"]);
        let W = 0;
        const T = R.metadata.totalStockCost;
        p("stock", T), W = T, O() && x(R.metadata.totalUsedStock);
        const G = a.unit_system === "imperial" ? 12 : 1e3, z = R.metadata.totalCutLength / G * a.cut_length_price;
        return p("cutLength", z), W + z;
      },
      full_stock_plus_num_parts: (R) => {
        e(["calculating cost by full sheet plus number of parts"]);
        let W = 0;
        const T = R.metadata.totalStockCost;
        p("stock", T), W = T, O() && x(R.metadata.totalUsedStock);
        const G = R.metadata.totalPartsProduced * a.per_part_price;
        return p("perPart", G), W + G;
      },
      roll_length: (R) => {
        e([`calculating cost by roll length in ${B}`]);
        const W = a.unit_system === "imperial" ? 12 : 1e3, T = R.stock.reduce((G, J) => G + J.analysis.rollLength / W * Fs({ v: J.cost }), 0);
        return p("rollLength", T), T;
      }
    }[a.pricing_strategy], j = Q(w);
    return k(), j;
  }, y = (w) => {
    const {
      isExtraEnabled: L,
      isMachiningEnabled: $,
      isSurchargeEnabled: O,
      inputType: k,
      getTotalBandingPrice: x,
      getTotalFinishPrice: N,
      getTotalMachiningPrice: B,
      getInputValue: D
    } = s;
    let Q = 0;
    if (L("banding") && w.metadata.bandingLengthByType) {
      const j = x(w.metadata.bandingLengthByType);
      p("banding", j), Q += j;
    }
    if (L("finish") && w.metadata.finishAreaByType) {
      const j = N(w.metadata.finishAreaByType);
      p("finish", j), Q += j;
    }
    if (k.value === "formula") {
      const j = parseFloat(D("smartcut-hardware-price"));
      isNaN(j) || (Q += j);
    }
    if ($()) {
      const j = B(w);
      p("machining", j), Q += j;
    }
    if (O() && a.surcharge) {
      const j = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * w.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      p("surcharge", j), e(["added surcharge", j]), Q += j;
    }
    return Q;
  }, b = (w) => {
    const { getInputValue: L, setInputValue: $ } = s, O = {
      "smartcut-job-id": w.jobId,
      "smartcut-dimensions": w.parts.map((k) => `${k.l}x${k.w} [${k.q}]`).join(", "),
      "smartcut-total-cut-length": w.metadata.totalCutLength,
      "smartcut-part-area": w.metadata.totalPartArea,
      "smartcut-total-cuts": w.metadata.totalCuts,
      "smartcut-total-parts": w.metadata.totalPartsProduced,
      "smartcut-machining": w.metadata.hasMachining
    };
    if (Object.entries(O).forEach(([k, x]) => {
      L(k) !== void 0 && $(k, x);
    }), L("smartcut-stock-summary") !== void 0) {
      const k = w.stock.map((x) => `${x.l}x${x.w}${x.t ? "x" + x.t : ""} [${x.q}]`).join(", ");
      $("smartcut-stock-summary", k);
    }
  };
  return {
    calculatePrice: async (w) => {
      f();
      const { isQuantityPricing: L, selectedVariation: $, setVariationPrice: O, setCartQuantity: k } = s;
      if (!w?.jobId)
        return l("No job ID provided");
      L() || k(1);
      let x = c(w);
      const N = y(w);
      if (x += N, L()) {
        const B = w.metadata.totalUsedStock, D = x / B;
        p("custom", D);
      } else {
        if (!w.metadata.totalStockCost)
          return l("Total stock cost not returned for a multiple size product");
        e([`total cost is ${x}`]), p("custom", x);
      }
      return $.value && O(x), b(w), { success: !0, totalPrice: x };
    },
    resetPricing: f
  };
}
function mn(a) {
  const {
    stockOptions: s,
    config: e,
    initialState: l,
    numberFormat: f = U("decimal")
  } = a, p = U(l?.activeFilters || []), c = U(l?.searchQuery || ""), y = U(l?.sortBy || e?.value?.defaultSort.field || "cost"), b = U(l?.sortOrder || e?.value?.defaultSort.order || "asc"), _ = U(l?.displayMode || e?.value?.displayMode || "grid"), w = U(l?.currentPage || 1), L = U(l?.selectedStockIds || []);
  function $(u, S) {
    return S.split(".").reduce((F, M) => F?.[M], u);
  }
  function O(u, S) {
    return typeof u == "object" && u !== null && typeof S == "object" && S !== null && "hex" in u && "hex" in S ? u.hex === S.hex : u === S;
  }
  function k(u, S) {
    const F = $(u, S.field);
    switch (S.type) {
      case "select":
        return O(F, S.value);
      case "multiselect":
        return Array.isArray(S.value) ? S.value.some((M) => O(F, M)) : O(F, S.value);
      case "range":
        if (S.value && typeof S.value == "object") {
          const { min: M, max: K } = S.value, Y = Number(F);
          return !(isNaN(Y) || M !== void 0 && Y < M || K !== void 0 && Y > K);
        }
        return !1;
      case "boolean":
        return !!F == !!S.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function x(u, S) {
    if (!S.trim()) return !0;
    const F = S.toLowerCase();
    return [
      u.name,
      u.material,
      u.description,
      u.category,
      ...u.tags || []
    ].some((K) => K && String(K).toLowerCase().includes(F));
  }
  const N = A(() => {
    let u = [...s.value];
    c.value && (u = u.filter((S) => x(S, c.value)));
    for (const S of p.value)
      u = u.filter((F) => k(F, S));
    return u;
  }), B = A(() => {
    const u = [...N.value];
    return u.sort((S, F) => {
      const M = $(S, y.value), K = $(F, y.value);
      if (M == null && K == null) return 0;
      if (M == null) return 1;
      if (K == null) return -1;
      let Y = 0;
      return typeof M == "string" && typeof K == "string" ? Y = M.localeCompare(K) : typeof M == "number" && typeof K == "number" ? Y = M - K : Y = String(M).localeCompare(String(K)), b.value === "asc" ? Y : -Y;
    }), u;
  }), D = A(() => {
    const u = e?.value?.itemsPerPage || 20, S = (w.value - 1) * u, F = S + u;
    return B.value.slice(S, F);
  }), Q = A(() => {
    const u = e?.value?.itemsPerPage || 20;
    return Math.ceil(B.value.length / u);
  });
  function j(u, S, F = "select") {
    R(u), p.value.push({ field: u, value: S, type: F }), w.value = 1;
  }
  function R(u) {
    p.value = p.value.filter((S) => S.field !== u);
  }
  function W() {
    p.value = [], c.value = "", w.value = 1;
  }
  function T(u, S) {
    y.value = u, S ? b.value = S : b.value = b.value === "asc" ? "desc" : "asc", w.value = 1;
  }
  function G(u) {
    c.value = u, w.value = 1;
  }
  function J(u) {
    u >= 1 && u <= Q.value && (w.value = u);
  }
  function z(u) {
    const S = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`, F = L.value.indexOf(S);
    return F === -1 ? e?.value?.maxSelection && L.value.length >= e.value.maxSelection ? !1 : (L.value.push(S), !0) : (L.value.splice(F, 1), !1);
  }
  function ne(u) {
    const S = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`;
    return L.value.includes(S);
  }
  const ae = A(() => s.value.filter((u) => ne(u)));
  function ie() {
    L.value = [];
  }
  function H(u) {
    const {
      ...S
    } = u;
    return new st(S, f.value);
  }
  function ue(u) {
    if (u === "color") {
      const F = /* @__PURE__ */ new Map();
      return s.value.forEach((M) => {
        const K = $(M, u);
        K != null && (typeof K == "object" && "hex" in K ? F.has(K.hex) || F.set(K.hex, K) : typeof K == "string" && (F.has(K) || F.set(K, K)));
      }), Array.from(F.values()).sort((M, K) => {
        const Y = typeof M == "object" && "name" in M ? M.name : String(M), be = typeof K == "object" && "name" in K ? K.name : String(K);
        return Y.localeCompare(be);
      });
    }
    const S = /* @__PURE__ */ new Set();
    return s.value.forEach((F) => {
      const M = $(F, u);
      M != null && S.add(M);
    }), Array.from(S).sort();
  }
  function le(u) {
    const S = s.value.map((F) => Number($(F, u))).filter((F) => !isNaN(F));
    return S.length === 0 ? null : {
      min: Math.min(...S),
      max: Math.max(...S)
    };
  }
  const de = A(() => ({
    activeFilters: p.value,
    searchQuery: c.value,
    sortBy: y.value,
    sortOrder: b.value,
    displayMode: _.value,
    currentPage: w.value,
    selectedStockIds: L.value
  }));
  return {
    // State
    activeFilters: p,
    searchQuery: c,
    sortBy: y,
    sortOrder: b,
    displayMode: _,
    currentPage: w,
    selectedStockIds: L,
    // Computed
    filteredStock: N,
    sortedStock: B,
    paginatedStock: D,
    selectedStock: ae,
    totalPages: Q,
    currentState: de,
    // Methods
    applyFilter: j,
    removeFilter: R,
    clearFilters: W,
    updateSort: T,
    updateSearch: G,
    goToPage: J,
    toggleStockSelection: z,
    isStockSelected: ne,
    clearSelection: ie,
    createInputStock: H,
    getUniqueValues: ue,
    getFieldRange: le
  };
}
export {
  ln as a,
  un as b,
  cn as c,
  fn as d,
  dn as e,
  pn as f,
  hn as g,
  gn as h,
  Qs as i,
  mn as j,
  vn as k,
  on as u
};
