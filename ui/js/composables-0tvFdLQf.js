import { g as G, H as ne, h as T, G as ee, S as j, i as Te } from "./vendor-vue-CrziaopC.js";
import { r as ue, I as de, a as le, m as _e, S as Le, b as Ce, t as fe, c as te, s as Pe, g as xe, u as he, d as se, e as Ae, f as qe, h as Ee, i as ve, j as pe, k as me, l as ge, n as Se, o as ke, p as Ne } from "./components-DGPSYeqU.js";
import { p as ye, l as $e } from "./vendor-CtQQhE4g.js";
let oe = null;
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
  }, { migratedStock: A, migratedShapes: L } = i(), s = ne("inputs/inputStock", A, {
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
  }), c = ne("inputs/inputShapes", L, {
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
  }), v = G(null), k = T(() => c.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), n = T(() => s.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), S = (t, a = "decimal") => {
    const u = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), g = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), e = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (u && x(u, a), g && _(g, a), e)
      try {
        d.value = ue(e, c.value);
      } catch (l) {
        console.error("Error updating user groups:", l);
      }
  }, x = (t, a = "decimal") => {
    try {
      c.value = m(t, a);
    } catch (u) {
      console.error("Error updating input shapes:", u);
    }
  }, _ = (t, a = "decimal") => {
    try {
      s.value = b(t, a);
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
    c.value = [], s.value = [], d.value = [];
  }, W = (t = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0
  }) => {
    if (!c.value.length)
      return { shapeList: [], issues: [] };
    const a = [], u = [];
    for (let g = 0; g < c.value.length; g++) {
      const e = c.value[g];
      if (!(e != null && e.q)) continue;
      const l = ["name", "material", "notes"];
      for (const B of l)
        B in e && (e[B] = ye.sanitize(e[B]));
      e.createId(g), e.applyPartTrim(t.trim, t.stockType);
      const o = { ...e };
      _e(o, t.orientationModel);
      const y = new Le(o);
      y.trimDimensions(), t.minSpacing && t.maxDimension && (y.l <= t.maxDimension || y.w <= t.maxDimension) && (y.minSpacing = t.minSpacing), u.push(y), a.push(...y.issues);
    }
    return { shapeList: u, issues: a };
  }, V = (t) => {
    if (!s.value.length)
      return { stockList: [], issues: [] };
    const a = [], u = [];
    for (let g = 0; g < s.value.length; g++) {
      const e = s.value[g];
      if (!(e != null && e.q) && !e.autoAdd) continue;
      const l = ["name", "material", "notes"];
      for (const y of l)
        y in e && (e[y] = ye.sanitize(e[y]));
      e.createId(g);
      const o = new Ce(e, t);
      a.push(...o.issues), u.push(o);
    }
    return { stockList: u, issues: a };
  }, $ = (t = null) => {
    var g;
    const a = [], u = fe(s.value);
    if (!s.value.some((e) => e.autoAdd) && (!((g = s.value) != null && g.length) || !u))
      return new te({
        message: "no_stock",
        listId: s.value.map((e) => e.listId),
        field: [["q"]],
        issues: a
      }), a;
    for (const e of s.value)
      a.push(...e.validate(t));
    return a;
  }, f = (t = null) => {
    var B, X, ie;
    const {
      saw: a = null,
      partTrim: u = 0,
      useInventory: g = !1
    } = t || {}, e = [];
    if (!c.value.length)
      return new te({
        message: "no_parts",
        issues: e
      }), e;
    if (!fe(c.value))
      return new te({
        message: "no_parts",
        issues: e
      }), c.value.forEach((Z) => new te({
        message: "no_parts",
        field: [["q"]],
        item: Z
      })), e;
    let o = 0;
    for (const Z of c.value)
      e.push(...Z.validate({
        inputStockList: s.value,
        index: o,
        stockType: a !== null ? a.stockType ?? null : null,
        partTrim: u,
        useInventory: g,
        saw: a
      })), o++;
    return e.length ? e : (Pe((B = q == null ? void 0 : q.inputShapes) == null ? void 0 : B.value, (X = q == null ? void 0 : q.inputStock) == null ? void 0 : X.value, a !== null ? a.stockType ?? null : null), (ie = q == null ? void 0 : q.inputShapes) == null ? void 0 : ie.value.flatMap((Z) => Z.issues));
  }, I = (t) => {
    if (!s.value.length) return "n";
    const a = t.material, u = t.t, g = s.value.filter((l) => l.material === a && l.t === u);
    return g.length ? xe(g) : "n";
  }, C = (t) => {
    for (const a of c.value)
      he(a, t);
    for (const a of s.value)
      he(a, t);
  }, F = () => {
    c.value.forEach((t) => t.issues = []), s.value.forEach((t) => t.issues = []);
  }, E = ({
    stock: t = !0,
    shapes: a = !0
  }) => {
    t && (s.value = [
      new de({
        l: 2440,
        w: 1220,
        q: 1
      })
    ]), a && (c.value = [
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
  }, U = (t) => {
    if (s.value.length === 1) return;
    const a = s.value.findIndex((u) => u.listId === t);
    a !== -1 && s.value.splice(a, 1);
  }, J = (t) => {
    if (c.value.length === 1) return;
    const a = c.value.findIndex((u) => u.listId === t);
    a !== -1 && c.value.splice(a, 1);
  }, q = {
    inputStock: s,
    inputShapes: c,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h
  };
  return {
    inputs: q,
    inputStock: s,
    inputShapes: c,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h,
    totalInputShapes: k,
    totalInputStock: n,
    reset: N,
    clear: w,
    clearIssues: F,
    updateInputs: S,
    updateInputShapes: x,
    updateInputStock: _,
    getShapeGrainSummary: I,
    createShapeList: W,
    createStockList: V,
    validateInputStock: $,
    validateInputShapes: f,
    updateNumberFormat: C,
    createTestData: E,
    removeStock: U,
    removeShape: J
  };
}
function ze(r = { numberFormat: "decimal" }) {
  return oe || (oe = Fe(r)), oe;
}
const Q = G([]), Me = 6;
function Ve() {
  const r = ({
    message: i,
    type: A = "info",
    additional: L = [],
    options: s = {},
    action: c = () => {
    }
  }) => {
    Array.isArray(L) || (console.warn("addNotice - additional must be an array"), L = []);
    const d = {
      id: crypto.randomUUID(),
      message: se(i),
      additional: L.length > 5 ? L.slice(0, 5).map((k) => se(k)).join("<br>") + "<br>..." : L.slice(0, 5).map((k) => se(k)).join("<br>"),
      type: A,
      persistent: s.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: c
    }, v = s.maxNotices ?? Me;
    if (Q.value.length >= v) {
      const k = Q.value.findIndex((n) => !n.persistent);
      if (k !== -1)
        Q.value.splice(k, 1);
      else if (!d.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), d.id;
    }
    return Q.value.push(d), !d.persistent && s.timeout !== 0 && setTimeout(() => h(d.id), s.timeout || 6e3), d.id;
  }, h = (i) => {
    Q.value.findIndex((L) => L.id === i) !== -1 && (Q.value = Q.value.filter((L) => L.id !== i));
  };
  return {
    notices: Q,
    addNotice: r,
    dismissNotice: h
  };
}
const Ge = G(null), z = G(null), O = G(null), P = ee([]), p = ee([]), M = ee([]), R = ee([]), Y = G([]), ae = G(null), D = ee([]), re = G(0), ce = G(null), Ue = {
  saw: z,
  activeStockId: O,
  jobId: Ge,
  shapeList: P,
  stockList: p,
  cutList: M,
  segmentList: R,
  offcuts: Y,
  unusableShapes: D,
  metadata: ae,
  currentCutIndex: re
};
function je() {
  const r = T(() => O.value ? J(O.value) : []), h = T(() => {
    var e;
    return !O.value || !((e = p.value) != null && e.length) ? null : U(O.value);
  }), i = T(() => {
    var l;
    if (!h.value || !((l = M.value) != null && l.length)) return [];
    const e = t(h.value.id);
    return re.value = 0, e;
  }), A = T(() => {
    var e;
    return !h.value || !((e = R.value) != null && e.length) ? [] : q(O.value);
  }), L = T(() => {
    var e;
    return (e = p.value) != null && e.length ? a(p.value) : [];
  }), s = T(() => P.value.filter((e) => e.added)), c = T(() => {
    var e;
    return (e = P.value) != null && e.length ? P.value.filter((l) => !l.added) : [];
  }), d = T(() => {
    var e;
    return (e = P.value) != null && e.length ? Ae(P.value) : [];
  }), v = T(() => {
    var e;
    return (e = P.value) != null && e.length ? P.value.filter((l) => !l.duplicate) : [];
  }), k = T(() => v.value.filter((e) => e.added)), n = T(() => {
    var e;
    return (e = p.value) != null && e.length ? p.value.filter((l) => l.used && !l.duplicate) : [];
  }), S = T(() => n.value.filter((e) => e.used)), x = T(() => {
    var e;
    return (e = M.value) != null && e.length ? i.value.reduce((l, o) => l + o.getArea(), 0) : 0;
  }), _ = T(() => {
    var e;
    return !((e = p.value) != null && e.length) || !h.value ? 0 : h.value ? h.value.getArea() : 0;
  }), b = T(() => {
    var e;
    return !((e = P.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.reduce((l, o) => l + o.getArea(), 0) : 0;
  }), m = T(() => {
    var e;
    return !((e = M.value) != null && e.length) || !h.value ? null : h.value.cutType;
  }), N = T(() => {
    var l;
    return (l = p.value) != null && l.length ? p.value.filter((o) => o.used && (o.stack === !1 || typeof o.stack == "number")) : [];
  }), w = T(() => {
    var e;
    return (e = p.value) != null && e.length ? qe(h.value, p.value) : 0;
  }), W = T(() => {
    var l;
    if (!((l = p.value) != null && l.length)) return 0;
    let e = _.value ? (x.value + b.value) / _.value : null;
    return e > 1 && (e = 1), e;
  }), V = () => {
    z.value = null, P.value.length = 0, p.value.length = 0, M.value.length = 0, R.value.length = 0, Y.value.length = 0, D.value.length = 0;
  }, $ = () => {
    z.value = null, O.value = null, ce.value = null, ae.value = null, P.value = [], p.value = [], M.value = [], R.value = [], Y.value = [], re.value = 0, D.value = [];
  }, f = (e, l) => {
    var o;
    e in this && ((o = this[e]) == null || o.sort(Ee[l]));
  }, I = (e) => {
    j(e);
  }, C = () => {
    j(P);
  }, F = () => {
    j(p);
  }, E = (e) => {
    var l, o, y, B;
    if (!((l = e == null ? void 0 : e.shapeList) != null && l.some((X) => X.added))) {
      $();
      return;
    }
    ae.value = e.metadata, D.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (z.value = new ve(
        e == null ? void 0 : e.saw,
        (o = e == null ? void 0 : e.saw) == null ? void 0 : o.stockType
      )), p.value = pe({
        saw: z.value,
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
      }), R.value = Se({
        segmentList: e.segmentList,
        stockList: p.value
      }), Y.value = ke({
        offcuts: e.offcuts,
        stockList: p.value,
        preventAutoRotation: !0
      }), j(p), j(P), j(M), j(R), O.value = ((B = (y = a(p.value)) == null ? void 0 : y[0]) == null ? void 0 : B.id) || null;
    } catch (X) {
      console.error("Error updating from result", X);
    }
  }, U = (e) => {
    var l;
    return (l = p.value) != null && l.length ? p.value.find((o) => o.id === e) : null;
  }, J = (e) => {
    var l;
    return (l = P.value) != null && l.length ? P.value.filter((o) => {
      var y;
      return (((y = o == null ? void 0 : o.stock) == null ? void 0 : y.id) ?? (o == null ? void 0 : o.stockId)) === e;
    }) : [];
  }, q = (e) => {
    var l;
    return (l = R.value) != null && l.length ? R.value.filter((o) => {
      var y;
      return (((y = o == null ? void 0 : o.stock) == null ? void 0 : y.id) ?? (o == null ? void 0 : o.stockId)) === e;
    }) : [];
  }, t = (e) => {
    var l;
    if ((l = M.value) != null && l.length)
      return M.value.filter((o) => {
        var y;
        return (((y = o == null ? void 0 : o.stock) == null ? void 0 : y.id) ?? (o == null ? void 0 : o.stockId)) === e;
      });
  }, a = (e) => e != null && e.length ? e.filter((l) => l.used === !0) : [];
  return {
    //all result items for convenience
    r: Ue,
    //state
    activeStockId: O,
    saw: z,
    shapeList: P,
    stockList: p,
    cutList: M,
    segmentList: R,
    offcuts: Y,
    unusableShapes: D,
    currentCutIndex: re,
    activeShape: ce,
    //computed
    addedShapes: s,
    activeShapes: r,
    unplacedShapes: c,
    uniqueShapes: v,
    uniqueAddedShapes: k,
    unplacedShapeTally: d,
    uniqueStock: n,
    uniqueUsedStock: S,
    activeStock: h,
    activeCuts: i,
    activeCutsArea: x,
    activeCutType: m,
    usedStock: L,
    stackedStock: N,
    activeStockArea: _,
    activeShapeArea: b,
    activeStockStackCount: w,
    activeTotalArea: W,
    activeSegments: A,
    //methods
    reset: V,
    clear: $,
    sortItems: f,
    update: I,
    updateShapes: C,
    updateStock: F,
    updateFromResult: E,
    getStock: U,
    getShapes: J,
    getSegments: q,
    getCuts: t,
    setActiveStockId: (e) => {
      ce.value = null, O.value = e;
    },
    //testing
    createTestData: () => {
      z.value = new ve({
        bladeWidth: 1,
        stockType: "sheet",
        cutType: "guillotine",
        cutPreference: "l"
      }), p.value = pe({
        saw: z.value,
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
      var c, d, v;
      (c = r.refs) != null && c.connected && (r.refs.connected.value = !0), (v = (d = r.callbacks) == null ? void 0 : d.onConnect) == null || v.call(d);
    }), i.on("connect_error", (c) => {
      var d, v, k, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (k = r.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, c);
    }), i.on("connect_timeout", (c) => {
      var d, v, k, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (k = r.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, c);
    }), i.on("result", (c) => {
      var d, v;
      K.value.complete = !0, (v = (d = r.callbacks) == null ? void 0 : d.onResult) == null || v.call(d, c), i.disconnect();
    }), i.on("queued", () => {
      be(), K.value.queued = !0;
    }), i.on("started", () => {
      K.value.started = !0;
    }), i.on("progress", (c) => {
      var d;
      ((d = c == null ? void 0 : c.data) == null ? void 0 : d.message) === "result" ? K.value.resultCount++ : (K.value.stockCount = c.data.stockCount, K.value.shapeCount = c.data.shapeCount);
    }), i.on("user", (c) => {
      var d, v;
      (v = (d = r.callbacks) == null ? void 0 : d.onUser) == null || v.call(d, c);
    }), i.on("error", (c) => {
      var d, v, k;
      (d = r.refs) != null && d.thinking && (r.refs.thinking.value = !1), be(), (k = (v = r.callbacks) == null ? void 0 : v.onError) == null || k.call(v, c);
    });
  }, L = () => i == null ? void 0 : i.disconnect(), s = () => i == null ? void 0 : i.connect();
  return A(), {
    socket: i,
    connect: s,
    disconnect: L
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
  }, L = () => {
    for (const n of Ie) s(n, 0);
  }, s = (n, S) => {
    const { inputs: x, elements: _, setInputValue: b, formatPrice: m } = h;
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
    w != null && w.hidden && x[w.hidden] && (console.log("setting hidden price", w.hidden, S), b(w.hidden, S)), w != null && w.visible && _[w.visible] && (_[w.visible].innerText = m(S));
  }, c = (n) => {
    const { product: S, getCurrentVariationPrice: x, isQuantityPricing: _, enableAddToCart: b, setCartQuantity: m } = h;
    let N = (S == null ? void 0 : S.price) || x() || 0;
    typeof N == "string" && (N = parseFloat(N));
    const w = r.unit_system === "imperial" ? "feet" : "meters", V = {
      full_stock: (f) => {
        if (i(["calculating cost by full sheet"]), _())
          m(f.metadata.totalUsedStock);
        else {
          const I = f.metadata.totalStockCost;
          return console.log("stockCost", I), s("stock", I), I;
        }
        return 0;
      },
      part_area: (f) => {
        i([`calculating cost by part area in square ${w}`]);
        const I = r.unit_system === "imperial" ? 144 : 1e6, C = f.metadata.totalPartArea / I, F = C * N;
        s("partArea", F), i([`part area in square ${w} is ${C} with price ${F}`]);
        let E = C;
        if (r != null && r.enable_offcut_pricing && (f != null && f.offcuts)) {
          const J = f == null ? void 0 : f.offcuts.reduce((t, a) => {
            const u = a.l >= a.w ? a.l : a.w, g = a.l >= a.w ? a.w : a.l;
            return u < r.offcut_min_length || g < r.offcut_min_width ? t + u * g : t;
          }, 0), q = J / I * N;
          s("offcutArea", q), i([`calculated sellable offcut area as ${J}, with price ${q}`]), E += J / I;
        }
        const U = E * N;
        if (i([`calculated total price as ${U}, `]), _())
          i([`setting cart quantity to ${E}`]), m(E, 2);
        else
          return U;
        return 0;
      },
      cut_length: (f) => {
        i([`calculating cost by cut length in  ${w}`]);
        const I = r.unit_system === "imperial" ? 12 : 1e3, C = f.metadata.totalCutLength / I;
        return m(C, 2), 0;
      },
      full_stock_plus_cut_length: (f) => {
        i(["calculating cost by full sheet plus cut length"]);
        let I = 0;
        if (_())
          m(f.metadata.totalUsedStock);
        else {
          const U = f.metadata.totalStockCost;
          console.log("stockCost", U), s("stock", U), I = U;
        }
        const C = r.unit_system === "imperial" ? 12 : 1e3, E = f.metadata.totalCutLength / C * r.cut_length_price;
        return s("cutLength", E), I + E;
      },
      full_stock_plus_num_parts: (f) => {
        i(["calculating cost by full sheet plus number of parts"]);
        let I = 0;
        if (_())
          m(f.metadata.totalUsedStock);
        else {
          const F = f.metadata.totalStockCost;
          console.log("stockCost", F), s("stock", F), I = F;
        }
        const C = f.metadata.totalPartsProduced * r.per_part_price;
        return console.log("partPrice", C), s("perPart", C), I + C;
      },
      roll_length: (f) => {
        i([`calculating cost by roll length in ${w}`]);
        const I = r.unit_system === "imperial" ? 12 : 1e3, C = f.stock.reduce((F, E) => F + E.analysis.rollLength / I * Ne({ v: E.cost }), 0);
        return s("rollLength", C), C;
      }
    }[r.pricing_strategy], $ = V(n);
    return b(), $;
  }, d = (n, S) => {
    const {
      isExtraEnabled: x,
      isMachiningEnabled: _,
      isSurchargeEnabled: b,
      inputType: m,
      getTotalBandingPrice: N,
      getTotalFinishPrice: w,
      getTotalMachiningPrice: W,
      getInputValue: V
    } = h;
    let $ = S;
    if (x("banding") && n.metadata.bandingLengthByType) {
      const f = N(n.metadata.bandingLengthByType);
      s("banding", f), $ += f;
    }
    if (x("finish") && n.metadata.finishAreaByType) {
      const f = w(n.metadata.finishAreaByType);
      s("finish", f), $ += f;
    }
    if (m.value === "formula") {
      const f = parseFloat(V("smartcut-hardware-price"));
      isNaN(f) || ($ += f);
    }
    if (_()) {
      const f = W(n);
      s("machining", f), $ += f;
    }
    if (b() && r.surcharge) {
      const f = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * n.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      s("surcharge", f), i(["added surcharge", f]), $ += f;
    }
    return $;
  }, v = (n) => {
    const { getInputValue: S, setInputValue: x } = h, _ = {
      "smartcut-job-id": n.jobId,
      "smartcut-dimensions": n.parts.map((b) => `${b.l}x${b.w} [${b.q}]`).join(", "),
      "smartcut-total-cut-length": n.metadata.totalCutLength,
      "smartcut-part-area": n.metadata.totalPartArea,
      "smartcut-total-cuts": n.metadata.totalCuts,
      "smartcut-total-parts": n.metadata.totalPartsProduced,
      "smartcut-machining": n.metadata.hasMachining
    };
    if (Object.entries(_).forEach(([b, m]) => {
      x(b, m);
    }), S("smartcut-stock-summary") !== void 0) {
      const b = n.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      x("smartcut-stock-summary", b);
    }
  };
  return {
    calculatePrice: async (n) => {
      L();
      const { isQuantityPricing: S, selectedVariation: x, setVariationPrice: _, setCartQuantity: b } = h;
      if (!(n != null && n.jobId))
        return A("No job ID provided");
      S() || b(1);
      let m = c(n);
      if (m = d(n, m), !S()) {
        if (!n.metadata.totalStockCost)
          return A("Total stock cost not returned for a multiple size product");
        i([`total cost is ${m}`]), s("custom", m);
      }
      return x.value && _(m), v(n), { success: !0, totalPrice: m };
    },
    resetPricing: L
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
