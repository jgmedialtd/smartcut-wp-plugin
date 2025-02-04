import { g as G, H as ne, h as I, G as ee, S as j, i as Te } from "./vendor-vue-CrziaopC.js";
import { r as ue, I as de, a as le, m as _e, S as Le, b as Ce, t as fe, c as te, s as Pe, g as xe, u as he, d as se, e as Ae, f as qe, h as Ee, i as ve, j as pe, k as me, l as ge, n as Se, o as ke, p as Ne } from "./components-CHC8aawn.js";
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
  }, { migratedStock: A, migratedShapes: L } = i(), s = ne("inputs/inputStock", A, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return w(a, r.numberFormat);
      },
      write: (t) => {
        const a = t.filter((u) => !(u != null && u.multiEdit));
        return JSON.stringify(a);
      }
    },
    listenToStorageChanges: !1
  }), o = ne("inputs/inputShapes", L, {
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
  }), v = G(null), S = I(() => o.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), n = I(() => s.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), k = (t, a = "decimal") => {
    const u = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), g = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), e = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (u && P(u, a), g && T(g, a), e)
      try {
        d.value = ue(e, o.value);
      } catch (l) {
        console.error("Error updating user groups:", l);
      }
  }, P = (t, a = "decimal") => {
    try {
      o.value = m(t, a);
    } catch (u) {
      console.error("Error updating input shapes:", u);
    }
  }, T = (t, a = "decimal") => {
    try {
      s.value = w(t, a);
    } catch (u) {
      console.error("Error updating input stock:", u);
    }
  };
  function w(t, a = "decimal") {
    return t.map((u) => (delete u.id, new de(u, a)));
  }
  function m(t, a = "decimal") {
    return !t || !(t != null && t.length) ? [] : t.map((u) => (delete u.id, new le(u, a)));
  }
  const N = () => {
    v.value = null;
  }, b = () => {
    o.value = [], s.value = [], d.value = [];
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
      for (const B of l)
        B in e && (e[B] = ye.sanitize(e[B]));
      e.createId(g), e.applyPartTrim(t.trim, t.stockType);
      const c = { ...e };
      _e(c, t.orientationModel);
      const y = new Le(c);
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
      const c = new Ce(e, t);
      a.push(...c.issues), u.push(c);
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
    let c = 0;
    for (const Z of o.value)
      e.push(...Z.validate({
        inputStockList: s.value,
        index: c,
        stockType: a !== null ? a.stockType ?? null : null,
        partTrim: u,
        useInventory: g,
        saw: a
      })), c++;
    return e.length ? e : (Pe((B = q == null ? void 0 : q.inputShapes) == null ? void 0 : B.value, (X = q == null ? void 0 : q.inputStock) == null ? void 0 : X.value, a !== null ? a.stockType ?? null : null), (ie = q == null ? void 0 : q.inputShapes) == null ? void 0 : ie.value.flatMap((Z) => Z.issues));
  }, _ = (t) => {
    if (!s.value.length) return "n";
    const a = t.material, u = t.t, g = s.value.filter((l) => l.material === a && l.t === u);
    return g.length ? xe(g) : "n";
  }, x = (t) => {
    for (const a of o.value)
      he(a, t);
    for (const a of s.value)
      he(a, t);
  }, F = () => {
    o.value.forEach((t) => t.issues = []), s.value.forEach((t) => t.issues = []);
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
  }, U = (t) => {
    if (s.value.length === 1) return;
    const a = s.value.findIndex((u) => u.listId === t);
    a !== -1 && s.value.splice(a, 1);
  }, J = (t) => {
    if (o.value.length === 1) return;
    const a = o.value.findIndex((u) => u.listId === t);
    a !== -1 && o.value.splice(a, 1);
  }, q = {
    inputStock: s,
    inputShapes: o,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h
  };
  return {
    inputs: q,
    inputStock: s,
    inputShapes: o,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h,
    totalInputShapes: S,
    totalInputStock: n,
    reset: N,
    clear: b,
    clearIssues: F,
    updateInputs: k,
    updateInputShapes: P,
    updateInputStock: T,
    getShapeGrainSummary: _,
    createShapeList: W,
    createStockList: V,
    validateInputStock: $,
    validateInputShapes: f,
    updateNumberFormat: x,
    createTestData: E,
    removeStock: U,
    removeShape: J
  };
}
function ze(r = { numberFormat: "decimal" }) {
  return ce || (ce = Fe(r)), ce;
}
const Q = G([]), Me = 6;
function Ve() {
  const r = ({
    message: i,
    type: A = "info",
    additional: L = [],
    options: s = {},
    action: o = () => {
    }
  }) => {
    Array.isArray(L) || (console.warn("addNotice - additional must be an array"), L = []);
    const d = {
      id: crypto.randomUUID(),
      message: se(i),
      additional: L.length > 5 ? L.slice(0, 5).map((S) => se(S)).join("<br>") + "<br>..." : L.slice(0, 5).map((S) => se(S)).join("<br>"),
      type: A,
      persistent: s.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, v = s.maxNotices ?? Me;
    if (Q.value.length >= v) {
      const S = Q.value.findIndex((n) => !n.persistent);
      if (S !== -1)
        Q.value.splice(S, 1);
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
const Ge = G(null), z = G(null), O = G(null), C = ee([]), p = ee([]), M = ee([]), R = ee([]), Y = G([]), ae = G(null), D = ee([]), re = G(0), oe = G(null), Ue = {
  saw: z,
  activeStockId: O,
  jobId: Ge,
  shapeList: C,
  stockList: p,
  cutList: M,
  segmentList: R,
  offcuts: Y,
  unusableShapes: D,
  metadata: ae,
  currentCutIndex: re
};
function je() {
  const r = I(() => O.value ? J(O.value) : []), h = I(() => {
    var e;
    return !O.value || !((e = p.value) != null && e.length) ? null : U(O.value);
  }), i = I(() => {
    var l;
    if (!h.value || !((l = M.value) != null && l.length)) return [];
    const e = t(h.value.id);
    return re.value = 0, e;
  }), A = I(() => {
    var e;
    return !h.value || !((e = R.value) != null && e.length) ? [] : q(O.value);
  }), L = I(() => {
    var e;
    return (e = p.value) != null && e.length ? a(p.value) : [];
  }), s = I(() => C.value.filter((e) => e.added)), o = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((l) => !l.added) : [];
  }), d = I(() => {
    var e;
    return (e = C.value) != null && e.length ? Ae(C.value) : [];
  }), v = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((l) => !l.duplicate) : [];
  }), S = I(() => v.value.filter((e) => e.added)), n = I(() => {
    var e;
    return (e = p.value) != null && e.length ? p.value.filter((l) => l.used && !l.duplicate) : [];
  }), k = I(() => n.value.filter((e) => e.used)), P = I(() => {
    var e;
    return (e = M.value) != null && e.length ? i.value.reduce((l, c) => l + c.getArea(), 0) : 0;
  }), T = I(() => {
    var e;
    return !((e = p.value) != null && e.length) || !h.value ? 0 : h.value ? h.value.getArea() : 0;
  }), w = I(() => {
    var e;
    return !((e = C.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.reduce((l, c) => l + c.getArea(), 0) : 0;
  }), m = I(() => {
    var e;
    return !((e = M.value) != null && e.length) || !h.value ? null : h.value.cutType;
  }), N = I(() => {
    var l;
    return (l = p.value) != null && l.length ? p.value.filter((c) => c.used && (c.stack === !1 || typeof c.stack == "number")) : [];
  }), b = I(() => {
    var e;
    return (e = p.value) != null && e.length ? qe(h.value, p.value) : 0;
  }), W = I(() => {
    var l;
    if (!((l = p.value) != null && l.length)) return 0;
    let e = T.value ? (P.value + w.value) / T.value : null;
    return e > 1 && (e = 1), e;
  }), V = () => {
    z.value = null, C.value.length = 0, p.value.length = 0, M.value.length = 0, R.value.length = 0, Y.value.length = 0, D.value.length = 0;
  }, $ = () => {
    z.value = null, O.value = null, oe.value = null, ae.value = null, C.value = [], p.value = [], M.value = [], R.value = [], Y.value = [], re.value = 0, D.value = [];
  }, f = (e, l) => {
    var c;
    e in this && ((c = this[e]) == null || c.sort(Ee[l]));
  }, _ = (e) => {
    j(e);
  }, x = () => {
    j(C);
  }, F = () => {
    j(p);
  }, E = (e) => {
    var l, c, y, B;
    if (!((l = e == null ? void 0 : e.shapeList) != null && l.some((X) => X.added))) {
      $();
      return;
    }
    ae.value = e.metadata, D.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (z.value = new ve(
        e == null ? void 0 : e.saw,
        (c = e == null ? void 0 : e.saw) == null ? void 0 : c.stockType
      )), p.value = pe({
        saw: z.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), C.value = me({
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
      }), j(p), j(C), j(M), j(R), O.value = ((B = (y = a(p.value)) == null ? void 0 : y[0]) == null ? void 0 : B.id) || null;
    } catch (X) {
      console.error("Error updating from result", X);
    }
  }, U = (e) => {
    var l;
    return (l = p.value) != null && l.length ? p.value.find((c) => c.id === e) : null;
  }, J = (e) => {
    var l;
    return (l = C.value) != null && l.length ? C.value.filter((c) => {
      var y;
      return (((y = c == null ? void 0 : c.stock) == null ? void 0 : y.id) ?? (c == null ? void 0 : c.stockId)) === e;
    }) : [];
  }, q = (e) => {
    var l;
    return (l = R.value) != null && l.length ? R.value.filter((c) => {
      var y;
      return (((y = c == null ? void 0 : c.stock) == null ? void 0 : y.id) ?? (c == null ? void 0 : c.stockId)) === e;
    }) : [];
  }, t = (e) => {
    var l;
    if ((l = M.value) != null && l.length)
      return M.value.filter((c) => {
        var y;
        return (((y = c == null ? void 0 : c.stock) == null ? void 0 : y.id) ?? (c == null ? void 0 : c.stockId)) === e;
      });
  }, a = (e) => e != null && e.length ? e.filter((l) => l.used === !0) : [];
  return {
    //all result items for convenience
    r: Ue,
    //state
    activeStockId: O,
    saw: z,
    shapeList: C,
    stockList: p,
    cutList: M,
    segmentList: R,
    offcuts: Y,
    unusableShapes: D,
    currentCutIndex: re,
    activeShape: oe,
    //computed
    addedShapes: s,
    activeShapes: r,
    unplacedShapes: o,
    uniqueShapes: v,
    uniqueAddedShapes: S,
    unplacedShapeTally: d,
    uniqueStock: n,
    uniqueUsedStock: k,
    activeStock: h,
    activeCuts: i,
    activeCutsArea: P,
    activeCutType: m,
    usedStock: L,
    stackedStock: N,
    activeStockArea: T,
    activeShapeArea: w,
    activeStockStackCount: b,
    activeTotalArea: W,
    activeSegments: A,
    //methods
    reset: V,
    clear: $,
    sortItems: f,
    update: _,
    updateShapes: x,
    updateStock: F,
    updateFromResult: E,
    getStock: U,
    getShapes: J,
    getSegments: q,
    getCuts: t,
    setActiveStockId: (e) => {
      oe.value = null, O.value = e;
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
      }), C.value = me({
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
      var o, d, v;
      (o = r.refs) != null && o.connected && (r.refs.connected.value = !0), (v = (d = r.callbacks) == null ? void 0 : d.onConnect) == null || v.call(d);
    }), i.on("connect_error", (o) => {
      var d, v, S, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (S = r.callbacks) == null ? void 0 : S.onConnectError) == null || n.call(S, o);
    }), i.on("connect_timeout", (o) => {
      var d, v, S, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (S = r.callbacks) == null ? void 0 : S.onConnectError) == null || n.call(S, o);
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
      var d, v, S;
      (d = r.refs) != null && d.thinking && (r.refs.thinking.value = !1), be(), (S = (v = r.callbacks) == null ? void 0 : v.onError) == null || S.call(v, o);
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
    var k;
    (k = h.log) == null || k.call(h, n);
  }, A = (n) => {
    var k;
    return (k = h.error) == null || k.call(h, n), { success: !1, error: n };
  }, L = () => {
    for (const n of Ie) s(n, 0);
  }, s = (n, k) => {
    const { inputs: P, elements: T, setInputValue: w, formatPrice: m } = h;
    if (isNaN(k)) throw new Error("Price must be a number");
    if (!Re(n)) return;
    const b = {
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
    b != null && b.hidden && P[b.hidden] && w(b.hidden, k), b != null && b.visible && T[b.visible] && (T[b.visible].innerText = m(k));
  }, o = (n) => {
    const { product: k, getCurrentVariationPrice: P, isQuantityPricing: T, enableAddToCart: w, setCartQuantity: m } = h;
    let N = (k == null ? void 0 : k.price) || P() || 0;
    typeof N == "string" && (N = parseFloat(N));
    const b = r.unit_system === "imperial" ? "feet" : "meters", V = {
      full_stock: (f) => {
        if (i(["calculating cost by full sheet"]), T())
          m(f.metadata.totalUsedStock);
        else {
          const _ = f.metadata.totalStockCost;
          return s("stock", _), _;
        }
        return 0;
      },
      part_area: (f) => {
        i([`calculating cost by part area in square ${b}`]);
        const _ = r.unit_system === "imperial" ? 144 : 1e6, x = f.metadata.totalPartArea / _, F = x * N;
        s("partArea", F), i([`part area in square ${b} is ${x} with price ${F}`]);
        let E = x;
        if (r != null && r.enable_offcut_pricing && (f != null && f.offcuts)) {
          const J = f == null ? void 0 : f.offcuts.reduce((t, a) => {
            const u = a.l >= a.w ? a.l : a.w, g = a.l >= a.w ? a.w : a.l;
            return u < r.offcut_min_length || g < r.offcut_min_width ? t + u * g : t;
          }, 0), q = J / _ * N;
          s("offcutArea", q), i([`calculated sellable offcut area as ${J}, with price ${q}`]), E += J / _;
        }
        const U = E * N;
        if (i([`calculated total price as ${U}, `]), T())
          i([`setting cart quantity to ${E}`]), m(E, 2);
        else
          return U;
        return 0;
      },
      cut_length: (f) => {
        i([`calculating cost by cut length in  ${b}`]);
        const _ = r.unit_system === "imperial" ? 12 : 1e3, x = f.metadata.totalCutLength / _;
        return m(x, 2), 0;
      },
      full_stock_plus_cut_length: (f) => {
        i(["calculating cost by full sheet plus cut length"]);
        let _ = 0;
        if (T())
          m(f.metadata.totalUsedStock);
        else {
          const U = f.metadata.totalStockCost;
          s("stock", U), _ = U;
        }
        const x = r.unit_system === "imperial" ? 12 : 1e3, E = f.metadata.totalCutLength / x * r.cut_length_price;
        return s("cutLength", E), _ + E;
      },
      full_stock_plus_num_parts: (f) => {
        i(["calculating cost by full sheet plus number of parts"]);
        let _ = 0;
        if (T())
          m(f.metadata.totalUsedStock);
        else {
          const F = f.metadata.totalStockCost;
          s("stock", F), _ = F;
        }
        const x = f.metadata.totalPartsProduced * r.per_part_price;
        return s("perPart", x), _ + x;
      },
      roll_length: (f) => {
        i([`calculating cost by roll length in ${b}`]);
        const _ = r.unit_system === "imperial" ? 12 : 1e3, x = f.stock.reduce((F, E) => F + E.analysis.rollLength / _ * Ne({ v: E.cost }), 0);
        return s("rollLength", x), x;
      }
    }[r.pricing_strategy], $ = V(n);
    return w(), $;
  }, d = (n, k) => {
    const {
      isExtraEnabled: P,
      isMachiningEnabled: T,
      isSurchargeEnabled: w,
      inputType: m,
      getTotalBandingPrice: N,
      getTotalFinishPrice: b,
      getTotalMachiningPrice: W,
      getInputValue: V
    } = h;
    let $ = k;
    if (P("banding") && n.metadata.bandingLengthByType) {
      const f = N(n.metadata.bandingLengthByType);
      s("banding", f), $ += f;
    }
    if (P("finish") && n.metadata.finishAreaByType) {
      const f = b(n.metadata.finishAreaByType);
      s("finish", f), $ += f;
    }
    if (m.value === "formula") {
      const f = parseFloat(V("smartcut-hardware-price"));
      isNaN(f) || ($ += f);
    }
    if (T()) {
      const f = W(n);
      s("machining", f), $ += f;
    }
    if (w() && r.surcharge) {
      const f = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * n.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      s("surcharge", f), i(["added surcharge", f]), $ += f;
    }
    return $;
  }, v = (n) => {
    const { getInputValue: k, setInputValue: P } = h, T = {
      "smartcut-job-id": n.jobId,
      "smartcut-dimensions": n.parts.map((w) => `${w.l}x${w.w} [${w.q}]`).join(", "),
      "smartcut-total-cut-length": n.metadata.totalCutLength,
      "smartcut-part-area": n.metadata.totalPartArea,
      "smartcut-total-cuts": n.metadata.totalCuts,
      "smartcut-total-parts": n.metadata.totalPartsProduced,
      "smartcut-machining": n.metadata.hasMachining
    };
    if (Object.entries(T).forEach(([w, m]) => {
      P(w, m);
    }), k("smartcut-stock-summary") !== void 0) {
      const w = n.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      P("smartcut-stock-summary", w);
    }
  };
  return {
    calculatePrice: async (n) => {
      L();
      const { isQuantityPricing: k, selectedVariation: P, setVariationPrice: T, setCartQuantity: w } = h;
      if (!(n != null && n.jobId))
        return A("No job ID provided");
      k() || w(1);
      let m = o(n);
      if (m = d(n, m), !k()) {
        if (!n.metadata.totalStockCost)
          return A("Total stock cost not returned for a multiple size product");
        i([`total cost is ${m}`]), s("custom", m);
      }
      return P.value && T(m), v(n), { success: !0, totalPrice: m };
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
