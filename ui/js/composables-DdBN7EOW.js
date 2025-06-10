import { g as O, G as Y, h as L, E as W, S as V, i as mt } from "./vendor-vue-BJVDXAuG.js";
import { I as at, a as Z, u as rt, b as X, t as st, s as gt, S as kt, m as St, c as Lt, g as yt, r as nt, d as D, e as It, f as wt, h as ct, i as it, j as ot, k as lt, l as ut, n as dt, o as bt, p as Tt } from "./components-Dr96Upxc.js";
import { p as ft, m as _t } from "./vendor-BJAM8w7x.js";
let tt = null;
function Ct(t = { numberFormat: "decimal" }) {
  const m = O(null), c = () => {
    const a = localStorage.getItem("GlobalStore/inputStock"), r = localStorage.getItem("GlobalStore/inputShapes");
    let d = [], e = [];
    if (a)
      try {
        const s = JSON.parse(a);
        s.length && (d = s), localStorage.removeItem("GlobalStore/inputStock");
      } catch (s) {
        console.error("Error migrating stock data:", s);
      }
    if (r)
      try {
        const s = JSON.parse(r);
        s.length && (e = s), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (s) {
        console.error("Error migrating shapes data:", s);
      }
    return { migratedStock: d, migratedShapes: e };
  }, { migratedStock: b, migratedShapes: I } = c(), o = Y("inputs/inputStock", b, {
    serializer: {
      read: (a) => {
        const r = a ? JSON.parse(a) : [];
        return x(r, t.numberFormat);
      },
      write: (a) => {
        const r = a.filter((d) => !(d != null && d.multiEdit));
        return JSON.stringify(r);
      }
    },
    listenToStorageChanges: !1
  }), u = Y("inputs/inputShapes", I, {
    serializer: {
      read: (a) => {
        const r = a ? JSON.parse(a) : [];
        return S(r, t.numberFormat);
      },
      write: (a) => {
        const r = a.filter((d) => !(d != null && d.multiEdit));
        return JSON.stringify(r);
      }
    },
    listenToStorageChanges: !1
  }), l = Y("groups/userGroups", [], {
    serializer: {
      read: (a) => {
        const r = a ? JSON.parse(a) : [];
        return nt(r);
      },
      write: (a) => JSON.stringify(a)
    },
    listenToStorageChanges: !1
  }), h = O(null), g = L(() => u.value.reduce((a, r) => r != null && r.q && r.q > 0 && !(r != null && r.multiEdit) ? a + r.q : a, 0)), i = L(() => u.value.reduce((a, r) => r != null && r.multiEdit ? a : a + 1, 0)), p = L(() => o.value.reduce((a, r) => r != null && r.q && r.q > 0 && !(r != null && r.multiEdit) ? a + r.q : a, 0)), E = L(() => o.value.reduce((a, r) => r != null && r.multiEdit ? a : a + 1, 0)), _ = (a, r = "decimal") => {
    const d = (a == null ? void 0 : a.parts) || (a == null ? void 0 : a.shapeList), e = (a == null ? void 0 : a.stock) || (a == null ? void 0 : a.stockList), s = (a == null ? void 0 : a.groups) || (a == null ? void 0 : a.userGroups);
    if (d && y(d, r), e && v(e, r), s)
      try {
        l.value = nt(s, u.value);
      } catch (n) {
        console.error("Error updating user groups:", n);
      }
  }, y = (a, r = "decimal") => {
    try {
      u.value = S(a, r);
    } catch (d) {
      console.error("Error updating input shapes:", d);
    }
  }, v = (a, r = "decimal") => {
    try {
      o.value = x(a, r);
    } catch (d) {
      console.error("Error updating input stock:", d);
    }
  };
  function x(a, r = "decimal") {
    return a.map((d) => (delete d.id, new at(d, r)));
  }
  function S(a, r = "decimal") {
    return !a || !(a != null && a.length) ? [] : a.map((d) => (delete d.id, new Z(d, r)));
  }
  const M = () => {
    h.value = null;
  }, $ = () => {
    u.value = [], o.value = [], l.value = [];
  }, w = (a = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0,
    inputShapesOverride: null
  }) => {
    const r = a.inputShapesOverride ?? u.value;
    if (!r.length)
      return { shapeList: [], issues: [] };
    const d = [], e = [];
    for (let s = 0; s < r.length; s++) {
      const n = r[s];
      if (!(n != null && n.q)) continue;
      const f = ["name", "material", "notes"];
      for (const J of f)
        J in n && (n[J] = ft.sanitize(n[J]));
      n.createId(s), n.applyPartTrim(a.trim, a.stockType);
      const T = { ...n };
      St(T, a.orientationModel);
      const q = new Lt(T);
      q.trimDimensions(), a.minSpacing && a.maxDimension && (q.l <= a.maxDimension || q.w <= a.maxDimension) && (q.minSpacing = a.minSpacing), e.push(q), d.push(...q.issues);
    }
    return { shapeList: e, issues: d };
  }, k = (a) => {
    if (!o.value.length)
      return { stockList: [], issues: [] };
    const r = [], d = [];
    for (let e = 0; e < o.value.length; e++) {
      const s = o.value[e];
      if (!(s != null && s.q) && !s.autoAdd) continue;
      const n = ["name", "material", "notes"];
      for (const T of n)
        T in s && (s[T] = ft.sanitize(s[T]));
      s.createId(e);
      const f = new kt(s, a);
      r.push(...f.issues), d.push(f);
    }
    return { stockList: d, issues: r };
  }, C = (a = null) => {
    var s;
    const r = [], d = st(o.value);
    if (!o.value.some((n) => n.autoAdd) && (!((s = o.value) != null && s.length) || !d))
      return new X({
        category: ["stock"],
        message: "errors.validation.no_stock",
        listId: o.value.map((n) => n.listId),
        field: [["q"]],
        issues: r
      }), r;
    let e = 0;
    for (const n of o.value)
      r.push(...n.validate(a, e)), e++;
    return r;
  }, P = (a = null) => {
    var et;
    const {
      saw: r = null,
      partTrim: d = 0,
      useInventory: e = !1,
      inputShapesOverride: s = null
    } = a || {}, n = [], f = s ?? u.value;
    if (!f.length)
      return new X({
        category: ["part"],
        message: "errors.validation.no_parts",
        issues: n
      }), n;
    if (!st(f))
      return new X({
        category: ["part"],
        message: "errors.validation.no_parts",
        issues: n
      }), f.forEach((H) => new X({
        category: ["part"],
        message: "errors.validation.no_parts",
        field: [["q"]],
        item: H
      })), n;
    let q = 0;
    for (const H of f)
      n.push(...H.validate({
        inputStockList: o.value,
        index: q,
        stockType: r !== null ? r.stockType ?? null : null,
        partTrim: d,
        useInventory: e,
        saw: r
      })), q++;
    return n.length ? n : (gt(f, (et = A == null ? void 0 : A.inputStock) == null ? void 0 : et.value, r !== null ? r.stockType ?? null : null), f.flatMap((H) => H.issues));
  }, N = (a) => {
    if (!o.value.length) return "n";
    const r = a.material, d = a.t, e = o.value.filter((n) => n.material === r && n.t === d);
    return e.length ? yt(e) : "n";
  }, G = (a) => {
    for (const r of u.value)
      rt(r, a);
    for (const r of o.value)
      rt(r, a);
  }, F = () => {
    u.value.forEach((a) => a.issues = []), o.value.forEach((a) => a.issues = []);
  }, B = ({
    stock: a = !0,
    shapes: r = !0
  }) => {
    a && (o.value = [
      new at({
        l: 2440,
        w: 1220,
        q: 1
      })
    ]), r && (u.value = [
      new Z({
        l: 500,
        w: 500,
        q: 1
      }),
      new Z({
        l: 400,
        w: 400,
        q: 1
      })
    ]);
  }, U = (a) => {
    if (o.value.length === 1) return;
    const r = o.value.findIndex((d) => d.listId === a);
    r !== -1 && o.value.splice(r, 1);
  }, Q = (a) => {
    if (u.value.length === 1) return;
    const r = u.value.findIndex((d) => d.listId === a);
    r !== -1 && u.value.splice(r, 1);
  }, A = {
    inputStock: o,
    inputShapes: u,
    userGroups: l,
    currentInputShape: h,
    selectedSaw: m
  };
  return {
    inputs: A,
    inputStock: o,
    inputShapes: u,
    userGroups: l,
    currentInputShape: h,
    selectedSaw: m,
    totalInputShapes: g,
    totalInputStock: p,
    totalInputShapeLines: i,
    totalInputStockLines: E,
    reset: M,
    clear: $,
    clearIssues: F,
    updateInputs: _,
    updateInputShapes: y,
    updateInputStock: v,
    getShapeGrainSummary: N,
    createShapeList: w,
    createStockList: k,
    validateInputStock: C,
    validateInputShapes: P,
    updateNumberFormat: G,
    createTestData: B,
    removeStock: U,
    removeShape: Q
  };
}
function Gt(t = { numberFormat: "decimal" }) {
  return tt || (tt = Ct(t)), tt;
}
const R = O([]), xt = 6;
function Ot() {
  const t = ({
    message: c,
    type: b = "info",
    additional: I = [],
    options: o = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(I) || (console.warn("addNotice - additional must be an array"), I = []);
    const l = {
      id: crypto.randomUUID(),
      message: D(c),
      additional: I.length > 5 ? I.slice(0, 5).map((g) => D(g)).join("<br>") + "<br>..." : I.slice(0, 5).map((g) => D(g)).join("<br>"),
      type: b,
      persistent: o.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, h = o.maxNotices ?? xt;
    if (R.value.length >= h) {
      const g = R.value.findIndex((i) => !i.persistent);
      if (g !== -1)
        R.value.splice(g, 1);
      else if (!l.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), l.id;
    }
    return R.value.push(l), !l.persistent && o.timeout !== 0 && setTimeout(() => m(l.id), o.timeout || 6e3), l.id;
  }, m = (c) => {
    R.value.findIndex((I) => I.id === c) !== -1 && (R.value = R.value.filter((I) => I.id !== c));
  };
  return {
    notices: R,
    addNotice: t,
    dismissNotice: m
  };
}
let K = null;
function Pt() {
  const t = O(null), m = O(null), c = O(null), b = W([]), I = W([]), o = W([]), u = W([]), l = O([]), h = O(null), g = W([]), i = O(null), p = O(null);
  return {
    // All state
    jobId: t,
    saw: m,
    activeStockId: c,
    shapeList: b,
    stockList: I,
    cutList: o,
    segmentList: u,
    offcuts: l,
    metadata: h,
    unusableShapes: g,
    currentCutIndex: i,
    activeShape: p,
    r: {
      saw: m,
      activeStockId: c,
      jobId: t,
      shapeList: b,
      stockList: I,
      cutList: o,
      segmentList: u,
      offcuts: l,
      unusableShapes: g,
      metadata: h,
      currentCutIndex: i
    }
  };
}
function Ft() {
  if (K) return K;
  const t = Pt(), m = L(() => t.activeStockId.value ? U(t.activeStockId.value) : []), c = L(() => {
    var e;
    return !t.activeStockId.value || !((e = t.stockList.value) != null && e.length) ? null : B(t.activeStockId.value);
  }), b = L(() => {
    var s;
    return !c.value || !((s = t.cutList.value) != null && s.length) ? [] : A(c.value.id);
  }), I = L(() => {
    var e;
    return !c.value || !((e = t.segmentList.value) != null && e.length) ? [] : Q(t.activeStockId.value);
  }), o = L(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? a(t.stockList.value) : [];
  }), u = L(() => t.shapeList.value.filter((e) => e.added)), l = L(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? t.shapeList.value.filter((s) => !s.added) : [];
  }), h = L(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? It(t.shapeList.value) : [];
  }), g = L(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? t.shapeList.value.filter((s) => !s.duplicate) : [];
  }), i = L(() => g.value.filter((e) => e.added)), p = L(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? t.stockList.value.filter((s) => s.used && !s.duplicate) : [];
  }), E = L(() => p.value.filter((e) => e.used)), _ = L(() => {
    var e;
    return (e = t.cutList.value) != null && e.length ? b.value.reduce((s, n) => s + n.getArea(), 0) : 0;
  }), y = L(() => {
    var e;
    return !((e = t.stockList.value) != null && e.length) || !c.value ? 0 : c.value ? c.value.getArea() : 0;
  }), v = L(() => {
    var e;
    return !((e = t.shapeList.value) != null && e.length) || !m.value ? 0 : m.value ? m.value.reduce((s, n) => s + n.getArea(), 0) : 0;
  }), x = L(() => {
    var e;
    return !((e = t.cutList.value) != null && e.length) || !c.value ? null : c.value.cutType;
  }), S = L(() => {
    var s;
    return (s = t.stockList.value) != null && s.length ? t.stockList.value.filter((n) => n.used && (n.stack === !1 || typeof n.stack == "number")) : [];
  }), M = L(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? wt(c.value, t.stockList.value) : 0;
  }), $ = L(() => {
    var s;
    if (!((s = t.stockList.value) != null && s.length)) return 0;
    let e = y.value ? (_.value + v.value) / y.value : null;
    return e > 1 && (e = 1), e;
  }), w = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, k = () => {
    t.saw.value = null, t.activeStockId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [];
  }, C = (e, s) => {
    var n;
    e in this && ((n = this[e]) == null || n.sort(bt[s]));
  }, P = (e) => {
    V(e);
  }, N = () => {
    V(t.shapeList);
  }, G = () => {
    V(t.stockList);
  }, F = (e) => {
    var s, n, f, T;
    if (!((s = e == null ? void 0 : e.shapeList) != null && s.some((q) => q.added))) {
      k();
      return;
    }
    t.metadata.value = e.metadata, t.unusableShapes.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (t.saw.value = new ct(
        e == null ? void 0 : e.saw,
        (n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType
      )), t.stockList.value = it({
        saw: t.saw.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), t.shapeList.value = ot({
        shapeList: e.shapeList,
        stockList: t.stockList.value,
        preventAutoRotation: !0
      }), t.cutList.value = ut({
        cutList: e.cutList,
        stockList: t.stockList.value
      }), t.segmentList.value = lt({
        segmentList: e.segmentList,
        stockList: t.stockList.value
      }), t.offcuts.value = dt({
        offcuts: e.offcuts,
        stockList: t.stockList.value,
        preventAutoRotation: !0
      }), V(t.stockList), V(t.shapeList), V(t.cutList), V(t.segmentList), t.activeStockId.value = ((T = (f = a(t.stockList.value)) == null ? void 0 : f[0]) == null ? void 0 : T.id) || null;
    } catch (q) {
      console.error("Error updating from result", q);
    }
  }, B = (e) => {
    var s;
    return (s = t.stockList.value) != null && s.length ? t.stockList.value.find((n) => n.id === e) : null;
  }, U = (e) => {
    var s;
    return (s = t.shapeList.value) != null && s.length ? t.shapeList.value.filter((n) => {
      var f;
      return (((f = n == null ? void 0 : n.stock) == null ? void 0 : f.id) ?? (n == null ? void 0 : n.stockId)) === e;
    }) : [];
  }, Q = (e) => {
    var n;
    return (n = t.segmentList.value) != null && n.length ? t.segmentList.value.filter((f) => {
      var T;
      return (((T = f == null ? void 0 : f.stock) == null ? void 0 : T.id) ?? (f == null ? void 0 : f.stockId)) === e;
    }) : [];
  }, A = (e) => {
    var n;
    const s = (n = t == null ? void 0 : t.cutList) == null ? void 0 : n.value;
    return !s && !s.length ? [] : s.filter((f) => {
      var T;
      return (((T = f == null ? void 0 : f.stock) == null ? void 0 : T.id) ?? (f == null ? void 0 : f.stockId)) === e;
    }).sort((f, T) => {
      var q, J;
      return ((q = f == null ? void 0 : f.guillotineData) == null ? void 0 : q.order) - ((J = T == null ? void 0 : T.guillotineData) == null ? void 0 : J.order);
    });
  }, a = (e) => e != null && e.length ? e.filter((s) => s.used === !0) : [], r = (e) => {
    t.activeStockId.value !== e && (t.activeShape.value = null, t.activeStockId.value = e);
  }, d = () => {
    t.saw.value = new ct({
      bladeWidth: 1,
      stockType: "sheet",
      cutType: "guillotine",
      cutPreference: "l"
    }), t.stockList.value = it({
      saw: t.saw.value,
      stockList: [
        { id: "1.0", used: !0, l: 2440, w: 1220, q: 1 }
      ]
    }), t.shapeList.value = ot({
      shapeList: [
        { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
        { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
      ],
      stockList: t.stockList.value,
      preventAutoRotation: !0
    }), t.segmentList.value = lt({
      segmentList: [
        { id: "153", x: 0, y: 0, l: 2440, w: 1220, phase: 0, cutDirection: "l" },
        { id: "154", x: 0, y: 0, l: 2440, w: 500, phase: 1, cutDirection: "w" },
        { id: "155", x: 0, y: 0, l: 500, w: 500, phase: 2, cutDirection: "l" },
        { id: "157", x: 501, y: 0, l: 400, w: 500, phase: 2, cutDirection: "l" },
        { id: "158", x: 501, y: 0, l: 400, w: 400, phase: 3, cutDirection: "w" },
        { id: "159", x: 501, y: 401, l: 400, w: 99, phase: 3, cutDirection: "w" },
        { id: "160", x: 902, y: 0, l: 1538, w: 500, phase: 2, cutDirection: "l" },
        { id: "161", x: 0, y: 501, l: 2440, w: 719, phase: 1, cutDirection: "w" }
      ],
      stockList: t.stockList.value
    }), t.cutList.value = ut({
      cutList: [
        { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, isGuillotine: !0 },
        { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, isGuillotine: !0 },
        { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, isGuillotine: !0 },
        { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, isGuillotine: !0 }
      ],
      stockList: t.stockList.value
    }), t.offcuts.value = dt({
      offcuts: [
        { stockId: "1.0", id: "1", x: 501, y: 401, l: 400, w: 99, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 0 },
        { stockId: "1.0", id: "2", x: 902, y: 0, l: 1538, w: 500, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 1 },
        { stockId: "1.0", id: "3", x: 0, y: 501, l: 2440, w: 719, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 2 }
      ],
      stockList: t.stockList.value,
      preventAutoRotation: !0
    }), t.metadata.value = {
      totalBandingLength: 0,
      bandingLengthByType: {},
      totalFinishArea: 0,
      finishAreaByType: {},
      materialSummary: { "N/A": {} },
      usedStockTally: { 1: 1 },
      addedPartTally: { 1: 1, 2: 1 },
      stockAreaCost: 0,
      hasMachining: !1,
      numHoles: 0,
      numCorners: 0,
      totalCutLength: 3840,
      totalStackedCutLength: 3840,
      totalCuts: 4,
      totalStackedCuts: 4,
      totalStockCost: 0,
      totalEfficiency: 0.1377317925288901,
      totalPartArea: 41e4,
      totalStockArea: 2976800,
      totalPartsProduced: 2,
      totalUsedStock: 1,
      totalRollLength: 0,
      unplacedParts: []
    };
  };
  return K = {
    // all result items for convenience
    r: t.r,
    // state
    activeStockId: t.activeStockId,
    saw: t.saw,
    shapeList: t.shapeList,
    stockList: t.stockList,
    cutList: t.cutList,
    segmentList: t.segmentList,
    offcuts: t.offcuts,
    unusableShapes: t.unusableShapes,
    currentCutIndex: t.currentCutIndex,
    activeShape: t.activeShape,
    // computed
    addedShapes: u,
    activeShapes: m,
    unplacedShapes: l,
    uniqueShapes: g,
    uniqueAddedShapes: i,
    unplacedShapeTally: h,
    uniqueStock: p,
    uniqueUsedStock: E,
    activeStock: c,
    activeCuts: b,
    activeCutsArea: _,
    activeCutType: x,
    usedStock: o,
    stackedStock: S,
    activeStockArea: y,
    activeShapeArea: v,
    activeStockStackCount: M,
    activeTotalArea: $,
    activeSegments: I,
    // methods
    reset: w,
    clear: k,
    sortItems: C,
    update: P,
    updateShapes: N,
    updateStock: G,
    updateFromResult: F,
    getStock: B,
    getShapes: U,
    getSegments: Q,
    getCuts: A,
    setActiveStockId: r,
    // testing
    createTestData: d
  }, K;
}
const ht = O({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function At() {
  return {
    progress: ht,
    reset: () => {
      ht.value = {
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
const { progress: j, reset: pt } = At();
function Mt(t) {
  const m = "https://api.cutlistevo.com/";
  let c;
  const b = () => {
    c = _t(m, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), c.on("connect", () => {
      var u, l, h;
      (u = t.refs) != null && u.connected && (t.refs.connected.value = !0), (h = (l = t.callbacks) == null ? void 0 : l.onConnect) == null || h.call(l);
    }), c.on("connect_error", (u) => {
      var l, h, g, i;
      (l = t.refs) != null && l.connected && (t.refs.connected.value = !1), (h = t.refs) != null && h.thinking && (t.refs.thinking.value = !1), (i = (g = t.callbacks) == null ? void 0 : g.onConnectError) == null || i.call(g, u);
    }), c.on("connect_timeout", (u) => {
      var l, h, g, i;
      (l = t.refs) != null && l.connected && (t.refs.connected.value = !1), (h = t.refs) != null && h.thinking && (t.refs.thinking.value = !1), (i = (g = t.callbacks) == null ? void 0 : g.onConnectError) == null || i.call(g, u);
    }), c.on("result", (u) => {
      var l, h;
      j.value.complete = !0, (h = (l = t.callbacks) == null ? void 0 : l.onResult) == null || h.call(l, u), c.disconnect();
    }), c.on("queued", () => {
      pt(), j.value.queued = !0;
    }), c.on("started", () => {
      j.value.started = !0;
    }), c.on("progress", (u) => {
      var l;
      ((l = u == null ? void 0 : u.data) == null ? void 0 : l.message) === "result" ? j.value.resultCount++ : (j.value.stockCount = u.data.stockCount, j.value.shapeCount = u.data.shapeCount);
    }), c.on("user", (u) => {
      var l, h;
      (h = (l = t.callbacks) == null ? void 0 : l.onUser) == null || h.call(l, u);
    }), c.on("error", (u) => {
      var l, h, g;
      (l = t.refs) != null && l.thinking && (t.refs.thinking.value = !1), pt(), (g = (h = t.callbacks) == null ? void 0 : h.onError) == null || g.call(h, u);
    });
  }, I = () => c == null ? void 0 : c.disconnect(), o = () => c == null ? void 0 : c.connect();
  return b(), {
    socket: c,
    connect: o,
    disconnect: I
  };
}
const z = O({
  show: !1,
  content: "",
  type: "info",
  referenceEl: null
});
function Ut() {
  let t = null;
  const m = () => {
    z.value.show = !1;
  }, c = (b) => {
    t && (clearTimeout(t), t = null), z.value = { ...z.value, ...b }, b.show && (t = setTimeout(() => {
      z.value.show = !1, t = null;
    }, 3e3));
  };
  return mt(() => z.value.referenceEl, (b) => {
    b || (z.value.show = !1);
  }), { tip: z, hide: m, update: c };
}
const vt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], qt = (t) => vt.includes(t);
function Rt(t, m) {
  const c = (i) => {
    var p;
    (p = m.log) == null || p.call(m, i);
  }, b = (i) => {
    var p;
    return (p = m.error) == null || p.call(m, i), { success: !1, error: i };
  }, I = () => {
    for (const i of vt) o(i, 0);
  }, o = (i, p) => {
    c(["setting price", i, p]);
    const { inputs: E, elements: _, setInputValue: y, formatPrice: v } = m;
    if (isNaN(p)) throw new Error("Price must be a number");
    if (!qt(i)) return;
    const S = {
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
    }[i];
    S != null && S.hidden && E[S.hidden] && (c(["setting hidden price", S.hidden, p]), y(S.hidden, p)), S != null && S.visible && _[S.visible] && (_[S.visible].innerText = v(p));
  }, u = (i) => {
    const { product: p, getCurrentVariationPrice: E, isQuantityPricing: _, enableAddToCart: y, setCartQuantity: v } = m;
    let x = (p == null ? void 0 : p.price) || E(!0) || 0;
    typeof x == "string" && (x = parseFloat(x));
    const S = t.unit_system === "imperial" ? "feet" : "meters", $ = {
      full_stock: (k) => {
        if (c(["calculating cost by full sheet"]), !_()) {
          const C = k.metadata.totalStockCost;
          return o("stock", C), C;
        }
        return _() && v(k.metadata.totalUsedStock), 0;
      },
      part_area: (k) => {
        c([`calculating cost by part area in square ${S}`]);
        const C = t.unit_system === "imperial" ? 144 : 1e6, P = k.metadata.totalPartArea / C, N = P * x;
        o("partArea", N), c([`part area price in square ${S} is ${P} (part area) * ${x} (product price) = ${N}`]);
        let G = N;
        if (t != null && t.enable_offcut_pricing && (k != null && k.offcuts)) {
          const B = (k == null ? void 0 : k.offcuts.reduce((Q, A) => {
            const a = A.l >= A.w ? A.l : A.w, r = A.l >= A.w ? A.w : A.l;
            return a < t.offcut_min_length || r < t.offcut_min_width ? Q + a * r : Q;
          }, 0)) / C, U = B * x;
          o("offcutArea", U), c([`calculated sellable offcut area as ${B} square ${S}, with price ${U}`]), G += U;
        }
        if (c([`calculated total price as ${G}`]), _()) {
          const F = G / x;
          return c([`setting cart quantity to ${F}`]), v(F, 2), 0;
        } else
          return G;
      },
      cut_length: (k) => {
        c([`calculating cost by cut length in  ${S}`]);
        const C = t.unit_system === "imperial" ? 12 : 1e3, P = k.metadata.totalCutLength / C;
        return v(P, 2), 0;
      },
      full_stock_plus_cut_length: (k) => {
        c(["calculating cost by full sheet plus cut length"]);
        let C = 0;
        const P = k.metadata.totalStockCost;
        o("stock", P), C = P, _() && v(k.metadata.totalUsedStock);
        const N = t.unit_system === "imperial" ? 12 : 1e3, F = k.metadata.totalCutLength / N * t.cut_length_price;
        return o("cutLength", F), C + F;
      },
      full_stock_plus_num_parts: (k) => {
        c(["calculating cost by full sheet plus number of parts"]);
        let C = 0;
        const P = k.metadata.totalStockCost;
        o("stock", P), C = P, _() && v(k.metadata.totalUsedStock);
        const N = k.metadata.totalPartsProduced * t.per_part_price;
        return o("perPart", N), C + N;
      },
      roll_length: (k) => {
        c([`calculating cost by roll length in ${S}`]);
        const C = t.unit_system === "imperial" ? 12 : 1e3, P = k.stock.reduce((N, G) => N + G.analysis.rollLength / C * Tt({ v: G.cost }), 0);
        return o("rollLength", P), P;
      }
    }[t.pricing_strategy], w = $(i);
    return y(), w;
  }, l = (i) => {
    const {
      isExtraEnabled: p,
      isMachiningEnabled: E,
      isSurchargeEnabled: _,
      inputType: y,
      getTotalBandingPrice: v,
      getTotalFinishPrice: x,
      getTotalMachiningPrice: S,
      getInputValue: M
    } = m;
    let $ = 0;
    if (p("banding") && i.metadata.bandingLengthByType) {
      const w = v(i.metadata.bandingLengthByType);
      o("banding", w), $ += w;
    }
    if (p("finish") && i.metadata.finishAreaByType) {
      const w = x(i.metadata.finishAreaByType);
      o("finish", w), $ += w;
    }
    if (y.value === "formula") {
      const w = parseFloat(M("smartcut-hardware-price"));
      isNaN(w) || ($ += w);
    }
    if (E()) {
      const w = S(i);
      o("machining", w), $ += w;
    }
    if (_() && t.surcharge) {
      const w = t.surcharge_type === "per_sheet" ? parseFloat(t.surcharge.toString()) * i.metadata.totalUsedStock : parseFloat(t.surcharge.toString());
      o("surcharge", w), c(["added surcharge", w]), $ += w;
    }
    return $;
  }, h = (i) => {
    const { getInputValue: p, setInputValue: E } = m, _ = {
      "smartcut-job-id": i.jobId,
      "smartcut-dimensions": i.parts.map((y) => `${y.l}x${y.w} [${y.q}]`).join(", "),
      "smartcut-total-cut-length": i.metadata.totalCutLength,
      "smartcut-part-area": i.metadata.totalPartArea,
      "smartcut-total-cuts": i.metadata.totalCuts,
      "smartcut-total-parts": i.metadata.totalPartsProduced,
      "smartcut-machining": i.metadata.hasMachining
    };
    if (Object.entries(_).forEach(([y, v]) => {
      E(y, v);
    }), p("smartcut-stock-summary") !== void 0) {
      const y = i.stock.map((v) => `${v.l}x${v.w}${v.t ? "x" + v.t : ""} [${v.q}]`).join(", ");
      E("smartcut-stock-summary", y);
    }
  };
  return {
    calculatePrice: async (i) => {
      I();
      const { isQuantityPricing: p, selectedVariation: E, setVariationPrice: _, setCartQuantity: y } = m;
      if (!(i != null && i.jobId))
        return b("No job ID provided");
      p() || y(1);
      let v = u(i);
      const x = l(i);
      if (v += x, p()) {
        const S = i.metadata.totalUsedStock, M = v / S;
        o("custom", M);
      } else {
        if (!i.metadata.totalStockCost)
          return b("Total stock cost not returned for a multiple size product");
        c([`total cost is ${v}`]), o("custom", v);
      }
      return E.value && _(v), h(i), { success: !0, totalPrice: v };
    },
    resetPricing: I
  };
}
export {
  Ot as a,
  Ft as b,
  Ut as c,
  Mt as d,
  At as e,
  Rt as f,
  Gt as u
};
