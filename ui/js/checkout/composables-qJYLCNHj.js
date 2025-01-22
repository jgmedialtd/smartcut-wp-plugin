import { g as G, H as ae, h as I, G as Y, S as Z, i as Te } from "./vendor-vue-B39CQo2S.js";
import { r as de, I as fe, a as re, m as _e, S as Pe, b as Ce, t as he, c as ne, g as xe, u as pe, s as se, d as Ae, e as qe, f as Ee, h as ve, i as me, j as ge, k as Se, l as ke, n as ye, o as Ne } from "./components-BNbbxJb7.js";
import { p as we, l as $e } from "./vendor-UJdh33XB.js";
let le = null;
function Fe(r = { numberFormat: "decimal" }) {
  const p = G(null), u = () => {
    const t = localStorage.getItem("GlobalStore/inputStock"), a = localStorage.getItem("GlobalStore/inputShapes");
    let c = [], S = [];
    if (t)
      try {
        const o = JSON.parse(t);
        o.length && (c = o), localStorage.removeItem("GlobalStore/inputStock");
      } catch (o) {
        console.error("Error migrating stock data:", o);
      }
    if (a)
      try {
        const o = JSON.parse(a);
        o.length && (S = o), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (o) {
        console.error("Error migrating shapes data:", o);
      }
    return { migratedStock: c, migratedShapes: S };
  }, { migratedStock: x, migratedShapes: T } = u(), i = ae("inputs/inputStock", x, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return w(a, r.numberFormat);
      },
      write: (t) => {
        const a = t.filter((c) => !(c != null && c.multiEdit));
        return JSON.stringify(a);
      }
    },
    listenToStorageChanges: !1
  }), d = ae("inputs/inputShapes", T, {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return m(a, r.numberFormat);
      },
      write: (t) => {
        const a = t.filter((c) => !(c != null && c.multiEdit));
        return JSON.stringify(a);
      }
    },
    listenToStorageChanges: !1
  }), f = ae("groups/userGroups", [], {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return de(a);
      },
      write: (t) => JSON.stringify(t)
    },
    listenToStorageChanges: !1
  }), v = G(null), y = I(() => d.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), s = I(() => i.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), k = (t, a = "decimal") => {
    const c = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), S = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), o = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (c && _(c, a), S && L(S, a), o)
      try {
        f.value = de(o, d.value);
      } catch (e) {
        console.error("Error updating user groups:", e);
      }
  }, _ = (t, a = "decimal") => {
    try {
      d.value = m(t, a);
    } catch (c) {
      console.error("Error updating input shapes:", c);
    }
  }, L = (t, a = "decimal") => {
    try {
      i.value = w(t, a);
    } catch (c) {
      console.error("Error updating input stock:", c);
    }
  };
  function w(t, a = "decimal") {
    return t.map((c) => (delete c.id, new fe(c, a)));
  }
  function m(t, a = "decimal") {
    return !t || !(t != null && t.length) ? [] : t.map((c) => (delete c.id, new re(c, a)));
  }
  return {
    inputs: {
      inputStock: i,
      inputShapes: d,
      userGroups: f,
      currentInputShape: v,
      selectedSaw: p
    },
    inputStock: i,
    inputShapes: d,
    userGroups: f,
    currentInputShape: v,
    selectedSaw: p,
    totalInputShapes: y,
    totalInputStock: s,
    reset: () => {
      v.value = null;
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
      const a = t.material, c = t.t, S = i.value.filter((e) => e.material === a && e.t === c);
      return S.length ? xe(S) : "n";
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
      const a = [], c = [];
      for (let S = 0; S < d.value.length; S++) {
        const o = d.value[S];
        if (!(o != null && o.q)) continue;
        const e = ["name", "material", "notes"];
        for (const q of e)
          q in o && (o[q] = we.sanitize(o[q]));
        o.createId(S), o.applyPartTrim(t.trim, t.stockType);
        const l = { ...o };
        _e(l, t.orientationModel);
        const n = new Pe(l);
        n.trimDimensions(), t.minSpacing && t.maxDimension && (n.l <= t.maxDimension || n.w <= t.maxDimension) && (n.minSpacing = t.minSpacing), c.push(n), a.push(...n.issues);
      }
      return { shapeList: c, issues: a };
    },
    createStockList: (t) => {
      if (!i.value.length)
        return { stockList: [], issues: [] };
      const a = [], c = [];
      for (let S = 0; S < i.value.length; S++) {
        const o = i.value[S];
        if (!(o != null && o.q) && !o.autoAdd) continue;
        const e = ["name", "material", "notes"];
        for (const n of e)
          n in o && (o[n] = we.sanitize(o[n]));
        o.createId(S);
        const l = new Ce(o);
        l.saw = t, a.push(...l.issues), c.push(l);
      }
      return { stockList: c, issues: a };
    },
    validateInputStock: (t = null) => {
      var S;
      const a = [], c = he(i.value);
      if (!i.value.some((o) => o.autoAdd) && (!((S = i.value) != null && S.length) || !c))
        return new ne({
          message: "no_stock",
          index: [...i.value.keys()],
          field: [["q"]],
          issues: a
        }), a;
      for (const o of i.value)
        a.push(...o.validate(t));
      return a;
    },
    validateInputShapes: (t = null) => {
      const {
        saw: a = null,
        partTrim: c = 0,
        useInventory: S = !1
      } = t || {}, o = [];
      if (!d.value.length)
        return new ne({
          message: "no_parts",
          issues: o
        }), o;
      if (!he(d.value))
        return new ne({
          message: "no_parts",
          field: [["q"]],
          issues: o
        }), o;
      let l = 0;
      for (const n of d.value)
        o.push(...n.validate({
          inputStockList: i.value,
          index: l,
          stockType: a !== null ? a.stockType ?? null : null,
          partTrim: c,
          useInventory: S,
          saw: a
        })), l++;
      return o;
    },
    updateNumberFormat: (t) => {
      for (const a of d.value)
        pe(a, t);
      for (const a of i.value)
        pe(a, t);
    },
    createTestData: ({
      stock: t = !0,
      shapes: a = !0
    }) => {
      t && (i.value = [
        new fe({
          l: 2440,
          w: 1220,
          q: 1
        })
      ]), a && (d.value = [
        new re({
          l: 500,
          w: 500,
          q: 1
        }),
        new re({
          l: 400,
          w: 400,
          q: 1
        })
      ]);
    },
    removeStock: (t) => {
      if (i.value.length === 1) return;
      const a = i.value.findIndex((c) => c.listId === t);
      a !== -1 && i.value.splice(a, 1);
    },
    removeShape: (t) => {
      if (d.value.length === 1) return;
      const a = d.value.findIndex((c) => c.listId === t);
      a !== -1 && d.value.splice(a, 1);
    }
  };
}
function ze(r = { numberFormat: "decimal" }) {
  return le || (le = Fe(r)), le;
}
const R = G([]), Ge = 6;
function Ve() {
  const r = ({
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
      message: se(u),
      additional: T.length > 5 ? T.slice(0, 5).map((y) => se(y)).join("<br>") + "<br>..." : T.slice(0, 5).map((y) => se(y)).join("<br>"),
      type: x,
      persistent: i.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: d
    }, v = i.maxNotices ?? Ge;
    if (R.value.length >= v) {
      const y = R.value.findIndex((s) => !s.persistent);
      if (y !== -1)
        R.value.splice(y, 1);
      else if (!f.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), f.id;
    }
    return R.value.push(f), !f.persistent && i.timeout !== 0 && setTimeout(() => {
      p(f.id);
    }, i.timeout || 5e3), f.id;
  }, p = (u) => {
    R.value.findIndex((T) => T.id === u) !== -1 && (R.value = R.value.filter((T) => T.id !== u));
  };
  return {
    notices: R,
    addNotice: r,
    dismissNotice: p
  };
}
const B = G(null), U = G(null), Oe = G(null), C = Y([]), g = Y([]), O = Y([]), M = Y([]), z = G([]), K = Y([]), D = G(null), ee = G(0), ce = G(null), Ue = {
  saw: B,
  activeStockId: U,
  jobId: Oe,
  shapeList: C,
  stockList: g,
  cutList: O,
  segmentList: M,
  offcuts: z,
  unusableShapes: K,
  metadata: D,
  currentCutIndex: ee
};
function je() {
  const r = I(() => U.value ? j(U.value) : []), p = I(() => {
    var e;
    return !U.value || !((e = g.value) != null && e.length) ? null : J(U.value);
  }), u = I(() => {
    var l;
    if (!p.value || !((l = O.value) != null && l.length)) return [];
    const e = a(p.value.id);
    return ee.value = 0, e;
  }), x = I(() => {
    var e;
    return !p.value || !((e = M.value) != null && e.length) ? [] : t(U.value);
  }), T = I(() => {
    var e;
    return (e = g.value) != null && e.length ? c(g.value) : [];
  }), i = I(() => C.value.filter((e) => e.added)), d = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((l) => !l.added) : [];
  }), f = I(() => {
    var e;
    return (e = C.value) != null && e.length ? Ae(C.value) : [];
  }), v = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((l) => !l.duplicate) : [];
  }), y = I(() => v.value.filter((e) => e.added)), s = I(() => {
    var e;
    return (e = g.value) != null && e.length ? g.value.filter((l) => l.used && !l.duplicate) : [];
  }), k = I(() => s.value.filter((e) => e.used)), _ = I(() => {
    var e;
    return (e = O.value) != null && e.length ? u.value.reduce((l, n) => l + n.getArea(), 0) : 0;
  }), L = I(() => {
    var e;
    return !((e = g.value) != null && e.length) || !p.value ? 0 : p.value ? p.value.getArea() : 0;
  }), w = I(() => {
    var e;
    return !((e = C.value) != null && e.length) || !r.value ? 0 : r.value ? r.value.reduce((l, n) => l + n.getArea(), 0) : 0;
  }), m = I(() => {
    var e;
    return !((e = O.value) != null && e.length) || !p.value ? null : p.value.cutType;
  }), N = I(() => {
    var l;
    return (l = g.value) != null && l.length ? g.value.filter((n) => n.used && (n.stack === !1 || typeof n.stack == "number")) : [];
  }), b = I(() => {
    var e;
    return (e = g.value) != null && e.length ? qe(p.value, g.value) : 0;
  }), W = I(() => {
    var l;
    if (!((l = g.value) != null && l.length)) return 0;
    let e = L.value ? (_.value + w.value) / L.value : null;
    return e > 1 && (e = 1), e;
  }), V = () => {
    B.value = null, C.value.length = 0, g.value.length = 0, O.value.length = 0, M.value.length = 0, z.value.length = 0, K.value.length = 0;
  }, $ = () => {
    B.value = null, U.value = null, ce.value = null, D.value = null, C.value = [], g.value = [], O.value = [], M.value = [], z.value = [], ee.value = 0, K.value = [];
  }, h = (e, l) => {
    var n;
    e in this && ((n = this[e]) == null || n.sort(Ee[l]));
  }, A = (e) => {
    Z(e);
  }, P = () => {
    Z(C);
  }, F = () => {
    Z(g);
  }, E = () => {
    Z(z);
  }, X = (e) => {
    var l, n, q, oe, ie, ue;
    if (!((l = e == null ? void 0 : e.shapeList) != null && l.some((te) => te.added))) {
      $();
      return;
    }
    D.value = e.metadata, K.value = e.unusableShapes || [];
    try {
      e != null && e.saw && (B.value = new ve(
        e == null ? void 0 : e.saw,
        ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) || ((oe = (q = e.stockList) == null ? void 0 : q[0]) == null ? void 0 : oe.type)
      )), g.value = me({
        saw: B.value,
        stockList: e.stockList,
        removeScores: !0,
        preventAutoRotation: !0
      }), C.value = ge({
        shapeList: e.shapeList,
        stockList: g.value,
        preventAutoRotation: !0
      }), O.value = Se({
        cutList: e.cutList,
        stockList: g.value
      }), M.value = ke({
        segmentList: e.segmentList,
        stockList: g.value
      }), z.value = ye({
        offcuts: e.offcuts,
        stockList: g.value,
        preventAutoRotation: !0
      }), U.value = ((ue = (ie = c(g.value)) == null ? void 0 : ie[0]) == null ? void 0 : ue.id) || null;
    } catch (te) {
      console.error("Error updating from result", te);
    }
  }, J = (e) => {
    var l;
    return (l = g.value) != null && l.length ? g.value.find((n) => n.id === e) : null;
  }, j = (e) => {
    var l;
    return (l = C.value) != null && l.length ? C.value.filter((n) => {
      var q;
      return (((q = n == null ? void 0 : n.stock) == null ? void 0 : q.id) ?? (n == null ? void 0 : n.stockId)) === e;
    }) : [];
  }, t = (e) => {
    var l;
    return (l = M.value) != null && l.length ? M.value.filter((n) => {
      var q;
      return (((q = n == null ? void 0 : n.stock) == null ? void 0 : q.id) ?? (n == null ? void 0 : n.stockId)) === e;
    }) : [];
  }, a = (e) => {
    var l;
    if ((l = O.value) != null && l.length)
      return O.value.filter((n) => {
        var q;
        return (((q = n == null ? void 0 : n.stock) == null ? void 0 : q.id) ?? (n == null ? void 0 : n.stockId)) === e;
      });
  }, c = (e) => e != null && e.length ? e.filter((l) => l.used === !0) : [];
  return {
    //all result items for convenience
    r: Ue,
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
    activeShapes: r,
    unplacedShapes: d,
    uniqueShapes: v,
    uniqueAddedShapes: y,
    unplacedShapeTally: f,
    uniqueStock: s,
    uniqueUsedStock: k,
    activeStock: p,
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
    getCuts: a,
    setActiveStockId: (e) => {
      ce.value = null, U.value = e;
    },
    //testing
    createTestData: () => {
      B.value = new ve({
        bladeWidth: 1,
        stockType: "sheet",
        cutType: "guillotine",
        cutPreference: "l"
      }), g.value = me({
        saw: B.value,
        stockList: [
          { id: "1.0", used: !0, l: 2440, w: 1220, q: 1, type: "sheet" }
        ]
      }), C.value = ge({
        shapeList: [
          { id: "1.0", added: !0, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
          { id: "2.0", added: !0, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
        ],
        stockList: g.value,
        preventAutoRotation: !0
      }), M.value = ke({
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
        stockList: g.value
      }), O.value = Se({
        cutList: [
          { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: !1, guillotine: !0 },
          { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: !1, guillotine: !0 }
        ],
        stockList: g.value
      }), z.value = ye({
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
const be = G({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Me() {
  return {
    progress: be,
    reset: () => {
      be.value = {
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
const { progress: H, reset: Ie } = Me();
function He(r) {
  const p = "https://api.cutlistevo.com/";
  let u;
  const x = () => {
    u = $e(p, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), u.on("connect", () => {
      var d, f, v;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !0), (v = (f = r.callbacks) == null ? void 0 : f.onConnect) == null || v.call(f);
    }), u.on("connect_error", (d) => {
      var f, v, y, s;
      (f = r.refs) != null && f.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (s = (y = r.callbacks) == null ? void 0 : y.onConnectError) == null || s.call(y, d);
    }), u.on("connect_timeout", (d) => {
      var f, v, y, s;
      (f = r.refs) != null && f.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (s = (y = r.callbacks) == null ? void 0 : y.onConnectError) == null || s.call(y, d);
    }), u.on("result", (d) => {
      var f, v;
      H.value.complete = !0, (v = (f = r.callbacks) == null ? void 0 : f.onResult) == null || v.call(f, d), u.disconnect();
    }), u.on("queued", () => {
      Ie(), H.value.queued = !0;
    }), u.on("started", () => {
      H.value.started = !0;
    }), u.on("progress", (d) => {
      var f;
      ((f = d == null ? void 0 : d.data) == null ? void 0 : f.message) === "result" ? H.value.resultCount++ : (H.value.stockCount = d.data.stockCount, H.value.shapeCount = d.data.shapeCount);
    }), u.on("user", (d) => {
      var f, v;
      (v = (f = r.callbacks) == null ? void 0 : f.onUser) == null || v.call(f, d);
    }), u.on("error", (d) => {
      var f, v, y;
      (f = r.refs) != null && f.thinking && (r.refs.thinking.value = !1), Ie(), (y = (v = r.callbacks) == null ? void 0 : v.onError) == null || y.call(v, d);
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
function We() {
  let r = null;
  const p = () => {
    Q.value.show = !1;
  }, u = (x) => {
    r && (clearTimeout(r), r = null), Q.value = { ...Q.value, ...x }, x.show && (r = setTimeout(() => {
      Q.value.show = !1, r = null;
    }, 3e3));
  };
  return Te(() => Q.value.referenceEl, (x) => {
    x || (Q.value.show = !1);
  }), { tip: Q, hide: p, update: u };
}
const Le = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Re = (r) => Le.includes(r);
function Xe(r, p) {
  const u = (s) => {
    var k;
    (k = p.log) == null || k.call(p, s);
  }, x = (s) => {
    var k;
    return (k = p.error) == null || k.call(p, s), { success: !1, error: s };
  }, T = () => {
    for (const s of Le) i(s, 0);
  }, i = (s, k) => {
    const { inputs: _, elements: L, setInputValue: w, formatPrice: m } = p;
    if (isNaN(k)) throw new Error("Price must be a number");
    if (!Re(s)) return;
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
    }[s];
    b != null && b.hidden && _[b.hidden] && (console.log("setting hidden price", b.hidden, k), w(b.hidden, k)), b != null && b.visible && L[b.visible] && (L[b.visible].innerText = m(k));
  }, d = (s) => {
    const { product: k, getCurrentVariationPrice: _, isQuantityPricing: L, enableAddToCart: w, setCartQuantity: m } = p;
    let N = (k == null ? void 0 : k.price) || _() || 0;
    typeof N == "string" && (N = parseFloat(N));
    const b = r.unit_system === "imperial" ? "feet" : "meters", V = {
      full_stock: (h) => (u(["calculating cost by full sheet"]), L() ? (m(h.metadata.totalUsedStock), 0) : h.metadata.totalStockCost),
      part_area: (h) => {
        u([`calculating cost by part area in square ${b}`]);
        const A = r.unit_system === "imperial" ? 144 : 1e6, P = h.metadata.totalPartArea / A, F = P * N;
        i("partArea", F), u([`part area in square ${b} is ${P} with price ${F}`]);
        let E = P;
        if (r != null && r.enable_offcut_pricing && (h != null && h.offcuts)) {
          const J = h == null ? void 0 : h.offcuts.reduce((t, a) => {
            const c = a.l >= a.w ? a.l : a.w, S = a.l >= a.w ? a.w : a.l;
            return c < r.offcut_min_length || S < r.offcut_min_width ? t + c * S : t;
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
        const A = r.unit_system === "imperial" ? 12 : 1e3, P = h.metadata.totalCutLength / A;
        return m(P, 2), 0;
      },
      full_stock_plus_cut_length: (h) => {
        u(["calculating cost by full sheet plus cut length"]);
        let A = 0;
        L() ? m(h.metadata.totalUsedStock) : A = h.metadata.totalStockCost;
        const P = r.unit_system === "imperial" ? 12 : 1e3, E = h.metadata.totalCutLength / P * r.cut_length_price;
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
        const P = h.metadata.totalPartsProduced * r.per_part_price;
        return console.log("partPrice", P), i("perPart", P), A + P;
      },
      roll_length: (h) => {
        u([`calculating cost by roll length in ${b}`]);
        const A = r.unit_system === "imperial" ? 12 : 1e3, P = h.stock.reduce((F, E) => F + E.analysis.rollLength / A * Ne({ v: E.cost }), 0);
        return i("rollLength", P), P;
      }
    }[r.pricing_strategy], $ = V(s);
    return w(), $;
  }, f = (s, k) => {
    const {
      isExtraEnabled: _,
      isMachiningEnabled: L,
      isSurchargeEnabled: w,
      inputType: m,
      getTotalBandingPrice: N,
      getTotalFinishPrice: b,
      getTotalMachiningPrice: W,
      getInputValue: V
    } = p;
    let $ = k;
    if (_("banding") && s.metadata.bandingLengthByType) {
      const h = N(s.metadata.bandingLengthByType);
      i("banding", h), $ += h;
    }
    if (_("finish") && s.metadata.finishAreaByType) {
      const h = b(s.metadata.finishAreaByType);
      i("finish", h), $ += h;
    }
    if (m.value === "formula") {
      const h = parseFloat(V("smartcut-hardware-price"));
      isNaN(h) || ($ += h);
    }
    if (L()) {
      const h = W(s);
      i("machining", h), $ += h;
    }
    if (w() && r.surcharge) {
      const h = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * s.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      i("surcharge", h), u(["added surcharge", h]), $ += h;
    }
    return $;
  }, v = (s) => {
    const { getInputValue: k, setInputValue: _ } = p, L = {
      "smartcut-job-id": s.jobId,
      "smartcut-dimensions": s.parts.map((w) => `${w.l}x${w.w} [${w.q}]`).join(", "),
      "smartcut-total-cut-length": s.metadata.totalCutLength,
      "smartcut-part-area": s.metadata.totalPartArea,
      "smartcut-total-cuts": s.metadata.totalCuts,
      "smartcut-total-parts": s.metadata.totalPartsProduced,
      "smartcut-machining": s.metadata.hasMachining
    };
    if (Object.entries(L).forEach(([w, m]) => {
      _(w, m);
    }), k("smartcut-stock-summary") !== void 0) {
      const w = s.stock.map((m) => `${m.l}x${m.w}${m.t ? "x" + m.t : ""} [${m.q}]`).join(", ");
      _("smartcut-stock-summary", w);
    }
  };
  return {
    calculatePrice: async (s) => {
      T();
      const { isQuantityPricing: k, selectedVariation: _, setVariationPrice: L, setCartQuantity: w } = p;
      if (!(s != null && s.jobId))
        return x("No job ID provided");
      k() || w(1);
      let m = d(s);
      if (m = f(s, m), !k()) {
        if (!s.metadata.totalStockCost)
          return x("Total stock cost not returned for a multiple size product");
        u([`total cost is ${m}`]), i("custom", m);
      }
      return _.value && L(m), v(s), { success: !0, totalPrice: m };
    },
    resetPricing: T
  };
}
export {
  Ve as a,
  je as b,
  We as c,
  He as d,
  Me as e,
  Xe as f,
  ze as u
};
