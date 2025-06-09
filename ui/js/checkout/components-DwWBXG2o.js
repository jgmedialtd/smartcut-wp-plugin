var Or = Object.defineProperty;
var Er = (i, t, e) => t in i ? Or(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var u = (i, t, e) => Er(i, typeof t != "symbol" ? t + "" : t, e);
import { F as ss, i as Rr, g as Pe, d as Oi, a as Tt, c as es, b as kn, e as Ws, f as Qe, v as ds, t as Mi, h as Mr, s as Fr, j as _r, o as qr, k as Br, l as jr, P as Hr } from "./vendor-BJAM8w7x.js";
import { i as Cn, B as Gr } from "./vendor-i18n-BWRGKi6w.js";
import { d as Ae, c as T, o as y, F as we, r as $e, n as xe, a as Se, b as O, w as fs, t as se, v as ps, e as W, f as Wr, g as N, h as te, i as Te, j as ft, k as nt, l as zi, m as ui, u as C, p as Kt, q as ye, s as Nr, x as gs, y as qt, z as ve, A as Ur, B as Pt, C as In, D as zr, E as Vr, G as Yr, H as vt, I as Xr, T as Kr, J as ms, K as Zr, L as Ns, M as Jr, N as Qr, O as eo, P as to, Q as io, R as so } from "./vendor-vue-BJVDXAuG.js";
import { u as Pn, a as vs, b as ys, c as no, d as ro, e as oo } from "./composables-CIHCMLpY.js";
import { a as Tn, b as Dn, l as it, c as Fi, d as _i, s as Fe, r as ht, e as ci, f as Ln, g as lo, h as ao, i as uo, p as co, S as ho, j as fo, k as po } from "./vendor-d3-B-JATA3m.js";
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
function Bt(i) {
  return !(!i || typeof i != "string");
}
function mo(i) {
  return !Bt(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function qi(i) {
  return !Bt(i) || !i || typeof i != "string" ? "" : i.toLowerCase();
}
function ns(i) {
  return Bt(i) ? i.trim().split(" ").map((t) => Jt(t)).join(" ") : "";
}
function Jt(i) {
  return Bt(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function bs(i) {
  return Bt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), i.trim()) : "";
}
function vo(i) {
  return Bt(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function yo(i, t = 100) {
  return Bt(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let $n = Cn;
function bo(i) {
  $n = i;
}
function Le(i, t) {
  const e = $n.t(i, { ...t });
  return !e || e === i ? i : Jt(e);
}
const wo = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CWg2r6so.js"), "../translation/cs.json": () => import("./cs-BJ577khK.js"), "../translation/da.json": () => import("./da-DcXXHTah.js"), "../translation/de.json": () => import("./de-B1DSgdbr.js"), "../translation/el.json": () => import("./el-CK0JeWVa.js"), "../translation/en.json": () => import("./en--bD3lewd.js"), "../translation/es.json": () => import("./es-0jRfDyH0.js"), "../translation/fi.json": () => import("./fi-Bh-mE0hH.js"), "../translation/fr.json": () => import("./fr-BlfOhz5C.js"), "../translation/hi.json": () => import("./hi-vHVKus0v.js"), "../translation/hr.json": () => import("./hr-BmY9zI0C.js"), "../translation/hu.json": () => import("./hu-Claa33FF.js"), "../translation/id.json": () => import("./id-CK9JHY0b.js"), "../translation/it.json": () => import("./it-D5qgf_le.js"), "../translation/ja.json": () => import("./ja-Bt5HJmim.js"), "../translation/ko.json": () => import("./ko-CDYU2Sa8.js"), "../translation/ms.json": () => import("./ms-De4OIjIh.js"), "../translation/nl.json": () => import("./nl-SbczVYQu.js"), "../translation/no.json": () => import("./no-DHkL1Ola.js"), "../translation/pl.json": () => import("./pl-FASph0eA.js"), "../translation/pt.json": () => import("./pt-D6nqGT4R.js"), "../translation/ro.json": () => import("./ro-BczQYqgT.js"), "../translation/ru.json": () => import("./ru-CUjEiu7b.js"), "../translation/sk.json": () => import("./sk-CvE6uKQD.js"), "../translation/sv.json": () => import("./sv-CA_nwt4d.js"), "../translation/th.json": () => import("./th-DmxwdYNb.js"), "../translation/tr.json": () => import("./tr-C8mjjUAx.js"), "../translation/uk.json": () => import("./uk-c6Oy6CBg.js"), "../translation/vi.json": () => import("./vi-BYAnfP0Q.js"), "../translation/zh.json": () => import("./zh-CVU3_ywQ.js") }), Bi = Object.keys(wo).map((i) => {
  const t = i.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return t ? t[1] : "";
}).filter((i) => i !== "");
Bi.length === 0 ? console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.") : console.log(`[i18n] Detected languages: ${Bi.join(", ")}`);
const Us = "en", Yt = Cn.createInstance();
function H(i, t) {
  if (!Yt.isInitialized) {
    const n = Array.isArray(i) ? i.join(", ") : String(i);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${n}. Returning key.`), n;
  }
  let e = Yt.t(i, t);
  const s = Array.isArray(i) ? i[0] : i;
  return e === s && (console.warn(`[i18n] Translation not found - Key: "${s}"`), console.trace()), e = typeof e == "string" ? e : String(e), Jt(e);
}
const Ii = {}, So = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (i, t, e) => {
    try {
      if (Ii[i]) {
        e(null, Ii[i]);
        return;
      }
      console.log(`[i18n] Attempting to load local module for language: ${i}`);
      const s = await go(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-CWg2r6so.js"), "../translation/cs.json": () => import("./cs-BJ577khK.js"), "../translation/da.json": () => import("./da-DcXXHTah.js"), "../translation/de.json": () => import("./de-B1DSgdbr.js"), "../translation/el.json": () => import("./el-CK0JeWVa.js"), "../translation/en.json": () => import("./en--bD3lewd.js"), "../translation/es.json": () => import("./es-0jRfDyH0.js"), "../translation/fi.json": () => import("./fi-Bh-mE0hH.js"), "../translation/fr.json": () => import("./fr-BlfOhz5C.js"), "../translation/hi.json": () => import("./hi-vHVKus0v.js"), "../translation/hr.json": () => import("./hr-BmY9zI0C.js"), "../translation/hu.json": () => import("./hu-Claa33FF.js"), "../translation/id.json": () => import("./id-CK9JHY0b.js"), "../translation/it.json": () => import("./it-D5qgf_le.js"), "../translation/ja.json": () => import("./ja-Bt5HJmim.js"), "../translation/ko.json": () => import("./ko-CDYU2Sa8.js"), "../translation/ms.json": () => import("./ms-De4OIjIh.js"), "../translation/nl.json": () => import("./nl-SbczVYQu.js"), "../translation/no.json": () => import("./no-DHkL1Ola.js"), "../translation/pl.json": () => import("./pl-FASph0eA.js"), "../translation/pt.json": () => import("./pt-D6nqGT4R.js"), "../translation/ro.json": () => import("./ro-BczQYqgT.js"), "../translation/ru.json": () => import("./ru-CUjEiu7b.js"), "../translation/sk.json": () => import("./sk-CvE6uKQD.js"), "../translation/sv.json": () => import("./sv-CA_nwt4d.js"), "../translation/th.json": () => import("./th-DmxwdYNb.js"), "../translation/tr.json": () => import("./tr-C8mjjUAx.js"), "../translation/uk.json": () => import("./uk-c6Oy6CBg.js"), "../translation/vi.json": () => import("./vi-BYAnfP0Q.js"), "../translation/zh.json": () => import("./zh-CVU3_ywQ.js") }), `../translation/${i}.json`, 3);
      Ii[i] = s.default, console.log(`[i18n] Successfully loaded and cached local module for language: ${i}`), e(null, Ii[i]);
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
    supportedLngs: Bi.length > 0 ? Bi : [Us],
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
}), Vt = 1e-10, ko = 10, Co = Number.MAX_SAFE_INTEGER, Io = 4294967295, We = (i) => typeof i == "number" && Number.isFinite(i), Ei = (i) => Array.isArray(i) && i.length > 0;
function li(i, t, e = Vt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Po = {
  greaterThan: (i, t, e = Vt) => !We(i) || !We(t) ? !1 : li(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Vt) => !We(i) || !We(t) ? !1 : li(i, t, e) >= 0,
  lessThan: (i, t, e = Vt) => !We(i) || !We(t) ? !1 : li(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Vt) => !We(i) || !We(t) ? !1 : li(i, t, e) <= 0,
  equalTo: (i, t, e = Vt) => !We(i) || !We(t) ? !1 : li(i, t, e) === 0
};
function To(i) {
  return We(i) ? Number.isInteger(i) ? i : Number(i.toFixed(ko)) : !1;
}
function Do(i) {
  if (!We(i) || i < 0 || i > Co)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Io + 1) * i);
}
function Lo(i, t) {
  if (!Ei(i))
    throw new Error("Invalid array parameter");
  if (!We(t) || t < 0 || t > i.length)
    throw new Error("Invalid size parameter");
  const e = i.slice(), s = i.length - t;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e.slice(s);
}
class Pi {
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
const de = {
  ...Po,
  isNumber: We,
  round: To,
  getRandom: Do,
  getRandomSample: Lo,
  calculateStandardDeviation: Pi.calculateStandardDeviation.bind(Pi),
  calculateCoefficientOfVariation: Pi.calculateCoefficientOfVariation.bind(Pi)
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
function x(i) {
  var o;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && ((o = i.o) == null ? void 0 : o.numberFormat) !== "fraction" ? null : "";
  const t = i.o ?? {}, e = i.nf ?? (t == null ? void 0 : t.numberFormat) ?? "decimal", s = i.dp ?? (t == null ? void 0 : t.decimalPlaces) ?? $o, n = i.pl ?? (t == null ? void 0 : t.parseLocale) ?? !1, r = i.fr ?? (t == null ? void 0 : t.fractionRoundTo) ?? Ao;
  try {
    const l = An(i.v, n);
    return l === null || l === "" ? e === "decimal" ? null : "" : e === "decimal" ? Oo(l, s) : Eo(l, r);
  } catch (l) {
    throw l instanceof ji ? l : new ji(
      `Failed to convert number format: "${i.v}" to ${e}. ${l.message}`
    );
  }
}
function Oo(i, t) {
  let e;
  if (typeof i == "number" ? e = i : e = new ss(i).valueOf(), typeof t == "number") {
    const s = Math.pow(10, t);
    return Math.round(e * s) / s;
  }
  return e;
}
function Eo(i, t) {
  const e = new ss(i);
  if (t > 0) {
    const s = e.mul(t), n = Math.round(s.valueOf());
    return new ss(n, t).toFraction(!0);
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
function Ri(i) {
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
      const c = l[1], f = l[2], g = l[3], h = ai[g];
      if (h)
        return `${c}${f} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${g}`);
    } else if (a) {
      const c = a[1] || "", f = a[2], g = ai[f];
      if (g)
        return `${c}${g}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (ws(e)) {
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
      const f = t ? Ri(e) : parseFloat(e);
      return f === null || isNaN(f) || !isFinite(f) ? null : f.toString();
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
          Object.prototype.hasOwnProperty.call(i[n], r) && (i[n][r] = x({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s }));
      else
        i[n] = x({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
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
const ge = (i, t, e) => t in i ? i[t] : (console.warn(Hi.missingProperty(String(t), e)), null), Ti = (i, t) => (e, s) => {
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
  LDIDA: Ti(
    ut([["l", "desc"]]),
    tt
  ),
  WDIDA: Ti(
    ut([["w", "desc"]]),
    tt
  ),
  // Area-based sorts
  AD: (i, t) => -zt(i, t),
  AA: zt,
  AAID: Ti(
    zt,
    tt
  ),
  ADID: Ti(
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
function qo(i, t, e) {
  return e ? !k(i.t) || !k(t.t) ? !1 : Je(i) ? de.equalTo(i.t, t.t) : i.t === t.t : !0;
}
function Bo(i, t, e) {
  return (e == null ? void 0 : e.stockType) !== "linear" || !Je(i) && !Ie(i) ? !0 : ls(i, 0, t) && de.equalTo(i.w, t.w) || ls(i, 1, t) && de.equalTo(i.l, t.w);
}
function jo(i, t, e, s = 0) {
  const n = Ie(i[0]), r = e.stockType;
  if (i.some((w) => k(w.stockLock) && w.stockLock.length)) return { stockList: t, shapeList: i, unusableShapes: [], unusableStock: [], newIssues: [] };
  n || (t = t.filter((w) => w.autoAdd === !0 || k(w.q) && w.q > 0));
  const l = t.some((w) => k(w.material)), a = t.some((w) => k(w.t)), c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), v = [];
  let P = s;
  for (const w of i) {
    w.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const Z = Ho(w, t, e, l, a), Y = w.stockMatch.fit, ce = w.stockMatch.material, ne = w.stockMatch.thickness, I = w.stockMatch.width, S = Y.some(Boolean), A = !l || ce.some(Boolean), V = !a || ne.some(Boolean), D = r === "linear" && I.some(Boolean);
    if (w.stockMatch.fit = S, w.stockMatch.material = A, w.stockMatch.thickness = V, w.stockMatch.width = D, !n && Z.length) {
      const F = Z.map((X) => X.getParentID());
      w.stockLock = F, F.forEach((X) => c.add(X));
    }
    if (!S) {
      f.add(w);
      const F = new le({
        item: w,
        field: [["l"], ["w"]],
        index: [P],
        message: "errors.validation.will_not_fit"
      });
      v.push(F);
    }
    if (l && !A) {
      h.add(w);
      const F = new le({
        item: w,
        field: [["material"]],
        index: [P],
        message: "errors.validation.no_matching_stock_material"
      });
      v.push(F);
    }
    if (a && !V) {
      p.add(w);
      const F = new le({
        item: w,
        field: [["t"]],
        index: [P],
        message: "errors.validation.no_matching_stock_thickness"
      });
      v.push(F);
    }
    if (r === "linear" && S && !D) {
      g.add(w);
      const F = new le({
        item: w,
        field: [["w"]],
        index: [P],
        message: "errors.validation.no_matching_stock_width"
      });
      v.push(F);
    }
    P++;
  }
  i.forEach((w) => {
    w.stockMatch = null;
  });
  let q, E;
  return n ? (q = i.filter((w) => f.has(w) || g.has(w) || l && h.has(w) || a && p.has(w)).sort(hi.ID), E = []) : (q = i.filter((w) => f.has(w) || g.has(w) || !w.stockLock || !w.stockLock.length || // Include shapes that fail material/thickness when those constraints are active
  l && h.has(w) || a && p.has(w)).sort(hi.ID), E = t.filter((w) => !c.has(w.parentID)).sort(hi.ID), t = t.filter((w) => et(w)).filter((w) => c.has(w.parentID)), i = i.filter((w) => {
    var Z;
    return !f.has(w) && !g.has(w) && (!l || !h.has(w)) && (!a || !p.has(w)) && ((Z = w == null ? void 0 : w.stockLock) == null ? void 0 : Z.length);
  })), {
    stockList: t,
    unusableStock: E,
    shapeList: i,
    unusableShapes: q,
    newIssues: v
  };
}
function Ho(i, t, e, s = !1, n = !1) {
  return t.filter((r, o) => {
    const l = {
      fit: Fo(i) && Vi(i, r, void 0, e),
      material: _o(i, r, s),
      thickness: qo(i, r, n),
      width: Bo(i, r, e)
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
    this.message = c ? Le(e) : e, this.field = s.map((g) => [...g]), this.index = n ? [...n] : [], this.listId = r ? [...r] : [], this.type = l, this.identifier = this.determineIdentifier(t, this.index), this.addToItemIssues(t), Array.isArray(o) && o.push(this);
    const f = `issue created for ${Vl(t)}: ${this.identifier || "N/A"} - ${this.field.map((g) => g.join(".")).join(", ")}`;
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
function On(i) {
  return No(i, "issues") && Array.isArray(i.issues);
}
function Xs(i, t, e = !1) {
  var r;
  if (!On(i) || !((r = i.issues) != null && r.length))
    return !1;
  const s = e ? "warning" : "error";
  return i.issues.filter((o) => o.type === s).some((o) => {
    var l;
    return (l = o.field) != null && l.length ? o.field.some((a) => a.every((c, f) => c === Wo(t[f]))) : !1;
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
  isWarning: a = !1
}) => {
  if (!i)
    throw new Error("Item is required for validation");
  let c = Pe(i, t);
  try {
    if (c = x({ v: c }), o && (c === null || c === ""))
      return new le({
        item: i,
        message: Le("errors.validation.not_set", {
          0: _e[t.join(".")]
        }),
        shouldTranslate: !1,
        field: [t],
        index: [e],
        type: a ? "warning" : "error",
        issues: s
      }), null;
    if (!l && c === 0)
      return new le({
        item: i,
        message: Le("errors.validation.greater_than", {
          0: _e[t.join(".")],
          1: 0
        }),
        shouldTranslate: !1,
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
  return Uo({ item: i, field: t, value: c, index: e, issues: s, min: n, isWarning: a ?? !1 }), zo({ item: i, field: t, value: c, index: e, issues: s, max: r, isWarning: a ?? !1 }), c;
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
  typeof e != "number" || typeof r != "number" || e < r && new le({
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
  typeof e != "number" || typeof r != "number" || e > r && new le({
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
    new le({
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
  e.includes(l) || new le({
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
}, Vo = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ti({
    item: i,
    field: ["x"],
    index: t,
    newIssues: n,
    min: 0,
    max: e,
    isWarning: s
  }), n;
}, Yo = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ti({
    item: i,
    field: ["y"],
    index: t,
    newIssues: n,
    min: 0,
    max: e,
    isWarning: s
  }), n;
}, Xo = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ti({
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
}, Ko = ({ item: i, index: t, max: e, isWarning: s = !1 }) => {
  const n = [];
  return ti({
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
}, Zo = ({ item: i, index: t, max: e, isWarning: s = !1, saw: n }) => {
  const r = [];
  return (n == null ? void 0 : n.cutType) === "beam" && (Pe(i, "t") || new le({
    item: i,
    message: Le("errors.saw.thickness_required_for_beam_saw"),
    shouldTranslate: !1,
    field: [["t"]],
    index: [t],
    type: "error",
    issues: r
  })), ti({
    item: i,
    field: ["t"],
    index: t,
    newIssues: r,
    allowZero: !1,
    min: 0,
    max: e,
    isWarning: s
  }), r;
}, Jo = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "q");
  if (n == null) return s;
  try {
    const r = x({ v: n }), o = Pe(i, "autoAdd");
    r <= 0 && o !== !0 && new le({
      item: i,
      message: Le("errors.validation.greater_than_or_equal", {
        0: _e.q,
        1: 0
      }),
      shouldTranslate: !1,
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
}, Qo = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "orientationLock", ["l", "w"], t, e, s), s;
}, el = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [];
  return Rn(i, "grain", ["l", "w"], t, e, s), s;
}, tl = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "banding");
  return n != null && (typeof n != "object" || n === null) && new le({
    item: i,
    message: Le("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, il = ({ item: i, index: t, isWarning: e = !1 }) => {
  const s = [], n = Pe(i, "customData");
  if (n == null) return s;
  if (typeof n != "object" || n === null)
    return new le({
      item: i,
      message: Le("errors.validation.must_be_object", {
        0: _e.customData
      }),
      shouldTranslate: !1,
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const [, r] of Object.entries(n))
    if (r != null) {
      const o = typeof r;
      ["string", "number", "boolean"].includes(o) || new le({
        item: i,
        message: Le("errors.validation.must_be_string_number_boolean", {
          0: _e.customData
        }),
        shouldTranslate: !1,
        field: [["customData"]],
        index: [t],
        type: e ? "warning" : "error",
        issues: s
      });
    }
  return s;
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
    const l = x({ v: t }), a = x({ v: r }), c = x({ v: o }), f = a - l * 2, g = c - l * 2;
    (f <= 0 || g <= 0) && new le({
      item: i,
      message: Le("errors.trim.too_much", {
        0: "part",
        1: l,
        z: `${f}x${g}`
      }),
      shouldTranslate: !1,
      field: [["l"], ["w"], ["trim"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: n
    });
  } catch {
  }
  return n;
}, nl = ({
  item: i,
  index: t,
  min: e = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [], o = Pe(i, "l"), l = Pe(i, "w"), a = Pe(i, "trim");
  if (!o || !l || !a) return r;
  if ((!et(i) || et(i) && !("trimmed" in i && i.trimmed)) && typeof a == "object" && a !== null) {
    for (const f of Object.keys(a))
      ti({
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
        const f = x({ v: o }), g = x({ v: l }), h = (q) => {
          if (q == null) return 0;
          if (typeof q == "number" || typeof q == "string")
            try {
              return x({ v: q }) || 0;
            } catch {
              return 0;
            }
          return 0;
        }, p = {
          x1: h(Pe(a, "x1")),
          x2: h(Pe(a, "x2")),
          y1: h(Pe(a, "y1")),
          y2: h(Pe(a, "y2"))
        }, v = p.x1 + p.x2, P = p.y1 + p.y2;
        v >= f && new le({
          item: i,
          message: Le("errors.trim.too_much", {
            0: `${_e.x1.toUpperCase()} + ${_e.x2.toUpperCase()}`,
            1: _e.l,
            2: f
          }),
          shouldTranslate: !1,
          field: [["trim", "x1"], ["trim", "x2"]],
          index: [t],
          type: n ? "warning" : "error",
          issues: r
        }), P >= g && new le({
          item: i,
          message: Le("errors.trim.too_much", {
            0: `${_e.y1.toUpperCase()} + ${_e.y2.toUpperCase()}`,
            1: _e.w,
            2: g
          }),
          shouldTranslate: !1,
          field: [["trim", "y1"], ["trim", "y2"]],
          index: [t],
          type: n ? "warning" : "error",
          issues: r
        });
      } catch {
      }
  }
  return r;
}, rl = ({
  item: i,
  inputStockList: t,
  saw: e,
  partTrim: s = 0,
  index: n
}) => {
  var g;
  const r = [], o = e.stockType, l = Pe(i, "q"), a = Pe(i, "l"), c = Pe(i, "w");
  return !l || !a || !c || ("applyPartTrim" in i && typeof i.applyPartTrim == "function" && i.applyPartTrim(s, o), On(i) && ((g = i.issues) != null && g.length)) || jo([i], t, e, n).newIssues.forEach((h) => {
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
function ul(i) {
  var t;
  return ((t = st.cutTypes) == null ? void 0 : t[i]) ?? [];
}
function cl(i, t) {
  var e, s;
  return ((s = (e = st.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? [];
}
function ts() {
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
  new le({
    item: i,
    field: Array.isArray(t) ? t.map((n) => [n]) : [[t]],
    message: Le(e, s),
    shouldTranslate: !1
  });
}
class $t {
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
    t = _t(t), this.issues = [], e = e ?? (t == null ? void 0 : t.stockType) ?? ts()[0], hl(this, t, e), this.bladeWidth = x({ v: t == null ? void 0 : t.bladeWidth }) ?? st.defaults.bladeWidth, this.stockType = e ?? (t == null ? void 0 : t.stockType) ?? ts()[0], Mn(this.stockType) || (this.stockType = ts()[0]), this.cutType = t == null ? void 0 : t.cutType, Fn(this.stockType, this.cutType) || (this.cutType = ul(this.stockType)[0]), this.cutPreference = t == null ? void 0 : t.cutPreference, _n(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = cl(this.stockType, this.cutType)[0]), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? st.defaults.stackHeight, this.guillotineOptions = Oi({}, t == null ? void 0 : t.guillotineOptions, st.defaults.guillotine), this.efficiencyOptions = Oi({}, t == null ? void 0 : t.efficiencyOptions, st.defaults.efficiency), this.options = Oi({}, t == null ? void 0 : t.options, st.defaults.options), this.options.minSpacing = x({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = x({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = x({ v: this.options.minSpacingDimension.minSpacing }) ?? 0;
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
  var s, n, r, o, l, a, c, f, g, h;
  if (i.issues = [], k(t == null ? void 0 : t.bladeWidth) && (t.bladeWidth = typeof t.bladeWidth == "string" ? x({ v: t.bladeWidth }) : t.bladeWidth), (Tt(t.bladeWidth) || t.bladeWidth < 0) && mt(
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
  ), (t == null ? void 0 : t.cutType) === "efficiency" && ((s = t == null ? void 0 : t.options) != null && s.minSpacing && (t.options.minSpacing = typeof t.options.minSpacing == "string" ? x({ v: t.options.minSpacing }) : t.options.minSpacing, (!k(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && mt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    { minSpacing: t.options.minSpacing }
  ), (Tt(t.options.minSpacing) || t.options.minSpacing < 0) && mt(
    i,
    "options.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacing: t.options.minSpacing ?? "none" }
  )), (n = t == null ? void 0 : t.options) != null && n.minSpacingDimension && (k((o = (r = t == null ? void 0 : t.options) == null ? void 0 : r.minSpacingDimension) == null ? void 0 : o.dimension) && (t.options.minSpacingDimension.dimension = typeof t.options.minSpacingDimension.dimension == "string" ? x({ v: t.options.minSpacingDimension.dimension }) : t.options.minSpacingDimension.dimension, (Tt(t.options.minSpacingDimension.dimension) || t.options.minSpacingDimension.dimension < 0) && mt(
    i,
    "options.minSpacingDimension.dimension",
    "saw.validation.minSpacing.dimension.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.dimension ?? "none" }
  )), (a = (l = t == null ? void 0 : t.options) == null ? void 0 : l.minSpacingDimension) != null && a.minSpacing && (t.options.minSpacingDimension.minSpacing = typeof t.options.minSpacingDimension.minSpacing == "string" ? x({ v: t.options.minSpacingDimension.minSpacing }) : t.options.minSpacingDimension.minSpacing, (Tt(t.options.minSpacingDimension.minSpacing) || t.options.minSpacingDimension.minSpacing < 0) && mt(
    i,
    "options.minSpacingDimension.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.minSpacing ?? "none" }
  )), (f = (c = t == null ? void 0 : t.options) == null ? void 0 : c.minSpacingDimension) != null && f.dimension && ((h = (g = t == null ? void 0 : t.options) == null ? void 0 : g.minSpacingDimension) != null && h.minSpacing) && (!k(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && mt(
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
  var o, l, a, c;
  const e = typeof i.l == "string" ? x({ v: i.l }) : i.l, s = typeof i.w == "string" ? x({ v: i.w }) : i.w;
  if (!t || !Jn(i) || Qn(i) || Nl(i) && !(i != null && i.hasTrim))
    return { l: e, w: s };
  const n = x({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + x({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = x({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + x({ v: ((c = i == null ? void 0 : i.trim) == null ? void 0 : c.y2) ?? 0 });
  return {
    l: e - (typeof n == "string" ? x({ v: n }) : n),
    w: s - (typeof r == "string" ? x({ v: r }) : r)
  };
}
function dl(i, t) {
  var e, s, n, r;
  return Jn(i) && !Qn(i) && (t.l = t.l - (x({ v: ((e = i == null ? void 0 : i.trim) == null ? void 0 : e.x1) ?? 0 }) + x({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), t.w = t.w - (x({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + x({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), t;
}
function is(i, t, e = !1) {
  let s = {
    l: x({ v: i.l }),
    w: x({ v: i.w })
  };
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return e && (s = dl(i, s)), n === t || ([s.l, s.w] = [s.w, s.l]), s;
}
function qn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function fl(i) {
  qn(i), [i.l, i.w] = [i.w, i.l];
}
function Vi(i, t, e = null, s) {
  var h, p;
  if (!t || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && Ss(s) ? n = s.minSpacing : s && ((h = s == null ? void 0 : s.options) != null && h.minSpacing) ? n = x({ v: s.options.minSpacing }) : Ds(t) && (n = (p = t == null ? void 0 : t.saw) == null ? void 0 : p.minSpacing);
  const r = os(t, !0), o = os(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(v, P) {
    return de.equalTo(v, P) || de.lessThanOrEqualTo(v, P - n * 2);
  }
  function a(v) {
    return l(v.l, r.l) && l(v.w, r.w);
  }
  const c = xs(i, t);
  if (i.orientationLock || e !== null) {
    const P = is(i, e ?? (c === "w" ? 1 : 0), !0);
    return a(P);
  }
  const f = is(i, 0, !0);
  if (a(f)) return !0;
  const g = is(i, 1, !0);
  return a(g);
}
function Bn(i) {
  let t = null;
  return wt(i) || Ts(i) ? t = i.direction : (Je(i) || Ie(i)) && (t = i.orientationLock), t;
}
function xs(i, t) {
  const e = Bn(i);
  return k(e) ? !t || wt(i) ? e : Ds(t) ? pl(i, t) : e : null;
}
function pl(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!Ds(t)) throw new Error("container is not a container");
  const e = Bn(i);
  if (wt(i)) return e;
  if (!k(e)) return null;
  const s = t.getStock();
  return !s || !k(s == null ? void 0 : s.grain) ? e : e === (s == null ? void 0 : s.grain) ? "l" : "w";
}
function ls(i, t = null, e = null) {
  if (!k(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), jn(i) && t || e && !Vi(i, e, t))
    return !1;
  const s = xs(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function as(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), ls(i, t, e) ? (i.rot === t || fl(i), !0) : !1;
}
function Qt(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !Vi(i, e, t) ? !1 : as(i, t, e);
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
  qn(i);
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
    u(this, "x1");
    u(this, "x2");
    u(this, "y1");
    u(this, "y2");
    u(this, "dimension");
    u(this, "direction");
    u(this, "shapeCollisions");
    u(this, "origin");
    u(this, "type");
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
  typeof es < "u" && es && (es.showDiff = !0);
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
class Yi extends Xt {
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
    k(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Gt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.isGuillotine = e.isGuillotine, this.guillotineData = k(e.guillotineData) ? e.guillotineData : {}, this.ptxData = k(e.ptxData) ? e.ptxData : {}, this.isHead = k(e.isHead) ? e.isHead : !1, this.isTrim = k(e.isTrim) ? e.isTrim : !1, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1, this.distances = k(e.distances) ? e.distances : {};
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
}, Di = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Li = {
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
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Di[this.corner] && (this.grid ? Di[this.corner][this.grid] && Di[this.corner][this.grid].forEach((s) => e.add(s)) : Di[this.corner].default.forEach((s) => e.add(s))), e) : (Li[this.corner] && (this.grid ? Li[this.corner][this.grid] && Li[this.corner][this.grid].forEach((s) => e.add(s)) : Li[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class jt {
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
  var o, l, a, c, f, g;
  const s = new jt(), n = e.toArray().sort(Wn), r = t.getBladeWidth();
  if (n.forEach((h) => {
    const p = h.corner, v = h.type;
    if (!r)
      s.addPoint(h);
    else
      switch (p) {
        case "topRight":
          s.addPoint(
            me("top", h, r, p),
            v
          ), s.addPoint(
            me("right", h, r, p),
            v
          );
          break;
        case "topLeft":
          s.addPoint(
            me("top", h, r, p),
            v
          ), s.addPoint(
            me("left", h, r, p),
            v
          );
          break;
        case "bottomRight":
          s.addPoint(
            me("bottom", h, r, p),
            v
          ), s.addPoint(
            me("right", h, r, p),
            v
          );
          break;
        case "bottomLeft":
          s.addPoint(
            me("bottom", h, r, p),
            v
          ), s.addPoint(
            me("left", h, r, p),
            v
          );
          break;
      }
    const P = s.toArray();
    if (r)
      for (let q = P.length; q--; ) {
        const E = P[q];
        e.contains(E) && s.deletePoint(E);
      }
    else
      for (let q = P.length; q--; ) {
        const E = P[q];
        for (let w = i.length; w--; ) {
          const Z = i[w];
          if (E.x === Z.x && E.y === Z.y) {
            s.deletePoint(E);
            break;
          }
        }
      }
  }), r) {
    const h = /* @__PURE__ */ new Set();
    let p, v, P, q;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (p = t.x, v = t.y, P = t.x + t.l, q = t.y + t.w) : (p = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), v = t.y + ((c = t == null ? void 0 : t.trim) == null ? void 0 : c.y1), P = t.x + t.l - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.x2), q = t.y + t.w - ((g = t == null ? void 0 : t.trim) == null ? void 0 : g.y2));
    let E = s.toArray();
    for (let w = E.length; w--; ) {
      const Z = E[w];
      (de.lessThan(Z.x, p) || de.lessThan(Z.y, v) || de.greaterThan(Z.x, P) || de.greaterThan(Z.y, q)) && E.splice(w, 1);
    }
    s.clear(), s.addPoints(E), h.clear(), E = s.toArray();
    for (let w = E.length; w--; ) {
      const Z = E[w];
      for (let Y = i.length; Y--; ) {
        const ce = i[Y];
        if (Z.collidesWith(ce)) {
          s.deletePoint(Z);
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
      const c = Object.values(a.rays);
      for (const f of c)
        Ol(
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
      const g = new Me(f.x2, f.y2);
      r === f.direction && (Nn(g, l, null, f.direction, "edge"), e.addPoint(g));
    }
  }), e = El(e), e;
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
function Ol(i, t, e, s) {
  switch (i.direction) {
    case "rl":
      $i(
        i,
        t,
        e,
        s,
        e.x + e.l
      );
      break;
    case "lr":
      $i(
        i,
        t,
        e,
        s,
        e.x
      );
      break;
    case "tb":
      $i(
        i,
        t,
        e,
        s,
        e.y + e.w
      );
      break;
    case "bt":
      $i(
        i,
        t,
        e,
        s,
        e.y
      );
      break;
  }
}
function $i(i, t, e, s, n) {
  const r = i.dimension === "w", o = r ? "y" : "x", l = r ? "x" : "y", a = r ? "l" : "w";
  if (i[`${l}1`] >= e[l] && i[`${l}1`] <= e[l] + e[a]) {
    const c = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, f = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, g = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, h = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (c || f || g || h) {
      const v = r ? i[`${l}1`] : n, P = r ? n : i[`${l}1`], q = new Me(v, P), E = i.origin;
      Nn(q, t, e, i.direction, "shape", E), s.addPoint(q);
    }
  }
}
function El(i) {
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
  var a, c, f, g, h, p;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((c = t == null ? void 0 : t.constructor) == null ? void 0 : c.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (f = t == null ? void 0 : t.trim) == null ? void 0 : f.x1, n = (g = t == null ? void 0 : t.trim) == null ? void 0 : g.y1, r = t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2) - i.l, o = t.w - ((p = t == null ? void 0 : t.trim) == null ? void 0 : p.y2) - i.w);
  const l = e.toArray();
  for (let v = l.length; v--; ) {
    const P = l[v];
    (de.lessThan(P.x, s) || de.lessThan(P.y, n) || de.greaterThan(P.x, r) || de.greaterThan(P.y, o) || P.x < 0 || P.y < 0) && e.deletePoint(P);
  }
}
function Fl(i, t, e) {
  if (!vi.includes(t) || !i.machining.corners) return 0;
  const s = Yn(i, t);
  return e * s;
}
function Yn(i, t) {
  if (!vi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Gi(i, t, e, s) {
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
class us {
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
    return yt[this.face];
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
    ], c = t.machining.corners.map((v, P) => {
      const q = P === 0 || P === 3, E = P < 2, w = q ? e : r - e;
      let Z = null;
      this.face === 0 ? Z = E ? s : o - s : this.face === 1 && (Z = E ? o - s : s);
      const Y = Math.sqrt(w * w + Z * Z);
      return {
        c: v,
        distance: Y
      };
    }), f = Math.min(...a.map((v) => v.distance)), g = Math.min(...c.map((v) => v.distance)), h = c.findIndex((v) => v.distance === g), p = t.machining.corners[h];
    if (p && p.type === "radius") {
      let v = h === 0 || h === 3 ? 0 : r, P = h < 2 ? 0 : o;
      const q = h < 2;
      v += h === 0 || h === 3 ? l[h] : -l[h], P += q ? l[h] : -l[h];
      const w = e - v, Z = h < 2;
      let Y;
      this.face === 0 ? Y = Z ? s : o - s : this.face === 1 && (Y = Z ? o - s : s);
      const ce = Y - P, ne = Math.sqrt(w * w + ce * ce), I = l[h] - ne - n;
      let S = !1;
      return p.index === 0 ? S = e <= v && Y <= P : p.index === 1 ? S = e >= v && Y <= P : p.index === 2 ? S = e >= v && Y >= P : p.index === 3 && (S = e <= v && Y >= P), S && I < f ? I : f;
    } else if (p && p.type === "bevel") {
      let v, P, q;
      p.index === 0 ? (v = 1, P = 1, q = -p.size) : p.index === 1 ? (v = 1, P = -1, q = -r + p.size) : p.index === 2 ? (v = 1, P = 1, q = -r - o + p.size) : p.index === 3 && (v = -1, P = 1, q = -o + p.size);
      const E = p.index === 0 ? 1 : -1, w = (v * e + P * s + q) / Math.sqrt(v * v + P * P) * E - n;
      return w < f ? w : f;
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
    hingeLength: c = 0,
    minimumHoleDistance: f = 0,
    positionLimit: g = 0
  }, h) {
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
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = c, this.minimumHoleDistance = f, this.positionLimit = g, h && this.createHoles(h);
  }
  getFace() {
    return yt[this.face];
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
    }), s && Gi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Js {
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
    s && s.length === 4 ? this.corners = s.map((n) => new Js(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Js({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new us(n))), e && (this.hingeHoles = e.map((n) => new Zs(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && (console.log(s), new le({
      item: t,
      index: e,
      listId: Ie(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    })), n.length && new le({
      item: t,
      index: e,
      listId: Ie(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new le({
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
    minimumHoleDistance: c = 0,
    hingeLength: f = 0
  }) {
    const g = new Zs({
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
    return this.hingeHoles.push(g), g;
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
        message: "errors.groups.min_parts"
      }), this.issues;
    const s = e[0];
    if (Je(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new le({
          item: this,
          message: "errors.groups.min_parts"
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new le({
        item: this,
        message: "errors.groups.min_parts"
      }), this.issues;
    if (e.forEach((a, c) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new le({
        item: this,
        field: [["orientationLock"]],
        message: Le("errors.groups.part_needs_orientation_lock", { 0: c + 1 }),
        shouldTranslate: !1
      });
    }), this.issues.length) return this.issues;
    const n = di(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, c) => {
      if (a.id === s.id) return;
      const f = a.getTrimmedDimensions(!0)[n];
      de.equalTo(f, r) || new le({
        item: this,
        message: Le("errors.groups.dimension_not_correct", {
          0: c + 1,
          1: n === "l" ? "length" : "width",
          2: r,
          3: f
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
    r.forEach((f) => {
      const g = s.findIndex((h) => !h.inUserGroup && h.parentID === f.parentID);
      if (g === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(g, 1), ml(f), f.inUserGroup = !0;
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
      c = new dt(f);
    } catch (f) {
      return console.error(f), !1;
    }
    return c.parentID = `ug${t}`, n && c.updateShapeSpacing(n), c;
  }
}
function Lh(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new Cs(s));
  return t.length && ql(e, t), e;
}
function ql(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function Bl(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function jl(i, t, e = !0) {
  const s = Bl(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((c) => c.listId === r);
    l < 0 && new le({
      message: "errors.groups.no_parts",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new le({
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
const bt = ["y1", "y2", "x1", "x2"], vi = ["a", "b", "c", "d"], Dt = [...bt, ...vi], yt = ["a", "b"];
function Kn(i) {
  return vi.includes(i);
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
  if (!k(i) || typeof i != "object") return {};
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
        n = new dt(s);
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
function Oh({
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
function Wi(i, t, e = "decimal", s = !1) {
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
    t = _t(t), this.readonly = t.readonly, this.id = t.id, this.index = t == null ? void 0 : t.index, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ds(), ["l", "w", "t"].forEach((f) => this[f] = Wi(t, f, e, s)), this.q = k(t == null ? void 0 : t.q) ? Tt(Mi(t.q)) ? null : Mi(t.q) : null, this.autoAdd = k(t.autoAdd) ? t.autoAdd : !1, this.name = k(t.name) && ((o = t == null ? void 0 : t.name) != null && o.length) ? (l = bs(t == null ? void 0 : t.name)) == null ? void 0 : l.toUpperCase() : null, this.material = k(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((f) => {
      this.trim[f] = Wi(t.trim, f, e, s);
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
    return this.issues = [], ["l", "w", "t", "grain"].forEach((s) => Ke[s]({ item: this, saw: t, index: e ?? this.index })), Ke.trim({ item: this, index: e }), ["q"].forEach((s) => Ke[s]({ item: this, index: e ?? this.index, isWarning: !0 })), this.issues = this.issues.filter((s) => s), this.issues;
  }
}
class fi {
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
      bt.map((t) => [t, 0])
    ));
    u(this, "banding", Object.fromEntries(
      Dt.map((t) => [t, !1])
    ));
    u(this, "bandingOptions", Object.fromEntries([
      ...Dt,
      "all"
    ].map((t) => [t, {}])));
    u(this, "finish", Object.fromEntries(
      yt.map((t) => [t, ""])
    ));
    u(this, "finishOptions", Object.fromEntries(
      yt.map((t) => [t, {}])
    ));
    /**
     * to align with Shape
     * @remarks input shapes are always 0
     */
    u(this, "rot", 0);
    var r, o, l, a, c, f, g;
    t = t = _t(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ds(), this.index = t == null ? void 0 : t.index, ["l", "w", "t"].forEach((h) => {
      this[h] = Wi(t, h, e, s);
    }), this.q = k(t == null ? void 0 : t.q) ? Tt(Mi(t.q)) ? null : Mi(t.q) : null, this.name = k(t.name) && ((r = t == null ? void 0 : t.name) != null && r.length) ? (o = bs(t == null ? void 0 : t.name)) == null ? void 0 : o.toUpperCase() : null, this.material = k(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, typeof ((l = t == null ? void 0 : t.notes) == null ? void 0 : l.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [], this.upDirection = (t == null ? void 0 : t.upDirection) ?? null;
    for (const h of Object.keys(this.trim))
      this.trim[h] = Wi(t.trim, h, e, s);
    for (const h of Object.keys(this.banding))
      this.banding[h] = k((a = t == null ? void 0 : t.banding) == null ? void 0 : a[h]) ? t.banding[h] : !1;
    for (const h of Object.keys(this.bandingOptions))
      this.bandingOptions[h] = k((c = t == null ? void 0 : t.bandingOptions) == null ? void 0 : c[h]) ? t.bandingOptions[h] : {};
    for (const h of Object.keys(this.finish))
      this.finish[h] = k((f = t == null ? void 0 : t.finish) == null ? void 0 : f[h]) ? t.finish[h] : "";
    for (const h of Object.keys(this.finishOptions))
      this.finishOptions[h] = k((g = t == null ? void 0 : t.finishOptions) == null ? void 0 : g[h]) ? t.finishOptions[h] : {};
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
          Dt.map((e) => [e, !1])
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
    if (this.issues = [], ["l", "w", "t"].forEach((o) => Ke[o]({ item: this, index: e ?? this.index, saw: r })), s = x({ v: s }), Ke.partTrim({ item: this, partTrim: s, index: e ?? this.index }), Ke.trim({ item: this, index: e ?? this.index }), Ke.machining({ item: this, index: e ?? this.index }), ["q"].forEach((o) => {
      Ke[o]({ item: this, index: e ?? this.index, isWarning: !0 });
    }), t.length && !n) {
      const o = new $t(r);
      Ke.stockMatch({ item: this, inputStockList: t, saw: o, partTrim: s, index: e ?? this.index, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Ht {
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
      bt.map((t) => [t, 0])
    ));
    u(this, "customData");
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
      this.validateRectangle(t), this.id = k(t.id) ? t.id.toString() : this.id || null, this.setParentID(), k(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = k(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = yo(bs(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, k(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = k(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = k(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && k(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.area = this.getArea(), this.offcut = k(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
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
    }), !(t != null && t.infiniteLength) && !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = di(this.grain))), k(t == null ? void 0 : t.stock) && (et(t.stock) ? this.stock = t.stock : this.stock = new Gt(t.stock), this.stockId = this.stock.id), this.index = t.index;
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !Tt(parseFloat(String(r)))).length && (k(this.l) && (this.l -= (k((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (k((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new le({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), k(this.w) && (this.w -= (k((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (k((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new le({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
    if (Je(this) && ((c = this.identicalTo) != null && c.length) && (this.parentID === t.parentID || this.identicalTo.includes(t.parentID)))
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
class Xi extends Ht {
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
            const { cutType: a, cutPreference: c } = rs(e.saw.cutPreference);
            e.saw.cutType = a, e.saw.cutPreference = c;
          }
        } else {
          e.saw = {};
          const { cutType: a, cutPreference: c } = rs(e.cutPreference);
          e.saw.cutType = a, e.saw.cutPreference = c, k(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), k((n = e == null ? void 0 : e.blade) == null ? void 0 : n.width) && (e.saw.bladeWidth = e.blade.width), k(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), k(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), k(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
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
    return Tt(e) ? 0 : e;
  }
  getStock() {
    return et(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Gt extends Xi {
  constructor(e, s) {
    var n;
    e = _t(e), e.preventAutoRotation = e.preventAutoRotation || ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
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
class At extends Ht {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(e) {
    e = _t(e);
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
      Dt.map((e) => [e, !1])
    ));
    u(this, "_finish", Object.fromEntries(
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
    this.guillotineData = Oi({}, e == null ? void 0 : e.guillotineData, {
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
    return (e = this.guillotineData) != null && e.myStripParent && (Je(this.guillotineData.myStripParent) || wt(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o, l, a, c, f, g, h, p;
    const n = e.bladeWidth;
    if (e.cutType !== "efficiency")
      return s ? 0 : n;
    if (this.minSpacing > 0) return this.minSpacing;
    let r = (e == null ? void 0 : e.minSpacing) || 0;
    if (n > r && (r = n), (l = (o = e.options) == null ? void 0 : o.minSpacingDimension) != null && l.dimension && ((c = (a = e.options) == null ? void 0 : a.minSpacingDimension) != null && c.minSpacing)) {
      const v = (g = (f = e.options) == null ? void 0 : f.minSpacingDimension) == null ? void 0 : g.dimension;
      (this.l <= v || this.w <= v) && (r = ((p = (h = e.options) == null ? void 0 : h.minSpacingDimension) == null ? void 0 : p.minSpacing) || r);
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
        this._banding[s] = k(e == null ? void 0 : e[s]) ? e[s] : !1;
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
        this._finish[s] = k(e == null ? void 0 : e[s]) ? e[s] : "";
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
    Qt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    var n, r, o;
    return et(e) && typeof ((n = this.fitsStock) == null ? void 0 : n[e.parentID]) < "u" ? ((o = (r = this.fitsStock) == null ? void 0 : r[e.parentID]) == null ? void 0 : o[s ?? "any"]) === !0 : Vi(this, e, s);
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
class Ps extends Xi {
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
class dt extends At {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = _t(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
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
      const l = this.shapes.slice(0, -1).reduce((f, g) => f + g.getMinSpacing(this.container.saw), 0), c = this.shapes.reduce((f, g) => f + g[this.direction], 0) + l;
      Gn([
        () => Zt(
          de.equalTo(c, this[this.direction]),
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
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new dt(a);
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
  return i instanceof dt && i.type !== "user";
}
function Ts(i) {
  return i instanceof dt && i.type === "user";
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
  return i instanceof Xi;
}
function Je(i) {
  return i instanceof At && !(i instanceof dt);
}
function Ul(i) {
  return i instanceof At || i instanceof dt;
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
  return i instanceof dt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof Cs ? "inputUserGroup" : i instanceof Is ? "inputStock" : i instanceof fi ? "inputShape" : i instanceof Gt ? "stock" : i instanceof Xi ? "container" : i instanceof At && !(i instanceof dt) ? "shape" : i instanceof Ps ? "segment" : i instanceof Zn ? "offcut" : i instanceof $t ? "saw" : i instanceof Ht ? "rectangle" : null;
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
function k(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function ei(i, t = !1) {
  if (!k(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => k(s) && s) : e.some((s) => k(s));
}
function Fh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return Ft(e) && e.autoAdd ? s = 1 : s = k(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
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
function cs(i = 0, t, e = null, s = null, n = null) {
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
  return i === 0 || i === 1 ? cs(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Kl(i) {
  i.banding && (i.banding = Ni(i.banding, "cc")), i.trim && (i.trim = Ni(i.trim, "cc"));
}
function qh(i, t = 0) {
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
const { addNotice: ct } = vs(), {
  inputs: Ee,
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
  if ((i = Ee == null ? void 0 : Ee.inputStock) != null && i.value) {
    for (let e = Ee.inputStock.value.length - 1; e >= 0; e--) {
      const s = Ee.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ee.inputStock.value.length > 1 || e !== 0) && sn(s.listId);
    }
    if ((t = Ee == null ? void 0 : Ee.inputShapes) != null && t.value)
      for (let e = Ee.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Ee.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ee.inputShapes.value.length > 1 || e !== 0) && tn(s.listId);
      }
  }
}, na = (i, t = !1) => {
  var s;
  if (!t) return [];
  const e = [];
  for (let n = Ee.inputShapes.value.length - 1; n >= 0; n--) {
    const r = Ee.inputShapes.value[n];
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
    partTrim: x({ v: t.partTrim }),
    useInventory: t.useInventory,
    inputShapesOverride: t.inputShapes
  }));
  const n = It(s);
  if (n.length > 0) {
    console.warn("[Validation] errors:", JSON.parse(JSON.stringify(n)));
    const r = n.map((o) => {
      let l = "";
      return o.index && (l += o.getHumanReadableIndexes() + ": "), l += e(o.message), l;
    });
    return ct({
      type: "error",
      message: e("errors.validation.inputs_issue", { 0: qi(e("woodwork.part")) }),
      additional: r
    }), !1;
  }
  return !0;
};
async function oa(i) {
  var s, n;
  const t = ir(i), e = t.t;
  try {
    if (!ra(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (Zl.value > t.maxShapes || Jl.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const p = na(t.materialStore, !0), v = It(p);
      if (v.length > 0)
        return ct({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "material" }),
          additional: v.map((P) => e(P.message))
        }), { valid: !1 };
    } else {
      const p = tr(), v = It(p);
      if (v.length > 0)
        return ct({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "stock" }),
          additional: v.map((P) => e(P.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new $t(t.selectedSaw) : new $t(t.sawData), o = It(r.issues);
    if (o.length > 0)
      return ct({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "saw" }),
        additional: o.map((p) => e(p.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Ql(r), c = It(a);
    if (c.length > 0)
      return ct({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "stock" }),
        additional: c.map((p) => e(p.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return ct({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1 };
    const { shapeList: f, issues: g } = await ea({
      orientationModel: t.orientationModel,
      trim: t.partTrim,
      inputShapesOverride: t.inputShapes
    }), h = It(g);
    if (h.length > 0)
      return ct({
        type: "error",
        message: e("errors.validation.inputs_issue", { 0: "part" }),
        additional: h.map((p) => e(p.message))
      }), { valid: !1 };
    if (!(f != null && f.length))
      return ct({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Ee.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Ee.userGroups.value.forEach((P) => P.populateParentID(Ee.inputShapes.value));
      const p = jl(
        Ee.userGroups.value,
        Ee.inputShapes.value
      ), v = It(p);
      if (v.length > 0)
        return ct({
          type: "error",
          message: e("errors.validation.inputs_issue", { 0: "group" }),
          additional: v.map((P) => e(P.message))
        }), { valid: !1 };
    }
    return {
      valid: !0,
      saw: r,
      stockList: l,
      shapeList: f
    };
  } catch (r) {
    return console.error("[Validation] error:", r), ct({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
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
function ua(i, t, e = !0) {
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
function Os(i, t, e, s, n, r) {
  var f;
  const o = t + "Options";
  if (!((f = i == null ? void 0 : i[o]) != null && f[e]) || !(s in i[o][e])) return;
  pi(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((g) => g);
  if (!Array.isArray(a)) return;
  const c = Ui(i, t, e, r);
  pi(i, t, e, !!We(c));
}
function nr(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Ui(i, t, "all", r), c = i[o][e], f = Object.values(c || {}).filter((g) => g);
  for (const g of l)
    g !== "all" && (n.includes(g) || (Os(i, t, g, e, s, r), Array.isArray(f) || pi(i, t, g, !1), pi(i, t, g, !!We(a))));
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
  const r = i[n][e], o = Object.values(r || {}).filter((c) => c);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && Kn(e) && We(l) ? Fl(i, e, l) / 1e3 : l;
}
function Bh(i) {
  i != null && i.type && delete i.type, ca.call(this, i);
}
function ca(i) {
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
        onMousedown: (c) => n(l.id)
      }, [
        O("div", pa, se(a + 1), 1),
        fs(O("div", { class: "stack legibility" }, se(l.stack), 513), [
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
    e.complete ? W("", !0) : (y(), T("svg", {
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
    ]), 4)) : W("", !0),
    e.showNumber ? (y(), T("div", ba, se(e.number), 1)) : W("", !0)
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
    const a = new Set(l.map((f) => f.id)), c = o.map((f) => f.id).filter((f) => !a.has(f)).map((f) => `'${f}'`);
    c.length && console.warn(`Inputs - these fields do not have a field definition - ${c.join()}`);
  }
  return n.length && (o.sort((a, c) => {
    const f = n.indexOf(a.id), g = n.indexOf(c.id);
    return f === -1 ? 1 : g === -1 ? -1 : f - g;
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
    const e = i, s = t, n = N(0), r = N(!1), o = (S, A, V, D) => {
      if (!Ie(V) || A === 0)
        return S;
      const F = l();
      return A === 1 || A === 2 && D !== "n" && S ? F : S;
    }, l = (S) => {
      const A = { ...e, ...S };
      if (!A.rectangle || !Ie(A.rectangle)) return "";
      let V = "";
      switch (A.orientationModel) {
        case 0:
          V = Z.value;
          break;
        case 1:
          A.stockGrain === "y" || A.stockGrain === "n" ? V = A.rectangle.l >= A.rectangle.w ? "l" : "w" : A.rectangle.l >= A.rectangle.w ? V = A.stockGrain : V = V = A.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          V = A.rectangle.l >= A.rectangle.w ? "l" : "w";
          break;
      }
      return V;
    }, a = () => {
      if (e.disabled || E.value.length <= 1) return;
      let S = null;
      [1, 2].includes(e.orientationModel) ? S = g() : S = f(), n.value = S;
    }, c = (S) => {
      const A = E.value.findIndex((V) => V === S);
      return A === -1 ? 0 : A;
    }, f = () => {
      let S = 0;
      return S = c(Z.value) + 1, S > E.value.length - 1 && (S = 0), S;
    }, g = () => {
      let S = 0;
      if (Z.value)
        S = E.value.findIndex((A) => A === "");
      else {
        const A = l();
        S = E.value.findIndex((V) => V === A);
      }
      return S;
    }, h = (S) => {
      s("updateOrientation", S);
    }, p = () => {
      const S = Z.value;
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
    }, v = () => {
      if (!e.rectangle) return;
      const S = o(
        Z.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (S !== Z.value) {
        P(S);
        return;
      }
      if (n.value = c(Z.value), !!Ie(e.rectangle)) {
        if (e.orientationModel === 1) {
          const A = ce.value ? l() : Z.value;
          P(A);
          return;
        }
        if (e.orientationModel === 2) {
          let A;
          ce.value ? A = e.stockGrain !== "n" ? l() : "" : A = Z.value, P(A);
        }
      }
    }, P = (S) => {
      n.value = c(S), h(S);
    }, q = () => {
      const S = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], A = ["l", "w", "y", "n"], V = [0, 1, 2], D = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, F = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, X = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, R = [];
      S.forEach((_) => {
        A.forEach((U) => {
          V.forEach((ee) => {
            const oe = new fi({
              l: _.l,
              w: _.w
            }), De = l({
              orientationModel: ee,
              rectangle: oe,
              stockGrain: U
            });
            let qe = "";
            oe.l === oe.w ? qe = "l === w" : oe.l > oe.w ? qe = "l >= w" : qe = "w > l";
            const Ne = ["l", "w", "y"].includes(U) ? D : F;
            R.push({
              Model: ee,
              "Stock grain": U,
              "Stock grain description": X[U],
              Dimensions: qe,
              "Orientation lock": De || "N/A",
              "Orientation Lock description": Ne[De] || "N/A"
            });
          });
        });
      }), R.sort((_, U) => {
        if (_.Model !== U.Model)
          return _.Model - U.Model;
        if (_["Stock grain"] !== U["Stock grain"])
          return _["Stock grain"].localeCompare(U["Stock grain"]);
        const ee = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return ee[_.Dimensions] - ee[U.Dimensions];
      }), console.table(R);
    }, E = te(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Mt(e.rectangle)) return ["l", "w"];
      let S = ["", "l", "w"];
      return e.rectangle.multiEdit && (S = [" ", "", "l", "w"]), w.value && (S = S.filter((A) => A !== "w")), S;
    }), w = te(() => {
      var S, A, V, D;
      return Ie(e.rectangle) || Ft(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((S = e.rectangle) != null && S.l) && ((A = e.rectangle) != null && A.w) ? ((V = e.rectangle) == null ? void 0 : V.l) === ((D = e.rectangle) == null ? void 0 : D.w) : !1;
    }), Z = te(() => {
      let S = "";
      return Mt(e.rectangle) ? S = e.rectangle.direction : Ie(e.rectangle) ? S = e.rectangle.orientationLock ?? "" : Ft(e.rectangle) && (S = e.rectangle.grain ?? ""), S;
    }), Y = te(() => Mt(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), ce = te(() => !Y.value.l && !Y.value.w), ne = te(() => cs(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), I = te(() => {
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
      }, A = e.stockGrain || "default";
      let V = "default";
      return Ie(e.rectangle) || e.rectangleType === "shape" ? V = p() : Mt(e.rectangle) && (V = e.rectangle.direction || "default"), ((D = S[A]) == null ? void 0 : D[V]) || S[A].default;
    });
    return Te(n, (S, A) => {
      r.value && A !== void 0 && h(E.value[S]);
    }, { immediate: !1 }), Te(Y, (S, A) => {
      if (!e.rectangle || e.orientationModel === 0 || !Ie(e.rectangle) || Ie(e.rectangle) && (e.orientationModel === 2 && A.l && A.w && !Z.value || e.stockGrain === "n" && !Z.value))
        return;
      const V = l();
      Z.value !== V && h(V);
    }, { immediate: !1 }), Te(() => e.stockGrain, (S, A) => {
      S !== A && v();
    }, { immediate: !0 }), ft(() => {
      v(), nt(() => {
        r.value = !0, e.debug && q();
      });
    }), (S, A) => (y(), T("div", {
      id: S.id,
      class: Se(["orientation-button", { rot: ne.value, square: w.value, disabled: S.disabled, [I.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: xe({
        backgroundColor: S.buttonBackground
      }),
      onClick: a
    }, [
      I.value === "delete" ? (y(), T("svg", Ia, A[0] || (A[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : W("", !0),
      I.value === "freeRotation" ? (y(), T("svg", {
        key: 1,
        class: "arrow",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, A[1] || (A[1] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : W("", !0),
      I.value === "leftRight" ? (y(), T("svg", {
        key: 2,
        class: "arrow",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, A[2] || (A[2] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : W("", !0),
      I.value === "topBottom" ? (y(), T("svg", {
        key: 3,
        class: "arrow",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, A[3] || (A[3] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : W("", !0),
      I.value === "grainLeftRight" ? (y(), T("svg", {
        key: 4,
        class: "grain",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, A[4] || (A[4] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : W("", !0),
      I.value === "grainTopBottom" ? (y(), T("svg", {
        key: 5,
        class: "grain",
        style: xe({
          stroke: S.iconColor ? S.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, A[5] || (A[5] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : W("", !0)
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
    const e = i, s = t, n = N({
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
      var c;
      if (!((c = e.inputShape) != null && c.banding)) return;
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
    return ft(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), zi(() => {
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
  const s = N({
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
    const c = String(l);
    switch (i.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (a)
          return rn(c, i.type, i.numberFormat);
        try {
          const f = x({
            v: l,
            nf: i.numberFormat,
            dp: i.decimalPlaces,
            fr: i.fractionRoundTo
          });
          if (typeof f == "number") {
            let g = f, h = !0, p;
            return i.allowZero === !1 && g === 0 ? {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            } : (typeof i.min == "number" && g < i.min && (g = i.min, h = !1, p = "below_min"), typeof i.max == "number" && g > i.max && (g = i.max, h = !1, p = "above_max"), { value: g, valid: h, message: p });
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
          return rn(c, i.type);
        try {
          const g = x({
            v: l,
            nf: "decimal"
          });
          if (g === null)
            return i.required ? { value: null, valid: !1, message: "field_required" } : { value: null, valid: !0 };
          let h = g;
          if (i.type === "integer" && (h = Math.round(h)), i.allowZero === !1 && h === 0)
            return {
              value: null,
              valid: !1,
              message: "zero_not_allowed"
            };
          let p = !0, v;
          return typeof i.min == "number" && h < i.min && (h = i.min, p = !1, v = "below_min"), typeof i.max == "number" && h > i.max && (h = i.max, p = !1, v = "above_max"), { value: h, valid: p, message: v };
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
  }, r = (l) => !!(l.valid || l.message === "below_min" || l.message === "above_max" || l.message === "field_required");
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
          const f = n(a.value, !1);
          r(f) && (t("update:value", f.value), t("validation", f, i.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const c = n(a.value, !0);
        t("validation", c, i.id), t("input", a.value), r(c) && t("update:value", c.value);
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
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(l.key))
            if (i.type === "unitDependent" && i.numberFormat === "fraction") {
              const a = l.target, c = a.value, f = a.selectionStart || 0, g = c.substring(0, f);
              if (l.key === "/" && c.includes("/")) {
                l.preventDefault();
                return;
              }
              if (l.key === " " && /\s$/.test(g)) {
                l.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(l.key) || l.preventDefault();
            } else (i.type === "integer" || i.type === "float") && ((i.type === "integer" ? /^[-0-9]$/.test(l.key) : /^[-0-9.]$/.test(l.key)) || l.preventDefault());
          if (l.key === "Enter") {
            s.value.isTyping = !1;
            const a = l.target, c = n(a.value, !1);
            t("validation", c, i.id), r(c) && (t("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), t("enter", c);
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
        const a = l.target, c = n(a.value, !1);
        t("validation", c, i.id), r(c) && (t("update:value", c.value), s.value.lastValidValue = String(c.value ?? ""));
      },
      handlePaste: (l) => {
        var c, f;
        if (!e.value) return;
        const a = ((f = (c = l.clipboardData) == null ? void 0 : c.getData("text")) == null ? void 0 : f.trim()) || "";
        if (i.type === "unitDependent" && i.numberFormat === "fraction") {
          const g = a.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!ws(g)) {
            l.preventDefault(), t("validation", {
              value: g,
              valid: !1,
              message: `Pasted text "${a}" is not a valid fraction format`
            }, i.id);
            return;
          }
          if (g !== a) {
            l.preventDefault();
            const h = l.target;
            h.value = g;
            const p = n(g, !0);
            t("validation", p, i.id), t("input", g);
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
  const s = N({
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
const Oa = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Ea = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = N(!0), r = N(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: a,
      handleFocus: c,
      handleBlur: f,
      handleKeydown: g,
      handleCompositionStart: h,
      handleCompositionEnd: p,
      handlePaste: v
    } = La({
      props: e,
      emit: s,
      isMounted: n
    }), P = (q) => {
      const E = q.getBoundingClientRect(), w = window.getComputedStyle(q);
      return E.width > 0 && E.height > 0 && w.display !== "none" && w.visibility !== "hidden";
    };
    return ft(() => {
      (k(e.default) && e.value === void 0 || e.value === null) && s("update:value", e.default), e.focus && r.value && P(r.value) && nt(() => r.value.focus());
    }), zi(() => {
      n.value = !1;
    }), (q, E) => (y(), T("input", ui(q.$attrs, {
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
      onInput: E[0] || (E[0] = //@ts-ignore
      (...w) => C(o) && C(o)(...w)),
      onFocus: E[1] || (E[1] = //@ts-ignore
      (...w) => C(c) && C(c)(...w)),
      onBlur: E[2] || (E[2] = //@ts-ignore
      (...w) => C(f) && C(f)(...w)),
      onKeydown: E[3] || (E[3] = //@ts-ignore
      (...w) => C(g) && C(g)(...w)),
      onCompositionstart: E[4] || (E[4] = //@ts-ignore
      (...w) => C(h) && C(h)(...w)),
      onCompositionend: E[5] || (E[5] = //@ts-ignore
      (...w) => C(p) && C(p)(...w)),
      onPaste: E[6] || (E[6] = //@ts-ignore
      (...w) => C(v) && C(v)(...w)),
      onMousedown: E[7] || (E[7] = //@ts-ignore
      (...w) => C(l) && C(l)(...w)),
      onMouseup: E[8] || (E[8] = //@ts-ignore
      (...w) => C(a) && C(a)(...w))
    }), null, 16, Oa));
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
    const e = i, s = t, n = N(!0), r = N(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = Aa({
      props: e,
      emit: s,
      isMounted: n
    });
    return (c, f) => (y(), T("input", {
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
      (...g) => C(o) && C(o)(...g)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...g) => C(l) && C(l)(...g)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...g) => C(a) && C(a)(...g))
    }, null, 40, Ra));
  }
}), Fa = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], _a = ["disabled", "selected"], qa = {
  key: 0,
  value: " "
}, Ba = ["hidden", "value", "disabled"], ja = /* @__PURE__ */ Ae({
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
    const e = i, s = t, n = N(!0), r = N(null), o = te(() => e.options.map((a) => {
      var c, f, g;
      return {
        value: a.value,
        label: ((c = a.label) == null ? void 0 : c.toUpperCase()) ?? ((g = (f = a.value) == null ? void 0 : f.toString()) == null ? void 0 : g.toUpperCase()),
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
      var f, g, h, p;
      return y(), T("select", ui(a.$attrs, {
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
        (...v) => C(l) && C(l)(...v))
      }), [
        O("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, se(((g = (f = e.text) == null ? void 0 : f.select) == null ? void 0 : g.toUpperCase()) ?? "SELECT"), 9, _a),
        e.multiEdit ? (y(), T("option", qa, se(((p = (h = e.text) == null ? void 0 : h.delete) == null ? void 0 : p.toUpperCase()) ?? "DELETE"), 1)) : W("", !0),
        (y(!0), T(we, null, $e(o.value, (v) => (y(), T("option", {
          key: v.value,
          hidden: v.hidden,
          value: v.value,
          disabled: v.disabled
        }, se(v.label), 9, Ba))), 128))
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
      Kt(se(t.label) + " ", 1),
      t.required ? (y(), T("span", Ga, "*")) : W("", !0)
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
    const e = t, s = i, n = N(null), r = N(null), o = N(!0), l = N(s.numberFormat), a = te(() => s.custom ? "custom-" + s.id : s.id), c = te(() => `${a.value}-error`), f = te(() => s.label || s.placeholder), g = te(() => I(s.type, s.numberFormat)), h = te(() => S(s.type, s.numberFormat)), p = te(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), v = te(() => {
      let D = s.value;
      if (s.type !== "unitDependent" || !D) return D;
      try {
        return x({ v: D, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), P = te(() => s.options.map((D) => {
      var F, X;
      return {
        value: D.value,
        label: ((F = D.label) == null ? void 0 : F.toUpperCase()) || ((X = D.value) == null ? void 0 : X.toString().toUpperCase()),
        hidden: D.hidden || !1,
        disabled: D.disabled || !1
      };
    })), q = te(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), E = te(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": f.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), w = te(() => ({
      ...E.value,
      type: s.type,
      inputMode: h.value,
      inputType: g.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default
    })), Z = te(() => ({
      ...E.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), Y = te(() => ({
      ...E.value,
      options: P.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), ce = (D) => {
      r.value = D;
    }, ne = (D) => s.label && s.enableLabel && s.labelPosition === D, I = (D, F) => {
      if (D === "unitDependent")
        return F === "fraction" ? "text" : "number";
      switch (D) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, S = (D, F) => {
      if (D === "unitDependent")
        return F === "fraction" ? "text" : "decimal";
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
    }, V = (D, F) => {
      D.valid === void 0 || D.valid === !0 ? (o.value = !0, e("validation", n.value, D)) : D.valid === !1 && D.message && (o.value = !1, console.warn(`Field validation error for field ${F} - ${D.message}`), e("validation", n.value, D));
    };
    return Te(() => s.numberFormat, (D, F) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && D !== F && s.value)
          try {
            const X = x({ v: s.value, nf: D });
            e("update:value", X);
          } catch {
            e("update:value", D === "decimal" ? 0 : "0");
          }
        l.value = D;
      }
    }), (D, F) => (y(), T("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Se(["input-wrapper", q.value]),
      "data-field-id": a.value
    }, [
      ne("first") ? (y(), ye(on, {
        key: 0,
        id: a.value,
        label: D.label,
        required: D.required
      }, null, 8, ["id", "label", "required"])) : W("", !0),
      p.value ? (y(), ye(Ea, ui({
        key: 1,
        ref: ce
      }, w.value, {
        "input-type": g.value,
        "input-mode": h.value,
        value: v.value,
        onValidation: V,
        "onUpdate:value": A
      }), null, 16, ["input-type", "input-mode", "value"])) : D.type === "checkbox" ? (y(), ye(Ma, ui({
        key: 2,
        ref: ce,
        type: "checkbox"
      }, Z.value, {
        checked: D.value === D.trueValue,
        "onUpdate:value": F[0] || (F[0] = (X) => e("update:value", X))
      }), null, 16, ["checked"])) : D.type === "select" ? (y(), ye(ja, ui({
        key: 3,
        ref: ce
      }, Y.value, {
        "onUpdate:value": F[1] || (F[1] = (X) => e("update:value", X))
      }), {
        default: gs(() => {
          var X, R, _, U;
          return [
            O("option", {
              value: "",
              disabled: D.selectFirstOptionDisabled,
              selected: !D.value
            }, se(((R = (X = D.text) == null ? void 0 : X.select) == null ? void 0 : R.toUpperCase()) ?? "SELECT"), 9, Na),
            D.multiEdit ? (y(), T("option", Ua, se(((U = (_ = D.text) == null ? void 0 : _.delete) == null ? void 0 : U.toUpperCase()) ?? "DELETE"), 1)) : W("", !0),
            (y(!0), T(we, null, $e(P.value, (ee) => (y(), T("option", {
              key: ee.value,
              hidden: ee.hidden,
              value: ee.value,
              disabled: ee.disabled
            }, se(ee.label), 9, za))), 128))
          ];
        }),
        _: 1
      }, 16)) : W("", !0),
      ne("last") ? (y(), ye(on, {
        key: 4,
        id: a.value,
        label: D.label,
        required: D.required
      }, null, 8, ["id", "label", "required"])) : W("", !0),
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
    const e = i, s = t, n = N(!1), r = te(() => e.extraType + "Options"), o = te(() => {
      var v;
      if (!((v = e.allOptions) != null && v.length)) return "auto";
      const h = e.allOptions.length;
      return h ? `repeat(${h + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), l = (h, p) => {
      s("update-all", e.shape, e.extraType, h, p);
    }, a = (h, p, v) => {
      s("set", e.shape, e.extraType, h, p, v);
    }, c = (h, p, v, P, q) => {
      var Y;
      if (!h) return [];
      const E = (Y = p == null ? void 0 : p[v]) == null ? void 0 : Y[P];
      if (!E)
        return console.error(`ExtrasInputs: cannot find pricing options for ${v} > ${P}`), [];
      const w = Object.values(E);
      if (!w.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${v} > ${P}`), [];
      const Z = w.filter((ce) => typeof ce == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(h, Z, q) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, f = (h) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const p = e.getPrice(e.shape, e.extraType, h);
      return p ? e.formatPrice(p) : "";
    }, g = () => {
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
      ), h.length && (n.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + h.map((p) => p.message).join(" ")));
    };
    return ft(() => g()), (h, p) => {
      var P, q, E, w, Z, Y, ce, ne;
      const v = qt("font-awesome-icon");
      return n.value ? W("", !0) : (y(), T("div", {
        key: 0,
        class: Se(["extras group", [h.extraType]]),
        style: xe({ "grid-column-end": "span " + h.partColumns })
      }, [
        h.allOptions.length === 1 && h.allOptions[0].length === 1 ? (y(), T("div", Va, [
          O("div", Ya, se((q = (P = h.allOptions) == null ? void 0 : P[0]) == null ? void 0 : q[0]), 1),
          O("div", null, [
            (E = h.shape) != null && E[r.value] && "all" in h.shape[r.value] ? (y(), ye(Lt, {
              key: 0,
              id: `${h.extraType}-all-${h.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: C(H)("general.all"),
              "true-value": (Z = (w = h.allOptions) == null ? void 0 : w[0]) == null ? void 0 : Z[0],
              "false-value": "",
              value: (ce = h.shape[r.value].all) == null ? void 0 : ce[(Y = h.labels) == null ? void 0 : Y[0]],
              "onUpdate:value": p[0] || (p[0] = (I) => {
                var S, A;
                a("all", (S = h.labels) == null ? void 0 : S[0], I), l((A = h.labels) == null ? void 0 : A[0], I);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : W("", !0)
          ]),
          (y(!0), T(we, null, $e(h.extraKeys, (I) => {
            var S, A, V, D, F, X;
            return y(), T("div", { key: I }, [
              (S = h.labels) != null && S[0] && ((V = (A = h.shape) == null ? void 0 : A[r.value]) != null && V[I]) && h.labels[0] in h.shape[r.value][I] ? (y(), ye(Lt, {
                key: 0,
                id: `${h.extraType}-${I}-${h.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: C(H)(((D = h.userFriendlyFieldMap) == null ? void 0 : D[I]) || I),
                "true-value": (X = (F = h.allOptions) == null ? void 0 : F[0]) == null ? void 0 : X[0],
                "false-value": "",
                value: h.shape[r.value][I][h.labels[0]],
                "onUpdate:value": (R) => a(I, h.labels[0], R)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : W("", !0)
            ]);
          }), 128))
        ])) : (y(), T("div", {
          key: 1,
          class: "grid inputs",
          style: xe({
            "grid-template-columns": o.value
          })
        }, [
          (ne = h.shape) != null && ne[r.value] && "all" in h.shape[r.value] ? (y(), T(we, { key: 0 }, [
            O("div", Xa, se(C(H)("general.all")), 1),
            (y(!0), T(we, null, $e(h.allOptions, (I, S) => {
              var A, V;
              return y(), ye(Lt, {
                id: `${h.extraType}-all-${h.labels[S]}-${S}-${h.shapeIndex}`,
                key: `${h.extraType}-all-${h.labels[S]}-${S}-${h.shapeIndex}`,
                type: "select",
                disabled: c(h.pricing, h.shape, r.value, "all", S).length === 0,
                options: c(h.pricing, h.shape, r.value, "all", S).map((D) => ({ value: D, label: D })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (V = h.shape[r.value].all) == null ? void 0 : V[(A = h.labels) == null ? void 0 : A[S]],
                "onUpdate:value": (D) => {
                  var F, X;
                  a("all", (F = h.labels) == null ? void 0 : F[S], D), l((X = h.labels) == null ? void 0 : X[S], D);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            p[2] || (p[2] = O("div", null, null, -1)),
            p[3] || (p[3] = O("div", null, null, -1))
          ], 64)) : W("", !0),
          (y(!0), T(we, null, $e(h.extraKeys, (I) => {
            var S, A;
            return y(), T(we, { key: I }, [
              (S = h.shape) != null && S[r.value] && I in h.shape[r.value] ? (y(), T(we, { key: 0 }, [
                O("div", Ka, se(C(H)(((A = h.userFriendlyFieldMap) == null ? void 0 : A[I]) || I)), 1),
                (y(!0), T(we, null, $e(h.allOptions, (V, D) => {
                  var F;
                  return y(), ye(Lt, {
                    id: `${h.extraType}-${I}-${h.labels[D]}-${D}-${h.shapeIndex}`,
                    key: `${h.extraType}-${I}-${h.labels[D]}-${D}-${h.shapeIndex}`,
                    type: "select",
                    disabled: c(h.pricing, h.shape, r.value, I, D).length === 0,
                    options: c(h.pricing, h.shape, r.value, I, D).map((X) => ({
                      value: X,
                      label: X
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: h.shape[r.value][I][(F = h.labels) == null ? void 0 : F[D]],
                    "onUpdate:value": (X) => {
                      var R;
                      return a(I, (R = h.labels) == null ? void 0 : R[D], X);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : W("", !0),
              O("div", {
                class: "delete",
                onClick: () => C(As)(h.shape, h.extraType, I)
              }, [
                ve(v, { icon: ["fass", "trash"] })
              ], 8, Za),
              O("div", Ja, se(f(I) || C(H)("general.na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        O("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": `${C(H)("actions.delete")} ${C(qi)(C(H)("woodwork." + h.extraLabel))}`,
          onClick: p[1] || (p[1] = () => C(ua)(h.shape, h.extraType, !0))
        }, [
          ve(v, { icon: ["fass", "trash"] }),
          Kt(" " + se(`${C(H)("actions.delete")} ${C(qi)(C(H)("woodwork." + h.extraLabel))}`), 1)
        ], 8, Qa)
      ], 6));
    };
  }
}), eu = ["id", "disabled"], tu = { class: "icon" }, iu = /* @__PURE__ */ Ae({
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
      var a, c, f, g;
      const l = qt("font-awesome-icon");
      return y(), T("button", {
        id: r.id,
        class: Se(["finish-button", {
          "face-a": (c = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : c.a,
          "face-b": (g = (f = r.inputShape) == null ? void 0 : f.finish) == null ? void 0 : g.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        O("div", tu, [
          ve(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = O("div", { class: "indicator" }, null, -1))
      ], 10, eu);
    };
  }
}), su = Ae({
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
}), nu = ["id", "disabled"];
function ru(i, t, e, s, n, r) {
  const o = qt("font-awesome-icon");
  return y(), T("button", {
    id: i.id,
    class: Se(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    ve(o, { icon: ["fass", "hammer"] })
  ], 10, nu);
}
const ou = /* @__PURE__ */ ii(su, [["render", ru]]), lu = { id: "uploader" }, au = {
  key: 0,
  class: "debug"
}, uu = {
  key: 1,
  class: "selected-files"
}, cu = ["src"], hu = ["onClick"], du = !0, fu = /* @__PURE__ */ Ae({
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
    const e = Pt(() => Promise.resolve().then(() => Zi)), s = N(null), n = N({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (p) => ["image/jpeg", "image/jpg", "image/png"].includes(p.type), a = () => {
      var p;
      (p = s.value) == null || p.click();
    }, c = (p) => {
      const v = p.target, P = v.files;
      if (!P) return;
      const q = Array.from(P), E = q.filter((S) => !l(S));
      if (E.length > 0) {
        const S = E.map((A) => A.name).join(", ");
        alert(`Invalid file type(s): ${S}
Only JPG and PNG files are allowed.`), v.value = "";
        return;
      }
      const w = n.value.files || [];
      if (w.length + q.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), v.value = "";
        return;
      }
      const Y = [...w, ...q], ce = f(Y), ne = Y.map((S, A) => ({
        originalName: S.name,
        newName: `${r.prefix}-${A + 1}-${r.uniqueId}${g(S.name)}`
      })), I = {
        shapeId: r.shapeId,
        files: Y,
        previewUrls: ce,
        metadata: ne
      };
      n.value = I, o("update", I), v.value = "";
    }, f = (p) => p.map((v) => URL.createObjectURL(v)), g = (p) => p.substring(p.lastIndexOf(".")), h = (p) => {
      URL.revokeObjectURL(n.value.previewUrls[p]);
      const v = [...n.value.files], P = [...n.value.previewUrls], q = [...n.value.metadata];
      if (v.splice(p, 1), P.splice(p, 1), q.splice(p, 1), v.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const E = {
          shapeId: r.shapeId,
          files: v,
          previewUrls: P,
          metadata: q
        };
        n.value = E, o("update", E);
      }
    };
    return Ur(() => {
      var p;
      (p = n.value) != null && p.previewUrls && n.value.previewUrls.forEach((v) => URL.revokeObjectURL(v));
    }), ft(() => {
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
      var q;
      const P = qt("font-awesome-icon");
      return y(), T("div", lu, [
        i.env === "development" && du ? (y(), T("div", au, [
          ve(C(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        O("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: c
        }, null, 544),
        O("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          ve(P, { icon: ["fass", "files"] })
        ]),
        (q = n.value.files) != null && q.length ? (y(), T("div", uu, [
          (y(!0), T(we, null, $e(n.value.files, (E, w) => (y(), T("div", {
            key: w,
            class: "selected-file"
          }, [
            O("img", {
              src: n.value.previewUrls[w],
              alt: "Preview"
            }, null, 8, cu),
            O("button", {
              class: "remove-file",
              type: "button",
              onClick: (Z) => h(w)
            }, [
              ve(P, { icon: ["fass", "trash"] })
            ], 8, hu)
          ]))), 128))
        ])) : W("", !0)
      ]);
    };
  }
}), pu = /* @__PURE__ */ ii(fu, [["__scopeId", "data-v-0836e586"]]);
function gu(i) {
  var a, c;
  const t = i.x, e = i.x + i.l, s = it().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = it().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(Fi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(Fi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((c = (a = i == null ? void 0 : i.stock) == null ? void 0 : a.saw) == null ? void 0 : c.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function mu() {
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
    e === "x" ? vu.call(this, r, o, t[n]) : yu.call(this, r, o, t[n]);
  });
}
function vu(i, t, e) {
  const s = it().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = or(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Fi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var c, f;
    return ((f = (c = a[l]) == null ? void 0 : c.getBBox()) == null ? void 0 : f.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function yu(i, t, e) {
  const s = it().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = or(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(_i(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  bu(r), this.axes.cutMeasurementYAxes.push(r);
}
function or(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function bu(i) {
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
function wu() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Ki() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Su() {
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
    (i) => i.append("text").attr("class", "shape-text length").text((t) => un.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((t) => un.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text width").text((t) => cn.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (t, e, s) => {
      const n = s[e], r = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    }),
    (i) => i.text((t) => cn.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("transform", (t, e, s) => {
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
function un(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : x({ v: i.l, o: this.numberConfig }).toString();
}
function cn(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : x({ v: i.w, o: this.numberConfig }).toString();
}
function xu(i) {
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
  return ku.call(this, t, i), Cu.call(this, t, i), !!(t != null && t.length);
}
function ku(i, t) {
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
function Cu(i, t) {
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
const Iu = (i) => i.id;
function Pu() {
  if (!this.props.containerWidth) return;
  gi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && Du.call(this), Tu.call(this);
}
function Tu() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Iu).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return hn.call(this, t), dn.call(this, t), t.on("mousedown", fn.bind(this)), t;
    },
    (i) => (hn.call(this, i), dn.call(this, i), i.on("mousedown", fn.bind(this)), i),
    (i) => i.remove()
  ), Mu.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Su.call(this)), this.selections.shapeWrappers.size() > 0;
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
  this.scales.scoreColorScale = ci([ht(251, 224, 255), ht(122, 0, 138)]).domain([e, s]);
}
function hn(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => mi.call(this, e));
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
  this.state.env === "development" && $u.call(this, i, t), (this.settings.app || this.settings.embed) && Eu.call(this, i, t), this.state.device === "desktop" && (Ki.call(this), gu.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
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
    console.table(Au(t, e)), console.log(t.bestScore.score);
  }
}
function Au(i, t) {
  return t.reduce((e, s) => {
    const n = Yu(i, s);
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
function Eu(i, t) {
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
  const t = ht(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (i.addedAsGroup)
          return ht(43, 156, 16);
        if (i.guillotineData.firstShape)
          return ht(255, 171, 231);
        if (typeof i.guillotineData.myPhase == "number") {
          const r = [0, 115, 255], o = [176, 255, 231];
          return `rgb(${r.map((a, c) => Math.round(a + i.guillotineData.myPhase / 5 * (o[c] - a))).join(",")})`;
        }
        break;
      case "groups":
        if (i.addedAsGroup !== !1)
          return ht(43, 156, 16);
        break;
      case "priorityShapes":
        if (i != null && i.priority && ((n = i.priority) != null && n[i.stock.parentID]))
          return ht(139, 171, 46);
        break;
      case "score": {
        const r = this.scales.scoreColorScale(i.bestScore.total);
        return r != null && typeof r.toString == "function" ? r : r != null && typeof r.r == "number" && typeof r.g == "number" && typeof r.b == "number" ? (console.warn("Detected corrupted score color object from scale:", r, "for shape:", i), ht(r.r, r.g, r.b, r.opacity ?? 1)) : (console.warn("Score color scale returned null, undefined, or unexpected value:", r, "for shape:", i), t);
      }
    }
  const e = parseInt(i.parentID);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(e) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? ht(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", i, s), t);
}
function Ru(i) {
  const t = [];
  for (const e of i)
    if (e.added && (e != null && e._banding))
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = Lu.call(this, s));
        const o = Fu.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function pn(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Ai.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Ai.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Ai.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Ai.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Mu(i) {
  if (!this.settings.main) return;
  const t = Ru.call(this, i);
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
function Ai(i, t) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[t]) ?? 0;
}
function Fu(i, t) {
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
function _u(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const gn = (i) => i.id;
function mn(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function vn(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function qu() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), mu.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], gn).join(
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
  ), this.state.env === "development" && Bu.call(this, s), !this.settings.app && this.state.env === "development" && ju.call(this);
}
function bn(i) {
  return i.classed("offcut", (t) => t.offcut).classed("near", (t) => t.segmentType === "near").classed("far", (t) => t.segmentType === "far").classed("parent", (t, e) => t.id !== "root" && e === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function Bu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, lr).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => wn.call(this, e)),
    (t) => t.call((e) => wn.call(this, e)),
    (t) => t.remove()
  );
}
function wn(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function ju() {
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
const { currentCutIndex: ur } = ys();
function Hu() {
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
function cr(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function hr(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function Gu(i, t, e, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] || !s && r.guillotineData.parentSegmentID === t ? "visible" : "hidden"), ur.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (r) => {
    var o;
    return (o = r == null ? void 0 : r.ptxData) == null ? void 0 : o.isDummy;
  }), s || Nu.call(this, i, t);
}
function Wu(i, t, e, s, n) {
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
  }), gi.call(this), Ki.call(this);
}
function Nu(i, t) {
  var g, h, p, v;
  const e = (g = i == null ? void 0 : i.guillotineData) == null ? void 0 : g.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (P) => cr(P, t, e)), this.selections.cutLines.classed("inside-segment", (P) => hr(P, t));
  const s = ar.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = fr(i, r);
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
  ], a = [(h = i == null ? void 0 : i.distances) == null ? void 0 : h.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      i.x1 + c,
      n.x + n.l
    ]
  ], a = [(p = i == null ? void 0 : i.distances) == null ? void 0 : p.left, (v = i == null ? void 0 : i.distances) == null ? void 0 : v.right]), this.state.device === "desktop" && !i.isTrim && a && rr.call(this, l, a, f);
}
function Uu(i = null, t = "") {
  var p, v, P, q;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const E = this.props.cuts.value.filter((w) => w.isTrim);
    i = i + E.length, i - E.length >= this.props.cuts.value.length - E.length && (ur.value = this.props.cuts.value.length - E.length - 1);
  }
  const e = this.props.cuts.value[i];
  if (!e) return;
  if (gi.call(this), Ki.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const E = this.selections.cutLines.nodes()[i].parentElement;
    if (!E) return;
    Fe(E).raise();
  }
  const s = (p = e.guillotineData) == null ? void 0 : p.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (v = e == null ? void 0 : e.stock) == null ? void 0 : v.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((P = e == null ? void 0 : e.stock) == null ? void 0 : P.cutType) && s !== null && typeof s < "u" ? Gu.call(this, e, s, l, t) : Wu.call(this, e, i, o, r, n), zu.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = ar.call(this, e);
  if (a === !1) return;
  const { parent: c, children: f } = a;
  if (!((q = e == null ? void 0 : e.guillotineData) != null && q.parentSegmentID))
    return yn.call(this, { parent: c });
  const { near: g, far: h } = fr(e, f);
  yn.call(this, { parent: c, near: g, far: h });
}
function fr(i, t) {
  const e = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = t.find((o) => o.segmentType === "near" && o[e] + o[s] === i[e + "1"] - i.halfBladeWidth()), r = t.find((o) => o.segmentType === "far" && o[e] === i[e + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function zu(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (cr(s, e, l) || hr(s, e)) && (o += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Vu(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Yu(i, t) {
  return Pe(i, t);
}
class Xu {
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
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Fe(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: it(),
      yScale: it(),
      yPositionScale: it(),
      xPositionScale: it(),
      yAxisScale: it(),
      measurementScale: it(),
      shapeColorScale: ci(),
      scoreColorScale: ci()
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
    }, s = (n, r) => ht("#" + (Vu(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = ci([
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
      let c = a.text();
      const f = a.node();
      if (!f) return;
      let g = f.getComputedTextLength();
      const h = this.getWidthAttribute(n) - 20;
      for (; g > h && c.length > 0; )
        c = c.slice(0, -1), a.text(c.length ? c + "..." : ""), g = a.node().getComputedTextLength();
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
    Pu.call(this);
  }
  drawStock() {
    qu.call(this);
  }
  drawCuts() {
    Hu.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), gi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), wu.call(this);
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
    var a, c;
    if (this.settings.app) {
      const f = this.scales.measurementScale(t.l), g = this.scales.measurementScale(t.w);
      return f < 50 || g < 50;
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
    _u.call(this);
  }
  drawPositions(t) {
    xu.call(this, t);
  }
  showCut(t) {
    Uu.call(this, t);
  }
  resetCuts() {
    dr.call(this);
  }
}
const Ku = ["id"], Zu = /* @__PURE__ */ Ae({
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
    moveMode: { default: () => N(!1) }
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
      getSegments: g,
      getCuts: h
    } = ys(), p = i, v = e, P = (ie) => {
      v("part-click", ie);
    }, q = (ie) => {
      v("shape-colour-update", ie);
    }, E = (ie) => {
      ie != null && ie.id && v("shape-select", ie.id.toString());
    }, w = (ie) => {
      ie && v("add-to-parts-bin", ie);
    }, Z = (ie, Ue) => {
      ie && v("move-shape", ie, Ue);
    }, Y = N(0), ce = N(0), ne = N(null);
    let I, S = N(!1);
    ft(() => _());
    const A = te(() => ({
      format: p.numberFormat,
      decimals: p.decimalPlaces
    })), V = te(() => p.stockId ? c(p.stockId) : n.value), D = te(() => p.stockId ? f(p.stockId) : r.value), F = te(() => p.main ? p.stockId ? h(p.stockId) : o.value : []), X = te(() => p.main ? p.stockId ? g(p.stockId) : l.value : []);
    In(ne, (ie) => {
      const Ue = ie[0], { width: re } = Ue.contentRect;
      re > 0 && (Y.value = re);
    }), zr(
      Y,
      (ie) => {
        I && (ie <= 0 || (I.setDevice(), I.resetShapeAxes(), I.drawAll(), a.value !== null && (I.toggleSegments(!0), I.showCut(a.value))));
      },
      { throttle: 100 }
    );
    let R = !1;
    Te(() => V.value, (ie) => {
      ie && (Y.value <= 0 || (R = !0, I.setDevice(), I.resetCuts(), I.removeSegments(), I.drawStock(), I.drawShapes(), I.drawCuts(), nt(() => {
        R = !1;
      })));
    }, { immediate: !1 }), Te(() => D.value, (ie) => {
      R || ie && (Y.value <= 0 || (I.setDevice(), I.drawShapes()));
    }, { immediate: !1, deep: !0 }), p.main && (Te(() => F.value, () => {
      R || Y.value <= 0 || I.drawCuts();
    }, { immediate: !1, deep: !0 }), Te(a, () => {
      a.value !== null && (Y.value <= 0 || (I.toggleSegments(!0), I.showCut(a.value)));
    }, { immediate: !1 }), Te(A, (ie) => {
      I.updateNumberFormat(ie.format, ie.decimals, null);
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
          containerHeight: ce,
          containerWidth: Y,
          stock: V,
          shapes: D,
          cuts: F,
          segments: X,
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
          onShapeColourUpdate: q,
          onShapeSelect: E,
          onAddToPartsBin: w,
          onMoveShape: Z,
          onPartClick: P
        }
      };
      I = new Xu(ie), S.value = !0;
    };
    return t({
      loaded: S,
      toggleShapes: (ie = !1) => {
        I && I.toggleShapes(ie);
      },
      toggleCuts: (ie = !1) => {
        I && I.toggleCuts(ie);
      },
      toggleSegments: (ie = !1) => {
        I && I.toggleSegments(ie);
      },
      drawShapes: () => {
        I && I.drawShapes();
      },
      drawStock: () => {
        I && I.drawStock();
      },
      drawPositions: (ie) => {
        I && I.drawPositions(ie);
      },
      resetPositions: () => {
        I && I.removePositions();
      },
      findShape: (ie) => {
        I && I.findShape(ie);
      },
      clearSelection: () => {
        I && I.clearSelection();
      },
      resetCuts: () => {
        I && (I.toggleSegments(!1), I.resetCuts());
      },
      showCut: (ie) => {
        I && (I.toggleSegments(!0), I.showCut(ie));
      },
      requiresStretch: (ie) => {
        I && I.requiresStretch(ie);
      }
    }), (ie, Ue) => (y(), T("div", {
      id: ie.elementId,
      ref_key: "diagramContainerRef",
      ref: ne,
      class: Se([{ app: ie.app }, "diagram-container"])
    }, null, 10, Ku));
  }
}), Ju = {
  key: 0,
  class: "debug"
}, Qu = { key: 2 }, ec = {
  key: 0,
  class: "row table-heading"
}, tc = {
  key: 0,
  class: "cell center"
}, ic = {
  key: 1,
  class: "cell delete"
}, sc = { class: "cell" }, nc = ["id", "disabled", "onClick"], rc = {
  key: 0,
  class: "cell center"
}, oc = ["onClick"], lc = {
  key: 1,
  class: "cell"
}, ac = ["aria-label", "onClick"], uc = { class: "button-wrapper main" }, cc = ["aria-label"], hc = ["aria-label", "disabled"], dc = ["aria-label"], fc = { id: "part-count" }, pc = {
  key: 3,
  id: "messages"
}, gc = {
  key: 0,
  class: "heading"
}, mc = { class: "content" }, vc = {
  key: 4,
  id: "progress"
}, yc = { id: "diagram-wrapper" }, bc = {
  key: 0,
  id: "stack"
}, wc = !1, Sc = /* @__PURE__ */ Ae({
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
    const s = Pt(() => Promise.resolve().then(() => Ec)), n = Pt(() => Promise.resolve().then(() => Mc)), r = Pt(() => Promise.resolve().then(() => eh)), o = Pt(() => Promise.resolve().then(() => oh)), l = Pt(() => Promise.resolve().then(() => Zi)), { inputs: a, totalInputShapes: c, getShapeGrainSummary: f, updateNumberFormat: g, validateInputStock: h } = Pn(), { r: p, updateFromResult: v, stackedStock: P, uniqueAddedShapes: q, uniqueUsedStock: E, activeStockId: w, activeStock: Z, setActiveStockId: Y } = ys(), { progress: ce, reset: ne } = oo(), { addNotice: I } = vs(), { tip: S, update: A, hide: V } = no(), D = i, F = e, X = N(!1), R = "production", _ = N((navigator == null ? void 0 : navigator.language) || "en-US"), U = Vr(null), ee = window.location.hostname, oe = N(!1), ke = N(!0), De = Yr("Checkout/currentURL", window.location.href), qe = ds(), Ne = N([]), rt = N(!1), ot = N(!1), M = N(!1), si = N(!1), Wt = N(!1), ie = N(Xl()), Ue = N(!1), { socket: re } = ro({
      refs: {
        connected: oe,
        thinking: M
      },
      callbacks: {
        onResult(d) {
          var $, j, z, ae, ue;
          const m = d.result;
          if (v(m), !(($ = m.shapeList) != null && $.length) || !((j = m.stockList) != null && j.length)) {
            ne(), I({
              type: "error",
              message: H("errors.calculation.no_result"),
              additional: [H("errors.validation.check_inputs")]
            }), M.value = !1;
            return;
          }
          const b = {
            jobId: d.jobId,
            metadata: p.metadata.value,
            parts: q.value.map((B) => {
              var K, pe, G;
              return {
                l: B.l,
                w: B.w,
                t: B == null ? void 0 : B.t,
                material: B.material,
                orientationLock: B.orientationLock,
                q: (pe = (K = p.metadata.value) == null ? void 0 : K.addedPartTally) == null ? void 0 : pe[B.parentID],
                name: B.name,
                banding: B.banding,
                finish: B.finish,
                customData: B.customData,
                stockId: ((G = B == null ? void 0 : B.stock) == null ? void 0 : G.id) || (B == null ? void 0 : B.stockId)
              };
            }),
            stock: E.value.map((B) => {
              var K, pe;
              return {
                id: B.id,
                name: B == null ? void 0 : B.name,
                l: B.l,
                w: B.w,
                t: B == null ? void 0 : B.t,
                material: B.material,
                q: (pe = (K = p.metadata.value) == null ? void 0 : K.usedStockTally) == null ? void 0 : pe[B.parentID],
                trim: B == null ? void 0 : B.trim,
                cost: B == null ? void 0 : B.cost,
                analysis: B == null ? void 0 : B.analysis
                // type: s?.type
              };
            }),
            offcuts: p.offcuts.value.map((B) => ({
              l: B.l,
              w: B.w,
              t: (B == null ? void 0 : B.t) ?? null,
              q: B.q,
              stockId: B.stockId
            })),
            inputs: {
              parts: a.inputShapes.value.map((B) => {
                const K = { ...B };
                return delete K.listId, K;
              })
            }
          };
          if ((ue = (ae = (z = p == null ? void 0 : p.metadata) == null ? void 0 : z.value) == null ? void 0 : ae.unplacedParts) != null && ue.length) {
            const B = p.metadata.value.unplacedParts.map((K) => K.id).join();
            I({
              type: "warning",
              message: H("woodwork.parts_not_fit") + ": " + B
            });
          }
          F("result", b), M.value = !1;
        },
        onUser(d) {
          U.value = d;
        },
        onConnectError(d) {
          I({
            type: "error",
            message: H("errors.network.cannot_connect"),
            additional: [d]
          });
        },
        onError(d) {
          I({
            type: "error",
            message: H("errors.general.error_occurred"),
            additional: [d]
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
    }, Q = vt(Be), he = vt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), lt = N(null), pt = N(!1), ni = N(""), yi = N(""), ze = vt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Ve = N([]), je = N([]), Ot = N([]), Ze = vt({
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
    }), Oe = vt({
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
    }), Nt = N([]), bi = te(() => {
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
          output: Q.numberFormat === "decimal" ? "number" : "string",
          label: "woodwork.thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "woodwork.length",
          min: (Q == null ? void 0 : Q.minDimension) ?? 0,
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
          min: (Q == null ? void 0 : Q.minDimension) ?? 0,
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
    }), St = te(() => ka(
      ri,
      bi.value,
      "parts",
      he.stockType,
      Q.fieldOrder
    )), L = te(() => {
      let d = St.value.length + 1;
      return a.inputShapes.value.length > 1 && d++, d;
    }), J = te(() => {
      const d = {
        id: "34px",
        del: "30px"
      }, m = [];
      for (const b of St.value)
        b.id !== "trim" && m.push(b.w ?? "minmax(20px, 1fr)");
      return m.unshift(d.id), a.inputShapes.value.length > 1 && m.push(d.del), m.join(" ");
    }), fe = te(() => ({
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
    })), Ce = te(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), Xe = te(() => {
      var d, m;
      return U.value ? !(U.value && ((m = (d = U.value) == null ? void 0 : d.api) != null && m.whiteLabel)) : !0;
    }), Re = {
      stockType: (d) => {
        const m = ["sheet", "linear", "roll"];
        m.includes(d) || console.warn(`${d} is not a valid stockType, expected ${m.join("|")}`), he.stockType = d, d === "linear" && (he.cutType = null, he.cutPreference = null);
      },
      stockSelection: (d) => {
        const m = ["efficiency", "smallest"];
        d && !m.includes(d) ? console.warn(`${d} is not a valid stockSelection, expected ${m.join("|")}`) : he.options.stockSelection = d;
      },
      minSpacing: (d) => {
        he.options.minSpacing = d;
      },
      stackHeight: (d) => {
        he.stackHeight = d;
      },
      cutPreference: (d) => {
        const m = ["efficiency", "length", "width", "beam"];
        if (m.includes(d)) {
          const { cutType: b, cutPreference: $ } = rs(d);
          he.cutType = b, he.cutPreference = $;
        } else
          console.warn(`SmartCut - cut preference ${d || "N/A"} is not one of ${m.join("|")}`);
      },
      guillotineOptions: (d) => {
        he.guillotineOptions = d;
      },
      bladeWidth: (d) => {
        d >= 0 ? he.bladeWidth = d : console.warn(`SmartCut - you provided an incorrect blade width of: ${d}`);
      },
      maxParts: (d) => {
        Q.maxParts = d;
      },
      locale: (d) => {
        _.value = d.replace(/_/g, "-");
      },
      enable: (d) => {
        const m = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in Be.enable)
          b in d && (Q.enable[b] = d[b]);
        for (const b in m)
          He(b, Ct(d, [m[b]]) ?? Be.enable[m[b]]);
        Wt.value = Ct(d, ["csvImport"]) ?? Be.enable.csvImport;
      },
      colors: (d) => {
        for (const m in Be.colors)
          m in d && (Q.colors[m] = d[m]);
      },
      orientationModel: (d) => {
        if (![0, 1, 2].includes(d)) {
          Q.orientationModel = 0;
          return;
        }
        Q.orientationModel = d;
      },
      numberFormat: (d) => {
        if (!["decimal", "fraction"].includes(d)) {
          Q.numberFormat = "decimal";
          return;
        }
        Q.numberFormat = d;
      },
      customFields: (d) => {
        if (!Array.isArray(d) || !(d != null && d.length)) return;
        const m = [];
        d.forEach((b, $) => {
          m.push(b), m[$].custom = !0;
          const j = at(b.id);
          m[$].id = j, m[$].fieldMap = "customData." + j, b.type === "checkbox" && (m[$].w = "32px"), b.type === "select" && (m[$].output = b.output ?? "string", m[$].options = b.options);
        }), Nt.value = m;
        for (const b of a.inputShapes.value)
          b.customData = d.reduce(($, j) => {
            const z = at(j.id);
            return $[z] = b.customData[z] || j.default || "", $;
          }, {});
      }
    }, Et = (d) => {
      if (D.debug && F("log", ["checkout init...", d]), d != null && d.options) {
        const b = d.options;
        ha(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((z) => {
          z in b || F("error", `${z} is a required option`);
        });
        const j = ["enable", "colors"];
        for (const z in b)
          j.includes(z) || (Q[z] = b[z]), z in Re && Re[z](b[z]);
      }
      d.colors && "colors" in Re && Re.colors(d.colors), Hs("banding", d), Hs("finish", d), Ut(d), vr(d), ot.value = !0, D.debug && F("log", ["init complete"]);
      const m = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(m), nt(() => {
        Xe.value && !xr() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, wi = (d, m) => {
      d && (d.orientationLock = m);
    }, He = (d, m = !1) => {
      Sa(ri, "parts", he.stockType, d, m);
    }, at = (d) => d ? vo(d).toLowerCase() : null, Ge = (d, m, b, $) => {
      if (m.valid) {
        if (V(), b && $) {
          const j = b.issues.findIndex((z) => z.field.some((ae) => ae.length === $.length && ae.every((ue, B) => ue === $[B])));
          j !== -1 && b.issues.splice(j, 1);
        }
      } else
        A({
          referenceEl: d,
          show: !0,
          content: H(`errors.field_validation.${m.message}`),
          type: "error"
        });
    }, Ut = (d) => {
      var m, b, $, j, z;
      if (Ct(Q, ["enable", "machining"]) && d != null && d.machining) {
        for (const ae in Ze)
          d.machining[ae] && (Ze[ae] = d.machining[ae]);
        if (["holes", "hingeHoles"].forEach((ae) => {
          var ue, B;
          (ue = d == null ? void 0 : d.machining) != null && ue[ae] && (Ze[ae].enabled = (B = d == null ? void 0 : d.machining) == null ? void 0 : B[ae].enabled);
        }), ($ = (b = (m = d == null ? void 0 : d.machining) == null ? void 0 : m.corners) == null ? void 0 : b.types) != null && $.length && (Ze.corners.enabled = !0, Ze.corners.types = d.machining.corners.types), d.banding && ((z = (j = d == null ? void 0 : d.options) == null ? void 0 : j.enable) != null && z.banding)) {
          if (!be) return;
          Ze.banding = {
            enabled: !0
          }, be.options.length && (Ze.banding.options = be.options), be.labels.length && (Ze.banding.labels = be.labels), ei(be.pricing) && (Ze.banding.pricing = be.pricing);
        }
      }
    }, Ji = (d = null) => {
      lt.value = d, d && d.l && d.w ? X.value = !0 : alert(H("machining.enter_dimensions_first"));
    }, pr = () => {
      X.value = !1;
    }, Es = (d = []) => {
      if (je.value = [], Ot.value = [], He("t", !1), !!d.length) {
        for (const m of d)
          if (m != null && m.t)
            if (typeof m.t == "string" && m.t.includes(",")) {
              const b = Rs(m.t, !0);
              b.length === 2 ? (yr(b), He("t", !0), m.t = je.value[0]) : F("error", "bonded thickness found which does not have 2 options");
            } else je.value.includes(m.t) || je.value.push(m.t);
        je.value.length > 1 && He("t", !0);
      }
    }, gr = (d) => {
      var j;
      if (!d) return { thicknesses: [], bondedThicknesses: [] };
      if (!((j = Ve.value) != null && j.length))
        return {
          thicknesses: je.value,
          bondedThicknesses: []
        };
      if (!d.material) return { thicknesses: [], bondedThicknesses: [] };
      const m = Ve.value.find((z) => z.name === d.material);
      if (!m) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...m.thicknesses], $ = [];
      for (let z = 0; z < b.length; z++) {
        const ae = b[z], ue = Rs(ae), B = [];
        if (ue.length) {
          for (const K of ue)
            b[z] = K, B.push(z);
          z++;
        }
        B.length && $.push(B);
      }
      return {
        thicknesses: b,
        bondedThicknesses: $
      };
    }, mr = (d) => gr(d).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), vr = (d) => {
      var m, b;
      if ((m = d == null ? void 0 : d.stock) != null && m.some(($) => $ == null ? void 0 : $.material)) {
        Ve.value = [], je.value = [], Ot.value = [];
        const $ = /* @__PURE__ */ new Map();
        for (const j of d.stock) {
          if (!j.material) continue;
          const z = j.material.toUpperCase();
          $.has(z) || $.set(z, /* @__PURE__ */ new Set()), j.t != null && ((b = $.get(z)) == null || b.add(x({ v: j.t })));
        }
        Ve.value = Array.from($.entries()).map(([j, z]) => ({
          name: j,
          thicknesses: Array.from(z).sort((ue, B) => ue - B)
        })), Ve.value.length > 1 && He("material", !0);
      } else
        Es(d.stock);
    }, yr = (d, m = null) => {
      if (!Array.isArray(d)) {
        F("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let $ of d)
        Q.numberFormat === "decimal" && ($ = parseFloat($)), je.value.push($), m && m.thicknesses.push($), b.push(je.value.length - 1);
      Ot.value.push(b);
    }, Rs = (d, m = !1) => {
      if (typeof d == "string" && d.includes(",")) {
        const b = d.split(",");
        return m ? b.map(($) => x({ v: $ })) : b;
      }
      return [];
    }, br = () => {
      Ue.value ? Sr() : wr();
    }, wr = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Ue.value = !0;
    }, Sr = () => {
      document.exitFullscreen && document.exitFullscreen(), Ue.value = !1;
    }, xr = () => {
      var $, j;
      if ((j = ($ = U.value) == null ? void 0 : $.api) != null && j.whiteLabel) return !0;
      let d = !0;
      const m = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [m, b].forEach((z, ae) => {
        if (!z) return d = !1;
        const ue = window.getComputedStyle(z);
        if (ue.display === "none" || ue.display === "hidden" || ue.opacity === "0" || ue.color === "transparent" || ue.position !== "relative" || ae === 1 && ue.color !== "#4e4e4e" && ue.color !== "rgb(78, 78, 78)")
          return d = !1;
      }), ke.value = d, d;
    }, Ms = (d, m, b, $, j) => {
      Os(
        d,
        m,
        b,
        $,
        j,
        D.findExtrasPrice
      );
    }, Fs = (d, m, b, $) => {
      nr(
        d,
        m,
        b,
        $,
        m === "banding" ? vi : [],
        D.findExtrasPrice
      );
    }, Si = (d, m) => {
      const b = m === "banding" ? be == null ? void 0 : be.labels : Oe == null ? void 0 : Oe.labels;
      aa(d, m, b);
      const $ = $s(m);
      if (d != null && d[$])
        for (const j in d[$]) {
          const z = Ui(d, m, j, D.findExtrasPrice);
          z === !1 && j && d[m][j] && new le({
            item: d,
            field: [[m, j]],
            type: "error",
            message: H("option_not_available", { x: d[m][j], y: H(m) })
          }), pi(d, m, j, !!z);
        }
    }, _s = (d) => {
      const m = Object.keys(d);
      return Math.max(...m.map(($) => $.split("|").length));
    }, qs = (d) => {
      const m = [], b = Object.keys(d), $ = _s(d);
      for (let j = $; j--; ) m.push(/* @__PURE__ */ new Set());
      for (const j of b)
        j.split("|").forEach((ae, ue) => m[ue].add(ae));
      for (let j = 0; j < $; j++)
        m[j] = Array.from(m[j]);
      return m;
    }, xi = (d, m = [], b) => {
      if (!d) return [];
      if (b > 0 && !m[b - 1]) return [];
      const $ = /* @__PURE__ */ new Set();
      for (const j of Object.keys(d)) {
        const z = j.split("|");
        if (z.length > b) {
          let ae = !0;
          for (let ue = 0; ue < b; ue++)
            if (m[ue] && z[ue] !== m[ue]) {
              ae = !1;
              break;
            }
          ae && $.add(z[b]);
        }
      }
      return Array.from($);
    }, ki = (d, m, b) => Ui(
      d,
      m,
      b,
      D.findExtrasPrice
    ), kr = (d) => {
      const m = Ne.value.findIndex((b) => b.shapeId === d.shapeId);
      m !== -1 ? Ne.value[m] = d : Ne.value.push(d), window.smartcutImages = Ne.value;
    }, Cr = (d) => {
      Ne.value = Ne.value.filter((m) => m.shapeId !== d), window.smartcutImages = Ne.value;
    }, Bs = (d = 1) => {
      for (let m = d; m--; ) {
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
    }, Ir = (d) => {
      var b;
      if (a.inputShapes.value.length === 1) return;
      const m = a.inputShapes.value[d].listId;
      a.inputShapes.value.splice(d, 1), ((b = lt.value) == null ? void 0 : b.listId) === m && (lt.value = null), ne();
    }, oi = (d = {
      l: null,
      w: he.stockType === "linear" ? ((m) => (m = a.inputStock.value[0]) == null ? void 0 : m.w)() : null,
      t: je.value.length ? je.value[0] : null,
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
      var j, z;
      d.id = (a.inputShapes.value.length + 1).toString();
      const $ = new fi(d, Q.numberFormat);
      return (j = be == null ? void 0 : be.labels) != null && j.length && Si($, "banding"), (z = Oe == null ? void 0 : Oe.labels) != null && z.length && Si($, "finish"), $;
    }, Pr = (d) => {
      if (je.value.length)
        for (const m of d) {
          if (!m.t) return;
          const b = je.value.findIndex(
            (z) => x({ v: z }) === m.t
          ), $ = Ot.value.find((z) => z.includes(b));
          if (!$) return;
          const j = Math.min(
            ...$.map((z) => je.value[z])
          );
          x({ v: m.t }) > j && (m.q = m.q * (x({ v: m.t }) / j), m.notes = `Bond to form ${m.t.valueOf()}`, m.t = j);
        }
    }, js = () => {
      ne(), Y(null), p.stockList.value = [], p.shapeList.value = [], p.cutList.value = [];
    }, Qi = () => {
      a.inputShapes.value.length = 0;
    }, Tr = async () => {
      if (F("calculating"), M.value) return !1;
      M.value = !0, si.value = !1;
      const d = a.inputShapes.value.map((ae) => new fi(ae));
      Pr(d);
      const { valid: m, saw: b, stockList: $, shapeList: j } = await oa({
        t: H,
        partTrim: Q.partTrim,
        maxShapes: Q.maxParts,
        orientationModel: Q.orientationModel,
        sawData: he,
        inputShapes: d,
        onLimit: () => {
          I({
            type: "error",
            message: H("limits.max_parts") + " " + Q.maxParts
          });
        }
      });
      if (!m) {
        F("validation-error"), M.value = !1;
        return;
      }
      js(), D.debug && console.log(
        "SmartCut - calculating",
        "stock",
        $.map((ae) => ae.dimensions),
        "parts",
        j.map((ae) => ae.dimensions)
      );
      const z = {
        inputs: {
          parts: d,
          stock: a.inputStock.value,
          saw: b
        },
        saw: b,
        shapeList: j,
        stockList: $,
        enableEvo: !0,
        domain: ee
      };
      await re.connect(), re.emit("calculate", z);
    }, Hs = (d, m) => {
      var pe;
      if (He(d, !1), !d || !m || !(m != null && m[d]) || !Ct(Q, ["enable", d])) return;
      const b = [d, "pricing"];
      if (!Qs(m, b)) {
        F("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const $ = Ct(m, b);
      if (typeof $ != "object") {
        F("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!ei($)) {
        F("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const j = Object.keys($), z = Object.values($);
      if (!j.length) {
        F("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const ae = /,/;
      for (const G of j)
        if (ae.test(G)) {
          F("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (z.some((G) => isNaN(G))) {
        F("error", `${b} values must be a number`);
        return;
      }
      const ue = _s($), B = [d, "labels"];
      let K = [];
      if (Qs(m, B))
        K = Ct(m, B);
      else {
        F("error", `${B.join(".")} not found`);
        return;
      }
      if (!K) {
        F("error", `${B.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(K)) {
        F("error", `${B.join(".")} data must be an array`);
        return;
      }
      if (!(K != null && K.length)) {
        F("error", `if provided, ${B.join(".")} data must contain values`);
        return;
      }
      if (K.length !== ue) {
        F("error", `${B.join(".")} length (${K.length}) must match the number of levels in ${b.join(".")} (${ue})`);
        return;
      }
      switch (d) {
        case "banding":
          be.labels = K, be.pricing = $, be.options = qs($);
          break;
        case "finish":
          Oe.labels = K, Oe.pricing = $, Oe.options = qs($);
          break;
      }
      if (He(d, !0), !!((pe = a.inputShapes.value) != null && pe.length))
        for (const G of a.inputShapes.value)
          Si(G, d);
    }, Ci = (d, m) => {
      if (!m) return;
      d !== "info" && Object.keys(ze).forEach(($) => {
        $ !== d && $ !== "info" && (ze[$] = null);
      });
      const b = a.inputShapes.value.indexOf(m);
      ze[d] === b ? (lt.value = null, ze[d] = null) : (lt.value = m, ze[d] = b);
    }, Gs = (d) => {
      if (F("log", ["load event received"]), !ot.value) {
        F("log", ["load event received"]);
        return;
      }
      Dr(d.detail);
    }, Dr = (d) => {
      var $, j, z;
      if (F("log", ["loading parts..."]), !d || !((j = ($ = d == null ? void 0 : d.inputs) == null ? void 0 : $.parts) != null && j.length)) {
        F("log", ["could not find any parts to import"]);
        return;
      }
      a.inputShapes.value.length = 0;
      let m = 0;
      for (const ae of d.inputs.parts) {
        const ue = oi(ae);
        ue ? (a.inputShapes.value.push(ue), (z = ue.issues) != null && z.length && F("log", [`SmartCut - issues found while importing part at index ${m}`, ue.issues])) : F("log", [`SmartCut - error loading part at index ${m}`, ae]), m++;
      }
      a.inputShapes.value.flatMap((ae) => It(ae.issues)).length && I({
        type: "error",
        message: H("errors.general.issues_found")
      }), F("log", [`loaded ${a.inputShapes.value.length} parts`]);
    }, Lr = (d) => {
      a.inputShapes.value.length = 0, nt(() => {
        var m, b;
        for (const $ of d)
          $.t = ((b = (m = a.inputStock.value) == null ? void 0 : m[0]) == null ? void 0 : b.t) ?? null, a.inputShapes.value.push(oi($));
      });
    };
    Te(() => D.stock, (d) => {
      if (js(), Array.isArray(d) || console.warn("SmartCut - stock must be passed as an array"), !!(d != null && d.length)) {
        a.inputStock.value.length = 0, Ve.value.length || Es(d);
        for (const m of d) {
          const b = new Is({
            ...m,
            autoAdd: !0,
            id: (a.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, Q.numberFormat);
          a.inputStock.value.push(b);
        }
        if (a.inputStock.value.length) {
          a.inputShapes.value.length ? nt(() => {
            a.inputShapes.value.forEach((b) => {
              if (b.material) {
                const $ = Ve.value.find((j) => j.name === b.material);
                $ && ($.thicknesses.includes(x({ v: b.t })) || (b.t = x({ v: $.thicknesses[0] })));
              } else b.t || (b.t = x({ v: a.inputStock.value[0].t }));
            });
          }) : D.inputType !== "formula" && nt(() => Bs(1));
          const m = h(he);
          m.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(m))), I({
            type: "error",
            message: H("errors.validation.stock_issue"),
            additional: m.map((b) => b.message)
          }));
        }
      }
    }, { immediate: !0 }), Te(a.inputShapes, (d) => {
      F("inputs-changed"), d.forEach((m) => {
        var $;
        he.stockType === "linear" && (m.w = ($ = a.inputShapes.value[0]) == null ? void 0 : $.w);
        const b = Ve.value.find((j) => j.name === m.material);
        b && (b.thicknesses.includes(x({ v: m.t })) || (m.t = x({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), Te(() => Q.numberFormat, (d) => {
      g(d);
    }), ft(async () => {
      if (rt.value) return;
      const d = new URL(window.location.href), m = d.searchParams.toString(), b = d.origin + d.pathname + (m ? `?${m}` : "");
      De.value !== b && Qi(), De.value = b, _.value = Q.locale, await re.connect(), re.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Gs), rt.value = !0, D.debug && F("log", [
        "ready...",
        "fields:",
        St.value.map(($) => $.id)
      ]);
    });
    const $r = () => {
      re && re.disconnect();
    };
    return zi(() => {
      window.removeEventListener("smartcut/load", Gs), $r(), delete window.smartcutCheckout;
    }), t({
      init: Et,
      clear: Qi,
      getAvailablePricingOptions: xi,
      getExtrasPrice: ki,
      formatPrice: D.formatPrice,
      findExtrasPrice: D.findExtrasPrice,
      inputShapes: a.inputShapes,
      initExtrasOptions: Si,
      createInputShape: oi
    }), (d, m) => {
      var $, j, z, ae, ue, B;
      const b = qt("font-awesome-icon");
      return y(), T(we, null, [
        ve(C(s), {
          content: C(S).content,
          type: C(S).type,
          show: C(S).show,
          "reference-el": C(S).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        C(R) === "development" && wc ? (y(), T("div", Ju, [
          m[5] || (m[5] = O("div", null, "Developer information", -1)),
          O("div", null, se(Q.enable.focus), 1),
          ve(C(l), {
            data: [C(a).inputShapes.value[0]],
            paths: ["inputs.inputShapes"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        ($ = lt.value) != null && $.machining && X.value ? (y(), ye(C(r), {
          key: 1,
          shape: lt.value,
          "onUpdate:shape": m[0] || (m[0] = (K) => lt.value = K),
          translate: !0,
          options: Ze,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": ki,
          "get-available-pricing-options": xi,
          "format-price": i.formatPrice,
          onClose: pr
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : W("", !0),
        ot.value ? W("", !0) : (y(), T("div", Qu, [
          ve(nn, {
            size: 50,
            "show-number": !1
          })
        ])),
        ot.value ? (y(), T("div", {
          key: 3,
          id: "smartcut-checkout",
          class: Se({ fullscreen: Ue.value })
        }, [
          ie.value && !i.readonly ? (y(), T("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: m[1] || (m[1] = (K) => br())
          }, [
            ve(b, { icon: ["fass", "expand"] }),
            Kt(" " + se(C(H)("general.full_screen")), 1)
          ])) : W("", !0),
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
            }, se(C(mo)(C(H)("general.powered_by"))), 5)
          ], 4)) : W("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: xe({ "grid-template-columns": J.value })
          }, [
            C(a).inputShapes.value.length ? (y(), T("div", ec, [
              m[6] || (m[6] = O("div", { class: "cell id" }, null, -1)),
              (y(!0), T(we, null, $e(St.value, (K) => (y(), T("div", {
                key: K.id,
                class: Se(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(K.id) || K.type === "checkbox" }])
              }, se(C(H)(K.label)), 3))), 128)),
              C(R) === "development" ? (y(), T("div", tc, " Info ")) : W("", !0),
              C(a).inputShapes.value.length > 1 ? (y(), T("div", ic)) : W("", !0)
            ])) : W("", !0),
            (y(!0), T(we, null, $e(C(a).inputShapes.value, (K, pe) => (y(), T("div", {
              key: pe,
              class: "row inputs"
            }, [
              O("div", sc, [
                O("div", {
                  class: "id",
                  style: xe({
                    background: Q.colors.partA,
                    color: Q.colors.text
                  })
                }, se(pe + 1), 5)
              ]),
              (y(!0), T(we, null, $e(St.value, (G) => (y(), T("div", {
                key: G.fieldMap,
                class: Se(["cell", [`${G.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(G.id) || G.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(G.id) ? G.id === "orientationLock" ? (y(), ye(Pa, {
                  key: 1,
                  id: "orientation-" + pe,
                  rectangle: K,
                  disabled: i.readonly,
                  "stock-grain": C(f)(K),
                  "button-background": Q.colors.button,
                  "icon-color": Q.colors.buttonText,
                  "orientation-model": Q.orientationModel,
                  onUpdateOrientation: (gt) => wi(K, gt)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : G.id === "banding" ? (y(), ye(Da, {
                  key: 2,
                  id: "banding-" + pe,
                  "input-shape": K,
                  disabled: i.readonly,
                  "stock-grain": C(f)(K),
                  open: ze.banding === pe,
                  "orientation-model": Q.orientationModel,
                  onClicked: (gt) => Ci("banding", K)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : G.id === "finish" ? (y(), ye(iu, {
                  key: 3,
                  id: "finish-" + pe,
                  "input-shape": K,
                  disabled: i.readonly,
                  open: ze.finish === pe,
                  onClicked: (gt) => Ci("finish", K)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : G.fieldMap === "machining" && ie.value ? (y(), ye(ou, {
                  key: 4,
                  id: "machining-" + pe,
                  disabled: i.readonly,
                  "input-shape": K,
                  onOpen: (gt) => Ji(K)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : G.fieldMap === "imageUpload" ? (y(), T("button", {
                  key: 5,
                  id: "image-upload-" + pe,
                  type: "button",
                  disabled: i.readonly,
                  class: Se({ selected: ze.info === pe }),
                  onClick: (gt) => Ci("imageUpload", K)
                }, [
                  ve(b, { icon: ["fass", "image"] })
                ], 10, nc)) : W("", !0) : (y(), ye(Lt, {
                  key: 0,
                  id: G.id + "-" + pe,
                  focus: !i.readonly && Q.enable.focus && pe === C(a).inputShapes.value.length - 1 && G.id === "l",
                  issue: C(Xs)(K, [G.fieldMap]),
                  warning: C(Xs)(K, [G.fieldMap], !0),
                  type: G.type,
                  output: G.output,
                  label: G != null && G.label ? C(H)(G.label) : null,
                  placeholder: G != null && G.placeholder ? C(H)(G.placeholder) : null,
                  "enable-label": !1,
                  "number-format": Q.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (G == null ? void 0 : G.required) ?? !1,
                  "allow-zero": (G == null ? void 0 : G.allowZero) ?? !0,
                  options: G.id === "t" ? mr(K) : G == null ? void 0 : G.options,
                  "true-value": G == null ? void 0 : G.trueValue,
                  "false-value": G == null ? void 0 : G.falseValue,
                  default: G == null ? void 0 : G.default,
                  min: typeof (G == null ? void 0 : G.min) == "number" ? G.min : null,
                  max: typeof (G == null ? void 0 : G.max) == "number" ? G.max : null,
                  custom: G == null ? void 0 : G.custom,
                  value: C(Ct)(K, G == null ? void 0 : G.fieldMap),
                  text: {
                    delete: C(ns)(C(H)("actions.delete")),
                    select: C(ns)(C(H)("actions.select"))
                  },
                  onValidation: (gt, Ar) => Ge(gt, Ar, K, [G.fieldMap]),
                  "onUpdate:value": (gt) => {
                    G.fieldMap && C(er)(K, G.fieldMap, gt);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              C(R) === "development" ? (y(), T("div", rc, [
                O("button", {
                  type: "button",
                  class: Se({ selected: ze.info === pe }),
                  onClick: (G) => Ci("info", K)
                }, " i ", 10, oc)
              ])) : W("", !0),
              C(a).inputShapes.value.length > 1 ? (y(), T("div", lc, [
                O("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": `${C(H)("actions.remove")} ${C(qi)(C(H)("woodwork.part"))}`,
                  onClick: (G) => Ir(pe)
                }, [
                  ve(b, { icon: ["fass", "trash"] })
                ], 8, ac)
              ])) : W("", !0),
              ve(C(n), {
                item: K,
                "num-columns": L.value
              }, null, 8, ["item", "num-columns"]),
              ze.banding === pe && be.options.length > 0 ? (y(), ye(hs, {
                key: 2,
                shape: K,
                "shape-index": pe,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": C(_e),
                "part-columns": L.value,
                "get-price": ki,
                "format-price": i.formatPrice,
                "orientation-model": Q.orientationModel,
                "get-available-pricing-options": xi,
                onUpdateAll: Fs,
                onSet: Ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : W("", !0),
              ze.finish === pe && Oe.options.length > 0 ? (y(), ye(hs, {
                key: 3,
                shape: K,
                "shape-index": pe,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Oe.keys,
                "all-options": Oe.options,
                pricing: Oe.pricing,
                labels: Oe.labels,
                "user-friendly-field-map": C(_e),
                "part-columns": L.value,
                "get-price": ki,
                "format-price": i.formatPrice,
                "orientation-model": Q.orientationModel,
                "get-available-pricing-options": xi,
                onUpdateAll: Fs,
                onSet: Ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : W("", !0),
              ze.info === pe ? (y(), T("div", {
                key: 4,
                id: "shape-info",
                style: xe({ "grid-column-end": "span " + L.value })
              }, [
                ve(C(l), {
                  data: [K == null ? void 0 : K.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : W("", !0),
              ze.imageUpload === pe ? (y(), ye(pu, {
                key: 5,
                prefix: (pe + 1).toString(),
                "unique-id": C(qe),
                "shape-id": K.listId,
                style: xe({ "grid-column-end": "span " + L.value }),
                images: Ne.value,
                onUpdate: kr,
                onRemove: Cr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : W("", !0)
            ]))), 128))
          ], 4),
          O("div", uc, [
            i.readonly ? W("", !0) : (y(), T("button", {
              key: 0,
              type: "button",
              "aria-label": `${C(H)("actions.add")} ${C(H)("woodwork.part")}`,
              style: xe({ background: Q.colors.button, color: Q.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: m[2] || (m[2] = (K) => Bs(1))
            }, [
              ve(b, { icon: ["fass", "plus-large"] }),
              Kt(" " + se(`${C(H)("actions.add")} ${C(H)("woodwork.part")}`), 1)
            ], 12, cc)),
            O("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": C(H)("actions.calculate"),
              style: xe({
                background: Q.colors.button,
                color: Q.colors.buttonText
              }),
              disabled: !((j = C(a).inputStock.value) != null && j.length) || M.value,
              onClick: m[3] || (m[3] = (K) => Tr())
            }, [
              ve(b, { icon: ["fass", "calculator"] }),
              Kt(se(C(H)("actions.calculate")), 1)
            ], 12, hc),
            i.readonly ? W("", !0) : (y(), T("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": C(H)("actions.clear"),
              onClick: m[4] || (m[4] = (K) => Qi())
            }, [
              ve(b, { icon: ["fass", "trash"] })
            ], 8, dc)),
            O("div", fc, se(C(c)) + se(Q != null && Q.maxParts ? "/" + Q.maxParts : ""), 1)
          ]),
          Wt.value && !i.readonly ? (y(), ye(C(o), {
            key: 2,
            ref: "import",
            "number-format": Q.numberFormat,
            "custom-fields": Nt.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": Oe.options,
            "finish-labels": Oe.labels,
            onImport: Lr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : W("", !0),
          pt.value ? (y(), T("div", pc, [
            ni.value ? (y(), T("div", gc, se(ni.value), 1)) : W("", !0),
            O("pre", mc, se(yi.value), 1)
          ])) : W("", !0),
          (Q.enable.diagram ? M.value && !C(ce).complete : M.value || C(ce).complete) ? (y(), T("div", vc, [
            ve(nn, {
              size: 50,
              number: C(ce).shapeCount,
              complete: C(ce).complete,
              "show-number": Q.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : W("", !0),
          fs(O("div", yc, [
            ((ae = (z = C(Z)) == null ? void 0 : z.saw) == null ? void 0 : ae.stockType) !== "roll" ? (y(), T("div", bc, se((ue = C(Z)) != null && ue.stack ? (B = C(Z)) == null ? void 0 : B.stack : 1), 1)) : W("", !0),
            ve(Zu, {
              "element-id": "diagram",
              "number-format": Q.numberFormat,
              "decimal-places": Q.decimalPlaces,
              colors: Q.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [ps, Q.enable.diagram && C(ce).complete]
          ]),
          Q.enable.diagram && C(P).length > 1 && C(ce).complete ? (y(), ye(ga, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": C(w),
            "stock-list": C(P),
            onShowStock: C(Y)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : W("", !0)
        ], 2)) : W("", !0)
      ], 64);
    };
  }
}), jh = /* @__PURE__ */ ii(Sc, [["__scopeId", "data-v-7a4f6d4f"]]), xc = {
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
}, kc = { class: "smartcut-object-viewer" }, Cc = ["onClick"], Ic = { class: "toggle-icon" }, Pc = { class: "path-label" }, Tc = {
  key: 0,
  class: "object-properties"
}, Dc = { class: "key" };
function Lc(i, t, e, s, n, r) {
  return y(), T("div", kc, [
    (y(!0), T(we, null, $e(e.data, (o, l) => (y(), T("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        O("div", Ic, se(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", Pc, se(e.paths[l] || l), 1)
      ], 8, Cc),
      n.expanded[l] ? (y(), T("div", Tc, [
        (y(!0), T(we, null, $e(o, (a, c) => (y(), T("div", {
          key: c,
          class: "property-item"
        }, [
          O("div", Dc, se(c) + ": ", 1),
          O("div", {
            class: Se(["value", r.getValueType(a)])
          }, se(r.formatValue(a)), 3)
        ]))), 128))
      ])) : W("", !0)
    ]))), 128))
  ]);
}
const $c = /* @__PURE__ */ ii(xc, [["render", Lc]]), Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: $c }, Symbol.toStringTag, { value: "Module" })), Ac = ["data-placement"], Oc = /* @__PURE__ */ Ae({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = N(null), s = N(null), n = te(() => ({
      getBoundingClientRect: () => {
        var g;
        return ((g = t.referenceEl) == null ? void 0 : g.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      qr(8),
      Br({
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
    ], { floatingStyles: o, middlewareData: l, placement: a } = Xr(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (g, h, p) => _r(
          g,
          h,
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
      const { x: g, y: h } = l.value.arrow, p = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: g != null ? `${g}px` : void 0,
        top: h != null ? `${h}px` : void 0,
        [p]: "-4px"
      };
    });
    return (g, h) => (y(), ye(ms, { to: "body" }, [
      ve(Kr, { name: "fade" }, {
        default: gs(() => [
          g.show && g.referenceEl ? (y(), T("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: Se(["tooltip", g.type]),
            style: xe(c.value),
            "data-placement": C(a)
          }, [
            Kt(se(g.content) + " ", 1),
            O("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: xe(f.value)
            }, null, 4)
          ], 14, Ac)) : W("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Oc }, Symbol.toStringTag, { value: "Module" })), Rc = /* @__PURE__ */ Ae({
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
          O("pre", null, se(t.item.issues.filter((a) => a.type === "error").flatMap((a) => C(Jt)(a.message)).join(`
`)), 1)
        ], 4)) : W("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (y(), T("div", {
          key: 1,
          class: "group warnings",
          style: xe({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          O("pre", null, se(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => C(Jt)(a.message)).join(`
`)), 1)
        ], 4)) : W("", !0)
      ], 64);
    };
  }
}), Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Rc }, Symbol.toStringTag, { value: "Module" })), Ye = {
  precisionFixed: po,
  format: fo,
  select: Fe,
  selectAll: Ln,
  scaleLinear: it,
  scaleSequential: ci,
  axisTop: Tn,
  axisBottom: Fi,
  axisRight: Dn,
  axisLeft: _i,
  symbol: ho,
  path: co,
  arc: uo,
  symbolTriangle: ao,
  symbolSquare: lo
};
class Fc {
  constructor({
    HTMLElement: t,
    vueComponent: e = null,
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
    u(this, "xScale", Ye.scaleLinear());
    u(this, "yScale", Ye.scaleLinear());
    u(this, "yScaleFlipped", Ye.scaleLinear());
    u(this, "measurementScale", Ye.scaleLinear());
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
    const o = Ye.path(), l = this.shape.machining.corners, a = [], c = [];
    [0, 1, 2, 3].forEach((g) => {
      const h = l[g];
      h && h.type ? (a.push(h.size ? x({ v: h.size ?? 0, o: this }) : 0), c.push(h.type)) : (a.push(0), c.push(null));
    });
    const f = (g, h, p, v, P) => {
      c[g] === "radius" ? o.arcTo(
        this.xScale(h),
        this.getYScale()(p),
        this.xScale(v),
        this.getYScale()(P),
        this.measurementScale(a[g])
      ) : c[g] === "bevel" ? o.lineTo(this.xScale(v), this.getYScale()(P)) : (o.lineTo(this.xScale(h), this.getYScale()(p)), o.lineTo(this.xScale(v), this.getYScale()(P)));
    };
    o.moveTo(this.xScale(0), this.getYScale()(a[0])), f(0, 0, 0, a[0], 0), (c[0] === "bevel" || c[1] === "bevel") && o.lineTo(this.xScale(this.shapeL - a[1]), this.getYScale()(0)), f(1, this.shapeL, 0, this.shapeL, a[1]), (c[1] === "bevel" || c[2] === "bevel") && o.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - a[2])
    ), f(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - a[2],
      this.shapeW
    ), (c[2] === "bevel" || c[3] === "bevel") && o.lineTo(this.xScale(a[3]), this.getYScale()(this.shapeW)), f(3, 0, this.shapeW, 0, this.shapeW - a[3]), o.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", o.toString());
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
    this.shape.machining.corners.forEach((a, c) => {
      if (!a.type) return;
      let f, g, h;
      switch (c) {
        case 0:
          if (!k(t.a) || t.a === !1) return;
          f = {
            x: this.xScale(0) - e,
            y: this.getYScale()(x({ v: a.size ?? 0, o: this }))
          }, g = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(x({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!k(t.b) || t.b === !1) return;
          f = {
            x: this.xScale(this.shapeL - x({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, g = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(x({ v: a.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!k(t.c) || t.c === !1) return;
          f = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - x({ v: a.size ?? 0, o: this }))
          }, g = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - x({ v: a.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!k(t.d) || t.d === !1) return;
          f = {
            x: this.xScale(x({ v: a.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, g = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - x({ v: a.size ?? 0, o: this })) + e
          };
          break;
        default:
          return;
      }
      if (l.moveTo(f.x, f.y), a.type === "radius")
        switch (l.arcTo(
          g.x,
          g.y,
          h.x,
          h.y,
          this.measurementScale(a.size ?? 0)
        ), c) {
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
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][c]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", l.toString());
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
const _c = { id: "machining" }, qc = { class: "inputs" }, Bc = {
  key: 0,
  class: "debug"
}, jc = {
  key: 1,
  class: "shape-name"
}, Hc = { class: "shape-dimensions" }, Gc = {
  key: 2,
  class: "sides-wrapper"
}, Wc = { class: "menu" }, Nc = { class: "button-wrapper" }, Uc = { class: "row table-heading" }, zc = {
  key: 0,
  class: "cell id"
}, Vc = {
  key: 0,
  class: "cell"
}, Yc = { class: "id" }, Xc = ["onClick"], Kc = { class: "remove" }, Zc = { key: 6 }, Jc = !1, Qc = /* @__PURE__ */ Ae({
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
    var ni, yi, ze, Ve, je, Ot, Ze, be, Oe, ri, Nt, bi, St;
    const e = Pt(() => Promise.resolve().then(() => Zi)), s = i, n = t, r = "production", o = N(), l = te(() => ks(M.value)), a = te(() => {
      var J;
      if (!((J = g.value) != null && J.length)) return 0;
      if (re.value === "banding") return 1;
      let L = Object.values(f.value).filter((fe) => fe.enabled).length;
      return L += 2, L;
    }), c = te(() => {
      if (!g.value.length || re.value === "banding") return;
      const L = {
        id: "34px",
        del: "30px"
      }, J = [];
      return g.value.forEach((fe) => {
        const Ce = f.value[fe];
        Ce.enabled && J.push(Ce.w ?? "1fr");
      }), J.unshift(L.id), J.push(L.del), J.join(" ");
    }), f = te(() => !re.value || re.value === "banding" ? null : Q[re.value]), g = te(() => !re.value || re.value === "banding" ? [] : Object.keys(Q[re.value]).filter((L) => Q[re.value][L].enabled)), h = te(() => re.value ? Z() : []), p = te(() => {
      var J, fe, Ce, Xe;
      const L = ((Xe = (Ce = (fe = (J = M.value) == null ? void 0 : J.machining) == null ? void 0 : fe.corners) == null ? void 0 : Ce.map((Re) => {
        var Et;
        return (Et = Re == null ? void 0 : Re.isPresent) != null && Et.call(Re) ? Re.getCorner() : null;
      })) == null ? void 0 : Xe.filter((Re) => Re)) ?? [];
      return [...bt, ...L];
    }), v = (L = !0) => {
      L ? ie.value = L : nt(() => ie.value = !1);
    }, P = () => {
      D(), F(), X(), R();
    }, q = (L) => {
      if (re.value === "corners")
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
    }, E = () => re.value !== "banding", w = (L, J = null) => {
      if (!(L != null && L.length)) return [];
      let fe = "None";
      J === "depth" && (fe = "Through");
      const Ce = [{ label: fe, value: null }];
      return L.forEach((Xe) => {
        const Re = Xe.toString().charAt(0).toUpperCase() + Xe.toString().slice(1);
        Ce.push({ label: Re, value: Xe });
      }), Ce;
    }, Z = () => {
      if (!re.value) return [];
      if (re.value === "banding") return [];
      const L = M.value.machining[re.value];
      return Array.isArray(L) ? L : [L];
    };
    let Y = null;
    const ce = () => {
      if (!M.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), Y = new Fc({
        HTMLElement: o.value,
        // Use the ref instead of querySelector
        shape: M.value,
        vueComponent: null
      }), Y.init(), Wt.value = !0;
    }, ne = Qr(() => {
      Wt.value && Y && Y.updateSize();
    }, 10);
    In(o, () => {
      ne();
    });
    const I = () => {
      Ue.value = Ue.value === 0 ? 1 : 0, Y.flip();
    }, S = () => {
      switch (re.value) {
        case "holes":
          A();
          break;
        case "hingeHoles":
          V();
          break;
      }
    }, A = () => {
      M.value.machining.createHole(
        x({ v: M.value.getLongSide() }) / 2,
        x({ v: M.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? x({ v: s.shape.t }) ?? 0,
        Ue.value
      ), Y.createHoles();
    }, V = () => {
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
      }), Y.createHingeHoles();
    }, D = () => {
      M.value.machining.holes.length = 0;
    }, F = () => {
      M.value.machining.hingeHoles.length = 0;
    }, X = () => {
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
    }, _ = (L) => {
      switch (re.value) {
        case "holes":
          return M.value.machining.holes.splice(L, 1);
        case "hingeHoles":
          return M.value.machining.hingeHoles.splice(L, 1);
        case "corners":
          M.value.machining.corners[L].size = null, M.value.machining.corners[L].type = null;
          return;
      }
    }, U = () => {
      switch (re.value) {
        case "holes":
          return D();
        case "hingeHoles":
          return F();
        case "corners":
          return X();
      }
    }, ee = () => {
      var L;
      if (Be.value = [], !!s.options.banding.enabled) {
        v();
        for (const J in M.value.banding)
          M.value.banding[J] ? s.options.banding.enableTypes && ((L = s.options.banding.types) != null && L.length) && (M.value.banding[J] || Be.value.push({
            index: J,
            message: "Please select a type"
          })) : M.value.banding[J] = "";
        v(!1);
      }
    }, oe = (L) => {
      const J = Be.value.filter((fe) => fe.index === L);
      return J.length ? J.map((fe) => fe.message) : [];
    }, ke = (L) => {
      const J = Be.value.filter((Ce) => Ce.index === L && (Ce == null ? void 0 : Ce.fields)), fe = J.flatMap((Ce) => Ce.fields);
      return J.length ? fe : [];
    }, De = (L, J) => {
      const fe = ke(L);
      return fe != null && fe.length ? fe.includes(J) : !1;
    }, qe = () => n("close"), Ne = (L) => L && typeof L.disabled == "function" ? L.disabled : !1, rt = (L, J, fe, Ce, Xe) => {
      Os(L, J, fe, Ce, Xe, s.findExtrasPrice);
    }, ot = (L, J, fe, Ce) => {
      nr(
        L,
        J,
        fe,
        Ce,
        [],
        s.findExtrasPrice
      );
    }, M = Jr(i, "shape");
    if (!((ni = M.value) != null && ni.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const si = N(!1), Wt = N(!1), ie = N(!1), Ue = N(0), re = N(null), Be = N([]), Q = vt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: H("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: H("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: (yi = s.options.holes.diameters) != null && yi.length ? "select" : "unitDependent",
          label: H("machining.diameter"),
          output: (ze = s.options.holes.diameters) != null && ze.length ? "float" : void 0,
          options: (Ve = s.options.holes.diameters) != null && Ve.length ? w(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof M.value.t < "u" && x({ v: M.value.t }) > 0,
          required: !1,
          type: (je = s.options.holes.depths) != null && je.length ? "select" : "unitDependent",
          output: (Ot = s.options.holes.depths) != null && Ot.length ? "float" : void 0,
          options: (Ze = s.options.holes.depths) != null && Ze.length ? w(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: H("faces.a"),
              value: 0
            },
            {
              label: H("faces.a"),
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
          label: H("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: H("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: H("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof M.value.t < "u" && x({ v: M.value.t }) > 0,
          required: !1,
          type: (be = s.options.holes.depths) != null && be.length ? "select" : "unitDependent",
          output: (Oe = s.options.holes.depths) != null && Oe.length ? "float" : void 0,
          options: (ri = s.options.holes.depths) != null && ri.length ? w(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (Nt = s.options.holes.diameters) != null && Nt.length ? "select" : "unitDependent",
          label: H("machining.diameter"),
          output: (bi = s.options.holes.diameters) != null && bi.length ? "float" : void 0,
          options: (St = s.options.holes.diameters) != null && St.length ? w(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: H("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: H("faces.a"),
              value: 0
            },
            {
              label: H("faces.b"),
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
              label: H("sides.w1"),
              value: "x1"
            },
            {
              label: H("sides.w2"),
              value: "x2"
            },
            {
              label: H("sides.l1"),
              value: "y1"
            },
            {
              label: H("sides.l2"),
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
          label: H("machining.type"),
          type: "select",
          output: "string",
          options: w(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: H("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? x({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? x({ v: s.options.corners.maxValue, o: s.options }) : x({ v: M.value.getShortSide(), o: s.options }) / 2
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
    }), lt = (L) => {
      L.target === L.currentTarget && qe();
    }, pt = () => {
      var L;
      return !(!((L = M == null ? void 0 : M.value) != null && L.machining) || !si.value || ie.value);
    };
    return Te(() => {
      var L;
      return (L = M.value) == null ? void 0 : L.listId;
    }, () => {
      pt() && ce();
    }), Te(() => {
      var L;
      return (L = M.value) == null ? void 0 : L.id;
    }, () => {
      pt() && ce();
    }), Te(re, (L) => {
      if (pt()) {
        if (L === "banding") {
          v(), ee(), v(!1);
          return;
        }
        if (!L) {
          Be.value = [];
          return;
        }
        v(), Be.value = M.value.machining.validate(
          M.value,
          L,
          he == null ? void 0 : he[L]
        ), L === "hingeHoles" && M.value.machining.hingeHoles.forEach((J, fe) => {
          Gi(J, he == null ? void 0 : he.holes, Be.value, fe);
        }), v(!1);
      }
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L, J;
      return (J = (L = M == null ? void 0 : M.value) == null ? void 0 : L.machining) == null ? void 0 : J.holes;
    }, () => {
      pt() && (v(), Be.value = M.value.machining.validate(
        M.value,
        "holes",
        he == null ? void 0 : he.holes
      ), Y.createHoles(), v(!1));
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L, J;
      return (J = (L = M == null ? void 0 : M.value) == null ? void 0 : L.machining) == null ? void 0 : J.hingeHoles;
    }, () => {
      pt() && (v(), M.value.machining.updateHingeHoles(M.value), Be.value = M.value.machining.validate(
        M.value,
        "hingeHoles",
        he == null ? void 0 : he.hingeHoles
      ), M.value.machining.hingeHoles.forEach((L, J) => {
        Gi(L, he == null ? void 0 : he.holes, Be.value, J);
      }), Y.createHingeHoles(), v(!1));
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L, J;
      return (J = (L = M == null ? void 0 : M.value) == null ? void 0 : L.machining) == null ? void 0 : J.corners;
    }, () => {
      if (pt()) {
        v(), Be.value = M.value.machining.validate(
          M.value,
          "corners",
          he == null ? void 0 : he.corners
        ), M.value.machining.validate(M.value, "holes"), M.value.machining.validate(M.value, "hingeHoles"), Y.createShape(), Y.createHoles(), Y.createHingeHoles();
        for (const L of M.value.machining.corners)
          L.isPresent() || As(M.value, "banding", L.getCorner(), !0);
        Y.createBanding(), v(!1);
      }
    }, { deep: !0, immediate: !0 }), Te(() => {
      var L;
      return (L = M == null ? void 0 : M.value) == null ? void 0 : L.banding;
    }, () => {
      pt() && (ee(), Y.createBanding());
    }, { deep: !0, immediate: !0 }), ft(() => {
      if (document.body.style.overflow = "hidden", !M.value || !M.value.l || !M.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      nt(() => ce()), si.value = !0;
    }), zi(() => document.body.style.overflow = ""), (L, J) => {
      var Ce, Xe, Re, Et, wi;
      const fe = qt("font-awesome-icon");
      return y(), ye(ms, { to: "body" }, [
        O("div", {
          id: "smartcut-machining",
          onClick: lt
        }, [
          O("div", _c, [
            O("div", qc, [
              C(r) === "development" && Jc ? (y(), T("div", Bc, [
                ve(C(e), {
                  data: [M.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : W("", !0),
              O("div", {
                class: "close",
                onClick: qe
              }, "[Close]"),
              (Ce = M.value) != null && Ce.name ? (y(), T("div", jc, se(M.value.name), 1)) : W("", !0),
              O("div", Hc, se((Xe = M.value) == null ? void 0 : Xe.l) + " x " + se((Re = M.value) == null ? void 0 : Re.w) + " " + se((Et = M.value) != null && Et.t ? "x " + ((wi = M.value) == null ? void 0 : wi.t) : null), 1),
              L.options.faces.enabled ? (y(), T("div", Gc, [
                O("div", {
                  ref: "sides",
                  class: Se(["sides", { flipped: Ue.value === 1 }]),
                  onClick: I
                }, J[4] || (J[4] = [
                  O("div", { class: "side-a" }, " A ", -1),
                  O("div", { class: "side-b" }, " B ", -1)
                ]), 2),
                J[5] || (J[5] = O("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : W("", !0),
              l.value ? (y(), T("button", {
                key: 3,
                onClick: P
              }, " Delete all machining ")) : W("", !0),
              O("div", Wc, [
                L.options.holes.enabled ? (y(), T("div", {
                  key: 0,
                  class: Se({ selected: re.value === "holes" }),
                  onClick: J[0] || (J[0] = (He) => re.value = "holes")
                }, " Holes ", 2)) : W("", !0),
                L.options.hingeHoles.enabled ? (y(), T("div", {
                  key: 1,
                  class: Se({ selected: re.value === "hingeHoles" }),
                  onClick: J[1] || (J[1] = (He) => re.value = "hingeHoles")
                }, " Hinge holes ", 2)) : W("", !0),
                L.options.corners.enabled ? (y(), T("div", {
                  key: 2,
                  class: Se({ selected: re.value === "corners" }),
                  onClick: J[2] || (J[2] = (He) => re.value = "corners")
                }, " Corners ", 2)) : W("", !0),
                L.options.banding.enabled ? (y(), T("div", {
                  key: 3,
                  class: Se({ selected: re.value === "banding" }),
                  onClick: J[3] || (J[3] = (He) => re.value = "banding")
                }, " Banding ", 2)) : W("", !0)
              ]),
              O("div", Nc, [
                re.value === "holes" || re.value === "hingeHoles" ? (y(), T("button", {
                  key: 0,
                  type: "button",
                  onClick: S
                }, " Create ")) : W("", !0),
                re.value && re.value !== "banding" ? (y(), T("button", {
                  key: 1,
                  type: "button",
                  onClick: U
                }, " Delete all ")) : W("", !0)
              ]),
              re.value === "banding" && M.value ? (y(), ye(hs, {
                key: 4,
                shape: M.value,
                env: C(r),
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": p.value,
                labels: L.options.banding.labels,
                "all-options": L.options.banding.options,
                pricing: L.options.banding.pricing,
                "user-friendly-field-map": C(_e),
                "part-columns": 1,
                translate: L.translate,
                "orientation-model": 0,
                "get-price": L.getExtrasPrice,
                "format-price": L.formatPrice,
                "get-available-pricing-options": L.getAvailablePricingOptions,
                onSet: rt,
                onUpdateAll: ot
              }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : W("", !0),
              re.value !== "banding" && h.value.length ? (y(), T("div", {
                key: 5,
                class: Se(["grid-table", re.value]),
                style: xe({ "grid-template-columns": c.value })
              }, [
                O("div", Uc, [
                  E() ? (y(), T("div", zc)) : W("", !0),
                  (y(!0), T(we, null, $e(f.value, (He, at, Ge) => fs((y(), T("div", {
                    key: Ge,
                    class: "cell"
                  }, se(He.label ?? at), 1)), [
                    [ps, He.enabled]
                  ])), 128)),
                  J[6] || (J[6] = O("div", { class: "cell del" }, null, -1))
                ]),
                (y(!0), T(we, null, $e(h.value, (He, at) => (y(), T("div", {
                  key: at,
                  class: "row"
                }, [
                  E() ? (y(), T("div", Vc, [
                    O("div", Yc, se(q(at)), 1)
                  ])) : W("", !0),
                  (y(!0), T(we, null, $e(g.value, (Ge, Ut) => (y(), T("div", {
                    key: Ut,
                    class: "cell"
                  }, [
                    ve(Lt, {
                      type: f.value[Ge].type,
                      id: Ge + "-" + Ut,
                      warning: De(at, Ge),
                      "enable-label": !1,
                      placeholder: f.value[Ge].label ?? Ge,
                      disabled: Ne(f.value[Ge]),
                      value: C(Ct)(He, Ge),
                      output: f.value[Ge].output,
                      options: f.value[Ge].options,
                      "onUpdate:value": (Ji) => C(er)(He, Ge, Ji)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", {
                    class: "cell",
                    onClick: (Ge) => _(at)
                  }, [
                    O("div", Kc, [
                      ve(fe, { icon: ["fass", "trash"] })
                    ])
                  ], 8, Xc),
                  (y(!0), T(we, null, $e(oe(at), (Ge, Ut) => (y(), T("div", {
                    key: Ut,
                    class: "group validation",
                    style: xe({ "grid-column-end": "span " + a.value })
                  }, se(Ge), 5))), 128))
                ]))), 128))
              ], 6)) : re.value !== "banding" ? (y(), T("div", Zc, " Please select from the menu above ")) : W("", !0)
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
    O("div", null, se(e.thinking ? "Loading, please wait..." : e.label), 1)
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
    const e = i, s = t, n = N([]), r = N([]), o = N([]), l = N([]), a = N({}), c = N([]), f = N(!1), g = N(null), h = N(null), p = [
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
      return n.value.forEach((_, U) => {
        R[U] = {};
        for (const [ee, oe] of Object.entries(_)) {
          if (!p.includes(ee)) continue;
          const ke = E(ee, oe);
          (ke === !0 || ke === !1) && (R[U][ee] = ke);
        }
      }), R;
    }), P = te(() => e.customFields.map((R) => R.label)), q = (R, _) => {
      if (_) {
        const U = Object.keys(_), ee = [[]];
        U.forEach((ke) => {
          const De = _[ke], qe = [];
          ee.forEach((Ne) => {
            De.forEach((rt) => qe.push([...Ne, rt]));
          }), ee.splice(0, ee.length, ...qe);
        });
        const oe = /* @__PURE__ */ new Set();
        ee.forEach((ke) => oe.add(ke.join("|").toLowerCase())), R === "banding" ? g.value = oe : h.value = oe;
      }
    }, E = (R, _) => {
      if (_ === "???") return !0;
      function U(oe) {
        return oe ? (oe = oe.trim().toLowerCase(), oe === "l" || oe === "w") : !0;
      }
      const ee = {
        banding: (oe) => w(oe, g.value, "banding"),
        finish: (oe) => w(oe, h.value, "finish"),
        orientationLock: U
      };
      return R in ee ? ee[R](_) : null;
    }, w = (R, _, U) => {
      if (R = V(R), !R) return !0;
      const ee = R.split(","), oe = ee.every((ke) => !ke || _.has(ke.toLowerCase()));
      if (!oe) {
        const ke = ee.filter((De) => !_.has(De.toLowerCase()));
        console.log(`Valid ${U} choices...`), console.table(Array.from(_)), console.log(`The following ${U} choices are invalid`, ke);
      }
      return oe;
    }, Z = (R, _) => {
      const U = {
        bandingOptions: (ee) => Y(ee, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (ee) => Y(ee, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return R in U ? U[R](_) : null;
    }, Y = (R, _, U, ee) => {
      if (R = V(R), !R)
        return ee.reduce((De, qe) => ({ ...De, [qe]: {} }), {});
      const oe = R.split(",").map((De) => De.toLowerCase()), ke = {};
      return ee.forEach((De, qe) => {
        ke[De] = {}, Object.keys(_).forEach((Ne, rt) => {
          var ot;
          ke[De][U[rt]] = ((ot = oe[qe]) == null ? void 0 : ot.split("|")[rt]) || "";
        });
      }), ke;
    }, ce = () => n.value.map((R, _) => ({
      l: e.numberFormat === "decimal" ? Ri(R.l) : R.l,
      w: e.numberFormat === "decimal" ? Ri(R.w) : R.w,
      t: e.numberFormat === "decimal" ? Ri(R.t) : R.t,
      q: R.q,
      orientationLock: R.orientationLock,
      name: R.name,
      material: R.material,
      bandingOptions: v.value[_].banding ? Z("bandingOptions", R.banding) : null,
      finishOptions: v.value[_].finish ? Z("finishOptions", R.finish) : null,
      numberFormat: e.numberFormat,
      customData: F(R)
    })), ne = (R) => {
      var U;
      const _ = (U = R == null ? void 0 : R[0]) == null ? void 0 : U.data;
      _ && Hr.parse(_, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (ee) => I(ee),
        error: () => s("error")
      });
    }, I = (R) => {
      r.value = R.data.filter((_) => _.some((U) => U)), o.value = r.value[0], a.value = {};
      for (let _ = o.value.length; _--; ) {
        const U = o.value[_], ee = S(U);
        ee ? a.value[_] = ee : (a.value[_] = null, P.value.includes(U) && (a.value[_] = "customData." + e.customFields.find((oe) => oe.label === U).id));
      }
      A(), r.value.shift(), D(), X();
    }, S = (R) => {
      const _ = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", H("l"), H("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", H("w"), H("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", H("t"), H("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", H("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", H("quantity"), H("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", H("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", H("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", H("banding")],
        finish: ["finish", "paint"]
      }, U = Object.entries(_).reduce(
        (ee, [oe, ke]) => (ke.some((De) => R && R.toLowerCase() === De) && ee.push(oe), ee),
        []
      );
      return U.length > 1 ? null : U[0];
    }, A = () => {
      f.value = !1, l.value = Object.values(a.value).map((_) => !_ || _ === "N" ? null : p.includes(_) ? _ : (f.value = !0, null));
      const R = l.value.filter((_, U) => l.value.indexOf(_) !== U);
      c.value = R.map((_) => l.value.reduce(
        (U, ee, oe) => (ee && ee === _ && U.push(oe), U),
        []
      ));
    }, V = (R) => R && R.replace(/\s*,\s*/g, ","), D = () => {
      const R = r.value.map((_) => {
        const U = {};
        return o.value.forEach((ee, oe) => {
          if (c.value.flat().includes(oe))
            return U[a.value[oe]] = "???";
          U[a.value[oe]] = _[oe];
        }), U;
      });
      n.value = R;
    }, F = (R) => {
      let _ = {};
      for (let U in R)
        if (U.startsWith("customData.")) {
          let ee = U.slice(11);
          _[ee] = R[U];
        }
      return _;
    }, X = () => {
      const R = ce();
      R != null && R.length && s("import", R);
    };
    return ft(() => {
      q("banding", e.bandingOptions), q("finish", e.finishOptions);
    }), (R, _) => (y(), T("div", nh, [
      ve(sh, {
        label: C(H)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: ne
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
    u(this, "url");
    u(this, "spec");
    // Update the operations object to use the FormulaOperation type
    u(this, "operations", {
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
        const P = n[c];
        if (P)
          return f === "q" ? P.q : P[f];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const g = t.nodes.get(a);
      if (typeof g.formula == "number")
        return r.set(a, g.formula), g.formula;
      o.add(a);
      const h = t.edges.get(a) || /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
      for (const P of h)
        if (P.startsWith("input.")) {
          const q = P.split(".")[1];
          p.set(P, s[q]);
        } else
          p.set(P, l(P));
      const v = this.evaluateFormulaWithDeps(g.formula, p, s);
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
}, ah = { id: "formula-pricing" }, uh = {
  key: 1,
  class: "extras"
}, ch = { class: "heading" }, hh = { id: "hardware-total" }, dh = { class: "heading panels" }, fh = !1, ph = /* @__PURE__ */ Ae({
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
    const e = Pt(() => Promise.resolve().then(() => Zi)), s = i, n = t, r = io("calculator"), o = te(() => r()), l = N("production");
    let a = null;
    const c = N(null), f = N([]), g = N(!1), h = N(""), p = te(() => {
      if (!g.value || !f.value.length || f.value.every((I) => I.value === null)) return null;
      const ne = Z();
      return nt(() => n("panel-result", ne)), ne;
    }), v = te(() => {
      if (!o.value || !g.value || !f.value.length || f.value.every((I) => I.value === null)) return;
      const ne = Y();
      return nt(() => n("hardware-result", ne, P.value)), ne;
    }), P = te(() => {
      if (v.value)
        return Object.values(v.value).reduce((ne, I) => ne + I.totalCost, 0);
    });
    Te(p, (ne) => {
      var V, D, F;
      if (!g.value || !ne || !o.value || !((V = o.value) != null && V.inputShapes)) return;
      const I = (X) => X != null && X.name ? X.name.toLowerCase() : "", S = new Map(
        o.value.inputShapes.map((X) => [I(X), X])
      ), A = /* @__PURE__ */ new Set();
      for (const X of Object.values(p.value)) {
        if (!X.name) continue;
        const R = I(X), _ = S.get(R), U = {
          ...X,
          name: X.name.toUpperCase() || (_ == null ? void 0 : _.name.toUpperCase()),
          material: ((D = X.material) == null ? void 0 : D.toUpperCase()) || ((F = _ == null ? void 0 : _.material) == null ? void 0 : F.toUpperCase()),
          bandingOptions: X.bandingOptions || {},
          finishOptions: X.finishOptions || {},
          orientationLock: X.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, ee = _ || o.value.createInputShape(U);
        if (_) {
          Object.assign(_, U);
          for (const oe of ["banding", "finish"])
            o.value.initExtrasOptions(_, oe);
        } else
          o.value.inputShapes.push(ee);
        A.add(R);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (X) => A.has(I(X))
      );
    }, { immediate: !1 }), ft(() => ce());
    const q = (ne) => {
      s.debug && console.log(ne);
    }, E = () => {
      f.value = Object.values(c.value.inputs).map((ne) => ({
        value: ne.default ?? null
      })), console.log(f.value);
    }, w = (ne, I) => {
      f.value[ne] && (f.value[ne].value = I);
    }, Z = () => {
      try {
        return a.calculatePanelsFromFields(f.value);
      } catch (ne) {
        return o.value.inputShapes.length = 0, console.error(ne), null;
      }
    }, Y = () => {
      try {
        return a.calculateHardwareFromFields(f.value);
      } catch (ne) {
        return console.error(ne), null;
      }
    }, ce = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (q(`SmartCut - Formula calculator init from url: ${s.url}`), a = new xn({ url: s.url }), c.value = await a.getSpec()) : s.spec && (q("SmartCut - Formula calculator init with JSON"), a = new xn({ spec: s.spec }), c.value = await a.getSpec()), E(), g.value = !0;
    };
    return (ne, I) => {
      var S, A;
      return y(), T(we, null, [
        l.value === "development" && fh ? (y(), T("div", lh, [
          I[1] || (I[1] = O("div", null, "Developer information", -1)),
          ve(C(e), {
            data: [p.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : W("", !0),
        O("div", ah, [
          (S = c.value) != null && S.projectName ? (y(), ye(Lt, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: h.value,
            "onUpdate:value": I[0] || (I[0] = (V) => h.value = V)
          }, null, 8, ["value"])) : W("", !0),
          (y(!0), T(we, null, $e((A = c.value) == null ? void 0 : A.inputs, (V, D, F) => {
            var X;
            return y(), ye(Lt, {
              id: "formula-field-" + F,
              key: F,
              type: V.type,
              label: V.label,
              placeholder: V.label,
              min: V.min ?? 0,
              max: V.max ?? null,
              default: V.default ?? 0,
              value: (X = f.value[F]) == null ? void 0 : X.value,
              "onUpdate:value": (R) => w(F, R)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          v.value ? (y(), T("div", uh, [
            O("div", ch, se(C(H)("Hardware")), 1),
            (y(!0), T(we, null, $e(v.value, (V, D) => (y(), T("div", { key: D }, se(V.name) + " x" + se(V.q) + " = " + se(i.formatPrice(V.totalCost)), 1))), 128)),
            O("div", hh, se(C(H)("Hardware total")) + " = " + se(i.formatPrice(P.value)), 1)
          ])) : W("", !0),
          O("div", dh, se(C(H)("Panels")), 1)
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
    const t = i, { notices: e, dismissNotice: s } = vs(), n = N({}), r = te(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = qt("font-awesome-icon");
      return y(), ye(ms, { to: "body" }, [
        O("div", gh, [
          ve(so, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Se(["notices-container", t.position])
          }, {
            default: gs(() => [
              (y(!0), T(we, null, $e(C(e), (c) => (y(), T("div", {
                key: c.id,
                ref_for: !0,
                ref: (f) => {
                  f && (n.value[c.id] = f);
                },
                class: Se([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                O("div", mh, [
                  O("div", {
                    class: "message",
                    onClick: (f) => c.action()
                  }, se(c.message), 9, vh),
                  O("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, yh)
                ]),
                c.persistent ? W("", !0) : (y(), ye(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (f) => C(s)(c.id)
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
  Bh as D,
  Ph as E,
  Hh as F,
  Is as I,
  Gh as N,
  Zi as O,
  Gt as S,
  ii as _,
  fi as a,
  le as b,
  At as c,
  Jt as d,
  _h as e,
  Yl as f,
  Mh as g,
  $t as h,
  $h as i,
  Ah as j,
  Eh as k,
  Oh as l,
  qh as m,
  Rh as n,
  hi as o,
  x as p,
  bt as q,
  Lh as r,
  jo as s,
  Fh as t,
  Th as u,
  yt as v,
  Ct as w,
  Qs as x,
  ei as y,
  H as z
};
