import { g as G, H as re, h as I, G as Y, S as Z, i as Ie } from "./vendor-vue-B39CQo2S.js";
import { r as ie, I as ue, a as ae, m as Le, S as Te, b as _e, t as de, c as ne, g as Pe, u as fe, s as le, d as Ce, e as xe, f as Ae, h as he, i as ve, j as pe, k as me, l as ge, n as Se, o as qe } from "./components-CrV1ol0Z.js";
import { p as ke, l as Ee } from "./vendor-UJdh33XB.js";
let se = null;
function Ne(a = { numberFormat: "decimal" }) {
  const v = G(null), u = () => {
    const t = localStorage.getItem("GlobalStore/inputStock"), r = localStorage.getItem("GlobalStore/inputShapes");
    let c = [], S = [];
    if (t)
      try {
        const o = JSON.parse(t);
        o.length && (c = o), localStorage.removeItem("GlobalStore/inputStock");
      } catch (o) {
        console.error("Error migrating stock data:", o);
      }
    if (r)
      try {
        const o = JSON.parse(r);
        o.length && (S = o), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (o) {
        console.error("Error migrating shapes data:", o);
      }
    return { migratedStock: c, migratedShapes: S };
  }, { migratedStock: x, migratedShapes: T } = u(), i = re("inputs/inputStock", x, {
    serializer: {
      read: (t) => {
        const r = t ? JSON.parse(t) : [];
        return w(r, a.numberFormat);
      },
      write: (t) => {
        const r = t.filter((c) => !(c != null && c.multiEdit));
        return JSON.stringify(r);
      }
    },
    listenToStorageChanges: !1
  }), d = re("inputs/inputShapes", T, {
    serializer: {
      read: (t) => {
        const r = t ? JSON.parse(t) : [];
        return m(r, a.numberFormat);
      },
      write: (t) => {
        const r = t.filter((c) => !(c != null && c.multiEdit));
        return JSON.stringify(r);
      }
    },
    listenToStorageChanges: !1
  }), f = re("groups/userGroups", [], {
    serializer: {
      read: (t) => {
        const r = t ? JSON.parse(t) : [];
        return ie(r);
      },
      write: (t) => JSON.stringify(t)
    },
    listenToStorageChanges: !1
  }), p = G(null), y = I(() => d.value.reduce((t, r) => r != null && r.q && r.q > 0 && !(r != null && r.multiEdit) ? t + r.q : t, 0)), l = I(() => i.value.reduce((t, r) => r != null && r.q && r.q > 0 && !(r != null && r.multiEdit) ? t + r.q : t, 0)), k = (t, r = "decimal") => {
    const c = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), S = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), o = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (c && _(c, r), S && L(S, r), o)
      try {
        f.value = ie(o, d.value);
      } catch (e) {
        console.error("Error updating user groups:", e);
      }
  }, _ = (t, r = "decimal") => {
    try {
      d.value = m(t, r);
    } catch (c) {
      console.error("Error updating input shapes:", c);
    }
  }, L = (t, r = "decimal") => {
    try {
      i.value = w(t, r);
    } catch (c) {
      console.error("Error updating input stock:", c);
    }
  };
  function w(t, r = "decimal") {
    return t.map((c) => (delete c.id, new ue(c, r)));
  }
  function m(t, r = "decimal") {
    return !t || !(t != null && t.length) ? [] : t.map((c) => (delete c.id, new ae(c, r)));
  }
  return {
    inputs: {
      inputStock: i,
      inputShapes: d,
      userGroups: f,
      currentInputShape: p,
      selectedSaw: v
    },
    inputStock: i,
    inputShapes: d,
    userGroups: f,
    currentInputShape: p,
    selectedSaw: v,
    totalInputShapes: y,
    totalInputStock: l,
    reset: () => {
      p.value = null;
    },
    clear: () => {
      d.value = [], i.value = [], f.value = [];
    },
    clearIssues: () => {
      d.value.forEach((t) => t.issues = []), i.value.forEach((t) => t.issues = []);
    },
    updateInputs: k,
    updateInputShapes: _,
    updateInputStock: L,
    getShapeGrainSummary: (t) => {
      if (!i.value.length)
        return "n";
      const r = t.material, c = t.t, S = i.value.filter((e) => e.material === r && e.t === c);
      return S.length ? Pe(S) : "n";
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
      const r = [], c = [];
      for (let S = 0; S < d.value.length; S++) {
        const o = d.value[S];
        if (!(o != null && o.q)) continue;
        const e = ["name", "material", "notes"];
        for (const q of e)
          q in o && (o[q] = ke.sanitize(o[q]));
        o.createId(S), o.applyPartTrim(t.trim, t.stockType);
        const s = { ...o };
        Le(s, t.orientationModel);
        const n = new Te(s);
        n.trimDimensions(), t.minSpacing && t.maxDimension && (n.l <= t.maxDimension || n.w <= t.maxDimension) && (n.minSpacing = t.minSpacing), c.push(n), r.push(...n.issues);
      }
      return { shapeList: c, issues: r };
    },
    createStockList: (t) => {
      if (!i.value.length)
        return { stockList: [], issues: [] };
      const r = [], c = [];
      for (let S = 0; S < i.value.length; S++) {
        const o = i.value[S];
        if (!(o != null && o.q) && !o.autoAdd) continue;
        const e = ["name", "material", "notes"];
        for (const n of e)
          n in o && (o[n] = ke.sanitize(o[n]));
        o.createId(S);
        const s = new _e(o);
        s.saw = t, r.push(...s.issues), c.push(s);
      }
      return { stockList: c, issues: r };
    },
    validateInputStock: (t = null) => {
      var S;
      const r = [], c = de(i.value);
      if (!i.value.some((o) => o.autoAdd) && (!((S = i.value) != null && S.length) || !c))
        return new ne({
          message: "no_stock",
          index: [...i.value.keys()],
          field: [["q"]],
          issues: r
        }), r;
      for (const o of i.value)
        r.push(...o.validate(t));
      return r;
    },
    validateInputShapes: (t = null) => {
      const {
        saw: r = null,
        partTrim: c = 0,
        useInventory: S = !1
      } = t || {}, o = [];
      if (!d.value.length)
        return new ne({
          message: "no_parts",
          issues: o
        }), o;
      if (!de(d.value))
        return new ne({
          message: "no_parts",
          field: [["q"]],
          issues: o
        }), o;
      let s = 0;
      for (const n of d.value)
        o.push(...n.validate({
          inputStockList: i.value,
          index: s,
          stockType: r !== null ? r.stockType ?? null : null,
          partTrim: c,
          useInventory: S,
          saw: r
        })), s++;
      return o;
    },
    updateNumberFormat: (t) => {
      for (const r of d.value)
        fe(r, t);
      for (const r of i.value)
        fe(r, t);
    },
    createTestData: ({
      stock: t = !0,
      shapes: r = !0
    }) => {
      t && (i.value = [
        new ue({
          l: 2440,
          w: 1220,
          q: 1
        })
      ]), r && (d.value = [
        new ae({
          l: 500,
          w: 500,
          q: 1
        }),
        new ae({
          l: 400,
          w: 400,
          q: 1
        })
      ]);
    },
    removeStock: (t) => {
      if (i.value.length === 1) return;
      const r = i.value.findIndex((c) => c.listId === t);
      r !== -1 && i.value.splice(r, 1);
    },
    removeShape: (t) => {
      if (d.value.length === 1) return;
      const r = d.value.findIndex((c) => c.listId === t);
      r !== -1 && d.value.splice(r, 1);
    }
  };
}
function Je(a = { numberFormat: "decimal" }) {
  return se || (se = Ne(a)), se;
}
const R = G([]), $e = 6;
function Qe() {
  const a = ({
    message: u,
    type: x = "info",
    additional: T = [],
    options: i = {},
    action: d = () => {
    }
  }) => {
    Array.isArray(T) || (console.warn("addNotice - additional must be an array"), T = []);
    const f = {
      id: crypto.randomUUID(),
      message: le(u),
      additional: T.length > 5 ? T.slice(0, 5).map((y) => le(y)).join("<br>") + "<br>..." : T.slice(0, 5).map((y) => le(y)).join("<br>"),
      type: x,
      persistent: i.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: d
    }, p = i.maxNotices ?? $e;
    if (R.value.length >= p) {
      const y = R.value.findIndex((l) => !l.persistent);
      if (y !== -1)
        R.value.splice(y, 1);
      else if (!f.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), f.id;
    }
    return R.value.push(f), !f.persistent && i.timeout !== 0 && setTimeout(() => {
      v(f.id);
    }, i.timeout || 5e3), f.id;
  }, v = (u) => {
    R.value.findIndex((T) => T.id === u) !== -1 && (R.value = R.value.filter((T) => T.id !== u));
  };
  return {
    notices: R,
    addNotice: a,
    dismissNotice: v
  };
}
const B = G(null), U = G(null), Fe = G(null), C = Y([]), g = Y([]), O = Y([]), M = Y([]), z = G([]), K = Y([]), D = G(null), ee = G(0), ce = G(null), Ge = {
  saw: B,
  activeStockId: U,
  jobId: Fe,
  shapeList: C,
  stockList: g,
  cutList: O,
  segmentList: M,
  offcuts: z,
  unusableShapes: K,
  metadata: D,
  currentCutIndex: ee
};
function ze() {
  const a = I(() => U.value ? j(U.value) : []), v = I(() => {
    var e;
    return !U.value || !((e = g.value) != null && e.length) ? null : J(U.value);
  }), u = I(() => {
    var s;
    if (!v.value || !((s = O.value) != null && s.length)) return [];
    const e = r(v.value.id);
    return ee.value = 0, e;
  }), x = I(() => {
    var e;
    return !v.value || !((e = M.value) != null && e.length) ? [] : t(U.value);
  }), T = I(() => {
    var e;
    return (e = g.value) != null && e.length ? c(g.value) : [];
  }), i = I(() => C.value.filter((e) => e.added)), d = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((s) => !s.added) : [];
  }), f = I(() => {
    var e;
    return (e = C.value) != null && e.length ? Ce(C.value) : [];
  }), p = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((s) => !s.duplicate) : [];
  }), y = I(() => p.value.filter((e) => e.added)), l = I(() => {
    var e;
    return (e = g.value) != null && e.length ? g.value.filter((s) => s.used && !s.duplicate) : [];
  }), k = I(() => l.value.filter((e) => e.used)), _ = I(() => {
    var e;
    return (e = O.value) != null && e.length ? u.value.reduce((s, n) => s + n.getArea(), 0) : 0;
  }), L = I(() => {
    var e;
    return !((e = g.value) != null && e.length) || !v.value ? 0 : v.value ? v.value.getArea() : 0;
  }), w = I(() => {
    var e;
    return !((e = C.value) != null && e.length) || !a.value ? 0 : a.value ? a.value.reduce((s, n) => s + n.getArea(), 0) : 0;
  }), m = I(() => {
    var e;
    return !((e = O.value) != null && e.length) || !v.value ? null : v.value.cutType;
  }), N = I(() => {
    var s;
    return (s = g.value) != null && s.length ? g.value.filter((n) => n.used && (n.stack === !1 || typeof n.stack == "number")) : [];
  }), b = I(() => {
    var e;
    return (e = g.value) != null && e.length ? xe(v.value, g.value) : 0;
  }), W = I(() => {
    var s;
    if (!((s = g.value) != null && s.length)) return 0;
    let e = L.value ? (_.value + w.value) / L.value : null;
    return e > 1 && (e = 1), e;
  }), V = () => {
    B.value = null, C.value.length = 0, g.value.length = 0, O.value.length = 0, M.value.length = 0, z.value.length = 0, K.value.length = 0;
  }, $ = () => {
    B.value = null, U.value = null, ce.value = null, D.value = null, C.value = [], g.value = [], O.value = [], M.value = [], z.value = [], ee.value = 0, K.value = [];
  }, h = (e, s) => {
    var n;
    e in this && ((n = this[e]) == null || n.sort(Ae[s]));
  }, A = (e) => {
    Z(e);
  }, P = () => {
    Z(C);
  }, F = () => {
    Z(g);
  }, E = () => {
    Z(z);
  }, X = (e) => {
    var s, n, q, oe;
    if (!((s = e == null ? void 0 : e.shapeList) != null && s.some((te) => te.added))) {
      $();
      return;
    }
    D.value = e.metadata, K.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (B.value = new he(
        e == null ? void 0 : e.saw,
        (n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType
      )), g.value = ve({
        saw: B.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), C.value = pe({
        shapeList: e.shapeList,
        stockList: g.value,
        preventAutoRotation: !0
      }), O.value = me({
        cutList: e.cutList,
        stockList: g.value
      }), M.value = ge({
        segmentList: e.segmentList,
        stockList: g.value
      }), z.value = Se({
        offcuts: e.offcuts,
        stockList: g.value,
        preventAutoRotation: !0
      }), U.value = ((oe = (q = c(g.value)) == null ? void 0 : q[0]) == null ? void 0 : oe.id) || null;
    } catch (te) {
      console.error("Error updating from result", te);
    }
  }, J = (e) => {
    var s;
    return (s = g.value) != null && s.length ? g.value.find((n) => n.id === e) : null;
  }, j = (e) => {
    var s;
    return (s = C.value) != null && s.length ? C.value.filter((n) => {
      var q;
      return (((q = n == null ? void 0 : n.stock) == null ? void 0 : q.id) ?? (n == null ? void 0 : n.stockId)) === e;
    }) : [];
  }, t = (e) => {
    var s;
    return (s = M.value) != null && s.length ? M.value.filter((n) => {
      var q;
      return (((q = n == null ? void 0 : n.stock) == null ? void 0 : q.id) ?? (n == null ? void 0 : n.stockId)) === e;
    }) : [];
  }, r = (e) => {
    var s;
    if ((s = O.value) != null && s.length)
      return O.value.filter((n) => {
        var q;
        return (((q = n == null ? void 0 : n.stock) == null ? void 0 : q.id) ?? (n == null ? void 0 : n.stockId)) === e;
      });
  }, c = (e) => e != null && e.length ? e.filter((s) => s.used === !0) : [];
  return {
    //all result items for convenience
    r: Ge,
    //state
    activeStockId: U,
    saw: B,
    shapeList: C,
    stockList: g,
    cutList: O,
    segmentList: M,
    offcuts: z,
    unusableShapes: K,
    currentCutIndex: ee,
    activeShape: ce,
    //computed
    addedShapes: i,
    activeShapes: a,
    unplacedShapes: d,
    uniqueShapes: p,
    uniqueAddedShapes: y,
    unplacedShapeTally: f,
    uniqueStock: l,
    uniqueUsedStock: k,
    activeStock: v,
    activeCuts: u,
    activeCutsArea: _,
    activeCutType: m,
    usedStock: T,
    stackedStock: N,
    activeStockArea: L,
    activeShapeArea: w,
    activeStockStackCount: b,
    activeTotalArea: W,
    activeSegments: x,
    //methods
    reset: V,
    clear: $,
    sortItems: h,
    update: A,
    updateShapes: P,
    updateStock: F,
    updateOffcuts: E,
    updateFromResult: X,
    getStock: J,
    getShapes: j,
    getSegments: t,
    getCuts: r,
    setActiveStockId: (e) => {
      ce.value = null, U.value = e;
    },
    //testing
    createTestData: () => {
      B.value = new he({
        bladeWidth: 1,
        stockType: "sheet",
        cutType: "guillotine",
        cutPreference: "l"
      }), g.value = ve({
        saw: B.value,
        stockList: [
          { id: "1.0", used: !0, l: 2440, w: 1220, q: 1 }
        ]
      }), C.value = pe({
        shapeList: [
          { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
          { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
        ],
        stockList: g.value,
        preventAutoRotation: !0
      }), M.value = ge({
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
      }), O.value = me({
        cutList: [
          { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 }
        ],
        stockList: g.value
      }), z.value = Se({
        offcuts: [
          { stockId: "1.0", id: "1", x: 501, y: 401, l: 400, w: 99, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 0 },
          { stockId: "1.0", id: "2", x: 902, y: 0, l: 1538, w: 500, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 1 },
          { stockId: "1.0", id: "3", x: 0, y: 501, l: 2440, w: 719, q: 1, duplicate: !1, trimmed: !1, offcut: !0, placementOrder: 2 }
        ],
        stockList: g.value,
        preventAutoRotation: !0
      }), D.value = {
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
const ye = G({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Oe() {
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
const { progress: H, reset: we } = Oe();
function Ve(a) {
  const v = "https://api.cutlistevo.com/";
  let u;
  const x = () => {
    u = Ee(v, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), u.on("connect", () => {
      var d, f, p;
      (d = a.refs) != null && d.connected && (a.refs.connected.value = !0), (p = (f = a.callbacks) == null ? void 0 : f.onConnect) == null || p.call(f);
    }), u.on("connect_error", (d) => {
      var f, p, y, l;
      (f = a.refs) != null && f.connected && (a.refs.connected.value = !1), (p = a.refs) != null && p.thinking && (a.refs.thinking.value = !1), (l = (y = a.callbacks) == null ? void 0 : y.onConnectError) == null || l.call(y, d);
    }), u.on("connect_timeout", (d) => {
      var f, p, y, l;
      (f = a.refs) != null && f.connected && (a.refs.connected.value = !1), (p = a.refs) != null && p.thinking && (a.refs.thinking.value = !1), (l = (y = a.callbacks) == null ? void 0 : y.onConnectError) == null || l.call(y, d);
    }), u.on("result", (d) => {
      var f, p;
      H.value.complete = !0, (p = (f = a.callbacks) == null ? void 0 : f.onResult) == null || p.call(f, d), u.disconnect();
    }), u.on("queued", () => {
      we(), H.value.queued = !0;
    }), u.on("started", () => {
      H.value.started = !0;
    }), u.on("progress", (d) => {
      var f;
      ((f = d == null ? void 0 : d.data) == null ? void 0 : f.message) === "result" ? H.value.resultCount++ : (H.value.stockCount = d.data.stockCount, H.value.shapeCount = d.data.shapeCount);
    }), u.on("user", (d) => {
      var f, p;
      (p = (f = a.callbacks) == null ? void 0 : f.onUser) == null || p.call(f, d);
    }), u.on("error", (d) => {
      var f, p, y;
      (f = a.refs) != null && f.thinking && (a.refs.thinking.value = !1), we(), (y = (p = a.callbacks) == null ? void 0 : p.onError) == null || y.call(p, d);
    });
  }, T = () => u == null ? void 0 : u.disconnect(), i = () => u == null ? void 0 : u.connect();
  return x(), {
    socket: u,
    connect: i,
    disconnect: T
  };
}
const Q = G({
  show: !1,
  content: "",
  type: "info",
  referenceEl: null
});
function je() {
  let a = null;
  const v = () => {
    Q.value.show = !1;
  }, u = (x) => {
    a && (clearTimeout(a), a = null), Q.value = { ...Q.value, ...x }, x.show && (a = setTimeout(() => {
      Q.value.show = !1, a = null;
    }, 3e3));
  };
  return Ie(() => Q.value.referenceEl, (x) => {
    x || (Q.value.show = !1);
  }), { tip: Q, hide: v, update: u };
}
const be = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Ue = (a) => be.includes(a);
function He(a, v) {
  const u = (l) => {
    var k;
    (k = v.log) == null || k.call(v, l);
  }, x = (l) => {
    var k;
    return (k = v.error) == null || k.call(v, l), { success: !1, error: l };
  }, T = () => {
    for (const l of be) i(l, 0);
  }, i = (l, k) => {
    const { inputs: _, elements: L, setInputValue: w, formatPrice: m } = v;
    if (isNaN(k)) throw new Error("Price must be a number");
    if (!Ue(l)) return;
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
    }[l];
    b != null && b.hidden && _[b.hidden] && (console.log("setting hidden price", b.hidden, k), w(b.hidden, k)), b != null && b.visible && L[b.visible] && (L[b.visible].innerText = m(k));
  }, d = (l) => {
    const { product: k, getCurrentVariationPrice: _, isQuantityPricing: L, enableAddToCart: w, setCartQuantity: m } = v;
    let N = (k == null ? void 0 : k.price) || _() || 0;
    typeof N == "string" && (N = parseFloat(N));
    const b = a.unit_system === "imperial" ? "feet" : "meters", V = {
      full_stock: (h) => (u(["calculating cost by full sheet"]), L() ? (m(h.metadata.totalUsedStock), 0) : h.metadata.totalStockCost),
      part_area: (h) => {
        u([`calculating cost by part area in square ${b}`]);
        const A = a.unit_system === "imperial" ? 144 : 1e6, P = h.metadata.totalPartArea / A, F = P * N;
        i("partArea", F), u([`part area in square ${b} is ${P} with price ${F}`]);
        let E = P;
        if (a != null && a.enable_offcut_pricing && (h != null && h.offcuts)) {
          const J = h == null ? void 0 : h.offcuts.reduce((t, r) => {
            const c = r.l >= r.w ? r.l : r.w, S = r.l >= r.w ? r.w : r.l;
            return c < a.offcut_min_length || S < a.offcut_min_width ? t + c * S : t;
          }, 0), j = J / A * N;
          i("offcutArea", j), u([`calculated sellable offcut area as ${J}, with price ${j}`]), E += J / A;
        }
        const X = E * N;
        if (u([`calculated total price as ${X}, `]), L())
          u([`setting cart quantity to ${E}`]), m(E, 2);
        else
          return X;
        return 0;
      },
      cut_length: (h) => {
        u([`calculating cost by cut length in  ${b}`]);
        const A = a.unit_system === "imperial" ? 12 : 1e3, P = h.metadata.totalCutLength / A;
        return m(P, 2), 0;
      },
      full_stock_plus_cut_length: (h) => {
        u(["calculating cost by full sheet plus cut length"]);
        let A = 0;
        L() ? m(h.metadata.totalUsedStock) : A = h.metadata.totalStockCost;
        const P = a.unit_system === "imperial" ? 12 : 1e3, E = h.metadata.totalCutLength / P * a.cut_length_price;
        return i("cutLength", E), A + E;
      },
      full_stock_plus_num_parts: (h) => {
        u(["calculating cost by full sheet plus number of parts"]);
        let A = 0;
        if (L())
          m(h.metadata.totalUsedStock);
        else {
          const F = h.metadata.totalStockCost;
          console.log("stockCost", F), i("stock", F), A = F;
        }
        const P = h.metadata.totalPartsProduced * a.per_part_price;
        return console.log("partPrice", P), i("perPart", P), A + P;
      },
      roll_length: (h) => {
        u([`calculating cost by roll length in ${b}`]);
        const A = a.unit_system === "imperial" ? 12 : 1e3, P = h.stock.reduce((F, E) => F + E.analysis.rollLength / A * qe({ v: E.cost }), 0);
        return i("rollLength", P), P;
      }
    }[a.pricing_strategy], $ = V(l);
    return w(), $;
  }, f = (l, k) => {
    const {
      isExtraEnabled: _,
      isMachiningEnabled: L,
      isSurchargeEnabled: w,
      inputType: m,
      getTotalBandingPrice: N,
      getTotalFinishPrice: b,
      getTotalMachiningPrice: W,
      getInputValue: V
    } = v;
    let $ = k;
    if (_("banding") && l.metadata.bandingLengthByType) {
      const h = N(l.metadata.bandingLengthByType);
      i("banding", h), $ += h;
    }
    if (_("finish") && l.metadata.finishAreaByType) {
      const h = b(l.metadata.finishAreaByType);
      i("finish", h), $ += h;
    }
    if (m.value === "formula") {
      const h = parseFloat(V("smartcut-hardware-price"));
      isNaN(h) || ($ += h);
    }
    if (L()) {
      const h = W(l);
      i("machining", h), $ += h;
    }
    if (w() && a.surcharge) {
      const h = a.surcharge_type === "per_sheet" ? parseFloat(a.surcharge.toString()) * l.metadata.totalUsedStock : parseFloat(a.surcharge.toString());
      i("surcharge", h), u(["added surcharge", h]), $ += h;
    }
    return $;
  }, p = (l) => {
    const { getInputValue: k, setInputValue: _ } = v, L = {
      "smartcut-job-id": l.jobId,
      "smartcut-dimensions": l.parts.map((w) => `${w.l}x${w.w} [${w.q}]`).join(", "),
      "smartcut-total-cut-length": l.metadata.totalCutLength,
      "smartcut-part-area": l.metadata.totalPartArea,
      "smartcut-total-cuts": l.metadata.totalCuts,
      "smartcut-total-parts": l.metadata.totalPartsProduced,
      "smartcut-machining": l.metadata.hasMachining
    };
    if (Object.entries(L).forEach(([w, m]) => {
      _(w, m);
    }), k("smartcut-stock-summary") !== void 0) {
      const w = l.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      _("smartcut-stock-summary", w);
    }
  };
  return {
    calculatePrice: async (l) => {
      T();
      const { isQuantityPricing: k, selectedVariation: _, setVariationPrice: L, setCartQuantity: w } = v;
      if (!(l != null && l.jobId))
        return x("No job ID provided");
      k() || w(1);
      let m = d(l);
      if (m = f(l, m), !k()) {
        if (!l.metadata.totalStockCost)
          return x("Total stock cost not returned for a multiple size product");
        u([`total cost is ${m}`]), i("custom", m);
      }
      return _.value && L(m), p(l), { success: !0, totalPrice: m };
    },
    resetPricing: T
  };
}
export {
  Qe as a,
  ze as b,
  je as c,
  Ve as d,
  Oe as e,
  He as f,
  Je as u
};
