import { g as $, H as D, h as I, G as Y, S as Z, i as Le } from "./vendor-vue-3xcI29J2.js";
import { r as ie, I as oe, a as ee, m as Te, S as _e, b as Pe, t as ue, c as te, g as Ce, u as de, s as re, d as xe, e as Ae, f as qe, h as fe, i as he, j as pe, k as ve, l as me, n as ge, o as Ee } from "./components-BNP5xiAl.js";
import { p as Se, l as Ne } from "./vendor-UJdh33XB.js";
let ae = null;
function $e(a = { numberFormat: "decimal" }) {
  const h = $(null), u = () => {
    const t = localStorage.getItem("GlobalStore/inputStock"), r = localStorage.getItem("GlobalStore/inputShapes");
    let n = [], m = [];
    if (t)
      try {
        const o = JSON.parse(t);
        o.length && (n = o), localStorage.removeItem("GlobalStore/inputStock");
      } catch (o) {
        console.error("Error migrating stock data:", o);
      }
    if (r)
      try {
        const o = JSON.parse(r);
        o.length && (m = o), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (o) {
        console.error("Error migrating shapes data:", o);
      }
    return { migratedStock: n, migratedShapes: m };
  }, { migratedStock: x, migratedShapes: _ } = u(), i = D("inputs/inputStock", x, {
    serializer: {
      read: (t) => {
        const r = t ? JSON.parse(t) : [];
        return w(r, a.numberFormat);
      },
      write: (t) => {
        const r = t.filter((n) => !(n != null && n.multiEdit));
        return JSON.stringify(r);
      }
    },
    listenToStorageChanges: !1
  }), d = D("inputs/inputShapes", _, {
    serializer: {
      read: (t) => {
        const r = t ? JSON.parse(t) : [];
        return p(r, a.numberFormat);
      },
      write: (t) => {
        const r = t.filter((n) => !(n != null && n.multiEdit));
        return JSON.stringify(r);
      }
    },
    listenToStorageChanges: !1
  }), f = D("groups/userGroups", [], {
    serializer: {
      read: (t) => {
        const r = t ? JSON.parse(t) : [];
        return ie(r);
      },
      write: (t) => JSON.stringify(t)
    },
    listenToStorageChanges: !1
  }), g = $(null), k = I(() => d.value.reduce((t, r) => r != null && r.q && r.q > 0 && !(r != null && r.multiEdit) ? t + r.q : t, 0)), l = I(() => i.value.reduce((t, r) => r != null && r.q && r.q > 0 && !(r != null && r.multiEdit) ? t + r.q : t, 0)), y = (t, r = "decimal") => {
    const n = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), m = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), o = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (n && P(n, r), m && L(m, r), o)
      try {
        f.value = ie(o, d.value);
      } catch (e) {
        console.error("Error updating user groups:", e);
      }
  }, P = (t, r = "decimal") => {
    try {
      d.value = p(t, r);
    } catch (n) {
      console.error("Error updating input shapes:", n);
    }
  }, L = (t, r = "decimal") => {
    try {
      i.value = w(t, r);
    } catch (n) {
      console.error("Error updating input stock:", n);
    }
  };
  function w(t, r = "decimal") {
    return t.map((n) => (delete n.id, new oe(n, r)));
  }
  function p(t, r = "decimal") {
    return !t || !(t != null && t.length) ? [] : t.map((n) => (delete n.id, new ee(n, r)));
  }
  return {
    inputs: {
      inputStock: i,
      inputShapes: d,
      userGroups: f,
      currentInputShape: g,
      selectedSaw: h
    },
    inputStock: i,
    inputShapes: d,
    userGroups: f,
    currentInputShape: g,
    selectedSaw: h,
    totalInputShapes: k,
    totalInputStock: l,
    reset: () => {
      g.value = null;
    },
    clear: () => {
      d.value = [], i.value = [], f.value = [];
    },
    clearIssues: () => {
      d.value.forEach((t) => t.issues = []), i.value.forEach((t) => t.issues = []);
    },
    updateInputs: y,
    updateInputShapes: P,
    updateInputStock: L,
    getShapeGrainSummary: (t) => {
      if (!i.value.length)
        return "n";
      const r = t.material, n = t.t, m = i.value.filter((e) => e.material === r && e.t === n);
      return m.length ? Ce(m) : "n";
    },
    createShapeList: (t = {
      trim: 0,
      stockType: null,
      minSpacing: 0,
      maxDimension: null,
      orientationModel: 0
    }) => {
      if (!d.value.length)
        return { shapeList: [], issues: [] };
      const r = [], n = [];
      for (let m = 0; m < d.value.length; m++) {
        const o = d.value[m];
        if (!(o != null && o.q)) continue;
        const e = ["name", "material", "notes"];
        for (const E of e)
          E in o && (o[E] = Se.sanitize(o[E]));
        o.createId(m), o.applyPartTrim(t.trim, t.stockType);
        const c = { ...o };
        Te(c, t.orientationModel);
        const s = new _e(c);
        s.trimDimensions(), t.minSpacing && t.maxDimension && (s.l <= t.maxDimension || s.w <= t.maxDimension) && (s.minSpacing = t.minSpacing), n.push(s), r.push(...s.issues);
      }
      return { shapeList: n, issues: r };
    },
    createStockList: (t) => {
      if (!i.value.length)
        return { stockList: [], issues: [] };
      const r = [], n = [];
      for (let m = 0; m < i.value.length; m++) {
        const o = i.value[m];
        if (!(o != null && o.q) && !o.autoAdd) continue;
        const e = ["name", "material", "notes"];
        for (const s of e)
          s in o && (o[s] = Se.sanitize(o[s]));
        o.createId(m);
        const c = new Pe(o);
        c.saw = t, r.push(...c.issues), n.push(c);
      }
      return { stockList: n, issues: r };
    },
    validateInputStock: () => {
      var n;
      const t = [], r = ue(i.value);
      if (!i.value.some((m) => m.autoAdd) && (!((n = i.value) != null && n.length) || !r))
        return new te({
          message: "no_stock",
          index: [...i.value.keys()],
          field: [["q"]],
          issues: t
        }), t;
      for (const m of i.value)
        t.push(...m.validate());
      return t;
    },
    validateInputShapes: (t = null) => {
      const {
        saw: r = null,
        partTrim: n = 0,
        useInventory: m = !1
      } = t || {}, o = [];
      if (!d.value.length)
        return new te({
          message: "no_parts",
          issues: o
        }), o;
      if (!ue(d.value))
        return new te({
          message: "no_parts",
          field: [["q"]],
          issues: o
        }), o;
      let c = 0;
      for (const s of d.value)
        o.push(...s.validate({
          inputStockList: i.value,
          index: c,
          stockType: r !== null ? r.stockType ?? null : null,
          partTrim: n,
          useInventory: m
        })), c++;
      return o;
    },
    updateNumberFormat: (t) => {
      for (const r of d.value)
        de(r, t);
      for (const r of i.value)
        de(r, t);
    },
    createTestData: ({
      stock: t = !0,
      shapes: r = !0
    }) => {
      t && (i.value = [
        new oe({
          l: 2440,
          w: 1220,
          q: 1
        })
      ]), r && (d.value = [
        new ee({
          l: 500,
          w: 500,
          q: 1
        }),
        new ee({
          l: 400,
          w: 400,
          q: 1
        })
      ]);
    },
    removeStock: (t) => {
      if (i.value.length === 1) return;
      const r = i.value.findIndex((n) => n.listId === t);
      r !== -1 && i.value.splice(r, 1);
    },
    removeShape: (t) => {
      if (d.value.length === 1) return;
      const r = d.value.findIndex((n) => n.listId === t);
      r !== -1 && d.value.splice(r, 1);
    }
  };
}
function Qe(a = { numberFormat: "decimal" }) {
  return ae || (ae = $e(a)), ae;
}
const B = $([]), Fe = 6;
function ze() {
  const a = ({
    message: u,
    type: x = "info",
    additional: _ = [],
    options: i = {},
    action: d = () => {
    }
  }) => {
    Array.isArray(_) || (console.warn("addNotice - additional must be an array"), _ = []);
    const f = {
      id: crypto.randomUUID(),
      message: re(u),
      additional: _.length > 5 ? _.slice(0, 5).map((k) => re(k)).join("<br>") + "<br>..." : _.slice(0, 5).map((k) => re(k)).join("<br>"),
      type: x,
      persistent: i.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: d
    }, g = i.maxNotices ?? Fe;
    if (B.value.length >= g) {
      const k = B.value.findIndex((l) => !l.persistent);
      if (k !== -1)
        B.value.splice(k, 1);
      else if (!f.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), f.id;
    }
    return B.value.push(f), !f.persistent && i.timeout !== 0 && setTimeout(() => {
      h(f.id);
    }, i.timeout || 5e3), f.id;
  }, h = (u) => {
    B.value.findIndex((_) => _.id === u) !== -1 && (B.value = B.value.filter((_) => _.id !== u));
  };
  return {
    notices: B,
    addNotice: a,
    dismissNotice: h
  };
}
const z = $(null), R = $(null), Ge = $(null), C = Y([]), v = Y([]), O = Y([]), U = Y([]), V = $([]), K = Y([]), ne = $(null), se = $(0), ke = $(null), Oe = {
  saw: z,
  activeStockId: R,
  jobId: Ge,
  shapeList: C,
  stockList: v,
  cutList: O,
  segmentList: U,
  offcuts: V,
  unusableShapes: K,
  metadata: ne,
  currentCutIndex: se
};
function Ve() {
  const a = I(() => R.value ? J(R.value) : []), h = I(() => {
    var e;
    return !R.value || !((e = v.value) != null && e.length) ? null : H(R.value);
  }), u = I(() => {
    var c;
    if (!h.value || !((c = O.value) != null && c.length)) return [];
    const e = r(h.value.id);
    return se.value = 0, e;
  }), x = I(() => {
    var e;
    return !h.value || !((e = U.value) != null && e.length) ? [] : t(R.value);
  }), _ = I(() => {
    var e;
    return (e = v.value) != null && e.length ? n(v.value) : [];
  }), i = I(() => C.value.filter((e) => e.added)), d = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((c) => !c.added) : [];
  }), f = I(() => {
    var e;
    return (e = C.value) != null && e.length ? xe(C.value) : [];
  }), g = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((c) => !c.duplicate) : [];
  }), k = I(() => g.value.filter((e) => e.added)), l = I(() => {
    var e;
    return (e = v.value) != null && e.length ? v.value.filter((c) => c.used && !c.duplicate) : [];
  }), y = I(() => l.value.filter((e) => e.used)), P = I(() => {
    var e;
    return (e = O.value) != null && e.length ? u.value.reduce((c, s) => c + s.getArea(), 0) : 0;
  }), L = I(() => {
    var e;
    return !((e = v.value) != null && e.length) || !h.value ? 0 : h.value ? h.value.getArea() : 0;
  }), w = I(() => {
    var e;
    return !((e = C.value) != null && e.length) || !a.value ? 0 : a.value ? a.value.reduce((c, s) => c + s.getArea(), 0) : 0;
  }), p = I(() => {
    var e;
    return !((e = O.value) != null && e.length) || !h.value ? null : h.value.cutType;
  }), M = I(() => {
    var c;
    return (c = v.value) != null && c.length ? v.value.filter((s) => s.used && (s.stack === !1 || typeof s.stack == "number")) : [];
  }), T = I(() => {
    var e;
    return (e = v.value) != null && e.length ? Ae(h.value, v.value) : 0;
  }), X = I(() => {
    var c;
    if (!((c = v.value) != null && c.length)) return 0;
    let e = L.value ? (P.value + w.value) / L.value : null;
    return e > 1 && (e = 1), e;
  }), j = () => {
    z.value = null, C.value.length = 0, v.value.length = 0, O.value.length = 0, U.value.length = 0, V.value.length = 0, K.value.length = 0;
  }, F = () => {
    C.value = [], v.value = [], O.value = [], U.value = [], V.value = [], K.value = [];
  }, b = (e, c) => {
    var s;
    e in this && ((s = this[e]) == null || s.sort(qe[c]));
  }, S = (e) => {
    Z(e);
  }, A = () => {
    Z(C);
  }, q = () => {
    Z(v);
  }, G = () => {
    Z(V);
  }, N = (e) => {
    var c, s, E, le, ce;
    ne.value = e.metadata, K.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (z.value = new fe(
        e == null ? void 0 : e.saw,
        ((c = e == null ? void 0 : e.saw) == null ? void 0 : c.stockType) || ((E = (s = e.stockList) == null ? void 0 : s[0]) == null ? void 0 : E.type)
      )), v.value = he({
        saw: z.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), C.value = pe({
        shapeList: e.shapeList,
        stockList: v.value,
        preventAutoRotation: !0
      }), O.value = ve({
        cutList: e.cutList,
        stockList: v.value
      }), U.value = me({
        segmentList: e.segmentList,
        stockList: v.value
      }), V.value = ge({
        offcuts: e.offcuts,
        stockList: v.value,
        preventAutoRotation: !0
      }), R.value = ((ce = (le = n(v.value)) == null ? void 0 : le[0]) == null ? void 0 : ce.id) || null;
    } catch (Ie) {
      console.error("Error updating from result", Ie);
    }
  }, H = (e) => {
    var c;
    return (c = v.value) != null && c.length ? v.value.find((s) => s.id === e) : null;
  }, J = (e) => {
    var c;
    return (c = C.value) != null && c.length ? C.value.filter((s) => {
      var E;
      return (((E = s == null ? void 0 : s.stock) == null ? void 0 : E.id) ?? (s == null ? void 0 : s.stockId)) === e;
    }) : [];
  }, t = (e) => {
    var c;
    return (c = U.value) != null && c.length ? U.value.filter((s) => {
      var E;
      return (((E = s == null ? void 0 : s.stock) == null ? void 0 : E.id) ?? (s == null ? void 0 : s.stockId)) === e;
    }) : [];
  }, r = (e) => {
    var c;
    if ((c = O.value) != null && c.length)
      return O.value.filter((s) => {
        var E;
        return (((E = s == null ? void 0 : s.stock) == null ? void 0 : E.id) ?? (s == null ? void 0 : s.stockId)) === e;
      });
  }, n = (e) => e != null && e.length ? e.filter((c) => c.used === !0) : [];
  return {
    //all result items for convenience
    r: Oe,
    //state
    activeStockId: R,
    saw: z,
    shapeList: C,
    stockList: v,
    cutList: O,
    segmentList: U,
    offcuts: V,
    unusableShapes: K,
    currentCutIndex: se,
    activeShape: ke,
    //computed
    addedShapes: i,
    activeShapes: a,
    unplacedShapes: d,
    uniqueShapes: g,
    uniqueAddedShapes: k,
    unplacedShapeTally: f,
    uniqueStock: l,
    uniqueUsedStock: y,
    activeStock: h,
    activeCuts: u,
    activeCutsArea: P,
    activeCutType: p,
    usedStock: _,
    stackedStock: M,
    activeStockArea: L,
    activeShapeArea: w,
    activeStockStackCount: T,
    activeTotalArea: X,
    activeSegments: x,
    //methods
    reset: j,
    clear: F,
    sortItems: b,
    update: S,
    updateShapes: A,
    updateStock: q,
    updateOffcuts: G,
    updateFromResult: N,
    getStock: H,
    getShapes: J,
    getSegments: t,
    getCuts: r,
    setActiveStockId: (e) => {
      ke.value = null, R.value = e;
    },
    //testing
    createTestData: () => {
      z.value = new fe({
        bladeWidth: 1,
        stockType: "sheet",
        cutType: "guillotine",
        cutPreference: "l"
      }), v.value = he({
        saw: z.value,
        stockList: [
          { id: "1.0", used: !0, l: 2440, w: 1220, q: 1, type: "sheet" }
        ]
      }), C.value = pe({
        shapeList: [
          { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
          { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
        ],
        stockList: v.value,
        preventAutoRotation: !0
      }), U.value = me({
        segmentList: [
          { id: "153", x: 0, y: 0, l: 2440, w: 1220, phase: 0, type: "sheet", cutDirection: "l" },
          { id: "154", x: 0, y: 0, l: 2440, w: 500, phase: 1, type: "sheet", cutDirection: "w" },
          { id: "155", x: 0, y: 0, l: 500, w: 500, phase: 2, type: "sheet", cutDirection: "l" },
          { id: "157", x: 501, y: 0, l: 400, w: 500, phase: 2, type: "sheet", cutDirection: "l" },
          { id: "158", x: 501, y: 0, l: 400, w: 400, phase: 3, type: "sheet", cutDirection: "w" },
          { id: "159", x: 501, y: 401, l: 400, w: 99, phase: 3, type: "sheet", cutDirection: "w" },
          { id: "160", x: 902, y: 0, l: 1538, w: 500, phase: 2, type: "sheet", cutDirection: "l" },
          { id: "161", x: 0, y: 501, l: 2440, w: 719, phase: 1, type: "sheet", cutDirection: "w" }
        ],
        stockList: v.value
      }), O.value = ve({
        cutList: [
          { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 }
        ],
        stockList: v.value
      }), V.value = ge({
        offcuts: [
          { stockId: "1.0", id: "1", x: 501, y: 401, l: 400, w: 99, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 0 },
          { stockId: "1.0", id: "2", x: 902, y: 0, l: 1538, w: 500, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 1 },
          { stockId: "1.0", id: "3", x: 0, y: 501, l: 2440, w: 719, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 2 }
        ],
        stockList: v.value,
        preventAutoRotation: !0
      }), ne.value = {
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
const ye = $({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Me() {
  return {
    progress: ye,
    reset: () => {
      ye.value = {
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
const { progress: W, reset: we } = Me();
function je(a) {
  const h = "https://api.cutlistevo.com/";
  let u;
  const x = () => {
    u = Ne(h, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), u.on("connect", () => {
      var d, f, g;
      (d = a.refs) != null && d.connected && (a.refs.connected.value = !0), (g = (f = a.callbacks) == null ? void 0 : f.onConnect) == null || g.call(f);
    }), u.on("connect_error", (d) => {
      var f, g, k, l;
      (f = a.refs) != null && f.connected && (a.refs.connected.value = !1), (g = a.refs) != null && g.thinking && (a.refs.thinking.value = !1), (l = (k = a.callbacks) == null ? void 0 : k.onConnectError) == null || l.call(k, d);
    }), u.on("connect_timeout", (d) => {
      var f, g, k, l;
      (f = a.refs) != null && f.connected && (a.refs.connected.value = !1), (g = a.refs) != null && g.thinking && (a.refs.thinking.value = !1), (l = (k = a.callbacks) == null ? void 0 : k.onConnectError) == null || l.call(k, d);
    }), u.on("result", (d) => {
      var f, g;
      W.value.complete = !0, (g = (f = a.callbacks) == null ? void 0 : f.onResult) == null || g.call(f, d), u.disconnect();
    }), u.on("queued", () => {
      we(), W.value.queued = !0;
    }), u.on("started", () => {
      W.value.started = !0;
    }), u.on("progress", (d) => {
      var f;
      ((f = d == null ? void 0 : d.data) == null ? void 0 : f.message) === "result" ? W.value.resultCount++ : (W.value.stockCount = d.data.stockCount, W.value.shapeCount = d.data.shapeCount);
    }), u.on("error", (d) => {
      var f, g, k;
      (f = a.refs) != null && f.thinking && (a.refs.thinking.value = !1), we(), (k = (g = a.callbacks) == null ? void 0 : g.onError) == null || k.call(g, d);
    });
  }, _ = () => u == null ? void 0 : u.disconnect(), i = () => u == null ? void 0 : u.connect();
  return x(), {
    socket: u,
    connect: i,
    disconnect: _
  };
}
const Q = $({
  show: !1,
  content: "",
  type: "info",
  referenceEl: null
});
function He() {
  let a = null;
  const h = () => {
    Q.value.show = !1;
  }, u = (x) => {
    a && (clearTimeout(a), a = null), Q.value = { ...Q.value, ...x }, x.show && (a = setTimeout(() => {
      Q.value.show = !1, a = null;
    }, 3e3));
  };
  return Le(() => Q.value.referenceEl, (x) => {
    x || (Q.value.show = !1);
  }), { tip: Q, hide: h, update: u };
}
const be = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Re = (a) => be.includes(a);
function We(a, h) {
  const u = (l) => {
    var y;
    (y = h.log) == null || y.call(h, l);
  }, x = (l) => {
    var y;
    return (y = h.error) == null || y.call(h, l), { success: !1, error: l };
  }, _ = () => {
    for (const l of be) i(l, 0);
  }, i = (l, y) => {
    const { inputs: P, elements: L, setInputValue: w, formatPrice: p } = h;
    if (isNaN(y)) throw new Error("Price must be a number");
    if (!Re(l)) return;
    const T = {
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
    }[l];
    T != null && T.hidden && P[T.hidden] && w(T.hidden, y), T != null && T.visible && L[T.visible] && (L[T.visible].innerText = p(y));
  }, d = (l) => {
    var b;
    const { product: y, selectedVariation: P, isQuantityPricing: L, enableAddToCart: w, setCartQuantity: p } = h, M = parseFloat((y == null ? void 0 : y.price) || ((b = P.value) == null ? void 0 : b.display_price) || "0"), T = a.unit_system === "imperial" ? "feet" : "meters", j = {
      full_stock: (S) => (u(["calculating cost by full sheet"]), L() ? (p(S.metadata.totalUsedStock), 0) : S.metadata.totalStockCost),
      part_area: (S) => {
        u([`calculating cost by part area in square ${T}`]);
        const A = a.unit_system === "imperial" ? 144 : 1e6, q = S.metadata.totalPartArea / A, G = q * M;
        i("partArea", G), u([`part area in square ${T} is ${q} with price ${G}`]);
        let N = q;
        if (a != null && a.enable_offcut_pricing && (S != null && S.offcuts)) {
          const J = S == null ? void 0 : S.offcuts.reduce((r, n) => {
            const m = n.l >= n.w ? n.l : n.w, o = n.l >= n.w ? n.w : n.l;
            return m < a.offcut_min_length || o < a.offcut_min_width ? r + m * o : r;
          }, 0), t = J / A * M;
          i("offcutArea", t), u([`calculated sellable offcut area as ${J}, with price ${t}`]), N += J / A;
        }
        const H = N * M;
        if (u([`calculated total price as ${H}, `]), L())
          u([`setting cart quantity to ${N}`]), p(N, 2);
        else
          return H;
        return 0;
      },
      cut_length: (S) => {
        u([`calculating cost by cut length in  ${T}`]);
        const A = a.unit_system === "imperial" ? 12 : 1e3, q = S.metadata.totalCutLength / A;
        return p(q, 2), 0;
      },
      full_stock_plus_cut_length: (S) => {
        u(["calculating cost by full sheet plus cut length"]);
        let A = 0;
        L() ? p(S.metadata.totalUsedStock) : A = S.metadata.totalStockCost;
        const q = a.unit_system === "imperial" ? 12 : 1e3, N = S.metadata.totalCutLength / q * a.cut_length_price;
        return i("cutLength", N), A + N;
      },
      full_stock_plus_num_parts: (S) => {
        u(["calculating cost by full sheet plus number of parts"]);
        let A = 0;
        if (L())
          p(S.metadata.totalUsedStock);
        else {
          const G = S.metadata.totalStockCost;
          i("stock", G), A = G;
        }
        const q = S.metadata.totalPartsProduced * a.per_part_price;
        return i("perPart", q), A + q;
      },
      roll_length: (S) => {
        u([`calculating cost by roll length in ${T}`]);
        const A = a.unit_system === "imperial" ? 12 : 1e3, q = S.stock.reduce((G, N) => G + N.analysis.rollLength / A * Ee({ v: N.cost }), 0);
        return i("rollLength", q), q;
      }
    }[a.pricing_strategy], F = j(l);
    return w(), F;
  }, f = (l, y) => {
    const {
      isExtraEnabled: P,
      isMachiningEnabled: L,
      isSurchargeEnabled: w,
      inputType: p,
      getTotalBandingPrice: M,
      getTotalFinishPrice: T,
      getTotalMachiningPrice: X,
      getInputValue: j
    } = h;
    let F = y;
    if (P("banding") && l.metadata.bandingLengthByType) {
      const b = M(l.metadata.bandingLengthByType);
      i("banding", b), F += b;
    }
    if (P("finish") && l.metadata.finishAreaByType) {
      const b = T(l.metadata.finishAreaByType);
      i("finish", b), F += b;
    }
    if (p.value === "formula") {
      const b = parseFloat(j("smartcut-hardware-price"));
      isNaN(b) || (F += b);
    }
    if (L()) {
      const b = X(l);
      i("machining", b), F += b;
    }
    if (w() && a.surcharge) {
      const b = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * l.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      i("surcharge", b), u(["added surcharge", b]), F += b;
    }
    return F;
  }, g = (l) => {
    const { getInputValue: y, setInputValue: P } = h, L = {
      "smartcut-job-id": l.jobId,
      "smartcut-dimensions": l.parts.map((w) => `${w.l}x${w.w} [${w.q}]`).join(", "),
      "smartcut-total-cut-length": l.metadata.totalCutLength,
      "smartcut-part-area": l.metadata.totalPartArea,
      "smartcut-total-cuts": l.metadata.totalCuts,
      "smartcut-total-parts": l.metadata.totalPartsProduced,
      "smartcut-machining": l.metadata.hasMachining
    };
    if (Object.entries(L).forEach(([w, p]) => {
      P(w, p);
    }), y("smartcut-stock-summary") !== void 0) {
      const w = l.stock.map((p) => `${p.l}x${p.w}${p.t ? "x" + p.t : ""} [${p.q}]`).join(", ");
      P("smartcut-stock-summary", w);
    }
  };
  return {
    calculatePrice: async (l) => {
      const { isQuantityPricing: y, selectedVariation: P, setVariationPrice: L, setCartQuantity: w } = h;
      if (!(l != null && l.jobId))
        return x("No job ID provided");
      y() || w(1);
      let p = d(l);
      if (!y()) {
        if (!l.metadata.totalStockCost)
          return x("Total stock cost not returned for a multiple size product");
        u([`total cost is ${p}`]), i("custom", p);
      }
      return p = f(l, p), P.value && L(p), g(l), { success: !0, totalPrice: p };
    },
    resetPricing: _
  };
}
export {
  ze as a,
  Ve as b,
  He as c,
  je as d,
  Me as e,
  We as f,
  Qe as u
};
