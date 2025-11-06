import { u as cs, g as fs, S as ps, r as ds, s as gs, a as Dt, b as at, e as qt, c as Bt, d as Gt, f as Zt, h as Ut, i as hs, j as vs, t as ve, k as de, l as Ft, m as ms, n as ys, o as Ss, p as it, q as bs, v as Re, w as ws, x as St, I as Le, y as _t, z as ot, A as We, B as ks, C as lt, D as tt, E as ut, F as ct, G as Ls, H as xs, J as ft, K as me, L as Os, M as Nt, N as Cs } from "./components-r1yHOfcv.js";
import "./vendor-i18n-BuJwRgtG.js";
import { h as A, e as U, K as je, X as be, Y as le, j as st, k as Is } from "./vendor-vue-V1I1Po2P.js";
import { j as Qe, p as As, W as Fs, o as pt, b as He, a as _s, c as Ns, n as dt, s as gt, _ as Ps, u as Es, k as Pt, m as Ye, q as Vs, X as Ts, Y as Et, $ as $s, f as Xe, t as ht, v as vt, w as mt, a0 as js } from "./vendor-4AnxBRif.js";
let et = null;
function Ms() {
  const n = U(null), s = U(null), e = U(null), l = je([]), c = je([]), f = je([]), u = je([]), m = U([]), b = U(null), F = je([]), S = U(null), L = U(null);
  return {
    // All state
    jobId: n,
    saw: s,
    activeStockAutoId: e,
    shapeList: l,
    stockList: c,
    cutList: f,
    segmentList: u,
    offcuts: m,
    metadata: b,
    unusableShapes: F,
    currentCutIndex: S,
    activeShape: L,
    r: {
      saw: s,
      activeStockAutoId: e,
      jobId: n,
      shapeList: l,
      stockList: c,
      cutList: f,
      segmentList: u,
      offcuts: m,
      unusableShapes: F,
      metadata: b,
      currentCutIndex: S
    }
  };
}
function nn() {
  if (et) return et;
  const n = Ms(), s = A(() => n.activeStockAutoId.value ? ae(n.activeStockAutoId.value) : []), e = A(() => !n.activeStockAutoId.value || !n.stockList.value?.length ? null : ne(n.activeStockAutoId.value)), l = A(() => !e.value || !n.cutList.value?.length ? [] : Y(e.value.autoId)), c = A(() => !e.value || !n.segmentList.value?.length ? [] : oe(n.activeStockAutoId.value)), f = A(() => n.stockList.value?.length ? ue(n.stockList.value) : []), u = A(() => n.shapeList.value.filter((I) => I.added)), m = A(() => n.shapeList.value?.length ? n.shapeList.value.filter((I) => !I.added) : []), b = A(() => n.shapeList.value?.length ? cs(n.shapeList.value) : []), F = A(() => n.shapeList.value?.length ? n.shapeList.value.filter((I) => !I.duplicate) : []), S = A(() => F.value.filter((I) => I.added)), L = A(() => n.stockList.value?.length ? n.stockList.value.filter((I) => I.used && !I.duplicate) : []), V = A(() => L.value.filter((I) => I.used)), C = A(() => n.cutList.value?.length ? l.value.reduce((I, d) => I + d.area, 0) : 0), w = A(() => !n.stockList.value?.length || !e.value ? 0 : e.value ? e.value.area : 0), O = A(() => !n.shapeList.value?.length || !s.value ? 0 : s.value ? s.value.reduce((I, d) => I + d.area, 0) : 0), _ = A(() => !n.cutList.value?.length || !e.value ? null : e.value.cutType), q = A(() => n.stockList.value?.length ? n.stockList.value.filter((d) => d.used && !d.isStacked) : []), M = A(() => n.stockList.value?.length ? fs(e.value, n.stockList.value) : 0), H = A(() => {
    if (!n.stockList.value?.length) return 0;
    let I = w.value ? (C.value + O.value) / w.value : null;
    return I > 1 && (I = 1), I;
  }), $ = () => {
    n.saw.value = null, n.shapeList.value.length = 0, n.stockList.value.length = 0, n.cutList.value.length = 0, n.segmentList.value.length = 0, n.offcuts.value.length = 0, n.unusableShapes.value.length = 0, n.currentCutIndex.value = null;
  }, J = () => {
    n.saw.value = null, n.activeStockAutoId.value = null, n.activeShape.value = null, n.metadata.value = null, n.shapeList.value = [], n.stockList.value = [], n.cutList.value = [], n.segmentList.value = [], n.offcuts.value = [], n.currentCutIndex.value = null, n.unusableShapes.value = [];
  }, W = (I, d) => {
    I in this && this[I]?.sort(gs[d]);
  }, N = (I) => {
    be(I);
  }, G = () => {
    be(n.shapeList);
  }, R = () => {
    be(n.stockList);
  }, z = (I) => {
    if (!I?.shapeList?.some((d) => d.added)) {
      J();
      return;
    }
    n.metadata.value = I.metadata, n.unusableShapes.value = I.unusableShapes || [];
    try {
      I?.saw && (n.saw.value = new ps(I.saw));
      const d = ds(I, {
        preventAutoRotation: !0
      });
      n.stockList.value = d.stockList, n.shapeList.value = d.shapeList, n.cutList.value = d.cutList, n.segmentList.value = d.segmentList, n.offcuts.value = d.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((j) => be(n[j])), n.activeStockAutoId.value = ue(n.stockList.value)?.[0]?.autoId || null;
    } catch (d) {
      console.error("Error updating from result", d);
    }
  }, ne = (I) => n.stockList.value?.length ? n.stockList.value.find((d) => d.autoId === I) : null, ae = (I) => n.shapeList.value?.length ? n.shapeList.value.filter((d) => d.added && d?.stock?.autoId === I) : [], oe = (I) => n.segmentList.value?.length ? n.segmentList.value.filter((k) => k?.stock?.autoId === I) : [], Y = (I) => {
    const d = n?.cutList?.value;
    return !d && !d.length ? [] : d.filter((k) => k?.stock?.autoId === I).sort((k, j) => k?.guillotineState?.order - j?.guillotineState?.order);
  }, ue = (I) => I?.length ? I.filter((d) => d.used === !0) : [], ce = (I) => {
    n.activeStockAutoId.value !== I && (n.activeShape.value = null, n.activeStockAutoId.value = I);
  };
  return et = {
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
    addedShapes: u,
    activeShapes: s,
    unplacedShapes: m,
    uniqueShapes: F,
    uniqueAddedShapes: S,
    unplacedShapeTally: b,
    uniqueStock: L,
    uniqueUsedStock: V,
    activeStock: e,
    activeCuts: l,
    activeCutsArea: C,
    activeCutType: _,
    usedStock: f,
    stackedStock: q,
    activeStockArea: w,
    activeShapeArea: O,
    activeStockStackCount: M,
    activeTotalArea: H,
    activeSegments: c,
    // methods
    reset: $,
    clear: J,
    sortItems: W,
    update: N,
    updateShapes: G,
    updateStock: R,
    updateFromResult: z,
    getStock: ne,
    getShapes: ae,
    getSegments: oe,
    getCuts: Y,
    setActiveStockAutoId: ce
  }, et;
}
const pe = U(null);
let Ds = 0;
function rn(n) {
  const s = n || `action-menu-${++Ds}-${Date.now()}`, e = A({
    get: () => pe.value === s,
    set: (S) => {
      S ? pe.value = s : pe.value === s && (pe.value = null);
    }
  }), l = () => {
    pe.value = s;
  }, c = () => {
    pe.value === s && (pe.value = null);
  }, f = () => {
    pe.value = null;
  }, u = () => {
    e.value = !e.value;
  }, m = A(() => pe.value !== null), b = A(() => pe.value), F = A(() => pe.value === s);
  return {
    // Instance-specific
    id: le(U(s)),
    isOpen: e,
    open: l,
    close: c,
    toggle: u,
    isThisMenuOpen: F,
    // Global singleton state (shared across all instances)
    closeAll: f,
    isAnyMenuOpen: m,
    currentOpenMenuId: b
  };
}
const zt = "cle-extras-config", qs = () => {
  try {
    const n = localStorage.getItem(zt);
    return n ? JSON.parse(n) : {};
  } catch {
    return {};
  }
}, Bs = (n) => {
  try {
    localStorage.setItem(zt, JSON.stringify(n));
  } catch {
  }
}, Vt = U(qs()), Tt = (n, s) => {
  Vt.value[n] = s, ws(n, s), Bs(Vt.value);
}, Se = (n) => vs(n), Gs = (n, s) => {
  const e = Se(n);
  if (!e || !e.options || e.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const l = e.options[0], c = Array.isArray(l) && typeof l[0] == "string" ? l : [];
  if (c.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const f = (b) => e.options.length > 1 ? b.includes("|") ? e.pricing && Object.keys(e.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(e.pricing, b) ? !0 : Object.keys(e.pricing).some((L) => L.startsWith(b + "|") || L === b) : b.split("|").every((S, L) => {
    if (L >= e.options.length) return !1;
    const V = e.options[L];
    return Array.isArray(V) && typeof V[0] == "string" && V.includes(S);
  }) : e.options.some((F) => Array.isArray(F) && typeof F[0] == "string" && F.includes(b)) : c.includes(b), u = /* @__PURE__ */ new Set();
  let m = 0;
  return s.forEach((b) => {
    if (!b.extras?.[n]) return;
    const F = b.extras[n].sides || {};
    Object.entries(F).forEach(([L, V]) => {
      typeof V == "string" && V && !f(V) && (u.add(V), F[L] = "", m++);
    });
    const S = b.extras[n].faces || {};
    Object.entries(S).forEach(([L, V]) => {
      typeof V == "string" && V && !f(V) && (u.add(V), S[L] = "", m++);
    });
  }), {
    cleanedCount: m,
    invalidOptions: Array.from(u)
  };
}, an = (n) => {
  const {
    shape: s,
    extraType: e,
    allOptions: l,
    labels: c,
    userFriendlyFieldMap: f,
    allowCustomNames: u,
    customNames: m = U([]),
    enablePricing: b = !1,
    pricing: F,
    locations: S = U([]),
    locationGroups: L = U([]),
    getAvailablePricingOptions: V,
    getPrice: C,
    findExtrasPrice: w,
    formatPrice: O
  } = n, _ = () => {
    const t = Se(e), r = t?.options || l, p = t?.labels || c;
    hs(s.value, e, r, p, m.value);
  };
  _(), st(s, (t) => {
    if (t) {
      const p = t.extras?.[e], g = p?.sides || {}, h = p?.options?.sides || {};
      let x = !1;
      for (const [T, Z] of Object.entries(g))
        if (typeof Z == "string") {
          if (Z.includes("|") && !h[T]) {
            x = !0;
            break;
          } else if (Z !== "" && !h[T]) {
            x = !0;
            break;
          }
        }
      x && _();
    }
  }, { deep: !0, immediate: !1 });
  const q = A(() => Se(e)), M = A(() => {
    const r = q.value?.options || l;
    if (r.length > 1)
      return "multiple";
    const g = (r[0] || []).filter((Z) => typeof Z == "string"), h = (m.value || []).filter((Z) => typeof Z == "string"), T = Array.from(/* @__PURE__ */ new Set([...g, ...h])).length;
    return T === 0 ? "boolean" : T === 1 ? "single" : "multiple";
  }), H = A(() => Dt(e)), $ = A(() => S.value && S.value.length > 0 ? S.value.filter((t) => t !== "all" && t !== "faces" && t !== "sides") : H.value), J = A(() => $.value.filter((t) => at(t) === "face")), W = A(() => $.value.filter((t) => at(t) === "side")), N = A(() => qt(e)), G = A(() => Bt(e)), R = A(() => Gt(e)), z = () => q.value?.options && q.value.options.length > 1, ne = (t, r, p) => {
    const { singleOption: g = Ae(), operation: h } = p;
    switch (r) {
      case "boolean":
        return !!t;
      case "single":
        return g ? h === "process" || h === "set" ? t && g ? g : "" : t === g ? g : "" : !!t;
      case "multiple":
        return t || "";
      default:
        return t;
    }
  }, ae = (t, r, p) => ne(r, p, { operation: "process" }), oe = (t, r, p, g, h, x) => {
    switch (x) {
      case "boolean":
        Re(t, r, p, g, !!h);
        break;
      case "single": {
        const T = Ae();
        Re(t, r, p, g, h ? T : "");
        break;
      }
      case "multiple":
        Re(t, r, p, g, h || "");
        break;
    }
  }, Y = (t, r, p = {}) => {
    const g = p.singleOption || Ae();
    return p.allowCustomNames ?? (g && [].includes(g.toString())), ne(t, r, {
      operation: "get",
      singleOption: g
    });
  }, ue = (t, r, p, g) => {
    switch (g) {
      case "boolean":
        return !!t;
      case "single": {
        const h = Ae();
        if (h) {
          const x = r.map((E) => de(s.value, e, E, p)), T = x.every((E) => E === h || E === !0), Z = x.every((E) => !E || E === "");
          return T ? h : Z ? "" : null;
        }
        return !!t;
      }
      case "multiple":
        return typeof t == "string" ? t : t || "";
      default:
        return t;
    }
  }, ce = (t, r, p, g = !1) => {
    if (g)
      t.forEach((h) => j(h, r, p));
    else {
      const h = c[r] || "", x = ae(h, p, M.value);
      t.forEach((T) => {
        oe(s.value, e, T, h, x, M.value);
      });
    }
  }, I = (t, r) => {
    if (z()) {
      const p = t.map((T) => (de(s.value, e, T, "value") || "").split("|")[r] || ""), g = p[0] || "";
      return p.every((T) => T === g) ? g : null;
    } else {
      const p = c[r] || "";
      if (M.value === "single") {
        const h = Ae();
        if (h) {
          const x = t.map((E) => de(s.value, e, E, p)), T = x.every((E) => E === h || E === !0), Z = x.every((E) => !E || E === "");
          return T ? h : Z ? "" : null;
        }
      }
      const g = Ft(s.value, e, t, p, M.value);
      return M.value === "multiple" && g === !1 && t.every((x) => {
        const T = de(s.value, e, x, p, M.value);
        return T === "" || T === !1 || T === null || T === void 0;
      }) ? "" : g;
    }
  }, d = (t) => {
    const { location: r, locationType: p = "single", optionIndex: g, stateValue: h, isAggregate: x = !1, customLabel: T } = t, Z = $e(g), E = Z.length > 1 ? "select" : "checkbox", ee = x ? ge(g, T || p) : ge(g, r), te = M.value === "multiple" && ee.length === 1 && b;
    if (te && ee[0]) {
      if (x) {
        let he = [];
        p === "all" ? he = $.value : p === "faces" ? he = J.value : p === "sides" ? he = W.value : r && ie(r) && (he = fe(r)), he.forEach((It) => {
          const At = B(It, g);
          (!At || At !== ee[0]) && j(It, g, ee[0]);
        });
      } else if (r) {
        const he = B(r, g);
        (!he || he !== ee[0]) && j(r, g, ee[0]);
      }
    }
    const re = M.value === "multiple" && (ee.length === 0 || te), se = h !== void 0 ? h : r ? B(r, g) : null, Fe = E === "select" ? wt(r || p, g) : void 0, _e = E === "checkbox" && Z.length === 1 ? Z[0] : void 0;
    let Ot, Ct;
    return E === "checkbox" && Z.length === 1 && (Ot = Z[0], Ct = ""), {
      inputType: E,
      // Alias for backward compatibility
      type: E,
      value: se,
      options: Fe,
      disabled: re,
      label: _e,
      indeterminate: se === null && E === "checkbox",
      trueValue: Ot,
      falseValue: Ct
    };
  }, k = (t, r, p) => d({
    locationType: t,
    optionIndex: r,
    stateValue: p,
    isAggregate: !0
  }), j = (t, r, p) => {
    const g = c[r] || "";
    if (z()) {
      const h = P(t, r);
      let x;
      if (h === "checkbox") {
        const ee = $e(r)[0];
        x = p ? ee : "";
      } else
        x = p || "";
      const T = [];
      for (let E = 0; E < c.length; E++)
        if (E === r)
          T[E] = x;
        else {
          const te = (de(s.value, e, t, "value") || "").split("|");
          T[E] = te[E] || "";
        }
      for (; T.length > 0 && T[T.length - 1] === ""; )
        T.pop();
      const Z = T.join("|");
      Re(s.value, e, t, "value", Z);
    } else
      oe(s.value, e, t, g, p, M.value);
  }, B = (t, r) => {
    const p = c[r] || "";
    if (z()) {
      const x = (de(s.value, e, t, "value") || "").split("|")[r] || "";
      if (P(t, r) === "checkbox") {
        const E = $e(r)[0];
        return x === E ? E : "";
      } else
        return x;
    } else {
      const g = de(s.value, e, t, p, M.value);
      return Y(g, M.value);
    }
  }, K = (t, r) => {
    ce($.value, t, r, z());
  }, X = (t) => {
    if (z()) {
      const r = $.value.map((h) => (de(s.value, e, h, "value") || "").split("|")[t] || ""), p = r[0] || "";
      return r.every((h) => h === p) ? p : null;
    } else {
      const r = c[t] || "", p = Ft(s.value, e, $.value, r, M.value);
      return ue(p, $.value, r, M.value);
    }
  }, we = () => {
    it(s.value, e, $.value, M.value);
  }, xe = (t) => t === "faces" ? {
    locations: J.value,
    isSupported: N.value
  } : {
    locations: W.value,
    isSupported: G.value
  }, Be = (t, r, p) => {
    const { locations: g, isSupported: h } = xe(t);
    h && ce(g, r, p, z());
  }, Pe = (t, r) => {
    const { locations: p, isSupported: g } = xe(t);
    return g ? I(p, r) : null;
  }, Ge = (t) => {
    const { locations: r, isSupported: p } = xe(t);
    p && it(s.value, e, r, M.value);
  }, Ze = (t, r) => {
    const { isSupported: p } = xe(t);
    if (!p) return { type: "checkbox", value: !1 };
    const g = Pe(t, r);
    return k(t, r, g);
  }, Ee = (t, r) => {
    Be("faces", t, r);
  }, Ve = (t, r) => {
    Be("sides", t, r);
  }, Oe = (t) => Pe("faces", t), Ce = (t) => Pe("sides", t), Ue = () => {
    Ge("faces");
  }, ze = () => {
    Ge("sides");
  }, ke = (t) => L.value.find((r) => r.id === t), ie = (t) => ["all", "faces", "sides"].includes(t) ? !1 : !t.includes("."), fe = (t) => {
    const r = ke(t);
    return r ? r.locations.filter((p) => $.value.includes(p)) : [];
  }, nt = (t, r, p) => {
    const g = fe(t);
    g.length !== 0 && (g.forEach((h) => j(h, r, p)), be(s));
  }, i = (t, r) => {
    const p = fe(t);
    if (p.length === 0) return null;
    const g = I(p, r);
    return !z() && (g === null || g === !1 || g === "") ? "" : g;
  }, o = (t) => {
    const r = fe(t);
    r.length !== 0 && it(s.value, e, r, M.value);
  }, a = (t, r) => {
    const p = i(t, r), g = ke(t);
    return d({
      location: t,
      optionIndex: r,
      stateValue: p,
      isAggregate: !0,
      customLabel: g?.label
    });
  }, v = (t) => {
    bs(s.value, e, t, M.value);
  }, y = (t) => t === "all" ? $.value.some((r) => !!B(r, 0)) : t === "faces" && N.value ? J.value.some((r) => !!B(r, 0)) : t === "sides" && G.value ? W.value.some((r) => !!B(r, 0)) : ie(t) ? fe(t).some((p) => !!B(p, 0)) : $.value.includes(t) ? !!B(t, 0) : !1, D = (t) => {
    if (t === "all") return ve("general.all");
    if (t === "faces") return `${ve("general.all")} ${ve("machining.face_other")}`;
    if (t === "sides") return `${ve("general.all")} ${ve("woodwork.edge_other")}`;
    if (ie(t)) {
      const g = ke(t);
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
    const r = `fields.${t}`, p = ve(r);
    return p !== r ? p : f?.[t] ? f[t] : t;
  }, P = (t, r) => M.value === "boolean" ? "checkbox" : $e(r).length > 1 ? "select" : "checkbox", Q = (t, r) => d({
    location: t,
    optionIndex: r,
    isAggregate: !1
  }), Te = (t) => {
    const r = X(t);
    return k("all", t, r);
  }, Ie = (t) => Ze("faces", t), bt = (t) => Ze("sides", t), Rt = (t, r) => t === "all" ? Te(r) : t === "faces" ? Ie(r) : t === "sides" ? bt(r) : ie(t) ? a(t, r) : Q(t, r), ge = (t, r) => {
    const h = (Se(e)?.options || l)[t];
    if (!h || h[0] === !0)
      return [];
    const x = r && typeof r == "string" && (r.startsWith("face.") || r.startsWith("side.")), T = r && typeof r == "string" && ie(r), Z = !x && (r === "all" || r === "faces" || r === "sides" || T);
    if (Array.isArray(h) && h.length === 1 && typeof h[0] == "string" && !(b && V && (x || Z) && t > 0))
      return h;
    if (b && V && x) {
      const te = [];
      if (t > 0)
        for (let re = 0; re < t; re++) {
          const se = B(r, re);
          if (typeof se == "string" && se)
            te.push(se);
          else if (typeof se == "boolean")
            te.push(se);
          else {
            const Fe = Se(e), _e = de(s.value, e, r, "value");
            return _e && _e.includes("|") && Fe?.options[t] ? Fe.options[t] : [];
          }
        }
      return V(F, te, t);
    }
    if (b && V && Z) {
      const te = [];
      if (t > 0)
        for (let re = 0; re < t; re++) {
          let se;
          if (r === "all" ? se = X(re) : r === "faces" ? se = Oe(re) : r === "sides" ? se = Ce(re) : T && typeof r == "string" && (se = i(r, re)), typeof se == "string" && se)
            te.push(se);
          else if (typeof se == "boolean")
            te.push(se);
          else
            return [];
        }
      return V(F, te, t);
    }
    const E = h, ee = u ? (m.value || []).filter((te) => typeof te == "string") : [];
    return [.../* @__PURE__ */ new Set([...E, ...ee])];
  }, wt = (t, r) => {
    const g = Se(e)?.options[r] || [], h = u && m.value ? m.value.filter((ee) => typeof ee == "string") : [], x = [.../* @__PURE__ */ new Set([...g, ...h])], T = ge(r, t), Z = new Set(T);
    return x.map((ee) => ({
      value: ee,
      label: ee,
      disabled: !Z.has(ee)
    }));
  }, Ae = () => {
    const t = ge(0);
    return t.length === 1 ? t[0] : void 0;
  }, Wt = (t) => {
    const r = ge(t);
    return r.length === 1 ? r[0] : void 0;
  }, $e = (t) => {
    const r = Se(e);
    let p = [];
    if (r?.options && r.options[t] && Array.isArray(r.options[t])) {
      const h = r.options[t];
      Array.isArray(h) && h.every((x) => typeof x == "string") && (p = h);
    }
    const g = u && m.value ? m.value.filter((h) => typeof h == "string") : [];
    return [.../* @__PURE__ */ new Set([...p, ...g])];
  }, Qt = (t, r = 0) => {
    if (t === "all" || t === "faces" || t === "sides")
      return "";
    if (ie(t)) {
      const g = ke(t);
      return g?.price !== void 0 && i(t, r) ? O ? O(g.price) : g.price.toString() : "";
    }
    if (!b || !C)
      return "";
    if (!$.value.includes(t))
      return "N/A";
    const p = C(s.value, e, t, w);
    return p ? O ? O(p) : p.toString() : "N/A";
  }, Ht = (t) => !b || !C ? !1 : C(s.value, e, t, w), Ke = A(() => $.value.length > 1), Je = A(() => H.value.length > 1), kt = () => {
    if (S.value && S.value.length > 0) {
      const g = [];
      return L.value && L.value.length > 0 && L.value.forEach((h) => g.push(h.id)), g.push(...S.value), g;
    }
    const t = [];
    L.value && L.value.length > 0 && L.value.forEach((g) => t.push(g.id)), Ke.value && t.push("all"), Je.value && (Zt(e).length > 0 && t.push("faces"), Ut(e).length > 0 && t.push("sides"));
    const r = /* @__PURE__ */ new Set();
    L.value && L.value.length > 0 && L.value.forEach((g) => {
      g.hideIndividualLocations && g.locations.forEach((h) => r.add(h));
    });
    const p = H.value.filter((g) => !r.has(g));
    return t.push(...p), t;
  }, Yt = () => M.value === "multiple", Xt = () => {
    const t = 1 + l.length, r = M.value === "multiple", p = b, g = t + (r ? 1 : 0) + (p ? 1 : 0);
    return {
      columns: g,
      style: `repeat(${g}, max-content)`
    };
  }, rt = (t) => t === "all" ? "all" : t === "faces" ? "faces" : t === "sides" ? "sides" : "individual", Lt = (t) => at(t), es = (t) => {
    if (t === "all")
      return Ke.value;
    if (ie(t))
      return ke(t) ? fe(t).length > 0 : !1;
    if (S.value && S.value.length > 0)
      return S.value.includes(t);
    const r = rt(t);
    return r === "all" ? Ke.value : r === "faces" || r === "sides" ? r === "faces" && N.value && J.value.length > 0 || r === "sides" && G.value && W.value.length > 0 ? Je.value : !1 : H.value.includes(t);
  }, ts = (t) => {
    Ss(t, e, m);
  }, ss = (t) => {
    ys([s.value], e, t, c);
  }, ns = (t) => {
    ms([s.value], e, t);
  }, rs = (t, r, p) => {
    if (t === "all")
      K(r, p);
    else if (t === "faces")
      Ee(r, p);
    else if (t === "sides")
      Ve(r, p);
    else if (ie(t)) {
      let h = p;
      if (!z() && typeof p == "boolean") {
        const x = $e(r);
        x.length === 1 && (h = p ? x[0] : "");
      }
      if (!z() && h) {
        const x = fe(t), T = new Set(x);
        L.value && (L.value.forEach((Z) => {
          Z.id !== t && fe(Z.id).filter((te) => !T.has(te)).forEach((te) => {
            j(te, r, "");
          });
        }), be(s));
      }
      nt(t, r, h);
    } else
      j(t, r, p), z() || be(s);
    const g = c.length;
    for (let h = r + 1; h < g; h++) {
      console.group(`Checking downstream option at index: ${h}`);
      let x;
      if (t === "all" ? x = X(h) : t === "faces" ? x = Oe(h) : t === "sides" ? x = Ce(h) : ie(t) ? x = i(t, h) : x = B(t, h), !x) {
        console.groupEnd();
        continue;
      }
      const T = ge(h, t);
      let Z = !1;
      if (typeof x == "string" ? Z = T.includes(x) : typeof x == "boolean" && x === !0 && (Z = T.length > 0), !Z) {
        const E = P(t, h) === "checkbox" ? !1 : "";
        t === "all" ? K(h, E) : t === "faces" ? Ee(h, E) : t === "sides" ? Ve(h, E) : ie(t) ? nt(t, h, E) : j(t, h, E);
      }
      console.groupEnd();
    }
  }, as = (t, r = !0) => r && !confirm(`Delete ${e} for ${D(t)}?`) ? !1 : (t === "all" ? we() : t === "faces" ? Ue() : t === "sides" ? ze() : ie(t) ? o(t) : v(t), !0), is = () => {
    const t = s.value[e], r = s.value[`${e}Options`];
    return !(!t || typeof t != "object" || !r || typeof r != "object" || N.value && (!("faces" in t) || !("faces" in r)) || G.value && (!("sides" in t) || !("sides" in r)));
  }, os = () => {
    const t = [], r = s.value[e], p = s.value[`${e}Options`];
    return !r || typeof r != "object" ? t.push(`Missing or invalid ${e} property in shape`) : (N.value && !("faces" in r) && t.push(`Missing faces property in ${e}`), G.value && !("sides" in r) && t.push(`Missing sides property in ${e}`)), !p || typeof p != "object" ? t.push(`Missing or invalid ${e}Options property in shape`) : (N.value && !("faces" in p) && t.push(`Missing faces property in ${e}Options`), G.value && !("sides" in p) && t.push(`Missing sides property in ${e}Options`)), t;
  }, xt = (t) => {
    const r = [];
    if (!t || !Object.keys(t).length)
      return { valid: !0, errors: r };
    const p = Object.keys(t), g = Math.max(...p.map((h) => h.split("|").length));
    if (g <= 1)
      return { valid: !0, errors: r };
    for (const h of $.value) {
      const x = z() ? de(s.value, e, h, "value") || "" : B(h, 0);
      if (!x || typeof x != "string" || x === "")
        continue;
      const T = x.includes("|") ? x.split("|") : [x], Z = T.filter((E) => E.trim() !== "").length;
      if (Z > 0 && Z < g) {
        const E = T.join("|"), ee = p.some((re) => re.startsWith(E + "|")), te = p.includes(E);
        if (ee && !te) {
          const re = g - Z, se = T.filter((_e) => _e.trim() !== "").join(", "), Fe = D(h);
          r.push(`${e} selection incomplete for ${Fe}. Selected: "${se}" but ${re} more level${re > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: r.length === 0, errors: r };
  }, ls = (t) => xt(t).errors, us = A(() => kt().map((t) => ({
    location: t,
    label: D(t),
    isAggregate: ["all", "faces", "sides"].includes(t) || ie(t)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: M,
    // Raw computed ref (not readonly wrapped)
    allLocations: le($),
    faceLocations: le(J),
    sideLocations: le(W),
    shouldShowAll: Ke,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: le(Je),
    renderLocations: le(us),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: le(N),
    supportsSides: le(G),
    supportsBoth: le(R),
    // Core operations
    setValue: j,
    getValue: B,
    setAll: K,
    getAll: X,
    getAllState: X,
    // Alias for backward compatibility
    deleteSingle: v,
    deleteAll: we,
    canDelete: y,
    // Group-specific operations
    setAllFaces: Ee,
    setAllSides: Ve,
    getAllFaces: Oe,
    getAllSides: Ce,
    deleteAllFaces: Ue,
    deleteAllSides: ze,
    // UI helpers
    getLocationLabel: D,
    getInputType: P,
    getInputConfig: Q,
    getAllInputConfig: Te,
    getAllFacesInputConfig: Ie,
    getAllSidesInputConfig: bt,
    getInputConfigForLocation: Rt,
    getSelectOptions: wt,
    getSingleOptionLabel: Wt,
    // Pricing
    getPriceDisplay: Qt,
    getCalculatedPrice: Ht,
    // Layout & rendering
    getRenderLocations: kt,
    shouldShowDeleteButton: Yt,
    getGridConfig: Xt,
    getLocationGroup: rt,
    getLocationScope: Lt,
    isLocationVisible: es,
    // Options management
    getAvailableOptions: ge,
    getSingleAvailableOption: Ae,
    // Initialization & migration
    initialize: _,
    initializeExtra: _,
    // Alias for backward compatibility
    initializeCustomNames: ts,
    migrateToSingle: ss,
    migrateToBoolean: ns,
    // Event handlers
    handleInputChange: rs,
    handleDelete: as,
    // Validation
    validateShape: is,
    getValidationErrors: os,
    validateIncompleteSelections: xt,
    getIncompleteSelectionErrors: ls,
    // Debug helpers (development only)
    getDebugInfo: (t, r) => ({
      mode: M.value,
      location: t,
      optionIndex: r,
      value: $.value.includes(t) ? B(t, r) : "N/A",
      inputType: P(t, r),
      canDelete: y(t),
      allState: X(r),
      availableOptions: ge(r),
      locationGroup: rt(t),
      config: q.value,
      supportsFaces: N.value,
      supportsSides: G.value,
      supportsBoth: R.value,
      ...N.value && {
        allFacesState: Oe(r)
      },
      ...G.value && {
        allSidesState: Ce(r)
      },
      ...$.value.includes(t) && {
        locationScope: Lt(t)
      }
    })
  };
}, on = (n) => {
  const {
    customNames: s,
    usedNames: e,
    allowCustomNames: l,
    getSelectOptions: c,
    onCustomNameAdded: f,
    onCustomNameDeleted: u
  } = n, m = U(""), b = A(() => l && m.value?.trim()), F = A(() => !l || !s.value || s.value.length === 0 || s.value.length === 1 && s.value[0] === !0 ? !0 : s.value.filter((w) => typeof w == "string").every((w) => e.value.includes(w))), S = A(() => {
    const C = [];
    if (l && s.value && s.value.length > 0) {
      if (s.value.length === 1 && s.value[0] === !0)
        return C;
      const O = [...s.value.filter((_) => typeof _ == "string")].sort();
      C.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), O.forEach((_) => {
        (e.value?.includes(_) ?? !1) || C.push({
          id: `delete-${_}`,
          label: `Delete "${_}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return C;
  }), L = () => {
    const C = m.value?.trim();
    if (!C) return;
    if (c("", 0).map((O) => O.value).includes(C)) {
      m.value = "";
      return;
    }
    f(C), m.value = "";
  }, V = (C) => {
    const w = C.item || C;
    if (w.id?.startsWith("delete-")) {
      const O = w.id.replace("delete-", "");
      if (e.value?.includes(O)) {
        console.warn(`Cannot delete ${n.extraType} type "${O}" - it is currently in use`);
        return;
      }
      u(O);
    }
  };
  return {
    newCustomName: m,
    canAddCustomName: le(b),
    isActionMenuDisabled: le(F),
    customNameActions: S,
    handleAddCustomName: L,
    handleCustomNameAction: V
  };
}, ln = (n) => {
  const {
    extraType: s,
    allOptions: e,
    labels: l,
    shapeIndex: c,
    enablePricing: f,
    mode: u,
    shouldShowAll: m,
    locations: b,
    locationGroups: F = U([]),
    getInputType: S,
    getInputConfig: L,
    getAllInputConfig: V,
    getInputConfigForLocation: C,
    canDelete: w,
    getLocationLabel: O,
    shouldShowDeleteButton: _
  } = n, q = A(() => {
    const N = [], G = /* @__PURE__ */ new Set();
    if (F.value && F.value.length > 0 && F.value.forEach((R) => {
      R.hideIndividualLocations && R.locations.forEach((z) => G.add(z));
    }), F.value && F.value.length > 0 && F.value.forEach((R) => N.push(R.id)), m.value && N.push("all"), b.value && b.value.length > 0)
      N.push(...b.value.filter((R) => R !== "all" && !G.has(R)));
    else {
      const R = Dt(s), z = Gt(s), ne = qt(s), ae = Bt(s);
      z && ne && ae && (Zt(s).length > 0 && N.push("faces"), Ut(s).length > 0 && N.push("sides")), N.push(...R.filter((Y) => !G.has(Y)));
    }
    return Array.from(new Set(N));
  }), M = A(() => {
    const N = 1 + e.length, G = u.value === "multiple", R = f;
    return `repeat(${N + (G ? 1 : 0) + (R ? 1 : 0)}, max-content)`;
  }), H = (N, G) => `${s}-${N}-${l[G]}-${G}-${c}`, $ = (N) => {
    const G = O(N);
    return `Delete ${s} for ${G}`;
  }, J = (N) => ({
    show: _(N),
    enabled: w(N),
    ariaLabel: $(N)
  }), W = (N, G) => S(N, G);
  return {
    renderLocations: le(q),
    gridStyle: le(M),
    getInputId: H,
    getDeleteAriaLabel: $,
    getInputConfigForLocation: C,
    getDeleteConfig: J,
    getInputTypeForLocation: W,
    // Re-export the passed functions for consistency
    getInputType: S,
    getInputConfig: L,
    getAllInputConfig: V,
    canDelete: w,
    shouldShowDeleteButton: _,
    getLocationLabel: O
  };
};
let qe = null;
function Zs() {
  if (!(!St() || qe))
    try {
      const n = require("~/store");
      if (n && n.applicationSettings) {
        qe = n.applicationSettings;
        return;
      }
    } catch (n) {
      console.warn("Failed to load ApplicationSettings from store:", n.message);
    }
}
function Me(n, s, e = {}) {
  const {
    serializer: l = {
      read: (c) => {
        try {
          return JSON.parse(c);
        } catch {
          return c;
        }
      },
      write: (c) => JSON.stringify(c)
    }
  } = e;
  if (!St()) {
    const f = U((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const u = localStorage.getItem(n);
          if (u)
            return l.read(u);
        }
      } catch (u) {
        console.error(`Failed to load ${n} from localStorage:`, u);
      }
      return s;
    })());
    return st(f, (u) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const m = l.write(u);
          localStorage.setItem(n, m);
        }
      } catch (m) {
        console.error(`Failed to save ${n} to localStorage:`, m);
      }
    }, { deep: !0 }), f;
  }
  if (St()) {
    if (Zs(), !qe)
      return console.warn("ApplicationSettings not available, using in-memory fallback"), U(s);
    const f = U((() => {
      try {
        const u = qe.getString(n);
        if (u)
          return l.read(u);
      } catch (u) {
        console.error(`Failed to load ${n} from ApplicationSettings:`, u);
      }
      return s;
    })());
    return st(f, (u) => {
      try {
        const m = l.write(u);
        qe.setString(n, m);
      } catch (m) {
        console.error(`Failed to save ${n} to ApplicationSettings:`, m);
      }
    }, { deep: !0 }), f;
  }
  return console.warn(`No storage available for key '${n}', using in-memory fallback`), U(s);
}
function Kt(n) {
  const s = {}, e = n, l = e.code;
  if (l === "invalid_type") {
    let c = "unknown";
    if ("input" in e)
      c = typeof e.input;
    else if ("received" in e) {
      const f = e.received;
      c = typeof f == "string" ? f : typeof f;
    }
    s.expected = e.expected, s.received = c;
  } else l === "too_small" ? (s.minimum = e.minimum, s.min = e.minimum, s.inclusive = e.inclusive) : l === "too_big" ? (s.maximum = e.maximum, s.max = e.maximum, s.inclusive = e.inclusive) : l === "invalid_string" && (s.validation = e.validation);
  return s;
}
function Us(n) {
  return n.map((s) => {
    const e = s.path.length > 0 ? s.path.join(".") : "root", l = Kt(s), c = xs(s.message, l);
    return `[${e}] ${c}`;
  });
}
function De(n, s) {
  const e = n.safeParse(s);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    errors: e.success ? void 0 : e.error.issues
  };
}
function zs(n = {}) {
  const { numberFormat: s = "decimal" } = n, e = Me("inputs/inputShapes", [], {
    serializer: {
      read: (i) => {
        if (!i) {
          const v = "GlobalStore/inputShapes", y = localStorage.getItem(v);
          if (y)
            i = y, localStorage.removeItem(v);
          else return [];
        }
        let o;
        try {
          o = JSON.parse(i);
        } catch (v) {
          return console.error("Failed to parse input shapes JSON:", v), [];
        }
        return S(o, s);
      },
      write: (i) => {
        const a = i.filter((y) => !y?.multiEdit).map((y) => y.toData());
        return JSON.stringify(a);
      }
    }
  }), l = Me("inputs/inputStock", [], {
    serializer: {
      read: (i) => {
        if (!i) return [];
        let o;
        try {
          o = JSON.parse(i);
        } catch (v) {
          return console.error("  Failed to parse stock JSON:", v), [];
        }
        return L(o, s);
      },
      write: (i) => {
        const a = i.filter((y) => !y?.multiEdit).map((y) => y.toData());
        return JSON.stringify(a);
      }
    }
  }), c = Me("inputs/inputSaw", new Le({}), {
    serializer: {
      read: (i) => {
        if (!i) return new Le({});
        try {
          const o = JSON.parse(i);
          return V(o);
        } catch (o) {
          return console.error("  Failed to parse saw JSON:", o), new Le({});
        }
      },
      write: (i) => {
        if (!i)
          return JSON.stringify({});
        const o = i.toData();
        return JSON.stringify(o);
      }
    }
  }), f = Me("inputs/inputUserGroups", [], {
    serializer: {
      read: (i) => C(i ? JSON.parse(i) : []),
      write: (i) => JSON.stringify(i.map((o) => o.toData()))
    }
  }), u = Me("inputs/extrasOptions", {
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
  }), m = U([]), b = U(!1);
  function F(i) {
    if (!i || typeof i != "object") return i;
    const o = { ...i };
    if (delete o.issues, delete o.warnings, o.trim && typeof o.trim == "object") {
      const a = o.trim;
      ("x1" in a || "x2" in a || "y1" in a || "y2" in a) && (o.trim = {
        l1: a.y1 ?? a.l1 ?? 0,
        l2: a.y2 ?? a.l2 ?? 0,
        w1: a.x1 ?? a.w1 ?? 0,
        w2: a.x2 ?? a.w2 ?? 0
      });
    }
    if (o.extras?.banding?.sides && typeof o.extras.banding.sides == "object") {
      const a = o.extras.banding.sides;
      ("x1" in a || "x2" in a || "y1" in a || "y2" in a) && (o.extras.banding.sides = {
        l1: a.y1 ?? a.l1,
        l2: a.y2 ?? a.l2,
        w1: a.x1 ?? a.w1,
        w2: a.x2 ?? a.w2
      });
    }
    if (o.extras?.finish?.sides && typeof o.extras.finish.sides == "object") {
      const a = o.extras.finish.sides;
      ("x1" in a || "x2" in a || "y1" in a || "y2" in a) && (o.extras.finish.sides = {
        l1: a.y1 ?? a.l1,
        l2: a.y2 ?? a.l2,
        w1: a.x1 ?? a.w1,
        w2: a.x2 ?? a.w2
      });
    }
    if (o.extras?.planing?.sides && typeof o.extras.planing.sides == "object") {
      const a = o.extras.planing.sides;
      ("x1" in a || "x2" in a || "y1" in a || "y2" in a) && (o.extras.planing.sides = {
        l1: a.y1 ?? a.l1,
        l2: a.y2 ?? a.l2,
        w1: a.x1 ?? a.w1,
        w2: a.x2 ?? a.w2
      });
    }
    if (o.efficiencyOptions?.primaryCompression) {
      const a = o.efficiencyOptions.primaryCompression;
      a === "x" ? o.efficiencyOptions = {
        ...o.efficiencyOptions,
        primaryCompression: "l"
      } : a === "y" && (o.efficiencyOptions = {
        ...o.efficiencyOptions,
        primaryCompression: "w"
      });
    }
    for (const a in o)
      o[a] === null && delete o[a];
    return o;
  }
  function S(i, o) {
    if (!Array.isArray(i))
      return [];
    const a = [];
    for (let v = 0; v < i.length; v++) {
      const y = i[v], D = F(y);
      try {
        const P = {
          ...D,
          skipSchemaValidation: !0
          // Skip Zod validation during construction
        };
        y.autoId && (P.autoId = y.autoId), delete P.issues, delete P.warnings;
        const Q = new ct(P, o);
        a.push(Q);
      } catch (P) {
        console.error(`Failed to create InputShape at index ${v}:`, P);
      }
    }
    return a;
  }
  function L(i, o) {
    if (!Array.isArray(i)) return [];
    const a = [];
    for (let v = 0; v < i.length; v++) {
      const y = i[v], D = F(y);
      try {
        const P = {
          ...D,
          skipSchemaValidation: !0
          // Skip Zod validation during construction
        };
        y.autoId && (P.autoId = y.autoId);
        const Q = new tt(P, o);
        a.push(Q);
      } catch (P) {
        console.error(`Failed to create InputStock at index ${v}:`, P);
      }
    }
    return a;
  }
  function V(i) {
    const o = F(i), a = De(ot, o);
    if (a.success && a.data) {
      const v = {
        ...a.data,
        issues: [],
        warnings: []
      };
      return i?.autoId && (v.autoId = i.autoId), new Le(v);
    } else
      return console.error("Failed to parse input saw:", a.errors), new Le({});
  }
  function C(i, o) {
    return Array.isArray(i) ? i.map((a) => new Ls(a)).filter(Boolean) : [];
  }
  function w(i = {}) {
    try {
      const v = { ...As(
        (D) => {
          if (typeof D != "object" || D === null) return D;
          const P = { ...D };
          for (const Q in P)
            P[Q] === null && delete P[Q];
          return P;
        },
        ut
      ).parse(i), isNew: !0 }, y = new ct(v, s);
      return y.createId(e.value.length), e.value.push(y), y;
    } catch (o) {
      return o instanceof Qe && (console.error("Shape validation failed:", o.issues), z("part", "Invalid shape data", o.issues)), null;
    }
  }
  function O(i = {}) {
    try {
      const a = { ...lt.parse(i), isNew: !0 }, v = new tt(a, s);
      return v.createId(l.value.length), l.value.push(v), v;
    } catch (o) {
      return o instanceof Qe && (console.error("Stock validation failed:", o.issues), z("stock", "Invalid stock data", o.issues)), null;
    }
  }
  function _(i) {
    try {
      const o = i.toData(), a = ut.parse(o);
      return new ct(a, s);
    } catch (o) {
      return o instanceof Qe && (console.error("Shape clone validation failed:", o.issues), z("part", "Invalid shape data during cloning", o.issues)), null;
    }
  }
  function q(i) {
    try {
      const o = i.toData(), a = lt.parse(o);
      return new tt(a, s);
    } catch (o) {
      return o instanceof Qe && (console.error("Stock clone validation failed:", o.issues), z("stock", "Invalid stock data during cloning", o.issues)), null;
    }
  }
  function M(i, o) {
    const a = e.value.find((D) => D.autoId === i);
    if (!a) return !1;
    const v = { ...a.toData(), ...o }, y = De(ut, v);
    if (y.success && y.data)
      return a.update(y.data), a.isNew || a.validate(), !0;
    {
      const D = y.errors ? Us(y.errors) : [];
      console.error("Shape update validation failed:", D);
      const P = y.errors?.[0];
      if (P) {
        const Q = Kt(P);
        new We({
          category: ["part"],
          message: P.message,
          // This is the translation key from Zod error map
          params: Q,
          issues: m.value
        });
      } else
        z("part", "Invalid shape update");
      return !1;
    }
  }
  function H(i, o) {
    const a = e.value.findIndex((y) => y.autoId === i);
    if (a === -1) return !1;
    const v = e.value[a];
    return v.validate({ fields: [o] }), v.issues.length === 0;
  }
  function $(i, o) {
    const a = l.value.find((D) => D.autoId === i);
    if (!a) return !1;
    const v = { ...a.toData(), ...o }, y = De(lt, v);
    return y.success && y.data ? (a.update(y.data), a.isNew || R(), !0) : (console.error("Stock update validation failed:", y.errors), z("stock", "Invalid stock update", y.errors), !1);
  }
  function J(i, o) {
    const a = l.value.findIndex((y) => y.autoId === i);
    if (a === -1) return !1;
    const v = l.value[a];
    return v.validate({ fields: [o] }), be(l), v.issues.length === 0;
  }
  function W(i) {
    if (e.value.length === 1) return !1;
    const o = e.value.findIndex((a) => a.autoId === i);
    return o === -1 ? !1 : (e.value.splice(o, 1), !0);
  }
  function N(i) {
    if (l.value.length === 1) return !1;
    const o = l.value.findIndex((a) => a.autoId === i);
    return o === -1 ? !1 : (l.value.splice(o, 1), !0);
  }
  function G(i) {
    b.value = !0;
    const o = [];
    try {
      e.value.forEach((a) => a.issues = []);
      for (let a = 0; a < e.value.length; a++) {
        const v = e.value[a];
        if (v.isNew)
          continue;
        const y = v.validate({
          inputStockList: l.value,
          index: a,
          stockType: i?.stockType ?? null,
          partTrim: 0,
          useInventory: !1,
          saw: i
        });
        o.push(...y);
      }
      e.value.some((a) => Number(a.q) > 0) || new We({
        category: ["part"],
        message: "errors.validation.no_parts",
        issues: o
      });
    } finally {
      b.value = !1;
    }
    return m.value = o, o;
  }
  function R(i) {
    b.value = !0;
    const o = [];
    try {
      l.value.forEach((a) => a.issues = []);
      for (let a = 0; a < l.value.length; a++) {
        const y = l.value[a].validate({ saw: i }, a);
        o.push(...y);
      }
      l.value.some((a) => Number(a.q) > 0 || a.autoAdd) || new We({
        category: ["stock"],
        message: "errors.validation.no_stock",
        issues: o
      });
    } finally {
      b.value = !1;
    }
    return m.value = o, o;
  }
  function z(i, o, a) {
    new We({
      category: [i],
      message: o,
      issues: m.value
    }), a && console.log("Validation details:", a);
  }
  function ne() {
    m.value = [], e.value.forEach((i) => i.issues = []), l.value.forEach((i) => i.issues = []);
  }
  function ae(i = {}) {
    const o = [], a = [], v = i.inputShapesOverride ?? e.value;
    if (!v.length)
      return { shapeList: [], issues: [] };
    for (let y = 0; y < v.length; y++) {
      const D = v[y];
      if (!D.q) continue;
      D.createId(y), D.applyPartTrim(i.trim, i.stockType);
      const P = D.toShape();
      i.minSpacing && i.maxDimension && (P.l <= i.maxDimension || P.w <= i.maxDimension) && (P.minSpacing = i.minSpacing), o.push(P), a.push(...P.issues);
    }
    return { shapeList: o, issues: a };
  }
  function oe(i) {
    if (!l.value.length)
      return { stockList: [], issues: [] };
    const o = [], a = [];
    for (let v = 0; v < l.value.length; v++) {
      const y = l.value[v];
      if (!y.q && !y.autoAdd) continue;
      y.createId(v), y.saw = i;
      const D = y.toStock();
      o.push(D), a.push(...D.issues);
    }
    return { stockList: o, issues: a };
  }
  function Y(i, o = s) {
    const a = {
      saw: { success: !1, failed: !1 },
      shapes: { success: 0, failed: 0 },
      stock: { success: 0, failed: 0 },
      groups: { success: 0, failed: 0 }
    };
    if (i.saw) {
      const v = De(ot, F(i.saw));
      if (v.success && v.data) {
        const y = { ...v.data };
        i.saw?.autoId && (y.autoId = i.saw.autoId), c.value = new Le(y), a.saw.success = !0;
      } else
        console.error("Failed to parse input saw:", v.errors), a.saw.failed = !0;
    }
    if (i.shapes) {
      const v = S(i.shapes, o);
      a.shapes.success = v.length, a.shapes.failed = i.shapes.length - v.length, e.value = v;
    }
    if (i.stock) {
      const v = L(i.stock, o);
      a.stock.success = v.length, a.stock.failed = i.stock.length - v.length, l.value = v;
    }
    if (i.groups) {
      const v = C(i.groups);
      a.groups.success = v.length, a.groups.failed = i.groups.length - v.length, f.value = v;
    }
    return i.extrasOptions && (u.value = { ...i.extrasOptions }), a;
  }
  function ue() {
    return {
      shapes: e.value.map((i) => i.toData()),
      stock: l.value.map((i) => i.toData()),
      inputUserGroups: f.value.map((i) => i.toData()),
      extrasOptions: u.value
    };
  }
  function ce() {
    e.value = [], l.value = [], f.value = [], ne();
  }
  const I = A(() => e.value.reduce((i, o) => {
    const a = Number(o?.q);
    return a && a > 0 && !o?.multiEdit ? i + a : i;
  }, 0)), d = A(() => l.value.reduce((i, o) => {
    const a = Number(o?.q);
    return a && a > 0 && !o?.multiEdit ? i + a : i;
  }, 0)), k = A(() => e.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), j = A(() => l.value.reduce((i, o) => o?.multiEdit ? i : i + 1, 0)), B = A(() => m.value.length > 0), K = () => [
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
  ], X = U(null), we = U(null), xe = () => {
    X.value = null;
  }, Be = ne, Pe = (i = null) => {
    const o = i?.inputShapesOverride ?? e.value, a = G(i?.saw || void 0);
    if (o.length) {
      ks(o, l.value, i?.saw || c.value);
      const v = o.flatMap((y) => y.issues);
      return [...a, ...v];
    }
    return a;
  }, Ge = (i, o = "decimal") => {
    const a = i?.inputSaw, v = i?.inputShapes, y = i?.inputStock, D = i?.inputUserGroups;
    return Y({
      saw: a,
      shapes: v,
      stock: y,
      groups: D
    }, o);
  }, Ze = (i, o = "decimal") => Y({ shapes: i }, o).shapes.success > 0, Ee = (i, o = "decimal") => Y({ stock: i }, o).stock.success > 0, Ve = (i, o, a, v) => {
    o[0]?.length > 0 && (u.value[i] || (u.value[i] = { options: [] }), u.value[i].options = [...o[0]]), a && v && o.length > 0 ? Tt(i, {
      options: o,
      // Use all columns extracted from pricing
      labels: a,
      pricing: v
    }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: a, pricingData: v, pricingOptionsLength: o.length });
  }, Oe = () => {
    if (!Object.values(u.value).some(
      (a) => a.options.length > 0
    )) return;
    const o = (a, v) => {
      const y = {};
      for (const D of v)
        y[D] = [...a];
      return y;
    };
    return {
      banding: u.value.banding.options.length > 0 ? {
        options: {
          sides: o(u.value.banding.options, ["l1", "l2", "w1", "w2"])
        }
      } : void 0,
      finish: u.value.finish.options.length > 0 ? {
        options: {
          faces: o(u.value.finish.options, ["a", "b"])
        }
      } : void 0,
      planing: u.value.planing.options.length > 0 ? {
        options: {
          sides: o(u.value.planing.options, ["l1", "l2", "w1", "w2"]),
          faces: o(u.value.planing.options, ["a", "b"])
        }
      } : void 0
    };
  }, Ce = (i) => {
    if (!l.value.length) return "n";
    const o = i.material, a = i.t, v = l.value.filter((Q) => Q.material === o && Q.t === a);
    if (!v.length)
      return "n";
    let y = !1, D = !1, P = !1;
    for (const Q of v)
      Q.grain === "l" ? (y = !0, D = !0) : Q.grain === "w" && (y = !0, P = !0);
    return y ? D && P ? "y" : D ? "l" : P ? "w" : "n" : "n";
  }, Ue = (i) => {
    for (const o of e.value)
      _t(o, i);
    for (const o of l.value)
      _t(o, i);
  };
  function ze(i) {
    const o = { ...c.value.toData(), ...i }, a = De(ot, o);
    return a.success && a.data ? (c.value.update(a.data), !0) : (console.error("InputSaw update validation failed:", a.errors), z("saw", "Invalid saw update", a.errors), !1);
  }
  function ke() {
    c.value = new Le({});
  }
  function ie() {
    const i = c.value.validate();
    return m.value = [...m.value.filter((o) => o.category?.[0] !== "saw"), ...i], i;
  }
  let fe = !1;
  return st(e, (i) => {
    fe || !i.length || Is(() => {
      const o = ["banding", "finish", "planing"], a = [];
      o.forEach((v) => {
        const y = /* @__PURE__ */ new Set();
        if (i.forEach((D) => {
          const P = D.extras?.[v];
          P && (P.faces && Object.values(P.faces).forEach((Q) => {
            typeof Q == "string" && Q.trim() && Q !== "Y" && y.add(Q);
          }), P.sides && Object.values(P.sides).forEach((Q) => {
            typeof Q == "string" && Q.trim() && Q !== "Y" && y.add(Q);
          }));
        }), y.size > 0) {
          const D = Se(v);
          if (D) {
            const P = D.options[0];
            if (Array.isArray(P) && (P.length === 0 || typeof P[0] == "string")) {
              const Q = new Set(P), Te = Array.from(y).filter((Ie) => !Q.has(Ie));
              if (Te.length > 0) {
                const Ie = [...P, ...Te];
                Tt(v, {
                  ...D,
                  options: [Ie, ...D.options.slice(1)]
                });
              }
            }
          }
        }
      }), o.forEach((v) => {
        const y = Gs(v, i);
        y.cleanedCount > 0 && a.push(
          `${v}: ${y.invalidOptions.join(", ")}`
        );
      }), a.length > 0 && (console.warn(
        `Some extras options no longer exist and have been reset:
` + a.join(`
`)
      ), typeof window < "u" && window.alert && setTimeout(() => {
        alert(
          `Some extras options no longer exist and have been reset:
` + a.join(`
`)
        );
      }, 500)), fe = !0;
    });
  }, { immediate: !0 }), {
    // Bundled object
    inputs: {
      inputStock: l,
      inputShapes: e,
      inputUserGroups: f,
      currentInputShape: X,
      selectedSaw: we,
      inputSaw: c
    },
    // State
    inputShapes: e,
    inputStock: l,
    inputUserGroups: f,
    inputSaw: c,
    currentInputShape: X,
    selectedSaw: we,
    validationIssues: m,
    isValidating: b,
    // Computed
    totalInputShapes: I,
    totalInputStock: d,
    totalInputShapeLines: k,
    totalInputStockLines: j,
    hasValidationIssues: B,
    // Actions
    addInputShape: w,
    addInputStock: O,
    cloneInputShape: _,
    cloneInputStock: q,
    updateInputShape: M,
    updateInputStock: $,
    updateInputSaw: ze,
    removeInputShape: W,
    removeInputStock: N,
    reset: xe,
    resetInputSaw: ke,
    clear: ce,
    clearIssues: Be,
    // Validation
    validateInputShapes: Pe,
    validateInputShapeField: H,
    validateInputStock: R,
    validateInputStockField: J,
    validateInputSaw: ie,
    clearValidationIssues: ne,
    // Conversion
    createShapeList: ae,
    createStockList: oe,
    // Import/Export/Update
    importData: Y,
    exportData: ue,
    updateInputs: Ge,
    importInputShapes: Ze,
    importInputStock: Ee,
    // Additional functions
    getShapeGrainSummary: Ce,
    updateNumberFormat: Ue,
    getSpecialShapeFields: K,
    // Extras Options Management
    extrasOptions: u,
    setExtrasOptionsFromPricing: Ve,
    getCentralizedOptions: Oe
  };
}
let yt = null;
function un(n = { numberFormat: "decimal" }) {
  return yt || (yt = zs(n)), yt;
}
const ye = U([]), Ks = 6;
function cn() {
  const n = ({
    message: e,
    type: l = "info",
    additional: c = [],
    options: f = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(c) || (console.warn("addNotice - additional must be an array"), c = []);
    const m = {
      id: crypto.randomUUID(),
      message: ft(e),
      additional: c.length > 5 ? c.slice(0, 5).map((F) => ft(F)).join("<br>") + "<br>..." : c.slice(0, 5).map((F) => ft(F)).join("<br>"),
      type: l,
      persistent: f.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, b = f.maxNotices ?? Ks;
    if (ye.value.length >= b) {
      const F = ye.value.findIndex((S) => !S.persistent);
      if (F !== -1)
        ye.value.splice(F, 1);
      else if (!m.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), m.id;
    }
    return ye.value.push(m), !m.persistent && f.timeout !== 0 && setTimeout(() => s(m.id), f.timeout || 6e3), m.id;
  }, s = (e) => {
    ye.value.findIndex((c) => c.id === e) !== -1 && (ye.value = ye.value.filter((c) => c.id !== e));
  };
  return {
    notices: ye,
    addNotice: n,
    dismissNotice: s
  };
}
const $t = U({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Js() {
  return {
    progress: $t,
    reset: () => {
      $t.value = {
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
const Rs = Fs(() => pt({
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
  l: Nt({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Nt({
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
    Ps(["n", "l", "w"]).default("n").optional(),
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
    He().default(!1),
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
      enabled: He().default(!1),
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
      enabled: He().default(!1),
      operations: _s(Ns()).optional()
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
    He().default(!1),
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
function Ws(n) {
  const s = Rs._def.getter();
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
class Qs {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(s, e) {
    const l = [], c = this.unwrapSchema(s);
    if (!this.isZodObject(c))
      return console.warn("Schema is not a ZodObject:", c), l;
    const f = c.shape;
    for (const [u, m] of Object.entries(f)) {
      if (u.startsWith("_") || this.isComputedField(m))
        continue;
      if (u === "trim" && this.isTrimField(m)) {
        const F = this.generateTrimFields(m);
        l.push(...F);
        continue;
      }
      const b = this.extractFieldMetadata(u, m);
      b && l.push(b);
    }
    return e?.sortByOrder ? l.sort((u, m) => (u.order || 999) - (m.order || 999)) : l;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(s, e) {
    let l = e._metadata;
    const c = this.unwrapField(e);
    if (l || (l = c._metadata), l) {
      if (l.hidden)
        return null;
      const b = {
        name: s,
        type: l.type || this.getFieldType(c),
        label: l.label || this.formatLabel(s),
        description: l.description,
        required: !this.isOptional(e),
        defaultValue: l.defaultValue ?? this.getDefaultValue(c),
        ...l
      };
      return this.extractTypeSpecificMetadata(b, c), b;
    }
    const f = c._def?.description, u = this.parseFieldDescription(f), m = {
      name: s,
      type: this.getFieldType(c),
      label: u.label || this.formatLabel(s),
      description: u.description,
      required: !this.isOptional(e),
      defaultValue: this.getDefaultValue(c),
      ...u
    };
    return this.extractTypeSpecificMetadata(m, c), m;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(s) {
    const e = this.unwrapField(s);
    if (e instanceof Pt) {
      const l = e._def?.options || [];
      for (const c of l)
        if (c instanceof Ye)
          return this.isIntegerNumber(c) ? "integer" : "number";
    }
    return e instanceof Ye ? this.isIntegerNumber(e) ? "integer" : "number" : e instanceof Vs ? "string" : e instanceof Ts ? "boolean" : e instanceof Et || e._def?.typeName === "ZodNativeEnum" ? "enum" : e instanceof $s ? "array" : e instanceof Xe ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(s, e) {
    const l = e;
    if (l.minValue !== void 0 && l.minValue !== -1 / 0) {
      s.min = l.minValue;
      const f = e._def?.checks?.find(
        (u) => u.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (f && l.minValue === 0) {
        const u = f._zod?.def?.inclusive ?? f.inclusive;
        s.allowZero = u === !0;
      } else
        s.allowZero = l.minValue === 0;
    }
    l.maxValue !== void 0 && l.maxValue !== 1 / 0 && (s.max = l.maxValue);
    const c = e._def?.checks || [];
    for (const f of c) {
      let u, m, b = !0;
      if (f.kind)
        u = f.kind, m = f.value, b = f.inclusive !== void 0 ? f.inclusive : !0;
      else if (f?._zod?.def) {
        const F = f._zod.def;
        u = F.check, m = F.value, b = F.inclusive !== void 0 ? F.inclusive : !0;
      } else
        continue;
      u === "min" || u === "greater_than" ? s.min === void 0 && (s.min = u === "greater_than" && !b ? m + 1e-6 : m, s.allowZero = s.min === 0) : u === "max" || u === "less_than" ? s.max === void 0 && (s.max = u === "less_than" && !b ? m - 1e-6 : m) : u === "int" && (s.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(s, e) {
    if (e instanceof Pt) {
      const l = e._def?.options || [];
      for (const c of l)
        if (c instanceof Ye) {
          this.extractNumberConstraints(s, c), s.type = "number";
          break;
        }
    } else e instanceof Ye && this.extractNumberConstraints(s, e);
    if (!s.options) {
      if (e instanceof Et) {
        const l = e._def?.values;
        Array.isArray(l) ? s.options = l.map((c) => ({
          value: c,
          label: this.formatLabel(String(c))
        })) : l ? s.options = Object.values(l).map((c) => ({
          value: c,
          label: this.formatLabel(String(c))
        })) : s.options = [];
      }
      if (e._def?.typeName === "ZodNativeEnum") {
        const l = e._def?.values || {};
        s.options = Object.entries(l).filter(([c]) => isNaN(Number(c))).map(([c, f]) => ({
          value: f,
          label: this.formatLabel(c)
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
      const c = l[2].split(",");
      for (const f of c) {
        const [u, m] = f.split(":").map((b) => b.trim());
        u === "group" && (e.group = m), u === "order" && (e.order = parseInt(m)), u === "units" && (e.units = m), u === "hidden" && (e.hidden = m === "true"), u === "readonly" && (e.readonly = m === "true"), u === "placeholder" && (e.placeholder = m);
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
    if (s instanceof ht || s instanceof vt)
      return !0;
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const e = s._def?.out, l = s._def?.in;
      if (e) {
        const c = this.isOptional(e);
        if (c) return c;
      }
      if (l) {
        const c = this.isOptional(l);
        if (c) return c;
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
    if (s instanceof ht || s instanceof vt)
      return this.unwrapField(s._def?.innerType);
    if (s instanceof mt || l === "ZodDefault")
      return this.unwrapField(s._def?.innerType);
    if (e === "ZodEffects")
      return this.unwrapField(s._def?.schema);
    if (l === "ZodPipe" || s._def?.type === "pipe") {
      const c = s._def?.out;
      if (c)
        return this.unwrapField(c);
    }
    return s;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(s) {
    if (s instanceof mt) {
      const e = s._def?.defaultValue;
      return typeof e == "function" ? e() : e;
    }
    if (s.constructor?.name === "ZodPipe" || s._def?.type === "pipe") {
      const e = s._def?.in;
      if (e)
        return this.getDefaultValue(e);
    }
    if (s instanceof ht || s instanceof vt) {
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
    for (const f of s)
      f.group ? (e.has(f.group) || e.set(f.group, []), e.get(f.group).push(f)) : l.push(f);
    const c = [];
    return e.forEach((f, u) => {
      c.push({
        name: u,
        label: this.formatLabel(u),
        fields: f.sort((m, b) => (m.order || 999) - (b.order || 999))
      });
    }), l.length > 0 && c.push({
      name: "general",
      label: "General",
      fields: l.sort((f, u) => (f.order || 999) - (u.order || 999))
    }), c.sort((f, u) => (f.order || 999) - (u.order || 999));
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
    const c = l.shape, f = ["l1", "l2", "w1", "w2"];
    for (const u of f)
      if (u in c) {
        const m = c[u], b = this.extractFieldMetadata(`trim.${u}`, m);
        b && (b.propertyPath = `trim.${u}`, b.name = `trim.${u}`, b.group || (b.group = "trim"), e.push(b));
      }
    return e;
  }
}
const jt = new Qs();
function Hs(n, s = {}) {
  const e = U([]), l = U([]), c = U(/* @__PURE__ */ new Map()), f = U(/* @__PURE__ */ new Map()), u = (C) => {
    let w = jt.generateFields(n);
    s.overrides && (w = w.map((_) => {
      const q = s.overrides[_.name];
      if (q) {
        const M = { ..._, ...q };
        return q.min === void 0 && _.min !== void 0 && (M.min = _.min), q.max === void 0 && _.max !== void 0 && (M.max = _.max), M;
      }
      return _;
    })), f.value.clear();
    for (const _ of w)
      f.value.set(_.name, _);
    const O = C || s.allowedFieldIds;
    if (O && O.length > 0) {
      const _ = O, q = /* @__PURE__ */ new Map();
      for (const H of w)
        q.set(H.name, H);
      const M = [];
      for (const H of _) {
        const $ = q.get(H);
        $ && M.push($);
      }
      w = M;
    }
    s.filter && (w = w.filter(s.filter)), e.value = w, c.value.clear();
    for (const _ of w)
      c.value.set(_.name, _);
    s.grouped && (l.value = jt.groupFields(w));
  };
  u();
  const m = (C) => c.value.get(C), b = (C) => f.value.get(C), F = () => f.value, S = (C, w) => {
    const O = c.value.get(C);
    O && Object.assign(O, w);
  }, L = (C) => {
    const w = m(C);
    return !(!w || w.hidden);
  }, V = (C) => {
    const w = m(C);
    if (!w) return {};
    const O = {};
    return w.required && (O.required = !0), w.type === "number" && (w.min !== void 0 && (O.min = w.min), w.max !== void 0 && (O.max = w.max)), O;
  };
  return {
    fields: A(() => e.value),
    groups: A(() => l.value),
    fieldMap: A(() => c.value),
    allFieldsMap: A(() => f.value),
    getField: m,
    getFieldMetadata: b,
    getAllFieldMetadata: F,
    updateField: S,
    isFieldVisible: L,
    getFieldValidation: V,
    regenerateFields: u
  };
}
function fn(n) {
  const { stockType: s, materials: e = [], minDimension: l = 0 } = n, c = Ws(s), f = {
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
  return e.length > 0 && (f.material = {
    ...f.material,
    type: "enum",
    options: e.map((u) => ({ value: u.name, label: u.name })),
    defaultValue: e[0]?.name
  }), Hs(c, {
    ...n,
    overrides: { ...f, ...n.overrides }
  });
}
const { progress: Ne, reset: Mt } = Js();
function pn(n) {
  const s = "https://api.cutlistevo.com/";
  let e;
  const l = () => {
    e = js(s, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), e.on("connect", () => {
      n.refs?.connected && (n.refs.connected.value = !0), n.callbacks?.onConnect?.();
    }), e.on("connect_error", (u) => {
      n.refs?.connected && (n.refs.connected.value = !1), n.refs?.thinking && (n.refs.thinking.value = !1), n.callbacks?.onConnectError?.(u);
    }), e.on("connect_timeout", (u) => {
      n.refs?.connected && (n.refs.connected.value = !1), n.refs?.thinking && (n.refs.thinking.value = !1), n.callbacks?.onConnectError?.(u);
    }), e.on("result", (u) => {
      Ne.value.complete = !0, n.callbacks?.onResult?.(u), e.disconnect();
    }), e.on("queued", () => {
      Mt(), Ne.value.queued = !0;
    }), e.on("started", () => {
      Ne.value.started = !0;
    }), e.on("progress", (u) => {
      u?.data?.message === "result" ? Ne.value.resultCount++ : (Ne.value.stockCount = u.data.stockCount, Ne.value.shapeCount = u.data.shapeCount);
    }), e.on("user", (u) => {
      n.callbacks?.onUser?.(u);
    }), e.on("error", (u) => {
      n.refs?.thinking && (n.refs.thinking.value = !1), Mt(), n.callbacks?.onError?.(u);
    });
  }, c = () => e?.disconnect(), f = () => e?.connect();
  return l(), {
    socket: e,
    connect: f,
    disconnect: c
  };
}
const Jt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Ys = (n) => Jt.includes(n);
function dn(n, s) {
  const e = (S) => {
    s.log?.(S);
  }, l = (S) => (s.error?.(S), { success: !1, error: S }), c = () => {
    for (const S of Jt) f(S, 0);
  }, f = (S, L) => {
    e(["setting price", S, L]);
    const { inputs: V, elements: C, setInputValue: w, formatPrice: O } = s;
    if (isNaN(L)) throw new Error("Price must be a number");
    if (!Ys(S)) return;
    const q = {
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
    }[S];
    q?.hidden && V[q.hidden] && (e(["setting hidden price", q.hidden, L]), w(q.hidden, L)), q?.visible && C[q.visible] && (C[q.visible].innerText = O(L));
  }, u = (S) => {
    const { product: L, getCurrentVariationPrice: V, isQuantityPricing: C, enableAddToCart: w, setCartQuantity: O } = s;
    let _ = L?.price || V(!0) || 0;
    typeof _ == "string" && (_ = parseFloat(_));
    const q = n.unit_system === "imperial" ? "feet" : "meters", H = {
      full_stock: (J) => {
        if (e(["calculating cost by full sheet"]), !C()) {
          const W = J.metadata.totalStockCost;
          return f("stock", W), W;
        }
        return C() && O(J.metadata.totalUsedStock), 0;
      },
      part_area: (J) => {
        e([`calculating cost by part area in square ${q}`]);
        const W = n.unit_system === "imperial" ? 144 : 1e6, N = J.metadata.totalPartArea / W, G = N * _;
        f("partArea", G), e([`part area price in square ${q} is ${N} (part area) * ${_} (product price) = ${G}`]);
        let R = G;
        if (n?.enable_offcut_pricing && J?.offcuts) {
          const ne = J?.offcuts.reduce((oe, Y) => {
            const ue = Y.l >= Y.w ? Y.l : Y.w, ce = Y.l >= Y.w ? Y.w : Y.l;
            return ue < n.offcut_min_length || ce < n.offcut_min_width ? oe + ue * ce : oe;
          }, 0) / W, ae = ne * _;
          f("offcutArea", ae), e([`calculated sellable offcut area as ${ne} square ${q}, with price ${ae}`]), R += ae;
        }
        if (e([`calculated total price as ${R}`]), C()) {
          const z = R / _;
          return e([`setting cart quantity to ${z}`]), O(z, 2), 0;
        } else
          return R;
      },
      cut_length: (J) => {
        e([`calculating cost by cut length in  ${q}`]);
        const W = n.unit_system === "imperial" ? 12 : 1e3, N = J.metadata.totalCutLength / W;
        return O(N, 2), 0;
      },
      full_stock_plus_cut_length: (J) => {
        e(["calculating cost by full sheet plus cut length"]);
        let W = 0;
        const N = J.metadata.totalStockCost;
        f("stock", N), W = N, C() && O(J.metadata.totalUsedStock);
        const G = n.unit_system === "imperial" ? 12 : 1e3, z = J.metadata.totalCutLength / G * n.cut_length_price;
        return f("cutLength", z), W + z;
      },
      full_stock_plus_num_parts: (J) => {
        e(["calculating cost by full sheet plus number of parts"]);
        let W = 0;
        const N = J.metadata.totalStockCost;
        f("stock", N), W = N, C() && O(J.metadata.totalUsedStock);
        const G = J.metadata.totalPartsProduced * n.per_part_price;
        return f("perPart", G), W + G;
      },
      roll_length: (J) => {
        e([`calculating cost by roll length in ${q}`]);
        const W = n.unit_system === "imperial" ? 12 : 1e3, N = J.stock.reduce((G, R) => G + R.analysis.rollLength / W * Cs({ v: R.cost }), 0);
        return f("rollLength", N), N;
      }
    }[n.pricing_strategy], $ = H(S);
    return w(), $;
  }, m = (S) => {
    const {
      isExtraEnabled: L,
      isMachiningEnabled: V,
      isSurchargeEnabled: C,
      inputType: w,
      getTotalBandingPrice: O,
      getTotalFinishPrice: _,
      getTotalMachiningPrice: q,
      getInputValue: M
    } = s;
    let H = 0;
    if (L("banding") && S.metadata.bandingLengthByType) {
      const $ = O(S.metadata.bandingLengthByType);
      f("banding", $), H += $;
    }
    if (L("finish") && S.metadata.finishAreaByType) {
      const $ = _(S.metadata.finishAreaByType);
      f("finish", $), H += $;
    }
    if (w.value === "formula") {
      const $ = parseFloat(M("smartcut-hardware-price"));
      isNaN($) || (H += $);
    }
    if (V()) {
      const $ = q(S);
      f("machining", $), H += $;
    }
    if (C() && n.surcharge) {
      const $ = n.surcharge_type === "per_sheet" ? parseFloat(n.surcharge.toString()) * S.metadata.totalUsedStock : parseFloat(n.surcharge.toString());
      f("surcharge", $), e(["added surcharge", $]), H += $;
    }
    return H;
  }, b = (S) => {
    const { getInputValue: L, setInputValue: V } = s, C = {
      "smartcut-job-id": S.jobId,
      "smartcut-dimensions": S.parts.map((w) => `${w.l}x${w.w} [${w.q}]`).join(", "),
      "smartcut-total-cut-length": S.metadata.totalCutLength,
      "smartcut-part-area": S.metadata.totalPartArea,
      "smartcut-total-cuts": S.metadata.totalCuts,
      "smartcut-total-parts": S.metadata.totalPartsProduced,
      "smartcut-machining": S.metadata.hasMachining
    };
    if (Object.entries(C).forEach(([w, O]) => {
      L(w) !== void 0 && V(w, O);
    }), L("smartcut-stock-summary") !== void 0) {
      const w = S.stock.map((O) => `${O.l}x${O.w}${O.t ? "x" + O.t : ""} [${O.q}]`).join(", ");
      V("smartcut-stock-summary", w);
    }
  };
  return {
    calculatePrice: async (S) => {
      c();
      const { isQuantityPricing: L, selectedVariation: V, setVariationPrice: C, setCartQuantity: w } = s;
      if (!S?.jobId)
        return l("No job ID provided");
      L() || w(1);
      let O = u(S);
      const _ = m(S);
      if (O += _, L()) {
        const q = S.metadata.totalUsedStock, M = O / q;
        f("custom", M);
      } else {
        if (!S.metadata.totalStockCost)
          return l("Total stock cost not returned for a multiple size product");
        e([`total cost is ${O}`]), f("custom", O);
      }
      return V.value && C(O), b(S), { success: !0, totalPrice: O };
    },
    resetPricing: c
  };
}
function gn(n) {
  const {
    stockOptions: s,
    config: e,
    initialState: l,
    numberFormat: c = U("decimal")
  } = n, f = U(l?.activeFilters || []), u = U(l?.searchQuery || ""), m = U(l?.sortBy || e?.value?.defaultSort.field || "cost"), b = U(l?.sortOrder || e?.value?.defaultSort.order || "asc"), F = U(l?.displayMode || e?.value?.displayMode || "grid"), S = U(l?.currentPage || 1), L = U([]);
  function V(d, k) {
    return k.split(".").reduce((j, B) => j?.[B], d);
  }
  function C(d, k) {
    return typeof d == "object" && d !== null && typeof k == "object" && k !== null && "hex" in d && "hex" in k ? d.hex === k.hex : d === k;
  }
  function w(d, k) {
    const j = V(d, k.field);
    switch (k.type) {
      case "select":
        return C(j, k.value);
      case "multiselect":
        return Array.isArray(k.value) ? k.value.some((B) => C(j, B)) : C(j, k.value);
      case "range":
        if (k.value && typeof k.value == "object") {
          const { min: B, max: K } = k.value, X = Number(j);
          return !(isNaN(X) || B !== void 0 && X < B || K !== void 0 && X > K);
        }
        return !1;
      case "boolean":
        return !!j == !!k.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function O(d, k) {
    if (!k.trim()) return !0;
    const j = k.toLowerCase();
    return [
      d.name,
      d.material,
      d.description,
      d.category,
      ...d.tags || []
    ].some((K) => K && String(K).toLowerCase().includes(j));
  }
  const _ = A(() => {
    let d = [...s.value];
    u.value && (d = d.filter((k) => O(k, u.value)));
    for (const k of f.value)
      d = d.filter((j) => w(j, k));
    return d;
  }), q = A(() => {
    const d = [..._.value];
    return d.sort((k, j) => {
      const B = V(k, m.value), K = V(j, m.value);
      if (B == null && K == null) return 0;
      if (B == null) return 1;
      if (K == null) return -1;
      let X = 0;
      return typeof B == "string" && typeof K == "string" ? X = B.localeCompare(K) : typeof B == "number" && typeof K == "number" ? X = B - K : X = String(B).localeCompare(String(K)), b.value === "asc" ? X : -X;
    }), d;
  }), M = A(() => {
    const d = e?.value?.itemsPerPage || 20, k = (S.value - 1) * d, j = k + d;
    return q.value.slice(k, j);
  }), H = A(() => {
    const d = e?.value?.itemsPerPage || 20;
    return Math.ceil(q.value.length / d);
  });
  function $(d, k, j = "select") {
    J(d), f.value.push({ field: d, value: k, type: j }), S.value = 1;
  }
  function J(d) {
    f.value = f.value.filter((k) => k.field !== d);
  }
  function W() {
    f.value = [], u.value = "", S.value = 1;
  }
  function N(d, k) {
    m.value = d, k ? b.value = k : b.value = b.value === "asc" ? "desc" : "asc", S.value = 1;
  }
  function G(d) {
    u.value = d, S.value = 1;
  }
  function R(d) {
    d >= 1 && d <= H.value && (S.value = d);
  }
  function z(d) {
    const k = d.id || `${d.material}-${d.l}-${d.w}-${d.t}`, j = L.value.indexOf(k);
    return j === -1 ? e?.value?.maxSelection && L.value.length >= e.value.maxSelection ? !1 : (L.value.push(k), !0) : (L.value.splice(j, 1), !1);
  }
  function ne(d) {
    const k = d.id || `${d.material}-${d.l}-${d.w}-${d.t}`;
    return L.value.includes(k);
  }
  const ae = A(() => s.value.filter((d) => ne(d)));
  function oe() {
    L.value = [];
  }
  function Y(d) {
    const {
      ...k
    } = d;
    return new tt(k, c.value);
  }
  function ue(d) {
    if (d === "color") {
      const j = /* @__PURE__ */ new Map();
      return s.value.forEach((B) => {
        const K = V(B, d);
        K != null && (typeof K == "object" && "hex" in K ? j.has(K.hex) || j.set(K.hex, K) : typeof K == "string" && (j.has(K) || j.set(K, K)));
      }), Array.from(j.values()).sort((B, K) => {
        const X = typeof B == "object" && "name" in B ? B.name : String(B), we = typeof K == "object" && "name" in K ? K.name : String(K);
        return X.localeCompare(we);
      });
    }
    const k = /* @__PURE__ */ new Set();
    return s.value.forEach((j) => {
      const B = V(j, d);
      B != null && k.add(B);
    }), Array.from(k).sort();
  }
  function ce(d) {
    const k = s.value.map((j) => Number(V(j, d))).filter((j) => !isNaN(j));
    return k.length === 0 ? null : {
      min: Math.min(...k),
      max: Math.max(...k)
    };
  }
  const I = A(() => ({
    activeFilters: f.value,
    searchQuery: u.value,
    sortBy: m.value,
    sortOrder: b.value,
    displayMode: F.value,
    currentPage: S.value,
    selectedStockIds: L.value
  }));
  return {
    // State
    activeFilters: f,
    searchQuery: u,
    sortBy: m,
    sortOrder: b,
    displayMode: F,
    currentPage: S,
    selectedStockIds: L,
    // Computed
    filteredStock: _,
    sortedStock: q,
    paginatedStock: M,
    selectedStock: ae,
    totalPages: H,
    currentState: I,
    // Methods
    applyFilter: $,
    removeFilter: J,
    clearFilters: W,
    updateSort: N,
    updateSearch: G,
    goToPage: R,
    toggleStockSelection: z,
    isStockSelected: ne,
    clearSelection: oe,
    createInputStock: Y,
    getUniqueValues: ue,
    getFieldRange: ce
  };
}
export {
  rn as a,
  an as b,
  on as c,
  ln as d,
  cn as e,
  un as f,
  pn as g,
  fn as h,
  Js as i,
  gn as j,
  dn as k,
  nn as u
};
