import { g as G, H as ne, h as I, G as ee, S as j, i as Te } from "./vendor-vue-BGhkUe2l.js";
import { I as ue, a as le, u as de, b as te, t as fe, s as _e, S as Le, m as Ce, c as Pe, g as xe, r as he, d as se, e as Ae, f as qe, h as ve, i as me, j as pe, k as ge, l as Se, n as ke, o as Ee, p as Ne } from "./components-9H54Vd0x.js";
import { p as ye, l as $e } from "./vendor-CcpD1l-V.js";
let ce = null;
function Fe(r = { numberFormat: "decimal" }) {
  const h = G(null), c = () => {
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
  }, { migratedStock: A, migratedShapes: L } = c(), s = ne("inputs/inputStock", A, {
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
  }), i = ne("inputs/inputShapes", L, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return p(a, r.numberFormat);
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
        return he(a);
      },
      write: (t) => JSON.stringify(t)
    },
    listenToStorageChanges: !1
  }), v = G(null), k = I(() => i.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), n = I(() => s.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), S = (t, a = "decimal") => {
    const u = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), g = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), e = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (u && P(u, a), g && T(g, a), e)
      try {
        d.value = he(e, i.value);
      } catch (l) {
        console.error("Error updating user groups:", l);
      }
  }, P = (t, a = "decimal") => {
    try {
      i.value = p(t, a);
    } catch (u) {
      console.error("Error updating input shapes:", u);
    }
  }, T = (t, a = "decimal") => {
    try {
      s.value = b(t, a);
    } catch (u) {
      console.error("Error updating input stock:", u);
    }
  };
  function b(t, a = "decimal") {
    return t.map((u) => (delete u.id, new ue(u, a)));
  }
  function p(t, a = "decimal") {
    return !t || !(t != null && t.length) ? [] : t.map((u) => (delete u.id, new le(u, a)));
  }
  const N = () => {
    v.value = null;
  }, w = () => {
    i.value = [], s.value = [], d.value = [];
  }, W = (t = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0
  }) => {
    if (!i.value.length)
      return { shapeList: [], issues: [] };
    const a = [], u = [];
    for (let g = 0; g < i.value.length; g++) {
      const e = i.value[g];
      if (!(e != null && e.q)) continue;
      const l = ["name", "material", "notes"];
      for (const B of l)
        B in e && (e[B] = ye.sanitize(e[B]));
      e.createId(g), e.applyPartTrim(t.trim, t.stockType);
      const o = { ...e };
      Ce(o, t.orientationModel);
      const y = new Pe(o);
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
      const o = new Le(e, t);
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
    if (!i.value.length)
      return new te({
        message: "no_parts",
        issues: e
      }), e;
    if (!fe(i.value))
      return new te({
        message: "no_parts",
        issues: e
      }), i.value.forEach((Z) => new te({
        message: "no_parts",
        field: [["q"]],
        item: Z
      })), e;
    let o = 0;
    for (const Z of i.value)
      e.push(...Z.validate({
        inputStockList: s.value,
        index: o,
        stockType: a !== null ? a.stockType ?? null : null,
        partTrim: u,
        useInventory: g,
        saw: a
      })), o++;
    return e.length ? e : (_e((B = q == null ? void 0 : q.inputShapes) == null ? void 0 : B.value, (X = q == null ? void 0 : q.inputStock) == null ? void 0 : X.value, a !== null ? a.stockType ?? null : null), (ie = q == null ? void 0 : q.inputShapes) == null ? void 0 : ie.value.flatMap((Z) => Z.issues));
  }, _ = (t) => {
    if (!s.value.length) return "n";
    const a = t.material, u = t.t, g = s.value.filter((l) => l.material === a && l.t === u);
    return g.length ? xe(g) : "n";
  }, x = (t) => {
    for (const a of i.value)
      de(a, t);
    for (const a of s.value)
      de(a, t);
  }, F = () => {
    i.value.forEach((t) => t.issues = []), s.value.forEach((t) => t.issues = []);
  }, E = ({
    stock: t = !0,
    shapes: a = !0
  }) => {
    t && (s.value = [
      new ue({
        l: 2440,
        w: 1220,
        q: 1
      })
    ]), a && (i.value = [
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
    if (i.value.length === 1) return;
    const a = i.value.findIndex((u) => u.listId === t);
    a !== -1 && i.value.splice(a, 1);
  }, q = {
    inputStock: s,
    inputShapes: i,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h
  };
  return {
    inputs: q,
    inputStock: s,
    inputShapes: i,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: h,
    totalInputShapes: k,
    totalInputStock: n,
    reset: N,
    clear: w,
    clearIssues: F,
    updateInputs: S,
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
    message: c,
    type: A = "info",
    additional: L = [],
    options: s = {},
    action: i = () => {
    }
  }) => {
    Array.isArray(L) || (console.warn("addNotice - additional must be an array"), L = []);
    const d = {
      id: crypto.randomUUID(),
      message: se(c),
      additional: L.length > 5 ? L.slice(0, 5).map((k) => se(k)).join("<br>") + "<br>..." : L.slice(0, 5).map((k) => se(k)).join("<br>"),
      type: A,
      persistent: s.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: i
    }, v = s.maxNotices ?? Me;
    if (Q.value.length >= v) {
      const k = Q.value.findIndex((n) => !n.persistent);
      if (k !== -1)
        Q.value.splice(k, 1);
      else if (!d.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), d.id;
    }
    return Q.value.push(d), !d.persistent && s.timeout !== 0 && setTimeout(() => h(d.id), s.timeout || 6e3), d.id;
  }, h = (c) => {
    Q.value.findIndex((L) => L.id === c) !== -1 && (Q.value = Q.value.filter((L) => L.id !== c));
  };
  return {
    notices: Q,
    addNotice: r,
    dismissNotice: h
  };
}
const Ge = G(null), z = G(null), O = G(null), C = ee([]), m = ee([]), M = ee([]), R = ee([]), Y = G([]), ae = G(null), D = ee([]), re = G(0), oe = G(null), Ue = {
  saw: z,
  activeStockId: O,
  jobId: Ge,
  shapeList: C,
  stockList: m,
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
    return !O.value || !((e = m.value) != null && e.length) ? null : U(O.value);
  }), c = I(() => {
    var l;
    if (!h.value || !((l = M.value) != null && l.length)) return [];
    const e = t(h.value.id);
    return re.value = 0, e;
  }), A = I(() => {
    var e;
    return !h.value || !((e = R.value) != null && e.length) ? [] : q(O.value);
  }), L = I(() => {
    var e;
    return (e = m.value) != null && e.length ? a(m.value) : [];
  }), s = I(() => C.value.filter((e) => e.added)), i = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((l) => !l.added) : [];
  }), d = I(() => {
    var e;
    return (e = C.value) != null && e.length ? Ae(C.value) : [];
  }), v = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((l) => !l.duplicate) : [];
  }), k = I(() => v.value.filter((e) => e.added)), n = I(() => {
    var e;
    return (e = m.value) != null && e.length ? m.value.filter((l) => l.used && !l.duplicate) : [];
  }), S = I(() => n.value.filter((e) => e.used)), P = I(() => {
    var e;
    return (e = M.value) != null && e.length ? c.value.reduce((l, o) => l + o.getArea(), 0) : 0;
  }), T = I(() => {
    var e;
    return !((e = m.value) != null && e.length) || !h.value ? 0 : h.value ? h.value.getArea() : 0;
  }), b = I(() => {
    var e;
    return !((e = C.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.reduce((l, o) => l + o.getArea(), 0) : 0;
  }), p = I(() => {
    var e;
    return !((e = M.value) != null && e.length) || !h.value ? null : h.value.cutType;
  }), N = I(() => {
    var l;
    return (l = m.value) != null && l.length ? m.value.filter((o) => o.used && (o.stack === !1 || typeof o.stack == "number")) : [];
  }), w = I(() => {
    var e;
    return (e = m.value) != null && e.length ? qe(h.value, m.value) : 0;
  }), W = I(() => {
    var l;
    if (!((l = m.value) != null && l.length)) return 0;
    let e = T.value ? (P.value + b.value) / T.value : null;
    return e > 1 && (e = 1), e;
  }), V = () => {
    z.value = null, C.value.length = 0, m.value.length = 0, M.value.length = 0, R.value.length = 0, Y.value.length = 0, D.value.length = 0;
  }, $ = () => {
    z.value = null, O.value = null, oe.value = null, ae.value = null, C.value = [], m.value = [], M.value = [], R.value = [], Y.value = [], re.value = 0, D.value = [];
  }, f = (e, l) => {
    var o;
    e in this && ((o = this[e]) == null || o.sort(Ee[l]));
  }, _ = (e) => {
    j(e);
  }, x = () => {
    j(C);
  }, F = () => {
    j(m);
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
      )), m.value = me({
        saw: z.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), C.value = pe({
        shapeList: e.shapeList,
        stockList: m.value,
        preventAutoRotation: !0
      }), M.value = Se({
        cutList: e.cutList,
        stockList: m.value
      }), R.value = ge({
        segmentList: e.segmentList,
        stockList: m.value
      }), Y.value = ke({
        offcuts: e.offcuts,
        stockList: m.value,
        preventAutoRotation: !0
      }), j(m), j(C), j(M), j(R), O.value = ((B = (y = a(m.value)) == null ? void 0 : y[0]) == null ? void 0 : B.id) || null;
    } catch (X) {
      console.error("Error updating from result", X);
    }
  }, U = (e) => {
    var l;
    return (l = m.value) != null && l.length ? m.value.find((o) => o.id === e) : null;
  }, J = (e) => {
    var l;
    return (l = C.value) != null && l.length ? C.value.filter((o) => {
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
    shapeList: C,
    stockList: m,
    cutList: M,
    segmentList: R,
    offcuts: Y,
    unusableShapes: D,
    currentCutIndex: re,
    activeShape: oe,
    //computed
    addedShapes: s,
    activeShapes: r,
    unplacedShapes: i,
    uniqueShapes: v,
    uniqueAddedShapes: k,
    unplacedShapeTally: d,
    uniqueStock: n,
    uniqueUsedStock: S,
    activeStock: h,
    activeCuts: c,
    activeCutsArea: P,
    activeCutType: p,
    usedStock: L,
    stackedStock: N,
    activeStockArea: T,
    activeShapeArea: b,
    activeStockStackCount: w,
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
      }), m.value = me({
        saw: z.value,
        stockList: [
          { id: "1.0", used: !0, l: 2440, w: 1220, q: 1 }
        ]
      }), C.value = pe({
        shapeList: [
          { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
          { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
        ],
        stockList: m.value,
        preventAutoRotation: !0
      }), R.value = ge({
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
        stockList: m.value
      }), M.value = Se({
        cutList: [
          { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 }
        ],
        stockList: m.value
      }), Y.value = ke({
        offcuts: [
          { stockId: "1.0", id: "1", x: 501, y: 401, l: 400, w: 99, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 0 },
          { stockId: "1.0", id: "2", x: 902, y: 0, l: 1538, w: 500, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 1 },
          { stockId: "1.0", id: "3", x: 0, y: 501, l: 2440, w: 719, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 2 }
        ],
        stockList: m.value,
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
  let c;
  const A = () => {
    c = $e(h, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), c.on("connect", () => {
      var i, d, v;
      (i = r.refs) != null && i.connected && (r.refs.connected.value = !0), (v = (d = r.callbacks) == null ? void 0 : d.onConnect) == null || v.call(d);
    }), c.on("connect_error", (i) => {
      var d, v, k, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (k = r.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, i);
    }), c.on("connect_timeout", (i) => {
      var d, v, k, n;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (n = (k = r.callbacks) == null ? void 0 : k.onConnectError) == null || n.call(k, i);
    }), c.on("result", (i) => {
      var d, v;
      K.value.complete = !0, (v = (d = r.callbacks) == null ? void 0 : d.onResult) == null || v.call(d, i), c.disconnect();
    }), c.on("queued", () => {
      be(), K.value.queued = !0;
    }), c.on("started", () => {
      K.value.started = !0;
    }), c.on("progress", (i) => {
      var d;
      ((d = i == null ? void 0 : i.data) == null ? void 0 : d.message) === "result" ? K.value.resultCount++ : (K.value.stockCount = i.data.stockCount, K.value.shapeCount = i.data.shapeCount);
    }), c.on("user", (i) => {
      var d, v;
      (v = (d = r.callbacks) == null ? void 0 : d.onUser) == null || v.call(d, i);
    }), c.on("error", (i) => {
      var d, v, k;
      (d = r.refs) != null && d.thinking && (r.refs.thinking.value = !1), be(), (k = (v = r.callbacks) == null ? void 0 : v.onError) == null || k.call(v, i);
    });
  }, L = () => c == null ? void 0 : c.disconnect(), s = () => c == null ? void 0 : c.connect();
  return A(), {
    socket: c,
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
  }, c = (A) => {
    r && (clearTimeout(r), r = null), H.value = { ...H.value, ...A }, A.show && (r = setTimeout(() => {
      H.value.show = !1, r = null;
    }, 3e3));
  };
  return Te(() => H.value.referenceEl, (A) => {
    A || (H.value.show = !1);
  }), { tip: H, hide: h, update: c };
}
const Ie = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Re = (r) => Ie.includes(r);
function Xe(r, h) {
  const c = (n) => {
    var S;
    (S = h.log) == null || S.call(h, n);
  }, A = (n) => {
    var S;
    return (S = h.error) == null || S.call(h, n), { success: !1, error: n };
  }, L = () => {
    for (const n of Ie) s(n, 0);
  }, s = (n, S) => {
    c(["setting price", n, S]);
    const { inputs: P, elements: T, setInputValue: b, formatPrice: p } = h;
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
    w != null && w.hidden && P[w.hidden] && (c(["setting hidden price", w.hidden, S]), b(w.hidden, S)), w != null && w.visible && T[w.visible] && (T[w.visible].innerText = p(S));
  }, i = (n) => {
    const { product: S, getCurrentVariationPrice: P, isQuantityPricing: T, enableAddToCart: b, setCartQuantity: p } = h;
    let N = (S == null ? void 0 : S.price) || P() || 0;
    typeof N == "string" && (N = parseFloat(N));
    const w = r.unit_system === "imperial" ? "feet" : "meters", V = {
      full_stock: (f) => {
        if (c(["calculating cost by full sheet"]), T())
          p(f.metadata.totalUsedStock);
        else {
          const _ = f.metadata.totalStockCost;
          return s("stock", _), _;
        }
        return 0;
      },
      part_area: (f) => {
        c([`calculating cost by part area in square ${w}`]);
        const _ = r.unit_system === "imperial" ? 144 : 1e6, x = f.metadata.totalPartArea / _, F = x * N;
        s("partArea", F), c([`part area in square ${w} is ${x} with price ${F}`]);
        let E = x;
        if (r != null && r.enable_offcut_pricing && (f != null && f.offcuts)) {
          const J = f == null ? void 0 : f.offcuts.reduce((t, a) => {
            const u = a.l >= a.w ? a.l : a.w, g = a.l >= a.w ? a.w : a.l;
            return u < r.offcut_min_length || g < r.offcut_min_width ? t + u * g : t;
          }, 0), q = J / _ * N;
          s("offcutArea", q), c([`calculated sellable offcut area as ${J}, with price ${q}`]), E += J / _;
        }
        const U = E * N;
        if (c([`calculated total price as ${U}, `]), T())
          c([`setting cart quantity to ${E}`]), p(E, 2);
        else
          return U;
        return 0;
      },
      cut_length: (f) => {
        c([`calculating cost by cut length in  ${w}`]);
        const _ = r.unit_system === "imperial" ? 12 : 1e3, x = f.metadata.totalCutLength / _;
        return p(x, 2), 0;
      },
      full_stock_plus_cut_length: (f) => {
        c(["calculating cost by full sheet plus cut length"]);
        let _ = 0;
        if (T())
          p(f.metadata.totalUsedStock);
        else {
          const U = f.metadata.totalStockCost;
          s("stock", U), _ = U;
        }
        const x = r.unit_system === "imperial" ? 12 : 1e3, E = f.metadata.totalCutLength / x * r.cut_length_price;
        return s("cutLength", E), _ + E;
      },
      full_stock_plus_num_parts: (f) => {
        c(["calculating cost by full sheet plus number of parts"]);
        let _ = 0;
        if (T())
          p(f.metadata.totalUsedStock);
        else {
          const F = f.metadata.totalStockCost;
          s("stock", F), _ = F;
        }
        const x = f.metadata.totalPartsProduced * r.per_part_price;
        return s("perPart", x), _ + x;
      },
      roll_length: (f) => {
        c([`calculating cost by roll length in ${w}`]);
        const _ = r.unit_system === "imperial" ? 12 : 1e3, x = f.stock.reduce((F, E) => F + E.analysis.rollLength / _ * Ne({ v: E.cost }), 0);
        return s("rollLength", x), x;
      }
    }[r.pricing_strategy], $ = V(n);
    return b(), $;
  }, d = (n, S) => {
    const {
      isExtraEnabled: P,
      isMachiningEnabled: T,
      isSurchargeEnabled: b,
      inputType: p,
      getTotalBandingPrice: N,
      getTotalFinishPrice: w,
      getTotalMachiningPrice: W,
      getInputValue: V
    } = h;
    let $ = S;
    if (P("banding") && n.metadata.bandingLengthByType) {
      const f = N(n.metadata.bandingLengthByType);
      s("banding", f), $ += f;
    }
    if (P("finish") && n.metadata.finishAreaByType) {
      const f = w(n.metadata.finishAreaByType);
      s("finish", f), $ += f;
    }
    if (p.value === "formula") {
      const f = parseFloat(V("smartcut-hardware-price"));
      isNaN(f) || ($ += f);
    }
    if (T()) {
      const f = W(n);
      s("machining", f), $ += f;
    }
    if (b() && r.surcharge) {
      const f = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * n.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      s("surcharge", f), c(["added surcharge", f]), $ += f;
    }
    return $;
  }, v = (n) => {
    const { getInputValue: S, setInputValue: P } = h, T = {
      "smartcut-job-id": n.jobId,
      "smartcut-dimensions": n.parts.map((b) => `${b.l}x${b.w} [${b.q}]`).join(", "),
      "smartcut-total-cut-length": n.metadata.totalCutLength,
      "smartcut-part-area": n.metadata.totalPartArea,
      "smartcut-total-cuts": n.metadata.totalCuts,
      "smartcut-total-parts": n.metadata.totalPartsProduced,
      "smartcut-machining": n.metadata.hasMachining
    };
    if (Object.entries(T).forEach(([b, p]) => {
      P(b, p);
    }), S("smartcut-stock-summary") !== void 0) {
      const b = n.stock.map((p) => `${p.l}x${p.w}${p.t ? "x" + p.t : ""} [${p.q}]`).join(", ");
      P("smartcut-stock-summary", b);
    }
  };
  return {
    calculatePrice: async (n) => {
      L();
      const { isQuantityPricing: S, selectedVariation: P, setVariationPrice: T, setCartQuantity: b } = h;
      if (!(n != null && n.jobId))
        return A("No job ID provided");
      S() || b(1);
      let p = i(n);
      if (p = d(n, p), !S()) {
        if (!n.metadata.totalStockCost)
          return A("Total stock cost not returned for a multiple size product");
        c([`total cost is ${p}`]), s("custom", p);
      }
      return P.value && T(p), v(n), { success: !0, totalPrice: p };
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
