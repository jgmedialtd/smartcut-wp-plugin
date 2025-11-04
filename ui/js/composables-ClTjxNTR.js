import { u as fs, g as ps, S as ds, r as gs, s as hs, a as vs, b as Pt, C as Re, c as qt, d as it, e as Bt, f as Gt, h as Zt, i as Ut, j as zt, k as ms, l as Ss, t as ve, m as pe, n as _t, o as ys, p as bs, q as ws, v as ot, w as ks, x as Je, y as Ls, z as st, I as ke, A as Nt, B as lt, D as We, E as xs, F as ut, G as De, H as ct, J as Qe, K as Cs, L as Is, M as ft, N as me, O as Os, P as $t, Q as As } from "./components-zZfwvaG2.js";
import "./vendor-i18n-BuJwRgtG.js";
import { h as O, e as G, K as Te, X as ye, Y as oe, j as nt, k as Fs } from "./vendor-vue-U4l9SdFr.js";
import { j as He, p as Ps, V as _s, o as pt, b as Xe, a as Ns, c as $s, n as dt, s as gt, _ as Vs, u as Es, k as Vt, m as Ye, q as Ts, W as Ms, X as Et, Y as js, f as et, t as ht, v as vt, w as mt, $ as Ds } from "./vendor-pIOdV8fk.js";
let tt = null;
function qs() {
  const n = G(null), s = G(null), t = G(null), l = Te([]), f = Te([]), p = Te([]), c = Te([]), v = G([]), b = G(null), F = Te([]), y = G(null), L = G(null);
  return {
    // All state
    jobId: n,
    saw: s,
    activeStockAutoId: t,
    shapeList: l,
    stockList: f,
    cutList: p,
    segmentList: c,
    offcuts: v,
    metadata: b,
    unusableShapes: F,
    currentCutIndex: y,
    activeShape: L,
    r: {
      saw: s,
      activeStockAutoId: t,
      jobId: n,
      shapeList: l,
      stockList: f,
      cutList: p,
      segmentList: c,
      offcuts: v,
      unusableShapes: F,
      metadata: b,
      currentCutIndex: y
    }
  };
}
function on() {
  if (tt) return tt;
  const n = qs(), s = O(() => n.activeStockAutoId.value ? ie(n.activeStockAutoId.value) : []), t = O(() => !n.activeStockAutoId.value || !n.stockList.value?.length ? null : ae(n.activeStockAutoId.value)), l = O(() => !t.value || !n.cutList.value?.length ? [] : ue(t.value.autoId)), f = O(() => !t.value || !n.segmentList.value?.length ? [] : Q(n.activeStockAutoId.value)), p = O(() => n.stockList.value?.length ? le(n.stockList.value) : []), c = O(() => n.shapeList.value.filter((u) => u.added)), v = O(() => n.shapeList.value?.length ? n.shapeList.value.filter((u) => !u.added) : []), b = O(() => n.shapeList.value?.length ? fs(n.shapeList.value) : []), F = O(() => n.shapeList.value?.length ? n.shapeList.value.filter((u) => !u.duplicate) : []), y = O(() => F.value.filter((u) => u.added)), L = O(() => n.stockList.value?.length ? n.stockList.value.filter((u) => u.used && !u.duplicate) : []), $ = O(() => L.value.filter((u) => u.used)), I = O(() => n.cutList.value?.length ? l.value.reduce((u, S) => u + S.area, 0) : 0), k = O(() => !n.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), C = O(() => !n.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((u, S) => u + S.area, 0) : 0), P = O(() => !n.cutList.value?.length || !t.value ? null : t.value.cutType), j = O(() => n.stockList.value?.length ? n.stockList.value.filter((S) => S.used && !S.isStacked) : []), M = O(() => n.stockList.value?.length ? ps(t.value, n.stockList.value) : 0), W = O(() => {
    if (!n.stockList.value?.length) return 0;
    let u = k.value ? (I.value + C.value) / k.value : null;
    return u > 1 && (u = 1), u;
  }), E = () => {
    n.saw.value = null, n.shapeList.value.length = 0, n.stockList.value.length = 0, n.cutList.value.length = 0, n.segmentList.value.length = 0, n.offcuts.value.length = 0, n.unusableShapes.value.length = 0, n.currentCutIndex.value = null;
  }, K = () => {
    n.saw.value = null, n.activeStockAutoId.value = null, n.activeShape.value = null, n.metadata.value = null, n.shapeList.value = [], n.stockList.value = [], n.cutList.value = [], n.segmentList.value = [], n.offcuts.value = [], n.currentCutIndex.value = null, n.unusableShapes.value = [];
  }, J = () => {
    const u = new vs({
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }), S = new Pt({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      added: !0
    });
    S.addToStock(u);
    const A = new Pt({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      added: !0
    });
    A.addToStock(u);
    const T = [
      new Re({ x: 0, y: 0, l: 500, vertical: !0, stock: u }),
      new Re({ x: 500, y: 0, l: 500, vertical: !1, stock: u }),
      new Re({ x: 500, y: 500, l: 400, vertical: !0, stock: u }),
      new Re({ x: 900, y: 500, l: 400, vertical: !1, stock: u })
    ];
    n.stockList.value = [u], n.shapeList.value = [S, A], n.cutList.value = T, n.activeStockAutoId.value = u.autoId;
  }, _ = (u, S) => {
    u in this && this[u]?.sort(hs[S]);
  }, D = (u) => {
    ye(u);
  }, R = () => {
    ye(n.shapeList);
  }, Z = () => {
    ye(n.stockList);
  }, ne = (u) => {
    if (!u?.shapeList?.some((S) => S.added)) {
      K();
      return;
    }
    n.metadata.value = u.metadata, n.unusableShapes.value = u.unusableShapes || [];
    try {
      u?.saw && (n.saw.value = new ds(u.saw));
      const S = gs(u, {
        preventAutoRotation: !0
      });
      n.stockList.value = S.stockList, n.shapeList.value = S.shapeList, n.cutList.value = S.cutList, n.segmentList.value = S.segmentList, n.offcuts.value = S.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((T) => ye(n[T])), n.activeStockAutoId.value = le(n.stockList.value)?.[0]?.autoId || null;
    } catch (S) {
      console.error("Error updating from result", S);
    }
  }, ae = (u) => n.stockList.value?.length ? n.stockList.value.find((S) => S.autoId === u) : null, ie = (u) => n.shapeList.value?.length ? n.shapeList.value.filter((S) => S.added && S?.stock?.autoId === u) : [], Q = (u) => n.segmentList.value?.length ? n.segmentList.value.filter((A) => A?.stock?.autoId === u) : [], ue = (u) => {
    const S = n?.cutList?.value;
    return !S && !S.length ? [] : S.filter((A) => A?.stock?.autoId === u).sort((A, T) => A?.guillotineState?.order - T?.guillotineState?.order);
  }, le = (u) => u?.length ? u.filter((S) => S.used === !0) : [], de = (u) => {
    n.activeStockAutoId.value !== u && (n.activeShape.value = null, n.activeStockAutoId.value = u);
  };
  return tt = {
    // all result items for convenience
    r: n.r,
    // state
    activeStockAutoId: n.activeStockAutoId,
    saw: n.saw,
    shapeList: n.shapeList,
    stockList: n.stockList,
    cutList: n.cutList,
    segmentList: n.segmentList,
    offcuts: n.offcuts,
    unusableShapes: n.unusableShapes,
    currentCutIndex: n.currentCutIndex,
    activeShape: n.activeShape,
    // computed
    addedShapes: c,
    activeShapes: s,
    unplacedShapes: v,
    uniqueShapes: F,
    uniqueAddedShapes: y,
    unplacedShapeTally: b,
    uniqueStock: L,
    uniqueUsedStock: $,
    activeStock: t,
    activeCuts: l,
    activeCutsArea: I,
    activeCutType: P,
    usedStock: p,
    stackedStock: j,
    activeStockArea: k,
    activeShapeArea: C,
    activeStockStackCount: M,
    activeTotalArea: W,
    activeSegments: f,
    // methods
    reset: E,
    clear: K,
    createTestData: J,
    sortItems: _,
    update: D,
    updateShapes: R,
    updateStock: Z,
    updateFromResult: ne,
    getStock: ae,
    getShapes: ie,
    getSegments: Q,
    getCuts: ue,
    setActiveStockAutoId: de
  }, tt;
}
const fe = G(null);
let Bs = 0;
function ln(n) {
  const s = n || `action-menu-${++Bs}-${Date.now()}`, t = O({
    get: () => fe.value === s,
    set: (y) => {
      y ? fe.value = s : fe.value === s && (fe.value = null);
    }
  }), l = () => {
    fe.value = s;
  }, f = () => {
    fe.value === s && (fe.value = null);
  }, p = () => {
    fe.value = null;
  }, c = () => {
    t.value = !t.value;
  }, v = O(() => fe.value !== null), b = O(() => fe.value), F = O(() => fe.value === s);
  return {
    // Instance-specific
    id: oe(G(s)),
    isOpen: t,
    open: l,
    close: f,
    toggle: c,
    isThisMenuOpen: F,
    // Global singleton state (shared across all instances)
    closeAll: p,
    isAnyMenuOpen: v,
    currentOpenMenuId: b
  };
}
const Kt = "cle-extras-config", Gs = () => {
  try {
    const n = localStorage.getItem(Kt);
    return n ? JSON.parse(n) : {};
  } catch {
    return {};
  }
}, Zs = (n) => {
  try {
    localStorage.setItem(Kt, JSON.stringify(n));
  } catch {
  }
}, Tt = G(Gs()), Us = (n, s) => {
  Tt.value[n] = s, Ls(n, s), Zs(Tt.value);
}, Le = (n) => Ss(n), zs = (n, s) => {
  const t = Le(n);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const l = t.options[0], f = Array.isArray(l) && typeof l[0] == "string" ? l : [];
  if (f.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const p = (b) => t.options.length > 1 ? b.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, b) ? !0 : Object.keys(t.pricing).some((L) => L.startsWith(b + "|") || L === b) : b.split("|").every((y, L) => {
    if (L >= t.options.length) return !1;
    const $ = t.options[L];
    return Array.isArray($) && typeof $[0] == "string" && $.includes(y);
  }) : t.options.some((F) => Array.isArray(F) && typeof F[0] == "string" && F.includes(b)) : f.includes(b), c = /* @__PURE__ */ new Set();
  let v = 0;
  return s.forEach((b) => {
    if (!b.extras?.[n]) return;
    const F = b.extras[n].sides || {};
    Object.entries(F).forEach(([L, $]) => {
      typeof $ == "string" && $ && !p($) && (c.add($), F[L] = "", v++);
    });
    const y = b.extras[n].faces || {};
    Object.entries(y).forEach(([L, $]) => {
      typeof $ == "string" && $ && !p($) && (c.add($), y[L] = "", v++);
    });
  }), {
    cleanedCount: v,
    invalidOptions: Array.from(c)
  };
}, un = (n) => {
  const {
    shape: s,
    extraType: t,
    allOptions: l,
    labels: f,
    userFriendlyFieldMap: p,
    allowCustomNames: c,
    customNames: v = G([]),
    enablePricing: b = !1,
    pricing: F,
    locations: y = G([]),
    locationGroups: L = G([]),
    getAvailablePricingOptions: $,
    getPrice: I,
    findExtrasPrice: k,
    formatPrice: C
  } = n, P = () => {
    const e = Le(t), a = e?.options || l, d = e?.labels || f;
    ms(s.value, t, a, d, v.value);
  };
  P(), nt(s, (e) => {
    if (e) {
      const d = e.extras?.[t], g = d?.sides || {}, h = d?.options?.sides || {};
      let x = !1;
      for (const [V, q] of Object.entries(g))
        if (typeof q == "string") {
          if (q.includes("|") && !h[V]) {
            x = !0;
            break;
          } else if (q !== "" && !h[V]) {
            x = !0;
            break;
          }
        }
      x && P();
    }
  }, { deep: !0, immediate: !1 });
  const j = O(() => Le(t)), M = O(() => {
    const a = j.value?.options || l;
    if (a.length > 1)
      return "multiple";
    const g = (a[0] || []).filter((q) => typeof q == "string"), h = (v.value || []).filter((q) => typeof q == "string"), V = Array.from(/* @__PURE__ */ new Set([...g, ...h])).length;
    return V === 0 ? "boolean" : V === 1 ? "single" : "multiple";
  }), W = O(() => qt(t)), E = O(() => y.value && y.value.length > 0 ? y.value.filter((e) => e !== "all" && e !== "faces" && e !== "sides") : W.value), K = O(() => E.value.filter((e) => it(e) === "face")), J = O(() => E.value.filter((e) => it(e) === "side")), _ = O(() => Bt(t)), D = O(() => Gt(t)), R = O(() => Zt(t)), Z = () => j.value?.options && j.value.options.length > 1, ne = (e, a, d) => {
    const { singleOption: g = Oe(), operation: h } = d;
    switch (a) {
      case "boolean":
        return !!e;
      case "single":
        return g ? h === "process" || h === "set" ? e && g ? g : "" : e === g ? g : "" : !!e;
      case "multiple":
        return e || "";
      default:
        return e;
    }
  }, ae = (e, a, d) => ne(a, d, { operation: "process" }), ie = (e, a, d, g, h, x) => {
    switch (x) {
      case "boolean":
        Je(e, a, d, g, !!h);
        break;
      case "single": {
        const V = Oe();
        Je(e, a, d, g, h ? V : "");
        break;
      }
      case "multiple":
        Je(e, a, d, g, h || "");
        break;
    }
  }, Q = (e, a, d = {}) => {
    const g = d.singleOption || Oe();
    return d.allowCustomNames ?? (g && [].includes(g.toString())), ne(e, a, {
      operation: "get",
      singleOption: g
    });
  }, ue = (e, a, d, g) => {
    switch (g) {
      case "boolean":
        return !!e;
      case "single": {
        const h = Oe();
        if (h) {
          const x = a.map((N) => pe(s.value, t, N, d)), V = x.every((N) => N === h || N === !0), q = x.every((N) => !N || N === "");
          return V ? h : q ? "" : null;
        }
        return !!e;
      }
      case "multiple":
        return typeof e == "string" ? e : e || "";
      default:
        return e;
    }
  }, le = (e, a, d, g = !1) => {
    if (g)
      e.forEach((h) => A(h, a, d));
    else {
      const h = f[a] || "", x = ae(h, d, M.value);
      e.forEach((V) => {
        ie(s.value, t, V, h, x, M.value);
      });
    }
  }, de = (e, a) => {
    if (Z()) {
      const d = e.map((V) => (pe(s.value, t, V, "value") || "").split("|")[a] || ""), g = d[0] || "";
      return d.every((V) => V === g) ? g : null;
    } else {
      const d = f[a] || "";
      if (M.value === "single") {
        const h = Oe();
        if (h) {
          const x = e.map((N) => pe(s.value, t, N, d)), V = x.every((N) => N === h || N === !0), q = x.every((N) => !N || N === "");
          return V ? h : q ? "" : null;
        }
      }
      const g = _t(s.value, t, e, d, M.value);
      return M.value === "multiple" && g === !1 && e.every((x) => {
        const V = pe(s.value, t, x, d, M.value);
        return V === "" || V === !1 || V === null || V === void 0;
      }) ? "" : g;
    }
  }, u = (e) => {
    const { location: a, locationType: d = "single", optionIndex: g, stateValue: h, isAggregate: x = !1, customLabel: V } = e, q = Ee(g), N = q.length > 1 ? "select" : "checkbox", X = x ? ge(g, V || d) : ge(g, a), ee = M.value === "multiple" && X.length === 1 && b;
    if (ee && X[0]) {
      if (x) {
        let he = [];
        d === "all" ? he = E.value : d === "faces" ? he = K.value : d === "sides" ? he = J.value : a && re(a) && (he = ce(a)), he.forEach((At) => {
          const Ft = T(At, g);
          (!Ft || Ft !== X[0]) && A(At, g, X[0]);
        });
      } else if (a) {
        const he = T(a, g);
        (!he || he !== X[0]) && A(a, g, X[0]);
      }
    }
    const se = M.value === "multiple" && (X.length === 0 || ee), te = h !== void 0 ? h : a ? T(a, g) : null, Ae = N === "select" ? kt(a || d, g) : void 0, Fe = N === "checkbox" && q.length === 1 ? q[0] : void 0;
    let It, Ot;
    return N === "checkbox" && q.length === 1 && (It = q[0], Ot = ""), {
      inputType: N,
      // Alias for backward compatibility
      type: N,
      value: te,
      options: Ae,
      disabled: se,
      label: Fe,
      indeterminate: te === null && N === "checkbox",
      trueValue: It,
      falseValue: Ot
    };
  }, S = (e, a, d) => u({
    locationType: e,
    optionIndex: a,
    stateValue: d,
    isAggregate: !0
  }), A = (e, a, d) => {
    const g = f[a] || "";
    if (Z()) {
      const h = B(e, a);
      let x;
      if (h === "checkbox") {
        const X = Ee(a)[0];
        x = d ? X : "";
      } else
        x = d || "";
      const V = [];
      for (let N = 0; N < f.length; N++)
        if (N === a)
          V[N] = x;
        else {
          const ee = (pe(s.value, t, e, "value") || "").split("|");
          V[N] = ee[N] || "";
        }
      for (; V.length > 0 && V[V.length - 1] === ""; )
        V.pop();
      const q = V.join("|");
      Je(s.value, t, e, "value", q);
    } else
      ie(s.value, t, e, g, d, M.value);
  }, T = (e, a) => {
    const d = f[a] || "";
    if (Z()) {
      const x = (pe(s.value, t, e, "value") || "").split("|")[a] || "";
      if (B(e, a) === "checkbox") {
        const N = Ee(a)[0];
        return x === N ? N : "";
      } else
        return x;
    } else {
      const g = pe(s.value, t, e, d, M.value);
      return Q(g, M.value);
    }
  }, U = (e, a) => {
    le(E.value, e, a, Z());
  }, H = (e) => {
    if (Z()) {
      const a = E.value.map((h) => (pe(s.value, t, h, "value") || "").split("|")[e] || ""), d = a[0] || "";
      return a.every((h) => h === d) ? d : null;
    } else {
      const a = f[e] || "", d = _t(s.value, t, E.value, a, M.value);
      return ue(d, E.value, a, M.value);
    }
  }, be = () => {
    ot(s.value, t, E.value, M.value);
  }, xe = (e) => e === "faces" ? {
    locations: K.value,
    isSupported: _.value
  } : {
    locations: J.value,
    isSupported: D.value
  }, qe = (e, a, d) => {
    const { locations: g, isSupported: h } = xe(e);
    h && le(g, a, d, Z());
  }, Ne = (e, a) => {
    const { locations: d, isSupported: g } = xe(e);
    return g ? de(d, a) : null;
  }, Be = (e) => {
    const { locations: a, isSupported: d } = xe(e);
    d && ot(s.value, t, a, M.value);
  }, Ge = (e, a) => {
    const { isSupported: d } = xe(e);
    if (!d) return { type: "checkbox", value: !1 };
    const g = Ne(e, a);
    return S(e, a, g);
  }, $e = (e, a) => {
    qe("faces", e, a);
  }, Ve = (e, a) => {
    qe("sides", e, a);
  }, Ce = (e) => Ne("faces", e), Ie = (e) => Ne("sides", e), Ze = () => {
    Be("faces");
  }, Ue = () => {
    Be("sides");
  }, we = (e) => L.value.find((a) => a.id === e), re = (e) => ["all", "faces", "sides"].includes(e) ? !1 : !e.includes("."), ce = (e) => {
    const a = we(e);
    return a ? a.locations.filter((d) => E.value.includes(d)) : [];
  }, at = (e, a, d) => {
    const g = ce(e);
    g.length !== 0 && (g.forEach((h) => A(h, a, d)), ye(s));
  }, i = (e, a) => {
    const d = ce(e);
    if (d.length === 0) return null;
    const g = de(d, a);
    return !Z() && (g === null || g === !1 || g === "") ? "" : g;
  }, o = (e) => {
    const a = ce(e);
    a.length !== 0 && ot(s.value, t, a, M.value);
  }, r = (e, a) => {
    const d = i(e, a), g = we(e);
    return u({
      location: e,
      optionIndex: a,
      stateValue: d,
      isAggregate: !0,
      customLabel: g?.label
    });
  }, m = (e) => {
    ks(s.value, t, e, M.value);
  }, w = (e) => e === "all" ? E.value.some((a) => !!T(a, 0)) : e === "faces" && _.value ? K.value.some((a) => !!T(a, 0)) : e === "sides" && D.value ? J.value.some((a) => !!T(a, 0)) : re(e) ? ce(e).some((d) => !!T(d, 0)) : E.value.includes(e) ? !!T(e, 0) : !1, z = (e) => {
    if (e === "all") return ve("general.all");
    if (e === "faces") return `${ve("general.all")} ${ve("machining.face_other")}`;
    if (e === "sides") return `${ve("general.all")} ${ve("woodwork.edge_other")}`;
    if (re(e)) {
      const g = we(e);
      if (g) return g.label;
    }
    if (e.startsWith("face.")) {
      const h = `faces.${e.replace("face.", "")}`;
      return ve(h);
    }
    if (e.startsWith("side.")) {
      const h = `sides.${e.replace("side.", "")}`;
      return ve(h);
    }
    const a = `fields.${e}`, d = ve(a);
    return d !== a ? d : p?.[e] ? p[e] : e;
  }, B = (e, a) => M.value === "boolean" ? "checkbox" : Ee(a).length > 1 ? "select" : "checkbox", Y = (e, a) => u({
    location: e,
    optionIndex: a,
    isAggregate: !1
  }), yt = (e) => {
    const a = H(e);
    return S("all", e, a);
  }, bt = (e) => Ge("faces", e), wt = (e) => Ge("sides", e), Wt = (e, a) => e === "all" ? yt(a) : e === "faces" ? bt(a) : e === "sides" ? wt(a) : re(e) ? r(e, a) : Y(e, a), ge = (e, a) => {
    const h = (Le(t)?.options || l)[e];
    if (!h || h[0] === !0)
      return [];
    const x = a && typeof a == "string" && (a.startsWith("face.") || a.startsWith("side.")), V = a && typeof a == "string" && re(a), q = !x && (a === "all" || a === "faces" || a === "sides" || V);
    if (Array.isArray(h) && h.length === 1 && typeof h[0] == "string" && !(b && $ && (x || q) && e > 0))
      return h;
    if (b && $ && x) {
      const ee = [];
      if (e > 0)
        for (let se = 0; se < e; se++) {
          const te = T(a, se);
          if (typeof te == "string" && te)
            ee.push(te);
          else if (typeof te == "boolean")
            ee.push(te);
          else {
            const Ae = Le(t), Fe = pe(s.value, t, a, "value");
            return Fe && Fe.includes("|") && Ae?.options[e] ? Ae.options[e] : [];
          }
        }
      return $(F, ee, e);
    }
    if (b && $ && q) {
      const ee = [];
      if (e > 0)
        for (let se = 0; se < e; se++) {
          let te;
          if (a === "all" ? te = H(se) : a === "faces" ? te = Ce(se) : a === "sides" ? te = Ie(se) : V && typeof a == "string" && (te = i(a, se)), typeof te == "string" && te)
            ee.push(te);
          else if (typeof te == "boolean")
            ee.push(te);
          else
            return [];
        }
      return $(F, ee, e);
    }
    const N = h, X = c ? (v.value || []).filter((ee) => typeof ee == "string") : [];
    return [.../* @__PURE__ */ new Set([...N, ...X])];
  }, kt = (e, a) => {
    const g = Le(t)?.options[a] || [], h = c && v.value ? v.value.filter((X) => typeof X == "string") : [], x = [.../* @__PURE__ */ new Set([...g, ...h])], V = ge(a, e), q = new Set(V);
    return x.map((X) => ({
      value: X,
      label: X,
      disabled: !q.has(X)
    }));
  }, Oe = () => {
    const e = ge(0);
    return e.length === 1 ? e[0] : void 0;
  }, Qt = (e) => {
    const a = ge(e);
    return a.length === 1 ? a[0] : void 0;
  }, Ee = (e) => {
    const a = Le(t);
    let d = [];
    if (a?.options && a.options[e] && Array.isArray(a.options[e])) {
      const h = a.options[e];
      Array.isArray(h) && h.every((x) => typeof x == "string") && (d = h);
    }
    const g = c && v.value ? v.value.filter((h) => typeof h == "string") : [];
    return [.../* @__PURE__ */ new Set([...d, ...g])];
  }, Ht = (e, a = 0) => {
    if (e === "all" || e === "faces" || e === "sides")
      return "";
    if (re(e)) {
      const g = we(e);
      return g?.price !== void 0 && i(e, a) ? C ? C(g.price) : g.price.toString() : "";
    }
    if (!b || !I)
      return "";
    if (!E.value.includes(e))
      return "N/A";
    const d = I(s.value, t, e, k);
    return d ? C ? C(d) : d.toString() : "N/A";
  }, Xt = (e) => !b || !I ? !1 : I(s.value, t, e, k), ze = O(() => E.value.length > 1), Ke = O(() => W.value.length > 1), Lt = () => {
    if (y.value && y.value.length > 0) {
      const g = [];
      return L.value && L.value.length > 0 && L.value.forEach((h) => g.push(h.id)), g.push(...y.value), g;
    }
    const e = [];
    L.value && L.value.length > 0 && L.value.forEach((g) => e.push(g.id)), ze.value && e.push("all"), Ke.value && (Ut(t).length > 0 && e.push("faces"), zt(t).length > 0 && e.push("sides"));
    const a = /* @__PURE__ */ new Set();
    L.value && L.value.length > 0 && L.value.forEach((g) => {
      g.hideIndividualLocations && g.locations.forEach((h) => a.add(h));
    });
    const d = W.value.filter((g) => !a.has(g));
    return e.push(...d), e;
  }, Yt = () => M.value === "multiple", es = () => {
    const e = 1 + l.length, a = M.value === "multiple", d = b, g = e + (a ? 1 : 0) + (d ? 1 : 0);
    return {
      columns: g,
      style: `repeat(${g}, max-content)`
    };
  }, rt = (e) => e === "all" ? "all" : e === "faces" ? "faces" : e === "sides" ? "sides" : "individual", xt = (e) => it(e), ts = (e) => {
    if (e === "all")
      return ze.value;
    if (re(e))
      return we(e) ? ce(e).length > 0 : !1;
    if (y.value && y.value.length > 0)
      return y.value.includes(e);
    const a = rt(e);
    return a === "all" ? ze.value : a === "faces" || a === "sides" ? a === "faces" && _.value && K.value.length > 0 || a === "sides" && D.value && J.value.length > 0 ? Ke.value : !1 : W.value.includes(e);
  }, ss = (e) => {
    ws(e, t, v);
  }, ns = (e) => {
    bs([s.value], t, e, f);
  }, as = (e) => {
    ys([s.value], t, e);
  }, rs = (e, a, d) => {
    if (e === "all")
      U(a, d);
    else if (e === "faces")
      $e(a, d);
    else if (e === "sides")
      Ve(a, d);
    else if (re(e)) {
      let h = d;
      if (!Z() && typeof d == "boolean") {
        const x = Ee(a);
        x.length === 1 && (h = d ? x[0] : "");
      }
      if (!Z() && h) {
        const x = ce(e), V = new Set(x);
        L.value && (L.value.forEach((q) => {
          q.id !== e && ce(q.id).filter((ee) => !V.has(ee)).forEach((ee) => {
            A(ee, a, "");
          });
        }), ye(s));
      }
      at(e, a, h);
    } else
      A(e, a, d), Z() || ye(s);
    const g = f.length;
    for (let h = a + 1; h < g; h++) {
      console.group(`Checking downstream option at index: ${h}`);
      let x;
      if (e === "all" ? x = H(h) : e === "faces" ? x = Ce(h) : e === "sides" ? x = Ie(h) : re(e) ? x = i(e, h) : x = T(e, h), !x) {
        console.groupEnd();
        continue;
      }
      const V = ge(h, e);
      let q = !1;
      if (typeof x == "string" ? q = V.includes(x) : typeof x == "boolean" && x === !0 && (q = V.length > 0), !q) {
        const N = B(e, h) === "checkbox" ? !1 : "";
        e === "all" ? U(h, N) : e === "faces" ? $e(h, N) : e === "sides" ? Ve(h, N) : re(e) ? at(e, h, N) : A(e, h, N);
      }
      console.groupEnd();
    }
  }, is = (e, a = !0) => a && !confirm(`Delete ${t} for ${z(e)}?`) ? !1 : (e === "all" ? be() : e === "faces" ? Ze() : e === "sides" ? Ue() : re(e) ? o(e) : m(e), !0), os = () => {
    const e = s.value[t], a = s.value[`${t}Options`];
    return !(!e || typeof e != "object" || !a || typeof a != "object" || _.value && (!("faces" in e) || !("faces" in a)) || D.value && (!("sides" in e) || !("sides" in a)));
  }, ls = () => {
    const e = [], a = s.value[t], d = s.value[`${t}Options`];
    return !a || typeof a != "object" ? e.push(`Missing or invalid ${t} property in shape`) : (_.value && !("faces" in a) && e.push(`Missing faces property in ${t}`), D.value && !("sides" in a) && e.push(`Missing sides property in ${t}`)), !d || typeof d != "object" ? e.push(`Missing or invalid ${t}Options property in shape`) : (_.value && !("faces" in d) && e.push(`Missing faces property in ${t}Options`), D.value && !("sides" in d) && e.push(`Missing sides property in ${t}Options`)), e;
  }, Ct = (e) => {
    const a = [];
    if (!e || !Object.keys(e).length)
      return { valid: !0, errors: a };
    const d = Object.keys(e), g = Math.max(...d.map((h) => h.split("|").length));
    if (g <= 1)
      return { valid: !0, errors: a };
    for (const h of E.value) {
      const x = Z() ? pe(s.value, t, h, "value") || "" : T(h, 0);
      if (!x || typeof x != "string" || x === "")
        continue;
      const V = x.includes("|") ? x.split("|") : [x], q = V.filter((N) => N.trim() !== "").length;
      if (q > 0 && q < g) {
        const N = V.join("|"), X = d.some((se) => se.startsWith(N + "|")), ee = d.includes(N);
        if (X && !ee) {
          const se = g - q, te = V.filter((Fe) => Fe.trim() !== "").join(", "), Ae = z(h);
          a.push(`${t} selection incomplete for ${Ae}. Selected: "${te}" but ${se} more level${se > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: a.length === 0, errors: a };
  }, us = (e) => Ct(e).errors, cs = O(() => Lt().map((e) => ({
    location: e,
    label: z(e),
    isAggregate: ["all", "faces", "sides"].includes(e) || re(e)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: M,
    // Raw computed ref (not readonly wrapped)
    allLocations: oe(E),
    faceLocations: oe(K),
    sideLocations: oe(J),
    shouldShowAll: ze,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: oe(Ke),
    renderLocations: oe(cs),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: oe(_),
    supportsSides: oe(D),
    supportsBoth: oe(R),
    // Core operations
    setValue: A,
    getValue: T,
    setAll: U,
    getAll: H,
    getAllState: H,
    // Alias for backward compatibility
    deleteSingle: m,
    deleteAll: be,
    canDelete: w,
    // Group-specific operations
    setAllFaces: $e,
    setAllSides: Ve,
    getAllFaces: Ce,
    getAllSides: Ie,
    deleteAllFaces: Ze,
    deleteAllSides: Ue,
    // UI helpers
    getLocationLabel: z,
    getInputType: B,
    getInputConfig: Y,
    getAllInputConfig: yt,
    getAllFacesInputConfig: bt,
    getAllSidesInputConfig: wt,
    getInputConfigForLocation: Wt,
    getSelectOptions: kt,
    getSingleOptionLabel: Qt,
    // Pricing
    getPriceDisplay: Ht,
    getCalculatedPrice: Xt,
    // Layout & rendering
    getRenderLocations: Lt,
    shouldShowDeleteButton: Yt,
    getGridConfig: es,
    getLocationGroup: rt,
    getLocationScope: xt,
    isLocationVisible: ts,
    // Options management
    getAvailableOptions: ge,
    getSingleAvailableOption: Oe,
    // Initialization & migration
    initialize: P,
    initializeExtra: P,
    // Alias for backward compatibility
    initializeCustomNames: ss,
    migrateToSingle: ns,
    migrateToBoolean: as,
    // Event handlers
    handleInputChange: rs,
    handleDelete: is,
    // Validation
    validateShape: os,
    getValidationErrors: ls,
    validateIncompleteSelections: Ct,
    getIncompleteSelectionErrors: us,
    // Debug helpers (development only)
    getDebugInfo: (e, a) => ({
      mode: M.value,
      location: e,
      optionIndex: a,
      value: E.value.includes(e) ? T(e, a) : "N/A",
      inputType: B(e, a),
      canDelete: w(e),
      allState: H(a),
      availableOptions: ge(a),
      locationGroup: rt(e),
      config: j.value,
      supportsFaces: _.value,
      supportsSides: D.value,
      supportsBoth: R.value,
      ..._.value && {
        allFacesState: Ce(a)
      },
      ...D.value && {
        allSidesState: Ie(a)
      },
      ...E.value.includes(e) && {
        locationScope: xt(e)
      }
    })
  };
}, cn = (n) => {
  const {
    customNames: s,
    usedNames: t,
    allowCustomNames: l,
    getSelectOptions: f,
    onCustomNameAdded: p,
    onCustomNameDeleted: c
  } = n, v = G(""), b = O(() => l && v.value?.trim()), F = O(() => !l || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((k) => typeof k == "string").every((k) => t.value.includes(k))), y = O(() => {
    const I = [];
    if (l && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return I;
      const C = [...s.value.filter((P) => typeof P == "string")].sort();
      I.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), C.forEach((P) => {
        (t.value?.includes(P) ?? !1) || I.push({
          id: `delete-${P}`,
          label: `Delete "${P}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return I;
  }), L = () => {
    const I = v.value?.trim();
    if (!I) return;
    if (f("", 0).map((C) => C.value).includes(I)) {
      v.value = "";
      return;
    }
    p(I), v.value = "";
  }, $ = (I) => {
    const k = I.item || I;
    if (k.id?.startsWith("delete-")) {
      const C = k.id.replace("delete-", "");
      if (t.value?.includes(C)) {
        console.warn(`Cannot delete ${n.extraType} type "${C}" - it is currently in use`);
        return;
      }
      c(C);
    }
  };
  return {
    newCustomName: v,
    canAddCustomName: oe(b),
    isActionMenuDisabled: oe(F),
    customNameActions: y,
    handleAddCustomName: L,
    handleCustomNameAction: $
  };
}, fn = (n) => {
  const {
    extraType: s,
    allOptions: t,
    labels: l,
    shapeIndex: f,
    enablePricing: p,
    mode: c,
    shouldShowAll: v,
    locations: b,
    locationGroups: F = G([]),
    getInputType: y,
    getInputConfig: L,
    getAllInputConfig: $,
    getInputConfigForLocation: I,
    canDelete: k,
    getLocationLabel: C,
    shouldShowDeleteButton: P
  } = n, j = O(() => {
    const _ = [], D = /* @__PURE__ */ new Set();
    if (F.value && F.value.length > 0 && F.value.forEach((R) => {
      R.hideIndividualLocations && R.locations.forEach((Z) => D.add(Z));
    }), F.value && F.value.length > 0 && F.value.forEach((R) => _.push(R.id)), v.value && _.push("all"), b.value && b.value.length > 0)
      _.push(...b.value.filter((R) => R !== "all" && !D.has(R)));
    else {
      const R = qt(s), Z = Zt(s), ne = Bt(s), ae = Gt(s);
      Z && ne && ae && (Ut(s).length > 0 && _.push("faces"), zt(s).length > 0 && _.push("sides")), _.push(...R.filter((Q) => !D.has(Q)));
    }
    return Array.from(new Set(_));
  }), M = O(() => {
    const _ = 1 + t.length, D = c.value === "multiple", R = p;
    return `repeat(${_ + (D ? 1 : 0) + (R ? 1 : 0)}, max-content)`;
  }), W = (_, D) => `${s}-${_}-${l[D]}-${D}-${f}`, E = (_) => {
    const D = C(_);
    return `Delete ${s} for ${D}`;
  }, K = (_) => ({
    show: P(_),
    enabled: k(_),
    ariaLabel: E(_)
  }), J = (_, D) => y(_, D);
  return {
    renderLocations: oe(j),
    gridStyle: oe(M),
    getInputId: W,
    getDeleteAriaLabel: E,
    getInputConfigForLocation: I,
    getDeleteConfig: K,
    getInputTypeForLocation: J,
    // Re-export the passed functions for consistency
    getInputType: y,
    getInputConfig: L,
    getAllInputConfig: $,
    canDelete: k,
    shouldShowDeleteButton: P,
    getLocationLabel: C
  };
};
let _e = null;
function Ks() {
  if (!(!st() || _e))
    try {
      const n = require("~/store");
      if (n && n.applicationSettings) {
        _e = n.applicationSettings;
        return;
      }
    } catch (n) {
      console.warn("Failed to load ApplicationSettings from store:", n.message);
    }
}
function Me(n, s, t = {}) {
  console.log(`[useCrossPlatformStorage] Called for key: ${n}`);
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
  } = t;
  if (console.log(`[useCrossPlatformStorage] isNativeScript: ${st()}`), !st()) {
    const p = G((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const c = localStorage.getItem(n);
          if (c)
            return l.read(c);
        }
      } catch (c) {
        console.error(`Failed to load ${n} from localStorage:`, c);
      }
      return s;
    })());
    return nt(p, (c) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const v = l.write(c);
          localStorage.setItem(n, v);
        }
      } catch (v) {
        console.error(`Failed to save ${n} to localStorage:`, v);
      }
    }, { deep: !0 }), p;
  }
  if (st()) {
    if (console.log(`[useCrossPlatformStorage] NativeScript mode for key: ${n}`), console.log("[useCrossPlatformStorage] Initializing ApplicationSettings..."), Ks(), console.log("[useCrossPlatformStorage] ApplicationSettings initialized:", !!_e), !_e)
      return console.warn("ApplicationSettings not available, using in-memory fallback"), G(s);
    console.log(`[useCrossPlatformStorage] Loading initial value for key: ${n}`);
    const f = () => {
      try {
        const c = _e.getString(n);
        if (console.log(`[useCrossPlatformStorage] Stored value for ${n}:`, c ? "exists" : "null"), c) {
          const v = l.read(c);
          return console.log(`[useCrossPlatformStorage] Parsed value for ${n}`), v;
        }
      } catch (c) {
        console.error(`Failed to load ${n} from ApplicationSettings:`, c);
      }
      return console.log(`[useCrossPlatformStorage] Using default value for ${n}`), s;
    };
    console.log(`[useCrossPlatformStorage] Creating ref for ${n}`);
    const p = G(f());
    return console.log(`[useCrossPlatformStorage] Ref created for ${n}`), nt(p, (c) => {
      try {
        const v = l.write(c);
        _e.setString(n, v);
      } catch (v) {
        console.error(`Failed to save ${n} to ApplicationSettings:`, v);
      }
    }, { deep: !0 }), p;
  }
  return console.warn(`No storage available for key '${n}', using in-memory fallback`), G(s);
}
function Rt(n) {
  const s = {};
  if (n.code === "invalid_type") {
    const t = "input" in n ? typeof n.input : n.received;
    s.expected = n.expected, s.received = t;
  } else n.code === "too_small" ? (s.minimum = n.minimum, s.min = n.minimum, s.inclusive = n.inclusive) : n.code === "too_big" ? (s.maximum = n.maximum, s.max = n.maximum, s.inclusive = n.inclusive) : n.code === "invalid_string" && (s.validation = n.validation);
  return s;
}
function Rs(n) {
  return n.map((s) => {
    const t = s.path.length > 0 ? s.path.join(".") : "root", l = Rt(s), f = Is(s.message, l);
    return `[${t}] ${f}`;
  });
}
function je(n, s) {
  const t = n.safeParse(s);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function Js(n = {}) {
  console.log("[useInputs] createInputs() called with options:", n);
  const {
    numberFormat: s = "decimal"
  } = n;
  console.log("[useInputs] Creating inputShapes storage...");
  const t = Me("inputs/inputShapes", [], {
    serializer: {
      read: (i) => {
        if (!i) {
          const m = "GlobalStore/inputShapes", w = localStorage.getItem(m);
          if (w)
            i = w, localStorage.removeItem(m);
          else
            return [];
        }
        let o;
        try {
          o = JSON.parse(i);
        } catch (m) {
          return console.error("Failed to parse input shapes JSON:", m), [];
        }
        return y(o, s);
      },
      write: (i) => {
        const r = i.filter((w) => !w?.multiEdit).map((w) => w.toData());
        return JSON.stringify(r);
      }
    }
  }), l = Me("inputs/inputStock", [], {
    serializer: {
      read: (i) => {
        if (!i) return [];
        let o;
        try {
          o = JSON.parse(i);
        } catch (m) {
          return console.error("  Failed to parse stock JSON:", m), [];
        }
        return L(o, s);
      },
      write: (i) => {
        const o = i.filter((m) => !m?.multiEdit);
        return JSON.stringify(o.map((m) => m.toData()));
      }
    }
  }), f = Me("inputs/inputSaw", new ke({}), {
    serializer: {
      read: (i) => {
        if (!i)
          return new ke({});
        try {
          const o = JSON.parse(i);
          return $(o);
        } catch (o) {
          return console.error("  Failed to parse saw JSON:", o), new ke({});
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
      read: (i) => I(i ? JSON.parse(i) : []),
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
  }), v = G([]), b = G(!1);
  function F(i) {
    if (!i || typeof i != "object") return i;
    const o = { ...i };
    if (delete o.issues, delete o.warnings, o.trim && typeof o.trim == "object") {
      const r = o.trim;
      ("x1" in r || "x2" in r || "y1" in r || "y2" in r) && (o.trim = {
        l1: r.y1 ?? r.l1 ?? 0,
        l2: r.y2 ?? r.l2 ?? 0,
        w1: r.x1 ?? r.w1 ?? 0,
        w2: r.x2 ?? r.w2 ?? 0
      });
    }
    if (o.extras?.banding?.sides && typeof o.extras.banding.sides == "object") {
      const r = o.extras.banding.sides;
      ("x1" in r || "x2" in r || "y1" in r || "y2" in r) && (o.extras.banding.sides = {
        l1: r.x1 ?? r.l1,
        l2: r.x2 ?? r.l2,
        w1: r.y1 ?? r.w1,
        w2: r.y2 ?? r.w2
      });
    }
    if (o.extras?.finish?.sides && typeof o.extras.finish.sides == "object") {
      const r = o.extras.finish.sides;
      ("x1" in r || "x2" in r || "y1" in r || "y2" in r) && (o.extras.finish.sides = {
        l1: r.x1 ?? r.l1,
        l2: r.x2 ?? r.l2,
        w1: r.y1 ?? r.w1,
        w2: r.y2 ?? r.w2
      });
    }
    if (o.extras?.planing?.sides && typeof o.extras.planing.sides == "object") {
      const r = o.extras.planing.sides;
      ("x1" in r || "x2" in r || "y1" in r || "y2" in r) && (o.extras.planing.sides = {
        l1: r.x1 ?? r.l1,
        l2: r.x2 ?? r.l2,
        w1: r.y1 ?? r.w1,
        w2: r.y2 ?? r.w2
      });
    }
    if (o.efficiencyOptions?.primaryCompression) {
      const r = o.efficiencyOptions.primaryCompression;
      r === "x" ? o.efficiencyOptions = {
        ...o.efficiencyOptions,
        primaryCompression: "l"
      } : r === "y" && (o.efficiencyOptions = {
        ...o.efficiencyOptions,
        primaryCompression: "w"
      });
    }
    for (const r in o)
      o[r] === null && delete o[r];
    return o;
  }
  function y(i, o) {
    if (!Array.isArray(i))
      return [];
    const r = [];
    for (let m = 0; m < i.length; m++) {
      const w = i[m], z = F(w);
      try {
        const B = {
          ...z,
          skipSchemaValidation: !0
          // Skip Zod validation during construction
        };
        w.autoId && (B.autoId = w.autoId), delete B.issues, delete B.warnings;
        const Y = new Qe(B, o);
        r.push(Y);
      } catch (B) {
        console.error(`Failed to create InputShape at index ${m}:`, B);
        const Y = new Qe({ skipSchemaValidation: !0 }, o);
        r.push(Y);
      }
    }
    return r;
  }
  function L(i, o) {
    if (!Array.isArray(i)) return [];
    const r = [];
    for (let m = 0; m < i.length; m++) {
      const w = i[m], z = F(w);
      try {
        const B = {
          ...z,
          skipSchemaValidation: !0
          // Skip Zod validation during construction
        };
        w.autoId && (B.autoId = w.autoId);
        const Y = new De(B, o);
        r.push(Y);
      } catch (B) {
        console.error(`Failed to create InputStock at index ${m}:`, B);
        const Y = new De({ skipSchemaValidation: !0 }, o);
        r.push(Y);
      }
    }
    return r;
  }
  function $(i) {
    const o = F(i), r = je(lt, o);
    if (r.success && r.data) {
      const m = {
        ...r.data,
        issues: [],
        warnings: []
      };
      return i?.autoId && (m.autoId = i.autoId), new ke(m);
    } else
      return console.error("Failed to parse input saw:", r.errors), new ke({});
  }
  function I(i, o) {
    return Array.isArray(i) ? i.map((r) => new Cs(r)).filter(Boolean) : [];
  }
  function k(i = {}) {
    try {
      const m = { ...Ps(
        (z) => {
          if (typeof z != "object" || z === null) return z;
          const B = { ...z };
          for (const Y in B)
            B[Y] === null && delete B[Y];
          return B;
        },
        ct
      ).parse(i), isNew: !0 }, w = new Qe(m, s);
      return console.log(`[useInputs] Created new InputShape with isNew=${w.isNew}, autoId=${w.autoId}`), w.createId(t.value.length), t.value.push(w), w;
    } catch (o) {
      return o instanceof He && (console.error("Shape validation failed:", o.issues), Z("part", "Invalid shape data", o.issues)), null;
    }
  }
  function C(i = {}) {
    try {
      const r = { ...ut.parse(i), isNew: !0 }, m = new De(r, s);
      return m.createId(l.value.length), l.value.push(m), m;
    } catch (o) {
      return o instanceof He && (console.error("Stock validation failed:", o.issues), Z("stock", "Invalid stock data", o.issues)), null;
    }
  }
  function P(i) {
    try {
      const o = i.toData(), r = ct.parse(o);
      return new Qe(r, s);
    } catch (o) {
      return o instanceof He && (console.error("Shape clone validation failed:", o.issues), Z("part", "Invalid shape data during cloning", o.issues)), null;
    }
  }
  function j(i) {
    try {
      const o = i.toData(), r = ut.parse(o);
      return new De(r, s);
    } catch (o) {
      return o instanceof He && (console.error("Stock clone validation failed:", o.issues), Z("stock", "Invalid stock data during cloning", o.issues)), null;
    }
  }
  function M(i, o) {
    const r = t.value.find((z) => z.autoId === i);
    if (!r) return !1;
    const m = { ...r.toData(), ...o }, w = je(ct, m);
    if (w.success && w.data)
      return r.update(w.data), r.isNew ? console.log("[useInputs] Skipping validation for isNew shape in updateInputShape") : r.validate(), !0;
    {
      const z = w.errors ? Rs(w.errors) : [];
      console.error("Shape update validation failed:", z);
      const B = w.errors?.[0];
      if (B) {
        const Y = Rt(B);
        new We({
          category: ["part"],
          message: B.message,
          // This is the translation key from Zod error map
          params: Y,
          issues: v.value
        });
      } else
        Z("part", "Invalid shape update");
      return !1;
    }
  }
  function W(i, o) {
    const r = t.value.findIndex((w) => w.autoId === i);
    if (r === -1) return !1;
    const m = t.value[r];
    return m.validate({ fields: [o] }), m.issues.length === 0;
  }
  function E(i, o) {
    const r = l.value.find((z) => z.autoId === i);
    if (!r) return !1;
    const m = { ...r.toData(), ...o }, w = je(ut, m);
    return w.success && w.data ? (r.update(w.data), r.isNew || R(), !0) : (console.error("Stock update validation failed:", w.errors), Z("stock", "Invalid stock update", w.errors), !1);
  }
  function K(i, o) {
    const r = l.value.findIndex((w) => w.autoId === i);
    if (r === -1) return !1;
    const m = l.value[r];
    return m.validate({ fields: [o] }), ye(l), m.issues.length === 0;
  }
  function J(i) {
    if (t.value.length === 1) return !1;
    const o = t.value.findIndex((r) => r.autoId === i);
    return o === -1 ? !1 : (t.value.splice(o, 1), !0);
  }
  function _(i) {
    if (l.value.length === 1) return !1;
    const o = l.value.findIndex((r) => r.autoId === i);
    return o === -1 ? !1 : (l.value.splice(o, 1), !0);
  }
  function D(i) {
    b.value = !0;
    const o = [];
    try {
      t.value.forEach((r) => r.issues = []);
      for (let r = 0; r < t.value.length; r++) {
        const m = t.value[r];
        if (m.isNew)
          continue;
        const w = m.validate({
          inputStockList: l.value,
          index: r,
          stockType: i?.stockType ?? null,
          partTrim: 0,
          useInventory: !1,
          saw: i
        });
        o.push(...w);
      }
      t.value.some((r) => r.q > 0) || new We({
        category: ["part"],
        message: "errors.validation.no_parts",
        issues: o
      });
    } finally {
      b.value = !1;
    }
    return v.value = o, o;
  }
  function R(i) {
    b.value = !0;
    const o = [];
    try {
      l.value.forEach((r) => r.issues = []);
      for (let r = 0; r < l.value.length; r++) {
        const w = l.value[r].validate({ saw: i }, r);
        o.push(...w);
      }
      l.value.some((r) => r.q > 0 || r.autoAdd) || new We({
        category: ["stock"],
        message: "errors.validation.no_stock",
        issues: o
      });
    } finally {
      b.value = !1;
    }
    return v.value = o, o;
  }
  function Z(i, o, r) {
    new We({
      category: [i],
      message: o,
      issues: v.value
    }), r && console.log("Validation details:", r);
  }
  function ne() {
    v.value = [], t.value.forEach((i) => i.issues = []), l.value.forEach((i) => i.issues = []);
  }
  function ae(i = {}) {
    const o = [], r = [], m = i.inputShapesOverride ?? t.value;
    if (!m.length)
      return { shapeList: [], issues: [] };
    for (let w = 0; w < m.length; w++) {
      const z = m[w];
      if (!z.q) continue;
      z.createId(w), z.applyPartTrim(i.trim, i.stockType);
      const B = z.toShape();
      i.minSpacing && i.maxDimension && (B.l <= i.maxDimension || B.w <= i.maxDimension) && (B.minSpacing = i.minSpacing), o.push(B), r.push(...B.issues);
    }
    return { shapeList: o, issues: r };
  }
  function ie(i) {
    if (!l.value.length)
      return { stockList: [], issues: [] };
    const o = [], r = [];
    for (let m = 0; m < l.value.length; m++) {
      const w = l.value[m];
      if (!w.q && !w.autoAdd) continue;
      w.createId(m), w.saw = i;
      const z = w.toStock();
      o.push(z), r.push(...z.issues);
    }
    return { stockList: o, issues: r };
  }
  function Q(i, o = s) {
    const r = {
      saw: { success: !1, failed: !1 },
      shapes: { success: 0, failed: 0 },
      stock: { success: 0, failed: 0 },
      groups: { success: 0, failed: 0 }
    };
    if (i.saw) {
      const m = je(lt, F(i.saw));
      if (m.success && m.data) {
        const w = { ...m.data };
        i.saw?.autoId && (w.autoId = i.saw.autoId), f.value = new ke(w), r.saw.success = !0;
      } else
        console.error("Failed to parse input saw:", m.errors), r.saw.failed = !0;
    }
    if (i.shapes) {
      const m = y(i.shapes, o);
      r.shapes.success = m.length, r.shapes.failed = i.shapes.length - m.length, t.value = m;
    }
    if (i.stock) {
      const m = L(i.stock, o);
      r.stock.success = m.length, r.stock.failed = i.stock.length - m.length, l.value = m;
    }
    if (i.groups) {
      const m = I(i.groups);
      r.groups.success = m.length, r.groups.failed = i.groups.length - m.length, p.value = m;
    }
    return i.extrasOptions && (c.value = { ...i.extrasOptions }), r;
  }
  function ue() {
    return {
      shapes: t.value.map((i) => i.toData()),
      stock: l.value.map((i) => i.toData()),
      inputUserGroups: p.value.map((i) => i.toData()),
      extrasOptions: c.value
    };
  }
  function le() {
    t.value = [], l.value = [], p.value = [], ne();
  }
  const de = O(() => t.value.reduce((i, o) => o?.q && o.q > 0 && !o?.multiEdit ? i + o.q : i, 0)), u = O(() => l.value.reduce((i, o) => o?.q && o.q > 0 && !o?.multiEdit ? i + o.q : i, 0)), S = O(() => t.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), A = O(() => l.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), T = O(() => v.value.length > 0), U = () => [
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
  ], H = G(null), be = G(null), xe = () => {
    H.value = null;
  }, qe = ne, Ne = (i = null) => {
    const o = i?.inputShapesOverride ?? t.value, r = D(i?.saw || void 0);
    return !r.length && o.length ? (xs(o, l.value, i?.saw || f.value), o.flatMap((w) => w.issues)) : r;
  }, Be = (i, o = "decimal") => {
    const r = i?.inputSaw, m = i?.inputShapes, w = i?.inputStock, z = i?.inputUserGroups;
    return Q({
      saw: r,
      shapes: m,
      stock: w,
      groups: z
    }, o);
  }, Ge = (i, o = "decimal") => Q({ shapes: i }, o).shapes.success > 0, $e = (i, o = "decimal") => Q({ stock: i }, o).stock.success > 0, Ve = (i, o, r, m) => {
    o[0]?.length > 0 && (c.value[i] || (c.value[i] = { options: [] }), c.value[i].options = [...o[0]]), r && m && o.length > 0 ? Us(i, {
      options: o,
      // Use all columns extracted from pricing
      labels: r,
      pricing: m
    }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: r, pricingData: m, pricingOptionsLength: o.length });
  }, Ce = () => {
    if (!Object.values(c.value).some(
      (r) => r.options.length > 0
    )) return;
    const o = (r, m) => {
      const w = {};
      for (const z of m)
        w[z] = [...r];
      return w;
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
  }, Ie = (i) => {
    if (!l.value.length) return "n";
    const o = i.material, r = i.t, m = l.value.filter((Y) => Y.material === o && Y.t === r);
    if (!m.length)
      return "n";
    let w = !1, z = !1, B = !1;
    for (const Y of m)
      Y.grain === "l" ? (w = !0, z = !0) : Y.grain === "w" && (w = !0, B = !0);
    return w ? z && B ? "y" : z ? "l" : B ? "w" : "n" : "n";
  }, Ze = (i) => {
    for (const o of t.value)
      Nt(o, i);
    for (const o of l.value)
      Nt(o, i);
  };
  function Ue(i) {
    const o = { ...f.value.toData(), ...i }, r = je(lt, o);
    return r.success && r.data ? (f.value.update(r.data), !0) : (console.error("InputSaw update validation failed:", r.errors), Z("saw", "Invalid saw update", r.errors), !1);
  }
  function we() {
    f.value = new ke({});
  }
  function re() {
    const i = f.value.validate();
    return v.value = [...v.value.filter((o) => o.category?.[0] !== "saw"), ...i], i;
  }
  let ce = !1;
  return nt(t, (i) => {
    ce || !i.length || Fs(() => {
      const o = ["banding", "finish", "planing"], r = [];
      o.forEach((m) => {
        const w = zs(m, i);
        w.cleanedCount > 0 && r.push(
          `${m}: ${w.invalidOptions.join(", ")}`
        );
      }), r.length > 0 && (console.warn(
        `Some extras options no longer exist and have been reset:
` + r.join(`
`)
      ), typeof window < "u" && window.alert && setTimeout(() => {
        alert(
          `Some extras options no longer exist and have been reset:
` + r.join(`
`)
        );
      }, 500)), ce = !0;
    });
  }, { immediate: !0 }), {
    // Bundled object
    inputs: {
      inputStock: l,
      inputShapes: t,
      inputUserGroups: p,
      currentInputShape: H,
      selectedSaw: be,
      inputSaw: f
    },
    // State
    inputShapes: t,
    inputStock: l,
    inputUserGroups: p,
    inputSaw: f,
    currentInputShape: H,
    selectedSaw: be,
    validationIssues: v,
    isValidating: b,
    // Computed
    totalInputShapes: de,
    totalInputStock: u,
    totalInputShapeLines: S,
    totalInputStockLines: A,
    hasValidationIssues: T,
    // Actions
    addInputShape: k,
    addInputStock: C,
    cloneInputShape: P,
    cloneInputStock: j,
    updateInputShape: M,
    updateInputStock: E,
    updateInputSaw: Ue,
    removeInputShape: J,
    removeInputStock: _,
    reset: xe,
    resetInputSaw: we,
    clear: le,
    clearIssues: qe,
    // Validation
    validateInputShapes: Ne,
    validateInputShapeField: W,
    validateInputStock: R,
    validateInputStockField: K,
    validateInputSaw: re,
    clearValidationIssues: ne,
    // Conversion
    createShapeList: ae,
    createStockList: ie,
    // Import/Export/Update
    importData: Q,
    exportData: ue,
    updateInputs: Be,
    importInputShapes: Ge,
    importInputStock: $e,
    // Additional functions
    getShapeGrainSummary: Ie,
    updateNumberFormat: Ze,
    getSpecialShapeFields: U,
    // Extras Options Management
    extrasOptions: c,
    setExtrasOptionsFromPricing: Ve,
    getCentralizedOptions: Ce
  };
}
let St = null;
function pn(n = { numberFormat: "decimal" }) {
  return St || (St = Js(n)), St;
}
const Se = G([]), Ws = 6;
function dn() {
  const n = ({
    message: t,
    type: l = "info",
    additional: f = [],
    options: p = {},
    action: c = () => {
    }
  }) => {
    Array.isArray(f) || (console.warn("addNotice - additional must be an array"), f = []);
    const v = {
      id: crypto.randomUUID(),
      message: ft(t),
      additional: f.length > 5 ? f.slice(0, 5).map((F) => ft(F)).join("<br>") + "<br>..." : f.slice(0, 5).map((F) => ft(F)).join("<br>"),
      type: l,
      persistent: p.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: c
    }, b = p.maxNotices ?? Ws;
    if (Se.value.length >= b) {
      const F = Se.value.findIndex((y) => !y.persistent);
      if (F !== -1)
        Se.value.splice(F, 1);
      else if (!v.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), v.id;
    }
    return Se.value.push(v), !v.persistent && p.timeout !== 0 && setTimeout(() => s(v.id), p.timeout || 6e3), v.id;
  }, s = (t) => {
    Se.value.findIndex((f) => f.id === t) !== -1 && (Se.value = Se.value.filter((f) => f.id !== t));
  };
  return {
    notices: Se,
    addNotice: n,
    dismissNotice: s
  };
}
const Mt = G({
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
const Hs = _s(() => pt({
  // Material field
  material: me(
    gt().optional(),
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
    Es([dt(), gt()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: $t({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: $t({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: me(
    dt().int().positive().default(1),
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
  name: Os({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: me(
    Vs(["n", "l", "w"]).default("n").optional(),
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
    Xe().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: me(
    pt({
      enabled: Xe().default(!1),
      type: gt().optional(),
      sides: dt().optional()
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
    pt({
      enabled: Xe().default(!1),
      operations: Ns($s()).optional()
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
    Xe().default(!1),
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
function Xs(n) {
  const s = Hs._def.getter();
  return n === "linear" ? s.omit({
    w: !0,
    orientationLock: !0,
    banding: !0,
    machining: !0,
    planing: !0
  }) : n === "roll" ? s.omit({
    banding: !0,
    machining: !0,
    planing: !0
  }) : s;
}
class Ys {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, t) {
    const l = [], f = this.unwrapSchema(s);
    if (!this.isZodObject(f))
      return console.warn("Schema is not a ZodObject:", f), l;
    const p = f.shape;
    for (const [c, v] of Object.entries(p)) {
      if (c.startsWith("_") || this.isComputedField(v))
        continue;
      if (c === "trim" && this.isTrimField(v)) {
        const F = this.generateTrimFields(v);
        l.push(...F);
        continue;
      }
      const b = this.extractFieldMetadata(c, v);
      b && l.push(b);
    }
    return t?.sortByOrder ? l.sort((c, v) => (c.order || 999) - (v.order || 999)) : l;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, t) {
    let l = t._metadata;
    const f = this.unwrapField(t);
    if (l || (l = f._metadata), l) {
      if (l.hidden)
        return null;
      const b = {
        name: s,
        type: l.type || this.getFieldType(f),
        label: l.label || this.formatLabel(s),
        description: l.description,
        required: !this.isOptional(t),
        defaultValue: l.defaultValue ?? this.getDefaultValue(f),
        ...l
      };
      return this.extractTypeSpecificMetadata(b, f), b;
    }
    const p = f._def?.description, c = this.parseFieldDescription(p), v = {
      name: s,
      type: this.getFieldType(f),
      label: c.label || this.formatLabel(s),
      description: c.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(f),
      ...c
    };
    return this.extractTypeSpecificMetadata(v, f), v;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const t = this.unwrapField(s);
    if (t instanceof Vt) {
      const l = t._def?.options || [];
      for (const f of l)
        if (f instanceof Ye)
          return this.isIntegerNumber(f) ? "integer" : "number";
    }
    return t instanceof Ye ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof Ts ? "string" : t instanceof Ms ? "boolean" : t instanceof Et || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof js ? "array" : t instanceof et ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, t) {
    const l = t;
    if (l.minValue !== void 0 && l.minValue !== -1 / 0) {
      s.min = l.minValue;
      const p = t._def?.checks?.find(
        (c) => c.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (p && l.minValue === 0) {
        const c = p._zod?.def?.inclusive ?? p.inclusive;
        s.allowZero = c === !0;
      } else
        s.allowZero = l.minValue === 0;
    }
    l.maxValue !== void 0 && l.maxValue !== 1 / 0 && (s.max = l.maxValue);
    const f = t._def?.checks || [];
    for (const p of f) {
      let c, v, b = !0;
      if (p.kind)
        c = p.kind, v = p.value, b = p.inclusive !== void 0 ? p.inclusive : !0;
      else if (p?._zod?.def) {
        const F = p._zod.def;
        c = F.check, v = F.value, b = F.inclusive !== void 0 ? F.inclusive : !0;
      } else
        continue;
      c === "min" || c === "greater_than" ? s.min === void 0 && (s.min = c === "greater_than" && !b ? v + 1e-6 : v, s.allowZero = s.min === 0) : c === "max" || c === "less_than" ? s.max === void 0 && (s.max = c === "less_than" && !b ? v - 1e-6 : v) : c === "int" && (s.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(s, t) {
    if (t instanceof Vt) {
      const l = t._def?.options || [];
      for (const f of l)
        if (f instanceof Ye) {
          this.extractNumberConstraints(s, f), s.type = "number";
          break;
        }
    } else t instanceof Ye && this.extractNumberConstraints(s, t);
    if (!s.options) {
      if (t instanceof Et) {
        const l = t._def?.values;
        Array.isArray(l) ? s.options = l.map((f) => ({
          value: f,
          label: this.formatLabel(String(f))
        })) : l ? s.options = Object.values(l).map((f) => ({
          value: f,
          label: this.formatLabel(String(f))
        })) : s.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const l = t._def?.values || {};
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
    const t = {}, l = s.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (l) {
      t.description = l[1].trim();
      const f = l[2].split(",");
      for (const p of f) {
        const [c, v] = p.split(":").map((b) => b.trim());
        c === "group" && (t.group = v), c === "order" && (t.order = parseInt(v)), c === "units" && (t.units = v), c === "hidden" && (t.hidden = v === "true"), c === "readonly" && (t.readonly = v === "true"), c === "placeholder" && (t.placeholder = v);
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
    if (s instanceof ht || s instanceof vt)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.out, l = s._def?.in;
      if (t) {
        const f = this.isOptional(t);
        if (f) return f;
      }
      if (l) {
        const f = this.isOptional(l);
        if (f) return f;
      }
    }
    return s._def?.typeName === "ZodEffects" ? this.isOptional(s._def?.schema) : s instanceof mt ? this.isOptional(s._def?.innerType) : !1;
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
    const t = s._def?.typeName, l = s.constructor.name;
    if (s instanceof ht || s instanceof vt)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof mt || l === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (t === "ZodEffects")
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
    if (s instanceof mt) {
      const t = s._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const t = s._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (s instanceof ht || s instanceof vt) {
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
    const t = /* @__PURE__ */ new Map(), l = [];
    for (const p of s)
      p.group ? (t.has(p.group) || t.set(p.group, []), t.get(p.group).push(p)) : l.push(p);
    const f = [];
    return t.forEach((p, c) => {
      f.push({
        name: c,
        label: this.formatLabel(c),
        fields: p.sort((v, b) => (v.order || 999) - (b.order || 999))
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
    const t = this.unwrapField(s);
    if (t instanceof et) {
      const l = t.shape;
      return "l1" in l && "l2" in l && "w1" in l && "w2" in l;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(s) {
    const t = [], l = this.unwrapField(s);
    if (!(l instanceof et))
      return t;
    const f = l.shape, p = ["l1", "l2", "w1", "w2"];
    for (const c of p)
      if (c in f) {
        const v = f[c], b = this.extractFieldMetadata(`trim.${c}`, v);
        b && (b.propertyPath = `trim.${c}`, b.name = `trim.${c}`, b.group || (b.group = "trim"), t.push(b));
      }
    return t;
  }
}
const jt = new Ys();
function en(n, s = {}) {
  const t = G([]), l = G([]), f = G(/* @__PURE__ */ new Map()), p = G(/* @__PURE__ */ new Map()), c = (I) => {
    let k = jt.generateFields(n);
    s.overrides && (k = k.map((P) => {
      const j = s.overrides[P.name];
      if (j) {
        const M = { ...P, ...j };
        return j.min === void 0 && P.min !== void 0 && (M.min = P.min), j.max === void 0 && P.max !== void 0 && (M.max = P.max), M;
      }
      return P;
    })), p.value.clear();
    for (const P of k)
      p.value.set(P.name, P);
    const C = I || s.allowedFieldIds;
    if (C && C.length > 0) {
      const P = C, j = /* @__PURE__ */ new Map();
      for (const W of k)
        j.set(W.name, W);
      const M = [];
      for (const W of P) {
        const E = j.get(W);
        E && M.push(E);
      }
      k = M;
    }
    s.filter && (k = k.filter(s.filter)), t.value = k, f.value.clear();
    for (const P of k)
      f.value.set(P.name, P);
    s.grouped && (l.value = jt.groupFields(k));
  };
  c();
  const v = (I) => f.value.get(I), b = (I) => p.value.get(I), F = () => p.value, y = (I, k) => {
    const C = f.value.get(I);
    C && Object.assign(C, k);
  }, L = (I) => {
    const k = v(I);
    return !(!k || k.hidden);
  }, $ = (I) => {
    const k = v(I);
    if (!k) return {};
    const C = {};
    return k.required && (C.required = !0), k.type === "number" && (k.min !== void 0 && (C.min = k.min), k.max !== void 0 && (C.max = k.max)), C;
  };
  return {
    fields: O(() => t.value),
    groups: O(() => l.value),
    fieldMap: O(() => f.value),
    allFieldsMap: O(() => p.value),
    getField: v,
    getFieldMetadata: b,
    getAllFieldMetadata: F,
    updateField: y,
    isFieldVisible: L,
    getFieldValidation: $,
    regenerateFields: c
  };
}
function gn(n) {
  const { stockType: s, materials: t = [], minDimension: l = 0 } = n, f = Xs(s), p = {
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
  return t.length > 0 && (p.material = {
    ...p.material,
    type: "enum",
    options: t.map((c) => ({ value: c.name, label: c.name })),
    defaultValue: t[0]?.name
  }), en(f, {
    ...n,
    overrides: { ...p, ...n.overrides }
  });
}
const { progress: Pe, reset: Dt } = Qs();
function hn(n) {
  const s = "https://api.cutlistevo.com/";
  let t;
  const l = () => {
    t = Ds(s, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), t.on("connect", () => {
      n.refs?.connected && (n.refs.connected.value = !0), n.callbacks?.onConnect?.();
    }), t.on("connect_error", (c) => {
      n.refs?.connected && (n.refs.connected.value = !1), n.refs?.thinking && (n.refs.thinking.value = !1), n.callbacks?.onConnectError?.(c);
    }), t.on("connect_timeout", (c) => {
      n.refs?.connected && (n.refs.connected.value = !1), n.refs?.thinking && (n.refs.thinking.value = !1), n.callbacks?.onConnectError?.(c);
    }), t.on("result", (c) => {
      Pe.value.complete = !0, n.callbacks?.onResult?.(c), t.disconnect();
    }), t.on("queued", () => {
      Dt(), Pe.value.queued = !0;
    }), t.on("started", () => {
      Pe.value.started = !0;
    }), t.on("progress", (c) => {
      c?.data?.message === "result" ? Pe.value.resultCount++ : (Pe.value.stockCount = c.data.stockCount, Pe.value.shapeCount = c.data.shapeCount);
    }), t.on("user", (c) => {
      n.callbacks?.onUser?.(c);
    }), t.on("error", (c) => {
      n.refs?.thinking && (n.refs.thinking.value = !1), Dt(), n.callbacks?.onError?.(c);
    });
  }, f = () => t?.disconnect(), p = () => t?.connect();
  return l(), {
    socket: t,
    connect: p,
    disconnect: f
  };
}
const Jt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], tn = (n) => Jt.includes(n);
function vn(n, s) {
  const t = (y) => {
    s.log?.(y);
  }, l = (y) => (s.error?.(y), { success: !1, error: y }), f = () => {
    for (const y of Jt) p(y, 0);
  }, p = (y, L) => {
    t(["setting price", y, L]);
    const { inputs: $, elements: I, setInputValue: k, formatPrice: C } = s;
    if (isNaN(L)) throw new Error("Price must be a number");
    if (!tn(y)) return;
    const j = {
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
    }[y];
    j?.hidden && $[j.hidden] && (t(["setting hidden price", j.hidden, L]), k(j.hidden, L)), j?.visible && I[j.visible] && (I[j.visible].innerText = C(L));
  }, c = (y) => {
    const { product: L, getCurrentVariationPrice: $, isQuantityPricing: I, enableAddToCart: k, setCartQuantity: C } = s;
    let P = L?.price || $(!0) || 0;
    typeof P == "string" && (P = parseFloat(P));
    const j = n.unit_system === "imperial" ? "feet" : "meters", W = {
      full_stock: (K) => {
        if (t(["calculating cost by full sheet"]), !I()) {
          const J = K.metadata.totalStockCost;
          return p("stock", J), J;
        }
        return I() && C(K.metadata.totalUsedStock), 0;
      },
      part_area: (K) => {
        t([`calculating cost by part area in square ${j}`]);
        const J = n.unit_system === "imperial" ? 144 : 1e6, _ = K.metadata.totalPartArea / J, D = _ * P;
        p("partArea", D), t([`part area price in square ${j} is ${_} (part area) * ${P} (product price) = ${D}`]);
        let R = D;
        if (n?.enable_offcut_pricing && K?.offcuts) {
          const ne = K?.offcuts.reduce((ie, Q) => {
            const ue = Q.l >= Q.w ? Q.l : Q.w, le = Q.l >= Q.w ? Q.w : Q.l;
            return ue < n.offcut_min_length || le < n.offcut_min_width ? ie + ue * le : ie;
          }, 0) / J, ae = ne * P;
          p("offcutArea", ae), t([`calculated sellable offcut area as ${ne} square ${j}, with price ${ae}`]), R += ae;
        }
        if (t([`calculated total price as ${R}`]), I()) {
          const Z = R / P;
          return t([`setting cart quantity to ${Z}`]), C(Z, 2), 0;
        } else
          return R;
      },
      cut_length: (K) => {
        t([`calculating cost by cut length in  ${j}`]);
        const J = n.unit_system === "imperial" ? 12 : 1e3, _ = K.metadata.totalCutLength / J;
        return C(_, 2), 0;
      },
      full_stock_plus_cut_length: (K) => {
        t(["calculating cost by full sheet plus cut length"]);
        let J = 0;
        const _ = K.metadata.totalStockCost;
        p("stock", _), J = _, I() && C(K.metadata.totalUsedStock);
        const D = n.unit_system === "imperial" ? 12 : 1e3, Z = K.metadata.totalCutLength / D * n.cut_length_price;
        return p("cutLength", Z), J + Z;
      },
      full_stock_plus_num_parts: (K) => {
        t(["calculating cost by full sheet plus number of parts"]);
        let J = 0;
        const _ = K.metadata.totalStockCost;
        p("stock", _), J = _, I() && C(K.metadata.totalUsedStock);
        const D = K.metadata.totalPartsProduced * n.per_part_price;
        return p("perPart", D), J + D;
      },
      roll_length: (K) => {
        t([`calculating cost by roll length in ${j}`]);
        const J = n.unit_system === "imperial" ? 12 : 1e3, _ = K.stock.reduce((D, R) => D + R.analysis.rollLength / J * As({ v: R.cost }), 0);
        return p("rollLength", _), _;
      }
    }[n.pricing_strategy], E = W(y);
    return k(), E;
  }, v = (y) => {
    const {
      isExtraEnabled: L,
      isMachiningEnabled: $,
      isSurchargeEnabled: I,
      inputType: k,
      getTotalBandingPrice: C,
      getTotalFinishPrice: P,
      getTotalMachiningPrice: j,
      getInputValue: M
    } = s;
    let W = 0;
    if (L("banding") && y.metadata.bandingLengthByType) {
      const E = C(y.metadata.bandingLengthByType);
      p("banding", E), W += E;
    }
    if (L("finish") && y.metadata.finishAreaByType) {
      const E = P(y.metadata.finishAreaByType);
      p("finish", E), W += E;
    }
    if (k.value === "formula") {
      const E = parseFloat(M("smartcut-hardware-price"));
      isNaN(E) || (W += E);
    }
    if ($()) {
      const E = j(y);
      p("machining", E), W += E;
    }
    if (I() && n.surcharge) {
      const E = n.surcharge_type === "per_sheet" ? parseFloat(n.surcharge.toString()) * y.metadata.totalUsedStock : parseFloat(n.surcharge.toString());
      p("surcharge", E), t(["added surcharge", E]), W += E;
    }
    return W;
  }, b = (y) => {
    const { getInputValue: L, setInputValue: $ } = s, I = {
      "smartcut-job-id": y.jobId,
      "smartcut-dimensions": y.parts.map((k) => `${k.l}x${k.w} [${k.q}]`).join(", "),
      "smartcut-total-cut-length": y.metadata.totalCutLength,
      "smartcut-part-area": y.metadata.totalPartArea,
      "smartcut-total-cuts": y.metadata.totalCuts,
      "smartcut-total-parts": y.metadata.totalPartsProduced,
      "smartcut-machining": y.metadata.hasMachining
    };
    if (Object.entries(I).forEach(([k, C]) => {
      L(k) !== void 0 && $(k, C);
    }), L("smartcut-stock-summary") !== void 0) {
      const k = y.stock.map((C) => `${C.l}x${C.w}${C.t ? "x" + C.t : ""} [${C.q}]`).join(", ");
      $("smartcut-stock-summary", k);
    }
  };
  return {
    calculatePrice: async (y) => {
      f();
      const { isQuantityPricing: L, selectedVariation: $, setVariationPrice: I, setCartQuantity: k } = s;
      if (!y?.jobId)
        return l("No job ID provided");
      L() || k(1);
      let C = c(y);
      const P = v(y);
      if (C += P, L()) {
        const j = y.metadata.totalUsedStock, M = C / j;
        p("custom", M);
      } else {
        if (!y.metadata.totalStockCost)
          return l("Total stock cost not returned for a multiple size product");
        t([`total cost is ${C}`]), p("custom", C);
      }
      return $.value && I(C), b(y), { success: !0, totalPrice: C };
    },
    resetPricing: f
  };
}
function mn(n) {
  const {
    stockOptions: s,
    config: t,
    initialState: l,
    numberFormat: f = G("decimal")
  } = n, p = G(l?.activeFilters || []), c = G(l?.searchQuery || ""), v = G(l?.sortBy || t?.value?.defaultSort.field || "cost"), b = G(l?.sortOrder || t?.value?.defaultSort.order || "asc"), F = G(l?.displayMode || t?.value?.displayMode || "grid"), y = G(l?.currentPage || 1), L = G(l?.selectedStockIds || []);
  function $(u, S) {
    return S.split(".").reduce((A, T) => A?.[T], u);
  }
  function I(u, S) {
    return typeof u == "object" && u !== null && typeof S == "object" && S !== null && "hex" in u && "hex" in S ? u.hex === S.hex : u === S;
  }
  function k(u, S) {
    const A = $(u, S.field);
    switch (S.type) {
      case "select":
        return I(A, S.value);
      case "multiselect":
        return Array.isArray(S.value) ? S.value.some((T) => I(A, T)) : I(A, S.value);
      case "range":
        if (S.value && typeof S.value == "object") {
          const { min: T, max: U } = S.value, H = Number(A);
          return !(isNaN(H) || T !== void 0 && H < T || U !== void 0 && H > U);
        }
        return !1;
      case "boolean":
        return !!A == !!S.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function C(u, S) {
    if (!S.trim()) return !0;
    const A = S.toLowerCase();
    return [
      u.name,
      u.material,
      u.description,
      u.category,
      ...u.tags || []
    ].some((U) => U && String(U).toLowerCase().includes(A));
  }
  const P = O(() => {
    let u = [...s.value];
    c.value && (u = u.filter((S) => C(S, c.value)));
    for (const S of p.value)
      u = u.filter((A) => k(A, S));
    return u;
  }), j = O(() => {
    const u = [...P.value];
    return u.sort((S, A) => {
      const T = $(S, v.value), U = $(A, v.value);
      if (T == null && U == null) return 0;
      if (T == null) return 1;
      if (U == null) return -1;
      let H = 0;
      return typeof T == "string" && typeof U == "string" ? H = T.localeCompare(U) : typeof T == "number" && typeof U == "number" ? H = T - U : H = String(T).localeCompare(String(U)), b.value === "asc" ? H : -H;
    }), u;
  }), M = O(() => {
    const u = t?.value?.itemsPerPage || 20, S = (y.value - 1) * u, A = S + u;
    return j.value.slice(S, A);
  }), W = O(() => {
    const u = t?.value?.itemsPerPage || 20;
    return Math.ceil(j.value.length / u);
  });
  function E(u, S, A = "select") {
    K(u), p.value.push({ field: u, value: S, type: A }), y.value = 1;
  }
  function K(u) {
    p.value = p.value.filter((S) => S.field !== u);
  }
  function J() {
    p.value = [], c.value = "", y.value = 1;
  }
  function _(u, S) {
    v.value = u, S ? b.value = S : b.value = b.value === "asc" ? "desc" : "asc", y.value = 1;
  }
  function D(u) {
    c.value = u, y.value = 1;
  }
  function R(u) {
    u >= 1 && u <= W.value && (y.value = u);
  }
  function Z(u) {
    const S = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`, A = L.value.indexOf(S);
    return A === -1 ? t?.value?.maxSelection && L.value.length >= t.value.maxSelection ? !1 : (L.value.push(S), !0) : (L.value.splice(A, 1), !1);
  }
  function ne(u) {
    const S = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`;
    return L.value.includes(S);
  }
  const ae = O(() => s.value.filter((u) => ne(u)));
  function ie() {
    L.value = [];
  }
  function Q(u) {
    const {
      ...S
    } = u;
    return new De(S, f.value);
  }
  function ue(u) {
    if (u === "color") {
      const A = /* @__PURE__ */ new Map();
      return s.value.forEach((T) => {
        const U = $(T, u);
        U != null && (typeof U == "object" && "hex" in U ? A.has(U.hex) || A.set(U.hex, U) : typeof U == "string" && (A.has(U) || A.set(U, U)));
      }), Array.from(A.values()).sort((T, U) => {
        const H = typeof T == "object" && "name" in T ? T.name : String(T), be = typeof U == "object" && "name" in U ? U.name : String(U);
        return H.localeCompare(be);
      });
    }
    const S = /* @__PURE__ */ new Set();
    return s.value.forEach((A) => {
      const T = $(A, u);
      T != null && S.add(T);
    }), Array.from(S).sort();
  }
  function le(u) {
    const S = s.value.map((A) => Number($(A, u))).filter((A) => !isNaN(A));
    return S.length === 0 ? null : {
      min: Math.min(...S),
      max: Math.max(...S)
    };
  }
  const de = O(() => ({
    activeFilters: p.value,
    searchQuery: c.value,
    sortBy: v.value,
    sortOrder: b.value,
    displayMode: F.value,
    currentPage: y.value,
    selectedStockIds: L.value
  }));
  return {
    // State
    activeFilters: p,
    searchQuery: c,
    sortBy: v,
    sortOrder: b,
    displayMode: F,
    currentPage: y,
    selectedStockIds: L,
    // Computed
    filteredStock: P,
    sortedStock: j,
    paginatedStock: M,
    selectedStock: ae,
    totalPages: W,
    currentState: de,
    // Methods
    applyFilter: E,
    removeFilter: K,
    clearFilters: J,
    updateSort: _,
    updateSearch: D,
    goToPage: R,
    toggleStockSelection: Z,
    isStockSelected: ne,
    clearSelection: ie,
    createInputStock: Q,
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
