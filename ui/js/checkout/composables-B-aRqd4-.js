import { g as G, H as le, h as I, G as ee, S as te, i as Te } from "./vendor-vue-CrziaopC.js";
import { r as ue, I as de, a as se, m as _e, S as Le, b as Pe, t as fe, c as ae, s as Ce, g as xe, u as he, d as ce, e as Ae, f as qe, h as Ee, i as ve, j as pe, k as me, l as ge, n as Se, o as ke, p as Ne } from "./components-BJQDbi7B.js";
import { p as ye, l as $e } from "./vendor-CtQQhE4g.js";
let oe = null;
function Fe(r = { numberFormat: "decimal" }) {
  const v = G(null), d = () => {
    const t = localStorage.getItem("GlobalStore/inputStock"), a = localStorage.getItem("GlobalStore/inputShapes");
    let o = [], S = [];
    if (t)
      try {
        const l = JSON.parse(t);
        l.length && (o = l), localStorage.removeItem("GlobalStore/inputStock");
      } catch (l) {
        console.error("Error migrating stock data:", l);
      }
    if (a)
      try {
        const l = JSON.parse(a);
        l.length && (S = l), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (l) {
        console.error("Error migrating shapes data:", l);
      }
    return { migratedStock: o, migratedShapes: S };
  }, { migratedStock: q, migratedShapes: _ } = d(), i = le("inputs/inputStock", q, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return b(a, r.numberFormat);
      },
      write: (t) => {
        const a = t.filter((o) => !(o != null && o.multiEdit));
        return JSON.stringify(a);
      }
    },
    listenToStorageChanges: !1
  }), u = le("inputs/inputShapes", _, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return m(a, r.numberFormat);
      },
      write: (t) => {
        const a = t.filter((o) => !(o != null && o.multiEdit));
        return JSON.stringify(a);
      }
    },
    listenToStorageChanges: !1
  }), f = le("groups/userGroups", [], {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return ue(a);
      },
      write: (t) => JSON.stringify(t)
    },
    listenToStorageChanges: !1
  }), p = G(null), y = I(() => u.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), n = I(() => i.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), k = (t, a = "decimal") => {
    const o = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), S = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), l = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (o && C(o, a), S && T(S, a), l)
      try {
        f.value = ue(l, u.value);
      } catch (e) {
        console.error("Error updating user groups:", e);
      }
  }, C = (t, a = "decimal") => {
    try {
      u.value = m(t, a);
    } catch (o) {
      console.error("Error updating input shapes:", o);
    }
  }, T = (t, a = "decimal") => {
    try {
      i.value = b(t, a);
    } catch (o) {
      console.error("Error updating input stock:", o);
    }
  };
  function b(t, a = "decimal") {
    return t.map((o) => (delete o.id, new de(o, a)));
  }
  function m(t, a = "decimal") {
    return !t || !(t != null && t.length) ? [] : t.map((o) => (delete o.id, new se(o, a)));
  }
  const $ = () => {
    p.value = null;
  }, w = () => {
    u.value = [], i.value = [], f.value = [];
  }, H = (t = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0
  }) => {
    if (!u.value.length)
      return { shapeList: [], issues: [] };
    const a = [], o = [];
    for (let S = 0; S < u.value.length; S++) {
      const l = u.value[S];
      if (!(l != null && l.q)) continue;
      const e = ["name", "material", "notes"];
      for (const P of e)
        P in l && (l[P] = ye.sanitize(l[P]));
      l.createId(S), l.applyPartTrim(t.trim, t.stockType);
      const s = { ...l };
      _e(s, t.orientationModel);
      const c = new Le(s);
      c.trimDimensions(), t.minSpacing && t.maxDimension && (c.l <= t.maxDimension || c.w <= t.maxDimension) && (c.minSpacing = t.minSpacing), o.push(c), a.push(...c.issues);
    }
    return { shapeList: o, issues: a };
  }, z = (t) => {
    if (!i.value.length)
      return { stockList: [], issues: [] };
    const a = [], o = [];
    for (let S = 0; S < i.value.length; S++) {
      const l = i.value[S];
      if (!(l != null && l.q) && !l.autoAdd) continue;
      const e = ["name", "material", "notes"];
      for (const c of e)
        c in l && (l[c] = ye.sanitize(l[c]));
      l.createId(S);
      const s = new Pe(l);
      s.saw = t, a.push(...s.issues), o.push(s);
    }
    return { stockList: o, issues: a };
  }, F = (t = null) => {
    var S;
    const a = [], o = fe(i.value);
    if (!i.value.some((l) => l.autoAdd) && (!((S = i.value) != null && S.length) || !o))
      return new ae({
        message: "no_stock",
        listId: i.value.map((l) => l.listId),
        field: [["q"]],
        issues: a
      }), a;
    for (const l of i.value)
      a.push(...l.validate(t));
    return a;
  }, h = (t = null) => {
    var P, Y, X;
    const {
      saw: a = null,
      partTrim: o = 0,
      useInventory: S = !1
    } = t || {}, l = [];
    if (!u.value.length)
      return new ae({
        message: "no_parts",
        issues: l
      }), l;
    if (!fe(u.value))
      return new ae({
        message: "no_parts",
        issues: l
      }), u.value.forEach((Z) => new ae({
        message: "no_parts",
        field: [["q"]],
        item: Z
      })), l;
    let s = 0;
    for (const Z of u.value)
      l.push(...Z.validate({
        inputStockList: i.value,
        index: s,
        stockType: a !== null ? a.stockType ?? null : null,
        partTrim: o,
        useInventory: S,
        saw: a
      })), s++;
    return l.length ? l : (Ce((P = E == null ? void 0 : E.inputShapes) == null ? void 0 : P.value, (Y = E == null ? void 0 : E.inputStock) == null ? void 0 : Y.value, a !== null ? a.stockType ?? null : null), (X = E == null ? void 0 : E.inputShapes) == null ? void 0 : X.value.flatMap((Z) => Z.issues));
  }, x = (t) => {
    if (!i.value.length) return "n";
    const a = t.material, o = t.t, S = i.value.filter((e) => e.material === a && e.t === o);
    return S.length ? xe(S) : "n";
  }, L = (t) => {
    for (const a of u.value)
      he(a, t);
    for (const a of i.value)
      he(a, t);
  }, M = () => {
    u.value.forEach((t) => t.issues = []), i.value.forEach((t) => t.issues = []);
  }, N = ({
    stock: t = !0,
    shapes: a = !0
  }) => {
    t && (i.value = [
      new de({
        l: 2440,
        w: 1220,
        q: 1
      })
    ]), a && (u.value = [
      new se({
        l: 500,
        w: 500,
        q: 1
      }),
      new se({
        l: 400,
        w: 400,
        q: 1
      })
    ]);
  }, W = (t) => {
    if (i.value.length === 1) return;
    const a = i.value.findIndex((o) => o.listId === t);
    a !== -1 && i.value.splice(a, 1);
  }, B = (t) => {
    if (u.value.length === 1) return;
    const a = u.value.findIndex((o) => o.listId === t);
    a !== -1 && u.value.splice(a, 1);
  }, E = {
    inputStock: i,
    inputShapes: u,
    userGroups: f,
    currentInputShape: p,
    selectedSaw: v
  };
  return {
    inputs: E,
    inputStock: i,
    inputShapes: u,
    userGroups: f,
    currentInputShape: p,
    selectedSaw: v,
    totalInputShapes: y,
    totalInputStock: n,
    reset: $,
    clear: w,
    clearIssues: M,
    updateInputs: k,
    updateInputShapes: C,
    updateInputStock: T,
    getShapeGrainSummary: x,
    createShapeList: H,
    createStockList: z,
    validateInputStock: F,
    validateInputShapes: h,
    updateNumberFormat: L,
    createTestData: N,
    removeStock: W,
    removeShape: B
  };
}
function ze(r = { numberFormat: "decimal" }) {
  return oe || (oe = Fe(r)), oe;
}
const J = G([]), Me = 6;
function Ve() {
  const r = ({
    message: d,
    type: q = "info",
    additional: _ = [],
    options: i = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(_) || (console.warn("addNotice - additional must be an array"), _ = []);
    const f = {
      id: crypto.randomUUID(),
      message: ce(d),
      additional: _.length > 5 ? _.slice(0, 5).map((y) => ce(y)).join("<br>") + "<br>..." : _.slice(0, 5).map((y) => ce(y)).join("<br>"),
      type: q,
      persistent: i.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, p = i.maxNotices ?? Me;
    if (J.value.length >= p) {
      const y = J.value.findIndex((n) => !n.persistent);
      if (y !== -1)
        J.value.splice(y, 1);
      else if (!f.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), f.id;
    }
    return J.value.push(f), !f.persistent && i.timeout !== 0 && setTimeout(() => {
      v(f.id);
    }, i.timeout || 5e3), f.id;
  }, v = (d) => {
    J.value.findIndex((_) => _.id === d) !== -1 && (J.value = J.value.filter((_) => _.id !== d));
  };
  return {
    notices: J,
    addNotice: r,
    dismissNotice: v
  };
}
const Q = G(null), U = G(null), Ge = G(null), A = ee([]), g = ee([]), O = ee([]), R = ee([]), j = G([]), D = ee([]), re = G(null), ne = G(0), ie = G(null), Oe = {
  saw: Q,
  activeStockId: U,
  jobId: Ge,
  shapeList: A,
  stockList: g,
  cutList: O,
  segmentList: R,
  offcuts: j,
  unusableShapes: D,
  metadata: re,
  currentCutIndex: ne
};
function je() {
  const r = I(() => U.value ? E(U.value) : []), v = I(() => {
    var e;
    return !U.value || !((e = g.value) != null && e.length) ? null : B(U.value);
  }), d = I(() => {
    var s;
    if (!v.value || !((s = O.value) != null && s.length)) return [];
    const e = a(v.value.id);
    return ne.value = 0, e;
  }), q = I(() => {
    var e;
    return !v.value || !((e = R.value) != null && e.length) ? [] : t(U.value);
  }), _ = I(() => {
    var e;
    return (e = g.value) != null && e.length ? o(g.value) : [];
  }), i = I(() => A.value.filter((e) => e.added)), u = I(() => {
    var e;
    return (e = A.value) != null && e.length ? A.value.filter((s) => !s.added) : [];
  }), f = I(() => {
    var e;
    return (e = A.value) != null && e.length ? Ae(A.value) : [];
  }), p = I(() => {
    var e;
    return (e = A.value) != null && e.length ? A.value.filter((s) => !s.duplicate) : [];
  }), y = I(() => p.value.filter((e) => e.added)), n = I(() => {
    var e;
    return (e = g.value) != null && e.length ? g.value.filter((s) => s.used && !s.duplicate) : [];
  }), k = I(() => n.value.filter((e) => e.used)), C = I(() => {
    var e;
    return (e = O.value) != null && e.length ? d.value.reduce((s, c) => s + c.getArea(), 0) : 0;
  }), T = I(() => {
    var e;
    return !((e = g.value) != null && e.length) || !v.value ? 0 : v.value ? v.value.getArea() : 0;
  }), b = I(() => {
    var e;
    return !((e = A.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.reduce((s, c) => s + c.getArea(), 0) : 0;
  }), m = I(() => {
    var e;
    return !((e = O.value) != null && e.length) || !v.value ? null : v.value.cutType;
  }), $ = I(() => {
    var s;
    return (s = g.value) != null && s.length ? g.value.filter((c) => c.used && (c.stack === !1 || typeof c.stack == "number")) : [];
  }), w = I(() => {
    var e;
    return (e = g.value) != null && e.length ? qe(v.value, g.value) : 0;
  }), H = I(() => {
    var s;
    if (!((s = g.value) != null && s.length)) return 0;
    let e = T.value ? (C.value + b.value) / T.value : null;
    return e > 1 && (e = 1), e;
  }), z = () => {
    Q.value = null, A.value.length = 0, g.value.length = 0, O.value.length = 0, R.value.length = 0, j.value.length = 0, D.value.length = 0;
  }, F = () => {
    Q.value = null, U.value = null, ie.value = null, re.value = null, A.value = [], g.value = [], O.value = [], R.value = [], j.value = [], ne.value = 0, D.value = [];
  }, h = (e, s) => {
    var c;
    e in this && ((c = this[e]) == null || c.sort(Ee[s]));
  }, x = (e) => {
    te(e);
  }, L = () => {
    te(A);
  }, M = () => {
    te(g);
  }, N = () => {
    te(j);
  }, W = (e) => {
    var s, c, P, Y;
    if (!((s = e == null ? void 0 : e.shapeList) != null && s.some((X) => X.added))) {
      F();
      return;
    }
    re.value = e.metadata, D.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (Q.value = new ve(
        e == null ? void 0 : e.saw,
        (c = e == null ? void 0 : e.saw) == null ? void 0 : c.stockType
      )), g.value = pe({
        saw: Q.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), A.value = me({
        shapeList: e.shapeList,
        stockList: g.value,
        preventAutoRotation: !0
      }), O.value = ge({
        cutList: e.cutList,
        stockList: g.value
      }), R.value = Se({
        segmentList: e.segmentList,
        stockList: g.value
      }), j.value = ke({
        offcuts: e.offcuts,
        stockList: g.value,
        preventAutoRotation: !0
      }), U.value = ((Y = (P = o(g.value)) == null ? void 0 : P[0]) == null ? void 0 : Y.id) || null;
    } catch (X) {
      console.error("Error updating from result", X);
    }
  }, B = (e) => {
    var s;
    return (s = g.value) != null && s.length ? g.value.find((c) => c.id === e) : null;
  }, E = (e) => {
    var s;
    return (s = A.value) != null && s.length ? A.value.filter((c) => {
      var P;
      return (((P = c == null ? void 0 : c.stock) == null ? void 0 : P.id) ?? (c == null ? void 0 : c.stockId)) === e;
    }) : [];
  }, t = (e) => {
    var s;
    return (s = R.value) != null && s.length ? R.value.filter((c) => {
      var P;
      return (((P = c == null ? void 0 : c.stock) == null ? void 0 : P.id) ?? (c == null ? void 0 : c.stockId)) === e;
    }) : [];
  }, a = (e) => {
    var s;
    if ((s = O.value) != null && s.length)
      return O.value.filter((c) => {
        var P;
        return (((P = c == null ? void 0 : c.stock) == null ? void 0 : P.id) ?? (c == null ? void 0 : c.stockId)) === e;
      });
  }, o = (e) => e != null && e.length ? e.filter((s) => s.used === !0) : [];
  return {
    //all result items for convenience
    r: Oe,
    //state
    activeStockId: U,
    saw: Q,
    shapeList: A,
    stockList: g,
    cutList: O,
    segmentList: R,
    offcuts: j,
    unusableShapes: D,
    currentCutIndex: ne,
    activeShape: ie,
    //computed
    addedShapes: i,
    activeShapes: r,
    unplacedShapes: u,
    uniqueShapes: p,
    uniqueAddedShapes: y,
    unplacedShapeTally: f,
    uniqueStock: n,
    uniqueUsedStock: k,
    activeStock: v,
    activeCuts: d,
    activeCutsArea: C,
    activeCutType: m,
    usedStock: _,
    stackedStock: $,
    activeStockArea: T,
    activeShapeArea: b,
    activeStockStackCount: w,
    activeTotalArea: H,
    activeSegments: q,
    //methods
    reset: z,
    clear: F,
    sortItems: h,
    update: x,
    updateShapes: L,
    updateStock: M,
    updateOffcuts: N,
    updateFromResult: W,
    getStock: B,
    getShapes: E,
    getSegments: t,
    getCuts: a,
    setActiveStockId: (e) => {
      ie.value = null, U.value = e;
    },
    //testing
    createTestData: () => {
      Q.value = new ve({
        bladeWidth: 1,
        stockType: "sheet",
        cutType: "guillotine",
        cutPreference: "l"
      }), g.value = pe({
        saw: Q.value,
        stockList: [
          { id: "1.0", used: !0, l: 2440, w: 1220, q: 1 }
        ]
      }), A.value = me({
        shapeList: [
          { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
          { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
        ],
        stockList: g.value,
        preventAutoRotation: !0
      }), R.value = Se({
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
        stockList: g.value
      }), O.value = ge({
        cutList: [
          { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 }
        ],
        stockList: g.value
      }), j.value = ke({
        offcuts: [
          { stockId: "1.0", id: "1", x: 501, y: 401, l: 400, w: 99, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 0 },
          { stockId: "1.0", id: "2", x: 902, y: 0, l: 1538, w: 500, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 1 },
          { stockId: "1.0", id: "3", x: 0, y: 501, l: 2440, w: 719, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 2 }
        ],
        stockList: g.value,
        preventAutoRotation: !0
      }), re.value = {
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
function Ue() {
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
const { progress: K, reset: be } = Ue();
function He(r) {
  const v = "https://api.cutlistevo.com/";
  let d;
  const q = () => {
    d = $e(v, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), d.on("connect", () => {
      var u, f, p;
      (u = r.refs) != null && u.connected && (r.refs.connected.value = !0), (p = (f = r.callbacks) == null ? void 0 : f.onConnect) == null || p.call(f);
    }), d.on("connect_error", (u) => {
      var f, p, y, n;
      (f = r.refs) != null && f.connected && (r.refs.connected.value = !1), (p = r.refs) != null && p.thinking && (r.refs.thinking.value = !1), (n = (y = r.callbacks) == null ? void 0 : y.onConnectError) == null || n.call(y, u);
    }), d.on("connect_timeout", (u) => {
      var f, p, y, n;
      (f = r.refs) != null && f.connected && (r.refs.connected.value = !1), (p = r.refs) != null && p.thinking && (r.refs.thinking.value = !1), (n = (y = r.callbacks) == null ? void 0 : y.onConnectError) == null || n.call(y, u);
    }), d.on("result", (u) => {
      var f, p;
      K.value.complete = !0, (p = (f = r.callbacks) == null ? void 0 : f.onResult) == null || p.call(f, u), d.disconnect();
    }), d.on("queued", () => {
      be(), K.value.queued = !0;
    }), d.on("started", () => {
      K.value.started = !0;
    }), d.on("progress", (u) => {
      var f;
      ((f = u == null ? void 0 : u.data) == null ? void 0 : f.message) === "result" ? K.value.resultCount++ : (K.value.stockCount = u.data.stockCount, K.value.shapeCount = u.data.shapeCount);
    }), d.on("user", (u) => {
      var f, p;
      (p = (f = r.callbacks) == null ? void 0 : f.onUser) == null || p.call(f, u);
    }), d.on("error", (u) => {
      var f, p, y;
      (f = r.refs) != null && f.thinking && (r.refs.thinking.value = !1), be(), (y = (p = r.callbacks) == null ? void 0 : p.onError) == null || y.call(p, u);
    });
  }, _ = () => d == null ? void 0 : d.disconnect(), i = () => d == null ? void 0 : d.connect();
  return q(), {
    socket: d,
    connect: i,
    disconnect: _
  };
}
const V = G({
  show: !1,
  content: "",
  type: "info",
  referenceEl: null
});
function We() {
  let r = null;
  const v = () => {
    V.value.show = !1;
  }, d = (q) => {
    r && (clearTimeout(r), r = null), V.value = { ...V.value, ...q }, q.show && (r = setTimeout(() => {
      V.value.show = !1, r = null;
    }, 3e3));
  };
  return Te(() => V.value.referenceEl, (q) => {
    q || (V.value.show = !1);
  }), { tip: V, hide: v, update: d };
}
const Ie = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Re = (r) => Ie.includes(r);
function Xe(r, v) {
  const d = (n) => {
    var k;
    (k = v.log) == null || k.call(v, n);
  }, q = (n) => {
    var k;
    return (k = v.error) == null || k.call(v, n), { success: !1, error: n };
  }, _ = () => {
    for (const n of Ie) i(n, 0);
  }, i = (n, k) => {
    const { inputs: C, elements: T, setInputValue: b, formatPrice: m } = v;
    if (isNaN(k)) throw new Error("Price must be a number");
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
    w != null && w.hidden && C[w.hidden] && (console.log("setting hidden price", w.hidden, k), b(w.hidden, k)), w != null && w.visible && T[w.visible] && (T[w.visible].innerText = m(k));
  }, u = (n) => {
    const { product: k, getCurrentVariationPrice: C, isQuantityPricing: T, enableAddToCart: b, setCartQuantity: m } = v;
    let $ = (k == null ? void 0 : k.price) || C() || 0;
    typeof $ == "string" && ($ = parseFloat($));
    const w = r.unit_system === "imperial" ? "feet" : "meters", z = {
      full_stock: (h) => (d(["calculating cost by full sheet"]), T() ? (m(h.metadata.totalUsedStock), 0) : h.metadata.totalStockCost),
      part_area: (h) => {
        d([`calculating cost by part area in square ${w}`]);
        const x = r.unit_system === "imperial" ? 144 : 1e6, L = h.metadata.totalPartArea / x, M = L * $;
        i("partArea", M), d([`part area in square ${w} is ${L} with price ${M}`]);
        let N = L;
        if (r != null && r.enable_offcut_pricing && (h != null && h.offcuts)) {
          const B = h == null ? void 0 : h.offcuts.reduce((t, a) => {
            const o = a.l >= a.w ? a.l : a.w, S = a.l >= a.w ? a.w : a.l;
            return o < r.offcut_min_length || S < r.offcut_min_width ? t + o * S : t;
          }, 0), E = B / x * $;
          i("offcutArea", E), d([`calculated sellable offcut area as ${B}, with price ${E}`]), N += B / x;
        }
        const W = N * $;
        if (d([`calculated total price as ${W}, `]), T())
          d([`setting cart quantity to ${N}`]), m(N, 2);
        else
          return W;
        return 0;
      },
      cut_length: (h) => {
        d([`calculating cost by cut length in  ${w}`]);
        const x = r.unit_system === "imperial" ? 12 : 1e3, L = h.metadata.totalCutLength / x;
        return m(L, 2), 0;
      },
      full_stock_plus_cut_length: (h) => {
        d(["calculating cost by full sheet plus cut length"]);
        let x = 0;
        T() ? m(h.metadata.totalUsedStock) : x = h.metadata.totalStockCost;
        const L = r.unit_system === "imperial" ? 12 : 1e3, N = h.metadata.totalCutLength / L * r.cut_length_price;
        return i("cutLength", N), x + N;
      },
      full_stock_plus_num_parts: (h) => {
        d(["calculating cost by full sheet plus number of parts"]);
        let x = 0;
        if (T())
          m(h.metadata.totalUsedStock);
        else {
          const M = h.metadata.totalStockCost;
          console.log("stockCost", M), i("stock", M), x = M;
        }
        const L = h.metadata.totalPartsProduced * r.per_part_price;
        return console.log("partPrice", L), i("perPart", L), x + L;
      },
      roll_length: (h) => {
        d([`calculating cost by roll length in ${w}`]);
        const x = r.unit_system === "imperial" ? 12 : 1e3, L = h.stock.reduce((M, N) => M + N.analysis.rollLength / x * Ne({ v: N.cost }), 0);
        return i("rollLength", L), L;
      }
    }[r.pricing_strategy], F = z(n);
    return b(), F;
  }, f = (n, k) => {
    const {
      isExtraEnabled: C,
      isMachiningEnabled: T,
      isSurchargeEnabled: b,
      inputType: m,
      getTotalBandingPrice: $,
      getTotalFinishPrice: w,
      getTotalMachiningPrice: H,
      getInputValue: z
    } = v;
    let F = k;
    if (C("banding") && n.metadata.bandingLengthByType) {
      const h = $(n.metadata.bandingLengthByType);
      i("banding", h), F += h;
    }
    if (C("finish") && n.metadata.finishAreaByType) {
      const h = w(n.metadata.finishAreaByType);
      i("finish", h), F += h;
    }
    if (m.value === "formula") {
      const h = parseFloat(z("smartcut-hardware-price"));
      isNaN(h) || (F += h);
    }
    if (T()) {
      const h = H(n);
      i("machining", h), F += h;
    }
    if (b() && r.surcharge) {
      const h = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * n.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      i("surcharge", h), d(["added surcharge", h]), F += h;
    }
    return F;
  }, p = (n) => {
    const { getInputValue: k, setInputValue: C } = v, T = {
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
    }), k("smartcut-stock-summary") !== void 0) {
      const b = n.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      C("smartcut-stock-summary", b);
    }
  };
  return {
    calculatePrice: async (n) => {
      _();
      const { isQuantityPricing: k, selectedVariation: C, setVariationPrice: T, setCartQuantity: b } = v;
      if (!(n != null && n.jobId))
        return q("No job ID provided");
      k() || b(1);
      let m = u(n);
      if (m = f(n, m), !k()) {
        if (!n.metadata.totalStockCost)
          return q("Total stock cost not returned for a multiple size product");
        d([`total cost is ${m}`]), i("custom", m);
      }
      return C.value && T(m), p(n), { success: !0, totalPrice: m };
    },
    resetPricing: _
  };
}
export {
  Ve as a,
  je as b,
  We as c,
  He as d,
  Ue as e,
  Xe as f,
  ze as u
};
