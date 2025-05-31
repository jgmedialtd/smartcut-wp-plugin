var Tr = Object.defineProperty;
var Or = (i, t, e) => t in i ? Tr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var u = (i, t, e) => Or(i, typeof t != "symbol" ? t + "" : t, e);
import { F as ns, i as Ar, g as Pe, d as Mi, a as $t, c as ts, b as xn, e as Gs, f as Je, v as fs, t as qi, h as Er, s as Rr, j as Mr, o as Fr, k as _r, l as qr, P as Br } from "./vendor-cTtX1OWX.js";
import { i as kn, B as jr } from "./vendor-i18n-Bf4ASP8L.js";
import { d as Ee, c as I, o as y, F as xe, r as Ae, n as Ie, a as ke, b as A, w as ps, t as ne, v as gs, e as W, f as Hr, g as H, h as te, i as Le, j as gt, k as tt, l as ms, m as di, u as D, p as ti, q as ve, s as Gr, x as vs, y as jt, z as we, A as Wr, B as Lt, C as Nr, D as Ur, E as zr, G as Vr, H as yt, I as Yr, T as Xr, J as Cn, K as Kr, L as Ws, M as Zr, N as Jr, O as Qr, P as eo, Q as to } from "./vendor-vue-F2WcuEKM.js";
import { u as In, a as ys, b as bs, c as io, d as so, e as no } from "./composables-Cxm1DkC4.js";
import { a as Pn, b as Dn, l as lt, c as Bi, d as ji, s as _e, r as dt, e as fi, f as Ln, g as ro, h as oo, i as lo, p as ao, S as uo, j as co, k as ho } from "./vendor-d3-B-JATA3m.js";
const fo = (i, t, e) => {
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
function Ht(i) {
  return !(!i || typeof i != "string");
}
function po(i) {
  return !Ht(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function Hi(i) {
  return !Ht(i) || !i || typeof i != "string" ? "" : i.toLowerCase();
}
function rs(i) {
  return Ht(i) ? i.trim().split(" ").map((t) => gi(t)).join(" ") : "";
}
function gi(i) {
  return Ht(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function ws(i) {
  return Ht(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), i.trim()) : "";
}
function go(i) {
  return Ht(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function mo(i, t = 100) {
  return Ht(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let $n = kn;
function vo(i) {
  $n = i;
}
function Be(i, t) {
  var n;
  const e = new Error().stack;
  (n = e == null ? void 0 : e.split(`
`)[2]) == null || n.trim();
  const s = $n.t(i, { ...t });
  return !s || s === i ? i : s;
}
const yo = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CiqTH800.js"), "../translation/cs.json": () => import("./cs-CO32-Ayr.js"), "../translation/da.json": () => import("./da-BuWbJeCT.js"), "../translation/de.json": () => import("./de-CydkwI5d.js"), "../translation/el.json": () => import("./el-DqXOeGsm.js"), "../translation/en.json": () => import("./en-DK_GQaRl.js"), "../translation/es.json": () => import("./es-D0UxDOa0.js"), "../translation/fi.json": () => import("./fi-ChQlN4U1.js"), "../translation/fr.json": () => import("./fr-D2dCzdXP.js"), "../translation/hi.json": () => import("./hi-Cf0SgHLa.js"), "../translation/hr.json": () => import("./hr-DzUIE5ze.js"), "../translation/hu.json": () => import("./hu-CJWdBUc6.js"), "../translation/id.json": () => import("./id-f8SKa0cL.js"), "../translation/it.json": () => import("./it-CKv-Or1S.js"), "../translation/ja.json": () => import("./ja-Cyo0U7fc.js"), "../translation/ko.json": () => import("./ko-aBVSHsun.js"), "../translation/ms.json": () => import("./ms-MlLh8hVY.js"), "../translation/nl.json": () => import("./nl-EVIktrQs.js"), "../translation/no.json": () => import("./no-CvExIO-b.js"), "../translation/pl.json": () => import("./pl-C9COMzxy.js"), "../translation/pt.json": () => import("./pt-BRjLo1WI.js"), "../translation/ro.json": () => import("./ro-BLrYPxcs.js"), "../translation/ru.json": () => import("./ru-Bb3ERVzh.js"), "../translation/sk.json": () => import("./sk-BM8FcAOl.js"), "../translation/sv.json": () => import("./sv-0c9CD3sc.js"), "../translation/th.json": () => import("./th-DokU8OLc.js"), "../translation/tr.json": () => import("./tr-B6cBW9pR.js"), "../translation/uk.json": () => import("./uk-BjAwxhRn.js"), "../translation/vi.json": () => import("./vi-BCqBog--.js"), "../translation/zh.json": () => import("./zh-CKL5CCty.js") }), Gi = Object.keys(yo).map((i) => {
  const t = i.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((i) => i !== "");
Gi.length === 0 ? console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.") : console.log(`[i18n] Detected languages: ${Gi.join(", ")}`);
const Ns = "en", Qt = kn.createInstance();
function ee(i, t) {
  var o;
  if (!Qt.isInitialized) {
    const l = Array.isArray(i) ? i.join(", ") : String(i);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${l}. Returning key.`), l;
  }
  const e = new Error().stack, s = (o = e == null ? void 0 : e.split(`
`)[2]) == null ? void 0 : o.trim();
  let n = Qt.t(i, t);
  const r = Array.isArray(i) ? i[0] : i;
  return n === r && console.warn(`[i18n] Translation not found - Key: "${r}", Called from: ${s}`), n = typeof n == "string" ? n : String(n), gi(n);
}
const Li = {}, bo = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (i, t, e) => {
    try {
      if (Li[i]) {
        e(null, Li[i]);
        return;
      }
      console.log(`[i18n] Attempting to load local module for language: ${i}`);
      const s = await fo(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CiqTH800.js"), "../translation/cs.json": () => import("./cs-CO32-Ayr.js"), "../translation/da.json": () => import("./da-BuWbJeCT.js"), "../translation/de.json": () => import("./de-CydkwI5d.js"), "../translation/el.json": () => import("./el-DqXOeGsm.js"), "../translation/en.json": () => import("./en-DK_GQaRl.js"), "../translation/es.json": () => import("./es-D0UxDOa0.js"), "../translation/fi.json": () => import("./fi-ChQlN4U1.js"), "../translation/fr.json": () => import("./fr-D2dCzdXP.js"), "../translation/hi.json": () => import("./hi-Cf0SgHLa.js"), "../translation/hr.json": () => import("./hr-DzUIE5ze.js"), "../translation/hu.json": () => import("./hu-CJWdBUc6.js"), "../translation/id.json": () => import("./id-f8SKa0cL.js"), "../translation/it.json": () => import("./it-CKv-Or1S.js"), "../translation/ja.json": () => import("./ja-Cyo0U7fc.js"), "../translation/ko.json": () => import("./ko-aBVSHsun.js"), "../translation/ms.json": () => import("./ms-MlLh8hVY.js"), "../translation/nl.json": () => import("./nl-EVIktrQs.js"), "../translation/no.json": () => import("./no-CvExIO-b.js"), "../translation/pl.json": () => import("./pl-C9COMzxy.js"), "../translation/pt.json": () => import("./pt-BRjLo1WI.js"), "../translation/ro.json": () => import("./ro-BLrYPxcs.js"), "../translation/ru.json": () => import("./ru-Bb3ERVzh.js"), "../translation/sk.json": () => import("./sk-BM8FcAOl.js"), "../translation/sv.json": () => import("./sv-0c9CD3sc.js"), "../translation/th.json": () => import("./th-DokU8OLc.js"), "../translation/tr.json": () => import("./tr-B6cBW9pR.js"), "../translation/uk.json": () => import("./uk-BjAwxhRn.js"), "../translation/vi.json": () => import("./vi-BCqBog--.js"), "../translation/zh.json": () => import("./zh-CKL5CCty.js") }), `../translation/${i}.json`, 3);
      Li[i] = s.default, console.log(`[i18n] Successfully loaded and cached local module for language: ${i}`), e(null, Li[i]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${i}'. Error: ${s.message}`;
      console.warn(n, s), e(s, null);
    }
  }
};
async function wo() {
  return vo(Qt), await Qt.use(jr).use(bo).init({
    debug: !0,
    fallbackLng: Ns,
    supportedLngs: Gi.length > 0 ? Gi : [Ns],
    interpolation: {
      format: function(i, t) {
        return t === "c" ? rs(i) : t === "sc" ? gi(i) : i;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), console.log("[i18n] Initialized. Detected language:", Qt.language), Qt;
}
const Ph = wo().catch((i) => {
  console.error("[i18n] CRITICAL: Initialization failed.", i);
}), Jt = 1e-10, So = 10, xo = Number.MAX_SAFE_INTEGER, ko = 4294967295, He = (i) => typeof i == "number" && Number.isFinite(i), Fi = (i) => Array.isArray(i) && i.length > 0;
function ci(i, t, e = Jt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Co = {
  greaterThan: (i, t, e = Jt) => !He(i) || !He(t) ? !1 : ci(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Jt) => !He(i) || !He(t) ? !1 : ci(i, t, e) >= 0,
  lessThan: (i, t, e = Jt) => !He(i) || !He(t) ? !1 : ci(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Jt) => !He(i) || !He(t) ? !1 : ci(i, t, e) <= 0,
  equalTo: (i, t, e = Jt) => !He(i) || !He(t) ? !1 : ci(i, t, e) === 0
};
function Io(i) {
  return He(i) ? Number.isInteger(i) ? i : Number(i.toFixed(So)) : !1;
}
function Po(i) {
  if (!He(i) || i < 0 || i > xo)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (ko + 1) * i);
}
function Do(i, t) {
  if (!Fi(i))
    throw new Error("Invalid array parameter");
  if (!He(t) || t < 0 || t > i.length)
    throw new Error("Invalid size parameter");
  const e = i.slice(), s = i.length - t;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e.slice(s);
}
class $i {
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
const de = {
  ...Co,
  isNumber: He,
  round: Io,
  getRandom: Po,
  getRandomSample: Do,
  calculateStandardDeviation: $i.calculateStandardDeviation.bind($i),
  calculateCoefficientOfVariation: $i.calculateCoefficientOfVariation.bind($i)
}, Lo = 10, $o = 0;
class Wi extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
const hi = {
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
function x(i) {
  var o;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && ((o = i.o) == null ? void 0 : o.numberFormat) !== "fraction" ? null : "";
  const t = i.o ?? {}, e = i.nf ?? t.numberFormat ?? "decimal", s = i.dp ?? t.decimalPlaces ?? Lo, n = i.pl ?? t.parseLocale ?? !1, r = i.fr ?? t.fractionRoundTo ?? $o;
  try {
    const l = On(i.v, n);
    return l === null || l === "" ? e === "decimal" ? null : "" : e === "decimal" ? To(l, s) : Oo(l, r);
  } catch (l) {
    throw l instanceof Wi ? l : new Wi(
      `Failed to convert number format: "${i.v}" to ${e}. ${l.message}`
    );
  }
}
function To(i, t) {
  let e;
  if (typeof i == "number" ? e = i : e = new ns(i).valueOf(), typeof t == "number") {
    const s = Math.pow(10, t);
    return Math.round(e * s) / s;
  }
  return e;
}
function Oo(i, t) {
  const e = new ns(i);
  if (t > 0) {
    const s = e.mul(t), n = Math.round(s.valueOf());
    return new ns(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function Ao(i, t, e = !1) {
  const s = i == null || String(i).trim() === "";
  if (e && s)
    return { value: null, valid: !1, message: "field_required" };
  if (!e && s)
    return { value: null, valid: !0 };
  const n = String(i);
  try {
    const r = On(n, !0), o = parseFloat(r ?? ""), l = r !== null && r !== "" && !isNaN(o) && isFinite(o);
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
function Eo(i = "en-US") {
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
    const { thousandsSeparator: e, decimalSeparator: s } = Eo(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch (e) {
    throw new Wi(`Failed to parse locale number: "${i}". ${e.message || "Parsing error"}`);
  }
}
function Tn(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  if (!t) return !1;
  const e = Object.keys(hi).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${e}]|[${e}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(t);
}
function On(i, t = !1) {
  if (i == null || i === "") return null;
  let e = String(i).trim();
  if (!e) return null;
  const s = Object.keys(hi).join("");
  e = e.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(hi).join(""), r = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), l = e.match(r), a = e.match(o);
    if (l) {
      const c = l[1], f = l[2], m = l[3], d = hi[m];
      if (d)
        return `${c}${f} ${d}`;
      throw new Error(`Unknown vulgar fraction character: ${m}`);
    } else if (a) {
      const c = a[1] || "", f = a[2], m = hi[f];
      if (m)
        return `${c}${m}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (Tn(e)) {
      let c = "";
      e.startsWith("-") && (c = "-", e = e.substring(1).trim());
      const f = e.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((f.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return c + f;
    } else {
      t ? (e = e.replace(/[^0-9,. -]/g, ""), e = e.replace(/\s/g, "")) : (e = e.replace(/[^0-9.-]/g, ""), e = e.replace(/,/g, "")), e.startsWith(".") && (e = "0" + e), e.startsWith("-.") && (e = "-0." + e.substring(2));
      const c = e.split(".");
      c.length > 2 && (e = c[0] + "." + c.slice(1).join(""));
      const f = t ? _i(e) : parseFloat(e);
      return f === null || isNaN(f) || !isFinite(f) ? null : f.toLocaleString("fullwide", { useGrouping: !1, maximumFractionDigits: 20 });
    }
  } catch (n) {
    throw new Wi(
      `Failed to clean numeric input: "${i}". ${n.message || "Cleaning error"}`
    );
  }
}
function Dh(i, t, e = null, s = null) {
  if (i && !(!De(i) && !qt(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys)
      if (typeof i[n] == "object" && i[n] !== null)
        for (const r in i[n])
          Object.prototype.hasOwnProperty.call(i[n], r) && (i[n][r] = x({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s }));
      else
        i[n] = x({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
  }
}
const Ni = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function Us(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function zs(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Vs(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const ge = (i, t, e) => t in i ? i[t] : (console.warn(Ni.missingProperty(String(t), e)), null), Ti = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, Zt = (i, t) => {
  if (!Us(i) || !Us(t))
    return console.warn(Ni.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, rt = (i, t) => {
  const e = ge(i, "id", "first item"), s = ge(t, "id", "second item");
  if (e === null || s === null) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function ct(i) {
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
const pi = {
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
  LDIDA: Ti(
    ct([["l", "desc"]]),
    rt
  ),
  WDIDA: Ti(
    ct([["w", "desc"]]),
    rt
  ),
  // Area-based sorts
  AD: (i, t) => -Zt(i, t),
  AA: Zt,
  AAID: Ti(
    Zt,
    rt
  ),
  ADID: Ti(
    (i, t) => -Zt(i, t),
    rt
  ),
  // ID sorts
  ID: rt,
  IDDesc: (i, t) => -rt(i, t),
  StockID: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    return !e || !s ? 0 : rt(e, s);
  },
  StockIDAD: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = rt(e, s);
    return n !== 0 ? n : -Zt(i, t);
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
    return e && !s ? 1 : !e && s ? -1 : rt(i, t);
  },
  stockIDTypePlacementOrder: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = rt(e, s);
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
    const n = rt(e, s);
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
    return !zs(i) || !zs(t) ? (console.warn(Ni.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Vs(t) || !Vs(e) ? (console.warn(Ni.missingLongSide), 0) : e[i] === t[i] ? -Zt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function Ro(i) {
  return De(i) || Ze(i) || Ds(i);
}
function Mo(i, t, e) {
  var r, o;
  if (!e) return !0;
  const s = (r = t == null ? void 0 : t.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function Fo(i, t, e) {
  return e ? !k(i.t) || !k(t.t) ? !1 : Ze(i) ? de.equalTo(i.t, t.t) : i.t === t.t : !0;
}
function _o(i, t) {
  var e;
  return ((e = t == null ? void 0 : t.saw) == null ? void 0 : e.stockType) !== "linear" || !Ze(i) ? !0 : as(i, 0, t) && de.equalTo(i.w, t.w) || as(i, 1, t) && de.equalTo(i.l, t.w);
}
function qo(i, t, e, s = 0) {
  const n = De(i[0]), r = e.stockType;
  if (i.some((P) => k(P.stockLock) && P.stockLock.length)) return { stockList: t, shapeList: i, unusableShapes: [], unusableStock: [], newIssues: [] };
  n || (t = t.filter((P) => P.autoAdd === !0 || k(P.q) && P.q > 0));
  const l = t.some((P) => k(P.material)), a = t.some((P) => k(P.t)), c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), v = [];
  let S = s;
  for (const P of i) {
    P.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const J = Bo(P, t, e, l, a), X = P.stockMatch.fit, he = P.stockMatch.material, re = P.stockMatch.thickness, C = P.stockMatch.width, w = X.some(Boolean), O = !l || he.some(Boolean), U = !a || re.some(Boolean), L = r === "linear" && C.some(Boolean);
    if (P.stockMatch.fit = w, P.stockMatch.material = O, P.stockMatch.thickness = U, P.stockMatch.width = L, !n && J.length) {
      const M = J.map((K) => K.getParentID());
      P.stockLock = M, M.forEach((K) => c.add(K));
    }
    if (!w) {
      f.add(P);
      const M = new le({
        item: P,
        field: [["l"], ["w"]],
        index: [S],
        message: "errors.validation.will_not_fit"
      });
      v.push(M);
    }
    if (l && !O) {
      d.add(P);
      const M = new le({
        item: P,
        field: [["material"]],
        index: [S],
        message: "errors.validation.no_matching_stock_material"
      });
      v.push(M);
    }
    if (a && !U) {
      p.add(P);
      const M = new le({
        item: P,
        field: [["t"]],
        index: [S],
        message: "errors.validation.no_matching_stock_thickness"
      });
      v.push(M);
    }
    if (r === "linear" && w && !L) {
      m.add(P);
      const M = new le({
        item: P,
        field: [["w"]],
        index: [S],
        message: "errors.validation.no_matching_stock_width"
      });
      v.push(M);
    }
    S++;
  }
  i.forEach((P) => {
    P.stockMatch = null;
  });
  let F, G;
  return n ? (F = i.filter((P) => f.has(P) || m.has(P) || l && d.has(P) || a && p.has(P)).sort(pi.ID), G = []) : (F = i.filter((P) => f.has(P) || m.has(P) || !P.stockLock || !P.stockLock.length || // Include shapes that fail material/thickness when those constraints are active
  l && d.has(P) || a && p.has(P)).sort(pi.ID), G = t.filter((P) => !c.has(P.parentID)).sort(pi.ID), t = t.filter((P) => it(P)).filter((P) => c.has(P.parentID)), i = i.filter((P) => {
    var J;
    return !f.has(P) && !m.has(P) && (!l || !d.has(P)) && (!a || !p.has(P)) && ((J = P == null ? void 0 : P.stockLock) == null ? void 0 : J.length);
  })), {
    stockList: t,
    unusableStock: G,
    shapeList: i,
    unusableShapes: F,
    newIssues: v
  };
}
function Bo(i, t, e, s = !1, n = !1) {
  return t.filter((r, o) => {
    const l = {
      fit: Ro(i) && Xi(i, r, void 0, e),
      material: Mo(i, r, s),
      thickness: Fo(i, r, n),
      width: _o(i, r)
    };
    return Object.entries(l).forEach(([a, c]) => {
      i.stockMatch[a][o] = c;
    }), Object.values(l).every(Boolean);
  });
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
    throwError: a = !1,
    shouldTranslate: c = !0
  }) {
    u(this, "message");
    u(this, "identifier");
    u(this, "field");
    u(this, "index");
    u(this, "listId");
    u(this, "type");
    this.message = c ? Be(e) : e, this.field = s.map((m) => [...m]), this.index = n ? [...n] : [], this.listId = r ? [...r] : [], this.type = l, this.identifier = this.determineIdentifier(t, this.index), this.addToItemIssues(t), Array.isArray(o) && o.push(this);
    const f = `issue created for ${Ul(t)}: ${this.identifier || "N/A"} - ${this.field.map((m) => m.join(".")).join(", ")}`;
    if (a)
      throw new Error(f);
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
    const s = this.field.some((r) => Ar(r, t)), n = this.index.includes(e);
    return s && n;
  }
}
const jo = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Ho(i) {
  return jo[i] ?? i;
}
function Dt(i) {
  return i.filter((t) => t.type === "error");
}
function Go(i, t) {
  return typeof i == "object" && i !== null && t in i;
}
function An(i) {
  return Go(i, "issues") && Array.isArray(i.issues);
}
function Ys(i, t, e = !1) {
  var r;
  if (!An(i) || !((r = i.issues) != null && r.length))
    return !1;
  const s = e ? "warning" : "error";
  return i.issues.filter((o) => o.type === s).some((o) => {
    var l;
    return (l = o.field) != null && l.length ? o.field.some((a) => a.every((c, f) => c === Ho(t[f]))) : !1;
  });
}
const ri = ({
  item: i,
  field: t,
  index: e,
  newIssues: s,
  min: n = null,
  max: r = null,
  required: o = !1,
  allowZero: l = !0,
  isWarning: a = !1
}) => {
  if (!i)
    throw new Error("Item is required for validation");
  let c = Pe(i, t);
  try {
    if (c = x({ v: c }), o && (c === null || c === ""))
      return new le({
        item: i,
        message: Be("errors.validation.not_set", {
          0: qe[t.join(".")]
        }),
        field: [t],
        index: [e],
        type: a ? "warning" : "error",
        issues: s
      }), null;
    if (!l && c === 0)
      return new le({
        item: i,
        message: Be("errors.validation.greater_than", {
          0: qe[t.join(".")],
          1: 0
        }),
        field: [t],
        index: [e],
        type: a ? "warning" : "error",
        issues: s
      }), 0;
  } catch {
    return En({
      item: i,
      field: t,
      value: Pe(i, t),
      index: e,
      issues: s,
      isWarning: a ?? !1
    }), null;
  }
  return Wo({ item: i, field: t, value: c, index: e, issues: s, min: n, isWarning: a ?? !1 }), No({ item: i, field: t, value: c, index: e, issues: s, max: r, isWarning: a ?? !1 }), c;
}, En = ({
  item: i,
  field: t,
  value: e,
  index: s,
  issues: n,
  isWarning: r
}) => {
  new le({
    item: i,
    message: Be("errors.validation.not_understood", {
      0: t.join("."),
      1: e
    }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, Wo = ({
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
    message: Be("errors.validation.greater_than_or_equal", {
      0: qe[t.join(".")],
      1: r
    }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, No = ({
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
    message: Be("errors.validation.less_than_or_equal", {
      0: qe[t.join(".")],
      1: r
    }),
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
      message: Be("errors.validation.must_be_string", {
        0: qe[t]
      }),
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
    message: Be("errors.validation.must_be_values", {
      0: qe[t],
      1: e.join(", ")
    }),
    field: [[t]],
    index: [s],
    type: n ? "warning" : "error",
    issues: r
  });
}, Uo = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ri({
    item: i,
    field: ["x"],
    index: t,
    newIssues: n,
    min: 0,
    max: e,
    isWarning: s
  }), n;
}, zo = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ri({
    item: i,
    field: ["y"],
    index: t,
    newIssues: n,
    min: 0,
    max: e,
    isWarning: s
  }), n;
}, Vo = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ri({
    item: i,
    field: ["l"],
    index: t,
    newIssues: n,
    required: !0,
    allowZero: !1,
    min: 0,
    max: e,
    isWarning: s
  }), n;
}, Yo = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ri({
    item: i,
    field: ["w"],
    index: t,
    newIssues: n,
    required: !0,
    allowZero: !1,
    min: 0,
    max: e,
    isWarning: s
  }), n;
}, Xo = ({ item: i, index: t, max: e, isWarning: s = !1, saw: n }) => {
  const r = [];
  return (n == null ? void 0 : n.cutType) === "beam" && (Pe(i, "t") || new le({
    item: i,
    message: Be("errors.saw.thickness_required_for_beam_saw"),
    field: [["t"]],
    index: [t],
    type: "error",
    issues: r
  })), ri({
    item: i,
    field: ["t"],
    index: t,
    newIssues: r,
    allowZero: !1,
    min: 0,
    max: e,
    isWarning: s
  }), r;
}, Ko = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "q");
  if (n == null) return s;
  try {
    const r = x({ v: n }), o = Pe(i, "autoAdd");
    r <= 0 && o !== !0 && new le({
      item: i,
      message: Be("errors.validation.greater_than_or_equal", {
        0: qe.q,
        1: 0
      }),
      field: [["q"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: s
    });
  } catch {
    En({
      item: i,
      field: ["q"],
      value: n,
      index: t,
      issues: s,
      isWarning: e
    });
  }
  return s;
}, Zo = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "orientationLock", ["l", "w"], t, e, s), s;
}, Jo = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "grain", ["l", "w"], t, e, s), s;
}, Qo = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "banding");
  return n != null && (typeof n != "object" || n === null) && new le({
    item: i,
    message: Be("errors.validation.must_be_object", { 0: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, el = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "customData");
  if (n == null) return s;
  if (typeof n != "object" || n === null)
    return new le({
      item: i,
      message: Be("errors.validation.must_be_object", {
        0: qe.customData
      }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const [, r] of Object.entries(n))
    if (r != null) {
      const o = typeof r;
      ["string", "number", "boolean"].includes(o) || new le({
        item: i,
        message: Be("errors.validation.must_be_string_number_boolean", {
          0: qe.customData
        }),
        field: [["customData"]],
        index: [t],
        type: e ? "warning" : "error",
        issues: s
      });
    }
  return s;
}, tl = ({
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
    const l = x({ v: t }), a = x({ v: r }), c = x({ v: o }), f = a - l * 2, m = c - l * 2;
    (f <= 0 || m <= 0) && new le({
      item: i,
      message: Be("errors.trim.too_much", {
        0: "part",
        1: l,
        z: `${f}x${m}`
      }),
      field: [["l"], ["w"], ["trim"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: n
    });
  } catch {
  }
  return n;
}, il = ({
  item: i,
  index: t,
  min: e = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [], o = Pe(i, "l"), l = Pe(i, "w"), a = Pe(i, "trim");
  if (!o || !l || !a) return r;
  if ((!it(i) || it(i) && !("trimmed" in i && i.trimmed)) && typeof a == "object" && a !== null) {
    for (const f of Object.keys(a))
      ri({
        item: i,
        field: ["trim", f],
        index: t,
        newIssues: r,
        min: e,
        max: s,
        isWarning: n
      });
    if (!r.length)
      try {
        const f = x({ v: o }), m = x({ v: l }), d = (F) => {
          if (F == null) return 0;
          if (typeof F == "number" || typeof F == "string")
            try {
              return x({ v: F }) || 0;
            } catch {
              return 0;
            }
          return 0;
        }, p = {
          x1: d(Pe(a, "x1")),
          x2: d(Pe(a, "x2")),
          y1: d(Pe(a, "y1")),
          y2: d(Pe(a, "y2"))
        }, v = p.x1 + p.x2, S = p.y1 + p.y2;
        v >= f && new le({
          item: i,
          message: Be("errors.trim.too_much", {
            0: `${qe.x1.toUpperCase()} + ${qe.x2.toUpperCase()}`,
            1: qe.l,
            2: f
          }),
          field: [["trim", "x1"], ["trim", "x2"]],
          index: [t],
          type: n ? "warning" : "error",
          issues: r
        }), S >= m && new le({
          item: i,
          message: Be("errors.trim.too_much", {
            0: `${qe.y1.toUpperCase()} + ${qe.y2.toUpperCase()}`,
            1: qe.w,
            2: m
          }),
          field: [["trim", "y1"], ["trim", "y2"]],
          index: [t],
          type: n ? "warning" : "error",
          issues: r
        });
      } catch {
      }
  }
  return r;
}, sl = ({
  item: i,
  inputStockList: t,
  saw: e,
  partTrim: s = 0,
  index: n
}) => {
  var m;
  const r = [], o = e.stockType, l = Pe(i, "q"), a = Pe(i, "l"), c = Pe(i, "w");
  return !l || !a || !c || ("applyPartTrim" in i && typeof i.applyPartTrim == "function" && i.applyPartTrim(s, o), An(i) && ((m = i.issues) != null && m.length)) || qo([i], t, e, n).newIssues.forEach((d) => {
    r.push(d);
  }), r;
}, nl = ({ item: i, index: t }) => {
  const e = Pe(i, "machining");
  e && "validateEverything" in e && e.validateEverything(i, t);
}, ze = {
  customData: el,
  banding: Qo,
  partTrim: tl,
  trim: il,
  x: Uo,
  y: zo,
  l: Vo,
  w: Yo,
  t: Xo,
  q: Ko,
  orientationLock: Zo,
  grain: Jo,
  stockMatch: sl,
  machining: nl
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
const Ft = [null, void 0, "none", ""], at = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: Ft
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: Ft
    },
    roll: {
      guillotine: ["w"],
      efficiency: Ft
    },
    linear: {
      guillotine: Ft,
      efficiency: Ft
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
function rl(i) {
  var t;
  return ((t = at.cutTypes) == null ? void 0 : t[i]) ?? Ft;
}
function ol(i, t) {
  var e, s;
  return ((s = (e = at.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? Ft;
}
function ll(i) {
  var t;
  return ((t = at.cutTypes) == null ? void 0 : t[i]) ?? [];
}
function al(i, t) {
  var e, s;
  return ((s = (e = at.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? [];
}
function is() {
  return at.stockTypes;
}
function Mn(i) {
  return at.stockTypes.includes(i);
}
function Fn(i, t) {
  return rl(i).includes(t);
}
function _n(i, t, e) {
  return ol(i, t).includes(e);
}
function vt(i, t, e, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!Ss(i)) {
    console.error(Be(e, s));
    return;
  }
  new le({
    item: i,
    field: Array.isArray(t) ? t.map((n) => [n]) : [[t]],
    message: Be(e, s),
    shouldTranslate: !1
  });
}
class Ot {
  constructor(t, e) {
    u(this, "bladeWidth");
    u(this, "stockType");
    u(this, "cutType");
    u(this, "cutPreference");
    u(this, "stackHeight");
    u(this, "options");
    u(this, "guillotineOptions");
    u(this, "efficiencyOptions");
    u(this, "issues");
    t = Bt(t), this.issues = [], e = e ?? (t == null ? void 0 : t.stockType) ?? is()[0], ul(this, t, e), this.bladeWidth = x({ v: t == null ? void 0 : t.bladeWidth }) ?? at.defaults.bladeWidth, this.stockType = e ?? (t == null ? void 0 : t.stockType) ?? is()[0], Mn(this.stockType) || (this.stockType = is()[0]), this.cutType = t == null ? void 0 : t.cutType, Fn(this.stockType, this.cutType) || (this.cutType = ll(this.stockType)[0]), this.cutPreference = t == null ? void 0 : t.cutPreference, _n(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = al(this.stockType, this.cutType)[0]), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? at.defaults.stackHeight, this.guillotineOptions = Mi({}, t == null ? void 0 : t.guillotineOptions, at.defaults.guillotine), this.efficiencyOptions = Mi({}, t == null ? void 0 : t.efficiencyOptions, at.defaults.efficiency), this.options = Mi({}, t == null ? void 0 : t.options, at.defaults.options), this.options.minSpacing = x({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = x({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = x({ v: this.options.minSpacingDimension.minSpacing }) ?? 0;
  }
  clone() {
    const t = structuredClone(this);
    return new Ot(t);
  }
  //does not cater for shape dimensions
  get minSpacing() {
    return this.cutType !== "efficiency" ? 0 : this.options.minSpacing;
  }
}
function ul(i, t, e) {
  var s, n, r, o, l, a, c, f, m, d;
  if (i.issues = [], k(t == null ? void 0 : t.bladeWidth) && (t.bladeWidth = typeof t.bladeWidth == "string" ? x({ v: t.bladeWidth }) : t.bladeWidth), ($t(t.bladeWidth) || t.bladeWidth < 0) && vt(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: t.bladeWidth ?? "none" }
  ), !Mn(e)) {
    vt(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: e }
    );
    return;
  }
  t.cutType && !Fn(e, t.cutType) && vt(
    i,
    "cutType",
    "saw.validation.cutType.invalid",
    { cutType: t.cutType, stockType: e }
  ), t.cutType && t.cutPreference && !_n(e, t.cutType, t.cutPreference) && vt(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: t.cutPreference || "none",
      cutType: t.cutType || "none",
      stockType: e
    }
  ), (t == null ? void 0 : t.cutType) === "efficiency" && ((s = t == null ? void 0 : t.options) != null && s.minSpacing && (t.options.minSpacing = typeof t.options.minSpacing == "string" ? x({ v: t.options.minSpacing }) : t.options.minSpacing, (!k(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && vt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    { minSpacing: t.options.minSpacing }
  ), ($t(t.options.minSpacing) || t.options.minSpacing < 0) && vt(
    i,
    "options.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacing: t.options.minSpacing ?? "none" }
  )), (n = t == null ? void 0 : t.options) != null && n.minSpacingDimension && (k((o = (r = t == null ? void 0 : t.options) == null ? void 0 : r.minSpacingDimension) == null ? void 0 : o.dimension) && (t.options.minSpacingDimension.dimension = typeof t.options.minSpacingDimension.dimension == "string" ? x({ v: t.options.minSpacingDimension.dimension }) : t.options.minSpacingDimension.dimension, ($t(t.options.minSpacingDimension.dimension) || t.options.minSpacingDimension.dimension < 0) && vt(
    i,
    "options.minSpacingDimension.dimension",
    "saw.validation.minSpacing.dimension.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.dimension ?? "none" }
  )), (a = (l = t == null ? void 0 : t.options) == null ? void 0 : l.minSpacingDimension) != null && a.minSpacing && (t.options.minSpacingDimension.minSpacing = typeof t.options.minSpacingDimension.minSpacing == "string" ? x({ v: t.options.minSpacingDimension.minSpacing }) : t.options.minSpacingDimension.minSpacing, ($t(t.options.minSpacingDimension.minSpacing) || t.options.minSpacingDimension.minSpacing < 0) && vt(
    i,
    "options.minSpacingDimension.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.minSpacing ?? "none" }
  )), (f = (c = t == null ? void 0 : t.options) == null ? void 0 : c.minSpacingDimension) != null && f.dimension && ((d = (m = t == null ? void 0 : t.options) == null ? void 0 : m.minSpacingDimension) != null && d.minSpacing) && (!k(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && vt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    {
      dimension: t.options.minSpacingDimension.dimension,
      minSpacing: t.options.minSpacingDimension.minSpacing
    }
  )));
}
function Ss(i) {
  return i instanceof Ot;
}
function ls(i, t = !1) {
  var o, l, a, c;
  const e = typeof i.l == "string" ? x({ v: i.l }) : i.l, s = typeof i.w == "string" ? x({ v: i.w }) : i.w;
  if (!t || !Jn(i) || Qn(i) || Gl(i) && !(i != null && i.hasTrim))
    return { l: e, w: s };
  const n = x({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + x({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = x({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + x({ v: ((c = i == null ? void 0 : i.trim) == null ? void 0 : c.y2) ?? 0 });
  return {
    l: e - (typeof n == "string" ? x({ v: n }) : n),
    w: s - (typeof r == "string" ? x({ v: r }) : r)
  };
}
function cl(i, t) {
  var e, s, n, r;
  return Jn(i) && !Qn(i) && (t.l = t.l - (x({ v: ((e = i == null ? void 0 : i.trim) == null ? void 0 : e.x1) ?? 0 }) + x({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), t.w = t.w - (x({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + x({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), t;
}
function ss(i, t, e = !1) {
  let s = {
    l: x({ v: i.l }),
    w: x({ v: i.w })
  };
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return e && (s = cl(i, s)), n === t || ([s.l, s.w] = [s.w, s.l]), s;
}
function qn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function hl(i) {
  qn(i), [i.l, i.w] = [i.w, i.l];
}
function Xi(i, t, e = null, s) {
  var d, p;
  if (!t || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && Ss(s) ? n = s.minSpacing : s && ((d = s == null ? void 0 : s.options) != null && d.minSpacing) ? n = x({ v: s.options.minSpacing }) : Ls(t) && (n = (p = t == null ? void 0 : t.saw) == null ? void 0 : p.minSpacing);
  const r = ls(t, !0), o = ls(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(v, S) {
    return de.equalTo(v, S) || de.lessThanOrEqualTo(v, S - n * 2);
  }
  function a(v) {
    return l(v.l, r.l) && l(v.w, r.w);
  }
  const c = xs(i, t);
  if (i.orientationLock || e !== null) {
    const S = ss(i, e ?? (c === "w" ? 1 : 0), !0);
    return a(S);
  }
  const f = ss(i, 0, !0);
  if (a(f)) return !0;
  const m = ss(i, 1, !0);
  return a(m);
}
function Bn(i) {
  let t = null;
  return Et(i) || Ds(i) ? t = i.direction : (Ze(i) || De(i)) && (t = i.orientationLock), t;
}
function xs(i, t) {
  const e = Bn(i);
  return k(e) ? !t || Et(i) ? e : Ls(t) ? dl(i, t) : e : null;
}
function dl(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!Ls(t)) throw new Error("container is not a container");
  const e = Bn(i);
  if (Et(i)) return e;
  if (!k(e)) return null;
  const s = t.getStock();
  return !s || !k(s == null ? void 0 : s.grain) ? e : e === (s == null ? void 0 : s.grain) ? "l" : "w";
}
function as(i, t = null, e = null) {
  if (!k(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), jn(i) && t || e && !Xi(i, e, t))
    return !1;
  const s = xs(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function us(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), as(i, t, e) ? (i.rot === t || hl(i), !0) : !1;
}
function si(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !Xi(i, e, t) ? !1 : us(i, t, e);
}
function fl(i, t) {
  if (!t)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const e = xs(i, t);
  return e === "l" ? si(i, 0) : e === "w" ? si(i, 1) : !1;
}
function pl(i) {
  return i.orientationLock === "l" ? si(i, 0) : i.orientationLock === "w" ? si(i, 1) : !1;
}
function jn(i) {
  qn(i);
  const t = ls(i);
  return de.equalTo(t.l, t.w);
}
function gl(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function mi(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function ml(i) {
  return "y";
}
function vl(i, t) {
  const e = "l", s = ml();
  if (!(i != null && i.length)) return null;
  const n = i.reduce((o, l) => o[t] + o[e] > l[t] + l[e] ? o : l);
  return i.filter((o) => o[t] === n[t] && o[e] === n[e]).sort((o, l) => o[s] - l[s])[0];
}
class ei {
  constructor(t) {
    u(this, "x1");
    u(this, "x2");
    u(this, "y1");
    u(this, "y2");
    u(this, "dimension");
    u(this, "direction");
    u(this, "shapeCollisions");
    u(this, "origin");
    u(this, "type");
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = yl(this), this.direction = bl(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
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
  return new ei({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function yl(i) {
  return typeof i > "u" || !de.isNumber(i.x1) || !de.isNumber(i.x2) || !de.isNumber(i.y1) || !de.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function bl(i) {
  return typeof i > "u" || !de.isNumber(i.x1) || !de.isNumber(i.x2) || !de.isNumber(i.y1) || !de.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function wl(i, t) {
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
const Xs = {
  runTests: !1
};
try {
  typeof ts < "u" && ts && (ts.showDiff = !0);
} catch (i) {
  console.warn("Error accessing chaiConfig, skipping configuration:", i);
}
xn("tests");
xn("timers");
let ii;
if (typeof Gs == "function")
  ii = Gs;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const i = new Proxy({}, { get: () => () => i });
  ii = () => i;
}
function Hn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function Gn(i = [], t = null) {
  i != null && i.length && Hn() && Xs && Xs.runTests;
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
const Sl = Je("errors");
Je("allStock");
Sl.color = 1;
function xl(i) {
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
class Ki extends ei {
  //used to mark for removal
  constructor(e) {
    var s, n, r;
    e.x2 < e.x1 && ([e.x1, e.x2] = [e.x2, e.x1]), e.y2 < e.y1 && ([e.y1, e.y2] = [e.y2, e.y1]);
    super(e);
    u(this, "stock");
    u(this, "stockId");
    u(this, "isGuillotine");
    u(this, "guillotineData");
    u(this, "ptxData");
    u(this, "type", null);
    u(this, "isHead");
    u(this, "isTrim");
    u(this, "beamTrimX1");
    u(this, "beamTrimY1");
    // isPtxDummyCut: boolean
    u(this, "distances");
    u(this, "remove");
    k(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Nt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.isGuillotine = e.isGuillotine, this.guillotineData = k(e.guillotineData) ? e.guillotineData : {}, this.ptxData = k(e.ptxData) ? e.ptxData : {}, this.isHead = k(e.isHead) ? e.isHead : !1, this.isTrim = k(e.isTrim) ? e.isTrim : !1, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1, this.distances = k(e.distances) ? e.distances : {};
  }
  //compress for saving / transfer
  compress() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const e = structuredClone(this);
    return new Ki(e);
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
        return de.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return de.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return de.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return de.lessThan(
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
  //[] do on init
  getLength() {
    return xl(this);
  }
  /* get length()
  {
  	return getCutLength( this )
  } */
  //[] do on init
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const kl = {
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
}, Oi = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Ai = {
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
  constructor(t, e, s = null) {
    u(this, "x");
    u(this, "y");
    u(this, "z");
    u(this, "a");
    //shape id
    u(this, "b");
    //shape id
    u(this, "direction");
    //direction of the raay
    u(this, "type");
    //[] need to type
    u(this, "corner");
    //originating corner of this point
    u(this, "grid");
    //if a grid point, which grid position
    u(this, "stockID");
    u(this, "raycast");
    u(this, "collision");
    u(this, "tooClose");
    u(this, "adjustedForMinSpacing");
    this.x = parseFloat(t), this.y = parseFloat(e), this.z = parseFloat(s) || 0, this.validate();
  }
  /**
   * clone with the ability to change the coordinates
   * NOTE: looks odd for performance reasons
   */
  clone(t = null, e = null) {
    const s = new Fe(t ?? this.x, e ?? this.y);
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
      const s = kl[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Oi[this.corner] && (this.grid ? Oi[this.corner][this.grid] && Oi[this.corner][this.grid].forEach((s) => e.add(s)) : Oi[this.corner].default.forEach((s) => e.add(s))), e) : (Ai[this.corner] && (this.grid ? Ai[this.corner][this.grid] && Ai[this.corner][this.grid].forEach((s) => e.add(s)) : Ai[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class Gt {
  constructor(t = []) {
    u(this, "points", /* @__PURE__ */ new Map());
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
  const r = Cl[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const Cl = {
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
function Il(i, t, e) {
  var o, l, a, c, f, m;
  const s = new Gt(), n = e.toArray().sort(Wn), r = t.getBladeWidth();
  if (n.forEach((d) => {
    const p = d.corner, v = d.type;
    if (!r)
      s.addPoint(d);
    else
      switch (p) {
        case "topRight":
          s.addPoint(
            me("top", d, r, p),
            v
          ), s.addPoint(
            me("right", d, r, p),
            v
          );
          break;
        case "topLeft":
          s.addPoint(
            me("top", d, r, p),
            v
          ), s.addPoint(
            me("left", d, r, p),
            v
          );
          break;
        case "bottomRight":
          s.addPoint(
            me("bottom", d, r, p),
            v
          ), s.addPoint(
            me("right", d, r, p),
            v
          );
          break;
        case "bottomLeft":
          s.addPoint(
            me("bottom", d, r, p),
            v
          ), s.addPoint(
            me("left", d, r, p),
            v
          );
          break;
      }
    const S = s.toArray();
    if (r)
      for (let F = S.length; F--; ) {
        const G = S[F];
        e.contains(G) && s.deletePoint(G);
      }
    else
      for (let F = S.length; F--; ) {
        const G = S[F];
        for (let P = i.length; P--; ) {
          const J = i[P];
          if (G.x === J.x && G.y === J.y) {
            s.deletePoint(G);
            break;
          }
        }
      }
  }), r) {
    const d = /* @__PURE__ */ new Set();
    let p, v, S, F;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (p = t.x, v = t.y, S = t.x + t.l, F = t.y + t.w) : (p = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), v = t.y + ((c = t == null ? void 0 : t.trim) == null ? void 0 : c.y1), S = t.x + t.l - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.x2), F = t.y + t.w - ((m = t == null ? void 0 : t.trim) == null ? void 0 : m.y2));
    let G = s.toArray();
    for (let P = G.length; P--; ) {
      const J = G[P];
      (de.lessThan(J.x, p) || de.lessThan(J.y, v) || de.greaterThan(J.x, S) || de.greaterThan(J.y, F)) && G.splice(P, 1);
    }
    s.clear(), s.addPoints(G), d.clear(), G = s.toArray();
    for (let P = G.length; P--; ) {
      const J = G[P];
      for (let X = i.length; X--; ) {
        const he = i[X];
        if (J.collidesWith(he)) {
          s.deletePoint(J);
          break;
        }
      }
    }
  }
  return s;
}
function Pl(i, t, e) {
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
  const l = new Gt();
  for (const a of s)
    a.raycast = !0, l.addPoints(zn(i, a, e).toArray());
  return Vn(i, e, l), l;
}
function Dl(i, t) {
  const e = new Gt();
  return i.sort(Wn), i.forEach((s) => {
    Et(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function Ll(i = [], t, e) {
  const s = Dl(
    i === null ? t : i,
    e
  );
  return Il(
    t,
    e,
    s
  );
}
function Wn(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function Nn(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function $l(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new Gt();
  const s = Un(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const c = Object.values(a.rays);
      for (const f of c)
        Tl(
          f,
          a.shape,
          l,
          e
        );
    }
  const r = i.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = t.reduce((l, a) => (r === "tb" ? l.x + l.l > a.x + a.l : l.y + l.w > a.y + a.w) ? l : a);
  return s.filter(({ shape: l }) => l.id === o.id).forEach(({ shape: l, rays: a }) => {
    const c = Object.values(a);
    for (const f of c) {
      const m = new Fe(f.x2, f.y2);
      r === f.direction && (Nn(m, l, null, f.direction, "edge"), e.addPoint(m));
    }
  }), e = Ol(e), e;
}
function Un(i, t) {
  return i.map((e) => {
    const s = wl(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function Tl(i, t, e, s) {
  switch (i.direction) {
    case "rl":
      Ei(
        i,
        t,
        e,
        s,
        e.x + e.l
      );
      break;
    case "lr":
      Ei(
        i,
        t,
        e,
        s,
        e.x
      );
      break;
    case "tb":
      Ei(
        i,
        t,
        e,
        s,
        e.y + e.w
      );
      break;
    case "bt":
      Ei(
        i,
        t,
        e,
        s,
        e.y
      );
      break;
  }
}
function Ei(i, t, e, s, n) {
  const r = i.dimension === "w", o = r ? "y" : "x", l = r ? "x" : "y", a = r ? "l" : "w";
  if (i[`${l}1`] >= e[l] && i[`${l}1`] <= e[l] + e[a]) {
    const c = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, f = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, m = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, d = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (c || f || m || d) {
      const v = r ? i[`${l}1`] : n, S = r ? n : i[`${l}1`], F = new Fe(v, S), G = i.origin;
      Nn(F, t, e, i.direction, "shape", G), s.addPoint(F);
    }
  }
}
function Ol(i) {
  const t = new Gt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = Al(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function Al(i, t) {
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
function zn(i, t, e) {
  const s = new Gt(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = El(t, i, e), r) {
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
  return Vn(i, e, s), s;
}
function El(i, t, e) {
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
function Vn(i, t, e) {
  var a, c, f, m, d, p;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((c = t == null ? void 0 : t.constructor) == null ? void 0 : c.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (f = t == null ? void 0 : t.trim) == null ? void 0 : f.x1, n = (m = t == null ? void 0 : t.trim) == null ? void 0 : m.y1, r = t.l - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.x2) - i.l, o = t.w - ((p = t == null ? void 0 : t.trim) == null ? void 0 : p.y2) - i.w);
  const l = e.toArray();
  for (let v = l.length; v--; ) {
    const S = l[v];
    (de.lessThan(S.x, s) || de.lessThan(S.y, n) || de.greaterThan(S.x, r) || de.greaterThan(S.y, o) || S.x < 0 || S.y < 0) && e.deletePoint(S);
  }
}
function Rl(i, t, e) {
  if (!Si.includes(t) || !i.machining.corners) return 0;
  const s = Yn(i, t);
  return e * s;
}
function Yn(i, t) {
  if (!Si.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Ui(i, t, e, s) {
  Object.keys(t).forEach((n) => {
    var r, o;
    n in i && ((r = t[n]) != null && r.min && x({ v: i[n] }) < x({ v: t[n].min }) ? e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${t[n].min}.`,
      fields: [n]
    }) : (o = t[n]) != null && o.max && x({ v: i[n] }) > x({ v: t[n].max }) && e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${t[n].max}.`,
      fields: [n]
    }));
  });
}
class cs {
  constructor({ x: t, y: e, diameter: s, depth: n = 0, face: r = 0, type: o = null }) {
    u(this, "x");
    u(this, "y");
    u(this, "diameter");
    u(this, "depth");
    u(this, "face");
    u(this, "valid");
    u(this, "type");
    this.x = t, this.y = e, this.diameter = s, this.depth = n, this.face = r, this.type = o;
  }
  getFace() {
    return bt[this.face];
  }
  getXDrawPosition(t) {
    let e = 0;
    const s = x({ v: this.x });
    return t.rot ? e = t.l - x({ v: this.y }) + ("x" in t ? x({ v: t.x }) : 0) : e = s + ("x" in t ? x({ v: t.x }) : 0), e;
  }
  getYDrawPosition(t, e, s) {
    let n = t.rot ? x({ v: this.x }) : x({ v: this.y });
    return n += "y" in t ? x({ v: t.y }) : 0, e === 1 && (s ? n = x({ v: s.w }) - n : n = x({ v: t.w }) - n), n;
  }
  shouldShow(t, e) {
    return this.face === e || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || x({ v: this.depth }) >= x({ v: t.t });
  }
  getDistanceToEdge(t) {
    const e = this.x, s = this.y, n = this.diameter / 2, r = x({ v: t.getLongSide() }), o = x({ v: t.getShortSide() }), l = t.machining.corners.map((v) => v.type ? v.size : 0), a = [
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
    ], c = t.machining.corners.map((v, S) => {
      const F = S === 0 || S === 3, G = S < 2, P = F ? e : r - e;
      let J = null;
      this.face === 0 ? J = G ? s : o - s : this.face === 1 && (J = G ? o - s : s);
      const X = Math.sqrt(P * P + J * J);
      return {
        c: v,
        distance: X
      };
    }), f = Math.min(...a.map((v) => v.distance)), m = Math.min(...c.map((v) => v.distance)), d = c.findIndex((v) => v.distance === m), p = t.machining.corners[d];
    if (p && p.type === "radius") {
      let v = d === 0 || d === 3 ? 0 : r, S = d < 2 ? 0 : o;
      const F = d < 2;
      v += d === 0 || d === 3 ? l[d] : -l[d], S += F ? l[d] : -l[d];
      const P = e - v, J = d < 2;
      let X;
      this.face === 0 ? X = J ? s : o - s : this.face === 1 && (X = J ? o - s : s);
      const he = X - S, re = Math.sqrt(P * P + he * he), C = l[d] - re - n;
      let w = !1;
      return p.index === 0 ? w = e <= v && X <= S : p.index === 1 ? w = e >= v && X <= S : p.index === 2 ? w = e >= v && X >= S : p.index === 3 && (w = e <= v && X >= S), w && C < f ? C : f;
    } else if (p && p.type === "bevel") {
      let v, S, F;
      p.index === 0 ? (v = 1, S = 1, F = -p.size) : p.index === 1 ? (v = 1, S = -1, F = -r + p.size) : p.index === 2 ? (v = 1, S = 1, F = -r - o + p.size) : p.index === 3 && (v = -1, S = 1, F = -o + p.size);
      const G = p.index === 0 ? 1 : -1, P = (v * e + S * s + F) / Math.sqrt(v * v + S * S) * G - n;
      return P < f ? P : f;
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
    return x({ v: this.diameter }) <= 0 && n.push({
      index: e,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), x({ v: this.depth }) < 0 && n.push({
      index: e,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && x({ v: t.t }) > 0 && x({ v: this.depth }) > x({ v: t.t }) && n.push({
      index: e,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && x({ v: this.depth }) > 0 && n.push({
      index: e,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && n.push({
      index: e,
      message: "Outside of part."
    }), s && Ui(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Ks {
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
    hingeLength: c = 0,
    minimumHoleDistance: f = 0,
    positionLimit: m = 0
  }, d) {
    u(this, "position");
    u(this, "edge");
    u(this, "face");
    u(this, "numHoles");
    u(this, "holes", []);
    u(this, "diameter");
    u(this, "depth");
    u(this, "distanceFromEdge");
    //from edge to center of hole
    u(this, "outerSpacing");
    //from edge to center of hole
    u(this, "hingeLength");
    u(this, "minimumHoleDistance");
    u(this, "positionLimit");
    u(this, "valid");
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = c, this.minimumHoleDistance = f, this.positionLimit = m, d && this.createHoles(d);
  }
  getFace() {
    return bt[this.face];
  }
  getHoleSpacing() {
    const t = x({ v: this.hingeLength }) - x({ v: this.outerSpacing }) * 2, e = this.numHoles - 1;
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
        s = t.getLongSide() - x({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = x({ v: this.position }) + x({ v: this.outerSpacing }) + n * e;
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
        s = x({ v: this.position }) + x({ v: this.outerSpacing }) + n * e;
        break;
      case "y1":
        s = x({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = t.getShortSide() - x({ v: this.distanceFromEdge });
        break;
    }
    return s;
  }
  createHoles(t) {
    this.holes = [];
    for (let e = 0; e < this.numHoles; e++) {
      const s = new cs({
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
    }), s && Ui(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Zs {
  constructor({ type: t = "radius", size: e, index: s }) {
    u(this, "type");
    u(this, "size");
    u(this, "index");
    u(this, "valid");
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
    return this.type && x({ v: this.size }) <= 0 && n.push({
      index: e,
      message: "Corner size cannot be zero or negative"
    }), this.type && x({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
let Xn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    u(this, "holes", []);
    u(this, "corners", []);
    u(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Zs(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Zs({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new cs(n))), e && (this.hingeHoles = e.map((n) => new Ks(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && (console.log(s), new le({
      item: t,
      index: e,
      listId: De(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    })), n.length && new le({
      item: t,
      index: e,
      listId: De(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new le({
      item: t,
      index: e,
      listId: De(t) ? [t.listId] : null,
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
    const o = new cs({
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
    minimumHoleDistance: c = 0,
    hingeLength: f = 0
  }) {
    const m = new Ks({
      numHoles: t,
      position: e,
      //from left or bottom
      edge: r,
      face: o,
      diameter: s,
      depth: n,
      distanceFromEdge: l,
      outerSpacing: a,
      minimumHoleDistance: c,
      hingeLength: f
    });
    return this.hingeHoles.push(m), m;
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
function ks(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((c) => c.type && c.size) : !1;
}
function Ml(i) {
  var t, e, s, n;
  if ("machining" in i) {
    if (!ks(i)) {
      i.machining = null;
      return;
    }
    (t = i.machining.holes) != null && t.length || (i.machining.holes = null), (e = i.machining.hingeHoles) != null && e.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class Cs {
  constructor(t = null) {
    u(this, "id");
    //api
    u(this, "listId");
    u(this, "shapeListIds", []);
    u(this, "shapes");
    u(this, "direction");
    u(this, "q");
    u(this, "duplicate", !1);
    u(this, "issues", []);
    u(this, "stockMatch");
    var e;
    this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = t == null ? void 0 : t.id, this.shapes = k(t == null ? void 0 : t.shapes) ? t.shapes.map((s) => s.toString()) : [], this.shapeListIds = k(t == null ? void 0 : t.shapeListIds) ? t.shapeListIds : [], this.direction = k(t == null ? void 0 : t.direction) ? t.direction : "l", this.q = k(t == null ? void 0 : t.q) ? t.q : 1, k(t == null ? void 0 : t.shapeList) && ((e = t.shapeList) != null && e.length) && this.validate(t.shapeList);
  }
  validate(t = []) {
    var o, l;
    if (this.issues = [], !(t != null && t.length))
      throw new Error("shapeList is required to validate user group");
    const e = this.findShapes(t);
    if (!e.length)
      return new le({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = e[0];
    if (Ze(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new le({
          item: this,
          message: "Must have 2 or more parts."
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new le({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    if (e.forEach((a, c) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new le({
        item: this,
        field: [["orientationLock"]],
        message: `Part in position ${c + 1} must have orientation lock set to be part of a group.`
      });
    }), this.issues.length) return this.issues;
    const n = mi(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, c) => {
      if (a.id === s.id) return;
      const f = a.getTrimmedDimensions(!0)[n];
      de.equalTo(f, r) || new le({
        item: this,
        message: `Part in position ${c + 1} final ${n === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${f}. Check the dimensions, trim & orientation lock.`
      });
    }), this.issues;
  }
  findShapes(t = []) {
    var s, n;
    if (!t.length) return [];
    let e = [];
    if (De(t[0])) {
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
    r.forEach((f) => {
      const m = s.findIndex((d) => !d.inUserGroup && d.parentID === f.parentID);
      if (m === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(m, 1), pl(f), f.inUserGroup = !0;
    });
    let l = 0, a = 0;
    this.direction === "l" ? a = o.w : l = o.l;
    let c;
    try {
      const f = {
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
      c = new pt(f);
    } catch (f) {
      return console.error(f), !1;
    }
    return c.parentID = `ug${t}`, n && c.updateShapeSpacing(n), c;
  }
}
function $h(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new Cs(s));
  return t.length && Fl(e, t), e;
}
function Fl(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function _l(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function ql(i, t, e = !0) {
  const s = _l(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((c) => c.listId === r);
    l < 0 && new le({
      message: "Cannot find at least one part in the list.",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new le({
      message: `Not enough of part ${a != null && a.name ? a.name : l + 1} to form groups - ${o} needed, ${a.q ?? 0} found.`,
      issues: n
    });
  }
  return e && i.forEach((r) => {
    const o = r.validate(t);
    o != null && o.length && n.push(...o);
  }), n;
}
const wt = ["y1", "y2", "x1", "x2"], Si = ["a", "b", "c", "d"], Tt = [...wt, ...Si], bt = ["a", "b"];
function Kn(i) {
  return Si.includes(i);
}
function Bl(i) {
  return Tt.includes(i);
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
function jl(i) {
  return wt.map((t) => i[t] ?? null);
}
function Bt(i) {
  if (!k(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function Th({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    if (it(r)) return r;
    (s || r.preventAutoRotation) && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new Nt(r, e);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(pi.ID);
}
function Oh({
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
    if (Hl(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new At(l));
      try {
        n = new pt(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      n = new At(s);
    if (n.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${n.issues.map((l) => l.message).join(", ")}`);
    const r = t.find((l) => {
      var a;
      return l.id === (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId));
    });
    return n.stock = r, n;
  }).sort(pi.ID);
}
function Ah({
  cutList: i,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = new Ki(e), n = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return s.stock = n, s;
  });
}
function Eh({
  segmentList: i,
  stockList: t
}) {
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return e.stock = s, new Ps(e);
  });
}
function zi(i, t, e = "decimal", s = !1) {
  return k(i == null ? void 0 : i[t]) ? x({ v: i[t], nf: e, pl: s }) : null;
}
class Is {
  constructor(t, e = "decimal", s = !1) {
    u(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    u(this, "warningKeys", ["q"]);
    u(this, "issueKeys", ["l", "w", "t", "trim"]);
    u(this, "readonly");
    u(this, "id");
    u(this, "listId");
    u(this, "index", null);
    //used for issue indexing
    u(this, "l");
    u(this, "w");
    u(this, "t");
    u(this, "q");
    u(this, "name");
    u(this, "material");
    u(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    u(this, "cost", null);
    u(this, "grain", "");
    u(this, "selected", !1);
    //used for multiple editing
    u(this, "multiEdit", !1);
    //is this the multi-select stock
    // type: StockType = null;
    u(this, "autoAdd", !1);
    u(this, "used");
    u(this, "saw");
    u(this, "preventGrainRotation");
    u(this, "allowExactFitShapes");
    u(this, "issues", []);
    u(this, "warnings", []);
    u(this, "notes", "");
    var o, l, a, c;
    t = Bt(t), this.readonly = t.readonly, this.id = t.id, this.index = t == null ? void 0 : t.index, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + fs(), ["l", "w", "t"].forEach((f) => this[f] = zi(t, f, e, s)), this.q = k(t == null ? void 0 : t.q) ? $t(qi(t.q)) ? null : qi(t.q) : null, this.autoAdd = k(t.autoAdd) ? t.autoAdd : !1, this.name = k(t.name) && ((o = t == null ? void 0 : t.name) != null && o.length) ? (l = ws(t == null ? void 0 : t.name)) == null ? void 0 : l.toUpperCase() : null, this.material = k(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((f) => {
      this.trim[f] = zi(t.trim, f, e, s);
    }), this.cost = k(t.cost) ? typeof t.cost == "number" ? t.cost : parseFloat(t.cost) : null, t.grain = (a = t == null ? void 0 : t.grain) == null ? void 0 : a.toLowerCase(), (t == null ? void 0 : t.grain) === " " && (t.grain = ""), this.grain = t.grain, this.grain = k(t.grain) ? t.grain.toLowerCase() : "", this.multiEdit = t.multiEdit, this.allowExactFitShapes = k(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.preventGrainRotation = !0, typeof ((c = t == null ? void 0 : t.notes) == null ? void 0 : c.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "";
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
    const t = this.l > this.w ? this.l : this.w, e = this.l < this.w ? this.l : this.w, s = { l: x({ v: t }), w: x({ v: e }) };
    return {
      name: this.name,
      id: null,
      listId: this.listId,
      l: s.l - (x({ v: this.trim.x1 }) + x({ v: this.trim.x2 })),
      w: s.w - (x({ v: this.trim.y1 }) + x({ v: this.trim.y2 }))
    };
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  isSquare() {
    jn(this);
  }
  validate(t, e = null) {
    return this.issues = [], ["l", "w", "t", "grain"].forEach((s) => ze[s]({ item: this, saw: t, index: e ?? this.index })), ze.trim({ item: this, index: e }), ["q"].forEach((s) => ze[s]({ item: this, index: e ?? this.index, isWarning: !0 })), this.issues = this.issues.filter((s) => s), this.issues;
  }
}
class vi {
  constructor(t, e = "decimal", s = !1) {
    u(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    u(this, "readonly");
    u(this, "id");
    u(this, "index", null);
    //used for issue indexing
    u(this, "listId");
    // numberFormat: NumberFormat = 'decimal';
    u(this, "l");
    u(this, "w");
    u(this, "t");
    u(this, "q", 1);
    u(this, "name", "");
    u(this, "material", "");
    u(this, "cost");
    u(this, "orientationLock");
    u(this, "selectedMaterial");
    u(this, "selected", !1);
    //used for multiple editing
    u(this, "multiEdit", !1);
    u(this, "issues", []);
    u(this, "warnings", []);
    u(this, "notes", "");
    u(this, "stockLock");
    u(this, "stockMatch");
    u(this, "customData");
    u(this, "upDirection", null);
    //objects
    u(this, "machining");
    u(this, "trim", Object.fromEntries(
      wt.map((t) => [t, 0])
    ));
    u(this, "banding", Object.fromEntries(
      Tt.map((t) => [t, !1])
    ));
    u(this, "bandingOptions", Object.fromEntries([
      ...Tt,
      "all"
    ].map((t) => [t, {}])));
    u(this, "finish", Object.fromEntries(
      bt.map((t) => [t, ""])
    ));
    u(this, "finishOptions", Object.fromEntries(
      bt.map((t) => [t, {}])
    ));
    /**
     * to align with Shape
     * @remarks input shapes are always 0
     */
    u(this, "rot", 0);
    var r, o, l, a, c, f, m;
    t = t = Bt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + fs(), this.index = t == null ? void 0 : t.index, ["l", "w", "t"].forEach((d) => {
      this[d] = zi(t, d, e, s);
    }), this.q = k(t == null ? void 0 : t.q) ? $t(qi(t.q)) ? null : qi(t.q) : null, this.name = k(t.name) && ((r = t == null ? void 0 : t.name) != null && r.length) ? (o = ws(t == null ? void 0 : t.name)) == null ? void 0 : o.toUpperCase() : null, this.material = k(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, typeof ((l = t == null ? void 0 : t.notes) == null ? void 0 : l.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [], this.upDirection = (t == null ? void 0 : t.upDirection) ?? null;
    for (const d of Object.keys(this.trim))
      this.trim[d] = zi(t.trim, d, e, s);
    for (const d of Object.keys(this.banding))
      this.banding[d] = k((a = t == null ? void 0 : t.banding) == null ? void 0 : a[d]) ? t.banding[d] : !1;
    for (const d of Object.keys(this.bandingOptions))
      this.bandingOptions[d] = k((c = t == null ? void 0 : t.bandingOptions) == null ? void 0 : c[d]) ? t.bandingOptions[d] : {};
    for (const d of Object.keys(this.finish))
      this.finish[d] = k((f = t == null ? void 0 : t.finish) == null ? void 0 : f[d]) ? t.finish[d] : "";
    for (const d of Object.keys(this.finishOptions))
      this.finishOptions[d] = k((m = t == null ? void 0 : t.finishOptions) == null ? void 0 : m[d]) ? t.finishOptions[d] : {};
    this.orientationLock = k(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new Xn(t.machining ?? {
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
  getTrimmedDimensions(t = !1) {
    let e = { l: x({ v: this.l }), w: x({ v: this.w }) };
    return t && (e = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: e.l - (x({ v: this.trim.x1 }) + x({ v: this.trim.x2 })),
      w: e.w - (x({ v: this.trim.y1 }) + x({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, e) {
    if (!this.readonly)
      if (t = x({ v: t }), this.trim) {
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
    if (this.issues = [], ["l", "w", "t"].forEach((o) => ze[o]({ item: this, index: e ?? this.index, saw: r })), s = x({ v: s }), ze.partTrim({ item: this, partTrim: s, index: e ?? this.index }), ze.trim({ item: this, index: e ?? this.index }), ze.machining({ item: this, index: e ?? this.index }), ["q"].forEach((o) => {
      ze[o]({ item: this, index: e ?? this.index, isWarning: !0 });
    }), t.length && !n) {
      const o = new Ot(r);
      ze.stockMatch({ item: this, inputStockList: t, saw: o, partTrim: s, index: e ?? this.index, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Wt {
  constructor(t) {
    u(this, "id");
    u(this, "index", null);
    u(this, "parentID");
    u(this, "name");
    u(this, "x");
    u(this, "y");
    u(this, "l");
    u(this, "w");
    u(this, "t");
    u(this, "q");
    u(this, "material");
    u(this, "grain");
    u(this, "orientationLock");
    u(this, "duplicate");
    u(this, "trimmed");
    u(this, "preventAutoRotation");
    u(this, "preventGrainRotation");
    u(this, "numberFormat");
    u(this, "issues", []);
    u(this, "warnings", []);
    u(this, "stock");
    u(this, "stockId");
    //used when object is compressed
    u(this, "cost");
    u(this, "offcut");
    u(this, "notes");
    //for user notes
    u(this, "area");
    u(this, "identicalTo");
    u(this, "hasTrim");
    u(this, "infiniteLength");
    u(this, "proximity");
    //objects
    u(this, "_trim", Object.fromEntries(
      wt.map((t) => [t, 0])
    ));
    u(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    this.issues = [];
    const e = [], s = ["x", "y", "t", "w"];
    t != null && t.infiniteLength || s.push("l"), s.forEach((n) => e.push(...ze[n]({ item: t, index: this.index }))), this.issues.push(...ze.customData({ item: t, index: this.index })), this.issues.push(...e.filter((n) => n));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = k(t.id) ? t.id.toString() : this.id || null, this.setParentID(), k(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = k(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = mo(ws(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, k(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = k(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = k(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && k(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.area = this.getArea(), this.offcut = k(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
        rectangle: null,
        distance: null
      }, this.infiniteLength = k(t == null ? void 0 : t.infiniteLength) ? t.infiniteLength : !1;
      try {
        this.trim = (t == null ? void 0 : t.trim) || (t == null ? void 0 : t._trim);
      } catch (l) {
        if ((o = l == null ? void 0 : l.cause) != null && o.issues) this.issues.push(...l.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(l)}`);
      }
      this.trimmed = k(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.hasTrim = [this.trim.x1, this.trim.x2, this.trim.y1, this.trim.y2].some((l) => typeof l == "number" && l !== 0);
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
      if (!k(a))
        return this[l.key] = this[l.key] || l.default;
      typeof a == "string" && (a = x({ v: a })), this[l.key] = a;
    }), !(t != null && t.infiniteLength) && !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = mi(this.grain))), k(t == null ? void 0 : t.stock) && (it(t.stock) ? this.stock = t.stock : this.stock = new Nt(t.stock), this.stockId = this.stock.id), this.index = t.index;
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      wt.map((e) => [e, 0])
    ), !!ni(t, !0))
      for (const e of wt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = x({ v: t[e] });
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
        return new ei({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new ei({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new ei({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new ei({
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
    const s = new Fe(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Fe(this.x, this.y + this.w);
    if (n.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !e)
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !$t(parseFloat(String(r)))).length && (k(this.l) && (this.l -= (k((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (k((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new le({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), k(this.w) && (this.w -= (k((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (k((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new le({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
    var c;
    if (this.constructor !== t.constructor || this.t !== t.t || this.orientationLock !== t.orientationLock || this.material !== t.material)
      return !1;
    if (Ze(this) && ((c = this.identicalTo) != null && c.length) && (this.parentID === t.parentID || this.identicalTo.includes(t.parentID)))
      return !0;
    if (Et(this)) {
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
    return Nl(this);
  }
  isStock() {
    return it(this);
  }
  isGroup() {
    return Et(this);
  }
  isUserGroup() {
    return Ds(this);
  }
}
class Zi extends Wt {
  //used by evo
  constructor(e, s) {
    var n, r;
    super(e);
    // type: StockType;
    u(this, "shapes", []);
    u(this, "saw");
    u(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) || new le({ item: this, field: [["type"]], message: `Container type ${((r = e == null ? void 0 : e.saw) == null ? void 0 : r.stockType) ?? "N/A"} is not valid`, shouldTranslate: !1 }), this.setSaw(e, s), this.cutType) {
      case "beam":
        (!k(this.t) || this.t <= 0) && new le({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e, s) {
    var n, r, o, l;
    if (!(!e && !s)) {
      if (!s)
        if (k(e == null ? void 0 : e.saw)) {
          if (!((r = e == null ? void 0 : e.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: c } = os(e.saw.cutPreference);
            e.saw.cutType = a, e.saw.cutPreference = c;
          }
        } else {
          e.saw = {};
          const { cutType: a, cutPreference: c } = os(e.cutPreference);
          e.saw.cutType = a, e.saw.cutPreference = c, k(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), k((n = e == null ? void 0 : e.blade) == null ? void 0 : n.width) && (e.saw.bladeWidth = e.blade.width), k(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), k(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), k(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
        }
      try {
        const a = s ?? (e == null ? void 0 : e.saw);
        a && (Ss(a) ? this.saw = a : this.saw = new Ot(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
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
    return $t(e) ? 0 : e;
  }
  getStock() {
    return it(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Nt extends Zi {
  constructor(e, s) {
    var n;
    e = Bt(e), e.preventAutoRotation = e.preventAutoRotation || ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
    super(e, s);
    u(this, "_id");
    //used for mongo
    u(this, "autoAdd");
    u(this, "allowExactFitShapes");
    u(this, "analysis");
    u(this, "tidy");
    u(this, "used");
    u(this, "stack");
    u(this, "winningStrategy");
    //used for reporting
    u(this, "unusable");
    //used by stock matching
    u(this, "duplicatePattern");
    u(this, "score");
    u(this, "rootSegment");
    delete this.stock, this._id = e == null ? void 0 : e._id, this.autoAdd = k(e == null ? void 0 : e.autoAdd) ? e.autoAdd : !1, this.allowExactFitShapes = k(e == null ? void 0 : e.allowExactFitShapes) ? e.allowExactFitShapes : !1, this.analysis = k(e.analysis) ? e.analysis : null, this.tidy = k(e == null ? void 0 : e.tidy) ? e.tidy : !1, this.algoBenchmark = null, this.used = k(e == null ? void 0 : e.used) ? e.used : !1, this.stack = k(e == null ? void 0 : e.stack) ? e.stack : 1, this.duplicatePattern = (e == null ? void 0 : e.duplicatePattern) ?? null, this.initStock(e);
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
    e.autoAdd || ["q"].forEach((n) => s.push(...ze[n]({ item: e, index: e == null ? void 0 : e.index }))), ["grain"].forEach((n) => s.push(...ze[n]({ item: e, index: e == null ? void 0 : e.index }))), this.issues.push(...s.filter((n) => n));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = it(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
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
    return it(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Nt(r);
  }
  getCroppedLength(e = [], s = 0) {
    if (!(e != null && e.length)) return;
    const n = vl(e.filter((o) => o.added && o.stock.id === this.id), "x"), r = n.x + n.l;
    if (r > this.l) throw new Error("Furthest shape position exceeds stock length");
    return de.equalTo(r, this.l) ? r : r + s;
  }
}
class Zn extends Wt {
  constructor(e) {
    super(e);
    u(this, "addToInventory");
    //for front end selection
    u(this, "added");
    //for adding to inputStock
    u(this, "placementOrder");
    u(this, "flex");
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
function Rh({
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
class At extends Wt {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(e) {
    e = Bt(e);
    super(e);
    u(this, "added");
    u(this, "guillotineData");
    u(this, "stockLock");
    u(this, "score");
    u(this, "bestScore");
    u(this, "placementOrder");
    //groups
    u(this, "groupPlacementOrder");
    u(this, "group");
    u(this, "groupID");
    u(this, "inGroup");
    //is the shape currently part of at least one group
    u(this, "inUserGroup");
    //is the shape currently part of a user group`
    u(this, "addedAsGroup");
    u(this, "isFirstShape");
    u(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    u(this, "patternMatch");
    //used for stack detection
    u(this, "stockMatch");
    u(this, "minSpacing");
    u(this, "priority");
    u(this, "weighting", {});
    //objects
    u(this, "machining");
    u(this, "fitsStock");
    u(this, "upDirection");
    u(this, "_banding", Object.fromEntries(
      Tt.map((e) => [e, !1])
    ));
    u(this, "_finish", Object.fromEntries(
      bt.map((e) => [e, ""])
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
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = k(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, k(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = k(e == null ? void 0 : e.machining) ? new Xn(e.machining) : null, this.fitsStock = k(e == null ? void 0 : e.fitsStock) ? e.fitsStock : null, this.upDirection = k(e == null ? void 0 : e.upDirection) ? e.upDirection : null), this.added = k(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = k(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = k(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = k(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = k(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = k(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = k(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = k(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = k(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
  }
  initGuillotineData(e) {
    var s, n, r, o, l, a, c, f;
    this.guillotineData = Mi({}, e == null ? void 0 : e.guillotineData, {
      firstShape: ((s = this == null ? void 0 : this.guillotineData) == null ? void 0 : s.firstShape) || null,
      myPhase: ((n = this == null ? void 0 : this.guillotineData) == null ? void 0 : n.myPhase) || null,
      myStripParent: ((r = this == null ? void 0 : this.guillotineData) == null ? void 0 : r.myStripParent) || null,
      myStripDirection: ((o = this == null ? void 0 : this.guillotineData) == null ? void 0 : o.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((a = (l = this == null ? void 0 : this.guillotineData) == null ? void 0 : l.stripShapeBatches) == null ? void 0 : a.subsetUsed) || !1,
        groups: ((f = (c = this == null ? void 0 : this.guillotineData) == null ? void 0 : c.stripShapeBatches) == null ? void 0 : f.groups) || {}
      }
    });
  }
  cloneGuillotineData() {
    var e;
    return (e = this.guillotineData) != null && e.myStripParent && (Ze(this.guillotineData.myStripParent) || Et(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o, l, a, c, f, m, d, p;
    const n = e.bladeWidth;
    if (e.cutType !== "efficiency")
      return s ? 0 : n;
    if (this.minSpacing > 0) return this.minSpacing;
    let r = (e == null ? void 0 : e.minSpacing) || 0;
    if (n > r && (r = n), (l = (o = e.options) == null ? void 0 : o.minSpacingDimension) != null && l.dimension && ((c = (a = e.options) == null ? void 0 : a.minSpacingDimension) != null && c.minSpacing)) {
      const v = (m = (f = e.options) == null ? void 0 : f.minSpacingDimension) == null ? void 0 : m.dimension;
      (this.l <= v || this.w <= v) && (r = ((p = (d = e.options) == null ? void 0 : d.minSpacingDimension) == null ? void 0 : p.minSpacing) || r);
    }
    return s && (r -= n), r < 0 && (r = 0), this.minSpacing = r, r;
  }
  validateShape(e) {
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...ze[n]({ item: e, index: e == null ? void 0 : e.index }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
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
    e = Bt(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Tt.map((s) => [s, !1])
    ), !!ni(e, !0))
      for (const s of Tt)
        this._banding[s] = k(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return jl(this._banding);
  }
  get finish() {
    return this._finish;
  }
  set finish(e) {
    if (this._finish = Object.fromEntries(
      bt.map((s) => [s, ""])
    ), !!ni(e, !0))
      for (const s of bt)
        this._finish[s] = k(e == null ? void 0 : e[s]) ? e[s] : "";
  }
  get facesArray() {
    return bt.map((e) => {
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
    }) && (this._banding = null), bt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), Ml(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = mi(e.grain)), Gn([
      () => ii(this.isInsideStock(e), `shape ${this.id} is not inside stock ${e.id}`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, Et(this) && this.shapes.forEach((e) => e.removeFromStock());
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
    this.removeFromStock(), this.resetPosition(), si(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
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
    return !Bl(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : Kn(e) ? Yn(this, e) : 0;
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
      return s.push(new Ki({
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
    si(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    var n, r, o;
    return it(e) && typeof ((n = this.fitsStock) == null ? void 0 : n[e.parentID]) < "u" ? ((o = (r = this.fitsStock) == null ? void 0 : r[e.parentID]) == null ? void 0 : o[s ?? "any"]) === !0 : Xi(this, e, s);
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = s.pop(), e++), s.push(e);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new At(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const e = this.cloneGuillotineData();
    return e.myStripParent = Wl(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
class Ps extends Zi {
  constructor(e) {
    var t = (...Nh) => (super(...Nh), u(this, "cuts"), u(this, "phase"), u(this, "cutDirection"), u(this, "firstShape"), u(this, "merged"), u(this, "children"), u(this, "siblings"), //used by vis only
    u(this, "parent"), u(this, "segmentType"), u(this, "completed"), //used by vis only
    u(this, "rowSegment"), //used by cuts
    u(this, "placementOrder"), u(this, "hasBeamTrim"), u(this, "hasHeadCut"), u(this, "isInitial"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.parentID = k(e == null ? void 0 : e.parentID) ? e.parentID : null, this.shapes = k(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = k(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = k(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = k(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = k(e == null ? void 0 : e.parent) ? e.parent : null, this.children = k(e == null ? void 0 : e.children) ? e.children : [], this.siblings = k(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = k(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = k(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = k(e == null ? void 0 : e.cutDirection) ? e.cutDirection : null, this.hasBeamTrim = k(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1, this.hasHeadCut = k(e == null ? void 0 : e.hasHeadCut) ? e.hasHeadCut : !1, this.isInitial = k(e == null ? void 0 : e.isInitial) ? e.isInitial : !1);
  }
  validateSegment(e) {
    var s, n;
    (de.lessThanOrEqualTo(e.w, 0) || de.lessThanOrEqualTo(e.l, 0)) && new le({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (de.lessThan(e.x, 0) || de.lessThan(e.y, 0)) && new le({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (de.greaterThan(e.x + e.l, e.stock.l) || de.greaterThan(e.y + e.w, e.stock.w)) && new le({
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
class pt extends At {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = Bt(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
      throw new Error("attempting to create a group with no shapes");
    e.preventAutoRotation = !0;
    super(e);
    u(this, "shapes");
    u(this, "direction");
    u(this, "container");
    //can be set after initial creation
    u(this, "positions");
    u(this, "outOfBounds");
    u(this, "collision");
    u(this, "counter", 0);
    u(this, "type");
    u(this, "efficiency");
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
    const s = gl(this.direction);
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
    const r = mi(this.direction), o = this.shapes.reduce(
      (l, a) => a[r] > l ? a[r] : l,
      0
    );
    if (this[r] = o, Hn()) {
      const l = this.shapes.slice(0, -1).reduce((f, m) => f + m.getMinSpacing(this.container.saw), 0), c = this.shapes.reduce((f, m) => f + m[this.direction], 0) + l;
      Gn([
        () => ii(
          de.equalTo(c, this[this.direction]),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => ii(
          e,
          "currentPosition is incorrect in direction"
        ).to.equal(this[this.direction]),
        () => ii(
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
      if (!us(s, n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = mi(this.direction);
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
      if (n.x = this.x + r.x, n.y = this.y + r.y, !us(n, r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6), n.addToStock(e);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), fl(this, e);
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
function Mh(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function Hl(i) {
  return i.shapes !== void 0;
}
function Et(i) {
  return i instanceof pt && i.type !== "user";
}
function Ds(i) {
  return i instanceof pt && i.type === "user";
}
function _t(i) {
  return i instanceof Cs;
}
function qt(i) {
  return i instanceof Is;
}
function De(i) {
  return i instanceof vi;
}
function Gl(i) {
  return i instanceof Wt;
}
function it(i) {
  return i instanceof Nt;
}
function Ls(i) {
  return i instanceof Zi;
}
function Ze(i) {
  return i instanceof At && !(i instanceof pt);
}
function Wl(i) {
  return i instanceof At || i instanceof pt;
}
function Nl(i) {
  return i instanceof Ps;
}
function Jn(i) {
  return Ze(i) || it(i) || De(i) || qt(i);
}
function Qn(i) {
  return De(i) || qt(i) ? !1 : Ze(i) || it(i) ? i.trimmed : !1;
}
function Ul(i) {
  return i instanceof pt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof Cs ? "inputUserGroup" : i instanceof Is ? "inputStock" : i instanceof vi ? "inputShape" : i instanceof Nt ? "stock" : i instanceof Zi ? "container" : i instanceof At && !(i instanceof pt) ? "shape" : i instanceof Ps ? "segment" : i instanceof Zn ? "offcut" : i instanceof Ot ? "saw" : i instanceof Wt ? "rectangle" : null;
}
function Js(i, t) {
  return Er(i, t);
}
function Mt(i, t) {
  return Pe(i, t);
}
function zl(i, t, e) {
  Rr(i, t, e);
}
function k(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function ni(i, t = !1) {
  if (!k(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => k(s) && s) : e.some((s) => k(s));
}
function Fh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return qt(e) && e.autoAdd ? s = 1 : s = k(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function _h(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = Vl(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function Vl(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Yl() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function hs(i = 0, t, e = null, s = null, n = null) {
  if (!De(e) && !_t || s === "stock") return !1;
  let r, o;
  if (De(e) ? r = e.orientationLock : _t(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || _t(e))
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
function Qs(i, t, e = null, s = null, n = null) {
  if (!De(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? hs(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Xl(i) {
  i.banding && (i.banding = Vi(i.banding, "cc")), i.trim && (i.trim = Vi(i.trim, "cc"));
}
function qh(i, t = 0) {
  return Ze(i) || De(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Xl(i)), i;
}
function Vi(i, t = "cc", e = {
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
  inputs: Me,
  totalInputShapes: Kl,
  totalInputStock: Zl,
  createStockList: Jl,
  createShapeList: Ql,
  validateInputShapes: ea,
  validateInputStock: er,
  removeShape: en,
  removeStock: tn
} = In(), ta = {
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
}, ia = () => {
  var i, t;
  if ((i = Me == null ? void 0 : Me.inputStock) != null && i.value) {
    for (let e = Me.inputStock.value.length - 1; e >= 0; e--) {
      const s = Me.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Me.inputStock.value.length > 1 || e !== 0) && tn(s.listId);
    }
    if ((t = Me == null ? void 0 : Me.inputShapes) != null && t.value)
      for (let e = Me.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Me.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Me.inputShapes.value.length > 1 || e !== 0) && en(s.listId);
      }
  }
}, sa = (i, t = !1) => {
  var s;
  if (!t) return [];
  const e = [];
  for (let n = Me.inputShapes.value.length - 1; n >= 0; n--) {
    const r = Me.inputShapes.value[n];
    if (!r) continue;
    if (!k(r.material)) {
      e.push(new le({
        item: r,
        message: "errors.field_validation.no_material",
        listId: [r.listId]
      }));
      continue;
    }
    const o = i.items.find((l) => l._id === r.material);
    (s = o == null ? void 0 : o.t) != null && s.length && (r.t ? o.t.includes(r.t) || e.push(new le({
      item: r,
      message: "errors.field_validation.invalid_thickness",
      listId: [r.listId]
    })) : e.push(new le({
      item: r,
      message: "errors.field_validation.no_thickness",
      listId: [r.listId]
    })));
  }
  return e;
}, tr = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...ta,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, na = (i = {}) => {
  const t = tr(i), e = t.t;
  ia();
  const s = [];
  t.useInventory || s.push(...er(i == null ? void 0 : i.sawData)), s.push(...ea({
    saw: t.sawData,
    partTrim: x({ v: t.partTrim }),
    useInventory: t.useInventory,
    inputShapesOverride: t.inputShapes
  }));
  const n = Dt(s);
  if (n.length > 0) {
    console.warn("[Validation] errors:", JSON.parse(JSON.stringify(n)));
    const r = n.map((o) => {
      let l = "";
      return o.index && (l += o.getHumanReadableIndexes() + ": "), l += e(o.message), l;
    });
    return ht({
      type: "error",
      message: e("errors.validation.inputs_issue", { 0: Hi(e("woodwork.part")) }),
      additional: r
    }), !1;
  }
  return !0;
};
async function ra(i) {
  var s, n;
  const t = tr(i), e = t.t;
  try {
    if (!na(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (Kl.value > t.maxShapes || Zl.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const p = sa(t.materialStore, !0), v = Dt(p);
      if (v.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "material" }),
          additional: v.map((S) => e(S.message))
        }), { valid: !1 };
    } else {
      const p = er(), v = Dt(p);
      if (v.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "stock" }),
          additional: v.map((S) => e(S.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new Ot(t.selectedSaw) : new Ot(t.sawData), o = Dt(r.issues);
    if (o.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "saw" }),
        additional: o.map((p) => e(p.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Jl(r), c = Dt(a);
    if (c.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "stock" }),
        additional: c.map((p) => e(p.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return ht({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1 };
    const { shapeList: f, issues: m } = await Ql({
      orientationModel: t.orientationModel,
      trim: t.partTrim,
      inputShapesOverride: t.inputShapes
    }), d = Dt(m);
    if (d.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "part" }),
        additional: d.map((p) => e(p.message))
      }), { valid: !1 };
    if (!(f != null && f.length))
      return ht({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Me.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Me.userGroups.value.forEach((S) => S.populateParentID(Me.inputShapes.value));
      const p = ql(
        Me.userGroups.value,
        Me.inputShapes.value
      ), v = Dt(p);
      if (v.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "group" }),
          additional: v.map((S) => e(S.message))
        }), { valid: !1 };
    }
    return {
      valid: !0,
      saw: r,
      stockList: l,
      shapeList: f
    };
  } catch (r) {
    return console.error("[Validation] error:", r), ht({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function oa(i) {
  return !i || !ni(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function $s(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function Ts(i) {
  return `${i}Options`;
}
function la(i, t, e) {
  const s = Ts(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function aa(i, t, e = !0) {
  if (!$s(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    Os(i, t, r, e);
  e && ir(i, t, "all");
}
function Os(i, t, e, s = !0) {
  s && ir(i, t, e), e !== "all" && $s(i, t) && (i[t][e] = !1);
}
function ir(i, t, e) {
  if (!$s(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function As(i, t, e, s, n, r) {
  var f;
  const o = t + "Options";
  if (!((f = i == null ? void 0 : i[o]) != null && f[e]) || !(s in i[o][e])) return;
  yi(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((m) => m);
  if (!Array.isArray(a)) return;
  const c = Yi(i, t, e, r);
  yi(i, t, e, !!He(c));
}
function sr(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Yi(i, t, "all", r), c = i[o][e], f = Object.values(c || {}).filter((m) => m);
  for (const m of l)
    m !== "all" && (n.includes(m) || (As(i, t, m, e, s, r), Array.isArray(f) || yi(i, t, m, !1), yi(i, t, m, !!He(a))));
}
function yi(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = Ts(t), r = oa((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Yi(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((c) => c);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && Kn(e) && He(l) ? Rl(i, e, l) / 1e3 : l;
}
function Bh(i) {
  i != null && i.type && delete i.type, ua.call(this, i);
}
function ua(i) {
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
function ca(i) {
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
const ha = { id: "mini-stock-nav" }, da = ["onMousedown"], fa = { class: "id" }, pa = /* @__PURE__ */ Ee({
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
    return (r, o) => (y(), I("div", ha, [
      (y(!0), I(xe, null, Ae(e.stockList, (l, a) => (y(), I("button", {
        key: a,
        class: ke(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: Ie({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (c) => n(l.id)
      }, [
        A("div", fa, ne(a + 1), 1),
        ps(A("div", { class: "stack legibility" }, ne(l.stack), 513), [
          [gs, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, da))), 128))
    ]));
  }
}), oi = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, ga = {
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
}, ma = { id: "spinner" }, va = ["width", "height"], ya = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function ba(i, t, e, s, n, r) {
  return y(), I("div", ma, [
    e.complete ? W("", !0) : (y(), I("svg", {
      key: 0,
      class: "loading",
      style: Ie({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      Hr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, va)),
    e.complete ? (y(), I("svg", {
      key: 1,
      class: "complete",
      style: Ie({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      A("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : W("", !0),
    e.showNumber ? (y(), I("div", ya, ne(e.number), 1)) : W("", !0)
  ]);
}
const sn = /* @__PURE__ */ oi(ga, [["render", ba]]);
function wa(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function Sa(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function xa(i, t, e, s, n = []) {
  const r = Sa(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((f) => f.id)), c = o.map((f) => f.id).filter((f) => !a.has(f)).map((f) => `'${f}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${c.join()}`);
  }
  return n.length && (o.sort((a, c) => {
    const f = n.indexOf(a.id), m = n.indexOf(c.id);
    return f === -1 ? 1 : m === -1 ? -1 : f - m;
  }), console.log(o)), o;
}
const ka = ["id"], Ca = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Ia = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = H(0), r = H(!1), o = (w, O, U, L) => {
      if (!De(U) || O === 0)
        return w;
      const M = l();
      return O === 1 || O === 2 && L !== "n" && w ? M : w;
    }, l = (w) => {
      const O = { ...e, ...w };
      if (!O.rectangle || !De(O.rectangle)) return "";
      let U = "";
      switch (O.orientationModel) {
        case 0:
          U = J.value;
          break;
        case 1:
          O.stockGrain === "y" || O.stockGrain === "n" ? U = O.rectangle.l >= O.rectangle.w ? "l" : "w" : O.rectangle.l >= O.rectangle.w ? U = O.stockGrain : U = U = O.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          U = O.rectangle.l >= O.rectangle.w ? "l" : "w";
          break;
      }
      return U;
    }, a = () => {
      if (e.disabled || G.value.length <= 1) return;
      let w = null;
      [1, 2].includes(e.orientationModel) ? w = m() : w = f(), n.value = w;
    }, c = (w) => {
      const O = G.value.findIndex((U) => U === w);
      return O === -1 ? 0 : O;
    }, f = () => {
      let w = 0;
      return w = c(J.value) + 1, w > G.value.length - 1 && (w = 0), w;
    }, m = () => {
      let w = 0;
      if (J.value)
        w = G.value.findIndex((O) => O === "");
      else {
        const O = l();
        w = G.value.findIndex((U) => U === O);
      }
      return w;
    }, d = (w) => {
      s("updateOrientation", w);
    }, p = () => {
      const w = J.value;
      switch (e.orientationModel) {
        case 0:
          return w ? e.stockGrain === "n" ? w || e.shapeOrientation || "default" : e.stockGrain === "w" ? w === "w" ? "w" : "l" : w === "l" ? "l" : "w" : "default";
        case 1:
          return w ? e.stockGrain === "n" ? w || e.shapeOrientation || "default" : e.stockGrain === "w" ? w === "w" ? "w" : "l" : w === "l" ? "l" : "w" : "default";
        case 2:
          return w ? e.stockGrain === "n" ? w || e.shapeOrientation || "default" : e.stockGrain === "w" ? w === "w" ? "w" : "l" : w === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, v = () => {
      if (!e.rectangle) return;
      const w = o(
        J.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (w !== J.value) {
        S(w);
        return;
      }
      if (n.value = c(J.value), !!De(e.rectangle)) {
        if (e.orientationModel === 1) {
          const O = he.value ? l() : J.value;
          S(O);
          return;
        }
        if (e.orientationModel === 2) {
          let O;
          he.value ? O = e.stockGrain !== "n" ? l() : "" : O = J.value, S(O);
        }
      }
    }, S = (w) => {
      n.value = c(w), d(w);
    }, F = () => {
      const w = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], O = ["l", "w", "y", "n"], U = [0, 1, 2], L = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, M = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, K = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, R = [];
      w.forEach((_) => {
        O.forEach((V) => {
          U.forEach((Q) => {
            const oe = new vi({
              l: _.l,
              w: _.w
            }), Te = l({
              orientationModel: Q,
              rectangle: oe,
              stockGrain: V
            });
            let Ce = "";
            oe.l === oe.w ? Ce = "l === w" : oe.l > oe.w ? Ce = "l >= w" : Ce = "w > l";
            const ut = ["l", "w", "y"].includes(V) ? L : M;
            R.push({
              Model: Q,
              "Stock grain": V,
              "Stock grain description": K[V],
              Dimensions: Ce,
              "Orientation lock": Te || "N/A",
              "Orientation Lock description": ut[Te] || "N/A"
            });
          });
        });
      }), R.sort((_, V) => {
        if (_.Model !== V.Model)
          return _.Model - V.Model;
        if (_["Stock grain"] !== V["Stock grain"])
          return _["Stock grain"].localeCompare(V["Stock grain"]);
        const Q = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return Q[_.Dimensions] - Q[V.Dimensions];
      }), console.table(R);
    }, G = te(() => {
      if (!e.rectangle) return ["l", "w"];
      if (_t(e.rectangle)) return ["l", "w"];
      let w = ["", "l", "w"];
      return e.rectangle.multiEdit && (w = [" ", "", "l", "w"]), P.value && (w = w.filter((O) => O !== "w")), w;
    }), P = te(() => {
      var w, O, U, L;
      return De(e.rectangle) || qt(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((w = e.rectangle) != null && w.l) && ((O = e.rectangle) != null && O.w) ? ((U = e.rectangle) == null ? void 0 : U.l) === ((L = e.rectangle) == null ? void 0 : L.w) : !1;
    }), J = te(() => {
      let w = "";
      return _t(e.rectangle) ? w = e.rectangle.direction : De(e.rectangle) ? w = e.rectangle.orientationLock ?? "" : qt(e.rectangle) && (w = e.rectangle.grain ?? ""), w;
    }), X = te(() => _t(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), he = te(() => !X.value.l && !X.value.w), re = te(() => hs(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), C = te(() => {
      var L;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (qt(e.rectangle) || e.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[e.rectangle.grain] || "noGrain";
      const w = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, O = e.stockGrain || "default";
      let U = "default";
      return De(e.rectangle) || e.rectangleType === "shape" ? U = p() : _t(e.rectangle) && (U = e.rectangle.direction || "default"), ((L = w[O]) == null ? void 0 : L[U]) || w[O].default;
    });
    return Le(n, (w, O) => {
      r.value && O !== void 0 && d(G.value[w]);
    }, { immediate: !1 }), Le(X, (w, O) => {
      if (!e.rectangle || e.orientationModel === 0 || !De(e.rectangle) || De(e.rectangle) && (e.orientationModel === 2 && O.l && O.w && !J.value || e.stockGrain === "n" && !J.value))
        return;
      const U = l();
      J.value !== U && d(U);
    }, { immediate: !1 }), Le(() => e.stockGrain, (w, O) => {
      w !== O && v();
    }, { immediate: !0 }), gt(() => {
      v(), tt(() => {
        r.value = !0, e.debug && F();
      });
    }), (w, O) => (y(), I("div", {
      id: w.id,
      class: ke(["orientation-button", { rot: re.value, square: P.value, disabled: w.disabled, [C.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: Ie({
        backgroundColor: w.buttonBackground
      }),
      onClick: a
    }, [
      C.value === "delete" ? (y(), I("svg", Ca, O[0] || (O[0] = [
        A("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : W("", !0),
      C.value === "freeRotation" ? (y(), I("svg", {
        key: 1,
        class: "arrow",
        style: Ie({
          stroke: w.iconColor ? w.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, O[1] || (O[1] = [
        A("g", null, [
          A("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          A("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          A("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          A("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : W("", !0),
      C.value === "leftRight" ? (y(), I("svg", {
        key: 2,
        class: "arrow",
        style: Ie({
          stroke: w.iconColor ? w.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, O[2] || (O[2] = [
        A("g", null, [
          A("path", { d: "m5.408 19.408h61.095" }),
          A("g", null, [
            A("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            A("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : W("", !0),
      C.value === "topBottom" ? (y(), I("svg", {
        key: 3,
        class: "arrow",
        style: Ie({
          stroke: w.iconColor ? w.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, O[3] || (O[3] = [
        A("g", null, [
          A("path", { d: "m19.408 66.503v-61.095" }),
          A("g", null, [
            A("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            A("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : W("", !0),
      C.value === "grainLeftRight" ? (y(), I("svg", {
        key: 4,
        class: "grain",
        style: Ie({
          stroke: w.iconColor ? w.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, O[4] || (O[4] = [
        A("g", null, [
          A("path", { d: "m3 3h99.887" }),
          A("path", { d: "m3.113 32h99.887" }),
          A("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : W("", !0),
      C.value === "grainTopBottom" ? (y(), I("svg", {
        key: 5,
        class: "grain",
        style: Ie({
          stroke: w.iconColor ? w.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, O[5] || (O[5] = [
        A("g", null, [
          A("path", { d: "m61 3v99.887" }),
          A("path", { d: "m32 3.113v99.887" }),
          A("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : W("", !0)
    ], 14, ka));
  }
}), Pa = ["id"], Da = /* @__PURE__ */ Ee({
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
      const a = Qs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Vi(l, a, {
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
      var c;
      if (!((c = e.inputShape) != null && c.banding)) return;
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = Qs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Vi(l, a, {
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
    return gt(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), ms(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (y(), I("div", {
      id: l.id,
      class: ke(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      A("div", {
        class: ke(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        A("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Pa));
  }
}), nn = (i, t, e) => {
  if (t === "unitDependent" && e === "fraction") {
    const s = /^-?\d*(\s+\d+)?\/?-?\d*$/.test(i);
    return {
      value: i,
      valid: s
    };
  }
  return t === "integer" || t === "float" ? {
    value: i,
    valid: (t === "integer" ? /^-?\d*$/ : /^-?\d*\.?\d*$/).test(i)
  } : { value: i, valid: !0 };
};
function La({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = H({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (l, a = !1) => {
    if (l == null || l === "")
      return Ao(l, "decimal", i.required);
    if (i.allowZero === !1 && (l === 0 || l === "0"))
      return {
        value: null,
        valid: !1,
        message: "zero_not_allowed"
      };
    const c = String(l);
    switch (i.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (a)
          return nn(c, i.type, i.numberFormat);
        try {
          const f = x({
            v: l,
            nf: i.numberFormat,
            dp: i.decimalPlaces,
            fr: i.fractionRoundTo
          });
          if (typeof f == "number") {
            let m = f, d = !0, p;
            return i.allowZero === !1 && m === 0 ? {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            } : (typeof i.min == "number" && m < i.min && (m = i.min, d = !1, p = "below_min"), typeof i.max == "number" && m > i.max && (m = i.max, d = !1, p = "above_max"), { value: m, valid: d, message: p });
          }
          return { value: f, valid: !0 };
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
          return nn(c, i.type);
        try {
          const m = x({
            v: l,
            nf: "decimal"
          });
          if (m === null)
            return i.required ? { value: null, valid: !1, message: "field_required" } : { value: null, valid: !0 };
          let d = m;
          if (i.type === "integer" && (d = Math.round(d)), i.allowZero === !1 && d === 0)
            return {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            };
          let p = !0, v;
          return typeof i.min == "number" && d < i.min && (d = i.min, p = !1, v = "below_min"), typeof i.max == "number" && d > i.max && (d = i.max, p = !1, v = "above_max"), { value: d, valid: p, message: v };
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
  }, r = (l) => !!(l.valid || l.message === "below_min" || l.message === "above_max");
  return {
    state: s,
    ...{
      handleInput: (l) => {
        if (!e.value) return;
        const a = l.target;
        s.value.isTyping = !0;
        const c = n(a.value, !0);
        t("validation", c, i.id), t("input", a.value);
      },
      handleBlur: (l) => {
        if (!e.value) return;
        s.value.isTyping = !1;
        const a = l.target, c = n(a.value, !1);
        t("validation", c, i.id), r(c) && (t("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), t("blur", l);
      },
      handleFocus: (l) => {
        e.value && (s.value.isTyping = !0, t("focus", l));
      },
      handleKeydown: (l) => {
        if (e.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(l.key)) {
          if (["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(l.key) || (i.type === "unitDependent" && i.numberFormat === "fraction" ? /^[-0-9\s/]$/.test(l.key) || l.preventDefault() : (i.type === "integer" || i.type === "float") && ((i.type === "integer" ? /^[-0-9]$/.test(l.key) : /^[-0-9.]$/.test(l.key)) || l.preventDefault())), l.key === "Enter") {
            s.value.isTyping = !1;
            const a = l.target, c = n(a.value, !1);
            t("validation", c, i.id), r(c) && (t("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), t("enter", c);
          }
          l.key === "Escape" && (s.value.isTyping = !1, t("escape"));
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
      handleCompositionEnd: (l) => {
        s.value.isComposing = !1, s.value.isTyping = !1;
        const a = l.target, c = n(a.value, !1);
        t("validation", c, i.id), r(c) && (t("update:value", c.value), s.value.lastValidValue = String(c.value ?? ""));
      },
      handlePaste: (l) => {
        var c;
        if (!e.value) return;
        const a = ((c = l.clipboardData) == null ? void 0 : c.getData("text")) || "";
        if ((i.type === "integer" || i.type === "float") && !(i.type === "integer" ? /^-?\d+$/ : /^-?\d*\.?\d*$/).test(a)) {
          l.preventDefault();
          return;
        }
        if (i.type === "unitDependent" && i.numberFormat === "fraction" && !Tn(a)) {
          l.preventDefault();
          return;
        }
        t("paste", l);
      }
    },
    processValue: n
  };
}
function $a({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = H({
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
function Ta({
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
const Oa = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Aa = /* @__PURE__ */ Ee({
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
    fractionRoundTo: {}
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = H(!0), r = H(null), {
      handleInput: o,
      handleFocus: l,
      handleBlur: a,
      handleKeydown: c,
      handleCompositionStart: f,
      handleCompositionEnd: m,
      handlePaste: d
    } = La({
      props: e,
      emit: s,
      isMounted: n
    }), p = (v) => {
      const S = v.getBoundingClientRect(), F = window.getComputedStyle(v);
      return S.width > 0 && S.height > 0 && F.display !== "none" && F.visibility !== "hidden";
    };
    return gt(() => {
      (k(e.default) && e.value === void 0 || e.value === null) && s("update:value", e.default), e.focus && r.value && p(r.value) && tt(() => r.value.focus());
    }), ms(() => {
      n.value = !1;
    }), (v, S) => (y(), I("input", di(v.$attrs, {
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
      onInput: S[0] || (S[0] = //@ts-ignore
      (...F) => D(o) && D(o)(...F)),
      onFocus: S[1] || (S[1] = //@ts-ignore
      (...F) => D(l) && D(l)(...F)),
      onBlur: S[2] || (S[2] = //@ts-ignore
      (...F) => D(a) && D(a)(...F)),
      onKeydown: S[3] || (S[3] = //@ts-ignore
      (...F) => D(c) && D(c)(...F)),
      onCompositionstart: S[4] || (S[4] = //@ts-ignore
      (...F) => D(f) && D(f)(...F)),
      onCompositionend: S[5] || (S[5] = //@ts-ignore
      (...F) => D(m) && D(m)(...F)),
      onPaste: S[6] || (S[6] = //@ts-ignore
      (...F) => D(d) && D(d)(...F))
    }), null, 16, Oa));
  }
}), Ea = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ra = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = H(!0), r = H(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = Ta({
      props: e,
      emit: s,
      isMounted: n
    });
    return (c, f) => (y(), I("input", {
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
      (...m) => D(o) && D(o)(...m)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...m) => D(l) && D(l)(...m)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...m) => D(a) && D(a)(...m))
    }, null, 40, Ea));
  }
}), Ma = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Fa = ["disabled", "selected"], _a = {
  key: 0,
  value: " "
}, qa = ["hidden", "value", "disabled"], Ba = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = H(!0), r = H(null), o = te(() => e.options.map((a) => {
      var c, f, m;
      return {
        value: a.value,
        label: ((c = a.label) == null ? void 0 : c.toUpperCase()) ?? ((m = (f = a.value) == null ? void 0 : f.toString()) == null ? void 0 : m.toUpperCase()),
        hidden: a.hidden ?? !1,
        disabled: a.disabled ?? !1
      };
    })), {
      handleSelectChange: l
    } = $a({
      props: e,
      emit: s,
      isMounted: n
    });
    return (a, c) => {
      var f, m, d, p;
      return y(), I("select", di(a.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: c[0] || (c[0] = //@ts-ignore
        (...v) => D(l) && D(l)(...v))
      }), [
        A("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, ne(((m = (f = e.text) == null ? void 0 : f.select) == null ? void 0 : m.toUpperCase()) ?? "SELECT"), 9, Fa),
        e.multiEdit ? (y(), I("option", _a, ne(((p = (d = e.text) == null ? void 0 : d.delete) == null ? void 0 : p.toUpperCase()) ?? "DELETE"), 1)) : W("", !0),
        (y(!0), I(xe, null, Ae(o.value, (v) => (y(), I("option", {
          key: v.value,
          hidden: v.hidden,
          value: v.value,
          disabled: v.disabled
        }, ne(v.label), 9, qa))), 128))
      ], 16, Ma);
    };
  }
}), ja = ["for"], Ha = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, rn = /* @__PURE__ */ Ee({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (y(), I("label", {
      for: t.id,
      class: "input-label"
    }, [
      ti(ne(t.label) + " ", 1),
      t.required ? (y(), I("span", Ha, "*")) : W("", !0)
    ], 8, ja));
  }
}), Ga = ["data-field-id"], Wa = ["disabled", "selected"], Na = {
  key: 0,
  value: " "
}, Ua = ["hidden", "value", "disabled"], ft = /* @__PURE__ */ Ee({
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
    const e = t, s = i, n = H(null), r = H(null), o = H(!0), l = H(s.numberFormat), a = te(() => s.custom ? "custom-" + s.id : s.id), c = te(() => `${a.value}-error`), f = te(() => s.label || s.placeholder), m = te(() => C(s.type, s.numberFormat)), d = te(() => w(s.type, s.numberFormat)), p = te(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), v = te(() => {
      let L = s.value;
      if (s.type !== "unitDependent" || !L) return L;
      try {
        return x({ v: L, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), S = te(() => s.options.map((L) => {
      var M, K;
      return {
        value: L.value,
        label: ((M = L.label) == null ? void 0 : M.toUpperCase()) || ((K = L.value) == null ? void 0 : K.toString().toUpperCase()),
        hidden: L.hidden || !1,
        disabled: L.disabled || !1
      };
    })), F = te(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), G = te(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": f.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), P = te(() => ({
      ...G.value,
      type: s.type,
      inputMode: d.value,
      inputType: m.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default
    })), J = te(() => ({
      ...G.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), X = te(() => ({
      ...G.value,
      options: S.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), he = (L) => {
      r.value = L;
    }, re = (L) => s.label && s.enableLabel && s.labelPosition === L, C = (L, M) => {
      if (L === "unitDependent")
        return M === "fraction" ? "text" : "number";
      switch (L) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, w = (L, M) => {
      if (L === "unitDependent")
        return M === "fraction" ? "text" : "decimal";
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
    }, O = (L) => {
      e("update:value", L);
    }, U = (L, M) => {
      L.valid === void 0 || L.valid === !0 ? (o.value = !0, e("validation", n.value, L)) : L.valid === !1 && L.message && (o.value = !1, console.warn(`Field validation error for field ${M} - ${L.message}`), e("validation", n.value, L));
    };
    return Le(() => s.numberFormat, (L, M) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && L !== M && s.value)
          try {
            const K = x({ v: s.value, nf: L });
            e("update:value", K);
          } catch {
            e("update:value", L === "decimal" ? 0 : "0");
          }
        l.value = L;
      }
    }), (L, M) => (y(), I("div", {
      ref_key: "fieldRef",
      ref: n,
      class: ke(["input-wrapper", F.value]),
      "data-field-id": a.value
    }, [
      re("first") ? (y(), ve(rn, {
        key: 0,
        id: a.value,
        label: L.label,
        required: L.required
      }, null, 8, ["id", "label", "required"])) : W("", !0),
      p.value ? (y(), ve(Aa, di({
        key: 1,
        ref: he
      }, P.value, {
        "input-type": m.value,
        "input-mode": d.value,
        value: v.value,
        onValidation: U,
        "onUpdate:value": O
      }), null, 16, ["input-type", "input-mode", "value"])) : L.type === "checkbox" ? (y(), ve(Ra, di({
        key: 2,
        ref: he,
        type: "checkbox"
      }, J.value, {
        checked: L.value === L.trueValue,
        "onUpdate:value": M[0] || (M[0] = (K) => e("update:value", K))
      }), null, 16, ["checked"])) : L.type === "select" ? (y(), ve(Ba, di({
        key: 3,
        ref: he
      }, X.value, {
        "onUpdate:value": M[1] || (M[1] = (K) => e("update:value", K))
      }), {
        default: vs(() => {
          var K, R, _, V;
          return [
            A("option", {
              value: "",
              disabled: L.selectFirstOptionDisabled,
              selected: !L.value
            }, ne(((R = (K = L.text) == null ? void 0 : K.select) == null ? void 0 : R.toUpperCase()) ?? "SELECT"), 9, Wa),
            L.multiEdit ? (y(), I("option", Na, ne(((V = (_ = L.text) == null ? void 0 : _.delete) == null ? void 0 : V.toUpperCase()) ?? "DELETE"), 1)) : W("", !0),
            (y(!0), I(xe, null, Ae(S.value, (Q) => (y(), I("option", {
              key: Q.value,
              hidden: Q.hidden,
              value: Q.value,
              disabled: Q.disabled
            }, ne(Q.label), 9, Ua))), 128))
          ];
        }),
        _: 1
      }, 16)) : W("", !0),
      re("last") ? (y(), ve(rn, {
        key: 4,
        id: a.value,
        label: L.label,
        required: L.required
      }, null, 8, ["id", "label", "required"])) : W("", !0),
      Gr(L.$slots, "default")
    ], 10, Ga));
  }
}), za = {
  key: 0,
  class: "inputs"
}, Va = { class: "label" }, Ya = { class: "label" }, Xa = { class: "label" }, Ka = ["onClick"], Za = { class: "price" }, Ja = ["aria-label"], ds = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = H(!1), r = te(() => e.extraType + "Options"), o = te(() => {
      var v;
      if (!((v = e.allOptions) != null && v.length)) return "auto";
      const d = e.allOptions.length;
      return d ? `repeat(${d + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), l = (d, p) => {
      s("update-all", e.shape, e.extraType, d, p);
    }, a = (d, p, v) => {
      s("set", e.shape, e.extraType, d, p, v);
    }, c = (d, p, v, S, F) => {
      var X;
      if (!d) return [];
      const G = (X = p == null ? void 0 : p[v]) == null ? void 0 : X[S];
      if (!G)
        return console.error(`ExtrasInputs: cannot find pricing options for ${v} > ${S}`), [];
      const P = Object.values(G);
      if (!P.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${v} > ${S}`), [];
      const J = P.filter((he) => typeof he == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(d, J, F) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, f = (d) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const p = e.getPrice(e.shape, e.extraType, d);
      return p ? e.formatPrice(p) : "";
    }, m = () => {
      const d = [];
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
      ), d.length && (n.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + d.map((p) => p.message).join(" ")));
    };
    return gt(() => m()), (d, p) => {
      var S, F, G, P, J, X, he, re;
      const v = jt("font-awesome-icon");
      return n.value ? W("", !0) : (y(), I("div", {
        key: 0,
        class: ke(["extras group", [d.extraType]]),
        style: Ie({ "grid-column-end": "span " + d.partColumns })
      }, [
        d.allOptions.length === 1 && d.allOptions[0].length === 1 ? (y(), I("div", za, [
          A("div", Va, ne((F = (S = d.allOptions) == null ? void 0 : S[0]) == null ? void 0 : F[0]), 1),
          A("div", null, [
            (G = d.shape) != null && G[r.value] && "all" in d.shape[r.value] ? (y(), ve(ft, {
              key: 0,
              id: `${d.extraType}-all-${d.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: D(ee)("general.all"),
              "true-value": (J = (P = d.allOptions) == null ? void 0 : P[0]) == null ? void 0 : J[0],
              "false-value": "",
              value: (he = d.shape[r.value].all) == null ? void 0 : he[(X = d.labels) == null ? void 0 : X[0]],
              "onUpdate:value": p[0] || (p[0] = (C) => {
                var w, O;
                a("all", (w = d.labels) == null ? void 0 : w[0], C), l((O = d.labels) == null ? void 0 : O[0], C);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : W("", !0)
          ]),
          (y(!0), I(xe, null, Ae(d.extraKeys, (C) => {
            var w, O, U, L, M, K;
            return y(), I("div", { key: C }, [
              (w = d.labels) != null && w[0] && ((U = (O = d.shape) == null ? void 0 : O[r.value]) != null && U[C]) && d.labels[0] in d.shape[r.value][C] ? (y(), ve(ft, {
                key: 0,
                id: `${d.extraType}-${C}-${d.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: D(ee)(((L = d.userFriendlyFieldMap) == null ? void 0 : L[C]) || C),
                "true-value": (K = (M = d.allOptions) == null ? void 0 : M[0]) == null ? void 0 : K[0],
                "false-value": "",
                value: d.shape[r.value][C][d.labels[0]],
                "onUpdate:value": (R) => a(C, d.labels[0], R)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : W("", !0)
            ]);
          }), 128))
        ])) : (y(), I("div", {
          key: 1,
          class: "grid inputs",
          style: Ie({
            "grid-template-columns": o.value
          })
        }, [
          (re = d.shape) != null && re[r.value] && "all" in d.shape[r.value] ? (y(), I(xe, { key: 0 }, [
            A("div", Ya, ne(D(ee)("general.all")), 1),
            (y(!0), I(xe, null, Ae(d.allOptions, (C, w) => {
              var O, U;
              return y(), ve(ft, {
                id: `${d.extraType}-all-${d.labels[w]}-${w}-${d.shapeIndex}`,
                key: `${d.extraType}-all-${d.labels[w]}-${w}-${d.shapeIndex}`,
                type: "select",
                disabled: c(d.pricing, d.shape, r.value, "all", w).length === 0,
                options: c(d.pricing, d.shape, r.value, "all", w).map((L) => ({ value: L, label: L })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (U = d.shape[r.value].all) == null ? void 0 : U[(O = d.labels) == null ? void 0 : O[w]],
                "onUpdate:value": (L) => {
                  var M, K;
                  a("all", (M = d.labels) == null ? void 0 : M[w], L), l((K = d.labels) == null ? void 0 : K[w], L);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            p[2] || (p[2] = A("div", null, null, -1)),
            p[3] || (p[3] = A("div", null, null, -1))
          ], 64)) : W("", !0),
          (y(!0), I(xe, null, Ae(d.extraKeys, (C) => {
            var w, O;
            return y(), I(xe, { key: C }, [
              (w = d.shape) != null && w[r.value] && C in d.shape[r.value] ? (y(), I(xe, { key: 0 }, [
                A("div", Xa, ne(D(ee)(((O = d.userFriendlyFieldMap) == null ? void 0 : O[C]) || C)), 1),
                (y(!0), I(xe, null, Ae(d.allOptions, (U, L) => {
                  var M;
                  return y(), ve(ft, {
                    id: `${d.extraType}-${C}-${d.labels[L]}-${L}-${d.shapeIndex}`,
                    key: `${d.extraType}-${C}-${d.labels[L]}-${L}-${d.shapeIndex}`,
                    type: "select",
                    disabled: c(d.pricing, d.shape, r.value, C, L).length === 0,
                    options: c(d.pricing, d.shape, r.value, C, L).map((K) => ({
                      value: K,
                      label: K
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: d.shape[r.value][C][(M = d.labels) == null ? void 0 : M[L]],
                    "onUpdate:value": (K) => {
                      var R;
                      return a(C, (R = d.labels) == null ? void 0 : R[L], K);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : W("", !0),
              A("div", {
                class: "delete",
                onClick: () => D(Os)(d.shape, d.extraType, C)
              }, [
                we(v, { icon: ["fass", "trash"] })
              ], 8, Ka),
              A("div", Za, ne(f(C) || D(ee)("general.na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        A("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": `${D(ee)("actions.delete")} ${D(Hi)(D(ee)("woodwork." + d.extraLabel))}`,
          onClick: p[1] || (p[1] = () => D(aa)(d.shape, d.extraType, !0))
        }, [
          we(v, { icon: ["fass", "trash"] }),
          ti(" " + ne(`${D(ee)("actions.delete")} ${D(Hi)(D(ee)("woodwork." + d.extraLabel))}`), 1)
        ], 8, Ja)
      ], 6));
    };
  }
}), Qa = ["id", "disabled"], eu = { class: "icon" }, tu = /* @__PURE__ */ Ee({
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
      var a, c, f, m;
      const l = jt("font-awesome-icon");
      return y(), I("button", {
        id: r.id,
        class: ke(["finish-button", {
          "face-a": (c = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : c.a,
          "face-b": (m = (f = r.inputShape) == null ? void 0 : f.finish) == null ? void 0 : m.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        A("div", eu, [
          we(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = A("div", { class: "indicator" }, null, -1))
      ], 10, Qa);
    };
  }
}), iu = Ee({
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
      return ks(this.inputShape);
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
}), su = ["id", "disabled"];
function nu(i, t, e, s, n, r) {
  const o = jt("font-awesome-icon");
  return y(), I("button", {
    id: i.id,
    class: ke(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    we(o, { icon: ["fass", "hammer"] })
  ], 10, su);
}
const ru = /* @__PURE__ */ oi(iu, [["render", nu]]), ou = { id: "uploader" }, lu = {
  key: 0,
  class: "debug"
}, au = {
  key: 1,
  class: "selected-files"
}, uu = ["src"], cu = ["onClick"], hu = !0, du = /* @__PURE__ */ Ee({
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
    const e = Lt(() => Promise.resolve().then(() => Qi)), s = H(null), n = H({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (p) => ["image/jpeg", "image/jpg", "image/png"].includes(p.type), a = () => {
      var p;
      (p = s.value) == null || p.click();
    }, c = (p) => {
      const v = p.target, S = v.files;
      if (!S) return;
      const F = Array.from(S), G = F.filter((w) => !l(w));
      if (G.length > 0) {
        const w = G.map((O) => O.name).join(", ");
        alert(`Invalid file type(s): ${w}
Only JPG and PNG files are allowed.`), v.value = "";
        return;
      }
      const P = n.value.files || [];
      if (P.length + F.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), v.value = "";
        return;
      }
      const X = [...P, ...F], he = f(X), re = X.map((w, O) => ({
        originalName: w.name,
        newName: `${r.prefix}-${O + 1}-${r.uniqueId}${m(w.name)}`
      })), C = {
        shapeId: r.shapeId,
        files: X,
        previewUrls: he,
        metadata: re
      };
      n.value = C, o("update", C), v.value = "";
    }, f = (p) => p.map((v) => URL.createObjectURL(v)), m = (p) => p.substring(p.lastIndexOf(".")), d = (p) => {
      URL.revokeObjectURL(n.value.previewUrls[p]);
      const v = [...n.value.files], S = [...n.value.previewUrls], F = [...n.value.metadata];
      if (v.splice(p, 1), S.splice(p, 1), F.splice(p, 1), v.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const G = {
          shapeId: r.shapeId,
          files: v,
          previewUrls: S,
          metadata: F
        };
        n.value = G, o("update", G);
      }
    };
    return Wr(() => {
      var p;
      (p = n.value) != null && p.previewUrls && n.value.previewUrls.forEach((v) => URL.revokeObjectURL(v));
    }), gt(() => {
      n.value.shapeId = r.shapeId;
      const p = r.images.find((v) => v.shapeId === r.shapeId);
      if (p) {
        const v = f(p.files);
        n.value = {
          ...p,
          previewUrls: v
        };
      }
    }), (p, v) => {
      var F;
      const S = jt("font-awesome-icon");
      return y(), I("div", ou, [
        i.env === "development" && hu ? (y(), I("div", lu, [
          we(D(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        A("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: c
        }, null, 544),
        A("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          we(S, { icon: ["fass", "files"] })
        ]),
        (F = n.value.files) != null && F.length ? (y(), I("div", au, [
          (y(!0), I(xe, null, Ae(n.value.files, (G, P) => (y(), I("div", {
            key: P,
            class: "selected-file"
          }, [
            A("img", {
              src: n.value.previewUrls[P],
              alt: "Preview"
            }, null, 8, uu),
            A("button", {
              class: "remove-file",
              type: "button",
              onClick: (J) => d(P)
            }, [
              we(S, { icon: ["fass", "trash"] })
            ], 8, cu)
          ]))), 128))
        ])) : W("", !0)
      ]);
    };
  }
}), fu = /* @__PURE__ */ oi(du, [["__scopeId", "data-v-0836e586"]]);
function pu(i) {
  var l, a;
  const t = i.x, e = i.x + i.l, s = lt().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = lt().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(Bi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(Bi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((a = (l = i == null ? void 0 : i.stock) == null ? void 0 : l.saw) == null ? void 0 : a.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(ji(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(ji(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function gu() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(Pn(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(Dn(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function nr(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? mu.call(this, r, o, t[n]) : vu.call(this, r, o, t[n]);
  });
}
function mu(i, t, e) {
  const s = lt().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = rr(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Bi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var c, f;
    return ((f = (c = a[l]) == null ? void 0 : c.getBBox()) == null ? void 0 : f.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function vu(i, t, e) {
  const s = lt().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = rr(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(ji(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  yu(r), this.axes.cutMeasurementYAxes.push(r);
}
function rr(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function yu(i) {
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
function bi() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function bu() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Ji() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function wu() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text id").text((t) => on.call(this, t)).classed("hidden", (t, e, s) => this.isTextHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (i) => i.text((t) => on.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text name").text((t) => ln.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (i) => i.text((t) => ln.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text length").text((t) => an.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((t) => an.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
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
function on(i) {
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
function ln(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function an(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : x({ v: i.l, o: this.numberConfig }).toString();
}
function un(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : x({ v: i.w, o: this.numberConfig }).toString();
}
function Su(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = Ll(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let r = function(c) {
        return `${c.x1}-${c.y1}-${c.x2}-${c.y2}`;
      }, o = function(c) {
        c.attr("class", "ray").attr("x1", (f) => this.scales.xPositionScale(f.x1)).attr("x2", (f) => this.scales.xPositionScale(f.x2)).attr("y1", (f) => this.scales.yPositionScale(f.y1)).attr("y2", (f) => this.scales.yPositionScale(f.y2));
      };
      if (this.state.env !== "development") return;
      const a = Un(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (c) => c.append("line").call((f) => o.call(this, f)),
        (c) => c.call((f) => o.call(this, f)),
        (c) => c.remove()
      );
    }
    s = $l(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Gt();
  for (const r of e.toArray()) {
    const o = zn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = Pl(i, o, this.props.stock.value);
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
  ].forEach((r) => n.addPoint(r)), t = n.toArray()) : (n.addPoint(new Fe(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), t = n.toArray());
  for (let r = t.length; r--; ) {
    const o = t[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        t.splice(r, 1);
        break;
      }
  }
  return xu.call(this, t, i), ku.call(this, t, i), !!(t != null && t.length);
}
function xu(i, t) {
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
function ku(i, t) {
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
const Cu = (i) => i.id;
function Iu() {
  if (!this.props.containerWidth) return;
  bi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && Du.call(this), Pu.call(this);
}
function Pu() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Cu).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return cn.call(this, t), hn.call(this, t), t.on("mousedown", dn.bind(this)), t;
    },
    (i) => (cn.call(this, i), hn.call(this, i), i.on("mousedown", dn.bind(this)), i),
    (i) => i.remove()
  ), Ru.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => wu.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Du() {
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
  this.scales.scoreColorScale = fi([dt(251, 224, 255), dt(122, 0, 138)]).domain([e, s]);
}
function cn(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => wi.call(this, e));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Ln(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function Lu(i) {
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
function hn(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (t) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const e = _e(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    const s = _e(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", wi.call(this, e));
  }, { passive: !0 });
}
function dn(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && $u.call(this, i, t), (this.settings.app || this.settings.embed) && Au.call(this, i, t), this.state.device === "desktop" && (Ji.call(this), pu.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function $u(i, t) {
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
        ], Ou.call(this, t);
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
    console.table(Tu(t, e)), console.log(t.bestScore.score);
  }
}
function Tu(i, t) {
  return t.reduce((e, s) => {
    const n = Vu(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function Ou(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function Au(i, t) {
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
      color: wi.call(this, t),
      notes: t == null ? void 0 : t.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function wi(i) {
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
          return `rgb(${r.map((a, c) => Math.round(a + i.guillotineData.myPhase / 5 * (o[c] - a))).join(",")})`;
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
function Eu(i) {
  const t = [];
  for (const e of i)
    if (e.added && (e != null && e._banding))
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = Lu.call(this, s));
        const o = Mu.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function fn(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Ri.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Ri.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Ri.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Ri.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Ru(i) {
  if (!this.settings.main) return;
  const t = Eu.call(this, i);
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
function Ri(i, t) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[t]) ?? 0;
}
function Mu(i, t) {
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
function Fu(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const pn = (i) => i.id;
function gn(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function mn(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function _u() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), gu.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], pn).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => gn.call(this, t)),
    (i) => i.call((t) => gn.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], pn).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => mn.call(this, t)),
    (i) => i.call((t) => mn.call(this, t)),
    (i) => i.remove()
  );
}
function or(i) {
  return i.id;
}
function vn({ parent: i, near: t, far: e }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [i, t, e].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, or).join(
    (n) => n.append("rect").attr("class", "segment").call((r) => yn.call(this, r)),
    (n) => n.call((r) => yn.call(this, r)),
    (n) => n.remove()
  ), this.state.env === "development" && qu.call(this, s), !this.settings.app && this.state.env === "development" && Bu.call(this);
}
function yn(i) {
  return i.classed("offcut", (t) => t.offcut).classed("near", (t) => t.segmentType === "near").classed("far", (t) => t.segmentType === "far").classed("parent", (t, e) => t.id !== "root" && e === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function qu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, or).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => bn.call(this, e)),
    (t) => t.call((e) => bn.call(this, e)),
    (t) => t.remove()
  );
}
function bn(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Bu() {
  this.selections.segmentRectangles.on("mousedown", function(i, t) {
    console.log("segment", `[${(t == null ? void 0 : t.parentID) || "-"}]->[${t.id}] {P${t.phase}} ${t.l}x${t.w} ${t.cutDirection} ${t.hasHeadCut ? "HEAD" : "NORM"}`);
  });
}
function lr(i) {
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
const { currentCutIndex: ar } = bs();
function ju() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (i, t) => t).join(
    (i) => i.append("line").attr("class", "cut").call((t) => wn.call(this, t)),
    (i) => i.call((t) => wn.call(this, t)),
    (i) => i.remove()
  ), hr.call(this));
}
function wn(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim).classed("head", (t) => t.isHead);
}
function ur(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function cr(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function Hu(i, t, e, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] || !s && r.guillotineData.parentSegmentID === t ? "visible" : "hidden"), ar.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (r) => {
    var o;
    return (o = r == null ? void 0 : r.ptxData) == null ? void 0 : o.isDummy;
  }), s || Wu.call(this, i, t);
}
function Gu(i, t, e, s, n) {
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
    this.state.device === "desktop" && !i.isTrim && nr.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function hr() {
  var i, t;
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), (i = this.selections) != null && i.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), (t = this.selections) != null && t.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (e) => {
    const s = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return Math.max(1, Math.ceil(s));
  }), bi.call(this), Ji.call(this);
}
function Wu(i, t) {
  var m, d, p, v;
  const e = (m = i == null ? void 0 : i.guillotineData) == null ? void 0 : m.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (S) => ur(S, t, e)), this.selections.cutLines.classed("inside-segment", (S) => cr(S, t));
  const s = lr.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = dr(i, r);
  if (!o) return;
  let l = [], a;
  const c = this.getHalfBladeWidth(i.stock), f = i.dimension === "l" ? "y" : "x";
  (i == null ? void 0 : i.dimension) === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      i.y1 + c,
      n.y + n.w
    ]
  ], a = [(d = i == null ? void 0 : i.distances) == null ? void 0 : d.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      i.x1 + c,
      n.x + n.l
    ]
  ], a = [(p = i == null ? void 0 : i.distances) == null ? void 0 : p.left, (v = i == null ? void 0 : i.distances) == null ? void 0 : v.right]), this.state.device === "desktop" && !i.isTrim && a && nr.call(this, l, a, f);
}
function Nu(i = null, t = "") {
  var p, v, S, F;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const G = this.props.cuts.value.filter((P) => P.isTrim);
    i = i + G.length, i - G.length >= this.props.cuts.value.length - G.length && (ar.value = this.props.cuts.value.length - G.length - 1);
  }
  const e = this.props.cuts.value[i];
  if (!e) return;
  if (bi.call(this), Ji.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const G = this.selections.cutLines.nodes()[i].parentElement;
    if (!G) return;
    _e(G).raise();
  }
  const s = (p = e.guillotineData) == null ? void 0 : p.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (v = e == null ? void 0 : e.stock) == null ? void 0 : v.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((S = e == null ? void 0 : e.stock) == null ? void 0 : S.cutType) && s !== null && typeof s < "u" ? Hu.call(this, e, s, l, t) : Gu.call(this, e, i, o, r, n), Uu.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = lr.call(this, e);
  if (a === !1) return;
  const { parent: c, children: f } = a;
  if (!((F = e == null ? void 0 : e.guillotineData) != null && F.parentSegmentID))
    return vn.call(this, { parent: c });
  const { near: m, far: d } = dr(e, f);
  vn.call(this, { parent: c, near: m, far: d });
}
function dr(i, t) {
  const e = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = t.find((o) => o.segmentType === "near" && o[e] + o[s] === i[e + "1"] - i.halfBladeWidth()), r = t.find((o) => o.segmentType === "far" && o[e] === i[e + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function Uu(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (ur(s, e, l) || cr(s, e)) && (o += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function zu(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Vu(i, t) {
  return Pe(i, t);
}
class Yu {
  constructor(t) {
    u(this, "config");
    u(this, "props");
    u(this, "settings");
    u(this, "options");
    u(this, "numberConfig");
    u(this, "callbacks");
    u(this, "selections");
    u(this, "state");
    u(this, "scales");
    u(this, "axes");
    u(this, "formatNumber", (t) => x({
      v: t,
      o: this.numberConfig
    }).toString());
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = _e(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: lt(),
      yScale: lt(),
      yPositionScale: lt(),
      xPositionScale: lt(),
      yAxisScale: lt(),
      measurementScale: lt(),
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
    }, s = (n, r) => dt("#" + (zu(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = fi([
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
      this.selections.svgCanvas = _e(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, e, s) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), e && (this.numberConfig.decimalPlaces = e), s && (this.numberConfig.fractionRoundTo = s));
  }
  trimNameToFit(t, e) {
    function s(n, r, o) {
      const l = o[r], a = _e(l);
      a.text(n.name);
      let c = a.text();
      const f = a.node();
      if (!f) return;
      let m = f.getComputedTextLength();
      const d = this.getWidthAttribute(n) - 20;
      for (; m > d && c.length > 0; )
        c = c.slice(0, -1), a.text(c.length ? c + "..." : ""), m = a.node().getComputedTextLength();
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
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("width", this.state.w + "px"), this.selections.el.style("height", this.state.h + "px")) : (this.selections.el.style("width", null), this.selections.el.style("height", null));
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => wi.call(this, s));
    const e = _e(t).select("rect");
    if (e) {
      e.classed("selected", !0), e.style("fill", this.config.colors.partSelected.toString());
      const s = _e(t).datum();
      this.callbacks.onShapeSelect(s);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Iu.call(this);
  }
  drawStock() {
    _u.call(this);
  }
  drawCuts() {
    ju.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), bi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), bu.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Ji.call(this);
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
    var a, c;
    if (this.settings.app) {
      const f = this.scales.measurementScale(t.l), m = this.scales.measurementScale(t.w);
      return f < 50 || m < 50;
    }
    if (((c = (a = t == null ? void 0 : t.stock) == null ? void 0 : a.saw) == null ? void 0 : c.stockType) === "linear") return !1;
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
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => wi.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    bi.call(this);
  }
  updateShapeVisibility() {
    Fu.call(this);
  }
  drawPositions(t) {
    Su.call(this, t);
  }
  showCut(t) {
    Nu.call(this, t);
  }
  resetCuts() {
    hr.call(this);
  }
}
const Xu = ["id"], Ku = /* @__PURE__ */ Ee({
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
    moveMode: { default: () => H(!1) }
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
      getStock: c,
      getShapes: f,
      getSegments: m,
      getCuts: d
    } = bs(), p = i, v = e, S = (ie) => {
      v("part-click", ie);
    }, F = (ie) => {
      v("shape-colour-update", ie);
    }, G = (ie) => {
      ie != null && ie.id && v("shape-select", ie.id.toString());
    }, P = (ie) => {
      ie && v("add-to-parts-bin", ie);
    }, J = (ie, Ge) => {
      ie && v("move-shape", ie, Ge);
    }, X = H(0), he = H(0), re = H(null);
    let C, w = H(!1);
    gt(() => _());
    const O = te(() => ({
      format: p.numberFormat,
      decimals: p.decimalPlaces
    })), U = te(() => p.stockId ? c(p.stockId) : n.value), L = te(() => p.stockId ? f(p.stockId) : r.value), M = te(() => p.main ? p.stockId ? d(p.stockId) : o.value : []), K = te(() => p.main ? p.stockId ? m(p.stockId) : l.value : []);
    Nr(re, (ie) => {
      const Ge = ie[0], { width: st } = Ge.contentRect;
      st > 0 && (X.value = st);
    }), Ur(
      X,
      (ie) => {
        C && (ie <= 0 || (C.setDevice(), C.resetShapeAxes(), C.drawAll(), a.value !== null && (C.toggleSegments(!0), C.showCut(a.value))));
      },
      { throttle: 100 }
    );
    let R = !1;
    Le(() => U.value, (ie) => {
      ie && (X.value <= 0 || (R = !0, C.setDevice(), C.resetCuts(), C.removeSegments(), C.drawStock(), C.drawShapes(), C.drawCuts(), tt(() => {
        R = !1;
      })));
    }, { immediate: !1 }), Le(() => L.value, (ie) => {
      R || ie && (X.value <= 0 || (C.setDevice(), C.drawShapes()));
    }, { immediate: !1, deep: !0 }), p.main && (Le(() => M.value, () => {
      R || X.value <= 0 || C.drawCuts();
    }, { immediate: !1, deep: !0 }), Le(a, () => {
      a.value !== null && (X.value <= 0 || (C.toggleSegments(!0), C.showCut(a.value)));
    }, { immediate: !1 }), Le(O, (ie) => {
      C.updateNumberFormat(ie.format, ie.decimals, null);
    }, { immediate: !1 }));
    const _ = () => {
      const ie = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${p.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: p.numberFormat,
          decimalPlaces: p.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: p.colors || null,
        settings: {
          main: p.main,
          app: p.app,
          embed: p.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: he,
          containerWidth: X,
          stock: U,
          shapes: L,
          cuts: M,
          segments: K,
          stockList: s.stockList,
          moveMode: p.moveMode,
          app: p.app
        },
        options: {
          disableClick: p.disableClick,
          enableStretch: p.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: F,
          onShapeSelect: G,
          onAddToPartsBin: P,
          onMoveShape: J,
          onPartClick: S
        }
      };
      C = new Yu(ie), w.value = !0;
    };
    return t({
      loaded: w,
      toggleShapes: (ie = !1) => {
        C && C.toggleShapes(ie);
      },
      toggleCuts: (ie = !1) => {
        C && C.toggleCuts(ie);
      },
      toggleSegments: (ie = !1) => {
        C && C.toggleSegments(ie);
      },
      drawShapes: () => {
        C && C.drawShapes();
      },
      drawStock: () => {
        C && C.drawStock();
      },
      drawPositions: (ie) => {
        C && C.drawPositions(ie);
      },
      resetPositions: () => {
        C && C.removePositions();
      },
      findShape: (ie) => {
        C && C.findShape(ie);
      },
      clearSelection: () => {
        C && C.clearSelection();
      },
      resetCuts: () => {
        C && (C.toggleSegments(!1), C.resetCuts());
      },
      showCut: (ie) => {
        C && (C.toggleSegments(!0), C.showCut(ie));
      },
      requiresStretch: (ie) => {
        C && C.requiresStretch(ie);
      }
    }), (ie, Ge) => (y(), I("div", {
      id: ie.elementId,
      ref_key: "diagramContainerRef",
      ref: re,
      class: ke([{ app: ie.app }, "diagram-container"])
    }, null, 10, Xu));
  }
}), Zu = {
  key: 0,
  class: "debug"
}, Ju = { key: 2 }, Qu = {
  key: 0,
  class: "row table-heading"
}, ec = {
  key: 0,
  class: "cell center"
}, tc = {
  key: 1,
  class: "cell delete"
}, ic = { class: "cell" }, sc = ["id", "disabled", "onClick"], nc = {
  key: 0,
  class: "cell center"
}, rc = ["onClick"], oc = {
  key: 1,
  class: "cell"
}, lc = ["aria-label", "onClick"], ac = { class: "button-wrapper main" }, uc = ["aria-label"], cc = ["aria-label", "disabled"], hc = ["aria-label"], dc = { id: "part-count" }, fc = {
  key: 3,
  id: "messages"
}, pc = {
  key: 0,
  class: "heading"
}, gc = { class: "content" }, mc = {
  key: 4,
  id: "progress"
}, vc = { id: "diagram-wrapper" }, yc = {
  key: 0,
  id: "stack"
}, bc = !1, wc = /* @__PURE__ */ Ee({
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
    const s = Lt(() => Promise.resolve().then(() => Ac)), n = Lt(() => Promise.resolve().then(() => Rc)), r = Lt(() => Promise.resolve().then(() => eh)), o = Lt(() => Promise.resolve().then(() => oh)), l = Lt(() => Promise.resolve().then(() => Qi)), { inputs: a, totalInputShapes: c, getShapeGrainSummary: f, updateNumberFormat: m, validateInputStock: d } = In(), { r: p, updateFromResult: v, stackedStock: S, uniqueAddedShapes: F, uniqueUsedStock: G, activeStockId: P, activeStock: J, setActiveStockId: X } = bs(), { progress: he, reset: re } = no(), { addNotice: C } = ys(), { tip: w, update: O, hide: U } = io(), L = i, M = e, K = "production", R = H((navigator == null ? void 0 : navigator.language) || "en-US"), _ = zr(null), V = window.location.hostname, Q = H(!1), oe = H(!0), be = Vr("Checkout/currentURL", window.location.href), Te = fs(), Ce = H([]), ut = H(!1), Qe = H(!1), E = H(!1), Ut = H(!1), zt = H(!1), Vt = H(Yl()), ie = H(!1), { socket: Ge } = so({
      refs: {
        connected: Q,
        thinking: E
      },
      callbacks: {
        onResult(h) {
          var $, B, N, ae, ue;
          const g = h.result;
          if (v(g), !(($ = g.shapeList) != null && $.length) || !((B = g.stockList) != null && B.length)) {
            re(), C({
              type: "error",
              message: ee("errors.calculation.no_result"),
              additional: [ee("errors.validation.check_inputs")]
            }), E.value = !1;
            return;
          }
          const b = {
            jobId: h.jobId,
            metadata: p.metadata.value,
            parts: F.value.map((q) => {
              var Z, pe, j;
              return {
                l: q.l,
                w: q.w,
                t: q == null ? void 0 : q.t,
                material: q.material,
                orientationLock: q.orientationLock,
                q: (pe = (Z = p.metadata.value) == null ? void 0 : Z.addedPartTally) == null ? void 0 : pe[q.parentID],
                name: q.name,
                banding: q.banding,
                finish: q.finish,
                customData: q.customData,
                stockId: ((j = q == null ? void 0 : q.stock) == null ? void 0 : j.id) || (q == null ? void 0 : q.stockId)
              };
            }),
            stock: G.value.map((q) => {
              var Z, pe;
              return {
                id: q.id,
                name: q == null ? void 0 : q.name,
                l: q.l,
                w: q.w,
                t: q == null ? void 0 : q.t,
                material: q.material,
                q: (pe = (Z = p.metadata.value) == null ? void 0 : Z.usedStockTally) == null ? void 0 : pe[q.parentID],
                trim: q == null ? void 0 : q.trim,
                cost: q == null ? void 0 : q.cost,
                analysis: q == null ? void 0 : q.analysis
                // type: s?.type
              };
            }),
            offcuts: p.offcuts.value.map((q) => ({
              l: q.l,
              w: q.w,
              t: (q == null ? void 0 : q.t) ?? null,
              q: q.q,
              stockId: q.stockId
            })),
            inputs: {
              parts: a.inputShapes.value.map((q) => {
                const Z = { ...q };
                return delete Z.listId, Z;
              })
            }
          };
          if ((ue = (ae = (N = p == null ? void 0 : p.metadata) == null ? void 0 : N.value) == null ? void 0 : ae.unplacedParts) != null && ue.length) {
            const q = p.metadata.value.unplacedParts.map((Z) => Z.id).join();
            C({
              type: "warning",
              message: ee("woodwork.parts_not_fit") + ": " + q
            });
          }
          M("result", b), E.value = !1;
        },
        onUser(h) {
          _.value = h;
        },
        onConnectError(h) {
          C({
            type: "error",
            message: ee("errors.network.cannot_connect"),
            additional: [h]
          });
        },
        onError(h) {
          C({
            type: "error",
            message: ee("errors.general.error_occurred"),
            additional: [h]
          });
        }
      }
    }), st = {
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
    }, Y = yt(st), se = yt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), et = H(null), Ve = H(!1), Yt = H(""), Oe = H(""), $e = yt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), We = H([]), je = H([]), Rt = H([]), Xt = H(!1), Ye = yt({
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
    }), Se = yt({
      labels: [],
      pricing: {},
      options: {},
      keys: wt
    }), Re = yt({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), li = yt({
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
    }), Kt = H([]), xi = te(() => {
      var g;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "woodwork.material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (g = We.value[0]) == null ? void 0 : g.name,
          options: We.value.map((b) => ({
            value: b.name,
            label: b.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: Y.numberFormat === "decimal" ? "number" : "string",
          label: "woodwork.thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "woodwork.length",
          min: (Y == null ? void 0 : Y.minDimension) ?? 0,
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
          min: (Y == null ? void 0 : Y.minDimension) ?? 0,
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
          w: "32px",
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
      ], ...Kt.value];
    }), St = te(() => xa(
      li,
      xi.value,
      "parts",
      se.stockType,
      Y.fieldOrder
    )), xt = te(() => {
      let h = St.value.length + 1;
      return a.inputShapes.value.length > 1 && h++, h;
    }), ki = te(() => {
      const h = {
        id: "34px",
        del: "30px"
      }, g = [];
      for (const b of St.value)
        b.id !== "trim" && g.push(b.w ?? "minmax(20px, 1fr)");
      return g.unshift(h.id), a.inputShapes.value.length > 1 && g.push(h.del), g.join(" ");
    }), T = te(() => ({
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
    })), z = te(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), ce = te(() => {
      var h, g;
      return _.value ? !(_.value && ((g = (h = _.value) == null ? void 0 : h.api) != null && g.whiteLabel)) : !0;
    }), ye = {
      stockType: (h) => {
        const g = ["sheet", "linear", "roll"];
        g.includes(h) || console.warn(`${h} is not a valid stockType, expected ${g.join("|")}`), se.stockType = h, h === "linear" && (se.cutType = null, se.cutPreference = null);
      },
      stockSelection: (h) => {
        const g = ["efficiency", "smallest"];
        h && !g.includes(h) ? console.warn(`${h} is not a valid stockSelection, expected ${g.join("|")}`) : se.options.stockSelection = h;
      },
      minSpacing: (h) => {
        se.options.minSpacing = h;
      },
      stackHeight: (h) => {
        se.stackHeight = h;
      },
      cutPreference: (h) => {
        const g = ["efficiency", "length", "width", "beam"];
        if (g.includes(h)) {
          const { cutType: b, cutPreference: $ } = os(h);
          se.cutType = b, se.cutPreference = $;
        } else
          console.warn(`SmartCut - cut preference ${h || "N/A"} is not one of ${g.join("|")}`);
      },
      guillotineOptions: (h) => {
        se.guillotineOptions = h;
      },
      bladeWidth: (h) => {
        h >= 0 ? se.bladeWidth = h : console.warn(`SmartCut - you provided an incorrect blade width of: ${h}`);
      },
      maxParts: (h) => {
        Y.maxParts = h;
      },
      locale: (h) => {
        R.value = h.replace(/_/g, "-");
      },
      enable: (h) => {
        const g = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in st.enable)
          b in h && (Y.enable[b] = h[b]);
        for (const b in g)
          Ke(b, Mt(h, [g[b]]) ?? st.enable[g[b]]);
        zt.value = Mt(h, ["csvImport"]) ?? st.enable.csvImport;
      },
      colors: (h) => {
        for (const g in st.colors)
          g in h && (Y.colors[g] = h[g]);
      },
      orientationModel: (h) => {
        if (![0, 1, 2].includes(h)) {
          Y.orientationModel = 0;
          return;
        }
        Y.orientationModel = h;
      },
      numberFormat: (h) => {
        if (!["decimal", "fraction"].includes(h)) {
          Y.numberFormat = "decimal";
          return;
        }
        Y.numberFormat = h;
      },
      customFields: (h) => {
        if (!Array.isArray(h) || !(h != null && h.length)) return;
        const g = [];
        h.forEach((b, $) => {
          g.push(b), g[$].custom = !0;
          const B = ai(b.id);
          g[$].id = B, g[$].fieldMap = "customData." + B, b.type === "checkbox" && (g[$].w = "32px"), b.type === "select" && (g[$].output = b.output ?? "string", g[$].options = b.options);
        }), Kt.value = g;
        for (const b of a.inputShapes.value)
          b.customData = h.reduce(($, B) => {
            const N = ai(B.id);
            return $[N] = b.customData[N] || B.default || "", $;
          }, {});
      }
    }, Xe = (h) => {
      if (L.debug && M("log", ["checkout init...", h]), h != null && h.options) {
        const b = h.options;
        ca(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((N) => {
          N in b || M("error", `${N} is a required option`);
        });
        const B = ["enable", "colors"];
        for (const N in b)
          B.includes(N) || (Y[N] = b[N]), N in ye && ye[N](b[N]);
      }
      h.colors && "colors" in ye && ye.colors(h.colors), js("banding", h), js("finish", h), nt(h), gr(h), Qe.value = !0, L.debug && M("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), tt(() => {
        ce.value && !wr() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Ne = (h, g) => {
      h && (h.orientationLock = g);
    }, Ke = (h, g = !1) => {
      wa(li, "parts", se.stockType, h, g);
    }, ai = (h) => h ? go(h).toLowerCase() : null, Ue = (h, g, b, $) => {
      if (g.valid) {
        if (U(), b && $) {
          const B = b.issues.findIndex((N) => N.field.some((ae) => ae.length === $.length && ae.every((ue, q) => ue === $[q])));
          B !== -1 && b.issues.splice(B, 1);
        }
      } else
        O({
          referenceEl: h,
          show: !0,
          content: ee(`errors.field_validation.${g.message}`),
          type: "error"
        });
    }, nt = (h) => {
      var g, b, $, B, N;
      if (Mt(Y, ["enable", "machining"]) && h != null && h.machining) {
        for (const ae in Ye)
          h.machining[ae] && (Ye[ae] = h.machining[ae]);
        if (["holes", "hingeHoles"].forEach((ae) => {
          var ue, q;
          (ue = h == null ? void 0 : h.machining) != null && ue[ae] && (Ye[ae].enabled = (q = h == null ? void 0 : h.machining) == null ? void 0 : q[ae].enabled);
        }), ($ = (b = (g = h == null ? void 0 : h.machining) == null ? void 0 : g.corners) == null ? void 0 : b.types) != null && $.length && (Ye.corners.enabled = !0, Ye.corners.types = h.machining.corners.types), h.banding && ((N = (B = h == null ? void 0 : h.options) == null ? void 0 : B.enable) != null && N.banding)) {
          if (!Se) return;
          Ye.banding = {
            enabled: !0
          }, Se.options.length && (Ye.banding.options = Se.options), Se.labels.length && (Ye.banding.labels = Se.labels), ni(Se.pricing) && (Ye.banding.pricing = Se.pricing);
        }
      }
    }, fe = (h = null) => {
      et.value = h, h && h.l && h.w ? Xt.value = !0 : alert(ee("machining.enter_dimensions_first"));
    }, kt = () => {
      Xt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, Ct = (h = []) => {
      if (je.value = [], Rt.value = [], Ke("t", !1), !!h.length) {
        for (const g of h)
          if (g != null && g.t)
            if (typeof g.t == "string" && g.t.includes(",")) {
              const b = Es(g.t, !0);
              b.length === 2 ? (mr(b), Ke("t", !0), g.t = je.value[0]) : M("error", "bonded thickness found which does not have 2 options");
            } else je.value.includes(g.t) || je.value.push(g.t);
        je.value.length > 1 && Ke("t", !0);
      }
    }, fr = (h) => {
      var B;
      if (!h) return { thicknesses: [], bondedThicknesses: [] };
      if (!((B = We.value) != null && B.length))
        return {
          thicknesses: je.value,
          bondedThicknesses: []
        };
      if (!h.material) return { thicknesses: [], bondedThicknesses: [] };
      const g = We.value.find((N) => N.name === h.material);
      if (!g) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...g.thicknesses], $ = [];
      for (let N = 0; N < b.length; N++) {
        const ae = b[N], ue = Es(ae), q = [];
        if (ue.length) {
          for (const Z of ue)
            b[N] = Z, q.push(N);
          N++;
        }
        q.length && $.push(q);
      }
      return {
        thicknesses: b,
        bondedThicknesses: $
      };
    }, pr = (h) => fr(h).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), gr = (h) => {
      var g, b;
      if ((g = h == null ? void 0 : h.stock) != null && g.some(($) => $ == null ? void 0 : $.material)) {
        We.value = [], je.value = [], Rt.value = [];
        const $ = /* @__PURE__ */ new Map();
        for (const B of h.stock) {
          if (!B.material) continue;
          const N = B.material.toUpperCase();
          $.has(N) || $.set(N, /* @__PURE__ */ new Set()), B.t != null && ((b = $.get(N)) == null || b.add(x({ v: B.t })));
        }
        We.value = Array.from($.entries()).map(([B, N]) => ({
          name: B,
          thicknesses: Array.from(N).sort((ue, q) => ue - q)
        })), We.value.length > 1 && Ke("material", !0);
      } else
        Ct(h.stock);
    }, mr = (h, g = null) => {
      if (!Array.isArray(h)) {
        M("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let $ of h)
        Y.numberFormat === "decimal" && ($ = parseFloat($)), je.value.push($), g && g.thicknesses.push($), b.push(je.value.length - 1);
      Rt.value.push(b);
    }, Es = (h, g = !1) => {
      if (typeof h == "string" && h.includes(",")) {
        const b = h.split(",");
        return g ? b.map(($) => x({ v: $ })) : b;
      }
      return [];
    }, vr = () => {
      ie.value ? br() : yr();
    }, yr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), ie.value = !0;
    }, br = () => {
      document.exitFullscreen && document.exitFullscreen(), ie.value = !1;
    }, wr = () => {
      var $, B;
      if ((B = ($ = _.value) == null ? void 0 : $.api) != null && B.whiteLabel) return !0;
      let h = !0;
      const g = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [g, b].forEach((N, ae) => {
        if (!N) return h = !1;
        const ue = window.getComputedStyle(N);
        if (ue.display === "none" || ue.display === "hidden" || ue.opacity === "0" || ue.color === "transparent" || ue.position !== "relative" || ae === 1 && ue.color !== "#4e4e4e" && ue.color !== "rgb(78, 78, 78)")
          return h = !1;
      }), oe.value = h, h;
    }, Rs = (h, g, b, $, B) => {
      As(
        h,
        g,
        b,
        $,
        B,
        L.findExtrasPrice
      );
    }, Ms = (h, g, b, $) => {
      sr(
        h,
        g,
        b,
        $,
        g === "banding" ? Si : [],
        L.findExtrasPrice
      );
    }, Ci = (h, g) => {
      const b = g === "banding" ? Se == null ? void 0 : Se.labels : Re == null ? void 0 : Re.labels;
      la(h, g, b);
      const $ = Ts(g);
      if (h != null && h[$])
        for (const B in h[$]) {
          const N = Yi(h, g, B, L.findExtrasPrice);
          N === !1 && B && h[g][B] && new le({
            item: h,
            field: [[g, B]],
            type: "error",
            message: ee("option_not_available", { x: h[g][B], y: ee(g) })
          }), yi(h, g, B, !!N);
        }
    }, Fs = (h) => {
      const g = Object.keys(h);
      return Math.max(...g.map(($) => $.split("|").length));
    }, _s = (h) => {
      const g = [], b = Object.keys(h), $ = Fs(h);
      for (let B = $; B--; ) g.push(/* @__PURE__ */ new Set());
      for (const B of b)
        B.split("|").forEach((ae, ue) => g[ue].add(ae));
      for (let B = 0; B < $; B++)
        g[B] = Array.from(g[B]);
      return g;
    }, Ii = (h, g = [], b) => {
      if (!h) return [];
      if (b > 0 && !g[b - 1]) return [];
      const $ = /* @__PURE__ */ new Set();
      for (const B of Object.keys(h)) {
        const N = B.split("|");
        if (N.length > b) {
          let ae = !0;
          for (let ue = 0; ue < b; ue++)
            if (g[ue] && N[ue] !== g[ue]) {
              ae = !1;
              break;
            }
          ae && $.add(N[b]);
        }
      }
      return Array.from($);
    }, Pi = (h, g, b) => Yi(
      h,
      g,
      b,
      L.findExtrasPrice
    ), Sr = (h) => {
      const g = Ce.value.findIndex((b) => b.shapeId === h.shapeId);
      g !== -1 ? Ce.value[g] = h : Ce.value.push(h), window.smartcutImages = Ce.value;
    }, xr = (h) => {
      Ce.value = Ce.value.filter((g) => g.shapeId !== h), window.smartcutImages = Ce.value;
    }, qs = (h = 1) => {
      for (let g = h; g--; ) {
        let b;
        if (a.inputShapes.value.length > 0) {
          const $ = a.inputShapes.value[a.inputShapes.value.length - 1];
          b = ui({
            material: $.material,
            t: $.t
          });
        } else
          b = ui();
        a.inputShapes.value.push(b);
      }
    }, kr = (h) => {
      var b;
      if (a.inputShapes.value.length === 1) return;
      const g = a.inputShapes.value[h].listId;
      a.inputShapes.value.splice(h, 1), ((b = et.value) == null ? void 0 : b.listId) === g && (et.value = null), re();
    }, ui = (h = {
      l: null,
      w: se.stockType === "linear" ? ((g) => (g = a.inputStock.value[0]) == null ? void 0 : g.w)() : null,
      t: je.value.length ? je.value[0] : null,
      q: 1,
      material: ((b) => (b = We.value) == null ? void 0 : b.length)() === 1 ? We.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var B, N;
      h.id = (a.inputShapes.value.length + 1).toString();
      const $ = new vi(h, Y.numberFormat);
      return (B = Se == null ? void 0 : Se.labels) != null && B.length && Ci($, "banding"), (N = Re == null ? void 0 : Re.labels) != null && N.length && Ci($, "finish"), $;
    }, Cr = (h) => {
      if (je.value.length)
        for (const g of h) {
          if (!g.t) return;
          const b = je.value.findIndex(
            (N) => x({ v: N }) === g.t
          ), $ = Rt.value.find((N) => N.includes(b));
          if (!$) return;
          const B = Math.min(
            ...$.map((N) => je.value[N])
          );
          x({ v: g.t }) > B && (g.q = g.q * (x({ v: g.t }) / B), g.notes = `Bond to form ${g.t.valueOf()}`, g.t = B);
        }
    }, Bs = () => {
      re(), X(null), p.stockList.value = [], p.shapeList.value = [], p.cutList.value = [];
    }, es = () => {
      a.inputShapes.value.length = 0;
    }, Ir = async () => {
      if (M("calculating"), E.value) return !1;
      E.value = !0, Ut.value = !1;
      const h = a.inputShapes.value.map((ae) => new vi(ae));
      Cr(h);
      const { valid: g, saw: b, stockList: $, shapeList: B } = await ra({
        t: ee,
        partTrim: Y.partTrim,
        maxShapes: Y.maxParts,
        orientationModel: Y.orientationModel,
        sawData: se,
        inputShapes: h,
        onLimit: () => {
          C({
            type: "error",
            message: ee("limits.max_parts") + " " + Y.maxParts
          });
        }
      });
      if (!g) {
        M("validation-error"), E.value = !1;
        return;
      }
      Bs(), L.debug && console.log(
        "SmartCut - calculating",
        "stock",
        $.map((ae) => ae.dimensions),
        "parts",
        B.map((ae) => ae.dimensions)
      );
      const N = {
        inputs: {
          parts: h,
          stock: a.inputStock.value,
          saw: b
        },
        saw: b,
        shapeList: B,
        stockList: $,
        enableEvo: !0,
        domain: V
      };
      await Ge.connect(), Ge.emit("calculate", N);
    }, js = (h, g) => {
      var pe;
      if (Ke(h, !1), !h || !g || !(g != null && g[h]) || !Mt(Y, ["enable", h])) return;
      const b = [h, "pricing"];
      if (!Js(g, b)) {
        M("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const $ = Mt(g, b);
      if (typeof $ != "object") {
        M("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!ni($)) {
        M("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const B = Object.keys($), N = Object.values($);
      if (!B.length) {
        M("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const ae = /,/;
      for (const j of B)
        if (ae.test(j)) {
          M("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (N.some((j) => isNaN(j))) {
        M("error", `${b} values must be a number`);
        return;
      }
      const ue = Fs($), q = [h, "labels"];
      let Z = [];
      if (Js(g, q))
        Z = Mt(g, q);
      else {
        M("error", `${q.join(".")} not found`);
        return;
      }
      if (!Z) {
        M("error", `${q.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Z)) {
        M("error", `${q.join(".")} data must be an array`);
        return;
      }
      if (!(Z != null && Z.length)) {
        M("error", `if provided, ${q.join(".")} data must contain values`);
        return;
      }
      if (Z.length !== ue) {
        M("error", `${q.join(".")} length (${Z.length}) must match the number of levels in ${b.join(".")} (${ue})`);
        return;
      }
      switch (h) {
        case "banding":
          Se.labels = Z, Se.pricing = $, Se.options = _s($);
          break;
        case "finish":
          Re.labels = Z, Re.pricing = $, Re.options = _s($);
          break;
      }
      if (Ke(h, !0), !!((pe = a.inputShapes.value) != null && pe.length))
        for (const j of a.inputShapes.value)
          Ci(j, h);
    }, Di = (h, g) => {
      if (!g) return;
      h !== "info" && Object.keys($e).forEach(($) => {
        $ !== h && $ !== "info" && ($e[$] = null);
      });
      const b = a.inputShapes.value.indexOf(g);
      $e[h] === b ? (et.value = null, $e[h] = null) : (et.value = g, $e[h] = b);
    }, Hs = (h) => {
      if (M("log", ["load event received"]), !Qe.value) {
        M("log", ["load event received"]);
        return;
      }
      Pr(h.detail);
    }, Pr = (h) => {
      var $, B, N;
      if (M("log", ["loading parts..."]), !h || !((B = ($ = h == null ? void 0 : h.inputs) == null ? void 0 : $.parts) != null && B.length)) {
        M("log", ["could not find any parts to import"]);
        return;
      }
      a.inputShapes.value.length = 0;
      let g = 0;
      for (const ae of h.inputs.parts) {
        const ue = ui(ae);
        ue ? (a.inputShapes.value.push(ue), (N = ue.issues) != null && N.length && M("log", [`SmartCut - issues found while importing part at index ${g}`, ue.issues])) : M("log", [`SmartCut - error loading part at index ${g}`, ae]), g++;
      }
      a.inputShapes.value.flatMap((ae) => Dt(ae.issues)).length && C({
        type: "error",
        message: ee("errors.general.issues_found")
      }), M("log", [`loaded ${a.inputShapes.value.length} parts`]);
    }, Dr = (h) => {
      a.inputShapes.value.length = 0, tt(() => {
        var g, b;
        for (const $ of h)
          $.t = ((b = (g = a.inputStock.value) == null ? void 0 : g[0]) == null ? void 0 : b.t) ?? null, a.inputShapes.value.push(ui($));
      });
    };
    Le(() => L.stock, (h) => {
      if (Bs(), Array.isArray(h) || console.warn("SmartCut - stock must be passed as an array"), !!(h != null && h.length)) {
        a.inputStock.value.length = 0, We.value.length || Ct(h);
        for (const g of h) {
          const b = new Is({
            ...g,
            autoAdd: !0,
            id: (a.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, Y.numberFormat);
          a.inputStock.value.push(b);
        }
        if (a.inputStock.value.length) {
          a.inputShapes.value.length ? tt(() => {
            a.inputShapes.value.forEach((b) => {
              if (b.material) {
                const $ = We.value.find((B) => B.name === b.material);
                $ && ($.thicknesses.includes(x({ v: b.t })) || (b.t = x({ v: $.thicknesses[0] })));
              } else b.t || (b.t = x({ v: a.inputStock.value[0].t }));
            });
          }) : L.inputType !== "formula" && tt(() => qs(1));
          const g = d(se);
          g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), C({
            type: "error",
            message: ee("errors.validation.stock_issue"),
            additional: g.map((b) => b.message)
          }));
        }
      }
    }, { immediate: !0 }), Le(a.inputShapes, (h) => {
      M("inputs-changed"), h.forEach((g) => {
        var $;
        se.stockType === "linear" && (g.w = ($ = a.inputShapes.value[0]) == null ? void 0 : $.w);
        const b = We.value.find((B) => B.name === g.material);
        b && (b.thicknesses.includes(x({ v: g.t })) || (g.t = x({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), Le(() => Y.numberFormat, (h) => {
      m(h);
    }), gt(async () => {
      if (ut.value) return;
      const h = new URL(window.location.href), g = h.searchParams.toString(), b = h.origin + h.pathname + (g ? `?${g}` : "");
      be.value !== b && es(), be.value = b, R.value = Y.locale, await Ge.connect(), Ge.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Hs), ut.value = !0, L.debug && M("log", [
        "ready...",
        "fields:",
        St.value.map(($) => $.id)
      ]);
    });
    const Lr = () => {
      Ge && Ge.disconnect();
    };
    return ms(() => {
      window.removeEventListener("smartcut/load", Hs), Lr(), delete window.smartcutCheckout;
    }), t({
      init: Xe,
      clear: es,
      getAvailablePricingOptions: Ii,
      getExtrasPrice: Pi,
      formatPrice: L.formatPrice,
      findExtrasPrice: L.findExtrasPrice,
      inputShapes: a.inputShapes,
      initExtrasOptions: Ci,
      createInputShape: ui
    }), (h, g) => {
      var $, B, N, ae, ue, q;
      const b = jt("font-awesome-icon");
      return y(), I(xe, null, [
        we(D(s), {
          content: D(w).content,
          type: D(w).type,
          show: D(w).show,
          "reference-el": D(w).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        D(K) === "development" && bc ? (y(), I("div", Zu, [
          g[5] || (g[5] = A("div", null, "Developer information", -1)),
          A("div", null, ne(Y.enable.focus), 1),
          we(D(l), {
            data: [Y],
            paths: ["options"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        Xt.value && (($ = et.value) != null && $.machining) ? (y(), ve(D(r), {
          key: 1,
          shape: et.value,
          "onUpdate:shape": g[0] || (g[0] = (Z) => et.value = Z),
          translate: !0,
          options: Ye,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": Pi,
          "get-available-pricing-options": Ii,
          "format-price": i.formatPrice,
          onClose: kt
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : W("", !0),
        Qe.value ? W("", !0) : (y(), I("div", Ju, [
          we(sn, {
            size: 50,
            "show-number": !1
          })
        ])),
        Qe.value ? (y(), I("div", {
          key: 3,
          id: "smartcut-checkout",
          class: ke({ fullscreen: ie.value })
        }, [
          Vt.value && !i.readonly ? (y(), I("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: g[1] || (g[1] = (Z) => vr())
          }, [
            we(b, { icon: ["fass", "expand"] }),
            ti(" " + ne(D(ee)("general.full_screen")), 1)
          ])) : W("", !0),
          ce.value ? (y(), I("div", {
            key: 1,
            id: "credit",
            style: Ie(T.value)
          }, [
            A("a", {
              title: "SmartCut | Cut list optimization software",
              style: Ie(z.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, ne(D(po)(D(ee)("general.powered_by"))), 5)
          ], 4)) : W("", !0),
          A("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Ie({ "grid-template-columns": ki.value })
          }, [
            D(a).inputShapes.value.length ? (y(), I("div", Qu, [
              g[6] || (g[6] = A("div", { class: "cell id" }, null, -1)),
              (y(!0), I(xe, null, Ae(St.value, (Z) => (y(), I("div", {
                key: Z.id,
                class: ke(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(Z.id) || Z.type === "checkbox" }])
              }, ne(D(ee)(Z.label)), 3))), 128)),
              D(K) === "development" ? (y(), I("div", ec, " Info ")) : W("", !0),
              D(a).inputShapes.value.length > 1 ? (y(), I("div", tc)) : W("", !0)
            ])) : W("", !0),
            (y(!0), I(xe, null, Ae(D(a).inputShapes.value, (Z, pe) => (y(), I("div", {
              key: pe,
              class: "row inputs"
            }, [
              A("div", ic, [
                A("div", {
                  class: "id",
                  style: Ie({
                    background: Y.colors.partA,
                    color: Y.colors.text
                  })
                }, ne(pe + 1), 5)
              ]),
              (y(!0), I(xe, null, Ae(St.value, (j) => (y(), I("div", {
                key: j.fieldMap,
                class: ke(["cell", [`${j.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(j.id) || j.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(j.id) ? j.id === "orientationLock" ? (y(), ve(Ia, {
                  key: 1,
                  id: "orientation-" + pe,
                  rectangle: Z,
                  disabled: i.readonly,
                  "stock-grain": D(f)(Z),
                  "button-background": Y.colors.button,
                  "icon-color": Y.colors.buttonText,
                  "orientation-model": Y.orientationModel,
                  onUpdateOrientation: (mt) => Ne(Z, mt)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : j.id === "banding" ? (y(), ve(Da, {
                  key: 2,
                  id: "banding-" + pe,
                  "input-shape": Z,
                  disabled: i.readonly,
                  "stock-grain": D(f)(Z),
                  open: $e.banding === pe,
                  "orientation-model": Y.orientationModel,
                  onClicked: (mt) => Di("banding", Z)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : j.id === "finish" ? (y(), ve(tu, {
                  key: 3,
                  id: "finish-" + pe,
                  "input-shape": Z,
                  disabled: i.readonly,
                  open: $e.finish === pe,
                  onClicked: (mt) => Di("finish", Z)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : j.fieldMap === "machining" && Vt.value ? (y(), ve(ru, {
                  key: 4,
                  id: "machining-" + pe,
                  disabled: i.readonly,
                  "input-shape": Z,
                  onOpen: (mt) => fe(Z)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : j.fieldMap === "imageUpload" ? (y(), I("button", {
                  key: 5,
                  id: "image-upload-" + pe,
                  type: "button",
                  disabled: i.readonly,
                  class: ke({ selected: $e.info === pe }),
                  onClick: (mt) => Di("imageUpload", Z)
                }, [
                  we(b, { icon: ["fass", "image"] })
                ], 10, sc)) : W("", !0) : (y(), ve(ft, {
                  key: 0,
                  id: j.id + "-" + pe,
                  focus: !i.readonly && Y.enable.focus && pe === D(a).inputShapes.value.length - 1 && j.id === "l",
                  issue: D(Ys)(Z, [j.fieldMap]),
                  warning: D(Ys)(Z, [j.fieldMap], !0),
                  type: j.type,
                  output: j.output,
                  label: j != null && j.label ? D(ee)(j.label) : null,
                  placeholder: j != null && j.placeholder ? D(ee)(j.placeholder) : null,
                  "enable-label": !1,
                  "number-format": Y.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (j == null ? void 0 : j.required) ?? !1,
                  "allow-zero": (j == null ? void 0 : j.allowZero) ?? !0,
                  options: j.id === "t" ? pr(Z) : j == null ? void 0 : j.options,
                  "true-value": j == null ? void 0 : j.trueValue,
                  "false-value": j == null ? void 0 : j.falseValue,
                  default: j == null ? void 0 : j.default,
                  min: typeof (j == null ? void 0 : j.min) == "number" ? j.min : null,
                  max: typeof (j == null ? void 0 : j.max) == "number" ? j.max : null,
                  custom: j == null ? void 0 : j.custom,
                  value: D(Mt)(Z, j == null ? void 0 : j.fieldMap),
                  text: {
                    delete: D(rs)(D(ee)("actions.delete")),
                    select: D(rs)(D(ee)("actions.select"))
                  },
                  onValidation: (mt, $r) => Ue(mt, $r, Z, [j.fieldMap]),
                  "onUpdate:value": (mt) => {
                    j.fieldMap && D(zl)(Z, j.fieldMap, mt);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              D(K) === "development" ? (y(), I("div", nc, [
                A("button", {
                  type: "button",
                  class: ke({ selected: $e.info === pe }),
                  onClick: (j) => Di("info", Z)
                }, " i ", 10, rc)
              ])) : W("", !0),
              D(a).inputShapes.value.length > 1 ? (y(), I("div", oc, [
                A("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": `${D(ee)("actions.remove")} ${D(Hi)(D(ee)("woodwork.part"))}`,
                  onClick: (j) => kr(pe)
                }, [
                  we(b, { icon: ["fass", "trash"] })
                ], 8, lc)
              ])) : W("", !0),
              we(D(n), {
                item: Z,
                "num-columns": xt.value
              }, null, 8, ["item", "num-columns"]),
              $e.banding === pe && Se.options.length > 0 ? (y(), ve(ds, {
                key: 2,
                shape: Z,
                "shape-index": pe,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Se.keys,
                "all-options": Se.options,
                pricing: Se.pricing,
                labels: Se.labels,
                "user-friendly-field-map": D(qe),
                "part-columns": xt.value,
                "get-price": Pi,
                "format-price": i.formatPrice,
                "orientation-model": Y.orientationModel,
                "get-available-pricing-options": Ii,
                onUpdateAll: Ms,
                onSet: Rs
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : W("", !0),
              $e.finish === pe && Re.options.length > 0 ? (y(), ve(ds, {
                key: 3,
                shape: Z,
                "shape-index": pe,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Re.keys,
                "all-options": Re.options,
                pricing: Re.pricing,
                labels: Re.labels,
                "user-friendly-field-map": D(qe),
                "part-columns": xt.value,
                "get-price": Pi,
                "format-price": i.formatPrice,
                "orientation-model": Y.orientationModel,
                "get-available-pricing-options": Ii,
                onUpdateAll: Ms,
                onSet: Rs
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : W("", !0),
              $e.info === pe ? (y(), I("div", {
                key: 4,
                id: "shape-info",
                style: Ie({ "grid-column-end": "span " + xt.value })
              }, [
                we(D(l), {
                  data: [Z == null ? void 0 : Z.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : W("", !0),
              $e.imageUpload === pe ? (y(), ve(fu, {
                key: 5,
                prefix: (pe + 1).toString(),
                "unique-id": D(Te),
                "shape-id": Z.listId,
                style: Ie({ "grid-column-end": "span " + xt.value }),
                images: Ce.value,
                onUpdate: Sr,
                onRemove: xr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : W("", !0)
            ]))), 128))
          ], 4),
          A("div", ac, [
            i.readonly ? W("", !0) : (y(), I("button", {
              key: 0,
              type: "button",
              "aria-label": `${D(ee)("actions.add")} ${D(ee)("woodwork.part")}`,
              style: Ie({ background: Y.colors.button, color: Y.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: g[2] || (g[2] = (Z) => qs(1))
            }, [
              we(b, { icon: ["fass", "plus-large"] }),
              ti(" " + ne(`${D(ee)("actions.add")} ${D(ee)("woodwork.part")}`), 1)
            ], 12, uc)),
            A("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": D(ee)("actions.calculate"),
              style: Ie({
                background: Y.colors.button,
                color: Y.colors.buttonText
              }),
              disabled: !((B = D(a).inputStock.value) != null && B.length) || E.value,
              onClick: g[3] || (g[3] = (Z) => Ir())
            }, [
              we(b, { icon: ["fass", "calculator"] }),
              ti(ne(D(ee)("actions.calculate")), 1)
            ], 12, cc),
            i.readonly ? W("", !0) : (y(), I("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": D(ee)("actions.clear"),
              onClick: g[4] || (g[4] = (Z) => es())
            }, [
              we(b, { icon: ["fass", "trash"] })
            ], 8, hc)),
            A("div", dc, ne(D(c)) + ne(Y != null && Y.maxParts ? "/" + Y.maxParts : ""), 1)
          ]),
          zt.value && !i.readonly ? (y(), ve(D(o), {
            key: 2,
            ref: "import",
            "number-format": Y.numberFormat,
            "custom-fields": Kt.value,
            "banding-options": Se.options,
            "banding-labels": Se.labels,
            "finish-options": Re.options,
            "finish-labels": Re.labels,
            onImport: Dr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : W("", !0),
          Ve.value ? (y(), I("div", fc, [
            Yt.value ? (y(), I("div", pc, ne(Yt.value), 1)) : W("", !0),
            A("pre", gc, ne(Oe.value), 1)
          ])) : W("", !0),
          (Y.enable.diagram ? E.value && !D(he).complete : E.value || D(he).complete) ? (y(), I("div", mc, [
            we(sn, {
              size: 50,
              number: D(he).shapeCount,
              complete: D(he).complete,
              "show-number": Y.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : W("", !0),
          ps(A("div", vc, [
            ((ae = (N = D(J)) == null ? void 0 : N.saw) == null ? void 0 : ae.stockType) !== "roll" ? (y(), I("div", yc, ne((ue = D(J)) != null && ue.stack ? (q = D(J)) == null ? void 0 : q.stack : 1), 1)) : W("", !0),
            we(Ku, {
              "element-id": "diagram",
              "number-format": Y.numberFormat,
              "decimal-places": Y.decimalPlaces,
              colors: Y.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [gs, Y.enable.diagram && D(he).complete]
          ]),
          Y.enable.diagram && D(S).length > 1 && D(he).complete ? (y(), ve(pa, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": D(P),
            "stock-list": D(S),
            onShowStock: D(X)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : W("", !0)
        ], 2)) : W("", !0)
      ], 64);
    };
  }
}), jh = /* @__PURE__ */ oi(wc, [["__scopeId", "data-v-acce9eae"]]), Sc = {
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
}, xc = { class: "smartcut-object-viewer" }, kc = ["onClick"], Cc = { class: "toggle-icon" }, Ic = { class: "path-label" }, Pc = {
  key: 0,
  class: "object-properties"
}, Dc = { class: "key" };
function Lc(i, t, e, s, n, r) {
  return y(), I("div", xc, [
    (y(!0), I(xe, null, Ae(e.data, (o, l) => (y(), I("div", {
      key: l,
      class: "array-item"
    }, [
      A("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        A("div", Cc, ne(n.expanded[l] ? "▼" : "▶"), 1),
        A("div", Ic, ne(e.paths[l] || l), 1)
      ], 8, kc),
      n.expanded[l] ? (y(), I("div", Pc, [
        (y(!0), I(xe, null, Ae(o, (a, c) => (y(), I("div", {
          key: c,
          class: "property-item"
        }, [
          A("div", Dc, ne(c) + ": ", 1),
          A("div", {
            class: ke(["value", r.getValueType(a)])
          }, ne(r.formatValue(a)), 3)
        ]))), 128))
      ])) : W("", !0)
    ]))), 128))
  ]);
}
const $c = /* @__PURE__ */ oi(Sc, [["render", Lc]]), Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: $c }, Symbol.toStringTag, { value: "Module" })), Tc = ["data-placement"], Oc = /* @__PURE__ */ Ee({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = H(null), s = H(null), n = te(() => ({
      getBoundingClientRect: () => {
        var m;
        return ((m = t.referenceEl) == null ? void 0 : m.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      Fr(8),
      _r({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      qr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      Kr({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = Yr(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (m, d, p) => Mr(
          m,
          d,
          p,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), c = te(() => ({
      position: o.value.position,
      top: o.value.top,
      left: o.value.left,
      transform: o.value.transform,
      zIndex: "1000"
    })), f = te(() => {
      if (!l.value.arrow) return {};
      const { x: m, y: d } = l.value.arrow, p = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: m != null ? `${m}px` : void 0,
        top: d != null ? `${d}px` : void 0,
        [p]: "-4px"
      };
    });
    return (m, d) => (y(), ve(Cn, { to: "body" }, [
      we(Xr, { name: "fade" }, {
        default: vs(() => [
          m.show && m.referenceEl ? (y(), I("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: ke(["tooltip", m.type]),
            style: Ie(c.value),
            "data-placement": D(a)
          }, [
            ti(ne(m.content) + " ", 1),
            A("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: Ie(f.value)
            }, null, 4)
          ], 14, Tc)) : W("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Oc }, Symbol.toStringTag, { value: "Module" })), Ec = /* @__PURE__ */ Ee({
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
      return y(), I(xe, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (y(), I("div", {
          key: 0,
          class: "group issues",
          style: Ie({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          A("pre", null, ne(t.item.issues.filter((a) => a.type === "error").flatMap((a) => D(gi)(a.message)).join(`
`)), 1)
        ], 4)) : W("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (y(), I("div", {
          key: 1,
          class: "group warnings",
          style: Ie({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          A("pre", null, ne(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => D(gi)(a.message)).join(`
`)), 1)
        ], 4)) : W("", !0)
      ], 64);
    };
  }
}), Rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ec }, Symbol.toStringTag, { value: "Module" })), ot = {
  precisionFixed: ho,
  format: co,
  select: _e,
  selectAll: Ln,
  scaleLinear: lt,
  scaleSequential: fi,
  axisTop: Pn,
  axisBottom: Bi,
  axisRight: Dn,
  axisLeft: ji,
  symbol: uo,
  path: ao,
  arc: lo,
  symbolTriangle: oo,
  symbolSquare: ro
};
class Mc {
  constructor({
    HTMLElement: t,
    vueComponent: e,
    shape: s,
    numberFormat: n = "decimal",
    decimalPlaces: r = 2
  }) {
    u(this, "HTMLElement");
    u(this, "HTMLElementWidth");
    u(this, "el");
    u(this, "numberFormat");
    u(this, "decimalPlaces");
    u(this, "vueComponent");
    u(this, "shape");
    u(this, "h");
    u(this, "w");
    u(this, "shapeL");
    u(this, "shapeW");
    u(this, "padding", 40);
    u(this, "xScale", ot.scaleLinear());
    u(this, "yScale", ot.scaleLinear());
    u(this, "yScaleFlipped", ot.scaleLinear());
    u(this, "measurementScale", ot.scaleLinear());
    u(this, "xAxis");
    u(this, "yAxis");
    u(this, "formatDp");
    u(this, "svgCanvas");
    u(this, "currentSide", 0);
    u(this, "bandingStrokeWidth", 4);
    u(this, "shapeGroup");
    u(this, "bandingGroup");
    u(this, "holeGroup");
    u(this, "hingeHoleGroup");
    u(this, "cornerGroup");
    u(this, "legendGroup");
    u(this, "pointGroup");
    u(this, "loaded", !1);
    this.HTMLElement = t, this.numberFormat = n, this.decimalPlaces = r, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = e, this.shape = s, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = ot.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = ot.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
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
      ot.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      ot.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = ot.path(), e = this.shape.machining.corners, s = [], n = [];
    [0, 1, 2, 3].forEach((o) => {
      const l = e[o];
      l && l.type ? (s.push(l.size ? x({ v: l.size ?? 0, o: this }) : 0), n.push(l.type)) : (s.push(0), n.push(null));
    });
    const r = (o, l, a, c, f) => {
      n[o] === "radius" ? t.arcTo(
        this.xScale(l),
        this.getYScale()(a),
        this.xScale(c),
        this.getYScale()(f),
        this.measurementScale(s[o])
      ) : n[o] === "bevel" ? t.lineTo(this.xScale(c), this.getYScale()(f)) : (t.lineTo(this.xScale(l), this.getYScale()(a)), t.lineTo(this.xScale(c), this.getYScale()(f)));
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
    for (const r of wt)
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
    const n = ot.path();
    this.shape.machining.corners.forEach((r, o) => {
      if (!r.type) return;
      let l, a, c;
      switch (o) {
        case 0:
          if (!k(t.a) || t.a === !1) return;
          l = {
            x: this.xScale(0) - e,
            y: this.getYScale()(x({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, c = {
            x: this.xScale(x({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!k(t.b) || t.b === !1) return;
          l = {
            x: this.xScale(this.shapeL - x({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, a = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, c = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(x({ v: r.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!k(t.c) || t.c === !1) return;
          l = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - x({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, c = {
            x: this.xScale(this.shapeL - x({ v: r.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!k(t.d) || t.d === !1) return;
          l = {
            x: this.xScale(x({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, c = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - x({ v: r.size ?? 0, o: this })) + e
          };
          break;
        default:
          return;
      }
      if (n.moveTo(l.x, l.y), r.type === "radius")
        switch (n.arcTo(
          a.x,
          a.y,
          c.x,
          c.y,
          this.measurementScale(r.size ?? 0)
        ), o) {
          case 0:
          case 2:
            n.lineTo(c.x + e, c.y);
            break;
          case 1:
          case 3:
            n.lineTo(c.x, c.y - (this.currentSide === 0 ? e : -1));
            break;
        }
      else r.type === "bevel" && n.lineTo(c.x, c.y);
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
      ot.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
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
function Fc(i) {
  var t;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[i[0]]) < "u")
    return Pe(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return Pe(this, i);
}
const _c = { id: "machining" }, qc = {
  key: 0,
  class: "debug"
}, Bc = { class: "inputs" }, jc = {
  key: 0,
  class: "shape-name"
}, Hc = { class: "shape-dimensions" }, Gc = {
  key: 1,
  class: "sides-wrapper"
}, Wc = { class: "menu" }, Nc = { class: "button-wrapper" }, Uc = { class: "row table-heading" }, zc = {
  key: 0,
  class: "cell id"
}, Vc = {
  key: 0,
  class: "cell"
}, Yc = { class: "id" }, Xc = ["onClick"], Kc = { class: "remove" }, Zc = { key: 5 }, Jc = !1, Qc = /* @__PURE__ */ Ee({
  __name: "Machining",
  props: /* @__PURE__ */ Ws({
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
  emits: /* @__PURE__ */ Ws(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var We, je, Rt, Xt, Ye, Se, Re, li, Kt, xi, St, xt, ki;
    const e = Lt(() => Promise.resolve().then(() => Qi)), s = i, n = t, r = te(() => ks(E.value)), o = te(() => Fc.call({ options: s.options }, ["units"])), l = te(() => {
      var z;
      if (!((z = f.value) != null && z.length)) return 0;
      if (se.value === "banding") return 1;
      let T = Object.values(c.value).filter((ce) => ce.enabled).length;
      return T += 2, T;
    }), a = te(() => {
      if (!f.value.length || se.value === "banding") return;
      const T = {
        id: "34px",
        del: "30px"
      }, z = [];
      return f.value.forEach((ce) => {
        const ye = c.value[ce];
        ye.enabled && z.push(ye.w ?? "1fr");
      }), z.unshift(T.id), z.push(T.del), z.join(" ");
    }), c = te(() => !se.value || se.value === "banding" ? null : Yt[se.value]), f = te(() => !se.value || se.value === "banding" ? [] : Object.keys(Yt[se.value]).filter((T) => Yt[se.value][T].enabled)), m = te(() => se.value ? J() : []), d = te(() => {
      var z, ce, ye, Xe;
      const T = ((Xe = (ye = (ce = (z = E.value) == null ? void 0 : z.machining) == null ? void 0 : ce.corners) == null ? void 0 : ye.map((Ne) => {
        var Ke;
        return (Ke = Ne == null ? void 0 : Ne.isPresent) != null && Ke.call(Ne) ? Ne.getCorner() : null;
      })) == null ? void 0 : Xe.filter((Ne) => Ne)) ?? [];
      return [...wt, ...T];
    }), p = (T = !0) => {
      T ? Ge.value = T : tt(() => Ge.value = !1);
    }, v = () => {
      U(), L(), M(), K();
    }, S = (T, z, ce) => {
      tt(() => {
        T[z] = ce;
      });
    }, F = (T) => {
      if (se.value === "corners")
        switch (T) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return T;
        }
      return T + 1;
    }, G = () => se.value !== "banding", P = (T, z = null) => {
      if (!(T != null && T.length)) return [];
      let ce = "None";
      z === "depth" && (ce = "Through");
      const ye = [{ label: ce, value: null }];
      return T.forEach((Xe) => {
        const Ne = Xe.toString().charAt(0).toUpperCase() + Xe.toString().slice(1);
        ye.push({ label: Ne, value: Xe });
      }), ye;
    }, J = () => {
      if (!se.value) return [];
      if (se.value === "banding") return [];
      const T = E.value.machining[se.value];
      return Array.isArray(T) ? T : [T];
    };
    let X = null;
    const he = () => {
      E.value && (X = new Mc({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: E.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), X.init(), ie.value = !0, setTimeout(() => {
        X.updateSize();
      }, 100));
    }, re = () => {
      Y.value = Y.value === 0 ? 1 : 0, X.flip();
    }, C = () => {
      switch (se.value) {
        case "holes":
          w();
          break;
        case "hingeHoles":
          O();
          break;
      }
    }, w = () => {
      E.value.machining.createHole(
        x({ v: E.value.getLongSide() }) / 2,
        x({ v: E.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        Y.value
      ), X.createHoles();
    }, O = () => {
      E.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Y.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), X.createHingeHoles();
    }, U = () => {
      E.value.machining.holes.length = 0;
    }, L = () => {
      E.value.machining.hingeHoles.length = 0;
    }, M = () => {
      E.value.machining.corners.forEach((T) => {
        T.size = null, T.type = null;
      }), E.value.banding.a = !1, E.value.banding.b = !1, E.value.banding.c = !1, E.value.banding.d = !1;
    }, K = () => {
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
    }, R = (T) => {
      switch (se.value) {
        case "holes":
          return E.value.machining.holes.splice(T, 1);
        case "hingeHoles":
          return E.value.machining.hingeHoles.splice(T, 1);
        case "corners":
          E.value.machining.corners[T].size = null, E.value.machining.corners[T].type = null;
          return;
      }
    }, _ = () => {
      switch (se.value) {
        case "holes":
          return U();
        case "hingeHoles":
          return L();
        case "corners":
          return M();
      }
    }, V = () => {
      var T;
      if (Ve.value = [], !!s.options.banding.enabled) {
        p();
        for (const z in E.value.banding)
          E.value.banding[z] ? s.options.banding.enableTypes && ((T = s.options.banding.types) != null && T.length) && (E.value.banding[z] || Ve.value.push({
            index: z,
            message: "Please select a type"
          })) : E.value.banding[z] = "";
        p(!1);
      }
    }, Q = (T) => {
      const z = Ve.value.filter((ce) => ce.index === T);
      return z.length ? z.map((ce) => ce.message) : [];
    }, oe = (T) => {
      const z = Ve.value.filter((ye) => ye.index === T && (ye == null ? void 0 : ye.fields)), ce = z.flatMap((ye) => ye.fields);
      return z.length ? ce : [];
    }, be = (T, z) => {
      const ce = oe(T);
      return ce != null && ce.length ? ce.includes(z) : !1;
    }, Te = () => {
      n("close");
    }, Ce = (T) => T && typeof T.disabled == "function" ? T.disabled : !1, ut = (T, z, ce, ye, Xe) => {
      As(T, z, ce, ye, Xe, s.findExtrasPrice);
    }, Qe = (T, z, ce, ye) => {
      sr(
        T,
        z,
        ce,
        ye,
        [],
        s.findExtrasPrice
      );
    }, E = Zr(i, "shape");
    if (!((We = E.value) != null && We.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const Ut = H(null), zt = H(null), Vt = H(!1), ie = H(!1), Ge = H(!1), st = H(!1), Y = H(0), se = H(null), et = H(0), Ve = H([]), Yt = yt({
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
          type: (je = s.options.holes.diameters) != null && je.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Rt = s.options.holes.diameters) != null && Rt.length ? "float" : void 0,
          options: (Xt = s.options.holes.diameters) != null && Xt.length ? P(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && x({ v: E.value.t }) > 0,
          //[]
          required: !1,
          type: (Ye = s.options.holes.depths) != null && Ye.length ? "select" : "unitDependent",
          output: (Se = s.options.holes.depths) != null && Se.length ? "float" : void 0,
          options: (Re = s.options.holes.depths) != null && Re.length ? P(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && x({ v: E.value.t }) > 0,
          required: !1,
          type: (li = s.options.holes.depths) != null && li.length ? "select" : "unitDependent",
          output: (Kt = s.options.holes.depths) != null && Kt.length ? "float" : void 0,
          options: (xi = s.options.holes.depths) != null && xi.length ? P(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (St = s.options.holes.diameters) != null && St.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (xt = s.options.holes.diameters) != null && xt.length ? "float" : void 0,
          options: (ki = s.options.holes.diameters) != null && ki.length ? P(s.options.holes.diameters) : void 0
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
          options: P(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: "Size",
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? x({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? x({ v: s.options.corners.maxValue, o: s.options }) : x({ v: E.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), Oe = yt({
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
    }), $e = () => {
      var T;
      return !(!((T = E == null ? void 0 : E.value) != null && T.machining) || !Vt.value || Ge.value);
    };
    return Le(() => {
      var T;
      return (T = E.value) == null ? void 0 : T.listId;
    }, () => {
      $e() && he();
    }), Le(() => {
      var T;
      return (T = E.value) == null ? void 0 : T.id;
    }, () => {
      $e() && he();
    }), Le(se, (T) => {
      if ($e()) {
        if (T === "banding") {
          p(), V(), p(!1);
          return;
        }
        if (!T) {
          Ve.value = [];
          return;
        }
        p(), Ve.value = E.value.machining.validate(
          E.value,
          T,
          Oe == null ? void 0 : Oe[T]
        ), T === "hingeHoles" && E.value.machining.hingeHoles.forEach((z, ce) => {
          Ui(z, Oe == null ? void 0 : Oe.holes, Ve.value, ce);
        }), p(!1);
      }
    }, { deep: !0, immediate: !0 }), Le(() => {
      var T, z;
      return (z = (T = E == null ? void 0 : E.value) == null ? void 0 : T.machining) == null ? void 0 : z.holes;
    }, () => {
      $e() && (p(), Ve.value = E.value.machining.validate(
        E.value,
        "holes",
        Oe == null ? void 0 : Oe.holes
      ), X.createHoles(), p(!1));
    }, { deep: !0, immediate: !0 }), Le(() => {
      var T, z;
      return (z = (T = E == null ? void 0 : E.value) == null ? void 0 : T.machining) == null ? void 0 : z.hingeHoles;
    }, () => {
      $e() && (p(), E.value.machining.updateHingeHoles(E.value), Ve.value = E.value.machining.validate(
        E.value,
        "hingeHoles",
        Oe == null ? void 0 : Oe.hingeHoles
      ), E.value.machining.hingeHoles.forEach((T, z) => {
        Ui(T, Oe == null ? void 0 : Oe.holes, Ve.value, z);
      }), X.createHingeHoles(), p(!1));
    }, { deep: !0, immediate: !0 }), Le(() => {
      var T, z;
      return (z = (T = E == null ? void 0 : E.value) == null ? void 0 : T.machining) == null ? void 0 : z.corners;
    }, () => {
      if ($e()) {
        p(), Ve.value = E.value.machining.validate(
          E.value,
          "corners",
          Oe == null ? void 0 : Oe.corners
        ), E.value.machining.validate(E.value, "holes"), E.value.machining.validate(E.value, "hingeHoles"), X.createShape(), X.createHoles(), X.createHingeHoles();
        for (const T of E.value.machining.corners)
          T.isPresent() || Os(E.value, "banding", T.getCorner(), !0);
        X.createBanding(), p(!1);
      }
    }, { deep: !0, immediate: !0 }), Le(() => {
      var T;
      return (T = E == null ? void 0 : E.value) == null ? void 0 : T.banding;
    }, () => {
      $e() && (V(), X.createBanding());
    }, { deep: !0, immediate: !0 }), gt(() => {
      var z;
      if ((z = document.getElementById("machining")) == null || z.requestFullscreen(), !E.value || !E.value.l || !E.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      tt(() => he());
      const T = document.querySelector("#smartcut-app #machining .diagram");
      Ut.value || (Ut.value = new ResizeObserver((ce) => {
        clearTimeout(zt.value ?? void 0), ie.value && (zt.value = window.setTimeout(() => {
          if (st.value) {
            st.value = !1;
            return;
          }
          ce[0].contentRect.width !== et.value && (et.value = ce[0].contentRect.width, et.value && X.updateSize());
        }, 10));
      }), Ut.value.observe(T)), Vt.value = !0;
    }), (T, z) => {
      var ye, Xe, Ne, Ke, ai;
      const ce = jt("font-awesome-icon");
      return y(), I("div", _c, [
        T.env === "development" && Jc ? (y(), I("div", qc, [
          we(D(e), {
            data: [E.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        A("div", null, [
          A("div", Bc, [
            A("button", {
              type: "button",
              class: "close",
              onClick: Te
            }, [
              we(ce, { icon: ["fass", "xmark"] })
            ]),
            (ye = E.value) != null && ye.name ? (y(), I("div", jc, ne(E.value.name), 1)) : W("", !0),
            A("div", Hc, ne((Xe = E.value) == null ? void 0 : Xe.l) + " x " + ne((Ne = E.value) == null ? void 0 : Ne.w) + " " + ne((Ke = E.value) != null && Ke.t ? "x " + ((ai = E.value) == null ? void 0 : ai.t) : null), 1),
            T.options.faces.enabled ? (y(), I("div", Gc, [
              A("div", {
                ref: "sides",
                class: ke(["sides", { flipped: Y.value === 1 }]),
                onClick: re
              }, z[4] || (z[4] = [
                A("div", { class: "side-a" }, " A ", -1),
                A("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              z[5] || (z[5] = A("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : W("", !0),
            r.value ? (y(), I("button", {
              key: 2,
              onClick: v
            }, " Delete all machining ")) : W("", !0),
            A("div", Wc, [
              T.options.holes.enabled ? (y(), I("div", {
                key: 0,
                class: ke({ selected: se.value === "holes" }),
                onClick: z[0] || (z[0] = (Ue) => se.value = "holes")
              }, " Holes ", 2)) : W("", !0),
              T.options.hingeHoles.enabled ? (y(), I("div", {
                key: 1,
                class: ke({ selected: se.value === "hingeHoles" }),
                onClick: z[1] || (z[1] = (Ue) => se.value = "hingeHoles")
              }, " Hinge holes ", 2)) : W("", !0),
              T.options.corners.enabled ? (y(), I("div", {
                key: 2,
                class: ke({ selected: se.value === "corners" }),
                onClick: z[2] || (z[2] = (Ue) => se.value = "corners")
              }, " Corners ", 2)) : W("", !0),
              T.options.banding.enabled ? (y(), I("div", {
                key: 3,
                class: ke({ selected: se.value === "banding" }),
                onClick: z[3] || (z[3] = (Ue) => se.value = "banding")
              }, " Banding ", 2)) : W("", !0)
            ]),
            A("div", Nc, [
              se.value === "holes" || se.value === "hingeHoles" ? (y(), I("button", {
                key: 0,
                type: "button",
                onClick: C
              }, " Create ")) : W("", !0),
              se.value && se.value !== "banding" ? (y(), I("button", {
                key: 1,
                type: "button",
                onClick: _
              }, " Delete all ")) : W("", !0)
            ]),
            se.value === "banding" && E.value ? (y(), ve(ds, {
              key: 3,
              shape: E.value,
              env: T.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": d.value,
              labels: T.options.banding.labels,
              "all-options": T.options.banding.options,
              pricing: T.options.banding.pricing,
              "user-friendly-field-map": D(qe),
              "part-columns": 1,
              translate: T.translate,
              "orientation-model": 0,
              "get-price": T.getExtrasPrice,
              "format-price": T.formatPrice,
              "get-available-pricing-options": T.getAvailablePricingOptions,
              onSet: ut,
              onUpdateAll: Qe
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : W("", !0),
            se.value !== "banding" && m.value.length ? (y(), I("div", {
              key: 4,
              class: ke(["grid-table", se.value]),
              style: Ie({ "grid-template-columns": a.value })
            }, [
              A("div", Uc, [
                G() ? (y(), I("div", zc)) : W("", !0),
                (y(!0), I(xe, null, Ae(c.value, (Ue, nt, fe) => ps((y(), I("div", {
                  key: fe,
                  class: "cell"
                }, ne(Ue.label ?? nt), 1)), [
                  [gs, Ue.enabled]
                ])), 128)),
                z[6] || (z[6] = A("div", { class: "cell del" }, null, -1))
              ]),
              (y(!0), I(xe, null, Ae(m.value, (Ue, nt) => (y(), I("div", {
                key: nt,
                class: "row"
              }, [
                G() ? (y(), I("div", Vc, [
                  A("div", Yc, ne(F(nt)), 1)
                ])) : W("", !0),
                (y(!0), I(xe, null, Ae(f.value, (fe, kt) => (y(), I("div", {
                  key: kt,
                  class: "cell"
                }, [
                  c.value[fe].type !== "select" && c.value[fe].type !== "checkbox" ? (y(), ve(ft, {
                    key: 0,
                    id: fe + "-" + kt,
                    warning: be(nt, fe),
                    type: c.value[fe].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: c.value[fe].label ?? fe,
                    disabled: Ce(c.value[fe]),
                    value: Ue[fe],
                    units: o.value,
                    output: c.value[fe].output,
                    "onUpdate:value": (Ct) => S(Ue, fe, Ct)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : c.value[fe].type === "checkbox" ? (y(), ve(ft, {
                    key: 1,
                    id: fe + "-" + kt,
                    type: "checkbox",
                    warning: be(nt, fe),
                    "enable-label": !1,
                    disabled: Ce(c.value[fe]),
                    value: Ue[fe],
                    output: c.value[fe].output,
                    "onUpdate:value": (Ct) => S(Ue, fe, Ct)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : c.value[fe].type === "select" ? (y(), ve(ft, {
                    key: 2,
                    id: fe + "-" + kt,
                    type: "select",
                    "enable-label": !1,
                    warning: be(nt, fe),
                    disabled: Ce(c.value[fe]),
                    value: Ue[fe],
                    options: c.value[fe].options,
                    output: c.value[fe].output,
                    "onUpdate:value": (Ct) => S(Ue, fe, Ct)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : W("", !0)
                ]))), 128)),
                A("div", {
                  class: "cell",
                  onClick: (fe) => R(nt)
                }, [
                  A("div", Kc, [
                    we(ce, { icon: ["fass", "trash"] })
                  ])
                ], 8, Xc),
                (y(!0), I(xe, null, Ae(Q(nt), (fe, kt) => (y(), I("div", {
                  key: kt,
                  class: "group validation",
                  style: Ie({ "grid-column-end": "span " + l.value })
                }, ne(fe), 5))), 128))
              ]))), 128))
            ], 6)) : se.value !== "banding" ? (y(), I("div", Zc, " Please select from the menu above ")) : W("", !0)
          ]),
          A("div", {
            id: "machining-diagram",
            class: ke(["diagram", { flipped: Y.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Qc }, Symbol.toStringTag, { value: "Module" })), th = {
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
      files: Jr([])
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
function ih(i, t, e, s, n, r) {
  return y(), I("div", {
    id: "drop",
    class: ke({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = Qr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    A("div", null, ne(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const sh = /* @__PURE__ */ oi(th, [["render", ih]]), nh = { id: "import-file" }, rh = /* @__PURE__ */ Ee({
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
    const e = i, s = t, n = H([]), r = H([]), o = H([]), l = H([]), a = H({}), c = H([]), f = H(!1), m = H(null), d = H(null), p = [
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
    ], v = te(() => {
      const R = {};
      return n.value.forEach((_, V) => {
        R[V] = {};
        for (const [Q, oe] of Object.entries(_)) {
          if (!p.includes(Q)) continue;
          const be = G(Q, oe);
          (be === !0 || be === !1) && (R[V][Q] = be);
        }
      }), R;
    }), S = te(() => e.customFields.map((R) => R.label)), F = (R, _) => {
      if (_) {
        const V = Object.keys(_), Q = [[]];
        V.forEach((be) => {
          const Te = _[be], Ce = [];
          Q.forEach((ut) => {
            Te.forEach((Qe) => Ce.push([...ut, Qe]));
          }), Q.splice(0, Q.length, ...Ce);
        });
        const oe = /* @__PURE__ */ new Set();
        Q.forEach((be) => oe.add(be.join("|").toLowerCase())), R === "banding" ? m.value = oe : d.value = oe;
      }
    }, G = (R, _) => {
      if (_ === "???") return !0;
      function V(oe) {
        return oe ? (oe = oe.trim().toLowerCase(), oe === "l" || oe === "w") : !0;
      }
      const Q = {
        banding: (oe) => P(oe, m.value, "banding"),
        finish: (oe) => P(oe, d.value, "finish"),
        orientationLock: V
      };
      return R in Q ? Q[R](_) : null;
    }, P = (R, _, V) => {
      if (R = U(R), !R) return !0;
      const Q = R.split(","), oe = Q.every((be) => !be || _.has(be.toLowerCase()));
      if (!oe) {
        const be = Q.filter((Te) => !_.has(Te.toLowerCase()));
        console.log(`Valid ${V} choices...`), console.table(Array.from(_)), console.log(`The following ${V} choices are invalid`, be);
      }
      return oe;
    }, J = (R, _) => {
      const V = {
        bandingOptions: (Q) => X(Q, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (Q) => X(Q, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return R in V ? V[R](_) : null;
    }, X = (R, _, V, Q) => {
      if (R = U(R), !R)
        return Q.reduce((Te, Ce) => ({ ...Te, [Ce]: {} }), {});
      const oe = R.split(",").map((Te) => Te.toLowerCase()), be = {};
      return Q.forEach((Te, Ce) => {
        be[Te] = {}, Object.keys(_).forEach((ut, Qe) => {
          var E;
          be[Te][V[Qe]] = ((E = oe[Ce]) == null ? void 0 : E.split("|")[Qe]) || "";
        });
      }), be;
    }, he = () => n.value.map((R, _) => ({
      l: e.numberFormat === "decimal" ? _i(R.l) : R.l,
      w: e.numberFormat === "decimal" ? _i(R.w) : R.w,
      t: e.numberFormat === "decimal" ? _i(R.t) : R.t,
      q: R.q,
      orientationLock: R.orientationLock,
      name: R.name,
      material: R.material,
      bandingOptions: v.value[_].banding ? J("bandingOptions", R.banding) : null,
      finishOptions: v.value[_].finish ? J("finishOptions", R.finish) : null,
      numberFormat: e.numberFormat,
      customData: M(R)
    })), re = (R) => {
      var V;
      const _ = (V = R == null ? void 0 : R[0]) == null ? void 0 : V.data;
      _ && Br.parse(_, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (Q) => C(Q),
        error: () => s("error")
      });
    }, C = (R) => {
      r.value = R.data.filter((_) => _.some((V) => V)), o.value = r.value[0], a.value = {};
      for (let _ = o.value.length; _--; ) {
        const V = o.value[_], Q = w(V);
        Q ? a.value[_] = Q : (a.value[_] = null, S.value.includes(V) && (a.value[_] = "customData." + e.customFields.find((oe) => oe.label === V).id));
      }
      O(), r.value.shift(), L(), K();
    }, w = (R) => {
      const _ = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", ee("l"), ee("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", ee("w"), ee("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", ee("t"), ee("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", ee("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", ee("quantity"), ee("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", ee("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", ee("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", ee("banding")],
        finish: ["finish", "paint"]
      }, V = Object.entries(_).reduce(
        (Q, [oe, be]) => (be.some((Te) => R && R.toLowerCase() === Te) && Q.push(oe), Q),
        []
      );
      return V.length > 1 ? null : V[0];
    }, O = () => {
      f.value = !1, l.value = Object.values(a.value).map((_) => !_ || _ === "N" ? null : p.includes(_) ? _ : (f.value = !0, null));
      const R = l.value.filter((_, V) => l.value.indexOf(_) !== V);
      c.value = R.map((_) => l.value.reduce(
        (V, Q, oe) => (Q && Q === _ && V.push(oe), V),
        []
      ));
    }, U = (R) => R && R.replace(/\s*,\s*/g, ","), L = () => {
      const R = r.value.map((_) => {
        const V = {};
        return o.value.forEach((Q, oe) => {
          if (c.value.flat().includes(oe))
            return V[a.value[oe]] = "???";
          V[a.value[oe]] = _[oe];
        }), V;
      });
      n.value = R;
    }, M = (R) => {
      let _ = {};
      for (let V in R)
        if (V.startsWith("customData.")) {
          let Q = V.slice(11);
          _[Q] = R[V];
        }
      return _;
    }, K = () => {
      const R = he();
      R != null && R.length && s("import", R);
    };
    return gt(() => {
      F("banding", e.bandingOptions), F("finish", e.finishOptions);
    }), (R, _) => (y(), I("div", nh, [
      we(sh, {
        label: D(ee)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: re
      }, null, 8, ["label"])
    ]));
  }
}), oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: rh }, Symbol.toStringTag, { value: "Module" }));
class Pt extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class Sn {
  constructor({ url: t = null, spec: e = null }) {
    u(this, "url");
    u(this, "spec");
    // Update the operations object to use the FormulaOperation type
    u(this, "operations", {
      add: (t, e) => t + e,
      subtract: (t, e) => t - e,
      multiply: (t, e) => t * e,
      divide: (t, e) => {
        if (e === 0) throw new Pt("Division by zero", "DIVISION_BY_ZERO");
        return t / e;
      },
      ">": (t, e) => t > e,
      "<": (t, e) => t < e,
      ">=": (t, e) => t >= e,
      "<=": (t, e) => t <= e,
      "==": (t, e) => t === e
    });
    u(this, "precedence", {
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
      const l = this.evaluate(t.condition, e), a = this.evaluate(t.trueExpr, e), c = this.evaluate(t.falseExpr, e);
      return l ? a : c;
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
      const [c, f] = a.split(".");
      if (!t.nodes.has(a)) {
        const S = n[c];
        if (S)
          return f === "q" ? S.q : S[f];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const m = t.nodes.get(a);
      if (typeof m.formula == "number")
        return r.set(a, m.formula), m.formula;
      o.add(a);
      const d = t.edges.get(a) || /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
      for (const S of d)
        if (S.startsWith("input.")) {
          const F = S.split(".")[1];
          p.set(S, s[F]);
        } else
          p.set(S, l(S));
      const v = this.evaluateFormulaWithDeps(m.formula, p, s);
      return r.set(a, v), o.delete(a), v;
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
    if (!((e = this.spec) != null && e.inputs)) throw new Pt("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
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
      throw new Pt("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new Pt(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new Pt(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new Pt(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
const lh = {
  key: 0,
  class: "debug"
}, ah = { id: "formula-pricing" }, uh = {
  key: 1,
  class: "extras"
}, ch = { class: "heading" }, hh = { id: "hardware-total" }, dh = { class: "heading panels" }, fh = !1, ph = /* @__PURE__ */ Ee({
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
    const e = Lt(() => Promise.resolve().then(() => Qi)), s = i, n = t, r = eo("calculator"), o = te(() => r()), l = H("production");
    let a = null;
    const c = H(null), f = H([]), m = H(!1), d = H(""), p = te(() => {
      if (!m.value || !f.value.length || f.value.every((C) => C.value === null)) return null;
      const re = J();
      return tt(() => n("panel-result", re)), re;
    }), v = te(() => {
      if (!o.value || !m.value || !f.value.length || f.value.every((C) => C.value === null)) return;
      const re = X();
      return tt(() => n("hardware-result", re, S.value)), re;
    }), S = te(() => {
      if (v.value)
        return Object.values(v.value).reduce((re, C) => re + C.totalCost, 0);
    });
    Le(p, (re) => {
      var U, L, M;
      if (!m.value || !re || !o.value || !((U = o.value) != null && U.inputShapes)) return;
      const C = (K) => K != null && K.name ? K.name.toLowerCase() : "", w = new Map(
        o.value.inputShapes.map((K) => [C(K), K])
      ), O = /* @__PURE__ */ new Set();
      for (const K of Object.values(p.value)) {
        if (!K.name) continue;
        const R = C(K), _ = w.get(R), V = {
          ...K,
          name: K.name.toUpperCase() || (_ == null ? void 0 : _.name.toUpperCase()),
          material: ((L = K.material) == null ? void 0 : L.toUpperCase()) || ((M = _ == null ? void 0 : _.material) == null ? void 0 : M.toUpperCase()),
          bandingOptions: K.bandingOptions || {},
          finishOptions: K.finishOptions || {},
          orientationLock: K.orientationLock || null,
          notes: d.value,
          readonly: !0
        }, Q = _ || o.value.createInputShape(V);
        if (_) {
          Object.assign(_, V);
          for (const oe of ["banding", "finish"])
            o.value.initExtrasOptions(_, oe);
        } else
          o.value.inputShapes.push(Q);
        O.add(R);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (K) => O.has(C(K))
      );
    }, { immediate: !1 }), gt(() => he());
    const F = (re) => {
      s.debug && console.log(re);
    }, G = () => {
      f.value = Object.values(c.value.inputs).map((re) => ({
        value: re.default ?? null
      })), console.log(f.value);
    }, P = (re, C) => {
      f.value[re] && (f.value[re].value = C);
    }, J = () => {
      try {
        return a.calculatePanelsFromFields(f.value);
      } catch (re) {
        return o.value.inputShapes.length = 0, console.error(re), null;
      }
    }, X = () => {
      try {
        return a.calculateHardwareFromFields(f.value);
      } catch (re) {
        return console.error(re), null;
      }
    }, he = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (F(`SmartCut - Formula calculator init from url: ${s.url}`), a = new Sn({ url: s.url }), c.value = await a.getSpec()) : s.spec && (F("SmartCut - Formula calculator init with JSON"), a = new Sn({ spec: s.spec }), c.value = await a.getSpec()), G(), m.value = !0;
    };
    return (re, C) => {
      var w, O;
      return y(), I(xe, null, [
        l.value === "development" && fh ? (y(), I("div", lh, [
          C[1] || (C[1] = A("div", null, "Developer information", -1)),
          we(D(e), {
            data: [p.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        A("div", ah, [
          (w = c.value) != null && w.projectName ? (y(), ve(ft, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: d.value,
            "onUpdate:value": C[0] || (C[0] = (U) => d.value = U)
          }, null, 8, ["value"])) : W("", !0),
          (y(!0), I(xe, null, Ae((O = c.value) == null ? void 0 : O.inputs, (U, L, M) => {
            var K;
            return y(), ve(ft, {
              id: "formula-field-" + M,
              key: M,
              type: U.type,
              label: U.label,
              placeholder: U.label,
              min: U.min ?? 0,
              max: U.max ?? null,
              default: U.default ?? 0,
              value: (K = f.value[M]) == null ? void 0 : K.value,
              "onUpdate:value": (R) => P(M, R)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          v.value ? (y(), I("div", uh, [
            A("div", ch, ne(D(ee)("Hardware")), 1),
            (y(!0), I(xe, null, Ae(v.value, (U, L) => (y(), I("div", { key: L }, ne(U.name) + " x" + ne(U.q) + " = " + ne(i.formatPrice(U.totalCost)), 1))), 128)),
            A("div", hh, ne(D(ee)("Hardware total")) + " = " + ne(i.formatPrice(S.value)), 1)
          ])) : W("", !0),
          A("div", dh, ne(D(ee)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ph }, Symbol.toStringTag, { value: "Module" })), gh = { id: "smartcut-notices" }, mh = { class: "content" }, vh = ["onClick"], yh = ["innerHTML"], bh = /* @__PURE__ */ Ee({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = ys(), n = H({}), r = te(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = jt("font-awesome-icon");
      return y(), ve(Cn, { to: "body" }, [
        A("div", gh, [
          we(to, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: ke(["notices-container", t.position])
          }, {
            default: vs(() => [
              (y(!0), I(xe, null, Ae(D(e), (c) => (y(), I("div", {
                key: c.id,
                ref_for: !0,
                ref: (f) => {
                  f && (n.value[c.id] = f);
                },
                class: ke([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                A("div", mh, [
                  A("div", {
                    class: "message",
                    onClick: (f) => c.action()
                  }, ne(c.message), 9, vh),
                  A("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, yh)
                ]),
                c.persistent ? W("", !0) : (y(), ve(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (f) => D(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bh }, Symbol.toStringTag, { value: "Module" }));
export {
  mo as A,
  go as B,
  jh as C,
  Bh as D,
  Ph as E,
  Hh as F,
  Is as I,
  Gh as N,
  Qi as O,
  Nt as S,
  oi as _,
  vi as a,
  le as b,
  At as c,
  gi as d,
  _h as e,
  Vl as f,
  Mh as g,
  Ot as h,
  Th as i,
  Oh as j,
  Eh as k,
  Ah as l,
  qh as m,
  Rh as n,
  pi as o,
  x as p,
  wt as q,
  $h as r,
  qo as s,
  Fh as t,
  Dh as u,
  bt as v,
  Mt as w,
  Js as x,
  ni as y,
  ee as z
};
