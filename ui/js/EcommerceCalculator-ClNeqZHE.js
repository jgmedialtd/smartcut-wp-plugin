import { g as U, w as Ke, k as Ut, c as F, l as nt, q as gs, n as Et, d as dt, v as Js, h as on, x as za, o as I, e as _, j as z, y as Ze, u as E, b as Fe, z as ja, f as se, t as he, T as Ka, A as Ln, B as _t, F as vt, C as Ft, r as qo, D as Gt, E as Xt, G as Wt, H as zt, I as Ha, J as Za, K as Qs, i as lt, L as Qn, M as Ys, N as jo, a as qt, O as Uo, P as jt, s as Wn, Q as Go, R as nn } from "./vendor-vue-QD0FJS8o.js";
import { bh as He, bi as In, aF as Wo, b6 as Xs, bj as zo, bk as zn, bl as el, bm as tl, bn as nl, bo as Ko, bp as Ho, bq as On, br as Lt, bs as Zo, bt as Jo, bu as Qo, bv as Oi, bw as ha, bx as Yo, by as ci, bz as Xo, bA as xn, bB as hs, bC as Fa, b4 as jn, b5 as sa, q as va, b3 as hn, p as ba, o as Zn, I as Vt, bD as la, aJ as er, bE as vs, bF as bs, aB as ge, x as oa, bG as tr, bH as Ma, aY as ra, bI as ua, a$ as ca, be as da, bJ as ys, bK as ks, bL as nr, s as ws, bM as ar, P as ir, aD as sr, bN as lr, bb as Vi, bO as or, bP as al, aq as gt, bQ as Ss, aC as Ii, bR as rr, Z as ur, aE as cr, S as xs, v as dr, aX as fr, bS as pr, bT as mr, bU as mn, bV as gr, bW as Ps, bX as Bi, bY as Ri, bZ as hr, b_ as Li, b$ as vr, a_ as br, c0 as Cs, c1 as yr, c2 as kr, c3 as wr, c4 as Sr, c5 as xr, c6 as il, c7 as Pr, c8 as Cr, c9 as di, ca as Or, cb as Ir, cc as sl, cd as Lr, ce as Er, cf as Fr, cg as Ar, ch as Tr, ci as Nr, cj as $r, ck as Ei, cl as Mr, cm as Dr, cn as _r, co as Vr, cp as Br, cq as Kn, cr as fi, cs as Rr, bf as Yt, ct as Os, cu as Is, cv as pi, cw as mi, ba as Ls, bg as Es, cx as qr, cy as jr, cz as gi, cA as Ur } from "./result.zod-B0BoTcpc.js";
import { s as hi, t as ll, u as Gr, l as vi, e as Wr } from "./i18n-B1ErfgJE.js";
import { J as ya, P as Aa, o as ee, l as ve, n as j, k as w, Y as Fs, I as ln, S as Hn, $ as zr, h as xe, i as rn, E as at, j as ze, Q as As, T as Kr, a0 as Hr, a1 as Ts, a2 as Zr, H as Ta, U as bi, V as yi, W as ki, a3 as Jr, D as De } from "./vendor-BnSUeZfc.js";
import { o as ol, f as rl, s as ul, a as cl, d as Qr } from "./vendor-floating-ui-CCq0hEoe.js";
import { _ as Ht } from "./Launch-NSW_K3VG.js";
import { t as Ee } from "./i18n-Dj6izb6_.js";
import { b as Fi } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-DIDhOEvY.js";
function Yr(e, n = "cc") {
  if (!e)
    return e;
  const t = {
    l1: "w2",
    l2: "w1",
    w1: "l1",
    w2: "l2"
  }, a = {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1"
  }, i = {
    a: "d",
    // bottom left -> bottom right
    b: "a",
    // top left -> bottom left
    c: "b",
    // top right -> top left
    d: "c"
    // bottom right -> top right
  }, l = {}, r = Object.keys(e).some((c) => ["x1", "x2", "y1", "y2"].includes(c)) ? a : t;
  if (n === "cc") {
    for (const [c, f] of Object.entries(r))
      c in e && (l[f] = e[c]);
    for (const [c, f] of Object.entries(i))
      c in e && (l[f] = e[c]);
  } else {
    for (const [c, f] of Object.entries(r))
      f in e && (l[c] = e[f]);
    for (const [c, f] of Object.entries(i))
      f in e && (l[c] = e[f]);
  }
  return l;
}
const dl = {
  /**
   * Model 0: Original behavior
   * - L column means larger dimension
   * - L and W order does not matter
   * - Orientation set by orientationLock
   */
  0: {
    name: "Original",
    lColumnMeaning: "Larger dimension (visual)",
    orientationBasedOnDimensions: !1,
    sidesLMatchShapeL: !1,
    affectedExtraTypes: [],
    calculateOrientationLock: () => "",
    defaultOrientationLock: () => ""
  },
  /**
   * Model 1: L = stock length dimension
   * - Orientation and banding controlled by L/W order
   * - Clicking orientation button allows free rotation
   */
  1: {
    name: "L = Stock Length",
    lColumnMeaning: "Stock length dimension",
    orientationBasedOnDimensions: !0,
    sidesLMatchShapeL: !0,
    affectedExtraTypes: ["banding", "planing"],
    calculateOrientationLock: (e, n, t) => n >= t ? e === "n" ? "l" : e === "y" ? "" : e : e === "n" ? "w" : e === "y" ? "" : e === "l" ? "w" : "l",
    defaultOrientationLock: () => ""
  },
  /**
   * Model 2: L = grain direction
   * - L field means direction of GRAIN
   * - Banding L values match L column values
   */
  2: {
    name: "L = Grain Direction",
    lColumnMeaning: "Grain direction",
    orientationBasedOnDimensions: !0,
    sidesLMatchShapeL: !0,
    affectedExtraTypes: ["banding", "planing"],
    calculateOrientationLock: (e, n, t) => e === "n" || e === "y" ? "" : n >= t ? e : e === "l" ? "w" : "l",
    defaultOrientationLock: (e) => e === "n" || e === "y" ? "" : "l"
  }
};
function Xr(e) {
  return e !== 0 && e !== 1 && e !== 2 ? !1 : dl[e].sidesLMatchShapeL;
}
function eu(e) {
  return e !== 0 && e !== 1 && e !== 2 ? [] : dl[e].affectedExtraTypes;
}
function Da(e = 0, n, t = null, a = null, i = null) {
  if (!He(t) && !In || a === "stock")
    return !1;
  let l, u;
  if (He(t) ? l = t.orientationLock : In(t) ? l = "l" : a === "shape" && (l = i), e === 0 || In(t))
    switch (n) {
      case "n":
        u = l === "w" || i === "w";
        break;
      case "l":
      case "y":
        u = l === "w" || i === "w";
        break;
      case "w":
        u = l === "l" || i === "l";
        break;
      default:
        u = i === "w";
    }
  else if (e === 1)
    if (t)
      u = t.w > t.l;
    else
      return !1;
  else if (e === 2) {
    if (!t)
      return !1;
    switch (n) {
      case "n":
        u = t.w > t.l;
        break;
      case "y":
      case "l":
        u = t.w > t.l;
        break;
      case "w":
        u = t.l >= t.w;
        break;
      default:
        u = !1;
    }
  }
  return u;
}
function tu(e, n, t = null, a = null, i = null) {
  if (!He(t) || a === "shape")
    return !1;
  let l;
  return e === 0 || e === 1 || e === 2 ? Da(e, n, t, a, i) ? "cc" : !1 : l;
}
function wg(e, n, t = "metric") {
  return n / (t === "imperial" ? 12 : 1e3) * e;
}
function Sg(e, n) {
  return n / 1e6 * e;
}
function nu(e, n = []) {
  if (!e?.length) return [];
  const t = e.map((a) => a && typeof a.getType == "function" ? a : Wo(a)).filter((a) => a instanceof Xs);
  return n.length && au(t, n), t;
}
function au(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
let _a = null;
if (Fi())
  try {
    _a = require("~/helpers/applicationSettings").applicationSettings;
  } catch (e) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", e);
  }
function Vn(e, n, t = {}) {
  const {
    serializer: a = {
      read: (l) => {
        try {
          return JSON.parse(l);
        } catch {
          return l;
        }
      },
      write: (l) => JSON.stringify(l)
    }
  } = t;
  if (!Fi()) {
    const u = U((() => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const r = localStorage.getItem(e);
          if (r)
            return a.read(r);
        }
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from localStorage:", r);
      }
      return n;
    })());
    return Ke(u, (r) => {
      try {
        if (typeof window < "u" && window.localStorage) {
          const c = a.write(r);
          localStorage.setItem(e, c);
        }
      } catch (c) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to localStorage:", c);
      }
    }, { deep: !0 }), u;
  }
  if (Fi()) {
    if (!_a)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), U(n);
    const u = U((() => {
      try {
        const r = _a.getString(e);
        if (r)
          return a.read(r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from ApplicationSettings:", r);
      }
      return n;
    })());
    return Ke(u, (r) => {
      try {
        const c = a.write(r);
        _a.setString(e, c);
      } catch (c) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to ApplicationSettings:", c);
      }
    }, { deep: !0 }), u;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", e, "- using in-memory fallback"), U(n);
}
function wi(e) {
  if (typeof e != "string" || !e || !(e.startsWith("errors.") || e.startsWith("fields.") || e.startsWith("extras.") || e.startsWith("woodwork.") || e.startsWith("validation."))) return e;
  const t = ll(e);
  return t && t !== e ? t : e;
}
function iu() {
  const e = Date.now(), n = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${e.toString(36)}-${n}-${t}`;
}
const Pn = U([]), su = 6;
function qi() {
  const e = ({
    message: t,
    type: a = "info",
    additional: i = [],
    options: l = {},
    action: u = () => {
    }
  }) => {
    Array.isArray(i) || (console.warn("addNotice - additional must be an array"), i = []);
    const r = {
      id: iu(),
      message: hi(wi(t)),
      additional: i.length > 5 ? i.slice(0, 5).map((f) => hi(wi(f))).join("<br>") + "<br>..." : i.slice(0, 5).map((f) => hi(wi(f))).join("<br>"),
      type: a,
      persistent: l.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, c = l.maxNotices ?? su;
    if (Pn.value.length >= c) {
      const f = Pn.value.findIndex((k) => !k.persistent);
      if (f !== -1)
        Pn.value.splice(f, 1);
      else if (!r.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), r.id;
    }
    return Pn.value.push(r), !r.persistent && l.timeout !== 0 && setTimeout(() => n(r.id), l.timeout || 6e3), r.id;
  }, n = (t) => {
    Pn.value.findIndex((i) => i.id === t) !== -1 && (Pn.value = Pn.value.filter((i) => i.id !== t));
  };
  return {
    notices: Pn,
    addNotice: e,
    dismissNotice: n
  };
}
const ji = Vn("cle-extras-config", {}), Ai = (e, n) => {
  ji.value[e] = n;
}, sn = (e) => ji.value[e] || null, lu = () => ji.value;
let Ns = !1;
const ou = () => {
  Ns || (zo({
    getExtrasConfig: sn,
    getAllExtrasConfigs: lu,
    setExtrasConfig: Ai
  }), Ns = !0);
}, ru = (e, n) => {
  const t = sn(e);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], i = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (i.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const l = (c) => t.options.length > 1 ? c.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, c) ? !0 : Object.keys(t.pricing).some((C) => C.startsWith(c + "|") || C === c) : c.split("|").every((k, C) => {
    if (C >= t.options.length) return !1;
    const L = t.options[C];
    return Array.isArray(L) && typeof L[0] == "string" && L.includes(k);
  }) : t.options.some((f) => Array.isArray(f) && typeof f[0] == "string" && f.includes(c)) : i.includes(c), u = /* @__PURE__ */ new Set();
  let r = 0;
  return n.forEach((c) => {
    if (!c.extras?.[e]) return;
    const f = c.extras[e].sides || {};
    Object.entries(f).forEach(([C, L]) => {
      typeof L == "string" && L && !l(L) && (u.add(L), f[C] = "", r++);
    });
    const k = c.extras[e].faces || {};
    Object.entries(k).forEach(([C, L]) => {
      typeof L == "string" && L && !l(L) && (u.add(L), k[C] = "", r++);
    });
  }), {
    cleanedCount: r,
    invalidOptions: Array.from(u)
  };
}, uu = (e) => {
  const {
    customNames: n,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: i,
    onCustomNameAdded: l,
    onCustomNameDeleted: u
  } = e, r = U(""), c = F(() => a && r.value?.trim()), f = F(() => !a || !n.value || n.value.length === 0 || n.value.length === 1 && n.value[0] === !0 ? !0 : n.value.filter(($) => typeof $ == "string").every(($) => t.value.includes($))), k = F(() => {
    const v = [];
    if (a && n.value && n.value.length > 0) {
      if (n.value.length === 1 && n.value[0] === !0)
        return v;
      const G = [...n.value.filter((B) => typeof B == "string")].sort(), pe = new Set(t.value ?? []), R = G.filter((B) => !pe.has(B));
      v.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), R.length > 1 && v.push({
        id: "delete-all-custom-names",
        label: "Delete all",
        icon: ["fass", "trash"],
        class: "del"
      }), G.forEach((B) => {
        const me = pe.has(B);
        v.push({
          id: `delete-${B}`,
          label: me ? `"${B}" (in use)` : `Delete "${B}"`,
          icon: ["fass", "trash"],
          class: "del",
          disabled: me
        });
      });
    }
    return v;
  }), C = () => {
    const v = r.value?.trim();
    if (!v) return;
    if (i("", 0).map((G) => G.value).includes(v)) {
      r.value = "";
      return;
    }
    l(v), r.value = "";
  }, L = (v) => {
    const $ = v.item || v;
    if ($.id === "delete-all-custom-names") {
      n.value.filter((G) => typeof G == "string").filter((G) => !(t.value?.includes(G) ?? !1)).forEach((G) => u(G));
      return;
    }
    if ($.id?.startsWith("delete-")) {
      const G = $.id.replace("delete-", "");
      if (t.value?.includes(G)) {
        console.warn(`Cannot delete ${e.extraType} type "${G}" - it is currently in use`);
        return;
      }
      u(G);
    }
  };
  return {
    newCustomName: r,
    canAddCustomName: Ut(c),
    isActionMenuDisabled: Ut(f),
    customNameActions: k,
    handleAddCustomName: C,
    handleCustomNameAction: L
  };
}, cu = (e) => {
  const {
    extraType: n,
    labels: t,
    shapeIndex: a,
    enablePricing: i,
    shouldShowAll: l,
    locations: u,
    locationGroups: r = U([]),
    shape: c = U(null),
    orientationModel: f = 0,
    getInputType: k,
    getInputConfig: C,
    getAllInputConfig: L,
    getInputConfigForLocation: v,
    canDelete: $,
    getLocationLabel: G,
    shouldShowDeleteButton: pe
  } = e, R = F(() => {
    const te = [], D = r.value && r.value.length > 0, W = /* @__PURE__ */ new Set();
    if (D && r.value.forEach((H) => {
      H.hideIndividualLocations && H.locations.forEach((ue) => W.add(ue));
    }), D && r.value.forEach((H) => te.push(H.id)), !D && l.value && te.push("all"), u.value && u.value.length > 0)
      te.push(...u.value.filter((H) => H !== "all" && !W.has(H)));
    else {
      const H = zn(n), ue = el(n), le = tl(n), ie = nl(n);
      !D && (ue && le && ie) && (Ko(n).length > 0 && te.push("faces"), Ho(n).length > 0 && te.push("sides")), te.push(...H.filter((Ge) => !W.has(Ge)));
    }
    let O = Array.from(new Set(te));
    if ((f === 1 || f === 2) && c.value && c.value.w > c.value.l) {
      const H = ["side.l1", "side.l2", "side.w1", "side.w2"], ue = O.map((le, ie) => ({ loc: le, i: ie })).filter((le) => H.includes(le.loc));
      if (ue.length > 0) {
        const le = ue[0].i, ie = ue.filter((Pe) => Pe.loc.includes(".w")).sort((Pe, ke) => Pe.loc.localeCompare(ke.loc)), Ue = ue.filter((Pe) => Pe.loc.includes(".l")).sort((Pe, ke) => Pe.loc.localeCompare(ke.loc)), Ge = [...ie.map((Pe) => Pe.loc), ...Ue.map((Pe) => Pe.loc)];
        O = O.filter((Pe) => !H.includes(Pe)), O.splice(le, 0, ...Ge);
      }
    }
    return O;
  }), B = F(() => `1fr${i ? " max-content" : ""}`), me = (te, D) => `${n}-${te}-${t[D]}-${D}-${a}`, Q = (te) => {
    const D = G(te);
    return `Delete ${n} for ${D}`;
  }, y = (te) => ({
    show: pe(te),
    enabled: $(te),
    ariaLabel: Q(te)
  }), M = (te, D) => k(te, D);
  return {
    renderLocations: Ut(R),
    gridStyle: Ut(B),
    getInputId: me,
    getDeleteAriaLabel: Q,
    getInputConfigForLocation: v,
    getDeleteConfig: y,
    getInputTypeForLocation: M,
    // Re-export the passed functions for consistency
    getInputType: k,
    getInputConfig: C,
    getAllInputConfig: L,
    canDelete: $,
    shouldShowDeleteButton: pe,
    getLocationLabel: G
  };
}, $s = /* @__PURE__ */ new Set(), du = (e) => {
  ou();
  const {
    shape: n,
    extraType: t,
    allOptions: a,
    labels: i,
    userFriendlyFieldMap: l,
    allowCustomNames: u,
    customNames: r = U([]),
    enablePricing: c = !1,
    pricing: f,
    displayNames: k,
    locations: C = U([]),
    locationGroups: L = U([]),
    orientationModel: v = 0,
    getAvailablePricingOptions: $,
    getPrice: G,
    findExtrasPrice: pe,
    formatPrice: R
  } = e, B = F(() => gs(a) ? a.value : a), me = F(() => gs(k) ? k.value : k), Q = () => {
    const p = sn(t), x = B.value?.length ? B.value : p?.options || [], q = p?.labels || i;
    On(n.value, t, x, q, r.value);
  };
  Q(), Ke(
    () => n.value?.extras?.[t],
    (p) => {
      if (p) {
        const x = p?.sides || {}, q = p?.options?.sides || {};
        let A = !1;
        for (const [J, de] of Object.entries(x))
          if (typeof de == "string" && de !== "" && !q[J]) {
            A = !0;
            break;
          }
        A && Q();
      }
    },
    { immediate: !1 }
  );
  const y = F(() => sn(t)), M = F(() => {
    const p = B.value?.length ? B.value : y.value?.options || [];
    if (p.length > 1)
      return "multiple";
    const q = (p[0] || []).filter((oe) => typeof oe == "string"), A = (r.value || []).filter((oe) => typeof oe == "string"), de = Array.from(/* @__PURE__ */ new Set([...q, ...A])).length;
    return de === 0 ? "boolean" : de === 1 ? "single" : "multiple";
  }), te = F(() => zn(t)), D = F(() => C.value && C.value.length > 0 ? C.value.filter((p) => p !== "all" && p !== "faces" && p !== "sides") : te.value), W = F(() => D.value.filter((p) => ha(p) === "face")), O = F(() => D.value.filter((p) => ha(p) === "side")), H = F(() => tl(t)), ue = F(() => nl(t)), le = F(() => el(t)), ie = () => {
    const p = B.value?.length ? B.value : y.value?.options;
    return !!p && p.length > 1;
  }, Ue = (p, x, q) => {
    const { singleOption: A = h(), operation: J } = q;
    switch (x) {
      case "boolean":
        return !!p;
      case "single":
        return A ? J === "process" || J === "set" ? p && A ? A : "" : p === A ? A : "" : !!p;
      case "multiple":
        return p || "";
      default:
        return p;
    }
  }, Ge = (p, x, q) => Ue(x, q, { operation: "process" }), Pe = (p, x, q, A, J, de) => {
    switch (de) {
      case "boolean":
        Fa(p, x, q, A, !!J);
        break;
      case "single": {
        const oe = h();
        Fa(p, x, q, A, J ? oe : "");
        break;
      }
      case "multiple":
        Fa(p, x, q, A, J || "");
        break;
    }
  }, ke = (p, x, q = {}) => {
    const A = q.singleOption || h();
    return q.allowCustomNames, Ue(p, x, {
      operation: "get",
      singleOption: A
    });
  }, Ye = (p, x, q, A) => {
    switch (A) {
      case "boolean":
        return !!p;
      case "single": {
        const J = h();
        if (J) {
          const de = x.map((Ae) => xn(n.value, t, Ae, q)), oe = de.every((Ae) => Ae === J || Ae === !0), _e = de.every((Ae) => !Ae || Ae === "");
          return oe ? J : _e ? "" : null;
        }
        return !!p;
      }
      case "multiple":
        return typeof p == "string" ? p : p || "";
      default:
        return p;
    }
  }, V = (p, x, q, A = !1) => {
    if (A)
      p.forEach((J) => ne(J, x, q));
    else {
      const J = i[x] || "", de = Ge(J, q, M.value);
      p.forEach((oe) => {
        Pe(n.value, t, oe, J, de, M.value);
      });
    }
  }, Z = (p, x) => {
    if (ie()) {
      const q = i[x] || "", A = p.map((_e) => {
        const Ae = xn(n.value, t, _e, q);
        return Ae === !0 ? N(x)[0] || "" : String(Ae || "");
      }), J = A[0] || "";
      return A.every((_e) => _e === J) ? J : null;
    } else {
      const q = i[x] || "";
      if (M.value === "single") {
        const J = h();
        if (J) {
          const de = p.map((Ae) => xn(n.value, t, Ae, q)), oe = de.every((Ae) => Ae === J || Ae === !0), _e = de.every((Ae) => !Ae || Ae === "");
          return oe ? J : _e ? "" : null;
        }
      }
      const A = hs(n.value, t, p, q, M.value);
      return M.value === "multiple" && A === !1 && p.every((de) => {
        const oe = xn(n.value, t, de, q, M.value);
        return oe === "" || oe === !1 || oe === null || oe === void 0;
      }) ? "" : A;
    }
  }, Se = (p) => {
    const { location: x, locationType: q = "single", optionIndex: A, stateValue: J, isAggregate: de = !1 } = p, oe = N(A), _e = de && x !== void 0 && Lt(x), Ae = _e && oe.some((Re) => typeof Re == "string" && Re.endsWith(`|${x}`)), Me = _e && (oe.length <= 1 || Ae), Le = de ? St(A, x && Lt(x) ? x : q) : St(A, x), Be = c && oe.length > 1 && Le.length === 0, ct = (() => {
      if (!Be || A === 0 || !x) return !1;
      for (let Re = 0; Re < A; Re++) {
        let xt = null;
        if (_e && typeof x == "string" ? xt = At(x, Re) : de ? x === "all" ? xt = Je(Re) : x === "faces" ? xt = je(Re) : x === "sides" && (xt = Ce(Re)) : xt = be(x, Re), !xt) return !0;
      }
      return !1;
    })(), ot = !Me && oe.length > 1 ? "select" : "checkbox";
    if (Be && x && !ct) {
      const Re = `${t}:${x}:${A}`;
      $s.has(Re) || ($s.add(Re), qi().addNotice({
        type: "warning",
        message: `No price set for ${t} at ${x}. This option is not currently available.`
      }));
    }
    const Qe = M.value === "multiple" && Le.length === 1 && c && A > 0;
    if (Qe && Le[0]) {
      if (de) {
        let Re = [];
        q === "all" ? Re = D.value : q === "faces" ? Re = W.value : q === "sides" ? Re = O.value : x && Lt(x) && (Re = it(x)), Re.forEach((xt) => {
          const Nn = be(xt, A);
          (!Nn || Nn !== Le[0]) && ne(xt, A, Le[0]);
        });
      } else if (x) {
        const Re = be(x, A);
        (!Re || Re !== Le[0]) && ne(x, A, Le[0]);
      }
    }
    let Ot = !1;
    const kn = sn(t);
    if (kn?.optionLocations && x && x !== "all" && ot === "checkbox" && oe.length === 1) {
      const Re = kn.optionLocations[oe[0]];
      Re && !Re.includes(x) && (Ot = !0);
    }
    const Rn = Be || M.value === "multiple" && (Le.length === 0 || Qe), ka = J !== void 0 ? J : x ? be(x, A) : null, wa = ot === "select" ? g(x || q, A) : void 0, ea = (Re) => (me.value ?? y.value?.displayNames)?.[Re] || Re, ta = ot === "checkbox" ? Me ? p.customLabel : oe.length === 1 ? ea(oe[0]) : void 0 : void 0;
    let wn, na;
    if (ot === "checkbox")
      if (Me && oe.length > 1) {
        const Re = oe.find((xt) => xt.endsWith(`|${x}`));
        Re && (wn = Re, na = "");
      } else oe.length === 1 && (wn = oe[0], na = "");
    return {
      inputType: ot,
      // Alias for backward compatibility
      type: ot,
      value: ka,
      options: wa,
      disabled: Rn,
      hidden: Ot,
      label: ta,
      indeterminate: ka === null && ot === "checkbox",
      trueValue: wn,
      falseValue: na
    };
  }, $e = (p, x, q) => Se({
    locationType: p,
    optionIndex: x,
    stateValue: q,
    isAggregate: !0
  }), ne = (p, x, q) => {
    const A = i[x] || "";
    if (ie()) {
      const J = en(p, x);
      let de;
      if (J === "checkbox") {
        const _e = N(x)[0];
        de = q ? _e : "";
      } else
        de = q || "";
      Fa(n.value, t, p, A, de);
    } else
      Pe(n.value, t, p, A, q, M.value);
  }, be = (p, x) => {
    const q = i[x] || "";
    if (ie()) {
      const A = xn(n.value, t, p, q);
      if (en(p, x) === "checkbox") {
        const oe = N(x)[0];
        return A === !0 || A === oe ? oe : "";
      } else
        return A || "";
    } else {
      const A = xn(n.value, t, p, q, M.value);
      return ke(A, M.value);
    }
  }, Te = (p, x) => {
    V(D.value, p, x, ie());
  }, Je = (p) => {
    if (ie()) {
      const x = i[p] || "", q = D.value.map((de) => {
        const oe = xn(n.value, t, de, x);
        return oe === !0 ? N(p)[0] || "" : String(oe || "");
      }), A = q[0] || "";
      return q.every((de) => de === A) ? A : null;
    } else {
      const x = i[p] || "", q = hs(n.value, t, D.value, x, M.value);
      return Ye(q, D.value, x, M.value);
    }
  }, wt = () => {
    ci(n.value, t, D.value, M.value), nt(n);
  }, Xe = (p) => p === "faces" ? {
    locations: W.value,
    isSupported: H.value
  } : {
    locations: O.value,
    isSupported: ue.value
  }, un = (p, x, q) => {
    const { locations: A, isSupported: J } = Xe(p);
    J && V(A, x, q, ie());
  }, Bt = (p, x) => {
    const { locations: q, isSupported: A } = Xe(p);
    return A ? Z(q, x) : null;
  }, yn = (p) => {
    const { locations: x, isSupported: q } = Xe(p);
    q && (ci(n.value, t, x, M.value), nt(n));
  }, rt = (p, x) => {
    const { isSupported: q } = Xe(p);
    if (!q) return { type: "checkbox", value: !1 };
    const A = Bt(p, x);
    return $e(p, x, A);
  }, Y = (p, x) => {
    un("faces", p, x);
  }, Oe = (p, x) => {
    un("sides", p, x);
  }, je = (p) => Bt("faces", p), Ce = (p) => Bt("sides", p), et = () => {
    yn("faces");
  }, ut = () => {
    yn("sides");
  }, ft = (p) => L.value.find((x) => x.id === p), it = (p) => {
    const x = ft(p);
    return x ? x.locations.filter((q) => D.value.includes(q)) : [];
  }, st = (p, x, q) => {
    const A = it(p);
    A.length !== 0 && (A.forEach((J) => ne(J, x, q)), nt(n));
  }, At = (p, x) => {
    const q = it(p);
    if (q.length === 0) return null;
    if (!ie()) {
      const de = N(x).find((oe) => oe.endsWith(`|${p}`));
      if (de) {
        const oe = i[x] || "", _e = q.map((Le) => xn(n.value, t, Le, oe)), Ae = _e.every((Le) => Le === de), Me = _e.some((Le) => Le === de);
        return Ae ? de : Me ? null : "";
      }
    }
    const A = Z(q, x);
    return !ie() && (A === null || A === !1 || A === "") ? "" : A;
  }, tt = (p) => {
    const x = it(p);
    x.length !== 0 && (ci(n.value, t, x, M.value), nt(n));
  }, cn = (p, x) => {
    const q = At(p, x), A = ft(p);
    return Se({
      location: p,
      optionIndex: x,
      stateValue: q,
      isAggregate: !0,
      customLabel: A?.label
    });
  }, dn = (p) => {
    Xo(n.value, t, p, M.value), nt(n);
  }, bt = (p) => p === "all" ? D.value.some((x) => !!be(x, 0)) : p === "faces" && H.value ? W.value.some((x) => !!be(x, 0)) : p === "sides" && ue.value ? O.value.some((x) => !!be(x, 0)) : Lt(p) ? it(p).some((q) => !!be(q, 0)) : D.value.includes(p) ? !!be(p, 0) : !1, Bn = (p) => {
    if (p === "all") return Ee("general.all");
    if (p === "faces") return `${Ee("general.all")} ${Ee("machining.face_other")}`;
    if (p === "sides") return `${Ee("general.all")} ${Ee("woodwork.edge_other")}`;
    if (Lt(p)) {
      const A = ft(p);
      if (A) return A.label;
    }
    if (p.startsWith("face.")) {
      const J = `faces.${p.replace("face.", "")}`;
      return Ee(J);
    }
    if (p.startsWith("side.")) {
      const A = !!(n.value && n.value.w > n.value.l);
      return Ee(Yo(p, v, A));
    }
    const x = `fields.${p}`, q = Ee(x);
    return q !== x ? q : l?.[p] ? l[p] : p;
  }, en = (p, x) => M.value === "boolean" ? "checkbox" : N(x).length > 1 ? "select" : "checkbox", En = (p, x) => Se({
    location: p,
    optionIndex: x,
    isAggregate: !1
  }), Rt = (p) => {
    const x = Je(p);
    return $e("all", p, x);
  }, pt = (p) => rt("faces", p), Zt = (p) => rt("sides", p), fn = (p, x) => p === "all" ? Rt(x) : p === "faces" ? pt(x) : p === "sides" ? Zt(x) : Lt(p) ? cn(p, x) : En(p, x), St = (p, x) => {
    const q = sn(t), J = (B.value?.length ? B.value : q?.options || [])[p];
    if (!J || J[0] === !0)
      return [];
    const de = x && typeof x == "string" && (x.startsWith("face.") || x.startsWith("side.")), oe = x && typeof x == "string" && Lt(x), _e = !de && (x === "all" || x === "faces" || x === "sides" || oe);
    if (Array.isArray(J) && J.length === 1 && typeof J[0] == "string" && !(c && $ && (de || _e) && p > 0))
      return J;
    if (c && $ && de) {
      const Le = [];
      if (p > 0)
        for (let Be = 0; Be < p; Be++) {
          const ct = be(x, Be);
          if (typeof ct == "string" && ct)
            Le.push(ct);
          else if (typeof ct == "boolean")
            Le.push(ct);
          else {
            const ot = sn(t), Qe = Oi(n.value, t, x);
            return Qe && typeof Qe == "object" && !Array.isArray(Qe) && Object.keys(Qe).length > 1 && ot?.options[p] ? ot.options[p] : [];
          }
        }
      return $(f, Le, p);
    }
    if (c && $ && _e) {
      const Le = [];
      if (p > 0)
        for (let Be = 0; Be < p; Be++) {
          let ct;
          if (x === "all" ? ct = Je(Be) : x === "faces" ? ct = je(Be) : x === "sides" ? ct = Ce(Be) : oe && typeof x == "string" && (ct = At(x, Be)), typeof ct == "string" && ct)
            Le.push(ct);
          else if (typeof ct == "boolean")
            Le.push(ct);
          else
            return [];
        }
      return $(f, Le, p);
    }
    const Ae = J, Me = u ? (r.value || []).filter((Le) => typeof Le == "string") : [];
    return [.../* @__PURE__ */ new Set([...Ae, ...Me])];
  }, g = (p, x) => {
    const q = sn(t), J = (B.value?.length ? B.value : q?.options)?.[x] || [], de = u && r.value ? r.value.filter((Qe) => typeof Qe == "string") : [];
    let oe = [.../* @__PURE__ */ new Set([...J, ...de])];
    q?.optionLocations && p && p !== "all" && (oe = oe.filter((Qe) => {
      const Ot = q.optionLocations[Qe];
      return Ot ? Ot.includes(p) : !0;
    }));
    const _e = St(x, p), Ae = new Set(_e), Me = me.value ?? q?.displayNames, Be = typeof p == "string" && (p.startsWith("face.") || p.startsWith("side.")) ? be(p, x) : null, ct = typeof Be == "string" ? Be : null;
    return oe.filter((Qe) => Ae.has(Qe) || Qe === ct).map((Qe) => ({
      value: Qe,
      label: Me?.[Qe] || Qe,
      disabled: !Ae.has(Qe)
    }));
  }, h = () => {
    const p = St(0);
    return p.length === 1 ? p[0] : void 0;
  }, b = (p) => {
    const x = St(p);
    return x.length === 1 ? x[0] : void 0;
  }, N = (p) => {
    const x = sn(t), q = B.value?.length ? B.value : x?.options;
    let A = [];
    if (q && q[p] && Array.isArray(q[p])) {
      const de = q[p];
      Array.isArray(de) && de.every((oe) => typeof oe == "string") && (A = de);
    }
    const J = u && r.value ? r.value.filter((de) => typeof de == "string") : [];
    return [.../* @__PURE__ */ new Set([...A, ...J])];
  }, X = (p, x = 0) => {
    if (p === "all" || p === "faces" || p === "sides")
      return "";
    if (Lt(p)) {
      const A = ft(p);
      return A?.price !== void 0 && At(p, x) ? R ? R(A.price) : A.price.toString() : "";
    }
    if (!c || !G)
      return "";
    if (!D.value.includes(p))
      return "N/A";
    const q = G(n.value, t, p, pe);
    return q ? R ? R(q) : q.toString() : "N/A";
  }, re = (p) => {
    if (!c || !G) return !1;
    if (typeof p == "string" && Lt(p)) {
      const x = ft(p);
      return typeof x?.price == "number" ? x.price : !1;
    }
    return G(n.value, t, p, pe);
  }, ce = F(() => D.value.length > 1), Ie = F(() => te.value.length > 1), we = () => M.value === "multiple", Ve = () => {
    const p = 1 + B.value.length, x = M.value === "multiple", q = c, A = p + (x ? 1 : 0) + (q ? 1 : 0);
    return {
      columns: A,
      style: `repeat(${A}, max-content)`
    };
  }, ht = (p) => p === "all" ? "all" : p === "faces" ? "faces" : p === "sides" ? "sides" : "individual", Tt = (p) => ha(p), Fn = (p) => {
    if (p === "all")
      return ce.value;
    if (Lt(p))
      return ft(p) ? it(p).length > 0 : !1;
    if (C.value && C.value.length > 0)
      return C.value.includes(p);
    const x = ht(p);
    return x === "all" ? ce.value : x === "faces" || x === "sides" ? x === "faces" && H.value && W.value.length > 0 || x === "sides" && ue.value && O.value.length > 0 ? Ie.value : !1 : te.value.includes(p);
  }, Qa = (p) => {
    Qo(p, t, r);
  }, Ya = (p) => {
    Jo([n.value], t, p, i);
  }, Yn = (p) => {
    Zo([n.value], t, p);
  }, An = (p, x, q) => {
    if (p === "all")
      Te(x, q);
    else if (p === "faces")
      Y(x, q);
    else if (p === "sides")
      Oe(x, q);
    else if (Lt(p)) {
      let J = q;
      if (!ie() && typeof q == "boolean") {
        const de = N(x), oe = de.find((_e) => _e.endsWith(`|${p}`));
        oe ? J = q ? oe : "" : de.length === 1 && (J = q ? de[0] : "");
      }
      if (!ie() && J) {
        const de = it(p), oe = new Set(de);
        L.value && (L.value.forEach((_e) => {
          _e.id !== p && it(_e.id).filter((Le) => !oe.has(Le)).forEach((Le) => {
            ne(Le, x, "");
          });
        }), nt(n));
      }
      st(p, x, J);
    } else
      ne(p, x, q), ie() || nt(n);
    const A = i.length;
    for (let J = x + 1; J < A; J++) {
      let de;
      if (p === "all" ? de = Je(J) : p === "faces" ? de = je(J) : p === "sides" ? de = Ce(J) : Lt(p) ? de = At(p, J) : de = be(p, J), !de)
        continue;
      const oe = St(J, p);
      let _e = !1;
      if (typeof de == "string" ? _e = oe.includes(de) : typeof de == "boolean" && de === !0 && (_e = oe.length > 0), !_e) {
        const Ae = en(p, J) === "checkbox" ? !1 : "";
        p === "all" ? Te(J, Ae) : p === "faces" ? Y(J, Ae) : p === "sides" ? Oe(J, Ae) : Lt(p) ? st(p, J, Ae) : ne(p, J, Ae);
      }
    }
  }, Xn = (p, x = !0) => x && !confirm(`Delete ${t} for ${Bn(p)}?`) ? !1 : (p === "all" ? wt() : p === "faces" ? et() : p === "sides" ? ut() : Lt(p) ? tt(p) : dn(p), !0), Tn = () => {
    const p = n.value[t], x = n.value[`${t}Options`];
    return !(!p || typeof p != "object" || !x || typeof x != "object" || H.value && (!("faces" in p) || !("faces" in x)) || ue.value && (!("sides" in p) || !("sides" in x)));
  }, pn = () => {
    const p = [], x = n.value[t], q = n.value[`${t}Options`];
    return !x || typeof x != "object" ? p.push(`Missing or invalid ${t} property in shape`) : (H.value && !("faces" in x) && p.push(`Missing faces property in ${t}`), ue.value && !("sides" in x) && p.push(`Missing sides property in ${t}`)), !q || typeof q != "object" ? p.push(`Missing or invalid ${t}Options property in shape`) : (H.value && !("faces" in q) && p.push(`Missing faces property in ${t}Options`), ue.value && !("sides" in q) && p.push(`Missing sides property in ${t}Options`)), p;
  };
  return {
    // State - provide raw computed refs for other composables
    mode: M,
    // Raw computed ref (not readonly wrapped)
    allLocations: Ut(D),
    faceLocations: Ut(W),
    sideLocations: Ut(O),
    shouldShowAll: ce,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: Ut(Ie),
    // Support flags
    supportsFaces: Ut(H),
    supportsSides: Ut(ue),
    supportsBoth: Ut(le),
    // Core operations
    setValue: ne,
    getValue: be,
    setAll: Te,
    getAll: Je,
    getAllState: Je,
    // Alias for backward compatibility
    deleteSingle: dn,
    deleteAll: wt,
    canDelete: bt,
    // Group-specific operations
    setAllFaces: Y,
    setAllSides: Oe,
    getAllFaces: je,
    getAllSides: Ce,
    deleteAllFaces: et,
    deleteAllSides: ut,
    // UI helpers
    getLocationLabel: Bn,
    getInputType: en,
    getInputConfig: En,
    getAllInputConfig: Rt,
    getAllFacesInputConfig: pt,
    getAllSidesInputConfig: Zt,
    getInputConfigForLocation: fn,
    getSelectOptions: g,
    getSingleOptionLabel: b,
    // Pricing
    getPriceDisplay: X,
    getCalculatedPrice: re,
    // Layout & rendering
    shouldShowDeleteButton: we,
    getGridConfig: Ve,
    getLocationGroup: ht,
    getLocationScope: Tt,
    isLocationVisible: Fn,
    // Options management
    getAvailableOptions: St,
    getSingleAvailableOption: h,
    // Initialization & migration
    initialize: Q,
    initializeExtra: Q,
    // Alias for backward compatibility
    initializeCustomNames: Qa,
    migrateToSingle: Ya,
    migrateToBoolean: Yn,
    // Event handlers
    handleInputChange: An,
    handleDelete: Xn,
    // Validation
    validateShape: Tn,
    getValidationErrors: pn,
    // Debug helpers (development only)
    getDebugInfo: (p, x) => ({
      mode: M.value,
      location: p,
      optionIndex: x,
      value: D.value.includes(p) ? be(p, x) : "N/A",
      inputType: en(p, x),
      canDelete: bt(p),
      allState: Je(x),
      availableOptions: St(x),
      locationGroup: ht(p),
      config: y.value,
      supportsFaces: H.value,
      supportsSides: ue.value,
      supportsBoth: le.value,
      ...H.value && {
        allFacesState: je(x)
      },
      ...ue.value && {
        allSidesState: Ce(x)
      },
      ...D.value.includes(p) && {
        locationScope: Tt(p)
      }
    })
  };
};
function Ti(e) {
  const n = {}, t = e, a = t.code;
  if (a === "invalid_type") {
    let i = "unknown";
    if ("input" in t)
      i = typeof t.input;
    else if ("received" in t) {
      const l = t.received;
      i = typeof l == "string" ? l : typeof l;
    }
    n.expected = t.expected, n.received = i;
  } else a === "too_small" ? (n.minimum = t.minimum, n.min = t.minimum, n.inclusive = t.inclusive) : a === "too_big" ? (n.maximum = t.maximum, n.max = t.maximum, n.inclusive = t.inclusive) : a === "invalid_string" && (n.validation = t.validation);
  if (a === "too_small" || a === "too_big" || a === "invalid_type") {
    const i = t.path, l = Array.isArray(i) && i.length > 0 ? String(i[i.length - 1]) : "field";
    n.field = `fields.${l}`;
  }
  return n;
}
function Ms(e) {
  return e.map((n) => {
    const t = n.path.length > 0 ? n.path.join(".") : "root", a = Ti(n), i = Ma(n.message, a);
    return `[${t}] ${i}`;
  });
}
function fa(e, n) {
  const t = e.safeParse(n);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function fu(e = {}) {
  try {
    let n = function(g) {
      if (!g || typeof g != "object") return g;
      const h = { ...g };
      if (delete h.issues, delete h.warnings, h.trim && typeof h.trim == "object") {
        const b = h.trim;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (h.trim = {
          l1: b.y1 ?? b.l1 ?? 0,
          l2: b.y2 ?? b.l2 ?? 0,
          w1: b.x1 ?? b.w1 ?? 0,
          w2: b.x2 ?? b.w2 ?? 0
        });
      }
      if (h.extras?.banding?.sides && typeof h.extras.banding.sides == "object") {
        const b = h.extras.banding.sides;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (h.extras.banding.sides = {
          l1: b.y1 ?? b.l1,
          l2: b.y2 ?? b.l2,
          w1: b.x1 ?? b.w1,
          w2: b.x2 ?? b.w2
        });
      }
      if (h.extras?.finish?.sides && typeof h.extras.finish.sides == "object") {
        const b = h.extras.finish.sides;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (h.extras.finish.sides = {
          l1: b.y1 ?? b.l1,
          l2: b.y2 ?? b.l2,
          w1: b.x1 ?? b.w1,
          w2: b.x2 ?? b.w2
        });
      }
      if (h.extras?.planing?.sides && typeof h.extras.planing.sides == "object") {
        const b = h.extras.planing.sides;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (h.extras.planing.sides = {
          l1: b.y1 ?? b.l1,
          l2: b.y2 ?? b.l2,
          w1: b.x1 ?? b.w1,
          w2: b.x2 ?? b.w2
        });
      }
      if (h.efficiencyOptions?.primaryCompression) {
        const b = h.efficiencyOptions.primaryCompression;
        b === "x" ? h.efficiencyOptions = {
          ...h.efficiencyOptions,
          primaryCompression: "l"
        } : b === "y" && (h.efficiencyOptions = {
          ...h.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const b in h)
        h[b] === null && delete h[b];
      return h;
    }, t = function(g, h) {
      if (!Array.isArray(g))
        return [];
      const b = [];
      for (let N = 0; N < g.length; N++) {
        const X = g[N], re = n(X);
        try {
          const ce = {
            ...re,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          X.autoId && (ce.autoId = X.autoId), delete ce.issues, delete ce.warnings;
          const Ie = new jn(ce, h);
          b.push(Ie);
        } catch (ce) {
          console.error(`Failed to create InputShape at index ${N}:`, ce);
        }
      }
      return b;
    }, a = function(g, h) {
      if (!Array.isArray(g)) return [];
      const b = [];
      for (let N = 0; N < g.length; N++) {
        const X = g[N], re = n(X);
        try {
          const ce = {
            ...re,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          X.autoId && (ce.autoId = X.autoId);
          const Ie = new sa(ce, h);
          b.push(Ie);
        } catch (ce) {
          console.error(`Failed to create InputStock at index ${N}:`, ce);
        }
      }
      return b;
    }, i = function(g) {
      const h = n(g), b = fa(va, h);
      if (b.success && b.data) {
        const N = {
          ...b.data,
          issues: [],
          warnings: []
        };
        return g?.autoId && (N.autoId = g.autoId), new hn(N);
      } else
        return console.error("Failed to parse input saw:", b.errors), new hn({});
    }, l = function(g, h) {
      return Array.isArray(g) ? h && h.length ? nu(g, h) : g.map((b) => new Xs(b)).filter(Boolean) : [];
    }, u = function(g = {}) {
      try {
        const N = { ...ya(
          (re) => {
            if (typeof re != "object" || re === null) return re;
            const ce = { ...re };
            for (const Ie in ce)
              ce[Ie] === null && delete ce[Ie];
            return ce;
          },
          ba
        ).parse(g), isNew: !0 }, X = new jn(N, ue);
        return X.createId(le.value.length), le.value.push(X), X;
      } catch (h) {
        return h instanceof Aa && (console.error("Shape validation failed:", h.issues), B("part", "Invalid shape data", h.issues)), null;
      }
    }, r = function(g = {}) {
      try {
        const b = { ...Zn.parse(g), isNew: !0 }, N = new sa(b, ue);
        return N.createId(ie.value.length), ie.value.push(N), N;
      } catch (h) {
        return h instanceof Aa && (console.error("Stock validation failed:", h.issues), B("stock", "Invalid stock data", h.issues)), null;
      }
    }, c = function(g) {
      try {
        const h = g.toData(), b = ba.parse(h);
        return new jn(b, ue);
      } catch (h) {
        return h instanceof Aa && (console.error("Shape clone validation failed:", h.issues), B("part", "Invalid shape data during cloning", h.issues)), null;
      }
    }, f = function(g) {
      try {
        const h = g.toData(), b = Zn.parse(h);
        return new sa(b, ue);
      } catch (h) {
        return h instanceof Aa && (console.error("Stock clone validation failed:", h.issues), B("stock", "Invalid stock data during cloning", h.issues)), null;
      }
    }, k = function(g, h) {
      const b = le.value.findIndex((ce) => ce.autoId === g);
      if (b === -1) return !1;
      const N = le.value[b], X = { ...N.toData(), ...h }, re = fa(ba, X);
      if (re.success && re.data) {
        if (N.update(re.data), !N.isNew) {
          const ce = Object.keys(h);
          N.validate({ fields: ce, index: b });
        }
        return !0;
      } else {
        const ce = re.errors ? Ms(re.errors) : [];
        console.error("Shape update validation failed:", ce);
        const Ie = re.errors || [], we = Object.keys(h);
        for (let Ve = N.issues.length - 1; Ve >= 0; Ve--)
          N.issues[Ve].field.some((ht) => we.includes(ht[0])) && N.issues.splice(Ve, 1);
        for (const Ve of Ie) {
          const ht = Ti(Ve), Tt = Array.isArray(Ve.path) ? Ve.path.map((Fn) => String(Fn)) : [];
          new Vt({
            item: N,
            category: ["part"],
            message: Ve.message,
            params: ht,
            field: Tt.length > 0 ? [Tt] : []
          });
        }
        return !1;
      }
    }, C = function(g, h) {
      const b = le.value.findIndex((X) => X.autoId === g);
      if (b === -1) return !1;
      const N = le.value[b];
      return N.validate({ fields: [h], index: b }), N.issues.length === 0;
    }, L = function(g, h) {
      const b = ie.value.find((re) => re.autoId === g);
      if (!b) return !1;
      const N = { ...b.toData(), ...h }, X = fa(Zn, N);
      if (X.success && X.data)
        return b.update(X.data), b.isNew || R(), !0;
      {
        const re = X.errors ? Ms(X.errors) : [];
        console.error("Stock update validation failed:", re);
        const ce = X.errors || [], Ie = Object.keys(h);
        for (let we = b.issues.length - 1; we >= 0; we--)
          b.issues[we].field.some((Ve) => Ie.includes(Ve[0])) && b.issues.splice(we, 1);
        for (const we of ce) {
          const Ve = Ti(we), ht = Array.isArray(we.path) ? we.path.map((Tt) => String(Tt)) : [];
          new Vt({
            item: b,
            category: ["stock"],
            message: we.message,
            params: Ve,
            field: ht.length > 0 ? [ht] : []
          });
        }
        return nt(ie), !1;
      }
    }, v = function(g, h) {
      const b = ie.value.findIndex((X) => X.autoId === g);
      if (b === -1) return !1;
      const N = ie.value[b];
      return N.validate({ fields: [h], index: b }), nt(ie), N.issues.length === 0;
    }, $ = function(g) {
      if (le.value.length === 1) return !1;
      const h = le.value.findIndex((b) => b.autoId === g);
      return h === -1 ? !1 : (le.value.splice(h, 1), !0);
    }, G = function(g) {
      if (ie.value.length === 1) return !1;
      const h = ie.value.findIndex((b) => b.autoId === g);
      return h === -1 ? !1 : (ie.value.splice(h, 1), !0);
    }, pe = function(g) {
      V.value = !0;
      const h = [];
      try {
        le.value.forEach((b) => b.issues.length = 0);
        for (let b = 0; b < le.value.length; b++) {
          const N = le.value[b];
          if (N.isNew || N.multiEdit)
            continue;
          const X = N.validate({
            inputStockList: ie.value,
            index: b,
            stockType: g?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: g
          });
          h.push(...X);
        }
        le.value.some((b) => Number(b.q) > 0) || new Vt({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: h
        });
      } finally {
        V.value = !1;
      }
      return Ye.value = h, h;
    }, R = function(g) {
      V.value = !0;
      const h = [];
      try {
        ie.value.forEach((b) => b.issues.length = 0);
        for (let b = 0; b < ie.value.length; b++) {
          const N = ie.value[b];
          if (N.multiEdit)
            continue;
          const X = N.validate({ saw: g }, b);
          h.push(...X);
        }
        ie.value.some((b) => Number(b.q) > 0 || b.autoAdd) || new Vt({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: h
        });
      } finally {
        V.value = !1;
      }
      return Ye.value = h, h;
    }, B = function(g, h, b) {
      new Vt({
        category: [g],
        message: h,
        issues: Ye.value
      }), b && console.log("Validation details:", b);
    }, me = function() {
      Ye.value = [], le.value.forEach((g) => g.issues.length = 0), ie.value.forEach((g) => g.issues.length = 0);
    }, Q = function(g = {}) {
      const h = [], b = [], N = g.inputShapesOverride ?? le.value;
      if (!N.length)
        return { shapeList: [], issues: [] };
      for (let X = 0; X < N.length; X++) {
        const re = N[X];
        if (!re.q) continue;
        re.createId(X), re.applyPartTrim(g.trim, g.stockType);
        const ce = re.toShape();
        h.push(ce), b.push(...ce.issues);
      }
      return { shapeList: h, issues: b };
    }, y = function(g) {
      if (!ie.value.length)
        return { stockList: [], issues: [] };
      const h = [], b = [];
      for (let N = 0; N < ie.value.length; N++) {
        const X = ie.value[N];
        if (!X.q && !X.autoAdd) continue;
        X.createId(N), X.saw = g;
        const re = X.toStock();
        h.push(re), b.push(...re.issues);
      }
      return { stockList: h, issues: b };
    }, M = function(g, h = ue) {
      const b = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (g.saw) {
        const N = fa(va, n(g.saw));
        if (N.success && N.data) {
          const X = { ...N.data };
          g.saw?.autoId && (X.autoId = g.saw.autoId), Ue.value = new hn(X), b.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", N.errors), b.saw.failed = !0;
      }
      if (g.shapes) {
        const N = t(g.shapes, h);
        b.shapes.success = N.length, b.shapes.failed = g.shapes.length - N.length, le.value = N, Ye.value = Ye.value.filter(
          (X) => !X.category.includes("part")
        );
      }
      if (g.stock) {
        const N = a(g.stock, h);
        b.stock.success = N.length, b.stock.failed = g.stock.length - N.length, ie.value = N, Ye.value = Ye.value.filter(
          (X) => !X.category.includes("stock")
        );
      }
      if (g.groups) {
        const N = l(g.groups);
        b.groups.success = N.length, b.groups.failed = g.groups.length - N.length, Ge.value = N;
      }
      return g.extrasOptions && (Pe.value = { ...g.extrasOptions }), g.materials && (ke.value = g.materials.map((N) => la.safeParse(N)).filter((N) => N.success).map((N) => N.data)), b;
    }, te = function() {
      return {
        shapes: le.value.map((g) => g.toData()),
        stock: ie.value.map((g) => g.toData()),
        inputUserGroups: Ge.value.map((g) => g.toData()),
        extrasOptions: Pe.value,
        materials: ke.value
      };
    }, D = function() {
      le.value = [], ie.value = [], Ge.value = [], me();
    }, W = function(g) {
      const h = { ...Ue.value.toData(), ...g }, b = fa(va, h);
      return b.success && b.data ? (Ue.value.update(b.data), !0) : (console.error("InputSaw update validation failed:", b.errors), B("saw", "Invalid saw update", b.errors), !1);
    }, O = function() {
      Ue.value = new hn({});
    }, H = function() {
      const g = Ue.value.validate();
      return Ye.value = [...Ye.value.filter((h) => h.category?.[0] !== "saw"), ...g], g;
    };
    const { numberFormat: ue = "decimal" } = e, le = Vn("inputs/inputShapes", [], {
      serializer: {
        read: (g) => {
          if (!g) return [];
          let h;
          try {
            h = JSON.parse(g);
          } catch (b) {
            return console.error("Failed to parse input shapes JSON:", b), [];
          }
          return t(h, ue);
        },
        write: (g) => {
          const b = g.filter((X) => !X?.multiEdit).map((X) => X.toData());
          return JSON.stringify(b);
        }
      },
      listenToStorageChanges: !1
    }), ie = Vn("inputs/inputStock", [], {
      serializer: {
        read: (g) => {
          if (!g) return [];
          let h;
          try {
            h = JSON.parse(g);
          } catch (N) {
            return console.error("  Failed to parse stock JSON:", N), [];
          }
          return a(h, ue);
        },
        write: (g) => {
          const b = g.filter((X) => !X?.multiEdit).map((X) => X.toData());
          return JSON.stringify(b);
        }
      },
      listenToStorageChanges: !1
    }), Ue = Vn("inputs/inputSaw", new hn({}), {
      serializer: {
        read: (g) => {
          if (!g) return new hn({});
          try {
            const h = JSON.parse(g);
            return i(h);
          } catch (h) {
            return console.error("  Failed to parse saw JSON:", h), new hn({});
          }
        },
        write: (g) => {
          if (!g)
            return JSON.stringify({});
          const h = g.toData();
          return JSON.stringify(h);
        }
      },
      listenToStorageChanges: !1
    }), Ge = Vn("inputs/inputUserGroups", [], {
      serializer: {
        read: (g) => l(g ? JSON.parse(g) : []),
        write: (g) => JSON.stringify(g.map((h) => h.toData()))
      }
    }), Pe = Vn("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (g) => {
          if (!g) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(g);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (g) => JSON.stringify(g)
      }
    }), ke = Vn("inputs/materials", [], {
      serializer: {
        read: (g) => {
          if (!g) return [];
          try {
            const h = JSON.parse(g);
            return Array.isArray(h) ? h.map((b) => la.safeParse(b)).filter((b) => b.success).map((b) => b.data) : [];
          } catch (h) {
            return console.error("Failed to parse materials JSON:", h), [];
          }
        },
        write: (g) => JSON.stringify(g)
      },
      listenToStorageChanges: !1
    }), Ye = U([]), V = U(!1);
    le.value.length === 0 && (le.value = [new jn({ isNew: !0 })]), ie.value.length === 0 && (ie.value = [new sa({ isNew: !0 })]);
    const Z = F(() => le.value.reduce((g, h) => {
      const b = Number(h?.q);
      return b && b > 0 && !h?.multiEdit ? g + b : g;
    }, 0)), Se = F(() => ie.value.reduce((g, h) => {
      const b = Number(h?.q);
      return b && b > 0 && !h?.multiEdit ? g + b : g;
    }, 0)), $e = F(() => le.value.reduce((g, h) => h?.multiEdit ? g : g + 1, 0)), ne = F(() => ie.value.reduce((g, h) => h?.multiEdit ? g : g + 1, 0)), be = F(() => Ye.value.length > 0), Te = () => [
      {
        name: "banding",
        type: "object",
        label: "fields.banding",
        fieldMap: "banding",
        w: "32px",
        required: !1
      },
      {
        name: "finish",
        type: "object",
        label: "fields.finish",
        fieldMap: "finish",
        w: "32px",
        required: !1
      },
      {
        name: "planing",
        type: "object",
        label: "fields.planing",
        fieldMap: "planing",
        w: "32px",
        required: !1
      },
      {
        name: "machining",
        type: "object",
        label: "fields.machining",
        fieldMap: "machining",
        w: "32px",
        required: !1
      },
      {
        name: "dxfPreview",
        type: "object",
        label: "fields.dxfPreview",
        fieldMap: "dxfPreview",
        w: "80px",
        required: !1
      }
    ], Je = U(null), wt = U(null), Xe = () => {
      Je.value = null;
    }, un = me, Bt = (g = null) => {
      const h = (g?.inputShapesOverride ?? le.value).filter((N) => !N.multiEdit), b = pe(g?.saw || void 0);
      if (h.length) {
        er(h, ie.value, g?.saw || Ue.value);
        const N = h.flatMap((X) => X.issues);
        return [...b, ...N];
      }
      return b;
    }, yn = async (g, h = "decimal") => {
      const b = g?.inputSaw, N = g?.inputShapes, X = g?.inputStock, re = g?.inputUserGroups, ce = M({
        saw: b,
        shapes: N,
        stock: X,
        groups: re,
        materials: g?.materials
      }, h);
      return nt(le), nt(ie), await Et(), ce;
    }, rt = (g, h = "decimal") => M({ shapes: g }, h).shapes.success > 0, Y = (g, h = "decimal") => M({ stock: g }, h).stock.success > 0, Oe = (g, h, b, N, X) => {
      h[0]?.length > 0 && (Pe.value[g] || (Pe.value[g] = { options: [] }), Pe.value[g].options = [...h[0]]), b && N && h.length > 0 ? Ai(g, {
        options: h,
        // Use all columns extracted from pricing
        labels: b,
        pricing: N,
        displayNames: X
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: b, pricingData: N, pricingOptionsLength: h.length });
    }, je = () => {
      if (!Object.values(Pe.value).some(
        (b) => b.options.length > 0
      )) return;
      const h = (b, N) => {
        const X = {};
        for (const re of N)
          X[re] = [...b];
        return X;
      };
      return {
        banding: Pe.value.banding.options.length > 0 ? {
          options: {
            sides: h(Pe.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: Pe.value.finish.options.length > 0 ? {
          options: {
            faces: h(Pe.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: Pe.value.planing.options.length > 0 ? {
          options: {
            sides: h(Pe.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: h(Pe.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, Ce = (g) => {
      if (!ie.value.length) return "n";
      const h = g.material, b = g.t, N = ie.value.filter((Ie) => Ie.material === h && Ie.t === b);
      if (!N.length)
        return "n";
      let X = !1, re = !1, ce = !1;
      for (const Ie of N)
        Ie.grain === "l" ? (X = !0, re = !0) : Ie.grain === "w" && (X = !0, ce = !0);
      return X ? re && ce ? "y" : re ? "l" : ce ? "w" : "n" : "n";
    }, et = ({ stock: g = !0, shapes: h = !0 } = {}) => {
      g && (ie.value = [new sa({ l: 2440, w: 1220, q: 1 })]), h && (le.value = [
        new jn({ l: 500, w: 500, q: 1 }),
        new jn({ l: 400, w: 400, q: 1 })
      ]);
    }, ut = (g) => {
      for (const h of le.value)
        vs(h, g);
      for (const h of ie.value)
        vs(h, g);
    };
    let ft = !1;
    Ke(le, (g) => {
      ft || !g.length || Et(() => {
        const h = ["banding", "finish", "planing"], b = [];
        h.forEach((N) => {
          const X = /* @__PURE__ */ new Set();
          if (g.forEach((re) => {
            const ce = re.extras?.[N];
            ce && (ce.faces && Object.values(ce.faces).forEach((Ie) => {
              typeof Ie == "string" && Ie.trim() && Ie !== "Y" && X.add(Ie);
            }), ce.sides && Object.values(ce.sides).forEach((Ie) => {
              typeof Ie == "string" && Ie.trim() && Ie !== "Y" && X.add(Ie);
            }));
          }), X.size > 0) {
            const re = sn(N);
            if (re) {
              const ce = re.options[0];
              if (Array.isArray(ce) && (ce.length === 0 || typeof ce[0] == "string")) {
                const Ie = new Set(ce), we = Array.from(X).filter((Ve) => !Ie.has(Ve));
                if (we.length > 0) {
                  const Ve = [...ce, ...we];
                  Ai(N, {
                    ...re,
                    options: [Ve, ...re.options.slice(1)]
                  });
                }
              }
            }
          }
        }), h.forEach((N) => {
          const X = ru(N, g);
          X.cleanedCount > 0 && b.push(
            `${N}: ${X.invalidOptions.join(", ")}`
          );
        }), b.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + b.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + b.join(`
`)
          );
        }, 500)), ft = !0;
      });
    }, { immediate: !0 });
    const it = 6, st = (g) => (g ?? "").trim().toUpperCase(), At = (g) => {
      if (g?.materialId)
        return ke.value.find((h) => h.id === g.materialId);
    }, tt = (g = {}) => {
      const h = la.parse({
        id: bs(),
        colorIndex: ke.value.length % it,
        ...g
      });
      return ke.value = [...ke.value, h], h;
    }, cn = (g, h) => {
      for (const b of [...ie.value, ...le.value]) {
        if (b.materialId !== g) continue;
        const N = b.t;
        if (N == null || N === "") continue;
        const X = ge({ v: N });
        X != null && h.some((re) => oa.equalTo(re, X)) && (b.t = null);
      }
    }, dn = (g, h) => {
      for (const b of ie.value)
        b.materialId === g && (b.grain = h);
    }, bt = (g, h) => {
      const b = ke.value.findIndex((we) => we.id === g);
      if (b === -1) return;
      const N = ke.value[b], X = la.parse({ ...N, ...h, id: g }), re = N.thicknesses.filter(
        (we) => !X.thicknesses.some((Ve) => oa.equalTo(Ve, we))
      ), ce = N.grain !== X.grain, Ie = [...ke.value];
      Ie[b] = X, ke.value = Ie, re.length && cn(g, re), ce && dn(g, X.grain), nt(ie), nt(le);
    }, Bn = (g) => {
      ke.value = ke.value.filter((h) => h.id !== g);
      for (const h of [...ie.value, ...le.value])
        h.materialId === g && (h.materialId = void 0, h.material = "", h.t = null);
      nt(ie), nt(le);
    }, en = (g, h, b = {}) => {
      const N = new Set(b.stock ?? []), X = new Set(b.shapes ?? []), re = g ? ke.value.find((we) => we.id === g) : void 0, ce = (we) => {
        if (!re) return null;
        if (h != null) return h;
        if (re.thicknesses.length === 1) return re.thicknesses[0];
        const Ve = we.t == null || we.t === "" ? null : ge({ v: we.t });
        return Ve != null && re.thicknesses.some((ht) => oa.equalTo(ht, Ve)) ? Ve : null;
      }, Ie = (we, Ve) => {
        re ? (we.materialId = re.id, we.material = st(re.name), we.t = ce(we), Ve && (we.grain = re.grain), we.isNew = !1) : (we.materialId = void 0, we.material = "", we.t = null);
      };
      for (const we of ie.value) N.has(we.autoId) && Ie(we, !0);
      for (const we of le.value) X.has(we.autoId) && Ie(we, !1);
      nt(ie), nt(le);
    }, En = () => {
      const g = [...ie.value, ...le.value].filter((ce) => !ce.multiEdit), h = /* @__PURE__ */ new Map();
      for (const ce of ke.value) h.set(st(ce.name), ce);
      let b = 0, N = ke.value.length;
      const X = [...ke.value];
      for (const ce of g) {
        const Ie = st(ce.material);
        if (!Ie) continue;
        let we = h.get(Ie);
        we || (we = la.parse({ id: bs(), name: Ie, colorIndex: N++ % it }), h.set(Ie, we), X.push(we), b++);
        const Ve = ce.t, ht = Ve == null || Ve === "" ? null : ge({ v: Ve });
        ht != null && ht > 0 && Number.isFinite(ht) && !we.thicknesses.some((Tt) => oa.equalTo(Tt, ht)) && (we.thicknesses = [...we.thicknesses, ht].sort((Tt, Fn) => Tt - Fn));
      }
      ke.value = X;
      let re = 0;
      for (const ce of g) {
        const Ie = st(ce.material), we = Ie ? h.get(Ie) : void 0;
        we && (ce.materialId !== we.id && (ce.materialId = we.id, re++), ce.material = we.name);
      }
      return nt(ie), nt(le), { created: b, mapped: re };
    };
    let Rt = !1;
    Ke(
      [ke, ie, le],
      () => {
        if (!Rt) {
          Rt = !0;
          try {
            const g = new Map(ke.value.map((b) => [b.id, b]));
            let h = !1;
            for (const b of [...ie.value, ...le.value]) {
              if (!b.materialId) continue;
              const N = g.get(b.materialId);
              if (!N) {
                b.materialId = void 0, h = !0;
                continue;
              }
              const X = st(N.name);
              b.material !== X && (b.material = X, h = !0);
              const re = b.t;
              if (re != null && re !== "") {
                const ce = ge({ v: re });
                ce != null && !N.thicknesses.some((Ie) => oa.equalTo(Ie, ce)) && (b.t = null, h = !0);
              }
            }
            h && (nt(ie), nt(le));
          } finally {
            Rt = !1;
          }
        }
      },
      { deep: !0 }
    ), Ke(
      [ie, le],
      () => {
        if (Rt) return;
        [...ie.value, ...le.value].some(
          (h) => !h.multiEdit && st(h.material) && !h.materialId
        ) && En();
      },
      { deep: !0, immediate: !0 }
    );
    let pt = null;
    return {
      // Bundled object
      inputs: {
        inputStock: ie,
        inputShapes: le,
        inputUserGroups: Ge,
        currentInputShape: Je,
        selectedSaw: wt,
        inputSaw: Ue,
        materials: ke
      },
      // State
      inputShapes: le,
      inputStock: ie,
      inputUserGroups: Ge,
      inputSaw: Ue,
      currentInputShape: Je,
      selectedSaw: wt,
      validationIssues: Ye,
      isValidating: V,
      // Computed
      totalInputShapes: Z,
      totalInputStock: Se,
      totalInputShapeLines: $e,
      totalInputStockLines: ne,
      hasValidationIssues: be,
      // Actions
      addInputShape: u,
      addInputStock: r,
      cloneInputShape: c,
      cloneInputStock: f,
      updateInputShape: k,
      updateInputStock: L,
      updateInputSaw: W,
      removeInputShape: $,
      removeInputStock: G,
      reset: Xe,
      resetInputSaw: O,
      clear: D,
      clearIssues: un,
      // Validation
      validateInputShapes: Bt,
      validateInputShapeField: C,
      validateInputStock: R,
      validateInputStockField: v,
      validateInputSaw: H,
      clearValidationIssues: me,
      // Conversion
      createShapeList: Q,
      createStockList: y,
      // Import/Export/Update
      importData: M,
      exportData: te,
      updateInputs: yn,
      importInputShapes: rt,
      importInputStock: Y,
      // Additional functions
      getShapeGrainSummary: Ce,
      updateNumberFormat: ut,
      createTestData: et,
      getSpecialShapeFields: Te,
      // Extras Options Management
      extrasOptions: Pe,
      setExtrasOptionsFromPricing: Oe,
      getCentralizedOptions: je,
      // Materials list (CLE)
      materials: ke,
      addMaterial: tt,
      updateMaterial: bt,
      removeMaterial: Bn,
      assignMaterialToRows: en,
      generateMaterialsFromInputs: En,
      materialFor: At,
      materialColorHex: tr,
      // Show part
      showPart: (g) => {
        pt && pt(g);
      },
      registerShowPart: (g) => {
        pt = g;
      }
    };
  } catch (n) {
    throw console.error("[createInputs] Fatal error during initialization:", n), n;
  }
}
let Si = null;
function fl(e = { numberFormat: "decimal" }) {
  try {
    return Si || (Si = fu(e)), Si;
  } catch (n) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", n), console.error("[useInputs] Error stack:", n?.stack), n;
  }
}
const pl = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, pu = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function Ni(e = !1) {
  return {
    l1: e,
    l2: e,
    w1: e,
    w2: e
  };
}
function mu(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e
  };
}
function Ua(e = !1) {
  return {
    a: e,
    b: e
  };
}
function gu(e = !1) {
  return {
    sides: Ni(e),
    faces: Ua(e)
  };
}
function hu(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e,
    a: e,
    b: e
  };
}
function vu(e) {
  const n = {};
  for (const [t, a] of Object.entries(pl))
    t in e && (n[a] = e[t]);
  return n;
}
function bu(e) {
  const n = {};
  for (const [t, a] of Object.entries(pu))
    t in e && (n[a] = e[t]);
  return n;
}
class Ds {
  /**
   * Migrate a single shape from old structure to new structure
   */
  static migrateShape(n) {
    this.migrateBanding(n), this.migrateFinish(n), this.migrateStorageFormat(n);
  }
  /**
   * Migrate multiple shapes at once
   */
  static migrateShapes(n) {
    n.forEach((t) => {
      const a = Object.keys(t);
      this.migrateShape(t);
      const i = Object.keys(t);
      a.length, i.length;
    });
  }
  /**
   * Migrate old side format (x1/x2/y1/y2) to new format (l1/l2/w1/w2).
   * Direction is the canonical SideMapper map (x1→w1, y1→l1) — the legacy
   * API x-axis is the WIDTH side. (This previously inverted it to x1→l1,
   * putting banding on the wrong edge — a real bug, not just duplication.)
   */
  static migrateSideNames(n) {
    const t = {};
    for (const [a, i] of Object.entries(n)) {
      const l = pl[a] ?? a;
      t[l] = i;
    }
    return t;
  }
  /**
   * Migrate banding from flat to nested structure
   * Also handles migration from old side names (x1/x2/y1/y2) to new names (l1/l2/w1/w2)
   */
  static migrateBanding(n) {
    const t = n.banding, a = "_banding" in n ? n._banding : void 0, i = He(n) ? n.bandingOptions : void 0;
    if (!t && !a && !i) return !1;
    if (t && t instanceof ra) {
      const k = t.sides;
      if (k && typeof k == "object" && ("x1" in k || "x2" in k || "y1" in k || "y2" in k)) {
        const L = this.migrateSideNames(k);
        return t.sides = L, !0;
      }
      return !1;
    }
    const l = {}, u = {}, r = { sides: {} };
    if (t && typeof t == "object") {
      const k = this.migrateSideNames(t);
      for (const [C, L] of Object.entries(k))
        ua.includes(C) && (l[C] = L);
    }
    if (a && typeof a == "object") {
      const k = this.migrateSideNames(a);
      for (const [C, L] of Object.entries(k))
        ua.includes(C) && (u[C] = L);
    }
    if (i && typeof i == "object") {
      i.all && (r.sides.all = i.all);
      for (const [k, C] of Object.entries(i))
        k !== "all" && ua.includes(k) && C && (r.sides[k] = C);
    }
    const c = new ra(Object.keys(l).length > 0 ? { sides: l } : {}), f = Object.keys(u).length > 0 ? new ra({ sides: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.banding = c : He(n) && (n.banding = c), f && "_banding" in n && (n._banding = f), He(n) && i && (n.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(n) {
    const t = n.finish, a = "_finish" in n ? n._finish : void 0, i = He(n) ? n.finishOptions : void 0;
    if (!t && !a && !i || t && t instanceof ca)
      return !1;
    const l = {}, u = {}, r = { faces: {} };
    if (t && typeof t == "object")
      for (const [k, C] of Object.entries(t))
        da.includes(k) && (l[k] = C);
    if (a && typeof a == "object")
      for (const [k, C] of Object.entries(a))
        da.includes(k) && (u[k] = C);
    if (i && typeof i == "object") {
      i.all && (r.faces.all = i.all);
      for (const [k, C] of Object.entries(i))
        k !== "all" && da.includes(k) && C && (r.faces[k] = C);
    }
    const c = new ca(Object.keys(l).length > 0 ? { faces: l } : {}), f = Object.keys(u).length > 0 ? new ca({ faces: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.finish = c : He(n) && (n.finish = c), f && "_finish" in n && (n._finish = f), He(n) && i && (n.finishOptions = r), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(n) {
    let t = !1;
    const a = "extras" in n && n.extras ? n.extras : n;
    if (a.banding) {
      const i = ys("banding");
      if (i && i.labels && i.labels.length > 1)
        for (const l of ua) {
          const u = `side.${l}`, r = Oi(n, "banding", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let c = !1;
            const f = { ...r };
            for (const k of i.labels)
              if (f[k] === !0) {
                const L = i.labels.indexOf(k);
                if (L !== -1 && i.options[L] && Array.isArray(i.options[L])) {
                  const v = i.options[L];
                  v.length === 1 && (f[k] = v[0], c = !0);
                }
              }
            c && (ks(n, "banding", u, f), t = !0);
          }
        }
    }
    if (a.finish) {
      const i = ys("finish");
      if (i && i.labels && i.labels.length > 1)
        for (const l of da) {
          const u = `face.${l}`, r = Oi(n, "finish", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let c = !1;
            const f = { ...r };
            for (const k of i.labels)
              if (f[k] === !0) {
                const L = i.labels.indexOf(k);
                if (L !== -1 && i.options[L] && Array.isArray(i.options[L])) {
                  const v = i.options[L];
                  v.length === 1 && (f[k] = v[0], c = !0);
                }
              }
            c && (ks(n, "finish", u, f), t = !0);
          }
        }
    }
    return t;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(n) {
    const t = n.banding;
    if (t && typeof t == "object" && !(t instanceof ra) && !("sides" in t) && !("faces" in t))
      return !0;
    if ("_banding" in n) {
      const i = n._banding;
      if (i && typeof i == "object" && !(i instanceof ra) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    const a = n.finish;
    if (a && typeof a == "object" && !(a instanceof ca) && !("sides" in a) && !("faces" in a))
      return !0;
    if ("_finish" in n) {
      const i = n._finish;
      if (i && typeof i == "object" && !(i instanceof ca) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    return !1;
  }
  /**
   * Validate that migrated data is in correct new format
   */
  static validateMigratedShape(n) {
    try {
      const t = n.banding;
      if (t) {
        if ("faces" in t && t.faces)
          throw new Error("Banding should not have faces property");
        if ("sides" in t && t.sides) {
          const i = Object.keys(t.sides).filter((l) => !ua.includes(l));
          if (i.length > 0)
            throw new Error(`Invalid side keys in banding: ${i.join(", ")}`);
        }
      }
      const a = n.finish;
      if (a) {
        if ("sides" in a && a.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in a && a.faces) {
          const i = Object.keys(a.faces).filter((l) => !da.includes(l));
          if (i.length > 0)
            throw new Error(`Invalid face keys in finish: ${i.join(", ")}`);
        }
      }
      return !0;
    } catch {
      return !1;
    }
  }
  /**
   * Get migration summary
   */
  static getMigrationSummary(n) {
    const t = {
      totalShapes: n.length,
      shapesNeedingMigration: 0,
      shapesWithBanding: 0,
      shapesWithFinish: 0,
      shapesAlreadyMigrated: 0
    };
    return n.forEach((a) => {
      this.needsMigration(a) ? t.shapesNeedingMigration++ : (a.banding || a.finish) && t.shapesAlreadyMigrated++, a.banding && t.shapesWithBanding++, a.finish && t.shapesWithFinish++;
    }), t;
  }
  /**
   * Create backup of shape before migration
   */
  static createBackup(n) {
    const t = {
      banding: n.banding ? JSON.parse(JSON.stringify(n.banding)) : void 0,
      finish: n.finish ? JSON.parse(JSON.stringify(n.finish)) : void 0
    };
    return "_banding" in n && n._banding && (t._banding = JSON.parse(JSON.stringify(n._banding))), "_finish" in n && n._finish && (t._finish = JSON.parse(JSON.stringify(n._finish))), He(n) && (n.bandingOptions && (t.bandingOptions = JSON.parse(JSON.stringify(n.bandingOptions))), n.finishOptions && (t.finishOptions = JSON.parse(JSON.stringify(n.finishOptions)))), t;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(n, t) {
    "extras" in n && n.extras ? (t.banding && (n.extras.banding = t.banding), t.finish && (n.extras.finish = t.finish)) : He(n) && (t.banding && (n.banding = t.banding), t.finish && (n.finish = t.finish)), t._banding && "_banding" in n && (n._banding = t._banding), t._finish && "_finish" in n && (n._finish = t._finish), He(n) && (t.bandingOptions && (n.bandingOptions = t.bandingOptions), t.finishOptions && (n.finishOptions = t.finishOptions));
  }
}
function Dt(e) {
  return e === 1 ? !0 : e === 0 ? !1 : e;
}
function vn(e) {
  if (!e) return e;
  const n = "x1" in e || "x2" in e || "y1" in e || "y2" in e, t = "l1" in e || "l2" in e || "w1" in e || "w2" in e;
  if (n && t && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", e), n) {
    const i = vu(e), l = {};
    return "l1" in i && (l.l1 = Dt(i.l1)), "l2" in i && (l.l2 = Dt(i.l2)), "w1" in i && (l.w1 = Dt(i.w1)), "w2" in i && (l.w2 = Dt(i.w2)), l;
  }
  const a = {};
  return "l1" in e && (a.l1 = Dt(e.l1)), "l2" in e && (a.l2 = Dt(e.l2)), "w1" in e && (a.w1 = Dt(e.w1)), "w2" in e && (a.w2 = Dt(e.w2)), Object.keys(a).length > 0 ? a : e;
}
function yu(e) {
  return !e || typeof e != "string" ? e : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[e] || e;
}
function Un(e) {
  return !e || !Array.isArray(e) ? e : e.map(yu);
}
function ku(e) {
  const n = {};
  if (e.banding && typeof e.banding == "object")
    for (const [t, a] of Object.entries(e.banding))
      a === !0 || a === !1 ? n[t] = a : typeof a == "number" ? n[t] = Dt(a) : typeof a == "string" && a.length > 0 && (n[t] = a);
  if (e.bandingType && typeof e.bandingType == "object")
    for (const [t, a] of Object.entries(e.bandingType))
      if (e.banding) {
        const i = n[t];
        (i === !0 || typeof i == "string" && i.length > 0) && (typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a)));
      } else
        typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a));
  return Object.keys(n).length > 0 ? n : void 0;
}
function $i(e) {
  return e && bu(e);
}
function wu(e) {
  e?.type && delete e.type, Su.call(this, e), xu.call(this, e), Pu.call(this, e), e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Mi(n));
}
function Su(e) {
  if (!e?.banding || typeof e.banding != "object") return;
  const n = Object.keys(e.banding);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing || {}
  }, e.bandingPricing && delete e.bandingPricing);
}
function xu(e) {
  if (!e?.finish || typeof e.finish != "object") return;
  const n = Object.keys(e.finish);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.finish = {
    labels: Object.keys(e.finish),
    pricing: e.finishPricing || {}
  }, e.finishPricing && delete e.finishPricing);
}
function Pu(e) {
  if (!e?.planing || typeof e.planing != "object") return;
  const n = Object.keys(e.planing);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.planing = {
    labels: Object.keys(e.planing),
    pricing: e.planingPricing || {}
  }, e.planingPricing && delete e.planingPricing);
}
function Mi(e) {
  !e || typeof e != "object" || (Ds.needsMigration(e) && Ds.migrateShape(e), e._banding && delete e._banding, e._finish && delete e._finish, e._bandingType && delete e._bandingType);
}
function ml(e) {
  if (e?.enable) return;
  e.enable = {};
  const n = {
    // Existing mappings
    showDiagram: { new: "diagram", map: "equal" },
    enableFocus: { new: "focus", map: "equal" },
    enableMachining: { new: "machining", map: "equal" },
    enableCSVImport: { new: "csvImport", map: "equal" },
    showProgressNumber: { new: "progressNumber", map: "equal" },
    // Extras mappings
    disableBanding: { new: "banding", map: "reverse" },
    disableFinish: { new: "finish", map: "reverse" },
    disablePlaning: { new: "planing", map: "reverse" },
    // NEW
    disableInfo: { new: "info", map: "reverse" },
    // NEW
    disableImageUpload: { new: "imageUpload", map: "reverse" },
    // NEW
    // Other mappings
    disableOrientation: { new: "orientation", map: "reverse" },
    disableClick: { new: "click", map: "reverse" },
    disablePartName: { new: "partName", map: "reverse" }
  };
  for (const t of Object.keys(n))
    if (t in e) {
      const a = n[t];
      e.enable[a.new] = a.map === "reverse" ? !e[t] : e[t], delete e[t];
    }
}
function xg(e) {
  if (!(!e || typeof e != "object")) {
    if (wu(e), e.parts && Array.isArray(e.parts) && (e.parts = e.parts.map((n) => (n.extras?.banding?.sides && (n.extras.banding.sides = vn(n.extras.banding.sides)), n.extras?.finish?.sides && (n.extras.finish.sides = vn(n.extras.finish.sides)), n.extras?.planing?.sides && (n.extras.planing.sides = vn(n.extras.planing.sides)), n))), e.stock && Array.isArray(e.stock) && (e.stock = e.stock.map((n) => n?.trim ? {
      ...n,
      trim: vn(n.trim)
    } : n)), e.options) {
      if (ml(e.options), e.options.bandingLocations && (e.options.bandingLocations = Un(e.options.bandingLocations)), e.options.finishLocations && (e.options.finishLocations = Un(e.options.finishLocations)), e.options.planingLocations && (e.options.planingLocations = Un(e.options.planingLocations)), e.options.extrasLocationGroups)
        for (const n of ["banding", "finish", "planing"]) {
          const t = e.options.extrasLocationGroups[n];
          t && Array.isArray(t) && t.forEach((a) => {
            a.locations && (a.locations = Un(a.locations));
          });
        }
      if (!e.saw) {
        const n = {}, t = ["bladeWidth", "cutType", "cutPreference", "guillotineOptions", "stackHeight", "stockType"];
        for (const a of t)
          a in e.options && (n[a] = e.options[a], delete e.options[a]);
        Object.keys(n).length > 0 && (console.log("[migrateLegacyData] Migrating saw properties from options to saw:", n), e.saw = n);
      }
    }
    for (const n of ["banding", "finish", "planing"])
      if (e[n]) {
        const t = e[n];
        t.locations && Array.isArray(t.locations) && (t.locations = Un(t.locations)), t.groups && Array.isArray(t.groups) && t.groups.forEach((a) => {
          a.locations && (a.locations = Un(a.locations));
        });
      }
    if (e.saw?.cutPreference && ["efficiency", "length", "width", "beam"].includes(e.saw.cutPreference)) {
      const a = {
        efficiency: { cutType: "guillotine", cutPreference: null },
        length: { cutType: "guillotine", cutPreference: "l" },
        width: { cutType: "guillotine", cutPreference: "w" },
        beam: { cutType: "beam", cutPreference: "l" }
      }[e.saw.cutPreference];
      a && (e.saw.cutType = a.cutType, e.saw.cutPreference = a.cutPreference);
    }
    e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Mi(n)), (e.l !== void 0 || e.w !== void 0 || e.banding !== void 0) && Mi(e);
  }
}
function Cu(e) {
  if (!e || typeof e != "object")
    return e;
  const n = { ...e };
  return n.saw && (n.saw = Ou(n.saw)), Array.isArray(n.stock) && (n.stock = n.stock.map(Iu)), Array.isArray(n.parts) && (n.parts = n.parts.map(Lu)), n;
}
function Ou(e) {
  const n = { ...e };
  if (n.guillotineOptions && (n.guillotineOptions = { ...n.guillotineOptions }, n.guillotineOptions.strategy === "stock" && (n.guillotineOptions.strategy = "efficiency")), n.efficiencyOptions) {
    n.efficiencyOptions = { ...n.efficiencyOptions };
    const t = n.efficiencyOptions.primaryCompression;
    t === "x" ? n.efficiencyOptions.primaryCompression = "l" : t === "y" && (n.efficiencyOptions.primaryCompression = "w");
  }
  return n.bladeWidth !== void 0 && (n.bladeWidth = Number(n.bladeWidth)), n.stackHeight !== void 0 && (n.stackHeight = Number(n.stackHeight)), n.cutPreference === "flex" ? n.cutPreference = "l" : n.cutPreference === "" && (n.cutPreference = void 0), (n.cutPreference === null || n.cutPreference === void 0) && (n.cutType === "guillotine" || n.cutType === "beam") && (n.cutPreference = "l"), n;
}
function Iu(e) {
  const n = { ...e };
  return delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.trim && (n.trim = vn(n.trim)), n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n.cost !== void 0 && (n.cost = Number(n.cost)), n;
}
function Lu(e) {
  const n = { ...e };
  if (delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.banding || n.bandingType) {
    const t = ku(n);
    t && Object.keys(t).length > 0 && (n.extras || (n.extras = {}), n.extras.banding || (n.extras.banding = {}), n.extras.banding.sides = vn(t)), delete n.banding, delete n.bandingType;
  }
  if (n.extras?.banding?.sides && (n.extras = { ...n.extras }, n.extras.banding = { ...n.extras.banding }, n.extras.banding.sides = vn(n.extras.banding.sides)), n.finish && !n.extras?.finish) {
    if (n.extras || (n.extras = {}), n.extras.finish || (n.extras.finish = {}), n.finish.a !== void 0 || n.finish.b !== void 0) {
      const t = {};
      "a" in n.finish && (t.a = Dt(n.finish.a)), "b" in n.finish && (t.b = Dt(n.finish.b)), n.extras.finish.faces = t;
    } else
      n.extras.finish.sides = vn(n.finish);
    delete n.finish;
  }
  if (n.extras?.finish?.sides && (n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish }, n.extras.finish.sides = vn(n.extras.finish.sides)), n.extras?.finish?.faces) {
    n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish };
    const t = n.extras.finish.faces;
    "a" in t && (t.a = Dt(t.a)), "b" in t && (t.b = Dt(t.b));
  }
  return n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n;
}
function Kt(e) {
  if (!e || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map(Kt);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || (n[t] = Kt(a));
  return n;
}
function Ga(e) {
  if (!e || typeof e != "object") return null;
  if (Array.isArray(e)) return e.map(Ga);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || t === "enabled" || t === "type" || t === "issues" || t === "warnings" || (n[t] = a && typeof a == "object" ? Ga(a) : a);
  return Object.keys(n).length > 0 ? n : null;
}
function gl(e) {
  if (!e) return null;
  const {
    enabled: n,
    __entityType: t,
    autoId: a,
    issues: i,
    warnings: l,
    ...u
  } = e;
  return Kt(u);
}
function Eu(e) {
  return e ? typeof e == "string" ? e : e.id ? e.id : e.autoId ? e.autoId : "" : "";
}
function Fu(e) {
  return e.rot !== void 0 ? e.rot ? 1 : 0 : e.rotated !== void 0 ? e.rotated ? 1 : 0 : e.isRotated !== void 0 ? e.isRotated ? 1 : 0 : e.w > e.l ? 1 : 0;
}
ee({
  // Job metadata
  jobId: j().describe("Job identifier"),
  // Input configuration (preserved)
  saw: va.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ve(sr).describe("Stock items"),
  parts: ve(ws).describe("Parts with coordinates and properties"),
  cuts: ve(ir).optional().describe("Cut instructions"),
  offcuts: ve(ar).optional().describe("Remaining offcut pieces"),
  unusableParts: ve(ws).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: nr.describe("Complete analysis and metrics")
});
ee({
  saw: va.describe("Saw configuration"),
  stock: ve(Zn).describe("Stock items"),
  parts: ve(ba).describe("Parts to cut"),
  groups: ve(lr).optional().describe("User-defined part groups with XY positions"),
  webhook: w().url().optional().describe("Webhook URL for async result delivery"),
  // Job-level label-printer fields (distinct from /v3/labels printable PDFs).
  // `customer` maps to PTX JOBS.CUSTOMER. Mismatches with the chosen saw's
  // format(s) surface as warnings, not request failures.
  labels: ee({
    customer: w().max(100).optional().describe("Customer name printed on saw labels (PTX JOBS.CUSTOMER)")
  }).optional().describe("Job-level fields fed to the saw label printer")
});
ee({
  error: w().describe("Error message"),
  details: Fs().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: ln("V3").describe("API version"),
  help: w().optional().describe("Helpful migration guidance"),
  example: Fs().optional().describe("Example of correct format"),
  docs: w().url().optional().describe("Link to V3 documentation")
});
function Au(e) {
  if (!e) return null;
  const {
    fitsAll: n,
    fitsAny: t,
    largestShape: a,
    smallestShape: i,
    ...l
  } = e;
  return Kt(l);
}
function Tu(e) {
  return e ? {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material,
    grain: e.grain ?? null,
    type: e.type ?? "sheet",
    used: e.used ?? !1,
    trim: Kt(e.trim),
    cost: e.cost ?? 0,
    notes: e.notes ?? "",
    code: e.code,
    analysis: Au(e.analysis),
    stack: e.stack?.number ?? 1,
    customData: Kt(e.customData)
  } : null;
}
function Nu(e, n) {
  if (!e) return null;
  let t = null;
  const a = Eu(e.stock);
  if (a && n) {
    const l = n.get(a);
    l && (t = { ...l });
  } else a && (t = { id: a });
  const i = {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material ?? "",
    x: e.x,
    y: e.y,
    rot: Fu(e),
    added: e.added ?? !1,
    notes: e.notes ?? "",
    code: e.code,
    stock: t,
    trim: Kt(e.trim),
    extras: Ga(e.extras),
    customData: Kt(e.customData)
  };
  return e.machining && (i.machining = gl(e.machining)), i;
}
function $u(e) {
  if (!e) return null;
  const n = {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material ?? "",
    notes: e.notes ?? "",
    trim: Kt(e.trim),
    extras: Ga(e.extras),
    customData: Kt(e.customData)
  };
  return e.machining && (n.machining = gl(e.machining)), e.issues && Array.isArray(e.issues) && e.issues.length > 0 ? n.issues = e.issues.map((t) => ({
    message: ll(t.message) || t.message,
    type: t.type,
    category: t.category,
    field: t.field
  })) : n.issues = [], n;
}
function Mu(e) {
  return e ? {
    x1: e.x1,
    x2: e.x2,
    y1: e.y1,
    y2: e.y2,
    dimension: e.dimension,
    position: e.position,
    isTrim: e.isTrim ?? !1,
    order: e.order ?? null,
    stock: e.stock ? { id: e.stock.id || e.stock.autoId } : null
  } : null;
}
function Du(e) {
  return e ? {
    id: e.id,
    l: e.l,
    w: e.w,
    t: e.t,
    x: e.x,
    y: e.y,
    q: e.q ?? 1,
    material: e.material,
    grain: e.grain ?? null,
    stock: e.stock ? { id: e.stock.id || e.stock.autoId } : null
  } : null;
}
function _u(e) {
  const n = e.stockList || e.stock || [], t = /* @__PURE__ */ new Map();
  for (const f of n) {
    const k = { id: f.id || "" };
    f.code && (k.code = f.code), f.id && t.set(f.id, k), f.autoId && f.autoId !== f.id && t.set(f.autoId, k);
  }
  const a = n.map(Tu), i = (e.shapeList || e.parts || []).map((f) => Nu(f, t)), l = (e.unusableShapes || []).map($u), u = (e.cutList || e.cuts || []).map(Mu), r = (e.offcuts || []).map(Du);
  return {
    jobId: e.jobId,
    saw: Kt(e.saw),
    stock: a,
    parts: i,
    cuts: u,
    offcuts: r,
    unusableParts: l,
    metadata: Kt(e.metadata)
  };
}
const _s = (e) => e == null || e === !1;
function Vu(e, n, t) {
  if (n > 0 && _s(t[n - 1]))
    return [];
  const a = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (i.length <= n)
      continue;
    let l = !0;
    for (let u = 0; u < n; u++) {
      const r = t[u];
      if (!_s(r) && i[u] !== r) {
        l = !1;
        break;
      }
    }
    l && a.add(i[n]);
  }
  return [...a];
}
class Cn extends Error {
  code;
  constructor(n, t) {
    super(n), this.code = t, this.name = "FormulaError";
  }
}
class Ja {
  url;
  spec;
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(n, t = {}) {
    if (typeof n == "number" || typeof n == "boolean")
      return n;
    if (typeof n == "string") {
      if (this.isStringLiteral(n))
        return n.slice(1, -1);
      if (n.includes("."))
        return this.resolveNestedVariable(n, t);
      if (!(n in t))
        throw new Error(`Undefined variable: ${n}`);
      return t[n];
    }
    const { operation: a, operands: i } = n;
    if (!a)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(a))
      throw new Error(`Invalid operation: ${a}`);
    if (a === "ternary")
      return this.evaluate(n.condition, t) ? this.evaluate(n.trueExpr, t) : this.evaluate(n.falseExpr, t);
    if (a === "!") {
      if (!i || !Array.isArray(i) || i.length !== 1)
        throw new Error("Invalid unary NOT expression");
      return !this.evaluate(i[0], t);
    }
    if (!i || !Array.isArray(i) || i.length !== 2)
      throw new Error("Invalid formula structure");
    if (a === "&&") {
      const r = this.evaluate(i[0], t);
      return r && this.evaluate(i[1], t);
    }
    if (a === "||") {
      const r = this.evaluate(i[0], t);
      return r || this.evaluate(i[1], t);
    }
    const [l, u] = i.map((r) => this.evaluate(r, t));
    return [">", "<", ">=", "<=", "==", "!="].includes(a) ? this.evaluateComparison(a, l, u) : this.operations[a](l, u);
  }
  /**
   * Resolve nested variable access via dot-notation
   * e.g., "extras.banding.sides.l1" -> variables.extras.banding.sides.l1
   */
  resolveNestedVariable(n, t) {
    const a = n.split(".");
    let i = t;
    for (const l of a) {
      if (i == null)
        return;
      if (typeof i != "object" || !(l in i)) {
        if (n in t)
          return t[n];
        throw new Error(`Undefined variable: ${n}`);
      }
      i = i[l];
    }
    return i;
  }
  // Update the operations object to use the FormulaOperation type
  operations = {
    add: (n, t) => n + t,
    subtract: (n, t) => n - t,
    multiply: (n, t) => n * t,
    divide: (n, t) => {
      if (t === 0)
        throw new Cn("Division by zero", "DIVISION_BY_ZERO");
      return n / t;
    },
    ">": (n, t) => n > t,
    "<": (n, t) => n < t,
    ">=": (n, t) => n >= t,
    "<=": (n, t) => n <= t,
    "==": (n, t) => n === t,
    "!=": (n, t) => n !== t,
    "&&": (n, t) => n && t,
    "||": (n, t) => n || t
  };
  // Update getOperation to use the type guard
  getOperation(n) {
    const a = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
      ">": ">",
      "<": "<",
      ">=": ">=",
      "<=": "<=",
      "==": "==",
      "!=": "!=",
      "&&": "&&",
      "||": "||",
      "!": "!",
      "?:": "ternary"
    }[n];
    if (!this.isFormulaOperation(a))
      throw new Error(`Unsupported operator: ${n}`);
    return a;
  }
  precedence = {
    "||": 1,
    "&&": 2,
    "+": 4,
    "-": 4,
    "*": 5,
    "/": 5,
    "!": 6,
    // Unary-minus on the operator stack is tagged 'UNARY_MINUS' to
    // distinguish it from binary subtract. Listed here so the standard
    // shunting-yard precedence comparison correctly pops it before
    // lower-precedence binary ops (e.g. `-3 + 4` → pop unary, then `+`).
    UNARY_MINUS: 6,
    ">": 3,
    "<": 3,
    ">=": 3,
    "<=": 3,
    "!=": 3,
    "==": 3,
    "?": 2,
    ":": 2
  };
  constructor({ url: n = null, spec: t = null }) {
    n && (this.url = n), t && (this.spec = t);
  }
  isFormulaOperation(n) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "!=", "&&", "||", "!", "ternary"].includes(n);
  }
  isFormula(n) {
    return typeof n == "string" && n.startsWith("=");
  }
  stripFormulaPrefix(n) {
    return n.substring(1);
  }
  evaluateValue(n, t, a = {}) {
    return typeof n == "number" || !this.isFormula(n) ? n : this.evaluateFormula(this.stripFormulaPrefix(n), t, a);
  }
  extractDependencies(n) {
    const t = /* @__PURE__ */ new Set();
    if (typeof n == "string") {
      const a = Array.from(n.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const u of a)
        t.add(`${u[1]}.${u[2]}`);
      const i = Array.from(n.matchAll(/inputs\.(\w+)/g));
      for (const u of i)
        t.add(`input.${u[1]}`);
      const l = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const u of l)
        n.includes(u) && t.add(`input.${u}`);
    }
    return t;
  }
  buildFormulaGraph(n, t) {
    const a = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, i = (l, u) => {
      const r = `${n}.${l}`;
      a.nodes.set(r, {
        panelKey: n,
        attribute: l,
        formula: u
      }), a.edges.set(r, this.isFormula(u) ? this.extractDependencies(this.stripFormulaPrefix(u.toString())) : /* @__PURE__ */ new Set());
    };
    return i("l", t.l), i("w", t.w), i("t", t.t), i("q", t.q), a;
  }
  resolveFormulas(n, t, a, i = {}) {
    const l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), r = (c) => {
      if (l.has(c))
        return l.get(c);
      const [f, k] = c.split(".");
      if (!n.nodes.has(c)) {
        const G = i[f];
        if (G)
          return k === "q" ? G.q : G[k];
        throw new Error(`Node not found: ${c}`);
      }
      if (u.has(c))
        throw new Error(`Circular dependency detected at ${c}`);
      const C = n.nodes.get(c);
      if (typeof C.formula == "number")
        return l.set(c, C.formula), C.formula;
      u.add(c);
      const L = n.edges.get(c) || /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Map();
      for (const G of L)
        if (G.startsWith("input.")) {
          const pe = G.split(".")[1];
          v.set(G, a[pe]);
        } else
          v.set(G, r(G));
      const $ = this.evaluateFormulaWithDeps(C.formula, v, a);
      return l.set(c, $), u.delete(c), $;
    };
    for (const c of n.nodes.keys())
      r(c);
    return Object.fromEntries(l);
  }
  evaluateFormulaWithDeps(n, t, a, i) {
    if (!this.isFormula(n))
      return n;
    let l = this.stripFormulaPrefix(n.toString());
    return l = l.replace(/inputs\.(\w+)/g, (u, r) => a[r]?.toString() || "0"), l = l.replace(/panels\.(\w+)\.(\w+)/g, (u, r, c) => {
      if (r === i?.panelKey && i[c] !== void 0)
        return i[c].toString();
      if (t.has(`${r}.${c}`))
        return t.get(`${r}.${c}`).toString();
      throw new Error(`Undefined variable in formula: ${u}`);
    }), this.evaluate(this.parse(l), a);
  }
  calculatePanels(n) {
    if (!this.spec?.panels)
      return {};
    const t = {};
    for (const [a, i] of Object.entries(this.spec.panels)) {
      const l = this.buildFormulaGraph(a, i), u = this.resolveFormulas(l, i, n, t), r = {
        panelKey: a,
        l: u[`${a}.l`],
        w: u[`${a}.w`],
        t: u[`${a}.t`],
        // Use `??` so a deliberately-zero q (e.g. `inputs.hasDoor` when
        // the customer turned the door off) survives instead of being
        // coerced back to 1. Only undefined falls through to the
        // default — the panel-not-defined case.
        q: u[`${a}.q`] ?? 1
      };
      t[a] = {
        name: i.name,
        material: i.material,
        bandingOptions: i.bandingOptions ?? {},
        finishOptions: i.finishOptions ?? {},
        ...i.planingOptions !== void 0 ? { planingOptions: i.planingOptions } : {},
        orientationLock: i.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(i.orientationLock, /* @__PURE__ */ new Map(), n, r) : void 0,
        ...r
      };
    }
    return t;
  }
  evaluateFormula(n, t, a = {}) {
    if (typeof n == "number")
      return n;
    if (typeof n == "string") {
      const i = n.replace(/inputs\.(\w+)/g, (u, r) => {
        if (!(r in t))
          throw new Error(`Input not found: ${r}`);
        return t[r].toString();
      }), l = i.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (l) {
        const [, u, r] = l;
        if (!a[u])
          throw new Error(`Panel not found: ${u}`);
        return r === "q" ? a[u].q ?? 1 : a[u].dimensions[r];
      }
      return this.evaluate(this.parse(i), t);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(n) {
    const t = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|&&|\|\||\+|-|\*|\/|>|<|\?|:|\(|\)|!|[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*)/g;
    return n.match(t) || [];
  }
  isValidToken(n) {
    return this.isNumber(n) || this.isVariable(n) || n in this.precedence || n === "(" || n === ")" || this.isIdentifier(n);
  }
  isIdentifier(n) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(n);
  }
  evaluateComparison(n, t, a) {
    switch (n) {
      case ">":
        return t > a;
      case "<":
        return t < a;
      case ">=":
        return t >= a;
      case "<=":
        return t <= a;
      case "==":
        return t === a;
      case "!=":
        return t !== a;
      default:
        throw new Error(`Unsupported comparison operator: ${n}`);
    }
  }
  isNumber(n) {
    return !isNaN(Number(n));
  }
  isVariable(n) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(n);
  }
  toPostfix(n) {
    const t = [], a = [];
    let i = !1;
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      if (this.isNumber(u) || this.isStringLiteral(u) || this.isIdentifier(u))
        t.push(this.isNumber(u) ? Number(u) : u), i = !0;
      else if (u === "(")
        a.push(u), i = !1;
      else if (u === ")") {
        for (; a.length && a[a.length - 1] !== "("; )
          t.push(a.pop());
        if (a.length === 0)
          throw new Error("Mismatched parentheses");
        a.pop(), i = !0;
      } else if (u === "!") {
        for (; a.length && a[a.length - 1] !== "(" && this.precedence[a[a.length - 1]] > this.precedence[u]; )
          t.push(a.pop());
        a.push("UNARY_NOT"), i = !1;
      } else if (u === "?") {
        for (; a.length && this.precedence[a[a.length - 1]] > this.precedence[u]; )
          t.push(a.pop());
        a.push(u), i = !1;
      } else if (u === ":") {
        for (; a.length && a[a.length - 1] !== "?"; )
          t.push(a.pop());
        if (a.length === 0)
          throw new Error("Mismatched ternary operator");
        a.pop(), a.push("?:"), i = !1;
      } else if (u === "-" && !i) {
        for (; a.length && a[a.length - 1] !== "(" && this.precedence[a[a.length - 1]] > this.precedence["!"]; )
          t.push(a.pop());
        a.push("UNARY_MINUS"), i = !1;
      } else if (u in this.precedence) {
        for (; a.length && a[a.length - 1] !== "(" && this.precedence[a[a.length - 1]] >= this.precedence[u]; )
          t.push(a.pop());
        a.push(u), i = !1;
      } else
        throw new Error(`Invalid token: ${u}`);
    }
    for (; a.length; ) {
      const l = a.pop();
      if (l === "(" || l === ")")
        throw new Error("Mismatched parentheses");
      t.push(l);
    }
    return t;
  }
  parse(n) {
    if (typeof n != "string")
      throw new Error("Parse input must be a string");
    if (!n.trim())
      throw new Error("Empty input");
    const t = this.tokenize(n), a = this.toPostfix(t);
    return this.toFormulaJSON(a);
  }
  isStringLiteral(n) {
    return /^'.*'$/.test(n);
  }
  toFormulaJSON(n) {
    const t = [];
    for (const a of n) {
      if (!(a === "UNARY_MINUS" || a === "UNARY_NOT" || a === "?:")) {
        if (typeof a == "number" || this.isStringLiteral(a.toString()) || this.isVariable(a.toString())) {
          t.push(a);
          continue;
        }
      }
      if (a === "?:") {
        if (t.length < 3)
          throw new Error("Invalid ternary expression");
        const i = t.pop(), l = t.pop(), u = t.pop();
        t.push({
          operation: "ternary",
          condition: u,
          trueExpr: l,
          falseExpr: i
        });
      } else if (a === "UNARY_NOT") {
        if (t.length < 1)
          throw new Error("Invalid expression: insufficient operands for NOT");
        const i = t.pop();
        t.push({
          operation: "!",
          operands: [i]
        });
      } else if (a === "UNARY_MINUS") {
        if (t.length < 1)
          throw new Error("Invalid expression: insufficient operands for negation");
        const i = t.pop();
        t.push({
          operation: "subtract",
          operands: [0, i]
        });
      } else {
        if (t.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const i = t.pop(), l = t.pop();
        t.push({
          operation: this.getOperation(a.toString()),
          operands: [l, i]
        });
      }
    }
    if (t.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return t[0];
  }
  calculateHardware(n) {
    return this.spec?.hardware ? Object.entries(this.spec.hardware).reduce((t, [a, i]) => {
      const l = this.evaluateValue(i.q, n), u = this.evaluateValue(i.cost, n);
      return t[a] = {
        name: i.name,
        q: Math.ceil(l),
        totalCost: Math.ceil(l) * u
      }, t;
    }, {}) : {};
  }
  calculateAll(n) {
    this.validateInputs(n);
    const t = this.calculatePanels(n), a = this.calculateHardware(n);
    return {
      inputs: n,
      panels: t,
      hardware: a
    };
  }
  validateInputs(n) {
    if (!this.spec?.inputs)
      throw new Cn("No input specifications defined", "NO_INPUTS");
    for (const [t, a] of Object.entries(this.spec.inputs)) {
      const i = n[t];
      if (i === void 0)
        throw new Cn(`Missing required input: ${t}`, "MISSING_INPUT");
      if (i < a.min || i > a.max)
        throw new Cn(`Input ${t} value ${i} out of range [min: ${a.min}, max: ${a.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url)
      return null;
    try {
      const n = await fetch(this.url);
      if (!n.ok)
        throw new Error(`HTTP error! status: ${n.status}`);
      const t = await n.json();
      return this.spec = t, this.validateSpec(), t;
    } catch (n) {
      return console.error("Error fetching or parsing JSON file:", n), null;
    }
  }
  validateSpec() {
    const n = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && n.push("Specification must contain inputs"), { isValid: n.length === 0, errors: n }) : (n.push("Specification is required"), { isValid: !1, errors: n });
  }
  validateFields(n) {
    if (!this.spec?.inputs)
      throw new Cn("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (n.length !== t.length)
      throw new Cn(`Expected ${t.length} fields, got ${n.length}`, "INVALID_FIELD_COUNT");
    let a = 0;
    for (const i of n) {
      const l = t[a], u = this.spec.inputs[l];
      if (i.value === null || i.value === void 0)
        throw new Cn(`Missing value for field ${a}`, "MISSING_FIELD_VALUE");
      if (!!!u.optionsFrom && typeof u.min == "number" && typeof u.max == "number" && (i.value < u.min || i.value > u.max))
        throw new Cn(`Field ${a} value ${i.value} out of range [min: ${u.min}, max: ${u.max}]`, "FIELD_OUT_OF_RANGE");
      a++;
    }
  }
  fieldsToInputs(n) {
    const t = Object.keys(this.spec?.inputs || {});
    return n.reduce((a, i, l) => {
      const u = t[l];
      return u && (a[u] = i.value), a;
    }, {});
  }
  getEmptyFields() {
    const n = {};
    return this.spec?.inputs && Object.keys(this.spec.inputs).forEach((t, a) => {
      n[a] = { value: 0 };
    }), n;
  }
  getDefaultFields() {
    const n = {};
    return this.spec?.inputs && Object.values(this.spec.inputs).forEach((t, a) => {
      const i = t.default;
      let l;
      typeof i == "number" ? l = i : typeof i == "boolean" ? l = i ? 1 : 0 : l = 0, n[a] = { value: l };
    }), n;
  }
  calculatePanelsFromFields(n) {
    this.validateFields(n);
    const t = this.fieldsToInputs(n);
    return this.calculatePanels(t);
  }
  calculateHardwareFromFields(n) {
    this.validateFields(n);
    const t = this.fieldsToInputs(n);
    return this.calculateHardware(t);
  }
  calculateAllFromFields(n) {
    this.validateFields(n);
    const t = this.fieldsToInputs(n);
    return this.calculateAll(t);
  }
  getFieldMetadata() {
    const n = [];
    return this.spec?.inputs && Object.entries(this.spec.inputs).forEach(([t, a], i) => {
      n.push({
        index: i,
        name: t,
        label: a.label,
        type: a.type,
        min: a.min,
        max: a.max,
        default: a.default
      });
    }), n;
  }
  /**
   * Evaluate a formula string with custom variables
   * Supports: arithmetic (+,-,*,/), comparison (>,<,>=,<=,==), logical (&&,||,!), ternary (?:)
   * Variables can use dot-notation (e.g., extras.banding.sides.l1)
   *
   * @param formula - Formula string to evaluate (e.g., "l > 100 && w > 50")
   * @param variables - Object containing variable values
   * @returns Evaluated result (number or boolean)
   */
  evaluateExpression(n, t = {}) {
    const a = this.parse(n);
    return this.evaluate(a, t);
  }
  /**
   * Validate formula syntax without evaluating
   * Returns validation result with any syntax errors
   *
   * @param formula - Formula string to validate
   * @returns Object with isValid flag and error message if invalid
   */
  validateFormula(n) {
    try {
      return this.parse(n), { isValid: !0 };
    } catch (t) {
      return {
        isValid: !1,
        error: t instanceof Error ? t.message : "Invalid formula"
      };
    }
  }
  /**
   * Parse a formula and return every variable / identifier it references.
   *
   * Uses the engine's own parser so the result reflects what the
   * evaluator will actually look up at runtime — including dot-paths
   * (`analysis.partArea`) treated as single identifiers and string
   * literals correctly excluded.
   *
   * Used by schema-aware validators to spot references to fields that
   * have been renamed or removed from the result schema before evaluation
   * silently falls back.
   *
   * Returns an empty array on syntactically invalid input (callers should
   * combine this with `validateFormula` to distinguish "no refs" from
   * "couldn't parse"). Throws nothing.
   */
  getReferencedIdentifiers(n) {
    const t = /* @__PURE__ */ new Set();
    try {
      const a = this.parse(this.stripFormulaPrefixSafely(n));
      this.collectIdentifiers(a, t);
    } catch {
    }
    return Array.from(t);
  }
  collectIdentifiers(n, t) {
    if (n != null) {
      if (typeof n == "string") {
        this.isStringLiteral(n) || t.add(n);
        return;
      }
      if (typeof n == "object") {
        if (n.operation === "ternary") {
          this.collectIdentifiers(n.condition, t), this.collectIdentifiers(n.trueExpr, t), this.collectIdentifiers(n.falseExpr, t);
          return;
        }
        if (Array.isArray(n.operands))
          for (const a of n.operands)
            this.collectIdentifiers(a, t);
      }
    }
  }
  /**
   * Mirror of `stripFormulaPrefix` that tolerates non-`=`-prefixed input.
   * Public-method-facing only — internal evaluation paths still use
   * `stripFormulaPrefix` directly after their own `isFormula` check.
   */
  stripFormulaPrefixSafely(n) {
    const t = n.trim();
    return t.startsWith("=") ? t.substring(1).trim() : t;
  }
}
const Bu = new Ja({});
function Ru(e) {
  const n = e.trim();
  return n.startsWith("=") ? n.substring(1).trim() : n;
}
function Ui(e, n) {
  const t = Ru(e);
  if (!t) return null;
  try {
    const a = Bu.evaluateExpression(t, n), i = Number(a);
    return !Number.isFinite(i) || i < 0 ? null : i;
  } catch (a) {
    return console.error("[extras-formula] evaluation failed", { formula: e, err: a }), null;
  }
}
function qu(e, n) {
  return Ui(n, e);
}
function ju(e, n) {
  return Ui(n, e);
}
function Vs(e, n) {
  return Ui(n, e);
}
const Gi = {
  stockL: 0,
  stockW: 0,
  stockCost: 0,
  stockDiscount: 0,
  stockDiscountedCost: 0
};
function Uu(e, n, t, a) {
  return {
    length: n,
    edge: e,
    isLongEdge: e === "l1" || e === "l2" ? 1 : 0,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...Gi,
    ...a
  };
}
function Gu(e, n, t, a) {
  return {
    area: n,
    face: e,
    partL: t.partL,
    partW: t.partW,
    partT: t.partT,
    partQuantity: t.partQuantity,
    ...Gi,
    ...a
  };
}
function Bs(e, n, t, a, i, l) {
  return {
    area: n,
    length: t,
    target: e,
    isFace: a,
    partL: i.partL,
    partW: i.partW,
    partT: i.partT,
    partQuantity: i.partQuantity,
    ...Gi,
    ...l
  };
}
function Wu(e) {
  let n = e;
  for (let t = 0; t < 16 && n; t++) {
    if (n instanceof Hn)
      return n;
    if (typeof n.unwrap == "function") {
      const i = n.unwrap();
      if (i === n)
        break;
      n = i;
      continue;
    }
    const a = n._def?.innerType ?? n._zod?.def?.innerType;
    if (a && a !== n) {
      n = a;
      continue;
    }
    break;
  }
  return n;
}
function zu(e) {
  const n = e.shape ?? {};
  return Object.entries(n).filter(([, t]) => Wu(t) instanceof Hn).map(([t]) => t);
}
function Rs(e) {
  const t = (e.split(".").pop() ?? e).replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}
zu(Vi);
function Wi(e) {
  const n = (l) => {
    const u = e.meta[l];
    return {
      name: l,
      label: u?.label ?? Rs(l),
      description: u?.description,
      group: u?.group ?? e.defaultGroup
    };
  }, t = e.handCuratedNames.map(n), a = e.relevantOrderKeys.map((l) => ({
    name: `order.${l}`,
    label: Rs(l),
    group: "Order"
  })), i = [...t, ...a];
  return { variables: i, variableNames: i.map((l) => l.name) };
}
const Ku = {
  length: { group: "Edge", label: "Edge length", description: "This edge's length in mm." },
  edge: { group: "Edge", label: "Edge name", description: "Edge identifier: 'l1' | 'l2' | 'w1' | 'w2'. Compare with quoted strings." },
  isLongEdge: { group: "Edge", label: "Is long edge", description: "1 when the edge is along the long side (l1/l2), else 0." },
  partL: { group: "Part", label: "Part length", description: "Part's long-side dimension (mm)." },
  partW: { group: "Part", label: "Part width", description: "Part's short-side dimension (mm)." },
  partT: { group: "Part", label: "Part thickness", description: "Part thickness (mm)." },
  partQuantity: { group: "Part", label: "Part quantity", description: "Copies of this part in the order." },
  stockL: { group: "Stock", label: "Stock length" },
  stockW: { group: "Stock", label: "Stock width" },
  stockCost: { group: "Stock", label: "Stock cost", description: "Configured cost per sheet (pre-discount)." },
  stockDiscount: { group: "Stock", label: "Stock discount %" },
  stockDiscountedCost: { group: "Stock", label: "Discounted stock cost" }
}, Hu = [
  "length",
  "edge",
  "isLongEdge",
  "partL",
  "partW",
  "partT",
  "partQuantity",
  "stockL",
  "stockW",
  "stockCost",
  "stockDiscount",
  "stockDiscountedCost"
], Zu = [
  "totalBandingLength",
  // the headline one for banding tiering
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: Ju } = Wi({
  handCuratedNames: Hu,
  meta: Ku,
  relevantOrderKeys: Zu,
  defaultGroup: "Edge"
}), Qu = Ju, Yu = {
  area: { group: "Face", label: "Face area", description: "This face's area in mm² (partL × partW)." },
  face: { group: "Face", label: "Face name", description: "Face identifier: 'a' | 'b'. Compare with quoted strings." },
  partL: { group: "Part", label: "Part length" },
  partW: { group: "Part", label: "Part width" },
  partT: { group: "Part", label: "Part thickness" },
  partQuantity: { group: "Part", label: "Part quantity", description: "Copies of this part in the order." },
  stockL: { group: "Stock", label: "Stock length" },
  stockW: { group: "Stock", label: "Stock width" },
  stockCost: { group: "Stock", label: "Stock cost", description: "Configured cost per sheet (pre-discount)." },
  stockDiscount: { group: "Stock", label: "Stock discount %" },
  stockDiscountedCost: { group: "Stock", label: "Discounted stock cost" }
}, Xu = [
  "area",
  "face",
  "partL",
  "partW",
  "partT",
  "partQuantity",
  "stockL",
  "stockW",
  "stockCost",
  "stockDiscount",
  "stockDiscountedCost"
], ec = [
  "totalFinishArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: tc } = Wi({
  handCuratedNames: Xu,
  meta: Yu,
  relevantOrderKeys: ec,
  defaultGroup: "Face"
}), nc = tc, ac = {
  area: { group: "Feature", label: "Face area", description: "Face area in mm² for face-mode planing; 0 for side-mode." },
  length: { group: "Feature", label: "Side length", description: "Side length in mm for side-mode planing; 0 for face-mode." },
  target: { group: "Feature", label: "Target", description: "Location id: 'face.a' | 'face.b' | 'side.l1' | …" },
  isFace: { group: "Feature", label: "Is face", description: "1 when planing a face, 0 when planing a side." },
  partL: { group: "Part", label: "Part length" },
  partW: { group: "Part", label: "Part width" },
  partT: { group: "Part", label: "Part thickness" },
  partQuantity: { group: "Part", label: "Part quantity" },
  stockL: { group: "Stock", label: "Stock length" },
  stockW: { group: "Stock", label: "Stock width" },
  stockCost: { group: "Stock", label: "Stock cost" },
  stockDiscount: { group: "Stock", label: "Stock discount %" },
  stockDiscountedCost: { group: "Stock", label: "Discounted stock cost" }
}, ic = [
  "area",
  "length",
  "target",
  "isFace",
  "partL",
  "partW",
  "partT",
  "partQuantity",
  "stockL",
  "stockW",
  "stockCost",
  "stockDiscount",
  "stockDiscountedCost"
], sc = [
  "totalPlaningArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
], { variableNames: lc } = Wi({
  handCuratedNames: ic,
  meta: ac,
  relevantOrderKeys: sc,
  defaultGroup: "Feature"
}), oc = lc, Qt = U(null);
let rc = 0;
function uc(e) {
  const n = e || `action-menu-${++rc}-${Date.now()}`, t = F({
    get: () => Qt.value === n,
    set: (k) => {
      k ? Qt.value = n : Qt.value === n && (Qt.value = null);
    }
  }), a = () => {
    Qt.value = n;
  }, i = () => {
    Qt.value === n && (Qt.value = null);
  }, l = () => {
    Qt.value = null;
  }, u = () => {
    t.value = !t.value;
  }, r = F(() => Qt.value !== null), c = F(() => Qt.value), f = F(() => Qt.value === n);
  return {
    // Instance-specific
    id: Ut(U(n)),
    isOpen: t,
    open: a,
    close: i,
    toggle: u,
    isThisMenuOpen: f,
    // Global singleton state (shared across all instances)
    closeAll: l,
    isAnyMenuOpen: r,
    currentOpenMenuId: c
  };
}
const cc = { class: "action-menu" }, dc = ["textContent"], fc = {
  key: 0,
  class: "menu-divider"
}, pc = {
  key: 1,
  class: "group-label"
}, mc = /* @__PURE__ */ dt({
  __name: "ActionMenu",
  props: {
    menuItems: {},
    label: { default: "Actions" },
    showLabel: { type: Boolean, default: !0 },
    icon: { default: () => ["fas", "ellipsis-v"] },
    placement: { default: "bottom-start" },
    closeOnLinkClick: { type: Boolean, default: !0 },
    offset: { default: 8 },
    menuId: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["action"],
  setup(e, { emit: n }) {
    const t = e, a = n, { isOpen: i, close: l, toggle: u } = uc(t.menuId), r = U(), c = U(), f = F(() => t.disabled), k = F(() => t.label), C = F(() => t.showLabel), L = F(() => t.icon), { floatingStyles: v } = Js(r, c, {
      placement: t.placement,
      whileElementsMounted: cl,
      middleware: [
        ol(t.offset),
        rl(),
        ul({ padding: 8 })
      ]
    }), $ = (O) => {
      if (!O) return ["fas", "question"];
      if (typeof O == "function" && (O = O(t)), Array.isArray(O))
        return O;
      if (typeof O == "string") {
        const H = O.split(" ");
        if (H.length >= 2) {
          const ue = H[0], le = H.slice(1).join("-").replace("fa-", "");
          return [ue, le];
        }
        return ["fas", O.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, G = F(() => $(L.value)), pe = (O) => typeof O.active == "function" ? O.active(t) : typeof O.active == "boolean" ? O.active : !1, R = (O) => {
      if (!O.href) return !1;
      try {
        const H = typeof O.href == "function" ? O.href(t) : O.href;
        return new URL(H, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, B = (O) => O.href ? "a" : "div", me = (O) => {
      const H = {};
      if (O.href) {
        const ue = typeof O.href == "function" ? O.href(t) : O.href;
        if (H.href = ue, R(O)) {
          const le = typeof O.target == "function" ? O.target(t) : O.target;
          H.target = le || "_blank", H.rel = O.rel || "noopener noreferrer";
        } else if (O.target) {
          const le = typeof O.target == "function" ? O.target(t) : O.target;
          H.target = le;
        }
        O.rel && (H.rel = O.rel);
      }
      return O.attrs && Object.assign(H, O.attrs), H;
    }, Q = F(() => t.menuItems.map((O) => {
      const H = { ...O };
      return typeof O.href == "function" && (H.href = O.href(t)), typeof O.icon == "function" && (H.icon = O.icon(t)), typeof O.disabled == "function" && (H.disabled = O.disabled(t)), typeof O.label == "function" && (H.label = O.label(t)), typeof O.variant == "function" && (H.variant = O.variant(t)), typeof O.active == "function" && (H.active = O.active(t)), typeof O.target == "function" && (H.target = O.target(t)), typeof O.show == "function" && (H.show = O.show(t)), H;
    })), y = (O) => {
      O.stopPropagation(), O.preventDefault(), !f.value && u();
    }, M = (O, H) => {
      if (H.stopPropagation(), O.disabled && !O.href) {
        H.preventDefault();
        return;
      }
      if (typeof O.action == "function" && O.action(O) === !1 && O.href) {
        H.preventDefault();
        return;
      }
      a("action", {
        id: O.id,
        item: O
      }), O.href && t.closeOnLinkClick ? l() : O.href || l();
    }, te = (O) => {
      const H = [];
      if (O.variant) {
        const le = typeof O.variant == "function" ? O.variant(t) : O.variant;
        H.push(`variant-${le}`);
      }
      if ((typeof O.disabled == "function" ? O.disabled(t) : O.disabled) && !O.href && H.push("disabled"), pe(O) && H.push("active"), O.href && H.push("menu-link"), R(O) && H.push("external-link"), O.class) {
        const le = typeof O.class == "function" ? O.class(t) : O.class;
        H.push(le);
      }
      return H.join(" ");
    }, D = (O) => {
      const H = O.target;
      i.value && r.value && c.value && !r.value.contains(H) && !c.value.contains(H) && l();
    }, W = (O) => {
      O.key === "Escape" && i.value && l();
    };
    return on(() => {
      document.addEventListener("click", D), document.addEventListener("keydown", W);
    }), za(() => {
      document.removeEventListener("click", D), document.removeEventListener("keydown", W);
    }), (O, H) => (I(), _("div", cc, [
      z("div", {
        ref_key: "trigger",
        ref: r,
        onClick: y,
        class: Ze(["actions-btn", { active: E(i), disabled: f.value }])
      }, [
        L.value ? (I(), Fe(E(ja), {
          key: 0,
          icon: G.value,
          class: "icon"
        }, null, 8, ["icon"])) : se("", !0),
        C.value ? (I(), _("span", {
          key: 1,
          class: "label",
          textContent: he(k.value)
        }, null, 8, dc)) : se("", !0)
      ], 2),
      (I(), Fe(Ka, { to: "body" }, [
        E(i) && !f.value ? (I(), _("div", {
          key: 0,
          ref_key: "floating",
          ref: c,
          style: _t(E(v)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: H[0] || (H[0] = Ln(() => {
          }, ["stop"]))
        }, [
          (I(!0), _(vt, null, Ft(Q.value, (ue, le) => (I(), _(vt, { key: le }, [
            ue.type === "divider" ? (I(), _("div", fc)) : ue.type === "group" ? (I(), _("div", pc, he(ue.label), 1)) : ue.show !== !1 ? (I(), Fe(qo(B(ue)), Gt({
              key: 2,
              ref_for: !0
            }, me(ue), {
              onClick: (ie) => M(ue, ie),
              id: ue.id,
              class: ["menu-item", te(ue)],
              disabled: ue.disabled && !ue.href
            }), {
              default: Xt(() => [
                ue.icon || pe(ue) ? (I(), Fe(E(ja), {
                  key: 0,
                  icon: pe(ue) ? ["fass", "check"] : $(ue.icon)
                }, null, 8, ["icon"])) : se("", !0),
                z("span", null, he(ue.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : se("", !0)
          ], 64))), 128))
        ], 4)) : se("", !0),
        E(i) && !f.value ? (I(), _("div", {
          key: 1,
          class: "backdrop",
          onClick: H[1] || (H[1] = //@ts-ignore
          (...ue) => E(l) && E(l)(...ue))
        })) : se("", !0)
      ]))
    ]));
  }
}), gc = {
  key: 0,
  class: "extras-price-display"
}, hc = { class: "extras-price-breakdown" }, vc = { class: "extras-price-rate" }, bc = {
  key: 0,
  class: "extras-price-label"
}, yc = {
  key: 1,
  class: "extras-price-op"
}, kc = {
  key: 0,
  class: "extras-price-total"
}, wc = /* @__PURE__ */ dt({
  __name: "ExtrasPriceDisplay",
  props: {
    pricePerUnit: { default: void 0 },
    quantity: { default: void 0 },
    quantityUnit: { default: "m" },
    priceLabel: { default: "" },
    formatPrice: { type: Function, default: void 0 }
  },
  setup(e) {
    const n = e, t = F(() => n.quantity !== void 0 && n.quantity > 0), a = (i) => n.formatPrice ? n.formatPrice(i) : i.toFixed(2);
    return (i, l) => e.pricePerUnit !== void 0 ? (I(), _("span", gc, [
      z("span", hc, [
        z("strong", vc, he(a(e.pricePerUnit)), 1),
        e.priceLabel ? (I(), _("span", bc, he(e.priceLabel), 1)) : se("", !0),
        t.value ? (I(), _("span", yc, " × " + he(e.quantity.toFixed(2)) + he(e.quantityUnit ? " " + e.quantityUnit : "") + " = ", 1)) : se("", !0)
      ]),
      t.value ? (I(), _("strong", kc, he(a(e.pricePerUnit * e.quantity)), 1)) : se("", !0)
    ])) : se("", !0);
  }
}), Sc = /* @__PURE__ */ Ht(wc, [["__scopeId", "data-v-2e4e7ac7"]]);
function zi(e) {
  const n = e.trim();
  if (n.startsWith("#")) {
    const t = n.slice(1);
    if (t.length === 3)
      return {
        r: parseInt(t[0] + t[0], 16),
        g: parseInt(t[1] + t[1], 16),
        b: parseInt(t[2] + t[2], 16)
      };
    if (t.length >= 6)
      return {
        r: parseInt(t.slice(0, 2), 16),
        g: parseInt(t.slice(2, 4), 16),
        b: parseInt(t.slice(4, 6), 16)
      };
  }
  if (n.startsWith("rgb")) {
    const t = n.match(/\d+/g);
    if (t && t.length >= 3)
      return { r: +t[0], g: +t[1], b: +t[2] };
  }
  return null;
}
function Pg(e, n) {
  const t = zi(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.55 ? "#000000" : "#ffffff" : "#000000";
}
function qs(e, n = 30, t = 75) {
  const a = zi(e);
  if (!a)
    return e;
  const i = Pc(a.r, a.g, a.b);
  if (i.l >= n && i.l <= t && i.s >= 25)
    return e;
  const u = Math.min(t, Math.max(n, i.l)), r = i.s < 25 ? 60 : i.s, [c, f, k] = Cc(i.h, r, u);
  return "#" + [c, f, k].map((C) => C.toString(16).padStart(2, "0")).join("");
}
function Cg(e) {
  const n = xc(e);
  return n === null ? "white" : n > 0.55 ? "#cc1f8c" : "white";
}
function xc(e) {
  const n = zi(e);
  return n ? (0.299 * n.r + 0.587 * n.g + 0.114 * n.b) / 255 : null;
}
function Pc(e, n, t) {
  const a = e / 255, i = n / 255, l = t / 255, u = Math.max(a, i, l), r = Math.min(a, i, l), c = (u + r) / 2;
  let f = 0, k = 0;
  if (u !== r) {
    const C = u - r;
    switch (k = c > 0.5 ? C / (2 - u - r) : C / (u + r), u) {
      case a:
        f = (i - l) / C + (i < l ? 6 : 0);
        break;
      case i:
        f = (l - a) / C + 2;
        break;
      case l:
        f = (a - i) / C + 4;
        break;
    }
    f *= 60;
  }
  return { h: f, s: k * 100, l: c * 100 };
}
function Cc(e, n, t) {
  n /= 100, t /= 100;
  const a = (1 - Math.abs(2 * t - 1)) * n, i = a * (1 - Math.abs(e / 60 % 2 - 1)), l = t - a / 2;
  let u = 0, r = 0, c = 0;
  return e >= 0 && e < 60 ? (u = a, r = i, c = 0) : e >= 60 && e < 120 ? (u = i, r = a, c = 0) : e >= 120 && e < 180 ? (u = 0, r = a, c = i) : e >= 180 && e < 240 ? (u = 0, r = i, c = a) : e >= 240 && e < 300 ? (u = i, r = 0, c = a) : e >= 300 && e < 360 && (u = a, r = 0, c = i), [
    Math.round((u + l) * 255),
    Math.round((r + l) * 255),
    Math.round((c + l) * 255)
  ];
}
const js = (e, n, t) => {
  if (n === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(e))
        return {
          value: e,
          valid: !1,
          message: "division_by_zero"
        };
      const a = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(e), i = al(e);
      return {
        value: e,
        valid: a || i
      };
    } else {
      const i = /^-?\d*\.?\d*$/.test(e);
      if (i && e !== "" && e !== "-" && e !== "." && !e.endsWith(".")) {
        const l = parseFloat(e);
        if (!isNaN(l))
          return {
            value: l,
            valid: !0
          };
      }
      return {
        value: e,
        // Keep as string for partial inputs
        valid: i
      };
    }
  if (n === "integer") {
    const i = /^-?\d*$/.test(e);
    if (i && e !== "" && e !== "-") {
      const l = parseInt(e, 10);
      if (!isNaN(l))
        return {
          value: l,
          valid: !0
        };
    }
    return {
      value: e,
      // Keep as string for partial inputs
      valid: i
    };
  }
  if (n === "float") {
    const i = /^-?\d*\.?\d*$/.test(e);
    if (i && e !== "" && e !== "-" && e !== "." && !e.endsWith(".")) {
      const l = parseFloat(e);
      if (!isNaN(l))
        return {
          value: l,
          valid: !0
        };
    }
    return {
      value: e,
      // Keep as string for partial inputs
      valid: i
    };
  }
  return { value: e, valid: !0 };
};
function Oc({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = U({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (r, c = !1) => {
    if (r == null || r === "") {
      const k = e.required && !e.disableRequiredValidation;
      return e.type === "string" ? k ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : or(r, "decimal", k);
    }
    const f = String(r);
    switch (e.type) {
      case "string":
        return { value: f, valid: !0 };
      case "unitDependent":
        if (c)
          return js(f, e.type, e.numberFormat);
        try {
          const k = ge({
            v: r,
            nf: e.numberFormat,
            dp: e.decimalPlaces,
            fr: e.fractionRoundTo
          });
          if (typeof k == "number") {
            let C = k, L = !0, v;
            return typeof e.min == "number" && C < e.min && (C = e.min, L = !1, v = "below_min"), typeof e.max == "number" && C > e.max && (C = e.max, L = !1, v = "above_max"), { value: C, valid: L, message: v };
          }
          return { value: k, valid: !0 };
        } catch (k) {
          return console.warn("Error converting value:", k), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (c)
          return js(f, e.type);
        try {
          const C = ge({
            v: r,
            nf: "decimal"
          });
          if (C === null)
            return e.required && !e.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let L = C;
          if (e.type === "integer" && (L = Math.round(L)), e.allowZero === !1 && L === 0)
            return {
              value: L,
              valid: !1,
              message: "zero_not_allowed"
            };
          let v = !0, $;
          return typeof e.min == "number" && L < e.min && (L = e.min, v = !1, $ = "below_min"), typeof e.max == "number" && L > e.max && (L = e.max, v = !1, $ = "above_max"), { value: L, valid: v, message: $ };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      default:
        return { value: r, valid: !0 };
    }
  }, l = (r, c = !1) => c && e.type === "unitDependent" && e.numberFormat === "fraction" ? !1 : c && (e.type === "integer" || e.type === "float" || e.type === "unitDependent" && e.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : !!(r.valid || r.message === "zero_not_allowed" || r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !e.disableRequiredValidation);
  return {
    state: a,
    ...{
      //Handler to set the flag on mouse down
      handleMouseDown: () => {
        t.value && (a.value.isMouseDown = !0);
      },
      //Handler to reset the flag on mouse up
      handleMouseUp: () => {
        t.value && (a.value.isMouseDown = !1);
      },
      handleInput: (r) => {
        if (!t.value) return;
        const c = r.target;
        if (a.value.isMouseDown) {
          const k = i(c.value, !1);
          l(k, !1) && (n("update:value", k.value), n("validation", k, e.id)), a.value.isMouseDown = !1;
          return;
        }
        a.value.isTyping = !0;
        const f = i(c.value, !0);
        n("validation", f, e.id), n("input", c.value), l(f, !0) && n("update:value", f.value);
      },
      handleBlur: (r) => {
        if (!t.value) return;
        a.value.isTyping = !1;
        const c = r.target, f = i(c.value, !1);
        n("validation", f, e.id), l(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? "")), n("blur", r);
      },
      handleFocus: (r) => {
        t.value && (a.value.isTyping = !0, n("focus", r));
      },
      handleKeydown: (r) => {
        if (t.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(r.key))
            if (e.type === "unitDependent" && e.numberFormat === "fraction") {
              const c = r.target, f = c.value, k = c.selectionStart || 0, C = f.substring(0, k);
              if (r.key === "/" && f.includes("/")) {
                r.preventDefault();
                return;
              }
              if (r.key === " " && /\s$/.test(C)) {
                r.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(r.key) || r.preventDefault();
            } else (e.type === "integer" || e.type === "float") && ((e.type === "integer" ? /^[-0-9]$/.test(r.key) : /^[-0-9.]$/.test(r.key)) || r.preventDefault());
          if (r.key === "Enter") {
            a.value.isTyping = !1;
            const c = r.target, f = i(c.value, !1);
            n("validation", f, e.id), l(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? "")), n("enter", f);
          }
          r.key === "Escape" && (a.value.isTyping = !1, n("escape"));
        }
      },
      // Better input pattern for HTML validation
      getInputPattern: () => {
        switch (e.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return e.numberFormat === "fraction" ? "-?([0-9]+( [0-9]+)?)?(/[0-9]+)?" : "-?[0-9]*\\.?[0-9]*";
          default:
            return;
        }
      },
      getInputMode: () => {
        switch (e.type) {
          case "integer":
            return "numeric";
          case "float":
            return "decimal";
          case "unitDependent":
            return e.numberFormat === "fraction" ? "numeric" : "decimal";
          default:
            return "text";
        }
      },
      handleCompositionStart: () => {
        a.value.isComposing = !0;
      },
      handleCompositionEnd: (r) => {
        a.value.isComposing = !1, a.value.isTyping = !1;
        const c = r.target, f = i(c.value, !1);
        n("validation", f, e.id), l(f) && (n("update:value", f.value), a.value.lastValidValue = String(f.value ?? ""));
      },
      handlePaste: (r) => {
        if (!t.value) return;
        const c = r.clipboardData?.getData("text")?.trim() || "";
        if (e.type === "unitDependent" && e.numberFormat === "fraction") {
          const f = c.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!al(f)) {
            r.preventDefault(), n("validation", {
              value: f,
              valid: !1,
              message: `Pasted text "${c}" is not a valid fraction format`
            }, e.id);
            return;
          }
          if (f !== c) {
            r.preventDefault();
            const k = r.target;
            k.value = f;
            const C = i(f, !0);
            n("validation", C, e.id), n("input", f);
          }
        }
        n("paste", r);
      }
    },
    processValue: i
  };
}
function Ic({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = U({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (l) => {
    if (!e?.output || e.output === "string")
      return {
        value: l,
        valid: !0
      };
    if (e.options && e.options.length > 0) {
      let u = l;
      return e.numberFormat && (e.numberFormat === "fraction" ? u = String(l) : u = Number(l)), e.options.some((c) => c.value === u) ? {
        value: u,
        valid: !0
      } : {
        value: u,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: l,
      valid: !0
    };
  };
  return {
    state: a,
    processValue: i,
    handleSelectChange: (l) => {
      if (!t.value) return;
      const u = l.target;
      if (e.multiEdit && u.value === " ") {
        n("update:value", null);
        return;
      }
      const r = i(u.value);
      n("validation", r, e.id), r.valid && n("update:value", r.value);
    }
  };
}
function Lc({
  props: e,
  emit: n,
  isMounted: t
}) {
  return {
    handleCheckboxChange: (a) => {
      if (!t.value) return;
      const l = a.target.checked ? e.trueValue : e.falseValue;
      if (l === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      n("update:value", l);
    },
    handleFocus: (a) => {
      t.value && n("focus", a);
    },
    handleBlur: (a) => {
      t.value && n("blur", a);
    }
  };
}
const Ec = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Fc = /* @__PURE__ */ dt({
  __name: "CheckBoxInput",
  props: {
    trueValue: {},
    falseValue: {},
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "input", "focus", "blur"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = U(!0), l = U(null), u = F(() => t.value === t.trueValue), {
      handleCheckboxChange: r,
      handleFocus: c,
      handleBlur: f
    } = Lc({
      props: t,
      emit: a,
      isMounted: i
    });
    return (k, C) => (I(), _("input", {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: l,
      type: "checkbox",
      checked: u.value,
      disabled: t.readonly || t.disabled,
      required: t.required,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onChange: C[0] || (C[0] = //@ts-ignore
      (...L) => E(r) && E(r)(...L)),
      onFocus: C[1] || (C[1] = //@ts-ignore
      (...L) => E(c) && E(c)(...L)),
      onBlur: C[2] || (C[2] = //@ts-ignore
      (...L) => E(f) && E(f)(...L))
    }, null, 40, Ec));
  }
}), Ac = ["for"], ma = /* @__PURE__ */ dt({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (I(), _("label", {
      for: e.id,
      class: "input-label"
    }, [
      Wt(n.$slots, "default", {}, () => [
        zt(he(e.label), 1)
      ])
    ], 8, Ac));
  }
}), Va = /* @__PURE__ */ new Set();
function Tc(e) {
  for (const n of Va)
    n !== e && n();
}
function hl(e, n, t = {}, a) {
  const i = U(null);
  if (a) {
    const k = () => {
      a.value && (a.value = !1);
    };
    Ke(a, (C) => {
      C ? (Tc(k), Va.add(k)) : Va.delete(k);
    }, { flush: "sync" }), Ha(() => {
      Va.delete(k);
    });
  }
  on(() => {
    const k = e.value;
    i.value = k?.closest("dialog") ?? k?.closest(".smartcut-content") ?? document.body;
  });
  const l = [
    ol(t.offsetPx ?? 4),
    rl({ padding: t.padding ?? 8 }),
    ul({ padding: t.padding ?? 8 })
  ];
  t.sizeApply && l.push(Qr({
    padding: t.padding ?? 8,
    apply: t.sizeApply
  })), t.extraMiddleware && l.push(...t.extraMiddleware);
  const { floatingStyles: u, isPositioned: r } = Js(e, n, {
    placement: t.placement ?? "bottom-start",
    strategy: "fixed",
    // Passing `open` lets floating-ui reset `isPositioned` to false when
    // the dropdown closes, so the next open starts hidden again until
    // the first middleware run resolves a position. Without this the
    // reveal-on-positioned trick below only works on the first open.
    open: a,
    // `animationFrame: true` runs the recompute on every rAF while the
    // dropdown is open, so the floating element tracks the trigger
    // smoothly during ancestor scrolls instead of lagging behind scroll
    // events. The per-frame work is fine — the dropdown is short-lived.
    whileElementsMounted: (k, C, L) => cl(k, C, L, { animationFrame: !0 }),
    // `transform: true` (the default) places the dropdown via
    // `transform: translate()`. We pair it with a short CSS transition
    // on transform in `useFloatingDropdownStyle` below so per-frame
    // position updates ease across small jumps instead of stuttering.
    transform: !0,
    middleware: l
  }), c = F(() => ({
    ...u.value,
    visibility: r.value ? "visible" : "hidden",
    opacity: r.value ? 1 : 0,
    transition: "opacity 80ms ease-out"
  }));
  function f() {
    if (!e.value || !n.value) return;
    const k = getComputedStyle(e.value), C = n.value;
    C.style.font = k.font, C.style.color = k.color;
  }
  return {
    floatingStyles: c,
    teleportTarget: i,
    syncFloatingFont: f
  };
}
const Nc = ["id", "disabled", "aria-label"], $c = { class: "multiselect__text" }, Mc = { class: "multiselect__list" }, Dc = ["checked", "disabled", "onChange"], _c = { class: "multiselect__option-label" }, Vc = {
  key: 0,
  class: "multiselect__no-results"
}, Bc = /* @__PURE__ */ dt({
  __name: "MultiselectInput",
  props: {
    id: {},
    name: {},
    value: {},
    options: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    ariaLabel: {},
    placeholder: {},
    searchable: { type: Boolean, default: !1 }
  },
  emits: ["update:value"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = U(!1), l = U(null), u = U(), r = U(), c = U(null), f = U(""), { floatingStyles: k, teleportTarget: C, syncFloatingFont: L } = hl(
      u,
      r,
      {
        sizeApply({ rects: Q, availableWidth: y, availableHeight: M, elements: te }) {
          const D = Q.reference.width, W = Math.min(y, Math.max(D, 400));
          Object.assign(te.floating.style, {
            maxHeight: `${Math.max(200, M)}px`,
            minWidth: `${D}px`,
            maxWidth: `${W}px`
          });
        }
      },
      i
    ), v = F(() => {
      const Q = t.value;
      return Q ? Array.isArray(Q) ? new Set(Q.map(String)) : new Set(String(Q).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), $ = F(() => t.options.map((Q) => ({
      value: Q.value,
      label: Q.label ?? String(Q.value),
      hidden: Q.hidden ?? !1,
      disabled: Q.disabled ?? !1
    }))), G = F(() => {
      if (!f.value) return $.value;
      const Q = f.value.toLowerCase();
      return $.value.filter(
        (y) => (y.label ?? String(y.value)).toLowerCase().includes(Q)
      );
    }), pe = F(() => {
      const Q = v.value.size;
      if (Q === 0) return t.placeholder || "All";
      if (Q === 1) {
        const y = [...v.value][0];
        return $.value.find((te) => String(te.value) === y)?.label || y;
      }
      return `${Q} selected`;
    });
    function R() {
      t.disabled || (i.value = !i.value, i.value && (f.value = "", Et(() => {
        L(), t.searchable && c.value?.focus();
      })));
    }
    function B(Q) {
      const y = String(Q), M = new Set(v.value);
      M.has(y) ? M.delete(y) : M.add(y), a("update:value", [...M]);
    }
    function me(Q) {
      const y = Q.target;
      l.value?.contains(y) || r.value?.contains(y) || (i.value = !1);
    }
    return on(() => document.addEventListener("click", me)), Ha(() => document.removeEventListener("click", me)), (Q, y) => (I(), _("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: l
    }, [
      z("button", {
        ref_key: "triggerRef",
        ref: u,
        type: "button",
        class: "multiselect__trigger",
        id: t.id,
        disabled: t.disabled,
        "aria-label": t.ariaLabel,
        onClick: R
      }, [
        z("span", $c, he(pe.value), 1)
      ], 8, Nc),
      (I(), Fe(Ka, {
        to: E(C),
        disabled: !E(C)
      }, [
        i.value ? (I(), _("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: r,
          class: "multiselect__dropdown",
          style: _t(E(k))
        }, [
          t.searchable ? Za((I(), _("input", {
            key: 0,
            ref_key: "searchRef",
            ref: c,
            "onUpdate:modelValue": y[0] || (y[0] = (M) => f.value = M),
            type: "text",
            class: "multiselect__search",
            placeholder: "Search...",
            onClick: y[1] || (y[1] = Ln(() => {
            }, ["stop"]))
          }, null, 512)), [
            [Qs, f.value]
          ]) : se("", !0),
          z("div", Mc, [
            (I(!0), _(vt, null, Ft(G.value, (M) => (I(), _("label", {
              key: M.value,
              class: Ze(["multiselect__option", { "multiselect__option--zero": M.hidden }])
            }, [
              z("input", {
                type: "checkbox",
                checked: v.value.has(String(M.value)),
                disabled: M.disabled,
                onChange: (te) => B(M.value)
              }, null, 40, Dc),
              z("span", _c, he(M.label), 1)
            ], 2))), 128)),
            t.searchable && G.value.length === 0 ? (I(), _("div", Vc, " No matches ")) : se("", !0)
          ])
        ], 4)) : se("", !0)
      ], 8, ["to", "disabled"]))
    ], 512));
  }
}), Rc = /* @__PURE__ */ Ht(Bc, [["__scopeId", "data-v-50e58ba3"]]), qc = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], jc = ["disabled", "selected"], Uc = {
  key: 0,
  value: " "
}, Gc = ["hidden", "value", "disabled"], Wc = /* @__PURE__ */ dt({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    numberFormat: {},
    output: {},
    text: {},
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "focus", "blur", "validation"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = U(!0), l = U(null), u = F(() => t.options.map((c) => ({
      value: c.value,
      label: c.label?.toUpperCase() ?? c.value?.toString()?.toUpperCase(),
      hidden: c.hidden ?? !1,
      disabled: c.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = Ic({
      props: t,
      emit: a,
      isMounted: i
    });
    return (c, f) => (I(), _("select", Gt(c.$attrs, {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: l,
      value: t.value,
      disabled: t.readonly || t.disabled,
      required: t.required,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...k) => E(r) && E(r)(...k))
    }), [
      z("option", {
        value: "",
        disabled: t.selectFirstOptionDisabled,
        selected: !t.value
      }, he(t.text?.select?.toUpperCase() ?? "SELECT"), 9, jc),
      t.multiEdit ? (I(), _("option", Uc, he(t.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : se("", !0),
      (I(!0), _(vt, null, Ft(u.value, (k) => (I(), _("option", {
        key: k.value,
        hidden: k.hidden,
        value: k.value,
        disabled: k.disabled
      }, he(k.label), 9, Gc))), 128))
    ], 16, qc));
  }
}), zc = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Ba = /* @__PURE__ */ dt({
  __name: "TextInput",
  props: {
    type: {},
    inputType: {},
    inputMode: {},
    placeholder: {},
    focus: { type: Boolean },
    allowZero: { type: Boolean },
    min: {},
    max: {},
    default: {},
    debounceMs: {},
    numberFormat: {},
    autocomplete: {},
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {},
    disableRequiredValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = U(!0), l = U(null), {
      handleInput: u,
      handleMouseDown: r,
      handleMouseUp: c,
      handleFocus: f,
      handleBlur: k,
      handleKeydown: C,
      handleCompositionStart: L,
      handleCompositionEnd: v,
      handlePaste: $
    } = Oc({
      props: t,
      emit: a,
      isMounted: i
    }), G = (pe) => {
      const R = pe.getBoundingClientRect(), B = window.getComputedStyle(pe);
      return R.width > 0 && R.height > 0 && B.display !== "none" && B.visibility !== "hidden";
    };
    return on(() => {
      gt(t.default) && (t.value === void 0 || t.value === null) && a("update:value", t.default), t.focus && l.value && G(l.value) && Et(() => l.value.focus());
    }), za(() => {
      i.value = !1;
    }), (pe, R) => (I(), _("input", Gt(pe.$attrs, {
      id: t.id,
      name: t.name || t.id,
      ref_key: "inputRef",
      ref: l,
      value: t.value,
      inputmode: t.inputMode,
      type: t.inputType,
      placeholder: t.placeholder,
      disabled: t.disabled,
      default: t.default,
      readonly: t.readonly,
      min: t.min,
      max: t.max,
      autocomplete: t.autocomplete,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onInput: R[0] || (R[0] = //@ts-ignore
      (...B) => E(u) && E(u)(...B)),
      onFocus: R[1] || (R[1] = //@ts-ignore
      (...B) => E(f) && E(f)(...B)),
      onBlur: R[2] || (R[2] = //@ts-ignore
      (...B) => E(k) && E(k)(...B)),
      onKeydown: R[3] || (R[3] = //@ts-ignore
      (...B) => E(C) && E(C)(...B)),
      onCompositionstart: R[4] || (R[4] = //@ts-ignore
      (...B) => E(L) && E(L)(...B)),
      onCompositionend: R[5] || (R[5] = //@ts-ignore
      (...B) => E(v) && E(v)(...B)),
      onPaste: R[6] || (R[6] = //@ts-ignore
      (...B) => E($) && E($)(...B)),
      onMousedown: R[7] || (R[7] = //@ts-ignore
      (...B) => E(r) && E(r)(...B)),
      onMouseup: R[8] || (R[8] = //@ts-ignore
      (...B) => E(c) && E(c)(...B))
    }), null, 16, zc));
  }
}), Kc = ["data-field-id"], Hc = {
  key: 0,
  class: "input-label-group"
}, Zc = {
  key: 1,
  class: "password-input-wrapper"
}, Jc = ["aria-label"], Qc = {
  key: 2,
  class: "clearable-input-wrapper"
}, Yc = ["aria-label"], Xc = ["disabled", "selected"], ed = {
  key: 0,
  value: " "
}, td = ["hidden", "value", "disabled"], nd = ["id", "name", "value", "disabled"], ad = {
  key: 7,
  class: "slider-wrapper"
}, id = ["id", "name", "value", "min", "max", "step", "disabled", "readonly"], sd = ["for"], ld = {
  key: 8,
  class: "clearable-input-wrapper clearable-input-wrapper--textarea"
}, od = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], rd = ["aria-label"], ud = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], cd = {
  key: 2,
  class: "help-text"
}, dd = /* @__PURE__ */ dt({
  inheritAttrs: !1,
  __name: "InputField",
  props: {
    value: { default: null },
    id: { default: "" },
    name: { default: void 0 },
    type: { default: "string" },
    focus: { type: Boolean, default: !1 },
    label: { default: "" },
    enableLabel: { type: Boolean, default: !0 },
    labelPosition: { default: "first" },
    output: { default: null },
    options: { default: () => [] },
    selectFirstOptionDisabled: { type: Boolean, default: !0 },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    allowZero: { type: Boolean, default: !0 },
    trueValue: { default: !0 },
    falseValue: { default: !1 },
    default: { default: null },
    numberFormat: { default: "decimal" },
    shouldConvertNumberFormat: { type: Boolean, default: !0 },
    min: { default: null },
    max: { default: null },
    custom: { type: Boolean, default: !1 },
    multiEdit: { type: Boolean, default: !1 },
    text: { default: () => ({ select: "Select", delete: "Delete" }) },
    issue: { type: Boolean, default: !1 },
    warning: { type: Boolean, default: !1 },
    additional: {},
    debounceMs: {},
    inputClasses: {},
    ariaLabel: {},
    autocomplete: { default: void 0 },
    searchable: { type: Boolean, default: !1 },
    disableRequiredValidation: { type: Boolean, default: !1 },
    rows: { default: 3 },
    info: { default: "" },
    step: {},
    clearable: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "validation", "blur"],
  setup(e, { emit: n }) {
    const t = n, a = e, i = U(null), l = U(null), u = U(!0), r = U(a.numberFormat), c = U(!1), f = F(() => a.custom ? "custom-" + a.id : a.id), k = F(() => `${f.value}-error`), C = F(() => a.label || a.placeholder), L = F(() => Ye(a.type, a.numberFormat, c.value)), v = F(() => V(a.type, a.numberFormat)), $ = F(() => typeof a.value == "string" && a.value.length > 0), G = F(() => $.value ? qs(a.value) : "#ffffff"), pe = (ne) => {
      const be = ne.target.value;
      t("update:value", qs(be));
    }, R = () => {
      t("update:value", null);
    }, B = F(() => {
      const ne = a.value;
      if (typeof ne == "number" && Number.isFinite(ne)) return ne;
      const be = parseFloat(ne);
      return Number.isFinite(be) ? be : typeof a.min == "number" ? a.min : 0;
    }), me = (ne) => {
      const be = ne.target.value, Te = parseFloat(be);
      t("update:value", Number.isFinite(Te) ? Te : null);
    }, Q = F(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(a.type)), y = F(() => a.value !== null && a.value !== void 0 && a.value !== "");
    function M() {
      const ne = Q.value && ["integer", "float", "unitDependent"].includes(a.type) ? null : "";
      t("update:value", ne);
    }
    const te = F(() => {
      let ne = a.value;
      if (a.multiEdit && (ne === 0 || ne === 1)) return null;
      if (a.type !== "unitDependent" || !ne) return ne;
      try {
        return ge({ v: ne, nf: a.numberFormat });
      } catch {
        return a.numberFormat === "decimal" ? 0 : "0";
      }
    }), D = F(() => a.options.map((ne) => ({
      value: ne.value,
      label: ne.label || ne.value?.toString(),
      hidden: ne.hidden || !1,
      disabled: ne.disabled || !1
    }))), W = F(() => D.value.map((ne) => {
      const be = ne.label ? Ee(ne.label) : ne.value?.toString();
      return {
        ...ne,
        // Translate the label key first, then uppercase the translated result
        label: be?.toUpperCase() || ne.value?.toString().toUpperCase()
      };
    })), O = F(() => ({
      input: !0,
      issue: a.issue || !u.value,
      warning: a.warning,
      required: a.required,
      disabled: a.disabled
    })), H = F(() => ({
      id: f.value,
      name: a.name,
      value: a.value,
      disabled: a.disabled,
      readonly: a.readonly,
      required: a.required,
      "aria-label": C.value,
      "aria-invalid": !!a.issue,
      "aria-describedby": a.issue ? k.value : void 0
    })), ue = F(() => ({
      ...H.value,
      type: a.type,
      inputMode: v.value,
      inputType: L.value,
      placeholder: a.placeholder,
      allowZero: a.allowZero,
      min: a.min,
      max: a.max,
      focus: a.focus,
      numberFormat: a.numberFormat,
      default: a.default,
      disableRequiredValidation: a.disableRequiredValidation,
      autocomplete: a.autocomplete
    })), le = F(() => ({
      ...H.value,
      trueValue: a.trueValue,
      falseValue: a.falseValue
    })), ie = F(() => ({
      ...H.value,
      options: W.value,
      selectFirstOptionDisabled: a.selectFirstOptionDisabled,
      multiEdit: a.multiEdit,
      numberFormat: a.numberFormat,
      text: a.text,
      output: a.output
    })), Ue = F(() => (a.text?.select || "SELECT").toUpperCase()), Ge = F(() => (a.text?.delete || "DELETE").toUpperCase()), Pe = (ne) => {
      l.value = ne;
    }, ke = (ne) => a.label && a.enableLabel && a.labelPosition === ne, Ye = (ne, be, Te) => {
      switch (ne) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return be === "fraction" ? "text" : "number";
        case "password":
          return Te ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, V = (ne, be) => {
      if (ne === "unitDependent")
        return be === "fraction" ? "text" : "decimal";
      switch (ne) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "email":
          return "email";
        case "tel":
          return "tel";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, Z = (ne) => {
      t("update:value", ne);
    }, Se = (ne, be) => {
      ne.valid === void 0 || ne.valid === !0 ? (u.value = !0, t("validation", i.value, ne)) : ne.valid === !1 && ne.message && (u.value = !1, console.warn(`Field validation error for field ${be} - ${ne.message}`), t("validation", i.value, ne));
    }, $e = () => {
      t("blur");
    };
    return Ke(() => a.numberFormat, (ne, be) => {
      if (a.shouldConvertNumberFormat !== !1) {
        if (a.type === "unitDependent" && ne !== be && a.value !== null && a.value !== void 0 && a.value !== "")
          try {
            const Te = ge({ v: a.value, nf: ne });
            t("update:value", Te);
          } catch {
            t("update:value", ne === "decimal" ? 0 : "0");
          }
        r.value = ne;
      }
    }), (ne, be) => (I(), _("div", {
      ref_key: "fieldRef",
      ref: i,
      class: Ze(["input-wrapper", [O.value, ne.$attrs.class]]),
      "data-field-id": f.value
    }, [
      e.type === "checkbox" ? (I(), _("div", Hc, [
        ke("first") ? (I(), Fe(ma, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: Xt(() => [
            Wt(ne.$slots, "label", {}, () => [
              zt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : se("", !0),
        e.type === "checkbox" ? (I(), Fe(Fc, Gt({
          key: 1,
          ref: Pe,
          type: "checkbox"
        }, le.value, {
          value: e.value,
          "onUpdate:value": be[0] || (be[0] = (Te) => t("update:value", Te))
        }), null, 16, ["value"])) : se("", !0),
        ke("last") ? (I(), Fe(ma, {
          key: 2,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: Xt(() => [
            Wt(ne.$slots, "label", {}, () => [
              zt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : se("", !0)
      ])) : (I(), _(vt, { key: 1 }, [
        ke("first") ? (I(), Fe(ma, {
          key: 0,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: Xt(() => [
            Wt(ne.$slots, "label", {}, () => [
              zt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : se("", !0),
        e.type === "password" ? (I(), _("div", Zc, [
          lt(Ba, Gt({ ref: Pe }, ue.value, {
            name: a.name,
            "input-type": L.value,
            "input-mode": v.value,
            value: te.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: Se,
            "onUpdate:value": Z,
            onBlur: $e
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          z("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": c.value ? "Hide password" : "Show password",
            onClick: be[1] || (be[1] = (Te) => c.value = !c.value)
          }, he(c.value ? "🙈" : "👁"), 9, Jc)
        ])) : Q.value && e.clearable ? (I(), _("div", Qc, [
          lt(Ba, Gt({ ref: Pe }, ue.value, {
            name: a.name,
            "input-type": L.value,
            "input-mode": v.value,
            value: te.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: Se,
            "onUpdate:value": Z,
            onBlur: $e
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          y.value && !e.disabled && !e.readonly ? (I(), _("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": E(Ee)("actions.clear"),
            title: "Clear",
            onClick: M
          }, "×", 8, Yc)) : se("", !0)
        ])) : Q.value ? (I(), Fe(Ba, Gt({
          key: 3,
          ref: Pe
        }, ue.value, {
          name: a.name,
          "input-type": L.value,
          "input-mode": v.value,
          value: te.value,
          "disable-required-validation": e.disableRequiredValidation,
          onValidation: Se,
          "onUpdate:value": Z,
          onBlur: $e
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : e.type === "select" ? (I(), Fe(Wc, Gt({
          key: 4,
          ref: Pe
        }, ie.value, {
          name: a.name,
          "onUpdate:value": be[2] || (be[2] = (Te) => t("update:value", Te))
        }), {
          default: Xt(() => [
            z("option", {
              value: "",
              disabled: e.selectFirstOptionDisabled,
              selected: !e.value
            }, he(Ue.value), 9, Xc),
            e.multiEdit ? (I(), _("option", ed, he(Ge.value), 1)) : se("", !0),
            (I(!0), _(vt, null, Ft(W.value, (Te) => (I(), _("option", {
              key: Te.value,
              hidden: Te.hidden,
              value: Te.value,
              disabled: Te.disabled
            }, he(Te.label), 9, td))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : e.type === "multiselect" ? (I(), Fe(Rc, {
          key: 5,
          ref: Pe,
          id: f.value,
          name: a.name,
          value: e.value,
          options: D.value,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": C.value,
          placeholder: e.placeholder,
          searchable: a.searchable,
          "onUpdate:value": be[3] || (be[3] = (Te) => t("update:value", Te))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : e.type === "color" ? (I(), _("input", {
          key: 6,
          id: f.value,
          name: a.name || f.value,
          ref: Pe,
          type: "color",
          value: G.value,
          class: Ze({ "color-input--empty": !$.value }),
          disabled: e.disabled,
          onChange: pe,
          onContextmenu: Ln(R, ["prevent"])
        }, null, 42, nd)) : e.type === "slider" ? (I(), _("div", ad, [
          z("input", {
            id: f.value,
            name: a.name || f.value,
            ref: Pe,
            type: "range",
            class: "slider-input",
            value: B.value,
            min: a.min ?? 0,
            max: a.max ?? 100,
            step: a.step ?? 1,
            disabled: e.disabled,
            readonly: e.readonly,
            onInput: me
          }, null, 40, id),
          z("output", {
            class: "slider-output",
            for: f.value
          }, he(B.value), 9, sd)
        ])) : e.type === "textarea" && e.clearable ? (I(), _("div", ld, [
          z("textarea", {
            id: f.value,
            name: a.name || f.value,
            ref: Pe,
            value: e.value,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            autocomplete: e.autocomplete,
            onInput: be[4] || (be[4] = (Te) => t("update:value", Te.target.value)),
            onBlur: $e
          }, null, 40, od),
          y.value && !e.disabled && !e.readonly ? (I(), _("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": E(Ee)("actions.clear"),
            title: "Clear",
            onClick: M
          }, "×", 8, rd)) : se("", !0)
        ])) : e.type === "textarea" ? (I(), _("textarea", {
          key: 9,
          id: f.value,
          name: a.name || f.value,
          ref: Pe,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          rows: e.rows,
          autocomplete: e.autocomplete,
          onInput: be[5] || (be[5] = (Te) => t("update:value", Te.target.value)),
          onBlur: $e
        }, null, 40, ud)) : se("", !0),
        ke("last") ? (I(), Fe(ma, {
          key: 10,
          id: f.value,
          label: e.label,
          required: e.required
        }, {
          default: Xt(() => [
            Wt(ne.$slots, "label", {}, () => [
              zt(he(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : se("", !0)
      ], 64)),
      e.info ? (I(), _("small", cd, he(e.info), 1)) : se("", !0),
      Wt(ne.$slots, "default", {}, void 0, !0)
    ], 10, Kc));
  }
}), ga = /* @__PURE__ */ Ht(dd, [["__scopeId", "data-v-0c816cd2"]]), fd = {
  key: 0,
  class: "loading-spinner__label"
}, pd = /* @__PURE__ */ dt({
  __name: "LoadingSpinner",
  props: {
    size: { default: "medium" },
    label: { default: "" },
    block: { type: Boolean, default: !1 },
    fullPage: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (I(), _("div", {
      class: Ze(["loading-spinner", [
        `loading-spinner--${e.size}`,
        {
          "loading-spinner--block": e.block || e.fullPage,
          "loading-spinner--full-page": e.fullPage
        }
      ]]),
      role: "status",
      "aria-live": "polite"
    }, [
      t[0] || (t[0] = z("span", {
        class: "loading-spinner__circle",
        "aria-hidden": "true"
      }, null, -1)),
      e.label ? (I(), _("span", fd, he(e.label), 1)) : se("", !0)
    ], 2));
  }
}), vl = /* @__PURE__ */ Ht(pd, [["__scopeId", "data-v-ef6d8370"]]), md = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: !0
    },
    paths: {
      type: Array,
      required: !0
    },
    root: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      default: ""
    },
    ancestors: {
      type: Object,
      default: () => /* @__PURE__ */ new Set()
    }
  },
  data() {
    return {
      expanded: {},
      hasScroll: !1,
      atBottom: !0
    };
  },
  computed: {
    childAncestors() {
      const e = new Set(this.ancestors);
      for (const n of this.data)
        n && typeof n == "object" && e.add(n);
      return e;
    }
  },
  created() {
    this.data.forEach((e, n) => {
      this.expanded[n] = this.root || this.data.length === 1;
    });
  },
  mounted() {
    this.$nextTick(() => this.checkScroll());
  },
  methods: {
    checkScroll() {
      const e = this.$refs.container;
      e && (this.hasScroll = e.scrollHeight > e.clientHeight, this.atBottom = e.scrollTop + e.clientHeight >= e.scrollHeight - 10);
    },
    handleScroll() {
      this.checkScroll();
    },
    toggle(e) {
      this.expanded[e] = !this.expanded[e], this.$nextTick(() => this.checkScroll());
    },
    copyToClipboard(e, n) {
      const t = JSON.stringify({ [n]: e }, null, 2);
      navigator.clipboard.writeText(t);
    },
    getValueType(e) {
      return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
    },
    isObjectOrArray(e) {
      return e && typeof e == "object";
    },
    isSimpleArray(e) {
      return Array.isArray(e) && e.every((n) => !n || typeof n != "object");
    },
    getArrayPaths(e, n) {
      return Array.isArray(e) ? e.map((t, a) => a) : [n];
    },
    formatValue(e) {
      return e === null ? "null" : e === void 0 ? "undefined" : typeof e == "boolean" ? e.toString() : typeof e != "object" ? typeof e == "string" ? `'${e}'` : String(e) : "";
    }
  }
}, gd = {
  key: 0,
  class: "title"
}, hd = ["onClick"], vd = { class: "ov-label" }, bd = {
  key: 0,
  class: "ov-count"
}, yd = ["onClick"], kd = { class: "ov-body" }, wd = {
  key: 0,
  class: "ov-row"
}, Sd = { class: "ov-key" }, xd = ["onClick"], Pd = {
  key: 0,
  class: "ov-inline-array"
}, Cd = ["onClick"], Od = {
  key: 2,
  class: "ov-circular"
}, Id = {
  key: 3,
  class: "ov-null"
}, Ld = { key: 4 };
function Ed(e, n, t, a, i, l) {
  const u = Qn("ObjectViewer", !0);
  return I(), _("div", {
    ref: "container",
    class: Ze(["smartcut-object-viewer main", { "has-scroll": i.hasScroll, "at-bottom": i.atBottom }]),
    onScroll: n[0] || (n[0] = (...r) => l.handleScroll && l.handleScroll(...r))
  }, [
    t.title ? (I(), _("div", gd, he(t.title), 1)) : se("", !0),
    (I(!0), _(vt, null, Ft(t.data, (r, c) => (I(), _("div", {
      key: c,
      class: "ov-node"
    }, [
      z("div", {
        class: "ov-header",
        onClick: (f) => l.toggle(c)
      }, [
        (I(), _("svg", {
          class: Ze(["ov-chevron", { "is-open": i.expanded[c] }]),
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, [...n[1] || (n[1] = [
          z("path", {
            d: "M3 1 L7 5 L3 9",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])], 2)),
        z("span", vd, he(t.paths[c] ?? c), 1),
        l.isObjectOrArray(r) ? (I(), _("span", bd, he(Object.keys(r).length), 1)) : se("", !0),
        z("span", {
          class: "ov-copy",
          title: "Copy as JSON",
          onClick: Ln((f) => l.copyToClipboard(r, t.paths[c] ?? c), ["stop"])
        }, [...n[2] || (n[2] = [
          z("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            z("rect", {
              x: "5",
              y: "5",
              width: "9",
              height: "9",
              rx: "1"
            }),
            z("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
          ], -1)
        ])], 8, yd)
      ], 8, hd),
      Za(z("div", kd, [
        l.isObjectOrArray(r) ? (I(!0), _(vt, { key: 1 }, Ft(r, (f, k) => (I(), _("div", {
          key: k,
          class: "ov-row"
        }, [
          z("span", Sd, he(k) + ":", 1),
          l.isObjectOrArray(f) && f !== null && !l.isSimpleArray(f) ? (I(), _("span", {
            key: 0,
            class: "ov-copy ov-copy-inline",
            title: "Copy all as JSON",
            onClick: (C) => l.copyToClipboard(f, k)
          }, [...n[3] || (n[3] = [
            z("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              z("rect", {
                x: "5",
                y: "5",
                width: "9",
                height: "9",
                rx: "1"
              }),
              z("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
            ], -1)
          ])], 8, xd)) : se("", !0),
          z("span", {
            class: Ze(["ov-val", l.getValueType(f)])
          }, [
            l.isSimpleArray(f) ? (I(), _("span", Pd, [
              zt(" [" + he(f.map((C) => l.formatValue(C)).join(", ")) + "] ", 1),
              z("span", {
                class: "ov-copy ov-copy-inline",
                title: "Copy as JSON",
                onClick: (C) => l.copyToClipboard(f, k)
              }, [...n[4] || (n[4] = [
                z("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  z("rect", {
                    x: "5",
                    y: "5",
                    width: "9",
                    height: "9",
                    rx: "1"
                  }),
                  z("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
                ], -1)
              ])], 8, Cd)
            ])) : l.isObjectOrArray(f) && f !== null && !l.childAncestors.has(f) ? (I(), Fe(u, {
              key: 1,
              data: Array.isArray(f) ? f : [f],
              paths: l.getArrayPaths(f, k),
              root: !1,
              ancestors: l.childAncestors
            }, null, 8, ["data", "paths", "ancestors"])) : l.isObjectOrArray(f) && f !== null ? (I(), _("span", Od, "[Circular]")) : f === null ? (I(), _("span", Id, "null")) : (I(), _("span", Ld, he(l.formatValue(f)), 1))
          ], 2)
        ]))), 128)) : (I(), _("div", wd, [
          z("span", {
            class: Ze(["ov-val", l.getValueType(r)])
          }, he(l.formatValue(r)), 3)
        ]))
      ], 512), [
        [Ys, i.expanded[c]]
      ])
    ]))), 128))
  ], 34);
}
const bl = /* @__PURE__ */ Ht(md, [["render", Ed]]), Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bl }, Symbol.toStringTag, { value: "Module" })), Ad = {
  key: 0,
  class: "action-bar"
}, Td = { class: "add-custom" }, Nd = ["disabled"], $d = {
  key: 0,
  class: "extras-row"
}, Md = { class: "c-field-action extras-field-group" }, Dd = ["disabled", "title", "onClick"], _d = {
  key: 0,
  class: "price"
}, Vd = {
  key: 0,
  class: "formula-price"
}, Bd = {
  key: 0,
  class: "price-label"
}, Rd = /* @__PURE__ */ dt({
  __name: "ExtrasInputs",
  props: {
    translate: { type: Boolean, default: !0 },
    shape: {},
    shapeIndex: { default: 0 },
    extraType: {},
    extraLabel: {},
    allOptions: {},
    labels: {},
    userFriendlyFieldMap: {},
    partColumns: {},
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    allowCustomNames: { type: Boolean, default: !1 },
    customNames: { default: () => [] },
    usedNames: { default: () => [] },
    existingTypes: {},
    enablePricing: { type: Boolean, default: !0 },
    priceLabel: { default: "" },
    pricing: { default: () => ({}) },
    formulas: { default: () => ({}) },
    displayNames: { default: () => ({}) },
    locations: { default: () => [] },
    locationGroups: { default: () => [] },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {},
    findExtrasPrice: {},
    debug: { type: Boolean, default: !1 },
    catalogueKey: { default: "" },
    catalogueExtraId: { default: "" },
    extraName: { default: "" },
    pricePerLength: { default: void 0 },
    catalogueMaxGap: { default: void 0 },
    cataloguePerSide: { type: Boolean, default: !1 },
    codes: { default: void 0 }
  },
  emits: ["update-all", "set", "custom-name-added", "custom-name-deleted"],
  setup(e, { emit: n }) {
    const t = qt({
      loader: () => import("./CatalogueBandingExtra-Dod1wgGK.js"),
      loadingComponent: () => Uo(vl, { size: "small", label: "Loading banding…" }),
      delay: 200
    }), a = !1, i = e, l = F(() => (i.extraType === "banding" || i.extraType === "finish" || i.extraType === "planing") && !!i.catalogueKey), u = n, {
      mode: r,
      shouldShowAll: c,
      supportsFaces: f,
      supportsSides: k,
      canDelete: C,
      getLocationLabel: L,
      getInputType: v,
      getInputConfigForLocation: $,
      getSelectOptions: G,
      getPriceDisplay: pe,
      getCalculatedPrice: R,
      shouldShowDeleteButton: B,
      getLocationGroup: me,
      isLocationVisible: Q,
      handleInputChange: y,
      handleDelete: M
    } = du({
      shape: jt(i, "shape"),
      extraType: i.extraType,
      allOptions: jt(i, "allOptions"),
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: jt(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      displayNames: jt(i, "displayNames"),
      orientationModel: i.orientationModel,
      stockGrain: i.stockGrain,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: jt(i, "locations"),
      locationGroups: jt(i, "locationGroups")
    }), {
      newCustomName: te,
      canAddCustomName: D,
      isActionMenuDisabled: W,
      customNameActions: O,
      handleAddCustomName: H,
      handleCustomNameAction: ue
    } = uu({
      extraType: i.extraType,
      customNames: jt(i, "customNames"),
      usedNames: jt(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: G,
      onCustomNameAdded: (Y) => u("custom-name-added", i.extraType, Y),
      onCustomNameDeleted: (Y) => u("custom-name-deleted", i.extraType, Y)
    }), {
      renderLocations: le,
      getInputId: ie,
      getDeleteConfig: Ue
    } = cu({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      shouldShowAll: c,
      getInputType: v,
      getInputConfig: (Y, Oe) => $(Y, Oe),
      getAllInputConfig: (Y) => $("all", Y),
      getInputConfigForLocation: $,
      canDelete: C,
      getLocationLabel: L,
      shouldShowDeleteButton: B,
      locations: jt(i, "locations"),
      locationGroups: jt(i, "locationGroups"),
      shape: jt(i, "shape"),
      orientationModel: i.orientationModel
    }), Ge = U(!1), Pe = U(null), ke = U("auto"), Ye = F(() => `${le.value.filter((Oe) => Q(Oe)).map((Oe) => L(Oe)).join("|")}::${JSON.stringify(i.allOptions)}`), V = (Y) => [...Y.querySelectorAll(":scope > .c-field-action > .input-wrapper")], Z = async () => {
      const Y = Pe.value;
      if (!Y) return;
      const Oe = [...Y.querySelectorAll(".extras-row")];
      ke.value = "auto", Oe.forEach((ut) => V(ut).forEach((ft) => ft.style.removeProperty("--col-w"))), await Et();
      let je = 0;
      Y.querySelectorAll(".extras-location-label").forEach((ut) => {
        je = Math.max(je, ut.offsetWidth);
      }), je > 0 && (ke.value = `${Math.ceil(je)}px`);
      const Ce = [], et = Oe.map(V);
      et.forEach((ut) => ut.forEach((ft, it) => {
        Ce[it] = Math.max(Ce[it] ?? 0, ft.offsetWidth);
      })), et.forEach((ut) => ut.forEach((ft, it) => {
        ft.style.setProperty("--col-w", `${Math.ceil(Ce[it])}px`);
      }));
    };
    Ke(Ye, () => {
      Z();
    }, { flush: "post" });
    const Se = F(() => (Y) => {
      const Oe = me(Y);
      return Oe === "all" || Oe === "faces" || Oe === "sides";
    }), $e = F(() => (Y) => zn(i.extraType).includes(Y) ? ha(Y) === "face" : !1), ne = F(() => (Y) => zn(i.extraType).includes(Y) ? ha(Y) === "side" : !1), be = (Y) => {
      const Oe = pe(Y);
      return !!Oe && Oe !== "N/A";
    };
    function Te(Y) {
      const je = i.shape?.extras?.[i.extraType];
      if (!je) return null;
      if (Y.startsWith("side.")) {
        const Ce = Y.replace(/^side\./, ""), et = je.sides?.[Ce];
        return typeof et == "string" && et ? et : null;
      }
      if (Y.startsWith("face.")) {
        const Ce = Y.replace(/^face\./, ""), et = je.faces?.[Ce];
        return typeof et == "string" && et ? et : null;
      }
      return null;
    }
    const Je = (Y) => {
      const Oe = Te(Y);
      if (!Oe) return null;
      const je = i.formulas?.[Oe];
      if (!je) return null;
      const Ce = Number(i.shape?.l) || 0, et = Number(i.shape?.w) || 0, ut = Number(i.shape?.t) || 0, ft = Number(i.shape?.q) || 1, it = { partL: Ce, partW: et, partT: ut, partQuantity: ft }, st = {}, At = i.extraType === "banding" ? Qu : i.extraType === "finish" ? nc : i.extraType === "planing" ? oc : [];
      for (const tt of At)
        tt.startsWith("order.") && (st[tt] = 0);
      if (i.extraType === "banding" && Y.startsWith("side.")) {
        const tt = Y.replace(/^side\./, "");
        return qu(Uu(tt, tt === "l1" || tt === "l2" ? Ce : et, it, st), je);
      }
      if (i.extraType === "finish" && Y.startsWith("face.")) {
        const tt = Y.replace(/^face\./, "");
        return ju(Gu(tt, Ce * et, it, st), je);
      }
      if (i.extraType === "planing") {
        if (Y.startsWith("face.")) {
          const tt = Y.replace(/^face\./, "");
          return Vs(Bs(`face.${tt}`, Ce * et, 0, 1, it, st), je);
        }
        if (Y.startsWith("side.")) {
          const tt = Y.replace(/^side\./, ""), cn = tt === "l1" || tt === "l2" ? Ce : et;
          return Vs(Bs(`side.${tt}`, 0, cn, 0, it, st), je);
        }
      }
      return null;
    }, wt = (Y) => {
      const Oe = Je(Y);
      return typeof Oe == "number" && Number.isFinite(Oe);
    }, Xe = (Y) => i.formatPrice ? i.formatPrice(Y) : Y.toFixed(2), un = (Y) => {
      const Oe = R(Y);
      return typeof Oe == "number" && Number.isFinite(Oe) ? Oe : void 0;
    }, Bt = (Y) => {
      if (zn(i.extraType).includes(Y))
        return Ss(i.shape, Y).quantity;
    }, yn = (Y) => zn(i.extraType).includes(Y) ? Ss(i.shape, Y).unit : "m", rt = F(() => (Y) => i.shape.issues?.some((Oe) => Oe.category?.includes("extras") && Oe.field?.some((je) => je[0] === "extras" && je[1] === i.extraType && je[2] === Y)) ?? !1);
    return on(() => {
      const Oe = i.shape.extras?.[i.extraType];
      if (!Oe || typeof Oe != "object") {
        Ge.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (f.value && !("faces" in Oe)) {
        Ge.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (k.value && !("sides" in Oe)) {
        Ge.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
      Z();
    }), (Y, Oe) => {
      const je = Qn("FontAwesomeIcon");
      return Ge.value ? se("", !0) : (I(), _("div", {
        key: 0,
        class: Ze(["extras group", [e.extraType]]),
        style: _t({ "grid-column-end": "span " + e.partColumns })
      }, [
        e.allowCustomNames ? (I(), _("div", Ad, [
          z("div", Td, [
            lt(Ba, {
              id: `${e.extraType}-custom-input-${e.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: E(te),
              placeholder: `Add ${e.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": Oe[0] || (Oe[0] = (Ce) => te.value = Ce || ""),
              onKeydown: jo(E(H), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            z("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !E(D),
              onClick: Oe[1] || (Oe[1] = //@ts-ignore
              (...Ce) => E(H) && E(H)(...Ce))
            }, " Add ", 8, Nd)
          ]),
          lt(mc, {
            "menu-items": E(O),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: E(W),
            onAction: E(ue)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : se("", !0),
        l.value ? (I(), Fe(E(t), {
          key: 1,
          shape: i.shape,
          "shape-index": i.shapeIndex,
          "extra-type": i.extraType,
          "catalogue-key": i.catalogueKey,
          "extra-id": i.catalogueExtraId,
          "extra-name": i.extraName,
          locations: i.locations,
          "price-per-length": i.pricePerLength,
          pricing: i.pricing,
          "price-label": i.priceLabel,
          "format-price": i.formatPrice,
          "max-gap": i.catalogueMaxGap,
          "per-side": i.cataloguePerSide,
          "orientation-model": i.orientationModel,
          debug: i.debug || a
        }, null, 8, ["shape", "shape-index", "extra-type", "catalogue-key", "extra-id", "extra-name", "locations", "price-per-length", "pricing", "price-label", "format-price", "max-gap", "per-side", "orientation-model", "debug"])) : (I(), _("div", {
          key: 2,
          ref_key: "gridRef",
          ref: Pe,
          class: Ze(["inputs extras-grid grid-layout", { "has-pricing": e.enablePricing }]),
          style: _t({ "--extras-label-w": ke.value })
        }, [
          (I(!0), _(vt, null, Ft(E(le), (Ce) => (I(), _(vt, { key: Ce }, [
            E(Q)(Ce) ? (I(), _("div", $d, [
              z("div", Md, [
                z("label", {
                  class: Ze(["extras-location-label", {
                    "group-label": Se.value(Ce),
                    "face-label": $e.value(Ce),
                    "side-label": ne.value(Ce),
                    "has-validation-issue": rt.value(Ce)
                  }])
                }, he(E(L)(Ce)), 3),
                (I(!0), _(vt, null, Ft(e.allOptions, (et, ut) => (I(), Fe(ga, Gt({
                  key: `${Ce}-${ut}`,
                  id: E(ie)(Ce, ut),
                  "data-field": `${e.extraType}-${Ce}`,
                  "data-index": e.shapeIndex,
                  "data-option-index": ut
                }, { ref_for: !0 }, E($)(Ce, ut), {
                  "onUpdate:value": (ft) => E(y)(Ce, ut, ft)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                E(Ue)(Ce).show ? (I(), _("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !E(Ue)(Ce).enabled,
                  title: E(Ue)(Ce).ariaLabel,
                  onClick: (et) => E(M)(Ce)
                }, [
                  lt(je, { icon: ["fass", "trash"] })
                ], 8, Dd)) : se("", !0)
              ]),
              e.enablePricing ? (I(), _("div", _d, [
                wt(Ce) ? (I(), _("span", Vd, [
                  zt(he(Xe(Je(Ce))), 1),
                  e.priceLabel ? (I(), _("span", Bd, he(e.priceLabel), 1)) : se("", !0)
                ])) : be(Ce) ? (I(), Fe(Sc, {
                  key: 1,
                  "price-per-unit": un(Ce),
                  quantity: Bt(Ce),
                  "quantity-unit": yn(Ce),
                  "price-label": e.priceLabel,
                  "format-price": i.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])) : se("", !0)
              ])) : se("", !0)
            ])) : se("", !0)
          ], 64))), 128))
        ], 6)),
        i.debug || a ? (I(), Fe(bl, {
          key: 3,
          title: `${e.extraType} debug`,
          data: [{
            extraType: e.extraType,
            mode: E(r),
            catalogueKey: i.catalogueKey,
            useCataloguePicker: l.value,
            allOptions: i.allOptions,
            labels: i.labels,
            pricing: i.pricing,
            displayNames: i.displayNames,
            enablePricing: i.enablePricing,
            shapeMaterial: i.shape?.material,
            shapeStockDbId: i.shape?.stock?.db_id,
            stockExtras: i.shape?.stock?.customData?.stockExtras,
            hasGetPrice: !!i.getPrice,
            hasFindExtrasPrice: !!i.findExtrasPrice,
            locationsProp: i.locations,
            locationGroupsProp: i.locationGroups
          }],
          paths: [`${e.extraType}`],
          root: !1
        }, null, 8, ["title", "data", "paths"])) : se("", !0)
      ], 6));
    };
  }
}), qd = /* @__PURE__ */ Ht(Rd, [["__scopeId", "data-v-df59a1f3"]]);
function $t(e) {
  return typeof e == "string" && e.trim().length > 0 ? e.trim() : "";
}
function jd(e) {
  const t = (Array.isArray(e.availableThicknesses) && e.availableThicknesses.length > 0 ? e.availableThicknesses : Array.isArray(e.t) ? e.t : e.t != null ? [e.t] : []).map((a) => typeof a == "number" ? a : Number(a)).filter((a) => Number.isFinite(a));
  return [...new Set(t)].sort((a, i) => a - i);
}
function yl(e, n, t, a, i) {
  const l = [], f = (!!i && !!e && e.toUpperCase() === i.toUpperCase() ? "" : e) || (n && !!i ? "" : a);
  if (n && l.push(n), f) {
    const k = n.toLowerCase(), C = f.toLowerCase();
    n && k.includes(C) || (n && C.startsWith(k + " ") ? l.push(f.slice(n.length).trimStart()) : l.push(f));
  }
  if (t) {
    const k = t.toLowerCase(), C = k.split(/\s+/)[0] ?? "", L = `${n} ${f}`.toLowerCase();
    !(L.includes(k) || C && L.split(/\s+/).includes(C)) && (f || n) && l.push(t);
  }
  return l;
}
function Ud(e, n, t, a, i, l, u, r) {
  const c = [];
  n && c.push(n);
  const f = yl(e, t, a, i, l);
  for (const k of f)
    (!n || !n.toLowerCase().includes(k.toLowerCase())) && c.push(k);
  return c.length > 0 ? c.join(" ") : u || r;
}
function Gd(e, n, t, a, i, l, u) {
  const r = yl(e, n, t, a, i);
  return r.length > 0 ? r.join(" ") : l || u;
}
function Jn(e, n = {}) {
  const t = n.fallback ?? "(unnamed)";
  if (!e)
    return {
      name: t,
      fullLabel: t,
      productLabel: t,
      groupKey: "",
      thicknesses: []
    };
  const a = $t(e.name), i = $t(e.brand) || $t(n.inheritFrom?.brand), l = $t(e.material) || $t(n.inheritFrom?.material), u = $t(e.variant) || $t(n.inheritFrom?.variant), r = $t(e.finish), c = $t(e.code), f = $t(e.displayName), k = [i, l].filter(Boolean).join(" · ");
  let C;
  k && u ? C = `${k} → ${u}` : k ? C = k : u && (C = u);
  let L;
  a ? L = a : c ? L = c : u && !l && !i ? L = u : l && !u ? L = l : i && !u && !l ? L = i : L = t;
  const v = Ud(
    a,
    i,
    u,
    r,
    l,
    c,
    f,
    t
  ), $ = Gd(
    a,
    u,
    r,
    l,
    c,
    f,
    t
  ), G = (() => {
    if (c && !(!a && c.toUpperCase() === L.toUpperCase()) && c.toUpperCase() !== $.toUpperCase())
      return c;
  })(), pe = `${i.toUpperCase()}|${u.toUpperCase()}|${(a || l).toUpperCase()}`, R = $t(e.shortDescription) || $t(e.description) || void 0, B = $t(e.imageUrl) || void 0;
  return {
    hierarchy: C,
    name: L,
    code: G,
    fullLabel: v,
    productLabel: $,
    groupKey: pe,
    brand: i || void 0,
    material: l || void 0,
    variant: u || void 0,
    finish: r || void 0,
    description: R,
    imageUrl: B,
    thicknesses: jd(e)
  };
}
let Mt = null;
function Wd(e, n) {
  return Mt = Kd(e, n), Mt;
}
function zd(e) {
  if (!Mt) throw new Error("Pagination not initialized");
  return {
    items: F(() => Mt.getItems(e)),
    currentPage: F(() => Mt.getCurrentPage(e)),
    currentIndex: F(() => Mt.getCurrentIndex(e)),
    totalPages: F(() => Mt.paginatedArrays.value.get(e)?.totalPages || 0),
    itemsPerPage: F(() => Mt.getItemsPerPage(e)),
    resetPagination: () => Mt.resetPagination(e),
    nextPage: () => Mt.nextPage(e),
    previousPage: () => Mt.previousPage(e),
    goToPage: (n) => Mt.goToPage(e, n),
    setItemsPerPage: (n) => Mt.setItemsPerPage(e, n)
  };
}
function Og(e, n) {
  const t = zd(e);
  return t.setItemsPerPage(n), t;
}
function Kd(e, n) {
  const t = /* @__PURE__ */ new Map(), a = U({}), i = (y, M) => {
    if ("value" in M) {
      const te = n[y]?.alwaysInclude;
      Ke(
        () => {
          const D = M.value;
          return te ? D.filter((W) => !te(W)).length : D.length;
        },
        (D, W) => {
          const O = a.value[y];
          if (!O) return;
          const H = Math.ceil(D / O.itemsPerPage);
          if (D > W) {
            const ue = Math.ceil(D / O.itemsPerPage), le = O.currentPage * O.itemsPerPage;
            D > le && O.currentPage < ue && (O.currentPage = ue);
          } else D < W && O.currentPage > H && (O.currentPage = Math.max(1, H));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(e).forEach(([y, M]) => {
    const te = n[y];
    if (!te)
      throw new Error(`Missing pagination options for array: ${y}`);
    t.set(y, M), a.value[y] = {
      currentPage: te.initialPage || 1,
      itemsPerPage: te.itemsPerPage
    }, i(y, M);
  });
  const l = (y, M) => {
    const te = a.value[y];
    if (!te) return;
    const D = u(y);
    te.currentPage = Math.max(1, Math.min(M, D));
  }, u = (y) => {
    const M = t.get(y);
    if (!M) return 0;
    const te = E(M), D = a.value[y];
    if (!D) return 0;
    const W = n[y], O = W?.alwaysInclude ? te.filter((H) => !W.alwaysInclude(H)) : te;
    return Math.max(1, Math.ceil(O.length / D.itemsPerPage));
  }, r = F(() => {
    const y = /* @__PURE__ */ new Map();
    return t.forEach((M, te) => {
      const D = E(M), W = Array.isArray(D) ? D : [], O = a.value[te], H = n[te], ue = H?.alwaysInclude ? W.filter(H.alwaysInclude) : [], le = H?.alwaysInclude ? W.filter((ke) => !H.alwaysInclude(ke)) : W, ie = Math.ceil(le.length / O.itemsPerPage), Ue = (O.currentPage - 1) * O.itemsPerPage, Ge = Ue + O.itemsPerPage, Pe = [
        ...ue,
        ...le.slice(Ue, Ge)
      ];
      y.set(te, {
        items: Pe,
        currentPage: O.currentPage,
        totalPages: ie,
        isLastPage: O.currentPage >= ie,
        hasNextPage: O.currentPage < ie,
        hasPreviousPage: O.currentPage > 1
      });
    }), y;
  });
  return {
    paginatedArrays: r,
    addArray: (y, M, te) => {
      t.set(y, M), a.value[y] = {
        currentPage: te.initialPage || 1,
        itemsPerPage: te.itemsPerPage
      }, n[y] = te, i(y, M);
    },
    removeArray: (y) => {
      t.delete(y);
      const M = { ...a.value };
      delete M[y], a.value = M;
    },
    hasArray: (y) => t.has(y),
    clearArrays: () => {
      t.clear(), a.value = {};
    },
    goToPage: l,
    nextPage: (y) => {
      const M = a.value[y];
      M && l(y, M.currentPage + 1);
    },
    previousPage: (y) => {
      const M = a.value[y];
      M && l(y, M.currentPage - 1);
    },
    resetPagination: (y) => {
      if (y) {
        const M = a.value[y];
        M && (M.currentPage = 1);
      } else
        Object.values(a.value).forEach((M) => {
          M.currentPage = 1;
        });
    },
    getCurrentPage: (y) => a.value[y]?.currentPage || 1,
    getCurrentIndex: (y) => {
      const M = a.value[y];
      return M ? (M.currentPage - 1) * M.itemsPerPage : 0;
    },
    getItemsPerPage: (y) => {
      const M = a.value[y];
      if (!M) throw new Error(`No pagination state found for key: ${y}`);
      return M.itemsPerPage;
    },
    setItemsPerPage: (y, M) => {
      const te = a.value[y];
      te && (te.itemsPerPage = M, l(y, te.currentPage));
    },
    getStartIndex: (y) => {
      const M = a.value[y];
      return M ? (M.currentPage - 1) * M.itemsPerPage : 0;
    },
    getItems: (y) => r.value.get(y)?.items || []
  };
}
const Us = U({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function kl() {
  return {
    progress: Us,
    reset: () => {
      Us.value = {
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
let Na = null;
function Hd() {
  const e = U(null), n = U(null), t = U(null), a = Wn([]), i = Wn([]), l = Wn([]), u = Wn([]), r = U([]), c = U(null), f = Wn([]), k = U(null), C = U(null), L = U({});
  return {
    // All state
    jobId: e,
    saw: n,
    activeStockAutoId: t,
    shapeList: a,
    stockList: i,
    cutList: l,
    segmentList: u,
    offcuts: r,
    metadata: c,
    unusableShapes: f,
    currentCutIndex: k,
    activeShape: C,
    cuttingPlans: L,
    r: {
      saw: n,
      activeStockAutoId: t,
      jobId: e,
      shapeList: a,
      stockList: i,
      cutList: l,
      segmentList: u,
      offcuts: r,
      unusableShapes: f,
      metadata: c,
      currentCutIndex: k,
      cuttingPlans: L
    }
  };
}
function Zd() {
  if (Na) return Na;
  const e = Hd(), n = F(() => e.activeStockAutoId.value ? le(e.activeStockAutoId.value) : []), t = F(() => !e.activeStockAutoId.value || !e.stockList.value?.length ? null : ue(e.activeStockAutoId.value)), a = F(() => !t.value || !e.cutList.value?.length ? [] : Ue(t.value.autoId)), i = F(() => !t.value || !e.segmentList.value?.length ? [] : ie(e.activeStockAutoId.value)), l = F(() => e.stockList.value?.length ? Ge(e.stockList.value) : []), u = F(() => e.shapeList.value.filter((V) => V.added)), r = F(() => e.shapeList.value?.length ? e.shapeList.value.filter((V) => !V.added) : []), c = F(() => e.shapeList.value?.length ? mr(e.shapeList.value) : []), f = F(() => e.shapeList.value?.length ? e.shapeList.value.filter((V) => !V.duplicate) : []), k = F(() => f.value.filter((V) => V.added)), C = F(() => e.stockList.value?.length ? e.stockList.value.filter((V) => V.used && !V.duplicate) : []), L = F(() => C.value.filter((V) => V.used)), v = F(() => e.cutList.value?.length ? a.value.reduce((V, Z) => V + Z.area, 0) : 0), $ = F(() => !e.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), G = F(() => !e.shapeList.value?.length || !n.value ? 0 : n.value ? n.value.reduce((V, Z) => V + Z.area, 0) : 0), pe = F(() => !e.cutList.value?.length || !t.value ? null : t.value.cutType), R = F(() => e.stockList.value?.length ? e.stockList.value.filter((Z) => Z.used && !Z.isStacked) : []), B = F(() => e.stockList.value?.length ? pr(t.value, e.stockList.value) : 0), me = F(() => {
    if (!e.stockList.value?.length) return 0;
    let V = $.value ? (v.value + G.value) / $.value : null;
    return V > 1 && (V = 1), V;
  }), Q = F(() => e.activeStockAutoId.value && e.cuttingPlans.value?.[e.activeStockAutoId.value] || null), y = () => {
    e.saw.value = null, e.shapeList.value.length = 0, e.stockList.value.length = 0, e.cutList.value.length = 0, e.segmentList.value.length = 0, e.offcuts.value.length = 0, e.unusableShapes.value.length = 0, e.currentCutIndex.value = null;
  }, M = () => {
    e.saw.value = null, e.activeStockAutoId.value = null, e.activeShape.value = null, e.metadata.value = null, e.shapeList.value = [], e.stockList.value = [], e.cutList.value = [], e.segmentList.value = [], e.offcuts.value = [], e.currentCutIndex.value = null, e.unusableShapes.value = [], e.cuttingPlans.value = {};
  }, te = (V, Z) => {
    V in this && this[V]?.sort(ur[Z]);
  }, D = (V) => {
    nt(V);
  }, W = () => {
    nt(e.shapeList);
  }, O = () => {
    nt(e.stockList);
  }, H = (V) => {
    if (!V?.shapeList?.some((Z) => Z.added)) {
      M();
      return;
    }
    e.metadata.value = V.metadata, e.unusableShapes.value = V.unusableShapes || [];
    try {
      V?.saw && (e.saw.value = new Ii(V.saw));
      const Z = rr(V, {
        preventAutoRotation: !0
      });
      e.stockList.value = Z.stockList, e.shapeList.value = Z.shapeList, e.cutList.value = Z.cutList, e.segmentList.value = Z.segmentList, e.offcuts.value = Z.offcuts, e.cuttingPlans.value = V.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach(($e) => nt(e[$e])), e.activeStockAutoId.value = Ge(e.stockList.value)?.[0]?.autoId || null;
    } catch (Z) {
      console.error("Error updating from result", Z);
    }
  }, ue = (V) => e.stockList.value?.length ? e.stockList.value.find((Z) => Z.autoId === V) : null, le = (V) => e.shapeList.value?.length ? e.shapeList.value.filter((Z) => Z.added && Z?.stock?.autoId === V) : [], ie = (V) => e.segmentList.value?.length ? e.segmentList.value.filter((Se) => Se?.stock?.autoId === V) : [], Ue = (V) => {
    const Z = e?.cutList?.value;
    return !Z && !Z.length ? [] : Z.filter((Se) => Se?.stock?.autoId === V).sort((Se, $e) => Se?.guillotineState?.order - $e?.guillotineState?.order);
  }, Ge = (V) => V?.length ? V.filter((Z) => Z.used === !0) : [], Pe = (V) => {
    e.activeStockAutoId.value !== V && (e.activeShape.value = null, e.activeStockAutoId.value = V);
  }, ke = (V) => V.id.endsWith(".0") ? V.autoId : e.shapeList.value.find((Se) => Se.parentId === V.parentId && Se.id.endsWith(".0"))?.autoId || V.autoId, Ye = () => {
    e.saw.value = new Ii({
      bladeWidth: 3,
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l"
    });
    const V = {
      autoId: "1.0",
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }, Z = new cr(V), Se = new xs({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "1.0"
    });
    Se.addToStock(Z);
    const $e = new xs({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    $e.addToStock(Z);
    const ne = (wt) => ({
      ptxData: {
        function: 1,
        order: wt,
        isDummy: !1,
        isFirst: wt === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), Te = [
      { x: 0, y: 0, l: 500, vertical: !0, stock: Z, ...ne(0) },
      { x: 500, y: 0, l: 500, vertical: !1, stock: Z, ...ne(1) },
      { x: 500, y: 500, l: 400, vertical: !0, stock: Z, ...ne(2) },
      { x: 900, y: 500, l: 400, vertical: !1, stock: Z, ...ne(3) }
    ].map((wt) => new dr(wt)), Je = new fr({
      l: 1500,
      w: 720,
      t: 18,
      x: 940,
      y: 0
    });
    try {
      Je.addToStock?.(Z);
    } catch {
    }
    e.stockList.value = [Z], e.shapeList.value = [Se, $e], e.cutList.value = Te, e.offcuts.value = [Je], e.activeStockAutoId.value = Z.autoId;
  };
  return Na = {
    // all result items for convenience
    r: e.r,
    // state
    activeStockAutoId: e.activeStockAutoId,
    saw: e.saw,
    shapeList: e.shapeList,
    stockList: e.stockList,
    cutList: e.cutList,
    segmentList: e.segmentList,
    offcuts: e.offcuts,
    unusableShapes: e.unusableShapes,
    currentCutIndex: e.currentCutIndex,
    activeShape: e.activeShape,
    cuttingPlans: e.cuttingPlans,
    // computed
    addedShapes: u,
    activeShapes: n,
    unplacedShapes: r,
    uniqueShapes: f,
    uniqueAddedShapes: k,
    unplacedShapeTally: c,
    uniqueStock: C,
    uniqueUsedStock: L,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: v,
    activeCutType: pe,
    usedStock: l,
    stackedStock: R,
    activeStockArea: $,
    activeShapeArea: G,
    activeStockStackCount: B,
    activeTotalArea: me,
    activeSegments: i,
    cuttingPlan: Q,
    // methods
    reset: y,
    clear: M,
    createTestData: Ye,
    sortItems: te,
    update: D,
    updateShapes: W,
    updateStock: O,
    updateFromResult: H,
    getStock: ue,
    getShapes: le,
    getSegments: ie,
    getCuts: Ue,
    setActiveStockAutoId: Pe,
    getInputAutoId: ke
  }, Na;
}
const Jd = zr(() => ee({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: mn(xe().default(!1), {
    label: "fields.fullStock",
    propertyPath: "fullStock",
    group: "properties",
    order: -1
  }),
  // Material field
  material: mn(w().optional(), {
    label: "fields.material",
    placeholder: "fields.material",
    propertyPath: "material",
    output: "string",
    group: "properties",
    order: 0
  }),
  // Thickness field
  t: mn(at([j(), w()]).optional(), {
    label: "fields.t",
    propertyPath: "t",
    group: "dimensions",
    order: 0,
    allowZero: !1
  }),
  // Length field
  l: Ps({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Ps({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: mn(j().int().positive().default(1), {
    label: "fields.q",
    placeholder: "fields.q",
    propertyPath: "q",
    group: "general",
    order: 1,
    step: 1
  }),
  // Name field
  name: gr({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: mn(rn(["n", "l", "w"]).default("n").optional(), {
    label: "fields.orientationLock",
    propertyPath: "orientationLock",
    group: "properties",
    order: 3,
    options: [
      { value: "n", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }),
  // Banding button
  banding: mn(xe().default(!1), {
    label: "fields.banding",
    propertyPath: "banding",
    group: "extras",
    order: 0
  }),
  // Finish options
  finish: mn(ee({
    enabled: xe().default(!1),
    type: w().optional(),
    sides: j().optional()
  }).optional(), {
    label: "fields.finish",
    propertyPath: "finish",
    group: "extras",
    order: 2
  }),
  // Machining options
  machining: mn(ee({
    enabled: xe().default(!1),
    operations: ve(ze()).optional()
  }).optional(), {
    label: "fields.machining",
    propertyPath: "machining",
    group: "extras",
    order: 3
  }),
  // Planing button
  planing: mn(xe().default(!1), {
    label: "fields.planing",
    propertyPath: "planing",
    group: "extras",
    order: 4
  })
  // Image upload
  /* imageUpload: field(
      z.object( {
          enabled: z.boolean().default( false ),
          url: z.string().optional(),
          file: z.any().optional()
      } ).optional(),
      {
          label: 'image_upload',
          propertyPath: 'imageUpload',
          group: 'extras',
          order: 4
      }
  ) */
}));
function Qd(e) {
  const n = Jd._def.getter();
  return e === "linear" ? n.omit({
    orientationLock: !0,
    banding: !0,
    machining: !0,
    planing: !0
  }) : e === "roll" ? n.omit({
    banding: !0,
    machining: !0,
    planing: !0
  }) : n;
}
class Yd {
  /**
   * Generate field metadata from a Zod schema
   * @param schema - The Zod schema to extract fields from
   * @param options - Options for field generation
   */
  generateFields(n, t) {
    const a = [], i = this.unwrapSchema(n);
    if (!this.isZodObject(i))
      return console.warn("Schema is not a ZodObject:", i), a;
    const l = i.shape;
    for (const [u, r] of Object.entries(l)) {
      if (u.startsWith("_") || this.isComputedField(r))
        continue;
      if (u === "trim" && this.isTrimField(r)) {
        const f = this.generateTrimFields(r);
        a.push(...f);
        continue;
      }
      const c = this.extractFieldMetadata(u, r);
      c && a.push(c);
    }
    return t?.sortByOrder ? a.sort((u, r) => (u.order || 999) - (r.order || 999)) : a;
  }
  /**
   * Extract metadata from a single field
   */
  extractFieldMetadata(n, t) {
    let a = t._metadata;
    const i = this.unwrapField(t);
    if (a || (a = i._metadata), a) {
      if (a.hidden)
        return null;
      const c = {
        name: n,
        type: a.type || this.getFieldType(i),
        label: a.label || this.formatLabel(n),
        description: a.description,
        required: !this.isOptional(t),
        defaultValue: a.defaultValue ?? this.getDefaultValue(t),
        ...a
      };
      return this.extractTypeSpecificMetadata(c, i), c;
    }
    const l = i._def?.description, u = this.parseFieldDescription(l), r = {
      name: n,
      type: this.getFieldType(i),
      label: u.label || this.formatLabel(n),
      description: u.description,
      required: !this.isOptional(t),
      defaultValue: this.getDefaultValue(t),
      ...u
    };
    return this.extractTypeSpecificMetadata(r, i), r;
  }
  /**
   * Get the field type from a Zod schema
   */
  getFieldType(n) {
    const t = this.unwrapField(n);
    if (t instanceof As) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof Hn)
          return this.isIntegerNumber(i) ? "integer" : "number";
    }
    return t instanceof Hn ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof Kr ? "string" : t instanceof Hr ? "boolean" : t instanceof Ts || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof Zr ? "array" : t instanceof Ta ? "object" : "string";
  }
  /**
   * Extract constraints from a ZodNumber schema
   */
  extractNumberConstraints(n, t) {
    const a = t, i = (u) => u === Number.MAX_SAFE_INTEGER || u === Number.MIN_SAFE_INTEGER;
    if (a.minValue !== void 0 && a.minValue !== -1 / 0 && !i(a.minValue)) {
      n.min = a.minValue;
      const u = t._def?.checks?.find(
        (r) => r.constructor?.name === "$ZodCheckGreaterThan"
      );
      if (u && a.minValue === 0) {
        const r = u._zod?.def?.inclusive ?? u.inclusive;
        n.allowZero = r === !0;
      } else
        n.allowZero = a.minValue === 0;
    }
    a.maxValue !== void 0 && a.maxValue !== 1 / 0 && !i(a.maxValue) && (n.max = a.maxValue);
    const l = t._def?.checks || [];
    for (const u of l) {
      let r, c, f = !0;
      if (u.kind)
        r = u.kind, c = u.value, f = u.inclusive !== void 0 ? u.inclusive : !0;
      else if (u?._zod?.def) {
        const k = u._zod.def;
        r = k.check, c = k.value, f = k.inclusive !== void 0 ? k.inclusive : !0;
      } else
        continue;
      if (r === "min" || r === "greater_than")
        n.min === void 0 && (n.min = r === "greater_than" && !f ? c + 1e-6 : c, n.allowZero = n.min === 0);
      else if (r === "max" || r === "less_than")
        n.max === void 0 && (n.max = r === "less_than" && !f ? c - 1e-6 : c);
      else if (r === "int")
        n.step = 1;
      else if (r === "number_format") {
        const k = u?._zod?.def?.format ?? u?.format;
        (k === "safeint" || k === "int") && (n.step = 1);
      }
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(n, t) {
    if (t instanceof As) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof Hn) {
          this.extractNumberConstraints(n, i), n.type = "number";
          break;
        }
    } else t instanceof Hn && this.extractNumberConstraints(n, t);
    if (!n.options) {
      if (t instanceof Ts) {
        const a = t._def || {}, i = a.entries ?? a.values ?? t.options;
        Array.isArray(i) ? n.options = i.map((l) => ({
          value: l,
          label: this.formatLabel(String(l))
        })) : i && typeof i == "object" ? n.options = Object.values(i).map((l) => ({
          value: l,
          label: this.formatLabel(String(l))
        })) : n.options = [];
      }
      if (t._def?.typeName === "ZodNativeEnum") {
        const a = t._def?.values || {};
        n.options = Object.entries(a).filter(([i]) => isNaN(Number(i))).map(([i, l]) => ({
          value: l,
          label: this.formatLabel(i)
        }));
      }
    }
  }
  /**
   * Parse field description for metadata
   */
  parseFieldDescription(n) {
    if (!n) return {};
    const t = {}, a = n.match(/^(.+?)\s*\[(.+?)\]\s*$/);
    if (a) {
      t.description = a[1].trim();
      const i = a[2].split(",");
      for (const l of i) {
        const [u, r] = l.split(":").map((c) => c.trim());
        u === "group" && (t.group = r), u === "order" && (t.order = parseInt(r)), u === "units" && (t.units = r), u === "hidden" && (t.hidden = r === "true"), u === "readonly" && (t.readonly = r === "true"), u === "placeholder" && (t.placeholder = r);
      }
    } else
      t.description = n;
    return t;
  }
  /**
   * Format a field name as a label
   */
  formatLabel(n) {
    return n.replace(/([A-Z])/g, " $1").replace(/^./, (t) => t.toUpperCase()).replace(/_/g, " ").trim();
  }
  /**
   * Check if a field is optional
   */
  isOptional(n) {
    if (n instanceof bi || n instanceof yi)
      return !0;
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.out, a = n._def?.in;
      if (t) {
        const i = this.isOptional(t);
        if (i) return i;
      }
      if (a) {
        const i = this.isOptional(a);
        if (i) return i;
      }
    }
    return n._def?.typeName === "ZodEffects" ? this.isOptional(n._def?.schema) : n instanceof ki ? this.isOptional(n._def?.innerType) : !1;
  }
  /**
   * Check if a field is computed
   */
  isComputedField(n) {
    return n?._def?.typeName === "ZodComputed" || n?._def?.isComputed === !0;
  }
  /**
   * Unwrap schema from effects/transforms
   */
  unwrapSchema(n) {
    if (n._def?.typeName === "ZodEffects")
      return this.unwrapSchema(n._def?.schema);
    if (n._def?.typeName === "ZodLazy" || n._def?.type === "lazy") {
      const t = n._def?.getter;
      if (typeof t == "function")
        return this.unwrapSchema(t());
    }
    return n;
  }
  /**
   * Unwrap a field schema
   */
  unwrapField(n) {
    const t = n._def?.typeName, a = n.constructor.name;
    if (n instanceof bi || n instanceof yi)
      return this.unwrapField(n._def?.innerType);
    if (n instanceof ki || a === "ZodDefault")
      return this.unwrapField(n._def?.innerType);
    if (t === "ZodEffects")
      return this.unwrapField(n._def?.schema);
    if (a === "ZodPipe" || n._def?.type === "pipe") {
      const i = n._def?.out;
      if (i)
        return this.unwrapField(i);
    }
    return n;
  }
  /**
   * Get default value from schema
   */
  getDefaultValue(n) {
    if (n instanceof ki) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
    if (n.constructor?.name === "ZodPipe" || n._def?.type === "pipe") {
      const t = n._def?.in;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n instanceof bi || n instanceof yi) {
      const t = n._def?.innerType;
      if (t)
        return this.getDefaultValue(t);
    }
    if (n._def?.typeName === "ZodEffects") {
      const t = n._def?.schema;
      if (t)
        return this.getDefaultValue(t);
    }
    if ("_def" in n && "defaultValue" in n._def) {
      const t = n._def?.defaultValue;
      return typeof t == "function" ? t() : t;
    }
  }
  /**
   * Check if a ZodNumber schema has integer constraints
   */
  isIntegerNumber(n) {
    return n.isInt === !0 ? !0 : (n._def?.checks || []).some((a) => a.kind === "int");
  }
  /**
   * Check if schema is a ZodObject
   */
  isZodObject(n) {
    return n instanceof Ta;
  }
  /**
   * Group fields by their group metadata
   */
  groupFields(n) {
    const t = /* @__PURE__ */ new Map(), a = [];
    for (const l of n)
      l.group ? (t.has(l.group) || t.set(l.group, []), t.get(l.group).push(l)) : a.push(l);
    const i = [];
    return t.forEach((l, u) => {
      i.push({
        name: u,
        label: this.formatLabel(u),
        fields: l.sort((r, c) => (r.order || 999) - (c.order || 999))
      });
    }), a.length > 0 && i.push({
      name: "general",
      label: "General",
      fields: a.sort((l, u) => (l.order || 999) - (u.order || 999))
    }), i.sort((l, u) => (l.order || 999) - (u.order || 999));
  }
  /**
   * Check if a field is a trim object (has l1, l2, w1, w2 properties)
   */
  isTrimField(n) {
    const t = this.unwrapField(n);
    if (t instanceof Ta) {
      const a = t.shape;
      return "l1" in a && "l2" in a && "w1" in a && "w2" in a;
    }
    return !1;
  }
  /**
   * Generate individual field metadata for trim sides (l1, l2, w1, w2)
   */
  generateTrimFields(n) {
    const t = [], a = this.unwrapField(n);
    if (!(a instanceof Ta))
      return t;
    const i = a.shape, l = ["l1", "l2", "w1", "w2"];
    for (const u of l)
      if (u in i) {
        const r = i[u], c = this.extractFieldMetadata(`trim.${u}`, r);
        c && (c.propertyPath = `trim.${u}`, c.name = `trim.${u}`, c.group || (c.group = "trim"), t.push(c));
      }
    return t;
  }
}
const Gs = new Yd();
function Xd(e, n = {}) {
  const t = U([]), a = U([]), i = U(/* @__PURE__ */ new Map()), l = U(/* @__PURE__ */ new Map()), u = (v) => {
    let $ = Gs.generateFields(e);
    n.overrides && ($ = $.map((pe) => {
      const R = n.overrides[pe.name];
      if (R) {
        const B = { ...pe, ...R };
        return R.min === void 0 && pe.min !== void 0 && (B.min = pe.min), R.max === void 0 && pe.max !== void 0 && (B.max = pe.max), B;
      }
      return pe;
    })), l.value.clear();
    for (const pe of $)
      l.value.set(pe.name, pe);
    const G = v || n.allowedFieldIds;
    if (G && G.length > 0) {
      const pe = G, R = /* @__PURE__ */ new Map();
      for (const me of $)
        R.set(me.name, me);
      const B = [];
      for (const me of pe) {
        const Q = R.get(me);
        Q && B.push(Q);
      }
      $ = B;
    }
    n.filter && ($ = $.filter(n.filter)), t.value = $, i.value.clear();
    for (const pe of $)
      i.value.set(pe.name, pe);
    n.grouped && (a.value = Gs.groupFields($));
  };
  u();
  const r = (v) => i.value.get(v), c = (v) => l.value.get(v), f = () => l.value, k = (v, $) => {
    const G = i.value.get(v);
    G && Object.assign(G, $);
  }, C = (v) => {
    const $ = r(v);
    return !(!$ || $.hidden);
  }, L = (v) => {
    const $ = r(v);
    if (!$) return {};
    const G = {};
    return $.required && (G.required = !0), $.type === "number" && ($.min !== void 0 && (G.min = $.min), $.max !== void 0 && (G.max = $.max)), G;
  };
  return {
    fields: F(() => t.value),
    groups: F(() => a.value),
    fieldMap: F(() => i.value),
    allFieldsMap: F(() => l.value),
    getField: r,
    getFieldMetadata: c,
    getAllFieldMetadata: f,
    updateField: k,
    isFieldVisible: C,
    getFieldValidation: L,
    regenerateFields: u
  };
}
function ef(e) {
  const { stockType: n, materials: t = [], minDimension: a = 0 } = e, i = Qd(n), l = {
    // Add minimum dimensions for length/width
    l: {
      min: a,
      w: "1fr"
      // Full width for length field
    },
    w: {
      min: a,
      w: "1fr"
      // Full width for width field
    },
    // Specific widths for compact fields
    material: {
      w: "minmax(20px, max-content)"
    },
    t: {
      w: "minmax(20px, max-content)"
    },
    q: {
      w: "80px"
    },
    name: {
      w: "1fr"
    },
    // Icon-sized fields for special components
    orientationLock: {
      w: "36px"
    },
    banding: {
      w: "32px"
    },
    finish: {
      w: "32px"
    },
    planing: {
      w: "32px"
    },
    machining: {
      w: "32px"
    },
    imageUpload: {
      w: "32px"
    },
    fullStock: {
      w: "32px"
    }
  };
  return t.length > 0 && (l.material = {
    ...l.material,
    type: "enum",
    options: t.map((u) => ({ value: u.name, label: u.name })),
    defaultValue: t[0]?.name
  }), Xd(i, {
    ...e,
    overrides: { ...l, ...e.overrides }
  });
}
const { progress: gn, reset: Ws } = kl();
function tf(e) {
  const n = "https://api.cutlistevo.com/";
  let t;
  const a = () => {
    t = Jr(n, {
      withCredentials: !0,
      autoConnect: !1,
      perMessageDeflate: {
        threshold: 1024
      }
    }), t.on("connect", () => {
      e.refs?.connected && (e.refs.connected.value = !0), e.callbacks?.onConnect?.();
    }), t.on("connect_error", (u) => {
      e.refs?.connected && (e.refs.connected.value = !1), e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(u);
    }), t.on("connect_timeout", (u) => {
      e.refs?.connected && (e.refs.connected.value = !1), e.refs?.thinking && (e.refs.thinking.value = !1), e.callbacks?.onConnectError?.(u);
    }), t.on("result", (u) => {
      gn.value.complete = !0, e.callbacks?.onResult?.(u), t.disconnect();
    }), t.on("queued", () => {
      Ws(), gn.value.queued = !0;
    }), t.on("started", () => {
      gn.value.started = !0;
    }), t.on("progress", (u) => {
      u?.data?.message === "result" ? gn.value.resultCount++ : (gn.value.stockCount = u.data.stockCount, gn.value.shapeCount = u.data.shapeCount), u?.data?.phase && (gn.value.phase = u.data.phase), u?.data?.placed !== void 0 && (gn.value.placed = u.data.placed, gn.value.total = u.data.total);
    }), t.on("user", (u) => {
      e.callbacks?.onUser?.(u);
    }), t.on("error", (u) => {
      e.refs?.thinking && (e.refs.thinking.value = !1), Ws(), e.callbacks?.onError?.(u);
    });
  }, i = () => t?.disconnect(), l = () => t?.connect();
  return a(), {
    socket: t,
    connect: l,
    disconnect: i
  };
}
const bn = ee({
  min: j().min(0).optional(),
  max: j().min(0).optional()
}).optional(), nf = ee({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: w().min(1),
  // Dimension constraints for this location
  longSide: bn,
  shortSide: bn,
  t: bn,
  // Formula-based validation
  formula: w().optional(),
  // Custom message for this location
  message: w().optional()
}), xi = ee({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: bn,
  shortSide: bn,
  t: bn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: w().optional(),
  // Custom validation message (optional)
  message: w().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: ve(nf).optional()
}), af = ee({
  banding: xi.optional(),
  finish: xi.optional(),
  planing: xi.optional()
}).optional();
function sf(e, n) {
  try {
    return !!new Ja({}).evaluateExpression(e, {
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0,
      t: n.t || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function lf(e) {
  return e.formula ? "" : Bi({
    dimensionName: Ri(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value
  });
}
function of(e, n, t) {
  const a = n.charAt(0).toUpperCase() + n.slice(1);
  return e.formula ? `${a} does not meet the validation requirements` : Bi({
    dimensionName: Ri(e.dimension),
    constraint: e.constraint,
    limit: e.limit,
    value: e.value,
    subject: a,
    location: e.location
  });
}
function rf(e, n, t) {
  if (e?.locations?.length) {
    const a = e.locations.find((i) => i.location === n);
    if (a)
      return { rule: a, message: a.message, source: "location" };
  }
  if (t?.length) {
    for (const a of t)
      if (a.rules && a.locations.includes(n))
        return { rule: a.rules, message: a.rules.message, source: "group" };
  }
  return { rule: e || {}, message: e?.message, source: "type" };
}
function uf(e, n, t, a) {
  const { rule: i, message: l, source: u } = rf(n, t, a), r = [], c = (k, C, L) => {
    C == null || L === void 0 || (L.min !== void 0 && C < L.min && r.push({
      valid: !1,
      dimension: k,
      value: C,
      constraint: "min",
      limit: L.min,
      location: t
    }), L.max !== void 0 && C > L.max && r.push({
      valid: !1,
      dimension: k,
      value: C,
      constraint: "max",
      limit: L.max,
      location: t
    }));
  };
  c("longSide", e.longSide, i.longSide), c("shortSide", e.shortSide, i.shortSide);
  const f = typeof e.t == "string" ? parseFloat(e.t) : e.t;
  return isNaN(f) || c("t", f, i.t), i.formula && (sf(i.formula, {
    longSide: e.longSide,
    shortSide: e.shortSide,
    t: f
  }) || r.push({
    valid: !1,
    dimension: "longSide",
    // placeholder; `formula` is the real signal
    value: e.longSide || 0,
    constraint: "min",
    limit: 0,
    location: t,
    formula: !0
  })), {
    valid: r.length === 0,
    violations: r,
    message: l,
    source: u
  };
}
const { addNotice: Gn } = qi();
let Pi = null;
function cf() {
  return Pi || (Pi = fl()), Pi;
}
function zs(e) {
  return e.filter((n) => n?.l || n?.w);
}
function df(e) {
  return !!e && "locations" in e && Array.isArray(e.locations);
}
async function ff(e) {
  const n = e.t, t = [];
  try {
    const { inputs: a, validateInputShapes: i, validateInputStock: l } = cf(), u = e.inputShapes ?? a.inputShapes.value, r = e.inputStock ?? a.inputStock.value, c = e.inputUserGroups ?? a.inputUserGroups?.value ?? [], f = zs(u), k = zs(r);
    if (f.forEach((R) => R.isNew = !1), k.forEach((R) => R.isNew = !1), !e.isAdmin && !e.shared && e.maxShapes !== 1 / 0) {
      const R = f.reduce((me, Q) => me + (Number(Q.q) || 1), 0), B = k.reduce((me, Q) => me + (Number(Q.q) || 1), 0);
      if (R > e.maxShapes || B > e.maxStock)
        return Gn({
          type: "error",
          message: n("errors.validation.above_max_parts")
        }), e.onLimit?.(), { valid: !1, issues: t };
    }
    if (!f.length)
      return Gn({
        type: "error",
        message: n("errors.validation.no_parts_list")
      }), { valid: !1, issues: t };
    if (!e.useInventory && !k.length)
      return Gn({
        type: "error",
        message: n("errors.validation.no_stock")
      }), { valid: !1, issues: t };
    let C;
    if (e.useInventory && e.selectedSaw)
      C = e.selectedSaw;
    else if (e.inputSaw instanceof hn) {
      const R = e.inputSaw.validate();
      t.push(...R), C = e.inputSaw.toData();
    } else {
      C = e.inputSaw;
      const R = new Ii(C);
      t.push(...R.issues);
    }
    const L = C?.cutType;
    if (L === "nesting") {
      const R = f.filter(
        (B) => !Array.isArray(B.outline) || B.outline.length < 3
      );
      if (R.length)
        for (const B of R)
          t.push(new Vt({
            item: B,
            category: ["part"],
            message: "Nesting mode requires a polygon outline — import this part via DXF or switch to Rectangular mode.",
            shouldTranslate: !1
          }));
    } else if (L) {
      const R = f.filter(
        (B) => Array.isArray(B.outline) && B.outline.length >= 3
      );
      if (R.length)
        for (const B of R)
          t.push(new Vt({
            item: B,
            category: ["part"],
            message: "This part has a polygon outline and can only be used in Nesting mode — switch mode or remove the outlined parts.",
            shouldTranslate: !1
          }));
    }
    const v = i({
      saw: C,
      partTrim: ge({ v: e.partTrim }),
      useInventory: e.useInventory,
      inputShapesOverride: f
    });
    if (t.push(...v), e.useInventory) {
      if (e.materialStore)
        for (const R of f)
          R.material || t.push(new Vt({
            item: R,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const R = l(C);
      t.push(...R);
    }
    if (c.length > 0) {
      c.forEach((B) => B.populateParentID(f));
      const R = hr(c, f);
      t.push(...R);
    }
    await mf(f, e, t);
    const $ = Li(t);
    if ($.length > 0) {
      const R = {
        saw: $.filter((B) => B.category?.includes("saw")),
        stock: $.filter((B) => B.category?.includes("stock")),
        part: $.filter((B) => B.category?.includes("part") && !B.category?.includes("extras")),
        extras: $.filter((B) => B.category?.includes("extras")),
        group: $.filter((B) => B.category?.includes("group"))
      };
      for (const [B, me] of Object.entries(R))
        if (me.length > 0) {
          Gn({
            type: "error",
            message: n("errors.validation.inputs_issue", { 0: B }),
            additional: me.map((Q) => n(Q.message))
          });
          break;
        }
      return { valid: !1, issues: t };
    }
    const G = {
      inputSaw: C,
      inputShapes: f.map((R) => R.toData()),
      inputStock: k.map((R) => R.toData()),
      inputGroups: c.map((R) => R.toData()),
      enableEvo: !0,
      useInventory: e.useInventory || !1
    }, pe = vr.safeParse(G);
    return pe.success ? {
      valid: !0,
      issues: t,
      sawData: C
    } : (console.error("[Validation] Zod validation failed:", pe.error.issues), Gn({
      type: "error",
      message: n("errors.validation.invalid_data_structure"),
      additional: pe.error.issues.map((R) => `${R.path.join(".")}: ${R.message}`)
    }), { valid: !1, issues: t });
  } catch (a) {
    return console.error("[Validation] error:", a), Gn({
      type: "error",
      message: n("errors.general.unexpected"),
      additional: [a?.message ?? ""]
    }), { valid: !1, issues: t };
  }
}
function pf(e, n) {
  const t = [], a = e.extras;
  if (!a) return t;
  if (n === "banding" && a.banding?.sides)
    for (const [i, l] of Object.entries(a.banding.sides))
      l !== void 0 && l !== !1 && l !== "" && t.push(`side.${i}`);
  else if (n === "finish" && a.finish?.faces)
    for (const [i, l] of Object.entries(a.finish.faces))
      l !== void 0 && l !== !1 && l !== "" && t.push(`face.${i}`);
  else if (n === "planing") {
    if (a.planing?.faces)
      for (const [i, l] of Object.entries(a.planing.faces))
        l !== void 0 && l !== !1 && l !== "" && t.push(`face.${i}`);
    if (a.planing?.sides)
      for (const [i, l] of Object.entries(a.planing.sides))
        l !== void 0 && l !== !1 && l !== "" && t.push(`side.${i}`);
  }
  return t;
}
async function mf(e, n, t) {
  if (!n.findExtrasPrice)
    return;
  const a = [
    { type: "banding", pricing: n.bandingPricing },
    { type: "finish", pricing: n.finishPricing },
    { type: "planing", pricing: n.planingPricing }
  ];
  for (const i of e)
    for (const { type: l, pricing: u } of a) {
      const r = n.getShapeExtrasPricing?.(i, l) ?? u;
      if (n.extrasValidationRules && br.hasExtras(i, l)) {
        const C = n.extrasValidationRules?.[l], L = n.extrasLocationGroups?.[l], v = df(C) && C.locations.length > 0, $ = L?.some((G) => G.rules);
        if (v || $) {
          const G = pf(i, l), pe = (L || []).map((me) => ({
            id: me.id,
            locations: me.locations,
            rules: me.rules
          })), R = C || {}, B = /* @__PURE__ */ new Set();
          for (const me of G) {
            const Q = uf(
              i,
              R,
              me,
              pe
            );
            if (!Q.valid) {
              if (Q.source === "group") {
                const y = pe.find(
                  (M) => M.rules && M.locations.includes(me)
                );
                if (y && B.has(y.id))
                  continue;
                y && B.add(y.id);
              }
              if (Q.message) {
                const y = new Vt({
                  item: i,
                  category: ["part", "extras"],
                  message: Cs(Q.violations.map(lf), Q.message),
                  field: [["extras", l, me]],
                  shouldTranslate: !1
                });
                t.push(y);
              } else
                Q.violations.forEach((y) => {
                  const M = of(y, l), te = new Vt({
                    item: i,
                    category: ["part", "extras"],
                    message: M,
                    field: [["extras", l, me]],
                    shouldTranslate: !1
                  });
                  t.push(te);
                });
            }
          }
        } else {
          const G = yr(i, l, n.extrasValidationRules);
          if (!G.valid) {
            const pe = (R) => t.push(new Vt({
              item: i,
              category: ["part", "extras"],
              message: R,
              field: [["extras", l]],
              shouldTranslate: !1
            }));
            G.message ? pe(Cs(
              G.violations.map(kr),
              G.message
            )) : G.violations.forEach((R) => pe(wr(l, R)));
          }
        }
      }
      if (!r || !Object.keys(r).length)
        continue;
      const c = n.getShapeExtrasCodes?.(i, l), f = Sr(i, l, r, n.findExtrasPrice, c);
      f.valid || f.incompleteLocations.forEach((k) => {
        t.push(new Vt({
          item: i,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${l}`,
            // Translation key for extra type (banding, finish, planing)
            location: xr(k, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", l, k]]
        }));
      });
    }
}
const gf = ["decor", "width", "thickness"];
new Set(gf);
const wl = ["banding", "finish", "planing", "machining"], hf = /* @__PURE__ */ new Set(["st", "p", "mm", "mb", "tm", "sm", "pm", "pa", "li", "ro", "r2"]), vf = 15;
function Di(e) {
  return e.trim().toLowerCase().split(/[\s_-]+/).filter(Boolean);
}
function bf(e) {
  return /[a-z]/.test(e) && /\d/.test(e);
}
function Ks(e) {
  return Di(e).filter((n) => !hf.has(n) && n.length > 1);
}
function yf(e, n) {
  let t = 0;
  const a = Math.min(e.length, n.length);
  for (; t < a && e[t] === n[t]; )
    t++;
  return t;
}
function kf(e) {
  return e ? typeof e == "string" ? { name: e } : e : {};
}
function Ig(e, n) {
  const t = kf(n);
  if (!t.name && !t.code && !t.material && !t.description || e.decors.length === 0)
    return null;
  if (t.name) {
    const c = t.name.trim().toLowerCase();
    if (c) {
      const f = e.decors.find((k) => k.value.toLowerCase() === c);
      if (f)
        return { value: f.value, score: 1e3, matchedOn: ["name"] };
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const c of [t.name, t.material, t.description, t.code])
    if (c)
      for (const f of Ks(c))
        a.add(f);
  const i = t.code || t.material ? Di(t.code || t.material || "") : [];
  let l = null, u = 0, r = [];
  for (const c of e.decors) {
    const f = Ks(c.value);
    let k = 0;
    const C = [];
    if (t.name) {
      const v = t.name.trim().toLowerCase(), $ = c.value.toLowerCase();
      v && (v.includes($) || $.includes(v)) && (k += 200, C.push("name-substring"));
    }
    let L = 0;
    for (const v of f)
      a.has(v) && (k += bf(v) ? 20 : 5, L++);
    if (L > 0 && C.push("tokens"), t.color && c.color && t.color.trim().toLowerCase() === c.color.trim().toLowerCase() && (k += 30, C.push("color")), i.length > 0) {
      let v = 0;
      for (const $ of e.rows) {
        if (($.decor?.name ?? "") !== c.value)
          continue;
        const G = yf(i, Di($.code));
        G > v && (v = G);
      }
      v >= 2 && (k += v * 15, C.push("code-prefix"));
    }
    k > u && (u = k, l = c, r = C);
  }
  return !l || u < vf ? null : { value: l.value, score: u, matchedOn: r };
}
const Sl = {
  // ============================================================
  // CSV TEMPLATE FIELDS (order determines CSV column order)
  // ============================================================
  code: {
    label: "Code",
    inputType: "string",
    // Code lives on the material only at the storage level — stock items
    // inherit at display/calc time via the read-time resolver, but don't
    // carry their own value and can't override. `scope: 'shared'` keeps the
    // runtime stock view exposing the inherited code (PDF, OrderSummary,
    // the calc round-trip), while `materialRequired` + the unique
    // `{ organisation, code }` index pin uniqueness on the material side.
    scope: "shared",
    inheritable: !0,
    importable: !0,
    materialRequired: !0,
    csvAliases: ["material_code", "sku"],
    csvDescription: "Unique identifier (manufacturer SKU) for the material — required on every row, must be unique within your shop. Rows sharing a code are merged into one material; if you really have two materials, give them distinct codes. Stock items inherit this from their parent material; you can't set a stock-level code separately.",
    // Example rows tell three coherent stories:
    //  Row 1: catalogue-style (variant IS the per-decor identity)
    //  Row 2: family-decor (variant = finish family, name = decor) — ✓ supported
    //  Row 3: another decor in the same family — shows auto keeps them apart
    //  Row 4: generic / no variant — legacy pattern
    csvExamples: ["F037-ST76", "CG18-AG", "CG29-AG", "PLY-BIRCH-18"]
  },
  brand: {
    label: "Brand",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !1,
    // identity field — curator-owned on library entries
    importable: !0,
    csvAliases: ["manufacturer"],
    csvDescription: "Manufacturer / brand name. Distinct from Variant — Brand is the company that made the material; Variant is a sub-grouping within that brand.",
    csvExamples: ["Egger", "Senoplast", "Senoplast", ""]
  },
  material: {
    label: "Material",
    kindLabels: { banding: "Banding material" },
    inputType: "string",
    scope: "stock",
    importable: !0,
    csvAliases: ["mat", "material_name"],
    stockRequired: !0,
    csvDescription: "Material group name. Rows with the same material value are grouped into one material item. Required.",
    csvExamples: ["MDF", "MDF", "MDF", "Plywood"]
  },
  variant: {
    label: "Variant",
    kindLabels: { banding: "Banding type" },
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["var"],
    csvDescription: 'Sub-grouping within a brand or material (product line, range, sub-collection). Free-form. Two valid patterns: (a) per-decor identity ("F037 ST76 Taormina Travertine") where variant ≈ name; (b) finish family ("Acrylic Gloss", "Super Matt") shared across many decors, with name carrying the per-decor identity. Auto import preserves both correctly.',
    csvExamples: [
      "F037 ST76 Taormina Travertine",
      // catalogue-style (variant = decor identity)
      "Acrylic Gloss",
      // family-decor pattern (variant = family)
      "Acrylic Gloss",
      //   another decor under the same family
      ""
      // generic / no variant
    ]
  },
  name: {
    label: "Name",
    inputType: "string",
    scope: "material",
    importable: !0,
    csvAliases: ["stock_name", "display_name"],
    materialRequired: !0,
    csvDescription: 'Display name for the material item shown to customers. Required. When using a finish-family variant, put the per-decor identity here ("Dust Grey", "Taupe") — auto import keeps each decor as a separate material.',
    csvExamples: [
      "F037 ST76 Taormina Travertine",
      // matches variant — catalogue pattern
      "Frost White",
      // decor name under family variant
      "Almond",
      //   another decor name
      "Marine Birch 18mm"
      // descriptive name when no variant
    ]
  },
  description: {
    label: "Description",
    inputType: "textarea",
    scope: "material",
    importable: !0,
    csvAliases: ["desc"],
    csvDescription: "Detailed description of the material item.",
    csvExamples: [
      "Egger Eurodekor Melamine MDF",
      "Senoplast Acrylic Faced MDF — Frost White",
      "Senoplast Acrylic Faced MDF — Almond",
      "Marine Grade Baltic Birch Plywood"
    ]
  },
  type: {
    label: "Stock Type",
    // Banding catalogues are always 'roll' — surface this on rule editors
    // would invite a no-op axis.
    productKinds: ["material"],
    inputType: "select",
    scope: "material",
    importable: !0,
    defaultValue: "sheet",
    csvAliases: ["stock_type", "material_type"],
    options: [
      { value: "sheet", label: "Sheet" },
      { value: "linear", label: "Linear" },
      { value: "roll", label: "Roll" }
    ],
    csvDescription: "Type of stock. Must be one of: sheet, linear, roll. Defaults to sheet.",
    csvExamples: ["sheet", "sheet", "sheet", "sheet"]
  },
  l: {
    label: "Length",
    kindLabels: { banding: "Roll length (m)" },
    inputType: "float",
    scope: "stock",
    importable: !0,
    min: 0,
    csvAliases: ["length", "len"],
    csvParse: "number",
    stockRequired: !0,
    csvDescription: "Stock length in mm. Required.",
    csvExamples: ["2800", "3050", "3050", "2440"]
  },
  w: {
    label: "Width",
    kindLabels: { banding: "Banding width (mm)" },
    inputType: "float",
    scope: "stock",
    importable: !0,
    min: 0,
    csvAliases: ["width", "wid"],
    csvParse: "number",
    stockRequired: !0,
    csvDescription: "Stock width in mm. Required.",
    csvExamples: ["2070", "1220", "1220", "1220"]
  },
  t: {
    label: "Thickness",
    kindLabels: { banding: "Banding thickness (mm)" },
    inputType: "float",
    scope: "stock",
    importable: !0,
    csvAliases: ["thickness", "thick", "depth"],
    csvParse: "thickness",
    stockRequired: !0,
    csvDescription: 'Stock thickness in mm. Required. For bonded boards use comma-separated values in quotes, e.g. "18,36".',
    csvExamples: ["18", "19", "19", "18"]
  },
  availableThicknesses: {
    label: "Available thicknesses",
    kindLabels: { banding: "Available roll lengths" },
    inputType: "array",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["thicknesses_available", "thicknesses", "avail_thicknesses"],
    csvDescription: 'Pipe-separated list of every thickness this entry is stocked in. Library catalogues from sources that consolidate per-decor sizes (e.g. Egger) populate this so the LibraryTab card lists "8 / 15 / 18 / 22 mm" instead of one card per thickness. Optional — falls back to the single `t` value when absent.',
    csvExamples: ["18|25", "19|38", "19|38", "12|18"]
  },
  q: {
    label: "Quantity",
    // Banding is sold by the metre against an unlimited-stock model — per-row quantity isn't meaningful.
    productKinds: ["material"],
    inputType: "integer",
    scope: "stock",
    libraryOverridable: !0,
    importable: !0,
    defaultValue: 1,
    min: 0,
    csvAliases: ["qty", "quantity"],
    csvParse: "integer",
    csvDescription: "Number of sheets in stock. Ignored if unlimited is Y. Defaults to 1.",
    csvExamples: ["10", "5", "5", "20"]
  },
  cost: {
    label: "Cost",
    // Banding pricing is owned by the per-extra BandingPricingRulesEditor;
    // two competing pricing systems on the same SKU set is a footgun.
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    defaultValue: 0,
    min: 0,
    csvAliases: ["price", "unit_price", "unitprice"],
    csvParse: "number",
    csvDescription: "Unit price per sheet. Numeric value.",
    csvExamples: ["45", "90", "90", "32"]
  },
  discount: {
    label: "Discount",
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    defaultValue: 0,
    min: 0,
    max: 100,
    csvAliases: ["disc", "sale", "sale_percent", "salepercent"],
    csvParse: "number",
    csvDescription: "Discount percentage (0-100). e.g. 15 means 15% off.",
    csvExamples: ["0", "0", "0", "0"]
  },
  pricingFormula: {
    label: "Pricing Formula",
    // Banding pricing is owned by the per-extra BandingPricingRulesEditor.
    productKinds: ["material"],
    inputType: "formula",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1
  },
  unlimitedQuantity: {
    label: "Unlimited",
    productKinds: ["material"],
    inputType: "boolean",
    scope: "stock",
    libraryOverridable: !0,
    importable: !0,
    csvColumn: "unlimited",
    csvAliases: ["unlimitedquantity", "infinite", "infinitestock"],
    csvParse: "boolean-yn",
    csvDescription: "Whether stock is unlimited. Use y or n. When y, the quantity value is ignored.",
    csvExamples: ["n", "n", "n", "y"]
  },
  fullSizeOnly: {
    label: "Full size only",
    productKinds: ["material"],
    inputType: "boolean",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    csvAliases: ["full_size", "fullsize", "wholesheet", "whole_sheet"],
    csvParse: "boolean-yn",
    csvDescription: "Disable cut-to-size. When y, customers must purchase whole sheets only.",
    csvExamples: ["n", "n", "y", "n"]
  },
  weight: {
    label: "Weight",
    // Sheets carry per-piece weight; banding rolls don't have a comparable per-row weight axis.
    // Optional manual override — if `density` is set on the entry/material,
    // the cart/offcut weight is derived as `density × l × w × t` so it scales
    // correctly with the customer's selected thickness. Set `weight`
    // explicitly only when you need to pin a specific per-row number that
    // the density compute can't express (e.g. a packed bundle).
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    min: 0,
    csvAliases: ["wt"],
    csvParse: "number",
    csvDescription: "Weight per unit. Optional — when density is set, weight is computed from `density × l × w × t`. Override here only when the compute can't express the per-row weight (packed bundles, mixed materials).",
    csvExamples: ["", "", "", ""]
  },
  density: {
    label: "Density (kg/m³)",
    // Per-substrate density — the customer cart, offcut weight, and
    // shipping calculation all derive weight as `density × volume`.
    // Storing density on the material instead of per-row weight means
    // weight stays correct across every available thickness and cut
    // dimension. Library entries set it from the supplier's substrate
    // (e.g. Egger Eurodekor chipboard ~640 kg/m³); shops can override
    // per material if they buy a denser / lighter grade.
    productKinds: ["material"],
    inputType: "float",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !0,
    min: 0,
    csvAliases: ["rho", "kg_per_m3", "kgm3"],
    csvParse: "number",
    csvDescription: "Density in kg/m³. Drives the computed weight (`density × l × w × t`) shown in the cart, on offcuts, and used by shipping. Typical: chipboard ~640, MDF ~720, plywood ~600, HPL ~1400, honeycomb-core lightweight ~340.",
    csvExamples: ["720", "720", "720", "680"]
  },
  finish: {
    label: "Finish",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["surface", "surface_finish"],
    csvDescription: "Surface finish description, e.g. Natural, High Gloss, Sanded.",
    csvExamples: ["ST76 Mineral Rough Matt", "High Gloss", "High Gloss", "Sanded"]
  },
  color: {
    label: "Colour",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["colour", "colorname", "color_name", "colour_name"],
    csvDescription: "Colour name, e.g. White, Natural, Oak Brown.",
    csvExamples: ["Brown", "Frost White", "Almond", "Natural"]
  },
  colorHex: {
    label: "Colour Hex",
    inputType: "color",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["color_hex", "hex", "hexcolor", "hex_color", "colourhex", "colour_hex"],
    csvDescription: "Hex colour code, e.g. #8B4513, #FFFFFF.",
    csvExamples: ["#8B6F47", "#FAFAFA", "#EBD5B3", "#D2B48C"]
  },
  // ============================================================
  // ADDITIONAL IMPORTABLE FIELDS
  // ============================================================
  grain: {
    label: "Grain",
    // Banding rolls have no grain direction — running a banding tape one
    // way vs the other doesn't change the visible decor.
    productKinds: ["material"],
    inputType: "select",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    defaultValue: "",
    csvAliases: ["orientation", "dir", "direction"],
    options: [
      { value: "", label: "None" },
      { value: "l", label: "Along Length" },
      { value: "w", label: "Along Width" }
    ],
    csvDescription: "Grain direction. Use l (along length), w (along width), or leave empty for none.",
    csvExamples: ["", "", "", "l"]
  },
  category: {
    label: "Category",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvAliases: ["cat", "group"],
    csvDescription: "Category for grouping in the store, e.g. Water Resistant, Fire Rated, Exterior.",
    csvExamples: ["Catalogue", "Decorative", "Decorative", "Marine"]
  },
  imageUrl: {
    label: "Image URL",
    inputType: "string",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    csvColumn: "image",
    csvAliases: ["img", "imageurl", "image_url", "picture", "photo"],
    csvDescription: "Full URL to a product image. Must be a valid URL, e.g. https://example.com/image.jpg.",
    csvExamples: [
      "https://example.com/images/mdf-egger.jpg",
      "https://example.com/images/mdf-senoplast.jpg",
      "https://example.com/images/plywood-marine.jpg",
      "https://example.com/images/plywood-birch.jpg"
    ]
  },
  tags: {
    label: "Tags",
    inputType: "array",
    scope: "shared",
    inheritable: !0,
    importable: !0,
    defaultValue: [],
    csvAliases: ["tag", "keywords"],
    csvParse: "pipe-array",
    csvDescription: "Searchable tags. Pipe-separated, e.g. plywood|birch|hardwood.",
    csvExamples: ["egger|melamine|decorative", "senoplast|acrylic|gloss", "senoplast|acrylic|gloss", "plywood|birch|marine"]
  },
  // ============================================================
  // NON-IMPORTABLE FIELDS
  // ============================================================
  trim: {
    label: "Trim",
    // Sheet-only field (per-edge cut allowance). Stored as
    // `{ l1, l2, w1, w2 }`; rule editors target each edge separately via
    // the dotted sub-paths declared in `subFields` so the picker, value
    // input, and engine can treat each side as a real numeric target.
    productKinds: ["material"],
    inputType: "trim",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1,
    subFields: {
      l1: { label: "L1", inputType: "float", min: 0 },
      l2: { label: "L2", inputType: "float", min: 0 },
      w1: { label: "W1", inputType: "float", min: 0 },
      w2: { label: "W2", inputType: "float", min: 0 }
    }
  },
  extras: {
    label: "Extras",
    inputType: "extras",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1
  },
  // Relation field: stores the saw's ObjectId.
  //   • libraryOverridable — different shops on the same library entry use
  //     different saws.
  //   • inheritable — stock auto-inherits its parent material's saw at read
  //     time (Stage D inheritance model). A shop can still override per-stock
  //     by setting `db_sawId` on the stock and adding `'db_sawId'` to its
  //     overrides[] array.
  db_sawId: {
    label: "Saw",
    // Saws cut sheet/linear stock, not banding rolls.
    productKinds: ["material"],
    inputType: "relation",
    relationTarget: "saw",
    scope: "shared",
    inheritable: !0,
    libraryOverridable: !0,
    importable: !1
  }
};
Object.entries(Sl).filter(([, e]) => e.inheritable).map(([e]) => e);
const wf = Object.entries(Sl).filter(([, e]) => e.libraryOverridable).map(([e]) => e);
new Set(wf);
const Sf = [
  "name",
  "code",
  "material",
  "brand",
  "variant",
  "category",
  "finish",
  "color",
  "type",
  "t",
  "l",
  "w",
  "cost",
  "discount",
  "weight"
];
new Set(Sf);
const xf = wl, Pf = (e) => e.charAt(0).toUpperCase() + e.slice(1), Cf = xf.map((e) => ({
  key: `extras.${e}`,
  label: Pf(e),
  extrasType: e
}));
new Set(Cf.map((e) => e.key));
const Of = 4;
Array.from({ length: Of }, (e, n) => n + 1);
function xl(e) {
  return typeof e == "string" && e.includes(",");
}
function _i(e) {
  if (!xl(e))
    return null;
  const n = e.split(",").map((i) => parseFloat(i.trim()));
  if (n.length !== 2)
    return null;
  const [t, a] = n;
  return !Number.isFinite(t) || !Number.isFinite(a) || t <= 0 || a <= 0 ? null : { base: t, double: a };
}
function Ra(e) {
  const n = e?.customData?.bondedThickness;
  return _i(n) ? n : xl(e?.t) && _i(e?.t) ? e.t : null;
}
function If(e) {
  const n = _i(Ra(e));
  return n ? n.base : null;
}
function Lf(e, n, t, a = (i) => Number(i)) {
  if (!(!n.length || !t.length))
    for (const i of e) {
      if (i.t === void 0 || i.t === null || i.t === "") continue;
      const l = a(i.t), u = n.findIndex((f) => a(f) === l);
      if (u === -1) continue;
      const r = t.find((f) => f.includes(u));
      if (!r) continue;
      const c = Math.min(...r.map((f) => a(n[f])));
      l > c && (i.q = a(i.q) * (l / c), i.notes = `Bond to form ${l}`, i.t = c);
    }
}
const Ef = new Ja({});
function Ff(e) {
  const n = Number(e.l) || 0, t = Number(e.w) || 0, a = {
    // Core dimensions
    l: n,
    w: t,
    t: Number(e.t) || 0,
    q: Number(e.q) || 1,
    longSide: Math.max(n, t),
    shortSide: Math.min(n, t),
    // Basic properties
    material: e.material || e.selectedMaterial?.name || "",
    name: e.name || "",
    grain: e.grain || "",
    // Nested extras object for dot-notation access
    extras: {
      banding: {
        sides: {
          l1: e.extras?.banding?.sides?.l1 || "",
          l2: e.extras?.banding?.sides?.l2 || "",
          w1: e.extras?.banding?.sides?.w1 || "",
          w2: e.extras?.banding?.sides?.w2 || ""
        }
      },
      finish: {
        faces: {
          a: e.extras?.finish?.faces?.a || "",
          b: e.extras?.finish?.faces?.b || ""
        }
      },
      planing: {
        faces: {
          a: e.extras?.planing?.faces?.a || "",
          b: e.extras?.planing?.faces?.b || ""
        }
      }
    },
    // Convenience boolean flags
    hasBanding: !!(e.extras?.banding?.sides && Object.values(e.extras.banding.sides).some((i) => i)),
    hasFinish: !!(e.extras?.finish?.faces && Object.values(e.extras.finish.faces).some((i) => i)),
    hasPlaning: !!(e.extras?.planing?.faces && Object.values(e.extras.planing.faces).some((i) => i)),
    hasMachining: !!e.machining,
    // Nested machining object for dot-notation access
    machining: {
      holes: e.machining?.holes?.length || 0,
      corners: e.machining?.corners?.length || 0
    },
    // Full stock flag
    fullStock: !!e.fullStock
  };
  return a["extras.banding.sides.l1"] = a.extras.banding.sides.l1, a["extras.banding.sides.l2"] = a.extras.banding.sides.l2, a["extras.banding.sides.w1"] = a.extras.banding.sides.w1, a["extras.banding.sides.w2"] = a.extras.banding.sides.w2, a["extras.finish.faces.a"] = a.extras.finish.faces.a, a["extras.finish.faces.b"] = a.extras.finish.faces.b, a["extras.planing.faces.a"] = a.extras.planing.faces.a, a["extras.planing.faces.b"] = a.extras.planing.faces.b, a["machining.holes"] = a.machining.holes, a["machining.corners"] = a.machining.corners, a;
}
function Af(e, n) {
  const t = [], a = e.filter((i) => i.enabled !== !1);
  for (let i = 0; i < n.length; i++) {
    const l = n[i], u = Ff(l);
    for (const r of a)
      try {
        Ef.evaluateExpression(r.formula, u) || t.push({
          partIndex: i,
          partName: l.name || void 0,
          ruleName: r.name || void 0,
          message: r.message
        });
      } catch (c) {
        t.push({
          partIndex: i,
          partName: l.name || void 0,
          ruleName: r.name || void 0,
          message: `Validation error: ${c instanceof Error ? c.message : "Unknown error"}`
        });
      }
  }
  return {
    valid: t.length === 0,
    errors: t
  };
}
const Tf = ee({
  longSide: bn,
  shortSide: bn,
  t: bn,
  formula: w().optional(),
  message: w().optional()
}).optional(), qa = ee({
  // Unique identifier for this group (used internally)
  id: w().min(1),
  // Display label for the group (shown in UI)
  label: w().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ve(w().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: j().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: xe().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: Tf
}), Nf = ee({
  banding: ve(qa).optional(),
  finish: ve(qa).optional(),
  planing: ve(qa).optional()
}).optional(), $f = rn(["decimal", "fraction"]), Mf = rn(["metric", "imperial"]), Df = rn(Cr), Hs = at([
  ln(0),
  ln(1),
  ln(2)
]).catch(0), _f = ee({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: w().optional(),
  partB: w().optional(),
  partSelected: w().optional(),
  stock: w().optional(),
  text: w().optional(),
  // Checkout-specific colors
  button: w(),
  buttonText: w()
}), yt = (e) => ya((n) => n ?? e, xe()), Vf = ee({
  banding: yt(!1),
  finish: yt(!1),
  planing: yt(!1),
  orientation: yt(!0),
  diagram: yt(!0),
  focus: yt(!0),
  machining: yt(!1),
  csvImport: yt(!1),
  csvTemplate: yt(!1),
  groups: yt(!1),
  click: yt(!0),
  partName: yt(!0),
  progressNumber: yt(!0),
  pagination: yt(!1),
  fullStock: yt(!1),
  imageUpload: yt(!1),
  diagramNav: yt(!1),
  debug: yt(!1)
}), Bf = ee({
  // Localization
  locale: w().default("en-US"),
  currency: w().default("USD"),
  apiVersion: j().min(2).default(3),
  // Unit system (metric or imperial)
  unitSystem: Mf.default("metric"),
  // Number formatting
  numberFormat: $f.default("decimal"),
  decimalPlaces: j().min(0).max(10).default(2),
  fractionRoundTo: j().default(0),
  // Stock configuration
  stockSelection: Df.optional(),
  stockGrain: Pr.optional(),
  // Part configuration
  minSpacing: il.optional(),
  maxParts: j().min(0).default(0),
  orientationModel: Hs.default(0),
  resultOrientationModel: Hs.default(0),
  minDimension: j().min(0).default(0),
  partTrim: ya((e) => e ?? void 0, j().min(0).optional()),
  partsPerPage: ya((e) => e ?? void 0, j().min(1).default(10)),
  // UI configuration
  debug: xe().default(!1),
  enable: Vf.default({
    banding: !1,
    finish: !1,
    planing: !1,
    orientation: !0,
    diagram: !0,
    focus: !0,
    machining: !1,
    csvImport: !1,
    csvTemplate: !1,
    groups: !1,
    click: !0,
    partName: !0,
    progressNumber: !0,
    pagination: !1,
    fullStock: !1,
    imageUpload: !1,
    diagramNav: !1,
    debug: !1
  }),
  colors: _f.default({
    button: "#118ab2",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: ve(ze()).optional(),
  fieldOrder: ya((e) => e ?? void 0, ve(w()).optional()),
  // Extras location filtering
  bandingLocations: ve(di).optional(),
  finishLocations: ve(di).optional(),
  planingLocations: ve(di).optional(),
  // Extras location groups
  extrasLocationGroups: Nf,
  // Extras validation rules
  extrasValidationRules: af
}), pa = ee({
  min: j().min(0).nullable().optional(),
  max: j().min(0).nullable().optional()
}).nullable().optional(), Rf = ee({
  // Master toggle for the feature. Server gates on this; consumers don't need to.
  enabled: xe().optional(),
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: pa,
  shortSide: pa,
  // Direct dimension constraints (as stored by admin panel)
  l: pa,
  w: pa,
  t: pa,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: ee({
    // At least one side must be >= primaryMin
    primaryMin: j().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: j().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: w().nullable().optional(),
  // Custom validation message (optional)
  message: w().nullable().optional()
});
function qf(e, n) {
  const t = [], a = e.l || 0, i = e.w || 0, l = e.longSide ?? Math.max(a, i), u = e.shortSide ?? Math.min(a, i), r = (c, f, k) => {
    k != null && (k.min !== void 0 && k.min !== null && f < k.min && t.push({
      valid: !1,
      dimension: c,
      value: f,
      constraint: "min",
      limit: k.min
    }), k.max !== void 0 && k.max !== null && f > k.max && t.push({
      valid: !1,
      dimension: c,
      value: f,
      constraint: "max",
      limit: k.max
    }));
  };
  if (r("longSide", l, n.longSide), r("shortSide", u, n.shortSide), r("longSide", a, n.l), r("shortSide", i, n.w), r("t", Number(e.t) || 0, n.t), n.crossDimensionalRule) {
    const { primaryMin: c, secondaryMin: f } = n.crossDimensionalRule, k = e.l || 0, C = e.w || 0;
    if (c != null && f != null) {
      const L = k >= c && C >= f, v = C >= c && k >= f;
      !L && !v && t.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: n.message || `At least one side must be ≥ ${c} mm and the other side must be ≥ ${f} mm`
      });
    }
  }
  return n.formula && (jf(n.formula, {
    l: e.l,
    w: e.w,
    longSide: e.longSide,
    shortSide: e.shortSide
  }) || t.push({
    valid: !1,
    dimension: "longSide",
    value: e.longSide || 0,
    constraint: "min",
    limit: 0,
    message: n.message || "Part does not meet validation requirements"
  })), {
    valid: t.length === 0,
    violations: t
  };
}
function jf(e, n) {
  try {
    return !!new Ja({}).evaluateExpression(e, {
      l: n.l || 0,
      w: n.w || 0,
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function Uf(e) {
  if (e.message)
    return e.message;
  if (e.constraint === "crossDimensional")
    return "Part dimensions do not meet requirements";
  const n = Ri(String(e.dimension));
  return Bi({
    dimensionName: n,
    constraint: e.constraint === "max" ? "max" : "min",
    limit: e.limit ?? 0,
    value: e.value ?? 0,
    subject: "Part"
  });
}
rn([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const Gf = De(
  w(),
  j().min(0)
).default({}), Wf = ee({
  banding: w().optional(),
  finish: w().optional(),
  planing: w().optional(),
  machining: w().optional()
}).optional(), zf = ee({
  name: w().trim().min(1),
  db_id: w().optional(),
  code: w().optional(),
  brand: w().optional(),
  variant: w().optional(),
  finish: w().optional(),
  // Raw `material` label from source stock — preserved when the source
  // data uses it as the friendly product name (typical WordPress / widget
  // shape: `material: "Birch Plywood", name: "SKU-123"`). The catalogue
  // flow doesn't set this; it carries identity on `name` + `code` instead.
  material: w().optional(),
  displayName: w().optional(),
  imageUrl: w().optional(),
  color: w().optional(),
  colorHex: w().optional(),
  thicknesses: ve(
    at([
      w().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      j()
    ])
  ).min(1),
  widths: ve(
    at([
      w().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      j()
    ])
  ).optional(),
  // Unique (l, w) sheet sizes available for this material across all
  // thicknesses. Populated for panel stock only — linear stock uses `widths`
  // above for its single-dimension variant axis. The full-stock dialog uses
  // this list to let the customer pick which sheet size they're buying when
  // more than one is available for the chosen material + thickness.
  dimensions: ve(ee({
    l: j(),
    w: j()
  })).optional(),
  extras: Wf,
  fullSizeOnly: xe().optional()
}), Ci = ee({
  labels: ve(w()).default([]),
  pricing: De(w(), j().min(0)).default({}),
  options: ze().optional(),
  keys: ve(w()).optional(),
  // if not all the default keys should be set
  locations: ve(w()).optional(),
  // available locations for this extras type
  groups: ve(qa).optional(),
  // custom location groups
  rules: ze().optional(),
  // validation rules for this extras type
  displayNames: De(w(), w()).optional(),
  // slug key → product name for dropdown display
  codes: De(w(), w()).optional(),
  // tuple key → SKU (WC flow: built from variation SKUs for the cutlist CSV)
  maxGap: j().optional(),
  // banding-only: max gap (mm) between part thickness and strip width (catalogue picker)
  perSide: xe().optional(),
  // banding-only: catalogue picker renders one decor cascade per edge instead of one shared SKU
  defaultPrice: j().optional(),
  // fallback per-metre rate for catalogue-linked banding SKUs not in `pricing`
  // True when the server included any catalogue-linked extra (sourceCatalogueKey set) of this type.
  // Drives the storefront calculator out of legacy-global fallback mode so the org's full catalogue
  // (e.g. ~1,700 Egger SKUs in `pricing`, kept for cart-side lookup) doesn't leak onto materials
  // that never linked it. See `getShapeExtrasConfig` in EcommerceCalculator.vue.
  containsCatalogueLinked: xe().optional(),
  // Compound-key pricing for group-mode extras, keyed `<extraKey>|<groupId>`.
  // Kept in a sibling field (not merged into `pricing`) so `validateExtrasCompleteness`
  // doesn't see the `|` and mis-derive `maxPricingLevels` — see the EcommerceCalculator
  // `initExtra` comment. Consumed at the cart-total site, not by the widget itself.
  groupPricing: De(w(), j()).optional(),
  // Per-code pricing formulas. When a formula exists for a code, both the
  // inline per-feature preview AND the cart total evaluate the formula
  // instead of multiplying the flat rate. Fanned out per-code by the
  // server's `buildExtrasConfig` so one Extra → many code entries.
  formulas: De(w(), w()).optional()
});
ee({
  success: xe(),
  price: j().optional(),
  error: w().optional(),
  cacheHit: xe().optional()
});
ee({
  valid: xe(),
  errors: ve(w()),
  warnings: ve(w())
});
ee({
  pricing: Gf,
  labels: ve(w()),
  options: ve(ve(w())),
  // Simplified to string arrays only
  keys: ve(w()),
  maxLevels: j().min(1)
});
ee({
  enableCaching: xe().default(!0),
  enableLogging: xe().default(!1),
  maxCacheSize: j().min(1).default(1e3)
});
const Pl = rn(["select", "multiselect", "range", "boolean", "search"]), Cl = rn(["asc", "desc"]), Ol = rn(["grid", "list"]), $a = ee({
  _id: w(),
  name: w(),
  code: w().optional(),
  labels: ve(w()).optional(),
  pricing: De(w(), j()).optional(),
  price: j().optional(),
  // Catalogue link — when set, the customer renders a Decor × Type ×
  // Width × Thickness picker against /catalogues/<key>/banding-axes.
  sourceCatalogueKey: w().optional(),
  // Per-axis pricing rules — preserved so per-shape inline price hints
  // can compute against the rule that matches.
  pricingRules: ve(ee({
    materials: ve(w()).optional(),
    widths: ve(j()).optional(),
    thicknesses: ve(j()).optional(),
    price: j()
  })).optional()
}), Kf = ee({
  banding: $a.optional(),
  finish: $a.optional(),
  planing: $a.optional(),
  machining: $a.optional()
}).optional(), Hf = ee({
  enabled: xe(),
  price: j(),
  description: w().optional(),
  maxQuantity: j().optional()
}).optional(), Zf = ee({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: Or,
  name: w().optional().describe("User-friendly display name"),
  description: w().optional().describe("Detailed description"),
  code: w().optional().describe("Internal material/product code"),
  // Categorization
  category: w().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: w().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: Kf.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: Hf.describe("Sample ordering configuration"),
  // External links — supplier-supplied datasheets, asset bundles, 3D viewer
  // URLs etc. surfaced in the customer-side Details dialog. Populated for
  // library-sourced rows from the catalogue entry's `urls` field; absent
  // or empty for shop-owned stock until the editor populates it.
  urls: ve(ee({
    label: w(),
    url: w()
  })).optional().describe("Supplier external links (datasheets, asset bundle, …)"),
  // UI metadata
  minQuantity: j().int().positive().nullable().optional().describe("Minimum order quantity")
});
Zn.merge(Zf).describe("Stock option with filtering and display metadata");
const Jf = ee({
  field: w().describe("Property name to filter on"),
  type: Pl,
  label: w().describe("Display label"),
  custom: xe().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: j().nullable().optional().describe("Minimum value for range filter"),
  max: j().nullable().optional().describe("Maximum value for range filter"),
  step: j().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ve(ee({
    label: w(),
    value: ze()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: xe().default(!0).describe("Whether filter is visible"),
  collapsible: xe().default(!0).describe("Whether filter panel is collapsible"),
  order: j().int().nullable().optional().describe("Display order")
}), Qf = ee({
  field: w().describe("Field to sort by"),
  order: Cl,
  label: w().optional().describe("Display label for sort option")
}), Ki = ee({
  // Filter configuration
  availableFilters: ve(Jf).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ve(w()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Qf.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Ol.default("grid").describe("Default display mode"),
  itemsPerPage: j().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: xe().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: xe().default(!0).describe("Allow multiple stock selection"),
  maxSelection: j().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), Yf = ee({
  field: w(),
  value: ze(),
  type: Pl
});
ee({
  // Active filters
  activeFilters: ve(Yf).default([]).describe("Currently active filters"),
  // Search
  searchQuery: w().default("").describe("Current search query"),
  // Sort
  sortBy: w().default("cost").describe("Current sort field"),
  sortOrder: Cl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Ol.default("grid").describe("Current display mode"),
  currentPage: j().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ve(w()).default([]).describe("IDs of selected stock items")
});
function Lg() {
  return Ki.parse({});
}
const Il = ee({}).passthrough(), Ll = ee({
  l: j(),
  w: j(),
  t: j().nullable(),
  q: j(),
  stockId: w()
}), Hi = Ir.partial(), El = ee({
  q: j().optional(),
  analysis: Hi.nullable().optional()
}), Fl = ee({
  holes: ve(ee({
    x: j(),
    y: j(),
    diameter: j(),
    depth: j().optional(),
    face: j().optional(),
    type: w().optional()
  })).optional(),
  hingeHoles: ve(ee({
    position: j(),
    side: w(),
    face: j().optional(),
    numHoles: j().optional(),
    diameter: j().optional(),
    depth: j().optional(),
    hingeLength: j().optional(),
    distanceFromEdge: j().optional(),
    outerSpacing: j().optional()
  })).optional(),
  corners: ve(ee({
    index: j(),
    type: w().nullable().optional(),
    size: j().nullable().optional()
  })).optional()
}), Al = ee({
  bladeWidth: j().optional(),
  cutType: w().optional(),
  cutPreference: w().optional(),
  stackHeight: j().optional()
}), Xf = ee({
  l: j(),
  w: j(),
  t: j().nullable(),
  material: w().nullable(),
  orientationLock: sl.nullable(),
  q: j(),
  name: w().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: De(w(), at([w(), xe()])).nullable().optional(),
  finish: De(w(), at([w(), xe()])).nullable().optional(),
  planing: De(w(), at([w(), xe()])).nullable().optional(),
  customData: De(w(), ze()).nullable().optional()
}), ep = ee({
  id: w(),
  name: w().nullable(),
  l: j(),
  w: j(),
  t: j().nullable(),
  material: w().nullable(),
  q: j(),
  trim: ee({
    x1: j(),
    x2: j(),
    y1: j(),
    y2: j()
  }).nullable().optional(),
  cost: j().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: j().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: w().nullable().optional(),
  db_id: w().nullable().optional(),
  code: w().nullable().optional(),
  analysis: Hi.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ve(El).nullable().optional(),
  customData: De(w(), ze()).nullable().optional()
}), tp = ee({
  id: w().optional(),
  name: w().optional(),
  l: j(),
  w: j(),
  t: j().nullable().optional(),
  material: w().optional(),
  q: j().optional(),
  orientationLock: at([
    ln(""),
    ln("l"),
    ln("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: De(w(), at([w(), xe()])).nullable().optional(),
  finish: De(w(), at([w(), xe()])).nullable().optional(),
  planing: De(w(), at([w(), xe()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: ee({
    banding: ee({
      sides: De(w(), at([w(), xe()]))
    }).nullable().optional(),
    finish: ee({
      faces: De(w(), at([w(), xe()]))
    }).nullable().optional(),
    planing: ee({
      sides: De(w(), at([w(), xe()])).optional(),
      faces: De(w(), at([w(), xe()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Fl.optional(),
  stock: ee({
    db_id: w().optional(),
    code: w().optional(),
    material: w().optional(),
    thickness: j().optional()
  }).nullable().optional(),
  customData: De(w(), ze()).nullable().optional()
});
ee({
  jobId: j(),
  metadata: Vi.optional(),
  parts: ve(Xf),
  stock: ve(ep),
  offcuts: ve(Ll),
  inputs: ee({
    parts: ve(tp),
    saw: Al.optional()
  }),
  apiResultV3: Il.optional()
});
const np = ee({
  l: j(),
  w: j(),
  t: j().nullable(),
  material: w().nullable(),
  orientationLock: sl.nullable(),
  q: j(),
  name: w().nullable(),
  // V3 format: nested extras structure
  extras: ee({
    banding: ee({
      sides: De(w(), at([w(), xe()]))
    }).nullable().optional(),
    finish: ee({
      faces: De(w(), at([w(), xe()]))
    }).nullable().optional(),
    planing: ee({
      sides: De(w(), at([w(), xe()])).optional(),
      faces: De(w(), at([w(), xe()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: De(w(), ze()).nullable().optional()
}), ap = ee({
  id: w(),
  name: w().nullable(),
  l: j(),
  w: j(),
  t: j().nullable(),
  material: w().nullable(),
  q: j(),
  trim: ee({
    l1: j().optional(),
    l2: j().optional(),
    w1: j().optional(),
    w2: j().optional()
  }).nullable().optional(),
  cost: j().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: j().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: w().nullable().optional(),
  db_id: w().nullable().optional(),
  code: w().nullable().optional(),
  analysis: Hi.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ve(El).nullable().optional(),
  // New stock fields
  color: Lr.nullable(),
  weight: j().positive().nullable().optional(),
  imageUrl: w().nullable().optional(),
  tags: ve(w()).nullable().optional(),
  available: xe().nullable().optional(),
  customData: De(w(), ze()).nullable().optional()
}), ip = ee({
  id: w().optional(),
  name: w().optional(),
  l: j(),
  w: j(),
  t: j().nullable().optional(),
  material: w().optional(),
  q: j().optional(),
  orientationLock: at([
    ln(""),
    ln("l"),
    ln("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: ee({
    banding: ee({
      sides: De(w(), at([w(), xe()]))
    }).nullable().optional(),
    finish: ee({
      faces: De(w(), at([w(), xe()]))
    }).nullable().optional(),
    planing: ee({
      sides: De(w(), at([w(), xe()])).optional(),
      faces: De(w(), at([w(), xe()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Fl.optional(),
  stock: ee({
    db_id: w().optional(),
    code: w().optional(),
    material: w().optional(),
    thickness: j().optional()
  }).nullable().optional(),
  customData: De(w(), ze()).nullable().optional()
});
ee({
  jobId: j(),
  metadata: Vi.optional(),
  parts: ve(np),
  stock: ve(ap),
  offcuts: ve(Ll),
  inputs: ee({
    parts: ve(ip),
    saw: Al.optional()
  }),
  apiResultV3: Il.optional()
});
function Tl(e) {
  return {
    l: e.l,
    w: e.w,
    t: e.t ?? null,
    q: e.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: e?.stock?.id || e?.stock?.parentId || ""
  };
}
function Nl(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e)
    t?.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push({
      q: t.q ?? 1,
      analysis: t.analysis ?? null
    }));
  return n;
}
function $l(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  for (const a of e) {
    if (!a?.analysis || !a?.parentId) continue;
    const i = a.parentId, l = a.analysis;
    if (!n.has(i))
      n.set(i, {
        areaEfficiency: l.areaEfficiency ?? 0,
        finishArea: l.finishArea ?? 0,
        bandingLength: l.bandingLength ?? 0,
        partArea: l.partArea ?? 0,
        totalParts: l.totalParts ?? 0,
        stackedNumberOfCuts: l.stackedNumberOfCuts ?? 0,
        numberOfCuts: l.numberOfCuts ?? 0,
        stackedCutLength: l.stackedCutLength ?? 0,
        cutLength: l.cutLength ?? 0,
        rollLength: l.rollLength ?? 0
      }), t.set(i, 1);
    else {
      const u = n.get(i), r = t.get(i) + 1;
      t.set(i, r), n.set(i, {
        // Sum for areaEfficiency (we'll average it at the end)
        areaEfficiency: u.areaEfficiency + (l.areaEfficiency ?? 0),
        // Sum all other fields
        finishArea: u.finishArea + (l.finishArea ?? 0),
        bandingLength: u.bandingLength + (l.bandingLength ?? 0),
        partArea: u.partArea + (l.partArea ?? 0),
        totalParts: u.totalParts + (l.totalParts ?? 0),
        stackedNumberOfCuts: u.stackedNumberOfCuts + (l.stackedNumberOfCuts ?? 0),
        numberOfCuts: u.numberOfCuts + (l.numberOfCuts ?? 0),
        stackedCutLength: u.stackedCutLength + (l.stackedCutLength ?? 0),
        cutLength: u.cutLength + (l.cutLength ?? 0),
        rollLength: u.rollLength + (l.rollLength ?? 0)
      });
    }
  }
  for (const [a, i] of n) {
    const l = t.get(a) ?? 1;
    i.areaEfficiency = Math.round(i.areaEfficiency / l * 100) / 100;
  }
  return n;
}
const sp = ee({
  stockSelection: Dr.optional(),
  stackingMode: Mr.optional(),
  minSpacing: il.optional()
}).optional(), lp = ee({
  stockType: rn([...Ei]).optional(),
  bladeWidth: at([
    $r,
    w()
  ]).optional(),
  cutType: Tr,
  cutPreference: Ar,
  stackHeight: Fr,
  guillotineOptions: Er,
  efficiencyOptions: Nr.optional(),
  options: sp
}).optional(), op = ee({
  holes: j().min(0).nullable().optional(),
  corners: j().min(0).nullable().optional()
}).optional(), rp = ba.pick({
  l: !0,
  w: !0,
  t: !0,
  q: !0,
  name: !0,
  material: !0,
  orientationLock: !0,
  customData: !0,
  stock: !0
}).extend({
  // Checkout-specific: flattened extras (not in extras container)
  banding: Br.nullable().optional(),
  finish: Vr.nullable().optional(),
  planing: _r.nullable().optional(),
  stockId: w().nullable().optional()
}), up = ee({
  stock: ve(Zn).default([]),
  parts: ve(rp).optional(),
  options: Bf,
  type: w().optional(),
  // variable | simple
  materials: ve(zf).optional(),
  banding: Ci.nullable().optional(),
  finish: Ci.nullable().optional(),
  planing: Ci.nullable().optional(),
  machining: ze().optional(),
  machiningPricing: op,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: ze().optional(),
  partRules: Rf.optional(),
  customValidation: ee({
    enabled: xe(),
    rules: ve(ze())
  }).optional(),
  saw: lp,
  // Map of saw_id → SawConfig for every saw any pickable stock /
  // material / library override might route to. Used by the calculator
  // to swap `sawData` when the customer picks a material whose
  // `db_sawId` differs from the page-load saw — keeps the storefront
  // UI (stockType-driven fields, bladeWidth, validation) consistent
  // with what the server-side resolve will actually apply at calc
  // time. Loose value schema (`z.any()`) because the shape mirrors the
  // `saw` field above — the source of truth lives server-side in
  // `sawDocToConfig`, and we don't want to maintain a redundant
  // client-side schema.
  sawsById: De(w(), ze()).optional(),
  stockFilter: ee({
    enabled: xe().optional(),
    serverMode: xe().optional(),
    config: Ki.optional()
  }).optional(),
  // Product catalog configuration
  products: ee({
    enabled: xe().optional(),
    showCategories: xe().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: ee({
    baseUrl: w(),
    orgSlug: w(),
    isCustomDomain: xe().optional(),
    // WebSocket origin + org id for the storefront's inventory-change watcher
    // (Vanilla.vue startInventoryWatch). Host integrations inject these from
    // the /config response wrapper (`orgId`) and their deploy env.
    wsServer: w().optional(),
    orgId: w().optional()
  }).optional(),
  // Admin configuration (configurator, etc.)
  config: ee({
    configurator: ee({
      enabled: xe(),
      url: w().nullable().optional(),
      spec: ze().nullable().optional()
    }).optional()
  }).optional()
});
ee({
  slug: w().optional(),
  company: ee({
    name: w(),
    contactEmail: w(),
    phone: w().optional(),
    address: w().optional()
  }),
  branding: ee({
    logo: w().optional(),
    favicon: w().optional(),
    colors: ee({
      button: w(),
      buttonText: w(),
      headerBackground: w().optional(),
      headerText: w().optional(),
      partA: w().optional(),
      partB: w().optional(),
      partSelected: w().optional(),
      stock: w().optional(),
      text: w().optional()
    }),
    showCredit: xe().optional()
  }),
  config: ee({
    stockCount: j().optional(),
    stock: ve(ze()).optional(),
    materials: ve(ze()).optional(),
    options: ze().optional(),
    pricing: ze().optional(),
    banding: ze().optional(),
    finish: ze().optional(),
    planing: ze().optional(),
    machining: ze().optional(),
    bandingPricing: De(w(), j()).optional(),
    finishPricing: De(w(), j()).optional(),
    planingPricing: De(w(), j()).optional(),
    machiningPricing: De(w(), j()).optional(),
    saw: ze().optional(),
    shipping: ee({
      enabled: xe(),
      originCountry: w().optional()
    }).optional(),
    stockFilter: ee({
      config: Ki.optional()
    }).optional(),
    partRules: ze().optional(),
    customFields: ve(ze()).optional(),
    termsUrl: w().optional(),
    termsContent: w().optional(),
    tracking: ee({
      gaMeasurementId: w().optional(),
      gtmContainerId: w().optional()
    }).optional(),
    customValidation: ee({
      enabled: xe(),
      rules: ve(ze())
    }).optional(),
    importSettings: ee({
      grouping: rn(["material", "material-variant", "auto"]).optional(),
      codeRegex: w().optional()
    }).optional()
  }),
  stripe: ee({
    enabled: xe(),
    publishableKey: w().optional(),
    currency: w().optional()
  }).optional(),
  customerAccounts: ee({
    enabled: xe(),
    requireForCheckout: xe().optional()
  }).optional()
});
function cp(e) {
  const n = up.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    error: n.success ? void 0 : n.error
  };
}
function dp(e) {
  const n = cp(e);
  if (!n.success) {
    const t = n.error?.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(e, null, 2)), console.error("Validation errors:", t), new Error(`Invalid checkout data: ${t}`);
  }
  return n.data;
}
function an(e) {
  return e == null ? !1 : typeof e == "object" && e.value !== void 0 ? e.value : e;
}
function fp(e) {
  if (e.extras?.banding?.sides) {
    const n = e.extras.banding.sides, t = {};
    if (gt(n.a) || gt(n.b) || gt(n.c) || gt(n.d))
      t.x1 = gt(n.a) ? an(n.a) : !1, t.y1 = gt(n.b) ? an(n.b) : !1, t.x2 = gt(n.c) ? an(n.c) : !1, t.y2 = gt(n.d) ? an(n.d) : !1;
    else {
      const i = $i(n);
      t.x1 = gt(i.x1) ? an(i.x1) : !1, t.x2 = gt(i.x2) ? an(i.x2) : !1, t.y1 = gt(i.y1) ? an(i.y1) : !1, t.y2 = gt(i.y2) ? an(i.y2) : !1;
    }
    e.banding = t;
  }
  if (e.extras?.finish?.faces) {
    const n = e.extras.finish.faces, t = {};
    t.a = gt(n.a) ? an(n.a) : !1, t.b = gt(n.b) ? an(n.b) : !1, e.finish = t;
  }
  if (e.extras?.planing) {
    const n = e.extras.planing, t = {}, a = $i(n.sides || {});
    n.sides && (gt(a.x1) && (t.x1 = a.x1), gt(a.x2) && (t.x2 = a.x2), gt(a.y1) && (t.y1 = a.y1), gt(a.y2) && (t.y2 = a.y2)), n.faces && (gt(n.faces.a) && (t.a = n.faces.a), gt(n.faces.b) && (t.b = n.faces.b)), Object.keys(t).length > 0 && (e.planing = t);
  }
  (e.extras?.banding || e.extras?.finish || e.extras?.planing) && delete e.extras;
}
function pp(e, n = 0) {
  if (n === 0)
    return e;
  if (n === 1 || n === 2) {
    const t = Math.max(e.l, e.w), a = Math.min(e.l, e.w);
    e.w > e.l && (e.l = t, e.w = a);
  }
  return e;
}
function Ml(e, n = 0) {
  debugger;
  return n === 0 || e.forEach((t) => pp(t, n)), e;
}
function mp(e) {
  const n = typeof e.weight == "number" && Number.isFinite(e.weight) && e.weight > 0 ? e.weight : null;
  if (n !== null) return n;
  const t = typeof e.density == "number" && Number.isFinite(e.density) && e.density > 0 ? e.density : null, a = typeof e.l == "number" ? e.l : null, i = typeof e.w == "number" ? e.w : null, l = typeof e.t == "number" ? e.t : null;
  if (!t || !a || !i || !l) return null;
  const u = a / 1e3 * (i / 1e3) * (l / 1e3);
  return Math.round(t * u * 100) / 100;
}
function Dl(e) {
  const n = e.machining;
  if (!n) return;
  const t = {};
  return n.holes?.length && (t.holes = n.holes.map((a) => ({
    x: a.x,
    y: a.y,
    diameter: a.diameter,
    ...a.depth != null && { depth: a.depth },
    face: a.face ?? 0,
    type: a.type ?? "regular"
  }))), n.hingeHoles?.length && (t.hingeHoles = n.hingeHoles.map((a) => ({
    position: a.position,
    side: a.side,
    face: a.face ?? 0,
    numHoles: a.numHoles,
    diameter: a.diameter,
    depth: a.depth,
    hingeLength: a.hingeLength,
    distanceFromEdge: a.distanceFromEdge,
    outerSpacing: a.outerSpacing
  }))), n.corners?.length && (t.corners = n.corners.map((a) => ({
    index: a.index,
    type: a.type ?? null,
    size: a.size ?? null
  }))), Object.keys(t).length > 0 ? t : void 0;
}
function gp(e, n, t, a, i, l, u, r) {
  const c = $l(a), f = Nl(a), k = n.map((v) => {
    const $ = {
      l: v.l,
      w: v.w,
      t: v?.t ?? null,
      material: v.material ?? null,
      orientationLock: v.orientationLock ?? null,
      q: u?.addedPartTally?.[v.parentId] || v.q,
      name: v.name ?? null,
      customData: v.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: mu(),
      finish: Ua(),
      planing: hu()
    }, G = { ...v };
    return fp(G), G.banding && ($.banding = G.banding), G.finish && ($.finish = G.finish), G.planing && ($.planing = G.planing), $;
  }), C = t.map((v) => {
    const $ = {
      id: v.id,
      name: v?.name ?? null,
      l: v.l,
      w: v.w,
      t: v?.t ?? null,
      material: v.material ?? null,
      code: v?.code ?? null,
      q: u?.usedStockTally?.[v.parentId] || v.q,
      cost: v?.cost ?? null,
      discount: v?.discount ?? null,
      pricingFormula: v?.pricingFormula ?? null,
      analysis: c.get(v.parentId) ?? null,
      sheets: f.get(v.parentId) ?? null,
      customData: v?.customData ?? null
    };
    return v?.trim && ($.trim = $i(v.trim)), $;
  }), L = {
    parts: l.map((v) => {
      const $ = {
        id: v.id ? String(v.id).split(".")[0] : v.id,
        name: v.name,
        l: v.l,
        w: v.w,
        t: v.t ?? null,
        material: v.material,
        q: v.q,
        orientationLock: v.orientationLock ?? null,
        stock: v.stock ?? null,
        customData: v.customData ?? null
      };
      v.extras && ($.extras = {}, v.extras.banding?.sides && ($.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && ($.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && ($.extras.planing = {
        ...v.extras.planing.sides && { sides: v.extras.planing.sides },
        ...v.extras.planing.faces && { faces: v.extras.planing.faces }
      }));
      const G = Dl(v);
      return G && ($.machining = G), $;
    })
  };
  return r && Ml(k, r), {
    jobId: e,
    metadata: u,
    parts: k,
    stock: C,
    offcuts: i?.map(Tl) || [],
    inputs: L
  };
}
function hp(e, n, t, a, i, l, u, r) {
  const c = $l(a), f = Nl(a), k = n.map((v) => {
    const $ = {
      l: v.l,
      w: v.w,
      t: v?.t ?? null,
      material: v.material ?? null,
      orientationLock: v.orientationLock ?? null,
      q: u?.addedPartTally?.[v.parentId] || v.q,
      name: v.name ?? null,
      customData: v.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: Ni() },
        finish: { faces: Ua() },
        planing: gu()
      }
    };
    return v.extras && (v.extras.banding?.sides && ($.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && ($.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && ($.extras.planing = {
      sides: v.extras.planing.sides || Ni(),
      faces: v.extras.planing.faces || Ua()
    })), $;
  }), C = t.map((v) => ({
    id: v.id,
    name: v?.name ?? null,
    l: v.l,
    w: v.w,
    t: v?.t ?? null,
    material: v.material ?? null,
    code: v?.code ?? null,
    q: u?.usedStockTally?.[v.parentId] || v.q,
    trim: v?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: v?.cost ?? null,
    discount: v?.discount ?? null,
    pricingFormula: v?.pricingFormula ?? null,
    analysis: c.get(v.parentId) ?? null,
    sheets: f.get(v.parentId) ?? null,
    // New stock fields
    color: v?.color ?? null,
    density: v?.density ?? null,
    weight: mp(v),
    imageUrl: v?.imageUrl ?? null,
    tags: v?.tags ?? null,
    available: v?.available ?? null,
    customData: v?.customData ?? null
  })), L = {
    parts: l.map((v) => {
      const $ = {
        id: v.id ? String(v.id).split(".")[0] : v.id,
        name: v.name,
        l: v.l,
        w: v.w,
        t: v.t ?? null,
        material: v.material,
        q: v.q,
        orientationLock: v.orientationLock ?? null,
        stock: v.stock ?? null,
        customData: v.customData ?? null
      };
      v.extras && ($.extras = {}, v.extras.banding?.sides && ($.extras.banding = { sides: v.extras.banding.sides }), v.extras.finish?.faces && ($.extras.finish = { faces: v.extras.finish.faces }), v.extras.planing && ($.extras.planing = {
        ...v.extras.planing.sides && { sides: v.extras.planing.sides },
        ...v.extras.planing.faces && { faces: v.extras.planing.faces }
      }));
      const G = Dl(v);
      return G && ($.machining = G), $;
    })
  };
  return r && Ml(k, r), {
    jobId: e,
    metadata: u,
    parts: k,
    stock: C,
    offcuts: i?.map(Tl) || [],
    inputs: L
  };
}
function vp(e) {
  return e ? !!e.code || !!e.name || !!e.sourceCatalogueKey || Array.isArray(e.groups) && e.groups.length > 0 || Array.isArray(e.labels) && e.labels.length > 0 || !!e.pricing && typeof e.pricing == "object" && Object.keys(e.pricing).length > 0 : !1;
}
function bp(e, n, t) {
  const a = e.sourceCatalogueKey ? n?.pricing || {} : {};
  return e.pricing && typeof e.pricing == "object" ? { ...a, ...e.pricing } : t ? { ...a, [t]: e.price ?? 0 } : { ...a };
}
const yp = "stockExtras";
function Eg(e, n) {
  !n || typeof n != "object" || (e.resolvedExtras = n);
}
function Wa(e) {
  const n = e?.resolvedExtras;
  if (n && typeof n == "object") return n;
  const t = e?.customData?.[yp];
  if (t && typeof t == "object") return t;
}
function _l(e, n) {
  return Wa(e)?.[n];
}
function kp(e) {
  const n = Wa(e);
  if (!n) return !1;
  for (const t of wl)
    if (n[t]) return !0;
  return !1;
}
function wp(e) {
  const t = _l(e, "banding")?.sourceCatalogueKey;
  return typeof t == "string" && t ? t : null;
}
function Sp(e, n) {
  if (n !== "banding") return !1;
  const t = e?.sourceCatalogueKey;
  return typeof t == "string" && t.length > 0;
}
function xp(e) {
  const n = e.customData?.stockName || "";
  return {
    name: e.name || n || void 0,
    brand: e.brand,
    variant: e.variant,
    material: e.material,
    finish: e.finish,
    code: e.code,
    displayName: e.displayName
  };
}
function Pp(e) {
  const n = (e.variant || "").trim(), t = (e.material || "").trim(), a = (e.name || "").trim();
  if (n && a && t && n.toUpperCase() !== a.toUpperCase())
    return `${n} ${a}`.toUpperCase();
  if (n && t) return n.toUpperCase();
  if (t) return t.toUpperCase();
  const i = (e.code || "").trim();
  return i ? i.toUpperCase() : (Jn(xp(e), { fallback: "" }).fullLabel || "").toUpperCase();
}
function Cp(e) {
  if (e && typeof e == "object" && "resolvedExtras" in e) {
    const { resolvedExtras: n, ...t } = e;
    return t;
  }
  return e;
}
const Op = ["id", "data-index"], Ip = /* @__PURE__ */ dt({
  __name: "BandingButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = U({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), l = () => {
      if (!t.inputShape) return;
      let c = {
        l1: Kn(t.inputShape, "banding", "side.l1"),
        l2: Kn(t.inputShape, "banding", "side.l2"),
        w1: Kn(t.inputShape, "banding", "side.w1"),
        w2: Kn(t.inputShape, "banding", "side.w2")
      };
      const f = tu(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      f && (c = Yr(c, f)), i.value = c;
    };
    Ke([
      () => t.inputShape,
      // Watching the entire inputShape for deep changes
      () => t.orientationModel,
      () => t.stockGrain,
      () => t.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      l();
    }, { deep: !0, immediate: !0 });
    const u = (c) => {
      (c.key === "Enter" || c.key === " ") && r();
    }, r = () => {
      t.disabled || a("clicked");
    };
    return on(() => {
      document.getElementById(t.id)?.addEventListener("keydown", u);
    }), za(() => {
      document.getElementById(t.id)?.removeEventListener("keydown", u);
    }), (c, f) => (I(), _("div", {
      id: e.id,
      class: Ze(["banding-button", { open: e.open, disabled: e.disabled }]),
      "data-field": "banding",
      "data-index": e.index,
      tabindex: "0",
      onClick: r
    }, [
      z("div", {
        class: Ze(["outer", {
          l1: i.value.l1,
          l2: i.value.l2,
          w1: i.value.w1,
          w2: i.value.w2
        }])
      }, [...f[0] || (f[0] = [
        z("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Op));
  }
}), Lp = /* @__PURE__ */ Ht(Ip, [["__scopeId", "data-v-60b62a98"]]), Ep = {
  key: 0,
  class: "material-picker__selected"
}, Fp = ["src", "alt"], Ap = ["title"], Tp = { class: "material-picker__selected-stack" }, Np = { class: "material-picker__selected-line" }, $p = { class: "material-picker__selected-name" }, Mp = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, Dp = {
  key: 0,
  class: "material-picker__selected-code"
}, _p = {
  key: 1,
  class: "material-picker__placeholder"
}, Vp = { class: "material-picker__search-wrap" }, Bp = ["placeholder"], Rp = {
  key: 0,
  class: "material-picker__search-spinner",
  "aria-hidden": "true"
}, qp = {
  class: "material-picker__list",
  role: "listbox"
}, jp = {
  key: 0,
  class: "material-picker__empty"
}, Up = ["aria-selected", "onMousedown", "onMouseenter"], Gp = ["src", "alt"], Wp = ["title"], zp = { class: "material-picker__selected-stack" }, Kp = { class: "material-picker__selected-line" }, Hp = { class: "material-picker__selected-name" }, Zp = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, Jp = {
  key: 0,
  class: "material-picker__selected-code"
}, Qp = /* @__PURE__ */ dt({
  __name: "MaterialPicker",
  props: {
    modelValue: { default: null },
    value: { default: void 0 },
    valueKey: { default: "name" },
    options: { default: void 0 },
    searchFn: { type: Function, default: void 0 },
    loadFn: { type: Function, default: void 0 },
    minQueryLength: { default: 2 },
    debounceMs: { default: 300 },
    id: { default: "" },
    label: { default: "" },
    placeholder: { default: "" },
    searchPlaceholder: { default: "Search materials..." },
    emptyMessage: { default: "No matching materials" },
    enableLabel: { type: Boolean, default: !0 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    issue: { type: Boolean, default: !1 },
    allowClear: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "update:value", "select", "loaded", "clear"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = U(), l = U(), u = U(), r = U(!1), c = U(""), f = U(0), k = U(!1);
    let C = null, L = null;
    const v = U([]), $ = /* @__PURE__ */ new Map(), G = U(null), pe = F(() => t.id || `material-picker-${Math.random().toString(36).slice(2, 8)}`), R = F(() => t.modelValue !== void 0 && t.modelValue !== null ? t.modelValue : t.value !== void 0 && t.value !== null ? t.value : null), { floatingStyles: B, teleportTarget: me, syncFloatingFont: Q } = hl(
      i,
      l,
      {
        sizeApply({ rects: V, availableWidth: Z, availableHeight: Se, elements: $e }) {
          const ne = V.reference.width, be = Math.min(Z, Math.max(ne, 360));
          Object.assign($e.floating.style, {
            maxHeight: `${Math.max(200, Se)}px`,
            minWidth: `${ne}px`,
            width: `${be}px`,
            maxWidth: `${Z}px`
          });
        }
      },
      r
    ), y = F(() => Array.isArray(t.options));
    function M(V) {
      return V.map((Z, Se) => {
        const $e = Jn(Z, { fallback: Z.name }), ne = [$e.fullLabel, Z.code, Z.displayName].filter(Boolean).join(" ").toLowerCase(), be = Z._id || `idx-${Se}`;
        return { ...Z, _key: `${$e.groupKey}|${be}`, _summary: $e, _haystack: ne };
      });
    }
    const te = F(() => y.value ? M(t.options ?? []) : []), D = F(() => y.value ? [] : M(v.value)), W = F(() => {
      if (y.value) {
        const V = c.value.trim().toLowerCase();
        return V ? te.value.filter((Z) => Z._haystack.includes(V)) : te.value;
      }
      return D.value;
    }), O = F(() => {
      const V = R.value;
      if (!V) return null;
      if (y.value) {
        const $e = V.toUpperCase(), be = te.value.find(
          (Te) => typeof Te.code == "string" && Te.code.toUpperCase() === $e
        ) || te.value.find((Te) => H(Te) === V);
        if (be) return be;
      } else if (G.value && H(G.value) === V)
        return M([G.value])[0];
      const Z = { name: V }, Se = Jn(Z, { fallback: V });
      return { ...Z, _key: `${Se.groupKey}|stub`, _summary: Se, _haystack: "" };
    });
    function H(V) {
      const Z = t.valueKey === "_id" ? V._id : V.name;
      return Z != null ? String(Z) : null;
    }
    function ue(V) {
      return H(V) === R.value;
    }
    function le() {
      t.disabled || t.readonly || (r.value = !r.value, r.value && (c.value = "", f.value = 0, Et(() => {
        Q(), u.value?.focus(), !y.value && v.value.length === 0 && Ge("");
      })));
    }
    function ie(V) {
      G.value = V;
      const Z = H(V);
      a("update:modelValue", Z), a("update:value", Z), a("select", V), r.value = !1, c.value = "";
    }
    function Ue() {
      G.value = null, a("update:modelValue", null), a("update:value", null), a("clear");
    }
    async function Ge(V) {
      if (!t.searchFn) return;
      const Z = V.toLowerCase(), Se = $.get(Z);
      if (Se) {
        v.value = Se;
        return;
      }
      if (V.length > 0 && V.length < t.minQueryLength) {
        v.value = [];
        return;
      }
      L && L.abort(), L = new AbortController(), k.value = !0;
      try {
        const $e = await t.searchFn(V);
        $.set(Z, $e), v.value = $e;
      } catch ($e) {
        if ($e?.name === "CanceledError" || $e?.code === "ERR_CANCELED") return;
        v.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Pe() {
      y.value || (C && clearTimeout(C), C = setTimeout(
        () => Ge(c.value),
        t.debounceMs
      ));
    }
    Ke(R, async (V) => {
      if (!y.value) {
        if (!V || !t.loadFn) {
          G.value = null;
          return;
        }
        if (H(G.value ?? {}) !== V)
          try {
            const Z = await t.loadFn(V);
            Z && (G.value = Z, a("loaded", Z));
          } catch {
          }
      }
    }, { immediate: !0 }), on(() => {
      if (y.value && R.value) {
        const V = te.value.find((Z) => H(Z) === R.value);
        V && a("loaded", V);
      }
    });
    function ke(V) {
      switch (V.key) {
        case "ArrowDown":
          V.preventDefault(), f.value < W.value.length - 1 && f.value++;
          break;
        case "ArrowUp":
          V.preventDefault(), f.value > 0 && f.value--;
          break;
        case "Enter":
          V.preventDefault(), W.value[f.value] && ie(W.value[f.value]);
          break;
        case "Escape":
          V.preventDefault(), r.value = !1;
          break;
      }
    }
    function Ye(V) {
      if (!r.value) return;
      const Z = V.target;
      i.value?.contains(Z) || l.value?.contains(Z) || (r.value = !1);
    }
    return Ke(r, (V) => {
      V ? document.addEventListener("mousedown", Ye) : document.removeEventListener("mousedown", Ye);
    }), Ha(() => {
      document.removeEventListener("mousedown", Ye), C && clearTimeout(C), L && L.abort();
    }), Ke(W, () => {
      f.value = 0;
    }), (V, Z) => (I(), _("div", {
      class: Ze(["input-wrapper material-picker", { issue: e.issue, required: e.required, disabled: e.disabled, focused: r.value }])
    }, [
      e.label && e.enableLabel ? (I(), Fe(ma, {
        key: 0,
        id: pe.value,
        label: e.label,
        required: e.required
      }, {
        default: Xt(() => [
          Wt(V.$slots, "label", {}, () => [
            zt(he(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["id", "label", "required"])) : se("", !0),
      z("div", {
        ref_key: "triggerRef",
        ref: i,
        class: Ze(["material-picker__wrapper", { focused: r.value, empty: !O.value }]),
        onClick: le
      }, [
        O.value ? (I(), _("div", Ep, [
          O.value._summary.imageUrl ? (I(), _("img", {
            key: 0,
            src: O.value._summary.imageUrl,
            class: "material-picker__thumb material-picker__thumb--lazy",
            loading: "lazy",
            alt: O.value._summary.productLabel,
            onLoad: Z[0] || (Z[0] = (Se) => Se.target.classList.add("material-picker__thumb--loaded"))
          }, null, 40, Fp)) : O.value.colorHex ? (I(), _("span", {
            key: 1,
            class: "material-picker__swatch",
            style: _t({ background: O.value.colorHex }),
            title: O.value.color || "",
            "aria-hidden": "true"
          }, null, 12, Ap)) : se("", !0),
          z("span", Tp, [
            z("span", Np, [
              z("span", $p, he(O.value._summary.productLabel), 1),
              O.value._summary.brand ? (I(), _("span", Mp, he(O.value._summary.brand), 1)) : se("", !0)
            ]),
            O.value._summary.code ? (I(), _("span", Dp, he(O.value._summary.code), 1)) : se("", !0)
          ])
        ])) : (I(), _("span", _p, he(e.placeholder || "Select…"), 1)),
        O.value && !e.disabled && e.allowClear ? (I(), _("button", {
          key: 2,
          type: "button",
          class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn material-picker__clear",
          "aria-label": "Clear selection",
          onClick: Ln(Ue, ["stop"])
        }, "×")) : se("", !0)
      ], 2),
      (I(), Fe(Ka, {
        to: E(me),
        disabled: !E(me)
      }, [
        r.value ? (I(), _("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: l,
          class: "material-picker__dropdown",
          style: _t(E(B)),
          onMousedown: Z[4] || (Z[4] = Ln(() => {
          }, ["prevent"]))
        }, [
          z("div", Vp, [
            Z[5] || (Z[5] = z("span", {
              class: "material-picker__search-icon",
              "aria-hidden": "true"
            }, "⌕", -1)),
            Za(z("input", {
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": Z[1] || (Z[1] = (Se) => c.value = Se),
              type: "text",
              class: "material-picker__search",
              placeholder: e.searchPlaceholder,
              onMousedown: Z[2] || (Z[2] = Ln(() => {
              }, ["stop"])),
              onInput: Pe,
              onKeydown: ke
            }, null, 40, Bp), [
              [Qs, c.value]
            ]),
            k.value ? (I(), _("span", Rp, "…")) : se("", !0)
          ]),
          z("div", qp, [
            W.value.length === 0 ? (I(), _("div", jp, he(e.emptyMessage), 1)) : se("", !0),
            (I(!0), _(vt, null, Ft(W.value, (Se, $e) => (I(), _("div", {
              key: Se._key,
              class: Ze(["material-picker__option", {
                highlighted: $e === f.value,
                selected: ue(Se)
              }]),
              role: "option",
              "aria-selected": ue(Se),
              onMousedown: Ln((ne) => ie(Se), ["prevent"]),
              onMouseenter: (ne) => f.value = $e
            }, [
              Se._summary.imageUrl ? (I(), _("img", {
                key: 0,
                src: Se._summary.imageUrl,
                class: "material-picker__thumb material-picker__thumb--lazy",
                loading: "lazy",
                alt: Se._summary.productLabel,
                onLoad: Z[3] || (Z[3] = (ne) => ne.target.classList.add("material-picker__thumb--loaded"))
              }, null, 40, Gp)) : Se.colorHex ? (I(), _("span", {
                key: 1,
                class: "material-picker__swatch",
                style: _t({ background: Se.colorHex }),
                title: Se.color || "",
                "aria-hidden": "true"
              }, null, 12, Wp)) : se("", !0),
              z("span", zp, [
                z("span", Kp, [
                  z("span", Hp, he(Se._summary.productLabel), 1),
                  Se._summary.brand ? (I(), _("span", Zp, he(Se._summary.brand), 1)) : se("", !0)
                ]),
                Se._summary.code ? (I(), _("span", Jp, he(Se._summary.code), 1)) : se("", !0)
              ])
            ], 42, Up))), 128))
          ])
        ], 36)) : se("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), Yp = /* @__PURE__ */ Ht(Qp, [["__scopeId", "data-v-6712de1b"]]), Xp = ["id", "data-field", "data-index", "disabled"], Vl = /* @__PURE__ */ dt({
  __name: "FaceExtraButton",
  props: {
    type: {},
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = F(() => t.type === "finish" ? ["fass", "spray-can"] : ["fass", "hammer"]), l = F(() => !!t.inputShape && Kn(t.inputShape, t.type, "face.a")), u = F(() => !!t.inputShape && Kn(t.inputShape, t.type, "face.b")), r = () => {
      t.disabled || a("clicked");
    };
    return (c, f) => {
      const k = Qn("FontAwesomeIcon");
      return I(), _("button", {
        id: e.id,
        class: Ze(["c-btn", [`${e.type}-button`, {
          "face-a": l.value,
          "face-b": u.value,
          selected: e.open
        }]]),
        "data-field": e.type,
        "data-index": e.index,
        type: "button",
        tabindex: "0",
        disabled: e.disabled,
        onClick: r
      }, [
        lt(k, { icon: i.value }, null, 8, ["icon"])
      ], 10, Xp);
    };
  }
}), em = { inheritAttrs: !1 }, tm = /* @__PURE__ */ dt({
  ...em,
  __name: "FinishButton",
  setup(e) {
    return (n, t) => (I(), Fe(Vl, Gt({ type: "finish" }, n.$attrs), null, 16));
  }
});
function nm(e) {
  return e.machining ? "toData" in e.machining ? e.machining.toData() : e.machining : { holes: [], hingeHoles: [], corners: {} };
}
function am(e) {
  const n = nm(e);
  return n ? !!(n.holes && n.holes.length > 0 || n.hingeHoles && n.hingeHoles.length > 0 || n.corners && Object.values(n.corners).some((t) => t && t.type && t.size > 0)) : !1;
}
const im = dt({
  name: "MachiningButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["open"],
  computed: {
    hasMachining() {
      return am(this.inputShape);
    },
    disabledOrReadonly() {
      return this.disabled || !!this.inputShape?.readonly;
    }
  },
  methods: {
    openMachining() {
      this.disabled || this.$emit("open");
    }
  }
}), sm = ["id", "disabled"];
function lm(e, n, t, a, i, l) {
  const u = Qn("FontAwesomeIcon");
  return I(), _("button", {
    id: e.id,
    class: Ze(["c-btn machining-button", { selected: e.hasMachining }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.openMachining && e.openMachining(...r))
  }, [
    lt(u, { icon: ["fass", "hammer"] })
  ], 10, sm);
}
const om = /* @__PURE__ */ Ht(im, [["render", lm]]), rm = dt({
  name: "CustomProductsButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["open"],
  computed: {
    hasSelections() {
      const e = this.inputShape?.extras?.machining ?? null, n = this.inputShape?.extras?.addon?.[""] ?? null;
      return !!(e && Object.keys(e).length || n && Object.values(n).some((t) => t !== !1 && t !== "" && t !== 0 && t !== void 0 && t !== null));
    }
  },
  methods: {
    open() {
      this.disabled || this.$emit("open");
    }
  }
}), um = ["id", "disabled"];
function cm(e, n, t, a, i, l) {
  const u = Qn("FontAwesomeIcon");
  return I(), _("button", {
    id: e.id,
    class: Ze(["c-btn custom-products-button", { selected: e.hasSelections }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.open && e.open(...r))
  }, [
    lt(u, { icon: ["fass", "box"] })
  ], 10, um);
}
const dm = /* @__PURE__ */ Ht(rm, [["render", cm]]), fm = ["id"], pm = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, mm = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, gm = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, hm = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, vm = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, bm = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, ym = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Zs = /* @__PURE__ */ dt({
  __name: "OrientationButton",
  props: {
    id: { default: "" },
    orientationModel: { default: 0 },
    rectangleType: { default: null },
    rectangle: { default: () => null },
    shapeOrientation: { default: "" },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 },
    debug: { type: Boolean, default: !1 }
  },
  emits: ["updateOrientation"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = U(0), l = U(!1), u = (D, W, O, H) => {
      if (!He(O) || W === 0)
        return D;
      const ue = r();
      return W === 1 || W === 2 && H !== "n" && D ? ue : D;
    }, r = (D) => {
      const W = { ...t, ...D };
      if (!W.rectangle || !He(W.rectangle)) return "";
      let O = "";
      switch (W.orientationModel) {
        case 0:
          O = me.value;
          break;
        case 1:
          W.stockGrain === "y" || W.stockGrain === "n" ? O = W.rectangle.l >= W.rectangle.w ? "l" : "w" : W.rectangle.l >= W.rectangle.w ? O = W.stockGrain : O = O = W.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          O = W.rectangle.l >= W.rectangle.w ? "l" : "w";
          break;
      }
      return O;
    }, c = () => {
      if (t.disabled || R.value.length <= 1)
        return;
      const D = f(me.value);
      "multiEdit" in t.rectangle && t.rectangle.multiEdit && me.value === "" && i.value !== D && i.value === 0 && (i.value = D);
      let O = null;
      [1, 2].includes(t.orientationModel) ? O = C() : O = k(), i.value = O;
    }, f = (D) => {
      const W = R.value.findIndex((O) => O === D);
      return W === -1 ? 0 : W;
    }, k = () => {
      let D = i.value + 1;
      return D > R.value.length - 1 && (D = 0), D;
    }, C = () => {
      let D = 0;
      if (me.value === "") {
        const W = r();
        D = R.value.findIndex((O) => O === W);
      } else
        D = R.value.findIndex((W) => W === "");
      return D;
    }, L = (D) => {
      a("updateOrientation", D);
    }, v = () => {
      const D = me.value;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit)
        return D === " " ? " " : D === "" ? "" : D === "l" ? "l" : D === "w" ? "w" : "default";
      switch (t.orientationModel) {
        case 0:
          return D === " " ? " " : D ? t.stockGrain === "n" ? D || t.shapeOrientation || "default" : t.stockGrain === "w" ? D === "w" ? "w" : "l" : D === "l" ? "l" : "w" : "default";
        case 1:
          return D === " " ? " " : D ? t.stockGrain === "n" ? D || t.shapeOrientation || "default" : t.stockGrain === "w" ? D === "w" ? "w" : "l" : D === "l" ? "l" : "w" : "default";
        case 2:
          return D === " " ? " " : D ? t.stockGrain === "n" ? D || t.shapeOrientation || "default" : t.stockGrain === "w" ? D === "w" ? "w" : "l" : D === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, $ = () => {
      if (!t.rectangle)
        return;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit && !me.value) {
        pe("");
        return;
      }
      const D = u(
        me.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if (D !== me.value) {
        pe(D);
        return;
      }
      if (!l.value || i.value === -1) {
        const W = f(me.value);
        i.value = W;
      }
      if (He(t.rectangle)) {
        if (t.orientationModel === 1) {
          const W = y.value ? r() : me.value;
          pe(W);
          return;
        }
        if (t.orientationModel === 2) {
          let W;
          y.value ? W = t.stockGrain !== "n" ? r() : "" : W = me.value, pe(W);
        }
      }
    }, G = U(!1), pe = (D) => {
      const W = f(D);
      G.value = !0, i.value = W, G.value = !1, L(D);
    }, R = F(() => {
      if (!t.rectangle) return ["l", "w"];
      if (In(t.rectangle)) return ["l", "w"];
      let D = ["", "l", "w"];
      return t.rectangle.multiEdit ? [" ", "", "l", "w"] : (B.value && (D = D.filter((W) => W !== "w")), D);
    }), B = F(() => He(t.rectangle) || fi(t.rectangle) ? t.rectangle.isSquare : t.rectangleType && t.rectangle?.l && t.rectangle?.w ? t.rectangle?.l === t.rectangle?.w : !1), me = F(() => {
      let D = "";
      if (In(t.rectangle))
        D = t.rectangle.direction === "horizontal" ? "l" : "w";
      else if (He(t.rectangle)) {
        const W = t.rectangle.orientationLock;
        D = W === null ? "" : W;
      } else if (fi(t.rectangle)) {
        const O = t.rectangle.grain ?? "";
        O === "l" || O === "w" || O === "" || O === " " ? D = O : D = "";
      }
      return D;
    }), Q = F(() => In(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), y = F(() => !Q.value.l && !Q.value.w), M = F(() => In(t.rectangle) ? !1 : Da(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), te = F(() => {
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (fi(t.rectangle) || t.rectangleType === "stock") {
        const ue = t.rectangle.grain;
        return "multiEdit" in t.rectangle && t.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ue] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ue] || "noGrain";
      }
      const D = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, W = t.stockGrain || "default";
      let O = "default";
      He(t.rectangle) || t.rectangleType === "shape" ? O = v() : In(t.rectangle) && (O = t.rectangle.direction || "default");
      const H = D[W]?.[O];
      return H || D[W]?.default || "freeRotation";
    });
    return Ke(i, (D, W) => {
      l.value && W !== void 0 && (G.value || L(R.value[D]));
    }, { immediate: !1 }), Ke(Q, (D, W) => {
      if (!t.rectangle || t.orientationModel === 0 || !He(t.rectangle) || He(t.rectangle) && (t.orientationModel === 2 && W.l && W.w && !me.value || t.stockGrain === "n" && !me.value))
        return;
      const O = r();
      me.value !== O && L(O);
    }, { immediate: !1 }), Ke(() => t.stockGrain, (D, W) => {
      D !== W && $();
    }, { immediate: !0 }), on(() => {
      $(), Et(() => l.value = !0);
    }), (D, W) => (I(), _("button", {
      type: "button",
      id: e.id,
      class: Ze(["c-btn orientation-button", { rot: M.value, square: B.value, disabled: e.disabled, [te.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: c
    }, [
      te.value === "delete" ? (I(), _("svg", pm, [...W[0] || (W[0] = [
        z("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : se("", !0),
      te.value === "noChange" ? (I(), _("svg", mm, [...W[1] || (W[1] = [
        z("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : se("", !0),
      te.value === "freeRotation" ? (I(), _("svg", gm, [...W[2] || (W[2] = [
        z("g", null, [
          z("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          z("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          z("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          z("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : se("", !0),
      te.value === "leftRight" ? (I(), _("svg", hm, [...W[3] || (W[3] = [
        z("g", null, [
          z("path", { d: "m5.408 19.408h61.095" }),
          z("g", null, [
            z("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            z("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : se("", !0),
      te.value === "topBottom" ? (I(), _("svg", vm, [...W[4] || (W[4] = [
        z("g", null, [
          z("path", { d: "m19.408 66.503v-61.095" }),
          z("g", null, [
            z("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            z("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : se("", !0),
      te.value === "grainLeftRight" ? (I(), _("svg", bm, [...W[5] || (W[5] = [
        z("g", null, [
          z("path", { d: "m3 3h99.887" }),
          z("path", { d: "m3.113 32h99.887" }),
          z("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : se("", !0),
      te.value === "grainTopBottom" ? (I(), _("svg", ym, [...W[6] || (W[6] = [
        z("g", null, [
          z("path", { d: "m61 3v99.887" }),
          z("path", { d: "m32 3.113v99.887" }),
          z("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : se("", !0)
    ], 10, fm));
  }
}), km = { inheritAttrs: !1 }, wm = /* @__PURE__ */ dt({
  ...km,
  __name: "PlaningButton",
  setup(e) {
    return (n, t) => (I(), Fe(Vl, Gt({ type: "planing" }, n.$attrs), null, 16));
  }
});
function Sm(e, n, t) {
  let a = null;
  Ke(
    () => e.value ? { l: e.value.l, w: e.value.w } : null,
    (i) => {
      const l = typeof n == "number" ? n : n.value;
      if (!Xr(l) || !i || !e.value) return;
      const u = i.w > i.l;
      if (a === null) {
        a = u;
        return;
      }
      if (a !== u) {
        const r = eu(l);
        for (const c of r)
          Rr(e.value, c);
        a = u;
      }
    },
    { immediate: !0 }
  );
}
const xm = {
  key: 0,
  class: "info"
}, Pm = ["disabled"], Cm = /* @__PURE__ */ dt({
  __name: "CheckoutField",
  props: {
    field: {
      type: Object,
      required: !0
    },
    item: {
      type: Object,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    },
    typePrefix: {
      type: String,
      required: !0
    },
    numberFormat: {
      type: String,
      default: "decimal"
    },
    multiEdit: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    enableLabel: {
      type: Boolean,
      default: !1
    },
    stockGrain: {
      type: String,
      default: "n"
    },
    orientationModel: {
      type: Number,
      default: 0
    },
    bandingEnabled: {
      type: Object,
      default: null
    },
    materialOptions: {
      type: Array,
      default: () => []
    },
    // Optional rich material items used by the searchable MaterialPicker.
    // When omitted, the field falls back to the legacy <select> driven by
    // `materialOptions` so older callers keep working.
    materialItems: {
      type: Array,
      default: () => []
    },
    thicknessOptions: {
      type: Array,
      default: () => []
    },
    widthOptions: {
      type: Array,
      default: () => []
    },
    issue: {
      type: Boolean,
      default: !1
    },
    warning: {
      type: Boolean,
      default: !1
    },
    fullStockDisabled: {
      type: Boolean,
      default: !1
    },
    materialExtrasDisabled: {
      type: Object,
      default: () => ({ banding: !1, finish: !1, planing: !1, machining: !1 })
    }
  },
  emits: ["update", "validation", "blur", "open-banding", "open-machining", "open-custom-products", "open-finish", "open-planing", "open-image-upload"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = F(() => t.field.name === "banding" && He(t.item) ? t.item : null);
    Sm(i, jt(t, "orientationModel"));
    const l = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], u = F(() => l.includes(t.field.name) || t.field.name === "material" && t.typePrefix === "part" || t.field.name === "t" && t.thicknessOptions?.length > 0 || t.field.name === "w" && t.widthOptions?.length > 0), r = F(() => {
      try {
        const y = t.field.propertyPath || t.field.name;
        return y.includes(".") ? Yt(t.item, y) ?? null : t.item[y] ?? null;
      } catch (y) {
        return console.error("[CheckoutField] Error getting field value:", y), null;
      }
    }), c = F(() => {
      if (t.field.custom && t.field.type) {
        const te = t.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(te))
          return te;
      }
      const y = {
        number: "unitDependent",
        integer: "integer",
        string: "string",
        boolean: "checkbox",
        enum: "select"
      };
      if (t.field.name === "q") return "integer";
      if (t.field.name === "cost") return "string";
      if (t.field.name === "autoAdd") return "checkbox";
      if (t.field.name === "material" && t.typePrefix === "stock") return "string";
      if (["l", "w", "t", "trim"].includes(t.field.name)) return "unitDependent";
      const M = y[t.field.type];
      return M || "string";
    }), f = F(() => t.field.output ? t.field.output : null), k = F(() => t.field.options || []), C = F(() => !!(t.readonly || t.item?.readonly || t.fullStockDisabled)), L = F(() => t.item.isNew ? !1 : Os(t.item, [t.field.name])), v = F(() => t.item.isNew ? !1 : Os(t.item, [t.field.name], !0)), $ = F(() => t.multiEdit || t.item.isNew || !1), G = F(() => t.materialOptions?.length > 0 && He(t.item) ? !t.item.material : !1), pe = F(() => t.widthOptions?.length === 1), R = F(() => t.field.info ? typeof t.field.info == "string" ? t.field.info : typeof t.field.info == "object" && r.value !== null && t.field.info[r.value] || null : null), B = (y) => {
      a("update", y);
    }, me = (y, M) => {
      a("validation", y, M);
    }, Q = () => {
      a("blur");
    };
    return (y, M) => u.value ? (I(), _(vt, { key: 1 }, [
      e.field.name === "orientationLock" ? (I(), Fe(Zs, {
        key: 0,
        rectangle: e.item,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        "button-background": "#2c8d8f",
        disabled: C.value,
        onUpdateOrientation: B
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "grain" ? (I(), Fe(Zs, {
        key: 1,
        rectangle: e.item,
        "button-background": "#2c8d8f",
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        disabled: C.value,
        onUpdateOrientation: B
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "banding" ? (I(), Fe(Lp, {
        key: 2,
        "input-shape": E(He)(e.item) ? e.item : null,
        open: e.bandingEnabled?.autoId === e.item.autoId,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        index: e.index,
        disabled: C.value || e.materialExtrasDisabled?.banding,
        onClicked: M[0] || (M[0] = (te) => y.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : e.field.name === "finish" ? (I(), Fe(tm, {
        key: 3,
        "input-shape": E(He)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: C.value || e.materialExtrasDisabled?.finish,
        onClicked: M[1] || (M[1] = (te) => y.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "planing" ? (I(), Fe(wm, {
        key: 4,
        "input-shape": E(He)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: C.value || e.materialExtrasDisabled?.planing,
        onClicked: M[2] || (M[2] = (te) => y.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "machining" ? (I(), Fe(om, {
        key: 5,
        "input-shape": E(He)(e.item) ? e.item : null,
        disabled: C.value || e.materialExtrasDisabled?.machining,
        onOpen: M[3] || (M[3] = (te) => y.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "customProducts" ? (I(), Fe(dm, {
        key: 6,
        "input-shape": E(He)(e.item) ? e.item : null,
        disabled: C.value,
        onOpen: M[4] || (M[4] = (te) => y.$emit("open-custom-products"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "material" && e.typePrefix === "part" && e.materialItems && e.materialItems.length > 0 ? (I(), Fe(Yp, {
        key: 7,
        id: `${e.typePrefix}-material-${e.index}`,
        value: r.value,
        options: e.materialItems,
        "value-key": "name",
        label: E(Ee)(e.field.label || "fields.material"),
        placeholder: E(Ee)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        disabled: e.field.disabled || C.value || e.readonly,
        required: e.field.required || !1,
        issue: L.value,
        "allow-clear": !1,
        "onUpdate:value": B
      }, null, 8, ["id", "value", "options", "label", "placeholder", "disabled", "required", "issue"])) : e.field.name === "material" && e.typePrefix === "part" ? (I(), Fe(ga, {
        key: 8,
        id: `${e.typePrefix}-material-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Ee)(e.field.label || "fields.material"),
        placeholder: E(Ee)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: e.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !e.materialOptions?.length,
        required: !1,
        text: {
          select: E(Ee)("actions.select"),
          delete: E(Ee)("actions.delete")
        },
        "onUpdate:value": B,
        onValidation: me
      }, {
        default: Xt(() => [
          Wt(y.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : e.field.name === "t" && e.thicknessOptions?.length > 0 ? (I(), Fe(ga, {
        key: 9,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Ee)(e.field.label || "fields.t"),
        "enable-label": !1,
        options: e.thicknessOptions,
        readonly: e.readonly,
        disabled: G.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: E(Ee)("actions.select"),
          delete: E(Ee)("actions.delete")
        },
        output: "number",
        "onUpdate:value": B,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "w" && e.widthOptions?.length > 0 ? (I(), Fe(ga, {
        key: 10,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: E(Ee)(e.field.label || "fields.w"),
        "enable-label": !1,
        options: e.widthOptions,
        readonly: e.readonly,
        disabled: pe.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: E(Ee)("actions.select"),
          delete: E(Ee)("actions.delete")
        },
        output: "number",
        "onUpdate:value": B,
        onValidation: me
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "imageUpload" ? (I(), _("button", {
        key: 11,
        type: "button",
        disabled: e.readonly,
        onClick: M[5] || (M[5] = (te) => y.$emit("open-image-upload"))
      }, [
        lt(E(ja), { icon: ["fass", "image"] })
      ], 8, Pm)) : se("", !0)
    ], 64)) : (I(), Fe(ga, {
      key: 0,
      id: `${e.typePrefix}-${e.field.name}-${e.index}`,
      "data-field": e.field.name,
      "data-index": e.index,
      type: c.value,
      value: r.value,
      label: E(Ee)(e.field.label || e.field.name),
      placeholder: E(Ee)(e.field.placeholder || e.field.name),
      "enable-label": e.enableLabel,
      output: f.value,
      options: k.value,
      "select-first-option-disabled": e.field.selectFirstOptionDisabled ?? !0,
      disabled: e.field.disabled || C.value,
      readonly: e.readonly || e.field.readonly,
      required: e.field.required || !1,
      "allow-zero": e.field.allowZero ?? !1,
      "true-value": e.field.trueValue ?? !0,
      "false-value": e.field.falseValue ?? !1,
      default: e.field.defaultValue,
      "number-format": e.numberFormat,
      min: e.field.min || null,
      max: e.field.max || null,
      "multi-edit": e.multiEdit,
      text: e.field.text,
      issue: L.value,
      warning: v.value,
      "disable-required-validation": $.value,
      "onUpdate:value": B,
      onValidation: me,
      onBlur: Q
    }, {
      default: Xt(() => [
        R.value ? (I(), _("p", xm, [
          lt(E(ja), { icon: ["fass", "info-circle"] }),
          zt(" " + he(R.value), 1)
        ])) : se("", !0),
        Wt(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Om = {
  key: 0,
  class: "base-dialog__header"
}, Im = {
  key: 1,
  class: "base-dialog__footer"
}, Lm = /* @__PURE__ */ dt({
  __name: "BaseDialog",
  props: {
    open: { type: Boolean, default: void 0 },
    title: {},
    size: { default: "md" },
    closeOnBackdrop: { type: Boolean, default: !0 },
    compact: { type: Boolean, default: !0 },
    bodyForm: { type: Boolean, default: !1 }
  },
  emits: ["update:open", "opened", "closed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, i = t, l = U(null), u = U(null), r = U(null), c = U({}), f = !1;
    function k() {
      const Q = r.value;
      if (!Q) return;
      const y = getComputedStyle(Q);
      c.value = {
        "font-family": y.fontFamily,
        "font-size": y.fontSize,
        "line-height": y.lineHeight,
        color: y.color
      };
    }
    const C = window.__baseDialogStack ?? (window.__baseDialogStack = U([])), L = /* @__PURE__ */ Symbol("base-dialog"), v = F(() => C.value.indexOf(L)), $ = F(() => ({
      "base-dialog__body--form": a.bodyForm,
      "smartcut-content": a.compact
    })), G = F(() => ({ ...c.value }));
    function pe() {
      const Q = l.value;
      if (!Q || Q.open) return;
      k(), Q.showModal(), C.value.includes(L) || C.value.push(L);
      const y = document.getElementById("smartcut-notices");
      y?.matches(":popover-open") && (y.hidePopover(), y.showPopover()), i("opened");
    }
    function R() {
      const Q = l.value;
      !Q || !Q.open || Q.close();
    }
    function B() {
      const Q = C.value.indexOf(L);
      Q >= 0 && C.value.splice(Q, 1), i("update:open", !1), i("closed");
    }
    function me(Q) {
      a.closeOnBackdrop && Q.target === l.value && R();
    }
    return Ke(() => a.open, (Q, y) => {
      Q !== void 0 && (Q && !y ? pe() : !Q && y && R());
    }), on(() => {
      a.open === !0 && pe();
    }), Ha(() => {
      l.value?.open && l.value.close();
      const Q = C.value.indexOf(L);
      Q >= 0 && C.value.splice(Q, 1);
    }), n({
      show: pe,
      close: R,
      dialogRef: l,
      bodyRef: u
    }), (Q, y) => (I(), _(vt, null, [
      z("span", {
        ref_key: "anchorRef",
        ref: r,
        class: "base-dialog__anchor",
        "aria-hidden": "true"
      }, null, 512),
      (I(), Fe(Ka, {
        to: "body",
        disabled: f
      }, [
        z("dialog", {
          ref_key: "dialogRef",
          ref: l,
          class: Ze(["base-dialog", [`base-dialog--${e.size}`, { "base-dialog--compact": e.compact, "base-dialog--stacked": v.value > 0 }]]),
          style: _t(G.value),
          onClick: me,
          onClose: B
        }, [
          Q.$slots.header || e.title ? (I(), _("header", Om, [
            Wt(Q.$slots, "header", {}, () => [
              z("h3", null, he(e.title), 1),
              z("button", {
                type: "button",
                class: "base-dialog__close",
                "aria-label": "Close",
                onClick: R
              }, "×")
            ])
          ])) : se("", !0),
          z("div", {
            ref_key: "bodyRef",
            ref: u,
            class: Ze(["base-dialog__body", $.value])
          }, [
            Wt(Q.$slots, "default")
          ], 2),
          Q.$slots.footer ? (I(), _("footer", Im, [
            Wt(Q.$slots, "footer", { close: R })
          ])) : se("", !0)
        ], 38)
      ]))
    ], 64));
  }
}), Em = { class: "full-stock-dialog__intro" }, Fm = { class: "full-stock-dialog__options" }, Am = ["onClick"], Tm = { class: "full-stock-dialog__dim" }, Nm = {
  key: 0,
  class: "full-stock-dialog__price"
}, $m = ["onClick"], Mm = /* @__PURE__ */ dt({
  __name: "FullStockDialog",
  props: {
    open: { type: Boolean },
    options: {},
    materialLabel: {},
    thickness: {},
    formatPrice: { type: Function }
  },
  emits: ["update:open", "pick", "cancel"],
  setup(e, { emit: n }) {
    const t = e, a = n, i = F({
      get: () => t.open,
      set: (k) => a("update:open", k)
    }), l = F(() => "Choose sheet size"), u = F(() => {
      const k = [];
      t.materialLabel && k.push(t.materialLabel), t.thickness != null && t.thickness !== "" && k.push(`${t.thickness}mm`);
      const C = k.join(" · ");
      return C ? `Multiple sheet sizes available for ${C}. Pick the one you want to buy.` : "Multiple sheet sizes available. Pick the one you want to buy.";
    });
    let r = !1;
    function c(k) {
      r = !0, a("pick", k), a("update:open", !1);
    }
    function f() {
      r || a("cancel"), r = !1;
    }
    return (k, C) => (I(), Fe(Lm, {
      open: i.value,
      "onUpdate:open": C[0] || (C[0] = (L) => i.value = L),
      title: l.value,
      size: "sm",
      onClosed: f
    }, {
      footer: Xt(({ close: L }) => [
        z("button", {
          type: "button",
          class: "c-btn c-btn--ghost",
          onClick: L
        }, "Cancel", 8, $m)
      ]),
      default: Xt(() => [
        z("div", Em, he(u.value), 1),
        z("ul", Fm, [
          (I(!0), _(vt, null, Ft(e.options, (L) => (I(), _("li", {
            key: `${L.l}x${L.w}`,
            class: "full-stock-dialog__option"
          }, [
            z("button", {
              type: "button",
              class: "full-stock-dialog__option-btn",
              onClick: (v) => c(L)
            }, [
              z("span", Tm, he(L.l) + " × " + he(L.w), 1),
              L.cost != null && e.formatPrice ? (I(), _("span", Nm, he(e.formatPrice(L.cost)), 1)) : se("", !0)
            ], 8, Am)
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), Dm = /* @__PURE__ */ Ht(Mm, [["__scopeId", "data-v-df7e1e1c"]]), _m = { class: "checkout-calculator-wrapper" }, Vm = {
  key: 0,
  class: "row table-heading"
}, Bm = {
  key: 0,
  class: "cell center"
}, Rm = ["onClick"], qm = {
  key: 0,
  class: "cell"
}, jm = ["onClick"], Um = { class: "cell" }, Gm = ["disabled", "aria-label", "onClick"], Wm = { class: "button-wrapper main" }, zm = ["aria-label"], Km = ["aria-label", "title", "disabled"], Hm = ["aria-label"], Zm = { id: "part-count" }, Jm = {
  key: 5,
  class: "pagination-controls"
}, Qm = { class: "c-btn-group" }, Ym = ["disabled"], Xm = ["disabled"], eg = { class: "pagination-info" }, tg = ["disabled"], ng = ["disabled"], ag = {
  key: 7,
  id: "messages"
}, ig = {
  key: 0,
  class: "heading"
}, sg = { class: "content" }, lg = {
  key: 8,
  id: "progress"
}, og = { id: "diagram-wrapper" }, rg = {
  key: 0,
  id: "stack"
}, ug = {
  key: 3,
  class: "debug"
}, cg = /* @__PURE__ */ dt({
  __name: "EcommerceCalculator",
  props: {
    inputStock: {
      type: Array,
      default: () => []
    },
    findExtrasPrice: {
      type: Function,
      required: !0
    },
    formatPrice: {
      type: Function,
      required: !0
    },
    inputType: {
      type: String,
      default: "manual"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    showCredit: {
      type: Boolean,
      default: void 0
    },
    diagramNav: {
      type: Boolean,
      default: !1
    },
    debug: {
      type: Boolean,
      default: !1
    },
    // When true, the Calculate button is disabled even if stock is
    // loaded — used by the Products tab to block calculation until
    // every required material-group pick is made. The button still
    // honours the stock-and-thinking checks below; this is an
    // additional gate, not a replacement. Optional tooltip describes
    // what's missing.
    calculateDisabled: {
      type: Boolean,
      default: !1
    },
    calculateDisabledReason: {
      type: String,
      default: ""
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "before-calculate", "result", "no-result", "log", "error"],
  setup(e, { expose: n, emit: t }) {
    const a = qt(() => import("./InputIssues-DUJYf5GZ.js")), i = qt(() => import("./Machining--1kbIlj1.js")), l = qt(() => import("./CustomProducts-CjIC6paH.js")), u = qt(() => import("./ImportCSV-DoIOxx9j.js")), r = qt(() => Promise.resolve().then(() => Fd)), c = qt(() => import("./ImageUpload-9whuWxcT.js")), f = qt(() => import("./EcommerceGroups-B7wOXjIB.js")), k = () => import("./Diagram-l87FFXzB.js"), C = () => import("./Navigation-B68oQMOs.js"), L = () => import("./StockNavigation-Em5ou7Tk.js"), v = () => import("./CalculationSpinner-6DvuHRVM.js"), $ = qt(k), G = qt(C), pe = qt(L), R = qt(v);
    let B = !1;
    const me = U(!1);
    function Q() {
      B || (B = !0, k().then(() => {
        me.value = !0;
      }), C(), L(), v());
    }
    const {
      inputs: y,
      totalInputShapes: M,
      getShapeGrainSummary: te,
      updateNumberFormat: D,
      validateInputStock: W,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: O,
      addInputShape: H,
      addInputStock: ue,
      cloneInputShape: le,
      updateInputShape: ie,
      validationIssues: Ue,
      setExtrasOptionsFromPricing: Ge,
      getCentralizedOptions: Pe
    } = fl(), { r: ke, updateFromResult: Ye, stackedStock: V, uniqueAddedShapes: Z, uniqueUsedStock: Se, usedStock: $e, activeStockAutoId: ne, activeStock: be, setActiveStockAutoId: Te } = Zd();
    Wd({
      stockList: ke.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: Je, reset: wt } = kl(), { addNotice: Xe } = qi();
    Ke(() => y.inputStock.value?.length ?? 0, (s) => {
      s > 0 && Q();
    }, { immediate: !0 }), Ke(
      () => y.inputStock.value?.[0]?.db_sawId ?? null,
      (s) => {
        if (!s || String(s) === b.value) return;
        const o = N.value?.[String(s)];
        o && X(o);
      }
    );
    const un = U(!1);
    Ke(() => Je.value.complete, (s) => {
      s && (un.value = !0);
    }, { immediate: !0 });
    const Bt = F(() => y.inputShapes.value.filter(He)), yn = (s) => !s || !Array.isArray(s) ? [] : s.map((o) => Cu({ parts: [o] }).parts?.[0] || o), rt = e, Y = t, Oe = U(!1), je = U(navigator?.language || "en-US"), Ce = Wn(null), et = window.location.hostname, ut = U(!1), ft = U(!0), it = Go("Checkout/currentURL", window.location.href), st = U([]), At = U(null), tt = U(null), cn = U(!1), dn = U(!1), bt = U(!1), Bn = U(!1), en = U(!1), En = U(Ur()), Rt = U(!1), pt = U(1), Zt = U(10), { socket: fn } = tf({
      refs: {
        connected: ut,
        thinking: bt
      },
      callbacks: {
        onResult(s) {
          const o = s.optimisation;
          if (Ye(o), !o.shapeList?.length || !o.stockList?.length) {
            wt(), Xe({
              type: "error",
              message: Ee("errors.calculation.no_result"),
              additional: [Ee("errors.validation.check_inputs")]
            }), bt.value = !1;
            return;
          }
          if ((g.apiVersion || 3) === 2 ? tt.value = gp(
            s.jobId,
            Z.value,
            Se.value,
            $e.value,
            ke.offcuts?.value || [],
            y.inputShapes.value,
            ke.metadata.value,
            g.resultOrientationModel
          ) : tt.value = hp(
            s.jobId,
            Z.value,
            Se.value,
            $e.value,
            ke.offcuts?.value || [],
            y.inputShapes.value,
            ke.metadata.value,
            g.resultOrientationModel
          ), ke?.metadata?.value?.unplacedParts?.length) {
            const d = ke.metadata.value.unplacedParts.map((S) => S.id).join();
            Xe({
              type: "warning",
              message: Ee("errors.validation.parts_not_fit", { count: ke.metadata.value.unplacedParts.length }) + ": " + d
            });
          }
          tt.value && (tt.value.apiResultV3 = _u({
            jobId: s.jobId,
            saw: o.saw,
            stockList: o.stockList,
            shapeList: o.shapeList,
            cutList: o.cutList,
            offcuts: ke.offcuts?.value || [],
            unusableShapes: o.unusableShapes,
            metadata: ke.metadata.value
          }), Y("result", tt.value)), bt.value = !1;
        },
        onUser(s) {
          Ce.value = s;
        },
        onConnectError(s) {
          Xe({
            type: "error",
            message: Ee("errors.network.cannot_connect"),
            additional: [s]
          });
        },
        onError(s) {
          Xe({
            type: "error",
            message: Ee("errors.general.error_occurred"),
            additional: [s]
          });
        }
      }
    }), St = {
      enable: {
        diagram: !0,
        focus: !0,
        click: !0,
        partName: !0,
        progressNumber: !0,
        orientation: !0,
        banding: !1,
        finish: !1,
        planing: !1,
        machining: !1,
        csvImport: !1,
        pagination: !1,
        fullStock: !1,
        imageUpload: !1,
        diagramNav: !1,
        debug: !1
      },
      colors: {
        partA: "#118ab2",
        partB: void 0,
        partSelected: void 0,
        stock: "#ffd166",
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      apiVersion: 3,
      unitSystem: "metric",
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      maxParts: 10,
      partsPerPage: 10,
      locale: navigator?.language || "en-US",
      orientationModel: 0,
      resultOrientationModel: 2,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: void 0,
      stockGrain: void 0,
      partTrim: 0,
      currency: "USD",
      debug: !1
    }, g = nn(St), h = nn({
      issues: [],
      warnings: [],
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      guillotineOptions: {
        headCuts: !1,
        strategy: "efficiency",
        maxPhase: 3,
        limitStripDimensions: !1
      },
      efficiencyOptions: {
        primaryCompression: "w"
      },
      options: {
        stockSelection: "efficiency",
        minSpacing: 0,
        stackingMode: "identical",
        minSpacingDimension: {
          dimension: 0,
          minSpacing: 0
        }
      }
    }), b = U(null), N = U({});
    function X(s) {
      if (s) {
        if (s.stockType !== void 0 && (Ei.includes(s.stockType) || console.warn(`${s.stockType} is not a valid stockType, expected ${Ei.join("|")}`), h.stockType = s.stockType, s.stockType === "linear" && (h.cutType = void 0, h.cutPreference = void 0)), s.bladeWidth !== void 0) {
          const o = typeof s.bladeWidth == "string" ? parseFloat(s.bladeWidth) : s.bladeWidth;
          o >= 0 ? h.bladeWidth = o : console.warn(`SmartCut - you provided an incorrect blade width of: ${s.bladeWidth}`);
        }
        if (s.cutType !== void 0 && (h.cutType = s.cutType), s.cutPreference !== void 0 && (Is.includes(s.cutPreference) ? h.cutPreference = s.cutPreference : console.warn(`SmartCut - cut preference ${s.cutPreference || "N/A"} is not valid. Expected: ${Is.join("|")}`)), s.guillotineOptions !== void 0 && typeof s.guillotineOptions == "object" && Object.assign(h.guillotineOptions, s.guillotineOptions), s.stackHeight !== void 0) {
          const o = typeof s.stackHeight == "string" ? parseFloat(s.stackHeight) : s.stackHeight;
          h.stackHeight = o;
        }
        s.efficiencyOptions !== void 0 && typeof s.efficiencyOptions == "object" && Object.assign(h.efficiencyOptions, s.efficiencyOptions), s.options !== void 0 && typeof s.options == "object" && (s.options.stockSelection !== void 0 && (h.options.stockSelection = s.options.stockSelection), s.options.stackingMode !== void 0 && (h.options.stackingMode = s.options.stackingMode), s.options.minSpacing !== void 0 && (h.options.minSpacing = s.options.minSpacing)), s.db_id && (b.value = String(s.db_id));
      }
    }
    const re = U(null), ce = F(() => !!g.enable?.groups && !rt.readonly), Ie = U(null), we = U(0), Ve = U(null), ht = F(() => {
      const s = y.inputStock.value.map((o) => o.grain).filter((o) => !!o);
      return s.length ? s.every((o) => o === "l") ? "l" : s.every((o) => o === "w") ? "w" : s.some((o) => o === "l" || o === "w") ? "y" : "n" : "n";
    }), Tt = F(() => ({
      numberFormat: g.numberFormat,
      decimalPlaces: g.decimalPlaces ?? 2,
      fractionRoundTo: g.fractionRoundTo ?? 0
    })), Fn = (s) => {
      Ve.value?.currentGroup && (Ie.value = s, we.value++);
    }, Qa = (s) => {
      re.value = y.inputShapes.value.find((o) => o.autoId === s) ?? null;
    }, Ya = () => {
    }, Yn = U(!1), An = U(""), Xn = U(""), Tn = U(!1), pn = U(null);
    function p(s) {
      const o = pn.value;
      if (Tn.value = !1, pn.value = null, !o) return;
      const m = { fullStock: !0, l: s.l, w: s.w };
      if (ie(o.shape.autoId, m) || (o.shape.fullStock = !0, o.shape.l = s.l, o.shape.w = s.w, o.shape.isNew || o.shape.validate({ fields: ["fullStock", "l", "w"] })), s.db_id || s.code) {
        const S = o.shape.stock || {};
        o.shape.stock = {
          ...S,
          ...s.db_id ? { db_id: s.db_id } : {},
          ...s.code ? { code: s.code } : {}
        };
      }
    }
    function x() {
      Tn.value = !1, pn.value = null;
    }
    Ke(Ue, (s) => {
      s?.length > 0 ? (Yn.value = !0, An.value = "Validation Errors", Xn.value = s.map((o) => `${Ma(o.message, o.context || o.params)} (${o.category.join(", ")})`).join(`

`)) : An.value === "Validation Errors" && (Yn.value = !1, An.value = "", Xn.value = "");
    }, { deep: !0 });
    const q = nn({
      banding: null,
      finish: null,
      info: null,
      planing: null,
      machining: null,
      addon: null
      // imageUpload: null
    }), A = U([]), J = U([]), de = U([]), oe = U([]);
    function _e(s) {
      if (s.length > 1) return !0;
      if (s.length === 0) return !1;
      const o = s[0];
      return !!(o.brand || o.variant || o.displayName && o.displayName !== o.name);
    }
    const Ae = nn({
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      faces: { enabled: !0 },
      holes: { enabled: !1 },
      corners: {
        enabled: !1,
        types: []
      },
      banding: { enabled: !1 },
      hingeHoles: { enabled: !1 },
      shelfHoles: { enabled: !1 }
    }), Me = nn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), Le = nn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), Be = nn({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), ct = U(null), ot = nn({}), Qe = nn({}), Ot = nn({}), kn = U(null), Rn = U(null), ka = F(() => ({
      banding: ot.rules,
      finish: Qe.rules,
      planing: Ot.rules
    })), wa = F(() => ef({
      stockType: h.stockType || "sheet",
      materials: A.value,
      minDimension: g.minDimension,
      ...g.fieldOrder && g.fieldOrder.length > 0 ? { allowedFieldIds: g.fieldOrder } : {}
    })), ea = U([]), ta = U({
      material: !1,
      l: !0,
      w: !0,
      t: !1,
      q: !0,
      name: !0,
      orientationLock: !0,
      machining: !1,
      imageUpload: !1,
      fullStock: !1
    }), wn = (s, o) => o ? ro(o, s).length > 0 ? !0 : s === "banding" ? !!ni(o) : !!It(o, s)?.sourceCatalogueKey : !1, na = ["banding", "finish", "planing"], Re = (s) => g.enable?.[s] ? y.inputShapes.value.some((o) => wn(s, o)) : !1, xt = (s) => na.includes(s) ? Re(s) : ta.value[s] ?? !0, Nn = F(() => {
      const s = wa.value.fields.value, o = wa.value.allFieldsMap.value, m = s.filter((ae) => xt(ae.name)), d = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], S = [];
      let P = null;
      const T = m.filter((ae) => ae.name !== "fullStock");
      ta.value.fullStock && (P = m.find((ae) => ae.name === "fullStock") || o.get("fullStock"));
      for (const ae of d) {
        const ye = xt(ae), We = T.find((Ne) => Ne.name === ae);
        if (ye && !We) {
          const Ne = o.get(ae);
          Ne && S.push(Ne);
        }
      }
      const K = ea.value || [];
      return [
        ...P ? [P] : [],
        ...T,
        ...S,
        ...K
      ];
    }), Sa = F(() => {
      let s = Nn.value.length + 2;
      return mt.value && s++, s;
    }), Bl = F(() => {
      const s = {
        id: 34,
        del: 32,
        info: 32
      }, o = {
        id: `${s.id}px`,
        del: `${s.del}px`,
        info: `${s.info}px`
      }, m = [];
      for (const d of Nn.value) {
        if (d.name === "trim") continue;
        const S = d.w ?? "minmax(20px, 1fr)";
        m.push(S);
      }
      return m.unshift(o.id), mt.value && m.push(o.info), m.push(o.del), m.join(" ");
    }), aa = F(() => g.enable?.pagination), Zi = F(() => rt.diagramNav || g.enable?.diagramNav), $n = F(() => aa.value ? Math.ceil(Bt.value.length / Zt.value) : 1), Rl = F(() => {
      if (!aa.value) return Bt.value;
      const s = (pt.value - 1) * Zt.value, o = s + Zt.value;
      return Bt.value.slice(s, o);
    }), ql = F(() => aa.value ? (pt.value - 1) * Zt.value : 0), xa = (s) => {
      s < 1 && (s = 1), s > $n.value && (s = $n.value), pt.value = s;
    }, jl = () => xa(1), Ul = () => xa(pt.value - 1), Gl = () => xa(pt.value + 1), Wl = () => xa($n.value), mt = F(() => rt.debug || g.debug || g.enable?.debug), zl = F(() => {
      try {
        const s = localStorage.getItem("inputs/inputStock");
        if (!s) return "(empty)";
        const o = JSON.parse(s);
        return JSON.stringify(o.map((m) => ({ material: m.material, db_id: m.db_id, l: m.l, w: m.w, t: m.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), Kl = F(() => {
      try {
        const s = localStorage.getItem("stock-filter-selections");
        return s || "(empty)";
      } catch {
        return "(read error)";
      }
    }), Hl = F(() => ({
      "--btn-color": g.colors.buttonText,
      "--btn-bg": g.colors.button,
      "--btn-hover-bg": Zl(g.colors.button, -8),
      "--btn-focus-ring": g.colors.button
    }));
    function Zl(s, o) {
      const m = s.replace("#", ""), d = parseInt(m, 16), S = Math.round(2.55 * o), P = (d >> 16) + S, T = (d >> 8 & 255) + S, K = (d & 255) + S;
      return `#${(16777216 + (P < 255 ? P < 1 ? 0 : P : 255) * 65536 + (T < 255 ? T < 1 ? 0 : T : 255) * 256 + (K < 255 ? K < 1 ? 0 : K : 255)).toString(16).slice(1)}`;
    }
    const Jl = {
      position: "absolute",
      display: "inline-block",
      left: "auto",
      right: "0px",
      top: "0px",
      bottom: "auto",
      margin: "0px",
      padding: "0px",
      visibility: "visible",
      opacity: "1",
      height: "auto",
      width: "auto",
      color: "#4e4e4e",
      border: "none",
      fontSize: "12px"
    }, Ji = F(() => rt.showCredit !== void 0 ? rt.showCredit : Ce.value ? !(Ce.value && Ce.value?.api?.whiteLabel) : !0), Pa = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (s) => {
        const o = ["efficiency", "smallest"];
        s && !o.includes(s) ? console.warn(`${s} is not a valid stockSelection, expected ${o.join("|")}`) : h.options.stockSelection = s;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (s) => {
        h.options.minSpacing = s;
      },
      maxParts: (s) => {
        g.maxParts = s;
      },
      partsPerPage: (s) => {
        s && s > 0 && (Zt.value = s, g.partsPerPage = s);
      },
      locale: (s) => {
        je.value = s.replace(/_/g, "-");
      },
      enable: (s) => {
        const o = {
          name: "partName",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        if (s) {
          for (const m in St.enable)
            m in s && (g.enable[m] = s[m]);
          for (const m in o) {
            const d = o[m], S = Yt(s, [d]), P = St.enable[d];
            Pt(m, S !== void 0 ? S : P);
          }
          en.value = Yt(s, ["csvImport"]) ?? St.enable?.csvImport;
        }
      },
      colors: (s) => {
        if (s)
          for (const o in St.colors)
            o in s && (g.colors[o] = s[o]);
      },
      orientationModel: (s) => {
        if (![0, 1, 2].includes(s)) {
          g.orientationModel = 0;
          return;
        }
        g.orientationModel = s;
      },
      numberFormat: (s) => {
        if (!["decimal", "fraction"].includes(s)) {
          g.numberFormat = "decimal";
          return;
        }
        g.numberFormat = s;
      },
      customFields: (s) => {
        if (!Array.isArray(s) || !s?.length)
          return;
        const o = [];
        s.forEach((m) => {
          const d = Qi(m.id), S = {
            ...m,
            custom: !0,
            id: d,
            name: d,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + d,
            fieldMap: "customData." + d
          };
          m.type === "checkbox" && (S.w = "32px"), m.type === "integer" || m.type === "float" ? S.output = m.output ?? "number" : m.type === "select" && (S.output = m.output ?? "string", S.options = m.options), o.push(S);
        }), ea.value = o, Et(() => {
          for (const m of y.inputShapes.value)
            m.customData = s.reduce((d, S) => {
              const P = Qi(S.id);
              return d[P] = m.customData?.[P] || S.default || "", d;
            }, {});
        });
      }
    }, Ql = (s) => {
      mt.value && Y("log", ["checkout init...", s]), s?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), s?.parts && (s.parts = yn(s.parts));
      let o;
      try {
        o = dp(s);
      } catch (d) {
        console.error("[init] validation FAILED:", d.message), Y("error", d.message || "Invalid init data");
        return;
      }
      if (o.saw && X(o.saw), o.sawsById && (N.value = o.sawsById), o?.options) {
        const d = o.options;
        ml(d);
        const S = ["stockType", "bladeWidth"];
        if (!o.saw && !s?.stockFilterEnabled)
          Y("error", `Saw configuration is required. Missing properties: ${S.join(", ")}`);
        else if (o.saw) {
          const T = S.filter((K) => !(K in o.saw));
          T.length > 0 && Y("error", `Missing required saw properties: ${T.join(", ")}`), (o.saw.cutType === "guillotine" || o.saw.cutType === "beam") && !("cutPreference" in o.saw) && Y("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const P = ["enable", "colors"];
        for (const T in d)
          P.includes(T) || (g[T] = d[T]), T in Pa && Pa[T]?.(d[T]);
      }
      if (o.options.colors && "colors" in Pa && Pa.colors(o.options.colors), o.banding) {
        const d = o.banding;
        "locations" in d && d.locations && (ot.locations = d.locations), "groups" in d && d.groups && (ot.groups = d.groups), "rules" in d && d.rules && (ot.rules = d.rules), "maxGap" in d && typeof d.maxGap == "number" && (ot.maxGap = d.maxGap), "perSide" in d && typeof d.perSide == "boolean" && (ot.perSide = d.perSide);
      }
      if (o.finish) {
        const d = o.finish;
        "locations" in d && d.locations && (Qe.locations = d.locations), "groups" in d && d.groups && (Qe.groups = d.groups), "rules" in d && d.rules && (Qe.rules = d.rules);
      }
      if (o.planing) {
        const d = o.planing;
        "locations" in d && d.locations && (Ot.locations = d.locations), "groups" in d && d.groups && (Ot.groups = d.groups), "rules" in d && d.rules && (Ot.rules = d.rules);
      }
      o.partRules && (kn.value = o.partRules), o.customValidation && (Rn.value = o.customValidation), oi("banding", o), oi("finish", o), oi("planing", o);
      for (const d of ["banding", "finish", "planing"]) {
        const S = Object.keys(Yt(o, [d, "pricing"]) || {}), P = (ti(d)?.labels?.length ?? 0) > 0;
        S.length > 0 && !P && Xe({
          type: "error",
          message: `${mi(d)} options couldn't be loaded`,
          additional: ["Check that the number of labels matches the pricing levels (details in the console)."]
        });
      }
      to(o), ss(o), y.inputShapes.value.length && us(), dn.value = !0, mt.value && Y("log", ["init complete"]);
      const m = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(m), Et(() => {
        Ji.value && !yo() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), o.parts?.length && Et(() => {
        mt.value && Y("log", ["loading parts via init..."]), y.inputShapes.value.length = 0;
        let d = 0;
        for (const P of o.parts) {
          const T = Oa(P);
          T ? T.issues?.length && mt.value && Y("log", [`SmartCut - issues found while importing part at index ${d}`, T.issues]) : mt.value && Y("log", [`SmartCut - error loading part at index ${d}`, P]), d++;
        }
        y.inputShapes.value.flatMap((P) => Li(P.issues)).length && Xe({
          type: "error",
          message: Ee("errors.general.issues_found")
        }), mt.value && Y("log", [`loaded ${y.inputShapes.value.length} parts via init`]);
      });
    }, Pt = (s, o = !1) => {
      ta.value[s] = o;
    }, Qi = (s) => s ? Wr(s)?.toLowerCase() : null, Yl = (s, o, m) => {
      try {
        if (!s || !o) return;
        const S = m !== null && m !== "" && m !== void 0 && !["orientationLock", "grain"].includes(o), P = (ae, ye) => {
          if (!ie(ae.autoId, ye)) {
            for (const [Ne, qe] of Object.entries(ye))
              gi(ae, Ne, qe);
            ae.isNew || ae.validate({ fields: Object.keys(ye) });
          }
        }, T = (ae, ye, We) => {
          const Ne = ye ?? ae.material, qe = We ?? ae.t, Ct = Ne ? String(Ne).toUpperCase() : null, kt = y.inputStock.value.find((tn) => {
            const Jt = !Ct || Dn(tn) === Ct, _n = qe == null || ge({ v: tn.t }) === ge({ v: qe });
            return Jt && _n;
          });
          return kt ? { l: ge({ v: kt.l }), w: ge({ v: kt.w }) } : null;
        }, K = (ae, ye) => {
          if (!ae) return [];
          const We = String(ae).toUpperCase(), Ne = ye != null ? ge({ v: ye }) : null, qe = /* @__PURE__ */ new Set(), Ct = [];
          for (const kt of y.inputStock.value) {
            if (Dn(kt) !== We || Ne != null && ge({ v: kt.t }) !== Ne) continue;
            const tn = ge({ v: kt.l }), Jt = ge({ v: kt.w });
            if (typeof tn != "number" || typeof Jt != "number") continue;
            const _n = `${tn}x${Jt}`;
            qe.has(_n) || (qe.add(_n), Ct.push({
              l: tn,
              w: Jt,
              db_id: kt.db_id,
              code: kt.code,
              cost: typeof kt.cost == "number" ? kt.cost : null
            }));
          }
          return Ct;
        };
        if (o === "material" && (!m || m === "")) {
          const ae = { material: null, t: null };
          h.stockType === "linear" && (ae.w = null), P(s, ae);
          return;
        }
        if (o === "material" && m && A.value?.length) {
          const ae = A.value.find((ye) => ye.name === m);
          if (ae) {
            const ye = { material: m };
            if (s.t != null) {
              const Ne = ge({ v: s.t });
              !ae.thicknesses.some((qe) => ge({ v: qe }) === Ne) && ae.thicknesses.length > 0 && (ye.t = ge({ v: ae.thicknesses[0] }));
            }
            if (h.stockType === "linear" && s.w != null && ae.widths) {
              const Ne = ge({ v: s.w });
              !ae.widths.some((qe) => ge({ v: qe }) === Ne) && ae.widths.length > 0 && (ye.w = ge({ v: ae.widths[0] }));
            }
            if (ae.fullSizeOnly) {
              const Ne = T(
                s,
                m,
                ye.t != null ? ye.t : s.t
              );
              ye.fullStock = !0, Ne && (ye.l = Ne.l, ye.w = Ne.w);
            } else s.fullStock && (ye.fullStock = !1);
            P(s, ye), Sn(s, ae), qn(s);
            const We = y.inputShapes.value.indexOf(s);
            for (const Ne of ["banding", "finish", "planing"]) {
              if (q[Ne] !== We) continue;
              const qe = Mn(s, Ne), Ct = Ne === "banding" && !!ni(s);
              if (!qe.options.length && !Ct) {
                q[Ne] = null;
                continue;
              }
              Ge(Ne, qe.options, qe.labels, qe.pricing);
            }
            return;
          }
        }
        if (o === "fullStock") {
          if (m !== !0 && is(s) || m === !0 && !ai(s))
            return;
          if (m === !0) {
            const ae = K(s.material, s.t);
            if (ae.length > 1) {
              pn.value = { shape: s, options: ae }, Tn.value = !0;
              return;
            }
            const ye = T(s);
            if (ye) {
              P(s, { fullStock: !0, l: ye.l, w: ye.w });
              return;
            }
          } else {
            P(s, { fullStock: !1, l: null, w: null });
            return;
          }
        }
        if ((o === "material" || o === "t") && s.fullStock) {
          const ae = {
            ...s,
            material: o === "material" ? m : s.material,
            t: o === "t" ? m : s.t
          };
          if (!ai(ae)) {
            P(s, { [o]: m, fullStock: !1, l: null, w: null });
            return;
          }
          const ye = T(
            s,
            o === "material" ? m : void 0,
            o === "t" ? m : void 0
          );
          if (ye) {
            P(s, { [o]: m, l: ye.l, w: ye.w });
            return;
          }
        }
        if (s.isNew)
          if (S)
            s.isNew = !1;
          else {
            gi(s, o, m);
            return;
          }
        let fe;
        if (o.includes(".")) {
          const ae = o.split("."), ye = ae[0], We = ae.slice(1).join("."), qe = { ...s[ye] || {} };
          gi(qe, We, m), fe = { [ye]: qe };
        } else
          fe = { [o]: m };
        if (P(s, fe), o === "t" && A.value?.length && s.material) {
          const ae = A.value.find((ye) => ye.name === s.material);
          ae && Sn(s, ae);
        }
        o === "t" && h.stockType === "linear" && A.value?.length && s.material && Et(() => {
          const ae = ts(s);
          if (ae.length > 0 && s.w != null) {
            const ye = ge({ v: s.w });
            ae.some((We) => ge({ v: We }) === ye) || P(s, { w: ge({ v: ae[0] }) });
          }
        });
      } catch (d) {
        console.error("[CHECKOUT] Error updating field:", d);
      }
    }, Xl = () => {
    }, eo = (s, o) => {
      s?.isNew && (s.isNew = !1), s.validate({ fields: [o] }), ["l", "w", "t"].includes(o) && Yi(s);
    }, Yi = (s) => {
      if (kn.value && s && !s.isNew && !(!s.l && !s.w))
        try {
          const o = qf(s, kn.value);
          if (s.issues && (s.issues = s.issues.filter((m) => !m.category?.includes("part"))), !o.valid && o.violations.length > 0)
            for (const m of o.violations) {
              const d = Uf(m), S = m.dimension === "longSide" ? "l" : m.dimension === "shortSide" ? "w" : m.dimension === "t" ? "t" : null;
              new Vt({
                item: s,
                type: "error",
                category: ["part"],
                field: S ? [[S]] : [],
                message: d,
                shouldTranslate: !1
              });
            }
        } catch (o) {
          console.error("[CHECKOUT] Error validating part:", o);
        }
    }, to = (s) => {
      if (Yt(g, ["enable", "machining"]) && s?.machining) {
        for (const o in Ae)
          s.machining[o] && (Ae[o] = s.machining[o]);
        if (["holes", "hingeHoles"].forEach((o) => {
          s?.machining?.[o] && (Ae[o].enabled = s?.machining?.[o].enabled);
        }), s?.machining?.corners?.types?.length && (Ae.corners.enabled = !0, Ae.corners.types = s.machining.corners.types), s.banding && s?.options?.enable?.banding) {
          if (!Me) return;
          Ae.banding = {
            enabled: !0
          }, Me.options.length && (Ae.banding.options = Me.options), Me.labels.length && (Ae.banding.labels = Me.labels), Ls(Me.pricing) && (Ae.banding.pricing = Me.pricing);
        }
      }
    }, no = (s = null) => {
      re.value = s, s && He(s) && s.l && s.w ? Oe.value = !0 : alert(Ee("machining.enter_dimensions_first"));
    }, ao = () => {
      Oe.value = !1;
    }, Xa = U(!1), io = (s = null) => {
      re.value = s, s && (Xa.value = !0);
    }, so = () => {
      Xa.value = !1;
    }, Xi = (s) => {
      if (!s) return [];
      const o = s.stockId ?? s.stock?.id, m = o ? y.inputStock.value?.find((S) => String(S.id) === String(o)) : null;
      return (m?.extras?.customProducts ?? m?.material?.extras?.customProducts ?? []).length ? [] : [];
    }, lo = (s) => Xi(s).filter((o) => o.type === "machining"), es = (s = []) => {
      if (J.value = [], de.value = [], Pt("t", !1), !!s.length) {
        for (const o of s) {
          if (!o?.t) continue;
          const m = Ra(o);
          if (m) {
            const d = Ca(m, !0);
            d.length === 2 ? (fo(d), Pt("t", !0), o.t = J.value[0]) : Y("error", "bonded thickness found which does not have 2 options");
          } else J.value.includes(o.t) || J.value.push(o.t);
        }
        J.value.length > 1 && Pt("t", !0);
      }
    }, ei = (s = []) => {
      if (oe.value = [], !s.length) {
        Pt("w", !1);
        return;
      }
      for (const o of s) {
        if (!o?.w) continue;
        const m = ge({ v: o.w });
        oe.value.includes(m) || oe.value.push(m);
      }
      oe.value.length >= 1 ? Pt("w", !0) : Pt("w", !1);
    }, oo = (s) => {
      if (!s) return { thicknesses: [], bondedThicknesses: [] };
      if (!A.value?.length)
        return {
          thicknesses: J.value,
          bondedThicknesses: []
        };
      if (!s.material)
        return {
          thicknesses: J.value,
          bondedThicknesses: []
        };
      const o = A.value.find((S) => S.name === s.material);
      if (!o)
        return {
          thicknesses: J.value,
          bondedThicknesses: []
        };
      const m = [...o.thicknesses], d = [];
      for (let S = 0; S < m.length; S++) {
        const P = m[S], T = Ca(P), K = [];
        if (T.length) {
          for (const fe of T)
            m[S] = fe, K.push(S);
          S++;
        }
        K.length && d.push(K);
      }
      return {
        thicknesses: m,
        bondedThicknesses: d
      };
    }, ts = (s) => {
      if (!s) return [];
      if (!A.value?.length || !s.material)
        return oe.value;
      const o = A.value.find((m) => m.name === s.material);
      if (!o)
        return oe.value;
      if (s.t != null && y.inputStock?.value?.length) {
        const m = ge({ v: s.t }), d = /* @__PURE__ */ new Set();
        for (const S of y.inputStock.value)
          S.material?.toUpperCase() === s.material && ge({ v: S.t }) === m && S.w != null && d.add(ge({ v: S.w }));
        if (d.size > 0)
          return Array.from(d).sort((S, P) => S - P);
      }
      return o.widths || oe.value;
    }, ti = (s) => s === "banding" ? Me : s === "finish" ? Le : s === "planing" ? Be : null, It = (s, o) => _l(Ia(s?.stock?.db_id) || null, o), ni = (s) => wp(Ia(s?.stock?.db_id) || null), ns = (s) => {
      switch (s) {
        case "banding":
          return ot.groups;
        case "finish":
          return Qe.groups;
        case "planing":
          return Ot.groups;
        default:
          return;
      }
    }, as = () => y.inputStock.value.some((s) => kp(s)), Mn = (s, o) => {
      const m = ti(o), d = ns(o), S = m?.formulas, P = {
        options: m?.options ?? [],
        labels: m?.labels ?? [],
        pricing: m?.pricing ?? {},
        ...S && { formulas: S },
        displayNames: m?.displayNames ?? {},
        ...d?.length && { locationGroups: d }
      }, T = { options: [], labels: [], pricing: {}, displayNames: {} };
      if (!s?.material) return P;
      const K = It(s, o);
      if (!vp(K))
        return m?.containsCatalogueLinked || as() ? T : P;
      const fe = K.code || K.name, ae = K.groups;
      if (ae && ae.length > 0) {
        const tn = ns(o) || [], Jt = {};
        for (const Nt of ae)
          typeof Nt.price == "number" && (Jt[Nt.id] = Nt.price);
        const _n = tn.filter((Nt) => Jt[Nt.id] !== void 0).map((Nt) => ({ ...Nt, price: Jt[Nt.id] })), fs = {}, ps = [], ms = {}, ri = {}, ui = K.pricingFormula;
        for (const Nt of _n) {
          const Ea = `${fe}|${Nt.id}`;
          fs[Ea] = Nt.price, ps.push(Ea), Nt.label && (ms[Ea] = Nt.label), typeof ui == "string" && ui.trim() && (ri[Ea] = ui.trim());
        }
        const Ro = [mi(o)];
        return {
          options: [ps],
          labels: Ro,
          pricing: fs,
          ...Object.keys(ri).length && { formulas: ri },
          displayNames: ms,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: _n
        };
      }
      const ye = bp(K, m, fe), We = K.labels?.length ? K.labels : [mi(o)], Ne = Sp(K, o) ? [] : cs(ye), qe = K.displayNames && typeof K.displayNames == "object" ? { ...K.displayNames } : { ...m?.displayNames ?? {} };
      K.code && K.name && K.code !== K.name && (qe[K.code] = K.name);
      const Ct = { ...S || {} }, kt = K.pricingFormula;
      if (typeof kt == "string" && kt.trim()) {
        const tn = kt.trim();
        for (const Jt of Object.keys(ye)) Ct[Jt] = tn;
      }
      return {
        options: Ne,
        labels: We,
        pricing: ye,
        ...Object.keys(Ct).length && { formulas: Ct },
        displayNames: qe,
        locations: K.locations?.length ? K.locations : void 0
      };
    }, ro = (s, o) => Mn(s, o).options, is = (s) => !s?.material || !A.value?.length ? !1 : !!A.value.find((m) => m.name === s.material)?.fullSizeOnly, ai = (s) => {
      if (!s?.material) return !1;
      const o = String(s.material).toUpperCase(), m = s.t != null ? ge({ v: s.t }) : null;
      return y.inputStock.value.some((d) => Dn(d) !== o || m != null && ge({ v: d.t }) !== m ? !1 : !!d.allowExactFitShapes);
    }, ia = (s, o) => {
      if (!o.fullSizeOnly) return;
      const m = s.t, d = y.inputStock.value.find((S) => S.material === o.name && (m == null || ge({ v: S.t }) === ge({ v: m })));
      s.fullStock = !0, d && (s.l = ge({ v: d.l }), s.w = ge({ v: d.w }));
    }, uo = (s) => {
      const o = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!s?.material || !(Me?.containsCatalogueLinked || Le?.containsCatalogueLinked || Be?.containsCatalogueLinked || as())) return o;
      const d = Ia(s?.stock?.db_id), S = Wa(d || null) || {};
      return {
        banding: !S.banding,
        finish: !S.finish,
        planing: !S.planing,
        machining: !S.machining
      };
    }, ss = (s) => {
      if (s?.stock?.some((o) => o?.material)) {
        A.value = [], J.value = [], de.value = [];
        const o = /* @__PURE__ */ new Map();
        for (const S of s.stock) {
          if (!S.material) continue;
          const P = Dn(S), T = (S.code || S.name || "").toString().trim(), K = S.name || S.customData?.stockName || S.material || P;
          if (o.has(P) ? S.fullSizeOnly && (o.get(P).fullSizeOnly = !0) : o.set(P, {
            displayName: K,
            material: S.customData?.materialLabel || S.material,
            db_id: S.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: S.brand,
            variant: S.variant,
            imageUrl: S.imageUrl,
            color: typeof S.color == "string" ? S.color : void 0,
            fullSizeOnly: !!S.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), T && o.get(P).codes.add(T), S.t != null) {
            const fe = Ra(S);
            fe ? o.get(P)?.thicknesses.add(fe) : o.get(P)?.thicknesses.add(ge({ v: S.t }));
          }
          if (h.stockType === "linear" && S.w != null && o.get(P)?.widths.add(ge({ v: S.w })), h.stockType !== "linear" && S.l != null && S.w != null) {
            const fe = ge({ v: S.l }), ae = ge({ v: S.w });
            o.get(P)?.dimensions.add(`${fe}x${ae}`);
          }
        }
        const m = Array.from(o.entries()).map(([S, P]) => {
          const T = [], K = [];
          for (const fe of P.thicknesses)
            typeof fe == "string" && fe.includes(",") ? K.push(fe) : T.push(ge({ v: fe }));
          return { name: S, sets: P, regularThicknesses: T, bondedStrings: K };
        });
        A.value = m.map(({ name: S, sets: P, regularThicknesses: T }) => {
          const K = P.codes.size === 1 ? [...P.codes][0] : void 0, fe = {
            name: S,
            displayName: P.displayName,
            material: P.material,
            db_id: P.db_id,
            code: K,
            brand: P.brand,
            variant: P.variant,
            imageUrl: P.imageUrl,
            color: P.color,
            fullSizeOnly: P.fullSizeOnly,
            thicknesses: T.sort((ae, ye) => ae - ye)
          };
          return h.stockType === "linear" && P.widths.size > 0 && (fe.widths = Array.from(P.widths).sort((ae, ye) => ae - ye)), h.stockType !== "linear" && P.dimensions.size > 0 && (fe.dimensions = Array.from(P.dimensions).map((ae) => {
            const [ye, We] = ae.split("x").map((Ne) => Number(Ne));
            return { l: ye, w: We };
          })), fe;
        });
        const d = /* @__PURE__ */ new Set();
        for (const S of A.value)
          for (const P of S.thicknesses)
            d.add(ge({ v: P }));
        J.value = Array.from(d).sort((S, P) => S - P);
        for (let S = 0; S < m.length; S++) {
          const { bondedStrings: P } = m[S], T = A.value[S];
          for (const K of P) {
            const fe = Ca(K, !0);
            if (fe.length !== 2) continue;
            const ae = [];
            for (const ye of fe) {
              const We = ge({ v: ye });
              let Ne = J.value.findIndex((qe) => ge({ v: qe }) === We);
              Ne === -1 ? (J.value.push(We), T.thicknesses.push(We), Ne = J.value.length - 1) : T.thicknesses.some((qe) => ge({ v: qe }) === We) || T.thicknesses.push(We), ae.push(Ne);
            }
            de.value.push(ae);
          }
        }
        if (h.stockType === "linear") {
          const S = /* @__PURE__ */ new Set();
          for (const P of A.value)
            if (P.widths)
              for (const T of P.widths)
                S.add(ge({ v: T }));
          oe.value = Array.from(S).sort((P, T) => P - T);
        }
        Pt("material", _e(A.value)), J.value.length > 1 ? Pt("t", !0) : Pt("t", !1), h.stockType === "linear" && oe.value.length > 1 ? Pt("w", !0) : h.stockType === "linear" && Pt("w", !1);
      } else
        es(s.stock);
      h.stockType === "linear" && !A.value?.length && ei(s.stock);
    }, co = (s) => {
      if (!s?.length) {
        A.value = [], J.value = [], oe.value = [];
        return;
      }
      if (s.some((m) => m?.material)) {
        const m = /* @__PURE__ */ new Map();
        de.value = [];
        for (const P of s) {
          if (!P.material) continue;
          const T = Dn(P), K = (P.code || P.name || "").toString().trim(), fe = (P.material || T).toString();
          if (m.has(T) ? P.fullSizeOnly && (m.get(T).fullSizeOnly = !0) : m.set(T, {
            displayName: fe,
            material: P.customData?.materialLabel || P.material,
            db_id: P.db_id,
            codes: /* @__PURE__ */ new Set(),
            brand: P.brand,
            variant: P.variant,
            imageUrl: P.imageUrl,
            color: typeof P.color == "string" ? P.color : void 0,
            fullSizeOnly: !!P.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set(),
            dimensions: /* @__PURE__ */ new Set()
          }), K && m.get(T).codes.add(K), P.t != null) {
            const ae = Ra(P);
            ae ? m.get(T)?.thicknesses.add(ae) : m.get(T)?.thicknesses.add(ge({ v: P.t }));
          }
          if (h.stockType === "linear" && P.w != null && m.get(T)?.widths.add(ge({ v: P.w })), h.stockType !== "linear" && P.l != null && P.w != null) {
            const ae = ge({ v: P.l }), ye = ge({ v: P.w });
            m.get(T)?.dimensions.add(`${ae}x${ye}`);
          }
        }
        const d = Array.from(m.entries()).map(([P, T]) => {
          const K = [], fe = [];
          for (const ae of T.thicknesses)
            typeof ae == "string" && ae.includes(",") ? fe.push(ae) : K.push(ge({ v: ae }));
          return { name: P, sets: T, regularThicknesses: K, bondedStrings: fe };
        });
        A.value = d.map(({ name: P, sets: T, regularThicknesses: K }) => {
          const fe = T.codes.size === 1 ? [...T.codes][0] : void 0, ae = {
            name: P,
            displayName: T.displayName,
            material: T.material,
            db_id: T.db_id,
            code: fe,
            brand: T.brand,
            variant: T.variant,
            imageUrl: T.imageUrl,
            color: T.color,
            fullSizeOnly: T.fullSizeOnly,
            thicknesses: K.sort((ye, We) => ye - We)
          };
          return h.stockType === "linear" && T.widths.size > 0 && (ae.widths = Array.from(T.widths).sort((ye, We) => ye - We)), h.stockType !== "linear" && T.dimensions.size > 0 && (ae.dimensions = Array.from(T.dimensions).map((ye) => {
            const [We, Ne] = ye.split("x").map((qe) => Number(qe));
            return { l: We, w: Ne };
          })), ae;
        });
        const S = /* @__PURE__ */ new Set();
        for (const P of A.value)
          for (const T of P.thicknesses)
            S.add(ge({ v: T }));
        J.value = Array.from(S).sort((P, T) => P - T);
        for (let P = 0; P < d.length; P++) {
          const { bondedStrings: T } = d[P], K = A.value[P];
          for (const fe of T) {
            const ae = Ca(fe, !0);
            if (ae.length !== 2) continue;
            const ye = [];
            for (const We of ae) {
              const Ne = ge({ v: We });
              let qe = J.value.findIndex((Ct) => ge({ v: Ct }) === Ne);
              qe === -1 ? (J.value.push(Ne), K.thicknesses.push(Ne), qe = J.value.length - 1) : K.thicknesses.some((Ct) => ge({ v: Ct }) === Ne) || K.thicknesses.push(Ne), ye.push(qe);
            }
            de.value.push(ye);
          }
        }
        if (h.stockType === "linear") {
          const P = /* @__PURE__ */ new Set();
          for (const T of A.value)
            if (T.widths)
              for (const K of T.widths)
                P.add(ge({ v: K }));
          oe.value = Array.from(P).sort((T, K) => T - K);
        }
        Pt("material", _e(A.value)), Pt("t", J.value.length > 1), h.stockType === "linear" && Pt("w", oe.value.length > 1);
      } else
        es(s), h.stockType === "linear" && ei(s);
    }, fo = (s, o = null) => {
      if (!Array.isArray(s)) {
        Y("error", "addBondedThicknesses expects an array");
        return;
      }
      const m = [];
      for (let d of s)
        g.numberFormat === "decimal" && (d = parseFloat(d)), J.value.push(d), o && o.thicknesses.push(d), m.push(J.value.length - 1);
      de.value.push(m);
    }, po = (s) => {
      const { thicknesses: o } = oo(s);
      return o?.length ? o.map((m) => ({
        label: m?.toString(),
        value: m
      })) : [];
    };
    function mo(s) {
      return s?.length ? s.map((o) => ({
        name: o.name,
        brand: o.brand,
        variant: o.variant,
        finish: o.finish,
        material: o.material || void 0,
        code: o.code || void 0,
        displayName: o.displayName,
        imageUrl: o.imageUrl,
        color: o.color,
        colorHex: o.colorHex
      })) : [];
    }
    const go = (s) => {
      const o = ts(s);
      return o?.length ? o.map((m) => ({
        label: m?.toString(),
        value: m
      })) : [];
    }, Ca = (s, o = !1) => {
      if (typeof s == "string" && s.includes(",")) {
        const m = s.split(",");
        if (m.length === 2) {
          const d = parseFloat(m[0]), S = parseFloat(m[1]);
          !isNaN(d) && !isNaN(S) && S !== d * 2 && Xe({
            type: "warning",
            message: `Bonded thickness "${s}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return o ? m.map((d) => ge({ v: d })) : m;
      }
      return [];
    }, ho = () => {
      Rt.value ? bo() : vo();
    }, vo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Rt.value = !0;
    }, bo = () => {
      document.exitFullscreen && document.exitFullscreen(), Rt.value = !1;
    }, yo = () => {
      if (Ce.value?.api?.whiteLabel) return !0;
      let s = !0;
      const o = document.querySelector("#smartcut-checkout a#credit");
      if (!o) return s = !1;
      const m = window.getComputedStyle(o);
      return m.display === "none" || m.display === "hidden" || m.opacity === "0" || m.color === "transparent" || m.position !== "absolute" || m.color !== "#4e4e4e" && m.color !== "rgb(78, 78, 78)" ? s = !1 : (ft.value = s, s);
    }, ko = F(() => typeof rt.findExtrasPrice == "function"), wo = F(() => g.unitSystem === "imperial" ? "/ square ft" : "/ square m"), So = F(() => g.unitSystem === "imperial" ? "/ ft" : "/ m"), xo = F(() => [
      {
        type: "banding",
        keys: Me.keys,
        fallbackLocations: ot.locations,
        show: (s) => wn("banding", s),
        extraProps: (s) => ({
          priceLabel: So.value,
          catalogueKey: ni(s) || "",
          // The resolved extra's id drives the picker's on-demand
          // `/extras/:id/levels` fetch. Present whenever the catalogue picker
          // renders (catalogue-linked stock carries a resolved extra with _id).
          catalogueExtraId: String(It(s, "banding")?._id || ""),
          catalogueMaxGap: ot.maxGap,
          cataloguePerSide: ot.perSide,
          extraName: It(s, "banding")?.name,
          pricePerLength: It(s, "banding")?.price
        })
      },
      {
        type: "finish",
        keys: Le.keys,
        fallbackLocations: Qe.locations,
        show: (s) => wn("finish", s),
        extraProps: (s) => ({
          priceLabel: wo.value,
          catalogueKey: It(s, "finish")?.sourceCatalogueKey || "",
          catalogueExtraId: String(It(s, "finish")?._id || ""),
          extraName: It(s, "finish")?.name,
          pricePerLength: It(s, "finish")?.price
        })
      },
      {
        type: "planing",
        keys: Be.keys,
        fallbackLocations: Ot.locations,
        show: (s) => wn("planing", s),
        extraProps: (s) => ({
          catalogueKey: It(s, "planing")?.sourceCatalogueKey || "",
          catalogueExtraId: String(It(s, "planing")?._id || ""),
          extraName: It(s, "planing")?.name,
          pricePerLength: It(s, "planing")?.price
        })
      }
    ]), Po = (s, o) => {
      const m = Mn(s, o.type);
      return {
        allOptions: m.options,
        pricing: m.pricing,
        formulas: m.formulas,
        displayNames: m.displayNames,
        labels: m.labels,
        locations: m.locations || o.fallbackLocations,
        locationGroups: m.locationGroups || []
      };
    }, ls = (s, o) => {
      let m, d;
      switch (o) {
        case "banding":
          m = Me.options, d = Me.labels;
          break;
        case "finish":
          m = Le.options, d = Le.labels;
          break;
        case "planing":
          m = Be.options, d = Be.labels;
          break;
        default:
          m = [], d = [];
      }
      On(s, o, m, d);
    }, os = (s) => {
      const o = Object.keys(s);
      return o.length ? Math.max(...o.map((m) => m.split("|").length)) : 0;
    }, ii = (s, o, m) => s ? Vu(
      Object.keys(s).map((d) => d.split("|")),
      m,
      o
    ) : [], Co = (s, o, m, d) => {
      const S = Mn(s, o);
      return pi(s, o, m, (T, K) => {
        const fe = K.filter((ae) => ae?.trim()).join("|");
        return fe && S.pricing[fe] !== void 0 ? S.pricing[fe] : d ? d(T, K) : null;
      }, S.options, S.labels);
    }, Oo = (s, o, m) => {
      let d, S;
      switch (o) {
        case "banding":
          d = Me.options, S = Me.labels;
          break;
        case "finish":
          d = Le.options, S = Le.labels;
          break;
        case "planing":
          d = Be.options, S = Be.labels;
          break;
        default:
          d = [], S = [];
      }
      return pi(s, o, m, rt.findExtrasPrice, d, S);
    }, Io = U({}), Lo = (s) => {
      const o = st.value.findIndex((m) => m.shapeId === s.shapeId);
      o !== -1 ? st.value[o] = s : st.value.push(s), window.smartcutImages = st.value;
    }, Eo = (s) => {
      st.value = st.value.filter((o) => o.shapeId !== s), window.smartcutImages = st.value;
    }, Fo = (s) => {
      At.value = At.value === s ? null : s;
    }, si = (s = 1) => {
      for (let o = s; o--; ) {
        let m = {
          l: null,
          w: h.stockType === "linear" && oe.value.length === 1 ? oe.value[0] : null,
          t: J.value.length ? J.value[0] : null,
          q: 1,
          material: A.value?.length === 1 ? A.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (y.inputShapes.value.length > 0) {
          const S = y.inputShapes.value[y.inputShapes.value.length - 1];
          m.material = S.material, m.t = S.t, S.stock && (m.stock = { ...S.stock }), h.stockType === "linear" && S.w && (m.w = S.w);
        }
        const d = H(m);
        d && (Me?.labels?.length && On(d, "banding", Me.options, Me.labels), Le?.labels?.length && On(d, "finish", Le.options, Le.labels), Be?.labels?.length && On(d, "planing", Be.options, Be.labels));
      }
    }, Oa = (s = {}) => {
      const o = {
        q: 1,
        // Always set quantity to 1
        ...s
      }, m = H(o);
      return m && (h.stockType === "linear" && oe.value.length === 1 && !m.w && (m.w = oe.value[0]), J.value.length && !m.t && (m.t = J.value[0]), A.value?.length === 1 && !m.material && (m.material = A.value[0].name), Me?.labels?.length && On(m, "banding", Me.options, Me.labels), Le?.labels?.length && On(m, "finish", Le.options, Le.labels), Be?.labels?.length && On(m, "planing", Be.options, Be.labels)), m;
    }, Ao = (s) => {
      Lf(
        s,
        J.value,
        de.value,
        (o) => ge({ v: o })
      );
    }, rs = () => {
      wt(), Te(null), ke.stockList.value = [], ke.shapeList.value = [], ke.cutList.value = [];
    }, li = () => {
      y.inputShapes.value.length = 0, rt.inputType !== "formula" && Et(() => si());
    }, Ia = (s) => {
      if (s)
        return y.inputStock.value.find((o) => o.db_id === s);
    }, qn = (s) => {
      s.extras && (s.extras.banding = null, s.extras.finish = null, s.extras.planing = null);
    }, To = (s, o) => {
      const m = Mn(s, o);
      return qr(m.pricing);
    }, No = (s) => {
      const o = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!s?.extras) return o;
      const m = ["banding", "finish", "planing"];
      for (const d of m) {
        const S = s.extras[d];
        if (!S || It(s, d)?.sourceCatalogueKey) continue;
        const T = To(s, d);
        if (S.faces)
          for (const K of ["a", "b"]) {
            const fe = S.faces[K];
            typeof fe == "string" && fe !== "" && !T.has(fe) && (S.faces[K] = "", o.pruned = !0, o.types.add(d));
          }
        if (S.sides)
          for (const K of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const fe = S.sides[K];
            typeof fe == "string" && fe !== "" && !T.has(fe) && (S.sides[K] = "", o.pruned = !0, o.types.add(d));
          }
      }
      return o;
    }, Dn = (s) => Pp(s), $o = (s, o) => {
      const m = s.toUpperCase();
      return y.inputStock.value.find((d) => Dn(d) === m && ge({ v: d.t }) === o);
    }, Sn = (s, o) => {
      const m = ge({ v: s.t }), d = $o(o.name, m), S = {
        db_id: d?.db_id || o.db_id,
        code: d?.code || o.code,
        material: o.displayName || o.name
      };
      typeof m == "number" && Number.isFinite(m) && (S.thickness = m), s.stock = S;
    }, us = () => {
      const s = /* @__PURE__ */ new Set();
      for (const o of y.inputShapes.value) {
        const m = o.stock, d = o.material?.toUpperCase();
        let S = null;
        if (m?.db_id) {
          const K = Ia(m.db_id);
          K && (S = A.value.find((fe) => fe.name === Dn(K))), S || (S = A.value.find((fe) => fe.db_id && fe.db_id === m.db_id));
        }
        if (!S && m?.code && (S = A.value.find((K) => K.code && K.code === m.code)), !S && d && (S = A.value.find((K) => K.name === d)), S)
          o.material = S.name, Sn(o, S), o.t != null && !S.thicknesses.includes(ge({ v: o.t })) && (o.t = null, o.stock = null, qn(o)), ia(o, S);
        else {
          if ((m?.db_id || m?.code) && !A.value?.length)
            continue;
          if (A.value?.length === 1) {
            const K = A.value[0], fe = o.material !== K.name;
            o.material = K.name, K.thicknesses.includes(ge({ v: o.t })) || (o.t = ge({ v: K.thicknesses[0] })), Sn(o, K), fe && qn(o), ia(o, K);
          } else if (A.value?.length > 1 && o.t) {
            const K = A.value.find((fe) => fe.thicknesses.some((ae) => ge({ v: ae }) === ge({ v: o.t })));
            K ? (o.material !== K.name && qn(o), o.material = K.name, Sn(o, K), ia(o, K)) : (qn(o), o.material = A.value[0].name, o.t = ge({ v: A.value[0].thicknesses[0] }), Sn(o, A.value[0]), ia(o, A.value[0]));
          } else A.value?.length > 1 ? (qn(o), o.material = A.value[0].name, o.t = ge({ v: A.value[0].thicknesses[0] }), Sn(o, A.value[0]), ia(o, A.value[0])) : !o.t && y.inputStock.value[0]?.t && (o.t = ge({ v: y.inputStock.value[0].t }));
        }
        const { pruned: P, types: T } = No(o);
        P && T.forEach((K) => s.add(K));
      }
      if (s.size > 0) {
        const o = [...s].join(", ");
        Xe({
          type: "warning",
          message: `Some previously selected ${o} options are no longer available and have been cleared. Please review your selection.`
        });
      }
    }, Mo = async () => {
      if (Q(), Y("calculating"), bt.value) return !1;
      bt.value = !0, Bn.value = !1, us();
      const s = await ff({
        t: Ee,
        partTrim: g.partTrim,
        maxShapes: g.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: y.inputSaw.value,
        // Extras validation data
        bandingPricing: Me.pricing,
        finishPricing: Le.pricing,
        planingPricing: Be.pricing,
        findExtrasPrice: rt.findExtrasPrice,
        getShapeExtrasPricing: (P, T) => Mn(P, T).pricing,
        // Banding is tuple-canonical on the client: the shape stores the axis
        // tuple, so completeness validates against the tuple-keyed pricing alone —
        // no per-shape SKU codes needed (the SKU is a server-side lookup).
        extrasValidationRules: ka.value,
        extrasLocationGroups: {
          banding: ot.groups,
          finish: Qe.groups,
          planing: Ot.groups
        },
        onLimit: () => {
          Xe({
            type: "error",
            message: Ee("limits.max_parts") + " " + g.maxParts
          });
        }
      });
      if (kn.value)
        for (const P of y.inputShapes.value)
          Yi(P);
      const o = y.inputShapes.value.flatMap((P) => P.issues || []).filter((P) => P.type === "error" && P.category?.includes("part") && !P.category?.includes("extras"));
      if (o.length > 0) {
        Xe({
          type: "error",
          message: Ee("errors.validation.inputs_issue", { 0: "part" }),
          additional: o.map((P) => Ma(P.message, P.context || P.params))
        }), Y("validation-error"), bt.value = !1;
        return;
      }
      if (!s.valid) {
        Y("validation-error"), bt.value = !1;
        return;
      }
      rs(), y.inputShapes.value.forEach((P, T) => {
        P.createId(T);
      }), y.inputStock.value.forEach((P, T) => {
        P.createId(T);
      });
      const m = y.inputShapes.value.map((P) => le(P)).filter(Boolean);
      if (m.length !== y.inputShapes.value.length)
        return Xe({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), bt.value = !1, !1;
      Ao(m), mt.value && Y("log", [
        "SmartCut - calculating",
        "stock",
        y.inputStock.value.map((P) => ({ l: P.l, w: P.w })),
        "parts",
        m.map((P) => ({ l: P.l, w: P.w }))
      ]);
      const d = {
        inputSaw: y.inputSaw.value.toData(),
        inputShapes: m.map((P) => P.toData()),
        inputStock: y.inputStock.value.map((P) => {
          const T = Cp(P.toData()), K = If(P);
          return K != null && (T.t = K), T;
        }),
        inputUserGroups: ce.value ? y.inputUserGroups.value.map((P) => P.toData()) : [],
        enableEvo: !0,
        useInventory: !1,
        domain: et,
        extrasOptions: Pe(),
        // SKU/name maps for the cutlist CSV's operator-meaningful labels
        // (internal-only; resolved server-side as SKU → name → tuple). WC
        // ships sku (variation SKUs) + name; DB-flow ships name only (its
        // codes are resolved from Extra docs at export, never shipped here).
        extrasResolution: {
          banding: { sku: Me.codes, name: Me.displayNames },
          finish: { sku: Le.codes, name: Le.displayNames },
          planing: { sku: Be.codes, name: Be.displayNames }
        },
        source: "checkout",
        sourceVersion: "4.3.0"
      };
      if (Rn.value?.enabled && Rn.value?.rules?.length > 0) {
        const P = Af(
          Rn.value.rules,
          y.inputShapes.value.map((T) => T.toData())
        );
        if (!P.valid) {
          for (const T of P.errors) {
            const K = T.partName ? `Part "${T.partName}"` : `Part ${T.partIndex + 1}`;
            Xe({
              type: "error",
              message: `${K}: ${T.message}`
            });
          }
          bt.value = !1;
          return;
        }
      }
      Y("before-calculate", d);
      const S = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: d,
          error: null
        }
      });
      if (window.dispatchEvent(S), S.defaultPrevented) {
        S.detail.error && Xe({
          type: "error",
          message: S.detail.error
        }), bt.value = !1;
        return;
      }
      await fn.connect(), fn.emit("calculate", d);
    }, Do = (s, o) => {
      const m = [s, "pricing"];
      if (!Es(o, m))
        return Y("error", `${m.join(".")} not found in sent data`), null;
      const d = Yt(o, m);
      if (typeof d != "object")
        return Y("error", `${m.join(".")} data must be an object`), null;
      if (!Ls(d))
        return Y("error", `if provided, ${m.join(".")} data must contain some values`), null;
      const S = Object.keys(d);
      if (!S.length)
        return Y("error", `no ${m.join(".")} pricing found`), null;
      if (S.some((fe) => /,/.test(fe)))
        return Y("error", `${m.join(".")} keys must not contain commas and should only be separated by a pipe (|)`), null;
      if (Object.values(d).some((fe) => isNaN(fe)))
        return Y("error", `${m.join(".")} values must be a number`), null;
      const P = [s, "labels"];
      if (!Es(o, P))
        return Y("error", `${P.join(".")} not found`), null;
      const T = Yt(o, P);
      if (!T)
        return Y("error", `${P.join(".")} data not provided`), null;
      if (!Array.isArray(T))
        return Y("error", `${P.join(".")} data must be an array`), null;
      if (!T.length)
        return Y("error", `if provided, ${P.join(".")} data must contain values`), null;
      const K = os(d);
      return T.length !== K ? (Y("error", `${P.join(".")} length (${T.length}) must match the number of levels in ${m.join(".")} (${K})`), null) : { pricing: d, labels: T };
    }, oi = (s, o) => {
      const m = o?.[s], d = !!m?.containsCatalogueLinked;
      if (!s || !m || !Yt(g, ["enable", s])) return;
      let S = m.pricing ?? {}, P = m.labels ?? [];
      if (!d) {
        const fe = Do(s, o);
        if (!fe) return;
        S = fe.pricing, P = fe.labels;
      }
      const T = Yt(o, [s, "displayNames"]) || void 0, K = Yt(o, [s, "formulas"]);
      if (s === "banding" || s === "finish" || s === "planing") {
        const fe = ti(s);
        fe.labels = P, fe.pricing = S, fe.displayNames = T || {}, fe.codes = Yt(o, [s, "codes"]) || {}, fe.containsCatalogueLinked = d, fe.formulas = K;
        const ae = cs(S);
        fe.options = ae, Ge(s, ae, P, S, T);
      }
      if (ct.value = Pe(), !!y.inputShapes.value?.length)
        for (const fe of y.inputShapes.value) ls(fe, s);
    }, cs = (s) => {
      const o = [], m = Object.keys(s), d = os(s);
      for (let S = d; S--; ) o.push(/* @__PURE__ */ new Set());
      for (const S of m) {
        const P = S.split("|");
        d > 1 && P.length === 1 || P.forEach((T, K) => {
          K < d && o[K].add(T);
        });
      }
      for (let S = 0; S < d; S++)
        o[S] = Array.from(o[S]);
      return o;
    }, La = (s, o) => {
      if (!o) return;
      s !== "info" && Object.keys(q).forEach((d) => {
        d !== s && d !== "info" && (q[d] = null);
      });
      const m = y.inputShapes.value.indexOf(o);
      if (q[s] === m)
        re.value = null, q[s] = null, Io.value[s] = void 0;
      else if (re.value = o, q[s] = m, s !== "info") {
        const d = Mn(o, s);
        d.options.length && Ge(
          s,
          d.options,
          d.labels,
          d.pricing
        );
      }
    }, ds = (s) => {
      mt.value && Y("log", ["load event received"]), dn.value && _o(s.detail);
    }, _o = (s) => {
      if (mt.value && Y("log", ["loading parts..."]), !s || !s?.inputs?.parts?.length) {
        mt.value && Y("log", ["could not find any parts to import"]);
        return;
      }
      y.inputShapes.value.length = 0;
      let o = 0;
      for (const d of s.inputs.parts) {
        const S = Oa(d);
        S ? S.issues?.length && mt.value && Y("log", [`SmartCut - issues found while importing part at index ${o}`, S.issues]) : mt.value && Y("log", [`SmartCut - error loading part at index ${o}`, d]), o++;
      }
      y.inputShapes.value.flatMap((d) => Li(d.issues)).length && Xe({
        type: "error",
        message: Ee("errors.general.issues_found")
      }), mt.value && Y("log", [`loaded ${y.inputShapes.value.length} parts`]);
    }, Vo = (s) => {
      y.inputShapes.value.length = 0, Et(() => {
        for (const o of s)
          o.t = y.inputStock.value?.[0]?.t ?? null, h.stockType === "linear" && oe.value.length === 1 && !o.w && (o.w = oe.value[0]), Oa(o);
      });
    };
    Ke(() => rt.inputStock, (s) => {
      if (rs(), Array.isArray(s) || console.warn("SmartCut - stock must be passed as an array"), !s?.length) return;
      y.inputStock.value.length = 0;
      const o = s.map((m) => m.toData());
      co(o);
      for (const m of s)
        ue({
          ...m.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", m), Xe({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (y.inputStock.value.length) {
        if (!y.inputShapes.value.length)
          rt.inputType !== "formula" && Et(() => {
            y.inputShapes.value.length || si();
          });
        else if (A.value.length === 1) {
          const d = A.value[0];
          for (const S of y.inputShapes.value)
            S.material || (S.material = d.name, (S.t == null || !d.thicknesses.includes(ge({ v: S.t }))) && (S.t = ge({ v: d.thicknesses[0] })), Sn(S, d));
        }
        const m = W(y.inputSaw.value);
        m.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(m))), Xe({
          type: "error",
          message: Ee("errors.validation.stock_issue"),
          additional: m.map((d) => Ma(d.message, d.context || d.params))
        }));
      }
    }, { immediate: !0 }), Ke(y.inputShapes, (s) => {
      Y("inputs-changed"), s.forEach((o) => {
        h.stockType === "linear" && oe.value.length && (!o.w || !oe.value.includes(ge({ v: o.w }))) && (o.w = oe.value[0]);
        const m = A.value.find((d) => d.name === o.material);
        m && (m.thicknesses.includes(ge({ v: o.t })) || (o.t = ge({ v: m.thicknesses[0] })));
      });
    }, { deep: !0 }), Ke(() => Bt.value.length, (s, o) => {
      if (aa.value) {
        if (s > o) {
          const m = Math.ceil(s / Zt.value);
          pt.value < m && (pt.value = m);
        } else if (s < o) {
          const m = Math.ceil(s / Zt.value);
          pt.value > m && (pt.value = Math.max(1, m));
        }
      }
    }), Ke(() => g.numberFormat, (s) => {
      D(s);
    }), Ke(y.inputStock, (s) => {
      h.stockType === "linear" && ei(s.map((o) => o.toData()));
    }, { deep: !0 }), Ke(() => h, (s) => {
      y.inputSaw.value = new hn(s);
    }, { deep: !0 }), on(async () => {
      if (cn.value) return;
      cn.value = !0;
      const s = new URL(window.location.href), o = s.searchParams.toString(), m = s.origin + s.pathname + (o ? `?${o}` : "");
      it.value !== m && li(), it.value = m, je.value = g.locale, await fn.connect(), fn.emit("getUserFromDomain"), window.addEventListener("smartcut/load", ds);
    });
    const Bo = () => {
      fn && fn.disconnect();
    };
    return za(() => {
      window.removeEventListener("smartcut/load", ds), Bo(), delete window.smartcutCheckout;
    }), n({
      init: Ql,
      clear: li,
      getAvailablePricingOptions: ii,
      getExtrasPrice: Oo,
      formatPrice: rt.formatPrice,
      findExtrasPrice: rt.findExtrasPrice,
      inputShapes: y.inputShapes,
      initExtrasOptions: ls,
      createAndAddInputShape: Oa,
      initMaterialsThicknesses: ss
    }), (s, o) => {
      const m = Qn("FontAwesomeIcon");
      return I(), _("div", _m, [
        mt.value ? (I(), Fe(E(r), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: E(y).inputStock.value.map((d) => ({ name: E(Jn)(d).fullLabel, materialKey: d.material, db_id: d.db_id || null, code: d.code || null, l: d.l, w: d.w, t: d.t, db_sawId: d.db_sawId || null, stockExtras: E(Wa)(d) })),
            materials: A.value.map((d) => ({ name: E(Jn)(d).fullLabel, materialKey: d.name, thicknesses: d.thicknesses, db_id: d.db_id, code: d.code })),
            inputShapesStockRefs: E(y).inputShapes.value.map((d) => ({ material: d.material || "?", t: d.t, stock: d.stock || null })),
            saw: {
              inputSaw: E(y).inputSaw.value ? {
                name: E(y).inputSaw.value.name || null,
                db_id: E(y).inputSaw.value.db_id || null,
                stockType: E(y).inputSaw.value.stockType || null,
                bladeWidth: E(y).inputSaw.value.bladeWidth ?? null,
                bladeWidthEnd: E(y).inputSaw.value.bladeWidthEnd ?? null,
                cutPreference: E(y).inputSaw.value.cutPreference || null
              } : null,
              stockSawIds: E(y).inputStock.value.map((d) => ({ name: E(Jn)(d).fullLabel, db_sawId: d.db_sawId || null })),
              resultSaw: E(ke).saw ? { name: E(ke).saw.name || null, db_id: E(ke).saw.db_id || null } : null
            },
            localStorage: { inputStock: zl.value, stockFilterSelections: Kl.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : se("", !0),
        dn.value ? se("", !0) : (I(), Fe(vl, {
          key: 1,
          size: "large",
          label: "Loading...",
          block: ""
        })),
        dn.value ? (I(), _("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ze(["smartcut-content", { fullscreen: Rt.value }]),
          style: _t(Hl.value)
        }, [
          re.value?.machining && Oe.value ? (I(), Fe(E(i), {
            key: 0,
            "input-shape": re.value,
            "onUpdate:inputShape": o[0] || (o[0] = (d) => re.value = d),
            translate: !0,
            options: Ae,
            "find-extras-price": e.findExtrasPrice,
            "get-extras-price": E(pi),
            "get-available-pricing-options": ii,
            "format-price": e.formatPrice,
            "custom-machining-products": lo(re.value),
            onClose: ao
          }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price", "custom-machining-products"])) : se("", !0),
          re.value && Xa.value ? (I(), Fe(E(l), {
            key: 1,
            "input-shape": re.value,
            "onUpdate:inputShape": o[1] || (o[1] = (d) => re.value = d),
            products: Xi(re.value),
            "find-extras-price": e.findExtrasPrice,
            "format-price": e.formatPrice,
            onClose: so
          }, null, 8, ["input-shape", "products", "find-extras-price", "format-price"])) : se("", !0),
          En.value && !e.readonly ? (I(), _("button", {
            key: 2,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: o[2] || (o[2] = (d) => ho())
          }, [
            lt(m, { icon: ["fass", "expand"] }),
            zt(" " + he(E(Ee)("general.full_screen")), 1)
          ])) : se("", !0),
          Ji.value ? (I(), _("a", {
            key: 3,
            id: "credit",
            style: Jl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, he(E(Gr)(E(Ee)("general.powered_by"))), 1)) : se("", !0),
          z("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: _t({ "grid-template-columns": Bl.value })
          }, [
            E(y).inputShapes.value.length ? (I(), _("div", Vm, [
              o[8] || (o[8] = z("div", { class: "cell id" }, null, -1)),
              (I(!0), _(vt, null, Ft(Nn.value, (d) => (I(), _("div", {
                key: d.name,
                class: Ze(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(d.name) || d.type === "boolean" }])
              }, he(E(Ee)(d.label)), 3))), 128)),
              mt.value ? (I(), _("div", Bm, " Info ")) : se("", !0),
              o[9] || (o[9] = z("div", { class: "cell del" }, null, -1))
            ])) : se("", !0),
            (I(!0), _(vt, null, Ft(Rl.value, (d, S) => (I(), _("div", {
              key: d.autoId,
              class: Ze(["row inputs", { "group-pickable": ce.value, "row--readonly": !!d.readonly }])
            }, [
              z("div", {
                class: Ze(["cell", { clickable: ce.value }]),
                onClick: (P) => ce.value && Fn(d)
              }, [
                z("div", {
                  class: "id",
                  style: _t({
                    background: g.colors.partA,
                    color: g.colors.text
                  })
                }, he(ql.value + S + 1), 5)
              ], 10, Rm),
              (I(!0), _(vt, null, Ft(Nn.value, (P) => (I(), _("div", {
                key: P.name,
                class: "cell"
              }, [
                d ? (I(), Fe(Cm, {
                  key: 0,
                  field: P,
                  item: d,
                  index: S,
                  "type-prefix": "part",
                  readonly: e.readonly || !!d.readonly,
                  "number-format": g.numberFormat,
                  "orientation-model": g.orientationModel,
                  "stock-grain": E(te)(d),
                  "material-options": A.value?.map((T) => ({ label: T.displayName || T.name, value: T.name })) || [],
                  "material-items": mo(A.value),
                  "thickness-options": P.name === "t" ? po(d) : [],
                  "width-options": P.name === "w" && h.stockType === "linear" ? go(d) : [],
                  "banding-enabled": q.banding === S ? d : null,
                  "full-stock-disabled": d.fullStock && !["material", "t", "q", "fullStock"].includes(P.name) || P.name === "fullStock" && (is(d) || !d.fullStock && !ai(d)),
                  "material-extras-disabled": uo(d),
                  onUpdate: (T) => Yl(d, P.propertyPath || P.fieldMap || P.name, T),
                  onValidation: o[3] || (o[3] = (T, K) => Xl()),
                  onBlur: () => eo(d, P.name),
                  onOpenBanding: (T) => La("banding", d),
                  onOpenMachining: (T) => no(d),
                  onOpenCustomProducts: (T) => io(d),
                  onOpenFinish: (T) => La("finish", d),
                  onOpenPlaning: (T) => La("planing", d),
                  onOpenImageUpload: (T) => Fo(S)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "material-items", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenCustomProducts", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : se("", !0)
              ]))), 128)),
              mt.value ? (I(), _("div", qm, [
                z("button", {
                  class: Ze(["c-btn", { selected: q.info === S }]),
                  type: "button",
                  onClick: (P) => La("info", d)
                }, " i ", 10, jm)
              ])) : se("", !0),
              z("div", Um, [
                z("button", {
                  disabled: E(y).inputShapes.value.length <= 1 || e.readonly || !!d.readonly,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${E(Ee)("actions.remove")} ${E(vi)(E(Ee)("woodwork.part"))}`,
                  onClick: (P) => E(O)(d.autoId)
                }, [
                  lt(m, { icon: ["fass", "trash"] })
                ], 8, Gm)
              ]),
              lt(E(a), {
                item: d,
                "num-columns": Sa.value
              }, null, 8, ["item", "num-columns"]),
              (I(!0), _(vt, null, Ft(xo.value, (P) => (I(), _(vt, {
                key: P.type + "-" + (d?.material || "")
              }, [
                q[P.type] === S && ko.value && P.show(d) ? (I(), Fe(qd, Gt({
                  key: 0,
                  shape: d,
                  "shape-index": S,
                  "extra-type": P.type,
                  "extra-label": P.type,
                  "extra-keys": P.keys,
                  "user-friendly-field-map": E(jr),
                  "part-columns": Sa.value,
                  "format-price": e.formatPrice,
                  "find-extras-price": rt.findExtrasPrice,
                  "get-price": Co,
                  "orientation-model": g.orientationModel,
                  "stock-grain": E(te)(d),
                  "get-available-pricing-options": ii,
                  "allow-custom-names": !1,
                  debug: mt.value
                }, { ref_for: !0 }, { ...Po(d, P), ...P.extraProps(d) }), null, 16, ["shape", "shape-index", "extra-type", "extra-label", "extra-keys", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : se("", !0)
              ], 64))), 128)),
              q.info === S ? (I(), _("div", {
                key: 1,
                id: "shape-info",
                style: _t({ "grid-column-end": "span " + Sa.value })
              }, [
                z("div", null, he(d?.banding), 1),
                z("div", null, he(ct.value?.banding?.options || "No options"), 1)
              ], 4)) : se("", !0),
              At.value === S ? (I(), Fe(E(c), {
                key: 2,
                prefix: (S + 1).toString(),
                "unique-id": d.autoId,
                "shape-id": d.autoId,
                style: _t({ "grid-column-end": "span " + Sa.value }),
                images: st.value,
                debug: mt.value,
                onUpdate: Lo,
                onRemove: Eo
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images", "debug"])) : se("", !0)
            ], 2))), 128))
          ], 4),
          z("div", Wm, [
            e.readonly ? se("", !0) : (I(), _("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${E(Ee)("actions.add")} ${E(vi)(E(Ee)("woodwork.part"))}`,
              onClick: o[4] || (o[4] = (d) => si())
            }, [
              lt(m, { icon: ["fass", "plus-large"] }),
              zt(" " + he(`${E(Ee)("actions.add")} ${E(vi)(E(Ee)("woodwork.part"))}`), 1)
            ], 8, zm)),
            z("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": E(Ee)("actions.calculate"),
              title: e.calculateDisabled && e.calculateDisabledReason ? e.calculateDisabledReason : void 0,
              disabled: !E(y).inputStock.value?.length || bt.value || e.calculateDisabled,
              onClick: o[5] || (o[5] = (d) => Mo())
            }, [
              lt(m, { icon: ["fass", "calculator"] }),
              zt(he(E(Ee)("actions.calculate")), 1)
            ], 8, Km),
            e.readonly ? se("", !0) : (I(), _("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": E(Ee)("actions.clear"),
              onClick: o[6] || (o[6] = (d) => li())
            }, [
              lt(m, { icon: ["fass", "trash"] })
            ], 8, Hm)),
            z("div", Zm, he(E(M)) + he(g?.maxParts ? "/" + g.maxParts : ""), 1)
          ]),
          ce.value && !e.readonly ? (I(), Fe(E(f), {
            key: 4,
            ref_key: "groupsRef",
            ref: Ve,
            "selected-shape": Ie.value,
            "selected-shape-counter": we.value,
            "stock-grain": ht.value,
            "format-options": Tt.value,
            onHighlightShape: Qa,
            onClearHighlight: Ya
          }, null, 8, ["selected-shape", "selected-shape-counter", "stock-grain", "format-options"])) : se("", !0),
          aa.value && $n.value > 1 ? (I(), _("div", Jm, [
            z("div", Qm, [
              z("button", {
                type: "button",
                class: "c-btn",
                disabled: pt.value === 1,
                onClick: jl
              }, [
                lt(m, { icon: ["fass", "chevrons-left"] })
              ], 8, Ym),
              z("button", {
                type: "button",
                class: "c-btn",
                disabled: pt.value === 1,
                onClick: Ul
              }, [
                lt(m, { icon: ["fass", "chevron-left"] })
              ], 8, Xm),
              z("span", eg, he(pt.value) + " / " + he($n.value), 1),
              z("button", {
                type: "button",
                class: "c-btn",
                disabled: pt.value >= $n.value,
                onClick: Gl
              }, [
                lt(m, { icon: ["fass", "chevron-right"] })
              ], 8, tg),
              z("button", {
                type: "button",
                class: "c-btn",
                disabled: pt.value >= $n.value,
                onClick: Wl
              }, [
                lt(m, { icon: ["fass", "chevrons-right"] })
              ], 8, ng)
            ])
          ])) : se("", !0),
          en.value && !e.readonly ? (I(), Fe(E(u), {
            key: 6,
            ref: "import",
            "number-format": g.numberFormat,
            "custom-fields": ea.value,
            "banding-options": Me.options,
            "banding-labels": Me.labels,
            "finish-options": Le.options,
            "finish-labels": Le.labels,
            "show-template": g.enable?.csvTemplate !== !1,
            onImport: Vo
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels", "show-template"])) : se("", !0),
          Yn.value ? (I(), _("div", ag, [
            An.value ? (I(), _("div", ig, he(An.value), 1)) : se("", !0),
            z("pre", sg, he(Xn.value), 1)
          ])) : se("", !0),
          (g.enable?.diagram ? bt.value && !E(Je).complete || E(Je).complete && !me.value : bt.value || E(Je).complete) ? (I(), _("div", lg, [
            lt(E(R), {
              size: 50,
              number: E(Je).shapeCount,
              complete: E(Je).complete,
              "show-number": g.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : se("", !0),
          Za(z("div", og, [
            E(be)?.saw?.stockType !== "roll" ? (I(), _("div", rg, he(E(be)?.stack?.number ? E(be).stack.number : 1), 1)) : se("", !0),
            un.value ? (I(), Fe(E($), {
              key: 1,
              "element-id": "diagram",
              "number-format": g.numberFormat,
              "decimal-places": g.decimalPlaces,
              colors: g.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])) : se("", !0)
          ], 512), [
            [Ys, g.enable?.diagram && E(Je).complete && me.value]
          ]),
          Zi.value && g.enable?.diagram && E(V).length > 1 && E(Je).complete ? (I(), Fe(E(G), {
            key: 9,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: E(Te)
          }, null, 8, ["onShow"])) : se("", !0),
          !Zi.value && g.enable?.diagram && E(V).length > 1 && E(Je).complete ? (I(), Fe(E(pe), {
            key: 10,
            ref: "stockNavigation",
            "active-stock-id": E(ne),
            "stock-list": E(V),
            "primary-color": g.colors.stock?.replace("#", ""),
            "secondary-color": g.colors.partA?.replace("#", ""),
            onShowStock: E(Te)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : se("", !0)
        ], 6)) : se("", !0),
        mt.value ? (I(), _("div", ug, [
          lt(E(r), {
            data: [E(y)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          o[10] || (o[10] = z("div", null, "Result data", -1)),
          lt(E(r), {
            data: [tt.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : se("", !0),
        lt(Dm, {
          open: Tn.value,
          "onUpdate:open": o[7] || (o[7] = (d) => Tn.value = d),
          options: pn.value?.options || [],
          "material-label": pn.value?.shape?.material || "",
          thickness: pn.value?.shape?.t,
          "format-price": rt.formatPrice,
          onPick: p,
          onCancel: x
        }, null, 8, ["open", "options", "material-label", "thickness", "format-price"])
      ]);
    };
  }
}), Fg = /* @__PURE__ */ Ht(cg, [["__scopeId", "data-v-28486e61"]]);
export {
  Fg as E,
  Ja as F,
  ga as I,
  vl as L,
  Rc as M,
  bl as O,
  wl as S,
  Lm as _,
  qi as a,
  wg as b,
  mp as c,
  Lg as d,
  qd as e,
  Zd as f,
  zu as g,
  am as h,
  Pg as i,
  Cg as j,
  Og as k,
  zd as l,
  xg as m,
  Sc as n,
  Jn as o,
  Sg as p,
  Vu as q,
  Yr as r,
  Eg as s,
  hl as t,
  fl as u,
  Ig as v,
  Fd as w
};
