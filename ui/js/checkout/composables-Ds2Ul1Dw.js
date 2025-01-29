import { g as G, H as ne, h as I, G as ee, S as j, i as Te } from "./vendor-vue-CrziaopC.js";
import { r as ue, I as de, a as le, m as _e, S as Le, b as Pe, t as fe, c as te, s as Ce, g as xe, u as he, d as se, e as Ae, f as qe, h as Ee, i as ve, j as pe, k as me, l as ge, n as Se, o as ke, p as Ne } from "./components-DcX3X-Yq.js";
import { p as ye, l as $e } from "./vendor-CtQQhE4g.js";
let ce = null;
function Fe(r = { numberFormat: "decimal" }) {
  const h = G(null), i = () => {
    const t = localStorage.getItem("GlobalStore/inputStock"), a = localStorage.getItem("GlobalStore/inputShapes");
    let u = [], g = [];
    if (t)
      try {
        const e = JSON.parse(t);
        e.length && (u = e), localStorage.removeItem("GlobalStore/inputStock");
      } catch (e) {
        console.error("Error migrating stock data:", e);
      }
    if (a)
      try {
        const e = JSON.parse(a);
        e.length && (g = e), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (e) {
        console.error("Error migrating shapes data:", e);
      }
    return { migratedStock: u, migratedShapes: g };
  }, { migratedStock: A, migratedShapes: _ } = i(), c = ne("inputs/inputStock", A, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return b(a, r.numberFormat);
      },
      write: (t) => {
        const a = t.filter((u) => !(u != null && u.multiEdit));
        return JSON.stringify(a);
      }
    },
    listenToStorageChanges: !1
  }), o = ne("inputs/inputShapes", _, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return m(a, r.numberFormat);
      },
      write: (t) => {
        const a = t.filter((u) => !(u != null && u.multiEdit));
        return JSON.stringify(a);
      }
    },
    listenToStorageChanges: !1
  }), d = ne("groups/userGroups", [], {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return ue(a);
      },
      write: (t) => JSON.stringify(t)
    },
    listenToStorageChanges: !1
  }), v = G(null), k = I(() => o.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), n = I(() => c.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), S = (t, a = "decimal") => {
    const u = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), g = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), e = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (u && C(u, a), g && T(g, a), e)
      try {
        d.value = ue(e, o.value);
      } catch (l) {
        console.error("Error updating user groups:", l);
      }
  }, C = (t, a = "decimal") => {
    try {
      o.value = m(t, a);
    } catch (u) {
      console.error("Error updating input shapes:", u);
    }
  }, T = (t, a = "decimal") => {
    try {
      c.value = b(t, a);
    } catch (u) {
      console.error("Error updating input stock:", u);
    }
  };
  function b(t, a = "decimal") {
    return t.map((u) => (delete u.id, new de(u, a)));
  }
  function m(t, a = "decimal") {
    return !t || !(t != null && t.length) ? [] : t.map((u) => (delete u.id, new le(u, a)));
  }
  const N = () => {
    v.value = null;
  }, w = () => {
    o.value = [], c.value = [], d.value = [];
  }, W = (t = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0
  }) => {
    if (!o.value.length)
      return { shapeList: [], issues: [] };
    const a = [], u = [];
    for (let g = 0; g < o.value.length; g++) {
      const e = o.value[g];
      if (!(e != null && e.q)) continue;
      const l = ["name", "material", "notes"];
      for (const R of l)
        R in e && (e[R] = ye.sanitize(e[R]));
      e.createId(g), e.applyPartTrim(t.trim, t.stockType);
      const s = { ...e };
      _e(s, t.orientationModel);
      const y = new Le(s);
      y.trimDimensions(), t.minSpacing && t.maxDimension && (y.l <= t.maxDimension || y.w <= t.maxDimension) && (y.minSpacing = t.minSpacing), u.push(y), a.push(...y.issues);
    }
    return { shapeList: u, issues: a };
  }, z = (t) => {
    if (!c.value.length)
      return { stockList: [], issues: [] };
    const a = [], u = [];
    for (let g = 0; g < c.value.length; g++) {
      const e = c.value[g];
      if (!(e != null && e.q) && !e.autoAdd) continue;
      const l = ["name", "material", "notes"];
      for (const y of l)
        y in e && (e[y] = ye.sanitize(e[y]));
      e.createId(g);
      const s = new Pe(e, t);
      a.push(...s.issues), u.push(s);
    }
    return { stockList: u, issues: a };
  }, $ = (t = null) => {
    var g;
    const a = [], u = fe(c.value);
    if (!c.value.some((e) => e.autoAdd) && (!((g = c.value) != null && g.length) || !u))
      return new te({
        message: "no_stock",
        listId: c.value.map((e) => e.listId),
        field: [["q"]],
        issues: a
      }), a;
    for (const e of c.value)
      a.push(...e.validate(t));
    return a;
  }, f = (t = null) => {
    var R, X, ie;
    const {
      saw: a = null,
      partTrim: u = 0,
      useInventory: g = !1
    } = t || {}, e = [];
    if (!o.value.length)
      return new te({
        message: "no_parts",
        issues: e
      }), e;
    if (!fe(o.value))
      return new te({
        message: "no_parts",
        issues: e
      }), o.value.forEach((Z) => new te({
        message: "no_parts",
        field: [["q"]],
        item: Z
      })), e;
    let s = 0;
    for (const Z of o.value)
      e.push(...Z.validate({
        inputStockList: c.value,
        index: s,
        stockType: a !== null ? a.stockType ?? null : null,
        partTrim: u,
        useInventory: g,
        saw: a
      })), s++;
    return e.length ? e : (Ce((R = q == null ? void 0 : q.inputShapes) == null ? void 0 : R.value, (X = q == null ? void 0 : q.inputStock) == null ? void 0 : X.value, a !== null ? a.stockType ?? null : null), (ie = q == null ? void 0 : q.inputShapes) == null ? void 0 : ie.value.flatMap((Z) => Z.issues));
  }, x = (t) => {
    if (!c.value.length) return "n";
    const a = t.material, u = t.t, g = c.value.filter((l) => l.material === a && l.t === u);
    return g.length ? xe(g) : "n";
  }, L = (t) => {
    for (const a of o.value)
      he(a, t);
    for (const a of c.value)
      he(a, t);
  }, F = () => {
    o.value.forEach((t) => t.issues = []), c.value.forEach((t) => t.issues = []);
  }, E = ({
    stock: t = !0,
    shapes: a = !0
  }) => {
    t && (c.value = [
      new de({
        l: 2440,
        w: 1220,
        q: 1
      })
    ]), a && (o.value = [
      new le({
        l: 500,
        w: 500,
        q: 1
      }),
      new le({
        l: 400,
        w: 400,
        q: 1
      })
    ]);
  }, V = (t) => {
    if (c.value.length === 1) return;
    const a = c.value.findIndex((u) => u.listId === t);
    a !== -1 && c.value.splice(a, 1);
  }, B = (t) => {
    if (o.value.length === 1) return;
    const a = o.value.findIndex((u) => u.listId === t);
    a !== -1 && o.value.splice(a, 1);
  }, q = {
    inputStock: c,
    inputShapes: o,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h
  };
  return {
    inputs: q,
    inputStock: c,
    inputShapes: o,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h,
    totalInputShapes: k,
    totalInputStock: n,
    reset: N,
    clear: w,
    clearIssues: F,
    updateInputs: S,
    updateInputShapes: C,
    updateInputStock: T,
    getShapeGrainSummary: x,
    createShapeList: W,
    createStockList: z,
    validateInputStock: $,
    validateInputShapes: f,
    updateNumberFormat: L,
    createTestData: E,
    removeStock: V,
    removeShape: B
  };
}
function ze(r = { numberFormat: "decimal" }) {
  return ce || (ce = Fe(r)), ce;
}
const J = G([]), Me = 6;
function Ve() {
  const r = ({
    message: i,
    type: A = "info",
    additional: _ = [],
    options: c = {},
    action: o = () => {
    }
  }) => {
    Array.isArray(_) || (console.warn("addNotice - additional must be an array"), _ = []);
    const d = {
      id: crypto.randomUUID(),
      message: se(i),
      additional: _.length > 5 ? _.slice(0, 5).map((k) => se(k)).join("<br>") + "<br>..." : _.slice(0, 5).map((k) => se(k)).join("<br>"),
      type: A,
      persistent: c.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, v = c.maxNotices ?? Me;
    if (J.value.length >= v) {
      const k = J.value.findIndex((n) => !n.persistent);
      if (k !== -1)
        J.value.splice(k, 1);
      else if (!d.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), d.id;
    }
    return J.value.push(d), !d.persistent && c.timeout !== 0 && setTimeout(() => {
      h(d.id);
    }, c.timeout || 5e3), d.id;
  }, h = (i) => {
    J.value.findIndex((_) => _.id === i) !== -1 && (J.value = J.value.filter((_) => _.id !== i));
  };
  return {
    notices: J,
    addNotice: r,
    dismissNotice: h
  };
}
const Ge = G(null), Q = G(null), U = G(null), P = ee([]), p = ee([]), M = ee([]), O = ee([]), Y = G([]), ae = G(null), D = ee([]), re = G(0), oe = G(null), Ue = {
  saw: Q,
  activeStockId: U,
  jobId: Ge,
  shapeList: P,
  stockList: p,
  cutList: M,
  segmentList: O,
  offcuts: Y,
  unusableShapes: D,
  metadata: ae,
  currentCutIndex: re
};
function je() {
  const r = I(() => U.value ? B(U.value) : []), h = I(() => {
    var e;
    return !U.value || !((e = p.value) != null && e.length) ? null : V(U.value);
  }), i = I(() => {
    var l;
    if (!h.value || !((l = M.value) != null && l.length)) return [];
    const e = t(h.value.id);
    return re.value = 0, e;
  }), A = I(() => {
    var e;
    return !h.value || !((e = O.value) != null && e.length) ? [] : q(U.value);
  }), _ = I(() => {
    var e;
    return (e = p.value) != null && e.length ? a(p.value) : [];
  }), c = I(() => P.value.filter((e) => e.added)), o = I(() => {
    var e;
    return (e = P.value) != null && e.length ? P.value.filter((l) => !l.added) : [];
  }), d = I(() => {
    var e;
    return (e = P.value) != null && e.length ? Ae(P.value) : [];
  }), v = I(() => {
    var e;
    return (e = P.value) != null && e.length ? P.value.filter((l) => !l.duplicate) : [];
  }), k = I(() => v.value.filter((e) => e.added)), n = I(() => {
    var e;
    return (e = p.value) != null && e.length ? p.value.filter((l) => l.used && !l.duplicate) : [];
  }), S = I(() => n.value.filter((e) => e.used)), C = I(() => {
    var e;
    return (e = M.value) != null && e.length ? i.value.reduce((l, s) => l + s.getArea(), 0) : 0;
  }), T = I(() => {
    var e;
    return !((e = p.value) != null && e.length) || !h.value ? 0 : h.value ? h.value.getArea() : 0;
  }), b = I(() => {
    var e;
    return !((e = P.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.reduce((l, s) => l + s.getArea(), 0) : 0;
  }), m = I(() => {
    var e;
    return !((e = M.value) != null && e.length) || !h.value ? null : h.value.cutType;
  }), N = I(() => {
    var l;
    return (l = p.value) != null && l.length ? p.value.filter((s) => s.used && (s.stack === !1 || typeof s.stack == "number")) : [];
  }), w = I(() => {
    var e;
    return (e = p.value) != null && e.length ? qe(h.value, p.value) : 0;
  }), W = I(() => {
    var l;
    if (!((l = p.value) != null && l.length)) return 0;
    let e = T.value ? (C.value + b.value) / T.value : null;
    return e > 1 && (e = 1), e;
  }), z = () => {
    Q.value = null, P.value.length = 0, p.value.length = 0, M.value.length = 0, O.value.length = 0, Y.value.length = 0, D.value.length = 0;
  }, $ = () => {
    Q.value = null, U.value = null, oe.value = null, ae.value = null, P.value = [], p.value = [], M.value = [], O.value = [], Y.value = [], re.value = 0, D.value = [];
  }, f = (e, l) => {
    var s;
    e in this && ((s = this[e]) == null || s.sort(Ee[l]));
  }, x = (e) => {
    j(e);
  }, L = () => {
    j(P);
  }, F = () => {
    j(p);
  }, E = (e) => {
    var l, s, y, R;
    if (!((l = e == null ? void 0 : e.shapeList) != null && l.some((X) => X.added))) {
      $();
      return;
    }
    ae.value = e.metadata, D.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (Q.value = new ve(
        e == null ? void 0 : e.saw,
        (s = e == null ? void 0 : e.saw) == null ? void 0 : s.stockType
      )), p.value = pe({
        saw: Q.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), P.value = me({
        shapeList: e.shapeList,
        stockList: p.value,
        preventAutoRotation: !0
      }), M.value = ge({
        cutList: e.cutList,
        stockList: p.value
      }), O.value = Se({
        segmentList: e.segmentList,
        stockList: p.value
      }), Y.value = ke({
        offcuts: e.offcuts,
        stockList: p.value,
        preventAutoRotation: !0
      }), j(p), j(P), j(M), j(O), U.value = ((R = (y = a(p.value)) == null ? void 0 : y[0]) == null ? void 0 : R.id) || null;
    } catch (X) {
      console.error("Error updating from result", X);
    }
  }, V = (e) => {
    var l;
    return (l = p.value) != null && l.length ? p.value.find((s) => s.id === e) : null;
  }, B = (e) => {
    var l;
    return (l = P.value) != null && l.length ? P.value.filter((s) => {
      var y;
      return (((y = s == null ? void 0 : s.stock) == null ? void 0 : y.id) ?? (s == null ? void 0 : s.stockId)) === e;
    }) : [];
  }, q = (e) => {
    var l;
    return (l = O.value) != null && l.length ? O.value.filter((s) => {
      var y;
      return (((y = s == null ? void 0 : s.stock) == null ? void 0 : y.id) ?? (s == null ? void 0 : s.stockId)) === e;
    }) : [];
  }, t = (e) => {
    var l;
    if ((l = M.value) != null && l.length)
      return M.value.filter((s) => {
        var y;
        return (((y = s == null ? void 0 : s.stock) == null ? void 0 : y.id) ?? (s == null ? void 0 : s.stockId)) === e;
      });
  }, a = (e) => e != null && e.length ? e.filter((l) => l.used === !0) : [];
  return {
    //all result items for convenience
    r: Ue,
    //state
    activeStockId: U,
    saw: Q,
    shapeList: P,
    stockList: p,
    cutList: M,
    segmentList: O,
    offcuts: Y,
    unusableShapes: D,
    currentCutIndex: re,
    activeShape: oe,
    //computed
    addedShapes: c,
    activeShapes: r,
    unplacedShapes: o,
    uniqueShapes: v,
    uniqueAddedShapes: k,
    unplacedShapeTally: d,
    uniqueStock: n,
    uniqueUsedStock: S,
    activeStock: h,
    activeCuts: i,
    activeCutsArea: C,
    activeCutType: m,
    usedStock: _,
    stackedStock: N,
    activeStockArea: T,
    activeShapeArea: b,
    activeStockStackCount: w,
    activeTotalArea: W,
    activeSegments: A,
    //methods
    reset: z,
    clear: $,
    sortItems: f,
    update: x,
    updateShapes: L,
    updateStock: F,
    updateFromResult: E,
    getStock: V,
    getShapes: B,
    getSegments: q,
    getCuts: t,
    setActiveStockId: (e) => {
      oe.value = null, U.value = e;
    },
    //testing
    createTestData: () => {
      Q.value = new ve({
        bladeWidth: 1,
        stockType: "sheet",
        cutType: "guillotine",
        cutPreference: "l"
      }), p.value = pe({
        saw: Q.value,
        stockList: [
          { id: "1.0", used: !0, l: 2440, w: 1220, q: 1 }
        ]
      }), P.value = me({
        shapeList: [
          { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
          { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
        ],
        stockList: p.value,
        preventAutoRotation: !0
      }), O.value = Se({
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
        stockList: p.value
      }), M.value = ge({
        cutList: [
          { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 }
        ],
        stockList: p.value
      }), Y.value = ke({
        offcuts: [
          { stockId: "1.0", id: "1", x: 501, y: 401, l: 400, w: 99, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 0 },
          { stockId: "1.0", id: "2", x: 902, y: 0, l: 1538, w: 500, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 1 },
          { stockId: "1.0", id: "3", x: 0, y: 501, l: 2440, w: 719, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 2 }
        ],
        stockList: p.value,
        preventAutoRotation: !0
      }), ae.value = {
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
    }
  };
}
const we = G({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Oe() {
  return {
    progress: we,
    reset: () => {
      we.value = {
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
const { progress: K, reset: be } = Oe();
function He(r) {
  const h = "https://api.cutlistevo.com/";
  let i;
  const A = () => {
    i = $e(h, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), i.on("connect", () => {
      var o, d, v;
      (o = r.refs) != null && o.connected && (r.refs.connected.value = !0), (v = (d = r.callbacks) == null ? void 0 : d.onConnect) == null || v.call(d);
    }), i.on("connect_error", (o) => {
      var d, v, k, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (k = r.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, o);
    }), i.on("connect_timeout", (o) => {
      var d, v, k, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (k = r.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, o);
    }), i.on("result", (o) => {
      var d, v;
      K.value.complete = !0, (v = (d = r.callbacks) == null ? void 0 : d.onResult) == null || v.call(d, o), i.disconnect();
    }), i.on("queued", () => {
      be(), K.value.queued = !0;
    }), i.on("started", () => {
      K.value.started = !0;
    }), i.on("progress", (o) => {
      var d;
      ((d = o == null ? void 0 : o.data) == null ? void 0 : d.message) === "result" ? K.value.resultCount++ : (K.value.stockCount = o.data.stockCount, K.value.shapeCount = o.data.shapeCount);
    }), i.on("user", (o) => {
      var d, v;
      (v = (d = r.callbacks) == null ? void 0 : d.onUser) == null || v.call(d, o);
    }), i.on("error", (o) => {
      var d, v, k;
      (d = r.refs) != null && d.thinking && (r.refs.thinking.value = !1), be(), (k = (v = r.callbacks) == null ? void 0 : v.onError) == null || k.call(v, o);
    });
  }, _ = () => i == null ? void 0 : i.disconnect(), c = () => i == null ? void 0 : i.connect();
  return A(), {
    socket: i,
    connect: c,
    disconnect: _
  };
}
const H = G({
  show: !1,
  content: "",
  type: "info",
  referenceEl: null
});
function We() {
  let r = null;
  const h = () => {
    H.value.show = !1;
  }, i = (A) => {
    r && (clearTimeout(r), r = null), H.value = { ...H.value, ...A }, A.show && (r = setTimeout(() => {
      H.value.show = !1, r = null;
    }, 3e3));
  };
  return Te(() => H.value.referenceEl, (A) => {
    A || (H.value.show = !1);
  }), { tip: H, hide: h, update: i };
}
const Ie = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Re = (r) => Ie.includes(r);
function Xe(r, h) {
  const i = (n) => {
    var S;
    (S = h.log) == null || S.call(h, n);
  }, A = (n) => {
    var S;
    return (S = h.error) == null || S.call(h, n), { success: !1, error: n };
  }, _ = () => {
    for (const n of Ie) c(n, 0);
  }, c = (n, S) => {
    const { inputs: C, elements: T, setInputValue: b, formatPrice: m } = h;
    if (isNaN(S)) throw new Error("Price must be a number");
    if (!Re(n)) return;
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
    w != null && w.hidden && C[w.hidden] && (console.log("setting hidden price", w.hidden, S), b(w.hidden, S)), w != null && w.visible && T[w.visible] && (T[w.visible].innerText = m(S));
  }, o = (n) => {
    const { product: S, getCurrentVariationPrice: C, isQuantityPricing: T, enableAddToCart: b, setCartQuantity: m } = h;
    let N = (S == null ? void 0 : S.price) || C() || 0;
    typeof N == "string" && (N = parseFloat(N));
    const w = r.unit_system === "imperial" ? "feet" : "meters", z = {
      full_stock: (f) => (i(["calculating cost by full sheet"]), T() ? (m(f.metadata.totalUsedStock), 0) : f.metadata.totalStockCost),
      part_area: (f) => {
        i([`calculating cost by part area in square ${w}`]);
        const x = r.unit_system === "imperial" ? 144 : 1e6, L = f.metadata.totalPartArea / x, F = L * N;
        c("partArea", F), i([`part area in square ${w} is ${L} with price ${F}`]);
        let E = L;
        if (r != null && r.enable_offcut_pricing && (f != null && f.offcuts)) {
          const B = f == null ? void 0 : f.offcuts.reduce((t, a) => {
            const u = a.l >= a.w ? a.l : a.w, g = a.l >= a.w ? a.w : a.l;
            return u < r.offcut_min_length || g < r.offcut_min_width ? t + u * g : t;
          }, 0), q = B / x * N;
          c("offcutArea", q), i([`calculated sellable offcut area as ${B}, with price ${q}`]), E += B / x;
        }
        const V = E * N;
        if (i([`calculated total price as ${V}, `]), T())
          i([`setting cart quantity to ${E}`]), m(E, 2);
        else
          return V;
        return 0;
      },
      cut_length: (f) => {
        i([`calculating cost by cut length in  ${w}`]);
        const x = r.unit_system === "imperial" ? 12 : 1e3, L = f.metadata.totalCutLength / x;
        return m(L, 2), 0;
      },
      full_stock_plus_cut_length: (f) => {
        i(["calculating cost by full sheet plus cut length"]);
        let x = 0;
        T() ? m(f.metadata.totalUsedStock) : x = f.metadata.totalStockCost;
        const L = r.unit_system === "imperial" ? 12 : 1e3, E = f.metadata.totalCutLength / L * r.cut_length_price;
        return c("cutLength", E), x + E;
      },
      full_stock_plus_num_parts: (f) => {
        i(["calculating cost by full sheet plus number of parts"]);
        let x = 0;
        if (T())
          m(f.metadata.totalUsedStock);
        else {
          const F = f.metadata.totalStockCost;
          console.log("stockCost", F), c("stock", F), x = F;
        }
        const L = f.metadata.totalPartsProduced * r.per_part_price;
        return console.log("partPrice", L), c("perPart", L), x + L;
      },
      roll_length: (f) => {
        i([`calculating cost by roll length in ${w}`]);
        const x = r.unit_system === "imperial" ? 12 : 1e3, L = f.stock.reduce((F, E) => F + E.analysis.rollLength / x * Ne({ v: E.cost }), 0);
        return c("rollLength", L), L;
      }
    }[r.pricing_strategy], $ = z(n);
    return b(), $;
  }, d = (n, S) => {
    const {
      isExtraEnabled: C,
      isMachiningEnabled: T,
      isSurchargeEnabled: b,
      inputType: m,
      getTotalBandingPrice: N,
      getTotalFinishPrice: w,
      getTotalMachiningPrice: W,
      getInputValue: z
    } = h;
    let $ = S;
    if (C("banding") && n.metadata.bandingLengthByType) {
      const f = N(n.metadata.bandingLengthByType);
      c("banding", f), $ += f;
    }
    if (C("finish") && n.metadata.finishAreaByType) {
      const f = w(n.metadata.finishAreaByType);
      c("finish", f), $ += f;
    }
    if (m.value === "formula") {
      const f = parseFloat(z("smartcut-hardware-price"));
      isNaN(f) || ($ += f);
    }
    if (T()) {
      const f = W(n);
      c("machining", f), $ += f;
    }
    if (b() && r.surcharge) {
      const f = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * n.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      c("surcharge", f), i(["added surcharge", f]), $ += f;
    }
    return $;
  }, v = (n) => {
    const { getInputValue: S, setInputValue: C } = h, T = {
      "smartcut-job-id": n.jobId,
      "smartcut-dimensions": n.parts.map((b) => `${b.l}x${b.w} [${b.q}]`).join(", "),
      "smartcut-total-cut-length": n.metadata.totalCutLength,
      "smartcut-part-area": n.metadata.totalPartArea,
      "smartcut-total-cuts": n.metadata.totalCuts,
      "smartcut-total-parts": n.metadata.totalPartsProduced,
      "smartcut-machining": n.metadata.hasMachining
    };
    if (Object.entries(T).forEach(([b, m]) => {
      C(b, m);
    }), S("smartcut-stock-summary") !== void 0) {
      const b = n.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      C("smartcut-stock-summary", b);
    }
  };
  return {
    calculatePrice: async (n) => {
      _();
      const { isQuantityPricing: S, selectedVariation: C, setVariationPrice: T, setCartQuantity: b } = h;
      if (!(n != null && n.jobId))
        return A("No job ID provided");
      S() || b(1);
      let m = o(n);
      if (m = d(n, m), !S()) {
        if (!n.metadata.totalStockCost)
          return A("Total stock cost not returned for a multiple size product");
        i([`total cost is ${m}`]), c("custom", m);
      }
      return C.value && T(m), v(n), { success: !0, totalPrice: m };
    },
    resetPricing: _
  };
}
export {
  Ve as a,
  je as b,
  We as c,
  He as d,
  Oe as e,
  Xe as f,
  ze as u
};
