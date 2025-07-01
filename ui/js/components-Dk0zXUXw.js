var Mr = Object.defineProperty;
var _r = (i, e, t) => e in i ? Mr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var u = (i, e, t) => _r(i, typeof e != "symbol" ? e + "" : e, t);
import { F as hi, i as qr, g as Ce, d as es, a as Yt, c as ts, b as In, e as Ns, f as et, v as ps, h as Br, s as Hr, j as jr, o as Gr, k as Nr, l as Wr, P as Vr } from "./vendor-ov4OC3aS.js";
import { i as Pn, B as Ur } from "./vendor-i18n-BWRGKi6w.js";
import { d as Ae, c as P, o as w, F as ve, r as $e, n as Pe, a as Se, b as A, w as gs, t as re, v as ms, e as U, f as zr, g as Y, h as ne, i as Ie, j as at, k as ot, l as yi, m as ai, u as I, p as qt, q as Yr, s as ge, x as ys, y as Ht, z as we, A as Xr, B as Dt, C as Ln, D as Kr, E as Zr, G as Jr, H as vt, I as Qr, T as eo, J as vs, K as to, L as Ws, M as io, N as so, O as no, P as ro, Q as oo, R as lo } from "./vendor-vue-Cm6Mf_s4.js";
import { u as Dn, a as bs, b as ws, c as ao, d as uo, e as co } from "./composables-BTcydhdJ.js";
import { a as Tn, b as $n, l as nt, c as Mi, d as _i, s as _e, r as dt, e as ui, f as An, g as ho, h as fo, i as po, p as go, S as mo, j as yo, k as vo } from "./vendor-d3-B-JATA3m.js";
const bo = (i, e, t) => {
  const s = i[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((n, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      r.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + e + (e.split("/").length !== t ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function jt(i) {
  return !(!i || typeof i != "string");
}
function wo(i) {
  return !jt(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function rs(i) {
  return !jt(i) || !i || typeof i != "string" ? "" : i.toLowerCase();
}
function os(i) {
  return jt(i) ? i.trim().split(" ").map((e) => Jt(e)).join(" ") : "";
}
function Jt(i) {
  return jt(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function Ss(i) {
  return jt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), i.trim()) : "";
}
function So(i) {
  return jt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function xo(i, e = 100) {
  return jt(i) ? (i = i.trim(), i = i.substring(0, e), i) : "";
}
let En = Pn;
function ko(i) {
  En = i;
}
function De(i, e) {
  var s;
  if (typeof process < "u" && ((s = process == null ? void 0 : process.env) != null && s.VITEST))
    return i;
  const t = En.t(i, { ...e });
  return !t || t === i ? i : Jt(t);
}
const Co = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BbNG1czh.js"), "../translation/cs.json": () => import("./cs-DDy2hFdq.js"), "../translation/da.json": () => import("./da-C8TuYAC4.js"), "../translation/de.json": () => import("./de-B2-0FShO.js"), "../translation/el.json": () => import("./el-CEH9E9ZM.js"), "../translation/en.json": () => import("./en-BYyV2r6b.js"), "../translation/es.json": () => import("./es-BDRDjdDH.js"), "../translation/fi.json": () => import("./fi-BWTr1NcI.js"), "../translation/fr.json": () => import("./fr-BXNPnzBo.js"), "../translation/hi.json": () => import("./hi-Bak-2JPI.js"), "../translation/hr.json": () => import("./hr-B3CJUFsU.js"), "../translation/hu.json": () => import("./hu-BjBJ-XHT.js"), "../translation/id.json": () => import("./id-DaVOnHR4.js"), "../translation/it.json": () => import("./it-CQyVrP0H.js"), "../translation/ja.json": () => import("./ja-BU_s0YAN.js"), "../translation/ko.json": () => import("./ko-D1pGy1LV.js"), "../translation/ms.json": () => import("./ms-o0h-SCNu.js"), "../translation/nl.json": () => import("./nl-DtApX-7e.js"), "../translation/no.json": () => import("./no-DXg8PtNy.js"), "../translation/pl.json": () => import("./pl-CiUsY_Lw.js"), "../translation/pt.json": () => import("./pt-Df7W2tv2.js"), "../translation/ro.json": () => import("./ro-BM6R2_rT.js"), "../translation/ru.json": () => import("./ru-s0FC8pIo.js"), "../translation/sk.json": () => import("./sk-C8I9EMGr.js"), "../translation/sv.json": () => import("./sv-Chw58JBw.js"), "../translation/th.json": () => import("./th-DdeGegci.js"), "../translation/tr.json": () => import("./tr-dk88BIZO.js"), "../translation/uk.json": () => import("./uk-UVCEk26q.js"), "../translation/vi.json": () => import("./vi-CHv9EhQ8.js"), "../translation/zh.json": () => import("./zh-CLzeqcgZ.js") }), qi = Object.keys(Co).map((i) => {
  const e = i.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((i) => i !== "");
qi.length === 0 ? console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.") : console.log(`[i18n] Detected languages: ${qi.join(", ")}`);
const Vs = "en", Xt = Pn.createInstance();
function V(i, e) {
  var n, r;
  if (typeof process < "u" && (((n = process == null ? void 0 : process.env) == null ? void 0 : n.NODE_ENV) === "test" || (r = process == null ? void 0 : process.env) != null && r.VITEST))
    return i;
  if (!Xt.isInitialized) {
    const o = Array.isArray(i) ? i.join(", ") : String(i);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${o}. Returning key.`), o;
  }
  let t = Xt.t(i, e);
  const s = Array.isArray(i) ? i[0] : i;
  return t === s && (console.warn(`[i18n] Translation not found - Key: "${s}"`), console.trace()), t = typeof t == "string" ? t : String(t), Jt(t);
}
const Pi = {}, Io = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (i, e, t) => {
    try {
      if (Pi[i]) {
        t(null, Pi[i]);
        return;
      }
      console.log(`[i18n] Attempting to load local module for language: ${i}`);
      const s = await bo(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BbNG1czh.js"), "../translation/cs.json": () => import("./cs-DDy2hFdq.js"), "../translation/da.json": () => import("./da-C8TuYAC4.js"), "../translation/de.json": () => import("./de-B2-0FShO.js"), "../translation/el.json": () => import("./el-CEH9E9ZM.js"), "../translation/en.json": () => import("./en-BYyV2r6b.js"), "../translation/es.json": () => import("./es-BDRDjdDH.js"), "../translation/fi.json": () => import("./fi-BWTr1NcI.js"), "../translation/fr.json": () => import("./fr-BXNPnzBo.js"), "../translation/hi.json": () => import("./hi-Bak-2JPI.js"), "../translation/hr.json": () => import("./hr-B3CJUFsU.js"), "../translation/hu.json": () => import("./hu-BjBJ-XHT.js"), "../translation/id.json": () => import("./id-DaVOnHR4.js"), "../translation/it.json": () => import("./it-CQyVrP0H.js"), "../translation/ja.json": () => import("./ja-BU_s0YAN.js"), "../translation/ko.json": () => import("./ko-D1pGy1LV.js"), "../translation/ms.json": () => import("./ms-o0h-SCNu.js"), "../translation/nl.json": () => import("./nl-DtApX-7e.js"), "../translation/no.json": () => import("./no-DXg8PtNy.js"), "../translation/pl.json": () => import("./pl-CiUsY_Lw.js"), "../translation/pt.json": () => import("./pt-Df7W2tv2.js"), "../translation/ro.json": () => import("./ro-BM6R2_rT.js"), "../translation/ru.json": () => import("./ru-s0FC8pIo.js"), "../translation/sk.json": () => import("./sk-C8I9EMGr.js"), "../translation/sv.json": () => import("./sv-Chw58JBw.js"), "../translation/th.json": () => import("./th-DdeGegci.js"), "../translation/tr.json": () => import("./tr-dk88BIZO.js"), "../translation/uk.json": () => import("./uk-UVCEk26q.js"), "../translation/vi.json": () => import("./vi-CHv9EhQ8.js"), "../translation/zh.json": () => import("./zh-CLzeqcgZ.js") }), `../translation/${i}.json`, 3);
      Pi[i] = s.default, console.log(`[i18n] Successfully loaded and cached local module for language: ${i}`), t(null, Pi[i]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${i}'. Error: ${s.message}`;
      console.warn(n, s), t(s, null);
    }
  }
};
async function Po() {
  return ko(Xt), await Xt.use(Ur).use(Io).init({
    debug: !1,
    fallbackLng: Vs,
    supportedLngs: qi.length > 0 ? qi : [Vs],
    interpolation: {
      format: function(i, e) {
        return e === "c" ? os(i) : e === "sc" ? Jt(i) : i;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), console.log("[i18n] Initialized. Detected language:", Xt.language), Xt;
}
const Eh = Po().catch((i) => {
  console.error("[i18n] CRITICAL: Initialization failed.", i);
}), zt = 1e-10, Lo = 10, Do = Number.MAX_SAFE_INTEGER, To = 4294967295, He = (i) => typeof i == "number" && Number.isFinite(i), Ri = (i) => Array.isArray(i) && i.length > 0;
function oi(i, e, t = zt) {
  if (i === e) return 0;
  if (Number.isInteger(i) && Number.isInteger(e))
    return i > e ? 1 : -1;
  const s = i - e;
  return Math.abs(s) < t ? 0 : s;
}
const $o = {
  greaterThan: (i, e, t = zt) => !He(i) || !He(e) ? !1 : oi(i, e, t) > 0,
  greaterThanOrEqualTo: (i, e, t = zt) => !He(i) || !He(e) ? !1 : oi(i, e, t) >= 0,
  lessThan: (i, e, t = zt) => !He(i) || !He(e) ? !1 : oi(i, e, t) < 0,
  lessThanOrEqualTo: (i, e, t = zt) => !He(i) || !He(e) ? !1 : oi(i, e, t) <= 0,
  equalTo: (i, e, t = zt) => !He(i) || !He(e) ? !1 : oi(i, e, t) === 0
};
function Ao(i) {
  return He(i) ? Number.isInteger(i) ? i : Number(i.toFixed(Lo)) : !1;
}
function Eo(i) {
  if (!He(i) || i < 0 || i > Do)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (To + 1) * i);
}
function Oo(i, e) {
  if (!Ri(i))
    throw new Error("Invalid array parameter");
  if (!He(e) || e < 0 || e > i.length)
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
    if (!Ri(e))
      throw new Error("Invalid input array");
    return e.reduce((t, s) => t + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, t = null) {
    if (!Ri(e))
      throw new Error("Invalid input array");
    const s = t ?? this.calculateMean(e), n = e.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Ri(e))
      throw new Error("Invalid input array");
    const t = this.calculateMean(e);
    if (t === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, t) / t;
  }
}
const he = {
  ...$o,
  isNumber: He,
  round: Ao,
  getRandom: Eo,
  getRandomSample: Oo,
  calculateStandardDeviation: Li.calculateStandardDeviation.bind(Li),
  calculateCoefficientOfVariation: Li.calculateCoefficientOfVariation.bind(Li)
}, is = 10, Us = 0;
class Bi extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const li = {
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
function Ro(i, e) {
  let t;
  if (typeof i == "number" ? t = i : t = new hi(i).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(t * s) / s;
  }
  return t;
}
function Fo(i, e) {
  const t = new hi(i);
  if (e > 0) {
    const s = t.mul(e), n = Math.round(s.valueOf());
    return new hi(n, e).toFraction(!0);
  }
  return t.simplify().toFraction(!0);
}
function Mo(i, e, t = !1) {
  const s = i == null || String(i).trim() === "";
  if (t && s)
    return { value: null, valid: !1, message: "field_required" };
  if (!t && s)
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
    messageData: e
  };
}
function _o(i = "en-US") {
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
function Fi(i) {
  if (i == null || i === "") return null;
  const e = String(i).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: t, decimalSeparator: s } = _o(), n = e.replace(new RegExp(`\\${t}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch (t) {
    throw new Bi(`Failed to parse locale number: "${i}". ${t.message || "Parsing error"}`);
  }
}
function xs(i) {
  if (!i) return !1;
  const e = i.toString().trim();
  if (!e) return !1;
  const t = Object.keys(li).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${t}]|[${t}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function On(i, e = !1) {
  if (i == null || i === "") return null;
  let t = String(i).trim();
  if (!t) return null;
  const s = Object.keys(li).join("");
  t = t.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(li).join(""), r = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), l = t.match(r), a = t.match(o);
    if (l) {
      const c = l[1], h = l[2], y = l[3], d = li[y];
      if (d)
        return `${c}${h} ${d}`;
      throw new Error(`Unknown vulgar fraction character: ${y}`);
    } else if (a) {
      const c = a[1] || "", h = a[2], y = li[h];
      if (y)
        return `${c}${y}`;
      throw new Error(`Unknown vulgar fraction character: ${h}`);
    } else if (xs(t)) {
      let c = "";
      t.startsWith("-") && (c = "-", t = t.substring(1).trim());
      const h = t.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((h.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return c + h;
    } else {
      e ? (t = t.replace(/[^0-9,. -]/g, ""), t = t.replace(/\s/g, "")) : (t = t.replace(/[^0-9.-]/g, ""), t = t.replace(/,/g, "")), t.startsWith(".") && (t = "0" + t), t.startsWith("-.") && (t = "-0." + t.substring(2));
      const c = t.split(".");
      c.length > 2 && (t = c[0] + "." + c.slice(1).join(""));
      const h = e ? Fi(t) : parseFloat(t);
      return h === null || isNaN(h) || !isFinite(h) ? null : h.toString();
    }
  } catch (n) {
    throw new Bi(
      `Failed to clean numeric input: "${i}". ${n.message || "Cleaning error"}`
    );
  }
}
function Oh(i, e, t = null, s = null) {
  if (i && !(!ke(i) && !At(i))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of i.numberFormatKeys)
      if (typeof i[n] == "object" && i[n] !== null)
        for (const r in i[n])
          Object.prototype.hasOwnProperty.call(i[n], r) && (i[n][r] = S({ v: i[n][r], nf: e, dp: t, pl: !1, fr: s }));
      else
        i[n] = S({ v: i[n], nf: e, dp: t, pl: !1, fr: s });
  }
}
function qo(i) {
  return /^-?\d*\.?\d+$/.test(i);
}
function Bo(i) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(i) || /^-?\d+$/.test(i);
}
function S(i) {
  var o;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && ((o = i.o) == null ? void 0 : o.numberFormat) !== "fraction" ? null : "";
  const e = i.o ?? {}, t = i.nf ?? (e == null ? void 0 : e.numberFormat) ?? "decimal", s = i.dp ?? (e == null ? void 0 : e.decimalPlaces) ?? is, n = i.pl ?? (e == null ? void 0 : e.parseLocale) ?? !1, r = i.fr ?? (e == null ? void 0 : e.fractionRoundTo) ?? Us;
  if (t === "decimal") {
    if (typeof i.v == "number") {
      if (typeof s == "number" && s !== is) {
        const l = Math.pow(10, s);
        return Math.round(i.v * l) / l;
      }
      return i.v;
    }
    if (typeof i.v == "string") {
      const l = i.v.trim();
      if (qo(l) && !n) {
        const a = parseFloat(l);
        if (isFinite(a)) {
          if (typeof s == "number" && s !== is) {
            const c = Math.pow(10, s);
            return Math.round(a * c) / c;
          }
          return a;
        }
      }
    }
  } else if (t === "fraction" && typeof i.v == "string") {
    const l = i.v.trim();
    if (Bo(l))
      try {
        const a = new hi(l);
        if (isFinite(a.valueOf())) {
          if (r === 0 || r === Us)
            return a.toFraction(!0);
          const c = a.mul(r), h = Math.round(c.valueOf());
          return new hi(h, r).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const l = On(i.v, n);
    return l === null || l === "" ? t === "decimal" ? null : "" : t === "decimal" ? Ro(l, s) : Fo(l, r);
  } catch (l) {
    throw l instanceof Bi ? l : new Bi(
      `Failed to convert number format: "${i.v}" to ${t}. ${l.message}`
    );
  }
}
const Hi = {
  missingProperty: (i, e) => `[Sorting Warning] Missing property "${i}" in ${e}`,
  missingMethod: (i, e) => `[Sorting Warning] Missing method "${i}" in ${e}`,
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
const fe = (i, e, t) => e in i ? i[e] : (console.warn(Hi.missingProperty(String(e), t)), null), Di = (i, e) => (t, s) => {
  const n = i(t, s);
  return n !== 0 ? n : e(t, s);
}, Ut = (i, e) => {
  if (!zs(i) || !zs(e))
    return console.warn(Hi.missingArea), 0;
  const t = i.getArea(), s = e.getArea();
  return t < s ? -1 : t > s ? 1 : 0;
}, st = (i, e) => {
  const t = fe(i, "id", "first item"), s = fe(e, "id", "second item");
  if (t === null || s === null || t === void 0 || s === void 0) return 0;
  const n = t.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function ct(i) {
  const e = Array.isArray(i[0]) ? i.map(([t, s]) => ({ key: t, direction: s })) : i;
  return (t, s) => {
    for (const { key: n, direction: r } of e) {
      const o = fe(t, n, "first item"), l = fe(s, n, "second item");
      if (!(o === null || l === null) && o !== l)
        return r === "desc" ? o < l ? 1 : -1 : o < l ? -1 : 1;
    }
    return 0;
  };
}
const ci = {
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
    st
  ),
  WDIDA: Di(
    ct([["w", "desc"]]),
    st
  ),
  // Area-based sorts
  AD: (i, e) => -Ut(i, e),
  AA: Ut,
  AAID: Di(
    Ut,
    st
  ),
  ADID: Di(
    (i, e) => -Ut(i, e),
    st
  ),
  // ID sorts
  ID: st,
  IDDesc: (i, e) => -st(i, e),
  StockID: (i, e) => {
    const t = fe(i, "stock", "first item"), s = fe(e, "stock", "second item");
    return !t || !s ? 0 : st(t, s);
  },
  StockIDAD: (i, e) => {
    const t = fe(i, "stock", "first item"), s = fe(e, "stock", "second item");
    if (!t || !s) return 0;
    const n = st(t, s);
    return n !== 0 ? n : -Ut(i, e);
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
    const t = fe(i, "placementOrder", "first item") ?? 0, s = fe(e, "placementOrder", "second item") ?? 0;
    return t - s;
  },
  typePlacementOrder: (i, e) => {
    const t = fe(i, "offcut", "first item"), s = fe(e, "offcut", "second item"), n = fe(i, "placementOrder", "first item") ?? 0, r = fe(e, "placementOrder", "second item") ?? 0;
    return t && !s ? 1 : !t && s ? -1 : n - r;
  },
  typeID: (i, e) => {
    const t = fe(i, "offcut", "first item"), s = fe(e, "offcut", "second item");
    return t && !s ? 1 : !t && s ? -1 : st(i, e);
  },
  stockIDTypePlacementOrder: (i, e) => {
    const t = fe(i, "stock", "first item"), s = fe(e, "stock", "second item");
    if (!t || !s) return 0;
    const n = st(t, s);
    if (n !== 0) return n;
    const r = fe(i, "offcut", "first item"), o = fe(e, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = fe(i, "placementOrder", "first item") ?? 0, a = fe(e, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, e) => {
    const t = fe(i, "stock", "first item"), s = fe(e, "stock", "second item");
    if (!(t != null && t.id) || !(s != null && s.id)) return 0;
    const n = st(t, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in e) {
      const r = fe(i, "placementOrder", "first item") ?? 0, o = fe(e, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, e) => {
    const t = fe(i, "placementOrder", "first item") ?? 0, s = fe(e, "placementOrder", "second item") ?? 0, n = t - s;
    if (n !== 0) return n;
    const r = fe(i, "groupPlacementOrder", "first item") ?? 0, o = fe(e, "groupPlacementOrder", "second item") ?? 0;
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
    return !Ys(i) || !Ys(e) ? (console.warn(Hi.missingAspect), 0) : e.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (e, t) => !Xs(e) || !Xs(t) ? (console.warn(Hi.missingLongSide), 0) : t[i] === e[i] ? -Ut(e, t) : parseFloat(String(t[i])) - parseFloat(String(e[i]));
  }
};
function Ho(i) {
  return ke(i) || Qe(i) || Xi(i);
}
function jo(i, e, t) {
  var r, o;
  if (!t) return !0;
  const s = (r = e == null ? void 0 : e.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function Go(i, e, t) {
  return t ? !N(i.t) || !N(e.t) ? !1 : Qe(i) ? he.equalTo(S({ v: i.t }), S({ v: e.t })) : i.t === e.t : !0;
}
function No(i, e, t) {
  return (t == null ? void 0 : t.stockType) !== "linear" || !Qe(i) && !ke(i) ? !0 : us(i, 0, e) && he.equalTo(S({ v: i.w }), S({ v: e.w })) || us(i, 1, e) && he.equalTo(S({ v: i.l }), S({ v: e.w }));
}
function Wo(i, e, t, s = 0) {
  const n = ke(i[0]), r = t.stockType;
  if (i.some((v) => N(v.stockLock) && v.stockLock.length))
    return { stockList: e, shapeList: i, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((v) => n || v.autoAdd === !0 || N(v.q) && v.q > 0);
  const l = e.some((v) => N(v.material)), a = e.some((v) => N(v.t)), c = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), p = [];
  let g = s;
  for (const v of i) {
    const O = e.map((W, J) => {
      const k = Ho(v) && Ui(v, W, void 0, t), C = jo(v, W, l), T = Go(v, W, a), K = No(v, W, t);
      return {
        stockItem: W,
        stockIndex: J,
        fit: k,
        material: C,
        thickness: T,
        width: K,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: k && C && T && (r !== "linear" || K)
      };
    });
    v.stockMatch = {
      fit: O.some((W) => W.fit),
      material: !l || O.some((W) => W.material),
      thickness: !a || O.some((W) => W.thickness),
      width: r !== "linear" || O.some((W) => W.width)
    };
    const M = O.filter((W) => W.satisfiesAll), _ = M.length > 0;
    if (!n && _) {
      const W = M.map((J) => J.stockItem.getParentID());
      v.stockLock = W, W.forEach((J) => c.add(J));
    }
    v.stockMatch.fit ? _ || (l && !v.stockMatch.material && (d.add(v), p.push(new le({
      category: ["part", "stock"],
      item: v,
      field: [["material"]],
      index: [g],
      message: "errors.validation.no_matching_stock_material"
    }))), a && !v.stockMatch.thickness && (d.add(v), p.push(new le({
      category: ["part", "stock"],
      item: v,
      field: [["t"]],
      index: [g],
      message: "errors.validation.no_matching_stock_thickness"
    }))), r === "linear" && !v.stockMatch.width && (y.add(v), p.push(new le({
      category: ["part", "stock"],
      item: v,
      field: [["w"]],
      index: [g],
      message: "errors.validation.no_matching_stock_width"
    }))), v.stockMatch.material && v.stockMatch.thickness && (r !== "linear" || v.stockMatch.width) && (d.add(v), p.push(new le({
      category: ["part", "stock"],
      item: v,
      field: [["material"], ["t"]],
      index: [g],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (h.add(v), p.push(new le({
      category: ["part", "stock"],
      item: v,
      field: [["l"], ["w"]],
      index: [g],
      message: "errors.validation.will_not_fit"
    }))), g++;
  }
  i.forEach((v) => v.stockMatch = null);
  let x, R;
  return n ? (x = i.filter((v) => h.has(v) || y.has(v) || d.has(v)).sort(ci.ID), R = []) : (x = i.filter((v) => h.has(v) || y.has(v) || d.has(v) || !v.stockLock || !v.stockLock.length).sort(ci.ID), R = e.filter((v) => !c.has(v.parentID)).sort(ci.ID), e = e.filter((v) => it(v)).filter((v) => c.has(v.parentID)), i = i.filter((v) => {
    var O;
    return !h.has(v) && !y.has(v) && !d.has(v) && ((O = v == null ? void 0 : v.stockLock) == null ? void 0 : O.length);
  })), {
    stockList: e,
    unusableStock: R,
    shapeList: i,
    unusableShapes: x,
    newIssues: p
  };
}
class le {
  constructor({
    item: e = null,
    message: t = "",
    field: s = [],
    index: n = null,
    listId: r = null,
    issues: o = null,
    type: l = "error",
    category: a = null,
    throwError: c = !1,
    shouldTranslate: h = !0
  }) {
    u(this, "message");
    u(this, "identifier");
    u(this, "field");
    u(this, "index");
    u(this, "listId");
    u(this, "type");
    u(this, "category");
    this.message = h ? De(t) : t, this.field = s.map((d) => [...d]), this.index = n ? [...n] : [], this.listId = r ? [...r] : [], this.type = l, this.category = a, this.identifier = this.determineIdentifier(e, this.index), this.addToItemIssues(e), Array.isArray(o) && o.push(this);
    const y = `issue created for ${Yl(e)}: ${this.identifier || "N/A"} - ${this.field.map((d) => d.join(".")).join(", ")}`;
    if (c)
      throw new Error(y);
  }
  determineIdentifier(e, t) {
    var n, r, o;
    if (!e) return "";
    const s = e;
    return (n = s.name) != null && n.length ? s.name.toLocaleUpperCase() : (r = s.id) != null && r.length ? s.id : (o = s.parentID) != null && o.length ? s.parentID : typeof t[0] == "number" ? String(t[0] + 1) : "";
  }
  addToItemIssues(e) {
    if (!e) return;
    const t = e;
    "issues" in t && Array.isArray(t.issues) && t.issues.push(this);
  }
  getHumanReadableIndexes() {
    return this.index.length ? this.index.map((e) => {
      const t = typeof e == "number" ? e : parseInt(String(e), 10);
      return isNaN(t) ? "" : String(t + 1);
    }).filter(Boolean).join(",") : "";
  }
  isMatch(e, t) {
    const s = this.field.some((r) => qr(r, e)), n = this.index.includes(t);
    return s && n;
  }
}
const Vo = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Uo(i) {
  return Vo[i] ?? i;
}
function Lt(i) {
  return i.filter((e) => e.type === "error");
}
function zo(i, e) {
  return typeof i == "object" && i !== null && e in i;
}
function Rn(i) {
  return zo(i, "issues") && Array.isArray(i.issues);
}
function Ks(i, e, t = !1) {
  var r;
  if (!Rn(i) || !((r = i.issues) != null && r.length))
    return !1;
  const s = t ? "warning" : "error";
  return i.issues.filter((o) => o.type === s).some((o) => {
    var l;
    return (l = o.field) != null && l.length ? o.field.some((a) => a.every((c, h) => c === Uo(e[h]))) : !1;
  });
}
const ei = ({
  item: i,
  field: e,
  index: t,
  newIssues: s,
  min: n = null,
  max: r = null,
  required: o = !1,
  allowZero: l = !0,
  isWarning: a = !1,
  category: c = []
}) => {
  if (!i)
    throw new Error("Item is required for validation");
  let h = Ce(i, e);
  try {
    if (h = S({ v: h }), o && (h === null || h === ""))
      return new le({
        item: i,
        message: De("errors.validation.not_set", {
          0: qe[e.join(".")]
        }),
        shouldTranslate: !1,
        field: [e],
        index: [t],
        type: a ? "warning" : "error",
        issues: s,
        category: c
      }), null;
    if (!l && h === 0)
      return new le({
        item: i,
        message: De("errors.validation.greater_than", {
          0: qe[e.join(".")],
          1: 0
        }),
        shouldTranslate: !1,
        field: [e],
        index: [t],
        type: a ? "warning" : "error",
        issues: s,
        category: c
      }), 0;
  } catch {
    return Fn({
      item: i,
      field: e,
      value: Ce(i, e),
      index: t,
      issues: s,
      isWarning: a ?? !1
    }), null;
  }
  return Yo({ item: i, field: e, value: h, index: t, issues: s, min: n, isWarning: a ?? !1 }), Xo({ item: i, field: e, value: h, index: t, issues: s, max: r, isWarning: a ?? !1 }), h;
}, Fn = ({
  item: i,
  field: e,
  value: t,
  index: s,
  issues: n,
  isWarning: r
}) => {
  new le({
    item: i,
    message: De("errors.validation.not_understood", {
      0: e.join("."),
      1: t
    }),
    shouldTranslate: !1,
    field: [e],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, Yo = ({
  item: i,
  field: e,
  value: t,
  index: s,
  issues: n,
  min: r,
  isWarning: o
}) => {
  typeof t != "number" || typeof r != "number" || t < r && new le({
    item: i,
    message: De("errors.validation.greater_than_or_equal", {
      0: qe[e.join(".")],
      1: r
    }),
    shouldTranslate: !1,
    field: [e],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, Xo = ({
  item: i,
  field: e,
  value: t,
  index: s,
  issues: n,
  max: r,
  isWarning: o
}) => {
  typeof t != "number" || typeof r != "number" || t > r && new le({
    item: i,
    message: De("errors.validation.less_than_or_equal", {
      0: qe[e.join(".")],
      1: r
    }),
    shouldTranslate: !1,
    field: [e],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, Mn = (i, e, t, s, n, r) => {
  const o = Ce(i, e);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new le({
      item: i,
      message: De("errors.validation.must_be_string", {
        0: qe[e]
      }),
      shouldTranslate: !1,
      field: [[e]],
      index: [s],
      type: n ? "warning" : "error",
      issues: r
    });
    return;
  }
  const l = o.toLowerCase();
  t.includes(l) || new le({
    item: i,
    message: De("errors.validation.must_be_values", {
      0: qe[e],
      1: t.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: [s],
    type: n ? "warning" : "error",
    issues: r
  });
}, Ko = ({ item: i, index: e, max: t, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ei({
    item: i,
    field: ["x"],
    index: e,
    newIssues: r,
    min: 0,
    max: t,
    isWarning: s,
    category: n
  }), r;
}, Zo = ({ item: i, index: e, max: t, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ei({
    item: i,
    field: ["y"],
    index: e,
    newIssues: r,
    min: 0,
    max: t,
    isWarning: s,
    category: n
  }), r;
}, Jo = ({ item: i, index: e, max: t, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ei({
    item: i,
    field: ["l"],
    index: e,
    newIssues: r,
    required: !0,
    allowZero: !1,
    min: 0,
    max: t,
    isWarning: s,
    category: n
  }), r;
}, Qo = ({ item: i, index: e, max: t, isWarning: s = !1, category: n = [] }) => {
  const r = [];
  return ei({
    item: i,
    field: ["w"],
    index: e,
    newIssues: r,
    required: !0,
    allowZero: !1,
    min: 0,
    max: t,
    isWarning: s,
    category: n
  }), r;
}, el = ({ item: i, index: e, max: t, isWarning: s = !1, saw: n, category: r = [] }) => {
  const o = [];
  return (n == null ? void 0 : n.cutType) === "beam" && (Ce(i, "t") || new le({
    item: i,
    message: De("errors.saw.thickness_required_for_beam_saw"),
    shouldTranslate: !1,
    field: [["t"]],
    index: [e],
    type: "error",
    issues: o,
    category: r
  })), ei({
    item: i,
    field: ["t"],
    index: e,
    newIssues: o,
    allowZero: !1,
    min: 0,
    max: t,
    isWarning: s,
    category: r
  }), o;
}, tl = ({ item: i, index: e, isWarning: t = !1, category: s = [] }) => {
  const n = [], r = Ce(i, "q");
  if (r == null) return n;
  try {
    const o = S({ v: r }), l = Ce(i, "autoAdd");
    o <= 0 && l !== !0 && new le({
      item: i,
      message: De("errors.validation.greater_than_or_equal", {
        0: qe.q,
        1: 0
      }),
      shouldTranslate: !1,
      field: [["q"]],
      index: [e],
      type: t ? "warning" : "error",
      issues: n,
      category: s
    });
  } catch {
    Fn({
      item: i,
      field: ["q"],
      value: r,
      index: e,
      issues: n,
      isWarning: t
    });
  }
  return n;
}, il = ({ item: i, index: e, isWarning: t = !1 }) => {
  const s = [];
  return Mn(i, "orientationLock", ["l", "w"], e, t, s), s;
}, sl = ({ item: i, index: e, isWarning: t = !1 }) => {
  const s = [];
  return Mn(i, "grain", ["l", "w"], e, t, s), s;
}, nl = ({ item: i, index: e, isWarning: t = !1 }) => {
  const s = [], n = Ce(i, "banding");
  return n != null && (typeof n != "object" || n === null) && new le({
    item: i,
    message: De("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: t ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, rl = ({ item: i, index: e, isWarning: t = !1, category: s = [] }) => {
  const n = [], r = Ce(i, "customData");
  if (r == null) return n;
  if (typeof r != "object" || r === null)
    return new le({
      item: i,
      message: De("errors.validation.must_be_object", {
        0: qe.customData
      }),
      shouldTranslate: !1,
      field: [["customData"]],
      index: [e],
      issues: n,
      category: s
    }), n;
  for (const [, o] of Object.entries(r))
    if (o != null) {
      const l = typeof o;
      ["string", "number", "boolean"].includes(l) || new le({
        item: i,
        message: De("errors.validation.must_be_string_number_boolean", {
          0: qe.customData
        }),
        shouldTranslate: !1,
        field: [["customData"]],
        index: [e],
        type: t ? "warning" : "error",
        issues: n,
        category: s
      });
    }
  return n;
}, ol = ({
  item: i,
  partTrim: e,
  index: t,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const r = Ce(i, "l"), o = Ce(i, "w");
  if (!r || !o) return n;
  try {
    const l = S({ v: e }), a = S({ v: r }), c = S({ v: o }), h = a - l * 2, y = c - l * 2;
    (h <= 0 || y <= 0) && new le({
      item: i,
      message: De("errors.trim.too_much", {
        0: "part",
        1: l,
        z: `${h}x${y}`
      }),
      shouldTranslate: !1,
      field: [["l"], ["w"], ["trim"]],
      index: [t],
      type: s ? "warning" : "error",
      issues: n,
      category: ["part"]
    });
  } catch {
  }
  return n;
}, ll = ({
  item: i,
  index: e,
  min: t = null,
  max: s = null,
  isWarning: n = !1,
  category: r = []
}) => {
  const o = [], l = Ce(i, "l"), a = Ce(i, "w"), c = Ce(i, "trim");
  if (!l || !a || !c) return o;
  if ((!it(i) || it(i) && !("trimmed" in i && i.trimmed)) && typeof c == "object" && c !== null) {
    for (const y of Object.keys(c))
      ei({
        item: i,
        field: ["trim", y],
        index: e,
        newIssues: o,
        min: t,
        max: s,
        isWarning: n,
        category: r
      });
    if (!o.length)
      try {
        const y = S({ v: l }), d = S({ v: a }), p = (v) => {
          if (v == null) return 0;
          if (typeof v == "number" || typeof v == "string")
            try {
              return S({ v }) || 0;
            } catch {
              return 0;
            }
          return 0;
        }, g = {
          x1: p(Ce(c, "x1")),
          x2: p(Ce(c, "x2")),
          y1: p(Ce(c, "y1")),
          y2: p(Ce(c, "y2"))
        }, x = g.x1 + g.x2, R = g.y1 + g.y2;
        x >= y && new le({
          item: i,
          message: De("errors.trim.too_much", {
            0: `${qe.x1.toUpperCase()} + ${qe.x2.toUpperCase()}`,
            1: qe.l,
            2: y
          }),
          shouldTranslate: !1,
          field: [["trim", "x1"], ["trim", "x2"]],
          index: [e],
          type: n ? "warning" : "error",
          issues: o,
          category: r
        }), R >= d && new le({
          item: i,
          message: De("errors.trim.too_much", {
            0: `${qe.y1.toUpperCase()} + ${qe.y2.toUpperCase()}`,
            1: qe.w,
            2: d
          }),
          shouldTranslate: !1,
          field: [["trim", "y1"], ["trim", "y2"]],
          index: [e],
          type: n ? "warning" : "error",
          issues: o,
          category: r
        });
      } catch {
      }
  }
  return o;
}, al = ({
  item: i,
  inputStockList: e,
  saw: t,
  partTrim: s = 0,
  index: n
}) => {
  var y;
  const r = [], o = t.stockType, l = Ce(i, "q"), a = Ce(i, "l"), c = Ce(i, "w");
  return !l || !a || !c || ("applyPartTrim" in i && typeof i.applyPartTrim == "function" && i.applyPartTrim(s, o), Rn(i) && ((y = i.issues) != null && y.length)) || Wo([i], e, t, n).newIssues.forEach((d) => {
    r.push(d);
  }), r;
}, ul = ({ item: i, index: e }) => {
  const t = Ce(i, "machining");
  t && "validateEverything" in t && t.validateEverything(i, e);
}, Xe = {
  customData: rl,
  banding: nl,
  partTrim: ol,
  trim: ll,
  x: Ko,
  y: Zo,
  l: Jo,
  w: Qo,
  t: el,
  q: tl,
  orientationLock: il,
  grain: sl,
  stockMatch: al,
  machining: ul
};
function ls(i) {
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
const Mt = [null, void 0, "none", ""], rt = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: Mt
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: Mt
    },
    roll: {
      guillotine: ["w"],
      efficiency: Mt
    },
    linear: {
      guillotine: Mt,
      efficiency: Mt
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
function cl(i) {
  var e;
  return ((e = rt.cutTypes) == null ? void 0 : e[i]) ?? Mt;
}
function hl(i, e) {
  var t, s;
  return ((s = (t = rt.cutPreferences) == null ? void 0 : t[i]) == null ? void 0 : s[e]) ?? Mt;
}
function dl(i) {
  var e;
  return ((e = rt.cutTypes) == null ? void 0 : e[i]) ?? [];
}
function fl(i, e) {
  var t, s;
  return ((s = (t = rt.cutPreferences) == null ? void 0 : t[i]) == null ? void 0 : s[e]) ?? [];
}
function ss() {
  return rt.stockTypes;
}
function _n(i) {
  return rt.stockTypes.includes(i);
}
function qn(i, e) {
  return cl(i).includes(e);
}
function Bn(i, e, t) {
  return hl(i, e).includes(t);
}
function yt(i, e, t, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!ks(i)) {
    console.error(De(t, s));
    return;
  }
  new le({
    category: ["saw"],
    item: i,
    field: Array.isArray(e) ? e.map((n) => [n]) : [[e]],
    message: De(t, s),
    shouldTranslate: !1
  });
}
class Et {
  constructor(e, t) {
    u(this, "bladeWidth");
    u(this, "stockType");
    u(this, "cutType");
    u(this, "cutPreference");
    u(this, "stackHeight");
    u(this, "options");
    u(this, "guillotineOptions");
    u(this, "efficiencyOptions");
    u(this, "issues");
    e = Bt(e), this.issues = [], t = t ?? (e == null ? void 0 : e.stockType) ?? ss()[0], pl(this, e, t), this.bladeWidth = S({ v: e == null ? void 0 : e.bladeWidth }) ?? rt.defaults.bladeWidth, this.stockType = t ?? (e == null ? void 0 : e.stockType) ?? ss()[0], _n(this.stockType) || (this.stockType = ss()[0]), this.cutType = e == null ? void 0 : e.cutType, qn(this.stockType, this.cutType) || (this.cutType = dl(this.stockType)[0]), this.cutPreference = e == null ? void 0 : e.cutPreference, Bn(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = fl(this.stockType, this.cutType)[0]), this.stackHeight = (e == null ? void 0 : e.stackHeight) ?? rt.defaults.stackHeight, this.guillotineOptions = es({}, e == null ? void 0 : e.guillotineOptions, rt.defaults.guillotine), this.efficiencyOptions = es({}, e == null ? void 0 : e.efficiencyOptions, rt.defaults.efficiency), this.options = es({}, e == null ? void 0 : e.options, rt.defaults.options), this.options.minSpacing = S({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = S({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = S({ v: this.options.minSpacingDimension.minSpacing }) ?? 0;
  }
  clone() {
    const e = structuredClone(this);
    return new Et(e);
  }
  //does not cater for shape dimensions
  get minSpacing() {
    return this.cutType !== "efficiency" ? 0 : this.options.minSpacing;
  }
}
function pl(i, e, t) {
  var s, n, r, o, l, a, c, h, y, d;
  if (i.issues = [], N(e == null ? void 0 : e.bladeWidth) && (e.bladeWidth = typeof e.bladeWidth == "string" ? S({ v: e.bladeWidth }) : e.bladeWidth), (Yt(e.bladeWidth) || e.bladeWidth < 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: e.bladeWidth ?? "none" }
  ), !_n(t)) {
    yt(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: t }
    );
    return;
  }
  e.cutType && !qn(t, e.cutType) && yt(
    i,
    "cutType",
    "errors.saw.cutType.invalid",
    { cutType: e.cutType, stockType: t }
  ), e.cutType && e.cutPreference && !Bn(t, e.cutType, e.cutPreference) && yt(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: e.cutPreference || "none",
      cutType: e.cutType || "none",
      stockType: t
    }
  ), (e == null ? void 0 : e.cutType) === "efficiency" && ((s = e == null ? void 0 : e.options) != null && s.minSpacing && (e.options.minSpacing = typeof e.options.minSpacing == "string" ? S({ v: e.options.minSpacing }) : e.options.minSpacing, (!N(e == null ? void 0 : e.bladeWidth) || e.bladeWidth <= 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    { minSpacing: e.options.minSpacing }
  ), (Yt(e.options.minSpacing) || e.options.minSpacing < 0) && yt(
    i,
    "options.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacing: e.options.minSpacing ?? "none" }
  )), (n = e == null ? void 0 : e.options) != null && n.minSpacingDimension && (N((o = (r = e == null ? void 0 : e.options) == null ? void 0 : r.minSpacingDimension) == null ? void 0 : o.dimension) && (e.options.minSpacingDimension.dimension = typeof e.options.minSpacingDimension.dimension == "string" ? S({ v: e.options.minSpacingDimension.dimension }) : e.options.minSpacingDimension.dimension, (Yt(e.options.minSpacingDimension.dimension) || e.options.minSpacingDimension.dimension < 0) && yt(
    i,
    "options.minSpacingDimension.dimension",
    "saw.validation.minSpacing.dimension.invalid",
    { minSpacingDimension: e.options.minSpacingDimension.dimension ?? "none" }
  )), (a = (l = e == null ? void 0 : e.options) == null ? void 0 : l.minSpacingDimension) != null && a.minSpacing && (e.options.minSpacingDimension.minSpacing = typeof e.options.minSpacingDimension.minSpacing == "string" ? S({ v: e.options.minSpacingDimension.minSpacing }) : e.options.minSpacingDimension.minSpacing, (Yt(e.options.minSpacingDimension.minSpacing) || e.options.minSpacingDimension.minSpacing < 0) && yt(
    i,
    "options.minSpacingDimension.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacingDimension: e.options.minSpacingDimension.minSpacing ?? "none" }
  )), (h = (c = e == null ? void 0 : e.options) == null ? void 0 : c.minSpacingDimension) != null && h.dimension && ((d = (y = e == null ? void 0 : e.options) == null ? void 0 : y.minSpacingDimension) != null && d.minSpacing) && (!N(e == null ? void 0 : e.bladeWidth) || e.bladeWidth <= 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    {
      dimension: e.options.minSpacingDimension.dimension,
      minSpacing: e.options.minSpacingDimension.minSpacing
    }
  )));
}
function ks(i) {
  return i instanceof Et;
}
function as(i, e = !1) {
  var o, l, a, c;
  const t = typeof i.l == "string" ? S({ v: i.l }) : i.l, s = typeof i.w == "string" ? S({ v: i.w }) : i.w;
  if (!e || !tr(i) || ir(i) || Vl(i) && !(i != null && i.hasTrim))
    return { l: t, w: s };
  const n = S({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + S({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = S({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + S({ v: ((c = i == null ? void 0 : i.trim) == null ? void 0 : c.y2) ?? 0 });
  return {
    l: t - (typeof n == "string" ? S({ v: n }) : n),
    w: s - (typeof r == "string" ? S({ v: r }) : r)
  };
}
function gl(i, e) {
  var t, s, n, r;
  return tr(i) && !ir(i) && (e.l = e.l - (S({ v: ((t = i == null ? void 0 : i.trim) == null ? void 0 : t.x1) ?? 0 }) + S({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), e.w = e.w - (S({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + S({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), e;
}
function ns(i, e, t = !1) {
  let s = {
    l: i.l,
    w: i.w
  };
  (At(i) || ke(i) || Xi(i)) && (s = {
    l: S({ v: i.l }),
    w: S({ v: i.w })
  });
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return t && (s = gl(i, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Hn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function ml(i) {
  ft(i) || (Hn(i), [i.l, i.w] = [i.w, i.l]);
}
function Ui(i, e, t = null, s) {
  var d, p;
  if (!e || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && ks(s) ? n = s.minSpacing : s && ((d = s == null ? void 0 : s.options) != null && d.minSpacing) ? n = S({ v: s.options.minSpacing }) : Ds(e) && (n = (p = e == null ? void 0 : e.saw) == null ? void 0 : p.minSpacing);
  const r = as(e, !0), o = as(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(g, x) {
    return he.equalTo(g, x) || he.lessThanOrEqualTo(g, x - n * 2);
  }
  function a(g) {
    return l(g.l, r.l) && l(g.w, r.w);
  }
  const c = Gn(i, e);
  if (i.orientationLock || t !== null) {
    const x = ns(i, t ?? (c === "w" ? 1 : 0), !0);
    return a(x);
  }
  const h = ns(i, 0, !0);
  if (a(h)) return !0;
  const y = ns(i, 1, !0);
  return a(y);
}
function jn(i) {
  let e = null;
  return ft(i) || Xi(i) ? e = i.direction : (Qe(i) || ke(i)) && (e = i.orientationLock), e;
}
function Gn(i, e) {
  const t = jn(i);
  return N(t) ? !e || ft(i) ? t : Ds(e) ? yl(i, e) : t : null;
}
function yl(i, e) {
  if (!e) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!Ds(e)) throw new Error("container is not a container");
  const t = jn(i);
  if (ft(i)) return t;
  if (!N(t)) return null;
  const s = e.getStock();
  return !s || !N(s == null ? void 0 : s.grain) ? t : t === (s == null ? void 0 : s.grain) ? "l" : "w";
}
function us(i, e = null, t = null) {
  if (!N(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), Nn(i) && e || t && !Ui(i, t, e))
    return !1;
  const s = Gn(i, t);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function cs(i, e = null, t = null) {
  return e === null && (e = i.rot === 0 ? 1 : 0), us(i, e, t) ? (i.rot === e || ml(i), !0) : !1;
}
function ji(i, e = null, t = null) {
  return e ? e = 1 : e = 0, t && e && !Ui(i, t, e) ? !1 : cs(i, e, t);
}
function vl(i) {
  return i.orientationLock === "l" ? ji(i, 0) : i.orientationLock === "w" ? ji(i, 1) : !1;
}
function Nn(i) {
  Hn(i);
  const e = as(i);
  return he.equalTo(e.l, e.w);
}
function Zs(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function di(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function bl(i) {
  return "y";
}
function wl(i, e) {
  const t = "l", s = bl();
  if (!(i != null && i.length)) return null;
  const n = i.reduce((o, l) => o[e] + o[t] > l[e] + l[t] ? o : l);
  return i.filter((o) => o[e] === n[e] && o[t] === n[t]).sort((o, l) => o[s] - l[s])[0];
}
class Kt {
  constructor(e) {
    u(this, "x1");
    u(this, "x2");
    u(this, "y1");
    u(this, "y2");
    u(this, "dimension");
    u(this, "direction");
    u(this, "shapeCollisions");
    u(this, "origin");
    u(this, "type");
    this.x1 = e.x1, this.x2 = e.x2, this.y1 = e.y1, this.y2 = e.y2, this.dimension = Sl(this), this.direction = xl(this), this.type = e != null && e.type ? e.type : null, this.origin = e != null && e.origin ? e.origin : null;
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
function Ct(i, e, t, s, n = null, r = null) {
  return new Kt({ x1: i, y1: e, x2: t, y2: s, origin: n, type: r });
}
function Sl(i) {
  return typeof i > "u" || !he.isNumber(i.x1) || !he.isNumber(i.x2) || !he.isNumber(i.y1) || !he.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function xl(i) {
  return typeof i > "u" || !he.isNumber(i.x1) || !he.isNumber(i.x2) || !he.isNumber(i.y1) || !he.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function kl(i, e) {
  const t = i.getCorners(), s = {};
  return t.bottomLeft.x > 0 && t.bottomLeft.y > 0 && (s.bottomLeftDown = Ct(
    t.bottomLeft.x,
    t.bottomLeft.y,
    t.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = Ct(
    t.bottomLeft.x,
    t.bottomLeft.y,
    0,
    t.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), t.topLeft.x > 0 && t.topLeft.y < e.w && (s.topLeftLeft = Ct(
    t.topLeft.x,
    t.topLeft.y,
    0,
    t.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = Ct(
    t.topLeft.x,
    t.topLeft.y,
    t.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), t.topRight.y < e.w && t.topRight.x < e.l && (s.topRightTop = Ct(
    t.topRight.x,
    t.topRight.y,
    t.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = Ct(
    t.topRight.x,
    t.topRight.y,
    e.l,
    t.topRight.y,
    "topRight",
    "topRightRight"
  )), t.bottomRight.x < e.l && t.bottomRight.y > 0 && (s.bottomRightRight = Ct(
    t.bottomRight.x,
    t.bottomRight.y,
    e.l,
    t.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = Ct(
    t.bottomRight.x,
    t.bottomRight.y,
    t.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const Js = {
  runTests: !1
};
try {
  typeof ts < "u" && ts && (ts.showDiff = !0);
} catch (i) {
  console.warn("Error accessing chaiConfig, skipping configuration:", i);
}
In("tests");
In("timers");
let Zt;
if (typeof Ns == "function")
  Zt = Ns;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const i = new Proxy({}, { get: () => () => i });
  Zt = () => i;
}
function Wn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function Vn(i = [], e = null) {
  i != null && i.length && Wn() && Js && Js.runTests;
}
et.colors = [
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
et("logs");
et("cuts");
et("guillotine");
et("results");
et("scoring");
et("firstShapes");
et("calculations");
et("subset");
et("secondRun");
et("stack");
const Cl = et("errors");
et("allStock");
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
class zi extends Kt {
  //used to mark for removal
  constructor(t) {
    var s, n, r;
    t.x2 < t.x1 && ([t.x1, t.x2] = [t.x2, t.x1]), t.y2 < t.y1 && ([t.y1, t.y2] = [t.y2, t.y1]);
    super(t);
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
    N(t == null ? void 0 : t.stock) && (((n = (s = t.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = t.stock : this.stock = new Wt(t.stock), this.stockId = this.stock.id), this.stockId = (r = t == null ? void 0 : t.stock) == null ? void 0 : r.id, this.type = t.type ?? null, this.isGuillotine = t.isGuillotine, this.guillotineData = N(t.guillotineData) ? t.guillotineData : {}, this.ptxData = N(t.ptxData) ? t.ptxData : {}, this.isHead = N(t.isHead) ? t.isHead : !1, this.isTrim = N(t.isTrim) ? t.isTrim : !1, this.beamTrimX1 = t.beamTrimX1, this.beamTrimY1 = t.beamTrimY1, this.distances = N(t.distances) ? t.distances : {};
  }
  //compress for saving / transfer
  compress() {
    var t;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((t = this == null ? void 0 : this.stock) == null ? void 0 : t.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const t = structuredClone(this);
    return new zi(t);
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
        return he.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return he.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return he.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return he.lessThan(
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
  getLength() {
    return Il(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const t = this.getLength();
    return t ? t * this.stock.getBladeWidth() : 0;
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
class Me {
  constructor(e, t, s = null) {
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
    this.x = parseFloat(e), this.y = parseFloat(t), this.z = parseFloat(s) || 0, this.validate();
  }
  /**
   * clone with the ability to change the coordinates
   * NOTE: looks odd for performance reasons
   */
  clone(e = null, t = null) {
    const s = new Me(e ?? this.x, t ?? this.y);
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
      const s = Pl[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && t.add(s[this.corner][this.grid]), t;
    }
    return (e == null ? void 0 : e.cutType) !== "efficiency" ? (Ti[this.corner] && (this.grid ? Ti[this.corner][this.grid] && Ti[this.corner][this.grid].forEach((s) => t.add(s)) : Ti[this.corner].default.forEach((s) => t.add(s))), t) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => t.add(s)) : $i[this.corner].default.forEach((s) => t.add(s))), t);
  }
}
class Gt {
  constructor(e = []) {
    u(this, "points", /* @__PURE__ */ new Map());
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
function pe(i, e, t, s, n) {
  const r = Ll[i](e, t);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const Ll = {
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
function Dl(i, e, t) {
  var o, l, a, c, h, y;
  const s = new Gt(), n = t.toArray().sort(Un), r = e.getBladeWidth();
  if (n.forEach((d) => {
    const p = d.corner, g = d.type;
    if (!r)
      s.addPoint(d);
    else
      switch (p) {
        case "topRight":
          s.addPoint(
            pe("top", d, r, p),
            g
          ), s.addPoint(
            pe("right", d, r, p),
            g
          );
          break;
        case "topLeft":
          s.addPoint(
            pe("top", d, r, p),
            g
          ), s.addPoint(
            pe("left", d, r, p),
            g
          );
          break;
        case "bottomRight":
          s.addPoint(
            pe("bottom", d, r, p),
            g
          ), s.addPoint(
            pe("right", d, r, p),
            g
          );
          break;
        case "bottomLeft":
          s.addPoint(
            pe("bottom", d, r, p),
            g
          ), s.addPoint(
            pe("left", d, r, p),
            g
          );
          break;
      }
    const x = s.toArray();
    if (r)
      for (let R = x.length; R--; ) {
        const v = x[R];
        t.contains(v) && s.deletePoint(v);
      }
    else
      for (let R = x.length; R--; ) {
        const v = x[R];
        for (let O = i.length; O--; ) {
          const M = i[O];
          if (v.x === M.x && v.y === M.y) {
            s.deletePoint(v);
            break;
          }
        }
      }
  }), r) {
    const d = /* @__PURE__ */ new Set();
    let p, g, x, R;
    ((o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name) === "Stock" && (e != null && e.trimmed) || ((l = e == null ? void 0 : e.constructor) == null ? void 0 : l.name) === "Segment" ? (p = e.x, g = e.y, x = e.x + e.l, R = e.y + e.w) : (p = e.x + ((a = e == null ? void 0 : e.trim) == null ? void 0 : a.x1), g = e.y + ((c = e == null ? void 0 : e.trim) == null ? void 0 : c.y1), x = e.x + e.l - ((h = e == null ? void 0 : e.trim) == null ? void 0 : h.x2), R = e.y + e.w - ((y = e == null ? void 0 : e.trim) == null ? void 0 : y.y2));
    let v = s.toArray();
    for (let O = v.length; O--; ) {
      const M = v[O];
      (he.lessThan(M.x, p) || he.lessThan(M.y, g) || he.greaterThan(M.x, x) || he.greaterThan(M.y, R)) && v.splice(O, 1);
    }
    s.clear(), s.addPoints(v), d.clear(), v = s.toArray();
    for (let O = v.length; O--; ) {
      const M = v[O];
      for (let _ = i.length; _--; ) {
        const W = i[_];
        if (M.collidesWith(W)) {
          s.deletePoint(M);
          break;
        }
      }
    }
  }
  return s;
}
function Tl(i, e, t) {
  let s = [];
  const n = i.getMinSpacing(t.saw), r = e.corner, o = e.direction;
  if (e.type === "shape")
    switch (r) {
      case "topLeft":
        o === "rl" && (s.push(pe("right", e, n, r, o)), s.push(pe("topRight", e, n, r, o))), o === "bt" && (s.push(pe("bottom", e, n, r, o)), s.push(pe("bottomLeft", e, n, r, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(pe("left", e, n, r, o)), s.push(pe("topLeft", e, n, r, o))), o === "bt" && (s.push(pe("bottom", e, n, r, o)), s.push(pe("bottomRight", e, n, r, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(pe("left", e, n, r, o)), s.push(pe("bottomLeft", e, n, r, o))), o === "tb" && (s.push(pe("top", e, n, r, o)), s.push(pe("topRight", e, n, r, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(pe("right", e, n, r, o)), s.push(pe("bottomRight", e, n, r, o))), o === "tb" && (s.push(pe("top", e, n, r, o)), s.push(pe("topLeft", e, n, r, o)));
        break;
    }
  else if (e.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(pe("top", e, 0)), s.push(pe("centre", e, 0)), s.push(pe("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(pe("left", e, 0)), s.push(pe("right", e, 0)), s.push(pe("centre", e, 0));
        break;
    }
  if (s = s.filter((a) => a.x >= 0 && a.y >= 0), !s.length) return null;
  const l = new Gt();
  for (const a of s)
    a.raycast = !0, l.addPoints(Xn(i, a, t).toArray());
  return Kn(i, t, l), l;
}
function $l(i, e) {
  const t = new Gt();
  return i.sort(Un), i.forEach((s) => {
    ft(s) ? (t.addPoints(s.getCoords(e)), s.shapes.forEach((n) => {
      const r = n.getCoords(e);
      t.addPoints(r, "group");
    })) : t.addPoints(s.getCoords(e));
  }), t.points.forEach((s) => {
    s.stockID = e.getStock().id;
  }), t;
}
function Al(i = [], e, t) {
  const s = $l(
    i === null ? e : i,
    t
  );
  return Dl(
    e,
    t,
    s
  );
}
function Un(i, e) {
  return i.y === e.y ? e.x - i.x : e.y - i.y;
}
function zn(i, e, t, s, n, r) {
  i.a = e.id, i.b = t ? t.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function El(i, e) {
  if (i.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let t = new Gt();
  const s = Yn(e, i);
  for (const l of e)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const c = Object.values(a.rays);
      for (const h of c)
        Ol(
          h,
          a.shape,
          l,
          t
        );
    }
  const r = i.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = e.reduce((l, a) => (r === "tb" ? l.x + l.l > a.x + a.l : l.y + l.w > a.y + a.w) ? l : a);
  return s.filter(({ shape: l }) => l.id === o.id).forEach(({ shape: l, rays: a }) => {
    const c = Object.values(a);
    for (const h of c) {
      const y = new Me(h.x2, h.y2);
      r === h.direction && (zn(y, l, null, h.direction, "edge"), t.addPoint(y));
    }
  }), t = Rl(t), t;
}
function Yn(i, e) {
  return i.map((t) => {
    const s = kl(t, e);
    return {
      shape: t,
      rays: s
    };
  });
}
function Ol(i, e, t, s) {
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
    const c = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, h = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, y = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, d = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (c || h || y || d) {
      const g = r ? i[`${l}1`] : n, x = r ? n : i[`${l}1`], R = new Me(g, x), v = i.origin;
      zn(R, e, t, i.direction, "shape", v), s.addPoint(R);
    }
  }
}
function Rl(i) {
  const e = new Gt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = Fl(
        n,
        r
      );
      o && e.addPoint(o);
    });
  }), e;
}
function Fl(i, e) {
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
function Xn(i, e, t) {
  const s = new Gt(), n = e.getAvailableShapePositions(t);
  for (const r of n) {
    let o;
    switch (o = Ml(e, i, t), r) {
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
  return Kn(i, t, s), s;
}
function Ml(i, e, t) {
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
function Kn(i, e, t) {
  var a, c, h, y, d, p;
  let s, n, r, o;
  ((a = e == null ? void 0 : e.constructor) == null ? void 0 : a.name) === "Stock" && (e != null && e.trimmed) || ((c = e == null ? void 0 : e.constructor) == null ? void 0 : c.name) === "Segment" ? (s = 0, n = 0, r = e.x + e.l - i.l, o = e.y + e.w - i.w) : (s = (h = e == null ? void 0 : e.trim) == null ? void 0 : h.x1, n = (y = e == null ? void 0 : e.trim) == null ? void 0 : y.y1, r = e.l - ((d = e == null ? void 0 : e.trim) == null ? void 0 : d.x2) - i.l, o = e.w - ((p = e == null ? void 0 : e.trim) == null ? void 0 : p.y2) - i.w);
  const l = t.toArray();
  for (let g = l.length; g--; ) {
    const x = l[g];
    (he.lessThan(x.x, s) || he.lessThan(x.y, n) || he.greaterThan(x.x, r) || he.greaterThan(x.y, o) || x.x < 0 || x.y < 0) && t.deletePoint(x);
  }
}
function _l(i, e, t) {
  if (!vi.includes(e) || !i.machining.corners) return 0;
  const s = Zn(i, e);
  return t * s;
}
function Zn(i, e) {
  if (!vi.includes(e) || !i.machining.corners) return 0;
  const t = i.machining.corners.find((n) => n.getCorner() === e);
  return t ? t.getLength() : 0;
}
function Gi(i, e, t, s) {
  Object.keys(e).forEach((n) => {
    var r, o;
    n in i && ((r = e[n]) != null && r.min && S({ v: i[n] }) < S({ v: e[n].min }) ? t.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${e[n].min}.`,
      fields: [n]
    }) : (o = e[n]) != null && o.max && S({ v: i[n] }) > S({ v: e[n].max }) && t.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${e[n].max}.`,
      fields: [n]
    }));
  });
}
class hs {
  constructor({ x: e, y: t, diameter: s, depth: n = 0, face: r = 0, type: o = null }) {
    u(this, "x");
    u(this, "y");
    u(this, "diameter");
    u(this, "depth");
    u(this, "face");
    u(this, "valid");
    u(this, "type");
    this.x = e, this.y = t, this.diameter = s, this.depth = n, this.face = r, this.type = o;
  }
  getFace() {
    return bt[this.face];
  }
  getXDrawPosition(e) {
    let t = 0;
    const s = S({ v: this.x });
    return e.rot ? t = e.l - S({ v: this.y }) + ("x" in e ? S({ v: e.x }) : 0) : t = s + ("x" in e ? S({ v: e.x }) : 0), t;
  }
  getYDrawPosition(e, t, s) {
    let n = e.rot ? S({ v: this.x }) : S({ v: this.y });
    return n += "y" in e ? S({ v: e.y }) : 0, t === 1 && (s ? n = S({ v: s.w }) - n : n = S({ v: e.w }) - n), n;
  }
  shouldShow(e, t) {
    return this.face === t || this.isThroughShape(e) === !0;
  }
  isThroughShape(e) {
    return !this.depth || S({ v: this.depth }) >= S({ v: e.t });
  }
  getDistanceToEdge(e) {
    const t = this.x, s = this.y, n = this.diameter / 2, r = S({ v: e.getLongSide() }), o = S({ v: e.getShortSide() }), l = e.machining.corners.map((g) => g.type ? g.size : 0), a = [
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
    ], c = e.machining.corners.map((g, x) => {
      const R = x === 0 || x === 3, v = x < 2, O = R ? t : r - t;
      let M = null;
      this.face === 0 ? M = v ? s : o - s : this.face === 1 && (M = v ? o - s : s);
      const _ = Math.sqrt(O * O + M * M);
      return {
        c: g,
        distance: _
      };
    }), h = Math.min(...a.map((g) => g.distance)), y = Math.min(...c.map((g) => g.distance)), d = c.findIndex((g) => g.distance === y), p = e.machining.corners[d];
    if (p && p.type === "radius") {
      let g = d === 0 || d === 3 ? 0 : r, x = d < 2 ? 0 : o;
      const R = d < 2;
      g += d === 0 || d === 3 ? l[d] : -l[d], x += R ? l[d] : -l[d];
      const O = t - g, M = d < 2;
      let _;
      this.face === 0 ? _ = M ? s : o - s : this.face === 1 && (_ = M ? o - s : s);
      const W = _ - x, J = Math.sqrt(O * O + W * W), k = l[d] - J - n;
      let C = !1;
      return p.index === 0 ? C = t <= g && _ <= x : p.index === 1 ? C = t >= g && _ <= x : p.index === 2 ? C = t >= g && _ >= x : p.index === 3 && (C = t <= g && _ >= x), C && k < h ? k : h;
    } else if (p && p.type === "bevel") {
      let g, x, R;
      p.index === 0 ? (g = 1, x = 1, R = -p.size) : p.index === 1 ? (g = 1, x = -1, R = -r + p.size) : p.index === 2 ? (g = 1, x = 1, R = -r - o + p.size) : p.index === 3 && (g = -1, x = 1, R = -o + p.size);
      const v = p.index === 0 ? 1 : -1, O = (g * t + x * s + R) / Math.sqrt(g * g + x * x) * v - n;
      return O < h ? O : h;
    } else
      return h;
  }
  validate(e, t, s = null) {
    const n = [];
    if (!N(this.x) || !N(this.y) || !N(this.diameter)) {
      const o = {
        index: t,
        message: "X, Y & diameter are all required.",
        fields: []
      };
      this.x || o.fields.push("x"), this.y || o.fields.push("y"), this.diameter || o.fields.push("diameter"), n.push(o);
    }
    return S({ v: this.diameter }) <= 0 && n.push({
      index: t,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), S({ v: this.depth }) < 0 && n.push({
      index: t,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in e && S({ v: e.t }) > 0 && S({ v: this.depth }) > S({ v: e.t }) && n.push({
      index: t,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in e) || !e.t) && S({ v: this.depth }) > 0 && n.push({
      index: t,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(e) < 0 && n.push({
      index: t,
      message: "Outside of part."
    }), s && Gi(this, s, n, t), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Qs {
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
    hingeLength: c = 0,
    minimumHoleDistance: h = 0,
    positionLimit: y = 0
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
    this.position = e, this.edge = t, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = c, this.minimumHoleDistance = h, this.positionLimit = y, d && this.createHoles(d);
  }
  getFace() {
    return bt[this.face];
  }
  getHoleSpacing() {
    const e = S({ v: this.hingeLength }) - S({ v: this.outerSpacing }) * 2, t = this.numHoles - 1;
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
        s = e.getLongSide() - S({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = S({ v: this.position }) + S({ v: this.outerSpacing }) + n * t;
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
        s = S({ v: this.position }) + S({ v: this.outerSpacing }) + n * t;
        break;
      case "y1":
        s = S({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = e.getShortSide() - S({ v: this.distanceFromEdge });
        break;
    }
    return s;
  }
  createHoles(e) {
    this.holes = [];
    for (let t = 0; t < this.numHoles; t++) {
      const s = new hs({
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
class en {
  constructor({ type: e = "radius", size: t, index: s }) {
    u(this, "type");
    u(this, "size");
    u(this, "index");
    u(this, "valid");
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
    return this.type && S({ v: this.size }) <= 0 && n.push({
      index: t,
      message: "Corner size cannot be zero or negative"
    }), this.type && S({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
let Jn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: e = [],
    hingeHoles: t = [],
    corners: s = []
  } = {}) {
    u(this, "holes", []);
    u(this, "corners", []);
    u(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new en(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new en({
        type: null,
        size: null,
        index: n
      }));
    }), e && (this.holes = e.map((n) => new hs(n))), t && (this.hingeHoles = t.map((n) => new Qs(n)));
  }
  validateEverything(e, t = null) {
    const s = this.validate(e, "holes"), n = this.validate(e, "hingeHoles"), r = this.validate(e, "corners");
    s.length && (console.log(s), new le({
      item: e,
      category: ["machining"],
      index: t,
      listId: ke(e) ? [e.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    })), n.length && new le({
      category: ["machining"],
      item: e,
      index: t,
      listId: ke(e) ? [e.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new le({
      category: ["machining"],
      item: e,
      index: t,
      listId: ke(e) ? [e.listId] : null,
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
    const o = new hs({
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
    minimumHoleDistance: c = 0,
    hingeLength: h = 0
  }) {
    const y = new Qs({
      numHoles: e,
      position: t,
      //from left or bottom
      edge: r,
      face: o,
      diameter: s,
      depth: n,
      distanceFromEdge: l,
      outerSpacing: a,
      minimumHoleDistance: c,
      hingeLength: h
    });
    return this.hingeHoles.push(y), y;
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
function Cs(i) {
  var e, t, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (t = (e = i.machining) == null ? void 0 : e.holes) != null && t.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((c) => c.type && c.size) : !1;
}
function ql(i) {
  var e, t, s, n;
  if ("machining" in i) {
    if (!Cs(i)) {
      i.machining = null;
      return;
    }
    (e = i.machining.holes) != null && e.length || (i.machining.holes = null), (t = i.machining.hingeHoles) != null && t.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class Is {
  constructor(e = null) {
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
    var t;
    this.listId = e != null && e.listId ? e.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = e == null ? void 0 : e.id, this.shapes = N(e == null ? void 0 : e.shapes) ? e.shapes.map((s) => s.toString()) : [], this.shapeListIds = N(e == null ? void 0 : e.shapeListIds) ? e.shapeListIds : [], this.direction = N(e == null ? void 0 : e.direction) ? e.direction : "l", this.q = N(e == null ? void 0 : e.q) ? e.q : 1, N(e == null ? void 0 : e.shapeList) && ((t = e.shapeList) != null && t.length) && this.validate(e.shapeList);
  }
  validate(e = []) {
    var o, l;
    if (this.issues = [], !(e != null && e.length))
      throw new Error("shapeList is required to validate user group");
    const t = this.findShapes(e);
    if (!t.length)
      return new le({
        category: ["group"],
        item: this,
        message: "errors.groups.min_parts"
      }), this.issues;
    const s = t[0];
    if (Qe(s)) {
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
    if (t.forEach((a, c) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new le({
        category: ["group"],
        item: this,
        field: [["orientationLock"]],
        message: De("errors.groups.part_needs_orientation_lock", { 0: c + 1 }),
        shouldTranslate: !1
      });
    }), this.issues.length) return this.issues;
    const n = di(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return t.forEach((a, c) => {
      if (a.id === s.id) return;
      const h = a.getTrimmedDimensions(!0)[n];
      he.equalTo(h, r) || new le({
        category: ["group"],
        item: this,
        message: De("errors.groups.dimension_not_correct", {
          0: c + 1,
          1: n === "l" ? "length" : "width",
          2: r,
          3: h
        }),
        shouldTranslate: !1
      });
    }), this.issues;
  }
  findShapes(e = []) {
    var s, n;
    if (!e.length) return [];
    let t = [];
    if (ke(e[0])) {
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
    if (!Qe(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((h) => {
      const y = s.findIndex((d) => !d.inUserGroup && d.parentID === h.parentID);
      if (y === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(y, 1), vl(h), h.inUserGroup = !0;
    });
    let l = 0, a = 0;
    this.direction === "l" ? a = o.w : l = o.l;
    let c;
    try {
      const h = {
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
      c = new lt(h);
    } catch (h) {
      return console.error(h), !1;
    }
    return c.parentID = `ug${e}`, n && c.updateShapeSpacing(n), c;
  }
}
function Fh(i, e = []) {
  if (!(i != null && i.length)) return [];
  const t = i.map((s) => new Is(s));
  return e.length && Bl(t, e), t;
}
function Bl(i = [], e = []) {
  i.length && e.length && i.forEach((t) => {
    t.shapeListIds = t.shapeListIds.filter((s) => e.find((n) => n.listId === s));
  });
}
function Hl(i) {
  const e = {};
  return i.forEach((t) => {
    t.shapeListIds.forEach((s) => {
      const n = t.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function jl(i, e, t = !0) {
  const s = Hl(i), n = [];
  for (const r in s) {
    const o = s[r], l = e.findIndex((c) => c.listId === r);
    l < 0 && new le({
      category: ["group"],
      message: "errors.groups.no_parts",
      issues: n
    });
    const a = e[l];
    (!(a != null && a.q) || o > a.q) && new le({
      category: ["group"],
      message: De("errors.groups.not_enough_of_part", {
        0: a != null && a.name ? a.name : l + 1,
        1: o,
        2: (a == null ? void 0 : a.q) ?? 0
      }),
      shouldTranslate: !1,
      issues: n
    });
  }
  return t && i.forEach((r) => {
    const o = r.validate(e);
    o != null && o.length && n.push(...o);
  }), n;
}
const wt = ["y1", "y2", "x1", "x2"], vi = ["a", "b", "c", "d"], Tt = [...wt, ...vi], bt = ["a", "b"];
function Qn(i) {
  return vi.includes(i);
}
function Gl(i) {
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
function Nl(i) {
  return wt.map((e) => i[e] ?? null);
}
function Bt(i) {
  if (!N(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [e, t] of Object.entries(i))
    e !== "_id" && e.startsWith("_") && (i[e.substring(1)] = t, delete i[e]);
  return i;
}
function Mh({
  stockList: i,
  removeScores: e = !1,
  saw: t = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1,
  skipValidation: r = !1
  // NEW: simple flag
}) {
  return i != null && i.length ? i.filter((o) => o).map((o) => {
    if (it(o)) return o;
    (s || o.preventAutoRotation) && (o.preventAutoRotation = !0), n && (o.preventGrainRotation = !0), r && (o.skipValidation = !0);
    const l = new Wt(o, t);
    if (!r && l.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${l.issues.map((a) => a.message).join()}`,
        { cause: l.issues }
      );
    return e && delete l.algoBenchmark, l;
  }).sort(ci.ID) : [];
}
function _h({
  shapeList: i,
  stockList: e,
  preventAutoRotation: t = !1,
  skipValidation: s = !1
  // NEW: simple flag
}) {
  if (typeof e > "u")
    throw new Error("recreateShapeList requires stockList");
  return i != null && i.length ? i.filter((n) => n).map((n) => {
    var l;
    t && (n.preventAutoRotation = !0), s && (n.skipValidation = !0);
    let r;
    if (Wl(n) && ((l = n == null ? void 0 : n.shapes) != null && l.length)) {
      s ? n.shapes = n.shapes.map((a) => (a.skipValidation = !0, new St(a))) : n.shapes = n.shapes.map((a) => new St(a));
      try {
        r = new lt(n);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      r = new St(n);
    if (!s && r.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${r.issues.map((a) => a.message).join(", ")}`);
    const o = e.find((a) => {
      var c;
      return a.id === (((c = n == null ? void 0 : n.stock) == null ? void 0 : c.id) ?? (n == null ? void 0 : n.stockId));
    });
    return r.stock = o, r;
  }).sort(ci.ID) : [];
}
function qh({
  cutList: i,
  stockList: e
}) {
  if (typeof e > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((t) => {
    const s = new zi(t), n = e.find((r) => {
      var o;
      return r.id === (((o = t == null ? void 0 : t.stock) == null ? void 0 : o.id) ?? (t == null ? void 0 : t.stockId));
    });
    return s.stock = n, s;
  });
}
function Bh({
  segmentList: i,
  stockList: e
}) {
  return i != null && i.length ? i.map((t) => {
    const s = e.find((r) => {
      var o;
      return r.id === (((o = t == null ? void 0 : t.stock) == null ? void 0 : o.id) ?? (t == null ? void 0 : t.stockId));
    });
    return t.stock = s, t.skipValidation = !0, new Ls(t);
  }) : [];
}
function Ni(i, e, t = "decimal", s = !1) {
  return N(i == null ? void 0 : i[e]) ? S({ v: i[e], nf: t, pl: s }) : null;
}
class Ps {
  constructor(e, t = "decimal", s = !1) {
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
    var r, o, l, a;
    if (e = Bt(e), this.readonly = e.readonly, this.id = e.id, this.index = e == null ? void 0 : e.index, this.listId = (e == null ? void 0 : e.listId) || Date.now().toString() + ps(), e.skipValidation ? (this.l = typeof e.l == "number" ? e.l : e.l ? Number(e.l) : null, this.w = typeof e.w == "number" ? e.w : e.w ? Number(e.w) : null, this.t = typeof e.t == "number" ? e.t : e.t ? Number(e.t) : null) : ["l", "w", "t"].forEach((h) => this[h] = Ni(e, h, t, s)), this.q = typeof e.q == "number" ? e.q : e.q ? Number(e.q) : null, this.autoAdd = e.autoAdd || !1, this.name = (r = e.name) != null && r.length ? (o = Ss(e == null ? void 0 : e.name)) == null ? void 0 : o.toUpperCase() : null, this.material = e.material ? e.material.trim().toUpperCase() : "", this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, e.trim) {
      const c = ["x1", "x2", "y1", "y2"];
      e.skipValidation ? c.forEach((h) => {
        this.trim[h] = typeof e.trim[h] == "number" ? e.trim[h] : e.trim[h] ? Number(e.trim[h]) : null;
      }) : c.forEach((h) => {
        this.trim[h] = Ni(e.trim, h, t, s);
      });
    }
    this.cost = typeof e.cost == "number" ? e.cost : e.cost ? Number(e.cost) : null;
    let n = (l = e == null ? void 0 : e.grain) == null ? void 0 : l.toLowerCase();
    n === " " && (n = ""), this.grain = n || "", this.multiEdit = e.multiEdit, this.allowExactFitShapes = e.allowExactFitShapes || !1, this.preventGrainRotation = !0, this.notes = typeof ((a = e == null ? void 0 : e.notes) == null ? void 0 : a.replace) == "function" ? e.notes.replace(/,/g, " ") : "";
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
    const e = this.l > this.w ? this.l : this.w, t = this.l < this.w ? this.l : this.w, s = { l: S({ v: e }), w: S({ v: t }) };
    return {
      name: this.name,
      id: null,
      listId: this.listId,
      l: s.l - (S({ v: this.trim.x1 }) + S({ v: this.trim.x2 })),
      w: s.w - (S({ v: this.trim.y1 }) + S({ v: this.trim.y2 }))
    };
  }
  createId(e, t = 0) {
    this.id = `${e + 1}.${t}`;
  }
  isSquare() {
    Nn(this);
  }
  validate(e, t = null) {
    return this.issues = [], ["l", "w", "t", "grain"].forEach((s) => Xe[s]({ item: this, saw: e, index: t ?? this.index, category: "stock" })), Xe.trim({ item: this, index: t, category: ["stock"] }), ["q"].forEach((s) => Xe[s]({ item: this, index: t ?? this.index, isWarning: !0, category: "stock" })), this.issues = this.issues.filter((s) => s), this.issues;
  }
}
class fi {
  constructor(e, t = "decimal", s = !1) {
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
      wt.map((e) => [e, 0])
    ));
    u(this, "banding", Object.fromEntries(
      Tt.map((e) => [e, !1])
    ));
    u(this, "bandingOptions", Object.fromEntries([
      ...Tt,
      "all"
    ].map((e) => [e, {}])));
    u(this, "finish", Object.fromEntries(
      bt.map((e) => [e, ""])
    ));
    u(this, "finishOptions", Object.fromEntries(
      bt.map((e) => [e, {}])
    ));
    /**
     * to align with Shape
     * @remarks input shapes are always 0
     */
    u(this, "rot", 0);
    var n, r, o, l, a, c, h, y, d;
    e = Bt(e), this.readonly = e.readonly, this.id = e.id, this.listId = (e == null ? void 0 : e.listId) || Date.now().toString() + ps(), this.index = e == null ? void 0 : e.index, e.skipValidation ? (this.l = typeof e.l == "number" ? e.l : e.l ? Number(e.l) : null, this.w = typeof e.w == "number" ? e.w : e.w ? Number(e.w) : null, this.t = typeof e.t == "number" ? e.t : e.t ? Number(e.t) : null) : ["l", "w", "t"].forEach((g) => {
      this[g] = Ni(e, g, t, s);
    }), this.q = typeof e.q == "number" ? e.q : e.q ? Number(e.q) : null, this.name = (n = e.name) != null && n.length ? (r = Ss(e == null ? void 0 : e.name)) == null ? void 0 : r.toUpperCase() : null, this.material = e.material ? e.material.trim().toUpperCase() : "", this.multiEdit = e.multiEdit, this.notes = typeof ((o = e == null ? void 0 : e.notes) == null ? void 0 : o.replace) == "function" ? e.notes.replace(/,/g, " ") : "", this.stockLock = (e == null ? void 0 : e.stockLock) || [], this.upDirection = (e == null ? void 0 : e.upDirection) || null;
    for (const p of Object.keys(this.trim))
      e.skipValidation ? this.trim[p] = typeof ((l = e.trim) == null ? void 0 : l[p]) == "number" ? e.trim[p] : (a = e.trim) != null && a[p] ? Number(e.trim[p]) : null : this.trim[p] = Ni(e.trim, p, t, s);
    for (const p of Object.keys(this.banding))
      this.banding[p] = ((c = e == null ? void 0 : e.banding) == null ? void 0 : c[p]) || !1;
    for (const p of Object.keys(this.bandingOptions))
      this.bandingOptions[p] = ((h = e == null ? void 0 : e.bandingOptions) == null ? void 0 : h[p]) || {};
    for (const p of Object.keys(this.finish))
      this.finish[p] = ((y = e == null ? void 0 : e.finish) == null ? void 0 : y[p]) || "";
    for (const p of Object.keys(this.finishOptions))
      this.finishOptions[p] = ((d = e == null ? void 0 : e.finishOptions) == null ? void 0 : d[p]) || {};
    this.orientationLock = e.orientationLock && ["l", "w"].includes(e.orientationLock.toLowerCase()) ? e.orientationLock.toLowerCase() : "", this.machining = new Jn(e.machining || {
      holes: [],
      hingeHoles: [],
      corners: []
    }), this.customData = (e == null ? void 0 : e.customData) || {};
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
          Tt.map((t) => [t, !1])
        );
        break;
    }
  }
  createId(e, t = 0) {
    this.id = `${e + 1}.${t}`;
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
  getTrimmedDimensions(e = !1) {
    let t = { l: S({ v: this.l }), w: S({ v: this.w }) };
    return e && (t = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: t.l - (S({ v: this.trim.x1 }) + S({ v: this.trim.x2 })),
      w: t.w - (S({ v: this.trim.y1 }) + S({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(e, t) {
    if (!this.readonly)
      if (e = S({ v: e }), this.trim) {
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
    if (this.issues = [], ["l", "w", "t"].forEach((o) => Xe[o]({ item: this, index: t ?? this.index, saw: r, category: ["part"] })), s = S({ v: s }), Xe.partTrim({ item: this, partTrim: s, index: t ?? this.index }), Xe.trim({ item: this, index: t ?? this.index, category: ["part"] }), Xe.machining({ item: this, index: t ?? this.index }), ["q"].forEach((o) => {
      Xe[o]({ item: this, index: t ?? this.index, isWarning: !0, category: ["part"] });
    }), e.length && !n) {
      const o = new Et(r);
      Xe.stockMatch({ item: this, inputStockList: e, saw: o, partTrim: s, index: t ?? this.index, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Nt {
  constructor(e) {
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
      wt.map((e) => [e, 0])
    ));
    u(this, "customData");
    this.initRectangle(e);
  }
  validateRectangle(e) {
    if (e.skipValidation) {
      this.issues = [];
      return;
    }
    this.issues = [];
    const t = [];
    let s = ["x", "y", "t", "w"];
    ft(this) && (s = ["x", "y", "t"]), e != null && e.infiniteLength || s.push("l"), s.forEach((n) => t.push(...Xe[n]({ item: e, index: this.index }))), this.issues.push(...Xe.customData({ item: e, index: this.index })), this.issues.push(...t.filter((n) => n));
  }
  initRectangle(e, t = !1) {
    var n, r, o, l;
    if (!t) {
      e.skipValidation ? this.issues = [] : this.validateRectangle(e), this.id = ((n = e.id) == null ? void 0 : n.toString()) || null, this.setParentID(), this.q = typeof e.q == "number" ? e.q : e.q ? Number(e.q) : 0, this.duplicate = e.duplicate || !1, this.offcut = e.offcut || !1, this.infiniteLength = e.infiniteLength || !1, e.skipValidation ? (this.name = e.name || null, this.material = e.material || null, this.cost = typeof e.cost == "number" ? e.cost : e.cost ? Number(e.cost) : 0, this.grain = e.grain || null, this.notes = e.notes || "") : (this.name = N(e.name) && ((r = e == null ? void 0 : e.name) != null && r.length) ? (o = xo(Ss(e == null ? void 0 : e.name))) == null ? void 0 : o.toUpperCase() : null, this.material = N(e.material) ? e.material.trim().toLowerCase() : null, N(e == null ? void 0 : e.cost) ? this.cost = typeof e.cost == "string" ? parseFloat(e.cost) : e.cost : this.cost = 0, this.grain = typeof e.grain < "u" && N(e == null ? void 0 : e.grain) ? e.grain.toLowerCase() : null, this.notes = typeof (e == null ? void 0 : e.notes) == "string" && e.notes.length ? e.notes.replace(/,/g, "").substring(0, 200) : ""), this.area = this.getArea(), this.customData = (e == null ? void 0 : e.customData) || {}, this.proximity = { rectangle: null, distance: null };
      try {
        this.trim = (e == null ? void 0 : e.trim) || (e == null ? void 0 : e._trim);
      } catch (a) {
        if ((l = a == null ? void 0 : a.cause) != null && l.issues) this.issues.push(...a.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(a)}`);
      }
      this.trimmed = e.trimmed || !1, this.hasTrim = [this.trim.x1, this.trim.x2, this.trim.y1, this.trim.y2].some((a) => typeof a == "number" && a !== 0);
    }
    this.identicalTo = (e == null ? void 0 : e.identicalTo) || [], [
      { key: "x", default: 0, required: !1 },
      { key: "y", default: 0, required: !1 },
      { key: "l", default: null, required: !0 },
      { key: "w", default: 1, required: !0 },
      { key: "t", default: null, required: !1 }
    ].forEach((a) => {
      let c = e[a.key];
      if (!N(c))
        return this[a.key] = this[a.key] || a.default;
      typeof c == "string" && (c = S({ v: c })), this[a.key] = c;
    }), !e.skipValidation && !(e != null && e.infiniteLength) && !(e != null && e.preventAutoRotation) && !e.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(e != null && e.preventGrainRotation) && (this.grain = di(this.grain))), e != null && e.stock && (it(e.stock) ? this.stock = e.stock : this.stock = new Wt(e.stock), this.stockId = this.stock.id), this.index = e.index;
  }
  updateRectangle(e) {
    e.preventAutoRotation = !0, this.initRectangle(e, !0);
  }
  set trim(e) {
    if (this._trim = Object.fromEntries(
      wt.map((t) => [t, 0])
    ), !!Qt(e, !0))
      for (const t of wt) {
        let s;
        if (typeof e[t] == "string")
          try {
            s = S({ v: e[t] });
          } catch {
            s = 0, new le({ item: this, field: [["trim", t]], message: `${e[t] ?? "N/A"} is not a valid value for trim: ${t}` });
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
        return new Kt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Kt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Kt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Kt({
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
    const s = new Me(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Me(this.x, this.y + this.w);
    if (n.corner = "topLeft", (e == null ? void 0 : e.cutType) !== "efficiency" && !t)
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !Yt(parseFloat(String(r)))).length && (N(this.l) && (this.l -= (N((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x1) ? this.trim.x1 : 0) + (N((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x2) ? this.trim.x2 : 0), this.l <= 0 && new le({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), N(this.w) && (this.w -= (N((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (N((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new le({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
    var c;
    if (this.constructor !== e.constructor || this.t !== e.t || this.orientationLock !== e.orientationLock || this.material !== e.material)
      return !1;
    if (Qe(this) && ((c = this.identicalTo) != null && c.length) && (this.parentID === e.parentID || this.identicalTo.includes(e.parentID)))
      return !0;
    if (ft(this)) {
      if (e.id === this.id) return !0;
    } else {
      if (e.parentID === this.parentID) return !0;
      if (Qe(this) && t && this.parentID !== e.parentID) return !1;
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
    const s = new Nt({
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
    return Qe(this);
  }
  isSegment() {
    return zl(this);
  }
  isStock() {
    return it(this);
  }
  isGroup() {
    return ft(this);
  }
  isUserGroup() {
    return Xi(this);
  }
}
class Yi extends Nt {
  //used by evo
  constructor(t, s) {
    var n, r;
    super(t);
    // type: StockType;
    u(this, "shapes", []);
    u(this, "saw");
    u(this, "algoBenchmark");
    switch (this.shapes = t.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((n = t == null ? void 0 : t.saw) == null ? void 0 : n.stockType) || new le({ item: this, field: [["type"]], message: `Container type ${((r = t == null ? void 0 : t.saw) == null ? void 0 : r.stockType) ?? "N/A"} is not valid`, shouldTranslate: !1 }), this.setSaw(t, s), this.cutType) {
      case "beam":
        (!N(this.t) || this.t <= 0) && new le({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(t, s) {
    var n, r, o, l;
    if (!(!t && !s)) {
      if (!s)
        if (N(t == null ? void 0 : t.saw)) {
          if (!((r = t == null ? void 0 : t.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: c } = ls(t.saw.cutPreference);
            t.saw.cutType = a, t.saw.cutPreference = c;
          }
        } else {
          t.saw = {};
          const { cutType: a, cutPreference: c } = ls(t.cutPreference);
          t.saw.cutType = a, t.saw.cutPreference = c, N(t == null ? void 0 : t.bladeWidth) && (t.saw.bladeWidth = t.bladeWidth), N((n = t == null ? void 0 : t.blade) == null ? void 0 : n.width) && (t.saw.bladeWidth = t.blade.width), N(t == null ? void 0 : t.efficiencyOptions) && (t.saw.efficiencyOptions = t.efficiencyOptions), N(t == null ? void 0 : t.guillotineOptions) && (t.saw.guillotineOptions = t.guillotineOptions), N(t == null ? void 0 : t.stackHeight) && (t.saw.stackHeight = t.stackHeight);
        }
      try {
        const a = s ?? (t == null ? void 0 : t.saw);
        a && (ks(a) ? this.saw = a : this.saw = new Et(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
      } catch (a) {
        throw new Error("error creating saw", { cause: a });
      }
    }
  }
  get cutType() {
    var t, s, n, r;
    return N((t = this == null ? void 0 : this.saw) == null ? void 0 : t.cutType) ? this.saw.cutType : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var t, s, n, r;
    return N((t = this.saw) == null ? void 0 : t.cutPreference) ? this.saw.cutPreference : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var t, s, n, r;
    return N((t = this.saw) == null ? void 0 : t.guillotineOptions) ? this.saw.guillotineOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var t, s, n, r;
    return N((t = this.saw) == null ? void 0 : t.efficiencyOptions) ? this.saw.efficiencyOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
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
    return Yt(t) ? 0 : t;
  }
  getStock() {
    return it(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Wt extends Yi {
  constructor(t, s) {
    var n;
    t = Bt(t), t.preventAutoRotation = t.preventAutoRotation || ((n = t == null ? void 0 : t.saw) == null ? void 0 : n.stockType) === "roll", t.autoAdd && !t.q && (t.q = 1);
    super(t, s);
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
    delete this.stock, this._id = t == null ? void 0 : t._id, this.autoAdd = N(t == null ? void 0 : t.autoAdd) ? t.autoAdd : !1, this.allowExactFitShapes = N(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.analysis = N(t.analysis) ? t.analysis : null, this.tidy = N(t == null ? void 0 : t.tidy) ? t.tidy : !1, this.algoBenchmark = null, this.used = N(t == null ? void 0 : t.used) ? t.used : !1, this.stack = N(t == null ? void 0 : t.stack) ? t.stack : 1, this.duplicatePattern = (t == null ? void 0 : t.duplicatePattern) ?? null, this.initStock(t);
  }
  initStock(t) {
    switch (this.saw.stockType) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
    t.skipValidation || this.validateStock(t);
  }
  reset() {
    this.used = !1, this.stack = 1, this.score = null, this.rootSegment = null, this.tidy = null, this.analysis = null, this.duplicatePattern = null, this.shapes = [];
  }
  validateStock(t) {
    if (t.skipValidation) {
      this.issues = [];
      return;
    }
    const s = [];
    t.autoAdd || ["q"].forEach((n) => s.push(...Xe[n]({ item: t, index: t == null ? void 0 : t.index }))), ["grain"].forEach((n) => s.push(...Xe[n]({ item: t, index: t == null ? void 0 : t.index }))), this.issues.push(...s.filter((n) => n));
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
  isIdentical(t) {
    let s = !1, n = !1, r = !1, o = !1;
    if (this.material === t.material && (s = !0), this.t === t.t && (n = !0), this.l === t.l && (r = !0), this.w === t.w && (o = !0), s && n && r && o) return !0;
  }
  hasStack() {
    return typeof this.stack == "number";
  }
  isStacked() {
    return it(this.stack) || typeof this.stack == "string";
  }
  clone(t = null) {
    const s = this.id.split(".");
    t ? s.pop() : (t = parseInt(s.pop()), t++), s.push(t.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, r.skipValidation = !0, new Wt(r);
  }
  getCroppedLength(t = [], s = 0) {
    if (!(t != null && t.length)) return;
    const n = wl(t.filter((o) => o.added && o.stock.id === this.id), "x"), r = n.x + n.l;
    if (r > this.l) throw new Error("Furthest shape position exceeds stock length");
    return he.equalTo(r, this.l) ? r : r + s;
  }
}
class er extends Nt {
  constructor(t) {
    t.skipValidation = !0;
    super(t);
    u(this, "addToInventory");
    //for front end selection
    u(this, "added");
    //for adding to inputStock
    u(this, "placementOrder");
    u(this, "flex");
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
function Hh({
  offcuts: i,
  stockList: e,
  preventAutoRotation: t = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    s.skipValidation = !0;
    const n = e.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, t && (s.preventAutoRotation = !0), new er(s);
  });
}
class St extends Nt {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(t) {
    t = Bt(t);
    super(t);
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
      Tt.map((t) => [t, !1])
    ));
    u(this, "_finish", Object.fromEntries(
      bt.map((t) => [t, ""])
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
    s || (t.skipValidation ? this.issues = [] : this.validateShape(t), t.skipValidation ? (this.orientationLock = t.orientationLock || null, this.stockLock = Array.isArray(t.stockLock) ? t.stockLock : []) : (t.orientationLock = (n = t == null ? void 0 : t.orientationLock) == null ? void 0 : n.toLowerCase(), (t == null ? void 0 : t.orientationLock) === " " && (t.orientationLock = ""), this.orientationLock = N(t == null ? void 0 : t.orientationLock) && this.l !== this.w ? t.orientationLock : null, N(t == null ? void 0 : t.stockLock) ? Array.isArray(t == null ? void 0 : t.stockLock) && (this.stockLock = t.stockLock.map((r) => r.toString())) : this.stockLock = []), this.banding = (t == null ? void 0 : t.banding) || (t == null ? void 0 : t._banding), this.finish = (t == null ? void 0 : t.finish) || (t == null ? void 0 : t._finish), this.machining = t.machining ? new Jn(t.machining) : null, this.fitsStock = t.fitsStock || null, this.upDirection = t.upDirection || null), this.added = t.added || !1, this.initGuillotineData(t), this.inGroup = t.inGroup || this.inGroup || !1, this.inUserGroup = t.inUserGroup || this.inUserGroup || !1, this.groupID = t.groupID || this.groupID || null, this.addedAsGroup = t.addedAsGroup || this.addedAsGroup || !1, this.score = t.score || this.score || null, this.bestScore = t.bestScore || this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = t.placementOrder || this.placementOrder || null, this.groupPlacementOrder = t.groupPlacementOrder || this.groupPlacementOrder || null, this.minSpacing = t.minSpacing ?? (this.minSpacing || 0), this.priority = t.priority || {};
  }
  initGuillotineData(t) {
    var s, n, r, o, l, a, c, h, y, d, p, g, x, R, v, O;
    this.guillotineData = {
      firstShape: ((s = t == null ? void 0 : t.guillotineData) == null ? void 0 : s.firstShape) || ((n = this == null ? void 0 : this.guillotineData) == null ? void 0 : n.firstShape) || !1,
      myPhase: ((r = t == null ? void 0 : t.guillotineData) == null ? void 0 : r.myPhase) || ((o = this == null ? void 0 : this.guillotineData) == null ? void 0 : o.myPhase) || null,
      myStripParent: ((l = t == null ? void 0 : t.guillotineData) == null ? void 0 : l.myStripParent) || ((a = this == null ? void 0 : this.guillotineData) == null ? void 0 : a.myStripParent) || null,
      myStripDirection: ((c = t == null ? void 0 : t.guillotineData) == null ? void 0 : c.myStripDirection) || ((h = this == null ? void 0 : this.guillotineData) == null ? void 0 : h.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((d = (y = t == null ? void 0 : t.guillotineData) == null ? void 0 : y.stripShapeBatches) == null ? void 0 : d.subsetUsed) || ((g = (p = this == null ? void 0 : this.guillotineData) == null ? void 0 : p.stripShapeBatches) == null ? void 0 : g.subsetUsed) || !1,
        groups: ((R = (x = t == null ? void 0 : t.guillotineData) == null ? void 0 : x.stripShapeBatches) == null ? void 0 : R.groups) || ((O = (v = this == null ? void 0 : this.guillotineData) == null ? void 0 : v.stripShapeBatches) == null ? void 0 : O.groups) || {}
      }
    };
  }
  cloneGuillotineData() {
    var t;
    return (t = this.guillotineData) != null && t.myStripParent && (Qe(this.guillotineData.myStripParent) || ft(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(t, s = !1) {
    var o, l, a, c, h, y, d, p;
    const n = t.bladeWidth;
    if (t.cutType !== "efficiency")
      return s ? 0 : n;
    if (this.minSpacing > 0) return this.minSpacing;
    let r = (t == null ? void 0 : t.minSpacing) || 0;
    if (n > r && (r = n), (l = (o = t.options) == null ? void 0 : o.minSpacingDimension) != null && l.dimension && ((c = (a = t.options) == null ? void 0 : a.minSpacingDimension) != null && c.minSpacing)) {
      const g = (y = (h = t.options) == null ? void 0 : h.minSpacingDimension) == null ? void 0 : y.dimension;
      (this.l <= g || this.w <= g) && (r = ((p = (d = t.options) == null ? void 0 : d.minSpacingDimension) == null ? void 0 : p.minSpacing) || r);
    }
    return s && (r -= n), r < 0 && (r = 0), this.minSpacing = r, r;
  }
  validateShape(t) {
    if (t.skipValidation) {
      this.issues = [];
      return;
    }
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...Xe[n]({ item: t, index: t == null ? void 0 : t.index }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
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
    t = Bt(t), this.initShape(t, !0), this.updateRectangle(t);
  }
  //banding
  set banding(t) {
    if (this._banding = Object.fromEntries(
      Tt.map((s) => [s, !1])
    ), !!Qt(t, !0))
      for (const s of Tt)
        this._banding[s] = N(t == null ? void 0 : t[s]) ? t[s] : !1;
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
  set finish(t) {
    if (this._finish = Object.fromEntries(
      bt.map((s) => [s, ""])
    ), !!Qt(t, !0))
      for (const s of bt)
        this._finish[s] = N(t == null ? void 0 : t[s]) ? t[s] : "";
  }
  get facesArray() {
    return bt.map((t) => {
      var s;
      return (s = this.finish) == null ? void 0 : s[t];
    });
  }
  //compress for saving / transfer
  save() {
    var t, s, n;
    delete this.group, (t = this == null ? void 0 : this.guillotineData) == null || delete t.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, Tt.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), bt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), ql(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(t) {
    return this.orientationLock === "w" && this.w === t.w || this.orientationLock === "l" && this.l === t.l || !this.orientationLock && this.w === t.w && this.l === t.l;
  }
  addToStock(t) {
    this.stock = t, this.stockId = t.id, this.added = !0, this.inGroup = !1, t.used = !0, this.grain = t.grain, t != null && t.grain && this.rot && (this.grain = di(t.grain)), Vn([
      () => Zt(this.isInsideStock(t), `shape ${this.id} is not inside stock ${t.id}`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, ft(this) && this.shapes.forEach((t) => t.removeFromStock());
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
    this.removeFromStock(), this.resetPosition(), ji(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, t || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
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
    return !Gl(t) || !this.banding[t] ? 0 : t === "x1" || t === "x2" ? this.getShortSide() : t === "y1" || t === "y2" ? this.getLongSide() : Qn(t) ? Zn(this, t) : 0;
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
  getPerimeterCutVectors(t = null) {
    var n;
    return t === null && (t = (n = this.stock) != null && n.isStock() ? this.stock.getBladeWidth() / 2 : 0), [
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
      return s.push(new zi({
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
    ji(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(t, s = null) {
    var n, r, o;
    return it(t) && typeof ((n = this.fitsStock) == null ? void 0 : n[t.parentID]) < "u" ? ((o = (r = this.fitsStock) == null ? void 0 : r[t.parentID]) == null ? void 0 : o[s ?? "any"]) === !0 : Ui(this, t, s);
  }
  clone(t = null) {
    const s = this.id.split(".");
    t ? s.pop() : (t = s.pop(), t++), s.push(t);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, o.skipValidation = !0, new St(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const t = this.cloneGuillotineData();
    return t.myStripParent = Ul(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
class Ls extends Yi {
  constructor(t) {
    var e = (...Kh) => (super(...Kh), u(this, "cuts"), u(this, "phase"), u(this, "cutDirection"), u(this, "firstShape"), u(this, "merged"), u(this, "children"), u(this, "siblings"), //used by vis only
    u(this, "parent"), u(this, "segmentType"), u(this, "completed"), //used by vis only
    u(this, "rowSegment"), //used by cuts
    u(this, "placementOrder"), u(this, "hasBeamTrim"), u(this, "hasHeadCut"), u(this, "isInitial"), this);
    t && (t.preventAutoRotation = !0, t.skipValidation = !0, e(t), this.validateSegment(t), delete this.trim, delete this.trimmed, this.parentID = t.parentID || null, this.shapes = t.shapes || [], this.firstShape = t.firstShape || null, this.cuts = [], this.phase = t.phase || null, this.merged = t.merged || !1, this.parent = t.parent || null, this.children = t.children || [], this.siblings = t.siblings || [], this.offcut = t.offcut || !1, this.segmentType = t.segmentType || null, this.placementOrder = null, this.cutDirection = t.cutDirection || null, this.hasBeamTrim = t.hasBeamTrim || !1, this.hasHeadCut = t.hasHeadCut || !1, this.isInitial = t.isInitial || !1);
  }
  validateSegment(t) {
    var s, n;
    t.skipValidation || ((he.lessThanOrEqualTo(t.w, 0) || he.lessThanOrEqualTo(t.l, 0)) && new le({
      item: this,
      message: `Zero / negative dimension - l: ${t.l}, w: ${t.w}.`,
      field: [["l"], ["w"]]
    }), (he.lessThan(t.x, 0) || he.lessThan(t.y, 0)) && new le({
      item: this,
      message: `Negative position - x: ${t.x}, y: ${t.y}.`,
      field: [["x"], ["y"]]
    }), t != null && t.stock && (he.greaterThan(t.x + t.l, t.stock.l) || he.greaterThan(t.y + t.w, t.stock.w)) && new le({
      item: this,
      field: [["x"], ["y"], ["l"], ["w"]],
      message: `Outside of stock ${t.stock.id} - x: ${t.x}, y: ${t.y}, l: ${t.l}, w: ${t.w}, sl: ${(s = t == null ? void 0 : t.stock) == null ? void 0 : s.l}, sw: ${(n = t == null ? void 0 : t.stock) == null ? void 0 : n.w}.`
    }));
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
class lt extends St {
  // Maximum width perpendicular to the grouping direction
  constructor(t) {
    var s, n;
    if (t = Bt(t), !((s = t == null ? void 0 : t.shapes) != null && s.length))
      throw new Error("attempting to create a group with no shapes");
    t.preventAutoRotation = !0, t.skipValidation = !0;
    super(t);
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
    //used for sorting
    // Descriptive internal storage for group-specific dimensions
    u(this, "groupLength", 0);
    // Total length of all shapes along the grouping direction
    u(this, "groupWidth", 0);
    this.q = 1, delete this._banding, delete this._finish, delete this._trim, this.shapes = t.shapes, this.positions = (n = t == null ? void 0 : t.positions) != null && n.length ? t.positions : [], this.direction = t.direction, this.container = t.container, this.type = (t == null ? void 0 : t.type) ?? "auto", this.groupLength = t.groupLength || 0, this.groupWidth = t.groupWidth || 0, this.initGroup();
  }
  // Static utility method to update group dimensions
  static updateGroupDimensions(t) {
    Zs(t.direction) === "x" ? (t.l = t.groupLength, t.w = t.groupWidth) : (t.l = t.groupWidth, t.w = t.groupLength);
  }
  initGroup() {
    var t;
    (t = this == null ? void 0 : this.shapes) != null && t.length && (this.shapes = this.shapes.filter((s) => s), this.setShapePositions(), this.container && (this.efficiency = this.groupLength / this.container[this.direction]));
  }
  setShapePositions() {
    if (!this.container) return;
    this.positions = [], this.type !== "user" && this.sortShapes();
    let t = 0;
    const s = Zs(this.direction);
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
    this.groupLength = t;
    const r = di(this.direction), o = this.shapes.reduce(
      (l, a) => a[r] > l ? a[r] : l,
      0
    );
    if (this.groupWidth = o, lt.updateGroupDimensions(this), Wn()) {
      const l = this.shapes.slice(0, -1).reduce((h, y) => h + y.getMinSpacing(this.container.saw), 0), c = this.shapes.reduce((h, y) => h + y[this.direction], 0) + l;
      Vn([
        () => Zt(
          he.equalTo(c, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Zt(
          t,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => Zt(
          o,
          "group dimension in other direction is not correct"
        ).to.equal(this.groupWidth)
      ]);
    }
    if (this.w > this.container.w || this.l > this.container.l)
      throw new Error(
        `group ${this.id} is bigger than container - group ${this.l}x${this.w}, container ${this.container.l}x${this.container.w}`
      );
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(t) {
    this.container = t, this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this.groupLength / this.container[this.direction]), this.area = this.getArea();
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
      if (!cs(s, n.rot, t)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const t = di(this.direction);
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
      if (n.x = this.x + r.x, n.y = this.y + r.y, !cs(n, r.rot, t)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6), n.addToStock(t);
    }
  }
  clone(t = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = t, a.id = n, a.skipValidation = !0, new lt(a);
  }
  compress() {
    const t = super.compress.call(this);
    return t.direction = this.direction, t.positions = structuredClone(this.positions), t.shapes = this.shapes.map((s) => s.compress()), t.type = this.type, t.cloneType = "group", t.l = this.l, t.w = this.w, t.groupLength = this.groupLength, t.groupWidth = this.groupWidth, t;
  }
}
function jh(i) {
  if (!i.length) return "n";
  const e = i.map((t) => t.grain).filter((t) => t);
  return e.length ? e.every((t) => t === "l") ? "l" : e.every((t) => t === "w") ? "w" : e.some((t) => t === "l" || t === "w") ? "y" : "n" : "n";
}
function Wl(i) {
  return i.shapes !== void 0;
}
function ft(i) {
  return i instanceof lt && i.type !== "user";
}
function Xi(i) {
  return i instanceof lt && i.type === "user";
}
function _t(i) {
  return i instanceof Is;
}
function At(i) {
  return i instanceof Ps;
}
function ke(i) {
  return i instanceof fi;
}
function Vl(i) {
  return i instanceof Nt;
}
function it(i) {
  return i instanceof Wt;
}
function Ds(i) {
  return i instanceof Yi;
}
function Qe(i) {
  return i instanceof St && !(i instanceof lt);
}
function Ul(i) {
  return i instanceof St || i instanceof lt;
}
function zl(i) {
  return i instanceof Ls;
}
function tr(i) {
  return Qe(i) || it(i) || ke(i) || At(i);
}
function ir(i) {
  return ke(i) || At(i) ? !1 : Qe(i) || it(i) ? i.trimmed : !1;
}
function Yl(i) {
  return i instanceof lt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof Is ? "inputUserGroup" : i instanceof Ps ? "inputStock" : i instanceof fi ? "inputShape" : i instanceof Wt ? "stock" : i instanceof Yi ? "container" : i instanceof St && !(i instanceof lt) ? "shape" : i instanceof Ls ? "segment" : i instanceof er ? "offcut" : i instanceof Et ? "saw" : i instanceof Nt ? "rectangle" : null;
}
function tn(i, e) {
  return Br(i, e);
}
function Pt(i, e) {
  return Ce(i, e);
}
function sr(i, e, t) {
  Hr(i, e, t);
}
function N(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function Qt(i, e = !1) {
  if (!N(i) || typeof i != "object") return !1;
  const t = Object.values(i);
  return t.length === 0 ? !1 : e ? t.some((s) => N(s) && s) : t.some((s) => N(s));
}
function Gh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((e, t) => {
    let s = 0;
    return At(t) && t.autoAdd ? s = 1 : s = N(t.q) && typeof t.q == "string" ? parseInt(t.q) : t.q, !isNaN(s) && s > 0 ? e + s : e;
  }, 0);
}
function Nh(i) {
  if (!(i != null && i.length)) return [];
  const e = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), t = {};
  return e.forEach((s) => {
    const n = Xl(s.stock) || 1;
    t[s.parentID] ? t[s.parentID].count += n : (t[s.parentID] = {}, t[s.parentID].count = n, t[s.parentID].id = s.parentID, t[s.parentID].name = s != null && s.name ? s.name : s.id, t[s.parentID].l = s.l, t[s.parentID].w = s.w, t[s.parentID].t = s.t, t[s.parentID].material = s.material, t[s.parentID].rot = s.rot);
  }), Object.values(t);
}
function Xl(i, e = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? e.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Kl() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function ds(i = 0, e, t = null, s = null, n = null) {
  if (!ke(t) && !_t || s === "stock") return !1;
  let r, o;
  if (ke(t) ? r = t.orientationLock : _t(t) ? r = t.direction : s === "shape" && (r = n), i === 0 || _t(t))
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
function sn(i, e, t = null, s = null, n = null) {
  if (!ke(t) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? ds(i, e, t, s, n) ? "cc" : !1 : i === 2 ? e === "w" ? t.l < t.w ? "c" : "cc" : !1 : r;
}
function Zl(i) {
  i.banding && (i.banding = Wi(i.banding, "cc")), i.trim && (i.trim = Wi(i.trim, "cc"));
}
function Wh(i, e = 0) {
  return Qe(i) || ke(i) || !e || (i.preventAutoRotation = !0, e === 2 && i.l < i.w && Zl(i)), i;
}
function Wi(i, e = "cc", t = {
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
const { addNotice: ht } = bs(), {
  inputs: We,
  totalInputShapes: Jl,
  totalInputStock: Ql,
  createStockList: ea,
  createShapeList: ta,
  validateInputShapes: ia,
  validateInputStock: nr,
  removeShape: nn,
  removeStock: rn
} = Dn(), sa = {
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
  var i, e;
  if ((i = We == null ? void 0 : We.inputStock) != null && i.value) {
    for (let t = We.inputStock.value.length - 1; t >= 0; t--) {
      const s = We.inputStock.value[t];
      !(s != null && s.l) && !(s != null && s.w) && (t === 0 && We.inputStock.value.length > 1 || t !== 0) && rn(s.listId);
    }
    if ((e = We == null ? void 0 : We.inputShapes) != null && e.value)
      for (let t = We.inputShapes.value.length - 1; t >= 0; t--) {
        const s = We.inputShapes.value[t];
        !(s != null && s.l) && !(s != null && s.w) && (t === 0 && We.inputShapes.value.length > 1 || t !== 0) && nn(s.listId);
      }
  }
}, rr = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...sa,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, ra = (i = {}) => {
  const e = rr(i), t = e.t;
  na();
  const s = [];
  e.useInventory || s.push(...nr(i == null ? void 0 : i.sawData)), s.push(...ia({
    saw: e.sawData,
    partTrim: S({ v: e.partTrim }),
    useInventory: e.useInventory,
    inputShapesOverride: e.inputShapes
  }));
  const n = Lt(s);
  if (n.length > 0) {
    console.warn("[Validation] errors:", JSON.parse(JSON.stringify(n)));
    const r = n.map((o) => {
      var a;
      let l = "";
      return (a = o == null ? void 0 : o.index) != null && a.length && (l += o.getHumanReadableIndexes() + ": "), l += t(o.message), l;
    });
    ht({
      type: "error",
      message: t("errors.validation.inputs_issue_generic"),
      additional: r
    });
  }
  return s;
}, oa = (i, e, t = !1) => {
  var n;
  if (!t) return [];
  const s = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    if (!o) continue;
    if (!N(o.material)) {
      s.push(new le({
        item: o,
        category: ["part"],
        message: "errors.field_validation.no_material",
        listId: [o.listId]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || s.push(new le({
      item: o,
      category: ["part"],
      message: "errors.field_validation.invalid_thickness",
      listId: [o.listId]
    })) : s.push(new le({
      item: o,
      category: ["part"],
      message: "errors.field_validation.no_thickness",
      listId: [o.listId]
    })));
  }
  return s;
}, la = (i) => i.filter((e) => (e == null ? void 0 : e.l) || (e == null ? void 0 : e.w));
async function aa(i) {
  var n, r;
  const e = rr(i), t = e.t;
  e.inputShapes && (e.inputShapes = la(e.inputShapes));
  let s = [];
  try {
    if (s = ra(e), s != null && s.length && s.some((x) => x.type === "error"))
      return { valid: !1, issues: s };
    const o = e.inputShapes ?? We.inputShapes.value;
    if (e.maxShapes !== 1 / 0 && e.maxShapes && !e.isAdmin && !e.shared && (Jl.value > e.maxShapes || Ql.value > e.maxStock))
      return e.onLimit(), { valid: !1, issues: s };
    if (e.useInventory) {
      const x = oa(e.materialStore, o, !0), R = Lt(x);
      if (R.length > 0)
        return ht({
          type: "error",
          message: t("errors.validation.inputs_issue", { 0: "material" }),
          additional: R.map((v) => t(v.message))
        }), { valid: !1, issues: s };
    } else {
      const x = nr(), R = Lt(x);
      if (R.length > 0)
        return ht({
          type: "error",
          message: t("errors.validation.inputs_issue", { 0: "stock" }),
          additional: R.map((v) => t(v.message))
        }), { valid: !1, issues: s };
    }
    const l = e.useInventory ? new Et(e.selectedSaw) : new Et(e.sawData), a = Lt(l.issues);
    if (a.length > 0)
      return ht({
        type: "error",
        message: t("errors.validation.inputs_issue", { 0: "saw" }),
        additional: a.map((x) => t(x.message))
      }), { valid: !1, issues: s };
    const { stockList: c, issues: h } = await ea(l), y = Lt(h);
    if (y.length > 0)
      return ht({
        type: "error",
        message: t("errors.validation.inputs_issue", { 0: "stock" }),
        additional: y.map((x) => t(x.message))
      }), { valid: !1, issues: s };
    if (!(c != null && c.length))
      return ht({
        type: "error",
        message: t("errors.validation.no_stock")
      }), { valid: !1, issues: s };
    const { shapeList: d, issues: p } = await ta({
      orientationModel: e.orientationModel,
      trim: e.partTrim,
      inputShapesOverride: o
      // Use the cleaned shape list
    }), g = Lt(p);
    if (g.length > 0)
      return ht({
        type: "error",
        message: t("errors.validation.inputs_issue", { 0: "part" }),
        additional: g.map((x) => t(x.message))
      }), { valid: !1, issues: s };
    if (!(d != null && d.length))
      return ht({
        type: "error",
        message: t("errors.validation.no_parts_list")
      }), { valid: !1, issues: s };
    if (((r = (n = We.userGroups) == null ? void 0 : n.value) == null ? void 0 : r.length) > 0) {
      We.userGroups.value.forEach((v) => v.populateParentID(o));
      const x = jl(
        We.userGroups.value,
        o
        // Use cleaned shapes
      ), R = Lt(x);
      if (R.length > 0)
        return ht({
          type: "error",
          message: t("errors.validation.inputs_issue", { 0: "group" }),
          additional: R.map((v) => t(v.message))
        }), { valid: !1, issues: s };
    }
    return {
      valid: !0,
      issues: s,
      saw: l,
      stockList: c,
      shapeList: d
    };
  } catch (o) {
    return console.error("[Validation] error:", o), ht({
      type: "error",
      message: t("errors.general.unexpected"),
      additional: [(o == null ? void 0 : o.message) ?? ""]
    }), { valid: !1, issues: s };
  }
}
function ua(i) {
  return !i || !Qt(i, !0) ? "" : Object.values(i).filter((e) => e).join("|");
}
function Ts(i, e, t = "Options") {
  if (!t && `${e}` in i && typeof i[e] == "object") return !0;
  const s = `${e}${t}`;
  return !!(t && s in i && typeof i[s] == "object");
}
function $s(i) {
  return `${i}Options`;
}
function ca(i, e, t) {
  const s = $s(e);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      t.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of t)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function ha(i, e, t = !0) {
  if (!Ts(i, e, "Options")) return;
  const s = i[e], n = Object.keys(s);
  for (const r of n)
    As(i, e, r, t);
  t && or(i, e, "all");
}
function As(i, e, t, s = !0) {
  s && or(i, e, t), t !== "all" && Ts(i, e) && (i[e][t] = !1);
}
function or(i, e, t) {
  if (!Ts(i, e, "Options")) return;
  const n = i[`${e}Options`][t];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function Es(i, e, t, s, n, r) {
  var h;
  const o = e + "Options";
  if (!((h = i == null ? void 0 : i[o]) != null && h[t]) || !(s in i[o][t])) return;
  pi(i, e, t, !1), i[o][t][s] = n;
  const l = i[o][t], a = Object.values(l || {}).filter((y) => y);
  if (!Array.isArray(a)) return;
  const c = Vi(i, e, t, r);
  pi(i, e, t, !!He(c));
}
function lr(i, e, t, s, n = [], r) {
  const o = e + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Vi(i, e, "all", r), c = i[o][t], h = Object.values(c || {}).filter((y) => y);
  for (const y of l)
    y !== "all" && (n.includes(y) || (Es(i, e, y, t, s, r), Array.isArray(h) || pi(i, e, y, !1), pi(i, e, y, !!He(a))));
}
function pi(i, e, t, s) {
  var o;
  if (t === "all") return;
  const n = $s(e), r = ua((o = i == null ? void 0 : i[n]) == null ? void 0 : o[t]);
  s ? i[e][t] = r || !0 : i[e][t] = !1;
}
function Vi(i, e, t, s) {
  var a;
  const n = e + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[t])) return !1;
  const r = i[n][t], o = Object.values(r || {}).filter((c) => c);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(e, o);
  return e === "banding" && Qn(t) && He(l) ? _l(i, t, l) / 1e3 : l;
}
function Vh(i) {
  i != null && i.type && delete i.type, da.call(this, i);
}
function da(i) {
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
function fa(i) {
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
const pa = { id: "mini-stock-nav" }, ga = ["onMousedown"], ma = { class: "id" }, ya = /* @__PURE__ */ Ae({
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
    return (r, o) => (w(), P("div", pa, [
      (w(!0), P(ve, null, $e(t.stockList, (l, a) => (w(), P("button", {
        type: "button",
        key: a,
        class: Se(["c-btn nav-button", { selected: l.id === t.activeStockId }]),
        style: Pe({
          backgroundColor: l.id === t.activeStockId ? "#" + t.secondaryColor : "#" + t.primaryColor
        }),
        onMousedown: (c) => n(l.id)
      }, [
        A("div", ma, re(a + 1), 1),
        gs(A("div", { class: "stack legibility" }, re(l.stack), 513), [
          [ms, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, ga))), 128))
    ]));
  }
}), ti = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [s, n] of e)
    t[s] = n;
  return t;
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
}, ba = { id: "spinner" }, wa = ["width", "height"], Sa = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function xa(i, e, t, s, n, r) {
  return w(), P("div", ba, [
    t.complete ? U("", !0) : (w(), P("svg", {
      key: 0,
      class: "loading",
      style: Pe({ width: t.size + "px", height: t.size + "px" }),
      width: t.size,
      height: t.size,
      viewBox: "0 0 300 300"
    }, e[0] || (e[0] = [
      zr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, wa)),
    t.complete ? (w(), P("svg", {
      key: 1,
      class: "complete",
      style: Pe({ width: t.size + "px", height: t.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, e[1] || (e[1] = [
      A("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : U("", !0),
    t.showNumber ? (w(), P("div", Sa, re(t.number), 1)) : U("", !0)
  ]);
}
const on = /* @__PURE__ */ ti(va, [["render", xa]]);
function ka(i, e, t, s, n = !0) {
  var o;
  if (!i || !t || !s || !((o = i == null ? void 0 : i[e]) != null && o[t])) return;
  const r = i[e][t].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function Ca(i, e, t) {
  var s;
  return (s = i == null ? void 0 : i[e]) != null && s[t] ? i[e][t].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function Ia(i, e, t, s, n = []) {
  const r = Ca(i, t, s);
  if (!r.length) return [];
  const o = e.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((h) => h.id)), c = o.map((h) => h.id).filter((h) => !a.has(h)).map((h) => `'${h}'`);
    c.length && console.warn(`Inputs - these fields do not have a field definition - ${c.join()}`);
  }
  return n.length && (o.sort((a, c) => {
    const h = n.indexOf(a.id), y = n.indexOf(c.id);
    return h === -1 ? 1 : y === -1 ? -1 : h - y;
  }), console.log(o)), o;
}
const Pa = ["id"], La = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Da = {
  key: 1,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Ta = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, $a = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Aa = {
  key: 4,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Ea = {
  key: 5,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Oa = /* @__PURE__ */ Ae({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = Y(0), r = Y(!1), o = (C, T, K, $) => {
      if (!ke(K) || T === 0)
        return C;
      const te = l();
      return T === 1 || T === 2 && $ !== "n" && C ? te : C;
    }, l = (C) => {
      const T = { ...t, ...C };
      if (!T.rectangle || !ke(T.rectangle)) return "";
      let K = "";
      switch (T.orientationModel) {
        case 0:
          K = M.value;
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
      if (t.disabled || v.value.length <= 1) return;
      let C = null;
      [1, 2].includes(t.orientationModel) ? C = y() : C = h(), n.value = C;
    }, c = (C) => {
      const T = v.value.findIndex((K) => K === C);
      return T === -1 ? 0 : T;
    }, h = () => {
      let C = 0;
      return C = c(M.value) + 1, C > v.value.length - 1 && (C = 0), C;
    }, y = () => {
      let C = 0;
      if (M.value)
        C = v.value.findIndex((T) => T === "");
      else {
        const T = l();
        C = v.value.findIndex((K) => K === T);
      }
      return C;
    }, d = (C) => {
      s("updateOrientation", C);
    }, p = () => {
      const C = M.value;
      switch (t.orientationModel) {
        case 0:
          return C ? t.stockGrain === "n" ? C || t.shapeOrientation || "default" : t.stockGrain === "w" ? C === "w" ? "w" : "l" : C === "l" ? "l" : "w" : "default";
        case 1:
          return C ? t.stockGrain === "n" ? C || t.shapeOrientation || "default" : t.stockGrain === "w" ? C === "w" ? "w" : "l" : C === "l" ? "l" : "w" : "default";
        case 2:
          return C ? t.stockGrain === "n" ? C || t.shapeOrientation || "default" : t.stockGrain === "w" ? C === "w" ? "w" : "l" : C === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, g = () => {
      if (!t.rectangle) return;
      const C = o(
        M.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if (C !== M.value) {
        x(C);
        return;
      }
      if (n.value = c(M.value), !!ke(t.rectangle)) {
        if (t.orientationModel === 1) {
          const T = W.value ? l() : M.value;
          x(T);
          return;
        }
        if (t.orientationModel === 2) {
          let T;
          W.value ? T = t.stockGrain !== "n" ? l() : "" : T = M.value, x(T);
        }
      }
    }, x = (C) => {
      n.value = c(C), d(C);
    }, R = () => {
      const C = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], T = ["l", "w", "y", "n"], K = [0, 1, 2], $ = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, te = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, q = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, E = [];
      C.forEach((B) => {
        T.forEach((Q) => {
          K.forEach((ie) => {
            const ae = new fi({
              l: B.l,
              w: B.w
            }), Te = l({
              orientationModel: ie,
              rectangle: ae,
              stockGrain: Q
            });
            let Oe = "";
            ae.l === ae.w ? Oe = "l === w" : ae.l > ae.w ? Oe = "l >= w" : Oe = "w > l";
            const pt = ["l", "w", "y"].includes(Q) ? $ : te;
            E.push({
              Model: ie,
              "Stock grain": Q,
              "Stock grain description": q[Q],
              Dimensions: Oe,
              "Orientation lock": Te || "N/A",
              "Orientation Lock description": pt[Te] || "N/A"
            });
          });
        });
      }), E.sort((B, Q) => {
        if (B.Model !== Q.Model)
          return B.Model - Q.Model;
        if (B["Stock grain"] !== Q["Stock grain"])
          return B["Stock grain"].localeCompare(Q["Stock grain"]);
        const ie = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return ie[B.Dimensions] - ie[Q.Dimensions];
      }), console.table(E);
    }, v = ne(() => {
      if (!t.rectangle) return ["l", "w"];
      if (_t(t.rectangle)) return ["l", "w"];
      let C = ["", "l", "w"];
      return t.rectangle.multiEdit && (C = [" ", "", "l", "w"]), O.value && (C = C.filter((T) => T !== "w")), C;
    }), O = ne(() => {
      var C, T, K, $;
      return ke(t.rectangle) || At(t.rectangle) ? t.rectangle.isSquare() : t.rectangleType && ((C = t.rectangle) != null && C.l) && ((T = t.rectangle) != null && T.w) ? ((K = t.rectangle) == null ? void 0 : K.l) === (($ = t.rectangle) == null ? void 0 : $.w) : !1;
    }), M = ne(() => {
      let C = "";
      return _t(t.rectangle) ? C = t.rectangle.direction : ke(t.rectangle) ? C = t.rectangle.orientationLock ?? "" : At(t.rectangle) && (C = t.rectangle.grain ?? ""), C;
    }), _ = ne(() => _t(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), W = ne(() => !_.value.l && !_.value.w), J = ne(() => ds(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), k = ne(() => {
      var $;
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (At(t.rectangle) || t.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[t.rectangle.grain] || "noGrain";
      const C = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, T = t.stockGrain || "default";
      let K = "default";
      return ke(t.rectangle) || t.rectangleType === "shape" ? K = p() : _t(t.rectangle) && (K = t.rectangle.direction || "default"), (($ = C[T]) == null ? void 0 : $[K]) || C[T].default;
    });
    return Ie(n, (C, T) => {
      r.value && T !== void 0 && d(v.value[C]);
    }, { immediate: !1 }), Ie(_, (C, T) => {
      if (!t.rectangle || t.orientationModel === 0 || !ke(t.rectangle) || ke(t.rectangle) && (t.orientationModel === 2 && T.l && T.w && !M.value || t.stockGrain === "n" && !M.value))
        return;
      const K = l();
      M.value !== K && d(K);
    }, { immediate: !1 }), Ie(() => t.stockGrain, (C, T) => {
      C !== T && g();
    }, { immediate: !0 }), at(() => {
      g(), ot(() => {
        r.value = !0, t.debug && R();
      });
    }), (C, T) => (w(), P("button", {
      type: "button",
      id: C.id,
      class: Se(["c-btn orientation-button", { rot: J.value, square: O.value, disabled: C.disabled, [k.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: a
    }, [
      k.value === "delete" ? (w(), P("svg", La, T[0] || (T[0] = [
        A("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : U("", !0),
      k.value === "freeRotation" ? (w(), P("svg", Da, T[1] || (T[1] = [
        A("g", null, [
          A("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          A("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          A("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          A("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]))) : U("", !0),
      k.value === "leftRight" ? (w(), P("svg", Ta, T[2] || (T[2] = [
        A("g", null, [
          A("path", { d: "m5.408 19.408h61.095" }),
          A("g", null, [
            A("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            A("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]))) : U("", !0),
      k.value === "topBottom" ? (w(), P("svg", $a, T[3] || (T[3] = [
        A("g", null, [
          A("path", { d: "m19.408 66.503v-61.095" }),
          A("g", null, [
            A("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            A("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]))) : U("", !0),
      k.value === "grainLeftRight" ? (w(), P("svg", Aa, T[4] || (T[4] = [
        A("g", null, [
          A("path", { d: "m3 3h99.887" }),
          A("path", { d: "m3.113 32h99.887" }),
          A("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]))) : U("", !0),
      k.value === "grainTopBottom" ? (w(), P("svg", Ea, T[5] || (T[5] = [
        A("g", null, [
          A("path", { d: "m61 3v99.887" }),
          A("path", { d: "m32 3.113v99.887" }),
          A("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]))) : U("", !0)
    ], 10, Pa));
  }
}), Ra = ["id"], Fa = /* @__PURE__ */ Ae({
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
    const t = i, s = e, n = Y({
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    Ie(() => t.inputShape.orientationLock, () => {
      let l = {
        x1: t.inputShape.banding.x1,
        x2: t.inputShape.banding.x2,
        y1: t.inputShape.banding.y1,
        y2: t.inputShape.banding.y2
      };
      const a = sn(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      a && (l = Wi(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 }), Ie([
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
      var c;
      if (!((c = t.inputShape) != null && c.banding)) return;
      let l = {
        x1: t.inputShape.banding.x1,
        x2: t.inputShape.banding.x2,
        y1: t.inputShape.banding.y1,
        y2: t.inputShape.banding.y2
      };
      const a = sn(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
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
      t.disabled || s("clicked");
    };
    return at(() => {
      var l;
      (l = document.getElementById(t.id)) == null || l.addEventListener("keydown", r);
    }), yi(() => {
      var l;
      (l = document.getElementById(t.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (w(), P("div", {
      id: l.id,
      class: Se(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      A("div", {
        class: Se(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        A("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Ra));
  }
}), ln = (i, e, t) => {
  if (e === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(i))
        return {
          value: i,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(i), n = xs(i);
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
  if (e === "integer") {
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
  if (e === "float") {
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
function Ma({
  props: i,
  emit: e,
  isMounted: t
}) {
  const s = Y({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (l, a = !1) => {
    if (l == null || l === "") {
      const h = i.required && !i.disableRequiredValidation;
      return Mo(l, "decimal", h);
    }
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
          return ln(c, i.type, i.numberFormat);
        try {
          const h = S({
            v: l,
            nf: i.numberFormat,
            dp: i.decimalPlaces,
            fr: i.fractionRoundTo
          });
          if (typeof h == "number") {
            let y = h, d = !0, p;
            return i.allowZero === !1 && y === 0 ? {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            } : (typeof i.min == "number" && y < i.min && (y = i.min, d = !1, p = "below_min"), typeof i.max == "number" && y > i.max && (y = i.max, d = !1, p = "above_max"), { value: y, valid: d, message: p });
          }
          return { value: h, valid: !0 };
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
          return ln(c, i.type);
        try {
          const y = S({
            v: l,
            nf: "decimal"
          });
          if (y === null)
            return i.required && !i.disableRequiredValidation ? { value: null, valid: !1, message: "field_required" } : { value: null, valid: !0 };
          let d = y;
          if (i.type === "integer" && (d = Math.round(d)), i.allowZero === !1 && d === 0)
            return {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            };
          let p = !0, g;
          return typeof i.min == "number" && d < i.min && (d = i.min, p = !1, g = "below_min"), typeof i.max == "number" && d > i.max && (d = i.max, p = !1, g = "above_max"), { value: d, valid: p, message: g };
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
        t.value && (s.value.isMouseDown = !0);
      },
      //Handler to reset the flag on mouse up
      handleMouseUp: () => {
        t.value && (s.value.isMouseDown = !1);
      },
      handleInput: (l) => {
        if (!t.value) return;
        const a = l.target;
        if (s.value.isMouseDown) {
          const h = n(a.value, !1);
          r(h, !1) && (e("update:value", h.value), e("validation", h, i.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const c = n(a.value, !0);
        e("validation", c, i.id), e("input", a.value), r(c, !0) && e("update:value", c.value);
      },
      handleBlur: (l) => {
        if (!t.value) return;
        s.value.isTyping = !1;
        const a = l.target, c = n(a.value, !1);
        e("validation", c, i.id), r(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("blur", l);
      },
      handleFocus: (l) => {
        t.value && (s.value.isTyping = !0, e("focus", l));
      },
      handleKeydown: (l) => {
        if (t.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(l.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(l.key))
            if (i.type === "unitDependent" && i.numberFormat === "fraction") {
              const a = l.target, c = a.value, h = a.selectionStart || 0, y = c.substring(0, h);
              if (l.key === "/" && c.includes("/")) {
                l.preventDefault();
                return;
              }
              if (l.key === " " && /\s$/.test(y)) {
                l.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(l.key) || l.preventDefault();
            } else (i.type === "integer" || i.type === "float") && ((i.type === "integer" ? /^[-0-9]$/.test(l.key) : /^[-0-9.]$/.test(l.key)) || l.preventDefault());
          if (l.key === "Enter") {
            s.value.isTyping = !1;
            const a = l.target, c = n(a.value, !1);
            e("validation", c, i.id), r(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("enter", c);
          }
          l.key === "Escape" && (s.value.isTyping = !1, e("escape"));
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
        const a = l.target, c = n(a.value, !1);
        e("validation", c, i.id), r(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? ""));
      },
      handlePaste: (l) => {
        var c, h;
        if (!t.value) return;
        const a = ((h = (c = l.clipboardData) == null ? void 0 : c.getData("text")) == null ? void 0 : h.trim()) || "";
        if (i.type === "unitDependent" && i.numberFormat === "fraction") {
          const y = a.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!xs(y)) {
            l.preventDefault(), e("validation", {
              value: y,
              valid: !1,
              message: `Pasted text "${a}" is not a valid fraction format`
            }, i.id);
            return;
          }
          if (y !== a) {
            l.preventDefault();
            const d = l.target;
            d.value = y;
            const p = n(y, !0);
            e("validation", p, i.id), e("input", y);
          }
        }
        e("paste", l);
      }
    },
    processValue: n
  };
}
function _a({
  props: i,
  emit: e,
  isMounted: t
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
function qa({
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
const Ba = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Ha = /* @__PURE__ */ Ae({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = Y(!0), r = Y(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: a,
      handleFocus: c,
      handleBlur: h,
      handleKeydown: y,
      handleCompositionStart: d,
      handleCompositionEnd: p,
      handlePaste: g
    } = Ma({
      props: t,
      emit: s,
      isMounted: n
    }), x = (R) => {
      const v = R.getBoundingClientRect(), O = window.getComputedStyle(R);
      return v.width > 0 && v.height > 0 && O.display !== "none" && O.visibility !== "hidden";
    };
    return at(() => {
      (N(t.default) && t.value === void 0 || t.value === null) && s("update:value", t.default), t.focus && r.value && x(r.value) && ot(() => r.value.focus());
    }), yi(() => {
      n.value = !1;
    }), (R, v) => (w(), P("input", ai(R.$attrs, {
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
      onInput: v[0] || (v[0] = //@ts-ignore
      (...O) => I(o) && I(o)(...O)),
      onFocus: v[1] || (v[1] = //@ts-ignore
      (...O) => I(c) && I(c)(...O)),
      onBlur: v[2] || (v[2] = //@ts-ignore
      (...O) => I(h) && I(h)(...O)),
      onKeydown: v[3] || (v[3] = //@ts-ignore
      (...O) => I(y) && I(y)(...O)),
      onCompositionstart: v[4] || (v[4] = //@ts-ignore
      (...O) => I(d) && I(d)(...O)),
      onCompositionend: v[5] || (v[5] = //@ts-ignore
      (...O) => I(p) && I(p)(...O)),
      onPaste: v[6] || (v[6] = //@ts-ignore
      (...O) => I(g) && I(g)(...O)),
      onMousedown: v[7] || (v[7] = //@ts-ignore
      (...O) => I(l) && I(l)(...O)),
      onMouseup: v[8] || (v[8] = //@ts-ignore
      (...O) => I(a) && I(a)(...O))
    }), null, 16, Ba));
  }
}), ja = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ga = /* @__PURE__ */ Ae({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = Y(!0), r = Y(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = qa({
      props: t,
      emit: s,
      isMounted: n
    });
    return (c, h) => (w(), P("input", {
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
      onChange: h[0] || (h[0] = //@ts-ignore
      (...y) => I(o) && I(o)(...y)),
      onFocus: h[1] || (h[1] = //@ts-ignore
      (...y) => I(l) && I(l)(...y)),
      onBlur: h[2] || (h[2] = //@ts-ignore
      (...y) => I(a) && I(a)(...y))
    }, null, 40, ja));
  }
}), Na = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Wa = ["disabled", "selected"], Va = {
  key: 0,
  value: " "
}, Ua = ["hidden", "value", "disabled"], za = /* @__PURE__ */ Ae({
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
  setup(i, { emit: e }) {
    const t = i, s = e, n = Y(!0), r = Y(null), o = ne(() => t.options.map((a) => {
      var c, h, y;
      return {
        value: a.value,
        label: ((c = a.label) == null ? void 0 : c.toUpperCase()) ?? ((y = (h = a.value) == null ? void 0 : h.toString()) == null ? void 0 : y.toUpperCase()),
        hidden: a.hidden ?? !1,
        disabled: a.disabled ?? !1
      };
    })), {
      handleSelectChange: l
    } = _a({
      props: t,
      emit: s,
      isMounted: n
    });
    return (a, c) => {
      var h, y, d, p;
      return w(), P("select", ai(a.$attrs, {
        id: t.id,
        ref_key: "inputRef",
        ref: r,
        value: t.value,
        disabled: t.readonly || t.disabled,
        required: t.required,
        "aria-label": t.ariaLabel,
        "aria-invalid": !!t.issue,
        "aria-describedby": t.errorId,
        onChange: c[0] || (c[0] = //@ts-ignore
        (...g) => I(l) && I(l)(...g))
      }), [
        A("option", {
          value: "",
          disabled: t.selectFirstOptionDisabled,
          selected: !t.value
        }, re(((y = (h = t.text) == null ? void 0 : h.select) == null ? void 0 : y.toUpperCase()) ?? "SELECT"), 9, Wa),
        t.multiEdit ? (w(), P("option", Va, re(((p = (d = t.text) == null ? void 0 : d.delete) == null ? void 0 : p.toUpperCase()) ?? "DELETE"), 1)) : U("", !0),
        (w(!0), P(ve, null, $e(o.value, (g) => (w(), P("option", {
          key: g.value,
          hidden: g.hidden,
          value: g.value,
          disabled: g.disabled
        }, re(g.label), 9, Ua))), 128))
      ], 16, Na);
    };
  }
}), Ya = ["for"], Xa = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, Ei = /* @__PURE__ */ Ae({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (e, t) => (w(), P("label", {
      for: e.id,
      class: "input-label"
    }, [
      qt(re(e.label) + " ", 1),
      e.required ? (w(), P("span", Xa, "*")) : U("", !0)
    ], 8, Ya));
  }
}), Ka = ["data-field-id"], Za = {
  key: 0,
  class: "input-label-group"
}, Ja = ["disabled", "selected"], Qa = {
  key: 0,
  value: " "
}, eu = ["hidden", "value", "disabled"], $t = /* @__PURE__ */ Ae({
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
  setup(i, { emit: e }) {
    const t = e, s = i, n = Y(null), r = Y(null), o = Y(!0), l = Y(s.numberFormat), a = ne(() => s.custom ? "custom-" + s.id : s.id), c = ne(() => `${a.value}-error`), h = ne(() => s.label || s.placeholder), y = ne(() => k(s.type, s.numberFormat)), d = ne(() => C(s.type, s.numberFormat)), p = ne(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), g = ne(() => {
      let $ = s.value;
      if (s.type !== "unitDependent" || !$) return $;
      try {
        return S({ v: $, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), x = ne(() => s.options.map(($) => {
      var te, q;
      return {
        value: $.value,
        label: ((te = $.label) == null ? void 0 : te.toUpperCase()) || ((q = $.value) == null ? void 0 : q.toString().toUpperCase()),
        hidden: $.hidden || !1,
        disabled: $.disabled || !1
      };
    })), R = ne(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), v = ne(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": h.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), O = ne(() => ({
      ...v.value,
      type: s.type,
      inputMode: d.value,
      inputType: y.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), M = ne(() => ({
      ...v.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), _ = ne(() => ({
      ...v.value,
      options: x.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), W = ($) => {
      r.value = $;
    }, J = ($) => s.label && s.enableLabel && s.labelPosition === $, k = ($, te) => {
      switch ($) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return te === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, C = ($, te) => {
      if ($ === "unitDependent")
        return te === "fraction" ? "text" : "decimal";
      switch ($) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, T = ($) => {
      t("update:value", $);
    }, K = ($, te) => {
      $.valid === void 0 || $.valid === !0 ? (o.value = !0, t("validation", n.value, $)) : $.valid === !1 && $.message && (o.value = !1, console.warn(`Field validation error for field ${te} - ${$.message}`), t("validation", n.value, $));
    };
    return Ie(() => s.numberFormat, ($, te) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && $ !== te && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const q = S({ v: s.value, nf: $ });
            t("update:value", q);
          } catch {
            t("update:value", $ === "decimal" ? 0 : "0");
          }
        l.value = $;
      }
    }), ($, te) => (w(), P("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Se(["input-wrapper", R.value]),
      "data-field-id": a.value
    }, [
      $.type === "checkbox" ? (w(), P("div", Za, [
        J("first") ? (w(), ge(Ei, {
          key: 0,
          id: a.value,
          label: $.label,
          required: $.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        $.type === "checkbox" ? (w(), ge(Ga, ai({
          key: 1,
          ref: W,
          type: "checkbox"
        }, M.value, {
          checked: $.value === $.trueValue,
          "onUpdate:value": te[0] || (te[0] = (q) => t("update:value", q))
        }), null, 16, ["checked"])) : U("", !0),
        J("last") ? (w(), ge(Ei, {
          key: 2,
          id: a.value,
          label: $.label,
          required: $.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ])) : (w(), P(ve, { key: 1 }, [
        J("first") ? (w(), ge(Ei, {
          key: 0,
          id: a.value,
          label: $.label,
          required: $.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        p.value ? (w(), ge(Ha, ai({
          key: 1,
          ref: W
        }, O.value, {
          "input-type": y.value,
          "input-mode": d.value,
          value: g.value,
          "disable-required-validation": $.disableRequiredValidation,
          onValidation: K,
          "onUpdate:value": T
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : $.type === "select" ? (w(), ge(za, ai({
          key: 2,
          ref: W
        }, _.value, {
          "onUpdate:value": te[1] || (te[1] = (q) => t("update:value", q))
        }), {
          default: ys(() => {
            var q, E, B, Q;
            return [
              A("option", {
                value: "",
                disabled: $.selectFirstOptionDisabled,
                selected: !$.value
              }, re(((E = (q = $.text) == null ? void 0 : q.select) == null ? void 0 : E.toUpperCase()) ?? "SELECT"), 9, Ja),
              $.multiEdit ? (w(), P("option", Qa, re(((Q = (B = $.text) == null ? void 0 : B.delete) == null ? void 0 : Q.toUpperCase()) ?? "DELETE"), 1)) : U("", !0),
              (w(!0), P(ve, null, $e(x.value, (ie) => (w(), P("option", {
                key: ie.value,
                hidden: ie.hidden,
                value: ie.value,
                disabled: ie.disabled
              }, re(ie.label), 9, eu))), 128))
            ];
          }),
          _: 1
        }, 16)) : U("", !0),
        J("last") ? (w(), ge(Ei, {
          key: 3,
          id: a.value,
          label: $.label,
          required: $.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ], 64)),
      Yr($.$slots, "default")
    ], 10, Ka));
  }
}), tu = {
  key: 0,
  class: "inputs"
}, iu = { class: "label" }, su = { class: "label" }, nu = { class: "label" }, ru = ["onClick"], ou = { class: "price" }, lu = ["aria-label"], fs = /* @__PURE__ */ Ae({
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
    const t = i, s = e, n = Y(!1), r = ne(() => t.extraType + "Options"), o = ne(() => {
      var g;
      if (!((g = t.allOptions) != null && g.length)) return "auto";
      const d = t.allOptions.length;
      return d ? `repeat(${d + 3 - 1}, max-content) 1fr` : "auto";
    }), l = (d, p) => {
      s("update-all", t.shape, t.extraType, d, p);
    }, a = (d, p, g) => {
      s("set", t.shape, t.extraType, d, p, g);
    }, c = (d, p, g, x, R) => {
      var _;
      if (!d) return [];
      const v = (_ = p == null ? void 0 : p[g]) == null ? void 0 : _[x];
      if (!v)
        return console.error(`ExtrasInputs: cannot find pricing options for ${g} > ${x}`), [];
      const O = Object.values(v);
      if (!O.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${g} > ${x}`), [];
      const M = O.filter((W) => typeof W == "string");
      return t.getAvailablePricingOptions ? t.getAvailablePricingOptions(d, M, R) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, h = (d) => {
      if (!t.pricing || !Object.values(t.pricing).length) return "";
      if (!t.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const p = t.getPrice(t.shape, t.extraType, d);
      return p ? t.formatPrice(p) : "";
    }, y = () => {
      const d = [];
      t.extraType in t.shape || new le(
        {
          item: t.shape,
          message: `The extra type '${t.extraType}' does not exist in the part`
        }
      ), r.value in t.shape || new le(
        {
          item: t.shape,
          message: `The options key '${r.value}' does not exist in the part`
        }
      ), d.length && (n.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + d.map((p) => p.message).join(" ")));
    };
    return at(() => y()), (d, p) => {
      var x, R, v, O, M, _, W, J;
      const g = Ht("FontAwesomeIcon");
      return n.value ? U("", !0) : (w(), P("div", {
        key: 0,
        class: Se(["extras group", [d.extraType]]),
        style: Pe({ "grid-column-end": "span " + d.partColumns })
      }, [
        d.allOptions.length === 1 && d.allOptions[0].length === 1 ? (w(), P("div", tu, [
          A("div", iu, re((R = (x = d.allOptions) == null ? void 0 : x[0]) == null ? void 0 : R[0]), 1),
          A("div", null, [
            (v = d.shape) != null && v[r.value] && "all" in d.shape[r.value] ? (w(), ge($t, {
              key: 0,
              id: `${d.extraType}-all-${d.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: I(V)("general.all"),
              "true-value": (M = (O = d.allOptions) == null ? void 0 : O[0]) == null ? void 0 : M[0],
              "false-value": "",
              value: (W = d.shape[r.value].all) == null ? void 0 : W[(_ = d.labels) == null ? void 0 : _[0]],
              "onUpdate:value": p[0] || (p[0] = (k) => {
                var C, T;
                a("all", (C = d.labels) == null ? void 0 : C[0], k), l((T = d.labels) == null ? void 0 : T[0], k);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : U("", !0)
          ]),
          (w(!0), P(ve, null, $e(d.extraKeys, (k) => {
            var C, T, K, $, te, q;
            return w(), P("div", { key: k }, [
              (C = d.labels) != null && C[0] && ((K = (T = d.shape) == null ? void 0 : T[r.value]) != null && K[k]) && d.labels[0] in d.shape[r.value][k] ? (w(), ge($t, {
                key: 0,
                id: `${d.extraType}-${k}-${d.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: I(V)((($ = d.userFriendlyFieldMap) == null ? void 0 : $[k]) || k),
                "true-value": (q = (te = d.allOptions) == null ? void 0 : te[0]) == null ? void 0 : q[0],
                "false-value": "",
                value: d.shape[r.value][k][d.labels[0]],
                "onUpdate:value": (E) => a(k, d.labels[0], E)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : U("", !0)
            ]);
          }), 128))
        ])) : (w(), P("div", {
          key: 1,
          class: "inputs grid-layout",
          style: Pe({
            "grid-template-columns": o.value
          })
        }, [
          (J = d.shape) != null && J[r.value] && "all" in d.shape[r.value] ? (w(), P(ve, { key: 0 }, [
            A("div", su, re(I(V)("general.all")), 1),
            (w(!0), P(ve, null, $e(d.allOptions, (k, C) => {
              var T, K;
              return w(), ge($t, {
                id: `${d.extraType}-all-${d.labels[C]}-${C}-${d.shapeIndex}`,
                key: `${d.extraType}-all-${d.labels[C]}-${C}-${d.shapeIndex}`,
                type: "select",
                disabled: c(d.pricing, d.shape, r.value, "all", C).length === 0,
                options: c(d.pricing, d.shape, r.value, "all", C).map(($) => ({ value: $, label: $ })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (K = d.shape[r.value].all) == null ? void 0 : K[(T = d.labels) == null ? void 0 : T[C]],
                "onUpdate:value": ($) => {
                  var te, q;
                  a("all", (te = d.labels) == null ? void 0 : te[C], $), l((q = d.labels) == null ? void 0 : q[C], $);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            p[2] || (p[2] = A("div", null, null, -1)),
            p[3] || (p[3] = A("div", null, null, -1))
          ], 64)) : U("", !0),
          (w(!0), P(ve, null, $e(d.extraKeys, (k) => {
            var C, T;
            return w(), P(ve, { key: k }, [
              (C = d.shape) != null && C[r.value] && k in d.shape[r.value] ? (w(), P(ve, { key: 0 }, [
                A("div", nu, re(I(V)(((T = d.userFriendlyFieldMap) == null ? void 0 : T[k]) || k)), 1),
                p[4] || (p[4] = qt()),
                (w(!0), P(ve, null, $e(d.allOptions, (K, $) => {
                  var te;
                  return w(), ge($t, {
                    id: `${d.extraType}-${k}-${d.labels[$]}-${$}-${d.shapeIndex}`,
                    key: `${d.extraType}-${k}-${d.labels[$]}-${$}-${d.shapeIndex}`,
                    type: "select",
                    disabled: c(d.pricing, d.shape, r.value, k, $).length === 0,
                    options: c(d.pricing, d.shape, r.value, k, $).map((q) => ({
                      value: q,
                      label: q
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: d.shape[r.value][k][(te = d.labels) == null ? void 0 : te[$]],
                    "onUpdate:value": (q) => {
                      var E;
                      return a(k, (E = d.labels) == null ? void 0 : E[$], q);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : U("", !0),
              A("button", {
                type: "button",
                class: "c-btn c-btn--delete",
                onClick: () => I(As)(d.shape, d.extraType, k)
              }, [
                we(g, { icon: ["fass", "trash"] })
              ], 8, ru),
              A("div", ou, re(h(k) || I(V)("general.na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        A("button", {
          type: "button",
          class: "c-btn c-btn--delete",
          "aria-label": `${I(V)("actions.delete")} ${I(rs)(I(V)("woodwork." + d.extraLabel))}`,
          onClick: p[1] || (p[1] = () => I(ha)(d.shape, d.extraType, !0))
        }, [
          we(g, { icon: ["fass", "trash"] }),
          qt(" " + re(`${I(V)("actions.delete")} ${I(rs)(I(V)("woodwork." + d.extraLabel))}`), 1)
        ], 8, lu)
      ], 6));
    };
  }
}), au = ["id", "disabled"], uu = /* @__PURE__ */ Ae({
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
      var a, c, h, y;
      const l = Ht("FontAwesomeIcon");
      return w(), P("button", {
        id: r.id,
        class: Se(["c-btn finish-button", {
          "face-a": (c = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : c.a,
          "face-b": (y = (h = r.inputShape) == null ? void 0 : h.finish) == null ? void 0 : y.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        we(l, { icon: ["fass", "spray-can"] })
      ], 10, au);
    };
  }
}), cu = Ae({
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
}), hu = ["id", "disabled"];
function du(i, e, t, s, n, r) {
  const o = Ht("FontAwesomeIcon");
  return w(), P("button", {
    id: i.id,
    class: Se(["c-btn machining-button", { selected: i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: e[0] || (e[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    we(o, { icon: ["fass", "hammer"] })
  ], 10, hu);
}
const fu = /* @__PURE__ */ ti(cu, [["render", du]]), pu = { id: "uploader" }, gu = {
  key: 0,
  class: "debug"
}, mu = {
  key: 1,
  class: "selected-files"
}, yu = ["src"], vu = ["onClick"], bu = !0, wu = /* @__PURE__ */ Ae({
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
    const t = Dt(() => Promise.resolve().then(() => Zi)), s = Y(null), n = Y({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = e, l = (p) => ["image/jpeg", "image/jpg", "image/png"].includes(p.type), a = () => {
      var p;
      (p = s.value) == null || p.click();
    }, c = (p) => {
      const g = p.target, x = g.files;
      if (!x) return;
      const R = Array.from(x), v = R.filter((C) => !l(C));
      if (v.length > 0) {
        const C = v.map((T) => T.name).join(", ");
        alert(`Invalid file type(s): ${C}
Only JPG and PNG files are allowed.`), g.value = "";
        return;
      }
      const O = n.value.files || [];
      if (O.length + R.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), g.value = "";
        return;
      }
      const _ = [...O, ...R], W = h(_), J = _.map((C, T) => ({
        originalName: C.name,
        newName: `${r.prefix}-${T + 1}-${r.uniqueId}${y(C.name)}`
      })), k = {
        shapeId: r.shapeId,
        files: _,
        previewUrls: W,
        metadata: J
      };
      n.value = k, o("update", k), g.value = "";
    }, h = (p) => p.map((g) => URL.createObjectURL(g)), y = (p) => p.substring(p.lastIndexOf(".")), d = (p) => {
      URL.revokeObjectURL(n.value.previewUrls[p]);
      const g = [...n.value.files], x = [...n.value.previewUrls], R = [...n.value.metadata];
      if (g.splice(p, 1), x.splice(p, 1), R.splice(p, 1), g.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const v = {
          shapeId: r.shapeId,
          files: g,
          previewUrls: x,
          metadata: R
        };
        n.value = v, o("update", v);
      }
    };
    return Xr(() => {
      var p;
      (p = n.value) != null && p.previewUrls && n.value.previewUrls.forEach((g) => URL.revokeObjectURL(g));
    }), at(() => {
      n.value.shapeId = r.shapeId;
      const p = r.images.find((g) => g.shapeId === r.shapeId);
      if (p) {
        const g = h(p.files);
        n.value = {
          ...p,
          previewUrls: g
        };
      }
    }), (p, g) => {
      var R;
      const x = Ht("FontAwesomeIcon");
      return w(), P("div", pu, [
        i.env === "development" && bu ? (w(), P("div", gu, [
          we(I(t), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : U("", !0),
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
          we(x, { icon: ["fass", "files"] })
        ]),
        (R = n.value.files) != null && R.length ? (w(), P("div", mu, [
          (w(!0), P(ve, null, $e(n.value.files, (v, O) => (w(), P("div", {
            key: O,
            class: "selected-file"
          }, [
            A("img", {
              src: n.value.previewUrls[O],
              alt: "Preview"
            }, null, 8, yu),
            A("button", {
              class: "remove-file",
              type: "button",
              onClick: (M) => d(O)
            }, [
              we(x, { icon: ["fass", "trash"] })
            ], 8, vu)
          ]))), 128))
        ])) : U("", !0)
      ]);
    };
  }
}), Su = /* @__PURE__ */ ti(wu, [["__scopeId", "data-v-766ba983"]]);
function xu(i) {
  var a, c;
  const e = i.x, t = i.x + i.l, s = nt().domain([e, t]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(t)]), n = i.y, r = i.y + i.w, o = nt().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(Mi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(Mi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((c = (a = i == null ? void 0 : i.stock) == null ? void 0 : a.saw) == null ? void 0 : c.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function ku() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Tn(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call($n(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function ar(i, e, t) {
  !t || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    t === "x" ? Cu.call(this, r, o, e[n]) : Iu.call(this, r, o, e[n]);
  });
}
function Cu(i, e, t) {
  const s = nt().domain([i, e]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(e)
  ]), n = ur(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Mi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(t)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var c, h;
    return ((h = (c = a[l]) == null ? void 0 : c.getBBox()) == null ? void 0 : h.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function Iu(i, e, t) {
  const s = nt().domain([i, e]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(e)
  ]), n = ur(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(_i(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(t)));
  Pu(r), this.axes.cutMeasurementYAxes.push(r);
}
function ur(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function Pu(i) {
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
function gi() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Lu() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Ki() {
  var i, e;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), (e = this.axes.cutMeasurementYAxes) != null && e.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Du() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text id").text((e) => an.call(this, e)).classed("hidden", (e, t, s) => this.isTextHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (i) => i.text((e) => an.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text name").text((e) => un.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, t, s) => this.isNameHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const n = s[t];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (i) => i.text((e) => un.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, t, s) => this.isNameHidden(e, t, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const n = s[t];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text length").text((e) => cn.call(this, e)).classed("hidden", (e, t, s) => this.isLengthHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const r = s[t].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((e) => cn.call(this, e)).classed("hidden", (e, t, s) => this.isLengthHidden(e, t, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, t, s) => {
      const r = s[t].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(r / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text width").text((e) => hn.call(this, e)).classed("hidden", (e, t, s) => this.isWidthHidden(e, t, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, t, s) => {
      const n = s[t], r = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    }),
    (i) => i.text((e) => hn.call(this, e)).classed("hidden", (e, t, s) => this.isWidthHidden(e, t, s)).attr("transform", (e, t, s) => {
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
function an(i) {
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
function un(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function cn(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.l, o: this.numberConfig }).toString();
}
function hn(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.w, o: this.numberConfig }).toString();
}
function Tu(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let e;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const t = Al(
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
        c.attr("class", "ray").attr("x1", (h) => this.scales.xPositionScale(h.x1)).attr("x2", (h) => this.scales.xPositionScale(h.x2)).attr("y1", (h) => this.scales.yPositionScale(h.y1)).attr("y2", (h) => this.scales.yPositionScale(h.y2));
      };
      if (this.state.env !== "development") return;
      const a = Yn(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (c) => c.append("line").call((h) => o.call(this, h)),
        (c) => c.call((h) => o.call(this, h)),
        (c) => c.remove()
      );
    }
    s = El(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Gt();
  for (const r of t.toArray()) {
    const o = Xn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = Tl(i, o, this.props.stock.value);
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
  ].forEach((r) => n.addPoint(r)), e = n.toArray()) : (n.addPoint(new Me(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), e = n.toArray());
  for (let r = e.length; r--; ) {
    const o = e[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        e.splice(r, 1);
        break;
      }
  }
  return $u.call(this, e, i), Au.call(this, e, i), !!(e != null && e.length);
}
function $u(i, e) {
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
function Au(i, e) {
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
const Eu = (i) => i.id;
function Ou() {
  if (!this.props.containerWidth) return;
  gi.call(this);
  const i = this.props.shapes.value.reduce((e, t) => {
    const s = parseInt(t.parentID);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && Fu.call(this), Ru.call(this);
}
function Ru() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Eu).join(
    (i) => {
      const e = i.append("g").attr("class", "shape-group");
      return dn.call(this, e), fn.call(this, e), e.on("mousedown", pn.bind(this)), e;
    },
    (i) => (dn.call(this, i), fn.call(this, i), i.on("mousedown", pn.bind(this)), i),
    (i) => i.remove()
  ), Gu.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Du.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Fu() {
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
  this.scales.scoreColorScale = ui([dt(251, 224, 255), dt(122, 0, 138)]).domain([t, s]);
}
function dn(i) {
  const e = i.selectAll("rect.shape").data((t) => [t]).join("rect").attr("class", "shape").attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).style("fill", (t) => mi.call(this, t));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = An(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Mu(i) {
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
function fn(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (e) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const t = _e(e.target);
    t.classed("hover", !0), t.classed("selected") || t.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, t) => {
    const s = _e(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", mi.call(this, t));
  }, { passive: !0 });
}
function pn(i, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && _u.call(this, i, e), (this.settings.app || this.settings.embed) && Hu.call(this, i, e), this.state.device === "desktop" && (Ki.call(this), xu.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
}
function _u(i, e) {
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
        ], Bu.call(this, e);
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
    console.table(qu(e, t)), console.log(e.bestScore.score);
  }
}
function qu(i, e) {
  return e.reduce((t, s) => {
    const n = tc(i, s);
    return t[s] = Array.isArray(n) ? n.join(", ") : n, t;
  }, {});
}
function Bu(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const t = (r = (n = this.props.shapes.value.find((o) => o.id === e)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Hu(i, e) {
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
      color: mi.call(this, e),
      notes: e == null ? void 0 : e.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function mi(i) {
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
        return r != null && typeof r.toString == "function" ? r : r != null && typeof r.r == "number" && typeof r.g == "number" && typeof r.b == "number" ? (console.warn("Detected corrupted score color object from scale:", r, "for shape:", i), dt(r.r, r.g, r.b, r.opacity ?? 1)) : (console.warn("Score color scale returned null, undefined, or unexpected value:", r, "for shape:", i), e);
      }
    }
  const t = parseInt(i.parentID);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(t) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? dt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", i, s), e);
}
function ju(i) {
  const e = [];
  for (const t of i)
    if (t.added && (t != null && t._banding))
      for (const [s, n] of Object.entries(t._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        t.rot && (r = Mu.call(this, s));
        const o = Nu.call(this, t, r);
        o && e.push(o);
      }
  return e;
}
function gn(i) {
  return i.attr("class", "banding").attr("x1", (e) => this.scales.xPositionScale(e.x1) + Oi.call(this, e.type, "x")).attr("x2", (e) => this.scales.xPositionScale(e.x2) + Oi.call(this, e.type, "x")).attr("y1", (e) => this.scales.yPositionScale(e.y1) + Oi.call(this, e.type, "y")).attr("y2", (e) => this.scales.yPositionScale(e.y2) + Oi.call(this, e.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Gu(i) {
  if (!this.settings.main) return;
  const e = ju.call(this, i);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (t, s) => s).join(
    (t) => t.append("line").call((s) => gn.call(this, s)),
    (t) => t.call((s) => gn.call(this, s)),
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
function Nu(i, e) {
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
function Wu(i) {
  this.selections.shapeWrappers.style("visibility", (e) => (e == null ? void 0 : e.placementOrder) >= i ? "hidden" : "visible");
}
const mn = (i) => i.id;
function yn(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function vn(i) {
  return i.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Vu() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), ku.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], mn).join(
    (i) => i.append("rect").attr("class", "background stock").call((e) => yn.call(this, e)),
    (i) => i.call((e) => yn.call(this, e)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], mn).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((e) => vn.call(this, e)),
    (i) => i.call((e) => vn.call(this, e)),
    (i) => i.remove()
  );
}
function cr(i) {
  return i.id;
}
function bn({ parent: i, near: e, far: t }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [i, e, t].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, cr).join(
    (n) => n.append("rect").attr("class", "segment").call((r) => wn.call(this, r)),
    (n) => n.call((r) => wn.call(this, r)),
    (n) => n.remove()
  ), this.state.env === "development" && Uu.call(this, s), !this.settings.app && this.state.env === "development" && zu.call(this);
}
function wn(i) {
  return i.classed("offcut", (e) => e.offcut).classed("near", (e) => e.segmentType === "near").classed("far", (e) => e.segmentType === "far").classed("parent", (e, t) => e.id !== "root" && t === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Uu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, cr).join(
    (e) => e.append("text").attr("class", "segment-text").call((t) => Sn.call(this, t)),
    (e) => e.call((t) => Sn.call(this, t)),
    (e) => e.remove()
  );
}
function Sn(i) {
  return i.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function zu() {
  this.selections.segmentRectangles.on("mousedown", function(i, e) {
    console.log("segment", `[${(e == null ? void 0 : e.parentID) || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`);
  });
}
function hr(i) {
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
const { currentCutIndex: dr } = ws();
function Yu() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (i, e) => e).join(
    (i) => i.append("line").attr("class", "cut").call((e) => xn.call(this, e)),
    (i) => i.call((e) => xn.call(this, e)),
    (i) => i.remove()
  ), gr.call(this));
}
function xn(i) {
  return i.attr("stroke-width", (e) => {
    const t = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return t < 1 ? 1 : Math.ceil(t);
  }).attr("x1", (e) => this.scales.xPositionScale(e.getVisCoords("x1"))).attr("x2", (e) => this.scales.xPositionScale(e.getVisCoords("x2"))).attr("y1", (e) => this.scales.yPositionScale(e.getVisCoords("y1"))).attr("y2", (e) => this.scales.yPositionScale(e.getVisCoords("y2"))).classed("trim", (e) => e.isTrim).classed("head", (e) => e.isHead);
}
function fr(i, e, t) {
  return i.guillotineData.parentSegmentID === e && t && i.guillotineData.segmentCutOrder < t;
}
function pr(i, e) {
  var t;
  return ((t = i.guillotineData) == null ? void 0 : t.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === e : !1;
}
function Xu(i, e, t, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[t] == "number" && r.guillotineData[t] <= i.guillotineData[t] || !s && r.guillotineData.parentSegmentID === e ? "visible" : "hidden"), dr.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[t] == "number" && r.guillotineData[t] <= i.guillotineData[t] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[t] == "number" && r.guillotineData[t] <= i.guillotineData[t] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[t] === i.guillotineData[t]), this.selections.cutLines.classed("ptx-dummy", (r) => {
    var o;
    return (o = r == null ? void 0 : r.ptxData) == null ? void 0 : o.isDummy;
  }), s || Zu.call(this, i, e);
}
function Ku(i, e, t, s, n) {
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
    this.state.device === "desktop" && !i.isTrim && ar.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function gr() {
  var i, e;
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), (i = this.selections) != null && i.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), (e = this.selections) != null && e.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const s = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(s));
  }), gi.call(this), Ki.call(this);
}
function Zu(i, e) {
  var y, d, p, g;
  const t = (y = i == null ? void 0 : i.guillotineData) == null ? void 0 : y.segmentCutOrder;
  if (t == null) return;
  this.selections.cutLines.classed("completed", (x) => fr(x, e, t)), this.selections.cutLines.classed("inside-segment", (x) => pr(x, e));
  const s = hr.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = mr(i, r);
  if (!o) return;
  let l = [], a;
  const c = this.getHalfBladeWidth(i.stock), h = i.dimension === "l" ? "y" : "x";
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
  ], a = [(p = i == null ? void 0 : i.distances) == null ? void 0 : p.left, (g = i == null ? void 0 : i.distances) == null ? void 0 : g.right]), this.state.device === "desktop" && !i.isTrim && a && ar.call(this, l, a, h);
}
function Ju(i = null, e = "") {
  var p, g, x, R;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const v = this.props.cuts.value.filter((O) => O.isTrim);
    i = i + v.length, i - v.length >= this.props.cuts.value.length - v.length && (dr.value = this.props.cuts.value.length - v.length - 1);
  }
  const t = this.props.cuts.value[i];
  if (!t) return;
  if (gi.call(this), Ki.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const v = this.selections.cutLines.nodes()[i].parentElement;
    if (!v) return;
    _e(v).raise();
  }
  const s = (p = t.guillotineData) == null ? void 0 : p.parentSegmentID, n = this.getHalfBladeWidth(t.stock), r = t.dimension === "l" ? "y" : "x", o = (g = t == null ? void 0 : t.stock) == null ? void 0 : g.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((x = t == null ? void 0 : t.stock) == null ? void 0 : x.cutType) && s !== null && typeof s < "u" ? Xu.call(this, t, s, l, e) : Ku.call(this, t, i, o, r, n), Qu.call(this, t, i, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const a = hr.call(this, t);
  if (a === !1) return;
  const { parent: c, children: h } = a;
  if (!((R = t == null ? void 0 : t.guillotineData) != null && R.parentSegmentID))
    return bn.call(this, { parent: c });
  const { near: y, far: d } = mr(t, h);
  bn.call(this, { parent: c, near: y, far: d });
}
function mr(i, e) {
  const t = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = e.find((o) => o.segmentType === "near" && o[t] + o[s] === i[t + "1"] - i.halfBladeWidth()), r = e.find((o) => o.segmentType === "far" && o[t] === i[t + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function Qu(i, e, t) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (fr(s, t, l) || pr(s, t)) && (o += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function ec(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function tc(i, e) {
  return Ce(i, e);
}
class ic {
  constructor(e) {
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
    u(this, "formatNumber", (e) => {
      const t = S({
        v: e,
        o: this.numberConfig
      });
      if (t !== null) return t.toString();
    });
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = _e(e.elementID), this.selections.el === null)) return;
    const t = this.selections.el.node();
    t !== null && (this.selections.htmlEl = t, this.scales = {
      xScale: nt(),
      yScale: nt(),
      yPositionScale: nt(),
      xPositionScale: nt(),
      yAxisScale: nt(),
      measurementScale: nt(),
      shapeColorScale: ui(),
      scoreColorScale: ui()
    }, this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    }, this.state = {
      env: "production",
      device: "desktop",
      debug: "groups",
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
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, s = (n, r) => dt("#" + (ec(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(t).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = e.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = ui([
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
      let c = a.text();
      const h = a.node();
      if (!h) return;
      let y = h.getComputedTextLength();
      const d = this.getWidthAttribute(n) - 20;
      for (; y > d && c.length > 0; )
        c = c.slice(0, -1), a.text(c.length ? c + "..." : ""), y = a.node().getComputedTextLength();
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
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("height", this.state.h + "px"), this.props.containerHeight.value = this.state.h, this.selections.svgCanvas.attr("width", this.state.w).attr("height", this.state.h).attr("viewBox", `0 0 ${this.state.w} ${this.state.h}`)) : (this.selections.el.style("height", null), this.props.containerHeight.value = 0, this.selections.svgCanvas.attr("width", null).attr("height", null).attr("viewBox", null));
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => mi.call(this, s));
    const t = _e(e).select("rect");
    if (t) {
      t.classed("selected", !0), t.style("fill", this.config.colors.partSelected.toString());
      const s = _e(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Ou.call(this);
  }
  drawStock() {
    Vu.call(this);
  }
  drawCuts() {
    Yu.call(this);
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
    return N(e) && e !== null ? e.getBladeWidth() : 0;
  }
  getHalfBladeWidth(e = null) {
    const t = this.getBladeWidth(e);
    return t !== void 0 && t > 0 ? t / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), gi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Lu.call(this);
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
    var a, c;
    if (this.settings.app) {
      const h = this.scales.measurementScale(e.l), y = this.scales.measurementScale(e.w);
      return h < 50 || y < 50;
    }
    if (((c = (a = e == null ? void 0 : e.stock) == null ? void 0 : a.saw) == null ? void 0 : c.stockType) === "linear") return !1;
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
    (e = this == null ? void 0 : this.selections) != null && e.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => mi.call(this, s)), (t = this == null ? void 0 : this.selections) != null && t.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
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
    Wu.call(this);
  }
  drawPositions(e) {
    Tu.call(this, e);
  }
  showCut(e) {
    Ju.call(this, e);
  }
  resetCuts() {
    gr.call(this);
  }
}
const sc = ["id"], nc = /* @__PURE__ */ Ae({
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
  setup(i, { expose: e, emit: t }) {
    const {
      r: s,
      activeStock: n,
      activeShapes: r,
      activeCuts: o,
      activeSegments: l,
      currentCutIndex: a,
      getStock: c,
      getShapes: h,
      getSegments: y,
      getCuts: d
    } = ws(), p = i, g = t, x = (se) => {
      g("part-click", se);
    }, R = (se) => {
      g("shape-colour-update", se);
    }, v = (se, Ge) => {
      se != null && se.id && g("shape-select", se.id.toString(), Ge);
    }, O = (se) => {
      se && g("add-to-parts-bin", se);
    }, M = (se, Ge) => {
      se && g("move-shape", se, Ge);
    }, _ = Y(0), W = Y(0), J = Y(null);
    let k, C = Y(!1);
    at(() => B());
    const T = ne(() => ({
      format: p.numberFormat,
      decimals: p.decimalPlaces
    })), K = ne(() => p.stockId ? c(p.stockId) : n.value), $ = ne(() => p.stockId ? h(p.stockId) : r.value), te = ne(() => p.main ? p.stockId ? d(p.stockId) : o.value : []), q = ne(() => p.main ? p.stockId ? y(p.stockId) : l.value : []);
    Ln(J, (se) => {
      const Ge = se[0], { width: oe } = Ge.contentRect;
      oe > 0 && (_.value = oe);
    }), Kr(
      _,
      (se) => {
        k && (se <= 0 || (k.setDevice(), k.resetShapeAxes(), k.drawAll(), a.value !== null && (k.toggleSegments(!0), k.showCut(a.value))));
      },
      { throttle: 100 }
    );
    let E = !1;
    Ie(() => K.value, (se) => {
      se && (_.value <= 0 || (E = !0, k.setDevice(), k.resetCuts(), k.removeSegments(), k.drawStock(), k.drawShapes(), k.drawCuts(), ot(() => {
        E = !1;
      })));
    }, { immediate: !1 }), Ie(() => $.value, (se) => {
      E || se && (_.value <= 0 || (k.setDevice(), k.drawShapes()));
    }, { immediate: !1, deep: !0 }), p.main && (Ie(() => te.value, () => {
      E || _.value <= 0 || k.drawCuts();
    }, { immediate: !1, deep: !0 }), Ie(a, () => {
      a.value !== null && (_.value <= 0 || (k.toggleSegments(!0), k.showCut(a.value)));
    }, { immediate: !1 }), Ie(T, (se) => {
      k.updateNumberFormat(se.format, se.decimals, null);
    }, { immediate: !1 }));
    const B = () => {
      const se = {
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
          containerHeight: W,
          containerWidth: _,
          stock: K,
          shapes: $,
          cuts: te,
          segments: q,
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
          onShapeColourUpdate: R,
          onShapeSelect: v,
          onAddToPartsBin: O,
          onMoveShape: M,
          onPartClick: x
        }
      };
      k = new ic(se), C.value = !0;
    };
    return e({
      loaded: C,
      toggleShapes: (se = !1) => {
        k && k.toggleShapes(se);
      },
      toggleCuts: (se = !1) => {
        k && k.toggleCuts(se);
      },
      toggleSegments: (se = !1) => {
        k && k.toggleSegments(se);
      },
      drawShapes: () => {
        k && k.drawShapes();
      },
      drawStock: () => {
        k && k.drawStock();
      },
      drawPositions: (se) => {
        k && k.drawPositions(se);
      },
      resetPositions: () => {
        k && k.removePositions();
      },
      findShape: (se) => {
        k && k.findShape(se);
      },
      clearSelection: () => {
        k && k.clearSelection();
      },
      resetCuts: () => {
        k && (k.toggleSegments(!1), k.resetCuts());
      },
      showCut: (se) => {
        k && (k.toggleSegments(!0), k.showCut(se));
      },
      requiresStretch: (se) => {
        k && k.requiresStretch(se);
      }
    }), (se, Ge) => (w(), P("div", {
      id: se.elementId,
      ref_key: "diagramContainerRef",
      ref: J,
      class: Se([{ app: se.app }, "diagram-container"])
    }, null, 10, sc));
  }
}), rc = {
  key: 2,
  class: "debug"
}, oc = {
  key: 0,
  class: "row table-heading"
}, lc = {
  key: 0,
  class: "cell center"
}, ac = { class: "cell" }, uc = ["id", "disabled", "onClick"], cc = {
  key: 0,
  class: "cell"
}, hc = ["onClick"], dc = { class: "cell" }, fc = ["disabled", "aria-label", "onClick"], pc = { class: "button-wrapper main" }, gc = ["aria-label"], mc = ["aria-label", "disabled"], yc = ["aria-label"], vc = { id: "part-count" }, bc = {
  key: 3,
  id: "messages"
}, wc = {
  key: 0,
  class: "heading"
}, Sc = { class: "content" }, xc = {
  key: 4,
  id: "progress"
}, kc = { id: "diagram-wrapper" }, Cc = {
  key: 0,
  id: "stack"
}, Ic = !1, kn = 5, Pc = /* @__PURE__ */ Ae({
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
    const s = Dt(() => Promise.resolve().then(() => qc)), n = Dt(() => Promise.resolve().then(() => Hc)), r = Dt(() => Promise.resolve().then(() => oh)), o = Dt(() => Promise.resolve().then(() => dh)), l = Dt(() => Promise.resolve().then(() => Zi)), { inputs: a, totalInputShapes: c, getShapeGrainSummary: h, updateNumberFormat: y, validateInputStock: d, removeShape: p } = Dn(), { r: g, updateFromResult: x, stackedStock: R, uniqueAddedShapes: v, uniqueUsedStock: O, activeStockId: M, activeStock: _, setActiveStockId: W } = ws(), { progress: J, reset: k } = co(), { addNotice: C } = bs(), { tip: T, update: K, hide: $ } = ao(), te = i, q = t, E = Y(!1), B = "production", Q = Y((navigator == null ? void 0 : navigator.language) || "en-US"), ie = Zr(null), ae = window.location.hostname, xe = Y(!1), Te = Y(!0), Oe = Jr("Checkout/currentURL", window.location.href), pt = ps(), je = Y([]), xt = Y(!1), F = Y(!1), Ke = Y(!1), ii = Y(!1), se = Y(!1), Ge = Y(Kl()), oe = Y(!1), { socket: Re } = uo({
      refs: {
        connected: xe,
        thinking: Ke
      },
      callbacks: {
        onResult(f) {
          var L, H, X, ue, ce;
          const m = f.result;
          if (x(m), !((L = m.shapeList) != null && L.length) || !((H = m.stockList) != null && H.length)) {
            k(), C({
              type: "error",
              message: V("errors.calculation.no_result"),
              additional: [V("errors.validation.check_inputs")]
            }), Ke.value = !1;
            return;
          }
          const b = {
            jobId: f.jobId,
            metadata: g.metadata.value,
            parts: v.value.map((G) => {
              var ee, ye, z;
              return {
                l: G.l,
                w: G.w,
                t: G == null ? void 0 : G.t,
                material: G.material,
                orientationLock: G.orientationLock,
                q: (ye = (ee = g.metadata.value) == null ? void 0 : ee.addedPartTally) == null ? void 0 : ye[G.parentID],
                name: G.name,
                banding: G.banding,
                finish: G.finish,
                customData: G.customData,
                stockId: ((z = G == null ? void 0 : G.stock) == null ? void 0 : z.id) || (G == null ? void 0 : G.stockId)
              };
            }),
            stock: O.value.map((G) => {
              var ee, ye;
              return {
                id: G.id,
                name: G == null ? void 0 : G.name,
                l: G.l,
                w: G.w,
                t: G == null ? void 0 : G.t,
                material: G.material,
                q: (ye = (ee = g.metadata.value) == null ? void 0 : ee.usedStockTally) == null ? void 0 : ye[G.parentID],
                trim: G == null ? void 0 : G.trim,
                cost: G == null ? void 0 : G.cost,
                analysis: G == null ? void 0 : G.analysis
                // type: s?.type
              };
            }),
            offcuts: g.offcuts.value.map((G) => ({
              l: G.l,
              w: G.w,
              t: (G == null ? void 0 : G.t) ?? null,
              q: G.q,
              stockId: G.stockId
            })),
            inputs: {
              parts: a.inputShapes.value.map((G) => {
                const ee = { ...G };
                return delete ee.listId, ee;
              })
            }
          };
          if ((ce = (ue = (X = g == null ? void 0 : g.metadata) == null ? void 0 : X.value) == null ? void 0 : ue.unplacedParts) != null && ce.length) {
            const G = g.metadata.value.unplacedParts.map((ee) => ee.id).join();
            C({
              type: "warning",
              message: V("woodwork.parts_not_fit") + ": " + G
            });
          }
          q("result", b), Ke.value = !1;
        },
        onUser(f) {
          ie.value = f;
        },
        onConnectError(f) {
          C({
            type: "error",
            message: V("errors.network.cannot_connect"),
            additional: [f]
          });
        },
        onError(f) {
          C({
            type: "error",
            message: V("errors.general.error_occurred"),
            additional: [f]
          });
        }
      }
    }), gt = {
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
    }, j = vt(gt), Fe = vt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Ye = Y(null), bi = Y(!1), si = Y(""), wi = Y(""), Ne = vt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Ve = Y([]), Be = Y([]), Ot = Y([]), Ze = vt({
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
      keys: wt
    }), Ee = vt({
      labels: [],
      pricing: {},
      options: [],
      keys: ["a", "b"]
    }), ni = vt({
      parts: {
        sheet: [
          { id: "material", enabled: !1 },
          { id: "l", enabled: !0 },
          { id: "w", enabled: !0 },
          { id: "t", enabled: !1 },
          { id: "q", enabled: !0 },
          { id: "name", enabled: !0 },
          { id: "banding", enabled: !1 },
          { id: "orientationLock", enabled: !0 },
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
    }), Vt = Y([]), Si = ne(() => {
      var m;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "woodwork.material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (m = Ve.value[0]) == null ? void 0 : m.name,
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
          output: j.numberFormat === "decimal" ? "number" : "string",
          label: "woodwork.thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "woodwork.length",
          min: (j == null ? void 0 : j.minDimension) ?? 0,
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
          min: (j == null ? void 0 : j.minDimension) ?? 0,
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
          id: "banding",
          w: "32px",
          label: "woodwork.banding",
          fieldMap: "bandingOptions"
        },
        {
          id: "orientationLock",
          w: "36px",
          label: "woodwork.rotation",
          fieldMap: "orientationLock"
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
      ], ...Vt.value];
    }), D = ne(() => Ia(
      ni,
      Si.value,
      "parts",
      Fe.stockType,
      j.fieldOrder
    )), Z = ne(() => D.value.length + 2), de = ne(() => {
      const f = {
        id: 34,
        del: 32
      }, m = {
        id: `${f.id + kn}px`,
        del: `${f.del + kn}px`
      }, b = [];
      for (const L of D.value)
        L.id !== "trim" && b.push(L.w ?? "minmax(20px, 1fr)");
      return b.unshift(m.id), b.push(m.del), b.join(" ");
    }), me = ne(() => ({
      "--btn-color": j.colors.buttonText,
      "--btn-bg": j.colors.button,
      "--btn-hover-bg": Je(j.colors.button, -8),
      "--btn-focus-ring": j.colors.button
    }));
    function Je(f, m) {
      const b = f.replace("#", ""), L = parseInt(b, 16), H = Math.round(2.55 * m), X = (L >> 16) + H, ue = (L >> 8 & 255) + H, ce = (L & 255) + H;
      return `#${(16777216 + (X < 255 ? X < 1 ? 0 : X : 255) * 65536 + (ue < 255 ? ue < 1 ? 0 : ue : 255) * 256 + (ce < 255 ? ce < 1 ? 0 : ce : 255)).toString(16).slice(1)}`;
    }
    const Ue = {
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
    }, kt = ne(() => {
      var f, m;
      return ie.value ? !(ie.value && ((m = (f = ie.value) == null ? void 0 : f.api) != null && m.whiteLabel)) : !0;
    }), Rt = {
      stockType: (f) => {
        const m = ["sheet", "linear", "roll"];
        m.includes(f) || console.warn(`${f} is not a valid stockType, expected ${m.join("|")}`), Fe.stockType = f, f === "linear" && (Fe.cutType = null, Fe.cutPreference = null);
      },
      stockSelection: (f) => {
        const m = ["efficiency", "smallest"];
        f && !m.includes(f) ? console.warn(`${f} is not a valid stockSelection, expected ${m.join("|")}`) : Fe.options.stockSelection = f;
      },
      minSpacing: (f) => {
        Fe.options.minSpacing = f;
      },
      stackHeight: (f) => {
        Fe.stackHeight = f;
      },
      cutPreference: (f) => {
        const m = ["efficiency", "length", "width", "beam"];
        if (m.includes(f)) {
          const { cutType: b, cutPreference: L } = ls(f);
          Fe.cutType = b, Fe.cutPreference = L;
        } else
          console.warn(`SmartCut - cut preference ${f || "N/A"} is not one of ${m.join("|")}`);
      },
      guillotineOptions: (f) => {
        Fe.guillotineOptions = f;
      },
      bladeWidth: (f) => {
        f >= 0 ? Fe.bladeWidth = f : console.warn(`SmartCut - you provided an incorrect blade width of: ${f}`);
      },
      maxParts: (f) => {
        j.maxParts = f;
      },
      locale: (f) => {
        Q.value = f.replace(/_/g, "-");
      },
      enable: (f) => {
        const m = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in gt.enable)
          b in f && (j.enable[b] = f[b]);
        for (const b in m)
          Le(b, Pt(f, [m[b]]) ?? gt.enable[m[b]]);
        se.value = Pt(f, ["csvImport"]) ?? gt.enable.csvImport;
      },
      colors: (f) => {
        for (const m in gt.colors)
          m in f && (j.colors[m] = f[m]);
      },
      orientationModel: (f) => {
        if (![0, 1, 2].includes(f)) {
          j.orientationModel = 0;
          return;
        }
        j.orientationModel = f;
      },
      numberFormat: (f) => {
        if (!["decimal", "fraction"].includes(f)) {
          j.numberFormat = "decimal";
          return;
        }
        j.numberFormat = f;
      },
      customFields: (f) => {
        if (!Array.isArray(f) || !(f != null && f.length)) return;
        const m = [];
        f.forEach((b, L) => {
          m.push(b), m[L].custom = !0;
          const H = Ft(b.id);
          m[L].id = H, m[L].fieldMap = "customData." + H, b.type === "checkbox" && (m[L].w = "32px"), b.type === "select" && (m[L].output = b.output ?? "string", m[L].options = b.options);
        }), Vt.value = m;
        for (const b of a.inputShapes.value)
          b.customData = f.reduce((L, H) => {
            const X = Ft(H.id);
            return L[X] = b.customData[X] || H.default || "", L;
          }, {});
      }
    }, tt = (f) => {
      if (te.debug && q("log", ["checkout init...", f]), f != null && f.options) {
        const b = f.options;
        fa(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((X) => {
          X in b || q("error", `${X} is a required option`);
        });
        const H = ["enable", "colors"];
        for (const X in b)
          H.includes(X) || (j[X] = b[X]), X in Rt && Rt[X](b[X]);
      }
      f.colors && "colors" in Rt && Rt.colors(f.colors), js("banding", f), js("finish", f), yr(f), xr(f), F.value = !0, te.debug && q("log", ["init complete"]);
      const m = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(m), ot(() => {
        kt.value && !Lr() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, ut = (f, m) => {
      f && (f.orientationLock = m);
    }, Le = (f, m = !1) => {
      ka(ni, "parts", Fe.stockType, f, m);
    }, Ft = (f) => f ? So(f).toLowerCase() : null, Ji = (f, m, b, L) => {
      if (m.valid) {
        if ($(), b && L) {
          const H = b.issues.findIndex((X) => X.field.some((ue) => ue.length === L.length && ue.every((ce, G) => ce === L[G])));
          H !== -1 && b.issues.splice(H, 1);
        }
      } else
        K({
          referenceEl: f,
          show: !0,
          content: V(`errors.field_validation.${m.message}`),
          type: "error"
        });
    }, yr = (f) => {
      var m, b, L, H, X;
      if (Pt(j, ["enable", "machining"]) && f != null && f.machining) {
        for (const ue in Ze)
          f.machining[ue] && (Ze[ue] = f.machining[ue]);
        if (["holes", "hingeHoles"].forEach((ue) => {
          var ce, G;
          (ce = f == null ? void 0 : f.machining) != null && ce[ue] && (Ze[ue].enabled = (G = f == null ? void 0 : f.machining) == null ? void 0 : G[ue].enabled);
        }), (L = (b = (m = f == null ? void 0 : f.machining) == null ? void 0 : m.corners) == null ? void 0 : b.types) != null && L.length && (Ze.corners.enabled = !0, Ze.corners.types = f.machining.corners.types), f.banding && ((X = (H = f == null ? void 0 : f.options) == null ? void 0 : H.enable) != null && X.banding)) {
          if (!be) return;
          Ze.banding = {
            enabled: !0
          }, be.options.length && (Ze.banding.options = be.options), be.labels.length && (Ze.banding.labels = be.labels), Qt(be.pricing) && (Ze.banding.pricing = be.pricing);
        }
      }
    }, vr = (f = null) => {
      Ye.value = f, f && f.l && f.w ? E.value = !0 : alert(V("machining.enter_dimensions_first"));
    }, br = () => {
      E.value = !1;
    }, Os = (f = []) => {
      if (Be.value = [], Ot.value = [], Le("t", !1), !!f.length) {
        for (const m of f)
          if (m != null && m.t)
            if (typeof m.t == "string" && m.t.includes(",")) {
              const b = Rs(m.t, !0);
              b.length === 2 ? (kr(b), Le("t", !0), m.t = Be.value[0]) : q("error", "bonded thickness found which does not have 2 options");
            } else Be.value.includes(m.t) || Be.value.push(m.t);
        Be.value.length > 1 && Le("t", !0);
      }
    }, wr = (f) => {
      var H;
      if (!f) return { thicknesses: [], bondedThicknesses: [] };
      if (!((H = Ve.value) != null && H.length))
        return {
          thicknesses: Be.value,
          bondedThicknesses: []
        };
      if (!f.material) return { thicknesses: [], bondedThicknesses: [] };
      const m = Ve.value.find((X) => X.name === f.material);
      if (!m) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...m.thicknesses], L = [];
      for (let X = 0; X < b.length; X++) {
        const ue = b[X], ce = Rs(ue), G = [];
        if (ce.length) {
          for (const ee of ce)
            b[X] = ee, G.push(X);
          X++;
        }
        G.length && L.push(G);
      }
      return {
        thicknesses: b,
        bondedThicknesses: L
      };
    }, Sr = (f) => wr(f).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), xr = (f) => {
      var m, b;
      if ((m = f == null ? void 0 : f.stock) != null && m.some((L) => L == null ? void 0 : L.material)) {
        Ve.value = [], Be.value = [], Ot.value = [];
        const L = /* @__PURE__ */ new Map();
        for (const H of f.stock) {
          if (!H.material) continue;
          const X = H.material.toUpperCase();
          L.has(X) || L.set(X, /* @__PURE__ */ new Set()), H.t != null && ((b = L.get(X)) == null || b.add(S({ v: H.t })));
        }
        Ve.value = Array.from(L.entries()).map(([H, X]) => ({
          name: H,
          thicknesses: Array.from(X).sort((ce, G) => ce - G)
        })), Ve.value.length > 1 && Le("material", !0);
      } else
        Os(f.stock);
    }, kr = (f, m = null) => {
      if (!Array.isArray(f)) {
        q("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let L of f)
        j.numberFormat === "decimal" && (L = parseFloat(L)), Be.value.push(L), m && m.thicknesses.push(L), b.push(Be.value.length - 1);
      Ot.value.push(b);
    }, Rs = (f, m = !1) => {
      if (typeof f == "string" && f.includes(",")) {
        const b = f.split(",");
        return m ? b.map((L) => S({ v: L })) : b;
      }
      return [];
    }, Cr = () => {
      oe.value ? Pr() : Ir();
    }, Ir = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), oe.value = !0;
    }, Pr = () => {
      document.exitFullscreen && document.exitFullscreen(), oe.value = !1;
    }, Lr = () => {
      var L, H;
      if ((H = (L = ie.value) == null ? void 0 : L.api) != null && H.whiteLabel) return !0;
      let f = !0;
      const m = document.querySelector("#smartcut-checkout a#credit");
      if (!m) return f = !1;
      const b = window.getComputedStyle(m);
      return b.display === "none" || b.display === "hidden" || b.opacity === "0" || b.color === "transparent" || b.position !== "absolute" || b.color !== "#4e4e4e" && b.color !== "rgb(78, 78, 78)" ? f = !1 : (Te.value = f, f);
    }, Fs = (f, m, b, L, H) => {
      Es(
        f,
        m,
        b,
        L,
        H,
        te.findExtrasPrice
      );
    }, Ms = (f, m, b, L) => {
      lr(
        f,
        m,
        b,
        L,
        m === "banding" ? vi : [],
        te.findExtrasPrice
      );
    }, xi = (f, m) => {
      const b = m === "banding" ? be == null ? void 0 : be.labels : Ee == null ? void 0 : Ee.labels;
      ca(f, m, b);
      const L = $s(m);
      if (f != null && f[L])
        for (const H in f[L]) {
          const X = Vi(f, m, H, te.findExtrasPrice);
          X === !1 && H && f[m][H] && new le({
            item: f,
            field: [[m, H]],
            type: "error",
            category: ["part"],
            message: V("option_not_available", { x: f[m][H], y: V(m) })
          }), pi(f, m, H, !!X);
        }
    }, _s = (f) => {
      const m = Object.keys(f);
      return Math.max(...m.map((L) => L.split("|").length));
    }, qs = (f) => {
      const m = [], b = Object.keys(f), L = _s(f);
      for (let H = L; H--; ) m.push(/* @__PURE__ */ new Set());
      for (const H of b)
        H.split("|").forEach((ue, ce) => m[ce].add(ue));
      for (let H = 0; H < L; H++)
        m[H] = Array.from(m[H]);
      return m;
    }, ki = (f, m = [], b) => {
      if (!f) return [];
      if (b > 0 && !m[b - 1]) return [];
      const L = /* @__PURE__ */ new Set();
      for (const H of Object.keys(f)) {
        const X = H.split("|");
        if (X.length > b) {
          let ue = !0;
          for (let ce = 0; ce < b; ce++)
            if (m[ce] && X[ce] !== m[ce]) {
              ue = !1;
              break;
            }
          ue && L.add(X[b]);
        }
      }
      return Array.from(L);
    }, Ci = (f, m, b) => Vi(
      f,
      m,
      b,
      te.findExtrasPrice
    ), Dr = (f) => {
      const m = je.value.findIndex((b) => b.shapeId === f.shapeId);
      m !== -1 ? je.value[m] = f : je.value.push(f), window.smartcutImages = je.value;
    }, Tr = (f) => {
      je.value = je.value.filter((m) => m.shapeId !== f), window.smartcutImages = je.value;
    }, Bs = (f = 1) => {
      for (let m = f; m--; ) {
        let b;
        if (a.inputShapes.value.length > 0) {
          const L = a.inputShapes.value[a.inputShapes.value.length - 1];
          b = ri({
            material: L.material,
            t: L.t
          });
        } else
          b = ri();
        a.inputShapes.value.push(b);
      }
    }, ri = (f = {
      l: null,
      w: Fe.stockType === "linear" ? ((m) => (m = a.inputStock.value[0]) == null ? void 0 : m.w)() : null,
      t: Be.value.length ? Be.value[0] : null,
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
      var H, X;
      f.id = (a.inputShapes.value.length + 1).toString();
      const L = new fi(f, j.numberFormat);
      return (H = be == null ? void 0 : be.labels) != null && H.length && xi(L, "banding"), (X = Ee == null ? void 0 : Ee.labels) != null && X.length && xi(L, "finish"), L;
    }, $r = (f) => {
      if (Be.value.length)
        for (const m of f) {
          if (!m.t) return;
          const b = Be.value.findIndex(
            (X) => S({ v: X }) === m.t
          ), L = Ot.value.find((X) => X.includes(b));
          if (!L) return;
          const H = Math.min(
            ...L.map((X) => Be.value[X])
          );
          S({ v: m.t }) > H && (m.q = m.q * (S({ v: m.t }) / H), m.notes = `Bond to form ${m.t.valueOf()}`, m.t = H);
        }
    }, Hs = () => {
      k(), W(null), g.stockList.value = [], g.shapeList.value = [], g.cutList.value = [];
    }, Qi = () => {
      a.inputShapes.value.length = 0;
    }, Ar = async () => {
      if (q("calculating"), Ke.value) return !1;
      Ke.value = !0, ii.value = !1;
      const f = a.inputShapes.value.map((ue) => new fi(ue));
      $r(f);
      const { valid: m, saw: b, stockList: L, shapeList: H } = await aa({
        t: V,
        partTrim: j.partTrim,
        maxShapes: j.maxParts,
        orientationModel: j.orientationModel,
        sawData: Fe,
        inputShapes: f,
        onLimit: () => {
          C({
            type: "error",
            message: V("limits.max_parts") + " " + j.maxParts
          });
        }
      });
      if (!m) {
        q("validation-error"), Ke.value = !1;
        return;
      }
      Hs(), te.debug && console.log(
        "SmartCut - calculating",
        "stock",
        L.map((ue) => ue.dimensions),
        "parts",
        H.map((ue) => ue.dimensions)
      );
      const X = {
        inputs: {
          parts: f,
          stock: a.inputStock.value,
          saw: b
        },
        saw: b,
        shapeList: H,
        stockList: L,
        enableEvo: !0,
        domain: ae
      };
      await Re.connect(), Re.emit("calculate", X);
    }, js = (f, m) => {
      var ye;
      if (Le(f, !1), !f || !m || !(m != null && m[f]) || !Pt(j, ["enable", f])) return;
      const b = [f, "pricing"];
      if (!tn(m, b)) {
        q("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const L = Pt(m, b);
      if (typeof L != "object") {
        q("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!Qt(L)) {
        q("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const H = Object.keys(L), X = Object.values(L);
      if (!H.length) {
        q("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const ue = /,/;
      for (const z of H)
        if (ue.test(z)) {
          q("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (X.some((z) => isNaN(z))) {
        q("error", `${b} values must be a number`);
        return;
      }
      const ce = _s(L), G = [f, "labels"];
      let ee = [];
      if (tn(m, G))
        ee = Pt(m, G);
      else {
        q("error", `${G.join(".")} not found`);
        return;
      }
      if (!ee) {
        q("error", `${G.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(ee)) {
        q("error", `${G.join(".")} data must be an array`);
        return;
      }
      if (!(ee != null && ee.length)) {
        q("error", `if provided, ${G.join(".")} data must contain values`);
        return;
      }
      if (ee.length !== ce) {
        q("error", `${G.join(".")} length (${ee.length}) must match the number of levels in ${b.join(".")} (${ce})`);
        return;
      }
      switch (f) {
        case "banding":
          be.labels = ee, be.pricing = L, be.options = qs(L);
          break;
        case "finish":
          Ee.labels = ee, Ee.pricing = L, Ee.options = qs(L);
          break;
      }
      if (Le(f, !0), !!((ye = a.inputShapes.value) != null && ye.length))
        for (const z of a.inputShapes.value)
          xi(z, f);
    }, Ii = (f, m) => {
      if (!m) return;
      f !== "info" && Object.keys(Ne).forEach((L) => {
        L !== f && L !== "info" && (Ne[L] = null);
      });
      const b = a.inputShapes.value.indexOf(m);
      Ne[f] === b ? (Ye.value = null, Ne[f] = null) : (Ye.value = m, Ne[f] = b);
    }, Gs = (f) => {
      if (q("log", ["load event received"]), !F.value) {
        q("log", ["load event received"]);
        return;
      }
      Er(f.detail);
    }, Er = (f) => {
      var L, H, X;
      if (q("log", ["loading parts..."]), !f || !((H = (L = f == null ? void 0 : f.inputs) == null ? void 0 : L.parts) != null && H.length)) {
        q("log", ["could not find any parts to import"]);
        return;
      }
      a.inputShapes.value.length = 0;
      let m = 0;
      for (const ue of f.inputs.parts) {
        const ce = ri(ue);
        ce ? (a.inputShapes.value.push(ce), (X = ce.issues) != null && X.length && q("log", [`SmartCut - issues found while importing part at index ${m}`, ce.issues])) : q("log", [`SmartCut - error loading part at index ${m}`, ue]), m++;
      }
      a.inputShapes.value.flatMap((ue) => Lt(ue.issues)).length && C({
        type: "error",
        message: V("errors.general.issues_found")
      }), q("log", [`loaded ${a.inputShapes.value.length} parts`]);
    }, Or = (f) => {
      a.inputShapes.value.length = 0, ot(() => {
        var m, b;
        for (const L of f)
          L.t = ((b = (m = a.inputStock.value) == null ? void 0 : m[0]) == null ? void 0 : b.t) ?? null, a.inputShapes.value.push(ri(L));
      });
    };
    Ie(() => te.stock, (f) => {
      if (Hs(), Array.isArray(f) || console.warn("SmartCut - stock must be passed as an array"), !!(f != null && f.length)) {
        a.inputStock.value.length = 0, Ve.value.length || Os(f);
        for (const m of f) {
          const b = new Ps({
            ...m,
            autoAdd: !0,
            id: (a.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, j.numberFormat);
          a.inputStock.value.push(b);
        }
        if (a.inputStock.value.length) {
          a.inputShapes.value.length ? ot(() => {
            a.inputShapes.value.forEach((b) => {
              if (b.material) {
                const L = Ve.value.find((H) => H.name === b.material);
                L && (L.thicknesses.includes(S({ v: b.t })) || (b.t = S({ v: L.thicknesses[0] })));
              } else b.t || (b.t = S({ v: a.inputStock.value[0].t }));
            });
          }) : te.inputType !== "formula" && ot(() => Bs(1));
          const m = d(Fe);
          m.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(m))), C({
            type: "error",
            message: V("errors.validation.stock_issue"),
            additional: m.map((b) => b.message)
          }));
        }
      }
    }, { immediate: !0 }), Ie(a.inputShapes, (f) => {
      q("inputs-changed"), f.forEach((m) => {
        var L;
        Fe.stockType === "linear" && (m.w = (L = a.inputShapes.value[0]) == null ? void 0 : L.w);
        const b = Ve.value.find((H) => H.name === m.material);
        b && (b.thicknesses.includes(S({ v: m.t })) || (m.t = S({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), Ie(() => j.numberFormat, (f) => {
      y(f);
    }), at(async () => {
      if (xt.value) return;
      const f = new URL(window.location.href), m = f.searchParams.toString(), b = f.origin + f.pathname + (m ? `?${m}` : "");
      Oe.value !== b && Qi(), Oe.value = b, Q.value = j.locale, await Re.connect(), Re.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Gs), xt.value = !0, te.debug && q("log", [
        "ready...",
        "fields:",
        D.value.map((L) => L.id)
      ]);
    });
    const Rr = () => {
      Re && Re.disconnect();
    };
    return yi(() => {
      window.removeEventListener("smartcut/load", Gs), Rr(), delete window.smartcutCheckout;
    }), e({
      init: tt,
      clear: Qi,
      getAvailablePricingOptions: ki,
      getExtrasPrice: Ci,
      formatPrice: te.formatPrice,
      findExtrasPrice: te.findExtrasPrice,
      inputShapes: a.inputShapes,
      initExtrasOptions: xi,
      createInputShape: ri
    }), (f, m) => {
      var L, H, X, ue, ce, G;
      const b = Ht("FontAwesomeIcon");
      return w(), P(ve, null, [
        F.value ? U("", !0) : (w(), ge(on, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        we(I(s), {
          content: I(T).content,
          type: I(T).type,
          show: I(T).show,
          "reference-el": I(T).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        (L = Ye.value) != null && L.machining && E.value ? (w(), ge(I(r), {
          key: 1,
          shape: Ye.value,
          "onUpdate:shape": m[0] || (m[0] = (ee) => Ye.value = ee),
          translate: !0,
          options: Ze,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": Ci,
          "get-available-pricing-options": ki,
          "format-price": i.formatPrice,
          onClose: br
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : U("", !0),
        I(B) === "development" && Ic ? (w(), P("div", rc, [
          m[5] || (m[5] = A("div", null, "Developer information", -1)),
          A("div", null, re(j.enable.focus), 1),
          we(I(l), {
            data: [I(a).inputShapes.value[0]],
            paths: ["inputs.inputShapes"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        F.value ? (w(), P("section", {
          key: 3,
          id: "smartcut-checkout",
          class: Se(["smartcut-content", { fullscreen: oe.value }])
        }, [
          Ge.value && !i.readonly ? (w(), P("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: Pe(me.value),
            onClick: m[1] || (m[1] = (ee) => Cr())
          }, [
            we(b, { icon: ["fass", "expand"] }),
            qt(" " + re(I(V)("general.full_screen")), 1)
          ], 4)) : U("", !0),
          kt.value ? (w(), P("a", {
            key: 1,
            id: "credit",
            style: Ue,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, re(I(wo)(I(V)("general.powered_by"))), 1)) : U("", !0),
          A("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Pe({ "grid-template-columns": de.value })
          }, [
            I(a).inputShapes.value.length ? (w(), P("div", oc, [
              m[6] || (m[6] = A("div", { class: "cell id" }, null, -1)),
              (w(!0), P(ve, null, $e(D.value, (ee) => (w(), P("div", {
                key: ee.id,
                class: Se(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(ee.id) || ee.type === "checkbox" }])
              }, re(I(V)(ee.label)), 3))), 128)),
              I(B) === "development" ? (w(), P("div", lc, " Info ")) : U("", !0),
              m[7] || (m[7] = A("div", { class: "cell del" }, null, -1))
            ])) : U("", !0),
            (w(!0), P(ve, null, $e(I(a).inputShapes.value, (ee, ye) => (w(), P("div", {
              key: ye,
              class: "row inputs"
            }, [
              A("div", ac, [
                A("div", {
                  class: "id",
                  style: Pe({
                    background: j.colors.partA,
                    color: j.colors.text
                  })
                }, re(ye + 1), 5)
              ]),
              (w(!0), P(ve, null, $e(D.value, (z) => (w(), P("div", {
                key: z.fieldMap,
                class: "cell"
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(z.id) ? z.id === "orientationLock" ? (w(), ge(Oa, {
                  key: 1,
                  id: "orientation-" + ye,
                  rectangle: ee,
                  disabled: i.readonly,
                  "stock-grain": I(h)(ee),
                  style: Pe(me.value),
                  "orientation-model": j.orientationModel,
                  onUpdateOrientation: (mt) => ut(ee, mt)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "style", "orientation-model", "onUpdateOrientation"])) : z.id === "banding" ? (w(), ge(Fa, {
                  key: 2,
                  id: "banding-" + ye,
                  "input-shape": ee,
                  disabled: i.readonly,
                  "stock-grain": I(h)(ee),
                  open: Ne.banding === ye,
                  "orientation-model": j.orientationModel,
                  onClicked: (mt) => Ii("banding", ee)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : z.id === "finish" ? (w(), ge(uu, {
                  key: 3,
                  id: "finish-" + ye,
                  "input-shape": ee,
                  disabled: i.readonly,
                  style: Pe(me.value),
                  open: Ne.finish === ye,
                  onClicked: (mt) => Ii("finish", ee)
                }, null, 8, ["id", "input-shape", "disabled", "style", "open", "onClicked"])) : z.fieldMap === "machining" && Ge.value ? (w(), ge(fu, {
                  key: 4,
                  id: "machining-" + ye,
                  disabled: i.readonly,
                  style: Pe(me.value),
                  "input-shape": ee,
                  onOpen: (mt) => vr(ee)
                }, null, 8, ["id", "disabled", "style", "input-shape", "onOpen"])) : z.fieldMap === "imageUpload" ? (w(), P("button", {
                  key: 5,
                  id: "image-upload-" + ye,
                  type: "button",
                  disabled: i.readonly,
                  class: Se({ selected: Ne.info === ye }),
                  onClick: (mt) => Ii("imageUpload", ee)
                }, [
                  we(b, { icon: ["fass", "image"] })
                ], 10, uc)) : U("", !0) : (w(), ge($t, {
                  key: 0,
                  id: z.id + "-" + ye,
                  focus: !i.readonly && j.enable.focus && ye === I(a).inputShapes.value.length - 1 && z.id === "l",
                  issue: I(Ks)(ee, [z.fieldMap]),
                  warning: I(Ks)(ee, [z.fieldMap], !0),
                  type: z.type,
                  output: z.output,
                  label: z != null && z.label ? I(V)(z.label) : null,
                  placeholder: z != null && z.placeholder ? I(V)(z.placeholder) : null,
                  "enable-label": !1,
                  "number-format": j.numberFormat,
                  readonly: i.readonly,
                  required: (z == null ? void 0 : z.required) ?? !1,
                  "allow-zero": (z == null ? void 0 : z.allowZero) ?? !0,
                  options: z.id === "t" ? Sr(ee) : z == null ? void 0 : z.options,
                  "true-value": z == null ? void 0 : z.trueValue,
                  "false-value": z == null ? void 0 : z.falseValue,
                  default: z == null ? void 0 : z.default,
                  min: typeof (z == null ? void 0 : z.min) == "number" ? z.min : null,
                  max: typeof (z == null ? void 0 : z.max) == "number" ? z.max : null,
                  custom: z == null ? void 0 : z.custom,
                  value: I(Pt)(ee, z == null ? void 0 : z.fieldMap),
                  text: {
                    delete: I(os)(I(V)("actions.delete")),
                    select: I(os)(I(V)("actions.select"))
                  },
                  onValidation: (mt, Fr) => Ji(mt, Fr, ee, [z.fieldMap]),
                  "onUpdate:value": (mt) => {
                    z.fieldMap && I(sr)(ee, z.fieldMap, mt);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ]))), 128)),
              I(B) === "development" ? (w(), P("div", cc, [
                A("button", {
                  class: Se(["c-btn", { selected: Ne.info === ye }]),
                  style: Pe(me.value),
                  type: "button",
                  onClick: (z) => Ii("info", ee)
                }, " i ", 14, hc)
              ])) : U("", !0),
              A("div", dc, [
                A("button", {
                  disabled: I(a).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${I(V)("actions.remove")} ${I(rs)(I(V)("woodwork.part"))}`,
                  onClick: (z) => I(p)(ee.listId)
                }, [
                  we(b, { icon: ["fass", "trash"] })
                ], 8, fc)
              ]),
              we(I(n), {
                item: ee,
                "num-columns": Z.value
              }, null, 8, ["item", "num-columns"]),
              Ne.banding === ye && be.options.length > 0 ? (w(), ge(fs, {
                key: 1,
                shape: ee,
                "shape-index": ye,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": I(qe),
                "part-columns": Z.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": j.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Ms,
                onSet: Fs
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : U("", !0),
              Ne.finish === ye && Ee.options.length > 0 ? (w(), ge(fs, {
                key: 2,
                shape: ee,
                "shape-index": ye,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ee.keys,
                "all-options": Ee.options,
                pricing: Ee.pricing,
                labels: Ee.labels,
                "user-friendly-field-map": I(qe),
                "part-columns": Z.value,
                "get-price": Ci,
                "format-price": i.formatPrice,
                "orientation-model": j.orientationModel,
                "get-available-pricing-options": ki,
                onUpdateAll: Ms,
                onSet: Fs
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : U("", !0),
              Ne.info === ye ? (w(), P("div", {
                key: 3,
                id: "shape-info",
                style: Pe({ "grid-column-end": "span " + Z.value })
              }, [
                we(I(l), {
                  data: [ee == null ? void 0 : ee.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : U("", !0),
              Ne.imageUpload === ye ? (w(), ge(Su, {
                key: 4,
                prefix: (ye + 1).toString(),
                "unique-id": I(pt),
                "shape-id": ee.listId,
                style: Pe({ "grid-column-end": "span " + Z.value }),
                images: je.value,
                onUpdate: Dr,
                onRemove: Tr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : U("", !0)
            ]))), 128))
          ], 4),
          A("div", pc, [
            i.readonly ? U("", !0) : (w(), P("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${I(V)("actions.add")} ${I(V)("woodwork.part")}`,
              style: Pe({ background: j.colors.button, color: j.colors.buttonText }),
              onClick: m[2] || (m[2] = (ee) => Bs(1))
            }, [
              we(b, { icon: ["fass", "plus-large"] }),
              qt(" " + re(`${I(V)("actions.add")} ${I(V)("woodwork.part")}`), 1)
            ], 12, gc)),
            A("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": I(V)("actions.calculate"),
              style: Pe(me.value),
              disabled: !((H = I(a).inputStock.value) != null && H.length) || Ke.value,
              onClick: m[3] || (m[3] = (ee) => Ar())
            }, [
              we(b, { icon: ["fass", "calculator"] }),
              qt(re(I(V)("actions.calculate")), 1)
            ], 12, mc),
            i.readonly ? U("", !0) : (w(), P("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": I(V)("actions.clear"),
              onClick: m[4] || (m[4] = (ee) => Qi())
            }, [
              we(b, { icon: ["fass", "trash"] })
            ], 8, yc)),
            A("div", vc, re(I(c)) + re(j != null && j.maxParts ? "/" + j.maxParts : ""), 1)
          ]),
          se.value && !i.readonly ? (w(), ge(I(o), {
            key: 2,
            ref: "import",
            "number-format": j.numberFormat,
            "custom-fields": Vt.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": Ee.options,
            "finish-labels": Ee.labels,
            onImport: Or
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : U("", !0),
          bi.value ? (w(), P("div", bc, [
            si.value ? (w(), P("div", wc, re(si.value), 1)) : U("", !0),
            A("pre", Sc, re(wi.value), 1)
          ])) : U("", !0),
          (j.enable.diagram ? Ke.value && !I(J).complete : Ke.value || I(J).complete) ? (w(), P("div", xc, [
            we(on, {
              size: 50,
              number: I(J).shapeCount,
              complete: I(J).complete,
              "show-number": j.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : U("", !0),
          gs(A("div", kc, [
            ((ue = (X = I(_)) == null ? void 0 : X.saw) == null ? void 0 : ue.stockType) !== "roll" ? (w(), P("div", Cc, re((ce = I(_)) != null && ce.stack ? (G = I(_)) == null ? void 0 : G.stack : 1), 1)) : U("", !0),
            we(nc, {
              "element-id": "diagram",
              "number-format": j.numberFormat,
              "decimal-places": j.decimalPlaces,
              colors: j.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [ms, j.enable.diagram && I(J).complete]
          ]),
          j.enable.diagram && I(R).length > 1 && I(J).complete ? (w(), ge(ya, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": I(M),
            "stock-list": I(R),
            onShowStock: I(W)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : U("", !0)
        ], 2)) : U("", !0)
      ], 64);
    };
  }
}), Uh = /* @__PURE__ */ ti(Pc, [["__scopeId", "data-v-6c39d4e1"]]), Lc = {
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
}, Dc = { class: "smartcut-object-viewer" }, Tc = ["onClick"], $c = { class: "toggle-icon" }, Ac = { class: "path-label" }, Ec = {
  key: 0,
  class: "object-properties"
}, Oc = { class: "key" };
function Rc(i, e, t, s, n, r) {
  return w(), P("div", Dc, [
    (w(!0), P(ve, null, $e(t.data, (o, l) => (w(), P("div", {
      key: l,
      class: "array-item"
    }, [
      A("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        A("div", $c, re(n.expanded[l] ? "▼" : "▶"), 1),
        A("div", Ac, re(t.paths[l] || l), 1)
      ], 8, Tc),
      n.expanded[l] ? (w(), P("div", Ec, [
        (w(!0), P(ve, null, $e(o, (a, c) => (w(), P("div", {
          key: c,
          class: "property-item"
        }, [
          A("div", Oc, re(c) + ": ", 1),
          A("div", {
            class: Se(["value", r.getValueType(a)])
          }, re(r.formatValue(a)), 3)
        ]))), 128))
      ])) : U("", !0)
    ]))), 128))
  ]);
}
const Fc = /* @__PURE__ */ ti(Lc, [["render", Rc]]), Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Fc }, Symbol.toStringTag, { value: "Module" })), Mc = ["data-placement"], _c = /* @__PURE__ */ Ae({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const e = i, t = Y(null), s = Y(null), n = Y(!0);
    let r = null, o = null;
    const l = () => {
      if (!e.referenceEl) {
        n.value = !1;
        return;
      }
      const M = window.getComputedStyle(e.referenceEl), _ = M.display !== "none", W = M.visibility !== "hidden", J = parseFloat(M.opacity) > 0, k = e.referenceEl.getBoundingClientRect(), C = k.width > 0 && k.height > 0, T = k.top < window.innerHeight && k.bottom > 0 && k.left < window.innerWidth && k.right > 0, K = !a(e.referenceEl);
      n.value = _ && W && J && C && T && K;
    }, a = (M) => {
      const _ = M.getBoundingClientRect();
      let W = M.parentElement;
      for (; W && W !== document.body; ) {
        const J = window.getComputedStyle(W);
        if (J.overflow === "hidden" || J.overflowX === "hidden" || J.overflowY === "hidden") {
          const k = W.getBoundingClientRect();
          if (_.right < k.left || _.left > k.right || _.bottom < k.top || _.top > k.bottom)
            return !0;
        }
        W = W.parentElement;
      }
      return !1;
    }, c = () => {
      if (!e.referenceEl) return;
      r = new IntersectionObserver(
        (_) => {
          _.forEach((W) => {
            W.target === e.referenceEl && l();
          });
        },
        {
          root: null,
          threshold: 0
        }
      ), r.observe(e.referenceEl), o = new MutationObserver((_) => {
        _.forEach((W) => {
          W.type === "attributes" && (W.attributeName === "style" || W.attributeName === "class" || W.attributeName === "hidden") && l();
        });
      }), o.observe(e.referenceEl, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
      let M = e.referenceEl.parentElement;
      for (; M && M !== document.body; )
        o.observe(M, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }), M = M.parentElement;
    }, h = () => {
      r && (r.disconnect(), r = null), o && (o.disconnect(), o = null);
    };
    Ie([() => e.referenceEl, () => e.show], ([M, _], [W]) => {
      W !== M && h(), _ && M ? (l(), c()) : h();
    }, { immediate: !0 });
    const y = () => {
      e.show && e.referenceEl && l();
    };
    at(() => {
      window.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("resize", y, { passive: !0 });
    }), yi(() => {
      h(), window.removeEventListener("scroll", y), window.removeEventListener("resize", y);
    });
    const d = ne(() => ({
      getBoundingClientRect: () => {
        var M;
        return ((M = e.referenceEl) == null ? void 0 : M.getBoundingClientRect()) || new DOMRect();
      }
    })), p = [
      Gr(8),
      Nr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      Wr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      to({ element: s })
    ], { floatingStyles: g, middlewareData: x, placement: R } = Qr(
      d,
      t,
      {
        placement: "top",
        middleware: p,
        whileElementsMounted: (M, _, W) => jr(
          M,
          _,
          W,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), v = ne(() => ({
      position: g.value.position,
      top: g.value.top,
      left: g.value.left,
      transform: g.value.transform,
      zIndex: "1000"
    })), O = ne(() => {
      if (!x.value.arrow) return {};
      const { x: M, y: _ } = x.value.arrow, W = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[R.value.split("-")[0]] || "top";
      return {
        left: M != null ? `${M}px` : void 0,
        top: _ != null ? `${_}px` : void 0,
        [W]: "-4px"
      };
    });
    return (M, _) => (w(), ge(vs, { to: "body" }, [
      we(eo, { name: "fade" }, {
        default: ys(() => [
          M.show && M.referenceEl && n.value ? (w(), P("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: t,
            class: Se(["smartcut-tooltip", M.type]),
            style: Pe(v.value),
            "data-placement": I(R)
          }, [
            qt(re(M.content) + " ", 1),
            A("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: Pe(O.value)
            }, null, 4)
          ], 14, Mc)) : U("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: _c }, Symbol.toStringTag, { value: "Module" })), Bc = /* @__PURE__ */ Ae({
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
      return w(), P(ve, null, [
        (r = (n = e.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (w(), P("div", {
          key: 0,
          class: "group issues",
          style: Pe({
            "grid-column-end": "span " + e.numColumns
          })
        }, [
          A("pre", null, re(e.item.issues.filter((a) => a.type === "error").flatMap((a) => I(Jt)(a.message)).join(`
`)), 1)
        ], 4)) : U("", !0),
        (l = (o = e.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (w(), P("div", {
          key: 1,
          class: "group warnings",
          style: Pe({
            "grid-column-end": "span " + e.numColumns
          })
        }, [
          A("pre", null, re(e.item.issues.filter((a) => a.type === "warning").flatMap((a) => I(Jt)(a.message)).join(`
`)), 1)
        ], 4)) : U("", !0)
      ], 64);
    };
  }
}), Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Bc }, Symbol.toStringTag, { value: "Module" })), ze = {
  precisionFixed: vo,
  format: yo,
  select: _e,
  selectAll: An,
  scaleLinear: nt,
  scaleSequential: ui,
  axisTop: Tn,
  axisBottom: Mi,
  axisRight: $n,
  axisLeft: _i,
  symbol: mo,
  path: go,
  arc: po,
  symbolTriangle: fo,
  symbolSquare: ho
};
class jc {
  constructor({
    HTMLElement: e,
    vueComponent: t = null,
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
    // Padding values - responsive based on size
    u(this, "edgePadding", 15);
    // For left and bottom when axes shown
    u(this, "axisPadding", 30);
    // For top and right when axes shown
    u(this, "minSizeForAxes", 400);
    // Minimum width/height to show axes
    u(this, "xScale", ze.scaleLinear());
    u(this, "yScale", ze.scaleLinear());
    u(this, "yScaleFlipped", ze.scaleLinear());
    u(this, "measurementScale", ze.scaleLinear());
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
    this.HTMLElement = e, this.numberFormat = n, this.decimalPlaces = r, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = t, this.shape = s, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = ze.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = ze.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = ze.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), t = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, r = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (t + n) < 0 || this.h - (r + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${r})`).attr("class", "axis x"), this.xAxis.call(
      ze.axisTop(this.xScale).ticks(10).tickSize(-this.h + (r + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(o, l, a) {
      (l === 0 || l === a.length - 1) && ze.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      ze.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (t + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, l, a) {
      (l === 0 || l === a.length - 1) && ze.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, t) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(t)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), t = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, r = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", t).attr("y", r).attr("width", this.w - (t + n)).attr("height", this.h - (r + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", t).attr("y", r).attr("width", this.w - (t + n)).attr("height", this.h - (r + s)).style("fill", "url(#stripes)");
    const o = ze.path(), l = this.shape.machining.corners, a = [], c = [];
    [0, 1, 2, 3].forEach((y) => {
      const d = l[y];
      d && d.type ? (a.push(d.size ? S({ v: d.size ?? 0, o: this }) : 0), c.push(d.type)) : (a.push(0), c.push(null));
    });
    const h = (y, d, p, g, x) => {
      c[y] === "radius" ? o.arcTo(
        this.xScale(d),
        this.getYScale()(p),
        this.xScale(g),
        this.getYScale()(x),
        this.measurementScale(a[y])
      ) : c[y] === "bevel" ? o.lineTo(this.xScale(g), this.getYScale()(x)) : (o.lineTo(this.xScale(d), this.getYScale()(p)), o.lineTo(this.xScale(g), this.getYScale()(x)));
    };
    o.moveTo(this.xScale(0), this.getYScale()(a[0])), h(0, 0, 0, a[0], 0), (c[0] === "bevel" || c[1] === "bevel") && o.lineTo(this.xScale(this.shapeL - a[1]), this.getYScale()(0)), h(1, this.shapeL, 0, this.shapeL, a[1]), (c[1] === "bevel" || c[2] === "bevel") && o.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - a[2])
    ), h(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - a[2],
      this.shapeW
    ), (c[2] === "bevel" || c[3] === "bevel") && o.lineTo(this.xScale(a[3]), this.getYScale()(this.shapeW)), h(3, 0, this.shapeW, 0, this.shapeW - a[3]), o.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", o.toString());
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
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("circle").data(
      this.shape.machining.holes.filter((e) => e.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (e) => e.valid === !1).classed("partial", (e) => !e.isThroughShape(this.shape)).attr("cx", (e) => this.xScale(e.x)).attr("cy", (e) => {
      const t = e.getYDrawPosition(this.shape, this.currentSide);
      return this.getYScale()(t);
    }).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const t = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("circle").data(t).join("circle").attr("class", "hole").classed("invalid", (s) => s.valid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => this.getYScale()(s.getYDrawPosition(this.shape, this.currentSide))).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const e = this.shape.banding, t = -1, s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, r = s ? this.axisPadding : 0, o = [];
    for (const a of wt)
      if (e[a])
        switch (a) {
          case "x1":
            o.push({
              x1: n - t,
              x2: n - t,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            o.push({
              x1: this.w - r + t,
              x2: this.w - r + t,
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
              y1: this.getYScale()(0) + (this.currentSide === 0 ? t : 1),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? t : 1)
            });
            break;
          case "y2":
            o.push({
              x1: n + this.getCornerBandingSize(3),
              x2: this.w - r - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : t),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : t)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(o).join("line").attr("class", "banding").attr("x1", (a) => a.x1).attr("x2", (a) => a.x2).attr("y1", (a) => a.y1).attr("y2", (a) => a.y2).attr("stroke-width", this.bandingStrokeWidth);
    const l = ze.path();
    this.shape.machining.corners.forEach((a, c) => {
      if (!a.type) return;
      let h, y, d;
      switch (c) {
        case 0:
          if (!N(e.a) || e.a === !1) return;
          h = {
            x: this.xScale(0) - t,
            y: this.getYScale()(S({ v: a.size ?? 0, o: this }))
          }, y = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, d = {
            x: this.xScale(S({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? t : 1)
          };
          break;
        case 1:
          if (!N(e.b) || e.b === !1) return;
          h = {
            x: this.xScale(this.shapeL - S({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? t : 1)
          }, y = {
            x: this.xScale(this.shapeL) - t,
            y: this.getYScale()(0)
          }, d = {
            x: this.xScale(this.shapeL) + t,
            y: this.getYScale()(S({ v: a.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!N(e.c) || e.c === !1) return;
          h = {
            x: this.xScale(this.shapeL) + t,
            y: this.getYScale()(this.shapeW - S({ v: a.size ?? 0, o: this }))
          }, y = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, d = {
            x: this.xScale(this.shapeL - S({ v: a.size ?? 0, o: this })) - t,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? t : 1)
          };
          break;
        case 3:
          if (!N(e.d) || e.d === !1) return;
          h = {
            x: this.xScale(S({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? t : 1)
          }, y = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, d = {
            x: this.xScale(0) - t,
            y: this.getYScale()(this.shapeW - S({ v: a.size ?? 0, o: this })) + t
          };
          break;
        default:
          return;
      }
      if (l.moveTo(h.x, h.y), a.type === "radius")
        switch (l.arcTo(
          y.x,
          y.y,
          d.x,
          d.y,
          this.measurementScale(a.size ?? 0)
        ), c) {
          case 0:
          case 2:
            l.lineTo(d.x + t, d.y);
            break;
          case 1:
          case 3:
            l.lineTo(d.x, d.y - (this.currentSide === 0 ? t : -1));
            break;
        }
      else a.type === "bevel" && l.lineTo(d.x, d.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][c]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", l.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    this.svgCanvas && this.svgCanvas.selectAll("*").remove();
  }
  shouldShowAxes() {
    return this.w >= this.minSizeForAxes;
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0;
    const e = this.shouldShowAxes(), t = e ? this.edgePadding : 0, s = e ? this.axisPadding : 0;
    if (e && this.yAxis) {
      const n = this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
      this.yAxis.call(
        ze.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (t + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(r, o, l) {
        (o === 0 || o === l.length - 1) && ze.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(e) {
    return this.shape.machining.corners[e].type ? this.measurementScale(this.shape.machining.corners[e].size ?? 0) : 0;
  }
  updateSize() {
    if (this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let e = this.shape.getShortSide() / this.shape.getLongSide();
    this.w = this.HTMLElementWidth;
    const t = this.shouldShowAxes(), s = t ? this.edgePadding : 0, n = t ? this.edgePadding : 0, r = t ? this.axisPadding : 0, o = t ? this.axisPadding : 0;
    if (this.w - (s + r) < 0) return;
    let l = window.innerHeight - (o + n) - 20;
    l > 600 && (l = 600), this.xScale.domain([0, this.shapeL]).range([s, this.w - r]), e > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + o : (e = 0.3, this.h = this.w * e), this.h > l && (this.h = l, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([s, this.w - r])), this.yScale.domain([this.shapeW, 0]).range([o, this.h - n]), this.yScaleFlipped.domain([0, this.shapeW]).range([o, this.h - n]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (s + r)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const Gc = { id: "machining" }, Nc = { class: "inputs" }, Wc = {
  key: 0,
  class: "debug"
}, Vc = {
  key: 1,
  class: "shape-name"
}, Uc = { class: "shape-dimensions" }, zc = {
  key: 2,
  class: "sides-wrapper"
}, Yc = { class: "menu" }, Xc = {
  key: 4,
  class: "button-wrapper"
}, Kc = { class: "grid-table" }, Zc = { class: "row table-heading" }, Jc = {
  key: 0,
  class: "cell id"
}, Qc = {
  key: 0,
  class: "cell"
}, eh = { class: "id" }, th = { class: "cell" }, ih = ["onClick"], sh = {
  key: 6,
  class: "menu-prompt"
}, nh = !1, rh = /* @__PURE__ */ Ae({
  __name: "Machining",
  props: /* @__PURE__ */ Ws({
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
  emits: /* @__PURE__ */ Ws(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: e }) {
    var bi, si, wi, Ne, Ve, Be, Ot, Ze, be, Ee, ni, Vt, Si;
    const t = Dt(() => Promise.resolve().then(() => Zi)), s = i, n = e, r = "production", o = Y(), l = ne(() => Cs(F.value)), a = ne(() => {
      var Z;
      if (!((Z = y.value) != null && Z.length)) return 0;
      if (oe.value === "banding") return 1;
      let D = Object.values(h.value).filter((de) => de.enabled).length;
      return D += 2, D;
    }), c = ne(() => {
      if (!y.value.length || oe.value === "banding") return;
      const D = {
        id: "34px",
        del: "30px"
      }, Z = [];
      return y.value.forEach((de) => {
        const me = h.value[de];
        me.enabled && Z.push(me.w ?? "1fr");
      }), Z.unshift(D.id), Z.push(D.del), Z.join(" ");
    }), h = ne(() => !oe.value || oe.value === "banding" ? null : gt[oe.value]), y = ne(() => !oe.value || oe.value === "banding" ? [] : Object.keys(gt[oe.value]).filter((D) => gt[oe.value][D].enabled)), d = ne(() => oe.value ? M() : []), p = ne(() => {
      var Z, de, me, Je;
      const D = ((Je = (me = (de = (Z = F.value) == null ? void 0 : Z.machining) == null ? void 0 : de.corners) == null ? void 0 : me.map((Ue) => {
        var kt;
        return (kt = Ue == null ? void 0 : Ue.isPresent) != null && kt.call(Ue) ? Ue.getCorner() : null;
      })) == null ? void 0 : Je.filter((Ue) => Ue)) ?? [];
      return [...wt, ...D];
    }), g = (D = !0) => {
      D ? se.value = D : ot(() => se.value = !1);
    }, x = () => {
      $(), te(), q(), E();
    }, R = (D) => {
      if (oe.value === "corners")
        switch (D) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return D;
        }
      return D + 1;
    }, v = () => oe.value !== "banding", O = (D, Z = null) => {
      if (!(D != null && D.length)) return [];
      let de = "None";
      Z === "depth" && (de = "Through");
      const me = [{ label: de, value: null }];
      return D.forEach((Je) => {
        const Ue = Je.toString().charAt(0).toUpperCase() + Je.toString().slice(1);
        me.push({ label: Ue, value: Je });
      }), me;
    }, M = () => {
      if (!oe.value) return [];
      if (oe.value === "banding") return [];
      const D = F.value.machining[oe.value];
      return Array.isArray(D) ? D : [D];
    };
    let _ = null;
    const W = () => {
      if (!F.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), _ = new jc({
        HTMLElement: o.value,
        shape: F.value,
        vueComponent: null
      }), _.init(), _.updateSize(), ii.value = !0;
    }, J = so(() => {
      ii.value && _ && _.updateSize();
    }, 10);
    Ln(o, () => {
      J();
    });
    const k = () => {
      Ge.value = Ge.value === 0 ? 1 : 0, _.flip();
    }, C = () => {
      switch (oe.value) {
        case "holes":
          T();
          break;
        case "hingeHoles":
          K();
          break;
      }
    }, T = () => {
      F.value.machining.createHole(
        S({ v: F.value.getLongSide() }) / 2,
        S({ v: F.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? S({ v: s.shape.t }) ?? 0,
        Ge.value
      ), _.createHoles();
    }, K = () => {
      F.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Ge.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), _.createHingeHoles();
    }, $ = () => {
      F.value.machining.holes.length = 0;
    }, te = () => {
      F.value.machining.hingeHoles.length = 0;
    }, q = () => {
      F.value.machining.corners.forEach((D) => {
        D.size = null, D.type = null;
      }), F.value.banding.a = !1, F.value.banding.b = !1, F.value.banding.c = !1, F.value.banding.d = !1;
    }, E = () => {
      F.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, B = (D) => {
      switch (oe.value) {
        case "holes":
          return F.value.machining.holes.splice(D, 1);
        case "hingeHoles":
          return F.value.machining.hingeHoles.splice(D, 1);
        case "corners":
          F.value.machining.corners[D].size = null, F.value.machining.corners[D].type = null;
          return;
      }
    }, Q = () => {
      switch (oe.value) {
        case "holes":
          return $();
        case "hingeHoles":
          return te();
        case "corners":
          return q();
      }
    }, ie = () => {
      var D;
      if (Re.value = [], !!s.options.banding.enabled) {
        g();
        for (const Z in F.value.banding)
          F.value.banding[Z] ? s.options.banding.enableTypes && ((D = s.options.banding.types) != null && D.length) && (F.value.banding[Z] || Re.value.push({
            index: Z,
            message: "Please select a type"
          })) : F.value.banding[Z] = "";
        g(!1);
      }
    }, ae = (D) => {
      const Z = Re.value.filter((de) => de.index === D);
      return Z.length ? Z.map((de) => de.message) : [];
    }, xe = (D) => {
      const Z = Re.value.filter((me) => me.index === D && (me == null ? void 0 : me.fields)), de = Z.flatMap((me) => me.fields);
      return Z.length ? de : [];
    }, Te = (D, Z) => {
      const de = xe(D);
      return de != null && de.length ? de.includes(Z) : !1;
    }, Oe = () => n("close"), pt = (D) => D && typeof D.disabled == "function" ? D.disabled : !1, je = (D, Z, de, me, Je) => {
      Es(D, Z, de, me, Je, s.findExtrasPrice);
    }, xt = (D, Z, de, me) => {
      lr(
        D,
        Z,
        de,
        me,
        [],
        s.findExtrasPrice
      );
    }, F = io(i, "shape");
    if (!((bi = F.value) != null && bi.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const Ke = Y(!1), ii = Y(!1), se = Y(!1), Ge = Y(0), oe = Y(null), Re = Y([]), gt = vt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: V("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: V("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: (si = s.options.holes.diameters) != null && si.length ? "select" : "unitDependent",
          label: V("machining.diameter"),
          output: (wi = s.options.holes.diameters) != null && wi.length ? "float" : void 0,
          options: (Ne = s.options.holes.diameters) != null && Ne.length ? O(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof F.value.t < "u" && S({ v: F.value.t }) > 0,
          required: !1,
          type: (Ve = s.options.holes.depths) != null && Ve.length ? "select" : "unitDependent",
          output: (Be = s.options.holes.depths) != null && Be.length ? "float" : void 0,
          options: (Ot = s.options.holes.depths) != null && Ot.length ? O(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: V("faces.a"),
              value: 0
            },
            {
              label: V("faces.a"),
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
          label: V("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: V("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: V("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof F.value.t < "u" && S({ v: F.value.t }) > 0,
          required: !1,
          type: (Ze = s.options.holes.depths) != null && Ze.length ? "select" : "unitDependent",
          output: (be = s.options.holes.depths) != null && be.length ? "float" : void 0,
          options: (Ee = s.options.holes.depths) != null && Ee.length ? O(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (ni = s.options.holes.diameters) != null && ni.length ? "select" : "unitDependent",
          label: V("machining.diameter"),
          output: (Vt = s.options.holes.diameters) != null && Vt.length ? "float" : void 0,
          options: (Si = s.options.holes.diameters) != null && Si.length ? O(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: V("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: V("faces.a"),
              value: 0
            },
            {
              label: V("faces.b"),
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
              label: V("sides.w1"),
              value: "x1"
            },
            {
              label: V("sides.w2"),
              value: "x2"
            },
            {
              label: V("sides.l1"),
              value: "y1"
            },
            {
              label: V("sides.l2"),
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
          label: V("machining.type"),
          type: "select",
          output: "string",
          options: O(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: V("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? S({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? S({ v: s.options.corners.maxValue, o: s.options }) : S({ v: F.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), j = vt({
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
    }), Fe = (D) => {
      D.target === D.currentTarget && Oe();
    }, Ye = () => {
      var D;
      return !(!((D = F == null ? void 0 : F.value) != null && D.machining) || !Ke.value || se.value);
    };
    return Ie(() => {
      var D;
      return (D = F.value) == null ? void 0 : D.listId;
    }, () => {
      Ye() && W();
    }), Ie(() => {
      var D;
      return (D = F.value) == null ? void 0 : D.id;
    }, () => {
      Ye() && W();
    }), Ie(oe, (D) => {
      if (Ye()) {
        if (D === "banding") {
          g(), ie(), g(!1);
          return;
        }
        if (!D) {
          Re.value = [];
          return;
        }
        g(), Re.value = F.value.machining.validate(
          F.value,
          D,
          j == null ? void 0 : j[D]
        ), D === "hingeHoles" && F.value.machining.hingeHoles.forEach((Z, de) => {
          Gi(Z, j == null ? void 0 : j.holes, Re.value, de);
        }), g(!1);
      }
    }, { deep: !0, immediate: !0 }), Ie(() => {
      var D, Z;
      return (Z = (D = F == null ? void 0 : F.value) == null ? void 0 : D.machining) == null ? void 0 : Z.holes;
    }, () => {
      Ye() && (g(), Re.value = F.value.machining.validate(
        F.value,
        "holes",
        j == null ? void 0 : j.holes
      ), _.createHoles(), g(!1));
    }, { deep: !0, immediate: !0 }), Ie(() => {
      var D, Z;
      return (Z = (D = F == null ? void 0 : F.value) == null ? void 0 : D.machining) == null ? void 0 : Z.hingeHoles;
    }, () => {
      Ye() && (g(), F.value.machining.updateHingeHoles(F.value), Re.value = F.value.machining.validate(
        F.value,
        "hingeHoles",
        j == null ? void 0 : j.hingeHoles
      ), F.value.machining.hingeHoles.forEach((D, Z) => {
        Gi(D, j == null ? void 0 : j.holes, Re.value, Z);
      }), _.createHingeHoles(), g(!1));
    }, { deep: !0, immediate: !0 }), Ie(() => {
      var D, Z;
      return (Z = (D = F == null ? void 0 : F.value) == null ? void 0 : D.machining) == null ? void 0 : Z.corners;
    }, () => {
      if (Ye()) {
        g(), Re.value = F.value.machining.validate(
          F.value,
          "corners",
          j == null ? void 0 : j.corners
        ), F.value.machining.validate(F.value, "holes"), F.value.machining.validate(F.value, "hingeHoles"), _.createShape(), _.createHoles(), _.createHingeHoles();
        for (const D of F.value.machining.corners)
          D.isPresent() || As(F.value, "banding", D.getCorner(), !0);
        _.createBanding(), g(!1);
      }
    }, { deep: !0, immediate: !0 }), Ie(() => {
      var D;
      return (D = F == null ? void 0 : F.value) == null ? void 0 : D.banding;
    }, () => {
      Ye() && (ie(), _.createBanding());
    }, { deep: !0, immediate: !0 }), at(() => {
      if (document.body.style.overflow = "hidden", !F.value || !F.value.l || !F.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      ot(() => W()), Ke.value = !0;
    }), yi(() => document.body.style.overflow = ""), (D, Z) => {
      var me, Je, Ue, kt, Rt;
      const de = Ht("FontAwesomeIcon");
      return w(), ge(vs, { to: "body" }, [
        A("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: Fe
        }, [
          A("div", Gc, [
            A("div", Nc, [
              I(r) === "development" && nh ? (w(), P("div", Wc, [
                we(I(t), {
                  data: [F.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : U("", !0),
              A("button", {
                class: "c-btn close",
                type: "button",
                onClick: Z[0] || (Z[0] = (tt) => Oe())
              }, "×"),
              (me = F.value) != null && me.name ? (w(), P("div", Vc, re(F.value.name), 1)) : U("", !0),
              A("div", Uc, re((Je = F.value) == null ? void 0 : Je.l) + " x " + re((Ue = F.value) == null ? void 0 : Ue.w) + " " + re((kt = F.value) != null && kt.t ? "x " + ((Rt = F.value) == null ? void 0 : Rt.t) : null), 1),
              D.options.faces.enabled ? (w(), P("div", zc, [
                A("div", {
                  ref: "sides",
                  class: Se(["sides", { flipped: Ge.value === 1 }]),
                  onClick: k
                }, Z[5] || (Z[5] = [
                  A("div", { class: "side-a" }, " A ", -1),
                  A("div", { class: "side-b" }, " B ", -1)
                ]), 2),
                Z[6] || (Z[6] = A("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : U("", !0),
              l.value ? (w(), P("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: x
              }, " Delete all machining ")) : U("", !0),
              A("div", Yc, [
                D.options.holes.enabled ? (w(), P("div", {
                  key: 0,
                  class: Se({ selected: oe.value === "holes" }),
                  onClick: Z[1] || (Z[1] = (tt) => oe.value = "holes")
                }, " Holes ", 2)) : U("", !0),
                D.options.hingeHoles.enabled ? (w(), P("div", {
                  key: 1,
                  class: Se({ selected: oe.value === "hingeHoles" }),
                  onClick: Z[2] || (Z[2] = (tt) => oe.value = "hingeHoles")
                }, " Hinge holes ", 2)) : U("", !0),
                D.options.corners.enabled ? (w(), P("div", {
                  key: 2,
                  class: Se({ selected: oe.value === "corners" }),
                  onClick: Z[3] || (Z[3] = (tt) => oe.value = "corners")
                }, " Corners ", 2)) : U("", !0),
                D.options.banding.enabled ? (w(), P("div", {
                  key: 3,
                  class: Se({ selected: oe.value === "banding" }),
                  onClick: Z[4] || (Z[4] = (tt) => oe.value = "banding")
                }, " Banding ", 2)) : U("", !0)
              ]),
              oe.value === "holes" || oe.value === "hingeHoles" || oe.value && oe.value !== "banding" ? (w(), P("div", Xc, [
                oe.value === "holes" || oe.value === "hingeHoles" ? (w(), P("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: C
                }, " Create ")) : U("", !0),
                oe.value && oe.value !== "banding" ? (w(), P("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: Q
                }, " Delete all ")) : U("", !0)
              ])) : U("", !0),
              A("div", Kc, [
                oe.value === "banding" && F.value ? (w(), ge(fs, {
                  key: 0,
                  shape: F.value,
                  env: I(r),
                  "extra-type": "banding",
                  "extra-label": "banding",
                  "extra-keys": p.value,
                  labels: D.options.banding.labels,
                  "all-options": D.options.banding.options,
                  pricing: D.options.banding.pricing,
                  "user-friendly-field-map": I(qe),
                  "part-columns": 1,
                  translate: D.translate,
                  "orientation-model": 0,
                  "get-price": D.getExtrasPrice,
                  "format-price": D.formatPrice,
                  "get-available-pricing-options": D.getAvailablePricingOptions,
                  onSet: je,
                  onUpdateAll: xt
                }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : U("", !0)
              ]),
              oe.value !== "banding" && d.value.length ? (w(), P("div", {
                key: 5,
                class: Se(["grid-table", oe.value]),
                style: Pe({ "grid-template-columns": c.value })
              }, [
                A("div", Zc, [
                  v() ? (w(), P("div", Jc)) : U("", !0),
                  (w(!0), P(ve, null, $e(h.value, (tt, ut) => gs((w(), P("div", {
                    key: ut,
                    class: "cell"
                  }, re(tt.label ?? ut), 1)), [
                    [ms, tt.enabled]
                  ])), 128)),
                  Z[7] || (Z[7] = A("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), P(ve, null, $e(d.value, (tt, ut) => (w(), P("div", {
                  key: ut,
                  class: "row"
                }, [
                  v() ? (w(), P("div", Qc, [
                    A("div", eh, re(R(ut)), 1)
                  ])) : U("", !0),
                  (w(!0), P(ve, null, $e(y.value, (Le, Ft) => (w(), P("div", {
                    key: Ft,
                    class: "cell"
                  }, [
                    we($t, {
                      type: h.value[Le].type,
                      id: Le + "-" + Ft,
                      warning: Te(ut, Le),
                      "enable-label": !1,
                      placeholder: h.value[Le].label ?? Le,
                      disabled: pt(h.value[Le]),
                      value: I(Pt)(tt, Le),
                      output: h.value[Le].output,
                      options: h.value[Le].options,
                      "onUpdate:value": (Ji) => I(sr)(tt, Le, Ji)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  A("div", th, [
                    A("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (Le) => B(ut)
                    }, [
                      we(de, { icon: ["fass", "trash"] })
                    ], 8, ih)
                  ]),
                  (w(!0), P(ve, null, $e(ae(ut), (Le, Ft) => (w(), P("div", {
                    key: Ft,
                    class: "group validation",
                    style: Pe({ "grid-column-end": "span " + a.value })
                  }, re(Le), 5))), 128))
                ]))), 128))
              ], 6)) : oe.value ? U("", !0) : (w(), P("div", sh, "Please select from the menu above"))
            ]),
            A("div", {
              id: "machining-diagram",
              class: Se(["diagram", { flipped: Ge.value === 1 }]),
              ref_key: "diagramRef",
              ref: o
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: rh }, Symbol.toStringTag, { value: "Module" })), lh = {
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
      files: no([])
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
function ah(i, e, t, s, n, r) {
  return w(), P("div", {
    id: "drop",
    class: Se({ thinking: t.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = ro((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    A("div", null, re(t.thinking ? "Loading, please wait..." : t.label), 1)
  ], 34);
}
const uh = /* @__PURE__ */ ti(lh, [["render", ah]]), ch = { id: "import-file" }, hh = /* @__PURE__ */ Ae({
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
    const t = i, s = e, n = Y([]), r = Y([]), o = Y([]), l = Y([]), a = Y({}), c = Y([]), h = Y(!1), y = Y(null), d = Y(null), p = [
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
    ], g = ne(() => {
      const E = {};
      return n.value.forEach((B, Q) => {
        E[Q] = {};
        for (const [ie, ae] of Object.entries(B)) {
          if (!p.includes(ie)) continue;
          const xe = v(ie, ae);
          (xe === !0 || xe === !1) && (E[Q][ie] = xe);
        }
      }), E;
    }), x = ne(() => t.customFields.map((E) => E.label)), R = (E, B) => {
      if (B) {
        const Q = Object.keys(B), ie = [[]];
        Q.forEach((xe) => {
          const Te = B[xe], Oe = [];
          ie.forEach((pt) => {
            Te.forEach((je) => Oe.push([...pt, je]));
          }), ie.splice(0, ie.length, ...Oe);
        });
        const ae = /* @__PURE__ */ new Set();
        ie.forEach((xe) => ae.add(xe.join("|").toLowerCase())), E === "banding" ? y.value = ae : d.value = ae;
      }
    }, v = (E, B) => {
      if (B === "???") return !0;
      function Q(ae) {
        return ae ? (ae = ae.trim().toLowerCase(), ae === "l" || ae === "w") : !0;
      }
      const ie = {
        banding: (ae) => O(ae, y.value, "banding"),
        finish: (ae) => O(ae, d.value, "finish"),
        orientationLock: Q
      };
      return E in ie ? ie[E](B) : null;
    }, O = (E, B, Q) => {
      if (E = K(E), !E) return !0;
      const ie = E.split(","), ae = ie.every((xe) => !xe || B.has(xe.toLowerCase()));
      if (!ae) {
        const xe = ie.filter((Te) => !B.has(Te.toLowerCase()));
        console.log(`Valid ${Q} choices...`), console.table(Array.from(B)), console.log(`The following ${Q} choices are invalid`, xe);
      }
      return ae;
    }, M = (E, B) => {
      const Q = {
        bandingOptions: (ie) => _(ie, t.bandingOptions, t.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (ie) => _(ie, t.finishOptions, t.finishLabels, ["a", "b"])
      };
      return E in Q ? Q[E](B) : null;
    }, _ = (E, B, Q, ie) => {
      if (E = K(E), !E)
        return ie.reduce((Te, Oe) => ({ ...Te, [Oe]: {} }), {});
      const ae = E.split(",").map((Te) => Te.toLowerCase()), xe = {};
      return ie.forEach((Te, Oe) => {
        xe[Te] = {}, Object.keys(B).forEach((pt, je) => {
          var xt;
          xe[Te][Q[je]] = ((xt = ae[Oe]) == null ? void 0 : xt.split("|")[je]) || "";
        });
      }), xe;
    }, W = () => n.value.map((E, B) => ({
      l: t.numberFormat === "decimal" ? Fi(E.l) : E.l,
      w: t.numberFormat === "decimal" ? Fi(E.w) : E.w,
      t: t.numberFormat === "decimal" ? Fi(E.t) : E.t,
      q: E.q,
      orientationLock: E.orientationLock,
      name: E.name,
      material: E.material,
      bandingOptions: g.value[B].banding ? M("bandingOptions", E.banding) : null,
      finishOptions: g.value[B].finish ? M("finishOptions", E.finish) : null,
      numberFormat: t.numberFormat,
      customData: te(E)
    })), J = (E) => {
      var Q;
      const B = (Q = E == null ? void 0 : E[0]) == null ? void 0 : Q.data;
      B && Vr.parse(B, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (ie) => k(ie),
        error: () => s("error")
      });
    }, k = (E) => {
      r.value = E.data.filter((B) => B.some((Q) => Q)), o.value = r.value[0], a.value = {};
      for (let B = o.value.length; B--; ) {
        const Q = o.value[B], ie = C(Q);
        ie ? a.value[B] = ie : (a.value[B] = null, x.value.includes(Q) && (a.value[B] = "customData." + t.customFields.find((ae) => ae.label === Q).id));
      }
      T(), r.value.shift(), $(), q();
    }, C = (E) => {
      const B = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", V("l"), V("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", V("w"), V("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", V("t"), V("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", V("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", V("quantity"), V("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", V("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", V("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", V("banding")],
        finish: ["finish", "paint"]
      }, Q = Object.entries(B).reduce(
        (ie, [ae, xe]) => (xe.some((Te) => E && E.toLowerCase() === Te) && ie.push(ae), ie),
        []
      );
      return Q.length > 1 ? null : Q[0];
    }, T = () => {
      h.value = !1, l.value = Object.values(a.value).map((B) => !B || B === "N" ? null : p.includes(B) ? B : (h.value = !0, null));
      const E = l.value.filter((B, Q) => l.value.indexOf(B) !== Q);
      c.value = E.map((B) => l.value.reduce(
        (Q, ie, ae) => (ie && ie === B && Q.push(ae), Q),
        []
      ));
    }, K = (E) => E && E.replace(/\s*,\s*/g, ","), $ = () => {
      const E = r.value.map((B) => {
        const Q = {};
        return o.value.forEach((ie, ae) => {
          if (c.value.flat().includes(ae))
            return Q[a.value[ae]] = "???";
          Q[a.value[ae]] = B[ae];
        }), Q;
      });
      n.value = E;
    }, te = (E) => {
      let B = {};
      for (let Q in E)
        if (Q.startsWith("customData.")) {
          let ie = Q.slice(11);
          B[ie] = E[Q];
        }
      return B;
    }, q = () => {
      const E = W();
      E != null && E.length && s("import", E);
    };
    return at(() => {
      R("banding", t.bandingOptions), R("finish", t.finishOptions);
    }), (E, B) => (w(), P("div", ch, [
      we(uh, {
        label: I(V)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: J
      }, null, 8, ["label"])
    ]));
  }
}), dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: hh }, Symbol.toStringTag, { value: "Module" }));
class It extends Error {
  constructor(e, t) {
    super(e), this.code = t, this.name = "FormulaError";
  }
}
class Cn {
  constructor({ url: e = null, spec: t = null }) {
    u(this, "url");
    u(this, "spec");
    // Update the operations object to use the FormulaOperation type
    u(this, "operations", {
      add: (e, t) => e + t,
      subtract: (e, t) => e - t,
      multiply: (e, t) => e * t,
      divide: (e, t) => {
        if (t === 0) throw new It("Division by zero", "DIVISION_BY_ZERO");
        return e / t;
      },
      ">": (e, t) => e > t,
      "<": (e, t) => e < t,
      ">=": (e, t) => e >= t,
      "<=": (e, t) => e <= t,
      "==": (e, t) => e === t
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
      const l = this.evaluate(e.condition, t), a = this.evaluate(e.trueExpr, t), c = this.evaluate(e.falseExpr, t);
      return l ? a : c;
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
      const [c, h] = a.split(".");
      if (!e.nodes.has(a)) {
        const x = n[c];
        if (x)
          return h === "q" ? x.q : x[h];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const y = e.nodes.get(a);
      if (typeof y.formula == "number")
        return r.set(a, y.formula), y.formula;
      o.add(a);
      const d = e.edges.get(a) || /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
      for (const x of d)
        if (x.startsWith("input.")) {
          const R = x.split(".")[1];
          p.set(x, s[R]);
        } else
          p.set(x, l(x));
      const g = this.evaluateFormulaWithDeps(y.formula, p, s);
      return r.set(a, g), o.delete(a), g;
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
    if (!((t = this.spec) != null && t.inputs)) throw new It("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = e[s];
      if (r === void 0)
        throw new It(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new It(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new It("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (e.length !== t.length)
      throw new It(`Expected ${t.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of e) {
      const o = t[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new It(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new It(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
const fh = {
  key: 0,
  class: "debug"
}, ph = { id: "formula-pricing" }, gh = {
  key: 1,
  class: "extras"
}, mh = { class: "heading" }, yh = { id: "hardware-total" }, vh = { class: "heading panels" }, bh = !1, wh = /* @__PURE__ */ Ae({
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
    const t = Dt(() => Promise.resolve().then(() => Zi)), s = i, n = e, r = oo("calculator"), o = ne(() => r()), l = Y("production");
    let a = null;
    const c = Y(null), h = Y([]), y = Y(!1), d = Y(""), p = ne(() => {
      if (!y.value || !h.value.length || h.value.every((k) => k.value === null)) return null;
      const J = M();
      return ot(() => n("panel-result", J)), J;
    }), g = ne(() => {
      if (!o.value || !y.value || !h.value.length || h.value.every((k) => k.value === null)) return;
      const J = _();
      return ot(() => n("hardware-result", J, x.value)), J;
    }), x = ne(() => {
      if (g.value)
        return Object.values(g.value).reduce((J, k) => J + k.totalCost, 0);
    });
    Ie(p, (J) => {
      var K, $, te;
      if (!y.value || !J || !o.value || !((K = o.value) != null && K.inputShapes)) return;
      const k = (q) => q != null && q.name ? q.name.toLowerCase() : "", C = new Map(
        o.value.inputShapes.map((q) => [k(q), q])
      ), T = /* @__PURE__ */ new Set();
      for (const q of Object.values(p.value)) {
        if (!q.name) continue;
        const E = k(q), B = C.get(E), Q = {
          ...q,
          name: q.name.toUpperCase() || (B == null ? void 0 : B.name.toUpperCase()),
          material: (($ = q.material) == null ? void 0 : $.toUpperCase()) || ((te = B == null ? void 0 : B.material) == null ? void 0 : te.toUpperCase()),
          bandingOptions: q.bandingOptions || {},
          finishOptions: q.finishOptions || {},
          orientationLock: q.orientationLock || null,
          notes: d.value,
          readonly: !0
        }, ie = B || o.value.createInputShape(Q);
        if (B) {
          Object.assign(B, Q);
          for (const ae of ["banding", "finish"])
            o.value.initExtrasOptions(B, ae);
        } else
          o.value.inputShapes.push(ie);
        T.add(E);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (q) => T.has(k(q))
      );
    }, { immediate: !1 }), at(() => W());
    const R = (J) => {
      s.debug && console.log(J);
    }, v = () => {
      h.value = Object.values(c.value.inputs).map((J) => ({
        value: J.default ?? null
      })), console.log(h.value);
    }, O = (J, k) => {
      h.value[J] && (h.value[J].value = k);
    }, M = () => {
      try {
        return a.calculatePanelsFromFields(h.value);
      } catch (J) {
        return o.value.inputShapes.length = 0, console.error(J), null;
      }
    }, _ = () => {
      try {
        return a.calculateHardwareFromFields(h.value);
      } catch (J) {
        return console.error(J), null;
      }
    }, W = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (R(`SmartCut - Formula calculator init from url: ${s.url}`), a = new Cn({ url: s.url }), c.value = await a.getSpec()) : s.spec && (R("SmartCut - Formula calculator init with JSON"), a = new Cn({ spec: s.spec }), c.value = await a.getSpec()), v(), y.value = !0;
    };
    return (J, k) => {
      var C, T;
      return w(), P(ve, null, [
        l.value === "development" && bh ? (w(), P("div", fh, [
          k[1] || (k[1] = A("div", null, "Developer information", -1)),
          we(I(t), {
            data: [p.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        A("div", ph, [
          (C = c.value) != null && C.projectName ? (w(), ge($t, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: d.value,
            "onUpdate:value": k[0] || (k[0] = (K) => d.value = K)
          }, null, 8, ["value"])) : U("", !0),
          (w(!0), P(ve, null, $e((T = c.value) == null ? void 0 : T.inputs, (K, $, te) => {
            var q;
            return w(), ge($t, {
              id: "formula-field-" + te,
              key: te,
              type: K.type,
              label: K.label,
              placeholder: K.label,
              min: K.min ?? 0,
              max: K.max ?? null,
              default: K.default ?? 0,
              value: (q = h.value[te]) == null ? void 0 : q.value,
              "onUpdate:value": (E) => O(te, E)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          g.value ? (w(), P("div", gh, [
            A("div", mh, re(I(V)("Hardware")), 1),
            (w(!0), P(ve, null, $e(g.value, (K, $) => (w(), P("div", { key: $ }, re(K.name) + " x" + re(K.q) + " = " + re(i.formatPrice(K.totalCost)), 1))), 128)),
            A("div", yh, re(I(V)("Hardware total")) + " = " + re(i.formatPrice(x.value)), 1)
          ])) : U("", !0),
          A("div", vh, re(I(V)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: wh }, Symbol.toStringTag, { value: "Module" })), Sh = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, xh = { class: "content" }, kh = ["onClick"], Ch = ["innerHTML"], Ih = /* @__PURE__ */ Ae({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const e = i, { notices: t, dismissNotice: s } = bs(), n = Y({}), r = ne(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Ht("FontAwesomeIcon");
      return w(), ge(vs, { to: "body" }, [
        A("div", Sh, [
          we(lo, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Se(["notices-container", e.position])
          }, {
            default: ys(() => [
              (w(!0), P(ve, null, $e(I(t), (c) => (w(), P("div", {
                key: c.id,
                ref_for: !0,
                ref: (h) => {
                  h && (n.value[c.id] = h);
                },
                class: Se([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                A("div", xh, [
                  A("div", {
                    class: "message",
                    onClick: (h) => c.action()
                  }, re(c.message), 9, kh),
                  A("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, Ch)
                ]),
                c.persistent ? U("", !0) : (w(), ge(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (h) => I(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ih }, Symbol.toStringTag, { value: "Module" }));
export {
  xo as A,
  So as B,
  Uh as C,
  Vh as D,
  Eh as E,
  zh as F,
  Ps as I,
  Yh as N,
  Zi as O,
  Wt as S,
  ti as _,
  fi as a,
  le as b,
  St as c,
  Jt as d,
  Nh as e,
  Xl as f,
  jh as g,
  Et as h,
  Mh as i,
  _h as j,
  Bh as k,
  qh as l,
  Wh as m,
  Hh as n,
  ci as o,
  S as p,
  wt as q,
  Fh as r,
  Wo as s,
  Gh as t,
  Oh as u,
  bt as v,
  Pt as w,
  tn as x,
  Qt as y,
  V as z
};
