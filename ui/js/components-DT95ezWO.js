import { i as ar, B as pc } from "./vendor-i18n-BuJwRgtG.js";
import { d as De, c as A, o as w, F as Te, r as Ve, n as et, a as Ce, b as O, w as fs, t as Q, v as dn, e as te, f as mt, g as Ht, h as X, u as or, i as gc, j as je, k as bt, l as mc, m as hs, p as ke, q as k, s as Y, x as zs, T as Ma, y as rr, z as bc, A as ki, B as Ti, C as Ws, D as ci, E as bi, G as Re, H as yc, I as lr, J as as, K as vc, L as po, M as ji, N as go, O as wc, P as Sc, Q as xc, R as kc, S as Ic, U as Bn, V as Pc, W as Cc } from "./vendor-vue-V1I1Po2P.js";
import { u as Ba, a as Tc, b as Ac, c as Oc, d as $c, e as ja, f as cr, g as Fc, h as Lc, i as Ec, j as Dc } from "./composables-HxE52_XC.js";
import { a as ur, b as dr, l as Ft, c as Hs, d as Us, s as ot, r as Nt, e as os, f as fr, g as Rc, h as _c, i as Mc, p as Bc, S as jc, j as Nc, k as Vc } from "./vendor-d3-DUCHe88K.js";
import { _ as pe, o as E, a as ee, s as h, n as d, b as L, c as be, r as he, u as ue, d as ii, e as ua, z as Gc, Z as jn, f as qc, l as fe, p as Yi, g as _e, h as zc, i as Wc, F as ls, j as hr, k as Hc, m as Uc, q as Yc, t as Kc, v as Zc, w as Xc, x as pr, y as Jc, A as Nn, B as gr, C as mo, D as Qc, E as eu, G as tu, H as pt, I as Ys, J as Je, K as Ii, L as bo, M as iu, N as It, O as Ks, P as at, Q as su, R as nu, S as au, T as ou, U as ru, V as lu } from "./vendor-4AnxBRif.js";
function Pt() {
  if (typeof process < "u" && process?.env)
    return process.env?.NODE_ENV === "development";
  if (typeof globalVariables < "u" && typeof globalVariables.isDevelopment == "boolean")
    return globalVariables.isDevelopment;
  if (typeof window < "u") {
    const t = window.location?.hostname || "";
    if (t === "localhost" || t === "127.0.0.1" || t.includes(".local"))
      return !0;
    const e = new URLSearchParams(window.location?.search || "");
    if (e.get("dev") === "true" || e.get("debug") === "true")
      return !0;
  }
  return !1;
}
function mr() {
  if (typeof process < "u" && process?.env)
    return process.env?.NODE_ENV === "test" || process.env?.VITEST === "true" || !!process.env?.VITEST;
  if (typeof globalVariables < "u")
    return globalVariables.isTest === !0 || globalVariables.NODE_ENV === "test" || globalVariables.VITEST === !0;
  if (typeof window < "u") {
    const t = new URLSearchParams(window.location?.search || "");
    return t.get("test") === "true" || t.get("vitest") === "true" || window.location?.hostname.includes("test") || // Check for test runner globals
    typeof window.vitest < "u" || typeof window.jest < "u";
  }
  return !1;
}
function Lw() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const Ew = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, Ot = {
  FIELD_REQUIRED: "errors.validation.field.required",
  INVALID_NUMBER: "errors.validation.field.invalid_number",
  INVALID_DECIMAL: "errors.validation.field.invalid_decimal",
  INVALID_FRACTION: "errors.validation.field.invalid_fraction",
  INVALID_FRACTION_CHARS: "errors.validation.field.invalid_fraction_chars",
  INVALID_FRACTION_FORMAT: "errors.validation.field.invalid_fraction_format",
  INVALID_FORMAT: "errors.validation.field.invalid_format",
  ABOVE_MAX: "errors.validation.field.above_max",
  BELOW_MIN: "errors.validation.field.below_min",
  ZERO_NOT_ALLOWED: "errors.validation.field.zero_not_allowed",
  DIVISION_BY_ZERO: "errors.validation.field.division_by_zero"
}, Vn = {
  field_required: Ot.FIELD_REQUIRED,
  invalid_number: Ot.INVALID_NUMBER,
  invalid_decimal: Ot.INVALID_DECIMAL,
  invalid_fraction: Ot.INVALID_FRACTION,
  invalid_fraction_chars: Ot.INVALID_FRACTION_CHARS,
  invalid_fraction_format: Ot.INVALID_FRACTION_FORMAT,
  invalid_format: Ot.INVALID_FORMAT,
  above_max: Ot.ABOVE_MAX,
  below_min: Ot.BELOW_MIN,
  zero_not_allowed: Ot.ZERO_NOT_ALLOWED,
  division_by_zero: Ot.DIVISION_BY_ZERO
};
function cu(t) {
  if (t in Vn) {
    const e = t;
    return Pt() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${Vn[e]}"`), Vn[e];
  }
  return t;
}
var ne = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(ne || {}), uu = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(uu || {});
class wt {
  static guardCache = /* @__PURE__ */ new Map();
  /**
   * Create a type guard function for a specific entity type
   */
  static create(e, i, s) {
    const n = `${e}-${i}`;
    if (this.guardCache.has(n))
      return this.guardCache.get(n);
    const a = (o) => {
      if (!o || typeof o != "object") return !1;
      if (o._type === e)
        return s ? s(o) : !0;
      const l = o.constructor?.name === i, u = "getType" in o && typeof o.getType == "function" && o.getType() === e, f = l || u, p = s ? s(o) : !0;
      return f && p;
    };
    return this.guardCache.set(n, a), a;
  }
  /**
   * Clear the cache (useful for testing or memory management)
   */
  static clearCache() {
    this.guardCache.clear();
  }
  /**
   * Get cache stats for debugging
   */
  static getCacheInfo() {
    return {
      size: this.guardCache.size,
      keys: Array.from(this.guardCache.keys())
    };
  }
}
let Gn = null;
const du = (t) => (Gn || (Gn = wt.create(ne.Cut, "Cut")), Gn(t));
let qn = null;
const Qe = (t) => (qn || (qn = wt.create(ne.Shape, "Shape", (e) => !("shapes" in e))), qn(t));
let zn = null;
const Et = (t) => (zn || (zn = wt.create(ne.Stock, "Stock")), zn(t));
let Wn = null;
const br = (t) => (Wn || (Wn = wt.create(ne.Group, "Group", (e) => "shapes" in e && Array.isArray(e.shapes) && e.type !== "user" && e.type !== "strip")), Wn(t));
let Hn = null;
const ps = (t) => (Hn || (Hn = wt.create(ne.UserGroup, "Group", (e) => "shapes" in e && e.type === "user")), Hn(t));
let Un = null;
const yr = (t) => (Un || (Un = wt.create(ne.StripGroup, "Group", (e) => "shapes" in e && e.type === "strip")), Un(t));
let Yn = null;
const vr = (t) => (Yn || (Yn = wt.create(ne.FirstShapeGroup, "Group", (e) => "shapes" in e && e.type === "firstShape")), Yn(t)), Ye = (t) => br(t) || ps(t) || yr(t) || vr(t);
let Kn = null;
const Vt = (t) => (Kn || (Kn = wt.create(ne.InputUserGroup, "InputUserGroup")), Kn(t));
let Zn = null;
const qi = (t) => (Zn || (Zn = wt.create(ne.Segment, "Segment")), Zn(t));
let Xn = null;
const fu = (t) => (Xn || (Xn = wt.create(ne.Offcut, "Offcut")), Xn(t)), wr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
};
let Jn = null;
const hu = (t) => (Jn || (Jn = wt.create(ne.Saw, "Saw")), Jn(t)), Sr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Rectangle")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Rectangle";
}, pu = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Placeable")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Placeable";
};
let Qn = null;
const xe = (t) => (Qn || (Qn = wt.create(ne.InputShape, "InputShape")), Qn(t));
let ea = null;
const zi = (t) => (ea || (ea = wt.create(ne.InputStock, "InputStock")), ea(t));
function gu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function xr(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function mu(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(ne).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(ne).includes(i))
        return i;
    } catch {
    }
  return du(t) ? ne.Cut : xe(t) ? ne.InputShape : zi(t) ? ne.InputStock : Vt(t) ? ne.InputUserGroup : ps(t) ? ne.UserGroup : yr(t) ? ne.StripGroup : vr(t) ? ne.FirstShapeGroup : br(t) ? ne.Group : Qe(t) ? ne.Shape : Et(t) ? ne.Stock : wr(t) ? ne.Container : qi(t) ? ne.Segment : fu(t) ? ne.Offcut : Sr(t) ? ne.Rectangle : pu(t) ? ne.Placeable : null;
}
const ui = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, Kt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, Zt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, bu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
function yu(t) {
  return t?.__entityType === ne.Shape;
}
function Dw(t) {
  return t?.__entityType === ne.Group || t?.__entityType === ne.StripGroup || t?.__entityType === ne.FirstShapeGroup;
}
function Rw(t) {
  return t?.__entityType === ne.UserGroup;
}
const kr = pe(["error", "warning"]), Ir = pe(["saw", "stock", "part", "group", "machining", "extras"]);
E({
  message: h(),
  identifier: h(),
  field: ee(ee(h())),
  index: ee(d()),
  id: h(),
  // Source object's autoId for linking back
  type: kr,
  category: ee(Ir)
});
const vu = E({
  item: be().nullable().default(null),
  message: h().default(""),
  params: he(h(), ue([h(), d(), L(), ii()])).optional(),
  // Translation parameters
  field: ee(ee(h())).default([]),
  index: ee(d()).nullable().default(null),
  id: h().nullable().default(null),
  // Source object's autoId
  issues: ee(be()).nullable().default(null),
  // Will be Issue[] at runtime
  type: kr.default("error"),
  category: ee(Ir).nullable().default(null),
  throwError: L().default(!1),
  shouldTranslate: L().default(!0)
});
function Ai(t) {
  return !(!t || typeof t != "string");
}
function wu(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function Su(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function xu(t) {
  return Ai(t) ? t.trim().split(" ").map((e) => Ki(e)).join(" ") : "";
}
function Ki(t) {
  return Ai(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function ku(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function Iu(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function _w(t, e = 100) {
  return Ai(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let Pr = ar;
function Pu(t) {
  Pr = t;
}
function Dt(t, e) {
  if (mr())
    return t;
  const i = Pr.t(t, { ...e });
  return !i || i === t ? t : Ki(i);
}
function Cu(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function Tu(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Cu(s)) {
      const n = Dt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Au(t, e) {
  const i = cu(t), s = t.startsWith("errors.validation.") ? t : i, n = Tu(e);
  return {
    message: Dt(s, n),
    translationKey: s,
    params: n
  };
}
function Ou(t, e) {
  return Au(t, e).message;
}
class ie {
  /**
   * Issue properties - direct properties without schema inheritance
   */
  message = "";
  identifier = "";
  field = [];
  index = [];
  id = "";
  type = "error";
  category = [];
  /**
   * Reference to the item that has the issue
   */
  item = null;
  constructor(e = {}) {
    const i = vu.parse(e), s = ie.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? Ou(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((o) => [...o]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const o = `Issue created for ${mu(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
      throw new Error(o);
    }
  }
  /**
   * Determine identifier from item properties or index
   */
  static determineIdentifier(e, i) {
    if (!e) return "";
    const s = e;
    return s.name?.length ? s.name.toLocaleUpperCase() : s.id?.length ? s.id : s.parentId?.length ? s.parentId : typeof i[0] == "number" ? String(i[0] + 1) : "";
  }
  /**
   * Add this issue to the item's issues array
   */
  addToItemIssues(e) {
    if (!e) return;
    const i = e;
    "issues" in i && Array.isArray(i.issues) && i.issues.push(this);
  }
  /**
   * Get human-readable indexes (1-based instead of 0-based)
   */
  getHumanReadableIndexes() {
    return this.index.length ? this.index.map((e) => {
      const i = typeof e == "number" ? e : parseInt(String(e), 10);
      return isNaN(i) ? "" : String(i + 1);
    }).filter(Boolean).join(",") : "";
  }
  /**
   * Check if this issue matches a specific field path and index
   */
  isMatch(e, i) {
    const s = this.field.some((a) => this.isFieldPathEqual(a, e)), n = this.index.includes(i);
    return s && n;
  }
  /**
   * Compare field paths for equality
   */
  isFieldPathEqual(e, i) {
    return e.length !== i.length ? !1 : e.every((s, n) => s === i[n]);
  }
  /**
   * Convert Issue to plain data for serialization
   */
  toData() {
    return {
      __entityType: "Issue",
      message: this.message,
      identifier: this.identifier,
      field: this.field.map((e) => [...e]),
      index: [...this.index],
      id: this.id,
      type: this.type,
      category: [...this.category]
      // Exclude 'item' to avoid circular references
    };
  }
  /**
   * Create Issue from plain data
   */
  static fromData(e, i) {
    return new ie({
      ...e,
      item: i,
      shouldTranslate: !1
      // Message is already translated
    });
  }
  /**
   * Get entity type for serialization
   */
  getType() {
    return "Issue";
  }
}
ua(
  (t) => t instanceof ie,
  { message: "Must be an Issue instance" }
);
const Cr = /* @__PURE__ */ new Map();
let Tr = !1;
function $u() {
  if (!Tr) {
    try {
      if (typeof require < "u") {
        const { initializeStaticRegistry: t } = require("../initialization/static-class-registry");
        t();
        return;
      }
    } catch {
    }
    throw new Error(
      "Class registry not initialized. Ensure main.ts calls initializeStaticRegistry() at the top level before any other imports."
    );
  }
}
function gs() {
  return $u(), Cr;
}
function Mw(t, e) {
  Cr.set(t, e);
}
function Bw() {
  Tr = !0;
}
function fn(t, e) {
  const i = t;
  return i._fieldBehavior = { fieldBehavior: e }, i;
}
function yo(t, e) {
  let i = t, s = 0;
  for (; i && s < 10; ) {
    s++;
    const n = i._fieldBehavior;
    if (n)
      return n.fieldBehavior;
    if (i._def) {
      if (i._def.innerType !== void 0) {
        i = i._def.innerType;
        continue;
      }
      if (i._def.typeName === "ZodArray")
        break;
    }
    break;
  }
  return null;
}
function Ps(t) {
  const e = {};
  if (t instanceof qc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = yo(n);
      a && (e[s] = a);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = yo(n);
      a && (e[s] = a);
    }
  }
  return e;
}
typeof Gc < "u" && jn && jn.prototype && (jn.prototype.behavior = function(t) {
  return fn(this, t);
});
function ve(t, e = {}) {
  let s = be().refine((o) => o == null ? !0 : typeof o == "object" && o !== null ? ("autoId" in o || "id" in o, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((o) => {
    if (o == null || typeof o == "object" && o !== null && typeof o.getType == "function" || typeof o == "object" && o !== null && o.__ref === !0)
      return o;
    if (typeof o == "object" && o !== null && !o.__ref)
      try {
        const r = gs(), l = o.__entityType || t, c = r.get(l);
        if (c && typeof c == "function")
          return typeof c.fromData == "function" ? c.fromData(o) : new c(o);
      } catch (r) {
        console.warn(`Failed to recreate ${t} instance:`, r);
      }
    return o;
  });
  e.nullable && (s = s.nullable());
  let n = s.default(null).describe(e.description || `Reference to ${t}`);
  const a = e.fieldBehavior || {
    serialize: "reference",
    // References should always serialize as references for efficiency
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Reference to ${t}`
  };
  return n = fn(n, a), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function Fe(t, e = {}) {
  let i = ee(ve(t)).default([]).describe(
    e.description || `Array of ${t} references`
  );
  const s = e.fieldBehavior || {
    serialize: "reference",
    // Reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t} references`
  };
  return i = fn(i, s), i;
}
function Rs(t, e = {}) {
  const i = t.map((a) => ve(a));
  let s = ee(ue(i)).default([]).describe(
    e.description || `Array of ${t.join(" or ")} references`
  );
  const n = e.fieldBehavior || {
    serialize: "reference",
    // Union reference arrays should always serialize as references
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Array of ${t.join(" or ")} references`
  };
  return s = fn(s, n), s;
}
const Ar = h().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Fu = h().max(200).default("").describe("User input name"), Lu = h().default("").describe("Parent identifier for tracking copies and relationships"), Eu = L().default(!1).describe("Prevent automatic rotation optimization"), Du = L().default(!1).describe("Whether this is an offcut piece"), Or = ee(h()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Zi = ue([
  fe(""),
  fe("l"),
  fe("w"),
  fe(" ").transform(() => ""),
  ii().transform(() => "")
]).default("").describe("Grain direction of the material"), $r = ue([
  // String format (legacy support - color name or hex)
  h(),
  // Object format with hex and name
  E({
    hex: h().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: h().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Fr = Yi(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  pe(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), Ru = E({
  l1: d().default(0).describe("Long side 1 trim value"),
  l2: d().default(0).describe("Long side 2 trim value"),
  w1: d().default(0).describe("Short side 1 trim value"),
  w2: d().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
E({
  material: L(),
  thickness: L(),
  fit: L(),
  width: L()
}).nullable().default(null);
ue([
  fe(""),
  fe("l"),
  fe("w"),
  ii()
]).default(null);
he(h(), d()).nullable().default(null);
he(h(), d()).nullable().default(null);
const Na = ue([
  fe(0),
  fe(1)
]), _u = E({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: Na.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: d().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: L().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
});
E({
  subsetUsed: L().optional().describe("Whether a subset was used for strip shape batches"),
  groups: he(h(), _u).describe("Groups of strip shape batches keyed by ID")
});
const Mu = ["x", "y"];
pe(Mu);
const Bu = ["l", "w"];
pe(Bu);
const Va = ["l", "w"], mi = pe(Va);
ue([
  fe(0),
  fe(1),
  fe(2)
]);
ue([
  fe(0),
  fe(1),
  ii()
]);
const ju = ["sheet", "linear", "roll"], hn = Yi(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  ue([
    pe(ju),
    ii()
  ]).nullable().default(null)
).describe("Type of stock material"), Lr = E({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: L().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: L().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: L().default(!1).describe("Automatically add stock as needed")
}), Nu = pe(["none", "schema", "business", "full"]), Rt = E({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: Fe("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: Fe("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: L().optional(),
  // New validation control properties
  skipSchemaValidation: L().optional(),
  skipBusinessValidation: L().optional(),
  validationMode: Nu.optional(),
  enableStrictMode: L().optional()
}), si = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function Vu(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const Ga = Rt.extend({
  // Identity
  id: Ar,
  // Description
  name: Fu,
  // Dimensions
  l: Yi((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Length (long side dimension)"),
  w: Yi((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Width (short side dimension)"),
  t: d().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: d().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: d().positive().default(1).describe("Calculated area (l * w)"),
  longSide: d().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: d().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: h().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: L().default(!1).describe("Whether this is a duplicate"),
  offcut: Du,
  // Grain
  grain: Zi,
  preventGrainRotation: L().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Eu,
  orientationLock: Fr,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: d().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: d().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: h().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: Ru.describe("Reduce the dimensions by specified trim values"),
  trimmed: L().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: E({
    rectangle: ve("Rectangle").nullable().default(null),
    distance: d().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: d().min(0).nullable().default(0).describe("Cost per unit"),
  customData: he(h(), be()).default({}).describe("Custom user-defined data"),
  identicalTo: Or,
  notes: h().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), qa = {
  // Calculated Dimensions
  isSquare: {
    compute: (t) => t.l === t.w
  },
  perimeter: {
    compute: (t) => 2 * (t.l + t.w)
  },
  aspect: {
    compute: (t) => t.w > 0 ? t.l / t.w : 0
  },
  volume: {
    compute: (t) => t.t ? t.l * t.w * t.t : null
  },
  // Orientation
  canRotate: {
    compute: (t) => !(t.preventAutoRotation || t.preventGrainRotation && t.grain || t.orientationLock)
  },
  rot: {
    compute: (t) => t.w > t.l ? 1 : 0
  },
  rotatedDimensions: {
    compute: (t) => {
      const e = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
      return ["l", "w"].includes(t.orientationLock) ? {
        l: t.orientationLock === "l" ? e : i,
        w: t.orientationLock === "l" ? i : e,
        orientationLock: t.orientationLock
      } : {
        l: e,
        w: i,
        orientationLock: t.orientationLock
      };
    },
    cache: !0
    // Keep cache hint for performance optimization
  },
  // Position
  hasCoords: {
    compute: (t) => t.x !== null && t.y !== null
  },
  coords: {
    compute: (t) => ({ id: t.id, x: t.x, y: t.y })
  },
  dimensions: {
    compute: (t) => ({
      id: t.id,
      l: t.l,
      w: t.w,
      t: t.t
    }),
    cache: !0
    // Keep cache hint for performance optimization
  },
  // Trim
  hasTrim: {
    compute: (t) => !!(t.trim?.l1 || t.trim?.l2 || t.trim?.w1 || t.trim?.w2)
  },
  trimmedDimensions: {
    compute: (t) => t.trimmed ? {
      l: t.l,
      w: t.w
    } : {
      l: t.l - (t.trim?.w1 || 0) - (t.trim?.w2 || 0),
      w: t.w - (t.trim?.l1 || 0) - (t.trim?.l2 || 0)
    }
  },
  untrimmedDimensions: {
    compute: (t) => t.trimmed ? {
      l: t.l + (t.trim?.w1 || 0) + (t.trim?.w2 || 0),
      w: t.w + (t.trim?.l1 || 0) + (t.trim?.l2 || 0)
    } : {
      l: t.l,
      w: t.w
    }
  },
  // Validation
  isValid: {
    compute: (t) => !t.issues || t.issues.length === 0
  }
}, pn = Ga.extend({
  // Identity - override id to be required for containers
  id: h().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: Lu,
  // Container-specific fields
  stockType: hn,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Rs(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: ve("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: be().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: L().default(!0).describe("Flag indicating this is a container")
}), gn = {
  // Include all Rectangle computed properties
  ...qa,
  // Check if container has shapes
  hasShapes: {
    compute: (t) => (t.shapes?.length || 0) > 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "boolean"
    }
  },
  // Check if container is a sheet
  isSheet: {
    compute: (t) => t.stockType === "sheet",
    metadata: {
      cache: !1,
      dependencies: ["stockType"],
      returnType: "boolean"
    }
  },
  // Check if container is linear
  isLinear: {
    compute: (t) => t.stockType === "linear",
    metadata: {
      cache: !1,
      dependencies: ["stockType"],
      returnType: "boolean"
    }
  },
  // Check if container is a roll
  isRoll: {
    compute: (t) => t.stockType === "roll",
    metadata: {
      cache: !1,
      dependencies: ["stockType"],
      returnType: "boolean"
    }
  },
  // Get cut type from saw
  cutType: {
    compute: (t) => t.saw?.cutType ?? null,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "string | null"
    }
  },
  // Get cut preference from saw
  cutPreference: {
    compute: (t) => t.saw?.cutPreference ?? null,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "string | null"
    }
  },
  // Get primary compression direction
  primaryCompression: {
    compute: (t) => t.saw?.efficiencyOptions?.primaryCompression ?? "w",
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "string"
    }
  },
  // Count of shapes
  shapeCount: {
    compute: (t) => t.shapes?.length || 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Total area of all shapes
  totalShapeArea: {
    compute: (t) => t.shapes ? t.shapes.reduce((e, i) => i && typeof i.area == "number" ? e + i.area : i && i.l && i.w ? e + i.l * i.w : e, 0) : 0,
    metadata: {
      cache: !0,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Blade width from saw
  bladeWidth: {
    compute: (t) => t.getStock?.saw?.bladeWidth ?? 0,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "number"
    }
  },
  // Half blade width from saw
  halfBladeWidth: {
    compute: (t) => t.getStock?.saw?.halfBladeWidth ?? 0,
    metadata: {
      cache: !1,
      dependencies: ["saw"],
      returnType: "number"
    }
  },
  // Get stock reference
  getStock: {
    compute: (t) => Et(t) ? t : qi(t) || Ye(t) ? t.stock : null,
    metadata: {
      cache: !1,
      returnType: "Stock | null"
    }
  }
};
pn.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(gn)
}));
function vo(t, e) {
  return zc(t, e);
}
function hi(t, e) {
  return _e(t, e);
}
function Mi(t, e, i) {
  Wc(t, e, i);
}
function ye(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function wo(t, e = !1) {
  if (!ye(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => ye(s) && s) : i.some((s) => ye(s));
}
function jw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added).map((s) => s), i = {};
  return e.forEach((s) => {
    const n = Gu(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot);
  }), Object.values(i);
}
function Gu(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function qu() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Nw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function qt(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function zu(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function Wu(t, e) {
  if (!t || !e) return 0;
  const i = t.split(".").map(Number), s = e.split(".").map(Number), n = Math.max(i.length, s.length);
  for (let a = 0; a < n; a++) {
    const o = i[a] || 0, r = s[a] || 0;
    if (o > r) return 1;
    if (o < r) return -1;
  }
  return 0;
}
function So(t, e) {
  return Wu(t, e) > 0;
}
function Hu(t, e, i, s, n, a) {
  const o = {
    get: (r) => localStorage.getItem(r),
    set: (r, l) => localStorage.setItem(r, l),
    clear: () => localStorage.clear(),
    reload: () => location.reload()
  };
  return So(t, e) && !So(i, e) ? (console.log(`[Migration] Clearing for migration from ${i} to ${t}`), o.set(s, t), n(), !0) : !1;
}
function Uu(t, e) {
  const i = {
    get: (n) => localStorage.getItem(n),
    set: (n, a) => localStorage.setItem(n, a),
    clear: () => localStorage.clear(),
    reload: () => location.reload()
  }, s = i.get(t);
  i.clear(), s !== null && i.set(t, s), i.reload();
}
const Bi = 1e-10, Yu = 10, Ku = Number.MAX_SAFE_INTEGER, Zu = 4294967295, gt = (t) => typeof t == "number" && Number.isFinite(t), _s = (t) => Array.isArray(t) && t.length > 0;
function is(t, e, i = Bi) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const Xu = {
  greaterThan: (t, e, i = Bi) => !gt(t) || !gt(e) ? !1 : is(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Bi) => !gt(t) || !gt(e) ? !1 : is(t, e, i) >= 0,
  lessThan: (t, e, i = Bi) => !gt(t) || !gt(e) ? !1 : is(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Bi) => !gt(t) || !gt(e) ? !1 : is(t, e, i) <= 0,
  equalTo: (t, e, i = Bi) => !gt(t) || !gt(e) ? !1 : is(t, e, i) === 0
};
function Ju(t) {
  return gt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Yu)) : !1;
}
function Qu(t) {
  if (!gt(t) || t < 0 || t > Ku)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Zu + 1) * t);
}
function ed(t, e) {
  if (!_s(t))
    throw new Error("Invalid array parameter");
  if (!gt(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [i[n], i[a]] = [i[a], i[n]];
  }
  return i.slice(s);
}
class Cs {
  static calculateMean(e) {
    if (!_s(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!_s(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, o) => {
      const r = o - s;
      return a + r * r;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!_s(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const ae = {
  ...Xu,
  isNumber: gt,
  round: Ju,
  getRandom: Qu,
  getRandomSample: ed,
  calculateStandardDeviation: Cs.calculateStandardDeviation.bind(Cs),
  calculateCoefficientOfVariation: Cs.calculateCoefficientOfVariation.bind(Cs)
}, ta = 10, xo = 0;
class Zs extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const ss = {
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
function td(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new ls(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function id(t, e) {
  const i = new ls(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new ls(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function sd(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = Er(n, !0), o = parseFloat(a ?? ""), r = a !== null && a !== "" && !isNaN(o) && isFinite(o);
    return {
      value: r ? o : t,
      valid: r,
      message: r ? void 0 : "invalid_number",
      messageData: r ? void 0 : "Could not parse as decimal."
    };
  } catch (a) {
    return {
      value: t,
      valid: !1,
      message: "errors.validation.field.invalid_number",
      messageData: a.message || "Parsing error"
    };
  }
  return {
    value: t,
    valid: !1,
    message: "errors.validation.field.invalid_format",
    messageData: e
  };
}
function nd(t = "en-US") {
  try {
    const e = Intl.NumberFormat(t).formatToParts(123456789e-2);
    return {
      thousandsSeparator: e.find((i) => i.type === "group")?.value || ",",
      decimalSeparator: e.find((i) => i.type === "decimal")?.value || "."
    };
  } catch {
    return console.warn("Failed to detect number separators. Using defaults."), { thousandsSeparator: ",", decimalSeparator: "." };
  }
}
function Ms(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = nd(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new Zs(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function za(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(ss).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function Er(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(ss).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(ss).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), r = i.match(a), l = i.match(o);
    if (r) {
      const c = r[1], u = r[2], f = r[3], p = ss[f];
      if (p)
        return `${c}${u} ${p}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], f = ss[u];
      if (f)
        return `${c}${f}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (za(i)) {
      let c = "";
      i.startsWith("-") && (c = "-", i = i.substring(1).trim());
      const u = i.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
      if ((u.match(/\//g) || []).length > 1)
        throw new Error("Invalid fraction format: multiple slashes.");
      return c + u;
    } else {
      e ? (i = i.replace(/[^0-9,. -]/g, ""), i = i.replace(/\s/g, "")) : (i = i.replace(/[^0-9.-]/g, ""), i = i.replace(/,/g, "")), i.startsWith(".") && (i = "0" + i), i.startsWith("-.") && (i = "-0." + i.substring(2));
      const c = i.split(".");
      c.length > 2 && (i = c[0] + "." + c.slice(1).join(""));
      const u = e ? Ms(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new Zs(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Vw(t, e, i = null, s = null) {
  if (t && !(!xe(t) && !zi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const a in t[n])
          Object.prototype.hasOwnProperty.call(t[n], a) && (t[n][a] = U({ v: t[n][a], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = U({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function ad(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function od(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function U(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? ta, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? xo;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== ta) {
        const o = Math.pow(10, s);
        return Math.round(t.v * o) / o;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const o = t.v.trim();
      if (ad(o) && !n) {
        const r = parseFloat(o);
        if (isFinite(r)) {
          if (typeof s == "number" && s !== ta) {
            const l = Math.pow(10, s);
            return Math.round(r * l) / l;
          }
          return r;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const o = t.v.trim();
    if (od(o))
      try {
        const r = new ls(o);
        if (isFinite(r.valueOf())) {
          if (a === 0 || a === xo)
            return r.toFraction(!0);
          const l = r.mul(a), c = Math.round(l.valueOf());
          return new ls(c, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const o = Er(t.v, n);
    return o === null || o === "" ? i === "decimal" ? null : "" : i === "decimal" ? td(o, s) : id(o, a);
  } catch (o) {
    throw o instanceof Zs ? o : new Zs(
      `Failed to convert number format: "${t.v}" to ${i}. ${o.message}`
    );
  }
}
function Wi(t, e = !1) {
  const i = typeof t.l == "string" ? U({ v: t.l }) : t.l, s = typeof t.w == "string" ? U({ v: t.w }) : t.w;
  if (!e)
    return { l: i, w: s };
  if (!("trim" in t))
    return { l: i, w: s };
  if (xr(t))
    return { l: i, w: s };
  if (Sr(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = U({ v: n.l1 ?? 0 }) + U({ v: n.l2 ?? 0 }), o = U({ v: n.w1 ?? 0 }) + U({ v: n.w2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? U({ v: a }) : a),
    w: s - (typeof o == "string" ? U({ v: o }) : o)
  };
}
function rd(t, e) {
  if ("trim" in t && !xr(t)) {
    const i = t.trim;
    e.l = e.l - (U({ v: i.w1 ?? 0 }) + U({ v: i.w2 ?? 0 })), e.w = e.w - (U({ v: i.l1 ?? 0 }) + U({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Ei(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (zi(t) || xe(t) || ps(t)) && (s = {
    l: U({ v: t.l }),
    w: U({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = rd(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Dr(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function ld(t) {
  Ye(t) || (Dr(t), [t.l, t.w] = [t.w, t.l]);
}
function Xi(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && hu(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = U({ v: s.options.minSpacing }) : wr(e) && (n = e?.saw?.options.minSpacing);
  const a = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = Wi(e, !0), r = a ? Wi(e, !1) : o, l = Wi(t, !0);
  let c = o;
  if (a && (ae.equalTo(l.l, r.l) && ae.equalTo(l.w, r.w) || ae.equalTo(l.l, r.w) && ae.equalTo(l.w, r.l)) && (c = r), l.l * l.w > c.l * c.w)
    return !1;
  function u(R, D) {
    return ae.equalTo(R, D) || ae.lessThanOrEqualTo(R, D - n * 2);
  }
  function f(R) {
    return u(R.l, c.l) && u(R.w, c.w);
  }
  const p = Rr(t, e);
  if (t.orientationLock || i !== null) {
    const R = i ?? (p === "w" ? 1 : 0), D = Ei(t, R, !0);
    if (a) {
      const I = Ei(t, R, !1);
      if (ae.equalTo(I.l, r.l) && ae.equalTo(I.w, r.w))
        return f(I);
    }
    return f(D);
  }
  const g = Ei(t, 0, !0);
  if (a) {
    const R = Ei(t, 0, !1);
    if (ae.equalTo(R.l, r.l) && ae.equalTo(R.w, r.w) && f(R)) return !0;
  }
  if (f(g)) return !0;
  const x = Ei(t, 1, !0);
  if (a) {
    const R = Ei(t, 1, !1);
    if (ae.equalTo(R.l, r.l) && ae.equalTo(R.w, r.w) && f(R)) return !0;
  }
  return f(x);
}
function cd(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Ye(t) || ps(t) || Qe(t) || xe(t)) && (e = t.orientationLock), e;
}
function Rr(t, e) {
  const i = cd(t);
  if (!ye(i)) return null;
  if (!e || "direction" in t) return i;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && ye(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function _r(t, e) {
  if (Ye(t))
    return Xi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    vt(t, s, e) && Xi(t, e, s) && i.push(s);
  return i;
}
function vt(t, e = null, i = null) {
  if (!ye(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Ye(t) && fd(t) && e || i && !Xi(t, i, e))
    return !1;
  const s = Rr(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function ud(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), vt(t, e, i) ? (s === e || ld(t), !0) : !1;
}
function rt(t, e = null, i = null) {
  e ? e = 1 : e = 0;
  const s = t.id || t.autoId || "unknown";
  return i && e && !Xi(t, i, e) ? (console.warn(`[setRotation] ${s}: Cannot rotate to ${e} - won't fit in container`), !1) : ud(t, e, i);
}
function Gw(t, e) {
  if (Ye(t)) return t.rot;
  if (!ye(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !ye(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function ko(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = Wi(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const o = Math.max(a.l, a.w), r = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (o >= e && o <= i && vt(t, 0, n) || r >= e && r <= i && vt(t, 1, n)) return !0;
      } else if (s === "w" && (r >= e && r <= i && vt(t, 0, n) || o >= e && o <= i && vt(t, 1, n)))
        return !0;
    } else if (t.orientationLock) {
      if (t.orientationLock === "l")
        return s === "l" && o >= e && o <= i;
      if (t.orientationLock === "w")
        return s === "l" && r >= e && r <= i;
    }
  }
  return !1;
}
function dd(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = Wi(t), a = Math.max(n.l, n.w), o = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && vt(t, 0, s)) return rt(t, 0);
    if (o === e && vt(t, 1, s)) return rt(t, 1);
  } else if (i === "w") {
    if (o === e && vt(t, 0, s)) return rt(t, 0);
    if (a === e && vt(t, 1, s)) return rt(t, 1);
  }
  return !1;
}
function fd(t) {
  Dr(t);
  const e = Wi(t);
  return ae.equalTo(e.l, e.w);
}
function Io(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let Po = 0, Co = Date.now();
const hd = 1e4;
function pd() {
  return Po % hd === 0 && (Co = Date.now()), `${Co}-${(Po++).toString(36)}`;
}
class gd {
  // System-generated unique ID for tracking and reassociation
  // This is different from user-facing 'id' which is for display
  autoId;
  /**
   * Get the base autoId without version suffix
   * For cloned objects with autoIds like "base.1", returns "base"
   * For non-cloned objects, returns the autoId as-is
   */
  getBaseAutoId() {
    return this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId;
  }
  // Static serialization fields - override in subclasses
  static serializationProperties = [];
  // Legacy static exclusions - deprecated, use schema behaviors instead
  static serializationExcludedProperties = [];
  // Static schema reference - override in subclasses that have schemas
  // All schemas should be Zod schemas with field behaviors defined
  static schema;
  // Static computed properties for Zod schemas
  static computedProperties;
  // Private flag for compression mode (will be set as non-enumerable in constructor)
  _serializationMode;
  constructor(e) {
    this.autoId = e?.autoId || pd(), Object.defineProperty(this, "_serializationMode", {
      value: "full",
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    });
  }
  /**
   * Set serialization mode
   */
  setSerializationMode(e) {
    this._serializationMode = e;
  }
  /**
   * Get current serialization mode
   */
  getSerializationMode() {
    return this._serializationMode;
  }
  /**
   * Get serialization fields for this class
   * If serializationProperties is not defined, falls back to schema fields if available
   * Always includes autoId for tracking
   */
  getSerializationFields() {
    let e = [];
    const i = this.constructor.serializationProperties;
    return i && i.length > 0 ? (e = [...i], e.includes("autoId") || e.unshift("autoId")) : this.constructor.schema && (e = []), e;
  }
  /**
   * Get field behaviors from the schema
   * Returns a map of field name -> field behavior
   * Supports nested paths like 'group.reference' recursively
   */
  getFieldBehaviors() {
    const e = this.constructor;
    if (e.schema && typeof e.schema == "object" && "_def" in e.schema) {
      const i = Ps(e.schema), s = e.schema;
      return s.shape && this.extractNestedBehaviors(s.shape, i, ""), i;
    }
    return {};
  }
  /**
   * Recursively extract nested field behaviors from a schema shape
   * @private
   */
  extractNestedBehaviors(e, i, s) {
    for (const [n, a] of Object.entries(e))
      if (a && typeof a == "object" && "_def" in a) {
        let o = a;
        for (; o && o._def; ) {
          const l = o._def.typeName || o.constructor?.name;
          if (l === "ZodDefault" || l === "ZodOptional" || l === "ZodNullable") {
            if (o = o._def.innerType || o._def.type, !o) break;
          } else
            break;
        }
        const r = Ps(o);
        for (const [l, c] of Object.entries(r)) {
          const u = s ? `${s}.${n}.${l}` : `${n}.${l}`;
          i[u] = c;
        }
        if (o && o.shape) {
          const l = s ? `${s}.${n}` : n;
          this.extractNestedBehaviors(o.shape, i, l);
        }
      }
  }
  /**
   * Check if a property is a getter-only property (computed property)
   * Properties with both getter and setter are treated as regular properties
   */
  isGetterProperty(e) {
    const i = Object.getOwnPropertyDescriptor(this, e);
    if (i && i.get && !i.set)
      return !0;
    let s = Object.getPrototypeOf(this);
    for (; s && s !== Object.prototype; ) {
      const n = Object.getOwnPropertyDescriptor(s, e);
      if (n && n.get && !n.set)
        return !0;
      s = Object.getPrototypeOf(s);
    }
    return !1;
  }
  /**
   * Serialize this entity to a plain data object
   * @final Do NOT override this method - use getSerializationFields() to customize serialization
   */
  toData(e = this._serializationMode) {
    const i = {}, s = this.getSerializationFields(), n = this.getFieldBehaviors(), a = e === "compressed" ? "compressed" : "full";
    if (s.length === 0) {
      const o = /* @__PURE__ */ new Set();
      Object.getOwnPropertyNames(this).forEach((r) => o.add(r));
      for (const r in this) o.add(r);
      for (const r of o) {
        if (r.startsWith("_")) continue;
        const l = this.constructor.serializationExcludedProperties;
        if (l && l.includes(r) || this.isGetterProperty(r)) continue;
        const c = this[r];
        if (typeof c == "function" || c === void 0) continue;
        const u = n[r];
        a === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude" || (i[r] = this.serializeValue(c, u, a, r, n));
      }
    } else
      for (const o of s) {
        const r = this[o], l = n[o];
        a === "compressed" && l?.compress === "exclude" || l?.serialize === "exclude" || (i[o] = this.serializeValue(r, l, a, o, n));
      }
    return i.__entityType = this.getType(), i;
  }
  /**
   * Create a compressed version of this entity for worker/optimization use
   * Uses schema-defined compression behaviors
   */
  compress() {
    return this.toData(
      "compressed"
      /* Compressed */
    );
  }
  // Legacy compression behavior methods removed - use unified field behavior system
  /**
   * Update this entity with partial data
   * Can be overridden in subclasses for custom behavior
   */
  update(e) {
    const s = this.constructor.schema;
    if (s && typeof s == "object" && "_def" in s) {
      const o = e.validationMode === "none" || e.skipSchemaValidation;
      let r;
      o ? r = e : r = s.partial().parse(e);
      for (const l in r) {
        const c = r[l];
        if (c !== void 0) {
          const u = Object.getOwnPropertyDescriptor(this, l) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), l);
          if (u && u.get && !u.set)
            continue;
          this[l] = c;
        }
      }
    } else
      for (const o in e)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          const r = e[o];
          if (r !== void 0 && o in this) {
            const l = Object.getOwnPropertyDescriptor(this, o) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), o);
            if (l && l.get && !l.set)
              continue;
            this[o] = r;
          }
        }
    !(e.validationMode === "none" || e.validationMode === "schema" || e.skipValidation) && "validate" in this && typeof this.validate == "function" && this.validate();
  }
  /**
   * Async validation using the schema and validation engine
   * @final Do NOT override this method - use static schema property for validation
   * For custom validation logic, override validate() instead
   *
   * NOTE: All classes should extend SchemaClass for proper Zod integration
   */
  async validateAsync() {
    const e = this.constructor.schema;
    if (e && typeof e == "object" && "_def" in e)
      try {
        return e.parse(this.toData()), "issues" in this && (this.issues = []), "warnings" in this && (this.warnings = []), "valid" in this && (this.valid = !0), [];
      } catch (s) {
        if (s instanceof hr) {
          const n = s.issues.map((a) => new ie({
            message: a.message,
            type: "error",
            field: a.path.length > 0 ? [a.path.map(String)] : void 0,
            item: this
          }));
          return "issues" in this && (this.issues = n), "warnings" in this && (this.warnings = []), "valid" in this && (this.valid = !1), n;
        }
        throw s;
      }
    return "validate" in this && typeof this.validate == "function" ? this.validate() : [];
  }
  /**
   * Clone this instance with a new versioned ID
   * Preserves all properties except those specified to reset to defaults
   *
   * @param version - Optional version number/string. If not provided, auto-increments
   * @returns A new instance with versioned ID and selectively reset properties
   */
  clone(e = null, i = {}) {
    const s = "id" in this && this.id ? String(this.id).split(".") : ["clone"];
    let n;
    if (e) {
      const g = s.pop() || "0", x = parseInt(g, 10);
      isNaN(x) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", x = parseInt(g, 10);
      isNaN(x) ? (s.push(g), n = "1") : n = String(x + 1);
    }
    s.push(n);
    const a = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let f = {};
    u && (f = Ps(u));
    const p = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [g, x] of Object.entries(f))
      x.clone === "reset" && (g in p ? c[g] = p[g] : delete c[g]);
    return "id" in c && (c.id = a), c.autoId = r, c.duplicate = !0, c.skipValidation = !0, new l(c);
  }
  /**
   * Get a direct copy of all properties with selective serialization
   * This preserves class instances (like Saw) but handles zRef references properly
   * @private
   */
  getDirectPropertyCopy(e = {}) {
    const i = {}, s = this.getSerializationFields();
    if (s.length === 0)
      for (const n in this) {
        if (!Object.prototype.hasOwnProperty.call(this, n) || n.startsWith("_")) continue;
        let a = !1;
        const o = Object.getOwnPropertyDescriptor(this, n);
        if (o && o.get && !o.set)
          a = !0;
        else if (!o) {
          let l = Object.getPrototypeOf(this);
          for (; l && l !== Object.prototype; ) {
            const c = Object.getOwnPropertyDescriptor(l, n);
            if (c && c.get) {
              a = !0;
              break;
            }
            l = Object.getPrototypeOf(l);
          }
        }
        if (a) continue;
        const r = this[n];
        typeof r == "function" || r === void 0 || (i[n] = this.handleReferenceForCloning(r, n, e));
      }
    else
      for (const n of s) {
        const a = this[n];
        i[n] = this.handleReferenceForCloning(a, n, e);
      }
    return i;
  }
  /**
   * Handle reference values during cloning with schema and options control
   * Uses schema-defined behaviors first, then options, then defaults
   * @private
   */
  handleReferenceForCloning(e, i, s) {
    if (!e) return e;
    const a = this.constructor.schema;
    let o = null;
    if (a && (o = Ps(a)[i] || null), o?.clone)
      switch (o.clone) {
        case "share":
          return e;
        // Keep exact same instance
        case "unique":
          return this.cloneValueAsNewInstance(e);
        case "reset":
          return e;
        case "copy":
        default:
          return this.cloneValueByCopy(e);
      }
    return s.shareInstances?.includes(i) ? e : s.cloneUnique?.includes(i) ? this.cloneValueAsNewInstance(e) : this.cloneValueByCopy(e);
  }
  /**
   * Clone a value by making an appropriate copy
   * For references (objects with autoId): maintain the reference
   * For plain objects/arrays: make a shallow copy
   * For primitives: return as-is
   * @private
   */
  cloneValueByCopy(e) {
    if (!e || typeof e != "object") return e;
    if (Array.isArray(e))
      return [...e];
    if ("autoId" in e && typeof e.getType == "function")
      return e;
    const i = e.constructor?.name;
    return i && ["Saw"].includes(i) ? e : e.constructor === Object ? { ...e } : e;
  }
  /**
   * Clone a value as a new unique instance
   * @private
   */
  cloneValueAsNewInstance(e) {
    if (!e || typeof e != "object") return e;
    if (Array.isArray(e))
      return e.map((i) => this.cloneValueAsNewInstance(i));
    if ("toData" in e && typeof e.toData == "function") {
      const i = e.constructor, s = e.toData();
      return new i(s);
    }
    return "clone" in e && typeof e.clone == "function" ? e.clone() : { ...e };
  }
  // convertValueToReference() method removed - reference conversion now handled in serializeValue()
  // getDefaultCloneBehavior() method removed - clone behavior now handled by schema-based behaviors
  // Clone behaviors are now defined in Zod schemas using .behavior() method
  // No need for getCloneResetProperties() and getCloneOverrides() methods
  /**
   * Serialize a single value using field behavior
   */
  serializeValue(e, i, s, n, a) {
    if (e == null)
      return e;
    if (Array.isArray(e))
      return e.map((o) => {
        if (Io(o)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in o && o.autoId, u = typeof o.getType == "function";
            if (c) {
              const f = u ? o.getType() : o.constructor.name;
              return {
                __ref: !0,
                id: o?.id,
                autoId: o.autoId,
                __entityType: f
              };
            }
          }
          const l = s === "compressed" ? "compressed" : "full";
          return o.toData(l);
        }
        return o;
      });
    if (Io(e)) {
      if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
        const l = "autoId" in e && e.autoId, c = typeof e.getType == "function";
        if (l) {
          const u = c ? e.getType() : e.constructor.name;
          return {
            __ref: !0,
            id: e?.id,
            autoId: e.autoId,
            __entityType: u
          };
        }
      }
      const r = s === "compressed" ? "compressed" : "full";
      return e.toData(r);
    }
    if (e && typeof e == "object" && e.constructor === Object) {
      const o = {}, r = a || this.getFieldBehaviors();
      for (const l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          const c = n ? `${n}.${l}` : l, u = r[c];
          if (s === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude")
            continue;
          o[l] = this.serializeValue(e[l], u, s, c, r);
        }
      return o;
    }
    return e;
  }
  /**
   * Build a reference map for reassociation
   * Maps autoId to object instances for resolving references
   */
  static buildReferenceMap(e) {
    const i = /* @__PURE__ */ new Map();
    for (const s of e)
      s && s.autoId && i.set(s.autoId, s);
    return i;
  }
  /**
   * Find an object by autoId in a collection
   */
  static findByAutoId(e, i) {
    return e.find((s) => s && s.autoId === i);
  }
  /**
   * Lazy recreation to avoid circular dependencies with class registry
   */
  lazyRecreate(e) {
    if (!e || typeof e != "object" || typeof e.getType == "function") return e;
    const i = e.__entityType || e.__ref || e.type || e._type;
    if (!i)
      return e;
    const n = gs().get(i);
    if (n) {
      const { ...a } = e;
      try {
        return "fromData" in n && typeof n.fromData == "function" ? n.fromData(a) : new n(a);
      } catch (o) {
        return console.warn(`Failed to recreate ${i}:`, o), e;
      }
    }
    return e;
  }
  /**
   * Deserialize a value, creating class instances where appropriate
   * Uses the recreation system for automatic class discovery
   * @param value The value to deserialize
   * @param ClassConstructor Optional class constructor for creating instances
   * @param referenceMap Optional map for resolving autoId references
   */
  deserializeValue(e, i, s) {
    if (e == null || e._type || typeof e.getType == "function")
      return e;
    if (e && typeof e == "object" && e.__ref && e.autoId)
      return s && s.has(e.autoId) ? s.get(e.autoId) : this.lazyRecreate(e);
    if (e && typeof e == "object" && (e.__entityType || e.__ref))
      return this.lazyRecreate(e);
    if (i && typeof i == "function")
      return typeof i.fromData == "function" ? i.fromData(e) : new i(e);
    if (Array.isArray(e))
      return e.map((n) => this.deserializeValue(n, void 0, s));
    if (e && typeof e == "object" && e.constructor === Object) {
      const n = {};
      for (const [a, o] of Object.entries(e))
        n[a] = this.deserializeValue(o, void 0, s);
      return n;
    }
    return e;
  }
}
class Ue extends gd {
  /**
   * Fast type identification property
   * Set during construction for O(1) type checking via guards
   * This eliminates the need for expensive instanceof checks
   */
  _type;
  /**
   * Flag indicating this instance has been validated by Zod
   * Prevents redundant validation when cloning or updating already-validated instances
   * Performance optimization: ~6% speedup by skipping unnecessary validation
   */
  _validated = !1;
  // Cached reference to recreate function to avoid circular dependency
  static recreateFunc = null;
  /**
   * Register the recreate function from the recreation module
   * Called by recreation.ts after it's loaded to break circular dependency
   */
  static registerRecreateFunction(e) {
    Ue.recreateFunc = e;
  }
  /**
   * Zod schema for validation and property definition
   * Must be defined in subclasses
   */
  static schema;
  /**
   * Computed property definitions
   * Must be defined in subclasses (can be empty object if no computed properties)
   */
  static computedProperties = {};
  /**
   * Default values inferred from schema
   * Automatically set by subclasses using schema.parse({})
   */
  static defaults;
  /**
   * Constructor that handles Zod parsing and property application
   */
  constructor(e = {}) {
    super(e);
    const i = this.constructor.schema;
    if (!i)
      throw new Error(`${this.constructor.name} must define a static 'schema' property`);
    const s = this.extractValidationOptions(e), a = e._validated === !0 || s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let o;
    if (a)
      o = this.recreateNestedClasses(e, i);
    else if (s.enableStrictMode) {
      const r = i.safeParse(e);
      r.success ? o = r.data : o = this.filterInvalidFields(e, r.error, i);
    } else {
      const r = i.safeParse(e);
      if (r.success)
        o = r.data;
      else {
        const l = i.partial().safeParse(e);
        l.success ? o = l.data : o = this.filterInvalidFields(e, l.error, i);
      }
    }
    Object.assign(this, o), this.applyComputedProperties(), Object.defineProperty(this, "_type", {
      value: this.getType(),
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    }), a || Object.defineProperty(this, "_validated", {
      value: !0,
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    });
  }
  /**
   * Filter out fields that failed validation while preserving internal fields
   * This is a last-resort fallback to prevent constructor/update from throwing
   *
   * @param data - Original data that failed validation
   * @param error - The ZodError containing validation issues
   * @param schema - The schema to use for re-parsing
   * @returns Cleaned and parsed data, or raw data if all else fails
   */
  filterInvalidFields(e, i, s) {
    const n = [
      "autoId",
      "__context",
      "__entityType",
      "__ref",
      "_validated",
      "_type",
      "_metadata",
      "skipSchemaValidation",
      "skipBusinessValidation",
      "skipValidation",
      "validationMode",
      "enableStrictMode"
    ], a = { ...e }, o = /* @__PURE__ */ new Set();
    for (const l of i.issues)
      if (l.path.length > 0) {
        const c = l.path[0];
        n.includes(c) || o.add(c);
      }
    o.forEach((l) => {
      delete a[l];
    });
    const r = s.partial().safeParse(a);
    return r.success ? r.data : a;
  }
  /**
   * Recreate nested class instances based on schema metadata
   * This handles zRef and zRefArray fields automatically when schema validation is skipped
   *
   * When validation runs, the zRef transforms handle instantiation automatically.
   * This method is only used when skipValidation=true to ensure nested classes are still instantiated.
   */
  recreateNestedClasses(e, i) {
    if (!e || typeof e != "object" || Array.isArray(e)) return e;
    const s = { ...e }, n = i.shape;
    for (const [a, o] of Object.entries(n)) {
      const r = s[a];
      if (r == null || typeof r == "object" && typeof r.getType == "function")
        continue;
      const l = this.extractClassNameFromSchema(o);
      l ? s[a] = this.deserializeValueWithClassName(r, l) : s[a] = this.deserializeValue(r);
    }
    return s;
  }
  /**
   * Extract className from a zRef schema field
   * Handles zRef, zRefArray, and optional/nullable wrappers
   */
  extractClassNameFromSchema(e) {
    let i = e;
    for (; i; ) {
      if (i.__zRefClassName)
        return i.__zRefClassName;
      i = i._def?.innerType || i._def?.schema || i._def?.type || null;
    }
    i = e;
    let s = "";
    for (; i; ) {
      if (i._def?.description) {
        s = i._def.description;
        break;
      }
      i = i._def?.innerType || i._def?.schema || i._def?.type || null;
    }
    const n = s.match(/Reference to (\w+)/);
    return n ? n[1] : null;
  }
  /**
   * Deserialize a value with a known className hint
   * Used when schema validation is skipped but we know what class to instantiate
   */
  deserializeValueWithClassName(e, i) {
    if (e == null || typeof e == "object" && typeof e.getType == "function")
      return e;
    if (Array.isArray(e))
      return e.map((s) => this.deserializeValueWithClassName(s, i));
    if (typeof e == "object" && e !== null) {
      const s = e.__entityType || i, a = gs().get(s);
      if (a)
        try {
          return typeof a.fromData == "function" ? a.fromData(e) : new a(e);
        } catch {
          return e;
        }
    }
    return e;
  }
  /**
   * Recreate a single reference based on class name
   * This method tries to find existing instances in the context before creating new ones
   *
   * Context structure:
   * - entities: Map of id -> instance for quick lookups
   * - stockList: Array of Stock instances
   * - shapeList: Array of Shape instances
   * - groupList: Array of Group instances
   * - [className.toLowerCase() + 'List']: Generic list lookup pattern
   */
  recreateReference(e, i, s) {
    if (e == null || e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (s && e && typeof e == "object") {
      const n = e.autoId || e.id;
      if (n && s.entities?.has?.(n))
        return s.entities.get(n);
      if (i === "Stock" && s.stockList) {
        const o = s.stockList.find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
      if (i === "Shape" && s.shapeList) {
        const o = s.shapeList.find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
      if (i === "Group" && s.groupList) {
        const o = s.groupList.find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
      const a = i.toLowerCase() + "List";
      if (s[a] && Array.isArray(s[a])) {
        const o = s[a].find((r) => r.id === n || r.autoId === n);
        if (o) return o;
      }
    }
    return e && typeof e == "object" ? (s && (e.id || e.autoId), Ue.recreateFunc ? Ue.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
  }
  /**
   * Apply computed properties as getters
   * This is called automatically in the constructor
   */
  applyComputedProperties() {
    const e = this.constructor.computedProperties;
    if (e)
      for (const [i, s] of Object.entries(e)) {
        if (!s || typeof s != "object") continue;
        const n = s;
        n.compute && Object.defineProperty(this, i, {
          get() {
            return n.compute(this);
          },
          enumerable: !1,
          // Don't enumerate computed properties - they shouldn't be serialized
          configurable: !0
        });
      }
  }
  /**
   * Update properties with validation
   * Parses data through Zod schema before applying
   *
   * @param data - The properties to update, can include __context for reference resolution
   */
  update(e) {
    const i = this.constructor.schema;
    if (!i) {
      super.update(e);
      return;
    }
    const s = this.extractValidationOptions(e), n = s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let a;
    if (n)
      a = this.recreateNestedClasses(e, i);
    else {
      const o = i.partial().safeParse(e);
      o.success ? a = o.data : a = this.filterInvalidFields(e, o.error, i);
    }
    super.update(a);
    for (const o in a)
      if (Object.prototype.hasOwnProperty.call(a, o)) {
        const r = Object.getOwnPropertyDescriptor(this, o) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), o);
        if (r && r.get && !r.set)
          continue;
        this[o] = a[o];
      }
  }
  /**
   * Get default values from schema
   * Subclasses can use this to initialize static defaults
   */
  static getDefaults(e) {
    return e.parse({});
  }
  /**
   * Extract validation options from data
   * These control how validation is performed
   */
  extractValidationOptions(e) {
    return {
      skipSchemaValidation: e?.skipSchemaValidation,
      skipBusinessValidation: e?.skipBusinessValidation || e?.skipValidation,
      validationMode: e?.validationMode,
      enableStrictMode: e?.enableStrictMode
    };
  }
  /**
   * Perform schema validation using Zod
   * Returns validation issues if any
   */
  validateSchema() {
    const e = this.constructor.schema;
    if (!e) return [];
    try {
      const i = this.toData ? this.toData() : { ...this };
      return e.parse(i), [];
    } catch (i) {
      if (i instanceof hr)
        return i.issues.map((s) => ({
          code: s.code,
          path: s.path.map((n) => typeof n == "symbol" ? n.toString() : n),
          message: s.message
        }));
      throw i;
    }
  }
  /**
   * Clean internal fields from entity or array of entities for API output
   * Removes all system-internal fields that should not be exposed in API responses
   */
  static cleanEntityForAPI(e) {
    if (!e) return e;
    if (Array.isArray(e))
      return e.map((s) => Ue.cleanEntityForAPI(s));
    if (typeof e != "object")
      return e;
    const i = { ...e };
    return delete i.autoId, delete i.__ref, delete i.__entityType, delete i.__context, delete i._metadata, delete i.validationIssues, delete i.isValid, delete i.issues, delete i.warnings, i;
  }
  /**
   * Extract field names that need number format conversion from a schema
   * Identifies fields that accept both number and string inputs and need conversion between decimal/fraction formats
   */
  static extractNumberFormatFields(e) {
    const i = [], s = e.shape;
    for (const [n, a] of Object.entries(s)) {
      if (n.startsWith("_"))
        continue;
      if (n === "trim") {
        i.push(n);
        continue;
      }
      const o = this.unwrapSchema(a);
      if (o instanceof Hc) {
        const r = o.options.some((c) => c instanceof Uc), l = o.options.some((c) => c instanceof Yc);
        r && l && i.push(n);
      }
    }
    return i;
  }
  /**
   * Unwrap schema to get the base type (handles ZodEffects, ZodOptional, etc.)
   */
  static unwrapSchema(e) {
    const i = e._def?.typeName;
    if (e instanceof Kc || e instanceof Zc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Xc)
      return this.unwrapSchema(e._def?.innerType);
    if (i === "ZodEffects")
      return this.unwrapSchema(e._def?.schema);
    if (e._def?.type === "pipe") {
      const s = e._def?.out;
      if (s)
        return this.unwrapSchema(s);
    }
    return e;
  }
}
const md = ["lr", "rl", "bt", "tb"];
E({
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  dimension: pe(["l", "w"]).optional(),
  shapeCollisions: ee(be()).optional()
});
E({
  id: h().nullable().optional(),
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  origin: h().optional(),
  dimension: pe(["l", "w"]).optional(),
  direction: pe(md).nullable().optional(),
  type: h().nullable().optional()
});
const bd = E({
  // ========== Identification ==========
  // Unique identifier for this line
  id: h(),
  // Type classification for this line
  type: h().optional(),
  // ========== Coordinates ==========
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: h().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: ee(be()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: ee(be()).default([])
}), yd = {
  // Line dimension (horizontal or vertical)
  dimension: {
    compute: (t) => {
      const e = Math.abs(t.x2 - t.x1), i = Math.abs(t.y2 - t.y1);
      return e > i ? "l" : i > e ? "w" : null;
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "'l' | 'w' | null"
    }
  },
  // Line direction based on coordinates
  direction: {
    compute: (t) => {
      const e = t.x2 - t.x1, i = t.y2 - t.y1;
      return Math.abs(e) > Math.abs(i) ? e > 0 ? "lr" : "rl" : Math.abs(i) > Math.abs(e) ? i > 0 ? "bt" : "tb" : null;
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "LineDirection"
    }
  },
  // Calculate line length
  length: {
    compute: (t) => {
      const e = t.x2 - t.x1, i = t.y2 - t.y1;
      return Math.sqrt(e * e + i * i);
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "number"
    }
  },
  coords: {
    compute: (t) => ({ x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2 })
  }
};
class xi extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = bd;
  static computedProperties = yd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    "shapeCollisions"
    // Runtime-calculated collision data
  ];
  constructor(e) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return ne.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!ae.isNumber(this.x1) || !ae.isNumber(this.x2) || !ae.isNumber(this.y1) || !ae.isNumber(this.y2)) && e.push(new ie({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new ie({
      message: "Line must have non-zero length",
      type: "error"
    })), this.issues = e, e;
  }
  /**
    * Check collision with shapes
    */
  checkCollisionWithShapes(e, i, s = !1) {
    if (!i || !i.length) return !1;
    if (!this.dimension)
      throw new Error("No line dimension for collision check");
    const n = e.halfBladeWidth;
    this.shapeCollisions = this.shapeCollisions || [];
    const a = i.filter((o) => o.added);
    for (const o of a) {
      let r = !1, l = !1;
      if (this.dimension === "l" ? (r = ae.greaterThan(this.x2, o.x) && ae.lessThan(this.x1, o.x + o.l), l = ae.greaterThan(this.y1 + n, o.y) && ae.lessThan(this.y1 - n, o.y + o.w)) : this.dimension === "w" && (r = ae.greaterThan(this.x1 + n, o.x) && ae.lessThan(this.x1 - n, o.x + o.l), l = ae.greaterThan(this.y2, o.y) && ae.lessThan(this.y1, o.y + o.w)), r && l)
        if (s)
          this.shapeCollisions.push(o);
        else
          return !0;
    }
    return s ? this.shapeCollisions : this.shapeCollisions.length > 0;
  }
  /**
    * Check if line is horizontal
    */
  isHorizontal() {
    return this.dimension === "l";
  }
  /**
    * Check if line is vertical
    */
  isVertical() {
    return this.dimension === "w";
  }
  // toData() method removed - using base class implementation
  // Base class uses serializationProperties to determine what to serialize
  // Removed by cleanup script on 2025-08-18
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), this.validate();
  }
  /**
    * Create line from coordinates
    */
  static fromCoordinates(e, i, s, n, a, o) {
    return new xi({ x1: e, y1: i, x2: s, y2: n, origin: a, type: o });
  }
  get lineDimension() {
    return !ae.isNumber(this.x1) || !ae.isNumber(this.x2) || !ae.isNumber(this.y1) || !ae.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !ae.isNumber(this.x1) || !ae.isNumber(this.x2) || !ae.isNumber(this.y1) || !ae.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
  }
  get coordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
  // length is a computed property defined in the schema
  // It is automatically added as a getter by applySchemaComputedProperties
}
const To = ["topLeft", "topRight", "bottomLeft", "bottomRight"], vd = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], wd = ["lr", "rl", "bt", "tb"], Sd = E({
  // ========== Coordinates ==========
  x: d().default(0),
  y: d().default(0),
  z: d().default(0),
  // ========== Shape References ==========
  a: h().optional(),
  b: h().optional(),
  stock: ve("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: pe(wd).nullable().optional(),
  type: h().optional(),
  corner: pe(To).optional(),
  shapePosition: pe(To).optional(),
  grid: pe(vd).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: L().default(!1),
  collision: L().default(!1),
  tooClose: L().default(!1),
  adjustedForMinSpacing: L().default(!1)
}), xd = {
  // Get coordinates as object
  coords: {
    compute: (t) => ({
      x: t.x,
      y: t.y
    }),
    metadata: {
      cache: !1,
      dependencies: ["x", "y"],
      returnType: "{ x: number; y: number }"
    }
  }
}, kd = {
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
}, Ts = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, As = {
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
class tt extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Sd;
  static computedProperties = xd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  constructor(e, i, s) {
    typeof e == "object" ? super(e) : super({
      x: parseFloat(String(e)),
      y: parseFloat(String(i)),
      z: s !== void 0 ? parseFloat(String(s)) : 0
    }), this.validate();
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.Point;
  }
  /**
   * Validate point coordinates
   */
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  /**
   * Distance to another point
   */
  distanceTo(e) {
    const i = this.x - e.x, s = this.y - e.y, n = (this.z || 0) - (e.z || 0);
    return Math.sqrt(i * i + s * s + n * n);
  }
  /**
   * Check if this point equals another
   */
  equals(e, i = 1e-4) {
    return Math.abs(this.x - e.x) < i && Math.abs(this.y - e.y) < i && Math.abs((this.z || 0) - (e.z || 0)) < i;
  }
  /**
   * Create a point from coordinates
   */
  static fromCoords(e, i, s) {
    return new tt(e, i, s);
  }
  /**
   * Get unique key for this point (used by PointCollection)
   */
  getKey() {
    return `${this.x},${this.y}`;
  }
  /**
   * Clone point with optional new coordinates
   * NOTE: optimized for performance
   */
  cloneAt(e = null, i = null) {
    const s = new tt(e ?? this.x, i ?? this.y);
    for (const n in this)
      n !== "x" && n !== "y" && n !== "autoId" && (s[n] = this[n]);
    return s;
  }
  /**
   * Check if point collides with a shape
   */
  collidesWith(e) {
    return this.x >= e.x && this.x <= e.x + e.l && this.y >= e.y && this.y <= e.y + e.w;
  }
  /**
   * Check if this point is identical to another
   */
  isIdenticalTo(e) {
    return this.x === e.x && this.y === e.y;
  }
  /**
   * Get available shape positions for placement
   * @returns the position of the shape relative to the point e.g. bottomRight means the shape is placed to the bottom right of the point
   * @remarks does not cater for diagonals
   */
  getAvailableShapePositions(e) {
    const i = /* @__PURE__ */ new Set();
    if (this.raycast) {
      const s = kd[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (Ts[this.corner] && (this.grid ? Ts[this.corner][this.grid] && Ts[this.corner][this.grid].forEach((s) => i.add(s)) : Ts[this.corner].default?.forEach((s) => i.add(s))), i) : (As[this.corner] && (this.grid ? As[this.corner][this.grid] && As[this.corner][this.grid].forEach((s) => i.add(s)) : As[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
class mn extends Ue {
  // Zod schema for validation and serialization
  static schema = Ga;
  static computedProperties = qa;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Et(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && rt(this, 0), this.orientationLock === "w" && rt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = qt(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = Vu(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new ie({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new ie({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new ie({
        message: "Trim values exceed width",
        type: "warning",
        field: [["trim"]],
        item: this
      }));
    }
    return this.needsAsyncValidation() && Promise.resolve().then(() => this.validateAsync()), this.issues;
  }
  /**
   * Check if async validation is needed
   * Override in subclasses that need async validation
   */
  needsAsyncValidation() {
    return !1;
  }
  /**
   * Async business rule validation
   * Override in subclasses for complex async validations
   */
  async validateAsync() {
    return this.issues;
  }
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    "numberFormat",
    // Non-serializable formatting options
    "proximity"
    // Runtime-generated cache object
  ];
  // Legacy compressionExcludedProperties removed - use schema-based .behavior() instead
  /**
   * Update properties from data
   * Uses SchemaClass validation handling which respects validation options
   */
  update(e) {
    super.update(e), (e.l !== void 0 || e.w !== void 0 || e.id !== void 0) && this.calculateDimensions(), e.skipValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Check if this rectangle fits within another
   */
  fitsWithin(e) {
    const i = this.trimmedDimensions, s = e.trimmedDimensions;
    return i.l <= s.l && i.w <= s.w || this.canRotate && i.l <= s.w && i.w <= s.l;
  }
  /**
   * Apply trim to dimensions
   */
  applyTrim() {
    !this.hasTrim || this.trimmed || (this.l = this.l - this.trim.w1 - this.trim.w2, this.w = this.w - this.trim.l1 - this.trim.l2, this.trimmed = !0);
  }
  removeTrim() {
    !this.hasTrim || !this.trimmed || (this.l = this.l + this.trim.w1 + this.trim.w2, this.w = this.w + this.trim.l1 + this.trim.l2, this.trimmed = !1);
  }
  /**
   * Rotate the rectangle 90 degrees
   */
  rotate() {
    if (!this.canRotate) return;
    [this.l, this.w] = [this.w, this.l];
    const e = {
      l1: this.trim.w1,
      l2: this.trim.w2,
      w1: this.trim.l1,
      w2: this.trim.l2
    };
    this.trim = e, this.grain === "l" ? this.grain = "w" : this.grain === "w" && (this.grain = "l");
  }
  // Clone methods now inherited from AutoSerializable
  // Subclasses can override getCloneResetProperties() and getCloneOverrides() for customization
  /**
   * Check if grain matches another entity
   * No grain means it matches anything
   */
  hasMatchingGrain(e) {
    return !this.grain || !e.grain ? !0 : this.grain === e.grain;
  }
  /**
   * Get grain-aware dimensions
   * Returns dimensions along and across the grain
   */
  getGrainDimensions() {
    return this.grain === "l" ? { along: this.l, across: this.w } : this.grain === "w" ? { along: this.w, across: this.l } : {
      along: Math.max(this.l, this.w),
      across: Math.min(this.l, this.w)
    };
  }
  /**
   * Check equality with another rectangle
   */
  equals(e, i = !0, s = !1) {
    return !(i && (this.l !== e.l || this.w !== e.w || this.t !== e.t) || s && (this.material !== e.material || this.name !== e.name || this.grain !== e.grain));
  }
  /**
   * Get all sides of the rectangle as Line objects
   */
  getSides() {
    return [
      this.getSide("bottom"),
      this.getSide("right"),
      this.getSide("top"),
      this.getSide("left")
    ];
  }
  /**
   * Get a specific side of the rectangle as a Line object
   */
  getSide(e) {
    const i = this.x ?? 0, s = this.y ?? 0;
    switch (e) {
      case "bottom":
        return new xi({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new xi({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new xi({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new xi({
          x1: i,
          x2: i,
          y1: s,
          y2: s + this.w,
          type: "left",
          validationMode: "none"
          // parentId: this.id
        });
    }
  }
  sharesSide(e, i = 0, s = null) {
    switch (s) {
      case "left":
        return e.x + e.l + i === this.x;
      case "right":
        return e.x === this.x + this.l + i;
      case "bottom":
        return e.y + e.w + i === this.y;
      case "top":
        return e.y === this.y + this.w + i;
    }
    return !1;
  }
  sameSide(e, i = null) {
    switch (i) {
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
  getCorners() {
    return {
      bottomLeft: new tt(this.x, this.y),
      topLeft: new tt(this.x, this.y + this.w),
      topRight: new tt(this.x + this.l, this.y + this.w),
      bottomRight: new tt(this.x + this.l, this.y)
    };
  }
  /**
   * Creates or retrieves a cached rectangle used for proximity detection.
   * Optimized for frequent calls with the same distance parameter.
   */
  createProximityRectangle(e) {
    if (!e || e < 0) return null;
    const i = this.proximity;
    if (i?.distance === e) {
      const n = i.rectangle;
      return this.x === 0 ? (n.x = 0, n.l = this.l + e) : (n.x = this.x - e, n.l = this.l + e * 2), this.y === 0 ? (n.y = 0, n.w = this.w + e) : (n.y = this.y - e, n.w = this.w + e * 2), n;
    }
    const s = new mn({
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
}
class bn extends mn {
  // Zod schema for validation and serialization
  static schema = pn;
  static computedProperties = gn;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return ne.Container;
  }
  /**
    * Validate container-specific properties
    */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new ie({
        item: this,
        field: [["type"]],
        message: `Container type ${s ?? "N/A"} is not valid`
      });
      this.issues.push(n);
    }
  }
  /**
    * Add a shape to the container
    */
  addShape(e) {
    this.shapes || (this.shapes = []), this.shapes.push(e);
  }
  /**
    * Remove a shape from the container
    */
  removeShape(e) {
    if (!this.shapes) return !1;
    const i = this.shapes.indexOf(e);
    return i > -1 ? (this.shapes.splice(i, 1), !0) : !1;
  }
  /**
    * Clear all shapes from the container
    */
  clearShapes() {
    this.shapes = [];
  }
  // serializationProperties removed - now uses schema fields automatically
  // compressionExcludedProperties removed - now defined in Container.zod.ts schema using .behavior()
  /**
    * Update properties from data
    * Automatically updates all schema-defined properties
    */
  update(e) {
    const i = bn.schema.partial().parse(e);
    for (const s in i)
      this[s] = i[s];
  }
  /**
    * Check if this container can fit a shape
    */
  canFitShape(e) {
    if (!e || !e.l || !e.w) return !1;
    const i = this.trimmedDimensions;
    return e.l <= i.l && e.w <= i.w || !e.preventAutoRotation && e.l <= i.w && e.w <= i.l;
  }
  /**
    * Check if container is a specific stock type
    */
  isStockType(e) {
    return this.stockType === e;
  }
}
const Id = E({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: ue([
    fe(0),
    fe(1)
  ]).describe("Rotation"),
  order: d().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: L().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
}), Mr = E({
  // Strip direction
  myStripDirection: mi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: ue([
    ve("Shape", { nullable: !0 }),
    ve("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization"),
  // Phase number
  myPhase: d().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: E({
    subsetUsed: L().optional().describe("Whether a subset was used for strip shape batches"),
    groups: he(h(), Id).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Mr.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const Pd = {};
class Xt extends Ue {
  // Required: Define schema and computed properties
  static schema = Mr;
  static computedProperties = Pd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  /**
   * Constructor with automated property application
   */
  constructor(e = {}) {
    super(e);
  }
  /**
   * Check if this has strip shape batch data
   */
  hasStripShapeBatches() {
    return this.stripShapeBatches != null && this.stripShapeBatches.groups != null && Object.keys(this.stripShapeBatches.groups).length > 0;
  }
  /**
   * Get the phase or default to 0
   */
  getPhase() {
    return this.myPhase ?? 0;
  }
  /**
   * Set the phase
   */
  setPhase(e) {
    this.myPhase = e;
  }
  /**
   * Get strip direction with type safety
   */
  getStripDirection() {
    return this.myStripDirection;
  }
  /**
   * Set strip direction with flexible input
   */
  setStripDirection(e) {
    this.myStripDirection = e;
  }
  /**
   * Reset to default values (preserves stripShapeBatches)
   */
  reset() {
    const e = this.stripShapeBatches, i = this.constructor.getDefaults(
      this.constructor.schema
    );
    Object.assign(this, i), e && (this.stripShapeBatches = e);
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.GuillotineState;
  }
  getStripShapeBatchData(e) {
    return typeof e != "number" || !this?.stripShapeBatches || !this.stripShapeBatches.groups || !(e in this.stripShapeBatches.groups) ? !1 : this.stripShapeBatches.groups[e];
  }
  isInStripShapeBatch(e) {
    return !!this.getStripShapeBatchData(e);
  }
  /**
   * Reset strip shape batch groups to empty object
   */
  resetStripShapeBatchGroups() {
    this.stripShapeBatches ? this.stripShapeBatches.groups = {} : this.stripShapeBatches = { groups: {} };
  }
  /**
   * Set a specific strip shape batch group
   */
  setStripShapeBatchGroup(e, i) {
    this.stripShapeBatches || (this.stripShapeBatches = { groups: {} }), this.stripShapeBatches.groups || (this.stripShapeBatches.groups = {}), this.stripShapeBatches.groups[e] = i;
  }
}
function Br(t, e = "cc") {
  if (!t) return t;
  const i = {
    l1: "w2",
    l2: "w1",
    w1: "l1",
    w2: "l2"
  }, s = {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1"
  }, n = {
    a: "d",
    // bottom left -> bottom right
    b: "a",
    // top left -> bottom left
    c: "b",
    // top right -> top left
    d: "c"
    // bottom right -> top right
  }, a = {}, r = Object.keys(t).some((l) => ["x1", "x2", "y1", "y2"].includes(l)) ? s : i;
  if (e === "cc") {
    for (const [l, c] of Object.entries(r))
      l in t && (a[c] = t[l]);
    for (const [l, c] of Object.entries(n))
      l in t && (a[c] = t[l]);
  } else {
    for (const [l, c] of Object.entries(r))
      c in t && (a[l] = t[c]);
    for (const [l, c] of Object.entries(n))
      c in t && (a[l] = t[c]);
  }
  return a;
}
function da(t = 0, e, i = null, s = null, n = null) {
  if (!xe(i) && !Vt || s === "stock") return !1;
  let a, o;
  if (xe(i) ? a = i.orientationLock : Vt(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || Vt(i))
    switch (e) {
      case "n":
        o = a === "w" || n === "w";
        break;
      case "l":
      case "y":
        o = a === "w" || n === "w";
        break;
      case "w":
        o = a === "l" || n === "l";
        break;
      default:
        o = n === "w";
    }
  else if (t === 1)
    if (i) o = i.w > i.l;
    else return !1;
  else if (t === 2) {
    if (!i) return !1;
    switch (e) {
      case "n":
        o = i.w > i.l;
        break;
      case "y":
      case "l":
        o = i.w > i.l;
        break;
      case "w":
        o = i.l >= i.w;
        break;
      default:
        o = !1;
    }
  }
  return o;
}
function Cd(t, e, i = null, s = null, n = null) {
  if (!xe(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 ? da(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : a;
}
const Td = ["l", "w"], Ad = ["top", "bottom", "left", "right", "merged"], Od = E({
  // Coordinates
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // Dimension and position
  dimension: pe(Td).optional(),
  position: pe(Ad).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: ve("Stock"),
  // Guillotine properties
  isGuillotine: L().default(!1),
  guillotineState: E({
    order: d().nullable().optional(),
    parentSegmentID: h().nullable().optional(),
    phase: d().nullable().optional(),
    segmentCutOrder: d().nullable().optional(),
    partProduced: h().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: E({
    order: d().nullable().optional(),
    function: d().nullable().optional(),
    isDummy: L().nullable().optional(),
    headCutStrip: L().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: L().default(!1),
  isTrim: L().default(!1),
  beamTrimL1: L().default(!1),
  beamTrimL2: L().default(!1),
  beamTrimW1: L().default(!1),
  beamTrimW2: L().default(!1),
  // Distances
  distances: E({
    bottom: d().nullable().optional(),
    left: d().nullable().optional(),
    right: d().nullable().optional(),
    top: d().nullable().optional(),
    partSize: d().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: L().optional().behavior({ compress: "exclude" })
}), $d = {
  // Check if cut is inside stock boundaries
  isInsideStock: {
    compute: (t) => {
      const e = t.stock;
      if (!e) return !1;
      const i = (e.bladeWidth || 0) / 2;
      switch (t.position) {
        case "bottom":
          return t.y1 + i > 0;
        case "left":
          return t.x1 + i > 0;
        case "top":
          return t.y1 - i < (e.w || 0);
        case "right":
          return t.x1 - i < (e.l || 0);
        default:
          return t.x1 >= 0 && t.x2 <= (e.l || 0) && t.y1 >= 0 && t.y2 <= (e.w || 0);
      }
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2", "position", "stock"],
      returnType: "boolean"
    }
  },
  // Check if cut is horizontal
  isHorizontal: {
    compute: (t) => t.dimension === "l",
    metadata: {
      cache: !1,
      dependencies: ["dimension"],
      returnType: "boolean"
    }
  },
  // Check if cut is vertical
  isVertical: {
    compute: (t) => t.dimension === "w",
    metadata: {
      cache: !1,
      dependencies: ["dimension"],
      returnType: "boolean"
    }
  },
  // Check if this is a trim cut
  isTrimCut: {
    compute: (t) => t.isTrim || t.beamTrimL1 || t.beamTrimW1,
    metadata: {
      cache: !1,
      dependencies: ["isTrim", "beamTrimL1", "beamTrimW1"],
      returnType: "boolean"
    }
  },
  // Check if cut is marked for removal
  isMarkedForRemoval: {
    compute: (t) => t.remove === !0,
    metadata: {
      cache: !1,
      dependencies: ["remove"],
      returnType: "boolean"
    }
  },
  // Calculate line dimension from coordinates
  lineDimension: {
    compute: (t) => t.x1 === t.x2 && t.y1 !== t.y2 ? "w" : t.y1 === t.y2 && t.x1 !== t.x2 ? "l" : null,
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "'l' | 'w' | null"
    }
  },
  // Get cut coordinates as object
  coordinates: {
    compute: (t) => ({
      x1: t.x1,
      x2: t.x2,
      y1: t.y1,
      y2: t.y2
    }),
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2"],
      returnType: "{ x1: number; x2: number; y1: number; y2: number }"
    }
  },
  // Calculate cut length
  length: {
    compute: (t) => {
      if (t.dimension === "l")
        return t.x2 - t.x1;
      if (t.dimension === "w")
        return t.y2 - t.y1;
      switch (t.position) {
        case "top":
        case "bottom":
          return t.x2 - t.x1;
        case "left":
        case "right":
          return t.y2 - t.y1;
        default:
          return 0;
      }
    },
    metadata: {
      cache: !1,
      dependencies: ["dimension", "x1", "x2", "y1", "y2", "position", "stock"],
      returnType: "number"
    }
  },
  // Calculate cut area
  area: {
    compute: (t) => {
      const i = t.stock?.bladeWidth ?? 0;
      if (t.dimension === "l")
        return (t.x2 - t.x1) * i;
      if (t.dimension === "w")
        return (t.y2 - t.y1) * i;
      switch (t.position) {
        case "top":
        case "bottom":
          return (t.x2 - t.x1) * i;
        case "left":
        case "right":
          return (t.y2 - t.y1) * i;
        default:
          return 0;
      }
    },
    metadata: {
      cache: !1,
      dependencies: ["dimension", "x1", "x2", "y1", "y2", "position", "stock"],
      returnType: "number"
    }
  },
  // Calculate cut edge wastage
  edgeWastage: {
    compute: (t) => {
      const e = t.stock, i = (e?.bladeWidth ?? 0) / 2;
      switch (t.position) {
        case "top":
          return t.y1 - i < (e?.w ?? 0) ? t.x2 - t.x1 : 0;
        case "bottom":
          return t.y1 + i > 0 ? t.x2 - t.x1 : 0;
        case "left":
          return t.x1 + i > 0 ? t.y2 - t.y1 : 0;
        case "right":
          return t.x1 - i < (e?.l ?? 0) ? t.y2 - t.y1 : 0;
        default:
          return 0;
      }
    },
    metadata: {
      cache: !1,
      dependencies: ["x1", "x2", "y1", "y2", "position", "stock"],
      returnType: "number"
    }
  }
};
class Wa extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Od;
  static computedProperties = $d;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  // Compression exclusions now defined in schema using .behavior()
  // Note: stock is handled specially in serializeValue to create a reference
  constructor(e) {
    if (!e.stock)
      throw new Error("Stock is required for Cut creation");
    const i = { ...e };
    i.x2 < i.x1 && ([i.x1, i.x2] = [i.x2, i.x1]), i.y2 < i.y1 && ([i.y1, i.y2] = [i.y2, i.y1]), super(i), this.dimension || (this.dimension = this.lineDimension);
  }
  /**
    * Get entity type
    */
  getType() {
    return ne.Cut;
  }
  /**
    * Validate cut
    */
  validate() {
    return [];
  }
  // Note: bladeWidth and halfBladeWidth are now computed properties from schema
  /**
    * Trim cut coordinates to fit within stock boundaries
    */
  trim() {
    this.dimension === "l" ? (this.x1 < 0 && (this.x1 = 0), this.x2 > this.stock.l && (this.x2 = this.stock.l)) : this.dimension === "w" && (this.y1 < 0 && (this.y1 = 0), this.y2 > this.stock.w && (this.y2 = this.stock.w));
  }
  // Note: isInsideStock, isHorizontal, isVertical, isTrimCut are now computed properties from schema
  /**
    * Mark cut for removal
    */
  markForRemoval() {
    this.remove = !0;
  }
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), ("x1" in e || "x2" in e || "y1" in e || "y2" in e) && (this.dimension = this.lineDimension);
  }
  /**
    * Create cut from coordinates
    */
  static fromCoordinates(e, i, s, n, a, o) {
    return new Wa({ x1: e, y1: i, x2: s, y2: n, position: o, stock: a });
  }
  // Note: lineDimension, coordinates, and length are now computed properties from schema
  /**
   * Override serializeValue to handle stock reference in compressed mode
   */
  // serializeValue removed - AutoSerializable handles compression automatically via schema behaviors
  get classReferences() {
    return {
      stock: "autoId"
    };
  }
}
const Fd = E({
  fill: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  cohesion: d().default(0),
  area: d().default(0),
  edge: d().default(0),
  alignment: d().default(0),
  exactFit: d().default(0),
  total: d().default(0),
  shapes: ue([
    ve("Shape", { nullable: !0 }),
    ve("Group", { nullable: !0 })
  ]).optional(),
  group: ve("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: mi.optional()
}).behavior({ clone: "reset" }), Ld = E({
  exactStripFill: d().default(0),
  fill: d().default(0),
  cohesion: d().default(0),
  fenceConsistency: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  sameStripBonus: d().default(0),
  aspectRatio: d().optional(),
  total: d().default(0),
  cutDirection: mi,
  myStripDirection: mi.optional(),
  myStripParent: ue([
    ve("Shape", { nullable: !0 }),
    ve("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: d().optional()
}).behavior({ clone: "reset" }), Ao = ue([
  Fd,
  Ld,
  // Also support the generic object with catchall for backward compatibility
  E({
    cutDirection: mi.optional(),
    myStripParent: ue([
      ve("Shape", { nullable: !0 }),
      ve("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: mi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), ms = Ga.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ee(h()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: E({
    material: L(),
    thickness: L(),
    fit: L(),
    width: L()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: ve("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: Pt() ? "full" : "exclude",
    compress: Pt() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: he(h(), d()).default({}).describe("Priority levels for optimization"),
  weighting: he(h(), d()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: L().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: E({
    sampleRotations: ee(d().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: L().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: L().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: d().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: ve("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: he(
    h(),
    he(h(), L())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: E({
    x: d().nullable().default(null),
    y: d().nullable().default(null),
    rot: ue([fe(0), fe(1)]).nullable().default(null),
    total: d().nullable().default(null),
    weighting: he(h(), d()).optional(),
    group: ve("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Ao.optional(),
    point: be().optional().describe("Associated point for placement"),
    myStripParent: ue([
      ve("Shape", { nullable: !0 }),
      ve("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: mi.optional(),
    myStripDirection: mi.optional(),
    stock: ve("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: Pt() ? "full" : "exclude"
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Ao.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: Pt() ? "full" : "exclude"
  }),
  // Minimum spacing
  minSpacing: d().min(0).default(0).describe("Minimum spacing around shape or group")
}), bs = {
  // Include all Rectangle computed properties
  ...qa
  // Placeable doesn't define additional computed properties
};
ms.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(bs)
}));
class Ha extends mn {
  // Zod schema for validation and serialization
  static schema = ms;
  static computedProperties = bs;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new Xt();
    else if (!(this.guillotineState instanceof Xt)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new Xt(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), Qe(this) && (!this.group || typeof this.group != "object") && (this.group = {
      inUserGroup: !1,
      inGroup: !1,
      reference: null,
      addedAsGroup: ""
    });
  }
  /**
   * Ensure guillotineState is always a valid GuillotineState instance
   * Can be called anytime to ensure validity, especially after cloning or deserialization
   */
  ensureGuillotineState() {
    if (!this.guillotineState || !(this.guillotineState instanceof Xt)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new Xt(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof Xt ? this.guillotineState : null;
    super.update(e), e.guillotineState !== void 0 ? this.ensureGuillotineState() : !this.guillotineState && i ? this.guillotineState = i : this.ensureGuillotineState();
  }
  /**
   * Apply computed properties as getters
   */
  applyComputedProperties() {
    super.applyComputedProperties?.();
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.Placeable;
  }
  /**
   * Validate business rules for the placeable
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    return this.issues = [], this.warnings = [], super.validate(), this.issues;
  }
  reset({
    keepScores: e = !1,
    keepGuillotineBatchData: i = !0,
    keepGroupData: s = !1,
    keepFirstShapeSampleRotations: n = !1
  } = {}) {
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof Xt)
      if (i) {
        const a = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), a && (this.guillotineState.stripShapeBatches = a);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new Xt();
    Qe(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = "")), Ye(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !Ye(this) && e?.grain && this.rot && (this.grain = qt(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, Qe(this) && (this.group.addedAsGroup = "", this.firstShape.isFirstShape = !1), Ye(this) && this.shapes.forEach((e) => {
      "removeFromStock" in e && typeof e.removeFromStock == "function" && e.removeFromStock();
    });
  }
  getPriority(e) {
    if (!e) return 0;
    const i = e.parentId;
    return this.priority?.[i] ? this.priority[i] : 0;
  }
  getStripShapeBatchData(e) {
    if (typeof e != "number") return !1;
    const i = this.guillotineState;
    return !i || gu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
  }
  /**
   * Set best score
   */
  setBestScore(e, i = null) {
    this.bestScore = {
      x: e.x,
      y: e.y,
      rot: e.rot,
      total: e.score.total,
      score: e.score,
      group: Qe(e) ? e.group.reference : null,
      stock: e.stock,
      weighting: {},
      // Use empty object instead of null
      point: i
    };
  }
  setPositionToBestScore() {
    rt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.ensureGuillotineState(), this.guillotineState.reset();
  }
  /**
   * Reset both scores
   */
  resetBothScores() {
    this.score = null, this.bestScore = null;
  }
  /**
   * Reset score
   */
  resetScore() {
    this.score = null, this.ensureGuillotineState(), this.guillotineState.reset();
  }
  /**
   * Reset best score
   */
  resetBestScore() {
    this.bestScore = null, this.ensureGuillotineState(), this.guillotineState.reset();
  }
  /**
   * Check if shape will fit in given dimensions
   */
  willItFit(e, i = null) {
    return Et(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Xi(this, e, i);
  }
  /**
   * Check if shape is an exact fit
   */
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  /**
   * Get distances from placeable edges to container edges
   * @returns Object with distances: { left, right, top, bottom }
   * Positive values mean placeable is inside container bounds
   * Negative values mean placeable extends beyond container edge
   */
  getDistancesToContainerEdges(e) {
    if (this.x == null || this.y == null)
      throw new Error("Placeable must be positioned before checking edge distances");
    return {
      left: this.x - (e.x ?? 0),
      right: e.l + (e.x ?? 0) - (this.x + this.l),
      top: e.w + (e.y ?? 0) - (this.y + this.w),
      bottom: this.y - (e.y ?? 0)
    };
  }
  /**
   * Check if placeable is too close to container edges
   * Note: minSpacing is for part-to-part spacing only, not part-to-edge.
   * Parts are allowed to be placed directly against container edges.
   * This method now only checks if the part extends beyond the container bounds.
   *
   * @param container - The container to check against
   * @returns true if any part of the placeable extends outside the container
   */
  isTooCloseToEdges(e) {
    const i = this.getDistancesToContainerEdges(e);
    return Object.values(i).some((s) => s < 0);
  }
  getMinSpacing(e, i = !1) {
    const s = e.bladeWidth;
    if (e.cutType !== "efficiency")
      return i ? 0 : s;
    if (this.minSpacing > 0) return this.minSpacing;
    let n = e?.options?.minSpacing || 0;
    if (s > n && (n = s), e.options?.minSpacingDimension?.dimension && e.options?.minSpacingDimension?.minSpacing) {
      const a = e.options?.minSpacingDimension?.dimension;
      (this.l <= a || this.w <= a) && (n = e.options?.minSpacingDimension?.minSpacing || n);
    }
    return i && (n -= s), n < 0 && (n = 0), this.minSpacing = n, n;
  }
  /**
   * Set the stock this item is placed on
   */
  setStock(e) {
    this.stock = e;
  }
  getCoords(e, i = !1) {
    const s = new tt(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new tt(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new tt(this.x, this.y);
    a.corner = "bottomLeft";
    const o = new tt(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [a, n, o, s];
  }
  getTopPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y + this.w + ((this.stock?.bladeWidth || i) ?? 0) : this.y + this.w;
  }
  getRightPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x + this.l + ((this.stock?.bladeWidth || i) ?? 0) : this.x + this.l;
  }
  getBottomPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y - ((this.stock?.bladeWidth || i) ?? 0) : this.y;
  }
  getLeftPosition(e = !0, i = null) {
    if (e && typeof this.stock?.bladeWidth > "u" && i === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x - ((this.stock?.bladeWidth || i) ?? 0) : this.x;
  }
  isInsideStock(e) {
    return !(this.x + this.l > e.l || this.y + this.w > e.w || this.x < 0 || this.y < 0);
  }
  isSameSize(e) {
    const { w: i, l: s } = this, { w: n, l: a } = e;
    return i === n && s === a;
  }
  isIdentical(e, i = !1) {
    if (this.constructor !== e.constructor || this.t !== e.t || this.orientationLock !== e.orientationLock || this.material !== e.material)
      return !1;
    if (this.getType() === ne.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== ne.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === ne.Shape && i && this.parentId !== e.parentId) return !1;
    } else if (e.autoId === this.autoId) return !0;
    const { w: s, l: n } = this, { w: a, l: o } = e;
    if (!(s === a && n === o) && !(s === o && n === a)) return !1;
    const r = this.trim, l = e.trim;
    return !r || !l ? r === l : r.l1 === l.l1 && r.l2 === l.l2 && r.w1 === l.w1 && r.w2 === l.w2;
  }
  /**
   * Get perimeter cut vectors (for export)
   */
  getPerimeterCutVectors(e = null) {
    return e === null && (e = Et(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
  createPerimeterCuts(e = null) {
    let i = [];
    if (e = e || this.stock, !e) throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Wa({
      stock: Et(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
const ti = ["l1", "l2", "w1", "w2"], Ed = ["a", "b", "c", "d"], Ct = [...ti, ...Ed], ft = ["a", "b"], zt = {
  x: "X",
  y: "Y",
  l: "Length",
  w: "Width",
  t: "Thickness",
  q: "Quantity",
  orientationLock: "Rotation",
  name: "Name",
  material: "Material",
  banding: "Banding",
  finish: "Finish",
  cost: "Cost",
  grain: "Grain",
  trim: "Trim",
  autoAdd: "Auto Add",
  machining: "Machining",
  planing: "Planing",
  dxfPreview: "DXF Preview",
  customData: "Custom Data",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  all: "all",
  "face.a": "face A",
  "face.b": "face B",
  "side.a": "corner A",
  "side.b": "corner B",
  "side.c": "corner C",
  "side.d": "corner D",
  "side.l1": "side L1",
  "side.l2": "side L2",
  "side.w1": "side W1",
  "side.w2": "side W2"
};
function He(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = Dt(i);
  if (s === i) {
    const n = zt[t] || t;
    return Pt() && !zt[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Pt() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const jr = (t, e, i, s, n, a) => {
  const o = _e(t, e);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new ie({
      item: t,
      message: Dt("errors.validation.must_be_string", {
        0: zt[e]
      }),
      shouldTranslate: !1,
      field: [[e]],
      index: s !== void 0 ? [s] : null,
      type: n ? "warning" : "error",
      issues: a
    });
    return;
  }
  const r = o?.toLowerCase();
  i.includes(r) || new ie({
    item: t,
    message: Dt("errors.validation.must_be_values", {
      0: zt[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: a
  });
};
function Nr(t) {
  return t.filter((e) => e.type === "error");
}
function Dd(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Rd(t) {
  return Dd(t, "issues") && Array.isArray(t.issues);
}
function Oo(t, e, i = !1) {
  if (!Rd(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((o) => o.type === s).some((o) => o.field?.length ? o.field.some((r) => r.every((l, c) => l === Md(e[c]))) : !1);
}
const _d = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Md(t) {
  return _d[t] ?? t;
}
const Bd = ["banding", "finish", "planing", "info"], ia = h().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), St = ue([
  L(),
  h(),
  he(h(), ue([L(), h()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), ys = Rt.extend({
  // ========== Identity ==========
  type: pe(Bd).optional().describe("Type of extra"),
  enabled: L().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: E({
    a: St.optional(),
    b: St.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: E({
    a: St.optional(),
    b: St.optional(),
    c: St.optional(),
    d: St.optional(),
    l1: St.optional(),
    l2: St.optional(),
    w1: St.optional(),
    w2: St.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), yn = {
  // Inherit computed properties from validation base
  ...si
  // Add any extra-specific computed properties here
};
he(
  pe(["a", "b"]),
  St
);
he(
  pe(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  St
);
const Vr = E({
  min: d().optional().describe("Minimum value"),
  max: d().optional().describe("Maximum value"),
  message: h().optional().describe("Custom error message")
});
E({
  scope: pe(["face", "side"]),
  key: h(),
  // Face or Side key
  original: h()
  // Original ExtraLocation string
});
const jd = E({
  location: h().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: he(h(), Vr).optional(),
  disabledMessage: h().optional().describe("Message when location is disabled")
}), Nd = E({
  global: he(h(), Vr).optional(),
  locations: ee(jd).optional().describe("Location-specific constraints"),
  defaultMessage: h().optional().describe("Default message when constraints not met")
});
E({
  scope: ee(pe(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ee(ua()).optional().describe("Available face locations"),
  sides: ee(ua()).optional().describe("Available side locations"),
  constraints: Nd.optional()
});
const Gr = ys, Vd = {
  // Check if any banding is applied
  hasAnyBanding: {
    compute: (t) => t.sides ? Object.keys(t.sides).some((e) => {
      const i = t.sides[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["sides"],
      returnType: "boolean"
    }
  },
  // Get all sides with banding
  activeSides: {
    compute: (t) => t.sides ? Object.keys(t.sides).filter((e) => {
      const i = t.sides[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["sides"],
      returnType: "string[]"
    }
  }
};
class cs extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ys;
  static computedProperties = yn;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  // Validation properties are inherited from validation base through SchemaClass
  // isValid is now a computed property from validation base
  /**
   * Get entity type
   */
  getType() {
    return "extra";
  }
  /**
   * Check if this extra is applicable to the given shape
   * Used for UI validation to prevent invalid selections
   * @param shape The shape to check
   * @returns True if this extra can be applied to the shape
   */
  isApplicable(e) {
    return this.enabled;
  }
}
class Lt extends cs {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Gr;
  static computedProperties = {
    ...cs.computedProperties,
    ...Vd
  };
  /**
   * Get entity type
   */
  getType() {
    return "banding";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate banding configuration
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [];
    for (const s in this.sides)
      ti.includes(s) || i.push(new ie({
        item: e,
        message: `Invalid banding side: ${s}`,
        type: "warning"
      }));
    return this.issues = i, i;
  }
  /**
   * Calculate the cost of this banding
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    return this.hasValues() ? e ? this.calculateLength(e) * 0.1 : this.getActiveSides().length * 5 : 0;
  }
  /**
   * Get a human-readable description
   */
  getDescription() {
    const e = this.getActiveSides();
    return e.length === 0 ? "No banding" : e.length === 4 && e.every((i) => ["a", "b", "c", "d"].includes(i)) ? "Banding on all sides" : `Banding on sides: ${e.join(", ")}`;
  }
  /**
   * Check if this extra has any active values
   */
  hasValues() {
    return this.hasAnyBanding;
  }
  /**
   * Set banding for a specific side
   */
  setSide(e, i) {
    i === !1 || i === "" || i === void 0 ? delete this.sides[e] : this.sides[e] = i;
  }
  /**
   * Get banding for a specific side
   */
  getSide(e) {
    const i = this.sides[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a side has banding
   */
  hasSide(e) {
    if (!this.sides) return !1;
    const i = this.sides?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Remove banding from a side
   */
  removeSide(e) {
    delete this.sides[e];
  }
  /**
   * Clear all banding
   */
  clear() {
    for (const e in this.sides)
      delete this.sides[e];
  }
  /**
   * Get all sides with banding
   * Compatibility method - uses computed property
   */
  getActiveSides() {
    return this.activeSides;
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of ti)
      this.setSide(i, e);
  }
  /**
   * Get the length for a specific side
   */
  getSideLength(e, i) {
    return !this.sides || !this.sides[e] ? 0 : {
      l1: i.longSide,
      l2: i.longSide,
      w1: i.shortSide,
      w2: i.shortSide
    }[e] || 0;
  }
  /**
   * Calculate total banding length
   */
  calculateLength(e) {
    let i = 0;
    const s = {
      l1: e.longSide,
      l2: e.longSide,
      w1: e.shortSide,
      w2: e.shortSide
    };
    for (const n in this.sides)
      this.hasSide(n) && s[n] && (i += s[n]);
    return i;
  }
  /**
   * Clone the banding
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Check if banding is applicable to shape
   * Banding requires the shape to have dimensions
   */
  isApplicable(e) {
    return e ? e.l > 0 && e.w > 0 : super.isApplicable(e);
  }
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use bandingSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new Lt(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new Lt();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new Lt();
    return i.setAllSides(e), i;
  }
}
const Gd = Rt.extend({
  // Identity
  id: h().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: ve("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: ve("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: ve("Planing", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Planing configuration")
  // imageUpload: zRef<ImageUpload>( 'ImageUpload', { nullable: true } ).describe( 'Uploaded images' )
  // issues and warnings are now properly inherited from validationBasePropertiesSchema
}), qd = {
  // Calculate total cost of all extras
  totalCost: {
    compute: (t) => {
      let e = 0;
      return t.banding && typeof t.banding.getCost == "function" && (e += t.banding.getCost()), t.finish && typeof t.finish.getCost == "function" && (e += t.finish.getCost()), t.planing && typeof t.planing.getCost == "function" && (e += t.planing.getCost()), e;
    },
    metadata: {
      cache: !1,
      dependencies: ["banding", "finish", "planing"],
      returnType: "number"
    }
  },
  // Check if any extras are applied
  hasAnyExtras: {
    compute: (t) => !!(t.banding || t.finish || t.planing),
    metadata: {
      cache: !1,
      dependencies: ["banding", "finish", "planing"],
      returnType: "boolean"
    }
  },
  // Check if valid
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    metadata: {
      cache: !0,
      dependencies: ["issues"],
      returnType: "boolean"
    }
  }
}, qr = ys, zd = {
  // Inherit computed properties from Extra base (includes validation base)
  ...yn,
  // Check if any finish is applied
  hasAnyFinish: {
    compute: (t) => t.faces ? Object.keys(t.faces).some((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "boolean"
    }
  },
  // Get all faces with finish
  activeFaces: {
    compute: (t) => t.faces ? Object.keys(t.faces).filter((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
};
class yt extends cs {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = qr;
  static computedProperties = zd;
  // serializationProperties removed - automatically derived from schema
  // The base class will use all schema fields for serialization
  /**
   * Get entity type
   */
  getType() {
    return "finish";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate finish configuration
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [], s = ["a", "b"];
    for (const n in this.faces)
      s.includes(n) || i.push(new ie({
        item: e,
        message: `Invalid finish face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
        type: "warning"
      }));
    return this.issues = i, i;
  }
  /**
   * Calculate the cost of this finish
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    if (!this.hasValues()) return 0;
    if (e) {
      let s = 0;
      const n = e.l * e.w;
      return this.hasFace("a") && (s += n * 0.05), this.hasFace("b") && (s += n * 0.05), s;
    }
    return this.getActiveFaces().length * 10;
  }
  /**
   * Get a human-readable description
   */
  getDescription() {
    const e = this.getActiveFaces();
    return e.length === 0 ? "No finish" : e.length === 2 ? "Finish on both faces" : `Finish on face${e.length > 1 ? "s" : ""}: ${e.join(", ")}`;
  }
  /**
   * Check if this extra has any active values
   */
  hasValues() {
    return this.hasAnyFinish;
  }
  /**
   * Set finish for a specific face
   */
  setFace(e, i) {
    if (!this.faces) {
      this.faces = {};
      for (const s of ft)
        this.faces[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.faces[e] = !1 : this.faces[e] = i;
  }
  /**
   * Get finish for a specific face
   */
  getFace(e) {
    const i = this.faces?.[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a face has finish
   */
  hasFace(e) {
    const i = this.faces?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Remove finish from a face
   */
  removeFace(e) {
    this.faces && (this.faces[e] = !1);
  }
  /**
   * Clear all finish
   */
  clear() {
    if (this.faces)
      for (const e of ft)
        this.faces[e] = !1;
  }
  /**
   * Get all faces with finish
   * Compatibility method - uses computed property
   */
  getActiveFaces() {
    return this.activeFaces;
  }
  /**
   * Set both faces to the same value
   */
  setBothFaces(e) {
    for (const i of ft)
      this.setFace(i, e);
  }
  /**
   * Calculate finish area
   */
  calculateArea(e, i) {
    let s = 0;
    const n = e * i;
    return this.hasFace("a") && (s += n), this.hasFace("b") && (s += n), s;
  }
  /**
   * Get finish type for a face
   */
  getFinishType(e) {
    const i = this.faces[e];
    return typeof i == "string" && i ? i : i === !0 ? "standard" : "";
  }
  /**
   * Clone the finish
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Check if finish is applicable to shape
   * Finish requires the shape to have surface area
   */
  isApplicable(e) {
    return e ? e.l > 0 && e.w > 0 : super.isApplicable(e);
  }
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use finishSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new yt(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new yt();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new yt();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new yt();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new yt();
    return i.setFace("b", e), i;
  }
}
const zr = ys, Wd = {
  // Inherit computed properties from Extra base
  ...yn,
  // Check if any planing is applied
  hasAnyPlaning: {
    compute: (t) => {
      const e = t.faces && Object.keys(t.faces).some((s) => {
        const n = t.faces[s];
        return n !== void 0 && n !== !1 && n !== "";
      }), i = t.sides && Object.keys(t.sides).some((s) => {
        const n = t.sides[s];
        return n !== void 0 && n !== !1 && n !== "";
      });
      return e || i;
    },
    metadata: {
      cache: !1,
      dependencies: ["faces", "sides"],
      returnType: "boolean"
    }
  },
  // Get all faces with planing
  activeFaces: {
    compute: (t) => t.faces ? Object.keys(t.faces).filter((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  },
  // Get all sides with planing
  activeSides: {
    compute: (t) => t.sides ? Object.keys(t.sides).filter((e) => {
      const i = t.sides[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["sides"],
      returnType: "string[]"
    }
  }
};
class pi extends cs {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = zr;
  static computedProperties = Wd;
  // serializationProperties removed - automatically derived from schema
  // The base class will use all schema fields for serialization
  /**
   * Get entity type
   */
  getType() {
    return "planing";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate planing configuration
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [];
    if (this.faces) {
      const s = ["a", "b"];
      for (const n in this.faces)
        s.includes(n) || i.push(new ie({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = ["a", "b", "c", "d", "l1", "l2", "w1", "w2"];
      for (const n in this.sides)
        s.includes(n) || i.push(new ie({
          message: `Invalid planing side: ${n}`,
          type: "warning"
        }));
    }
    return this.issues = i, i;
  }
  /**
   * Validate against shape thickness
   */
  validateAgainstShape(e) {
    const i = this.validate();
    return this.faces && Object.keys(this.faces).length > 0 && e < 15 && i.push(new ie({
      message: `Face planing requires at least 15mm thickness (current: ${e}mm)`,
      type: "error"
    })), this.hasAnyPlaning && e < 10 && i.push(new ie({
      message: `Planing requires at least 10mm thickness (current: ${e}mm)`,
      type: "error"
    })), this.issues = i, i;
  }
  /**
   * Set planing for a specific face
   */
  setFace(e, i) {
    if (!this.faces) {
      this.faces = {};
      for (const s of ft)
        this.faces[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.faces[e] = !1 : this.faces[e] = i;
  }
  /**
   * Get planing for a specific face
   */
  getFace(e) {
    const i = this.faces?.[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a face has planing
   */
  hasFace(e) {
    const i = this.faces?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Set planing for a specific side
   */
  setSide(e, i) {
    if (!this.sides) {
      this.sides = {};
      for (const s of Ct)
        this.sides[s] = !1;
    }
    i === !1 || i === "" || i === void 0 ? this.sides[e] = !1 : this.sides[e] = i;
  }
  /**
   * Get planing for a specific side
   */
  getSide(e) {
    const i = this.sides?.[e];
    return i ? typeof i == "object" && !Array.isArray(i) ? Object.values(i)[0] || !1 : i : !1;
  }
  /**
   * Check if a side has planing
   */
  hasSide(e) {
    const i = this.sides?.[e];
    return i !== void 0 && i !== !1 && i !== "";
  }
  /**
   * Clear all planing
   */
  clear() {
    if (this.faces)
      for (const e of ft)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of Ct)
        this.sides[e] = !1;
  }
  /**
   * Get all faces with planing
   * Compatibility method - uses computed property
   */
  getActiveFaces() {
    return this.activeFaces;
  }
  /**
   * Get all sides with planing
   * Compatibility method - uses computed property
   */
  getActiveSides() {
    return this.activeSides;
  }
  /**
   * Set all faces to the same value
   */
  setAllFaces(e) {
    for (const i of ft)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of Ct)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const a of ft)
        this.hasFace(a) && (s += n);
    }
    if (this.sides) {
      const n = {
        a: e,
        b: i,
        c: e,
        d: i,
        l1: i,
        l2: i,
        w1: e,
        w2: e
      };
      for (const a of Ct)
        this.hasSide(a) && n[a] && (s += n[a]);
    }
    return s;
  }
  /**
   * Calculate the cost of this planing
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    if (!this.hasValues()) return 0;
    let i = 0;
    if (e) {
      const s = e.l * e.w, n = this.faces ? this.getActiveFaces().length : 0;
      i += n * s * 0.01;
      const a = this.sides ? this.getActiveSides().length : 0;
      if (e.t) {
        const o = e.l * e.t, r = e.w * e.t;
        i += a * ((o + r) / 2) * 0.01;
      }
    } else {
      const s = this.faces ? this.getActiveFaces().length : 0, n = this.sides ? this.getActiveSides().length : 0;
      i = s * 15 + n * 10;
    }
    return i;
  }
  /**
   * Get a human-readable description
   */
  getDescription() {
    const e = [], i = this.faces ? this.getActiveFaces() : [];
    i.length > 0 && e.push(`Face planing: ${i.join(", ")}`);
    const s = this.sides ? this.getActiveSides() : [];
    return s.length > 0 && e.push(`Side planing: ${s.join(", ")}`), e.length > 0 ? e.join(", ") : "No planing";
  }
  /**
   * Check if this extra has any active values
   */
  hasValues() {
    return this.hasAnyPlaning;
  }
  /**
   * Get total face planing thickness
   */
  getTotalFacePlaning() {
    if (!this.faces) return 0;
    let e = 0;
    for (const i in this.faces) {
      const s = this.faces[i];
      typeof s == "number" ? e += s : (s === !0 || typeof s == "string") && (e += 1);
    }
    return e;
  }
  /**
   * Get total side planing amount
   */
  getTotalSidePlaning() {
    if (!this.sides) return 0;
    let e = 0;
    for (const i in this.sides) {
      const s = this.sides[i];
      typeof s == "number" ? e += s : (s === !0 || typeof s == "string") && (e += 1);
    }
    return e;
  }
  /**
   * Check if planing is applicable to shape
   * Planing requires minimum material thickness
   */
  isApplicable(e) {
    return e ? e.t !== void 0 && e.t >= 10 : super.isApplicable(e);
  }
  /**
   * Clone the planing
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Update from data
   */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use planingSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new pi(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new pi();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new pi();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new pi();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new pi();
    return i.setAllSides(e), i;
  }
}
class ze extends Ue {
  // Zod schema for validation and serialization
  static schema = Gd;
  static computedProperties = qd;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  /**
   * Get entity type
   */
  getType() {
    return ne.Extras;
  }
  constructor(e = {}) {
    const i = { ...e };
    if (i.banding && typeof i.banding == "object" && "sides" in i.banding) {
      const s = i.banding.sides;
      s && typeof s == "object" && ("x1" in s || "x2" in s || "y1" in s || "y2" in s) && (i.banding.sides = {
        l1: s.x1 ?? s.l1,
        l2: s.x2 ?? s.l2,
        w1: s.y1 ?? s.w1,
        w2: s.y2 ?? s.w2
      });
    }
    if (i.finish && typeof i.finish == "object" && "sides" in i.finish) {
      const s = i.finish.sides;
      s && typeof s == "object" && ("x1" in s || "x2" in s || "y1" in s || "y2" in s) && (i.finish.sides = {
        l1: s.x1 ?? s.l1,
        l2: s.x2 ?? s.l2,
        w1: s.y1 ?? s.w1,
        w2: s.y2 ?? s.w2
      });
    }
    if (i.planing && typeof i.planing == "object" && "sides" in i.planing) {
      const s = i.planing.sides;
      s && typeof s == "object" && ("x1" in s || "x2" in s || "y1" in s || "y2" in s) && (i.planing.sides = {
        l1: s.x1 ?? s.l1,
        l2: s.x2 ?? s.l2,
        w1: s.y1 ?? s.w1,
        w2: s.y2 ?? s.w2
      });
    }
    super(i), this.validate();
  }
  /**
   * Validate all extras
   * @param shape Optional shape for context-aware validation
   */
  validate(e) {
    const i = [];
    if (ui(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (Kt(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (Zt(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (Zt(this.planing) && Kt(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new ie({
        message: "Planing may not leave enough material for finish application",
        type: "warning"
      }));
    }
    return this.issues = i, i;
  }
  /**
   * Async validation using the validation engine
   * @param shape Optional shape for context-aware validation
   */
  async validateAsync(e) {
    const i = this.validate(e);
    return this.issues = i, this.issues;
  }
  /**
   * Calculate total cost of all extras
   * @param shape Optional shape for context-aware pricing
   */
  getTotalCost(e) {
    let i = 0;
    return ui(this.banding) && (i += this.banding.getCost(e)), Kt(this.finish) && (i += this.finish.getCost(e)), Zt(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return ui(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Kt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Zt(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(ui(this.banding) && this.banding.hasValues() || Kt(this.finish) && this.finish.hasValues() || Zt(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    ui(this.banding) && this.banding.clear(), Kt(this.finish) && this.finish.clear(), Zt(this.planing) && this.planing.clear();
  }
  /**
   * Remove a specific extra type
   */
  removeExtra(e) {
    switch (e) {
      case "banding":
        this.banding = void 0;
        break;
      case "finish":
        this.finish = void 0;
        break;
      case "planing":
        this.planing = void 0;
        break;
    }
  }
  /**
   * Set banding
   */
  setBanding(e) {
    e ? e instanceof Lt ? this.banding = e : this.banding = new Lt(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof yt ? this.finish = e : this.finish = new yt(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof pi ? this.planing = e : this.planing = new pi(e) : this.planing = void 0;
  }
  /**
   * Set image upload
   */
  /* setImageUpload( imageUpload: ImageUpload | ImageUploadData | undefined ): void
  {
  	if ( !imageUpload )
  	{
  		this.imageUpload = undefined
  	}
  	else if ( imageUpload instanceof ImageUpload )
  	{
  		this.imageUpload = imageUpload
  	}
  	else
  	{
  		this.imageUpload = new ImageUpload( imageUpload )
  	}
  } */
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() properly returns 'this' type
  /**
   * Update from data
   */
  update(e) {
    const i = { ...e };
    "banding" in i && (this.setBanding(i.banding), delete i.banding), "finish" in i && (this.setFinish(i.finish), delete i.finish), "planing" in i && (this.setPlaning(i.planing), delete i.planing), super.update(i), this.validate();
  }
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new ze(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new ze();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new ze(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(ui(this.banding) && this.banding.isApplicable(e) || Kt(this.finish) && this.finish.isApplicable(e) || Zt(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: ui(this.banding) && this.banding.hasValues() || !1,
      hasFinish: Kt(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: Zt(this.planing) && this.planing.hasValues() || !1,
      // hasImageUpload: ( isImageUpload( this.imageUpload ) && this.imageUpload.hasValues() ) || false,
      totalCost: this.getTotalCost(),
      description: this.getDescription()
    };
  }
  // =================== STATIC HELPER METHODS ===================
  /**
   * Check if a shape has banding extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasBanding(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.banding;
    return s ? ui(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
      const a = s.sides[n];
      return a !== void 0 && a !== !1 && a !== "";
    }) : !1 : !1;
  }
  /**
   * Check if a shape has finish extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasFinish(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.finish;
    return s ? Kt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
      const a = s.faces[n];
      return a !== void 0 && a !== !1 && a !== "";
    }) : !1 : !1;
  }
  /**
   * Check if a shape has planing extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasPlaning(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.planing;
    return s ? Zt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((a) => {
      const o = s.sides[a];
      return o !== void 0 && o !== !1 && o !== "";
    }) ? !0 : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
      const a = s.faces[n];
      return a !== void 0 && a !== !1 && a !== "";
    }) : !1 : !1;
  }
  /**
   * Check if a shape has image upload extras with actual values
   * Works with both InputShape and Shape instances, and plain objects
   */
  static hasImageUpload(e) {
    const i = e?.extras;
    if (!i) return !1;
    const s = i.imageUpload;
    return s ? bu(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
  }
  /**
   * Check if a shape has any extras of a specific type with actual values
   * Works with both InputShape and Shape instances
   *
   * @param shape - The shape to check
   * @param type - The extra type to check for (optional - if not provided, checks for any extras)
   * @returns true if the shape has the specified extra type with values, or any extras if type not specified
   */
  static hasExtras(e, i) {
    if (!e?.extras) return !1;
    if (i)
      switch (i) {
        case "banding":
          return ze.hasBanding(e);
        case "finish":
          return ze.hasFinish(e);
        case "planing":
          return ze.hasPlaning(e);
        case "imageUpload":
          return ze.hasImageUpload(e);
      }
    return ze.hasBanding(e) || ze.hasFinish(e) || ze.hasPlaning(e) || ze.hasImageUpload(e);
  }
  /**
   * Get array of active extra types for a shape
   * Works with both InputShape and Shape instances
   *
   * @param shape - The shape to check
   * @returns Array of extra type names that have values
   */
  static getActiveExtrasTypes(e) {
    const i = [];
    return ze.hasBanding(e) && i.push("banding"), ze.hasFinish(e) && i.push("finish"), ze.hasPlaning(e) && i.push("planing"), ze.hasImageUpload(e) && i.push("imageUpload"), i;
  }
}
const Hd = E({
  id: h().optional(),
  url: h().optional(),
  size: d().optional(),
  mimeType: h().optional(),
  name: h().optional(),
  width: d().optional(),
  height: d().optional()
}), Ud = ys.extend({
  // ImageUpload specific properties
  images: ee(Hd).default([]).describe("Array of uploaded images"),
  maxImages: d().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ee(h()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: d().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: h().optional().describe("Description of uploaded images"),
  tags: ee(h()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), Yd = {
  // Inherit computed properties from Extra base class
  ...yn,
  // Check if any images are uploaded
  hasAnyImages: {
    compute: (t) => t.faces ? Object.keys(t.faces).some((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "boolean"
    }
  },
  // Get all faces with images
  activeFaces: {
    compute: (t) => t.faces ? Object.keys(t.faces).filter((e) => {
      const i = t.faces[e];
      return i !== void 0 && i !== !1 && i !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
};
class qw extends cs {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = Ud;
  static computedProperties = Yd;
  /**
   * Get entity type
   */
  getType() {
    return "imageUpload";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate image upload configuration
   */
  validate(e) {
    const i = [];
    if (this.images && this.images.length > this.maxImages && i.push(new ie({
      item: e,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let s = 0; s < this.images.length; s++) {
        const n = this.images[s];
        if (n.url || i.push(new ie({
          message: `Image ${s + 1} is missing URL`,
          type: "error"
        })), n.mimeType && !this.allowedTypes.includes(n.mimeType) && i.push(new ie({
          message: `Image ${s + 1} has unsupported type: ${n.mimeType}`,
          type: "warning"
        })), n.size && n.size > this.maxSizeBytes) {
          const a = (n.size / 1048576).toFixed(2), o = (this.maxSizeBytes / 1048576).toFixed(2);
          i.push(new ie({
            message: `Image ${s + 1} is too large: ${a}MB exceeds ${o}MB`,
            type: "warning"
          }));
        }
      }
    return this.issues = i, i;
  }
  /**
   * Calculate storage cost
   */
  getCost(e) {
    const s = (this.images || []).reduce((a, o) => a + (o.size || 0), 0) / 1048576;
    return Math.ceil(s * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const e = this.images ? this.images.length : 0, s = ((this.images || []).reduce((n, a) => n + (a.size || 0), 0) / 1048576).toFixed(2);
    return `${e} image${e !== 1 ? "s" : ""} (${s}MB)`;
  }
  /**
   * Check if has values
   */
  hasValues() {
    return !!(this.images && this.images.length > 0);
  }
  /**
   * Clear all images
   */
  clear() {
    this.images = [], this.description = void 0, this.tags = [];
  }
  /**
   * Check if image upload is applicable to shape
   * Image upload can be applied to any shape
   */
  isApplicable(e) {
    return this.enabled;
  }
  /**
   * Clone
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Add an image
   */
  addImage(e) {
    return this.images || (this.images = []), this.images.length >= (this.maxImages || 5) ? !1 : (this.images.push(e), !0);
  }
  /**
   * Remove an image by URL
   */
  removeImage(e) {
    if (!this.images) return !1;
    const i = this.images.findIndex((s) => s.url === e);
    return i !== -1 ? (this.images.splice(i, 1), !0) : !1;
  }
  /**
   * Get image by URL
   */
  getImage(e) {
    return this.images ? this.images.find((i) => i.url === e) : void 0;
  }
  /**
   * Get total size in bytes
   */
  getTotalSize() {
    return this.images.reduce((e, i) => e + (i.size || 0), 0);
  }
  /**
   * Get images by tag
   */
  getImagesByTag(e) {
    return this.tags && this.tags.includes(e) ? this.images || [] : [];
  }
  /**
   * Add a tag
   */
  addTag(e) {
    this.tags || (this.tags = []), this.tags.includes(e) || this.tags.push(e);
  }
  /**
   * Remove a tag
   */
  removeTag(e) {
    if (!this.tags) return;
    const i = this.tags.indexOf(e);
    i !== -1 && this.tags.splice(i, 1);
  }
}
const Kd = {
  cacheResults: !1,
  successMetric: "efficiency",
  calculateCuts: !0,
  stack: !0,
  findDuplicatePatterns: !0,
  captureProfile: !1,
  runTests: !1,
  throwErrorsOnFailedTests: !1,
  sample: {
    enable: !0,
    groupSize: 6,
    efficiency: 4,
    guillotine: 4
  },
  priority: {
    enable: !0,
    variationThreshold: 0.3
  },
  filtering: {
    enable: !0,
    minTotal: 400,
    similarityThreshold: 0.1
  },
  secondRun: {
    enabled: !1,
    efficiencyCutoff: 0.5,
    stack: !1
  },
  efficiency: {
    tidy: !1,
    rayCasting: !0
  },
  groups: {
    shapeAreaCutOff: 0.7,
    tolerance: 0.05,
    guillotine: {
      strips: !0,
      segments: !1,
      // Temporarily disabled to test position-based approach
      position: !0,
      runWithout: !1
    },
    efficiency: {
      firstShapes: !0,
      position: !0,
      limit: 100
    }
  },
  guillotine: {
    extendSegments: !0,
    allowHeadCuts: !0,
    viableShapeArea: 0.5,
    maxSegmentGroups: 15,
    stripShapes: {
      allocation: !0,
      iterations: 6,
      numPriorityShapes: 1
    },
    secondPass: !1,
    strips: {
      rearrange: !1,
      efficiencyThreshold: 0.7
    }
  },
  subset: {
    shuffles: 80,
    guillotine: {
      shuffles: 80
    },
    efficiency: {
      limit: 0.8
    }
  },
  evo: {
    disable: !1,
    stockLimit: 40
  }
}, Zd = {
  cacheResults: !0
};
let Wr;
Wr = pr({}, Kd, Zd);
let ht = Wr;
function Xd() {
  if (ht.guillotine.secondPass && !ht.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (ht.captureProfile && ht.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
Xd();
function zw(t, e = null) {
  if (!t) return ht;
  const i = Jd(t, e);
  if (!i) return ht;
  const s = pr({}, ht, i);
  return console.log(`[CONFIG] custom config applied for ${t?.username}`), s;
}
function Jd(t, e = null) {
  if (!t || !t?.config) return null;
  switch (t.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in e ? e.shapeList : e.inputShapes, s = i ? i.reduce((n, a) => n + (a.q || 0), 0) : 0;
      if (e) if (s <= 80) {
        const n = { ...t.config };
        return n.groups.guillotine.strips = ht.groups.guillotine.strips, n.groups.guillotine.segments = ht.groups.guillotine.segments, n.sample.guillotine = 4, n.guillotine.stripShapes.iterations = ht.guillotine.stripShapes.iterations, n;
      } else
        return t.config;
      else return t.config;
    }
  }
  return t.config;
}
function Ww(t, e, i) {
  return Jc(t, e, i);
}
try {
  typeof Nn < "u" && Nn && (Nn.showDiff = !0);
} catch (t) {
  console.warn("Error accessing chaiConfig, skipping configuration:", t);
}
const $o = gr("tests");
gr("timers");
let nt;
if (typeof mo == "function")
  nt = mo;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const t = new Proxy({}, { get: () => () => t });
  nt = () => t;
}
function kt(t = [], e = null) {
  if (!t?.length) return;
  if (Pt() && ht && ht.runTests)
    for (const s of t) {
      if (!s || typeof s != "function") {
        console.error("Invalid test function provided:", s);
        continue;
      }
      try {
        s();
      } catch (n) {
        const a = n instanceof Error ? n.message : String(n);
        if (e ? $o(e, a) : $o(a), ht && ht.throwErrorsOnFailedTests) throw n;
      }
    }
}
function Xs(t) {
  return t && typeof t == "object" && "area" in t;
}
const fa = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, Xe = (t, e, i) => e in t ? t[e] : (console.warn(fa.missingProperty(String(e), i)), null), Os = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Di = (t, e) => {
  if (Xs(t) && Xs(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, $t = (t, e) => {
  const i = Xe(t, "id", "first item"), s = Xe(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Bt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const o = Xe(i, n, "first item"), r = Xe(s, n, "second item");
      if (!(o === null || r === null) && o !== r)
        return a === "desc" ? o < r ? 1 : -1 : o < r ? -1 : 1;
    }
    return 0;
  };
}
function Hr(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Qd(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Wt = {
  // Dimension-based sorts
  WDLD: Bt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Bt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Bt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Bt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Bt([["w", "desc"]]),
  LD: Bt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Os(
    Bt([["l", "desc"]]),
    $t
  ),
  WDIDA: Os(
    Bt([["w", "desc"]]),
    $t
  ),
  // Area-based sorts
  AD: (t, e) => -Di(t, e),
  AA: Di,
  AAID: Os(
    Di,
    $t
  ),
  ADID: Os(
    (t, e) => -Di(t, e),
    $t
  ),
  // ID sorts
  ID: $t,
  IDDesc: (t, e) => -$t(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : $t(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = $t(i, s);
    return n !== 0 ? n : -Di(t, e);
  },
  // Position sorts
  YX: Bt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Bt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = Xe(t, "placementOrder", "first item") ?? 0, s = Xe(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = Xe(t, "offcut", "first item"), s = Xe(e, "offcut", "second item"), n = Xe(t, "placementOrder", "first item") ?? 0, a = Xe(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = Xe(t, "offcut", "first item"), s = Xe(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : $t(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = $t(i, s);
    if (n !== 0) return n;
    const a = Xe(t, "offcut", "first item"), o = Xe(e, "offcut", "second item");
    if (a && !o) return 1;
    if (!a && o) return -1;
    const r = Xe(t, "placementOrder", "first item") ?? 0, l = Xe(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = $t(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = Xe(t, "placementOrder", "first item") ?? 0, o = Xe(e, "placementOrder", "second item") ?? 0;
      return a - o;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = Xe(t, "placementOrder", "first item") ?? 0, s = Xe(e, "placementOrder", "second item") ?? 0, n = i - s;
    if (n !== 0) return n;
    const a = t.group?.placementOrder ?? 0, o = e.group?.placementOrder ?? 0;
    return a - o;
  },
  // Array manipulation utilities
  swapFirstTwo(t) {
    t.length < 2 || ([t[0], t[1]] = [t[1], t[0]]);
  },
  shuffle(t) {
    for (let e = t.length - 1; e > 0; e--) {
      const i = Math.floor(Math.random() * (e + 1));
      [t[e], t[i]] = [t[i], t[e]];
    }
  },
  // Aspect and area sorts
  aspect(t, e) {
    if (Xs(t) && Xs(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(fa.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(fa.missingLongSide), 0) : i[t] === e[t] ? -Di(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Hr,
  getSmallest: Qd
};
function Hw(t, e) {
  return Math.random() * (e - t) + t;
}
function Uw(t, e, i = "x") {
  if (!e) return !1;
  const s = i === "x" ? "l" : "w";
  return !!(ae.greaterThanOrEqualTo(t[i], e[i]) && ae.lessThanOrEqualTo(t[i] + t[s], e[i] + e[s]));
}
function Yw(t, e, i = "x") {
  if (!e) return !1;
  const s = tf(i);
  return !!(ae.greaterThanOrEqualTo(t[i], e[i]) && ae.lessThan(t[i], e[i] + e[s]));
}
function Kw(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function ef(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Fo(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
function tf(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
const sf = zu;
function Zw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function Lo(t, e) {
  if (!ye(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function Xw(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(a) {
    if (s === !0) return a.added;
    if (s === !1) return !a.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((a) => n(a) && Lo(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Et(e) ? t[i]((a) => n(a) && Lo(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && a.willItFit(e));
  }
  return t[i]((a) => n(a));
}
function Jw(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((r) => r.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, o = [];
  for (const r of s) {
    let l;
    if (Qe(r))
      l = r.parentId;
    else if (Ye(r))
      l = r.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const c = r.l <= r.w, u = c ? r.l : r.w, f = c ? r.w : r.l, p = u + "-" + f + "-" + r.orientationLock;
        if (a.has(p)) continue;
        a.set(p, !0);
      }
      o.push(r);
    }
  }
  return o;
}
function nf(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], o = _r(a, e.getStock), r = a.shortSide, l = a.longSide;
    o.forEach((c) => {
      if (!a.willItFit(e, c)) return;
      let u;
      !i || i === "l" ? u = c === 0 ? l : r : i === "w" && (u = c === 0 ? r : l), u && s.set(u, s.has(u) ? s.get(u) + 1 : 1);
    });
  }
  return s;
}
function Qw(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const o = a.parentId;
    s.has(o) || s.set(o, a);
  }
  return Array.from(s.values());
}
function eS(t, e = null) {
  function i(n) {
    if (e === !0) return n.used;
    if (e === !1) return !n.used;
    if (e === null) return !0;
  }
  t.sort((n, a) => n.material && a.material && n.material !== a.material ? n.material.localeCompare(a.material) : n.t && a.t && n.t !== a.t ? n.t - a.t : n.id.localeCompare(a.id));
  const s = /* @__PURE__ */ new Map();
  for (const n of t) {
    if (!i(n)) continue;
    const a = `${n.l}-${n.w}-${n.t}-${n.material}`;
    s.has(a) || s.set(a, n);
  }
  return Array.from(s.values());
}
function tS(t, e, i) {
  const s = t.filter((a) => a[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((a, o, r) => r > 0 ? a + o[n] + i : a + o[n], 0);
}
function af(t, e) {
  const i = e === "x" ? "l" : "w", s = sf(e);
  if (!t?.length) return null;
  const n = t.reduce((o, r) => o[e] + o[i] > r[e] + r[i] ? o : r);
  return t.filter((o) => o[e] === n[e] && o[i] === n[i]).sort((o, r) => o[s] - r[s])[0];
}
function of(t, e, i) {
  if (e.length <= 1) return t;
  const s = cf(e, i), n = t.reduce((r, l) => (r[l.id] = uf(l, s), r), {}), a = Math.min(...Object.values(n));
  return t.filter((r) => !r.added && n[r.id] === a);
}
function rf(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function lf(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function iS(t, e) {
  return rf(t, e) < e.q;
}
function cf(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = lf(e, s)), i;
}
function uf(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function df(t, e, i = !1) {
  const s = /* @__PURE__ */ new Map(), n = [], a = /* @__PURE__ */ new Set();
  for (let o = 0; o < t.length; o++) {
    const r = t[o], l = r.autoId;
    if (s.has(l)) {
      const c = s.get(l);
      c && (n.push(c.item), s.set(l, null)), n.push(r), a.add(o);
    } else
      s.set(l, { item: r, index: o });
  }
  if (n.length > 0) {
    const o = e ? ` [${e}]` : "", r = [...new Set(n.map((l) => l.autoId))];
    if (console.warn(`[duplicateIdsPresent]${o} Found duplicates!`), console.warn(`  Total items: ${t.length}`), console.warn(`  Duplicate autoIds: ${r.join(", ")}`), n.forEach((l) => {
      console.warn(`  ${l.id} (autoId=${l.autoId}): added=${l.added}, x=${l.x}, y=${l.y}, isGroup=${!!l.shapes}`);
    }), i) {
      const l = Array.from(a).sort((c, u) => u - c);
      for (const c of l)
        t.splice(c, 1);
      console.warn(`  Removed ${l.length} duplicate items. New length: ${t.length}`);
    }
  }
  return n.length > 0;
}
function sS(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function ff(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, o = e.x, r = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= o || // shape1 is completely to the left of shape2
  r <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  c <= n);
}
function nS(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      ff(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function aS(t) {
  t.sort(Wt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function oS(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
const Ur = ee(h()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), hf = pe(["l", "w"]).nullable().default(null), Yr = ue([
  fe("l"),
  fe("w"),
  ii()
]).default(null), pf = E({
  stockId: h().optional(),
  material: h().optional(),
  thickness: d().optional(),
  grain: Zi.optional()
}).describe("Which stock(s) this shape is a match for "), gf = he(h(), be()).default({});
Ur.describe("IDs of stocks this shape is locked to");
const mf = Yr.describe("Direction that should face up");
E({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: mf
});
const bf = E({
  // Whether shape is in a user-defined group
  inUserGroup: L().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: L().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: d().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: ve("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // ID of group this was added as part of (preserved during serialization)
  addedAsGroup: h().default("").describe("ID of group this was added as part of")
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: ""
}).describe("Group metadata and reference"), ha = ms.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: bf,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: h().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Or,
  // Whether this is a duplicate
  duplicate: L().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: hf.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: ve("Extras", {
    nullable: !0,
    description: "Extras for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full extras data
      compress: "full",
      // CRITICAL: Include full extras data in compressed mode (for results)
      clone: "copy"
    }
  }).optional(),
  // ========== Machining ==========
  // Machining operations for this shape (copy value during cloning)
  // Override default reference behavior to preserve full data in compressed mode
  machining: ve("Machining", {
    nullable: !0,
    description: "Machining operations for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full machining data
      compress: "full",
      // CRITICAL: Include full machining data in compressed mode (for results)
      clone: "copy"
    }
  }).optional()
}), Kr = {
  // Include all Placeable computed properties
  ...bs,
  // Check if shape is stacked
  isStacked: {
    compute: (t) => t.added && t.stock && t.stock.isStacked,
    metadata: {
      cache: !1,
      dependencies: ["added", "stock"],
      returnType: "boolean"
    }
  },
  // Total length of banding
  bandingLength: {
    compute: (t) => {
      const i = t.extras?.banding;
      if (!i) return 0;
      if (typeof i.calculateLength == "function")
        return i.calculateLength(t);
      let s = 0;
      return i.sides?.a && (s += t.l), i.sides?.b && (s += t.w), i.sides?.c && (s += t.l), i.sides?.d && (s += t.w), s;
    },
    metadata: {
      cache: !0,
      dependencies: ["extras", "l", "w"],
      returnType: "number"
    }
  },
  // Total cost of extras
  extrasCost: {
    compute: (t) => t.extras?.getTotalCost?.(t) || 0,
    metadata: {
      cache: !0,
      dependencies: ["extras"],
      returnType: "number"
    }
  },
  // Check if shape has extras
  hasExtras: {
    compute: (t) => t.extras?.hasExtras?.() || !1,
    metadata: {
      cache: !1,
      dependencies: ["extras"],
      returnType: "boolean"
    }
  },
  // Check if shape has machining
  hasMachining: {
    compute: (t) => t.machining !== null && t.machining !== void 0,
    metadata: {
      cache: !1,
      dependencies: ["machining"],
      returnType: "boolean"
    }
  },
  // Get proximity rectangle
  proximityRectangle: {
    compute: (t) => ({
      x: t.x,
      y: t.y,
      l: t.l,
      w: t.w
    }),
    metadata: {
      cache: !1,
      dependencies: ["x", "y", "l", "w"],
      returnType: "{ x: number | null; y: number | null; l: number; w: number }"
    }
  }
};
ha.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Kr)
}));
class vn extends Ha {
  // Compatibility getters for direct access
  //[] deprecate
  get banding() {
    return this.extras?.banding;
  }
  get finish() {
    return this.extras?.finish;
  }
  get planing() {
    return this.extras?.planing;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  static schema = ha;
  static computedProperties = Kr;
  static defaults = ha.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return ne.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new vn(e.data);
    return e.group && (i.group.reference = e.group, i.group.inGroup = !0), e.machining && (i.machining = e.machining), i;
  }
  /**
    * Add to group
    */
  addToGroup(e) {
    this.group.reference = e, this.group.inGroup = !0;
  }
  /**
    * Remove from group
    */
  removeFromGroup() {
    this.group.reference = null, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.addedAsGroup = "";
  }
  /**
    * Clone the shape
    */
  // Clone behaviors now defined in Shape.zod.ts schema
  // No need for getCloneResetProperties() and getCloneOverrides() methods
  /**
   * Clone this shape with a new version number
   * Uses the clone() method from Rectangle base class which preserves
   * most properties (like stockLock, material, dimensions, extras, machining)
   * but resets placement-related properties
   */
  clone(e = null, i = {}) {
    return super.clone(e, i);
  }
  resetGroupData() {
    this.group.inGroup = !1, this.group.reference = null, delete this.group.placementOrder;
  }
  /**
   * Check if shape is identical to another
   * @param rectangle - The placeable to compare against
   * @param matchparentId - Whether to match parent IDs (optional)
   */
  isIdentical(e, i = !1) {
    const s = e;
    return s.identicalTo && Array.isArray(s.identicalTo) ? this.identicalTo.includes(s.parentId) || s.identicalTo.includes(this.parentId) || this.l === s.l && this.w === s.w && this.material === s.material : super.isIdentical(e, i);
  }
  /**
   * Apply best score position
   */
  setPositionToBestScore() {
    rt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  clearPriority() {
    this.priority = {};
  }
  createOffset(e) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
    const i = {
      x: this.x - e,
      y: this.y - e,
      l: this.l + e * 2,
      w: this.w + e * 2
    };
    return i.x < 0 && (i.x = 0, i.l -= e), i.y < 0 && (i.y = 0, i.w -= e), i.x + i.l > this.stock.l && (i.l = this.stock.l - i.x), i.y + i.w > this.stock.w && (i.w = this.stock.w - i.y), i;
  }
}
const Zr = ["horizontal", "vertical"], Xr = ["auto", "user", "strip", "firstShape"], Ua = pe(Zr).optional(), yf = E({
  x: d(),
  y: d(),
  autoId: h().optional(),
  rot: Na
}), vf = ms.extend({
  // Override quantity - always 1 for groups
  q: d().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: L().default(!0),
  // Group-specific fields
  shapes: Fe("Shape").default([]),
  direction: Ua,
  container: ue([
    ve("Segment"),
    ve("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ee(yf).default([]),
  type: pe(Xr).default("auto"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: L().default(!1),
  collision: L().default(!1),
  counter: d().int().min(0).default(0),
  inputId: h().optional()
}), wf = {
  ...bs,
  // Include parent computed properties
  // Note: l and w are now stored properties (set in updatePositions())
  // rather than computed properties, for better performance and schema compatibility
  // Rotation based on orientationLock
  // rot = 0 if orientationLock is 'l' (horizontal), 1 if 'w' (vertical)
  rot: {
    compute: (t) => {
      if (t.orientationLock === "w") return 1;
      if (t.orientationLock === "l") return 0;
      const e = t.direction === "horizontal" ? t.groupLength : t.groupWidth, i = t.direction === "horizontal" ? t.groupWidth : t.groupLength;
      return e == null || !isFinite(e) || i === void 0 || i === null || !isFinite(i) ? 0 : i > e ? 1 : 0;
    },
    metadata: {
      cache: !1,
      dependencies: ["orientationLock", "direction", "groupLength", "groupWidth"],
      returnType: "number"
    }
  },
  // Count of shapes in the group
  shapeCount: {
    compute: (t) => t.shapes?.length || 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Total area of all shapes in the group
  totalShapeArea: {
    compute: (t) => !t.shapes || t.shapes.length === 0 ? 0 : t.shapes.reduce((e, i) => {
      const s = i.l * i.w * (i.q || 1);
      return e + s;
    }, 0),
    metadata: {
      cache: !0,
      dependencies: ["shapes"],
      returnType: "number"
    }
  },
  // Group area
  groupArea: {
    compute: (t) => (t.groupLength || 0) * (t.groupWidth || 0),
    metadata: {
      cache: !1,
      dependencies: ["groupLength", "groupWidth"],
      returnType: "number"
    }
  },
  // Check if group has shapes
  hasShapes: {
    compute: (t) => (t.shapes?.length || 0) > 0,
    metadata: {
      cache: !1,
      dependencies: ["shapes"],
      returnType: "boolean"
    }
  },
  // Check if group is strip type
  isStripGroup: {
    compute: (t) => t.type === "strip",
    metadata: {
      cache: !1,
      dependencies: ["type"],
      returnType: "boolean"
    }
  },
  // Check if group is user type
  isUserGroup: {
    compute: (t) => t.type === "user",
    metadata: {
      cache: !1,
      dependencies: ["type"],
      returnType: "boolean"
    }
  },
  // Check if group is auto type
  isAutoGroup: {
    compute: (t) => t.type === "auto",
    metadata: {
      cache: !1,
      dependencies: ["type"],
      returnType: "boolean"
    }
  }
};
E({
  id: h(),
  x: d(),
  y: d(),
  shapes: Fe("Shape"),
  direction: pe(Zr),
  type: pe(Xr),
  container: ue([
    ve("Segment"),
    ve("Stock")
  ]).optional()
});
class wn extends Ha {
  // Required: Define schema and computed properties for SchemaClass
  static schema = vf;
  static computedProperties = wf;
  constructor(e = {}) {
    const i = { ...e };
    e.skipValidation === void 0 && (i.skipValidation = !0), super(i), this.initGroup(i);
  }
  /**
    * Initialize group-specific logic after property application
    */
  initGroup(e) {
    const i = e.__context;
    if (e.shapes && (this.shapes = this.initShapes(e.shapes, i)), this.direction && this.id) {
      const s = this.direction === "horizontal" ? "-h" : "-v";
      !this.id.endsWith("-h") && !this.id.endsWith("-v") && (this.id = this.id + s);
    }
    !e.groupLength || !e.groupWidth ? this.shapes && this.shapes.length > 0 && this.updatePositions() : this.direction && (this.direction === "horizontal" ? (this.l = this.groupLength, this.w = this.groupWidth) : (this.l = this.groupWidth, this.w = this.groupLength));
  }
  /**
    * Get entity type
    */
  getType() {
    return this.type === "user" ? ne.UserGroup : this.type === "strip" ? ne.StripGroup : this.type === "firstShape" ? ne.FirstShapeGroup : ne.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!Qe(s) && !yu(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (Qe(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((o) => o.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new vn(n);
    });
  }
  /**
    * Add a shape to the group
    */
  addShape(e, i) {
    this.shapes.push(e), e.group.reference = this, e.group.inGroup = !0, i && this.positions.push(i), this.updatePositions();
  }
  /**
    * Remove a shape from the group
    */
  removeShape(e) {
    const i = this.shapes.indexOf(e);
    if (i > -1) {
      this.shapes.splice(i, 1), e.group.reference = null, e.group.inGroup = !1;
      const s = this.positions.findIndex((n) => n.autoId === e.autoId);
      return s > -1 && this.positions.splice(s, 1), this.updatePositions(), !0;
    }
    return !1;
  }
  /**
    * Set group direction
    */
  setDirection(e) {
    if (this.id && (this.id = this.id.replace(/-[hv]$/, "")), this.direction = e, this.direction && this.id) {
      const i = this.direction === "horizontal" ? "-h" : "-v";
      this.id = this.id + i;
    }
  }
  /**
    * Calculate efficiency
    */
  calculateEfficiency() {
    return this.hasShapes ? this.groupArea === 0 ? (this.efficiency = 0, 0) : (this.efficiency = this.totalShapeArea / this.groupArea * 100, this.efficiency) : (this.efficiency = 0, 0);
  }
  /**
    * Mark group as out of bounds
    */
  markOutOfBounds(e = !0) {
    this.outOfBounds = e;
  }
  /**
    * Mark group as having collision
    */
  markCollision(e = !0) {
    this.collision = e;
  }
  /**
    * Create group with live objects
    */
  static create(e) {
    const i = { ...e.data, shapes: e.shapes }, s = new wn(i);
    return e.container && (s.container = e.container), s;
  }
  /**
    * Clone the group with different shapes
    * @param shapes Array of shapes to use for the new group (maintains references, doesn't clone)
    */
  cloneWithNewShapes(e = []) {
    const i = this.shapes, s = this.container, n = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = this.clone();
    return this.shapes = i, this.container = s, this.stock = n, a.container = s, a.shapes = e, a.skipValidation = !0, a.positions = [], a.container && a.updatePositions(), a;
  }
  /**
   * Leave serializationProperties empty to trigger automatic enumeration of all enumerable properties
   * This ensures groupLength, groupWidth, direction, and all other necessary fields are serialized
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   * This is cleaner than maintaining a long inclusion list
   */
  static serializationExcludedProperties = [
    "container"
    // Exclude complex container object to avoid circular references
  ];
  // Compression exclusions now defined in schema using .behavior()
  /**
    * Update properties from data
    * Using SchemaClass built-in update method with context support
    */
  update(e) {
    const i = e.__context;
    if ("shapes" in e) {
      const { shapes: s, ...n } = e;
      super.update(n), this.shapes = this.initShapes(s, i), this.updatePositions();
    } else
      super.update(e);
  }
  /**
   * Place shapes from this group onto a stock
   *
   * This method:
   * 1. Recalculates positions (which restores shapes to their original rotations)
   * 2. Places each shape at the correct position with the correct rotation from positions array
   */
  placeMyShapes(e) {
    if (!e) throw new Error("placeShapes requires stock");
    if (!(!this.shapes || this.shapes.length === 0)) {
      if (this.x === null || this.x === void 0 || this.y === null || this.y === void 0)
        throw new Error(`Group ${this.id} cannot place shapes: group position is not set (x=${this.x}, y=${this.y})`);
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && (rt(s, i.rot, e) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), rt(s, i.rot, e) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
        }
      if (this.updatePositions(), !this.positions || this.positions.length === 0)
        throw new Error(`Group ${this.id} cannot place shapes: positions array could not be initialized`);
      this.addToStock(e);
      for (let i = 0; i < this.shapes.length; i++) {
        const s = this.shapes[i];
        if (!s) continue;
        const n = this.positions.find((r) => r.autoId === s.autoId);
        if (!n) {
          const r = this.shapes.map((c) => c.autoId).join(", "), l = this.positions.map((c) => c.autoId).join(", ");
          throw new Error(`Position not found for shape ${s.autoId} in group ${this.id}. Shapes: [${r}]. Positions: [${l}]`);
        }
        if (s.x = this.x + n.x, s.y = this.y + n.y, !rt(s, n.rot, e)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
        i === 0 && this.x === 0 && this.y === 0 && (s.firstShape.isFirstShape = !0), s.group.addedAsGroup = this.autoId, s.group.inGroup = this.type === "auto", s.score = this.score;
        const o = s.guillotineState?.stripShapeBatches;
        if (this.guillotineState) {
          const r = this.guillotineState.constructor, l = this.guillotineState.toData();
          s.guillotineState = new r(l), o && (s.guillotineState.stripShapeBatches = o);
        }
        s.bestScore = this.bestScore, typeof this.placementOrder == "number" && (s.group.placementOrder = i, s.placementOrder = this.placementOrder), s.addToStock(e);
      }
    }
  }
  /**
   * Update shape spacing within the group
   * MIGRATION - Added from old Group class
   */
  updateShapeSpacing(e) {
    if (this.container = e, this.updatePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && this.direction) {
      const i = this.direction === "horizontal" ? e.l : e.w;
      this.efficiency = this.groupLength / i;
    }
  }
  /**
   * Set shape positions within the group
   *
   * This method:
   * - On initial call (positions.length === 0): Captures current shape rotations
   * - On recalculation: Restores shapes to their original rotations from positions array
   */
  updatePositions() {
    if (!this.shapes || this.shapes.length === 0)
      throw new Error("updatePositions requires shapes");
    if (!this.container) return;
    const e = /* @__PURE__ */ new Map();
    if (this.positions && this.positions.length > 0) {
      for (const l of this.positions)
        e.set(l.autoId, l.rot);
      for (const [l, c] of e) {
        const u = this.shapes.find((f) => f.autoId === l);
        u && u.rot !== c && rt(u, c);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = ef(this.direction), n = Fo(this.direction);
    let a = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = a === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), u = e.get(l.autoId) ?? l.rot.valueOf();
      let f;
      u !== l.rot ? f = n === "l" ? l.w : l.l : f = l[n];
      const p = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? p.x = i : p.y = i, this.positions.push(p), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? f : f + c, a++;
    }
    this.groupLength = i;
    const o = qt(n), r = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let f;
        return u !== void 0 && u !== c.rot ? f = o === "l" ? c.w : c.l : f = c[o], f > l ? f : l;
      },
      0
    );
    if (this.groupWidth = r, Pt()) {
      const l = this.shapes.slice(0, -1).reduce((f, p) => f + p.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, p) => f + p[n], 0) + l;
      kt([
        () => nt(
          ae.equalTo(u, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => nt(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => nt(
          r,
          "group dimension in other direction is not correct"
        ).to.equal(this.groupWidth)
      ]);
    }
    this.direction === "horizontal" ? (this.l = this.groupLength, this.w = this.groupWidth) : (this.l = this.groupWidth, this.w = this.groupLength), this.calculateDimensions();
  }
  /**
   * Calculate the required rotation for a shape to fit in the group
   * All shapes must have the same rotation for proper alignment
   *
   * For vertical groups (stack along y): groupLength is the fixed horizontal (l) dimension
   * For horizontal groups (stack along x): groupWidth is the fixed vertical (w) dimension
   */
  /* private calculateRequiredRotation( shape: Shape, stackingDimension: 'l' | 'w' ): Rotation
  	{
  		// If shape is square, rotation doesn't matter
  		if ( shape.isSquare ) return 0 as Rotation
  
  		// FALLBACK: If this is being called before group dimensions are set,
  		// just use the current rotation
  		if ( !this.groupLength || !this.groupWidth )
  		{
  			return shape.rot.valueOf() as Rotation
  		}
  
  		// Determine the target dimension value that all shapes must match
  		// For vertical groups: all shapes must have the same l value (groupLength)
  		// For horizontal groups: all shapes must have the same w value (groupWidth)
  		const targetDimension = stackingDimension === 'w' ? 'l' : 'w'
  		const targetValue = stackingDimension === 'w' ? this.groupLength : this.groupWidth
  
  		// Get shape's base dimensions (at rot=0)
  		const baseDimensions = shape.rot === 0
  			? { l: shape.l, w: shape.w }
  			: { l: shape.w, w: shape.l }
  
  		// If the shape's base dimension matches the target, use rot=0
  		// Otherwise, the shape needs to be rotated (rot=1)
  		const requiredRot = baseDimensions[targetDimension] === targetValue ? 0 as Rotation : 1 as Rotation
  
  		log( 'groups', `    calculateRequiredRotation for ${shape.id}: targetDim=${targetDimension}, targetVal=${targetValue}, baseDims=${baseDimensions.l}x${baseDimensions.w}, requiredRot=${requiredRot}` )
  
  		return requiredRot
  	} */
  /**
   * Sort shapes within the group
   * Sorts by reverse dimension first (for strip packing efficiency)
   * Then by direction dimension, then by ID
   */
  sortShapes() {
    const e = Fo(this.direction), i = qt(e);
    this.shapes.sort((s, n) => n[i] !== s[i] ? n[i] - s[i] : n[e] !== s[e] ? n[e] - s[e] : s.id.localeCompare(n.id, void 0, { numeric: !0 }));
  }
  /**
   * Clean up group resources
   */
  destroy() {
    if (this.shapes && this.shapes.length > 0)
      for (const e of this.shapes)
        e.group && (e.group.inGroup = !1, e.group.reference = void 0, e.group.addedAsGroup = void 0);
    this.shapes = [], this.positions = [], this.container = void 0, this.added = !1;
  }
  /**
   * Override isIdentical for groups
   * Auto-generated groups (segment groups) with the same dimensions should be considered identical
   * even if they contain different child shapes, to prevent duplicate first-shape candidates
   */
  isIdentical(e, i = !1) {
    if (e.autoId === this.autoId) return !0;
    const s = this.autoId?.split(".")[0], n = e.autoId?.split(".")[0];
    return s && n && s === n ? !0 : this.type === "auto" && e.type === "auto" ? this.isSameSize(e) : super.isIdentical(e, i);
  }
}
function Ie(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const Sf = (t, e) => Ie(t, e), Ni = (t) => {
  const { min: e, allowZero: i = !1, nullable: s = !0 } = t || {};
  let n;
  return e !== void 0 ? n = i ? d().min(e) : d().min(e) : n = i ? d().min(0) : d().gt(0), s ? ue([
    n,
    h(),
    ii()
  ]).transform((a) => a == null || a === "" ? null : typeof a == "string" ? U({ v: a }) ?? null : a) : ue([
    n,
    h()
  ]).transform((a) => a === "" ? 0 : typeof a == "string" ? U({ v: a }) ?? 0 : a);
}, Jr = () => Ie(
  Zi,
  {
    label: "fields.grain",
    group: "properties",
    options: [
      { value: "n", label: "fields.grain.none" },
      { value: "l", label: "fields.grain.length" },
      { value: "w", label: "fields.grain.width" },
      { value: "y", label: "fields.grain.either" }
    ]
  }
), xf = () => Ie(
  Fr,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), Bs = (t) => Ie(
  Ni({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), kf = () => Ie(
  Yi(
    (t) => {
      if (t === "" || t === null || t === void 0) return 1;
      if (typeof t == "string") {
        const e = parseInt(t, 10);
        return isNaN(e) ? 1 : e;
      }
      return t;
    },
    d().min(0, { message: "Quantity should be greater than or equal to 0" }).int({ message: "Quantity must be a whole number" }).default(1)
  ),
  {
    label: "fields.q",
    placeholder: "fields.q",
    group: "general",
    step: 1,
    output: "number"
  }
), If = (t) => Ie(
  h().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), Pf = () => Ie(
  h().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), Cf = () => Ie(
  Ni({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
    if (t != null)
      return t;
  }),
  {
    label: "fields.cost",
    placeholder: "fields.cost",
    group: "pricing",
    step: 0.01,
    output: "number"
  }
), Tf = () => Ie(
  Qc().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Af = (t) => Ie(
  L().default(!1),
  t
), Of = (t, e) => Ie(
  pe(t),
  e
), Qt = {
  field: Ie,
  boolean: Af,
  enum: Of,
  custom: Sf
}, $f = E({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: h().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: h().optional().describe("Reference marker for object recreation")
}), Ff = E({
  // ========== Selection State (excluded from compression) ==========
  selected: Qt.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: Qt.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: Qt.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: Qt.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Lf = E({
  l1: Ie(
    d().default(0),
    { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  l2: Ie(
    d().default(0),
    { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w1: Ie(
    d().default(0),
    { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
  ),
  w2: Ie(
    d().default(0),
    { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
  )
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), Ef = Yi(
  (t) => {
    if (t == null)
      return { l1: 0, l2: 0, w1: 0, w2: 0 };
    if (typeof t == "object" && t !== null) {
      const e = t, i = (s) => s == null ? 0 : typeof s == "string" ? U({ v: s }) ?? 0 : s;
      return {
        l1: i(e.l1),
        l2: i(e.l2),
        w1: i(e.w1),
        w2: i(e.w2)
      };
    }
    return t;
  },
  Lf
), Df = E({
  // ========== Identity ==========
  id: Ar,
  index: d().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: Bs({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: Bs({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: Bs({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: kf(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: If(),
  material: Pf(),
  // ========== Cost ==========
  cost: Cf(),
  // ========== Trim Configuration ==========
  trim: Ef,
  // ========== Rotation (Runtime) ==========
  rot: Na.default(0),
  // ========== Flags ==========
  preventAutoRotation: Qt.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: Qt.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: Qt.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: Tf()
}), Js = E({
  ...$f.shape,
  // System properties from AutoSerializable
  ...Rt.shape,
  ...Df.shape,
  // Core business fields
  ...Ff.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: h().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), Ya = {
  // Include validation computed properties (isValid)
  ...si,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = U({ v: t.l }) ?? 0, i = U({ v: t.w }) ?? 0;
      return Math.max(e, i);
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "The longer of the two dimensions",
      returnType: "number"
    }
  },
  // Get the short side dimension
  shortSide: {
    compute: (t) => {
      const e = U({ v: t.l }) ?? 0, i = U({ v: t.w }) ?? 0;
      return Math.min(e, i);
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "The shorter of the two dimensions",
      returnType: "number"
    }
  },
  // Check if has trim
  hasTrim: {
    compute: (t) => {
      const e = t.trim;
      return !!(e && (e.l1 || e.l2 || e.w1 || e.w2));
    },
    metadata: {
      cache: !1,
      dependencies: ["trim"],
      returnType: "boolean"
    }
  },
  // Check if rotated
  isRotated: {
    compute: (t) => t.rot === 1,
    metadata: {
      cache: !1,
      dependencies: ["rot"],
      returnType: "boolean"
    }
  },
  // Check if the rectangle is square (length equals width)
  isSquare: {
    compute: (t) => {
      const e = U({ v: t.l }) ?? 0, i = U({ v: t.w }) ?? 0;
      return e === i;
    },
    metadata: {
      cache: !1,
      dependencies: ["l", "w"],
      description: "Whether the rectangle is square (l === w)",
      returnType: "boolean"
    }
  }
};
function Rf(t, e, i) {
  if (console.log("[processNumberField] Input:", { value: t, valueType: typeof t, numberFormat: e, skipValidation: i }), i)
    return typeof t == "number" ? (console.log("[processNumberField] Fast path - number:", t), isNaN(t) ? null : t) : typeof t == "string" ? (console.log("[processNumberField] Fast path - string:", t), t) : (console.log("[processNumberField] Fast path - empty value"), null);
  if (e === "decimal") {
    const s = t ? U({ v: t, nf: "decimal" }) : null;
    return console.log("[processNumberField] Decimal mode - cn result:", { result: s, resultType: typeof s }), s;
  } else
    return console.log("[processNumberField] Fraction mode - keeping value as-is:", { value: t, valueType: typeof t }), t;
}
function _f(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(ti.map((r) => [r, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t) return n;
  const o = t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t) ? {
    // CORRECT mapping: y1→l1, y2→l2, x1→w1, x2→w2
    l1: t.y1 ?? t.l1 ?? 0,
    l2: t.y2 ?? t.l2 ?? 0,
    w1: t.x1 ?? t.w1 ?? 0,
    w2: t.x2 ?? t.w2 ?? 0
  } : t;
  return i ? Object.keys(n).forEach((r) => {
    n[r] = o[r] ?? 0;
  }) : Object.keys(n).forEach((r) => {
    const l = o[r];
    l != null && (n[r] = U({ v: l, nf: e }));
  }), n;
}
const Mf = ["efficiency", "guillotine", "beam", "none"], pa = ["l", "w", "flex", "none"], Bf = ["efficiency", "time"], jf = ["l", "w"], Qr = ["efficiency", "smallest"], Nf = ["dimensions", "identical", "none"], Qs = ["sheet", "linear", "roll"], Sn = ue([
  d().int().positive(),
  ii(),
  eu()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), xn = pe(Mf).nullable().optional().transform((t) => t === null ? void 0 : t), kn = pe(pa).nullable().optional().transform((t) => t === null ? void 0 : t), Ka = pe(Qr).default("efficiency").describe("Method for selecting stocks"), Za = pe(Nf).default("identical").describe("How to stack identical parts"), In = E({
  strategy: pe(Bf).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: L().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Xa = E({
  primaryCompression: pe(jf).default("w")
}).default({
  primaryCompression: "w"
});
E({
  stockType: hn,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: Sn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: xn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: kn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: In,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Xa,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Ka,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Za
});
const el = d().min(0).default(0), tl = d().min(0).default(0), il = d().min(0).default(0), Vf = E({
  dimension: tl,
  minSpacing: il
});
function ga(t) {
  switch (t) {
    case "sheet":
      return ["guillotine", "efficiency", "beam"];
    case "roll":
      return ["guillotine", "efficiency"];
    case "linear":
      return [];
    // Linear materials have no cut types - they're simply cut to length
    default:
      return ["guillotine"];
  }
}
function ma(t, e) {
  if (t === "sheet") {
    if (e === "guillotine") return ["l", "w", "flex"];
    if (e === "beam") return ["l"];
    if (e === "efficiency") return [];
  } else if (t === "roll") {
    if (e === "guillotine") return ["w"];
    if (e === "efficiency") return [];
  } else if (t === "linear")
    return [];
  return [];
}
const Gf = Ie(
  xn,
  {
    label: "fields.cutType",
    group: "cutting",
    order: 1,
    type: "enum",
    placeholder: "options.select",
    options: [
      { value: "efficiency", label: "options.efficiency_title", info: "options.efficiency_description" },
      { value: "guillotine", label: "options.guillotine_title", info: "options.guillotine_description" },
      { value: "beam", label: "options.beam", info: "options.beam_description" }
    ]
  }
), qf = Ie(
  kn,
  {
    label: "fields.cutPreference",
    group: "cutting",
    order: 2,
    type: "enum",
    defaultValue: "l",
    placeholder: "options.select",
    options: [
      { value: "l", label: "options.length_cuts", info: "options.length_cuts_description" },
      { value: "w", label: "options.width_cuts", info: "options.width_cuts_description" },
      // { value: 'flex', label: 'options.flexible', info: 'options.flexible_description' },
      { value: "none", label: "options.none" }
    ]
  }
), zf = Ie(
  Ka,
  {
    label: "fields.stockSelection",
    group: "general",
    order: 1,
    type: "enum",
    placeholder: "options.select",
    options: [
      { value: "efficiency", label: "options.most_efficient", info: "options.most_efficient_description" },
      { value: "smallest", label: "options.smallest_first", info: "options.smallest_first_description" }
    ]
  }
), Wf = Ie(
  Za,
  {
    label: "fields.stackingMode",
    group: "stacking",
    order: 1,
    type: "enum",
    placeholder: "options.select",
    options: [
      { value: "dimensions", label: "options.by_dimensions", info: "options.by_dimensions_description" },
      { value: "identical", label: "options.identical_only", info: "options.identical_only_description" },
      { value: "none", label: "options.no_stacking", info: "options.no_stacking_description" }
    ]
  }
), Hf = Ie(
  In,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Uf = Ie(
  Xa,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), en = E({
  ...Rt.shape,
  // ========== Stock Type ==========
  stockType: Ie(
    pe([...Qs]).default("sheet"),
    {
      label: "fields.stockType",
      group: "general",
      order: 1,
      placeholder: "options.select",
      options: [
        { value: "sheet", label: "options.sheet", info: "options.sheet_description" },
        { value: "linear", label: "options.linear", info: "options.linear_description" },
        { value: "roll", label: "options.roll", info: "options.roll_description" }
      ]
    }
  ),
  // ========== Blade Configuration ==========
  bladeWidth: Ie(
    Ni({ allowZero: !0, nullable: !1 }).default(0),
    {
      label: "fields.bladeWidth",
      placeholder: "fields.bladeWidth",
      group: "blade",
      order: 1,
      output: "number",
      info: "Enter your blade width in the current unit (saw kerf)."
    }
  ),
  // ========== Cutting Configuration ==========
  stackHeight: Ie(
    Sn,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Gf,
  cutPreference: qf,
  // ========== Guillotine Options ==========
  guillotineOptions: Hf,
  // ========== Efficiency Options ==========
  efficiencyOptions: Uf,
  // ========== General Options ==========
  options: E({
    stockSelection: zf,
    minSpacing: Ni({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Wf,
    minSpacingDimension: E({
      dimension: Ni({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: Ni({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Yf = {
  // Include validation computed properties (isValid)
  ...si,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => ga(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => ma(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, rs = Js.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: Jr(),
  // Add orientationLock with input-specific transform
  orientationLock: xf(),
  // ========== Shared Shape Properties ==========
  upDirection: Ie(
    Yr,
    {
      label: "fields.upDirection",
      description: "Direction that should face up",
      group: "properties",
      order: 5,
      options: [
        { value: null, label: "fields.upDirection.none" },
        { value: "l", label: "fields.upDirection.length" },
        { value: "w", label: "fields.upDirection.width" }
      ]
    }
  ),
  stockLock: Ie(
    Ur,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: pf.nullable().optional(),
  // ========== Custom Data ==========
  customData: Ie(
    gf,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: Ie(
    be().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: ve("Machining", {
    nullable: !0,
    description: "Machining operations for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full machining data, not just a reference
      compress: "full",
      // Include full data in compressed mode too
      clone: "copy"
    }
  }).optional(),
  // ========== Extras ==========
  // Container for all extras (banding, finish, planing, etc.)
  // Override default reference behavior to serialize full data
  extras: ve("Extras", {
    nullable: !0,
    description: "Extras container for this shape",
    fieldBehavior: {
      serialize: "full",
      // Always serialize full extras data, not just a reference
      compress: "full",
      // Include full data in compressed mode too
      clone: "copy"
    }
  }).optional()
}), Kf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ya,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Pi = E({
  ...Js.shape,
  ...Lr.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: Bs({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: Jr(),
  preventGrainRotation: Qt.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: Qt.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: Ie(
    $r,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: Ie(
    d().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: Ie(
    h().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: Ie(
    ee(h()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: Ie(
    L().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Saw configuration (excluded from compression)
  saw: Ie(
    be().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" })
}), Zf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Ya
  // InputStock doesn't define additional computed properties
}, Ja = Rt.extend({
  // ========== Identification ==========
  id: h().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ee(h()).default([]).describe("List of shape IDs in this group"),
  shapes: ee(h()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: Ua,
  // 'horizontal' | 'vertical'
  q: d().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: L().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: h().optional().describe("Group name"),
  material: h().optional().describe("Material type"),
  grain: Zi.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: E({
    stockId: h().optional(),
    material: h().optional(),
    thickness: d().optional(),
    grain: Zi.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ee(be()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), Xf = {
  // Include validation computed properties (isValid)
  ...si
  // InputUserGroup doesn't define additional computed properties
};
E({
  parts: ee(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: Ua,
  q: d().int().min(1).describe("Quantity of groups")
});
function tn() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Vi(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ji(t) {
  return t.issues.map((e) => {
    const i = {}, s = e.path.length > 0 ? e.path[e.path.length - 1] : "field", n = typeof s == "symbol" ? String(s) : s;
    if (i.field = `fields.${n}`, e.code === "too_small") {
      const a = e;
      a.minimum !== void 0 && (i.minimum = a.minimum, i.min = a.minimum);
    }
    if (e.code === "too_big") {
      const a = e;
      a.maximum !== void 0 && (i.maximum = a.maximum, i.max = a.maximum);
    }
    return new ie({
      field: [[e.path.join(".")]],
      message: e.message,
      // Should be a translation key from our custom error map
      type: "error",
      shouldTranslate: !0,
      // Let Issue class handle translation
      params: i,
      // Pass parameters for translation interpolation
      item: null
      // Explicitly set to null to avoid circular references
    });
  });
}
function Eo(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Ji(i.error);
}
const sl = {
  clearValidation: tn,
  addIssue: Vi,
  validateWithSchema: Eo,
  zodErrorsToIssues: Ji,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return tn.call(this), e.skipSchemaValidation || Eo(t, this).forEach((s) => Vi.call(this, s)), this.issues || [];
  }
};
class nl extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Js;
  static computedProperties = Ya;
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // The Validatable interface is satisfied by:
  // - issues: Issue[] - from validationBasePropertiesSchema
  // - warnings: Issue[] - from validationBasePropertiesSchema
  // - isValid: boolean - from validationBaseComputedProperties
  // - validate(): Issue[] - implemented below
  // UI helper properties - derived from schema metadata
  get numberFormatKeys() {
    const e = this.constructor;
    return e._cachedNumberFormatKeys || (e._cachedNumberFormatKeys = e.extractNumberFormatFields(e.schema)), e._cachedNumberFormatKeys;
  }
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = { ...e }, n = !!s.skipValidation, a = !!s.skipSchemaValidation;
    console.log("[InputRectangle] Constructor input:", {
      l: s.l,
      w: s.w,
      t: s.t,
      skipValidation: n,
      skipSchemaValidation: a,
      numberFormat: i
    });
    const o = ["l", "w", "t", "cost"];
    for (const r of o)
      s[r] === null || s[r] === void 0 ? delete s[r] : s[r] !== void 0 && (console.log(`[InputRectangle] Processing field ${r}, value:`, s[r], typeof s[r]), s[r] = Rf(s[r], i, n), console.log(`[InputRectangle] After processNumberField, ${r}:`, s[r]), s[r] === null && (console.log(`[InputRectangle] Deleting field ${r} because it's null`), delete s[r]));
    s.name?.length ? s.name = ku(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = _f(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.InputRectangle;
  }
  /**
     * Create ID for shape (override parent implementation)
     * Format: "1.0", "2.0", "3.0" etc.
     */
  createId(e) {
    const i = `${e + 1}.0`;
    return this.id = i, i;
  }
  /**
   * Validate the input rectangle
   * Implements the Validatable interface requirement
   * Base implementation - subclasses should override with specific validation
   */
  validate(e) {
    return tn.call(this), e?.skipSchemaValidation || sl.runValidation.call(
      this,
      Js,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = U({ v: this.trim.l1 }) ?? 0, n = U({ v: this.trim.l2 }) ?? 0, a = U({ v: this.trim.w1 }) ?? 0, o = U({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (a + o),
      w: i - (s + n)
    };
  }
}
const ba = Rt.extend({
  // Core properties from shared schema
  stockType: hn,
  stackHeight: Sn.describe("Maximum stack height"),
  cutType: xn,
  cutPreference: kn,
  // Blade width (numeric for runtime)
  bladeWidth: el.describe("Blade width"),
  // Guillotine options
  guillotineOptions: In,
  // Efficiency options
  efficiencyOptions: Xa,
  // General options (nested stockSelection and stackingMode)
  options: E({
    stockSelection: Ka,
    minSpacing: il,
    stackingMode: Za,
    minSpacingDimension: Vf
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), Jf = {
  // Include validation computed properties
  ...si,
  // Blade width / 2 for convenience
  halfBladeWidth: {
    compute: (t) => t.bladeWidth / 2,
    metadata: {
      cache: !1,
      dependencies: ["bladeWidth"],
      returnType: "number"
    }
  },
  // Is guillotine cutting
  isGuillotine: {
    compute: (t) => t.cutType === "guillotine",
    metadata: {
      cache: !1,
      dependencies: ["cutType"],
      returnType: "boolean"
    }
  },
  // Is beam saw cutting
  isBeamSaw: {
    compute: (t) => t.cutType === "beam",
    metadata: {
      cache: !1,
      dependencies: ["cutType"],
      returnType: "boolean"
    }
  },
  // Is efficiency optimization
  isEfficiency: {
    compute: (t) => t.cutType === "efficiency",
    metadata: {
      cache: !1,
      dependencies: ["cutType"],
      returnType: "boolean"
    }
  }
};
ba.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
class al extends Ue {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = ba;
  static computedProperties = Jf;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  // Static defaults inferred from Zod schema
  static defaults = ba.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0);
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.Saw;
  }
  /**
    * Validate the saw data
    * For backward compatibility, returns Issue[] synchronously
    * Delegates to async validation which uses the schema
    */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new ie({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function Qa(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, a] of Object.entries(e)) {
    const o = t[n];
    switch (a.type) {
      case "number":
        o != null ? s[n] = typeof o == "string" ? U({ v: o, nf: i }) : o : o === null && (s[n] = null);
        break;
      case "trim":
        if (o) {
          const r = {};
          for (const [l, c] of Object.entries(o))
            r[l] = typeof c == "string" ? U({ v: c, nf: i }) : c;
          s[n] = r;
        }
        break;
      case "omit":
        delete s[n];
        break;
      case "set":
        s[n] = a.value;
        break;
      case "transform":
        s[n] = a.transform(o);
        break;
      case "rename":
        o !== void 0 && (s[a.to] = o, delete s[n]);
        break;
    }
  }
  return s;
}
const Qf = {
  // Numeric fields that need conversion
  l: { type: "number" },
  w: { type: "number" },
  t: { type: "number" },
  q: { type: "transform", transform: (t) => t || 1 },
  cost: { type: "number" },
  // Trim needs special handling
  trim: { type: "trim" },
  // Transform fields
  orientationLock: { type: "transform", transform: (t) => t || null },
  // Add missing fields for Shape
  grain: { type: "set", value: null },
  // Pass through tracking fields
  autoId: { type: "pass" },
  // Pass autoId through to runtime classes
  // Extras and machining pass through as-is (already proper instances)
  extras: { type: "pass" },
  machining: { type: "pass" },
  // Remove UI-only fields
  selected: { type: "omit" },
  multiEdit: { type: "omit" },
  selectedMaterial: { type: "omit" },
  readonly: { type: "omit" }
}, eh = {
  // Numeric fields that need conversion
  l: { type: "number" },
  // Will be handled specially with default 0 in Stock constructor
  w: { type: "number" },
  // Will be handled specially with default 0 in Stock constructor
  t: { type: "number" },
  q: { type: "transform", transform: (t) => t || 1 },
  cost: { type: "number" },
  // Trim needs special handling
  trim: { type: "trim" },
  // Transform fields
  grain: { type: "transform", transform: (t) => t || null },
  // Pass through tracking fields
  autoId: { type: "pass" },
  // Pass autoId through to runtime classes
  // Remove UI-only fields
  selected: { type: "omit" },
  multiEdit: { type: "omit" },
  readonly: { type: "omit" }
}, th = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? U({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? U({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? U({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
      }
    })
  },
  // Remove UI/validation fields that shouldn't be in runtime
  issues: { type: "omit" },
  warnings: { type: "omit" },
  // Remove the input-specific id
  id: { type: "omit" }
  // All other fields (stockType, cutType, cutPreference, etc.)
  // are already in the correct format and will pass through as-is
};
class ol extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = en;
  static computedProperties = Yf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = ga(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = ma(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]);
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (tn.call(this), e?.skipSchemaValidation || sl.runValidation.call(
      this,
      en,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = U({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? Vi.call(this, new ie({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Vi.call(this, new ie({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Vi.call(this, new ie({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Vi.call(this, new ie({
        message: "Stack height seems unusually large (> 1000)",
        type: "warning",
        field: [["stackHeight"]]
      })));
    }
    return this.issues;
  }
  // Removed async validateSaw method - validation is now handled in validate() method
  // Note: getValidCutTypesForStock and getValidCutPreferencesForStockAndCut removed
  // These are now imported from '../saw/utils' and used in schema computed properties
  /**
    * Check if cut type is valid
    */
  isValidCutType(e) {
    return this.validCutTypes.includes(e);
  }
  /**
    * Check if cut preference is valid
    */
  isValidCutPreference(e) {
    return this.validCutPreferences.includes(e);
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Update properties from data
   * Override to handle field dependencies
   */
  update(e) {
    const i = this.stockType, s = this.cutType;
    super.update(e);
    const n = ga(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, o = s !== this.cutType;
    if (a || o) {
      const r = ma(this.stockType, this.cutType);
      this.cutPreference && !r.includes(this.cutPreference) ? r.length > 0 ? this.cutPreference = r.includes("l") ? "l" : r[0] : this.cutPreference = void 0 : !this.cutPreference && r.length > 0 && (this.cutPreference = r.includes("l") ? "l" : r[0]);
    }
    this.validate();
  }
  // Note: validCutTypes, validCutPreferences, and numericBladeWidth are now computed properties from the schema
  /**
   * Override toData to ensure correct return type
   * Returns InputSawData (schema properties only, no computed properties)
   */
  toData(e) {
    return super.toData(e);
  }
  /**
   * Convert to Saw instance for runtime use
   */
  toSaw() {
    const e = this.toData(), i = Qa(
      e,
      th
    );
    return new al(i);
  }
}
const rl = Ct, Do = ft;
ti.map((t) => `side.${t}`), Do.map((t) => `face.${t}`), Do.map((t) => `face.${t}`), rl.map((t) => `side.${t}`);
const ll = ["radius", "bevel"], ih = Rt.extend({
  // Corner type
  type: pe(ll).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), sh = {
  // Inherit computed properties from validation base
  ...si,
  // Check if corner has any operation
  hasOperation: {
    compute: (t) => t.type !== void 0 && t.size > 0,
    metadata: {
      cache: !0,
      dependencies: ["type", "size"],
      returnType: "boolean"
    }
  }
};
class Hi extends Ue {
  // Zod schema for validation and serialization
  static schema = ih;
  static computedProperties = sh;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return "corner";
  }
  constructor(e = {}) {
    super(e);
  }
  /**
   * Validate the corner
   */
  validate() {
    const e = [];
    return this.type && this.size !== null && this.size <= 0 && e.push(new ie({
      message: `Corner ${this.index + 1}: Size must be positive`,
      type: "error"
    })), (this.index < 0 || this.index > 3) && e.push(new ie({
      message: "Corner index must be between 0 and 3",
      type: "error"
    })), this.issues = e, e;
  }
  /**
   * Validate against shape dimensions
   */
  validateAgainstShape(e, i) {
    const s = this.validate();
    if (!this.type || !this.size || this.size <= 0) return s;
    const n = Math.min(e, i);
    return this.size > n / 2 && s.push(new ie({
      message: `Corner ${this.index + 1}: Size cannot exceed half of shortest side (${n / 2})`,
      type: "error"
    })), this.issues = s, s;
  }
  /**
   * Async validation with schema
   */
  // validateAsync() method removed - using base class schema-aware implementation
  // The base AutoSerializable.validateAsync() will:
  // 1. Use cornerSchema to validate properties
  // 2. Set the valid flag
  // 3. Map errors to Issue objects
  // 4. Return the issues array
  /**
   * Get the corner position name
   */
  getCornerName() {
    return ["Bottom Left", "Bottom Right", "Top Right", "Top Left"][this.index] || "Unknown";
  }
  /**
   * Get the corner side identifier (a, b, c, d)
   */
  getCornerSide() {
    return ["a", "b", "c", "d"][this.index] || "";
  }
  /**
   * Calculate the length of the corner cut
   */
  getLength() {
    return !this.type || !this.size || this.size <= 0 ? 0 : this.type === "radius" ? Math.PI * this.size / 2 : this.type === "bevel" ? Math.sqrt(2) * this.size : 0;
  }
  /**
   * Check if corner is present/active
   */
  isPresent() {
    return this.isValid !== !1 && this.type !== null && this.size !== null && this.size > 0;
  }
  /**
   * Clear the corner
   */
  clear() {
    this.type = null, this.size = 0;
  }
  /**
   * Clone the corner
   */
  // clone() method removed - using base class implementation from AutoSerializable
  // toData() method removed - using base class implementation from AutoSerializable
  // The base class automatically returns CornerProperties as the TData type parameter
  /**
   * Update from data
   */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use cornerSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new Hi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Hi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Hi({ type: "bevel", size: e, index: i });
  }
}
const cl = ["l1", "l2", "w1", "w2"], nh = Rt.extend({
  // Position
  position: d().min(0).default(0).describe("Position along the side"),
  side: pe(cl).describe("Side where hinge is placed"),
  face: d().min(0).max(1).default(0).describe("Face side (0 = front, 1 = back)"),
  // Hole configuration
  numHoles: d().min(1).default(2).describe("Number of holes"),
  diameter: d().min(0.1).default(35).describe("Hole diameter in mm"),
  depth: d().min(0).default(13).describe("Hole depth in mm"),
  // Hinge dimensions
  hingeLength: d().min(0).default(52).describe("Length of the hinge"),
  distanceFromEdge: d().min(0).default(22.5).describe("Distance from edge to hole center"),
  outerSpacing: d().min(0).default(9.5).describe("Spacing from hinge ends to outer holes"),
  // Constraints
  minimumHoleDistance: d().min(0).optional().describe("Minimum distance between holes"),
  positionLimit: d().min(0).optional().describe("Maximum position along side")
}), ah = {
  // Inherit computed properties from validation base
  ...si,
  // Calculate individual hole positions
  holePositions: {
    compute: (t) => {
      const e = [];
      if (t.numHoles === 1)
        e.push(t.position + t.hingeLength / 2);
      else if (t.numHoles === 2)
        e.push(t.position + t.outerSpacing), e.push(t.position + t.hingeLength - t.outerSpacing);
      else {
        const i = (t.hingeLength - 2 * t.outerSpacing) / (t.numHoles - 1);
        for (let s = 0; s < t.numHoles; s++)
          e.push(t.position + t.outerSpacing + s * i);
      }
      return e;
    },
    metadata: {
      cache: !0,
      dependencies: ["position", "numHoles", "hingeLength", "outerSpacing"],
      returnType: "number[]"
    }
  }
}, oh = ["regular", "hinge", "shelf"], rh = Rt.extend({
  // Position
  x: d().min(0).default(0).describe("X position from left edge"),
  y: d().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: d().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: d().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: d().default(0).describe("Face index (0=front, 1=back)"),
  type: pe(oh).default("regular").describe("Type of hole")
}), lh = {
  // Inherit computed properties from validation base
  ...si,
  // Check if it's a through hole
  isThrough: {
    compute: (t) => t.depth === void 0 || t.depth === 0,
    metadata: {
      cache: !0,
      dependencies: ["depth"],
      returnType: "boolean"
    }
  }
};
class Gt extends Ue {
  // Zod schema for validation and serialization
  static schema = rh;
  static computedProperties = lh;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return "hole";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
    * Validate the hole
    */
  validate() {
    const e = [];
    return (this.x < 0 || this.y < 0) && e.push(new ie({
      message: "Position cannot be negative",
      type: "error"
    })), this.diameter <= 0 && e.push(new ie({
      message: "Diameter must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ie({
      message: "Depth cannot be negative",
      type: "error"
    })), this.issues = e, e;
  }
  /**
    * Async validation with schema
    */
  // validateAsync() method removed - using base class schema-aware implementation
  // The base AutoSerializable.validateAsync() will:
  // 1. Use holeSchema to validate properties
  // 2. Set the valid flag
  // 3. Map errors to Issue objects
  // 4. Return the issues array
  /**
    * Check if hole goes through given thickness (legacy method)
    */
  isThroughThickness(e) {
    return !this.depth || this.depth >= e;
  }
  /**
    * Check if hole should be shown on a given face
    */
  shouldShow(e, i) {
    return this.face === i || this.isThroughShape(e) === !0;
  }
  /**
    * Check if hole goes through the entire shape
    */
  isThroughShape(e) {
    const i = e.t || 0;
    return !this.depth || this.depth >= i;
  }
  /**
    * Get Y drawing position for visualization
    */
  getYDrawPosition(e, i, s) {
    let n = e.rot ? this.x : this.y;
    return n += e.y || 0, i === 1 && (s ? n = (s.w || 0) - n : n = (e.w || 0) - n), n;
  }
  /**
    * Get X drawing position for visualization
    */
  getXDrawPosition(e) {
    let i = 0;
    const s = this.x;
    return e.rot ? i = (e.l || 0) - this.y + (e.x || 0) : i = s + (e.x || 0), i;
  }
  /**
    * Get distance to another hole
    */
  getDistanceTo(e) {
    return this.face !== e.face ? 1 / 0 : Math.sqrt(
      Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2)
    );
  }
  /**
    * Check if overlaps with another hole
    */
  overlaps(e) {
    if (this.face !== e.face)
      return !1;
    const i = this.getDistanceTo(e), s = (this.diameter + e.diameter) / 2;
    return i < s;
  }
  /**
    * Clone the hole
    */
  // clone() method removed - using base class implementation from AutoSerializable
  // toData() method removed - using base class implementation
  // The base class automatically returns the correct type
  // Removed by cleanup script on 2025-08-18
  /**
    * Update from data
    */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use holeSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
    * Create hole from coordinates
    */
  static fromCoordinates(e, i, s, n = 0) {
    return new Gt({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Gt(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class sn extends Ue {
  // Zod schema for validation and serialization
  static schema = nh;
  static computedProperties = ah;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return "hingeHole";
  }
  constructor(e = {}) {
    super(e), this.validate();
  }
  /**
   * Validate the hinge hole set
   */
  validate() {
    const e = [];
    if (this.position < 0 && e.push(new ie({
      message: "Position cannot be negative",
      type: "error"
    })), this.numHoles <= 0 && e.push(new ie({
      message: "Number of holes must be positive",
      type: "error"
    })), this.diameter <= 0 && e.push(new ie({
      message: "Diameter must be positive",
      type: "error"
    })), this.hingeLength <= 0 && e.push(new ie({
      message: "Hinge length must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ie({
      message: "Depth cannot be negative",
      type: "error"
    })), this.numHoles > 1) {
      const i = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > i && e.push(new ie({
        message: "Holes do not fit within hinge length",
        type: "error"
      }));
    }
    return this.issues = e, e;
  }
  /**
   * Async validation with schema
   */
  // validateAsync() method removed - using base class schema-aware implementation
  // The base AutoSerializable.validateAsync() will:
  // 1. Use hingeHoleSchema to validate properties
  // 2. Map errors to Issue objects
  // 3. Return the issues array
  /**
   * Create individual Hole instances from this hinge hole set (legacy compatibility)
   */
  createHoles(e) {
    const i = e?.l || e?.getLongSide?.() || e?.longSide || 0, s = e?.w || e?.getShortSide?.() || e?.shortSide || 0;
    return this.generateHoles(i, s).map((a) => new Gt(a));
  }
  /**
   * Generate individual holes from this hinge hole set
   */
  generateHoles(e, i) {
    const s = [];
    if (this.numHoles <= 0) return s;
    const n = this.numHoles > 1 ? (this.hingeLength - 2 * this.outerSpacing) / (this.numHoles - 1) : 0;
    for (let a = 0; a < this.numHoles; a++) {
      const o = this.outerSpacing + a * n;
      let r, l;
      switch (this.side) {
        case "l1":
          r = this.distanceFromEdge, l = this.position + o;
          break;
        case "l2":
          r = e - this.distanceFromEdge, l = this.position + o;
          break;
        case "w1":
          r = this.position + o, l = this.distanceFromEdge;
          break;
        case "w2":
          r = this.position + o, l = i - this.distanceFromEdge;
          break;
        default:
          r = 0, l = 0;
      }
      s.push(new Gt({
        x: r,
        y: l,
        diameter: this.diameter,
        depth: this.depth,
        face: this.face,
        type: "hinge"
      }));
    }
    return s;
  }
  /**
   * Get hole spacing
   */
  getHoleSpacing() {
    if (this.numHoles <= 1) return 0;
    const e = this.hingeLength - this.outerSpacing * 2, i = this.numHoles - 1;
    return e / i;
  }
  /**
   * Clone the hinge hole
   */
  // clone() method removed - using base class implementation from AutoSerializable
  // toData() method removed - using base class implementation
  // The base class automatically returns the correct type
  // Removed by cleanup script on 2025-08-18
  /**
   * Update from data
   */
  // update() method removed - using base class schema-aware implementation
  // The base AutoSerializable.update() will:
  // 1. Use hingeHoleSchema to update properties
  // 2. Skip computed properties automatically
  // 3. Call validate() at the end
  /**
   * Create from plain data (for deserialization)
   */
  static fromData(e) {
    return new sn(e);
  }
}
const ch = Rt.extend({
  // Collections of machining operations
  holes: Fe("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: Fe("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: Fe("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: L().default(!0).describe("Whether machining is enabled")
}), uh = {
  // Inherit computed properties from validation base
  ...si,
  // Check if any machining exists
  hasAnyMachining: {
    compute: (t) => t.holes && t.holes.length > 0 || t.hingeHoles && t.hingeHoles.length > 0 || t.corners && t.corners.length > 0,
    metadata: {
      cache: !1,
      dependencies: ["holes", "hingeHoles", "corners"],
      returnType: "boolean"
    }
  },
  // Count total operations
  operationCount: {
    compute: (t) => (t.holes?.length || 0) + (t.hingeHoles?.length || 0) + (t.corners?.length || 0),
    metadata: {
      cache: !1,
      dependencies: ["holes", "hingeHoles", "corners"],
      returnType: "number"
    }
  }
};
let dh = class ya extends Ue {
  // Zod schema for validation and serialization
  static schema = ch;
  static computedProperties = uh;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return ne.Machining;
  }
  constructor(e = {}) {
    super(e);
  }
  /**
    * Validate machining operations - all or specific type
    */
  validate(e, i, s) {
    const n = [];
    return i === "holes" ? this.holes.forEach((a, o) => {
      (a.x < 0 || a.y < 0) && n.push(new ie({
        message: `Hole ${o + 1}: Position cannot be negative`,
        type: "error"
      })), a.diameter <= 0 && n.push(new ie({
        message: `Hole ${o + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((a, o) => {
      a.position < 0 && n.push(new ie({
        message: `Hinge ${o + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((a, o) => {
      a.size <= 0 && n.push(new ie({
        message: `Corner ${o + 1}: Size must be positive`,
        type: "error"
      }));
    }) : (n.push(...this.validate(e, "holes", s)), n.push(...this.validate(e, "hingeHoles", s)), n.push(...this.validate(e, "corners", s))), i || (this.issues = n), n;
  }
  /**
    * Add a hole
    */
  addHole(e) {
    this.holes.push(e instanceof Gt ? e : new Gt(e)), this.validate();
  }
  /**
    * Remove a hole by index
    */
  removeHole(e) {
    return e >= 0 && e < this.holes.length ? (this.holes.splice(e, 1), this.validate(), !0) : !1;
  }
  /**
    * Remove a hole by autoId
    */
  removeHoleByAutoId(e) {
    const i = this.holes.findIndex((s) => s.autoId === e);
    return this.removeHole(i);
  }
  /**
    * Add a hinge hole set
    */
  addHingeHole(e) {
    this.hingeHoles.push(e instanceof sn ? e : new sn(e)), this.validate();
  }
  /**
    * Remove a hinge hole set by index
    */
  removeHingeHole(e) {
    return e >= 0 && e < this.hingeHoles.length ? (this.hingeHoles.splice(e, 1), this.validate(), !0) : !1;
  }
  /**
    * Remove a hinge hole set by autoId
    */
  removeHingeHoleByAutoId(e) {
    const i = this.hingeHoles.findIndex((s) => s.autoId === e);
    return this.removeHingeHole(i);
  }
  /**
    * Add or update a corner
    */
  setCorner(e) {
    const i = e instanceof Hi ? e : new Hi(e);
    this.corners = this.corners.filter((s) => s.index !== i.index), this.corners.push(i), this.validate();
  }
  /**
    * Remove a corner by index
    */
  removeCorner(e) {
    const i = this.corners.findIndex((s) => s.index === e);
    return i >= 0 ? (this.corners.splice(i, 1), this.validate(), !0) : !1;
  }
  /**
    * Get corner by index
    */
  getCorner(e) {
    return this.corners.find((i) => i.index === e);
  }
  /**
    * Get all hinge holes as individual Hole objects
    */
  getAllHingeHoles(e) {
    const i = [];
    return this.hingeHoles.forEach((s) => {
      this.generateHingeHoles(s, e).forEach((a) => {
        i.push(a instanceof Gt ? a : new Gt(a));
      });
    }), i;
  }
  /**
    * Generate individual holes from a hinge hole set
    */
  generateHingeHoles(e, i) {
    const s = [];
    if (e.numHoles <= 0) return s;
    const n = e.numHoles > 1 ? (e.hingeLength - 2 * e.outerSpacing) / (e.numHoles - 1) : 0, a = i?.l || i?.longSide || 0, o = i?.w || i?.shortSide || 0;
    for (let r = 0; r < e.numHoles; r++) {
      const l = e.outerSpacing + r * n;
      let c, u;
      switch (e.side) {
        case "l1":
          c = e.distanceFromEdge, u = e.position + l;
          break;
        case "l2":
          c = a - e.distanceFromEdge, u = e.position + l;
          break;
        case "w1":
          c = e.position + l, u = e.distanceFromEdge;
          break;
        case "w2":
          c = e.position + l, u = o - e.distanceFromEdge;
          break;
        default:
          c = 0, u = 0;
      }
      s.push({
        x: c,
        y: u,
        diameter: e.diameter,
        depth: e.depth,
        face: e.face,
        type: "hinge"
      });
    }
    return s;
  }
  /**
    * Clear all machining
    */
  clear() {
    this.holes = [], this.hingeHoles = [], this.corners = [], this.validate();
  }
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() properly returns 'this' type
  // toData() is now provided by AutoSerializable base class
  /**
    * Create empty machining
    */
  static empty() {
    return new ya();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new ya(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Gt(n));
      });
    }), e;
  }
  /**
   * Get number of holes
   */
  getNumHoles() {
    return (this.holes || []).length;
  }
  /**
   * Get number of corners
   */
  getNumCorners() {
    return (this.corners || []).length;
  }
};
const fh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return jr(t, "orientationLock", ["l", "w"], e, i, s), s;
}, hh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return jr(t, "grain", ["l", "w"], e, i, s), s;
}, ph = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = _e(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ie({
    item: t,
    message: Dt("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, gh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = _e(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new ie({
      item: t,
      message: Dt("errors.validation.must_be_object", {
        0: zt.customData
      }),
      shouldTranslate: !1,
      field: [["customData"]],
      index: [e],
      issues: n,
      category: s
    }), n;
  for (const [, o] of Object.entries(a))
    if (o != null) {
      const r = typeof o;
      ["string", "number", "boolean"].includes(r) || new ie({
        item: t,
        message: Dt("errors.validation.must_be_string_number_boolean", {
          0: zt.customData
        }),
        shouldTranslate: !1,
        field: [["customData"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      });
    }
  return n;
}, mh = ({ item: t, index: e }) => {
  const i = _e(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, bh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "x");
  return o === null || o === "" || o === void 0 || i != null && U({ v: o }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: He("x", { returnKey: !0 }),
      // positional (legacy)
      field: He("x", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["x"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, yh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "y");
  return o === null || o === "" || o === void 0 || i != null && U({ v: o }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: He("y", { returnKey: !0 }),
      // positional (legacy)
      field: He("y", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["y"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, vh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "l"), r = _e(t, "infiniteLength");
  return (o === null || o === "" || o === void 0 || o === 0 && r !== !0) && new ie({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: He("l", { returnKey: !0 }),
      // positional (legacy)
      field: He("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, wh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "w");
  return (o === null || o === "" || o === void 0) && new ie({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: He("w", { returnKey: !0 }),
      // positional (legacy)
      field: He("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, Sh = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
  const o = [], r = _e(t, "t");
  return n?.cutType === "beam" && !r && new ie({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: o,
    category: a
  }), o;
}, xh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = _e(t, "q"), o = _e(t, "autoAdd");
  return a == null || o === !0, n;
}, kh = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: a = ["group"]
}) => {
  const o = [];
  return i.length < s && new ie({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: o,
    category: a
  }), o;
}, Ih = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const a = [];
  return i.forEach((o, r) => {
    !(typeof o.isSquare == "function", o.isSquare) && !["l", "w"].includes(o.orientationLock) && new ie({
      item: t,
      message: Dt("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: a,
      category: n
    });
  }), a;
}, Ph = ({
  item: t,
  index: e,
  shapes: i,
  joinDirection: s,
  isWarning: n = !1,
  category: a = ["group"]
}) => {
  const o = [];
  if (i.length < 2) return o;
  const r = i[0], l = r.trimmedDimensions ? r.trimmedDimensions[s] : r[s];
  return i.slice(1).forEach((c, u) => {
    const f = c.trimmedDimensions ? c.trimmedDimensions[s] : c[s];
    ae.equalTo(f, l) || new ie({
      item: t,
      message: Dt("errors.groups.dimension_not_correct", {
        0: u + 2,
        1: s === "l" ? "length" : "width",
        2: l,
        3: f
      }),
      shouldTranslate: !1,
      index: [e],
      type: n ? "warning" : "error",
      issues: o,
      category: a
    });
  }), o;
}, Ch = ({
  item: t,
  index: e,
  shapeId: i,
  requiredQuantity: s,
  availableQuantity: n,
  shapeName: a,
  shapeIndex: o,
  isWarning: r = !1,
  category: l = ["group"]
}) => {
  const c = [];
  return s > n && new ie({
    item: t,
    message: Dt("errors.groups.not_enough_of_part", {
      0: a || (o ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: r ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new ie({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: r ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function Th(t) {
  return xe(t) || Qe(t) || ps(t);
}
function Ah(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function Oh(t, e, i) {
  return i ? !ye(t.t) || !ye(e.t) ? !1 : Qe(t) ? ae.equalTo(U({ v: t.t }), U({ v: e.t })) : t.t === e.t : !0;
}
function $h(t, e, i) {
  return i?.stockType !== "linear" || !Qe(t) && !xe(t) ? !0 : vt(t, 0, e) && ae.equalTo(U({ v: t.w }), U({ v: e.w })) || vt(t, 1, e) && ae.equalTo(U({ v: t.l }), U({ v: e.w }));
}
function Fh(t, e, i, s = 0) {
  const n = xe(t[0]), a = i.stockType;
  if (t.some((I) => ye(I.stockLock) && I.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((I) => n || I.autoAdd === !0 || ye(I.q) && Number(I.q) > 0);
  const r = e.some((I) => ye(I.material)), l = e.some((I) => ye(I.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), g = [];
  let x = s;
  for (const I of t) {
    const P = e.map((N, _) => {
      const F = Th(I) && Xi(I, N, void 0, i), H = Ah(I, N, r), j = Oh(I, N, l), m = $h(I, N, i);
      return {
        stockItem: N,
        stockIndex: _,
        fit: F,
        material: H,
        thickness: j,
        width: m,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: F && H && j && (a !== "linear" || m)
      };
    });
    I.stockMatch = {
      fit: P.some((N) => N.fit),
      material: !r || P.some((N) => N.material),
      thickness: !l || P.some((N) => N.thickness),
      width: a !== "linear" || P.some((N) => N.width)
    };
    const $ = P.filter((N) => N.satisfiesAll), S = $.length > 0;
    if (!n && S) {
      const N = $.map((_) => _.stockItem.parentId);
      I.stockLock = N, N.forEach((_) => c.add(_));
    }
    I.stockMatch.fit ? S || (r && !I.stockMatch.material && (p.add(I), g.push(new ie({
      category: ["part", "stock"],
      item: I,
      field: [["material"]],
      index: [x],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !I.stockMatch.thickness && (p.add(I), g.push(new ie({
      category: ["part", "stock"],
      item: I,
      field: [["t"]],
      index: [x],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !I.stockMatch.width && (f.add(I), g.push(new ie({
      category: ["part", "stock"],
      item: I,
      field: [["w"]],
      index: [x],
      message: "errors.validation.no_matching_stock_width"
    }))), I.stockMatch.material && I.stockMatch.thickness && (a !== "linear" || I.stockMatch.width) && (p.add(I), g.push(new ie({
      category: ["part", "stock"],
      item: I,
      field: [["material"], ["t"]],
      index: [x],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(I), g.push(new ie({
      category: ["part", "stock"],
      item: I,
      field: [["l"], ["w"]],
      index: [x],
      message: "errors.validation.will_not_fit"
    }))), x++;
  }
  t.forEach((I) => I.stockMatch = null);
  let R, D;
  return n ? (R = t.filter((I) => u.has(I) || f.has(I) || p.has(I)).sort(Wt.ID), D = []) : (R = t.filter((I) => u.has(I) || f.has(I) || p.has(I) || !I.stockLock || !I.stockLock.length).sort(Wt.ID), D = e.filter((I) => !c.has(I.parentId)).sort(Wt.ID), e = e.filter((I) => Et(I)).filter((I) => c.has(I.parentId)), t = t.filter((I) => !u.has(I) && !f.has(I) && !p.has(I) && I?.stockLock?.length)), {
    stockList: e,
    unusableStock: D,
    shapeList: t,
    unusableShapes: R,
    newIssues: g
  };
}
function Lh(t) {
  return t?.issues?.length > 0;
}
const Eh = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], o = i.stockType, r = _e(t, "q"), l = _e(t, "l"), c = _e(t, "w");
  return !r || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, o), Lh(t)) || Fh([t], e, i, n).newIssues.forEach((f) => {
    a.push(f);
  }), a;
}, Dh = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const a = _e(t, "l"), o = _e(t, "w");
  if (!a || !o) return n;
  try {
    const r = U({ v: e }), l = U({ v: a }), c = U({ v: o }), u = l - r * 2, f = c - r * 2;
    (u <= 0 || f <= 0) && new ie({
      item: t,
      message: "errors.trim.too_much",
      params: {
        0: "part",
        // positional (legacy)
        1: r,
        // positional (legacy)
        2: `${u}x${f}`,
        // positional (legacy)
        item: "part",
        // named (new)
        trimValue: r,
        // named (new)
        result: `${u}x${f}`
        // named (new)
      },
      field: [["l"], ["w"], ["trim"]],
      index: [i],
      type: s ? "warning" : "error",
      issues: n,
      category: ["part"]
    });
  } catch {
  }
  return n;
}, Rh = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], a = _e(t, "l"), o = _e(t, "w"), r = _e(t, "trim");
  if (!a || !o || !r) return n;
  if ((!Et(t) || Et(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
    try {
      const c = U({ v: a }), u = U({ v: o }), f = (R) => {
        if (R == null) return 0;
        if (typeof R == "number" || typeof R == "string")
          try {
            return U({ v: R }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, p = {
        w1: f(_e(r, "w1")),
        w2: f(_e(r, "w2")),
        l1: f(_e(r, "l1")),
        l2: f(_e(r, "l2"))
      }, g = p.w1 + p.w2, x = p.l1 + p.l2;
      g >= c && new ie({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${He("w1").toUpperCase()} + ${He("w2").toUpperCase()}`,
          // positional (legacy)
          1: He("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${He("l1", { returnKey: !0 })} + ${He("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: He("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), x >= u && new ie({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${He("l1").toUpperCase()} + ${He("l2").toUpperCase()}`,
          // positional (legacy)
          1: He("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${He("l1", { returnKey: !0 })} + ${He("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: He("w", { returnKey: !0 }),
          // named (new)
          maxValue: u
          // named (new)
        },
        field: [["trim", "l1"], ["trim", "l2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      });
    } catch {
    }
  return n;
}, lt = {
  // Dimensions
  x: bh,
  y: yh,
  l: vh,
  w: wh,
  t: Sh,
  q: xh,
  // Trim
  trim: Rh,
  partTrim: Dh,
  // Custom
  customData: gh,
  banding: ph,
  orientationLock: fh,
  grain: hh,
  machining: mh,
  // Stock
  stockMatch: Eh,
  // Groups
  groupShapeCount: kh,
  groupOrientationLock: Ih,
  groupDimensions: Ph,
  groupQuantity: Ch
};
class _h extends nl {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return rs;
  }
  static get computedProperties() {
    return Kf;
  }
  // UI helper properties (extends parent)
  warningKeys = ["q"];
  issueKeys = ["l", "w", "t", "trim"];
  // Note: isNew flag now comes from schema (inputUIStateSchema)
  // Note: Options properties removed - now centralized in CalculationData.extrasOptions
  // Compatibility getters/setters for direct access to extras
  get banding() {
    return this.extras?.banding;
  }
  set banding(e) {
    this.extras || (this.extras = new ze()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new ze()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new ze()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new ze()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new dh({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new ze()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.InputShape;
  }
  /**
    * Apply part trim
    */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = U({ v: e }), this.trim) {
        for (const s in this.trim)
          this.trim[s] = e;
        i === "linear" && (this.trim.w1 = 0, this.trim.w2 = 0);
      } else
        this.trim = {
          l1: e,
          l2: e,
          w1: i !== "linear" ? e : 0,
          w2: i !== "linear" ? e : 0
        };
  }
  /**
   * Validate shape data
   * Overrides parent implementation to add shape-specific validation
   */
  validate(e = {}) {
    if (this.isNew && !e?.fields)
      return this.issues;
    if (e?.fields && Array.isArray(e.fields)) {
      const l = e.fields;
      for (let p = this.issues.length - 1; p >= 0; p--)
        this.issues[p].field.some((g) => l.includes(g[0])) && this.issues.splice(p, 1);
      for (let p = this.warnings.length - 1; p >= 0; p--)
        this.warnings[p].field.some((g) => l.includes(g[0])) && this.warnings.splice(p, 1);
      const c = e.fields.reduce((p, g) => (p[g] = !0, p), {}), f = rs.pick(c).safeParse(this.toData());
      if (!f.success) {
        const p = Ji(f.error);
        this.issues.push(...p);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = rs.safeParse(this.toData());
      if (!l.success) {
        const c = Ji(l.error);
        this.issues.push(...c);
      }
    }
    if (e.skipBusinessValidation)
      return this.issues;
    if (this.isNew && e.fields)
      return this.issues;
    const {
      inputStockList: i = [],
      index: s = null,
      useInventory: n = !1,
      fields: a = null
    } = e, o = (l) => !a || a.includes(l);
    o("l") && lt.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("w") && lt.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("t") && lt.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), o("q") && lt.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("trim") && lt.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, o("customData") && lt.customData({
      item: this,
      index: s ?? this.index
    });
    const r = [];
    this.issues.forEach((l, c) => {
      l || r.push(c);
    });
    for (let l = r.length - 1; l >= 0; l--)
      this.issues.splice(r[l], 1);
    return this.issues;
  }
  /**
   * Convert to Shape instance
   */
  toShape(e) {
    const i = Qa(
      this.toData(),
      Qf,
      e
    );
    return new vn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          rl.map((i) => [i, !1])
        );
        break;
    }
  }
}
const Mh = E({
  // Internal-only fields (not exposed in API)
  fitsAll: L().default(!1),
  fitsAny: L().default(!1),
  largestShape: be().nullable(),
  smallestShape: be().nullable(),
  // API-exposed fields
  areaEfficiency: d().default(0),
  finishArea: d().default(0),
  bandingLength: d().default(0),
  partArea: d().default(0),
  totalParts: d().default(0),
  stackedNumberOfCuts: d().default(0),
  numberOfCuts: d().default(0),
  stackedCutLength: d().default(0),
  cutLength: d().default(0),
  rollLength: d().default(0)
}), Bh = E({
  stock: ve("Stock", { nullable: !0 }).optional(),
  number: d().int().min(1).optional()
}), va = E({
  ...pn.shape,
  ...Lr.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: d().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: d().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: Mh.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: L().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: h().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: ve("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: be().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: Bh.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: L().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: pe(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: L().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: L().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: h().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: $r.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: d().positive().optional().describe("Weight in kg"),
  imageUrl: h().url().optional().describe("Image URL for stock display")
}), ul = {
  // Include all Container computed properties
  ...gn,
  // Check if stock is stacked (is a child) - these get filtered from API
  isStacked: {
    compute: (t) => !!t.stack?.stock,
    metadata: {
      cache: !1,
      dependencies: ["stack"],
      returnType: "boolean"
    }
  },
  // Check if stock has stacks (is a parent with children)
  hasStack: {
    compute: (t) => !!t.stack?.number && t.stack.number > 1,
    metadata: {
      cache: !1,
      dependencies: ["stack"],
      returnType: "boolean"
    }
  }
};
va.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(ul)
}));
class nn extends bn {
  static schema = va;
  static computedProperties = ul;
  static defaults = va.parse({});
  constructor(e = {}) {
    const i = nn.preprocessData(e);
    super(i), (this.x === null || this.x === void 0) && (this.x = 0), (this.y === null || this.y === void 0) && (this.y = 0), this.stack || (this.stack = { number: 1 }), e.skipValidation || this.validateStock(e);
  }
  /**
    * Preprocess stock data before initialization
    */
  static preprocessData(e) {
    const i = { ...e };
    return i.autoAdd && !i.q && (i.q = 1), i.type === "roll" && (i.preventAutoRotation = !0), i;
  }
  /**
    * Get entity type
    */
  getType() {
    return ne.Stock;
  }
  /**
    * Validate stock-specific properties
    */
  validateStock(e) {
    if (e.skipValidation) {
      this.issues = [];
      return;
    }
    const i = [];
    if (!e.autoAdd) {
      const n = lt.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = lt.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new nn(i);
    return e.shapes && (s.shapes = e.shapes), s;
  }
  /**
    * Reset stock to initial state
    */
  reset() {
    this.used = !1, this.stack = { number: 1 }, this.score = null, this.rootSegment = null, this.tidy = !1, this.analysis = void 0, this.duplicatePattern = "", this.shapes = [], this.winningStrategy = void 0, this.unusable = void 0;
  }
  /**
    * Reset optimization strategies
    */
  resetStrategies() {
    this.algoBenchmark = void 0, this.winningStrategy = void 0, this.score = null;
  }
  /**
    * Increment stack
    */
  incrementStack(e = 1) {
    this.stack || (this.stack = { number: 1 }), this.stack.number = this.stack.number + e;
  }
  /**
    * Decrement stack
    */
  decrementStack(e = 1) {
    return this.stack || (this.stack = { number: 1 }), this.stack.number < e ? !1 : (this.stack.number = this.stack.number - e, !0);
  }
  /**
   * Override serializeValue to handle circular references in stack.stock
   * Always serializes stack.stock as a reference to avoid infinite recursion
   */
  // serializeValue removed - AutoSerializable handles all serialization automatically via schema behaviors
  /**
    * Check if stock can fit all shapes
    */
  canFitAllShapes(e) {
    if (!e || e.length === 0) return !0;
    const i = this.area;
    return e.reduce((n, a) => {
      const o = a.l * a.w * (a.q || 1);
      return n + o;
    }, 0) > i * (this?.stack?.number ?? 1) ? !1 : this.analysis?.fitsAll ?? !1;
  }
  /**
    * Check if stock can fit any shape
    */
  canFitAnyShape(e) {
    return !e || e.length === 0 ? !1 : e.some((i) => this.canFitShape(i));
  }
  /**
    * Analyze stock against shapes
    */
  analyzeStock(e) {
    const i = {
      fitsAll: !1,
      fitsAny: !1,
      largestShape: null,
      smallestShape: null,
      areaEfficiency: 0,
      finishArea: 0,
      bandingLength: 0,
      partArea: 0,
      totalParts: 0,
      stackedNumberOfCuts: 0,
      numberOfCuts: 0,
      stackedCutLength: 0,
      cutLength: 0,
      rollLength: 0
    };
    if (!e || e.length === 0)
      return this.analysis = i, i;
    const s = [...e].sort((n, a) => {
      const o = n.l * n.w;
      return a.l * a.w - o;
    });
    return i.largestShape = s[0], i.smallestShape = s[s.length - 1], i.fitsAny = this.canFitAnyShape(e), i.fitsAll = this.canFitAllShapes(e), this.analysis = i, i;
  }
  /**
    * Mark stock as used
    */
  markUsed() {
    this.used = !0;
  }
  /**
    * Mark stock as unused
    */
  markUnused() {
    this.used = !1;
  }
  /**
     * Clone the shape
     */
  /**
   * Clone this stock with a new version number
   * Stock preserves most properties when cloning
   * Only resets placement/optimization state
   */
  clone(e = null, i = {}) {
    return super.clone(e, i);
  }
  // Clone behaviors now defined in Stock.zod.ts schema
  // No need for getCloneResetProperties() method
  // The base class properly returns 'this' type for polymorphic cloning
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   * This is cleaner than maintaining a long inclusion list
   */
  static serializationExcludedProperties = [
    "rootSegment"
    // May contain circular references during optimization
  ];
  getCroppedLength(e = [], i = 0) {
    if (!e?.length) return;
    const s = af(e.filter((a) => a.added && a.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ae.equalTo(n, this.l) ? n : n + i;
  }
}
class rS extends nl {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Pi;
  static computedProperties = Zf;
  // UI helper properties (extends parent)
  warningKeys = ["q"];
  issueKeys = ["l", "w", "t", "trim"];
  // Note: isNew flag now comes from schema (inputUIStateSchema)
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      grain: e.grain ? e.grain.toLowerCase() : ""
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.InputStock;
  }
  // isSquare is now a computed property inherited from InputRectangle
  /**
   * Validate stock data
   * Overrides parent implementation to add stock-specific validation
   */
  validate(e, i) {
    let s = null, n = null;
    if (e && typeof e == "object" && !("skipSchemaValidation" in e) ? (s = e, n = i || null, e = {}) : (s = e?.saw || null, n = e?.index || null), this.isNew && !e?.fields)
      return this.issues;
    if (e?.fields && Array.isArray(e.fields)) {
      const c = e.fields;
      for (let p = this.issues.length - 1; p >= 0; p--)
        this.issues[p].field.some((x) => c.includes(x[0])) && this.issues.splice(p, 1);
      for (let p = this.warnings.length - 1; p >= 0; p--)
        this.warnings[p].field.some((x) => c.includes(x[0])) && this.warnings.splice(p, 1);
      const u = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", u);
      const f = e.fields.reduce((p, g) => (p[g] = !0, p), {});
      try {
        const p = Pi.pick(f);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(f));
        const g = p.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", g.success ? "SUCCESS" : "FAILED"), g.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", g.error.issues);
          const x = Ji(g.error);
          this.issues = [...this.issues, ...x];
        }
      } catch (p) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, p);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Pi.safeParse(this.toData());
      if (!c.success) {
        const u = Ji(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, o = (c) => !a || a.includes(c);
    ["l", "w", "t"].forEach((c) => {
      o(c) && lt[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), o("grain") && lt.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("trim") && lt.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("q") && lt.q({
      item: this,
      index: n ?? this.index,
      isWarning: !0,
      category: ["stock"]
    });
    const l = [];
    this.issues.forEach((c, u) => {
      c || l.push(u);
    });
    for (let c = l.length - 1; c >= 0; c--)
      this.issues.splice(l[c], 1);
    return this.issues;
  }
  // isValid is now provided as a computed property from the validation schema
  // Update method inherited from SchemaClass - no override needed
  // toData() is now inherited from AutoSerializable with correct return type InputStockProperties
  /**
   * Convert to Stock instance
   */
  toStock(e, i) {
    const s = this.toData(), n = i?.stockType || this.saw?.stockType;
    s.trim && n && (n === "linear" ? (s.trim.w1 = 0, s.trim.w2 = 0) : n === "roll" && (s.trim.l2 = 0, s.trim.w1 = 0, s.trim.w2 = 0));
    const a = Qa(
      s,
      eh,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new nn(a);
  }
  changeType(e) {
    switch (e !== "sheet" && (this.grain = ""), e) {
      case "linear":
        this.trim.w1 = 0, this.trim.w2 = 0;
        break;
      case "roll":
        this.trim.l1 = 0, this.trim.l2 = 0, this.trim.w1 = 0, this.trim.w2 = 0, this.t = null;
        break;
    }
  }
}
class lS extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ja;
  static computedProperties = Xf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    const i = {
      ...e,
      shapes: e.shapes?.map(String) ?? []
    };
    if (super(i), this.validateInputUserGroup(i), e.shapeList?.length) {
      const s = this.validateWithShapes(e.shapeList);
      this.issues.push(...s.filter((n) => !this.issues.find((a) => a.message === n.message)));
    }
  }
  /**
    * Get entity type
    */
  getType() {
    return ne.Group;
  }
  /**
   * Clear all validation issues and warnings
   */
  clearValidation() {
    this.issues = [], this.warnings = [];
  }
  /**
   * Add a validation issue
   */
  addIssue(e) {
    e.type === "warning" ? this.warnings.push(e) : this.issues.push(e);
  }
  /**
    * Validate input (sync version - basic validation only)
    */
  validateInputUserGroup(e) {
    if ("skipValidation" in e && e.skipValidation) {
      this.clearValidation();
      return;
    }
    this.clearValidation(), e.q !== void 0 && lt.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = lt.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = lt.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const o = this.joinDimension, r = lt.groupDimensions({
      item: this,
      index: 0,
      shapes: s,
      joinDirection: o
    });
    return i.push(...r), i;
  }
  /**
    * Find shapes from shape list
    */
  findShapes(e) {
    if (this.shapeIds?.length && e.length) {
      const s = [];
      for (const n of this.shapeIds) {
        const a = e.find((o) => !!(o.autoId === n || xe(o) && o.autoId === n || "id" in o && o.id === n));
        a && (xe(a) || Qe(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ie({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((a) => !!(a.autoId === s || String(a.autoId) === String(s) || "id" in a && (a.id === s || String(a.id) === String(s)) || xe(a) && (a.autoId === s || String(a.autoId) === String(s))));
      n && (xe(n) || Qe(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || xe(n) && n.autoId === i);
      return s ? (e.indexOf(s) + 1).toString() : null;
    }).filter((i) => i !== null));
  }
  /**
    * Create runtime Group from this user input
    * @param groupParentID - Parent ID for the group (optional, for compatibility)
    * @param groupIndex - Index for the group (optional, for compatibility)
    * @param shapeList - List of shapes to create group from
    * @param stock - Optional stock reference for spacing calculations
    */
  toGroup(e, i, s, n) {
    if (Array.isArray(e) && (s = e, e = void 0, n = void 0), s) {
      const p = s.filter((x) => xe(x) || Qe(x)), g = this.validateWithShapes(p);
      if (g.filter((x) => x.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const o = a.map((p) => xe(p) ? p.toShape() : p), r = o[0];
    o.forEach((p) => {
      if (s && Array.isArray(s)) {
        const g = s.findIndex((x) => "group" in x && x.group?.inUserGroup ? !1 : "parentId" in x && "parentId" in p && x.parentId === p.parentId || "id" in x && "id" in p && x.id === p.id);
        g !== -1 && s.splice(g, 1);
      }
      if ("setRotationToOrientationLockWithoutContainer" in p && typeof p.setRotationToOrientationLockWithoutContainer == "function")
        p.setRotationToOrientationLockWithoutContainer();
      else if ("orientationLock" in p && p.orientationLock) {
        const g = p.orientationLock;
        try {
          g === "l" && "rot" in p ? p.rot = 0 : g === "w" && "rot" in p && (p.rot = 1);
        } catch {
        }
      }
      "group" in p && p.group && (p.group.inUserGroup = !0);
    });
    let l = 0, c = 0;
    this.direction === "horizontal" ? (c = r.w, o.forEach((p) => l += p.l)) : (l = r.l, o.forEach((p) => c += p.w));
    const u = {
      autoId: this.autoId,
      // Use the same autoId as the InputUserGroup
      shapes: o,
      direction: this.direction,
      // Already 'horizontal' or 'vertical'
      l,
      w: c,
      t: r?.t,
      material: r?.material,
      orientationLock: c > l ? "w" : "l",
      // Set based on which dimension is longer
      type: "user",
      q: 1,
      // Groups always have q=1
      preventAutoRotation: !0,
      container: n,
      skipValidation: !0
      // Already validated
    }, f = new wn(u);
    return n && "updateShapeSpacing" in f && typeof f.updateShapeSpacing == "function" && f.updateShapeSpacing(n), f;
  }
  /**
    * Convert to plain data object
    */
  toData() {
    const e = super.toData();
    if ("__entityType" in e) {
      const { __entityType: i, ...s } = e;
      return s;
    }
    return e;
  }
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), this.validateInputUserGroup(e);
  }
  /**
    * Get validation issues
    */
  validate() {
    return this.issues;
  }
  get joinDimension() {
    return this.direction === "horizontal" ? "w" : "l";
  }
  get excludedFields() {
    return ["proximity"];
  }
  get compressExcludedFields() {
    return ["issues", "stockMatch"];
  }
}
const js = E({
  min: ue([h(), d()]).optional(),
  max: ue([h(), d()]).optional()
});
he(h(), js);
E({
  holes: he(h(), js),
  hingeHoles: he(h(), js),
  corners: he(h(), js)
});
E({
  numberFormat: be().optional(),
  // NumberFormat type
  decimalPlaces: d().optional(),
  fractionRoundTo: d().optional(),
  faces: E({
    enabled: L()
  }).optional(),
  holes: E({
    enabled: L(),
    defaultDiameter: d().optional(),
    diameters: ee(d()).optional(),
    minDiameter: d().optional(),
    maxDiameter: d().optional(),
    enableDepth: L().optional(),
    depths: ee(d()).optional(),
    defaultDepth: d().optional(),
    minDepth: d().optional(),
    maxDepth: d().optional()
  }).optional(),
  hingeHoles: E({
    enabled: L(),
    minimumHoleDistance: d().optional(),
    defaultDistanceFromEdge: d().optional(),
    defaultOuterSpacing: d().optional(),
    defaultHingeLength: d().optional()
  }).optional(),
  shelfHoles: E({
    enabled: L(),
    diameters: ee(d()).optional(),
    depths: ee(d()).optional()
  }).optional(),
  corners: E({
    enabled: L(),
    minValue: d().optional(),
    maxValue: d().optional(),
    types: ee(pe(["bevel", "radius"])).optional(),
    enableBanding: L().optional()
  }).optional(),
  banding: E({
    enabled: L(),
    labels: ee(h()).optional(),
    options: be().optional(),
    // ExtrasOptions
    pricing: he(h(), d()).optional(),
    enableCorners: L().optional(),
    enableTypes: L().optional(),
    types: ee(h()).optional()
  }).optional()
});
const jh = E({
  id: h(),
  x: d(),
  y: d(),
  diameter: d(),
  depth: d(),
  face: ue([fe(0), fe(1)]),
  type: h().nullable().optional(),
  valid: L().optional()
}), Nh = E({
  id: h(),
  position: d(),
  side: pe(cl),
  face: ue([fe(0), fe(1)]),
  numHoles: d(),
  diameter: d(),
  depth: d(),
  hingeLength: d(),
  distanceFromEdge: d(),
  outerSpacing: d(),
  minimumHoleDistance: d().optional(),
  positionLimit: d().optional(),
  valid: L().optional()
}), Vh = E({
  type: pe(ll).nullable(),
  size: d(),
  valid: L().optional()
});
E({
  holes: ee(jh).optional(),
  hingeHoles: ee(Nh).optional(),
  corners: he(h(), Vh).optional()
});
E({});
const Gh = ["l", "w"], qh = ms.extend({
  // Identity - offcuts need IDs for tracking and export
  id: h().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: L().default(!1),
  flex: pe(Gh).optional(),
  // Cost is calculated, not set
  cost: d().min(0).nullable().default(0)
}), zh = {
  ...bs,
  // Include parent computed properties
  // Check if offcut has been added
  hasBeenAdded: {
    compute: (t) => t.added === !0,
    metadata: {
      cache: !1,
      dependencies: [],
      // added is inherited from Placeable
      returnType: "boolean"
    }
  },
  // Get flex direction (alias for flex property)
  flexDirection: {
    compute: (t) => t.flex,
    metadata: {
      cache: !1,
      dependencies: ["flex"],
      returnType: "string | undefined"
    }
  },
  // Calculate utilization percentage
  utilization: {
    compute: (t) => t.added ? 100 : t.addToInventory ? 50 : 0,
    metadata: {
      cache: !1,
      dependencies: ["addToInventory"],
      // added is inherited from Placeable
      returnType: "number"
    }
  }
};
class dl extends Ha {
  // Required: Define schema and computed properties for SchemaClass
  static schema = qh;
  static computedProperties = zh;
  constructor(e = {}) {
    const i = { ...e, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return ne.Offcut;
  }
  /**
    * Validate offcut asynchronously
    */
  // validateAsync with custom data parameter removed - not compatible with base class
  // If you need to validate external data, create a separate static method
  // Using base class implementation which will:
  // 1. Use offcutSchema to validate properties
  // 2. Map errors to Issue objects properly
  // 3. Store issues and warnings
  // 4. Return Issue[] array
  /**
    * Set flex direction
    */
  setFlexDirection(e) {
    if (e && !["l", "w", void 0].includes(e))
      throw new Error('Invalid flex direction. Must be "l", "w", or undefined');
    this.flex = e;
  }
  /**
    * Mark offcut as added to inventory
    */
  markAddedToInventory() {
    this.addToInventory = !0, this.added = !0;
  }
  /**
    * Mark offcut as not added to inventory
    */
  markNotAddedToInventory() {
    this.addToInventory = !1, this.added = !1;
  }
  /**
    * Check if offcut should be added to inventory
    */
  shouldAddToInventory() {
    return this.addToInventory;
  }
  /**
    * Calculate cost based on area and material cost
    */
  calculateCost(e) {
    const i = this.l * this.w;
    return this.cost = i * e, this.cost;
  }
  /**
    * Check if offcut is useful (based on size)
    */
  isUseful(e = 100) {
    return this.l * this.w >= e;
  }
  /**
    * Clone the offcut
    */
  // clone() method removed - using base class implementation
  // The base AutoSerializable.clone() will:
  // 1. Call toData() to get serialized properties
  // 2. Apply any clone-specific overrides
  // 3. Create new instance with the same constructor
  // 4. Return as 'this' type for polymorphic cloning
  /**
    * Update properties from data
    */
  update(e) {
    super.update(e), this.offcut = !0;
  }
  /**
    * Create offcut from shape remainder
    */
  static fromRemainder(e) {
    return new dl({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
const Wh = E({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: ue([
    tu(h(), ve("Point")),
    he(h(), ve("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), Hh = {
  // Get the number of points in the collection
  size: {
    compute: (t) => t.points instanceof Map ? t.points.size : Object.keys(t.points || {}).length,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "number"
    }
  },
  // Check if the collection is empty
  isEmpty: {
    compute: (t) => t.points instanceof Map ? t.points.size === 0 : Object.keys(t.points || {}).length === 0,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "boolean"
    }
  }
};
class ni extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Wh;
  static computedProperties = Hh;
  /**
   * Leave serializationProperties empty to trigger automatic enumeration
   * We use serializationExcludedProperties for exclusion-based approach
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   */
  static serializationExcludedProperties = [
    // All private fields (starting with _) are automatically excluded by AutoSerializable
  ];
  constructor(e = {}) {
    super(e), this.points instanceof Map || (this.points = new Map(Object.entries(this.points || {})));
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.PointCollection;
  }
  /**
   * Add a point to the collection
   */
  add(e, i) {
    if (this.contains(e)) {
      const n = this.getPoint(e);
      n.type === "group" && !i && (n.type = void 0);
      return;
    }
    e.validate(), i && (e.type = i);
    const s = this.createKey(e);
    this.points.set(s, e);
  }
  /**
   * Add multiple points to the collection
   */
  addPoints(e, i) {
    for (const s of e) {
      if (!s) return;
      s.validate(), this.add(s, i);
    }
  }
  /**
   * Get a point by coordinates
   */
  get(e, i) {
    const s = `${e},${i}`;
    return this.points.get(s);
  }
  /**
   * Check if a point exists
   */
  has(e, i) {
    const s = `${e},${i}`;
    return this.points.has(s);
  }
  /**
   * Remove a point
   */
  remove(e, i) {
    const s = `${e},${i}`;
    return this.points.delete(s);
  }
  /**
   * Clear all points
   */
  clear() {
    this.points.clear();
  }
  /**
   * Get all points as array
   */
  toArray() {
    return Array.from(this.points.values());
  }
  /**
   * Iterate over points
   */
  forEach(e) {
    this.points.forEach(e);
  }
  /**
   * Create from array of points
   */
  static fromArray(e) {
    const i = new ni();
    return e.forEach((s) => i.add(s)), i;
  }
  /**
   * Add multiple points at once
   */
  addMultiple(e) {
    e.forEach((i) => this.add(i));
  }
  /**
   * Alias for addMultiple
   */
  adds(e) {
    this.addMultiple(e);
  }
  /**
   * Create a key from a point
   */
  createKey(e) {
    return `${e.x},${e.y}`;
  }
  /**
   * Get a point by Point object
   */
  getPoint(e) {
    return this.points.get(this.createKey(e));
  }
  /**
   * Check if a point exists by Point object
   */
  contains(e) {
    return this.points.has(this.createKey(e));
  }
  /**
   * Delete a point by Point object
   */
  deletePoint(e) {
    e.validate(), this.points.delete(this.createKey(e));
  }
  /**
   * Delete multiple points
   */
  deletePoints(e) {
    for (const i of e)
      i.validate(), this.deletePoint(i);
  }
}
const fl = ["root", "firstShape", "near", "far", ""], Uh = pn.extend({
  // Cutting information
  cuts: Fe("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: ve("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: d().int().min(0).nullable().default(null),
  cutDirection: pe(Va).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: L().default(!1),
  firstShape: ve("Shape"),
  children: Fe("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: ve("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: pe(fl).nullable().default(null),
  placementOrder: d().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: L().default(!1),
  hasHeadCut: L().default(!1),
  isInitial: L().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: L().default(!1),
  // Visualization flags
  completed: L().optional(),
  rowSegment: L().optional()
});
E({
  x: d().optional(),
  y: d().optional(),
  l: d().optional(),
  w: d().optional(),
  type: pe(fl),
  parent: be(),
  // Segment instance
  stock: be(),
  // Stock instance
  offcut: L().optional(),
  merged: L().optional(),
  cutDirection: pe(Va).nullable().optional()
});
const Yh = {
  ...gn,
  // Include parent computed properties
  root: {
    compute: (t) => {
      let e = t;
      for (; e.parent; )
        e = e.parent;
      return e;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "any"
    }
  },
  depth: {
    compute: (t) => {
      let e = 0, i = t.parent;
      for (; i; )
        e++, i = i.parent;
      return e;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "number"
    }
  }
};
class cS extends bn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Uh;
  static computedProperties = Yh;
  // Note: children is defined in the schema as zRefArray<Segment>
  // No need for getter/setter or backing field - SchemaClass handles it automatically
  constructor(e = {}) {
    const i = { ...e };
    if (i.preventAutoRotation = !0, i.skipValidation = !0, i.parent && i.autoId && i.parent.autoId === i.autoId && delete i.autoId, i.children || (i.children = []), Array.isArray(i.children) && i.autoId && (i.children = i.children.filter(
      (s) => s && s.autoId !== i.autoId
    )), super(i), this.parent && this.autoId === this.parent.autoId)
      throw new Error(`Segment cannot have same autoId as parent: ${this.autoId}`);
    if (this.parent) {
      if (this.type === "firstShape")
        return;
      if (Array.isArray(this.parent.children) || (this.parent.children = []), this.parent.autoId === this.autoId) {
        this.parent = null;
        return;
      }
      if (!this.parent.children.some((n) => n.autoId === this.autoId)) {
        if (this.parent === this) {
          this.parent = null;
          return;
        }
        const n = [...this.parent.children, this];
        this.parent.children = n;
      }
    }
  }
  /**
   * Get entity type
   */
  getType() {
    return ne.Segment;
  }
  /**
   * Use automatic enumeration for serialization
   * All schema-defined fields (including children) are serialized automatically
   */
  static serializationProperties = [];
  /**
   * Fields to exclude from serialization
   * This is cleaner than maintaining a long inclusion list
   */
  static serializationExcludedProperties = [
    "_children"
    // Private backing field for children
    // Note: parent, children are NOT excluded here
    // They are handled specially in serializeValue() to convert to references
  ];
  // Compression exclusions now defined in schema using .behavior()
  /**
   * Get compression-specific overrides
   * Handle parent exclusion in compressed serialization
   */
  getCompressionOverrides() {
    return {
      parent: null
      // Always exclude parent in compression to avoid circular refs
    };
  }
  reset(e = []) {
    if (this.stock && (this.stock.used = !1), this.children && this.children.length > 0)
      for (const i of this.children)
        i && i.parent === this && (i.parent = null);
    this.shapes = e, this.children = [], this.parent = null, this.cuts = [], this.phase = null;
  }
  /**
   * Clear all children and their parent references
   */
  clearChildren() {
    if (this.children && this.children.length > 0) {
      for (const e of this.children)
        e && e.parent === this && (e.parent = null);
      this.children = [];
    }
  }
  /**
   * Add segment to stock (when used as an offcut)
   * Similar to Placeable.addToStock but for segments
   */
  addToStock(e) {
    this.stock = e;
  }
  /**
   * Check if this segment is a descendant of another segment
   */
  isDescendantOf(e) {
    let i = this.parent;
    const s = /* @__PURE__ */ new Set();
    for (; i; ) {
      if (i.autoId === e.autoId)
        return !0;
      if (s.has(i.autoId))
        return console.warn(`[INFINITE LOOP] Parent chain has a loop at segment ${i.autoId}`), !1;
      s.add(i.autoId), i = i.parent;
    }
    return !1;
  }
  /**
   * Add child segment (mainly for changing parents after creation)
   * Note: Most parent-child relationships are now established automatically in the constructor
   */
  addChild(e) {
    if (this.autoId === e.autoId)
      throw console.error(`[SELF-REFERENCE ATTEMPT] Trying to add segment ${this.autoId} as its own child!`), console.error(new Error().stack), new Error(`[SELF-REFERENCE] Cannot add segment ${this.autoId} as its own child`);
    if (this === e)
      throw console.error(`[SELF-REFERENCE OBJECT] Same object reference! Segment ${this.autoId}`), console.error(new Error().stack), new Error("[SELF-REFERENCE] Cannot add segment to itself");
    if (!(e.parent && e.parent.autoId === this.autoId)) {
      if (this.isDescendantOf(e))
        throw new Error(`Circular reference: parent ${this.autoId} would become a descendant of child ${e.autoId}`);
      if (Array.isArray(this.children) || (this.children = []), e.parent && e.parent !== this) {
        const i = e.parent;
        if (Array.isArray(i.children)) {
          const s = i.children.indexOf(e);
          s !== -1 && i.children.splice(s, 1);
        }
        Pt() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${i.autoId} to ${this.autoId}`);
      }
      this.children.some((i) => i.autoId === e.autoId) || (this.children = [...this.children, e], e.parent = this);
    }
  }
  /**
   * Remove child segment
   */
  removeChild(e) {
    const i = this.children;
    if (Array.isArray(i)) {
      const s = i.indexOf(e);
      s !== -1 && (i.splice(s, 1), e.parent = null);
    }
  }
}
function hl(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function Ns(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function Kh(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function wa(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => wa(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Kh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = wa(i[s], e));
  return i;
}
function pl(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? t : t.map((r) => pl(r, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === ne.Rectangle || s === ne.Placeable || s === ne.Container || s === ne.Shape || s === ne.Group || s === ne.Offcut || s === ne.Stock || s === ne.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = gs();
  if (n && a.has(n)) {
    const o = a.get(n), { __ref: r, __entityType: l, __context: c, ...u } = t, f = new o(u);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((p) => p instanceof ie ? p : ie.fromData(p, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((p) => p instanceof ie ? p : ie.fromData(p, f))), f;
  }
  return delete t.__context, t;
}
function Si(t, e) {
  if (e || (e = hl()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const o = Si(a, e);
      n.push(o), o && typeof o == "object" && (o.autoId || o.id) && Ns(e, [o]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && Ns(e, [t]), t;
  const i = wa(t, e), s = pl(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && Ns(e, [s]), s;
}
function uS(t, e) {
  const i = hl(e), s = t?.saw ? Si(t.saw, i) : void 0;
  s && Ns(i, [s]);
  const n = t?.stockList ? Si(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const a = t?.shapeList ? Si(t.shapeList, i) : [];
  a.length > 0 && (i.shapeList = a);
  const o = t?.cutList ? Si(t.cutList, i) : [], r = t?.segmentList ? Si(t.segmentList, i) : [];
  r.length > 0 && (i.segmentList = r);
  const l = t?.offcuts ? Si(t.offcuts, i) : [];
  return {
    saw: s,
    stockList: n,
    shapeList: a,
    cutList: o,
    segmentList: r,
    offcuts: l,
    context: i
  };
}
function dS(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => Zh(n, e, i)).filter((n) => Ye(n)) : [] : [];
}
function Zh(t, e, i) {
  if (t.type === "user") {
    const n = e.find((a) => a.id === t.id);
    n && (e = n.shapes);
  }
  t.container = i;
  let s = [];
  t.shapes && (s = t.shapes.map((n) => {
    if (n && n.__ref && (n.autoId || n.id)) {
      const a = n.autoId || n.id;
      return e.find((o) => o.autoId === a || o.id === a);
    }
    return n && n.id ? e.find((a) => a.id === n.id) : n;
  }).filter(Boolean)), t.shapes = s;
  try {
    const n = gs(), a = n.get("Group") || n.get(ne.Group);
    if (a) {
      const o = new a(t);
      return o.shapes && Array.isArray(o.shapes) && o.shapes.forEach((r) => {
        r && typeof r == "object" && r.group && (r.group.reference = o, r.group.inGroup = !0, o.added && (r.group.addedAsGroup = o.id || o.autoId));
      }), o;
    }
    return !1;
  } catch {
    return !1;
  }
}
function fS(t, e) {
  Pt() && (t.stocks && t.stocks.forEach((i, s) => {
    Et(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !Qe(i) && !Ye(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    qi(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    Ye(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    Vt(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
pt.colors = [
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
const Gi = pt("logs"), Sa = pt("cuts"), an = pt("groups"), on = pt("guillotine"), xa = pt("results"), ka = pt("scoring"), Ia = pt("firstShapes"), Pa = pt("calculations"), Ca = pt("subset"), Ta = pt("secondRun"), Aa = pt("stack"), rn = pt("errors"), Oa = pt("allStock"), ln = pt("reset");
rn.color = 1;
an.color = 14;
on.color = 159;
ln.color = 11;
function Xh(t = "info", e, i) {
  const s = e.map((o) => {
    const r = { ...o };
    for (const l in r)
      typeof r[l] == "string" && r[l].length > 30 && (r[l] = r[l].slice(0, 50) + "...");
    return r;
  }), n = console.table;
  let a = "";
  switch (console.table = (o, r) => {
    const l = console.log;
    console.log = (c) => {
      a += c + `
`;
    }, n(o, r), console.log = l;
  }, console.table(s, i), t) {
    case "info":
      Gi(a);
      break;
    case "guillotine":
      on(a);
      break;
    case "results":
      xa(a);
      break;
    case "secondRun":
      Ta(a);
      break;
    case "cuts":
      Sa(a);
      break;
    case "scoring":
      ka(a);
      break;
    case "calculations":
      Pa(a);
      break;
    case "stack":
      Aa(a);
      break;
    case "subset":
      Ca(a);
      break;
    case "errors":
      rn(a);
      break;
    case "allStock":
      Oa(a);
      break;
    case "firstShapes":
      Ia(a);
      break;
    case "groups":
      an(a);
      break;
    case "reset":
      ln(a);
      break;
    default:
      Gi(a);
  }
  console.table = n;
}
const Jh = "\x1B[31m", Qh = "\x1B[0m", Jt = (t = "info", e, i = null, s = null, n = !1) => {
  if (n) {
    switch (t) {
      case "info":
        Gi(e);
        break;
      case "guillotine":
        on(e);
        break;
      case "results":
        xa(e);
        break;
      case "secondRun":
        Ta(e);
        break;
      case "cuts":
        Sa(e);
        break;
      case "scoring":
        ka(e);
        break;
      case "calculations":
        Pa(e);
        break;
      case "stack":
        Aa(e);
        break;
      case "subset":
        Ca(e);
        break;
      case "errors":
        rn(`${Jh}${e}${Qh}`);
        break;
      case "allStock":
        Oa(e);
        break;
      case "firstShapes":
        Ia(e);
        break;
      case "groups":
        an(e);
        break;
      case "reset":
        ln(e);
        break;
      default:
        Gi(e);
    }
    if (i)
      switch (t) {
        case "info":
          Gi(i);
          break;
        case "guillotine":
          on(i);
          break;
        case "results":
          xa(i);
          break;
        case "secondRun":
          Ta(i);
          break;
        case "cuts":
          Sa(i);
          break;
        case "scoring":
          ka(i);
          break;
        case "calculations":
          Pa(i);
          break;
        case "stack":
          Aa(i);
          break;
        case "subset":
          Ca(i);
          break;
        case "errors":
          rn(i);
          break;
        case "allStock":
          Oa(i);
          break;
        case "firstShapes":
          Ia(i);
          break;
        case "groups":
          an(i);
          break;
        case "reset":
          ln(i);
          break;
        default:
          Gi(i);
      }
    s && Xh(t, s);
  }
};
function hS(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((a) => a.added);
  for (const a of i) {
    let o = !1, r = !1;
    if (t.dimension === "l" ? (o = ae.greaterThan(t.x2, a.x) && ae.lessThan(t.x1, a.x + a.l), r = ae.greaterThan(t.y1 + n, a.y) && ae.lessThan(t.y1 - n, a.y + a.w)) : t.dimension === "w" && (o = ae.greaterThan(t.x1 + n, a.x) && ae.lessThan(t.x1 - n, a.x + a.l), r = ae.greaterThan(t.y2, a.y) && ae.lessThan(t.y1, a.y + a.w)), o && r)
      if (s) t.shapeCollisions.push(a);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function di(t, e, i, s, n = null, a = null) {
  return new xi({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function ep(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = di(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = di(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = di(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = di(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = di(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = di(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = di(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = di(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function $a(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      tp(
        s,
        e
      );
    }
}
function tp(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!rt(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !rt(
      t,
      1,
      e
    ))
      throw new Error(
        "could not rotate shape correctly for subset calculation"
      );
  }
}
function pS(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), $a(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let o = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (o = 1), i === "l" ? e.sort(
    Wt.LD
  ) : e.sort(
    Wt.WD
  ), s || (s = e[0]);
  function r(u, f = !0) {
    f && Wt.shuffle(
      e
    );
    const p = Fa(
      n,
      e,
      t.getStock,
      i,
      t[i],
      !1,
      s
    );
    p !== !1 && u.push(
      p
    );
  }
  r(
    a,
    !1
  );
  for (let u = o; u--; ) r(
    a
  );
  if (a.sort(
    (u, f) => f.score.efficiency - u.score.efficiency
  ), !a.length) return !1;
  const l = a[0];
  let c = null;
  return l.totalLength + n < t.l && (c = t.l - (l.totalLength + n), l.offcut = c), l;
}
function ip(t, e, i, s = "l", n, a = !1, o = this.config.subset.shuffles, r = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (x, R) => R[s] - x[s],
    // Largest first
    (x, R) => x[s] - R[s],
    // Smallest first
    (x, R) => R[s] / R.area - x[s] / x.area,
    // Best dimension-to-area ratio
    (x, R) => R.area - x.area,
    // Largest area first
    (x, R) => x.area - R.area
    // Smallest area first
  ], f = e.every(
    (x, R, D) => R === 0 || x.isIdentical(D[R - 1])
  );
  if (!a) {
    const x = e.reduce((R, D) => R + D[s] + t, 0) - t;
    if (x <= n)
      return x / n > l ? {
        totalLength: x,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: x / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((R, D) => R + D.area, 0)
      } : !1;
  }
  const p = Fa(t, e, i, s, n, a, r);
  if (p !== !1 && (c.push(p), p.score.efficiency > 0.95 && e.length > 10))
    return p;
  if (f)
    return c[0] || !1;
  const g = Math.min(o, u.length);
  for (let x = 0; x < g; x++) {
    const R = [...e];
    R.sort(u[x % u.length]);
    const D = Fa(t, R, i, s, n, a, r);
    if (D !== !1 && (c.push(D), D.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((x, R) => R.score.efficiency - x.score.efficiency), c[0] || !1;
}
function Fa(t, e, i, s = "l", n, a = !1, o = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let r = 0;
  const l = [];
  if (o || (o = e[0]), l.push(o), r = o[s], r > n) return !1;
  const c = e.findIndex(
    (u) => u.id === o?.id
  );
  c > -1 && e.splice(c, 1);
  for (const u of e) {
    const f = u[s], p = u.getMinSpacing(
      i.saw,
      !0
    );
    if (!(r + t + p + f > n) && (r += t + p + f, l.push(u), r + t + p >= n))
      break;
  }
  if (o && e.splice(
    c,
    0,
    o
  ), !a && r <= n || a && r + t >= n && r <= n) {
    const u = r / n;
    return u > 1 && console.error(
      "subset created effieciency > 1"
    ), {
      type: "subset",
      totalLength: r,
      shapes: l,
      stock: i,
      cutType: "guillotine",
      score: { efficiency: u, totalShapesPlaced: l.length },
      firstShape: o,
      firstShapeRotation: o?.rot,
      area: l.reduce(
        (f, p) => f + p.area,
        0
      )
    };
  }
  return !1;
}
function sp(t, e, i = null, s = "l", n = !0, a = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const o = s === "l" ? "x" : "y", r = s === "l" ? "y" : "x";
  let l = 0;
  Ye(i) ? $a(
    t,
    i
  ) : $a(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    Wt.LDIDA
  ) : t.sort(
    Wt.WDIDA
  )), t.forEach(
    (c, u) => {
      c[o] = i ? i[o] + l : l, i && (c[r] = i[r]), l += c[o === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), kt(
        [() => nt(
          l
        ).to.be.a(
          "number"
        )]
      ), Ye(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function gS(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    Wt.ID
  );
  const n = t.shapes;
  return sp(
    n,
    e,
    null,
    s
  ), n;
}
function mS(t, e, i) {
  Jt("subset", `guillotine subset for segment ${t.id}`);
  function s($, S = []) {
    const { shapes: N } = o($);
    return N.filter((_) => {
      if (_.added || S.find((F) => F.id === _.id)) return !1;
      if (_.orientationLock)
        return ae.equalTo(_[f], $) ? ae.lessThanOrEqualTo(_.l, t.l) && ae.lessThanOrEqualTo(_.w, t.w) : !1;
      if (ae.equalTo(_.l, $) || ae.equalTo(_.w, $)) {
        const F = ae.equalTo(_.l, $) ? _.w : _.l;
        return ae.lessThanOrEqualTo(F, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n($, S) {
    for (const N of $)
      if (S !== N[qt(t.getStock.cutPreference)] && rt(
        N,
        N.rot === 1 ? 0 : 1,
        t.getStock
      ) === !1)
        throw new Error(
          "rotateShapesToDimension - could not rotate strip shape correctly"
        );
  }
  function a($, S, N, _ = null) {
    let F = s(
      $,
      S
    );
    if (_) {
      const m = F.find(
        (M) => M.parentId === _.parentId
      );
      if (m) return m;
    }
    if (Pt() && (n(
      F,
      $
    ), kt(
      [
        () => nt(F.every((m) => m.l === $ || m.w === $)).to.be.true
      ]
    )), !F.length) return !1;
    const H = [];
    for (const m of F) {
      const M = m.l === $ ? m.w : m.l;
      N.includes(M) && H.push(m);
    }
    return F = H.length ? H : F, Hr(F);
  }
  function o($) {
    const S = $;
    return P.has(S) || P.set(S, { shapes: [], priorities: [] }), P.get(S);
  }
  function r($ = null) {
    function S(_, F, H) {
      const { shapes: j, priorities: m } = o(F);
      j.includes(_) || (j.push(_), m.push(H));
    }
    if (!x?.length) return P;
    const N = t.getStock;
    for (const _ of x) {
      let F = _.getPriority(N);
      $ && _.parentId !== $.parentId && (F = 0);
      const H = qt(f);
      if (!_.orientationLock)
        _.longSide <= g && _.shortSide <= t[H] && S(_, _.l, F), !_.isSquare && _.shortSide <= g && _.longSide <= t[H] && S(_, _.w, F);
      else {
        const j = _r(
          _,
          t.getStock
        );
        if (kt([() => nt(j.length).to.equal(1)]), rt(
          _,
          j[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const M = qt(f);
        _[f] <= g && _[M] <= t[M] && S(_, _[f], F);
      }
    }
    return P;
  }
  function l() {
    const $ = [], S = Array.from(P.entries()).map(([_, { shapes: F, priorities: H }]) => ({
      dimension: _,
      count: F.length,
      totalPriority: F.length * Math.max(...H, 0)
    }));
    let N = S.reduce((_, { totalPriority: F }) => _ + F, 0);
    for (; S.length > 0; )
      if (N <= 0 || !Number.isFinite(N)) {
        const _ = [];
        S.forEach(({ dimension: F, count: H }) => {
          _.push(...Array(H).fill(F));
        });
        for (let F = _.length - 1; F > 0; F--) {
          const H = Math.floor(Math.random() * (F + 1));
          [_[F], _[H]] = [_[H], _[F]];
        }
        $.push(..._);
        break;
      } else {
        const _ = Math.random() * N;
        let F = 0, H = -1;
        for (let K = 0; K < S.length; K++)
          if (F += S[K].totalPriority, F > _) {
            H = K;
            break;
          }
        H === -1 && (H = Math.floor(Math.random() * S.length));
        const { dimension: j, count: m, totalPriority: M } = S[H];
        $.push(j), S[H].count--, S[H].totalPriority -= M / m, S[H].count === 0 ? (N -= M, S.splice(H, 1)) : N -= M / m;
      }
    return $;
  }
  function c($, S, N, _, F, H, j) {
    return N += $ + S, _.push($), F.push(
      H.l === $ ? H.w : H.l
    ), j.push(H), N;
  }
  function u($ = null) {
    if (!x?.length) return [];
    if (!P.size) return [];
    const S = /* @__PURE__ */ new Map();
    let N = 0;
    const _ = [], F = [], H = [];
    let j = null, m = !0;
    for (let C = 0; C < this.config.subset.guillotine.shuffles; C++) {
      N = 0, _.length = 0, F.length = 0, H.length = 0, j = null, m = !0;
      const B = l();
      for (const W of B) {
        if (m ? j = W : j = p + W, N + j > g) continue;
        const G = a(
          W,
          F,
          H,
          $
        );
        G && (N = c(
          W,
          m ? 0 : p,
          N,
          _,
          H,
          G,
          F
        ), m = !1);
      }
      if (N) {
        const W = N / g;
        if (kt([() => nt(W).to.lessThanOrEqual(1)]), W < this.config.subset.efficiency.limit) continue;
        const G = F.map((me, ge) => ge);
        G.sort((me, ge) => H[ge] !== H[me] ? H[ge] - H[me] : _[ge] - _[me]);
        const q = G.map(
          (me) => _[me]
        ), le = G.map(
          (me) => F[me]
        );
        kt([
          () => nt(df(le)).to.be.false
        ]), S.set(
          q.join("-"),
          {
            usedDimensions: q,
            usedShapes: le,
            efficiency: W,
            target: g,
            totalLength: N,
            priorityShape: $ ? $.parentId : null
          }
        );
      }
    }
    if (S.size === 0) return [];
    const M = Array.from(
      S.values()
    );
    M.sort(
      (C, B) => C.efficiency > B.efficiency ? -1 : C.efficiency < B.efficiency ? 1 : C.efficiency === B.efficiency ? B.usedDimensions.length - C.usedDimensions.length : 0
    );
    const K = M.slice(
      0,
      20
    );
    if (!K.length) return [];
    const oe = K.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return oe.length ? (oe.forEach(
      (C) => {
        C.usedShapes.forEach(
          (B, W) => {
            const G = C.usedDimensions[W];
            kt([() => nt([B.l, B.w].includes(G)).to.be.true]);
            let q;
            B.isSquare ? q = 0 : B.longSide === G ? q = t.getStock.cutPreference === "l" ? 1 : 0 : q = t.getStock.cutPreference === "l" ? 0 : 1, B.guillotineState || (B.guillotineState = new Xt({})), B.guillotineState.setStripShapeBatchGroup(I, {
              stockId: t.getStock.autoId,
              dimension: G,
              rot: q,
              order: W,
              //by this point sorting should have taken place
              priorityShape: C.priorityShape
            });
          }
        ), I++, kt(
          [
            () => {
              const B = C.usedDimensions.reduce(
                (q, le) => q + le,
                0
              ), W = (C.usedDimensions.length - 1) * p, G = B + W;
              return nt(ae.lessThanOrEqualTo(G, g)).to.be.true;
            },
            () => nt(
              oe.every((B) => B.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => nt(
              oe.every(
                (B) => B.usedDimensions.length === B.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), oe) : [];
  }
  const f = qt(t.cutPreference), p = t.getStock.bladeWidth, g = t[f];
  kt([() => nt(g).to.be.a("number")]);
  const x = of(
    t.shapes,
    e,
    i
  ), R = t.getStock;
  x.sort(($, S) => {
    const N = S.getPriority(R) - $.getPriority(R);
    if (N !== 0) return N;
    const _ = $.id.toString().split("."), F = S.id.toString().split(".");
    return _[0] !== F[0] ? parseInt(_[0]) - parseInt(F[0]) : parseInt(_[1]) - parseInt(F[1]);
  });
  const D = [];
  let I = 0;
  const P = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(R)) {
    r();
    const $ = u.call(this);
    D.push(...$);
  } else {
    const $ = t.shapes[0];
    r($);
    const S = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let N = 0; N < S; N++) {
      const _ = u.call(this, $);
      D.push(..._);
    }
  }
  return Jt("subset", `${D.length} strip shape results ${D.map(($) => $.usedShapes.map((S) => S.id).join()).join(" | ")}`), D?.length ? D.length : 0;
}
function np(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, o = e.x + e.l + n;
  if (!ae.lessThan(t.x, o) || !ae.greaterThan(a, e.x))
    return !1;
  const r = t.y + t.w + n, l = e.y + e.w + n;
  return ae.lessThan(t.y, l) && ae.greaterThan(r, e.y);
}
function ap(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && np(t, s, i))
      return !0;
  return !1;
}
function op(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function rp(t, e, i = !0) {
  const s = op(t), n = [];
  for (const a in s) {
    const o = s[a], r = e.findIndex((u) => u.autoId === a), l = e[r], c = lt.groupQuantity({
      item: null,
      // No specific item context for this validation
      index: r >= 0 ? r : 0,
      shapeId: a,
      requiredQuantity: o,
      availableQuantity: Number(l?.q) ?? 0,
      shapeName: l?.name,
      shapeIndex: r >= 0 ? r : void 0
    });
    n.push(...c);
  }
  return i && t.forEach((a) => {
    const o = a.validateWithShapes(e);
    o?.length && n.push(...o);
  }), n;
}
function gl(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    d: n,
    id: a,
    exact: o,
    groupDirection: r = "horizontal",
    firstShape: l = null,
    iterations: c,
    type: u = "auto",
    tolerance: f = 1e-3,
    config: p
  } = t, g = c ?? p?.subset?.shuffles ?? 10;
  kt([
    () => nt(s).to.be.greaterThan(0)
  ]);
  const x = lp(e, r, n, i, f);
  if (x.length < 2) return !1;
  const R = { config: p }, D = ip.call(
    R,
    i.bladeWidth,
    x,
    i.getStock,
    up(r),
    s,
    o,
    g,
    l
  );
  if (!D) return !1;
  if (D?.shapes?.length > 1 && D?.totalLength) {
    let I;
    try {
      I = new wn({
        id: a,
        direction: r,
        shapes: D.shapes,
        container: i,
        type: u
      }), Jt("groups", `[createGroup] Created group ${I.id} direction=${r} dims=${I.l}x${I.w} with ${I.shapes.length} shapes, [${I.shapes.map((P) => P.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (P) {
      return console.log("group error", P), !1;
    }
    return I;
  }
  return !1;
}
function bS(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    exact: n = !1,
    direction: a = "l",
    firstShape: o = null,
    preventDuplicates: r = !1,
    tolerance: l,
    maxGroups: c,
    config: u,
    counters: f,
    type: p
  } = t, g = l ?? u?.groups?.tolerance ?? 0.05;
  if (!ye(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!ye(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const x = ml(a), R = qt(a), D = x === "horizontal" ? i.w : i.l, I = i.getStock;
  let P = [...e], $ = o;
  if ($)
    if (dd(
      $,
      $[R],
      R,
      I
    ) === !1)
      $ = null;
    else {
      const K = $[R], oe = K * (1 - g);
      let C = K * (1 + g);
      C > i[R] && (C = i[R]), P = e.filter((B) => !Qe(B) || B.autoId === $.autoId ? !1 : ko(
        B,
        oe,
        C,
        R,
        I
      ));
    }
  const S = nf(
    P,
    i,
    R
  ), N = Array.from(S.keys()).filter((M) => M <= D).sort((M, K) => K - M);
  if (N.length === 0) return [];
  const _ = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
  for (const M of P) {
    const K = /* @__PURE__ */ new Map();
    for (const oe of N) {
      const C = oe * (1 - g);
      let B = oe * (1 + g);
      B > i[R] && (B = i[R]);
      const W = ko(
        M,
        C,
        B,
        R,
        I
      );
      K.set(oe, W);
    }
    F.set(M.autoId, K);
  }
  for (const M of N) {
    const K = [];
    for (const oe of P) {
      if (!Qe(oe)) continue;
      F.get(oe.autoId)?.get(M) && K.push(oe);
    }
    _.set(M, K);
  }
  const H = [], j = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
  for (const M of N) {
    if (c !== void 0 && H.length >= c)
      break;
    const K = [];
    let oe = _.get(M).filter((C) => !j.has(C.autoId));
    if (!(oe.length < 2)) {
      for (; oe.length >= 2 && !(c !== void 0 && H.length >= c); ) {
        let C, B = !1;
        if (K.length && !r) {
          const W = K[K.length - 1], G = W.shapes.slice(), q = /* @__PURE__ */ new Set(), le = new Set(oe.map((Se) => Se.autoId)), me = [];
          let ge = !0;
          for (const Se of G) {
            let Oe = !1;
            if (le.has(Se.autoId) && !q.has(Se.autoId)) {
              const Z = oe.find((ct) => ct.autoId === Se.autoId);
              Z && (me.push(Z), q.add(Se.autoId), Oe = !0);
            }
            if (!Oe)
              for (const Z of oe) {
                if (q.has(Z.autoId)) continue;
                const ct = `${Z.autoId}-${Se.autoId}`;
                if (m.has(ct) || m.set(ct, Z.isIdentical(Se)), m.get(ct)) {
                  me.push(Z), q.add(Z.autoId), Oe = !0;
                  break;
                }
              }
            if (!Oe) {
              ge = !1;
              break;
            }
          }
          if (ge && me.length === G.length) {
            if (B = !0, W.positions?.length === me.length)
              for (let Se = 0; Se < me.length; Se++) {
                const Oe = me[Se], Z = G[Se], ct = W.positions[Se]?.rot ?? Z.rot;
                if (Oe.rot !== ct && !rt(Oe, ct, i)) {
                  console.warn(`  Failed to rotate ${Oe.id} to ${ct} - skipping clone`), B = !1;
                  break;
                }
              }
            B && (kt([
              () => nt(me.every((Se, Oe) => {
                const Z = W.positions[Oe]?.rot ?? G[Oe].rot;
                return Se.rot === Z;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), C = W.cloneWithNewShapes(me));
          }
        }
        if (B || (C = gl({
          shapes: oe,
          container: i,
          targetSize: s,
          d: M,
          id: "g" + (typeof f?.group == "number" ? f.group : 0),
          exact: n,
          groupDirection: x,
          firstShape: $,
          tolerance: g,
          config: u,
          type: p
        })), C) {
          typeof f?.group == "number" && f.group++, K.push(C), C.shapes.forEach((G) => j.add(G.autoId));
          const W = [];
          for (const G of oe)
            j.has(G.autoId) || W.push(G);
          if (oe = W, oe.length < 2) break;
        } else
          break;
      }
      H.push(...K);
    }
  }
  return H;
}
function lp(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    if (a.isSquare) return !0;
    const o = i * (1 - n), r = i * (1 + n), l = a.l >= o && a.l <= r, c = a.w >= o && a.w <= r;
    let u = null;
    if (l && c) {
      const f = Math.abs(a.l - i), p = Math.abs(a.w - i);
      u = f <= p ? "l" : "w";
    } else l ? u = "l" : c && (u = "w");
    if (u !== null) {
      const f = cp(
        u,
        e,
        a.rot
      );
      return vt(a, f, s) ? rt(a, f, s) : !1;
    }
    return !1;
  });
}
function cp(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function ml(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function up(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function dp(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function fp(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const a of n.shapes)
        s.add(a.autoId);
  return t.filter((n) => Ye(n) || !s.has(n.autoId));
}
function hp(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Ye).forEach((o) => {
    o.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((o) => Qe(o)).filter((o) => i.has(o.autoId)), a = e ? ` [${e}]` : "";
  nt(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((o) => o.id || o.autoId).join(", ")}`
  ).to.equal(0);
}
function yS(t) {
  const e = [], i = t.filter((n) => Ye(n)), s = t.filter((n) => Qe(n));
  for (const n of i)
    n.added && e.push(n);
  for (const n of s)
    n.added && !n.group.inGroup && e.push(n);
  return e;
}
function pp(t, e) {
  t.push(e), t.sort((s, n) => (n.score?.total || 0) - (s.score?.total || 0));
  const i = t[0];
  if (i.score?.total && Ye(i) && (i.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(i), e.bestScore.group = i, i;
}
function vS(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: o, scoreFunction: r } = t;
  if (s.length < 3) return;
  Jt("groups", `[POSITION GROUPS] Creating groups at position (${a.x},${a.y}) for shape ${n.id} in container ${e.id} (${e.cutType})`);
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  qi(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of u) {
    const x = qt(g), R = g === "l" ? "x" : "y", D = e[g] - n[R] - e.bladeWidth, I = e[g] - n[R], P = e[g] * 0.6;
    if (D <= 0 || I < P) continue;
    const $ = dp(
      s,
      n,
      x
    );
    if ($.length < 2) continue;
    const S = gl({
      shapes: $,
      container: e,
      targetSize: D,
      d: n[x],
      id: "g" + n.id,
      exact: !1,
      groupDirection: ml(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: o.subset
      }
    });
    S && c.push(S);
  }
  c.sort((g, x) => x.efficiency - g.efficiency), c = c.slice(0, o.sample.groupSize);
  for (const g of c)
    g.x = a.x, g.y = a.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (ap(g, i, e) || r(g, e, i, s, a));
  s.forEach((g) => g.resetGroupData());
  const f = pp(c, n), p = c.filter((g) => Ye(g) && g !== f);
  if (p.length > 0 && (Jt("groups", `[POSITION GROUPS] Destroying ${p.length} non-winning groups`), p.forEach((g) => {
    Jt("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  })), f) {
    if (Jt("groups", `[POSITION GROUPS] Winner: group ${f.id} with score ${f.score.total.toFixed(2)} (beat shape ${n.id} score ${n.score?.total?.toFixed(2) || 0})`), qi(e)) {
      e.shapes.push(f);
      const g = e.shapes.length;
      e.shapes = fp(e.shapes, f);
      const x = g - e.shapes.length;
      x > 0 && Jt("groups", `[POSITION GROUPS] Removed ${x} child shapes from segment after adding group ${f.id}`);
    }
  } else c.length > 0 && Jt("groups", `[POSITION GROUPS] No winning group - shape ${n.id} scored better than ${c.length} groups`);
  return l && (n.orientationLock = null), f && qi(e) && kt([
    () => hp(e.shapes, "POSITION GROUPS")
  ]), f;
}
function vs(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function Vs(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    vs(t, s, i);
  }
}
function $e(t, e, i, s, n) {
  const a = gp[t](e, i);
  return s && (a.corner = s), n && (a.direction = n), a;
}
const gp = {
  bottom: (t, e) => {
    const i = t.cloneAt(t.x, t.y - e);
    return i.grid = "bottom", i;
  },
  bottomLeft: (t, e) => {
    const i = t.cloneAt(t.x - e, t.y - e);
    return i.grid = "bottomLeft", i;
  },
  bottomRight: (t, e) => {
    const i = t.cloneAt(t.x + e, t.y - e);
    return i.grid = "bottomRight", i;
  },
  left: (t, e) => {
    const i = t.cloneAt(t.x - e, t.y);
    return i.grid = "left", i;
  },
  centre: (t) => {
    const e = t.cloneAt(t.x, t.y);
    return e.grid = "centre", e;
  },
  right: (t, e) => {
    const i = t.cloneAt(t.x + e, t.y);
    return i.grid = "right", i;
  },
  top: (t, e) => {
    const i = t.cloneAt(t.x, t.y + e);
    return i.grid = "top", i;
  },
  topLeft: (t, e) => {
    const i = t.cloneAt(t.x - e, t.y + e);
    return i.grid = "topLeft", i;
  },
  topRight: (t, e) => {
    const i = t.cloneAt(t.x + e, t.y + e);
    return i.grid = "topRight", i;
  }
};
function mp(t, e, i) {
  const s = new ni(), n = i.toArray().sort(bl), a = e.bladeWidth;
  if (n.forEach((o) => {
    const r = o.corner, l = o.type;
    if (!a)
      s.add(o);
    else
      switch (r) {
        case "topRight":
          {
            const c = $e("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = $e("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = $e("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = $e("left", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = $e("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = $e("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = $e("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = $e("left", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
      }
  }), a) {
    const o = s.toArray();
    for (let r = o.length; r--; ) {
      const l = o[r];
      i.has(l.x, l.y) && s.remove(l.x, l.y);
    }
  } else {
    const o = s.toArray();
    for (let r = o.length; r--; ) {
      const l = o[r];
      for (let c = t.length; c--; ) {
        const u = t[c];
        if (l.x === u.x && l.y === u.y) {
          s.remove(l.x, l.y);
          break;
        }
      }
    }
  }
  if (a) {
    const o = /* @__PURE__ */ new Set();
    let r, l, c, u;
    e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (r = e.x, l = e.y, c = e.x + e.l, u = e.y + e.w) : (r = e.x + e?.trim?.l1, l = e.y + e?.trim?.w1, c = e.x + e.l - e?.trim?.l2, u = e.y + e.w - e?.trim?.w2);
    let f = s.toArray();
    for (let p = f.length; p--; ) {
      const g = f[p];
      (ae.lessThan(g.x, r) || ae.lessThan(g.y, l) || ae.greaterThan(g.x, c) || ae.greaterThan(g.y, u)) && f.splice(p, 1);
    }
    s.clear(), f.forEach((p) => s.add(p)), o.clear(), f = s.toArray();
    for (let p = f.length; p--; ) {
      const g = f[p];
      for (let x = t.length; x--; ) {
        const R = t[x];
        if (g.collidesWith(R)) {
          s.remove(g.x, g.y);
          break;
        }
      }
    }
  }
  return s;
}
function bp(t, e, i) {
  let s = [];
  const n = t.minSpacing, a = e.corner, o = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        o === "rl" && (s.push($e("right", e, n, a, o)), s.push($e("topRight", e, n, a, o))), o === "bt" && (s.push($e("bottom", e, n, a, o)), s.push($e("bottomLeft", e, n, a, o)));
        break;
      case "topRight":
        o === "lr" && (s.push($e("left", e, n, a, o)), s.push($e("topLeft", e, n, a, o))), o === "bt" && (s.push($e("bottom", e, n, a, o)), s.push($e("bottomRight", e, n, a, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push($e("left", e, n, a, o)), s.push($e("bottomLeft", e, n, a, o))), o === "tb" && (s.push($e("top", e, n, a, o)), s.push($e("topRight", e, n, a, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push($e("right", e, n, a, o)), s.push($e("bottomRight", e, n, a, o))), o === "tb" && (s.push($e("top", e, n, a, o)), s.push($e("topLeft", e, n, a, o)));
        break;
    }
  else if (e.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push($e("top", e, 0)), s.push($e("centre", e, 0)), s.push($e("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push($e("left", e, 0)), s.push($e("right", e, 0)), s.push($e("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const r = new ni();
  for (const l of s)
    l.raycast = !0, Vs(r, wl(t, l, i).toArray());
  return Sl(t, i, r), r;
}
function yp(t, e) {
  const i = new ni();
  return t.sort(bl), t.forEach((s) => {
    Ye(s) ? (Vs(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      Vs(i, a, "group");
    })) : Vs(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function vp(t = [], e, i) {
  const s = yp(
    t === null ? e : t,
    i
  );
  return mp(
    e,
    i,
    s
  );
}
function bl(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function yl(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function wp(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new ni();
  const s = vl(e, t);
  for (const r of e)
    for (const l of s) {
      if (l.shape.id === r.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        Sp(
          u,
          l.shape,
          r,
          i
        );
    }
  const a = t.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", o = e.reduce((r, l) => (a === "tb" ? r.x + r.l > l.x + l.l : r.y + r.w > l.y + l.w) ? r : l);
  return s.filter(({ shape: r }) => r.id === o.id).forEach(({ shape: r, rays: l }) => {
    const c = Object.values(l).filter((u) => u !== void 0);
    for (const u of c) {
      const f = new tt(u.x2, u.y2);
      a === u.direction && (yl(f, r, null, u.direction, "edge"), vs(i, f));
    }
  }), i = xp(i), i;
}
function vl(t, e) {
  return t.map((i) => {
    const s = ep(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function Sp(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      $s(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      $s(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      $s(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      $s(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function $s(t, e, i, s, n) {
  const a = t.dimension === "w", o = a ? "y" : "x", r = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${r}1`] >= i[r] && t[`${r}1`] <= i[r] + i[l]) {
    const c = t.direction === "lr" && t[`${o}1`] <= n && t[`${o}2`] >= n, u = t.direction === "rl" && t[`${o}1`] >= n && t[`${o}2`] <= n, f = t.direction === "bt" && t[`${o}1`] <= n && t[`${o}2`] >= n, p = t.direction === "tb" && t[`${o}1`] >= n && t[`${o}2`] <= n;
    if (c || u || f || p) {
      const x = a ? t[`${r}1`] : n, R = a ? n : t[`${r}1`], D = new tt(x, R), I = t.origin;
      yl(D, e, i, t.direction, "shape", I), vs(s, D);
    }
  }
}
function xp(t) {
  const e = new ni();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const o = kp(
        n,
        a
      );
      o && vs(e, o);
    });
  }), e;
}
function kp(t, e) {
  return t.length === 0 ? null : t.reduce((i, s) => {
    switch (e) {
      case "left":
        return !i || s.x < i.x ? s : i;
      case "right":
        return !i || s.x > i.x ? s : i;
      case "top":
        return !i || s.y > i.y ? s : i;
      case "bottom":
        return !i || s.y < i.y ? s : i;
      default:
        return null;
    }
  }, null);
}
function wl(t, e, i) {
  const s = new ni(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let o;
    switch (o = Ip(e, t, i), a) {
      case "bottomLeft":
        o = o.cloneAt(o.x - t.l, o.y - t.w), o.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        o = o.cloneAt(o.x, o.y - t.w), o.shapePosition = "bottomRight";
        break;
      case "topLeft":
        o = o.cloneAt(o.x - t.l, o.y), o.shapePosition = "topLeft";
        break;
      case "topRight":
        o = o.cloneAt(o.x, o.y), o.shapePosition = "topRight";
        break;
    }
    vs(s, o);
  }
  return Sl(t, i, s), s;
}
function Ip(t, e, i) {
  if (i.saw.cutType !== "efficiency") return t;
  const s = e.getMinSpacing(i.saw), n = i.bladeWidth;
  if (!s || s === n) return t;
  let a;
  if (!t.grid) return t;
  switch (t.grid) {
    case "bottom":
      a = t.cloneAt(t.x, t.y - s + n);
      break;
    case "top":
      a = t.cloneAt(t.x, t.y + s - n);
      break;
    case "left":
      a = t.cloneAt(t.x - s + n, t.y);
      break;
    case "right":
      a = t.cloneAt(t.x + s - n, t.y);
      break;
  }
  return a ? (a.x < 0 && (a.x = 0), a.y < 0 && (a.y = 0), a.adjustedForMinSpacing = !0, a) : t;
}
function Sl(t, e, i) {
  let s, n, a, o;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, o = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, a = e.l - e?.trim?.l2 - t.l, o = e.w - e?.trim?.w2 - t.w);
  const r = i.toArray();
  for (let l = r.length; l--; ) {
    const c = r[l];
    (ae.lessThan(c.x, s) || ae.lessThan(c.y, n) || ae.greaterThan(c.x, a) || ae.greaterThan(c.y, o) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
const Pp = E({
  id: h(),
  count: d(),
  name: h(),
  l: d(),
  w: d(),
  t: d(),
  material: h()
}), eo = E({
  inputStock: ee(Pi),
  inputShapes: ee(rs),
  inputSaw: en,
  inputUserGroups: ee(Ja),
  // Centralized extras options for UI dropdowns
  extrasOptions: E({
    banding: E({
      options: ee(h())
    }).optional(),
    finish: E({
      options: ee(h())
    }).optional(),
    planing: E({
      options: ee(h())
    }).optional()
  }).optional()
}).optional(), Cp = E({
  // Banding metrics
  bandingLengthByType: he(h(), d()).default({}),
  // Finish metrics (by face)
  finishAreaByType: he(h(), d()).default({}),
  // Material summary with nested structure
  materialSummary: he(
    h(),
    // material name
    he(
      h(),
      // thickness
      E({
        used: d(),
        stacks: d(),
        bandingLengthByType: he(h(), d())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: he(h(), d()).default({}),
  addedPartTally: he(h(), d()).default({}),
  // Cost metrics
  stockAreaCost: d().default(0),
  totalStockCost: d().default(0),
  // Machining metrics
  hasMachining: L().default(!1),
  numHoles: d().default(0),
  numCorners: d().default(0),
  // Efficiency metrics
  totalBandingLength: d().default(0),
  totalFinishArea: d().default(0),
  totalEfficiency: d().default(0),
  // Cutting metrics
  totalCutLength: d().default(0),
  totalStackedCutLength: d().default(0),
  totalCuts: d().default(0),
  totalStackedCuts: d().default(0),
  // Area metrics
  totalStockArea: d().default(0),
  totalStockUsedArea: d().default(0),
  totalStockUnusedArea: d().default(0),
  totalPartArea: d().optional(),
  // Legacy name
  totalPartsArea: d().default(0),
  totalUnusedPartsArea: d().default(0),
  totalOffcutsArea: d().default(0),
  totalOffcuts: d().default(0),
  totalBladeArea: d().default(0),
  totalTrimArea: d().default(0),
  // Additional metrics
  totalPartsProduced: d().optional(),
  totalUsedStock: d().optional(),
  totalRollLength: d().optional()
}), Pn = Cp.extend({
  bandingLengthByType: he(h(), d()).default({}),
  unplacedParts: ee(Pp).default([])
}), Tp = E({
  // Core optimization results
  stockList: Fe("Stock"),
  shapeList: Fe("Shape"),
  cutList: Fe("Cut").optional(),
  segmentList: Fe("Segment").optional(),
  offcuts: Fe("Offcut").optional(),
  saw: ve("Saw"),
  unusableShapes: Fe("Shape").optional(),
  unavailableStock: Fe("Stock").optional(),
  evolutionVisData: ee(E({})).optional(),
  performance: h().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: Pn.optional(),
  credits: d().optional(),
  // Optional input data for debugging/API reporting
  inputs: eo
});
E({
  // Job execution metadata
  success: L(),
  socketId: h().nullable().default(null),
  userId: h(),
  api: L(),
  app: L(),
  widget: L().optional(),
  cached: L().optional(),
  hash: h().optional(),
  webhook: h().optional(),
  config: be().optional(),
  error: h().optional(),
  jobId: d().optional(),
  // Input data
  inputs: eo,
  // The actual optimization results
  optimisation: Tp
});
E({
  // Database metadata
  jobId: d().optional(),
  // Job execution data
  success: L(),
  socketId: h().nullable().default(null),
  userId: h(),
  api: L(),
  app: L(),
  widget: L().optional(),
  cached: L().optional(),
  hash: h().optional(),
  webhook: h().optional(),
  config: be().optional(),
  error: h().optional(),
  // Optimization results (flattened from optimization object)
  stockList: Fe("Stock"),
  shapeList: Fe("Shape"),
  cutList: Fe("Cut").optional(),
  segmentList: Fe("Segment").optional(),
  offcuts: Fe("Offcut").optional(),
  saw: ve("Saw"),
  unusableShapes: Fe("Shape").optional(),
  unavailableStock: Fe("Stock").optional(),
  performance: h().optional(),
  metadata: Pn.optional(),
  apiVersion: d().optional(),
  credits: d().optional(),
  // Input data
  inputs: eo,
  // Computed fields for easier querying/display
  numParts: d().optional(),
  numStock: d().optional()
});
E({
  id: h().optional(),
  name: h().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: h().optional(),
  q: d().optional(),
  orientationLock: ue([
    fe(""),
    fe("l"),
    fe("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: be().optional(),
  finish: be().optional(),
  planing: be().optional()
});
const Ap = E({
  issues: ee(h()),
  id: h(),
  duplicate: L(),
  name: h(),
  added: L(),
  x: d(),
  y: d(),
  l: d(),
  w: d(),
  t: d(),
  q: d().optional(),
  // Add quantity for checkout compatibility
  orientationLock: ue([
    fe(""),
    fe("l"),
    fe("w")
  ]),
  trim: E({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  material: h(),
  banding: be(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: be(),
  // Legacy field
  finish: be(),
  // Using any for now, could use finishPropertiesSchema
  stock: E({ id: h() }),
  rot: L(),
  notes: h(),
  customData: he(h(), ue([h(), d(), L()]))
});
E({
  issues: ee(h()),
  id: h(),
  duplicate: L().optional(),
  name: h(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h(),
  cost: d(),
  used: L(),
  grain: ue([
    fe(""),
    fe("l"),
    fe("w"),
    ii()
  ]).nullable(),
  trim: E({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  parts: ee(Ap),
  efficiency: d(),
  notes: h().optional(),
  // Legacy V1 fields
  blade: E({
    width: d()
  }).optional(),
  cutPreference: ue([
    fe("l"),
    fe("w"),
    fe("flex")
  ]).optional(),
  // Analysis data
  analysis: E({
    partArea: d(),
    totalParts: d(),
    areaEfficiency: d(),
    cutLength: d(),
    bandingLength: d(),
    numberOfCuts: d(),
    rollLength: d().optional()
  }).optional(),
  // Stack info
  stack: be().optional(),
  // Stock quantity for checkout compatibility
  q: d().optional()
});
const wS = Ys({
  // Context - using z.any() for complex external types
  job: at().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: It().nullable().default(null).describe("Socket.io connection ID"),
  user: at().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: at().describe("Configuration object"),
  // Type: Config
  api: Je().nullable().default(null).describe("API mode flag"),
  app: Je().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ve("Saw").describe("Saw configuration"),
  stockList: Fe("Stock").default([]).describe("List of stock materials"),
  shapeList: Rs(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  userGroups: Fe("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Fe("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Rs(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Rs(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: hn,
  // Results storage
  cutList: Fe("Cut").default([]).describe("List of cuts to make"),
  segmentList: Fe("Segment").default([]).describe("List of segments"),
  offcuts: Fe("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Fe("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Je().default(!1).describe("Use inventory system"),
  successMetric: It().default(ht.successMetric).describe("Metric for optimization success"),
  enableEvo: Je().default(!0).describe("Enable evolutionary algorithm"),
  weighting: bo(It(), at()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: at().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: at().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: Ys({
    placement: Ks().default(0),
    group: Ks().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: Je().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: Je().default(!1).describe("Run guillotine second pass"),
  runningEvo: Je().default(!1).describe("Currently running evolution"),
  evolutionVisData: Ii(bo(It(), iu())).default([]).describe("Evolution visualization data"),
  final: Je().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Je().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: Je().default(!1).describe("Has shape-level minimum spacing")
}), SS = {}, Op = su(["decimal", "fraction"]), $p = Ys({
  job: at().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Preserve system properties like __entityType and autoId
  inputSaw: en,
  inputShapes: Ii(rs),
  inputStock: Ii(Pi),
  inputUserGroups: Ii(Ja).optional(),
  // Number format for conversion
  numberFormat: Op.optional(),
  // Algorithm configuration
  enableEvo: Je().default(!0),
  weighting: at().optional(),
  successMetric: It().optional(),
  useInventory: Je().default(!1),
  // Context
  socketId: It().optional(),
  user: at().optional(),
  // IUser type
  // Application flags
  widget: Je().optional(),
  api: Je().optional(),
  app: Je().optional(),
  domain: It().optional(),
  // API specific
  config: at().optional(),
  v: Ks().optional(),
  // API version
  webhook: It().optional()
});
Ys({
  job: at().optional(),
  // Type: Job from BullMQ
  saw: at(),
  // Runtime Saw instance
  shapeList: Ii(at()),
  // Runtime Shape instances
  stockList: Ii(at()),
  // Runtime Stock instances
  userGroups: Ii(at()).optional(),
  // Runtime Group instances
  enableEvo: Je(),
  weighting: at().optional(),
  successMetric: It().optional(),
  useInventory: Je(),
  socketId: It().optional(),
  user: at().optional(),
  widget: Je().optional(),
  api: Je().optional(),
  app: Je().optional(),
  domain: It().optional(),
  config: at().optional(),
  v: Ks().optional(),
  webhook: It().optional()
});
const Fp = (t, e, i) => {
  const s = t[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((n, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      a.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + e + (e.split("/").length !== i ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, Lp = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), cn = Object.keys(Lp).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
cn.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const La = "en", Ui = ar.createInstance();
function z(t, e) {
  if (mr())
    return t;
  if (!Ui.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = Ui.t(t, e);
  return i = typeof i == "string" ? i : String(i), Ki(i);
}
const Fs = {}, Ep = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (Fs[t]) {
        i(null, Fs[t]);
        return;
      }
      const s = await Fp(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), `../translation/${t}.json`, 3);
      Fs[t] = s.default, i(null, Fs[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function Dp() {
  return Pu(Ui), await Ui.use(pc).use(Ep).init({
    debug: !1,
    fallbackLng: La,
    supportedLngs: cn.length > 0 ? cn : [La],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? xu(t) : e === "sc" ? Ki(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), Ui;
}
const Rp = Dp().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
}), xS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: La, SUPPORTED_LANGUAGES: cn, i18nextInstance: Ui, i18nextReady: Rp, t: z }, Symbol.toStringTag, { value: "Module" }));
class Ro {
  /**
   * Migrate a single shape from old structure to new structure
   */
  static migrateShape(e) {
    this.migrateBanding(e), this.migrateFinish(e);
  }
  /**
   * Migrate multiple shapes at once
   */
  static migrateShapes(e) {
    e.forEach((i) => {
      const s = Object.keys(i);
      this.migrateShape(i);
      const n = Object.keys(i);
      s.length, n.length;
    });
  }
  /**
   * Migrate old side format (x1/x2/y1/y2) to new format (l1/l2/w1/w2)
   */
  static migrateSideNames(e) {
    const i = {};
    for (const [s, n] of Object.entries(e)) {
      let a = s;
      s === "x1" ? a = "l1" : s === "x2" ? a = "l2" : s === "y1" ? a = "w1" : s === "y2" && (a = "w2"), i[a] = n;
    }
    return i;
  }
  /**
   * Migrate banding from flat to nested structure
   * Also handles migration from old side names (x1/x2/y1/y2) to new names (l1/l2/w1/w2)
   */
  static migrateBanding(e) {
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = xe(e) ? e.bandingOptions : void 0;
    if (!i && !s && !n) return !1;
    if (i && i instanceof Lt) {
      const u = i.sides;
      if (u && typeof u == "object" && ("x1" in u || "x2" in u || "y1" in u || "y2" in u)) {
        const p = this.migrateSideNames(u);
        return i.sides = p, !0;
      }
      return !1;
    }
    const a = {}, o = {}, r = { sides: {} };
    if (i && typeof i == "object") {
      const u = this.migrateSideNames(i);
      for (const [f, p] of Object.entries(u))
        Ct.includes(f) && (a[f] = p);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [f, p] of Object.entries(u))
        Ct.includes(f) && (o[f] = p);
    }
    if (n && typeof n == "object") {
      n.all && (r.sides.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && Ct.includes(u) && f && (r.sides[u] = f);
    }
    const l = new Lt(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(o).length > 0 ? new Lt({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : xe(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), xe(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = xe(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof yt)
      return !1;
    const a = {}, o = {}, r = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, f] of Object.entries(i))
        ft.includes(u) && (a[u] = f);
    if (s && typeof s == "object")
      for (const [u, f] of Object.entries(s))
        ft.includes(u) && (o[u] = f);
    if (n && typeof n == "object") {
      n.all && (r.faces.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && ft.includes(u) && f && (r.faces[u] = f);
    }
    const l = new yt(Object.keys(a).length > 0 ? { faces: a } : {}), c = Object.keys(o).length > 0 ? new yt({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : xe(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), xe(e) && n && (e.finishOptions = r), !0;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(e) {
    const i = e.banding;
    if (i && typeof i == "object" && !(i instanceof Lt) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof Lt) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    const s = e.finish;
    if (s && typeof s == "object" && !(s instanceof yt) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof yt) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    return !1;
  }
  /**
   * Validate that migrated data is in correct new format
   */
  static validateMigratedShape(e) {
    try {
      const i = e.banding;
      if (i) {
        if ("faces" in i && i.faces)
          throw new Error("Banding should not have faces property");
        if ("sides" in i && i.sides) {
          const n = Object.keys(i.sides).filter((a) => !Ct.includes(a));
          if (n.length > 0)
            throw new Error(`Invalid side keys in banding: ${n.join(", ")}`);
        }
      }
      const s = e.finish;
      if (s) {
        if ("sides" in s && s.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in s && s.faces) {
          const n = Object.keys(s.faces).filter((a) => !ft.includes(a));
          if (n.length > 0)
            throw new Error(`Invalid face keys in finish: ${n.join(", ")}`);
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
  static getMigrationSummary(e) {
    const i = {
      totalShapes: e.length,
      shapesNeedingMigration: 0,
      shapesWithBanding: 0,
      shapesWithFinish: 0,
      shapesAlreadyMigrated: 0
    };
    return e.forEach((s) => {
      this.needsMigration(s) ? i.shapesNeedingMigration++ : (s.banding || s.finish) && i.shapesAlreadyMigrated++, s.banding && i.shapesWithBanding++, s.finish && i.shapesWithFinish++;
    }), i;
  }
  /**
   * Create backup of shape before migration
   */
  static createBackup(e) {
    const i = {
      banding: e.banding ? JSON.parse(JSON.stringify(e.banding)) : void 0,
      finish: e.finish ? JSON.parse(JSON.stringify(e.finish)) : void 0
    };
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), xe(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : xe(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), xe(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
const _p = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Mp = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function Ea(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Bp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function un(t = !1) {
  return {
    a: t,
    b: t
  };
}
function jp(t = !1) {
  return {
    sides: Ea(t),
    faces: un(t)
  };
}
function Np(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function Vp(t) {
  const e = {};
  for (const [i, s] of Object.entries(_p))
    i in t && (e[s] = t[i]);
  return e;
}
function Gp(t) {
  const e = {};
  for (const [i, s] of Object.entries(Mp))
    i in t && (e[s] = t[i]);
  return e;
}
function xt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function ei(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, i = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && i && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const n = Vp(t), a = {};
    return "l1" in n && (a.l1 = xt(n.l1)), "l2" in n && (a.l2 = xt(n.l2)), "w1" in n && (a.w1 = xt(n.w1)), "w2" in n && (a.w2 = xt(n.w2)), a;
  }
  const s = {};
  return "l1" in t && (s.l1 = xt(t.l1)), "l2" in t && (s.l2 = xt(t.l2)), "w1" in t && (s.w1 = xt(t.w1)), "w2" in t && (s.w2 = xt(t.w2)), Object.keys(s).length > 0 ? s : t;
}
function qp(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Ri(t) {
  return !t || !Array.isArray(t) ? t : t.map(qp);
}
function zp(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [i, s] of Object.entries(t.banding))
      (s === !0 || s === !1 || typeof s == "string" && s.length > 0) && (e[i] = s);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [i, s] of Object.entries(t.bandingType))
      typeof s == "string" && s.length > 0 && (e[i] = s);
  return Object.keys(e).length > 0 ? e : void 0;
}
function Da(t) {
  return t && Gp(t);
}
function Wp(t) {
  t?.type && delete t.type, Hp.call(this, t), Up.call(this, t), Yp.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ra(e));
}
function Hp(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Up(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Yp(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function Ra(t) {
  !t || typeof t != "object" || (Ro.needsMigration(t) && Ro.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function xl(t) {
  if (t?.enable) return;
  t.enable = {};
  const e = {
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
  for (const i of Object.keys(e))
    if (i in t) {
      const s = e[i];
      t.enable[s.new] = s.map === "reverse" ? !t[i] : t[i], delete t[i];
    }
}
function kS(t) {
  if (!(!t || typeof t != "object")) {
    if (Wp(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = ei(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = ei(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = ei(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: ei(e.trim)
    } : e)), t.options) {
      if (xl(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ri(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ri(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ri(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const i = t.options.extrasLocationGroups[e];
          i && Array.isArray(i) && i.forEach((s) => {
            s.locations && (s.locations = Ri(s.locations));
          });
        }
      if (!t.saw) {
        const e = {}, i = ["bladeWidth", "cutType", "cutPreference", "guillotineOptions", "stackHeight", "stockType"];
        for (const s of i)
          s in t.options && (e[s] = t.options[s], delete t.options[s]);
        Object.keys(e).length > 0 && (console.log("[migrateLegacyData] Migrating saw properties from options to saw:", e), t.saw = e);
      }
    }
    for (const e of ["banding", "finish", "planing"])
      if (t[e]) {
        const i = t[e];
        i.locations && Array.isArray(i.locations) && (i.locations = Ri(i.locations)), i.groups && Array.isArray(i.groups) && i.groups.forEach((s) => {
          s.locations && (s.locations = Ri(s.locations));
        });
      }
    if (t.saw?.cutPreference && ["efficiency", "length", "width", "beam"].includes(t.saw.cutPreference)) {
      const s = {
        efficiency: { cutType: "guillotine", cutPreference: null },
        length: { cutType: "guillotine", cutPreference: "l" },
        width: { cutType: "guillotine", cutPreference: "w" },
        beam: { cutType: "beam", cutPreference: "l" }
      }[t.saw.cutPreference];
      s && (t.saw.cutType = s.cutType, t.saw.cutPreference = s.cutPreference);
    }
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ra(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && Ra(t);
  }
}
function Kp(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = Zp(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(Xp)), Array.isArray(e.parts) && (e.parts = e.parts.map(Jp)), e;
}
function Zp(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const i = e.efficiencyOptions.primaryCompression;
    i === "x" ? e.efficiencyOptions.primaryCompression = "l" : i === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function Xp(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = ei(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function Jp(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const i = zp(e);
    i && Object.keys(i).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = ei(i)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = ei(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const i = {};
      "a" in e.finish && (i.a = xt(e.finish.a)), "b" in e.finish && (i.b = xt(e.finish.b)), e.extras.finish.faces = i;
    } else
      e.extras.finish.sides = ei(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = ei(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const i = e.extras.finish.faces;
    "a" in i && (i.a = xt(i.a)), "b" in i && (i.b = xt(i.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
let kl = {};
const IS = (t, e) => {
  kl[t] = e;
}, Cn = (t) => kl[t] || null, sa = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = yi(i), o = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  o[a] = s;
}, Tn = (t, e, i) => {
  const { scope: s, key: n } = yi(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] || null;
}, Qp = (t, e, i) => {
  const { scope: s, key: n } = yi(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, eg = (t) => {
  const e = Cn(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
}, _o = !1;
function tg() {
  return {
    banding: {
      scope: ["sides"],
      sides: ti.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: ft.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: ft.map((t) => `face.${t}`),
      sides: ti.map((t) => `side.${t}`),
      // Only use main sides (l1/l2/w1/w2)
      constraints: {
        // Example constraints for planing - you can customize these
        global: {
          t: { min: 10, message: "Thickness must be at least 10mm for planing" }
        },
        locations: [
          {
            location: "face.a",
            properties: {
              t: { min: 15, message: "Face A planing requires at least 15mm thickness" }
            }
          },
          {
            location: "face.b",
            properties: {
              t: { min: 15, message: "Face B planing requires at least 15mm thickness" }
            }
          }
        ],
        defaultMessage: "Shape does not meet requirements for planing"
      }
    },
    info: {
      scope: ["sides"],
      sides: Ct.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const ig = tg(), Ut = (t) => ig[t] || {
  scope: ["sides"],
  sides: Ct.map((e) => `side.${e}`)
}, _a = (t) => {
  const e = Ut(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, PS = (t) => (Ut(t).faces || []).map((i) => {
  const s = yi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), CS = (t) => (Ut(t).sides || []).map((i) => {
  const s = yi(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), yi = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !ft.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !Ct.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, Mo = (t) => yi(t).scope, Il = (t) => Ut(t).scope.includes("faces"), Pl = (t) => Ut(t).scope.includes("sides"), TS = (t) => {
  const e = Ut(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, sg = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((a) => typeof a == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, ng = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  Il(e) && (s.faces || (s.faces = {})), Pl(e) && (s.sides || (s.sides = {}));
}, ag = (t, e, i) => {
  ng(t, e);
  const n = t.extras[e], { scope: a } = yi(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, gi = (t, e, i) => !!Tn(t, e, i), og = (t, e, i, s, n) => {
  const a = Cn(e);
  if (a) {
    const o = Tn(t, e, i);
    if (o !== null) {
      if (typeof o == "boolean")
        return o;
      if (typeof o == "string") {
        const r = a.labels.indexOf(s);
        return r !== -1 && a.options[r] && Array.isArray(a.options[r]) && !a.options[r].includes(o) ? null : o;
      }
      if (typeof o == "object" && s in o) {
        const r = o[s];
        if (r === !0) {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l])) {
            const c = a.options[l];
            if (c.length === 1)
              return c[0];
          }
          return s;
        }
        if (typeof r == "string") {
          const l = a.labels.indexOf(s);
          if (l !== -1 && a.options[l] && Array.isArray(a.options[l]) && !a.options[l].includes(r))
            return null;
        }
        return r;
      }
    }
  }
  return !1;
}, AS = (t, e, i, s, n, a, o) => {
  const r = Cn(e);
  if (r)
    switch (eg(e)) {
      case "boolean":
        sa(t, e, i, !!n);
        break;
      case "string":
        sa(t, e, i, String(n));
        break;
      case "object":
        {
          let c = Tn(t, e, i) || {};
          typeof c != "object" && (c = {});
          const u = r.labels.indexOf(s);
          if (u !== -1 && r.options[u] && Array.isArray(r.options[u])) {
            const f = r.options[u];
            f.length === 1 && f[0] === n ? c[s] = !0 : c[s] = n;
          } else
            c[s] = n;
          sa(t, e, i, c);
        }
        break;
    }
}, rg = (t, e, i, s) => {
  Qp(t, e, i);
}, OS = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((o) => og(t, e, o, s));
  if (n === "boolean" || n === "single") {
    const o = a.every((l) => !!l), r = a.every((l) => !l);
    return o ? !0 : r ? !1 : null;
  }
  if (n === "multiple") {
    const o = a[0];
    return a.every((l) => l === o) ? o : null;
  }
  return null;
}, $S = (t, e, i, s) => {
  i.forEach((n) => {
    rg(t, e, n);
  });
}, na = (t, e, i, s, n, a) => {
  const o = Tn(t, e, i), r = [];
  if (o && a?.length)
    if (typeof o == "object" && !Array.isArray(o)) {
      const c = o;
      for (const u of a) {
        const f = c[u];
        if (f)
          if (f === !0) {
            const p = Cn(e);
            if (p) {
              const g = p.labels.indexOf(u);
              if (g !== -1 && p.options[g] && Array.isArray(p.options[g])) {
                const x = p.options[g];
                x.length === 1 ? r.push(x[0]) : r.push(u);
              } else
                r.push(u);
            } else
              r.push(u);
          } else
            r.push(String(f));
      }
    } else
      r.push(String(o));
  else o && r.push(String(o));
  const l = r.filter((c) => c && typeof c == "string" && c.trim() !== "");
  if (!Array.isArray(l) || !l.length)
    return !1;
  if (!s)
    return 0;
  try {
    const c = l.map((f, p) => {
      if (typeof f == "boolean" && f === !0 && n) {
        const g = n[p];
        if (g && g.length === 1)
          return String(g[0]);
      }
      return String(f);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, FS = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Ut(e);
  if (t.forEach((a) => {
    const r = a.extras[e];
    r && (n.faces && "faces" in r && r.faces && Object.values(r.faces).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }), n.sides && "sides" in r && r.sides && Object.values(r.sides).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }));
  }), s.size > 0) {
    const a = [.../* @__PURE__ */ new Set([...i.value, ...Array.from(s)])];
    i.value = a;
  }
}, LS = (t, e, i, s) => {
  const n = s[0], a = Ut(e);
  n && t.forEach((o) => {
    const l = o.extras[e];
    if (!l) return;
    l.options || (l.options = {});
    const c = l.options;
    if (a.faces && l.faces) {
      c.faces || (c.faces = {});
      for (const u in l.faces)
        l.faces[u] === !0 && (l.faces[u] = i);
    }
    if (a.sides && l.sides) {
      c.sides || (c.sides = {});
      for (const u in l.sides)
        l.sides[u] === !0 && (l.sides[u] = i);
    }
  });
}, ES = (t, e, i) => {
  const s = Ut(e);
  t.forEach((n) => {
    const o = n.extras[e];
    if (o) {
      if (o.options || (o.options = {}), s.faces && o.faces)
        for (const r in o.faces)
          o.faces[r] === i && (o.faces[r] = !0);
      if (s.sides && o.sides)
        for (const r in o.sides)
          o.sides[r] === i && (o.sides[r] = !0);
    }
  });
}, lg = (t, e, i, s = !1) => {
  const n = Ut(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const o = a.extras[e];
  o.options || (o.options = {});
  const r = o.options;
  if (Il(e) && (o.faces || (o.faces = {}), r.faces || (r.faces = {})), Pl(e) && (o.sides || (o.sides = {}), r.sides || (r.sides = {})), s) {
    if (n.faces && o.faces) {
      for (const l in o.faces) {
        const c = o.faces[l];
        typeof c == "string" && (o.faces[l] = c.trim() !== "");
      }
      r.faces && Object.keys(r.faces).forEach((l) => {
        l !== "all" && delete r.faces[l];
      });
    }
    if (n.sides && o.sides) {
      for (const l in o.sides) {
        const c = o.sides[l];
        typeof c == "string" && (o.sides[l] = c.trim() !== "");
      }
      r.sides && Object.keys(r.sides).forEach((l) => {
        l !== "all" && delete r.sides[l];
      });
    }
  } else
    n.faces && r.faces, n.sides && r.sides;
}, wi = (t, e, i, s = [], n = []) => {
  const a = sg(i, n);
  lg(t, e, a === "boolean" ? [] : s, a === "boolean");
}, cg = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], o = _a(e), r = Object.keys(i), l = Math.max(...r.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of o) {
    const { extraContainer: f } = ag(t, e, u), { key: p } = yi(u), g = f[p];
    if (!g)
      continue;
    let x;
    if (typeof g == "object" && !Array.isArray(g) && g !== null)
      if ("value" in g && typeof g.value == "string") {
        const $ = g.value;
        x = $.includes("|") ? $.split("|") : [$];
      } else
        x = Object.values(g).filter(($) => $ != null && $ !== "" && $ !== !1).map(($) => String($));
    else typeof g == "string" ? x = g.includes("|") ? g.split("|") : [g] : typeof g == "boolean" ? x = g ? ["true"] : [] : x = [String(g)];
    const R = x.length;
    if (R === 0)
      continue;
    let D = !1, I = !1, P = "";
    if (R > 0) {
      if (s)
        try {
          const $ = x.filter((N) => N.trim() !== ""), S = s(e, $);
          I = S !== null && S > 0;
        } catch ($) {
          console.error("[validateExtrasCompleteness] Error getting price:", $), I = !1;
        }
      else {
        const $ = x.join("|");
        I = r.some((S) => S === $ || S.startsWith($ + "|"));
      }
      if (R < l) {
        D = !0;
        const $ = x.join("|");
        if (r.some((N) => N.startsWith($ + "|")) && !I) {
          const N = l - R, _ = x.join(", ");
          P = `${e} selection incomplete for ${u}. Selected: "${_}" but ${N} more level${N > 1 ? "s" : ""} required.`;
        }
      }
      !I && !D && (P = `${e} selection invalid for ${u}. No pricing available for "${x.join(", ")}".`);
    }
    R > 0 && !I && (a.push(u), n.push(P || `${e} pricing incomplete for ${u}: ${R}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, ug = (t, e, i) => {
  if (!i || !i[e])
    return { valid: !0, violations: [] };
  const s = i[e], n = [], a = (r, l, c) => {
    l == null || c === void 0 || (c.min !== void 0 && l < c.min && n.push({
      dimension: r,
      value: l,
      constraint: "min",
      limit: c.min
    }), c.max !== void 0 && l > c.max && n.push({
      dimension: r,
      value: l,
      constraint: "max",
      limit: c.max
    }));
  };
  a("longSide", t.longSide, s.longSide), a("shortSide", t.shortSide, s.shortSide);
  const o = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(o) || a("t", o, s.t), {
    valid: n.length === 0,
    violations: n,
    message: s.message
  };
}, dg = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
}, fg = { id: "mini-stock-nav" }, hg = ["onMousedown"], pg = { class: "id" }, gg = /* @__PURE__ */ De({
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
    activeStockAutoId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = (a) => {
      s("show-stock", a);
    };
    return (a, o) => (w(), A("div", fg, [
      (w(!0), A(Te, null, Ve(i.stockList, (r, l) => (w(), A("button", {
        type: "button",
        key: l,
        class: Ce(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockAutoId }]),
        style: et({
          backgroundColor: r.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(r.autoId)
      }, [
        O("div", pg, Q(l + 1), 1),
        fs(O("div", { class: "stack legibility" }, Q(r.stack), 513), [
          [dn, typeof r?.stack == "number" && r.stack > 1]
        ])
      ], 46, hg))), 128))
    ]));
  }
});
function mg(t) {
  const e = t.x, i = t.x + t.l, s = Ft().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, o = Ft().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(Hs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(Hs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(Us(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(Us(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function bg() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(ur(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(dr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Cl(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, o] = s;
    i === "x" ? yg.call(this, a, o, e[n]) : vg.call(this, a, o, e[n]);
  });
}
function yg(t, e, i) {
  const s = Ft().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = Tl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Hs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function vg(t, e, i) {
  const s = Ft().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = Tl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Us(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  wg(a), this.axes.cutMeasurementYAxes.push(a);
}
function Tl(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function wg(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function us() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Sg() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function An() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Al(t) {
  return t.autoId;
}
function xg(t, e) {
  const i = /* @__PURE__ */ new Set();
  function s(n) {
    if (!(!n || i.has(n.autoId))) {
      if (i.add(n.autoId), n.autoId === e)
        return n;
      if (n.children && Array.isArray(n.children)) {
        for (const a of n.children)
          if (a && a.autoId !== n.autoId) {
            const o = s(a);
            if (o) return o;
          }
      }
    }
  }
  return s(t);
}
function Ls({ parent: t, near: e, far: i }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, i].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, Al).join(
    (n) => n.append("rect").attr("class", "segment").call((a) => Bo.call(this, a)),
    (n) => n.call((a) => Bo.call(this, a)),
    (n) => n.remove()
  ), this.state.env === "development" && kg.call(this, s), !this.settings.app && this.state.env === "development" && Ig.call(this);
}
function Bo(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function kg(t) {
  this.selections.segmentGroup.selectAll("text").data(t, Al).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => jo.call(this, i)),
    (e) => e.call((i) => jo.call(this, i)),
    (e) => e.remove()
  );
}
function jo(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Ig() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Ol(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = xg(n, e), i) break;
  } else {
    const n = t?.stock?.autoId;
    i = this.props.segments.value.find((a) => a.stock?.autoId === n);
  }
  if (i === void 0)
    return !1;
  const s = i?.children;
  return s?.length ? {
    parent: i,
    children: s
  } : !1;
}
const { currentCutIndex: $l } = Ba();
function Pg() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => No.call(this, e)),
    (t) => t.call((e) => No.call(this, e)),
    (t) => t.remove()
  ), El.call(this));
}
function No(t) {
  return t.attr("stroke-width", (e) => {
    const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return i < 1 ? 1 : Math.ceil(i);
  }).attr("x1", (e) => {
    let i = e.x1;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.x1 === e.x2 && (i = e.x1 < e.stock.l / 2 ? e.x1 - s : e.x1 + s);
    }
    return this.scales.xPositionScale(i);
  }).attr("x2", (e) => {
    let i = e.x2;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.x1 === e.x2 && (i = e.x2 < e.stock.l / 2 ? e.x2 - s : e.x2 + s);
    }
    return this.scales.xPositionScale(i);
  }).attr("y1", (e) => {
    let i = e.y1;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.y1 === e.y2 && (i = e.y1 < e.stock.w / 2 ? e.y1 - s : e.y1 + s);
    }
    return this.scales.yPositionScale(i);
  }).attr("y2", (e) => {
    let i = e.y2;
    if (e.isTrim && e.stock?.cutType === "beam") {
      const s = this.getBladeWidth(e.stock) / 2;
      e.y1 === e.y2 && (i = e.y2 < e.stock.w / 2 ? e.y2 - s : e.y2 + s);
    }
    return this.scales.yPositionScale(i);
  }).classed("trim", (e) => e.isTrim).classed("head", (e) => e.isHead);
}
function Fl(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function Ll(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function Cg(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), $l.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || Ag.call(this, t, e);
}
function Tg(t, e, i, s, n) {
  this.selections.cutLines.style("visibility", (o, r) => r <= e ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o, r) => r <= e ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o, r) => r <= e ? "visible" : "hidden"));
  let a;
  if (t?.dimension === "l" ? a = [
    [0 + (i.l1 ?? 0), t.y1 - n],
    [t.y1 + n, t.stock.w - (i?.y2 ? i.y2 : 0)]
  ] : t?.dimension === "w" && (a = [
    [0 + (i.w1 ?? 0), t.x1 - n],
    [t.x1 + n, t.stock.l - (i?.x2 ? i.x2 : 0)]
  ]), a?.length) {
    const o = [
      a[0][1] - a[0][0],
      a[1][1] - a[1][0]
    ];
    this.state.device === "desktop" && !t.isTrim && Cl.call(this, a, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, r) => r === e);
}
function El() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), us.call(this), An.call(this);
}
function Ag(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (f) => Fl(f, e, i)), this.selections.cutLines.classed("inside-segment", (f) => Ll(f, e));
  const s = Ol.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: o } = Dl(t, a);
  if (!o) return;
  let r = [], l;
  const c = this.getHalfBladeWidth(t.stock), u = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (r = [
    [
      o.y,
      o.y + o.w
    ],
    [
      t.y1 + c,
      n.y + n.w
    ]
  ], l = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (r = [
    [
      o.x,
      o.x + o.l
    ],
    [
      t.x1 + c,
      n.x + n.l
    ]
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && Cl.call(this, r, l, u);
}
function Og(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const g = this.props.cuts.value.filter((x) => x.isTrim);
    t = t + g.length, t - g.length >= this.props.cuts.value.length - g.length && ($l.value = this.props.cuts.value.length - g.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (us.call(this), An.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const g = this.selections.cutLines.nodes()[t].parentElement;
    if (!g) return;
    ot(g).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", o = i?.stock?.trim, r = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? Cg.call(this, i, s, r, e) : Tg.call(this, i, t, o, a, n), $g.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = Ol.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return Ls.call(this, { parent: c });
  const { near: f, far: p } = Dl(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const g = u.find((D) => D.offcut === !0 && D.x === 0 && D.l === i.stock?.trim?.l1), x = u.find((D) => D.type === "near" && D !== g), R = u.find((D) => D.type === "far" && D !== g && D.phase > c.phase);
      if (g)
        return Ls.call(this, { parent: g, near: x, far: R });
    } else if (i.beamTrimW1) {
      const g = u.find((D) => D.offcut === !0 && D.y === 0 && D.w === i.stock?.trim?.w1);
      let x = u.find((D) => D.type === "near" && D !== g);
      const R = u.find((D) => D.type === "far" && D !== g && D.y > (g?.y || 0));
      if (x && i.stock && (x = {
        ...x,
        x: 0,
        l: i.stock.l
      }), g)
        return Ls.call(this, { parent: g, near: x, far: R });
    }
  }
  Ls.call(this, { parent: c, near: f, far: p });
}
function Dl(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((o) => o.type === "near" && o[i] + o[s] === t[i + "1"] - t.stock.halfBladeWidth), a = e.find((o) => o.type === "far" && o[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: a };
}
function $g(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(a));
    const r = t?.guillotineState?.segmentCutOrder;
    return (Fl(s, i, r) || Ll(s, i)) && (o += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Fg(t) {
  if (!this.props.stock || !t || !this.settings.main) return !1;
  let e;
  if (!t.willItFit(this.props.stock.value, t.rot)) return !1;
  const i = vp(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let a = function(c) {
        return `${c.x1}-${c.y1}-${c.x2}-${c.y2}`;
      }, o = function(c) {
        c.attr("class", "ray").attr("x1", (u) => this.scales.xPositionScale(u.x1)).attr("x2", (u) => this.scales.xPositionScale(u.x2)).attr("y1", (u) => this.scales.yPositionScale(u.y1)).attr("y2", (u) => this.scales.yPositionScale(u.y2));
      };
      if (this.state.env !== "development") return;
      const l = vl(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(l, a).join(
        (c) => c.append("line").call((u) => o.call(this, u)),
        (c) => c.call((u) => o.call(this, u)),
        (c) => c.remove()
      );
    }
    s = wp(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new ni();
  for (const a of i.toArray()) {
    const o = wl(t, a, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const a = s.toArray();
    for (const o of a) {
      const r = bp(t, o, this.props.stock.value);
      r && n.addPoints(r.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new tt(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new tt(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new tt(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      0 + (this.props.stock.value.trim.w1 ?? 0)
    ),
    new tt(
      0 + (this.props.stock.value.trim.l1 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    ),
    new tt(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    )
  ].forEach((a) => n.add(a)), e = n.toArray()) : (n.add(new tt(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = n.toArray());
  for (let a = e.length; a--; ) {
    const o = e[a];
    t.x = o.x, t.y = o.y;
    for (const r of this.props.shapes.value)
      if (this.collision(t, r, this.props.stock.value)) {
        e.splice(a, 1);
        break;
      }
  }
  return Lg.call(this, e, t), Eg.call(this, e, t), !!e?.length;
}
function Lg(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n, a) {
    n.attr("data-id", (o, r) => r).attr("class", "shape ghost").attr("x", (o) => (a.x = o.x, this.getRectangleCoordinate(a, "x"))).attr("y", (o) => (a.y = o.y, this.getRectangleCoordinate(a, "y"))).attr("width", this.getWidthAttribute(a)).attr("height", this.getHeightAttribute(a)).on("mousedown", (o, r) => {
      this.callbacks.onMoveShape(a, r);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(t, i).join(
    (n) => n.append("rect").call((a) => s.call(this, a, e)),
    (n) => n.call((a) => s.call(this, a, e)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), ot(this).classed("hover", !0), ot(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ot(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Eg(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n) {
    n.attr("class", "dot").attr("cx", (a) => this.scales.xPositionScale(a.x)).attr("cy", (a) => this.scales.yPositionScale(a.y)).attr("r", 6).on("mousedown", (a, o) => {
      this.callbacks.onMoveShape(e, o);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(t, i).join(
    (n) => n.append("circle").call((a) => s.call(this, a)),
    (n) => n.call((a) => s.call(this, a)),
    (n) => n.remove()
  ), e.x = 0, e.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), ot(this).classed("hover", !0);
      const a = ot(this).attr("data-id"), o = ot(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), ot(this).classed("hover", !1);
      const a = ot(this).attr("data-id");
      ot(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Dg() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Vo.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => Vo.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Go.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => Go.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => qo.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => qo.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => zo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${r})`;
    }),
    (t) => t.text((e) => zo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${r})`;
    })
  );
}
function Vo(t) {
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const e = t.guillotineState.myStripDirection, i = t.group.addedAsGroup;
          let s = "";
          if (e === "l" ? s = `→ ${t.id}` : e === "w" && (s = `↑ ${t.id}`), t?.priority?.[t?.stock?.parentId] && (s += "P"), i && (s += "G"), s.length) return s;
        }
        break;
      case "groups":
        {
          const e = t.group.reference, i = t.group.addedAsGroup;
          let s = null;
          if (e?.id ? s = e.id : i && (s = i.split(".")[0]), s) {
            const n = s.replace(/-[hv]$/, "").toUpperCase();
            return s.endsWith("-h") ? `→ ${n}` : s.endsWith("-v") ? `↑ ${n}` : n;
          }
        }
        break;
      case "positions":
        return t.id;
      case "placementOrder":
        return t.placementOrder?.toString() || "";
    }
  return t.parentId, t.parentId;
}
function Go(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function qo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : U({ v: t.l, o: this.numberConfig }).toString();
}
function zo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : U({ v: t.w, o: this.numberConfig }).toString();
}
const Rg = (t) => t.id;
function _g() {
  if (!this.props.containerWidth) return;
  us.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Bg.call(this), Mg.call(this);
}
function Mg() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Rg).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Wo.call(this, e), Ho.call(this, e), e.on("mousedown", Uo.bind(this)), e;
    },
    (t) => (Wo.call(this, t), Ho.call(this, t), t.on("mousedown", Uo.bind(this)), t),
    (t) => t.remove()
  ), zg.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Dg.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Bg() {
  let t = 1 / 0, e = -1 / 0;
  for (const n of this.props.shapes.value) {
    const a = n?.bestScore?.total;
    if (a !== 0 && a !== null && a !== void 0) {
      t = a, e = a;
      break;
    }
  }
  const i = this.props.shapes.value.reduce((n, a) => {
    const o = a?.bestScore?.total;
    return o === 0 || o === null || o === void 0 ? n : o < n ? o : n;
  }, t), s = this.props.shapes.value.reduce((n, a) => {
    const o = a?.bestScore?.total;
    return o == null ? n : o > n ? o : n;
  }, e);
  this.scales.scoreColorScale = os([Nt(251, 224, 255), Nt(122, 0, 138)]).domain([i, s]);
}
function Wo(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => ds.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = fr(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Ho(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = ot(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = ot(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", ds.call(this, i));
  }, { passive: !0 });
}
function Uo(t, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && jg.call(this, t, e), (this.settings.app || this.settings.embed) && Gg.call(this, t, e), this.state.device === "desktop" && (An.call(this), mg.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
}
function jg(t, e) {
  if (console.clear(), e) {
    let i;
    switch (this.state.debug) {
      case "guillotine":
        i = [
          "id",
          "placementOrder",
          "priority",
          "guillotineState.myPhase",
          "guillotineState.myStripDirection",
          "guillotineState.myStripParent",
          "group.addedAsGroup"
        ], Vg.call(this, e);
        break;
      case "groups":
        i = ["id", "placementOrder", "group.addedAsGroup", "group.reference"];
        break;
      case "score":
        i = ["id", "placementOrder", "bestScore.score"];
        break;
      default:
        i = ["id", "placementOrder", "priority", "group.addedAsGroup", "bestScore.score", "upDirection"];
    }
    console.table(Ng(e, i));
  }
}
function Ng(t, e) {
  return e.reduce((i, s) => {
    const n = Kg(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function Vg(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Gg(t, e) {
  if (this.settings.app || this.settings.embed) {
    const i = {
      name: e.name,
      id: e.id,
      x: e.x,
      y: e.y,
      l: e.l,
      w: e.w,
      banding: e?.extras?.banding && typeof e.extras.banding == "object" ? e.extras.banding : null,
      rot: e.rot,
      stock: e?.stock?.id,
      color: ds.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function ds(t) {
  const e = Nt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return Nt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return Nt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((r, l) => Math.round(r + t.guillotineState.myPhase / 5 * (a[l] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return Nt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return Nt(139, 171, 46);
        break;
      case "placementOrder": {
        const n = this.props.shapes.value.reduce((a, o) => {
          const r = o.placementOrder ?? 0;
          return r > a ? r : a;
        }, 0);
        if (n > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], r = t.placementOrder / n;
          return `rgb(${a.map((c, u) => Math.round(c + r * (o[u] - c))).join(",")})`;
        }
        break;
      }
      case "score": {
        const n = t?.bestScore?.total ? this.scales.scoreColorScale(t.bestScore.total) : null;
        if (n != null && typeof n.toString == "function")
          return n;
        if (n != null && typeof n.r == "number" && typeof n.g == "number" && typeof n.b == "number")
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), Nt(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? Nt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
}
const Yo = 3;
function qg(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let o = n;
        if (i.rot) {
          const l = Br({ [n]: !0 }, "cc");
          o = Object.keys(l)[0];
        }
        const r = Wg.call(this, i, o);
        r && e.push(r);
      }
  }
  return e;
}
function Ko(t) {
  const e = Yo / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + Es.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + Es.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + Es.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + Es.call(this, i.type, "y", e)).attr("stroke-width", Yo).attr("stroke", "white");
}
function zg(t) {
  if (!this.settings.main) return;
  const e = qg.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Ko.call(this, s)),
    (i) => i.call((s) => Ko.call(this, s)),
    (i) => i.remove()
  );
}
function Es(t, e, i) {
  return {
    l1: { x: 0, y: (this.flipY, -i) },
    // length side 1 (bottom): move up in screen space (inward)
    l2: { x: 0, y: (this.flipY, i) },
    // length side 2 (top): move down in screen space (inward)
    w1: { x: this.flipX ? -i : i, y: 0 },
    // width side 1 (left): move right (inward)
    w2: { x: this.flipX ? i : -i, y: 0 }
    // width side 2 (right): move left (inward)
  }[t]?.[e] ?? 0;
}
function Wg(t, e) {
  const i = {
    l1: t.x,
    l2: t.x,
    w1: t.y,
    w2: t.y,
    type: e
  };
  switch (e) {
    case "l1":
      i.w1 = i.w2 = t.y, i.l2 = t.x + t.l;
      break;
    case "l2":
      i.w1 = i.w2 = t.y + t.w, i.l2 = t.x + t.l;
      break;
    case "w1":
      i.l1 = i.l2 = t.x, i.w2 = t.y + t.w;
      break;
    case "w2":
      i.l1 = i.l2 = t.x + t.l, i.w2 = t.y + t.w;
      break;
    default:
      return null;
  }
  return i;
}
function Hg(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Zo = (t) => t.id;
function Xo(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Jo(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Ug() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), bg.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Zo).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Xo.call(this, e)),
    (t) => t.call((e) => Xo.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Zo).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => Jo.call(this, e)),
    (t) => t.call((e) => Jo.call(this, e)),
    (t) => t.remove()
  );
}
function Yg(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function Kg(t, e) {
  return _e(t, e);
}
class Zg {
  config;
  props;
  settings;
  options;
  numberConfig;
  callbacks;
  selections;
  state;
  scales;
  axes;
  constructor(e) {
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = ot(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: Ft(),
      yScale: Ft(),
      yPositionScale: Ft(),
      xPositionScale: Ft(),
      yAxisScale: Ft(),
      measurementScale: Ft(),
      shapeColorScale: os(),
      scoreColorScale: os()
    }, this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    }, this.state = {
      env: "production",
      device: "desktop",
      debug: "",
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
    const i = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, s = (n, a) => Nt("#" + (Yg(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = os([
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
      const i = this.selections.el.append("svg").attr("class", "vis");
      if (i === null) return;
      i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), i.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = i;
    } else
      this.selections.svgCanvas = ot(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, i, s) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), i && (this.numberConfig.decimalPlaces = i), s && (this.numberConfig.fractionRoundTo = s));
  }
  formatNumber = (e) => {
    const i = U({
      v: e,
      o: this.numberConfig
    });
    if (i !== null) return i.toString();
  };
  trimNameToFit(e, i) {
    function s(n, a, o) {
      const r = o[a], l = ot(r);
      l.text(n.name);
      let c = l.text();
      const u = l.node();
      if (!u) return;
      let f = u.getComputedTextLength();
      const p = this.getWidthAttribute(n) - 20;
      for (; f > p && c.length > 0; )
        c = c.slice(0, -1), l.text(c.length ? c + "..." : ""), f = l.node().getComputedTextLength();
    }
    e.each(s.bind(i));
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
    const i = e.reduce((n, a) => n.l > a.l ? n : a), s = e.reduce((n, a) => n.w > a.w ? n : a);
    return [i, s];
  }
  debounce(e, i, s = !1) {
    let n;
    return (...a) => new Promise((o) => {
      const r = () => {
        n = null, s || o(e.apply(this, a));
      };
      clearTimeout(n), s && !n && o(e.apply(this, a)), n = setTimeout(r, i);
    });
  }
  requiresStretch(e, i = null) {
    return e ? (i === null && (i = e.w / e.l), i < 0.15) : !1;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value || !this.selections.htmlEl) return;
    const e = this.props.stock.value, i = this.props.containerWidth.value;
    if (i <= 0) return;
    const s = i - 2 * this.state.padding;
    if (s <= 0) return;
    this.scales.xScale.domain([0, e.l]), this.scales.yScale.domain([0, e.w]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, e.w] : [e.w, 0]), this.scales.xPositionScale.domain([0, e.l]), this.scales.yPositionScale.domain([0, e.w]), this.scales.measurementScale.domain([0, e.l]);
    const n = e.l > 0 ? s * e.w / e.l : 0;
    this.state.w = s + 2 * this.state.padding, this.state.h = n + 2 * this.state.padding;
    const a = e.l > 0 ? e.w / e.l : 0;
    this.state.stretched = !1, this.requiresStretch(e, a) && this.options.enableStretch && (this.state.h = i * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
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
    const i = this.selections.shapeWrappers.filter((s) => s.id === e);
    return i.empty() ? null : i.node();
  }
  findShape(e) {
    const i = this.findShapeElement.call(this, e);
    i && this.selectShape.call(this, i);
  }
  selectShape(e) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => ds.call(this, s));
    const i = ot(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = ot(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    _g.call(this);
  }
  drawStock() {
    Ug.call(this);
  }
  drawCuts() {
    Pg.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(e) {
    return e?.l ? this.scales.xScale(e.l) - this.state.padding : 0;
  }
  getHeightAttribute(e) {
    return e?.w ? this.scales.yScale(e.w) - this.state.padding : 0;
  }
  getRectangleCoordinate(e, i, s, n) {
    let a;
    if (i === "x") {
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
      a = o;
    } else if (i === "y") {
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
      a = o;
    }
    return a;
  }
  // Blade Width Methods
  getBladeWidth(e = null) {
    return ye(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const i = e.bladeWidth;
    return i !== void 0 && i > 0 ? i / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), us.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Sg.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), An.call(this);
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
  collision(e, i, s) {
    if (e.id === i.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      e.x < i.x + i.l + this.getBladeWidth(s) && // 2 right
      e.x + e.l + this.getBladeWidth(s) > i.x && // 3 bottom
      e.y < i.y + i.w + this.getBladeWidth(s) && // 4 top
      e.y + e.w + this.getBladeWidth(s) > i.y
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
  isTextHidden(e, i, s) {
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), o = this.scales.measurementScale(e.l), r = this.scales.yScale(e.w);
    return a.width >= o || a.height >= r - this.state.padding;
  }
  isNameHidden(e, i, s) {
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), o = this.scales.measurementScale(e.l), r = this.scales.measurementScale(e.w);
    return a.width >= o || r < 40;
  }
  isLengthHidden(e, i, s) {
    if (this.settings.app) {
      const l = this.scales.measurementScale(e.l), c = this.scales.measurementScale(e.w);
      return l < 50 || c < 50;
    }
    if (e?.stock?.saw?.stockType === "linear") return !1;
    const n = s[i];
    if (!n) return !0;
    const a = n.getBBox(), o = this.scales.measurementScale(e.l), r = this.scales.measurementScale(e.w);
    return a.width >= o || r < 30;
  }
  isWidthHidden(e, i, s) {
    if (this.settings.app)
      return this.scales.measurementScale(e.l) < 50 || this.scales.measurementScale(e.w) < 50;
    const a = s[i].getBBox();
    return this.scales.measurementScale(e.l) < 30 || a.height >= this.scales.measurementScale(e.w);
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
  						parentId: s.parentId,
  						addedAsGroup: s.group.addedAsGroup
  					} ) )
  				} );
  			} );
  	}
  } */
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => ds.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    us.call(this);
  }
  updateShapeVisibility() {
    Hg.call(this);
  }
  drawPositions(e) {
    Fg.call(this, e);
  }
  showCut(e) {
    Og.call(this, e);
  }
  resetCuts() {
    El.call(this);
  }
}
const Xg = ["id"], Jg = /* @__PURE__ */ De({
  __name: "Diagram",
  props: {
    elementId: {},
    app: { type: Boolean, default: !1 },
    embed: { type: Boolean },
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: !0 },
    stockAutoId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: !1 },
    enableStretch: { type: Boolean, default: !0 },
    moveMode: { default: () => te(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "part-click", "resize"],
  setup(t, { expose: e, emit: i }) {
    const {
      r: s,
      activeStock: n,
      activeShapes: a,
      activeCuts: o,
      activeSegments: r,
      currentCutIndex: l,
      getStock: c,
      getShapes: u,
      getSegments: f,
      getCuts: p
    } = Ba(), g = t, x = i, R = (J) => {
      x("part-click", J);
    }, D = (J) => {
      x("shape-colour-update", J);
    }, I = (J, We) => {
      J?.autoId && x("shape-select", J.autoId, We);
    }, P = (J) => {
      J && x("add-to-parts-bin", J);
    }, $ = (J, We) => {
      J && x("move-shape", J, We);
    }, S = te(0), N = te(0), _ = te(null);
    let F, H = te(!1);
    const j = mt({
      debug: ""
    });
    Ht(() => W());
    const m = X(() => ({
      format: g.numberFormat,
      decimals: g.decimalPlaces
    })), M = X(() => g.stockAutoId ? c(g.stockAutoId) : n.value), K = X(() => g.stockAutoId ? u(g.stockAutoId) : a.value), oe = X(() => g.main ? g.stockAutoId ? p(g.stockAutoId) : o.value : []), C = X(() => g.main ? g.stockAutoId ? f(g.stockAutoId) : r.value : []);
    or(_, (J) => {
      const We = J[0], { width: it, height: ri } = We.contentRect;
      it > 0 && (S.value = it), x("resize", { width: it, height: ri });
    }), gc(
      S,
      (J) => {
        F && (J <= 0 || (F.setDevice(), F.resetShapeAxes(), F.drawAll(), l.value !== null && (F.toggleSegments(!0), F.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let B = !1;
    je(() => M.value, (J) => {
      J && (S.value <= 0 || (B = !0, F.setDevice(), F.resetCuts(), F.removeSegments(), F.drawStock(), F.drawShapes(), F.drawCuts(), bt(() => B = !1)));
    }, { immediate: !1 }), je(() => K.value, (J) => {
      B || J && (S.value <= 0 || (F.setDevice(), F.drawShapes()));
    }, { immediate: !1, deep: !0 }), g.main && (je(() => oe.value, () => {
      B || S.value <= 0 || F.drawCuts();
    }, { immediate: !1, deep: !0 }), je(l, () => {
      l.value !== null && (S.value <= 0 || (F.toggleSegments(!0), F.showCut(l.value)));
    }, { immediate: !1 }), je(m, (J) => {
      F.updateNumberFormat(J.format, J.decimals, null);
    }, { immediate: !1 }));
    const W = () => {
      const J = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${g.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: g.numberFormat,
          decimalPlaces: g.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: g.colors || null,
        settings: {
          main: g.main,
          app: g.app,
          embed: g.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: N,
          containerWidth: S,
          stock: M,
          shapes: K,
          cuts: oe,
          segments: C,
          stockList: s.stockList,
          moveMode: g.moveMode,
          app: g.app
        },
        options: {
          disableClick: g.disableClick,
          enableStretch: g.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: D,
          onShapeSelect: I,
          onAddToPartsBin: P,
          onMoveShape: $,
          onPartClick: R
        }
      };
      F = new Zg(J), j.debug = F.state.debug, H.value = !0;
    }, G = (J = !1) => {
      F && F.toggleShapes(J);
    }, q = (J = !1) => {
      F && F.toggleCuts(J);
    }, le = (J = !1) => {
      F && F.toggleSegments(J);
    }, me = () => {
      F && F.drawShapes();
    }, ge = () => {
      F && F.drawStock();
    }, Se = () => {
      F && (F.toggleSegments(!1), F.resetCuts());
    }, Oe = (J) => {
      F && (F.toggleSegments(!0), F.showCut(J));
    }, Z = (J) => {
      F && F.drawPositions(J);
    }, ct = () => {
      F && F.removePositions();
    }, ai = (J) => {
      F && F.findShape(J);
    }, oi = () => {
      F && F.clearSelection();
    }, ut = (J) => {
      F && F.requiresStretch(J);
    };
    return je(() => j.debug, (J) => {
      F?.state && (F.state.debug = J);
    }), e({
      loaded: H,
      toggleShapes: G,
      toggleCuts: q,
      toggleSegments: le,
      drawShapes: me,
      drawStock: ge,
      drawPositions: Z,
      resetPositions: ct,
      findShape: ai,
      clearSelection: oi,
      resetCuts: Se,
      showCut: Oe,
      requiresStretch: ut,
      state: j
    }), (J, We) => (w(), A("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: _,
      class: Ce([{ app: t.app }, "diagram-container"])
    }, null, 10, Xg));
  }
}), Qg = { class: "action-menu" }, em = ["textContent"], tm = {
  key: 0,
  class: "menu-divider"
}, im = {
  key: 1,
  class: "group-label"
}, sm = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = t, s = e, { isOpen: n, close: a, toggle: o } = Tc(i.menuId), r = te(), l = te(), c = X(() => i.disabled), u = X(() => i.label), f = X(() => i.showLabel), p = X(() => i.icon), { floatingStyles: g } = mc(r, l, {
      placement: i.placement,
      whileElementsMounted: ru,
      middleware: [
        nu(i.offset),
        au(),
        ou({ padding: 8 })
      ]
    }), x = (m) => {
      if (!m) return ["fas", "question"];
      if (typeof m == "function" && (m = m(i)), Array.isArray(m))
        return m;
      if (typeof m == "string") {
        const M = m.split(" ");
        if (M.length >= 2) {
          const K = M[0], oe = M.slice(1).join("-").replace("fa-", "");
          return [K, oe];
        }
        return ["fas", m.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, R = X(() => x(p.value)), D = (m) => typeof m.active == "function" ? m.active(i) : typeof m.active == "boolean" ? m.active : !1, I = (m) => {
      if (!m.href) return !1;
      try {
        const M = typeof m.href == "function" ? m.href(i) : m.href;
        return new URL(M, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, P = (m) => m.href ? "a" : "div", $ = (m) => {
      const M = {};
      if (m.href) {
        const K = typeof m.href == "function" ? m.href(i) : m.href;
        if (M.href = K, I(m)) {
          const oe = typeof m.target == "function" ? m.target(i) : m.target;
          M.target = oe || "_blank", M.rel = m.rel || "noopener noreferrer";
        } else if (m.target) {
          const oe = typeof m.target == "function" ? m.target(i) : m.target;
          M.target = oe;
        }
        m.rel && (M.rel = m.rel);
      }
      return m.attrs && Object.assign(M, m.attrs), M;
    }, S = X(() => i.menuItems.map((m) => {
      const M = { ...m };
      return typeof m.href == "function" && (M.href = m.href(i)), typeof m.icon == "function" && (M.icon = m.icon(i)), typeof m.disabled == "function" && (M.disabled = m.disabled(i)), typeof m.label == "function" && (M.label = m.label(i)), typeof m.variant == "function" && (M.variant = m.variant(i)), typeof m.active == "function" && (M.active = m.active(i)), typeof m.target == "function" && (M.target = m.target(i)), typeof m.show == "function" && (M.show = m.show(i)), M;
    })), N = (m) => {
      m.stopPropagation(), m.preventDefault(), !c.value && o();
    }, _ = (m, M) => {
      if (M.stopPropagation(), m.disabled && !m.href) {
        M.preventDefault();
        return;
      }
      if (typeof m.action == "function" && m.action(m) === !1 && m.href) {
        M.preventDefault();
        return;
      }
      s("action", {
        id: m.id,
        item: m
      }), m.href && i.closeOnLinkClick ? a() : m.href || a();
    }, F = (m) => {
      const M = [];
      if (m.variant) {
        const oe = typeof m.variant == "function" ? m.variant(i) : m.variant;
        M.push(`variant-${oe}`);
      }
      if ((typeof m.disabled == "function" ? m.disabled(i) : m.disabled) && !m.href && M.push("disabled"), D(m) && M.push("active"), m.href && M.push("menu-link"), I(m) && M.push("external-link"), m.class) {
        const oe = typeof m.class == "function" ? m.class(i) : m.class;
        M.push(oe);
      }
      return M.join(" ");
    }, H = (m) => {
      const M = m.target;
      n.value && r.value && l.value && !r.value.contains(M) && !l.value.contains(M) && a();
    }, j = (m) => {
      m.key === "Escape" && n.value && a();
    };
    return Ht(() => {
      document.addEventListener("click", H), document.addEventListener("keydown", j);
    }), hs(() => {
      document.removeEventListener("click", H), document.removeEventListener("keydown", j);
    }), (m, M) => (w(), A("div", Qg, [
      O("div", {
        ref_key: "trigger",
        ref: r,
        onClick: N,
        class: Ce(["actions-btn", { active: k(n), disabled: c.value }])
      }, [
        p.value ? (w(), ke(k(zs), {
          key: 0,
          icon: R.value,
          class: "icon"
        }, null, 8, ["icon"])) : Y("", !0),
        f.value ? (w(), A("span", {
          key: 1,
          class: "label",
          textContent: Q(u.value)
        }, null, 8, em)) : Y("", !0)
      ], 2),
      (w(), ke(Ma, { to: "body" }, [
        k(n) && !c.value ? (w(), A("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: et(k(g)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: M[0] || (M[0] = rr(() => {
          }, ["stop"]))
        }, [
          (w(!0), A(Te, null, Ve(S.value, (K, oe) => (w(), A(Te, { key: oe }, [
            K.type === "divider" ? (w(), A("div", tm)) : K.type === "group" ? (w(), A("div", im, Q(K.label), 1)) : K.show !== !1 ? (w(), ke(bc(P(K)), ki({
              key: 2,
              ref_for: !0
            }, $(K), {
              onClick: (C) => _(K, C),
              id: K.id,
              class: ["menu-item", F(K)],
              disabled: K.disabled && !K.href
            }), {
              default: Ti(() => [
                K.icon || D(K) ? (w(), ke(k(zs), {
                  key: 0,
                  icon: D(K) ? ["fass", "check"] : x(K.icon)
                }, null, 8, ["icon"])) : Y("", !0),
                O("span", null, Q(K.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : Y("", !0)
          ], 64))), 128))
        ], 4)) : Y("", !0),
        k(n) && !c.value ? (w(), A("div", {
          key: 1,
          class: "backdrop",
          onClick: M[1] || (M[1] = //@ts-ignore
          (...K) => k(a) && k(a)(...K))
        })) : Y("", !0)
      ]))
    ]));
  }
}), Qo = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = za(t);
      return {
        value: t,
        valid: s || n
      };
    } else {
      const n = /^-?\d*\.?\d*$/.test(t);
      if (n && t !== "" && t !== "-" && t !== "." && !t.endsWith(".")) {
        const a = parseFloat(t);
        if (!isNaN(a))
          return {
            value: a,
            valid: !0
          };
      }
      return {
        value: t,
        // Keep as string for partial inputs
        valid: n
      };
    }
  if (e === "integer") {
    const n = /^-?\d*$/.test(t);
    if (n && t !== "" && t !== "-") {
      const a = parseInt(t, 10);
      if (!isNaN(a))
        return {
          value: a,
          valid: !0
        };
    }
    return {
      value: t,
      // Keep as string for partial inputs
      valid: n
    };
  }
  if (e === "float") {
    const n = /^-?\d*\.?\d*$/.test(t);
    if (n && t !== "" && t !== "-" && t !== "." && !t.endsWith(".")) {
      const a = parseFloat(t);
      if (!isNaN(a))
        return {
          value: a,
          valid: !0
        };
    }
    return {
      value: t,
      // Keep as string for partial inputs
      valid: n
    };
  }
  return { value: t, valid: !0 };
};
function nm({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = te({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (r, l = !1) => {
    if (r == null || r === "") {
      const u = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : sd(r, "decimal", u);
    }
    const c = String(r);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return Qo(c, t.type, t.numberFormat);
        try {
          const u = U({
            v: r,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let f = u, p = !0, g;
            return typeof t.min == "number" && f < t.min && (f = t.min, p = !1, g = "below_min"), typeof t.max == "number" && f > t.max && (f = t.max, p = !1, g = "above_max"), { value: f, valid: p, message: g };
          }
          return { value: u, valid: !0 };
        } catch (u) {
          return console.warn("Error converting value:", u), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (l)
          return Qo(c, t.type);
        try {
          const f = U({
            v: r,
            nf: "decimal"
          });
          if (f === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let p = f;
          if (t.type === "integer" && (p = Math.round(p)), t.allowZero === !1 && p === 0)
            return {
              value: p,
              valid: !1,
              message: "zero_not_allowed"
            };
          let g = !0, x;
          return typeof t.min == "number" && p < t.min && (p = t.min, g = !1, x = "below_min"), typeof t.max == "number" && p > t.max && (p = t.max, g = !1, x = "above_max"), { value: p, valid: g, message: x };
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
  }, a = (r, l = !1) => l && t.type === "unitDependent" && t.numberFormat === "fraction" ? !1 : l && (t.type === "integer" || t.type === "float" || t.type === "unitDependent" && t.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : r.valid ? !0 : r.message === "zero_not_allowed" ? !1 : r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !t.disableRequiredValidation;
  return {
    state: s,
    ...{
      //Handler to set the flag on mouse down
      handleMouseDown: () => {
        i.value && (s.value.isMouseDown = !0);
      },
      //Handler to reset the flag on mouse up
      handleMouseUp: () => {
        i.value && (s.value.isMouseDown = !1);
      },
      handleInput: (r) => {
        if (!i.value) return;
        const l = r.target;
        if (s.value.isMouseDown) {
          const u = n(l.value, !1);
          a(u, !1) && (e("update:value", u.value), e("validation", u, t.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const c = n(l.value, !0);
        e("validation", c, t.id), e("input", l.value), a(c, !0) && e("update:value", c.value);
      },
      handleBlur: (r) => {
        if (!i.value) return;
        s.value.isTyping = !1;
        const l = r.target, c = n(l.value, !1);
        e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("blur", r);
      },
      handleFocus: (r) => {
        i.value && (s.value.isTyping = !0, e("focus", r));
      },
      handleKeydown: (r) => {
        if (i.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(r.key))
            if (t.type === "unitDependent" && t.numberFormat === "fraction") {
              const l = r.target, c = l.value, u = l.selectionStart || 0, f = c.substring(0, u);
              if (r.key === "/" && c.includes("/")) {
                r.preventDefault();
                return;
              }
              if (r.key === " " && /\s$/.test(f)) {
                r.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(r.key) || r.preventDefault();
            } else (t.type === "integer" || t.type === "float") && ((t.type === "integer" ? /^[-0-9]$/.test(r.key) : /^[-0-9.]$/.test(r.key)) || r.preventDefault());
          if (r.key === "Enter") {
            s.value.isTyping = !1;
            const l = r.target, c = n(l.value, !1);
            e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("enter", c);
          }
          r.key === "Escape" && (s.value.isTyping = !1, e("escape"));
        }
      },
      // Better input pattern for HTML validation
      getInputPattern: () => {
        switch (t.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return t.numberFormat === "fraction" ? "-?([0-9]+( [0-9]+)?)?(/[0-9]+)?" : "-?[0-9]*\\.?[0-9]*";
          default:
            return;
        }
      },
      getInputMode: () => {
        switch (t.type) {
          case "integer":
            return "numeric";
          case "float":
            return "decimal";
          case "unitDependent":
            return t.numberFormat === "fraction" ? "numeric" : "decimal";
          default:
            return "text";
        }
      },
      handleCompositionStart: () => {
        s.value.isComposing = !0;
      },
      handleCompositionEnd: (r) => {
        s.value.isComposing = !1, s.value.isTyping = !1;
        const l = r.target, c = n(l.value, !1);
        e("validation", c, t.id), a(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? ""));
      },
      handlePaste: (r) => {
        if (!i.value) return;
        const l = r.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const c = l.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!za(c)) {
            r.preventDefault(), e("validation", {
              value: c,
              valid: !1,
              message: `Pasted text "${l}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (c !== l) {
            r.preventDefault();
            const u = r.target;
            u.value = c;
            const f = n(c, !0);
            e("validation", f, t.id), e("input", c);
          }
        }
        e("paste", r);
      }
    },
    processValue: n
  };
}
function am({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = te({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (a) => {
    if (!t?.output || t.output === "string")
      return {
        value: a,
        valid: !0
      };
    if (t.options && t.options.length > 0) {
      let o = a;
      return t.numberFormat && (t.numberFormat === "fraction" ? o = String(a) : o = Number(a)), t.options.some((l) => l.value === o) ? {
        value: o,
        valid: !0
      } : {
        value: o,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: a,
      valid: !0
    };
  };
  return {
    state: s,
    processValue: n,
    handleSelectChange: (a) => {
      if (!i.value) return;
      const o = a.target;
      if (t.multiEdit && o.value === " ") {
        e("update:value", null);
        return;
      }
      const r = n(o.value);
      e("validation", r, t.id), r.valid && e("update:value", r.value);
    }
  };
}
function om({
  props: t,
  emit: e,
  isMounted: i
}) {
  return {
    handleCheckboxChange: (s) => {
      if (!i.value) return;
      const a = s.target.checked ? t.trueValue : t.falseValue;
      if (a === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      e("update:value", a);
    },
    handleFocus: (s) => {
      i.value && e("focus", s);
    },
    handleBlur: (s) => {
      i.value && e("blur", s);
    }
  };
}
const rm = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], lm = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(!0), a = te(null), o = X(() => i.value === i.trueValue), {
      handleCheckboxChange: r,
      handleFocus: l,
      handleBlur: c
    } = om({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, f) => (w(), A("input", {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      type: "checkbox",
      checked: o.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...p) => k(r) && k(r)(...p)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...p) => k(l) && k(l)(...p)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...p) => k(c) && k(c)(...p))
    }, null, 40, rm));
  }
}), cm = ["for"], Ds = /* @__PURE__ */ De({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (w(), A("label", {
      for: t.id,
      class: "input-label"
    }, Q(t.label), 9, cm));
  }
}), um = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], dm = ["disabled", "selected"], fm = {
  key: 0,
  value: " "
}, hm = ["hidden", "value", "disabled"], pm = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(!0), a = te(null), o = X(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = am({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (w(), A("select", ki(l.$attrs, {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      value: i.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: c[0] || (c[0] = //@ts-ignore
      (...u) => k(r) && k(r)(...u))
    }), [
      O("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, Q(i.text?.select?.toUpperCase() ?? "SELECT"), 9, dm),
      i.multiEdit ? (w(), A("option", fm, Q(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : Y("", !0),
      (w(!0), A(Te, null, Ve(o.value, (u) => (w(), A("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, Q(u.label), 9, hm))), 128))
    ], 16, um));
  }
}), gm = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Rl = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(!0), a = te(null), {
      handleInput: o,
      handleMouseDown: r,
      handleMouseUp: l,
      handleFocus: c,
      handleBlur: u,
      handleKeydown: f,
      handleCompositionStart: p,
      handleCompositionEnd: g,
      handlePaste: x
    } = nm({
      props: i,
      emit: s,
      isMounted: n
    }), R = (D) => {
      const I = D.getBoundingClientRect(), P = window.getComputedStyle(D);
      return I.width > 0 && I.height > 0 && P.display !== "none" && P.visibility !== "hidden";
    };
    return Ht(() => {
      (ye(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && R(a.value) && bt(() => a.value.focus());
    }), hs(() => {
      n.value = !1;
    }), (D, I) => (w(), A("input", ki(D.$attrs, {
      id: i.id,
      ref_key: "inputRef",
      ref: a,
      name: i.id,
      value: i.value,
      inputmode: i.inputMode,
      type: i.inputType,
      placeholder: i.placeholder,
      disabled: i.disabled,
      default: i.default,
      readonly: i.readonly,
      min: i.min,
      max: i.max,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onInput: I[0] || (I[0] = //@ts-ignore
      (...P) => k(o) && k(o)(...P)),
      onFocus: I[1] || (I[1] = //@ts-ignore
      (...P) => k(c) && k(c)(...P)),
      onBlur: I[2] || (I[2] = //@ts-ignore
      (...P) => k(u) && k(u)(...P)),
      onKeydown: I[3] || (I[3] = //@ts-ignore
      (...P) => k(f) && k(f)(...P)),
      onCompositionstart: I[4] || (I[4] = //@ts-ignore
      (...P) => k(p) && k(p)(...P)),
      onCompositionend: I[5] || (I[5] = //@ts-ignore
      (...P) => k(g) && k(g)(...P)),
      onPaste: I[6] || (I[6] = //@ts-ignore
      (...P) => k(x) && k(x)(...P)),
      onMousedown: I[7] || (I[7] = //@ts-ignore
      (...P) => k(r) && k(r)(...P)),
      onMouseup: I[8] || (I[8] = //@ts-ignore
      (...P) => k(l) && k(l)(...P))
    }), null, 16, gm));
  }
}), mm = ["data-field-id"], bm = {
  key: 0,
  class: "input-label-group"
}, ym = ["disabled", "selected"], vm = {
  key: 0,
  value: " "
}, wm = ["hidden", "value", "disabled"], Ci = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = e, s = t, n = te(null), a = te(null), o = te(!0), r = te(s.numberFormat), l = X(() => s.custom ? "custom-" + s.id : s.id), c = X(() => `${l.value}-error`), u = X(() => s.label || s.placeholder), f = X(() => m(s.type, s.numberFormat)), p = X(() => M(s.type, s.numberFormat)), g = X(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), x = X(() => {
      let C = s.value;
      if (s.type !== "unitDependent" || !C) return C;
      try {
        return U({ v: C, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), R = X(() => s.options.map((C) => ({
      value: C.value,
      label: C.label || C.value?.toString(),
      hidden: C.hidden || !1,
      disabled: C.disabled || !1
    }))), D = X(() => R.value.map((C) => {
      const B = C.label ? z(C.label) : C.value?.toString();
      return {
        ...C,
        // Translate the label key first, then uppercase the translated result
        label: B?.toUpperCase() || C.value?.toString().toUpperCase()
      };
    })), I = X(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), P = X(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), $ = X(() => ({
      ...P.value,
      type: s.type,
      inputMode: p.value,
      inputType: f.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), S = X(() => ({
      ...P.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), N = X(() => ({
      ...P.value,
      options: D.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), _ = X(() => (s.text?.select || "SELECT").toUpperCase()), F = X(() => (s.text?.delete || "DELETE").toUpperCase()), H = (C) => {
      a.value = C;
    }, j = (C) => s.label && s.enableLabel && s.labelPosition === C, m = (C, B) => {
      switch (C) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return B === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, M = (C, B) => {
      if (C === "unitDependent")
        return B === "fraction" ? "text" : "decimal";
      switch (C) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, K = (C) => {
      i("update:value", C);
    }, oe = (C, B) => {
      C.valid === void 0 || C.valid === !0 ? (o.value = !0, i("validation", n.value, C)) : C.valid === !1 && C.message && (o.value = !1, console.warn(`Field validation error for field ${B} - ${C.message}`), i("validation", n.value, C));
    };
    return je(() => s.numberFormat, (C, B) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && C !== B && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const W = U({ v: s.value, nf: C });
            i("update:value", W);
          } catch {
            i("update:value", C === "decimal" ? 0 : "0");
          }
        r.value = C;
      }
    }), (C, B) => (w(), A("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ce(["input-wrapper", I.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (w(), A("div", bm, [
        j("first") ? (w(), ke(Ds, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0),
        t.type === "checkbox" ? (w(), ke(lm, ki({
          key: 1,
          ref: H,
          type: "checkbox"
        }, S.value, {
          value: t.value,
          "onUpdate:value": B[0] || (B[0] = (W) => i("update:value", W))
        }), null, 16, ["value"])) : Y("", !0),
        j("last") ? (w(), ke(Ds, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0)
      ])) : (w(), A(Te, { key: 1 }, [
        j("first") ? (w(), ke(Ds, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0),
        g.value ? (w(), ke(Rl, ki({
          key: 1,
          ref: H
        }, $.value, {
          "input-type": f.value,
          "input-mode": p.value,
          value: x.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: oe,
          "onUpdate:value": K
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (w(), ke(pm, ki({
          key: 2,
          ref: H
        }, N.value, {
          "onUpdate:value": B[1] || (B[1] = (W) => i("update:value", W))
        }), {
          default: Ti(() => [
            O("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, Q(_.value), 9, ym),
            t.multiEdit ? (w(), A("option", vm, Q(F.value), 1)) : Y("", !0),
            (w(!0), A(Te, null, Ve(D.value, (W) => (w(), A("option", {
              key: W.value,
              hidden: W.hidden,
              value: W.value,
              disabled: W.disabled
            }, Q(W.label), 9, wm))), 128))
          ]),
          _: 1
        }, 16)) : Y("", !0),
        j("last") ? (w(), ke(Ds, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0)
      ], 64)),
      Ws(C.$slots, "default")
    ], 10, mm));
  }
}), Sm = {
  key: 0,
  class: "action-bar"
}, xm = { class: "add-custom" }, km = ["disabled"], Im = ["disabled", "title", "onClick"], Pm = {
  key: 1,
  class: "price"
}, Cm = /* @__PURE__ */ De({
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
    allowCustomNames: { type: Boolean, default: !1 },
    customNames: { default: () => [] },
    usedNames: { default: () => [] },
    existingTypes: {},
    enablePricing: { type: Boolean, default: !0 },
    pricing: { default: () => ({}) },
    locations: { default: () => [] },
    locationGroups: { default: () => [] },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {},
    findExtrasPrice: {}
  },
  emits: ["update-all", "set", "custom-name-added", "custom-name-deleted"],
  setup(t, { emit: e }) {
    const i = t, s = e, {
      mode: n,
      shouldShowAll: a,
      supportsFaces: o,
      supportsSides: r,
      canDelete: l,
      getLocationLabel: c,
      getInputType: u,
      getInputConfigForLocation: f,
      getSelectOptions: p,
      getPriceDisplay: g,
      shouldShowDeleteButton: x,
      getLocationGroup: R,
      isLocationVisible: D,
      handleInputChange: I,
      handleDelete: P
    } = Ac({
      shape: ci(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: ci(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: ci(i, "locations"),
      locationGroups: ci(i, "locationGroups")
    }), {
      newCustomName: $,
      canAddCustomName: S,
      isActionMenuDisabled: N,
      customNameActions: _,
      handleAddCustomName: F,
      handleCustomNameAction: H
    } = Oc({
      extraType: i.extraType,
      customNames: ci(i, "customNames"),
      usedNames: ci(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: p,
      onCustomNameAdded: (q) => s("custom-name-added", i.extraType, q),
      onCustomNameDeleted: (q) => s("custom-name-deleted", i.extraType, q)
    }), {
      renderLocations: j,
      gridStyle: m,
      getInputId: M,
      getDeleteConfig: K
    } = $c({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: u,
      getInputConfig: (q, le) => f(q, le),
      getAllInputConfig: (q) => f("all", q),
      getInputConfigForLocation: f,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: x,
      locations: ci(i, "locations"),
      locationGroups: ci(i, "locationGroups")
    }), oe = te(!1), C = X(() => (q) => {
      const le = R(q);
      return le === "all" || le === "faces" || le === "sides";
    }), B = X(() => (q) => _a(i.extraType).includes(q) ? Mo(q) === "face" : !1), W = X(() => (q) => _a(i.extraType).includes(q) ? Mo(q) === "side" : !1), G = X(() => (q) => i.shape.issues?.some((le) => le.category?.includes("extras") && le.field?.some((me) => me[0] === "extras" && me[1] === i.extraType && me[2] === q)) ?? !1);
    return Ht(() => {
      const le = i.shape.extras?.[i.extraType];
      if (!le || typeof le != "object") {
        oe.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (o.value && !("faces" in le)) {
        oe.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in le)) {
        oe.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (q, le) => {
      const me = bi("FontAwesomeIcon");
      return oe.value ? Y("", !0) : (w(), A("div", {
        key: 0,
        class: Ce(["extras group", [t.extraType]]),
        style: et({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (w(), A("div", Sm, [
          O("div", xm, [
            Re(Rl, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: k($),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": le[0] || (le[0] = (ge) => $.value = ge || ""),
              onKeydown: yc(k(F), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            O("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !k(S),
              onClick: le[1] || (le[1] = //@ts-ignore
              (...ge) => k(F) && k(F)(...ge))
            }, " Add ", 8, km)
          ]),
          Re(sm, {
            "menu-items": k(_),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: k(N),
            onAction: k(H)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : Y("", !0),
        O("div", {
          class: "inputs grid-layout",
          style: et({ "grid-template-columns": k(m) })
        }, [
          (w(!0), A(Te, null, Ve(k(j), (ge) => (w(), A(Te, { key: ge }, [
            k(D)(ge) ? (w(), A(Te, { key: 0 }, [
              O("div", {
                class: Ce(["label", {
                  "group-label": C.value(ge),
                  "face-label": B.value(ge),
                  "side-label": W.value(ge),
                  "has-validation-issue": G.value(ge)
                }])
              }, Q(k(c)(ge)), 3),
              (w(!0), A(Te, null, Ve(t.allOptions, (Se, Oe) => (w(), A("div", {
                key: `${ge}-${Oe}`,
                class: "input-cell"
              }, [
                Re(Ci, ki({
                  id: k(M)(ge, Oe),
                  "data-field": `${t.extraType}-${ge}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Oe
                }, { ref_for: !0 }, k(f)(ge, Oe), {
                  "onUpdate:value": (Z) => k(I)(ge, Oe, Z)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              k(K)(ge).show ? (w(), A("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !k(K)(ge).enabled,
                title: k(K)(ge).ariaLabel,
                onClick: (Se) => k(P)(ge)
              }, [
                Re(me, { icon: ["fass", "trash"] })
              ], 8, Im)) : Y("", !0),
              t.enablePricing ? (w(), A("div", Pm, Q(k(g)(ge)), 1)) : Y("", !0)
            ], 64)) : Y("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), Tt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
}, Gs = /* @__PURE__ */ Tt(Cm, [["__scopeId", "data-v-0aa91058"]]), Tm = {
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
}, Am = { id: "spinner" }, Om = ["width", "height"], $m = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Fm(t, e, i, s, n, a) {
  return w(), A("div", Am, [
    i.complete ? Y("", !0) : (w(), A("svg", {
      key: 0,
      class: "loading",
      style: et({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      lr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Om)),
    i.complete ? (w(), A("svg", {
      key: 1,
      class: "complete",
      style: et({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      O("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : Y("", !0),
    i.showNumber ? (w(), A("div", $m, Q(i.number), 1)) : Y("", !0)
  ]);
}
const er = /* @__PURE__ */ Tt(Tm, [["render", Fm]]), { addNotice: _i } = ja();
let aa = null;
function Lm() {
  return aa || (aa = cr()), aa;
}
function tr(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Em(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = Lm(), o = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = tr(o), u = tr(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const D = c.reduce((P, $) => P + ($.q || 1), 0), I = u.reduce((P, $) => P + ($.q || 1), 0);
      if (D > t.maxShapes || I > t.maxStock)
        return _i({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return _i({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return _i({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let f;
    if (t.useInventory && t.selectedSaw)
      f = t.selectedSaw;
    else if (t.inputSaw instanceof ol) {
      const D = t.inputSaw.validate();
      i.push(...D), f = t.inputSaw.toData();
    } else {
      f = t.inputSaw;
      const D = new al(f);
      i.push(...D.issues);
    }
    const p = n({
      saw: f,
      partTrim: U({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...p), t.useInventory) {
      if (t.materialStore)
        for (const D of c)
          D.material || i.push(new ie({
            item: D,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const D = a(f);
      i.push(...D);
    }
    if (l.length > 0) {
      l.forEach((I) => I.populateParentID(c));
      const D = rp(l, c);
      i.push(...D);
    }
    await Dm(c, t, i);
    const g = Nr(i);
    if (g.length > 0) {
      const D = {
        saw: g.filter((I) => I.category?.includes("saw")),
        stock: g.filter((I) => I.category?.includes("stock")),
        part: g.filter((I) => I.category?.includes("part") && !I.category?.includes("extras")),
        extras: g.filter((I) => I.category?.includes("extras")),
        group: g.filter((I) => I.category?.includes("group"))
      };
      for (const [I, P] of Object.entries(D))
        if (P.length > 0) {
          _i({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: I }),
            additional: P.map(($) => e($.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const x = {
      inputSaw: f,
      inputShapes: c.map((D) => D.toData()),
      inputStock: u.map((D) => D.toData()),
      inputGroups: l.map((D) => D.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, R = $p.safeParse(x);
    return R.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", R.error.issues), _i({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: R.error.issues.map((D) => `${D.path.join(".")}: ${D.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), _i({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Dm(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: o } of s) {
      if (e.extrasValidationRules && ze.hasExtras(n, a)) {
        const c = ug(n, a, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const f = dg(a, u, c.message);
          i.push(new ie({
            item: n,
            category: ["part", "extras"],
            message: f,
            field: [["extras", a]],
            shouldTranslate: !1
          }));
        });
      }
      if (!o || !Object.keys(o).length)
        continue;
      const r = cg(n, a, o, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((l) => {
        i.push(new ie({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: He(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, l]]
        }));
      });
    }
}
const qs = E({
  // Unique identifier for this group (used internally)
  id: h().min(1),
  // Display label for the group (shown in UI)
  label: h().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ee(h().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: d().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: L().optional().default(!1)
}), Rm = E({
  banding: ee(qs).optional(),
  finish: ee(qs).optional(),
  planing: ee(qs).optional()
}).optional(), oa = E({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), ra = E({
  // Shape dimension constraints
  longSide: oa,
  shortSide: oa,
  t: oa,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: h().optional(),
  // Custom validation message (optional)
  message: h().optional()
}), _m = E({
  banding: ra.optional(),
  finish: ra.optional(),
  planing: ra.optional()
}).optional(), Mm = pe(["decimal", "fraction"]), Bm = pe(Qr), ir = ue([
  fe(0),
  fe(1),
  fe(2)
]).catch(0), jm = E({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: h().optional(),
  partB: h().optional(),
  partSelected: h().optional(),
  stock: h().optional(),
  text: h().optional(),
  // Checkout-specific colors
  button: h(),
  buttonText: h()
}), Nm = E({
  banding: L().default(!1),
  finish: L().default(!1),
  planing: L().default(!1),
  orientation: L().default(!0),
  diagram: L().default(!0),
  focus: L().default(!0),
  machining: L().default(!1),
  csvImport: L().default(!1),
  click: L().default(!0),
  partName: L().default(!0),
  progressNumber: L().default(!0)
  // imageUpload: z.boolean().default( false )
}), Vm = E({
  // Localization
  locale: h().default("en-US"),
  currency: h().default("USD"),
  apiVersion: d().min(2).default(3),
  // Number formatting
  numberFormat: Mm.default("decimal"),
  decimalPlaces: d().min(0).max(10).default(2),
  fractionRoundTo: d().default(0),
  // Stock configuration
  stockSelection: Bm.optional(),
  stockGrain: Zi.optional(),
  // Part configuration
  minSpacing: tl.optional(),
  maxParts: d().min(0).default(10),
  orientationModel: ir.default(0),
  resultOrientationModel: ir.default(0),
  minDimension: d().min(0).default(0),
  partTrim: d().min(0).default(0),
  // UI configuration
  debug: L().default(!1),
  enable: Nm.optional(),
  colors: jm.optional(),
  // Custom fields
  customFields: ee(be()).optional(),
  fieldOrder: ee(h()).optional(),
  // Extras location filtering
  bandingLocations: ee(ia).optional(),
  finishLocations: ee(ia).optional(),
  planingLocations: ee(ia).optional(),
  // Extras location groups
  extrasLocationGroups: Rm,
  // Extras validation rules
  extrasValidationRules: _m
});
pe([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const ns = he(
  h(),
  d().min(0)
).default({}), Gm = E({
  name: h().trim().min(1),
  thicknesses: ee(
    ue([
      h().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      d()
    ])
  ).min(1)
}), la = E({
  labels: ee(h()),
  pricing: he(h(), d().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: be().optional(),
  keys: ee(h()).optional(),
  // if not all the default keys should be set
  locations: ee(h()).optional(),
  // available locations for this extras type
  groups: ee(qs).optional(),
  // custom location groups
  rules: be().optional()
  // validation rules for this extras type
});
E({
  success: L(),
  price: d().optional(),
  error: h().optional(),
  cacheHit: L().optional()
});
E({
  valid: L(),
  errors: ee(h()),
  warnings: ee(h())
});
E({
  pricing: ns,
  labels: ee(h()),
  options: ee(ee(h())),
  // Simplified to string arrays only
  keys: ee(h()),
  maxLevels: d().min(1)
});
E({
  enableCaching: L().default(!0),
  enableLogging: L().default(!1),
  maxCacheSize: d().min(1).default(1e3)
});
const _l = E({
  l: d(),
  w: d(),
  t: d().nullable(),
  q: d(),
  stockId: h()
}), qm = E({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  orientationLock: ue([
    fe(""),
    fe("l"),
    fe("w")
  ]).nullable(),
  q: d(),
  name: h().nullable(),
  rot: ue([fe(0), fe(1)]).default(0),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: he(h(), ue([h(), L()])).nullable().optional(),
  finish: he(h(), ue([h(), L()])).nullable().optional(),
  planing: he(h(), ue([h(), L()])).nullable().optional(),
  customData: he(h(), be()).nullable().optional(),
  stockId: h().nullable()
}), zm = E({
  id: h(),
  name: h().nullable(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  q: d(),
  trim: E({
    x1: d(),
    x2: d(),
    y1: d(),
    y2: d()
  }).nullable().optional(),
  cost: d().nullable().optional(),
  analysis: be().nullable().optional()
}), Wm = E({
  id: h().optional(),
  name: h().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: h().optional(),
  q: d().optional(),
  orientationLock: ue([
    fe(""),
    fe("l"),
    fe("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: he(h(), ue([h(), L()])).nullable().optional(),
  finish: he(h(), ue([h(), L()])).nullable().optional(),
  planing: he(h(), ue([h(), L()])).nullable().optional(),
  customData: he(h(), be()).nullable().optional()
});
E({
  jobId: d(),
  metadata: Pn.optional(),
  parts: ee(qm),
  stock: ee(zm),
  offcuts: ee(_l),
  inputs: E({
    parts: ee(Wm)
  })
});
const Hm = E({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  orientationLock: ue([
    fe(""),
    fe("l"),
    fe("w")
  ]).nullable(),
  q: d(),
  name: h().nullable(),
  rot: ue([fe(0), fe(1)]).default(0),
  // V3 format: nested extras structure
  extras: E({
    banding: E({
      sides: he(h(), ue([h(), L()]))
    }).nullable().optional(),
    finish: E({
      faces: he(h(), ue([h(), L()]))
    }).nullable().optional(),
    planing: E({
      sides: he(h(), ue([h(), L()])).optional(),
      faces: he(h(), ue([h(), L()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: he(h(), be()).nullable().optional(),
  stockId: h().nullable()
}), Um = E({
  id: h(),
  name: h().nullable(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  q: d(),
  trim: E({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }).nullable().optional(),
  cost: d().nullable().optional(),
  analysis: be().nullable().optional()
}), Ym = E({
  id: h().optional(),
  name: h().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: h().optional(),
  q: d().optional(),
  orientationLock: ue([
    fe(""),
    fe("l"),
    fe("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: E({
    banding: E({
      sides: he(h(), ue([h(), L()]))
    }).nullable().optional(),
    finish: E({
      faces: he(h(), ue([h(), L()]))
    }).nullable().optional(),
    planing: E({
      sides: he(h(), ue([h(), L()])).optional(),
      faces: he(h(), ue([h(), L()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: he(h(), be()).nullable().optional()
});
E({
  jobId: d(),
  metadata: Pn.optional(),
  parts: ee(Hm),
  stock: ee(Um),
  offcuts: ee(_l),
  inputs: E({
    parts: ee(Ym)
  })
});
function Ml(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    stockId: t?.stock?.id || t?.stockId || ""
  };
}
const Km = E({
  stockType: pe([...Qs]).optional(),
  bladeWidth: ue([
    el,
    h()
  ]).optional(),
  cutType: xn,
  cutPreference: kn,
  stackHeight: Sn,
  guillotineOptions: In
}).optional();
E({
  l: d().nullable(),
  w: d().nullable(),
  t: ue([d(), h()]).nullable().optional(),
  material: h().nullable().optional(),
  orientationLock: ue([
    fe("l"),
    fe("w"),
    fe("")
  ]).nullable().optional(),
  q: d().min(1).nullable().optional(),
  name: h().nullable().optional(),
  // Import existing schemas for extras
  banding: Gr.nullable().optional(),
  finish: qr.nullable().optional(),
  planing: zr.nullable().optional(),
  // Custom data as record
  customData: he(h(), be()).nullable().optional(),
  stockId: h().nullable().optional()
});
const Zm = E({
  // Required fields
  stock: ee(Pi).default([]),
  options: Vm,
  // Optional fields
  type: h().optional(),
  // variable | simple
  materials: ee(Gm).optional(),
  banding: la.nullable().optional(),
  finish: la.nullable().optional(),
  planing: la.nullable().optional(),
  machining: be().optional(),
  bandingPricing: ns.optional(),
  finishPricing: ns.optional(),
  planingPricing: ns.optional(),
  machiningPricing: ns.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: be().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Saw configuration
  saw: Km,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: E({
    enabled: L(),
    config: be().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
});
function Xm(t) {
  const e = Zm.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function Jm(t) {
  const e = Xm(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
function jt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function Qm(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {};
    if (ye(e.a) || ye(e.b) || ye(e.c) || ye(e.d))
      i.x1 = ye(e.a) ? jt(e.a) : !1, i.y1 = ye(e.b) ? jt(e.b) : !1, i.x2 = ye(e.c) ? jt(e.c) : !1, i.y2 = ye(e.d) ? jt(e.d) : !1;
    else {
      const n = Da(e);
      i.x1 = ye(n.x1) ? jt(n.x1) : !1, i.x2 = ye(n.x2) ? jt(n.x2) : !1, i.y1 = ye(n.y1) ? jt(n.y1) : !1, i.y2 = ye(n.y2) ? jt(n.y2) : !1;
    }
    t.banding = i;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, i = {};
    i.a = ye(e.a) ? jt(e.a) : !1, i.b = ye(e.b) ? jt(e.b) : !1, t.finish = i;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = Da(e.sides || {});
    e.sides && (ye(s.x1) && (i.x1 = s.x1), ye(s.x2) && (i.x2 = s.x2), ye(s.y1) && (i.y1 = s.y1), ye(s.y2) && (i.y2 = s.y2)), e.faces && (ye(e.faces.a) && (i.a = e.faces.a), ye(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function eb(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const i = Math.max(t.l, t.w), s = Math.min(t.l, t.w);
    t.w > t.l && (t.l = i, t.w = s, "rot" in t && t.rot !== void 0 && (t.rot = t.rot === 0 ? 1 : 0));
  }
  return t;
}
function Bl(t, e = 0) {
  return e === 0 || t.forEach((i) => eb(i, e)), t;
}
function tb(t, e, i, s, n, a, o) {
  const r = e.map((u) => {
    const f = {
      l: u.l,
      w: u.w,
      t: u?.t ?? null,
      material: u.material ?? null,
      orientationLock: u.orientationLock ?? null,
      q: a?.addedPartTally?.[u.parentId] || u.q,
      name: u.name ?? null,
      customData: u.customData ?? null,
      stockId: u?.stock?.id || u?.stockId || null,
      rot: u?.rot ?? 0,
      // Always include extras properties even if not set (using API format)
      banding: Bp(),
      finish: un(),
      planing: Np()
    }, p = { ...u };
    return Qm(p), p.banding && (f.banding = p.banding), p.finish && (f.finish = p.finish), p.planing && (f.planing = p.planing), f;
  }), l = i.map((u) => {
    const f = {
      id: u.id,
      name: u?.name ?? null,
      l: u.l,
      w: u.w,
      t: u?.t ?? null,
      material: u.material ?? null,
      q: a?.usedStockTally?.[u.parentId] || u.q,
      cost: u?.cost ?? null,
      analysis: u?.analysis ?? null
    };
    return u?.trim && (f.trim = Da(u.trim)), f;
  }), c = {
    parts: n.map((u) => {
      const f = {
        id: u.id,
        name: u.name,
        l: u.l,
        w: u.w,
        t: u.t ?? null,
        material: u.material,
        q: u.q,
        orientationLock: u.orientationLock ?? null,
        customData: u.customData ?? null
      };
      return u.extras && (f.extras = {}, u.extras.banding?.sides && (f.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (f.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (f.extras.planing = {
        ...u.extras.planing.sides && { sides: u.extras.planing.sides },
        ...u.extras.planing.faces && { faces: u.extras.planing.faces }
      })), f;
    })
  };
  return o && Bl(r, o), {
    jobId: t,
    metadata: a,
    parts: r,
    stock: l,
    offcuts: s?.map(Ml) || [],
    inputs: c
  };
}
function ib(t, e, i, s, n, a, o) {
  const r = e.map((u) => {
    const f = {
      l: u.l,
      w: u.w,
      t: u?.t ?? null,
      material: u.material ?? null,
      orientationLock: u.orientationLock ?? null,
      q: a?.addedPartTally?.[u.parentId] || u.q,
      name: u.name ?? null,
      customData: u.customData ?? null,
      stockId: u?.stock?.id || u?.stockId || null,
      rot: u?.rot ?? 0,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: Ea() },
        finish: { faces: un() },
        planing: jp()
      }
    };
    return u.extras && (u.extras.banding?.sides && (f.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (f.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (f.extras.planing = {
      sides: u.extras.planing.sides || Ea(),
      faces: u.extras.planing.faces || un()
    })), f;
  }), l = i.map((u) => ({
    id: u.id,
    name: u?.name ?? null,
    l: u.l,
    w: u.w,
    t: u?.t ?? null,
    material: u.material ?? null,
    q: a?.usedStockTally?.[u.parentId] || u.q,
    trim: u?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: u?.cost ?? null,
    analysis: u?.analysis ?? null
  })), c = {
    parts: n.map((u) => {
      const f = {
        id: u.id,
        name: u.name,
        l: u.l,
        w: u.w,
        t: u.t ?? null,
        material: u.material,
        q: u.q,
        orientationLock: u.orientationLock ?? null,
        customData: u.customData ?? null
      };
      return u.extras && (f.extras = {}, u.extras.banding?.sides && (f.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (f.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (f.extras.planing = {
        ...u.extras.planing.sides && { sides: u.extras.planing.sides },
        ...u.extras.planing.faces && { faces: u.extras.planing.faces }
      })), f;
    })
  };
  return o && Bl(r, o), {
    jobId: t,
    metadata: a,
    parts: r,
    stock: l,
    offcuts: s?.map(Ml) || [],
    inputs: c
  };
}
const sb = ["id", "data-index"], nb = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = t, s = e, n = te({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), a = () => {
      if (!i.inputShape) return;
      let l = {
        l1: gi(i.inputShape, "banding", "side.l1"),
        l2: gi(i.inputShape, "banding", "side.l2"),
        w1: gi(i.inputShape, "banding", "side.w1"),
        w2: gi(i.inputShape, "banding", "side.w2")
      };
      const c = Cd(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = Br(l, c)), n.value = l;
    };
    je([
      () => i.inputShape,
      // Watching the entire inputShape for deep changes
      () => i.orientationModel,
      () => i.stockGrain,
      () => i.inputShape?.orientationLock
      // Still watch orientationLock explicitly if it triggers a re-evaluation
    ], () => {
      a();
    }, { deep: !0, immediate: !0 });
    const o = (l) => {
      (l.key === "Enter" || l.key === " ") && r();
    }, r = () => {
      i.disabled || s("clicked");
    };
    return Ht(() => {
      document.getElementById(i.id)?.addEventListener("keydown", o);
    }), hs(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", o);
    }), (l, c) => (w(), A("div", {
      id: t.id,
      class: Ce(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: r
    }, [
      O("div", {
        class: Ce(["outer", {
          l1: n.value.l1,
          l2: n.value.l2,
          w1: n.value.w1,
          w2: n.value.w2
        }])
      }, [...c[0] || (c[0] = [
        O("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, sb));
  }
}), ab = ["id", "data-index", "disabled"], ob = /* @__PURE__ */ De({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = X(() => i.inputShape ? gi(i.inputShape, "finish", "face.a") : !1), a = X(() => i.inputShape ? gi(i.inputShape, "finish", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = bi("FontAwesomeIcon");
      return w(), A("button", {
        id: t.id,
        class: Ce(["c-btn finish-button", {
          "face-a": n.value,
          // Use computed property
          "face-b": a.value,
          // Use computed property
          selected: t.open
        }]),
        "data-field": "finish",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: o
      }, [
        Re(c, { icon: ["fass", "spray-can"] })
      ], 10, ab);
    };
  }
});
function rb(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function jl(t) {
  const e = rb(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const lb = De({
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
      return jl(this.inputShape);
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
}), cb = ["id", "disabled"];
function ub(t, e, i, s, n, a) {
  const o = bi("FontAwesomeIcon");
  return w(), A("button", {
    id: t.id,
    class: Ce(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Re(o, { icon: ["fass", "hammer"] })
  ], 10, cb);
}
const db = /* @__PURE__ */ Tt(lb, [["render", ub]]), fb = ["id"], hb = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, pb = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, gb = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, mb = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, bb = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, yb = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, vb = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, sr = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(0), a = te(!1), o = (j, m, M, K) => {
      if (!xe(M) || m === 0)
        return j;
      const oe = r();
      return m === 1 || m === 2 && K !== "n" && j ? oe : j;
    }, r = (j) => {
      const m = { ...i, ...j };
      if (!m.rectangle || !xe(m.rectangle)) return "";
      let M = "";
      switch (m.orientationModel) {
        case 0:
          M = S.value;
          break;
        case 1:
          m.stockGrain === "y" || m.stockGrain === "n" ? M = m.rectangle.l >= m.rectangle.w ? "l" : "w" : m.rectangle.l >= m.rectangle.w ? M = m.stockGrain : M = M = m.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          M = m.rectangle.l >= m.rectangle.w ? "l" : "w";
          break;
      }
      return M;
    }, l = () => {
      if (console.log("🔵 OrientationButton clicked", {
        disabled: i.disabled,
        orientationOptionsLength: P.value.length,
        orientationOptions: P.value,
        currentOrientation: S.value,
        orientationIndex: n.value,
        orientationModel: i.orientationModel,
        rectangleType: i.rectangleType,
        stockGrain: i.stockGrain
      }), i.disabled) {
        console.log("❌ Click blocked: button is disabled");
        return;
      }
      if (P.value.length <= 1) {
        console.log("❌ Click blocked: not enough orientation options");
        return;
      }
      const j = c(S.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && S.value === "" && n.value !== j && n.value === 0 && (console.log("🔄 Syncing orientation index for multi-edit", { from: n.value, to: j }), n.value = j);
      let M = null;
      [1, 2].includes(i.orientationModel) ? (console.log("🔀 Toggling orientation (model 1 or 2)"), M = f()) : (console.log("🔄 Iterating through orientation options (model 0)"), M = u()), console.log("✅ Setting new orientation", {
        oldIndex: n.value,
        newIndex: M,
        oldValue: P.value[n.value],
        newValue: P.value[M]
      }), n.value = M;
    }, c = (j) => {
      const m = P.value.findIndex((M) => M === j);
      return m === -1 ? 0 : m;
    }, u = () => {
      let j = n.value + 1;
      return j > P.value.length - 1 && (j = 0), j;
    }, f = () => {
      let j = 0;
      if (S.value === "") {
        const m = r();
        j = P.value.findIndex((M) => M === m);
      } else
        j = P.value.findIndex((m) => m === "");
      return j;
    }, p = (j) => {
      console.log("📤 Emitting updateOrientation event", { newValue: j }), s("updateOrientation", j);
    }, g = () => {
      const j = S.value;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit)
        return j === " " ? " " : j === "" ? "" : j === "l" ? "l" : j === "w" ? "w" : "default";
      switch (i.orientationModel) {
        case 0:
          return j === " " ? " " : j ? i.stockGrain === "n" ? j || i.shapeOrientation || "default" : i.stockGrain === "w" ? j === "w" ? "w" : "l" : j === "l" ? "l" : "w" : "default";
        case 1:
          return j === " " ? " " : j ? i.stockGrain === "n" ? j || i.shapeOrientation || "default" : i.stockGrain === "w" ? j === "w" ? "w" : "l" : j === "l" ? "l" : "w" : "default";
        case 2:
          return j === " " ? " " : j ? i.stockGrain === "n" ? j || i.shapeOrientation || "default" : i.stockGrain === "w" ? j === "w" ? "w" : "l" : j === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, x = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !S.value) {
        D("");
        return;
      }
      const j = o(
        S.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (j !== S.value) {
        D(j);
        return;
      }
      if (!a.value || n.value === -1) {
        const m = c(S.value);
        n.value = m;
      }
      if (xe(i.rectangle)) {
        if (i.orientationModel === 1) {
          const m = _.value ? r() : S.value;
          D(m);
          return;
        }
        if (i.orientationModel === 2) {
          let m;
          _.value ? m = i.stockGrain !== "n" ? r() : "" : m = S.value, D(m);
        }
      }
    }, R = te(!1), D = (j) => {
      const m = c(j);
      R.value = !0, n.value = m, R.value = !1, p(j);
    }, I = () => {
      const j = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], m = ["l", "w", "y", "n"], M = [0, 1, 2], K = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, oe = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, C = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, B = [];
      j.forEach((W) => {
        m.forEach((G) => {
          M.forEach((q) => {
            const le = new _h({
              l: W.l,
              w: W.w
            }), ge = r({
              orientationModel: q,
              rectangle: le,
              stockGrain: G
            });
            let Se = "";
            le.l === le.w ? Se = "l === w" : le.l > le.w ? Se = "l >= w" : Se = "w > l";
            const Oe = ["l", "w", "y"].includes(G) ? K : oe;
            B.push({
              Model: q,
              "Stock grain": G,
              "Stock grain description": C[G],
              Dimensions: Se,
              "Orientation lock": ge || "N/A",
              "Orientation Lock description": Oe[ge] || "N/A"
            });
          });
        });
      }), B.sort((W, G) => {
        if (W.Model !== G.Model)
          return W.Model - G.Model;
        if (W["Stock grain"] !== G["Stock grain"])
          return W["Stock grain"].localeCompare(G["Stock grain"]);
        const q = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return q[W.Dimensions] - q[G.Dimensions];
      }), console.table(B);
    }, P = X(() => {
      if (!i.rectangle) return ["l", "w"];
      if (Vt(i.rectangle)) return ["l", "w"];
      let j = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : ($.value && (j = j.filter((m) => m !== "w")), j);
    }), $ = X(() => xe(i.rectangle) || zi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), S = X(() => {
      let j = "";
      if (Vt(i.rectangle))
        j = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (xe(i.rectangle))
        j = i.rectangle.orientationLock ?? "";
      else if (zi(i.rectangle)) {
        const M = i.rectangle.grain ?? "";
        M === "l" || M === "w" || M === "" ? j = M : j = "";
      }
      return j;
    }), N = X(() => Vt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), _ = X(() => !N.value.l && !N.value.w), F = X(() => Vt(i.rectangle) ? !1 : da(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), H = X(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (zi(i.rectangle) || i.rectangleType === "stock") {
        const oe = i.rectangle.grain;
        return "multiEdit" in i.rectangle && i.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[oe] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[oe] || "noGrain";
      }
      const j = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, m = i.stockGrain || "default";
      let M = "default";
      xe(i.rectangle) || i.rectangleType === "shape" ? M = g() : Vt(i.rectangle) && (M = i.rectangle.direction || "default");
      const K = j[m]?.[M];
      return K || j[m]?.default || "freeRotation";
    });
    return je(n, (j, m) => {
      if (!a.value) {
        console.log("⏭️ Skipping: not mounted yet");
        return;
      }
      if (m === void 0) {
        console.log("⏭️ Skipping: oldIndex is undefined");
        return;
      }
      if (R.value) {
        console.log("⏭️ Skipping: updating programmatically");
        return;
      }
      p(P.value[j]);
    }, { immediate: !1 }), je(N, (j, m) => {
      if (!i.rectangle || i.orientationModel === 0 || !xe(i.rectangle) || xe(i.rectangle) && (i.orientationModel === 2 && m.l && m.w && !S.value || i.stockGrain === "n" && !S.value))
        return;
      const M = r();
      S.value !== M && p(M);
    }, { immediate: !1 }), je(() => i.stockGrain, (j, m) => {
      j !== m && x();
    }, { immediate: !0 }), Ht(() => {
      x(), bt(() => {
        a.value = !0, i.debug && I();
      });
    }), (j, m) => (w(), A("button", {
      type: "button",
      id: t.id,
      class: Ce(["c-btn orientation-button", { rot: F.value, square: $.value, disabled: t.disabled, [H.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      H.value === "delete" ? (w(), A("svg", hb, [...m[0] || (m[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : Y("", !0),
      H.value === "noChange" ? (w(), A("svg", pb, [...m[1] || (m[1] = [
        O("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : Y("", !0),
      H.value === "freeRotation" ? (w(), A("svg", gb, [...m[2] || (m[2] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : Y("", !0),
      H.value === "leftRight" ? (w(), A("svg", mb, [...m[3] || (m[3] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : Y("", !0),
      H.value === "topBottom" ? (w(), A("svg", bb, [...m[4] || (m[4] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : Y("", !0),
      H.value === "grainLeftRight" ? (w(), A("svg", yb, [...m[5] || (m[5] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : Y("", !0),
      H.value === "grainTopBottom" ? (w(), A("svg", vb, [...m[6] || (m[6] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : Y("", !0)
    ], 10, fb));
  }
}), wb = ["id", "data-index", "disabled"], Sb = /* @__PURE__ */ De({
  __name: "PlaningButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    index: { default: 0 }
  },
  emits: ["clicked"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = X(() => i.inputShape ? gi(i.inputShape, "planing", "face.a") : !1), a = X(() => i.inputShape ? gi(i.inputShape, "planing", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = bi("FontAwesomeIcon");
      return w(), A("button", {
        id: t.id,
        class: Ce(["c-btn planing-button", {
          "face-a": n.value,
          "face-b": a.value,
          selected: t.open
        }]),
        "data-field": "planing",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: o
      }, [
        Re(c, { icon: ["fass", "hammer"] })
      ], 10, wb);
    };
  }
}), xb = {
  key: 0,
  class: "info"
}, kb = ["disabled"], Ib = /* @__PURE__ */ De({
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
    thicknessOptions: {
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
    }
  },
  emits: ["update", "validation", "open-banding", "open-machining", "open-finish", "open-planing", "open-image-upload"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], a = X(() => n.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0), o = X(() => {
      try {
        const P = i.field.propertyPath || i.field.name;
        return P.includes(".") ? hi(i.item, P) ?? null : i.item[P] ?? null;
      } catch (P) {
        return console.error("[CheckoutField] Error getting field value:", P), null;
      }
    }), r = X(() => {
      if (i.field.custom && i.field.type) {
        const S = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(S))
          return S;
      }
      const P = {
        number: "unitDependent",
        integer: "integer",
        string: "string",
        boolean: "checkbox",
        enum: "select"
      };
      if (i.field.name === "q") return "integer";
      if (i.field.name === "cost") return "string";
      if (i.field.name === "autoAdd") return "checkbox";
      if (i.field.name === "material" && i.typePrefix === "stock") return "string";
      if (["l", "w", "t", "trim"].includes(i.field.name)) return "unitDependent";
      const $ = P[i.field.type];
      return $ || "string";
    }), l = X(() => i.field.output ? i.field.output : null), c = X(() => i.field.options || []), u = X(() => !1), f = X(() => Oo(i.item, [i.field.name])), p = X(() => Oo(i.item, [i.field.name], !0)), g = X(() => i.multiEdit || !1), x = X(() => i.materialOptions?.length > 0 && xe(i.item) ? !i.item.material : !1), R = X(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && o.value !== null && i.field.info[o.value] || null : null), D = (P) => {
      s("update", P);
    }, I = (P, $) => {
      s("validation", P, $);
    };
    return (P, $) => a.value ? (w(), A(Te, { key: 1 }, [
      t.field.name === "orientationLock" ? (w(), ke(sr, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: D
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (w(), ke(sr, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: D
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (w(), ke(nb, {
        key: 2,
        "input-shape": k(xe)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: $[0] || ($[0] = (S) => P.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (w(), ke(ob, {
        key: 3,
        "input-shape": k(xe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[1] || ($[1] = (S) => P.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (w(), ke(Sb, {
        key: 4,
        "input-shape": k(xe)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[2] || ($[2] = (S) => P.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (w(), ke(db, {
        key: 5,
        "input-shape": k(xe)(t.item) ? t.item : null,
        onOpen: $[3] || ($[3] = (S) => P.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (w(), ke(Ci, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: k(z)(t.field.label || "fields.material"),
        placeholder: k(z)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !1,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: k(z)("actions.select"),
          delete: k(z)("actions.delete")
        },
        "onUpdate:value": D,
        onValidation: I
      }, {
        default: Ti(() => [
          Ws(P.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (w(), ke(Ci, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: k(z)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: x.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: k(z)("actions.select"),
          delete: k(z)("actions.delete")
        },
        output: "number",
        "onUpdate:value": D,
        onValidation: I
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (w(), A("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: $[4] || ($[4] = (S) => P.$emit("open-image-upload"))
      }, [
        Re(k(zs), { icon: ["fass", "image"] })
      ], 8, kb)) : Y("", !0)
    ], 64)) : (w(), ke(Ci, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: o.value,
      label: k(z)(t.field.label || t.field.name),
      placeholder: k(z)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: l.value,
      options: c.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || u.value,
      readonly: t.readonly || t.field.readonly,
      required: t.field.required || !1,
      "allow-zero": t.field.allowZero ?? !1,
      "true-value": t.field.trueValue ?? !0,
      "false-value": t.field.falseValue ?? !1,
      default: t.field.defaultValue,
      "number-format": t.numberFormat,
      min: t.field.min || null,
      max: t.field.max || null,
      "multi-edit": t.multiEdit,
      text: t.field.text,
      issue: f.value,
      warning: p.value,
      "disable-required-validation": g.value,
      "onUpdate:value": D,
      onValidation: I
    }, {
      default: Ti(() => [
        R.value ? (w(), A("p", xb, [
          Re(k(zs), { icon: ["fass", "info-circle"] }),
          as(" " + Q(R.value), 1)
        ])) : Y("", !0),
        Ws(P.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Pb = {
  key: 0,
  class: "row table-heading"
}, Cb = {
  key: 0,
  class: "cell center"
}, Tb = { class: "cell" }, Ab = {
  key: 0,
  class: "cell"
}, Ob = ["onClick"], $b = { class: "cell" }, Fb = ["disabled", "aria-label", "onClick"], Lb = { class: "button-wrapper main" }, Eb = ["aria-label"], Db = ["aria-label", "disabled"], Rb = ["aria-label"], _b = { id: "part-count" }, Mb = {
  key: 3,
  id: "messages"
}, Bb = {
  key: 0,
  class: "heading"
}, jb = { class: "content" }, Nb = {
  key: 4,
  id: "progress"
}, Vb = { id: "diagram-wrapper" }, Gb = {
  key: 0,
  id: "stack"
}, qb = {
  key: 3,
  class: "debug"
}, ca = !0, zb = /* @__PURE__ */ De({
  __name: "CheckoutCalculator",
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
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
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "result", "no-result", "log", "error"],
  setup(t, { expose: e, emit: i }) {
    const s = ji(() => Promise.resolve().then(() => Jb)), n = ji(() => Promise.resolve().then(() => yy)), a = ji(() => Promise.resolve().then(() => Iy)), o = ji(() => Promise.resolve().then(() => to)), {
      inputs: r,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: f,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: p,
      addInputShape: g,
      addInputStock: x,
      cloneInputShape: R,
      updateInputShape: D,
      validationIssues: I,
      setExtrasOptionsFromPricing: P,
      getCentralizedOptions: $
    } = cr(), { r: S, updateFromResult: N, stackedStock: _, uniqueAddedShapes: F, uniqueUsedStock: H, activeStockAutoId: j, activeStock: m, setActiveStockAutoId: M } = Ba(), { progress: K, reset: oe } = Ec(), { addNotice: C } = ja(), B = X(() => r.inputShapes.value.filter(xe)), W = (y) => !y || !Array.isArray(y) ? [] : y.map((v) => Kp({ parts: [v] }).parts?.[0] || v), G = t, q = i, le = te(!1), me = "production", ge = te(navigator?.language || "en-US"), Se = vc(null), Oe = window.location.hostname, Z = te(!1), ct = te(!0), ai = po("Checkout/currentURL", window.location.href), oi = po("Checkout/lastMigrationVersion", "0.0.0"), ut = te(null), J = te(!1), We = te(!1), it = te(!1), ri = te(!1), ws = te(!1), Yt = te(qu()), re = te(!1), { socket: ce } = Fc({
      refs: {
        connected: Z,
        thinking: it
      },
      callbacks: {
        onResult(y) {
          const v = y.optimisation;
          if (N(v), !v.shapeList?.length || !v.stockList?.length) {
            oe(), C({
              type: "error",
              message: z("errors.calculation.no_result"),
              additional: [z("errors.validation.check_inputs")]
            }), it.value = !1;
            return;
          }
          if ((se.apiVersion || 3) === 2 ? ut.value = tb(
            y.jobId,
            F.value,
            H.value,
            S.offcuts?.value || [],
            r.inputShapes.value,
            S.metadata.value,
            se.resultOrientationModel
          ) : ut.value = ib(
            y.jobId,
            F.value,
            H.value,
            S.offcuts?.value || [],
            r.inputShapes.value,
            S.metadata.value,
            se.resultOrientationModel
          ), S?.metadata?.value?.unplacedParts?.length) {
            const b = S.metadata.value.unplacedParts.map((V) => V.id).join();
            C({
              type: "warning",
              message: z("woodwork.parts_not_fit") + ": " + b
            });
          }
          ut.value && (console.log(ut.value), q("result", ut.value)), it.value = !1;
        },
        onUser(y) {
          Se.value = y;
        },
        onConnectError(y) {
          C({
            type: "error",
            message: z("errors.network.cannot_connect"),
            additional: [y]
          });
        },
        onError(y) {
          C({
            type: "error",
            message: z("errors.general.error_occurred"),
            additional: [y]
          });
        }
      }
    }), Pe = {
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
        csvImport: !1
        // imageUpload: false
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
      apiVersion: 3,
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      maxParts: 10,
      locale: navigator?.language || "en-US",
      orientationModel: 0,
      resultOrientationModel: 2,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: null,
      stockGrain: null,
      partTrim: 0,
      currency: "USD",
      debug: !1
    }, se = mt(Pe), Ee = mt({
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
        maxPhase: 3
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
    }), Ge = te(null), li = te(!1), vi = te(""), On = te("");
    je(I, (y) => {
      y?.length > 0 ? (li.value = !0, vi.value = "Validation Errors", On.value = y.map((v) => `${v.message} (${v.category.join(", ")})`).join(`

`)) : vi.value === "Validation Errors" && (li.value = !1, vi.value = "", On.value = "");
    }, { deep: !0 });
    const At = mt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Me = te([]), Ke = te([]), Ss = te([]), _t = mt({
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
    }), Ae = mt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), Ne = mt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), qe = mt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), io = te(null), Oi = mt({}), $i = mt({}), Fi = mt({}), ql = X(() => ({
      banding: Oi.rules,
      finish: $i.rules,
      planing: Fi.rules
    })), so = X(() => Lc({
      stockType: Ee.stockType,
      materials: Me.value,
      minDimension: se.minDimension,
      ...se.fieldOrder && se.fieldOrder.length > 0 ? { allowedFieldIds: se.fieldOrder } : {}
    })), $n = te([]), xs = te({
      material: !1,
      l: !0,
      w: !0,
      t: !1,
      q: !0,
      name: !0,
      banding: !1,
      orientationLock: !0,
      finish: !1,
      planing: !1,
      machining: !1,
      imageUpload: !1
    }), Qi = X(() => {
      const y = so.value.fields.value, v = so.value.allFieldsMap.value, T = y.filter((Le) => xs.value[Le.name] ?? !0), b = ["banding", "finish", "planing", "machining", "imageUpload"], V = [];
      for (const Le of b) {
        const Ze = xs.value[Le], st = T.find((Be) => Be.name === Le);
        if (Ze && !st) {
          const Be = v.get(Le);
          Be && V.push(Be);
        }
      }
      const de = $n.value || [];
      return [...T, ...V, ...de];
    }), es = X(() => Qi.value.length + 2), zl = X(() => {
      const y = {
        id: 34,
        del: 32
      }, v = {
        id: `${y.id}px`,
        del: `${y.del}px`
      }, T = [];
      for (const b of Qi.value) {
        if (b.name === "trim") continue;
        const V = b.w ?? "minmax(20px, 1fr)";
        T.push(V);
      }
      return T.unshift(v.id), T.push(v.del), T.join(" ");
    }), ks = X(() => ({
      "--btn-color": se.colors.buttonText,
      "--btn-bg": se.colors.button,
      "--btn-hover-bg": Wl(se.colors.button, -8),
      "--btn-focus-ring": se.colors.button
    }));
    function Wl(y, v) {
      const T = y.replace("#", ""), b = parseInt(T, 16), V = Math.round(2.55 * v), de = (b >> 16) + V, we = (b >> 8 & 255) + V, Le = (b & 255) + V;
      return `#${(16777216 + (de < 255 ? de < 1 ? 0 : de : 255) * 65536 + (we < 255 ? we < 1 ? 0 : we : 255) * 256 + (Le < 255 ? Le < 1 ? 0 : Le : 255)).toString(16).slice(1)}`;
    }
    const Hl = {
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
    }, no = X(() => Se.value ? !(Se.value && Se.value?.api?.whiteLabel) : !0), Li = {
      stockSelection: (y) => {
        const v = ["efficiency", "smallest"];
        y && !v.includes(y) ? console.warn(`${y} is not a valid stockSelection, expected ${v.join("|")}`) : Ee.options.stockSelection = y;
      },
      minSpacing: (y) => {
        Ee.options.minSpacing = y;
      },
      maxParts: (y) => {
        se.maxParts = y;
      },
      locale: (y) => {
        ge.value = y.replace(/_/g, "-");
      },
      enable: (y) => {
        const v = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const T in Pe.enable)
          T in y && (se.enable[T] = y[T]);
        for (const T in v) {
          const b = v[T], V = hi(y, [b]), de = Pe.enable[b], we = V !== void 0 ? V : de;
          console.log(`[optionHandlers.enable] Setting ${T} to ${we} (sentEnable.${b}=${V}, default=${de})`), Mt(T, we);
        }
        ws.value = hi(y, ["csvImport"]) ?? Pe.enable.csvImport;
      },
      colors: (y) => {
        for (const v in Pe.colors)
          v in y && (se.colors[v] = y[v]);
      },
      orientationModel: (y) => {
        if (![0, 1, 2].includes(y)) {
          se.orientationModel = 0;
          return;
        }
        se.orientationModel = y;
      },
      numberFormat: (y) => {
        if (!["decimal", "fraction"].includes(y)) {
          se.numberFormat = "decimal";
          return;
        }
        se.numberFormat = y;
      },
      customFields: (y) => {
        if (console.log("[optionHandlers.customFields] Received custom fields:", y), !Array.isArray(y) || !y?.length) {
          console.log("[optionHandlers.customFields] No custom fields provided");
          return;
        }
        const v = [];
        y.forEach((T) => {
          const b = ao(T.id), V = {
            ...T,
            custom: !0,
            id: b,
            name: b,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + b,
            fieldMap: "customData." + b
          };
          T.type === "checkbox" && (V.w = "32px"), T.type === "integer" || T.type === "float" ? V.output = T.output ?? "number" : T.type === "select" && (V.output = T.output ?? "string", V.options = T.options), v.push(V);
        }), console.log("[optionHandlers.customFields] Processed custom field definitions:", v), $n.value = v, bt(() => {
          for (const T of r.inputShapes.value)
            T.customData = y.reduce((b, V) => {
              const de = ao(V.id);
              return b[de] = T.customData[de] || V.default || "", b;
            }, {});
          console.log("[optionHandlers.customFields] Updated shapes customData");
        });
      }
    }, Ul = (y) => {
      console.log("[init] Starting initialization with data:", y), G.debug && q("log", ["checkout init...", y]), y?.parts && (y.parts = W(y.parts));
      let v;
      try {
        v = Jm(y), console.log("[init] Validated data:", v);
      } catch (b) {
        q("error", b.message || "Invalid init data");
        return;
      }
      if (v.saw) {
        const b = v.saw;
        if (b.stockType !== void 0 && (Qs.includes(b.stockType) || console.warn(`${b.stockType} is not a valid stockType, expected ${Qs.join("|")}`), Ee.stockType = b.stockType, b.stockType === "linear" && (Ee.cutType = null, Ee.cutPreference = null)), b.bladeWidth !== void 0) {
          const V = typeof b.bladeWidth == "string" ? parseFloat(b.bladeWidth) : b.bladeWidth;
          V >= 0 ? Ee.bladeWidth = V : console.warn(`SmartCut - you provided an incorrect blade width of: ${b.bladeWidth}`);
        }
        if (b.cutType !== void 0 && (Ee.cutType = b.cutType), b.cutPreference !== void 0 && (pa.includes(b.cutPreference) ? Ee.cutPreference = b.cutPreference : console.warn(`SmartCut - cut preference ${b.cutPreference || "N/A"} is not valid. Expected: ${pa.join("|")}`)), b.guillotineOptions !== void 0 && typeof b.guillotineOptions == "object" && Object.assign(Ee.guillotineOptions, b.guillotineOptions), b.stackHeight !== void 0) {
          const V = typeof b.stackHeight == "string" ? parseFloat(b.stackHeight) : b.stackHeight;
          Ee.stackHeight = V;
        }
      }
      if (v?.options) {
        const b = v.options;
        console.log("[init] sentOptions:", b), console.log("[init] available optionHandlers:", Object.keys(Li)), xl(b), v.saw ? (["stockType", "bladeWidth"].forEach((we) => {
          we in v.saw || q("error", `${we} is a required saw property`);
        }), (v.saw.cutType === "guillotine" || v.saw.cutType === "beam") && !("cutPreference" in v.saw) && q("error", "cutPreference is a required saw property for guillotine and beam cut types")) : q("error", "saw configuration is required");
        const V = ["enable", "colors"];
        console.log("[init] Processing options...");
        for (const de in b)
          console.log(`[init] Processing option: ${de}, hasHandler: ${de in Li}`), V.includes(de) || (se[de] = b[de]), de in Li && (console.log(`[init] Calling option handler for: ${de}`), Li[de](b[de]));
      }
      if (v.options.colors && "colors" in Li && Li.colors(v.options.colors), v.banding) {
        const b = v.banding;
        "locations" in b && b.locations && (Oi.locations = b.locations), "groups" in b && b.groups && (Oi.groups = b.groups), "rules" in b && b.rules && (Oi.rules = b.rules);
      }
      if (v.finish) {
        const b = v.finish;
        "locations" in b && b.locations && ($i.locations = b.locations), "groups" in b && b.groups && ($i.groups = b.groups), "rules" in b && b.rules && ($i.rules = b.rules);
      }
      if (v.planing) {
        const b = v.planing;
        "locations" in b && b.locations && (Fi.locations = b.locations), "groups" in b && b.groups && (Fi.groups = b.groups), "rules" in b && b.rules && (Fi.rules = b.rules);
      }
      _n("banding", v), _n("finish", v), _n("planing", v), Zl(v), ro(v), We.value = !0, G.debug && q("log", ["init complete"]);
      const T = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(T), bt(() => {
        no.value && !ac() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Mt = (y, v = !1) => {
      xs.value[y] = v;
    }, ao = (y) => y ? Iu(y)?.toLowerCase() : null, Yl = (y, v, T) => {
      try {
        if (!y || !v) return;
        const b = T !== null && T !== "" && T !== void 0 && T !== 0;
        if (v === "material" && (!T || T === "")) {
          const we = { material: null, t: null };
          D(y.autoId, we) || (console.log("[CHECKOUT] Material update failed - using fallback"), Mi(y, "material", null), Mi(y, "t", null), y.isNew || y.validate());
          return;
        }
        if (y.isNew)
          if (b)
            y.isNew = !1;
          else {
            Mi(y, v, T);
            return;
          }
        let V;
        if (v.includes(".")) {
          const we = v.split("."), Le = we[0], Ze = we.slice(1).join("."), Be = { ...y[Le] || {} };
          Mi(Be, Ze, T), V = { [Le]: Be }, console.log("[CHECKOUT] Nested field update:", { fieldName: v, topLevel: Le, nestedPath: Ze, value: T, updatedNested: Be, updates: V });
        } else
          V = { [v]: T }, console.log("[CHECKOUT] Simple field update:", { fieldName: v, value: T, updates: V });
        const de = D(y.autoId, V);
        console.log("[CHECKOUT] updateInputShape result:", de, "customData after:", y.customData), de || (console.log("[CHECKOUT] Field update failed - using fallback"), Mi(y, v, T), y.validate(), console.log("[CHECKOUT] After fallback, customData:", y.customData));
      } catch (b) {
        console.error("[CHECKOUT] Error updating field:", b);
      }
    }, Kl = () => {
    }, Zl = (y) => {
      if (hi(se, ["enable", "machining"]) && y?.machining) {
        for (const v in _t)
          y.machining[v] && (_t[v] = y.machining[v]);
        if (["holes", "hingeHoles"].forEach((v) => {
          y?.machining?.[v] && (_t[v].enabled = y?.machining?.[v].enabled);
        }), y?.machining?.corners?.types?.length && (_t.corners.enabled = !0, _t.corners.types = y.machining.corners.types), y.banding && y?.options?.enable?.banding) {
          if (!Ae) return;
          _t.banding = {
            enabled: !0
          }, Ae.options.length && (_t.banding.options = Ae.options), Ae.labels.length && (_t.banding.labels = Ae.labels), wo(Ae.pricing) && (_t.banding.pricing = Ae.pricing);
        }
      }
    }, Xl = (y = null) => {
      Ge.value = y, y && xe(y) && y.l && y.w ? le.value = !0 : alert(z("machining.enter_dimensions_first"));
    }, Jl = () => {
      le.value = !1;
    }, oo = (y = []) => {
      if (Ke.value = [], Ss.value = [], Mt("t", !1), !!y.length) {
        for (const v of y)
          if (v?.t)
            if (typeof v.t == "string" && v.t.includes(",")) {
              const T = lo(v.t, !0);
              T.length === 2 ? (ec(T), Mt("t", !0), v.t = Ke.value[0]) : q("error", "bonded thickness found which does not have 2 options");
            } else Ke.value.includes(v.t) || Ke.value.push(v.t);
        Ke.value.length > 1 && Mt("t", !0);
      }
    }, Ql = (y) => {
      if (!y) return { thicknesses: [], bondedThicknesses: [] };
      if (!Me.value?.length)
        return {
          thicknesses: Ke.value,
          bondedThicknesses: []
        };
      if (!y.material)
        return {
          thicknesses: Ke.value,
          bondedThicknesses: []
        };
      const v = Me.value.find((V) => V.name === y.material);
      if (!v)
        return {
          thicknesses: Ke.value,
          bondedThicknesses: []
        };
      const T = [...v.thicknesses], b = [];
      for (let V = 0; V < T.length; V++) {
        const de = T[V], we = lo(de), Le = [];
        if (we.length) {
          for (const Ze of we)
            T[V] = Ze, Le.push(V);
          V++;
        }
        Le.length && b.push(Le);
      }
      return {
        thicknesses: T,
        bondedThicknesses: b
      };
    }, ro = (y) => {
      if (y?.stock?.some((v) => v?.material)) {
        Me.value = [], Ke.value = [], Ss.value = [];
        const v = /* @__PURE__ */ new Map();
        for (const b of y.stock) {
          if (!b.material) continue;
          const V = b.material.toUpperCase();
          v.has(V) || v.set(V, /* @__PURE__ */ new Set()), b.t != null && v.get(V)?.add(U({ v: b.t }));
        }
        Me.value = Array.from(v.entries()).map(([b, V]) => ({
          name: b,
          thicknesses: Array.from(V).sort((we, Le) => we - Le)
        }));
        const T = /* @__PURE__ */ new Set();
        for (const b of Me.value)
          for (const V of b.thicknesses)
            T.add(U({ v: V }));
        Ke.value = Array.from(T).sort((b, V) => b - V), Me.value.length > 1 ? Mt("material", !0) : Mt("material", !1), Ke.value.length > 1 ? Mt("t", !0) : Mt("t", !1);
      } else
        oo(y.stock);
    }, ec = (y, v = null) => {
      if (!Array.isArray(y)) {
        q("error", "addBondedThicknesses expects an array");
        return;
      }
      const T = [];
      for (let b of y)
        se.numberFormat === "decimal" && (b = parseFloat(b)), Ke.value.push(b), v && v.thicknesses.push(b), T.push(Ke.value.length - 1);
      Ss.value.push(T);
    }, tc = (y) => {
      const { thicknesses: v } = Ql(y);
      return v?.length ? v.map((T) => ({
        label: T?.toString(),
        value: T
      })) : [];
    }, lo = (y, v = !1) => {
      if (typeof y == "string" && y.includes(",")) {
        const T = y.split(",");
        return v ? T.map((b) => U({ v: b })) : T;
      }
      return [];
    }, ic = () => {
      re.value ? nc() : sc();
    }, sc = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), re.value = !0;
    }, nc = () => {
      document.exitFullscreen && document.exitFullscreen(), re.value = !1;
    }, ac = () => {
      if (Se.value?.api?.whiteLabel) return !0;
      let y = !0;
      const v = document.querySelector("#smartcut-checkout a#credit");
      if (!v) return y = !1;
      const T = window.getComputedStyle(v);
      return T.display === "none" || T.display === "hidden" || T.opacity === "0" || T.color === "transparent" || T.position !== "absolute" || T.color !== "#4e4e4e" && T.color !== "rgb(78, 78, 78)" ? y = !1 : (ct.value = y, y);
    }, Fn = X(() => typeof G.findExtrasPrice == "function"), co = (y, v) => {
      let T, b;
      switch (v) {
        case "banding":
          T = Ae.options, b = Ae.labels;
          break;
        case "finish":
          T = Ne.options, b = Ne.labels;
          break;
        case "planing":
          T = qe.options, b = qe.labels;
          break;
        default:
          T = [], b = [];
      }
      wi(y, v, T, b);
    }, uo = (y) => {
      const v = Object.keys(y);
      return Math.max(...v.map((b) => b.split("|").length));
    }, ts = (y, v, T) => {
      if (!y)
        return [];
      if (T > 0 && !v[T - 1])
        return [];
      const b = /* @__PURE__ */ new Set();
      for (const de of Object.keys(y)) {
        const we = de.split("|");
        if (we.length > T) {
          let Le = !0;
          for (let Ze = 0; Ze < T; Ze++) {
            const st = v[Ze], Be = we[Ze];
            if (st && st !== Be) {
              Le = !1;
              break;
            }
          }
          Le && b.add(we[T]);
        }
      }
      return Array.from(b);
    }, Ln = (y, v, T, b) => {
      let V, de;
      switch (v) {
        case "banding":
          V = Ae.options, de = Ae.labels;
          break;
        case "finish":
          V = Ne.options, de = Ne.labels;
          break;
        case "planing":
          V = qe.options, de = qe.labels;
          break;
        default:
          V = [], de = [];
      }
      return na(y, v, T, b, V, de);
    }, oc = (y, v, T) => {
      let b, V;
      switch (v) {
        case "banding":
          b = Ae.options, V = Ae.labels;
          break;
        case "finish":
          b = Ne.options, V = Ne.labels;
          break;
        case "planing":
          b = qe.options, V = qe.labels;
          break;
        default:
          b = [], V = [];
      }
      return na(y, v, T, G.findExtrasPrice, b, V);
    }, rc = te({}), En = (y = 1) => {
      for (let v = y; v--; ) {
        let T = {
          l: null,
          w: Ee.stockType === "linear" ? r.inputStock.value[0]?.w : null,
          t: Ke.value.length ? Ke.value[0] : null,
          q: 1,
          material: Me.value?.length === 1 ? Me.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const V = r.inputShapes.value[r.inputShapes.value.length - 1];
          T.material = V.material, T.t = V.t;
        }
        const b = g(T);
        b && (Ae?.labels?.length && wi(b, "banding", Ae.options, Ae.labels), Ne?.labels?.length && wi(b, "finish", Ne.options, Ne.labels), qe?.labels?.length && wi(b, "planing", qe.options, qe.labels));
      }
    }, Dn = (y = {}) => {
      const v = {
        q: 1,
        // Always set quantity to 1
        ...y
      }, T = g(v);
      return T && (Ee.stockType === "linear" && r.inputStock.value[0]?.w && (T.w = r.inputStock.value[0].w), Ke.value.length && (T.t = Ke.value[0]), Me.value?.length === 1 && (T.material = Me.value[0].name), Ae?.labels?.length && wi(T, "banding", Ae.options, Ae.labels), Ne?.labels?.length && wi(T, "finish", Ne.options, Ne.labels), qe?.labels?.length && wi(T, "planing", qe.options, qe.labels)), T;
    }, lc = (y) => {
      if (Ke.value.length)
        for (const v of y) {
          if (!v.t) return;
          const T = Ke.value.findIndex(
            (de) => U({ v: de }) === v.t
          ), b = Ss.value.find((de) => de.includes(T));
          if (!b) return;
          const V = Math.min(
            ...b.map((de) => Ke.value[de])
          );
          U({ v: v.t }) > V && (v.q = Number(v.q) * (U({ v: v.t }) / V), v.notes = `Bond to form ${v.t.valueOf()}`, v.t = V);
        }
    }, fo = () => {
      oe(), M(null), S.stockList.value = [], S.shapeList.value = [], S.cutList.value = [];
    }, Rn = () => {
      r.inputShapes.value.length = 0, G.inputType !== "formula" && bt(() => En());
    }, cc = () => {
      Uu("Checkout/lastMigrationVersion");
    }, uc = async () => {
      if (q("calculating"), it.value) return !1;
      if (it.value = !0, ri.value = !1, !(await Em({
        t: z,
        partTrim: se.partTrim,
        maxShapes: se.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Ae.pricing,
        finishPricing: Ne.pricing,
        planingPricing: qe.pricing,
        findExtrasPrice: G.findExtrasPrice,
        extrasValidationRules: ql.value,
        onLimit: () => {
          C({
            type: "error",
            message: z("limits.max_parts") + " " + se.maxParts
          });
        }
      })).valid) {
        q("validation-error"), it.value = !1;
        return;
      }
      fo();
      const v = r.inputShapes.value.map((b) => R(b)).filter(Boolean);
      if (v.length !== r.inputShapes.value.length)
        return C({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), it.value = !1, !1;
      lc(v), G.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((b) => ({ l: b.l, w: b.w })),
        "parts",
        v.map((b) => ({ l: b.l, w: b.w }))
      );
      const T = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: v.map((b) => b.toData()),
        inputStock: r.inputStock.value.map((b) => b.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Oe,
        extrasOptions: $(),
        source: "checkout",
        sourceVersion: "4.0.27"
      };
      console.log("calculationData", T), await ce.connect(), ce.emit("calculate", T);
    }, _n = (y, v) => {
      if (console.log(`[initExtra] Starting init for ${y}`), console.log(`[initExtra] initData[${y}]:`, v?.[y]), console.log(`[initExtra] options.enable[${y}]:`, se.enable?.[y]), Mt(y, !1), !y || !v || !v?.[y]) {
        console.log(`[initExtra] Early return: missing extraType or initData[${y}]`);
        return;
      }
      if (!hi(se, ["enable", y])) {
        console.log(`[initExtra] Early return: ${y} not enabled in options`);
        return;
      }
      const T = [y, "pricing"];
      if (!vo(v, T)) {
        q("error", `${T.join(".")} not found in sent data`);
        return;
      }
      const b = hi(v, T);
      if (typeof b != "object") {
        q("error", `${T.join(".")} data must be an object`);
        return;
      }
      if (!wo(b)) {
        q("error", `if provided, ${T.join(".")} data must contain some values`);
        return;
      }
      const V = Object.keys(b), de = Object.values(b);
      if (!V.length) {
        q("error", `no ${T.join(".")} pricing found`);
        return;
      }
      const we = /,/;
      for (const Be of V)
        if (we.test(Be)) {
          q("error", `${T} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (de.some((Be) => isNaN(Be))) {
        q("error", `${T} values must be a number`);
        return;
      }
      const Le = uo(b), Ze = [y, "labels"];
      let st = [];
      if (vo(v, Ze))
        st = hi(v, Ze);
      else {
        q("error", `${Ze.join(".")} not found`);
        return;
      }
      if (!st) {
        q("error", `${Ze.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(st)) {
        q("error", `${Ze.join(".")} data must be an array`);
        return;
      }
      if (!st?.length) {
        q("error", `if provided, ${Ze.join(".")} data must contain values`);
        return;
      }
      if (st.length !== Le) {
        q("error", `${Ze.join(".")} length (${st.length}) must match the number of levels in ${T.join(".")} (${Le})`);
        return;
      }
      switch (y) {
        case "banding": {
          Ae.labels = st, Ae.pricing = b;
          const Be = Mn(b);
          Ae.options = Be, P("banding", Be, st, b);
          break;
        }
        case "finish": {
          Ne.labels = st, Ne.pricing = b;
          const Be = Mn(b);
          Ne.options = Be, P("finish", Be, st, b);
          break;
        }
        case "planing": {
          qe.labels = st, qe.pricing = b;
          const Be = Mn(b);
          qe.options = Be, P("planing", Be, st, b);
          break;
        }
      }
      if (io.value = $(), console.log(`[initExtra] Enabling field: ${y}`), Mt(y, !0), console.log("[initExtra] Field enabled state:", xs.value[y]), console.log(`[initExtra] ${y} data:`, y === "banding" ? Ae : y === "finish" ? Ne : qe), !!r.inputShapes.value?.length)
        for (const Be of r.inputShapes.value)
          co(Be, y);
    }, Mn = (y) => {
      const v = [], T = Object.keys(y), b = uo(y);
      for (let V = b; V--; ) v.push(/* @__PURE__ */ new Set());
      for (const V of T)
        V.split("|").forEach((we, Le) => v[Le].add(we));
      for (let V = 0; V < b; V++)
        v[V] = Array.from(v[V]);
      return v;
    }, Is = (y, v) => {
      if (!v) return;
      y !== "info" && Object.keys(At).forEach((b) => {
        b !== y && b !== "info" && (At[b] = null);
      });
      const T = r.inputShapes.value.indexOf(v);
      At[y] === T ? (Ge.value = null, At[y] = null, rc.value[y] = void 0) : (Ge.value = v, At[y] = T);
    }, ho = (y) => {
      if (q("log", ["load event received"]), !We.value) {
        q("log", ["load event received"]);
        return;
      }
      dc(y.detail);
    }, dc = (y) => {
      if (q("log", ["loading parts..."]), !y || !y?.inputs?.parts?.length) {
        q("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let v = 0;
      for (const b of y.inputs.parts) {
        const V = Dn(b);
        V ? V.issues?.length && q("log", [`SmartCut - issues found while importing part at index ${v}`, V.issues]) : q("log", [`SmartCut - error loading part at index ${v}`, b]), v++;
      }
      r.inputShapes.value.flatMap((b) => Nr(b.issues)).length && C({
        type: "error",
        message: z("errors.general.issues_found")
      }), q("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, fc = (y) => {
      r.inputShapes.value.length = 0, bt(() => {
        for (const v of y)
          v.t = r.inputStock.value?.[0]?.t ?? null, Dn(v);
      });
    };
    je(() => G.inputStock, (y) => {
      if (fo(), Array.isArray(y) || console.warn("SmartCut - stock must be passed as an array"), !!y?.length) {
        r.inputStock.value.length = 0, Me.value.length || oo(y.map((v) => v.toData()));
        for (const v of y)
          x({
            ...v.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", v), C({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? bt(() => {
            r.inputShapes.value.forEach((T) => {
              const b = T.material ? Me.value.find((V) => V.name === T.material) : null;
              if (b)
                b.thicknesses.includes(U({ v: T.t })) || (T.t = U({ v: b.thicknesses[0] }));
              else if (Me.value?.length === 1) {
                T.material = Me.value[0].name;
                const V = Me.value[0];
                V.thicknesses.includes(U({ v: T.t })) || (T.t = U({ v: V.thicknesses[0] }));
              } else if (Me.value?.length > 1 && T.t) {
                const V = Me.value.find((de) => de.thicknesses.some((we) => U({ v: we }) === U({ v: T.t })));
                V ? T.material = V.name : (T.material = Me.value[0].name, T.t = U({ v: Me.value[0].thicknesses[0] }));
              } else Me.value?.length > 1 ? (T.material = Me.value[0].name, T.t = U({ v: Me.value[0].thicknesses[0] })) : !T.t && r.inputStock.value[0]?.t && (T.t = U({ v: r.inputStock.value[0].t }));
            });
          }) : G.inputType !== "formula" && bt(() => En());
          const v = f(r.inputSaw.value);
          v.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(v))), C({
            type: "error",
            message: z("errors.validation.stock_issue"),
            additional: v.map((T) => T.message)
          }));
        }
      }
    }, { immediate: !0 }), je(r.inputShapes, (y) => {
      q("inputs-changed"), y.forEach((v) => {
        Ee.stockType === "linear" && (v.w = r.inputShapes.value[0]?.w);
        const T = Me.value.find((b) => b.name === v.material);
        T && (T.thicknesses.includes(U({ v: v.t })) || (v.t = U({ v: T.thicknesses[0] })));
      });
    }, { deep: !0 }), je(() => se.numberFormat, (y) => {
      u(y);
    }), je(() => Ee, (y) => {
      r.inputSaw.value = new ol(y);
    }, { deep: !0 }), Ht(async () => {
      if (J.value) return;
      const y = "4.0.27";
      Hu(
        y,
        "4.0.23",
        oi.value,
        "Checkout/lastMigrationVersion",
        cc
      ) && (oi.value = y);
      const b = new URL(window.location.href), V = b.searchParams.toString(), de = b.origin + b.pathname + (V ? `?${V}` : "");
      ai.value !== de && Rn(), ai.value = de, ge.value = se.locale, await ce.connect(), ce.emit("getUserFromDomain"), window.addEventListener("smartcut/load", ho), J.value = !0, G.debug && q("log", [
        "ready...",
        "fields:",
        Qi.value.map((we) => we.name)
      ]);
    });
    const hc = () => {
      ce && ce.disconnect();
    };
    return hs(() => {
      window.removeEventListener("smartcut/load", ho), hc(), delete window.smartcutCheckout;
    }), e({
      init: Ul,
      clear: Rn,
      getAvailablePricingOptions: ts,
      getExtrasPrice: oc,
      formatPrice: G.formatPrice,
      findExtrasPrice: G.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: co,
      createAndAddInputShape: Dn,
      initMaterialsThicknesses: ro
    }), (y, v) => {
      const T = bi("FontAwesomeIcon");
      return w(), A(Te, null, [
        We.value ? Y("", !0) : (w(), ke(er, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        Ge.value?.machining && le.value ? (w(), ke(k(n), {
          key: 1,
          "input-shape": Ge.value,
          "onUpdate:inputShape": v[0] || (v[0] = (b) => Ge.value = b),
          translate: !0,
          options: _t,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": k(na),
          "get-available-pricing-options": ts,
          "format-price": t.formatPrice,
          onClose: Jl
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : Y("", !0),
        We.value ? (w(), A("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ce(["smartcut-content", { fullscreen: re.value }])
        }, [
          Yt.value && !t.readonly ? (w(), A("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: et(ks.value),
            onClick: v[1] || (v[1] = (b) => ic())
          }, [
            Re(T, { icon: ["fass", "expand"] }),
            as(" " + Q(k(z)("general.full_screen")), 1)
          ], 4)) : Y("", !0),
          no.value ? (w(), A("a", {
            key: 1,
            id: "credit",
            style: Hl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, Q(k(wu)(k(z)("general.powered_by"))), 1)) : Y("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: et({ "grid-template-columns": zl.value })
          }, [
            k(r).inputShapes.value.length ? (w(), A("div", Pb, [
              v[6] || (v[6] = O("div", { class: "cell id" }, null, -1)),
              (w(!0), A(Te, null, Ve(Qi.value, (b) => (w(), A("div", {
                key: b.name,
                class: Ce(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(b.name) || b.type === "boolean" }])
              }, Q(k(z)(b.label)), 3))), 128)),
              k(me) === "development" && ca ? (w(), A("div", Cb, " Info ")) : Y("", !0),
              v[7] || (v[7] = O("div", { class: "cell del" }, null, -1))
            ])) : Y("", !0),
            (w(!0), A(Te, null, Ve(B.value, (b, V) => (w(), A("div", {
              key: V,
              class: "row inputs"
            }, [
              O("div", Tb, [
                O("div", {
                  class: "id",
                  style: et({
                    background: se.colors.partA,
                    color: se.colors.text
                  })
                }, Q(V + 1), 5)
              ]),
              (w(!0), A(Te, null, Ve(Qi.value, (de) => (w(), A("div", {
                key: de.name,
                class: "cell"
              }, [
                b ? (w(), ke(Ib, {
                  key: 0,
                  field: de,
                  item: b,
                  index: V,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": se.numberFormat,
                  "orientation-model": se.orientationModel,
                  "stock-grain": k(c)(b),
                  "material-options": Me.value?.map((we) => ({ label: we.name, value: we.name })) || [],
                  "thickness-options": de.name === "t" ? tc(b) : [],
                  "banding-enabled": At.banding === V ? b : null,
                  onUpdate: (we) => Yl(b, de.propertyPath || de.fieldMap || de.name, we),
                  onValidation: v[2] || (v[2] = (we, Le) => Kl()),
                  onOpenBanding: (we) => Is("banding", b),
                  onOpenMachining: (we) => Xl(b),
                  onOpenFinish: (we) => Is("finish", b),
                  onOpenPlaning: (we) => Is("planing", b)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : Y("", !0)
              ]))), 128)),
              k(me) === "development" && ca ? (w(), A("div", Ab, [
                O("button", {
                  class: Ce(["c-btn", { selected: At.info === V }]),
                  style: et(ks.value),
                  type: "button",
                  onClick: (de) => Is("info", b)
                }, " i ", 14, Ob)
              ])) : Y("", !0),
              O("div", $b, [
                O("button", {
                  disabled: k(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${k(z)("actions.remove")} ${k(Su)(k(z)("woodwork.part"))}`,
                  onClick: (de) => k(p)(b.autoId)
                }, [
                  Re(T, { icon: ["fass", "trash"] })
                ], 8, Fb)
              ]),
              Re(k(s), {
                item: b,
                "num-columns": es.value
              }, null, 8, ["item", "num-columns"]),
              At.banding === V && Ae.options.length > 0 && Fn.value ? (w(), ke(Gs, {
                key: 1,
                shape: b,
                "shape-index": V,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Ae.keys,
                "all-options": Ae.options,
                pricing: Ae.pricing,
                labels: Ae.labels,
                locations: Oi.locations,
                "location-groups": Oi.groups,
                "user-friendly-field-map": k(zt),
                "part-columns": es.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": Ln,
                "orientation-model": se.orientationModel,
                "get-available-pricing-options": ts,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              At.finish === V && Ne.options.length > 0 && Fn.value ? (w(), ke(Gs, {
                key: 2,
                shape: b,
                "shape-index": V,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ne.keys,
                "all-options": Ne.options,
                pricing: Ne.pricing,
                labels: Ne.labels,
                locations: $i.locations,
                "location-groups": $i.groups,
                "user-friendly-field-map": k(zt),
                "part-columns": es.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": Ln,
                "orientation-model": se.orientationModel,
                "get-available-pricing-options": ts,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              At.planing === V && qe.options.length > 0 && Fn.value && (console.log("[CheckoutCalculator] Rendering planing ExtrasInputs with location-groups:", se.extrasLocationGroups?.planing), !0) ? (w(), ke(Gs, {
                key: 3,
                shape: b,
                "shape-index": V,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": qe.keys,
                "all-options": qe.options,
                pricing: qe.pricing,
                labels: qe.labels,
                locations: Fi.locations,
                "location-groups": Fi.groups,
                "user-friendly-field-map": k(zt),
                "part-columns": es.value,
                "format-price": t.formatPrice,
                "find-extras-price": G.findExtrasPrice,
                "get-price": Ln,
                "orientation-model": se.orientationModel,
                "get-available-pricing-options": ts,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              At.info === V ? (w(), A("div", {
                key: 4,
                id: "shape-info",
                style: et({ "grid-column-end": "span " + es.value })
              }, [
                O("div", null, Q(b?.banding), 1),
                O("div", null, Q(io.value?.banding?.options || "No options"), 1)
              ], 4)) : Y("", !0)
            ]))), 128))
          ], 4),
          O("div", Lb, [
            t.readonly ? Y("", !0) : (w(), A("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${k(z)("actions.add")} ${k(z)("woodwork.part")}`,
              style: et(ks.value),
              onClick: v[3] || (v[3] = (b) => En())
            }, [
              Re(T, { icon: ["fass", "plus-large"] }),
              as(" " + Q(`${k(z)("actions.add")} ${k(z)("woodwork.part")}`), 1)
            ], 12, Eb)),
            O("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": k(z)("actions.calculate"),
              style: et(ks.value),
              disabled: !k(r).inputStock.value?.length || it.value,
              onClick: v[4] || (v[4] = (b) => uc())
            }, [
              Re(T, { icon: ["fass", "calculator"] }),
              as(Q(k(z)("actions.calculate")), 1)
            ], 12, Db),
            t.readonly ? Y("", !0) : (w(), A("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": k(z)("actions.clear"),
              onClick: v[5] || (v[5] = (b) => Rn())
            }, [
              Re(T, { icon: ["fass", "trash"] })
            ], 8, Rb)),
            O("div", _b, Q(k(l)) + Q(se?.maxParts ? "/" + se.maxParts : ""), 1)
          ]),
          ws.value && !t.readonly ? (w(), ke(k(a), {
            key: 2,
            ref: "import",
            "number-format": se.numberFormat,
            "custom-fields": $n.value,
            "banding-options": Ae.options,
            "banding-labels": Ae.labels,
            "finish-options": Ne.options,
            "finish-labels": Ne.labels,
            onImport: fc
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : Y("", !0),
          li.value ? (w(), A("div", Mb, [
            vi.value ? (w(), A("div", Bb, Q(vi.value), 1)) : Y("", !0),
            O("pre", jb, Q(On.value), 1)
          ])) : Y("", !0),
          (se.enable.diagram ? it.value && !k(K).complete : it.value || k(K).complete) ? (w(), A("div", Nb, [
            Re(er, {
              size: 50,
              number: k(K).shapeCount,
              complete: k(K).complete,
              "show-number": se.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : Y("", !0),
          fs(O("div", Vb, [
            k(m)?.saw?.stockType !== "roll" ? (w(), A("div", Gb, Q(k(m)?.stack?.number ? k(m).stack.number : 1), 1)) : Y("", !0),
            Re(Jg, {
              "element-id": "diagram",
              "number-format": se.numberFormat,
              "decimal-places": se.decimalPlaces,
              colors: se.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [dn, se.enable.diagram && k(K).complete]
          ]),
          se.enable.diagram && k(_).length > 1 && k(K).complete ? (w(), ke(gg, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": k(j),
            "stock-list": k(_),
            onShowStock: k(M)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : Y("", !0)
        ], 2)) : Y("", !0),
        k(me) === "development" && ca ? (w(), A("div", qb, [
          v[8] || (v[8] = O("div", null, "Result data", -1)),
          Re(k(o), {
            data: [ut.value?.parts?.[0]],
            paths: ["checkoutResult.parts"]
          }, null, 8, ["data"])
        ])) : Y("", !0)
      ], 64);
    };
  }
}), DS = /* @__PURE__ */ Tt(zb, [["__scopeId", "data-v-8710d253"]]), Nl = pe(["select", "multiselect", "range", "boolean", "search"]), Vl = pe(["asc", "desc"]), Gl = pe(["grid", "list"]), Wb = E({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: h().optional().describe("User-friendly display name"),
  description: h().optional().describe("Detailed description"),
  // Categorization
  supplier: h().optional().describe("Supplier name"),
  category: h().optional().describe("Stock category"),
  // UI metadata
  leadTime: d().int().optional().describe("Lead time in days"),
  minQuantity: d().int().positive().optional().describe("Minimum order quantity")
});
Pi.merge(Wb).describe("Stock option with filtering and display metadata");
const Hb = E({
  field: h().describe("Property name to filter on"),
  type: Nl,
  label: h().describe("Display label"),
  custom: L().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: d().optional().describe("Minimum value for range filter"),
  max: d().optional().describe("Maximum value for range filter"),
  step: d().optional().describe("Step size for range filter"),
  // Select filter options
  options: ee(E({
    label: h(),
    value: be()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: L().default(!0).describe("Whether filter is visible"),
  collapsible: L().default(!0).describe("Whether filter panel is collapsible"),
  order: d().int().optional().describe("Display order")
}), Ub = E({
  field: h().describe("Field to sort by"),
  order: Vl,
  label: h().optional().describe("Display label for sort option")
}), Yb = E({
  // Filter configuration
  availableFilters: ee(Hb).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ee(h()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Ub.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Gl.default("grid").describe("Default display mode"),
  itemsPerPage: d().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: L().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: L().default(!0).describe("Allow multiple stock selection"),
  maxSelection: d().int().positive().optional().describe("Maximum number of stock items to select")
}), Kb = E({
  field: h(),
  value: be(),
  type: Nl
});
E({
  // Active filters
  activeFilters: ee(Kb).default([]).describe("Currently active filters"),
  // Search
  searchQuery: h().default("").describe("Current search query"),
  // Sort
  sortBy: h().default("cost").describe("Current sort field"),
  sortOrder: Vl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Gl.default("grid").describe("Current display mode"),
  currentPage: d().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ee(h()).default([]).describe("IDs of selected stock items")
});
function Zb() {
  return Yb.parse({});
}
const Xb = /* @__PURE__ */ De({
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
  setup(t) {
    const e = t;
    return (i, s) => (w(), A(Te, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (w(), A("div", {
        key: 0,
        class: "group issues",
        style: et({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, Q(e.item.issues.filter((n) => n.type === "error").flatMap((n) => k(Ki)(n.message)).join(`
`)), 1)
      ], 4)) : Y("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (w(), A("div", {
        key: 1,
        class: "group warnings",
        style: et({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, Q(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => k(Ki)(n.message)).join(`
`)), 1)
      ], 4)) : Y("", !0)
    ], 64));
  }
}), Jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Xb }, Symbol.toStringTag, { value: "Module" })), dt = {
  precisionFixed: Vc,
  format: Nc,
  select: ot,
  selectAll: fr,
  scaleLinear: Ft,
  scaleSequential: os,
  axisTop: ur,
  axisBottom: Hs,
  axisRight: dr,
  axisLeft: Us,
  symbol: jc,
  path: Bc,
  arc: Mc,
  symbolTriangle: _c,
  symbolSquare: Rc
};
class Qb {
  HTMLElement;
  HTMLElementWidth;
  el;
  numberFormat;
  decimalPlaces;
  vueComponent;
  shape;
  h;
  w;
  shapeL;
  shapeW;
  // Padding values - responsive based on size
  edgePadding = 15;
  // For left and bottom when axes shown
  axisPadding = 30;
  // For top and right when axes shown
  minSizeForAxes = 400;
  // Minimum width/height to show axes
  xScale = dt.scaleLinear();
  yScale = dt.scaleLinear();
  yScaleFlipped = dt.scaleLinear();
  measurementScale = dt.scaleLinear();
  xAxis;
  yAxis;
  formatDp;
  svgCanvas;
  currentSide = 0;
  bandingStrokeWidth = 4;
  shapeGroup;
  bandingGroup;
  holeGroup;
  hingeHoleGroup;
  cornerGroup;
  legendGroup;
  pointGroup;
  loaded = !1;
  constructor({
    HTMLElement: e,
    vueComponent: i = null,
    shape: s,
    numberFormat: n = "decimal",
    decimalPlaces: a = 2
  }) {
    this.HTMLElement = e, this.numberFormat = n, this.decimalPlaces = a, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = i, this.shape = s, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = dt.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = dt.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = dt.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (a + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${a})`).attr("class", "axis x"), this.xAxis.call(
      dt.axisTop(this.xScale).ticks(10).tickSize(-this.h + (a + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && dt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      dt.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && dt.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)).style("fill", "url(#stripes)");
    const o = dt.path(), r = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const f = this.shape.machining.getCorner(u);
      f && f.type ? (r.push(f.size ? U({ v: f.size ?? 0, o: this }) : 0), l.push(f.type)) : (r.push(0), l.push(null));
    });
    const c = (u, f, p, g, x) => {
      l[u] === "radius" ? o.arcTo(
        this.xScale(f),
        this.getYScale()(p),
        this.xScale(g),
        this.getYScale()(x),
        this.measurementScale(r[u])
      ) : l[u] === "bevel" ? o.lineTo(this.xScale(g), this.getYScale()(x)) : (o.lineTo(this.xScale(f), this.getYScale()(p)), o.lineTo(this.xScale(g), this.getYScale()(x)));
    };
    o.moveTo(this.xScale(0), this.getYScale()(r[0])), c(0, 0, 0, r[0], 0), (l[0] === "bevel" || l[1] === "bevel") && o.lineTo(this.xScale(this.shapeL - r[1]), this.getYScale()(0)), c(1, this.shapeL, 0, this.shapeL, r[1]), (l[1] === "bevel" || l[2] === "bevel") && o.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - r[2])
    ), c(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - r[2],
      this.shapeW
    ), (l[2] === "bevel" || l[3] === "bevel") && o.lineTo(this.xScale(r[3]), this.getYScale()(this.shapeW)), c(3, 0, this.shapeW, 0, this.shapeW - r[3]), o.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", o.toString());
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
    ).join("circle").attr("class", "hole").classed("invalid", (e) => e.isValid === !1).classed("partial", (e) => !e.isThroughShape(this.shape)).attr("cx", (e) => this.xScale(e.x)).attr("cy", (e) => {
      const i = e.getYDrawPosition(this.shape, this.currentSide);
      return this.getYScale()(i);
    }).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const i = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("circle").data(i).join("circle").attr("class", "hole").classed("invalid", (s) => s.isValid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => this.getYScale()(s.getYDrawPosition(this.shape, this.currentSide))).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const e = this.shape.banding;
    if (!e) return;
    const i = -1, s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, a = s ? this.axisPadding : 0, o = [];
    for (const l of ti)
      if (e[l])
        switch (l) {
          case "l1":
            o.push({
              x1: n - i,
              x2: n - i,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            o.push({
              x1: this.w - a + i,
              x2: this.w - a + i,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            o.push({
              x1: n + this.getCornerBandingSize(0),
              x2: this.w - a - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? i : -i),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
            });
            break;
          case "w2":
            o.push({
              x1: n + this.getCornerBandingSize(3),
              x2: this.w - a - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(o).join("line").attr("class", "banding").attr("x1", (l) => l.x1).attr("x2", (l) => l.x2).attr("y1", (l) => l.y1).attr("y2", (l) => l.y2).attr("stroke-width", this.bandingStrokeWidth);
    const r = dt.path();
    [0, 1, 2, 3].forEach((l) => {
      const c = this.shape.machining.getCorner(l);
      if (!c?.type) return;
      let u, f, p;
      switch (l) {
        case 0:
          if (!ye(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(U({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, p = {
            x: this.xScale(U({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!ye(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - U({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, f = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, p = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(U({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!ye(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - U({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, p = {
            x: this.xScale(this.shapeL - U({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!ye(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(U({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, p = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - U({ v: c.size ?? 0, o: this })) + i
          };
          break;
        default:
          return;
      }
      if (r.moveTo(u.x, u.y), c.type === "radius")
        switch (r.arcTo(
          f.x,
          f.y,
          p.x,
          p.y,
          this.measurementScale(c.size ?? 0)
        ), l) {
          case 0:
          case 2:
            r.lineTo(p.x + i, p.y);
            break;
          case 1:
          case 3:
            r.lineTo(p.x, p.y - (this.currentSide === 0 ? i : -1));
            break;
        }
      else c.type === "bevel" && r.lineTo(p.x, p.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][l]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", r.toString());
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
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.axisPadding : 0;
    if (e && this.yAxis) {
      const n = this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
      this.yAxis.call(
        dt.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, o, r) {
        (o === 0 || o === r.length - 1) && dt.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(e) {
    const i = this.shape.machining.getCorner(e);
    return i?.type ? this.measurementScale(i.size ?? 0) : 0;
  }
  updateSize() {
    if (this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let e = this.shape.shortSide / this.shape.longSide;
    this.w = this.HTMLElementWidth;
    const i = this.shouldShowAxes(), s = i ? this.edgePadding : 0, n = i ? this.edgePadding : 0, a = i ? this.axisPadding : 0, o = i ? this.axisPadding : 0;
    if (this.w - (s + a) < 0) return;
    let r = window.innerHeight - (o + n) - 20;
    r > 600 && (r = 600), this.xScale.domain([0, this.shapeL]).range([s, this.w - a]), e > 0.3 ? this.h = this.xScale(this.shape.shortSide) + o : (e = 0.3, this.h = this.w * e), this.h > r && (this.h = r, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([s, this.w - a])), this.yScale.domain([this.shapeW, 0]).range([o, this.h - n]), this.yScaleFlipped.domain([0, this.shapeW]).range([o, this.h - n]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (s + a)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const ey = { id: "machining" }, ty = { class: "inputs" }, iy = {
  key: 0,
  class: "debug"
}, sy = {
  key: 1,
  class: "shape-name"
}, ny = { class: "shape-dimensions" }, ay = {
  key: 2,
  class: "sides-wrapper"
}, oy = { class: "menu" }, ry = {
  key: 4,
  class: "button-wrapper"
}, ly = { class: "grid-table" }, cy = { class: "row table-heading" }, uy = {
  key: 0,
  class: "cell id"
}, dy = {
  key: 0,
  class: "cell"
}, fy = { class: "id" }, hy = { class: "cell" }, py = ["onClick"], gy = {
  key: 6,
  class: "menu-prompt"
}, my = !1, by = /* @__PURE__ */ De({
  __name: "Machining",
  props: /* @__PURE__ */ go({
    env: { default: "production" },
    inputShape: { default: null },
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
    inputShape: {
      required: !0
    },
    inputShapeModifiers: {}
  }),
  emits: /* @__PURE__ */ go(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = ji(() => Promise.resolve().then(() => to)), s = t, n = e, a = "production", o = te(), r = X(() => jl(Z.value)), l = X(() => {
      if (!f.value?.length) return 0;
      if (J.value === "banding") return 1;
      let re = Object.values(u.value).filter((ce) => ce.enabled).length;
      return re += 2, re;
    }), c = X(() => {
      if (!f.value.length || J.value === "banding") return;
      const re = {
        id: "34px",
        del: "30px"
      }, ce = [];
      return f.value.forEach((Pe) => {
        const se = u.value[Pe];
        se.enabled && ce.push(se.w ?? "1fr");
      }), ce.unshift(re.id), ce.push(re.del), ce.join(" ");
    }), u = X(() => !J.value || J.value === "banding" ? null : it[J.value]), f = X(() => !J.value || J.value === "banding" ? [] : Object.keys(it[J.value]).filter((re) => it[J.value][re].enabled)), p = X(() => J.value ? $() : []), g = X(() => {
      const re = Z.value?.machining?.corners?.map((ce) => ce?.isPresent?.() ? ce.getCorner() : null)?.filter((ce) => ce) ?? [];
      return [...ti, ...re];
    }), x = (re = !0) => {
      re ? oi.value = re : bt(() => oi.value = !1);
    }, R = () => {
      K(), oe(), C(), B();
    }, D = (re) => {
      if (J.value === "corners")
        switch (re) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return re;
        }
      return re + 1;
    }, I = () => J.value !== "banding", P = (re, ce = null) => {
      if (!re?.length) return [];
      let Pe = "None";
      ce === "depth" && (Pe = "Through");
      const se = [{ label: Pe, value: null }];
      return re.forEach((Ee) => {
        const Ge = Ee.toString().charAt(0).toUpperCase() + Ee.toString().slice(1);
        se.push({ label: Ge, value: Ee });
      }), se;
    }, $ = () => {
      if (!J.value) return [];
      if (J.value === "banding") return [];
      const re = Z.value.machining[J.value];
      return Array.isArray(re) ? re : [re];
    };
    let S = null;
    const N = () => {
      if (!Z.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), S = new Qb({
        HTMLElement: o.value,
        shape: Z.value,
        vueComponent: null
      }), S.init(), S.updateSize(), ai.value = !0;
    }, _ = Sc(() => {
      ai.value && S && S.updateSize();
    }, 10);
    or(o, () => {
      _();
    });
    const F = () => {
      ut.value = ut.value === 0 ? 1 : 0, S.flip();
    }, H = () => {
      switch (J.value) {
        case "holes":
          j();
          break;
        case "hingeHoles":
          m();
          break;
        case "corners":
          M();
          break;
      }
    }, j = () => {
      Z.value.machining.addHole({
        x: U({ v: Z.value.longSide }) / 2,
        y: U({ v: Z.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? U({ v: Z.value.t }) ?? 0,
        face: ut.value
      }), S.createHoles();
    }, m = () => {
      Z.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: ut.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), S.createHingeHoles();
    }, M = () => {
      const re = s.options.corners.types?.[0] || "radius", ce = s.options.corners.minValue || 5;
      for (let Pe = 0; Pe < 4; Pe++)
        Z.value.machining.setCorner({
          index: Pe,
          type: re,
          size: ce
        });
      S.createCorners();
    }, K = () => {
      Z.value.machining.holes.length = 0;
    }, oe = () => {
      Z.value.machining.hingeHoles.length = 0;
    }, C = () => {
      Z.value.machining.corners.forEach((re) => {
        re.size = null, re.type = null;
      }), Z.value.banding.sides.a = !1, Z.value.banding.sides.b = !1, Z.value.banding.sides.c = !1, Z.value.banding.sides.d = !1;
    }, B = () => {
      Z.value.banding = {
        sides: {
          a: "",
          b: "",
          c: "",
          d: "",
          y1: "",
          y2: "",
          x1: "",
          x2: ""
        }
      };
    }, W = (re) => {
      switch (J.value) {
        case "holes":
          return Z.value.machining.holes.splice(re, 1);
        case "hingeHoles":
          return Z.value.machining.hingeHoles.splice(re, 1);
        case "corners":
          Z.value.machining.corners[re].size = null, Z.value.machining.corners[re].type = null;
          return;
      }
    }, G = () => {
      switch (J.value) {
        case "holes":
          return K();
        case "hingeHoles":
          return oe();
        case "corners":
          return C();
      }
    }, q = () => {
      if (We.value = [], !!s.options.banding.enabled) {
        x();
        for (const re in Z.value.banding)
          Z.value.banding[re] ? s.options.banding.enableTypes && s.options.banding.types?.length && (Z.value.banding[re] || We.value.push({
            index: re,
            message: "Please select a type"
          })) : Z.value.banding[re] = "";
        x(!1);
      }
    }, le = (re) => {
      const ce = We.value.filter((Pe) => Pe.index === re);
      return ce.length ? ce.map((Pe) => Pe.message) : [];
    }, me = (re) => {
      const ce = We.value.filter((se) => se.index === re && se?.fields), Pe = ce.flatMap((se) => se.fields);
      return ce.length ? Pe : [];
    }, ge = (re, ce) => {
      const Pe = me(re);
      return Pe?.length ? Pe.includes(ce) : !1;
    }, Se = () => n("close"), Oe = (re) => re && typeof re.disabled == "function" ? re.disabled : !1, Z = wc(t, "inputShape");
    if (!Z.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const ct = te(!1), ai = te(!1), oi = te(!1), ut = te(0), J = te(null), We = te([]), it = mt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: z("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: z("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: z("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? P(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof Z.value.t < "u" && U({ v: Z.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? P(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: z("faces.a"),
              value: 0
            },
            {
              label: z("faces.a"),
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
          label: z("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: z("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: z("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof Z.value.t < "u" && U({ v: Z.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? P(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: z("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? P(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: z("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: z("faces.a"),
              value: 0
            },
            {
              label: z("faces.b"),
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
              label: z("sides.w1"),
              value: "x1"
            },
            {
              label: z("sides.w2"),
              value: "x2"
            },
            {
              label: z("sides.l1"),
              value: "y1"
            },
            {
              label: z("sides.l2"),
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
          label: z("machining.type"),
          type: "select",
          output: "string",
          options: P(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: z("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? U({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? U({ v: s.options.corners.maxValue, o: s.options }) : U({ v: Z.value.shortSide, o: s.options }) / 2
        }
      }
    }), ri = mt({
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
    }), ws = (re) => {
      re.target === re.currentTarget && Se();
    }, Yt = () => !(!Z?.value?.machining || !ct.value || oi.value);
    return je(() => Z.value?.autoId, () => {
      Yt() && N();
    }), je(() => Z.value?.id, () => {
      Yt() && N();
    }), je(J, (re) => {
      if (!Yt()) return;
      if (re === "banding") {
        x(), q(), x(!1);
        return;
      }
      if (!re) {
        We.value = [];
        return;
      }
      x();
      const ce = Z.value.machining.validate(
        Z.value,
        re,
        ri?.[re]
      );
      We.value = ce?.map((Pe, se) => ({
        index: se,
        message: Pe.message || "Validation error",
        fields: Pe.field || []
      })) || [], x(!1);
    }, { deep: !0, immediate: !0 }), je(() => Z?.value?.machining?.holes, () => {
      if (!Yt()) return;
      x();
      const re = Z.value.machining.validate(
        Z.value,
        "holes",
        ri?.holes
      );
      We.value = re?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], S.createHoles(), x(!1);
    }, { deep: !0, immediate: !0 }), je(() => Z?.value?.machining?.hingeHoles, () => {
      if (!Yt()) return;
      x();
      const re = Z.value.machining.validate(
        Z.value,
        "hingeHoles",
        ri?.hingeHoles
      );
      We.value = re?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], S.createHingeHoles(), x(!1);
    }, { deep: !0, immediate: !0 }), je(() => Z?.value?.machining?.corners, () => {
      if (!Yt()) return;
      x();
      const re = Z.value.machining.validate(
        Z.value,
        "corners",
        ri?.corners
      );
      We.value = re?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], Z.value.machining.validate(Z.value, "holes"), Z.value.machining.validate(Z.value, "hingeHoles"), S.createShape(), S.createHoles(), S.createHingeHoles();
      for (const ce of Z.value.machining.corners)
        Z.value.banding && ce?.getCorner && (Z.value.banding[ce.getCorner()] = "");
      S.createBanding(), x(!1);
    }, { deep: !0, immediate: !0 }), je(() => Z?.value?.banding, () => {
      Yt() && (q(), S.createBanding());
    }, { deep: !0, immediate: !0 }), Ht(() => {
      if (document.body.style.overflow = "hidden", !Z.value || !Z.value.l || !Z.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      bt(() => N()), ct.value = !0;
    }), hs(() => document.body.style.overflow = ""), (re, ce) => {
      const Pe = bi("FontAwesomeIcon");
      return w(), ke(Ma, { to: "body" }, [
        O("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: ws
        }, [
          O("div", ey, [
            O("div", ty, [
              k(a) === "development" && my ? (w(), A("div", iy, [
                Re(k(i), {
                  data: [Z.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : Y("", !0),
              O("button", {
                class: "c-btn close",
                type: "button",
                onClick: ce[0] || (ce[0] = (se) => Se())
              }, "×"),
              Z.value?.name ? (w(), A("div", sy, Q(Z.value.name), 1)) : Y("", !0),
              O("div", ny, Q(Z.value?.l) + " x " + Q(Z.value?.w) + " " + Q(Z.value?.t ? "x " + Z.value?.t : null), 1),
              t.options.faces.enabled ? (w(), A("div", ay, [
                O("div", {
                  ref: "sides",
                  class: Ce(["sides", { flipped: ut.value === 1 }]),
                  onClick: F
                }, [...ce[6] || (ce[6] = [
                  O("div", { class: "side-a" }, " A ", -1),
                  O("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                ce[7] || (ce[7] = O("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : Y("", !0),
              r.value ? (w(), A("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: R
              }, " Delete all machining ")) : Y("", !0),
              O("div", oy, [
                t.options.holes.enabled ? (w(), A("div", {
                  key: 0,
                  class: Ce({ selected: J.value === "holes" }),
                  onClick: ce[1] || (ce[1] = (se) => J.value = "holes")
                }, " Holes ", 2)) : Y("", !0),
                t.options.hingeHoles.enabled ? (w(), A("div", {
                  key: 1,
                  class: Ce({ selected: J.value === "hingeHoles" }),
                  onClick: ce[2] || (ce[2] = (se) => J.value = "hingeHoles")
                }, " Hinge holes ", 2)) : Y("", !0),
                t.options.corners.enabled ? (w(), A("div", {
                  key: 2,
                  class: Ce({ selected: J.value === "corners" }),
                  onClick: ce[3] || (ce[3] = (se) => J.value = "corners")
                }, " Corners ", 2)) : Y("", !0),
                t.options.banding.enabled ? (w(), A("div", {
                  key: 3,
                  class: Ce({ selected: J.value === "banding" }),
                  onClick: ce[4] || (ce[4] = (se) => J.value = "banding")
                }, " Banding ", 2)) : Y("", !0)
              ]),
              J.value === "holes" || J.value === "hingeHoles" || J.value && J.value !== "banding" ? (w(), A("div", ry, [
                J.value === "holes" || J.value === "hingeHoles" || J.value === "corners" ? (w(), A("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: H
                }, " Create ")) : Y("", !0),
                J.value && J.value !== "banding" ? (w(), A("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: G
                }, " Delete all ")) : Y("", !0)
              ])) : Y("", !0),
              O("div", ly, [
                J.value === "banding" && Z.value ? (w(), ke(Gs, {
                  key: 0,
                  shape: Z.value,
                  "onUpdate:shape": ce[5] || (ce[5] = (se) => Z.value = se),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": g.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": k(zt),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : Y("", !0)
              ]),
              J.value !== "banding" && p.value.length ? (w(), A("div", {
                key: 5,
                class: Ce(["grid-table", J.value]),
                style: et({ "grid-template-columns": c.value })
              }, [
                O("div", cy, [
                  I() ? (w(), A("div", uy)) : Y("", !0),
                  (w(!0), A(Te, null, Ve(u.value, (se, Ee) => fs((w(), A("div", {
                    key: Ee,
                    class: "cell"
                  }, Q(se.label ?? Ee), 1)), [
                    [dn, se.enabled]
                  ])), 128)),
                  ce[8] || (ce[8] = O("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), A(Te, null, Ve(p.value, (se, Ee) => (w(), A("div", {
                  key: Ee,
                  class: "row"
                }, [
                  I() ? (w(), A("div", dy, [
                    O("div", fy, Q(D(Ee)), 1)
                  ])) : Y("", !0),
                  (w(!0), A(Te, null, Ve(f.value, (Ge, li) => (w(), A("div", {
                    key: li,
                    class: "cell"
                  }, [
                    Re(Ci, {
                      type: u.value[Ge].type,
                      id: Ge + "-" + li,
                      warning: ge(Ee, Ge),
                      "enable-label": !1,
                      placeholder: u.value[Ge].label ?? Ge,
                      disabled: Oe(u.value[Ge]),
                      value: k(hi)(se, Ge),
                      output: u.value[Ge].output,
                      options: u.value[Ge].options,
                      "onUpdate:value": (vi) => k(Mi)(se, Ge, vi)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", hy, [
                    O("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (Ge) => W(Ee)
                    }, [
                      Re(Pe, { icon: ["fass", "trash"] })
                    ], 8, py)
                  ]),
                  (w(!0), A(Te, null, Ve(le(Ee), (Ge, li) => (w(), A("div", {
                    key: li,
                    class: "group validation",
                    style: et({ "grid-column-end": "span " + l.value })
                  }, Q(Ge), 5))), 128))
                ]))), 128))
              ], 6)) : J.value ? Y("", !0) : (w(), A("div", gy, "Please select from the menu above"))
            ]),
            O("div", {
              id: "machining-diagram",
              class: Ce(["diagram", { flipped: ut.value === 1 }]),
              ref_key: "diagramRef",
              ref: o
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: by }, Symbol.toStringTag, { value: "Module" })), vy = {
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
      files: xc([])
    };
  },
  mounted() {
    this.events.forEach((t) => {
      this.$el.addEventListener(t, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((t) => {
      this.$el.removeEventListener(t, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(t) {
      return new Promise((e, i) => {
        const s = new FileReader();
        s.onloadend = () => {
          e(s.result);
        }, s.onerror = i, s.readAsText(t);
      });
    },
    async onDrop(t) {
      const e = [...t.dataTransfer.files];
      if (this.maxFiles && e.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (e.every((i) => i.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let i = 0; i < e.length; i++) {
        const s = e[i];
        let n;
        try {
          n = await this.readFileAsync(s);
        } catch (r) {
          console.error(r), alert(`Error reading file ${i + 1}`);
          return;
        }
        const a = {
          data: n,
          name: s.name
        };
        this.files.push(a);
        const o = i / e.length * 100;
        this.loadingProgress = o;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(t) {
      this.dropClass = t?.type ?? null, t.preventDefault();
    }
  }
};
function wy(t, e, i, s, n, a) {
  return w(), A("div", {
    id: "drop",
    class: Ce({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = rr((...o) => a.onDrop && a.onDrop(...o), ["prevent"]))
  }, [
    O("div", null, Q(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const Sy = /* @__PURE__ */ Tt(vy, [["render", wy]]), xy = { id: "import-file" }, ky = /* @__PURE__ */ De({
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
  setup(t, { emit: e }) {
    const i = t, s = e, n = te([]), a = te([]), o = te([]), r = te([]), l = te({}), c = te([]), u = te(!1), f = te(null), p = te(null), g = [
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
    ], x = X(() => {
      const C = {};
      return n.value.forEach((B, W) => {
        C[W] = {};
        for (const [G, q] of Object.entries(B)) {
          if (!g.includes(G)) continue;
          const le = I(G, q);
          (le === !0 || le === !1) && (C[W][G] = le);
        }
      }), C;
    }), R = X(() => i.customFields.map((C) => C.label)), D = (C, B) => {
      if (B) {
        const W = Object.keys(B), G = [[]];
        W.forEach((le) => {
          const me = B[le], ge = [];
          G.forEach((Se) => {
            me.forEach((Oe) => ge.push([...Se, Oe]));
          }), G.splice(0, G.length, ...ge);
        });
        const q = /* @__PURE__ */ new Set();
        G.forEach((le) => q.add(le.join("|").toLowerCase())), C === "banding" ? f.value = q : p.value = q;
      }
    }, I = (C, B) => {
      if (B === "???") return !0;
      function W(q) {
        return q ? (q = q?.trim()?.toLowerCase(), q === "l" || q === "w") : !0;
      }
      const G = {
        banding: (q) => P(q, f.value, "banding"),
        finish: (q) => P(q, p.value, "finish"),
        orientationLock: W
      };
      return C in G ? G[C](B) : null;
    }, P = (C, B, W) => {
      if (C = m(C), !C) return !0;
      const G = C.split(","), q = G.every((le) => !le || B.has(le.toLowerCase()));
      if (!q) {
        const le = G.filter((me) => !B.has(me.toLowerCase()));
        console.log(`Valid ${W} choices...`), console.table(Array.from(B)), console.log(`The following ${W} choices are invalid`, le);
      }
      return q;
    }, $ = (C, B) => {
      const W = {
        bandingOptions: (G) => S(G, i.bandingOptions, i.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (G) => S(G, i.finishOptions, i.finishLabels, ["a", "b"])
      };
      return C in W ? W[C](B) : null;
    }, S = (C, B, W, G) => {
      if (C = m(C), !C)
        return G.reduce((me, ge) => ({ ...me, [ge]: {} }), {});
      const q = C.split(",").map((me) => me.toLowerCase()), le = {};
      return G.forEach((me, ge) => {
        le[me] = {}, Object.keys(B).forEach((Se, Oe) => {
          le[me][W[Oe]] = q[ge]?.split("|")[Oe] || "";
        });
      }), le;
    }, N = () => n.value.map((C, B) => ({
      l: i.numberFormat === "decimal" ? Ms(C.l) : C.l,
      w: i.numberFormat === "decimal" ? Ms(C.w) : C.w,
      t: i.numberFormat === "decimal" ? Ms(C.t) : C.t,
      q: C.q,
      orientationLock: C.orientationLock,
      name: C.name,
      material: C.material,
      bandingOptions: x.value[B].banding ? $("bandingOptions", C.banding) : null,
      finishOptions: x.value[B].finish ? $("finishOptions", C.finish) : null,
      numberFormat: i.numberFormat,
      customData: K(C)
    })), _ = (C) => {
      const B = C?.[0]?.data;
      B && lu.parse(B, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (W) => F(W),
        error: () => s("error")
      });
    }, F = (C) => {
      a.value = C.data.filter((B) => B.some((W) => W)), o.value = a.value[0], l.value = {};
      for (let B = o.value.length; B--; ) {
        const W = o.value[B], G = H(W);
        G ? l.value[B] = G : (l.value[B] = null, R.value.includes(W) && (l.value[B] = "customData." + i.customFields.find((q) => q.label === W).id));
      }
      j(), a.value.shift(), M(), oe();
    }, H = (C) => {
      const B = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", z("l"), z("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", z("w"), z("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", z("t"), z("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", z("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", z("quantity"), z("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", z("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", z("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", z("banding")],
        finish: ["finish", "paint"]
      }, W = Object.entries(B).reduce(
        (G, [q, le]) => (le.some((me) => C && C.toLowerCase() === me) && G.push(q), G),
        []
      );
      return W.length > 1 ? null : W[0];
    }, j = () => {
      u.value = !1, r.value = Object.values(l.value).map((B) => !B || B === "N" ? null : g.includes(B) ? B : (u.value = !0, null));
      const C = r.value.filter((B, W) => r.value.indexOf(B) !== W);
      c.value = C.map((B) => r.value.reduce(
        (W, G, q) => (G && G === B && W.push(q), W),
        []
      ));
    }, m = (C) => C && C.replace(/\s*,\s*/g, ","), M = () => {
      const C = a.value.map((B) => {
        const W = {};
        return o.value.forEach((G, q) => {
          if (c.value.flat().includes(q))
            return W[l.value[q]] = "???";
          W[l.value[q]] = B[q];
        }), W;
      });
      n.value = C;
    }, K = (C) => {
      let B = {};
      for (let W in C)
        if (W.startsWith("customData.")) {
          let G = W.slice(11);
          B[G] = C[W];
        }
      return B;
    }, oe = () => {
      const C = N();
      C?.length && s("import", C);
    };
    return Ht(() => {
      D("banding", i.bandingOptions), D("finish", i.finishOptions);
    }), (C, B) => (w(), A("div", xy, [
      Re(Sy, {
        label: k(z)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: _
      }, null, 8, ["label"])
    ]));
  }
}), Iy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ky }, Symbol.toStringTag, { value: "Module" })), Py = {
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
    }
  },
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.data.forEach((t, e) => {
      this.expanded[e] = this.root;
    });
  },
  methods: {
    toggle(t) {
      this.expanded[t] = !this.expanded[t];
    },
    getValueType(t) {
      return t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    },
    isObjectOrArray(t) {
      return t && typeof t == "object";
    },
    getArrayPaths(t, e) {
      return Array.isArray(t) ? t.map((i, s) => s) : [e];
    },
    formatValue(t) {
      return t === null ? "null" : t === void 0 ? "undefined" : typeof t == "boolean" ? t.toString() : typeof t != "object" ? typeof t == "string" ? `'${t}'` : String(t) : "";
    }
  }
}, Cy = { class: "smartcut-object-viewer" }, Ty = ["onClick"], Ay = { class: "toggle-icon" }, Oy = { class: "path-label" }, $y = {
  key: 0,
  class: "object-properties"
}, Fy = {
  key: 0,
  class: "key"
}, Ly = {
  key: 1,
  class: "null-value"
}, Ey = { key: 2 };
function Dy(t, e, i, s, n, a) {
  const o = bi("ObjectViewer", !0);
  return w(), A("div", Cy, [
    (w(!0), A(Te, null, Ve(i.data, (r, l) => (w(), A("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        O("div", Ay, Q(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", Oy, Q(i.paths[l] || l), 1)
      ], 8, Ty),
      n.expanded[l] ? (w(), A("div", $y, [
        (w(!0), A(Te, null, Ve(r, (c, u) => (w(), A("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (w(), A("div", Fy, Q(u) + ": ", 1)) : Y("", !0),
          O("div", {
            class: Ce(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (w(), ke(o, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (w(), A("span", Ly, "null")) : (w(), A("span", Ey, Q(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : Y("", !0)
    ]))), 128))
  ]);
}
const Ry = /* @__PURE__ */ Tt(Py, [["render", Dy]]), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ry }, Symbol.toStringTag, { value: "Module" })), _y = { class: "stock-filter-search" }, My = { class: "search-input-wrapper" }, By = ["placeholder"], jy = /* @__PURE__ */ De({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials, colors, tags..." },
    debounce: { default: 300 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(i.modelValue);
    let a = null;
    je(() => i.modelValue, (l) => {
      n.value = l;
    });
    function o() {
      a && clearTimeout(a), a = setTimeout(() => {
        s("update:modelValue", n.value);
      }, i.debounce);
    }
    function r() {
      n.value = "", s("update:modelValue", "");
    }
    return (l, c) => (w(), A("div", _y, [
      O("div", My, [
        fs(O("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: o
        }, null, 40, By), [
          [kc, n.value]
        ]),
        n.value ? (w(), A("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: r
        }, " × ")) : Y("", !0)
      ])
    ]));
  }
}), Ny = /* @__PURE__ */ Tt(jy, [["__scopeId", "data-v-45127fff"]]), Vy = { class: "filter-panel-header" }, Gy = { class: "filter-panel-title" }, qy = { class: "filter-panel-content" }, zy = {
  key: 0,
  class: "filter-summary"
}, Wy = { class: "filter-summary__count" }, Hy = { class: "filter-groups" }, Uy = { class: "filter-group__header" }, Yy = { class: "filter-group__label" }, Ky = { class: "filter-group__content" }, Zy = {
  key: 0,
  class: "filter-select"
}, Xy = ["checked", "onChange"], Jy = ["value", "onChange"], Qy = { value: "" }, ev = ["value"], tv = {
  key: 1,
  class: "filter-range"
}, iv = { class: "filter-range__inputs" }, sv = ["value", "min", "max", "step", "onInput"], nv = ["value", "min", "max", "step", "onInput"], av = {
  key: 2,
  class: "filter-boolean"
}, ov = { class: "filter-checkbox" }, rv = ["checked", "onChange"], lv = /* @__PURE__ */ De({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(!0), a = te({}), o = X(() => i.activeFilters.length);
    function r() {
      n.value = !n.value;
    }
    function l(P) {
      return {
        material: z("woodwork.material"),
        t: z("woodwork.thickness") + " (mm)",
        cost: z("stockFilter.price"),
        color: z("fields.color"),
        l: z("woodwork.length"),
        w: z("woodwork.width"),
        weight: z("fields.weight"),
        name: z("fields.name"),
        category: z("general.category"),
        leadTime: z("stockFilter.lead_time")
      }[P.field] || P.label;
    }
    function c(P) {
      return P.options?.length ? P.options : i.getUniqueValues(P.field).map((S) => P.field === "color" && typeof S == "object" && S !== null ? "name" in S && S.name ? {
        label: S.name,
        value: S
      } : {
        label: S.hex || String(S),
        value: S
      } : {
        label: String(S),
        value: S
      });
    }
    function u(P) {
      return i.activeFilters.find((S) => S.field === P)?.value;
    }
    function f(P, $) {
      const S = u(P);
      return Array.isArray(S) ? P === "color" && typeof $ == "object" && $ !== null && "hex" in $ ? S.some(
        (N) => typeof N == "object" && N !== null && "hex" in N && N.hex === $.hex
      ) : S.includes($) : P === "color" && typeof $ == "object" && $ !== null && "hex" in $ ? typeof S == "object" && S !== null && "hex" in S && S.hex === $.hex : S === $;
    }
    function p(P, $) {
      const N = $.target.value;
      N === "" ? s("remove-filter", P) : s("apply-filter", P, N, "select");
    }
    function g(P, $, S) {
      const N = S.target, _ = u(P) || [], F = Array.isArray(_) ? [..._] : [];
      if (N.checked)
        F.includes($) || F.push($);
      else {
        const H = F.indexOf($);
        H !== -1 && F.splice(H, 1);
      }
      F.length === 0 ? s("remove-filter", P) : s("apply-filter", P, F, "multiselect");
    }
    function x(P, $) {
      if (a.value[P]?.[$] !== void 0)
        return a.value[P][$];
      const S = i.activeFilters.find((N) => N.field === P);
      if (S?.value && typeof S.value == "object")
        return S.value[$];
    }
    function R(P, $, S) {
      const N = S.target, _ = N.value ? Number(N.value) : void 0;
      a.value[P] || (a.value[P] = {}), a.value[P][$] = _;
      const F = a.value[P].min, H = a.value[P].max;
      F !== void 0 || H !== void 0 ? s("apply-filter", P, { min: F, max: H }, "range") : s("remove-filter", P);
    }
    function D(P, $) {
      $.target.checked ? s("apply-filter", P, !0, "boolean") : s("remove-filter", P);
    }
    function I() {
      a.value = {}, s("clear-filters");
    }
    return (P, $) => (w(), A("div", {
      class: Ce(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      O("div", Vy, [
        O("h3", Gy, Q(k(z)("stockFilter.filters")), 1),
        O("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: r
        }, Q(n.value ? "−" : "+"), 1)
      ]),
      Re(Ic, { name: "filter-panel-content" }, {
        default: Ti(() => [
          fs(O("div", qy, [
            o.value > 0 ? (w(), A("div", zy, [
              O("span", Wy, Q(k(z)("stockFilter.active_filters", [o.value])), 1),
              O("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: I
              }, Q(k(z)("stockFilter.clear_all")), 1)
            ])) : Y("", !0),
            O("div", Hy, [
              (w(!0), A(Te, null, Ve(t.filterConfigs, (S) => (w(), A("div", {
                key: S.field,
                class: "filter-group"
              }, [
                O("div", Uy, [
                  O("label", Yy, Q(l(S)), 1)
                ]),
                O("div", Ky, [
                  S.type === "select" || S.type === "multiselect" ? (w(), A("div", Zy, [
                    S.type === "multiselect" ? (w(!0), A(Te, { key: 0 }, Ve(c(S), (N) => (w(), A("label", {
                      key: N.value,
                      class: "filter-checkbox"
                    }, [
                      O("input", {
                        checked: f(S.field, N.value),
                        type: "checkbox",
                        onChange: (_) => g(S.field, N.value, _)
                      }, null, 40, Xy),
                      O("span", null, Q(N.label), 1)
                    ]))), 128)) : (w(), A("select", {
                      key: 1,
                      value: u(S.field),
                      class: "filter-select-input",
                      onChange: (N) => p(S.field, N)
                    }, [
                      O("option", Qy, Q(k(z)("stockFilter.all")), 1),
                      (w(!0), A(Te, null, Ve(c(S), (N) => (w(), A("option", {
                        key: N.value,
                        value: N.value
                      }, Q(N.label), 9, ev))), 128))
                    ], 40, Jy))
                  ])) : S.type === "range" ? (w(), A("div", tv, [
                    O("div", iv, [
                      O("input", {
                        value: x(S.field, "min"),
                        min: S.min,
                        max: S.max,
                        step: S.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (N) => R(S.field, "min", N)
                      }, null, 40, sv),
                      $[0] || ($[0] = O("span", { class: "filter-range__separator" }, "–", -1)),
                      O("input", {
                        value: x(S.field, "max"),
                        min: S.min,
                        max: S.max,
                        step: S.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (N) => R(S.field, "max", N)
                      }, null, 40, nv)
                    ])
                  ])) : S.type === "boolean" ? (w(), A("div", av, [
                    O("label", ov, [
                      O("input", {
                        checked: u(S.field) === !0,
                        type: "checkbox",
                        onChange: (N) => D(S.field, N)
                      }, null, 40, rv),
                      O("span", null, Q(S.label), 1)
                    ])
                  ])) : Y("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [dn, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), cv = /* @__PURE__ */ Tt(lv, [["__scopeId", "data-v-096696f3"]]), uv = { class: "stock-filter-sort" }, dv = { class: "sort-controls" }, fv = { class: "sort-label" }, hv = ["value"], pv = ["value"], gv = ["title"], mv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bv = {
  key: 0,
  d: "M8 3l4 5H4z"
}, yv = {
  key: 1,
  d: "M8 13l4-5H4z"
}, vv = /* @__PURE__ */ De({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = i.availableFields.map((l) => ({
      value: l,
      label: a(l)
    }));
    function a(l) {
      return {
        cost: z("stockFilter.price"),
        material: z("woodwork.material"),
        t: z("woodwork.thickness"),
        l: z("woodwork.length"),
        w: z("woodwork.width"),
        pricePerKg: z("stockFilter.price") + " per kg",
        pricePerM2: z("stockFilter.price") + " per m²",
        weight: z("fields.weight"),
        name: z("fields.name"),
        leadTime: z("stockFilter.lead_time")
      }[l] || l.charAt(0).toUpperCase() + l.slice(1);
    }
    function o(l) {
      const c = l.target;
      s("update:sortBy", c.value);
    }
    function r() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, c) => (w(), A("div", uv, [
      O("div", dv, [
        O("label", fv, Q(k(z)("stockFilter.sort_by")) + ":", 1),
        O("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: o
        }, [
          (w(!0), A(Te, null, Ve(k(n), (u) => (w(), A("option", {
            key: u.value,
            value: u.value
          }, Q(u.label), 9, pv))), 128))
        ], 40, hv),
        O("button", {
          type: "button",
          class: Ce(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? k(z)("options.by_dimensions") : k(z)("options.by_dimensions"),
          onClick: r
        }, [
          (w(), A("svg", mv, [
            t.sortOrder === "asc" ? (w(), A("path", bv)) : (w(), A("path", yv))
          ]))
        ], 10, gv)
      ])
    ]));
  }
}), wv = /* @__PURE__ */ Tt(vv, [["__scopeId", "data-v-bb32c593"]]), Sv = { class: "stock-filter-results" }, xv = { class: "results-header" }, kv = { class: "results-info" }, Iv = { class: "results-count" }, Pv = { class: "results-controls" }, Cv = { class: "display-mode-toggle" }, Tv = ["title"], Av = ["title"], Ov = {
  key: 0,
  class: "results-loading"
}, $v = {
  key: 1,
  class: "results-empty"
}, Fv = { class: "empty-message" }, Lv = {
  key: 3,
  class: "results-pagination"
}, Ev = ["disabled"], Dv = { class: "pagination-pages" }, Rv = ["onClick"], _v = ["disabled"], Mv = /* @__PURE__ */ De({
  __name: "StockFilterResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    currentPage: { default: 1 },
    totalPages: { default: 1 }
  },
  emits: ["update:displayMode", "clear-filters", "go-to-page"],
  setup(t) {
    const e = t, i = X(() => {
      const s = [], a = Math.floor(2.5);
      let o = Math.max(1, e.currentPage - a), r = Math.min(e.totalPages, o + 5 - 1);
      r === e.totalPages && (o = Math.max(1, r - 5 + 1));
      for (let l = o; l <= r; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (w(), A("div", Sv, [
      O("div", xv, [
        O("div", kv, [
          O("span", Iv, Q(t.totalResults) + " " + Q(t.totalResults === 1 ? k(z)("stockFilter.result_one") : k(z)("stockFilter.result_other")), 1)
        ]),
        O("div", Pv, [
          O("div", Cv, [
            O("button", {
              type: "button",
              class: Ce(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: k(z)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              lr('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-702dc044><rect x="1" y="1" width="6" height="6" data-v-702dc044></rect><rect x="9" y="1" width="6" height="6" data-v-702dc044></rect><rect x="1" y="9" width="6" height="6" data-v-702dc044></rect><rect x="9" y="9" width="6" height="6" data-v-702dc044></rect></svg>', 1)
            ])], 10, Tv),
            O("button", {
              type: "button",
              class: Ce(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: k(z)("stockFilter.list_view"),
              onClick: n[1] || (n[1] = (a) => s.$emit("update:displayMode", "list"))
            }, [...n[6] || (n[6] = [
              O("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                O("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                O("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                O("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, Av)
          ])
        ])
      ]),
      t.loading ? (w(), A("div", Ov, [
        n[7] || (n[7] = O("div", { class: "spinner" }, null, -1)),
        O("p", null, Q(k(z)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (w(), A("div", $v, [
        n[8] || (n[8] = O("svg", {
          width: "64",
          height: "64",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, [
          O("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }),
          O("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
          }),
          O("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
          })
        ], -1)),
        O("p", Fv, Q(k(z)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (w(), A("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, Q(k(z)("stockFilter.clear_filters")), 1)) : Y("", !0)
      ])) : (w(), A("div", {
        key: 2,
        class: Ce(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Ws(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (w(), A("div", Lv, [
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, Q(k(z)("pagination.previous")), 9, Ev),
        O("div", Dv, [
          (w(!0), A(Te, null, Ve(i.value, (a) => (w(), A("button", {
            key: a,
            type: "button",
            class: Ce(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (o) => s.$emit("go-to-page", a)
          }, Q(a), 11, Rv))), 128))
        ]),
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, Q(k(z)("pagination.next")), 9, _v)
      ])) : Y("", !0)
    ]));
  }
}), Bv = /* @__PURE__ */ Tt(Mv, [["__scopeId", "data-v-702dc044"]]), jv = {
  key: 0,
  class: "stock-filter-card__image"
}, Nv = ["src", "alt"], Vv = { class: "stock-filter-card__content" }, Gv = { class: "stock-filter-card__title" }, qv = { class: "stock-filter-card__specs" }, zv = { class: "spec" }, Wv = { class: "spec__label" }, Hv = { class: "spec__value" }, Uv = { class: "spec" }, Yv = { class: "spec__label" }, Kv = { class: "spec__value" }, Zv = {
  key: 0,
  class: "spec"
}, Xv = { class: "spec__label" }, Jv = { class: "spec__value spec__value--color" }, Qv = {
  key: 1,
  class: "spec"
}, ew = { class: "spec__label" }, tw = { class: "spec__value" }, iw = {
  key: 0,
  class: "stock-filter-card__description"
}, sw = { class: "stock-filter-card__footer" }, nw = {
  key: 0,
  class: "stock-filter-card__price"
}, aw = { class: "price__label" }, ow = { class: "price__value" }, rw = ["disabled"], lw = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, cw = /* @__PURE__ */ De({
  __name: "StockFilterCard",
  props: {
    stock: {},
    isSelected: { type: Boolean },
    formatPrice: {},
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    locale: { default: "en-US" }
  },
  emits: ["toggle-selection"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = X(() => i.stock.available !== !1), a = X(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), o = X(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), r = X(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), l = X(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": c(i.buttonColor, -8)
    }));
    function c(f, p) {
      const g = f.replace("#", ""), x = parseInt(g, 16), R = Math.round(2.55 * p), D = (x >> 16) + R, I = (x >> 8 & 255) + R, P = (x & 255) + R;
      return `#${(16777216 + (D < 255 ? D < 1 ? 0 : D : 255) * 65536 + (I < 255 ? I < 1 ? 0 : I : 255) * 256 + (P < 255 ? P < 1 ? 0 : P : 255)).toString(16).slice(1)}`;
    }
    function u() {
      s("toggle-selection", i.stock);
    }
    return (f, p) => (w(), A("div", {
      class: Ce(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !n.value
      }])
    }, [
      t.stock.imageUrl ? (w(), A("div", jv, [
        O("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, Nv)
      ])) : Y("", !0),
      O("div", Vv, [
        O("h3", Gv, Q(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        O("div", qv, [
          O("div", zv, [
            O("span", Wv, Q(k(z)("woodwork.material")) + ":", 1),
            O("span", Hv, Q(t.stock.material || k(z)("general.na")), 1)
          ]),
          O("div", Uv, [
            O("span", Yv, Q(k(z)("stockFilter.dimensions")) + ":", 1),
            O("span", Kv, Q(t.stock.l) + " × " + Q(t.stock.w) + Q(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (w(), A("div", Zv, [
            O("span", Xv, Q(k(z)("fields.color")) + ":", 1),
            O("span", Jv, [
              O("span", {
                class: "color-swatch",
                style: et({ backgroundColor: o.value })
              }, null, 4),
              as(" " + Q(r.value), 1)
            ])
          ])) : Y("", !0),
          t.stock.weight ? (w(), A("div", Qv, [
            O("span", ew, Q(k(z)("fields.weight")) + ":", 1),
            O("span", tw, Q(t.stock.weight) + " kg", 1)
          ])) : Y("", !0)
        ]),
        t.stock.description ? (w(), A("div", iw, Q(t.stock.description), 1)) : Y("", !0),
        O("div", sw, [
          t.stock.cost ? (w(), A("div", nw, [
            O("span", aw, Q(k(z)("stockFilter.price")) + ":", 1),
            O("span", ow, Q(a.value), 1)
          ])) : Y("", !0),
          O("button", {
            type: "button",
            class: Ce(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: et(l.value),
            disabled: !n.value,
            onClick: u
          }, Q(t.isSelected ? k(z)("stockFilter.remove") : n.value ? k(z)("stockFilter.select") : k(z)("stockFilter.unavailable")), 15, rw)
        ]),
        t.stock.leadTime ? (w(), A("div", lw, Q(k(z)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : Y("", !0)
      ])
    ], 2));
  }
}), uw = /* @__PURE__ */ Tt(cw, [["__scopeId", "data-v-9056cd2a"]]), dw = { class: "stock-filter" }, fw = /* @__PURE__ */ De({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => Zb()
    },
    formatPrice: {
      type: Function,
      required: !0
    },
    numberFormat: {
      type: String,
      default: "decimal"
    },
    colors: {
      type: Object,
      default: () => ({
        button: "#118ab2",
        buttonText: "#ffffff"
      })
    },
    locale: {
      type: String,
      default: "en-US"
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed"],
  setup(t, { expose: e, emit: i }) {
    const s = t, n = i, a = te(s.stockOptions), o = te(s.config), r = te(s.numberFormat), {
      activeFilters: l,
      searchQuery: c,
      sortBy: u,
      sortOrder: f,
      displayMode: p,
      currentPage: g,
      filteredStock: x,
      paginatedStock: R,
      selectedStock: D,
      totalPages: I,
      applyFilter: P,
      removeFilter: $,
      clearFilters: S,
      goToPage: N,
      toggleStockSelection: _,
      isStockSelected: F,
      clearSelection: H,
      createInputStock: j,
      getUniqueValues: m,
      getFieldRange: M
    } = Dc({
      stockOptions: a,
      config: o,
      numberFormat: r
    }), K = X(() => s.config.availableFilters.filter((B) => {
      const W = m(B.field);
      return W.length > 0 && W.some((G) => G != null);
    }));
    X(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": oe(s.colors.button, -8)
    }));
    function oe(B, W) {
      const G = B.replace("#", ""), q = parseInt(G, 16), le = Math.round(2.55 * W), me = (q >> 16) + le, ge = (q >> 8 & 255) + le, Se = (q & 255) + le;
      return `#${(16777216 + (me < 255 ? me < 1 ? 0 : me : 255) * 65536 + (ge < 255 ? ge < 1 ? 0 : ge : 255) * 256 + (Se < 255 ? Se < 1 ? 0 : Se : 255)).toString(16).slice(1)}`;
    }
    function C(B) {
      const W = F(B);
      if (_(B), W) {
        const G = j(B);
        n("stock-removed", G);
      } else {
        const G = j(B);
        n("stock-added", [G]);
      }
    }
    return e({
      applyFilter: P,
      removeFilter: $,
      clearFilters: S,
      clearSelection: H,
      selectedStock: D,
      filteredStock: x,
      getUniqueValues: m,
      getFieldRange: M
    }), (B, W) => (w(), A("div", dw, [
      t.config.enableSearch ? (w(), ke(Ny, {
        key: 0,
        modelValue: k(c),
        "onUpdate:modelValue": W[0] || (W[0] = (G) => Bn(c) ? c.value = G : null)
      }, null, 8, ["modelValue"])) : Y("", !0),
      K.value.length > 0 ? (w(), ke(cv, {
        key: 1,
        "filter-configs": K.value,
        "active-filters": k(l),
        "get-unique-values": k(m),
        "get-field-range": k(M),
        onApplyFilter: k(P),
        onRemoveFilter: k($),
        onClearFilters: k(S)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : Y("", !0),
      t.config.sortOptions.length > 0 ? (w(), ke(wv, {
        key: 2,
        "sort-by": k(u),
        "onUpdate:sortBy": W[1] || (W[1] = (G) => Bn(u) ? u.value = G : null),
        "sort-order": k(f),
        "onUpdate:sortOrder": W[2] || (W[2] = (G) => Bn(f) ? f.value = G : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : Y("", !0),
      Re(Bv, {
        "total-results": k(R).length,
        "display-mode": k(p),
        loading: t.loading,
        "has-active-filters": k(l).length > 0,
        "current-page": k(g),
        "total-pages": k(I),
        "onUpdate:displayMode": W[3] || (W[3] = (G) => p.value = G),
        onClearFilters: k(S),
        onGoToPage: k(N)
      }, {
        default: Ti(() => [
          (w(!0), A(Te, null, Ve(k(R), (G) => (w(), ke(uw, {
            key: G.id || `${G.material}-${G.l}-${G.w}-${G.t}`,
            stock: G,
            "is-selected": k(F)(G),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            onToggleSelection: C
          }, null, 8, ["stock", "is-selected", "format-price", "button-color", "button-text-color", "locale"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), hw = /* @__PURE__ */ Tt(fw, [["__scopeId", "data-v-7b1c1d8d"]]), RS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: hw }, Symbol.toStringTag, { value: "Module" }));
class fi extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class nr {
  url;
  spec;
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(e, i = {}) {
    if (typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "string") {
      if (this.isStringLiteral(e))
        return e.slice(1, -1);
      if (!(e in i))
        throw new Error(`Undefined variable: ${e}`);
      return i[e];
    }
    const { operation: s, operands: n } = e;
    if (!s)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(s))
      throw new Error(`Invalid operation: ${s}`);
    if (s === "ternary") {
      const r = this.evaluate(e.condition, i), l = this.evaluate(e.trueExpr, i), c = this.evaluate(e.falseExpr, i);
      return r ? l : c;
    }
    if (!n || !Array.isArray(n) || n.length !== 2)
      throw new Error("Invalid formula structure");
    const [a, o] = n.map((r) => this.evaluate(r, i));
    return [">", "<", ">=", "<=", "=="].includes(s) ? this.evaluateComparison(s, a, o) : this.operations[s](a, o);
  }
  // Update the operations object to use the FormulaOperation type
  operations = {
    add: (e, i) => e + i,
    subtract: (e, i) => e - i,
    multiply: (e, i) => e * i,
    divide: (e, i) => {
      if (i === 0) throw new fi("Division by zero", "DIVISION_BY_ZERO");
      return e / i;
    },
    ">": (e, i) => e > i,
    "<": (e, i) => e < i,
    ">=": (e, i) => e >= i,
    "<=": (e, i) => e <= i,
    "==": (e, i) => e === i
  };
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
  precedence = {
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
  };
  constructor({ url: e = null, spec: i = null }) {
    e && (this.url = e), i && (this.spec = i);
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
  evaluateValue(e, i, s = {}) {
    return typeof e == "number" || !this.isFormula(e) ? e : this.evaluateFormula(this.stripFormulaPrefix(e), i, s);
  }
  extractDependencies(e) {
    const i = /* @__PURE__ */ new Set();
    if (typeof e == "string") {
      const s = Array.from(e.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const o of s)
        i.add(`${o[1]}.${o[2]}`);
      const n = Array.from(e.matchAll(/inputs\.(\w+)/g));
      for (const o of n)
        i.add(`input.${o[1]}`);
      const a = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const o of a)
        e.includes(o) && i.add(`input.${o}`);
    }
    return i;
  }
  buildFormulaGraph(e, i) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (a, o) => {
      const r = `${e}.${a}`;
      s.nodes.set(r, {
        panelKey: e,
        attribute: a,
        formula: o
      }), s.edges.set(r, this.isFormula(o) ? this.extractDependencies(this.stripFormulaPrefix(o.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", i.l), n("w", i.w), n("t", i.t), n("q", i.q), s;
  }
  resolveFormulas(e, i, s, n = {}) {
    const a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = (l) => {
      if (a.has(l))
        return a.get(l);
      const [c, u] = l.split(".");
      if (!e.nodes.has(l)) {
        const R = n[c];
        if (R)
          return u === "q" ? R.q : R[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (o.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const f = e.nodes.get(l);
      if (typeof f.formula == "number")
        return a.set(l, f.formula), f.formula;
      o.add(l);
      const p = e.edges.get(l) || /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (const R of p)
        if (R.startsWith("input.")) {
          const D = R.split(".")[1];
          g.set(R, s[D]);
        } else
          g.set(R, r(R));
      const x = this.evaluateFormulaWithDeps(f.formula, g, s);
      return a.set(l, x), o.delete(l), x;
    };
    for (const l of e.nodes.keys())
      r(l);
    return Object.fromEntries(a);
  }
  evaluateFormulaWithDeps(e, i, s, n) {
    if (!this.isFormula(e)) return e;
    let a = this.stripFormulaPrefix(e.toString());
    return a = a.replace(
      /inputs\.(\w+)/g,
      (o, r) => s[r]?.toString() || "0"
    ), a = a.replace(
      /panels\.(\w+)\.(\w+)/g,
      (o, r, l) => {
        if (r === n?.panelKey && n[l] !== void 0)
          return n[l].toString();
        if (i.has(`${r}.${l}`))
          return i.get(`${r}.${l}`).toString();
        throw new Error(`Undefined variable in formula: ${o}`);
      }
    ), this.evaluate(this.parse(a), s);
  }
  calculatePanels(e) {
    if (!this.spec?.panels) return {};
    const i = {};
    for (const [s, n] of Object.entries(this.spec.panels)) {
      const a = this.buildFormulaGraph(s, n), o = this.resolveFormulas(a, n, e, i), r = {
        panelKey: s,
        l: o[`${s}.l`],
        w: o[`${s}.w`],
        t: o[`${s}.t`],
        q: o[`${s}.q`] || 1
      };
      i[s] = {
        name: n.name,
        material: n.material,
        bandingOptions: n.bandingOptions ?? {},
        finishOptions: n.finishOptions ?? {},
        orientationLock: n.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(n.orientationLock, /* @__PURE__ */ new Map(), e, r) : void 0,
        ...r
      };
    }
    return i;
  }
  evaluateFormula(e, i, s = {}) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const n = e.replace(/inputs\.(\w+)/g, (o, r) => {
        if (!(r in i))
          throw new Error(`Input not found: ${r}`);
        return i[r].toString();
      }), a = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (a) {
        const [, o, r] = a;
        if (!s[o])
          throw new Error(`Panel not found: ${o}`);
        return r === "q" ? s[o].q ?? 1 : s[o].dimensions[r];
      }
      return this.evaluate(this.parse(n), i);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(e) {
    const i = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|\+|-|\*|\/|>|<|\?|:|\(|\)|\w+|\.)/g;
    return e.match(i) || [];
  }
  isValidToken(e) {
    return this.isNumber(e) || this.isVariable(e) || e in this.precedence || e === "(" || e === ")" || e === "." || this.isIdentifier(e);
  }
  isIdentifier(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e);
  }
  evaluateComparison(e, i, s) {
    switch (e) {
      case ">":
        return i > s;
      case "<":
        return i < s;
      case ">=":
        return i >= s;
      case "<=":
        return i <= s;
      case "==":
        return i === s;
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
    const i = [], s = [];
    for (const n of e)
      if (this.isNumber(n) || this.isStringLiteral(n) || this.isIdentifier(n))
        i.push(this.isNumber(n) ? Number(n) : n);
      else if (n === "(")
        s.push(n);
      else if (n === ")") {
        for (; s.length && s[s.length - 1] !== "("; )
          i.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched parentheses");
        s.pop();
      } else if (n === "?") {
        for (; s.length && this.precedence[s[s.length - 1]] > this.precedence[n]; )
          i.push(s.pop());
        s.push(n);
      } else if (n === ":") {
        for (; s.length && s[s.length - 1] !== "?"; )
          i.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched ternary operator");
        s.pop(), s.push("?:");
      } else if (n in this.precedence) {
        for (; s.length && this.precedence[s[s.length - 1]] >= this.precedence[n]; )
          i.push(s.pop());
        s.push(n);
      } else
        throw new Error(`Invalid token: ${n}`);
    for (; s.length; ) {
      const n = s.pop();
      if (n === "(" || n === ")")
        throw new Error("Mismatched parentheses");
      i.push(n);
    }
    return i;
  }
  parse(e) {
    if (typeof e != "string")
      throw new Error("Parse input must be a string");
    if (!e.trim())
      throw new Error("Empty input");
    const i = this.tokenize(e), s = this.toPostfix(i);
    return this.toFormulaJSON(s);
  }
  isStringLiteral(e) {
    return /^'.*'$/.test(e);
  }
  toFormulaJSON(e) {
    const i = [];
    for (const s of e)
      if (typeof s == "number" || this.isStringLiteral(s.toString()) || this.isVariable(s.toString()))
        i.push(s);
      else if (s === "?:") {
        if (i.length < 3)
          throw new Error("Invalid ternary expression");
        const n = i.pop(), a = i.pop(), o = i.pop();
        i.push({
          operation: "ternary",
          condition: o,
          trueExpr: a,
          falseExpr: n
        });
      } else {
        if (i.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const n = i.pop(), a = i.pop();
        i.push({
          operation: this.getOperation(s.toString()),
          operands: [a, n]
        });
      }
    if (i.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return i[0];
  }
  calculateHardware(e) {
    return this.spec?.hardware ? Object.entries(this.spec.hardware).reduce((i, [s, n]) => {
      const a = this.evaluateValue(n.q, e);
      return i[s] = {
        name: n.name,
        q: Math.ceil(a),
        totalCost: Math.ceil(a) * n.cost
      }, i;
    }, {}) : {};
  }
  calculateAll(e) {
    this.validateInputs(e);
    const i = this.calculatePanels(e), s = this.calculateHardware(e);
    return {
      inputs: e,
      panels: i,
      hardware: s
    };
  }
  validateInputs(e) {
    if (!this.spec?.inputs) throw new fi("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new fi(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new fi(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      const i = await e.json();
      return this.spec = i, this.validateSpec(), i;
    } catch (e) {
      return console.error("Error fetching or parsing JSON file:", e), null;
    }
  }
  validateSpec() {
    const e = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && e.push("Specification must contain inputs"), { isValid: e.length === 0, errors: e }) : (e.push("Specification is required"), { isValid: !1, errors: e });
  }
  validateFields(e) {
    if (!this.spec?.inputs)
      throw new fi("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new fi(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], o = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new fi(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < o.min || n.value > o.max)
        throw new fi(`Field ${s} value ${n.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
      s++;
    }
  }
  fieldsToInputs(e) {
    const i = Object.keys(this.spec?.inputs || {});
    return e.reduce((s, n, a) => {
      const o = i[a];
      return o && (s[o] = n.value), s;
    }, {});
  }
  getEmptyFields() {
    const e = {};
    return this.spec?.inputs && Object.keys(this.spec.inputs).forEach((i, s) => {
      e[s] = { value: 0 };
    }), e;
  }
  getDefaultFields() {
    const e = {};
    return this.spec?.inputs && Object.values(this.spec.inputs).forEach((i, s) => {
      e[s] = { value: i.default };
    }), e;
  }
  calculatePanelsFromFields(e) {
    this.validateFields(e);
    const i = this.fieldsToInputs(e);
    return this.calculatePanels(i);
  }
  calculateHardwareFromFields(e) {
    this.validateFields(e);
    const i = this.fieldsToInputs(e);
    return this.calculateHardware(i);
  }
  calculateAllFromFields(e) {
    this.validateFields(e);
    const i = this.fieldsToInputs(e);
    return this.calculateAll(i);
  }
  getFieldMetadata() {
    const e = [];
    return this.spec?.inputs && Object.entries(this.spec.inputs).forEach(([i, s], n) => {
      e.push({
        index: n,
        name: i,
        label: s.label,
        type: s.type,
        min: s.min,
        max: s.max,
        default: s.default
      });
    }), e;
  }
}
const pw = {
  key: 0,
  class: "debug"
}, gw = { id: "formula-pricing" }, mw = {
  key: 1,
  class: "extras"
}, bw = { class: "heading" }, yw = { id: "hardware-total" }, vw = { class: "heading panels" }, ww = !1, Sw = /* @__PURE__ */ De({
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
      default: (t) => t.toFixed(2)
    }
  },
  emits: ["hardware-result", "panel-result"],
  setup(t, { emit: e }) {
    const i = ji(() => Promise.resolve().then(() => to)), s = t, n = e, a = Pc("calculator"), o = X(() => a()), r = te("production");
    let l = null;
    const c = te(null), u = te([]), f = te(!1), p = te(""), g = X(() => {
      if (!f.value || !u.value.length || u.value.every((F) => F.value === null)) return null;
      const _ = $();
      return bt(() => n("panel-result", _)), _;
    }), x = X(() => {
      if (!o.value || !f.value || !u.value.length || u.value.every((F) => F.value === null)) return;
      const _ = S();
      return bt(() => n("hardware-result", _, R.value)), _;
    }), R = X(() => {
      if (x.value)
        return Object.values(x.value).reduce((_, F) => _ + F.totalCost, 0);
    });
    je(g, (_) => {
      if (!f.value || !_ || !o.value || !o.value?.inputShapes) return;
      const F = (m) => m?.name ? m.name.toLowerCase() : "", H = new Map(
        o.value.inputShapes.map((m) => [F(m), m])
      ), j = /* @__PURE__ */ new Set();
      for (const m of Object.values(g.value)) {
        if (!m.name) continue;
        const M = F(m), K = H.get(M), oe = {
          ...m,
          name: m.name.toUpperCase() || K?.name.toUpperCase(),
          material: m.material?.toUpperCase() || K?.material?.toUpperCase(),
          bandingOptions: m.bandingOptions || {},
          finishOptions: m.finishOptions || {},
          orientationLock: m.orientationLock || null,
          notes: p.value,
          readonly: !0
        }, C = K || o.value.createInputShape(oe);
        if (K) {
          Object.assign(K, oe);
          for (const B of ["banding", "finish"])
            o.value.initExtrasOptions(K, B);
        } else
          o.value.inputShapes.push(C);
        j.add(M);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (m) => j.has(F(m))
      );
    }, { immediate: !1 }), Ht(() => N());
    const D = (_) => {
      s.debug && console.log(_);
    }, I = () => {
      u.value = Object.values(c.value.inputs).map((_) => ({
        value: _.default ?? null
      })), console.log(u.value);
    }, P = (_, F) => {
      u.value[_] && (u.value[_].value = F);
    }, $ = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (_) {
        return o.value.inputShapes.length = 0, console.error(_), null;
      }
    }, S = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (_) {
        return console.error(_), null;
      }
    }, N = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (D(`SmartCut - Formula calculator init from url: ${s.url}`), l = new nr({ url: s.url }), c.value = await l.getSpec()) : s.spec && (D("SmartCut - Formula calculator init with JSON"), l = new nr({ spec: s.spec }), c.value = await l.getSpec()), I(), f.value = !0;
    };
    return (_, F) => (w(), A(Te, null, [
      r.value === "development" && ww ? (w(), A("div", pw, [
        F[1] || (F[1] = O("div", null, "Developer information", -1)),
        Re(k(i), {
          data: [g.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : Y("", !0),
      O("div", gw, [
        c.value?.projectName ? (w(), ke(Ci, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: p.value,
          "onUpdate:value": F[0] || (F[0] = (H) => p.value = H)
        }, null, 8, ["value"])) : Y("", !0),
        (w(!0), A(Te, null, Ve(c.value?.inputs, (H, j, m) => (w(), ke(Ci, {
          id: "formula-field-" + m,
          key: m,
          type: H.type,
          label: H.label,
          placeholder: H.label,
          min: H.min ?? 0,
          max: H.max ?? null,
          default: H.default ?? 0,
          value: u.value[m]?.value,
          "onUpdate:value": (M) => P(m, M)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        x.value ? (w(), A("div", mw, [
          O("div", bw, Q(k(z)("Hardware")), 1),
          (w(!0), A(Te, null, Ve(x.value, (H, j) => (w(), A("div", { key: j }, Q(H.name) + " x" + Q(H.q) + " = " + Q(t.formatPrice(H.totalCost)), 1))), 128)),
          O("div", yw, Q(k(z)("Hardware total")) + " = " + Q(t.formatPrice(R.value)), 1)
        ])) : Y("", !0),
        O("div", vw, Q(k(z)("Panels")), 1)
      ])
    ], 64));
  }
}), _S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Sw }, Symbol.toStringTag, { value: "Module" })), xw = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, kw = { class: "content" }, Iw = ["onClick"], Pw = ["innerHTML"], Cw = /* @__PURE__ */ De({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = ja(), n = te({}), a = X(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, r) => {
      const l = bi("FontAwesomeIcon");
      return w(), ke(Ma, { to: "body" }, [
        O("div", xw, [
          Re(Cc, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ce(["notices-container", e.position])
          }, {
            default: Ti(() => [
              (w(!0), A(Te, null, Ve(k(i), (c) => (w(), A("div", {
                key: c.id,
                ref_for: !0,
                ref: (u) => {
                  u && (n.value[c.id] = u);
                },
                class: Ce([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                O("div", kw, [
                  O("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, Q(c.message), 9, Iw),
                  O("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, Pw)
                ]),
                c.persistent ? Y("", !0) : (w(), ke(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (u) => k(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), MS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Cw }, Symbol.toStringTag, { value: "Module" }));
export {
  ae as $,
  Vw as A,
  en as B,
  Wa as C,
  ie as D,
  Fh as E,
  Pi as F,
  rS as G,
  rs as H,
  ol as I,
  _h as J,
  lS as K,
  Ou as L,
  Ki as M,
  Ie as N,
  If as O,
  Bs as P,
  U as Q,
  Kw as R,
  al as S,
  Ye as T,
  yr as U,
  kt as V,
  nt as W,
  hp as X,
  df as Y,
  Ew as Z,
  Xt as _,
  nn as a,
  Ue as a$,
  qi as a0,
  qt as a1,
  Uw as a2,
  Jt as a3,
  cS as a4,
  Nw as a5,
  Qe as a6,
  af as a7,
  Yw as a8,
  Et as a9,
  sS as aA,
  bS as aB,
  vr as aC,
  fp as aD,
  yS as aE,
  ap as aF,
  mS as aG,
  wn as aH,
  ml as aI,
  ye as aJ,
  _r as aK,
  np as aL,
  wr as aM,
  Lo as aN,
  pS as aO,
  gS as aP,
  Gw as aQ,
  vp as aR,
  wp as aS,
  tt as aT,
  ni as aU,
  bp as aV,
  wl as aW,
  vS as aX,
  va as aY,
  pl as aZ,
  oS as a_,
  zu as aa,
  Od as ab,
  hS as ac,
  tf as ad,
  Jw as ae,
  Hw as af,
  bn as ag,
  Xi as ah,
  Zw as ai,
  tS as aj,
  Pt as ak,
  Xw as al,
  uu as am,
  hu as an,
  yu as ao,
  Rw as ap,
  Dw as aq,
  fS as ar,
  dS as as,
  ps as at,
  br as au,
  rt as av,
  ud as aw,
  vt as ax,
  nS as ay,
  xi as az,
  vn as b,
  wS as b0,
  SS as b1,
  ne as b2,
  zw as b3,
  Ww as b4,
  ht as b5,
  Qw as b6,
  eS as b7,
  aS as b8,
  iS as b9,
  xS as bA,
  to as bB,
  RS as bC,
  _S as bD,
  MS as bE,
  rf as ba,
  Mw as bb,
  Lt as bc,
  Hi as bd,
  ze as be,
  yt as bf,
  sn as bg,
  Gt as bh,
  qw as bi,
  dh as bj,
  dl as bk,
  Ha as bl,
  pi as bm,
  mn as bn,
  Bw as bo,
  Zb as bp,
  DS as bq,
  hi as br,
  kS as bs,
  vo as bt,
  ti as bu,
  ft as bv,
  _w as bw,
  Iu as bx,
  wo as by,
  Tt as bz,
  _a as c,
  Mo as d,
  Il as e,
  Pl as f,
  Gu as g,
  TS as h,
  PS as i,
  CS as j,
  wi as k,
  Cn as l,
  og as m,
  OS as n,
  ES as o,
  LS as p,
  FS as q,
  uS as r,
  Wt as s,
  z as t,
  jw as u,
  $S as v,
  rg as w,
  AS as x,
  IS as y,
  Lw as z
};
