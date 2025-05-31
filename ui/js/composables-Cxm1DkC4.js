import { g as O, G as K, h as T, E as H, R as V, i as pt } from "./vendor-vue-F2WcuEKM.js";
import { I as tt, a as Y, u as et, b as W, t as at, s as vt, S as mt, m as gt, c as kt, g as St, r as st, d as Z, e as Lt, f as yt, h as rt, i as nt, j as ct, k as it, l as ot, n as lt, o as It, p as wt } from "./components-Zgz5Tpiv.js";
import { p as ut, m as bt } from "./vendor-cTtX1OWX.js";
let D = null;
function Tt(t = { numberFormat: "decimal" }) {
  const g = O(null), r = () => {
    const a = localStorage.getItem("GlobalStore/inputStock"), s = localStorage.getItem("GlobalStore/inputShapes");
    let l = [], L = [];
    if (a)
      try {
        const f = JSON.parse(a);
        f.length && (l = f), localStorage.removeItem("GlobalStore/inputStock");
      } catch (f) {
        console.error("Error migrating stock data:", f);
      }
    if (s)
      try {
        const f = JSON.parse(s);
        f.length && (L = f), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (f) {
        console.error("Error migrating shapes data:", f);
      }
    return { migratedStock: l, migratedShapes: L };
  }, { migratedStock: _, migratedShapes: w } = r(), c = K("inputs/inputStock", _, {
    serializer: {
      read: (a) => {
        const s = a ? JSON.parse(a) : [];
        return I(s, t.numberFormat);
      },
      write: (a) => {
        const s = a.filter((l) => !(l != null && l.multiEdit));
        return JSON.stringify(s);
      }
    },
    listenToStorageChanges: !1
  }), u = K("inputs/inputShapes", w, {
    serializer: {
      read: (a) => {
        const s = a ? JSON.parse(a) : [];
        return m(s, t.numberFormat);
      },
      write: (a) => {
        const s = a.filter((l) => !(l != null && l.multiEdit));
        return JSON.stringify(s);
      }
    },
    listenToStorageChanges: !1
  }), o = K("groups/userGroups", [], {
    serializer: {
      read: (a) => {
        const s = a ? JSON.parse(a) : [];
        return st(s);
      },
      write: (a) => JSON.stringify(a)
    },
    listenToStorageChanges: !1
  }), p = O(null), k = T(() => u.value.reduce((a, s) => s != null && s.q && s.q > 0 && !(s != null && s.multiEdit) ? a + s.q : a, 0)), n = T(() => c.value.reduce((a, s) => s != null && s.q && s.q > 0 && !(s != null && s.multiEdit) ? a + s.q : a, 0)), v = (a, s = "decimal") => {
    const l = (a == null ? void 0 : a.parts) || (a == null ? void 0 : a.shapeList), L = (a == null ? void 0 : a.stock) || (a == null ? void 0 : a.stockList), f = (a == null ? void 0 : a.groups) || (a == null ? void 0 : a.userGroups);
    if (l && q(l, s), L && C(L, s), f)
      try {
        o.value = st(f, u.value);
      } catch (e) {
        console.error("Error updating user groups:", e);
      }
  }, q = (a, s = "decimal") => {
    try {
      u.value = m(a, s);
    } catch (l) {
      console.error("Error updating input shapes:", l);
    }
  }, C = (a, s = "decimal") => {
    try {
      c.value = I(a, s);
    } catch (l) {
      console.error("Error updating input stock:", l);
    }
  };
  function I(a, s = "decimal") {
    return a.map((l) => (delete l.id, new tt(l, s)));
  }
  function m(a, s = "decimal") {
    return !a || !(a != null && a.length) ? [] : a.map((l) => (delete l.id, new Y(l, s)));
  }
  const E = () => {
    p.value = null;
  }, y = () => {
    u.value = [], c.value = [], o.value = [];
  }, R = (a = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0,
    inputShapesOverride: null
  }) => {
    const s = a.inputShapesOverride ?? u.value;
    if (!s.length)
      return { shapeList: [], issues: [] };
    const l = [], L = [];
    for (let f = 0; f < s.length; f++) {
      const e = s[f];
      if (!(e != null && e.q)) continue;
      const i = ["name", "material", "notes"];
      for (const A of i)
        A in e && (e[A] = ut.sanitize(e[A]));
      e.createId(f), e.applyPartTrim(a.trim, a.stockType);
      const d = { ...e };
      gt(d, a.orientationModel);
      const h = new kt(d);
      h.trimDimensions(), a.minSpacing && a.maxDimension && (h.l <= a.maxDimension || h.w <= a.maxDimension) && (h.minSpacing = a.minSpacing), L.push(h), l.push(...h.issues);
    }
    return { shapeList: L, issues: l };
  }, $ = (a) => {
    if (!c.value.length)
      return { stockList: [], issues: [] };
    const s = [], l = [];
    for (let L = 0; L < c.value.length; L++) {
      const f = c.value[L];
      if (!(f != null && f.q) && !f.autoAdd) continue;
      const e = ["name", "material", "notes"];
      for (const d of e)
        d in f && (f[d] = ut.sanitize(f[d]));
      f.createId(L);
      const i = new mt(f, a);
      s.push(...i.issues), l.push(i);
    }
    return { stockList: l, issues: s };
  }, b = (a = null) => {
    var f;
    const s = [], l = at(c.value);
    if (!c.value.some((e) => e.autoAdd) && (!((f = c.value) != null && f.length) || !l))
      return new W({
        message: "errors.validation.no_stock",
        listId: c.value.map((e) => e.listId),
        field: [["q"]],
        issues: s
      }), s;
    let L = 0;
    for (const e of c.value)
      s.push(...e.validate(a, L)), L++;
    return s;
  }, S = (a = null) => {
    var U;
    const {
      saw: s = null,
      partTrim: l = 0,
      useInventory: L = !1,
      inputShapesOverride: f = null
    } = a || {}, e = [], i = f ?? u.value;
    if (!i.length)
      return new W({
        message: "errors.validation.no_parts",
        issues: e
      }), e;
    if (!at(i))
      return new W({
        message: "errors.validation.no_parts",
        issues: e
      }), i.forEach((B) => new W({
        message: "errors.validation.no_parts",
        field: [["q"]],
        item: B
      })), e;
    let h = 0;
    for (const B of i)
      e.push(...B.validate({
        inputStockList: c.value,
        index: h,
        stockType: s !== null ? s.stockType ?? null : null,
        partTrim: l,
        useInventory: L,
        saw: s
      })), h++;
    return e.length ? e : (vt(i, (U = F == null ? void 0 : F.inputStock) == null ? void 0 : U.value, s !== null ? s.stockType ?? null : null), i.flatMap((B) => B.issues));
  }, x = (a) => {
    if (!c.value.length) return "n";
    const s = a.material, l = a.t, L = c.value.filter((e) => e.material === s && e.t === l);
    return L.length ? St(L) : "n";
  }, P = (a) => {
    for (const s of u.value)
      et(s, a);
    for (const s of c.value)
      et(s, a);
  }, N = () => {
    u.value.forEach((a) => a.issues = []), c.value.forEach((a) => a.issues = []);
  }, G = ({
    stock: a = !0,
    shapes: s = !0
  }) => {
    a && (c.value = [
      new tt({
        l: 2440,
        w: 1220,
        q: 1
      })
    ]), s && (u.value = [
      new Y({
        l: 500,
        w: 500,
        q: 1
      }),
      new Y({
        l: 400,
        w: 400,
        q: 1
      })
    ]);
  }, M = (a) => {
    if (c.value.length === 1) return;
    const s = c.value.findIndex((l) => l.listId === a);
    s !== -1 && c.value.splice(s, 1);
  }, J = (a) => {
    if (u.value.length === 1) return;
    const s = u.value.findIndex((l) => l.listId === a);
    s !== -1 && u.value.splice(s, 1);
  }, F = {
    inputStock: c,
    inputShapes: u,
    userGroups: o,
    currentInputShape: p,
    selectedSaw: g
  };
  return {
    inputs: F,
    inputStock: c,
    inputShapes: u,
    userGroups: o,
    currentInputShape: p,
    selectedSaw: g,
    totalInputShapes: k,
    totalInputStock: n,
    reset: E,
    clear: y,
    clearIssues: N,
    updateInputs: v,
    updateInputShapes: q,
    updateInputStock: C,
    getShapeGrainSummary: x,
    createShapeList: R,
    createStockList: $,
    validateInputStock: b,
    validateInputShapes: S,
    updateNumberFormat: P,
    createTestData: G,
    removeStock: M,
    removeShape: J
  };
}
function Nt(t = { numberFormat: "decimal" }) {
  return D || (D = Tt(t)), D;
}
const Q = O([]), _t = 6;
function $t() {
  const t = ({
    message: r,
    type: _ = "info",
    additional: w = [],
    options: c = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(w) || (console.warn("addNotice - additional must be an array"), w = []);
    const o = {
      id: crypto.randomUUID(),
      message: Z(r),
      additional: w.length > 5 ? w.slice(0, 5).map((k) => Z(k)).join("<br>") + "<br>..." : w.slice(0, 5).map((k) => Z(k)).join("<br>"),
      type: _,
      persistent: c.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, p = c.maxNotices ?? _t;
    if (Q.value.length >= p) {
      const k = Q.value.findIndex((n) => !n.persistent);
      if (k !== -1)
        Q.value.splice(k, 1);
      else if (!o.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), o.id;
    }
    return Q.value.push(o), !o.persistent && c.timeout !== 0 && setTimeout(() => g(o.id), c.timeout || 6e3), o.id;
  }, g = (r) => {
    Q.value.findIndex((w) => w.id === r) !== -1 && (Q.value = Q.value.filter((w) => w.id !== r));
  };
  return {
    notices: Q,
    addNotice: t,
    dismissNotice: g
  };
}
let X = null;
function Ct() {
  const t = O(null), g = O(null), r = O(null), _ = H([]), w = H([]), c = H([]), u = H([]), o = O([]), p = O(null), k = H([]), n = O(null), v = O(null);
  return {
    // All state
    jobId: t,
    saw: g,
    activeStockId: r,
    shapeList: _,
    stockList: w,
    cutList: c,
    segmentList: u,
    offcuts: o,
    metadata: p,
    unusableShapes: k,
    currentCutIndex: n,
    activeShape: v,
    r: {
      saw: g,
      activeStockId: r,
      jobId: t,
      shapeList: _,
      stockList: w,
      cutList: c,
      segmentList: u,
      offcuts: o,
      unusableShapes: k,
      metadata: p,
      currentCutIndex: n
    }
  };
}
function Gt() {
  if (X) return X;
  const t = Ct(), g = T(() => t.activeStockId.value ? F(t.activeStockId.value) : []), r = T(() => {
    var e;
    return !t.activeStockId.value || !((e = t.stockList.value) != null && e.length) ? null : J(t.activeStockId.value);
  }), _ = T(() => {
    var i;
    return !r.value || !((i = t.cutList.value) != null && i.length) ? [] : s(r.value.id);
  }), w = T(() => {
    var e;
    return !r.value || !((e = t.segmentList.value) != null && e.length) ? [] : a(t.activeStockId.value);
  }), c = T(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? l(t.stockList.value) : [];
  }), u = T(() => t.shapeList.value.filter((e) => e.added)), o = T(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? t.shapeList.value.filter((i) => !i.added) : [];
  }), p = T(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? Lt(t.shapeList.value) : [];
  }), k = T(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? t.shapeList.value.filter((i) => !i.duplicate) : [];
  }), n = T(() => k.value.filter((e) => e.added)), v = T(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? t.stockList.value.filter((i) => i.used && !i.duplicate) : [];
  }), q = T(() => v.value.filter((e) => e.used)), C = T(() => {
    var e;
    return (e = t.cutList.value) != null && e.length ? _.value.reduce((i, d) => i + d.getArea(), 0) : 0;
  }), I = T(() => {
    var e;
    return !((e = t.stockList.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.getArea() : 0;
  }), m = T(() => {
    var e;
    return !((e = t.shapeList.value) != null && e.length) || !g.value ? 0 : g.value ? g.value.reduce((i, d) => i + d.getArea(), 0) : 0;
  }), E = T(() => {
    var e;
    return !((e = t.cutList.value) != null && e.length) || !r.value ? null : r.value.cutType;
  }), y = T(() => {
    var i;
    return (i = t.stockList.value) != null && i.length ? t.stockList.value.filter((d) => d.used && (d.stack === !1 || typeof d.stack == "number")) : [];
  }), R = T(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? yt(r.value, t.stockList.value) : 0;
  }), $ = T(() => {
    var i;
    if (!((i = t.stockList.value) != null && i.length)) return 0;
    let e = I.value ? (C.value + m.value) / I.value : null;
    return e > 1 && (e = 1), e;
  }), b = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, S = () => {
    t.saw.value = null, t.activeStockId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [];
  }, x = (e, i) => {
    var d;
    e in this && ((d = this[e]) == null || d.sort(It[i]));
  }, P = (e) => {
    V(e);
  }, N = () => {
    V(t.shapeList);
  }, G = () => {
    V(t.stockList);
  }, M = (e) => {
    var i, d, h, A;
    if (!((i = e == null ? void 0 : e.shapeList) != null && i.some((U) => U.added))) {
      S();
      return;
    }
    t.metadata.value = e.metadata, t.unusableShapes.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (t.saw.value = new rt(
        e == null ? void 0 : e.saw,
        (d = e == null ? void 0 : e.saw) == null ? void 0 : d.stockType
      )), t.stockList.value = nt({
        saw: t.saw.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), t.shapeList.value = ct({
        shapeList: e.shapeList,
        stockList: t.stockList.value,
        preventAutoRotation: !0
      }), t.cutList.value = ot({
        cutList: e.cutList,
        stockList: t.stockList.value
      }), t.segmentList.value = it({
        segmentList: e.segmentList,
        stockList: t.stockList.value
      }), t.offcuts.value = lt({
        offcuts: e.offcuts,
        stockList: t.stockList.value,
        preventAutoRotation: !0
      }), V(t.stockList), V(t.shapeList), V(t.cutList), V(t.segmentList), t.activeStockId.value = ((A = (h = l(t.stockList.value)) == null ? void 0 : h[0]) == null ? void 0 : A.id) || null;
    } catch (U) {
      console.error("Error updating from result", U);
    }
  }, J = (e) => {
    var i;
    return (i = t.stockList.value) != null && i.length ? t.stockList.value.find((d) => d.id === e) : null;
  }, F = (e) => {
    var i;
    return (i = t.shapeList.value) != null && i.length ? t.shapeList.value.filter((d) => {
      var h;
      return (((h = d == null ? void 0 : d.stock) == null ? void 0 : h.id) ?? (d == null ? void 0 : d.stockId)) === e;
    }) : [];
  }, a = (e) => {
    var d;
    return (d = t.segmentList.value) != null && d.length ? t.segmentList.value.filter((h) => {
      var A;
      return (((A = h == null ? void 0 : h.stock) == null ? void 0 : A.id) ?? (h == null ? void 0 : h.stockId)) === e;
    }) : [];
  }, s = (e) => {
    var d;
    const i = (d = t == null ? void 0 : t.cutList) == null ? void 0 : d.value;
    return !i && !i.length ? [] : i.filter((h) => {
      var A;
      return (((A = h == null ? void 0 : h.stock) == null ? void 0 : A.id) ?? (h == null ? void 0 : h.stockId)) === e;
    }).sort((h, A) => {
      var U, B;
      return ((U = h == null ? void 0 : h.guillotineData) == null ? void 0 : U.order) - ((B = A == null ? void 0 : A.guillotineData) == null ? void 0 : B.order);
    });
  }, l = (e) => e != null && e.length ? e.filter((i) => i.used === !0) : [], L = (e) => {
    t.activeStockId.value !== e && (t.activeShape.value = null, t.activeStockId.value = e);
  }, f = () => {
    t.saw.value = new rt({
      bladeWidth: 1,
      stockType: "sheet",
      cutType: "guillotine",
      cutPreference: "l"
    }), t.stockList.value = nt({
      saw: t.saw.value,
      stockList: [
        { id: "1.0", used: !0, l: 2440, w: 1220, q: 1 }
      ]
    }), t.shapeList.value = ct({
      shapeList: [
        { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
        { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
      ],
      stockList: t.stockList.value,
      preventAutoRotation: !0
    }), t.segmentList.value = it({
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
    }), t.cutList.value = ot({
      cutList: [
        { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, isGuillotine: !0 },
        { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, isGuillotine: !0 },
        { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, isGuillotine: !0 },
        { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, isGuillotine: !0 }
      ],
      stockList: t.stockList.value
    }), t.offcuts.value = lt({
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
  return X = {
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
    activeShapes: g,
    unplacedShapes: o,
    uniqueShapes: k,
    uniqueAddedShapes: n,
    unplacedShapeTally: p,
    uniqueStock: v,
    uniqueUsedStock: q,
    activeStock: r,
    activeCuts: _,
    activeCutsArea: C,
    activeCutType: E,
    usedStock: c,
    stackedStock: y,
    activeStockArea: I,
    activeShapeArea: m,
    activeStockStackCount: R,
    activeTotalArea: $,
    activeSegments: w,
    // methods
    reset: b,
    clear: S,
    sortItems: x,
    update: P,
    updateShapes: N,
    updateStock: G,
    updateFromResult: M,
    getStock: J,
    getShapes: F,
    getSegments: a,
    getCuts: s,
    setActiveStockId: L,
    // testing
    createTestData: f
  }, X;
}
const dt = O({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function xt() {
  return {
    progress: dt,
    reset: () => {
      dt.value = {
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
const { progress: j, reset: ft } = xt();
function Ot(t) {
  const g = "https://api.cutlistevo.com/";
  let r;
  const _ = () => {
    r = bt(g, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), r.on("connect", () => {
      var u, o, p;
      (u = t.refs) != null && u.connected && (t.refs.connected.value = !0), (p = (o = t.callbacks) == null ? void 0 : o.onConnect) == null || p.call(o);
    }), r.on("connect_error", (u) => {
      var o, p, k, n;
      (o = t.refs) != null && o.connected && (t.refs.connected.value = !1), (p = t.refs) != null && p.thinking && (t.refs.thinking.value = !1), (n = (k = t.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, u);
    }), r.on("connect_timeout", (u) => {
      var o, p, k, n;
      (o = t.refs) != null && o.connected && (t.refs.connected.value = !1), (p = t.refs) != null && p.thinking && (t.refs.thinking.value = !1), (n = (k = t.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, u);
    }), r.on("result", (u) => {
      var o, p;
      j.value.complete = !0, (p = (o = t.callbacks) == null ? void 0 : o.onResult) == null || p.call(o, u), r.disconnect();
    }), r.on("queued", () => {
      ft(), j.value.queued = !0;
    }), r.on("started", () => {
      j.value.started = !0;
    }), r.on("progress", (u) => {
      var o;
      ((o = u == null ? void 0 : u.data) == null ? void 0 : o.message) === "result" ? j.value.resultCount++ : (j.value.stockCount = u.data.stockCount, j.value.shapeCount = u.data.shapeCount);
    }), r.on("user", (u) => {
      var o, p;
      (p = (o = t.callbacks) == null ? void 0 : o.onUser) == null || p.call(o, u);
    }), r.on("error", (u) => {
      var o, p, k;
      (o = t.refs) != null && o.thinking && (t.refs.thinking.value = !1), ft(), (k = (p = t.callbacks) == null ? void 0 : p.onError) == null || k.call(p, u);
    });
  }, w = () => r == null ? void 0 : r.disconnect(), c = () => r == null ? void 0 : r.connect();
  return _(), {
    socket: r,
    connect: c,
    disconnect: w
  };
}
const z = O({
  show: !1,
  content: "",
  type: "info",
  referenceEl: null
});
function Ft() {
  let t = null;
  const g = () => {
    z.value.show = !1;
  }, r = (_) => {
    t && (clearTimeout(t), t = null), z.value = { ...z.value, ..._ }, _.show && (t = setTimeout(() => {
      z.value.show = !1, t = null;
    }, 3e3));
  };
  return pt(() => z.value.referenceEl, (_) => {
    _ || (z.value.show = !1);
  }), { tip: z, hide: g, update: r };
}
const ht = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Pt = (t) => ht.includes(t);
function Mt(t, g) {
  const r = (n) => {
    var v;
    (v = g.log) == null || v.call(g, n);
  }, _ = (n) => {
    var v;
    return (v = g.error) == null || v.call(g, n), { success: !1, error: n };
  }, w = () => {
    for (const n of ht) c(n, 0);
  }, c = (n, v) => {
    r(["setting price", n, v]);
    const { inputs: q, elements: C, setInputValue: I, formatPrice: m } = g;
    if (isNaN(v)) throw new Error("Price must be a number");
    if (!Pt(n)) return;
    const y = {
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
    }[n];
    y != null && y.hidden && q[y.hidden] && (r(["setting hidden price", y.hidden, v]), I(y.hidden, v)), y != null && y.visible && C[y.visible] && (C[y.visible].innerText = m(v));
  }, u = (n) => {
    const { product: v, getCurrentVariationPrice: q, isQuantityPricing: C, enableAddToCart: I, setCartQuantity: m } = g;
    let E = (v == null ? void 0 : v.price) || q(!0) || 0;
    typeof E == "string" && (E = parseFloat(E));
    const y = t.unit_system === "imperial" ? "feet" : "meters", $ = {
      full_stock: (S) => {
        if (r(["calculating cost by full sheet"]), !C()) {
          const x = S.metadata.totalStockCost;
          return c("stock", x), x;
        }
        return C() && m(S.metadata.totalUsedStock), 0;
      },
      part_area: (S) => {
        r([`calculating cost by part area in square ${y}`]);
        const x = t.unit_system === "imperial" ? 144 : 1e6, P = S.metadata.totalPartArea / x, N = P * E;
        c("partArea", N), r([`part area price in square ${y} is ${P} (part area) * ${E} (product price) = ${N}`]);
        let G = N;
        if (t != null && t.enable_offcut_pricing && (S != null && S.offcuts)) {
          const J = (S == null ? void 0 : S.offcuts.reduce((a, s) => {
            const l = s.l >= s.w ? s.l : s.w, L = s.l >= s.w ? s.w : s.l;
            return l < t.offcut_min_length || L < t.offcut_min_width ? a + l * L : a;
          }, 0)) / x, F = J * E;
          c("offcutArea", F), r([`calculated sellable offcut area as ${J} square ${y}, with price ${F}`]), G += F;
        }
        if (r([`calculated total price as ${G}`]), C()) {
          const M = G / E;
          return r([`setting cart quantity to ${M}`]), m(M, 2), 0;
        } else
          return G;
      },
      cut_length: (S) => {
        r([`calculating cost by cut length in  ${y}`]);
        const x = t.unit_system === "imperial" ? 12 : 1e3, P = S.metadata.totalCutLength / x;
        return m(P, 2), 0;
      },
      full_stock_plus_cut_length: (S) => {
        r(["calculating cost by full sheet plus cut length"]);
        let x = 0;
        const P = S.metadata.totalStockCost;
        c("stock", P), x = P, C() && m(S.metadata.totalUsedStock);
        const N = t.unit_system === "imperial" ? 12 : 1e3, M = S.metadata.totalCutLength / N * t.cut_length_price;
        return c("cutLength", M), x + M;
      },
      full_stock_plus_num_parts: (S) => {
        r(["calculating cost by full sheet plus number of parts"]);
        let x = 0;
        const P = S.metadata.totalStockCost;
        c("stock", P), x = P, C() && m(S.metadata.totalUsedStock);
        const N = S.metadata.totalPartsProduced * t.per_part_price;
        return c("perPart", N), x + N;
      },
      roll_length: (S) => {
        r([`calculating cost by roll length in ${y}`]);
        const x = t.unit_system === "imperial" ? 12 : 1e3, P = S.stock.reduce((N, G) => N + G.analysis.rollLength / x * wt({ v: G.cost }), 0);
        return c("rollLength", P), P;
      }
    }[t.pricing_strategy], b = $(n);
    return I(), b;
  }, o = (n) => {
    const {
      isExtraEnabled: v,
      isMachiningEnabled: q,
      isSurchargeEnabled: C,
      inputType: I,
      getTotalBandingPrice: m,
      getTotalFinishPrice: E,
      getTotalMachiningPrice: y,
      getInputValue: R
    } = g;
    let $ = 0;
    if (v("banding") && n.metadata.bandingLengthByType) {
      const b = m(n.metadata.bandingLengthByType);
      c("banding", b), $ += b;
    }
    if (v("finish") && n.metadata.finishAreaByType) {
      const b = E(n.metadata.finishAreaByType);
      c("finish", b), $ += b;
    }
    if (I.value === "formula") {
      const b = parseFloat(R("smartcut-hardware-price"));
      isNaN(b) || ($ += b);
    }
    if (q()) {
      const b = y(n);
      c("machining", b), $ += b;
    }
    if (C() && t.surcharge) {
      const b = t.surcharge_type === "per_sheet" ? parseFloat(t.surcharge.toString()) * n.metadata.totalUsedStock : parseFloat(t.surcharge.toString());
      c("surcharge", b), r(["added surcharge", b]), $ += b;
    }
    return $;
  }, p = (n) => {
    const { getInputValue: v, setInputValue: q } = g, C = {
      "smartcut-job-id": n.jobId,
      "smartcut-dimensions": n.parts.map((I) => `${I.l}x${I.w} [${I.q}]`).join(", "),
      "smartcut-total-cut-length": n.metadata.totalCutLength,
      "smartcut-part-area": n.metadata.totalPartArea,
      "smartcut-total-cuts": n.metadata.totalCuts,
      "smartcut-total-parts": n.metadata.totalPartsProduced,
      "smartcut-machining": n.metadata.hasMachining
    };
    if (Object.entries(C).forEach(([I, m]) => {
      q(I, m);
    }), v("smartcut-stock-summary") !== void 0) {
      const I = n.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      q("smartcut-stock-summary", I);
    }
  };
  return {
    calculatePrice: async (n) => {
      w();
      const { isQuantityPricing: v, selectedVariation: q, setVariationPrice: C, setCartQuantity: I } = g;
      if (!(n != null && n.jobId))
        return _("No job ID provided");
      v() || I(1);
      let m = u(n);
      const E = o(n);
      if (m += E, v()) {
        const y = n.metadata.totalUsedStock, R = m / y;
        c("custom", R);
      } else {
        if (!n.metadata.totalStockCost)
          return _("Total stock cost not returned for a multiple size product");
        r([`total cost is ${m}`]), c("custom", m);
      }
      return q.value && C(m), p(n), { success: !0, totalPrice: m };
    },
    resetPricing: w
  };
}
export {
  $t as a,
  Gt as b,
  Ft as c,
  Ot as d,
  xt as e,
  Mt as f,
  Nt as u
};
