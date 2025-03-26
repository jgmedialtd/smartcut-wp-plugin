var gr = Object.defineProperty;
var mr = (i, t, e) => t in i ? gr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => mr(i, typeof t != "symbol" ? t + "" : t, e);
import { F as ai, g as Kt, d as Oi, i as pi, c as vr, a as fn, b as Xe, v as us, t as Ri, e as Ai, h as yr, s as br, f as wr, o as Sr, j as xr, k as kr, P as Cr } from "./vendor-DdDY4qXh.js";
import { i as Ir } from "./vendor-i18n-J0oHP3sq.js";
import { d as Oe, c as C, o as y, F as Se, r as De, n as ke, a as Ce, b as M, w as cs, t as te, v as hs, e as W, f as Lr, g as H, h as Z, i as Le, j as ft, k as Ze, l as ds, m as oi, u as x, p as Xt, q as pe, s as Pr, x as fs, y as Ui, z as Bt, A as ve, B as $r, C as $t, D as Tr, E as Dr, G as Or, H as Ar, I as gt, J as Er, T as Mr, K as pn, L as Rr, M as Fs, N as Fr, O as _r, P as qr, Q as Br, R as Hr } from "./vendor-vue-Kgm6Js1o.js";
import { u as gn, a as ps, b as gs, c as Gr, d as Wr, e as Nr } from "./composables-BjMPv4Ze.js";
import { a as mn, b as vn, l as tt, c as Fi, d as _i, s as Me, r as Ft, e as li, f as yn, g as Ur, h as jr, i as zr, p as Vr, S as Yr, j as Xr, k as Kr } from "./vendor-d3-B-JATA3m.js";
function gi(i) {
  return !(!i || typeof i != "string");
}
function Zr(i) {
  return !gi(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function Vt(i) {
  return gi(i) ? i.trim().split(" ").map((t) => Te(t)).join(" ") : "";
}
function Te(i) {
  return gi(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function ji(i) {
  return gi(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function Jr(i, t = 100) {
  return gi(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let bn = Ir;
function lh(i) {
  bn = i;
}
function Fe(i, t) {
  const e = bn.t(i, { ns: ["main", "errors"], ...t });
  return e || i;
}
const zt = 1e-10, Qr = 10, eo = Number.MAX_SAFE_INTEGER, to = 4294967295, qe = (i) => typeof i == "number" && Number.isFinite(i), Ei = (i) => Array.isArray(i) && i.length > 0;
function ri(i, t, e = zt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const io = {
  greaterThan: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) >= 0,
  lessThan: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) <= 0,
  equalTo: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) === 0
};
function so(i) {
  return qe(i) ? Number.isInteger(i) ? i : Number(i.toFixed(Qr)) : !1;
}
function no(i) {
  if (!qe(i) || i < 0 || i > eo)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (to + 1) * i);
}
function ro(i, t) {
  if (!Ei(i))
    throw new Error("Invalid array parameter");
  if (!qe(t) || t < 0 || t > i.length)
    throw new Error("Invalid size parameter");
  const e = i.slice(), s = i.length - t;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e.slice(s);
}
class ki {
  static calculateMean(t) {
    if (!Ei(t))
      throw new Error("Invalid input array");
    return t.reduce((e, s) => e + s, 0) / t.length;
  }
  static calculateStandardDeviation(t, e = null) {
    if (!Ei(t))
      throw new Error("Invalid input array");
    const s = e ?? this.calculateMean(t), n = t.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / t.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(t) {
    if (!Ei(t))
      throw new Error("Invalid input array");
    const e = this.calculateMean(t);
    if (e === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(t, e) / e;
  }
}
const ce = {
  ...io,
  isNumber: qe,
  round: so,
  getRandom: no,
  getRandomSample: ro,
  calculateStandardDeviation: ki.calculateStandardDeviation.bind(ki),
  calculateCoefficientOfVariation: ki.calculateCoefficientOfVariation.bind(ki)
}, _s = 10, oo = 0;
class ms extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
function lo(i) {
  const t = i.toString(), e = t.indexOf(".");
  return e === -1 ? 0 : t.length - e - 1;
}
function S(i) {
  var o, l, a, u;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && !((o = i.o) != null && o.numberFormat) ? null : "";
  if (typeof i.v == "number" && (i.nf === "decimal" || !i.nf && !((l = i.o) != null && l.numberFormat))) {
    if (i.dp === void 0 && ((a = i.o) == null ? void 0 : a.decimalPlaces) === void 0)
      return i.v;
    const f = i.dp ?? ((u = i.o) == null ? void 0 : u.decimalPlaces) ?? _s, p = Math.pow(10, f);
    return Math.round(i.v * p) / p;
  }
  const t = i.o ?? {}, e = i.nf ?? t.numberFormat ?? "decimal", s = i.dp ?? t.decimalPlaces ?? _s, n = i.pl ?? t.parseLocale ?? !1, r = i.fr ?? t.fractionRoundTo ?? oo;
  try {
    const f = fo(i.v, n);
    return f ? e === "decimal" ? ao(f, i.v, s) : uo(f, r) : e === "decimal" ? 0 : "0";
  } catch (f) {
    throw new ms(
      `Failed to convert number format: ${i.v} to ${e}. ${f.message}`
    );
  }
}
function ao(i, t, e) {
  if (typeof i == "number" && !String(t).includes("/")) {
    if (typeof e != "number")
      return i;
    const l = Math.pow(10, e);
    return Math.round(i * l) / l;
  }
  if (typeof i == "string" && !i.includes("/")) {
    const l = Number(i);
    if (typeof e != "number")
      return Ci(l);
    const a = Math.pow(10, e);
    return Ci(Math.round(l * a) / a);
  }
  const n = new ai(i).valueOf();
  if (typeof t == "string" && t.includes("/")) {
    if (typeof e == "number") {
      const l = Math.pow(10, e);
      return Ci(Math.round(n * l) / l);
    }
    return n;
  }
  const r = lo(String(t)), o = Math.pow(10, r);
  return Ci(Math.round(n * o) / o);
}
function uo(i, t) {
  if (typeof i == "number" && Number.isInteger(i))
    return `${i}/1`;
  const e = new ai(i);
  if (t > 0) {
    const s = e.mul(t), n = Math.round(s.valueOf());
    return new ai(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function Ci(i) {
  const t = i.toString();
  return t.includes(".") && /\.0+$/.test(t) ? parseInt(t, 10) : i;
}
function co(i = "en-US") {
  var t, e;
  try {
    const s = Intl.NumberFormat(i).formatToParts(123456789e-2);
    return {
      thousandsSeparator: ((t = s.find((n) => n.type === "group")) == null ? void 0 : t.value) || ",",
      decimalSeparator: ((e = s.find((n) => n.type === "decimal")) == null ? void 0 : e.value) || "."
    };
  } catch {
    return console.warn("Failed to detect number separators. Using defaults."), { thousandsSeparator: ",", decimalSeparator: "." };
  }
}
function Mi(i) {
  if (i == null || i === "") return null;
  const t = String(i).trim();
  if (!t) return null;
  try {
    const { thousandsSeparator: e, decimalSeparator: s } = co(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch {
    throw new ms(`Failed to parse number: ${i}`);
  }
}
function ho(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  return /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/.test(t);
}
function fo(i, t = !1) {
  if (!i && i !== 0) return null;
  let e = String(i).trim();
  if (!e) return null;
  try {
    if (ho(i))
      return e.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
    {
      t ? (e = e.replace(/[^0-9,. -]/g, ""), e = e.replace(/\s/g, "")) : (e = e.replace(/[^0-9,.-]/g, ""), e = e.replace(/,/g, "")), e.startsWith(".") && (e = "0" + e), e.startsWith("-.") && (e = "-0." + e.slice(2));
      const s = t ? Mi(e) : parseFloat(e);
      return s === null || isNaN(s) ? null : s.toString();
    }
  } catch (s) {
    throw new ms(
      `Failed to clean numeric input: ${i}. ${s.message}`
    );
  }
}
function ah(i, t, e = null, s = null) {
  if (i && !(!we(i) && !it(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys) {
      if (typeof i[n] == "object") {
        for (const r in i[n])
          i[n][r] = S({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s });
        return;
      }
      i[n] = S({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
    }
  }
}
const qi = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function qs(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Bs(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Hs(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const me = (i, t, e) => t in i ? i[t] : (console.warn(qi.missingProperty(String(t), e)), null), Ii = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, jt = (i, t) => {
  if (!qs(i) || !qs(t))
    return console.warn(qi.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, lt = (i, t) => {
  const e = me(i, "id", "first item"), s = me(t, "id", "second item");
  if (e === null || s === null) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function at(i) {
  const t = Array.isArray(i[0]) ? i.map(([e, s]) => ({ key: e, direction: s })) : i;
  return (e, s) => {
    for (const { key: n, direction: r } of t) {
      const o = me(e, n, "first item"), l = me(s, n, "second item");
      if (!(o === null || l === null) && o !== l)
        return r === "desc" ? o < l ? 1 : -1 : o < l ? -1 : 1;
    }
    return 0;
  };
}
const Bi = {
  // Dimension-based sorts
  WDLD: at([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: at([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: at([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: at([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: at([["w", "desc"]]),
  LD: at([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Ii(
    at([["l", "desc"]]),
    lt
  ),
  WDIDA: Ii(
    at([["w", "desc"]]),
    lt
  ),
  // Area-based sorts
  AD: (i, t) => -jt(i, t),
  AA: jt,
  AAID: Ii(
    jt,
    lt
  ),
  ADID: Ii(
    (i, t) => -jt(i, t),
    lt
  ),
  // ID sorts
  ID: lt,
  IDDesc: (i, t) => -lt(i, t),
  StockID: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    return !e || !s ? 0 : lt(e, s);
  },
  StockIDAD: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = lt(e, s);
    return n !== 0 ? n : -jt(i, t);
  },
  // Position sorts
  YX: at([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: at([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (i, t) => {
    const e = me(i, "placementOrder", "first item") ?? 0, s = me(t, "placementOrder", "second item") ?? 0;
    return e - s;
  },
  typePlacementOrder: (i, t) => {
    const e = me(i, "offcut", "first item"), s = me(t, "offcut", "second item"), n = me(i, "placementOrder", "first item") ?? 0, r = me(t, "placementOrder", "second item") ?? 0;
    return e && !s ? 1 : !e && s ? -1 : n - r;
  },
  stockIDTypePlacementOrder: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = lt(e, s);
    if (n !== 0) return n;
    const r = me(i, "offcut", "first item"), o = me(t, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = me(i, "placementOrder", "first item") ?? 0, a = me(t, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    if (!(e != null && e.id) || !(s != null && s.id)) return 0;
    const n = lt(e, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in t) {
      const r = me(i, "placementOrder", "first item") ?? 0, o = me(t, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, t) => {
    const e = me(i, "placementOrder", "first item") ?? 0, s = me(t, "placementOrder", "second item") ?? 0, n = e - s;
    if (n !== 0) return n;
    const r = me(i, "groupPlacementOrder", "first item") ?? 0, o = me(t, "groupPlacementOrder", "second item") ?? 0;
    return r - o;
  },
  // Array manipulation utilities
  swapFirstTwo(i) {
    i.length < 2 || ([i[0], i[1]] = [i[1], i[0]]);
  },
  shuffle(i) {
    for (let t = i.length - 1; t > 0; t--) {
      const e = Math.floor(Math.random() * (t + 1));
      [i[t], i[e]] = [i[e], i[t]];
    }
  },
  // Aspect and area sorts
  aspect(i, t) {
    return !Bs(i) || !Bs(t) ? (console.warn(qi.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Hs(t) || !Hs(e) ? (console.warn(qi.missingLongSide), 0) : e[i] === t[i] ? -jt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function po(i, t, e, s = !1, n = !1) {
  return t.filter((r, o) => {
    const l = {
      fit: go(i) && zi(i, r, void 0, e),
      material: mo(i, r, s),
      thickness: vo(i, r, n),
      width: yo(i, r)
    };
    return Object.entries(l).forEach(([a, u]) => {
      i.stockMatch[a][o] = u;
    }), Object.values(l).every(Boolean);
  });
}
function go(i) {
  return we(i) || Je(i) || _n(i);
}
function mo(i, t, e) {
  var r, o;
  if (!e) return !0;
  const s = (r = t == null ? void 0 : t.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function vo(i, t, e) {
  return e ? !k(i.t) || !k(t.t) ? !1 : Je(i) ? ce.equalTo(i.t, t.t) : i.t === t.t : !0;
}
function yo(i, t) {
  var e;
  return ((e = t == null ? void 0 : t.saw) == null ? void 0 : e.stockType) !== "linear" || !Je(i) ? !0 : ns(i, 0, t) && ce.equalTo(i.w, t.w) || ns(i, 1, t) && ce.equalTo(i.l, t.w);
}
const Gs = (i) => i.some((t) => t === !0), bo = (i, t) => i.some((e, s) => e && t[s]);
function wo(i, t, e) {
  const s = we(i[0]), n = e.stockType;
  if (i.some((p) => k(p.stockLock) && p.stockLock.length)) return { stockList: t, shapeList: i, unusableShapes: [], unusableStock: [] };
  s || (t = t.filter((p) => p.autoAdd === !0 || k(p.q) && p.q > 0));
  const o = t.some((p) => k(p.material)), l = t.some((p) => k(p.t)), a = /* @__PURE__ */ new Set();
  for (const p of i) {
    p.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const I = po(p, t, e, o, l);
    p.stockMatch.fit = Gs(p.stockMatch.fit);
    const h = bo(
      p.stockMatch.material,
      p.stockMatch.thickness
    );
    if (p.stockMatch.width = Gs(p.stockMatch.width), !s && I.length) {
      const m = I.map((w) => w.getParentID());
      p.stockLock = m, m.forEach((w) => a.add(w));
    }
    p.stockMatch.fit ? (h || new re({
      item: p,
      field: [["material"], ["t"]],
      message: "no_matching_stock_material_thickness"
    }), n === "linear" && !p.stockMatch.width && new re({
      item: p,
      field: [["w"]],
      message: "no_matching_stock_width"
    })) : new re({
      item: p,
      field: [["l"], ["w"]],
      message: "will_not_fit"
    }), p.stockMatch = null;
  }
  let u, f;
  return s || (u = i.filter((p) => !p.stockLock || !p.stockLock.length).sort(Bi.ID), f = t.filter((p) => !a.has(p.parentID)).sort(Bi.ID), t = t.filter((p) => dt(p)).filter((p) => a.has(p.parentID)), (o || l) && (i = i.filter((p) => {
    var I;
    return (I = p == null ? void 0 : p.stockLock) == null ? void 0 : I.length;
  }))), {
    stockList: t,
    unusableStock: f,
    shapeList: i,
    unusableShapes: u
  };
}
class re {
  constructor({
    item: t = null,
    message: e = "",
    field: s = [],
    index: n = null,
    listId: r = null,
    issues: o = null,
    type: l = "error",
    throwError: a = !1,
    shouldTranslate: u = !0
  }) {
    c(this, "message");
    c(this, "identifier");
    c(this, "field");
    c(this, "index");
    c(this, "listId");
    c(this, "type", "error");
    var p, I, h, m;
    this.message = u ? Fe(e) : e, this.field = s, this.index = n, this.listId = r, this.type = l, t && ("name" in t && ((p = t.name) != null && p.length) ? this.identifier = t.name.toLocaleUpperCase() : "id" in t && ((I = t.id) != null && I.length) ? this.identifier = t.id : "parentID" in t && ((h = t.parentID) != null && h.length) ? this.identifier = t.parentID : typeof ((m = this == null ? void 0 : this.index) == null ? void 0 : m[0]) == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in t && Array.isArray(t.issues) && t.issues.push(this)), Array.isArray(o) && o.push(this);
    const f = `issue created for ${kl(t)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (a) throw new Error(f);
  }
}
const Qi = {
  partMaterial: "material",
  stockMaterial: "material"
};
function So(i) {
  return (Qi == null ? void 0 : Qi[i]) || i;
}
function Pt(i) {
  return i.length ? (i == null ? void 0 : i.filter((t) => t.type === "error")) || [] : [];
}
function Ws(i, t, e = !1) {
  var r;
  return !("issues" in i) || !((r = i.issues) != null && r.length) ? !1 : i.issues.filter((o) => o.type === (e ? "warning" : "error")).some((o) => {
    var l;
    if (!((l = o.field) != null && l.length))
      return !1;
    for (const a of o.field)
      if (a.every((u, f) => u === So(a[f])))
        return !0;
    return !1;
  });
}
const Qt = ({ item: i, field: t, index: e, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = Kt(i, t);
  if (o && (u == null || u === ""))
    return new re({
      item: i,
      message: Fe("not_set", { x: Re[t.join(".")] }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new re({
      item: i,
      message: Fe("greater_than", { x: Re[t.join(".")], y: 0 }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = S(u);
  } catch {
    return xo({
      item: i,
      field: t,
      value: Kt(i, t),
      index: e,
      issues: s,
      isWarning: a
    }), null;
  }
  return ko({ item: i, field: t, value: u, index: e, issues: s, min: n, isWarning: a }), Co({ item: i, field: t, value: u, index: e, issues: s, max: r, isWarning: a }), u;
}, xo = ({ item: i, field: t, value: e, index: s, issues: n, isWarning: r }) => {
  new re({
    item: i,
    message: Fe("not_understood", { x: t.join("."), y: e }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, ko = ({ item: i, field: t, value: e, index: s, issues: n, min: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e < r && new re({
    item: i,
    message: Fe("greater_than_or_equal", { x: Re[t.join(".")], y: r }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, Co = ({ item: i, field: t, value: e, index: s, issues: n, max: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e > r && new re({
    item: i,
    message: Fe("less_than_or_equal", { x: Re[t.join(".")], y: r }),
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, Io = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new re({
    item: i,
    message: Fe("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Lo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "x" in i && Qt({ item: i, field: ["x"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, Po = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "y" in i && Qt({ item: i, field: ["y"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, $o = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "l" in i && Qt({ item: i, field: ["l"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, To = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "w" in i && Qt({ item: i, field: ["w"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, Do = ({ item: i, index: t, max: e, isWarning: s, saw: n }) => {
  const r = [];
  return "t" in i && ((n == null ? void 0 : n.cutType) === "beam" && !i.t && new re({
    item: i,
    message: Fe("thickness_required_for_beam_saw"),
    field: [["t"]],
    index: [t],
    type: "error",
    issues: r
  }), Qt({ item: i, field: ["t"], index: t, newIssues: r, allowZero: !1, min: 0, max: e, isWarning: s })), r;
}, Oo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "q" in i && S({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new re({
    item: i,
    message: Fe("greater_than_or_equal", { x: Re.q, y: 0 }),
    field: [["q"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Ao = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new re({
    item: i,
    message: Fe("must_be_values", { x: Re.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Eo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new re({
    item: i,
    message: Fe("must_be_values", { x: Re.grain, y: "l, w" }),
    field: [["grain"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Mo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("customData" in i)) return s;
  const n = i.customData;
  if (typeof n != "object")
    return new re({
      item: i,
      message: Fe("must_be_object", { x: Re.customData }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new re({
      item: i,
      message: Fe("must_be_string_number_boolean", { x: Re.customData }),
      field: [["customData"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: s
    }));
  }
  return s;
}, Ro = ({
  item: i,
  partTrim: t,
  index: e = null,
  isWarning: s = !1
}) => {
  const n = [];
  if (!t || !("l" in i) || !("w" in i) || !i.l || !i.w) return n;
  const r = S({ v: t }), o = S({ v: i.l }), l = S({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new re({
    item: i,
    message: Fe("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
    field: [["l"], ["w"], ["trim"]],
    index: [e],
    type: s ? "warning" : "error",
    issues: n
  }), n;
}, Fo = ({
  item: i,
  index: t = null,
  min: e = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [];
  if (!("l" in i) || !("w" in i) || !i.l || !i.w || !("trim" in i)) return r;
  if (!dt(i) || dt(i) && !(i != null && i.trimmed)) {
    const o = ["l", "w"], [l, a] = o.map((u) => S(i[u]));
    for (const u in i.trim)
      Qt({ item: i, field: ["trim", u], index: t, newIssues: r, min: e, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = S({ v: i.trim.x1 }), f = S({ v: i.trim.x2 }), p = S({ v: i.trim.y1 }), I = S({ v: i.trim.y2 }), h = (u || 0) + (f || 0), m = (p || 0) + (I || 0);
      h >= l && new re({
        item: i,
        message: Fe("too_much_trim", {
          x: `${Re.x1.toUpperCase()} + ${Re.x2.toUpperCase()}`,
          y: Re.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      }), m >= a && new re({
        item: i,
        message: Fe("too_much_trim", {
          x: `${Re.y1.toUpperCase()} + ${Re.y2.toUpperCase()}`,
          y: Re.l,
          z: a
        }),
        field: [["trim", "y1"], ["trim", "y2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      });
    }
  }
  return r;
}, _o = ({
  item: i,
  inputStockList: t,
  saw: e,
  partTrim: s = 0,
  index: n = null,
  isWarning: r = !1
}) => {
  var u;
  const o = [], l = e.stockType;
  if (!("q" in i) || !("l" in i) || !("w" in i) || !i.l || !i.w || ("applyPartTrim" in i && i.applyPartTrim(s, l), i.issues.length)) return o;
  const a = wo([i], t, e);
  if (!a) return o;
  if ((u = a == null ? void 0 : a.unusableShapes) != null && u.length) {
    const p = a.unusableShapes[0].stockMatch;
    p.fit || new re({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      listId: we(i) || it(i) ? [i.listId] : null,
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), p.material || new re({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      listId: we(i) || it(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), p.thickness || new re({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      listId: we(i) || it(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), !p.width && l === "linear" && new re({
      item: i,
      message: "no_matching_stock_width",
      field: [["w"]],
      listId: we(i) || it(i) ? [i.listId] : null,
      index: [n],
      issues: o
    });
  }
  return o;
}, qo = ({ item: i = null, index: t = null }) => {
  i.machining.validateEverything(i, t);
}, Ne = {
  customData: Mo,
  banding: Io,
  partTrim: Ro,
  trim: Fo,
  x: Lo,
  y: Po,
  l: $o,
  w: To,
  t: Do,
  q: Oo,
  orientationLock: Ao,
  grain: Eo,
  stockMatch: _o,
  machining: qo
};
function is(i) {
  let t, e;
  switch (i) {
    case "l":
    case "length":
      t = "guillotine", e = "l";
      break;
    case "w":
    case "width":
      t = "guillotine", e = "w";
      break;
    case "flex":
      t = "guillotine", e = "flex";
      break;
    case "efficiency":
      t = "efficiency", e = "none";
      break;
    case "beam":
      t = "beam", e = "l";
      break;
    default:
      t = null, e = null;
      break;
  }
  return {
    cutPreference: e,
    cutType: t
  };
}
const Rt = [null, void 0, "none", ""], Ye = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: Rt
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: Rt
    },
    roll: {
      guillotine: ["w"],
      efficiency: Rt
    },
    linear: {
      guillotine: Rt,
      efficiency: Rt
    }
  },
  defaults: {
    bladeWidth: 0,
    stackHeight: 100,
    guillotine: {
      strategy: "efficiency",
      maxPhase: 0,
      headCuts: !1
    },
    efficiency: {
      primaryCompression: "y"
    },
    options: {
      stockSelection: "efficiency",
      minSpacing: 0,
      minSpacingDimension: {
        dimension: 0,
        minSpacing: 0
      },
      stackingMode: "identical"
    }
  }
};
function Bo(i) {
  var t;
  return ((t = Ye.cutTypes) == null ? void 0 : t[i]) ?? Rt;
}
function Ho(i, t) {
  var e, s;
  return ((s = (e = Ye.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? Rt;
}
function Go(i) {
  var t;
  return ((t = Ye.cutTypes) == null ? void 0 : t[i]) ?? [];
}
function Wo(i, t) {
  var e, s;
  return ((s = (e = Ye.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? [];
}
function wn(i) {
  return Ye.stockTypes.includes(i);
}
function Sn(i, t) {
  return Bo(i).includes(t);
}
function xn(i, t, e) {
  return Ho(i, t).includes(e);
}
function Li(i, t, e, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!vs(i)) {
    console.error(Fe(e, s));
    return;
  }
  new re({
    item: i,
    field: Array.isArray(t) ? t.map((n) => [n]) : [[t]],
    message: Fe(e, s),
    shouldTranslate: !1
  });
}
class Dt {
  constructor(t, e) {
    c(this, "bladeWidth");
    c(this, "stockType");
    c(this, "cutType");
    c(this, "cutPreference");
    c(this, "stackHeight");
    c(this, "options");
    c(this, "guillotineOptions");
    c(this, "efficiencyOptions");
    c(this, "issues");
    t = qt(t), this.issues = [], e = e ?? (t == null ? void 0 : t.stockType) ?? Ye.stockTypes[0], No(this, t, e), !this.issues.length && (this.bladeWidth = S({ v: t == null ? void 0 : t.bladeWidth }) ?? Ye.defaults.bladeWidth, this.stockType = e ?? (t == null ? void 0 : t.stockType) ?? Ye.stockTypes[0], wn(this.stockType) || (this.stockType = Ye.stockTypes[0]), this.cutType = t == null ? void 0 : t.cutType, Sn(this.stockType, this.cutType) || (this.cutType = Go(this.stockType)[0]), this.cutPreference = t == null ? void 0 : t.cutPreference, xn(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = Wo(this.stockType, this.cutType)[0]), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? Ye.defaults.stackHeight, this.guillotineOptions = Oi({}, t == null ? void 0 : t.guillotineOptions, Ye.defaults.guillotine), this.efficiencyOptions = Oi({}, t == null ? void 0 : t.efficiencyOptions, Ye.defaults.efficiency), this.options = Oi({}, t == null ? void 0 : t.options, Ye.defaults.options), this.options.minSpacing = S({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = S({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = S({ v: this.options.minSpacingDimension.minSpacing }) ?? 0);
  }
  clone() {
    const t = structuredClone(this);
    return new Dt(t);
  }
  getMinSpacing() {
    return this.cutType !== "efficiency" ? 0 : this.options.minSpacing;
  }
}
function No(i, t, e) {
  if (k(t == null ? void 0 : t.bladeWidth) && (t.bladeWidth = typeof t.bladeWidth == "string" ? S({ v: t.bladeWidth }) : t.bladeWidth), (pi(t.bladeWidth) || t.bladeWidth < 0) && Li(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: t.bladeWidth ?? "none" }
  ), !wn(e)) {
    Li(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: e }
    );
    return;
  }
  t.cutType && !Sn(e, t.cutType) && Li(
    i,
    "cutType",
    "saw.validation.cutType.invalid",
    { cutType: t.cutType, stockType: e }
  ), t.cutType && t.cutPreference && !xn(e, t.cutType, t.cutPreference) && Li(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: t.cutPreference || "none",
      cutType: t.cutType || "none",
      stockType: e
    }
  );
}
function vs(i) {
  return i instanceof Dt;
}
function ss(i, t = !1) {
  var o, l, a, u;
  const e = typeof i.l == "string" ? S({ v: i.l }) : i.l, s = typeof i.w == "string" ? S({ v: i.w }) : i.w;
  if (!t || !qn(i) || Bn(i))
    return { l: e, w: s };
  const n = S({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + S({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = S({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + S({ v: ((u = i == null ? void 0 : i.trim) == null ? void 0 : u.y2) ?? 0 });
  return {
    l: e - (typeof n == "string" ? S({ v: n }) : n),
    w: s - (typeof r == "string" ? S({ v: r }) : r)
  };
}
function Uo(i, t) {
  var e, s, n, r;
  return qn(i) && !Bn(i) && (t.l = t.l - (S({ v: ((e = i == null ? void 0 : i.trim) == null ? void 0 : e.x1) ?? 0 }) + S({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), t.w = t.w - (S({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + S({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), t;
}
function es(i, t, e = !1) {
  let s = {
    l: S({ v: i.l }),
    w: S({ v: i.w })
  };
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return e && (s = Uo(i, s)), n === t || ([s.l, s.w] = [s.w, s.l]), s;
}
function kn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function jo(i) {
  kn(i), [i.l, i.w] = [i.w, i.l];
}
function zi(i, t, e, s) {
  var I, h;
  if (!t || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && vs(s) ? n = s.getMinSpacing() : s && ((I = s == null ? void 0 : s.options) != null && I.minSpacing) ? n = S({ v: s.options.minSpacing }) : ks(t) && (n = (h = t == null ? void 0 : t.saw) == null ? void 0 : h.getMinSpacing());
  const r = ss(t, !0), o = ss(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(m, w) {
    return ce.equalTo(m, w) || ce.lessThanOrEqualTo(m, w - n * 2);
  }
  function a(m) {
    return l(m.l, r.l) && l(m.w, r.w);
  }
  const u = ys(i, t);
  if (i.orientationLock || e != null) {
    const w = es(i, e ?? (u === "w" ? 1 : 0), !0);
    return a(w);
  }
  const f = es(i, 0, !0);
  if (a(f)) return !0;
  const p = es(i, 1, !0);
  return a(p);
}
function Cn(i) {
  let t = null;
  return At(i) ? t = i.direction : (Je(i) || we(i)) && (t = i.orientationLock), t;
}
function ys(i, t) {
  const e = Cn(i);
  return k(e) ? !t || At(i) ? e : ks(t) ? zo(i, t) : e : null;
}
function zo(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!ks(t)) throw new Error("container is not a container");
  const e = Cn(i);
  if (At(i)) return e;
  if (!k(e)) return null;
  const s = t.getStock();
  return k(s.grain) ? e === s.grain ? "l" : "w" : e;
}
function ns(i, t = null, e = null) {
  if (!k(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), In(i) && t || e && !zi(i, e, t))
    return !1;
  const s = ys(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function rs(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), ns(i, t, e) ? (i.rot === t || jo(i), !0) : !1;
}
function Zt(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !zi(i, e, t) ? !1 : rs(i, t, e);
}
function Vo(i, t) {
  if (!t)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const e = ys(i, t);
  return e === "l" ? Zt(i, 0) : e === "w" ? Zt(i, 1) : !1;
}
function Yo(i) {
  return i.orientationLock === "l" ? Zt(i, 0) : i.orientationLock === "w" ? Zt(i, 1) : !1;
}
function In(i) {
  kn(i);
  const t = ss(i);
  return ce.equalTo(t.l, t.w);
}
function Xo(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function ui(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
class Yt {
  constructor(t) {
    c(this, "x1");
    c(this, "x2");
    c(this, "y1");
    c(this, "y2");
    c(this, "dimension");
    c(this, "direction");
    c(this, "shapeCollisions");
    c(this, "origin");
    c(this, "type");
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = Ko(this), this.direction = Zo(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
}
function It(i, t, e, s, n = null, r = null) {
  return new Yt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function Ko(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function Zo(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function Jo(i, t) {
  const e = i.getCorners(), s = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (s.bottomLeftDown = It(
    e.bottomLeft.x,
    e.bottomLeft.y,
    e.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = It(
    e.bottomLeft.x,
    e.bottomLeft.y,
    0,
    e.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), e.topLeft.x > 0 && e.topLeft.y < t.w && (s.topLeftLeft = It(
    e.topLeft.x,
    e.topLeft.y,
    0,
    e.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = It(
    e.topLeft.x,
    e.topLeft.y,
    e.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), e.topRight.y < t.w && e.topRight.x < t.l && (s.topRightTop = It(
    e.topRight.x,
    e.topRight.y,
    e.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = It(
    e.topRight.x,
    e.topRight.y,
    t.l,
    e.topRight.y,
    "topRight",
    "topRightRight"
  )), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (s.bottomRightRight = It(
    e.bottomRight.x,
    e.bottomRight.y,
    t.l,
    e.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = It(
    e.bottomRight.x,
    e.bottomRight.y,
    e.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const Qo = {
  runTests: !1
};
vr.showDiff = !0;
fn("tests");
fn("timers");
function Ln() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function Pn(i = [], t = null) {
  i != null && i.length && Ln() && Qo.runTests;
}
Xe.colors = [
  2,
  3,
  4,
  5,
  7,
  9,
  10,
  11,
  14,
  159
];
Xe("logs");
Xe("cuts");
Xe("guillotine");
Xe("results");
Xe("scoring");
Xe("firstShapes");
Xe("calculations");
Xe("subset");
Xe("secondRun");
Xe("stack");
const el = Xe("errors");
Xe("allStock");
el.color = 1;
function tl(i) {
  if (i != null && i.dimension)
    switch (i.dimension) {
      case "l":
        return i.x2 - i.x1;
      case "w":
        return i.y2 - i.y1;
    }
  switch (i.type) {
    case "top":
    case "bottom":
      return i.x2 - i.x1;
    case "left":
    case "right":
      return i.y2 - i.y1;
  }
  return 0;
}
class Vi extends Yt {
  //used to mark for removal
  constructor(e) {
    var s, n, r;
    e.x2 < e.x1 && ([e.x1, e.x2] = [e.x2, e.x1]), e.y2 < e.y1 && ([e.y1, e.y2] = [e.y2, e.y1]);
    super(e);
    c(this, "stock");
    c(this, "stockId");
    c(this, "isGuillotine");
    c(this, "guillotineData");
    c(this, "ptxData");
    c(this, "type", null);
    c(this, "isHead");
    c(this, "isTrim");
    c(this, "beamTrimX1");
    c(this, "beamTrimY1");
    // isPtxDummyCut: boolean
    c(this, "distances");
    c(this, "remove");
    k(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Gt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.isGuillotine = e.isGuillotine, this.guillotineData = k(e.guillotineData) ? e.guillotineData : {}, this.ptxData = k(e.ptxData) ? e.ptxData : {}, this.isHead = k(e.isHead) ? e.isHead : !1, this.isTrim = k(e.isTrim) ? e.isTrim : !1, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1, this.distances = k(e.distances) ? e.distances : {};
  }
  //compress for saving / transfer
  compress() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const e = structuredClone(this);
    return new Vi(e);
  }
  bladeWidth() {
    return this.stock.getBladeWidth();
  }
  halfBladeWidth() {
    return this.stock.getHalfBladeWidth();
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
  trim() {
    this.dimension === "l" ? (this.x1 = this.x1 < 0 ? 0 : this.x1, this.x2 = this.x2 > this.stock.l ? this.stock.l : this.x2) : this.dimension === "w" && (this.y1 = this.y1 < 0 ? 0 : this.y1, this.y2 = this.y2 > this.stock.w ? this.stock.w : this.y2);
  }
  lookupDirectionByType(e) {
    const n = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    }[e];
    if (n) return n;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return ce.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return ce.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return ce.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return ce.lessThan(
          this.x1 - this.stock.getBladeWidth() / 2,
          this.stock.l
        );
      default:
        return !0;
    }
  }
  /**
      * the cuts are visualised differently from their exact dimensions
      * @param {string} coord
      */
  getVisCoords(e) {
    return this[e];
  }
  getLength() {
    return tl(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const il = {
  tb: {
    bottomLeft: {
      top: "topRight",
      topLeft: "topLeft"
    },
    bottomRight: {
      top: "topLeft",
      topRight: "topRight"
    }
  },
  bt: {
    topLeft: {
      bottom: "bottomRight",
      bottomLeft: "bottomLeft"
    },
    topRight: {
      bottom: "bottomLeft",
      bottomRight: "bottomRight"
    }
  },
  lr: {
    topRight: {
      left: "bottomLeft",
      topLeft: "topLeft"
    },
    bottomRight: {
      left: "topLeft",
      bottomLeft: "bottomLeft"
    }
  },
  rl: {
    topLeft: {
      right: "bottomRight",
      topRight: "topRight"
    },
    bottomLeft: {
      right: "topRight",
      bottomRight: "bottomRight"
    }
  }
}, Pi = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, $i = {
  topRight: {
    top: ["topLeft"],
    right: ["bottomRight"],
    default: ["topLeft", "bottomRight"]
  },
  topLeft: {
    top: ["topRight"],
    left: ["bottomLeft"],
    default: ["topRight", "bottomLeft"]
  },
  bottomRight: {
    bottom: ["bottomLeft"],
    right: ["topRight"],
    default: ["bottomLeft", "topRight"]
  },
  bottomLeft: {
    bottom: ["bottomRight"],
    left: ["topLeft"],
    default: ["bottomRight", "topLeft"]
  }
};
class Ee {
  constructor(t, e, s = null) {
    c(this, "x");
    c(this, "y");
    c(this, "z");
    c(this, "a");
    //shape id
    c(this, "b");
    //shape id
    c(this, "direction");
    //direction of the raay
    c(this, "type");
    //[] need to type
    c(this, "corner");
    //originating corner of this point
    c(this, "grid");
    //if a grid point, which grid position
    c(this, "stockID");
    c(this, "raycast");
    c(this, "collision");
    c(this, "tooClose");
    c(this, "adjustedForMinSpacing");
    this.x = parseFloat(t), this.y = parseFloat(e), this.z = parseFloat(s) || 0, this.validate();
  }
  /**
   * clone with the ability to change the coordinates
   * NOTE: looks odd for performance reasons
   */
  clone(t = null, e = null) {
    const s = new Ee(t ?? this.x, e ?? this.y);
    for (const n in this)
      n !== "x" && n !== "y" && (s[n] = this[n]);
    return s;
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  coords() {
    return {
      x: this.x,
      y: this.y
    };
  }
  collidesWith(t) {
    return this.x >= t.x && this.x <= t.x + t.l && this.y >= t.y && this.y <= t.y + t.w;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  /**
   * given a point from a shape corner or a ray, get the available positions for this shape
   * @returns the position of the shape relative to the point e.g. bottomRight means the shape is placed to the bottom right of the point
   * @remarks does not cater for diagonals
   */
  //[x] needs to cater for raycast coords, which don't originate from a shape corner
  //[x] cater for raycast corners and grid
  getAvailableShapePositions(t) {
    const e = /* @__PURE__ */ new Set();
    if (this.raycast) {
      const s = il[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Pi[this.corner] && (this.grid ? Pi[this.corner][this.grid] && Pi[this.corner][this.grid].forEach((s) => e.add(s)) : Pi[this.corner].default.forEach((s) => e.add(s))), e) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => e.add(s)) : $i[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class Ht {
  constructor(t = []) {
    c(this, "points", /* @__PURE__ */ new Map());
    t.forEach((e) => this.addPoint(e));
  }
  addPoint(t, e = null) {
    if (this.contains(t)) {
      const s = this.getPoint(t);
      s.type === "group" && !e && (s.type = void 0);
      return;
    }
    t.validate(), e && (t.type = e), this.points.set(this.createKey(t), t);
  }
  addPoints(t, e = null) {
    for (const s of t) {
      if (!s) return;
      s.validate(), this.addPoint(s, e);
    }
  }
  createKey(t) {
    return `${t.x},${t.y}`;
  }
  getPoint(t) {
    return this.points.get(this.createKey(t));
  }
  deletePoint(t) {
    t.validate(), this.points.delete(this.createKey(t));
  }
  deletePoints(t) {
    for (const e of t)
      e.validate(), this.deletePoint(e);
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(t) {
    return this.points.has(this.createKey(t));
  }
}
function fe(i, t, e, s, n) {
  const r = sl[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const sl = {
  bottom: (i, t) => {
    const e = i.clone(i.x, i.y - t);
    return e.grid = "bottom", e;
  },
  bottomLeft: (i, t) => {
    const e = i.clone(i.x - t, i.y - t);
    return e.grid = "bottomLeft", e;
  },
  bottomRight: (i, t) => {
    const e = i.clone(i.x + t, i.y - t);
    return e.grid = "bottomRight", e;
  },
  left: (i, t) => {
    const e = i.clone(i.x - t, i.y);
    return e.grid = "left", e;
  },
  centre: (i) => {
    const t = i.clone(i.x, i.y);
    return t.grid = "centre", t;
  },
  right: (i, t) => {
    const e = i.clone(i.x + t, i.y);
    return e.grid = "right", e;
  },
  top: (i, t) => {
    const e = i.clone(i.x, i.y + t);
    return e.grid = "top", e;
  },
  topLeft: (i, t) => {
    const e = i.clone(i.x - t, i.y + t);
    return e.grid = "topLeft", e;
  },
  topRight: (i, t) => {
    const e = i.clone(i.x + t, i.y + t);
    return e.grid = "topRight", e;
  }
};
function nl(i, t, e) {
  var o, l, a, u, f, p;
  const s = new Ht(), n = e.toArray().sort($n), r = t.getBladeWidth();
  if (n.forEach((I) => {
    const h = I.corner, m = I.type;
    if (!r)
      s.addPoint(I);
    else
      switch (h) {
        case "topRight":
          s.addPoint(
            fe("top", I, r, h),
            m
          ), s.addPoint(
            fe("right", I, r, h),
            m
          );
          break;
        case "topLeft":
          s.addPoint(
            fe("top", I, r, h),
            m
          ), s.addPoint(
            fe("left", I, r, h),
            m
          );
          break;
        case "bottomRight":
          s.addPoint(
            fe("bottom", I, r, h),
            m
          ), s.addPoint(
            fe("right", I, r, h),
            m
          );
          break;
        case "bottomLeft":
          s.addPoint(
            fe("bottom", I, r, h),
            m
          ), s.addPoint(
            fe("left", I, r, h),
            m
          );
          break;
      }
    const w = s.toArray();
    if (r)
      for (let R = w.length; R--; ) {
        const N = w[R];
        e.contains(N) && s.deletePoint(N);
      }
    else
      for (let R = w.length; R--; ) {
        const N = w[R];
        for (let J = i.length; J--; ) {
          const z = i[J];
          if (N.x === z.x && N.y === z.y) {
            s.deletePoint(N);
            break;
          }
        }
      }
  }), r) {
    const I = /* @__PURE__ */ new Set();
    let h, m, w, R;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (h = t.x, m = t.y, w = t.x + t.l, R = t.y + t.w) : (h = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), m = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), w = t.x + t.l - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.x2), R = t.y + t.w - ((p = t == null ? void 0 : t.trim) == null ? void 0 : p.y2));
    let N = s.toArray();
    for (let J = N.length; J--; ) {
      const z = N[J];
      (ce.lessThan(z.x, h) || ce.lessThan(z.y, m) || ce.greaterThan(z.x, w) || ce.greaterThan(z.y, R)) && N.splice(J, 1);
    }
    s.clear(), s.addPoints(N), I.clear(), N = s.toArray();
    for (let J = N.length; J--; ) {
      const z = N[J];
      for (let Q = i.length; Q--; ) {
        const ae = i[Q];
        if (z.collidesWith(ae)) {
          s.deletePoint(z);
          break;
        }
      }
    }
  }
  return s;
}
function rl(i, t, e) {
  let s = [];
  const n = i.getMinSpacing(e), r = t.corner, o = t.direction;
  if (t.type === "shape")
    switch (r) {
      case "topLeft":
        o === "rl" && (s.push(fe("right", t, n, r, o)), s.push(fe("topRight", t, n, r, o))), o === "bt" && (s.push(fe("bottom", t, n, r, o)), s.push(fe("bottomLeft", t, n, r, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(fe("left", t, n, r, o)), s.push(fe("topLeft", t, n, r, o))), o === "bt" && (s.push(fe("bottom", t, n, r, o)), s.push(fe("bottomRight", t, n, r, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(fe("left", t, n, r, o)), s.push(fe("bottomLeft", t, n, r, o))), o === "tb" && (s.push(fe("top", t, n, r, o)), s.push(fe("topRight", t, n, r, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(fe("right", t, n, r, o)), s.push(fe("bottomRight", t, n, r, o))), o === "tb" && (s.push(fe("top", t, n, r, o)), s.push(fe("topLeft", t, n, r, o)));
        break;
    }
  else if (t.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(fe("top", t, 0)), s.push(fe("centre", t, 0)), s.push(fe("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        s.push(fe("left", t, 0)), s.push(fe("right", t, 0)), s.push(fe("centre", t, 0));
        break;
    }
  if (s = s.filter((a) => a.x >= 0 && a.y >= 0), !s.length) return null;
  const l = new Ht();
  for (const a of s)
    a.raycast = !0, l.addPoints(On(i, a, e).toArray());
  return An(i, e, l), l;
}
function ol(i, t) {
  const e = new Ht();
  return i.sort($n), i.forEach((s) => {
    At(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function ll(i = [], t, e) {
  const s = ol(
    i === null ? t : i,
    e
  );
  return nl(
    t,
    e,
    s
  );
}
function $n(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function Tn(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function al(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new Ht();
  const s = Dn(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const f of u)
        ul(
          f,
          a.shape,
          l,
          e
        );
    }
  const r = i.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = t.reduce((l, a) => (r === "tb" ? l.x + l.l > a.x + a.l : l.y + l.w > a.y + a.w) ? l : a);
  return s.filter(({ shape: l }) => l.id === o.id).forEach(({ shape: l, rays: a }) => {
    const u = Object.values(a);
    for (const f of u) {
      const p = new Ee(f.x2, f.y2);
      r === f.direction && (Tn(p, l, null, f.direction, "edge"), e.addPoint(p));
    }
  }), e = cl(e), e;
}
function Dn(i, t) {
  return i.map((e) => {
    const s = Jo(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function ul(i, t, e, s) {
  switch (i.direction) {
    case "rl":
      Ti(
        i,
        t,
        e,
        s,
        e.x + e.l
      );
      break;
    case "lr":
      Ti(
        i,
        t,
        e,
        s,
        e.x
      );
      break;
    case "tb":
      Ti(
        i,
        t,
        e,
        s,
        e.y + e.w
      );
      break;
    case "bt":
      Ti(
        i,
        t,
        e,
        s,
        e.y
      );
      break;
  }
}
function Ti(i, t, e, s, n) {
  const r = i.dimension === "w", o = r ? "y" : "x", l = r ? "x" : "y", a = r ? "l" : "w";
  if (i[`${l}1`] >= e[l] && i[`${l}1`] <= e[l] + e[a]) {
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, f = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, p = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, I = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || f || p || I) {
      const m = r ? i[`${l}1`] : n, w = r ? n : i[`${l}1`], R = new Ee(m, w), N = i.origin;
      Tn(R, t, e, i.direction, "shape", N), s.addPoint(R);
    }
  }
}
function cl(i) {
  const t = new Ht();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = hl(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function hl(i, t) {
  return i.length === 0 ? null : i.reduce((e, s) => {
    switch (t) {
      case "left":
        return !e || s.x < e.x ? s : e;
      case "right":
        return !e || s.x > e.x ? s : e;
      case "top":
        return !e || s.y > e.y ? s : e;
      case "bottom":
        return !e || s.y < e.y ? s : e;
      default:
        return null;
    }
  }, null);
}
function On(i, t, e) {
  const s = new Ht(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = dl(t, i, e), r) {
      case "bottomLeft":
        o = o.clone(o.x - i.l, o.y - i.w), o.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        o = o.clone(o.x, o.y - i.w), o.shapePosition = "bottomRight";
        break;
      case "topLeft":
        o = o.clone(o.x - i.l, o.y), o.shapePosition = "topLeft";
        break;
      case "topRight":
        o = o.clone(o.x, o.y), o.shapePosition = "topRight";
        break;
    }
    s.addPoint(o);
  }
  return An(i, e, s), s;
}
function dl(i, t, e) {
  if (e.saw.cutType !== "efficiency") return i;
  const s = t.getMinSpacing(e), n = e.getBladeWidth();
  if (!s || s === n) return i;
  let r;
  if (!i.grid) return i;
  switch (i.grid) {
    case "bottom":
      r = i.clone(i.x, i.y - s + n);
      break;
    case "top":
      r = i.clone(i.x, i.y + s - n);
      break;
    case "left":
      r = i.clone(i.x - s + n, i.y);
      break;
    case "right":
      r = i.clone(i.x + s - n, i.y);
      break;
  }
  return r ? (r.x < 0 && (r.x = 0), r.y < 0 && (r.y = 0), r.adjustedForMinSpacing = !0, r) : i;
}
function An(i, t, e) {
  var a, u, f, p, I, h;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (f = t == null ? void 0 : t.trim) == null ? void 0 : f.x1, n = (p = t == null ? void 0 : t.trim) == null ? void 0 : p.y1, r = t.l - ((I = t == null ? void 0 : t.trim) == null ? void 0 : I.x2) - i.l, o = t.w - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.y2) - i.w);
  const l = e.toArray();
  for (let m = l.length; m--; ) {
    const w = l[m];
    (ce.lessThan(w.x, s) || ce.lessThan(w.y, n) || ce.greaterThan(w.x, r) || ce.greaterThan(w.y, o) || w.x < 0 || w.y < 0) && e.deletePoint(w);
  }
}
function fl(i, t, e) {
  if (!mi.includes(t) || !i.machining.corners) return 0;
  const s = En(i, t);
  return e * s;
}
function En(i, t) {
  if (!mi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Hi(i, t, e, s) {
  Object.keys(t).forEach((n) => {
    var r, o;
    n in i && ((r = t[n]) != null && r.min && S({ v: i[n] }) < S({ v: t[n].min }) ? e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${t[n].min}.`,
      fields: [n]
    }) : (o = t[n]) != null && o.max && S({ v: i[n] }) > S({ v: t[n].max }) && e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${t[n].max}.`,
      fields: [n]
    }));
  });
}
class os {
  constructor({ x: t, y: e, diameter: s, depth: n = 0, face: r = 0, type: o = null }) {
    c(this, "x");
    c(this, "y");
    c(this, "diameter");
    c(this, "depth");
    c(this, "face");
    c(this, "valid");
    c(this, "type");
    this.x = t, this.y = e, this.diameter = s, this.depth = n, this.face = r, this.type = o;
  }
  getFace() {
    return mt[this.face];
  }
  getXDrawPosition(t) {
    let e = 0;
    const s = S({ v: this.x });
    return t.rot ? e = t.l - S({ v: this.y }) + ("x" in t ? S({ v: t.x }) : 0) : e = s + ("x" in t ? S({ v: t.x }) : 0), e;
  }
  getYDrawPosition(t, e, s) {
    let n = t.rot ? S({ v: this.x }) : S({ v: this.y });
    return n += "y" in t ? S({ v: t.y }) : 0, e === 1 && (s ? n = S({ v: s.w }) - n : n = S({ v: t.w }) - n), n;
  }
  shouldShow(t, e) {
    return this.face === e || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || S({ v: this.depth }) >= S({ v: t.t });
  }
  getDistanceToEdge(t) {
    const e = this.x, s = this.y, n = this.diameter / 2, r = S({ v: t.getLongSide() }), o = S({ v: t.getShortSide() }), l = t.machining.corners.map((m) => m.type ? m.size : 0), a = [
      {
        edge: "left",
        distance: e - n
      },
      {
        edge: "right",
        distance: r - e - n
      },
      {
        edge: "bottom",
        distance: o - s - n
      },
      {
        edge: "top",
        distance: s - n
      }
    ], u = t.machining.corners.map((m, w) => {
      const R = w === 0 || w === 3, N = w < 2, J = R ? e : r - e;
      let z = null;
      this.face === 0 ? z = N ? s : o - s : this.face === 1 && (z = N ? o - s : s);
      const Q = Math.sqrt(J * J + z * z);
      return {
        c: m,
        distance: Q
      };
    }), f = Math.min(...a.map((m) => m.distance)), p = Math.min(...u.map((m) => m.distance)), I = u.findIndex((m) => m.distance === p), h = t.machining.corners[I];
    if (h && h.type === "radius") {
      let m = I === 0 || I === 3 ? 0 : r, w = I < 2 ? 0 : o;
      const R = I < 2;
      m += I === 0 || I === 3 ? l[I] : -l[I], w += R ? l[I] : -l[I];
      const J = e - m, z = I < 2;
      let Q;
      this.face === 0 ? Q = z ? s : o - s : this.face === 1 && (Q = z ? o - s : s);
      const ae = Q - w, G = Math.sqrt(J * J + ae * ae), Y = l[I] - G - n;
      let v = !1;
      return h.index === 0 ? v = e <= m && Q <= w : h.index === 1 ? v = e >= m && Q <= w : h.index === 2 ? v = e >= m && Q >= w : h.index === 3 && (v = e <= m && Q >= w), v && Y < f ? Y : f;
    } else if (h && h.type === "bevel") {
      let m, w, R;
      h.index === 0 ? (m = 1, w = 1, R = -h.size) : h.index === 1 ? (m = 1, w = -1, R = -r + h.size) : h.index === 2 ? (m = 1, w = 1, R = -r - o + h.size) : h.index === 3 && (m = -1, w = 1, R = -o + h.size);
      const N = h.index === 0 ? 1 : -1, J = (m * e + w * s + R) / Math.sqrt(m * m + w * w) * N - n;
      return J < f ? J : f;
    } else
      return f;
  }
  validate(t, e, s = null) {
    const n = [];
    if (!k(this.x) || !k(this.y) || !k(this.diameter)) {
      const o = {
        index: e,
        message: "X, Y & diameter are all required.",
        fields: []
      };
      this.x || o.fields.push("x"), this.y || o.fields.push("y"), this.diameter || o.fields.push("diameter"), n.push(o);
    }
    return S({ v: this.diameter }) <= 0 && n.push({
      index: e,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), S({ v: this.depth }) < 0 && n.push({
      index: e,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && S({ v: t.t }) > 0 && S({ v: this.depth }) > S({ v: t.t }) && n.push({
      index: e,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && S({ v: this.depth }) > 0 && n.push({
      index: e,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && n.push({
      index: e,
      message: "Outside of part."
    }), s && Hi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Ns {
  constructor({
    position: t = null,
    //from left or bottom
    edge: e = "x1",
    face: s = 0,
    numHoles: n = null,
    diameter: r = 0,
    depth: o = 0,
    distanceFromEdge: l = 0,
    outerSpacing: a = 0,
    hingeLength: u = 0,
    minimumHoleDistance: f = 0,
    positionLimit: p = 0
  }, I) {
    c(this, "position");
    c(this, "edge");
    c(this, "face");
    c(this, "numHoles");
    c(this, "holes", []);
    c(this, "diameter");
    c(this, "depth");
    c(this, "distanceFromEdge");
    //from edge to center of hole
    c(this, "outerSpacing");
    //from edge to center of hole
    c(this, "hingeLength");
    c(this, "minimumHoleDistance");
    c(this, "positionLimit");
    c(this, "valid");
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = f, this.positionLimit = p, I && this.createHoles(I);
  }
  getFace() {
    return mt[this.face];
  }
  getHoleSpacing() {
    const t = S({ v: this.hingeLength }) - S({ v: this.outerSpacing }) * 2, e = this.numHoles - 1;
    return t / e;
  }
  getHoleXPosition(t, e) {
    let s = 0;
    const n = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        s = this.distanceFromEdge;
        break;
      case "x2":
        s = t.getLongSide() - S({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = S({ v: this.position }) + S({ v: this.outerSpacing }) + n * e;
        break;
    }
    return s;
  }
  getHoleYPosition(t, e) {
    let s = 0;
    const n = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        s = S({ v: this.position }) + S({ v: this.outerSpacing }) + n * e;
        break;
      case "y1":
        s = S({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = t.getShortSide() - S({ v: this.distanceFromEdge });
        break;
    }
    return s;
  }
  createHoles(t) {
    this.holes = [];
    for (let e = 0; e < this.numHoles; e++) {
      const s = new os({
        x: this.getHoleXPosition(t, e),
        y: this.getHoleYPosition(t, e),
        diameter: this.diameter,
        depth: this.depth,
        face: this.face,
        type: "hinge"
      });
      this.holes.push(s);
    }
    return this.holes;
  }
  validate(t, e, s = null) {
    const n = [];
    return this.holes.forEach((r, o) => {
      const l = r.validate(t, o).map((a) => (a.index = e, a.message = `Hole ${o + 1}: ${a.message}`, a));
      n.push(...l);
    }), s && Hi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Us {
  constructor({ type: t = "radius", size: e, index: s }) {
    c(this, "type");
    c(this, "size");
    c(this, "index");
    c(this, "valid");
    this.type = t, this.size = e, this.index = s;
  }
  getLength() {
    return this.type === "radius" ? Math.PI * this.size / 2 : this.type === "bevel" ? Math.sqrt(2) * this.size : 0;
  }
  getCorner() {
    return ["a", "b", "c", "d"][this.index];
  }
  isPresent() {
    return (this.valid === !0 || this.valid === void 0) && this.type !== null && this.size > 0;
  }
  validate(t, e) {
    const s = t.getShortSide(), n = [];
    if (this.type === null) {
      this.size = null;
      const r = this.getCorner();
      t.banding[r] = !1;
    }
    return this.type && S({ v: this.size }) <= 0 && n.push({
      index: e,
      message: "Corner size cannot be zero or negative"
    }), this.type && S({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
let Mn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Us(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Us({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new os(n))), e && (this.hingeHoles = e.map((n) => new Ns(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && new re({
      item: t,
      index: e,
      listId: we(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new re({
      item: t,
      index: e,
      listId: we(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new re({
      item: t,
      index: e,
      listId: we(t) ? [t.listId] : null,
      message: "Issue with machining -> corners",
      field: [["machining"]]
    });
  }
  validate(t, e, s = null) {
    if (!t) return [];
    if (!e) return [];
    const n = [];
    return n.push(...this.validateAll(t, e, s)), n;
  }
  validateAll(t, e, s = null) {
    if (!t) return [];
    const n = [];
    return this[e].forEach((r, o) => n.push(...r.validate(t, o, s))), n;
  }
  createHole(t, e, s, n = 0, r = 0) {
    const o = new os({
      x: t,
      y: e,
      diameter: s,
      depth: n,
      face: r
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({
    numHoles: t,
    position: e,
    diameter: s,
    depth: n = 0,
    edge: r = "x1",
    face: o = 0,
    distanceFromEdge: l = 0,
    outerSpacing: a = 0,
    minimumHoleDistance: u = 0,
    hingeLength: f = 0
  }) {
    const p = new Ns({
      numHoles: t,
      position: e,
      //from left or bottom
      edge: r,
      face: o,
      diameter: s,
      depth: n,
      distanceFromEdge: l,
      outerSpacing: a,
      minimumHoleDistance: u,
      hingeLength: f
    });
    return this.hingeHoles.push(p), p;
  }
  updateHingeHoles(t) {
    this.hingeHoles.forEach((e) => e.createHoles(t));
  }
  getAllHingeHoles(t) {
    const e = [];
    return this.hingeHoles.forEach((s) => {
      s.holes.length ? e.push(...s.holes) : (s.createHoles(t), e.push(...s.holes));
    }), e;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce(
      (t, e) => t + e.numHoles,
      0
    );
  }
  getNumCorners() {
    return this.corners.filter((t) => t.type !== null).length;
  }
};
function bs(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function pl(i) {
  var t, e, s, n;
  if ("machining" in i) {
    if (!bs(i)) {
      i.machining = null;
      return;
    }
    (t = i.machining.holes) != null && t.length || (i.machining.holes = null), (e = i.machining.hingeHoles) != null && e.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class ws {
  constructor(t = null) {
    c(this, "id");
    //api
    c(this, "listId");
    c(this, "shapeListIds", []);
    c(this, "shapes");
    c(this, "direction");
    c(this, "q");
    c(this, "duplicate", !1);
    c(this, "issues", []);
    c(this, "stockMatch");
    var e;
    this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = t == null ? void 0 : t.id, this.shapes = k(t == null ? void 0 : t.shapes) ? t.shapes.map((s) => s.toString()) : [], this.shapeListIds = k(t == null ? void 0 : t.shapeListIds) ? t.shapeListIds : [], this.direction = k(t == null ? void 0 : t.direction) ? t.direction : "l", this.q = k(t == null ? void 0 : t.q) ? t.q : 1, k(t == null ? void 0 : t.shapeList) && ((e = t.shapeList) != null && e.length) && this.validate(t.shapeList);
  }
  validate(t = []) {
    var o, l;
    if (this.issues = [], !(t != null && t.length))
      throw new Error("shapeList is required to validate user group");
    const e = this.findShapes(t);
    if (!e.length)
      return new re({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = e[0];
    if (Je(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new re({
          item: this,
          message: "Must have 2 or more parts."
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new re({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    if (e.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new re({
        item: this,
        field: [["orientationLock"]],
        message: `Part in position ${u + 1} must have orientation lock set to be part of a group.`
      });
    }), this.issues.length) return this.issues;
    const n = ui(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const f = a.getTrimmedDimensions(!0)[n];
      ce.equalTo(f, r) || new re({
        item: this,
        message: `Part in position ${u + 1} final ${n === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${f}. Check the dimensions, trim & orientation lock.`
      });
    }), this.issues;
  }
  findShapes(t = []) {
    var s, n;
    if (!t.length) return [];
    let e = [];
    if (we(t[0])) {
      if (!((s = this.shapeListIds) != null && s.length)) return [];
      if (e = this.shapeListIds.map((r) => t.find((o) => o.listId === r)).filter((r) => r), !e.length)
        throw new Error("could not map group shapes to shape list");
      return e;
    } else {
      if (!((n = this.shapes) != null && n.length)) return [];
      const r = /* @__PURE__ */ new Set();
      e = this.shapes.map((o) => {
        const l = t.find((a) => a.parentID === o && !a.inUserGroup && !r.has(a.id));
        return l ? (r.add(l.id), l) : null;
      }).filter((o) => o);
    }
    if (!e.length)
      throw new Error("could not map group shapes to shape list");
    return e;
  }
  populateParentID(t) {
    var e;
    t != null && t.length && (e = this == null ? void 0 : this.shapeListIds) != null && e.length && (this.shapes = this.shapeListIds.map((s) => (t.findIndex((r) => r.listId === s) + 1).toString()));
  }
  //create a group from a user group
  createGroup(t = 0, e = 0, s = [], n = null) {
    if (!(s != null && s.length))
      throw new Error("some parts are required to create a user group");
    if (!Je(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((f) => {
      const p = s.findIndex((I) => !I.inUserGroup && I.parentID === f.parentID);
      if (p === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(p, 1), Yo(f), f.inUserGroup = !0;
    });
    let l = 0, a = 0;
    this.direction === "l" ? a = o.w : l = o.l;
    let u;
    try {
      const f = {
        id: `ug${t}.${e}`,
        shapes: r,
        l,
        w: a,
        t: o == null ? void 0 : o.t,
        material: o == null ? void 0 : o.material,
        // joinDimension:
        //     referenceShape.l === l ? referenceShape.l : referenceShape.w,
        direction: this.direction,
        preventAutoRotation: !0,
        container: n,
        type: "user"
      };
      u = new ht(f);
    } catch (f) {
      return console.error(f), !1;
    }
    return u.parentID = `ug${t}`, n && u.updateShapeSpacing(n), u;
  }
}
function ch(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new ws(s));
  return t.length && gl(e, t), e;
}
function gl(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function ml(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function vl(i, t, e = !0) {
  const s = ml(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((u) => u.listId === r);
    l < 0 && new re({
      message: "Cannot find at least one part in the list.",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new re({
      message: `Not enough of part ${a != null && a.name ? a.name : l + 1} to form groups - ${o} needed, ${a.q ?? 0} found.`,
      issues: n
    });
  }
  return e && i.forEach((r) => {
    const o = r.validate(t);
    o != null && o.length && n.push(...o);
  }), n;
}
const vt = ["y1", "y2", "x1", "x2"], mi = ["a", "b", "c", "d"], Tt = [...vt, ...mi], mt = ["a", "b"];
function Rn(i) {
  return mi.includes(i);
}
function yl(i) {
  return Tt.includes(i);
}
const Re = {
  x: "x",
  y: "y",
  l: "length",
  w: "width",
  t: "thickness",
  q: "quantity",
  orientationLock: "rotation",
  name: "name",
  material: "material",
  banding: "banding",
  finish: "finish",
  cost: "cost",
  grain: "grain",
  trim: "trim",
  x1: "w1",
  x2: "w2",
  y1: "l1",
  y2: "l2",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  all: "all"
};
function bl(i) {
  return vt.map((t) => i[t] ?? null);
}
function qt(i) {
  if (!k(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function hh({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    s && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new Gt(r, e);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(Bi.ID);
}
function dh({
  shapeList: i,
  stockList: t,
  preventAutoRotation: e = !1
}) {
  if (typeof t > "u")
    throw new Error("recreateShapeList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.filter((s) => s).map((s) => {
    var o;
    e && (s.preventAutoRotation = !0);
    let n;
    if (wl(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new Ot(l));
      try {
        n = new ht(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      n = new Ot(s);
    if (n.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${n.issues.map((l) => l.message).join(", ")}`);
    const r = t.find((l) => {
      var a;
      return l.id === (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId));
    });
    return n.stock = r, n;
  }).sort(Bi.ID);
}
function fh({
  cutList: i,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = new Vi(e), n = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return s.stock = n, s;
  });
}
function ph({
  segmentList: i,
  stockList: t
}) {
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return e.stock = s, new xs(e);
  });
}
function Gi(i, t, e = "decimal", s = !1) {
  return k(i == null ? void 0 : i[t]) ? S({ v: i[t], nf: e, pl: s }) : null;
}
class Ss {
  constructor(t, e = "decimal", s = !1) {
    c(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    c(this, "warningKeys", ["q"]);
    c(this, "issueKeys", ["l", "w", "t", "trim"]);
    c(this, "readonly");
    c(this, "id");
    c(this, "listId");
    c(this, "l");
    c(this, "w");
    c(this, "t");
    c(this, "q");
    c(this, "name");
    c(this, "material");
    c(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    c(this, "cost", null);
    c(this, "grain", "");
    c(this, "selected", !1);
    //used for multiple editing
    c(this, "multiEdit", !1);
    //is this the multi-select stock
    // type: StockType = null;
    c(this, "autoAdd", !1);
    c(this, "used");
    c(this, "saw");
    c(this, "preventGrainRotation");
    c(this, "allowExactFitShapes");
    c(this, "issues", []);
    c(this, "warnings", []);
    c(this, "notes", "");
    var o, l;
    t = qt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + us(), ["l", "w", "t"].forEach((a) => {
      this[a] = Gi(t, a, e, s);
    }), this.q = k(t == null ? void 0 : t.q) ? pi(Ri(t.q)) ? null : Ri(t.q) : null, this.autoAdd = k(t.autoAdd) ? t.autoAdd : !1, this.name = k(t.name) ? ji(t.name).toUpperCase() : "", this.material = k(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((a) => {
      this.trim[a] = Gi(t.trim, a, e, s);
    }), this.cost = k(t.cost) ? t.cost : null, t.grain = (o = t == null ? void 0 : t.grain) == null ? void 0 : o.toLowerCase(), (t == null ? void 0 : t.grain) === " " && (t.grain = ""), this.grain = t.grain, this.grain = k(t.grain) && ["l", "w"].includes(t.grain.toLowerCase()) ? t.grain.toLowerCase() : "", this.multiEdit = t.multiEdit, this.allowExactFitShapes = k(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.preventGrainRotation = !0, typeof ((l = t == null ? void 0 : t.notes) == null ? void 0 : l.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "";
  }
  //change the type of stock
  changeType(t) {
    switch (t !== "sheet" && (this.grain = ""), t) {
      case "linear":
        this.trim.y1 = 0, this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0, this.trim.x2 = 0, this.trim.y1 = 0, this.trim.y2 = 0, this.t = null;
        break;
    }
  }
  getTrimmedDimensions() {
    const t = this.l > this.w ? this.l : this.w, e = this.l < this.w ? this.l : this.w, s = { l: S({ v: t }), w: S({ v: e }) };
    return {
      name: this.name,
      id: null,
      listId: this.listId,
      l: s.l - (S({ v: this.trim.x1 }) + S({ v: this.trim.x2 })),
      w: s.w - (S({ v: this.trim.y1 }) + S({ v: this.trim.y2 }))
    };
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  isSquare() {
    In(this);
  }
  validate(t) {
    return this.issues = [], ["l", "w", "t"].forEach((e) => Ne[e]({ item: this, saw: t })), Ne.trim({ item: this }), ["q"].forEach((e) => Ne[e]({ item: this, isWarning: !0 })), this.issues = this.issues.filter((e) => e), this.issues;
  }
}
class ci {
  constructor(t, e = "decimal", s = !1) {
    c(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    c(this, "readonly");
    c(this, "id");
    c(this, "listId");
    // numberFormat: NumberFormat = 'decimal';
    c(this, "l");
    c(this, "w");
    c(this, "t");
    c(this, "q", 1);
    c(this, "name", "");
    c(this, "material", "");
    c(this, "cost");
    c(this, "orientationLock");
    c(this, "selectedMaterial");
    c(this, "selected", !1);
    //used for multiple editing
    c(this, "multiEdit", !1);
    c(this, "issues", []);
    c(this, "notes", "");
    c(this, "stockLock");
    c(this, "stockMatch");
    c(this, "customData");
    //objects
    c(this, "machining");
    c(this, "trim", Object.fromEntries(
      vt.map((t) => [t, 0])
    ));
    c(this, "banding", Object.fromEntries(
      Tt.map((t) => [t, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...Tt,
      "all"
    ].map((t) => [t, {}])));
    c(this, "finish", Object.fromEntries(
      mt.map((t) => [t, ""])
    ));
    c(this, "finishOptions", Object.fromEntries(
      mt.map((t) => [t, {}])
    ));
    /**
     * to align with Shape
     * @remarks input shapes are always 0
     */
    c(this, "rot", 0);
    var r, o, l, a, u;
    t = t = qt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + us(), ["l", "w", "t"].forEach((f) => {
      this[f] = Gi(t, f, e, s);
    }), this.q = k(t == null ? void 0 : t.q) ? pi(Ri(t.q)) ? null : Ri(t.q) : null, this.name = k(t.name) ? ji(t.name).toUpperCase() : "", this.material = k(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, typeof ((r = t == null ? void 0 : t.notes) == null ? void 0 : r.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [];
    for (const f of Object.keys(this.trim))
      this.trim[f] = Gi(t.trim, f, e, s);
    for (const f of Object.keys(this.banding))
      this.banding[f] = k((o = t == null ? void 0 : t.banding) == null ? void 0 : o[f]) ? t.banding[f] : !1;
    for (const f of Object.keys(this.bandingOptions))
      this.bandingOptions[f] = k((l = t == null ? void 0 : t.bandingOptions) == null ? void 0 : l[f]) ? t.bandingOptions[f] : {};
    for (const f of Object.keys(this.finish))
      this.finish[f] = k((a = t == null ? void 0 : t.finish) == null ? void 0 : a[f]) ? t.finish[f] : "";
    for (const f of Object.keys(this.finishOptions))
      this.finishOptions[f] = k((u = t == null ? void 0 : t.finishOptions) == null ? void 0 : u[f]) ? t.finishOptions[f] : {};
    this.orientationLock = k(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new Mn(t.machining ?? {
      holes: [],
      hingeHoles: [],
      corners: []
    }), this.customData = (t == null ? void 0 : t.customData) ?? {};
  }
  isSquare() {
    return this.l === this.w;
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(t) {
    switch (t) {
      case "sheet":
      case "roll":
        this.orientationLock = "", t === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Tt.map((e) => [e, !1])
        );
        break;
    }
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  getLongSide() {
    return S({ v: this.l }) > S({ v: this.w }) ? S({ v: this.l }) : S({ v: this.w });
  }
  getShortSide() {
    return S({ v: this.l }) < S({ v: this.w }) ? S({ v: this.l }) : S({ v: this.w });
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      name: this.name,
      listId: this.listId,
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      name: this.name,
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  getTrimmedDimensions(t = !1) {
    let e = { l: S({ v: this.l }), w: S({ v: this.w }) };
    return t && (e = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: e.l - (S({ v: this.trim.x1 }) + S({ v: this.trim.x2 })),
      w: e.w - (S({ v: this.trim.y1 }) + S({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, e) {
    if (!this.readonly)
      if (t = S({ v: t }), this.trim) {
        for (const s in this.trim)
          this.trim[s] = t;
        e === "linear" && (this.trim.y1 = 0, this.trim.y2 = 0);
      } else
        this.trim = {
          x1: t,
          x2: t,
          y1: e !== "linear" ? t : 0,
          y2: e !== "linear" ? t : 0
        };
  }
  validate({
    inputStockList: t = [],
    index: e = null,
    partTrim: s = 0,
    useInventory: n = !1,
    saw: r = null
  }) {
    if (this.issues = [], ["l", "w", "t"].forEach((o) => Ne[o]({ item: this, index: e, saw: r })), s = S({ v: s }), Ne.partTrim({ item: this, partTrim: s, index: e }), Ne.trim({ item: this, index: e }), Ne.machining({ item: this, index: e }), ["q"].forEach((o) => {
      Ne[o]({ item: this, index: e, isWarning: !0 });
    }), t.length && !n) {
      const o = new Dt(r);
      Ne.stockMatch({ item: this, inputStockList: t, saw: o, partTrim: s, index: e, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class ei {
  constructor(t) {
    c(this, "id");
    c(this, "parentID");
    c(this, "name");
    c(this, "x");
    c(this, "y");
    c(this, "l");
    c(this, "w");
    c(this, "t");
    c(this, "q");
    c(this, "material");
    c(this, "grain");
    c(this, "orientationLock");
    c(this, "duplicate");
    c(this, "trimmed");
    c(this, "preventAutoRotation");
    c(this, "preventGrainRotation");
    c(this, "numberFormat");
    c(this, "issues", []);
    c(this, "stock");
    c(this, "stockId");
    //used when object is compressed
    c(this, "cost");
    c(this, "offcut");
    c(this, "notes");
    //for user notes
    c(this, "area");
    c(this, "proximity");
    //objects
    c(this, "_trim", Object.fromEntries(
      vt.map((t) => [t, 0])
    ));
    c(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    this.issues = [];
    const e = [];
    ["x", "y", "l", "w", "t"].forEach((s) => e.push(...Ne[s]({ item: t }))), this.issues.push(...Ne.customData({ item: t })), this.issues.push(...e.filter((s) => s));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = k(t.id) ? t.id.toString() : this.id || null, this.setParentID(), k(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = k(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = Jr(ji(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, k(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = k(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = k(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && k(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.trimmed = k(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = k(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
        rectangle: null,
        distance: null
      };
      try {
        this.trim = (t == null ? void 0 : t.trim) || (t == null ? void 0 : t._trim);
      } catch (l) {
        if ((o = l == null ? void 0 : l.cause) != null && o.issues) this.issues.push(...l.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(l)}`);
      }
    }
    [
      {
        key: "x",
        default: 0,
        required: !1
      },
      {
        key: "y",
        default: 0,
        required: !1
      },
      {
        key: "l",
        default: null,
        required: !0
      },
      {
        key: "w",
        default: 1,
        //for linear
        required: !0
      },
      {
        key: "t",
        default: null,
        required: !1
      }
    ].forEach((l) => {
      let a = t[l.key];
      if (!k(a))
        return this[l.key] = this[l.key] || l.default;
      typeof a == "string" && (a = S({ v: a })), this[l.key] = a;
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = ui(this.grain))), k(t == null ? void 0 : t.stock) && (dt(t.stock) ? this.stock = t.stock : this.stock = new Gt(t.stock), this.stockId = this.stock.id), this.area = this.getArea();
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      vt.map((e) => [e, 0])
    ), !!Jt(t, !0))
      for (const e of vt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = S({ v: t[e] });
          } catch {
            s = 0, new re({ item: this, field: [["trim", e]], message: `${t[e] ?? "N/A"} is not a valid value for trim: ${e}` });
          }
        else
          s = t[e];
        this._trim[e] = s;
      }
  }
  get trim() {
    return this._trim;
  }
  get rot() {
    return this.w > this.l ? 1 : 0;
  }
  setParentID() {
    this.parentID = this.getParentID();
  }
  getParentID() {
    return this.id ? this.parentID ? this.parentID : typeof this.id != "number" && this.id.includes(".") ? this.id.split(".")[0] : typeof this.id != "number" && !this.id.includes(".") ? null : this != null && this.id ? this.id.toString() : null : null;
  }
  getCopyNumber() {
    return typeof this.id != "number" && this.id.includes(".") ? parseInt(this.id.split(".")[1]) : 0;
  }
  get dimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
    };
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  get coords() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
  }
  hasCoords(t, e) {
    return this.x === t && this.y === e;
  }
  getAspect() {
    return this.l > this.w ? this.w / this.l : this.l / this.w;
  }
  getPerimeter() {
    return this.w * 2 + this.l * 2;
  }
  getLongSide() {
    return this.l > this.w ? this.l : this.w;
  }
  getShortSide() {
    return this.l < this.w ? this.l : this.w;
  }
  getSides() {
    return [
      this.getSide("bottom"),
      this.getSide("right"),
      this.getSide("top"),
      this.getSide("left")
    ];
  }
  getSide(t) {
    switch (t) {
      case "bottom":
        return new Yt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Yt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Yt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Yt({
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left"
          // parentID: this.id
        });
    }
  }
  getTopPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y + this.w + ((this.stock.getBladeWidth() || e) ?? 0) : this.y + this.w;
  }
  getRightPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x + this.l + ((this.stock.getBladeWidth() || e) ?? 0) : this.x + this.l;
  }
  getBottomPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y - ((this.stock.getBladeWidth() || e) ?? 0) : this.y;
  }
  getLeftPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x - ((this.stock.getBladeWidth() || e) ?? 0) : this.x;
  }
  sharesSide(t, e = 0, s = null) {
    switch (s) {
      case "left":
        return t.x + t.l + e === this.x;
      case "right":
        return t.x === this.x + this.l + e;
      case "bottom":
        return t.y + t.w + e === this.y;
      case "top":
        return t.y === this.y + this.w + e;
    }
    return !1;
  }
  sameSide(t, e = null) {
    switch (e) {
      case "left":
        return t.x === this.x;
      case "right":
        return t.x + t.l === this.x + this.l;
      case "bottom":
        return t.y === this.y;
      case "top":
        return t.y + t.w === this.y + this.w;
    }
    return !1;
  }
  //considers if the shape can rotate
  getLongestDimension(t) {
    return this.orientationLock ? this[t] : this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(t, e = !1) {
    const s = new Ee(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Ee(this.x, this.y + this.w);
    if (n.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !e)
      return [n, s];
    const r = new Ee(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new Ee(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, n, o, s];
  }
  getCorners() {
    return {
      bottomLeft: new Ee(this.x, this.y),
      topLeft: new Ee(this.x, this.y + this.w),
      topRight: new Ee(this.x + this.l, this.y + this.w),
      bottomRight: new Ee(this.x + this.l, this.y)
    };
  }
  round() {
    return {
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getClass() {
    return this.constructor.name;
  }
  getTrimmedDimensions(t = !1) {
    let e = { l: this.l, w: this.w };
    return t && (e = this.getRotatedDimensions()), this.trimmed ? e : {
      l: e.l - (this.trim.x1 + this.trim.x2),
      w: e.w - (this.trim.y1 + this.trim.y2)
    };
  }
  get hasTrim() {
    return this.trim.x1 || this.trim.x2 || this.trim.y1 || this.trim.y2;
  }
  //trim the rectangle
  trimDimensions() {
    var t, e, s, n;
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !pi(parseFloat(String(r)))).length && (k(this.l) && (this.l -= (k((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (k((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new re({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), k(this.w) && (this.w -= (k((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (k((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new re({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
  }
  /**
   * change the size of the rectangle back to the original size
   */
  removeTrim() {
    var t, e, s, n;
    if (this.trimmed) {
      if (this.l += (typeof ((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) == "number" ? this.trim.x1 : 0) + (typeof ((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) == "number" ? this.trim.y1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
      this.trimmed = !1;
    }
  }
  getUntrimmedDimensions() {
    var s, n, r, o;
    if (!this.trimmed) return { l: this.l, w: this.w };
    const t = this.getLongSide(), e = this.getShortSide();
    return {
      l: t + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0),
      w: e + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y1) == "number" ? this.trim.y1 : 0) + (typeof ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y2) == "number" ? this.trim.y2 : 0)
    };
  }
  isIdentical(t, e = !1) {
    if (this.constructor !== t.constructor || this.t !== t.t || this.orientationLock !== t.orientationLock)
      return !1;
    if (At(this)) {
      if (t.id === this.id) return !0;
    } else {
      if (t.parentID === this.parentID) return !0;
      if (Je(this) && e && this.parentID !== t.parentID) return !1;
    }
    const { w: s, l: n } = this, { w: r, l: o } = t;
    if (!(s === r && n === o) && !(s === o && n === r)) return !1;
    const l = this.trim, a = t.trim;
    return !l || !a ? l === a : l.x1 === a.x1 && l.x2 === a.x2 && l.y1 === a.y1 && l.y2 === a.y2;
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    return this.l === this.w;
  }
  getDistancesToContainerEdges(t) {
    return [
      this.x - t.x,
      t.l - (this.x + this.l),
      t.w - (this.y + this.w),
      this.y - t.y
    ];
  }
  isInsideStock(t) {
    return !(this.x + this.l > t.l || this.y + this.w > t.w || this.x < 0 || this.y < 0);
  }
  /**
  * Creates or retrieves a cached rectangle used for proximity detection.
  * Optimized for frequent calls with the same distance parameter.
  */
  getProximityRectangle(t) {
    if (!t || t < 0) return null;
    const e = this.proximity;
    if ((e == null ? void 0 : e.distance) === t) {
      const n = e.rectangle;
      return this.x === 0 ? (n.x = 0, n.l = this.l + t) : (n.x = this.x - t, n.l = this.l + t * 2), this.y === 0 ? (n.y = 0, n.w = this.w + t) : (n.y = this.y - t, n.w = this.w + t * 2), n;
    }
    const s = new ei({
      id: `${this.id}-proximity`,
      name: "proximity",
      x: this.x === 0 ? 0 : this.x - t,
      y: this.y === 0 ? 0 : this.y - t,
      l: this.x === 0 ? this.l + t : this.l + t * 2,
      w: this.y === 0 ? this.w + t : this.w + t * 2,
      preventAutoRotation: !0
    });
    return this.proximity = { rectangle: s, distance: t }, s;
  }
  isShape() {
    return Je(this);
  }
  isSegment() {
    return xl(this);
  }
  isStock() {
    return dt(this);
  }
  isGroup() {
    return At(this);
  }
  isUserGroup() {
    return _n(this);
  }
}
class Yi extends ei {
  //used by evo
  constructor(e, s) {
    var n, r;
    super(e);
    // type: StockType;
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) || new re({ item: this, field: [["type"]], message: `Container type ${((r = e == null ? void 0 : e.saw) == null ? void 0 : r.stockType) ?? "N/A"} is not valid`, shouldTranslate: !1 }), this.setSaw(e, s), this.cutType) {
      case "beam":
        (!k(this.t) || this.t <= 0) && new re({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e, s) {
    var n, r, o, l;
    if (!(!e && !s)) {
      if (!s)
        if (k(e == null ? void 0 : e.saw)) {
          if (!((r = e == null ? void 0 : e.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: u } = is(e.saw.cutPreference);
            e.saw.cutType = a, e.saw.cutPreference = u;
          }
        } else {
          e.saw = {};
          const { cutType: a, cutPreference: u } = is(e.cutPreference);
          e.saw.cutType = a, e.saw.cutPreference = u, k(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), k((n = e == null ? void 0 : e.blade) == null ? void 0 : n.width) && (e.saw.bladeWidth = e.blade.width), k(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), k(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), k(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
        }
      try {
        const a = s ?? (e == null ? void 0 : e.saw);
        a && (vs(a) ? this.saw = a : this.saw = new Dt(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
      } catch (a) {
        throw new Error("error creating saw", { cause: a });
      }
    }
  }
  get cutType() {
    var e, s, n, r;
    return k((e = this == null ? void 0 : this.saw) == null ? void 0 : e.cutType) ? this.saw.cutType : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var e, s, n, r;
    return k((e = this.saw) == null ? void 0 : e.cutPreference) ? this.saw.cutPreference : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var e, s, n, r;
    return k((e = this.saw) == null ? void 0 : e.guillotineOptions) ? this.saw.guillotineOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var e, s, n, r;
    return k((e = this.saw) == null ? void 0 : e.efficiencyOptions) ? this.saw.efficiencyOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
  }
  get primaryCompression() {
    var e, s;
    if (this.cutType === "efficiency")
      return (s = (e = this.saw) == null ? void 0 : e.efficiencyOptions) != null && s.primaryCompression ? this.efficiencyOptions.primaryCompression : "y";
  }
  getHalfBladeWidth() {
    const e = this.getBladeWidth();
    return e ? e / 2 : 0;
  }
  getBladeWidth() {
    var s, n, r;
    const e = (((s = this == null ? void 0 : this.saw) == null ? void 0 : s.bladeWidth) || ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.bladeWidth)) ?? 0;
    return pi(e) ? 0 : e;
  }
  getStock() {
    return dt(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Gt extends Yi {
  constructor(e, s) {
    var n;
    e = qt(e), e.preventAutoRotation = ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
    super(e, s);
    c(this, "_id");
    //used for mongo
    c(this, "autoAdd");
    c(this, "allowExactFitShapes");
    c(this, "analysis");
    c(this, "tidy");
    c(this, "used");
    c(this, "stack");
    c(this, "winningStrategy");
    //used for reporting
    c(this, "unusable");
    //used by stock matching
    c(this, "duplicatePattern");
    c(this, "score");
    c(this, "rootSegment");
    delete this.stock, this._id = e == null ? void 0 : e._id, this.autoAdd = k(e == null ? void 0 : e.autoAdd) ? e.autoAdd : !1, this.allowExactFitShapes = k(e == null ? void 0 : e.allowExactFitShapes) ? e.allowExactFitShapes : !1, this.analysis = k(e.analysis) ? e.analysis : null, this.tidy = k(e == null ? void 0 : e.tidy) ? e.tidy : !1, this.algoBenchmark = null, this.used = k(e == null ? void 0 : e.used) ? e.used : !1, this.stack = k(e == null ? void 0 : e.stack) ? e.stack : !1, this.duplicatePattern = (e == null ? void 0 : e.duplicatePattern) ?? null, this.initStock(e);
  }
  initStock(e) {
    switch (this.saw.stockType) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
    this.validateStock(e);
  }
  reset() {
    this.used = !1, this.stack = null, this.score = null, this.rootSegment = null, this.tidy = null, this.analysis = null, this.duplicatePattern = null, this.shapes = [];
  }
  validateStock(e) {
    const s = [];
    e.autoAdd || ["q"].forEach((n) => s.push(...Ne[n]({ item: e }))), ["grain"].forEach((n) => s.push(...Ne[n]({ item: e }))), this.issues.push(...s.filter((n) => n));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = dt(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(e) {
    let s = !1, n = !1, r = !1, o = !1;
    if (this.material === e.material && (s = !0), this.t === e.t && (n = !0), this.l === e.l && (r = !0), this.w === e.w && (o = !0), s && n && r && o) return !0;
  }
  hasStack() {
    return typeof this.stack == "number";
  }
  isStacked() {
    return dt(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Gt(r);
  }
}
class Fn extends ei {
  constructor(e) {
    super(e);
    c(this, "addToInventory");
    //for front end selection
    c(this, "added");
    //for adding to inputStock
    c(this, "placementOrder");
    c(this, "flex");
    this.cost = this.getCost(), this.addToInventory = (e == null ? void 0 : e.addToInventory) ?? !0, this.added = !1, this.placementOrder = (e == null ? void 0 : e.placementOrder) ?? null, this.offcut = !0;
  }
  compressForSaving() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) || ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.stock, delete this._trim, delete this.trimmed;
  }
  getCost() {
    var e;
    return (e = this.stock) != null && e.isStock() && this.stock ? parseFloat((this.area / this.stock.area * this.stock.cost).toFixed(2)) : 0;
  }
}
function gh({
  offcuts: i,
  stockList: t,
  preventAutoRotation: e = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = t.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, e && (s.preventAutoRotation = !0), new Fn(s);
  });
}
class Ot extends ei {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(e) {
    e = qt(e);
    super(e);
    c(this, "added");
    c(this, "guillotineData");
    c(this, "stockLock");
    c(this, "score");
    c(this, "bestScore");
    c(this, "placementOrder");
    //groups
    c(this, "groupPlacementOrder");
    c(this, "group");
    c(this, "groupID");
    c(this, "inGroup");
    //is the shape currently part of at least one group
    c(this, "inUserGroup");
    //is the shape currently part of a user group`
    c(this, "addedAsGroup");
    c(this, "isFirstShape");
    c(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    c(this, "index");
    //used for ptx
    c(this, "patternMatch");
    //used for stack detection
    c(this, "stockMatch");
    c(this, "minSpacing");
    c(this, "priority");
    c(this, "weighting", {});
    //objects
    c(this, "machining");
    c(this, "_banding", Object.fromEntries(
      Tt.map((e) => [e, !1])
    ));
    c(this, "_finish", Object.fromEntries(
      mt.map((e) => [e, ""])
    ));
    this.initShape(e);
  }
  get trim() {
    return super.trim;
  }
  set trim(e) {
    super.trim = e;
  }
  initShape(e, s = !1) {
    var n;
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = k(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, k(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = k(e == null ? void 0 : e.machining) ? new Mn(e.machining) : null), this.added = k(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = k(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = k(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = k(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = k(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = k(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = k(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = k(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = k(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
  }
  initGuillotineData(e) {
    var s, n, r, o, l, a, u, f;
    this.guillotineData = Oi({}, e == null ? void 0 : e.guillotineData, {
      firstShape: ((s = this == null ? void 0 : this.guillotineData) == null ? void 0 : s.firstShape) || null,
      myPhase: ((n = this == null ? void 0 : this.guillotineData) == null ? void 0 : n.myPhase) || null,
      myStripParent: ((r = this == null ? void 0 : this.guillotineData) == null ? void 0 : r.myStripParent) || null,
      myStripDirection: ((o = this == null ? void 0 : this.guillotineData) == null ? void 0 : o.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((a = (l = this == null ? void 0 : this.guillotineData) == null ? void 0 : l.stripShapeBatches) == null ? void 0 : a.subsetUsed) || !1,
        groups: ((f = (u = this == null ? void 0 : this.guillotineData) == null ? void 0 : u.stripShapeBatches) == null ? void 0 : f.groups) || {}
      }
    });
  }
  cloneGuillotineData() {
    var e;
    return (e = this.guillotineData) != null && e.myStripParent && (Je(this.guillotineData.myStripParent) || At(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o;
    if (!e) return 0;
    const n = e.getBladeWidth();
    if (e.cutType !== "efficiency")
      return s ? 0 : n;
    let r = (this == null ? void 0 : this.minSpacing) || ((o = e.saw) == null ? void 0 : o.getMinSpacing()) || 0;
    return n > r && (r = n), s && (r -= n), r < 0 && (r = 0), r;
  }
  validateShape(e) {
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...Ne[n]({ item: e }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
  }
  //individual shape weighting
  /* calculateWeighting()
  	{
  		// const aspect = this.w / this.l;
  		if ( aspect > 0.5 )
  		{
  			//cater for small parts
  			const area = s.getArea();
  			const areaPercentage = area / maxArea;
  
  			if ( areaPercentage <= 0.1 )
  			{
  				s.weighting.edge = areaPercentage;
  			}
  		}
  		//the closer to zero, the higher the edge weighting
  		this.weighting.edge = 1 - aspect;
  		this.weighting.edge *= 2;
  	} */
  update(e) {
    e = qt(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Tt.map((s) => [s, !1])
    ), !!Jt(e, !0))
      for (const s of Tt)
        this._banding[s] = k(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return bl(this._banding);
  }
  get finish() {
    return this._finish;
  }
  set finish(e) {
    if (this._finish = Object.fromEntries(
      mt.map((s) => [s, ""])
    ), !!Jt(e, !0))
      for (const s of mt)
        this._finish[s] = k(e == null ? void 0 : e[s]) ? e[s] : "";
  }
  get facesArray() {
    return mt.map((e) => {
      var s;
      return (s = this.finish) == null ? void 0 : s[e];
    });
  }
  //compress for saving / transfer
  save() {
    var e, s, n;
    delete this.group, (e = this == null ? void 0 : this.guillotineData) == null || delete e.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, Tt.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), mt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), pl(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = ui(e.grain)), Pn([
      () => Ai(this.isInsideStock(e), `shape ${this.id} is not inside stock ${e.id}`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, At(this) && this.shapes.forEach((e) => e.removeFromStock());
  }
  setBestScore(e, s = null) {
    const n = {
      x: e.x,
      y: e.y,
      rot: e.rot,
      total: e.score.total,
      score: e.score,
      group: e.group,
      weighting: null,
      point: s
    };
    this.bestScore = n;
  }
  resetBestScore() {
    const e = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = e, this.resetGuillotineData(!0);
  }
  resetScore() {
    this.score = null, this.resetGuillotineData(!0);
  }
  resetBothScores() {
    this.resetBestScore(), this.resetScore();
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.resetGuillotineData(!0);
  }
  resetGroupData() {
    this.inGroup = !1, this.group = null, this.groupID = null, this.groupPlacementOrder = null, this.grain = null;
  }
  resetGuillotineData(e = !1) {
    var n, r;
    const s = {
      firstShape: !1,
      myPhase: null,
      myStripDirection: null,
      stripShapeBatches: {
        subsetUsed: !1,
        groups: {}
      }
    };
    e && (s.stripShapeBatches.groups = (r = (n = this.guillotineData) == null ? void 0 : n.stripShapeBatches) == null ? void 0 : r.groups), this.guillotineData = s;
  }
  reset(e = !1, s = !0, n = !1) {
    this.removeFromStock(), this.resetPosition(), Zt(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
  }
  round() {
    return {
      x: Math.round(this.x),
      y: Math.round(this.y),
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getBandingLength(e) {
    return !yl(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : Rn(e) ? En(this, e) : 0;
  }
  getPriority(e) {
    var n;
    if (!e) return 0;
    const s = e.parentID;
    return (n = this.priority) != null && n[s] ? this.priority[s] : 0;
  }
  clearPriority() {
    this.priority = {};
  }
  getPerimeterCutVectors() {
    var n;
    const e = (n = this.stock) != null && n.isStock() ? this.stock.getBladeWidth() / 2 : null;
    return [
      //bottom
      {
        x1: this.x - e,
        x2: this.x + this.l + e,
        y1: this.y - e,
        y2: this.y - e,
        type: "bottom"
      },
      //right
      {
        x1: this.x + this.l + e,
        x2: this.x + this.l + e,
        y1: this.y - e,
        y2: this.y + this.w + e,
        type: "right"
      },
      //top
      {
        x1: this.x - e,
        x2: this.x + this.l + e,
        y1: this.y + this.w + e,
        y2: this.y + this.w + e,
        type: "top"
      },
      //left
      {
        x1: this.x - e,
        x2: this.x - e,
        y1: this.y - e,
        y2: this.y + this.w + e,
        type: "left"
      }
    ];
  }
  /* getTrimmedDimensions()
  	{
  		if ( this.trimmed )
  			return {
  				l: this.l,
  				w: this.w
  			};
  
  		return {
  			l: this.l - this.trim.x1 - this.trim.x2,
  			w: this.w - this.trim.y1 - this.trim.y2
  		};
  	} */
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(e = null) {
    let s = [];
    if (e = e || this.stock, !e) throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((r) => {
      var o;
      return s.push(new Vi({
        stock: (o = this.stock) != null && o.isStock() ? this.stock : e,
        x1: r.x1,
        x2: r.x2,
        y1: r.y1,
        y2: r.y2,
        type: r.type
      }));
    }), s = s.filter((r) => r.isInsideStock()), s;
  }
  createOffset(e) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
    const s = {
      x: this.x - e,
      y: this.y - e,
      l: this.l + e * 2,
      w: this.w + e * 2
    };
    return s.x < 0 && (s.x = 0, s.l -= e), s.y < 0 && (s.y = 0, s.w -= e), s.x + s.l > this.stock.l && (s.l = this.stock.l - s.x), s.y + s.w > this.stock.w && (s.w = this.stock.w - s.y), s;
  }
  setPositionToBestScore() {
    Zt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    return zi(this, e, s);
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = s.pop(), e++), s.push(e);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new Ot(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const e = this.cloneGuillotineData();
    return e.myStripParent = Sl(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
      id: this.id,
      x: this.added ? this.x : 0,
      y: this.added ? this.y : 0,
      l: this.l,
      w: this.w,
      added: this.added,
      guillotineData: e,
      placementOrder: this.placementOrder,
      bestScore: this.bestScore,
      inGroup: this.inGroup,
      groupID: this.groupID,
      addedAsGroup: this.addedAsGroup,
      groupPlacementOrder: this.groupPlacementOrder,
      minSpacing: this.minSpacing,
      cloneType: "shape",
      priority: Object.assign({}, this.priority)
    };
  }
  isTooCloseToEdges(e) {
    var n, r;
    const s = ((r = (n = e.saw) == null ? void 0 : n.options) == null ? void 0 : r.minSpacing) || this.minSpacing;
    return s ? this.getDistancesToContainerEdges(e).some((o) => o > 0 && o <= s) : !1;
  }
  validateStripShapeBatches() {
    const e = Object.values(this.guillotineData.stripShapeBatches.groups);
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      if (n.id !== this.id)
        throw new Error(`strip shape group id does not match shape id ${this.id} ${n.id} ${s}`);
      if (![this.l, this.w].includes(n.dimension))
        throw new Error(`strip shape group dimension does not match shape dimensions ${this.id} ${n.id} ${s} ${this.l} ${this.w} ${n.dimension}`);
    }
  }
  getStripShapeBatchData(e) {
    var s;
    return typeof e != "number" || !((s = this == null ? void 0 : this.guillotineData) != null && s.stripShapeBatches) || !this.guillotineData.stripShapeBatches.groups || !(e in this.guillotineData.stripShapeBatches.groups) ? !1 : this.guillotineData.stripShapeBatches.groups[e];
  }
  isInStripShapeBatch(e) {
    return !!this.getStripShapeBatchData(e);
  }
  isStacked() {
    return this.added && this.stock && this.stock.isStacked();
  }
}
class xs extends Yi {
  constructor(e) {
    var t = (...Ih) => (super(...Ih), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), c(this, "hasHeadCut"), c(this, "isInitial"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.parentID = k(e == null ? void 0 : e.parentID) ? e.parentID : null, this.shapes = k(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = k(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = k(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = k(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = k(e == null ? void 0 : e.parent) ? e.parent : null, this.children = k(e == null ? void 0 : e.children) ? e.children : [], this.siblings = k(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = k(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = k(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = k(e == null ? void 0 : e.cutDirection) ? e.cutDirection : null, this.hasBeamTrim = k(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1, this.hasHeadCut = k(e == null ? void 0 : e.hasHeadCut) ? e.hasHeadCut : !1, this.isInitial = k(e == null ? void 0 : e.isInitial) ? e.isInitial : !1);
  }
  validateSegment(e) {
    var s, n;
    (ce.lessThanOrEqualTo(e.w, 0) || ce.lessThanOrEqualTo(e.l, 0)) && new re({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (ce.lessThan(e.x, 0) || ce.lessThan(e.y, 0)) && new re({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (ce.greaterThan(e.x + e.l, e.stock.l) || ce.greaterThan(e.y + e.w, e.stock.w)) && new re({
      item: this,
      field: [["x"], ["y"], ["l"], ["w"]],
      message: `Outside of stock ${e.stock.id} - x: ${e.x}, y: ${e.y}, l: ${e.l}, w: ${e.w}, sl: ${(s = e == null ? void 0 : e.stock) == null ? void 0 : s.l}, sw: ${(n = e == null ? void 0 : e.stock) == null ? void 0 : n.w}.`
    });
  }
  //compress for saving / transfer
  save() {
    var e, s;
    this.children = this.children.map((n) => {
      var r;
      return n ? {
        id: n.id,
        parentID: (r = n.parent) == null ? void 0 : r.id,
        x: n.x,
        y: n.y,
        l: n.l,
        w: n.w,
        offcut: n.offcut,
        segmentType: n.segmentType,
        hasHeadCut: n.hasHeadCut,
        cutDirection: n.cutDirection,
        phase: n.phase
      } : null;
    }), this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), this.parentID = (s = this == null ? void 0 : this.parent) == null ? void 0 : s.id, delete this.stock, delete this.shapes, delete this.saw, delete this.siblings, delete this.parent, delete this.trim, this.algoBenchmark = null;
  }
  getBladeWidth() {
    return this.stock.getBladeWidth();
  }
  /**
   * create a normalised shape list to allow searching for duplicates
   */
  getNormalisedShapes(e) {
    return e.map((s) => ({
      x: s.x - this.x,
      y: s.y - this.y,
      l: s.l,
      w: s.w
    }));
  }
  reset() {
    this.stock.used = !1, this.children = [], this.siblings = [], this.parent = null, this.cuts = [], this.phase = null;
  }
}
class ht extends Ot {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = qt(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
      throw new Error("attempting to create a group with no shapes");
    e.preventAutoRotation = !0;
    super(e);
    c(this, "shapes");
    c(this, "direction");
    c(this, "container");
    //can be set after initial creation
    c(this, "positions");
    c(this, "outOfBounds");
    c(this, "collision");
    c(this, "counter", 0);
    c(this, "type");
    c(this, "efficiency");
    this.q = 1, delete this._banding, delete this._finish, delete this._trim, this.shapes = e.shapes, this.positions = (n = e == null ? void 0 : e.positions) != null && n.length ? e.positions : [], this.direction = e.direction, this.container = e.container, this.type = (e == null ? void 0 : e.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var e;
    (e = this == null ? void 0 : this.shapes) != null && e.length && (this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]));
  }
  setShapePositions() {
    if (!this.container) return;
    this.positions = [], this.type !== "user" && this.sortShapes();
    let e = 0;
    const s = Xo(this.direction);
    let n = 0;
    for (const l of this.shapes) {
      const a = {
        shape: l.id,
        x: 0,
        y: 0,
        rot: l.rot.valueOf()
      };
      s === "x" ? a.x = e : a.y = e, this.positions.push(a), l.inGroup = !0, e += n === this.shapes.length - 1 ? l[this.direction] : l[this.direction] + l.getMinSpacing(this.container), n++;
    }
    this[this.direction] = e;
    const r = ui(this.direction), o = this.shapes.reduce(
      (l, a) => a[r] > l ? a[r] : l,
      0
    );
    if (this[r] = o, Ln()) {
      const l = this.shapes.slice(0, -1).reduce((f, p) => f + p.getMinSpacing(this.container), 0), u = this.shapes.reduce((f, p) => f + p[this.direction], 0) + l;
      Pn([
        () => Ai(
          ce.equalTo(u, this[this.direction]),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Ai(
          e,
          "currentPosition is incorrect in direction"
        ).to.equal(this[this.direction]),
        () => Ai(
          o,
          "group dimension in other direction is not correct"
        ).to.equal(this[r])
      ]);
    }
    if (this.w > this.container.w || this.l > this.container.l)
      throw new Error(
        `group ${this.id} is bigger than container - group ${this.l}x${this.w}, container ${this.container.l}x${this.container.w}`
      );
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(e) {
    this.container = e, this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]), this.area = this.getArea();
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  /* getArea()
  {
  	return this.shapes.reduce( ( total, shape ) => total + shape.getArea(), 0 )
  } */
  destroy() {
    super.reset();
    for (const e of this.shapes) e.reset(!1, !1, !1);
  }
  reset() {
    super.reset();
    for (const e of this.shapes) e.reset(!1, !1, !0);
  }
  /**
   * orientate all the shapes correctly to fit in the group
   */
  orientateShapes(e) {
    this.shapes.forEach((s) => {
      const n = this.positions.find((o) => o.shape === s.id);
      if (!n) throw new Error("position not found for shape in group");
      if (!rs(s, n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = ui(this.direction);
    this.shapes.sort((s, n) => n[e] === s[e] ? n[this.direction] === s[this.direction] ? s.id.localeCompare(n.id, void 0, { numeric: !0 }) : n[this.direction] - s[this.direction] : n[e] - s[e]);
  }
  /**
   * place the group shapes on the stock
   */
  placeMyShapes(e) {
    if (!e) throw new Error("placeShapes requires stock");
    this.addToStock(e);
    for (let s = 0; s < this.shapes.length; s++) {
      const n = this.shapes[s], r = this.positions.find((a) => a.shape === n.id);
      if (!r) throw new Error("position not found for shape in group");
      if (n.x = this.x + r.x, n.y = this.y + r.y, !rs(n, r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6), n.addToStock(e);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), Vo(this, e);
  }
  clone(e = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new ht(a);
  }
  compress() {
    const e = super.compress.call(this);
    return e.direction = this.direction, e.positions = structuredClone(this.positions), e.shapes = this.shapes.map((s) => s.compress()), e.type = this.type, e.cloneType = "group", e;
  }
}
function mh(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function wl(i) {
  return i.shapes !== void 0;
}
function At(i) {
  return i instanceof ht && i.type !== "user";
}
function _n(i) {
  return i instanceof ht && i.type === "user";
}
function _t(i) {
  return i instanceof ws;
}
function it(i) {
  return i instanceof Ss;
}
function we(i) {
  return i instanceof ci;
}
function dt(i) {
  return i instanceof Gt;
}
function ks(i) {
  return i instanceof Yi;
}
function Je(i) {
  return i instanceof Ot && !(i instanceof ht);
}
function Sl(i) {
  return i instanceof Ot || i instanceof ht;
}
function xl(i) {
  return i instanceof xs;
}
function qn(i) {
  return Je(i) || dt(i) || we(i) || it(i);
}
function Bn(i) {
  return we(i) || it(i) ? !1 : Je(i) || dt(i) ? i.trimmed : !1;
}
function kl(i) {
  return i instanceof ht ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof ws ? "inputUserGroup" : i instanceof Ss ? "inputStock" : i instanceof ci ? "inputShape" : i instanceof Gt ? "stock" : i instanceof Yi ? "container" : i instanceof Ot && !(i instanceof ht) ? "shape" : i instanceof xs ? "segment" : i instanceof Fn ? "offcut" : i instanceof Dt ? "saw" : i instanceof ei ? "rectangle" : null;
}
function js(i, t) {
  return yr(i, t);
}
function Mt(i, t) {
  return Kt(i, t);
}
function Cl(i, t, e) {
  br(i, t, e);
}
function k(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function Jt(i, t = !1) {
  if (!k(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => k(s) && s) : e.some((s) => k(s));
}
function vh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return it(e) && e.autoAdd ? s = 1 : s = k(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function yh(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = Il(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function Il(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Ll() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function ls(i = 0, t, e = null, s = null, n = null) {
  if (!we(e) && !_t || s === "stock") return !1;
  let r, o;
  if (we(e) ? r = e.orientationLock : _t(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || _t(e))
    switch (t) {
      case "n":
        o = r === "w" || n === "w";
        break;
      case "l":
      case "y":
        o = r === "w" || n === "w";
        break;
      case "w":
        o = r === "l" || n === "l";
        break;
      default:
        o = n === "w";
    }
  else if (i === 1)
    if (e) o = e.w > e.l;
    else return !1;
  else if (i === 2) {
    if (!e) return !1;
    switch (t) {
      case "n":
        o = e.w > e.l;
        break;
      case "y":
      case "l":
        o = e.w > e.l;
        break;
      case "w":
        o = e.l >= e.w;
        break;
      default:
        o = !1;
    }
  }
  return o;
}
function zs(i, t, e = null, s = null, n = null) {
  if (!we(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? ls(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Pl(i) {
  i.banding && (i.banding = Wi(i.banding, "cc")), i.trim && (i.trim = Wi(i.trim, "cc"));
}
function bh(i, t = 0) {
  return Je(i) || we(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Pl(i)), i;
}
function Wi(i, t = "cc", e = {
  x1: "y1",
  x2: "y2",
  y1: "x1",
  y2: "x2"
}, s = {
  a: "d",
  b: "a",
  c: "b",
  d: "c"
}) {
  const n = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  };
  if (t === "c") {
    for (const [r, o] of Object.entries(e))
      n[o] = i[r];
    for (const [r, o] of Object.entries(s))
      o in i && (n[o] = i[r]);
  } else if (t === "cc") {
    for (const [r, o] of Object.entries(e))
      n[r] = i[o];
    for (const [r, o] of Object.entries(s))
      o in i && (n[r] = i[o]);
  }
  return n;
}
const { addNotice: ut } = ps(), {
  inputs: Ie,
  totalInputShapes: $l,
  totalInputStock: Tl,
  createStockList: Dl,
  createShapeList: Ol,
  validateInputShapes: Al,
  validateInputStock: Hn,
  removeShape: Vs,
  removeStock: Ys
} = gn(), El = {
  t: (i) => i,
  isAdmin: !1,
  partTrim: 0,
  shared: !1,
  maxShapes: 1 / 0,
  maxStock: 1 / 0,
  useInventory: !1,
  selectedSaw: void 0,
  materialStore: void 0,
  inputShapes: null,
  onLimit: null
}, Ml = () => {
  var i, t;
  if ((i = Ie == null ? void 0 : Ie.inputStock) != null && i.value) {
    for (let e = Ie.inputStock.value.length - 1; e >= 0; e--) {
      const s = Ie.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ie.inputStock.value.length > 1 || e !== 0) && Ys(s.listId);
    }
    if ((t = Ie == null ? void 0 : Ie.inputShapes) != null && t.value)
      for (let e = Ie.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Ie.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ie.inputShapes.value.length > 1 || e !== 0) && Vs(s.listId);
      }
  }
}, Rl = (i, t = !1) => {
  var s, n;
  if (!t) return [];
  const e = [];
  if (!((s = Ie == null ? void 0 : Ie.inputShapes) != null && s.value)) return e;
  for (let r = Ie.inputShapes.value.length - 1; r >= 0; r--) {
    const o = Ie.inputShapes.value[r];
    if (!o) continue;
    if (!k(o.material)) {
      e.push(new re({
        item: o,
        message: "no_material",
        listId: [o.listId]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || e.push(new re({
      item: o,
      message: "invalid_thickness",
      listId: [o.listId]
    })) : e.push(new re({
      item: o,
      message: "no_thickness",
      listId: [o.listId]
    })));
  }
  return e;
}, Gn = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...El,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, Fl = (i = {}) => {
  const t = Gn(i), e = t.t;
  Ml();
  const s = [];
  t.useInventory || s.push(...Hn(i == null ? void 0 : i.sawData)), s.push(...Al({
    saw: t.sawData,
    partTrim: S({ v: t.partTrim }),
    useInventory: t.useInventory,
    inputShapesOverride: t.inputShapes
  }));
  const n = Pt(s);
  return n.length > 0 ? (console.warn("Validation errors:", JSON.parse(JSON.stringify(n))), ut({
    type: "error",
    message: e("inputs_issue", { x: "part" }),
    additional: n.map((r) => e(r.message))
  }), !1) : !0;
};
async function _l(i) {
  var s, n;
  const t = Gn(i), e = t.t;
  try {
    if (!Fl(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && ($l.value > t.maxShapes || Tl.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const h = Rl(t.materialStore, !0), m = Pt(h);
      if (m.length > 0)
        return ut({
          type: "error",
          message: e("inputs_issue", { x: "material" }),
          additional: m.map((w) => e(w.message))
        }), { valid: !1 };
    } else {
      const h = Hn(), m = Pt(h);
      if (m.length > 0)
        return ut({
          type: "error",
          message: e("inputs_issue", { x: "stock" }),
          additional: m.map((w) => e(w.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new Dt(t.selectedSaw) : new Dt(t.sawData), o = Pt(r.issues);
    if (o.length > 0)
      return ut({
        type: "error",
        message: e("inputs_issue", { x: "saw" }),
        additional: o.map((h) => e(h.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Dl(r), u = Pt(a);
    if (u.length > 0)
      return ut({
        type: "error",
        message: e("inputs_issue", { x: "stock" }),
        additional: u.map((h) => e(h.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return ut({
        type: "error",
        message: e("no_stock")
      }), { valid: !1 };
    const { shapeList: f, issues: p } = await Ol({
      orientationModel: t.orientationModel,
      trim: t.partTrim,
      inputShapesOverride: t.inputShapes
    }), I = Pt(p);
    if (I.length > 0)
      return ut({
        type: "error",
        message: e("inputs_issue", { x: "part" }),
        additional: I.map((h) => e(h.message))
      }), { valid: !1 };
    if (!(f != null && f.length))
      return ut({
        type: "error",
        message: e("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Ie.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Ie.userGroups.value.forEach((w) => w.populateParentID(Ie.inputShapes.value));
      const h = vl(
        Ie.userGroups.value,
        Ie.inputShapes.value
      ), m = Pt(h);
      if (m.length > 0)
        return ut({
          type: "error",
          message: e("inputs_issue", { x: "group" }),
          additional: m.map((w) => e(w.message))
        }), { valid: !1 };
    }
    return {
      valid: !0,
      saw: r,
      stockList: l,
      shapeList: f
    };
  } catch (r) {
    return console.error("Validation error:", r), ut({
      type: "error",
      message: e("unexpected_error"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function ql(i) {
  return !i || !Jt(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function Cs(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function Is(i) {
  return `${i}Options`;
}
function Bl(i, t, e) {
  const s = Is(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function Hl(i, t, e = !0) {
  if (!Cs(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    Ls(i, t, r, e);
  e && Wn(i, t, "all");
}
function Ls(i, t, e, s = !0) {
  s && Wn(i, t, e), e !== "all" && Cs(i, t) && (i[t][e] = !1);
}
function Wn(i, t, e) {
  if (!Cs(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function Ps(i, t, e, s, n, r) {
  var f;
  const o = t + "Options";
  if (!((f = i == null ? void 0 : i[o]) != null && f[e]) || !(s in i[o][e])) return;
  hi(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((p) => p);
  if (!Array.isArray(a)) return;
  const u = Ni(i, t, e, r);
  hi(i, t, e, !!qe(u));
}
function Nn(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Ni(i, t, "all", r), u = i[o][e], f = Object.values(u || {}).filter((p) => p);
  for (const p of l)
    p !== "all" && (n.includes(p) || (Ps(i, t, p, e, s, r), Array.isArray(f) || hi(i, t, p, !1), hi(i, t, p, !!qe(a))));
}
function hi(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = Is(t), r = ql((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Ni(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && Rn(e) && qe(l) ? fl(i, e, l) / 1e3 : l;
}
function wh(i) {
  i != null && i.type && delete i.type, Gl.call(this, i);
}
function Gl(i) {
  if (!(i != null && i.banding) || typeof i.banding != "object") return;
  const t = Object.keys(i.banding);
  if (!t.length) return;
  const e = ["labels", "pricing"];
  if (!t.every((s) => e.includes(s)))
    console.warn("SmartCut - legacy banding data provided - please update to use { labels: string[], pricing: Record<string, number> }");
  else return;
  i.banding = {
    labels: Object.keys(i.banding),
    pricing: i.bandingPricing
  };
}
function Wl(i) {
  if (i != null && i.enable) return;
  i.enable = {};
  const t = {
    showDiagram: { new: "diagram", map: "equal" },
    enableFocus: { new: "focus", map: "equal" },
    enableMachining: { new: "machining", map: "equal" },
    enableCSVImport: { new: "csvImport", map: "equal" },
    showProgressNumber: { new: "progressNumber", map: "equal" },
    disableBanding: { new: "banding", map: "reverse" },
    disableFinish: { new: "finish", map: "reverse" },
    disableOrientation: { new: "orientation", map: "reverse" },
    disableClick: { new: "click", map: "reverse" },
    disablePartName: { new: "partName", map: "reverse" }
  };
  for (const e of Object.keys(t))
    e in i && (i.enable[t[e].new] = t[e].map === "reverse" ? !i[e] : i[e], delete i[e]);
  console.log(i);
}
const Nl = { id: "mini-stock-nav" }, Ul = ["onMousedown"], jl = { class: "id" }, zl = /* @__PURE__ */ Oe({
  __name: "StockNavigation",
  props: {
    stockList: {
      type: Array,
      default: () => []
    },
    primaryColor: {
      type: String,
      default: ""
    },
    secondaryColor: {
      type: String,
      default: ""
    },
    activeStockId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = (r) => {
      s("show-stock", r);
    };
    return (r, o) => (y(), C("div", Nl, [
      (y(!0), C(Se, null, De(e.stockList, (l, a) => (y(), C("button", {
        key: a,
        class: Ce(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: ke({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        M("div", jl, te(a + 1), 1),
        cs(M("div", { class: "stack legibility" }, te(l.stack), 513), [
          [hs, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, Ul))), 128))
    ]));
  }
}), ti = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, Vl = {
  name: "Spinner",
  props: {
    size: {
      type: Number,
      default: 100
    },
    showNumber: {
      type: Boolean,
      default: !0
    },
    number: {
      type: Number,
      default: 0
    },
    complete: {
      type: Boolean,
      default: !1
    }
  }
}, Yl = { id: "spinner" }, Xl = ["width", "height"], Kl = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Zl(i, t, e, s, n, r) {
  return y(), C("div", Yl, [
    e.complete ? W("", !0) : (y(), C("svg", {
      key: 0,
      class: "loading",
      style: ke({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      Lr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, Xl)),
    e.complete ? (y(), C("svg", {
      key: 1,
      class: "complete",
      style: ke({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      M("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : W("", !0),
    e.showNumber ? (y(), C("div", Kl, te(e.number), 1)) : W("", !0)
  ]);
}
const Xs = /* @__PURE__ */ ti(Vl, [["render", Zl]]);
function Jl(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function Ql(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function ea(i, t, e, s, n = []) {
  const r = Ql(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((f) => f.id)), u = o.map((f) => f.id).filter((f) => !a.has(f)).map((f) => `'${f}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && (o.sort((a, u) => {
    const f = n.indexOf(a.id), p = n.indexOf(u.id);
    return f === -1 ? 1 : p === -1 ? -1 : f - p;
  }), console.log(o)), o;
}
const ta = ["id"], ia = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, sa = /* @__PURE__ */ Oe({
  __name: "OrientationButton",
  props: {
    id: { default: "" },
    orientationModel: { default: 0 },
    rectangleType: { default: null },
    rectangle: { default: () => null },
    shapeOrientation: { default: "" },
    stockGrain: { default: "n" },
    buttonBackground: { default: "#848484" },
    iconColor: { default: "#FFFFFF" },
    disabled: { type: Boolean, default: !1 },
    debug: { type: Boolean, default: !1 }
  },
  emits: ["updateOrientation"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = H(0), r = H(!1), o = (v, T, K, L) => {
      if (!we(K) || T === 0)
        return v;
      const F = l();
      return T === 1 || T === 2 && L !== "n" && v ? F : v;
    }, l = (v) => {
      const T = { ...e, ...v };
      if (!T.rectangle || !we(T.rectangle)) return "";
      let K = "";
      switch (T.orientationModel) {
        case 0:
          K = z.value;
          break;
        case 1:
          T.stockGrain === "y" || T.stockGrain === "n" ? K = T.rectangle.l >= T.rectangle.w ? "l" : "w" : T.rectangle.l >= T.rectangle.w ? K = T.stockGrain : K = K = T.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          K = T.rectangle.l >= T.rectangle.w ? "l" : "w";
          break;
      }
      return K;
    }, a = () => {
      if (e.disabled || N.value.length <= 1) return;
      let v = null;
      [1, 2].includes(e.orientationModel) ? v = p() : v = f(), n.value = v;
    }, u = (v) => {
      const T = N.value.findIndex((K) => K === v);
      return T === -1 ? 0 : T;
    }, f = () => {
      let v = 0;
      return v = u(z.value) + 1, v > N.value.length - 1 && (v = 0), v;
    }, p = () => {
      let v = 0;
      if (z.value)
        v = N.value.findIndex((T) => T === "");
      else {
        const T = l();
        v = N.value.findIndex((K) => K === T);
      }
      return v;
    }, I = (v) => {
      s("updateOrientation", v);
    }, h = () => {
      const v = z.value;
      switch (e.orientationModel) {
        case 0:
          return v ? e.stockGrain === "n" ? v || e.shapeOrientation || "default" : e.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        case 1:
          return v ? e.stockGrain === "n" ? v || e.shapeOrientation || "default" : e.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        case 2:
          return v ? e.stockGrain === "n" ? v || e.shapeOrientation || "default" : e.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, m = () => {
      if (!e.rectangle) return;
      const v = o(
        z.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (v !== z.value) {
        w(v);
        return;
      }
      if (n.value = u(z.value), !!we(e.rectangle)) {
        if (e.orientationModel === 1) {
          const T = ae.value ? l() : z.value;
          w(T);
          return;
        }
        if (e.orientationModel === 2) {
          let T;
          ae.value ? T = e.stockGrain !== "n" ? l() : "" : T = z.value, w(T);
        }
      }
    }, w = (v) => {
      n.value = u(v), I(v);
    }, R = () => {
      const v = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], T = ["l", "w", "y", "n"], K = [0, 1, 2], L = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, F = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, le = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, se = [];
      v.forEach((A) => {
        T.forEach((q) => {
          K.forEach((j) => {
            const ie = new ci({
              l: A.l,
              w: A.w
            }), ye = l({
              orientationModel: j,
              rectangle: ie,
              stockGrain: q
            });
            let de = "";
            ie.l === ie.w ? de = "l === w" : ie.l > ie.w ? de = "l >= w" : de = "w > l";
            const We = ["l", "w", "y"].includes(q) ? L : F;
            se.push({
              Model: j,
              "Stock grain": q,
              "Stock grain description": le[q],
              Dimensions: de,
              "Orientation lock": ye || "N/A",
              "Orientation Lock description": We[ye] || "N/A"
            });
          });
        });
      }), se.sort((A, q) => {
        if (A.Model !== q.Model)
          return A.Model - q.Model;
        if (A["Stock grain"] !== q["Stock grain"])
          return A["Stock grain"].localeCompare(q["Stock grain"]);
        const j = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return j[A.Dimensions] - j[q.Dimensions];
      }), console.table(se);
    }, N = Z(() => {
      if (!e.rectangle) return ["l", "w"];
      if (_t(e.rectangle)) return ["l", "w"];
      let v = ["", "l", "w"];
      return e.rectangle.multiEdit && (v = [" ", "", "l", "w"]), J.value && (v = v.filter((T) => T !== "w")), v;
    }), J = Z(() => {
      var v, T, K, L;
      return we(e.rectangle) || it(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((v = e.rectangle) != null && v.l) && ((T = e.rectangle) != null && T.w) ? ((K = e.rectangle) == null ? void 0 : K.l) === ((L = e.rectangle) == null ? void 0 : L.w) : !1;
    }), z = Z(() => {
      let v = "";
      return _t(e.rectangle) ? v = e.rectangle.direction : we(e.rectangle) ? v = e.rectangle.orientationLock ?? "" : it(e.rectangle) && (v = e.rectangle.grain ?? ""), v;
    }), Q = Z(() => _t(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), ae = Z(() => !Q.value.l && !Q.value.w), G = Z(() => ls(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), Y = Z(() => {
      var L;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (it(e.rectangle) || e.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[e.rectangle.grain] || "noGrain";
      const v = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, T = e.stockGrain || "default";
      let K = "default";
      return we(e.rectangle) || e.rectangleType === "shape" ? K = h() : _t(e.rectangle) && (K = e.rectangle.direction || "default"), ((L = v[T]) == null ? void 0 : L[K]) || v[T].default;
    });
    return Le(n, (v, T) => {
      r.value && T !== void 0 && I(N.value[v]);
    }, { immediate: !1 }), Le(Q, (v, T) => {
      if (!e.rectangle || e.orientationModel === 0 || !we(e.rectangle) || we(e.rectangle) && (e.orientationModel === 2 && T.l && T.w && !z.value || e.stockGrain === "n" && !z.value))
        return;
      const K = l();
      z.value !== K && I(K);
    }, { immediate: !1 }), Le(() => e.stockGrain, (v, T) => {
      v !== T && m();
    }, { immediate: !0 }), ft(() => {
      m(), Ze(() => {
        r.value = !0, e.debug && R();
      });
    }), (v, T) => (y(), C("div", {
      id: v.id,
      class: Ce(["orientation-button", { rot: G.value, square: J.value, disabled: v.disabled, [Y.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: ke({
        backgroundColor: v.buttonBackground
      }),
      onClick: a
    }, [
      Y.value === "delete" ? (y(), C("svg", ia, T[0] || (T[0] = [
        M("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : W("", !0),
      Y.value === "freeRotation" ? (y(), C("svg", {
        key: 1,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[1] || (T[1] = [
        M("g", null, [
          M("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          M("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          M("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          M("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : W("", !0),
      Y.value === "leftRight" ? (y(), C("svg", {
        key: 2,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[2] || (T[2] = [
        M("g", null, [
          M("path", { d: "m5.408 19.408h61.095" }),
          M("g", null, [
            M("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            M("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : W("", !0),
      Y.value === "topBottom" ? (y(), C("svg", {
        key: 3,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[3] || (T[3] = [
        M("g", null, [
          M("path", { d: "m19.408 66.503v-61.095" }),
          M("g", null, [
            M("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            M("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : W("", !0),
      Y.value === "grainLeftRight" ? (y(), C("svg", {
        key: 4,
        class: "grain",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[4] || (T[4] = [
        M("g", null, [
          M("path", { d: "m3 3h99.887" }),
          M("path", { d: "m3.113 32h99.887" }),
          M("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : W("", !0),
      Y.value === "grainTopBottom" ? (y(), C("svg", {
        key: 5,
        class: "grain",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[5] || (T[5] = [
        M("g", null, [
          M("path", { d: "m61 3v99.887" }),
          M("path", { d: "m32 3.113v99.887" }),
          M("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : W("", !0)
    ], 14, ta));
  }
}), na = ["id"], ra = /* @__PURE__ */ Oe({
  __name: "BandingButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["clicked"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = H({
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    Le(() => e.inputShape.orientationLock, () => {
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = zs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Wi(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 }), Le([
      () => {
        var l;
        return (l = e.inputShape) == null ? void 0 : l.banding;
      },
      () => e.orientationModel,
      () => e.stockGrain,
      () => {
        var l;
        return (l = e.inputShape) == null ? void 0 : l.orientationLock;
      }
    ], () => {
      var u;
      if (!((u = e.inputShape) != null && u.banding)) return;
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = zs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Wi(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 });
    const r = (l) => {
      (l.key === "Enter" || l.key === " ") && o();
    }, o = () => {
      e.disabled || s("clicked");
    };
    return ft(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), ds(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (y(), C("div", {
      id: l.id,
      class: Ce(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      M("div", {
        class: Ce(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        M("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, na));
  }
}), oa = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new ai(i).valueOf();
  } catch {
    return null;
  }
};
function la({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = H({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (o, l = !1) => {
    if (o == null || o === "")
      return i.required ? {
        value: null,
        valid: !1,
        message: "field_required"
      } : {
        value: null,
        valid: !0
      };
    if (i.allowZero === !1 && (o === 0 || o === "0"))
      return {
        value: null,
        valid: !1,
        message: "zero_not_allowed"
      };
    const a = String(o);
    switch (i.type) {
      case "string":
        return { value: a, valid: !0 };
      case "unitDependent":
        if (i.numberFormat === "fraction") {
          if (l) {
            const h = /^-?\d*\s*-?\d*\/?-?\d*$/.test(a);
            return {
              value: a,
              valid: h
            };
          }
          const u = oa(a);
          if (u === null)
            return {
              value: null,
              valid: !1,
              message: "invalid_fraction"
            };
          let f = u;
          return typeof i.min == "number" && (f = Math.max(f, i.min)), typeof i.max == "number" && (f = Math.min(f, i.max)), {
            value: new ai(f).toFraction(!0),
            valid: !0
          };
        } else if (i.numberFormat === "decimal") {
          const u = parseFloat(a);
          if (isNaN(u))
            return {
              value: null,
              valid: !1,
              message: "invalid_number"
            };
          let f = u;
          return typeof i.min == "number" && (f = Math.max(f, i.min)), typeof i.max == "number" && (f = Math.min(f, i.max)), { value: f, valid: !0 };
        }
        break;
      case "integer":
      case "float":
        if (l) {
          const u = i.type === "integer" ? /^-?\d*$/ : /^-?\d*\.?\d*$/;
          return {
            value: a,
            valid: u.test(a)
          };
        }
        {
          const u = a.replace(
            i.type === "integer" ? /[^0-9-]/g : /[^0-9.-]/g,
            ""
          ), f = i.type === "integer" ? parseInt(u) : parseFloat(u);
          return isNaN(f) ? { value: null, valid: !1 } : { value: f, valid: !0 };
        }
      default:
        return { value: o, valid: !0 };
    }
  };
  return {
    state: s,
    ...{
      handleInput: (o) => {
        if (!e.value) return;
        const l = o.target, a = o.type === "input" && ["integer", "float"].includes(i.type) || i.type === "unitDependent" && i.numberFormat === "decimal";
        s.value.isTyping = !a;
        const u = n(l.value, !a);
        t("validation", u, i.id), t("input", l.value), a && u.valid && t("update:value", u.value);
      },
      handleBlur: (o) => {
        if (!e.value) return;
        s.value.isTyping = !1;
        const l = o.target, a = n(l.value, !1);
        t("validation", a, i.id), a.valid && t("update:value", a.value), t("blur", o);
      },
      handleFocus: (o) => {
        e.value && t("focus", o);
      },
      handleKeydown: (o) => {
        if (e.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(o.key)) {
          if (["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(o.key) || (i.type === "unitDependent" && i.numberFormat === "fraction" ? /^[-0-9\s/]$/.test(o.key) || o.preventDefault() : (i.type === "integer" || i.type === "float") && ((i.type === "integer" ? /^[-0-9]$/.test(o.key) : /^[-0-9.]$/.test(o.key)) || o.preventDefault())), o.key === "Enter") {
            s.value.isTyping = !1;
            const l = o.target, a = n(l.value, !1);
            a.valid && t("update:value", a.value), t("enter", a);
          }
          o.key === "Escape" && t("escape");
        }
      },
      getInputPattern: () => {
        switch (i.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return i.numberFormat === "fraction" ? "-?([0-9]+ )?[0-9]*/[0-9]*" : "-?[0-9]*\\.?[0-9]*";
          default:
            return;
        }
      },
      getInputMode: () => {
        switch (i.type) {
          case "integer":
            return "numeric";
          case "float":
            return "decimal";
          case "unitDependent":
            return i.numberFormat === "fraction" ? "numeric" : "decimal";
          default:
            return "text";
        }
      },
      handleCompositionStart: () => {
        s.value.isComposing = !0;
      },
      handleCompositionEnd: (o) => {
        s.value.isComposing = !1, s.value.isTyping = !1;
        const l = o.target, a = n(l.value, !1);
        a.valid && t("update:value", a.value);
      },
      handlePaste: (o) => {
        var a;
        if (!e.value) return;
        const l = ((a = o.clipboardData) == null ? void 0 : a.getData("text")) || "";
        if ((i.type === "integer" || i.type === "float") && !(i.type === "integer" ? /^-?\d+$/ : /^-?\d*\.?\d*$/).test(l)) {
          o.preventDefault();
          return;
        }
        if (i.type === "unitDependent" && i.numberFormat === "fraction" && !/^-?\d*\s*\/?-?\d*$/.test(l)) {
          o.preventDefault();
          return;
        }
        t("paste", o);
      }
    },
    processValue: n
  };
}
function aa({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = H({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (r) => i.options && i.options.length > 0 && (i.numberFormat && (i.numberFormat === "fraction" ? r = String(r) : r = Number(r)), !i.options.some((l) => typeof l == "object" ? l.value === r : l === r)) ? {
    value: r,
    valid: !1,
    message: "invalid_option"
  } : {
    value: r,
    valid: !0
  };
  return {
    state: s,
    processValue: n,
    handleSelectChange: (r) => {
      if (!e.value) return;
      const o = r.target, l = n(o.value);
      t("validation", l, i.id), l.valid && t("update:value", l.value);
    }
  };
}
function ua({
  props: i,
  emit: t,
  isMounted: e
}) {
  return {
    handleCheckboxChange: (s) => {
      if (!e.value) return;
      const r = s.target.checked ? i.trueValue : i.falseValue;
      if (r === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      t("update:value", r);
    },
    handleFocus: (s) => {
      e.value && t("focus", s);
    },
    handleBlur: (s) => {
      e.value && t("blur", s);
    }
  };
}
const ca = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], ha = /* @__PURE__ */ Oe({
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
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = H(!0), r = H(null), {
      handleInput: o,
      handleFocus: l,
      handleBlur: a,
      handleKeydown: u,
      handleCompositionStart: f,
      handleCompositionEnd: p,
      handlePaste: I
    } = la({
      props: e,
      emit: s,
      isMounted: n
    }), h = (m) => {
      const w = m.getBoundingClientRect(), R = window.getComputedStyle(m);
      return w.width > 0 && w.height > 0 && R.display !== "none" && R.visibility !== "hidden";
    };
    return ft(() => {
      (k(e.default) && e.value === void 0 || e.value === null) && s("update:value", e.default), e.focus && r.value && h(r.value) && Ze(() => r.value.focus());
    }), ds(() => {
      n.value = !1;
    }), (m, w) => (y(), C("input", oi(m.$attrs, {
      id: e.id,
      ref_key: "inputRef",
      ref: r,
      name: e.id,
      value: e.value,
      inputmode: e.inputMode,
      type: e.inputType,
      placeholder: e.placeholder,
      disabled: e.disabled,
      default: e.default,
      readonly: e.readonly,
      min: e.min,
      max: e.max,
      "aria-label": e.ariaLabel,
      "aria-invalid": !!e.issue,
      "aria-describedby": e.errorId,
      onInput: w[0] || (w[0] = //@ts-ignore
      (...R) => x(o) && x(o)(...R)),
      onFocus: w[1] || (w[1] = //@ts-ignore
      (...R) => x(l) && x(l)(...R)),
      onBlur: w[2] || (w[2] = //@ts-ignore
      (...R) => x(a) && x(a)(...R)),
      onKeydown: w[3] || (w[3] = //@ts-ignore
      (...R) => x(u) && x(u)(...R)),
      onCompositionstart: w[4] || (w[4] = //@ts-ignore
      (...R) => x(f) && x(f)(...R)),
      onCompositionend: w[5] || (w[5] = //@ts-ignore
      (...R) => x(p) && x(p)(...R)),
      onPaste: w[6] || (w[6] = //@ts-ignore
      (...R) => x(I) && x(I)(...R))
    }), null, 16, ca));
  }
}), da = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], fa = /* @__PURE__ */ Oe({
  __name: "CheckBoxInput",
  props: {
    trueValue: {},
    falseValue: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "input", "focus", "blur"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = H(!0), r = H(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = ua({
      props: e,
      emit: s,
      isMounted: n
    });
    return (u, f) => (y(), C("input", {
      id: e.id,
      ref_key: "inputRef",
      ref: r,
      type: "checkbox",
      checked: e.value === e.trueValue,
      disabled: e.readonly || e.disabled,
      required: e.required,
      "aria-label": e.ariaLabel,
      "aria-invalid": !!e.issue,
      "aria-describedby": e.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...p) => x(o) && x(o)(...p)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...p) => x(l) && x(l)(...p)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...p) => x(a) && x(a)(...p))
    }, null, 40, da));
  }
}), pa = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], ga = ["disabled", "selected"], ma = {
  key: 0,
  value: " "
}, va = ["hidden", "value", "disabled"], ya = /* @__PURE__ */ Oe({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    numberFormat: {},
    text: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "focus", "blur"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = H(!0), r = H(null), o = Z(() => e.options.map((f) => {
      var p, I, h;
      return {
        value: f.value,
        label: ((p = f.label) == null ? void 0 : p.toUpperCase()) ?? ((h = (I = f.value) == null ? void 0 : I.toString()) == null ? void 0 : h.toUpperCase()),
        hidden: f.hidden ?? !1,
        disabled: f.disabled ?? !1
      };
    })), {
      handleSelectChange: l,
      handleFocus: a,
      handleBlur: u
    } = aa({
      props: e,
      emit: s,
      isMounted: n
    });
    return (f, p) => {
      var I, h, m, w;
      return y(), C("select", oi(f.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: p[0] || (p[0] = //@ts-ignore
        (...R) => x(l) && x(l)(...R)),
        onFocus: p[1] || (p[1] = //@ts-ignore
        (...R) => x(a) && x(a)(...R)),
        onBlur: p[2] || (p[2] = //@ts-ignore
        (...R) => x(u) && x(u)(...R))
      }), [
        M("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, te(((h = (I = e.text) == null ? void 0 : I.select) == null ? void 0 : h.toUpperCase()) ?? "SELECT"), 9, ga),
        e.multiEdit ? (y(), C("option", ma, te(((w = (m = e.text) == null ? void 0 : m.delete) == null ? void 0 : w.toUpperCase()) ?? "DELETE"), 1)) : W("", !0),
        (y(!0), C(Se, null, De(o.value, (R) => (y(), C("option", {
          key: R.value,
          hidden: R.hidden,
          value: R.value,
          disabled: R.disabled
        }, te(R.label), 9, va))), 128))
      ], 16, pa);
    };
  }
}), ba = ["for"], wa = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, Ks = /* @__PURE__ */ Oe({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (y(), C("label", {
      for: t.id,
      class: "input-label"
    }, [
      Xt(te(t.label) + " ", 1),
      t.required ? (y(), C("span", wa, "*")) : W("", !0)
    ], 8, ba));
  }
}), Sa = ["data-field-id"], xa = ["disabled", "selected"], ka = {
  key: 0,
  value: " "
}, Ca = ["hidden", "value", "disabled"], ct = /* @__PURE__ */ Oe({
  inheritAttrs: !1,
  __name: "InputField",
  props: {
    value: { default: null },
    id: { default: "" },
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
    ariaLabel: {}
  },
  emits: ["update:value", "validation"],
  setup(i, { emit: t }) {
    const e = t, s = i, n = H(null), r = H(null), o = H(!0), l = H(s.numberFormat), a = Z(() => s.custom ? "custom-" + s.id : s.id), u = Z(() => `${a.value}-error`), f = Z(() => s.label || s.placeholder), p = Z(() => Y(s.type, s.numberFormat)), I = Z(() => v(s.type, s.numberFormat)), h = Z(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), m = Z(() => {
      let L = s.value;
      if (s.type !== "unitDependent" || !L) return L;
      try {
        return S({ v: L, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), w = Z(() => s.options.map((L) => {
      var F, le;
      return {
        value: L.value,
        label: ((F = L.label) == null ? void 0 : F.toUpperCase()) || ((le = L.value) == null ? void 0 : le.toString().toUpperCase()),
        hidden: L.hidden || !1,
        disabled: L.disabled || !1
      };
    })), R = Z(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), N = Z(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": f.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), J = Z(() => ({
      ...N.value,
      type: s.type,
      inputMode: I.value,
      inputType: p.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default
    })), z = Z(() => ({
      ...N.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), Q = Z(() => ({
      ...N.value,
      options: w.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text
    })), ae = (L) => {
      r.value = L;
    }, G = (L) => s.label && s.enableLabel && s.labelPosition === L, Y = (L, F) => {
      if (L === "unitDependent")
        return F === "fraction" ? "text" : "number";
      switch (L) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, v = (L, F) => {
      if (L === "unitDependent")
        return F === "fraction" ? "text" : "decimal";
      switch (L) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, T = (L) => {
      e("update:value", L);
    }, K = (L, F) => {
      L.valid === void 0 || L.valid === !0 ? (o.value = !0, e("validation", n.value, L)) : L.valid === !1 && L.message && (o.value = !1, console.warn(`Field validation error for field ${F} - ${L.message}`), e("validation", n.value, L));
    };
    return Le(() => s.numberFormat, (L, F) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && L !== F && s.value)
          try {
            const le = S({ v: s.value, nf: L });
            e("update:value", le);
          } catch {
            e("update:value", L === "decimal" ? 0 : "0");
          }
        l.value = L;
      }
    }), (L, F) => (y(), C("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ce(["input-wrapper", R.value]),
      "data-field-id": a.value
    }, [
      G("first") ? (y(), pe(Ks, {
        key: 0,
        id: a.value,
        label: L.label,
        required: L.required
      }, null, 8, ["id", "label", "required"])) : W("", !0),
      h.value ? (y(), pe(ha, oi({
        key: 1,
        ref: ae
      }, J.value, {
        "input-type": p.value,
        "input-mode": I.value,
        value: m.value,
        onValidation: K,
        "onUpdate:value": T
      }), null, 16, ["input-type", "input-mode", "value"])) : L.type === "checkbox" ? (y(), pe(fa, oi({
        key: 2,
        ref: ae,
        type: "checkbox"
      }, z.value, {
        checked: L.value === L.trueValue,
        "onUpdate:value": F[0] || (F[0] = (le) => e("update:value", le))
      }), null, 16, ["checked"])) : L.type === "select" ? (y(), pe(ya, oi({
        key: 3,
        ref: ae
      }, Q.value, {
        "onUpdate:value": F[1] || (F[1] = (le) => e("update:value", le))
      }), {
        default: fs(() => {
          var le, se, A, q;
          return [
            M("option", {
              value: "",
              disabled: L.selectFirstOptionDisabled,
              selected: !L.value
            }, te(((se = (le = L.text) == null ? void 0 : le.select) == null ? void 0 : se.toUpperCase()) ?? "SELECT"), 9, xa),
            L.multiEdit ? (y(), C("option", ka, te(((q = (A = L.text) == null ? void 0 : A.delete) == null ? void 0 : q.toUpperCase()) ?? "DELETE"), 1)) : W("", !0),
            (y(!0), C(Se, null, De(w.value, (j) => (y(), C("option", {
              key: j.value,
              hidden: j.hidden,
              value: j.value,
              disabled: j.disabled
            }, te(j.label), 9, Ca))), 128))
          ];
        }),
        _: 1
      }, 16)) : W("", !0),
      G("last") ? (y(), pe(Ks, {
        key: 4,
        id: a.value,
        label: L.label,
        required: L.required
      }, null, 8, ["id", "label", "required"])) : W("", !0),
      Pr(L.$slots, "default")
    ], 10, Sa));
  }
}), Ia = {
  key: 0,
  class: "inputs"
}, La = { class: "label" }, Pa = { class: "label" }, $a = { class: "label" }, Ta = ["onClick"], Da = { class: "price" }, Oa = ["aria-label"], as = /* @__PURE__ */ Oe({
  __name: "ExtrasInputs",
  props: {
    translate: { type: Boolean, default: !0 },
    shape: {},
    shapeIndex: { default: 0 },
    extraType: {},
    extraLabel: {},
    extraKeys: {},
    allOptions: {},
    pricing: { default: () => ({}) },
    labels: {},
    userFriendlyFieldMap: {},
    partColumns: {},
    orientationModel: { default: 0 },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {}
  },
  emits: ["update-all", "set"],
  setup(i, { emit: t }) {
    const e = i, s = t, { t: n } = Ui(["main", "errors"]), r = H(!1), o = Z(() => e.extraType + "Options"), l = Z(() => {
      var w;
      if (!((w = e.allOptions) != null && w.length)) return "auto";
      const h = e.allOptions.length;
      return h ? `repeat(${h + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (h, m) => {
      s("update-all", e.shape, e.extraType, h, m);
    }, u = (h, m, w) => {
      s("set", e.shape, e.extraType, h, m, w);
    }, f = (h, m, w, R, N) => {
      var ae;
      if (!h) return [];
      const J = (ae = m == null ? void 0 : m[w]) == null ? void 0 : ae[R];
      if (!J)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${R}`), [];
      const z = Object.values(J);
      if (!z.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${R}`), [];
      const Q = z.filter((G) => typeof G == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(h, Q, N) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, p = (h) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const m = e.getPrice(e.shape, e.extraType, h);
      return m ? e.formatPrice(m) : "";
    }, I = () => {
      const h = [];
      e.extraType in e.shape || new re(
        {
          item: e.shape,
          message: `The extra type '${e.extraType}' does not exist in the part`
        }
      ), o.value in e.shape || new re(
        {
          item: e.shape,
          message: `The options key '${o.value}' does not exist in the part`
        }
      ), h.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + h.map((m) => m.message).join(" ")));
    };
    return ft(() => I()), (h, m) => {
      var R, N, J, z, Q, ae, G, Y;
      const w = Bt("font-awesome-icon");
      return r.value ? W("", !0) : (y(), C("div", {
        key: 0,
        class: Ce(["extras group", [h.extraType]]),
        style: ke({ "grid-column-end": "span " + h.partColumns })
      }, [
        h.allOptions.length === 1 && h.allOptions[0].length === 1 ? (y(), C("div", Ia, [
          M("div", La, te((N = (R = h.allOptions) == null ? void 0 : R[0]) == null ? void 0 : N[0]), 1),
          M("div", null, [
            (J = h.shape) != null && J[o.value] && "all" in h.shape[o.value] ? (y(), pe(ct, {
              key: 0,
              id: `${h.extraType}-all-${h.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: x(Vt)(x(n)("all")),
              "true-value": (Q = (z = h.allOptions) == null ? void 0 : z[0]) == null ? void 0 : Q[0],
              "false-value": "",
              value: (G = h.shape[o.value].all) == null ? void 0 : G[(ae = h.labels) == null ? void 0 : ae[0]],
              "onUpdate:value": m[0] || (m[0] = (v) => {
                var T, K;
                u("all", (T = h.labels) == null ? void 0 : T[0], v), a((K = h.labels) == null ? void 0 : K[0], v);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : W("", !0)
          ]),
          (y(!0), C(Se, null, De(h.extraKeys, (v) => {
            var T, K, L, F, le, se;
            return y(), C("div", { key: v }, [
              (T = h.labels) != null && T[0] && ((L = (K = h.shape) == null ? void 0 : K[o.value]) != null && L[v]) && h.labels[0] in h.shape[o.value][v] ? (y(), pe(ct, {
                key: 0,
                id: `${h.extraType}-${v}-${h.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: x(Vt)(x(n)(((F = h.userFriendlyFieldMap) == null ? void 0 : F[v]) || v)),
                "true-value": (se = (le = h.allOptions) == null ? void 0 : le[0]) == null ? void 0 : se[0],
                "false-value": "",
                value: h.shape[o.value][v][h.labels[0]],
                "onUpdate:value": (A) => u(v, h.labels[0], A)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : W("", !0)
            ]);
          }), 128))
        ])) : (y(), C("div", {
          key: 1,
          class: "grid inputs",
          style: ke({
            "grid-template-columns": l.value
          })
        }, [
          (Y = h.shape) != null && Y[o.value] && "all" in h.shape[o.value] ? (y(), C(Se, { key: 0 }, [
            M("div", Pa, te(x(Vt)(x(n)("all"))), 1),
            (y(!0), C(Se, null, De(h.allOptions, (v, T) => {
              var K, L;
              return y(), pe(ct, {
                id: `${h.extraType}-all-${h.labels[T]}-${T}-${h.shapeIndex}`,
                key: `${h.extraType}-all-${h.labels[T]}-${T}-${h.shapeIndex}`,
                type: "select",
                disabled: f(h.pricing, h.shape, o.value, "all", T).length === 0,
                options: f(h.pricing, h.shape, o.value, "all", T).map((F) => ({ value: F, label: F })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (L = h.shape[o.value].all) == null ? void 0 : L[(K = h.labels) == null ? void 0 : K[T]],
                "onUpdate:value": (F) => {
                  var le, se;
                  u("all", (le = h.labels) == null ? void 0 : le[T], F), a((se = h.labels) == null ? void 0 : se[T], F);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            m[2] || (m[2] = M("div", null, null, -1)),
            m[3] || (m[3] = M("div", null, null, -1))
          ], 64)) : W("", !0),
          (y(!0), C(Se, null, De(h.extraKeys, (v) => {
            var T, K;
            return y(), C(Se, { key: v }, [
              (T = h.shape) != null && T[o.value] && v in h.shape[o.value] ? (y(), C(Se, { key: 0 }, [
                M("div", $a, te(x(Vt)(x(n)(((K = h.userFriendlyFieldMap) == null ? void 0 : K[v]) || v))), 1),
                (y(!0), C(Se, null, De(h.allOptions, (L, F) => {
                  var le;
                  return y(), pe(ct, {
                    id: `${h.extraType}-${v}-${h.labels[F]}-${F}-${h.shapeIndex}`,
                    key: `${h.extraType}-${v}-${h.labels[F]}-${F}-${h.shapeIndex}`,
                    type: "select",
                    disabled: f(h.pricing, h.shape, o.value, v, F).length === 0,
                    options: f(h.pricing, h.shape, o.value, v, F).map((se) => ({
                      value: se,
                      label: se
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: h.shape[o.value][v][(le = h.labels) == null ? void 0 : le[F]],
                    "onUpdate:value": (se) => {
                      var A;
                      return u(v, (A = h.labels) == null ? void 0 : A[F], se);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : W("", !0),
              M("div", {
                class: "delete",
                onClick: () => x(Ls)(h.shape, h.extraType, v)
              }, [
                ve(w, { icon: ["fass", "trash"] })
              ], 8, Ta),
              M("div", Da, te(p(v) || x(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        M("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": x(n)("action_item", { a: "delete", i: h.extraLabel }),
          onClick: m[1] || (m[1] = () => x(Hl)(h.shape, h.extraType, !0))
        }, [
          ve(w, { icon: ["fass", "trash"] }),
          Xt(" " + te(x(n)("action_item", { a: "delete", i: h.extraLabel })), 1)
        ], 8, Oa)
      ], 6));
    };
  }
}), Aa = ["id", "disabled"], Ea = { class: "icon" }, Ma = /* @__PURE__ */ Oe({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["clicked"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = () => {
      e.disabled || s("clicked");
    };
    return (r, o) => {
      var a, u, f, p;
      const l = Bt("font-awesome-icon");
      return y(), C("button", {
        id: r.id,
        class: Ce(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (p = (f = r.inputShape) == null ? void 0 : f.finish) == null ? void 0 : p.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        M("div", Ea, [
          ve(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = M("div", { class: "indicator" }, null, -1))
      ], 10, Aa);
    };
  }
}), Ra = Oe({
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
      return bs(this.inputShape);
    },
    disabledOrReadonly() {
      var i;
      return this.disabled || !!((i = this.inputShape) != null && i.readonly);
    }
  },
  methods: {
    openMachining() {
      this.disabled || this.$emit("open");
    }
  }
}), Fa = ["id", "disabled"];
function _a(i, t, e, s, n, r) {
  const o = Bt("font-awesome-icon");
  return y(), C("button", {
    id: i.id,
    class: Ce(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    ve(o, { icon: ["fass", "hammer"] })
  ], 10, Fa);
}
const qa = /* @__PURE__ */ ti(Ra, [["render", _a]]), Ba = { id: "uploader" }, Ha = {
  key: 0,
  class: "debug"
}, Ga = {
  key: 1,
  class: "selected-files"
}, Wa = ["src"], Na = ["onClick"], Ua = !0, ja = /* @__PURE__ */ Oe({
  __name: "ImageUpload",
  props: {
    shapeId: {
      type: String,
      required: !0
    },
    prefix: {
      type: String,
      required: !0
    },
    uniqueId: {
      type: String,
      required: !0
    },
    env: {
      type: String,
      required: !1,
      default: "production"
    },
    maxImages: {
      type: Number,
      required: !1,
      default: 5
    },
    images: {
      type: Array,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(i, { emit: t }) {
    const e = $t(() => Promise.resolve().then(() => Ki)), s = H(null), n = H({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (h) => ["image/jpeg", "image/jpg", "image/png"].includes(h.type), a = () => {
      var h;
      (h = s.value) == null || h.click();
    }, u = (h) => {
      const m = h.target, w = m.files;
      if (!w) return;
      const R = Array.from(w), N = R.filter((v) => !l(v));
      if (N.length > 0) {
        const v = N.map((T) => T.name).join(", ");
        alert(`Invalid file type(s): ${v}
Only JPG and PNG files are allowed.`), m.value = "";
        return;
      }
      const J = n.value.files || [];
      if (J.length + R.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), m.value = "";
        return;
      }
      const Q = [...J, ...R], ae = f(Q), G = Q.map((v, T) => ({
        originalName: v.name,
        newName: `${r.prefix}-${T + 1}-${r.uniqueId}${p(v.name)}`
      })), Y = {
        shapeId: r.shapeId,
        files: Q,
        previewUrls: ae,
        metadata: G
      };
      n.value = Y, o("update", Y), m.value = "";
    }, f = (h) => h.map((m) => URL.createObjectURL(m)), p = (h) => h.substring(h.lastIndexOf(".")), I = (h) => {
      URL.revokeObjectURL(n.value.previewUrls[h]);
      const m = [...n.value.files], w = [...n.value.previewUrls], R = [...n.value.metadata];
      if (m.splice(h, 1), w.splice(h, 1), R.splice(h, 1), m.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const N = {
          shapeId: r.shapeId,
          files: m,
          previewUrls: w,
          metadata: R
        };
        n.value = N, o("update", N);
      }
    };
    return $r(() => {
      var h;
      (h = n.value) != null && h.previewUrls && n.value.previewUrls.forEach((m) => URL.revokeObjectURL(m));
    }), ft(() => {
      n.value.shapeId = r.shapeId;
      const h = r.images.find((m) => m.shapeId === r.shapeId);
      if (h) {
        const m = f(h.files);
        n.value = {
          ...h,
          previewUrls: m
        };
      }
    }), (h, m) => {
      var R;
      const w = Bt("font-awesome-icon");
      return y(), C("div", Ba, [
        i.env === "development" && Ua ? (y(), C("div", Ha, [
          ve(x(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        M("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        M("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          ve(w, { icon: ["fass", "files"] })
        ]),
        (R = n.value.files) != null && R.length ? (y(), C("div", Ga, [
          (y(!0), C(Se, null, De(n.value.files, (N, J) => (y(), C("div", {
            key: J,
            class: "selected-file"
          }, [
            M("img", {
              src: n.value.previewUrls[J],
              alt: "Preview"
            }, null, 8, Wa),
            M("button", {
              class: "remove-file",
              type: "button",
              onClick: (z) => I(J)
            }, [
              ve(w, { icon: ["fass", "trash"] })
            ], 8, Na)
          ]))), 128))
        ])) : W("", !0)
      ]);
    };
  }
}), za = /* @__PURE__ */ ti(ja, [["__scopeId", "data-v-0836e586"]]);
function Va(i) {
  var l, a;
  const t = i.x, e = i.x + i.l, s = tt().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = tt().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(Fi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(Fi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((a = (l = i == null ? void 0 : i.stock) == null ? void 0 : l.saw) == null ? void 0 : a.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Ya() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(mn(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(vn(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function Un(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? Xa.call(this, r, o, t[n]) : Ka.call(this, r, o, t[n]);
  });
}
function Xa(i, t, e) {
  const s = tt().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = jn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Fi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, f;
    return ((f = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : f.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function Ka(i, t, e) {
  const s = tt().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = jn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(_i(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  Za(r), this.axes.cutMeasurementYAxes.push(r);
}
function jn(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function Za(i) {
  i.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (t, e, s) => {
    var n, r;
    return ((r = (n = s[e]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.height) + 10;
  }).attr("dx", (t, e, s) => {
    var n, r;
    return ((r = (n = s[e]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.width) / 4;
  }).attr("transform", (t, e, s) => {
    var n, r;
    return "rotate(90) translate(" + ((r = (n = s[e]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.width) / 4 + ")";
  });
}
function di() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Ja() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Xi() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Qa() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text id").text((t) => eu.call(this, t)).classed("hidden", (t, e, s) => this.isTextHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (i) => i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text name").text((t) => tu.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (i) => i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text length").text((t) => Zs.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((t) => Zs.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text width").text((t) => iu.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (t, e, s) => {
      const n = s[e], r = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    }),
    (i) => i.attr("transform", (t, e, s) => {
      const n = s[e], r = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    })
  );
}
function eu(i) {
  var t, e;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const s = i.guillotineData.myStripDirection, n = i.addedAsGroup;
          let r = "";
          if (s === "l" ? r = `→ ${i.id}` : s === "w" && (r = `↑ ${i.id}`), (e = i == null ? void 0 : i.priority) != null && e[(t = i == null ? void 0 : i.stock) == null ? void 0 : t.parentID] && (r += "P"), n && (r += "G"), r.length) return r;
        }
        break;
      case "groups":
        {
          const s = i.addedAsGroup;
          if (s) return s.split(".")[0].toUpperCase();
        }
        break;
      case "positions":
        return i.id;
    }
  return i.parentID ? i.parentID : i.getParentID();
}
function tu(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function Zs(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.l, o: this.numberConfig }).toString();
}
function iu(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.w, o: this.numberConfig }).toString();
}
function su(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = ll(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let r = function(u) {
        return `${u.x1}-${u.y1}-${u.x2}-${u.y2}`;
      }, o = function(u) {
        u.attr("class", "ray").attr("x1", (f) => this.scales.xPositionScale(f.x1)).attr("x2", (f) => this.scales.xPositionScale(f.x2)).attr("y1", (f) => this.scales.yPositionScale(f.y1)).attr("y2", (f) => this.scales.yPositionScale(f.y2));
      };
      if (this.state.env !== "development") return;
      const a = Dn(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((f) => o.call(this, f)),
        (u) => u.call((f) => o.call(this, f)),
        (u) => u.remove()
      );
    }
    s = al(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Ht();
  for (const r of e.toArray()) {
    const o = On(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = rl(i, o, this.props.stock.value);
      l && n.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new Ee(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Ee(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Ee(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      0 + (this.props.stock.value.trim.y1 ?? 0)
    ),
    new Ee(
      0 + (this.props.stock.value.trim.x1 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    ),
    new Ee(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    )
  ].forEach((r) => n.addPoint(r)), t = n.toArray()) : (n.addPoint(new Ee(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), t = n.toArray());
  for (let r = t.length; r--; ) {
    const o = t[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        t.splice(r, 1);
        break;
      }
  }
  return nu.call(this, t, i), ru.call(this, t, i), !!(t != null && t.length);
}
function nu(i, t) {
  function e(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n, r) {
    n.attr("data-id", (o, l) => l).attr("class", "shape ghost").attr("x", (o) => (r.x = o.x, this.getRectangleCoordinate(r, "x"))).attr("y", (o) => (r.y = o.y, this.getRectangleCoordinate(r, "y"))).attr("width", this.getWidthAttribute(r)).attr("height", this.getHeightAttribute(r)).on("mousedown", (o, l) => {
      this.callbacks.onMoveShape(r, l);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(i, e).join(
    (n) => n.append("rect").call((r) => s.call(this, r, t)),
    (n) => n.call((r) => s.call(this, r, t)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), Me(this).classed("hover", !0), Me(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Me(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function ru(i, t) {
  function e(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n) {
    n.attr("class", "dot").attr("cx", (r) => this.scales.xPositionScale(r.x)).attr("cy", (r) => this.scales.yPositionScale(r.y)).attr("r", 6).on("mousedown", (r, o) => {
      this.callbacks.onMoveShape(t, o);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(i, e).join(
    (n) => n.append("circle").call((r) => s.call(this, r)),
    (n) => n.call((r) => s.call(this, r)),
    (n) => n.remove()
  ), t.x = 0, t.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), Me(this).classed("hover", !0);
      const r = Me(this).attr("data-id"), o = Me(`.ghost[data-id="${r}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Me(this).classed("hover", !1);
      const r = Me(this).attr("data-id");
      Me(`.ghost[data-id="${r}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
const ou = (i) => {
  const t = i._banding ? Object.entries(i._banding).filter(([e, s]) => s && !["a", "b", "c", "d"].includes(e)).map(([e, s]) => `${e}:${s}`).join("-") : "nobanding";
  return `${i.parentID}-${i.x}-${i.y}-${i.w}-${i.l}-${t}`;
};
function lu() {
  if (!this.props.containerWidth) return;
  di.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && uu.call(this), au.call(this);
}
function au() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, ou).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return Js.call(this, t), Qs.call(this, t), t.on("mousedown", en.bind(this)), t;
    },
    (i) => (Js.call(this, i), Qs.call(this, i), i.on("mousedown", en.bind(this)), i),
    (i) => i.remove()
  ), this.props.shapes.value.length > 0 && mu.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Qa.call(this)), this.selections.shapeWrappers.size() > 0;
}
function uu() {
  var n;
  let i = 1 / 0, t = -1 / 0;
  for (const r of this.props.shapes.value) {
    const o = (n = r == null ? void 0 : r.bestScore) == null ? void 0 : n.total;
    if (o !== 0 && o !== null && o !== void 0) {
      i = o, t = o;
      break;
    }
  }
  const e = this.props.shapes.value.reduce((r, o) => {
    var a;
    const l = (a = o == null ? void 0 : o.bestScore) == null ? void 0 : a.total;
    return l === 0 || l === null || l === void 0 ? r : l < r ? l : r;
  }, i), s = this.props.shapes.value.reduce((r, o) => {
    var a;
    const l = (a = o == null ? void 0 : o.bestScore) == null ? void 0 : a.total;
    return l == null ? r : l > r ? l : r;
  }, t);
  this.scales.scoreColorScale = li([Ft(251, 224, 255), Ft(122, 0, 138)]).domain([e, s]);
}
function Js(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => {
    var s;
    return (s = fi.call(this, e)) == null ? void 0 : s.toString();
  });
  this.selections.shapeRectangles ? this.selections.shapeRectangles = yn(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function cu(i) {
  return {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1",
    l1: "w1",
    l2: "w2",
    w1: "l2",
    w2: "l1"
  }[i] || i;
}
function Qs(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (t) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const e = Me(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    var n;
    const s = Me(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", (n = fi.call(this, e)) == null ? void 0 : n.toString());
  }, { passive: !0 });
}
function en(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && hu.call(this, i, t), (this.settings.app || this.settings.embed) && pu.call(this, i, t), this.state.device === "desktop" && (Xi.call(this), Va.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function hu(i, t) {
  if (console.clear(), t) {
    let e;
    switch (this.state.debug) {
      case "guillotine":
        e = [
          "id",
          "placementOrder",
          "priority",
          "guillotineData.myPhase",
          "guillotineData.myStripDirection",
          "guillotineData.myStripParent",
          "guillotineData.firstShape",
          "addedAsGroup"
        ], fu.call(this, t);
        break;
      case "groups":
        e = ["id", "addedAsGroup"];
        break;
      case "score":
        e = ["id", "bestScore.score"];
        break;
      default:
        e = ["id", "placementOrder", "priority", "addedAsGroup", "bestScore.score"];
    }
    console.table(du(t, e)), console.log(t.bestScore.score);
  }
}
function du(i, t) {
  return t.reduce((e, s) => {
    const n = Du(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function fu(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function pu(i, t) {
  var n, r;
  const e = {
    name: t.name,
    id: t.id,
    x: t.x,
    y: t.y,
    l: t.l,
    w: t.w,
    banding: t != null && t.banding && typeof t.banding == "object" ? t.banding : null,
    rot: t.rot,
    stock: (n = t == null ? void 0 : t.stock) == null ? void 0 : n.id,
    color: (r = fi.call(this, t)) == null ? void 0 : r.toString(),
    notes: t == null ? void 0 : t.notes
  };
  this.state.env === "development" && console.log(e);
  const s = new CustomEvent("partClick", {
    detail: e
  });
  if (this.selections.htmlEl.dispatchEvent(s), this.settings.app) return !1;
}
function fi(i) {
  var t;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (i.addedAsGroup)
          return Ft(43, 156, 16);
        if (i.guillotineData.firstShape)
          return Ft(255, 171, 231);
        if (typeof i.guillotineData.myPhase == "number") {
          const e = [0, 115, 255], s = [176, 255, 231];
          return `rgb(${e.map((r, o) => Math.round(r + i.guillotineData.myPhase / 5 * (s[o] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (i.addedAsGroup !== !1)
          return Ft(43, 156, 16);
        break;
      case "priorityShapes":
        if (i != null && i.priority && ((t = i.priority) != null && t[i.stock.parentID]))
          return Ft(139, 171, 46);
        break;
      case "score":
        return this.scales.scoreColorScale(i.bestScore.total);
    }
  return this.scales.shapeColorScale(parseInt(i.parentID));
}
function gu(i) {
  const t = [];
  for (const e of i)
    if (e != null && e._banding)
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = cu.call(this, s));
        const o = vu.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function tn(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Di.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Di.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Di.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Di.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function mu(i) {
  if (!this.settings.main) return;
  const t = gu.call(this, i), e = (s) => `${s.x1}-${s.y1}-${s.x2}-${s.y2}-${s.type}`;
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t, e).join(
    (s) => s.append("line").call((n) => tn.call(this, n)),
    (s) => s.call((n) => tn.call(this, n)),
    (s) => s.remove()
  );
}
function Di(i, t) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[t]) ?? 0;
}
function vu(i, t) {
  const e = {
    x1: i.x,
    x2: i.x,
    y1: i.y,
    y2: i.y,
    type: t
  };
  switch (t) {
    case "x1":
      e.y2 = i.y + i.w;
      break;
    case "x2":
      e.x1 = e.x2 = i.x + i.l, e.y2 = i.y + i.w;
      break;
    case "y1":
      e.x2 = i.x + i.l;
      break;
    case "y2":
      e.y1 = e.y2 = i.y + i.w, e.x2 = i.x + i.l;
      break;
    default:
      return null;
  }
  return e;
}
function yu(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const sn = (i) => `${i.w}-${i.l}-${i.grain}`;
function nn(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function rn(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function bu() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Ya.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], sn).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => nn.call(this, t)),
    (i) => i.call((t) => nn.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], sn).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => rn.call(this, t)),
    (i) => i.call((t) => rn.call(this, t)),
    (i) => i.remove()
  );
}
function zn(i) {
  return `${i.x}-${i.y}-${i.w}-${i.l}`;
}
function on({ parent: i, near: t, far: e }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [i, t, e].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, zn).join(
    (n) => n.append("rect").attr("class", "segment").call((r) => ln.call(this, r)),
    (n) => n.call((r) => ln.call(this, r)),
    (n) => n.remove()
  ), this.state.env === "development" && wu.call(this, s), !this.settings.app && this.state.env === "development" && xu.call(this);
}
function ln(i) {
  return i.classed("offcut", (t) => t.offcut).classed("near", (t) => t.segmentType === "near").classed("far", (t) => t.segmentType === "far").classed("parent", (t, e) => t.id !== "root" && e === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function wu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, zn).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => an.call(this, e)),
    (t) => t.call((e) => an.call(this, e)),
    (t) => t.remove()
  );
}
function an(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").text((t) => Su.call(this, t)).attr("dominant-baseline", "middle");
}
function Su(i) {
  if (this.state.env !== "development" || !i || i != null && i.offcut) return null;
  const t = i.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${t} ${i.id}` : t;
}
function xu() {
  this.selections.segmentRectangles.on("mousedown", function(i, t) {
    console.log("segment", `[${(t == null ? void 0 : t.parentID) || "-"}]->[${t.id}] {P${t.phase}} ${t.l}x${t.w} ${t.cutDirection} ${t.hasHeadCut ? "HEAD" : "NORM"}`);
  });
}
function Vn(i) {
  var n;
  const t = (n = i == null ? void 0 : i.guillotineData) == null ? void 0 : n.parentSegmentID;
  if (!this.props.segments.value.length) return !1;
  let e;
  if (t ? e = this.props.segments.value.find((r) => r.id === t) : e = this.props.segments.value.find((r) => r.segmentType === "root"), e === void 0) return !1;
  const s = e == null ? void 0 : e.children;
  return s != null && s.length ? {
    parent: e,
    children: s
  } : !1;
}
const { currentCutIndex: Yn } = gs();
function ts(i) {
  return `${i.stock.saw.bladeWidth}-${i.x1}-${i.y1}-${i.x2}-${i.y2}`;
}
function ku() {
  this.props.containerWidth && (this.selections.cutLabelGroup && this.selections.cutLabelGroup.remove(), this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, ts).join(
    (i) => i.append("line").attr("class", "cut").call((t) => un.call(this, t)),
    (i) => i.call((t) => un.call(this, t)),
    (i) => i.remove()
  ), this.selections.cutLabelGroup = this.selections.cutGroup.append("g").attr("class", "label-group"), this.selections.cutLabelGroup.selectAll("*").remove(), this.selections.cutBackgrounds = this.selections.cutLabelGroup.selectAll("circle.label-background").data(this.props.cuts.value, ts).join(
    (i) => i.append("circle").attr("class", "label-background").call((t) => cn.call(this, t)),
    (i) => i.call((t) => cn.call(this, t)),
    (i) => i.remove()
  ), this.selections.cutLabels = this.selections.cutLabelGroup.selectAll("text.cut-label").data(this.props.cuts.value, ts).join(
    (i) => i.append("text").attr("class", "cut-label").call((t) => hn.call(this, t)),
    (i) => i.call((t) => hn.call(this, t)),
    (i) => i.remove()
  ), Zn.call(this));
}
function un(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim).classed("head", (t) => t.isHead);
}
function cn(i) {
  return i.attr("cx", (t) => {
    const e = this.scales.xPositionScale(t.getVisCoords("x1")), s = this.scales.xPositionScale(t.getVisCoords("x2"));
    return e + (s - e) / 2;
  }).attr("cy", (t) => {
    const e = this.scales.yPositionScale(t.getVisCoords("y1")), s = this.scales.yPositionScale(t.getVisCoords("y2"));
    return e + (s - e) / 2;
  }).attr("r", 8).attr("fill", "black");
}
function hn(i) {
  return i.attr("x", (t) => {
    const e = this.scales.xPositionScale(t.getVisCoords("x1")), s = this.scales.xPositionScale(t.getVisCoords("x2"));
    return e + (s - e) / 2;
  }).attr("y", (t) => {
    const e = this.scales.yPositionScale(t.getVisCoords("y1")), s = this.scales.yPositionScale(t.getVisCoords("y2"));
    return e + (s - e) / 2 - 0.5;
  }).attr("text-anchor", "middle").attr("dominant-baseline", "central").attr("fill", "white").attr("dy", "0.1em").text((t) => {
    var e;
    return typeof ((e = t.guillotineData) == null ? void 0 : e.order) == "number" ? t.guillotineData.order + 1 : "-";
  });
}
function Xn(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function Kn(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function Cu(i, t, e, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] || !s && r.guillotineData.parentSegmentID === t ? "visible" : "hidden"), Yn.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (r) => r.isPtxDummyCut), s || Lu.call(this, i, t);
}
function Iu(i, t, e, s, n) {
  this.selections.cutLines.style("visibility", (o, l) => l <= t ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o, l) => l <= t ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o, l) => l <= t ? "visible" : "hidden"));
  let r;
  if ((i == null ? void 0 : i.dimension) === "l" ? r = [
    [0 + (e.y1 ?? 0), i.y1 - n],
    [i.y1 + n, i.stock.w - (e != null && e.y2 ? e.y2 : 0)]
  ] : (i == null ? void 0 : i.dimension) === "w" && (r = [
    [0 + (e.x1 ?? 0), i.x1 - n],
    [i.x1 + n, i.stock.l - (e != null && e.x2 ? e.x2 : 0)]
  ]), r != null && r.length) {
    const o = [
      r[0][1] - r[0][0],
      r[1][1] - r[1][0]
    ];
    this.state.device === "desktop" && !i.isTrim && Un.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function Zn() {
  var i, t;
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), (i = this.selections) != null && i.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), (t = this.selections) != null && t.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (e) => {
    const s = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return Math.max(1, Math.ceil(s));
  }), di.call(this), Xi.call(this);
}
function Lu(i, t) {
  var p, I, h, m;
  const e = (p = i == null ? void 0 : i.guillotineData) == null ? void 0 : p.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (w) => Xn(w, t, e)), this.selections.cutLines.classed("inside-segment", (w) => Kn(w, t));
  const s = Vn.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = Jn(i, r);
  if (!o) return;
  let l = [], a;
  const u = this.getHalfBladeWidth(i.stock), f = i.dimension === "l" ? "y" : "x";
  (i == null ? void 0 : i.dimension) === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      i.y1 + u,
      n.y + n.w
    ]
  ], a = [(I = i == null ? void 0 : i.distances) == null ? void 0 : I.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      i.x1 + u,
      n.x + n.l
    ]
  ], a = [(h = i == null ? void 0 : i.distances) == null ? void 0 : h.left, (m = i == null ? void 0 : i.distances) == null ? void 0 : m.right]), this.state.device === "desktop" && !i.isTrim && a && Un.call(this, l, a, f);
}
function Pu(i = null, t = "") {
  var h, m, w, R;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const N = this.props.cuts.value.filter((J) => J.isTrim);
    i = i + N.length, i - N.length >= this.props.cuts.value.length - N.length && (Yn.value = this.props.cuts.value.length - N.length - 1);
  }
  const e = this.props.cuts.value[i];
  if (!e) return;
  if (di.call(this), Xi.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const N = this.selections.cutLines.nodes()[i].parentElement;
    if (!N) return;
    Me(N).raise();
  }
  const s = (h = e.guillotineData) == null ? void 0 : h.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (m = e == null ? void 0 : e.stock) == null ? void 0 : m.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((w = e == null ? void 0 : e.stock) == null ? void 0 : w.cutType) && s !== null && typeof s < "u" ? Cu.call(this, e, s, l, t) : Iu.call(this, e, i, o, r, n), $u.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = Vn.call(this, e);
  if (a === !1) return;
  const { parent: u, children: f } = a;
  if (!((R = e == null ? void 0 : e.guillotineData) != null && R.parentSegmentID))
    return on.call(this, { parent: u });
  const { near: p, far: I } = Jn(e, f);
  on.call(this, { parent: u, near: p, far: I });
}
function Jn(i, t) {
  const e = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = t.find((o) => o.segmentType === "near" && o[e] + o[s] === i[e + "1"] - i.halfBladeWidth()), r = t.find((o) => o.segmentType === "far" && o[e] === i[e + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function $u(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (Xn(s, e, l) || Kn(s, e)) && (o += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Tu(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Du(i, t) {
  return Kt(i, t);
}
class Ou {
  constructor(t) {
    c(this, "config");
    c(this, "props");
    c(this, "settings");
    c(this, "options");
    c(this, "numberConfig");
    c(this, "callbacks");
    c(this, "selections");
    c(this, "state");
    c(this, "scales");
    c(this, "axes");
    c(this, "formatNumber", (t) => S({
      v: t,
      o: this.numberConfig
    }).toString());
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Me(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: tt(),
      yScale: tt(),
      yPositionScale: tt(),
      xPositionScale: tt(),
      yAxisScale: tt(),
      measurementScale: tt(),
      shapeColorScale: li(),
      scoreColorScale: li()
    }, this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    }, this.state = {
      env: "production",
      device: "desktop",
      debug: "guillotine",
      hasTouch: !1,
      stretched: !1,
      moving: !1,
      moveRotation: !1,
      highlightguillotine: !1,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      padding: 0,
      mobileBreakpoint: 768,
      axisSpacing: 20,
      shapeColors: {}
    }, this.props = t.props, this.settings = t.settings, this.options = t.options, this.callbacks = t.callbacks, this.numberConfig = t.numberConfig, this.initColors(t), this.initNumbers(t), this.init());
  }
  initColors(t) {
    const e = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, s = (n, r) => Ft("#" + (Tu(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = li([
      this.config.colors.partA,
      this.config.colors.partB
    ]);
  }
  initNumbers(t) {
    this.numberConfig = t.numberConfig, (this.numberConfig.decimalPlaces === null || this.numberConfig.decimalPlaces === void 0 || isNaN(this.numberConfig.decimalPlaces)) && (this.numberConfig.decimalPlaces = 2), (this.numberConfig.fractionRoundTo === null || this.numberConfig.fractionRoundTo === void 0 || isNaN(this.numberConfig.fractionRoundTo)) && (this.numberConfig.fractionRoundTo = 0);
  }
  init() {
    this.state.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    const t = this.selections.htmlEl.querySelector("svg");
    if (t === null) {
      const e = this.selections.el.append("svg").attr("class", "vis");
      if (e === null) return;
      e.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), e.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), e.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = e;
    } else
      this.selections.svgCanvas = Me(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, e, s) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), e && (this.numberConfig.decimalPlaces = e), s && (this.numberConfig.fractionRoundTo = s));
  }
  trimNameToFit(t, e) {
    function s(n, r, o) {
      const l = o[r], a = Me(l);
      a.text(n.name);
      let u = a.text();
      const f = a.node();
      if (!f) return;
      let p = f.getComputedTextLength();
      const I = this.getWidthAttribute(n) - 20;
      for (; p > I && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), p = a.node().getComputedTextLength();
    }
    t.each(s.bind(e));
  }
  setDevice() {
    if (!(!this.selections.htmlEl || this.selections.htmlEl.style.display === "none") && this.selections.htmlEl.offsetWidth) {
      if (this.props.containerWidth.value === 0) return !1;
      this.settings.main ? this.props.containerWidth.value <= this.state.mobileBreakpoint || this.settings.app ? (this.state.device = "mobile", this.state.padding = 0) : (this.state.device = "desktop", this.state.padding = 50) : this.state.padding = 0, this.state.w = this.props.containerWidth.value;
    }
  }
  // find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const t = this.props.stockList.value.filter((n) => n.used);
    if (!t) return [null, null];
    const e = t.reduce((n, r) => n.l > r.l ? n : r), s = t.reduce((n, r) => n.w > r.w ? n : r);
    return [e, s];
  }
  debounce(t, e, s = !1) {
    let n;
    return (...r) => new Promise((o) => {
      const l = () => {
        n = null, s || o(t.apply(this, r));
      };
      clearTimeout(n), s && !n && o(t.apply(this, r)), n = setTimeout(l, e);
    });
  }
  requiresStretch(t, e = null) {
    return t ? (e === null && (e = t.w / t.l), e < 0.15) : !1;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value) return;
    this.state.w = this.props.containerWidth.value;
    const t = this.props.stock.value.w / this.props.stock.value.l;
    this.scales.xScale.domain([0, this.props.stock.value.l]).range([this.state.padding, this.state.w - this.state.padding]), this.requiresStretch(this.props.stock.value, t) && this.options.enableStretch ? (this.state.h = this.selections.htmlEl.clientWidth * 0.15 + this.state.padding * 2, this.state.stretched = !0) : (this.state.h = this.scales.xScale(this.props.stock.value.getShortSide()) + this.state.padding, this.state.stretched = !1), this.scales.yScale.domain([0, this.props.stock.value.w]).range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, this.props.stock.value.w] : [this.props.stock.value.w, 0]).range([this.state.padding, this.state.h - this.state.padding]), this.scales.yPositionScale.domain([0, this.props.stock.value.w]).range(this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]), t > 2 && (this.state.w = this.selections.htmlEl.clientWidth / t + this.state.padding * 2, this.scales.xScale.domain([0, this.props.stock.value.l]).range([this.state.padding, this.state.w - this.state.padding]), this.state.h = this.scales.xScale(this.props.stock.value.getShortSide()) + this.state.padding), this.scales.xPositionScale.domain([0, this.props.stock.value.l]).range(this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]), this.scales.measurementScale.domain([0, this.props.stock.value.l]).range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 && (t > 2 ? this.selections.el.style("width", this.state.w + "px") : this.selections.el.style("width", ""), this.selections.el.style("height", this.state.h + "px"));
  }
  //--------------------------------------------------------
  // FIND
  //--------------------------------------------------------
  findShapeElement(t) {
    const e = this.selections.shapeWrappers.filter((s) => s.id === t);
    return e.empty() ? null : e.node();
  }
  findShape(t) {
    const e = this.findShapeElement.call(this, t);
    e && this.selectShape.call(this, e);
  }
  selectShape(t) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => fi.call(this, s));
    const e = Me(t).select("rect");
    if (e) {
      e.classed("selected", !0), e.style("fill", this.config.colors.partSelected.toString());
      const s = Me(t).datum();
      this.callbacks.onShapeSelect(s);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    lu.call(this);
  }
  drawStock() {
    bu.call(this);
  }
  drawCuts() {
    ku.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(t) {
    return t != null && t.l ? this.scales.xScale(t.l) - this.state.padding : 0;
  }
  getHeightAttribute(t) {
    return t != null && t.w ? this.scales.yScale(t.w) - this.state.padding : 0;
  }
  getRectangleCoordinate(t, e, s, n) {
    let r;
    if (e === "x") {
      let o;
      switch (s) {
        case "center":
          o = this.scales.xPositionScale(t.x + t.l / 2), n && (o += n);
          break;
        case "right":
          o = this.scales.xPositionScale(t.x + t.l), n && (o -= n);
          break;
        case "left":
        default:
          o = this.scales.xPositionScale(this.settings.flipX ? t.x - t.l : t.x), n && (o -= n);
      }
      r = o;
    } else if (e === "y") {
      let o;
      switch (s) {
        case "center":
          o = this.scales.yPositionScale(t.y + t.w / 2), n && (o += n);
          break;
        case "bottom":
          o = this.scales.yPositionScale(this.settings.flipY ? t.y + t.w : t.y), n && (o += n);
          break;
        case "top":
        default:
          o = this.scales.yPositionScale(this.settings.flipY ? t.y : t.y + t.w), n && (o -= n);
      }
      r = o;
    }
    return r;
  }
  // Blade Width Methods
  getBladeWidth(t = null) {
    return k(t) && t !== null ? t.getBladeWidth() : 0;
  }
  getHalfBladeWidth(t = null) {
    const e = this.getBladeWidth(t);
    return e !== void 0 && e > 0 ? e / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), di.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Ja.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Xi.call(this);
  }
  removeSegments() {
    this.selections.segmentGroup && this.selections.segmentGroup.selectAll("*").remove();
  }
  removeGroups() {
    this.selections.groupGroup && this.selections.groupGroup.selectAll("*").remove();
  }
  removePositions() {
    this.selections.ghostShapeGroup && this.selections.ghostShapeGroup.selectAll("*").remove(), this.removePlacementPositions();
  }
  removePlacementPositions() {
    this.selections.dotGroup && this.selections.dotGroup.selectAll("*").remove();
  }
  removeAll() {
    this.removePositions(), this.removePlacementPositions(), this.removeShapes(), this.removeStock(), this.removeCuts(), this.removeSegments();
  }
  // Collision Detection
  collision(t, e, s) {
    if (t.id === e.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      t.x < e.x + e.l + this.getBladeWidth(s) && // 2 right
      t.x + t.l + this.getBladeWidth(s) > e.x && // 3 bottom
      t.y < e.y + e.w + this.getBladeWidth(s) && // 4 top
      t.y + t.w + this.getBladeWidth(s) > e.y
    );
  }
  // TOGGLE
  //--------------------------------------------------------
  toggleShapes(t = !1) {
    t ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none"));
  }
  toggleSegments(t = !0) {
    t ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none");
  }
  toggleCuts(t = !0) {
    t ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none");
  }
  // Padding Helper
  addPadding(t) {
    return t + this.state.padding;
  }
  // Text Visibility Helpers
  isTextHidden(t, e, s) {
    const n = s[e];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(t.l), l = this.scales.yScale(t.w);
    return r.width >= o || r.height >= l - this.state.padding;
  }
  isNameHidden(t, e, s) {
    const n = s[e];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return r.width >= o || l < 40;
  }
  isLengthHidden(t, e, s) {
    var a, u;
    if (this.settings.app) {
      const f = this.scales.measurementScale(t.l), p = this.scales.measurementScale(t.w);
      return f < 50 || p < 50;
    }
    if (((u = (a = t == null ? void 0 : t.stock) == null ? void 0 : a.saw) == null ? void 0 : u.stockType) === "linear") return !1;
    const n = s[e];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return r.width >= o || l < 30;
  }
  isWidthHidden(t, e, s) {
    if (this.settings.app)
      return this.scales.measurementScale(t.l) < 50 || this.scales.measurementScale(t.w) < 50;
    const r = s[e].getBBox();
    return this.scales.measurementScale(t.l) < 30 || r.height >= this.scales.measurementScale(t.w);
  }
  // Group Management
  /* initGroups( groups: InputUserGroup[] )
  	{
  		if ( !groups || !groups?.length || !this.settings.main || !this.props.containerWidth )
  			return false;
  
  		this.resetGroups();
  
  		this.selections.groupRectangles = this.selections.groupGroup
  			.selectAll( 'rect' )
  			.data( groups )
  			.join( 'rect' )
  			.attr( 'class', 'group' )
  			.attr( 'x', ( g ) => this.getRectangleCoordinate( g, 'x' ) )
  			.attr( 'y', ( g ) => this.getRectangleCoordinate( g, 'y' ) )
  			.attr( 'width', ( g ) => this.getWidthAttribute( g ) )
  			.attr( 'height', ( g ) => this.getHeightAttribute( g ) );
  
  		this.selections.groupGroup.attr( 'display', 'block' );
  
  		if ( this.state.env === 'development' )
  		{
  			this.setupGroupDebugEvents();
  		}
  	} */
  /* private setupGroupDebugEvents()
  {
  	if ( !this.state.hasTouch )
  	{
  		this.selections.groupRectangles
  			.on( 'mouseover', function()
  			{
  				d3.select( this ).classed( 'hover', true );
  			} )
  			.on( 'mouseout', function()
  			{
  				d3.select( this ).classed( 'hover', false );
  			} )
  			.on( 'mousedown', ( event, group ) =>
  			{
  				console.log( 'Group:', {
  					dimensions: {
  						x: group.x,
  						y: group.y,
  						width: group.w,
  						length: group.l
  					},
  					shapes: group.shapes.map( s => ( {
  						id: s.id,
  						parentId: s.parentID,
  						addedAsGroup: s.addedAsGroup
  					} ) )
  				} );
  			} );
  	}
  } */
  // Clear Selection
  clearSelection() {
    var t, e;
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => fi.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    di.call(this);
  }
  updateShapeVisibility() {
    yu.call(this);
  }
  drawPositions(t) {
    su.call(this, t);
  }
  showCut(t) {
    Pu.call(this, t);
  }
  resetCuts() {
    Zn.call(this);
  }
}
const Au = ["id"], Eu = /* @__PURE__ */ Oe({
  __name: "Diagram",
  props: {
    elementId: {},
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: !0 },
    stockId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: !1 },
    enableStretch: { type: Boolean, default: !0 },
    moveMode: { default: () => H(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape"],
  setup(i, { expose: t, emit: e }) {
    const {
      r: s,
      activeStock: n,
      activeShapes: r,
      activeCuts: o,
      activeSegments: l,
      currentCutIndex: a,
      getStock: u,
      getShapes: f,
      getSegments: p,
      getCuts: I
    } = gs(), h = i, m = e, w = (ne) => {
      m("shape-colour-update", ne);
    }, R = (ne) => {
      ne != null && ne.id && m("shape-select", ne.id.toString());
    }, N = (ne) => {
      ne && m("add-to-parts-bin", ne);
    }, J = (ne, nt) => {
      ne && m("move-shape", ne, nt);
    }, z = H(0), Q = H(0), ae = H(null);
    let G, Y = H(!1);
    ft(() => le());
    const v = Z(() => ({
      format: h.numberFormat,
      decimals: h.decimalPlaces
    })), T = Z(() => h.stockId ? u(h.stockId) : n.value), K = Z(() => h.stockId ? f(h.stockId) : r.value), L = Z(() => h.main ? h.stockId ? I(h.stockId) : o.value : []), F = Z(() => h.main ? h.stockId ? p(h.stockId) : l.value : []);
    Tr(ae, (ne) => {
      const nt = ne[0], { width: rt } = nt.contentRect;
      rt > 0 && (z.value = rt);
    }), Dr(
      z,
      (ne) => {
        G && (ne <= 0 || (G.setDevice(), G.resetShapeAxes(), G.drawAll(), a.value !== null && (G.toggleSegments(!0), G.showCut(a.value))));
      },
      { throttle: 100 }
    ), h.main && (Le(() => n.value, (ne) => {
      ne && (z.value <= 0 || (G.setDevice(), G.resetCuts(), G.removeSegments(), G.drawStock(), G.drawShapes(), G.drawCuts()));
    }, { immediate: !1 }), Le(r, (ne) => {
      ne && (z.value <= 0 || (G.setDevice(), G.drawShapes()));
    }, { immediate: !1 }), Le(o, () => {
      z.value <= 0 || G.drawCuts();
    }, { immediate: !1 }), Le(a, () => {
      a.value !== null && (z.value <= 0 || (G.toggleSegments(!0), G.showCut(a.value)));
    }, { immediate: !1 }), Le(v, (ne) => {
      G.updateNumberFormat(ne.format, ne.decimals, null);
    }, { immediate: !1 }));
    const le = () => {
      const ne = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${h.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: h.numberFormat,
          decimalPlaces: h.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: h.colors || null,
        //[] check this
        settings: {
          main: h.main,
          app: !1,
          embed: !1,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: Q,
          containerWidth: z,
          stock: T,
          shapes: K,
          cuts: L,
          segments: F,
          stockList: s.stockList,
          moveMode: h.moveMode
        },
        options: {
          disableClick: h.disableClick,
          enableStretch: h.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: w,
          onShapeSelect: R,
          onAddToPartsBin: N,
          onMoveShape: J
        }
      };
      G = new Ou(ne), Y.value = !0;
    };
    return t({
      loaded: Y,
      toggleShapes: (ne = !1) => {
        G && G.toggleShapes(ne);
      },
      toggleCuts: (ne = !1) => {
        G && G.toggleCuts(ne);
      },
      toggleSegments: (ne = !1) => {
        G && G.toggleSegments(ne);
      },
      drawShapes: () => {
        G && G.drawShapes();
      },
      drawStock: () => {
        G && G.drawStock();
      },
      drawPositions: (ne) => {
        G && G.drawPositions(ne);
      },
      resetPositions: () => {
        G && G.removePositions();
      },
      findShape: (ne) => {
        G && G.findShape(ne);
      },
      clearSelection: () => {
        G && G.clearSelection();
      },
      resetCuts: () => {
        G && (G.toggleSegments(!1), G.resetCuts());
      },
      showCut: (ne) => {
        G && (G.toggleSegments(!0), G.showCut(ne));
      },
      requiresStretch: (ne) => {
        G && G.requiresStretch(ne);
      }
    }), (ne, nt) => (y(), C("div", {
      id: ne.elementId,
      ref_key: "diagramContainerRef",
      ref: ae,
      class: "diagram-container"
    }, null, 8, Au));
  }
}), Mu = {
  key: 0,
  class: "debug"
}, Ru = { key: 2 }, Fu = {
  key: 0,
  class: "row table-heading"
}, _u = {
  key: 0,
  class: "cell center"
}, qu = {
  key: 1,
  class: "cell delete"
}, Bu = { class: "cell" }, Hu = ["id", "disabled", "onClick"], Gu = {
  key: 0,
  class: "cell center"
}, Wu = ["onClick"], Nu = {
  key: 1,
  class: "cell"
}, Uu = ["aria-label", "onClick"], ju = { class: "button-wrapper main" }, zu = ["aria-label"], Vu = ["aria-label", "disabled"], Yu = ["aria-label"], Xu = { id: "part-count" }, Ku = {
  key: 3,
  id: "messages"
}, Zu = {
  key: 0,
  class: "heading"
}, Ju = { class: "content" }, Qu = {
  key: 4,
  id: "progress"
}, ec = !0, tc = /* @__PURE__ */ Oe({
  __name: "CheckoutCalculator",
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
    stock: {
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
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "result", "no-result", "log", "error"],
  setup(i, { expose: t, emit: e }) {
    const s = $t(() => Promise.resolve().then(() => fc)), n = $t(() => Promise.resolve().then(() => gc)), r = $t(() => Promise.resolve().then(() => Rc)), o = $t(() => Promise.resolve().then(() => Gc)), l = $t(() => Promise.resolve().then(() => Ki)), { t: a } = Ui(["main", "errors"]), { inputs: u, totalInputShapes: f, getShapeGrainSummary: p, updateNumberFormat: I, validateInputStock: h } = gn(), { r: m, updateFromResult: w, stackedStock: R, uniqueAddedShapes: N, uniqueUsedStock: J, activeStockId: z, setActiveStockId: Q } = gs(), { progress: ae, reset: G } = Nr(), { addNotice: Y } = ps(), { tip: v, update: T, hide: K } = Gr(), L = i, F = e, le = "production", se = H((navigator == null ? void 0 : navigator.language) || "en-US"), A = Or(null), q = window.location.hostname, j = H(!1), ie = H(!0), oe = Ar("Checkout/currentURL", window.location.href), ye = us(), de = H([]), We = H(!1), st = H(!1), E = H(!1), pt = H(!1), ne = H(!1), nt = H(Ll()), rt = H(!1), { socket: ot } = Wr({
      refs: {
        connected: j,
        thinking: E
      },
      callbacks: {
        onResult(d) {
          var P, B, D, V, O;
          const g = d.result;
          if (w(g), !((P = g.shapeList) != null && P.length) || !((B = g.stockList) != null && B.length)) {
            G(), Y({
              type: "error",
              message: Te(a("no_result")),
              additional: [Te(a("check_inputs"))]
            }), E.value = !1;
            return;
          }
          const b = {
            jobId: d.jobId,
            metadata: m.metadata.value,
            parts: N.value.map((_) => {
              var xe, kt, Ct;
              return {
                l: _.l,
                w: _.w,
                t: _ == null ? void 0 : _.t,
                material: _.material,
                orientationLock: _.orientationLock,
                q: (kt = (xe = m.metadata.value) == null ? void 0 : xe.addedPartTally) == null ? void 0 : kt[_.parentID],
                name: _.name,
                banding: _.banding,
                finish: _.finish,
                customData: _.customData,
                stockId: ((Ct = _ == null ? void 0 : _.stock) == null ? void 0 : Ct.id) || (_ == null ? void 0 : _.stockId)
              };
            }),
            stock: J.value.map((_) => {
              var xe, kt;
              return {
                id: _.id,
                name: _ == null ? void 0 : _.name,
                l: _.l,
                w: _.w,
                t: _ == null ? void 0 : _.t,
                material: _.material,
                q: (kt = (xe = m.metadata.value) == null ? void 0 : xe.usedStockTally) == null ? void 0 : kt[_.parentID],
                trim: _ == null ? void 0 : _.trim,
                cost: _ == null ? void 0 : _.cost,
                analysis: _ == null ? void 0 : _.analysis
                // type: s?.type
              };
            }),
            offcuts: m.offcuts.value.map((_) => ({
              l: _.l,
              w: _.w,
              t: (_ == null ? void 0 : _.t) ?? null,
              q: _.q,
              stockId: _.stockId
            })),
            inputs: {
              parts: u.inputShapes.value.map((_) => {
                const xe = { ..._ };
                return delete xe.listId, xe;
              })
            }
          };
          if ((O = (V = (D = m == null ? void 0 : m.metadata) == null ? void 0 : D.value) == null ? void 0 : V.unplacedParts) != null && O.length) {
            const _ = m.metadata.value.unplacedParts.map((xe) => xe.id).join();
            Y({
              type: "warning",
              message: Te(a("parts_not_fit")) + ": " + _
            });
          }
          F("result", b), E.value = !1;
        },
        onUser(d) {
          A.value = d;
        },
        onConnectError(d) {
          Y({
            type: "error",
            message: Te(a("cannot_connect")),
            additional: [d]
          });
        },
        onError(d) {
          Y({
            type: "error",
            message: Te(a("error_occurred")),
            additional: [d]
          });
        }
      }
    }), yt = {
      enable: {
        diagram: !0,
        focus: !0,
        click: !0,
        partName: !0,
        progressNumber: !0,
        orientation: !0,
        banding: !1,
        finish: !1,
        machining: !1,
        csvImport: !1,
        imageUpload: !1
      },
      colors: {
        partA: "#118ab2",
        partB: null,
        partHover: null,
        partSelected: null,
        stock: "#ffd166",
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      stackHeight: 100,
      maxParts: null,
      locale: (navigator == null ? void 0 : navigator.language) || "en-US",
      orientationModel: 0,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: null,
      cutPreference: null,
      guillotineOptions: {
        headCuts: !1
      },
      bladeWidth: null,
      stockType: null,
      minSpacing: 0,
      stockGrain: null,
      partTrim: 0
    }, X = gt(yt), ee = gt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Ke = H(null), Ue = H(!1), Wt = H(""), $e = H(""), Pe = gt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Be = H([]), _e = H([]), Et = H([]), Nt = H(!1), je = gt({
      numberFormat: "decimal",
      faces: { enabled: !0 },
      holes: { enabled: !1 },
      corners: {
        enabled: !1,
        types: []
      },
      banding: { enabled: !1 },
      hingeHoles: { enabled: !1 },
      shelfHoles: { enabled: !1 }
    }), be = gt({
      labels: [],
      pricing: {},
      options: {},
      keys: vt
    }), Ae = gt({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), ii = gt({
      parts: {
        sheet: [
          { id: "material", enabled: !1 },
          { id: "l", enabled: !0 },
          { id: "w", enabled: !0 },
          { id: "t", enabled: !1 },
          { id: "q", enabled: !0 },
          { id: "name", enabled: !0 },
          { id: "orientationLock", enabled: !0 },
          { id: "banding", enabled: !1 },
          { id: "finish", enabled: !1 },
          { id: "machining", enabled: !1 },
          { id: "imageUpload", enabled: !1 }
        ],
        linear: [
          { id: "l", enabled: !0 },
          { id: "q", enabled: !0 },
          { id: "name", enabled: !0 },
          { id: "finish", enabled: !1 },
          { id: "imageUpload", enabled: !1 }
        ],
        roll: [
          { id: "l", enabled: !0 },
          { id: "w", enabled: !0 },
          { id: "q", enabled: !0 },
          { id: "name", enabled: !0 },
          { id: "orientationLock", enabled: !0 },
          { id: "imageUpload", enabled: !1 }
        ]
      }
    }), Ut = H([]), vi = Z(() => {
      var g;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (g = Be.value[0]) == null ? void 0 : g.name,
          options: Be.value.map((b) => ({
            value: b.name,
            label: b.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: X.numberFormat === "decimal" ? "float" : "string",
          label: "thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "length",
          min: 0,
          placeholder: "l",
          required: !0,
          allowZero: !1
        },
        {
          id: "w",
          fieldMap: "w",
          type: "unitDependent",
          label: "width",
          placeholder: "w",
          min: 0,
          required: !0,
          allowZero: !1
        },
        {
          id: "q",
          fieldMap: "q",
          type: "integer",
          placeholder: "q",
          default: 1,
          label: "quantity",
          min: 0
        },
        {
          id: "name",
          fieldMap: "name",
          type: "string",
          placeholder: "name",
          label: "name"
        },
        {
          id: "orientationLock",
          w: "32px",
          label: "rotation",
          fieldMap: "orientationLock"
        },
        {
          id: "banding",
          w: "32px",
          label: "banding",
          fieldMap: "bandingOptions"
        },
        {
          id: "finish",
          type: "checkbox",
          w: "32px",
          label: "finish",
          fieldMap: "finish"
        },
        {
          id: "machining",
          w: "32px",
          label: "machining",
          fieldMap: "machining"
        },
        {
          id: "imageUpload",
          w: "32px",
          label: "image_upload",
          fieldMap: "imageUpload"
        }
      ], ...Ut.value];
    }), bt = Z(() => ea(
      ii,
      vi.value,
      "parts",
      ee.stockType,
      X.fieldOrder
    )), wt = Z(() => {
      let d = bt.value.length + 1;
      return u.inputShapes.value.length > 1 && d++, d;
    }), yi = Z(() => {
      const d = {
        id: "34px",
        del: "30px"
      }, g = [];
      for (const b of bt.value)
        b.id !== "trim" && g.push(b.w ?? "minmax(20px, 1fr)");
      return g.unshift(d.id), u.inputShapes.value.length > 1 && g.push(d.del), g.join(" ");
    }), $ = Z(() => ({
      fontSize: "11px",
      textAlign: "right",
      width: "100%",
      height: "auto",
      position: "relative",
      display: "flex",
      visibility: "visible",
      opacity: "1",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      paddingRight: "10px",
      marginTop: "10px",
      marginBottom: "2px",
      userSelect: "none",
      alignItems: "center"
    })), U = Z(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), ue = Z(() => {
      var d, g;
      return A.value ? !(A.value && ((g = (d = A.value) == null ? void 0 : d.api) != null && g.whiteLabel)) : !0;
    }), ge = {
      stockType: (d) => {
        const g = ["sheet", "linear", "roll"];
        g.includes(d) || console.warn(`${d} is not a valid stockType, expected ${g.join("|")}`), ee.stockType = d, d === "linear" && (ee.cutType = null, ee.cutPreference = null);
      },
      stockSelection: (d) => {
        const g = ["efficiency", "smallest"];
        d && !g.includes(d) ? console.warn(`${d} is not a valid stockSelection, expected ${g.join("|")}`) : ee.options.stockSelection = d;
      },
      minSpacing: (d) => {
        ee.options.minSpacing = d;
      },
      stackHeight: (d) => {
        ee.stackHeight = d;
      },
      cutPreference: (d) => {
        const g = ["efficiency", "length", "width", "beam"];
        if (g.includes(d)) {
          const { cutType: b, cutPreference: P } = is(d);
          ee.cutType = b, ee.cutPreference = P;
        } else
          console.warn(`SmartCut - cut preference ${d || "N/A"} is not one of ${g.join("|")}`);
      },
      guillotineOptions: (d) => {
        ee.guillotineOptions = d;
      },
      bladeWidth: (d) => {
        d >= 0 ? ee.bladeWidth = d : console.warn(`SmartCut - you provided an incorrect blade width of: ${d}`);
      },
      maxParts: (d) => {
        X.maxParts = d;
      },
      locale: (d) => {
        se.value = d.replace(/_/g, "-");
      },
      enable: (d) => {
        const g = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in yt.enable)
          b in d && (X.enable[b] = d[b]);
        for (const b in g)
          Ve(b, Mt(d, [g[b]]) ?? yt.enable[g[b]]);
        ne.value = Mt(d, ["csvImport"]) ?? yt.enable.csvImport;
      },
      colors: (d) => {
        for (const g in yt.colors)
          g in d && (X.colors[g] = d[g]);
      },
      orientationModel: (d) => {
        if (![0, 1, 2].includes(d)) {
          X.orientationModel = 0;
          return;
        }
        X.orientationModel = d;
      },
      numberFormat: (d) => {
        if (!["decimal", "fraction"].includes(d)) {
          X.numberFormat = "decimal";
          return;
        }
        X.numberFormat = d;
      },
      customFields: (d) => {
        if (!Array.isArray(d) || !(d != null && d.length)) return;
        const g = [];
        d.forEach((b, P) => {
          g.push(b), g[P].custom = !0;
          const B = si(b.id);
          g[P].id = B, g[P].fieldMap = "customData." + B, b.type === "checkbox" && (g[P].w = "32px"), b.type === "select" && (g[P].output = b.output ?? "string", g[P].options = b.options);
        }), Ut.value = g;
        for (const b of u.inputShapes.value)
          b.customData = d.reduce((P, B) => {
            const D = si(B.id);
            return P[D] = b.customData[D] || B.default || "", P;
          }, {});
      }
    }, ze = (d) => {
      if (L.debug && F("log", ["checkout init...", d]), d != null && d.options) {
        const b = d.options;
        Wl(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((D) => {
          D in b || F("error", `${D} is a required option`);
        });
        const B = ["enable", "colors"];
        for (const D in b)
          B.includes(D) || (X[D] = b[D]), D in ge && ge[D](b[D]);
      }
      d.colors && "colors" in ge && ge.colors(d.colors), Ms("banding", d), Ms("finish", d), Qe(d), tr(d), st.value = !0, L.debug && F("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), Ze(() => {
        ue.value && !or() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, He = (d, g) => {
      d && (d.orientationLock = g);
    }, Ve = (d, g = !1) => {
      Jl(ii, "parts", ee.stockType, d, g);
    }, si = (d) => d ? ji(d).toLowerCase() : null, Ge = (d, g, b, P) => {
      if (g.valid) {
        if (K(), b && P) {
          const B = b.issues.findIndex((D) => D.field.some((V) => V.length === P.length && V.every((O, _) => O === P[_])));
          B !== -1 && b.issues.splice(B, 1);
        }
      } else
        T({
          referenceEl: d,
          show: !0,
          content: a(`fieldValidation.${g.message}`),
          type: "error"
        });
    }, Qe = (d) => {
      var g, b, P, B, D;
      if (Mt(X, ["enable", "machining"]) && d != null && d.machining) {
        for (const V in je)
          d.machining[V] && (je[V] = d.machining[V]);
        if (["holes", "hingeHoles"].forEach((V) => {
          var O, _;
          (O = d == null ? void 0 : d.machining) != null && O[V] && (je[V].enabled = (_ = d == null ? void 0 : d.machining) == null ? void 0 : _[V].enabled);
        }), (P = (b = (g = d == null ? void 0 : d.machining) == null ? void 0 : g.corners) == null ? void 0 : b.types) != null && P.length && (je.corners.enabled = !0, je.corners.types = d.machining.corners.types), d.banding && ((D = (B = d == null ? void 0 : d.options) == null ? void 0 : B.enable) != null && D.banding)) {
          if (!be) return;
          je.banding = {
            enabled: !0
          }, be.options.length && (je.banding.options = be.options), be.labels.length && (je.banding.labels = be.labels), Jt(be.pricing) && (je.banding.pricing = be.pricing);
        }
      }
    }, he = (d = null) => {
      Ke.value = d, d && d.l && d.w ? Nt.value = !0 : alert("Please enter dimensions first");
    }, St = () => {
      Nt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, xt = (d = []) => {
      if (_e.value = [], Et.value = [], Ve("t", !1), !!d.length) {
        for (const g of d)
          if (g != null && g.t)
            if (typeof g.t == "string" && g.t.includes(",")) {
              const b = $s(g.t, !0);
              b.length === 2 ? (ir(b), Ve("t", !0), g.t = _e.value[0]) : F("error", "bonded thickness found which does not have 2 options");
            } else _e.value.includes(g.t) || _e.value.push(g.t);
        _e.value.length > 1 && Ve("t", !0);
      }
    }, Qn = (d) => {
      var B;
      if (!d) return { thicknesses: [], bondedThicknesses: [] };
      if (!((B = Be.value) != null && B.length))
        return {
          thicknesses: _e.value,
          bondedThicknesses: []
        };
      if (!d.material) return { thicknesses: [], bondedThicknesses: [] };
      const g = Be.value.find((D) => D.name === d.material);
      if (!g) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...g.thicknesses], P = [];
      for (let D = 0; D < b.length; D++) {
        const V = b[D], O = $s(V), _ = [];
        if (O.length) {
          for (const xe of O)
            b[D] = xe, _.push(D);
          D++;
        }
        _.length && P.push(_);
      }
      return {
        thicknesses: b,
        bondedThicknesses: P
      };
    }, er = (d) => Qn(d).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), tr = (d) => {
      var g, b;
      if ((g = d == null ? void 0 : d.stock) != null && g.some((P) => P == null ? void 0 : P.material)) {
        Be.value = [], _e.value = [], Et.value = [];
        const P = /* @__PURE__ */ new Map();
        for (const B of d.stock) {
          if (!B.material) continue;
          const D = B.material.toUpperCase();
          P.has(D) || P.set(D, /* @__PURE__ */ new Set()), B.t != null && ((b = P.get(D)) == null || b.add(S({ v: B.t })));
        }
        Be.value = Array.from(P.entries()).map(([B, D]) => ({
          name: B,
          thicknesses: Array.from(D).sort((O, _) => O - _)
        })), Be.value.length > 1 && Ve("material", !0);
      } else
        xt(d.stock);
    }, ir = (d, g = null) => {
      if (!Array.isArray(d)) {
        F("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let P of d)
        X.numberFormat === "decimal" && (P = parseFloat(P)), _e.value.push(P), g && g.thicknesses.push(P), b.push(_e.value.length - 1);
      Et.value.push(b);
    }, $s = (d, g = !1) => {
      if (typeof d == "string" && d.includes(",")) {
        const b = d.split(",");
        return g ? b.map((P) => S({ v: P })) : b;
      }
      return [];
    }, sr = () => {
      rt.value ? rr() : nr();
    }, nr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), rt.value = !0;
    }, rr = () => {
      document.exitFullscreen && document.exitFullscreen(), rt.value = !1;
    }, or = () => {
      var P, B;
      if ((B = (P = A.value) == null ? void 0 : P.api) != null && B.whiteLabel) return !0;
      let d = !0;
      const g = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [g, b].forEach((D, V) => {
        if (!D) return d = !1;
        const O = window.getComputedStyle(D);
        if (O.display === "none" || O.display === "hidden" || O.opacity === "0" || O.color === "transparent" || O.position !== "relative" || V === 1 && O.color !== "#4e4e4e" && O.color !== "rgb(78, 78, 78)")
          return d = !1;
      }), ie.value = d, d;
    }, Ts = (d, g, b, P, B) => {
      Ps(
        d,
        g,
        b,
        P,
        B,
        L.findExtrasPrice
      );
    }, Ds = (d, g, b, P) => {
      Nn(
        d,
        g,
        b,
        P,
        g === "banding" ? mi : [],
        L.findExtrasPrice
      );
    }, bi = (d, g) => {
      const b = g === "banding" ? be == null ? void 0 : be.labels : Ae == null ? void 0 : Ae.labels;
      Bl(d, g, b);
      const P = Is(g);
      if (d != null && d[P])
        for (const B in d[P]) {
          const D = Ni(d, g, B, L.findExtrasPrice);
          D === !1 && B && d[g][B] && new re({
            item: d,
            field: [[g, B]],
            type: "error",
            message: Te(a("option_not_available", { x: d[g][B], y: a(g) }))
          }), hi(d, g, B, !!D);
        }
    }, Os = (d) => {
      const g = Object.keys(d);
      return Math.max(...g.map((P) => P.split("|").length));
    }, As = (d) => {
      const g = [], b = Object.keys(d), P = Os(d);
      for (let B = P; B--; ) g.push(/* @__PURE__ */ new Set());
      for (const B of b)
        B.split("|").forEach((V, O) => g[O].add(V));
      for (let B = 0; B < P; B++)
        g[B] = Array.from(g[B]);
      return g;
    }, wi = (d, g = [], b) => {
      if (!d) return [];
      if (b > 0 && !g[b - 1]) return [];
      const P = /* @__PURE__ */ new Set();
      for (const B of Object.keys(d)) {
        const D = B.split("|");
        if (D.length > b) {
          let V = !0;
          for (let O = 0; O < b; O++)
            if (g[O] && D[O] !== g[O]) {
              V = !1;
              break;
            }
          V && P.add(D[b]);
        }
      }
      return Array.from(P);
    }, Si = (d, g, b) => Ni(
      d,
      g,
      b,
      L.findExtrasPrice
    ), lr = (d) => {
      const g = de.value.findIndex((b) => b.shapeId === d.shapeId);
      g !== -1 ? de.value[g] = d : de.value.push(d), window.smartcutImages = de.value;
    }, ar = (d) => {
      de.value = de.value.filter((g) => g.shapeId !== d), window.smartcutImages = de.value;
    }, Zi = (d = 1) => {
      for (let g = d; g--; ) {
        let b;
        if (u.inputShapes.value.length > 0) {
          const P = u.inputShapes.value[u.inputShapes.value.length - 1];
          b = ni({
            material: P.material,
            t: P.t
          });
        } else
          b = ni();
        u.inputShapes.value.push(b);
      }
    }, ur = (d) => {
      var b;
      if (u.inputShapes.value.length === 1) return;
      const g = u.inputShapes.value[d].listId;
      u.inputShapes.value.splice(d, 1), ((b = Ke.value) == null ? void 0 : b.listId) === g && (Ke.value = null), G();
    }, ni = (d = {
      l: null,
      w: ee.stockType === "linear" ? ((g) => (g = u.inputStock.value[0]) == null ? void 0 : g.w)() : null,
      t: _e.value.length ? _e.value[0] : null,
      q: 1,
      material: ((b) => (b = Be.value) == null ? void 0 : b.length)() === 1 ? Be.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var B, D;
      d.id = (u.inputShapes.value.length + 1).toString();
      const P = new ci(d, X.numberFormat);
      return (B = be == null ? void 0 : be.labels) != null && B.length && bi(P, "banding"), (D = Ae == null ? void 0 : Ae.labels) != null && D.length && bi(P, "finish"), P;
    }, cr = (d) => {
      if (_e.value.length)
        for (const g of d) {
          if (!g.t) return;
          const b = _e.value.findIndex(
            (D) => S({ v: D }) === g.t
          ), P = Et.value.find((D) => D.includes(b));
          if (!P) return;
          const B = Math.min(
            ...P.map((D) => _e.value[D])
          );
          S({ v: g.t }) > B && (g.q = g.q * (S({ v: g.t }) / B), g.notes = `Bond to form ${g.t.valueOf()}`, g.t = B);
        }
    }, Es = () => {
      G(), Q(null), m.stockList.value = [], m.shapeList.value = [], m.cutList.value = [];
    }, Ji = () => {
      u.inputShapes.value.length = 0, L.inputType !== "formula" && Ze(() => Zi(1));
    }, hr = async () => {
      if (F("calculating"), E.value) return !1;
      E.value = !0, pt.value = !1;
      const d = u.inputShapes.value.map((V) => new ci(V));
      cr(d);
      const { valid: g, saw: b, stockList: P, shapeList: B } = await _l({
        t: a,
        partTrim: X.partTrim,
        maxShapes: X.maxParts,
        orientationModel: X.orientationModel,
        sawData: ee,
        inputShapes: d,
        onLimit: () => {
          Y({
            type: "error",
            message: a("max_parts") + " " + X.maxParts
          });
        }
      });
      if (!g) {
        F("validation-error"), E.value = !1;
        return;
      }
      Es(), L.debug && console.log(
        "SmartCut - calculating",
        "stock",
        P.map((V) => V.dimensions),
        "parts",
        B.map((V) => V.dimensions)
      );
      const D = {
        inputs: {
          parts: d,
          stock: u.inputStock.value,
          saw: b
        },
        saw: b,
        shapeList: B,
        stockList: P,
        enableEvo: !0,
        domain: q
      };
      await ot.connect(), ot.emit("calculate", D);
    }, Ms = (d, g) => {
      var kt;
      if (Ve(d, !1), !d || !g || !(g != null && g[d]) || !Mt(X, ["enable", d])) return;
      const b = [d, "pricing"];
      if (!js(g, b)) {
        F("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const P = Mt(g, b);
      if (typeof P != "object") {
        F("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!Jt(P)) {
        F("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const B = Object.keys(P), D = Object.values(P);
      if (!B.length) {
        F("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const V = /,/;
      for (const Ct of B)
        if (V.test(Ct)) {
          F("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (D.some((Ct) => isNaN(Ct))) {
        F("error", `${b} values must be a number`);
        return;
      }
      const O = Os(P), _ = [d, "labels"];
      let xe = [];
      if (js(g, _))
        xe = Mt(g, _);
      else {
        F("error", `${_.join(".")} not found`);
        return;
      }
      if (!xe) {
        F("error", `${_.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(xe)) {
        F("error", `${_.join(".")} data must be an array`);
        return;
      }
      if (!(xe != null && xe.length)) {
        F("error", `if provided, ${_.join(".")} data must contain values`);
        return;
      }
      if (xe.length !== O) {
        F("error", `${_.join(".")} length (${xe.length}) must match the number of levels in ${b.join(".")} (${O})`);
        return;
      }
      switch (d) {
        case "banding":
          be.labels = xe, be.pricing = P, be.options = As(P);
          break;
        case "finish":
          Ae.labels = xe, Ae.pricing = P, Ae.options = As(P);
          break;
      }
      if (Ve(d, !0), !!((kt = u.inputShapes.value) != null && kt.length))
        for (const Ct of u.inputShapes.value)
          bi(Ct, d);
    }, xi = (d, g) => {
      if (!g) return;
      d !== "info" && Object.keys(Pe).forEach((P) => {
        P !== d && P !== "info" && (Pe[P] = null);
      });
      const b = u.inputShapes.value.indexOf(g);
      Pe[d] === b ? (Ke.value = null, Pe[d] = null) : (Ke.value = g, Pe[d] = b);
    }, Rs = (d) => {
      if (F("log", ["load event received"]), !st.value) {
        F("log", ["load event received"]);
        return;
      }
      dr(d.detail);
    }, dr = (d) => {
      var P, B, D;
      if (F("log", ["loading parts..."]), !d || !((B = (P = d == null ? void 0 : d.inputs) == null ? void 0 : P.parts) != null && B.length)) {
        F("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let g = 0;
      for (const V of d.inputs.parts) {
        const O = ni(V);
        O ? (u.inputShapes.value.push(O), (D = O.issues) != null && D.length && F("log", [`SmartCut - issues found while importing part at index ${g}`, O.issues])) : F("log", [`SmartCut - error loading part at index ${g}`, V]), g++;
      }
      u.inputShapes.value.flatMap((V) => Pt(V.issues)).length && Y({
        type: "error",
        message: Te(a("issues_found"))
      }), F("log", [`loaded ${u.inputShapes.value.length} parts`]);
    }, fr = (d) => {
      u.inputShapes.value.length = 0, Ze(() => {
        var g, b;
        for (const P of d)
          P.t = ((b = (g = u.inputStock.value) == null ? void 0 : g[0]) == null ? void 0 : b.t) ?? null, u.inputShapes.value.push(ni(P));
      });
    };
    Le(() => L.stock, (d) => {
      if (Es(), Array.isArray(d) || console.warn("SmartCut - stock must be passed as an array"), !!(d != null && d.length)) {
        u.inputStock.value.length = 0, Be.value.length || xt(d);
        for (const g of d) {
          const b = new Ss({
            ...g,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, X.numberFormat);
          u.inputStock.value.push(b);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? Ze(() => {
            u.inputShapes.value.forEach((b) => {
              if (b.material) {
                const P = Be.value.find((B) => B.name === b.material);
                P && (P.thicknesses.includes(S({ v: b.t })) || (b.t = S({ v: P.thicknesses[0] })));
              } else b.t || (b.t = S({ v: u.inputStock.value[0].t }));
            });
          }) : L.inputType !== "formula" && Ze(() => Zi(1));
          const g = h(ee);
          g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), Y({
            type: "error",
            message: Te(a("stock_issue")),
            additional: g.map((b) => a(b.message))
          }));
        }
      }
    }, { immediate: !0 }), Le(u.inputShapes, (d) => {
      F("inputs-changed"), d.forEach((g) => {
        var P;
        ee.stockType === "linear" && (g.w = (P = u.inputShapes.value[0]) == null ? void 0 : P.w);
        const b = Be.value.find((B) => B.name === g.material);
        b && (b.thicknesses.includes(S({ v: g.t })) || (g.t = S({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), Le(() => X.numberFormat, (d) => {
      I(d);
    }), ft(async () => {
      if (We.value) return;
      const d = new URL(window.location.href), g = d.searchParams.toString(), b = d.origin + d.pathname + (g ? `?${g}` : "");
      oe.value !== b && Ji(), oe.value = b, se.value = X.locale, await ot.connect(), ot.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Rs), We.value = !0, L.debug && F("log", [
        "ready...",
        "fields:",
        bt.value.map((P) => P.id)
      ]);
    });
    const pr = () => {
      ot && ot.disconnect();
    };
    return ds(() => {
      window.removeEventListener("smartcut/load", Rs), pr(), delete window.smartcutCheckout;
    }), t({
      init: ze,
      clear: Ji,
      getAvailablePricingOptions: wi,
      getExtrasPrice: Si,
      formatPrice: L.formatPrice,
      findExtrasPrice: L.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: bi,
      createInputShape: ni
    }), (d, g) => {
      var P, B;
      const b = Bt("font-awesome-icon");
      return y(), C(Se, null, [
        ve(x(s), {
          content: x(v).content,
          type: x(v).type,
          show: x(v).show,
          "reference-el": x(v).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        x(le) === "development" && ec ? (y(), C("div", Mu, [
          g[5] || (g[5] = M("div", null, "Developer information", -1)),
          M("div", null, te(X.enable.focus), 1),
          ve(x(l), {
            data: [x(u).inputShapes.value],
            paths: ["inputShapes"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        Nt.value && ((P = Ke.value) != null && P.machining) ? (y(), pe(x(r), {
          key: 1,
          shape: Ke.value,
          "onUpdate:shape": g[0] || (g[0] = (D) => Ke.value = D),
          translate: !0,
          options: je,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": Si,
          "get-available-pricing-options": wi,
          "format-price": i.formatPrice,
          onClose: St
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : W("", !0),
        st.value ? W("", !0) : (y(), C("div", Ru, [
          ve(Xs, {
            size: 50,
            "show-number": !1
          })
        ])),
        st.value ? (y(), C("div", {
          key: 3,
          id: "smartcut-checkout",
          class: Ce({ fullscreen: rt.value })
        }, [
          nt.value && !i.readonly ? (y(), C("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: g[1] || (g[1] = (D) => sr())
          }, [
            ve(b, { icon: ["fass", "expand"] }),
            Xt(" " + te(x(Te)(x(a)("full_screen"))), 1)
          ])) : W("", !0),
          ue.value ? (y(), C("div", {
            key: 1,
            id: "credit",
            style: ke($.value)
          }, [
            M("a", {
              title: "SmartCut | Cut list optimization software",
              style: ke(U.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, te(x(Zr)(x(a)("powered_by"))), 5)
          ], 4)) : W("", !0),
          M("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: ke({ "grid-template-columns": yi.value })
          }, [
            x(u).inputShapes.value.length ? (y(), C("div", Fu, [
              g[6] || (g[6] = M("div", { class: "cell id" }, null, -1)),
              (y(!0), C(Se, null, De(bt.value, (D) => (y(), C("div", {
                key: D.id,
                class: Ce(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(D.id) || D.type === "checkbox" }])
              }, te(x(Te)(x(a)(D.label))), 3))), 128)),
              x(le) === "development" ? (y(), C("div", _u, " Info ")) : W("", !0),
              x(u).inputShapes.value.length > 1 ? (y(), C("div", qu)) : W("", !0)
            ])) : W("", !0),
            (y(!0), C(Se, null, De(x(u).inputShapes.value, (D, V) => (y(), C("div", {
              key: V,
              class: "row inputs"
            }, [
              M("div", Bu, [
                M("div", {
                  class: "id",
                  style: ke({
                    background: X.colors.partA,
                    color: X.colors.text
                  })
                }, te(V + 1), 5)
              ]),
              (y(!0), C(Se, null, De(bt.value, (O) => (y(), C("div", {
                key: O.fieldMap,
                class: Ce(["cell", [`${O.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(O.id) || O.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(O.id) ? O.id === "orientationLock" ? (y(), pe(sa, {
                  key: 1,
                  id: "orientation-" + V,
                  rectangle: D,
                  disabled: i.readonly,
                  "stock-grain": x(p)(D),
                  "button-background": X.colors.button,
                  "icon-color": X.colors.buttonText,
                  "orientation-model": X.orientationModel,
                  onUpdateOrientation: (_) => He(D, _)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : O.id === "banding" ? (y(), pe(ra, {
                  key: 2,
                  id: "banding-" + V,
                  "input-shape": D,
                  disabled: i.readonly,
                  "stock-grain": x(p)(D),
                  open: Pe.banding === V,
                  "orientation-model": X.orientationModel,
                  onClicked: (_) => xi("banding", D)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : O.id === "finish" ? (y(), pe(Ma, {
                  key: 3,
                  id: "finish-" + V,
                  "input-shape": D,
                  disabled: i.readonly,
                  open: Pe.finish === V,
                  onClicked: (_) => xi("finish", D)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : O.fieldMap === "machining" && nt.value ? (y(), pe(qa, {
                  key: 4,
                  id: "machining-" + V,
                  disabled: i.readonly,
                  "input-shape": D,
                  onOpen: (_) => he(D)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : O.fieldMap === "imageUpload" ? (y(), C("button", {
                  key: 5,
                  id: "image-upload-" + V,
                  type: "button",
                  disabled: i.readonly,
                  class: Ce({ selected: Pe.info === V }),
                  onClick: (_) => xi("imageUpload", D)
                }, [
                  ve(b, { icon: ["fass", "image"] })
                ], 10, Hu)) : W("", !0) : (y(), pe(ct, {
                  key: 0,
                  id: O.id + "-" + V,
                  focus: !i.readonly && X.enable.focus && V === x(u).inputShapes.value.length - 1 && O.id === "l",
                  issue: x(Ws)(D, [O.fieldMap]),
                  warning: x(Ws)(D, [O.fieldMap], !0),
                  type: O.type,
                  output: O.output,
                  label: O != null && O.label ? x(Te)(x(a)(O.label)) : null,
                  placeholder: O != null && O.placeholder ? x(Te)(x(a)(O.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": X.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (O == null ? void 0 : O.required) ?? !1,
                  "allow-zero": (O == null ? void 0 : O.allowZero) ?? !0,
                  options: O.id === "t" ? er(D) : O == null ? void 0 : O.options,
                  "true-value": O == null ? void 0 : O.trueValue,
                  "false-value": O == null ? void 0 : O.falseValue,
                  default: O == null ? void 0 : O.default,
                  min: typeof (O == null ? void 0 : O.min) == "number" ? O.min : null,
                  max: typeof (O == null ? void 0 : O.max) == "number" ? O.max : null,
                  custom: O == null ? void 0 : O.custom,
                  value: x(Mt)(D, O == null ? void 0 : O.fieldMap),
                  text: {
                    delete: x(Vt)(x(a)("delete")),
                    select: x(Vt)(x(a)("select"))
                  },
                  onValidation: (_, xe) => Ge(_, xe, D, [O.fieldMap]),
                  "onUpdate:value": (_) => {
                    O.fieldMap && x(Cl)(D, O.fieldMap, _);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              x(le) === "development" ? (y(), C("div", Gu, [
                M("button", {
                  type: "button",
                  class: Ce({ selected: Pe.info === V }),
                  onClick: (O) => xi("info", D)
                }, " i ", 10, Wu)
              ])) : W("", !0),
              x(u).inputShapes.value.length > 1 ? (y(), C("div", Nu, [
                M("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": x(Te)(x(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (O) => ur(V)
                }, [
                  ve(b, { icon: ["fass", "trash"] })
                ], 8, Uu)
              ])) : W("", !0),
              ve(x(n), {
                item: D,
                "num-columns": wt.value
              }, null, 8, ["item", "num-columns"]),
              Pe.banding === V && be.options.length > 0 ? (y(), pe(as, {
                key: 2,
                shape: D,
                "shape-index": V,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": x(Re),
                "part-columns": wt.value,
                "get-price": Si,
                "format-price": i.formatPrice,
                "orientation-model": X.orientationModel,
                "get-available-pricing-options": wi,
                onUpdateAll: Ds,
                onSet: Ts
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : W("", !0),
              Pe.finish === V && Ae.options.length > 0 ? (y(), pe(as, {
                key: 3,
                shape: D,
                "shape-index": V,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ae.keys,
                "all-options": Ae.options,
                pricing: Ae.pricing,
                labels: Ae.labels,
                "user-friendly-field-map": x(Re),
                "part-columns": wt.value,
                "get-price": Si,
                "format-price": i.formatPrice,
                "orientation-model": X.orientationModel,
                "get-available-pricing-options": wi,
                onUpdateAll: Ds,
                onSet: Ts
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : W("", !0),
              Pe.info === V ? (y(), C("div", {
                key: 4,
                id: "shape-info",
                style: ke({ "grid-column-end": "span " + wt.value })
              }, [
                ve(x(l), {
                  data: [D == null ? void 0 : D.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : W("", !0),
              Pe.imageUpload === V ? (y(), pe(za, {
                key: 5,
                prefix: (V + 1).toString(),
                "unique-id": x(ye),
                "shape-id": D.listId,
                style: ke({ "grid-column-end": "span " + wt.value }),
                images: de.value,
                onUpdate: lr,
                onRemove: ar
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : W("", !0)
            ]))), 128))
          ], 4),
          M("div", ju, [
            i.readonly ? W("", !0) : (y(), C("button", {
              key: 0,
              type: "button",
              "aria-label": x(a)("action_item", { a: "add", i: "part" }),
              style: ke({ background: X.colors.button, color: X.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: g[2] || (g[2] = (D) => Zi(1))
            }, [
              ve(b, { icon: ["fass", "plus-large"] }),
              Xt(" " + te(x(Te)(x(a)("action_item", { a: x(a)("add"), i: x(a)("part") }))), 1)
            ], 12, zu)),
            M("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": x(Te)(x(a)("calculate")),
              style: ke({
                background: X.colors.button,
                color: X.colors.buttonText
              }),
              disabled: !((B = x(u).inputStock.value) != null && B.length) || E.value,
              onClick: g[3] || (g[3] = (D) => hr())
            }, [
              ve(b, { icon: ["fass", "calculator"] }),
              Xt(te(x(Te)(x(a)("calculate"))), 1)
            ], 12, Vu),
            i.readonly ? W("", !0) : (y(), C("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": x(Te)(x(a)("clear")),
              onClick: g[4] || (g[4] = (D) => Ji())
            }, [
              ve(b, { icon: ["fass", "trash"] })
            ], 8, Yu)),
            M("div", Xu, te(x(f)) + te(X != null && X.maxParts ? "/" + X.maxParts : ""), 1)
          ]),
          ne.value && !i.readonly ? (y(), pe(x(o), {
            key: 2,
            ref: "import",
            "number-format": X.numberFormat,
            "custom-fields": Ut.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": Ae.options,
            "finish-labels": Ae.labels,
            onImport: fr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : W("", !0),
          Ue.value ? (y(), C("div", Ku, [
            Wt.value ? (y(), C("div", Zu, te(Wt.value), 1)) : W("", !0),
            M("pre", Ju, te($e.value), 1)
          ])) : W("", !0),
          (X.enable.diagram ? E.value && !x(ae).complete : E.value || x(ae).complete) ? (y(), C("div", Qu, [
            ve(Xs, {
              size: 50,
              number: x(ae).shapeCount,
              complete: x(ae).complete,
              "show-number": X.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : W("", !0),
          cs(ve(Eu, {
            "element-id": "diagram",
            "number-format": X.numberFormat,
            "decimal-places": X.decimalPlaces,
            colors: X.colors
          }, null, 8, ["number-format", "decimal-places", "colors"]), [
            [hs, X.enable.diagram && x(ae).complete]
          ]),
          X.enable.diagram && x(R).length > 1 && x(ae).complete ? (y(), pe(zl, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": x(z),
            "stock-list": x(R),
            onShowStock: x(Q)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : W("", !0)
        ], 2)) : W("", !0)
      ], 64);
    };
  }
}), Sh = /* @__PURE__ */ ti(tc, [["__scopeId", "data-v-0c153e8d"]]), ic = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: !0
    },
    paths: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.data.forEach((i, t) => {
      this.expanded[t] = !0;
    });
  },
  methods: {
    toggle(i) {
      this.expanded[i] = !this.expanded[i];
    },
    getValueType(i) {
      return i === null ? "null" : Array.isArray(i) ? "array" : typeof i;
    },
    formatValue(i) {
      return i === null ? "null" : i === void 0 ? "undefined" : typeof i == "boolean" ? i.toString() : typeof i != "object" ? typeof i == "string" ? `'${i}'` : String(i) : Array.isArray(i) ? `[ ${i.map((s) => typeof s == "object" && s !== null ? `{ ${Object.entries(s).map(([r, o]) => `${r}: ${typeof o == "string" ? `'${o}'` : o}`).join(", ")} }` : typeof s == "string" ? `'${s}'` : String(s)).join(", ")} ]` : `{ ${Object.entries(i).map(([e, s]) => Array.isArray(s) ? `${e}: ${this.formatValue(s)}` : `${e}: ${typeof s == "string" ? `'${s}'` : s}`).join(", ")} }`;
    }
  }
}, sc = { class: "smartcut-object-viewer" }, nc = ["onClick"], rc = { class: "toggle-icon" }, oc = { class: "path-label" }, lc = {
  key: 0,
  class: "object-properties"
}, ac = { class: "key" };
function uc(i, t, e, s, n, r) {
  return y(), C("div", sc, [
    (y(!0), C(Se, null, De(e.data, (o, l) => (y(), C("div", {
      key: l,
      class: "array-item"
    }, [
      M("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        M("div", rc, te(n.expanded[l] ? "▼" : "▶"), 1),
        M("div", oc, te(e.paths[l] || l), 1)
      ], 8, nc),
      n.expanded[l] ? (y(), C("div", lc, [
        (y(!0), C(Se, null, De(o, (a, u) => (y(), C("div", {
          key: u,
          class: "property-item"
        }, [
          M("div", ac, te(u) + ": ", 1),
          M("div", {
            class: Ce(["value", r.getValueType(a)])
          }, te(r.formatValue(a)), 3)
        ]))), 128))
      ])) : W("", !0)
    ]))), 128))
  ]);
}
const cc = /* @__PURE__ */ ti(ic, [["render", uc]]), Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: cc }, Symbol.toStringTag, { value: "Module" })), hc = ["data-placement"], dc = /* @__PURE__ */ Oe({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = H(null), s = H(null), n = Z(() => ({
      getBoundingClientRect: () => {
        var p;
        return ((p = t.referenceEl) == null ? void 0 : p.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      Sr(8),
      xr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      kr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      Rr({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = Er(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (p, I, h) => wr(
          p,
          I,
          h,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), u = Z(() => ({
      position: o.value.position,
      top: o.value.top,
      left: o.value.left,
      transform: o.value.transform,
      zIndex: "1000"
    })), f = Z(() => {
      if (!l.value.arrow) return {};
      const { x: p, y: I } = l.value.arrow, h = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: p != null ? `${p}px` : void 0,
        top: I != null ? `${I}px` : void 0,
        [h]: "-4px"
      };
    });
    return (p, I) => (y(), pe(pn, { to: "body" }, [
      ve(Mr, { name: "fade" }, {
        default: fs(() => [
          p.show && p.referenceEl ? (y(), C("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: Ce(["tooltip", p.type]),
            style: ke(u.value),
            "data-placement": x(a)
          }, [
            Xt(te(p.content) + " ", 1),
            M("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: ke(f.value)
            }, null, 4)
          ], 14, hc)) : W("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: dc }, Symbol.toStringTag, { value: "Module" })), pc = /* @__PURE__ */ Oe({
  __name: "InputIssues",
  props: {
    item: {
      type: Object,
      required: !0
    },
    numColumns: {
      type: Number,
      required: !0
    }
  },
  setup(i) {
    const t = i;
    return (e, s) => {
      var n, r, o, l;
      return y(), C(Se, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (y(), C("div", {
          key: 0,
          class: "group issues",
          style: ke({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          M("pre", null, te(t.item.issues.filter((a) => a.type === "error").flatMap((a) => x(Te)(a.message)).join(`
`)), 1)
        ], 4)) : W("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (y(), C("div", {
          key: 1,
          class: "group warnings",
          style: ke({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          M("pre", null, te(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => x(Te)(a.message)).join(`
`)), 1)
        ], 4)) : W("", !0)
      ], 64);
    };
  }
}), gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: pc }, Symbol.toStringTag, { value: "Module" })), et = {
  precisionFixed: Kr,
  format: Xr,
  select: Me,
  selectAll: yn,
  scaleLinear: tt,
  scaleSequential: li,
  axisTop: mn,
  axisBottom: Fi,
  axisRight: vn,
  axisLeft: _i,
  symbol: Yr,
  path: Vr,
  arc: zr,
  symbolTriangle: jr,
  symbolSquare: Ur
};
class mc {
  constructor({
    HTMLElement: t,
    vueComponent: e,
    shape: s,
    numberFormat: n = "decimal",
    decimalPlaces: r = 2
  }) {
    c(this, "HTMLElement");
    c(this, "HTMLElementWidth");
    c(this, "el");
    c(this, "numberFormat");
    c(this, "decimalPlaces");
    c(this, "vueComponent");
    c(this, "shape");
    c(this, "h");
    c(this, "w");
    c(this, "shapeL");
    c(this, "shapeW");
    c(this, "padding", 40);
    c(this, "xScale", et.scaleLinear());
    c(this, "yScale", et.scaleLinear());
    c(this, "yScaleFlipped", et.scaleLinear());
    c(this, "measurementScale", et.scaleLinear());
    c(this, "xAxis");
    c(this, "yAxis");
    c(this, "formatDp");
    c(this, "svgCanvas");
    c(this, "currentSide", 0);
    c(this, "bandingStrokeWidth", 4);
    c(this, "shapeGroup");
    c(this, "bandingGroup");
    c(this, "holeGroup");
    c(this, "hingeHoleGroup");
    c(this, "cornerGroup");
    c(this, "legendGroup");
    c(this, "pointGroup");
    c(this, "loaded", !1);
    this.HTMLElement = t, this.numberFormat = n, this.decimalPlaces = r, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = e, this.shape = s, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = et.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = et.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
        const t = this.el.append("svg").attr("class", "vis");
        if (t === null) return;
        this.svgCanvas = t;
      }
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x"), this.xAxis.call(
      et.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      et.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = et.path(), e = this.shape.machining.corners, s = [], n = [];
    [0, 1, 2, 3].forEach((o) => {
      const l = e[o];
      l && l.type ? (s.push(l.size ? S({ v: l.size ?? 0, o: this }) : 0), n.push(l.type)) : (s.push(0), n.push(null));
    });
    const r = (o, l, a, u, f) => {
      n[o] === "radius" ? t.arcTo(
        this.xScale(l),
        this.getYScale()(a),
        this.xScale(u),
        this.getYScale()(f),
        this.measurementScale(s[o])
      ) : n[o] === "bevel" ? t.lineTo(this.xScale(u), this.getYScale()(f)) : (t.lineTo(this.xScale(l), this.getYScale()(a)), t.lineTo(this.xScale(u), this.getYScale()(f)));
    };
    t.moveTo(this.xScale(0), this.getYScale()(s[0])), r(0, 0, 0, s[0], 0), (n[0] === "bevel" || n[1] === "bevel") && t.lineTo(this.xScale(this.shapeL - s[1]), this.getYScale()(0)), r(1, this.shapeL, 0, this.shapeL, s[1]), (n[1] === "bevel" || n[2] === "bevel") && t.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - s[2])
    ), r(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - s[2],
      this.shapeW
    ), (n[2] === "bevel" || n[3] === "bevel") && t.lineTo(this.xScale(s[3]), this.getYScale()(this.shapeW)), r(3, 0, this.shapeW, 0, this.shapeW - s[3]), t.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", t.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let t;
    t = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), t = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter((t) => t.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (t) => t.valid === !1).classed("partial", (t) => !t.isThroughShape(this.shape)).attr("cx", (t) => this.xScale(t.x)).attr("cy", (t) => {
      const e = t.getYDrawPosition(this.shape, this.currentSide);
      return this.yScale(e);
    }).attr("r", (t) => this.measurementScale(t.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const e = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("g").data(e).join("circle").attr("class", "hole").classed("invalid", (s) => s.valid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => this.yScale(s.getYDrawPosition(this.shape, this.currentSide))).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const t = this.shape.banding, e = -1, s = [];
    for (const r of vt)
      if (t[r])
        switch (r) {
          case "x1":
            s.push({
              x1: this.padding - e,
              x2: this.padding - e,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            s.push({
              x1: this.w - this.padding + e,
              x2: this.w - this.padding + e,
              y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[2].size ?? 0)
              )
            });
            break;
          case "y1":
            s.push({
              x1: this.padding + this.getCornerBandingSize(0),
              x2: this.w - this.padding - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? e : 1),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
            });
            break;
          case "y2":
            s.push({
              x1: this.padding + this.getCornerBandingSize(3),
              x2: this.w - this.padding - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : e),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : e)
            });
            break;
        }
    this.bandingGroup.selectAll("g").data(s).join("line").attr("class", "banding").attr("x1", (r) => r.x1).attr("x2", (r) => r.x2).attr("y1", (r) => r.y1).attr("y2", (r) => r.y2).attr("stroke-width", this.bandingStrokeWidth);
    const n = et.path();
    this.shape.machining.corners.forEach((r, o) => {
      if (!r.type) return;
      let l, a, u;
      switch (o) {
        case 0:
          if (!k(t.a) || t.a === !1) return;
          l = {
            x: this.xScale(0) - e,
            y: this.getYScale()(S({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(S({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!k(t.b) || t.b === !1) return;
          l = {
            x: this.xScale(this.shapeL - S({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, a = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(S({ v: r.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!k(t.c) || t.c === !1) return;
          l = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - S({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(this.shapeL - S({ v: r.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!k(t.d) || t.d === !1) return;
          l = {
            x: this.xScale(S({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - S({ v: r.size ?? 0, o: this })) + e
          };
          break;
        default:
          return;
      }
      if (n.moveTo(l.x, l.y), r.type === "radius")
        switch (n.arcTo(
          a.x,
          a.y,
          u.x,
          u.y,
          this.measurementScale(r.size ?? 0)
        ), o) {
          case 0:
          case 2:
            n.lineTo(u.x + e, u.y);
            break;
          case 1:
          case 3:
            n.lineTo(u.x, u.y - (this.currentSide === 0 ? e : -1));
            break;
        }
      else r.type === "bevel" && n.lineTo(u.x, u.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][o]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", n.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    this.svgCanvas && this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0, this.yAxis.call(
      et.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(t) {
    return this.shape.machining.corners[t].type ? this.measurementScale(this.shape.machining.corners[t].size ?? 0) : 0;
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0), this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let t = this.shape.getShortSide() / this.shape.getLongSide();
    if (this.w = this.HTMLElementWidth, this.w - this.padding * 2 < 0) return;
    let e = window.innerHeight - this.padding * 2 - 20;
    e > 600 && (e = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), t > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (t = 0.3, this.h = this.w * t), this.h > e && (this.h = e, this.w = this.h / t, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
function vc(i) {
  var t;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[i[0]]) < "u")
    return Kt(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return Kt(this, i);
}
const yc = { id: "machining" }, bc = {
  key: 0,
  class: "debug"
}, wc = { class: "inputs" }, Sc = {
  key: 0,
  class: "shape-name"
}, xc = { class: "shape-dimensions" }, kc = {
  key: 1,
  class: "sides-wrapper"
}, Cc = { class: "menu" }, Ic = { class: "button-wrapper" }, Lc = { class: "row table-heading" }, Pc = {
  key: 0,
  class: "cell id"
}, $c = {
  key: 0,
  class: "cell"
}, Tc = { class: "id" }, Dc = ["onClick"], Oc = { class: "remove" }, Ac = { key: 5 }, Ec = !1, Mc = /* @__PURE__ */ Oe({
  __name: "Machining",
  props: /* @__PURE__ */ Fs({
    env: { default: "production" },
    translate: { type: Boolean, default: !1 },
    findExtrasPrice: { type: Function, default: () => null },
    getExtrasPrice: { type: Function, default: () => null },
    getAvailablePricingOptions: { type: Function, default: () => [] },
    formatPrice: { type: Function, default: () => "" },
    options: { default: () => ({
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      faces: { enabled: !0 },
      holes: {
        enabled: !0,
        defaultDiameter: 10,
        diameters: [],
        minDiameter: 0,
        maxDiameter: 100,
        enableDepth: !0,
        depths: [],
        defaultDepth: 0,
        minDepth: 0,
        maxDepth: 100
      },
      hingeHoles: {
        enabled: !0,
        minimumHoleDistance: 0,
        defaultDistanceFromEdge: 22,
        defaultOuterSpacing: 10,
        defaultHingeLength: 50
      },
      shelfHoles: {
        enabled: !1,
        diameters: [],
        depths: []
      },
      corners: {
        enabled: !0,
        minValue: 0,
        types: ["bevel", "radius"]
      },
      banding: {
        enabled: !1,
        options: [[]],
        labels: [],
        pricing: {},
        enableCorners: !1
      }
    }) }
  }, {
    shape: {
      required: !0
    },
    shapeModifiers: {}
  }),
  emits: /* @__PURE__ */ Fs(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var Be, _e, Et, Nt, je, be, Ae, ii, Ut, vi, bt, wt, yi;
    const e = $t(() => Promise.resolve().then(() => Ki)), s = i, n = t, r = Z(() => bs(E.value)), o = Z(() => vc.call({ options: s.options }, ["units"])), l = Z(() => {
      var U;
      if (!((U = f.value) != null && U.length)) return 0;
      if (ee.value === "banding") return 1;
      let $ = Object.values(u.value).filter((ue) => ue.enabled).length;
      return $ += 2, $;
    }), a = Z(() => {
      if (!f.value.length || ee.value === "banding") return;
      const $ = {
        id: "34px",
        del: "30px"
      }, U = [];
      return f.value.forEach((ue) => {
        const ge = u.value[ue];
        ge.enabled && U.push(ge.w ?? "1fr");
      }), U.unshift($.id), U.push($.del), U.join(" ");
    }), u = Z(() => !ee.value || ee.value === "banding" ? null : Wt[ee.value]), f = Z(() => !ee.value || ee.value === "banding" ? [] : Object.keys(Wt[ee.value]).filter(($) => Wt[ee.value][$].enabled)), p = Z(() => ee.value ? z() : []), I = Z(() => {
      var U, ue, ge, ze;
      const $ = ((ze = (ge = (ue = (U = E.value) == null ? void 0 : U.machining) == null ? void 0 : ue.corners) == null ? void 0 : ge.map((He) => {
        var Ve;
        return (Ve = He == null ? void 0 : He.isPresent) != null && Ve.call(He) ? He.getCorner() : null;
      })) == null ? void 0 : ze.filter((He) => He)) ?? [];
      return [...vt, ...$];
    }), h = ($ = !0) => {
      $ ? ot.value = $ : Ze(() => ot.value = !1);
    }, m = () => {
      K(), L(), F(), le();
    }, w = ($, U, ue) => {
      Ze(() => {
        $[U] = ue;
      });
    }, R = ($) => {
      if (ee.value === "corners")
        switch ($) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return $;
        }
      return $ + 1;
    }, N = () => ee.value !== "banding", J = ($, U = null) => {
      if (!($ != null && $.length)) return [];
      let ue = "None";
      U === "depth" && (ue = "Through");
      const ge = [{ label: ue, value: null }];
      return $.forEach((ze) => {
        const He = ze.toString().charAt(0).toUpperCase() + ze.toString().slice(1);
        ge.push({ label: He, value: ze });
      }), ge;
    }, z = () => {
      if (!ee.value) return [];
      if (ee.value === "banding") return [];
      const $ = E.value.machining[ee.value];
      return Array.isArray($) ? $ : [$];
    };
    let Q = null;
    const ae = () => {
      E.value && (Q = new mc({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: E.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), Q.init(), rt.value = !0, setTimeout(() => {
        Q.updateSize();
      }, 100));
    }, G = () => {
      X.value = X.value === 0 ? 1 : 0, Q.flip();
    }, Y = () => {
      switch (ee.value) {
        case "holes":
          v();
          break;
        case "hingeHoles":
          T();
          break;
      }
    }, v = () => {
      E.value.machining.createHole(
        S({ v: E.value.getLongSide() }) / 2,
        S({ v: E.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        X.value
      ), Q.createHoles();
    }, T = () => {
      E.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: X.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), Q.createHingeHoles();
    }, K = () => {
      E.value.machining.holes.length = 0;
    }, L = () => {
      E.value.machining.hingeHoles.length = 0;
    }, F = () => {
      E.value.machining.corners.forEach(($) => {
        $.size = null, $.type = null;
      }), E.value.banding.a = !1, E.value.banding.b = !1, E.value.banding.c = !1, E.value.banding.d = !1;
    }, le = () => {
      E.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, se = ($) => {
      switch (ee.value) {
        case "holes":
          return E.value.machining.holes.splice($, 1);
        case "hingeHoles":
          return E.value.machining.hingeHoles.splice($, 1);
        case "corners":
          E.value.machining.corners[$].size = null, E.value.machining.corners[$].type = null;
          return;
      }
    }, A = () => {
      switch (ee.value) {
        case "holes":
          return K();
        case "hingeHoles":
          return L();
        case "corners":
          return F();
      }
    }, q = () => {
      var $;
      if (Ue.value = [], !!s.options.banding.enabled) {
        h();
        for (const U in E.value.banding)
          E.value.banding[U] ? s.options.banding.enableTypes && (($ = s.options.banding.types) != null && $.length) && (E.value.banding[U] || Ue.value.push({
            index: U,
            message: "Please select a type"
          })) : E.value.banding[U] = "";
        h(!1);
      }
    }, j = ($) => {
      const U = Ue.value.filter((ue) => ue.index === $);
      return U.length ? U.map((ue) => ue.message) : [];
    }, ie = ($) => {
      const U = Ue.value.filter((ge) => ge.index === $ && (ge == null ? void 0 : ge.fields)), ue = U.flatMap((ge) => ge.fields);
      return U.length ? ue : [];
    }, oe = ($, U) => {
      const ue = ie($);
      return ue != null && ue.length ? ue.includes(U) : !1;
    }, ye = () => {
      n("close");
    }, de = ($) => $ && typeof $.disabled == "function" ? $.disabled : !1, We = ($, U, ue, ge, ze) => {
      Ps($, U, ue, ge, ze, s.findExtrasPrice);
    }, st = ($, U, ue, ge) => {
      Nn(
        $,
        U,
        ue,
        ge,
        [],
        s.findExtrasPrice
      );
    }, E = Fr(i, "shape");
    if (!((Be = E.value) != null && Be.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const pt = H(null), ne = H(null), nt = H(!1), rt = H(!1), ot = H(!1), yt = H(!1), X = H(0), ee = H(null), Ke = H(0), Ue = H([]), Wt = gt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: "X position",
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: "Y position",
          required: !0
        },
        diameter: {
          enabled: !0,
          type: (_e = s.options.holes.diameters) != null && _e.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Et = s.options.holes.diameters) != null && Et.length ? "float" : void 0,
          options: (Nt = s.options.holes.diameters) != null && Nt.length ? J(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && S({ v: E.value.t }) > 0,
          //[]
          required: !1,
          type: (je = s.options.holes.depths) != null && je.length ? "select" : "unitDependent",
          output: (be = s.options.holes.depths) != null && be.length ? "float" : void 0,
          options: (Ae = s.options.holes.depths) != null && Ae.length ? J(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: "A",
              value: 0
            },
            {
              label: "B",
              value: 1
            }
          ]
        }
      },
      hingeHoles: {
        position: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          min: 0
        },
        hingeLength: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: "Hinge length",
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: "Outer spacing",
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: "Distance from edge",
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && S({ v: E.value.t }) > 0,
          required: !1,
          type: (ii = s.options.holes.depths) != null && ii.length ? "select" : "unitDependent",
          output: (Ut = s.options.holes.depths) != null && Ut.length ? "float" : void 0,
          options: (vi = s.options.holes.depths) != null && vi.length ? J(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (bt = s.options.holes.diameters) != null && bt.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (wt = s.options.holes.diameters) != null && wt.length ? "float" : void 0,
          options: (yi = s.options.holes.diameters) != null && yi.length ? J(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: "Num holes",
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: "A",
              value: 0
            },
            {
              label: "B",
              value: 1
            }
          ]
        },
        edge: {
          enabled: !0,
          required: !0,
          type: "select",
          output: "string",
          options: [
            {
              label: "W1",
              value: "x1"
            },
            {
              label: "W2",
              value: "x2"
            },
            {
              label: "L1",
              value: "y1"
            },
            {
              label: "L2",
              value: "y2"
            }
          ]
        }
      },
      shelfHoles: {
        x: {
          enabled: !0,
          required: !0,
          type: "unitDependent"
        },
        y: {
          enabled: !0,
          required: !0,
          type: "unitDependent"
        },
        depth: {
          required: !1,
          enabled: !0,
          type: "unitDependent"
        }
      },
      corners: {
        type: {
          enabled: !0,
          required: !0,
          label: "Type",
          type: "select",
          output: "string",
          options: J(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: "Size",
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? S({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? S({ v: s.options.corners.maxValue, o: s.options }) : S({ v: E.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), $e = gt({
      holes: {
        diameter: {
          min: s.options.holes.minDiameter,
          max: s.options.holes.maxDiameter
        },
        depth: {
          min: s.options.holes.minDepth,
          max: s.options.holes.maxDepth
        }
      },
      hingeHoles: {
        holeDistance: {
          min: s.options.hingeHoles.minimumHoleDistance
        }
      },
      corners: {
        size: {
          min: s.options.corners.minValue,
          max: s.options.corners.maxValue
        }
      }
    }), Pe = () => {
      var $;
      return !(!(($ = E == null ? void 0 : E.value) != null && $.machining) || !nt.value || ot.value);
    };
    return Le(() => {
      var $;
      return ($ = E.value) == null ? void 0 : $.listId;
    }, () => {
      Pe() && ae();
    }), Le(() => {
      var $;
      return ($ = E.value) == null ? void 0 : $.id;
    }, () => {
      Pe() && ae();
    }), Le(ee, ($) => {
      if (Pe()) {
        if ($ === "banding") {
          h(), q(), h(!1);
          return;
        }
        if (!$) {
          Ue.value = [];
          return;
        }
        h(), Ue.value = E.value.machining.validate(
          E.value,
          $,
          $e == null ? void 0 : $e[$]
        ), $ === "hingeHoles" && E.value.machining.hingeHoles.forEach((U, ue) => {
          Hi(U, $e == null ? void 0 : $e.holes, Ue.value, ue);
        }), h(!1);
      }
    }, { deep: !0, immediate: !0 }), Le(() => {
      var $, U;
      return (U = ($ = E == null ? void 0 : E.value) == null ? void 0 : $.machining) == null ? void 0 : U.holes;
    }, () => {
      Pe() && (h(), Ue.value = E.value.machining.validate(
        E.value,
        "holes",
        $e == null ? void 0 : $e.holes
      ), Q.createHoles(), h(!1));
    }, { deep: !0, immediate: !0 }), Le(() => {
      var $, U;
      return (U = ($ = E == null ? void 0 : E.value) == null ? void 0 : $.machining) == null ? void 0 : U.hingeHoles;
    }, () => {
      Pe() && (h(), E.value.machining.updateHingeHoles(E.value), Ue.value = E.value.machining.validate(
        E.value,
        "hingeHoles",
        $e == null ? void 0 : $e.hingeHoles
      ), E.value.machining.hingeHoles.forEach(($, U) => {
        Hi($, $e == null ? void 0 : $e.holes, Ue.value, U);
      }), Q.createHingeHoles(), h(!1));
    }, { deep: !0, immediate: !0 }), Le(() => {
      var $, U;
      return (U = ($ = E == null ? void 0 : E.value) == null ? void 0 : $.machining) == null ? void 0 : U.corners;
    }, () => {
      if (Pe()) {
        h(), Ue.value = E.value.machining.validate(
          E.value,
          "corners",
          $e == null ? void 0 : $e.corners
        ), E.value.machining.validate(E.value, "holes"), E.value.machining.validate(E.value, "hingeHoles"), Q.createShape(), Q.createHoles(), Q.createHingeHoles();
        for (const $ of E.value.machining.corners)
          $.isPresent() || Ls(E.value, "banding", $.getCorner(), !0);
        Q.createBanding(), h(!1);
      }
    }, { deep: !0, immediate: !0 }), Le(() => {
      var $;
      return ($ = E == null ? void 0 : E.value) == null ? void 0 : $.banding;
    }, () => {
      Pe() && (q(), Q.createBanding());
    }, { deep: !0, immediate: !0 }), ft(() => {
      var U;
      if ((U = document.getElementById("machining")) == null || U.requestFullscreen(), !E.value || !E.value.l || !E.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      Ze(() => ae());
      const $ = document.querySelector("#smartcut-app #machining .diagram");
      pt.value || (pt.value = new ResizeObserver((ue) => {
        clearTimeout(ne.value ?? void 0), rt.value && (ne.value = window.setTimeout(() => {
          if (yt.value) {
            yt.value = !1;
            return;
          }
          ue[0].contentRect.width !== Ke.value && (Ke.value = ue[0].contentRect.width, Ke.value && Q.updateSize());
        }, 10));
      }), pt.value.observe($)), nt.value = !0;
    }), ($, U) => {
      var ge, ze, He, Ve, si;
      const ue = Bt("font-awesome-icon");
      return y(), C("div", yc, [
        $.env === "development" && Ec ? (y(), C("div", bc, [
          ve(x(e), {
            data: [E.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        M("div", null, [
          M("div", wc, [
            M("button", {
              type: "button",
              class: "close",
              onClick: ye
            }, [
              ve(ue, { icon: ["fass", "xmark"] })
            ]),
            (ge = E.value) != null && ge.name ? (y(), C("div", Sc, te(E.value.name), 1)) : W("", !0),
            M("div", xc, te((ze = E.value) == null ? void 0 : ze.l) + " x " + te((He = E.value) == null ? void 0 : He.w) + " " + te((Ve = E.value) != null && Ve.t ? "x " + ((si = E.value) == null ? void 0 : si.t) : null), 1),
            $.options.faces.enabled ? (y(), C("div", kc, [
              M("div", {
                ref: "sides",
                class: Ce(["sides", { flipped: X.value === 1 }]),
                onClick: G
              }, U[4] || (U[4] = [
                M("div", { class: "side-a" }, " A ", -1),
                M("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              U[5] || (U[5] = M("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : W("", !0),
            r.value ? (y(), C("button", {
              key: 2,
              onClick: m
            }, " Delete all machining ")) : W("", !0),
            M("div", Cc, [
              $.options.holes.enabled ? (y(), C("div", {
                key: 0,
                class: Ce({ selected: ee.value === "holes" }),
                onClick: U[0] || (U[0] = (Ge) => ee.value = "holes")
              }, " Holes ", 2)) : W("", !0),
              $.options.hingeHoles.enabled ? (y(), C("div", {
                key: 1,
                class: Ce({ selected: ee.value === "hingeHoles" }),
                onClick: U[1] || (U[1] = (Ge) => ee.value = "hingeHoles")
              }, " Hinge holes ", 2)) : W("", !0),
              $.options.corners.enabled ? (y(), C("div", {
                key: 2,
                class: Ce({ selected: ee.value === "corners" }),
                onClick: U[2] || (U[2] = (Ge) => ee.value = "corners")
              }, " Corners ", 2)) : W("", !0),
              $.options.banding.enabled ? (y(), C("div", {
                key: 3,
                class: Ce({ selected: ee.value === "banding" }),
                onClick: U[3] || (U[3] = (Ge) => ee.value = "banding")
              }, " Banding ", 2)) : W("", !0)
            ]),
            M("div", Ic, [
              ee.value === "holes" || ee.value === "hingeHoles" ? (y(), C("button", {
                key: 0,
                type: "button",
                onClick: Y
              }, " Create ")) : W("", !0),
              ee.value && ee.value !== "banding" ? (y(), C("button", {
                key: 1,
                type: "button",
                onClick: A
              }, " Delete all ")) : W("", !0)
            ]),
            ee.value === "banding" && E.value ? (y(), pe(as, {
              key: 3,
              shape: E.value,
              env: $.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": I.value,
              labels: $.options.banding.labels,
              "all-options": $.options.banding.options,
              pricing: $.options.banding.pricing,
              "user-friendly-field-map": x(Re),
              "part-columns": 1,
              translate: $.translate,
              "orientation-model": 0,
              "get-price": $.getExtrasPrice,
              "format-price": $.formatPrice,
              "get-available-pricing-options": $.getAvailablePricingOptions,
              onSet: We,
              onUpdateAll: st
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : W("", !0),
            ee.value !== "banding" && p.value.length ? (y(), C("div", {
              key: 4,
              class: Ce(["grid-table", ee.value]),
              style: ke({ "grid-template-columns": a.value })
            }, [
              M("div", Lc, [
                N() ? (y(), C("div", Pc)) : W("", !0),
                (y(!0), C(Se, null, De(u.value, (Ge, Qe, he) => cs((y(), C("div", {
                  key: he,
                  class: "cell"
                }, te(Ge.label ?? Qe), 1)), [
                  [hs, Ge.enabled]
                ])), 128)),
                U[6] || (U[6] = M("div", { class: "cell del" }, null, -1))
              ]),
              (y(!0), C(Se, null, De(p.value, (Ge, Qe) => (y(), C("div", {
                key: Qe,
                class: "row"
              }, [
                N() ? (y(), C("div", $c, [
                  M("div", Tc, te(R(Qe)), 1)
                ])) : W("", !0),
                (y(!0), C(Se, null, De(f.value, (he, St) => (y(), C("div", {
                  key: St,
                  class: "cell"
                }, [
                  u.value[he].type !== "select" && u.value[he].type !== "checkbox" ? (y(), pe(ct, {
                    key: 0,
                    id: he + "-" + St,
                    warning: oe(Qe, he),
                    type: u.value[he].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[he].label ?? he,
                    disabled: de(u.value[he]),
                    value: Ge[he],
                    units: o.value,
                    output: u.value[he].output,
                    "onUpdate:value": (xt) => w(Ge, he, xt)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[he].type === "checkbox" ? (y(), pe(ct, {
                    key: 1,
                    id: he + "-" + St,
                    type: "checkbox",
                    warning: oe(Qe, he),
                    "enable-label": !1,
                    disabled: de(u.value[he]),
                    value: Ge[he],
                    output: u.value[he].output,
                    "onUpdate:value": (xt) => w(Ge, he, xt)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[he].type === "select" ? (y(), pe(ct, {
                    key: 2,
                    id: he + "-" + St,
                    type: "select",
                    "enable-label": !1,
                    warning: oe(Qe, he),
                    disabled: de(u.value[he]),
                    value: Ge[he],
                    options: u.value[he].options,
                    output: u.value[he].output,
                    "onUpdate:value": (xt) => w(Ge, he, xt)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : W("", !0)
                ]))), 128)),
                M("div", {
                  class: "cell",
                  onClick: (he) => se(Qe)
                }, [
                  M("div", Oc, [
                    ve(ue, { icon: ["fass", "trash"] })
                  ])
                ], 8, Dc),
                (y(!0), C(Se, null, De(j(Qe), (he, St) => (y(), C("div", {
                  key: St,
                  class: "group validation",
                  style: ke({ "grid-column-end": "span " + l.value })
                }, te(he), 5))), 128))
              ]))), 128))
            ], 6)) : ee.value !== "banding" ? (y(), C("div", Ac, " Please select from the menu above ")) : W("", !0)
          ]),
          M("div", {
            id: "machining-diagram",
            class: Ce(["diagram", { flipped: X.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), Rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Mc }, Symbol.toStringTag, { value: "Module" })), Fc = {
  name: "Drop",
  props: {
    requiredType: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Drop file here"
    },
    thinking: {
      type: Boolean,
      default: !1
    },
    maxFiles: {
      type: Number,
      default: 1
    }
  },
  emits: ["drop"],
  data() {
    return {
      dropClass: null,
      events: ["dragenter", "dragover", "dragleave", "dragend", "drop"],
      loadingProgress: 0,
      files: _r([])
    };
  },
  mounted() {
    this.events.forEach((i) => {
      this.$el.addEventListener(i, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((i) => {
      this.$el.removeEventListener(i, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(i) {
      return new Promise((t, e) => {
        const s = new FileReader();
        s.onloadend = () => {
          t(s.result);
        }, s.onerror = e, s.readAsText(i);
      });
    },
    async onDrop(i) {
      const t = [...i.dataTransfer.files];
      if (this.maxFiles && t.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (t.every((e) => e.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let e = 0; e < t.length; e++) {
        const s = t[e];
        let n;
        try {
          n = await this.readFileAsync(s);
        } catch (l) {
          console.error(l), alert(`Error reading file ${e + 1}`);
          return;
        }
        const r = {
          data: n,
          name: s.name
        };
        this.files.push(r);
        const o = e / t.length * 100;
        this.loadingProgress = o;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(i) {
      this.dropClass = (i == null ? void 0 : i.type) ?? null, i.preventDefault();
    }
  }
};
function _c(i, t, e, s, n, r) {
  return y(), C("div", {
    id: "drop",
    class: Ce({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = qr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    M("div", null, te(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const qc = /* @__PURE__ */ ti(Fc, [["render", _c]]), Bc = { id: "import-file" }, Hc = /* @__PURE__ */ Oe({
  __name: "ImportCSV",
  props: {
    numberFormat: {
      type: String,
      default: "decimal"
    },
    bandingOptions: {
      type: Object,
      default: () => ({})
    },
    finishOptions: {
      type: Object,
      default: () => ({})
    },
    bandingLabels: {
      type: Array,
      default: () => []
    },
    finishLabels: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  emits: ["error", "import"],
  setup(i, { emit: t }) {
    const e = i, s = t, { t: n } = Ui(["main", "errors"]), r = H([]), o = H([]), l = H([]), a = H([]), u = H({}), f = H([]), p = H(!1), I = H(null), h = H(null), m = [
      "l",
      "w",
      "t",
      "q",
      "orientationLock",
      "name",
      "material",
      "banding",
      "finish",
      "cost"
    ], w = Z(() => {
      const A = {};
      return r.value.forEach((q, j) => {
        A[j] = {};
        for (const [ie, oe] of Object.entries(q)) {
          if (!m.includes(ie)) continue;
          const ye = J(ie, oe);
          (ye === !0 || ye === !1) && (A[j][ie] = ye);
        }
      }), A;
    }), R = Z(() => e.customFields.map((A) => A.label)), N = (A, q) => {
      if (q) {
        const j = Object.keys(q), ie = [[]];
        j.forEach((ye) => {
          const de = q[ye], We = [];
          ie.forEach((st) => {
            de.forEach((E) => We.push([...st, E]));
          }), ie.splice(0, ie.length, ...We);
        });
        const oe = /* @__PURE__ */ new Set();
        ie.forEach((ye) => oe.add(ye.join("|").toLowerCase())), A === "banding" ? I.value = oe : h.value = oe;
      }
    }, J = (A, q) => {
      if (q === "???") return !0;
      function j(oe) {
        return oe ? (oe = oe.trim().toLowerCase(), oe === "l" || oe === "w") : !0;
      }
      const ie = {
        banding: (oe) => z(oe, I.value, "banding"),
        finish: (oe) => z(oe, h.value, "finish"),
        orientationLock: j
      };
      return A in ie ? ie[A](q) : null;
    }, z = (A, q, j) => {
      if (A = L(A), !A) return !0;
      const ie = A.split(","), oe = ie.every((ye) => !ye || q.has(ye.toLowerCase()));
      if (!oe) {
        const ye = ie.filter((de) => !q.has(de.toLowerCase()));
        console.log(`Valid ${j} choices...`), console.table(Array.from(q)), console.log(`The following ${j} choices are invalid`, ye);
      }
      return oe;
    }, Q = (A, q) => {
      const j = {
        bandingOptions: (ie) => ae(ie, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (ie) => ae(ie, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return A in j ? j[A](q) : null;
    }, ae = (A, q, j, ie) => {
      if (A = L(A), !A)
        return ie.reduce((de, We) => ({ ...de, [We]: {} }), {});
      const oe = A.split(",").map((de) => de.toLowerCase()), ye = {};
      return ie.forEach((de, We) => {
        ye[de] = {}, Object.keys(q).forEach((st, E) => {
          var pt;
          ye[de][j[E]] = ((pt = oe[We]) == null ? void 0 : pt.split("|")[E]) || "";
        });
      }), ye;
    }, G = () => r.value.map((A, q) => ({
      l: e.numberFormat === "decimal" ? Mi(A.l) : A.l,
      w: e.numberFormat === "decimal" ? Mi(A.w) : A.w,
      t: e.numberFormat === "decimal" ? Mi(A.t) : A.t,
      q: A.q,
      orientationLock: A.orientationLock,
      name: A.name,
      material: A.material,
      bandingOptions: w.value[q].banding ? Q("bandingOptions", A.banding) : null,
      finishOptions: w.value[q].finish ? Q("finishOptions", A.finish) : null,
      numberFormat: e.numberFormat,
      customData: le(A)
    })), Y = (A) => {
      var j;
      const q = (j = A == null ? void 0 : A[0]) == null ? void 0 : j.data;
      q && Cr.parse(q, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (ie) => v(ie),
        error: () => s("error")
      });
    }, v = (A) => {
      o.value = A.data.filter((q) => q.some((j) => j)), l.value = o.value[0], u.value = {};
      for (let q = l.value.length; q--; ) {
        const j = l.value[q], ie = T(j);
        ie ? u.value[q] = ie : (u.value[q] = null, R.value.includes(j) && (u.value[q] = "customData." + e.customFields.find((oe) => oe.label === j).id));
      }
      K(), o.value.shift(), F(), se();
    }, T = (A) => {
      const q = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", n("l"), n("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", n("w"), n("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", n("t"), n("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", n("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", n("quantity"), n("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", n("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", n("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", n("banding")],
        finish: ["finish", "paint"]
      }, j = Object.entries(q).reduce(
        (ie, [oe, ye]) => (ye.some((de) => A && A.toLowerCase() === de) && ie.push(oe), ie),
        []
      );
      return j.length > 1 ? null : j[0];
    }, K = () => {
      p.value = !1, a.value = Object.values(u.value).map((q) => !q || q === "N" ? null : m.includes(q) ? q : (p.value = !0, null));
      const A = a.value.filter((q, j) => a.value.indexOf(q) !== j);
      f.value = A.map((q) => a.value.reduce(
        (j, ie, oe) => (ie && ie === q && j.push(oe), j),
        []
      ));
    }, L = (A) => A && A.replace(/\s*,\s*/g, ","), F = () => {
      const A = o.value.map((q) => {
        const j = {};
        return l.value.forEach((ie, oe) => {
          if (f.value.flat().includes(oe))
            return j[u.value[oe]] = "???";
          j[u.value[oe]] = q[oe];
        }), j;
      });
      r.value = A;
    }, le = (A) => {
      let q = {};
      for (let j in A)
        if (j.startsWith("customData.")) {
          let ie = j.slice(11);
          q[ie] = A[j];
        }
      return q;
    }, se = () => {
      const A = G();
      A != null && A.length && s("import", A);
    };
    return ft(() => {
      N("banding", e.bandingOptions), N("finish", e.finishOptions);
    }), (A, q) => (y(), C("div", Bc, [
      ve(qc, {
        label: x(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: Y
      }, null, 8, ["label"])
    ]));
  }
}), Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Hc }, Symbol.toStringTag, { value: "Module" }));
class Lt extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class dn {
  constructor({ url: t = null, spec: e = null }) {
    c(this, "url");
    c(this, "spec");
    // Update the operations object to use the FormulaOperation type
    c(this, "operations", {
      add: (t, e) => t + e,
      subtract: (t, e) => t - e,
      multiply: (t, e) => t * e,
      divide: (t, e) => {
        if (e === 0) throw new Lt("Division by zero", "DIVISION_BY_ZERO");
        return t / e;
      },
      ">": (t, e) => t > e,
      "<": (t, e) => t < e,
      ">=": (t, e) => t >= e,
      "<=": (t, e) => t <= e,
      "==": (t, e) => t === e
    });
    c(this, "precedence", {
      "+": 4,
      "-": 4,
      "*": 5,
      "/": 5,
      ">": 3,
      "<": 3,
      ">=": 3,
      "<=": 3,
      "==": 3,
      "?": 2,
      ":": 2
    });
    t && (this.url = t), e && (this.spec = e);
  }
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(t, e = {}) {
    if (typeof t == "number" || typeof t == "boolean") return t;
    if (typeof t == "string") {
      if (this.isStringLiteral(t))
        return t.slice(1, -1);
      if (!(t in e))
        throw new Error(`Undefined variable: ${t}`);
      return e[t];
    }
    const { operation: s, operands: n } = t;
    if (!s)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(s))
      throw new Error(`Invalid operation: ${s}`);
    if (s === "ternary") {
      const l = this.evaluate(t.condition, e), a = this.evaluate(t.trueExpr, e), u = this.evaluate(t.falseExpr, e);
      return l ? a : u;
    }
    if (!n || !Array.isArray(n) || n.length !== 2)
      throw new Error("Invalid formula structure");
    const [r, o] = n.map((l) => this.evaluate(l, e));
    return [">", "<", ">=", "<=", "=="].includes(s) ? this.evaluateComparison(s, r, o) : this.operations[s](r, o);
  }
  // Update getOperation to use the type guard
  getOperation(t) {
    const s = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
      ">": ">",
      "<": "<",
      ">=": ">=",
      "<=": "<=",
      "==": "==",
      "?:": "ternary"
    }[t];
    if (!this.isFormulaOperation(s))
      throw new Error(`Unsupported operator: ${t}`);
    return s;
  }
  isFormulaOperation(t) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "ternary"].includes(t);
  }
  isFormula(t) {
    return typeof t == "string" && t.startsWith("=");
  }
  stripFormulaPrefix(t) {
    return t.substring(1);
  }
  evaluateValue(t, e, s = {}) {
    return typeof t == "number" || !this.isFormula(t) ? t : this.evaluateFormula(this.stripFormulaPrefix(t), e, s);
  }
  extractDependencies(t) {
    const e = /* @__PURE__ */ new Set();
    if (typeof t == "string") {
      const s = Array.from(t.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const o of s)
        e.add(`${o[1]}.${o[2]}`);
      const n = Array.from(t.matchAll(/inputs\.(\w+)/g));
      for (const o of n)
        e.add(`input.${o[1]}`);
      const r = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const o of r)
        t.includes(o) && e.add(`input.${o}`);
    }
    return e;
  }
  buildFormulaGraph(t, e) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (r, o) => {
      const l = `${t}.${r}`;
      s.nodes.set(l, {
        panelKey: t,
        attribute: r,
        formula: o
      }), s.edges.set(l, this.isFormula(o) ? this.extractDependencies(this.stripFormulaPrefix(o.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", e.l), n("w", e.w), n("t", e.t), n("q", e.q), s;
  }
  resolveFormulas(t, e, s, n = {}) {
    const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = (a) => {
      if (r.has(a))
        return r.get(a);
      const [u, f] = a.split(".");
      if (!t.nodes.has(a)) {
        const w = n[u];
        if (w)
          return f === "q" ? w.q : w[f];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const p = t.nodes.get(a);
      if (typeof p.formula == "number")
        return r.set(a, p.formula), p.formula;
      o.add(a);
      const I = t.edges.get(a) || /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
      for (const w of I)
        if (w.startsWith("input.")) {
          const R = w.split(".")[1];
          h.set(w, s[R]);
        } else
          h.set(w, l(w));
      const m = this.evaluateFormulaWithDeps(p.formula, h, s);
      return r.set(a, m), o.delete(a), m;
    };
    for (const a of t.nodes.keys())
      l(a);
    return Object.fromEntries(r);
  }
  evaluateFormulaWithDeps(t, e, s, n) {
    if (!this.isFormula(t)) return t;
    let r = this.stripFormulaPrefix(t.toString());
    return r = r.replace(
      /inputs\.(\w+)/g,
      (o, l) => {
        var a;
        return ((a = s[l]) == null ? void 0 : a.toString()) || "0";
      }
    ), r = r.replace(
      /panels\.(\w+)\.(\w+)/g,
      (o, l, a) => {
        if (l === (n == null ? void 0 : n.panelKey) && n[a] !== void 0)
          return n[a].toString();
        if (e.has(`${l}.${a}`))
          return e.get(`${l}.${a}`).toString();
        throw new Error(`Undefined variable in formula: ${o}`);
      }
    ), this.evaluate(this.parse(r), s);
  }
  calculatePanels(t) {
    var s;
    if (!((s = this.spec) != null && s.panels)) return {};
    const e = {};
    for (const [n, r] of Object.entries(this.spec.panels)) {
      const o = this.buildFormulaGraph(n, r), l = this.resolveFormulas(o, r, t, e), a = {
        panelKey: n,
        l: l[`${n}.l`],
        w: l[`${n}.w`],
        t: l[`${n}.t`],
        q: l[`${n}.q`] || 1
      };
      e[n] = {
        name: r.name,
        material: r.material,
        bandingOptions: r.bandingOptions ?? {},
        finishOptions: r.finishOptions ?? {},
        orientationLock: r.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(r.orientationLock, /* @__PURE__ */ new Map(), t, a) : void 0,
        ...a
      };
    }
    return e;
  }
  evaluateFormula(t, e, s = {}) {
    if (typeof t == "number") return t;
    if (typeof t == "string") {
      const n = t.replace(/inputs\.(\w+)/g, (o, l) => {
        if (!(l in e))
          throw new Error(`Input not found: ${l}`);
        return e[l].toString();
      }), r = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (r) {
        const [, o, l] = r;
        if (!s[o])
          throw new Error(`Panel not found: ${o}`);
        return l === "q" ? s[o].q ?? 1 : s[o].dimensions[l];
      }
      return this.evaluate(this.parse(n), e);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(t) {
    const e = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|\+|-|\*|\/|>|<|\?|:|\(|\)|\w+|\.)/g;
    return t.match(e) || [];
  }
  isValidToken(t) {
    return this.isNumber(t) || this.isVariable(t) || t in this.precedence || t === "(" || t === ")" || t === "." || this.isIdentifier(t);
  }
  isIdentifier(t) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t);
  }
  evaluateComparison(t, e, s) {
    switch (t) {
      case ">":
        return e > s;
      case "<":
        return e < s;
      case ">=":
        return e >= s;
      case "<=":
        return e <= s;
      case "==":
        return e === s;
      default:
        throw new Error(`Unsupported comparison operator: ${t}`);
    }
  }
  isNumber(t) {
    return !isNaN(Number(t));
  }
  isVariable(t) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t);
  }
  toPostfix(t) {
    const e = [], s = [];
    for (const n of t)
      if (this.isNumber(n) || this.isStringLiteral(n) || this.isIdentifier(n))
        e.push(this.isNumber(n) ? Number(n) : n);
      else if (n === "(")
        s.push(n);
      else if (n === ")") {
        for (; s.length && s[s.length - 1] !== "("; )
          e.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched parentheses");
        s.pop();
      } else if (n === "?") {
        for (; s.length && this.precedence[s[s.length - 1]] > this.precedence[n]; )
          e.push(s.pop());
        s.push(n);
      } else if (n === ":") {
        for (; s.length && s[s.length - 1] !== "?"; )
          e.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched ternary operator");
        s.pop(), s.push("?:");
      } else if (n in this.precedence) {
        for (; s.length && this.precedence[s[s.length - 1]] >= this.precedence[n]; )
          e.push(s.pop());
        s.push(n);
      } else
        throw new Error(`Invalid token: ${n}`);
    for (; s.length; ) {
      const n = s.pop();
      if (n === "(" || n === ")")
        throw new Error("Mismatched parentheses");
      e.push(n);
    }
    return e;
  }
  parse(t) {
    if (typeof t != "string")
      throw new Error("Parse input must be a string");
    if (!t.trim())
      throw new Error("Empty input");
    const e = this.tokenize(t), s = this.toPostfix(e);
    return this.toFormulaJSON(s);
  }
  isStringLiteral(t) {
    return /^'.*'$/.test(t);
  }
  toFormulaJSON(t) {
    const e = [];
    for (const s of t)
      if (typeof s == "number" || this.isStringLiteral(s.toString()) || this.isVariable(s.toString()))
        e.push(s);
      else if (s === "?:") {
        if (e.length < 3)
          throw new Error("Invalid ternary expression");
        const n = e.pop(), r = e.pop(), o = e.pop();
        e.push({
          operation: "ternary",
          condition: o,
          trueExpr: r,
          falseExpr: n
        });
      } else {
        if (e.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const n = e.pop(), r = e.pop();
        e.push({
          operation: this.getOperation(s.toString()),
          operands: [r, n]
        });
      }
    if (e.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return e[0];
  }
  calculateHardware(t) {
    var e;
    return (e = this.spec) != null && e.hardware ? Object.entries(this.spec.hardware).reduce((s, [n, r]) => {
      const o = this.evaluateValue(r.q, t);
      return s[n] = {
        name: r.name,
        q: Math.ceil(o),
        totalCost: Math.ceil(o) * r.cost
      }, s;
    }, {}) : {};
  }
  calculateAll(t) {
    this.validateInputs(t);
    const e = this.calculatePanels(t), s = this.calculateHardware(t);
    return {
      inputs: t,
      panels: e,
      hardware: s
    };
  }
  validateInputs(t) {
    var e;
    if (!((e = this.spec) != null && e.inputs)) throw new Lt("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new Lt(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new Lt(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url) return null;
    try {
      const t = await fetch(this.url);
      if (!t.ok)
        throw new Error(`HTTP error! status: ${t.status}`);
      const e = await t.json();
      return this.spec = e, this.validateSpec(), e;
    } catch (t) {
      return console.error("Error fetching or parsing JSON file:", t), null;
    }
  }
  validateSpec() {
    const t = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && t.push("Specification must contain inputs"), { isValid: t.length === 0, errors: t }) : (t.push("Specification is required"), { isValid: !1, errors: t });
  }
  validateFields(t) {
    var n;
    if (!((n = this.spec) != null && n.inputs))
      throw new Lt("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new Lt(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new Lt(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new Lt(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
      s++;
    }
  }
  fieldsToInputs(t) {
    var s;
    const e = Object.keys(((s = this.spec) == null ? void 0 : s.inputs) || {});
    return t.reduce((n, r, o) => {
      const l = e[o];
      return l && (n[l] = r.value), n;
    }, {});
  }
  getEmptyFields() {
    var e;
    const t = {};
    return (e = this.spec) != null && e.inputs && Object.keys(this.spec.inputs).forEach((s, n) => {
      t[n] = { value: 0 };
    }), t;
  }
  getDefaultFields() {
    var e;
    const t = {};
    return (e = this.spec) != null && e.inputs && Object.values(this.spec.inputs).forEach((s, n) => {
      t[n] = { value: s.default };
    }), t;
  }
  calculatePanelsFromFields(t) {
    this.validateFields(t);
    const e = this.fieldsToInputs(t);
    return this.calculatePanels(e);
  }
  calculateHardwareFromFields(t) {
    this.validateFields(t);
    const e = this.fieldsToInputs(t);
    return this.calculateHardware(e);
  }
  calculateAllFromFields(t) {
    this.validateFields(t);
    const e = this.fieldsToInputs(t);
    return this.calculateAll(e);
  }
  getFieldMetadata() {
    var e;
    const t = [];
    return (e = this.spec) != null && e.inputs && Object.entries(this.spec.inputs).forEach(([s, n], r) => {
      t.push({
        index: r,
        name: s,
        label: n.label,
        type: n.type,
        min: n.min,
        max: n.max,
        default: n.default
      });
    }), t;
  }
}
const Wc = {
  key: 0,
  class: "debug"
}, Nc = { id: "formula-pricing" }, Uc = {
  key: 1,
  class: "extras"
}, jc = { class: "heading" }, zc = { id: "hardware-total" }, Vc = { class: "heading panels" }, Yc = !1, Xc = /* @__PURE__ */ Oe({
  __name: "FormulaPricing",
  props: {
    currency: {
      type: String,
      default: "GBP"
    },
    url: {
      type: String,
      default: ""
    },
    spec: {
      type: Object,
      default: () => ({})
    },
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "mm"
    },
    formatPrice: {
      type: Function,
      default: (i) => i.toFixed(2)
    }
  },
  emits: ["hardware-result", "panel-result"],
  setup(i, { emit: t }) {
    const e = $t(() => Promise.resolve().then(() => Ki)), s = i, { t: n } = Ui(["main", "errors"]), r = t, o = Br("calculator"), l = Z(() => o()), a = H("production");
    let u = null;
    const f = H(null), p = H([]), I = H(!1), h = H(""), m = Z(() => {
      if (!I.value || !p.value.length || p.value.every((v) => v.value === null)) return null;
      const Y = Q();
      return Ze(() => r("panel-result", Y)), Y;
    }), w = Z(() => {
      if (!l.value || !I.value || !p.value.length || p.value.every((v) => v.value === null)) return;
      const Y = ae();
      return Ze(() => r("hardware-result", Y, R.value)), Y;
    }), R = Z(() => {
      if (w.value)
        return Object.values(w.value).reduce((Y, v) => Y + v.totalCost, 0);
    });
    Le(m, (Y) => {
      var L, F, le;
      if (!I.value || !Y || !l.value || !((L = l.value) != null && L.inputShapes)) return;
      const v = (se) => se != null && se.name ? se.name.toLowerCase() : "", T = new Map(
        l.value.inputShapes.map((se) => [v(se), se])
      ), K = /* @__PURE__ */ new Set();
      for (const se of Object.values(m.value)) {
        if (!se.name) continue;
        const A = v(se), q = T.get(A), j = {
          ...se,
          name: se.name.toUpperCase() || (q == null ? void 0 : q.name.toUpperCase()),
          material: ((F = se.material) == null ? void 0 : F.toUpperCase()) || ((le = q == null ? void 0 : q.material) == null ? void 0 : le.toUpperCase()),
          bandingOptions: se.bandingOptions || {},
          finishOptions: se.finishOptions || {},
          orientationLock: se.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, ie = q || l.value.createInputShape(j);
        if (q) {
          Object.assign(q, j);
          for (const oe of ["banding", "finish"])
            l.value.initExtrasOptions(q, oe);
        } else
          l.value.inputShapes.push(ie);
        K.add(A);
      }
      l.value.inputShapes = l.value.inputShapes.filter(
        (se) => K.has(v(se))
      );
    }, { immediate: !1 }), ft(() => G());
    const N = (Y) => {
      s.debug && console.log(Y);
    }, J = () => {
      p.value = Object.values(f.value.inputs).map((Y) => ({
        value: Y.default ?? null
      })), console.log(p.value);
    }, z = (Y, v) => {
      p.value[Y] && (p.value[Y].value = v);
    }, Q = () => {
      try {
        return u.calculatePanelsFromFields(p.value);
      } catch (Y) {
        return l.value.inputShapes.length = 0, console.error(Y), null;
      }
    }, ae = () => {
      try {
        return u.calculateHardwareFromFields(p.value);
      } catch (Y) {
        return console.error(Y), null;
      }
    }, G = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (N(`SmartCut - Formula calculator init from url: ${s.url}`), u = new dn({ url: s.url }), f.value = await u.getSpec()) : s.spec && (N("SmartCut - Formula calculator init with JSON"), u = new dn({ spec: s.spec }), f.value = await u.getSpec()), J(), I.value = !0;
    };
    return (Y, v) => {
      var T, K;
      return y(), C(Se, null, [
        a.value === "development" && Yc ? (y(), C("div", Wc, [
          v[1] || (v[1] = M("div", null, "Developer information", -1)),
          ve(x(e), {
            data: [m.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        M("div", Nc, [
          (T = f.value) != null && T.projectName ? (y(), pe(ct, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: h.value,
            "onUpdate:value": v[0] || (v[0] = (L) => h.value = L)
          }, null, 8, ["value"])) : W("", !0),
          (y(!0), C(Se, null, De((K = f.value) == null ? void 0 : K.inputs, (L, F, le) => {
            var se;
            return y(), pe(ct, {
              id: "formula-field-" + le,
              key: le,
              type: L.type,
              label: L.label,
              placeholder: L.label,
              min: L.min ?? 0,
              max: L.max ?? null,
              default: L.default ?? 0,
              value: (se = p.value[le]) == null ? void 0 : se.value,
              "onUpdate:value": (A) => z(le, A)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          w.value ? (y(), C("div", Uc, [
            M("div", jc, te(x(n)("Hardware")), 1),
            (y(!0), C(Se, null, De(w.value, (L, F) => (y(), C("div", { key: F }, te(L.name) + " x" + te(L.q) + " = " + te(i.formatPrice(L.totalCost)), 1))), 128)),
            M("div", zc, te(x(n)("Hardware total")) + " = " + te(i.formatPrice(R.value)), 1)
          ])) : W("", !0),
          M("div", Vc, te(x(n)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Xc }, Symbol.toStringTag, { value: "Module" })), Kc = { id: "smartcut-notices" }, Zc = { class: "content" }, Jc = ["onClick"], Qc = ["innerHTML"], eh = /* @__PURE__ */ Oe({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = ps(), n = H({}), r = Z(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Bt("font-awesome-icon");
      return y(), pe(pn, { to: "body" }, [
        M("div", Kc, [
          ve(Hr, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ce(["notices-container", t.position])
          }, {
            default: fs(() => [
              (y(!0), C(Se, null, De(x(e), (u) => (y(), C("div", {
                key: u.id,
                ref_for: !0,
                ref: (f) => {
                  f && (n.value[u.id] = f);
                },
                class: Ce([
                  "notice",
                  `notice--${u.type}`
                ])
              }, [
                M("div", Zc, [
                  M("div", {
                    class: "message",
                    onClick: (f) => u.action()
                  }, te(u.message), 9, Jc),
                  M("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, Qc)
                ]),
                u.persistent ? W("", !0) : (y(), pe(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (f) => x(s)(u.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: eh }, Symbol.toStringTag, { value: "Module" }));
export {
  Jt as A,
  Jr as B,
  Sh as C,
  ji as D,
  wh as E,
  xh as F,
  Ss as I,
  kh as N,
  Ki as O,
  Gt as S,
  ti as _,
  ci as a,
  re as b,
  Ot as c,
  Te as d,
  yh as e,
  Il as f,
  mh as g,
  Dt as h,
  hh as i,
  dh as j,
  ph as k,
  fh as l,
  bh as m,
  gh as n,
  Bi as o,
  S as p,
  Vt as q,
  ch as r,
  wo as s,
  vh as t,
  ah as u,
  lh as v,
  vt as w,
  mt as x,
  Mt as y,
  js as z
};
