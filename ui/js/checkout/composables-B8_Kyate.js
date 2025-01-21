import { g as G, H as ae, h as I, G as Y, S as Z, i as Te } from "./vendor-vue-B39CQo2S.js";
import { r as de, I as fe, a as re, m as _e, S as Pe, b as Ce, t as he, c as ne, g as xe, u as pe, s as se, d as Ae, e as qe, f as Ee, h as ve, i as me, j as ge, k as Se, l as ke, n as ye, o as Ne } from "./components-Br1QpxEG.js";
import { p as we, l as $e } from "./vendor-UJdh33XB.js";
let le = null;
function Fe(r = { numberFormat: "decimal" }) {
  const p = G(null), i = () => {
    const t = localStorage.getItem("GlobalStore/inputStock"), a = localStorage.getItem("GlobalStore/inputShapes");
    let c = [], S = [];
    if (t)
      try {
        const h = JSON.parse(t);
        h.length && (c = h), localStorage.removeItem("GlobalStore/inputStock");
      } catch (h) {
        console.error("Error migrating stock data:", h);
      }
    if (a)
      try {
        const h = JSON.parse(a);
        h.length && (S = h), localStorage.removeItem("GlobalStore/inputShapes");
      } catch (h) {
        console.error("Error migrating shapes data:", h);
      }
    return { migratedStock: c, migratedShapes: S };
  }, { migratedStock: x, migratedShapes: T } = i(), o = ae("inputs/inputStock", x, {
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
  }), u = ae("inputs/inputShapes", T, {
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
  }), d = ae("groups/userGroups", [], {
    serializer: {
      read: (t) => {
        const a = t ? JSON.parse(t) : [];
        return de(a);
      },
      write: (t) => JSON.stringify(t)
    },
    listenToStorageChanges: !1
  }), v = G(null), y = I(() => u.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), s = I(() => o.value.reduce((t, a) => a != null && a.q && a.q > 0 && !(a != null && a.multiEdit) ? t + a.q : t, 0)), k = (t, a = "decimal") => {
    const c = (t == null ? void 0 : t.parts) || (t == null ? void 0 : t.shapeList), S = (t == null ? void 0 : t.stock) || (t == null ? void 0 : t.stockList), h = (t == null ? void 0 : t.groups) || (t == null ? void 0 : t.userGroups);
    if (c && _(c, a), S && L(S, a), h)
      try {
        d.value = de(h, u.value);
      } catch (e) {
        console.error("Error updating user groups:", e);
      }
  }, _ = (t, a = "decimal") => {
    try {
      u.value = m(t, a);
    } catch (c) {
      console.error("Error updating input shapes:", c);
    }
  }, L = (t, a = "decimal") => {
    try {
      o.value = w(t, a);
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
      inputStock: o,
      inputShapes: u,
      userGroups: d,
      currentInputShape: v,
      selectedSaw: p
    },
    inputStock: o,
    inputShapes: u,
    userGroups: d,
    currentInputShape: v,
    selectedSaw: p,
    totalInputShapes: y,
    totalInputStock: s,
    reset: () => {
      v.value = null;
    },
    clear: () => {
      u.value = [], o.value = [], d.value = [];
    },
    clearIssues: () => {
      u.value.forEach((t) => t.issues = []), o.value.forEach((t) => t.issues = []);
    },
    updateInputs: k,
    updateInputShapes: _,
    updateInputStock: L,
    getShapeGrainSummary: (t) => {
      if (!o.value.length)
        return "n";
      const a = t.material, c = t.t, S = o.value.filter((e) => e.material === a && e.t === c);
      return S.length ? xe(S) : "n";
    },
    createShapeList: (t = {
      trim: 0,
      stockType: null,
      minSpacing: 0,
      maxDimension: null,
      orientationModel: 0
    }) => {
      if (!u.value.length)
        return { shapeList: [], issues: [] };
      const a = [], c = [];
      for (let S = 0; S < u.value.length; S++) {
        const h = u.value[S];
        if (!(h != null && h.q)) continue;
        const e = ["name", "material", "notes"];
        for (const q of e)
          q in h && (h[q] = we.sanitize(h[q]));
        h.createId(S), h.applyPartTrim(t.trim, t.stockType);
        const l = { ...h };
        _e(l, t.orientationModel);
        const n = new Pe(l);
        n.trimDimensions(), t.minSpacing && t.maxDimension && (n.l <= t.maxDimension || n.w <= t.maxDimension) && (n.minSpacing = t.minSpacing), c.push(n), a.push(...n.issues);
      }
      return { shapeList: c, issues: a };
    },
    createStockList: (t) => {
      if (!o.value.length)
        return { stockList: [], issues: [] };
      const a = [], c = [];
      for (let S = 0; S < o.value.length; S++) {
        const h = o.value[S];
        if (!(h != null && h.q) && !h.autoAdd) continue;
        const e = ["name", "material", "notes"];
        for (const n of e)
          n in h && (h[n] = we.sanitize(h[n]));
        h.createId(S);
        const l = new Ce(h);
        l.saw = t, a.push(...l.issues), c.push(l);
      }
      return { stockList: c, issues: a };
    },
    validateInputStock: () => {
      var c;
      const t = [], a = he(o.value);
      if (!o.value.some((S) => S.autoAdd) && (!((c = o.value) != null && c.length) || !a))
        return new ne({
          message: "no_stock",
          index: [...o.value.keys()],
          field: [["q"]],
          issues: t
        }), t;
      for (const S of o.value)
        t.push(...S.validate());
      return t;
    },
    validateInputShapes: (t = null) => {
      const {
        saw: a = null,
        partTrim: c = 0,
        useInventory: S = !1
      } = t || {}, h = [];
      if (!u.value.length)
        return new ne({
          message: "no_parts",
          issues: h
        }), h;
      if (!he(u.value))
        return new ne({
          message: "no_parts",
          field: [["q"]],
          issues: h
        }), h;
      let l = 0;
      for (const n of u.value)
        h.push(...n.validate({
          inputStockList: o.value,
          index: l,
          stockType: a !== null ? a.stockType ?? null : null,
          partTrim: c,
          useInventory: S
        })), l++;
      return h;
    },
    updateNumberFormat: (t) => {
      for (const a of u.value)
        pe(a, t);
      for (const a of o.value)
        pe(a, t);
    },
    createTestData: ({
      stock: t = !0,
      shapes: a = !0
    }) => {
      t && (o.value = [
        new fe({
          l: 2440,
          w: 1220,
          q: 1
        })
      ]), a && (u.value = [
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
      if (o.value.length === 1) return;
      const a = o.value.findIndex((c) => c.listId === t);
      a !== -1 && o.value.splice(a, 1);
    },
    removeShape: (t) => {
      if (u.value.length === 1) return;
      const a = u.value.findIndex((c) => c.listId === t);
      a !== -1 && u.value.splice(a, 1);
    }
  };
}
function ze(r = { numberFormat: "decimal" }) {
  return le || (le = Fe(r)), le;
}
const R = G([]), Ge = 6;
function Ve() {
  const r = ({
    message: i,
    type: x = "info",
    additional: T = [],
    options: o = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(T) || (console.warn("addNotice - additional must be an array"), T = []);
    const d = {
      id: crypto.randomUUID(),
      message: se(i),
      additional: T.length > 5 ? T.slice(0, 5).map((y) => se(y)).join("<br>") + "<br>..." : T.slice(0, 5).map((y) => se(y)).join("<br>"),
      type: x,
      persistent: o.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, v = o.maxNotices ?? Ge;
    if (R.value.length >= v) {
      const y = R.value.findIndex((s) => !s.persistent);
      if (y !== -1)
        R.value.splice(y, 1);
      else if (!d.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), d.id;
    }
    return R.value.push(d), !d.persistent && o.timeout !== 0 && setTimeout(() => {
      p(d.id);
    }, o.timeout || 5e3), d.id;
  }, p = (i) => {
    R.value.findIndex((T) => T.id === i) !== -1 && (R.value = R.value.filter((T) => T.id !== i));
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
  }), i = I(() => {
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
  }), o = I(() => C.value.filter((e) => e.added)), u = I(() => {
    var e;
    return (e = C.value) != null && e.length ? C.value.filter((l) => !l.added) : [];
  }), d = I(() => {
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
    return (e = O.value) != null && e.length ? i.value.reduce((l, n) => l + n.getArea(), 0) : 0;
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
  }, f = (e, l) => {
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
    addedShapes: o,
    activeShapes: r,
    unplacedShapes: u,
    uniqueShapes: v,
    uniqueAddedShapes: y,
    unplacedShapeTally: d,
    uniqueStock: s,
    uniqueUsedStock: k,
    activeStock: p,
    activeCuts: i,
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
    sortItems: f,
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
  let i;
  const x = () => {
    i = $e(p, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), i.on("connect", () => {
      var u, d, v;
      (u = r.refs) != null && u.connected && (r.refs.connected.value = !0), (v = (d = r.callbacks) == null ? void 0 : d.onConnect) == null || v.call(d);
    }), i.on("connect_error", (u) => {
      var d, v, y, s;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (s = (y = r.callbacks) == null ? void 0 : y.onConnectError) == null || s.call(y, u);
    }), i.on("connect_timeout", (u) => {
      var d, v, y, s;
      (d = r.refs) != null && d.connected && (r.refs.connected.value = !1), (v = r.refs) != null && v.thinking && (r.refs.thinking.value = !1), (s = (y = r.callbacks) == null ? void 0 : y.onConnectError) == null || s.call(y, u);
    }), i.on("result", (u) => {
      var d, v;
      H.value.complete = !0, (v = (d = r.callbacks) == null ? void 0 : d.onResult) == null || v.call(d, u), i.disconnect();
    }), i.on("queued", () => {
      Ie(), H.value.queued = !0;
    }), i.on("started", () => {
      H.value.started = !0;
    }), i.on("progress", (u) => {
      var d;
      ((d = u == null ? void 0 : u.data) == null ? void 0 : d.message) === "result" ? H.value.resultCount++ : (H.value.stockCount = u.data.stockCount, H.value.shapeCount = u.data.shapeCount);
    }), i.on("user", (u) => {
      var d, v;
      (v = (d = r.callbacks) == null ? void 0 : d.onUser) == null || v.call(d, u);
    }), i.on("error", (u) => {
      var d, v, y;
      (d = r.refs) != null && d.thinking && (r.refs.thinking.value = !1), Ie(), (y = (v = r.callbacks) == null ? void 0 : v.onError) == null || y.call(v, u);
    });
  }, T = () => i == null ? void 0 : i.disconnect(), o = () => i == null ? void 0 : i.connect();
  return x(), {
    socket: i,
    connect: o,
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
  }, i = (x) => {
    r && (clearTimeout(r), r = null), Q.value = { ...Q.value, ...x }, x.show && (r = setTimeout(() => {
      Q.value.show = !1, r = null;
    }, 3e3));
  };
  return Te(() => Q.value.referenceEl, (x) => {
    x || (Q.value.show = !1);
  }), { tip: Q, hide: p, update: i };
}
const Le = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Re = (r) => Le.includes(r);
function Xe(r, p) {
  const i = (s) => {
    var k;
    (k = p.log) == null || k.call(p, s);
  }, x = (s) => {
    var k;
    return (k = p.error) == null || k.call(p, s), { success: !1, error: s };
  }, T = () => {
    for (const s of Le) o(s, 0);
  }, o = (s, k) => {
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
  }, u = (s) => {
    const { product: k, getCurrentVariationPrice: _, isQuantityPricing: L, enableAddToCart: w, setCartQuantity: m } = p;
    let N = (k == null ? void 0 : k.price) || _() || 0;
    typeof N == "string" && (N = parseFloat(N));
    const b = r.unit_system === "imperial" ? "feet" : "meters", V = {
      full_stock: (f) => (i(["calculating cost by full sheet"]), L() ? (m(f.metadata.totalUsedStock), 0) : f.metadata.totalStockCost),
      part_area: (f) => {
        i([`calculating cost by part area in square ${b}`]);
        const A = r.unit_system === "imperial" ? 144 : 1e6, P = f.metadata.totalPartArea / A, F = P * N;
        o("partArea", F), i([`part area in square ${b} is ${P} with price ${F}`]);
        let E = P;
        if (r != null && r.enable_offcut_pricing && (f != null && f.offcuts)) {
          const J = f == null ? void 0 : f.offcuts.reduce((t, a) => {
            const c = a.l >= a.w ? a.l : a.w, S = a.l >= a.w ? a.w : a.l;
            return c < r.offcut_min_length || S < r.offcut_min_width ? t + c * S : t;
          }, 0), j = J / A * N;
          o("offcutArea", j), i([`calculated sellable offcut area as ${J}, with price ${j}`]), E += J / A;
        }
        const X = E * N;
        if (i([`calculated total price as ${X}, `]), L())
          i([`setting cart quantity to ${E}`]), m(E, 2);
        else
          return X;
        return 0;
      },
      cut_length: (f) => {
        i([`calculating cost by cut length in  ${b}`]);
        const A = r.unit_system === "imperial" ? 12 : 1e3, P = f.metadata.totalCutLength / A;
        return m(P, 2), 0;
      },
      full_stock_plus_cut_length: (f) => {
        i(["calculating cost by full sheet plus cut length"]);
        let A = 0;
        L() ? m(f.metadata.totalUsedStock) : A = f.metadata.totalStockCost;
        const P = r.unit_system === "imperial" ? 12 : 1e3, E = f.metadata.totalCutLength / P * r.cut_length_price;
        return o("cutLength", E), A + E;
      },
      full_stock_plus_num_parts: (f) => {
        i(["calculating cost by full sheet plus number of parts"]);
        let A = 0;
        if (L())
          m(f.metadata.totalUsedStock);
        else {
          const F = f.metadata.totalStockCost;
          console.log("stockCost", F), o("stock", F), A = F;
        }
        const P = f.metadata.totalPartsProduced * r.per_part_price;
        return console.log("partPrice", P), o("perPart", P), A + P;
      },
      roll_length: (f) => {
        i([`calculating cost by roll length in ${b}`]);
        const A = r.unit_system === "imperial" ? 12 : 1e3, P = f.stock.reduce((F, E) => F + E.analysis.rollLength / A * Ne({ v: E.cost }), 0);
        return o("rollLength", P), P;
      }
    }[r.pricing_strategy], $ = V(s);
    return w(), $;
  }, d = (s, k) => {
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
      const f = N(s.metadata.bandingLengthByType);
      o("banding", f), $ += f;
    }
    if (_("finish") && s.metadata.finishAreaByType) {
      const f = b(s.metadata.finishAreaByType);
      o("finish", f), $ += f;
    }
    if (m.value === "formula") {
      const f = parseFloat(V("smartcut-hardware-price"));
      isNaN(f) || ($ += f);
    }
    if (L()) {
      const f = W(s);
      o("machining", f), $ += f;
    }
    if (w() && r.surcharge) {
      const f = r.surcharge_type === "per_sheet" ? parseFloat(r.surcharge.toString()) * s.metadata.totalUsedStock : parseFloat(r.surcharge.toString());
      o("surcharge", f), i(["added surcharge", f]), $ += f;
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
      let m = u(s);
      if (m = d(s, m), !k()) {
        if (!s.metadata.totalStockCost)
          return x("Total stock cost not returned for a multiple size product");
        i([`total cost is ${m}`]), o("custom", m);
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
