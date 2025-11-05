import { u as fs, g as ps, S as ds, r as gs, s as hs, a as vs, b as _t, C as Ke, c as qt, d as at, e as Bt, f as Gt, h as Zt, i as Ut, j as zt, k as ms, l as Ss, t as ve, m as pe, n as Nt, o as ys, p as bs, q as ws, v as rt, w as ks, x as Je, y as Ls, z as St, I as ke, A as Pt, B as it, D as Re, E as xs, F as ot, G as et, H as lt, J as ut, K as Os, L as Is, M as ct, N as me, O as Cs, P as Et, Q as As } from "./components-BBIVWlbL.js";
import "./vendor-i18n-BuJwRgtG.js";
import { h as C, e as G, K as Te, X as ye, Y as oe, j as tt, k as Fs } from "./vendor-vue-V1I1Po2P.js";
import { j as We, p as _s, W as Ns, o as ft, b as Qe, a as Ps, c as Es, n as pt, s as dt, _ as Vs, u as Ts, k as Vt, m as He, q as $s, X as Ms, Y as Tt, $ as js, f as Xe, t as gt, v as ht, w as vt, a0 as Ds } from "./vendor-4AnxBRif.js";
let Ye = null;
function qs() {
  const n = G(null), s = G(null), e = G(null), l = Te([]), f = Te([]), p = Te([]), c = Te([]), v = G([]), b = G(null), F = Te([]), y = G(null), L = G(null);
  return {
    // All state
    jobId: n,
    saw: s,
    activeStockAutoId: e,
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
      activeStockAutoId: e,
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
  if (Ye) return Ye;
  const n = qs(), s = C(() => n.activeStockAutoId.value ? ie(n.activeStockAutoId.value) : []), e = C(() => !n.activeStockAutoId.value || !n.stockList.value?.length ? null : ae(n.activeStockAutoId.value)), l = C(() => !e.value || !n.cutList.value?.length ? [] : ue(e.value.autoId)), f = C(() => !e.value || !n.segmentList.value?.length ? [] : Q(n.activeStockAutoId.value)), p = C(() => n.stockList.value?.length ? le(n.stockList.value) : []), c = C(() => n.shapeList.value.filter((u) => u.added)), v = C(() => n.shapeList.value?.length ? n.shapeList.value.filter((u) => !u.added) : []), b = C(() => n.shapeList.value?.length ? fs(n.shapeList.value) : []), F = C(() => n.shapeList.value?.length ? n.shapeList.value.filter((u) => !u.duplicate) : []), y = C(() => F.value.filter((u) => u.added)), L = C(() => n.stockList.value?.length ? n.stockList.value.filter((u) => u.used && !u.duplicate) : []), E = C(() => L.value.filter((u) => u.used)), I = C(() => n.cutList.value?.length ? l.value.reduce((u, S) => u + S.area, 0) : 0), k = C(() => !n.stockList.value?.length || !e.value ? 0 : e.value ? e.value.area : 0), O = C(() => !n.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((u, S) => u + S.area, 0) : 0), _ = C(() => !n.cutList.value?.length || !e.value ? null : e.value.cutType), j = C(() => n.stockList.value?.length ? n.stockList.value.filter((S) => S.used && !S.isStacked) : []), M = C(() => n.stockList.value?.length ? ps(e.value, n.stockList.value) : 0), W = C(() => {
    if (!n.stockList.value?.length) return 0;
    let u = k.value ? (I.value + O.value) / k.value : null;
    return u > 1 && (u = 1), u;
  }), T = () => {
    n.saw.value = null, n.shapeList.value.length = 0, n.stockList.value.length = 0, n.cutList.value.length = 0, n.segmentList.value.length = 0, n.offcuts.value.length = 0, n.unusableShapes.value.length = 0, n.currentCutIndex.value = null;
  }, K = () => {
    n.saw.value = null, n.activeStockAutoId.value = null, n.activeShape.value = null, n.metadata.value = null, n.shapeList.value = [], n.stockList.value = [], n.cutList.value = [], n.segmentList.value = [], n.offcuts.value = [], n.currentCutIndex.value = null, n.unusableShapes.value = [];
  }, R = () => {
    const u = new vs({
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
    const A = new _t({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      added: !0
    });
    A.addToStock(u);
    const $ = [
      new Ke({ x: 0, y: 0, l: 500, vertical: !0, stock: u }),
      new Ke({ x: 500, y: 0, l: 500, vertical: !1, stock: u }),
      new Ke({ x: 500, y: 500, l: 400, vertical: !0, stock: u }),
      new Ke({ x: 900, y: 500, l: 400, vertical: !1, stock: u })
    ];
    n.stockList.value = [u], n.shapeList.value = [S, A], n.cutList.value = $, n.activeStockAutoId.value = u.autoId;
  }, N = (u, S) => {
    u in this && this[u]?.sort(hs[S]);
  }, D = (u) => {
    ye(u);
  }, J = () => {
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
      n.stockList.value = S.stockList, n.shapeList.value = S.shapeList, n.cutList.value = S.cutList, n.segmentList.value = S.segmentList, n.offcuts.value = S.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach(($) => ye(n[$])), n.activeStockAutoId.value = le(n.stockList.value)?.[0]?.autoId || null;
    } catch (S) {
      console.error("Error updating from result", S);
    }
  }, ae = (u) => n.stockList.value?.length ? n.stockList.value.find((S) => S.autoId === u) : null, ie = (u) => n.shapeList.value?.length ? n.shapeList.value.filter((S) => S.added && S?.stock?.autoId === u) : [], Q = (u) => n.segmentList.value?.length ? n.segmentList.value.filter((A) => A?.stock?.autoId === u) : [], ue = (u) => {
    const S = n?.cutList?.value;
    return !S && !S.length ? [] : S.filter((A) => A?.stock?.autoId === u).sort((A, $) => A?.guillotineState?.order - $?.guillotineState?.order);
  }, le = (u) => u?.length ? u.filter((S) => S.used === !0) : [], de = (u) => {
    n.activeStockAutoId.value !== u && (n.activeShape.value = null, n.activeStockAutoId.value = u);
  };
  return Ye = {
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
    uniqueUsedStock: E,
    activeStock: e,
    activeCuts: l,
    activeCutsArea: I,
    activeCutType: _,
    usedStock: p,
    stackedStock: j,
    activeStockArea: k,
    activeShapeArea: O,
    activeStockStackCount: M,
    activeTotalArea: W,
    activeSegments: f,
    // methods
    reset: T,
    clear: K,
    createTestData: R,
    sortItems: N,
    update: D,
    updateShapes: J,
    updateStock: Z,
    updateFromResult: ne,
    getStock: ae,
    getShapes: ie,
    getSegments: Q,
    getCuts: ue,
    setActiveStockAutoId: de
  }, Ye;
}
const fe = G(null);
let Bs = 0;
function ln(n) {
  const s = n || `action-menu-${++Bs}-${Date.now()}`, e = C({
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
    e.value = !e.value;
  }, v = C(() => fe.value !== null), b = C(() => fe.value), F = C(() => fe.value === s);
  return {
    // Instance-specific
    id: oe(G(s)),
    isOpen: e,
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
}, $t = G(Gs()), Us = (n, s) => {
  $t.value[n] = s, Ls(n, s), Zs($t.value);
}, Le = (n) => Ss(n), zs = (n, s) => {
  const e = Le(n);
  if (!e || !e.options || e.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const l = e.options[0], f = Array.isArray(l) && typeof l[0] == "string" ? l : [];
  if (f.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const p = (b) => e.options.length > 1 ? b.includes("|") ? e.pricing && Object.keys(e.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(e.pricing, b) ? !0 : Object.keys(e.pricing).some((L) => L.startsWith(b + "|") || L === b) : b.split("|").every((y, L) => {
    if (L >= e.options.length) return !1;
    const E = e.options[L];
    return Array.isArray(E) && typeof E[0] == "string" && E.includes(y);
  }) : e.options.some((F) => Array.isArray(F) && typeof F[0] == "string" && F.includes(b)) : f.includes(b), c = /* @__PURE__ */ new Set();
  let v = 0;
  return s.forEach((b) => {
    if (!b.extras?.[n]) return;
    const F = b.extras[n].sides || {};
    Object.entries(F).forEach(([L, E]) => {
      typeof E == "string" && E && !p(E) && (c.add(E), F[L] = "", v++);
    });
    const y = b.extras[n].faces || {};
    Object.entries(y).forEach(([L, E]) => {
      typeof E == "string" && E && !p(E) && (c.add(E), y[L] = "", v++);
    });
  }), {
    cleanedCount: v,
    invalidOptions: Array.from(c)
  };
}, un = (n) => {
  const {
    shape: s,
    extraType: e,
    allOptions: l,
    labels: f,
    userFriendlyFieldMap: p,
    allowCustomNames: c,
    customNames: v = G([]),
    enablePricing: b = !1,
    pricing: F,
    locations: y = G([]),
    locationGroups: L = G([]),
    getAvailablePricingOptions: E,
    getPrice: I,
    findExtrasPrice: k,
    formatPrice: O
  } = n, _ = () => {
    const t = Le(e), a = t?.options || l, d = t?.labels || f;
    ms(s.value, e, a, d, v.value);
  };
  _(), tt(s, (t) => {
    if (t) {
      const d = t.extras?.[e], g = d?.sides || {}, h = d?.options?.sides || {};
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
      x && _();
    }
  }, { deep: !0, immediate: !1 });
  const j = C(() => Le(e)), M = C(() => {
    const a = j.value?.options || l;
    if (a.length > 1)
      return "multiple";
    const g = (a[0] || []).filter((q) => typeof q == "string"), h = (v.value || []).filter((q) => typeof q == "string"), V = Array.from(/* @__PURE__ */ new Set([...g, ...h])).length;
    return V === 0 ? "boolean" : V === 1 ? "single" : "multiple";
  }), W = C(() => qt(e)), T = C(() => y.value && y.value.length > 0 ? y.value.filter((t) => t !== "all" && t !== "faces" && t !== "sides") : W.value), K = C(() => T.value.filter((t) => at(t) === "face")), R = C(() => T.value.filter((t) => at(t) === "side")), N = C(() => Bt(e)), D = C(() => Gt(e)), J = C(() => Zt(e)), Z = () => j.value?.options && j.value.options.length > 1, ne = (t, a, d) => {
    const { singleOption: g = Ce(), operation: h } = d;
    switch (a) {
      case "boolean":
        return !!t;
      case "single":
        return g ? h === "process" || h === "set" ? t && g ? g : "" : t === g ? g : "" : !!t;
      case "multiple":
        return t || "";
      default:
        return t;
    }
  }, ae = (t, a, d) => ne(a, d, { operation: "process" }), ie = (t, a, d, g, h, x) => {
    switch (x) {
      case "boolean":
        Je(t, a, d, g, !!h);
        break;
      case "single": {
        const V = Ce();
        Je(t, a, d, g, h ? V : "");
        break;
      }
      case "multiple":
        Je(t, a, d, g, h || "");
        break;
    }
  }, Q = (t, a, d = {}) => {
    const g = d.singleOption || Ce();
    return d.allowCustomNames ?? (g && [].includes(g.toString())), ne(t, a, {
      operation: "get",
      singleOption: g
    });
  }, ue = (t, a, d, g) => {
    switch (g) {
      case "boolean":
        return !!t;
      case "single": {
        const h = Ce();
        if (h) {
          const x = a.map((P) => pe(s.value, e, P, d)), V = x.every((P) => P === h || P === !0), q = x.every((P) => !P || P === "");
          return V ? h : q ? "" : null;
        }
        return !!t;
      }
      case "multiple":
        return typeof t == "string" ? t : t || "";
      default:
        return t;
    }
  }, le = (t, a, d, g = !1) => {
    if (g)
      t.forEach((h) => A(h, a, d));
    else {
      const h = f[a] || "", x = ae(h, d, M.value);
      t.forEach((V) => {
        ie(s.value, e, V, h, x, M.value);
      });
    }
  }, de = (t, a) => {
    if (Z()) {
      const d = t.map((V) => (pe(s.value, e, V, "value") || "").split("|")[a] || ""), g = d[0] || "";
      return d.every((V) => V === g) ? g : null;
    } else {
      const d = f[a] || "";
      if (M.value === "single") {
        const h = Ce();
        if (h) {
          const x = t.map((P) => pe(s.value, e, P, d)), V = x.every((P) => P === h || P === !0), q = x.every((P) => !P || P === "");
          return V ? h : q ? "" : null;
        }
      }
      const g = Nt(s.value, e, t, d, M.value);
      return M.value === "multiple" && g === !1 && t.every((x) => {
        const V = pe(s.value, e, x, d, M.value);
        return V === "" || V === !1 || V === null || V === void 0;
      }) ? "" : g;
    }
  }, u = (t) => {
    const { location: a, locationType: d = "single", optionIndex: g, stateValue: h, isAggregate: x = !1, customLabel: V } = t, q = Ve(g), P = q.length > 1 ? "select" : "checkbox", X = x ? ge(g, V || d) : ge(g, a), Y = M.value === "multiple" && X.length === 1 && b;
    if (Y && X[0]) {
      if (x) {
        let he = [];
        d === "all" ? he = T.value : d === "faces" ? he = K.value : d === "sides" ? he = R.value : a && re(a) && (he = ce(a)), he.forEach((At) => {
          const Ft = $(At, g);
          (!Ft || Ft !== X[0]) && A(At, g, X[0]);
        });
      } else if (a) {
        const he = $(a, g);
        (!he || he !== X[0]) && A(a, g, X[0]);
      }
    }
    const se = M.value === "multiple" && (X.length === 0 || Y), ee = h !== void 0 ? h : a ? $(a, g) : null, Ae = P === "select" ? kt(a || d, g) : void 0, Fe = P === "checkbox" && q.length === 1 ? q[0] : void 0;
    let It, Ct;
    return P === "checkbox" && q.length === 1 && (It = q[0], Ct = ""), {
      inputType: P,
      // Alias for backward compatibility
      type: P,
      value: ee,
      options: Ae,
      disabled: se,
      label: Fe,
      indeterminate: ee === null && P === "checkbox",
      trueValue: It,
      falseValue: Ct
    };
  }, S = (t, a, d) => u({
    locationType: t,
    optionIndex: a,
    stateValue: d,
    isAggregate: !0
  }), A = (t, a, d) => {
    const g = f[a] || "";
    if (Z()) {
      const h = B(t, a);
      let x;
      if (h === "checkbox") {
        const X = Ve(a)[0];
        x = d ? X : "";
      } else
        x = d || "";
      const V = [];
      for (let P = 0; P < f.length; P++)
        if (P === a)
          V[P] = x;
        else {
          const Y = (pe(s.value, e, t, "value") || "").split("|");
          V[P] = Y[P] || "";
        }
      for (; V.length > 0 && V[V.length - 1] === ""; )
        V.pop();
      const q = V.join("|");
      Je(s.value, e, t, "value", q);
    } else
      ie(s.value, e, t, g, d, M.value);
  }, $ = (t, a) => {
    const d = f[a] || "";
    if (Z()) {
      const x = (pe(s.value, e, t, "value") || "").split("|")[a] || "";
      if (B(t, a) === "checkbox") {
        const P = Ve(a)[0];
        return x === P ? P : "";
      } else
        return x;
    } else {
      const g = pe(s.value, e, t, d, M.value);
      return Q(g, M.value);
    }
  }, U = (t, a) => {
    le(T.value, t, a, Z());
  }, H = (t) => {
    if (Z()) {
      const a = T.value.map((h) => (pe(s.value, e, h, "value") || "").split("|")[t] || ""), d = a[0] || "";
      return a.every((h) => h === d) ? d : null;
    } else {
      const a = f[t] || "", d = Nt(s.value, e, T.value, a, M.value);
      return ue(d, T.value, a, M.value);
    }
  }, be = () => {
    rt(s.value, e, T.value, M.value);
  }, xe = (t) => t === "faces" ? {
    locations: K.value,
    isSupported: N.value
  } : {
    locations: R.value,
    isSupported: D.value
  }, De = (t, a, d) => {
    const { locations: g, isSupported: h } = xe(t);
    h && le(g, a, d, Z());
  }, Ne = (t, a) => {
    const { locations: d, isSupported: g } = xe(t);
    return g ? de(d, a) : null;
  }, qe = (t) => {
    const { locations: a, isSupported: d } = xe(t);
    d && rt(s.value, e, a, M.value);
  }, Be = (t, a) => {
    const { isSupported: d } = xe(t);
    if (!d) return { type: "checkbox", value: !1 };
    const g = Ne(t, a);
    return S(t, a, g);
  }, Pe = (t, a) => {
    De("faces", t, a);
  }, Ee = (t, a) => {
    De("sides", t, a);
  }, Oe = (t) => Ne("faces", t), Ie = (t) => Ne("sides", t), Ge = () => {
    qe("faces");
  }, Ze = () => {
    qe("sides");
  }, we = (t) => L.value.find((a) => a.id === t), re = (t) => ["all", "faces", "sides"].includes(t) ? !1 : !t.includes("."), ce = (t) => {
    const a = we(t);
    return a ? a.locations.filter((d) => T.value.includes(d)) : [];
  }, st = (t, a, d) => {
    const g = ce(t);
    g.length !== 0 && (g.forEach((h) => A(h, a, d)), ye(s));
  }, i = (t, a) => {
    const d = ce(t);
    if (d.length === 0) return null;
    const g = de(d, a);
    return !Z() && (g === null || g === !1 || g === "") ? "" : g;
  }, o = (t) => {
    const a = ce(t);
    a.length !== 0 && rt(s.value, e, a, M.value);
  }, r = (t, a) => {
    const d = i(t, a), g = we(t);
    return u({
      location: t,
      optionIndex: a,
      stateValue: d,
      isAggregate: !0,
      customLabel: g?.label
    });
  }, m = (t) => {
    ks(s.value, e, t, M.value);
  }, w = (t) => t === "all" ? T.value.some((a) => !!$(a, 0)) : t === "faces" && N.value ? K.value.some((a) => !!$(a, 0)) : t === "sides" && D.value ? R.value.some((a) => !!$(a, 0)) : re(t) ? ce(t).some((d) => !!$(d, 0)) : T.value.includes(t) ? !!$(t, 0) : !1, z = (t) => {
    if (t === "all") return ve("general.all");
    if (t === "faces") return `${ve("general.all")} ${ve("machining.face_other")}`;
    if (t === "sides") return `${ve("general.all")} ${ve("woodwork.edge_other")}`;
    if (re(t)) {
      const g = we(t);
      if (g) return g.label;
    }
    if (t.startsWith("face.")) {
      const h = `faces.${t.replace("face.", "")}`;
      return ve(h);
    }
    if (t.startsWith("side.")) {
      const h = `sides.${t.replace("side.", "")}`;
      return ve(h);
    }
    const a = `fields.${t}`, d = ve(a);
    return d !== a ? d : p?.[t] ? p[t] : t;
  }, B = (t, a) => M.value === "boolean" ? "checkbox" : Ve(a).length > 1 ? "select" : "checkbox", te = (t, a) => u({
    location: t,
    optionIndex: a,
    isAggregate: !1
  }), yt = (t) => {
    const a = H(t);
    return S("all", t, a);
  }, bt = (t) => Be("faces", t), wt = (t) => Be("sides", t), Wt = (t, a) => t === "all" ? yt(a) : t === "faces" ? bt(a) : t === "sides" ? wt(a) : re(t) ? r(t, a) : te(t, a), ge = (t, a) => {
    const h = (Le(e)?.options || l)[t];
    if (!h || h[0] === !0)
      return [];
    const x = a && typeof a == "string" && (a.startsWith("face.") || a.startsWith("side.")), V = a && typeof a == "string" && re(a), q = !x && (a === "all" || a === "faces" || a === "sides" || V);
    if (Array.isArray(h) && h.length === 1 && typeof h[0] == "string" && !(b && E && (x || q) && t > 0))
      return h;
    if (b && E && x) {
      const Y = [];
      if (t > 0)
        for (let se = 0; se < t; se++) {
          const ee = $(a, se);
          if (typeof ee == "string" && ee)
            Y.push(ee);
          else if (typeof ee == "boolean")
            Y.push(ee);
          else {
            const Ae = Le(e), Fe = pe(s.value, e, a, "value");
            return Fe && Fe.includes("|") && Ae?.options[t] ? Ae.options[t] : [];
          }
        }
      return E(F, Y, t);
    }
    if (b && E && q) {
      const Y = [];
      if (t > 0)
        for (let se = 0; se < t; se++) {
          let ee;
          if (a === "all" ? ee = H(se) : a === "faces" ? ee = Oe(se) : a === "sides" ? ee = Ie(se) : V && typeof a == "string" && (ee = i(a, se)), typeof ee == "string" && ee)
            Y.push(ee);
          else if (typeof ee == "boolean")
            Y.push(ee);
          else
            return [];
        }
      return E(F, Y, t);
    }
    const P = h, X = c ? (v.value || []).filter((Y) => typeof Y == "string") : [];
    return [.../* @__PURE__ */ new Set([...P, ...X])];
  }, kt = (t, a) => {
    const g = Le(e)?.options[a] || [], h = c && v.value ? v.value.filter((X) => typeof X == "string") : [], x = [.../* @__PURE__ */ new Set([...g, ...h])], V = ge(a, t), q = new Set(V);
    return x.map((X) => ({
      value: X,
      label: X,
      disabled: !q.has(X)
    }));
  }, Ce = () => {
    const t = ge(0);
    return t.length === 1 ? t[0] : void 0;
  }, Qt = (t) => {
    const a = ge(t);
    return a.length === 1 ? a[0] : void 0;
  }, Ve = (t) => {
    const a = Le(e);
    let d = [];
    if (a?.options && a.options[t] && Array.isArray(a.options[t])) {
      const h = a.options[t];
      Array.isArray(h) && h.every((x) => typeof x == "string") && (d = h);
    }
    const g = c && v.value ? v.value.filter((h) => typeof h == "string") : [];
    return [.../* @__PURE__ */ new Set([...d, ...g])];
  }, Ht = (t, a = 0) => {
    if (t === "all" || t === "faces" || t === "sides")
      return "";
    if (re(t)) {
      const g = we(t);
      return g?.price !== void 0 && i(t, a) ? O ? O(g.price) : g.price.toString() : "";
    }
    if (!b || !I)
      return "";
    if (!T.value.includes(t))
      return "N/A";
    const d = I(s.value, e, t, k);
    return d ? O ? O(d) : d.toString() : "N/A";
  }, Xt = (t) => !b || !I ? !1 : I(s.value, e, t, k), Ue = C(() => T.value.length > 1), ze = C(() => W.value.length > 1), Lt = () => {
    if (y.value && y.value.length > 0) {
      const g = [];
      return L.value && L.value.length > 0 && L.value.forEach((h) => g.push(h.id)), g.push(...y.value), g;
    }
    const t = [];
    L.value && L.value.length > 0 && L.value.forEach((g) => t.push(g.id)), Ue.value && t.push("all"), ze.value && (Ut(e).length > 0 && t.push("faces"), zt(e).length > 0 && t.push("sides"));
    const a = /* @__PURE__ */ new Set();
    L.value && L.value.length > 0 && L.value.forEach((g) => {
      g.hideIndividualLocations && g.locations.forEach((h) => a.add(h));
    });
    const d = W.value.filter((g) => !a.has(g));
    return t.push(...d), t;
  }, Yt = () => M.value === "multiple", es = () => {
    const t = 1 + l.length, a = M.value === "multiple", d = b, g = t + (a ? 1 : 0) + (d ? 1 : 0);
    return {
      columns: g,
      style: `repeat(${g}, max-content)`
    };
  }, nt = (t) => t === "all" ? "all" : t === "faces" ? "faces" : t === "sides" ? "sides" : "individual", xt = (t) => at(t), ts = (t) => {
    if (t === "all")
      return Ue.value;
    if (re(t))
      return we(t) ? ce(t).length > 0 : !1;
    if (y.value && y.value.length > 0)
      return y.value.includes(t);
    const a = nt(t);
    return a === "all" ? Ue.value : a === "faces" || a === "sides" ? a === "faces" && N.value && K.value.length > 0 || a === "sides" && D.value && R.value.length > 0 ? ze.value : !1 : W.value.includes(t);
  }, ss = (t) => {
    ws(t, e, v);
  }, ns = (t) => {
    bs([s.value], e, t, f);
  }, as = (t) => {
    ys([s.value], e, t);
  }, rs = (t, a, d) => {
    if (t === "all")
      U(a, d);
    else if (t === "faces")
      Pe(a, d);
    else if (t === "sides")
      Ee(a, d);
    else if (re(t)) {
      let h = d;
      if (!Z() && typeof d == "boolean") {
        const x = Ve(a);
        x.length === 1 && (h = d ? x[0] : "");
      }
      if (!Z() && h) {
        const x = ce(t), V = new Set(x);
        L.value && (L.value.forEach((q) => {
          q.id !== t && ce(q.id).filter((Y) => !V.has(Y)).forEach((Y) => {
            A(Y, a, "");
          });
        }), ye(s));
      }
      st(t, a, h);
    } else
      A(t, a, d), Z() || ye(s);
    const g = f.length;
    for (let h = a + 1; h < g; h++) {
      console.group(`Checking downstream option at index: ${h}`);
      let x;
      if (t === "all" ? x = H(h) : t === "faces" ? x = Oe(h) : t === "sides" ? x = Ie(h) : re(t) ? x = i(t, h) : x = $(t, h), !x) {
        console.groupEnd();
        continue;
      }
      const V = ge(h, t);
      let q = !1;
      if (typeof x == "string" ? q = V.includes(x) : typeof x == "boolean" && x === !0 && (q = V.length > 0), !q) {
        const P = B(t, h) === "checkbox" ? !1 : "";
        t === "all" ? U(h, P) : t === "faces" ? Pe(h, P) : t === "sides" ? Ee(h, P) : re(t) ? st(t, h, P) : A(t, h, P);
      }
      console.groupEnd();
    }
  }, is = (t, a = !0) => a && !confirm(`Delete ${e} for ${z(t)}?`) ? !1 : (t === "all" ? be() : t === "faces" ? Ge() : t === "sides" ? Ze() : re(t) ? o(t) : m(t), !0), os = () => {
    const t = s.value[e], a = s.value[`${e}Options`];
    return !(!t || typeof t != "object" || !a || typeof a != "object" || N.value && (!("faces" in t) || !("faces" in a)) || D.value && (!("sides" in t) || !("sides" in a)));
  }, ls = () => {
    const t = [], a = s.value[e], d = s.value[`${e}Options`];
    return !a || typeof a != "object" ? t.push(`Missing or invalid ${e} property in shape`) : (N.value && !("faces" in a) && t.push(`Missing faces property in ${e}`), D.value && !("sides" in a) && t.push(`Missing sides property in ${e}`)), !d || typeof d != "object" ? t.push(`Missing or invalid ${e}Options property in shape`) : (N.value && !("faces" in d) && t.push(`Missing faces property in ${e}Options`), D.value && !("sides" in d) && t.push(`Missing sides property in ${e}Options`)), t;
  }, Ot = (t) => {
    const a = [];
    if (!t || !Object.keys(t).length)
      return { valid: !0, errors: a };
    const d = Object.keys(t), g = Math.max(...d.map((h) => h.split("|").length));
    if (g <= 1)
      return { valid: !0, errors: a };
    for (const h of T.value) {
      const x = Z() ? pe(s.value, e, h, "value") || "" : $(h, 0);
      if (!x || typeof x != "string" || x === "")
        continue;
      const V = x.includes("|") ? x.split("|") : [x], q = V.filter((P) => P.trim() !== "").length;
      if (q > 0 && q < g) {
        const P = V.join("|"), X = d.some((se) => se.startsWith(P + "|")), Y = d.includes(P);
        if (X && !Y) {
          const se = g - q, ee = V.filter((Fe) => Fe.trim() !== "").join(", "), Ae = z(h);
          a.push(`${e} selection incomplete for ${Ae}. Selected: "${ee}" but ${se} more level${se > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: a.length === 0, errors: a };
  }, us = (t) => Ot(t).errors, cs = C(() => Lt().map((t) => ({
    location: t,
    label: z(t),
    isAggregate: ["all", "faces", "sides"].includes(t) || re(t)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: M,
    // Raw computed ref (not readonly wrapped)
    allLocations: oe(T),
    faceLocations: oe(K),
    sideLocations: oe(R),
    shouldShowAll: Ue,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: oe(ze),
    renderLocations: oe(cs),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: oe(N),
    supportsSides: oe(D),
    supportsBoth: oe(J),
    // Core operations
    setValue: A,
    getValue: $,
    setAll: U,
    getAll: H,
    getAllState: H,
    // Alias for backward compatibility
    deleteSingle: m,
    deleteAll: be,
    canDelete: w,
    // Group-specific operations
    setAllFaces: Pe,
    setAllSides: Ee,
    getAllFaces: Oe,
    getAllSides: Ie,
    deleteAllFaces: Ge,
    deleteAllSides: Ze,
    // UI helpers
    getLocationLabel: z,
    getInputType: B,
    getInputConfig: te,
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
    getLocationGroup: nt,
    getLocationScope: xt,
    isLocationVisible: ts,
    // Options management
    getAvailableOptions: ge,
    getSingleAvailableOption: Ce,
    // Initialization & migration
    initialize: _,
    initializeExtra: _,
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
    validateIncompleteSelections: Ot,
    getIncompleteSelectionErrors: us,
    // Debug helpers (development only)
    getDebugInfo: (t, a) => ({
      mode: M.value,
      location: t,
      optionIndex: a,
      value: T.value.includes(t) ? $(t, a) : "N/A",
      inputType: B(t, a),
      canDelete: w(t),
      allState: H(a),
      availableOptions: ge(a),
      locationGroup: nt(t),
      config: j.value,
      supportsFaces: N.value,
      supportsSides: D.value,
      supportsBoth: J.value,
      ...N.value && {
        allFacesState: Oe(a)
      },
      ...D.value && {
        allSidesState: Ie(a)
      },
      ...T.value.includes(t) && {
        locationScope: xt(t)
      }
    })
  };
}, cn = (n) => {
  const {
    customNames: s,
    usedNames: e,
    allowCustomNames: l,
    getSelectOptions: f,
    onCustomNameAdded: p,
    onCustomNameDeleted: c
  } = n, v = G(""), b = C(() => l && v.value?.trim()), F = C(() => !l || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((k) => typeof k == "string").every((k) => e.value.includes(k))), y = C(() => {
    const I = [];
    if (l && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return I;
      const O = [...s.value.filter((_) => typeof _ == "string")].sort();
      I.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), O.forEach((_) => {
        (e.value?.includes(_) ?? !1) || I.push({
          id: `delete-${_}`,
          label: `Delete "${_}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return I;
  }), L = () => {
    const I = v.value?.trim();
    if (!I) return;
    if (f("", 0).map((O) => O.value).includes(I)) {
      v.value = "";
      return;
    }
    p(I), v.value = "";
  }, E = (I) => {
    const k = I.item || I;
    if (k.id?.startsWith("delete-")) {
      const O = k.id.replace("delete-", "");
      if (e.value?.includes(O)) {
        console.warn(`Cannot delete ${n.extraType} type "${O}" - it is currently in use`);
        return;
      }
      c(O);
    }
  };
  return {
    newCustomName: v,
    canAddCustomName: oe(b),
    isActionMenuDisabled: oe(F),
    customNameActions: y,
    handleAddCustomName: L,
    handleCustomNameAction: E
  };
}, fn = (n) => {
  const {
    extraType: s,
    allOptions: e,
    labels: l,
    shapeIndex: f,
    enablePricing: p,
    mode: c,
    shouldShowAll: v,
    locations: b,
    locationGroups: F = G([]),
    getInputType: y,
    getInputConfig: L,
    getAllInputConfig: E,
    getInputConfigForLocation: I,
    canDelete: k,
    getLocationLabel: O,
    shouldShowDeleteButton: _
  } = n, j = C(() => {
    const N = [], D = /* @__PURE__ */ new Set();
    if (F.value && F.value.length > 0 && F.value.forEach((J) => {
      J.hideIndividualLocations && J.locations.forEach((Z) => D.add(Z));
    }), F.value && F.value.length > 0 && F.value.forEach((J) => N.push(J.id)), v.value && N.push("all"), b.value && b.value.length > 0)
      N.push(...b.value.filter((J) => J !== "all" && !D.has(J)));
    else {
      const J = qt(s), Z = Zt(s), ne = Bt(s), ae = Gt(s);
      Z && ne && ae && (Ut(s).length > 0 && N.push("faces"), zt(s).length > 0 && N.push("sides")), N.push(...J.filter((Q) => !D.has(Q)));
    }
    return Array.from(new Set(N));
  }), M = C(() => {
    const N = 1 + e.length, D = c.value === "multiple", J = p;
    return `repeat(${N + (D ? 1 : 0) + (J ? 1 : 0)}, max-content)`;
  }), W = (N, D) => `${s}-${N}-${l[D]}-${D}-${f}`, T = (N) => {
    const D = O(N);
    return `Delete ${s} for ${D}`;
  }, K = (N) => ({
    show: _(N),
    enabled: k(N),
    ariaLabel: T(N)
  }), R = (N, D) => y(N, D);
  return {
    renderLocations: oe(j),
    gridStyle: oe(M),
    getInputId: W,
    getDeleteAriaLabel: T,
    getInputConfigForLocation: I,
    getDeleteConfig: K,
    getInputTypeForLocation: R,
    // Re-export the passed functions for consistency
    getInputType: y,
    getInputConfig: L,
    getAllInputConfig: E,
    canDelete: k,
    shouldShowDeleteButton: _,
    getLocationLabel: O
  };
};
let je = null;
function Ks() {
  if (!(!St() || je))
    try {
      const n = require("~/store");
      if (n && n.applicationSettings) {
        je = n.applicationSettings;
        return;
      }
    } catch (n) {
      console.warn("Failed to load ApplicationSettings from store:", n.message);
    }
}
function $e(n, s, e = {}) {
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
  if (!St()) {
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
    return tt(p, (c) => {
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
  if (St()) {
    if (Ks(), !je)
      return console.warn("ApplicationSettings not available, using in-memory fallback"), G(s);
    const p = G((() => {
      try {
        const c = je.getString(n);
        if (c)
          return l.read(c);
      } catch (c) {
        console.error(`Failed to load ${n} from ApplicationSettings:`, c);
      }
      return s;
    })());
    return tt(p, (c) => {
      try {
        const v = l.write(c);
        je.setString(n, v);
      } catch (v) {
        console.error(`Failed to save ${n} to ApplicationSettings:`, v);
      }
    }, { deep: !0 }), p;
  }
  return console.warn(`No storage available for key '${n}', using in-memory fallback`), G(s);
}
function Jt(n) {
  const s = {}, e = n, l = e.code;
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
function Js(n) {
  return n.map((s) => {
    const e = s.path.length > 0 ? s.path.join(".") : "root", l = Jt(s), f = Is(s.message, l);
    return `[${e}] ${f}`;
  });
}
function Me(n, s) {
  const e = n.safeParse(s);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    errors: e.success ? void 0 : e.error.issues
  };
}
function Rs(n = {}) {
  const { numberFormat: s = "decimal" } = n, e = $e("inputs/inputShapes", [], {
    serializer: {
      read: (i) => {
        if (!i) {
          const m = "GlobalStore/inputShapes", w = localStorage.getItem(m);
          if (w)
            i = w, localStorage.removeItem(m);
          else return [];
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
  }), l = $e("inputs/inputStock", [], {
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
  }), f = $e("inputs/inputSaw", new ke({}), {
    serializer: {
      read: (i) => {
        if (!i) return new ke({});
        try {
          const o = JSON.parse(i);
          return E(o);
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
  }), p = $e("inputs/inputUserGroups", [], {
    serializer: {
      read: (i) => I(i ? JSON.parse(i) : []),
      write: (i) => JSON.stringify(i.map((o) => o.toData()))
    }
  }), c = $e("inputs/extrasOptions", {
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
        l1: r.y1 ?? r.l1,
        l2: r.y2 ?? r.l2,
        w1: r.x1 ?? r.w1,
        w2: r.x2 ?? r.w2
      });
    }
    if (o.extras?.finish?.sides && typeof o.extras.finish.sides == "object") {
      const r = o.extras.finish.sides;
      ("x1" in r || "x2" in r || "y1" in r || "y2" in r) && (o.extras.finish.sides = {
        l1: r.y1 ?? r.l1,
        l2: r.y2 ?? r.l2,
        w1: r.x1 ?? r.w1,
        w2: r.x2 ?? r.w2
      });
    }
    if (o.extras?.planing?.sides && typeof o.extras.planing.sides == "object") {
      const r = o.extras.planing.sides;
      ("x1" in r || "x2" in r || "y1" in r || "y2" in r) && (o.extras.planing.sides = {
        l1: r.y1 ?? r.l1,
        l2: r.y2 ?? r.l2,
        w1: r.x1 ?? r.w1,
        w2: r.x2 ?? r.w2
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
        const te = new ut(B, o);
        r.push(te);
      } catch (B) {
        console.error(`Failed to create InputShape at index ${m}:`, B);
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
        const te = new et(B, o);
        r.push(te);
      } catch (B) {
        console.error(`Failed to create InputStock at index ${m}:`, B);
      }
    }
    return r;
  }
  function E(i) {
    const o = F(i), r = Me(it, o);
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
    return Array.isArray(i) ? i.map((r) => new Os(r)).filter(Boolean) : [];
  }
  function k(i = {}) {
    try {
      const m = { ..._s(
        (z) => {
          if (typeof z != "object" || z === null) return z;
          const B = { ...z };
          for (const te in B)
            B[te] === null && delete B[te];
          return B;
        },
        lt
      ).parse(i), isNew: !0 }, w = new ut(m, s);
      return console.log(`[useInputs] Created new InputShape with isNew=${w.isNew}, autoId=${w.autoId}`), w.createId(e.value.length), e.value.push(w), w;
    } catch (o) {
      return o instanceof We && (console.error("Shape validation failed:", o.issues), Z("part", "Invalid shape data", o.issues)), null;
    }
  }
  function O(i = {}) {
    try {
      const r = { ...ot.parse(i), isNew: !0 }, m = new et(r, s);
      return m.createId(l.value.length), l.value.push(m), m;
    } catch (o) {
      return o instanceof We && (console.error("Stock validation failed:", o.issues), Z("stock", "Invalid stock data", o.issues)), null;
    }
  }
  function _(i) {
    try {
      const o = i.toData(), r = lt.parse(o);
      return new ut(r, s);
    } catch (o) {
      return o instanceof We && (console.error("Shape clone validation failed:", o.issues), Z("part", "Invalid shape data during cloning", o.issues)), null;
    }
  }
  function j(i) {
    try {
      const o = i.toData(), r = ot.parse(o);
      return new et(r, s);
    } catch (o) {
      return o instanceof We && (console.error("Stock clone validation failed:", o.issues), Z("stock", "Invalid stock data during cloning", o.issues)), null;
    }
  }
  function M(i, o) {
    const r = e.value.find((z) => z.autoId === i);
    if (!r) return !1;
    const m = { ...r.toData(), ...o }, w = Me(lt, m);
    if (w.success && w.data)
      return r.update(w.data), r.isNew ? console.log("[useInputs] Skipping validation for isNew shape in updateInputShape") : r.validate(), !0;
    {
      const z = w.errors ? Js(w.errors) : [];
      console.error("Shape update validation failed:", z);
      const B = w.errors?.[0];
      if (B) {
        const te = Jt(B);
        new Re({
          category: ["part"],
          message: B.message,
          // This is the translation key from Zod error map
          params: te,
          issues: v.value
        });
      } else
        Z("part", "Invalid shape update");
      return !1;
    }
  }
  function W(i, o) {
    const r = e.value.findIndex((w) => w.autoId === i);
    if (r === -1) return !1;
    const m = e.value[r];
    return m.validate({ fields: [o] }), m.issues.length === 0;
  }
  function T(i, o) {
    const r = l.value.find((z) => z.autoId === i);
    if (!r) return !1;
    const m = { ...r.toData(), ...o }, w = Me(ot, m);
    return w.success && w.data ? (r.update(w.data), r.isNew || J(), !0) : (console.error("Stock update validation failed:", w.errors), Z("stock", "Invalid stock update", w.errors), !1);
  }
  function K(i, o) {
    const r = l.value.findIndex((w) => w.autoId === i);
    if (r === -1) return !1;
    const m = l.value[r];
    return m.validate({ fields: [o] }), ye(l), m.issues.length === 0;
  }
  function R(i) {
    if (e.value.length === 1) return !1;
    const o = e.value.findIndex((r) => r.autoId === i);
    return o === -1 ? !1 : (e.value.splice(o, 1), !0);
  }
  function N(i) {
    if (l.value.length === 1) return !1;
    const o = l.value.findIndex((r) => r.autoId === i);
    return o === -1 ? !1 : (l.value.splice(o, 1), !0);
  }
  function D(i) {
    b.value = !0;
    const o = [];
    try {
      e.value.forEach((r) => r.issues = []);
      for (let r = 0; r < e.value.length; r++) {
        const m = e.value[r];
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
      e.value.some((r) => r.q > 0) || new Re({
        category: ["part"],
        message: "errors.validation.no_parts",
        issues: o
      });
    } finally {
      b.value = !1;
    }
    return v.value = o, o;
  }
  function J(i) {
    b.value = !0;
    const o = [];
    try {
      l.value.forEach((r) => r.issues = []);
      for (let r = 0; r < l.value.length; r++) {
        const w = l.value[r].validate({ saw: i }, r);
        o.push(...w);
      }
      l.value.some((r) => r.q > 0 || r.autoAdd) || new Re({
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
    new Re({
      category: [i],
      message: o,
      issues: v.value
    }), r && console.log("Validation details:", r);
  }
  function ne() {
    v.value = [], e.value.forEach((i) => i.issues = []), l.value.forEach((i) => i.issues = []);
  }
  function ae(i = {}) {
    const o = [], r = [], m = i.inputShapesOverride ?? e.value;
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
      const m = Me(it, F(i.saw));
      if (m.success && m.data) {
        const w = { ...m.data };
        i.saw?.autoId && (w.autoId = i.saw.autoId), f.value = new ke(w), r.saw.success = !0;
      } else
        console.error("Failed to parse input saw:", m.errors), r.saw.failed = !0;
    }
    if (i.shapes) {
      const m = y(i.shapes, o);
      r.shapes.success = m.length, r.shapes.failed = i.shapes.length - m.length, e.value = m;
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
      shapes: e.value.map((i) => i.toData()),
      stock: l.value.map((i) => i.toData()),
      inputUserGroups: p.value.map((i) => i.toData()),
      extrasOptions: c.value
    };
  }
  function le() {
    e.value = [], l.value = [], p.value = [], ne();
  }
  const de = C(() => e.value.reduce((i, o) => {
    const r = Number(o?.q);
    return r && r > 0 && !o?.multiEdit ? i + r : i;
  }, 0)), u = C(() => l.value.reduce((i, o) => {
    const r = Number(o?.q);
    return r && r > 0 && !o?.multiEdit ? i + r : i;
  }, 0)), S = C(() => e.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), A = C(() => l.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), $ = C(() => v.value.length > 0), U = () => [
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
  }, De = ne, Ne = (i = null) => {
    const o = i?.inputShapesOverride ?? e.value, r = D(i?.saw || void 0);
    return !r.length && o.length ? (xs(o, l.value, i?.saw || f.value), o.flatMap((w) => w.issues)) : r;
  }, qe = (i, o = "decimal") => {
    const r = i?.inputSaw, m = i?.inputShapes, w = i?.inputStock, z = i?.inputUserGroups;
    return Q({
      saw: r,
      shapes: m,
      stock: w,
      groups: z
    }, o);
  }, Be = (i, o = "decimal") => Q({ shapes: i }, o).shapes.success > 0, Pe = (i, o = "decimal") => Q({ stock: i }, o).stock.success > 0, Ee = (i, o, r, m) => {
    o[0]?.length > 0 && (c.value[i] || (c.value[i] = { options: [] }), c.value[i].options = [...o[0]]), r && m && o.length > 0 ? Us(i, {
      options: o,
      // Use all columns extracted from pricing
      labels: r,
      pricing: m
    }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: r, pricingData: m, pricingOptionsLength: o.length });
  }, Oe = () => {
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
    const o = i.material, r = i.t, m = l.value.filter((te) => te.material === o && te.t === r);
    if (!m.length)
      return "n";
    let w = !1, z = !1, B = !1;
    for (const te of m)
      te.grain === "l" ? (w = !0, z = !0) : te.grain === "w" && (w = !0, B = !0);
    return w ? z && B ? "y" : z ? "l" : B ? "w" : "n" : "n";
  }, Ge = (i) => {
    for (const o of e.value)
      Pt(o, i);
    for (const o of l.value)
      Pt(o, i);
  };
  function Ze(i) {
    const o = { ...f.value.toData(), ...i }, r = Me(it, o);
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
  return tt(e, (i) => {
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
      inputShapes: e,
      inputUserGroups: p,
      currentInputShape: H,
      selectedSaw: be,
      inputSaw: f
    },
    // State
    inputShapes: e,
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
    hasValidationIssues: $,
    // Actions
    addInputShape: k,
    addInputStock: O,
    cloneInputShape: _,
    cloneInputStock: j,
    updateInputShape: M,
    updateInputStock: T,
    updateInputSaw: Ze,
    removeInputShape: R,
    removeInputStock: N,
    reset: xe,
    resetInputSaw: we,
    clear: le,
    clearIssues: De,
    // Validation
    validateInputShapes: Ne,
    validateInputShapeField: W,
    validateInputStock: J,
    validateInputStockField: K,
    validateInputSaw: re,
    clearValidationIssues: ne,
    // Conversion
    createShapeList: ae,
    createStockList: ie,
    // Import/Export/Update
    importData: Q,
    exportData: ue,
    updateInputs: qe,
    importInputShapes: Be,
    importInputStock: Pe,
    // Additional functions
    getShapeGrainSummary: Ie,
    updateNumberFormat: Ge,
    getSpecialShapeFields: U,
    // Extras Options Management
    extrasOptions: c,
    setExtrasOptionsFromPricing: Ee,
    getCentralizedOptions: Oe
  };
}
let mt = null;
function pn(n = { numberFormat: "decimal" }) {
  return mt || (mt = Rs(n)), mt;
}
const Se = G([]), Ws = 6;
function dn() {
  const n = ({
    message: e,
    type: l = "info",
    additional: f = [],
    options: p = {},
    action: c = () => {
    }
  }) => {
    Array.isArray(f) || (console.warn("addNotice - additional must be an array"), f = []);
    const v = {
      id: crypto.randomUUID(),
      message: ct(e),
      additional: f.length > 5 ? f.slice(0, 5).map((F) => ct(F)).join("<br>") + "<br>..." : f.slice(0, 5).map((F) => ct(F)).join("<br>"),
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
  }, s = (e) => {
    Se.value.findIndex((f) => f.id === e) !== -1 && (Se.value = Se.value.filter((f) => f.id !== e));
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
const Hs = Ns(() => ft({
  // Material field
  material: me(
    dt().optional(),
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
    Ts([pt(), dt()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: Et({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Et({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: me(
    pt().int().positive().default(1),
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
  name: Cs({
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
    Qe().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: me(
    ft({
      enabled: Qe().default(!1),
      type: dt().optional(),
      sides: pt().optional()
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
    ft({
      enabled: Qe().default(!1),
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
    Qe().default(!1),
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
  generateFields(s, e) {
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
    return e?.sortByOrder ? l.sort((c, v) => (c.order || 999) - (v.order || 999)) : l;
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
    const p = f._def?.description, c = this.parseFieldDescription(p), v = {
      name: s,
      type: this.getFieldType(f),
      label: c.label || this.formatLabel(s),
      description: c.description,
      required: !this.isOptional(e),
      defaultValue: this.getDefaultValue(f),
      ...c
    };
    return this.extractTypeSpecificMetadata(v, f), v;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const e = this.unwrapField(s);
    if (e instanceof Vt) {
      const l = e._def?.options || [];
      for (const f of l)
        if (f instanceof He)
          return this.isIntegerNumber(f) ? "integer" : "number";
    }
    return e instanceof He ? this.isIntegerNumber(e) ? "integer" : "number" : e instanceof $s ? "string" : e instanceof Ms ? "boolean" : e instanceof Tt || e._def?.typeName === "ZodNativeEnum" ? "enum" : e instanceof js ? "array" : e instanceof Xe ? "object" : "string";
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
  extractTypeSpecificMetadata(s, e) {
    if (e instanceof Vt) {
      const l = e._def?.options || [];
      for (const f of l)
        if (f instanceof He) {
          this.extractNumberConstraints(s, f), s.type = "number";
          break;
        }
    } else e instanceof He && this.extractNumberConstraints(s, e);
    if (!s.options) {
      if (e instanceof Tt) {
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
        const [c, v] = p.split(":").map((b) => b.trim());
        c === "group" && (e.group = v), c === "order" && (e.order = parseInt(v)), c === "units" && (e.units = v), c === "hidden" && (e.hidden = v === "true"), c === "readonly" && (e.readonly = v === "true"), c === "placeholder" && (e.placeholder = v);
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
    if (s instanceof gt || s instanceof ht)
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
    return s._def?.typeName === "ZodEffects" ? this.isOptional(s._def?.schema) : s instanceof vt ? this.isOptional(s._def?.innerType) : !1;
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
    if (s instanceof gt || s instanceof ht)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof vt || l === "ZodDefault")
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
    if (s instanceof vt) {
      const e = s._def?.defaultValue;
      return typeof e == "function" ? e() : e;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const e = s._def?.in;
      if (e)
        return this.getDefaultValue(e);
    }
    if (s instanceof gt || s instanceof ht) {
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
    return s instanceof Xe;
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
    const e = this.unwrapField(s);
    if (e instanceof Xe) {
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
    if (!(l instanceof Xe))
      return e;
    const f = l.shape, p = ["l1", "l2", "w1", "w2"];
    for (const c of p)
      if (c in f) {
        const v = f[c], b = this.extractFieldMetadata(`trim.${c}`, v);
        b && (b.propertyPath = `trim.${c}`, b.name = `trim.${c}`, b.group || (b.group = "trim"), e.push(b));
      }
    return e;
  }
}
const jt = new Ys();
function en(n, s = {}) {
  const e = G([]), l = G([]), f = G(/* @__PURE__ */ new Map()), p = G(/* @__PURE__ */ new Map()), c = (I) => {
    let k = jt.generateFields(n);
    s.overrides && (k = k.map((_) => {
      const j = s.overrides[_.name];
      if (j) {
        const M = { ..._, ...j };
        return j.min === void 0 && _.min !== void 0 && (M.min = _.min), j.max === void 0 && _.max !== void 0 && (M.max = _.max), M;
      }
      return _;
    })), p.value.clear();
    for (const _ of k)
      p.value.set(_.name, _);
    const O = I || s.allowedFieldIds;
    if (O && O.length > 0) {
      const _ = O, j = /* @__PURE__ */ new Map();
      for (const W of k)
        j.set(W.name, W);
      const M = [];
      for (const W of _) {
        const T = j.get(W);
        T && M.push(T);
      }
      k = M;
    }
    s.filter && (k = k.filter(s.filter)), e.value = k, f.value.clear();
    for (const _ of k)
      f.value.set(_.name, _);
    s.grouped && (l.value = jt.groupFields(k));
  };
  c();
  const v = (I) => f.value.get(I), b = (I) => p.value.get(I), F = () => p.value, y = (I, k) => {
    const O = f.value.get(I);
    O && Object.assign(O, k);
  }, L = (I) => {
    const k = v(I);
    return !(!k || k.hidden);
  }, E = (I) => {
    const k = v(I);
    if (!k) return {};
    const O = {};
    return k.required && (O.required = !0), k.type === "number" && (k.min !== void 0 && (O.min = k.min), k.max !== void 0 && (O.max = k.max)), O;
  };
  return {
    fields: C(() => e.value),
    groups: C(() => l.value),
    fieldMap: C(() => f.value),
    allFieldsMap: C(() => p.value),
    getField: v,
    getFieldMetadata: b,
    getAllFieldMetadata: F,
    updateField: y,
    isFieldVisible: L,
    getFieldValidation: E,
    regenerateFields: c
  };
}
function gn(n) {
  const { stockType: s, materials: e = [], minDimension: l = 0 } = n, f = Xs(s), p = {
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
    ...n,
    overrides: { ...p, ...n.overrides }
  });
}
const { progress: _e, reset: Dt } = Qs();
function hn(n) {
  const s = "https://api.cutlistevo.com/";
  let e;
  const l = () => {
    e = Ds(s, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), e.on("connect", () => {
      n.refs?.connected && (n.refs.connected.value = !0), n.callbacks?.onConnect?.();
    }), e.on("connect_error", (c) => {
      n.refs?.connected && (n.refs.connected.value = !1), n.refs?.thinking && (n.refs.thinking.value = !1), n.callbacks?.onConnectError?.(c);
    }), e.on("connect_timeout", (c) => {
      n.refs?.connected && (n.refs.connected.value = !1), n.refs?.thinking && (n.refs.thinking.value = !1), n.callbacks?.onConnectError?.(c);
    }), e.on("result", (c) => {
      _e.value.complete = !0, n.callbacks?.onResult?.(c), e.disconnect();
    }), e.on("queued", () => {
      Dt(), _e.value.queued = !0;
    }), e.on("started", () => {
      _e.value.started = !0;
    }), e.on("progress", (c) => {
      c?.data?.message === "result" ? _e.value.resultCount++ : (_e.value.stockCount = c.data.stockCount, _e.value.shapeCount = c.data.shapeCount);
    }), e.on("user", (c) => {
      n.callbacks?.onUser?.(c);
    }), e.on("error", (c) => {
      n.refs?.thinking && (n.refs.thinking.value = !1), Dt(), n.callbacks?.onError?.(c);
    });
  }, f = () => e?.disconnect(), p = () => e?.connect();
  return l(), {
    socket: e,
    connect: p,
    disconnect: f
  };
}
const Rt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], tn = (n) => Rt.includes(n);
function vn(n, s) {
  const e = (y) => {
    s.log?.(y);
  }, l = (y) => (s.error?.(y), { success: !1, error: y }), f = () => {
    for (const y of Rt) p(y, 0);
  }, p = (y, L) => {
    e(["setting price", y, L]);
    const { inputs: E, elements: I, setInputValue: k, formatPrice: O } = s;
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
    j?.hidden && E[j.hidden] && (e(["setting hidden price", j.hidden, L]), k(j.hidden, L)), j?.visible && I[j.visible] && (I[j.visible].innerText = O(L));
  }, c = (y) => {
    const { product: L, getCurrentVariationPrice: E, isQuantityPricing: I, enableAddToCart: k, setCartQuantity: O } = s;
    let _ = L?.price || E(!0) || 0;
    typeof _ == "string" && (_ = parseFloat(_));
    const j = n.unit_system === "imperial" ? "feet" : "meters", W = {
      full_stock: (K) => {
        if (e(["calculating cost by full sheet"]), !I()) {
          const R = K.metadata.totalStockCost;
          return p("stock", R), R;
        }
        return I() && O(K.metadata.totalUsedStock), 0;
      },
      part_area: (K) => {
        e([`calculating cost by part area in square ${j}`]);
        const R = n.unit_system === "imperial" ? 144 : 1e6, N = K.metadata.totalPartArea / R, D = N * _;
        p("partArea", D), e([`part area price in square ${j} is ${N} (part area) * ${_} (product price) = ${D}`]);
        let J = D;
        if (n?.enable_offcut_pricing && K?.offcuts) {
          const ne = K?.offcuts.reduce((ie, Q) => {
            const ue = Q.l >= Q.w ? Q.l : Q.w, le = Q.l >= Q.w ? Q.w : Q.l;
            return ue < n.offcut_min_length || le < n.offcut_min_width ? ie + ue * le : ie;
          }, 0) / R, ae = ne * _;
          p("offcutArea", ae), e([`calculated sellable offcut area as ${ne} square ${j}, with price ${ae}`]), J += ae;
        }
        if (e([`calculated total price as ${J}`]), I()) {
          const Z = J / _;
          return e([`setting cart quantity to ${Z}`]), O(Z, 2), 0;
        } else
          return J;
      },
      cut_length: (K) => {
        e([`calculating cost by cut length in  ${j}`]);
        const R = n.unit_system === "imperial" ? 12 : 1e3, N = K.metadata.totalCutLength / R;
        return O(N, 2), 0;
      },
      full_stock_plus_cut_length: (K) => {
        e(["calculating cost by full sheet plus cut length"]);
        let R = 0;
        const N = K.metadata.totalStockCost;
        p("stock", N), R = N, I() && O(K.metadata.totalUsedStock);
        const D = n.unit_system === "imperial" ? 12 : 1e3, Z = K.metadata.totalCutLength / D * n.cut_length_price;
        return p("cutLength", Z), R + Z;
      },
      full_stock_plus_num_parts: (K) => {
        e(["calculating cost by full sheet plus number of parts"]);
        let R = 0;
        const N = K.metadata.totalStockCost;
        p("stock", N), R = N, I() && O(K.metadata.totalUsedStock);
        const D = K.metadata.totalPartsProduced * n.per_part_price;
        return p("perPart", D), R + D;
      },
      roll_length: (K) => {
        e([`calculating cost by roll length in ${j}`]);
        const R = n.unit_system === "imperial" ? 12 : 1e3, N = K.stock.reduce((D, J) => D + J.analysis.rollLength / R * As({ v: J.cost }), 0);
        return p("rollLength", N), N;
      }
    }[n.pricing_strategy], T = W(y);
    return k(), T;
  }, v = (y) => {
    const {
      isExtraEnabled: L,
      isMachiningEnabled: E,
      isSurchargeEnabled: I,
      inputType: k,
      getTotalBandingPrice: O,
      getTotalFinishPrice: _,
      getTotalMachiningPrice: j,
      getInputValue: M
    } = s;
    let W = 0;
    if (L("banding") && y.metadata.bandingLengthByType) {
      const T = O(y.metadata.bandingLengthByType);
      p("banding", T), W += T;
    }
    if (L("finish") && y.metadata.finishAreaByType) {
      const T = _(y.metadata.finishAreaByType);
      p("finish", T), W += T;
    }
    if (k.value === "formula") {
      const T = parseFloat(M("smartcut-hardware-price"));
      isNaN(T) || (W += T);
    }
    if (E()) {
      const T = j(y);
      p("machining", T), W += T;
    }
    if (I() && n.surcharge) {
      const T = n.surcharge_type === "per_sheet" ? parseFloat(n.surcharge.toString()) * y.metadata.totalUsedStock : parseFloat(n.surcharge.toString());
      p("surcharge", T), e(["added surcharge", T]), W += T;
    }
    return W;
  }, b = (y) => {
    const { getInputValue: L, setInputValue: E } = s, I = {
      "smartcut-job-id": y.jobId,
      "smartcut-dimensions": y.parts.map((k) => `${k.l}x${k.w} [${k.q}]`).join(", "),
      "smartcut-total-cut-length": y.metadata.totalCutLength,
      "smartcut-part-area": y.metadata.totalPartArea,
      "smartcut-total-cuts": y.metadata.totalCuts,
      "smartcut-total-parts": y.metadata.totalPartsProduced,
      "smartcut-machining": y.metadata.hasMachining
    };
    if (Object.entries(I).forEach(([k, O]) => {
      L(k) !== void 0 && E(k, O);
    }), L("smartcut-stock-summary") !== void 0) {
      const k = y.stock.map((O) => `${O.l}x${O.w}${O.t ? "x" + O.t : ""} [${O.q}]`).join(", ");
      E("smartcut-stock-summary", k);
    }
  };
  return {
    calculatePrice: async (y) => {
      f();
      const { isQuantityPricing: L, selectedVariation: E, setVariationPrice: I, setCartQuantity: k } = s;
      if (!y?.jobId)
        return l("No job ID provided");
      L() || k(1);
      let O = c(y);
      const _ = v(y);
      if (O += _, L()) {
        const j = y.metadata.totalUsedStock, M = O / j;
        p("custom", M);
      } else {
        if (!y.metadata.totalStockCost)
          return l("Total stock cost not returned for a multiple size product");
        e([`total cost is ${O}`]), p("custom", O);
      }
      return E.value && I(O), b(y), { success: !0, totalPrice: O };
    },
    resetPricing: f
  };
}
function mn(n) {
  const {
    stockOptions: s,
    config: e,
    initialState: l,
    numberFormat: f = G("decimal")
  } = n, p = G(l?.activeFilters || []), c = G(l?.searchQuery || ""), v = G(l?.sortBy || e?.value?.defaultSort.field || "cost"), b = G(l?.sortOrder || e?.value?.defaultSort.order || "asc"), F = G(l?.displayMode || e?.value?.displayMode || "grid"), y = G(l?.currentPage || 1), L = G(l?.selectedStockIds || []);
  function E(u, S) {
    return S.split(".").reduce((A, $) => A?.[$], u);
  }
  function I(u, S) {
    return typeof u == "object" && u !== null && typeof S == "object" && S !== null && "hex" in u && "hex" in S ? u.hex === S.hex : u === S;
  }
  function k(u, S) {
    const A = E(u, S.field);
    switch (S.type) {
      case "select":
        return I(A, S.value);
      case "multiselect":
        return Array.isArray(S.value) ? S.value.some(($) => I(A, $)) : I(A, S.value);
      case "range":
        if (S.value && typeof S.value == "object") {
          const { min: $, max: U } = S.value, H = Number(A);
          return !(isNaN(H) || $ !== void 0 && H < $ || U !== void 0 && H > U);
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
  function O(u, S) {
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
  const _ = C(() => {
    let u = [...s.value];
    c.value && (u = u.filter((S) => O(S, c.value)));
    for (const S of p.value)
      u = u.filter((A) => k(A, S));
    return u;
  }), j = C(() => {
    const u = [..._.value];
    return u.sort((S, A) => {
      const $ = E(S, v.value), U = E(A, v.value);
      if ($ == null && U == null) return 0;
      if ($ == null) return 1;
      if (U == null) return -1;
      let H = 0;
      return typeof $ == "string" && typeof U == "string" ? H = $.localeCompare(U) : typeof $ == "number" && typeof U == "number" ? H = $ - U : H = String($).localeCompare(String(U)), b.value === "asc" ? H : -H;
    }), u;
  }), M = C(() => {
    const u = e?.value?.itemsPerPage || 20, S = (y.value - 1) * u, A = S + u;
    return j.value.slice(S, A);
  }), W = C(() => {
    const u = e?.value?.itemsPerPage || 20;
    return Math.ceil(j.value.length / u);
  });
  function T(u, S, A = "select") {
    K(u), p.value.push({ field: u, value: S, type: A }), y.value = 1;
  }
  function K(u) {
    p.value = p.value.filter((S) => S.field !== u);
  }
  function R() {
    p.value = [], c.value = "", y.value = 1;
  }
  function N(u, S) {
    v.value = u, S ? b.value = S : b.value = b.value === "asc" ? "desc" : "asc", y.value = 1;
  }
  function D(u) {
    c.value = u, y.value = 1;
  }
  function J(u) {
    u >= 1 && u <= W.value && (y.value = u);
  }
  function Z(u) {
    const S = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`, A = L.value.indexOf(S);
    return A === -1 ? e?.value?.maxSelection && L.value.length >= e.value.maxSelection ? !1 : (L.value.push(S), !0) : (L.value.splice(A, 1), !1);
  }
  function ne(u) {
    const S = u.id || `${u.material}-${u.l}-${u.w}-${u.t}`;
    return L.value.includes(S);
  }
  const ae = C(() => s.value.filter((u) => ne(u)));
  function ie() {
    L.value = [];
  }
  function Q(u) {
    const {
      ...S
    } = u;
    return new et(S, f.value);
  }
  function ue(u) {
    if (u === "color") {
      const A = /* @__PURE__ */ new Map();
      return s.value.forEach(($) => {
        const U = E($, u);
        U != null && (typeof U == "object" && "hex" in U ? A.has(U.hex) || A.set(U.hex, U) : typeof U == "string" && (A.has(U) || A.set(U, U)));
      }), Array.from(A.values()).sort(($, U) => {
        const H = typeof $ == "object" && "name" in $ ? $.name : String($), be = typeof U == "object" && "name" in U ? U.name : String(U);
        return H.localeCompare(be);
      });
    }
    const S = /* @__PURE__ */ new Set();
    return s.value.forEach((A) => {
      const $ = E(A, u);
      $ != null && S.add($);
    }), Array.from(S).sort();
  }
  function le(u) {
    const S = s.value.map((A) => Number(E(A, u))).filter((A) => !isNaN(A));
    return S.length === 0 ? null : {
      min: Math.min(...S),
      max: Math.max(...S)
    };
  }
  const de = C(() => ({
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
    filteredStock: _,
    sortedStock: j,
    paginatedStock: M,
    selectedStock: ae,
    totalPages: W,
    currentState: de,
    // Methods
    applyFilter: T,
    removeFilter: K,
    clearFilters: R,
    updateSort: N,
    updateSearch: D,
    goToPage: J,
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
