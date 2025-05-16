var kr = Object.defineProperty;
var Cr = (i, e, t) => e in i ? kr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var c = (i, e, t) => Cr(i, typeof e != "symbol" ? e + "" : e, t);
import { F as pi, g as ti, d as Ei, i as $t, c as Ji, a as Sn, e as Hs, b as Qe, v as us, t as Fi, h as Ir, s as Lr, f as Pr, o as Dr, j as Tr, k as $r, P as Ar } from "./vendor-DABu9zvL.js";
import { i as Or } from "./vendor-i18n-Bf4ASP8L.js";
import { d as Me, c as I, o as y, F as xe, r as Ee, n as ke, a as Ce, b as $, w as cs, t as te, v as hs, e as G, f as Er, g as H, h as Z, i as Pe, j as gt, k as it, l as ds, m as di, u as C, p as Qt, q as ge, s as Mr, x as fs, y as ji, z as Wt, A as ye, B as Rr, C as Tt, D as Fr, E as _r, G as qr, H as Br, I as bt, J as Hr, T as Gr, K as xn, L as Wr, M as Gs, N as Nr, O as Ur, P as jr, Q as zr, R as Vr } from "./vendor-vue-D8CfTNeX.js";
import { u as kn, a as ps, b as gs, c as Yr, d as Xr, e as Kr } from "./composables-DZFlso1I.js";
import { a as Cn, b as In, l as rt, c as _i, d as qi, s as _e, r as dt, e as fi, f as Ln, g as Zr, h as Jr, i as Qr, p as eo, S as to, j as io, k as so } from "./vendor-d3-B-JATA3m.js";
function ni(i) {
  return !(!i || typeof i != "string");
}
function no(i) {
  return !ni(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function Zt(i) {
  return ni(i) ? i.trim().split(" ").map((e) => Oe(e)).join(" ") : "";
}
function Oe(i) {
  return ni(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function ms(i) {
  return ni(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), i.trim()) : "";
}
function ro(i) {
  return ni(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function oo(i, e = 100) {
  return ni(i) ? (i = i.trim(), i = i.substring(0, e), i) : "";
}
let Pn = Or;
function gh(i) {
  Pn = i;
}
function Be(i, e) {
  const t = Pn.t(i, { ns: ["main", "errors"], ...e });
  return t || i;
}
const Kt = 1e-10, lo = 10, ao = Number.MAX_SAFE_INTEGER, uo = 4294967295, We = (i) => typeof i == "number" && Number.isFinite(i), Mi = (i) => Array.isArray(i) && i.length > 0;
function hi(i, e, t = Kt) {
  if (i === e) return 0;
  if (Number.isInteger(i) && Number.isInteger(e))
    return i > e ? 1 : -1;
  const s = i - e;
  return Math.abs(s) < t ? 0 : s;
}
const co = {
  greaterThan: (i, e, t = Kt) => !We(i) || !We(e) ? !1 : hi(i, e, t) > 0,
  greaterThanOrEqualTo: (i, e, t = Kt) => !We(i) || !We(e) ? !1 : hi(i, e, t) >= 0,
  lessThan: (i, e, t = Kt) => !We(i) || !We(e) ? !1 : hi(i, e, t) < 0,
  lessThanOrEqualTo: (i, e, t = Kt) => !We(i) || !We(e) ? !1 : hi(i, e, t) <= 0,
  equalTo: (i, e, t = Kt) => !We(i) || !We(e) ? !1 : hi(i, e, t) === 0
};
function ho(i) {
  return We(i) ? Number.isInteger(i) ? i : Number(i.toFixed(lo)) : !1;
}
function fo(i) {
  if (!We(i) || i < 0 || i > ao)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (uo + 1) * i);
}
function po(i, e) {
  if (!Mi(i))
    throw new Error("Invalid array parameter");
  if (!We(e) || e < 0 || e > i.length)
    throw new Error("Invalid size parameter");
  const t = i.slice(), s = i.length - e;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [t[n], t[r]] = [t[r], t[n]];
  }
  return t.slice(s);
}
class Li {
  static calculateMean(e) {
    if (!Mi(e))
      throw new Error("Invalid input array");
    return e.reduce((t, s) => t + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, t = null) {
    if (!Mi(e))
      throw new Error("Invalid input array");
    const s = t ?? this.calculateMean(e), n = e.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Mi(e))
      throw new Error("Invalid input array");
    const t = this.calculateMean(e);
    if (t === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, t) / t;
  }
}
const ue = {
  ...co,
  isNumber: We,
  round: ho,
  getRandom: fo,
  getRandomSample: po,
  calculateStandardDeviation: Li.calculateStandardDeviation.bind(Li),
  calculateCoefficientOfVariation: Li.calculateCoefficientOfVariation.bind(Li)
}, Ws = 10, go = 0;
class vs extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
function mo(i) {
  const e = i.toString(), t = e.indexOf(".");
  return t === -1 ? 0 : e.length - t - 1;
}
function x(i) {
  var o, l, a, u;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && !((o = i.o) != null && o.numberFormat) ? null : "";
  if (typeof i.v == "number" && (i.nf === "decimal" || !i.nf && !((l = i.o) != null && l.numberFormat))) {
    if (i.dp === void 0 && ((a = i.o) == null ? void 0 : a.decimalPlaces) === void 0)
      return i.v;
    const f = i.dp ?? ((u = i.o) == null ? void 0 : u.decimalPlaces) ?? Ws, p = Math.pow(10, f);
    return Math.round(i.v * p) / p;
  }
  const e = i.o ?? {}, t = i.nf ?? e.numberFormat ?? "decimal", s = i.dp ?? e.decimalPlaces ?? Ws, n = i.pl ?? e.parseLocale ?? !1, r = i.fr ?? e.fractionRoundTo ?? go;
  try {
    const f = So(i.v, n);
    return f ? t === "decimal" ? vo(f, i.v, s) : yo(f, r) : t === "decimal" ? 0 : "0";
  } catch (f) {
    throw new vs(
      `Failed to convert number format: ${i.v} to ${t}. ${f.message}`
    );
  }
}
function vo(i, e, t) {
  if (typeof i == "number" && !String(e).includes("/")) {
    if (typeof t != "number")
      return i;
    const l = Math.pow(10, t);
    return Math.round(i * l) / l;
  }
  if (typeof i == "string" && !i.includes("/")) {
    const l = Number(i);
    if (typeof t != "number")
      return Pi(l);
    const a = Math.pow(10, t);
    return Pi(Math.round(l * a) / a);
  }
  const n = new pi(i).valueOf();
  if (typeof e == "string" && e.includes("/")) {
    if (typeof t == "number") {
      const l = Math.pow(10, t);
      return Pi(Math.round(n * l) / l);
    }
    return n;
  }
  const r = mo(String(e)), o = Math.pow(10, r);
  return Pi(Math.round(n * o) / o);
}
function yo(i, e) {
  if (typeof i == "number" && Number.isInteger(i))
    return `${i}/1`;
  const t = new pi(i);
  if (e > 0) {
    const s = t.mul(e), n = Math.round(s.valueOf());
    return new pi(n, e).toFraction(!0);
  }
  return t.simplify().toFraction(!0);
}
function Pi(i) {
  const e = i.toString();
  return e.includes(".") && /\.0+$/.test(e) ? parseInt(e, 10) : i;
}
function bo(i = "en-US") {
  var e, t;
  try {
    const s = Intl.NumberFormat(i).formatToParts(123456789e-2);
    return {
      thousandsSeparator: ((e = s.find((n) => n.type === "group")) == null ? void 0 : e.value) || ",",
      decimalSeparator: ((t = s.find((n) => n.type === "decimal")) == null ? void 0 : t.value) || "."
    };
  } catch {
    return console.warn("Failed to detect number separators. Using defaults."), { thousandsSeparator: ",", decimalSeparator: "." };
  }
}
function Ri(i) {
  if (i == null || i === "") return null;
  const e = String(i).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: t, decimalSeparator: s } = bo(), n = e.replace(new RegExp(`\\${t}`, "g"), "").replace(new RegExp(`\\${s}`), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch {
    throw new vs(`Failed to parse number: ${i}`);
  }
}
function wo(i) {
  if (!i) return !1;
  const e = i.toString().trim();
  return /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/.test(e);
}
function So(i, e = !1) {
  if (!i && i !== 0) return null;
  let t = String(i).trim();
  if (!t) return null;
  try {
    if (wo(i))
      return t.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
    {
      e ? (t = t.replace(/[^0-9,. -]/g, ""), t = t.replace(/\s/g, "")) : (t = t.replace(/[^0-9,.-]/g, ""), t = t.replace(/,/g, "")), t.startsWith(".") && (t = "0" + t), t.startsWith("-.") && (t = "-0." + t.slice(2));
      const s = e ? Ri(t) : parseFloat(t);
      return s === null || isNaN(s) ? null : s.toString();
    }
  } catch (s) {
    throw new vs(
      `Failed to clean numeric input: ${i}. ${s.message}`
    );
  }
}
function mh(i, e, t = null, s = null) {
  if (i && !(!Se(i) && !lt(i))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of i.numberFormatKeys) {
      if (typeof i[n] == "object") {
        for (const r in i[n])
          i[n][r] = x({ v: i[n][r], nf: e, dp: t, pl: !1, fr: s });
        return;
      }
      i[n] = x({ v: i[n], nf: e, dp: t, pl: !1, fr: s });
    }
  }
}
const Bi = {
  missingProperty: (i, e) => `[Sorting Warning] Missing property "${i}" in ${e}`,
  missingMethod: (i, e) => `[Sorting Warning] Missing method "${i}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function Ns(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Us(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function js(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const me = (i, e, t) => e in i ? i[e] : (console.warn(Bi.missingProperty(String(e), t)), null), Di = (i, e) => (t, s) => {
  const n = i(t, s);
  return n !== 0 ? n : e(t, s);
}, Xt = (i, e) => {
  if (!Ns(i) || !Ns(e))
    return console.warn(Bi.missingArea), 0;
  const t = i.getArea(), s = e.getArea();
  return t < s ? -1 : t > s ? 1 : 0;
}, ut = (i, e) => {
  const t = me(i, "id", "first item"), s = me(e, "id", "second item");
  if (t === null || s === null) return 0;
  const n = t.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function ct(i) {
  const e = Array.isArray(i[0]) ? i.map(([t, s]) => ({ key: t, direction: s })) : i;
  return (t, s) => {
    for (const { key: n, direction: r } of e) {
      const o = me(t, n, "first item"), l = me(s, n, "second item");
      if (!(o === null || l === null) && o !== l)
        return r === "desc" ? o < l ? 1 : -1 : o < l ? -1 : 1;
    }
    return 0;
  };
}
const Hi = {
  // Dimension-based sorts
  WDLD: ct([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: ct([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: ct([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: ct([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: ct([["w", "desc"]]),
  LD: ct([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Di(
    ct([["l", "desc"]]),
    ut
  ),
  WDIDA: Di(
    ct([["w", "desc"]]),
    ut
  ),
  // Area-based sorts
  AD: (i, e) => -Xt(i, e),
  AA: Xt,
  AAID: Di(
    Xt,
    ut
  ),
  ADID: Di(
    (i, e) => -Xt(i, e),
    ut
  ),
  // ID sorts
  ID: ut,
  IDDesc: (i, e) => -ut(i, e),
  StockID: (i, e) => {
    const t = me(i, "stock", "first item"), s = me(e, "stock", "second item");
    return !t || !s ? 0 : ut(t, s);
  },
  StockIDAD: (i, e) => {
    const t = me(i, "stock", "first item"), s = me(e, "stock", "second item");
    if (!t || !s) return 0;
    const n = ut(t, s);
    return n !== 0 ? n : -Xt(i, e);
  },
  // Position sorts
  YX: ct([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: ct([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (i, e) => {
    const t = me(i, "placementOrder", "first item") ?? 0, s = me(e, "placementOrder", "second item") ?? 0;
    return t - s;
  },
  typePlacementOrder: (i, e) => {
    const t = me(i, "offcut", "first item"), s = me(e, "offcut", "second item"), n = me(i, "placementOrder", "first item") ?? 0, r = me(e, "placementOrder", "second item") ?? 0;
    return t && !s ? 1 : !t && s ? -1 : n - r;
  },
  stockIDTypePlacementOrder: (i, e) => {
    const t = me(i, "stock", "first item"), s = me(e, "stock", "second item");
    if (!t || !s) return 0;
    const n = ut(t, s);
    if (n !== 0) return n;
    const r = me(i, "offcut", "first item"), o = me(e, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = me(i, "placementOrder", "first item") ?? 0, a = me(e, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, e) => {
    const t = me(i, "stock", "first item"), s = me(e, "stock", "second item");
    if (!(t != null && t.id) || !(s != null && s.id)) return 0;
    const n = ut(t, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in e) {
      const r = me(i, "placementOrder", "first item") ?? 0, o = me(e, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, e) => {
    const t = me(i, "placementOrder", "first item") ?? 0, s = me(e, "placementOrder", "second item") ?? 0, n = t - s;
    if (n !== 0) return n;
    const r = me(i, "groupPlacementOrder", "first item") ?? 0, o = me(e, "groupPlacementOrder", "second item") ?? 0;
    return r - o;
  },
  // Array manipulation utilities
  swapFirstTwo(i) {
    i.length < 2 || ([i[0], i[1]] = [i[1], i[0]]);
  },
  shuffle(i) {
    for (let e = i.length - 1; e > 0; e--) {
      const t = Math.floor(Math.random() * (e + 1));
      [i[e], i[t]] = [i[t], i[e]];
    }
  },
  // Aspect and area sorts
  aspect(i, e) {
    return !Us(i) || !Us(e) ? (console.warn(Bi.missingAspect), 0) : e.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (e, t) => !js(e) || !js(t) ? (console.warn(Bi.missingLongSide), 0) : t[i] === e[i] ? -Xt(e, t) : parseFloat(String(t[i])) - parseFloat(String(e[i]));
  }
};
function xo(i) {
  return Se(i) || Je(i) || Cs(i);
}
function ko(i, e, t) {
  var r, o;
  if (!t) return !0;
  const s = (r = e == null ? void 0 : e.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function Co(i, e, t) {
  return t ? !k(i.t) || !k(e.t) ? !1 : Je(i) ? ue.equalTo(i.t, e.t) : i.t === e.t : !0;
}
function Io(i, e) {
  var t;
  return ((t = e == null ? void 0 : e.saw) == null ? void 0 : t.stockType) !== "linear" || !Je(i) ? !0 : ns(i, 0, e) && ue.equalTo(i.w, e.w) || ns(i, 1, e) && ue.equalTo(i.l, e.w);
}
function Lo(i, e, t) {
  const s = Se(i[0]), n = t.stockType;
  if (i.some((p) => k(p.stockLock) && p.stockLock.length)) return { stockList: e, shapeList: i, unusableShapes: [], unusableStock: [] };
  s || (e = e.filter((p) => p.autoAdd === !0 || k(p.q) && p.q > 0));
  const o = e.some((p) => k(p.material)), l = e.some((p) => k(p.t)), a = /* @__PURE__ */ new Set();
  for (const p of i) {
    p.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const S = Po(p, e, t, o, l), h = S.map((m) => e.findIndex((w) => w === m || Ze(m) && Ze(w) && m.parentID === w.parentID));
    if (p.stockMatch.fit = h.length > 0, p.stockMatch.width = n === "linear" && h.length > 0, !s && S.length) {
      const m = S.map((w) => w.getParentID());
      p.stockLock = m, m.forEach((w) => a.add(w));
    }
    p.stockMatch.fit ? n === "linear" && !p.stockMatch.width && new ne({
      item: p,
      field: [["w"]],
      message: "no_matching_stock_width"
    }) : new ne({
      item: p,
      field: [["l"], ["w"]],
      message: "will_not_fit"
    }), p.stockMatch = null;
  }
  let u, f;
  return s || (u = i.filter((p) => !p.stockLock || !p.stockLock.length).sort(Hi.ID), f = e.filter((p) => !a.has(p.parentID)).sort(Hi.ID), e = e.filter((p) => Ze(p)).filter((p) => a.has(p.parentID)), (o || l) && (i = i.filter((p) => {
    var S;
    return (S = p == null ? void 0 : p.stockLock) == null ? void 0 : S.length;
  }))), {
    stockList: e,
    unusableStock: f,
    shapeList: i,
    unusableShapes: u
  };
}
function Po(i, e, t, s = !1, n = !1) {
  return e.filter((r, o) => {
    const l = {
      fit: xo(i) && zi(i, r, void 0, t),
      material: ko(i, r, s),
      thickness: Co(i, r, n),
      width: Io(i, r)
    };
    return Object.entries(l).forEach(([a, u]) => {
      i.stockMatch[a][o] = u;
    }), Object.values(l).every(Boolean);
  });
}
class ne {
  constructor({
    item: e = null,
    message: t = "",
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
    var p, S, h, m;
    this.message = u ? Be(t) : t, this.field = s, this.index = n, this.listId = r, this.type = l, e && ("name" in e && ((p = e.name) != null && p.length) ? this.identifier = e.name.toLocaleUpperCase() : "id" in e && ((S = e.id) != null && S.length) ? this.identifier = e.id : "parentID" in e && ((h = e.parentID) != null && h.length) ? this.identifier = e.parentID : typeof ((m = this == null ? void 0 : this.index) == null ? void 0 : m[0]) == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in e && Array.isArray(e.issues) && e.issues.push(this)), Array.isArray(o) && o.push(this);
    const f = `issue created for ${Ol(e)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (a) throw new Error(f);
  }
}
const Qi = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Do(i) {
  return (Qi == null ? void 0 : Qi[i]) || i;
}
function Dt(i) {
  return i.length ? (i == null ? void 0 : i.filter((e) => e.type === "error")) || [] : [];
}
function zs(i, e, t = !1) {
  var r;
  return !("issues" in i) || !((r = i.issues) != null && r.length) ? !1 : i.issues.filter((o) => o.type === (t ? "warning" : "error")).some((o) => {
    var l;
    if (!((l = o.field) != null && l.length))
      return !1;
    for (const a of o.field)
      if (a.every((u, f) => u === Do(a[f])))
        return !0;
    return !1;
  });
}
const ri = ({ item: i, field: e, index: t, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = ti(i, e);
  if (o && (u == null || u === ""))
    return new ne({
      item: i,
      message: Be("not_set", { x: qe[e.join(".")] }),
      field: [e],
      index: [t],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new ne({
      item: i,
      message: Be("greater_than", { x: qe[e.join(".")], y: 0 }),
      field: [e],
      index: [t],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = x(u);
  } catch {
    return To({
      item: i,
      field: e,
      value: ti(i, e),
      index: t,
      issues: s,
      isWarning: a
    }), null;
  }
  return $o({ item: i, field: e, value: u, index: t, issues: s, min: n, isWarning: a }), Ao({ item: i, field: e, value: u, index: t, issues: s, max: r, isWarning: a }), u;
}, To = ({ item: i, field: e, value: t, index: s, issues: n, isWarning: r }) => {
  new ne({
    item: i,
    message: Be("not_understood", { x: e.join("."), y: t }),
    field: [e],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, $o = ({ item: i, field: e, value: t, index: s, issues: n, min: r, isWarning: o }) => {
  typeof t == "number" && typeof r == "number" && t < r && new ne({
    item: i,
    message: Be("greater_than_or_equal", { x: qe[e.join(".")], y: r }),
    field: [e],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, Ao = ({ item: i, field: e, value: t, index: s, issues: n, max: r, isWarning: o }) => {
  typeof t == "number" && typeof r == "number" && t > r && new ne({
    item: i,
    message: Be("less_than_or_equal", { x: qe[e.join(".")], y: r }),
    field: [e],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, Oo = ({ item: i, index: e, isWarning: t }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new ne({
    item: i,
    message: Be("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [e],
    type: t ? "warning" : "error",
    issues: s
  }), s;
}, Eo = ({ item: i, index: e, max: t, isWarning: s }) => {
  const n = [];
  return "x" in i && ri({ item: i, field: ["x"], index: e, newIssues: n, min: 0, max: t, isWarning: s }), n;
}, Mo = ({ item: i, index: e, max: t, isWarning: s }) => {
  const n = [];
  return "y" in i && ri({ item: i, field: ["y"], index: e, newIssues: n, min: 0, max: t, isWarning: s }), n;
}, Ro = ({ item: i, index: e, max: t, isWarning: s }) => {
  const n = [];
  return "l" in i && ri({ item: i, field: ["l"], index: e, newIssues: n, required: !0, allowZero: !1, min: 0, max: t, isWarning: s }), n;
}, Fo = ({ item: i, index: e, max: t, isWarning: s }) => {
  const n = [];
  return "w" in i && ri({ item: i, field: ["w"], index: e, newIssues: n, required: !0, allowZero: !1, min: 0, max: t, isWarning: s }), n;
}, _o = ({ item: i, index: e, max: t, isWarning: s, saw: n }) => {
  const r = [];
  return "t" in i && ((n == null ? void 0 : n.cutType) === "beam" && !i.t && new ne({
    item: i,
    message: Be("thickness_required_for_beam_saw"),
    field: [["t"]],
    index: [e],
    type: "error",
    issues: r
  }), ri({ item: i, field: ["t"], index: e, newIssues: r, allowZero: !1, min: 0, max: t, isWarning: s })), r;
}, qo = ({ item: i, index: e, isWarning: t }) => {
  const s = [];
  return "q" in i && x({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new ne({
    item: i,
    message: Be("greater_than_or_equal", { x: qe.q, y: 0 }),
    field: [["q"]],
    index: [e],
    type: t ? "warning" : "error",
    issues: s
  }), s;
}, Bo = ({ item: i, index: e, isWarning: t }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new ne({
    item: i,
    message: Be("must_be_values", { x: qe.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [e],
    type: t ? "warning" : "error",
    issues: s
  }), s;
}, Ho = ({ item: i, index: e, isWarning: t }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new ne({
    item: i,
    message: Be("must_be_values", { x: qe.grain, y: "l, w" }),
    field: [["grain"]],
    index: [e],
    type: t ? "warning" : "error",
    issues: s
  }), s;
}, Go = ({ item: i, index: e, isWarning: t }) => {
  const s = [];
  if (!("customData" in i)) return s;
  const n = i.customData;
  if (typeof n != "object")
    return new ne({
      item: i,
      message: Be("must_be_object", { x: qe.customData }),
      field: [["customData"]],
      index: [e],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new ne({
      item: i,
      message: Be("must_be_string_number_boolean", { x: qe.customData }),
      field: [["customData"]],
      index: [e],
      type: t ? "warning" : "error",
      issues: s
    }));
  }
  return s;
}, Wo = ({
  item: i,
  partTrim: e,
  index: t = null,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e || !("l" in i) || !("w" in i) || !i.l || !i.w) return n;
  const r = x({ v: e }), o = x({ v: i.l }), l = x({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new ne({
    item: i,
    message: Be("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
    field: [["l"], ["w"], ["trim"]],
    index: [t],
    type: s ? "warning" : "error",
    issues: n
  }), n;
}, No = ({
  item: i,
  index: e = null,
  min: t = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [];
  if (!("l" in i) || !("w" in i) || !i.l || !i.w || !("trim" in i)) return r;
  if (!Ze(i) || Ze(i) && !(i != null && i.trimmed)) {
    const o = ["l", "w"], [l, a] = o.map((u) => x(i[u]));
    for (const u in i.trim)
      ri({ item: i, field: ["trim", u], index: e, newIssues: r, min: t, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = x({ v: i.trim.x1 }), f = x({ v: i.trim.x2 }), p = x({ v: i.trim.y1 }), S = x({ v: i.trim.y2 }), h = (u || 0) + (f || 0), m = (p || 0) + (S || 0);
      h >= l && new ne({
        item: i,
        message: Be("too_much_trim", {
          x: `${qe.x1.toUpperCase()} + ${qe.x2.toUpperCase()}`,
          y: qe.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [e],
        type: n ? "warning" : "error",
        issues: r
      }), m >= a && new ne({
        item: i,
        message: Be("too_much_trim", {
          x: `${qe.y1.toUpperCase()} + ${qe.y2.toUpperCase()}`,
          y: qe.l,
          z: a
        }),
        field: [["trim", "y1"], ["trim", "y2"]],
        index: [e],
        type: n ? "warning" : "error",
        issues: r
      });
    }
  }
  return r;
}, Uo = ({
  item: i,
  inputStockList: e,
  saw: t,
  partTrim: s = 0,
  index: n = null,
  isWarning: r = !1
}) => {
  var u;
  const o = [], l = t.stockType;
  if (!("q" in i) || !("l" in i) || !("w" in i) || !i.l || !i.w || ("applyPartTrim" in i && i.applyPartTrim(s, l), i.issues.length)) return o;
  const a = Lo([i], e, t);
  if (!a) return o;
  if ((u = a == null ? void 0 : a.unusableShapes) != null && u.length) {
    const p = a.unusableShapes[0].stockMatch;
    p.fit || new ne({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      listId: Se(i) || lt(i) ? [i.listId] : null,
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), p.material || new ne({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      listId: Se(i) || lt(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), p.thickness || new ne({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      listId: Se(i) || lt(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), !p.width && l === "linear" && new ne({
      item: i,
      message: "no_matching_stock_width",
      field: [["w"]],
      listId: Se(i) || lt(i) ? [i.listId] : null,
      index: [n],
      issues: o
    });
  }
  return o;
}, jo = ({ item: i = null, index: e = null }) => {
  i.machining.validateEverything(i, e);
}, Ye = {
  customData: Go,
  banding: Oo,
  partTrim: Wo,
  trim: No,
  x: Eo,
  y: Mo,
  l: Ro,
  w: Fo,
  t: _o,
  q: qo,
  orientationLock: Bo,
  grain: Ho,
  stockMatch: Uo,
  machining: jo
};
function is(i) {
  let e, t;
  switch (i) {
    case "l":
    case "length":
      e = "guillotine", t = "l";
      break;
    case "w":
    case "width":
      e = "guillotine", t = "w";
      break;
    case "flex":
      e = "guillotine", t = "flex";
      break;
    case "efficiency":
      e = "efficiency", t = "none";
      break;
    case "beam":
      e = "beam", t = "l";
      break;
    default:
      e = null, t = null;
      break;
  }
  return {
    cutPreference: t,
    cutType: e
  };
}
const Bt = [null, void 0, "none", ""], ot = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: Bt
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: Bt
    },
    roll: {
      guillotine: ["w"],
      efficiency: Bt
    },
    linear: {
      guillotine: Bt,
      efficiency: Bt
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
function zo(i) {
  var e;
  return ((e = ot.cutTypes) == null ? void 0 : e[i]) ?? Bt;
}
function Vo(i, e) {
  var t, s;
  return ((s = (t = ot.cutPreferences) == null ? void 0 : t[i]) == null ? void 0 : s[e]) ?? Bt;
}
function Yo(i) {
  var e;
  return ((e = ot.cutTypes) == null ? void 0 : e[i]) ?? [];
}
function Xo(i, e) {
  var t, s;
  return ((s = (t = ot.cutPreferences) == null ? void 0 : t[i]) == null ? void 0 : s[e]) ?? [];
}
function es() {
  return ot.stockTypes;
}
function Dn(i) {
  return ot.stockTypes.includes(i);
}
function Tn(i, e) {
  return zo(i).includes(e);
}
function $n(i, e, t) {
  return Vo(i, e).includes(t);
}
function yt(i, e, t, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!ys(i)) {
    console.error(Be(t, s));
    return;
  }
  new ne({
    item: i,
    field: Array.isArray(e) ? e.map((n) => [n]) : [[e]],
    message: Be(t, s),
    shouldTranslate: !1
  });
}
class Ot {
  constructor(e, t) {
    c(this, "bladeWidth");
    c(this, "stockType");
    c(this, "cutType");
    c(this, "cutPreference");
    c(this, "stackHeight");
    c(this, "options");
    c(this, "guillotineOptions");
    c(this, "efficiencyOptions");
    c(this, "issues");
    e = Gt(e), this.issues = [], t = t ?? (e == null ? void 0 : e.stockType) ?? es()[0], Ko(this, e, t), this.bladeWidth = x({ v: e == null ? void 0 : e.bladeWidth }) ?? ot.defaults.bladeWidth, this.stockType = t ?? (e == null ? void 0 : e.stockType) ?? es()[0], Dn(this.stockType) || (this.stockType = es()[0]), this.cutType = e == null ? void 0 : e.cutType, Tn(this.stockType, this.cutType) || (this.cutType = Yo(this.stockType)[0]), this.cutPreference = e == null ? void 0 : e.cutPreference, $n(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = Xo(this.stockType, this.cutType)[0]), this.stackHeight = (e == null ? void 0 : e.stackHeight) ?? ot.defaults.stackHeight, this.guillotineOptions = Ei({}, e == null ? void 0 : e.guillotineOptions, ot.defaults.guillotine), this.efficiencyOptions = Ei({}, e == null ? void 0 : e.efficiencyOptions, ot.defaults.efficiency), this.options = Ei({}, e == null ? void 0 : e.options, ot.defaults.options), this.options.minSpacing = x({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = x({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = x({ v: this.options.minSpacingDimension.minSpacing }) ?? 0;
  }
  clone() {
    const e = structuredClone(this);
    return new Ot(e);
  }
  //does not cater for shape dimensions
  get minSpacing() {
    return this.cutType !== "efficiency" ? 0 : this.options.minSpacing;
  }
}
function Ko(i, e, t) {
  var s, n, r, o, l, a, u, f, p, S;
  if (k(e == null ? void 0 : e.bladeWidth) && (e.bladeWidth = typeof e.bladeWidth == "string" ? x({ v: e.bladeWidth }) : e.bladeWidth), ($t(e.bladeWidth) || e.bladeWidth < 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: e.bladeWidth ?? "none" }
  ), !Dn(t)) {
    yt(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: t }
    );
    return;
  }
  e.cutType && !Tn(t, e.cutType) && yt(
    i,
    "cutType",
    "saw.validation.cutType.invalid",
    { cutType: e.cutType, stockType: t }
  ), e.cutType && e.cutPreference && !$n(t, e.cutType, e.cutPreference) && yt(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: e.cutPreference || "none",
      cutType: e.cutType || "none",
      stockType: t
    }
  ), (e == null ? void 0 : e.cutType) === "efficiency" && ((s = e == null ? void 0 : e.options) != null && s.minSpacing && (e.options.minSpacing = typeof e.options.minSpacing == "string" ? x({ v: e.options.minSpacing }) : e.options.minSpacing, (!k(e == null ? void 0 : e.bladeWidth) || e.bladeWidth <= 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    { minSpacing: e.options.minSpacing }
  ), ($t(e.options.minSpacing) || e.options.minSpacing < 0) && yt(
    i,
    "options.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacing: e.options.minSpacing ?? "none" }
  )), (n = e == null ? void 0 : e.options) != null && n.minSpacingDimension && (k((o = (r = e == null ? void 0 : e.options) == null ? void 0 : r.minSpacingDimension) == null ? void 0 : o.dimension) && (e.options.minSpacingDimension.dimension = typeof e.options.minSpacingDimension.dimension == "string" ? x({ v: e.options.minSpacingDimension.dimension }) : e.options.minSpacingDimension.dimension, ($t(e.options.minSpacingDimension.dimension) || e.options.minSpacingDimension.dimension < 0) && yt(
    i,
    "options.minSpacingDimension.dimension",
    "saw.validation.minSpacing.dimension.invalid",
    { minSpacingDimension: e.options.minSpacingDimension.dimension ?? "none" }
  )), (a = (l = e == null ? void 0 : e.options) == null ? void 0 : l.minSpacingDimension) != null && a.minSpacing && (e.options.minSpacingDimension.minSpacing = typeof e.options.minSpacingDimension.minSpacing == "string" ? x({ v: e.options.minSpacingDimension.minSpacing }) : e.options.minSpacingDimension.minSpacing, ($t(e.options.minSpacingDimension.minSpacing) || e.options.minSpacingDimension.minSpacing < 0) && yt(
    i,
    "options.minSpacingDimension.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacingDimension: e.options.minSpacingDimension.minSpacing ?? "none" }
  )), (f = (u = e == null ? void 0 : e.options) == null ? void 0 : u.minSpacingDimension) != null && f.dimension && ((S = (p = e == null ? void 0 : e.options) == null ? void 0 : p.minSpacingDimension) != null && S.minSpacing) && (!k(e == null ? void 0 : e.bladeWidth) || e.bladeWidth <= 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    {
      dimension: e.options.minSpacingDimension.dimension,
      minSpacing: e.options.minSpacingDimension.minSpacing
    }
  )));
}
function ys(i) {
  return i instanceof Ot;
}
function ss(i, e = !1) {
  var o, l, a, u;
  const t = typeof i.l == "string" ? x({ v: i.l }) : i.l, s = typeof i.w == "string" ? x({ v: i.w }) : i.w;
  if (!e || !jn(i) || zn(i) || Tl(i) && !(i != null && i.hasTrim))
    return { l: t, w: s };
  const n = x({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + x({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = x({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + x({ v: ((u = i == null ? void 0 : i.trim) == null ? void 0 : u.y2) ?? 0 });
  return {
    l: t - (typeof n == "string" ? x({ v: n }) : n),
    w: s - (typeof r == "string" ? x({ v: r }) : r)
  };
}
function Zo(i, e) {
  var t, s, n, r;
  return jn(i) && !zn(i) && (e.l = e.l - (x({ v: ((t = i == null ? void 0 : i.trim) == null ? void 0 : t.x1) ?? 0 }) + x({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), e.w = e.w - (x({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + x({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), e;
}
function ts(i, e, t = !1) {
  let s = {
    l: x({ v: i.l }),
    w: x({ v: i.w })
  };
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return t && (s = Zo(i, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function An(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function Jo(i) {
  An(i), [i.l, i.w] = [i.w, i.l];
}
function zi(i, e, t = null, s) {
  var S, h;
  if (!e || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && ys(s) ? n = s.minSpacing : s && ((S = s == null ? void 0 : s.options) != null && S.minSpacing) ? n = x({ v: s.options.minSpacing }) : Is(e) && (n = (h = e == null ? void 0 : e.saw) == null ? void 0 : h.minSpacing);
  const r = ss(e, !0), o = ss(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(m, w) {
    return ue.equalTo(m, w) || ue.lessThanOrEqualTo(m, w - n * 2);
  }
  function a(m) {
    return l(m.l, r.l) && l(m.w, r.w);
  }
  const u = bs(i, e);
  if (i.orientationLock || t !== null) {
    const w = ts(i, t ?? (u === "w" ? 1 : 0), !0);
    return a(w);
  }
  const f = ts(i, 0, !0);
  if (a(f)) return !0;
  const p = ts(i, 1, !0);
  return a(p);
}
function On(i) {
  let e = null;
  return Mt(i) || Cs(i) ? e = i.direction : (Je(i) || Se(i)) && (e = i.orientationLock), e;
}
function bs(i, e) {
  const t = On(i);
  return k(t) ? !e || Mt(i) ? t : Is(e) ? Qo(i, e) : t : null;
}
function Qo(i, e) {
  if (!e) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!Is(e)) throw new Error("container is not a container");
  const t = On(i);
  if (Mt(i)) return t;
  if (!k(t)) return null;
  const s = e.getStock();
  return !s || !k(s == null ? void 0 : s.grain) ? t : t === (s == null ? void 0 : s.grain) ? "l" : "w";
}
function ns(i, e = null, t = null) {
  if (!k(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), En(i) && e || t && !zi(i, t, e))
    return !1;
  const s = bs(i, t);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function rs(i, e = null, t = null) {
  return e === null && (e = i.rot === 0 ? 1 : 0), ns(i, e, t) ? (i.rot === e || Jo(i), !0) : !1;
}
function ii(i, e = null, t = null) {
  return e ? e = 1 : e = 0, t && e && !zi(i, t, e) ? !1 : rs(i, e, t);
}
function el(i, e) {
  if (!e)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const t = bs(i, e);
  return t === "l" ? ii(i, 0) : t === "w" ? ii(i, 1) : !1;
}
function tl(i) {
  return i.orientationLock === "l" ? ii(i, 0) : i.orientationLock === "w" ? ii(i, 1) : !1;
}
function En(i) {
  An(i);
  const e = ss(i);
  return ue.equalTo(e.l, e.w);
}
function il(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function gi(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function sl(i) {
  return "y";
}
function nl(i, e) {
  const t = "l", s = sl();
  if (!(i != null && i.length)) return null;
  const n = i.reduce((o, l) => o[e] + o[t] > l[e] + l[t] ? o : l);
  return i.filter((o) => o[e] === n[e] && o[t] === n[t]).sort((o, l) => o[s] - l[s])[0];
}
class Jt {
  constructor(e) {
    c(this, "x1");
    c(this, "x2");
    c(this, "y1");
    c(this, "y2");
    c(this, "dimension");
    c(this, "direction");
    c(this, "shapeCollisions");
    c(this, "origin");
    c(this, "type");
    this.x1 = e.x1, this.x2 = e.x2, this.y1 = e.y1, this.y2 = e.y2, this.dimension = rl(this), this.direction = ol(this), this.type = e != null && e.type ? e.type : null, this.origin = e != null && e.origin ? e.origin : null;
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
function Lt(i, e, t, s, n = null, r = null) {
  return new Jt({ x1: i, y1: e, x2: t, y2: s, origin: n, type: r });
}
function rl(i) {
  return typeof i > "u" || !ue.isNumber(i.x1) || !ue.isNumber(i.x2) || !ue.isNumber(i.y1) || !ue.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function ol(i) {
  return typeof i > "u" || !ue.isNumber(i.x1) || !ue.isNumber(i.x2) || !ue.isNumber(i.y1) || !ue.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function ll(i, e) {
  const t = i.getCorners(), s = {};
  return t.bottomLeft.x > 0 && t.bottomLeft.y > 0 && (s.bottomLeftDown = Lt(
    t.bottomLeft.x,
    t.bottomLeft.y,
    t.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = Lt(
    t.bottomLeft.x,
    t.bottomLeft.y,
    0,
    t.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), t.topLeft.x > 0 && t.topLeft.y < e.w && (s.topLeftLeft = Lt(
    t.topLeft.x,
    t.topLeft.y,
    0,
    t.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = Lt(
    t.topLeft.x,
    t.topLeft.y,
    t.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), t.topRight.y < e.w && t.topRight.x < e.l && (s.topRightTop = Lt(
    t.topRight.x,
    t.topRight.y,
    t.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = Lt(
    t.topRight.x,
    t.topRight.y,
    e.l,
    t.topRight.y,
    "topRight",
    "topRightRight"
  )), t.bottomRight.x < e.l && t.bottomRight.y > 0 && (s.bottomRightRight = Lt(
    t.bottomRight.x,
    t.bottomRight.y,
    e.l,
    t.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = Lt(
    t.bottomRight.x,
    t.bottomRight.y,
    t.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const Vs = {
  runTests: !1
};
try {
  typeof Ji < "u" && Ji && (Ji.showDiff = !0);
} catch (i) {
  console.warn("Error accessing chaiConfig, skipping configuration:", i);
}
Sn("tests");
Sn("timers");
let ei;
if (typeof Hs == "function")
  ei = Hs;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const i = new Proxy({}, { get: () => () => i });
  ei = () => i;
}
function Mn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function Rn(i = [], e = null) {
  i != null && i.length && Mn() && Vs && Vs.runTests;
}
Qe.colors = [
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
Qe("logs");
Qe("cuts");
Qe("guillotine");
Qe("results");
Qe("scoring");
Qe("firstShapes");
Qe("calculations");
Qe("subset");
Qe("secondRun");
Qe("stack");
const al = Qe("errors");
Qe("allStock");
al.color = 1;
function ul(i) {
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
class Vi extends Jt {
  //used to mark for removal
  constructor(t) {
    var s, n, r;
    t.x2 < t.x1 && ([t.x1, t.x2] = [t.x2, t.x1]), t.y2 < t.y1 && ([t.y1, t.y2] = [t.y2, t.y1]);
    super(t);
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
    k(t == null ? void 0 : t.stock) && (((n = (s = t.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = t.stock : this.stock = new jt(t.stock), this.stockId = this.stock.id), this.stockId = (r = t == null ? void 0 : t.stock) == null ? void 0 : r.id, this.type = t.type ?? null, this.isGuillotine = t.isGuillotine, this.guillotineData = k(t.guillotineData) ? t.guillotineData : {}, this.ptxData = k(t.ptxData) ? t.ptxData : {}, this.isHead = k(t.isHead) ? t.isHead : !1, this.isTrim = k(t.isTrim) ? t.isTrim : !1, this.beamTrimX1 = t.beamTrimX1, this.beamTrimY1 = t.beamTrimY1, this.distances = k(t.distances) ? t.distances : {};
  }
  //compress for saving / transfer
  compress() {
    var t;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((t = this == null ? void 0 : this.stock) == null ? void 0 : t.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const t = structuredClone(this);
    return new Vi(t);
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
  lookupDirectionByType(t) {
    const n = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    }[t];
    if (n) return n;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return ue.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return ue.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return ue.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return ue.lessThan(
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
  getVisCoords(t) {
    return this[t];
  }
  //[] do on init
  getLength() {
    return ul(this);
  }
  /* get length()
  {
  	return getCutLength( this )
  } */
  //[] do on init
  getArea() {
    if (!this.stock) return 0;
    const t = this.getLength();
    return t ? t * this.stock.getBladeWidth() : 0;
  }
}
const cl = {
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
}, Ti = {
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
class Fe {
  constructor(e, t, s = null) {
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
    this.x = parseFloat(e), this.y = parseFloat(t), this.z = parseFloat(s) || 0, this.validate();
  }
  /**
   * clone with the ability to change the coordinates
   * NOTE: looks odd for performance reasons
   */
  clone(e = null, t = null) {
    const s = new Fe(e ?? this.x, t ?? this.y);
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
  collidesWith(e) {
    return this.x >= e.x && this.x <= e.x + e.l && this.y >= e.y && this.y <= e.y + e.w;
  }
  isIdenticalTo(e) {
    return this.x === e.x && this.y === e.y;
  }
  /**
   * given a point from a shape corner or a ray, get the available positions for this shape
   * @returns the position of the shape relative to the point e.g. bottomRight means the shape is placed to the bottom right of the point
   * @remarks does not cater for diagonals
   */
  //[x] needs to cater for raycast coords, which don't originate from a shape corner
  //[x] cater for raycast corners and grid
  getAvailableShapePositions(e) {
    const t = /* @__PURE__ */ new Set();
    if (this.raycast) {
      const s = cl[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && t.add(s[this.corner][this.grid]), t;
    }
    return (e == null ? void 0 : e.cutType) !== "efficiency" ? (Ti[this.corner] && (this.grid ? Ti[this.corner][this.grid] && Ti[this.corner][this.grid].forEach((s) => t.add(s)) : Ti[this.corner].default.forEach((s) => t.add(s))), t) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => t.add(s)) : $i[this.corner].default.forEach((s) => t.add(s))), t);
  }
}
class Nt {
  constructor(e = []) {
    c(this, "points", /* @__PURE__ */ new Map());
    e.forEach((t) => this.addPoint(t));
  }
  addPoint(e, t = null) {
    if (this.contains(e)) {
      const s = this.getPoint(e);
      s.type === "group" && !t && (s.type = void 0);
      return;
    }
    e.validate(), t && (e.type = t), this.points.set(this.createKey(e), e);
  }
  addPoints(e, t = null) {
    for (const s of e) {
      if (!s) return;
      s.validate(), this.addPoint(s, t);
    }
  }
  createKey(e) {
    return `${e.x},${e.y}`;
  }
  getPoint(e) {
    return this.points.get(this.createKey(e));
  }
  deletePoint(e) {
    e.validate(), this.points.delete(this.createKey(e));
  }
  deletePoints(e) {
    for (const t of e)
      t.validate(), this.deletePoint(t);
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(e) {
    return this.points.has(this.createKey(e));
  }
}
function fe(i, e, t, s, n) {
  const r = hl[i](e, t);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const hl = {
  bottom: (i, e) => {
    const t = i.clone(i.x, i.y - e);
    return t.grid = "bottom", t;
  },
  bottomLeft: (i, e) => {
    const t = i.clone(i.x - e, i.y - e);
    return t.grid = "bottomLeft", t;
  },
  bottomRight: (i, e) => {
    const t = i.clone(i.x + e, i.y - e);
    return t.grid = "bottomRight", t;
  },
  left: (i, e) => {
    const t = i.clone(i.x - e, i.y);
    return t.grid = "left", t;
  },
  centre: (i) => {
    const e = i.clone(i.x, i.y);
    return e.grid = "centre", e;
  },
  right: (i, e) => {
    const t = i.clone(i.x + e, i.y);
    return t.grid = "right", t;
  },
  top: (i, e) => {
    const t = i.clone(i.x, i.y + e);
    return t.grid = "top", t;
  },
  topLeft: (i, e) => {
    const t = i.clone(i.x - e, i.y + e);
    return t.grid = "topLeft", t;
  },
  topRight: (i, e) => {
    const t = i.clone(i.x + e, i.y + e);
    return t.grid = "topRight", t;
  }
};
function dl(i, e, t) {
  var o, l, a, u, f, p;
  const s = new Nt(), n = t.toArray().sort(Fn), r = e.getBladeWidth();
  if (n.forEach((S) => {
    const h = S.corner, m = S.type;
    if (!r)
      s.addPoint(S);
    else
      switch (h) {
        case "topRight":
          s.addPoint(
            fe("top", S, r, h),
            m
          ), s.addPoint(
            fe("right", S, r, h),
            m
          );
          break;
        case "topLeft":
          s.addPoint(
            fe("top", S, r, h),
            m
          ), s.addPoint(
            fe("left", S, r, h),
            m
          );
          break;
        case "bottomRight":
          s.addPoint(
            fe("bottom", S, r, h),
            m
          ), s.addPoint(
            fe("right", S, r, h),
            m
          );
          break;
        case "bottomLeft":
          s.addPoint(
            fe("bottom", S, r, h),
            m
          ), s.addPoint(
            fe("left", S, r, h),
            m
          );
          break;
      }
    const w = s.toArray();
    if (r)
      for (let F = w.length; F--; ) {
        const W = w[F];
        t.contains(W) && s.deletePoint(W);
      }
    else
      for (let F = w.length; F--; ) {
        const W = w[F];
        for (let J = i.length; J--; ) {
          const Q = i[J];
          if (W.x === Q.x && W.y === Q.y) {
            s.deletePoint(W);
            break;
          }
        }
      }
  }), r) {
    const S = /* @__PURE__ */ new Set();
    let h, m, w, F;
    ((o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name) === "Stock" && (e != null && e.trimmed) || ((l = e == null ? void 0 : e.constructor) == null ? void 0 : l.name) === "Segment" ? (h = e.x, m = e.y, w = e.x + e.l, F = e.y + e.w) : (h = e.x + ((a = e == null ? void 0 : e.trim) == null ? void 0 : a.x1), m = e.y + ((u = e == null ? void 0 : e.trim) == null ? void 0 : u.y1), w = e.x + e.l - ((f = e == null ? void 0 : e.trim) == null ? void 0 : f.x2), F = e.y + e.w - ((p = e == null ? void 0 : e.trim) == null ? void 0 : p.y2));
    let W = s.toArray();
    for (let J = W.length; J--; ) {
      const Q = W[J];
      (ue.lessThan(Q.x, h) || ue.lessThan(Q.y, m) || ue.greaterThan(Q.x, w) || ue.greaterThan(Q.y, F)) && W.splice(J, 1);
    }
    s.clear(), s.addPoints(W), S.clear(), W = s.toArray();
    for (let J = W.length; J--; ) {
      const Q = W[J];
      for (let X = i.length; X--; ) {
        const ce = i[X];
        if (Q.collidesWith(ce)) {
          s.deletePoint(Q);
          break;
        }
      }
    }
  }
  return s;
}
function fl(i, e, t) {
  let s = [];
  const n = i.getMinSpacing(t.saw), r = e.corner, o = e.direction;
  if (e.type === "shape")
    switch (r) {
      case "topLeft":
        o === "rl" && (s.push(fe("right", e, n, r, o)), s.push(fe("topRight", e, n, r, o))), o === "bt" && (s.push(fe("bottom", e, n, r, o)), s.push(fe("bottomLeft", e, n, r, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(fe("left", e, n, r, o)), s.push(fe("topLeft", e, n, r, o))), o === "bt" && (s.push(fe("bottom", e, n, r, o)), s.push(fe("bottomRight", e, n, r, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(fe("left", e, n, r, o)), s.push(fe("bottomLeft", e, n, r, o))), o === "tb" && (s.push(fe("top", e, n, r, o)), s.push(fe("topRight", e, n, r, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(fe("right", e, n, r, o)), s.push(fe("bottomRight", e, n, r, o))), o === "tb" && (s.push(fe("top", e, n, r, o)), s.push(fe("topLeft", e, n, r, o)));
        break;
    }
  else if (e.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(fe("top", e, 0)), s.push(fe("centre", e, 0)), s.push(fe("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(fe("left", e, 0)), s.push(fe("right", e, 0)), s.push(fe("centre", e, 0));
        break;
    }
  if (s = s.filter((a) => a.x >= 0 && a.y >= 0), !s.length) return null;
  const l = new Nt();
  for (const a of s)
    a.raycast = !0, l.addPoints(Bn(i, a, t).toArray());
  return Hn(i, t, l), l;
}
function pl(i, e) {
  const t = new Nt();
  return i.sort(Fn), i.forEach((s) => {
    Mt(s) ? (t.addPoints(s.getCoords(e)), s.shapes.forEach((n) => {
      const r = n.getCoords(e);
      t.addPoints(r, "group");
    })) : t.addPoints(s.getCoords(e));
  }), t.points.forEach((s) => {
    s.stockID = e.getStock().id;
  }), t;
}
function gl(i = [], e, t) {
  const s = pl(
    i === null ? e : i,
    t
  );
  return dl(
    e,
    t,
    s
  );
}
function Fn(i, e) {
  return i.y === e.y ? e.x - i.x : e.y - i.y;
}
function _n(i, e, t, s, n, r) {
  i.a = e.id, i.b = t ? t.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function ml(i, e) {
  if (i.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let t = new Nt();
  const s = qn(e, i);
  for (const l of e)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const f of u)
        vl(
          f,
          a.shape,
          l,
          t
        );
    }
  const r = i.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = e.reduce((l, a) => (r === "tb" ? l.x + l.l > a.x + a.l : l.y + l.w > a.y + a.w) ? l : a);
  return s.filter(({ shape: l }) => l.id === o.id).forEach(({ shape: l, rays: a }) => {
    const u = Object.values(a);
    for (const f of u) {
      const p = new Fe(f.x2, f.y2);
      r === f.direction && (_n(p, l, null, f.direction, "edge"), t.addPoint(p));
    }
  }), t = yl(t), t;
}
function qn(i, e) {
  return i.map((t) => {
    const s = ll(t, e);
    return {
      shape: t,
      rays: s
    };
  });
}
function vl(i, e, t, s) {
  switch (i.direction) {
    case "rl":
      Ai(
        i,
        e,
        t,
        s,
        t.x + t.l
      );
      break;
    case "lr":
      Ai(
        i,
        e,
        t,
        s,
        t.x
      );
      break;
    case "tb":
      Ai(
        i,
        e,
        t,
        s,
        t.y + t.w
      );
      break;
    case "bt":
      Ai(
        i,
        e,
        t,
        s,
        t.y
      );
      break;
  }
}
function Ai(i, e, t, s, n) {
  const r = i.dimension === "w", o = r ? "y" : "x", l = r ? "x" : "y", a = r ? "l" : "w";
  if (i[`${l}1`] >= t[l] && i[`${l}1`] <= t[l] + t[a]) {
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, f = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, p = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, S = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || f || p || S) {
      const m = r ? i[`${l}1`] : n, w = r ? n : i[`${l}1`], F = new Fe(m, w), W = i.origin;
      _n(F, e, t, i.direction, "shape", W), s.addPoint(F);
    }
  }
}
function yl(i) {
  const e = new Nt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = bl(
        n,
        r
      );
      o && e.addPoint(o);
    });
  }), e;
}
function bl(i, e) {
  return i.length === 0 ? null : i.reduce((t, s) => {
    switch (e) {
      case "left":
        return !t || s.x < t.x ? s : t;
      case "right":
        return !t || s.x > t.x ? s : t;
      case "top":
        return !t || s.y > t.y ? s : t;
      case "bottom":
        return !t || s.y < t.y ? s : t;
      default:
        return null;
    }
  }, null);
}
function Bn(i, e, t) {
  const s = new Nt(), n = e.getAvailableShapePositions(t);
  for (const r of n) {
    let o;
    switch (o = wl(e, i, t), r) {
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
  return Hn(i, t, s), s;
}
function wl(i, e, t) {
  if (t.saw.cutType !== "efficiency") return i;
  const s = e.getMinSpacing(t.saw), n = t.getBladeWidth();
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
function Hn(i, e, t) {
  var a, u, f, p, S, h;
  let s, n, r, o;
  ((a = e == null ? void 0 : e.constructor) == null ? void 0 : a.name) === "Stock" && (e != null && e.trimmed) || ((u = e == null ? void 0 : e.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = e.x + e.l - i.l, o = e.y + e.w - i.w) : (s = (f = e == null ? void 0 : e.trim) == null ? void 0 : f.x1, n = (p = e == null ? void 0 : e.trim) == null ? void 0 : p.y1, r = e.l - ((S = e == null ? void 0 : e.trim) == null ? void 0 : S.x2) - i.l, o = e.w - ((h = e == null ? void 0 : e.trim) == null ? void 0 : h.y2) - i.w);
  const l = t.toArray();
  for (let m = l.length; m--; ) {
    const w = l[m];
    (ue.lessThan(w.x, s) || ue.lessThan(w.y, n) || ue.greaterThan(w.x, r) || ue.greaterThan(w.y, o) || w.x < 0 || w.y < 0) && t.deletePoint(w);
  }
}
function Sl(i, e, t) {
  if (!wi.includes(e) || !i.machining.corners) return 0;
  const s = Gn(i, e);
  return t * s;
}
function Gn(i, e) {
  if (!wi.includes(e) || !i.machining.corners) return 0;
  const t = i.machining.corners.find((n) => n.getCorner() === e);
  return t ? t.getLength() : 0;
}
function Gi(i, e, t, s) {
  Object.keys(e).forEach((n) => {
    var r, o;
    n in i && ((r = e[n]) != null && r.min && x({ v: i[n] }) < x({ v: e[n].min }) ? t.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${e[n].min}.`,
      fields: [n]
    }) : (o = e[n]) != null && o.max && x({ v: i[n] }) > x({ v: e[n].max }) && t.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${e[n].max}.`,
      fields: [n]
    }));
  });
}
class os {
  constructor({ x: e, y: t, diameter: s, depth: n = 0, face: r = 0, type: o = null }) {
    c(this, "x");
    c(this, "y");
    c(this, "diameter");
    c(this, "depth");
    c(this, "face");
    c(this, "valid");
    c(this, "type");
    this.x = e, this.y = t, this.diameter = s, this.depth = n, this.face = r, this.type = o;
  }
  getFace() {
    return wt[this.face];
  }
  getXDrawPosition(e) {
    let t = 0;
    const s = x({ v: this.x });
    return e.rot ? t = e.l - x({ v: this.y }) + ("x" in e ? x({ v: e.x }) : 0) : t = s + ("x" in e ? x({ v: e.x }) : 0), t;
  }
  getYDrawPosition(e, t, s) {
    let n = e.rot ? x({ v: this.x }) : x({ v: this.y });
    return n += "y" in e ? x({ v: e.y }) : 0, t === 1 && (s ? n = x({ v: s.w }) - n : n = x({ v: e.w }) - n), n;
  }
  shouldShow(e, t) {
    return this.face === t || this.isThroughShape(e) === !0;
  }
  isThroughShape(e) {
    return !this.depth || x({ v: this.depth }) >= x({ v: e.t });
  }
  getDistanceToEdge(e) {
    const t = this.x, s = this.y, n = this.diameter / 2, r = x({ v: e.getLongSide() }), o = x({ v: e.getShortSide() }), l = e.machining.corners.map((m) => m.type ? m.size : 0), a = [
      {
        edge: "left",
        distance: t - n
      },
      {
        edge: "right",
        distance: r - t - n
      },
      {
        edge: "bottom",
        distance: o - s - n
      },
      {
        edge: "top",
        distance: s - n
      }
    ], u = e.machining.corners.map((m, w) => {
      const F = w === 0 || w === 3, W = w < 2, J = F ? t : r - t;
      let Q = null;
      this.face === 0 ? Q = W ? s : o - s : this.face === 1 && (Q = W ? o - s : s);
      const X = Math.sqrt(J * J + Q * Q);
      return {
        c: m,
        distance: X
      };
    }), f = Math.min(...a.map((m) => m.distance)), p = Math.min(...u.map((m) => m.distance)), S = u.findIndex((m) => m.distance === p), h = e.machining.corners[S];
    if (h && h.type === "radius") {
      let m = S === 0 || S === 3 ? 0 : r, w = S < 2 ? 0 : o;
      const F = S < 2;
      m += S === 0 || S === 3 ? l[S] : -l[S], w += F ? l[S] : -l[S];
      const J = t - m, Q = S < 2;
      let X;
      this.face === 0 ? X = Q ? s : o - s : this.face === 1 && (X = Q ? o - s : s);
      const ce = X - w, pe = Math.sqrt(J * J + ce * ce), T = l[S] - pe - n;
      let v = !1;
      return h.index === 0 ? v = t <= m && X <= w : h.index === 1 ? v = t >= m && X <= w : h.index === 2 ? v = t >= m && X >= w : h.index === 3 && (v = t <= m && X >= w), v && T < f ? T : f;
    } else if (h && h.type === "bevel") {
      let m, w, F;
      h.index === 0 ? (m = 1, w = 1, F = -h.size) : h.index === 1 ? (m = 1, w = -1, F = -r + h.size) : h.index === 2 ? (m = 1, w = 1, F = -r - o + h.size) : h.index === 3 && (m = -1, w = 1, F = -o + h.size);
      const W = h.index === 0 ? 1 : -1, J = (m * t + w * s + F) / Math.sqrt(m * m + w * w) * W - n;
      return J < f ? J : f;
    } else
      return f;
  }
  validate(e, t, s = null) {
    const n = [];
    if (!k(this.x) || !k(this.y) || !k(this.diameter)) {
      const o = {
        index: t,
        message: "X, Y & diameter are all required.",
        fields: []
      };
      this.x || o.fields.push("x"), this.y || o.fields.push("y"), this.diameter || o.fields.push("diameter"), n.push(o);
    }
    return x({ v: this.diameter }) <= 0 && n.push({
      index: t,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), x({ v: this.depth }) < 0 && n.push({
      index: t,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in e && x({ v: e.t }) > 0 && x({ v: this.depth }) > x({ v: e.t }) && n.push({
      index: t,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in e) || !e.t) && x({ v: this.depth }) > 0 && n.push({
      index: t,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(e) < 0 && n.push({
      index: t,
      message: "Outside of part."
    }), s && Gi(this, s, n, t), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Ys {
  constructor({
    position: e = null,
    //from left or bottom
    edge: t = "x1",
    face: s = 0,
    numHoles: n = null,
    diameter: r = 0,
    depth: o = 0,
    distanceFromEdge: l = 0,
    outerSpacing: a = 0,
    hingeLength: u = 0,
    minimumHoleDistance: f = 0,
    positionLimit: p = 0
  }, S) {
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
    this.position = e, this.edge = t, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = f, this.positionLimit = p, S && this.createHoles(S);
  }
  getFace() {
    return wt[this.face];
  }
  getHoleSpacing() {
    const e = x({ v: this.hingeLength }) - x({ v: this.outerSpacing }) * 2, t = this.numHoles - 1;
    return e / t;
  }
  getHoleXPosition(e, t) {
    let s = 0;
    const n = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        s = this.distanceFromEdge;
        break;
      case "x2":
        s = e.getLongSide() - x({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = x({ v: this.position }) + x({ v: this.outerSpacing }) + n * t;
        break;
    }
    return s;
  }
  getHoleYPosition(e, t) {
    let s = 0;
    const n = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        s = x({ v: this.position }) + x({ v: this.outerSpacing }) + n * t;
        break;
      case "y1":
        s = x({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = e.getShortSide() - x({ v: this.distanceFromEdge });
        break;
    }
    return s;
  }
  createHoles(e) {
    this.holes = [];
    for (let t = 0; t < this.numHoles; t++) {
      const s = new os({
        x: this.getHoleXPosition(e, t),
        y: this.getHoleYPosition(e, t),
        diameter: this.diameter,
        depth: this.depth,
        face: this.face,
        type: "hinge"
      });
      this.holes.push(s);
    }
    return this.holes;
  }
  validate(e, t, s = null) {
    const n = [];
    return this.holes.forEach((r, o) => {
      const l = r.validate(e, o).map((a) => (a.index = t, a.message = `Hole ${o + 1}: ${a.message}`, a));
      n.push(...l);
    }), s && Gi(this, s, n, t), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Xs {
  constructor({ type: e = "radius", size: t, index: s }) {
    c(this, "type");
    c(this, "size");
    c(this, "index");
    c(this, "valid");
    this.type = e, this.size = t, this.index = s;
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
  validate(e, t) {
    const s = e.getShortSide(), n = [];
    if (this.type === null) {
      this.size = null;
      const r = this.getCorner();
      e.banding[r] = !1;
    }
    return this.type && x({ v: this.size }) <= 0 && n.push({
      index: t,
      message: "Corner size cannot be zero or negative"
    }), this.type && x({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
let Wn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: e = [],
    hingeHoles: t = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Xs(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Xs({
        type: null,
        size: null,
        index: n
      }));
    }), e && (this.holes = e.map((n) => new os(n))), t && (this.hingeHoles = t.map((n) => new Ys(n)));
  }
  validateEverything(e, t = null) {
    const s = this.validate(e, "holes"), n = this.validate(e, "hingeHoles"), r = this.validate(e, "corners");
    s.length && new ne({
      item: e,
      index: t,
      listId: Se(e) ? [e.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new ne({
      item: e,
      index: t,
      listId: Se(e) ? [e.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new ne({
      item: e,
      index: t,
      listId: Se(e) ? [e.listId] : null,
      message: "Issue with machining -> corners",
      field: [["machining"]]
    });
  }
  validate(e, t, s = null) {
    if (!e) return [];
    if (!t) return [];
    const n = [];
    return n.push(...this.validateAll(e, t, s)), n;
  }
  validateAll(e, t, s = null) {
    if (!e) return [];
    const n = [];
    return this[t].forEach((r, o) => n.push(...r.validate(e, o, s))), n;
  }
  createHole(e, t, s, n = 0, r = 0) {
    const o = new os({
      x: e,
      y: t,
      diameter: s,
      depth: n,
      face: r
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({
    numHoles: e,
    position: t,
    diameter: s,
    depth: n = 0,
    edge: r = "x1",
    face: o = 0,
    distanceFromEdge: l = 0,
    outerSpacing: a = 0,
    minimumHoleDistance: u = 0,
    hingeLength: f = 0
  }) {
    const p = new Ys({
      numHoles: e,
      position: t,
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
  updateHingeHoles(e) {
    this.hingeHoles.forEach((t) => t.createHoles(e));
  }
  getAllHingeHoles(e) {
    const t = [];
    return this.hingeHoles.forEach((s) => {
      s.holes.length ? t.push(...s.holes) : (s.createHoles(e), t.push(...s.holes));
    }), t;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce(
      (e, t) => e + t.numHoles,
      0
    );
  }
  getNumCorners() {
    return this.corners.filter((e) => e.type !== null).length;
  }
};
function ws(i) {
  var e, t, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (t = (e = i.machining) == null ? void 0 : e.holes) != null && t.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function xl(i) {
  var e, t, s, n;
  if ("machining" in i) {
    if (!ws(i)) {
      i.machining = null;
      return;
    }
    (e = i.machining.holes) != null && e.length || (i.machining.holes = null), (t = i.machining.hingeHoles) != null && t.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class Ss {
  constructor(e = null) {
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
    var t;
    this.listId = e != null && e.listId ? e.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = e == null ? void 0 : e.id, this.shapes = k(e == null ? void 0 : e.shapes) ? e.shapes.map((s) => s.toString()) : [], this.shapeListIds = k(e == null ? void 0 : e.shapeListIds) ? e.shapeListIds : [], this.direction = k(e == null ? void 0 : e.direction) ? e.direction : "l", this.q = k(e == null ? void 0 : e.q) ? e.q : 1, k(e == null ? void 0 : e.shapeList) && ((t = e.shapeList) != null && t.length) && this.validate(e.shapeList);
  }
  validate(e = []) {
    var o, l;
    if (this.issues = [], !(e != null && e.length))
      throw new Error("shapeList is required to validate user group");
    const t = this.findShapes(e);
    if (!t.length)
      return new ne({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = t[0];
    if (Je(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new ne({
          item: this,
          message: "Must have 2 or more parts."
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new ne({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    if (t.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new ne({
        item: this,
        field: [["orientationLock"]],
        message: `Part in position ${u + 1} must have orientation lock set to be part of a group.`
      });
    }), this.issues.length) return this.issues;
    const n = gi(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return t.forEach((a, u) => {
      if (a.id === s.id) return;
      const f = a.getTrimmedDimensions(!0)[n];
      ue.equalTo(f, r) || new ne({
        item: this,
        message: `Part in position ${u + 1} final ${n === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${f}. Check the dimensions, trim & orientation lock.`
      });
    }), this.issues;
  }
  findShapes(e = []) {
    var s, n;
    if (!e.length) return [];
    let t = [];
    if (Se(e[0])) {
      if (!((s = this.shapeListIds) != null && s.length)) return [];
      if (t = this.shapeListIds.map((r) => e.find((o) => o.listId === r)).filter((r) => r), !t.length)
        throw new Error("could not map group shapes to shape list");
      return t;
    } else {
      if (!((n = this.shapes) != null && n.length)) return [];
      const r = /* @__PURE__ */ new Set();
      t = this.shapes.map((o) => {
        const l = e.find((a) => a.parentID === o && !a.inUserGroup && !r.has(a.id));
        return l ? (r.add(l.id), l) : null;
      }).filter((o) => o);
    }
    if (!t.length)
      throw new Error("could not map group shapes to shape list");
    return t;
  }
  populateParentID(e) {
    var t;
    e != null && e.length && (t = this == null ? void 0 : this.shapeListIds) != null && t.length && (this.shapes = this.shapeListIds.map((s) => (e.findIndex((r) => r.listId === s) + 1).toString()));
  }
  //create a group from a user group
  createGroup(e = 0, t = 0, s = [], n = null) {
    if (!(s != null && s.length))
      throw new Error("some parts are required to create a user group");
    if (!Je(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((f) => {
      const p = s.findIndex((S) => !S.inUserGroup && S.parentID === f.parentID);
      if (p === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(p, 1), tl(f), f.inUserGroup = !0;
    });
    let l = 0, a = 0;
    this.direction === "l" ? a = o.w : l = o.l;
    let u;
    try {
      const f = {
        id: `ug${e}.${t}`,
        shapes: r,
        l,
        w: a,
        t: o == null ? void 0 : o.t,
        material: o == null ? void 0 : o.material,
        direction: this.direction,
        orientationLock: this == null ? void 0 : this.direction,
        preventAutoRotation: !0,
        container: n,
        type: "user"
      };
      u = new pt(f);
    } catch (f) {
      return console.error(f), !1;
    }
    return u.parentID = `ug${e}`, n && u.updateShapeSpacing(n), u;
  }
}
function yh(i, e = []) {
  if (!(i != null && i.length)) return [];
  const t = i.map((s) => new Ss(s));
  return e.length && kl(t, e), t;
}
function kl(i = [], e = []) {
  i.length && e.length && i.forEach((t) => {
    t.shapeListIds = t.shapeListIds.filter((s) => e.find((n) => n.listId === s));
  });
}
function Cl(i) {
  const e = {};
  return i.forEach((t) => {
    t.shapeListIds.forEach((s) => {
      const n = t.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function Il(i, e, t = !0) {
  const s = Cl(i), n = [];
  for (const r in s) {
    const o = s[r], l = e.findIndex((u) => u.listId === r);
    l < 0 && new ne({
      message: "Cannot find at least one part in the list.",
      issues: n
    });
    const a = e[l];
    (!(a != null && a.q) || o > a.q) && new ne({
      message: `Not enough of part ${a != null && a.name ? a.name : l + 1} to form groups - ${o} needed, ${a.q ?? 0} found.`,
      issues: n
    });
  }
  return t && i.forEach((r) => {
    const o = r.validate(e);
    o != null && o.length && n.push(...o);
  }), n;
}
const St = ["y1", "y2", "x1", "x2"], wi = ["a", "b", "c", "d"], At = [...St, ...wi], wt = ["a", "b"];
function Nn(i) {
  return wi.includes(i);
}
function Ll(i) {
  return At.includes(i);
}
const qe = {
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
function Pl(i) {
  return St.map((e) => i[e] ?? null);
}
function Gt(i) {
  if (!k(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [e, t] of Object.entries(i))
    e !== "_id" && e.startsWith("_") && (i[e.substring(1)] = t, delete i[e]);
  return i;
}
function bh({
  stockList: i,
  removeScores: e = !1,
  saw: t = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    (s || r.preventAutoRotation) && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new jt(r, t);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return e && delete o.algoBenchmark, o;
  }).sort(Hi.ID);
}
function wh({
  shapeList: i,
  stockList: e,
  preventAutoRotation: t = !1
}) {
  if (typeof e > "u")
    throw new Error("recreateShapeList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.filter((s) => s).map((s) => {
    var o;
    t && (s.preventAutoRotation = !0);
    let n;
    if (Dl(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new Et(l));
      try {
        n = new pt(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      n = new Et(s);
    if (n.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${n.issues.map((l) => l.message).join(", ")}`);
    const r = e.find((l) => {
      var a;
      return l.id === (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId));
    });
    return n.stock = r, n;
  }).sort(Hi.ID);
}
function Sh({
  cutList: i,
  stockList: e
}) {
  if (typeof e > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((t) => {
    const s = new Vi(t), n = e.find((r) => {
      var o;
      return r.id === (((o = t == null ? void 0 : t.stock) == null ? void 0 : o.id) ?? (t == null ? void 0 : t.stockId));
    });
    return s.stock = n, s;
  });
}
function xh({
  segmentList: i,
  stockList: e
}) {
  return !i || !(i != null && i.length) ? [] : i.map((t) => {
    const s = e.find((r) => {
      var o;
      return r.id === (((o = t == null ? void 0 : t.stock) == null ? void 0 : o.id) ?? (t == null ? void 0 : t.stockId));
    });
    return t.stock = s, new ks(t);
  });
}
function Wi(i, e, t = "decimal", s = !1) {
  return k(i == null ? void 0 : i[e]) ? x({ v: i[e], nf: t, pl: s }) : null;
}
class xs {
  constructor(e, t = "decimal", s = !1) {
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
    var o, l, a, u;
    e = Gt(e), this.readonly = e.readonly, this.id = e.id, this.listId = e != null && e.listId ? e.listId : Date.now().toString() + us(), ["l", "w", "t"].forEach((f) => {
      this[f] = Wi(e, f, t, s);
    }), this.q = k(e == null ? void 0 : e.q) ? $t(Fi(e.q)) ? null : Fi(e.q) : null, this.autoAdd = k(e.autoAdd) ? e.autoAdd : !1, this.name = k(e.name) && ((o = e == null ? void 0 : e.name) != null && o.length) ? (l = ms(e == null ? void 0 : e.name)) == null ? void 0 : l.toUpperCase() : null, this.material = k(e.material) ? e.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((f) => {
      this.trim[f] = Wi(e.trim, f, t, s);
    }), this.cost = k(e.cost) ? typeof e.cost == "number" ? e.cost : parseFloat(e.cost) : null, e.grain = (a = e == null ? void 0 : e.grain) == null ? void 0 : a.toLowerCase(), (e == null ? void 0 : e.grain) === " " && (e.grain = ""), this.grain = e.grain, this.grain = k(e.grain) && ["l", "w"].includes(e.grain.toLowerCase()) ? e.grain.toLowerCase() : "", this.multiEdit = e.multiEdit, this.allowExactFitShapes = k(e == null ? void 0 : e.allowExactFitShapes) ? e.allowExactFitShapes : !1, this.preventGrainRotation = !0, typeof ((u = e == null ? void 0 : e.notes) == null ? void 0 : u.replace) == "function" ? this.notes = e.notes.replace(/,/g, " ") : this.notes = "";
  }
  //change the type of stock
  changeType(e) {
    switch (e !== "sheet" && (this.grain = ""), e) {
      case "linear":
        this.trim.y1 = 0, this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0, this.trim.x2 = 0, this.trim.y1 = 0, this.trim.y2 = 0, this.t = null;
        break;
    }
  }
  getTrimmedDimensions() {
    const e = this.l > this.w ? this.l : this.w, t = this.l < this.w ? this.l : this.w, s = { l: x({ v: e }), w: x({ v: t }) };
    return {
      name: this.name,
      id: null,
      listId: this.listId,
      l: s.l - (x({ v: this.trim.x1 }) + x({ v: this.trim.x2 })),
      w: s.w - (x({ v: this.trim.y1 }) + x({ v: this.trim.y2 }))
    };
  }
  createId(e, t = 0) {
    this.id = `${e + 1}.${t}`;
  }
  isSquare() {
    En(this);
  }
  validate(e) {
    return this.issues = [], ["l", "w", "t"].forEach((t) => Ye[t]({ item: this, saw: e })), Ye.trim({ item: this }), ["q"].forEach((t) => Ye[t]({ item: this, isWarning: !0 })), this.issues = this.issues.filter((t) => t), this.issues;
  }
}
class mi {
  constructor(e, t = "decimal", s = !1) {
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
    c(this, "upDirection", null);
    //objects
    c(this, "machining");
    c(this, "trim", Object.fromEntries(
      St.map((e) => [e, 0])
    ));
    c(this, "banding", Object.fromEntries(
      At.map((e) => [e, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...At,
      "all"
    ].map((e) => [e, {}])));
    c(this, "finish", Object.fromEntries(
      wt.map((e) => [e, ""])
    ));
    c(this, "finishOptions", Object.fromEntries(
      wt.map((e) => [e, {}])
    ));
    /**
     * to align with Shape
     * @remarks input shapes are always 0
     */
    c(this, "rot", 0);
    var r, o, l, a, u, f, p;
    e = e = Gt(e), this.readonly = e.readonly, this.id = e.id, this.listId = e != null && e.listId ? e.listId : Date.now().toString() + us(), ["l", "w", "t"].forEach((S) => {
      this[S] = Wi(e, S, t, s);
    }), this.q = k(e == null ? void 0 : e.q) ? $t(Fi(e.q)) ? null : Fi(e.q) : null, this.name = k(e.name) && ((r = e == null ? void 0 : e.name) != null && r.length) ? (o = ms(e == null ? void 0 : e.name)) == null ? void 0 : o.toUpperCase() : null, this.material = k(e.material) ? e.material.trim().toUpperCase() : "", this.multiEdit = e.multiEdit, typeof ((l = e == null ? void 0 : e.notes) == null ? void 0 : l.replace) == "function" ? this.notes = e.notes.replace(/,/g, " ") : this.notes = "", this.stockLock = (e == null ? void 0 : e.stockLock) ?? [], this.upDirection = (e == null ? void 0 : e.upDirection) ?? null;
    for (const S of Object.keys(this.trim))
      this.trim[S] = Wi(e.trim, S, t, s);
    for (const S of Object.keys(this.banding))
      this.banding[S] = k((a = e == null ? void 0 : e.banding) == null ? void 0 : a[S]) ? e.banding[S] : !1;
    for (const S of Object.keys(this.bandingOptions))
      this.bandingOptions[S] = k((u = e == null ? void 0 : e.bandingOptions) == null ? void 0 : u[S]) ? e.bandingOptions[S] : {};
    for (const S of Object.keys(this.finish))
      this.finish[S] = k((f = e == null ? void 0 : e.finish) == null ? void 0 : f[S]) ? e.finish[S] : "";
    for (const S of Object.keys(this.finishOptions))
      this.finishOptions[S] = k((p = e == null ? void 0 : e.finishOptions) == null ? void 0 : p[S]) ? e.finishOptions[S] : {};
    this.orientationLock = k(e.orientationLock) && ["l", "w"].includes(e.orientationLock.toLowerCase()) ? e.orientationLock.toLowerCase() : "", this.machining = new Wn(e.machining ?? {
      holes: [],
      hingeHoles: [],
      corners: []
    }), this.customData = (e == null ? void 0 : e.customData) ?? {};
  }
  isSquare() {
    return this.l === this.w;
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          At.map((t) => [t, !1])
        );
        break;
    }
  }
  createId(e, t = 0) {
    this.id = `${e + 1}.${t}`;
  }
  getLongSide() {
    return x({ v: this.l }) > x({ v: this.w }) ? x({ v: this.l }) : x({ v: this.w });
  }
  getShortSide() {
    return x({ v: this.l }) < x({ v: this.w }) ? x({ v: this.l }) : x({ v: this.w });
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
  getTrimmedDimensions(e = !1) {
    let t = { l: x({ v: this.l }), w: x({ v: this.w }) };
    return e && (t = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: t.l - (x({ v: this.trim.x1 }) + x({ v: this.trim.x2 })),
      w: t.w - (x({ v: this.trim.y1 }) + x({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(e, t) {
    if (!this.readonly)
      if (e = x({ v: e }), this.trim) {
        for (const s in this.trim)
          this.trim[s] = e;
        t === "linear" && (this.trim.y1 = 0, this.trim.y2 = 0);
      } else
        this.trim = {
          x1: e,
          x2: e,
          y1: t !== "linear" ? e : 0,
          y2: t !== "linear" ? e : 0
        };
  }
  validate({
    inputStockList: e = [],
    index: t = null,
    partTrim: s = 0,
    useInventory: n = !1,
    saw: r = null
  }) {
    if (this.issues = [], ["l", "w", "t"].forEach((o) => Ye[o]({ item: this, index: t, saw: r })), s = x({ v: s }), Ye.partTrim({ item: this, partTrim: s, index: t }), Ye.trim({ item: this, index: t }), Ye.machining({ item: this, index: t }), ["q"].forEach((o) => {
      Ye[o]({ item: this, index: t, isWarning: !0 });
    }), e.length && !n) {
      const o = new Ot(r);
      Ye.stockMatch({ item: this, inputStockList: e, saw: o, partTrim: s, index: t, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Ut {
  constructor(e) {
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
    c(this, "identicalTo");
    c(this, "hasTrim");
    c(this, "infiniteLength");
    c(this, "proximity");
    //objects
    c(this, "_trim", Object.fromEntries(
      St.map((e) => [e, 0])
    ));
    c(this, "customData");
    this.initRectangle(e);
  }
  validateRectangle(e) {
    this.issues = [];
    const t = [], s = ["x", "y", "t", "w"];
    e != null && e.infiniteLength || s.push("l"), s.forEach((n) => t.push(...Ye[n]({ item: e }))), this.issues.push(...Ye.customData({ item: e })), this.issues.push(...t.filter((n) => n));
  }
  initRectangle(e, t = !1) {
    var n, r, o;
    if (!t) {
      this.validateRectangle(e), this.id = k(e.id) ? e.id.toString() : this.id || null, this.setParentID(), k(e == null ? void 0 : e.q) ? typeof e.q == "string" ? this.q = parseInt(e.q) : this.q = e.q : this.q = 0, this.name = k(e.name) && ((n = e == null ? void 0 : e.name) != null && n.length) ? (r = oo(ms(e == null ? void 0 : e.name))) == null ? void 0 : r.toUpperCase() : null, k(e == null ? void 0 : e.cost) ? typeof e.cost == "string" ? this.cost = parseFloat(e.cost) : typeof e.cost == "number" && (this.cost = e.cost) : this.cost = 0, this.material = k(e.material) ? e.material.trim().toLowerCase() : null, this.duplicate = k(e == null ? void 0 : e.duplicate) ? e.duplicate : !1, this.grain = typeof e.grain < "u" && k(e == null ? void 0 : e.grain) ? e.grain.toLowerCase() : null, this.area = this.getArea(), this.offcut = k(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.notes = typeof (e == null ? void 0 : e.notes) == "string" && e.notes.length ? e.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (e == null ? void 0 : e.customData) ?? {}, this.proximity = {
        rectangle: null,
        distance: null
      }, this.infiniteLength = k(e == null ? void 0 : e.infiniteLength) ? e.infiniteLength : !1;
      try {
        this.trim = (e == null ? void 0 : e.trim) || (e == null ? void 0 : e._trim);
      } catch (l) {
        if ((o = l == null ? void 0 : l.cause) != null && o.issues) this.issues.push(...l.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(l)}`);
      }
      this.trimmed = k(e == null ? void 0 : e.trimmed) ? e.trimmed : !1, this.hasTrim = [this.trim.x1, this.trim.x2, this.trim.y1, this.trim.y2].some((l) => typeof l == "number" && l !== 0);
    }
    this.identicalTo = (e == null ? void 0 : e.identicalTo) ?? [], [
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
      let a = e[l.key];
      if (!k(a))
        return this[l.key] = this[l.key] || l.default;
      typeof a == "string" && (a = x({ v: a })), this[l.key] = a;
    }), !(e != null && e.infiniteLength) && !(e != null && e.preventAutoRotation) && !e.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(e != null && e.preventGrainRotation) && (this.grain = gi(this.grain))), k(e == null ? void 0 : e.stock) && (Ze(e.stock) ? this.stock = e.stock : this.stock = new jt(e.stock), this.stockId = this.stock.id);
  }
  updateRectangle(e) {
    e.preventAutoRotation = !0, this.initRectangle(e, !0);
  }
  set trim(e) {
    if (this._trim = Object.fromEntries(
      St.map((t) => [t, 0])
    ), !!si(e, !0))
      for (const t of St) {
        let s;
        if (typeof e[t] == "string")
          try {
            s = x({ v: e[t] });
          } catch {
            s = 0, new ne({ item: this, field: [["trim", t]], message: `${e[t] ?? "N/A"} is not a valid value for trim: ${t}` });
          }
        else
          s = e[t];
        this._trim[t] = s;
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
  hasCoords(e, t) {
    return this.x === e && this.y === t;
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
  getSide(e) {
    switch (e) {
      case "bottom":
        return new Jt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Jt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Jt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Jt({
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left"
          // parentID: this.id
        });
    }
  }
  getTopPosition(e = !0, t = null) {
    var s;
    if (e && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && t === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y + this.w + ((this.stock.getBladeWidth() || t) ?? 0) : this.y + this.w;
  }
  getRightPosition(e = !0, t = null) {
    var s;
    if (e && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && t === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x + this.l + ((this.stock.getBladeWidth() || t) ?? 0) : this.x + this.l;
  }
  getBottomPosition(e = !0, t = null) {
    var s;
    if (e && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && t === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y - ((this.stock.getBladeWidth() || t) ?? 0) : this.y;
  }
  getLeftPosition(e = !0, t = null) {
    var s;
    if (e && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && t === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x - ((this.stock.getBladeWidth() || t) ?? 0) : this.x;
  }
  sharesSide(e, t = 0, s = null) {
    switch (s) {
      case "left":
        return e.x + e.l + t === this.x;
      case "right":
        return e.x === this.x + this.l + t;
      case "bottom":
        return e.y + e.w + t === this.y;
      case "top":
        return e.y === this.y + this.w + t;
    }
    return !1;
  }
  sameSide(e, t = null) {
    switch (t) {
      case "left":
        return e.x === this.x;
      case "right":
        return e.x + e.l === this.x + this.l;
      case "bottom":
        return e.y === this.y;
      case "top":
        return e.y + e.w === this.y + this.w;
    }
    return !1;
  }
  //considers if the shape can rotate
  getLongestDimension(e) {
    return this.orientationLock ? this[e] : this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(e, t = !1) {
    const s = new Fe(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Fe(this.x, this.y + this.w);
    if (n.corner = "topLeft", (e == null ? void 0 : e.cutType) !== "efficiency" && !t)
      return [n, s];
    const r = new Fe(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new Fe(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, n, o, s];
  }
  getCorners() {
    return {
      bottomLeft: new Fe(this.x, this.y),
      topLeft: new Fe(this.x, this.y + this.w),
      topRight: new Fe(this.x + this.l, this.y + this.w),
      bottomRight: new Fe(this.x + this.l, this.y)
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
  getTrimmedDimensions(e = !1) {
    let t = { l: this.l, w: this.w };
    return e && (t = this.getRotatedDimensions()), this.trimmed ? t : {
      l: t.l - (this.trim.x1 + this.trim.x2),
      w: t.w - (this.trim.y1 + this.trim.y2)
    };
  }
  //trim the rectangle
  trimDimensions() {
    var e, t, s, n;
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !$t(parseFloat(String(r)))).length && (k(this.l) && (this.l -= (k((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x1) ? this.trim.x1 : 0) + (k((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x2) ? this.trim.x2 : 0), this.l <= 0 && new ne({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), k(this.w) && (this.w -= (k((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (k((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new ne({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
  }
  /**
   * change the size of the rectangle back to the original size
   */
  removeTrim() {
    var e, t, s, n;
    if (this.trimmed) {
      if (this.l += (typeof ((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x1) == "number" ? this.trim.x1 : 0) + (typeof ((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) == "number" ? this.trim.y1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
      this.trimmed = !1;
    }
  }
  getUntrimmedDimensions() {
    var s, n, r, o;
    if (!this.trimmed) return { l: this.l, w: this.w };
    const e = this.getLongSide(), t = this.getShortSide();
    return {
      l: e + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0),
      w: t + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y1) == "number" ? this.trim.y1 : 0) + (typeof ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y2) == "number" ? this.trim.y2 : 0)
    };
  }
  //[] cater for rotation / stock
  isIdentical(e, t = !1) {
    var u;
    if (this.constructor !== e.constructor || this.t !== e.t || this.orientationLock !== e.orientationLock || this.material !== e.material)
      return !1;
    if (Je(this) && ((u = this.identicalTo) != null && u.length) && (this.parentID === e.parentID || this.identicalTo.includes(e.parentID)))
      return !0;
    if (Mt(this)) {
      if (e.id === this.id) return !0;
    } else {
      if (e.parentID === this.parentID) return !0;
      if (Je(this) && t && this.parentID !== e.parentID) return !1;
    }
    const { w: s, l: n } = this, { w: r, l: o } = e;
    if (!(s === r && n === o) && !(s === o && n === r)) return !1;
    const l = this.trim, a = e.trim;
    return !l || !a ? l === a : l.x1 === a.x1 && l.x2 === a.x2 && l.y1 === a.y1 && l.y2 === a.y2;
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    return this.l === this.w;
  }
  getDistancesToContainerEdges(e) {
    return [
      this.x - e.x,
      e.l - (this.x + this.l),
      e.w - (this.y + this.w),
      this.y - e.y
    ];
  }
  isInsideStock(e) {
    return !(this.x + this.l > e.l || this.y + this.w > e.w || this.x < 0 || this.y < 0);
  }
  /**
  * Creates or retrieves a cached rectangle used for proximity detection.
  * Optimized for frequent calls with the same distance parameter.
  */
  getProximityRectangle(e) {
    if (!e || e < 0) return null;
    const t = this.proximity;
    if ((t == null ? void 0 : t.distance) === e) {
      const n = t.rectangle;
      return this.x === 0 ? (n.x = 0, n.l = this.l + e) : (n.x = this.x - e, n.l = this.l + e * 2), this.y === 0 ? (n.y = 0, n.w = this.w + e) : (n.y = this.y - e, n.w = this.w + e * 2), n;
    }
    const s = new Ut({
      id: `${this.id}-proximity`,
      name: "proximity",
      x: this.x === 0 ? 0 : this.x - e,
      y: this.y === 0 ? 0 : this.y - e,
      l: this.x === 0 ? this.l + e : this.l + e * 2,
      w: this.y === 0 ? this.w + e : this.w + e * 2,
      preventAutoRotation: !0
    });
    return this.proximity = { rectangle: s, distance: e }, s;
  }
  isShape() {
    return Je(this);
  }
  isSegment() {
    return Al(this);
  }
  isStock() {
    return Ze(this);
  }
  isGroup() {
    return Mt(this);
  }
  isUserGroup() {
    return Cs(this);
  }
}
class Yi extends Ut {
  //used by evo
  constructor(t, s) {
    var n, r;
    super(t);
    // type: StockType;
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = t.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((n = t == null ? void 0 : t.saw) == null ? void 0 : n.stockType) || new ne({ item: this, field: [["type"]], message: `Container type ${((r = t == null ? void 0 : t.saw) == null ? void 0 : r.stockType) ?? "N/A"} is not valid`, shouldTranslate: !1 }), this.setSaw(t, s), this.cutType) {
      case "beam":
        (!k(this.t) || this.t <= 0) && new ne({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(t, s) {
    var n, r, o, l;
    if (!(!t && !s)) {
      if (!s)
        if (k(t == null ? void 0 : t.saw)) {
          if (!((r = t == null ? void 0 : t.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: u } = is(t.saw.cutPreference);
            t.saw.cutType = a, t.saw.cutPreference = u;
          }
        } else {
          t.saw = {};
          const { cutType: a, cutPreference: u } = is(t.cutPreference);
          t.saw.cutType = a, t.saw.cutPreference = u, k(t == null ? void 0 : t.bladeWidth) && (t.saw.bladeWidth = t.bladeWidth), k((n = t == null ? void 0 : t.blade) == null ? void 0 : n.width) && (t.saw.bladeWidth = t.blade.width), k(t == null ? void 0 : t.efficiencyOptions) && (t.saw.efficiencyOptions = t.efficiencyOptions), k(t == null ? void 0 : t.guillotineOptions) && (t.saw.guillotineOptions = t.guillotineOptions), k(t == null ? void 0 : t.stackHeight) && (t.saw.stackHeight = t.stackHeight);
        }
      try {
        const a = s ?? (t == null ? void 0 : t.saw);
        a && (ys(a) ? this.saw = a : this.saw = new Ot(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
      } catch (a) {
        throw new Error("error creating saw", { cause: a });
      }
    }
  }
  get cutType() {
    var t, s, n, r;
    return k((t = this == null ? void 0 : this.saw) == null ? void 0 : t.cutType) ? this.saw.cutType : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var t, s, n, r;
    return k((t = this.saw) == null ? void 0 : t.cutPreference) ? this.saw.cutPreference : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var t, s, n, r;
    return k((t = this.saw) == null ? void 0 : t.guillotineOptions) ? this.saw.guillotineOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var t, s, n, r;
    return k((t = this.saw) == null ? void 0 : t.efficiencyOptions) ? this.saw.efficiencyOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
  }
  get primaryCompression() {
    var t, s;
    if (this.cutType === "efficiency")
      return (s = (t = this.saw) == null ? void 0 : t.efficiencyOptions) != null && s.primaryCompression ? this.efficiencyOptions.primaryCompression : "y";
  }
  getHalfBladeWidth() {
    const t = this.getBladeWidth();
    return t ? t / 2 : 0;
  }
  getBladeWidth() {
    var s, n, r;
    const t = (((s = this == null ? void 0 : this.saw) == null ? void 0 : s.bladeWidth) || ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.bladeWidth)) ?? 0;
    return $t(t) ? 0 : t;
  }
  getStock() {
    return Ze(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class jt extends Yi {
  constructor(t, s) {
    var n;
    t = Gt(t), t.preventAutoRotation = t.preventAutoRotation || ((n = t == null ? void 0 : t.saw) == null ? void 0 : n.stockType) === "roll", t.autoAdd && !t.q && (t.q = 1);
    super(t, s);
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
    delete this.stock, this._id = t == null ? void 0 : t._id, this.autoAdd = k(t == null ? void 0 : t.autoAdd) ? t.autoAdd : !1, this.allowExactFitShapes = k(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.analysis = k(t.analysis) ? t.analysis : null, this.tidy = k(t == null ? void 0 : t.tidy) ? t.tidy : !1, this.algoBenchmark = null, this.used = k(t == null ? void 0 : t.used) ? t.used : !1, this.stack = k(t == null ? void 0 : t.stack) ? t.stack : 1, this.duplicatePattern = (t == null ? void 0 : t.duplicatePattern) ?? null, this.initStock(t);
  }
  initStock(t) {
    switch (this.saw.stockType) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
    this.validateStock(t);
  }
  reset() {
    this.used = !1, this.stack = 1, this.score = null, this.rootSegment = null, this.tidy = null, this.analysis = null, this.duplicatePattern = null, this.shapes = [];
  }
  validateStock(t) {
    const s = [];
    t.autoAdd || ["q"].forEach((n) => s.push(...Ye[n]({ item: t }))), ["grain"].forEach((n) => s.push(...Ye[n]({ item: t }))), this.issues.push(...s.filter((n) => n));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = Ze(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(t) {
    let s = !1, n = !1, r = !1, o = !1;
    if (this.material === t.material && (s = !0), this.t === t.t && (n = !0), this.l === t.l && (r = !0), this.w === t.w && (o = !0), s && n && r && o) return !0;
  }
  hasStack() {
    return typeof this.stack == "number";
  }
  isStacked() {
    return Ze(this.stack) || typeof this.stack == "string";
  }
  clone(t = null) {
    const s = this.id.split(".");
    t ? s.pop() : (t = parseInt(s.pop()), t++), s.push(t.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new jt(r);
  }
  getCroppedLength(t = [], s = 0) {
    if (!(t != null && t.length)) return;
    const n = nl(t.filter((o) => o.added && o.stock.id === this.id), "x"), r = n.x + n.l;
    if (r > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ue.equalTo(r, this.l) ? r : r + s;
  }
}
class Un extends Ut {
  constructor(t) {
    super(t);
    c(this, "addToInventory");
    //for front end selection
    c(this, "added");
    //for adding to inputStock
    c(this, "placementOrder");
    c(this, "flex");
    this.cost = this.getCost(), this.addToInventory = (t == null ? void 0 : t.addToInventory) ?? !0, this.added = !1, this.placementOrder = (t == null ? void 0 : t.placementOrder) ?? null, this.offcut = !0;
  }
  compressForSaving() {
    var t;
    this.stockId = (this == null ? void 0 : this.stockId) || ((t = this == null ? void 0 : this.stock) == null ? void 0 : t.id), delete this.stock, delete this._trim, delete this.trimmed;
  }
  getCost() {
    var t;
    return (t = this.stock) != null && t.isStock() && this.stock ? parseFloat((this.area / this.stock.area * this.stock.cost).toFixed(2)) : 0;
  }
}
function kh({
  offcuts: i,
  stockList: e,
  preventAutoRotation: t = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = e.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, t && (s.preventAutoRotation = !0), new Un(s);
  });
}
class Et extends Ut {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(t) {
    t = Gt(t);
    super(t);
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
    c(this, "fitsStock");
    c(this, "upDirection");
    c(this, "_banding", Object.fromEntries(
      At.map((t) => [t, !1])
    ));
    c(this, "_finish", Object.fromEntries(
      wt.map((t) => [t, ""])
    ));
    this.initShape(t);
  }
  get trim() {
    return super.trim;
  }
  set trim(t) {
    super.trim = t;
  }
  initShape(t, s = !1) {
    var n;
    s || (this.validateShape(t), t.orientationLock = (n = t == null ? void 0 : t.orientationLock) == null ? void 0 : n.toLowerCase(), (t == null ? void 0 : t.orientationLock) === " " && (t.orientationLock = ""), this.orientationLock = k(t == null ? void 0 : t.orientationLock) && this.l !== this.w ? t.orientationLock : null, k(t == null ? void 0 : t.stockLock) ? Array.isArray(t == null ? void 0 : t.stockLock) && (this.stockLock = t.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (t == null ? void 0 : t.banding) || (t == null ? void 0 : t._banding), this.finish = (t == null ? void 0 : t.finish) || (t == null ? void 0 : t._finish), this.machining = k(t == null ? void 0 : t.machining) ? new Wn(t.machining) : null, this.fitsStock = k(t == null ? void 0 : t.fitsStock) ? t.fitsStock : null, this.upDirection = k(t == null ? void 0 : t.upDirection) ? t.upDirection : null), this.added = k(t == null ? void 0 : t.added) ? t.added : !1, this.initGuillotineData(t), this.inGroup = k(t == null ? void 0 : t.inGroup) ? t.inGroup : this.inGroup || !1, this.inUserGroup = k(t == null ? void 0 : t.inUserGroup) ? t.inUserGroup : this.inUserGroup || !1, this.groupID = k(t == null ? void 0 : t.groupID) ? t.groupID : this.groupID || null, this.addedAsGroup = k(t == null ? void 0 : t.addedAsGroup) ? t.addedAsGroup : this.addedAsGroup || !1, this.score = k(t == null ? void 0 : t.score) ? t.score : this.score || null, this.bestScore = k(t == null ? void 0 : t.bestScore) ? t.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = k(t == null ? void 0 : t.placementOrder) ? t.placementOrder : this.placementOrder || null, this.groupPlacementOrder = k(t == null ? void 0 : t.groupPlacementOrder) ? t.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (t == null ? void 0 : t.minSpacing) ?? (this.minSpacing || 0), this.priority = (t == null ? void 0 : t.priority) ?? {};
  }
  initGuillotineData(t) {
    var s, n, r, o, l, a, u, f;
    this.guillotineData = Ei({}, t == null ? void 0 : t.guillotineData, {
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
    var t;
    return (t = this.guillotineData) != null && t.myStripParent && (Je(this.guillotineData.myStripParent) || Mt(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(t, s = !1) {
    var o, l, a, u, f, p, S, h;
    const n = t.bladeWidth;
    if (t.cutType !== "efficiency")
      return s ? 0 : n;
    if (this.minSpacing > 0) return this.minSpacing;
    let r = (t == null ? void 0 : t.minSpacing) || 0;
    if (n > r && (r = n), (l = (o = t.options) == null ? void 0 : o.minSpacingDimension) != null && l.dimension && ((u = (a = t.options) == null ? void 0 : a.minSpacingDimension) != null && u.minSpacing)) {
      const m = (p = (f = t.options) == null ? void 0 : f.minSpacingDimension) == null ? void 0 : p.dimension;
      (this.l <= m || this.w <= m) && (r = ((h = (S = t.options) == null ? void 0 : S.minSpacingDimension) == null ? void 0 : h.minSpacing) || r);
    }
    return s && (r -= n), r < 0 && (r = 0), this.minSpacing = r, r;
  }
  validateShape(t) {
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...Ye[n]({ item: t }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
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
  update(t) {
    t = Gt(t), this.initShape(t, !0), this.updateRectangle(t);
  }
  //banding
  set banding(t) {
    if (this._banding = Object.fromEntries(
      At.map((s) => [s, !1])
    ), !!si(t, !0))
      for (const s of At)
        this._banding[s] = k(t == null ? void 0 : t[s]) ? t[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return Pl(this._banding);
  }
  get finish() {
    return this._finish;
  }
  set finish(t) {
    if (this._finish = Object.fromEntries(
      wt.map((s) => [s, ""])
    ), !!si(t, !0))
      for (const s of wt)
        this._finish[s] = k(t == null ? void 0 : t[s]) ? t[s] : "";
  }
  get facesArray() {
    return wt.map((t) => {
      var s;
      return (s = this.finish) == null ? void 0 : s[t];
    });
  }
  //compress for saving / transfer
  save() {
    var t, s, n;
    delete this.group, (t = this == null ? void 0 : this.guillotineData) == null || delete t.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, At.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), wt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), xl(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(t) {
    return this.orientationLock === "w" && this.w === t.w || this.orientationLock === "l" && this.l === t.l || !this.orientationLock && this.w === t.w && this.l === t.l;
  }
  addToStock(t) {
    this.stock = t, this.stockId = t.id, this.added = !0, this.inGroup = !1, t.used = !0, this.grain = t.grain, t != null && t.grain && this.rot && (this.grain = gi(t.grain)), Rn([
      () => ei(this.isInsideStock(t), `shape ${this.id} is not inside stock ${t.id}`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, Mt(this) && this.shapes.forEach((t) => t.removeFromStock());
  }
  setBestScore(t, s = null) {
    const n = {
      x: t.x,
      y: t.y,
      rot: t.rot,
      total: t.score.total,
      score: t.score,
      group: t.group,
      weighting: null,
      point: s
    };
    this.bestScore = n;
  }
  resetBestScore() {
    const t = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = t, this.resetGuillotineData(!0);
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
  resetGuillotineData(t = !1) {
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
    t && (s.stripShapeBatches.groups = (r = (n = this.guillotineData) == null ? void 0 : n.stripShapeBatches) == null ? void 0 : r.groups), this.guillotineData = s;
  }
  reset(t = !1, s = !0, n = !1) {
    this.removeFromStock(), this.resetPosition(), ii(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, t || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
  }
  round() {
    return {
      x: Math.round(this.x),
      y: Math.round(this.y),
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getBandingLength(t) {
    return !Ll(t) || !this.banding[t] ? 0 : t === "x1" || t === "x2" ? this.getShortSide() : t === "y1" || t === "y2" ? this.getLongSide() : Nn(t) ? Gn(this, t) : 0;
  }
  getPriority(t) {
    var n;
    if (!t) return 0;
    const s = t.parentID;
    return (n = this.priority) != null && n[s] ? this.priority[s] : 0;
  }
  clearPriority() {
    this.priority = {};
  }
  getPerimeterCutVectors() {
    var n;
    const t = (n = this.stock) != null && n.isStock() ? this.stock.getBladeWidth() / 2 : null;
    return [
      //bottom
      {
        x1: this.x - t,
        x2: this.x + this.l + t,
        y1: this.y - t,
        y2: this.y - t,
        type: "bottom"
      },
      //right
      {
        x1: this.x + this.l + t,
        x2: this.x + this.l + t,
        y1: this.y - t,
        y2: this.y + this.w + t,
        type: "right"
      },
      //top
      {
        x1: this.x - t,
        x2: this.x + this.l + t,
        y1: this.y + this.w + t,
        y2: this.y + this.w + t,
        type: "top"
      },
      //left
      {
        x1: this.x - t,
        x2: this.x - t,
        y1: this.y - t,
        y2: this.y + this.w + t,
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
  createPerimeterCuts(t = null) {
    let s = [];
    if (t = t || this.stock, !t) throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((r) => {
      var o;
      return s.push(new Vi({
        stock: (o = this.stock) != null && o.isStock() ? this.stock : t,
        x1: r.x1,
        x2: r.x2,
        y1: r.y1,
        y2: r.y2,
        type: r.type
      }));
    }), s = s.filter((r) => r.isInsideStock()), s;
  }
  createOffset(t) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
    const s = {
      x: this.x - t,
      y: this.y - t,
      l: this.l + t * 2,
      w: this.w + t * 2
    };
    return s.x < 0 && (s.x = 0, s.l -= t), s.y < 0 && (s.y = 0, s.w -= t), s.x + s.l > this.stock.l && (s.l = this.stock.l - s.x), s.y + s.w > this.stock.w && (s.w = this.stock.w - s.y), s;
  }
  setPositionToBestScore() {
    ii(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(t, s = null) {
    var n, r, o;
    return Ze(t) && typeof ((n = this.fitsStock) == null ? void 0 : n[t.parentID]) < "u" ? ((o = (r = this.fitsStock) == null ? void 0 : r[t.parentID]) == null ? void 0 : o[s ?? "any"]) === !0 : zi(this, t, s);
  }
  clone(t = null) {
    const s = this.id.split(".");
    t ? s.pop() : (t = s.pop(), t++), s.push(t);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new Et(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const t = this.cloneGuillotineData();
    return t.myStripParent = $l(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
      id: this.id,
      x: this.added ? this.x : 0,
      y: this.added ? this.y : 0,
      l: this.l,
      w: this.w,
      added: this.added,
      guillotineData: t,
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
  isTooCloseToEdges(t) {
    var n, r;
    const s = ((r = (n = t.saw) == null ? void 0 : n.options) == null ? void 0 : r.minSpacing) || this.minSpacing;
    return s ? this.getDistancesToContainerEdges(t).some((o) => o > 0 && o <= s) : !1;
  }
  validateStripShapeBatches() {
    const t = Object.values(this.guillotineData.stripShapeBatches.groups);
    for (let s = 0; s < t.length; s++) {
      const n = t[s];
      if (n.id !== this.id)
        throw new Error(`strip shape group id does not match shape id ${this.id} ${n.id} ${s}`);
      if (![this.l, this.w].includes(n.dimension))
        throw new Error(`strip shape group dimension does not match shape dimensions ${this.id} ${n.id} ${s} ${this.l} ${this.w} ${n.dimension}`);
    }
  }
  getStripShapeBatchData(t) {
    var s;
    return typeof t != "number" || !((s = this == null ? void 0 : this.guillotineData) != null && s.stripShapeBatches) || !this.guillotineData.stripShapeBatches.groups || !(t in this.guillotineData.stripShapeBatches.groups) ? !1 : this.guillotineData.stripShapeBatches.groups[t];
  }
  isInStripShapeBatch(t) {
    return !!this.getStripShapeBatchData(t);
  }
  isStacked() {
    return this.added && this.stock && this.stock.isStacked();
  }
}
class ks extends Yi {
  constructor(t) {
    var e = (...Eh) => (super(...Eh), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), c(this, "hasHeadCut"), c(this, "isInitial"), this);
    t && (t.preventAutoRotation = !0, e(t), this.validateSegment(t), delete this.trim, delete this.trimmed, this.parentID = k(t == null ? void 0 : t.parentID) ? t.parentID : null, this.shapes = k(t == null ? void 0 : t.shapes) ? t.shapes : [], this.firstShape = k(t == null ? void 0 : t.firstShape) ? t.firstShape : null, this.cuts = [], this.phase = k(t == null ? void 0 : t.phase) ? t.phase : null, this.merged = k(t == null ? void 0 : t.merged) ? t.merged : !1, this.parent = k(t == null ? void 0 : t.parent) ? t.parent : null, this.children = k(t == null ? void 0 : t.children) ? t.children : [], this.siblings = k(t == null ? void 0 : t.siblings) ? t.siblings : [], this.offcut = k(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.segmentType = k(t == null ? void 0 : t.segmentType) ? t.segmentType : null, this.placementOrder = null, this.cutDirection = k(t == null ? void 0 : t.cutDirection) ? t.cutDirection : null, this.hasBeamTrim = k(t == null ? void 0 : t.hasBeamTrim) ? t.hasBeamTrim : !1, this.hasHeadCut = k(t == null ? void 0 : t.hasHeadCut) ? t.hasHeadCut : !1, this.isInitial = k(t == null ? void 0 : t.isInitial) ? t.isInitial : !1);
  }
  validateSegment(t) {
    var s, n;
    (ue.lessThanOrEqualTo(t.w, 0) || ue.lessThanOrEqualTo(t.l, 0)) && new ne({
      item: this,
      message: `Zero / negative dimension - l: ${t.l}, w: ${t.w}.`,
      field: [["l"], ["w"]]
    }), (ue.lessThan(t.x, 0) || ue.lessThan(t.y, 0)) && new ne({
      item: this,
      message: `Negative position - x: ${t.x}, y: ${t.y}.`,
      field: [["x"], ["y"]]
    }), t != null && t.stock && (ue.greaterThan(t.x + t.l, t.stock.l) || ue.greaterThan(t.y + t.w, t.stock.w)) && new ne({
      item: this,
      field: [["x"], ["y"], ["l"], ["w"]],
      message: `Outside of stock ${t.stock.id} - x: ${t.x}, y: ${t.y}, l: ${t.l}, w: ${t.w}, sl: ${(s = t == null ? void 0 : t.stock) == null ? void 0 : s.l}, sw: ${(n = t == null ? void 0 : t.stock) == null ? void 0 : n.w}.`
    });
  }
  //compress for saving / transfer
  save() {
    var t, s;
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
    }), this.stockId = (this == null ? void 0 : this.stockId) ?? ((t = this == null ? void 0 : this.stock) == null ? void 0 : t.id), this.parentID = (s = this == null ? void 0 : this.parent) == null ? void 0 : s.id, delete this.stock, delete this.shapes, delete this.saw, delete this.siblings, delete this.parent, delete this.trim, this.algoBenchmark = null;
  }
  getBladeWidth() {
    return this.stock.getBladeWidth();
  }
  /**
   * create a normalised shape list to allow searching for duplicates
   */
  getNormalisedShapes(t) {
    return t.map((s) => ({
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
class pt extends Et {
  //used for sorting
  constructor(t) {
    var s, n;
    if (t = Gt(t), !((s = t == null ? void 0 : t.shapes) != null && s.length))
      throw new Error("attempting to create a group with no shapes");
    t.preventAutoRotation = !0;
    super(t);
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
    this.q = 1, delete this._banding, delete this._finish, delete this._trim, this.shapes = t.shapes, this.positions = (n = t == null ? void 0 : t.positions) != null && n.length ? t.positions : [], this.direction = t.direction, this.container = t.container, this.type = (t == null ? void 0 : t.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var t;
    (t = this == null ? void 0 : this.shapes) != null && t.length && (this.shapes = this.shapes.filter((s) => s), this.setShapePositions(), this.container && (this.efficiency = this[this.direction] / this.container[this.direction]));
  }
  setShapePositions() {
    if (!this.container) return;
    this.positions = [], this.type !== "user" && this.sortShapes();
    let t = 0;
    const s = il(this.direction);
    let n = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const a = {
        shape: l.id,
        x: 0,
        y: 0,
        rot: l.rot.valueOf()
      };
      s === "x" ? a.x = t : a.y = t, this.positions.push(a), l.inGroup = !0, t += n === this.shapes.length - 1 ? l[this.direction] : l[this.direction] + l.getMinSpacing(this.container.saw), n++;
    }
    this[this.direction] = t;
    const r = gi(this.direction), o = this.shapes.reduce(
      (l, a) => a[r] > l ? a[r] : l,
      0
    );
    if (this[r] = o, Mn()) {
      const l = this.shapes.slice(0, -1).reduce((f, p) => f + p.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, p) => f + p[this.direction], 0) + l;
      Rn([
        () => ei(
          ue.equalTo(u, this[this.direction]),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => ei(
          t,
          "currentPosition is incorrect in direction"
        ).to.equal(this[this.direction]),
        () => ei(
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
  updateShapeSpacing(t) {
    this.container = t, this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]), this.area = this.getArea();
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  /* getArea()
  {
  	return this.shapes.reduce( ( total, shape ) => total + shape.getArea(), 0 )
  } */
  destroy() {
    super.reset(!1, !0, !1);
    for (const t of this.shapes) t.reset(!1, !0, !1);
  }
  reset(t = !1, s = !0, n = !1) {
    super.reset(t, s, n);
    for (const r of this.shapes) r.reset(t, s, n);
  }
  /**
   * orientate all the shapes correctly to fit in the group
   */
  orientateShapes(t) {
    this.shapes.forEach((s) => {
      const n = this.positions.find((o) => o.shape === s.id);
      if (!n) throw new Error("position not found for shape in group");
      if (!rs(s, n.rot, t)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const t = gi(this.direction);
    this.shapes.sort((s, n) => n[t] === s[t] ? n[this.direction] === s[this.direction] ? s.id.localeCompare(n.id, void 0, { numeric: !0 }) : n[this.direction] - s[this.direction] : n[t] - s[t]);
  }
  /**
   * place the group shapes on the stock
   */
  placeMyShapes(t) {
    if (!t) throw new Error("placeShapes requires stock");
    this.addToStock(t);
    for (let s = 0; s < this.shapes.length; s++) {
      const n = this.shapes[s], r = this.positions.find((a) => a.shape === n.id);
      if (!r) throw new Error("position not found for shape in group");
      if (n.x = this.x + r.x, n.y = this.y + r.y, !rs(n, r.rot, t)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6), n.addToStock(t);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(t) {
    this.orientateShapes(t), el(this, t);
  }
  clone(t = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = t, a.id = n, new pt(a);
  }
  compress() {
    const t = super.compress.call(this);
    return t.direction = this.direction, t.positions = structuredClone(this.positions), t.shapes = this.shapes.map((s) => s.compress()), t.type = this.type, t.cloneType = "group", t;
  }
}
function Ch(i) {
  if (!i.length) return "n";
  const e = i.map((t) => t.grain).filter((t) => t);
  return e.length ? e.every((t) => t === "l") ? "l" : e.every((t) => t === "w") ? "w" : e.some((t) => t === "l" || t === "w") ? "y" : "n" : "n";
}
function Dl(i) {
  return i.shapes !== void 0;
}
function Mt(i) {
  return i instanceof pt && i.type !== "user";
}
function Cs(i) {
  return i instanceof pt && i.type === "user";
}
function Ht(i) {
  return i instanceof Ss;
}
function lt(i) {
  return i instanceof xs;
}
function Se(i) {
  return i instanceof mi;
}
function Tl(i) {
  return i instanceof Ut;
}
function Ze(i) {
  return i instanceof jt;
}
function Is(i) {
  return i instanceof Yi;
}
function Je(i) {
  return i instanceof Et && !(i instanceof pt);
}
function $l(i) {
  return i instanceof Et || i instanceof pt;
}
function Al(i) {
  return i instanceof ks;
}
function jn(i) {
  return Je(i) || Ze(i) || Se(i) || lt(i);
}
function zn(i) {
  return Se(i) || lt(i) ? !1 : Je(i) || Ze(i) ? i.trimmed : !1;
}
function Ol(i) {
  return i instanceof pt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof Ss ? "inputUserGroup" : i instanceof xs ? "inputStock" : i instanceof mi ? "inputShape" : i instanceof jt ? "stock" : i instanceof Yi ? "container" : i instanceof Et && !(i instanceof pt) ? "shape" : i instanceof ks ? "segment" : i instanceof Un ? "offcut" : i instanceof Ot ? "saw" : i instanceof Ut ? "rectangle" : null;
}
function Ks(i, e) {
  return Ir(i, e);
}
function qt(i, e) {
  return ti(i, e);
}
function El(i, e, t) {
  Lr(i, e, t);
}
function k(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function si(i, e = !1) {
  if (!k(i) || typeof i != "object") return !1;
  const t = Object.values(i);
  return t.length === 0 ? !1 : e ? t.some((s) => k(s) && s) : t.some((s) => k(s));
}
function Ih(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((e, t) => {
    let s = 0;
    return lt(t) && t.autoAdd ? s = 1 : s = k(t.q) && typeof t.q == "string" ? parseInt(t.q) : t.q, !isNaN(s) && s > 0 ? e + s : e;
  }, 0);
}
function Lh(i) {
  if (!(i != null && i.length)) return [];
  const e = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), t = {};
  return e.forEach((s) => {
    const n = Ml(s.stock) || 1;
    t[s.parentID] ? t[s.parentID].count += n : (t[s.parentID] = {}, t[s.parentID].count = n, t[s.parentID].id = s.parentID, t[s.parentID].name = s != null && s.name ? s.name : s.id, t[s.parentID].l = s.l, t[s.parentID].w = s.w, t[s.parentID].t = s.t, t[s.parentID].material = s.material, t[s.parentID].rot = s.rot);
  }), Object.values(t);
}
function Ml(i, e = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? e.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Rl() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function ls(i = 0, e, t = null, s = null, n = null) {
  if (!Se(t) && !Ht || s === "stock") return !1;
  let r, o;
  if (Se(t) ? r = t.orientationLock : Ht(t) ? r = t.direction : s === "shape" && (r = n), i === 0 || Ht(t))
    switch (e) {
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
    if (t) o = t.w > t.l;
    else return !1;
  else if (i === 2) {
    if (!t) return !1;
    switch (e) {
      case "n":
        o = t.w > t.l;
        break;
      case "y":
      case "l":
        o = t.w > t.l;
        break;
      case "w":
        o = t.l >= t.w;
        break;
      default:
        o = !1;
    }
  }
  return o;
}
function Zs(i, e, t = null, s = null, n = null) {
  if (!Se(t) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? ls(i, e, t, s, n) ? "cc" : !1 : i === 2 ? e === "w" ? t.l < t.w ? "c" : "cc" : !1 : r;
}
function Fl(i) {
  i.banding && (i.banding = Ni(i.banding, "cc")), i.trim && (i.trim = Ni(i.trim, "cc"));
}
function Ph(i, e = 0) {
  return Je(i) || Se(i) || !e || (i.preventAutoRotation = !0, e === 2 && i.l < i.w && Fl(i)), i;
}
function Ni(i, e = "cc", t = {
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
  if (e === "c") {
    for (const [r, o] of Object.entries(t))
      n[o] = i[r];
    for (const [r, o] of Object.entries(s))
      o in i && (n[o] = i[r]);
  } else if (e === "cc") {
    for (const [r, o] of Object.entries(t))
      n[r] = i[o];
    for (const [r, o] of Object.entries(s))
      o in i && (n[r] = i[o]);
  }
  return n;
}
const { addNotice: ht } = ps(), {
  inputs: Le,
  totalInputShapes: _l,
  totalInputStock: ql,
  createStockList: Bl,
  createShapeList: Hl,
  validateInputShapes: Gl,
  validateInputStock: Vn,
  removeShape: Js,
  removeStock: Qs
} = kn(), Wl = {
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
}, Nl = () => {
  var i, e;
  if ((i = Le == null ? void 0 : Le.inputStock) != null && i.value) {
    for (let t = Le.inputStock.value.length - 1; t >= 0; t--) {
      const s = Le.inputStock.value[t];
      !(s != null && s.l) && !(s != null && s.w) && (t === 0 && Le.inputStock.value.length > 1 || t !== 0) && Qs(s.listId);
    }
    if ((e = Le == null ? void 0 : Le.inputShapes) != null && e.value)
      for (let t = Le.inputShapes.value.length - 1; t >= 0; t--) {
        const s = Le.inputShapes.value[t];
        !(s != null && s.l) && !(s != null && s.w) && (t === 0 && Le.inputShapes.value.length > 1 || t !== 0) && Js(s.listId);
      }
  }
}, Ul = (i, e = !1) => {
  var s, n;
  if (!e) return [];
  const t = [];
  if (!((s = Le == null ? void 0 : Le.inputShapes) != null && s.value)) return t;
  for (let r = Le.inputShapes.value.length - 1; r >= 0; r--) {
    const o = Le.inputShapes.value[r];
    if (!o) continue;
    if (!k(o.material)) {
      t.push(new ne({
        item: o,
        message: "no_material",
        listId: [o.listId]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || t.push(new ne({
      item: o,
      message: "invalid_thickness",
      listId: [o.listId]
    })) : t.push(new ne({
      item: o,
      message: "no_thickness",
      listId: [o.listId]
    })));
  }
  return t;
}, Yn = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...Wl,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, jl = (i = {}) => {
  const e = Yn(i), t = e.t;
  Nl();
  const s = [];
  e.useInventory || s.push(...Vn(i == null ? void 0 : i.sawData)), s.push(...Gl({
    saw: e.sawData,
    partTrim: x({ v: e.partTrim }),
    useInventory: e.useInventory,
    inputShapesOverride: e.inputShapes
  }));
  const n = Dt(s);
  return n.length > 0 ? (console.warn("Validation errors:", JSON.parse(JSON.stringify(n))), ht({
    type: "error",
    message: t("inputs_issue", { x: "part" }),
    additional: n.map((r) => t(r.message))
  }), !1) : !0;
};
async function zl(i) {
  var s, n;
  const e = Yn(i), t = e.t;
  try {
    if (!jl(e))
      return { valid: !1 };
    if (e.maxShapes !== 1 / 0 && e.maxShapes && !e.isAdmin && !e.shared && (_l.value > e.maxShapes || ql.value > e.maxStock))
      return e.onLimit(), { valid: !1 };
    if (e.useInventory) {
      const h = Ul(e.materialStore, !0), m = Dt(h);
      if (m.length > 0)
        return ht({
          type: "error",
          message: t("inputs_issue", { x: "material" }),
          additional: m.map((w) => t(w.message))
        }), { valid: !1 };
    } else {
      const h = Vn(), m = Dt(h);
      if (m.length > 0)
        return ht({
          type: "error",
          message: t("inputs_issue", { x: "stock" }),
          additional: m.map((w) => t(w.message))
        }), { valid: !1 };
    }
    const r = e.useInventory ? new Ot(e.selectedSaw) : new Ot(e.sawData), o = Dt(r.issues);
    if (o.length > 0)
      return ht({
        type: "error",
        message: t("inputs_issue", { x: "saw" }),
        additional: o.map((h) => t(h.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Bl(r), u = Dt(a);
    if (u.length > 0)
      return ht({
        type: "error",
        message: t("inputs_issue", { x: "stock" }),
        additional: u.map((h) => t(h.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return ht({
        type: "error",
        message: t("no_stock")
      }), { valid: !1 };
    const { shapeList: f, issues: p } = await Hl({
      orientationModel: e.orientationModel,
      trim: e.partTrim,
      inputShapesOverride: e.inputShapes
    }), S = Dt(p);
    if (S.length > 0)
      return ht({
        type: "error",
        message: t("inputs_issue", { x: "part" }),
        additional: S.map((h) => t(h.message))
      }), { valid: !1 };
    if (!(f != null && f.length))
      return ht({
        type: "error",
        message: t("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Le.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Le.userGroups.value.forEach((w) => w.populateParentID(Le.inputShapes.value));
      const h = Il(
        Le.userGroups.value,
        Le.inputShapes.value
      ), m = Dt(h);
      if (m.length > 0)
        return ht({
          type: "error",
          message: t("inputs_issue", { x: "group" }),
          additional: m.map((w) => t(w.message))
        }), { valid: !1 };
    }
    return {
      valid: !0,
      saw: r,
      stockList: l,
      shapeList: f
    };
  } catch (r) {
    return console.error("Validation error:", r), ht({
      type: "error",
      message: t("unexpected_error"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function Vl(i) {
  return !i || !si(i, !0) ? "" : Object.values(i).filter((e) => e).join("|");
}
function Ls(i, e, t = "Options") {
  if (!t && `${e}` in i && typeof i[e] == "object") return !0;
  const s = `${e}${t}`;
  return !!(t && s in i && typeof i[s] == "object");
}
function Ps(i) {
  return `${i}Options`;
}
function Yl(i, e, t) {
  const s = Ps(e);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      t.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of t)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function Xl(i, e, t = !0) {
  if (!Ls(i, e, "Options")) return;
  const s = i[e], n = Object.keys(s);
  for (const r of n)
    Ds(i, e, r, t);
  t && Xn(i, e, "all");
}
function Ds(i, e, t, s = !0) {
  s && Xn(i, e, t), t !== "all" && Ls(i, e) && (i[e][t] = !1);
}
function Xn(i, e, t) {
  if (!Ls(i, e, "Options")) return;
  const n = i[`${e}Options`][t];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function Ts(i, e, t, s, n, r) {
  var f;
  const o = e + "Options";
  if (!((f = i == null ? void 0 : i[o]) != null && f[t]) || !(s in i[o][t])) return;
  vi(i, e, t, !1), i[o][t][s] = n;
  const l = i[o][t], a = Object.values(l || {}).filter((p) => p);
  if (!Array.isArray(a)) return;
  const u = Ui(i, e, t, r);
  vi(i, e, t, !!We(u));
}
function Kn(i, e, t, s, n = [], r) {
  const o = e + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Ui(i, e, "all", r), u = i[o][t], f = Object.values(u || {}).filter((p) => p);
  for (const p of l)
    p !== "all" && (n.includes(p) || (Ts(i, e, p, t, s, r), Array.isArray(f) || vi(i, e, p, !1), vi(i, e, p, !!We(a))));
}
function vi(i, e, t, s) {
  var o;
  if (t === "all") return;
  const n = Ps(e), r = Vl((o = i == null ? void 0 : i[n]) == null ? void 0 : o[t]);
  s ? i[e][t] = r || !0 : i[e][t] = !1;
}
function Ui(i, e, t, s) {
  var a;
  const n = e + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[t])) return !1;
  const r = i[n][t], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(e, o);
  return e === "banding" && Nn(t) && We(l) ? Sl(i, t, l) / 1e3 : l;
}
function Dh(i) {
  i != null && i.type && delete i.type, Kl.call(this, i);
}
function Kl(i) {
  if (!(i != null && i.banding) || typeof i.banding != "object") return;
  const e = Object.keys(i.banding);
  if (!e.length) return;
  const t = ["labels", "pricing"];
  if (!e.every((s) => t.includes(s)))
    console.warn("SmartCut - legacy banding data provided - please update to use { labels: string[], pricing: Record<string, number> }");
  else return;
  i.banding = {
    labels: Object.keys(i.banding),
    pricing: i.bandingPricing
  };
}
function Zl(i) {
  if (i != null && i.enable) return;
  i.enable = {};
  const e = {
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
  for (const t of Object.keys(e))
    t in i && (i.enable[e[t].new] = e[t].map === "reverse" ? !i[t] : i[t], delete i[t]);
  console.log(i);
}
const Jl = { id: "mini-stock-nav" }, Ql = ["onMousedown"], ea = { class: "id" }, ta = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = (r) => {
      s("show-stock", r);
    };
    return (r, o) => (y(), I("div", Jl, [
      (y(!0), I(xe, null, Ee(t.stockList, (l, a) => (y(), I("button", {
        key: a,
        class: Ce(["nav-button", { selected: l.id === t.activeStockId }]),
        type: "button",
        style: ke({
          backgroundColor: l.id === t.activeStockId ? "#" + t.secondaryColor : "#" + t.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        $("div", ea, te(a + 1), 1),
        cs($("div", { class: "stack legibility" }, te(l.stack), 513), [
          [hs, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, Ql))), 128))
    ]));
  }
}), oi = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [s, n] of e)
    t[s] = n;
  return t;
}, ia = {
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
}, sa = { id: "spinner" }, na = ["width", "height"], ra = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function oa(i, e, t, s, n, r) {
  return y(), I("div", sa, [
    t.complete ? G("", !0) : (y(), I("svg", {
      key: 0,
      class: "loading",
      style: ke({ width: t.size + "px", height: t.size + "px" }),
      width: t.size,
      height: t.size,
      viewBox: "0 0 300 300"
    }, e[0] || (e[0] = [
      Er('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, na)),
    t.complete ? (y(), I("svg", {
      key: 1,
      class: "complete",
      style: ke({ width: t.size + "px", height: t.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, e[1] || (e[1] = [
      $("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : G("", !0),
    t.showNumber ? (y(), I("div", ra, te(t.number), 1)) : G("", !0)
  ]);
}
const en = /* @__PURE__ */ oi(ia, [["render", oa]]);
function la(i, e, t, s, n = !0) {
  var o;
  if (!i || !t || !s || !((o = i == null ? void 0 : i[e]) != null && o[t])) return;
  const r = i[e][t].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function aa(i, e, t) {
  var s;
  return (s = i == null ? void 0 : i[e]) != null && s[t] ? i[e][t].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function ua(i, e, t, s, n = []) {
  const r = aa(i, t, s);
  if (!r.length) return [];
  const o = e.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((f) => f.id)), u = o.map((f) => f.id).filter((f) => !a.has(f)).map((f) => `'${f}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && (o.sort((a, u) => {
    const f = n.indexOf(a.id), p = n.indexOf(u.id);
    return f === -1 ? 1 : p === -1 ? -1 : f - p;
  }), console.log(o)), o;
}
const ca = ["id"], ha = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, da = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = H(0), r = H(!1), o = (v, D, K, A) => {
      if (!Se(K) || D === 0)
        return v;
      const N = l();
      return D === 1 || D === 2 && A !== "n" && v ? N : v;
    }, l = (v) => {
      const D = { ...t, ...v };
      if (!D.rectangle || !Se(D.rectangle)) return "";
      let K = "";
      switch (D.orientationModel) {
        case 0:
          K = Q.value;
          break;
        case 1:
          D.stockGrain === "y" || D.stockGrain === "n" ? K = D.rectangle.l >= D.rectangle.w ? "l" : "w" : D.rectangle.l >= D.rectangle.w ? K = D.stockGrain : K = K = D.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          K = D.rectangle.l >= D.rectangle.w ? "l" : "w";
          break;
      }
      return K;
    }, a = () => {
      if (t.disabled || W.value.length <= 1) return;
      let v = null;
      [1, 2].includes(t.orientationModel) ? v = p() : v = f(), n.value = v;
    }, u = (v) => {
      const D = W.value.findIndex((K) => K === v);
      return D === -1 ? 0 : D;
    }, f = () => {
      let v = 0;
      return v = u(Q.value) + 1, v > W.value.length - 1 && (v = 0), v;
    }, p = () => {
      let v = 0;
      if (Q.value)
        v = W.value.findIndex((D) => D === "");
      else {
        const D = l();
        v = W.value.findIndex((K) => K === D);
      }
      return v;
    }, S = (v) => {
      s("updateOrientation", v);
    }, h = () => {
      const v = Q.value;
      switch (t.orientationModel) {
        case 0:
          return v ? t.stockGrain === "n" ? v || t.shapeOrientation || "default" : t.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        case 1:
          return v ? t.stockGrain === "n" ? v || t.shapeOrientation || "default" : t.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        case 2:
          return v ? t.stockGrain === "n" ? v || t.shapeOrientation || "default" : t.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, m = () => {
      if (!t.rectangle) return;
      const v = o(
        Q.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if (v !== Q.value) {
        w(v);
        return;
      }
      if (n.value = u(Q.value), !!Se(t.rectangle)) {
        if (t.orientationModel === 1) {
          const D = ce.value ? l() : Q.value;
          w(D);
          return;
        }
        if (t.orientationModel === 2) {
          let D;
          ce.value ? D = t.stockGrain !== "n" ? l() : "" : D = Q.value, w(D);
        }
      }
    }, w = (v) => {
      n.value = u(v), S(v);
    }, F = () => {
      const v = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], D = ["l", "w", "y", "n"], K = [0, 1, 2], A = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, N = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, U = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, ee = [];
      v.forEach((O) => {
        D.forEach((R) => {
          K.forEach((V) => {
            const se = new mi({
              l: O.l,
              w: O.w
            }), ve = l({
              orientationModel: V,
              rectangle: se,
              stockGrain: R
            });
            let Ie = "";
            se.l === se.w ? Ie = "l === w" : se.l > se.w ? Ie = "l >= w" : Ie = "w > l";
            const Te = ["l", "w", "y"].includes(R) ? A : N;
            ee.push({
              Model: V,
              "Stock grain": R,
              "Stock grain description": U[R],
              Dimensions: Ie,
              "Orientation lock": ve || "N/A",
              "Orientation Lock description": Te[ve] || "N/A"
            });
          });
        });
      }), ee.sort((O, R) => {
        if (O.Model !== R.Model)
          return O.Model - R.Model;
        if (O["Stock grain"] !== R["Stock grain"])
          return O["Stock grain"].localeCompare(R["Stock grain"]);
        const V = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return V[O.Dimensions] - V[R.Dimensions];
      }), console.table(ee);
    }, W = Z(() => {
      if (!t.rectangle) return ["l", "w"];
      if (Ht(t.rectangle)) return ["l", "w"];
      let v = ["", "l", "w"];
      return t.rectangle.multiEdit && (v = [" ", "", "l", "w"]), J.value && (v = v.filter((D) => D !== "w")), v;
    }), J = Z(() => {
      var v, D, K, A;
      return Se(t.rectangle) || lt(t.rectangle) ? t.rectangle.isSquare() : t.rectangleType && ((v = t.rectangle) != null && v.l) && ((D = t.rectangle) != null && D.w) ? ((K = t.rectangle) == null ? void 0 : K.l) === ((A = t.rectangle) == null ? void 0 : A.w) : !1;
    }), Q = Z(() => {
      let v = "";
      return Ht(t.rectangle) ? v = t.rectangle.direction : Se(t.rectangle) ? v = t.rectangle.orientationLock ?? "" : lt(t.rectangle) && (v = t.rectangle.grain ?? ""), v;
    }), X = Z(() => Ht(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), ce = Z(() => !X.value.l && !X.value.w), pe = Z(() => ls(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), T = Z(() => {
      var A;
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (lt(t.rectangle) || t.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[t.rectangle.grain] || "noGrain";
      const v = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, D = t.stockGrain || "default";
      let K = "default";
      return Se(t.rectangle) || t.rectangleType === "shape" ? K = h() : Ht(t.rectangle) && (K = t.rectangle.direction || "default"), ((A = v[D]) == null ? void 0 : A[K]) || v[D].default;
    });
    return Pe(n, (v, D) => {
      r.value && D !== void 0 && S(W.value[v]);
    }, { immediate: !1 }), Pe(X, (v, D) => {
      if (!t.rectangle || t.orientationModel === 0 || !Se(t.rectangle) || Se(t.rectangle) && (t.orientationModel === 2 && D.l && D.w && !Q.value || t.stockGrain === "n" && !Q.value))
        return;
      const K = l();
      Q.value !== K && S(K);
    }, { immediate: !1 }), Pe(() => t.stockGrain, (v, D) => {
      v !== D && m();
    }, { immediate: !0 }), gt(() => {
      m(), it(() => {
        r.value = !0, t.debug && F();
      });
    }), (v, D) => (y(), I("div", {
      id: v.id,
      class: Ce(["orientation-button", { rot: pe.value, square: J.value, disabled: v.disabled, [T.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: ke({
        backgroundColor: v.buttonBackground
      }),
      onClick: a
    }, [
      T.value === "delete" ? (y(), I("svg", ha, D[0] || (D[0] = [
        $("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : G("", !0),
      T.value === "freeRotation" ? (y(), I("svg", {
        key: 1,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[1] || (D[1] = [
        $("g", null, [
          $("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          $("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          $("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          $("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : G("", !0),
      T.value === "leftRight" ? (y(), I("svg", {
        key: 2,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[2] || (D[2] = [
        $("g", null, [
          $("path", { d: "m5.408 19.408h61.095" }),
          $("g", null, [
            $("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            $("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      T.value === "topBottom" ? (y(), I("svg", {
        key: 3,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[3] || (D[3] = [
        $("g", null, [
          $("path", { d: "m19.408 66.503v-61.095" }),
          $("g", null, [
            $("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            $("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      T.value === "grainLeftRight" ? (y(), I("svg", {
        key: 4,
        class: "grain",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[4] || (D[4] = [
        $("g", null, [
          $("path", { d: "m3 3h99.887" }),
          $("path", { d: "m3.113 32h99.887" }),
          $("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : G("", !0),
      T.value === "grainTopBottom" ? (y(), I("svg", {
        key: 5,
        class: "grain",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[5] || (D[5] = [
        $("g", null, [
          $("path", { d: "m61 3v99.887" }),
          $("path", { d: "m32 3.113v99.887" }),
          $("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : G("", !0)
    ], 14, ca));
  }
}), fa = ["id"], pa = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = H({
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    Pe(() => t.inputShape.orientationLock, () => {
      let l = {
        x1: t.inputShape.banding.x1,
        x2: t.inputShape.banding.x2,
        y1: t.inputShape.banding.y1,
        y2: t.inputShape.banding.y2
      };
      const a = Zs(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      a && (l = Ni(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 }), Pe([
      () => {
        var l;
        return (l = t.inputShape) == null ? void 0 : l.banding;
      },
      () => t.orientationModel,
      () => t.stockGrain,
      () => {
        var l;
        return (l = t.inputShape) == null ? void 0 : l.orientationLock;
      }
    ], () => {
      var u;
      if (!((u = t.inputShape) != null && u.banding)) return;
      let l = {
        x1: t.inputShape.banding.x1,
        x2: t.inputShape.banding.x2,
        y1: t.inputShape.banding.y1,
        y2: t.inputShape.banding.y2
      };
      const a = Zs(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      a && (l = Ni(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 });
    const r = (l) => {
      (l.key === "Enter" || l.key === " ") && o();
    }, o = () => {
      t.disabled || s("clicked");
    };
    return gt(() => {
      var l;
      (l = document.getElementById(t.id)) == null || l.addEventListener("keydown", r);
    }), ds(() => {
      var l;
      (l = document.getElementById(t.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (y(), I("div", {
      id: l.id,
      class: Ce(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      $("div", {
        class: Ce(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        $("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, fa));
  }
}), ga = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new pi(i).valueOf();
  } catch {
    return null;
  }
};
function ma({
  props: i,
  emit: e,
  isMounted: t
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
          const u = ga(a);
          if (u === null)
            return {
              value: null,
              valid: !1,
              message: "invalid_fraction"
            };
          let f = u;
          return typeof i.min == "number" && (f = Math.max(f, i.min)), typeof i.max == "number" && (f = Math.min(f, i.max)), {
            value: new pi(f).toFraction(!0),
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
          let f = u, p = !0, S = null;
          return typeof i.min == "number" && f < i.min && (p = !1, f = Math.max(f, i.min), S = "below_min"), typeof i.max == "number" && f > i.max && (p = !1, f = Math.min(f, i.max), S = "above_max"), { value: f, valid: p, message: p ? void 0 : S };
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
        } else {
          const u = a.replace(
            i.type === "integer" ? /[^0-9-]/g : /[^0-9.-]/g,
            ""
          );
          if (u === "" || u === "-")
            return i.required ? { value: null, valid: !1, message: "field_required" } : { value: null, valid: !0 };
          let f = i.type === "integer" ? parseInt(u, 10) : parseFloat(u);
          return isNaN(f) ? { value: null, valid: !1, message: "invalid_number" } : (typeof i.min == "number" && f < i.min && (f = i.min), typeof i.max == "number" && f > i.max && (f = i.max), i.allowZero === !1 && f === 0 ? {
            value: null,
            // Value becomes null because 0 is disallowed
            valid: !1,
            message: "zero_not_allowed"
            // Note: If the original input wasn't 0 but was clamped to 0,
            // this rule still applies. Decide if that's the desired UX.
          } : {
            value: f,
            valid: !0
            /*, clamped: clamped */
          });
        }
      // break; // Not needed after return
      default:
        return { value: o, valid: !0 };
    }
  };
  return {
    state: s,
    ...{
      handleInput: (o) => {
        if (!t.value) return;
        const l = o.target, a = n(l.value, !0);
        e("validation", a, i.id), e("input", l.value);
      },
      handleBlur: (o) => {
        if (!t.value) return;
        s.value.isTyping = !1;
        const l = o.target, a = n(l.value, !1);
        e("validation", a, i.id), a.valid && e("update:value", a.value), e("blur", o);
      },
      handleFocus: (o) => {
        t.value && e("focus", o);
      },
      handleKeydown: (o) => {
        if (t.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(o.key)) {
          if (["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(o.key) || (i.type === "unitDependent" && i.numberFormat === "fraction" ? /^[-0-9\s/]$/.test(o.key) || o.preventDefault() : (i.type === "integer" || i.type === "float") && ((i.type === "integer" ? /^[-0-9]$/.test(o.key) : /^[-0-9.]$/.test(o.key)) || o.preventDefault())), o.key === "Enter") {
            s.value.isTyping = !1;
            const l = o.target, a = n(l.value, !1);
            a.valid && e("update:value", a.value), e("enter", a);
          }
          o.key === "Escape" && e("escape");
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
        a.valid && e("update:value", a.value);
      },
      handlePaste: (o) => {
        var a;
        if (!t.value) return;
        const l = ((a = o.clipboardData) == null ? void 0 : a.getData("text")) || "";
        if ((i.type === "integer" || i.type === "float") && !(i.type === "integer" ? /^-?\d+$/ : /^-?\d*\.?\d*$/).test(l)) {
          o.preventDefault();
          return;
        }
        if (i.type === "unitDependent" && i.numberFormat === "fraction" && !/^-?\d*\s*\/?-?\d*$/.test(l)) {
          o.preventDefault();
          return;
        }
        e("paste", o);
      }
    },
    processValue: n
  };
}
function va({
  props: i,
  emit: e,
  isMounted: t
}) {
  const s = H({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (r) => !(i != null && i.output) || i.output === "string" ? {
    value: r,
    valid: !0
  } : i.options && i.options.length > 0 && (i.numberFormat && (i.numberFormat === "fraction" ? r = String(r) : r = Number(r)), !i.options.some((l) => typeof l == "object" ? l.value === r : l === r)) ? {
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
      if (!t.value) return;
      const o = r.target;
      if (i.multiEdit && o.value === " ") {
        e("update:value", null);
        return;
      }
      const l = n(o.value);
      e("validation", l, i.id), l.valid && e("update:value", l.value);
    }
  };
}
function ya({
  props: i,
  emit: e,
  isMounted: t
}) {
  return {
    handleCheckboxChange: (s) => {
      if (!t.value) return;
      const r = s.target.checked ? i.trueValue : i.falseValue;
      if (r === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      e("update:value", r);
    },
    handleFocus: (s) => {
      t.value && e("focus", s);
    },
    handleBlur: (s) => {
      t.value && e("blur", s);
    }
  };
}
const ba = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], wa = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = H(!0), r = H(null), {
      handleInput: o,
      handleFocus: l,
      handleBlur: a,
      handleKeydown: u,
      handleCompositionStart: f,
      handleCompositionEnd: p,
      handlePaste: S
    } = ma({
      props: t,
      emit: s,
      isMounted: n
    }), h = (m) => {
      const w = m.getBoundingClientRect(), F = window.getComputedStyle(m);
      return w.width > 0 && w.height > 0 && F.display !== "none" && F.visibility !== "hidden";
    };
    return gt(() => {
      (k(t.default) && t.value === void 0 || t.value === null) && s("update:value", t.default), t.focus && r.value && h(r.value) && it(() => r.value.focus());
    }), ds(() => {
      n.value = !1;
    }), (m, w) => (y(), I("input", di(m.$attrs, {
      id: t.id,
      ref_key: "inputRef",
      ref: r,
      name: t.id,
      value: t.value,
      inputmode: t.inputMode,
      type: t.inputType,
      placeholder: t.placeholder,
      disabled: t.disabled,
      default: t.default,
      readonly: t.readonly,
      min: t.min,
      max: t.max,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onInput: w[0] || (w[0] = //@ts-ignore
      (...F) => C(o) && C(o)(...F)),
      onFocus: w[1] || (w[1] = //@ts-ignore
      (...F) => C(l) && C(l)(...F)),
      onBlur: w[2] || (w[2] = //@ts-ignore
      (...F) => C(a) && C(a)(...F)),
      onKeydown: w[3] || (w[3] = //@ts-ignore
      (...F) => C(u) && C(u)(...F)),
      onCompositionstart: w[4] || (w[4] = //@ts-ignore
      (...F) => C(f) && C(f)(...F)),
      onCompositionend: w[5] || (w[5] = //@ts-ignore
      (...F) => C(p) && C(p)(...F)),
      onPaste: w[6] || (w[6] = //@ts-ignore
      (...F) => C(S) && C(S)(...F))
    }), null, 16, ba));
  }
}), Sa = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], xa = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = H(!0), r = H(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = ya({
      props: t,
      emit: s,
      isMounted: n
    });
    return (u, f) => (y(), I("input", {
      id: t.id,
      ref_key: "inputRef",
      ref: r,
      type: "checkbox",
      checked: t.value === t.trueValue,
      disabled: t.readonly || t.disabled,
      required: t.required,
      "aria-label": t.ariaLabel,
      "aria-invalid": !!t.issue,
      "aria-describedby": t.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...p) => C(o) && C(o)(...p)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...p) => C(l) && C(l)(...p)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...p) => C(a) && C(a)(...p))
    }, null, 40, Sa));
  }
}), ka = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ca = ["disabled", "selected"], Ia = {
  key: 0,
  value: " "
}, La = ["hidden", "value", "disabled"], Pa = /* @__PURE__ */ Me({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    numberFormat: {},
    output: {},
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
  emits: ["update:value", "focus", "blur", "validation"],
  setup(i, { emit: e }) {
    const t = i, s = e, n = H(!0), r = H(null), o = Z(() => t.options.map((a) => {
      var u, f, p;
      return {
        value: a.value,
        label: ((u = a.label) == null ? void 0 : u.toUpperCase()) ?? ((p = (f = a.value) == null ? void 0 : f.toString()) == null ? void 0 : p.toUpperCase()),
        hidden: a.hidden ?? !1,
        disabled: a.disabled ?? !1
      };
    })), {
      handleSelectChange: l
    } = va({
      props: t,
      emit: s,
      isMounted: n
    });
    return (a, u) => {
      var f, p, S, h;
      return y(), I("select", di(a.$attrs, {
        id: t.id,
        ref_key: "inputRef",
        ref: r,
        value: t.value,
        disabled: t.readonly || t.disabled,
        required: t.required,
        "aria-label": t.ariaLabel,
        "aria-invalid": !!t.issue,
        "aria-describedby": t.errorId,
        onChange: u[0] || (u[0] = //@ts-ignore
        (...m) => C(l) && C(l)(...m))
      }), [
        $("option", {
          value: "",
          disabled: t.selectFirstOptionDisabled,
          selected: !t.value
        }, te(((p = (f = t.text) == null ? void 0 : f.select) == null ? void 0 : p.toUpperCase()) ?? "SELECT"), 9, Ca),
        t.multiEdit ? (y(), I("option", Ia, te(((h = (S = t.text) == null ? void 0 : S.delete) == null ? void 0 : h.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
        (y(!0), I(xe, null, Ee(o.value, (m) => (y(), I("option", {
          key: m.value,
          hidden: m.hidden,
          value: m.value,
          disabled: m.disabled
        }, te(m.label), 9, La))), 128))
      ], 16, ka);
    };
  }
}), Da = ["for"], Ta = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, tn = /* @__PURE__ */ Me({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (e, t) => (y(), I("label", {
      for: e.id,
      class: "input-label"
    }, [
      Qt(te(e.label) + " ", 1),
      e.required ? (y(), I("span", Ta, "*")) : G("", !0)
    ], 8, Da));
  }
}), $a = ["data-field-id"], Aa = ["disabled", "selected"], Oa = {
  key: 0,
  value: " "
}, Ea = ["hidden", "value", "disabled"], ft = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = e, s = i, n = H(null), r = H(null), o = H(!0), l = H(s.numberFormat), a = Z(() => s.custom ? "custom-" + s.id : s.id), u = Z(() => `${a.value}-error`), f = Z(() => s.label || s.placeholder), p = Z(() => T(s.type, s.numberFormat)), S = Z(() => v(s.type, s.numberFormat)), h = Z(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), m = Z(() => {
      let A = s.value;
      if (s.type !== "unitDependent" || !A) return A;
      try {
        return x({ v: A, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), w = Z(() => s.options.map((A) => {
      var N, U;
      return {
        value: A.value,
        label: ((N = A.label) == null ? void 0 : N.toUpperCase()) || ((U = A.value) == null ? void 0 : U.toString().toUpperCase()),
        hidden: A.hidden || !1,
        disabled: A.disabled || !1
      };
    })), F = Z(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), W = Z(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": f.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), J = Z(() => ({
      ...W.value,
      type: s.type,
      inputMode: S.value,
      inputType: p.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default
    })), Q = Z(() => ({
      ...W.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), X = Z(() => ({
      ...W.value,
      options: w.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), ce = (A) => {
      r.value = A;
    }, pe = (A) => s.label && s.enableLabel && s.labelPosition === A, T = (A, N) => {
      if (A === "unitDependent")
        return N === "fraction" ? "text" : "number";
      switch (A) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, v = (A, N) => {
      if (A === "unitDependent")
        return N === "fraction" ? "text" : "decimal";
      switch (A) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, D = (A) => {
      t("update:value", A);
    }, K = (A, N) => {
      A.valid === void 0 || A.valid === !0 ? (o.value = !0, t("validation", n.value, A)) : A.valid === !1 && A.message && (o.value = !1, console.warn(`Field validation error for field ${N} - ${A.message}`), t("validation", n.value, A));
    };
    return Pe(() => s.numberFormat, (A, N) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && A !== N && s.value)
          try {
            const U = x({ v: s.value, nf: A });
            t("update:value", U);
          } catch {
            t("update:value", A === "decimal" ? 0 : "0");
          }
        l.value = A;
      }
    }), (A, N) => (y(), I("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ce(["input-wrapper", F.value]),
      "data-field-id": a.value
    }, [
      pe("first") ? (y(), ge(tn, {
        key: 0,
        id: a.value,
        label: A.label,
        required: A.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      h.value ? (y(), ge(wa, di({
        key: 1,
        ref: ce
      }, J.value, {
        "input-type": p.value,
        "input-mode": S.value,
        value: m.value,
        onValidation: K,
        "onUpdate:value": D
      }), null, 16, ["input-type", "input-mode", "value"])) : A.type === "checkbox" ? (y(), ge(xa, di({
        key: 2,
        ref: ce,
        type: "checkbox"
      }, Q.value, {
        checked: A.value === A.trueValue,
        "onUpdate:value": N[0] || (N[0] = (U) => t("update:value", U))
      }), null, 16, ["checked"])) : A.type === "select" ? (y(), ge(Pa, di({
        key: 3,
        ref: ce
      }, X.value, {
        "onUpdate:value": N[1] || (N[1] = (U) => t("update:value", U))
      }), {
        default: fs(() => {
          var U, ee, O, R;
          return [
            $("option", {
              value: "",
              disabled: A.selectFirstOptionDisabled,
              selected: !A.value
            }, te(((ee = (U = A.text) == null ? void 0 : U.select) == null ? void 0 : ee.toUpperCase()) ?? "SELECT"), 9, Aa),
            A.multiEdit ? (y(), I("option", Oa, te(((R = (O = A.text) == null ? void 0 : O.delete) == null ? void 0 : R.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
            (y(!0), I(xe, null, Ee(w.value, (V) => (y(), I("option", {
              key: V.value,
              hidden: V.hidden,
              value: V.value,
              disabled: V.disabled
            }, te(V.label), 9, Ea))), 128))
          ];
        }),
        _: 1
      }, 16)) : G("", !0),
      pe("last") ? (y(), ge(tn, {
        key: 4,
        id: a.value,
        label: A.label,
        required: A.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      Mr(A.$slots, "default")
    ], 10, $a));
  }
}), Ma = {
  key: 0,
  class: "inputs"
}, Ra = { class: "label" }, Fa = { class: "label" }, _a = { class: "label" }, qa = ["onClick"], Ba = { class: "price" }, Ha = ["aria-label"], as = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = i, s = e, { t: n } = ji(["main", "errors"]), r = H(!1), o = Z(() => t.extraType + "Options"), l = Z(() => {
      var w;
      if (!((w = t.allOptions) != null && w.length)) return "auto";
      const h = t.allOptions.length;
      return h ? `repeat(${h + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (h, m) => {
      s("update-all", t.shape, t.extraType, h, m);
    }, u = (h, m, w) => {
      s("set", t.shape, t.extraType, h, m, w);
    }, f = (h, m, w, F, W) => {
      var ce;
      if (!h) return [];
      const J = (ce = m == null ? void 0 : m[w]) == null ? void 0 : ce[F];
      if (!J)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${F}`), [];
      const Q = Object.values(J);
      if (!Q.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${F}`), [];
      const X = Q.filter((pe) => typeof pe == "string");
      return t.getAvailablePricingOptions ? t.getAvailablePricingOptions(h, X, W) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, p = (h) => {
      if (!t.pricing || !Object.values(t.pricing).length) return "";
      if (!t.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const m = t.getPrice(t.shape, t.extraType, h);
      return m ? t.formatPrice(m) : "";
    }, S = () => {
      const h = [];
      t.extraType in t.shape || new ne(
        {
          item: t.shape,
          message: `The extra type '${t.extraType}' does not exist in the part`
        }
      ), o.value in t.shape || new ne(
        {
          item: t.shape,
          message: `The options key '${o.value}' does not exist in the part`
        }
      ), h.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + h.map((m) => m.message).join(" ")));
    };
    return gt(() => S()), (h, m) => {
      var F, W, J, Q, X, ce, pe, T;
      const w = Wt("font-awesome-icon");
      return r.value ? G("", !0) : (y(), I("div", {
        key: 0,
        class: Ce(["extras group", [h.extraType]]),
        style: ke({ "grid-column-end": "span " + h.partColumns })
      }, [
        h.allOptions.length === 1 && h.allOptions[0].length === 1 ? (y(), I("div", Ma, [
          $("div", Ra, te((W = (F = h.allOptions) == null ? void 0 : F[0]) == null ? void 0 : W[0]), 1),
          $("div", null, [
            (J = h.shape) != null && J[o.value] && "all" in h.shape[o.value] ? (y(), ge(ft, {
              key: 0,
              id: `${h.extraType}-all-${h.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: C(Zt)(C(n)("all")),
              "true-value": (X = (Q = h.allOptions) == null ? void 0 : Q[0]) == null ? void 0 : X[0],
              "false-value": "",
              value: (pe = h.shape[o.value].all) == null ? void 0 : pe[(ce = h.labels) == null ? void 0 : ce[0]],
              "onUpdate:value": m[0] || (m[0] = (v) => {
                var D, K;
                u("all", (D = h.labels) == null ? void 0 : D[0], v), a((K = h.labels) == null ? void 0 : K[0], v);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : G("", !0)
          ]),
          (y(!0), I(xe, null, Ee(h.extraKeys, (v) => {
            var D, K, A, N, U, ee;
            return y(), I("div", { key: v }, [
              (D = h.labels) != null && D[0] && ((A = (K = h.shape) == null ? void 0 : K[o.value]) != null && A[v]) && h.labels[0] in h.shape[o.value][v] ? (y(), ge(ft, {
                key: 0,
                id: `${h.extraType}-${v}-${h.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: C(Zt)(C(n)(((N = h.userFriendlyFieldMap) == null ? void 0 : N[v]) || v)),
                "true-value": (ee = (U = h.allOptions) == null ? void 0 : U[0]) == null ? void 0 : ee[0],
                "false-value": "",
                value: h.shape[o.value][v][h.labels[0]],
                "onUpdate:value": (O) => u(v, h.labels[0], O)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : G("", !0)
            ]);
          }), 128))
        ])) : (y(), I("div", {
          key: 1,
          class: "grid inputs",
          style: ke({
            "grid-template-columns": l.value
          })
        }, [
          (T = h.shape) != null && T[o.value] && "all" in h.shape[o.value] ? (y(), I(xe, { key: 0 }, [
            $("div", Fa, te(C(Zt)(C(n)("all"))), 1),
            (y(!0), I(xe, null, Ee(h.allOptions, (v, D) => {
              var K, A;
              return y(), ge(ft, {
                id: `${h.extraType}-all-${h.labels[D]}-${D}-${h.shapeIndex}`,
                key: `${h.extraType}-all-${h.labels[D]}-${D}-${h.shapeIndex}`,
                type: "select",
                disabled: f(h.pricing, h.shape, o.value, "all", D).length === 0,
                options: f(h.pricing, h.shape, o.value, "all", D).map((N) => ({ value: N, label: N })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (A = h.shape[o.value].all) == null ? void 0 : A[(K = h.labels) == null ? void 0 : K[D]],
                "onUpdate:value": (N) => {
                  var U, ee;
                  u("all", (U = h.labels) == null ? void 0 : U[D], N), a((ee = h.labels) == null ? void 0 : ee[D], N);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            m[2] || (m[2] = $("div", null, null, -1)),
            m[3] || (m[3] = $("div", null, null, -1))
          ], 64)) : G("", !0),
          (y(!0), I(xe, null, Ee(h.extraKeys, (v) => {
            var D, K;
            return y(), I(xe, { key: v }, [
              (D = h.shape) != null && D[o.value] && v in h.shape[o.value] ? (y(), I(xe, { key: 0 }, [
                $("div", _a, te(C(Zt)(C(n)(((K = h.userFriendlyFieldMap) == null ? void 0 : K[v]) || v))), 1),
                (y(!0), I(xe, null, Ee(h.allOptions, (A, N) => {
                  var U;
                  return y(), ge(ft, {
                    id: `${h.extraType}-${v}-${h.labels[N]}-${N}-${h.shapeIndex}`,
                    key: `${h.extraType}-${v}-${h.labels[N]}-${N}-${h.shapeIndex}`,
                    type: "select",
                    disabled: f(h.pricing, h.shape, o.value, v, N).length === 0,
                    options: f(h.pricing, h.shape, o.value, v, N).map((ee) => ({
                      value: ee,
                      label: ee
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: h.shape[o.value][v][(U = h.labels) == null ? void 0 : U[N]],
                    "onUpdate:value": (ee) => {
                      var O;
                      return u(v, (O = h.labels) == null ? void 0 : O[N], ee);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : G("", !0),
              $("div", {
                class: "delete",
                onClick: () => C(Ds)(h.shape, h.extraType, v)
              }, [
                ye(w, { icon: ["fass", "trash"] })
              ], 8, qa),
              $("div", Ba, te(p(v) || C(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        $("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": C(n)("action_item", { a: "delete", i: h.extraLabel }),
          onClick: m[1] || (m[1] = () => C(Xl)(h.shape, h.extraType, !0))
        }, [
          ye(w, { icon: ["fass", "trash"] }),
          Qt(" " + te(C(n)("action_item", { a: "delete", i: h.extraLabel })), 1)
        ], 8, Ha)
      ], 6));
    };
  }
}), Ga = ["id", "disabled"], Wa = { class: "icon" }, Na = /* @__PURE__ */ Me({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["clicked"],
  setup(i, { emit: e }) {
    const t = i, s = e, n = () => {
      t.disabled || s("clicked");
    };
    return (r, o) => {
      var a, u, f, p;
      const l = Wt("font-awesome-icon");
      return y(), I("button", {
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
        $("div", Wa, [
          ye(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = $("div", { class: "indicator" }, null, -1))
      ], 10, Ga);
    };
  }
}), Ua = Me({
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
      return ws(this.inputShape);
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
}), ja = ["id", "disabled"];
function za(i, e, t, s, n, r) {
  const o = Wt("font-awesome-icon");
  return y(), I("button", {
    id: i.id,
    class: Ce(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: e[0] || (e[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    ye(o, { icon: ["fass", "hammer"] })
  ], 10, ja);
}
const Va = /* @__PURE__ */ oi(Ua, [["render", za]]), Ya = { id: "uploader" }, Xa = {
  key: 0,
  class: "debug"
}, Ka = {
  key: 1,
  class: "selected-files"
}, Za = ["src"], Ja = ["onClick"], Qa = !0, eu = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = Tt(() => Promise.resolve().then(() => Ki)), s = H(null), n = H({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = e, l = (h) => ["image/jpeg", "image/jpg", "image/png"].includes(h.type), a = () => {
      var h;
      (h = s.value) == null || h.click();
    }, u = (h) => {
      const m = h.target, w = m.files;
      if (!w) return;
      const F = Array.from(w), W = F.filter((v) => !l(v));
      if (W.length > 0) {
        const v = W.map((D) => D.name).join(", ");
        alert(`Invalid file type(s): ${v}
Only JPG and PNG files are allowed.`), m.value = "";
        return;
      }
      const J = n.value.files || [];
      if (J.length + F.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), m.value = "";
        return;
      }
      const X = [...J, ...F], ce = f(X), pe = X.map((v, D) => ({
        originalName: v.name,
        newName: `${r.prefix}-${D + 1}-${r.uniqueId}${p(v.name)}`
      })), T = {
        shapeId: r.shapeId,
        files: X,
        previewUrls: ce,
        metadata: pe
      };
      n.value = T, o("update", T), m.value = "";
    }, f = (h) => h.map((m) => URL.createObjectURL(m)), p = (h) => h.substring(h.lastIndexOf(".")), S = (h) => {
      URL.revokeObjectURL(n.value.previewUrls[h]);
      const m = [...n.value.files], w = [...n.value.previewUrls], F = [...n.value.metadata];
      if (m.splice(h, 1), w.splice(h, 1), F.splice(h, 1), m.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const W = {
          shapeId: r.shapeId,
          files: m,
          previewUrls: w,
          metadata: F
        };
        n.value = W, o("update", W);
      }
    };
    return Rr(() => {
      var h;
      (h = n.value) != null && h.previewUrls && n.value.previewUrls.forEach((m) => URL.revokeObjectURL(m));
    }), gt(() => {
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
      var F;
      const w = Wt("font-awesome-icon");
      return y(), I("div", Ya, [
        i.env === "development" && Qa ? (y(), I("div", Xa, [
          ye(C(t), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        $("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        $("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          ye(w, { icon: ["fass", "files"] })
        ]),
        (F = n.value.files) != null && F.length ? (y(), I("div", Ka, [
          (y(!0), I(xe, null, Ee(n.value.files, (W, J) => (y(), I("div", {
            key: J,
            class: "selected-file"
          }, [
            $("img", {
              src: n.value.previewUrls[J],
              alt: "Preview"
            }, null, 8, Za),
            $("button", {
              class: "remove-file",
              type: "button",
              onClick: (Q) => S(J)
            }, [
              ye(w, { icon: ["fass", "trash"] })
            ], 8, Ja)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}), tu = /* @__PURE__ */ oi(eu, [["__scopeId", "data-v-0836e586"]]);
function iu(i) {
  var l, a;
  const e = i.x, t = i.x + i.l, s = rt().domain([e, t]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(t)]), n = i.y, r = i.y + i.w, o = rt().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(_i(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(_i(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((a = (l = i == null ? void 0 : i.stock) == null ? void 0 : l.saw) == null ? void 0 : a.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(qi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(qi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function su() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Cn(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(In(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Zn(i, e, t) {
  !t || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    t === "x" ? nu.call(this, r, o, e[n]) : ru.call(this, r, o, e[n]);
  });
}
function nu(i, e, t) {
  const s = rt().domain([i, e]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(e)
  ]), n = Jn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(_i(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(t)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, f;
    return ((f = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : f.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function ru(i, e, t) {
  const s = rt().domain([i, e]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(e)
  ]), n = Jn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(qi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(t)));
  ou(r), this.axes.cutMeasurementYAxes.push(r);
}
function Jn(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function ou(i) {
  i.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, t, s) => {
    var n, r;
    return ((r = (n = s[t]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.height) + 10;
  }).attr("dx", (e, t, s) => {
    var n, r;
    return ((r = (n = s[t]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.width) / 4;
  }).attr("transform", (e, t, s) => {
    var n, r;
    return "rotate(90) translate(" + ((r = (n = s[t]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.width) / 4 + ")";
  });
}
function yi() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function lu() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Xi() {
  var i, e;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), (e = this.axes.cutMeasurementYAxes) != null && e.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function au() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text id").text((e) => sn.call(this, e)).classed("hidden", (e, t, s) => this.isTextHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (i) => i.text((e) => sn.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text name").text((e) => nn.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, t, s) => this.isNameHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const n = s[t];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (i) => i.text((e) => nn.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, t, s) => this.isNameHidden(e, t, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const n = s[t];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text length").text((e) => rn.call(this, e)).classed("hidden", (e, t, s) => this.isLengthHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const r = s[t].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((e) => rn.call(this, e)).classed("hidden", (e, t, s) => this.isLengthHidden(e, t, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const r = s[t].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(r / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text width").text((e) => on.call(this, e)).classed("hidden", (e, t, s) => this.isWidthHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, t, s) => {
      const n = s[t], r = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    }),
    (i) => i.text((e) => on.call(this, e)).classed("hidden", (e, t, s) => this.isWidthHidden(e, t, s)).attr("transform", (e, t, s) => {
      const n = s[t], r = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    })
  );
}
function sn(i) {
  var e, t;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const s = i.guillotineData.myStripDirection, n = i.addedAsGroup;
          let r = "";
          if (s === "l" ? r = `→ ${i.id}` : s === "w" && (r = `↑ ${i.id}`), (t = i == null ? void 0 : i.priority) != null && t[(e = i == null ? void 0 : i.stock) == null ? void 0 : e.parentID] && (r += "P"), n && (r += "G"), r.length) return r;
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
function nn(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function rn(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : x({ v: i.l, o: this.numberConfig }).toString();
}
function on(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : x({ v: i.w, o: this.numberConfig }).toString();
}
function uu(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let e;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const t = gl(
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
      const a = qn(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((f) => o.call(this, f)),
        (u) => u.call((f) => o.call(this, f)),
        (u) => u.remove()
      );
    }
    s = ml(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Nt();
  for (const r of t.toArray()) {
    const o = Bn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = fl(i, o, this.props.stock.value);
      l && n.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new Fe(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Fe(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Fe(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      0 + (this.props.stock.value.trim.y1 ?? 0)
    ),
    new Fe(
      0 + (this.props.stock.value.trim.x1 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    ),
    new Fe(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    )
  ].forEach((r) => n.addPoint(r)), e = n.toArray()) : (n.addPoint(new Fe(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), e = n.toArray());
  for (let r = e.length; r--; ) {
    const o = e[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        e.splice(r, 1);
        break;
      }
  }
  return cu.call(this, e, i), hu.call(this, e, i), !!(e != null && e.length);
}
function cu(i, e) {
  function t(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n, r) {
    n.attr("data-id", (o, l) => l).attr("class", "shape ghost").attr("x", (o) => (r.x = o.x, this.getRectangleCoordinate(r, "x"))).attr("y", (o) => (r.y = o.y, this.getRectangleCoordinate(r, "y"))).attr("width", this.getWidthAttribute(r)).attr("height", this.getHeightAttribute(r)).on("mousedown", (o, l) => {
      this.callbacks.onMoveShape(r, l);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(i, t).join(
    (n) => n.append("rect").call((r) => s.call(this, r, e)),
    (n) => n.call((r) => s.call(this, r, e)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), _e(this).classed("hover", !0), _e(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), _e(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function hu(i, e) {
  function t(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n) {
    n.attr("class", "dot").attr("cx", (r) => this.scales.xPositionScale(r.x)).attr("cy", (r) => this.scales.yPositionScale(r.y)).attr("r", 6).on("mousedown", (r, o) => {
      this.callbacks.onMoveShape(e, o);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(i, t).join(
    (n) => n.append("circle").call((r) => s.call(this, r)),
    (n) => n.call((r) => s.call(this, r)),
    (n) => n.remove()
  ), e.x = 0, e.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), _e(this).classed("hover", !0);
      const r = _e(this).attr("data-id"), o = _e(`.ghost[data-id="${r}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), _e(this).classed("hover", !1);
      const r = _e(this).attr("data-id");
      _e(`.ghost[data-id="${r}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
const du = (i) => i.id;
function fu() {
  if (!this.props.containerWidth) return;
  yi.call(this);
  const i = this.props.shapes.value.reduce((e, t) => {
    const s = parseInt(t.parentID);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && gu.call(this), pu.call(this);
}
function pu() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, du).join(
    (i) => {
      const e = i.append("g").attr("class", "shape-group");
      return ln.call(this, e), an.call(this, e), e.on("mousedown", un.bind(this)), e;
    },
    (i) => (ln.call(this, i), an.call(this, i), i.on("mousedown", un.bind(this)), i),
    (i) => i.remove()
  ), xu.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => au.call(this)), this.selections.shapeWrappers.size() > 0;
}
function gu() {
  var n;
  let i = 1 / 0, e = -1 / 0;
  for (const r of this.props.shapes.value) {
    const o = (n = r == null ? void 0 : r.bestScore) == null ? void 0 : n.total;
    if (o !== 0 && o !== null && o !== void 0) {
      i = o, e = o;
      break;
    }
  }
  const t = this.props.shapes.value.reduce((r, o) => {
    var a;
    const l = (a = o == null ? void 0 : o.bestScore) == null ? void 0 : a.total;
    return l === 0 || l === null || l === void 0 ? r : l < r ? l : r;
  }, i), s = this.props.shapes.value.reduce((r, o) => {
    var a;
    const l = (a = o == null ? void 0 : o.bestScore) == null ? void 0 : a.total;
    return l == null ? r : l > r ? l : r;
  }, e);
  this.scales.scoreColorScale = fi([dt(251, 224, 255), dt(122, 0, 138)]).domain([t, s]);
}
function ln(i) {
  const e = i.selectAll("rect.shape").data((t) => [t]).join("rect").attr("class", "shape").attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).style("fill", (t) => bi.call(this, t));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Ln(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function mu(i) {
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
function an(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (e) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const t = _e(e.target);
    t.classed("hover", !0), t.classed("selected") || t.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (e, t) => {
    const s = _e(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", bi.call(this, t));
  }, { passive: !0 });
}
function un(i, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && vu.call(this, i, e), (this.settings.app || this.settings.embed) && wu.call(this, i, e), this.state.device === "desktop" && (Xi.call(this), iu.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
}
function vu(i, e) {
  if (console.clear(), e) {
    let t;
    switch (this.state.debug) {
      case "guillotine":
        t = [
          "id",
          "placementOrder",
          "priority",
          "guillotineData.myPhase",
          "guillotineData.myStripDirection",
          "guillotineData.myStripParent",
          "guillotineData.firstShape",
          "addedAsGroup"
        ], bu.call(this, e);
        break;
      case "groups":
        t = ["id", "addedAsGroup"];
        break;
      case "score":
        t = ["id", "bestScore.score"];
        break;
      default:
        t = ["id", "placementOrder", "priority", "addedAsGroup", "bestScore.score", "upDirection"];
    }
    console.table(yu(e, t)), console.log(e.bestScore.score);
  }
}
function yu(i, e) {
  return e.reduce((t, s) => {
    const n = Fu(i, s);
    return t[s] = Array.isArray(n) ? n.join(", ") : n, t;
  }, {});
}
function bu(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const t = (r = (n = this.props.shapes.value.find((o) => o.id === e)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function wu(i, e) {
  var t;
  if (this.settings.app || this.settings.embed) {
    const s = {
      name: e.name,
      id: e.id,
      x: e.x,
      y: e.y,
      l: e.l,
      w: e.w,
      banding: e != null && e.banding && typeof e.banding == "object" ? e.banding : null,
      rot: e.rot,
      stock: (t = e == null ? void 0 : e.stock) == null ? void 0 : t.id,
      color: bi.call(this, e),
      notes: e == null ? void 0 : e.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function bi(i) {
  var n;
  const e = dt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (i.addedAsGroup)
          return dt(43, 156, 16);
        if (i.guillotineData.firstShape)
          return dt(255, 171, 231);
        if (typeof i.guillotineData.myPhase == "number") {
          const r = [0, 115, 255], o = [176, 255, 231];
          return `rgb(${r.map((a, u) => Math.round(a + i.guillotineData.myPhase / 5 * (o[u] - a))).join(",")})`;
        }
        break;
      case "groups":
        if (i.addedAsGroup !== !1)
          return dt(43, 156, 16);
        break;
      case "priorityShapes":
        if (i != null && i.priority && ((n = i.priority) != null && n[i.stock.parentID]))
          return dt(139, 171, 46);
        break;
      case "score": {
        const r = this.scales.scoreColorScale(i.bestScore.total);
        return r != null && typeof r.toString == "function" ? r : r != null && typeof r.r == "number" && typeof r.g == "number" && typeof r.b == "number" ? (console.warn("Detected corrupted score color object from scale:", r, "for shape:", i), dt(r.r, r.g, r.b, r.opacity ?? 1)) : (console.warn("Score color scale returned null, undefined, or unexpected value:", r, "for shape:", i), e);
      }
    }
  const t = parseInt(i.parentID);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(t) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? dt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", i, s), e);
}
function Su(i) {
  const e = [];
  for (const t of i)
    if (t.added && (t != null && t._banding))
      for (const [s, n] of Object.entries(t._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        t.rot && (r = mu.call(this, s));
        const o = ku.call(this, t, r);
        o && e.push(o);
      }
  return e;
}
function cn(i) {
  return i.attr("class", "banding").attr("x1", (e) => this.scales.xPositionScale(e.x1) + Oi.call(this, e.type, "x")).attr("x2", (e) => this.scales.xPositionScale(e.x2) + Oi.call(this, e.type, "x")).attr("y1", (e) => this.scales.yPositionScale(e.y1) + Oi.call(this, e.type, "y")).attr("y2", (e) => this.scales.yPositionScale(e.y2) + Oi.call(this, e.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function xu(i) {
  if (!this.settings.main) return;
  const e = Su.call(this, i);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (t, s) => s).join(
    (t) => t.append("line").call((s) => cn.call(this, s)),
    (t) => t.call((s) => cn.call(this, s)),
    (t) => t.remove()
  );
}
function Oi(i, e) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[e]) ?? 0;
}
function ku(i, e) {
  const t = {
    x1: i.x,
    x2: i.x,
    y1: i.y,
    y2: i.y,
    type: e
  };
  switch (e) {
    case "x1":
      t.y2 = i.y + i.w;
      break;
    case "x2":
      t.x1 = t.x2 = i.x + i.l, t.y2 = i.y + i.w;
      break;
    case "y1":
      t.x2 = i.x + i.l;
      break;
    case "y2":
      t.y1 = t.y2 = i.y + i.w, t.x2 = i.x + i.l;
      break;
    default:
      return null;
  }
  return t;
}
function Cu(i) {
  this.selections.shapeWrappers.style("visibility", (e) => (e == null ? void 0 : e.placementOrder) >= i ? "hidden" : "visible");
}
const hn = (i) => i.id;
function dn(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function fn(i) {
  return i.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Iu() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), su.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], hn).join(
    (i) => i.append("rect").attr("class", "background stock").call((e) => dn.call(this, e)),
    (i) => i.call((e) => dn.call(this, e)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], hn).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((e) => fn.call(this, e)),
    (i) => i.call((e) => fn.call(this, e)),
    (i) => i.remove()
  );
}
function Qn(i) {
  return i.id;
}
function pn({ parent: i, near: e, far: t }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [i, e, t].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, Qn).join(
    (n) => n.append("rect").attr("class", "segment").call((r) => gn.call(this, r)),
    (n) => n.call((r) => gn.call(this, r)),
    (n) => n.remove()
  ), this.state.env === "development" && Lu.call(this, s), !this.settings.app && this.state.env === "development" && Du.call(this);
}
function gn(i) {
  return i.classed("offcut", (e) => e.offcut).classed("near", (e) => e.segmentType === "near").classed("far", (e) => e.segmentType === "far").classed("parent", (e, t) => e.id !== "root" && t === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Lu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, Qn).join(
    (e) => e.append("text").attr("class", "segment-text").call((t) => mn.call(this, t)),
    (e) => e.call((t) => mn.call(this, t)),
    (e) => e.remove()
  );
}
function mn(i) {
  return i.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").text((e) => Pu.call(this, e)).attr("dominant-baseline", "middle");
}
function Pu(i) {
  if (this.state.env !== "development" || !i || i != null && i.offcut) return null;
  const e = i.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${e} ${i.id}` : e;
}
function Du() {
  this.selections.segmentRectangles.on("mousedown", function(i, e) {
    console.log("segment", `[${(e == null ? void 0 : e.parentID) || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`);
  });
}
function er(i) {
  var n;
  const e = (n = i == null ? void 0 : i.guillotineData) == null ? void 0 : n.parentSegmentID;
  if (!this.props.segments.value.length) return !1;
  let t;
  if (e ? t = this.props.segments.value.find((r) => r.id === e) : t = this.props.segments.value.find((r) => r.segmentType === "root"), t === void 0) return !1;
  const s = t == null ? void 0 : t.children;
  return s != null && s.length ? {
    parent: t,
    children: s
  } : !1;
}
const { currentCutIndex: tr } = gs();
function Tu() {
  this.props.containerWidth && (this.selections.cutLabelGroup && this.selections.cutLabelGroup.remove(), this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (i, e) => e).join(
    (i) => i.append("line").attr("class", "cut").call((e) => vn.call(this, e)),
    (i) => i.call((e) => vn.call(this, e)),
    (i) => i.remove()
  ), this.selections.cutLabelGroup = this.selections.cutGroup.append("g").attr("class", "label-group"), this.selections.cutLabelGroup.selectAll("*").remove(), this.selections.cutBackgrounds = this.selections.cutLabelGroup.selectAll("circle.label-background").data(this.props.cuts.value, (i, e) => e).join(
    (i) => i.append("circle").attr("class", "label-background").call((e) => yn.call(this, e)),
    (i) => i.call((e) => yn.call(this, e)),
    (i) => i.remove()
  ), this.selections.cutLabels = this.selections.cutLabelGroup.selectAll("text.cut-label").data(this.props.cuts.value, (i, e) => e).join(
    (i) => i.append("text").attr("class", "cut-label").call((e) => bn.call(this, e)),
    (i) => i.call((e) => bn.call(this, e)),
    (i) => i.remove()
  ), nr.call(this));
}
function vn(i) {
  return i.attr("stroke-width", (e) => {
    const t = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return t < 1 ? 1 : Math.ceil(t);
  }).attr("x1", (e) => this.scales.xPositionScale(e.getVisCoords("x1"))).attr("x2", (e) => this.scales.xPositionScale(e.getVisCoords("x2"))).attr("y1", (e) => this.scales.yPositionScale(e.getVisCoords("y1"))).attr("y2", (e) => this.scales.yPositionScale(e.getVisCoords("y2"))).classed("trim", (e) => e.isTrim).classed("head", (e) => e.isHead);
}
function yn(i) {
  return i.attr("cx", (e) => {
    const t = this.scales.xPositionScale(e.getVisCoords("x1")), s = this.scales.xPositionScale(e.getVisCoords("x2"));
    return t + (s - t) / 2;
  }).attr("cy", (e) => {
    const t = this.scales.yPositionScale(e.getVisCoords("y1")), s = this.scales.yPositionScale(e.getVisCoords("y2"));
    return t + (s - t) / 2;
  }).attr("r", 8).attr("fill", "black");
}
function bn(i) {
  return i.attr("x", (e) => {
    const t = this.scales.xPositionScale(e.getVisCoords("x1")), s = this.scales.xPositionScale(e.getVisCoords("x2"));
    return t + (s - t) / 2;
  }).attr("y", (e) => {
    const t = this.scales.yPositionScale(e.getVisCoords("y1")), s = this.scales.yPositionScale(e.getVisCoords("y2"));
    return t + (s - t) / 2 - 0.5;
  }).attr("text-anchor", "middle").attr("dominant-baseline", "central").attr("fill", "white").attr("dy", "0.1em").text((e) => {
    var t;
    return typeof ((t = e.guillotineData) == null ? void 0 : t.order) == "number" ? e.guillotineData.order + 1 : "-";
  });
}
function ir(i, e, t) {
  return i.guillotineData.parentSegmentID === e && t && i.guillotineData.segmentCutOrder < t;
}
function sr(i, e) {
  var t;
  return ((t = i.guillotineData) == null ? void 0 : t.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === e : !1;
}
function $u(i, e, t, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[t] == "number" && r.guillotineData[t] <= i.guillotineData[t] || !s && r.guillotineData.parentSegmentID === e ? "visible" : "hidden"), tr.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[t] == "number" && r.guillotineData[t] <= i.guillotineData[t] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[t] == "number" && r.guillotineData[t] <= i.guillotineData[t] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[t] === i.guillotineData[t]), this.selections.cutLines.classed("ptx-dummy", (r) => {
    var o;
    return (o = r == null ? void 0 : r.ptxData) == null ? void 0 : o.isDummy;
  }), s || Ou.call(this, i, e);
}
function Au(i, e, t, s, n) {
  this.selections.cutLines.style("visibility", (o, l) => l <= e ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o, l) => l <= e ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o, l) => l <= e ? "visible" : "hidden"));
  let r;
  if ((i == null ? void 0 : i.dimension) === "l" ? r = [
    [0 + (t.y1 ?? 0), i.y1 - n],
    [i.y1 + n, i.stock.w - (t != null && t.y2 ? t.y2 : 0)]
  ] : (i == null ? void 0 : i.dimension) === "w" && (r = [
    [0 + (t.x1 ?? 0), i.x1 - n],
    [i.x1 + n, i.stock.l - (t != null && t.x2 ? t.x2 : 0)]
  ]), r != null && r.length) {
    const o = [
      r[0][1] - r[0][0],
      r[1][1] - r[1][0]
    ];
    this.state.device === "desktop" && !i.isTrim && Zn.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function nr() {
  var i, e;
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), (i = this.selections) != null && i.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), (e = this.selections) != null && e.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const s = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(s));
  }), yi.call(this), Xi.call(this);
}
function Ou(i, e) {
  var p, S, h, m;
  const t = (p = i == null ? void 0 : i.guillotineData) == null ? void 0 : p.segmentCutOrder;
  if (t == null) return;
  this.selections.cutLines.classed("completed", (w) => ir(w, e, t)), this.selections.cutLines.classed("inside-segment", (w) => sr(w, e));
  const s = er.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = rr(i, r);
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
  ], a = [(S = i == null ? void 0 : i.distances) == null ? void 0 : S.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      i.x1 + u,
      n.x + n.l
    ]
  ], a = [(h = i == null ? void 0 : i.distances) == null ? void 0 : h.left, (m = i == null ? void 0 : i.distances) == null ? void 0 : m.right]), this.state.device === "desktop" && !i.isTrim && a && Zn.call(this, l, a, f);
}
function Eu(i = null, e = "") {
  var h, m, w, F;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const W = this.props.cuts.value.filter((J) => J.isTrim);
    i = i + W.length, i - W.length >= this.props.cuts.value.length - W.length && (tr.value = this.props.cuts.value.length - W.length - 1);
  }
  const t = this.props.cuts.value[i];
  if (!t) return;
  if (yi.call(this), Xi.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const W = this.selections.cutLines.nodes()[i].parentElement;
    if (!W) return;
    _e(W).raise();
  }
  const s = (h = t.guillotineData) == null ? void 0 : h.parentSegmentID, n = this.getHalfBladeWidth(t.stock), r = t.dimension === "l" ? "y" : "x", o = (m = t == null ? void 0 : t.stock) == null ? void 0 : m.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((w = t == null ? void 0 : t.stock) == null ? void 0 : w.cutType) && s !== null && typeof s < "u" ? $u.call(this, t, s, l, e) : Au.call(this, t, i, o, r, n), Mu.call(this, t, i, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const a = er.call(this, t);
  if (a === !1) return;
  const { parent: u, children: f } = a;
  if (!((F = t == null ? void 0 : t.guillotineData) != null && F.parentSegmentID))
    return pn.call(this, { parent: u });
  const { near: p, far: S } = rr(t, f);
  pn.call(this, { parent: u, near: p, far: S });
}
function rr(i, e) {
  const t = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = e.find((o) => o.segmentType === "near" && o[t] + o[s] === i[t + "1"] - i.halfBladeWidth()), r = e.find((o) => o.segmentType === "far" && o[t] === i[t + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function Mu(i, e, t) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (ir(s, t, l) || sr(s, t)) && (o += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Ru(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Fu(i, e) {
  return ti(i, e);
}
class _u {
  constructor(e) {
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
    c(this, "formatNumber", (e) => x({
      v: e,
      o: this.numberConfig
    }).toString());
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = _e(e.elementID), this.selections.el === null)) return;
    const t = this.selections.el.node();
    t !== null && (this.selections.htmlEl = t, this.scales = {
      xScale: rt(),
      yScale: rt(),
      yPositionScale: rt(),
      xPositionScale: rt(),
      yAxisScale: rt(),
      measurementScale: rt(),
      shapeColorScale: fi(),
      scoreColorScale: fi()
    }, this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    }, this.state = {
      env: "production",
      device: "desktop",
      debug: null,
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
    }, this.props = e.props, this.settings = e.settings, this.options = e.options, this.callbacks = e.callbacks, this.numberConfig = e.numberConfig, this.initColors(e), this.initNumbers(e), this.init());
  }
  initColors(e) {
    const t = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, s = (n, r) => dt("#" + (Ru(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(t).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = e.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = fi([
      this.config.colors.partA,
      this.config.colors.partB
    ]);
  }
  initNumbers(e) {
    this.numberConfig = e.numberConfig, (this.numberConfig.decimalPlaces === null || this.numberConfig.decimalPlaces === void 0 || isNaN(this.numberConfig.decimalPlaces)) && (this.numberConfig.decimalPlaces = 2), (this.numberConfig.fractionRoundTo === null || this.numberConfig.fractionRoundTo === void 0 || isNaN(this.numberConfig.fractionRoundTo)) && (this.numberConfig.fractionRoundTo = 0);
  }
  init() {
    this.state.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    const e = this.selections.htmlEl.querySelector("svg");
    if (e === null) {
      const t = this.selections.el.append("svg").attr("class", "vis");
      if (t === null) return;
      t.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), t.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), t.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = t;
    } else
      this.selections.svgCanvas = _e(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, t, s) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), t && (this.numberConfig.decimalPlaces = t), s && (this.numberConfig.fractionRoundTo = s));
  }
  trimNameToFit(e, t) {
    function s(n, r, o) {
      const l = o[r], a = _e(l);
      a.text(n.name);
      let u = a.text();
      const f = a.node();
      if (!f) return;
      let p = f.getComputedTextLength();
      const S = this.getWidthAttribute(n) - 20;
      for (; p > S && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), p = a.node().getComputedTextLength();
    }
    e.each(s.bind(t));
  }
  setDevice() {
    if (!(!this.selections.htmlEl || this.selections.htmlEl.style.display === "none") && this.selections.htmlEl.offsetWidth) {
      if (this.props.containerWidth.value === 0) return !1;
      this.settings.main ? this.props.containerWidth.value <= this.state.mobileBreakpoint || this.settings.app ? (this.state.device = "mobile", this.state.padding = 0) : (this.state.device = "desktop", this.state.padding = 50) : this.state.padding = 0, this.state.w = this.props.containerWidth.value;
    }
  }
  // find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const e = this.props.stockList.value.filter((n) => n.used);
    if (!e) return [null, null];
    const t = e.reduce((n, r) => n.l > r.l ? n : r), s = e.reduce((n, r) => n.w > r.w ? n : r);
    return [t, s];
  }
  debounce(e, t, s = !1) {
    let n;
    return (...r) => new Promise((o) => {
      const l = () => {
        n = null, s || o(e.apply(this, r));
      };
      clearTimeout(n), s && !n && o(e.apply(this, r)), n = setTimeout(l, t);
    });
  }
  requiresStretch(e, t = null) {
    return e ? (t === null && (t = e.w / e.l), t < 0.15) : !1;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value || !this.selections.htmlEl) return;
    const e = this.props.stock.value, t = this.props.containerWidth.value;
    if (t <= 0) return;
    const s = t - 2 * this.state.padding;
    if (s <= 0) return;
    this.scales.xScale.domain([0, e.l]), this.scales.yScale.domain([0, e.w]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, e.w] : [e.w, 0]), this.scales.xPositionScale.domain([0, e.l]), this.scales.yPositionScale.domain([0, e.w]), this.scales.measurementScale.domain([0, e.l]);
    const n = e.l > 0 ? s * e.w / e.l : 0;
    this.state.w = s + 2 * this.state.padding, this.state.h = n + 2 * this.state.padding;
    const r = e.l > 0 ? e.w / e.l : 0;
    this.state.stretched = !1, this.requiresStretch(e, r) && this.options.enableStretch && (this.state.h = t * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
      this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]
    ), this.scales.yPositionScale.range(
      this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]
      // Use calculated h
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("width", this.state.w + "px"), this.selections.el.style("height", this.state.h + "px")) : (this.selections.el.style("width", null), this.selections.el.style("height", null));
  }
  //--------------------------------------------------------
  // FIND
  //--------------------------------------------------------
  findShapeElement(e) {
    const t = this.selections.shapeWrappers.filter((s) => s.id === e);
    return t.empty() ? null : t.node();
  }
  findShape(e) {
    const t = this.findShapeElement.call(this, e);
    t && this.selectShape.call(this, t);
  }
  selectShape(e) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => bi.call(this, s));
    const t = _e(e).select("rect");
    if (t) {
      t.classed("selected", !0), t.style("fill", this.config.colors.partSelected.toString());
      const s = _e(e).datum();
      this.callbacks.onShapeSelect(s);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    fu.call(this);
  }
  drawStock() {
    Iu.call(this);
  }
  drawCuts() {
    Tu.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(e) {
    return e != null && e.l ? this.scales.xScale(e.l) - this.state.padding : 0;
  }
  getHeightAttribute(e) {
    return e != null && e.w ? this.scales.yScale(e.w) - this.state.padding : 0;
  }
  getRectangleCoordinate(e, t, s, n) {
    let r;
    if (t === "x") {
      let o;
      switch (s) {
        case "center":
          o = this.scales.xPositionScale(e.x + e.l / 2), n && (o += n);
          break;
        case "right":
          o = this.scales.xPositionScale(e.x + e.l), n && (o -= n);
          break;
        case "left":
        default:
          o = this.scales.xPositionScale(this.settings.flipX ? e.x - e.l : e.x), n && (o -= n);
      }
      r = o;
    } else if (t === "y") {
      let o;
      switch (s) {
        case "center":
          o = this.scales.yPositionScale(e.y + e.w / 2), n && (o += n);
          break;
        case "bottom":
          o = this.scales.yPositionScale(this.settings.flipY ? e.y + e.w : e.y), n && (o += n);
          break;
        case "top":
        default:
          o = this.scales.yPositionScale(this.settings.flipY ? e.y : e.y + e.w), n && (o -= n);
      }
      r = o;
    }
    return r;
  }
  // Blade Width Methods
  getBladeWidth(e = null) {
    return k(e) && e !== null ? e.getBladeWidth() : 0;
  }
  getHalfBladeWidth(e = null) {
    const t = this.getBladeWidth(e);
    return t !== void 0 && t > 0 ? t / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), yi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), lu.call(this);
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
  collision(e, t, s) {
    if (e.id === t.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      e.x < t.x + t.l + this.getBladeWidth(s) && // 2 right
      e.x + e.l + this.getBladeWidth(s) > t.x && // 3 bottom
      e.y < t.y + t.w + this.getBladeWidth(s) && // 4 top
      e.y + e.w + this.getBladeWidth(s) > t.y
    );
  }
  // TOGGLE
  //--------------------------------------------------------
  toggleShapes(e = !1) {
    this.selections.shapeGroup && (e ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none")));
  }
  toggleSegments(e = !0) {
    this.selections.segmentGroup && (e ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none"));
  }
  toggleCuts(e = !0) {
    this.selections.cutGroup && (e ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none"));
  }
  // Padding Helper
  addPadding(e) {
    return e + this.state.padding;
  }
  // Text Visibility Helpers
  isTextHidden(e, t, s) {
    const n = s[t];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(e.l), l = this.scales.yScale(e.w);
    return r.width >= o || r.height >= l - this.state.padding;
  }
  isNameHidden(e, t, s) {
    const n = s[t];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return r.width >= o || l < 40;
  }
  isLengthHidden(e, t, s) {
    var a, u;
    if (this.settings.app) {
      const f = this.scales.measurementScale(e.l), p = this.scales.measurementScale(e.w);
      return f < 50 || p < 50;
    }
    if (((u = (a = e == null ? void 0 : e.stock) == null ? void 0 : a.saw) == null ? void 0 : u.stockType) === "linear") return !1;
    const n = s[t];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return r.width >= o || l < 30;
  }
  isWidthHidden(e, t, s) {
    if (this.settings.app)
      return this.scales.measurementScale(e.l) < 50 || this.scales.measurementScale(e.w) < 50;
    const r = s[t].getBBox();
    return this.scales.measurementScale(e.l) < 30 || r.height >= this.scales.measurementScale(e.w);
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
    var e, t;
    (e = this == null ? void 0 : this.selections) != null && e.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => bi.call(this, s)), (t = this == null ? void 0 : this.selections) != null && t.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    yi.call(this);
  }
  updateShapeVisibility() {
    Cu.call(this);
  }
  drawPositions(e) {
    uu.call(this, e);
  }
  showCut(e) {
    Eu.call(this, e);
  }
  resetCuts() {
    nr.call(this);
  }
}
const qu = ["id"], Bu = /* @__PURE__ */ Me({
  __name: "Diagram",
  props: {
    elementId: {},
    app: { type: Boolean },
    embed: { type: Boolean },
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: !0 },
    stockId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: !1 },
    enableStretch: { type: Boolean, default: !0 },
    moveMode: { default: () => H(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "part-click"],
  setup(i, { expose: e, emit: t }) {
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
      getCuts: S
    } = gs(), h = i, m = t, w = (ie) => {
      m("part-click", ie);
    }, F = (ie) => {
      m("shape-colour-update", ie);
    }, W = (ie) => {
      ie != null && ie.id && m("shape-select", ie.id.toString());
    }, J = (ie) => {
      ie && m("add-to-parts-bin", ie);
    }, Q = (ie, Xe) => {
      ie && m("move-shape", ie, Xe);
    }, X = H(0), ce = H(0), pe = H(null);
    let T, v = H(!1);
    gt(() => O());
    const D = Z(() => ({
      format: h.numberFormat,
      decimals: h.decimalPlaces
    })), K = Z(() => h.stockId ? u(h.stockId) : n.value), A = Z(() => h.stockId ? f(h.stockId) : r.value), N = Z(() => h.main ? h.stockId ? S(h.stockId) : o.value : []), U = Z(() => h.main ? h.stockId ? p(h.stockId) : l.value : []);
    Fr(pe, (ie) => {
      const Xe = ie[0], { width: et } = Xe.contentRect;
      et > 0 && (X.value = et);
    }), _r(
      X,
      (ie) => {
        T && (ie <= 0 || (T.setDevice(), T.resetShapeAxes(), T.drawAll(), a.value !== null && (T.toggleSegments(!0), T.showCut(a.value))));
      },
      { throttle: 100 }
    );
    let ee = !1;
    Pe(() => K.value, (ie) => {
      ie && (X.value <= 0 || (ee = !0, T.setDevice(), T.resetCuts(), T.removeSegments(), T.drawStock(), T.drawShapes(), T.drawCuts(), it(() => {
        ee = !1;
      })));
    }, { immediate: !1 }), Pe(() => A.value, (ie) => {
      ee || ie && (X.value <= 0 || (T.setDevice(), T.drawShapes()));
    }, { immediate: !1, deep: !0 }), h.main && (Pe(() => N.value, () => {
      ee || X.value <= 0 || T.drawCuts();
    }, { immediate: !1, deep: !0 }), Pe(a, () => {
      a.value !== null && (X.value <= 0 || (T.toggleSegments(!0), T.showCut(a.value)));
    }, { immediate: !1 }), Pe(D, (ie) => {
      T.updateNumberFormat(ie.format, ie.decimals, null);
    }, { immediate: !1 }));
    const O = () => {
      const ie = {
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
        settings: {
          main: h.main,
          app: h.app,
          embed: h.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: ce,
          containerWidth: X,
          stock: K,
          shapes: A,
          cuts: N,
          segments: U,
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
          onShapeColourUpdate: F,
          onShapeSelect: W,
          onAddToPartsBin: J,
          onMoveShape: Q,
          onPartClick: w
        }
      };
      T = new _u(ie), v.value = !0;
    };
    return e({
      loaded: v,
      toggleShapes: (ie = !1) => {
        T && T.toggleShapes(ie);
      },
      toggleCuts: (ie = !1) => {
        T && T.toggleCuts(ie);
      },
      toggleSegments: (ie = !1) => {
        T && T.toggleSegments(ie);
      },
      drawShapes: () => {
        T && T.drawShapes();
      },
      drawStock: () => {
        T && T.drawStock();
      },
      drawPositions: (ie) => {
        T && T.drawPositions(ie);
      },
      resetPositions: () => {
        T && T.removePositions();
      },
      findShape: (ie) => {
        T && T.findShape(ie);
      },
      clearSelection: () => {
        T && T.clearSelection();
      },
      resetCuts: () => {
        T && (T.toggleSegments(!1), T.resetCuts());
      },
      showCut: (ie) => {
        T && (T.toggleSegments(!0), T.showCut(ie));
      },
      requiresStretch: (ie) => {
        T && T.requiresStretch(ie);
      }
    }), (ie, Xe) => (y(), I("div", {
      id: ie.elementId,
      ref_key: "diagramContainerRef",
      ref: pe,
      class: "diagram-container"
    }, null, 8, qu));
  }
}), Hu = {
  key: 0,
  class: "debug"
}, Gu = { key: 2 }, Wu = {
  key: 0,
  class: "row table-heading"
}, Nu = {
  key: 0,
  class: "cell center"
}, Uu = {
  key: 1,
  class: "cell delete"
}, ju = { class: "cell" }, zu = ["id", "disabled", "onClick"], Vu = {
  key: 0,
  class: "cell center"
}, Yu = ["onClick"], Xu = {
  key: 1,
  class: "cell"
}, Ku = ["aria-label", "onClick"], Zu = { class: "button-wrapper main" }, Ju = ["aria-label"], Qu = ["aria-label", "disabled"], ec = ["aria-label"], tc = { id: "part-count" }, ic = {
  key: 3,
  id: "messages"
}, sc = {
  key: 0,
  class: "heading"
}, nc = { class: "content" }, rc = {
  key: 4,
  id: "progress"
}, oc = { id: "diagram-wrapper" }, lc = {
  key: 0,
  id: "stack"
}, ac = !1, uc = /* @__PURE__ */ Me({
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
  setup(i, { expose: e, emit: t }) {
    const s = Tt(() => Promise.resolve().then(() => Sc)), n = Tt(() => Promise.resolve().then(() => kc)), r = Tt(() => Promise.resolve().then(() => Nc)), o = Tt(() => Promise.resolve().then(() => Xc)), l = Tt(() => Promise.resolve().then(() => Ki)), { t: a } = ji(["main", "errors"]), { inputs: u, totalInputShapes: f, getShapeGrainSummary: p, updateNumberFormat: S, validateInputStock: h } = kn(), { r: m, updateFromResult: w, stackedStock: F, uniqueAddedShapes: W, uniqueUsedStock: J, activeStockId: Q, activeStock: X, setActiveStockId: ce } = gs(), { progress: pe, reset: T } = Kr(), { addNotice: v } = ps(), { tip: D, update: K, hide: A } = Yr(), N = i, U = t, ee = "production", O = H((navigator == null ? void 0 : navigator.language) || "en-US"), R = qr(null), V = window.location.hostname, se = H(!1), re = H(!0), ve = Br("Checkout/currentURL", window.location.href), Ie = us(), Te = H([]), xt = H(!1), M = H(!1), He = H(!1), li = H(!1), zt = H(!1), ie = H(Rl()), Xe = H(!1), { socket: et } = Xr({
      refs: {
        connected: se,
        thinking: He
      },
      callbacks: {
        onResult(d) {
          var L, q, j, oe, le;
          const g = d.result;
          if (w(g), !((L = g.shapeList) != null && L.length) || !((q = g.stockList) != null && q.length)) {
            T(), v({
              type: "error",
              message: Oe(a("no_result")),
              additional: [Oe(a("check_inputs"))]
            }), He.value = !1;
            return;
          }
          const b = {
            jobId: d.jobId,
            metadata: m.metadata.value,
            parts: W.value.map((_) => {
              var Y, de, B;
              return {
                l: _.l,
                w: _.w,
                t: _ == null ? void 0 : _.t,
                material: _.material,
                orientationLock: _.orientationLock,
                q: (de = (Y = m.metadata.value) == null ? void 0 : Y.addedPartTally) == null ? void 0 : de[_.parentID],
                name: _.name,
                banding: _.banding,
                finish: _.finish,
                customData: _.customData,
                stockId: ((B = _ == null ? void 0 : _.stock) == null ? void 0 : B.id) || (_ == null ? void 0 : _.stockId)
              };
            }),
            stock: J.value.map((_) => {
              var Y, de;
              return {
                id: _.id,
                name: _ == null ? void 0 : _.name,
                l: _.l,
                w: _.w,
                t: _ == null ? void 0 : _.t,
                material: _.material,
                q: (de = (Y = m.metadata.value) == null ? void 0 : Y.usedStockTally) == null ? void 0 : de[_.parentID],
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
                const Y = { ..._ };
                return delete Y.listId, Y;
              })
            }
          };
          if ((le = (oe = (j = m == null ? void 0 : m.metadata) == null ? void 0 : j.value) == null ? void 0 : oe.unplacedParts) != null && le.length) {
            const _ = m.metadata.value.unplacedParts.map((Y) => Y.id).join();
            v({
              type: "warning",
              message: Oe(a("parts_not_fit")) + ": " + _
            });
          }
          U("result", b), He.value = !1;
        },
        onUser(d) {
          R.value = d;
        },
        onConnectError(d) {
          v({
            type: "error",
            message: Oe(a("cannot_connect")),
            additional: [d]
          });
        },
        onError(d) {
          v({
            type: "error",
            message: Oe(a("error_occurred")),
            additional: [d]
          });
        }
      }
    }), tt = {
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
    }, E = bt(tt), $e = bt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Ae = H(null), ai = H(!1), De = H(""), mt = H(""), Ne = bt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), ze = H([]), Ge = H([]), Rt = H([]), Vt = H(!1), Ke = bt({
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
    }), be = bt({
      labels: [],
      pricing: {},
      options: {},
      keys: St
    }), Re = bt({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), ui = bt({
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
    }), Yt = H([]), Si = Z(() => {
      var g;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (g = ze.value[0]) == null ? void 0 : g.name,
          options: ze.value.map((b) => ({
            value: b.name,
            label: b.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: E.numberFormat === "decimal" ? "number" : "string",
          label: "thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "length",
          min: (E == null ? void 0 : E.minDimension) ?? 0,
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
          min: (E == null ? void 0 : E.minDimension) ?? 0,
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
      ], ...Yt.value];
    }), kt = Z(() => ua(
      ui,
      Si.value,
      "parts",
      $e.stockType,
      E.fieldOrder
    )), Ct = Z(() => {
      let d = kt.value.length + 1;
      return u.inputShapes.value.length > 1 && d++, d;
    }), P = Z(() => {
      const d = {
        id: "34px",
        del: "30px"
      }, g = [];
      for (const b of kt.value)
        b.id !== "trim" && g.push(b.w ?? "minmax(20px, 1fr)");
      return g.unshift(d.id), u.inputShapes.value.length > 1 && g.push(d.del), g.join(" ");
    }), z = Z(() => ({
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
    })), ae = Z(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), we = Z(() => {
      var d, g;
      return R.value ? !(R.value && ((g = (d = R.value) == null ? void 0 : d.api) != null && g.whiteLabel)) : !0;
    }), Ue = {
      stockType: (d) => {
        const g = ["sheet", "linear", "roll"];
        g.includes(d) || console.warn(`${d} is not a valid stockType, expected ${g.join("|")}`), $e.stockType = d, d === "linear" && ($e.cutType = null, $e.cutPreference = null);
      },
      stockSelection: (d) => {
        const g = ["efficiency", "smallest"];
        d && !g.includes(d) ? console.warn(`${d} is not a valid stockSelection, expected ${g.join("|")}`) : $e.options.stockSelection = d;
      },
      minSpacing: (d) => {
        $e.options.minSpacing = d;
      },
      stackHeight: (d) => {
        $e.stackHeight = d;
      },
      cutPreference: (d) => {
        const g = ["efficiency", "length", "width", "beam"];
        if (g.includes(d)) {
          const { cutType: b, cutPreference: L } = is(d);
          $e.cutType = b, $e.cutPreference = L;
        } else
          console.warn(`SmartCut - cut preference ${d || "N/A"} is not one of ${g.join("|")}`);
      },
      guillotineOptions: (d) => {
        $e.guillotineOptions = d;
      },
      bladeWidth: (d) => {
        d >= 0 ? $e.bladeWidth = d : console.warn(`SmartCut - you provided an incorrect blade width of: ${d}`);
      },
      maxParts: (d) => {
        E.maxParts = d;
      },
      locale: (d) => {
        O.value = d.replace(/_/g, "-");
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
        for (const b in tt.enable)
          b in d && (E.enable[b] = d[b]);
        for (const b in g)
          at(b, qt(d, [g[b]]) ?? tt.enable[g[b]]);
        zt.value = qt(d, ["csvImport"]) ?? tt.enable.csvImport;
      },
      colors: (d) => {
        for (const g in tt.colors)
          g in d && (E.colors[g] = d[g]);
      },
      orientationModel: (d) => {
        if (![0, 1, 2].includes(d)) {
          E.orientationModel = 0;
          return;
        }
        E.orientationModel = d;
      },
      numberFormat: (d) => {
        if (!["decimal", "fraction"].includes(d)) {
          E.numberFormat = "decimal";
          return;
        }
        E.numberFormat = d;
      },
      customFields: (d) => {
        if (!Array.isArray(d) || !(d != null && d.length)) return;
        const g = [];
        d.forEach((b, L) => {
          g.push(b), g[L].custom = !0;
          const q = je(b.id);
          g[L].id = q, g[L].fieldMap = "customData." + q, b.type === "checkbox" && (g[L].w = "32px"), b.type === "select" && (g[L].output = b.output ?? "string", g[L].options = b.options);
        }), Yt.value = g;
        for (const b of u.inputShapes.value)
          b.customData = d.reduce((L, q) => {
            const j = je(q.id);
            return L[j] = b.customData[j] || q.default || "", L;
          }, {});
      }
    }, Ve = (d) => {
      if (N.debug && U("log", ["checkout init...", d]), d != null && d.options) {
        const b = d.options;
        Zl(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((j) => {
          j in b || U("error", `${j} is a required option`);
        });
        const q = ["enable", "colors"];
        for (const j in b)
          q.includes(j) || (E[j] = b[j]), j in Ue && Ue[j](b[j]);
      }
      d.colors && "colors" in Ue && Ue.colors(d.colors), qs("banding", d), qs("finish", d), he(d), ar(d), M.value = !0, N.debug && U("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), it(() => {
        we.value && !fr() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Ft = (d, g) => {
      d && (d.orientationLock = g);
    }, at = (d, g = !1) => {
      la(ui, "parts", $e.stockType, d, g);
    }, je = (d) => d ? ro(d).toLowerCase() : null, st = (d, g, b, L) => {
      if (g.valid) {
        if (A(), b && L) {
          const q = b.issues.findIndex((j) => j.field.some((oe) => oe.length === L.length && oe.every((le, _) => le === L[_])));
          q !== -1 && b.issues.splice(q, 1);
        }
      } else
        K({
          referenceEl: d,
          show: !0,
          content: a(`fieldValidation.${g.message}`),
          type: "error"
        });
    }, he = (d) => {
      var g, b, L, q, j;
      if (qt(E, ["enable", "machining"]) && d != null && d.machining) {
        for (const oe in Ke)
          d.machining[oe] && (Ke[oe] = d.machining[oe]);
        if (["holes", "hingeHoles"].forEach((oe) => {
          var le, _;
          (le = d == null ? void 0 : d.machining) != null && le[oe] && (Ke[oe].enabled = (_ = d == null ? void 0 : d.machining) == null ? void 0 : _[oe].enabled);
        }), (L = (b = (g = d == null ? void 0 : d.machining) == null ? void 0 : g.corners) == null ? void 0 : b.types) != null && L.length && (Ke.corners.enabled = !0, Ke.corners.types = d.machining.corners.types), d.banding && ((j = (q = d == null ? void 0 : d.options) == null ? void 0 : q.enable) != null && j.banding)) {
          if (!be) return;
          Ke.banding = {
            enabled: !0
          }, be.options.length && (Ke.banding.options = be.options), be.labels.length && (Ke.banding.labels = be.labels), si(be.pricing) && (Ke.banding.pricing = be.pricing);
        }
      }
    }, It = (d = null) => {
      Ae.value = d, d && d.l && d.w ? Vt.value = !0 : alert("Please enter dimensions first");
    }, _t = () => {
      Vt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, $s = (d = []) => {
      if (Ge.value = [], Rt.value = [], at("t", !1), !!d.length) {
        for (const g of d)
          if (g != null && g.t)
            if (typeof g.t == "string" && g.t.includes(",")) {
              const b = As(g.t, !0);
              b.length === 2 ? (ur(b), at("t", !0), g.t = Ge.value[0]) : U("error", "bonded thickness found which does not have 2 options");
            } else Ge.value.includes(g.t) || Ge.value.push(g.t);
        Ge.value.length > 1 && at("t", !0);
      }
    }, or = (d) => {
      var q;
      if (!d) return { thicknesses: [], bondedThicknesses: [] };
      if (!((q = ze.value) != null && q.length))
        return {
          thicknesses: Ge.value,
          bondedThicknesses: []
        };
      if (!d.material) return { thicknesses: [], bondedThicknesses: [] };
      const g = ze.value.find((j) => j.name === d.material);
      if (!g) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...g.thicknesses], L = [];
      for (let j = 0; j < b.length; j++) {
        const oe = b[j], le = As(oe), _ = [];
        if (le.length) {
          for (const Y of le)
            b[j] = Y, _.push(j);
          j++;
        }
        _.length && L.push(_);
      }
      return {
        thicknesses: b,
        bondedThicknesses: L
      };
    }, lr = (d) => or(d).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), ar = (d) => {
      var g, b;
      if ((g = d == null ? void 0 : d.stock) != null && g.some((L) => L == null ? void 0 : L.material)) {
        ze.value = [], Ge.value = [], Rt.value = [];
        const L = /* @__PURE__ */ new Map();
        for (const q of d.stock) {
          if (!q.material) continue;
          const j = q.material.toUpperCase();
          L.has(j) || L.set(j, /* @__PURE__ */ new Set()), q.t != null && ((b = L.get(j)) == null || b.add(x({ v: q.t })));
        }
        ze.value = Array.from(L.entries()).map(([q, j]) => ({
          name: q,
          thicknesses: Array.from(j).sort((le, _) => le - _)
        })), ze.value.length > 1 && at("material", !0);
      } else
        $s(d.stock);
    }, ur = (d, g = null) => {
      if (!Array.isArray(d)) {
        U("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let L of d)
        E.numberFormat === "decimal" && (L = parseFloat(L)), Ge.value.push(L), g && g.thicknesses.push(L), b.push(Ge.value.length - 1);
      Rt.value.push(b);
    }, As = (d, g = !1) => {
      if (typeof d == "string" && d.includes(",")) {
        const b = d.split(",");
        return g ? b.map((L) => x({ v: L })) : b;
      }
      return [];
    }, cr = () => {
      Xe.value ? dr() : hr();
    }, hr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Xe.value = !0;
    }, dr = () => {
      document.exitFullscreen && document.exitFullscreen(), Xe.value = !1;
    }, fr = () => {
      var L, q;
      if ((q = (L = R.value) == null ? void 0 : L.api) != null && q.whiteLabel) return !0;
      let d = !0;
      const g = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [g, b].forEach((j, oe) => {
        if (!j) return d = !1;
        const le = window.getComputedStyle(j);
        if (le.display === "none" || le.display === "hidden" || le.opacity === "0" || le.color === "transparent" || le.position !== "relative" || oe === 1 && le.color !== "#4e4e4e" && le.color !== "rgb(78, 78, 78)")
          return d = !1;
      }), re.value = d, d;
    }, Os = (d, g, b, L, q) => {
      Ts(
        d,
        g,
        b,
        L,
        q,
        N.findExtrasPrice
      );
    }, Es = (d, g, b, L) => {
      Kn(
        d,
        g,
        b,
        L,
        g === "banding" ? wi : [],
        N.findExtrasPrice
      );
    }, xi = (d, g) => {
      const b = g === "banding" ? be == null ? void 0 : be.labels : Re == null ? void 0 : Re.labels;
      Yl(d, g, b);
      const L = Ps(g);
      if (d != null && d[L])
        for (const q in d[L]) {
          const j = Ui(d, g, q, N.findExtrasPrice);
          j === !1 && q && d[g][q] && new ne({
            item: d,
            field: [[g, q]],
            type: "error",
            message: Oe(a("option_not_available", { x: d[g][q], y: a(g) }))
          }), vi(d, g, q, !!j);
        }
    }, Ms = (d) => {
      const g = Object.keys(d);
      return Math.max(...g.map((L) => L.split("|").length));
    }, Rs = (d) => {
      const g = [], b = Object.keys(d), L = Ms(d);
      for (let q = L; q--; ) g.push(/* @__PURE__ */ new Set());
      for (const q of b)
        q.split("|").forEach((oe, le) => g[le].add(oe));
      for (let q = 0; q < L; q++)
        g[q] = Array.from(g[q]);
      return g;
    }, ki = (d, g = [], b) => {
      if (!d) return [];
      if (b > 0 && !g[b - 1]) return [];
      const L = /* @__PURE__ */ new Set();
      for (const q of Object.keys(d)) {
        const j = q.split("|");
        if (j.length > b) {
          let oe = !0;
          for (let le = 0; le < b; le++)
            if (g[le] && j[le] !== g[le]) {
              oe = !1;
              break;
            }
          oe && L.add(j[b]);
        }
      }
      return Array.from(L);
    }, Ci = (d, g, b) => Ui(
      d,
      g,
      b,
      N.findExtrasPrice
    ), pr = (d) => {
      const g = Te.value.findIndex((b) => b.shapeId === d.shapeId);
      g !== -1 ? Te.value[g] = d : Te.value.push(d), window.smartcutImages = Te.value;
    }, gr = (d) => {
      Te.value = Te.value.filter((g) => g.shapeId !== d), window.smartcutImages = Te.value;
    }, Fs = (d = 1) => {
      for (let g = d; g--; ) {
        let b;
        if (u.inputShapes.value.length > 0) {
          const L = u.inputShapes.value[u.inputShapes.value.length - 1];
          b = ci({
            material: L.material,
            t: L.t
          });
        } else
          b = ci();
        u.inputShapes.value.push(b);
      }
    }, mr = (d) => {
      var b;
      if (u.inputShapes.value.length === 1) return;
      const g = u.inputShapes.value[d].listId;
      u.inputShapes.value.splice(d, 1), ((b = Ae.value) == null ? void 0 : b.listId) === g && (Ae.value = null), T();
    }, ci = (d = {
      l: null,
      w: $e.stockType === "linear" ? ((g) => (g = u.inputStock.value[0]) == null ? void 0 : g.w)() : null,
      t: Ge.value.length ? Ge.value[0] : null,
      q: 1,
      material: ((b) => (b = ze.value) == null ? void 0 : b.length)() === 1 ? ze.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var q, j;
      d.id = (u.inputShapes.value.length + 1).toString();
      const L = new mi(d, E.numberFormat);
      return (q = be == null ? void 0 : be.labels) != null && q.length && xi(L, "banding"), (j = Re == null ? void 0 : Re.labels) != null && j.length && xi(L, "finish"), L;
    }, vr = (d) => {
      if (Ge.value.length)
        for (const g of d) {
          if (!g.t) return;
          const b = Ge.value.findIndex(
            (j) => x({ v: j }) === g.t
          ), L = Rt.value.find((j) => j.includes(b));
          if (!L) return;
          const q = Math.min(
            ...L.map((j) => Ge.value[j])
          );
          x({ v: g.t }) > q && (g.q = g.q * (x({ v: g.t }) / q), g.notes = `Bond to form ${g.t.valueOf()}`, g.t = q);
        }
    }, _s = () => {
      T(), ce(null), m.stockList.value = [], m.shapeList.value = [], m.cutList.value = [];
    }, Zi = () => {
      u.inputShapes.value.length = 0;
    }, yr = async () => {
      if (U("calculating"), He.value) return !1;
      He.value = !0, li.value = !1;
      const d = u.inputShapes.value.map((oe) => new mi(oe));
      vr(d);
      const { valid: g, saw: b, stockList: L, shapeList: q } = await zl({
        t: a,
        partTrim: E.partTrim,
        maxShapes: E.maxParts,
        orientationModel: E.orientationModel,
        sawData: $e,
        inputShapes: d,
        onLimit: () => {
          v({
            type: "error",
            message: a("max_parts") + " " + E.maxParts
          });
        }
      });
      if (!g) {
        U("validation-error"), He.value = !1;
        return;
      }
      _s(), N.debug && console.log(
        "SmartCut - calculating",
        "stock",
        L.map((oe) => oe.dimensions),
        "parts",
        q.map((oe) => oe.dimensions)
      );
      const j = {
        inputs: {
          parts: d,
          stock: u.inputStock.value,
          saw: b
        },
        saw: b,
        shapeList: q,
        stockList: L,
        enableEvo: !0,
        domain: V
      };
      await et.connect(), et.emit("calculate", j);
    }, qs = (d, g) => {
      var de;
      if (at(d, !1), !d || !g || !(g != null && g[d]) || !qt(E, ["enable", d])) return;
      const b = [d, "pricing"];
      if (!Ks(g, b)) {
        U("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const L = qt(g, b);
      if (typeof L != "object") {
        U("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!si(L)) {
        U("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const q = Object.keys(L), j = Object.values(L);
      if (!q.length) {
        U("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const oe = /,/;
      for (const B of q)
        if (oe.test(B)) {
          U("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (j.some((B) => isNaN(B))) {
        U("error", `${b} values must be a number`);
        return;
      }
      const le = Ms(L), _ = [d, "labels"];
      let Y = [];
      if (Ks(g, _))
        Y = qt(g, _);
      else {
        U("error", `${_.join(".")} not found`);
        return;
      }
      if (!Y) {
        U("error", `${_.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Y)) {
        U("error", `${_.join(".")} data must be an array`);
        return;
      }
      if (!(Y != null && Y.length)) {
        U("error", `if provided, ${_.join(".")} data must contain values`);
        return;
      }
      if (Y.length !== le) {
        U("error", `${_.join(".")} length (${Y.length}) must match the number of levels in ${b.join(".")} (${le})`);
        return;
      }
      switch (d) {
        case "banding":
          be.labels = Y, be.pricing = L, be.options = Rs(L);
          break;
        case "finish":
          Re.labels = Y, Re.pricing = L, Re.options = Rs(L);
          break;
      }
      if (at(d, !0), !!((de = u.inputShapes.value) != null && de.length))
        for (const B of u.inputShapes.value)
          xi(B, d);
    }, Ii = (d, g) => {
      if (!g) return;
      d !== "info" && Object.keys(Ne).forEach((L) => {
        L !== d && L !== "info" && (Ne[L] = null);
      });
      const b = u.inputShapes.value.indexOf(g);
      Ne[d] === b ? (Ae.value = null, Ne[d] = null) : (Ae.value = g, Ne[d] = b);
    }, Bs = (d) => {
      if (U("log", ["load event received"]), !M.value) {
        U("log", ["load event received"]);
        return;
      }
      br(d.detail);
    }, br = (d) => {
      var L, q, j;
      if (U("log", ["loading parts..."]), !d || !((q = (L = d == null ? void 0 : d.inputs) == null ? void 0 : L.parts) != null && q.length)) {
        U("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let g = 0;
      for (const oe of d.inputs.parts) {
        const le = ci(oe);
        le ? (u.inputShapes.value.push(le), (j = le.issues) != null && j.length && U("log", [`SmartCut - issues found while importing part at index ${g}`, le.issues])) : U("log", [`SmartCut - error loading part at index ${g}`, oe]), g++;
      }
      u.inputShapes.value.flatMap((oe) => Dt(oe.issues)).length && v({
        type: "error",
        message: Oe(a("issues_found"))
      }), U("log", [`loaded ${u.inputShapes.value.length} parts`]);
    }, wr = (d) => {
      u.inputShapes.value.length = 0, it(() => {
        var g, b;
        for (const L of d)
          L.t = ((b = (g = u.inputStock.value) == null ? void 0 : g[0]) == null ? void 0 : b.t) ?? null, u.inputShapes.value.push(ci(L));
      });
    };
    Pe(() => N.stock, (d) => {
      if (_s(), Array.isArray(d) || console.warn("SmartCut - stock must be passed as an array"), !!(d != null && d.length)) {
        u.inputStock.value.length = 0, ze.value.length || $s(d);
        for (const g of d) {
          const b = new xs({
            ...g,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, E.numberFormat);
          u.inputStock.value.push(b);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? it(() => {
            u.inputShapes.value.forEach((b) => {
              if (b.material) {
                const L = ze.value.find((q) => q.name === b.material);
                L && (L.thicknesses.includes(x({ v: b.t })) || (b.t = x({ v: L.thicknesses[0] })));
              } else b.t || (b.t = x({ v: u.inputStock.value[0].t }));
            });
          }) : N.inputType !== "formula" && it(() => Fs(1));
          const g = h($e);
          g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), v({
            type: "error",
            message: Oe(a("stock_issue")),
            additional: g.map((b) => a(b.message))
          }));
        }
      }
    }, { immediate: !0 }), Pe(u.inputShapes, (d) => {
      U("inputs-changed"), d.forEach((g) => {
        var L;
        $e.stockType === "linear" && (g.w = (L = u.inputShapes.value[0]) == null ? void 0 : L.w);
        const b = ze.value.find((q) => q.name === g.material);
        b && (b.thicknesses.includes(x({ v: g.t })) || (g.t = x({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), Pe(() => E.numberFormat, (d) => {
      S(d);
    }), gt(async () => {
      if (xt.value) return;
      const d = new URL(window.location.href), g = d.searchParams.toString(), b = d.origin + d.pathname + (g ? `?${g}` : "");
      ve.value !== b && Zi(), ve.value = b, O.value = E.locale, await et.connect(), et.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Bs), xt.value = !0, N.debug && U("log", [
        "ready...",
        "fields:",
        kt.value.map((L) => L.id)
      ]);
    });
    const Sr = () => {
      et && et.disconnect();
    };
    return ds(() => {
      window.removeEventListener("smartcut/load", Bs), Sr(), delete window.smartcutCheckout;
    }), e({
      init: Ve,
      clear: Zi,
      getAvailablePricingOptions: ki,
      getExtrasPrice: Ci,
      formatPrice: N.formatPrice,
      findExtrasPrice: N.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: xi,
      createInputShape: ci
    }), (d, g) => {
      var L, q, j, oe, le, _;
      const b = Wt("font-awesome-icon");
      return y(), I(xe, null, [
        ye(C(s), {
          content: C(D).content,
          type: C(D).type,
          show: C(D).show,
          "reference-el": C(D).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        C(ee) === "development" && ac ? (y(), I("div", Hu, [
          g[5] || (g[5] = $("div", null, "Developer information", -1)),
          $("div", null, te(E.enable.focus), 1),
          ye(C(l), {
            data: [E],
            paths: ["options"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        Vt.value && ((L = Ae.value) != null && L.machining) ? (y(), ge(C(r), {
          key: 1,
          shape: Ae.value,
          "onUpdate:shape": g[0] || (g[0] = (Y) => Ae.value = Y),
          translate: !0,
          options: Ke,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": Ci,
          "get-available-pricing-options": ki,
          "format-price": i.formatPrice,
          onClose: _t
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : G("", !0),
        M.value ? G("", !0) : (y(), I("div", Gu, [
          ye(en, {
            size: 50,
            "show-number": !1
          })
        ])),
        M.value ? (y(), I("div", {
          key: 3,
          id: "smartcut-checkout",
          class: Ce({ fullscreen: Xe.value })
        }, [
          ie.value && !i.readonly ? (y(), I("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: g[1] || (g[1] = (Y) => cr())
          }, [
            ye(b, { icon: ["fass", "expand"] }),
            Qt(" " + te(C(Oe)(C(a)("full_screen"))), 1)
          ])) : G("", !0),
          we.value ? (y(), I("div", {
            key: 1,
            id: "credit",
            style: ke(z.value)
          }, [
            $("a", {
              title: "SmartCut | Cut list optimization software",
              style: ke(ae.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, te(C(no)(C(a)("powered_by"))), 5)
          ], 4)) : G("", !0),
          $("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: ke({ "grid-template-columns": P.value })
          }, [
            C(u).inputShapes.value.length ? (y(), I("div", Wu, [
              g[6] || (g[6] = $("div", { class: "cell id" }, null, -1)),
              (y(!0), I(xe, null, Ee(kt.value, (Y) => (y(), I("div", {
                key: Y.id,
                class: Ce(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(Y.id) || Y.type === "checkbox" }])
              }, te(C(Oe)(C(a)(Y.label))), 3))), 128)),
              C(ee) === "development" ? (y(), I("div", Nu, " Info ")) : G("", !0),
              C(u).inputShapes.value.length > 1 ? (y(), I("div", Uu)) : G("", !0)
            ])) : G("", !0),
            (y(!0), I(xe, null, Ee(C(u).inputShapes.value, (Y, de) => (y(), I("div", {
              key: de,
              class: "row inputs"
            }, [
              $("div", ju, [
                $("div", {
                  class: "id",
                  style: ke({
                    background: E.colors.partA,
                    color: E.colors.text
                  })
                }, te(de + 1), 5)
              ]),
              (y(!0), I(xe, null, Ee(kt.value, (B) => (y(), I("div", {
                key: B.fieldMap,
                class: Ce(["cell", [`${B.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(B.id) || B.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(B.id) ? B.id === "orientationLock" ? (y(), ge(da, {
                  key: 1,
                  id: "orientation-" + de,
                  rectangle: Y,
                  disabled: i.readonly,
                  "stock-grain": C(p)(Y),
                  "button-background": E.colors.button,
                  "icon-color": E.colors.buttonText,
                  "orientation-model": E.orientationModel,
                  onUpdateOrientation: (vt) => Ft(Y, vt)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : B.id === "banding" ? (y(), ge(pa, {
                  key: 2,
                  id: "banding-" + de,
                  "input-shape": Y,
                  disabled: i.readonly,
                  "stock-grain": C(p)(Y),
                  open: Ne.banding === de,
                  "orientation-model": E.orientationModel,
                  onClicked: (vt) => Ii("banding", Y)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : B.id === "finish" ? (y(), ge(Na, {
                  key: 3,
                  id: "finish-" + de,
                  "input-shape": Y,
                  disabled: i.readonly,
                  open: Ne.finish === de,
                  onClicked: (vt) => Ii("finish", Y)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : B.fieldMap === "machining" && ie.value ? (y(), ge(Va, {
                  key: 4,
                  id: "machining-" + de,
                  disabled: i.readonly,
                  "input-shape": Y,
                  onOpen: (vt) => It(Y)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : B.fieldMap === "imageUpload" ? (y(), I("button", {
                  key: 5,
                  id: "image-upload-" + de,
                  type: "button",
                  disabled: i.readonly,
                  class: Ce({ selected: Ne.info === de }),
                  onClick: (vt) => Ii("imageUpload", Y)
                }, [
                  ye(b, { icon: ["fass", "image"] })
                ], 10, zu)) : G("", !0) : (y(), ge(ft, {
                  key: 0,
                  id: B.id + "-" + de,
                  focus: !i.readonly && E.enable.focus && de === C(u).inputShapes.value.length - 1 && B.id === "l",
                  issue: C(zs)(Y, [B.fieldMap]),
                  warning: C(zs)(Y, [B.fieldMap], !0),
                  type: B.type,
                  output: B.output,
                  label: B != null && B.label ? C(Oe)(C(a)(B.label)) : null,
                  placeholder: B != null && B.placeholder ? C(Oe)(C(a)(B.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": E.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (B == null ? void 0 : B.required) ?? !1,
                  "allow-zero": (B == null ? void 0 : B.allowZero) ?? !0,
                  options: B.id === "t" ? lr(Y) : B == null ? void 0 : B.options,
                  "true-value": B == null ? void 0 : B.trueValue,
                  "false-value": B == null ? void 0 : B.falseValue,
                  default: B == null ? void 0 : B.default,
                  min: typeof (B == null ? void 0 : B.min) == "number" ? B.min : null,
                  max: typeof (B == null ? void 0 : B.max) == "number" ? B.max : null,
                  custom: B == null ? void 0 : B.custom,
                  value: C(qt)(Y, B == null ? void 0 : B.fieldMap),
                  text: {
                    delete: C(Zt)(C(a)("delete")),
                    select: C(Zt)(C(a)("select"))
                  },
                  onValidation: (vt, xr) => st(vt, xr, Y, [B.fieldMap]),
                  "onUpdate:value": (vt) => {
                    B.fieldMap && C(El)(Y, B.fieldMap, vt);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              C(ee) === "development" ? (y(), I("div", Vu, [
                $("button", {
                  type: "button",
                  class: Ce({ selected: Ne.info === de }),
                  onClick: (B) => Ii("info", Y)
                }, " i ", 10, Yu)
              ])) : G("", !0),
              C(u).inputShapes.value.length > 1 ? (y(), I("div", Xu, [
                $("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": C(Oe)(C(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (B) => mr(de)
                }, [
                  ye(b, { icon: ["fass", "trash"] })
                ], 8, Ku)
              ])) : G("", !0),
              ye(C(n), {
                item: Y,
                "num-columns": Ct.value
              }, null, 8, ["item", "num-columns"]),
              Ne.banding === de && be.options.length > 0 ? (y(), ge(as, {
                key: 2,
                shape: Y,
                "shape-index": de,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": C(qe),
                "part-columns": Ct.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": E.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Es,
                onSet: Os
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Ne.finish === de && Re.options.length > 0 ? (y(), ge(as, {
                key: 3,
                shape: Y,
                "shape-index": de,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Re.keys,
                "all-options": Re.options,
                pricing: Re.pricing,
                labels: Re.labels,
                "user-friendly-field-map": C(qe),
                "part-columns": Ct.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": E.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Es,
                onSet: Os
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Ne.info === de ? (y(), I("div", {
                key: 4,
                id: "shape-info",
                style: ke({ "grid-column-end": "span " + Ct.value })
              }, [
                ye(C(l), {
                  data: [Y == null ? void 0 : Y.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : G("", !0),
              Ne.imageUpload === de ? (y(), ge(tu, {
                key: 5,
                prefix: (de + 1).toString(),
                "unique-id": C(Ie),
                "shape-id": Y.listId,
                style: ke({ "grid-column-end": "span " + Ct.value }),
                images: Te.value,
                onUpdate: pr,
                onRemove: gr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : G("", !0)
            ]))), 128))
          ], 4),
          $("div", Zu, [
            i.readonly ? G("", !0) : (y(), I("button", {
              key: 0,
              type: "button",
              "aria-label": C(a)("action_item", { a: "add", i: "part" }),
              style: ke({ background: E.colors.button, color: E.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: g[2] || (g[2] = (Y) => Fs(1))
            }, [
              ye(b, { icon: ["fass", "plus-large"] }),
              Qt(" " + te(C(Oe)(C(a)("action_item", { a: C(a)("add"), i: C(a)("part") }))), 1)
            ], 12, Ju)),
            $("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": C(Oe)(C(a)("calculate")),
              style: ke({
                background: E.colors.button,
                color: E.colors.buttonText
              }),
              disabled: !((q = C(u).inputStock.value) != null && q.length) || He.value,
              onClick: g[3] || (g[3] = (Y) => yr())
            }, [
              ye(b, { icon: ["fass", "calculator"] }),
              Qt(te(C(Oe)(C(a)("calculate"))), 1)
            ], 12, Qu),
            i.readonly ? G("", !0) : (y(), I("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": C(Oe)(C(a)("clear")),
              onClick: g[4] || (g[4] = (Y) => Zi())
            }, [
              ye(b, { icon: ["fass", "trash"] })
            ], 8, ec)),
            $("div", tc, te(C(f)) + te(E != null && E.maxParts ? "/" + E.maxParts : ""), 1)
          ]),
          zt.value && !i.readonly ? (y(), ge(C(o), {
            key: 2,
            ref: "import",
            "number-format": E.numberFormat,
            "custom-fields": Yt.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": Re.options,
            "finish-labels": Re.labels,
            onImport: wr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : G("", !0),
          ai.value ? (y(), I("div", ic, [
            De.value ? (y(), I("div", sc, te(De.value), 1)) : G("", !0),
            $("pre", nc, te(mt.value), 1)
          ])) : G("", !0),
          (E.enable.diagram ? He.value && !C(pe).complete : He.value || C(pe).complete) ? (y(), I("div", rc, [
            ye(en, {
              size: 50,
              number: C(pe).shapeCount,
              complete: C(pe).complete,
              "show-number": E.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : G("", !0),
          cs($("div", oc, [
            ((oe = (j = C(X)) == null ? void 0 : j.saw) == null ? void 0 : oe.stockType) !== "roll" ? (y(), I("div", lc, te((le = C(X)) != null && le.stack ? (_ = C(X)) == null ? void 0 : _.stack : 1), 1)) : G("", !0),
            ye(Bu, {
              "element-id": "diagram",
              "number-format": E.numberFormat,
              "decimal-places": E.decimalPlaces,
              colors: E.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [hs, E.enable.diagram && C(pe).complete]
          ]),
          E.enable.diagram && C(F).length > 1 && C(pe).complete ? (y(), ge(ta, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": C(Q),
            "stock-list": C(F),
            onShowStock: C(ce)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : G("", !0)
        ], 2)) : G("", !0)
      ], 64);
    };
  }
}), Th = /* @__PURE__ */ oi(uc, [["__scopeId", "data-v-33b2c3ae"]]), cc = {
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
    this.data.forEach((i, e) => {
      this.expanded[e] = !0;
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
      return i === null ? "null" : i === void 0 ? "undefined" : typeof i == "boolean" ? i.toString() : typeof i != "object" ? typeof i == "string" ? `'${i}'` : String(i) : Array.isArray(i) ? `[ ${i.map((s) => typeof s == "object" && s !== null ? `{ ${Object.entries(s).map(([r, o]) => `${r}: ${typeof o == "string" ? `'${o}'` : o}`).join(", ")} }` : typeof s == "string" ? `'${s}'` : String(s)).join(", ")} ]` : `{ ${Object.entries(i).map(([t, s]) => Array.isArray(s) ? `${t}: ${this.formatValue(s)}` : `${t}: ${typeof s == "string" ? `'${s}'` : s}`).join(", ")} }`;
    }
  }
}, hc = { class: "smartcut-object-viewer" }, dc = ["onClick"], fc = { class: "toggle-icon" }, pc = { class: "path-label" }, gc = {
  key: 0,
  class: "object-properties"
}, mc = { class: "key" };
function vc(i, e, t, s, n, r) {
  return y(), I("div", hc, [
    (y(!0), I(xe, null, Ee(t.data, (o, l) => (y(), I("div", {
      key: l,
      class: "array-item"
    }, [
      $("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        $("div", fc, te(n.expanded[l] ? "▼" : "▶"), 1),
        $("div", pc, te(t.paths[l] || l), 1)
      ], 8, dc),
      n.expanded[l] ? (y(), I("div", gc, [
        (y(!0), I(xe, null, Ee(o, (a, u) => (y(), I("div", {
          key: u,
          class: "property-item"
        }, [
          $("div", mc, te(u) + ": ", 1),
          $("div", {
            class: Ce(["value", r.getValueType(a)])
          }, te(r.formatValue(a)), 3)
        ]))), 128))
      ])) : G("", !0)
    ]))), 128))
  ]);
}
const yc = /* @__PURE__ */ oi(cc, [["render", vc]]), Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: yc }, Symbol.toStringTag, { value: "Module" })), bc = ["data-placement"], wc = /* @__PURE__ */ Me({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const e = i, t = H(null), s = H(null), n = Z(() => ({
      getBoundingClientRect: () => {
        var p;
        return ((p = e.referenceEl) == null ? void 0 : p.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      Dr(8),
      Tr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      $r({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      Wr({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = Hr(
      n,
      t,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (p, S, h) => Pr(
          p,
          S,
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
      const { x: p, y: S } = l.value.arrow, h = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: p != null ? `${p}px` : void 0,
        top: S != null ? `${S}px` : void 0,
        [h]: "-4px"
      };
    });
    return (p, S) => (y(), ge(xn, { to: "body" }, [
      ye(Gr, { name: "fade" }, {
        default: fs(() => [
          p.show && p.referenceEl ? (y(), I("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: t,
            class: Ce(["tooltip", p.type]),
            style: ke(u.value),
            "data-placement": C(a)
          }, [
            Qt(te(p.content) + " ", 1),
            $("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: ke(f.value)
            }, null, 4)
          ], 14, bc)) : G("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: wc }, Symbol.toStringTag, { value: "Module" })), xc = /* @__PURE__ */ Me({
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
    const e = i;
    return (t, s) => {
      var n, r, o, l;
      return y(), I(xe, null, [
        (r = (n = e.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (y(), I("div", {
          key: 0,
          class: "group issues",
          style: ke({
            "grid-column-end": "span " + e.numColumns
          })
        }, [
          $("pre", null, te(e.item.issues.filter((a) => a.type === "error").flatMap((a) => C(Oe)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0),
        (l = (o = e.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (y(), I("div", {
          key: 1,
          class: "group warnings",
          style: ke({
            "grid-column-end": "span " + e.numColumns
          })
        }, [
          $("pre", null, te(e.item.issues.filter((a) => a.type === "warning").flatMap((a) => C(Oe)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0)
      ], 64);
    };
  }
}), kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: xc }, Symbol.toStringTag, { value: "Module" })), nt = {
  precisionFixed: so,
  format: io,
  select: _e,
  selectAll: Ln,
  scaleLinear: rt,
  scaleSequential: fi,
  axisTop: Cn,
  axisBottom: _i,
  axisRight: In,
  axisLeft: qi,
  symbol: to,
  path: eo,
  arc: Qr,
  symbolTriangle: Jr,
  symbolSquare: Zr
};
class Cc {
  constructor({
    HTMLElement: e,
    vueComponent: t,
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
    c(this, "xScale", nt.scaleLinear());
    c(this, "yScale", nt.scaleLinear());
    c(this, "yScaleFlipped", nt.scaleLinear());
    c(this, "measurementScale", nt.scaleLinear());
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
    this.HTMLElement = e, this.numberFormat = n, this.decimalPlaces = r, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = t, this.shape = s, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = nt.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = nt.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
        const e = this.el.append("svg").attr("class", "vis");
        if (e === null) return;
        this.svgCanvas = e;
      }
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x"), this.xAxis.call(
      nt.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      nt.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, t) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(t)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const e = nt.path(), t = this.shape.machining.corners, s = [], n = [];
    [0, 1, 2, 3].forEach((o) => {
      const l = t[o];
      l && l.type ? (s.push(l.size ? x({ v: l.size ?? 0, o: this }) : 0), n.push(l.type)) : (s.push(0), n.push(null));
    });
    const r = (o, l, a, u, f) => {
      n[o] === "radius" ? e.arcTo(
        this.xScale(l),
        this.getYScale()(a),
        this.xScale(u),
        this.getYScale()(f),
        this.measurementScale(s[o])
      ) : n[o] === "bevel" ? e.lineTo(this.xScale(u), this.getYScale()(f)) : (e.lineTo(this.xScale(l), this.getYScale()(a)), e.lineTo(this.xScale(u), this.getYScale()(f)));
    };
    e.moveTo(this.xScale(0), this.getYScale()(s[0])), r(0, 0, 0, s[0], 0), (n[0] === "bevel" || n[1] === "bevel") && e.lineTo(this.xScale(this.shapeL - s[1]), this.getYScale()(0)), r(1, this.shapeL, 0, this.shapeL, s[1]), (n[1] === "bevel" || n[2] === "bevel") && e.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - s[2])
    ), r(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - s[2],
      this.shapeW
    ), (n[2] === "bevel" || n[3] === "bevel") && e.lineTo(this.xScale(s[3]), this.getYScale()(this.shapeW)), r(3, 0, this.shapeW, 0, this.shapeW - s[3]), e.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", e.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let e;
    e = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), e = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), e = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter((e) => e.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (e) => e.valid === !1).classed("partial", (e) => !e.isThroughShape(this.shape)).attr("cx", (e) => this.xScale(e.x)).attr("cy", (e) => {
      const t = e.getYDrawPosition(this.shape, this.currentSide);
      return this.yScale(t);
    }).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const t = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("g").data(t).join("circle").attr("class", "hole").classed("invalid", (s) => s.valid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => this.yScale(s.getYDrawPosition(this.shape, this.currentSide))).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const e = this.shape.banding, t = -1, s = [];
    for (const r of St)
      if (e[r])
        switch (r) {
          case "x1":
            s.push({
              x1: this.padding - t,
              x2: this.padding - t,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            s.push({
              x1: this.w - this.padding + t,
              x2: this.w - this.padding + t,
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
              y1: this.getYScale()(0) + (this.currentSide === 0 ? t : 1),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? t : 1)
            });
            break;
          case "y2":
            s.push({
              x1: this.padding + this.getCornerBandingSize(3),
              x2: this.w - this.padding - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : t),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : t)
            });
            break;
        }
    this.bandingGroup.selectAll("g").data(s).join("line").attr("class", "banding").attr("x1", (r) => r.x1).attr("x2", (r) => r.x2).attr("y1", (r) => r.y1).attr("y2", (r) => r.y2).attr("stroke-width", this.bandingStrokeWidth);
    const n = nt.path();
    this.shape.machining.corners.forEach((r, o) => {
      if (!r.type) return;
      let l, a, u;
      switch (o) {
        case 0:
          if (!k(e.a) || e.a === !1) return;
          l = {
            x: this.xScale(0) - t,
            y: this.getYScale()(x({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(x({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? t : 1)
          };
          break;
        case 1:
          if (!k(e.b) || e.b === !1) return;
          l = {
            x: this.xScale(this.shapeL - x({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? t : 1)
          }, a = {
            x: this.xScale(this.shapeL) - t,
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(this.shapeL) + t,
            y: this.getYScale()(x({ v: r.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!k(e.c) || e.c === !1) return;
          l = {
            x: this.xScale(this.shapeL) + t,
            y: this.getYScale()(this.shapeW - x({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(this.shapeL - x({ v: r.size ?? 0, o: this })) - t,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? t : 1)
          };
          break;
        case 3:
          if (!k(e.d) || e.d === !1) return;
          l = {
            x: this.xScale(x({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? t : 1)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(0) - t,
            y: this.getYScale()(this.shapeW - x({ v: r.size ?? 0, o: this })) + t
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
            n.lineTo(u.x + t, u.y);
            break;
          case 1:
          case 3:
            n.lineTo(u.x, u.y - (this.currentSide === 0 ? t : -1));
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
      nt.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(e) {
    return this.shape.machining.corners[e].type ? this.measurementScale(this.shape.machining.corners[e].size ?? 0) : 0;
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0), this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let e = this.shape.getShortSide() / this.shape.getLongSide();
    if (this.w = this.HTMLElementWidth, this.w - this.padding * 2 < 0) return;
    let t = window.innerHeight - this.padding * 2 - 20;
    t > 600 && (t = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), e > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (e = 0.3, this.h = this.w * e), this.h > t && (this.h = t, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
function Ic(i) {
  var e;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((e = this == null ? void 0 : this.optionsStore) == null ? void 0 : e[i[0]]) < "u")
    return ti(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return ti(this, i);
}
const Lc = { id: "machining" }, Pc = {
  key: 0,
  class: "debug"
}, Dc = { class: "inputs" }, Tc = {
  key: 0,
  class: "shape-name"
}, $c = { class: "shape-dimensions" }, Ac = {
  key: 1,
  class: "sides-wrapper"
}, Oc = { class: "menu" }, Ec = { class: "button-wrapper" }, Mc = { class: "row table-heading" }, Rc = {
  key: 0,
  class: "cell id"
}, Fc = {
  key: 0,
  class: "cell"
}, _c = { class: "id" }, qc = ["onClick"], Bc = { class: "remove" }, Hc = { key: 5 }, Gc = !1, Wc = /* @__PURE__ */ Me({
  __name: "Machining",
  props: /* @__PURE__ */ Gs({
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
  emits: /* @__PURE__ */ Gs(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: e }) {
    var Ne, ze, Ge, Rt, Vt, Ke, be, Re, ui, Yt, Si, kt, Ct;
    const t = Tt(() => Promise.resolve().then(() => Ki)), s = i, n = e, r = Z(() => ws(M.value)), o = Z(() => Ic.call({ options: s.options }, ["units"])), l = Z(() => {
      var z;
      if (!((z = f.value) != null && z.length)) return 0;
      if (E.value === "banding") return 1;
      let P = Object.values(u.value).filter((ae) => ae.enabled).length;
      return P += 2, P;
    }), a = Z(() => {
      if (!f.value.length || E.value === "banding") return;
      const P = {
        id: "34px",
        del: "30px"
      }, z = [];
      return f.value.forEach((ae) => {
        const we = u.value[ae];
        we.enabled && z.push(we.w ?? "1fr");
      }), z.unshift(P.id), z.push(P.del), z.join(" ");
    }), u = Z(() => !E.value || E.value === "banding" ? null : ai[E.value]), f = Z(() => !E.value || E.value === "banding" ? [] : Object.keys(ai[E.value]).filter((P) => ai[E.value][P].enabled)), p = Z(() => E.value ? Q() : []), S = Z(() => {
      var z, ae, we, Ue;
      const P = ((Ue = (we = (ae = (z = M.value) == null ? void 0 : z.machining) == null ? void 0 : ae.corners) == null ? void 0 : we.map((Ve) => {
        var Ft;
        return (Ft = Ve == null ? void 0 : Ve.isPresent) != null && Ft.call(Ve) ? Ve.getCorner() : null;
      })) == null ? void 0 : Ue.filter((Ve) => Ve)) ?? [];
      return [...St, ...P];
    }), h = (P = !0) => {
      P ? Xe.value = P : it(() => Xe.value = !1);
    }, m = () => {
      K(), A(), N(), U();
    }, w = (P, z, ae) => {
      it(() => {
        P[z] = ae;
      });
    }, F = (P) => {
      if (E.value === "corners")
        switch (P) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return P;
        }
      return P + 1;
    }, W = () => E.value !== "banding", J = (P, z = null) => {
      if (!(P != null && P.length)) return [];
      let ae = "None";
      z === "depth" && (ae = "Through");
      const we = [{ label: ae, value: null }];
      return P.forEach((Ue) => {
        const Ve = Ue.toString().charAt(0).toUpperCase() + Ue.toString().slice(1);
        we.push({ label: Ve, value: Ue });
      }), we;
    }, Q = () => {
      if (!E.value) return [];
      if (E.value === "banding") return [];
      const P = M.value.machining[E.value];
      return Array.isArray(P) ? P : [P];
    };
    let X = null;
    const ce = () => {
      M.value && (X = new Cc({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: M.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), X.init(), ie.value = !0, setTimeout(() => {
        X.updateSize();
      }, 100));
    }, pe = () => {
      tt.value = tt.value === 0 ? 1 : 0, X.flip();
    }, T = () => {
      switch (E.value) {
        case "holes":
          v();
          break;
        case "hingeHoles":
          D();
          break;
      }
    }, v = () => {
      M.value.machining.createHole(
        x({ v: M.value.getLongSide() }) / 2,
        x({ v: M.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        tt.value
      ), X.createHoles();
    }, D = () => {
      M.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: tt.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), X.createHingeHoles();
    }, K = () => {
      M.value.machining.holes.length = 0;
    }, A = () => {
      M.value.machining.hingeHoles.length = 0;
    }, N = () => {
      M.value.machining.corners.forEach((P) => {
        P.size = null, P.type = null;
      }), M.value.banding.a = !1, M.value.banding.b = !1, M.value.banding.c = !1, M.value.banding.d = !1;
    }, U = () => {
      M.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, ee = (P) => {
      switch (E.value) {
        case "holes":
          return M.value.machining.holes.splice(P, 1);
        case "hingeHoles":
          return M.value.machining.hingeHoles.splice(P, 1);
        case "corners":
          M.value.machining.corners[P].size = null, M.value.machining.corners[P].type = null;
          return;
      }
    }, O = () => {
      switch (E.value) {
        case "holes":
          return K();
        case "hingeHoles":
          return A();
        case "corners":
          return N();
      }
    }, R = () => {
      var P;
      if (Ae.value = [], !!s.options.banding.enabled) {
        h();
        for (const z in M.value.banding)
          M.value.banding[z] ? s.options.banding.enableTypes && ((P = s.options.banding.types) != null && P.length) && (M.value.banding[z] || Ae.value.push({
            index: z,
            message: "Please select a type"
          })) : M.value.banding[z] = "";
        h(!1);
      }
    }, V = (P) => {
      const z = Ae.value.filter((ae) => ae.index === P);
      return z.length ? z.map((ae) => ae.message) : [];
    }, se = (P) => {
      const z = Ae.value.filter((we) => we.index === P && (we == null ? void 0 : we.fields)), ae = z.flatMap((we) => we.fields);
      return z.length ? ae : [];
    }, re = (P, z) => {
      const ae = se(P);
      return ae != null && ae.length ? ae.includes(z) : !1;
    }, ve = () => {
      n("close");
    }, Ie = (P) => P && typeof P.disabled == "function" ? P.disabled : !1, Te = (P, z, ae, we, Ue) => {
      Ts(P, z, ae, we, Ue, s.findExtrasPrice);
    }, xt = (P, z, ae, we) => {
      Kn(
        P,
        z,
        ae,
        we,
        [],
        s.findExtrasPrice
      );
    }, M = Nr(i, "shape");
    if (!((Ne = M.value) != null && Ne.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const He = H(null), li = H(null), zt = H(!1), ie = H(!1), Xe = H(!1), et = H(!1), tt = H(0), E = H(null), $e = H(0), Ae = H([]), ai = bt({
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
          type: (ze = s.options.holes.diameters) != null && ze.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Ge = s.options.holes.diameters) != null && Ge.length ? "float" : void 0,
          options: (Rt = s.options.holes.diameters) != null && Rt.length ? J(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof M.value.t < "u" && x({ v: M.value.t }) > 0,
          //[]
          required: !1,
          type: (Vt = s.options.holes.depths) != null && Vt.length ? "select" : "unitDependent",
          output: (Ke = s.options.holes.depths) != null && Ke.length ? "float" : void 0,
          options: (be = s.options.holes.depths) != null && be.length ? J(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof M.value.t < "u" && x({ v: M.value.t }) > 0,
          required: !1,
          type: (Re = s.options.holes.depths) != null && Re.length ? "select" : "unitDependent",
          output: (ui = s.options.holes.depths) != null && ui.length ? "float" : void 0,
          options: (Yt = s.options.holes.depths) != null && Yt.length ? J(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (Si = s.options.holes.diameters) != null && Si.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (kt = s.options.holes.diameters) != null && kt.length ? "float" : void 0,
          options: (Ct = s.options.holes.diameters) != null && Ct.length ? J(s.options.holes.diameters) : void 0
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
          min: () => typeof s.options.corners.minValue < "u" ? x({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? x({ v: s.options.corners.maxValue, o: s.options }) : x({ v: M.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), De = bt({
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
    }), mt = () => {
      var P;
      return !(!((P = M == null ? void 0 : M.value) != null && P.machining) || !zt.value || Xe.value);
    };
    return Pe(() => {
      var P;
      return (P = M.value) == null ? void 0 : P.listId;
    }, () => {
      mt() && ce();
    }), Pe(() => {
      var P;
      return (P = M.value) == null ? void 0 : P.id;
    }, () => {
      mt() && ce();
    }), Pe(E, (P) => {
      if (mt()) {
        if (P === "banding") {
          h(), R(), h(!1);
          return;
        }
        if (!P) {
          Ae.value = [];
          return;
        }
        h(), Ae.value = M.value.machining.validate(
          M.value,
          P,
          De == null ? void 0 : De[P]
        ), P === "hingeHoles" && M.value.machining.hingeHoles.forEach((z, ae) => {
          Gi(z, De == null ? void 0 : De.holes, Ae.value, ae);
        }), h(!1);
      }
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var P, z;
      return (z = (P = M == null ? void 0 : M.value) == null ? void 0 : P.machining) == null ? void 0 : z.holes;
    }, () => {
      mt() && (h(), Ae.value = M.value.machining.validate(
        M.value,
        "holes",
        De == null ? void 0 : De.holes
      ), X.createHoles(), h(!1));
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var P, z;
      return (z = (P = M == null ? void 0 : M.value) == null ? void 0 : P.machining) == null ? void 0 : z.hingeHoles;
    }, () => {
      mt() && (h(), M.value.machining.updateHingeHoles(M.value), Ae.value = M.value.machining.validate(
        M.value,
        "hingeHoles",
        De == null ? void 0 : De.hingeHoles
      ), M.value.machining.hingeHoles.forEach((P, z) => {
        Gi(P, De == null ? void 0 : De.holes, Ae.value, z);
      }), X.createHingeHoles(), h(!1));
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var P, z;
      return (z = (P = M == null ? void 0 : M.value) == null ? void 0 : P.machining) == null ? void 0 : z.corners;
    }, () => {
      if (mt()) {
        h(), Ae.value = M.value.machining.validate(
          M.value,
          "corners",
          De == null ? void 0 : De.corners
        ), M.value.machining.validate(M.value, "holes"), M.value.machining.validate(M.value, "hingeHoles"), X.createShape(), X.createHoles(), X.createHingeHoles();
        for (const P of M.value.machining.corners)
          P.isPresent() || Ds(M.value, "banding", P.getCorner(), !0);
        X.createBanding(), h(!1);
      }
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var P;
      return (P = M == null ? void 0 : M.value) == null ? void 0 : P.banding;
    }, () => {
      mt() && (R(), X.createBanding());
    }, { deep: !0, immediate: !0 }), gt(() => {
      var z;
      if ((z = document.getElementById("machining")) == null || z.requestFullscreen(), !M.value || !M.value.l || !M.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      it(() => ce());
      const P = document.querySelector("#smartcut-app #machining .diagram");
      He.value || (He.value = new ResizeObserver((ae) => {
        clearTimeout(li.value ?? void 0), ie.value && (li.value = window.setTimeout(() => {
          if (et.value) {
            et.value = !1;
            return;
          }
          ae[0].contentRect.width !== $e.value && ($e.value = ae[0].contentRect.width, $e.value && X.updateSize());
        }, 10));
      }), He.value.observe(P)), zt.value = !0;
    }), (P, z) => {
      var we, Ue, Ve, Ft, at;
      const ae = Wt("font-awesome-icon");
      return y(), I("div", Lc, [
        P.env === "development" && Gc ? (y(), I("div", Pc, [
          ye(C(t), {
            data: [M.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        $("div", null, [
          $("div", Dc, [
            $("button", {
              type: "button",
              class: "close",
              onClick: ve
            }, [
              ye(ae, { icon: ["fass", "xmark"] })
            ]),
            (we = M.value) != null && we.name ? (y(), I("div", Tc, te(M.value.name), 1)) : G("", !0),
            $("div", $c, te((Ue = M.value) == null ? void 0 : Ue.l) + " x " + te((Ve = M.value) == null ? void 0 : Ve.w) + " " + te((Ft = M.value) != null && Ft.t ? "x " + ((at = M.value) == null ? void 0 : at.t) : null), 1),
            P.options.faces.enabled ? (y(), I("div", Ac, [
              $("div", {
                ref: "sides",
                class: Ce(["sides", { flipped: tt.value === 1 }]),
                onClick: pe
              }, z[4] || (z[4] = [
                $("div", { class: "side-a" }, " A ", -1),
                $("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              z[5] || (z[5] = $("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : G("", !0),
            r.value ? (y(), I("button", {
              key: 2,
              onClick: m
            }, " Delete all machining ")) : G("", !0),
            $("div", Oc, [
              P.options.holes.enabled ? (y(), I("div", {
                key: 0,
                class: Ce({ selected: E.value === "holes" }),
                onClick: z[0] || (z[0] = (je) => E.value = "holes")
              }, " Holes ", 2)) : G("", !0),
              P.options.hingeHoles.enabled ? (y(), I("div", {
                key: 1,
                class: Ce({ selected: E.value === "hingeHoles" }),
                onClick: z[1] || (z[1] = (je) => E.value = "hingeHoles")
              }, " Hinge holes ", 2)) : G("", !0),
              P.options.corners.enabled ? (y(), I("div", {
                key: 2,
                class: Ce({ selected: E.value === "corners" }),
                onClick: z[2] || (z[2] = (je) => E.value = "corners")
              }, " Corners ", 2)) : G("", !0),
              P.options.banding.enabled ? (y(), I("div", {
                key: 3,
                class: Ce({ selected: E.value === "banding" }),
                onClick: z[3] || (z[3] = (je) => E.value = "banding")
              }, " Banding ", 2)) : G("", !0)
            ]),
            $("div", Ec, [
              E.value === "holes" || E.value === "hingeHoles" ? (y(), I("button", {
                key: 0,
                type: "button",
                onClick: T
              }, " Create ")) : G("", !0),
              E.value && E.value !== "banding" ? (y(), I("button", {
                key: 1,
                type: "button",
                onClick: O
              }, " Delete all ")) : G("", !0)
            ]),
            E.value === "banding" && M.value ? (y(), ge(as, {
              key: 3,
              shape: M.value,
              env: P.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": S.value,
              labels: P.options.banding.labels,
              "all-options": P.options.banding.options,
              pricing: P.options.banding.pricing,
              "user-friendly-field-map": C(qe),
              "part-columns": 1,
              translate: P.translate,
              "orientation-model": 0,
              "get-price": P.getExtrasPrice,
              "format-price": P.formatPrice,
              "get-available-pricing-options": P.getAvailablePricingOptions,
              onSet: Te,
              onUpdateAll: xt
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : G("", !0),
            E.value !== "banding" && p.value.length ? (y(), I("div", {
              key: 4,
              class: Ce(["grid-table", E.value]),
              style: ke({ "grid-template-columns": a.value })
            }, [
              $("div", Mc, [
                W() ? (y(), I("div", Rc)) : G("", !0),
                (y(!0), I(xe, null, Ee(u.value, (je, st, he) => cs((y(), I("div", {
                  key: he,
                  class: "cell"
                }, te(je.label ?? st), 1)), [
                  [hs, je.enabled]
                ])), 128)),
                z[6] || (z[6] = $("div", { class: "cell del" }, null, -1))
              ]),
              (y(!0), I(xe, null, Ee(p.value, (je, st) => (y(), I("div", {
                key: st,
                class: "row"
              }, [
                W() ? (y(), I("div", Fc, [
                  $("div", _c, te(F(st)), 1)
                ])) : G("", !0),
                (y(!0), I(xe, null, Ee(f.value, (he, It) => (y(), I("div", {
                  key: It,
                  class: "cell"
                }, [
                  u.value[he].type !== "select" && u.value[he].type !== "checkbox" ? (y(), ge(ft, {
                    key: 0,
                    id: he + "-" + It,
                    warning: re(st, he),
                    type: u.value[he].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[he].label ?? he,
                    disabled: Ie(u.value[he]),
                    value: je[he],
                    units: o.value,
                    output: u.value[he].output,
                    "onUpdate:value": (_t) => w(je, he, _t)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[he].type === "checkbox" ? (y(), ge(ft, {
                    key: 1,
                    id: he + "-" + It,
                    type: "checkbox",
                    warning: re(st, he),
                    "enable-label": !1,
                    disabled: Ie(u.value[he]),
                    value: je[he],
                    output: u.value[he].output,
                    "onUpdate:value": (_t) => w(je, he, _t)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[he].type === "select" ? (y(), ge(ft, {
                    key: 2,
                    id: he + "-" + It,
                    type: "select",
                    "enable-label": !1,
                    warning: re(st, he),
                    disabled: Ie(u.value[he]),
                    value: je[he],
                    options: u.value[he].options,
                    output: u.value[he].output,
                    "onUpdate:value": (_t) => w(je, he, _t)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : G("", !0)
                ]))), 128)),
                $("div", {
                  class: "cell",
                  onClick: (he) => ee(st)
                }, [
                  $("div", Bc, [
                    ye(ae, { icon: ["fass", "trash"] })
                  ])
                ], 8, qc),
                (y(!0), I(xe, null, Ee(V(st), (he, It) => (y(), I("div", {
                  key: It,
                  class: "group validation",
                  style: ke({ "grid-column-end": "span " + l.value })
                }, te(he), 5))), 128))
              ]))), 128))
            ], 6)) : E.value !== "banding" ? (y(), I("div", Hc, " Please select from the menu above ")) : G("", !0)
          ]),
          $("div", {
            id: "machining-diagram",
            class: Ce(["diagram", { flipped: tt.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Wc }, Symbol.toStringTag, { value: "Module" })), Uc = {
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
      files: Ur([])
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
      return new Promise((e, t) => {
        const s = new FileReader();
        s.onloadend = () => {
          e(s.result);
        }, s.onerror = t, s.readAsText(i);
      });
    },
    async onDrop(i) {
      const e = [...i.dataTransfer.files];
      if (this.maxFiles && e.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (e.every((t) => t.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        let n;
        try {
          n = await this.readFileAsync(s);
        } catch (l) {
          console.error(l), alert(`Error reading file ${t + 1}`);
          return;
        }
        const r = {
          data: n,
          name: s.name
        };
        this.files.push(r);
        const o = t / e.length * 100;
        this.loadingProgress = o;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(i) {
      this.dropClass = (i == null ? void 0 : i.type) ?? null, i.preventDefault();
    }
  }
};
function jc(i, e, t, s, n, r) {
  return y(), I("div", {
    id: "drop",
    class: Ce({ thinking: t.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = jr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    $("div", null, te(t.thinking ? "Loading, please wait..." : t.label), 1)
  ], 34);
}
const zc = /* @__PURE__ */ oi(Uc, [["render", jc]]), Vc = { id: "import-file" }, Yc = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = i, s = e, { t: n } = ji(["main", "errors"]), r = H([]), o = H([]), l = H([]), a = H([]), u = H({}), f = H([]), p = H(!1), S = H(null), h = H(null), m = [
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
      const O = {};
      return r.value.forEach((R, V) => {
        O[V] = {};
        for (const [se, re] of Object.entries(R)) {
          if (!m.includes(se)) continue;
          const ve = J(se, re);
          (ve === !0 || ve === !1) && (O[V][se] = ve);
        }
      }), O;
    }), F = Z(() => t.customFields.map((O) => O.label)), W = (O, R) => {
      if (R) {
        const V = Object.keys(R), se = [[]];
        V.forEach((ve) => {
          const Ie = R[ve], Te = [];
          se.forEach((xt) => {
            Ie.forEach((M) => Te.push([...xt, M]));
          }), se.splice(0, se.length, ...Te);
        });
        const re = /* @__PURE__ */ new Set();
        se.forEach((ve) => re.add(ve.join("|").toLowerCase())), O === "banding" ? S.value = re : h.value = re;
      }
    }, J = (O, R) => {
      if (R === "???") return !0;
      function V(re) {
        return re ? (re = re.trim().toLowerCase(), re === "l" || re === "w") : !0;
      }
      const se = {
        banding: (re) => Q(re, S.value, "banding"),
        finish: (re) => Q(re, h.value, "finish"),
        orientationLock: V
      };
      return O in se ? se[O](R) : null;
    }, Q = (O, R, V) => {
      if (O = A(O), !O) return !0;
      const se = O.split(","), re = se.every((ve) => !ve || R.has(ve.toLowerCase()));
      if (!re) {
        const ve = se.filter((Ie) => !R.has(Ie.toLowerCase()));
        console.log(`Valid ${V} choices...`), console.table(Array.from(R)), console.log(`The following ${V} choices are invalid`, ve);
      }
      return re;
    }, X = (O, R) => {
      const V = {
        bandingOptions: (se) => ce(se, t.bandingOptions, t.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (se) => ce(se, t.finishOptions, t.finishLabels, ["a", "b"])
      };
      return O in V ? V[O](R) : null;
    }, ce = (O, R, V, se) => {
      if (O = A(O), !O)
        return se.reduce((Ie, Te) => ({ ...Ie, [Te]: {} }), {});
      const re = O.split(",").map((Ie) => Ie.toLowerCase()), ve = {};
      return se.forEach((Ie, Te) => {
        ve[Ie] = {}, Object.keys(R).forEach((xt, M) => {
          var He;
          ve[Ie][V[M]] = ((He = re[Te]) == null ? void 0 : He.split("|")[M]) || "";
        });
      }), ve;
    }, pe = () => r.value.map((O, R) => ({
      l: t.numberFormat === "decimal" ? Ri(O.l) : O.l,
      w: t.numberFormat === "decimal" ? Ri(O.w) : O.w,
      t: t.numberFormat === "decimal" ? Ri(O.t) : O.t,
      q: O.q,
      orientationLock: O.orientationLock,
      name: O.name,
      material: O.material,
      bandingOptions: w.value[R].banding ? X("bandingOptions", O.banding) : null,
      finishOptions: w.value[R].finish ? X("finishOptions", O.finish) : null,
      numberFormat: t.numberFormat,
      customData: U(O)
    })), T = (O) => {
      var V;
      const R = (V = O == null ? void 0 : O[0]) == null ? void 0 : V.data;
      R && Ar.parse(R, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (se) => v(se),
        error: () => s("error")
      });
    }, v = (O) => {
      o.value = O.data.filter((R) => R.some((V) => V)), l.value = o.value[0], u.value = {};
      for (let R = l.value.length; R--; ) {
        const V = l.value[R], se = D(V);
        se ? u.value[R] = se : (u.value[R] = null, F.value.includes(V) && (u.value[R] = "customData." + t.customFields.find((re) => re.label === V).id));
      }
      K(), o.value.shift(), N(), ee();
    }, D = (O) => {
      const R = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", n("l"), n("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", n("w"), n("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", n("t"), n("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", n("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", n("quantity"), n("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", n("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", n("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", n("banding")],
        finish: ["finish", "paint"]
      }, V = Object.entries(R).reduce(
        (se, [re, ve]) => (ve.some((Ie) => O && O.toLowerCase() === Ie) && se.push(re), se),
        []
      );
      return V.length > 1 ? null : V[0];
    }, K = () => {
      p.value = !1, a.value = Object.values(u.value).map((R) => !R || R === "N" ? null : m.includes(R) ? R : (p.value = !0, null));
      const O = a.value.filter((R, V) => a.value.indexOf(R) !== V);
      f.value = O.map((R) => a.value.reduce(
        (V, se, re) => (se && se === R && V.push(re), V),
        []
      ));
    }, A = (O) => O && O.replace(/\s*,\s*/g, ","), N = () => {
      const O = o.value.map((R) => {
        const V = {};
        return l.value.forEach((se, re) => {
          if (f.value.flat().includes(re))
            return V[u.value[re]] = "???";
          V[u.value[re]] = R[re];
        }), V;
      });
      r.value = O;
    }, U = (O) => {
      let R = {};
      for (let V in O)
        if (V.startsWith("customData.")) {
          let se = V.slice(11);
          R[se] = O[V];
        }
      return R;
    }, ee = () => {
      const O = pe();
      O != null && O.length && s("import", O);
    };
    return gt(() => {
      W("banding", t.bandingOptions), W("finish", t.finishOptions);
    }), (O, R) => (y(), I("div", Vc, [
      ye(zc, {
        label: C(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: T
      }, null, 8, ["label"])
    ]));
  }
}), Xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Yc }, Symbol.toStringTag, { value: "Module" }));
class Pt extends Error {
  constructor(e, t) {
    super(e), this.code = t, this.name = "FormulaError";
  }
}
class wn {
  constructor({ url: e = null, spec: t = null }) {
    c(this, "url");
    c(this, "spec");
    // Update the operations object to use the FormulaOperation type
    c(this, "operations", {
      add: (e, t) => e + t,
      subtract: (e, t) => e - t,
      multiply: (e, t) => e * t,
      divide: (e, t) => {
        if (t === 0) throw new Pt("Division by zero", "DIVISION_BY_ZERO");
        return e / t;
      },
      ">": (e, t) => e > t,
      "<": (e, t) => e < t,
      ">=": (e, t) => e >= t,
      "<=": (e, t) => e <= t,
      "==": (e, t) => e === t
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
    e && (this.url = e), t && (this.spec = t);
  }
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(e, t = {}) {
    if (typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "string") {
      if (this.isStringLiteral(e))
        return e.slice(1, -1);
      if (!(e in t))
        throw new Error(`Undefined variable: ${e}`);
      return t[e];
    }
    const { operation: s, operands: n } = e;
    if (!s)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(s))
      throw new Error(`Invalid operation: ${s}`);
    if (s === "ternary") {
      const l = this.evaluate(e.condition, t), a = this.evaluate(e.trueExpr, t), u = this.evaluate(e.falseExpr, t);
      return l ? a : u;
    }
    if (!n || !Array.isArray(n) || n.length !== 2)
      throw new Error("Invalid formula structure");
    const [r, o] = n.map((l) => this.evaluate(l, t));
    return [">", "<", ">=", "<=", "=="].includes(s) ? this.evaluateComparison(s, r, o) : this.operations[s](r, o);
  }
  // Update getOperation to use the type guard
  getOperation(e) {
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
    }[e];
    if (!this.isFormulaOperation(s))
      throw new Error(`Unsupported operator: ${e}`);
    return s;
  }
  isFormulaOperation(e) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "ternary"].includes(e);
  }
  isFormula(e) {
    return typeof e == "string" && e.startsWith("=");
  }
  stripFormulaPrefix(e) {
    return e.substring(1);
  }
  evaluateValue(e, t, s = {}) {
    return typeof e == "number" || !this.isFormula(e) ? e : this.evaluateFormula(this.stripFormulaPrefix(e), t, s);
  }
  extractDependencies(e) {
    const t = /* @__PURE__ */ new Set();
    if (typeof e == "string") {
      const s = Array.from(e.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const o of s)
        t.add(`${o[1]}.${o[2]}`);
      const n = Array.from(e.matchAll(/inputs\.(\w+)/g));
      for (const o of n)
        t.add(`input.${o[1]}`);
      const r = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const o of r)
        e.includes(o) && t.add(`input.${o}`);
    }
    return t;
  }
  buildFormulaGraph(e, t) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (r, o) => {
      const l = `${e}.${r}`;
      s.nodes.set(l, {
        panelKey: e,
        attribute: r,
        formula: o
      }), s.edges.set(l, this.isFormula(o) ? this.extractDependencies(this.stripFormulaPrefix(o.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", t.l), n("w", t.w), n("t", t.t), n("q", t.q), s;
  }
  resolveFormulas(e, t, s, n = {}) {
    const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = (a) => {
      if (r.has(a))
        return r.get(a);
      const [u, f] = a.split(".");
      if (!e.nodes.has(a)) {
        const w = n[u];
        if (w)
          return f === "q" ? w.q : w[f];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const p = e.nodes.get(a);
      if (typeof p.formula == "number")
        return r.set(a, p.formula), p.formula;
      o.add(a);
      const S = e.edges.get(a) || /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
      for (const w of S)
        if (w.startsWith("input.")) {
          const F = w.split(".")[1];
          h.set(w, s[F]);
        } else
          h.set(w, l(w));
      const m = this.evaluateFormulaWithDeps(p.formula, h, s);
      return r.set(a, m), o.delete(a), m;
    };
    for (const a of e.nodes.keys())
      l(a);
    return Object.fromEntries(r);
  }
  evaluateFormulaWithDeps(e, t, s, n) {
    if (!this.isFormula(e)) return e;
    let r = this.stripFormulaPrefix(e.toString());
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
        if (t.has(`${l}.${a}`))
          return t.get(`${l}.${a}`).toString();
        throw new Error(`Undefined variable in formula: ${o}`);
      }
    ), this.evaluate(this.parse(r), s);
  }
  calculatePanels(e) {
    var s;
    if (!((s = this.spec) != null && s.panels)) return {};
    const t = {};
    for (const [n, r] of Object.entries(this.spec.panels)) {
      const o = this.buildFormulaGraph(n, r), l = this.resolveFormulas(o, r, e, t), a = {
        panelKey: n,
        l: l[`${n}.l`],
        w: l[`${n}.w`],
        t: l[`${n}.t`],
        q: l[`${n}.q`] || 1
      };
      t[n] = {
        name: r.name,
        material: r.material,
        bandingOptions: r.bandingOptions ?? {},
        finishOptions: r.finishOptions ?? {},
        orientationLock: r.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(r.orientationLock, /* @__PURE__ */ new Map(), e, a) : void 0,
        ...a
      };
    }
    return t;
  }
  evaluateFormula(e, t, s = {}) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const n = e.replace(/inputs\.(\w+)/g, (o, l) => {
        if (!(l in t))
          throw new Error(`Input not found: ${l}`);
        return t[l].toString();
      }), r = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (r) {
        const [, o, l] = r;
        if (!s[o])
          throw new Error(`Panel not found: ${o}`);
        return l === "q" ? s[o].q ?? 1 : s[o].dimensions[l];
      }
      return this.evaluate(this.parse(n), t);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(e) {
    const t = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|\+|-|\*|\/|>|<|\?|:|\(|\)|\w+|\.)/g;
    return e.match(t) || [];
  }
  isValidToken(e) {
    return this.isNumber(e) || this.isVariable(e) || e in this.precedence || e === "(" || e === ")" || e === "." || this.isIdentifier(e);
  }
  isIdentifier(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e);
  }
  evaluateComparison(e, t, s) {
    switch (e) {
      case ">":
        return t > s;
      case "<":
        return t < s;
      case ">=":
        return t >= s;
      case "<=":
        return t <= s;
      case "==":
        return t === s;
      default:
        throw new Error(`Unsupported comparison operator: ${e}`);
    }
  }
  isNumber(e) {
    return !isNaN(Number(e));
  }
  isVariable(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e);
  }
  toPostfix(e) {
    const t = [], s = [];
    for (const n of e)
      if (this.isNumber(n) || this.isStringLiteral(n) || this.isIdentifier(n))
        t.push(this.isNumber(n) ? Number(n) : n);
      else if (n === "(")
        s.push(n);
      else if (n === ")") {
        for (; s.length && s[s.length - 1] !== "("; )
          t.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched parentheses");
        s.pop();
      } else if (n === "?") {
        for (; s.length && this.precedence[s[s.length - 1]] > this.precedence[n]; )
          t.push(s.pop());
        s.push(n);
      } else if (n === ":") {
        for (; s.length && s[s.length - 1] !== "?"; )
          t.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched ternary operator");
        s.pop(), s.push("?:");
      } else if (n in this.precedence) {
        for (; s.length && this.precedence[s[s.length - 1]] >= this.precedence[n]; )
          t.push(s.pop());
        s.push(n);
      } else
        throw new Error(`Invalid token: ${n}`);
    for (; s.length; ) {
      const n = s.pop();
      if (n === "(" || n === ")")
        throw new Error("Mismatched parentheses");
      t.push(n);
    }
    return t;
  }
  parse(e) {
    if (typeof e != "string")
      throw new Error("Parse input must be a string");
    if (!e.trim())
      throw new Error("Empty input");
    const t = this.tokenize(e), s = this.toPostfix(t);
    return this.toFormulaJSON(s);
  }
  isStringLiteral(e) {
    return /^'.*'$/.test(e);
  }
  toFormulaJSON(e) {
    const t = [];
    for (const s of e)
      if (typeof s == "number" || this.isStringLiteral(s.toString()) || this.isVariable(s.toString()))
        t.push(s);
      else if (s === "?:") {
        if (t.length < 3)
          throw new Error("Invalid ternary expression");
        const n = t.pop(), r = t.pop(), o = t.pop();
        t.push({
          operation: "ternary",
          condition: o,
          trueExpr: r,
          falseExpr: n
        });
      } else {
        if (t.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const n = t.pop(), r = t.pop();
        t.push({
          operation: this.getOperation(s.toString()),
          operands: [r, n]
        });
      }
    if (t.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return t[0];
  }
  calculateHardware(e) {
    var t;
    return (t = this.spec) != null && t.hardware ? Object.entries(this.spec.hardware).reduce((s, [n, r]) => {
      const o = this.evaluateValue(r.q, e);
      return s[n] = {
        name: r.name,
        q: Math.ceil(o),
        totalCost: Math.ceil(o) * r.cost
      }, s;
    }, {}) : {};
  }
  calculateAll(e) {
    this.validateInputs(e);
    const t = this.calculatePanels(e), s = this.calculateHardware(e);
    return {
      inputs: e,
      panels: t,
      hardware: s
    };
  }
  validateInputs(e) {
    var t;
    if (!((t = this.spec) != null && t.inputs)) throw new Pt("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = e[s];
      if (r === void 0)
        throw new Pt(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new Pt(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url) return null;
    try {
      const e = await fetch(this.url);
      if (!e.ok)
        throw new Error(`HTTP error! status: ${e.status}`);
      const t = await e.json();
      return this.spec = t, this.validateSpec(), t;
    } catch (e) {
      return console.error("Error fetching or parsing JSON file:", e), null;
    }
  }
  validateSpec() {
    const e = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && e.push("Specification must contain inputs"), { isValid: e.length === 0, errors: e }) : (e.push("Specification is required"), { isValid: !1, errors: e });
  }
  validateFields(e) {
    var n;
    if (!((n = this.spec) != null && n.inputs))
      throw new Pt("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (e.length !== t.length)
      throw new Pt(`Expected ${t.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of e) {
      const o = t[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new Pt(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new Pt(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
      s++;
    }
  }
  fieldsToInputs(e) {
    var s;
    const t = Object.keys(((s = this.spec) == null ? void 0 : s.inputs) || {});
    return e.reduce((n, r, o) => {
      const l = t[o];
      return l && (n[l] = r.value), n;
    }, {});
  }
  getEmptyFields() {
    var t;
    const e = {};
    return (t = this.spec) != null && t.inputs && Object.keys(this.spec.inputs).forEach((s, n) => {
      e[n] = { value: 0 };
    }), e;
  }
  getDefaultFields() {
    var t;
    const e = {};
    return (t = this.spec) != null && t.inputs && Object.values(this.spec.inputs).forEach((s, n) => {
      e[n] = { value: s.default };
    }), e;
  }
  calculatePanelsFromFields(e) {
    this.validateFields(e);
    const t = this.fieldsToInputs(e);
    return this.calculatePanels(t);
  }
  calculateHardwareFromFields(e) {
    this.validateFields(e);
    const t = this.fieldsToInputs(e);
    return this.calculateHardware(t);
  }
  calculateAllFromFields(e) {
    this.validateFields(e);
    const t = this.fieldsToInputs(e);
    return this.calculateAll(t);
  }
  getFieldMetadata() {
    var t;
    const e = [];
    return (t = this.spec) != null && t.inputs && Object.entries(this.spec.inputs).forEach(([s, n], r) => {
      e.push({
        index: r,
        name: s,
        label: n.label,
        type: n.type,
        min: n.min,
        max: n.max,
        default: n.default
      });
    }), e;
  }
}
const Kc = {
  key: 0,
  class: "debug"
}, Zc = { id: "formula-pricing" }, Jc = {
  key: 1,
  class: "extras"
}, Qc = { class: "heading" }, eh = { id: "hardware-total" }, th = { class: "heading panels" }, ih = !1, sh = /* @__PURE__ */ Me({
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
  setup(i, { emit: e }) {
    const t = Tt(() => Promise.resolve().then(() => Ki)), s = i, { t: n } = ji(["main", "errors"]), r = e, o = zr("calculator"), l = Z(() => o()), a = H("production");
    let u = null;
    const f = H(null), p = H([]), S = H(!1), h = H(""), m = Z(() => {
      if (!S.value || !p.value.length || p.value.every((v) => v.value === null)) return null;
      const T = X();
      return it(() => r("panel-result", T)), T;
    }), w = Z(() => {
      if (!l.value || !S.value || !p.value.length || p.value.every((v) => v.value === null)) return;
      const T = ce();
      return it(() => r("hardware-result", T, F.value)), T;
    }), F = Z(() => {
      if (w.value)
        return Object.values(w.value).reduce((T, v) => T + v.totalCost, 0);
    });
    Pe(m, (T) => {
      var A, N, U;
      if (!S.value || !T || !l.value || !((A = l.value) != null && A.inputShapes)) return;
      const v = (ee) => ee != null && ee.name ? ee.name.toLowerCase() : "", D = new Map(
        l.value.inputShapes.map((ee) => [v(ee), ee])
      ), K = /* @__PURE__ */ new Set();
      for (const ee of Object.values(m.value)) {
        if (!ee.name) continue;
        const O = v(ee), R = D.get(O), V = {
          ...ee,
          name: ee.name.toUpperCase() || (R == null ? void 0 : R.name.toUpperCase()),
          material: ((N = ee.material) == null ? void 0 : N.toUpperCase()) || ((U = R == null ? void 0 : R.material) == null ? void 0 : U.toUpperCase()),
          bandingOptions: ee.bandingOptions || {},
          finishOptions: ee.finishOptions || {},
          orientationLock: ee.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, se = R || l.value.createInputShape(V);
        if (R) {
          Object.assign(R, V);
          for (const re of ["banding", "finish"])
            l.value.initExtrasOptions(R, re);
        } else
          l.value.inputShapes.push(se);
        K.add(O);
      }
      l.value.inputShapes = l.value.inputShapes.filter(
        (ee) => K.has(v(ee))
      );
    }, { immediate: !1 }), gt(() => pe());
    const W = (T) => {
      s.debug && console.log(T);
    }, J = () => {
      p.value = Object.values(f.value.inputs).map((T) => ({
        value: T.default ?? null
      })), console.log(p.value);
    }, Q = (T, v) => {
      p.value[T] && (p.value[T].value = v);
    }, X = () => {
      try {
        return u.calculatePanelsFromFields(p.value);
      } catch (T) {
        return l.value.inputShapes.length = 0, console.error(T), null;
      }
    }, ce = () => {
      try {
        return u.calculateHardwareFromFields(p.value);
      } catch (T) {
        return console.error(T), null;
      }
    }, pe = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (W(`SmartCut - Formula calculator init from url: ${s.url}`), u = new wn({ url: s.url }), f.value = await u.getSpec()) : s.spec && (W("SmartCut - Formula calculator init with JSON"), u = new wn({ spec: s.spec }), f.value = await u.getSpec()), J(), S.value = !0;
    };
    return (T, v) => {
      var D, K;
      return y(), I(xe, null, [
        a.value === "development" && ih ? (y(), I("div", Kc, [
          v[1] || (v[1] = $("div", null, "Developer information", -1)),
          ye(C(t), {
            data: [m.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        $("div", Zc, [
          (D = f.value) != null && D.projectName ? (y(), ge(ft, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: h.value,
            "onUpdate:value": v[0] || (v[0] = (A) => h.value = A)
          }, null, 8, ["value"])) : G("", !0),
          (y(!0), I(xe, null, Ee((K = f.value) == null ? void 0 : K.inputs, (A, N, U) => {
            var ee;
            return y(), ge(ft, {
              id: "formula-field-" + U,
              key: U,
              type: A.type,
              label: A.label,
              placeholder: A.label,
              min: A.min ?? 0,
              max: A.max ?? null,
              default: A.default ?? 0,
              value: (ee = p.value[U]) == null ? void 0 : ee.value,
              "onUpdate:value": (O) => Q(U, O)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          w.value ? (y(), I("div", Jc, [
            $("div", Qc, te(C(n)("Hardware")), 1),
            (y(!0), I(xe, null, Ee(w.value, (A, N) => (y(), I("div", { key: N }, te(A.name) + " x" + te(A.q) + " = " + te(i.formatPrice(A.totalCost)), 1))), 128)),
            $("div", eh, te(C(n)("Hardware total")) + " = " + te(i.formatPrice(F.value)), 1)
          ])) : G("", !0),
          $("div", th, te(C(n)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), $h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: sh }, Symbol.toStringTag, { value: "Module" })), nh = { id: "smartcut-notices" }, rh = { class: "content" }, oh = ["onClick"], lh = ["innerHTML"], ah = /* @__PURE__ */ Me({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const e = i, { notices: t, dismissNotice: s } = ps(), n = H({}), r = Z(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Wt("font-awesome-icon");
      return y(), ge(xn, { to: "body" }, [
        $("div", nh, [
          ye(Vr, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ce(["notices-container", e.position])
          }, {
            default: fs(() => [
              (y(!0), I(xe, null, Ee(C(t), (u) => (y(), I("div", {
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
                $("div", rh, [
                  $("div", {
                    class: "message",
                    onClick: (f) => u.action()
                  }, te(u.message), 9, oh),
                  $("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, lh)
                ]),
                u.persistent ? G("", !0) : (y(), ge(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (f) => C(s)(u.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ah }, Symbol.toStringTag, { value: "Module" }));
export {
  si as A,
  oo as B,
  Th as C,
  ro as D,
  Dh as E,
  $h as F,
  xs as I,
  Ah as N,
  Ki as O,
  jt as S,
  oi as _,
  mi as a,
  ne as b,
  Et as c,
  Oe as d,
  Lh as e,
  Ml as f,
  Ch as g,
  Ot as h,
  bh as i,
  wh as j,
  xh as k,
  Sh as l,
  Ph as m,
  kh as n,
  Hi as o,
  x as p,
  Zt as q,
  yh as r,
  Lo as s,
  Ih as t,
  mh as u,
  gh as v,
  St as w,
  wt as x,
  qt as y,
  Ks as z
};
