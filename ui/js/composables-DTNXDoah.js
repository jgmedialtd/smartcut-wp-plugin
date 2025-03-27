import { g as G, H as K, h as b, G as H, S as Q, i as pt } from "./vendor-vue-Kgm6Js1o.js";
import { I as tt, a as Y, u as et, b as W, t as at, s as vt, S as mt, m as gt, c as kt, g as St, r as st, d as Z, e as Lt, f as yt, h as rt, i as nt, j as it, k as ct, l as ot, n as lt, o as wt, p as It } from "./components-D4dy09-s.js";
import { p as ut, l as bt } from "./vendor-DdDY4qXh.js";
let D = null;
function Tt(t = { numberFormat: "decimal" }) {
  const g = G(null), r = () => {
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
  }, { migratedStock: T, migratedShapes: I } = r(), i = K("inputs/inputStock", T, {
    serializer: {
      read: (a) => {
        const s = a ? JSON.parse(a) : [];
        return y(s, t.numberFormat);
      },
      write: (a) => {
        const s = a.filter((l) => !(l != null && l.multiEdit));
        return JSON.stringify(s);
      }
    },
    listenToStorageChanges: !1
  }), d = K("inputs/inputShapes", I, {
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
  }), v = G(null), S = b(() => d.value.reduce((a, s) => s != null && s.q && s.q > 0 && !(s != null && s.multiEdit) ? a + s.q : a, 0)), n = b(() => i.value.reduce((a, s) => s != null && s.q && s.q > 0 && !(s != null && s.multiEdit) ? a + s.q : a, 0)), k = (a, s = "decimal") => {
    const l = (a == null ? void 0 : a.parts) || (a == null ? void 0 : a.shapeList), L = (a == null ? void 0 : a.stock) || (a == null ? void 0 : a.stockList), f = (a == null ? void 0 : a.groups) || (a == null ? void 0 : a.userGroups);
    if (l && P(l, s), L && C(L, s), f)
      try {
        o.value = st(f, d.value);
      } catch (e) {
        console.error("Error updating user groups:", e);
      }
  }, P = (a, s = "decimal") => {
    try {
      d.value = m(a, s);
    } catch (l) {
      console.error("Error updating input shapes:", l);
    }
  }, C = (a, s = "decimal") => {
    try {
      i.value = y(a, s);
    } catch (l) {
      console.error("Error updating input stock:", l);
    }
  };
  function y(a, s = "decimal") {
    return a.map((l) => (delete l.id, new tt(l, s)));
  }
  function m(a, s = "decimal") {
    return !a || !(a != null && a.length) ? [] : a.map((l) => (delete l.id, new Y(l, s)));
  }
  const E = () => {
    v.value = null;
  }, w = () => {
    d.value = [], i.value = [], o.value = [];
  }, z = (a = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0,
    inputShapesOverride: null
  }) => {
    const s = a.inputShapesOverride ?? d.value;
    if (!s.length)
      return { shapeList: [], issues: [] };
    const l = [], L = [];
    for (let f = 0; f < s.length; f++) {
      const e = s[f];
      if (!(e != null && e.q)) continue;
      const c = ["name", "material", "notes"];
      for (const A of c)
        A in e && (e[A] = ut.sanitize(e[A]));
      e.createId(f), e.applyPartTrim(a.trim, a.stockType);
      const h = { ...e };
      gt(h, a.orientationModel);
      const p = new kt(h);
      p.trimDimensions(), a.minSpacing && a.maxDimension && (p.l <= a.maxDimension || p.w <= a.maxDimension) && (p.minSpacing = a.minSpacing), L.push(p), l.push(...p.issues);
    }
    return { shapeList: L, issues: l };
  }, J = (a) => {
    if (!i.value.length)
      return { stockList: [], issues: [] };
    const s = [], l = [];
    for (let L = 0; L < i.value.length; L++) {
      const f = i.value[L];
      if (!(f != null && f.q) && !f.autoAdd) continue;
      const e = ["name", "material", "notes"];
      for (const h of e)
        h in f && (f[h] = ut.sanitize(f[h]));
      f.createId(L);
      const c = new mt(f, a);
      s.push(...c.issues), l.push(c);
    }
    return { stockList: l, issues: s };
  }, N = (a = null) => {
    var L;
    const s = [], l = at(i.value);
    if (!i.value.some((f) => f.autoAdd) && (!((L = i.value) != null && L.length) || !l))
      return new W({
        message: "no_stock",
        listId: i.value.map((f) => f.listId),
        field: [["q"]],
        issues: s
      }), s;
    for (const f of i.value)
      s.push(...f.validate(a));
    return s;
  }, u = (a = null) => {
    var O;
    const {
      saw: s = null,
      partTrim: l = 0,
      useInventory: L = !1,
      inputShapesOverride: f = null
    } = a || {}, e = [], c = f ?? d.value;
    if (!c.length)
      return new W({
        message: "no_parts",
        issues: e
      }), e;
    if (!at(c))
      return new W({
        message: "no_parts",
        issues: e
      }), c.forEach((R) => new W({
        message: "no_parts",
        field: [["q"]],
        item: R
      })), e;
    let p = 0;
    for (const R of c)
      e.push(...R.validate({
        inputStockList: i.value,
        index: p,
        stockType: s !== null ? s.stockType ?? null : null,
        partTrim: l,
        useInventory: L,
        saw: s
      })), p++;
    return e.length ? e : (vt(c, (O = F == null ? void 0 : F.inputStock) == null ? void 0 : O.value, s !== null ? s.stockType ?? null : null), c.flatMap((R) => R.issues));
  }, _ = (a) => {
    if (!i.value.length) return "n";
    const s = a.material, l = a.t, L = i.value.filter((e) => e.material === s && e.t === l);
    return L.length ? St(L) : "n";
  }, x = (a) => {
    for (const s of d.value)
      et(s, a);
    for (const s of i.value)
      et(s, a);
  }, $ = () => {
    d.value.forEach((a) => a.issues = []), i.value.forEach((a) => a.issues = []);
  }, q = ({
    stock: a = !0,
    shapes: s = !0
  }) => {
    a && (i.value = [
      new tt({
        l: 2440,
        w: 1220,
        q: 1
      })
    ]), s && (d.value = [
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
    if (i.value.length === 1) return;
    const s = i.value.findIndex((l) => l.listId === a);
    s !== -1 && i.value.splice(s, 1);
  }, U = (a) => {
    if (d.value.length === 1) return;
    const s = d.value.findIndex((l) => l.listId === a);
    s !== -1 && d.value.splice(s, 1);
  }, F = {
    inputStock: i,
    inputShapes: d,
    userGroups: o,
    currentInputShape: v,
    selectedSaw: g
  };
  return {
    inputs: F,
    inputStock: i,
    inputShapes: d,
    userGroups: o,
    currentInputShape: v,
    selectedSaw: g,
    totalInputShapes: S,
    totalInputStock: n,
    reset: E,
    clear: w,
    clearIssues: $,
    updateInputs: k,
    updateInputShapes: P,
    updateInputStock: C,
    getShapeGrainSummary: _,
    createShapeList: z,
    createStockList: J,
    validateInputStock: N,
    validateInputShapes: u,
    updateNumberFormat: x,
    createTestData: q,
    removeStock: M,
    removeShape: U
  };
}
function Nt(t = { numberFormat: "decimal" }) {
  return D || (D = Tt(t)), D;
}
const B = G([]), _t = 6;
function $t() {
  const t = ({
    message: r,
    type: T = "info",
    additional: I = [],
    options: i = {},
    action: d = () => {
    }
  }) => {
    Array.isArray(I) || (console.warn("addNotice - additional must be an array"), I = []);
    const o = {
      id: crypto.randomUUID(),
      message: Z(r),
      additional: I.length > 5 ? I.slice(0, 5).map((S) => Z(S)).join("<br>") + "<br>..." : I.slice(0, 5).map((S) => Z(S)).join("<br>"),
      type: T,
      persistent: i.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: d
    }, v = i.maxNotices ?? _t;
    if (B.value.length >= v) {
      const S = B.value.findIndex((n) => !n.persistent);
      if (S !== -1)
        B.value.splice(S, 1);
      else if (!o.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), o.id;
    }
    return B.value.push(o), !o.persistent && i.timeout !== 0 && setTimeout(() => g(o.id), i.timeout || 6e3), o.id;
  }, g = (r) => {
    B.value.findIndex((I) => I.id === r) !== -1 && (B.value = B.value.filter((I) => I.id !== r));
  };
  return {
    notices: B,
    addNotice: t,
    dismissNotice: g
  };
}
let X = null;
function Ct() {
  const t = G(null), g = G(null), r = G(null), T = H([]), I = H([]), i = H([]), d = H([]), o = G([]), v = G(null), S = H([]), n = G(null), k = G(null);
  return {
    // All state
    jobId: t,
    saw: g,
    activeStockId: r,
    shapeList: T,
    stockList: I,
    cutList: i,
    segmentList: d,
    offcuts: o,
    metadata: v,
    unusableShapes: S,
    currentCutIndex: n,
    activeShape: k,
    r: {
      saw: g,
      activeStockId: r,
      jobId: t,
      shapeList: T,
      stockList: I,
      cutList: i,
      segmentList: d,
      offcuts: o,
      unusableShapes: S,
      metadata: v,
      currentCutIndex: n
    }
  };
}
function Gt() {
  if (X) return X;
  const t = Ct(), g = b(() => t.activeStockId.value ? F(t.activeStockId.value) : []), r = b(() => {
    var e;
    return !t.activeStockId.value || !((e = t.stockList.value) != null && e.length) ? null : U(t.activeStockId.value);
  }), T = b(() => {
    var c;
    return !r.value || !((c = t.cutList.value) != null && c.length) ? [] : s(r.value.id);
  }), I = b(() => {
    var e;
    return !r.value || !((e = t.segmentList.value) != null && e.length) ? [] : a(t.activeStockId.value);
  }), i = b(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? l(t.stockList.value) : [];
  }), d = b(() => t.shapeList.value.filter((e) => e.added)), o = b(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? t.shapeList.value.filter((c) => !c.added) : [];
  }), v = b(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? Lt(t.shapeList.value) : [];
  }), S = b(() => {
    var e;
    return (e = t.shapeList.value) != null && e.length ? t.shapeList.value.filter((c) => !c.duplicate) : [];
  }), n = b(() => S.value.filter((e) => e.added)), k = b(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? t.stockList.value.filter((c) => c.used && !c.duplicate) : [];
  }), P = b(() => k.value.filter((e) => e.used)), C = b(() => {
    var e;
    return (e = t.cutList.value) != null && e.length ? T.value.reduce((c, h) => c + h.getArea(), 0) : 0;
  }), y = b(() => {
    var e;
    return !((e = t.stockList.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.getArea() : 0;
  }), m = b(() => {
    var e;
    return !((e = t.shapeList.value) != null && e.length) || !g.value ? 0 : g.value ? g.value.reduce((c, h) => c + h.getArea(), 0) : 0;
  }), E = b(() => {
    var e;
    return !((e = t.cutList.value) != null && e.length) || !r.value ? null : r.value.cutType;
  }), w = b(() => {
    var c;
    return (c = t.stockList.value) != null && c.length ? t.stockList.value.filter((h) => h.used && (h.stack === !1 || typeof h.stack == "number")) : [];
  }), z = b(() => {
    var e;
    return (e = t.stockList.value) != null && e.length ? yt(r.value, t.stockList.value) : 0;
  }), J = b(() => {
    var c;
    if (!((c = t.stockList.value) != null && c.length)) return 0;
    let e = y.value ? (C.value + m.value) / y.value : null;
    return e > 1 && (e = 1), e;
  }), N = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, u = () => {
    t.saw.value = null, t.activeStockId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [];
  }, _ = (e, c) => {
    var h;
    e in this && ((h = this[e]) == null || h.sort(wt[c]));
  }, x = (e) => {
    Q(e);
  }, $ = () => {
    Q(t.shapeList);
  }, q = () => {
    Q(t.stockList);
  }, M = (e) => {
    var c, h, p, A;
    if (!((c = e == null ? void 0 : e.shapeList) != null && c.some((O) => O.added))) {
      u();
      return;
    }
    t.metadata.value = e.metadata, t.unusableShapes.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (t.saw.value = new rt(
        e == null ? void 0 : e.saw,
        (h = e == null ? void 0 : e.saw) == null ? void 0 : h.stockType
      )), t.stockList.value = nt({
        saw: t.saw.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), t.shapeList.value = it({
        shapeList: e.shapeList,
        stockList: t.stockList.value,
        preventAutoRotation: !0
      }), t.cutList.value = ot({
        cutList: e.cutList,
        stockList: t.stockList.value
      }), t.segmentList.value = ct({
        segmentList: e.segmentList,
        stockList: t.stockList.value
      }), t.offcuts.value = lt({
        offcuts: e.offcuts,
        stockList: t.stockList.value,
        preventAutoRotation: !0
      }), Q(t.stockList), Q(t.shapeList), Q(t.cutList), Q(t.segmentList), t.activeStockId.value = ((A = (p = l(t.stockList.value)) == null ? void 0 : p[0]) == null ? void 0 : A.id) || null;
    } catch (O) {
      console.error("Error updating from result", O);
    }
  }, U = (e) => {
    var c;
    return (c = t.stockList.value) != null && c.length ? t.stockList.value.find((h) => h.id === e) : null;
  }, F = (e) => {
    var c;
    return (c = t.shapeList.value) != null && c.length ? t.shapeList.value.filter((h) => {
      var p;
      return (((p = h == null ? void 0 : h.stock) == null ? void 0 : p.id) ?? (h == null ? void 0 : h.stockId)) === e;
    }) : [];
  }, a = (e) => {
    var h;
    return (h = t.segmentList.value) != null && h.length ? t.segmentList.value.filter((p) => {
      var A;
      return (((A = p == null ? void 0 : p.stock) == null ? void 0 : A.id) ?? (p == null ? void 0 : p.stockId)) === e;
    }) : [];
  }, s = (e) => {
    var h;
    const c = (h = t == null ? void 0 : t.cutList) == null ? void 0 : h.value;
    return !c && !c.length ? [] : c.filter((p) => {
      var A;
      return (((A = p == null ? void 0 : p.stock) == null ? void 0 : A.id) ?? (p == null ? void 0 : p.stockId)) === e;
    }).sort((p, A) => {
      var O, R;
      return ((O = p == null ? void 0 : p.guillotineData) == null ? void 0 : O.order) - ((R = A == null ? void 0 : A.guillotineData) == null ? void 0 : R.order);
    });
  }, l = (e) => e != null && e.length ? e.filter((c) => c.used === !0) : [], L = (e) => {
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
    }), t.shapeList.value = it({
      shapeList: [
        { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
        { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
      ],
      stockList: t.stockList.value,
      preventAutoRotation: !0
    }), t.segmentList.value = ct({
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
    addedShapes: d,
    activeShapes: g,
    unplacedShapes: o,
    uniqueShapes: S,
    uniqueAddedShapes: n,
    unplacedShapeTally: v,
    uniqueStock: k,
    uniqueUsedStock: P,
    activeStock: r,
    activeCuts: T,
    activeCutsArea: C,
    activeCutType: E,
    usedStock: i,
    stackedStock: w,
    activeStockArea: y,
    activeShapeArea: m,
    activeStockStackCount: z,
    activeTotalArea: J,
    activeSegments: I,
    // methods
    reset: N,
    clear: u,
    sortItems: _,
    update: x,
    updateShapes: $,
    updateStock: q,
    updateFromResult: M,
    getStock: U,
    getShapes: F,
    getSegments: a,
    getCuts: s,
    setActiveStockId: L,
    // testing
    createTestData: f
  }, X;
}
const dt = G({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Pt() {
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
const { progress: j, reset: ft } = Pt();
function Ft(t) {
  const g = "https://api.cutlistevo.com/";
  let r;
  const T = () => {
    r = bt(g, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), r.on("connect", () => {
      var d, o, v;
      (d = t.refs) != null && d.connected && (t.refs.connected.value = !0), (v = (o = t.callbacks) == null ? void 0 : o.onConnect) == null || v.call(o);
    }), r.on("connect_error", (d) => {
      var o, v, S, n;
      (o = t.refs) != null && o.connected && (t.refs.connected.value = !1), (v = t.refs) != null && v.thinking && (t.refs.thinking.value = !1), (n = (S = t.callbacks) == null ? void 0 : S.onConnectError) == null || n.call(S, d);
    }), r.on("connect_timeout", (d) => {
      var o, v, S, n;
      (o = t.refs) != null && o.connected && (t.refs.connected.value = !1), (v = t.refs) != null && v.thinking && (t.refs.thinking.value = !1), (n = (S = t.callbacks) == null ? void 0 : S.onConnectError) == null || n.call(S, d);
    }), r.on("result", (d) => {
      var o, v;
      j.value.complete = !0, (v = (o = t.callbacks) == null ? void 0 : o.onResult) == null || v.call(o, d), r.disconnect();
    }), r.on("queued", () => {
      ft(), j.value.queued = !0;
    }), r.on("started", () => {
      j.value.started = !0;
    }), r.on("progress", (d) => {
      var o;
      ((o = d == null ? void 0 : d.data) == null ? void 0 : o.message) === "result" ? j.value.resultCount++ : (j.value.stockCount = d.data.stockCount, j.value.shapeCount = d.data.shapeCount);
    }), r.on("user", (d) => {
      var o, v;
      (v = (o = t.callbacks) == null ? void 0 : o.onUser) == null || v.call(o, d);
    }), r.on("error", (d) => {
      var o, v, S;
      (o = t.refs) != null && o.thinking && (t.refs.thinking.value = !1), ft(), (S = (v = t.callbacks) == null ? void 0 : v.onError) == null || S.call(v, d);
    });
  }, I = () => r == null ? void 0 : r.disconnect(), i = () => r == null ? void 0 : r.connect();
  return T(), {
    socket: r,
    connect: i,
    disconnect: I
  };
}
const V = G({
  show: !1,
  content: "",
  type: "info",
  referenceEl: null
});
function Mt() {
  let t = null;
  const g = () => {
    V.value.show = !1;
  }, r = (T) => {
    t && (clearTimeout(t), t = null), V.value = { ...V.value, ...T }, T.show && (t = setTimeout(() => {
      V.value.show = !1, t = null;
    }, 3e3));
  };
  return pt(() => V.value.referenceEl, (T) => {
    T || (V.value.show = !1);
  }), { tip: V, hide: g, update: r };
}
const ht = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], xt = (t) => ht.includes(t);
function Ot(t, g) {
  const r = (n) => {
    var k;
    (k = g.log) == null || k.call(g, n);
  }, T = (n) => {
    var k;
    return (k = g.error) == null || k.call(g, n), { success: !1, error: n };
  }, I = () => {
    for (const n of ht) i(n, 0);
  }, i = (n, k) => {
    r(["setting price", n, k]);
    const { inputs: P, elements: C, setInputValue: y, formatPrice: m } = g;
    if (isNaN(k)) throw new Error("Price must be a number");
    if (!xt(n)) return;
    const w = {
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
        hidden: null,
        visible: "stock_total_price"
      }
    }[n];
    w != null && w.hidden && P[w.hidden] && (r(["setting hidden price", w.hidden, k]), y(w.hidden, k)), w != null && w.visible && C[w.visible] && (C[w.visible].innerText = m(k));
  }, d = (n) => {
    const { product: k, getCurrentVariationPrice: P, isQuantityPricing: C, enableAddToCart: y, setCartQuantity: m } = g;
    let E = (k == null ? void 0 : k.price) || P() || 0;
    typeof E == "string" && (E = parseFloat(E));
    const w = t.unit_system === "imperial" ? "feet" : "meters", J = {
      full_stock: (u) => {
        if (r(["calculating cost by full sheet"]), C())
          m(u.metadata.totalUsedStock);
        else {
          const _ = u.metadata.totalStockCost;
          return i("stock", _), _;
        }
        return 0;
      },
      part_area: (u) => {
        r([`calculating cost by part area in square ${w}`]);
        const _ = t.unit_system === "imperial" ? 144 : 1e6, x = u.metadata.totalPartArea / _, $ = x * E;
        i("partArea", $), r([`part area in square ${w} is ${x} with price ${$}`]);
        let q = x;
        if (t != null && t.enable_offcut_pricing && (u != null && u.offcuts)) {
          const U = u == null ? void 0 : u.offcuts.reduce((a, s) => {
            const l = s.l >= s.w ? s.l : s.w, L = s.l >= s.w ? s.w : s.l;
            return l < t.offcut_min_length || L < t.offcut_min_width ? a + l * L : a;
          }, 0), F = U / _ * E;
          i("offcutArea", F), r([`calculated sellable offcut area as ${U}, with price ${F}`]), q += U / _;
        }
        const M = q * E;
        if (r([`calculated total price as ${M}, `]), C())
          r([`setting cart quantity to ${q}`]), m(q, 2);
        else
          return M;
        return 0;
      },
      cut_length: (u) => {
        r([`calculating cost by cut length in  ${w}`]);
        const _ = t.unit_system === "imperial" ? 12 : 1e3, x = u.metadata.totalCutLength / _;
        return m(x, 2), 0;
      },
      full_stock_plus_cut_length: (u) => {
        r(["calculating cost by full sheet plus cut length"]);
        let _ = 0;
        if (C())
          m(u.metadata.totalUsedStock);
        else {
          const M = u.metadata.totalStockCost;
          i("stock", M), _ = M;
        }
        const x = t.unit_system === "imperial" ? 12 : 1e3, q = u.metadata.totalCutLength / x * t.cut_length_price;
        return i("cutLength", q), _ + q;
      },
      full_stock_plus_num_parts: (u) => {
        r(["calculating cost by full sheet plus number of parts"]);
        let _ = 0;
        if (C())
          m(u.metadata.totalUsedStock);
        else {
          const $ = u.metadata.totalStockCost;
          i("stock", $), _ = $;
        }
        const x = u.metadata.totalPartsProduced * t.per_part_price;
        return i("perPart", x), _ + x;
      },
      roll_length: (u) => {
        r([`calculating cost by roll length in ${w}`]);
        const _ = t.unit_system === "imperial" ? 12 : 1e3, x = u.stock.reduce(($, q) => $ + q.analysis.rollLength / _ * It({ v: q.cost }), 0);
        return i("rollLength", x), x;
      }
    }[t.pricing_strategy], N = J(n);
    return y(), N;
  }, o = (n, k) => {
    const {
      isExtraEnabled: P,
      isMachiningEnabled: C,
      isSurchargeEnabled: y,
      inputType: m,
      getTotalBandingPrice: E,
      getTotalFinishPrice: w,
      getTotalMachiningPrice: z,
      getInputValue: J
    } = g;
    let N = k;
    if (P("banding") && n.metadata.bandingLengthByType) {
      const u = E(n.metadata.bandingLengthByType);
      i("banding", u), N += u;
    }
    if (P("finish") && n.metadata.finishAreaByType) {
      const u = w(n.metadata.finishAreaByType);
      i("finish", u), N += u;
    }
    if (m.value === "formula") {
      const u = parseFloat(J("smartcut-hardware-price"));
      isNaN(u) || (N += u);
    }
    if (C()) {
      const u = z(n);
      i("machining", u), N += u;
    }
    if (y() && t.surcharge) {
      const u = t.surcharge_type === "per_sheet" ? parseFloat(t.surcharge.toString()) * n.metadata.totalUsedStock : parseFloat(t.surcharge.toString());
      i("surcharge", u), r(["added surcharge", u]), N += u;
    }
    return N;
  }, v = (n) => {
    const { getInputValue: k, setInputValue: P } = g, C = {
      "smartcut-job-id": n.jobId,
      "smartcut-dimensions": n.parts.map((y) => `${y.l}x${y.w} [${y.q}]`).join(", "),
      "smartcut-total-cut-length": n.metadata.totalCutLength,
      "smartcut-part-area": n.metadata.totalPartArea,
      "smartcut-total-cuts": n.metadata.totalCuts,
      "smartcut-total-parts": n.metadata.totalPartsProduced,
      "smartcut-machining": n.metadata.hasMachining
    };
    if (Object.entries(C).forEach(([y, m]) => {
      P(y, m);
    }), k("smartcut-stock-summary") !== void 0) {
      const y = n.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      P("smartcut-stock-summary", y);
    }
  };
  return {
    calculatePrice: async (n) => {
      I();
      const { isQuantityPricing: k, selectedVariation: P, setVariationPrice: C, setCartQuantity: y } = g;
      if (!(n != null && n.jobId))
        return T("No job ID provided");
      k() || y(1);
      let m = d(n);
      if (m = o(n, m), !k()) {
        if (!n.metadata.totalStockCost)
          return T("Total stock cost not returned for a multiple size product");
        r([`total cost is ${m}`]), i("custom", m);
      }
      return P.value && C(m), v(n), { success: !0, totalPrice: m };
    },
    resetPricing: I
  };
}
export {
  $t as a,
  Gt as b,
  Mt as c,
  Ft as d,
  Pt as e,
  Ot as f,
  Nt as u
};
