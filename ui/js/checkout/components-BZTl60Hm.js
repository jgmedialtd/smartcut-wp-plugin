var Er = Object.defineProperty;
var Or = (i, t, e) => t in i ? Er(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => Or(i, typeof t != "symbol" ? t + "" : t, e);
import { F as is, i as Rr, g as Pe, d as Oi, a as Tt, c as Qi, b as kn, e as Ws, f as Qe, v as ds, t as Fi, h as Mr, s as Fr, j as _r, o as Br, k as qr, l as jr, P as Hr } from "./vendor-BJAM8w7x.js";
import { i as Cn, B as Gr } from "./vendor-i18n-BWRGKi6w.js";
import { d as Ae, c as T, o as y, F as we, r as $e, n as xe, a as Se, b as O, w as fs, t as re, v as ps, e as U, f as Wr, g as z, h as se, i as Te, j as rt, k as nt, l as vi, m as ci, u as P, p as Kt, q as ye, s as Nr, x as gs, y as Bt, z as ve, A as Ur, B as Pt, C as In, D as zr, E as Vr, G as Yr, H as vt, I as Xr, T as Kr, J as ms, K as Zr, L as Ns, M as Jr, N as Qr, O as eo, P as to, Q as io, R as so } from "./vendor-vue-BJVDXAuG.js";
import { u as Pn, a as vs, b as ys, c as no, d as ro, e as oo } from "./composables-BuS83uIC.js";
import { a as Tn, b as Dn, l as it, c as _i, d as Bi, s as Fe, r as dt, e as ui, f as Ln, g as lo, h as ao, i as co, p as uo, S as ho, j as fo, k as po } from "./vendor-d3-B-JATA3m.js";
const go = (i, t, e) => {
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
function qt(i) {
  return !(!i || typeof i != "string");
}
function mo(i) {
  return !qt(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function ss(i) {
  return !qt(i) || !i || typeof i != "string" ? "" : i.toLowerCase();
}
function ns(i) {
  return qt(i) ? i.trim().split(" ").map((t) => Jt(t)).join(" ") : "";
}
function Jt(i) {
  return qt(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function bs(i) {
  return qt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), i.trim()) : "";
}
function vo(i) {
  return qt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function yo(i, t = 100) {
  return qt(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let $n = Cn;
function bo(i) {
  $n = i;
}
function Le(i, t) {
  const e = $n.t(i, { ...t });
  return !e || e === i ? i : Jt(e);
}
const wo = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BYmzzJz4.js"), "../translation/cs.json": () => import("./cs-5N0KR6iO.js"), "../translation/da.json": () => import("./da-DhvZB7Wd.js"), "../translation/de.json": () => import("./de-BJ2TPxcK.js"), "../translation/el.json": () => import("./el-BOHQkcY9.js"), "../translation/en.json": () => import("./en-rJUVLzdY.js"), "../translation/es.json": () => import("./es-DmLKNEF0.js"), "../translation/fi.json": () => import("./fi-C_iFFjie.js"), "../translation/fr.json": () => import("./fr-CP9K4BPb.js"), "../translation/hi.json": () => import("./hi-C4w6QiLe.js"), "../translation/hr.json": () => import("./hr-C7MW3oCP.js"), "../translation/hu.json": () => import("./hu-QjqTlzl8.js"), "../translation/id.json": () => import("./id-SVohbpmi.js"), "../translation/it.json": () => import("./it-CKafNMiG.js"), "../translation/ja.json": () => import("./ja-Cci_TXOV.js"), "../translation/ko.json": () => import("./ko-B07bF1q9.js"), "../translation/ms.json": () => import("./ms-BVxz8QXq.js"), "../translation/nl.json": () => import("./nl-BbGK2qFn.js"), "../translation/no.json": () => import("./no-D9mzpvcj.js"), "../translation/pl.json": () => import("./pl-DHxwyUF6.js"), "../translation/pt.json": () => import("./pt-DZKgceOH.js"), "../translation/ro.json": () => import("./ro-BfZNjpCe.js"), "../translation/ru.json": () => import("./ru-4Ee_1UoX.js"), "../translation/sk.json": () => import("./sk-CIeHkjY1.js"), "../translation/sv.json": () => import("./sv-CYpVCQtT.js"), "../translation/th.json": () => import("./th-QFa5AZxk.js"), "../translation/tr.json": () => import("./tr-CUvch_-R.js"), "../translation/uk.json": () => import("./uk-C-DMe1dy.js"), "../translation/vi.json": () => import("./vi-B_BKhB_r.js"), "../translation/zh.json": () => import("./zh-BLw6LeLK.js") }), qi = Object.keys(wo).map((i) => {
  const t = i.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((i) => i !== "");
qi.length === 0 ? console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.") : console.log(`[i18n] Detected languages: ${qi.join(", ")}`);
const Us = "en", Yt = Cn.createInstance();
function W(i, t) {
  if (!Yt.isInitialized) {
    const n = Array.isArray(i) ? i.join(", ") : String(i);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${n}. Returning key.`), n;
  }
  let e = Yt.t(i, t);
  const s = Array.isArray(i) ? i[0] : i;
  return e === s && (console.warn(`[i18n] Translation not found - Key: "${s}"`), console.trace()), e = typeof e == "string" ? e : String(e), Jt(e);
}
const Pi = {}, So = {
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
      const s = await go(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BYmzzJz4.js"), "../translation/cs.json": () => import("./cs-5N0KR6iO.js"), "../translation/da.json": () => import("./da-DhvZB7Wd.js"), "../translation/de.json": () => import("./de-BJ2TPxcK.js"), "../translation/el.json": () => import("./el-BOHQkcY9.js"), "../translation/en.json": () => import("./en-rJUVLzdY.js"), "../translation/es.json": () => import("./es-DmLKNEF0.js"), "../translation/fi.json": () => import("./fi-C_iFFjie.js"), "../translation/fr.json": () => import("./fr-CP9K4BPb.js"), "../translation/hi.json": () => import("./hi-C4w6QiLe.js"), "../translation/hr.json": () => import("./hr-C7MW3oCP.js"), "../translation/hu.json": () => import("./hu-QjqTlzl8.js"), "../translation/id.json": () => import("./id-SVohbpmi.js"), "../translation/it.json": () => import("./it-CKafNMiG.js"), "../translation/ja.json": () => import("./ja-Cci_TXOV.js"), "../translation/ko.json": () => import("./ko-B07bF1q9.js"), "../translation/ms.json": () => import("./ms-BVxz8QXq.js"), "../translation/nl.json": () => import("./nl-BbGK2qFn.js"), "../translation/no.json": () => import("./no-D9mzpvcj.js"), "../translation/pl.json": () => import("./pl-DHxwyUF6.js"), "../translation/pt.json": () => import("./pt-DZKgceOH.js"), "../translation/ro.json": () => import("./ro-BfZNjpCe.js"), "../translation/ru.json": () => import("./ru-4Ee_1UoX.js"), "../translation/sk.json": () => import("./sk-CIeHkjY1.js"), "../translation/sv.json": () => import("./sv-CYpVCQtT.js"), "../translation/th.json": () => import("./th-QFa5AZxk.js"), "../translation/tr.json": () => import("./tr-CUvch_-R.js"), "../translation/uk.json": () => import("./uk-C-DMe1dy.js"), "../translation/vi.json": () => import("./vi-B_BKhB_r.js"), "../translation/zh.json": () => import("./zh-BLw6LeLK.js") }), `../translation/${i}.json`, 3);
      Pi[i] = s.default, console.log(`[i18n] Successfully loaded and cached local module for language: ${i}`), e(null, Pi[i]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${i}'. Error: ${s.message}`;
      console.warn(n, s), e(s, null);
    }
  }
};
async function xo() {
  return bo(Yt), await Yt.use(Gr).use(So).init({
    debug: !1,
    fallbackLng: Us,
    supportedLngs: qi.length > 0 ? qi : [Us],
    interpolation: {
      format: function(i, t) {
        return t === "c" ? ns(i) : t === "sc" ? Jt(i) : i;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), console.log("[i18n] Initialized. Detected language:", Yt.language), Yt;
}
const Ph = xo().catch((i) => {
  console.error("[i18n] CRITICAL: Initialization failed.", i);
}), Vt = 1e-10, ko = 10, Co = Number.MAX_SAFE_INTEGER, Io = 4294967295, Ge = (i) => typeof i == "number" && Number.isFinite(i), Ri = (i) => Array.isArray(i) && i.length > 0;
function li(i, t, e = Vt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Po = {
  greaterThan: (i, t, e = Vt) => !Ge(i) || !Ge(t) ? !1 : li(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Vt) => !Ge(i) || !Ge(t) ? !1 : li(i, t, e) >= 0,
  lessThan: (i, t, e = Vt) => !Ge(i) || !Ge(t) ? !1 : li(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Vt) => !Ge(i) || !Ge(t) ? !1 : li(i, t, e) <= 0,
  equalTo: (i, t, e = Vt) => !Ge(i) || !Ge(t) ? !1 : li(i, t, e) === 0
};
function To(i) {
  return Ge(i) ? Number.isInteger(i) ? i : Number(i.toFixed(ko)) : !1;
}
function Do(i) {
  if (!Ge(i) || i < 0 || i > Co)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Io + 1) * i);
}
function Lo(i, t) {
  if (!Ri(i))
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
    if (!Ri(t))
      throw new Error("Invalid input array");
    return t.reduce((e, s) => e + s, 0) / t.length;
  }
  static calculateStandardDeviation(t, e = null) {
    if (!Ri(t))
      throw new Error("Invalid input array");
    const s = e ?? this.calculateMean(t), n = t.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / t.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(t) {
    if (!Ri(t))
      throw new Error("Invalid input array");
    const e = this.calculateMean(t);
    if (e === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(t, e) / e;
  }
}
const de = {
  ...Po,
  isNumber: Ge,
  round: To,
  getRandom: Do,
  getRandomSample: Lo,
  calculateStandardDeviation: Ti.calculateStandardDeviation.bind(Ti),
  calculateCoefficientOfVariation: Ti.calculateCoefficientOfVariation.bind(Ti)
}, $o = 10, Ao = 0;
class ji extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
const ai = {
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
function k(i) {
  var o;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && ((o = i.o) == null ? void 0 : o.numberFormat) !== "fraction" ? null : "";
  const t = i.o ?? {}, e = i.nf ?? (t == null ? void 0 : t.numberFormat) ?? "decimal", s = i.dp ?? (t == null ? void 0 : t.decimalPlaces) ?? $o, n = i.pl ?? (t == null ? void 0 : t.parseLocale) ?? !1, r = i.fr ?? (t == null ? void 0 : t.fractionRoundTo) ?? Ao;
  try {
    const l = An(i.v, n);
    return l === null || l === "" ? e === "decimal" ? null : "" : e === "decimal" ? Eo(l, s) : Oo(l, r);
  } catch (l) {
    throw l instanceof ji ? l : new ji(
      `Failed to convert number format: "${i.v}" to ${e}. ${l.message}`
    );
  }
}
function Eo(i, t) {
  let e;
  if (typeof i == "number" ? e = i : e = new is(i).valueOf(), typeof t == "number") {
    const s = Math.pow(10, t);
    return Math.round(e * s) / s;
  }
  return e;
}
function Oo(i, t) {
  const e = new is(i);
  if (t > 0) {
    const s = e.mul(t), n = Math.round(s.valueOf());
    return new is(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function Ro(i, t, e = !1) {
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
function Mi(i) {
  if (i == null || i === "") return null;
  const t = String(i).trim();
  if (!t) return null;
  try {
    const { thousandsSeparator: e, decimalSeparator: s } = Mo(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch (e) {
    throw new ji(`Failed to parse locale number: "${i}". ${e.message || "Parsing error"}`);
  }
}
function ws(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  if (!t) return !1;
  const e = Object.keys(ai).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${e}]|[${e}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(t);
}
function An(i, t = !1) {
  if (i == null || i === "") return null;
  let e = String(i).trim();
  if (!e) return null;
  const s = Object.keys(ai).join("");
  e = e.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(ai).join(""), r = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), l = e.match(r), a = e.match(o);
    if (l) {
      const u = l[1], d = l[2], v = l[3], h = ai[v];
      if (h)
        return `${u}${d} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${v}`);
    } else if (a) {
      const u = a[1] || "", d = a[2], v = ai[d];
      if (v)
        return `${u}${v}`;
      throw new Error(`Unknown vulgar fraction character: ${d}`);
    } else if (ws(e)) {
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
      const d = t ? Mi(e) : parseFloat(e);
      return d === null || isNaN(d) || !isFinite(d) ? null : d.toString();
    }
  } catch (n) {
    throw new ji(
      `Failed to clean numeric input: "${i}". ${n.message || "Cleaning error"}`
    );
  }
}
function Th(i, t, e = null, s = null) {
  if (i && !(!Ie(i) && !Ft(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys)
      if (typeof i[n] == "object" && i[n] !== null)
        for (const r in i[n])
          Object.prototype.hasOwnProperty.call(i[n], r) && (i[n][r] = k({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s }));
      else
        i[n] = k({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
  }
}
const Hi = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function zs(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Vs(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Ys(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const ge = (i, t, e) => t in i ? i[t] : (console.warn(Hi.missingProperty(String(t), e)), null), Di = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, zt = (i, t) => {
  if (!zs(i) || !zs(t))
    return console.warn(Hi.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, tt = (i, t) => {
  const e = ge(i, "id", "first item"), s = ge(t, "id", "second item");
  if (e === null || s === null) return 0;
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
const hi = {
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
  AD: (i, t) => -zt(i, t),
  AA: zt,
  AAID: Di(
    zt,
    tt
  ),
  ADID: Di(
    (i, t) => -zt(i, t),
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
    return n !== 0 ? n : -zt(i, t);
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
    return !Vs(i) || !Vs(t) ? (console.warn(Hi.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Ys(t) || !Ys(e) ? (console.warn(Hi.missingLongSide), 0) : e[i] === t[i] ? -zt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function Fo(i) {
  return Ie(i) || Je(i) || Ts(i);
}
function _o(i, t, e) {
  var r, o;
  if (!e) return !0;
  const s = (r = t == null ? void 0 : t.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function Bo(i, t, e) {
  return e ? !C(i.t) || !C(t.t) ? !1 : Je(i) ? de.equalTo(i.t, t.t) : i.t === t.t : !0;
}
function qo(i, t, e) {
  return (e == null ? void 0 : e.stockType) !== "linear" || !Je(i) && !Ie(i) ? !0 : ls(i, 0, t) && de.equalTo(i.w, t.w) || ls(i, 1, t) && de.equalTo(i.l, t.w);
}
function jo(i, t, e, s = 0) {
  const n = Ie(i[0]), r = e.stockType;
  if (i.some((w) => C(w.stockLock) && w.stockLock.length)) return { stockList: t, shapeList: i, unusableShapes: [], unusableStock: [], newIssues: [] };
  n || (t = t.filter((w) => w.autoAdd === !0 || C(w.q) && w.q > 0));
  const l = t.some((w) => C(w.material)), a = t.some((w) => C(w.t)), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m = [];
  let I = s;
  for (const w of i) {
    w.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const F = Ho(w, t, e, l, a), q = w.stockMatch.fit, J = w.stockMatch.material, te = w.stockMatch.thickness, x = w.stockMatch.width, S = q.some(Boolean), E = !l || J.some(Boolean), Y = !a || te.some(Boolean), D = r === "linear" && x.some(Boolean);
    if (w.stockMatch.fit = S, w.stockMatch.material = E, w.stockMatch.thickness = Y, w.stockMatch.width = D, !n && F.length) {
      const _ = F.map((K) => K.getParentID());
      w.stockLock = _, _.forEach((K) => u.add(K));
    }
    if (!S) {
      d.add(w);
      const _ = new ae({
        category: ["part", "stock"],
        item: w,
        field: [["l"], ["w"]],
        index: [I],
        message: "errors.validation.will_not_fit"
      });
      m.push(_);
    }
    if (l && !E) {
      h.add(w);
      const _ = new ae({
        category: ["part", "stock"],
        item: w,
        field: [["material"]],
        index: [I],
        message: "errors.validation.no_matching_stock_material"
      });
      m.push(_);
    }
    if (a && !Y) {
      p.add(w);
      const _ = new ae({
        category: ["part", "stock"],
        item: w,
        field: [["t"]],
        index: [I],
        message: "errors.validation.no_matching_stock_thickness"
      });
      m.push(_);
    }
    if (r === "linear" && S && !D) {
      v.add(w);
      const _ = new ae({
        category: ["part", "stock"],
        item: w,
        field: [["w"]],
        index: [I],
        message: "errors.validation.no_matching_stock_width"
      });
      m.push(_);
    }
    I++;
  }
  i.forEach((w) => {
    w.stockMatch = null;
  });
  let B, A;
  return n ? (B = i.filter((w) => d.has(w) || v.has(w) || l && h.has(w) || a && p.has(w)).sort(hi.ID), A = []) : (B = i.filter((w) => d.has(w) || v.has(w) || !w.stockLock || !w.stockLock.length || // Include shapes that fail material/thickness when those constraints are active
  l && h.has(w) || a && p.has(w)).sort(hi.ID), A = t.filter((w) => !u.has(w.parentID)).sort(hi.ID), t = t.filter((w) => et(w)).filter((w) => u.has(w.parentID)), i = i.filter((w) => {
    var F;
    return !d.has(w) && !v.has(w) && (!l || !h.has(w)) && (!a || !p.has(w)) && ((F = w == null ? void 0 : w.stockLock) == null ? void 0 : F.length);
  })), {
    stockList: t,
    unusableStock: A,
    shapeList: i,
    unusableShapes: B,
    newIssues: m
  };
}
function Ho(i, t, e, s = !1, n = !1) {
  return t.filter((r, o) => {
    const l = {
      fit: Fo(i) && zi(i, r, void 0, e),
      material: _o(i, r, s),
      thickness: Bo(i, r, n),
      width: qo(i, r, e)
    };
    return Object.entries(l).forEach(([a, u]) => {
      i.stockMatch[a][o] = u;
    }), Object.values(l).every(Boolean);
  });
}
class ae {
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
    this.message = d ? Le(e) : e, this.field = s.map((h) => [...h]), this.index = n ? [...n] : [], this.listId = r ? [...r] : [], this.type = l, this.category = a, this.identifier = this.determineIdentifier(t, this.index), this.addToItemIssues(t), Array.isArray(o) && o.push(this);
    const v = `issue created for ${Vl(t)}: ${this.identifier || "N/A"} - ${this.field.map((h) => h.join(".")).join(", ")}`;
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
    const s = this.field.some((r) => Rr(r, t)), n = this.index.includes(e);
    return s && n;
  }
}
const Go = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Wo(i) {
  return Go[i] ?? i;
}
function It(i) {
  return i.filter((t) => t.type === "error");
}
function No(i, t) {
  return typeof i == "object" && i !== null && t in i;
}
function En(i) {
  return No(i, "issues") && Array.isArray(i.issues);
}
function Xs(i, t, e = !1) {
  var r;
  if (!En(i) || !((r = i.issues) != null && r.length))
    return !1;
  const s = e ? "warning" : "error";
  return i.issues.filter((o) => o.type === s).some((o) => {
    var l;
    return (l = o.field) != null && l.length ? o.field.some((a) => a.every((u, d) => u === Wo(t[d]))) : !1;
  });
}
const ti = ({
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
    if (d = k({ v: d }), o && (d === null || d === ""))
      return new ae({
        item: i,
        message: Le("errors.validation.not_set", {
          0: _e[t.join(".")]
        }),
        shouldTranslate: !1,
        field: [t],
        index: [e],
        type: a ? "warning" : "error",
        issues: s,
        category: u
      }), null;
    if (!l && d === 0)
      return new ae({
        item: i,
        message: Le("errors.validation.greater_than", {
          0: _e[t.join(".")],
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
  return Uo({ item: i, field: t, value: d, index: e, issues: s, min: n, isWarning: a ?? !1 }), zo({ item: i, field: t, value: d, index: e, issues: s, max: r, isWarning: a ?? !1 }), d;
}, On = ({
  item: i,
  field: t,
  value: e,
  index: s,
  issues: n,
  isWarning: r
}) => {
  new ae({
    item: i,
    message: Le("errors.validation.not_understood", {
      0: t.join("."),
      1: e
    }),
    shouldTranslate: !1,
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, Uo = ({
  item: i,
  field: t,
  value: e,
  index: s,
  issues: n,
  min: r,
  isWarning: o
}) => {
  typeof e != "number" || typeof r != "number" || e < r && new ae({
    item: i,
    message: Le("errors.validation.greater_than_or_equal", {
      0: _e[t.join(".")],
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
  typeof e != "number" || typeof r != "number" || e > r && new ae({
    item: i,
    message: Le("errors.validation.less_than_or_equal", {
      0: _e[t.join(".")],
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
    new ae({
      item: i,
      message: Le("errors.validation.must_be_string", {
        0: _e[t]
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
  e.includes(l) || new ae({
    item: i,
    message: Le("errors.validation.must_be_values", {
      0: _e[t],
      1: e.join(", ")
    }),
    shouldTranslate: !1,
    field: [[t]],
    index: [s],
    type: n ? "warning" : "error",
    issues: r
  });
}, Vo = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ti({
    item: i,
    field: ["x"],
    index: t,
    newIssues: r,
    min: 0,
    max: e,
    isWarning: s,
    category: n
  }), r;
}, Yo = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ti({
    item: i,
    field: ["y"],
    index: t,
    newIssues: r,
    min: 0,
    max: e,
    isWarning: s,
    category: n
  }), r;
}, Xo = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ti({
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
}, Ko = ({ item: i, index: t, max: e, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ti({
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
}, Zo = ({ item: i, index: t, max: e, isWarning: s = !1, saw: n, category: r = [] }) => {
  const o = [];
  return (n == null ? void 0 : n.cutType) === "beam" && (Pe(i, "t") || new ae({
    item: i,
    message: Le("errors.saw.thickness_required_for_beam_saw"),
    shouldTranslate: !1,
    field: [["t"]],
    index: [t],
    type: "error",
    issues: o,
    category: r
  })), ti({
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
}, Jo = ({ item: i, index: t, isWarning: e = !1, category: s = [] }) => {
  const n = [], r = Pe(i, "q");
  if (r == null) return n;
  try {
    const o = k({ v: r }), l = Pe(i, "autoAdd");
    o <= 0 && l !== !0 && new ae({
      item: i,
      message: Le("errors.validation.greater_than_or_equal", {
        0: _e.q,
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
}, Qo = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "orientationLock", ["l", "w"], t, e, s), s;
}, el = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "grain", ["l", "w"], t, e, s), s;
}, tl = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "banding");
  return n != null && (typeof n != "object" || n === null) && new ae({
    item: i,
    message: Le("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, il = ({ item: i, index: t, isWarning: e = !1, category: s = [] }) => {
  const n = [], r = Pe(i, "customData");
  if (r == null) return n;
  if (typeof r != "object" || r === null)
    return new ae({
      item: i,
      message: Le("errors.validation.must_be_object", {
        0: _e.customData
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
      ["string", "number", "boolean"].includes(l) || new ae({
        item: i,
        message: Le("errors.validation.must_be_string_number_boolean", {
          0: _e.customData
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
}, sl = ({
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
    const l = k({ v: t }), a = k({ v: r }), u = k({ v: o }), d = a - l * 2, v = u - l * 2;
    (d <= 0 || v <= 0) && new ae({
      item: i,
      message: Le("errors.trim.too_much", {
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
}, nl = ({
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
      ti({
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
        const v = k({ v: l }), h = k({ v: a }), p = (A) => {
          if (A == null) return 0;
          if (typeof A == "number" || typeof A == "string")
            try {
              return k({ v: A }) || 0;
            } catch {
              return 0;
            }
          return 0;
        }, m = {
          x1: p(Pe(u, "x1")),
          x2: p(Pe(u, "x2")),
          y1: p(Pe(u, "y1")),
          y2: p(Pe(u, "y2"))
        }, I = m.x1 + m.x2, B = m.y1 + m.y2;
        I >= v && new ae({
          item: i,
          message: Le("errors.trim.too_much", {
            0: `${_e.x1.toUpperCase()} + ${_e.x2.toUpperCase()}`,
            1: _e.l,
            2: v
          }),
          shouldTranslate: !1,
          field: [["trim", "x1"], ["trim", "x2"]],
          index: [t],
          type: n ? "warning" : "error",
          issues: o,
          category: r
        }), B >= h && new ae({
          item: i,
          message: Le("errors.trim.too_much", {
            0: `${_e.y1.toUpperCase()} + ${_e.y2.toUpperCase()}`,
            1: _e.w,
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
}, rl = ({
  item: i,
  inputStockList: t,
  saw: e,
  partTrim: s = 0,
  index: n
}) => {
  var v;
  const r = [], o = e.stockType, l = Pe(i, "q"), a = Pe(i, "l"), u = Pe(i, "w");
  return !l || !a || !u || ("applyPartTrim" in i && typeof i.applyPartTrim == "function" && i.applyPartTrim(s, o), En(i) && ((v = i.issues) != null && v.length)) || jo([i], t, e, n).newIssues.forEach((h) => {
    r.push(h);
  }), r;
}, ol = ({ item: i, index: t }) => {
  const e = Pe(i, "machining");
  e && "validateEverything" in e && e.validateEverything(i, t);
}, Ke = {
  customData: il,
  banding: tl,
  partTrim: sl,
  trim: nl,
  x: Vo,
  y: Yo,
  l: Xo,
  w: Ko,
  t: Zo,
  q: Jo,
  orientationLock: Qo,
  grain: el,
  stockMatch: rl,
  machining: ol
};
function rs(i) {
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
const Rt = [null, void 0, "none", ""], st = {
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
function ll(i) {
  var t;
  return ((t = st.cutTypes) == null ? void 0 : t[i]) ?? Rt;
}
function al(i, t) {
  var e, s;
  return ((s = (e = st.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? Rt;
}
function cl(i) {
  var t;
  return ((t = st.cutTypes) == null ? void 0 : t[i]) ?? [];
}
function ul(i, t) {
  var e, s;
  return ((s = (e = st.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? [];
}
function es() {
  return st.stockTypes;
}
function Mn(i) {
  return st.stockTypes.includes(i);
}
function Fn(i, t) {
  return ll(i).includes(t);
}
function _n(i, t, e) {
  return al(i, t).includes(e);
}
function mt(i, t, e, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!Ss(i)) {
    console.error(Le(e, s));
    return;
  }
  new ae({
    category: ["saw"],
    item: i,
    field: Array.isArray(t) ? t.map((n) => [n]) : [[t]],
    message: Le(e, s),
    shouldTranslate: !1
  });
}
class $t {
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
    t = _t(t), this.issues = [], e = e ?? (t == null ? void 0 : t.stockType) ?? es()[0], hl(this, t, e), this.bladeWidth = k({ v: t == null ? void 0 : t.bladeWidth }) ?? st.defaults.bladeWidth, this.stockType = e ?? (t == null ? void 0 : t.stockType) ?? es()[0], Mn(this.stockType) || (this.stockType = es()[0]), this.cutType = t == null ? void 0 : t.cutType, Fn(this.stockType, this.cutType) || (this.cutType = cl(this.stockType)[0]), this.cutPreference = t == null ? void 0 : t.cutPreference, _n(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = ul(this.stockType, this.cutType)[0]), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? st.defaults.stackHeight, this.guillotineOptions = Oi({}, t == null ? void 0 : t.guillotineOptions, st.defaults.guillotine), this.efficiencyOptions = Oi({}, t == null ? void 0 : t.efficiencyOptions, st.defaults.efficiency), this.options = Oi({}, t == null ? void 0 : t.options, st.defaults.options), this.options.minSpacing = k({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = k({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = k({ v: this.options.minSpacingDimension.minSpacing }) ?? 0;
  }
  clone() {
    const t = structuredClone(this);
    return new $t(t);
  }
  //does not cater for shape dimensions
  get minSpacing() {
    return this.cutType !== "efficiency" ? 0 : this.options.minSpacing;
  }
}
function hl(i, t, e) {
  var s, n, r, o, l, a, u, d, v, h;
  if (i.issues = [], C(t == null ? void 0 : t.bladeWidth) && (t.bladeWidth = typeof t.bladeWidth == "string" ? k({ v: t.bladeWidth }) : t.bladeWidth), (Tt(t.bladeWidth) || t.bladeWidth < 0) && mt(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: t.bladeWidth ?? "none" }
  ), !Mn(e)) {
    mt(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: e }
    );
    return;
  }
  t.cutType && !Fn(e, t.cutType) && mt(
    i,
    "cutType",
    "saw.validation.cutType.invalid",
    { cutType: t.cutType, stockType: e }
  ), t.cutType && t.cutPreference && !_n(e, t.cutType, t.cutPreference) && mt(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: t.cutPreference || "none",
      cutType: t.cutType || "none",
      stockType: e
    }
  ), (t == null ? void 0 : t.cutType) === "efficiency" && ((s = t == null ? void 0 : t.options) != null && s.minSpacing && (t.options.minSpacing = typeof t.options.minSpacing == "string" ? k({ v: t.options.minSpacing }) : t.options.minSpacing, (!C(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && mt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    { minSpacing: t.options.minSpacing }
  ), (Tt(t.options.minSpacing) || t.options.minSpacing < 0) && mt(
    i,
    "options.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacing: t.options.minSpacing ?? "none" }
  )), (n = t == null ? void 0 : t.options) != null && n.minSpacingDimension && (C((o = (r = t == null ? void 0 : t.options) == null ? void 0 : r.minSpacingDimension) == null ? void 0 : o.dimension) && (t.options.minSpacingDimension.dimension = typeof t.options.minSpacingDimension.dimension == "string" ? k({ v: t.options.minSpacingDimension.dimension }) : t.options.minSpacingDimension.dimension, (Tt(t.options.minSpacingDimension.dimension) || t.options.minSpacingDimension.dimension < 0) && mt(
    i,
    "options.minSpacingDimension.dimension",
    "saw.validation.minSpacing.dimension.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.dimension ?? "none" }
  )), (a = (l = t == null ? void 0 : t.options) == null ? void 0 : l.minSpacingDimension) != null && a.minSpacing && (t.options.minSpacingDimension.minSpacing = typeof t.options.minSpacingDimension.minSpacing == "string" ? k({ v: t.options.minSpacingDimension.minSpacing }) : t.options.minSpacingDimension.minSpacing, (Tt(t.options.minSpacingDimension.minSpacing) || t.options.minSpacingDimension.minSpacing < 0) && mt(
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
function Ss(i) {
  return i instanceof $t;
}
function os(i, t = !1) {
  var o, l, a, u;
  const e = typeof i.l == "string" ? k({ v: i.l }) : i.l, s = typeof i.w == "string" ? k({ v: i.w }) : i.w;
  if (!t || !Jn(i) || Qn(i) || Nl(i) && !(i != null && i.hasTrim))
    return { l: e, w: s };
  const n = k({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + k({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = k({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + k({ v: ((u = i == null ? void 0 : i.trim) == null ? void 0 : u.y2) ?? 0 });
  return {
    l: e - (typeof n == "string" ? k({ v: n }) : n),
    w: s - (typeof r == "string" ? k({ v: r }) : r)
  };
}
function dl(i, t) {
  var e, s, n, r;
  return Jn(i) && !Qn(i) && (t.l = t.l - (k({ v: ((e = i == null ? void 0 : i.trim) == null ? void 0 : e.x1) ?? 0 }) + k({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), t.w = t.w - (k({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + k({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), t;
}
function ts(i, t, e = !1) {
  let s = {
    l: k({ v: i.l }),
    w: k({ v: i.w })
  };
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return e && (s = dl(i, s)), n === t || ([s.l, s.w] = [s.w, s.l]), s;
}
function Bn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function fl(i) {
  Bn(i), [i.l, i.w] = [i.w, i.l];
}
function zi(i, t, e = null, s) {
  var h, p;
  if (!t || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && Ss(s) ? n = s.minSpacing : s && ((h = s == null ? void 0 : s.options) != null && h.minSpacing) ? n = k({ v: s.options.minSpacing }) : Ds(t) && (n = (p = t == null ? void 0 : t.saw) == null ? void 0 : p.minSpacing);
  const r = os(t, !0), o = os(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(m, I) {
    return de.equalTo(m, I) || de.lessThanOrEqualTo(m, I - n * 2);
  }
  function a(m) {
    return l(m.l, r.l) && l(m.w, r.w);
  }
  const u = xs(i, t);
  if (i.orientationLock || e !== null) {
    const I = ts(i, e ?? (u === "w" ? 1 : 0), !0);
    return a(I);
  }
  const d = ts(i, 0, !0);
  if (a(d)) return !0;
  const v = ts(i, 1, !0);
  return a(v);
}
function qn(i) {
  let t = null;
  return wt(i) || Ts(i) ? t = i.direction : (Je(i) || Ie(i)) && (t = i.orientationLock), t;
}
function xs(i, t) {
  const e = qn(i);
  return C(e) ? !t || wt(i) ? e : Ds(t) ? pl(i, t) : e : null;
}
function pl(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!Ds(t)) throw new Error("container is not a container");
  const e = qn(i);
  if (wt(i)) return e;
  if (!C(e)) return null;
  const s = t.getStock();
  return !s || !C(s == null ? void 0 : s.grain) ? e : e === (s == null ? void 0 : s.grain) ? "l" : "w";
}
function ls(i, t = null, e = null) {
  if (!C(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), jn(i) && t || e && !zi(i, e, t))
    return !1;
  const s = xs(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function as(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), ls(i, t, e) ? (i.rot === t || fl(i), !0) : !1;
}
function Qt(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !zi(i, e, t) ? !1 : as(i, t, e);
}
function gl(i, t) {
  if (!t)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const e = xs(i, t);
  return e === "l" ? Qt(i, 0) : e === "w" ? Qt(i, 1) : !1;
}
function ml(i) {
  return i.orientationLock === "l" ? Qt(i, 0) : i.orientationLock === "w" ? Qt(i, 1) : !1;
}
function jn(i) {
  Bn(i);
  const t = os(i);
  return de.equalTo(t.l, t.w);
}
function vl(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function di(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function yl(i) {
  return "y";
}
function bl(i, t) {
  const e = "l", s = yl();
  if (!(i != null && i.length)) return null;
  const n = i.reduce((o, l) => o[t] + o[e] > l[t] + l[e] ? o : l);
  return i.filter((o) => o[t] === n[t] && o[e] === n[e]).sort((o, l) => o[s] - l[s])[0];
}
class Xt {
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
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = wl(this), this.direction = Sl(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
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
function xt(i, t, e, s, n = null, r = null) {
  return new Xt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function wl(i) {
  return typeof i > "u" || !de.isNumber(i.x1) || !de.isNumber(i.x2) || !de.isNumber(i.y1) || !de.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function Sl(i) {
  return typeof i > "u" || !de.isNumber(i.x1) || !de.isNumber(i.x2) || !de.isNumber(i.y1) || !de.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function xl(i, t) {
  const e = i.getCorners(), s = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (s.bottomLeftDown = xt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    e.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = xt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    0,
    e.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), e.topLeft.x > 0 && e.topLeft.y < t.w && (s.topLeftLeft = xt(
    e.topLeft.x,
    e.topLeft.y,
    0,
    e.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = xt(
    e.topLeft.x,
    e.topLeft.y,
    e.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), e.topRight.y < t.w && e.topRight.x < t.l && (s.topRightTop = xt(
    e.topRight.x,
    e.topRight.y,
    e.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = xt(
    e.topRight.x,
    e.topRight.y,
    t.l,
    e.topRight.y,
    "topRight",
    "topRightRight"
  )), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (s.bottomRightRight = xt(
    e.bottomRight.x,
    e.bottomRight.y,
    t.l,
    e.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = xt(
    e.bottomRight.x,
    e.bottomRight.y,
    e.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const Ks = {
  runTests: !1
};
try {
  typeof Qi < "u" && Qi && (Qi.showDiff = !0);
} catch (i) {
  console.warn("Error accessing chaiConfig, skipping configuration:", i);
}
kn("tests");
kn("timers");
let Zt;
if (typeof Ws == "function")
  Zt = Ws;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const i = new Proxy({}, { get: () => () => i });
  Zt = () => i;
}
function Hn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function Gn(i = [], t = null) {
  i != null && i.length && Hn() && Ks && Ks.runTests;
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
const kl = Qe("errors");
Qe("allStock");
kl.color = 1;
function Cl(i) {
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
class Vi extends Xt {
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
    C(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Gt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.isGuillotine = e.isGuillotine, this.guillotineData = C(e.guillotineData) ? e.guillotineData : {}, this.ptxData = C(e.ptxData) ? e.ptxData : {}, this.isHead = C(e.isHead) ? e.isHead : !1, this.isTrim = C(e.isTrim) ? e.isTrim : !1, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1, this.distances = C(e.distances) ? e.distances : {};
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
    return Cl(this);
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
const Il = {
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
class Me {
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
    const s = new Me(t ?? this.x, e ?? this.y);
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
      const s = Il[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Li[this.corner] && (this.grid ? Li[this.corner][this.grid] && Li[this.corner][this.grid].forEach((s) => e.add(s)) : Li[this.corner].default.forEach((s) => e.add(s))), e) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => e.add(s)) : $i[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class jt {
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
  const r = Pl[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const Pl = {
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
function Tl(i, t, e) {
  var o, l, a, u, d, v;
  const s = new jt(), n = e.toArray().sort(Wn), r = t.getBladeWidth();
  if (n.forEach((h) => {
    const p = h.corner, m = h.type;
    if (!r)
      s.addPoint(h);
    else
      switch (p) {
        case "topRight":
          s.addPoint(
            me("top", h, r, p),
            m
          ), s.addPoint(
            me("right", h, r, p),
            m
          );
          break;
        case "topLeft":
          s.addPoint(
            me("top", h, r, p),
            m
          ), s.addPoint(
            me("left", h, r, p),
            m
          );
          break;
        case "bottomRight":
          s.addPoint(
            me("bottom", h, r, p),
            m
          ), s.addPoint(
            me("right", h, r, p),
            m
          );
          break;
        case "bottomLeft":
          s.addPoint(
            me("bottom", h, r, p),
            m
          ), s.addPoint(
            me("left", h, r, p),
            m
          );
          break;
      }
    const I = s.toArray();
    if (r)
      for (let B = I.length; B--; ) {
        const A = I[B];
        e.contains(A) && s.deletePoint(A);
      }
    else
      for (let B = I.length; B--; ) {
        const A = I[B];
        for (let w = i.length; w--; ) {
          const F = i[w];
          if (A.x === F.x && A.y === F.y) {
            s.deletePoint(A);
            break;
          }
        }
      }
  }), r) {
    const h = /* @__PURE__ */ new Set();
    let p, m, I, B;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (p = t.x, m = t.y, I = t.x + t.l, B = t.y + t.w) : (p = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), m = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), I = t.x + t.l - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.x2), B = t.y + t.w - ((v = t == null ? void 0 : t.trim) == null ? void 0 : v.y2));
    let A = s.toArray();
    for (let w = A.length; w--; ) {
      const F = A[w];
      (de.lessThan(F.x, p) || de.lessThan(F.y, m) || de.greaterThan(F.x, I) || de.greaterThan(F.y, B)) && A.splice(w, 1);
    }
    s.clear(), s.addPoints(A), h.clear(), A = s.toArray();
    for (let w = A.length; w--; ) {
      const F = A[w];
      for (let q = i.length; q--; ) {
        const J = i[q];
        if (F.collidesWith(J)) {
          s.deletePoint(F);
          break;
        }
      }
    }
  }
  return s;
}
function Dl(i, t, e) {
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
  const l = new jt();
  for (const a of s)
    a.raycast = !0, l.addPoints(zn(i, a, e).toArray());
  return Vn(i, e, l), l;
}
function Ll(i, t) {
  const e = new jt();
  return i.sort(Wn), i.forEach((s) => {
    wt(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function $l(i = [], t, e) {
  const s = Ll(
    i === null ? t : i,
    e
  );
  return Tl(
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
function Al(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new jt();
  const s = Un(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const d of u)
        El(
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
      const v = new Me(d.x2, d.y2);
      r === d.direction && (Nn(v, l, null, d.direction, "edge"), e.addPoint(v));
    }
  }), e = Ol(e), e;
}
function Un(i, t) {
  return i.map((e) => {
    const s = xl(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function El(i, t, e, s) {
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
      const m = r ? i[`${l}1`] : n, I = r ? n : i[`${l}1`], B = new Me(m, I), A = i.origin;
      Nn(B, t, e, i.direction, "shape", A), s.addPoint(B);
    }
  }
}
function Ol(i) {
  const t = new jt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = Rl(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function Rl(i, t) {
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
  const s = new jt(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = Ml(t, i, e), r) {
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
function Ml(i, t, e) {
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
  var a, u, d, v, h, p;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (d = t == null ? void 0 : t.trim) == null ? void 0 : d.x1, n = (v = t == null ? void 0 : t.trim) == null ? void 0 : v.y1, r = t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2) - i.l, o = t.w - ((p = t == null ? void 0 : t.trim) == null ? void 0 : p.y2) - i.w);
  const l = e.toArray();
  for (let m = l.length; m--; ) {
    const I = l[m];
    (de.lessThan(I.x, s) || de.lessThan(I.y, n) || de.greaterThan(I.x, r) || de.greaterThan(I.y, o) || I.x < 0 || I.y < 0) && e.deletePoint(I);
  }
}
function Fl(i, t, e) {
  if (!yi.includes(t) || !i.machining.corners) return 0;
  const s = Yn(i, t);
  return e * s;
}
function Yn(i, t) {
  if (!yi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Gi(i, t, e, s) {
  Object.keys(t).forEach((n) => {
    var r, o;
    n in i && ((r = t[n]) != null && r.min && k({ v: i[n] }) < k({ v: t[n].min }) ? e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${t[n].min}.`,
      fields: [n]
    }) : (o = t[n]) != null && o.max && k({ v: i[n] }) > k({ v: t[n].max }) && e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${t[n].max}.`,
      fields: [n]
    }));
  });
}
class cs {
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
    const s = k({ v: this.x });
    return t.rot ? e = t.l - k({ v: this.y }) + ("x" in t ? k({ v: t.x }) : 0) : e = s + ("x" in t ? k({ v: t.x }) : 0), e;
  }
  getYDrawPosition(t, e, s) {
    let n = t.rot ? k({ v: this.x }) : k({ v: this.y });
    return n += "y" in t ? k({ v: t.y }) : 0, e === 1 && (s ? n = k({ v: s.w }) - n : n = k({ v: t.w }) - n), n;
  }
  shouldShow(t, e) {
    return this.face === e || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || k({ v: this.depth }) >= k({ v: t.t });
  }
  getDistanceToEdge(t) {
    const e = this.x, s = this.y, n = this.diameter / 2, r = k({ v: t.getLongSide() }), o = k({ v: t.getShortSide() }), l = t.machining.corners.map((m) => m.type ? m.size : 0), a = [
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
      const B = I === 0 || I === 3, A = I < 2, w = B ? e : r - e;
      let F = null;
      this.face === 0 ? F = A ? s : o - s : this.face === 1 && (F = A ? o - s : s);
      const q = Math.sqrt(w * w + F * F);
      return {
        c: m,
        distance: q
      };
    }), d = Math.min(...a.map((m) => m.distance)), v = Math.min(...u.map((m) => m.distance)), h = u.findIndex((m) => m.distance === v), p = t.machining.corners[h];
    if (p && p.type === "radius") {
      let m = h === 0 || h === 3 ? 0 : r, I = h < 2 ? 0 : o;
      const B = h < 2;
      m += h === 0 || h === 3 ? l[h] : -l[h], I += B ? l[h] : -l[h];
      const w = e - m, F = h < 2;
      let q;
      this.face === 0 ? q = F ? s : o - s : this.face === 1 && (q = F ? o - s : s);
      const J = q - I, te = Math.sqrt(w * w + J * J), x = l[h] - te - n;
      let S = !1;
      return p.index === 0 ? S = e <= m && q <= I : p.index === 1 ? S = e >= m && q <= I : p.index === 2 ? S = e >= m && q >= I : p.index === 3 && (S = e <= m && q >= I), S && x < d ? x : d;
    } else if (p && p.type === "bevel") {
      let m, I, B;
      p.index === 0 ? (m = 1, I = 1, B = -p.size) : p.index === 1 ? (m = 1, I = -1, B = -r + p.size) : p.index === 2 ? (m = 1, I = 1, B = -r - o + p.size) : p.index === 3 && (m = -1, I = 1, B = -o + p.size);
      const A = p.index === 0 ? 1 : -1, w = (m * e + I * s + B) / Math.sqrt(m * m + I * I) * A - n;
      return w < d ? w : d;
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
    return k({ v: this.diameter }) <= 0 && n.push({
      index: e,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), k({ v: this.depth }) < 0 && n.push({
      index: e,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && k({ v: t.t }) > 0 && k({ v: this.depth }) > k({ v: t.t }) && n.push({
      index: e,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && k({ v: this.depth }) > 0 && n.push({
      index: e,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && n.push({
      index: e,
      message: "Outside of part."
    }), s && Gi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Zs {
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
    const t = k({ v: this.hingeLength }) - k({ v: this.outerSpacing }) * 2, e = this.numHoles - 1;
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
        s = t.getLongSide() - k({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = k({ v: this.position }) + k({ v: this.outerSpacing }) + n * e;
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
        s = k({ v: this.position }) + k({ v: this.outerSpacing }) + n * e;
        break;
      case "y1":
        s = k({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = t.getShortSide() - k({ v: this.distanceFromEdge });
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
    }), s && Gi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Js {
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
    return this.type && k({ v: this.size }) <= 0 && n.push({
      index: e,
      message: "Corner size cannot be zero or negative"
    }), this.type && k({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
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
    s && s.length === 4 ? this.corners = s.map((n) => new Js(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Js({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new cs(n))), e && (this.hingeHoles = e.map((n) => new Zs(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && (console.log(s), new ae({
      item: t,
      category: ["machining"],
      index: e,
      listId: Ie(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    })), n.length && new ae({
      category: ["machining"],
      item: t,
      index: e,
      listId: Ie(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new ae({
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
    minimumHoleDistance: u = 0,
    hingeLength: d = 0
  }) {
    const v = new Zs({
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
function ks(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function _l(i) {
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
      return new ae({
        category: ["group"],
        item: this,
        message: "errors.groups.min_parts"
      }), this.issues;
    const s = e[0];
    if (Je(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new ae({
          category: ["group"],
          item: this,
          message: "errors.groups.min_parts"
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new ae({
        category: ["group"],
        item: this,
        message: "errors.groups.min_parts"
      }), this.issues;
    if (e.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new ae({
        category: ["group"],
        item: this,
        field: [["orientationLock"]],
        message: Le("errors.groups.part_needs_orientation_lock", { 0: u + 1 }),
        shouldTranslate: !1
      });
    }), this.issues.length) return this.issues;
    const n = di(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const d = a.getTrimmedDimensions(!0)[n];
      de.equalTo(d, r) || new ae({
        category: ["group"],
        item: this,
        message: Le("errors.groups.dimension_not_correct", {
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
    if (!Je(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((d) => {
      const v = s.findIndex((h) => !h.inUserGroup && h.parentID === d.parentID);
      if (v === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(v, 1), ml(d), d.inUserGroup = !0;
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
      u = new ft(d);
    } catch (d) {
      return console.error(d), !1;
    }
    return u.parentID = `ug${t}`, n && u.updateShapeSpacing(n), u;
  }
}
function Lh(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new Cs(s));
  return t.length && Bl(e, t), e;
}
function Bl(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function ql(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function jl(i, t, e = !0) {
  const s = ql(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((u) => u.listId === r);
    l < 0 && new ae({
      category: ["group"],
      message: "errors.groups.no_parts",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new ae({
      category: ["group"],
      message: Le("errors.groups.not_enough_of_part", {
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
const bt = ["y1", "y2", "x1", "x2"], yi = ["a", "b", "c", "d"], Dt = [...bt, ...yi], yt = ["a", "b"];
function Kn(i) {
  return yi.includes(i);
}
function Hl(i) {
  return Dt.includes(i);
}
const _e = {
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
function Gl(i) {
  return bt.map((t) => i[t] ?? null);
}
function _t(i) {
  if (!C(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function $h({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    if (et(r)) return r;
    (s || r.preventAutoRotation) && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new Gt(r, e);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(hi.ID);
}
function Ah({
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
      s.shapes = s.shapes.map((l) => new At(l));
      try {
        n = new ft(s);
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
  }).sort(hi.ID);
}
function Eh({
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
function Oh({
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
function Wi(i, t, e = "decimal", s = !1) {
  return C(i == null ? void 0 : i[t]) ? k({ v: i[t], nf: e, pl: s }) : null;
}
class Is {
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
    t = _t(t), this.readonly = t.readonly, this.id = t.id, this.index = t == null ? void 0 : t.index, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ds(), ["l", "w", "t"].forEach((d) => this[d] = Wi(t, d, e, s)), this.q = C(t == null ? void 0 : t.q) ? Tt(Fi(t.q)) ? null : Fi(t.q) : null, this.autoAdd = C(t.autoAdd) ? t.autoAdd : !1, this.name = C(t.name) && ((o = t == null ? void 0 : t.name) != null && o.length) ? (l = bs(t == null ? void 0 : t.name)) == null ? void 0 : l.toUpperCase() : null, this.material = C(t.material) ? t.material.trim().toUpperCase() : "";
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
    const t = this.l > this.w ? this.l : this.w, e = this.l < this.w ? this.l : this.w, s = { l: k({ v: t }), w: k({ v: e }) };
    return {
      name: this.name,
      id: null,
      listId: this.listId,
      l: s.l - (k({ v: this.trim.x1 }) + k({ v: this.trim.x2 })),
      w: s.w - (k({ v: this.trim.y1 }) + k({ v: this.trim.y2 }))
    };
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  isSquare() {
    jn(this);
  }
  validate(t, e = null) {
    return this.issues = [], ["l", "w", "t", "grain"].forEach((s) => Ke[s]({ item: this, saw: t, index: e ?? this.index, category: "stock" })), Ke.trim({ item: this, index: e, category: ["stock"] }), ["q"].forEach((s) => Ke[s]({ item: this, index: e ?? this.index, isWarning: !0, category: "stock" })), this.issues = this.issues.filter((s) => s), this.issues;
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
      Dt.map((t) => [t, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...Dt,
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
    t = t = _t(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ds(), this.index = t == null ? void 0 : t.index, ["l", "w", "t"].forEach((h) => {
      this[h] = Wi(t, h, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? Tt(Fi(t.q)) ? null : Fi(t.q) : null, this.name = C(t.name) && ((r = t == null ? void 0 : t.name) != null && r.length) ? (o = bs(t == null ? void 0 : t.name)) == null ? void 0 : o.toUpperCase() : null, this.material = C(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, typeof ((l = t == null ? void 0 : t.notes) == null ? void 0 : l.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [], this.upDirection = (t == null ? void 0 : t.upDirection) ?? null;
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
          Dt.map((e) => [e, !1])
        );
        break;
    }
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  getLongSide() {
    return k({ v: this.l }) > k({ v: this.w }) ? k({ v: this.l }) : k({ v: this.w });
  }
  getShortSide() {
    return k({ v: this.l }) < k({ v: this.w }) ? k({ v: this.l }) : k({ v: this.w });
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
    let e = { l: k({ v: this.l }), w: k({ v: this.w }) };
    return t && (e = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: e.l - (k({ v: this.trim.x1 }) + k({ v: this.trim.x2 })),
      w: e.w - (k({ v: this.trim.y1 }) + k({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, e) {
    if (!this.readonly)
      if (t = k({ v: t }), this.trim) {
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
    if (this.issues = [], ["l", "w", "t"].forEach((o) => Ke[o]({ item: this, index: e ?? this.index, saw: r, category: ["part"] })), s = k({ v: s }), Ke.partTrim({ item: this, partTrim: s, index: e ?? this.index }), Ke.trim({ item: this, index: e ?? this.index, category: ["part"] }), Ke.machining({ item: this, index: e ?? this.index }), ["q"].forEach((o) => {
      Ke[o]({ item: this, index: e ?? this.index, isWarning: !0, category: ["part"] });
    }), t.length && !n) {
      const o = new $t(r);
      Ke.stockMatch({ item: this, inputStockList: t, saw: o, partTrim: s, index: e ?? this.index, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Ht {
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
    wt(this) && (s = ["x", "y", "t"]), t != null && t.infiniteLength || s.push("l"), s.forEach((n) => e.push(...Ke[n]({ item: t, index: this.index }))), this.issues.push(...Ke.customData({ item: t, index: this.index })), this.issues.push(...e.filter((n) => n));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = C(t.id) ? t.id.toString() : this.id || null, this.setParentID(), C(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = C(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = yo(bs(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, C(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = C(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = C(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && C(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.area = this.getArea(), this.offcut = C(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
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
      typeof a == "string" && (a = k({ v: a })), this[l.key] = a;
    }), !(t != null && t.infiniteLength) && !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = di(this.grain))), C(t == null ? void 0 : t.stock) && (et(t.stock) ? this.stock = t.stock : this.stock = new Gt(t.stock), this.stockId = this.stock.id), this.index = t.index;
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      bt.map((e) => [e, 0])
    ), !!ei(t, !0))
      for (const e of bt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = k({ v: t[e] });
          } catch {
            s = 0, new ae({ item: this, field: [["trim", e]], message: `${t[e] ?? "N/A"} is not a valid value for trim: ${e}` });
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
        return new Xt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Xt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Xt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Xt({
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
    const s = new Me(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Me(this.x, this.y + this.w);
    if (n.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !e)
      return [n, s];
    const r = new Me(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new Me(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, n, o, s];
  }
  getCorners() {
    return {
      bottomLeft: new Me(this.x, this.y),
      topLeft: new Me(this.x, this.y + this.w),
      topRight: new Me(this.x + this.l, this.y + this.w),
      bottomRight: new Me(this.x + this.l, this.y)
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !Tt(parseFloat(String(r)))).length && (C(this.l) && (this.l -= (C((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (C((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new ae({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), C(this.w) && (this.w -= (C((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (C((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new ae({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
    if (Je(this) && ((u = this.identicalTo) != null && u.length) && (this.parentID === t.parentID || this.identicalTo.includes(t.parentID)))
      return !0;
    if (wt(this)) {
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
    const s = new Ht({
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
    return zl(this);
  }
  isStock() {
    return et(this);
  }
  isGroup() {
    return wt(this);
  }
  isUserGroup() {
    return Ts(this);
  }
}
class Yi extends Ht {
  //used by evo
  constructor(e, s) {
    var n, r;
    super(e);
    // type: StockType;
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) || new ae({ item: this, field: [["type"]], message: `Container type ${((r = e == null ? void 0 : e.saw) == null ? void 0 : r.stockType) ?? "N/A"} is not valid`, shouldTranslate: !1 }), this.setSaw(e, s), this.cutType) {
      case "beam":
        (!C(this.t) || this.t <= 0) && new ae({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e, s) {
    var n, r, o, l;
    if (!(!e && !s)) {
      if (!s)
        if (C(e == null ? void 0 : e.saw)) {
          if (!((r = e == null ? void 0 : e.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: u } = rs(e.saw.cutPreference);
            e.saw.cutType = a, e.saw.cutPreference = u;
          }
        } else {
          e.saw = {};
          const { cutType: a, cutPreference: u } = rs(e.cutPreference);
          e.saw.cutType = a, e.saw.cutPreference = u, C(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), C((n = e == null ? void 0 : e.blade) == null ? void 0 : n.width) && (e.saw.bladeWidth = e.blade.width), C(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), C(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), C(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
        }
      try {
        const a = s ?? (e == null ? void 0 : e.saw);
        a && (Ss(a) ? this.saw = a : this.saw = new $t(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
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
    return Tt(e) ? 0 : e;
  }
  getStock() {
    return et(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Gt extends Yi {
  constructor(e, s) {
    var n;
    e = _t(e), e.preventAutoRotation = e.preventAutoRotation || ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
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
    e.autoAdd || ["q"].forEach((n) => s.push(...Ke[n]({ item: e, index: e == null ? void 0 : e.index }))), ["grain"].forEach((n) => s.push(...Ke[n]({ item: e, index: e == null ? void 0 : e.index }))), this.issues.push(...s.filter((n) => n));
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
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Gt(r);
  }
  getCroppedLength(e = [], s = 0) {
    if (!(e != null && e.length)) return;
    const n = bl(e.filter((o) => o.added && o.stock.id === this.id), "x"), r = n.x + n.l;
    if (r > this.l) throw new Error("Furthest shape position exceeds stock length");
    return de.equalTo(r, this.l) ? r : r + s;
  }
}
class Zn extends Ht {
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
class At extends Ht {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(e) {
    e = _t(e);
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
      Dt.map((e) => [e, !1])
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
    this.guillotineData = Oi({}, e == null ? void 0 : e.guillotineData, {
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
    return (e = this.guillotineData) != null && e.myStripParent && (Je(this.guillotineData.myStripParent) || wt(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o, l, a, u, d, v, h, p;
    const n = e.bladeWidth;
    if (e.cutType !== "efficiency")
      return s ? 0 : n;
    if (this.minSpacing > 0) return this.minSpacing;
    let r = (e == null ? void 0 : e.minSpacing) || 0;
    if (n > r && (r = n), (l = (o = e.options) == null ? void 0 : o.minSpacingDimension) != null && l.dimension && ((u = (a = e.options) == null ? void 0 : a.minSpacingDimension) != null && u.minSpacing)) {
      const m = (v = (d = e.options) == null ? void 0 : d.minSpacingDimension) == null ? void 0 : v.dimension;
      (this.l <= m || this.w <= m) && (r = ((p = (h = e.options) == null ? void 0 : h.minSpacingDimension) == null ? void 0 : p.minSpacing) || r);
    }
    return s && (r -= n), r < 0 && (r = 0), this.minSpacing = r, r;
  }
  validateShape(e) {
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...Ke[n]({ item: e, index: e == null ? void 0 : e.index }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
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
    e = _t(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Dt.map((s) => [s, !1])
    ), !!ei(e, !0))
      for (const s of Dt)
        this._banding[s] = C(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return Gl(this._banding);
  }
  get finish() {
    return this._finish;
  }
  set finish(e) {
    if (this._finish = Object.fromEntries(
      yt.map((s) => [s, ""])
    ), !!ei(e, !0))
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
    delete this.group, (e = this == null ? void 0 : this.guillotineData) == null || delete e.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, Dt.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), yt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), _l(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = di(e.grain)), Gn([
      () => Zt(this.isInsideStock(e), `shape ${this.id} is not inside stock ${e.id}`).to.be.true
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
    this.removeFromStock(), this.resetPosition(), Qt(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
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
    return !Hl(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : Kn(e) ? Yn(this, e) : 0;
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
    Qt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new At(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const e = this.cloneGuillotineData();
    return e.myStripParent = Ul(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
class Ps extends Yi {
  constructor(e) {
    var t = (...Nh) => (super(...Nh), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), c(this, "hasHeadCut"), c(this, "isInitial"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.parentID = C(e == null ? void 0 : e.parentID) ? e.parentID : null, this.shapes = C(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = C(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = C(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = C(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = C(e == null ? void 0 : e.parent) ? e.parent : null, this.children = C(e == null ? void 0 : e.children) ? e.children : [], this.siblings = C(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = C(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = C(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = C(e == null ? void 0 : e.cutDirection) ? e.cutDirection : null, this.hasBeamTrim = C(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1, this.hasHeadCut = C(e == null ? void 0 : e.hasHeadCut) ? e.hasHeadCut : !1, this.isInitial = C(e == null ? void 0 : e.isInitial) ? e.isInitial : !1);
  }
  validateSegment(e) {
    var s, n;
    (de.lessThanOrEqualTo(e.w, 0) || de.lessThanOrEqualTo(e.l, 0)) && new ae({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (de.lessThan(e.x, 0) || de.lessThan(e.y, 0)) && new ae({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (de.greaterThan(e.x + e.l, e.stock.l) || de.greaterThan(e.y + e.w, e.stock.w)) && new ae({
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
class ft extends At {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = _t(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
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
    const s = vl(this.direction);
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
    const r = di(this.direction), o = this.shapes.reduce(
      (l, a) => a[r] > l ? a[r] : l,
      0
    );
    if (this[r] = o, Hn()) {
      const l = this.shapes.slice(0, -1).reduce((d, v) => d + v.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((d, v) => d + v[this.direction], 0) + l;
      Gn([
        () => Zt(
          de.equalTo(u, this[this.direction]),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Zt(
          e,
          "currentPosition is incorrect in direction"
        ).to.equal(this[this.direction]),
        () => Zt(
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
      if (!as(s, n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = di(this.direction);
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
      if (n.x = this.x + r.x, n.y = this.y + r.y, !as(n, r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6), n.addToStock(e);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), gl(this, e);
  }
  clone(e = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new ft(a);
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
function Wl(i) {
  return i.shapes !== void 0;
}
function wt(i) {
  return i instanceof ft && i.type !== "user";
}
function Ts(i) {
  return i instanceof ft && i.type === "user";
}
function Mt(i) {
  return i instanceof Cs;
}
function Ft(i) {
  return i instanceof Is;
}
function Ie(i) {
  return i instanceof fi;
}
function Nl(i) {
  return i instanceof Ht;
}
function et(i) {
  return i instanceof Gt;
}
function Ds(i) {
  return i instanceof Yi;
}
function Je(i) {
  return i instanceof At && !(i instanceof ft);
}
function Ul(i) {
  return i instanceof At || i instanceof ft;
}
function zl(i) {
  return i instanceof Ps;
}
function Jn(i) {
  return Je(i) || et(i) || Ie(i) || Ft(i);
}
function Qn(i) {
  return Ie(i) || Ft(i) ? !1 : Je(i) || et(i) ? i.trimmed : !1;
}
function Vl(i) {
  return i instanceof ft ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof Cs ? "inputUserGroup" : i instanceof Is ? "inputStock" : i instanceof fi ? "inputShape" : i instanceof Gt ? "stock" : i instanceof Yi ? "container" : i instanceof At && !(i instanceof ft) ? "shape" : i instanceof Ps ? "segment" : i instanceof Zn ? "offcut" : i instanceof $t ? "saw" : i instanceof Ht ? "rectangle" : null;
}
function Qs(i, t) {
  return Mr(i, t);
}
function Ct(i, t) {
  return Pe(i, t);
}
function er(i, t, e) {
  Fr(i, t, e);
}
function C(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function ei(i, t = !1) {
  if (!C(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => C(s) && s) : e.some((s) => C(s));
}
function Fh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return Ft(e) && e.autoAdd ? s = 1 : s = C(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function _h(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = Yl(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function Yl(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Xl() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function us(i = 0, t, e = null, s = null, n = null) {
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
function en(i, t, e = null, s = null, n = null) {
  if (!Ie(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? us(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Kl(i) {
  i.banding && (i.banding = Ni(i.banding, "cc")), i.trim && (i.trim = Ni(i.trim, "cc"));
}
function Bh(i, t = 0) {
  return Je(i) || Ie(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Kl(i)), i;
}
function Ni(i, t = "cc", e = {
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
const { addNotice: ht } = vs(), {
  inputs: Oe,
  totalInputShapes: Zl,
  totalInputStock: Jl,
  createStockList: Ql,
  createShapeList: ea,
  validateInputShapes: ta,
  validateInputStock: tr,
  removeShape: tn,
  removeStock: sn
} = Pn(), ia = {
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
}, sa = () => {
  var i, t;
  if ((i = Oe == null ? void 0 : Oe.inputStock) != null && i.value) {
    for (let e = Oe.inputStock.value.length - 1; e >= 0; e--) {
      const s = Oe.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Oe.inputStock.value.length > 1 || e !== 0) && sn(s.listId);
    }
    if ((t = Oe == null ? void 0 : Oe.inputShapes) != null && t.value)
      for (let e = Oe.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Oe.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Oe.inputShapes.value.length > 1 || e !== 0) && tn(s.listId);
      }
  }
}, na = (i, t = !1) => {
  var s;
  if (!t) return [];
  const e = [];
  for (let n = Oe.inputShapes.value.length - 1; n >= 0; n--) {
    const r = Oe.inputShapes.value[n];
    if (!r) continue;
    if (!C(r.material)) {
      e.push(new ae({
        item: r,
        category: ["part"],
        message: "errors.field_validation.no_material",
        listId: [r.listId]
      }));
      continue;
    }
    const o = i.items.find((l) => l._id === r.material);
    (s = o == null ? void 0 : o.t) != null && s.length && (r.t ? o.t.includes(r.t) || e.push(new ae({
      item: r,
      category: ["part"],
      message: "errors.field_validation.invalid_thickness",
      listId: [r.listId]
    })) : e.push(new ae({
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
    ...ia,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, ra = (i = {}) => {
  const t = ir(i), e = t.t;
  sa();
  const s = [];
  t.useInventory || s.push(...tr(i == null ? void 0 : i.sawData)), s.push(...ta({
    saw: t.sawData,
    partTrim: k({ v: t.partTrim }),
    useInventory: t.useInventory,
    inputShapesOverride: t.inputShapes
  }));
  const n = It(s);
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
async function oa(i) {
  var n, r;
  const t = ir(i), e = t.t;
  let s = [];
  try {
    if (s = ra(t), s != null && s.length && s.some((m) => m.type === "error"))
      return { valid: !1, issues: s };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (Zl.value > t.maxShapes || Jl.value > t.maxStock))
      return t.onLimit(), { valid: !1, issues: s };
    if (t.useInventory) {
      const m = na(t.materialStore, !0), I = It(m);
      if (I.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "material" }),
          additional: I.map((B) => e(B.message))
        }), { valid: !1, issues: s };
    } else {
      const m = tr(), I = It(m);
      if (I.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "stock" }),
          additional: I.map((B) => e(B.message))
        }), { valid: !1, issues: s };
    }
    const o = t.useInventory ? new $t(t.selectedSaw) : new $t(t.sawData), l = It(o.issues);
    if (l.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "saw" }),
        additional: l.map((m) => e(m.message))
      }), { valid: !1, issues: s };
    const { stockList: a, issues: u } = await Ql(o), d = It(u);
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
    const { shapeList: v, issues: h } = await ea({
      orientationModel: t.orientationModel,
      trim: t.partTrim,
      inputShapesOverride: t.inputShapes
    }), p = It(h);
    if (p.length > 0)
      return ht({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "part" }),
        additional: p.map((m) => e(m.message))
      }), { valid: !1, issues: s };
    if (!(v != null && v.length))
      return ht({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: s };
    if (((r = (n = Oe.userGroups) == null ? void 0 : n.value) == null ? void 0 : r.length) > 0) {
      Oe.userGroups.value.forEach((B) => B.populateParentID(Oe.inputShapes.value));
      const m = jl(
        Oe.userGroups.value,
        Oe.inputShapes.value
      ), I = It(m);
      if (I.length > 0)
        return ht({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "group" }),
          additional: I.map((B) => e(B.message))
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
function la(i) {
  return !i || !ei(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function Ls(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function $s(i) {
  return `${i}Options`;
}
function aa(i, t, e) {
  const s = $s(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function ca(i, t, e = !0) {
  if (!Ls(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    As(i, t, r, e);
  e && sr(i, t, "all");
}
function As(i, t, e, s = !0) {
  s && sr(i, t, e), e !== "all" && Ls(i, t) && (i[t][e] = !1);
}
function sr(i, t, e) {
  if (!Ls(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function Es(i, t, e, s, n, r) {
  var d;
  const o = t + "Options";
  if (!((d = i == null ? void 0 : i[o]) != null && d[e]) || !(s in i[o][e])) return;
  pi(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((v) => v);
  if (!Array.isArray(a)) return;
  const u = Ui(i, t, e, r);
  pi(i, t, e, !!Ge(u));
}
function nr(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Ui(i, t, "all", r), u = i[o][e], d = Object.values(u || {}).filter((v) => v);
  for (const v of l)
    v !== "all" && (n.includes(v) || (Es(i, t, v, e, s, r), Array.isArray(d) || pi(i, t, v, !1), pi(i, t, v, !!Ge(a))));
}
function pi(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = $s(t), r = la((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Ui(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && Kn(e) && Ge(l) ? Fl(i, e, l) / 1e3 : l;
}
function qh(i) {
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
function ha(i) {
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
const da = { id: "mini-stock-nav" }, fa = ["onMousedown"], pa = { class: "id" }, ga = /* @__PURE__ */ Ae({
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
    return (r, o) => (y(), T("div", da, [
      (y(!0), T(we, null, $e(e.stockList, (l, a) => (y(), T("button", {
        key: a,
        class: Se(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: xe({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        O("div", pa, re(a + 1), 1),
        fs(O("div", { class: "stack legibility" }, re(l.stack), 513), [
          [ps, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, fa))), 128))
    ]));
  }
}), ii = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, ma = {
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
}, va = { id: "spinner" }, ya = ["width", "height"], ba = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function wa(i, t, e, s, n, r) {
  return y(), T("div", va, [
    e.complete ? U("", !0) : (y(), T("svg", {
      key: 0,
      class: "loading",
      style: xe({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      Wr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, ya)),
    e.complete ? (y(), T("svg", {
      key: 1,
      class: "complete",
      style: xe({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      O("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : U("", !0),
    e.showNumber ? (y(), T("div", ba, re(e.number), 1)) : U("", !0)
  ]);
}
const nn = /* @__PURE__ */ ii(ma, [["render", wa]]);
function Sa(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function xa(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function ka(i, t, e, s, n = []) {
  const r = xa(i, e, s);
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
const Ca = ["id"], Ia = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Pa = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = z(0), r = z(!1), o = (S, E, Y, D) => {
      if (!Ie(Y) || E === 0)
        return S;
      const _ = l();
      return E === 1 || E === 2 && D !== "n" && S ? _ : S;
    }, l = (S) => {
      const E = { ...e, ...S };
      if (!E.rectangle || !Ie(E.rectangle)) return "";
      let Y = "";
      switch (E.orientationModel) {
        case 0:
          Y = F.value;
          break;
        case 1:
          E.stockGrain === "y" || E.stockGrain === "n" ? Y = E.rectangle.l >= E.rectangle.w ? "l" : "w" : E.rectangle.l >= E.rectangle.w ? Y = E.stockGrain : Y = Y = E.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          Y = E.rectangle.l >= E.rectangle.w ? "l" : "w";
          break;
      }
      return Y;
    }, a = () => {
      if (e.disabled || A.value.length <= 1) return;
      let S = null;
      [1, 2].includes(e.orientationModel) ? S = v() : S = d(), n.value = S;
    }, u = (S) => {
      const E = A.value.findIndex((Y) => Y === S);
      return E === -1 ? 0 : E;
    }, d = () => {
      let S = 0;
      return S = u(F.value) + 1, S > A.value.length - 1 && (S = 0), S;
    }, v = () => {
      let S = 0;
      if (F.value)
        S = A.value.findIndex((E) => E === "");
      else {
        const E = l();
        S = A.value.findIndex((Y) => Y === E);
      }
      return S;
    }, h = (S) => {
      s("updateOrientation", S);
    }, p = () => {
      const S = F.value;
      switch (e.orientationModel) {
        case 0:
          return S ? e.stockGrain === "n" ? S || e.shapeOrientation || "default" : e.stockGrain === "w" ? S === "w" ? "w" : "l" : S === "l" ? "l" : "w" : "default";
        case 1:
          return S ? e.stockGrain === "n" ? S || e.shapeOrientation || "default" : e.stockGrain === "w" ? S === "w" ? "w" : "l" : S === "l" ? "l" : "w" : "default";
        case 2:
          return S ? e.stockGrain === "n" ? S || e.shapeOrientation || "default" : e.stockGrain === "w" ? S === "w" ? "w" : "l" : S === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, m = () => {
      if (!e.rectangle) return;
      const S = o(
        F.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (S !== F.value) {
        I(S);
        return;
      }
      if (n.value = u(F.value), !!Ie(e.rectangle)) {
        if (e.orientationModel === 1) {
          const E = J.value ? l() : F.value;
          I(E);
          return;
        }
        if (e.orientationModel === 2) {
          let E;
          J.value ? E = e.stockGrain !== "n" ? l() : "" : E = F.value, I(E);
        }
      }
    }, I = (S) => {
      n.value = u(S), h(S);
    }, B = () => {
      const S = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], E = ["l", "w", "y", "n"], Y = [0, 1, 2], D = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, _ = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, K = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, R = [];
      S.forEach((j) => {
        E.forEach((V) => {
          Y.forEach((ie) => {
            const le = new fi({
              l: j.l,
              w: j.w
            }), De = l({
              orientationModel: ie,
              rectangle: le,
              stockGrain: V
            });
            let We = "";
            le.l === le.w ? We = "l === w" : le.l > le.w ? We = "l >= w" : We = "w > l";
            const Ne = ["l", "w", "y"].includes(V) ? D : _;
            R.push({
              Model: ie,
              "Stock grain": V,
              "Stock grain description": K[V],
              Dimensions: We,
              "Orientation lock": De || "N/A",
              "Orientation Lock description": Ne[De] || "N/A"
            });
          });
        });
      }), R.sort((j, V) => {
        if (j.Model !== V.Model)
          return j.Model - V.Model;
        if (j["Stock grain"] !== V["Stock grain"])
          return j["Stock grain"].localeCompare(V["Stock grain"]);
        const ie = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return ie[j.Dimensions] - ie[V.Dimensions];
      }), console.table(R);
    }, A = se(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Mt(e.rectangle)) return ["l", "w"];
      let S = ["", "l", "w"];
      return e.rectangle.multiEdit && (S = [" ", "", "l", "w"]), w.value && (S = S.filter((E) => E !== "w")), S;
    }), w = se(() => {
      var S, E, Y, D;
      return Ie(e.rectangle) || Ft(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((S = e.rectangle) != null && S.l) && ((E = e.rectangle) != null && E.w) ? ((Y = e.rectangle) == null ? void 0 : Y.l) === ((D = e.rectangle) == null ? void 0 : D.w) : !1;
    }), F = se(() => {
      let S = "";
      return Mt(e.rectangle) ? S = e.rectangle.direction : Ie(e.rectangle) ? S = e.rectangle.orientationLock ?? "" : Ft(e.rectangle) && (S = e.rectangle.grain ?? ""), S;
    }), q = se(() => Mt(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), J = se(() => !q.value.l && !q.value.w), te = se(() => us(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), x = se(() => {
      var D;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (Ft(e.rectangle) || e.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[e.rectangle.grain] || "noGrain";
      const S = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, E = e.stockGrain || "default";
      let Y = "default";
      return Ie(e.rectangle) || e.rectangleType === "shape" ? Y = p() : Mt(e.rectangle) && (Y = e.rectangle.direction || "default"), ((D = S[E]) == null ? void 0 : D[Y]) || S[E].default;
    });
    return Te(n, (S, E) => {
      r.value && E !== void 0 && h(A.value[S]);
    }, { immediate: !1 }), Te(q, (S, E) => {
      if (!e.rectangle || e.orientationModel === 0 || !Ie(e.rectangle) || Ie(e.rectangle) && (e.orientationModel === 2 && E.l && E.w && !F.value || e.stockGrain === "n" && !F.value))
        return;
      const Y = l();
      F.value !== Y && h(Y);
    }, { immediate: !1 }), Te(() => e.stockGrain, (S, E) => {
      S !== E && m();
    }, { immediate: !0 }), rt(() => {
      m(), nt(() => {
        r.value = !0, e.debug && B();
      });
    }), (S, E) => (y(), T("div", {
      id: S.id,
      class: Se(["orientation-button", { rot: te.value, square: w.value, disabled: S.disabled, [x.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: xe({
        backgroundColor: S.buttonBackground
      }),
      onClick: a
    }, [
      x.value === "delete" ? (y(), T("svg", Ia, E[0] || (E[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : U("", !0),
      x.value === "freeRotation" ? (y(), T("svg", {
        key: 1,
        class: "arrow",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, E[1] || (E[1] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : U("", !0),
      x.value === "leftRight" ? (y(), T("svg", {
        key: 2,
        class: "arrow",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, E[2] || (E[2] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : U("", !0),
      x.value === "topBottom" ? (y(), T("svg", {
        key: 3,
        class: "arrow",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, E[3] || (E[3] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : U("", !0),
      x.value === "grainLeftRight" ? (y(), T("svg", {
        key: 4,
        class: "grain",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, E[4] || (E[4] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : U("", !0),
      x.value === "grainTopBottom" ? (y(), T("svg", {
        key: 5,
        class: "grain",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, E[5] || (E[5] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : U("", !0)
    ], 14, Ca));
  }
}), Ta = ["id"], Da = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = z({
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
      const a = en(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Ni(l, a, {
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
      const a = en(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
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
      e.disabled || s("clicked");
    };
    return rt(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), vi(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (y(), T("div", {
      id: l.id,
      class: Se(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      O("div", {
        class: Se(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        O("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Ta));
  }
}), rn = (i, t, e) => {
  if (t === "unitDependent" && e === "fraction") {
    if (/\/0$/.test(i))
      return {
        value: i,
        valid: !1,
        message: "division_by_zero"
      };
    const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(i), n = ws(i);
    return {
      value: i,
      valid: s || n
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
  const s = z({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (l, a = !1) => {
    if (l == null || l === "")
      return Ro(l, "decimal", i.required);
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
          return rn(u, i.type, i.numberFormat);
        try {
          const d = k({
            v: l,
            nf: i.numberFormat,
            dp: i.decimalPlaces,
            fr: i.fractionRoundTo
          });
          if (typeof d == "number") {
            let v = d, h = !0, p;
            return i.allowZero === !1 && v === 0 ? {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            } : (typeof i.min == "number" && v < i.min && (v = i.min, h = !1, p = "below_min"), typeof i.max == "number" && v > i.max && (v = i.max, h = !1, p = "above_max"), { value: v, valid: h, message: p });
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
          return rn(u, i.type);
        try {
          const v = k({
            v: l,
            nf: "decimal"
          });
          if (v === null)
            return i.required ? { value: null, valid: !1, message: "field_required" } : { value: null, valid: !0 };
          let h = v;
          if (i.type === "integer" && (h = Math.round(h)), i.allowZero === !1 && h === 0)
            return {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            };
          let p = !0, m;
          return typeof i.min == "number" && h < i.min && (h = i.min, p = !1, m = "below_min"), typeof i.max == "number" && h > i.max && (h = i.max, p = !1, m = "above_max"), { value: h, valid: p, message: m };
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
  }, r = (l, a = !1) => a && i.type === "unitDependent" && i.numberFormat === "fraction" ? !1 : !!(l.valid || l.message === "below_min" || l.message === "above_max" || l.message === "field_required");
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
          if (!ws(v)) {
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
            const p = n(v, !0);
            t("validation", p, i.id), t("input", v);
          }
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
  const s = z({
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
function Aa({
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
const Ea = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Oa = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = z(!0), r = z(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: a,
      handleFocus: u,
      handleBlur: d,
      handleKeydown: v,
      handleCompositionStart: h,
      handleCompositionEnd: p,
      handlePaste: m
    } = La({
      props: e,
      emit: s,
      isMounted: n
    }), I = (B) => {
      const A = B.getBoundingClientRect(), w = window.getComputedStyle(B);
      return A.width > 0 && A.height > 0 && w.display !== "none" && w.visibility !== "hidden";
    };
    return rt(() => {
      (C(e.default) && e.value === void 0 || e.value === null) && s("update:value", e.default), e.focus && r.value && I(r.value) && nt(() => r.value.focus());
    }), vi(() => {
      n.value = !1;
    }), (B, A) => (y(), T("input", ci(B.$attrs, {
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
      onInput: A[0] || (A[0] = //@ts-ignore
      (...w) => P(o) && P(o)(...w)),
      onFocus: A[1] || (A[1] = //@ts-ignore
      (...w) => P(u) && P(u)(...w)),
      onBlur: A[2] || (A[2] = //@ts-ignore
      (...w) => P(d) && P(d)(...w)),
      onKeydown: A[3] || (A[3] = //@ts-ignore
      (...w) => P(v) && P(v)(...w)),
      onCompositionstart: A[4] || (A[4] = //@ts-ignore
      (...w) => P(h) && P(h)(...w)),
      onCompositionend: A[5] || (A[5] = //@ts-ignore
      (...w) => P(p) && P(p)(...w)),
      onPaste: A[6] || (A[6] = //@ts-ignore
      (...w) => P(m) && P(m)(...w)),
      onMousedown: A[7] || (A[7] = //@ts-ignore
      (...w) => P(l) && P(l)(...w)),
      onMouseup: A[8] || (A[8] = //@ts-ignore
      (...w) => P(a) && P(a)(...w))
    }), null, 16, Ea));
  }
}), Ra = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ma = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = z(!0), r = z(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = Aa({
      props: e,
      emit: s,
      isMounted: n
    });
    return (u, d) => (y(), T("input", {
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
    }, null, 40, Ra));
  }
}), Fa = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], _a = ["disabled", "selected"], Ba = {
  key: 0,
  value: " "
}, qa = ["hidden", "value", "disabled"], ja = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = z(!0), r = z(null), o = se(() => e.options.map((a) => {
      var u, d, v;
      return {
        value: a.value,
        label: ((u = a.label) == null ? void 0 : u.toUpperCase()) ?? ((v = (d = a.value) == null ? void 0 : d.toString()) == null ? void 0 : v.toUpperCase()),
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
    return (a, u) => {
      var d, v, h, p;
      return y(), T("select", ci(a.$attrs, {
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
        O("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, re(((v = (d = e.text) == null ? void 0 : d.select) == null ? void 0 : v.toUpperCase()) ?? "SELECT"), 9, _a),
        e.multiEdit ? (y(), T("option", Ba, re(((p = (h = e.text) == null ? void 0 : h.delete) == null ? void 0 : p.toUpperCase()) ?? "DELETE"), 1)) : U("", !0),
        (y(!0), T(we, null, $e(o.value, (m) => (y(), T("option", {
          key: m.value,
          hidden: m.hidden,
          value: m.value,
          disabled: m.disabled
        }, re(m.label), 9, qa))), 128))
      ], 16, Fa);
    };
  }
}), Ha = ["for"], Ga = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, on = /* @__PURE__ */ Ae({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (y(), T("label", {
      for: t.id,
      class: "input-label"
    }, [
      Kt(re(t.label) + " ", 1),
      t.required ? (y(), T("span", Ga, "*")) : U("", !0)
    ], 8, Ha));
  }
}), Wa = ["data-field-id"], Na = ["disabled", "selected"], Ua = {
  key: 0,
  value: " "
}, za = ["hidden", "value", "disabled"], Lt = /* @__PURE__ */ Ae({
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
    const e = t, s = i, n = z(null), r = z(null), o = z(!0), l = z(s.numberFormat), a = se(() => s.custom ? "custom-" + s.id : s.id), u = se(() => `${a.value}-error`), d = se(() => s.label || s.placeholder), v = se(() => x(s.type, s.numberFormat)), h = se(() => S(s.type, s.numberFormat)), p = se(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), m = se(() => {
      let D = s.value;
      if (s.type !== "unitDependent" || !D) return D;
      try {
        return k({ v: D, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), I = se(() => s.options.map((D) => {
      var _, K;
      return {
        value: D.value,
        label: ((_ = D.label) == null ? void 0 : _.toUpperCase()) || ((K = D.value) == null ? void 0 : K.toString().toUpperCase()),
        hidden: D.hidden || !1,
        disabled: D.disabled || !1
      };
    })), B = se(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), A = se(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": d.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), w = se(() => ({
      ...A.value,
      type: s.type,
      inputMode: h.value,
      inputType: v.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default
    })), F = se(() => ({
      ...A.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), q = se(() => ({
      ...A.value,
      options: I.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), J = (D) => {
      r.value = D;
    }, te = (D) => s.label && s.enableLabel && s.labelPosition === D, x = (D, _) => {
      if (D === "unitDependent")
        return _ === "fraction" ? "text" : "number";
      switch (D) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, S = (D, _) => {
      if (D === "unitDependent")
        return _ === "fraction" ? "text" : "decimal";
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
    }, E = (D) => {
      e("update:value", D);
    }, Y = (D, _) => {
      D.valid === void 0 || D.valid === !0 ? (o.value = !0, e("validation", n.value, D)) : D.valid === !1 && D.message && (o.value = !1, console.warn(`Field validation error for field ${_} - ${D.message}`), e("validation", n.value, D));
    };
    return Te(() => s.numberFormat, (D, _) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && D !== _ && s.value)
          try {
            const K = k({ v: s.value, nf: D });
            e("update:value", K);
          } catch {
            e("update:value", D === "decimal" ? 0 : "0");
          }
        l.value = D;
      }
    }), (D, _) => (y(), T("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Se(["input-wrapper", B.value]),
      "data-field-id": a.value
    }, [
      te("first") ? (y(), ye(on, {
        key: 0,
        id: a.value,
        label: D.label,
        required: D.required
      }, null, 8, ["id", "label", "required"])) : U("", !0),
      p.value ? (y(), ye(Oa, ci({
        key: 1,
        ref: J
      }, w.value, {
        "input-type": v.value,
        "input-mode": h.value,
        value: m.value,
        onValidation: Y,
        "onUpdate:value": E
      }), null, 16, ["input-type", "input-mode", "value"])) : D.type === "checkbox" ? (y(), ye(Ma, ci({
        key: 2,
        ref: J,
        type: "checkbox"
      }, F.value, {
        checked: D.value === D.trueValue,
        "onUpdate:value": _[0] || (_[0] = (K) => e("update:value", K))
      }), null, 16, ["checked"])) : D.type === "select" ? (y(), ye(ja, ci({
        key: 3,
        ref: J
      }, q.value, {
        "onUpdate:value": _[1] || (_[1] = (K) => e("update:value", K))
      }), {
        default: gs(() => {
          var K, R, j, V;
          return [
            O("option", {
              value: "",
              disabled: D.selectFirstOptionDisabled,
              selected: !D.value
            }, re(((R = (K = D.text) == null ? void 0 : K.select) == null ? void 0 : R.toUpperCase()) ?? "SELECT"), 9, Na),
            D.multiEdit ? (y(), T("option", Ua, re(((V = (j = D.text) == null ? void 0 : j.delete) == null ? void 0 : V.toUpperCase()) ?? "DELETE"), 1)) : U("", !0),
            (y(!0), T(we, null, $e(I.value, (ie) => (y(), T("option", {
              key: ie.value,
              hidden: ie.hidden,
              value: ie.value,
              disabled: ie.disabled
            }, re(ie.label), 9, za))), 128))
          ];
        }),
        _: 1
      }, 16)) : U("", !0),
      te("last") ? (y(), ye(on, {
        key: 4,
        id: a.value,
        label: D.label,
        required: D.required
      }, null, 8, ["id", "label", "required"])) : U("", !0),
      Nr(D.$slots, "default")
    ], 10, Wa));
  }
}), Va = {
  key: 0,
  class: "inputs"
}, Ya = { class: "label" }, Xa = { class: "label" }, Ka = { class: "label" }, Za = ["onClick"], Ja = { class: "price" }, Qa = ["aria-label"], hs = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = z(!1), r = se(() => e.extraType + "Options"), o = se(() => {
      var m;
      if (!((m = e.allOptions) != null && m.length)) return "auto";
      const h = e.allOptions.length;
      return h ? `repeat(${h + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), l = (h, p) => {
      s("update-all", e.shape, e.extraType, h, p);
    }, a = (h, p, m) => {
      s("set", e.shape, e.extraType, h, p, m);
    }, u = (h, p, m, I, B) => {
      var q;
      if (!h) return [];
      const A = (q = p == null ? void 0 : p[m]) == null ? void 0 : q[I];
      if (!A)
        return console.error(`ExtrasInputs: cannot find pricing options for ${m} > ${I}`), [];
      const w = Object.values(A);
      if (!w.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${m} > ${I}`), [];
      const F = w.filter((J) => typeof J == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(h, F, B) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, d = (h) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const p = e.getPrice(e.shape, e.extraType, h);
      return p ? e.formatPrice(p) : "";
    }, v = () => {
      const h = [];
      e.extraType in e.shape || new ae(
        {
          item: e.shape,
          message: `The extra type '${e.extraType}' does not exist in the part`
        }
      ), r.value in e.shape || new ae(
        {
          item: e.shape,
          message: `The options key '${r.value}' does not exist in the part`
        }
      ), h.length && (n.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + h.map((p) => p.message).join(" ")));
    };
    return rt(() => v()), (h, p) => {
      var I, B, A, w, F, q, J, te;
      const m = Bt("font-awesome-icon");
      return n.value ? U("", !0) : (y(), T("div", {
        key: 0,
        class: Se(["extras group", [h.extraType]]),
        style: xe({ "grid-column-end": "span " + h.partColumns })
      }, [
        h.allOptions.length === 1 && h.allOptions[0].length === 1 ? (y(), T("div", Va, [
          O("div", Ya, re((B = (I = h.allOptions) == null ? void 0 : I[0]) == null ? void 0 : B[0]), 1),
          O("div", null, [
            (A = h.shape) != null && A[r.value] && "all" in h.shape[r.value] ? (y(), ye(Lt, {
              key: 0,
              id: `${h.extraType}-all-${h.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: P(W)("general.all"),
              "true-value": (F = (w = h.allOptions) == null ? void 0 : w[0]) == null ? void 0 : F[0],
              "false-value": "",
              value: (J = h.shape[r.value].all) == null ? void 0 : J[(q = h.labels) == null ? void 0 : q[0]],
              "onUpdate:value": p[0] || (p[0] = (x) => {
                var S, E;
                a("all", (S = h.labels) == null ? void 0 : S[0], x), l((E = h.labels) == null ? void 0 : E[0], x);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : U("", !0)
          ]),
          (y(!0), T(we, null, $e(h.extraKeys, (x) => {
            var S, E, Y, D, _, K;
            return y(), T("div", { key: x }, [
              (S = h.labels) != null && S[0] && ((Y = (E = h.shape) == null ? void 0 : E[r.value]) != null && Y[x]) && h.labels[0] in h.shape[r.value][x] ? (y(), ye(Lt, {
                key: 0,
                id: `${h.extraType}-${x}-${h.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: P(W)(((D = h.userFriendlyFieldMap) == null ? void 0 : D[x]) || x),
                "true-value": (K = (_ = h.allOptions) == null ? void 0 : _[0]) == null ? void 0 : K[0],
                "false-value": "",
                value: h.shape[r.value][x][h.labels[0]],
                "onUpdate:value": (R) => a(x, h.labels[0], R)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : U("", !0)
            ]);
          }), 128))
        ])) : (y(), T("div", {
          key: 1,
          class: "grid inputs",
          style: xe({
            "grid-template-columns": o.value
          })
        }, [
          (te = h.shape) != null && te[r.value] && "all" in h.shape[r.value] ? (y(), T(we, { key: 0 }, [
            O("div", Xa, re(P(W)("general.all")), 1),
            (y(!0), T(we, null, $e(h.allOptions, (x, S) => {
              var E, Y;
              return y(), ye(Lt, {
                id: `${h.extraType}-all-${h.labels[S]}-${S}-${h.shapeIndex}`,
                key: `${h.extraType}-all-${h.labels[S]}-${S}-${h.shapeIndex}`,
                type: "select",
                disabled: u(h.pricing, h.shape, r.value, "all", S).length === 0,
                options: u(h.pricing, h.shape, r.value, "all", S).map((D) => ({ value: D, label: D })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (Y = h.shape[r.value].all) == null ? void 0 : Y[(E = h.labels) == null ? void 0 : E[S]],
                "onUpdate:value": (D) => {
                  var _, K;
                  a("all", (_ = h.labels) == null ? void 0 : _[S], D), l((K = h.labels) == null ? void 0 : K[S], D);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            p[2] || (p[2] = O("div", null, null, -1)),
            p[3] || (p[3] = O("div", null, null, -1))
          ], 64)) : U("", !0),
          (y(!0), T(we, null, $e(h.extraKeys, (x) => {
            var S, E;
            return y(), T(we, { key: x }, [
              (S = h.shape) != null && S[r.value] && x in h.shape[r.value] ? (y(), T(we, { key: 0 }, [
                O("div", Ka, re(P(W)(((E = h.userFriendlyFieldMap) == null ? void 0 : E[x]) || x)), 1),
                (y(!0), T(we, null, $e(h.allOptions, (Y, D) => {
                  var _;
                  return y(), ye(Lt, {
                    id: `${h.extraType}-${x}-${h.labels[D]}-${D}-${h.shapeIndex}`,
                    key: `${h.extraType}-${x}-${h.labels[D]}-${D}-${h.shapeIndex}`,
                    type: "select",
                    disabled: u(h.pricing, h.shape, r.value, x, D).length === 0,
                    options: u(h.pricing, h.shape, r.value, x, D).map((K) => ({
                      value: K,
                      label: K
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: h.shape[r.value][x][(_ = h.labels) == null ? void 0 : _[D]],
                    "onUpdate:value": (K) => {
                      var R;
                      return a(x, (R = h.labels) == null ? void 0 : R[D], K);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : U("", !0),
              O("div", {
                class: "delete",
                onClick: () => P(As)(h.shape, h.extraType, x)
              }, [
                ve(m, { icon: ["fass", "trash"] })
              ], 8, Za),
              O("div", Ja, re(d(x) || P(W)("general.na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        O("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": `${P(W)("actions.delete")} ${P(ss)(P(W)("woodwork." + h.extraLabel))}`,
          onClick: p[1] || (p[1] = () => P(ca)(h.shape, h.extraType, !0))
        }, [
          ve(m, { icon: ["fass", "trash"] }),
          Kt(" " + re(`${P(W)("actions.delete")} ${P(ss)(P(W)("woodwork." + h.extraLabel))}`), 1)
        ], 8, Qa)
      ], 6));
    };
  }
}), ec = ["id", "disabled"], tc = { class: "icon" }, ic = /* @__PURE__ */ Ae({
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
      const l = Bt("font-awesome-icon");
      return y(), T("button", {
        id: r.id,
        class: Se(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (v = (d = r.inputShape) == null ? void 0 : d.finish) == null ? void 0 : v.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        O("div", tc, [
          ve(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = O("div", { class: "indicator" }, null, -1))
      ], 10, ec);
    };
  }
}), sc = Ae({
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
}), nc = ["id", "disabled"];
function rc(i, t, e, s, n, r) {
  const o = Bt("font-awesome-icon");
  return y(), T("button", {
    id: i.id,
    class: Se(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    ve(o, { icon: ["fass", "hammer"] })
  ], 10, nc);
}
const oc = /* @__PURE__ */ ii(sc, [["render", rc]]), lc = { id: "uploader" }, ac = {
  key: 0,
  class: "debug"
}, cc = {
  key: 1,
  class: "selected-files"
}, uc = ["src"], hc = ["onClick"], dc = !0, fc = /* @__PURE__ */ Ae({
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
    const e = Pt(() => Promise.resolve().then(() => Ki)), s = z(null), n = z({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (p) => ["image/jpeg", "image/jpg", "image/png"].includes(p.type), a = () => {
      var p;
      (p = s.value) == null || p.click();
    }, u = (p) => {
      const m = p.target, I = m.files;
      if (!I) return;
      const B = Array.from(I), A = B.filter((S) => !l(S));
      if (A.length > 0) {
        const S = A.map((E) => E.name).join(", ");
        alert(`Invalid file type(s): ${S}
Only JPG and PNG files are allowed.`), m.value = "";
        return;
      }
      const w = n.value.files || [];
      if (w.length + B.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), m.value = "";
        return;
      }
      const q = [...w, ...B], J = d(q), te = q.map((S, E) => ({
        originalName: S.name,
        newName: `${r.prefix}-${E + 1}-${r.uniqueId}${v(S.name)}`
      })), x = {
        shapeId: r.shapeId,
        files: q,
        previewUrls: J,
        metadata: te
      };
      n.value = x, o("update", x), m.value = "";
    }, d = (p) => p.map((m) => URL.createObjectURL(m)), v = (p) => p.substring(p.lastIndexOf(".")), h = (p) => {
      URL.revokeObjectURL(n.value.previewUrls[p]);
      const m = [...n.value.files], I = [...n.value.previewUrls], B = [...n.value.metadata];
      if (m.splice(p, 1), I.splice(p, 1), B.splice(p, 1), m.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const A = {
          shapeId: r.shapeId,
          files: m,
          previewUrls: I,
          metadata: B
        };
        n.value = A, o("update", A);
      }
    };
    return Ur(() => {
      var p;
      (p = n.value) != null && p.previewUrls && n.value.previewUrls.forEach((m) => URL.revokeObjectURL(m));
    }), rt(() => {
      n.value.shapeId = r.shapeId;
      const p = r.images.find((m) => m.shapeId === r.shapeId);
      if (p) {
        const m = d(p.files);
        n.value = {
          ...p,
          previewUrls: m
        };
      }
    }), (p, m) => {
      var B;
      const I = Bt("font-awesome-icon");
      return y(), T("div", lc, [
        i.env === "development" && dc ? (y(), T("div", ac, [
          ve(P(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        O("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        O("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          ve(I, { icon: ["fass", "files"] })
        ]),
        (B = n.value.files) != null && B.length ? (y(), T("div", cc, [
          (y(!0), T(we, null, $e(n.value.files, (A, w) => (y(), T("div", {
            key: w,
            class: "selected-file"
          }, [
            O("img", {
              src: n.value.previewUrls[w],
              alt: "Preview"
            }, null, 8, uc),
            O("button", {
              class: "remove-file",
              type: "button",
              onClick: (F) => h(w)
            }, [
              ve(I, { icon: ["fass", "trash"] })
            ], 8, hc)
          ]))), 128))
        ])) : U("", !0)
      ]);
    };
  }
}), pc = /* @__PURE__ */ ii(fc, [["__scopeId", "data-v-0836e586"]]);
function gc(i) {
  var a, u;
  const t = i.x, e = i.x + i.l, s = it().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = it().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(_i(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(_i(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((u = (a = i == null ? void 0 : i.stock) == null ? void 0 : a.saw) == null ? void 0 : u.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(Bi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(Bi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function mc() {
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
    e === "x" ? vc.call(this, r, o, t[n]) : yc.call(this, r, o, t[n]);
  });
}
function vc(i, t, e) {
  const s = it().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = or(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(_i(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, d;
    return ((d = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : d.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function yc(i, t, e) {
  const s = it().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = or(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Bi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  bc(r), this.axes.cutMeasurementYAxes.push(r);
}
function or(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function bc(i) {
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
function gi() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function wc() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Xi() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Sc() {
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
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : k({ v: i.l, o: this.numberConfig }).toString();
}
function un(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : k({ v: i.w, o: this.numberConfig }).toString();
}
function xc(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = $l(
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
    s = Al(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new jt();
  for (const r of e.toArray()) {
    const o = zn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = Dl(i, o, this.props.stock.value);
      l && n.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new Me(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Me(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Me(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      0 + (this.props.stock.value.trim.y1 ?? 0)
    ),
    new Me(
      0 + (this.props.stock.value.trim.x1 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    ),
    new Me(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    )
  ].forEach((r) => n.addPoint(r)), t = n.toArray()) : (n.addPoint(new Me(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), t = n.toArray());
  for (let r = t.length; r--; ) {
    const o = t[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        t.splice(r, 1);
        break;
      }
  }
  return kc.call(this, t, i), Cc.call(this, t, i), !!(t != null && t.length);
}
function kc(i, t) {
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
      n.stopPropagation(), Fe(this).classed("hover", !0), Fe(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Fe(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Cc(i, t) {
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
      n.stopPropagation(), Fe(this).classed("hover", !0);
      const r = Fe(this).attr("data-id"), o = Fe(`.ghost[data-id="${r}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Fe(this).classed("hover", !1);
      const r = Fe(this).attr("data-id");
      Fe(`.ghost[data-id="${r}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
const Ic = (i) => i.id;
function Pc() {
  if (!this.props.containerWidth) return;
  gi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && Dc.call(this), Tc.call(this);
}
function Tc() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Ic).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return hn.call(this, t), dn.call(this, t), t.on("mousedown", fn.bind(this)), t;
    },
    (i) => (hn.call(this, i), dn.call(this, i), i.on("mousedown", fn.bind(this)), i),
    (i) => i.remove()
  ), Mc.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Sc.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Dc() {
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
  this.scales.scoreColorScale = ui([dt(251, 224, 255), dt(122, 0, 138)]).domain([e, s]);
}
function hn(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => mi.call(this, e));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Ln(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function Lc(i) {
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
    const e = Fe(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    const s = Fe(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", mi.call(this, e));
  }, { passive: !0 });
}
function fn(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && $c.call(this, i, t), (this.settings.app || this.settings.embed) && Oc.call(this, i, t), this.state.device === "desktop" && (Xi.call(this), gc.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function $c(i, t) {
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
        ], Ec.call(this, t);
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
    console.table(Ac(t, e)), console.log(t.bestScore.score);
  }
}
function Ac(i, t) {
  return t.reduce((e, s) => {
    const n = Yc(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function Ec(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function Oc(i, t) {
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
      color: mi.call(this, t),
      notes: t == null ? void 0 : t.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function mi(i) {
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
function Rc(i) {
  const t = [];
  for (const e of i)
    if (e.added && (e != null && e._banding))
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = Lc.call(this, s));
        const o = Fc.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function pn(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Ei.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Ei.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Ei.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Ei.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Mc(i) {
  if (!this.settings.main) return;
  const t = Rc.call(this, i);
  if (t.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t, (e, s) => s).join(
    (e) => e.append("line").call((s) => pn.call(this, s)),
    (e) => e.call((s) => pn.call(this, s)),
    (e) => e.remove()
  );
}
function Ei(i, t) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[t]) ?? 0;
}
function Fc(i, t) {
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
function _c(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const gn = (i) => i.id;
function mn(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function vn(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Bc() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), mc.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], gn).join(
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
  ), this.state.env === "development" && qc.call(this, s), !this.settings.app && this.state.env === "development" && jc.call(this);
}
function bn(i) {
  return i.classed("offcut", (t) => t.offcut).classed("near", (t) => t.segmentType === "near").classed("far", (t) => t.segmentType === "far").classed("parent", (t, e) => t.id !== "root" && e === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function qc(i) {
  this.selections.segmentGroup.selectAll("text").data(i, lr).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => wn.call(this, e)),
    (t) => t.call((e) => wn.call(this, e)),
    (t) => t.remove()
  );
}
function wn(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function jc() {
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
const { currentCutIndex: cr } = ys();
function Hc() {
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
function Gc(i, t, e, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] || !s && r.guillotineData.parentSegmentID === t ? "visible" : "hidden"), cr.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (r) => {
    var o;
    return (o = r == null ? void 0 : r.ptxData) == null ? void 0 : o.isDummy;
  }), s || Nc.call(this, i, t);
}
function Wc(i, t, e, s, n) {
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
  }), gi.call(this), Xi.call(this);
}
function Nc(i, t) {
  var v, h, p, m;
  const e = (v = i == null ? void 0 : i.guillotineData) == null ? void 0 : v.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (I) => ur(I, t, e)), this.selections.cutLines.classed("inside-segment", (I) => hr(I, t));
  const s = ar.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = fr(i, r);
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
  ], a = [(p = i == null ? void 0 : i.distances) == null ? void 0 : p.left, (m = i == null ? void 0 : i.distances) == null ? void 0 : m.right]), this.state.device === "desktop" && !i.isTrim && a && rr.call(this, l, a, d);
}
function Uc(i = null, t = "") {
  var p, m, I, B;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const A = this.props.cuts.value.filter((w) => w.isTrim);
    i = i + A.length, i - A.length >= this.props.cuts.value.length - A.length && (cr.value = this.props.cuts.value.length - A.length - 1);
  }
  const e = this.props.cuts.value[i];
  if (!e) return;
  if (gi.call(this), Xi.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const A = this.selections.cutLines.nodes()[i].parentElement;
    if (!A) return;
    Fe(A).raise();
  }
  const s = (p = e.guillotineData) == null ? void 0 : p.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (m = e == null ? void 0 : e.stock) == null ? void 0 : m.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((I = e == null ? void 0 : e.stock) == null ? void 0 : I.cutType) && s !== null && typeof s < "u" ? Gc.call(this, e, s, l, t) : Wc.call(this, e, i, o, r, n), zc.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = ar.call(this, e);
  if (a === !1) return;
  const { parent: u, children: d } = a;
  if (!((B = e == null ? void 0 : e.guillotineData) != null && B.parentSegmentID))
    return yn.call(this, { parent: u });
  const { near: v, far: h } = fr(e, d);
  yn.call(this, { parent: u, near: v, far: h });
}
function fr(i, t) {
  const e = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = t.find((o) => o.segmentType === "near" && o[e] + o[s] === i[e + "1"] - i.halfBladeWidth()), r = t.find((o) => o.segmentType === "far" && o[e] === i[e + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function zc(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (ur(s, e, l) || hr(s, e)) && (o += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Vc(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Yc(i, t) {
  return Pe(i, t);
}
class Xc {
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
    c(this, "formatNumber", (t) => k({
      v: t,
      o: this.numberConfig
    }).toString());
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Fe(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: it(),
      yScale: it(),
      yPositionScale: it(),
      xPositionScale: it(),
      yAxisScale: it(),
      measurementScale: it(),
      shapeColorScale: ui(),
      scoreColorScale: ui()
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
    }, s = (n, r) => dt("#" + (Vc(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = ui([
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
      this.selections.svgCanvas = Fe(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, e, s) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), e && (this.numberConfig.decimalPlaces = e), s && (this.numberConfig.fractionRoundTo = s));
  }
  trimNameToFit(t, e) {
    function s(n, r, o) {
      const l = o[r], a = Fe(l);
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => mi.call(this, s));
    const e = Fe(t).select("rect");
    if (e) {
      e.classed("selected", !0), e.style("fill", this.config.colors.partSelected.toString());
      const s = Fe(t).datum();
      this.callbacks.onShapeSelect(s);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Pc.call(this);
  }
  drawStock() {
    Bc.call(this);
  }
  drawCuts() {
    Hc.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), gi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), wc.call(this);
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
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => mi.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    gi.call(this);
  }
  updateShapeVisibility() {
    _c.call(this);
  }
  drawPositions(t) {
    xc.call(this, t);
  }
  showCut(t) {
    Uc.call(this, t);
  }
  resetCuts() {
    dr.call(this);
  }
}
const Kc = ["id"], Zc = /* @__PURE__ */ Ae({
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
    moveMode: { default: () => z(!1) }
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
    } = ys(), p = i, m = e, I = (ne) => {
      m("part-click", ne);
    }, B = (ne) => {
      m("shape-colour-update", ne);
    }, A = (ne) => {
      ne != null && ne.id && m("shape-select", ne.id.toString());
    }, w = (ne) => {
      ne && m("add-to-parts-bin", ne);
    }, F = (ne, Ue) => {
      ne && m("move-shape", ne, Ue);
    }, q = z(0), J = z(0), te = z(null);
    let x, S = z(!1);
    rt(() => j());
    const E = se(() => ({
      format: p.numberFormat,
      decimals: p.decimalPlaces
    })), Y = se(() => p.stockId ? u(p.stockId) : n.value), D = se(() => p.stockId ? d(p.stockId) : r.value), _ = se(() => p.main ? p.stockId ? h(p.stockId) : o.value : []), K = se(() => p.main ? p.stockId ? v(p.stockId) : l.value : []);
    In(te, (ne) => {
      const Ue = ne[0], { width: oe } = Ue.contentRect;
      oe > 0 && (q.value = oe);
    }), zr(
      q,
      (ne) => {
        x && (ne <= 0 || (x.setDevice(), x.resetShapeAxes(), x.drawAll(), a.value !== null && (x.toggleSegments(!0), x.showCut(a.value))));
      },
      { throttle: 100 }
    );
    let R = !1;
    Te(() => Y.value, (ne) => {
      ne && (q.value <= 0 || (R = !0, x.setDevice(), x.resetCuts(), x.removeSegments(), x.drawStock(), x.drawShapes(), x.drawCuts(), nt(() => {
        R = !1;
      })));
    }, { immediate: !1 }), Te(() => D.value, (ne) => {
      R || ne && (q.value <= 0 || (x.setDevice(), x.drawShapes()));
    }, { immediate: !1, deep: !0 }), p.main && (Te(() => _.value, () => {
      R || q.value <= 0 || x.drawCuts();
    }, { immediate: !1, deep: !0 }), Te(a, () => {
      a.value !== null && (q.value <= 0 || (x.toggleSegments(!0), x.showCut(a.value)));
    }, { immediate: !1 }), Te(E, (ne) => {
      x.updateNumberFormat(ne.format, ne.decimals, null);
    }, { immediate: !1 }));
    const j = () => {
      const ne = {
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
          containerHeight: J,
          containerWidth: q,
          stock: Y,
          shapes: D,
          cuts: _,
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
          onShapeColourUpdate: B,
          onShapeSelect: A,
          onAddToPartsBin: w,
          onMoveShape: F,
          onPartClick: I
        }
      };
      x = new Xc(ne), S.value = !0;
    };
    return t({
      loaded: S,
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
    }), (ne, Ue) => (y(), T("div", {
      id: ne.elementId,
      ref_key: "diagramContainerRef",
      ref: te,
      class: Se([{ app: ne.app }, "diagram-container"])
    }, null, 10, Kc));
  }
}), Jc = {
  key: 0,
  class: "debug"
}, Qc = { key: 2 }, eu = {
  key: 0,
  class: "row table-heading"
}, tu = {
  key: 0,
  class: "cell center"
}, iu = {
  key: 1,
  class: "cell delete"
}, su = { class: "cell" }, nu = ["id", "disabled", "onClick"], ru = {
  key: 0,
  class: "cell center"
}, ou = ["onClick"], lu = {
  key: 1,
  class: "cell"
}, au = ["aria-label", "onClick"], cu = { class: "button-wrapper main" }, uu = ["aria-label"], hu = ["aria-label", "disabled"], du = ["aria-label"], fu = { id: "part-count" }, pu = {
  key: 3,
  id: "messages"
}, gu = {
  key: 0,
  class: "heading"
}, mu = { class: "content" }, vu = {
  key: 4,
  id: "progress"
}, yu = { id: "diagram-wrapper" }, bu = {
  key: 0,
  id: "stack"
}, wu = !1, Su = /* @__PURE__ */ Ae({
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
    const s = Pt(() => Promise.resolve().then(() => Ou)), n = Pt(() => Promise.resolve().then(() => Mu)), r = Pt(() => Promise.resolve().then(() => eh)), o = Pt(() => Promise.resolve().then(() => oh)), l = Pt(() => Promise.resolve().then(() => Ki)), { inputs: a, totalInputShapes: u, getShapeGrainSummary: d, updateNumberFormat: v, validateInputStock: h } = Pn(), { r: p, updateFromResult: m, stackedStock: I, uniqueAddedShapes: B, uniqueUsedStock: A, activeStockId: w, activeStock: F, setActiveStockId: q } = ys(), { progress: J, reset: te } = oo(), { addNotice: x } = vs(), { tip: S, update: E, hide: Y } = no(), D = i, _ = e, K = z(!1), R = "production", j = z((navigator == null ? void 0 : navigator.language) || "en-US"), V = Vr(null), ie = window.location.hostname, le = z(!1), ke = z(!0), De = Yr("Checkout/currentURL", window.location.href), We = ds(), Ne = z([]), ot = z(!1), lt = z(!1), M = z(!1), si = z(!1), Wt = z(!1), ne = z(Xl()), Ue = z(!1), { socket: oe } = ro({
      refs: {
        connected: le,
        thinking: M
      },
      callbacks: {
        onResult(f) {
          var $, G, X, ce, ue;
          const g = f.result;
          if (m(g), !(($ = g.shapeList) != null && $.length) || !((G = g.stockList) != null && G.length)) {
            te(), x({
              type: "error",
              message: W("errors.calculation.no_result"),
              additional: [W("errors.validation.check_inputs")]
            }), M.value = !1;
            return;
          }
          const b = {
            jobId: f.jobId,
            metadata: p.metadata.value,
            parts: B.value.map((H) => {
              var Z, pe, N;
              return {
                l: H.l,
                w: H.w,
                t: H == null ? void 0 : H.t,
                material: H.material,
                orientationLock: H.orientationLock,
                q: (pe = (Z = p.metadata.value) == null ? void 0 : Z.addedPartTally) == null ? void 0 : pe[H.parentID],
                name: H.name,
                banding: H.banding,
                finish: H.finish,
                customData: H.customData,
                stockId: ((N = H == null ? void 0 : H.stock) == null ? void 0 : N.id) || (H == null ? void 0 : H.stockId)
              };
            }),
            stock: A.value.map((H) => {
              var Z, pe;
              return {
                id: H.id,
                name: H == null ? void 0 : H.name,
                l: H.l,
                w: H.w,
                t: H == null ? void 0 : H.t,
                material: H.material,
                q: (pe = (Z = p.metadata.value) == null ? void 0 : Z.usedStockTally) == null ? void 0 : pe[H.parentID],
                trim: H == null ? void 0 : H.trim,
                cost: H == null ? void 0 : H.cost,
                analysis: H == null ? void 0 : H.analysis
                // type: s?.type
              };
            }),
            offcuts: p.offcuts.value.map((H) => ({
              l: H.l,
              w: H.w,
              t: (H == null ? void 0 : H.t) ?? null,
              q: H.q,
              stockId: H.stockId
            })),
            inputs: {
              parts: a.inputShapes.value.map((H) => {
                const Z = { ...H };
                return delete Z.listId, Z;
              })
            }
          };
          if ((ue = (ce = (X = p == null ? void 0 : p.metadata) == null ? void 0 : X.value) == null ? void 0 : ce.unplacedParts) != null && ue.length) {
            const H = p.metadata.value.unplacedParts.map((Z) => Z.id).join();
            x({
              type: "warning",
              message: W("woodwork.parts_not_fit") + ": " + H
            });
          }
          _("result", b), M.value = !1;
        },
        onUser(f) {
          V.value = f;
        },
        onConnectError(f) {
          x({
            type: "error",
            message: W("errors.network.cannot_connect"),
            additional: [f]
          });
        },
        onError(f) {
          x({
            type: "error",
            message: W("errors.general.error_occurred"),
            additional: [f]
          });
        }
      }
    }), Be = {
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
    }, ee = vt(Be), he = vt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), at = z(null), pt = z(!1), ni = z(""), bi = z(""), ze = vt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Ve = z([]), qe = z([]), Et = z([]), Ze = vt({
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
    }), be = vt({
      labels: [],
      pricing: {},
      options: [],
      keys: bt
    }), Ee = vt({
      labels: [],
      pricing: {},
      options: [],
      keys: ["a", "b"]
    }), ri = vt({
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
    }), Nt = z([]), wi = se(() => {
      var g;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "woodwork.material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (g = Ve.value[0]) == null ? void 0 : g.name,
          options: Ve.value.map((b) => ({
            value: b.name,
            label: b.name
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
      ], ...Nt.value];
    }), St = se(() => ka(
      ri,
      wi.value,
      "parts",
      he.stockType,
      ee.fieldOrder
    )), L = se(() => {
      let f = St.value.length + 1;
      return a.inputShapes.value.length > 1 && f++, f;
    }), Q = se(() => {
      const f = {
        id: "34px",
        del: "30px"
      }, g = [];
      for (const b of St.value)
        b.id !== "trim" && g.push(b.w ?? "minmax(20px, 1fr)");
      return g.unshift(f.id), a.inputShapes.value.length > 1 && g.push(f.del), g.join(" ");
    }), fe = se(() => ({
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
    })), Ce = se(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), Xe = se(() => {
      var f, g;
      return V.value ? !(V.value && ((g = (f = V.value) == null ? void 0 : f.api) != null && g.whiteLabel)) : !0;
    }), Re = {
      stockType: (f) => {
        const g = ["sheet", "linear", "roll"];
        g.includes(f) || console.warn(`${f} is not a valid stockType, expected ${g.join("|")}`), he.stockType = f, f === "linear" && (he.cutType = null, he.cutPreference = null);
      },
      stockSelection: (f) => {
        const g = ["efficiency", "smallest"];
        f && !g.includes(f) ? console.warn(`${f} is not a valid stockSelection, expected ${g.join("|")}`) : he.options.stockSelection = f;
      },
      minSpacing: (f) => {
        he.options.minSpacing = f;
      },
      stackHeight: (f) => {
        he.stackHeight = f;
      },
      cutPreference: (f) => {
        const g = ["efficiency", "length", "width", "beam"];
        if (g.includes(f)) {
          const { cutType: b, cutPreference: $ } = rs(f);
          he.cutType = b, he.cutPreference = $;
        } else
          console.warn(`SmartCut - cut preference ${f || "N/A"} is not one of ${g.join("|")}`);
      },
      guillotineOptions: (f) => {
        he.guillotineOptions = f;
      },
      bladeWidth: (f) => {
        f >= 0 ? he.bladeWidth = f : console.warn(`SmartCut - you provided an incorrect blade width of: ${f}`);
      },
      maxParts: (f) => {
        ee.maxParts = f;
      },
      locale: (f) => {
        j.value = f.replace(/_/g, "-");
      },
      enable: (f) => {
        const g = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in Be.enable)
          b in f && (ee.enable[b] = f[b]);
        for (const b in g)
          je(b, Ct(f, [g[b]]) ?? Be.enable[g[b]]);
        Wt.value = Ct(f, ["csvImport"]) ?? Be.enable.csvImport;
      },
      colors: (f) => {
        for (const g in Be.colors)
          g in f && (ee.colors[g] = f[g]);
      },
      orientationModel: (f) => {
        if (![0, 1, 2].includes(f)) {
          ee.orientationModel = 0;
          return;
        }
        ee.orientationModel = f;
      },
      numberFormat: (f) => {
        if (!["decimal", "fraction"].includes(f)) {
          ee.numberFormat = "decimal";
          return;
        }
        ee.numberFormat = f;
      },
      customFields: (f) => {
        if (!Array.isArray(f) || !(f != null && f.length)) return;
        const g = [];
        f.forEach((b, $) => {
          g.push(b), g[$].custom = !0;
          const G = ct(b.id);
          g[$].id = G, g[$].fieldMap = "customData." + G, b.type === "checkbox" && (g[$].w = "32px"), b.type === "select" && (g[$].output = b.output ?? "string", g[$].options = b.options);
        }), Nt.value = g;
        for (const b of a.inputShapes.value)
          b.customData = f.reduce(($, G) => {
            const X = ct(G.id);
            return $[X] = b.customData[X] || G.default || "", $;
          }, {});
      }
    }, Ot = (f) => {
      if (D.debug && _("log", ["checkout init...", f]), f != null && f.options) {
        const b = f.options;
        ha(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((X) => {
          X in b || _("error", `${X} is a required option`);
        });
        const G = ["enable", "colors"];
        for (const X in b)
          G.includes(X) || (ee[X] = b[X]), X in Re && Re[X](b[X]);
      }
      f.colors && "colors" in Re && Re.colors(f.colors), Hs("banding", f), Hs("finish", f), Ut(f), vr(f), lt.value = !0, D.debug && _("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), nt(() => {
        Xe.value && !xr() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Si = (f, g) => {
      f && (f.orientationLock = g);
    }, je = (f, g = !1) => {
      Sa(ri, "parts", he.stockType, f, g);
    }, ct = (f) => f ? vo(f).toLowerCase() : null, He = (f, g, b, $) => {
      if (g.valid) {
        if (Y(), b && $) {
          const G = b.issues.findIndex((X) => X.field.some((ce) => ce.length === $.length && ce.every((ue, H) => ue === $[H])));
          G !== -1 && b.issues.splice(G, 1);
        }
      } else
        E({
          referenceEl: f,
          show: !0,
          content: W(`errors.field_validation.${g.message}`),
          type: "error"
        });
    }, Ut = (f) => {
      var g, b, $, G, X;
      if (Ct(ee, ["enable", "machining"]) && f != null && f.machining) {
        for (const ce in Ze)
          f.machining[ce] && (Ze[ce] = f.machining[ce]);
        if (["holes", "hingeHoles"].forEach((ce) => {
          var ue, H;
          (ue = f == null ? void 0 : f.machining) != null && ue[ce] && (Ze[ce].enabled = (H = f == null ? void 0 : f.machining) == null ? void 0 : H[ce].enabled);
        }), ($ = (b = (g = f == null ? void 0 : f.machining) == null ? void 0 : g.corners) == null ? void 0 : b.types) != null && $.length && (Ze.corners.enabled = !0, Ze.corners.types = f.machining.corners.types), f.banding && ((X = (G = f == null ? void 0 : f.options) == null ? void 0 : G.enable) != null && X.banding)) {
          if (!be) return;
          Ze.banding = {
            enabled: !0
          }, be.options.length && (Ze.banding.options = be.options), be.labels.length && (Ze.banding.labels = be.labels), ei(be.pricing) && (Ze.banding.pricing = be.pricing);
        }
      }
    }, Zi = (f = null) => {
      at.value = f, f && f.l && f.w ? K.value = !0 : alert(W("machining.enter_dimensions_first"));
    }, pr = () => {
      K.value = !1;
    }, Os = (f = []) => {
      if (qe.value = [], Et.value = [], je("t", !1), !!f.length) {
        for (const g of f)
          if (g != null && g.t)
            if (typeof g.t == "string" && g.t.includes(",")) {
              const b = Rs(g.t, !0);
              b.length === 2 ? (yr(b), je("t", !0), g.t = qe.value[0]) : _("error", "bonded thickness found which does not have 2 options");
            } else qe.value.includes(g.t) || qe.value.push(g.t);
        qe.value.length > 1 && je("t", !0);
      }
    }, gr = (f) => {
      var G;
      if (!f) return { thicknesses: [], bondedThicknesses: [] };
      if (!((G = Ve.value) != null && G.length))
        return {
          thicknesses: qe.value,
          bondedThicknesses: []
        };
      if (!f.material) return { thicknesses: [], bondedThicknesses: [] };
      const g = Ve.value.find((X) => X.name === f.material);
      if (!g) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...g.thicknesses], $ = [];
      for (let X = 0; X < b.length; X++) {
        const ce = b[X], ue = Rs(ce), H = [];
        if (ue.length) {
          for (const Z of ue)
            b[X] = Z, H.push(X);
          X++;
        }
        H.length && $.push(H);
      }
      return {
        thicknesses: b,
        bondedThicknesses: $
      };
    }, mr = (f) => gr(f).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), vr = (f) => {
      var g, b;
      if ((g = f == null ? void 0 : f.stock) != null && g.some(($) => $ == null ? void 0 : $.material)) {
        Ve.value = [], qe.value = [], Et.value = [];
        const $ = /* @__PURE__ */ new Map();
        for (const G of f.stock) {
          if (!G.material) continue;
          const X = G.material.toUpperCase();
          $.has(X) || $.set(X, /* @__PURE__ */ new Set()), G.t != null && ((b = $.get(X)) == null || b.add(k({ v: G.t })));
        }
        Ve.value = Array.from($.entries()).map(([G, X]) => ({
          name: G,
          thicknesses: Array.from(X).sort((ue, H) => ue - H)
        })), Ve.value.length > 1 && je("material", !0);
      } else
        Os(f.stock);
    }, yr = (f, g = null) => {
      if (!Array.isArray(f)) {
        _("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let $ of f)
        ee.numberFormat === "decimal" && ($ = parseFloat($)), qe.value.push($), g && g.thicknesses.push($), b.push(qe.value.length - 1);
      Et.value.push(b);
    }, Rs = (f, g = !1) => {
      if (typeof f == "string" && f.includes(",")) {
        const b = f.split(",");
        return g ? b.map(($) => k({ v: $ })) : b;
      }
      return [];
    }, br = () => {
      Ue.value ? Sr() : wr();
    }, wr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Ue.value = !0;
    }, Sr = () => {
      document.exitFullscreen && document.exitFullscreen(), Ue.value = !1;
    }, xr = () => {
      var $, G;
      if ((G = ($ = V.value) == null ? void 0 : $.api) != null && G.whiteLabel) return !0;
      let f = !0;
      const g = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [g, b].forEach((X, ce) => {
        if (!X) return f = !1;
        const ue = window.getComputedStyle(X);
        if (ue.display === "none" || ue.display === "hidden" || ue.opacity === "0" || ue.color === "transparent" || ue.position !== "relative" || ce === 1 && ue.color !== "#4e4e4e" && ue.color !== "rgb(78, 78, 78)")
          return f = !1;
      }), ke.value = f, f;
    }, Ms = (f, g, b, $, G) => {
      Es(
        f,
        g,
        b,
        $,
        G,
        D.findExtrasPrice
      );
    }, Fs = (f, g, b, $) => {
      nr(
        f,
        g,
        b,
        $,
        g === "banding" ? yi : [],
        D.findExtrasPrice
      );
    }, xi = (f, g) => {
      const b = g === "banding" ? be == null ? void 0 : be.labels : Ee == null ? void 0 : Ee.labels;
      aa(f, g, b);
      const $ = $s(g);
      if (f != null && f[$])
        for (const G in f[$]) {
          const X = Ui(f, g, G, D.findExtrasPrice);
          X === !1 && G && f[g][G] && new ae({
            item: f,
            field: [[g, G]],
            type: "error",
            category: ["part"],
            message: W("option_not_available", { x: f[g][G], y: W(g) })
          }), pi(f, g, G, !!X);
        }
    }, _s = (f) => {
      const g = Object.keys(f);
      return Math.max(...g.map(($) => $.split("|").length));
    }, Bs = (f) => {
      const g = [], b = Object.keys(f), $ = _s(f);
      for (let G = $; G--; ) g.push(/* @__PURE__ */ new Set());
      for (const G of b)
        G.split("|").forEach((ce, ue) => g[ue].add(ce));
      for (let G = 0; G < $; G++)
        g[G] = Array.from(g[G]);
      return g;
    }, ki = (f, g = [], b) => {
      if (!f) return [];
      if (b > 0 && !g[b - 1]) return [];
      const $ = /* @__PURE__ */ new Set();
      for (const G of Object.keys(f)) {
        const X = G.split("|");
        if (X.length > b) {
          let ce = !0;
          for (let ue = 0; ue < b; ue++)
            if (g[ue] && X[ue] !== g[ue]) {
              ce = !1;
              break;
            }
          ce && $.add(X[b]);
        }
      }
      return Array.from($);
    }, Ci = (f, g, b) => Ui(
      f,
      g,
      b,
      D.findExtrasPrice
    ), kr = (f) => {
      const g = Ne.value.findIndex((b) => b.shapeId === f.shapeId);
      g !== -1 ? Ne.value[g] = f : Ne.value.push(f), window.smartcutImages = Ne.value;
    }, Cr = (f) => {
      Ne.value = Ne.value.filter((g) => g.shapeId !== f), window.smartcutImages = Ne.value;
    }, qs = (f = 1) => {
      for (let g = f; g--; ) {
        let b;
        if (a.inputShapes.value.length > 0) {
          const $ = a.inputShapes.value[a.inputShapes.value.length - 1];
          b = oi({
            material: $.material,
            t: $.t
          });
        } else
          b = oi();
        a.inputShapes.value.push(b);
      }
    }, Ir = (f) => {
      var b;
      if (a.inputShapes.value.length === 1) return;
      const g = a.inputShapes.value[f].listId;
      a.inputShapes.value.splice(f, 1), ((b = at.value) == null ? void 0 : b.listId) === g && (at.value = null), te();
    }, oi = (f = {
      l: null,
      w: he.stockType === "linear" ? ((g) => (g = a.inputStock.value[0]) == null ? void 0 : g.w)() : null,
      t: qe.value.length ? qe.value[0] : null,
      q: 1,
      material: ((b) => (b = Ve.value) == null ? void 0 : b.length)() === 1 ? Ve.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var G, X;
      f.id = (a.inputShapes.value.length + 1).toString();
      const $ = new fi(f, ee.numberFormat);
      return (G = be == null ? void 0 : be.labels) != null && G.length && xi($, "banding"), (X = Ee == null ? void 0 : Ee.labels) != null && X.length && xi($, "finish"), $;
    }, Pr = (f) => {
      if (qe.value.length)
        for (const g of f) {
          if (!g.t) return;
          const b = qe.value.findIndex(
            (X) => k({ v: X }) === g.t
          ), $ = Et.value.find((X) => X.includes(b));
          if (!$) return;
          const G = Math.min(
            ...$.map((X) => qe.value[X])
          );
          k({ v: g.t }) > G && (g.q = g.q * (k({ v: g.t }) / G), g.notes = `Bond to form ${g.t.valueOf()}`, g.t = G);
        }
    }, js = () => {
      te(), q(null), p.stockList.value = [], p.shapeList.value = [], p.cutList.value = [];
    }, Ji = () => {
      a.inputShapes.value.length = 0;
    }, Tr = async () => {
      if (_("calculating"), M.value) return !1;
      M.value = !0, si.value = !1;
      const f = a.inputShapes.value.map((ce) => new fi(ce));
      Pr(f);
      const { valid: g, saw: b, stockList: $, shapeList: G } = await oa({
        t: W,
        partTrim: ee.partTrim,
        maxShapes: ee.maxParts,
        orientationModel: ee.orientationModel,
        sawData: he,
        inputShapes: f,
        onLimit: () => {
          x({
            type: "error",
            message: W("limits.max_parts") + " " + ee.maxParts
          });
        }
      });
      if (!g) {
        _("validation-error"), M.value = !1;
        return;
      }
      js(), D.debug && console.log(
        "SmartCut - calculating",
        "stock",
        $.map((ce) => ce.dimensions),
        "parts",
        G.map((ce) => ce.dimensions)
      );
      const X = {
        inputs: {
          parts: f,
          stock: a.inputStock.value,
          saw: b
        },
        saw: b,
        shapeList: G,
        stockList: $,
        enableEvo: !0,
        domain: ie
      };
      await oe.connect(), oe.emit("calculate", X);
    }, Hs = (f, g) => {
      var pe;
      if (je(f, !1), !f || !g || !(g != null && g[f]) || !Ct(ee, ["enable", f])) return;
      const b = [f, "pricing"];
      if (!Qs(g, b)) {
        _("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const $ = Ct(g, b);
      if (typeof $ != "object") {
        _("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!ei($)) {
        _("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const G = Object.keys($), X = Object.values($);
      if (!G.length) {
        _("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const ce = /,/;
      for (const N of G)
        if (ce.test(N)) {
          _("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (X.some((N) => isNaN(N))) {
        _("error", `${b} values must be a number`);
        return;
      }
      const ue = _s($), H = [f, "labels"];
      let Z = [];
      if (Qs(g, H))
        Z = Ct(g, H);
      else {
        _("error", `${H.join(".")} not found`);
        return;
      }
      if (!Z) {
        _("error", `${H.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Z)) {
        _("error", `${H.join(".")} data must be an array`);
        return;
      }
      if (!(Z != null && Z.length)) {
        _("error", `if provided, ${H.join(".")} data must contain values`);
        return;
      }
      if (Z.length !== ue) {
        _("error", `${H.join(".")} length (${Z.length}) must match the number of levels in ${b.join(".")} (${ue})`);
        return;
      }
      switch (f) {
        case "banding":
          be.labels = Z, be.pricing = $, be.options = Bs($);
          break;
        case "finish":
          Ee.labels = Z, Ee.pricing = $, Ee.options = Bs($);
          break;
      }
      if (je(f, !0), !!((pe = a.inputShapes.value) != null && pe.length))
        for (const N of a.inputShapes.value)
          xi(N, f);
    }, Ii = (f, g) => {
      if (!g) return;
      f !== "info" && Object.keys(ze).forEach(($) => {
        $ !== f && $ !== "info" && (ze[$] = null);
      });
      const b = a.inputShapes.value.indexOf(g);
      ze[f] === b ? (at.value = null, ze[f] = null) : (at.value = g, ze[f] = b);
    }, Gs = (f) => {
      if (_("log", ["load event received"]), !lt.value) {
        _("log", ["load event received"]);
        return;
      }
      Dr(f.detail);
    }, Dr = (f) => {
      var $, G, X;
      if (_("log", ["loading parts..."]), !f || !((G = ($ = f == null ? void 0 : f.inputs) == null ? void 0 : $.parts) != null && G.length)) {
        _("log", ["could not find any parts to import"]);
        return;
      }
      a.inputShapes.value.length = 0;
      let g = 0;
      for (const ce of f.inputs.parts) {
        const ue = oi(ce);
        ue ? (a.inputShapes.value.push(ue), (X = ue.issues) != null && X.length && _("log", [`SmartCut - issues found while importing part at index ${g}`, ue.issues])) : _("log", [`SmartCut - error loading part at index ${g}`, ce]), g++;
      }
      a.inputShapes.value.flatMap((ce) => It(ce.issues)).length && x({
        type: "error",
        message: W("errors.general.issues_found")
      }), _("log", [`loaded ${a.inputShapes.value.length} parts`]);
    }, Lr = (f) => {
      a.inputShapes.value.length = 0, nt(() => {
        var g, b;
        for (const $ of f)
          $.t = ((b = (g = a.inputStock.value) == null ? void 0 : g[0]) == null ? void 0 : b.t) ?? null, a.inputShapes.value.push(oi($));
      });
    };
    Te(() => D.stock, (f) => {
      if (js(), Array.isArray(f) || console.warn("SmartCut - stock must be passed as an array"), !!(f != null && f.length)) {
        a.inputStock.value.length = 0, Ve.value.length || Os(f);
        for (const g of f) {
          const b = new Is({
            ...g,
            autoAdd: !0,
            id: (a.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, ee.numberFormat);
          a.inputStock.value.push(b);
        }
        if (a.inputStock.value.length) {
          a.inputShapes.value.length ? nt(() => {
            a.inputShapes.value.forEach((b) => {
              if (b.material) {
                const $ = Ve.value.find((G) => G.name === b.material);
                $ && ($.thicknesses.includes(k({ v: b.t })) || (b.t = k({ v: $.thicknesses[0] })));
              } else b.t || (b.t = k({ v: a.inputStock.value[0].t }));
            });
          }) : D.inputType !== "formula" && nt(() => qs(1));
          const g = h(he);
          g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), x({
            type: "error",
            message: W("errors.validation.stock_issue"),
            additional: g.map((b) => b.message)
          }));
        }
      }
    }, { immediate: !0 }), Te(a.inputShapes, (f) => {
      _("inputs-changed"), f.forEach((g) => {
        var $;
        he.stockType === "linear" && (g.w = ($ = a.inputShapes.value[0]) == null ? void 0 : $.w);
        const b = Ve.value.find((G) => G.name === g.material);
        b && (b.thicknesses.includes(k({ v: g.t })) || (g.t = k({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), Te(() => ee.numberFormat, (f) => {
      v(f);
    }), rt(async () => {
      if (ot.value) return;
      const f = new URL(window.location.href), g = f.searchParams.toString(), b = f.origin + f.pathname + (g ? `?${g}` : "");
      De.value !== b && Ji(), De.value = b, j.value = ee.locale, await oe.connect(), oe.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Gs), ot.value = !0, D.debug && _("log", [
        "ready...",
        "fields:",
        St.value.map(($) => $.id)
      ]);
    });
    const $r = () => {
      oe && oe.disconnect();
    };
    return vi(() => {
      window.removeEventListener("smartcut/load", Gs), $r(), delete window.smartcutCheckout;
    }), t({
      init: Ot,
      clear: Ji,
      getAvailablePricingOptions: ki,
      getExtrasPrice: Ci,
      formatPrice: D.formatPrice,
      findExtrasPrice: D.findExtrasPrice,
      inputShapes: a.inputShapes,
      initExtrasOptions: xi,
      createInputShape: oi
    }), (f, g) => {
      var $, G, X, ce, ue, H;
      const b = Bt("font-awesome-icon");
      return y(), T(we, null, [
        ve(P(s), {
          content: P(S).content,
          type: P(S).type,
          show: P(S).show,
          "reference-el": P(S).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        P(R) === "development" && wu ? (y(), T("div", Jc, [
          g[5] || (g[5] = O("div", null, "Developer information", -1)),
          O("div", null, re(ee.enable.focus), 1),
          ve(P(l), {
            data: [P(a).inputShapes.value[0]],
            paths: ["inputs.inputShapes"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        ($ = at.value) != null && $.machining && K.value ? (y(), ye(P(r), {
          key: 1,
          shape: at.value,
          "onUpdate:shape": g[0] || (g[0] = (Z) => at.value = Z),
          translate: !0,
          options: Ze,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": Ci,
          "get-available-pricing-options": ki,
          "format-price": i.formatPrice,
          onClose: pr
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : U("", !0),
        lt.value ? U("", !0) : (y(), T("div", Qc, [
          ve(nn, {
            size: 50,
            "show-number": !1
          })
        ])),
        lt.value ? (y(), T("div", {
          key: 3,
          id: "smartcut-checkout",
          class: Se({ fullscreen: Ue.value })
        }, [
          ne.value && !i.readonly ? (y(), T("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: g[1] || (g[1] = (Z) => br())
          }, [
            ve(b, { icon: ["fass", "expand"] }),
            Kt(" " + re(P(W)("general.full_screen")), 1)
          ])) : U("", !0),
          Xe.value ? (y(), T("div", {
            key: 1,
            id: "credit",
            style: xe(fe.value)
          }, [
            O("a", {
              title: "SmartCut | Cut list optimization software",
              style: xe(Ce.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, re(P(mo)(P(W)("general.powered_by"))), 5)
          ], 4)) : U("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: xe({ "grid-template-columns": Q.value })
          }, [
            P(a).inputShapes.value.length ? (y(), T("div", eu, [
              g[6] || (g[6] = O("div", { class: "cell id" }, null, -1)),
              (y(!0), T(we, null, $e(St.value, (Z) => (y(), T("div", {
                key: Z.id,
                class: Se(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(Z.id) || Z.type === "checkbox" }])
              }, re(P(W)(Z.label)), 3))), 128)),
              P(R) === "development" ? (y(), T("div", tu, " Info ")) : U("", !0),
              P(a).inputShapes.value.length > 1 ? (y(), T("div", iu)) : U("", !0)
            ])) : U("", !0),
            (y(!0), T(we, null, $e(P(a).inputShapes.value, (Z, pe) => (y(), T("div", {
              key: pe,
              class: "row inputs"
            }, [
              O("div", su, [
                O("div", {
                  class: "id",
                  style: xe({
                    background: ee.colors.partA,
                    color: ee.colors.text
                  })
                }, re(pe + 1), 5)
              ]),
              (y(!0), T(we, null, $e(St.value, (N) => (y(), T("div", {
                key: N.fieldMap,
                class: Se(["cell", [`${N.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(N.id) || N.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(N.id) ? N.id === "orientationLock" ? (y(), ye(Pa, {
                  key: 1,
                  id: "orientation-" + pe,
                  rectangle: Z,
                  disabled: i.readonly,
                  "stock-grain": P(d)(Z),
                  "button-background": ee.colors.button,
                  "icon-color": ee.colors.buttonText,
                  "orientation-model": ee.orientationModel,
                  onUpdateOrientation: (gt) => Si(Z, gt)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : N.id === "banding" ? (y(), ye(Da, {
                  key: 2,
                  id: "banding-" + pe,
                  "input-shape": Z,
                  disabled: i.readonly,
                  "stock-grain": P(d)(Z),
                  open: ze.banding === pe,
                  "orientation-model": ee.orientationModel,
                  onClicked: (gt) => Ii("banding", Z)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : N.id === "finish" ? (y(), ye(ic, {
                  key: 3,
                  id: "finish-" + pe,
                  "input-shape": Z,
                  disabled: i.readonly,
                  open: ze.finish === pe,
                  onClicked: (gt) => Ii("finish", Z)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : N.fieldMap === "machining" && ne.value ? (y(), ye(oc, {
                  key: 4,
                  id: "machining-" + pe,
                  disabled: i.readonly,
                  "input-shape": Z,
                  onOpen: (gt) => Zi(Z)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : N.fieldMap === "imageUpload" ? (y(), T("button", {
                  key: 5,
                  id: "image-upload-" + pe,
                  type: "button",
                  disabled: i.readonly,
                  class: Se({ selected: ze.info === pe }),
                  onClick: (gt) => Ii("imageUpload", Z)
                }, [
                  ve(b, { icon: ["fass", "image"] })
                ], 10, nu)) : U("", !0) : (y(), ye(Lt, {
                  key: 0,
                  id: N.id + "-" + pe,
                  focus: !i.readonly && ee.enable.focus && pe === P(a).inputShapes.value.length - 1 && N.id === "l",
                  issue: P(Xs)(Z, [N.fieldMap]),
                  warning: P(Xs)(Z, [N.fieldMap], !0),
                  type: N.type,
                  output: N.output,
                  label: N != null && N.label ? P(W)(N.label) : null,
                  placeholder: N != null && N.placeholder ? P(W)(N.placeholder) : null,
                  "enable-label": !1,
                  "number-format": ee.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (N == null ? void 0 : N.required) ?? !1,
                  "allow-zero": (N == null ? void 0 : N.allowZero) ?? !0,
                  options: N.id === "t" ? mr(Z) : N == null ? void 0 : N.options,
                  "true-value": N == null ? void 0 : N.trueValue,
                  "false-value": N == null ? void 0 : N.falseValue,
                  default: N == null ? void 0 : N.default,
                  min: typeof (N == null ? void 0 : N.min) == "number" ? N.min : null,
                  max: typeof (N == null ? void 0 : N.max) == "number" ? N.max : null,
                  custom: N == null ? void 0 : N.custom,
                  value: P(Ct)(Z, N == null ? void 0 : N.fieldMap),
                  text: {
                    delete: P(ns)(P(W)("actions.delete")),
                    select: P(ns)(P(W)("actions.select"))
                  },
                  onValidation: (gt, Ar) => He(gt, Ar, Z, [N.fieldMap]),
                  "onUpdate:value": (gt) => {
                    N.fieldMap && P(er)(Z, N.fieldMap, gt);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              P(R) === "development" ? (y(), T("div", ru, [
                O("button", {
                  type: "button",
                  class: Se({ selected: ze.info === pe }),
                  onClick: (N) => Ii("info", Z)
                }, " i ", 10, ou)
              ])) : U("", !0),
              P(a).inputShapes.value.length > 1 ? (y(), T("div", lu, [
                O("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": `${P(W)("actions.remove")} ${P(ss)(P(W)("woodwork.part"))}`,
                  onClick: (N) => Ir(pe)
                }, [
                  ve(b, { icon: ["fass", "trash"] })
                ], 8, au)
              ])) : U("", !0),
              ve(P(n), {
                item: Z,
                "num-columns": L.value
              }, null, 8, ["item", "num-columns"]),
              ze.banding === pe && be.options.length > 0 ? (y(), ye(hs, {
                key: 2,
                shape: Z,
                "shape-index": pe,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": P(_e),
                "part-columns": L.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": ee.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Fs,
                onSet: Ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : U("", !0),
              ze.finish === pe && Ee.options.length > 0 ? (y(), ye(hs, {
                key: 3,
                shape: Z,
                "shape-index": pe,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ee.keys,
                "all-options": Ee.options,
                pricing: Ee.pricing,
                labels: Ee.labels,
                "user-friendly-field-map": P(_e),
                "part-columns": L.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": ee.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Fs,
                onSet: Ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : U("", !0),
              ze.info === pe ? (y(), T("div", {
                key: 4,
                id: "shape-info",
                style: xe({ "grid-column-end": "span " + L.value })
              }, [
                ve(P(l), {
                  data: [Z == null ? void 0 : Z.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : U("", !0),
              ze.imageUpload === pe ? (y(), ye(pc, {
                key: 5,
                prefix: (pe + 1).toString(),
                "unique-id": P(We),
                "shape-id": Z.listId,
                style: xe({ "grid-column-end": "span " + L.value }),
                images: Ne.value,
                onUpdate: kr,
                onRemove: Cr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : U("", !0)
            ]))), 128))
          ], 4),
          O("div", cu, [
            i.readonly ? U("", !0) : (y(), T("button", {
              key: 0,
              type: "button",
              "aria-label": `${P(W)("actions.add")} ${P(W)("woodwork.part")}`,
              style: xe({ background: ee.colors.button, color: ee.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: g[2] || (g[2] = (Z) => qs(1))
            }, [
              ve(b, { icon: ["fass", "plus-large"] }),
              Kt(" " + re(`${P(W)("actions.add")} ${P(W)("woodwork.part")}`), 1)
            ], 12, uu)),
            O("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": P(W)("actions.calculate"),
              style: xe({
                background: ee.colors.button,
                color: ee.colors.buttonText
              }),
              disabled: !((G = P(a).inputStock.value) != null && G.length) || M.value,
              onClick: g[3] || (g[3] = (Z) => Tr())
            }, [
              ve(b, { icon: ["fass", "calculator"] }),
              Kt(re(P(W)("actions.calculate")), 1)
            ], 12, hu),
            i.readonly ? U("", !0) : (y(), T("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": P(W)("actions.clear"),
              onClick: g[4] || (g[4] = (Z) => Ji())
            }, [
              ve(b, { icon: ["fass", "trash"] })
            ], 8, du)),
            O("div", fu, re(P(u)) + re(ee != null && ee.maxParts ? "/" + ee.maxParts : ""), 1)
          ]),
          Wt.value && !i.readonly ? (y(), ye(P(o), {
            key: 2,
            ref: "import",
            "number-format": ee.numberFormat,
            "custom-fields": Nt.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": Ee.options,
            "finish-labels": Ee.labels,
            onImport: Lr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : U("", !0),
          pt.value ? (y(), T("div", pu, [
            ni.value ? (y(), T("div", gu, re(ni.value), 1)) : U("", !0),
            O("pre", mu, re(bi.value), 1)
          ])) : U("", !0),
          (ee.enable.diagram ? M.value && !P(J).complete : M.value || P(J).complete) ? (y(), T("div", vu, [
            ve(nn, {
              size: 50,
              number: P(J).shapeCount,
              complete: P(J).complete,
              "show-number": ee.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : U("", !0),
          fs(O("div", yu, [
            ((ce = (X = P(F)) == null ? void 0 : X.saw) == null ? void 0 : ce.stockType) !== "roll" ? (y(), T("div", bu, re((ue = P(F)) != null && ue.stack ? (H = P(F)) == null ? void 0 : H.stack : 1), 1)) : U("", !0),
            ve(Zc, {
              "element-id": "diagram",
              "number-format": ee.numberFormat,
              "decimal-places": ee.decimalPlaces,
              colors: ee.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [ps, ee.enable.diagram && P(J).complete]
          ]),
          ee.enable.diagram && P(I).length > 1 && P(J).complete ? (y(), ye(ga, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": P(w),
            "stock-list": P(I),
            onShowStock: P(q)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : U("", !0)
        ], 2)) : U("", !0)
      ], 64);
    };
  }
}), jh = /* @__PURE__ */ ii(Su, [["__scopeId", "data-v-c2e553a1"]]), xu = {
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
}, ku = { class: "smartcut-object-viewer" }, Cu = ["onClick"], Iu = { class: "toggle-icon" }, Pu = { class: "path-label" }, Tu = {
  key: 0,
  class: "object-properties"
}, Du = { class: "key" };
function Lu(i, t, e, s, n, r) {
  return y(), T("div", ku, [
    (y(!0), T(we, null, $e(e.data, (o, l) => (y(), T("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        O("div", Iu, re(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", Pu, re(e.paths[l] || l), 1)
      ], 8, Cu),
      n.expanded[l] ? (y(), T("div", Tu, [
        (y(!0), T(we, null, $e(o, (a, u) => (y(), T("div", {
          key: u,
          class: "property-item"
        }, [
          O("div", Du, re(u) + ": ", 1),
          O("div", {
            class: Se(["value", r.getValueType(a)])
          }, re(r.formatValue(a)), 3)
        ]))), 128))
      ])) : U("", !0)
    ]))), 128))
  ]);
}
const $u = /* @__PURE__ */ ii(xu, [["render", Lu]]), Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: $u }, Symbol.toStringTag, { value: "Module" })), Au = ["data-placement"], Eu = /* @__PURE__ */ Ae({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = z(null), s = z(null), n = z(!0);
    let r = null, o = null;
    const l = () => {
      if (!t.referenceEl) {
        n.value = !1;
        return;
      }
      const F = window.getComputedStyle(t.referenceEl), q = F.display !== "none", J = F.visibility !== "hidden", te = parseFloat(F.opacity) > 0, x = t.referenceEl.getBoundingClientRect(), S = x.width > 0 && x.height > 0, E = x.top < window.innerHeight && x.bottom > 0 && x.left < window.innerWidth && x.right > 0, Y = !a(t.referenceEl);
      n.value = q && J && te && S && E && Y;
    }, a = (F) => {
      const q = F.getBoundingClientRect();
      let J = F.parentElement;
      for (; J && J !== document.body; ) {
        const te = window.getComputedStyle(J);
        if (te.overflow === "hidden" || te.overflowX === "hidden" || te.overflowY === "hidden") {
          const x = J.getBoundingClientRect();
          if (q.right < x.left || q.left > x.right || q.bottom < x.top || q.top > x.bottom)
            return !0;
        }
        J = J.parentElement;
      }
      return !1;
    }, u = () => {
      if (!t.referenceEl) return;
      r = new IntersectionObserver(
        (q) => {
          q.forEach((J) => {
            J.target === t.referenceEl && l();
          });
        },
        {
          root: null,
          threshold: 0
        }
      ), r.observe(t.referenceEl), o = new MutationObserver((q) => {
        q.forEach((J) => {
          J.type === "attributes" && (J.attributeName === "style" || J.attributeName === "class" || J.attributeName === "hidden") && l();
        });
      }), o.observe(t.referenceEl, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
      let F = t.referenceEl.parentElement;
      for (; F && F !== document.body; )
        o.observe(F, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }), F = F.parentElement;
    }, d = () => {
      r && (r.disconnect(), r = null), o && (o.disconnect(), o = null);
    };
    Te([() => t.referenceEl, () => t.show], ([F, q], [J]) => {
      J !== F && d(), q && F ? (l(), u()) : d();
    }, { immediate: !0 });
    const v = () => {
      t.show && t.referenceEl && l();
    };
    rt(() => {
      window.addEventListener("scroll", v, { passive: !0 }), window.addEventListener("resize", v, { passive: !0 });
    }), vi(() => {
      d(), window.removeEventListener("scroll", v), window.removeEventListener("resize", v);
    });
    const h = se(() => ({
      getBoundingClientRect: () => {
        var F;
        return ((F = t.referenceEl) == null ? void 0 : F.getBoundingClientRect()) || new DOMRect();
      }
    })), p = [
      Br(8),
      qr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      jr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      Zr({ element: s })
    ], { floatingStyles: m, middlewareData: I, placement: B } = Xr(
      h,
      e,
      {
        placement: "top",
        middleware: p,
        whileElementsMounted: (F, q, J) => _r(
          F,
          q,
          J,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), A = se(() => ({
      position: m.value.position,
      top: m.value.top,
      left: m.value.left,
      transform: m.value.transform,
      zIndex: "1000"
    })), w = se(() => {
      if (!I.value.arrow) return {};
      const { x: F, y: q } = I.value.arrow, J = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[B.value.split("-")[0]] || "top";
      return {
        left: F != null ? `${F}px` : void 0,
        top: q != null ? `${q}px` : void 0,
        [J]: "-4px"
      };
    });
    return (F, q) => (y(), ye(ms, { to: "body" }, [
      ve(Kr, { name: "fade" }, {
        default: gs(() => [
          F.show && F.referenceEl && n.value ? (y(), T("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: Se(["smartcut-tooltip", F.type]),
            style: xe(A.value),
            "data-placement": P(B)
          }, [
            Kt(re(F.content) + " ", 1),
            O("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: xe(w.value)
            }, null, 4)
          ], 14, Au)) : U("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Eu }, Symbol.toStringTag, { value: "Module" })), Ru = /* @__PURE__ */ Ae({
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
      return y(), T(we, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (y(), T("div", {
          key: 0,
          class: "group issues",
          style: xe({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          O("pre", null, re(t.item.issues.filter((a) => a.type === "error").flatMap((a) => P(Jt)(a.message)).join(`
`)), 1)
        ], 4)) : U("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (y(), T("div", {
          key: 1,
          class: "group warnings",
          style: xe({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          O("pre", null, re(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => P(Jt)(a.message)).join(`
`)), 1)
        ], 4)) : U("", !0)
      ], 64);
    };
  }
}), Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ru }, Symbol.toStringTag, { value: "Module" })), Ye = {
  precisionFixed: po,
  format: fo,
  select: Fe,
  selectAll: Ln,
  scaleLinear: it,
  scaleSequential: ui,
  axisTop: Tn,
  axisBottom: _i,
  axisRight: Dn,
  axisLeft: Bi,
  symbol: ho,
  path: uo,
  arc: co,
  symbolTriangle: ao,
  symbolSquare: lo
};
class Fu {
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
    c(this, "xScale", Ye.scaleLinear());
    c(this, "yScale", Ye.scaleLinear());
    c(this, "yScaleFlipped", Ye.scaleLinear());
    c(this, "measurementScale", Ye.scaleLinear());
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
      if (this.el = Ye.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = Ye.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const t = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (t === null) return;
          this.svgCanvas = t;
        } else
          this.svgCanvas = Ye.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const t = this.w >= this.minSizeForAxes && this.h >= this.minSizeForAxes, e = t ? this.edgePadding : 0, s = t ? this.edgePadding : 0, n = t ? this.axisPadding : 0, r = t ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (e + n) < 0 || this.h - (r + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), t && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${r})`).attr("class", "axis x"), this.xAxis.call(
      Ye.axisTop(this.xScale).ticks(10).tickSize(-this.h + (r + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(o, l, a) {
      (l === 0 || l === a.length - 1) && Ye.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      Ye.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (e + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, l, a) {
      (l === 0 || l === a.length - 1) && Ye.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px")), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const t = this.w >= this.minSizeForAxes && this.h >= this.minSizeForAxes, e = t ? this.edgePadding : 0, s = t ? this.edgePadding : 0, n = t ? this.axisPadding : 0, r = t ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", e).attr("y", r).attr("width", this.w - (e + n)).attr("height", this.h - (r + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", e).attr("y", r).attr("width", this.w - (e + n)).attr("height", this.h - (r + s)).style("fill", "url(#stripes)");
    const o = Ye.path(), l = this.shape.machining.corners, a = [], u = [];
    [0, 1, 2, 3].forEach((v) => {
      const h = l[v];
      h && h.type ? (a.push(h.size ? k({ v: h.size ?? 0, o: this }) : 0), u.push(h.type)) : (a.push(0), u.push(null));
    });
    const d = (v, h, p, m, I) => {
      u[v] === "radius" ? o.arcTo(
        this.xScale(h),
        this.getYScale()(p),
        this.xScale(m),
        this.getYScale()(I),
        this.measurementScale(a[v])
      ) : u[v] === "bevel" ? o.lineTo(this.xScale(m), this.getYScale()(I)) : (o.lineTo(this.xScale(h), this.getYScale()(p)), o.lineTo(this.xScale(m), this.getYScale()(I)));
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
    const l = Ye.path();
    this.shape.machining.corners.forEach((a, u) => {
      if (!a.type) return;
      let d, v, h;
      switch (u) {
        case 0:
          if (!C(t.a) || t.a === !1) return;
          d = {
            x: this.xScale(0) - e,
            y: this.getYScale()(k({ v: a.size ?? 0, o: this }))
          }, v = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(k({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!C(t.b) || t.b === !1) return;
          d = {
            x: this.xScale(this.shapeL - k({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, v = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(k({ v: a.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!C(t.c) || t.c === !1) return;
          d = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - k({ v: a.size ?? 0, o: this }))
          }, v = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - k({ v: a.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!C(t.d) || t.d === !1) return;
          d = {
            x: this.xScale(k({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, v = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - k({ v: a.size ?? 0, o: this })) + e
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
        Ye.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (e + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(r, o, l) {
        (o === 0 || o === l.length - 1) && Ye.select(this).select("line").style("display", "none");
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
const _u = { id: "machining" }, Bu = { class: "inputs" }, qu = {
  key: 0,
  class: "debug"
}, ju = {
  key: 1,
  class: "shape-name"
}, Hu = { class: "shape-dimensions" }, Gu = {
  key: 2,
  class: "sides-wrapper"
}, Wu = { class: "menu" }, Nu = { class: "button-wrapper" }, Uu = { class: "row table-heading" }, zu = {
  key: 0,
  class: "cell id"
}, Vu = {
  key: 0,
  class: "cell"
}, Yu = { class: "id" }, Xu = ["onClick"], Ku = { class: "remove" }, Zu = { key: 6 }, Ju = !1, Qu = /* @__PURE__ */ Ae({
  __name: "Machining",
  props: /* @__PURE__ */ Ns({
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
  emits: /* @__PURE__ */ Ns(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var ni, bi, ze, Ve, qe, Et, Ze, be, Ee, ri, Nt, wi, St;
    const e = Pt(() => Promise.resolve().then(() => Ki)), s = i, n = t, r = "production", o = z(), l = se(() => ks(M.value)), a = se(() => {
      var Q;
      if (!((Q = v.value) != null && Q.length)) return 0;
      if (oe.value === "banding") return 1;
      let L = Object.values(d.value).filter((fe) => fe.enabled).length;
      return L += 2, L;
    }), u = se(() => {
      if (!v.value.length || oe.value === "banding") return;
      const L = {
        id: "34px",
        del: "30px"
      }, Q = [];
      return v.value.forEach((fe) => {
        const Ce = d.value[fe];
        Ce.enabled && Q.push(Ce.w ?? "1fr");
      }), Q.unshift(L.id), Q.push(L.del), Q.join(" ");
    }), d = se(() => !oe.value || oe.value === "banding" ? null : ee[oe.value]), v = se(() => !oe.value || oe.value === "banding" ? [] : Object.keys(ee[oe.value]).filter((L) => ee[oe.value][L].enabled)), h = se(() => oe.value ? F() : []), p = se(() => {
      var Q, fe, Ce, Xe;
      const L = ((Xe = (Ce = (fe = (Q = M.value) == null ? void 0 : Q.machining) == null ? void 0 : fe.corners) == null ? void 0 : Ce.map((Re) => {
        var Ot;
        return (Ot = Re == null ? void 0 : Re.isPresent) != null && Ot.call(Re) ? Re.getCorner() : null;
      })) == null ? void 0 : Xe.filter((Re) => Re)) ?? [];
      return [...bt, ...L];
    }), m = (L = !0) => {
      L ? ne.value = L : nt(() => ne.value = !1);
    }, I = () => {
      D(), _(), K(), R();
    }, B = (L) => {
      if (oe.value === "corners")
        switch (L) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return L;
        }
      return L + 1;
    }, A = () => oe.value !== "banding", w = (L, Q = null) => {
      if (!(L != null && L.length)) return [];
      let fe = "None";
      Q === "depth" && (fe = "Through");
      const Ce = [{ label: fe, value: null }];
      return L.forEach((Xe) => {
        const Re = Xe.toString().charAt(0).toUpperCase() + Xe.toString().slice(1);
        Ce.push({ label: Re, value: Xe });
      }), Ce;
    }, F = () => {
      if (!oe.value) return [];
      if (oe.value === "banding") return [];
      const L = M.value.machining[oe.value];
      return Array.isArray(L) ? L : [L];
    };
    let q = null;
    const J = () => {
      if (!M.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), q = new Fu({
        HTMLElement: o.value,
        // Use the ref instead of querySelector
        shape: M.value,
        vueComponent: null
      }), q.init(), Wt.value = !0;
    }, te = Qr(() => {
      Wt.value && q && q.updateSize();
    }, 10);
    In(o, () => {
      te();
    });
    const x = () => {
      Ue.value = Ue.value === 0 ? 1 : 0, q.flip();
    }, S = () => {
      switch (oe.value) {
        case "holes":
          E();
          break;
        case "hingeHoles":
          Y();
          break;
      }
    }, E = () => {
      M.value.machining.createHole(
        k({ v: M.value.getLongSide() }) / 2,
        k({ v: M.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? k({ v: s.shape.t }) ?? 0,
        Ue.value
      ), q.createHoles();
    }, Y = () => {
      M.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Ue.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), q.createHingeHoles();
    }, D = () => {
      M.value.machining.holes.length = 0;
    }, _ = () => {
      M.value.machining.hingeHoles.length = 0;
    }, K = () => {
      M.value.machining.corners.forEach((L) => {
        L.size = null, L.type = null;
      }), M.value.banding.a = !1, M.value.banding.b = !1, M.value.banding.c = !1, M.value.banding.d = !1;
    }, R = () => {
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
    }, j = (L) => {
      switch (oe.value) {
        case "holes":
          return M.value.machining.holes.splice(L, 1);
        case "hingeHoles":
          return M.value.machining.hingeHoles.splice(L, 1);
        case "corners":
          M.value.machining.corners[L].size = null, M.value.machining.corners[L].type = null;
          return;
      }
    }, V = () => {
      switch (oe.value) {
        case "holes":
          return D();
        case "hingeHoles":
          return _();
        case "corners":
          return K();
      }
    }, ie = () => {
      var L;
      if (Be.value = [], !!s.options.banding.enabled) {
        m();
        for (const Q in M.value.banding)
          M.value.banding[Q] ? s.options.banding.enableTypes && ((L = s.options.banding.types) != null && L.length) && (M.value.banding[Q] || Be.value.push({
            index: Q,
            message: "Please select a type"
          })) : M.value.banding[Q] = "";
        m(!1);
      }
    }, le = (L) => {
      const Q = Be.value.filter((fe) => fe.index === L);
      return Q.length ? Q.map((fe) => fe.message) : [];
    }, ke = (L) => {
      const Q = Be.value.filter((Ce) => Ce.index === L && (Ce == null ? void 0 : Ce.fields)), fe = Q.flatMap((Ce) => Ce.fields);
      return Q.length ? fe : [];
    }, De = (L, Q) => {
      const fe = ke(L);
      return fe != null && fe.length ? fe.includes(Q) : !1;
    }, We = () => n("close"), Ne = (L) => L && typeof L.disabled == "function" ? L.disabled : !1, ot = (L, Q, fe, Ce, Xe) => {
      Es(L, Q, fe, Ce, Xe, s.findExtrasPrice);
    }, lt = (L, Q, fe, Ce) => {
      nr(
        L,
        Q,
        fe,
        Ce,
        [],
        s.findExtrasPrice
      );
    }, M = Jr(i, "shape");
    if (!((ni = M.value) != null && ni.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const si = z(!1), Wt = z(!1), ne = z(!1), Ue = z(0), oe = z(null), Be = z([]), ee = vt({
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
          type: (bi = s.options.holes.diameters) != null && bi.length ? "select" : "unitDependent",
          label: W("machining.diameter"),
          output: (ze = s.options.holes.diameters) != null && ze.length ? "float" : void 0,
          options: (Ve = s.options.holes.diameters) != null && Ve.length ? w(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof M.value.t < "u" && k({ v: M.value.t }) > 0,
          required: !1,
          type: (qe = s.options.holes.depths) != null && qe.length ? "select" : "unitDependent",
          output: (Et = s.options.holes.depths) != null && Et.length ? "float" : void 0,
          options: (Ze = s.options.holes.depths) != null && Ze.length ? w(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof M.value.t < "u" && k({ v: M.value.t }) > 0,
          required: !1,
          type: (be = s.options.holes.depths) != null && be.length ? "select" : "unitDependent",
          output: (Ee = s.options.holes.depths) != null && Ee.length ? "float" : void 0,
          options: (ri = s.options.holes.depths) != null && ri.length ? w(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (Nt = s.options.holes.diameters) != null && Nt.length ? "select" : "unitDependent",
          label: W("machining.diameter"),
          output: (wi = s.options.holes.diameters) != null && wi.length ? "float" : void 0,
          options: (St = s.options.holes.diameters) != null && St.length ? w(s.options.holes.diameters) : void 0
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
          options: w(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: W("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? k({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? k({ v: s.options.corners.maxValue, o: s.options }) : k({ v: M.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), he = vt({
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
    }), at = (L) => {
      L.target === L.currentTarget && We();
    }, pt = () => {
      var L;
      return !(!((L = M == null ? void 0 : M.value) != null && L.machining) || !si.value || ne.value);
    };
    return Te(() => {
      var L;
      return (L = M.value) == null ? void 0 : L.listId;
    }, () => {
      pt() && J();
    }), Te(() => {
      var L;
      return (L = M.value) == null ? void 0 : L.id;
    }, () => {
      pt() && J();
    }), Te(oe, (L) => {
      if (pt()) {
        if (L === "banding") {
          m(), ie(), m(!1);
          return;
        }
        if (!L) {
          Be.value = [];
          return;
        }
        m(), Be.value = M.value.machining.validate(
          M.value,
          L,
          he == null ? void 0 : he[L]
        ), L === "hingeHoles" && M.value.machining.hingeHoles.forEach((Q, fe) => {
          Gi(Q, he == null ? void 0 : he.holes, Be.value, fe);
        }), m(!1);
      }
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L, Q;
      return (Q = (L = M == null ? void 0 : M.value) == null ? void 0 : L.machining) == null ? void 0 : Q.holes;
    }, () => {
      pt() && (m(), Be.value = M.value.machining.validate(
        M.value,
        "holes",
        he == null ? void 0 : he.holes
      ), q.createHoles(), m(!1));
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L, Q;
      return (Q = (L = M == null ? void 0 : M.value) == null ? void 0 : L.machining) == null ? void 0 : Q.hingeHoles;
    }, () => {
      pt() && (m(), M.value.machining.updateHingeHoles(M.value), Be.value = M.value.machining.validate(
        M.value,
        "hingeHoles",
        he == null ? void 0 : he.hingeHoles
      ), M.value.machining.hingeHoles.forEach((L, Q) => {
        Gi(L, he == null ? void 0 : he.holes, Be.value, Q);
      }), q.createHingeHoles(), m(!1));
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L, Q;
      return (Q = (L = M == null ? void 0 : M.value) == null ? void 0 : L.machining) == null ? void 0 : Q.corners;
    }, () => {
      if (pt()) {
        m(), Be.value = M.value.machining.validate(
          M.value,
          "corners",
          he == null ? void 0 : he.corners
        ), M.value.machining.validate(M.value, "holes"), M.value.machining.validate(M.value, "hingeHoles"), q.createShape(), q.createHoles(), q.createHingeHoles();
        for (const L of M.value.machining.corners)
          L.isPresent() || As(M.value, "banding", L.getCorner(), !0);
        q.createBanding(), m(!1);
      }
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L;
      return (L = M == null ? void 0 : M.value) == null ? void 0 : L.banding;
    }, () => {
      pt() && (ie(), q.createBanding());
    }, { deep: !0, immediate: !0 }), rt(() => {
      if (document.body.style.overflow = "hidden", !M.value || !M.value.l || !M.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      nt(() => J()), si.value = !0;
    }), vi(() => document.body.style.overflow = ""), (L, Q) => {
      var Ce, Xe, Re, Ot, Si;
      const fe = Bt("font-awesome-icon");
      return y(), ye(ms, { to: "body" }, [
        O("div", {
          id: "smartcut-machining",
          onClick: at
        }, [
          O("div", _u, [
            O("div", Bu, [
              P(r) === "development" && Ju ? (y(), T("div", qu, [
                ve(P(e), {
                  data: [M.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : U("", !0),
              (Ce = M.value) != null && Ce.name ? (y(), T("div", ju, re(M.value.name), 1)) : U("", !0),
              O("div", Hu, re((Xe = M.value) == null ? void 0 : Xe.l) + " x " + re((Re = M.value) == null ? void 0 : Re.w) + " " + re((Ot = M.value) != null && Ot.t ? "x " + ((Si = M.value) == null ? void 0 : Si.t) : null), 1),
              L.options.faces.enabled ? (y(), T("div", Gu, [
                O("div", {
                  ref: "sides",
                  class: Se(["sides", { flipped: Ue.value === 1 }]),
                  onClick: x
                }, Q[4] || (Q[4] = [
                  O("div", { class: "side-a" }, " A ", -1),
                  O("div", { class: "side-b" }, " B ", -1)
                ]), 2),
                Q[5] || (Q[5] = O("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : U("", !0),
              l.value ? (y(), T("button", {
                key: 3,
                onClick: I
              }, " Delete all machining ")) : U("", !0),
              O("div", Wu, [
                L.options.holes.enabled ? (y(), T("div", {
                  key: 0,
                  class: Se({ selected: oe.value === "holes" }),
                  onClick: Q[0] || (Q[0] = (je) => oe.value = "holes")
                }, " Holes ", 2)) : U("", !0),
                L.options.hingeHoles.enabled ? (y(), T("div", {
                  key: 1,
                  class: Se({ selected: oe.value === "hingeHoles" }),
                  onClick: Q[1] || (Q[1] = (je) => oe.value = "hingeHoles")
                }, " Hinge holes ", 2)) : U("", !0),
                L.options.corners.enabled ? (y(), T("div", {
                  key: 2,
                  class: Se({ selected: oe.value === "corners" }),
                  onClick: Q[2] || (Q[2] = (je) => oe.value = "corners")
                }, " Corners ", 2)) : U("", !0),
                L.options.banding.enabled ? (y(), T("div", {
                  key: 3,
                  class: Se({ selected: oe.value === "banding" }),
                  onClick: Q[3] || (Q[3] = (je) => oe.value = "banding")
                }, " Banding ", 2)) : U("", !0)
              ]),
              O("div", Nu, [
                oe.value === "holes" || oe.value === "hingeHoles" ? (y(), T("button", {
                  key: 0,
                  type: "button",
                  onClick: S
                }, " Create ")) : U("", !0),
                oe.value && oe.value !== "banding" ? (y(), T("button", {
                  key: 1,
                  type: "button",
                  onClick: V
                }, " Delete all ")) : U("", !0)
              ]),
              oe.value === "banding" && M.value ? (y(), ye(hs, {
                key: 4,
                shape: M.value,
                env: P(r),
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": p.value,
                labels: L.options.banding.labels,
                "all-options": L.options.banding.options,
                pricing: L.options.banding.pricing,
                "user-friendly-field-map": P(_e),
                "part-columns": 1,
                translate: L.translate,
                "orientation-model": 0,
                "get-price": L.getExtrasPrice,
                "format-price": L.formatPrice,
                "get-available-pricing-options": L.getAvailablePricingOptions,
                onSet: ot,
                onUpdateAll: lt
              }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : U("", !0),
              oe.value !== "banding" && h.value.length ? (y(), T("div", {
                key: 5,
                class: Se(["grid-table", oe.value]),
                style: xe({ "grid-template-columns": u.value })
              }, [
                O("div", Uu, [
                  A() ? (y(), T("div", zu)) : U("", !0),
                  (y(!0), T(we, null, $e(d.value, (je, ct, He) => fs((y(), T("div", {
                    key: He,
                    class: "cell"
                  }, re(je.label ?? ct), 1)), [
                    [ps, je.enabled]
                  ])), 128)),
                  Q[6] || (Q[6] = O("div", { class: "cell del" }, null, -1))
                ]),
                (y(!0), T(we, null, $e(h.value, (je, ct) => (y(), T("div", {
                  key: ct,
                  class: "row"
                }, [
                  A() ? (y(), T("div", Vu, [
                    O("div", Yu, re(B(ct)), 1)
                  ])) : U("", !0),
                  (y(!0), T(we, null, $e(v.value, (He, Ut) => (y(), T("div", {
                    key: Ut,
                    class: "cell"
                  }, [
                    ve(Lt, {
                      type: d.value[He].type,
                      id: He + "-" + Ut,
                      warning: De(ct, He),
                      "enable-label": !1,
                      placeholder: d.value[He].label ?? He,
                      disabled: Ne(d.value[He]),
                      value: P(Ct)(je, He),
                      output: d.value[He].output,
                      options: d.value[He].options,
                      "onUpdate:value": (Zi) => P(er)(je, He, Zi)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", {
                    class: "cell",
                    onClick: (He) => j(ct)
                  }, [
                    O("div", Ku, [
                      ve(fe, { icon: ["fass", "trash"] })
                    ])
                  ], 8, Xu),
                  (y(!0), T(we, null, $e(le(ct), (He, Ut) => (y(), T("div", {
                    key: Ut,
                    class: "group validation",
                    style: xe({ "grid-column-end": "span " + a.value })
                  }, re(He), 5))), 128))
                ]))), 128))
              ], 6)) : oe.value !== "banding" ? (y(), T("div", Zu, " Please select from the menu above ")) : U("", !0)
            ]),
            O("div", {
              id: "machining-diagram",
              class: Se(["diagram", { flipped: Ue.value === 1 }]),
              ref_key: "diagramRef",
              ref: o
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Qu }, Symbol.toStringTag, { value: "Module" })), th = {
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
      files: eo([])
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
  return y(), T("div", {
    id: "drop",
    class: Se({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = to((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    O("div", null, re(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const sh = /* @__PURE__ */ ii(th, [["render", ih]]), nh = { id: "import-file" }, rh = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = z([]), r = z([]), o = z([]), l = z([]), a = z({}), u = z([]), d = z(!1), v = z(null), h = z(null), p = [
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
      const R = {};
      return n.value.forEach((j, V) => {
        R[V] = {};
        for (const [ie, le] of Object.entries(j)) {
          if (!p.includes(ie)) continue;
          const ke = A(ie, le);
          (ke === !0 || ke === !1) && (R[V][ie] = ke);
        }
      }), R;
    }), I = se(() => e.customFields.map((R) => R.label)), B = (R, j) => {
      if (j) {
        const V = Object.keys(j), ie = [[]];
        V.forEach((ke) => {
          const De = j[ke], We = [];
          ie.forEach((Ne) => {
            De.forEach((ot) => We.push([...Ne, ot]));
          }), ie.splice(0, ie.length, ...We);
        });
        const le = /* @__PURE__ */ new Set();
        ie.forEach((ke) => le.add(ke.join("|").toLowerCase())), R === "banding" ? v.value = le : h.value = le;
      }
    }, A = (R, j) => {
      if (j === "???") return !0;
      function V(le) {
        return le ? (le = le.trim().toLowerCase(), le === "l" || le === "w") : !0;
      }
      const ie = {
        banding: (le) => w(le, v.value, "banding"),
        finish: (le) => w(le, h.value, "finish"),
        orientationLock: V
      };
      return R in ie ? ie[R](j) : null;
    }, w = (R, j, V) => {
      if (R = Y(R), !R) return !0;
      const ie = R.split(","), le = ie.every((ke) => !ke || j.has(ke.toLowerCase()));
      if (!le) {
        const ke = ie.filter((De) => !j.has(De.toLowerCase()));
        console.log(`Valid ${V} choices...`), console.table(Array.from(j)), console.log(`The following ${V} choices are invalid`, ke);
      }
      return le;
    }, F = (R, j) => {
      const V = {
        bandingOptions: (ie) => q(ie, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (ie) => q(ie, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return R in V ? V[R](j) : null;
    }, q = (R, j, V, ie) => {
      if (R = Y(R), !R)
        return ie.reduce((De, We) => ({ ...De, [We]: {} }), {});
      const le = R.split(",").map((De) => De.toLowerCase()), ke = {};
      return ie.forEach((De, We) => {
        ke[De] = {}, Object.keys(j).forEach((Ne, ot) => {
          var lt;
          ke[De][V[ot]] = ((lt = le[We]) == null ? void 0 : lt.split("|")[ot]) || "";
        });
      }), ke;
    }, J = () => n.value.map((R, j) => ({
      l: e.numberFormat === "decimal" ? Mi(R.l) : R.l,
      w: e.numberFormat === "decimal" ? Mi(R.w) : R.w,
      t: e.numberFormat === "decimal" ? Mi(R.t) : R.t,
      q: R.q,
      orientationLock: R.orientationLock,
      name: R.name,
      material: R.material,
      bandingOptions: m.value[j].banding ? F("bandingOptions", R.banding) : null,
      finishOptions: m.value[j].finish ? F("finishOptions", R.finish) : null,
      numberFormat: e.numberFormat,
      customData: _(R)
    })), te = (R) => {
      var V;
      const j = (V = R == null ? void 0 : R[0]) == null ? void 0 : V.data;
      j && Hr.parse(j, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (ie) => x(ie),
        error: () => s("error")
      });
    }, x = (R) => {
      r.value = R.data.filter((j) => j.some((V) => V)), o.value = r.value[0], a.value = {};
      for (let j = o.value.length; j--; ) {
        const V = o.value[j], ie = S(V);
        ie ? a.value[j] = ie : (a.value[j] = null, I.value.includes(V) && (a.value[j] = "customData." + e.customFields.find((le) => le.label === V).id));
      }
      E(), r.value.shift(), D(), K();
    }, S = (R) => {
      const j = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", W("l"), W("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", W("w"), W("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", W("t"), W("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", W("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", W("quantity"), W("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", W("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", W("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", W("banding")],
        finish: ["finish", "paint"]
      }, V = Object.entries(j).reduce(
        (ie, [le, ke]) => (ke.some((De) => R && R.toLowerCase() === De) && ie.push(le), ie),
        []
      );
      return V.length > 1 ? null : V[0];
    }, E = () => {
      d.value = !1, l.value = Object.values(a.value).map((j) => !j || j === "N" ? null : p.includes(j) ? j : (d.value = !0, null));
      const R = l.value.filter((j, V) => l.value.indexOf(j) !== V);
      u.value = R.map((j) => l.value.reduce(
        (V, ie, le) => (ie && ie === j && V.push(le), V),
        []
      ));
    }, Y = (R) => R && R.replace(/\s*,\s*/g, ","), D = () => {
      const R = r.value.map((j) => {
        const V = {};
        return o.value.forEach((ie, le) => {
          if (u.value.flat().includes(le))
            return V[a.value[le]] = "???";
          V[a.value[le]] = j[le];
        }), V;
      });
      n.value = R;
    }, _ = (R) => {
      let j = {};
      for (let V in R)
        if (V.startsWith("customData.")) {
          let ie = V.slice(11);
          j[ie] = R[V];
        }
      return j;
    }, K = () => {
      const R = J();
      R != null && R.length && s("import", R);
    };
    return rt(() => {
      B("banding", e.bandingOptions), B("finish", e.finishOptions);
    }), (R, j) => (y(), T("div", nh, [
      ve(sh, {
        label: P(W)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: te
      }, null, 8, ["label"])
    ]));
  }
}), oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: rh }, Symbol.toStringTag, { value: "Module" }));
class kt extends Error {
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
        if (e === 0) throw new kt("Division by zero", "DIVISION_BY_ZERO");
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
      const h = t.edges.get(a) || /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
      for (const I of h)
        if (I.startsWith("input.")) {
          const B = I.split(".")[1];
          p.set(I, s[B]);
        } else
          p.set(I, l(I));
      const m = this.evaluateFormulaWithDeps(v.formula, p, s);
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
    if (!((e = this.spec) != null && e.inputs)) throw new kt("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new kt(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new kt(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new kt("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new kt(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new kt(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new kt(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
}, ah = { id: "formula-pricing" }, ch = {
  key: 1,
  class: "extras"
}, uh = { class: "heading" }, hh = { id: "hardware-total" }, dh = { class: "heading panels" }, fh = !1, ph = /* @__PURE__ */ Ae({
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
    const e = Pt(() => Promise.resolve().then(() => Ki)), s = i, n = t, r = io("calculator"), o = se(() => r()), l = z("production");
    let a = null;
    const u = z(null), d = z([]), v = z(!1), h = z(""), p = se(() => {
      if (!v.value || !d.value.length || d.value.every((x) => x.value === null)) return null;
      const te = F();
      return nt(() => n("panel-result", te)), te;
    }), m = se(() => {
      if (!o.value || !v.value || !d.value.length || d.value.every((x) => x.value === null)) return;
      const te = q();
      return nt(() => n("hardware-result", te, I.value)), te;
    }), I = se(() => {
      if (m.value)
        return Object.values(m.value).reduce((te, x) => te + x.totalCost, 0);
    });
    Te(p, (te) => {
      var Y, D, _;
      if (!v.value || !te || !o.value || !((Y = o.value) != null && Y.inputShapes)) return;
      const x = (K) => K != null && K.name ? K.name.toLowerCase() : "", S = new Map(
        o.value.inputShapes.map((K) => [x(K), K])
      ), E = /* @__PURE__ */ new Set();
      for (const K of Object.values(p.value)) {
        if (!K.name) continue;
        const R = x(K), j = S.get(R), V = {
          ...K,
          name: K.name.toUpperCase() || (j == null ? void 0 : j.name.toUpperCase()),
          material: ((D = K.material) == null ? void 0 : D.toUpperCase()) || ((_ = j == null ? void 0 : j.material) == null ? void 0 : _.toUpperCase()),
          bandingOptions: K.bandingOptions || {},
          finishOptions: K.finishOptions || {},
          orientationLock: K.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, ie = j || o.value.createInputShape(V);
        if (j) {
          Object.assign(j, V);
          for (const le of ["banding", "finish"])
            o.value.initExtrasOptions(j, le);
        } else
          o.value.inputShapes.push(ie);
        E.add(R);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (K) => E.has(x(K))
      );
    }, { immediate: !1 }), rt(() => J());
    const B = (te) => {
      s.debug && console.log(te);
    }, A = () => {
      d.value = Object.values(u.value.inputs).map((te) => ({
        value: te.default ?? null
      })), console.log(d.value);
    }, w = (te, x) => {
      d.value[te] && (d.value[te].value = x);
    }, F = () => {
      try {
        return a.calculatePanelsFromFields(d.value);
      } catch (te) {
        return o.value.inputShapes.length = 0, console.error(te), null;
      }
    }, q = () => {
      try {
        return a.calculateHardwareFromFields(d.value);
      } catch (te) {
        return console.error(te), null;
      }
    }, J = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (B(`SmartCut - Formula calculator init from url: ${s.url}`), a = new xn({ url: s.url }), u.value = await a.getSpec()) : s.spec && (B("SmartCut - Formula calculator init with JSON"), a = new xn({ spec: s.spec }), u.value = await a.getSpec()), A(), v.value = !0;
    };
    return (te, x) => {
      var S, E;
      return y(), T(we, null, [
        l.value === "development" && fh ? (y(), T("div", lh, [
          x[1] || (x[1] = O("div", null, "Developer information", -1)),
          ve(P(e), {
            data: [p.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        O("div", ah, [
          (S = u.value) != null && S.projectName ? (y(), ye(Lt, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: h.value,
            "onUpdate:value": x[0] || (x[0] = (Y) => h.value = Y)
          }, null, 8, ["value"])) : U("", !0),
          (y(!0), T(we, null, $e((E = u.value) == null ? void 0 : E.inputs, (Y, D, _) => {
            var K;
            return y(), ye(Lt, {
              id: "formula-field-" + _,
              key: _,
              type: Y.type,
              label: Y.label,
              placeholder: Y.label,
              min: Y.min ?? 0,
              max: Y.max ?? null,
              default: Y.default ?? 0,
              value: (K = d.value[_]) == null ? void 0 : K.value,
              "onUpdate:value": (R) => w(_, R)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          m.value ? (y(), T("div", ch, [
            O("div", uh, re(P(W)("Hardware")), 1),
            (y(!0), T(we, null, $e(m.value, (Y, D) => (y(), T("div", { key: D }, re(Y.name) + " x" + re(Y.q) + " = " + re(i.formatPrice(Y.totalCost)), 1))), 128)),
            O("div", hh, re(P(W)("Hardware total")) + " = " + re(i.formatPrice(I.value)), 1)
          ])) : U("", !0),
          O("div", dh, re(P(W)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ph }, Symbol.toStringTag, { value: "Module" })), gh = { id: "smartcut-notices" }, mh = { class: "content" }, vh = ["onClick"], yh = ["innerHTML"], bh = /* @__PURE__ */ Ae({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = vs(), n = z({}), r = se(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Bt("font-awesome-icon");
      return y(), ye(ms, { to: "body" }, [
        O("div", gh, [
          ve(so, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Se(["notices-container", t.position])
          }, {
            default: gs(() => [
              (y(!0), T(we, null, $e(P(e), (u) => (y(), T("div", {
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
                O("div", mh, [
                  O("div", {
                    class: "message",
                    onClick: (d) => u.action()
                  }, re(u.message), 9, vh),
                  O("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, yh)
                ]),
                u.persistent ? U("", !0) : (y(), ye(a, {
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
}), Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bh }, Symbol.toStringTag, { value: "Module" }));
export {
  yo as A,
  vo as B,
  jh as C,
  qh as D,
  Ph as E,
  Hh as F,
  Is as I,
  Gh as N,
  Ki as O,
  Gt as S,
  ii as _,
  fi as a,
  ae as b,
  At as c,
  Jt as d,
  _h as e,
  Yl as f,
  Mh as g,
  $t as h,
  $h as i,
  Ah as j,
  Oh as k,
  Eh as l,
  Bh as m,
  Rh as n,
  hi as o,
  k as p,
  bt as q,
  Lh as r,
  jo as s,
  Fh as t,
  Th as u,
  yt as v,
  Ct as w,
  Qs as x,
  ei as y,
  W as z
};
