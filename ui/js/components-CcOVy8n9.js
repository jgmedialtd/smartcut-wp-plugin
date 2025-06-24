var Rr = Object.defineProperty;
var Fr = (i, t, e) => t in i ? Rr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => Fr(i, typeof t != "symbol" ? t + "" : t, e);
import { F as ss, i as _r, g as Pe, d as Ri, a as Dt, c as es, b as kn, e as Ws, f as Je, v as ps, t as Mi, h as Mr, s as qr, j as Br, o as jr, k as Hr, l as Gr, P as Nr } from "./vendor-BJAM8w7x.js";
import { i as Cn, B as Wr } from "./vendor-i18n-BWRGKi6w.js";
import { d as Ee, c as T, o as b, F as be, r as Ae, n as Ce, a as Se, b as E, w as fs, t as re, v as gs, e as U, f as Ur, g as Y, h as se, i as Te, j as rt, k as nt, l as yi, m as ui, u as P, p as qt, q as Vr, s as ve, x as ms, y as Ht, z as ye, A as zr, B as Tt, C as In, D as Yr, E as Xr, G as Kr, H as vt, I as Zr, T as Jr, J as vs, K as Qr, L as Us, M as eo, N as to, O as io, P as so, Q as no, R as ro } from "./vendor-vue-BEddmBnE.js";
import { u as Pn, a as ys, b as bs, c as oo, d as lo, e as ao } from "./composables-Cgj4v6lk.js";
import { a as Tn, b as Dn, l as it, c as qi, d as Bi, s as Me, r as dt, e as hi, f as Ln, g as co, h as uo, i as ho, p as po, S as fo, j as go, k as mo } from "./vendor-d3-B-JATA3m.js";
const vo = (i, t, e) => {
  const s = i[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((n, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      r.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + t + (t.split("/").length !== e ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function Gt(i) {
  return !(!i || typeof i != "string");
}
function yo(i) {
  return !Gt(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function ns(i) {
  return !Gt(i) || !i || typeof i != "string" ? "" : i.toLowerCase();
}
function rs(i) {
  return Gt(i) ? i.trim().split(" ").map((t) => Qt(t)).join(" ") : "";
}
function Qt(i) {
  return Gt(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function ws(i) {
  return Gt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), i.trim()) : "";
}
function bo(i) {
  return Gt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function wo(i, t = 100) {
  return Gt(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let $n = Cn;
function So(i) {
  $n = i;
}
function $e(i, t) {
  var s;
  if (typeof process < "u" && ((s = process == null ? void 0 : process.env) != null && s.VITEST))
    return i;
  const e = $n.t(i, { ...t });
  return !e || e === i ? i : Qt(e);
}
const xo = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BbNG1czh.js"), "../translation/cs.json": () => import("./cs-DDy2hFdq.js"), "../translation/da.json": () => import("./da-C8TuYAC4.js"), "../translation/de.json": () => import("./de-B2-0FShO.js"), "../translation/el.json": () => import("./el-CEH9E9ZM.js"), "../translation/en.json": () => import("./en-BYyV2r6b.js"), "../translation/es.json": () => import("./es-BDRDjdDH.js"), "../translation/fi.json": () => import("./fi-BWTr1NcI.js"), "../translation/fr.json": () => import("./fr-BXNPnzBo.js"), "../translation/hi.json": () => import("./hi-Bak-2JPI.js"), "../translation/hr.json": () => import("./hr-B3CJUFsU.js"), "../translation/hu.json": () => import("./hu-BjBJ-XHT.js"), "../translation/id.json": () => import("./id-DaVOnHR4.js"), "../translation/it.json": () => import("./it-CQyVrP0H.js"), "../translation/ja.json": () => import("./ja-BU_s0YAN.js"), "../translation/ko.json": () => import("./ko-D1pGy1LV.js"), "../translation/ms.json": () => import("./ms-o0h-SCNu.js"), "../translation/nl.json": () => import("./nl-DtApX-7e.js"), "../translation/no.json": () => import("./no-DXg8PtNy.js"), "../translation/pl.json": () => import("./pl-CiUsY_Lw.js"), "../translation/pt.json": () => import("./pt-Df7W2tv2.js"), "../translation/ro.json": () => import("./ro-BM6R2_rT.js"), "../translation/ru.json": () => import("./ru-s0FC8pIo.js"), "../translation/sk.json": () => import("./sk-C8I9EMGr.js"), "../translation/sv.json": () => import("./sv-Chw58JBw.js"), "../translation/th.json": () => import("./th-DdeGegci.js"), "../translation/tr.json": () => import("./tr-dk88BIZO.js"), "../translation/uk.json": () => import("./uk-UVCEk26q.js"), "../translation/vi.json": () => import("./vi-CHv9EhQ8.js"), "../translation/zh.json": () => import("./zh-CLzeqcgZ.js") }), ji = Object.keys(xo).map((i) => {
  const t = i.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((i) => i !== "");
ji.length === 0 ? console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.") : console.log(`[i18n] Detected languages: ${ji.join(", ")}`);
const Vs = "en", Kt = Cn.createInstance();
function W(i, t) {
  var n, r;
  if (typeof process < "u" && (((n = process == null ? void 0 : process.env) == null ? void 0 : n.NODE_ENV) === "test" || (r = process == null ? void 0 : process.env) != null && r.VITEST))
    return i;
  if (!Kt.isInitialized) {
    const o = Array.isArray(i) ? i.join(", ") : String(i);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${o}. Returning key.`), o;
  }
  let e = Kt.t(i, t);
  const s = Array.isArray(i) ? i[0] : i;
  return e === s && (console.warn(`[i18n] Translation not found - Key: "${s}"`), console.trace()), e = typeof e == "string" ? e : String(e), Qt(e);
}
const Pi = {}, ko = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (i, t, e) => {
    try {
      if (Pi[i]) {
        e(null, Pi[i]);
        return;
      }
      console.log(`[i18n] Attempting to load local module for language: ${i}`);
      const s = await vo(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BbNG1czh.js"), "../translation/cs.json": () => import("./cs-DDy2hFdq.js"), "../translation/da.json": () => import("./da-C8TuYAC4.js"), "../translation/de.json": () => import("./de-B2-0FShO.js"), "../translation/el.json": () => import("./el-CEH9E9ZM.js"), "../translation/en.json": () => import("./en-BYyV2r6b.js"), "../translation/es.json": () => import("./es-BDRDjdDH.js"), "../translation/fi.json": () => import("./fi-BWTr1NcI.js"), "../translation/fr.json": () => import("./fr-BXNPnzBo.js"), "../translation/hi.json": () => import("./hi-Bak-2JPI.js"), "../translation/hr.json": () => import("./hr-B3CJUFsU.js"), "../translation/hu.json": () => import("./hu-BjBJ-XHT.js"), "../translation/id.json": () => import("./id-DaVOnHR4.js"), "../translation/it.json": () => import("./it-CQyVrP0H.js"), "../translation/ja.json": () => import("./ja-BU_s0YAN.js"), "../translation/ko.json": () => import("./ko-D1pGy1LV.js"), "../translation/ms.json": () => import("./ms-o0h-SCNu.js"), "../translation/nl.json": () => import("./nl-DtApX-7e.js"), "../translation/no.json": () => import("./no-DXg8PtNy.js"), "../translation/pl.json": () => import("./pl-CiUsY_Lw.js"), "../translation/pt.json": () => import("./pt-Df7W2tv2.js"), "../translation/ro.json": () => import("./ro-BM6R2_rT.js"), "../translation/ru.json": () => import("./ru-s0FC8pIo.js"), "../translation/sk.json": () => import("./sk-C8I9EMGr.js"), "../translation/sv.json": () => import("./sv-Chw58JBw.js"), "../translation/th.json": () => import("./th-DdeGegci.js"), "../translation/tr.json": () => import("./tr-dk88BIZO.js"), "../translation/uk.json": () => import("./uk-UVCEk26q.js"), "../translation/vi.json": () => import("./vi-CHv9EhQ8.js"), "../translation/zh.json": () => import("./zh-CLzeqcgZ.js") }), `../translation/${i}.json`, 3);
      Pi[i] = s.default, console.log(`[i18n] Successfully loaded and cached local module for language: ${i}`), e(null, Pi[i]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${i}'. Error: ${s.message}`;
      console.warn(n, s), e(s, null);
    }
  }
};
async function Co() {
  return So(Kt), await Kt.use(Wr).use(ko).init({
    debug: !1,
    fallbackLng: Vs,
    supportedLngs: ji.length > 0 ? ji : [Vs],
    interpolation: {
      format: function(i, t) {
        return t === "c" ? rs(i) : t === "sc" ? Qt(i) : i;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), console.log("[i18n] Initialized. Detected language:", Kt.language), Kt;
}
const Rh = Co().catch((i) => {
  console.error("[i18n] CRITICAL: Initialization failed.", i);
}), Xt = 1e-10, Io = 10, Po = Number.MAX_SAFE_INTEGER, To = 4294967295, Ge = (i) => typeof i == "number" && Number.isFinite(i), Fi = (i) => Array.isArray(i) && i.length > 0;
function ai(i, t, e = Xt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Do = {
  greaterThan: (i, t, e = Xt) => !Ge(i) || !Ge(t) ? !1 : ai(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Xt) => !Ge(i) || !Ge(t) ? !1 : ai(i, t, e) >= 0,
  lessThan: (i, t, e = Xt) => !Ge(i) || !Ge(t) ? !1 : ai(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Xt) => !Ge(i) || !Ge(t) ? !1 : ai(i, t, e) <= 0,
  equalTo: (i, t, e = Xt) => !Ge(i) || !Ge(t) ? !1 : ai(i, t, e) === 0
};
function Lo(i) {
  return Ge(i) ? Number.isInteger(i) ? i : Number(i.toFixed(Io)) : !1;
}
function $o(i) {
  if (!Ge(i) || i < 0 || i > Po)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (To + 1) * i);
}
function Ao(i, t) {
  if (!Fi(i))
    throw new Error("Invalid array parameter");
  if (!Ge(t) || t < 0 || t > i.length)
    throw new Error("Invalid size parameter");
  const e = i.slice(), s = i.length - t;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e.slice(s);
}
class Ti {
  static calculateMean(t) {
    if (!Fi(t))
      throw new Error("Invalid input array");
    return t.reduce((e, s) => e + s, 0) / t.length;
  }
  static calculateStandardDeviation(t, e = null) {
    if (!Fi(t))
      throw new Error("Invalid input array");
    const s = e ?? this.calculateMean(t), n = t.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / t.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(t) {
    if (!Fi(t))
      throw new Error("Invalid input array");
    const e = this.calculateMean(t);
    if (e === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(t, e) / e;
  }
}
const pe = {
  ...Do,
  isNumber: Ge,
  round: Lo,
  getRandom: $o,
  getRandomSample: Ao,
  calculateStandardDeviation: Ti.calculateStandardDeviation.bind(Ti),
  calculateCoefficientOfVariation: Ti.calculateCoefficientOfVariation.bind(Ti)
}, Eo = 10, Oo = 0;
class Hi extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
const ci = {
  "½": "1/2",
  "⅓": "1/3",
  "¼": "1/4",
  "⅔": "2/3",
  "¾": "3/4",
  "⅕": "1/5",
  "⅖": "2/5",
  "⅗": "3/5",
  "⅘": "4/5",
  "⅙": "1/6",
  "⅚": "5/6",
  "⅛": "1/8",
  "⅜": "3/8",
  "⅝": "5/8",
  "⅞": "7/8"
};
function S(i) {
  var o;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && ((o = i.o) == null ? void 0 : o.numberFormat) !== "fraction" ? null : "";
  const t = i.o ?? {}, e = i.nf ?? (t == null ? void 0 : t.numberFormat) ?? "decimal", s = i.dp ?? (t == null ? void 0 : t.decimalPlaces) ?? Eo, n = i.pl ?? (t == null ? void 0 : t.parseLocale) ?? !1, r = i.fr ?? (t == null ? void 0 : t.fractionRoundTo) ?? Oo;
  try {
    const l = An(i.v, n);
    return l === null || l === "" ? e === "decimal" ? null : "" : e === "decimal" ? Ro(l, s) : Fo(l, r);
  } catch (l) {
    throw l instanceof Hi ? l : new Hi(
      `Failed to convert number format: "${i.v}" to ${e}. ${l.message}`
    );
  }
}
function Ro(i, t) {
  let e;
  if (typeof i == "number" ? e = i : e = new ss(i).valueOf(), typeof t == "number") {
    const s = Math.pow(10, t);
    return Math.round(e * s) / s;
  }
  return e;
}
function Fo(i, t) {
  const e = new ss(i);
  if (t > 0) {
    const s = e.mul(t), n = Math.round(s.valueOf());
    return new ss(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function _o(i, t, e = !1) {
  const s = i == null || String(i).trim() === "";
  if (e && s)
    return { value: null, valid: !1, message: "field_required" };
  if (!e && s)
    return { value: null, valid: !0 };
  const n = String(i);
  try {
    const r = An(n, !0), o = parseFloat(r ?? ""), l = r !== null && r !== "" && !isNaN(o) && isFinite(o);
    return {
      value: l ? o : i,
      valid: l,
      message: l ? void 0 : "invalid_number",
      messageData: l ? void 0 : "Could not parse as decimal."
    };
  } catch (r) {
    return {
      value: i,
      valid: !1,
      message: "invalid_number",
      messageData: r.message || "Parsing error"
    };
  }
  return {
    value: i,
    valid: !1,
    message: "invalid_format",
    messageData: t
  };
}
function Mo(i = "en-US") {
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
function _i(i) {
  if (i == null || i === "") return null;
  const t = String(i).trim();
  if (!t) return null;
  try {
    const { thousandsSeparator: e, decimalSeparator: s } = Mo(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch (e) {
    throw new Hi(`Failed to parse locale number: "${i}". ${e.message || "Parsing error"}`);
  }
}
function Ss(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  if (!t) return !1;
  const e = Object.keys(ci).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${e}]|[${e}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(t);
}
function An(i, t = !1) {
  if (i == null || i === "") return null;
  let e = String(i).trim();
  if (!e) return null;
  const s = Object.keys(ci).join("");
  e = e.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(ci).join(""), r = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), l = e.match(r), a = e.match(o);
    if (l) {
      const u = l[1], d = l[2], v = l[3], h = ci[v];
      if (h)
        return `${u}${d} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${v}`);
    } else if (a) {
      const u = a[1] || "", d = a[2], v = ci[d];
      if (v)
        return `${u}${v}`;
      throw new Error(`Unknown vulgar fraction character: ${d}`);
    } else if (Ss(e)) {
      let u = "";
      e.startsWith("-") && (u = "-", e = e.substring(1).trim());
      const d = e.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((d.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return u + d;
    } else {
      t ? (e = e.replace(/[^0-9,. -]/g, ""), e = e.replace(/\s/g, "")) : (e = e.replace(/[^0-9.-]/g, ""), e = e.replace(/,/g, "")), e.startsWith(".") && (e = "0" + e), e.startsWith("-.") && (e = "-0." + e.substring(2));
      const u = e.split(".");
      u.length > 2 && (e = u[0] + "." + u.slice(1).join(""));
      const d = t ? _i(e) : parseFloat(e);
      return d === null || isNaN(d) || !isFinite(d) ? null : d.toString();
    }
  } catch (n) {
    throw new Hi(
      `Failed to clean numeric input: "${i}". ${n.message || "Cleaning error"}`
    );
  }
}
function Fh(i, t, e = null, s = null) {
  if (i && !(!Ie(i) && !Bt(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys)
      if (typeof i[n] == "object" && i[n] !== null)
        for (const r in i[n])
          Object.prototype.hasOwnProperty.call(i[n], r) && (i[n][r] = S({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s }));
      else
        i[n] = S({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
  }
}
const Gi = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function zs(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Ys(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Xs(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const ge = (i, t, e) => t in i ? i[t] : (console.warn(Gi.missingProperty(String(t), e)), null), Di = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, Yt = (i, t) => {
  if (!zs(i) || !zs(t))
    return console.warn(Gi.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, tt = (i, t) => {
  const e = ge(i, "id", "first item"), s = ge(t, "id", "second item");
  if (e === null || s === null || e === void 0 || s === void 0) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function ut(i) {
  const t = Array.isArray(i[0]) ? i.map(([e, s]) => ({ key: e, direction: s })) : i;
  return (e, s) => {
    for (const { key: n, direction: r } of t) {
      const o = ge(e, n, "first item"), l = ge(s, n, "second item");
      if (!(o === null || l === null) && o !== l)
        return r === "desc" ? o < l ? 1 : -1 : o < l ? -1 : 1;
    }
    return 0;
  };
}
const di = {
  // Dimension-based sorts
  WDLD: ut([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: ut([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: ut([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: ut([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: ut([["w", "desc"]]),
  LD: ut([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Di(
    ut([["l", "desc"]]),
    tt
  ),
  WDIDA: Di(
    ut([["w", "desc"]]),
    tt
  ),
  // Area-based sorts
  AD: (i, t) => -Yt(i, t),
  AA: Yt,
  AAID: Di(
    Yt,
    tt
  ),
  ADID: Di(
    (i, t) => -Yt(i, t),
    tt
  ),
  // ID sorts
  ID: tt,
  IDDesc: (i, t) => -tt(i, t),
  StockID: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    return !e || !s ? 0 : tt(e, s);
  },
  StockIDAD: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = tt(e, s);
    return n !== 0 ? n : -Yt(i, t);
  },
  // Position sorts
  YX: ut([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: ut([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (i, t) => {
    const e = ge(i, "placementOrder", "first item") ?? 0, s = ge(t, "placementOrder", "second item") ?? 0;
    return e - s;
  },
  typePlacementOrder: (i, t) => {
    const e = ge(i, "offcut", "first item"), s = ge(t, "offcut", "second item"), n = ge(i, "placementOrder", "first item") ?? 0, r = ge(t, "placementOrder", "second item") ?? 0;
    return e && !s ? 1 : !e && s ? -1 : n - r;
  },
  typeID: (i, t) => {
    const e = ge(i, "offcut", "first item"), s = ge(t, "offcut", "second item");
    return e && !s ? 1 : !e && s ? -1 : tt(i, t);
  },
  stockIDTypePlacementOrder: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = tt(e, s);
    if (n !== 0) return n;
    const r = ge(i, "offcut", "first item"), o = ge(t, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = ge(i, "placementOrder", "first item") ?? 0, a = ge(t, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!(e != null && e.id) || !(s != null && s.id)) return 0;
    const n = tt(e, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in t) {
      const r = ge(i, "placementOrder", "first item") ?? 0, o = ge(t, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, t) => {
    const e = ge(i, "placementOrder", "first item") ?? 0, s = ge(t, "placementOrder", "second item") ?? 0, n = e - s;
    if (n !== 0) return n;
    const r = ge(i, "groupPlacementOrder", "first item") ?? 0, o = ge(t, "groupPlacementOrder", "second item") ?? 0;
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
    return !Ys(i) || !Ys(t) ? (console.warn(Gi.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Xs(t) || !Xs(e) ? (console.warn(Gi.missingLongSide), 0) : e[i] === t[i] ? -Yt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function qo(i) {
  return Ie(i) || Ze(i) || Ds(i);
}
function Bo(i, t, e) {
  var r, o;
  if (!e) return !0;
  const s = (r = t == null ? void 0 : t.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function jo(i, t, e) {
  return e ? !C(i.t) || !C(t.t) ? !1 : Ze(i) ? pe.equalTo(S({ v: i.t }), S({ v: t.t })) : i.t === t.t : !0;
}
function Ho(i, t, e) {
  return (e == null ? void 0 : e.stockType) !== "linear" || !Ze(i) && !Ie(i) ? !0 : as(i, 0, t) && pe.equalTo(S({ v: i.w }), S({ v: t.w })) || as(i, 1, t) && pe.equalTo(S({ v: i.l }), S({ v: t.w }));
}
function Go(i, t, e, s = 0) {
  const n = Ie(i[0]), r = e.stockType;
  if (i.some((y) => C(y.stockLock) && y.stockLock.length))
    return { stockList: t, shapeList: i, unusableShapes: [], unusableStock: [], newIssues: [] };
  t = t.filter((y) => n || y.autoAdd === !0 || C(y.q) && y.q > 0);
  const l = t.some((y) => C(y.material)), a = t.some((y) => C(y.t)), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), f = [];
  let m = s;
  for (const y of i) {
    const F = t.map((j, Z) => {
      const x = qo(y) && zi(y, j, void 0, e), k = Bo(y, j, l), A = jo(y, j, a), K = Ho(y, j, e);
      return {
        stockItem: j,
        stockIndex: Z,
        fit: x,
        material: k,
        thickness: A,
        width: K,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: x && k && A && (r !== "linear" || K)
      };
    });
    y.stockMatch = {
      fit: F.some((j) => j.fit),
      material: !l || F.some((j) => j.material),
      thickness: !a || F.some((j) => j.thickness),
      width: r !== "linear" || F.some((j) => j.width)
    };
    const _ = F.filter((j) => j.satisfiesAll), M = _.length > 0;
    if (!n && M) {
      const j = _.map((Z) => Z.stockItem.getParentID());
      y.stockLock = j, j.forEach((Z) => u.add(Z));
    }
    y.stockMatch.fit ? M || (l && !y.stockMatch.material && (h.add(y), f.push(new le({
      category: ["part", "stock"],
      item: y,
      field: [["material"]],
      index: [m],
      message: "errors.validation.no_matching_stock_material"
    }))), a && !y.stockMatch.thickness && (h.add(y), f.push(new le({
      category: ["part", "stock"],
      item: y,
      field: [["t"]],
      index: [m],
      message: "errors.validation.no_matching_stock_thickness"
    }))), r === "linear" && !y.stockMatch.width && (v.add(y), f.push(new le({
      category: ["part", "stock"],
      item: y,
      field: [["w"]],
      index: [m],
      message: "errors.validation.no_matching_stock_width"
    }))), y.stockMatch.material && y.stockMatch.thickness && (r !== "linear" || y.stockMatch.width) && (h.add(y), f.push(new le({
      category: ["part", "stock"],
      item: y,
      field: [["material"], ["t"]],
      index: [m],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (d.add(y), f.push(new le({
      category: ["part", "stock"],
      item: y,
      field: [["l"], ["w"]],
      index: [m],
      message: "errors.validation.will_not_fit"
    }))), m++;
  }
  i.forEach((y) => y.stockMatch = null);
  let I, q;
  return n ? (I = i.filter((y) => d.has(y) || v.has(y) || h.has(y)).sort(di.ID), q = []) : (I = i.filter((y) => d.has(y) || v.has(y) || h.has(y) || !y.stockLock || !y.stockLock.length).sort(di.ID), q = t.filter((y) => !u.has(y.parentID)).sort(di.ID), t = t.filter((y) => et(y)).filter((y) => u.has(y.parentID)), i = i.filter((y) => {
    var F;
    return !d.has(y) && !v.has(y) && !h.has(y) && ((F = y == null ? void 0 : y.stockLock) == null ? void 0 : F.length);
  })), {
    stockList: t,
    unusableStock: q,
    shapeList: i,
    unusableShapes: I,
    newIssues: f
  };
}
class le {
  constructor({
    item: t = null,
    message: e = "",
    field: s = [],
    index: n = null,
    listId: r = null,
    issues: o = null,
    type: l = "error",
    category: a = null,
    throwError: u = !1,
    shouldTranslate: d = !0
  }) {
    c(this, "message");
    c(this, "identifier");
    c(this, "field");
    c(this, "index");
    c(this, "listId");
    c(this, "type");
    c(this, "category");
    this.message = d ? $e(e) : e, this.field = s.map((h) => [...h]), this.index = n ? [...n] : [], this.listId = r ? [...r] : [], this.type = l, this.category = a, this.identifier = this.determineIdentifier(t, this.index), this.addToItemIssues(t), Array.isArray(o) && o.push(this);
    const v = `issue created for ${Yl(t)}: ${this.identifier || "N/A"} - ${this.field.map((h) => h.join(".")).join(", ")}`;
    if (u)
      throw new Error(v);
  }
  determineIdentifier(t, e) {
    var n, r, o;
    if (!t) return "";
    const s = t;
    return (n = s.name) != null && n.length ? s.name.toLocaleUpperCase() : (r = s.id) != null && r.length ? s.id : (o = s.parentID) != null && o.length ? s.parentID : typeof e[0] == "number" ? String(e[0] + 1) : "";
  }
  addToItemIssues(t) {
    if (!t) return;
    const e = t;
    "issues" in e && Array.isArray(e.issues) && e.issues.push(this);
  }
  getHumanReadableIndexes() {
    return this.index.length ? this.index.map((t) => {
      const e = typeof t == "number" ? t : parseInt(String(t), 10);
      return isNaN(e) ? "" : String(e + 1);
    }).filter(Boolean).join(",") : "";
  }
  isMatch(t, e) {
    const s = this.field.some((r) => _r(r, t)), n = this.index.includes(e);
    return s && n;
  }
}
const No = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Wo(i) {
  return No[i] ?? i;
}
function Pt(i) {
  return i.filter((t) => t.type === "error");
}
function Uo(i, t) {
  return typeof i == "object" && i !== null && t in i;
}
function En(i) {
  return Uo(i, "issues") && Array.isArray(i.issues);
}
function Ks(i, t, e = !1) {
  var r;
  if (!En(i) || !((r = i.issues) != null && r.length))
    return !1;
  const s = e ? "warning" : "error";
  return i.issues.filter((o) => o.type === s).some((o) => {
    var l;
    return (l = o.field) != null && l.length ? o.field.some((a) => a.every((u, d) => u === Wo(t[d]))) : !1;
  });
}
const ii = ({
  item: i,
  field: t,
  index: e,
  newIssues: s,
  min: n = null,
  max: r = null,
  required: o = !1,
  allowZero: l = !0,
  isWarning: a = !1,
  category: u = []
}) => {
  if (!i)
    throw new Error("Item is required for validation");
  let d = Pe(i, t);
  try {
    if (d = S({ v: d }), o && (d === null || d === ""))
      return new le({
        item: i,
        message: $e("errors.validation.not_set", {
          0: qe[t.join(".")]
        }),
        shouldTranslate: !1,
        field: [t],
        index: [e],
        type: a ? "warning" : "error",
        issues: s,
        category: u
      }), null;
    if (!l && d === 0)
      return new le({
        item: i,
        message: $e("errors.validation.greater_than", {
          0: qe[t.join(".")],
          1: 0
        }),
        shouldTranslate: !1,
        field: [t],
        index: [e],
        type: a ? "warning" : "error",
        issues: s,
        category: u
      }), 0;
  } catch {
    return On({
      item: i,
      field: t,
      value: Pe(i, t),
      index: e,
      issues: s,
      isWarning: a ?? !1
    }), null;
  }
  return Vo({ item: i, field: t, value: d, index: e, issues: s, min: n, isWarning: a ?? !1 }), zo({ item: i, field: t, value: d, index: e, issues: s, max: r, isWarning: a ?? !1 }), d;
}, On = ({
  item: i,
  field: t,
  value: e,
  index: s,
  issues: n,
  isWarning: r
}) => {
  new le({
    item: i,
    message: $e("errors.validation.not_understood", {
      0: t.join("."),
      1: e
    }),
    shouldTranslate: !1,
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, Vo = ({
  item: i,
  field: t,
  value: e,
  index: s,
  issues: n,
  min: r,
  isWarning: o
}) => {
  typeof e != "number" || typeof r != "number" || e < r && new le({
    item: i,
    message: $e("errors.validation.greater_than_or_equal", {
      0: qe[t.join(".")],
      1: r
    }),
    shouldTranslate: !1,
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, zo = ({
  item: i,
  field: t,
  value: e,
  index: s,
  issues: n,
  max: r,
  isWarning: o
}) => {
  typeof e != "number" || typeof r != "number" || e > r && new le({
    item: i,
    message: $e("errors.validation.less_than_or_equal", {
      0: qe[t.join(".")],
      1: r
    }),
    shouldTranslate: !1,
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, Rn = (i, t, e, s, n, r) => {
  const o = Pe(i, t);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new le({
      item: i,
      message: $e("errors.validation.must_be_string", {
        0: qe[t]
      }),
      shouldTranslate: !1,
      field: [[t]],
      index: [s],
      type: n ? "warning" : "error",
      issues: r
    });
    return;
  }
  const l = o.toLowerCase();
  e.includes(l) || new le({
    item: i,
    message: $e("errors.validation.must_be_values", {
      0: qe[t],
      1: e.join(", ")
    }),
    shouldTranslate: !1,
    field: [[t]],
    index: [s],
    type: n ? "warning" : "error",
    issues: r
  });
}, Yo = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ii({
    item: i,
    field: ["x"],
    index: t,
    newIssues: r,
    min: 0,
    max: e,
    isWarning: s,
    category: n
  }), r;
}, Xo = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ii({
    item: i,
    field: ["y"],
    index: t,
    newIssues: r,
    min: 0,
    max: e,
    isWarning: s,
    category: n
  }), r;
}, Ko = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ii({
    item: i,
    field: ["l"],
    index: t,
    newIssues: r,
    required: !0,
    allowZero: !1,
    min: 0,
    max: e,
    isWarning: s,
    category: n
  }), r;
}, Zo = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ii({
    item: i,
    field: ["w"],
    index: t,
    newIssues: r,
    required: !0,
    allowZero: !1,
    min: 0,
    max: e,
    isWarning: s,
    category: n
  }), r;
}, Jo = ({ item: i, index: t, max: e, isWarning: s = !1, saw: n, category: r = [] }) => {
  const o = [];
  return (n == null ? void 0 : n.cutType) === "beam" && (Pe(i, "t") || new le({
    item: i,
    message: $e("errors.saw.thickness_required_for_beam_saw"),
    shouldTranslate: !1,
    field: [["t"]],
    index: [t],
    type: "error",
    issues: o,
    category: r
  })), ii({
    item: i,
    field: ["t"],
    index: t,
    newIssues: o,
    allowZero: !1,
    min: 0,
    max: e,
    isWarning: s,
    category: r
  }), o;
}, Qo = ({ item: i, index: t, isWarning: e = !1, category: s = [] }) => {
  const n = [], r = Pe(i, "q");
  if (r == null) return n;
  try {
    const o = S({ v: r }), l = Pe(i, "autoAdd");
    o <= 0 && l !== !0 && new le({
      item: i,
      message: $e("errors.validation.greater_than_or_equal", {
        0: qe.q,
        1: 0
      }),
      shouldTranslate: !1,
      field: [["q"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: n,
      category: s
    });
  } catch {
    On({
      item: i,
      field: ["q"],
      value: r,
      index: t,
      issues: n,
      isWarning: e
    });
  }
  return n;
}, el = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "orientationLock", ["l", "w"], t, e, s), s;
}, tl = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "grain", ["l", "w"], t, e, s), s;
}, il = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "banding");
  return n != null && (typeof n != "object" || n === null) && new le({
    item: i,
    message: $e("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, sl = ({ item: i, index: t, isWarning: e = !1, category: s = [] }) => {
  const n = [], r = Pe(i, "customData");
  if (r == null) return n;
  if (typeof r != "object" || r === null)
    return new le({
      item: i,
      message: $e("errors.validation.must_be_object", {
        0: qe.customData
      }),
      shouldTranslate: !1,
      field: [["customData"]],
      index: [t],
      issues: n,
      category: s
    }), n;
  for (const [, o] of Object.entries(r))
    if (o != null) {
      const l = typeof o;
      ["string", "number", "boolean"].includes(l) || new le({
        item: i,
        message: $e("errors.validation.must_be_string_number_boolean", {
          0: qe.customData
        }),
        shouldTranslate: !1,
        field: [["customData"]],
        index: [t],
        type: e ? "warning" : "error",
        issues: n,
        category: s
      });
    }
  return n;
}, nl = ({
  item: i,
  partTrim: t,
  index: e,
  isWarning: s = !1
}) => {
  const n = [];
  if (!t) return n;
  const r = Pe(i, "l"), o = Pe(i, "w");
  if (!r || !o) return n;
  try {
    const l = S({ v: t }), a = S({ v: r }), u = S({ v: o }), d = a - l * 2, v = u - l * 2;
    (d <= 0 || v <= 0) && new le({
      item: i,
      message: $e("errors.trim.too_much", {
        0: "part",
        1: l,
        z: `${d}x${v}`
      }),
      shouldTranslate: !1,
      field: [["l"], ["w"], ["trim"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: n,
      category: ["part"]
    });
  } catch {
  }
  return n;
}, rl = ({
  item: i,
  index: t,
  min: e = null,
  max: s = null,
  isWarning: n = !1,
  category: r = []
}) => {
  const o = [], l = Pe(i, "l"), a = Pe(i, "w"), u = Pe(i, "trim");
  if (!l || !a || !u) return o;
  if ((!et(i) || et(i) && !("trimmed" in i && i.trimmed)) && typeof u == "object" && u !== null) {
    for (const v of Object.keys(u))
      ii({
        item: i,
        field: ["trim", v],
        index: t,
        newIssues: o,
        min: e,
        max: s,
        isWarning: n,
        category: r
      });
    if (!o.length)
      try {
        const v = S({ v: l }), h = S({ v: a }), f = (y) => {
          if (y == null) return 0;
          if (typeof y == "number" || typeof y == "string")
            try {
              return S({ v: y }) || 0;
            } catch {
              return 0;
            }
          return 0;
        }, m = {
          x1: f(Pe(u, "x1")),
          x2: f(Pe(u, "x2")),
          y1: f(Pe(u, "y1")),
          y2: f(Pe(u, "y2"))
        }, I = m.x1 + m.x2, q = m.y1 + m.y2;
        I >= v && new le({
          item: i,
          message: $e("errors.trim.too_much", {
            0: `${qe.x1.toUpperCase()} + ${qe.x2.toUpperCase()}`,
            1: qe.l,
            2: v
          }),
          shouldTranslate: !1,
          field: [["trim", "x1"], ["trim", "x2"]],
          index: [t],
          type: n ? "warning" : "error",
          issues: o,
          category: r
        }), q >= h && new le({
          item: i,
          message: $e("errors.trim.too_much", {
            0: `${qe.y1.toUpperCase()} + ${qe.y2.toUpperCase()}`,
            1: qe.w,
            2: h
          }),
          shouldTranslate: !1,
          field: [["trim", "y1"], ["trim", "y2"]],
          index: [t],
          type: n ? "warning" : "error",
          issues: o,
          category: r
        });
      } catch {
      }
  }
  return o;
}, ol = ({
  item: i,
  inputStockList: t,
  saw: e,
  partTrim: s = 0,
  index: n
}) => {
  var v;
  const r = [], o = e.stockType, l = Pe(i, "q"), a = Pe(i, "l"), u = Pe(i, "w");
  return !l || !a || !u || ("applyPartTrim" in i && typeof i.applyPartTrim == "function" && i.applyPartTrim(s, o), En(i) && ((v = i.issues) != null && v.length)) || Go([i], t, e, n).newIssues.forEach((h) => {
    r.push(h);
  }), r;
}, ll = ({ item: i, index: t }) => {
  const e = Pe(i, "machining");
  e && "validateEverything" in e && e.validateEverything(i, t);
}, Ye = {
  customData: sl,
  banding: il,
  partTrim: nl,
  trim: rl,
  x: Yo,
  y: Xo,
  l: Ko,
  w: Zo,
  t: Jo,
  q: Qo,
  orientationLock: el,
  grain: tl,
  stockMatch: ol,
  machining: ll
};
function os(i) {
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
const _t = [null, void 0, "none", ""], st = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: _t
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: _t
    },
    roll: {
      guillotine: ["w"],
      efficiency: _t
    },
    linear: {
      guillotine: _t,
      efficiency: _t
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
function al(i) {
  var t;
  return ((t = st.cutTypes) == null ? void 0 : t[i]) ?? _t;
}
function cl(i, t) {
  var e, s;
  return ((s = (e = st.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? _t;
}
function ul(i) {
  var t;
  return ((t = st.cutTypes) == null ? void 0 : t[i]) ?? [];
}
function hl(i, t) {
  var e, s;
  return ((s = (e = st.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? [];
}
function ts() {
  return st.stockTypes;
}
function Fn(i) {
  return st.stockTypes.includes(i);
}
function _n(i, t) {
  return al(i).includes(t);
}
function Mn(i, t, e) {
  return cl(i, t).includes(e);
}
function mt(i, t, e, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!xs(i)) {
    console.error($e(e, s));
    return;
  }
  new le({
    category: ["saw"],
    item: i,
    field: Array.isArray(t) ? t.map((n) => [n]) : [[t]],
    message: $e(e, s),
    shouldTranslate: !1
  });
}
class At {
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
    t = jt(t), this.issues = [], e = e ?? (t == null ? void 0 : t.stockType) ?? ts()[0], dl(this, t, e), this.bladeWidth = S({ v: t == null ? void 0 : t.bladeWidth }) ?? st.defaults.bladeWidth, this.stockType = e ?? (t == null ? void 0 : t.stockType) ?? ts()[0], Fn(this.stockType) || (this.stockType = ts()[0]), this.cutType = t == null ? void 0 : t.cutType, _n(this.stockType, this.cutType) || (this.cutType = ul(this.stockType)[0]), this.cutPreference = t == null ? void 0 : t.cutPreference, Mn(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = hl(this.stockType, this.cutType)[0]), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? st.defaults.stackHeight, this.guillotineOptions = Ri({}, t == null ? void 0 : t.guillotineOptions, st.defaults.guillotine), this.efficiencyOptions = Ri({}, t == null ? void 0 : t.efficiencyOptions, st.defaults.efficiency), this.options = Ri({}, t == null ? void 0 : t.options, st.defaults.options), this.options.minSpacing = S({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = S({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = S({ v: this.options.minSpacingDimension.minSpacing }) ?? 0;
  }
  clone() {
    const t = structuredClone(this);
    return new At(t);
  }
  //does not cater for shape dimensions
  get minSpacing() {
    return this.cutType !== "efficiency" ? 0 : this.options.minSpacing;
  }
}
function dl(i, t, e) {
  var s, n, r, o, l, a, u, d, v, h;
  if (i.issues = [], C(t == null ? void 0 : t.bladeWidth) && (t.bladeWidth = typeof t.bladeWidth == "string" ? S({ v: t.bladeWidth }) : t.bladeWidth), (Dt(t.bladeWidth) || t.bladeWidth < 0) && mt(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: t.bladeWidth ?? "none" }
  ), !Fn(e)) {
    mt(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: e }
    );
    return;
  }
  t.cutType && !_n(e, t.cutType) && mt(
    i,
    "cutType",
    "errors.saw.cutType.invalid",
    { cutType: t.cutType, stockType: e }
  ), t.cutType && t.cutPreference && !Mn(e, t.cutType, t.cutPreference) && mt(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: t.cutPreference || "none",
      cutType: t.cutType || "none",
      stockType: e
    }
  ), (t == null ? void 0 : t.cutType) === "efficiency" && ((s = t == null ? void 0 : t.options) != null && s.minSpacing && (t.options.minSpacing = typeof t.options.minSpacing == "string" ? S({ v: t.options.minSpacing }) : t.options.minSpacing, (!C(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && mt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    { minSpacing: t.options.minSpacing }
  ), (Dt(t.options.minSpacing) || t.options.minSpacing < 0) && mt(
    i,
    "options.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacing: t.options.minSpacing ?? "none" }
  )), (n = t == null ? void 0 : t.options) != null && n.minSpacingDimension && (C((o = (r = t == null ? void 0 : t.options) == null ? void 0 : r.minSpacingDimension) == null ? void 0 : o.dimension) && (t.options.minSpacingDimension.dimension = typeof t.options.minSpacingDimension.dimension == "string" ? S({ v: t.options.minSpacingDimension.dimension }) : t.options.minSpacingDimension.dimension, (Dt(t.options.minSpacingDimension.dimension) || t.options.minSpacingDimension.dimension < 0) && mt(
    i,
    "options.minSpacingDimension.dimension",
    "saw.validation.minSpacing.dimension.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.dimension ?? "none" }
  )), (a = (l = t == null ? void 0 : t.options) == null ? void 0 : l.minSpacingDimension) != null && a.minSpacing && (t.options.minSpacingDimension.minSpacing = typeof t.options.minSpacingDimension.minSpacing == "string" ? S({ v: t.options.minSpacingDimension.minSpacing }) : t.options.minSpacingDimension.minSpacing, (Dt(t.options.minSpacingDimension.minSpacing) || t.options.minSpacingDimension.minSpacing < 0) && mt(
    i,
    "options.minSpacingDimension.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.minSpacing ?? "none" }
  )), (d = (u = t == null ? void 0 : t.options) == null ? void 0 : u.minSpacingDimension) != null && d.dimension && ((h = (v = t == null ? void 0 : t.options) == null ? void 0 : v.minSpacingDimension) != null && h.minSpacing) && (!C(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && mt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    {
      dimension: t.options.minSpacingDimension.dimension,
      minSpacing: t.options.minSpacingDimension.minSpacing
    }
  )));
}
function xs(i) {
  return i instanceof At;
}
function ls(i, t = !1) {
  var o, l, a, u;
  const e = typeof i.l == "string" ? S({ v: i.l }) : i.l, s = typeof i.w == "string" ? S({ v: i.w }) : i.w;
  if (!t || !Jn(i) || Qn(i) || Ul(i) && !(i != null && i.hasTrim))
    return { l: e, w: s };
  const n = S({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + S({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = S({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + S({ v: ((u = i == null ? void 0 : i.trim) == null ? void 0 : u.y2) ?? 0 });
  return {
    l: e - (typeof n == "string" ? S({ v: n }) : n),
    w: s - (typeof r == "string" ? S({ v: r }) : r)
  };
}
function pl(i, t) {
  var e, s, n, r;
  return Jn(i) && !Qn(i) && (t.l = t.l - (S({ v: ((e = i == null ? void 0 : i.trim) == null ? void 0 : e.x1) ?? 0 }) + S({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), t.w = t.w - (S({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + S({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), t;
}
function is(i, t, e = !1) {
  let s = {
    l: S({ v: i.l }),
    w: S({ v: i.w })
  };
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return e && (s = pl(i, s)), n === t || ([s.l, s.w] = [s.w, s.l]), s;
}
function qn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function fl(i) {
  qn(i), [i.l, i.w] = [i.w, i.l];
}
function zi(i, t, e = null, s) {
  var h, f;
  if (!t || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && xs(s) ? n = s.minSpacing : s && ((h = s == null ? void 0 : s.options) != null && h.minSpacing) ? n = S({ v: s.options.minSpacing }) : Ls(t) && (n = (f = t == null ? void 0 : t.saw) == null ? void 0 : f.minSpacing);
  const r = ls(t, !0), o = ls(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(m, I) {
    return pe.equalTo(m, I) || pe.lessThanOrEqualTo(m, I - n * 2);
  }
  function a(m) {
    return l(m.l, r.l) && l(m.w, r.w);
  }
  const u = ks(i, t);
  if (i.orientationLock || e !== null) {
    const I = is(i, e ?? (u === "w" ? 1 : 0), !0);
    return a(I);
  }
  const d = is(i, 0, !0);
  if (a(d)) return !0;
  const v = is(i, 1, !0);
  return a(v);
}
function Bn(i) {
  let t = null;
  return wt(i) || Ds(i) ? t = i.direction : (Ze(i) || Ie(i)) && (t = i.orientationLock), t;
}
function ks(i, t) {
  const e = Bn(i);
  return C(e) ? !t || wt(i) ? e : Ls(t) ? gl(i, t) : e : null;
}
function gl(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!Ls(t)) throw new Error("container is not a container");
  const e = Bn(i);
  if (wt(i)) return e;
  if (!C(e)) return null;
  const s = t.getStock();
  return !s || !C(s == null ? void 0 : s.grain) ? e : e === (s == null ? void 0 : s.grain) ? "l" : "w";
}
function as(i, t = null, e = null) {
  if (!C(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), jn(i) && t || e && !zi(i, e, t))
    return !1;
  const s = ks(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function cs(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), as(i, t, e) ? (i.rot === t || fl(i), !0) : !1;
}
function ei(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !zi(i, e, t) ? !1 : cs(i, t, e);
}
function ml(i, t) {
  if (!t)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const e = ks(i, t);
  return e === "l" ? ei(i, 0) : e === "w" ? ei(i, 1) : !1;
}
function vl(i) {
  return i.orientationLock === "l" ? ei(i, 0) : i.orientationLock === "w" ? ei(i, 1) : !1;
}
function jn(i) {
  qn(i);
  const t = ls(i);
  return pe.equalTo(t.l, t.w);
}
function yl(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function pi(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function bl(i) {
  return "y";
}
function wl(i, t) {
  const e = "l", s = bl();
  if (!(i != null && i.length)) return null;
  const n = i.reduce((o, l) => o[t] + o[e] > l[t] + l[e] ? o : l);
  return i.filter((o) => o[t] === n[t] && o[e] === n[e]).sort((o, l) => o[s] - l[s])[0];
}
class Zt {
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
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = Sl(this), this.direction = xl(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
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
function kt(i, t, e, s, n = null, r = null) {
  return new Zt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function Sl(i) {
  return typeof i > "u" || !pe.isNumber(i.x1) || !pe.isNumber(i.x2) || !pe.isNumber(i.y1) || !pe.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function xl(i) {
  return typeof i > "u" || !pe.isNumber(i.x1) || !pe.isNumber(i.x2) || !pe.isNumber(i.y1) || !pe.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function kl(i, t) {
  const e = i.getCorners(), s = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (s.bottomLeftDown = kt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    e.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = kt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    0,
    e.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), e.topLeft.x > 0 && e.topLeft.y < t.w && (s.topLeftLeft = kt(
    e.topLeft.x,
    e.topLeft.y,
    0,
    e.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = kt(
    e.topLeft.x,
    e.topLeft.y,
    e.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), e.topRight.y < t.w && e.topRight.x < t.l && (s.topRightTop = kt(
    e.topRight.x,
    e.topRight.y,
    e.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = kt(
    e.topRight.x,
    e.topRight.y,
    t.l,
    e.topRight.y,
    "topRight",
    "topRightRight"
  )), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (s.bottomRightRight = kt(
    e.bottomRight.x,
    e.bottomRight.y,
    t.l,
    e.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = kt(
    e.bottomRight.x,
    e.bottomRight.y,
    e.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const Zs = {
  runTests: !1
};
try {
  typeof es < "u" && es && (es.showDiff = !0);
} catch (i) {
  console.warn("Error accessing chaiConfig, skipping configuration:", i);
}
kn("tests");
kn("timers");
let Jt;
if (typeof Ws == "function")
  Jt = Ws;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const i = new Proxy({}, { get: () => () => i });
  Jt = () => i;
}
function Hn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function Gn(i = [], t = null) {
  i != null && i.length && Hn() && Zs && Zs.runTests;
}
Je.colors = [
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
Je("logs");
Je("cuts");
Je("guillotine");
Je("results");
Je("scoring");
Je("firstShapes");
Je("calculations");
Je("subset");
Je("secondRun");
Je("stack");
const Cl = Je("errors");
Je("allStock");
Cl.color = 1;
function Il(i) {
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
class Yi extends Zt {
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
    C(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Ut(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.isGuillotine = e.isGuillotine, this.guillotineData = C(e.guillotineData) ? e.guillotineData : {}, this.ptxData = C(e.ptxData) ? e.ptxData : {}, this.isHead = C(e.isHead) ? e.isHead : !1, this.isTrim = C(e.isTrim) ? e.isTrim : !1, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1, this.distances = C(e.distances) ? e.distances : {};
  }
  //compress for saving / transfer
  compress() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const e = structuredClone(this);
    return new Yi(e);
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
        return pe.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return pe.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return pe.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return pe.lessThan(
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
    return Il(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const Pl = {
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
}, Li = {
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
class _e {
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
    const s = new _e(t ?? this.x, e ?? this.y);
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
      const s = Pl[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Li[this.corner] && (this.grid ? Li[this.corner][this.grid] && Li[this.corner][this.grid].forEach((s) => e.add(s)) : Li[this.corner].default.forEach((s) => e.add(s))), e) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => e.add(s)) : $i[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class Nt {
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
function me(i, t, e, s, n) {
  const r = Tl[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const Tl = {
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
function Dl(i, t, e) {
  var o, l, a, u, d, v;
  const s = new Nt(), n = e.toArray().sort(Nn), r = t.getBladeWidth();
  if (n.forEach((h) => {
    const f = h.corner, m = h.type;
    if (!r)
      s.addPoint(h);
    else
      switch (f) {
        case "topRight":
          s.addPoint(
            me("top", h, r, f),
            m
          ), s.addPoint(
            me("right", h, r, f),
            m
          );
          break;
        case "topLeft":
          s.addPoint(
            me("top", h, r, f),
            m
          ), s.addPoint(
            me("left", h, r, f),
            m
          );
          break;
        case "bottomRight":
          s.addPoint(
            me("bottom", h, r, f),
            m
          ), s.addPoint(
            me("right", h, r, f),
            m
          );
          break;
        case "bottomLeft":
          s.addPoint(
            me("bottom", h, r, f),
            m
          ), s.addPoint(
            me("left", h, r, f),
            m
          );
          break;
      }
    const I = s.toArray();
    if (r)
      for (let q = I.length; q--; ) {
        const y = I[q];
        e.contains(y) && s.deletePoint(y);
      }
    else
      for (let q = I.length; q--; ) {
        const y = I[q];
        for (let F = i.length; F--; ) {
          const _ = i[F];
          if (y.x === _.x && y.y === _.y) {
            s.deletePoint(y);
            break;
          }
        }
      }
  }), r) {
    const h = /* @__PURE__ */ new Set();
    let f, m, I, q;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (f = t.x, m = t.y, I = t.x + t.l, q = t.y + t.w) : (f = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), m = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), I = t.x + t.l - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.x2), q = t.y + t.w - ((v = t == null ? void 0 : t.trim) == null ? void 0 : v.y2));
    let y = s.toArray();
    for (let F = y.length; F--; ) {
      const _ = y[F];
      (pe.lessThan(_.x, f) || pe.lessThan(_.y, m) || pe.greaterThan(_.x, I) || pe.greaterThan(_.y, q)) && y.splice(F, 1);
    }
    s.clear(), s.addPoints(y), h.clear(), y = s.toArray();
    for (let F = y.length; F--; ) {
      const _ = y[F];
      for (let M = i.length; M--; ) {
        const j = i[M];
        if (_.collidesWith(j)) {
          s.deletePoint(_);
          break;
        }
      }
    }
  }
  return s;
}
function Ll(i, t, e) {
  let s = [];
  const n = i.getMinSpacing(e.saw), r = t.corner, o = t.direction;
  if (t.type === "shape")
    switch (r) {
      case "topLeft":
        o === "rl" && (s.push(me("right", t, n, r, o)), s.push(me("topRight", t, n, r, o))), o === "bt" && (s.push(me("bottom", t, n, r, o)), s.push(me("bottomLeft", t, n, r, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(me("left", t, n, r, o)), s.push(me("topLeft", t, n, r, o))), o === "bt" && (s.push(me("bottom", t, n, r, o)), s.push(me("bottomRight", t, n, r, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(me("left", t, n, r, o)), s.push(me("bottomLeft", t, n, r, o))), o === "tb" && (s.push(me("top", t, n, r, o)), s.push(me("topRight", t, n, r, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(me("right", t, n, r, o)), s.push(me("bottomRight", t, n, r, o))), o === "tb" && (s.push(me("top", t, n, r, o)), s.push(me("topLeft", t, n, r, o)));
        break;
    }
  else if (t.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(me("top", t, 0)), s.push(me("centre", t, 0)), s.push(me("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        s.push(me("left", t, 0)), s.push(me("right", t, 0)), s.push(me("centre", t, 0));
        break;
    }
  if (s = s.filter((a) => a.x >= 0 && a.y >= 0), !s.length) return null;
  const l = new Nt();
  for (const a of s)
    a.raycast = !0, l.addPoints(Vn(i, a, e).toArray());
  return zn(i, e, l), l;
}
function $l(i, t) {
  const e = new Nt();
  return i.sort(Nn), i.forEach((s) => {
    wt(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function Al(i = [], t, e) {
  const s = $l(
    i === null ? t : i,
    e
  );
  return Dl(
    t,
    e,
    s
  );
}
function Nn(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function Wn(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function El(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new Nt();
  const s = Un(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const d of u)
        Ol(
          d,
          a.shape,
          l,
          e
        );
    }
  const r = i.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = t.reduce((l, a) => (r === "tb" ? l.x + l.l > a.x + a.l : l.y + l.w > a.y + a.w) ? l : a);
  return s.filter(({ shape: l }) => l.id === o.id).forEach(({ shape: l, rays: a }) => {
    const u = Object.values(a);
    for (const d of u) {
      const v = new _e(d.x2, d.y2);
      r === d.direction && (Wn(v, l, null, d.direction, "edge"), e.addPoint(v));
    }
  }), e = Rl(e), e;
}
function Un(i, t) {
  return i.map((e) => {
    const s = kl(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function Ol(i, t, e, s) {
  switch (i.direction) {
    case "rl":
      Ai(
        i,
        t,
        e,
        s,
        e.x + e.l
      );
      break;
    case "lr":
      Ai(
        i,
        t,
        e,
        s,
        e.x
      );
      break;
    case "tb":
      Ai(
        i,
        t,
        e,
        s,
        e.y + e.w
      );
      break;
    case "bt":
      Ai(
        i,
        t,
        e,
        s,
        e.y
      );
      break;
  }
}
function Ai(i, t, e, s, n) {
  const r = i.dimension === "w", o = r ? "y" : "x", l = r ? "x" : "y", a = r ? "l" : "w";
  if (i[`${l}1`] >= e[l] && i[`${l}1`] <= e[l] + e[a]) {
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, d = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, v = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, h = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || d || v || h) {
      const m = r ? i[`${l}1`] : n, I = r ? n : i[`${l}1`], q = new _e(m, I), y = i.origin;
      Wn(q, t, e, i.direction, "shape", y), s.addPoint(q);
    }
  }
}
function Rl(i) {
  const t = new Nt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = Fl(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function Fl(i, t) {
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
function Vn(i, t, e) {
  const s = new Nt(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = _l(t, i, e), r) {
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
  return zn(i, e, s), s;
}
function _l(i, t, e) {
  if (e.saw.cutType !== "efficiency") return i;
  const s = t.getMinSpacing(e.saw), n = e.getBladeWidth();
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
function zn(i, t, e) {
  var a, u, d, v, h, f;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (d = t == null ? void 0 : t.trim) == null ? void 0 : d.x1, n = (v = t == null ? void 0 : t.trim) == null ? void 0 : v.y1, r = t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2) - i.l, o = t.w - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.y2) - i.w);
  const l = e.toArray();
  for (let m = l.length; m--; ) {
    const I = l[m];
    (pe.lessThan(I.x, s) || pe.lessThan(I.y, n) || pe.greaterThan(I.x, r) || pe.greaterThan(I.y, o) || I.x < 0 || I.y < 0) && e.deletePoint(I);
  }
}
function Ml(i, t, e) {
  if (!bi.includes(t) || !i.machining.corners) return 0;
  const s = Yn(i, t);
  return e * s;
}
function Yn(i, t) {
  if (!bi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Ni(i, t, e, s) {
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
class us {
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
    return yt[this.face];
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
    ], u = t.machining.corners.map((m, I) => {
      const q = I === 0 || I === 3, y = I < 2, F = q ? e : r - e;
      let _ = null;
      this.face === 0 ? _ = y ? s : o - s : this.face === 1 && (_ = y ? o - s : s);
      const M = Math.sqrt(F * F + _ * _);
      return {
        c: m,
        distance: M
      };
    }), d = Math.min(...a.map((m) => m.distance)), v = Math.min(...u.map((m) => m.distance)), h = u.findIndex((m) => m.distance === v), f = t.machining.corners[h];
    if (f && f.type === "radius") {
      let m = h === 0 || h === 3 ? 0 : r, I = h < 2 ? 0 : o;
      const q = h < 2;
      m += h === 0 || h === 3 ? l[h] : -l[h], I += q ? l[h] : -l[h];
      const F = e - m, _ = h < 2;
      let M;
      this.face === 0 ? M = _ ? s : o - s : this.face === 1 && (M = _ ? o - s : s);
      const j = M - I, Z = Math.sqrt(F * F + j * j), x = l[h] - Z - n;
      let k = !1;
      return f.index === 0 ? k = e <= m && M <= I : f.index === 1 ? k = e >= m && M <= I : f.index === 2 ? k = e >= m && M >= I : f.index === 3 && (k = e <= m && M >= I), k && x < d ? x : d;
    } else if (f && f.type === "bevel") {
      let m, I, q;
      f.index === 0 ? (m = 1, I = 1, q = -f.size) : f.index === 1 ? (m = 1, I = -1, q = -r + f.size) : f.index === 2 ? (m = 1, I = 1, q = -r - o + f.size) : f.index === 3 && (m = -1, I = 1, q = -o + f.size);
      const y = f.index === 0 ? 1 : -1, F = (m * e + I * s + q) / Math.sqrt(m * m + I * I) * y - n;
      return F < d ? F : d;
    } else
      return d;
  }
  validate(t, e, s = null) {
    const n = [];
    if (!C(this.x) || !C(this.y) || !C(this.diameter)) {
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
    }), s && Ni(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Js {
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
    minimumHoleDistance: d = 0,
    positionLimit: v = 0
  }, h) {
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
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = d, this.positionLimit = v, h && this.createHoles(h);
  }
  getFace() {
    return yt[this.face];
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
      const s = new us({
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
    }), s && Ni(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Qs {
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
let Xn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Qs(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Qs({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new us(n))), e && (this.hingeHoles = e.map((n) => new Js(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && (console.log(s), new le({
      item: t,
      category: ["machining"],
      index: e,
      listId: Ie(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    })), n.length && new le({
      category: ["machining"],
      item: t,
      index: e,
      listId: Ie(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new le({
      category: ["machining"],
      item: t,
      index: e,
      listId: Ie(t) ? [t.listId] : null,
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
    const o = new us({
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
    hingeLength: d = 0
  }) {
    const v = new Js({
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
      hingeLength: d
    });
    return this.hingeHoles.push(v), v;
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
function Cs(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function ql(i) {
  var t, e, s, n;
  if ("machining" in i) {
    if (!Cs(i)) {
      i.machining = null;
      return;
    }
    (t = i.machining.holes) != null && t.length || (i.machining.holes = null), (e = i.machining.hingeHoles) != null && e.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class Is {
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
    this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = t == null ? void 0 : t.id, this.shapes = C(t == null ? void 0 : t.shapes) ? t.shapes.map((s) => s.toString()) : [], this.shapeListIds = C(t == null ? void 0 : t.shapeListIds) ? t.shapeListIds : [], this.direction = C(t == null ? void 0 : t.direction) ? t.direction : "l", this.q = C(t == null ? void 0 : t.q) ? t.q : 1, C(t == null ? void 0 : t.shapeList) && ((e = t.shapeList) != null && e.length) && this.validate(t.shapeList);
  }
  validate(t = []) {
    var o, l;
    if (this.issues = [], !(t != null && t.length))
      throw new Error("shapeList is required to validate user group");
    const e = this.findShapes(t);
    if (!e.length)
      return new le({
        category: ["group"],
        item: this,
        message: "errors.groups.min_parts"
      }), this.issues;
    const s = e[0];
    if (Ze(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new le({
          category: ["group"],
          item: this,
          message: "errors.groups.min_parts"
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new le({
        category: ["group"],
        item: this,
        message: "errors.groups.min_parts"
      }), this.issues;
    if (e.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new le({
        category: ["group"],
        item: this,
        field: [["orientationLock"]],
        message: $e("errors.groups.part_needs_orientation_lock", { 0: u + 1 }),
        shouldTranslate: !1
      });
    }), this.issues.length) return this.issues;
    const n = pi(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const d = a.getTrimmedDimensions(!0)[n];
      pe.equalTo(d, r) || new le({
        category: ["group"],
        item: this,
        message: $e("errors.groups.dimension_not_correct", {
          0: u + 1,
          1: n === "l" ? "length" : "width",
          2: r,
          3: d
        }),
        shouldTranslate: !1
      });
    }), this.issues;
  }
  findShapes(t = []) {
    var s, n;
    if (!t.length) return [];
    let e = [];
    if (Ie(t[0])) {
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
    if (!Ze(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((d) => {
      const v = s.findIndex((h) => !h.inUserGroup && h.parentID === d.parentID);
      if (v === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(v, 1), vl(d), d.inUserGroup = !0;
    });
    let l = 0, a = 0;
    this.direction === "l" ? a = o.w : l = o.l;
    let u;
    try {
      const d = {
        id: `ug${t}.${e}`,
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
      u = new pt(d);
    } catch (d) {
      return console.error(d), !1;
    }
    return u.parentID = `ug${t}`, n && u.updateShapeSpacing(n), u;
  }
}
function Mh(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new Is(s));
  return t.length && Bl(e, t), e;
}
function Bl(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function jl(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function Hl(i, t, e = !0) {
  const s = jl(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((u) => u.listId === r);
    l < 0 && new le({
      category: ["group"],
      message: "errors.groups.no_parts",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new le({
      category: ["group"],
      message: $e("errors.groups.not_enough_of_part", {
        0: a != null && a.name ? a.name : l + 1,
        1: o,
        2: (a == null ? void 0 : a.q) ?? 0
      }),
      shouldTranslate: !1,
      issues: n
    });
  }
  return e && i.forEach((r) => {
    const o = r.validate(t);
    o != null && o.length && n.push(...o);
  }), n;
}
const bt = ["y1", "y2", "x1", "x2"], bi = ["a", "b", "c", "d"], Lt = [...bt, ...bi], yt = ["a", "b"];
function Kn(i) {
  return bi.includes(i);
}
function Gl(i) {
  return Lt.includes(i);
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
function Nl(i) {
  return bt.map((t) => i[t] ?? null);
}
function jt(i) {
  if (!C(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function qh({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    if (et(r)) return r;
    (s || r.preventAutoRotation) && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new Ut(r, e);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(di.ID);
}
function Bh({
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
    if (Wl(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
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
    const r = t.find((l) => {
      var a;
      return l.id === (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId));
    });
    return n.stock = r, n;
  }).sort(di.ID);
}
function jh({
  cutList: i,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = new Yi(e), n = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return s.stock = n, s;
  });
}
function Hh({
  segmentList: i,
  stockList: t
}) {
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return e.stock = s, new Ts(e);
  });
}
function Wi(i, t, e = "decimal", s = !1) {
  return C(i == null ? void 0 : i[t]) ? S({ v: i[t], nf: e, pl: s }) : null;
}
class Ps {
  constructor(t, e = "decimal", s = !1) {
    c(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    c(this, "warningKeys", ["q"]);
    c(this, "issueKeys", ["l", "w", "t", "trim"]);
    c(this, "readonly");
    c(this, "id");
    c(this, "listId");
    c(this, "index", null);
    //used for issue indexing
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
    t = jt(t), this.readonly = t.readonly, this.id = t.id, this.index = t == null ? void 0 : t.index, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ps(), ["l", "w", "t"].forEach((d) => this[d] = Wi(t, d, e, s)), this.q = C(t == null ? void 0 : t.q) ? Dt(Mi(t.q)) ? null : Mi(t.q) : null, this.autoAdd = C(t.autoAdd) ? t.autoAdd : !1, this.name = C(t.name) && ((o = t == null ? void 0 : t.name) != null && o.length) ? (l = ws(t == null ? void 0 : t.name)) == null ? void 0 : l.toUpperCase() : null, this.material = C(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((d) => {
      this.trim[d] = Wi(t.trim, d, e, s);
    }), this.cost = C(t.cost) ? typeof t.cost == "number" ? t.cost : parseFloat(t.cost) : null, t.grain = (a = t == null ? void 0 : t.grain) == null ? void 0 : a.toLowerCase(), (t == null ? void 0 : t.grain) === " " && (t.grain = ""), this.grain = t.grain, this.grain = C(t.grain) ? t.grain.toLowerCase() : "", this.multiEdit = t.multiEdit, this.allowExactFitShapes = C(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.preventGrainRotation = !0, typeof ((u = t == null ? void 0 : t.notes) == null ? void 0 : u.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "";
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
    jn(this);
  }
  validate(t, e = null) {
    return this.issues = [], ["l", "w", "t", "grain"].forEach((s) => Ye[s]({ item: this, saw: t, index: e ?? this.index, category: "stock" })), Ye.trim({ item: this, index: e, category: ["stock"] }), ["q"].forEach((s) => Ye[s]({ item: this, index: e ?? this.index, isWarning: !0, category: "stock" })), this.issues = this.issues.filter((s) => s), this.issues;
  }
}
class fi {
  constructor(t, e = "decimal", s = !1) {
    c(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    c(this, "readonly");
    c(this, "id");
    c(this, "index", null);
    //used for issue indexing
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
    c(this, "warnings", []);
    c(this, "notes", "");
    c(this, "stockLock");
    c(this, "stockMatch");
    c(this, "customData");
    c(this, "upDirection", null);
    //objects
    c(this, "machining");
    c(this, "trim", Object.fromEntries(
      bt.map((t) => [t, 0])
    ));
    c(this, "banding", Object.fromEntries(
      Lt.map((t) => [t, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...Lt,
      "all"
    ].map((t) => [t, {}])));
    c(this, "finish", Object.fromEntries(
      yt.map((t) => [t, ""])
    ));
    c(this, "finishOptions", Object.fromEntries(
      yt.map((t) => [t, {}])
    ));
    /**
     * to align with Shape
     * @remarks input shapes are always 0
     */
    c(this, "rot", 0);
    var r, o, l, a, u, d, v;
    t = t = jt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ps(), this.index = t == null ? void 0 : t.index, ["l", "w", "t"].forEach((h) => {
      this[h] = Wi(t, h, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? Dt(Mi(t.q)) ? null : Mi(t.q) : null, this.name = C(t.name) && ((r = t == null ? void 0 : t.name) != null && r.length) ? (o = ws(t == null ? void 0 : t.name)) == null ? void 0 : o.toUpperCase() : null, this.material = C(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, typeof ((l = t == null ? void 0 : t.notes) == null ? void 0 : l.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [], this.upDirection = (t == null ? void 0 : t.upDirection) ?? null;
    for (const h of Object.keys(this.trim))
      this.trim[h] = Wi(t.trim, h, e, s);
    for (const h of Object.keys(this.banding))
      this.banding[h] = C((a = t == null ? void 0 : t.banding) == null ? void 0 : a[h]) ? t.banding[h] : !1;
    for (const h of Object.keys(this.bandingOptions))
      this.bandingOptions[h] = C((u = t == null ? void 0 : t.bandingOptions) == null ? void 0 : u[h]) ? t.bandingOptions[h] : {};
    for (const h of Object.keys(this.finish))
      this.finish[h] = C((d = t == null ? void 0 : t.finish) == null ? void 0 : d[h]) ? t.finish[h] : "";
    for (const h of Object.keys(this.finishOptions))
      this.finishOptions[h] = C((v = t == null ? void 0 : t.finishOptions) == null ? void 0 : v[h]) ? t.finishOptions[h] : {};
    this.orientationLock = C(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new Xn(t.machining ?? {
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
          Lt.map((e) => [e, !1])
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
    if (this.issues = [], ["l", "w", "t"].forEach((o) => Ye[o]({ item: this, index: e ?? this.index, saw: r, category: ["part"] })), s = S({ v: s }), Ye.partTrim({ item: this, partTrim: s, index: e ?? this.index }), Ye.trim({ item: this, index: e ?? this.index, category: ["part"] }), Ye.machining({ item: this, index: e ?? this.index }), ["q"].forEach((o) => {
      Ye[o]({ item: this, index: e ?? this.index, isWarning: !0, category: ["part"] });
    }), t.length && !n) {
      const o = new At(r);
      Ye.stockMatch({ item: this, inputStockList: t, saw: o, partTrim: s, index: e ?? this.index, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Wt {
  constructor(t) {
    c(this, "id");
    c(this, "index", null);
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
    c(this, "warnings", []);
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
      bt.map((t) => [t, 0])
    ));
    c(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    this.issues = [];
    const e = [];
    let s = ["x", "y", "t", "w"];
    wt(this) && (s = ["x", "y", "t"]), t != null && t.infiniteLength || s.push("l"), s.forEach((n) => e.push(...Ye[n]({ item: t, index: this.index }))), this.issues.push(...Ye.customData({ item: t, index: this.index })), this.issues.push(...e.filter((n) => n));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = C(t.id) ? t.id.toString() : this.id || null, this.setParentID(), C(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = C(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = wo(ws(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, C(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = C(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = C(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && C(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.area = this.getArea(), this.offcut = C(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
        rectangle: null,
        distance: null
      }, this.infiniteLength = C(t == null ? void 0 : t.infiniteLength) ? t.infiniteLength : !1;
      try {
        this.trim = (t == null ? void 0 : t.trim) || (t == null ? void 0 : t._trim);
      } catch (l) {
        if ((o = l == null ? void 0 : l.cause) != null && o.issues) this.issues.push(...l.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(l)}`);
      }
      this.trimmed = C(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.hasTrim = [this.trim.x1, this.trim.x2, this.trim.y1, this.trim.y2].some((l) => typeof l == "number" && l !== 0);
    }
    this.identicalTo = (t == null ? void 0 : t.identicalTo) ?? [], [
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
      if (!C(a))
        return this[l.key] = this[l.key] || l.default;
      typeof a == "string" && (a = S({ v: a })), this[l.key] = a;
    }), !(t != null && t.infiniteLength) && !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = pi(this.grain))), C(t == null ? void 0 : t.stock) && (et(t.stock) ? this.stock = t.stock : this.stock = new Ut(t.stock), this.stockId = this.stock.id), this.index = t.index;
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      bt.map((e) => [e, 0])
    ), !!ti(t, !0))
      for (const e of bt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = S({ v: t[e] });
          } catch {
            s = 0, new le({ item: this, field: [["trim", e]], message: `${t[e] ?? "N/A"} is not a valid value for trim: ${e}` });
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
        return new Zt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Zt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Zt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Zt({
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
    const s = new _e(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new _e(this.x, this.y + this.w);
    if (n.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !e)
      return [n, s];
    const r = new _e(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new _e(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, n, o, s];
  }
  getCorners() {
    return {
      bottomLeft: new _e(this.x, this.y),
      topLeft: new _e(this.x, this.y + this.w),
      topRight: new _e(this.x + this.l, this.y + this.w),
      bottomRight: new _e(this.x + this.l, this.y)
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
  //trim the rectangle
  trimDimensions() {
    var t, e, s, n;
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !Dt(parseFloat(String(r)))).length && (C(this.l) && (this.l -= (C((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (C((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new le({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), C(this.w) && (this.w -= (C((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (C((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new le({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
  //[] cater for rotation / stock
  isIdentical(t, e = !1) {
    var u;
    if (this.constructor !== t.constructor || this.t !== t.t || this.orientationLock !== t.orientationLock || this.material !== t.material)
      return !1;
    if (Ze(this) && ((u = this.identicalTo) != null && u.length) && (this.parentID === t.parentID || this.identicalTo.includes(t.parentID)))
      return !0;
    if (wt(this)) {
      if (t.id === this.id) return !0;
    } else {
      if (t.parentID === this.parentID) return !0;
      if (Ze(this) && e && this.parentID !== t.parentID) return !1;
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
    const s = new Wt({
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
    return Ze(this);
  }
  isSegment() {
    return zl(this);
  }
  isStock() {
    return et(this);
  }
  isGroup() {
    return wt(this);
  }
  isUserGroup() {
    return Ds(this);
  }
}
class Xi extends Wt {
  //used by evo
  constructor(e, s) {
    var n, r;
    super(e);
    // type: StockType;
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) || new le({ item: this, field: [["type"]], message: `Container type ${((r = e == null ? void 0 : e.saw) == null ? void 0 : r.stockType) ?? "N/A"} is not valid`, shouldTranslate: !1 }), this.setSaw(e, s), this.cutType) {
      case "beam":
        (!C(this.t) || this.t <= 0) && new le({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e, s) {
    var n, r, o, l;
    if (!(!e && !s)) {
      if (!s)
        if (C(e == null ? void 0 : e.saw)) {
          if (!((r = e == null ? void 0 : e.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: u } = os(e.saw.cutPreference);
            e.saw.cutType = a, e.saw.cutPreference = u;
          }
        } else {
          e.saw = {};
          const { cutType: a, cutPreference: u } = os(e.cutPreference);
          e.saw.cutType = a, e.saw.cutPreference = u, C(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), C((n = e == null ? void 0 : e.blade) == null ? void 0 : n.width) && (e.saw.bladeWidth = e.blade.width), C(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), C(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), C(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
        }
      try {
        const a = s ?? (e == null ? void 0 : e.saw);
        a && (xs(a) ? this.saw = a : this.saw = new At(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
      } catch (a) {
        throw new Error("error creating saw", { cause: a });
      }
    }
  }
  get cutType() {
    var e, s, n, r;
    return C((e = this == null ? void 0 : this.saw) == null ? void 0 : e.cutType) ? this.saw.cutType : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var e, s, n, r;
    return C((e = this.saw) == null ? void 0 : e.cutPreference) ? this.saw.cutPreference : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var e, s, n, r;
    return C((e = this.saw) == null ? void 0 : e.guillotineOptions) ? this.saw.guillotineOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var e, s, n, r;
    return C((e = this.saw) == null ? void 0 : e.efficiencyOptions) ? this.saw.efficiencyOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
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
    return Dt(e) ? 0 : e;
  }
  getStock() {
    return et(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Ut extends Xi {
  constructor(e, s) {
    var n;
    e = jt(e), e.preventAutoRotation = e.preventAutoRotation || ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
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
    delete this.stock, this._id = e == null ? void 0 : e._id, this.autoAdd = C(e == null ? void 0 : e.autoAdd) ? e.autoAdd : !1, this.allowExactFitShapes = C(e == null ? void 0 : e.allowExactFitShapes) ? e.allowExactFitShapes : !1, this.analysis = C(e.analysis) ? e.analysis : null, this.tidy = C(e == null ? void 0 : e.tidy) ? e.tidy : !1, this.algoBenchmark = null, this.used = C(e == null ? void 0 : e.used) ? e.used : !1, this.stack = C(e == null ? void 0 : e.stack) ? e.stack : 1, this.duplicatePattern = (e == null ? void 0 : e.duplicatePattern) ?? null, this.initStock(e);
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
    this.used = !1, this.stack = 1, this.score = null, this.rootSegment = null, this.tidy = null, this.analysis = null, this.duplicatePattern = null, this.shapes = [];
  }
  validateStock(e) {
    const s = [];
    e.autoAdd || ["q"].forEach((n) => s.push(...Ye[n]({ item: e, index: e == null ? void 0 : e.index }))), ["grain"].forEach((n) => s.push(...Ye[n]({ item: e, index: e == null ? void 0 : e.index }))), this.issues.push(...s.filter((n) => n));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = et(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
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
    return et(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Ut(r);
  }
  getCroppedLength(e = [], s = 0) {
    if (!(e != null && e.length)) return;
    const n = wl(e.filter((o) => o.added && o.stock.id === this.id), "x"), r = n.x + n.l;
    if (r > this.l) throw new Error("Furthest shape position exceeds stock length");
    return pe.equalTo(r, this.l) ? r : r + s;
  }
}
class Zn extends Wt {
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
function Gh({
  offcuts: i,
  stockList: t,
  preventAutoRotation: e = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = t.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, e && (s.preventAutoRotation = !0), new Zn(s);
  });
}
class Et extends Wt {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(e) {
    e = jt(e);
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
      Lt.map((e) => [e, !1])
    ));
    c(this, "_finish", Object.fromEntries(
      yt.map((e) => [e, ""])
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
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = C(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, C(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = C(e == null ? void 0 : e.machining) ? new Xn(e.machining) : null, this.fitsStock = C(e == null ? void 0 : e.fitsStock) ? e.fitsStock : null, this.upDirection = C(e == null ? void 0 : e.upDirection) ? e.upDirection : null), this.added = C(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = C(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = C(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = C(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = C(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = C(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = C(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = C(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = C(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
  }
  initGuillotineData(e) {
    var s, n, r, o, l, a, u, d;
    this.guillotineData = Ri({}, e == null ? void 0 : e.guillotineData, {
      firstShape: ((s = this == null ? void 0 : this.guillotineData) == null ? void 0 : s.firstShape) || null,
      myPhase: ((n = this == null ? void 0 : this.guillotineData) == null ? void 0 : n.myPhase) || null,
      myStripParent: ((r = this == null ? void 0 : this.guillotineData) == null ? void 0 : r.myStripParent) || null,
      myStripDirection: ((o = this == null ? void 0 : this.guillotineData) == null ? void 0 : o.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((a = (l = this == null ? void 0 : this.guillotineData) == null ? void 0 : l.stripShapeBatches) == null ? void 0 : a.subsetUsed) || !1,
        groups: ((d = (u = this == null ? void 0 : this.guillotineData) == null ? void 0 : u.stripShapeBatches) == null ? void 0 : d.groups) || {}
      }
    });
  }
  cloneGuillotineData() {
    var e;
    return (e = this.guillotineData) != null && e.myStripParent && (Ze(this.guillotineData.myStripParent) || wt(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o, l, a, u, d, v, h, f;
    const n = e.bladeWidth;
    if (e.cutType !== "efficiency")
      return s ? 0 : n;
    if (this.minSpacing > 0) return this.minSpacing;
    let r = (e == null ? void 0 : e.minSpacing) || 0;
    if (n > r && (r = n), (l = (o = e.options) == null ? void 0 : o.minSpacingDimension) != null && l.dimension && ((u = (a = e.options) == null ? void 0 : a.minSpacingDimension) != null && u.minSpacing)) {
      const m = (v = (d = e.options) == null ? void 0 : d.minSpacingDimension) == null ? void 0 : v.dimension;
      (this.l <= m || this.w <= m) && (r = ((f = (h = e.options) == null ? void 0 : h.minSpacingDimension) == null ? void 0 : f.minSpacing) || r);
    }
    return s && (r -= n), r < 0 && (r = 0), this.minSpacing = r, r;
  }
  validateShape(e) {
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...Ye[n]({ item: e, index: e == null ? void 0 : e.index }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
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
    e = jt(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Lt.map((s) => [s, !1])
    ), !!ti(e, !0))
      for (const s of Lt)
        this._banding[s] = C(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return Nl(this._banding);
  }
  get finish() {
    return this._finish;
  }
  set finish(e) {
    if (this._finish = Object.fromEntries(
      yt.map((s) => [s, ""])
    ), !!ti(e, !0))
      for (const s of yt)
        this._finish[s] = C(e == null ? void 0 : e[s]) ? e[s] : "";
  }
  get facesArray() {
    return yt.map((e) => {
      var s;
      return (s = this.finish) == null ? void 0 : s[e];
    });
  }
  //compress for saving / transfer
  save() {
    var e, s, n;
    delete this.group, (e = this == null ? void 0 : this.guillotineData) == null || delete e.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, Lt.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), yt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), ql(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = pi(e.grain)), Gn([
      () => Jt(this.isInsideStock(e), `shape ${this.id} is not inside stock ${e.id}`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, wt(this) && this.shapes.forEach((e) => e.removeFromStock());
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
    this.removeFromStock(), this.resetPosition(), ei(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
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
    return !Gl(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : Kn(e) ? Yn(this, e) : 0;
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
  getPerimeterCutVectors(e = null) {
    var n;
    return e === null && (e = (n = this.stock) != null && n.isStock() ? this.stock.getBladeWidth() / 2 : 0), [
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
      return s.push(new Yi({
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
    ei(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    var n, r, o;
    return et(e) && typeof ((n = this.fitsStock) == null ? void 0 : n[e.parentID]) < "u" ? ((o = (r = this.fitsStock) == null ? void 0 : r[e.parentID]) == null ? void 0 : o[s ?? "any"]) === !0 : zi(this, e, s);
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = s.pop(), e++), s.push(e);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new Et(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const e = this.cloneGuillotineData();
    return e.myStripParent = Vl(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
class Ts extends Xi {
  constructor(e) {
    var t = (...Jh) => (super(...Jh), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), c(this, "hasHeadCut"), c(this, "isInitial"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.parentID = C(e == null ? void 0 : e.parentID) ? e.parentID : null, this.shapes = C(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = C(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = C(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = C(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = C(e == null ? void 0 : e.parent) ? e.parent : null, this.children = C(e == null ? void 0 : e.children) ? e.children : [], this.siblings = C(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = C(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = C(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = C(e == null ? void 0 : e.cutDirection) ? e.cutDirection : null, this.hasBeamTrim = C(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1, this.hasHeadCut = C(e == null ? void 0 : e.hasHeadCut) ? e.hasHeadCut : !1, this.isInitial = C(e == null ? void 0 : e.isInitial) ? e.isInitial : !1);
  }
  validateSegment(e) {
    var s, n;
    (pe.lessThanOrEqualTo(e.w, 0) || pe.lessThanOrEqualTo(e.l, 0)) && new le({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (pe.lessThan(e.x, 0) || pe.lessThan(e.y, 0)) && new le({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (pe.greaterThan(e.x + e.l, e.stock.l) || pe.greaterThan(e.y + e.w, e.stock.w)) && new le({
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
class pt extends Et {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = jt(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
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
    (e = this == null ? void 0 : this.shapes) != null && e.length && (this.shapes = this.shapes.filter((s) => s), this.setShapePositions(), this.container && (this.efficiency = this[this.direction] / this.container[this.direction]));
  }
  setShapePositions() {
    if (!this.container) return;
    this.positions = [], this.type !== "user" && this.sortShapes();
    let e = 0;
    const s = yl(this.direction);
    let n = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const a = {
        shape: l.id,
        x: 0,
        y: 0,
        rot: l.rot.valueOf()
      };
      s === "x" ? a.x = e : a.y = e, this.positions.push(a), l.inGroup = !0, e += n === this.shapes.length - 1 ? l[this.direction] : l[this.direction] + l.getMinSpacing(this.container.saw), n++;
    }
    this[this.direction] = e;
    const r = pi(this.direction), o = this.shapes.reduce(
      (l, a) => a[r] > l ? a[r] : l,
      0
    );
    if (this[r] = o, Hn()) {
      const l = this.shapes.slice(0, -1).reduce((d, v) => d + v.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((d, v) => d + v[this.direction], 0) + l;
      Gn([
        () => Jt(
          pe.equalTo(u, this[this.direction]),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Jt(
          e,
          "currentPosition is incorrect in direction"
        ).to.equal(this[this.direction]),
        () => Jt(
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
    super.reset(!1, !0, !1);
    for (const e of this.shapes) e.reset(!1, !0, !1);
  }
  reset(e = !1, s = !0, n = !1) {
    super.reset(e, s, n);
    for (const r of this.shapes) r.reset(e, s, n);
  }
  /**
   * orientate all the shapes correctly to fit in the group
   */
  orientateShapes(e) {
    this.shapes.forEach((s) => {
      const n = this.positions.find((o) => o.shape === s.id);
      if (!n) throw new Error("position not found for shape in group");
      if (!cs(s, n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = pi(this.direction);
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
      if (n.x = this.x + r.x, n.y = this.y + r.y, !cs(n, r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6), n.addToStock(e);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), ml(this, e);
  }
  clone(e = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new pt(a);
  }
  compress() {
    const e = super.compress.call(this);
    return e.direction = this.direction, e.positions = structuredClone(this.positions), e.shapes = this.shapes.map((s) => s.compress()), e.type = this.type, e.cloneType = "group", e;
  }
}
function Nh(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function Wl(i) {
  return i.shapes !== void 0;
}
function wt(i) {
  return i instanceof pt && i.type !== "user";
}
function Ds(i) {
  return i instanceof pt && i.type === "user";
}
function Mt(i) {
  return i instanceof Is;
}
function Bt(i) {
  return i instanceof Ps;
}
function Ie(i) {
  return i instanceof fi;
}
function Ul(i) {
  return i instanceof Wt;
}
function et(i) {
  return i instanceof Ut;
}
function Ls(i) {
  return i instanceof Xi;
}
function Ze(i) {
  return i instanceof Et && !(i instanceof pt);
}
function Vl(i) {
  return i instanceof Et || i instanceof pt;
}
function zl(i) {
  return i instanceof Ts;
}
function Jn(i) {
  return Ze(i) || et(i) || Ie(i) || Bt(i);
}
function Qn(i) {
  return Ie(i) || Bt(i) ? !1 : Ze(i) || et(i) ? i.trimmed : !1;
}
function Yl(i) {
  return i instanceof pt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof Is ? "inputUserGroup" : i instanceof Ps ? "inputStock" : i instanceof fi ? "inputShape" : i instanceof Ut ? "stock" : i instanceof Xi ? "container" : i instanceof Et && !(i instanceof pt) ? "shape" : i instanceof Ts ? "segment" : i instanceof Zn ? "offcut" : i instanceof At ? "saw" : i instanceof Wt ? "rectangle" : null;
}
function en(i, t) {
  return Mr(i, t);
}
function It(i, t) {
  return Pe(i, t);
}
function er(i, t, e) {
  qr(i, t, e);
}
function C(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function ti(i, t = !1) {
  if (!C(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => C(s) && s) : e.some((s) => C(s));
}
function Wh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return Bt(e) && e.autoAdd ? s = 1 : s = C(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function Uh(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = Xl(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function Xl(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Kl() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function hs(i = 0, t, e = null, s = null, n = null) {
  if (!Ie(e) && !Mt || s === "stock") return !1;
  let r, o;
  if (Ie(e) ? r = e.orientationLock : Mt(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || Mt(e))
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
function tn(i, t, e = null, s = null, n = null) {
  if (!Ie(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? hs(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Zl(i) {
  i.banding && (i.banding = Ui(i.banding, "cc")), i.trim && (i.trim = Ui(i.trim, "cc"));
}
function Vh(i, t = 0) {
  return Ze(i) || Ie(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Zl(i)), i;
}
function Ui(i, t = "cc", e = {
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
const { addNotice: ht } = ys(), {
  inputs: Re,
  totalInputShapes: Jl,
  totalInputStock: Ql,
  createStockList: ea,
  createShapeList: ta,
  validateInputShapes: ia,
  validateInputStock: tr,
  removeShape: sn,
  removeStock: nn
} = Pn(), sa = {
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
  onLimit: () => {
  }
}, na = () => {
  var i, t;
  if ((i = Re == null ? void 0 : Re.inputStock) != null && i.value) {
    for (let e = Re.inputStock.value.length - 1; e >= 0; e--) {
      const s = Re.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Re.inputStock.value.length > 1 || e !== 0) && nn(s.listId);
    }
    if ((t = Re == null ? void 0 : Re.inputShapes) != null && t.value)
      for (let e = Re.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Re.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Re.inputShapes.value.length > 1 || e !== 0) && sn(s.listId);
      }
  }
}, ra = (i, t = !1) => {
  var s;
  if (!t) return [];
  const e = [];
  for (let n = Re.inputShapes.value.length - 1; n >= 0; n--) {
    const r = Re.inputShapes.value[n];
    if (!r) continue;
    if (!C(r.material)) {
      e.push(new le({
        item: r,
        category: ["part"],
        message: "errors.field_validation.no_material",
        listId: [r.listId]
      }));
      continue;
    }
    const o = i.items.find((l) => l._id === r.material);
    (s = o == null ? void 0 : o.t) != null && s.length && (r.t ? o.t.includes(r.t) || e.push(new le({
      item: r,
      category: ["part"],
      message: "errors.field_validation.invalid_thickness",
      listId: [r.listId]
    })) : e.push(new le({
      item: r,
      category: ["part"],
      message: "errors.field_validation.no_thickness",
      listId: [r.listId]
    })));
  }
  return e;
}, ir = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...sa,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, oa = (i = {}) => {
  const t = ir(i), e = t.t;
  na();
  const s = [];
  t.useInventory || s.push(...tr(i == null ? void 0 : i.sawData)), s.push(...ia({
    saw: t.sawData,
    partTrim: S({ v: t.partTrim }),
    useInventory: t.useInventory,
    inputShapesOverride: t.inputShapes
  }));
  const n = Pt(s);
  if (n.length > 0) {
    console.warn("[Validation] errors:", JSON.parse(JSON.stringify(n)));
    const r = n.map((o) => {
      var a;
      let l = "";
      return (a = o == null ? void 0 : o.index) != null && a.length && (l += o.getHumanReadableIndexes() + ": "), l += e(o.message), l;
    });
    ht({
      type: "error",
      message: e("errors.validation.inputs_issue_generic"),
      additional: r
    });
  }
  return s;
};
async function la(i) {
  var n, r;
  const t = ir(i), e = t.t;
  let s = [];
  try {
    if (s = oa(t), s != null && s.length && s.some((m) => m.type === "error"))
      return { valid: !1, issues: s };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (Jl.value > t.maxShapes || Ql.value > t.maxStock))
      return t.onLimit(), { valid: !1, issues: s };
    if (t.useInventory) {
      const m = ra(t.materialStore, !0), I = Pt(m);
      if (I.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "material" }),
          additional: I.map((q) => e(q.message))
        }), { valid: !1, issues: s };
    } else {
      const m = tr(), I = Pt(m);
      if (I.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "stock" }),
          additional: I.map((q) => e(q.message))
        }), { valid: !1, issues: s };
    }
    const o = t.useInventory ? new At(t.selectedSaw) : new At(t.sawData), l = Pt(o.issues);
    if (l.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "saw" }),
        additional: l.map((m) => e(m.message))
      }), { valid: !1, issues: s };
    const { stockList: a, issues: u } = await ea(o), d = Pt(u);
    if (d.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "stock" }),
        additional: d.map((m) => e(m.message))
      }), { valid: !1, issues: s };
    if (!(a != null && a.length))
      return ht({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: s };
    const { shapeList: v, issues: h } = await ta({
      orientationModel: t.orientationModel,
      trim: t.partTrim,
      inputShapesOverride: t.inputShapes
    }), f = Pt(h);
    if (f.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "part" }),
        additional: f.map((m) => e(m.message))
      }), { valid: !1, issues: s };
    if (!(v != null && v.length))
      return ht({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: s };
    if (((r = (n = Re.userGroups) == null ? void 0 : n.value) == null ? void 0 : r.length) > 0) {
      Re.userGroups.value.forEach((q) => q.populateParentID(Re.inputShapes.value));
      const m = Hl(
        Re.userGroups.value,
        Re.inputShapes.value
      ), I = Pt(m);
      if (I.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "group" }),
          additional: I.map((q) => e(q.message))
        }), { valid: !1, issues: s };
    }
    return {
      valid: !0,
      issues: s,
      saw: o,
      stockList: a,
      shapeList: v
    };
  } catch (o) {
    return console.error("[Validation] error:", o), ht({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [(o == null ? void 0 : o.message) ?? ""]
    }), { valid: !1, issues: s };
  }
}
function aa(i) {
  return !i || !ti(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function $s(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function As(i) {
  return `${i}Options`;
}
function ca(i, t, e) {
  const s = As(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function ua(i, t, e = !0) {
  if (!$s(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    Es(i, t, r, e);
  e && sr(i, t, "all");
}
function Es(i, t, e, s = !0) {
  s && sr(i, t, e), e !== "all" && $s(i, t) && (i[t][e] = !1);
}
function sr(i, t, e) {
  if (!$s(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function Os(i, t, e, s, n, r) {
  var d;
  const o = t + "Options";
  if (!((d = i == null ? void 0 : i[o]) != null && d[e]) || !(s in i[o][e])) return;
  gi(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((v) => v);
  if (!Array.isArray(a)) return;
  const u = Vi(i, t, e, r);
  gi(i, t, e, !!Ge(u));
}
function nr(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Vi(i, t, "all", r), u = i[o][e], d = Object.values(u || {}).filter((v) => v);
  for (const v of l)
    v !== "all" && (n.includes(v) || (Os(i, t, v, e, s, r), Array.isArray(d) || gi(i, t, v, !1), gi(i, t, v, !!Ge(a))));
}
function gi(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = As(t), r = aa((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Vi(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && Kn(e) && Ge(l) ? Ml(i, e, l) / 1e3 : l;
}
function zh(i) {
  i != null && i.type && delete i.type, ha.call(this, i);
}
function ha(i) {
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
function da(i) {
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
const pa = { id: "mini-stock-nav" }, fa = ["onMousedown"], ga = { class: "id" }, ma = /* @__PURE__ */ Ee({
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
    return (r, o) => (b(), T("div", pa, [
      (b(!0), T(be, null, Ae(e.stockList, (l, a) => (b(), T("button", {
        type: "button",
        key: a,
        class: Se(["c-btn nav-button", { selected: l.id === e.activeStockId }]),
        style: Ce({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        E("div", ga, re(a + 1), 1),
        fs(E("div", { class: "stack legibility" }, re(l.stack), 513), [
          [gs, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, fa))), 128))
    ]));
  }
}), si = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, va = {
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
}, ya = { id: "spinner" }, ba = ["width", "height"], wa = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Sa(i, t, e, s, n, r) {
  return b(), T("div", ya, [
    e.complete ? U("", !0) : (b(), T("svg", {
      key: 0,
      class: "loading",
      style: Ce({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      Ur('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, ba)),
    e.complete ? (b(), T("svg", {
      key: 1,
      class: "complete",
      style: Ce({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      E("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : U("", !0),
    e.showNumber ? (b(), T("div", wa, re(e.number), 1)) : U("", !0)
  ]);
}
const rn = /* @__PURE__ */ si(va, [["render", Sa]]);
function xa(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function ka(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function Ca(i, t, e, s, n = []) {
  const r = ka(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((d) => d.id)), u = o.map((d) => d.id).filter((d) => !a.has(d)).map((d) => `'${d}'`);
    u.length && console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && (o.sort((a, u) => {
    const d = n.indexOf(a.id), v = n.indexOf(u.id);
    return d === -1 ? 1 : v === -1 ? -1 : d - v;
  }), console.log(o)), o;
}
const Ia = ["id"], Pa = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Ta = {
  key: 1,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Da = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, La = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, $a = {
  key: 4,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Aa = {
  key: 5,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Ea = /* @__PURE__ */ Ee({
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
  setup(i, { emit: t }) {
    const e = i, s = t, n = Y(0), r = Y(!1), o = (k, A, K, D) => {
      if (!Ie(K) || A === 0)
        return k;
      const G = l();
      return A === 1 || A === 2 && D !== "n" && k ? G : k;
    }, l = (k) => {
      const A = { ...e, ...k };
      if (!A.rectangle || !Ie(A.rectangle)) return "";
      let K = "";
      switch (A.orientationModel) {
        case 0:
          K = _.value;
          break;
        case 1:
          A.stockGrain === "y" || A.stockGrain === "n" ? K = A.rectangle.l >= A.rectangle.w ? "l" : "w" : A.rectangle.l >= A.rectangle.w ? K = A.stockGrain : K = K = A.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          K = A.rectangle.l >= A.rectangle.w ? "l" : "w";
          break;
      }
      return K;
    }, a = () => {
      if (e.disabled || y.value.length <= 1) return;
      let k = null;
      [1, 2].includes(e.orientationModel) ? k = v() : k = d(), n.value = k;
    }, u = (k) => {
      const A = y.value.findIndex((K) => K === k);
      return A === -1 ? 0 : A;
    }, d = () => {
      let k = 0;
      return k = u(_.value) + 1, k > y.value.length - 1 && (k = 0), k;
    }, v = () => {
      let k = 0;
      if (_.value)
        k = y.value.findIndex((A) => A === "");
      else {
        const A = l();
        k = y.value.findIndex((K) => K === A);
      }
      return k;
    }, h = (k) => {
      s("updateOrientation", k);
    }, f = () => {
      const k = _.value;
      switch (e.orientationModel) {
        case 0:
          return k ? e.stockGrain === "n" ? k || e.shapeOrientation || "default" : e.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        case 1:
          return k ? e.stockGrain === "n" ? k || e.shapeOrientation || "default" : e.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        case 2:
          return k ? e.stockGrain === "n" ? k || e.shapeOrientation || "default" : e.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, m = () => {
      if (!e.rectangle) return;
      const k = o(
        _.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (k !== _.value) {
        I(k);
        return;
      }
      if (n.value = u(_.value), !!Ie(e.rectangle)) {
        if (e.orientationModel === 1) {
          const A = j.value ? l() : _.value;
          I(A);
          return;
        }
        if (e.orientationModel === 2) {
          let A;
          j.value ? A = e.stockGrain !== "n" ? l() : "" : A = _.value, I(A);
        }
      }
    }, I = (k) => {
      n.value = u(k), h(k);
    }, q = () => {
      const k = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], A = ["l", "w", "y", "n"], K = [0, 1, 2], D = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, G = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, te = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, O = [];
      k.forEach((B) => {
        A.forEach((X) => {
          K.forEach((ie) => {
            const ae = new fi({
              l: B.l,
              w: B.w
            }), De = l({
              orientationModel: ie,
              rectangle: ae,
              stockGrain: X
            });
            let Be = "";
            ae.l === ae.w ? Be = "l === w" : ae.l > ae.w ? Be = "l >= w" : Be = "w > l";
            const Ne = ["l", "w", "y"].includes(X) ? D : G;
            O.push({
              Model: ie,
              "Stock grain": X,
              "Stock grain description": te[X],
              Dimensions: Be,
              "Orientation lock": De || "N/A",
              "Orientation Lock description": Ne[De] || "N/A"
            });
          });
        });
      }), O.sort((B, X) => {
        if (B.Model !== X.Model)
          return B.Model - X.Model;
        if (B["Stock grain"] !== X["Stock grain"])
          return B["Stock grain"].localeCompare(X["Stock grain"]);
        const ie = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return ie[B.Dimensions] - ie[X.Dimensions];
      }), console.table(O);
    }, y = se(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Mt(e.rectangle)) return ["l", "w"];
      let k = ["", "l", "w"];
      return e.rectangle.multiEdit && (k = [" ", "", "l", "w"]), F.value && (k = k.filter((A) => A !== "w")), k;
    }), F = se(() => {
      var k, A, K, D;
      return Ie(e.rectangle) || Bt(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((k = e.rectangle) != null && k.l) && ((A = e.rectangle) != null && A.w) ? ((K = e.rectangle) == null ? void 0 : K.l) === ((D = e.rectangle) == null ? void 0 : D.w) : !1;
    }), _ = se(() => {
      let k = "";
      return Mt(e.rectangle) ? k = e.rectangle.direction : Ie(e.rectangle) ? k = e.rectangle.orientationLock ?? "" : Bt(e.rectangle) && (k = e.rectangle.grain ?? ""), k;
    }), M = se(() => Mt(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), j = se(() => !M.value.l && !M.value.w), Z = se(() => hs(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), x = se(() => {
      var D;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (Bt(e.rectangle) || e.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[e.rectangle.grain] || "noGrain";
      const k = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, A = e.stockGrain || "default";
      let K = "default";
      return Ie(e.rectangle) || e.rectangleType === "shape" ? K = f() : Mt(e.rectangle) && (K = e.rectangle.direction || "default"), ((D = k[A]) == null ? void 0 : D[K]) || k[A].default;
    });
    return Te(n, (k, A) => {
      r.value && A !== void 0 && h(y.value[k]);
    }, { immediate: !1 }), Te(M, (k, A) => {
      if (!e.rectangle || e.orientationModel === 0 || !Ie(e.rectangle) || Ie(e.rectangle) && (e.orientationModel === 2 && A.l && A.w && !_.value || e.stockGrain === "n" && !_.value))
        return;
      const K = l();
      _.value !== K && h(K);
    }, { immediate: !1 }), Te(() => e.stockGrain, (k, A) => {
      k !== A && m();
    }, { immediate: !0 }), rt(() => {
      m(), nt(() => {
        r.value = !0, e.debug && q();
      });
    }), (k, A) => (b(), T("button", {
      type: "button",
      id: k.id,
      class: Se(["c-btn orientation-button", { rot: Z.value, square: F.value, disabled: k.disabled, [x.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: a
    }, [
      x.value === "delete" ? (b(), T("svg", Pa, A[0] || (A[0] = [
        E("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : U("", !0),
      x.value === "freeRotation" ? (b(), T("svg", Ta, A[1] || (A[1] = [
        E("g", null, [
          E("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          E("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          E("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          E("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]))) : U("", !0),
      x.value === "leftRight" ? (b(), T("svg", Da, A[2] || (A[2] = [
        E("g", null, [
          E("path", { d: "m5.408 19.408h61.095" }),
          E("g", null, [
            E("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            E("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]))) : U("", !0),
      x.value === "topBottom" ? (b(), T("svg", La, A[3] || (A[3] = [
        E("g", null, [
          E("path", { d: "m19.408 66.503v-61.095" }),
          E("g", null, [
            E("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            E("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]))) : U("", !0),
      x.value === "grainLeftRight" ? (b(), T("svg", $a, A[4] || (A[4] = [
        E("g", null, [
          E("path", { d: "m3 3h99.887" }),
          E("path", { d: "m3.113 32h99.887" }),
          E("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]))) : U("", !0),
      x.value === "grainTopBottom" ? (b(), T("svg", Aa, A[5] || (A[5] = [
        E("g", null, [
          E("path", { d: "m61 3v99.887" }),
          E("path", { d: "m32 3.113v99.887" }),
          E("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]))) : U("", !0)
    ], 10, Ia));
  }
}), Oa = ["id"], Ra = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = Y({
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    Te(() => e.inputShape.orientationLock, () => {
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = tn(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Ui(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 }), Te([
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
      const a = tn(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Ui(l, a, {
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
    return rt(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), yi(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (b(), T("div", {
      id: l.id,
      class: Se(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      E("div", {
        class: Se(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        E("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Oa));
  }
}), on = (i, t, e) => {
  if (t === "unitDependent")
    if (e === "fraction") {
      if (/\/0$/.test(i))
        return {
          value: i,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(i), n = Ss(i);
      return {
        value: i,
        valid: s || n
      };
    } else {
      const n = /^-?\d*\.?\d*$/.test(i);
      if (n && i !== "" && i !== "-" && i !== "." && !i.endsWith(".")) {
        const r = parseFloat(i);
        if (!isNaN(r))
          return {
            value: r,
            valid: !0
          };
      }
      return {
        value: i,
        // Keep as string for partial inputs
        valid: n
      };
    }
  if (t === "integer") {
    const n = /^-?\d*$/.test(i);
    if (n && i !== "" && i !== "-") {
      const r = parseInt(i, 10);
      if (!isNaN(r))
        return {
          value: r,
          valid: !0
        };
    }
    return {
      value: i,
      // Keep as string for partial inputs
      valid: n
    };
  }
  if (t === "float") {
    const n = /^-?\d*\.?\d*$/.test(i);
    if (n && i !== "" && i !== "-" && i !== "." && !i.endsWith(".")) {
      const r = parseFloat(i);
      if (!isNaN(r))
        return {
          value: r,
          valid: !0
        };
    }
    return {
      value: i,
      // Keep as string for partial inputs
      valid: n
    };
  }
  return { value: i, valid: !0 };
};
function Fa({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = Y({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (l, a = !1) => {
    if (l == null || l === "") {
      const d = i.required && !i.disableRequiredValidation;
      return _o(l, "decimal", d);
    }
    if (i.allowZero === !1 && (l === 0 || l === "0"))
      return {
        value: null,
        valid: !1,
        message: "zero_not_allowed"
      };
    const u = String(l);
    switch (i.type) {
      case "string":
        return { value: u, valid: !0 };
      case "unitDependent":
        if (a)
          return on(u, i.type, i.numberFormat);
        try {
          const d = S({
            v: l,
            nf: i.numberFormat,
            dp: i.decimalPlaces,
            fr: i.fractionRoundTo
          });
          if (typeof d == "number") {
            let v = d, h = !0, f;
            return i.allowZero === !1 && v === 0 ? {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            } : (typeof i.min == "number" && v < i.min && (v = i.min, h = !1, f = "below_min"), typeof i.max == "number" && v > i.max && (v = i.max, h = !1, f = "above_max"), { value: v, valid: h, message: f });
          }
          return { value: d, valid: !0 };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (a)
          return on(u, i.type);
        try {
          const v = S({
            v: l,
            nf: "decimal"
          });
          if (v === null)
            return i.required && !i.disableRequiredValidation ? { value: null, valid: !1, message: "field_required" } : { value: null, valid: !0 };
          let h = v;
          if (i.type === "integer" && (h = Math.round(h)), i.allowZero === !1 && h === 0)
            return {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            };
          let f = !0, m;
          return typeof i.min == "number" && h < i.min && (h = i.min, f = !1, m = "below_min"), typeof i.max == "number" && h > i.max && (h = i.max, f = !1, m = "above_max"), { value: h, valid: f, message: m };
        } catch {
          return {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      default:
        return { value: l, valid: !0 };
    }
  }, r = (l, a = !1) => a && i.type === "unitDependent" && i.numberFormat === "fraction" ? !1 : a && (i.type === "integer" || i.type === "float" || i.type === "unitDependent" && i.numberFormat === "decimal") ? typeof l.value == "number" && l.valid : !!(l.valid || l.message === "below_min" || l.message === "above_max" || l.message === "field_required" && !i.disableRequiredValidation);
  return {
    state: s,
    ...{
      //Handler to set the flag on mouse down
      handleMouseDown: () => {
        e.value && (s.value.isMouseDown = !0);
      },
      //Handler to reset the flag on mouse up
      handleMouseUp: () => {
        e.value && (s.value.isMouseDown = !1);
      },
      handleInput: (l) => {
        if (!e.value) return;
        const a = l.target;
        if (s.value.isMouseDown) {
          const d = n(a.value, !1);
          r(d, !1) && (t("update:value", d.value), t("validation", d, i.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const u = n(a.value, !0);
        t("validation", u, i.id), t("input", a.value), r(u, !0) && t("update:value", u.value);
      },
      handleBlur: (l) => {
        if (!e.value) return;
        s.value.isTyping = !1;
        const a = l.target, u = n(a.value, !1);
        t("validation", u, i.id), r(u) && (t("update:value", u.value), s.value.lastValidValue = String(u.value ?? "")), t("blur", l);
      },
      handleFocus: (l) => {
        e.value && (s.value.isTyping = !0, t("focus", l));
      },
      handleKeydown: (l) => {
        if (e.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(l.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(l.key))
            if (i.type === "unitDependent" && i.numberFormat === "fraction") {
              const a = l.target, u = a.value, d = a.selectionStart || 0, v = u.substring(0, d);
              if (l.key === "/" && u.includes("/")) {
                l.preventDefault();
                return;
              }
              if (l.key === " " && /\s$/.test(v)) {
                l.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(l.key) || l.preventDefault();
            } else (i.type === "integer" || i.type === "float") && ((i.type === "integer" ? /^[-0-9]$/.test(l.key) : /^[-0-9.]$/.test(l.key)) || l.preventDefault());
          if (l.key === "Enter") {
            s.value.isTyping = !1;
            const a = l.target, u = n(a.value, !1);
            t("validation", u, i.id), r(u) && (t("update:value", u.value), s.value.lastValidValue = String(u.value ?? "")), t("enter", u);
          }
          l.key === "Escape" && (s.value.isTyping = !1, t("escape"));
        }
      },
      // Better input pattern for HTML validation
      getInputPattern: () => {
        switch (i.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return i.numberFormat === "fraction" ? "-?([0-9]+( [0-9]+)?)?(/[0-9]+)?" : "-?[0-9]*\\.?[0-9]*";
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
      handleCompositionEnd: (l) => {
        s.value.isComposing = !1, s.value.isTyping = !1;
        const a = l.target, u = n(a.value, !1);
        t("validation", u, i.id), r(u) && (t("update:value", u.value), s.value.lastValidValue = String(u.value ?? ""));
      },
      handlePaste: (l) => {
        var u, d;
        if (!e.value) return;
        const a = ((d = (u = l.clipboardData) == null ? void 0 : u.getData("text")) == null ? void 0 : d.trim()) || "";
        if (i.type === "unitDependent" && i.numberFormat === "fraction") {
          const v = a.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!Ss(v)) {
            l.preventDefault(), t("validation", {
              value: v,
              valid: !1,
              message: `Pasted text "${a}" is not a valid fraction format`
            }, i.id);
            return;
          }
          if (v !== a) {
            l.preventDefault();
            const h = l.target;
            h.value = v;
            const f = n(v, !0);
            t("validation", f, i.id), t("input", v);
          }
        }
        t("paste", l);
      }
    },
    processValue: n
  };
}
function _a({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = Y({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (r) => {
    if (!(i != null && i.output) || i.output === "string")
      return {
        value: r,
        valid: !0
      };
    if (i.options && i.options.length > 0) {
      let o = r;
      return i.numberFormat && (i.numberFormat === "fraction" ? o = String(r) : o = Number(r)), i.options.some((a) => a.value === o) ? {
        value: o,
        valid: !0
      } : {
        value: o,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: r,
      valid: !0
    };
  };
  return {
    state: s,
    processValue: n,
    handleSelectChange: (r) => {
      if (!e.value) return;
      const o = r.target;
      if (i.multiEdit && o.value === " ") {
        t("update:value", null);
        return;
      }
      const l = n(o.value);
      t("validation", l, i.id), l.valid && t("update:value", l.value);
    }
  };
}
function Ma({
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
const qa = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Ba = /* @__PURE__ */ Ee({
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
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {},
    disableRequiredValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = Y(!0), r = Y(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: a,
      handleFocus: u,
      handleBlur: d,
      handleKeydown: v,
      handleCompositionStart: h,
      handleCompositionEnd: f,
      handlePaste: m
    } = Fa({
      props: e,
      emit: s,
      isMounted: n
    }), I = (q) => {
      const y = q.getBoundingClientRect(), F = window.getComputedStyle(q);
      return y.width > 0 && y.height > 0 && F.display !== "none" && F.visibility !== "hidden";
    };
    return rt(() => {
      (C(e.default) && e.value === void 0 || e.value === null) && s("update:value", e.default), e.focus && r.value && I(r.value) && nt(() => r.value.focus());
    }), yi(() => {
      n.value = !1;
    }), (q, y) => (b(), T("input", ui(q.$attrs, {
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
      onInput: y[0] || (y[0] = //@ts-ignore
      (...F) => P(o) && P(o)(...F)),
      onFocus: y[1] || (y[1] = //@ts-ignore
      (...F) => P(u) && P(u)(...F)),
      onBlur: y[2] || (y[2] = //@ts-ignore
      (...F) => P(d) && P(d)(...F)),
      onKeydown: y[3] || (y[3] = //@ts-ignore
      (...F) => P(v) && P(v)(...F)),
      onCompositionstart: y[4] || (y[4] = //@ts-ignore
      (...F) => P(h) && P(h)(...F)),
      onCompositionend: y[5] || (y[5] = //@ts-ignore
      (...F) => P(f) && P(f)(...F)),
      onPaste: y[6] || (y[6] = //@ts-ignore
      (...F) => P(m) && P(m)(...F)),
      onMousedown: y[7] || (y[7] = //@ts-ignore
      (...F) => P(l) && P(l)(...F)),
      onMouseup: y[8] || (y[8] = //@ts-ignore
      (...F) => P(a) && P(a)(...F))
    }), null, 16, qa));
  }
}), ja = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ha = /* @__PURE__ */ Ee({
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
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "input", "focus", "blur"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = Y(!0), r = Y(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = Ma({
      props: e,
      emit: s,
      isMounted: n
    });
    return (u, d) => (b(), T("input", {
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
      onChange: d[0] || (d[0] = //@ts-ignore
      (...v) => P(o) && P(o)(...v)),
      onFocus: d[1] || (d[1] = //@ts-ignore
      (...v) => P(l) && P(l)(...v)),
      onBlur: d[2] || (d[2] = //@ts-ignore
      (...v) => P(a) && P(a)(...v))
    }, null, 40, ja));
  }
}), Ga = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Na = ["disabled", "selected"], Wa = {
  key: 0,
  value: " "
}, Ua = ["hidden", "value", "disabled"], Va = /* @__PURE__ */ Ee({
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
    inputClasses: {},
    decimalPlaces: {},
    fractionRoundTo: {}
  },
  emits: ["update:value", "focus", "blur", "validation"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = Y(!0), r = Y(null), o = se(() => e.options.map((a) => {
      var u, d, v;
      return {
        value: a.value,
        label: ((u = a.label) == null ? void 0 : u.toUpperCase()) ?? ((v = (d = a.value) == null ? void 0 : d.toString()) == null ? void 0 : v.toUpperCase()),
        hidden: a.hidden ?? !1,
        disabled: a.disabled ?? !1
      };
    })), {
      handleSelectChange: l
    } = _a({
      props: e,
      emit: s,
      isMounted: n
    });
    return (a, u) => {
      var d, v, h, f;
      return b(), T("select", ui(a.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: u[0] || (u[0] = //@ts-ignore
        (...m) => P(l) && P(l)(...m))
      }), [
        E("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, re(((v = (d = e.text) == null ? void 0 : d.select) == null ? void 0 : v.toUpperCase()) ?? "SELECT"), 9, Na),
        e.multiEdit ? (b(), T("option", Wa, re(((f = (h = e.text) == null ? void 0 : h.delete) == null ? void 0 : f.toUpperCase()) ?? "DELETE"), 1)) : U("", !0),
        (b(!0), T(be, null, Ae(o.value, (m) => (b(), T("option", {
          key: m.value,
          hidden: m.hidden,
          value: m.value,
          disabled: m.disabled
        }, re(m.label), 9, Ua))), 128))
      ], 16, Ga);
    };
  }
}), za = ["for"], Ya = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, Ei = /* @__PURE__ */ Ee({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (b(), T("label", {
      for: t.id,
      class: "input-label"
    }, [
      qt(re(t.label) + " ", 1),
      t.required ? (b(), T("span", Ya, "*")) : U("", !0)
    ], 8, za));
  }
}), Xa = ["data-field-id"], Ka = {
  key: 0,
  class: "input-label-group"
}, Za = ["disabled", "selected"], Ja = {
  key: 0,
  value: " "
}, Qa = ["hidden", "value", "disabled"], $t = /* @__PURE__ */ Ee({
  inheritAttrs: !0,
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
    ariaLabel: {},
    disableRequiredValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "validation"],
  setup(i, { emit: t }) {
    const e = t, s = i, n = Y(null), r = Y(null), o = Y(!0), l = Y(s.numberFormat), a = se(() => s.custom ? "custom-" + s.id : s.id), u = se(() => `${a.value}-error`), d = se(() => s.label || s.placeholder), v = se(() => x(s.type, s.numberFormat)), h = se(() => k(s.type, s.numberFormat)), f = se(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), m = se(() => {
      let D = s.value;
      if (s.type !== "unitDependent" || !D) return D;
      try {
        return S({ v: D, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), I = se(() => s.options.map((D) => {
      var G, te;
      return {
        value: D.value,
        label: ((G = D.label) == null ? void 0 : G.toUpperCase()) || ((te = D.value) == null ? void 0 : te.toString().toUpperCase()),
        hidden: D.hidden || !1,
        disabled: D.disabled || !1
      };
    })), q = se(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), y = se(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": d.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), F = se(() => ({
      ...y.value,
      type: s.type,
      inputMode: h.value,
      inputType: v.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), _ = se(() => ({
      ...y.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), M = se(() => ({
      ...y.value,
      options: I.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), j = (D) => {
      r.value = D;
    }, Z = (D) => s.label && s.enableLabel && s.labelPosition === D, x = (D, G) => {
      switch (D) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return G === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, k = (D, G) => {
      if (D === "unitDependent")
        return G === "fraction" ? "text" : "decimal";
      switch (D) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, A = (D) => {
      e("update:value", D);
    }, K = (D, G) => {
      D.valid === void 0 || D.valid === !0 ? (o.value = !0, e("validation", n.value, D)) : D.valid === !1 && D.message && (o.value = !1, console.warn(`Field validation error for field ${G} - ${D.message}`), e("validation", n.value, D));
    };
    return Te(() => s.numberFormat, (D, G) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && D !== G && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const te = S({ v: s.value, nf: D });
            e("update:value", te);
          } catch {
            e("update:value", D === "decimal" ? 0 : "0");
          }
        l.value = D;
      }
    }), (D, G) => (b(), T("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Se(["input-wrapper", q.value]),
      "data-field-id": a.value
    }, [
      D.type === "checkbox" ? (b(), T("div", Ka, [
        Z("first") ? (b(), ve(Ei, {
          key: 0,
          id: a.value,
          label: D.label,
          required: D.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        D.type === "checkbox" ? (b(), ve(Ha, ui({
          key: 1,
          ref: j,
          type: "checkbox"
        }, _.value, {
          checked: D.value === D.trueValue,
          "onUpdate:value": G[0] || (G[0] = (te) => e("update:value", te))
        }), null, 16, ["checked"])) : U("", !0),
        Z("last") ? (b(), ve(Ei, {
          key: 2,
          id: a.value,
          label: D.label,
          required: D.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ])) : (b(), T(be, { key: 1 }, [
        Z("first") ? (b(), ve(Ei, {
          key: 0,
          id: a.value,
          label: D.label,
          required: D.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        f.value ? (b(), ve(Ba, ui({
          key: 1,
          ref: j
        }, F.value, {
          "input-type": v.value,
          "input-mode": h.value,
          value: m.value,
          "disable-required-validation": D.disableRequiredValidation,
          onValidation: K,
          "onUpdate:value": A
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : D.type === "select" ? (b(), ve(Va, ui({
          key: 2,
          ref: j
        }, M.value, {
          "onUpdate:value": G[1] || (G[1] = (te) => e("update:value", te))
        }), {
          default: ms(() => {
            var te, O, B, X;
            return [
              E("option", {
                value: "",
                disabled: D.selectFirstOptionDisabled,
                selected: !D.value
              }, re(((O = (te = D.text) == null ? void 0 : te.select) == null ? void 0 : O.toUpperCase()) ?? "SELECT"), 9, Za),
              D.multiEdit ? (b(), T("option", Ja, re(((X = (B = D.text) == null ? void 0 : B.delete) == null ? void 0 : X.toUpperCase()) ?? "DELETE"), 1)) : U("", !0),
              (b(!0), T(be, null, Ae(I.value, (ie) => (b(), T("option", {
                key: ie.value,
                hidden: ie.hidden,
                value: ie.value,
                disabled: ie.disabled
              }, re(ie.label), 9, Qa))), 128))
            ];
          }),
          _: 1
        }, 16)) : U("", !0),
        Z("last") ? (b(), ve(Ei, {
          key: 3,
          id: a.value,
          label: D.label,
          required: D.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ], 64)),
      Vr(D.$slots, "default")
    ], 10, Xa));
  }
}), ec = {
  key: 0,
  class: "inputs"
}, tc = { class: "label" }, ic = { class: "label" }, sc = { class: "label" }, nc = ["onClick"], rc = { class: "price" }, oc = ["aria-label"], ds = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = Y(!1), r = se(() => e.extraType + "Options"), o = se(() => {
      var m;
      if (!((m = e.allOptions) != null && m.length)) return "auto";
      const h = e.allOptions.length;
      return h ? `repeat(${h + 3 - 1}, max-content) 1fr` : "auto";
    }), l = (h, f) => {
      s("update-all", e.shape, e.extraType, h, f);
    }, a = (h, f, m) => {
      s("set", e.shape, e.extraType, h, f, m);
    }, u = (h, f, m, I, q) => {
      var M;
      if (!h) return [];
      const y = (M = f == null ? void 0 : f[m]) == null ? void 0 : M[I];
      if (!y)
        return console.error(`ExtrasInputs: cannot find pricing options for ${m} > ${I}`), [];
      const F = Object.values(y);
      if (!F.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${m} > ${I}`), [];
      const _ = F.filter((j) => typeof j == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(h, _, q) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, d = (h) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const f = e.getPrice(e.shape, e.extraType, h);
      return f ? e.formatPrice(f) : "";
    }, v = () => {
      const h = [];
      e.extraType in e.shape || new le(
        {
          item: e.shape,
          message: `The extra type '${e.extraType}' does not exist in the part`
        }
      ), r.value in e.shape || new le(
        {
          item: e.shape,
          message: `The options key '${r.value}' does not exist in the part`
        }
      ), h.length && (n.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + h.map((f) => f.message).join(" ")));
    };
    return rt(() => v()), (h, f) => {
      var I, q, y, F, _, M, j, Z;
      const m = Ht("FontAwesomeIcon");
      return n.value ? U("", !0) : (b(), T("div", {
        key: 0,
        class: Se(["extras group", [h.extraType]]),
        style: Ce({ "grid-column-end": "span " + h.partColumns })
      }, [
        h.allOptions.length === 1 && h.allOptions[0].length === 1 ? (b(), T("div", ec, [
          E("div", tc, re((q = (I = h.allOptions) == null ? void 0 : I[0]) == null ? void 0 : q[0]), 1),
          E("div", null, [
            (y = h.shape) != null && y[r.value] && "all" in h.shape[r.value] ? (b(), ve($t, {
              key: 0,
              id: `${h.extraType}-all-${h.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: P(W)("general.all"),
              "true-value": (_ = (F = h.allOptions) == null ? void 0 : F[0]) == null ? void 0 : _[0],
              "false-value": "",
              value: (j = h.shape[r.value].all) == null ? void 0 : j[(M = h.labels) == null ? void 0 : M[0]],
              "onUpdate:value": f[0] || (f[0] = (x) => {
                var k, A;
                a("all", (k = h.labels) == null ? void 0 : k[0], x), l((A = h.labels) == null ? void 0 : A[0], x);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : U("", !0)
          ]),
          (b(!0), T(be, null, Ae(h.extraKeys, (x) => {
            var k, A, K, D, G, te;
            return b(), T("div", { key: x }, [
              (k = h.labels) != null && k[0] && ((K = (A = h.shape) == null ? void 0 : A[r.value]) != null && K[x]) && h.labels[0] in h.shape[r.value][x] ? (b(), ve($t, {
                key: 0,
                id: `${h.extraType}-${x}-${h.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: P(W)(((D = h.userFriendlyFieldMap) == null ? void 0 : D[x]) || x),
                "true-value": (te = (G = h.allOptions) == null ? void 0 : G[0]) == null ? void 0 : te[0],
                "false-value": "",
                value: h.shape[r.value][x][h.labels[0]],
                "onUpdate:value": (O) => a(x, h.labels[0], O)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : U("", !0)
            ]);
          }), 128))
        ])) : (b(), T("div", {
          key: 1,
          class: "inputs grid-layout",
          style: Ce({
            "grid-template-columns": o.value
          })
        }, [
          (Z = h.shape) != null && Z[r.value] && "all" in h.shape[r.value] ? (b(), T(be, { key: 0 }, [
            E("div", ic, re(P(W)("general.all")), 1),
            (b(!0), T(be, null, Ae(h.allOptions, (x, k) => {
              var A, K;
              return b(), ve($t, {
                id: `${h.extraType}-all-${h.labels[k]}-${k}-${h.shapeIndex}`,
                key: `${h.extraType}-all-${h.labels[k]}-${k}-${h.shapeIndex}`,
                type: "select",
                disabled: u(h.pricing, h.shape, r.value, "all", k).length === 0,
                options: u(h.pricing, h.shape, r.value, "all", k).map((D) => ({ value: D, label: D })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (K = h.shape[r.value].all) == null ? void 0 : K[(A = h.labels) == null ? void 0 : A[k]],
                "onUpdate:value": (D) => {
                  var G, te;
                  a("all", (G = h.labels) == null ? void 0 : G[k], D), l((te = h.labels) == null ? void 0 : te[k], D);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            f[2] || (f[2] = E("div", null, null, -1)),
            f[3] || (f[3] = E("div", null, null, -1))
          ], 64)) : U("", !0),
          (b(!0), T(be, null, Ae(h.extraKeys, (x) => {
            var k, A;
            return b(), T(be, { key: x }, [
              (k = h.shape) != null && k[r.value] && x in h.shape[r.value] ? (b(), T(be, { key: 0 }, [
                E("div", sc, re(P(W)(((A = h.userFriendlyFieldMap) == null ? void 0 : A[x]) || x)), 1),
                f[4] || (f[4] = qt()),
                (b(!0), T(be, null, Ae(h.allOptions, (K, D) => {
                  var G;
                  return b(), ve($t, {
                    id: `${h.extraType}-${x}-${h.labels[D]}-${D}-${h.shapeIndex}`,
                    key: `${h.extraType}-${x}-${h.labels[D]}-${D}-${h.shapeIndex}`,
                    type: "select",
                    disabled: u(h.pricing, h.shape, r.value, x, D).length === 0,
                    options: u(h.pricing, h.shape, r.value, x, D).map((te) => ({
                      value: te,
                      label: te
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: h.shape[r.value][x][(G = h.labels) == null ? void 0 : G[D]],
                    "onUpdate:value": (te) => {
                      var O;
                      return a(x, (O = h.labels) == null ? void 0 : O[D], te);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : U("", !0),
              E("button", {
                type: "button",
                class: "c-btn c-btn--delete-solid",
                onClick: () => P(Es)(h.shape, h.extraType, x)
              }, [
                ye(m, { icon: ["fass", "trash"] })
              ], 8, nc),
              E("div", rc, re(d(x) || P(W)("general.na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        E("button", {
          type: "button",
          class: "c-btn c-btn--delete-solid",
          "aria-label": `${P(W)("actions.delete")} ${P(ns)(P(W)("woodwork." + h.extraLabel))}`,
          onClick: f[1] || (f[1] = () => P(ua)(h.shape, h.extraType, !0))
        }, [
          ye(m, { icon: ["fass", "trash"] }),
          qt(" " + re(`${P(W)("actions.delete")} ${P(ns)(P(W)("woodwork." + h.extraLabel))}`), 1)
        ], 8, oc)
      ], 6));
    };
  }
}), lc = ["id", "disabled"], ac = { class: "icon" }, cc = /* @__PURE__ */ Ee({
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
      var a, u, d, v;
      const l = Ht("FontAwesomeIcon");
      return b(), T("button", {
        id: r.id,
        class: Se(["c-btn finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (v = (d = r.inputShape) == null ? void 0 : d.finish) == null ? void 0 : v.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        E("div", ac, [
          ye(l, { icon: ["fass", "spray-can"] })
        ])
      ], 10, lc);
    };
  }
}), uc = Ee({
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
      return Cs(this.inputShape);
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
}), hc = ["id", "disabled"];
function dc(i, t, e, s, n, r) {
  const o = Ht("FontAwesomeIcon");
  return b(), T("button", {
    id: i.id,
    class: Se(["c-btn machining-button", { selected: i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    ye(o, { icon: ["fass", "hammer"] })
  ], 10, hc);
}
const pc = /* @__PURE__ */ si(uc, [["render", dc]]), fc = { id: "uploader" }, gc = {
  key: 0,
  class: "debug"
}, mc = {
  key: 1,
  class: "selected-files"
}, vc = ["src"], yc = ["onClick"], bc = !0, wc = /* @__PURE__ */ Ee({
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
    const e = Tt(() => Promise.resolve().then(() => Zi)), s = Y(null), n = Y({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (f) => ["image/jpeg", "image/jpg", "image/png"].includes(f.type), a = () => {
      var f;
      (f = s.value) == null || f.click();
    }, u = (f) => {
      const m = f.target, I = m.files;
      if (!I) return;
      const q = Array.from(I), y = q.filter((k) => !l(k));
      if (y.length > 0) {
        const k = y.map((A) => A.name).join(", ");
        alert(`Invalid file type(s): ${k}
Only JPG and PNG files are allowed.`), m.value = "";
        return;
      }
      const F = n.value.files || [];
      if (F.length + q.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), m.value = "";
        return;
      }
      const M = [...F, ...q], j = d(M), Z = M.map((k, A) => ({
        originalName: k.name,
        newName: `${r.prefix}-${A + 1}-${r.uniqueId}${v(k.name)}`
      })), x = {
        shapeId: r.shapeId,
        files: M,
        previewUrls: j,
        metadata: Z
      };
      n.value = x, o("update", x), m.value = "";
    }, d = (f) => f.map((m) => URL.createObjectURL(m)), v = (f) => f.substring(f.lastIndexOf(".")), h = (f) => {
      URL.revokeObjectURL(n.value.previewUrls[f]);
      const m = [...n.value.files], I = [...n.value.previewUrls], q = [...n.value.metadata];
      if (m.splice(f, 1), I.splice(f, 1), q.splice(f, 1), m.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const y = {
          shapeId: r.shapeId,
          files: m,
          previewUrls: I,
          metadata: q
        };
        n.value = y, o("update", y);
      }
    };
    return zr(() => {
      var f;
      (f = n.value) != null && f.previewUrls && n.value.previewUrls.forEach((m) => URL.revokeObjectURL(m));
    }), rt(() => {
      n.value.shapeId = r.shapeId;
      const f = r.images.find((m) => m.shapeId === r.shapeId);
      if (f) {
        const m = d(f.files);
        n.value = {
          ...f,
          previewUrls: m
        };
      }
    }), (f, m) => {
      var q;
      const I = Ht("FontAwesomeIcon");
      return b(), T("div", fc, [
        i.env === "development" && bc ? (b(), T("div", gc, [
          ye(P(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        E("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        E("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          ye(I, { icon: ["fass", "files"] })
        ]),
        (q = n.value.files) != null && q.length ? (b(), T("div", mc, [
          (b(!0), T(be, null, Ae(n.value.files, (y, F) => (b(), T("div", {
            key: F,
            class: "selected-file"
          }, [
            E("img", {
              src: n.value.previewUrls[F],
              alt: "Preview"
            }, null, 8, vc),
            E("button", {
              class: "remove-file",
              type: "button",
              onClick: (_) => h(F)
            }, [
              ye(I, { icon: ["fass", "trash"] })
            ], 8, yc)
          ]))), 128))
        ])) : U("", !0)
      ]);
    };
  }
}), Sc = /* @__PURE__ */ si(wc, [["__scopeId", "data-v-766ba983"]]);
function xc(i) {
  var a, u;
  const t = i.x, e = i.x + i.l, s = it().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = it().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(qi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(qi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((u = (a = i == null ? void 0 : i.stock) == null ? void 0 : a.saw) == null ? void 0 : u.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(Bi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(Bi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function kc() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(Tn(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(Dn(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function rr(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? Cc.call(this, r, o, t[n]) : Ic.call(this, r, o, t[n]);
  });
}
function Cc(i, t, e) {
  const s = it().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = or(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(qi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, d;
    return ((d = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : d.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function Ic(i, t, e) {
  const s = it().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = or(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Bi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  Pc(r), this.axes.cutMeasurementYAxes.push(r);
}
function or(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function Pc(i) {
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
function mi() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Tc() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Ki() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Dc() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text id").text((t) => ln.call(this, t)).classed("hidden", (t, e, s) => this.isTextHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (i) => i.text((t) => ln.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text name").text((t) => an.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (i) => i.text((t) => an.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text length").text((t) => cn.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((t) => cn.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text width").text((t) => un.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (t, e, s) => {
      const n = s[e], r = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    }),
    (i) => i.text((t) => un.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("transform", (t, e, s) => {
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
function ln(i) {
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
function an(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function cn(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.l, o: this.numberConfig }).toString();
}
function un(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.w, o: this.numberConfig }).toString();
}
function Lc(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = Al(
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
        u.attr("class", "ray").attr("x1", (d) => this.scales.xPositionScale(d.x1)).attr("x2", (d) => this.scales.xPositionScale(d.x2)).attr("y1", (d) => this.scales.yPositionScale(d.y1)).attr("y2", (d) => this.scales.yPositionScale(d.y2));
      };
      if (this.state.env !== "development") return;
      const a = Un(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((d) => o.call(this, d)),
        (u) => u.call((d) => o.call(this, d)),
        (u) => u.remove()
      );
    }
    s = El(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Nt();
  for (const r of e.toArray()) {
    const o = Vn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = Ll(i, o, this.props.stock.value);
      l && n.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new _e(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new _e(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new _e(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      0 + (this.props.stock.value.trim.y1 ?? 0)
    ),
    new _e(
      0 + (this.props.stock.value.trim.x1 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    ),
    new _e(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    )
  ].forEach((r) => n.addPoint(r)), t = n.toArray()) : (n.addPoint(new _e(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), t = n.toArray());
  for (let r = t.length; r--; ) {
    const o = t[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        t.splice(r, 1);
        break;
      }
  }
  return $c.call(this, t, i), Ac.call(this, t, i), !!(t != null && t.length);
}
function $c(i, t) {
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
function Ac(i, t) {
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
const Ec = (i) => i.id;
function Oc() {
  if (!this.props.containerWidth) return;
  mi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && Fc.call(this), Rc.call(this);
}
function Rc() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Ec).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return hn.call(this, t), dn.call(this, t), t.on("mousedown", pn.bind(this)), t;
    },
    (i) => (hn.call(this, i), dn.call(this, i), i.on("mousedown", pn.bind(this)), i),
    (i) => i.remove()
  ), Gc.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Dc.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Fc() {
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
  this.scales.scoreColorScale = hi([dt(251, 224, 255), dt(122, 0, 138)]).domain([e, s]);
}
function hn(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => vi.call(this, e));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Ln(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function _c(i) {
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
function dn(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (t) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const e = Me(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    const s = Me(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", vi.call(this, e));
  }, { passive: !0 });
}
function pn(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Mc.call(this, i, t), (this.settings.app || this.settings.embed) && jc.call(this, i, t), this.state.device === "desktop" && (Ki.call(this), xc.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function Mc(i, t) {
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
        ], Bc.call(this, t);
        break;
      case "groups":
        e = ["id", "addedAsGroup"];
        break;
      case "score":
        e = ["id", "bestScore.score"];
        break;
      default:
        e = ["id", "placementOrder", "priority", "addedAsGroup", "bestScore.score", "upDirection"];
    }
    console.table(qc(t, e)), console.log(t.bestScore.score);
  }
}
function qc(i, t) {
  return t.reduce((e, s) => {
    const n = tu(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function Bc(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function jc(i, t) {
  var e;
  if (this.settings.app || this.settings.embed) {
    const s = {
      name: t.name,
      id: t.id,
      x: t.x,
      y: t.y,
      l: t.l,
      w: t.w,
      banding: t != null && t.banding && typeof t.banding == "object" ? t.banding : null,
      rot: t.rot,
      stock: (e = t == null ? void 0 : t.stock) == null ? void 0 : e.id,
      color: vi.call(this, t),
      notes: t == null ? void 0 : t.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function vi(i) {
  var n;
  const t = dt(204, 204, 204);
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
        return r != null && typeof r.toString == "function" ? r : r != null && typeof r.r == "number" && typeof r.g == "number" && typeof r.b == "number" ? (console.warn("Detected corrupted score color object from scale:", r, "for shape:", i), dt(r.r, r.g, r.b, r.opacity ?? 1)) : (console.warn("Score color scale returned null, undefined, or unexpected value:", r, "for shape:", i), t);
      }
    }
  const e = parseInt(i.parentID);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(e) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? dt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", i, s), t);
}
function Hc(i) {
  const t = [];
  for (const e of i)
    if (e.added && (e != null && e._banding))
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = _c.call(this, s));
        const o = Nc.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function fn(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Oi.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Oi.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Oi.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Oi.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Gc(i) {
  if (!this.settings.main) return;
  const t = Hc.call(this, i);
  if (t.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t, (e, s) => s).join(
    (e) => e.append("line").call((s) => fn.call(this, s)),
    (e) => e.call((s) => fn.call(this, s)),
    (e) => e.remove()
  );
}
function Oi(i, t) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[t]) ?? 0;
}
function Nc(i, t) {
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
function Wc(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const gn = (i) => i.id;
function mn(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function vn(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Uc() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), kc.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], gn).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => mn.call(this, t)),
    (i) => i.call((t) => mn.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], gn).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => vn.call(this, t)),
    (i) => i.call((t) => vn.call(this, t)),
    (i) => i.remove()
  );
}
function lr(i) {
  return i.id;
}
function yn({ parent: i, near: t, far: e }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [i, t, e].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, lr).join(
    (n) => n.append("rect").attr("class", "segment").call((r) => bn.call(this, r)),
    (n) => n.call((r) => bn.call(this, r)),
    (n) => n.remove()
  ), this.state.env === "development" && Vc.call(this, s), !this.settings.app && this.state.env === "development" && zc.call(this);
}
function bn(i) {
  return i.classed("offcut", (t) => t.offcut).classed("near", (t) => t.segmentType === "near").classed("far", (t) => t.segmentType === "far").classed("parent", (t, e) => t.id !== "root" && e === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function Vc(i) {
  this.selections.segmentGroup.selectAll("text").data(i, lr).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => wn.call(this, e)),
    (t) => t.call((e) => wn.call(this, e)),
    (t) => t.remove()
  );
}
function wn(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function zc() {
  this.selections.segmentRectangles.on("mousedown", function(i, t) {
    console.log("segment", `[${(t == null ? void 0 : t.parentID) || "-"}]->[${t.id}] {P${t.phase}} ${t.l}x${t.w} ${t.cutDirection} ${t.hasHeadCut ? "HEAD" : "NORM"}`);
  });
}
function ar(i) {
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
const { currentCutIndex: cr } = bs();
function Yc() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (i, t) => t).join(
    (i) => i.append("line").attr("class", "cut").call((t) => Sn.call(this, t)),
    (i) => i.call((t) => Sn.call(this, t)),
    (i) => i.remove()
  ), dr.call(this));
}
function Sn(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim).classed("head", (t) => t.isHead);
}
function ur(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function hr(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function Xc(i, t, e, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] || !s && r.guillotineData.parentSegmentID === t ? "visible" : "hidden"), cr.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (r) => {
    var o;
    return (o = r == null ? void 0 : r.ptxData) == null ? void 0 : o.isDummy;
  }), s || Zc.call(this, i, t);
}
function Kc(i, t, e, s, n) {
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
    this.state.device === "desktop" && !i.isTrim && rr.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function dr() {
  var i, t;
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), (i = this.selections) != null && i.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), (t = this.selections) != null && t.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (e) => {
    const s = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return Math.max(1, Math.ceil(s));
  }), mi.call(this), Ki.call(this);
}
function Zc(i, t) {
  var v, h, f, m;
  const e = (v = i == null ? void 0 : i.guillotineData) == null ? void 0 : v.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (I) => ur(I, t, e)), this.selections.cutLines.classed("inside-segment", (I) => hr(I, t));
  const s = ar.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = pr(i, r);
  if (!o) return;
  let l = [], a;
  const u = this.getHalfBladeWidth(i.stock), d = i.dimension === "l" ? "y" : "x";
  (i == null ? void 0 : i.dimension) === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      i.y1 + u,
      n.y + n.w
    ]
  ], a = [(h = i == null ? void 0 : i.distances) == null ? void 0 : h.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      i.x1 + u,
      n.x + n.l
    ]
  ], a = [(f = i == null ? void 0 : i.distances) == null ? void 0 : f.left, (m = i == null ? void 0 : i.distances) == null ? void 0 : m.right]), this.state.device === "desktop" && !i.isTrim && a && rr.call(this, l, a, d);
}
function Jc(i = null, t = "") {
  var f, m, I, q;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const y = this.props.cuts.value.filter((F) => F.isTrim);
    i = i + y.length, i - y.length >= this.props.cuts.value.length - y.length && (cr.value = this.props.cuts.value.length - y.length - 1);
  }
  const e = this.props.cuts.value[i];
  if (!e) return;
  if (mi.call(this), Ki.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const y = this.selections.cutLines.nodes()[i].parentElement;
    if (!y) return;
    Me(y).raise();
  }
  const s = (f = e.guillotineData) == null ? void 0 : f.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (m = e == null ? void 0 : e.stock) == null ? void 0 : m.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((I = e == null ? void 0 : e.stock) == null ? void 0 : I.cutType) && s !== null && typeof s < "u" ? Xc.call(this, e, s, l, t) : Kc.call(this, e, i, o, r, n), Qc.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = ar.call(this, e);
  if (a === !1) return;
  const { parent: u, children: d } = a;
  if (!((q = e == null ? void 0 : e.guillotineData) != null && q.parentSegmentID))
    return yn.call(this, { parent: u });
  const { near: v, far: h } = pr(e, d);
  yn.call(this, { parent: u, near: v, far: h });
}
function pr(i, t) {
  const e = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = t.find((o) => o.segmentType === "near" && o[e] + o[s] === i[e + "1"] - i.halfBladeWidth()), r = t.find((o) => o.segmentType === "far" && o[e] === i[e + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function Qc(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (ur(s, e, l) || hr(s, e)) && (o += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function eu(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function tu(i, t) {
  return Pe(i, t);
}
class iu {
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
    c(this, "formatNumber", (t) => {
      const e = S({
        v: t,
        o: this.numberConfig
      });
      if (e !== null) return e.toString();
    });
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Me(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: it(),
      yScale: it(),
      yPositionScale: it(),
      xPositionScale: it(),
      yAxisScale: it(),
      measurementScale: it(),
      shapeColorScale: hi(),
      scoreColorScale: hi()
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
    }, this.props = t.props, this.settings = t.settings, this.options = t.options, this.callbacks = t.callbacks, this.numberConfig = t.numberConfig, this.initColors(t), this.initNumbers(t), this.init());
  }
  initColors(t) {
    const e = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, s = (n, r) => dt("#" + (eu(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = hi([
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
      const d = a.node();
      if (!d) return;
      let v = d.getComputedTextLength();
      const h = this.getWidthAttribute(n) - 20;
      for (; v > h && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), v = a.node().getComputedTextLength();
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
    if (!this.props.stock || !this.props.stock.value || !this.selections.htmlEl) return;
    const t = this.props.stock.value, e = this.props.containerWidth.value;
    if (e <= 0) return;
    const s = e - 2 * this.state.padding;
    if (s <= 0) return;
    this.scales.xScale.domain([0, t.l]), this.scales.yScale.domain([0, t.w]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, t.w] : [t.w, 0]), this.scales.xPositionScale.domain([0, t.l]), this.scales.yPositionScale.domain([0, t.w]), this.scales.measurementScale.domain([0, t.l]);
    const n = t.l > 0 ? s * t.w / t.l : 0;
    this.state.w = s + 2 * this.state.padding, this.state.h = n + 2 * this.state.padding;
    const r = t.l > 0 ? t.w / t.l : 0;
    this.state.stretched = !1, this.requiresStretch(t, r) && this.options.enableStretch && (this.state.h = e * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
      this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]
    ), this.scales.yPositionScale.range(
      this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]
      // Use calculated h
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("height", this.state.h + "px"), this.props.containerHeight.value = this.state.h, this.selections.svgCanvas.attr("width", this.state.w).attr("height", this.state.h).attr("viewBox", `0 0 ${this.state.w} ${this.state.h}`)) : (this.selections.el.style("height", null), this.props.containerHeight.value = 0, this.selections.svgCanvas.attr("width", null).attr("height", null).attr("viewBox", null));
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => vi.call(this, s));
    const e = Me(t).select("rect");
    if (e) {
      e.classed("selected", !0), e.style("fill", this.config.colors.partSelected.toString());
      const s = Me(t).datum();
      this.callbacks.onShapeSelect(s, t);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Oc.call(this);
  }
  drawStock() {
    Uc.call(this);
  }
  drawCuts() {
    Yc.call(this);
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
    return C(t) && t !== null ? t.getBladeWidth() : 0;
  }
  getHalfBladeWidth(t = null) {
    const e = this.getBladeWidth(t);
    return e !== void 0 && e > 0 ? e / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), mi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Tc.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Ki.call(this);
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
    this.selections.shapeGroup && (t ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none")));
  }
  toggleSegments(t = !0) {
    this.selections.segmentGroup && (t ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none"));
  }
  toggleCuts(t = !0) {
    this.selections.cutGroup && (t ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none"));
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
      const d = this.scales.measurementScale(t.l), v = this.scales.measurementScale(t.w);
      return d < 50 || v < 50;
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
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => vi.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    mi.call(this);
  }
  updateShapeVisibility() {
    Wc.call(this);
  }
  drawPositions(t) {
    Lc.call(this, t);
  }
  showCut(t) {
    Jc.call(this, t);
  }
  resetCuts() {
    dr.call(this);
  }
}
const su = ["id"], nu = /* @__PURE__ */ Ee({
  __name: "Diagram",
  props: {
    elementId: {},
    app: { type: Boolean, default: !1 },
    embed: { type: Boolean },
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: !0 },
    stockId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: !1 },
    enableStretch: { type: Boolean, default: !0 },
    moveMode: { default: () => Y(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "part-click"],
  setup(i, { expose: t, emit: e }) {
    const {
      r: s,
      activeStock: n,
      activeShapes: r,
      activeCuts: o,
      activeSegments: l,
      currentCutIndex: a,
      getStock: u,
      getShapes: d,
      getSegments: v,
      getCuts: h
    } = bs(), f = i, m = e, I = (ne) => {
      m("part-click", ne);
    }, q = (ne) => {
      m("shape-colour-update", ne);
    }, y = (ne, Fe) => {
      ne != null && ne.id && m("shape-select", ne.id.toString(), Fe);
    }, F = (ne) => {
      ne && m("add-to-parts-bin", ne);
    }, _ = (ne, Fe) => {
      ne && m("move-shape", ne, Fe);
    }, M = Y(0), j = Y(0), Z = Y(null);
    let x, k = Y(!1);
    rt(() => B());
    const A = se(() => ({
      format: f.numberFormat,
      decimals: f.decimalPlaces
    })), K = se(() => f.stockId ? u(f.stockId) : n.value), D = se(() => f.stockId ? d(f.stockId) : r.value), G = se(() => f.main ? f.stockId ? h(f.stockId) : o.value : []), te = se(() => f.main ? f.stockId ? v(f.stockId) : l.value : []);
    In(Z, (ne) => {
      const Fe = ne[0], { width: oe } = Fe.contentRect;
      oe > 0 && (M.value = oe);
    }), Yr(
      M,
      (ne) => {
        x && (ne <= 0 || (x.setDevice(), x.resetShapeAxes(), x.drawAll(), a.value !== null && (x.toggleSegments(!0), x.showCut(a.value))));
      },
      { throttle: 100 }
    );
    let O = !1;
    Te(() => K.value, (ne) => {
      ne && (M.value <= 0 || (O = !0, x.setDevice(), x.resetCuts(), x.removeSegments(), x.drawStock(), x.drawShapes(), x.drawCuts(), nt(() => {
        O = !1;
      })));
    }, { immediate: !1 }), Te(() => D.value, (ne) => {
      O || ne && (M.value <= 0 || (x.setDevice(), x.drawShapes()));
    }, { immediate: !1, deep: !0 }), f.main && (Te(() => G.value, () => {
      O || M.value <= 0 || x.drawCuts();
    }, { immediate: !1, deep: !0 }), Te(a, () => {
      a.value !== null && (M.value <= 0 || (x.toggleSegments(!0), x.showCut(a.value)));
    }, { immediate: !1 }), Te(A, (ne) => {
      x.updateNumberFormat(ne.format, ne.decimals, null);
    }, { immediate: !1 }));
    const B = () => {
      const ne = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${f.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: f.numberFormat,
          decimalPlaces: f.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: f.colors || null,
        settings: {
          main: f.main,
          app: f.app,
          embed: f.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: j,
          containerWidth: M,
          stock: K,
          shapes: D,
          cuts: G,
          segments: te,
          stockList: s.stockList,
          moveMode: f.moveMode,
          app: f.app
        },
        options: {
          disableClick: f.disableClick,
          enableStretch: f.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: q,
          onShapeSelect: y,
          onAddToPartsBin: F,
          onMoveShape: _,
          onPartClick: I
        }
      };
      x = new iu(ne), k.value = !0;
    };
    return t({
      loaded: k,
      toggleShapes: (ne = !1) => {
        x && x.toggleShapes(ne);
      },
      toggleCuts: (ne = !1) => {
        x && x.toggleCuts(ne);
      },
      toggleSegments: (ne = !1) => {
        x && x.toggleSegments(ne);
      },
      drawShapes: () => {
        x && x.drawShapes();
      },
      drawStock: () => {
        x && x.drawStock();
      },
      drawPositions: (ne) => {
        x && x.drawPositions(ne);
      },
      resetPositions: () => {
        x && x.removePositions();
      },
      findShape: (ne) => {
        x && x.findShape(ne);
      },
      clearSelection: () => {
        x && x.clearSelection();
      },
      resetCuts: () => {
        x && (x.toggleSegments(!1), x.resetCuts());
      },
      showCut: (ne) => {
        x && (x.toggleSegments(!0), x.showCut(ne));
      },
      requiresStretch: (ne) => {
        x && x.requiresStretch(ne);
      }
    }), (ne, Fe) => (b(), T("div", {
      id: ne.elementId,
      ref_key: "diagramContainerRef",
      ref: Z,
      class: Se([{ app: ne.app }, "diagram-container"])
    }, null, 10, su));
  }
}), ru = {
  key: 0,
  class: "debug"
}, ou = { key: 2 }, lu = {
  key: 0,
  class: "row table-heading"
}, au = {
  key: 0,
  class: "cell center"
}, cu = {
  key: 1,
  class: "cell del"
}, uu = { class: "cell" }, hu = ["id", "disabled", "onClick"], du = {
  key: 0,
  class: "cell"
}, pu = ["onClick"], fu = {
  key: 1,
  class: "cell"
}, gu = ["aria-label", "onClick"], mu = { class: "button-wrapper main" }, vu = ["aria-label"], yu = ["aria-label", "disabled"], bu = ["aria-label"], wu = { id: "part-count" }, Su = {
  key: 3,
  id: "messages"
}, xu = {
  key: 0,
  class: "heading"
}, ku = { class: "content" }, Cu = {
  key: 4,
  id: "progress"
}, Iu = { id: "diagram-wrapper" }, Pu = {
  key: 0,
  id: "stack"
}, Tu = !1, Du = /* @__PURE__ */ Ee({
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
    const s = Tt(() => Promise.resolve().then(() => ju)), n = Tt(() => Promise.resolve().then(() => Gu)), r = Tt(() => Promise.resolve().then(() => ah)), o = Tt(() => Promise.resolve().then(() => fh)), l = Tt(() => Promise.resolve().then(() => Zi)), { inputs: a, totalInputShapes: u, getShapeGrainSummary: d, updateNumberFormat: v, validateInputStock: h } = Pn(), { r: f, updateFromResult: m, stackedStock: I, uniqueAddedShapes: q, uniqueUsedStock: y, activeStockId: F, activeStock: _, setActiveStockId: M } = bs(), { progress: j, reset: Z } = ao(), { addNotice: x } = ys(), { tip: k, update: A, hide: K } = oo(), D = i, G = e, te = Y(!1), O = "production", B = Y((navigator == null ? void 0 : navigator.language) || "en-US"), X = Xr(null), ie = window.location.hostname, ae = Y(!1), xe = Y(!0), De = Kr("Checkout/currentURL", window.location.href), Be = ps(), Ne = Y([]), ot = Y(!1), lt = Y(!1), R = Y(!1), ni = Y(!1), Vt = Y(!1), ne = Y(Kl()), Fe = Y(!1), { socket: oe } = lo({
      refs: {
        connected: ae,
        thinking: R
      },
      callbacks: {
        onResult(p) {
          var L, H, V, ce, ue;
          const g = p.result;
          if (m(g), !((L = g.shapeList) != null && L.length) || !((H = g.stockList) != null && H.length)) {
            Z(), x({
              type: "error",
              message: W("errors.calculation.no_result"),
              additional: [W("errors.validation.check_inputs")]
            }), R.value = !1;
            return;
          }
          const w = {
            jobId: p.jobId,
            metadata: f.metadata.value,
            parts: q.value.map((N) => {
              var Q, fe, z;
              return {
                l: N.l,
                w: N.w,
                t: N == null ? void 0 : N.t,
                material: N.material,
                orientationLock: N.orientationLock,
                q: (fe = (Q = f.metadata.value) == null ? void 0 : Q.addedPartTally) == null ? void 0 : fe[N.parentID],
                name: N.name,
                banding: N.banding,
                finish: N.finish,
                customData: N.customData,
                stockId: ((z = N == null ? void 0 : N.stock) == null ? void 0 : z.id) || (N == null ? void 0 : N.stockId)
              };
            }),
            stock: y.value.map((N) => {
              var Q, fe;
              return {
                id: N.id,
                name: N == null ? void 0 : N.name,
                l: N.l,
                w: N.w,
                t: N == null ? void 0 : N.t,
                material: N.material,
                q: (fe = (Q = f.metadata.value) == null ? void 0 : Q.usedStockTally) == null ? void 0 : fe[N.parentID],
                trim: N == null ? void 0 : N.trim,
                cost: N == null ? void 0 : N.cost,
                analysis: N == null ? void 0 : N.analysis
                // type: s?.type
              };
            }),
            offcuts: f.offcuts.value.map((N) => ({
              l: N.l,
              w: N.w,
              t: (N == null ? void 0 : N.t) ?? null,
              q: N.q,
              stockId: N.stockId
            })),
            inputs: {
              parts: a.inputShapes.value.map((N) => {
                const Q = { ...N };
                return delete Q.listId, Q;
              })
            }
          };
          if ((ue = (ce = (V = f == null ? void 0 : f.metadata) == null ? void 0 : V.value) == null ? void 0 : ce.unplacedParts) != null && ue.length) {
            const N = f.metadata.value.unplacedParts.map((Q) => Q.id).join();
            x({
              type: "warning",
              message: W("woodwork.parts_not_fit") + ": " + N
            });
          }
          G("result", w), R.value = !1;
        },
        onUser(p) {
          X.value = p;
        },
        onConnectError(p) {
          x({
            type: "error",
            message: W("errors.network.cannot_connect"),
            additional: [p]
          });
        },
        onError(p) {
          x({
            type: "error",
            message: W("errors.general.error_occurred"),
            additional: [p]
          });
        }
      }
    }), je = {
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
    }, ee = vt(je), de = vt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), at = Y(null), ft = Y(!1), ri = Y(""), wi = Y(""), We = vt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Ue = Y([]), He = Y([]), Ot = Y([]), Xe = vt({
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
    }), we = vt({
      labels: [],
      pricing: {},
      options: [],
      keys: bt
    }), Oe = vt({
      labels: [],
      pricing: {},
      options: [],
      keys: ["a", "b"]
    }), oi = vt({
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
    }), zt = Y([]), Si = se(() => {
      var g;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "woodwork.material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (g = Ue.value[0]) == null ? void 0 : g.name,
          options: Ue.value.map((w) => ({
            value: w.name,
            label: w.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: ee.numberFormat === "decimal" ? "number" : "string",
          label: "woodwork.thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "woodwork.length",
          min: (ee == null ? void 0 : ee.minDimension) ?? 0,
          placeholder: "woodwork.l",
          required: !0,
          allowZero: !1
        },
        {
          id: "w",
          fieldMap: "w",
          type: "unitDependent",
          label: "woodwork.width",
          placeholder: "woodwork.w",
          min: (ee == null ? void 0 : ee.minDimension) ?? 0,
          required: !0,
          allowZero: !1
        },
        {
          id: "q",
          fieldMap: "q",
          type: "integer",
          placeholder: "woodwork.q",
          default: 1,
          label: "woodwork.quantity",
          min: 0
        },
        {
          id: "name",
          fieldMap: "name",
          type: "string",
          placeholder: "woodwork.name",
          label: "woodwork.name"
        },
        {
          id: "orientationLock",
          w: "38px",
          label: "woodwork.rotation",
          fieldMap: "orientationLock"
        },
        {
          id: "banding",
          w: "32px",
          label: "woodwork.banding",
          fieldMap: "bandingOptions"
        },
        {
          id: "finish",
          type: "checkbox",
          w: "32px",
          label: "woodwork.finish",
          fieldMap: "finish"
        },
        {
          id: "machining",
          w: "32px",
          label: "woodwork.machining",
          fieldMap: "machining"
        },
        {
          id: "imageUpload",
          w: "32px",
          label: "woodwork.image_upload",
          fieldMap: "imageUpload"
        }
      ], ...zt.value];
    }), St = se(() => Ca(
      oi,
      Si.value,
      "parts",
      de.stockType,
      ee.fieldOrder
    )), $ = se(() => {
      let p = St.value.length + 1;
      return a.inputShapes.value.length > 1 && p++, p;
    }), J = se(() => {
      const p = {
        id: "34px",
        del: "32px"
      }, g = [];
      for (const w of St.value)
        w.id !== "trim" && g.push(w.w ?? "minmax(20px, 1fr)");
      return g.unshift(p.id), a.inputShapes.value.length > 1 && g.push(p.del), g.join(" ");
    }), he = se(() => ({
      "--btn-color": ee.colors.buttonText,
      "--btn-bg": ee.colors.button,
      "--btn-hover-bg": ke(ee.colors.button, -8),
      "--btn-focus-ring": ee.colors.button
    }));
    function ke(p, g) {
      const w = p.replace("#", ""), L = parseInt(w, 16), H = Math.round(2.55 * g), V = (L >> 16) + H, ce = (L >> 8 & 255) + H, ue = (L & 255) + H;
      return `#${(16777216 + (V < 255 ? V < 1 ? 0 : V : 255) * 65536 + (ce < 255 ? ce < 1 ? 0 : ce : 255) * 256 + (ue < 255 ? ue < 1 ? 0 : ue : 255)).toString(16).slice(1)}`;
    }
    const Ke = se(() => ({
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
    })), Ve = se(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), xt = se(() => {
      var p, g;
      return X.value ? !(X.value && ((g = (p = X.value) == null ? void 0 : p.api) != null && g.whiteLabel)) : !0;
    }), Rt = {
      stockType: (p) => {
        const g = ["sheet", "linear", "roll"];
        g.includes(p) || console.warn(`${p} is not a valid stockType, expected ${g.join("|")}`), de.stockType = p, p === "linear" && (de.cutType = null, de.cutPreference = null);
      },
      stockSelection: (p) => {
        const g = ["efficiency", "smallest"];
        p && !g.includes(p) ? console.warn(`${p} is not a valid stockSelection, expected ${g.join("|")}`) : de.options.stockSelection = p;
      },
      minSpacing: (p) => {
        de.options.minSpacing = p;
      },
      stackHeight: (p) => {
        de.stackHeight = p;
      },
      cutPreference: (p) => {
        const g = ["efficiency", "length", "width", "beam"];
        if (g.includes(p)) {
          const { cutType: w, cutPreference: L } = os(p);
          de.cutType = w, de.cutPreference = L;
        } else
          console.warn(`SmartCut - cut preference ${p || "N/A"} is not one of ${g.join("|")}`);
      },
      guillotineOptions: (p) => {
        de.guillotineOptions = p;
      },
      bladeWidth: (p) => {
        p >= 0 ? de.bladeWidth = p : console.warn(`SmartCut - you provided an incorrect blade width of: ${p}`);
      },
      maxParts: (p) => {
        ee.maxParts = p;
      },
      locale: (p) => {
        B.value = p.replace(/_/g, "-");
      },
      enable: (p) => {
        const g = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const w in je.enable)
          w in p && (ee.enable[w] = p[w]);
        for (const w in g)
          Le(w, It(p, [g[w]]) ?? je.enable[g[w]]);
        Vt.value = It(p, ["csvImport"]) ?? je.enable.csvImport;
      },
      colors: (p) => {
        for (const g in je.colors)
          g in p && (ee.colors[g] = p[g]);
      },
      orientationModel: (p) => {
        if (![0, 1, 2].includes(p)) {
          ee.orientationModel = 0;
          return;
        }
        ee.orientationModel = p;
      },
      numberFormat: (p) => {
        if (!["decimal", "fraction"].includes(p)) {
          ee.numberFormat = "decimal";
          return;
        }
        ee.numberFormat = p;
      },
      customFields: (p) => {
        if (!Array.isArray(p) || !(p != null && p.length)) return;
        const g = [];
        p.forEach((w, L) => {
          g.push(w), g[L].custom = !0;
          const H = Ft(w.id);
          g[L].id = H, g[L].fieldMap = "customData." + H, w.type === "checkbox" && (g[L].w = "32px"), w.type === "select" && (g[L].output = w.output ?? "string", g[L].options = w.options);
        }), zt.value = g;
        for (const w of a.inputShapes.value)
          w.customData = p.reduce((L, H) => {
            const V = Ft(H.id);
            return L[V] = w.customData[V] || H.default || "", L;
          }, {});
      }
    }, Qe = (p) => {
      if (D.debug && G("log", ["checkout init...", p]), p != null && p.options) {
        const w = p.options;
        da(w), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((V) => {
          V in w || G("error", `${V} is a required option`);
        });
        const H = ["enable", "colors"];
        for (const V in w)
          H.includes(V) || (ee[V] = w[V]), V in Rt && Rt[V](w[V]);
      }
      p.colors && "colors" in Rt && Rt.colors(p.colors), Gs("banding", p), Gs("finish", p), fr(p), br(p), lt.value = !0, D.debug && G("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), nt(() => {
        xt.value && !Cr() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, ct = (p, g) => {
      p && (p.orientationLock = g);
    }, Le = (p, g = !1) => {
      xa(oi, "parts", de.stockType, p, g);
    }, Ft = (p) => p ? bo(p).toLowerCase() : null, Ji = (p, g, w, L) => {
      if (g.valid) {
        if (K(), w && L) {
          const H = w.issues.findIndex((V) => V.field.some((ce) => ce.length === L.length && ce.every((ue, N) => ue === L[N])));
          H !== -1 && w.issues.splice(H, 1);
        }
      } else
        A({
          referenceEl: p,
          show: !0,
          content: W(`errors.field_validation.${g.message}`),
          type: "error"
        });
    }, fr = (p) => {
      var g, w, L, H, V;
      if (It(ee, ["enable", "machining"]) && p != null && p.machining) {
        for (const ce in Xe)
          p.machining[ce] && (Xe[ce] = p.machining[ce]);
        if (["holes", "hingeHoles"].forEach((ce) => {
          var ue, N;
          (ue = p == null ? void 0 : p.machining) != null && ue[ce] && (Xe[ce].enabled = (N = p == null ? void 0 : p.machining) == null ? void 0 : N[ce].enabled);
        }), (L = (w = (g = p == null ? void 0 : p.machining) == null ? void 0 : g.corners) == null ? void 0 : w.types) != null && L.length && (Xe.corners.enabled = !0, Xe.corners.types = p.machining.corners.types), p.banding && ((V = (H = p == null ? void 0 : p.options) == null ? void 0 : H.enable) != null && V.banding)) {
          if (!we) return;
          Xe.banding = {
            enabled: !0
          }, we.options.length && (Xe.banding.options = we.options), we.labels.length && (Xe.banding.labels = we.labels), ti(we.pricing) && (Xe.banding.pricing = we.pricing);
        }
      }
    }, gr = (p = null) => {
      at.value = p, p && p.l && p.w ? te.value = !0 : alert(W("machining.enter_dimensions_first"));
    }, mr = () => {
      te.value = !1;
    }, Rs = (p = []) => {
      if (He.value = [], Ot.value = [], Le("t", !1), !!p.length) {
        for (const g of p)
          if (g != null && g.t)
            if (typeof g.t == "string" && g.t.includes(",")) {
              const w = Fs(g.t, !0);
              w.length === 2 ? (wr(w), Le("t", !0), g.t = He.value[0]) : G("error", "bonded thickness found which does not have 2 options");
            } else He.value.includes(g.t) || He.value.push(g.t);
        He.value.length > 1 && Le("t", !0);
      }
    }, vr = (p) => {
      var H;
      if (!p) return { thicknesses: [], bondedThicknesses: [] };
      if (!((H = Ue.value) != null && H.length))
        return {
          thicknesses: He.value,
          bondedThicknesses: []
        };
      if (!p.material) return { thicknesses: [], bondedThicknesses: [] };
      const g = Ue.value.find((V) => V.name === p.material);
      if (!g) return { thicknesses: [], bondedThicknesses: [] };
      const w = [...g.thicknesses], L = [];
      for (let V = 0; V < w.length; V++) {
        const ce = w[V], ue = Fs(ce), N = [];
        if (ue.length) {
          for (const Q of ue)
            w[V] = Q, N.push(V);
          V++;
        }
        N.length && L.push(N);
      }
      return {
        thicknesses: w,
        bondedThicknesses: L
      };
    }, yr = (p) => vr(p).thicknesses.map((w) => ({
      label: w == null ? void 0 : w.toString(),
      value: w
    })), br = (p) => {
      var g, w;
      if ((g = p == null ? void 0 : p.stock) != null && g.some((L) => L == null ? void 0 : L.material)) {
        Ue.value = [], He.value = [], Ot.value = [];
        const L = /* @__PURE__ */ new Map();
        for (const H of p.stock) {
          if (!H.material) continue;
          const V = H.material.toUpperCase();
          L.has(V) || L.set(V, /* @__PURE__ */ new Set()), H.t != null && ((w = L.get(V)) == null || w.add(S({ v: H.t })));
        }
        Ue.value = Array.from(L.entries()).map(([H, V]) => ({
          name: H,
          thicknesses: Array.from(V).sort((ue, N) => ue - N)
        })), Ue.value.length > 1 && Le("material", !0);
      } else
        Rs(p.stock);
    }, wr = (p, g = null) => {
      if (!Array.isArray(p)) {
        G("error", "addBondedThicknesses expects an array");
        return;
      }
      const w = [];
      for (let L of p)
        ee.numberFormat === "decimal" && (L = parseFloat(L)), He.value.push(L), g && g.thicknesses.push(L), w.push(He.value.length - 1);
      Ot.value.push(w);
    }, Fs = (p, g = !1) => {
      if (typeof p == "string" && p.includes(",")) {
        const w = p.split(",");
        return g ? w.map((L) => S({ v: L })) : w;
      }
      return [];
    }, Sr = () => {
      Fe.value ? kr() : xr();
    }, xr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Fe.value = !0;
    }, kr = () => {
      document.exitFullscreen && document.exitFullscreen(), Fe.value = !1;
    }, Cr = () => {
      var L, H;
      if ((H = (L = X.value) == null ? void 0 : L.api) != null && H.whiteLabel) return !0;
      let p = !0;
      const g = document.querySelector("#smartcut-app #credit"), w = document.querySelector("#smartcut-app #credit a");
      return [g, w].forEach((V, ce) => {
        if (!V) return p = !1;
        const ue = window.getComputedStyle(V);
        if (ue.display === "none" || ue.display === "hidden" || ue.opacity === "0" || ue.color === "transparent" || ue.position !== "relative" || ce === 1 && ue.color !== "#4e4e4e" && ue.color !== "rgb(78, 78, 78)")
          return p = !1;
      }), xe.value = p, p;
    }, _s = (p, g, w, L, H) => {
      Os(
        p,
        g,
        w,
        L,
        H,
        D.findExtrasPrice
      );
    }, Ms = (p, g, w, L) => {
      nr(
        p,
        g,
        w,
        L,
        g === "banding" ? bi : [],
        D.findExtrasPrice
      );
    }, xi = (p, g) => {
      const w = g === "banding" ? we == null ? void 0 : we.labels : Oe == null ? void 0 : Oe.labels;
      ca(p, g, w);
      const L = As(g);
      if (p != null && p[L])
        for (const H in p[L]) {
          const V = Vi(p, g, H, D.findExtrasPrice);
          V === !1 && H && p[g][H] && new le({
            item: p,
            field: [[g, H]],
            type: "error",
            category: ["part"],
            message: W("option_not_available", { x: p[g][H], y: W(g) })
          }), gi(p, g, H, !!V);
        }
    }, qs = (p) => {
      const g = Object.keys(p);
      return Math.max(...g.map((L) => L.split("|").length));
    }, Bs = (p) => {
      const g = [], w = Object.keys(p), L = qs(p);
      for (let H = L; H--; ) g.push(/* @__PURE__ */ new Set());
      for (const H of w)
        H.split("|").forEach((ce, ue) => g[ue].add(ce));
      for (let H = 0; H < L; H++)
        g[H] = Array.from(g[H]);
      return g;
    }, ki = (p, g = [], w) => {
      if (!p) return [];
      if (w > 0 && !g[w - 1]) return [];
      const L = /* @__PURE__ */ new Set();
      for (const H of Object.keys(p)) {
        const V = H.split("|");
        if (V.length > w) {
          let ce = !0;
          for (let ue = 0; ue < w; ue++)
            if (g[ue] && V[ue] !== g[ue]) {
              ce = !1;
              break;
            }
          ce && L.add(V[w]);
        }
      }
      return Array.from(L);
    }, Ci = (p, g, w) => Vi(
      p,
      g,
      w,
      D.findExtrasPrice
    ), Ir = (p) => {
      const g = Ne.value.findIndex((w) => w.shapeId === p.shapeId);
      g !== -1 ? Ne.value[g] = p : Ne.value.push(p), window.smartcutImages = Ne.value;
    }, Pr = (p) => {
      Ne.value = Ne.value.filter((g) => g.shapeId !== p), window.smartcutImages = Ne.value;
    }, js = (p = 1) => {
      for (let g = p; g--; ) {
        let w;
        if (a.inputShapes.value.length > 0) {
          const L = a.inputShapes.value[a.inputShapes.value.length - 1];
          w = li({
            material: L.material,
            t: L.t
          });
        } else
          w = li();
        a.inputShapes.value.push(w);
      }
    }, Tr = (p) => {
      var w;
      if (a.inputShapes.value.length === 1) return;
      const g = a.inputShapes.value[p].listId;
      a.inputShapes.value.splice(p, 1), ((w = at.value) == null ? void 0 : w.listId) === g && (at.value = null), Z();
    }, li = (p = {
      l: null,
      w: de.stockType === "linear" ? ((g) => (g = a.inputStock.value[0]) == null ? void 0 : g.w)() : null,
      t: He.value.length ? He.value[0] : null,
      q: 1,
      material: ((w) => (w = Ue.value) == null ? void 0 : w.length)() === 1 ? Ue.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var H, V;
      p.id = (a.inputShapes.value.length + 1).toString();
      const L = new fi(p, ee.numberFormat);
      return (H = we == null ? void 0 : we.labels) != null && H.length && xi(L, "banding"), (V = Oe == null ? void 0 : Oe.labels) != null && V.length && xi(L, "finish"), L;
    }, Dr = (p) => {
      if (He.value.length)
        for (const g of p) {
          if (!g.t) return;
          const w = He.value.findIndex(
            (V) => S({ v: V }) === g.t
          ), L = Ot.value.find((V) => V.includes(w));
          if (!L) return;
          const H = Math.min(
            ...L.map((V) => He.value[V])
          );
          S({ v: g.t }) > H && (g.q = g.q * (S({ v: g.t }) / H), g.notes = `Bond to form ${g.t.valueOf()}`, g.t = H);
        }
    }, Hs = () => {
      Z(), M(null), f.stockList.value = [], f.shapeList.value = [], f.cutList.value = [];
    }, Qi = () => {
      a.inputShapes.value.length = 0;
    }, Lr = async () => {
      if (G("calculating"), R.value) return !1;
      R.value = !0, ni.value = !1;
      const p = a.inputShapes.value.map((ce) => new fi(ce));
      Dr(p);
      const { valid: g, saw: w, stockList: L, shapeList: H } = await la({
        t: W,
        partTrim: ee.partTrim,
        maxShapes: ee.maxParts,
        orientationModel: ee.orientationModel,
        sawData: de,
        inputShapes: p,
        onLimit: () => {
          x({
            type: "error",
            message: W("limits.max_parts") + " " + ee.maxParts
          });
        }
      });
      if (!g) {
        G("validation-error"), R.value = !1;
        return;
      }
      Hs(), D.debug && console.log(
        "SmartCut - calculating",
        "stock",
        L.map((ce) => ce.dimensions),
        "parts",
        H.map((ce) => ce.dimensions)
      );
      const V = {
        inputs: {
          parts: p,
          stock: a.inputStock.value,
          saw: w
        },
        saw: w,
        shapeList: H,
        stockList: L,
        enableEvo: !0,
        domain: ie
      };
      await oe.connect(), oe.emit("calculate", V);
    }, Gs = (p, g) => {
      var fe;
      if (Le(p, !1), !p || !g || !(g != null && g[p]) || !It(ee, ["enable", p])) return;
      const w = [p, "pricing"];
      if (!en(g, w)) {
        G("error", `${w.join(".")} not found in sent data`);
        return;
      }
      const L = It(g, w);
      if (typeof L != "object") {
        G("error", `${w.join(".")} data must be an object`);
        return;
      }
      if (!ti(L)) {
        G("error", `if provided, ${w.join(".")} data must contain some values`);
        return;
      }
      const H = Object.keys(L), V = Object.values(L);
      if (!H.length) {
        G("error", `no ${w.join(".")} pricing found`);
        return;
      }
      const ce = /,/;
      for (const z of H)
        if (ce.test(z)) {
          G("error", `${w} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (V.some((z) => isNaN(z))) {
        G("error", `${w} values must be a number`);
        return;
      }
      const ue = qs(L), N = [p, "labels"];
      let Q = [];
      if (en(g, N))
        Q = It(g, N);
      else {
        G("error", `${N.join(".")} not found`);
        return;
      }
      if (!Q) {
        G("error", `${N.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Q)) {
        G("error", `${N.join(".")} data must be an array`);
        return;
      }
      if (!(Q != null && Q.length)) {
        G("error", `if provided, ${N.join(".")} data must contain values`);
        return;
      }
      if (Q.length !== ue) {
        G("error", `${N.join(".")} length (${Q.length}) must match the number of levels in ${w.join(".")} (${ue})`);
        return;
      }
      switch (p) {
        case "banding":
          we.labels = Q, we.pricing = L, we.options = Bs(L);
          break;
        case "finish":
          Oe.labels = Q, Oe.pricing = L, Oe.options = Bs(L);
          break;
      }
      if (Le(p, !0), !!((fe = a.inputShapes.value) != null && fe.length))
        for (const z of a.inputShapes.value)
          xi(z, p);
    }, Ii = (p, g) => {
      if (!g) return;
      p !== "info" && Object.keys(We).forEach((L) => {
        L !== p && L !== "info" && (We[L] = null);
      });
      const w = a.inputShapes.value.indexOf(g);
      We[p] === w ? (at.value = null, We[p] = null) : (at.value = g, We[p] = w);
    }, Ns = (p) => {
      if (G("log", ["load event received"]), !lt.value) {
        G("log", ["load event received"]);
        return;
      }
      $r(p.detail);
    }, $r = (p) => {
      var L, H, V;
      if (G("log", ["loading parts..."]), !p || !((H = (L = p == null ? void 0 : p.inputs) == null ? void 0 : L.parts) != null && H.length)) {
        G("log", ["could not find any parts to import"]);
        return;
      }
      a.inputShapes.value.length = 0;
      let g = 0;
      for (const ce of p.inputs.parts) {
        const ue = li(ce);
        ue ? (a.inputShapes.value.push(ue), (V = ue.issues) != null && V.length && G("log", [`SmartCut - issues found while importing part at index ${g}`, ue.issues])) : G("log", [`SmartCut - error loading part at index ${g}`, ce]), g++;
      }
      a.inputShapes.value.flatMap((ce) => Pt(ce.issues)).length && x({
        type: "error",
        message: W("errors.general.issues_found")
      }), G("log", [`loaded ${a.inputShapes.value.length} parts`]);
    }, Ar = (p) => {
      a.inputShapes.value.length = 0, nt(() => {
        var g, w;
        for (const L of p)
          L.t = ((w = (g = a.inputStock.value) == null ? void 0 : g[0]) == null ? void 0 : w.t) ?? null, a.inputShapes.value.push(li(L));
      });
    };
    Te(() => D.stock, (p) => {
      if (Hs(), Array.isArray(p) || console.warn("SmartCut - stock must be passed as an array"), !!(p != null && p.length)) {
        a.inputStock.value.length = 0, Ue.value.length || Rs(p);
        for (const g of p) {
          const w = new Ps({
            ...g,
            autoAdd: !0,
            id: (a.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, ee.numberFormat);
          a.inputStock.value.push(w);
        }
        if (a.inputStock.value.length) {
          a.inputShapes.value.length ? nt(() => {
            a.inputShapes.value.forEach((w) => {
              if (w.material) {
                const L = Ue.value.find((H) => H.name === w.material);
                L && (L.thicknesses.includes(S({ v: w.t })) || (w.t = S({ v: L.thicknesses[0] })));
              } else w.t || (w.t = S({ v: a.inputStock.value[0].t }));
            });
          }) : D.inputType !== "formula" && nt(() => js(1));
          const g = h(de);
          g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), x({
            type: "error",
            message: W("errors.validation.stock_issue"),
            additional: g.map((w) => w.message)
          }));
        }
      }
    }, { immediate: !0 }), Te(a.inputShapes, (p) => {
      G("inputs-changed"), p.forEach((g) => {
        var L;
        de.stockType === "linear" && (g.w = (L = a.inputShapes.value[0]) == null ? void 0 : L.w);
        const w = Ue.value.find((H) => H.name === g.material);
        w && (w.thicknesses.includes(S({ v: g.t })) || (g.t = S({ v: w.thicknesses[0] })));
      });
    }, { deep: !0 }), Te(() => ee.numberFormat, (p) => {
      v(p);
    }), rt(async () => {
      if (ot.value) return;
      const p = new URL(window.location.href), g = p.searchParams.toString(), w = p.origin + p.pathname + (g ? `?${g}` : "");
      De.value !== w && Qi(), De.value = w, B.value = ee.locale, await oe.connect(), oe.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ns), ot.value = !0, D.debug && G("log", [
        "ready...",
        "fields:",
        St.value.map((L) => L.id)
      ]);
    });
    const Er = () => {
      oe && oe.disconnect();
    };
    return yi(() => {
      window.removeEventListener("smartcut/load", Ns), Er(), delete window.smartcutCheckout;
    }), t({
      init: Qe,
      clear: Qi,
      getAvailablePricingOptions: ki,
      getExtrasPrice: Ci,
      formatPrice: D.formatPrice,
      findExtrasPrice: D.findExtrasPrice,
      inputShapes: a.inputShapes,
      initExtrasOptions: xi,
      createInputShape: li
    }), (p, g) => {
      var L, H, V, ce, ue, N;
      const w = Ht("FontAwesomeIcon");
      return b(), T(be, null, [
        ye(P(s), {
          content: P(k).content,
          type: P(k).type,
          show: P(k).show,
          "reference-el": P(k).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        P(O) === "development" && Tu ? (b(), T("div", ru, [
          g[5] || (g[5] = E("div", null, "Developer information", -1)),
          E("div", null, re(ee.enable.focus), 1),
          ye(P(l), {
            data: [P(a).inputShapes.value[0]],
            paths: ["inputs.inputShapes"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        (L = at.value) != null && L.machining && te.value ? (b(), ve(P(r), {
          key: 1,
          shape: at.value,
          "onUpdate:shape": g[0] || (g[0] = (Q) => at.value = Q),
          translate: !0,
          options: Xe,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": Ci,
          "get-available-pricing-options": ki,
          "format-price": i.formatPrice,
          onClose: mr
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : U("", !0),
        lt.value ? U("", !0) : (b(), T("div", ou, [
          ye(rn, {
            size: 50,
            "show-number": !1
          })
        ])),
        lt.value ? (b(), T("div", {
          key: 3,
          id: "smartcut-checkout",
          "data-app": "smartcut",
          class: Se({ fullscreen: Fe.value })
        }, [
          ne.value && !i.readonly ? (b(), T("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: Ce(he.value),
            onClick: g[1] || (g[1] = (Q) => Sr())
          }, [
            ye(w, { icon: ["fass", "expand"] }),
            qt(" " + re(P(W)("general.full_screen")), 1)
          ], 4)) : U("", !0),
          xt.value ? (b(), T("div", {
            key: 1,
            id: "credit",
            style: Ce(Ke.value)
          }, [
            E("a", {
              title: "Cutlist optimization API / SmartCut",
              style: Ce(Ve.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, re(P(yo)(P(W)("general.powered_by"))), 5)
          ], 4)) : U("", !0),
          E("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Ce({ "grid-template-columns": J.value })
          }, [
            P(a).inputShapes.value.length ? (b(), T("div", lu, [
              g[6] || (g[6] = E("div", { class: "cell id" }, null, -1)),
              (b(!0), T(be, null, Ae(St.value, (Q) => (b(), T("div", {
                key: Q.id,
                class: Se(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(Q.id) || Q.type === "checkbox" }])
              }, re(P(W)(Q.label)), 3))), 128)),
              P(O) === "development" ? (b(), T("div", au, " Info ")) : U("", !0),
              P(a).inputShapes.value.length > 1 ? (b(), T("div", cu)) : U("", !0)
            ])) : U("", !0),
            (b(!0), T(be, null, Ae(P(a).inputShapes.value, (Q, fe) => (b(), T("div", {
              key: fe,
              class: "row inputs"
            }, [
              E("div", uu, [
                E("div", {
                  class: "id",
                  style: Ce({
                    background: ee.colors.partA,
                    color: ee.colors.text
                  })
                }, re(fe + 1), 5)
              ]),
              (b(!0), T(be, null, Ae(St.value, (z) => (b(), T("div", {
                key: z.fieldMap,
                class: "cell"
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(z.id) ? z.id === "orientationLock" ? (b(), ve(Ea, {
                  key: 1,
                  id: "orientation-" + fe,
                  rectangle: Q,
                  disabled: i.readonly,
                  "stock-grain": P(d)(Q),
                  style: Ce(he.value),
                  "orientation-model": ee.orientationModel,
                  onUpdateOrientation: (gt) => ct(Q, gt)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "style", "orientation-model", "onUpdateOrientation"])) : z.id === "banding" ? (b(), ve(Ra, {
                  key: 2,
                  id: "banding-" + fe,
                  "input-shape": Q,
                  disabled: i.readonly,
                  "stock-grain": P(d)(Q),
                  open: We.banding === fe,
                  "orientation-model": ee.orientationModel,
                  onClicked: (gt) => Ii("banding", Q)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : z.id === "finish" ? (b(), ve(cc, {
                  key: 3,
                  id: "finish-" + fe,
                  "input-shape": Q,
                  disabled: i.readonly,
                  style: Ce(he.value),
                  open: We.finish === fe,
                  onClicked: (gt) => Ii("finish", Q)
                }, null, 8, ["id", "input-shape", "disabled", "style", "open", "onClicked"])) : z.fieldMap === "machining" && ne.value ? (b(), ve(pc, {
                  key: 4,
                  id: "machining-" + fe,
                  disabled: i.readonly,
                  style: Ce(he.value),
                  "input-shape": Q,
                  onOpen: (gt) => gr(Q)
                }, null, 8, ["id", "disabled", "style", "input-shape", "onOpen"])) : z.fieldMap === "imageUpload" ? (b(), T("button", {
                  key: 5,
                  id: "image-upload-" + fe,
                  type: "button",
                  disabled: i.readonly,
                  class: Se({ selected: We.info === fe }),
                  onClick: (gt) => Ii("imageUpload", Q)
                }, [
                  ye(w, { icon: ["fass", "image"] })
                ], 10, hu)) : U("", !0) : (b(), ve($t, {
                  key: 0,
                  id: z.id + "-" + fe,
                  focus: !i.readonly && ee.enable.focus && fe === P(a).inputShapes.value.length - 1 && z.id === "l",
                  issue: P(Ks)(Q, [z.fieldMap]),
                  warning: P(Ks)(Q, [z.fieldMap], !0),
                  type: z.type,
                  output: z.output,
                  label: z != null && z.label ? P(W)(z.label) : null,
                  placeholder: z != null && z.placeholder ? P(W)(z.placeholder) : null,
                  "enable-label": !1,
                  "number-format": ee.numberFormat,
                  readonly: i.readonly,
                  required: (z == null ? void 0 : z.required) ?? !1,
                  "allow-zero": (z == null ? void 0 : z.allowZero) ?? !0,
                  options: z.id === "t" ? yr(Q) : z == null ? void 0 : z.options,
                  "true-value": z == null ? void 0 : z.trueValue,
                  "false-value": z == null ? void 0 : z.falseValue,
                  default: z == null ? void 0 : z.default,
                  min: typeof (z == null ? void 0 : z.min) == "number" ? z.min : null,
                  max: typeof (z == null ? void 0 : z.max) == "number" ? z.max : null,
                  custom: z == null ? void 0 : z.custom,
                  value: P(It)(Q, z == null ? void 0 : z.fieldMap),
                  text: {
                    delete: P(rs)(P(W)("actions.delete")),
                    select: P(rs)(P(W)("actions.select"))
                  },
                  onValidation: (gt, Or) => Ji(gt, Or, Q, [z.fieldMap]),
                  "onUpdate:value": (gt) => {
                    z.fieldMap && P(er)(Q, z.fieldMap, gt);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ]))), 128)),
              P(O) === "development" ? (b(), T("div", du, [
                E("button", {
                  class: Se(["c-btn", { selected: We.info === fe }]),
                  style: Ce(he.value),
                  type: "button",
                  onClick: (z) => Ii("info", Q)
                }, " i ", 14, pu)
              ])) : U("", !0),
              P(a).inputShapes.value.length > 1 ? (b(), T("div", fu, [
                E("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": `${P(W)("actions.remove")} ${P(ns)(P(W)("woodwork.part"))}`,
                  onClick: (z) => Tr(fe)
                }, [
                  ye(w, { icon: ["fass", "trash"] })
                ], 8, gu)
              ])) : U("", !0),
              ye(P(n), {
                item: Q,
                "num-columns": $.value
              }, null, 8, ["item", "num-columns"]),
              We.banding === fe && we.options.length > 0 ? (b(), ve(ds, {
                key: 2,
                shape: Q,
                "shape-index": fe,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": we.keys,
                "all-options": we.options,
                pricing: we.pricing,
                labels: we.labels,
                "user-friendly-field-map": P(qe),
                "part-columns": $.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": ee.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Ms,
                onSet: _s
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : U("", !0),
              We.finish === fe && Oe.options.length > 0 ? (b(), ve(ds, {
                key: 3,
                shape: Q,
                "shape-index": fe,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Oe.keys,
                "all-options": Oe.options,
                pricing: Oe.pricing,
                labels: Oe.labels,
                "user-friendly-field-map": P(qe),
                "part-columns": $.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": ee.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Ms,
                onSet: _s
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : U("", !0),
              We.info === fe ? (b(), T("div", {
                key: 4,
                id: "shape-info",
                style: Ce({ "grid-column-end": "span " + $.value })
              }, [
                ye(P(l), {
                  data: [Q == null ? void 0 : Q.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : U("", !0),
              We.imageUpload === fe ? (b(), ve(Sc, {
                key: 5,
                prefix: (fe + 1).toString(),
                "unique-id": P(Be),
                "shape-id": Q.listId,
                style: Ce({ "grid-column-end": "span " + $.value }),
                images: Ne.value,
                onUpdate: Ir,
                onRemove: Pr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : U("", !0)
            ]))), 128))
          ], 4),
          E("div", mu, [
            i.readonly ? U("", !0) : (b(), T("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${P(W)("actions.add")} ${P(W)("woodwork.part")}`,
              style: Ce({ background: ee.colors.button, color: ee.colors.buttonText }),
              onClick: g[2] || (g[2] = (Q) => js(1))
            }, [
              ye(w, { icon: ["fass", "plus-large"] }),
              qt(" " + re(`${P(W)("actions.add")} ${P(W)("woodwork.part")}`), 1)
            ], 12, vu)),
            E("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": P(W)("actions.calculate"),
              style: Ce(he.value),
              disabled: !((H = P(a).inputStock.value) != null && H.length) || R.value,
              onClick: g[3] || (g[3] = (Q) => Lr())
            }, [
              ye(w, { icon: ["fass", "calculator"] }),
              qt(re(P(W)("actions.calculate")), 1)
            ], 12, yu),
            i.readonly ? U("", !0) : (b(), T("button", {
              key: 1,
              class: "c-btn c-btn--delete-solid",
              type: "button",
              "aria-label": P(W)("actions.clear"),
              onClick: g[4] || (g[4] = (Q) => Qi())
            }, [
              ye(w, { icon: ["fass", "trash"] })
            ], 8, bu)),
            E("div", wu, re(P(u)) + re(ee != null && ee.maxParts ? "/" + ee.maxParts : ""), 1)
          ]),
          Vt.value && !i.readonly ? (b(), ve(P(o), {
            key: 2,
            ref: "import",
            "number-format": ee.numberFormat,
            "custom-fields": zt.value,
            "banding-options": we.options,
            "banding-labels": we.labels,
            "finish-options": Oe.options,
            "finish-labels": Oe.labels,
            onImport: Ar
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : U("", !0),
          ft.value ? (b(), T("div", Su, [
            ri.value ? (b(), T("div", xu, re(ri.value), 1)) : U("", !0),
            E("pre", ku, re(wi.value), 1)
          ])) : U("", !0),
          (ee.enable.diagram ? R.value && !P(j).complete : R.value || P(j).complete) ? (b(), T("div", Cu, [
            ye(rn, {
              size: 50,
              number: P(j).shapeCount,
              complete: P(j).complete,
              "show-number": ee.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : U("", !0),
          fs(E("div", Iu, [
            ((ce = (V = P(_)) == null ? void 0 : V.saw) == null ? void 0 : ce.stockType) !== "roll" ? (b(), T("div", Pu, re((ue = P(_)) != null && ue.stack ? (N = P(_)) == null ? void 0 : N.stack : 1), 1)) : U("", !0),
            ye(nu, {
              "element-id": "diagram",
              "number-format": ee.numberFormat,
              "decimal-places": ee.decimalPlaces,
              colors: ee.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [gs, ee.enable.diagram && P(j).complete]
          ]),
          ee.enable.diagram && P(I).length > 1 && P(j).complete ? (b(), ve(ma, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": P(F),
            "stock-list": P(I),
            onShowStock: P(M)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : U("", !0)
        ], 2)) : U("", !0)
      ], 64);
    };
  }
}), Yh = /* @__PURE__ */ si(Du, [["__scopeId", "data-v-266c905f"]]), Lu = {
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
}, $u = { class: "smartcut-object-viewer" }, Au = ["onClick"], Eu = { class: "toggle-icon" }, Ou = { class: "path-label" }, Ru = {
  key: 0,
  class: "object-properties"
}, Fu = { class: "key" };
function _u(i, t, e, s, n, r) {
  return b(), T("div", $u, [
    (b(!0), T(be, null, Ae(e.data, (o, l) => (b(), T("div", {
      key: l,
      class: "array-item"
    }, [
      E("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        E("div", Eu, re(n.expanded[l] ? "▼" : "▶"), 1),
        E("div", Ou, re(e.paths[l] || l), 1)
      ], 8, Au),
      n.expanded[l] ? (b(), T("div", Ru, [
        (b(!0), T(be, null, Ae(o, (a, u) => (b(), T("div", {
          key: u,
          class: "property-item"
        }, [
          E("div", Fu, re(u) + ": ", 1),
          E("div", {
            class: Se(["value", r.getValueType(a)])
          }, re(r.formatValue(a)), 3)
        ]))), 128))
      ])) : U("", !0)
    ]))), 128))
  ]);
}
const Mu = /* @__PURE__ */ si(Lu, [["render", _u]]), Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Mu }, Symbol.toStringTag, { value: "Module" })), qu = ["data-placement"], Bu = /* @__PURE__ */ Ee({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = Y(null), s = Y(null), n = Y(!0);
    let r = null, o = null;
    const l = () => {
      if (!t.referenceEl) {
        n.value = !1;
        return;
      }
      const _ = window.getComputedStyle(t.referenceEl), M = _.display !== "none", j = _.visibility !== "hidden", Z = parseFloat(_.opacity) > 0, x = t.referenceEl.getBoundingClientRect(), k = x.width > 0 && x.height > 0, A = x.top < window.innerHeight && x.bottom > 0 && x.left < window.innerWidth && x.right > 0, K = !a(t.referenceEl);
      n.value = M && j && Z && k && A && K;
    }, a = (_) => {
      const M = _.getBoundingClientRect();
      let j = _.parentElement;
      for (; j && j !== document.body; ) {
        const Z = window.getComputedStyle(j);
        if (Z.overflow === "hidden" || Z.overflowX === "hidden" || Z.overflowY === "hidden") {
          const x = j.getBoundingClientRect();
          if (M.right < x.left || M.left > x.right || M.bottom < x.top || M.top > x.bottom)
            return !0;
        }
        j = j.parentElement;
      }
      return !1;
    }, u = () => {
      if (!t.referenceEl) return;
      r = new IntersectionObserver(
        (M) => {
          M.forEach((j) => {
            j.target === t.referenceEl && l();
          });
        },
        {
          root: null,
          threshold: 0
        }
      ), r.observe(t.referenceEl), o = new MutationObserver((M) => {
        M.forEach((j) => {
          j.type === "attributes" && (j.attributeName === "style" || j.attributeName === "class" || j.attributeName === "hidden") && l();
        });
      }), o.observe(t.referenceEl, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
      let _ = t.referenceEl.parentElement;
      for (; _ && _ !== document.body; )
        o.observe(_, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }), _ = _.parentElement;
    }, d = () => {
      r && (r.disconnect(), r = null), o && (o.disconnect(), o = null);
    };
    Te([() => t.referenceEl, () => t.show], ([_, M], [j]) => {
      j !== _ && d(), M && _ ? (l(), u()) : d();
    }, { immediate: !0 });
    const v = () => {
      t.show && t.referenceEl && l();
    };
    rt(() => {
      window.addEventListener("scroll", v, { passive: !0 }), window.addEventListener("resize", v, { passive: !0 });
    }), yi(() => {
      d(), window.removeEventListener("scroll", v), window.removeEventListener("resize", v);
    });
    const h = se(() => ({
      getBoundingClientRect: () => {
        var _;
        return ((_ = t.referenceEl) == null ? void 0 : _.getBoundingClientRect()) || new DOMRect();
      }
    })), f = [
      jr(8),
      Hr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      Gr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      Qr({ element: s })
    ], { floatingStyles: m, middlewareData: I, placement: q } = Zr(
      h,
      e,
      {
        placement: "top",
        middleware: f,
        whileElementsMounted: (_, M, j) => Br(
          _,
          M,
          j,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), y = se(() => ({
      position: m.value.position,
      top: m.value.top,
      left: m.value.left,
      transform: m.value.transform,
      zIndex: "1000"
    })), F = se(() => {
      if (!I.value.arrow) return {};
      const { x: _, y: M } = I.value.arrow, j = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[q.value.split("-")[0]] || "top";
      return {
        left: _ != null ? `${_}px` : void 0,
        top: M != null ? `${M}px` : void 0,
        [j]: "-4px"
      };
    });
    return (_, M) => (b(), ve(vs, { to: "body" }, [
      ye(Jr, { name: "fade" }, {
        default: ms(() => [
          _.show && _.referenceEl && n.value ? (b(), T("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: Se(["smartcut-tooltip", _.type]),
            style: Ce(y.value),
            "data-placement": P(q)
          }, [
            qt(re(_.content) + " ", 1),
            E("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: Ce(F.value)
            }, null, 4)
          ], 14, qu)) : U("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Bu }, Symbol.toStringTag, { value: "Module" })), Hu = /* @__PURE__ */ Ee({
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
      return b(), T(be, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (b(), T("div", {
          key: 0,
          class: "group issues",
          style: Ce({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          E("pre", null, re(t.item.issues.filter((a) => a.type === "error").flatMap((a) => P(Qt)(a.message)).join(`
`)), 1)
        ], 4)) : U("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (b(), T("div", {
          key: 1,
          class: "group warnings",
          style: Ce({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          E("pre", null, re(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => P(Qt)(a.message)).join(`
`)), 1)
        ], 4)) : U("", !0)
      ], 64);
    };
  }
}), Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Hu }, Symbol.toStringTag, { value: "Module" })), ze = {
  precisionFixed: mo,
  format: go,
  select: Me,
  selectAll: Ln,
  scaleLinear: it,
  scaleSequential: hi,
  axisTop: Tn,
  axisBottom: qi,
  axisRight: Dn,
  axisLeft: Bi,
  symbol: fo,
  path: po,
  arc: ho,
  symbolTriangle: uo,
  symbolSquare: co
};
class Nu {
  constructor({
    HTMLElement: t,
    vueComponent: e = null,
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
    // Padding values - responsive based on size
    c(this, "edgePadding", 15);
    // For left and bottom when axes shown
    c(this, "axisPadding", 30);
    // For top and right when axes shown
    c(this, "minSizeForAxes", 400);
    // Minimum width/height to show axes
    c(this, "xScale", ze.scaleLinear());
    c(this, "yScale", ze.scaleLinear());
    c(this, "yScaleFlipped", ze.scaleLinear());
    c(this, "measurementScale", ze.scaleLinear());
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
      if (this.el = ze.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = ze.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const t = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (t === null) return;
          this.svgCanvas = t;
        } else
          this.svgCanvas = ze.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const t = this.w >= this.minSizeForAxes && this.h >= this.minSizeForAxes, e = t ? this.edgePadding : 0, s = t ? this.edgePadding : 0, n = t ? this.axisPadding : 0, r = t ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (e + n) < 0 || this.h - (r + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), t && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${r})`).attr("class", "axis x"), this.xAxis.call(
      ze.axisTop(this.xScale).ticks(10).tickSize(-this.h + (r + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(o, l, a) {
      (l === 0 || l === a.length - 1) && ze.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      ze.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (e + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, l, a) {
      (l === 0 || l === a.length - 1) && ze.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px")), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const t = this.w >= this.minSizeForAxes && this.h >= this.minSizeForAxes, e = t ? this.edgePadding : 0, s = t ? this.edgePadding : 0, n = t ? this.axisPadding : 0, r = t ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", e).attr("y", r).attr("width", this.w - (e + n)).attr("height", this.h - (r + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", e).attr("y", r).attr("width", this.w - (e + n)).attr("height", this.h - (r + s)).style("fill", "url(#stripes)");
    const o = ze.path(), l = this.shape.machining.corners, a = [], u = [];
    [0, 1, 2, 3].forEach((v) => {
      const h = l[v];
      h && h.type ? (a.push(h.size ? S({ v: h.size ?? 0, o: this }) : 0), u.push(h.type)) : (a.push(0), u.push(null));
    });
    const d = (v, h, f, m, I) => {
      u[v] === "radius" ? o.arcTo(
        this.xScale(h),
        this.getYScale()(f),
        this.xScale(m),
        this.getYScale()(I),
        this.measurementScale(a[v])
      ) : u[v] === "bevel" ? o.lineTo(this.xScale(m), this.getYScale()(I)) : (o.lineTo(this.xScale(h), this.getYScale()(f)), o.lineTo(this.xScale(m), this.getYScale()(I)));
    };
    o.moveTo(this.xScale(0), this.getYScale()(a[0])), d(0, 0, 0, a[0], 0), (u[0] === "bevel" || u[1] === "bevel") && o.lineTo(this.xScale(this.shapeL - a[1]), this.getYScale()(0)), d(1, this.shapeL, 0, this.shapeL, a[1]), (u[1] === "bevel" || u[2] === "bevel") && o.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - a[2])
    ), d(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - a[2],
      this.shapeW
    ), (u[2] === "bevel" || u[3] === "bevel") && o.lineTo(this.xScale(a[3]), this.getYScale()(this.shapeW)), d(3, 0, this.shapeW, 0, this.shapeW - a[3]), o.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", o.toString());
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
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("circle").data(
      this.shape.machining.holes.filter((t) => t.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (t) => t.valid === !1).classed("partial", (t) => !t.isThroughShape(this.shape)).attr("cx", (t) => this.xScale(t.x)).attr("cy", (t) => {
      const e = t.getYDrawPosition(this.shape, this.currentSide);
      return this.getYScale()(e);
    }).attr("r", (t) => this.measurementScale(t.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const e = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("circle").data(e).join("circle").attr("class", "hole").classed("invalid", (s) => s.valid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => this.getYScale()(s.getYDrawPosition(this.shape, this.currentSide))).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const t = this.shape.banding, e = -1, s = this.w >= this.minSizeForAxes && this.h >= this.minSizeForAxes, n = s ? this.edgePadding : 0, r = s ? this.axisPadding : 0, o = [];
    for (const a of bt)
      if (t[a])
        switch (a) {
          case "x1":
            o.push({
              x1: n - e,
              x2: n - e,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            o.push({
              x1: this.w - r + e,
              x2: this.w - r + e,
              y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[2].size ?? 0)
              )
            });
            break;
          case "y1":
            o.push({
              x1: n + this.getCornerBandingSize(0),
              x2: this.w - r - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? e : 1),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
            });
            break;
          case "y2":
            o.push({
              x1: n + this.getCornerBandingSize(3),
              x2: this.w - r - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : e),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : e)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(o).join("line").attr("class", "banding").attr("x1", (a) => a.x1).attr("x2", (a) => a.x2).attr("y1", (a) => a.y1).attr("y2", (a) => a.y2).attr("stroke-width", this.bandingStrokeWidth);
    const l = ze.path();
    this.shape.machining.corners.forEach((a, u) => {
      if (!a.type) return;
      let d, v, h;
      switch (u) {
        case 0:
          if (!C(t.a) || t.a === !1) return;
          d = {
            x: this.xScale(0) - e,
            y: this.getYScale()(S({ v: a.size ?? 0, o: this }))
          }, v = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(S({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!C(t.b) || t.b === !1) return;
          d = {
            x: this.xScale(this.shapeL - S({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, v = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(S({ v: a.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!C(t.c) || t.c === !1) return;
          d = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - S({ v: a.size ?? 0, o: this }))
          }, v = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - S({ v: a.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!C(t.d) || t.d === !1) return;
          d = {
            x: this.xScale(S({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, v = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - S({ v: a.size ?? 0, o: this })) + e
          };
          break;
        default:
          return;
      }
      if (l.moveTo(d.x, d.y), a.type === "radius")
        switch (l.arcTo(
          v.x,
          v.y,
          h.x,
          h.y,
          this.measurementScale(a.size ?? 0)
        ), u) {
          case 0:
          case 2:
            l.lineTo(h.x + e, h.y);
            break;
          case 1:
          case 3:
            l.lineTo(h.x, h.y - (this.currentSide === 0 ? e : -1));
            break;
        }
      else a.type === "bevel" && l.lineTo(h.x, h.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][u]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", l.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    this.svgCanvas && this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0;
    const t = this.w >= this.minSizeForAxes && this.h >= this.minSizeForAxes, e = t ? this.edgePadding : 0, s = t ? this.axisPadding : 0;
    if (t && this.yAxis) {
      const n = this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
      this.yAxis.call(
        ze.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (e + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(r, o, l) {
        (o === 0 || o === l.length - 1) && ze.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(t) {
    return this.shape.machining.corners[t].type ? this.measurementScale(this.shape.machining.corners[t].size ?? 0) : 0;
  }
  updateSize() {
    if (this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let t = this.shape.getShortSide() / this.shape.getLongSide();
    this.w = this.HTMLElementWidth;
    const e = this.w >= this.minSizeForAxes, s = e ? this.edgePadding : 0, n = e ? this.edgePadding : 0, r = e ? this.axisPadding : 0, o = e ? this.axisPadding : 0;
    if (this.w - (s + r) < 0) return;
    let l = window.innerHeight - (o + n) - 20;
    l > 600 && (l = 600), this.xScale.domain([0, this.shapeL]).range([s, this.w - r]), t > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + o : (t = 0.3, this.h = this.w * t), this.h > l && (this.h = l, this.w = this.h / t, this.xScale.domain([0, this.shapeL]).range([s, this.w - r])), this.yScale.domain([this.shapeW, 0]).range([o, this.h - n]), this.yScaleFlipped.domain([0, this.shapeW]).range([o, this.h - n]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (s + r)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const Wu = { id: "machining" }, Uu = { class: "inputs" }, Vu = {
  key: 0,
  class: "debug"
}, zu = {
  key: 1,
  class: "shape-name"
}, Yu = { class: "shape-dimensions" }, Xu = {
  key: 2,
  class: "sides-wrapper"
}, Ku = { class: "menu" }, Zu = {
  key: 4,
  class: "button-wrapper"
}, Ju = { class: "grid-table" }, Qu = { class: "row table-heading" }, eh = {
  key: 0,
  class: "cell id"
}, th = {
  key: 0,
  class: "cell"
}, ih = { class: "id" }, sh = { class: "cell" }, nh = ["onClick"], rh = {
  key: 6,
  class: "menu-prompt"
}, oh = !1, lh = /* @__PURE__ */ Ee({
  __name: "Machining",
  props: /* @__PURE__ */ Us({
    env: { default: "production" },
    shape: { default: null },
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
  emits: /* @__PURE__ */ Us(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var ri, wi, We, Ue, He, Ot, Xe, we, Oe, oi, zt, Si, St;
    const e = Tt(() => Promise.resolve().then(() => Zi)), s = i, n = t, r = "production", o = Y(), l = se(() => Cs(R.value)), a = se(() => {
      var J;
      if (!((J = v.value) != null && J.length)) return 0;
      if (oe.value === "banding") return 1;
      let $ = Object.values(d.value).filter((he) => he.enabled).length;
      return $ += 2, $;
    }), u = se(() => {
      if (!v.value.length || oe.value === "banding") return;
      const $ = {
        id: "34px",
        del: "30px"
      }, J = [];
      return v.value.forEach((he) => {
        const ke = d.value[he];
        ke.enabled && J.push(ke.w ?? "1fr");
      }), J.unshift($.id), J.push($.del), J.join(" ");
    }), d = se(() => !oe.value || oe.value === "banding" ? null : ee[oe.value]), v = se(() => !oe.value || oe.value === "banding" ? [] : Object.keys(ee[oe.value]).filter(($) => ee[oe.value][$].enabled)), h = se(() => oe.value ? _() : []), f = se(() => {
      var J, he, ke, Ke;
      const $ = ((Ke = (ke = (he = (J = R.value) == null ? void 0 : J.machining) == null ? void 0 : he.corners) == null ? void 0 : ke.map((Ve) => {
        var xt;
        return (xt = Ve == null ? void 0 : Ve.isPresent) != null && xt.call(Ve) ? Ve.getCorner() : null;
      })) == null ? void 0 : Ke.filter((Ve) => Ve)) ?? [];
      return [...bt, ...$];
    }), m = ($ = !0) => {
      $ ? ne.value = $ : nt(() => ne.value = !1);
    }, I = () => {
      D(), G(), te(), O();
    }, q = ($) => {
      if (oe.value === "corners")
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
    }, y = () => oe.value !== "banding", F = ($, J = null) => {
      if (!($ != null && $.length)) return [];
      let he = "None";
      J === "depth" && (he = "Through");
      const ke = [{ label: he, value: null }];
      return $.forEach((Ke) => {
        const Ve = Ke.toString().charAt(0).toUpperCase() + Ke.toString().slice(1);
        ke.push({ label: Ve, value: Ke });
      }), ke;
    }, _ = () => {
      if (!oe.value) return [];
      if (oe.value === "banding") return [];
      const $ = R.value.machining[oe.value];
      return Array.isArray($) ? $ : [$];
    };
    let M = null;
    const j = () => {
      if (!R.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), M = new Nu({
        HTMLElement: o.value,
        // Use the ref instead of querySelector
        shape: R.value,
        vueComponent: null
      }), M.init(), Vt.value = !0;
    }, Z = to(() => {
      Vt.value && M && M.updateSize();
    }, 10);
    In(o, () => {
      Z();
    });
    const x = () => {
      Fe.value = Fe.value === 0 ? 1 : 0, M.flip();
    }, k = () => {
      switch (oe.value) {
        case "holes":
          A();
          break;
        case "hingeHoles":
          K();
          break;
      }
    }, A = () => {
      R.value.machining.createHole(
        S({ v: R.value.getLongSide() }) / 2,
        S({ v: R.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? S({ v: s.shape.t }) ?? 0,
        Fe.value
      ), M.createHoles();
    }, K = () => {
      R.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Fe.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), M.createHingeHoles();
    }, D = () => {
      R.value.machining.holes.length = 0;
    }, G = () => {
      R.value.machining.hingeHoles.length = 0;
    }, te = () => {
      R.value.machining.corners.forEach(($) => {
        $.size = null, $.type = null;
      }), R.value.banding.a = !1, R.value.banding.b = !1, R.value.banding.c = !1, R.value.banding.d = !1;
    }, O = () => {
      R.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, B = ($) => {
      switch (oe.value) {
        case "holes":
          return R.value.machining.holes.splice($, 1);
        case "hingeHoles":
          return R.value.machining.hingeHoles.splice($, 1);
        case "corners":
          R.value.machining.corners[$].size = null, R.value.machining.corners[$].type = null;
          return;
      }
    }, X = () => {
      switch (oe.value) {
        case "holes":
          return D();
        case "hingeHoles":
          return G();
        case "corners":
          return te();
      }
    }, ie = () => {
      var $;
      if (je.value = [], !!s.options.banding.enabled) {
        m();
        for (const J in R.value.banding)
          R.value.banding[J] ? s.options.banding.enableTypes && (($ = s.options.banding.types) != null && $.length) && (R.value.banding[J] || je.value.push({
            index: J,
            message: "Please select a type"
          })) : R.value.banding[J] = "";
        m(!1);
      }
    }, ae = ($) => {
      const J = je.value.filter((he) => he.index === $);
      return J.length ? J.map((he) => he.message) : [];
    }, xe = ($) => {
      const J = je.value.filter((ke) => ke.index === $ && (ke == null ? void 0 : ke.fields)), he = J.flatMap((ke) => ke.fields);
      return J.length ? he : [];
    }, De = ($, J) => {
      const he = xe($);
      return he != null && he.length ? he.includes(J) : !1;
    }, Be = () => n("close"), Ne = ($) => $ && typeof $.disabled == "function" ? $.disabled : !1, ot = ($, J, he, ke, Ke) => {
      Os($, J, he, ke, Ke, s.findExtrasPrice);
    }, lt = ($, J, he, ke) => {
      nr(
        $,
        J,
        he,
        ke,
        [],
        s.findExtrasPrice
      );
    }, R = eo(i, "shape");
    if (!((ri = R.value) != null && ri.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const ni = Y(!1), Vt = Y(!1), ne = Y(!1), Fe = Y(0), oe = Y(null), je = Y([]), ee = vt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: W("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: W("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: (wi = s.options.holes.diameters) != null && wi.length ? "select" : "unitDependent",
          label: W("machining.diameter"),
          output: (We = s.options.holes.diameters) != null && We.length ? "float" : void 0,
          options: (Ue = s.options.holes.diameters) != null && Ue.length ? F(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof R.value.t < "u" && S({ v: R.value.t }) > 0,
          required: !1,
          type: (He = s.options.holes.depths) != null && He.length ? "select" : "unitDependent",
          output: (Ot = s.options.holes.depths) != null && Ot.length ? "float" : void 0,
          options: (Xe = s.options.holes.depths) != null && Xe.length ? F(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: W("faces.a"),
              value: 0
            },
            {
              label: W("faces.a"),
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
          label: W("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: W("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: W("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof R.value.t < "u" && S({ v: R.value.t }) > 0,
          required: !1,
          type: (we = s.options.holes.depths) != null && we.length ? "select" : "unitDependent",
          output: (Oe = s.options.holes.depths) != null && Oe.length ? "float" : void 0,
          options: (oi = s.options.holes.depths) != null && oi.length ? F(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (zt = s.options.holes.diameters) != null && zt.length ? "select" : "unitDependent",
          label: W("machining.diameter"),
          output: (Si = s.options.holes.diameters) != null && Si.length ? "float" : void 0,
          options: (St = s.options.holes.diameters) != null && St.length ? F(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: W("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: W("faces.a"),
              value: 0
            },
            {
              label: W("faces.b"),
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
              label: W("sides.w1"),
              value: "x1"
            },
            {
              label: W("sides.w2"),
              value: "x2"
            },
            {
              label: W("sides.l1"),
              value: "y1"
            },
            {
              label: W("sides.l2"),
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
          label: W("machining.type"),
          type: "select",
          output: "string",
          options: F(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: W("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? S({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? S({ v: s.options.corners.maxValue, o: s.options }) : S({ v: R.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), de = vt({
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
    }), at = ($) => {
      $.target === $.currentTarget && Be();
    }, ft = () => {
      var $;
      return !(!(($ = R == null ? void 0 : R.value) != null && $.machining) || !ni.value || ne.value);
    };
    return Te(() => {
      var $;
      return ($ = R.value) == null ? void 0 : $.listId;
    }, () => {
      ft() && j();
    }), Te(() => {
      var $;
      return ($ = R.value) == null ? void 0 : $.id;
    }, () => {
      ft() && j();
    }), Te(oe, ($) => {
      if (ft()) {
        if ($ === "banding") {
          m(), ie(), m(!1);
          return;
        }
        if (!$) {
          je.value = [];
          return;
        }
        m(), je.value = R.value.machining.validate(
          R.value,
          $,
          de == null ? void 0 : de[$]
        ), $ === "hingeHoles" && R.value.machining.hingeHoles.forEach((J, he) => {
          Ni(J, de == null ? void 0 : de.holes, je.value, he);
        }), m(!1);
      }
    }, { deep: !0, immediate: !0 }), Te(() => {
      var $, J;
      return (J = ($ = R == null ? void 0 : R.value) == null ? void 0 : $.machining) == null ? void 0 : J.holes;
    }, () => {
      ft() && (m(), je.value = R.value.machining.validate(
        R.value,
        "holes",
        de == null ? void 0 : de.holes
      ), M.createHoles(), m(!1));
    }, { deep: !0, immediate: !0 }), Te(() => {
      var $, J;
      return (J = ($ = R == null ? void 0 : R.value) == null ? void 0 : $.machining) == null ? void 0 : J.hingeHoles;
    }, () => {
      ft() && (m(), R.value.machining.updateHingeHoles(R.value), je.value = R.value.machining.validate(
        R.value,
        "hingeHoles",
        de == null ? void 0 : de.hingeHoles
      ), R.value.machining.hingeHoles.forEach(($, J) => {
        Ni($, de == null ? void 0 : de.holes, je.value, J);
      }), M.createHingeHoles(), m(!1));
    }, { deep: !0, immediate: !0 }), Te(() => {
      var $, J;
      return (J = ($ = R == null ? void 0 : R.value) == null ? void 0 : $.machining) == null ? void 0 : J.corners;
    }, () => {
      if (ft()) {
        m(), je.value = R.value.machining.validate(
          R.value,
          "corners",
          de == null ? void 0 : de.corners
        ), R.value.machining.validate(R.value, "holes"), R.value.machining.validate(R.value, "hingeHoles"), M.createShape(), M.createHoles(), M.createHingeHoles();
        for (const $ of R.value.machining.corners)
          $.isPresent() || Es(R.value, "banding", $.getCorner(), !0);
        M.createBanding(), m(!1);
      }
    }, { deep: !0, immediate: !0 }), Te(() => {
      var $;
      return ($ = R == null ? void 0 : R.value) == null ? void 0 : $.banding;
    }, () => {
      ft() && (ie(), M.createBanding());
    }, { deep: !0, immediate: !0 }), rt(() => {
      if (document.body.style.overflow = "hidden", !R.value || !R.value.l || !R.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      nt(() => j()), ni.value = !0;
    }), yi(() => document.body.style.overflow = ""), ($, J) => {
      var ke, Ke, Ve, xt, Rt;
      const he = Ht("FontAwesomeIcon");
      return b(), ve(vs, { to: "body" }, [
        E("div", {
          "data-app": "smartcut",
          id: "smartcut-machining",
          onClick: at
        }, [
          E("div", Wu, [
            E("div", Uu, [
              P(r) === "development" && oh ? (b(), T("div", Vu, [
                ye(P(e), {
                  data: [R.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : U("", !0),
              E("button", {
                class: "c-btn close",
                type: "button",
                onClick: J[0] || (J[0] = (Qe) => Be())
              }, "×"),
              (ke = R.value) != null && ke.name ? (b(), T("div", zu, re(R.value.name), 1)) : U("", !0),
              E("div", Yu, re((Ke = R.value) == null ? void 0 : Ke.l) + " x " + re((Ve = R.value) == null ? void 0 : Ve.w) + " " + re((xt = R.value) != null && xt.t ? "x " + ((Rt = R.value) == null ? void 0 : Rt.t) : null), 1),
              $.options.faces.enabled ? (b(), T("div", Xu, [
                E("div", {
                  ref: "sides",
                  class: Se(["sides", { flipped: Fe.value === 1 }]),
                  onClick: x
                }, J[5] || (J[5] = [
                  E("div", { class: "side-a" }, " A ", -1),
                  E("div", { class: "side-b" }, " B ", -1)
                ]), 2),
                J[6] || (J[6] = E("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : U("", !0),
              l.value ? (b(), T("button", {
                key: 3,
                class: "c-btn c-btn--delete-solid",
                type: "button",
                onClick: I
              }, " Delete all machining ")) : U("", !0),
              E("div", Ku, [
                $.options.holes.enabled ? (b(), T("div", {
                  key: 0,
                  class: Se({ selected: oe.value === "holes" }),
                  onClick: J[1] || (J[1] = (Qe) => oe.value = "holes")
                }, " Holes ", 2)) : U("", !0),
                $.options.hingeHoles.enabled ? (b(), T("div", {
                  key: 1,
                  class: Se({ selected: oe.value === "hingeHoles" }),
                  onClick: J[2] || (J[2] = (Qe) => oe.value = "hingeHoles")
                }, " Hinge holes ", 2)) : U("", !0),
                $.options.corners.enabled ? (b(), T("div", {
                  key: 2,
                  class: Se({ selected: oe.value === "corners" }),
                  onClick: J[3] || (J[3] = (Qe) => oe.value = "corners")
                }, " Corners ", 2)) : U("", !0),
                $.options.banding.enabled ? (b(), T("div", {
                  key: 3,
                  class: Se({ selected: oe.value === "banding" }),
                  onClick: J[4] || (J[4] = (Qe) => oe.value = "banding")
                }, " Banding ", 2)) : U("", !0)
              ]),
              oe.value === "holes" || oe.value === "hingeHoles" || oe.value && oe.value !== "banding" ? (b(), T("div", Zu, [
                oe.value === "holes" || oe.value === "hingeHoles" ? (b(), T("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: k
                }, " Create ")) : U("", !0),
                oe.value && oe.value !== "banding" ? (b(), T("button", {
                  key: 1,
                  class: "c-btn c-btn--delete-solid",
                  type: "button",
                  onClick: X
                }, " Delete all ")) : U("", !0)
              ])) : U("", !0),
              E("div", Ju, [
                oe.value === "banding" && R.value ? (b(), ve(ds, {
                  key: 0,
                  shape: R.value,
                  env: P(r),
                  "extra-type": "banding",
                  "extra-label": "banding",
                  "extra-keys": f.value,
                  labels: $.options.banding.labels,
                  "all-options": $.options.banding.options,
                  pricing: $.options.banding.pricing,
                  "user-friendly-field-map": P(qe),
                  "part-columns": 1,
                  translate: $.translate,
                  "orientation-model": 0,
                  "get-price": $.getExtrasPrice,
                  "format-price": $.formatPrice,
                  "get-available-pricing-options": $.getAvailablePricingOptions,
                  onSet: ot,
                  onUpdateAll: lt
                }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : U("", !0)
              ]),
              oe.value !== "banding" && h.value.length ? (b(), T("div", {
                key: 5,
                class: Se(["grid-table", oe.value]),
                style: Ce({ "grid-template-columns": u.value })
              }, [
                E("div", Qu, [
                  y() ? (b(), T("div", eh)) : U("", !0),
                  (b(!0), T(be, null, Ae(d.value, (Qe, ct) => fs((b(), T("div", {
                    key: ct,
                    class: "cell"
                  }, re(Qe.label ?? ct), 1)), [
                    [gs, Qe.enabled]
                  ])), 128)),
                  J[7] || (J[7] = E("div", { class: "cell" }, null, -1))
                ]),
                (b(!0), T(be, null, Ae(h.value, (Qe, ct) => (b(), T("div", {
                  key: ct,
                  class: "row"
                }, [
                  y() ? (b(), T("div", th, [
                    E("div", ih, re(q(ct)), 1)
                  ])) : U("", !0),
                  (b(!0), T(be, null, Ae(v.value, (Le, Ft) => (b(), T("div", {
                    key: Ft,
                    class: "cell"
                  }, [
                    ye($t, {
                      type: d.value[Le].type,
                      id: Le + "-" + Ft,
                      warning: De(ct, Le),
                      "enable-label": !1,
                      placeholder: d.value[Le].label ?? Le,
                      disabled: Ne(d.value[Le]),
                      value: P(It)(Qe, Le),
                      output: d.value[Le].output,
                      options: d.value[Le].options,
                      "onUpdate:value": (Ji) => P(er)(Qe, Le, Ji)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  E("div", sh, [
                    E("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (Le) => B(ct)
                    }, [
                      ye(he, { icon: ["fass", "trash"] })
                    ], 8, nh)
                  ]),
                  (b(!0), T(be, null, Ae(ae(ct), (Le, Ft) => (b(), T("div", {
                    key: Ft,
                    class: "group validation",
                    style: Ce({ "grid-column-end": "span " + a.value })
                  }, re(Le), 5))), 128))
                ]))), 128))
              ], 6)) : oe.value ? U("", !0) : (b(), T("div", rh, "Please select from the menu above"))
            ]),
            E("div", {
              id: "machining-diagram",
              class: Se(["diagram", { flipped: Fe.value === 1 }]),
              ref_key: "diagramRef",
              ref: o
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: lh }, Symbol.toStringTag, { value: "Module" })), ch = {
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
      files: io([])
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
function uh(i, t, e, s, n, r) {
  return b(), T("div", {
    id: "drop",
    class: Se({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = so((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    E("div", null, re(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const hh = /* @__PURE__ */ si(ch, [["render", uh]]), dh = { id: "import-file" }, ph = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = Y([]), r = Y([]), o = Y([]), l = Y([]), a = Y({}), u = Y([]), d = Y(!1), v = Y(null), h = Y(null), f = [
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
    ], m = se(() => {
      const O = {};
      return n.value.forEach((B, X) => {
        O[X] = {};
        for (const [ie, ae] of Object.entries(B)) {
          if (!f.includes(ie)) continue;
          const xe = y(ie, ae);
          (xe === !0 || xe === !1) && (O[X][ie] = xe);
        }
      }), O;
    }), I = se(() => e.customFields.map((O) => O.label)), q = (O, B) => {
      if (B) {
        const X = Object.keys(B), ie = [[]];
        X.forEach((xe) => {
          const De = B[xe], Be = [];
          ie.forEach((Ne) => {
            De.forEach((ot) => Be.push([...Ne, ot]));
          }), ie.splice(0, ie.length, ...Be);
        });
        const ae = /* @__PURE__ */ new Set();
        ie.forEach((xe) => ae.add(xe.join("|").toLowerCase())), O === "banding" ? v.value = ae : h.value = ae;
      }
    }, y = (O, B) => {
      if (B === "???") return !0;
      function X(ae) {
        return ae ? (ae = ae.trim().toLowerCase(), ae === "l" || ae === "w") : !0;
      }
      const ie = {
        banding: (ae) => F(ae, v.value, "banding"),
        finish: (ae) => F(ae, h.value, "finish"),
        orientationLock: X
      };
      return O in ie ? ie[O](B) : null;
    }, F = (O, B, X) => {
      if (O = K(O), !O) return !0;
      const ie = O.split(","), ae = ie.every((xe) => !xe || B.has(xe.toLowerCase()));
      if (!ae) {
        const xe = ie.filter((De) => !B.has(De.toLowerCase()));
        console.log(`Valid ${X} choices...`), console.table(Array.from(B)), console.log(`The following ${X} choices are invalid`, xe);
      }
      return ae;
    }, _ = (O, B) => {
      const X = {
        bandingOptions: (ie) => M(ie, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (ie) => M(ie, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return O in X ? X[O](B) : null;
    }, M = (O, B, X, ie) => {
      if (O = K(O), !O)
        return ie.reduce((De, Be) => ({ ...De, [Be]: {} }), {});
      const ae = O.split(",").map((De) => De.toLowerCase()), xe = {};
      return ie.forEach((De, Be) => {
        xe[De] = {}, Object.keys(B).forEach((Ne, ot) => {
          var lt;
          xe[De][X[ot]] = ((lt = ae[Be]) == null ? void 0 : lt.split("|")[ot]) || "";
        });
      }), xe;
    }, j = () => n.value.map((O, B) => ({
      l: e.numberFormat === "decimal" ? _i(O.l) : O.l,
      w: e.numberFormat === "decimal" ? _i(O.w) : O.w,
      t: e.numberFormat === "decimal" ? _i(O.t) : O.t,
      q: O.q,
      orientationLock: O.orientationLock,
      name: O.name,
      material: O.material,
      bandingOptions: m.value[B].banding ? _("bandingOptions", O.banding) : null,
      finishOptions: m.value[B].finish ? _("finishOptions", O.finish) : null,
      numberFormat: e.numberFormat,
      customData: G(O)
    })), Z = (O) => {
      var X;
      const B = (X = O == null ? void 0 : O[0]) == null ? void 0 : X.data;
      B && Nr.parse(B, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (ie) => x(ie),
        error: () => s("error")
      });
    }, x = (O) => {
      r.value = O.data.filter((B) => B.some((X) => X)), o.value = r.value[0], a.value = {};
      for (let B = o.value.length; B--; ) {
        const X = o.value[B], ie = k(X);
        ie ? a.value[B] = ie : (a.value[B] = null, I.value.includes(X) && (a.value[B] = "customData." + e.customFields.find((ae) => ae.label === X).id));
      }
      A(), r.value.shift(), D(), te();
    }, k = (O) => {
      const B = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", W("l"), W("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", W("w"), W("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", W("t"), W("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", W("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", W("quantity"), W("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", W("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", W("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", W("banding")],
        finish: ["finish", "paint"]
      }, X = Object.entries(B).reduce(
        (ie, [ae, xe]) => (xe.some((De) => O && O.toLowerCase() === De) && ie.push(ae), ie),
        []
      );
      return X.length > 1 ? null : X[0];
    }, A = () => {
      d.value = !1, l.value = Object.values(a.value).map((B) => !B || B === "N" ? null : f.includes(B) ? B : (d.value = !0, null));
      const O = l.value.filter((B, X) => l.value.indexOf(B) !== X);
      u.value = O.map((B) => l.value.reduce(
        (X, ie, ae) => (ie && ie === B && X.push(ae), X),
        []
      ));
    }, K = (O) => O && O.replace(/\s*,\s*/g, ","), D = () => {
      const O = r.value.map((B) => {
        const X = {};
        return o.value.forEach((ie, ae) => {
          if (u.value.flat().includes(ae))
            return X[a.value[ae]] = "???";
          X[a.value[ae]] = B[ae];
        }), X;
      });
      n.value = O;
    }, G = (O) => {
      let B = {};
      for (let X in O)
        if (X.startsWith("customData.")) {
          let ie = X.slice(11);
          B[ie] = O[X];
        }
      return B;
    }, te = () => {
      const O = j();
      O != null && O.length && s("import", O);
    };
    return rt(() => {
      q("banding", e.bandingOptions), q("finish", e.finishOptions);
    }), (O, B) => (b(), T("div", dh, [
      ye(hh, {
        label: P(W)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: Z
      }, null, 8, ["label"])
    ]));
  }
}), fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ph }, Symbol.toStringTag, { value: "Module" }));
class Ct extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class xn {
  constructor({ url: t = null, spec: e = null }) {
    c(this, "url");
    c(this, "spec");
    // Update the operations object to use the FormulaOperation type
    c(this, "operations", {
      add: (t, e) => t + e,
      subtract: (t, e) => t - e,
      multiply: (t, e) => t * e,
      divide: (t, e) => {
        if (e === 0) throw new Ct("Division by zero", "DIVISION_BY_ZERO");
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
      const [u, d] = a.split(".");
      if (!t.nodes.has(a)) {
        const I = n[u];
        if (I)
          return d === "q" ? I.q : I[d];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const v = t.nodes.get(a);
      if (typeof v.formula == "number")
        return r.set(a, v.formula), v.formula;
      o.add(a);
      const h = t.edges.get(a) || /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (const I of h)
        if (I.startsWith("input.")) {
          const q = I.split(".")[1];
          f.set(I, s[q]);
        } else
          f.set(I, l(I));
      const m = this.evaluateFormulaWithDeps(v.formula, f, s);
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
    if (!((e = this.spec) != null && e.inputs)) throw new Ct("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new Ct(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new Ct(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new Ct("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new Ct(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new Ct(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new Ct(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
const gh = {
  key: 0,
  class: "debug"
}, mh = { id: "formula-pricing" }, vh = {
  key: 1,
  class: "extras"
}, yh = { class: "heading" }, bh = { id: "hardware-total" }, wh = { class: "heading panels" }, Sh = !1, xh = /* @__PURE__ */ Ee({
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
    const e = Tt(() => Promise.resolve().then(() => Zi)), s = i, n = t, r = no("calculator"), o = se(() => r()), l = Y("production");
    let a = null;
    const u = Y(null), d = Y([]), v = Y(!1), h = Y(""), f = se(() => {
      if (!v.value || !d.value.length || d.value.every((x) => x.value === null)) return null;
      const Z = _();
      return nt(() => n("panel-result", Z)), Z;
    }), m = se(() => {
      if (!o.value || !v.value || !d.value.length || d.value.every((x) => x.value === null)) return;
      const Z = M();
      return nt(() => n("hardware-result", Z, I.value)), Z;
    }), I = se(() => {
      if (m.value)
        return Object.values(m.value).reduce((Z, x) => Z + x.totalCost, 0);
    });
    Te(f, (Z) => {
      var K, D, G;
      if (!v.value || !Z || !o.value || !((K = o.value) != null && K.inputShapes)) return;
      const x = (te) => te != null && te.name ? te.name.toLowerCase() : "", k = new Map(
        o.value.inputShapes.map((te) => [x(te), te])
      ), A = /* @__PURE__ */ new Set();
      for (const te of Object.values(f.value)) {
        if (!te.name) continue;
        const O = x(te), B = k.get(O), X = {
          ...te,
          name: te.name.toUpperCase() || (B == null ? void 0 : B.name.toUpperCase()),
          material: ((D = te.material) == null ? void 0 : D.toUpperCase()) || ((G = B == null ? void 0 : B.material) == null ? void 0 : G.toUpperCase()),
          bandingOptions: te.bandingOptions || {},
          finishOptions: te.finishOptions || {},
          orientationLock: te.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, ie = B || o.value.createInputShape(X);
        if (B) {
          Object.assign(B, X);
          for (const ae of ["banding", "finish"])
            o.value.initExtrasOptions(B, ae);
        } else
          o.value.inputShapes.push(ie);
        A.add(O);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (te) => A.has(x(te))
      );
    }, { immediate: !1 }), rt(() => j());
    const q = (Z) => {
      s.debug && console.log(Z);
    }, y = () => {
      d.value = Object.values(u.value.inputs).map((Z) => ({
        value: Z.default ?? null
      })), console.log(d.value);
    }, F = (Z, x) => {
      d.value[Z] && (d.value[Z].value = x);
    }, _ = () => {
      try {
        return a.calculatePanelsFromFields(d.value);
      } catch (Z) {
        return o.value.inputShapes.length = 0, console.error(Z), null;
      }
    }, M = () => {
      try {
        return a.calculateHardwareFromFields(d.value);
      } catch (Z) {
        return console.error(Z), null;
      }
    }, j = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (q(`SmartCut - Formula calculator init from url: ${s.url}`), a = new xn({ url: s.url }), u.value = await a.getSpec()) : s.spec && (q("SmartCut - Formula calculator init with JSON"), a = new xn({ spec: s.spec }), u.value = await a.getSpec()), y(), v.value = !0;
    };
    return (Z, x) => {
      var k, A;
      return b(), T(be, null, [
        l.value === "development" && Sh ? (b(), T("div", gh, [
          x[1] || (x[1] = E("div", null, "Developer information", -1)),
          ye(P(e), {
            data: [f.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        E("div", mh, [
          (k = u.value) != null && k.projectName ? (b(), ve($t, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: h.value,
            "onUpdate:value": x[0] || (x[0] = (K) => h.value = K)
          }, null, 8, ["value"])) : U("", !0),
          (b(!0), T(be, null, Ae((A = u.value) == null ? void 0 : A.inputs, (K, D, G) => {
            var te;
            return b(), ve($t, {
              id: "formula-field-" + G,
              key: G,
              type: K.type,
              label: K.label,
              placeholder: K.label,
              min: K.min ?? 0,
              max: K.max ?? null,
              default: K.default ?? 0,
              value: (te = d.value[G]) == null ? void 0 : te.value,
              "onUpdate:value": (O) => F(G, O)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          m.value ? (b(), T("div", vh, [
            E("div", yh, re(P(W)("Hardware")), 1),
            (b(!0), T(be, null, Ae(m.value, (K, D) => (b(), T("div", { key: D }, re(K.name) + " x" + re(K.q) + " = " + re(i.formatPrice(K.totalCost)), 1))), 128)),
            E("div", bh, re(P(W)("Hardware total")) + " = " + re(i.formatPrice(I.value)), 1)
          ])) : U("", !0),
          E("div", wh, re(P(W)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: xh }, Symbol.toStringTag, { value: "Module" })), kh = {
  id: "smartcut-notices",
  "data-app": "smartcut"
}, Ch = { class: "content" }, Ih = ["onClick"], Ph = ["innerHTML"], Th = /* @__PURE__ */ Ee({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = ys(), n = Y({}), r = se(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Ht("FontAwesomeIcon");
      return b(), ve(vs, { to: "body" }, [
        E("div", kh, [
          ye(ro, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Se(["notices-container", t.position])
          }, {
            default: ms(() => [
              (b(!0), T(be, null, Ae(P(e), (u) => (b(), T("div", {
                key: u.id,
                ref_for: !0,
                ref: (d) => {
                  d && (n.value[u.id] = d);
                },
                class: Se([
                  "notice",
                  `notice--${u.type}`
                ])
              }, [
                E("div", Ch, [
                  E("div", {
                    class: "message",
                    onClick: (d) => u.action()
                  }, re(u.message), 9, Ih),
                  E("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, Ph)
                ]),
                u.persistent ? U("", !0) : (b(), ve(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (d) => P(s)(u.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Th }, Symbol.toStringTag, { value: "Module" }));
export {
  wo as A,
  bo as B,
  Yh as C,
  zh as D,
  Rh as E,
  Xh as F,
  Ps as I,
  Kh as N,
  Zi as O,
  Ut as S,
  si as _,
  fi as a,
  le as b,
  Et as c,
  Qt as d,
  Uh as e,
  Xl as f,
  Nh as g,
  At as h,
  qh as i,
  Bh as j,
  Hh as k,
  jh as l,
  Vh as m,
  Gh as n,
  di as o,
  S as p,
  bt as q,
  Mh as r,
  Go as s,
  Wh as t,
  Fh as u,
  yt as v,
  It as w,
  en as x,
  ti as y,
  W as z
};
