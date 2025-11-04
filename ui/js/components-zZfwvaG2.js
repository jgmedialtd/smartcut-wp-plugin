import { i as sr, B as cc } from "./vendor-i18n-BuJwRgtG.js";
import { d as De, c as P, o as S, F as Te, r as Be, n as Je, a as Ie, b as O, w as fs, t as Z, v as rn, e as te, f as bt, g as Kt, h as X, u as nr, i as uc, j as Me, k as Pt, l as dc, m as hs, p as ve, q as k, s as H, x as Ns, T as Ea, y as ar, z as fc, A as wi, B as Ii, C as Gs, D as ai, E as hi, G as Le, H as hc, I as or, J as ns, K as pc, L as gc, M as _i, N as po, O as mc, P as yc, Q as bc, R as vc, S as wc, U as En, V as Sc, W as xc } from "./vendor-vue-U4l9SdFr.js";
import { u as Da, a as kc, b as Ic, c as Cc, d as Pc, e as Ra, f as rr, g as Tc, h as Ac, i as Oc, j as $c } from "./composables-ClTjxNTR.js";
import { a as lr, b as cr, l as Dt, c as qs, d as zs, s as st, r as qt, e as as, f as ur, g as Fc, h as Lc, i as Ec, p as Dc, S as Rc, j as Mc, k as _c } from "./vendor-d3-DUCHe88K.js";
import { _ as fe, o as B, a as ee, s as b, n as d, b as R, c as xe, r as we, u as he, d as xt, e as oa, z as Bc, Z as Dn, f as jc, l as me, p as Wi, g as _e, h as Vc, i as Nc, F as rs, j as dr, k as Gc, m as qc, q as zc, t as Wc, v as Hc, w as Uc, x as fr, y as Yc, A as Rn, B as hr, C as go, D as Kc, E as Zc, G as pt, H as Ws, I as Ye, J as Si, K as mo, L as Xc, M as Tt, N as Hs, O as it, P as Jc, Q as Qc, R as eu, S as tu, T as iu, U as su } from "./vendor-pIOdV8fk.js";
function wt() {
  if (typeof process < "u" && process?.env)
    return !1;
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
function pr() {
  if (typeof process < "u" && process?.env)
    return process.env.VITEST === "true" || !!process.env.VITEST;
  if (typeof globalVariables < "u")
    return globalVariables.isTest === !0 || globalVariables.NODE_ENV === "test" || globalVariables.VITEST === !0;
  if (typeof window < "u") {
    const t = new URLSearchParams(window.location?.search || "");
    return t.get("test") === "true" || t.get("vitest") === "true" || window.location?.hostname.includes("test") || // Check for test runner globals
    typeof window.vitest < "u" || typeof window.jest < "u";
  }
  return !1;
}
function mw() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && window.__runtimeVersion;
}
const yw = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, Lt = {
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
}, Mn = {
  field_required: Lt.FIELD_REQUIRED,
  invalid_number: Lt.INVALID_NUMBER,
  invalid_decimal: Lt.INVALID_DECIMAL,
  invalid_fraction: Lt.INVALID_FRACTION,
  invalid_fraction_chars: Lt.INVALID_FRACTION_CHARS,
  invalid_fraction_format: Lt.INVALID_FRACTION_FORMAT,
  invalid_format: Lt.INVALID_FORMAT,
  above_max: Lt.ABOVE_MAX,
  below_min: Lt.BELOW_MIN,
  zero_not_allowed: Lt.ZERO_NOT_ALLOWED,
  division_by_zero: Lt.DIVISION_BY_ZERO
};
function nu(t) {
  if (t in Mn) {
    const e = t;
    return wt() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${Mn[e]}"`), Mn[e];
  }
  return t;
}
var se = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(se || {}), au = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(au || {});
class kt {
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
      const l = o.constructor?.name === i, u = "getType" in o && typeof o.getType == "function" && o.getType() === e, f = l || u, g = s ? s(o) : !0;
      return f && g;
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
let _n = null;
const ou = (t) => (_n || (_n = kt.create(se.Cut, "Cut")), _n(t));
let Bn = null;
const Ke = (t) => (Bn || (Bn = kt.create(se.Shape, "Shape", (e) => !("shapes" in e))), Bn(t));
let jn = null;
const Mt = (t) => (jn || (jn = kt.create(se.Stock, "Stock")), jn(t));
let Vn = null;
const gr = (t) => (Vn || (Vn = kt.create(se.Group, "Group", (e) => "shapes" in e && Array.isArray(e.shapes) && e.type !== "user" && e.type !== "strip")), Vn(t));
let Nn = null;
const ps = (t) => (Nn || (Nn = kt.create(se.UserGroup, "Group", (e) => "shapes" in e && e.type === "user")), Nn(t));
let Gn = null;
const mr = (t) => (Gn || (Gn = kt.create(se.StripGroup, "Group", (e) => "shapes" in e && e.type === "strip")), Gn(t));
let qn = null;
const yr = (t) => (qn || (qn = kt.create(se.FirstShapeGroup, "Group", (e) => "shapes" in e && e.type === "firstShape")), qn(t)), We = (t) => gr(t) || ps(t) || mr(t) || yr(t);
let zn = null;
const zt = (t) => (zn || (zn = kt.create(se.InputUserGroup, "InputUserGroup")), zn(t));
let Wn = null;
const Vi = (t) => (Wn || (Wn = kt.create(se.Segment, "Segment")), Wn(t));
let Hn = null;
const ru = (t) => (Hn || (Hn = kt.create(se.Offcut, "Offcut")), Hn(t)), br = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
};
let Un = null;
const lu = (t) => (Un || (Un = kt.create(se.Saw, "Saw")), Un(t)), vr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Rectangle")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Rectangle";
}, cu = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Placeable")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Placeable";
};
let Yn = null;
const be = (t) => (Yn || (Yn = kt.create(se.InputShape, "InputShape")), Yn(t));
let Kn = null;
const Ni = (t) => (Kn || (Kn = kt.create(se.InputStock, "InputStock")), Kn(t));
function uu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function wr(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function du(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(se).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(se).includes(i))
        return i;
    } catch {
    }
  return ou(t) ? se.Cut : be(t) ? se.InputShape : Ni(t) ? se.InputStock : zt(t) ? se.InputUserGroup : ps(t) ? se.UserGroup : mr(t) ? se.StripGroup : yr(t) ? se.FirstShapeGroup : gr(t) ? se.Group : Ke(t) ? se.Shape : Mt(t) ? se.Stock : br(t) ? se.Container : Vi(t) ? se.Segment : ru(t) ? se.Offcut : vr(t) ? se.Rectangle : cu(t) ? se.Placeable : null;
}
const oi = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, Jt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, Qt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, fu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
function hu(t) {
  return t?.__entityType === se.Shape;
}
function bw(t) {
  return t?.__entityType === se.Group || t?.__entityType === se.StripGroup || t?.__entityType === se.FirstShapeGroup;
}
function vw(t) {
  return t?.__entityType === se.UserGroup;
}
const Sr = fe(["error", "warning"]), xr = fe(["saw", "stock", "part", "group", "machining", "extras"]);
B({
  message: b(),
  identifier: b(),
  field: ee(ee(b())),
  index: ee(d()),
  id: b(),
  // Source object's autoId for linking back
  type: Sr,
  category: ee(xr)
});
const pu = B({
  item: xe().nullable().default(null),
  message: b().default(""),
  params: we(b(), he([b(), d(), R(), xt()])).optional(),
  // Translation parameters
  field: ee(ee(b())).default([]),
  index: ee(d()).nullable().default(null),
  id: b().nullable().default(null),
  // Source object's autoId
  issues: ee(xe()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Sr.default("error"),
  category: ee(xr).nullable().default(null),
  throwError: R().default(!1),
  shouldTranslate: R().default(!0)
});
function Pi(t) {
  return !(!t || typeof t != "string");
}
function gu(t) {
  return !Pi(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function mu(t) {
  return !Pi(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function yu(t) {
  return Pi(t) ? t.trim().split(" ").map((e) => Hi(e)).join(" ") : "";
}
function Hi(t) {
  return Pi(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function bu(t) {
  return Pi(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function vu(t) {
  return Pi(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function ww(t, e = 100) {
  return Pi(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let kr = sr;
function wu(t) {
  kr = t;
}
function _t(t, e) {
  if (pr())
    return t;
  const i = kr.t(t, { ...e });
  return !i || i === t ? (wt() && (console.warn(`[i18n] Translation not found - Key: "${t}"`), console.trace()), t) : Hi(i);
}
function Su(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function xu(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Su(s)) {
      const n = _t(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function ku(t, e) {
  const i = nu(t), s = t.startsWith("errors.validation.") ? t : i, n = xu(e);
  return {
    message: _t(s, n),
    translationKey: s,
    params: n
  };
}
function Iu(t, e) {
  return ku(t, e).message;
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
    const i = pu.parse(e), s = ie.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? Iu(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((o) => [...o]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const o = `Issue created for ${du(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
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
oa(
  (t) => t instanceof ie,
  { message: "Must be an Issue instance" }
);
const Ir = /* @__PURE__ */ new Map();
let Cr = !1;
function Cu() {
  if (!Cr) {
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
function ln() {
  return Cu(), Ir;
}
function Sw(t, e) {
  Ir.set(t, e);
}
function xw() {
  Cr = !0;
}
function cn(t, e) {
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
function ks(t) {
  const e = {};
  if (t instanceof jc) {
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
typeof Bc < "u" && Dn && Dn.prototype && (Dn.prototype.behavior = function(t) {
  return cn(this, t);
});
function ge(t, e = {}) {
  let s = xe().refine((o) => o == null ? !0 : typeof o == "object" && o !== null ? ("autoId" in o || "id" in o, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((o) => {
    if (o == null || typeof o == "object" && o !== null && typeof o.getType == "function" || typeof o == "object" && o !== null && o.__ref === !0 || typeof o == "object" && o !== null && "__entityType" in o)
      return o;
    if (typeof o == "object" && o !== null && !o.__ref)
      try {
        const l = ln().get(t);
        if (l && typeof l == "function")
          return typeof l.fromData == "function" ? l.fromData(o) : new l(o);
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
  return n = cn(n, a), n;
}
function Ee(t, e = {}) {
  let i = ee(ge(t)).default([]).describe(
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
  return i = cn(i, s), i;
}
function Es(t, e = {}) {
  const i = t.map((a) => ge(a));
  let s = ee(he(i)).default([]).describe(
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
  return s = cn(s, n), s;
}
const Pr = b().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Pu = b().max(200).default("").describe("User input name"), Tu = b().default("").describe("Parent identifier for tracking copies and relationships"), Au = R().default(!1).describe("Prevent automatic rotation optimization"), Ou = R().default(!1).describe("Whether this is an offcut piece"), Tr = ee(b()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Ui = he([
  me(""),
  me("l"),
  me("w"),
  me(" ").transform(() => ""),
  xt().transform(() => "")
]).default("").describe("Grain direction of the material"), Ar = he([
  // String format (legacy support - color name or hex)
  b(),
  // Object format with hex and name
  B({
    hex: b().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: b().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Or = Wi(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  fe(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), $u = B({
  l1: d().default(0).describe("Long side 1 trim value"),
  l2: d().default(0).describe("Long side 2 trim value"),
  w1: d().default(0).describe("Short side 1 trim value"),
  w2: d().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
B({
  material: R(),
  thickness: R(),
  fit: R(),
  width: R()
}).nullable().default(null);
he([
  me(""),
  me("l"),
  me("w"),
  xt()
]).default(null);
we(b(), d()).nullable().default(null);
we(b(), d()).nullable().default(null);
const Ma = he([
  me(0),
  me(1)
]), Fu = B({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: Ma.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: d().optional().describe("Order of the batch"),
  id: b().optional().describe("Batch ID"),
  stockId: b().optional().describe("Associated stock ID"),
  rerunning: R().optional().describe("Whether the batch is being rerun"),
  priorityShape: b().nullable().describe("Priority shape identifier (null if none specified)")
});
B({
  subsetUsed: R().optional().describe("Whether a subset was used for strip shape batches"),
  groups: we(b(), Fu).describe("Groups of strip shape batches keyed by ID")
});
const Lu = ["x", "y"];
fe(Lu);
const Eu = ["l", "w"];
fe(Eu);
const _a = ["l", "w"], fi = fe(_a);
he([
  me(0),
  me(1),
  me(2)
]);
he([
  me(0),
  me(1),
  xt()
]);
const Du = ["sheet", "linear", "roll"], un = Wi(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  he([
    fe(Du),
    xt()
  ]).nullable().default(null)
).describe("Type of stock material"), $r = B({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: R().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: R().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: R().default(!1).describe("Automatically add stock as needed")
}), Ru = fe(["none", "schema", "business", "full"]), Bt = B({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: Ee("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: Ee("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: R().optional(),
  // New validation control properties
  skipSchemaValidation: R().optional(),
  skipBusinessValidation: R().optional(),
  validationMode: Ru.optional(),
  enableStrictMode: R().optional()
}), si = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function Mu(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const Ba = Bt.extend({
  // Identity
  id: Pr,
  // Description
  name: Pu,
  // Dimensions
  l: Wi((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Length (long side dimension)"),
  w: Wi((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Width (short side dimension)"),
  t: d().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: d().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: d().positive().default(1).describe("Calculated area (l * w)"),
  longSide: d().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: d().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: b().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: R().default(!1).describe("Whether this is a duplicate"),
  offcut: Ou,
  // Grain
  grain: Ui,
  preventGrainRotation: R().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Au,
  orientationLock: Or,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: d().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: d().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: b().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: $u.describe("Reduce the dimensions by specified trim values"),
  trimmed: R().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: B({
    rectangle: ge("Rectangle").nullable().default(null),
    distance: d().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: d().min(0).nullable().default(0).describe("Cost per unit"),
  customData: we(b(), xe()).default({}).describe("Custom user-defined data"),
  identicalTo: Tr,
  notes: b().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), ja = {
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
}, dn = Ba.extend({
  // Identity - override id to be required for containers
  id: b().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: Tu,
  // Container-specific fields
  stockType: un,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Es(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: ge("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: xe().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: R().default(!0).describe("Flag indicating this is a container")
}), fn = {
  // Include all Rectangle computed properties
  ...ja,
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
    compute: (t) => Mt(t) ? t : Vi(t) || We(t) ? t.stock : null,
    metadata: {
      cache: !1,
      returnType: "Stock | null"
    }
  }
};
dn.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(fn)
}));
function bo(t, e) {
  return Vc(t, e);
}
function ci(t, e) {
  return _e(t, e);
}
function ts(t, e, i) {
  Nc(t, e, i);
}
function Se(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function vo(t, e = !1) {
  if (!Se(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => Se(s) && s) : i.some((s) => Se(s));
}
function kw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added).map((s) => s), i = {};
  return e.forEach((s) => {
    const n = _u(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot);
  }), Object.values(i);
}
function _u(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function Bu() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Iw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function Ht(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function ju(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
const Mi = 1e-10, Vu = 10, Nu = Number.MAX_SAFE_INTEGER, Gu = 4294967295, mt = (t) => typeof t == "number" && Number.isFinite(t), Ds = (t) => Array.isArray(t) && t.length > 0;
function es(t, e, i = Mi) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const qu = {
  greaterThan: (t, e, i = Mi) => !mt(t) || !mt(e) ? !1 : es(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Mi) => !mt(t) || !mt(e) ? !1 : es(t, e, i) >= 0,
  lessThan: (t, e, i = Mi) => !mt(t) || !mt(e) ? !1 : es(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Mi) => !mt(t) || !mt(e) ? !1 : es(t, e, i) <= 0,
  equalTo: (t, e, i = Mi) => !mt(t) || !mt(e) ? !1 : es(t, e, i) === 0
};
function zu(t) {
  return mt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Vu)) : !1;
}
function Wu(t) {
  if (!mt(t) || t < 0 || t > Nu)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Gu + 1) * t);
}
function Hu(t, e) {
  if (!Ds(t))
    throw new Error("Invalid array parameter");
  if (!mt(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const a = Math.floor(Math.random() * (n + 1));
    [i[n], i[a]] = [i[a], i[n]];
  }
  return i.slice(s);
}
class Is {
  static calculateMean(e) {
    if (!Ds(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Ds(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, o) => {
      const r = o - s;
      return a + r * r;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Ds(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const ne = {
  ...qu,
  isNumber: mt,
  round: zu,
  getRandom: Wu,
  getRandomSample: Hu,
  calculateStandardDeviation: Is.calculateStandardDeviation.bind(Is),
  calculateCoefficientOfVariation: Is.calculateCoefficientOfVariation.bind(Is)
}, Zn = 10, wo = 0;
class Us extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const is = {
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
function Uu(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new rs(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Yu(t, e) {
  const i = new rs(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new rs(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Ku(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = Fr(n, !0), o = parseFloat(a ?? ""), r = a !== null && a !== "" && !isNaN(o) && isFinite(o);
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
function Zu(t = "en-US") {
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
function Rs(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = Zu(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new Us(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function Va(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(is).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function Fr(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(is).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(is).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), r = i.match(a), l = i.match(o);
    if (r) {
      const c = r[1], u = r[2], f = r[3], g = is[f];
      if (g)
        return `${c}${u} ${g}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], f = is[u];
      if (f)
        return `${c}${f}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (Va(i)) {
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
      const u = e ? Rs(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new Us(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Cw(t, e, i = null, s = null) {
  if (t && !(!be(t) && !Ni(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const a in t[n])
          Object.prototype.hasOwnProperty.call(t[n], a) && (t[n][a] = K({ v: t[n][a], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = K({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function Xu(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function Ju(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function K(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Zn, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? wo;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Zn) {
        const o = Math.pow(10, s);
        return Math.round(t.v * o) / o;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const o = t.v.trim();
      if (Xu(o) && !n) {
        const r = parseFloat(o);
        if (isFinite(r)) {
          if (typeof s == "number" && s !== Zn) {
            const l = Math.pow(10, s);
            return Math.round(r * l) / l;
          }
          return r;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const o = t.v.trim();
    if (Ju(o))
      try {
        const r = new rs(o);
        if (isFinite(r.valueOf())) {
          if (a === 0 || a === wo)
            return r.toFraction(!0);
          const l = r.mul(a), c = Math.round(l.valueOf());
          return new rs(c, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const o = Fr(t.v, n);
    return o === null || o === "" ? i === "decimal" ? null : "" : i === "decimal" ? Uu(o, s) : Yu(o, a);
  } catch (o) {
    throw o instanceof Us ? o : new Us(
      `Failed to convert number format: "${t.v}" to ${i}. ${o.message}`
    );
  }
}
function Gi(t, e = !1) {
  const i = typeof t.l == "string" ? K({ v: t.l }) : t.l, s = typeof t.w == "string" ? K({ v: t.w }) : t.w;
  if (!e)
    return { l: i, w: s };
  if (!("trim" in t))
    return { l: i, w: s };
  if (wr(t))
    return { l: i, w: s };
  if (vr(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = K({ v: n.l1 ?? 0 }) + K({ v: n.l2 ?? 0 }), o = K({ v: n.w1 ?? 0 }) + K({ v: n.w2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? K({ v: a }) : a),
    w: s - (typeof o == "string" ? K({ v: o }) : o)
  };
}
function Qu(t, e) {
  if ("trim" in t && !wr(t)) {
    const i = t.trim;
    e.l = e.l - (K({ v: i.l1 ?? 0 }) + K({ v: i.l2 ?? 0 })), e.w = e.w - (K({ v: i.w1 ?? 0 }) + K({ v: i.w2 ?? 0 }));
  }
  return e;
}
function Ei(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (Ni(t) || be(t) || ps(t)) && (s = {
    l: K({ v: t.l }),
    w: K({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = Qu(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Lr(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function ed(t) {
  We(t) || (Lr(t), [t.l, t.w] = [t.w, t.l]);
}
function Yi(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && lu(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = K({ v: s.options.minSpacing }) : br(e) && (n = e?.saw?.options.minSpacing);
  const a = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = Gi(e, !0), r = a ? Gi(e, !1) : o, l = Gi(t, !0);
  let c = o;
  if (a && (ne.equalTo(l.l, r.l) && ne.equalTo(l.w, r.w) || ne.equalTo(l.l, r.w) && ne.equalTo(l.w, r.l)) && (c = r), l.l * l.w > c.l * c.w)
    return !1;
  function u(L, E) {
    return ne.equalTo(L, E) || ne.lessThanOrEqualTo(L, E - n * 2);
  }
  function f(L) {
    return u(L.l, c.l) && u(L.w, c.w);
  }
  const g = Er(t, e);
  if (t.orientationLock || i !== null) {
    const L = i ?? (g === "w" ? 1 : 0), E = Ei(t, L, !0);
    if (a) {
      const C = Ei(t, L, !1);
      if (ne.equalTo(C.l, r.l) && ne.equalTo(C.w, r.w))
        return f(C);
    }
    return f(E);
  }
  const m = Ei(t, 0, !0);
  if (a) {
    const L = Ei(t, 0, !1);
    if (ne.equalTo(L.l, r.l) && ne.equalTo(L.w, r.w) && f(L)) return !0;
  }
  if (f(m)) return !0;
  const I = Ei(t, 1, !0);
  if (a) {
    const L = Ei(t, 1, !1);
    if (ne.equalTo(L.l, r.l) && ne.equalTo(L.w, r.w) && f(L)) return !0;
  }
  return f(I);
}
function td(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (We(t) || ps(t) || Ke(t) || be(t)) && (e = t.orientationLock), e;
}
function Er(t, e) {
  const i = td(t);
  if (!Se(i)) return null;
  if (!e || "direction" in t) return i;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && Se(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function Dr(t, e) {
  if (We(t))
    return Yi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    St(t, s, e) && Yi(t, e, s) && i.push(s);
  return i;
}
function St(t, e = null, i = null) {
  if (!Se(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !We(t) && nd(t) && e || i && !Yi(t, i, e))
    return !1;
  const s = Er(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function id(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), St(t, e, i) ? (s === e || ed(t), !0) : !1;
}
function nt(t, e = null, i = null) {
  e ? e = 1 : e = 0;
  const s = t.id || t.autoId || "unknown";
  return i && e && !Yi(t, i, e) ? (console.warn(`[setRotation] ${s}: Cannot rotate to ${e} - won't fit in container`), !1) : id(t, e, i);
}
function Pw(t, e) {
  if (We(t)) return t.rot;
  if (!Se(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !Se(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function So(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = Gi(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const o = Math.max(a.l, a.w), r = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (o >= e && o <= i && St(t, 0, n) || r >= e && r <= i && St(t, 1, n)) return !0;
      } else if (s === "w" && (r >= e && r <= i && St(t, 0, n) || o >= e && o <= i && St(t, 1, n)))
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
function sd(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = Gi(t), a = Math.max(n.l, n.w), o = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && St(t, 0, s)) return nt(t, 0);
    if (o === e && St(t, 1, s)) return nt(t, 1);
  } else if (i === "w") {
    if (o === e && St(t, 0, s)) return nt(t, 0);
    if (a === e && St(t, 1, s)) return nt(t, 1);
  }
  return !1;
}
function nd(t) {
  Lr(t);
  const e = Gi(t);
  return ne.equalTo(e.l, e.w);
}
function xo(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let ko = 0, Io = Date.now();
const ad = 1e4;
function od() {
  return ko % ad === 0 && (Io = Date.now()), `${Io}-${(ko++).toString(36)}`;
}
class rd {
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
    this.autoId = e?.autoId || od(), Object.defineProperty(this, "_serializationMode", {
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
      const i = ks(e.schema), s = e.schema;
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
        const r = ks(o);
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
        if (s instanceof dr) {
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
      const m = s.pop() || "0", I = parseInt(m, 10);
      isNaN(I) && s.push(m), n = String(e);
    } else {
      const m = s.pop() || "0", I = parseInt(m, 10);
      isNaN(I) ? (s.push(m), n = "1") : n = String(I + 1);
    }
    s.push(n);
    const a = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let f = {};
    u && (f = ks(u));
    const g = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [m, I] of Object.entries(f))
      I.clone === "reset" && (m in g ? c[m] = g[m] : delete c[m]);
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
    if (a && (o = ks(a)[i] || null), o?.clone)
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
        if (xo(o)) {
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
    if (xo(e)) {
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
    const n = ln().get(i);
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
class ze extends rd {
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
    ze.recreateFunc = e;
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
      o = e;
    else if (s.enableStrictMode)
      o = i.parse(e);
    else {
      const r = i.safeParse(e);
      r.success ? o = r.data : o = i.partial().parse(e);
    }
    o = this.recreateNestedClasses(o, i), Object.assign(this, o), this.applyComputedProperties(), Object.defineProperty(this, "_type", {
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
   * Recreate nested class instances based on schema metadata
   * This handles zRef and zRefArray fields automatically
   */
  recreateNestedClasses(e, i) {
    if (!e || typeof e != "object" || Array.isArray(e)) return e;
    const s = { ...e }, n = i.shape;
    for (const [a, o] of Object.entries(n)) {
      const r = s[a];
      r != null && (s[a] = this.deserializeValue(r));
    }
    return s;
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
    return e && typeof e == "object" ? (s && (e.id || e.autoId), ze.recreateFunc ? ze.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
    n ? a = e : a = i.partial().parse(e), a = this.recreateNestedClasses(a, i.partial()), super.update(a);
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
      if (i instanceof dr)
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
      return e.map((s) => ze.cleanEntityForAPI(s));
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
      if (o instanceof Gc) {
        const r = o.options.some((c) => c instanceof qc), l = o.options.some((c) => c instanceof zc);
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
    if (e instanceof Wc || e instanceof Hc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Uc)
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
const ld = ["lr", "rl", "bt", "tb"];
B({
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  dimension: fe(["l", "w"]).optional(),
  shapeCollisions: ee(xe()).optional()
});
B({
  id: b().nullable().optional(),
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  origin: b().optional(),
  dimension: fe(["l", "w"]).optional(),
  direction: fe(ld).nullable().optional(),
  type: b().nullable().optional()
});
const cd = B({
  // ========== Identification ==========
  // Unique identifier for this line
  id: b(),
  // Type classification for this line
  type: b().optional(),
  // ========== Coordinates ==========
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: b().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: ee(xe()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: ee(xe()).default([])
}), ud = {
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
class vi extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = cd;
  static computedProperties = ud;
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
    return se.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!ne.isNumber(this.x1) || !ne.isNumber(this.x2) || !ne.isNumber(this.y1) || !ne.isNumber(this.y2)) && e.push(new ie({
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
      if (this.dimension === "l" ? (r = ne.greaterThan(this.x2, o.x) && ne.lessThan(this.x1, o.x + o.l), l = ne.greaterThan(this.y1 + n, o.y) && ne.lessThan(this.y1 - n, o.y + o.w)) : this.dimension === "w" && (r = ne.greaterThan(this.x1 + n, o.x) && ne.lessThan(this.x1 - n, o.x + o.l), l = ne.greaterThan(this.y2, o.y) && ne.lessThan(this.y1, o.y + o.w)), r && l)
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
    return new vi({ x1: e, y1: i, x2: s, y2: n, origin: a, type: o });
  }
  get lineDimension() {
    return !ne.isNumber(this.x1) || !ne.isNumber(this.x2) || !ne.isNumber(this.y1) || !ne.isNumber(this.y2) ? null : this.x1 === this.x2 && this.y1 !== this.y2 ? "w" : this.y1 === this.y2 && this.x1 !== this.x2 ? "l" : null;
  }
  get lineDirection() {
    return !ne.isNumber(this.x1) || !ne.isNumber(this.x2) || !ne.isNumber(this.y1) || !ne.isNumber(this.y2) ? null : this.x1 < this.x2 ? "lr" : this.x1 > this.x2 ? "rl" : this.y1 < this.y2 ? "bt" : this.y1 > this.y2 ? "tb" : null;
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
const Co = ["topLeft", "topRight", "bottomLeft", "bottomRight"], dd = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], fd = ["lr", "rl", "bt", "tb"], hd = B({
  // ========== Coordinates ==========
  x: d().default(0),
  y: d().default(0),
  z: d().default(0),
  // ========== Shape References ==========
  a: b().optional(),
  b: b().optional(),
  stock: ge("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: fe(fd).nullable().optional(),
  type: b().optional(),
  corner: fe(Co).optional(),
  shapePosition: fe(Co).optional(),
  grid: fe(dd).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: R().default(!1),
  collision: R().default(!1),
  tooClose: R().default(!1),
  adjustedForMinSpacing: R().default(!1)
}), pd = {
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
}, gd = {
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
}, Cs = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Ps = {
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
class Qe extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = hd;
  static computedProperties = pd;
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
    return se.Point;
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
    return new Qe(e, i, s);
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
    const s = new Qe(e ?? this.x, i ?? this.y);
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
      const s = gd[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (Cs[this.corner] && (this.grid ? Cs[this.corner][this.grid] && Cs[this.corner][this.grid].forEach((s) => i.add(s)) : Cs[this.corner].default?.forEach((s) => i.add(s))), i) : (Ps[this.corner] && (this.grid ? Ps[this.corner][this.grid] && Ps[this.corner][this.grid].forEach((s) => i.add(s)) : Ps[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
class hn extends ze {
  // Zod schema for validation and serialization
  static schema = Ba;
  static computedProperties = ja;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Mt(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && nt(this, 0), this.orientationLock === "w" && nt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = Ht(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = Mu(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return se.Rectangle;
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
        return new vi({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new vi({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new vi({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new vi({
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
      bottomLeft: new Qe(this.x, this.y),
      topLeft: new Qe(this.x, this.y + this.w),
      topRight: new Qe(this.x + this.l, this.y + this.w),
      bottomRight: new Qe(this.x + this.l, this.y)
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
    const s = new hn({
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
class pn extends hn {
  // Zod schema for validation and serialization
  static schema = dn;
  static computedProperties = fn;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return se.Container;
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
    const i = pn.schema.partial().parse(e);
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
const md = B({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: he([
    me(0),
    me(1)
  ]).describe("Rotation"),
  order: d().optional().describe("Order of the batch"),
  id: b().optional().describe("Batch ID"),
  stockId: b().optional().describe("Associated stock ID"),
  rerunning: R().optional().describe("Whether the batch is being rerun"),
  priorityShape: b().nullable().describe("Priority shape identifier (null if none specified)")
}), Rr = B({
  // Strip direction
  myStripDirection: fi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: he([
    ge("Shape", { nullable: !0 }),
    ge("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization"),
  // Phase number
  myPhase: d().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: B({
    subsetUsed: R().optional().describe("Whether a subset was used for strip shape batches"),
    groups: we(b(), md).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Rr.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const yd = {};
class ei extends ze {
  // Required: Define schema and computed properties
  static schema = Rr;
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
    return se.GuillotineState;
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
function bd(t, e = "cc", i = {
  l1: "w1",
  l2: "w2",
  w1: "l1",
  w2: "l2"
}, s = {
  a: "d",
  b: "a",
  c: "b",
  d: "c"
}) {
  const n = {
    l1: null,
    l2: null,
    w1: null,
    w2: null
  };
  if (e === "c") {
    for (const [a, o] of Object.entries(i))
      n[o] = t[a];
    for (const [a, o] of Object.entries(s))
      o in t && (n[o] = t[a]);
  } else if (e === "cc") {
    for (const [a, o] of Object.entries(i))
      n[a] = t[o];
    for (const [a, o] of Object.entries(s))
      o in t && (n[a] = t[o]);
  }
  return n;
}
function ra(t = 0, e, i = null, s = null, n = null) {
  if (!be(i) && !zt || s === "stock") return !1;
  let a, o;
  if (be(i) ? a = i.orientationLock : zt(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || zt(i))
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
function vd(t, e, i = null, s = null, n = null) {
  if (!be(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 ? ra(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : a;
}
const wd = ["l", "w"], Sd = ["top", "bottom", "left", "right", "merged"], xd = B({
  // Coordinates
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // Dimension and position
  dimension: fe(wd).optional(),
  position: fe(Sd).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: ge("Stock"),
  // Guillotine properties
  isGuillotine: R().default(!1),
  guillotineState: B({
    order: d().nullable().optional(),
    parentSegmentID: b().nullable().optional(),
    phase: d().nullable().optional(),
    segmentCutOrder: d().nullable().optional(),
    partProduced: b().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: B({
    order: d().nullable().optional(),
    function: d().nullable().optional(),
    isDummy: R().nullable().optional(),
    headCutStrip: R().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: R().default(!1),
  isTrim: R().default(!1),
  beamTrimL1: R().default(!1),
  beamTrimL2: R().default(!1),
  beamTrimW1: R().default(!1),
  beamTrimW2: R().default(!1),
  // Distances
  distances: B({
    bottom: d().nullable().optional(),
    left: d().nullable().optional(),
    right: d().nullable().optional(),
    top: d().nullable().optional(),
    partSize: d().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: R().optional().behavior({ compress: "exclude" })
}), kd = {
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
class Na extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = xd;
  static computedProperties = kd;
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
    return se.Cut;
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
    return new Na({ x1: e, y1: i, x2: s, y2: n, position: o, stock: a });
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
const Id = B({
  fill: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  cohesion: d().default(0),
  area: d().default(0),
  edge: d().default(0),
  alignment: d().default(0),
  exactFit: d().default(0),
  total: d().default(0),
  shapes: he([
    ge("Shape", { nullable: !0 }),
    ge("Group", { nullable: !0 })
  ]).optional(),
  group: ge("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: fi.optional()
}).behavior({ clone: "reset" }), Cd = B({
  exactStripFill: d().default(0),
  fill: d().default(0),
  cohesion: d().default(0),
  fenceConsistency: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  sameStripBonus: d().default(0),
  aspectRatio: d().optional(),
  total: d().default(0),
  cutDirection: fi,
  myStripDirection: fi.optional(),
  myStripParent: he([
    ge("Shape", { nullable: !0 }),
    ge("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: d().optional()
}).behavior({ clone: "reset" }), Po = he([
  Id,
  Cd,
  // Also support the generic object with catchall for backward compatibility
  B({
    cutDirection: fi.optional(),
    myStripParent: he([
      ge("Shape", { nullable: !0 }),
      ge("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: fi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), gs = Ba.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ee(b()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: B({
    material: R(),
    thickness: R(),
    fit: R(),
    width: R()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: ge("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: wt() ? "full" : "exclude",
    compress: wt() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: we(b(), d()).default({}).describe("Priority levels for optimization"),
  weighting: we(b(), d()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: R().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: B({
    sampleRotations: ee(d().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: R().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: R().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: d().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: ge("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: we(
    b(),
    we(b(), R())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: B({
    x: d().nullable().default(null),
    y: d().nullable().default(null),
    rot: he([me(0), me(1)]).nullable().default(null),
    total: d().nullable().default(null),
    weighting: we(b(), d()).optional(),
    group: ge("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Po.optional(),
    point: xe().optional().describe("Associated point for placement"),
    myStripParent: he([
      ge("Shape", { nullable: !0 }),
      ge("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: fi.optional(),
    myStripDirection: fi.optional(),
    stock: ge("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: wt() ? "full" : "exclude"
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Po.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: wt() ? "full" : "exclude"
  }),
  // Minimum spacing
  minSpacing: d().min(0).default(0).describe("Minimum spacing around shape or group")
}), ms = {
  // Include all Rectangle computed properties
  ...ja
  // Placeable doesn't define additional computed properties
};
gs.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(ms)
}));
class Ga extends hn {
  // Zod schema for validation and serialization
  static schema = gs;
  static computedProperties = ms;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new ei();
    else if (!(this.guillotineState instanceof ei)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ei(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), Ke(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (!this.guillotineState || !(this.guillotineState instanceof ei)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new ei(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof ei ? this.guillotineState : null;
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
    return se.Placeable;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof ei)
      if (i) {
        const a = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), a && (this.guillotineState.stripShapeBatches = a);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new ei();
    Ke(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = "")), We(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !We(this) && e?.grain && this.rot && (this.grain = Ht(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, Ke(this) && (this.group.addedAsGroup = "", this.firstShape.isFirstShape = !1), We(this) && this.shapes.forEach((e) => {
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
    return !i || uu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: Ke(e) ? e.group.reference : null,
      stock: e.stock,
      weighting: {},
      // Use empty object instead of null
      point: i
    };
  }
  setPositionToBestScore() {
    nt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
    return Mt(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Yi(this, e, i);
  }
  /**
   * Check if shape is an exact fit
   */
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  getDistancesToContainerEdges(e) {
    return [
      this.x - e.x,
      e.l - (this.x + this.l),
      e.w - (this.y + this.w),
      this.y - e.y
    ];
  }
  /**
  	 * Check if too close to container edges
  	 */
  isTooCloseToEdges(e) {
    const i = e.saw?.options?.minSpacing || this.minSpacing;
    return i ? this.getDistancesToContainerEdges(e).some((s) => s > 0 && s <= i) : !1;
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
    const s = new Qe(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Qe(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new Qe(this.x, this.y);
    a.corner = "bottomLeft";
    const o = new Qe(this.x + this.l, this.y + this.w);
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
    if (this.getType() === se.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== se.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === se.Shape && i && this.parentId !== e.parentId) return !1;
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
    return e === null && (e = Mt(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Na({
      stock: Mt(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
const Ut = {
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
function qe(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = _t(i);
  if (s === i) {
    const n = Ut[t] || t;
    return wt() && !Ut[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return wt() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const Mr = (t, e, i, s, n, a) => {
  const o = _e(t, e);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new ie({
      item: t,
      message: _t("errors.validation.must_be_string", {
        0: Ut[e]
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
    message: _t("errors.validation.must_be_values", {
      0: Ut[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: a
  });
};
function _r(t) {
  return t.filter((e) => e.type === "error");
}
function Pd(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Td(t) {
  return Pd(t, "issues") && Array.isArray(t.issues);
}
function To(t, e, i = !1) {
  if (!Td(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((o) => o.type === s).some((o) => o.field?.length ? o.field.some((r) => r.every((l, c) => l === Od(e[c]))) : !1);
}
const Ad = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Od(t) {
  return Ad[t] ?? t;
}
const $d = ["banding", "finish", "planing", "info"], Xn = b().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), It = he([
  R(),
  b(),
  we(b(), he([R(), b()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), ys = Bt.extend({
  // ========== Identity ==========
  type: fe($d).optional().describe("Type of extra"),
  enabled: R().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: B({
    a: It.optional(),
    b: It.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: B({
    a: It.optional(),
    b: It.optional(),
    c: It.optional(),
    d: It.optional(),
    l1: It.optional(),
    l2: It.optional(),
    w1: It.optional(),
    w2: It.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), gn = {
  // Inherit computed properties from validation base
  ...si
  // Add any extra-specific computed properties here
};
we(
  fe(["a", "b"]),
  It
);
we(
  fe(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  It
);
const Br = B({
  min: d().optional().describe("Minimum value"),
  max: d().optional().describe("Maximum value"),
  message: b().optional().describe("Custom error message")
});
B({
  scope: fe(["face", "side"]),
  key: b(),
  // Face or Side key
  original: b()
  // Original ExtraLocation string
});
const Fd = B({
  location: b().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: we(b(), Br).optional(),
  disabledMessage: b().optional().describe("Message when location is disabled")
}), Ld = B({
  global: we(b(), Br).optional(),
  locations: ee(Fd).optional().describe("Location-specific constraints"),
  defaultMessage: b().optional().describe("Default message when constraints not met")
});
B({
  scope: ee(fe(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ee(oa()).optional().describe("Available face locations"),
  sides: ee(oa()).optional().describe("Available side locations"),
  constraints: Ld.optional()
});
const jr = ys, Ed = {
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
class ls extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ys;
  static computedProperties = gn;
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
class Rt extends ls {
  // Required: Define schema and computed properties for SchemaClass
  static schema = jr;
  static computedProperties = {
    ...ls.computedProperties,
    ...Ed
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
    const i = [], s = ["a", "b", "c", "d", "l1", "l2", "w1", "w2"];
    for (const n in this.sides)
      s.includes(n) || i.push(new ie({
        item: e,
        message: `Invalid banding side: ${n}`,
        type: "warning"
      }));
    return this.issues = i, i;
  }
  /**
   * Calculate the cost of this banding
   * @param shape Optional shape for context-aware pricing
   */
  getCost(e) {
    return this.hasValues() ? e ? this.calculateLength(e.l, e.w) * 0.1 : this.getActiveSides().length * 5 : 0;
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
    const i = this.sides[e];
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
    const i = ["a", "b", "c", "d"];
    for (const s of i)
      this.setSide(s, e);
  }
  /**
   * Get the length for a specific side
   */
  getSideLength(e, i, s) {
    return !this.sides || !this.sides[e] ? 0 : {
      a: i,
      // Bottom left to bottom right
      b: s,
      // Bottom right to top right
      c: i,
      // Top right to top left
      d: s,
      // Top left to bottom left
      l1: s,
      // Left
      l2: s,
      // Right
      w1: i,
      // Bottom
      w2: i
      // Top
    }[e] || 0;
  }
  /**
   * Calculate total banding length
   */
  calculateLength(e, i) {
    let s = 0;
    const n = {
      a: e,
      // Bottom left to bottom right
      b: i,
      // Bottom right to top right
      c: e,
      // Top right to top left
      d: i,
      // Top left to bottom left
      l1: i,
      // Left
      l2: i,
      // Right
      w1: e,
      // Bottom
      w2: e
      // Top
    };
    for (const a in this.sides)
      this.hasSide(a) && n[a] && (s += n[a]);
    return s;
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
    return new Rt(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new Rt();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new Rt();
    return i.setAllSides(e), i;
  }
}
const Dd = Bt.extend({
  // Identity
  id: b().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // NOTE: Default zRef behavior is serialize: 'reference', compress: 'reference'
  // These nested objects don't need fieldBehavior overrides - parent Extras handles serialization
  banding: ge("Banding", { nullable: !0 }).describe("Edge banding configuration"),
  finish: ge("Finish", { nullable: !0 }).describe("Surface finish configuration"),
  planing: ge("Planing", { nullable: !0 }).describe("Planing configuration")
  // imageUpload: zRef<ImageUpload>( 'ImageUpload', { nullable: true } ).describe( 'Uploaded images' )
  // issues and warnings are now properly inherited from validationBasePropertiesSchema
}), Rd = {
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
}, Ci = ["l1", "l2", "w1", "w2"], Md = ["a", "b", "c", "d"], At = [...Ci, ...Md], ft = ["a", "b"], Vr = ys, _d = {
  // Inherit computed properties from Extra base (includes validation base)
  ...gn,
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
class vt extends ls {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Vr;
  static computedProperties = _d;
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
    return new vt(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new vt();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new vt();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new vt();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new vt();
    return i.setFace("b", e), i;
  }
}
const Nr = ys, Bd = {
  // Inherit computed properties from Extra base
  ...gn,
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
class ui extends ls {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Nr;
  static computedProperties = Bd;
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
      for (const s of At)
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
      for (const e of At)
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
    for (const i of At)
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
      for (const a of At)
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
    return new ui(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new ui();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new ui();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new ui();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new ui();
    return i.setAllSides(e), i;
  }
}
class Ve extends ze {
  // Zod schema for validation and serialization
  static schema = Dd;
  static computedProperties = Rd;
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
    return se.Extras;
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
    if (oi(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (Jt(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (Qt(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (Qt(this.planing) && Jt(this.finish) && e?.t) {
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
    return oi(this.banding) && (i += this.banding.getCost(e)), Jt(this.finish) && (i += this.finish.getCost(e)), Qt(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return oi(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Jt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Qt(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(oi(this.banding) && this.banding.hasValues() || Jt(this.finish) && this.finish.hasValues() || Qt(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    oi(this.banding) && this.banding.clear(), Jt(this.finish) && this.finish.clear(), Qt(this.planing) && this.planing.clear();
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
    e ? e instanceof Rt ? this.banding = e : this.banding = new Rt(e) : this.banding = void 0;
  }
  /**
   * Set finish
   */
  setFinish(e) {
    e ? e instanceof vt ? this.finish = e : this.finish = new vt(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof ui ? this.planing = e : this.planing = new ui(e) : this.planing = void 0;
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
    return new Ve(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new Ve();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new Ve(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(oi(this.banding) && this.banding.isApplicable(e) || Jt(this.finish) && this.finish.isApplicable(e) || Qt(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: oi(this.banding) && this.banding.hasValues() || !1,
      hasFinish: Jt(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: Qt(this.planing) && this.planing.hasValues() || !1,
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
    return s ? oi(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    return s ? Jt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    return s ? Qt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((a) => {
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
    return s ? fu(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return Ve.hasBanding(e);
        case "finish":
          return Ve.hasFinish(e);
        case "planing":
          return Ve.hasPlaning(e);
        case "imageUpload":
          return Ve.hasImageUpload(e);
      }
    return Ve.hasBanding(e) || Ve.hasFinish(e) || Ve.hasPlaning(e) || Ve.hasImageUpload(e);
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
    return Ve.hasBanding(e) && i.push("banding"), Ve.hasFinish(e) && i.push("finish"), Ve.hasPlaning(e) && i.push("planing"), Ve.hasImageUpload(e) && i.push("imageUpload"), i;
  }
}
const jd = B({
  id: b().optional(),
  url: b().optional(),
  size: d().optional(),
  mimeType: b().optional(),
  name: b().optional(),
  width: d().optional(),
  height: d().optional()
}), Vd = ys.extend({
  // ImageUpload specific properties
  images: ee(jd).default([]).describe("Array of uploaded images"),
  maxImages: d().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ee(b()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: d().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: b().optional().describe("Description of uploaded images"),
  tags: ee(b()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), Nd = {
  // Inherit computed properties from Extra base class
  ...gn,
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
class Tw extends ls {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = Vd;
  static computedProperties = Nd;
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
const Gd = {
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
}, qd = {
  cacheResults: !0
};
let Gr;
Gr = fr({}, Gd, qd);
let ht = Gr;
function zd() {
  if (ht.guillotine.secondPass && !ht.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (ht.captureProfile && ht.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
zd();
function Aw(t, e = null) {
  if (!t) return ht;
  const i = Wd(t, e);
  if (!i) return ht;
  const s = fr({}, ht, i);
  return console.log(`[CONFIG] custom config applied for ${t?.username}`), s;
}
function Wd(t, e = null) {
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
function Ow(t, e, i) {
  return Yc(t, e, i);
}
try {
  typeof Rn < "u" && Rn && (Rn.showDiff = !0);
} catch (t) {
  console.warn("Error accessing chaiConfig, skipping configuration:", t);
}
const Ao = hr("tests");
hr("timers");
let tt;
if (typeof go == "function")
  tt = go;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const t = new Proxy({}, { get: () => () => t });
  tt = () => t;
}
function Ct(t = [], e = null) {
  if (!t?.length) return;
  if (wt() && ht && ht.runTests)
    for (const s of t) {
      if (!s || typeof s != "function") {
        console.error("Invalid test function provided:", s);
        continue;
      }
      try {
        s();
      } catch (n) {
        const a = n instanceof Error ? n.message : String(n);
        if (e ? Ao(e, a) : Ao(a), ht && ht.throwErrorsOnFailedTests) throw n;
      }
    }
}
function Ys(t) {
  return t && typeof t == "object" && "area" in t;
}
const la = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, Ue = (t, e, i) => e in t ? t[e] : (console.warn(la.missingProperty(String(e), i)), null), Ts = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Di = (t, e) => {
  if (Ys(t) && Ys(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Et = (t, e) => {
  const i = Ue(t, "id", "first item"), s = Ue(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Gt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const o = Ue(i, n, "first item"), r = Ue(s, n, "second item");
      if (!(o === null || r === null) && o !== r)
        return a === "desc" ? o < r ? 1 : -1 : o < r ? -1 : 1;
    }
    return 0;
  };
}
function qr(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Hd(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Yt = {
  // Dimension-based sorts
  WDLD: Gt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Gt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Gt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Gt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Gt([["w", "desc"]]),
  LD: Gt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Ts(
    Gt([["l", "desc"]]),
    Et
  ),
  WDIDA: Ts(
    Gt([["w", "desc"]]),
    Et
  ),
  // Area-based sorts
  AD: (t, e) => -Di(t, e),
  AA: Di,
  AAID: Ts(
    Di,
    Et
  ),
  ADID: Ts(
    (t, e) => -Di(t, e),
    Et
  ),
  // ID sorts
  ID: Et,
  IDDesc: (t, e) => -Et(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Et(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Et(i, s);
    return n !== 0 ? n : -Di(t, e);
  },
  // Position sorts
  YX: Gt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Gt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = Ue(t, "placementOrder", "first item") ?? 0, s = Ue(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = Ue(t, "offcut", "first item"), s = Ue(e, "offcut", "second item"), n = Ue(t, "placementOrder", "first item") ?? 0, a = Ue(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = Ue(t, "offcut", "first item"), s = Ue(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Et(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Et(i, s);
    if (n !== 0) return n;
    const a = Ue(t, "offcut", "first item"), o = Ue(e, "offcut", "second item");
    if (a && !o) return 1;
    if (!a && o) return -1;
    const r = Ue(t, "placementOrder", "first item") ?? 0, l = Ue(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Et(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = Ue(t, "placementOrder", "first item") ?? 0, o = Ue(e, "placementOrder", "second item") ?? 0;
      return a - o;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = Ue(t, "placementOrder", "first item") ?? 0, s = Ue(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (Ys(t) && Ys(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(la.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(la.missingLongSide), 0) : i[t] === e[t] ? -Di(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: qr,
  getSmallest: Hd
};
function $w(t, e) {
  return Math.random() * (e - t) + t;
}
function Fw(t, e, i = "x") {
  if (!e) return !1;
  const s = i === "x" ? "l" : "w";
  return !!(ne.greaterThanOrEqualTo(t[i], e[i]) && ne.lessThanOrEqualTo(t[i] + t[s], e[i] + e[s]));
}
function Lw(t, e, i = "x") {
  if (!e) return !1;
  const s = Yd(i);
  return !!(ne.greaterThanOrEqualTo(t[i], e[i]) && ne.lessThan(t[i], e[i] + e[s]));
}
function Ew(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function Ud(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Oo(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
function Yd(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
const Kd = ju;
function Dw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function $o(t, e) {
  if (!Se(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function Rw(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(a) {
    if (s === !0) return a.added;
    if (s === !1) return !a.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((a) => n(a) && $o(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Mt(e) ? t[i]((a) => n(a) && $o(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && a.willItFit(e));
  }
  return t[i]((a) => n(a));
}
function Mw(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((r) => r.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, o = [];
  for (const r of s) {
    let l;
    if (Ke(r))
      l = r.parentId;
    else if (We(r))
      l = r.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const c = r.l <= r.w, u = c ? r.l : r.w, f = c ? r.w : r.l, g = u + "-" + f + "-" + r.orientationLock;
        if (a.has(g)) continue;
        a.set(g, !0);
      }
      o.push(r);
    }
  }
  return o;
}
function Zd(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], o = Dr(a, e.getStock), r = a.shortSide, l = a.longSide;
    o.forEach((c) => {
      if (!a.willItFit(e, c)) return;
      let u;
      !i || i === "l" ? u = c === 0 ? l : r : i === "w" && (u = c === 0 ? r : l), u && s.set(u, s.has(u) ? s.get(u) + 1 : 1);
    });
  }
  return s;
}
function _w(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const o = a.parentId;
    s.has(o) || s.set(o, a);
  }
  return Array.from(s.values());
}
function Bw(t, e = null) {
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
function jw(t, e, i) {
  const s = t.filter((a) => a[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((a, o, r) => r > 0 ? a + o[n] + i : a + o[n], 0);
}
function Xd(t, e) {
  const i = e === "x" ? "l" : "w", s = Kd(e);
  if (!t?.length) return null;
  const n = t.reduce((o, r) => o[e] + o[i] > r[e] + r[i] ? o : r);
  return t.filter((o) => o[e] === n[e] && o[i] === n[i]).sort((o, r) => o[s] - r[s])[0];
}
function Jd(t, e, i) {
  if (e.length <= 1) return t;
  const s = tf(e, i), n = t.reduce((r, l) => (r[l.id] = sf(l, s), r), {}), a = Math.min(...Object.values(n));
  return t.filter((r) => !r.added && n[r.id] === a);
}
function Qd(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function ef(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function Vw(t, e) {
  return Qd(t, e) < e.q;
}
function tf(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = ef(e, s)), i;
}
function sf(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function nf(t, e, i = !1) {
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
function Nw(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function af(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, o = e.x, r = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= o || // shape1 is completely to the left of shape2
  r <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  c <= n);
}
function Gw(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      af(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function qw(t) {
  t.sort(Yt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function zw(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
const zr = ee(b()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), of = fe(["l", "w"]).nullable().default(null), Wr = he([
  me("l"),
  me("w"),
  xt()
]).default(null), rf = B({
  stockId: b().optional(),
  material: b().optional(),
  thickness: d().optional(),
  grain: Ui.optional()
}).describe("Which stock(s) this shape is a match for "), lf = we(b(), xe()).default({});
zr.describe("IDs of stocks this shape is locked to");
const cf = Wr.describe("Direction that should face up");
B({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: cf
});
const uf = B({
  // Whether shape is in a user-defined group
  inUserGroup: R().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: R().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: d().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: ge("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // ID of group this was added as part of (preserved during serialization)
  addedAsGroup: b().default("").describe("ID of group this was added as part of")
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: ""
}).describe("Group metadata and reference"), ca = gs.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: uf,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: b().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Tr,
  // Whether this is a duplicate
  duplicate: R().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: of.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: ge("Extras", {
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
  machining: ge("Machining", {
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
}), Hr = {
  // Include all Placeable computed properties
  ...ms,
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
        return i.calculateLength(t.l, t.w);
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
ca.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Hr)
}));
class mn extends Ga {
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
  static schema = ca;
  static computedProperties = Hr;
  static defaults = ca.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return se.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new mn(e.data);
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
    nt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
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
const Ur = ["horizontal", "vertical"], Yr = ["auto", "user", "strip", "firstShape"], qa = fe(Ur).optional(), df = B({
  x: d(),
  y: d(),
  autoId: b().optional(),
  rot: Ma
}), ff = gs.extend({
  // Override quantity - always 1 for groups
  q: d().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: R().default(!0),
  // Group-specific fields
  shapes: Ee("Shape").default([]),
  direction: qa,
  container: he([
    ge("Segment"),
    ge("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ee(df).default([]),
  type: fe(Yr).default("auto"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: R().default(!1),
  collision: R().default(!1),
  counter: d().int().min(0).default(0),
  inputId: b().optional()
}), hf = {
  ...ms,
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
B({
  id: b(),
  x: d(),
  y: d(),
  shapes: Ee("Shape"),
  direction: fe(Ur),
  type: fe(Yr),
  container: he([
    ge("Segment"),
    ge("Stock")
  ]).optional()
});
class yn extends Ga {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ff;
  static computedProperties = hf;
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
    return this.type === "user" ? se.UserGroup : this.type === "strip" ? se.StripGroup : this.type === "firstShape" ? se.FirstShapeGroup : se.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!Ke(s) && !hu(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (Ke(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((o) => o.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new mn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new yn(i);
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
          s && (nt(s, i.rot, e) || console.error(`  ❌ FAILED to restore rotation for ${s.id} from ${s.rot} to ${i.rot}`));
        }
      if (this.positions && this.positions.length > 0)
        for (const i of this.positions) {
          const s = this.shapes.find((n) => n.autoId === i.autoId);
          s && s.rot !== i.rot && (console.warn(`[placeMyShapes] Shape ${s.id} has wrong rotation ${s.rot}, expected ${i.rot} - forcing rotation now`), nt(s, i.rot, e) || console.error(`[placeMyShapes] ❌ CRITICAL: Cannot fix rotation for ${s.id}`));
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
        if (s.x = this.x + n.x, s.y = this.y + n.y, !nt(s, n.rot, e)) throw new Error("placeMyShapes - unable to set rotation for shape in group");
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
        u && u.rot !== c && nt(u, c);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = Ud(this.direction), n = Oo(this.direction);
    let a = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = a === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), u = e.get(l.autoId) ?? l.rot.valueOf();
      let f;
      u !== l.rot ? f = n === "l" ? l.w : l.l : f = l[n];
      const g = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? g.x = i : g.y = i, this.positions.push(g), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? f : f + c, a++;
    }
    this.groupLength = i;
    const o = Ht(n), r = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let f;
        return u !== void 0 && u !== c.rot ? f = o === "l" ? c.w : c.l : f = c[o], f > l ? f : l;
      },
      0
    );
    if (this.groupWidth = r, wt()) {
      const l = this.shapes.slice(0, -1).reduce((f, g) => f + g.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, g) => f + g[n], 0) + l;
      Ct([
        () => tt(
          ne.equalTo(u, this.groupLength),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => tt(
          i,
          "currentPosition is incorrect in direction"
        ).to.equal(this.groupLength),
        () => tt(
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
    const e = Oo(this.direction), i = Ht(e);
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
function Ce(t, e) {
  return t._metadata = e, e.description ? t.describe(e.description) : t;
}
const pf = (t, e) => Ce(t, e), Kr = () => Ce(
  Ui,
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
), gf = () => Ce(
  Or,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), Jn = (t) => Ce(
  Wi(
    (e) => e === "" || e === null ? null : e,
    he([
      // Remove custom messages - let the error map handle translation with TOO_SMALL key
      t.allowZero ? d().min(0) : d().gt(0),
      b(),
      xt()
    ]).nullable().default(null)
    // Default to null for display purposes
  ),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), mf = () => Ce(
  d().min(0, { message: "Quantity should be greater than or equal to 0" }).int({ message: "Quantity must be a whole number" }).default(1),
  {
    label: "fields.q",
    placeholder: "fields.q",
    group: "general",
    step: 1
  }
), yf = (t) => Ce(
  b().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), bf = () => Ce(
  b().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), vf = () => Ce(
  he([
    d().min(0),
    b()
  ]).nullable().optional().transform((t) => {
    if (!(t === "" || t === null))
      return t;
  }),
  {
    label: "fields.cost",
    placeholder: "fields.cost",
    group: "pricing",
    step: 0.01,
    output: "number"
  }
), wf = () => Ce(
  b().max(500).optional().transform((t) => typeof t == "string" ? t.replace(/,/g, " ") : ""),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Sf = (t) => Ce(
  R().default(!1),
  t
), xf = (t, e) => Ce(
  fe(t),
  e
), ii = {
  field: Ce,
  boolean: Sf,
  enum: xf,
  custom: pf
}, kf = B({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: b().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: b().optional().describe("Reference marker for object recreation")
}), If = B({
  // ========== Selection State (excluded from compression) ==========
  selected: ii.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: ii.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: ii.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: ii.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Cf = Wi(
  (t) => {
    if (t == null)
      return { l1: 0, l2: 0, w1: 0, w2: 0 };
    if (typeof t == "object" && t !== null) {
      const e = t;
      return {
        l1: e.l1 === null ? 0 : e.l1,
        l2: e.l2 === null ? 0 : e.l2,
        w1: e.w1 === null ? 0 : e.w1,
        w2: e.w2 === null ? 0 : e.w2
      };
    }
    return t;
  },
  B({
    l1: Ce(
      he([d(), b()]).default(0),
      { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    l2: Ce(
      he([d(), b()]).default(0),
      { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    w1: Ce(
      he([d(), b()]).default(0),
      { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    w2: Ce(
      he([d(), b()]).default(0),
      { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
    )
  }).default({ l1: 0, l2: 0, w1: 0, w2: 0 })
), Pf = B({
  // ========== Identity ==========
  id: Pr,
  index: d().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: Jn({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: Jn({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: Jn({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: mf(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: yf(),
  material: bf(),
  // ========== Cost ==========
  cost: vf(),
  // ========== Trim Configuration ==========
  trim: Cf,
  // ========== Rotation (Runtime) ==========
  rot: Ma.default(0),
  // ========== Flags ==========
  preventAutoRotation: ii.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: ii.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: ii.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: wf()
}), Ks = B({
  ...kf.shape,
  // System properties from AutoSerializable
  ...Bt.shape,
  ...Pf.shape,
  // Core business fields
  ...If.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: b().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), za = {
  // Include validation computed properties (isValid)
  ...si,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = typeof t.l == "number" ? t.l : parseFloat(String(t.l)) || 0, i = typeof t.w == "number" ? t.w : parseFloat(String(t.w)) || 0;
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
      const e = typeof t.l == "number" ? t.l : parseFloat(String(t.l)) || 0, i = typeof t.w == "number" ? t.w : parseFloat(String(t.w)) || 0;
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
      const e = typeof t.l == "number" ? t.l : parseFloat(String(t.l)) || 0, i = typeof t.w == "number" ? t.w : parseFloat(String(t.w)) || 0;
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
function Tf(t, e, i) {
  if (i) {
    if (typeof t == "number")
      return isNaN(t) ? null : t;
    if (!t) return null;
    const s = Number(t);
    return isNaN(s) ? null : s;
  } else {
    const s = t ? K({ v: t, nf: e }) : null;
    if (typeof s == "string") {
      const n = Number(s);
      return isNaN(n) ? null : n;
    }
    return s;
  }
}
function Af(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(Ci.map((r) => [r, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t) return n;
  const o = t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t) ? {
    l1: t.x1 ?? t.l1 ?? 0,
    l2: t.x2 ?? t.l2 ?? 0,
    w1: t.y1 ?? t.w1 ?? 0,
    w2: t.y2 ?? t.w2 ?? 0
  } : t;
  return i ? Object.keys(n).forEach((r) => {
    n[r] = o[r] ?? 0;
  }) : Object.keys(n).forEach((r) => {
    const l = o[r];
    l != null && (n[r] = K({ v: l, nf: e }));
  }), n;
}
const Of = ["efficiency", "guillotine", "beam", "none"], ua = ["l", "w", "flex", "none"], $f = ["efficiency", "time"], Ff = ["l", "w"], Zr = ["efficiency", "smallest"], Lf = ["dimensions", "identical", "none"], Zs = ["sheet", "linear", "roll"], bn = he([
  d().int().positive(),
  xt(),
  Kc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), vn = fe(Of).nullable().optional().transform((t) => t === null ? void 0 : t), wn = fe(ua).nullable().optional().transform((t) => t === null ? void 0 : t), Wa = fe(Zr).default("efficiency").describe("Method for selecting stocks"), Ha = fe(Lf).default("identical").describe("How to stack identical parts"), Sn = B({
  strategy: fe($f).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: R().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Ua = B({
  primaryCompression: fe(Ff).default("w")
}).default({
  primaryCompression: "w"
});
B({
  stockType: un,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: bn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: vn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: wn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: Sn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Ua,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Wa,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Ha
});
const Ya = d().min(0).default(0), Ka = d().min(0).default(0), Xs = d().min(0).default(0), Ef = B({
  dimension: Ka,
  minSpacing: Xs
});
function da(t) {
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
function fa(t, e) {
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
const Df = Ce(
  vn,
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
), Rf = Ce(
  wn,
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
), Mf = Ce(
  Wa,
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
), _f = Ce(
  Ha,
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
), Bf = Ce(
  Sn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), jf = Ce(
  Ua,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), cs = B({
  ...Bt.shape,
  // ========== Stock Type ==========
  stockType: Ce(
    fe([...Zs]).default("sheet"),
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
  bladeWidth: Ce(
    he([
      Ya,
      b().default("0")
    ]),
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
  stackHeight: Ce(
    bn,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Df,
  cutPreference: Rf,
  // ========== Guillotine Options ==========
  guillotineOptions: Bf,
  // ========== Efficiency Options ==========
  efficiencyOptions: jf,
  // ========== General Options ==========
  options: B({
    stockSelection: Mf,
    minSpacing: he([
      b(),
      Xs
    ]),
    stackingMode: _f,
    minSpacingDimension: B({
      dimension: he([
        b(),
        Ka,
        xt()
      ]).optional(),
      minSpacing: he([
        b(),
        Xs,
        xt()
      ]).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Vf = {
  // Include validation computed properties (isValid)
  ...si,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => da(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => fa(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, os = Ks.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: Kr(),
  // Add orientationLock with input-specific transform
  orientationLock: gf(),
  // ========== Shared Shape Properties ==========
  upDirection: Ce(
    Wr,
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
  stockLock: Ce(
    zr,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: rf.nullable().optional(),
  // ========== Custom Data ==========
  customData: Ce(
    lf,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: Ce(
    xe().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: ge("Machining", {
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
  extras: ge("Extras", {
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
}), Nf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...za,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, xi = B({
  ...Ks.shape,
  ...$r.shape,
  // ========== Stock-specific Properties ==========
  // Add grain field for stock
  grain: Kr(),
  preventGrainRotation: ii.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: ii.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: Ce(
    Ar,
    {
      label: "fields.color",
      description: 'Material color ({ hex: "#FF5733", name: "Red" } or legacy string)',
      group: "display",
      order: 1
    }
  ),
  weight: Ce(
    d().positive().optional(),
    {
      label: "fields.weight",
      description: "Weight in kg",
      group: "display",
      order: 2
    }
  ),
  imageUrl: Ce(
    b().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: Ce(
    ee(b()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  // Saw configuration (excluded from compression)
  saw: Ce(
    xe().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" })
}), Gf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...za
  // InputStock doesn't define additional computed properties
}, Za = Bt.extend({
  // ========== Identification ==========
  id: b().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ee(b()).default([]).describe("List of shape IDs in this group"),
  shapes: ee(b()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: qa,
  // 'horizontal' | 'vertical'
  q: d().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: R().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: b().optional().describe("Group name"),
  material: b().optional().describe("Material type"),
  grain: Ui.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: B({
    stockId: b().optional(),
    material: b().optional(),
    thickness: d().optional(),
    grain: Ui.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ee(xe()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), qf = {
  // Include validation computed properties (isValid)
  ...si
  // InputUserGroup doesn't define additional computed properties
};
B({
  parts: ee(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: qa,
  q: d().int().min(1).describe("Quantity of groups")
});
function Js() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Bi(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ki(t) {
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
function Fo(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Ki(i.error);
}
const Xr = {
  clearValidation: Js,
  addIssue: Bi,
  validateWithSchema: Fo,
  zodErrorsToIssues: Ki,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return Js.call(this), e.skipSchemaValidation || Fo(t, this).forEach((s) => Bi.call(this, s)), this.issues || [];
  }
};
class Jr extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ks;
  static computedProperties = za;
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
    const s = { ...e }, n = !!s.skipValidation, a = ["l", "w", "t", "cost"];
    for (const o of a)
      s[o] === null || s[o] === void 0 ? delete s[o] : s[o] !== void 0 && (s[o] = Tf(s[o], i, n), s[o] === null && delete s[o]);
    s.name?.length ? s.name = bu(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Af(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return se.InputRectangle;
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
    return Js.call(this), e?.skipSchemaValidation || Xr.runValidation.call(
      this,
      Ks,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = typeof this.l == "number" ? this.l : parseFloat(String(this.l)) || 0, i = typeof this.w == "number" ? this.w : parseFloat(String(this.w)) || 0, s = e > i ? e : i, n = e < i ? e : i, a = {
      l: K({ v: s }),
      w: K({ v: n })
    }, o = typeof this.trim.l1 == "number" ? this.trim.l1 : parseFloat(String(this.trim.l1)) || 0, r = typeof this.trim.l2 == "number" ? this.trim.l2 : parseFloat(String(this.trim.l2)) || 0, l = typeof this.trim.w1 == "number" ? this.trim.w1 : parseFloat(String(this.trim.w1)) || 0, c = typeof this.trim.w2 == "number" ? this.trim.w2 : parseFloat(String(this.trim.w2)) || 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: a.l - (K({ v: o }) + K({ v: r })),
      w: a.w - (K({ v: l }) + K({ v: c }))
    };
  }
}
const ha = Bt.extend({
  // Core properties from shared schema
  stockType: un,
  stackHeight: bn.describe("Maximum stack height"),
  cutType: vn,
  cutPreference: wn,
  // Blade width (numeric for runtime)
  bladeWidth: Ya.describe("Blade width"),
  // Guillotine options
  guillotineOptions: Sn,
  // Efficiency options
  efficiencyOptions: Ua,
  // General options (nested stockSelection and stackingMode)
  options: B({
    stockSelection: Wa,
    minSpacing: Xs,
    stackingMode: Ha,
    minSpacingDimension: Ef
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), zf = {
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
ha.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
class Qr extends ze {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = ha;
  static computedProperties = zf;
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
  static defaults = ha.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0);
  }
  /**
   * Get entity type
   */
  getType() {
    return se.Saw;
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
function Xa(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, a] of Object.entries(e)) {
    const o = t[n];
    switch (a.type) {
      case "number":
        o != null ? s[n] = typeof o == "string" ? K({ v: o, nf: i }) : o : o === null && (s[n] = null);
        break;
      case "trim":
        if (o) {
          const r = {};
          for (const [l, c] of Object.entries(o))
            r[l] = typeof c == "string" ? K({ v: c, nf: i }) : c;
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
const Wf = {
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
}, Hf = {
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
}, Uf = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? K({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? K({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? K({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
class el extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = cs;
  static computedProperties = Vf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = da(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = fa(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("flex") ? "flex" : s[0]);
  }
  /**
   * Get entity type
   */
  getType() {
    return se.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (Js.call(this), e?.skipSchemaValidation || Xr.runValidation.call(
      this,
      cs,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = typeof this.bladeWidth == "string" ? parseFloat(this.bladeWidth) : this.bladeWidth;
        isNaN(i) || i < 0 ? Bi.call(this, new ie({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Bi.call(this, new ie({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Bi.call(this, new ie({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Bi.call(this, new ie({
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
    const n = da(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, o = s !== this.cutType;
    if (a || o) {
      const r = fa(this.stockType, this.cutType);
      this.cutPreference && !r.includes(this.cutPreference) ? r.length > 0 ? this.cutPreference = r.includes("flex") ? "flex" : r[0] : this.cutPreference = void 0 : !this.cutPreference && r.length > 0 && (this.cutPreference = r.includes("flex") ? "flex" : r[0]);
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
    const e = this.toData(), i = Xa(
      e,
      Uf
    );
    return new Qr(i);
  }
}
const tl = At, Lo = ft;
Ci.map((t) => `side.${t}`), Lo.map((t) => `face.${t}`), Lo.map((t) => `face.${t}`), tl.map((t) => `side.${t}`);
const il = ["radius", "bevel"], Yf = Bt.extend({
  // Corner type
  type: fe(il).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Kf = {
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
class qi extends ze {
  // Zod schema for validation and serialization
  static schema = Yf;
  static computedProperties = Kf;
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
    return new qi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new qi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new qi({ type: "bevel", size: e, index: i });
  }
}
const sl = ["l1", "l2", "w1", "w2"], Zf = Bt.extend({
  // Position
  position: d().min(0).default(0).describe("Position along the side"),
  side: fe(sl).describe("Side where hinge is placed"),
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
}), Xf = {
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
}, Jf = ["regular", "hinge", "shelf"], Qf = Bt.extend({
  // Position
  x: d().min(0).default(0).describe("X position from left edge"),
  y: d().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: d().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: d().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: d().default(0).describe("Face index (0=front, 1=back)"),
  type: fe(Jf).default("regular").describe("Type of hole")
}), eh = {
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
class Wt extends ze {
  // Zod schema for validation and serialization
  static schema = Qf;
  static computedProperties = eh;
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
    return new Wt({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Wt(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class Qs extends ze {
  // Zod schema for validation and serialization
  static schema = Zf;
  static computedProperties = Xf;
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
    return this.generateHoles(i, s).map((a) => new Wt(a));
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
      s.push(new Wt({
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
    return new Qs(e);
  }
}
const th = Bt.extend({
  // Collections of machining operations
  holes: Ee("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: Ee("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: Ee("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: R().default(!0).describe("Whether machining is enabled")
}), ih = {
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
let sh = class pa extends ze {
  // Zod schema for validation and serialization
  static schema = th;
  static computedProperties = ih;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return se.Machining;
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
    this.holes.push(e instanceof Wt ? e : new Wt(e)), this.validate();
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
    this.hingeHoles.push(e instanceof Qs ? e : new Qs(e)), this.validate();
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
    const i = e instanceof qi ? e : new qi(e);
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
        i.push(a instanceof Wt ? a : new Wt(a));
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
    return new pa();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new pa(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Wt(n));
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
const nh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Mr(t, "orientationLock", ["l", "w"], e, i, s), s;
}, ah = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Mr(t, "grain", ["l", "w"], e, i, s), s;
}, oh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = _e(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ie({
    item: t,
    message: _t("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, rh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = _e(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new ie({
      item: t,
      message: _t("errors.validation.must_be_object", {
        0: Ut.customData
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
        message: _t("errors.validation.must_be_string_number_boolean", {
          0: Ut.customData
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
}, lh = ({ item: t, index: e }) => {
  const i = _e(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, ch = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "x");
  return o === null || o === "" || o === void 0 || i != null && K({ v: o }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: qe("x", { returnKey: !0 }),
      // positional (legacy)
      field: qe("x", { returnKey: !0 }),
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
}, uh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "y");
  return o === null || o === "" || o === void 0 || i != null && K({ v: o }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: qe("y", { returnKey: !0 }),
      // positional (legacy)
      field: qe("y", { returnKey: !0 }),
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
}, dh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "l");
  return (o === null || o === "" || o === void 0) && new ie({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: qe("l", { returnKey: !0 }),
      // positional (legacy)
      field: qe("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, fh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "w");
  return (o === null || o === "" || o === void 0) && new ie({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: qe("w", { returnKey: !0 }),
      // positional (legacy)
      field: qe("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: a,
    category: n
  }), a;
}, hh = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
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
}, ph = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = _e(t, "q"), o = _e(t, "autoAdd");
  return a == null || o === !0, n;
}, gh = ({
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
}, mh = ({
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
      message: _t("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: a,
      category: n
    });
  }), a;
}, yh = ({
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
    ne.equalTo(f, l) || new ie({
      item: t,
      message: _t("errors.groups.dimension_not_correct", {
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
}, bh = ({
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
    message: _t("errors.groups.not_enough_of_part", {
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
function vh(t) {
  return be(t) || Ke(t) || ps(t);
}
function wh(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function Sh(t, e, i) {
  return i ? !Se(t.t) || !Se(e.t) ? !1 : Ke(t) ? ne.equalTo(K({ v: t.t }), K({ v: e.t })) : t.t === e.t : !0;
}
function xh(t, e, i) {
  return i?.stockType !== "linear" || !Ke(t) && !be(t) ? !0 : St(t, 0, e) && ne.equalTo(K({ v: t.w }), K({ v: e.w })) || St(t, 1, e) && ne.equalTo(K({ v: t.l }), K({ v: e.w }));
}
function kh(t, e, i, s = 0) {
  const n = be(t[0]), a = i.stockType;
  if (t.some((C) => Se(C.stockLock) && C.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((C) => n || C.autoAdd === !0 || Se(C.q) && C.q > 0);
  const r = e.some((C) => Se(C.material)), l = e.some((C) => Se(C.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), m = [];
  let I = s;
  for (const C of t) {
    const A = e.map((j, D) => {
      const F = vh(C) && Yi(C, j, void 0, i), W = wh(C, j, r), V = Sh(C, j, l), y = xh(C, j, i);
      return {
        stockItem: j,
        stockIndex: D,
        fit: F,
        material: W,
        thickness: V,
        width: y,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: F && W && V && (a !== "linear" || y)
      };
    });
    C.stockMatch = {
      fit: A.some((j) => j.fit),
      material: !r || A.some((j) => j.material),
      thickness: !l || A.some((j) => j.thickness),
      width: a !== "linear" || A.some((j) => j.width)
    };
    const $ = A.filter((j) => j.satisfiesAll), x = $.length > 0;
    if (!n && x) {
      const j = $.map((D) => D.stockItem.parentId);
      C.stockLock = j, j.forEach((D) => c.add(D));
    }
    C.stockMatch.fit ? x || (r && !C.stockMatch.material && (g.add(C), m.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["material"]],
      index: [I],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !C.stockMatch.thickness && (g.add(C), m.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["t"]],
      index: [I],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !C.stockMatch.width && (f.add(C), m.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["w"]],
      index: [I],
      message: "errors.validation.no_matching_stock_width"
    }))), C.stockMatch.material && C.stockMatch.thickness && (a !== "linear" || C.stockMatch.width) && (g.add(C), m.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["material"], ["t"]],
      index: [I],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(C), m.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["l"], ["w"]],
      index: [I],
      message: "errors.validation.will_not_fit"
    }))), I++;
  }
  t.forEach((C) => C.stockMatch = null);
  let L, E;
  return n ? (L = t.filter((C) => u.has(C) || f.has(C) || g.has(C)).sort(Yt.ID), E = []) : (L = t.filter((C) => u.has(C) || f.has(C) || g.has(C) || !C.stockLock || !C.stockLock.length).sort(Yt.ID), E = e.filter((C) => !c.has(C.parentId)).sort(Yt.ID), e = e.filter((C) => Mt(C)).filter((C) => c.has(C.parentId)), t = t.filter((C) => !u.has(C) && !f.has(C) && !g.has(C) && C?.stockLock?.length)), {
    stockList: e,
    unusableStock: E,
    shapeList: t,
    unusableShapes: L,
    newIssues: m
  };
}
function Ih(t) {
  return t?.issues?.length > 0;
}
const Ch = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], o = i.stockType, r = _e(t, "q"), l = _e(t, "l"), c = _e(t, "w");
  return !r || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, o), Ih(t)) || kh([t], e, i, n).newIssues.forEach((f) => {
    a.push(f);
  }), a;
}, Ph = ({
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
    const r = K({ v: e }), l = K({ v: a }), c = K({ v: o }), u = l - r * 2, f = c - r * 2;
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
}, Th = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], a = _e(t, "l"), o = _e(t, "w"), r = _e(t, "trim");
  if (!a || !o || !r) return n;
  if ((!Mt(t) || Mt(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
    try {
      const c = K({ v: a }), u = K({ v: o }), f = (L) => {
        if (L == null) return 0;
        if (typeof L == "number" || typeof L == "string")
          try {
            return K({ v: L }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, g = {
        w1: f(_e(r, "w1")),
        w2: f(_e(r, "w2")),
        l1: f(_e(r, "l1")),
        l2: f(_e(r, "l2"))
      }, m = g.w1 + g.w2, I = g.l1 + g.l2;
      m >= c && new ie({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${qe("w1").toUpperCase()} + ${qe("w2").toUpperCase()}`,
          // positional (legacy)
          1: qe("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${qe("l1", { returnKey: !0 })} + ${qe("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: qe("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), I >= u && new ie({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${qe("l1").toUpperCase()} + ${qe("l2").toUpperCase()}`,
          // positional (legacy)
          1: qe("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${qe("l1", { returnKey: !0 })} + ${qe("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: qe("w", { returnKey: !0 }),
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
}, rt = {
  // Dimensions
  x: ch,
  y: uh,
  l: dh,
  w: fh,
  t: hh,
  q: ph,
  // Trim
  trim: Th,
  partTrim: Ph,
  // Custom
  customData: rh,
  banding: oh,
  orientationLock: nh,
  grain: ah,
  machining: lh,
  // Stock
  stockMatch: Ch,
  // Groups
  groupShapeCount: gh,
  groupOrientationLock: mh,
  groupDimensions: yh,
  groupQuantity: bh
};
class Ah extends Jr {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return os;
  }
  static get computedProperties() {
    return Nf;
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
    this.extras || (this.extras = new Ve()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new Ve()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new Ve()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new Ve()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new sh({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new Ve()
    };
    super(s, i);
  }
  /**
   * Get entity type
   */
  getType() {
    return se.InputShape;
  }
  /**
    * Apply part trim
    */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = K({ v: e }), this.trim) {
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
      for (let g = this.issues.length - 1; g >= 0; g--)
        this.issues[g].field.some((m) => l.includes(m[0])) && this.issues.splice(g, 1);
      for (let g = this.warnings.length - 1; g >= 0; g--)
        this.warnings[g].field.some((m) => l.includes(m[0])) && this.warnings.splice(g, 1);
      const c = e.fields.reduce((g, m) => (g[m] = !0, g), {}), f = os.pick(c).safeParse(this.toData());
      if (!f.success) {
        const g = Ki(f.error);
        this.issues.push(...g);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = os.safeParse(this.toData());
      if (!l.success) {
        const c = Ki(l.error);
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
    o("l") && rt.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("w") && rt.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("t") && rt.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), o("q") && rt.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("trim") && rt.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, o("customData") && rt.customData({
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
    const i = Xa(
      this.toData(),
      Wf,
      e
    );
    return new mn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          tl.map((i) => [i, !1])
        );
        break;
    }
  }
}
const Oh = B({
  // Internal-only fields (not exposed in API)
  fitsAll: R().default(!1),
  fitsAny: R().default(!1),
  largestShape: xe().nullable(),
  smallestShape: xe().nullable(),
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
}), $h = B({
  stock: ge("Stock", { nullable: !0 }).optional(),
  number: d().int().min(1).optional()
}), ga = B({
  ...dn.shape,
  ...$r.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: d().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: d().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: Oh.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: R().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: b().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: ge("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: xe().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: $h.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: R().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: fe(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: R().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: R().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: b().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Ar.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: d().positive().optional().describe("Weight in kg"),
  imageUrl: b().url().optional().describe("Image URL for stock display")
}), nl = {
  // Include all Container computed properties
  ...fn,
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
ga.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(nl)
}));
class en extends pn {
  static schema = ga;
  static computedProperties = nl;
  static defaults = ga.parse({});
  constructor(e = {}) {
    const i = en.preprocessData(e);
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
    return se.Stock;
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
      const n = rt.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = rt.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new en(i);
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
    const s = Xd(e.filter((a) => a.added && a.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ne.equalTo(n, this.l) ? n : n + i;
  }
}
class Ww extends Jr {
  // Required: Define schema and computed properties for SchemaClass
  static schema = xi;
  static computedProperties = Gf;
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
    return se.InputStock;
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
      for (let g = this.issues.length - 1; g >= 0; g--)
        this.issues[g].field.some((I) => c.includes(I[0])) && this.issues.splice(g, 1);
      for (let g = this.warnings.length - 1; g >= 0; g--)
        this.warnings[g].field.some((I) => c.includes(I[0])) && this.warnings.splice(g, 1);
      const u = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", u);
      const f = e.fields.reduce((g, m) => (g[m] = !0, g), {});
      try {
        const g = xi.pick(f);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(f));
        const m = g.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", m.success ? "SUCCESS" : "FAILED"), m.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", m.error.issues);
          const I = Ki(m.error);
          this.issues = [...this.issues, ...I];
        }
      } catch (g) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, g);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = xi.safeParse(this.toData());
      if (!c.success) {
        const u = Ki(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, o = (c) => !a || a.includes(c);
    ["l", "w", "t"].forEach((c) => {
      o(c) && rt[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), o("grain") && rt.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("trim") && rt.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("q") && rt.q({
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
    const a = Xa(
      s,
      Hf,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new en(a);
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
class Hw extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Za;
  static computedProperties = qf;
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
    return se.Group;
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
    this.clearValidation(), e.q !== void 0 && rt.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = rt.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = rt.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const o = this.joinDimension, r = rt.groupDimensions({
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
        const a = e.find((o) => !!(o.autoId === n || be(o) && o.autoId === n || "id" in o && o.id === n));
        a && (be(a) || Ke(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ie({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((a) => !!(a.autoId === s || String(a.autoId) === String(s) || "id" in a && (a.id === s || String(a.id) === String(s)) || be(a) && (a.autoId === s || String(a.autoId) === String(s))));
      n && (be(n) || Ke(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || be(n) && n.autoId === i);
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
      const g = s.filter((I) => be(I) || Ke(I)), m = this.validateWithShapes(g);
      if (m.filter((I) => I.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${m[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const o = a.map((g) => be(g) ? g.toShape() : g), r = o[0];
    o.forEach((g) => {
      if (s && Array.isArray(s)) {
        const m = s.findIndex((I) => "group" in I && I.group?.inUserGroup ? !1 : "parentId" in I && "parentId" in g && I.parentId === g.parentId || "id" in I && "id" in g && I.id === g.id);
        m !== -1 && s.splice(m, 1);
      }
      if ("setRotationToOrientationLockWithoutContainer" in g && typeof g.setRotationToOrientationLockWithoutContainer == "function")
        g.setRotationToOrientationLockWithoutContainer();
      else if ("orientationLock" in g && g.orientationLock) {
        const m = g.orientationLock;
        try {
          m === "l" && "rot" in g ? g.rot = 0 : m === "w" && "rot" in g && (g.rot = 1);
        } catch {
        }
      }
      "group" in g && g.group && (g.group.inUserGroup = !0);
    });
    let l = 0, c = 0;
    this.direction === "horizontal" ? (c = r.w, o.forEach((g) => l += g.l)) : (l = r.l, o.forEach((g) => c += g.w));
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
    }, f = new yn(u);
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
const Ms = B({
  min: he([b(), d()]).optional(),
  max: he([b(), d()]).optional()
});
we(b(), Ms);
B({
  holes: we(b(), Ms),
  hingeHoles: we(b(), Ms),
  corners: we(b(), Ms)
});
B({
  numberFormat: xe().optional(),
  // NumberFormat type
  decimalPlaces: d().optional(),
  fractionRoundTo: d().optional(),
  faces: B({
    enabled: R()
  }).optional(),
  holes: B({
    enabled: R(),
    defaultDiameter: d().optional(),
    diameters: ee(d()).optional(),
    minDiameter: d().optional(),
    maxDiameter: d().optional(),
    enableDepth: R().optional(),
    depths: ee(d()).optional(),
    defaultDepth: d().optional(),
    minDepth: d().optional(),
    maxDepth: d().optional()
  }).optional(),
  hingeHoles: B({
    enabled: R(),
    minimumHoleDistance: d().optional(),
    defaultDistanceFromEdge: d().optional(),
    defaultOuterSpacing: d().optional(),
    defaultHingeLength: d().optional()
  }).optional(),
  shelfHoles: B({
    enabled: R(),
    diameters: ee(d()).optional(),
    depths: ee(d()).optional()
  }).optional(),
  corners: B({
    enabled: R(),
    minValue: d().optional(),
    maxValue: d().optional(),
    types: ee(fe(["bevel", "radius"])).optional(),
    enableBanding: R().optional()
  }).optional(),
  banding: B({
    enabled: R(),
    labels: ee(b()).optional(),
    options: xe().optional(),
    // ExtrasOptions
    pricing: we(b(), d()).optional(),
    enableCorners: R().optional(),
    enableTypes: R().optional(),
    types: ee(b()).optional()
  }).optional()
});
const Fh = B({
  id: b(),
  x: d(),
  y: d(),
  diameter: d(),
  depth: d(),
  face: he([me(0), me(1)]),
  type: b().nullable().optional(),
  valid: R().optional()
}), Lh = B({
  id: b(),
  position: d(),
  side: fe(sl),
  face: he([me(0), me(1)]),
  numHoles: d(),
  diameter: d(),
  depth: d(),
  hingeLength: d(),
  distanceFromEdge: d(),
  outerSpacing: d(),
  minimumHoleDistance: d().optional(),
  positionLimit: d().optional(),
  valid: R().optional()
}), Eh = B({
  type: fe(il).nullable(),
  size: d(),
  valid: R().optional()
});
B({
  holes: ee(Fh).optional(),
  hingeHoles: ee(Lh).optional(),
  corners: we(b(), Eh).optional()
});
B({});
const Dh = ["l", "w"], Rh = gs.extend({
  // Identity - offcuts need IDs for tracking and export
  id: b().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: R().default(!1),
  flex: fe(Dh).optional(),
  // Cost is calculated, not set
  cost: d().min(0).nullable().default(0)
}), Mh = {
  ...ms,
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
class al extends Ga {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Rh;
  static computedProperties = Mh;
  constructor(e = {}) {
    const i = { ...e, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return se.Offcut;
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
    return new al({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
const _h = B({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: he([
    Zc(b(), ge("Point")),
    we(b(), ge("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), Bh = {
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
class ni extends ze {
  // Required: Define schema and computed properties for SchemaClass
  static schema = _h;
  static computedProperties = Bh;
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
    return se.PointCollection;
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
const ol = ["root", "firstShape", "near", "far", ""], jh = dn.extend({
  // Cutting information
  cuts: Ee("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: ge("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: d().int().min(0).nullable().default(null),
  cutDirection: fe(_a).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: R().default(!1),
  firstShape: ge("Shape"),
  children: Ee("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: ge("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: fe(ol).nullable().default(null),
  placementOrder: d().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: R().default(!1),
  hasHeadCut: R().default(!1),
  isInitial: R().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: R().default(!1),
  // Visualization flags
  completed: R().optional(),
  rowSegment: R().optional()
});
B({
  x: d().optional(),
  y: d().optional(),
  l: d().optional(),
  w: d().optional(),
  type: fe(ol),
  parent: xe(),
  // Segment instance
  stock: xe(),
  // Stock instance
  offcut: R().optional(),
  merged: R().optional(),
  cutDirection: fe(_a).nullable().optional()
});
const Vh = {
  ...fn,
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
class Uw extends pn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = jh;
  static computedProperties = Vh;
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
    return se.Segment;
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
        wt() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${i.autoId} to ${this.autoId}`);
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
function rl(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function _s(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function Nh(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function ma(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => ma(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Nh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = ma(i[s], e));
  return i;
}
function ll(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? t : t.map((r) => ll(r, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === se.Rectangle || s === se.Placeable || s === se.Container || s === se.Shape || s === se.Group || s === se.Offcut || s === se.Stock || s === se.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = ln();
  if (n && a.has(n)) {
    const o = a.get(n), { __ref: r, __entityType: l, __context: c, ...u } = t, f = new o(u);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((g) => g instanceof ie ? g : ie.fromData(g, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((g) => g instanceof ie ? g : ie.fromData(g, f))), f;
  }
  return delete t.__context, t;
}
function bi(t, e) {
  if (e || (e = rl()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const o = bi(a, e);
      n.push(o), o && typeof o == "object" && (o.autoId || o.id) && _s(e, [o]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && _s(e, [t]), t;
  const i = ma(t, e), s = ll(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && _s(e, [s]), s;
}
function Yw(t, e) {
  const i = rl(e), s = t?.saw ? bi(t.saw, i) : void 0;
  s && _s(i, [s]);
  const n = t?.stockList ? bi(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const a = t?.shapeList ? bi(t.shapeList, i) : [];
  a.length > 0 && (i.shapeList = a);
  const o = t?.cutList ? bi(t.cutList, i) : [], r = t?.segmentList ? bi(t.segmentList, i) : [];
  r.length > 0 && (i.segmentList = r);
  const l = t?.offcuts ? bi(t.offcuts, i) : [];
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
function Kw(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => Gh(n, e, i)).filter((n) => We(n)) : [] : [];
}
function Gh(t, e, i) {
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
    const n = ln(), a = n.get("Group") || n.get(se.Group);
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
function Zw(t, e) {
  wt() && (t.stocks && t.stocks.forEach((i, s) => {
    Mt(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !Ke(i) && !We(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    Vi(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    We(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    zt(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
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
const ji = pt("logs"), ya = pt("cuts"), tn = pt("groups"), sn = pt("guillotine"), ba = pt("results"), va = pt("scoring"), wa = pt("firstShapes"), Sa = pt("calculations"), xa = pt("subset"), ka = pt("secondRun"), Ia = pt("stack"), nn = pt("errors"), Ca = pt("allStock"), an = pt("reset");
nn.color = 1;
tn.color = 14;
sn.color = 159;
an.color = 11;
function qh(t = "info", e, i) {
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
      ji(a);
      break;
    case "guillotine":
      sn(a);
      break;
    case "results":
      ba(a);
      break;
    case "secondRun":
      ka(a);
      break;
    case "cuts":
      ya(a);
      break;
    case "scoring":
      va(a);
      break;
    case "calculations":
      Sa(a);
      break;
    case "stack":
      Ia(a);
      break;
    case "subset":
      xa(a);
      break;
    case "errors":
      nn(a);
      break;
    case "allStock":
      Ca(a);
      break;
    case "firstShapes":
      wa(a);
      break;
    case "groups":
      tn(a);
      break;
    case "reset":
      an(a);
      break;
    default:
      ji(a);
  }
  console.table = n;
}
const zh = "\x1B[31m", Wh = "\x1B[0m", ti = (t = "info", e, i = null, s = null, n = !1) => {
  if (n) {
    switch (t) {
      case "info":
        ji(e);
        break;
      case "guillotine":
        sn(e);
        break;
      case "results":
        ba(e);
        break;
      case "secondRun":
        ka(e);
        break;
      case "cuts":
        ya(e);
        break;
      case "scoring":
        va(e);
        break;
      case "calculations":
        Sa(e);
        break;
      case "stack":
        Ia(e);
        break;
      case "subset":
        xa(e);
        break;
      case "errors":
        nn(`${zh}${e}${Wh}`);
        break;
      case "allStock":
        Ca(e);
        break;
      case "firstShapes":
        wa(e);
        break;
      case "groups":
        tn(e);
        break;
      case "reset":
        an(e);
        break;
      default:
        ji(e);
    }
    if (i)
      switch (t) {
        case "info":
          ji(i);
          break;
        case "guillotine":
          sn(i);
          break;
        case "results":
          ba(i);
          break;
        case "secondRun":
          ka(i);
          break;
        case "cuts":
          ya(i);
          break;
        case "scoring":
          va(i);
          break;
        case "calculations":
          Sa(i);
          break;
        case "stack":
          Ia(i);
          break;
        case "subset":
          xa(i);
          break;
        case "errors":
          nn(i);
          break;
        case "allStock":
          Ca(i);
          break;
        case "firstShapes":
          wa(i);
          break;
        case "groups":
          tn(i);
          break;
        case "reset":
          an(i);
          break;
        default:
          ji(i);
      }
    s && qh(t, s);
  }
};
function Xw(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((a) => a.added);
  for (const a of i) {
    let o = !1, r = !1;
    if (t.dimension === "l" ? (o = ne.greaterThan(t.x2, a.x) && ne.lessThan(t.x1, a.x + a.l), r = ne.greaterThan(t.y1 + n, a.y) && ne.lessThan(t.y1 - n, a.y + a.w)) : t.dimension === "w" && (o = ne.greaterThan(t.x1 + n, a.x) && ne.lessThan(t.x1 - n, a.x + a.l), r = ne.greaterThan(t.y2, a.y) && ne.lessThan(t.y1, a.y + a.w)), o && r)
      if (s) t.shapeCollisions.push(a);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function ri(t, e, i, s, n = null, a = null) {
  return new vi({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function Hh(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = ri(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = ri(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = ri(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = ri(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = ri(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = ri(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = ri(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = ri(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function Pa(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      Uh(
        s,
        e
      );
    }
}
function Uh(t, e) {
  if (!t.isSquare) {
    if (t.shortSide === e.w && t.rot) {
      if (!nt(
        t,
        0,
        e
      ))
        throw new Error(
          "could not rotate shape correctly for subset calculation"
        );
    } else if (!e.isSquare && t.longSide === e.w && !t.rot && !nt(
      t,
      1,
      e
    ))
      throw new Error(
        "could not rotate shape correctly for subset calculation"
      );
  }
}
function Jw(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), Pa(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let o = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (o = 1), i === "l" ? e.sort(
    Yt.LD
  ) : e.sort(
    Yt.WD
  ), s || (s = e[0]);
  function r(u, f = !0) {
    f && Yt.shuffle(
      e
    );
    const g = Ta(
      n,
      e,
      t.getStock,
      i,
      t[i],
      !1,
      s
    );
    g !== !1 && u.push(
      g
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
function Yh(t, e, i, s = "l", n, a = !1, o = this.config.subset.shuffles, r = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (I, L) => L[s] - I[s],
    // Largest first
    (I, L) => I[s] - L[s],
    // Smallest first
    (I, L) => L[s] / L.area - I[s] / I.area,
    // Best dimension-to-area ratio
    (I, L) => L.area - I.area,
    // Largest area first
    (I, L) => I.area - L.area
    // Smallest area first
  ], f = e.every(
    (I, L, E) => L === 0 || I.isIdentical(E[L - 1])
  );
  if (!a) {
    const I = e.reduce((L, E) => L + E[s] + t, 0) - t;
    if (I <= n)
      return I / n > l ? {
        totalLength: I,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: I / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((L, E) => L + E.area, 0)
      } : !1;
  }
  const g = Ta(t, e, i, s, n, a, r);
  if (g !== !1 && (c.push(g), g.score.efficiency > 0.95 && e.length > 10))
    return g;
  if (f)
    return c[0] || !1;
  const m = Math.min(o, u.length);
  for (let I = 0; I < m; I++) {
    const L = [...e];
    L.sort(u[I % u.length]);
    const E = Ta(t, L, i, s, n, a, r);
    if (E !== !1 && (c.push(E), E.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((I, L) => L.score.efficiency - I.score.efficiency), c[0] || !1;
}
function Ta(t, e, i, s = "l", n, a = !1, o = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let r = 0;
  const l = [];
  if (o || (o = e[0]), l.push(o), r = o[s], r > n) return !1;
  const c = e.findIndex(
    (u) => u.id === o?.id
  );
  c > -1 && e.splice(c, 1);
  for (const u of e) {
    const f = u[s], g = u.getMinSpacing(
      i.saw,
      !0
    );
    if (!(r + t + g + f > n) && (r += t + g + f, l.push(u), r + t + g >= n))
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
        (f, g) => f + g.area,
        0
      )
    };
  }
  return !1;
}
function Kh(t, e, i = null, s = "l", n = !0, a = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const o = s === "l" ? "x" : "y", r = s === "l" ? "y" : "x";
  let l = 0;
  We(i) ? Pa(
    t,
    i
  ) : Pa(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    Yt.LDIDA
  ) : t.sort(
    Yt.WDIDA
  )), t.forEach(
    (c, u) => {
      c[o] = i ? i[o] + l : l, i && (c[r] = i[r]), l += c[o === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), Ct(
        [() => tt(
          l
        ).to.be.a(
          "number"
        )]
      ), We(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function Qw(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    Yt.ID
  );
  const n = t.shapes;
  return Kh(
    n,
    e,
    null,
    s
  ), n;
}
function eS(t, e, i) {
  ti("subset", `guillotine subset for segment ${t.id}`);
  function s($, x = []) {
    const { shapes: j } = o($);
    return j.filter((D) => {
      if (D.added || x.find((F) => F.id === D.id)) return !1;
      if (D.orientationLock)
        return ne.equalTo(D[f], $) ? ne.lessThanOrEqualTo(D.l, t.l) && ne.lessThanOrEqualTo(D.w, t.w) : !1;
      if (ne.equalTo(D.l, $) || ne.equalTo(D.w, $)) {
        const F = ne.equalTo(D.l, $) ? D.w : D.l;
        return ne.lessThanOrEqualTo(F, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n($, x) {
    for (const j of $)
      if (x !== j[Ht(t.getStock.cutPreference)] && nt(
        j,
        j.rot === 1 ? 0 : 1,
        t.getStock
      ) === !1)
        throw new Error(
          "rotateShapesToDimension - could not rotate strip shape correctly"
        );
  }
  function a($, x, j, D = null) {
    let F = s(
      $,
      x
    );
    if (D) {
      const y = F.find(
        (M) => M.parentId === D.parentId
      );
      if (y) return y;
    }
    if (wt() && (n(
      F,
      $
    ), Ct(
      [
        () => tt(F.every((y) => y.l === $ || y.w === $)).to.be.true
      ]
    )), !F.length) return !1;
    const W = [];
    for (const y of F) {
      const M = y.l === $ ? y.w : y.l;
      j.includes(M) && W.push(y);
    }
    return F = W.length ? W : F, qr(F);
  }
  function o($) {
    const x = $;
    return A.has(x) || A.set(x, { shapes: [], priorities: [] }), A.get(x);
  }
  function r($ = null) {
    function x(D, F, W) {
      const { shapes: V, priorities: y } = o(F);
      V.includes(D) || (V.push(D), y.push(W));
    }
    if (!I?.length) return A;
    const j = t.getStock;
    for (const D of I) {
      let F = D.getPriority(j);
      $ && D.parentId !== $.parentId && (F = 0);
      const W = Ht(f);
      if (!D.orientationLock)
        D.longSide <= m && D.shortSide <= t[W] && x(D, D.l, F), !D.isSquare && D.shortSide <= m && D.longSide <= t[W] && x(D, D.w, F);
      else {
        const V = Dr(
          D,
          t.getStock
        );
        if (Ct([() => tt(V.length).to.equal(1)]), nt(
          D,
          V[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const M = Ht(f);
        D[f] <= m && D[M] <= t[M] && x(D, D[f], F);
      }
    }
    return A;
  }
  function l() {
    const $ = [], x = Array.from(A.entries()).map(([D, { shapes: F, priorities: W }]) => ({
      dimension: D,
      count: F.length,
      totalPriority: F.length * Math.max(...W, 0)
    }));
    let j = x.reduce((D, { totalPriority: F }) => D + F, 0);
    for (; x.length > 0; )
      if (j <= 0 || !Number.isFinite(j)) {
        const D = [];
        x.forEach(({ dimension: F, count: W }) => {
          D.push(...Array(W).fill(F));
        });
        for (let F = D.length - 1; F > 0; F--) {
          const W = Math.floor(Math.random() * (F + 1));
          [D[F], D[W]] = [D[W], D[F]];
        }
        $.push(...D);
        break;
      } else {
        const D = Math.random() * j;
        let F = 0, W = -1;
        for (let J = 0; J < x.length; J++)
          if (F += x[J].totalPriority, F > D) {
            W = J;
            break;
          }
        W === -1 && (W = Math.floor(Math.random() * x.length));
        const { dimension: V, count: y, totalPriority: M } = x[W];
        $.push(V), x[W].count--, x[W].totalPriority -= M / y, x[W].count === 0 ? (j -= M, x.splice(W, 1)) : j -= M / y;
      }
    return $;
  }
  function c($, x, j, D, F, W, V) {
    return j += $ + x, D.push($), F.push(
      W.l === $ ? W.w : W.l
    ), V.push(W), j;
  }
  function u($ = null) {
    if (!I?.length) return [];
    if (!A.size) return [];
    const x = /* @__PURE__ */ new Map();
    let j = 0;
    const D = [], F = [], W = [];
    let V = null, y = !0;
    for (let T = 0; T < this.config.subset.guillotine.shuffles; T++) {
      j = 0, D.length = 0, F.length = 0, W.length = 0, V = null, y = !0;
      const _ = l();
      for (const N of _) {
        if (y ? V = N : V = g + N, j + V > m) continue;
        const z = a(
          N,
          F,
          W,
          $
        );
        z && (j = c(
          N,
          y ? 0 : g,
          j,
          D,
          W,
          z,
          F
        ), y = !1);
      }
      if (j) {
        const N = j / m;
        if (Ct([() => tt(N).to.lessThanOrEqual(1)]), N < this.config.subset.efficiency.limit) continue;
        const z = F.map((pe, ce) => ce);
        z.sort((pe, ce) => W[ce] !== W[pe] ? W[ce] - W[pe] : D[ce] - D[pe]);
        const Y = z.map(
          (pe) => D[pe]
        ), oe = z.map(
          (pe) => F[pe]
        );
        Ct([
          () => tt(nf(oe)).to.be.false
        ]), x.set(
          Y.join("-"),
          {
            usedDimensions: Y,
            usedShapes: oe,
            efficiency: N,
            target: m,
            totalLength: j,
            priorityShape: $ ? $.parentId : null
          }
        );
      }
    }
    if (x.size === 0) return [];
    const M = Array.from(
      x.values()
    );
    M.sort(
      (T, _) => T.efficiency > _.efficiency ? -1 : T.efficiency < _.efficiency ? 1 : T.efficiency === _.efficiency ? _.usedDimensions.length - T.usedDimensions.length : 0
    );
    const J = M.slice(
      0,
      20
    );
    if (!J.length) return [];
    const ae = J.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return ae.length ? (ae.forEach(
      (T) => {
        T.usedShapes.forEach(
          (_, N) => {
            const z = T.usedDimensions[N];
            Ct([() => tt([_.l, _.w].includes(z)).to.be.true]);
            let Y;
            _.isSquare ? Y = 0 : _.longSide === z ? Y = t.getStock.cutPreference === "l" ? 1 : 0 : Y = t.getStock.cutPreference === "l" ? 0 : 1, _.guillotineState || (_.guillotineState = new ei({})), _.guillotineState.setStripShapeBatchGroup(C, {
              stockId: t.getStock.autoId,
              dimension: z,
              rot: Y,
              order: N,
              //by this point sorting should have taken place
              priorityShape: T.priorityShape
            });
          }
        ), C++, Ct(
          [
            () => {
              const _ = T.usedDimensions.reduce(
                (Y, oe) => Y + oe,
                0
              ), N = (T.usedDimensions.length - 1) * g, z = _ + N;
              return tt(ne.lessThanOrEqualTo(z, m)).to.be.true;
            },
            () => tt(
              ae.every((_) => _.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => tt(
              ae.every(
                (_) => _.usedDimensions.length === _.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), ae) : [];
  }
  const f = Ht(t.cutPreference), g = t.getStock.bladeWidth, m = t[f];
  Ct([() => tt(m).to.be.a("number")]);
  const I = Jd(
    t.shapes,
    e,
    i
  ), L = t.getStock;
  I.sort(($, x) => {
    const j = x.getPriority(L) - $.getPriority(L);
    if (j !== 0) return j;
    const D = $.id.toString().split("."), F = x.id.toString().split(".");
    return D[0] !== F[0] ? parseInt(D[0]) - parseInt(F[0]) : parseInt(D[1]) - parseInt(F[1]);
  });
  const E = [];
  let C = 0;
  const A = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(L)) {
    r();
    const $ = u.call(this);
    E.push(...$);
  } else {
    const $ = t.shapes[0];
    r($);
    const x = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let j = 0; j < x; j++) {
      const D = u.call(this, $);
      E.push(...D);
    }
  }
  return ti("subset", `${E.length} strip shape results ${E.map(($) => $.usedShapes.map((x) => x.id).join()).join(" | ")}`), E?.length ? E.length : 0;
}
function Zh(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, o = e.x + e.l + n;
  if (!ne.lessThan(t.x, o) || !ne.greaterThan(a, e.x))
    return !1;
  const r = t.y + t.w + n, l = e.y + e.w + n;
  return ne.lessThan(t.y, l) && ne.greaterThan(r, e.y);
}
function Xh(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && Zh(t, s, i))
      return !0;
  return !1;
}
function Jh(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function Qh(t, e, i = !0) {
  const s = Jh(t), n = [];
  for (const a in s) {
    const o = s[a], r = e.findIndex((u) => u.autoId === a), l = e[r], c = rt.groupQuantity({
      item: null,
      // No specific item context for this validation
      index: r >= 0 ? r : 0,
      shapeId: a,
      requiredQuantity: o,
      availableQuantity: l?.q ?? 0,
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
function cl(t) {
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
    config: g
  } = t, m = c ?? g?.subset?.shuffles ?? 10;
  Ct([
    () => tt(s).to.be.greaterThan(0)
  ]);
  const I = ep(e, r, n, i, f);
  if (I.length < 2) return !1;
  const L = { config: g }, E = Yh.call(
    L,
    i.bladeWidth,
    I,
    i.getStock,
    ip(r),
    s,
    o,
    m,
    l
  );
  if (!E) return !1;
  if (E?.shapes?.length > 1 && E?.totalLength) {
    let C;
    try {
      C = new yn({
        id: a,
        direction: r,
        shapes: E.shapes,
        container: i,
        type: u
      }), ti("groups", `[createGroup] Created group ${C.id} direction=${r} dims=${C.l}x${C.w} with ${C.shapes.length} shapes, [${C.shapes.map((A) => A.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (A) {
      return console.log("group error", A), !1;
    }
    return C;
  }
  return !1;
}
function tS(t) {
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
    type: g
  } = t, m = l ?? u?.groups?.tolerance ?? 0.05;
  if (!Se(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!Se(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const I = ul(a), L = Ht(a), E = I === "horizontal" ? i.w : i.l, C = i.getStock;
  let A = [...e], $ = o;
  if ($)
    if (sd(
      $,
      $[L],
      L,
      C
    ) === !1)
      $ = null;
    else {
      const J = $[L], ae = J * (1 - m);
      let T = J * (1 + m);
      T > i[L] && (T = i[L]), A = e.filter((_) => !Ke(_) || _.autoId === $.autoId ? !1 : So(
        _,
        ae,
        T,
        L,
        C
      ));
    }
  const x = Zd(
    A,
    i,
    L
  ), j = Array.from(x.keys()).filter((M) => M <= E).sort((M, J) => J - M);
  if (j.length === 0) return [];
  const D = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
  for (const M of A) {
    const J = /* @__PURE__ */ new Map();
    for (const ae of j) {
      const T = ae * (1 - m);
      let _ = ae * (1 + m);
      _ > i[L] && (_ = i[L]);
      const N = So(
        M,
        T,
        _,
        L,
        C
      );
      J.set(ae, N);
    }
    F.set(M.autoId, J);
  }
  for (const M of j) {
    const J = [];
    for (const ae of A) {
      if (!Ke(ae)) continue;
      F.get(ae.autoId)?.get(M) && J.push(ae);
    }
    D.set(M, J);
  }
  const W = [], V = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map();
  for (const M of j) {
    if (c !== void 0 && W.length >= c)
      break;
    const J = [];
    let ae = D.get(M).filter((T) => !V.has(T.autoId));
    if (!(ae.length < 2)) {
      for (; ae.length >= 2 && !(c !== void 0 && W.length >= c); ) {
        let T, _ = !1;
        if (J.length && !r) {
          const N = J[J.length - 1], z = N.shapes.slice(), Y = /* @__PURE__ */ new Set(), oe = new Set(ae.map((re) => re.autoId)), pe = [];
          let ce = !0;
          for (const re of z) {
            let Pe = !1;
            if (oe.has(re.autoId) && !Y.has(re.autoId)) {
              const U = ae.find((at) => at.autoId === re.autoId);
              U && (pe.push(U), Y.add(re.autoId), Pe = !0);
            }
            if (!Pe)
              for (const U of ae) {
                if (Y.has(U.autoId)) continue;
                const at = `${U.autoId}-${re.autoId}`;
                if (y.has(at) || y.set(at, U.isIdentical(re)), y.get(at)) {
                  pe.push(U), Y.add(U.autoId), Pe = !0;
                  break;
                }
              }
            if (!Pe) {
              ce = !1;
              break;
            }
          }
          if (ce && pe.length === z.length) {
            if (_ = !0, N.positions?.length === pe.length)
              for (let re = 0; re < pe.length; re++) {
                const Pe = pe[re], U = z[re], at = N.positions[re]?.rot ?? U.rot;
                if (Pe.rot !== at && !nt(Pe, at, i)) {
                  console.warn(`  Failed to rotate ${Pe.id} to ${at} - skipping clone`), _ = !1;
                  break;
                }
              }
            _ && (Ct([
              () => tt(pe.every((re, Pe) => {
                const U = N.positions[Pe]?.rot ?? z[Pe].rot;
                return re.rot === U;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), T = N.cloneWithNewShapes(pe));
          }
        }
        if (_ || (T = cl({
          shapes: ae,
          container: i,
          targetSize: s,
          d: M,
          id: "g" + (typeof f?.group == "number" ? f.group : 0),
          exact: n,
          groupDirection: I,
          firstShape: $,
          tolerance: m,
          config: u,
          type: g
        })), T) {
          typeof f?.group == "number" && f.group++, J.push(T), T.shapes.forEach((z) => V.add(z.autoId));
          const N = [];
          for (const z of ae)
            V.has(z.autoId) || N.push(z);
          if (ae = N, ae.length < 2) break;
        } else
          break;
      }
      W.push(...J);
    }
  }
  return W;
}
function ep(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    if (a.isSquare) return !0;
    const o = i * (1 - n), r = i * (1 + n), l = a.l >= o && a.l <= r, c = a.w >= o && a.w <= r;
    let u = null;
    if (l && c) {
      const f = Math.abs(a.l - i), g = Math.abs(a.w - i);
      u = f <= g ? "l" : "w";
    } else l ? u = "l" : c && (u = "w");
    if (u !== null) {
      const f = tp(
        u,
        e,
        a.rot
      );
      return St(a, f, s) ? nt(a, f, s) : !1;
    }
    return !1;
  });
}
function tp(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function ul(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function ip(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function sp(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function np(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const a of n.shapes)
        s.add(a.autoId);
  return t.filter((n) => We(n) || !s.has(n.autoId));
}
function ap(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(We).forEach((o) => {
    o.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((o) => Ke(o)).filter((o) => i.has(o.autoId)), a = e ? ` [${e}]` : "";
  tt(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((o) => o.id || o.autoId).join(", ")}`
  ).to.equal(0);
}
function iS(t) {
  const e = [], i = t.filter((n) => We(n)), s = t.filter((n) => Ke(n));
  for (const n of i)
    n.added && e.push(n);
  for (const n of s)
    n.added && !n.group.inGroup && e.push(n);
  return e;
}
function op(t, e) {
  t.push(e), t.sort((s, n) => (n.score?.total || 0) - (s.score?.total || 0));
  const i = t[0];
  if (i.score?.total && We(i) && (i.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(i), e.bestScore.group = i, i;
}
function sS(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: o, scoreFunction: r } = t;
  if (s.length < 3) return;
  ti("groups", `[POSITION GROUPS] Creating groups at position (${a.x},${a.y}) for shape ${n.id} in container ${e.id} (${e.cutType})`);
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  Vi(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const m of u) {
    const I = Ht(m), L = m === "l" ? "x" : "y", E = e[m] - n[L] - e.bladeWidth, C = e[m] - n[L], A = e[m] * 0.6;
    if (E <= 0 || C < A) continue;
    const $ = sp(
      s,
      n,
      I
    );
    if ($.length < 2) continue;
    const x = cl({
      shapes: $,
      container: e,
      targetSize: E,
      d: n[I],
      id: "g" + n.id,
      exact: !1,
      groupDirection: ul(m),
      firstShape: n,
      iterations: 40,
      config: {
        subset: o.subset
      }
    });
    x && c.push(x);
  }
  c.sort((m, I) => I.efficiency - m.efficiency), c = c.slice(0, o.sample.groupSize);
  for (const m of c)
    m.x = a.x, m.y = a.y, m.outOfBounds = m.x + m.l > e.l || m.y + m.w > e.w, !m.outOfBounds && (Xh(m, i, e) || r(m, e, i, s, a));
  s.forEach((m) => m.resetGroupData());
  const f = op(c, n), g = c.filter((m) => We(m) && m !== f);
  if (g.length > 0 && (ti("groups", `[POSITION GROUPS] Destroying ${g.length} non-winning groups`), g.forEach((m) => {
    ti("groups", `  Destroying group ${m.id} (${m.shapes?.length || 0} shapes)`), m.destroy();
  })), f) {
    if (ti("groups", `[POSITION GROUPS] Winner: group ${f.id} with score ${f.score.total.toFixed(2)} (beat shape ${n.id} score ${n.score?.total?.toFixed(2) || 0})`), Vi(e)) {
      e.shapes.push(f);
      const m = e.shapes.length;
      e.shapes = np(e.shapes, f);
      const I = m - e.shapes.length;
      I > 0 && ti("groups", `[POSITION GROUPS] Removed ${I} child shapes from segment after adding group ${f.id}`);
    }
  } else c.length > 0 && ti("groups", `[POSITION GROUPS] No winning group - shape ${n.id} scored better than ${c.length} groups`);
  return l && (n.orientationLock = null), f && Vi(e) && Ct([
    () => ap(e.shapes, "POSITION GROUPS")
  ]), f;
}
function bs(t, e, i = null) {
  if (t.has(e.x, e.y)) {
    const s = t.get(e.x, e.y);
    s.type === "group" && !i && (s.type = void 0);
    return;
  }
  i && (e.type = i), t.add(e);
}
function Bs(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    bs(t, s, i);
  }
}
function Fe(t, e, i, s, n) {
  const a = rp[t](e, i);
  return s && (a.corner = s), n && (a.direction = n), a;
}
const rp = {
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
function lp(t, e, i) {
  const s = new ni(), n = i.toArray().sort(dl), a = e.bladeWidth;
  if (n.forEach((o) => {
    const r = o.corner, l = o.type;
    if (!a)
      s.add(o);
    else
      switch (r) {
        case "topRight":
          {
            const c = Fe("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Fe("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = Fe("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Fe("left", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = Fe("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Fe("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = Fe("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Fe("left", o, a, r);
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
    for (let g = f.length; g--; ) {
      const m = f[g];
      (ne.lessThan(m.x, r) || ne.lessThan(m.y, l) || ne.greaterThan(m.x, c) || ne.greaterThan(m.y, u)) && f.splice(g, 1);
    }
    s.clear(), f.forEach((g) => s.add(g)), o.clear(), f = s.toArray();
    for (let g = f.length; g--; ) {
      const m = f[g];
      for (let I = t.length; I--; ) {
        const L = t[I];
        if (m.collidesWith(L)) {
          s.remove(m.x, m.y);
          break;
        }
      }
    }
  }
  return s;
}
function cp(t, e, i) {
  let s = [];
  const n = t.minSpacing, a = e.corner, o = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        o === "rl" && (s.push(Fe("right", e, n, a, o)), s.push(Fe("topRight", e, n, a, o))), o === "bt" && (s.push(Fe("bottom", e, n, a, o)), s.push(Fe("bottomLeft", e, n, a, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(Fe("left", e, n, a, o)), s.push(Fe("topLeft", e, n, a, o))), o === "bt" && (s.push(Fe("bottom", e, n, a, o)), s.push(Fe("bottomRight", e, n, a, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(Fe("left", e, n, a, o)), s.push(Fe("bottomLeft", e, n, a, o))), o === "tb" && (s.push(Fe("top", e, n, a, o)), s.push(Fe("topRight", e, n, a, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(Fe("right", e, n, a, o)), s.push(Fe("bottomRight", e, n, a, o))), o === "tb" && (s.push(Fe("top", e, n, a, o)), s.push(Fe("topLeft", e, n, a, o)));
        break;
    }
  else if (e.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(Fe("top", e, 0)), s.push(Fe("centre", e, 0)), s.push(Fe("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(Fe("left", e, 0)), s.push(Fe("right", e, 0)), s.push(Fe("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const r = new ni();
  for (const l of s)
    l.raycast = !0, Bs(r, pl(t, l, i).toArray());
  return gl(t, i, r), r;
}
function up(t, e) {
  const i = new ni();
  return t.sort(dl), t.forEach((s) => {
    We(s) ? (Bs(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      Bs(i, a, "group");
    })) : Bs(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function dp(t = [], e, i) {
  const s = up(
    t === null ? e : t,
    i
  );
  return lp(
    e,
    i,
    s
  );
}
function dl(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function fl(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function fp(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new ni();
  const s = hl(e, t);
  for (const r of e)
    for (const l of s) {
      if (l.shape.id === r.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        hp(
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
      const f = new Qe(u.x2, u.y2);
      a === u.direction && (fl(f, r, null, u.direction, "edge"), bs(i, f));
    }
  }), i = pp(i), i;
}
function hl(t, e) {
  return t.map((i) => {
    const s = Hh(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function hp(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      As(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      As(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      As(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      As(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function As(t, e, i, s, n) {
  const a = t.dimension === "w", o = a ? "y" : "x", r = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${r}1`] >= i[r] && t[`${r}1`] <= i[r] + i[l]) {
    const c = t.direction === "lr" && t[`${o}1`] <= n && t[`${o}2`] >= n, u = t.direction === "rl" && t[`${o}1`] >= n && t[`${o}2`] <= n, f = t.direction === "bt" && t[`${o}1`] <= n && t[`${o}2`] >= n, g = t.direction === "tb" && t[`${o}1`] >= n && t[`${o}2`] <= n;
    if (c || u || f || g) {
      const I = a ? t[`${r}1`] : n, L = a ? n : t[`${r}1`], E = new Qe(I, L), C = t.origin;
      fl(E, e, i, t.direction, "shape", C), bs(s, E);
    }
  }
}
function pp(t) {
  const e = new ni();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const o = gp(
        n,
        a
      );
      o && bs(e, o);
    });
  }), e;
}
function gp(t, e) {
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
function pl(t, e, i) {
  const s = new ni(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let o;
    switch (o = mp(e, t, i), a) {
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
    bs(s, o);
  }
  return gl(t, i, s), s;
}
function mp(t, e, i) {
  if (i.saw.cutType !== "efficiency") return t;
  const s = e.minSpacing, n = i.bladeWidth;
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
function gl(t, e, i) {
  let s, n, a, o;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, o = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, a = e.l - e?.trim?.l2 - t.l, o = e.w - e?.trim?.w2 - t.w);
  const r = i.toArray();
  for (let l = r.length; l--; ) {
    const c = r[l];
    (ne.lessThan(c.x, s) || ne.lessThan(c.y, n) || ne.greaterThan(c.x, a) || ne.greaterThan(c.y, o) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
const yp = B({
  id: b(),
  count: d(),
  name: b(),
  l: d(),
  w: d(),
  t: d(),
  material: b()
}), Ja = B({
  inputStock: ee(xi),
  inputShapes: ee(os),
  inputSaw: cs,
  inputUserGroups: ee(Za),
  // Centralized extras options for UI dropdowns
  extrasOptions: B({
    banding: B({
      options: ee(b())
    }).optional(),
    finish: B({
      options: ee(b())
    }).optional(),
    planing: B({
      options: ee(b())
    }).optional()
  }).optional()
}).optional(), bp = B({
  // Banding metrics
  bandingLengthByType: we(b(), d()).default({}),
  // Finish metrics (by face)
  finishAreaByType: we(b(), d()).default({}),
  // Material summary with nested structure
  materialSummary: we(
    b(),
    // material name
    we(
      b(),
      // thickness
      B({
        used: d(),
        stacks: d(),
        bandingLengthByType: we(b(), d())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: we(b(), d()).default({}),
  addedPartTally: we(b(), d()).default({}),
  // Cost metrics
  stockAreaCost: d().default(0),
  totalStockCost: d().default(0),
  // Machining metrics
  hasMachining: R().default(!1),
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
}), Qa = bp.extend({
  bandingLengthByType: we(b(), d()).default({}),
  unplacedParts: ee(yp).default([])
}), vp = B({
  // Core optimization results
  stockList: Ee("Stock"),
  shapeList: Ee("Shape"),
  cutList: Ee("Cut").optional(),
  segmentList: Ee("Segment").optional(),
  offcuts: Ee("Offcut").optional(),
  saw: ge("Saw"),
  unusableShapes: Ee("Shape").optional(),
  unavailableStock: Ee("Stock").optional(),
  evolutionVisData: ee(B({})).optional(),
  performance: b().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: Qa.optional(),
  credits: d().optional(),
  // Optional input data for debugging/API reporting
  inputs: Ja
});
B({
  // Job execution metadata
  success: R(),
  socketId: b().nullable().default(null),
  userId: b(),
  api: R(),
  app: R(),
  widget: R().optional(),
  cached: R().optional(),
  hash: b().optional(),
  webhook: b().optional(),
  config: xe().optional(),
  error: b().optional(),
  jobId: d().optional(),
  // Input data
  inputs: Ja,
  // The actual optimization results
  optimisation: vp
});
B({
  // Database metadata
  jobId: d().optional(),
  // Job execution data
  success: R(),
  socketId: b().nullable().default(null),
  userId: b(),
  api: R(),
  app: R(),
  widget: R().optional(),
  cached: R().optional(),
  hash: b().optional(),
  webhook: b().optional(),
  config: xe().optional(),
  error: b().optional(),
  // Optimization results (flattened from optimization object)
  stockList: Ee("Stock"),
  shapeList: Ee("Shape"),
  cutList: Ee("Cut").optional(),
  segmentList: Ee("Segment").optional(),
  offcuts: Ee("Offcut").optional(),
  saw: ge("Saw"),
  unusableShapes: Ee("Shape").optional(),
  unavailableStock: Ee("Stock").optional(),
  performance: b().optional(),
  metadata: Qa.optional(),
  apiVersion: d().optional(),
  credits: d().optional(),
  // Input data
  inputs: Ja,
  // Computed fields for easier querying/display
  numParts: d().optional(),
  numStock: d().optional()
});
const wp = B({
  id: b().optional(),
  name: b().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: b().optional(),
  q: d().optional(),
  orientationLock: he([
    me(""),
    me("l"),
    me("w"),
    xt()
  ]).nullable().optional(),
  // Basic extras for display
  banding: xe().optional(),
  finish: xe().optional()
}), ml = B({
  issues: ee(b()),
  id: b(),
  duplicate: R(),
  name: b(),
  added: R(),
  x: d(),
  y: d(),
  l: d(),
  w: d(),
  t: d(),
  q: d().optional(),
  // Add quantity for checkout compatibility
  orientationLock: he([
    me(""),
    me("l"),
    me("w")
  ]),
  trim: B({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  material: b(),
  banding: xe(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: xe(),
  // Legacy field
  finish: xe(),
  // Using any for now, could use finishPropertiesSchema
  stock: B({ id: b() }),
  rot: R(),
  notes: b(),
  customData: we(b(), he([b(), d(), R()]))
}), Sp = B({
  issues: ee(b()),
  id: b(),
  duplicate: R().optional(),
  name: b(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: b(),
  cost: d(),
  used: R(),
  grain: he([
    me(""),
    me("l"),
    me("w"),
    xt()
  ]).nullable(),
  trim: B({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  parts: ee(ml),
  efficiency: d(),
  notes: b().optional(),
  // Legacy V1 fields
  blade: B({
    width: d()
  }).optional(),
  cutPreference: he([
    me("l"),
    me("w"),
    me("flex")
  ]).optional(),
  // Analysis data
  analysis: B({
    partArea: d(),
    totalParts: d(),
    areaEfficiency: d(),
    cutLength: d(),
    bandingLength: d(),
    numberOfCuts: d(),
    rollLength: d().optional()
  }).optional(),
  // Stack info
  stack: xe().optional(),
  // Stock quantity for checkout compatibility
  q: d().optional()
}), nS = Ws({
  // Context - using z.any() for complex external types
  job: it().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: Tt().nullable().default(null).describe("Socket.io connection ID"),
  user: it().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: it().describe("Configuration object"),
  // Type: Config
  api: Ye().nullable().default(null).describe("API mode flag"),
  app: Ye().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ge("Saw").describe("Saw configuration"),
  stockList: Ee("Stock").default([]).describe("List of stock materials"),
  shapeList: Es(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  userGroups: Ee("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Ee("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Es(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Es(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: un,
  // Results storage
  cutList: Ee("Cut").default([]).describe("List of cuts to make"),
  segmentList: Ee("Segment").default([]).describe("List of segments"),
  offcuts: Ee("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Ee("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Ye().default(!1).describe("Use inventory system"),
  successMetric: Tt().default(ht.successMetric).describe("Metric for optimization success"),
  enableEvo: Ye().default(!0).describe("Enable evolutionary algorithm"),
  weighting: mo(Tt(), it()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: it().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: it().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: Ws({
    placement: Hs().default(0),
    group: Hs().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: Ye().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: Ye().default(!1).describe("Run guillotine second pass"),
  runningEvo: Ye().default(!1).describe("Currently running evolution"),
  evolutionVisData: Si(mo(Tt(), Xc())).default([]).describe("Evolution visualization data"),
  final: Ye().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Ye().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: Ye().default(!1).describe("Has shape-level minimum spacing")
}), aS = {}, xp = Jc(["decimal", "fraction"]), kp = Ws({
  job: it().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Preserve system properties like __entityType and autoId
  inputSaw: cs,
  inputShapes: Si(os),
  inputStock: Si(xi),
  inputUserGroups: Si(Za).optional(),
  // Number format for conversion
  numberFormat: xp.optional(),
  // Algorithm configuration
  enableEvo: Ye().default(!0),
  weighting: it().optional(),
  successMetric: Tt().optional(),
  useInventory: Ye().default(!1),
  // Context
  socketId: Tt().optional(),
  user: it().optional(),
  // IUser type
  // Application flags
  widget: Ye().optional(),
  api: Ye().optional(),
  app: Ye().optional(),
  domain: Tt().optional(),
  // API specific
  config: it().optional(),
  v: Hs().optional(),
  // API version
  webhook: Tt().optional()
});
Ws({
  job: it().optional(),
  // Type: Job from BullMQ
  saw: it(),
  // Runtime Saw instance
  shapeList: Si(it()),
  // Runtime Shape instances
  stockList: Si(it()),
  // Runtime Stock instances
  userGroups: Si(it()).optional(),
  // Runtime Group instances
  enableEvo: Ye(),
  weighting: it().optional(),
  successMetric: Tt().optional(),
  useInventory: Ye(),
  socketId: Tt().optional(),
  user: it().optional(),
  widget: Ye().optional(),
  api: Ye().optional(),
  app: Ye().optional(),
  domain: Tt().optional(),
  config: it().optional(),
  v: Hs().optional(),
  webhook: Tt().optional()
});
const Ip = (t, e, i) => {
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
}, Cp = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), on = Object.keys(Cp).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
on.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const Aa = "en", zi = sr.createInstance();
function q(t, e) {
  if (pr())
    return t;
  if (!zi.isInitialized) {
    const n = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${n}. Returning key.`), n;
  }
  let i = zi.t(t, e);
  const s = Array.isArray(t) ? t[0] : t;
  return i = typeof i == "string" ? i : String(i), Hi(i);
}
const Os = {}, Pp = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (Os[t]) {
        i(null, Os[t]);
        return;
      }
      const s = await Ip(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), `../translation/${t}.json`, 3);
      Os[t] = s.default, i(null, Os[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function Tp() {
  return wu(zi), await zi.use(cc).use(Pp).init({
    debug: !1,
    fallbackLng: Aa,
    supportedLngs: on.length > 0 ? on : [Aa],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? yu(t) : e === "sc" ? Hi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), zi;
}
const Ap = Tp().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
}), oS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: Aa, SUPPORTED_LANGUAGES: on, i18nextInstance: zi, i18nextReady: Ap, t: q }, Symbol.toStringTag, { value: "Module" }));
function Oa(t) {
  return t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t ? {
    l1: t.x1 ?? t.l1,
    l2: t.x2 ?? t.l2,
    w1: t.y1 ?? t.w1,
    w2: t.y2 ?? t.w2
  } : t);
}
function Eo(t) {
  if (!t) return t;
  const e = { ...t };
  return "l1" in e && (e.x1 = e.l1, delete e.l1), "l2" in e && (e.x2 = e.l2, delete e.l2), "w1" in e && (e.y1 = e.w1, delete e.w1), "w2" in e && (e.y2 = e.w2, delete e.w2), e;
}
function Op(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {}, s = Eo(e);
    Se(s.x1) && (i.x1 = s.x1), Se(s.x2) && (i.x2 = s.x2), Se(s.y1) && (i.y1 = s.y1), Se(s.y2) && (i.y2 = s.y2), Se(e.a) && (i.x1 = e.a), Se(e.b) && (i.y1 = e.b), Se(e.c) && (i.x2 = e.c), Se(e.d) && (i.y2 = e.d), Object.keys(i).length > 0 && (t.banding = i);
  }
  if (t.extras?.finish?.faces && (t.finish = t.extras.finish.faces), t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = Eo(e.sides || {});
    e.sides && (Se(s.x1) && (i.x1 = s.x1), Se(s.x2) && (i.x2 = s.x2), Se(s.y1) && (i.y1 = s.y1), Se(s.y2) && (i.y2 = s.y2)), e.faces && (Se(e.faces.a) && (i.a = e.faces.a), Se(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function $p(t) {
  let e, i;
  switch (t) {
    case "l":
    case "length":
      e = "guillotine", i = "l";
      break;
    case "w":
    case "width":
      e = "guillotine", i = "w";
      break;
    case "flex":
      e = "guillotine", i = "flex";
      break;
    case "efficiency":
      e = "efficiency", i = "none";
      break;
    case "beam":
      e = "beam", i = "l";
      break;
    default:
      e = "guillotine", i = "flex";
      break;
  }
  return {
    cutPreference: i,
    cutType: e
  };
}
function Fp(t) {
  if (t)
    switch (t) {
      case "x":
        return "l";
      // x-axis = length (horizontal)
      case "y":
        return "w";
      // y-axis = width (vertical)
      case "l":
        return "l";
      // already internal format
      case "w":
        return "w";
      // already internal format
      default:
        return;
    }
}
function Lp(t) {
  return t ? {
    __entityType: "InputSaw",
    stockType: t.stockType || "sheet",
    bladeWidth: t.bladeWidth || 0,
    cutType: t.cutType || "guillotine",
    cutPreference: t.cutPreference || "l",
    guillotineOptions: t.guillotineOptions,
    efficiencyOptions: t.efficiencyOptions ? {
      ...t.efficiencyOptions,
      primaryCompression: Fp(t.efficiencyOptions.primaryCompression)
    } : void 0
  } : {};
}
function $a(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map($a);
  const e = {};
  for (const [i, s] of Object.entries(t))
    i === "__entityType" || i === "autoId" || (e[i] = $a(s));
  return e;
}
function Ep(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: i,
    autoId: s,
    ...n
  } = t;
  return $a(n);
}
function Dp(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function Rp(t) {
  return t.rot !== void 0 ? !!t.rot : t.rotated !== void 0 ? !!t.rotated : t.isRotated !== void 0 ? !!t.isRotated : !1;
}
function Mp(t) {
  return t ? {
    // Map saw object directly
    saw: Lp(t.saw),
    // Map stock array
    stock: _p(t.stock || []),
    // Map parts with modern extras structure
    parts: Bp(t.parts || []),
    // Groups and webhook
    groups: t.groups || [],
    webhook: t.webhook
  } : null;
}
function _p(t) {
  return !t || !Array.isArray(t) ? [] : t.map((e) => {
    const i = {
      ...e,
      autoAdd: e.autoAdd !== void 0 ? e.autoAdd : !1,
      grain: e.grain || null,
      id: e.id || void 0,
      material: e.material || void 0,
      // Handle infiniteLength (V2 feature)
      infiniteLength: e.infiniteLength || !1
    };
    return e.trim && (i.trim = Oa(e.trim)), i;
  });
}
function Bp(t) {
  return !t || !Array.isArray(t) ? [] : t.map((e) => {
    const i = { ...e };
    if (e.banding && !e.extras?.banding) {
      const s = Oa(e.banding);
      s && Object.keys(s).length > 0 && (i.extras = {
        ...i.extras,
        banding: { sides: s }
      });
    }
    if (e.extras?.banding?.sides) {
      const s = Oa(e.extras.banding.sides);
      i.extras = {
        ...i.extras,
        banding: {
          ...i.extras.banding,
          sides: s
        }
      };
    }
    return e.finish && !e.extras?.finish && (i.extras = {
      ...i.extras,
      finish: { faces: e.finish }
    }), {
      ...i,
      orientationLock: i.orientationLock || null,
      upDirection: i.upDirection || null,
      id: i.id || void 0,
      customData: i.customData || void 0
    };
  });
}
function Do(t) {
  return !t || !Array.isArray(t) ? [] : t.map((e) => {
    const i = {
      id: e.id,
      name: e.name || "",
      duplicate: e.duplicate || !1,
      added: e.added || !1,
      l: e.l,
      w: e.w,
      t: e.t || 0,
      material: e.material || "",
      rot: Rp(e),
      notes: e.notes || ""
    };
    e.added && e.x !== void 0 && (i.x = e.x), e.added && e.y !== void 0 && (i.y = e.y), e.stock && (i.stock = { id: Dp(e.stock) });
    const s = { ...e };
    return Op(s), s.banding && (i.banding = s.banding), s.finish && (i.finish = s.finish), s.planing && (i.planing = s.planing), e.machining && (i.machining = Ep(e.machining)), e.customData && (i.customData = e.customData), i;
  });
}
let yl = {};
const rS = (t, e) => {
  yl[t] = e;
}, xn = (t) => yl[t] || null, Qn = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = pi(i), o = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  o[a] = s;
}, kn = (t, e, i) => {
  const { scope: s, key: n } = pi(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] || null;
}, jp = (t, e, i) => {
  const { scope: s, key: n } = pi(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, Vp = (t) => {
  const e = xn(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
}, Ro = !1;
function Np() {
  return {
    banding: {
      scope: ["sides"],
      sides: Ci.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: ft.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: ft.map((t) => `face.${t}`),
      sides: Ci.map((t) => `side.${t}`),
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
      sides: At.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const Gp = Np(), Zt = (t) => Gp[t] || {
  scope: ["sides"],
  sides: At.map((e) => `side.${e}`)
}, Fa = (t) => {
  const e = Zt(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, lS = (t) => (Zt(t).faces || []).map((i) => {
  const s = pi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), cS = (t) => (Zt(t).sides || []).map((i) => {
  const s = pi(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), pi = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !ft.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !At.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, Mo = (t) => pi(t).scope, bl = (t) => Zt(t).scope.includes("faces"), vl = (t) => Zt(t).scope.includes("sides"), uS = (t) => {
  const e = Zt(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, qp = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((a) => typeof a == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, zp = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  bl(e) && (s.faces || (s.faces = {})), vl(e) && (s.sides || (s.sides = {}));
}, Wp = (t, e, i) => {
  zp(t, e);
  const n = t.extras[e], { scope: a } = pi(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, di = (t, e, i) => !!kn(t, e, i), Hp = (t, e, i, s, n) => {
  const a = xn(e);
  if (a) {
    const o = kn(t, e, i);
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
}, dS = (t, e, i, s, n, a, o) => {
  const r = xn(e);
  if (r)
    switch (Vp(e)) {
      case "boolean":
        Qn(t, e, i, !!n);
        break;
      case "string":
        Qn(t, e, i, String(n));
        break;
      case "object":
        {
          let c = kn(t, e, i) || {};
          typeof c != "object" && (c = {});
          const u = r.labels.indexOf(s);
          if (u !== -1 && r.options[u] && Array.isArray(r.options[u])) {
            const f = r.options[u];
            f.length === 1 && f[0] === n ? c[s] = !0 : c[s] = n;
          } else
            c[s] = n;
          Qn(t, e, i, c);
        }
        break;
    }
}, Up = (t, e, i, s) => {
  jp(t, e, i);
}, fS = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((o) => Hp(t, e, o, s));
  if (n === "boolean" || n === "single") {
    const o = a.every((l) => !!l), r = a.every((l) => !l);
    return o ? !0 : r ? !1 : null;
  }
  if (n === "multiple") {
    const o = a[0];
    return a.every((l) => l === o) ? o : null;
  }
  return null;
}, hS = (t, e, i, s) => {
  i.forEach((n) => {
    Up(t, e, n);
  });
}, ea = (t, e, i, s, n, a) => {
  const o = kn(t, e, i), r = [];
  if (o && a?.length)
    if (typeof o == "object" && !Array.isArray(o)) {
      const c = o;
      for (const u of a) {
        const f = c[u];
        if (f)
          if (f === !0) {
            const g = xn(e);
            if (g) {
              const m = g.labels.indexOf(u);
              if (m !== -1 && g.options[m] && Array.isArray(g.options[m])) {
                const I = g.options[m];
                I.length === 1 ? r.push(I[0]) : r.push(u);
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
    const c = l.map((f, g) => {
      if (typeof f == "boolean" && f === !0 && n) {
        const m = n[g];
        if (m && m.length === 1)
          return String(m[0]);
      }
      return String(f);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, pS = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Zt(e);
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
}, gS = (t, e, i, s) => {
  const n = s[0], a = Zt(e);
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
}, mS = (t, e, i) => {
  const s = Zt(e);
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
}, Yp = (t, e, i, s = !1) => {
  const n = Zt(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const o = a.extras[e];
  o.options || (o.options = {});
  const r = o.options;
  if (bl(e) && (o.faces || (o.faces = {}), r.faces || (r.faces = {})), vl(e) && (o.sides || (o.sides = {}), r.sides || (r.sides = {})), s) {
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
}, yi = (t, e, i, s = [], n = []) => {
  const a = qp(i, n);
  Yp(t, e, a === "boolean" ? [] : s, a === "boolean");
}, Kp = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], o = Fa(e), r = Object.keys(i), l = Math.max(...r.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of o) {
    const { extraContainer: f } = Wp(t, e, u), { key: g } = pi(u), m = f[g];
    if (!m)
      continue;
    let I;
    if (typeof m == "object" && !Array.isArray(m) && m !== null)
      if ("value" in m && typeof m.value == "string") {
        const $ = m.value;
        I = $.includes("|") ? $.split("|") : [$];
      } else
        I = Object.values(m).filter(($) => $ != null && $ !== "" && $ !== !1).map(($) => String($));
    else typeof m == "string" ? I = m.includes("|") ? m.split("|") : [m] : typeof m == "boolean" ? I = m ? ["true"] : [] : I = [String(m)];
    const L = I.length;
    if (L === 0)
      continue;
    let E = !1, C = !1, A = "";
    if (L > 0) {
      if (s)
        try {
          const $ = I.filter((j) => j.trim() !== ""), x = s(e, $);
          C = x !== null && x > 0;
        } catch ($) {
          console.error("[validateExtrasCompleteness] Error getting price:", $), C = !1;
        }
      else {
        const $ = I.join("|");
        C = r.some((x) => x === $ || x.startsWith($ + "|"));
      }
      if (L < l) {
        E = !0;
        const $ = I.join("|");
        if (r.some((j) => j.startsWith($ + "|")) && !C) {
          const j = l - L, D = I.join(", ");
          A = `${e} selection incomplete for ${u}. Selected: "${D}" but ${j} more level${j > 1 ? "s" : ""} required.`;
        }
      }
      !C && !E && (A = `${e} selection invalid for ${u}. No pricing available for "${I.join(", ")}".`);
    }
    L > 0 && !C && (a.push(u), n.push(A || `${e} pricing incomplete for ${u}: ${L}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, Zp = (t, e, i) => {
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
}, Xp = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
}, Jp = { id: "mini-stock-nav" }, Qp = ["onMousedown"], eg = { class: "id" }, tg = /* @__PURE__ */ De({
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
    return (a, o) => (S(), P("div", Jp, [
      (S(!0), P(Te, null, Be(i.stockList, (r, l) => (S(), P("button", {
        type: "button",
        key: l,
        class: Ie(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockAutoId }]),
        style: Je({
          backgroundColor: r.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(r.autoId)
      }, [
        O("div", eg, Z(l + 1), 1),
        fs(O("div", { class: "stack legibility" }, Z(r.stack), 513), [
          [rn, typeof r?.stack == "number" && r.stack > 1]
        ])
      ], 46, Qp))), 128))
    ]));
  }
});
function ig(t) {
  const e = t.x, i = t.x + t.l, s = Dt().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, o = Dt().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(zs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(zs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function sg() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(lr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(cr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function wl(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, o] = s;
    i === "x" ? ng.call(this, a, o, e[n]) : ag.call(this, a, o, e[n]);
  });
}
function ng(t, e, i) {
  const s = Dt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = Sl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(qs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function ag(t, e, i) {
  const s = Dt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = Sl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(zs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  og(a), this.axes.cutMeasurementYAxes.push(a);
}
function Sl(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function og(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function us() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function rg() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function In() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function xl(t) {
  return t.autoId;
}
function lg(t, e) {
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
function $s({ parent: t, near: e, far: i }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, i].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, xl).join(
    (n) => n.append("rect").attr("class", "segment").call((a) => _o.call(this, a)),
    (n) => n.call((a) => _o.call(this, a)),
    (n) => n.remove()
  ), this.state.env === "development" && cg.call(this, s), !this.settings.app && this.state.env === "development" && ug.call(this);
}
function _o(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function cg(t) {
  this.selections.segmentGroup.selectAll("text").data(t, xl).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => Bo.call(this, i)),
    (e) => e.call((i) => Bo.call(this, i)),
    (e) => e.remove()
  );
}
function Bo(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function ug() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function kl(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = lg(n, e), i) break;
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
const { currentCutIndex: Il } = Da();
function dg() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => jo.call(this, e)),
    (t) => t.call((e) => jo.call(this, e)),
    (t) => t.remove()
  ), Tl.call(this));
}
function jo(t) {
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
function Cl(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function Pl(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function fg(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), Il.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || pg.call(this, t, e);
}
function hg(t, e, i, s, n) {
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
    this.state.device === "desktop" && !t.isTrim && wl.call(this, a, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, r) => r === e);
}
function Tl() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), us.call(this), In.call(this);
}
function pg(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (f) => Cl(f, e, i)), this.selections.cutLines.classed("inside-segment", (f) => Pl(f, e));
  const s = kl.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: o } = Al(t, a);
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
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && wl.call(this, r, l, u);
}
function gg(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const m = this.props.cuts.value.filter((I) => I.isTrim);
    t = t + m.length, t - m.length >= this.props.cuts.value.length - m.length && (Il.value = this.props.cuts.value.length - m.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (us.call(this), In.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const m = this.selections.cutLines.nodes()[t].parentElement;
    if (!m) return;
    st(m).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", o = i?.stock?.trim, r = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? fg.call(this, i, s, r, e) : hg.call(this, i, t, o, a, n), mg.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = kl.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return $s.call(this, { parent: c });
  const { near: f, far: g } = Al(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const m = u.find((E) => E.offcut === !0 && E.x === 0 && E.l === i.stock?.trim?.l1), I = u.find((E) => E.type === "near" && E !== m), L = u.find((E) => E.type === "far" && E !== m && E.phase > c.phase);
      if (m)
        return $s.call(this, { parent: m, near: I, far: L });
    } else if (i.beamTrimW1) {
      const m = u.find((E) => E.offcut === !0 && E.y === 0 && E.w === i.stock?.trim?.w1);
      let I = u.find((E) => E.type === "near" && E !== m);
      const L = u.find((E) => E.type === "far" && E !== m && E.y > (m?.y || 0));
      if (I && i.stock && (I = {
        ...I,
        x: 0,
        l: i.stock.l
      }), m)
        return $s.call(this, { parent: m, near: I, far: L });
    }
  }
  $s.call(this, { parent: c, near: f, far: g });
}
function Al(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((o) => o.type === "near" && o[i] + o[s] === t[i + "1"] - t.stock.halfBladeWidth), a = e.find((o) => o.type === "far" && o[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: a };
}
function mg(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(a));
    const r = t?.guillotineState?.segmentCutOrder;
    return (Cl(s, i, r) || Pl(s, i)) && (o += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function yg(t) {
  if (!this.props.stock || !t || !this.settings.main) return !1;
  let e;
  if (!t.willItFit(this.props.stock.value, t.rot)) return !1;
  const i = dp(
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
      const l = hl(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(l, a).join(
        (c) => c.append("line").call((u) => o.call(this, u)),
        (c) => c.call((u) => o.call(this, u)),
        (c) => c.remove()
      );
    }
    s = fp(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new ni();
  for (const a of i.toArray()) {
    const o = pl(t, a, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const a = s.toArray();
    for (const o of a) {
      const r = cp(t, o, this.props.stock.value);
      r && n.addPoints(r.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new Qe(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new Qe(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new Qe(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      0 + (this.props.stock.value.trim.w1 ?? 0)
    ),
    new Qe(
      0 + (this.props.stock.value.trim.l1 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    ),
    new Qe(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    )
  ].forEach((a) => n.add(a)), e = n.toArray()) : (n.add(new Qe(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = n.toArray());
  for (let a = e.length; a--; ) {
    const o = e[a];
    t.x = o.x, t.y = o.y;
    for (const r of this.props.shapes.value)
      if (this.collision(t, r, this.props.stock.value)) {
        e.splice(a, 1);
        break;
      }
  }
  return bg.call(this, e, t), vg.call(this, e, t), !!e?.length;
}
function bg(t, e) {
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
      n.stopPropagation(), st(this).classed("hover", !0), st(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), st(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function vg(t, e) {
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
      n.stopPropagation(), st(this).classed("hover", !0);
      const a = st(this).attr("data-id"), o = st(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), st(this).classed("hover", !1);
      const a = st(this).attr("data-id");
      st(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function wg() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Vo.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => Vo.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => No.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => No.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => Go.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => Go.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => qo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${r})`;
    }),
    (t) => t.text((e) => qo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
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
function No(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function Go(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.l, o: this.numberConfig }).toString();
}
function qo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : K({ v: t.w, o: this.numberConfig }).toString();
}
const Sg = (t) => t.id;
function xg() {
  if (!this.props.containerWidth) return;
  us.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Ig.call(this), kg.call(this);
}
function kg() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Sg).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return zo.call(this, e), Wo.call(this, e), e.on("mousedown", Ho.bind(this)), e;
    },
    (t) => (zo.call(this, t), Wo.call(this, t), t.on("mousedown", Ho.bind(this)), t),
    (t) => t.remove()
  ), Fg.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => wg.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Ig() {
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
  this.scales.scoreColorScale = as([qt(251, 224, 255), qt(122, 0, 138)]).domain([i, s]);
}
function zo(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => ds.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = ur(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Cg(t) {
  return {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1",
    l1: "w1",
    l2: "w2",
    w1: "l2",
    w2: "l1"
  }[t] || t;
}
function Wo(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = st(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = st(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", ds.call(this, i));
  }, { passive: !0 });
}
function Ho(t, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Pg.call(this, t, e), (this.settings.app || this.settings.embed) && Og.call(this, t, e), this.state.device === "desktop" && (In.call(this), ig.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
}
function Pg(t, e) {
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
        ], Ag.call(this, e);
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
    console.table(Tg(e, i));
  }
}
function Tg(t, e) {
  return e.reduce((i, s) => {
    const n = Mg(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function Ag(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Og(t, e) {
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
  const e = qt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return qt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return qt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((r, l) => Math.round(r + t.guillotineState.myPhase / 5 * (a[l] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return qt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return qt(139, 171, 46);
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
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), qt(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? qt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
}
const Ol = 3;
function $g(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let o = n;
        i.rot && (o = Cg.call(this, n));
        const r = Lg.call(this, i, o);
        r && e.push(r);
      }
  }
  return e;
}
function Uo(t) {
  return t.attr("class", "banding").attr("x1", (e) => this.scales.xPositionScale(e.l1) + Fs.call(this, e.type, "x")).attr("x2", (e) => this.scales.xPositionScale(e.l2) + Fs.call(this, e.type, "x")).attr("y1", (e) => this.scales.yPositionScale(e.w1) + Fs.call(this, e.type, "y")).attr("y2", (e) => this.scales.yPositionScale(e.w2) + Fs.call(this, e.type, "y")).attr("stroke-width", Ol).attr("stroke", "white");
}
function Fg(t) {
  if (!this.settings.main) return;
  const e = $g.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Uo.call(this, s)),
    (i) => i.call((s) => Uo.call(this, s)),
    (i) => i.remove()
  );
}
function Fs(t, e) {
  return {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[t]?.[e] ?? 0;
}
function Lg(t, e) {
  const i = Ol / 2, s = {
    l1: t.x,
    l2: t.x,
    w1: t.y,
    w2: t.y,
    type: e
  };
  switch (e) {
    case "l1":
      s.l1 = s.l2 = t.x + i, s.w2 = t.y + t.w;
      break;
    case "l2":
      s.l1 = s.l2 = t.x + t.l - i, s.w2 = t.y + t.w;
      break;
    case "w1":
      s.w1 = s.w2 = t.y + i, s.l2 = t.x + t.l;
      break;
    case "w2":
      s.w1 = s.w2 = t.y + t.w - i, s.l2 = t.x + t.l;
      break;
    default:
      return null;
  }
  return s;
}
function Eg(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Yo = (t) => t.id;
function Ko(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Zo(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Dg() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), sg.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Yo).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Ko.call(this, e)),
    (t) => t.call((e) => Ko.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Yo).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => Zo.call(this, e)),
    (t) => t.call((e) => Zo.call(this, e)),
    (t) => t.remove()
  );
}
function Rg(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function Mg(t, e) {
  return _e(t, e);
}
class _g {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = st(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: Dt(),
      yScale: Dt(),
      yPositionScale: Dt(),
      xPositionScale: Dt(),
      yAxisScale: Dt(),
      measurementScale: Dt(),
      shapeColorScale: as(),
      scoreColorScale: as()
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
    }, s = (n, a) => qt("#" + (Rg(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = as([
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
      this.selections.svgCanvas = st(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, i, s) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), i && (this.numberConfig.decimalPlaces = i), s && (this.numberConfig.fractionRoundTo = s));
  }
  formatNumber = (e) => {
    const i = K({
      v: e,
      o: this.numberConfig
    });
    if (i !== null) return i.toString();
  };
  trimNameToFit(e, i) {
    function s(n, a, o) {
      const r = o[a], l = st(r);
      l.text(n.name);
      let c = l.text();
      const u = l.node();
      if (!u) return;
      let f = u.getComputedTextLength();
      const g = this.getWidthAttribute(n) - 20;
      for (; f > g && c.length > 0; )
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
    const i = st(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = st(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    xg.call(this);
  }
  drawStock() {
    Dg.call(this);
  }
  drawCuts() {
    dg.call(this);
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
    return Se(e) && e !== null ? e.bladeWidth : 0;
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
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), rg.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), In.call(this);
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
    Eg.call(this);
  }
  drawPositions(e) {
    yg.call(this, e);
  }
  showCut(e) {
    gg.call(this, e);
  }
  resetCuts() {
    Tl.call(this);
  }
}
const Bg = ["id"], jg = /* @__PURE__ */ De({
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
      getCuts: g
    } = Da(), m = t, I = i, L = (Q) => {
      I("part-click", Q);
    }, E = (Q) => {
      I("shape-colour-update", Q);
    }, C = (Q, Ze) => {
      Q?.autoId && I("shape-select", Q.autoId, Ze);
    }, A = (Q) => {
      Q && I("add-to-parts-bin", Q);
    }, $ = (Q, Ze) => {
      Q && I("move-shape", Q, Ze);
    }, x = te(0), j = te(0), D = te(null);
    let F, W = te(!1);
    const V = bt({
      debug: ""
    });
    Kt(() => N());
    const y = X(() => ({
      format: m.numberFormat,
      decimals: m.decimalPlaces
    })), M = X(() => m.stockAutoId ? c(m.stockAutoId) : n.value), J = X(() => m.stockAutoId ? u(m.stockAutoId) : a.value), ae = X(() => m.main ? m.stockAutoId ? g(m.stockAutoId) : o.value : []), T = X(() => m.main ? m.stockAutoId ? f(m.stockAutoId) : r.value : []);
    nr(D, (Q) => {
      const Ze = Q[0], { width: yt, height: Xt } = Ze.contentRect;
      yt > 0 && (x.value = yt), I("resize", { width: yt, height: Xt });
    }), uc(
      x,
      (Q) => {
        F && (Q <= 0 || (F.setDevice(), F.resetShapeAxes(), F.drawAll(), l.value !== null && (F.toggleSegments(!0), F.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let _ = !1;
    Me(() => M.value, (Q) => {
      Q && (x.value <= 0 || (_ = !0, F.setDevice(), F.resetCuts(), F.removeSegments(), F.drawStock(), F.drawShapes(), F.drawCuts(), Pt(() => _ = !1)));
    }, { immediate: !1 }), Me(() => J.value, (Q) => {
      _ || Q && (x.value <= 0 || (F.setDevice(), F.drawShapes()));
    }, { immediate: !1, deep: !0 }), m.main && (Me(() => ae.value, () => {
      _ || x.value <= 0 || F.drawCuts();
    }, { immediate: !1, deep: !0 }), Me(l, () => {
      l.value !== null && (x.value <= 0 || (F.toggleSegments(!0), F.showCut(l.value)));
    }, { immediate: !1 }), Me(y, (Q) => {
      F.updateNumberFormat(Q.format, Q.decimals, null);
    }, { immediate: !1 }));
    const N = () => {
      const Q = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${m.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: m.numberFormat,
          decimalPlaces: m.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: m.colors || null,
        settings: {
          main: m.main,
          app: m.app,
          embed: m.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: j,
          containerWidth: x,
          stock: M,
          shapes: J,
          cuts: ae,
          segments: T,
          stockList: s.stockList,
          moveMode: m.moveMode,
          app: m.app
        },
        options: {
          disableClick: m.disableClick,
          enableStretch: m.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: E,
          onShapeSelect: C,
          onAddToPartsBin: A,
          onMoveShape: $,
          onPartClick: L
        }
      };
      F = new _g(Q), V.debug = F.state.debug, W.value = !0;
    }, z = (Q = !1) => {
      F && F.toggleShapes(Q);
    }, Y = (Q = !1) => {
      F && F.toggleCuts(Q);
    }, oe = (Q = !1) => {
      F && F.toggleSegments(Q);
    }, pe = () => {
      F && F.drawShapes();
    }, ce = () => {
      F && F.drawStock();
    }, re = () => {
      F && (F.toggleSegments(!1), F.resetCuts());
    }, Pe = (Q) => {
      F && (F.toggleSegments(!0), F.showCut(Q));
    }, U = (Q) => {
      F && F.drawPositions(Q);
    }, at = () => {
      F && F.removePositions();
    }, $t = (Q) => {
      F && F.findShape(Q);
    }, gi = () => {
      F && F.clearSelection();
    }, jt = (Q) => {
      F && F.requiresStretch(Q);
    };
    return Me(() => V.debug, (Q) => {
      F?.state && (F.state.debug = Q);
    }), e({
      loaded: W,
      toggleShapes: z,
      toggleCuts: Y,
      toggleSegments: oe,
      drawShapes: pe,
      drawStock: ce,
      drawPositions: U,
      resetPositions: at,
      findShape: $t,
      clearSelection: gi,
      resetCuts: re,
      showCut: Pe,
      requiresStretch: jt,
      state: V
    }), (Q, Ze) => (S(), P("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: D,
      class: Ie([{ app: t.app }, "diagram-container"])
    }, null, 10, Bg));
  }
}), Vg = { class: "action-menu" }, Ng = ["textContent"], Gg = {
  key: 0,
  class: "menu-divider"
}, qg = {
  key: 1,
  class: "group-label"
}, zg = /* @__PURE__ */ De({
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
    const i = t, s = e, { isOpen: n, close: a, toggle: o } = kc(i.menuId), r = te(), l = te(), c = X(() => i.disabled), u = X(() => i.label), f = X(() => i.showLabel), g = X(() => i.icon), { floatingStyles: m } = dc(r, l, {
      placement: i.placement,
      whileElementsMounted: iu,
      middleware: [
        Qc(i.offset),
        eu(),
        tu({ padding: 8 })
      ]
    }), I = (y) => {
      if (!y) return ["fas", "question"];
      if (typeof y == "function" && (y = y(i)), Array.isArray(y))
        return y;
      if (typeof y == "string") {
        const M = y.split(" ");
        if (M.length >= 2) {
          const J = M[0], ae = M.slice(1).join("-").replace("fa-", "");
          return [J, ae];
        }
        return ["fas", y.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, L = X(() => I(g.value)), E = (y) => typeof y.active == "function" ? y.active(i) : typeof y.active == "boolean" ? y.active : !1, C = (y) => {
      if (!y.href) return !1;
      try {
        const M = typeof y.href == "function" ? y.href(i) : y.href;
        return new URL(M, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, A = (y) => y.href ? "a" : "div", $ = (y) => {
      const M = {};
      if (y.href) {
        const J = typeof y.href == "function" ? y.href(i) : y.href;
        if (M.href = J, C(y)) {
          const ae = typeof y.target == "function" ? y.target(i) : y.target;
          M.target = ae || "_blank", M.rel = y.rel || "noopener noreferrer";
        } else if (y.target) {
          const ae = typeof y.target == "function" ? y.target(i) : y.target;
          M.target = ae;
        }
        y.rel && (M.rel = y.rel);
      }
      return y.attrs && Object.assign(M, y.attrs), M;
    }, x = X(() => i.menuItems.map((y) => {
      const M = { ...y };
      return typeof y.href == "function" && (M.href = y.href(i)), typeof y.icon == "function" && (M.icon = y.icon(i)), typeof y.disabled == "function" && (M.disabled = y.disabled(i)), typeof y.label == "function" && (M.label = y.label(i)), typeof y.variant == "function" && (M.variant = y.variant(i)), typeof y.active == "function" && (M.active = y.active(i)), typeof y.target == "function" && (M.target = y.target(i)), typeof y.show == "function" && (M.show = y.show(i)), M;
    })), j = (y) => {
      y.stopPropagation(), y.preventDefault(), !c.value && o();
    }, D = (y, M) => {
      if (M.stopPropagation(), y.disabled && !y.href) {
        M.preventDefault();
        return;
      }
      if (typeof y.action == "function" && y.action(y) === !1 && y.href) {
        M.preventDefault();
        return;
      }
      s("action", {
        id: y.id,
        item: y
      }), y.href && i.closeOnLinkClick ? a() : y.href || a();
    }, F = (y) => {
      const M = [];
      if (y.variant) {
        const ae = typeof y.variant == "function" ? y.variant(i) : y.variant;
        M.push(`variant-${ae}`);
      }
      if ((typeof y.disabled == "function" ? y.disabled(i) : y.disabled) && !y.href && M.push("disabled"), E(y) && M.push("active"), y.href && M.push("menu-link"), C(y) && M.push("external-link"), y.class) {
        const ae = typeof y.class == "function" ? y.class(i) : y.class;
        M.push(ae);
      }
      return M.join(" ");
    }, W = (y) => {
      const M = y.target;
      n.value && r.value && l.value && !r.value.contains(M) && !l.value.contains(M) && a();
    }, V = (y) => {
      y.key === "Escape" && n.value && a();
    };
    return Kt(() => {
      document.addEventListener("click", W), document.addEventListener("keydown", V);
    }), hs(() => {
      document.removeEventListener("click", W), document.removeEventListener("keydown", V);
    }), (y, M) => (S(), P("div", Vg, [
      O("div", {
        ref_key: "trigger",
        ref: r,
        onClick: j,
        class: Ie(["actions-btn", { active: k(n), disabled: c.value }])
      }, [
        g.value ? (S(), ve(k(Ns), {
          key: 0,
          icon: L.value,
          class: "icon"
        }, null, 8, ["icon"])) : H("", !0),
        f.value ? (S(), P("span", {
          key: 1,
          class: "label",
          textContent: Z(u.value)
        }, null, 8, Ng)) : H("", !0)
      ], 2),
      (S(), ve(Ea, { to: "body" }, [
        k(n) && !c.value ? (S(), P("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: Je(k(m)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: M[0] || (M[0] = ar(() => {
          }, ["stop"]))
        }, [
          (S(!0), P(Te, null, Be(x.value, (J, ae) => (S(), P(Te, { key: ae }, [
            J.type === "divider" ? (S(), P("div", Gg)) : J.type === "group" ? (S(), P("div", qg, Z(J.label), 1)) : J.show !== !1 ? (S(), ve(fc(A(J)), wi({
              key: 2,
              ref_for: !0
            }, $(J), {
              onClick: (T) => D(J, T),
              id: J.id,
              class: ["menu-item", F(J)],
              disabled: J.disabled && !J.href
            }), {
              default: Ii(() => [
                J.icon || E(J) ? (S(), ve(k(Ns), {
                  key: 0,
                  icon: E(J) ? ["fass", "check"] : I(J.icon)
                }, null, 8, ["icon"])) : H("", !0),
                O("span", null, Z(J.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : H("", !0)
          ], 64))), 128))
        ], 4)) : H("", !0),
        k(n) && !c.value ? (S(), P("div", {
          key: 1,
          class: "backdrop",
          onClick: M[1] || (M[1] = //@ts-ignore
          (...J) => k(a) && k(a)(...J))
        })) : H("", !0)
      ]))
    ]));
  }
}), Xo = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = Va(t);
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
function Wg({
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
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Ku(r, "decimal", u);
    }
    const c = String(r);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return Xo(c, t.type, t.numberFormat);
        try {
          const u = K({
            v: r,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let f = u, g = !0, m;
            return typeof t.min == "number" && f < t.min && (f = t.min, g = !1, m = "below_min"), typeof t.max == "number" && f > t.max && (f = t.max, g = !1, m = "above_max"), { value: f, valid: g, message: m };
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
          return Xo(c, t.type);
        try {
          const f = K({
            v: r,
            nf: "decimal"
          });
          if (f === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let g = f;
          if (t.type === "integer" && (g = Math.round(g)), t.allowZero === !1 && g === 0)
            return {
              value: g,
              valid: !1,
              message: "zero_not_allowed"
            };
          let m = !0, I;
          return typeof t.min == "number" && g < t.min && (g = t.min, m = !1, I = "below_min"), typeof t.max == "number" && g > t.max && (g = t.max, m = !1, I = "above_max"), { value: g, valid: m, message: I };
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
          if (!Va(c)) {
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
function Hg({
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
function Ug({
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
const Yg = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Kg = /* @__PURE__ */ De({
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
    } = Ug({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, f) => (S(), P("input", {
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
      (...g) => k(r) && k(r)(...g)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...g) => k(l) && k(l)(...g)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...g) => k(c) && k(c)(...g))
    }, null, 40, Yg));
  }
}), Zg = ["for"], Ls = /* @__PURE__ */ De({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (S(), P("label", {
      for: t.id,
      class: "input-label"
    }, Z(t.label), 9, Zg));
  }
}), Xg = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Jg = ["disabled", "selected"], Qg = {
  key: 0,
  value: " "
}, em = ["hidden", "value", "disabled"], tm = /* @__PURE__ */ De({
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
    } = Hg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (S(), P("select", wi(l.$attrs, {
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
      }, Z(i.text?.select?.toUpperCase() ?? "SELECT"), 9, Jg),
      i.multiEdit ? (S(), P("option", Qg, Z(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : H("", !0),
      (S(!0), P(Te, null, Be(o.value, (u) => (S(), P("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, Z(u.label), 9, em))), 128))
    ], 16, Xg));
  }
}), im = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], $l = /* @__PURE__ */ De({
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
      handleCompositionStart: g,
      handleCompositionEnd: m,
      handlePaste: I
    } = Wg({
      props: i,
      emit: s,
      isMounted: n
    }), L = (E) => {
      const C = E.getBoundingClientRect(), A = window.getComputedStyle(E);
      return C.width > 0 && C.height > 0 && A.display !== "none" && A.visibility !== "hidden";
    };
    return Kt(() => {
      (Se(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && L(a.value) && Pt(() => a.value.focus());
    }), hs(() => {
      n.value = !1;
    }), (E, C) => (S(), P("input", wi(E.$attrs, {
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
      onInput: C[0] || (C[0] = //@ts-ignore
      (...A) => k(o) && k(o)(...A)),
      onFocus: C[1] || (C[1] = //@ts-ignore
      (...A) => k(c) && k(c)(...A)),
      onBlur: C[2] || (C[2] = //@ts-ignore
      (...A) => k(u) && k(u)(...A)),
      onKeydown: C[3] || (C[3] = //@ts-ignore
      (...A) => k(f) && k(f)(...A)),
      onCompositionstart: C[4] || (C[4] = //@ts-ignore
      (...A) => k(g) && k(g)(...A)),
      onCompositionend: C[5] || (C[5] = //@ts-ignore
      (...A) => k(m) && k(m)(...A)),
      onPaste: C[6] || (C[6] = //@ts-ignore
      (...A) => k(I) && k(I)(...A)),
      onMousedown: C[7] || (C[7] = //@ts-ignore
      (...A) => k(r) && k(r)(...A)),
      onMouseup: C[8] || (C[8] = //@ts-ignore
      (...A) => k(l) && k(l)(...A))
    }), null, 16, im));
  }
}), sm = ["data-field-id"], nm = {
  key: 0,
  class: "input-label-group"
}, am = ["disabled", "selected"], om = {
  key: 0,
  value: " "
}, rm = ["hidden", "value", "disabled"], ki = /* @__PURE__ */ De({
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
    const i = e, s = t, n = te(null), a = te(null), o = te(!0), r = te(s.numberFormat), l = X(() => s.custom ? "custom-" + s.id : s.id), c = X(() => `${l.value}-error`), u = X(() => s.label || s.placeholder), f = X(() => y(s.type, s.numberFormat)), g = X(() => M(s.type, s.numberFormat)), m = X(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), I = X(() => {
      let T = s.value;
      if (s.type !== "unitDependent" || !T) return T;
      try {
        return K({ v: T, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), L = X(() => s.options.map((T) => ({
      value: T.value,
      label: T.label || T.value?.toString(),
      hidden: T.hidden || !1,
      disabled: T.disabled || !1
    }))), E = X(() => L.value.map((T) => {
      const _ = T.label ? q(T.label) : T.value?.toString();
      return {
        ...T,
        // Translate the label key first, then uppercase the translated result
        label: _?.toUpperCase() || T.value?.toString().toUpperCase()
      };
    })), C = X(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), A = X(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), $ = X(() => ({
      ...A.value,
      type: s.type,
      inputMode: g.value,
      inputType: f.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), x = X(() => ({
      ...A.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), j = X(() => ({
      ...A.value,
      options: E.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), D = X(() => (s.text?.select || "SELECT").toUpperCase()), F = X(() => (s.text?.delete || "DELETE").toUpperCase()), W = (T) => {
      a.value = T;
    }, V = (T) => s.label && s.enableLabel && s.labelPosition === T, y = (T, _) => {
      switch (T) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return _ === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, M = (T, _) => {
      if (T === "unitDependent")
        return _ === "fraction" ? "text" : "decimal";
      switch (T) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, J = (T) => {
      i("update:value", T);
    }, ae = (T, _) => {
      T.valid === void 0 || T.valid === !0 ? (o.value = !0, i("validation", n.value, T)) : T.valid === !1 && T.message && (o.value = !1, console.warn(`Field validation error for field ${_} - ${T.message}`), i("validation", n.value, T));
    };
    return Me(() => s.numberFormat, (T, _) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && T !== _ && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const N = K({ v: s.value, nf: T });
            i("update:value", N);
          } catch {
            i("update:value", T === "decimal" ? 0 : "0");
          }
        r.value = T;
      }
    }), (T, _) => (S(), P("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ie(["input-wrapper", C.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (S(), P("div", nm, [
        V("first") ? (S(), ve(Ls, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : H("", !0),
        t.type === "checkbox" ? (S(), ve(Kg, wi({
          key: 1,
          ref: W,
          type: "checkbox"
        }, x.value, {
          value: t.value,
          "onUpdate:value": _[0] || (_[0] = (N) => i("update:value", N))
        }), null, 16, ["value"])) : H("", !0),
        V("last") ? (S(), ve(Ls, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : H("", !0)
      ])) : (S(), P(Te, { key: 1 }, [
        V("first") ? (S(), ve(Ls, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : H("", !0),
        m.value ? (S(), ve($l, wi({
          key: 1,
          ref: W
        }, $.value, {
          "input-type": f.value,
          "input-mode": g.value,
          value: I.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: ae,
          "onUpdate:value": J
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (S(), ve(tm, wi({
          key: 2,
          ref: W
        }, j.value, {
          "onUpdate:value": _[1] || (_[1] = (N) => i("update:value", N))
        }), {
          default: Ii(() => [
            O("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, Z(D.value), 9, am),
            t.multiEdit ? (S(), P("option", om, Z(F.value), 1)) : H("", !0),
            (S(!0), P(Te, null, Be(E.value, (N) => (S(), P("option", {
              key: N.value,
              hidden: N.hidden,
              value: N.value,
              disabled: N.disabled
            }, Z(N.label), 9, rm))), 128))
          ]),
          _: 1
        }, 16)) : H("", !0),
        V("last") ? (S(), ve(Ls, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : H("", !0)
      ], 64)),
      Gs(T.$slots, "default")
    ], 10, sm));
  }
}), lm = {
  key: 0,
  class: "action-bar"
}, cm = { class: "add-custom" }, um = ["disabled"], dm = ["disabled", "title", "onClick"], fm = {
  key: 1,
  class: "price"
}, hm = /* @__PURE__ */ De({
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
      getSelectOptions: g,
      getPriceDisplay: m,
      shouldShowDeleteButton: I,
      getLocationGroup: L,
      isLocationVisible: E,
      handleInputChange: C,
      handleDelete: A
    } = Ic({
      shape: ai(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: ai(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: ai(i, "locations"),
      locationGroups: ai(i, "locationGroups")
    }), {
      newCustomName: $,
      canAddCustomName: x,
      isActionMenuDisabled: j,
      customNameActions: D,
      handleAddCustomName: F,
      handleCustomNameAction: W
    } = Cc({
      extraType: i.extraType,
      customNames: ai(i, "customNames"),
      usedNames: ai(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: g,
      onCustomNameAdded: (Y) => s("custom-name-added", i.extraType, Y),
      onCustomNameDeleted: (Y) => s("custom-name-deleted", i.extraType, Y)
    }), {
      renderLocations: V,
      gridStyle: y,
      getInputId: M,
      getDeleteConfig: J
    } = Pc({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: u,
      getInputConfig: (Y, oe) => f(Y, oe),
      getAllInputConfig: (Y) => f("all", Y),
      getInputConfigForLocation: f,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: I,
      locations: ai(i, "locations"),
      locationGroups: ai(i, "locationGroups")
    }), ae = te(!1), T = X(() => (Y) => {
      const oe = L(Y);
      return oe === "all" || oe === "faces" || oe === "sides";
    }), _ = X(() => (Y) => Fa(i.extraType).includes(Y) ? Mo(Y) === "face" : !1), N = X(() => (Y) => Fa(i.extraType).includes(Y) ? Mo(Y) === "side" : !1), z = X(() => (Y) => i.shape.issues?.some((oe) => oe.category?.includes("extras") && oe.field?.some((pe) => pe[0] === "extras" && pe[1] === i.extraType && pe[2] === Y)) ?? !1);
    return Kt(() => {
      const oe = i.shape.extras?.[i.extraType];
      if (!oe || typeof oe != "object") {
        ae.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (o.value && !("faces" in oe)) {
        ae.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in oe)) {
        ae.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (Y, oe) => {
      const pe = hi("FontAwesomeIcon");
      return ae.value ? H("", !0) : (S(), P("div", {
        key: 0,
        class: Ie(["extras group", [t.extraType]]),
        style: Je({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (S(), P("div", lm, [
          O("div", cm, [
            Le($l, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: k($),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": oe[0] || (oe[0] = (ce) => $.value = ce || ""),
              onKeydown: hc(k(F), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            O("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !k(x),
              onClick: oe[1] || (oe[1] = //@ts-ignore
              (...ce) => k(F) && k(F)(...ce))
            }, " Add ", 8, um)
          ]),
          Le(zg, {
            "menu-items": k(D),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: k(j),
            onAction: k(W)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : H("", !0),
        O("div", {
          class: "inputs grid-layout",
          style: Je({ "grid-template-columns": k(y) })
        }, [
          (S(!0), P(Te, null, Be(k(V), (ce) => (S(), P(Te, { key: ce }, [
            k(E)(ce) ? (S(), P(Te, { key: 0 }, [
              O("div", {
                class: Ie(["label", {
                  "group-label": T.value(ce),
                  "face-label": _.value(ce),
                  "side-label": N.value(ce),
                  "has-validation-issue": z.value(ce)
                }])
              }, Z(k(c)(ce)), 3),
              (S(!0), P(Te, null, Be(t.allOptions, (re, Pe) => (S(), P("div", {
                key: `${ce}-${Pe}`,
                class: "input-cell"
              }, [
                Le(ki, wi({
                  id: k(M)(ce, Pe),
                  "data-field": `${t.extraType}-${ce}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Pe
                }, { ref_for: !0 }, k(f)(ce, Pe), {
                  "onUpdate:value": (U) => k(C)(ce, Pe, U)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              k(J)(ce).show ? (S(), P("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !k(J)(ce).enabled,
                title: k(J)(ce).ariaLabel,
                onClick: (re) => k(A)(ce)
              }, [
                Le(pe, { icon: ["fass", "trash"] })
              ], 8, dm)) : H("", !0),
              t.enablePricing ? (S(), P("div", fm, Z(k(m)(ce)), 1)) : H("", !0)
            ], 64)) : H("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), Ot = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
}, js = /* @__PURE__ */ Ot(hm, [["__scopeId", "data-v-0aa91058"]]), pm = {
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
}, gm = { id: "spinner" }, mm = ["width", "height"], ym = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function bm(t, e, i, s, n, a) {
  return S(), P("div", gm, [
    i.complete ? H("", !0) : (S(), P("svg", {
      key: 0,
      class: "loading",
      style: Je({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      or('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, mm)),
    i.complete ? (S(), P("svg", {
      key: 1,
      class: "complete",
      style: Je({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      O("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : H("", !0),
    i.showNumber ? (S(), P("div", ym, Z(i.number), 1)) : H("", !0)
  ]);
}
const Jo = /* @__PURE__ */ Ot(pm, [["render", bm]]), { addNotice: Ri } = Ra();
let ta = null;
function vm() {
  return ta || (ta = rr()), ta;
}
function Qo(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function wm(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = vm(), o = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = Qo(o), u = Qo(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const E = c.reduce((A, $) => A + ($.q || 1), 0), C = u.reduce((A, $) => A + ($.q || 1), 0);
      if (E > t.maxShapes || C > t.maxStock)
        return Ri({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return Ri({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return Ri({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let f;
    if (t.useInventory && t.selectedSaw)
      f = t.selectedSaw;
    else if (t.inputSaw instanceof el) {
      const E = t.inputSaw.validate();
      i.push(...E), f = t.inputSaw.toData();
    } else {
      f = t.inputSaw;
      const E = new Qr(f);
      i.push(...E.issues);
    }
    const g = n({
      saw: f,
      partTrim: K({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...g), t.useInventory) {
      if (t.materialStore)
        for (const E of c)
          E.material || i.push(new ie({
            item: E,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const E = a(f);
      i.push(...E);
    }
    if (l.length > 0) {
      l.forEach((C) => C.populateParentID(c));
      const E = Qh(l, c);
      i.push(...E);
    }
    await Sm(c, t, i);
    const m = _r(i);
    if (m.length > 0) {
      const E = {
        saw: m.filter((C) => C.category?.includes("saw")),
        stock: m.filter((C) => C.category?.includes("stock")),
        part: m.filter((C) => C.category?.includes("part") && !C.category?.includes("extras")),
        extras: m.filter((C) => C.category?.includes("extras")),
        group: m.filter((C) => C.category?.includes("group"))
      };
      for (const [C, A] of Object.entries(E))
        if (A.length > 0) {
          Ri({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: C }),
            additional: A.map(($) => e($.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const I = {
      inputSaw: f,
      inputShapes: c.map((E) => E.toData()),
      inputStock: u.map((E) => E.toData()),
      inputGroups: l.map((E) => E.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, L = kp.safeParse(I);
    return L.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", L.error.issues), Ri({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: L.error.issues.map((E) => `${E.path.join(".")}: ${E.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Ri({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Sm(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: o } of s) {
      if (e.extrasValidationRules && Ve.hasExtras(n, a)) {
        const c = Zp(n, a, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const f = Xp(a, u, c.message);
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
      const r = Kp(n, a, o, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((l) => {
        i.push(new ie({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: qe(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, l]]
        }));
      });
    }
}
class er {
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
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = be(e) ? e.bandingOptions : void 0;
    if (!i && !s && !n) return !1;
    if (i && i instanceof Rt) {
      const u = i.sides;
      if (u && typeof u == "object" && ("x1" in u || "x2" in u || "y1" in u || "y2" in u)) {
        const g = this.migrateSideNames(u);
        return i.sides = g, !0;
      }
      return !1;
    }
    const a = {}, o = {}, r = { sides: {} };
    if (i && typeof i == "object") {
      const u = this.migrateSideNames(i);
      for (const [f, g] of Object.entries(u))
        At.includes(f) && (a[f] = g);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [f, g] of Object.entries(u))
        At.includes(f) && (o[f] = g);
    }
    if (n && typeof n == "object") {
      n.all && (r.sides.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && At.includes(u) && f && (r.sides[u] = f);
    }
    const l = new Rt(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(o).length > 0 ? new Rt({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : be(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), be(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = be(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof vt)
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
    const l = new vt(Object.keys(a).length > 0 ? { faces: a } : {}), c = Object.keys(o).length > 0 ? new vt({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : be(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), be(e) && n && (e.finishOptions = r), !0;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(e) {
    const i = e.banding;
    if (i && typeof i == "object" && !(i instanceof Rt) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof Rt) && !("sides" in n) && !("faces" in n))
        return !0;
    }
    const s = e.finish;
    if (s && typeof s == "object" && !(s instanceof vt) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof vt) && !("sides" in n) && !("faces" in n))
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
          const n = Object.keys(i.sides).filter((a) => !At.includes(a));
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
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), be(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : be(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), be(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
function xm(t) {
  t?.type && delete t.type, km.call(this, t), Im.call(this, t), Cm.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => La(e));
}
function km(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Im(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Cm(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function La(t) {
  !t || typeof t != "object" || (er.needsMigration(t) && er.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Fl(t) {
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
function yS(t) {
  !t || typeof t != "object" || (xm(t), t.options && Fl(t.options), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => La(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && La(t));
}
const Vs = B({
  // Unique identifier for this group (used internally)
  id: b().min(1),
  // Display label for the group (shown in UI)
  label: b().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ee(b().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: d().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: R().optional().default(!1)
}), Pm = B({
  banding: ee(Vs).optional(),
  finish: ee(Vs).optional(),
  planing: ee(Vs).optional()
}).optional(), ia = B({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), sa = B({
  // Shape dimension constraints
  longSide: ia,
  shortSide: ia,
  t: ia,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: b().optional(),
  // Custom validation message (optional)
  message: b().optional()
}), Tm = B({
  banding: sa.optional(),
  finish: sa.optional(),
  planing: sa.optional()
}).optional(), Am = fe(["decimal", "fraction"]), Om = fe(Zr), $m = he([
  me(0),
  me(1),
  me(2)
]).catch(0), Fm = B({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: b().optional(),
  partB: b().optional(),
  partSelected: b().optional(),
  stock: b().optional(),
  text: b().optional(),
  // Checkout-specific colors
  button: b(),
  buttonText: b()
}), Lm = B({
  banding: R().default(!1),
  finish: R().default(!1),
  planing: R().default(!1),
  orientation: R().default(!1),
  diagram: R().default(!1),
  focus: R().default(!1),
  machining: R().default(!1),
  csvImport: R().default(!1),
  click: R().default(!1),
  partName: R().default(!1),
  progressNumber: R().default(!1)
  // imageUpload: z.boolean().default( false )
}), Em = B({
  // Localization
  locale: b().default("en-US"),
  currency: b().default("USD"),
  // Number formatting
  numberFormat: Am.default("decimal"),
  decimalPlaces: d().min(0).max(10).optional(),
  fractionRoundTo: d().optional(),
  // Stock configuration
  stockSelection: Om.optional(),
  stockGrain: Ui.optional(),
  // Part configuration
  minSpacing: Ka.optional(),
  maxParts: d().min(0).optional(),
  orientationModel: $m.default(0),
  minDimension: d().min(0).optional(),
  partTrim: d().min(0).optional(),
  // UI configuration
  debug: R().default(!1),
  enable: Lm.optional(),
  colors: Fm.optional(),
  // Custom fields
  customFields: ee(xe()).optional(),
  fieldOrder: ee(b()).optional(),
  // Extras location filtering
  bandingLocations: ee(Xn).optional(),
  finishLocations: ee(Xn).optional(),
  planingLocations: ee(Xn).optional(),
  // Extras location groups
  extrasLocationGroups: Pm,
  // Extras validation rules
  extrasValidationRules: Tm
});
fe([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const ss = we(
  b(),
  d().min(0)
).default({}), Dm = B({
  name: b().trim().min(1),
  thicknesses: ee(
    he([
      b().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      d()
    ])
  ).min(1)
}), na = B({
  labels: ee(b()),
  pricing: we(b(), d().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: xe().optional(),
  keys: ee(b()).optional(),
  // if not all the default keys should be set
  locations: ee(b()).optional(),
  // available locations for this extras type
  groups: ee(Vs).optional(),
  // custom location groups
  rules: xe().optional()
  // validation rules for this extras type
});
B({
  success: R(),
  price: d().optional(),
  error: b().optional(),
  cacheHit: R().optional()
});
B({
  valid: R(),
  errors: ee(b()),
  warnings: ee(b())
});
B({
  pricing: ss,
  labels: ee(b()),
  options: ee(ee(b())),
  // Simplified to string arrays only
  keys: ee(b()),
  maxLevels: d().min(1)
});
B({
  enableCaching: R().default(!0),
  enableLogging: R().default(!1),
  maxCacheSize: d().min(1).default(1e3)
});
const Rm = B({
  stockType: fe([...Zs]).optional(),
  bladeWidth: he([
    Ya,
    b()
  ]).optional(),
  cutType: vn,
  cutPreference: wn,
  stackHeight: bn,
  guillotineOptions: Sn
}).optional();
B({
  l: d().nullable(),
  w: d().nullable(),
  t: he([d(), b()]).nullable().optional(),
  material: b().nullable().optional(),
  orientationLock: he([
    me("l"),
    me("w"),
    me(""),
    xt()
  ]).nullable().optional(),
  q: d().min(1).nullable().optional(),
  name: b().nullable().optional(),
  // Import existing schemas for extras
  banding: jr.optional(),
  finish: Vr.optional(),
  planing: Nr.optional(),
  // Custom data as record
  customData: we(b(), xe()).nullable().optional(),
  stockId: b().nullable().optional()
});
const Mm = B({
  // Required fields
  stock: ee(xi).default([]),
  options: Em,
  // Optional fields
  type: b().optional(),
  // variable | simple
  materials: ee(Dm).optional(),
  banding: na.optional(),
  finish: na.optional(),
  planing: na.optional(),
  machining: xe().optional(),
  bandingPricing: ss.optional(),
  finishPricing: ss.optional(),
  planingPricing: ss.optional(),
  machiningPricing: ss.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: xe().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Saw configuration
  saw: Rm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: B({
    enabled: R(),
    config: xe().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
}), _m = B({
  l: d(),
  w: d(),
  t: d().nullable(),
  q: d()
}), Bm = B({
  jobId: d(),
  metadata: Qa.optional(),
  parts: ee(ml),
  // Use lightweight mapped schema
  stock: ee(Sp),
  // Use lightweight mapped schema
  offcuts: ee(_m),
  inputs: B({
    parts: ee(wp)
    // Use lightweight input schema
  })
});
Bm.extend({
  checkout: B({
    formattedTotalStockCost: b(),
    formattedBandingCost: we(b(), b()),
    formattedFinishCost: we(b(), b())
  }).optional()
});
function jm(t) {
  const e = Mm.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function Vm(t) {
  const e = jm(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
const Nm = ["id", "data-index"], Gm = /* @__PURE__ */ De({
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
        l1: di(i.inputShape, "banding", "side.l1"),
        l2: di(i.inputShape, "banding", "side.l2"),
        w1: di(i.inputShape, "banding", "side.w1"),
        w2: di(i.inputShape, "banding", "side.w2")
      };
      const c = vd(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = bd(l, c, {
        l1: "w1",
        // This mapping defines how side keys transform on rotation
        l2: "w2",
        w1: "l2",
        w2: "l1"
      })), n.value = l;
    };
    Me([
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
    return Kt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", o);
    }), hs(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", o);
    }), (l, c) => (S(), P("div", {
      id: t.id,
      class: Ie(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: r
    }, [
      O("div", {
        class: Ie(["outer", {
          l1: n.value.l1,
          l2: n.value.l2,
          w1: n.value.w1,
          w2: n.value.w2
        }])
      }, [...c[0] || (c[0] = [
        O("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Nm));
  }
}), qm = ["id", "data-index", "disabled"], zm = /* @__PURE__ */ De({
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
    const i = t, s = e, n = X(() => i.inputShape ? di(i.inputShape, "finish", "face.a") : !1), a = X(() => i.inputShape ? di(i.inputShape, "finish", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = hi("FontAwesomeIcon");
      return S(), P("button", {
        id: t.id,
        class: Ie(["c-btn finish-button", {
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
        Le(c, { icon: ["fass", "spray-can"] })
      ], 10, qm);
    };
  }
});
function Wm(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Ll(t) {
  const e = Wm(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const Hm = De({
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
      return Ll(this.inputShape);
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
}), Um = ["id", "disabled"];
function Ym(t, e, i, s, n, a) {
  const o = hi("FontAwesomeIcon");
  return S(), P("button", {
    id: t.id,
    class: Ie(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Le(o, { icon: ["fass", "hammer"] })
  ], 10, Um);
}
const Km = /* @__PURE__ */ Ot(Hm, [["render", Ym]]), Zm = ["id"], Xm = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Jm = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Qm = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, ey = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, ty = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, iy = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, sy = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, tr = /* @__PURE__ */ De({
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
    const i = t, s = e, n = te(0), a = te(!1), o = (V, y, M, J) => {
      if (!be(M) || y === 0)
        return V;
      const ae = r();
      return y === 1 || y === 2 && J !== "n" && V ? ae : V;
    }, r = (V) => {
      const y = { ...i, ...V };
      if (!y.rectangle || !be(y.rectangle)) return "";
      let M = "";
      switch (y.orientationModel) {
        case 0:
          M = x.value;
          break;
        case 1:
          y.stockGrain === "y" || y.stockGrain === "n" ? M = y.rectangle.l >= y.rectangle.w ? "l" : "w" : y.rectangle.l >= y.rectangle.w ? M = y.stockGrain : M = M = y.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          M = y.rectangle.l >= y.rectangle.w ? "l" : "w";
          break;
      }
      return M;
    }, l = () => {
      if (console.log("🔵 OrientationButton clicked", {
        disabled: i.disabled,
        orientationOptionsLength: A.value.length,
        orientationOptions: A.value,
        currentOrientation: x.value,
        orientationIndex: n.value,
        orientationModel: i.orientationModel,
        rectangleType: i.rectangleType,
        stockGrain: i.stockGrain
      }), i.disabled) {
        console.log("❌ Click blocked: button is disabled");
        return;
      }
      if (A.value.length <= 1) {
        console.log("❌ Click blocked: not enough orientation options");
        return;
      }
      const V = c(x.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && x.value === "" && n.value !== V && n.value === 0 && (console.log("🔄 Syncing orientation index for multi-edit", { from: n.value, to: V }), n.value = V);
      let M = null;
      [1, 2].includes(i.orientationModel) ? (console.log("🔀 Toggling orientation (model 1 or 2)"), M = f()) : (console.log("🔄 Iterating through orientation options (model 0)"), M = u()), console.log("✅ Setting new orientation", {
        oldIndex: n.value,
        newIndex: M,
        oldValue: A.value[n.value],
        newValue: A.value[M]
      }), n.value = M;
    }, c = (V) => {
      const y = A.value.findIndex((M) => M === V);
      return y === -1 ? 0 : y;
    }, u = () => {
      let V = n.value + 1;
      return V > A.value.length - 1 && (V = 0), V;
    }, f = () => {
      let V = 0;
      if (x.value === "") {
        const y = r();
        V = A.value.findIndex((M) => M === y);
      } else
        V = A.value.findIndex((y) => y === "");
      return V;
    }, g = (V) => {
      console.log("📤 Emitting updateOrientation event", { newValue: V }), s("updateOrientation", V);
    }, m = () => {
      const V = x.value;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit)
        return V === " " ? " " : V === "" ? "" : V === "l" ? "l" : V === "w" ? "w" : "default";
      switch (i.orientationModel) {
        case 0:
          return V === " " ? " " : V ? i.stockGrain === "n" ? V || i.shapeOrientation || "default" : i.stockGrain === "w" ? V === "w" ? "w" : "l" : V === "l" ? "l" : "w" : "default";
        case 1:
          return V === " " ? " " : V ? i.stockGrain === "n" ? V || i.shapeOrientation || "default" : i.stockGrain === "w" ? V === "w" ? "w" : "l" : V === "l" ? "l" : "w" : "default";
        case 2:
          return V === " " ? " " : V ? i.stockGrain === "n" ? V || i.shapeOrientation || "default" : i.stockGrain === "w" ? V === "w" ? "w" : "l" : V === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, I = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !x.value) {
        E("");
        return;
      }
      const V = o(
        x.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (V !== x.value) {
        E(V);
        return;
      }
      if (!a.value || n.value === -1) {
        const y = c(x.value);
        n.value = y;
      }
      if (be(i.rectangle)) {
        if (i.orientationModel === 1) {
          const y = D.value ? r() : x.value;
          E(y);
          return;
        }
        if (i.orientationModel === 2) {
          let y;
          D.value ? y = i.stockGrain !== "n" ? r() : "" : y = x.value, E(y);
        }
      }
    }, L = te(!1), E = (V) => {
      const y = c(V);
      L.value = !0, n.value = y, L.value = !1, g(V);
    }, C = () => {
      const V = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], y = ["l", "w", "y", "n"], M = [0, 1, 2], J = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, ae = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, T = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, _ = [];
      V.forEach((N) => {
        y.forEach((z) => {
          M.forEach((Y) => {
            const oe = new Ah({
              l: N.l,
              w: N.w
            }), ce = r({
              orientationModel: Y,
              rectangle: oe,
              stockGrain: z
            });
            let re = "";
            oe.l === oe.w ? re = "l === w" : oe.l > oe.w ? re = "l >= w" : re = "w > l";
            const Pe = ["l", "w", "y"].includes(z) ? J : ae;
            _.push({
              Model: Y,
              "Stock grain": z,
              "Stock grain description": T[z],
              Dimensions: re,
              "Orientation lock": ce || "N/A",
              "Orientation Lock description": Pe[ce] || "N/A"
            });
          });
        });
      }), _.sort((N, z) => {
        if (N.Model !== z.Model)
          return N.Model - z.Model;
        if (N["Stock grain"] !== z["Stock grain"])
          return N["Stock grain"].localeCompare(z["Stock grain"]);
        const Y = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return Y[N.Dimensions] - Y[z.Dimensions];
      }), console.table(_);
    }, A = X(() => {
      if (!i.rectangle) return ["l", "w"];
      if (zt(i.rectangle)) return ["l", "w"];
      let V = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : ($.value && (V = V.filter((y) => y !== "w")), V);
    }), $ = X(() => be(i.rectangle) || Ni(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), x = X(() => {
      let V = "";
      if (zt(i.rectangle))
        V = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (be(i.rectangle))
        V = i.rectangle.orientationLock ?? "";
      else if (Ni(i.rectangle)) {
        const M = i.rectangle.grain ?? "";
        M === "l" || M === "w" || M === "" ? V = M : V = "";
      }
      return V;
    }), j = X(() => zt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), D = X(() => !j.value.l && !j.value.w), F = X(() => zt(i.rectangle) ? !1 : ra(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), W = X(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (Ni(i.rectangle) || i.rectangleType === "stock") {
        const ae = i.rectangle.grain;
        return "multiEdit" in i.rectangle && i.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ae] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ae] || "noGrain";
      }
      const V = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, y = i.stockGrain || "default";
      let M = "default";
      be(i.rectangle) || i.rectangleType === "shape" ? M = m() : zt(i.rectangle) && (M = i.rectangle.direction || "default");
      const J = V[y]?.[M];
      return J || V[y]?.default || "freeRotation";
    });
    return Me(n, (V, y) => {
      if (!a.value) {
        console.log("⏭️ Skipping: not mounted yet");
        return;
      }
      if (y === void 0) {
        console.log("⏭️ Skipping: oldIndex is undefined");
        return;
      }
      if (L.value) {
        console.log("⏭️ Skipping: updating programmatically");
        return;
      }
      g(A.value[V]);
    }, { immediate: !1 }), Me(j, (V, y) => {
      if (!i.rectangle || i.orientationModel === 0 || !be(i.rectangle) || be(i.rectangle) && (i.orientationModel === 2 && y.l && y.w && !x.value || i.stockGrain === "n" && !x.value))
        return;
      const M = r();
      x.value !== M && g(M);
    }, { immediate: !1 }), Me(() => i.stockGrain, (V, y) => {
      V !== y && I();
    }, { immediate: !0 }), Kt(() => {
      I(), Pt(() => {
        a.value = !0, i.debug && C();
      });
    }), (V, y) => (S(), P("button", {
      type: "button",
      id: t.id,
      class: Ie(["c-btn orientation-button", { rot: F.value, square: $.value, disabled: t.disabled, [W.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      W.value === "delete" ? (S(), P("svg", Xm, [...y[0] || (y[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : H("", !0),
      W.value === "noChange" ? (S(), P("svg", Jm, [...y[1] || (y[1] = [
        O("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : H("", !0),
      W.value === "freeRotation" ? (S(), P("svg", Qm, [...y[2] || (y[2] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : H("", !0),
      W.value === "leftRight" ? (S(), P("svg", ey, [...y[3] || (y[3] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : H("", !0),
      W.value === "topBottom" ? (S(), P("svg", ty, [...y[4] || (y[4] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : H("", !0),
      W.value === "grainLeftRight" ? (S(), P("svg", iy, [...y[5] || (y[5] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : H("", !0),
      W.value === "grainTopBottom" ? (S(), P("svg", sy, [...y[6] || (y[6] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : H("", !0)
    ], 10, Zm));
  }
}), ny = ["id", "data-index", "disabled"], ay = /* @__PURE__ */ De({
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
    const i = t, s = e, n = X(() => i.inputShape ? di(i.inputShape, "planing", "face.a") : !1), a = X(() => i.inputShape ? di(i.inputShape, "planing", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = hi("FontAwesomeIcon");
      return S(), P("button", {
        id: t.id,
        class: Ie(["c-btn planing-button", {
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
        Le(c, { icon: ["fass", "hammer-brush"] })
      ], 10, ny);
    };
  }
}), oy = {
  key: 0,
  class: "info"
}, ry = ["disabled"], ly = /* @__PURE__ */ De({
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
        const A = i.field.propertyPath || i.field.name;
        return A.includes(".") ? ci(i.item, A) ?? null : i.item[A] ?? null;
      } catch (A) {
        return console.error("[CheckoutField] Error getting field value:", A), null;
      }
    }), r = X(() => {
      const A = {
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
      const $ = A[i.field.type];
      return $ || "string";
    }), l = X(() => i.field.output ? i.field.output : null), c = X(() => i.field.options || []), u = X(() => !1), f = X(() => To(i.item, [i.field.name])), g = X(() => To(i.item, [i.field.name], !0)), m = X(() => i.multiEdit || !1), I = X(() => i.materialOptions?.length > 0 && be(i.item) ? !i.item.material : !1), L = X(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && o.value !== null && i.field.info[o.value] || null : null), E = (A) => {
      s("update", A);
    }, C = (A, $) => {
      s("validation", A, $);
    };
    return (A, $) => a.value ? (S(), P(Te, { key: 1 }, [
      t.field.name === "orientationLock" ? (S(), ve(tr, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "button-background": "#2c8d8f",
        onUpdateOrientation: E
      }, null, 8, ["rectangle", "stock-grain"])) : t.field.name === "grain" ? (S(), ve(tr, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        onUpdateOrientation: E
      }, null, 8, ["rectangle", "stock-grain"])) : t.field.name === "banding" ? (S(), ve(Gm, {
        key: 2,
        "input-shape": k(be)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: $[0] || ($[0] = (x) => A.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (S(), ve(zm, {
        key: 3,
        "input-shape": k(be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[1] || ($[1] = (x) => A.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (S(), ve(ay, {
        key: 4,
        "input-shape": k(be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[2] || ($[2] = (x) => A.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (S(), ve(Km, {
        key: 5,
        "input-shape": k(be)(t.item) ? t.item : null,
        onOpen: $[3] || ($[3] = (x) => A.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (S(), ve(ki, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: k(q)(t.field.label || "fields.material"),
        placeholder: k(q)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !1,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: k(q)("actions.select"),
          delete: k(q)("actions.delete")
        },
        "onUpdate:value": E,
        onValidation: C
      }, {
        default: Ii(() => [
          Gs(A.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (S(), ve(ki, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: k(q)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: I.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: k(q)("actions.select"),
          delete: k(q)("actions.delete")
        },
        output: "number",
        "onUpdate:value": E,
        onValidation: C
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (S(), P("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: $[4] || ($[4] = (x) => A.$emit("open-image-upload"))
      }, [
        Le(k(Ns), { icon: ["fass", "image"] })
      ], 8, ry)) : H("", !0)
    ], 64)) : (S(), ve(ki, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: o.value,
      label: k(q)(t.field.label || t.field.name),
      placeholder: k(q)(t.field.placeholder || t.field.name),
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
      warning: g.value,
      "disable-required-validation": m.value,
      "onUpdate:value": E,
      onValidation: C
    }, {
      default: Ii(() => [
        L.value ? (S(), P("p", oy, [
          Le(k(Ns), { icon: ["fass", "info-circle"] }),
          ns(" " + Z(L.value), 1)
        ])) : H("", !0),
        Gs(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), cy = {
  key: 0,
  class: "row table-heading"
}, uy = {
  key: 0,
  class: "cell center"
}, dy = { class: "cell" }, fy = {
  key: 0,
  class: "cell"
}, hy = ["onClick"], py = { class: "cell" }, gy = ["disabled", "aria-label", "onClick"], my = { class: "button-wrapper main" }, yy = ["aria-label"], by = ["aria-label", "disabled"], vy = ["aria-label"], wy = { id: "part-count" }, Sy = {
  key: 3,
  id: "messages"
}, xy = {
  key: 0,
  class: "heading"
}, ky = { class: "content" }, Iy = {
  key: 4,
  id: "progress"
}, Cy = { id: "diagram-wrapper" }, Py = {
  key: 0,
  id: "stack"
}, Ty = {
  key: 3,
  class: "debug"
}, aa = !1, Ay = /* @__PURE__ */ De({
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
    const s = _i(() => Promise.resolve().then(() => My)), n = _i(() => Promise.resolve().then(() => ib)), a = _i(() => Promise.resolve().then(() => lb)), o = _i(() => Promise.resolve().then(() => eo)), {
      inputs: r,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: f,
      validateInputShapeField: g,
      validateInputStockField: m,
      removeInputShape: I,
      addInputShape: L,
      addInputStock: E,
      cloneInputShape: C,
      updateInputShape: A,
      validationIssues: $,
      setExtrasOptionsFromPricing: x,
      getCentralizedOptions: j
    } = rr(), { r: D, updateFromResult: F, stackedStock: W, uniqueAddedShapes: V, uniqueUsedStock: y, activeStockAutoId: M, activeStock: J, setActiveStockAutoId: ae } = Da(), { progress: T, reset: _ } = Oc(), { addNotice: N } = Ra(), z = X(() => r.inputShapes.value.filter(be));
    function Y(h) {
      return h && ("x1" in h || "x2" in h || "y1" in h || "y2" in h ? {
        l1: h.x1 ?? h.l1,
        l2: h.x2 ?? h.l2,
        w1: h.y1 ?? h.w1,
        w2: h.y2 ?? h.w2
      } : h);
    }
    function oe(h) {
      if (!h || !Array.isArray(h)) return h;
      const v = {
        "side.x1": "side.l1",
        "side.x2": "side.l2",
        "side.y1": "side.w1",
        "side.y2": "side.w2"
      }, w = h.map((p) => v[p] || p);
      return JSON.stringify(h) !== JSON.stringify(w) && (console.log("[CheckoutCalculator] Migrating locations from:", h), console.log("[CheckoutCalculator] Migrated locations to:", w)), w;
    }
    const pe = (h) => {
      if (!h || !Array.isArray(h)) return [];
      if (h.some((w) => {
        const p = w.banding && typeof w.banding == "object" && !w.banding.sides, G = w.finish && typeof w.finish == "object" && !w.finish.faces;
        return p || G;
      })) {
        console.log("[CheckoutCalculator] Converting V2 format to internal format");
        const p = Mp({ parts: h });
        return p.parts && (p.parts = p.parts.map((G) => (G.banding?.sides && (G.banding.sides = Y(G.banding.sides)), G))), p.parts || [];
      }
      return h.map((w) => (w.banding?.sides && (w.banding.sides = Y(w.banding.sides)), w));
    }, ce = t, re = i, Pe = te(!1), U = "production", at = te(navigator?.language || "en-US"), $t = pc(null), gi = window.location.hostname, jt = te(!1), Q = te(!0), Ze = gc("Checkout/currentURL", window.location.href), yt = te(null), Xt = te(!1), Ti = te(!1), et = te(!1), le = te(!1), ue = te(!1), Ae = te(Bu()), Oe = te(!1), { socket: Xe } = Tc({
      refs: {
        connected: jt,
        thinking: et
      },
      callbacks: {
        onResult(h) {
          const v = h.optimisation;
          if (F(v), !v.shapeList?.length || !v.stockList?.length) {
            _(), N({
              type: "error",
              message: q("errors.calculation.no_result"),
              additional: [q("errors.validation.check_inputs")]
            }), et.value = !1;
            return;
          }
          if (yt.value = {
            jobId: h.jobId,
            metadata: D.metadata.value,
            parts: Do(V.value.map((w) => ({
              ...w,
              q: D.metadata.value?.addedPartTally?.[w.parentId],
              stock: { id: w?.stock?.id || w?.stockId }
            }))),
            stock: y.value.map((w) => ({
              id: w.id,
              name: w?.name,
              l: w.l,
              w: w.w,
              t: w?.t,
              material: w.material,
              q: D.metadata.value?.usedStockTally?.[w.parentId],
              trim: w?.trim,
              cost: w?.cost,
              analysis: w?.analysis
              // type: s?.type
            })),
            offcuts: D.offcuts?.value?.map((w) => ({
              l: w.l,
              w: w.w,
              t: w?.t ?? null,
              q: w.q,
              stockId: w.stockId
            })),
            inputs: {
              parts: Do(r.inputShapes.value)
            }
          }, D?.metadata?.value?.unplacedParts?.length) {
            const w = D.metadata.value.unplacedParts.map((p) => p.id).join();
            N({
              type: "warning",
              message: q("woodwork.parts_not_fit") + ": " + w
            });
          }
          yt.value && (console.log(yt.value), re("result", yt.value)), et.value = !1;
        },
        onUser(h) {
          $t.value = h;
        },
        onConnectError(h) {
          N({
            type: "error",
            message: q("errors.network.cannot_connect"),
            additional: [h]
          });
        },
        onError(h) {
          N({
            type: "error",
            message: q("errors.general.error_occurred"),
            additional: [h]
          });
        }
      }
    });
    function ot(h) {
      switch (h) {
        case "l":
          return "length";
        case "w":
          return "width";
        case "flex":
          return "efficiency";
        case "none":
          return null;
        default:
          return null;
      }
    }
    function Ai() {
      try {
        const h = cs.parse({});
        return {
          bladeWidth: typeof h.bladeWidth == "number" ? h.bladeWidth : 0,
          stackHeight: h.stackHeight || 100,
          cutPreference: ot(h.cutPreference),
          stockType: h.stockType || null,
          minSpacing: typeof h.options?.minSpacing == "number" ? h.options.minSpacing : 0,
          guillotineOptions: {
            headCuts: h.guillotineOptions?.headCuts || !1,
            strategy: h.guillotineOptions?.strategy || "efficiency",
            maxPhase: h.guillotineOptions?.maxPhase || 3
          }
        };
      } catch (h) {
        return console.warn("Failed to get InputSaw defaults from schema, using fallbacks:", h), {
          bladeWidth: 0,
          stackHeight: 100,
          cutPreference: null,
          stockType: null,
          minSpacing: 0,
          guillotineOptions: {
            headCuts: !1,
            strategy: "efficiency",
            maxPhase: 3
          }
        };
      }
    }
    Ai();
    const mi = {
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
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      maxParts: 10,
      locale: navigator?.language || "en-US",
      orientationModel: 0,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: null,
      stockGrain: null,
      partTrim: 0,
      currency: "USD",
      debug: !1
    }, ye = bt(mi), ct = bt({
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
    }), Oi = te(null), Cn = te(!1), Zi = te(""), Pn = te("");
    Me($, (h) => {
      h?.length > 0 ? (Cn.value = !0, Zi.value = "Validation Errors", Pn.value = h.map((v) => `${v.message} (${v.category.join(", ")})`).join(`

`)) : Zi.value === "Validation Errors" && (Cn.value = !1, Zi.value = "", Pn.value = "");
    }, { deep: !0 });
    const Ft = bt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Re = te([]), Ne = te([]), vs = te([]), Vt = bt({
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
    }), $e = bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), je = bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), Ge = bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), to = te(null), $i = bt({}), Fi = bt({}), Li = bt({}), Ml = X(() => ({
      banding: $i.rules,
      finish: Fi.rules,
      planing: Li.rules
    })), _l = X(() => Ac({
      stockType: ct.stockType,
      materials: Re.value,
      minDimension: ye.minDimension,
      ...ye.fieldOrder && ye.fieldOrder.length > 0 ? { allowedFieldIds: ye.fieldOrder } : {}
    })), io = te([]), so = te({
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
    }), Xi = X(() => _l.value.fields.value.filter((w) => so.value[w.name] ?? !0)), Ji = X(() => Xi.value.length + 2), Bl = X(() => {
      const h = {
        id: 34,
        del: 32
      }, v = {
        id: `${h.id}px`,
        del: `${h.del}px`
      }, w = [];
      for (const p of Xi.value) {
        if (p.name === "trim") continue;
        const G = p.w ?? "minmax(20px, 1fr)";
        w.push(G);
      }
      return w.unshift(v.id), w.push(v.del), w.join(" ");
    }), ws = X(() => ({
      "--btn-color": ye.colors.buttonText,
      "--btn-bg": ye.colors.button,
      "--btn-hover-bg": jl(ye.colors.button, -8),
      "--btn-focus-ring": ye.colors.button
    }));
    function jl(h, v) {
      const w = h.replace("#", ""), p = parseInt(w, 16), G = Math.round(2.55 * v), de = (p >> 16) + G, ke = (p >> 8 & 255) + G, He = (p & 255) + G;
      return `#${(16777216 + (de < 255 ? de < 1 ? 0 : de : 255) * 65536 + (ke < 255 ? ke < 1 ? 0 : ke : 255) * 256 + (He < 255 ? He < 1 ? 0 : He : 255)).toString(16).slice(1)}`;
    }
    const Vl = {
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
    }, no = X(() => $t.value ? !($t.value && $t.value?.api?.whiteLabel) : !0), Ss = {
      stockSelection: (h) => {
        const v = ["efficiency", "smallest"];
        h && !v.includes(h) ? console.warn(`${h} is not a valid stockSelection, expected ${v.join("|")}`) : ct.options.stockSelection = h;
      },
      minSpacing: (h) => {
        ct.options.minSpacing = h;
      },
      maxParts: (h) => {
        ye.maxParts = h;
      },
      locale: (h) => {
        at.value = h.replace(/_/g, "-");
      },
      enable: (h) => {
        const v = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const w in mi.enable)
          w in h && (ye.enable[w] = h[w]);
        for (const w in v)
          Nt(w, ci(h, [v[w]]) ?? mi.enable[v[w]]);
        ue.value = ci(h, ["csvImport"]) ?? mi.enable.csvImport;
      },
      colors: (h) => {
        for (const v in mi.colors)
          v in h && (ye.colors[v] = h[v]);
      },
      orientationModel: (h) => {
        if (![0, 1, 2].includes(h)) {
          ye.orientationModel = 0;
          return;
        }
        ye.orientationModel = h;
      },
      numberFormat: (h) => {
        if (!["decimal", "fraction"].includes(h)) {
          ye.numberFormat = "decimal";
          return;
        }
        ye.numberFormat = h;
      },
      customFields: (h) => {
        if (!Array.isArray(h) || !h?.length) return;
        const v = [];
        h.forEach((w, p) => {
          v.push(w), v[p].custom = !0;
          const G = ao(w.id);
          v[p].id = G, v[p].fieldMap = "customData." + G, w.type === "checkbox" && (v[p].w = "32px"), w.type === "select" && (v[p].output = w.output ?? "string", v[p].options = w.options);
        }), io.value = v, Pt(() => {
          for (const w of r.inputShapes.value)
            w.customData = h.reduce((p, G) => {
              const de = ao(G.id);
              return p[de] = w.customData[de] || G.default || "", p;
            }, {});
        });
      }
    }, Nl = (h) => {
      if (ce.debug && re("log", ["checkout init...", h]), h?.parts && (h.parts = pe(h.parts).map((p) => (p.extras?.banding?.sides && (console.log("[CheckoutCalculator] Migrating banding sides from:", p.extras.banding.sides), p.extras.banding.sides = Y(p.extras.banding.sides), console.log("[CheckoutCalculator] Migrated banding sides to:", p.extras.banding.sides)), p.extras?.finish?.sides && (p.extras.finish.sides = Y(p.extras.finish.sides)), p.extras?.planing?.sides && (p.extras.planing.sides = Y(p.extras.planing.sides)), p))), h?.stock && Array.isArray(h.stock) && (h.stock = h.stock.map((p) => p?.trim ? {
        ...p,
        trim: Y(p.trim)
      } : p)), h?.options && (h.options.bandingLocations && (h.options.bandingLocations = oe(h.options.bandingLocations)), h.options.finishLocations && (h.options.finishLocations = oe(h.options.finishLocations)), h.options.planingLocations && (h.options.planingLocations = oe(h.options.planingLocations)), h.options.extrasLocationGroups))
        for (const p of ["banding", "finish", "planing"]) {
          const G = h.options.extrasLocationGroups[p];
          G && Array.isArray(G) && G.forEach((de) => {
            de.locations && (de.locations = oe(de.locations));
          });
        }
      for (const p of ["banding", "finish", "planing"])
        if (h?.[p]) {
          const G = h[p];
          G.locations && Array.isArray(G.locations) && (G.locations = oe(G.locations)), G.groups && Array.isArray(G.groups) && G.groups.forEach((de) => {
            de.locations && (de.locations = oe(de.locations));
          });
        }
      if (h?.options && !h.saw) {
        const p = {};
        "bladeWidth" in h.options && (p.bladeWidth = h.options.bladeWidth), "cutType" in h.options && (p.cutType = h.options.cutType), "cutPreference" in h.options && (p.cutPreference = h.options.cutPreference), "guillotineOptions" in h.options && (p.guillotineOptions = h.options.guillotineOptions), "stackHeight" in h.options && (p.stackHeight = h.options.stackHeight), "stockType" in h.options && (p.stockType = h.options.stockType), Object.keys(p).length > 0 && (h.saw = p);
      }
      if (h?.saw?.cutPreference && ["efficiency", "length", "width", "beam"].includes(h.saw.cutPreference)) {
        const { cutType: G, cutPreference: de } = $p(h.saw.cutPreference);
        h.saw.cutType = G, h.saw.cutPreference = de;
      }
      let v;
      try {
        v = Vm(h);
      } catch (p) {
        re("error", p.message || "Invalid init data");
        return;
      }
      if (v.saw) {
        const p = v.saw;
        if (p.stockType !== void 0 && (Zs.includes(p.stockType) || console.warn(`${p.stockType} is not a valid stockType, expected ${Zs.join("|")}`), ct.stockType = p.stockType, p.stockType === "linear" && (ct.cutType = null, ct.cutPreference = null)), p.bladeWidth !== void 0) {
          const G = typeof p.bladeWidth == "string" ? parseFloat(p.bladeWidth) : p.bladeWidth;
          G >= 0 ? ct.bladeWidth = G : console.warn(`SmartCut - you provided an incorrect blade width of: ${p.bladeWidth}`);
        }
        if (p.cutType !== void 0 && (ct.cutType = p.cutType), p.cutPreference !== void 0 && (ua.includes(p.cutPreference) ? ct.cutPreference = p.cutPreference : console.warn(`SmartCut - cut preference ${p.cutPreference || "N/A"} is not valid. Expected: ${ua.join("|")}`)), p.guillotineOptions !== void 0 && typeof p.guillotineOptions == "object" && Object.assign(ct.guillotineOptions, p.guillotineOptions), p.stackHeight !== void 0) {
          const G = typeof p.stackHeight == "string" ? parseFloat(p.stackHeight) : p.stackHeight;
          ct.stackHeight = G;
        }
      }
      if (v?.options) {
        const p = v.options;
        Fl(p), v.saw ? ["stockType", "cutPreference", "bladeWidth"].forEach((ke) => {
          ke in v.saw || re("error", `${ke} is a required saw property`);
        }) : re("error", "saw configuration is required");
        const G = ["enable", "colors"];
        for (const de in p)
          G.includes(de) || (ye[de] = p[de]), de in Ss && Ss[de](p[de]);
      }
      if (v.options.colors && "colors" in Ss && Ss.colors(v.options.colors), v.banding) {
        const p = v.banding;
        "locations" in p && p.locations && ($i.locations = p.locations), "groups" in p && p.groups && ($i.groups = p.groups), "rules" in p && p.rules && ($i.rules = p.rules);
      }
      if (v.finish) {
        const p = v.finish;
        "locations" in p && p.locations && (Fi.locations = p.locations), "groups" in p && p.groups && (Fi.groups = p.groups), "rules" in p && p.rules && (Fi.rules = p.rules);
      }
      if (v.planing) {
        const p = v.planing;
        "locations" in p && p.locations && (Li.locations = p.locations), "groups" in p && p.groups && (Li.groups = p.groups), "rules" in p && p.rules && (Li.rules = p.rules);
      }
      Fn("banding", v), Fn("finish", v), Fn("planing", v), zl(v), ro(v), Ti.value = !0, ce.debug && re("log", ["init complete"]);
      const w = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(w), Pt(() => {
        no.value && !Ql() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Nt = (h, v = !1) => {
      so.value[h] = v;
    }, ao = (h) => h ? vu(h)?.toLowerCase() : null, Gl = (h, v, w) => {
      try {
        if (!h || !v) return;
        const p = w !== null && w !== "" && w !== void 0 && w !== 0;
        if (v === "material" && (!w || w === "")) {
          const ke = { material: null, t: null };
          A(h.autoId, ke) || (console.log("[CHECKOUT] Material update failed - using fallback"), ts(h, "material", null), ts(h, "t", null), h.isNew || h.validate());
          return;
        }
        if (h.isNew)
          if (p)
            h.isNew = !1;
          else {
            ts(h, v, w);
            return;
          }
        const G = { [v]: w };
        A(h.autoId, G) || (console.log("[CHECKOUT] Field update failed - using fallback"), ts(h, v, w), h.validate());
      } catch (p) {
        console.error("[CHECKOUT] Error updating field:", p);
      }
    }, ql = (h, v, w, p) => {
    }, zl = (h) => {
      if (ci(ye, ["enable", "machining"]) && h?.machining) {
        for (const v in Vt)
          h.machining[v] && (Vt[v] = h.machining[v]);
        if (["holes", "hingeHoles"].forEach((v) => {
          h?.machining?.[v] && (Vt[v].enabled = h?.machining?.[v].enabled);
        }), h?.machining?.corners?.types?.length && (Vt.corners.enabled = !0, Vt.corners.types = h.machining.corners.types), h.banding && h?.options?.enable?.banding) {
          if (!$e) return;
          Vt.banding = {
            enabled: !0
          }, $e.options.length && (Vt.banding.options = $e.options), $e.labels.length && (Vt.banding.labels = $e.labels), vo($e.pricing) && (Vt.banding.pricing = $e.pricing);
        }
      }
    }, Wl = (h = null) => {
      Oi.value = h, h && be(h) && h.l && h.w ? Pe.value = !0 : alert(q("machining.enter_dimensions_first"));
    }, Hl = () => {
      Pe.value = !1;
    }, oo = (h = []) => {
      if (Ne.value = [], vs.value = [], Nt("t", !1), !!h.length) {
        for (const v of h)
          if (v?.t)
            if (typeof v.t == "string" && v.t.includes(",")) {
              const w = lo(v.t, !0);
              w.length === 2 ? (Yl(w), Nt("t", !0), v.t = Ne.value[0]) : re("error", "bonded thickness found which does not have 2 options");
            } else Ne.value.includes(v.t) || Ne.value.push(v.t);
        Ne.value.length > 1 && Nt("t", !0);
      }
    }, Ul = (h) => {
      if (!h) return { thicknesses: [], bondedThicknesses: [] };
      if (!Re.value?.length)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      if (!h.material)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      const v = Re.value.find((G) => G.name === h.material);
      if (!v)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      const w = [...v.thicknesses], p = [];
      for (let G = 0; G < w.length; G++) {
        const de = w[G], ke = lo(de), He = [];
        if (ke.length) {
          for (const gt of ke)
            w[G] = gt, He.push(G);
          G++;
        }
        He.length && p.push(He);
      }
      return {
        thicknesses: w,
        bondedThicknesses: p
      };
    }, ro = (h) => {
      if (h?.stock?.some((v) => v?.material)) {
        Re.value = [], Ne.value = [], vs.value = [];
        const v = /* @__PURE__ */ new Map();
        for (const p of h.stock) {
          if (!p.material) continue;
          const G = p.material.toUpperCase();
          v.has(G) || v.set(G, /* @__PURE__ */ new Set()), p.t != null && v.get(G)?.add(K({ v: p.t }));
        }
        Re.value = Array.from(v.entries()).map(([p, G]) => ({
          name: p,
          thicknesses: Array.from(G).sort((ke, He) => ke - He)
        }));
        const w = /* @__PURE__ */ new Set();
        for (const p of Re.value)
          for (const G of p.thicknesses)
            w.add(K({ v: G }));
        Ne.value = Array.from(w).sort((p, G) => p - G), Re.value.length > 1 ? Nt("material", !0) : Nt("material", !1), Ne.value.length > 1 ? Nt("t", !0) : Nt("t", !1);
      } else
        oo(h.stock);
    }, Yl = (h, v = null) => {
      if (!Array.isArray(h)) {
        re("error", "addBondedThicknesses expects an array");
        return;
      }
      const w = [];
      for (let p of h)
        ye.numberFormat === "decimal" && (p = parseFloat(p)), Ne.value.push(p), v && v.thicknesses.push(p), w.push(Ne.value.length - 1);
      vs.value.push(w);
    }, Kl = (h) => {
      const { thicknesses: v } = Ul(h);
      return v?.length ? v.map((w) => ({
        label: w?.toString(),
        value: w
      })) : [];
    }, lo = (h, v = !1) => {
      if (typeof h == "string" && h.includes(",")) {
        const w = h.split(",");
        return v ? w.map((p) => K({ v: p })) : w;
      }
      return [];
    }, Zl = () => {
      Oe.value ? Jl() : Xl();
    }, Xl = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Oe.value = !0;
    }, Jl = () => {
      document.exitFullscreen && document.exitFullscreen(), Oe.value = !1;
    }, Ql = () => {
      if ($t.value?.api?.whiteLabel) return !0;
      let h = !0;
      const v = document.querySelector("#smartcut-checkout a#credit");
      if (!v) return h = !1;
      const w = window.getComputedStyle(v);
      return w.display === "none" || w.display === "hidden" || w.opacity === "0" || w.color === "transparent" || w.position !== "absolute" || w.color !== "#4e4e4e" && w.color !== "rgb(78, 78, 78)" ? h = !1 : (Q.value = h, h);
    }, Tn = X(() => typeof ce.findExtrasPrice == "function"), co = (h, v) => {
      let w, p;
      switch (v) {
        case "banding":
          w = $e.options, p = $e.labels;
          break;
        case "finish":
          w = je.options, p = je.labels;
          break;
        case "planing":
          w = Ge.options, p = Ge.labels;
          break;
        default:
          w = [], p = [];
      }
      yi(h, v, w, p);
    }, uo = (h) => {
      const v = Object.keys(h);
      return Math.max(...v.map((p) => p.split("|").length));
    }, Qi = (h, v, w) => {
      if (!h)
        return [];
      if (w > 0 && !v[w - 1])
        return [];
      const p = /* @__PURE__ */ new Set();
      for (const de of Object.keys(h)) {
        const ke = de.split("|");
        if (ke.length > w) {
          let He = !0;
          for (let gt = 0; gt < w; gt++) {
            const ut = v[gt], lt = ke[gt];
            if (ut && ut !== lt) {
              He = !1;
              break;
            }
          }
          He && p.add(ke[w]);
        }
      }
      return Array.from(p);
    }, An = (h, v, w, p) => {
      let G, de;
      switch (v) {
        case "banding":
          G = $e.options, de = $e.labels;
          break;
        case "finish":
          G = je.options, de = je.labels;
          break;
        case "planing":
          G = Ge.options, de = Ge.labels;
          break;
        default:
          G = [], de = [];
      }
      return ea(h, v, w, p, G, de);
    }, ec = (h, v, w) => {
      let p, G;
      switch (v) {
        case "banding":
          p = $e.options, G = $e.labels;
          break;
        case "finish":
          p = je.options, G = je.labels;
          break;
        case "planing":
          p = Ge.options, G = Ge.labels;
          break;
        default:
          p = [], G = [];
      }
      return ea(h, v, w, ce.findExtrasPrice, p, G);
    }, tc = te({}), ic = (h = 1) => {
      for (let v = h; v--; ) {
        let w = {
          l: null,
          w: ct.stockType === "linear" ? r.inputStock.value[0]?.w : null,
          t: Ne.value.length ? Ne.value[0] : null,
          q: 1,
          material: Re.value?.length === 1 ? Re.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const G = r.inputShapes.value[r.inputShapes.value.length - 1];
          w.material = G.material, w.t = G.t;
        }
        const p = L(w);
        p && ($e?.labels?.length && yi(p, "banding", $e.options, $e.labels), je?.labels?.length && yi(p, "finish", je.options, je.labels), Ge?.labels?.length && yi(p, "planing", Ge.options, Ge.labels));
      }
    }, On = (h = {}) => {
      const v = {
        q: 1,
        // Always set quantity to 1
        ...h
      }, w = L(v);
      return w && (ct.stockType === "linear" && r.inputStock.value[0]?.w && (w.w = r.inputStock.value[0].w), Ne.value.length && (w.t = Ne.value[0]), Re.value?.length === 1 && (w.material = Re.value[0].name), $e?.labels?.length && yi(w, "banding", $e.options, $e.labels), je?.labels?.length && yi(w, "finish", je.options, je.labels), Ge?.labels?.length && yi(w, "planing", Ge.options, Ge.labels)), w;
    }, sc = (h) => {
      if (Ne.value.length)
        for (const v of h) {
          if (!v.t) return;
          const w = Ne.value.findIndex(
            (de) => K({ v: de }) === v.t
          ), p = vs.value.find((de) => de.includes(w));
          if (!p) return;
          const G = Math.min(
            ...p.map((de) => Ne.value[de])
          );
          K({ v: v.t }) > G && (v.q = v.q * (K({ v: v.t }) / G), v.notes = `Bond to form ${v.t.valueOf()}`, v.t = G);
        }
    }, fo = () => {
      _(), ae(null), D.stockList.value = [], D.shapeList.value = [], D.cutList.value = [];
    }, $n = () => {
      r.inputShapes.value.length = 0;
    }, nc = async () => {
      if (re("calculating"), et.value) return !1;
      if (et.value = !0, le.value = !1, !(await wm({
        t: q,
        partTrim: ye.partTrim,
        maxShapes: ye.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: $e.pricing,
        finishPricing: je.pricing,
        planingPricing: Ge.pricing,
        findExtrasPrice: ce.findExtrasPrice,
        extrasValidationRules: Ml.value,
        onLimit: () => {
          N({
            type: "error",
            message: q("limits.max_parts") + " " + ye.maxParts
          });
        }
      })).valid) {
        re("validation-error"), et.value = !1;
        return;
      }
      fo();
      const v = r.inputShapes.value.map((p) => C(p)).filter(Boolean);
      if (v.length !== r.inputShapes.value.length)
        return N({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), et.value = !1, !1;
      sc(v), ce.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((p) => ({ l: p.l, w: p.w })),
        "parts",
        v.map((p) => ({ l: p.l, w: p.w }))
      );
      const w = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: v.map((p) => p.toData()),
        inputStock: r.inputStock.value.map((p) => p.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: gi,
        extrasOptions: j()
      };
      await Xe.connect(), Xe.emit("calculate", w);
    }, Fn = (h, v) => {
      if (Nt(h, !1), !h || !v || !v?.[h] || !ci(ye, ["enable", h])) return;
      const w = [h, "pricing"];
      if (!bo(v, w)) {
        re("error", `${w.join(".")} not found in sent data`);
        return;
      }
      const p = ci(v, w);
      if (typeof p != "object") {
        re("error", `${w.join(".")} data must be an object`);
        return;
      }
      if (!vo(p)) {
        re("error", `if provided, ${w.join(".")} data must contain some values`);
        return;
      }
      const G = Object.keys(p), de = Object.values(p);
      if (!G.length) {
        re("error", `no ${w.join(".")} pricing found`);
        return;
      }
      const ke = /,/;
      for (const lt of G)
        if (ke.test(lt)) {
          re("error", `${w} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (de.some((lt) => isNaN(lt))) {
        re("error", `${w} values must be a number`);
        return;
      }
      const He = uo(p), gt = [h, "labels"];
      let ut = [];
      if (bo(v, gt))
        ut = ci(v, gt);
      else {
        re("error", `${gt.join(".")} not found`);
        return;
      }
      if (!ut) {
        re("error", `${gt.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(ut)) {
        re("error", `${gt.join(".")} data must be an array`);
        return;
      }
      if (!ut?.length) {
        re("error", `if provided, ${gt.join(".")} data must contain values`);
        return;
      }
      if (ut.length !== He) {
        re("error", `${gt.join(".")} length (${ut.length}) must match the number of levels in ${w.join(".")} (${He})`);
        return;
      }
      switch (h) {
        case "banding": {
          $e.labels = ut, $e.pricing = p;
          const lt = Ln(p);
          $e.options = lt, x("banding", lt, ut, p);
          break;
        }
        case "finish": {
          je.labels = ut, je.pricing = p;
          const lt = Ln(p);
          je.options = lt, x("finish", lt, ut, p);
          break;
        }
        case "planing": {
          Ge.labels = ut, Ge.pricing = p;
          const lt = Ln(p);
          Ge.options = lt, x("planing", lt, ut, p);
          break;
        }
      }
      if (to.value = j(), Nt(h, !0), !!r.inputShapes.value?.length)
        for (const lt of r.inputShapes.value)
          co(lt, h);
    }, Ln = (h) => {
      const v = [], w = Object.keys(h), p = uo(h);
      for (let G = p; G--; ) v.push(/* @__PURE__ */ new Set());
      for (const G of w)
        G.split("|").forEach((ke, He) => v[He].add(ke));
      for (let G = 0; G < p; G++)
        v[G] = Array.from(v[G]);
      return v;
    }, xs = (h, v) => {
      if (!v) return;
      h !== "info" && Object.keys(Ft).forEach((p) => {
        p !== h && p !== "info" && (Ft[p] = null);
      });
      const w = r.inputShapes.value.indexOf(v);
      Ft[h] === w ? (Oi.value = null, Ft[h] = null, tc.value[h] = void 0) : (Oi.value = v, Ft[h] = w);
    }, ho = (h) => {
      if (re("log", ["load event received"]), !Ti.value) {
        re("log", ["load event received"]);
        return;
      }
      ac(h.detail);
    }, ac = (h) => {
      if (re("log", ["loading parts..."]), !h || !h?.inputs?.parts?.length) {
        re("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let v = 0;
      for (const p of h.inputs.parts) {
        const G = On(p);
        G ? G.issues?.length && re("log", [`SmartCut - issues found while importing part at index ${v}`, G.issues]) : re("log", [`SmartCut - error loading part at index ${v}`, p]), v++;
      }
      r.inputShapes.value.flatMap((p) => _r(p.issues)).length && N({
        type: "error",
        message: q("errors.general.issues_found")
      }), re("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, oc = (h) => {
      r.inputShapes.value.length = 0, Pt(() => {
        for (const v of h)
          v.t = r.inputStock.value?.[0]?.t ?? null, On(v);
      });
    };
    Me(() => ce.inputStock, (h) => {
      if (fo(), Array.isArray(h) || console.warn("SmartCut - stock must be passed as an array"), !!h?.length) {
        r.inputStock.value.length = 0, Re.value.length || oo(h);
        for (const v of h)
          E({
            ...v,
            autoAdd: !0
            // type: sawData.stockType
          }) || (console.error("Failed to add stock item:", v), N({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? Pt(() => {
            r.inputShapes.value.forEach((w) => {
              const p = w.material ? Re.value.find((G) => G.name === w.material) : null;
              if (p)
                p.thicknesses.includes(K({ v: w.t })) || (w.t = K({ v: p.thicknesses[0] }));
              else if (Re.value?.length === 1) {
                w.material = Re.value[0].name;
                const G = Re.value[0];
                G.thicknesses.includes(K({ v: w.t })) || (w.t = K({ v: G.thicknesses[0] }));
              } else if (Re.value?.length > 1 && w.t) {
                const G = Re.value.find((de) => de.thicknesses.some((ke) => K({ v: ke }) === K({ v: w.t })));
                G ? w.material = G.name : (w.material = Re.value[0].name, w.t = K({ v: Re.value[0].thicknesses[0] }));
              } else Re.value?.length > 1 ? (w.material = Re.value[0].name, w.t = K({ v: Re.value[0].thicknesses[0] })) : !w.t && r.inputStock.value[0]?.t && (w.t = K({ v: r.inputStock.value[0].t }));
            });
          }) : ce.inputType !== "formula" && Pt(() => L());
          const v = f(r.inputSaw.value);
          v.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(v))), N({
            type: "error",
            message: q("errors.validation.stock_issue"),
            additional: v.map((w) => w.message)
          }));
        }
      }
    }, { immediate: !0 }), Me(r.inputShapes, (h) => {
      re("inputs-changed"), h.forEach((v) => {
        ct.stockType === "linear" && (v.w = r.inputShapes.value[0]?.w);
        const w = Re.value.find((p) => p.name === v.material);
        w && (w.thicknesses.includes(K({ v: v.t })) || (v.t = K({ v: w.thicknesses[0] })));
      });
    }, { deep: !0 }), Me(() => ye.numberFormat, (h) => {
      u(h);
    }), Me(() => ct, (h) => {
      r.inputSaw.value = new el(h);
    }, { deep: !0 }), Kt(async () => {
      if (Xt.value) return;
      const h = new URL(window.location.href), v = h.searchParams.toString(), w = h.origin + h.pathname + (v ? `?${v}` : "");
      Ze.value !== w && $n(), Ze.value = w, at.value = ye.locale, await Xe.connect(), Xe.emit("getUserFromDomain"), window.addEventListener("smartcut/load", ho), Xt.value = !0, ce.debug && re("log", [
        "ready...",
        "fields:",
        Xi.value.map((p) => p.name)
      ]);
    });
    const rc = () => {
      Xe && Xe.disconnect();
    }, lc = (h, v) => {
      r.inputShapes.value.forEach((w) => {
        w.update({ material: h, t: v });
      }), console.log(r.inputShapes.value.map((w) => w.t)), re("log", [`Updated ${r.inputShapes.value.length} shapes with material: ${h}, thickness: ${v}`]);
    };
    return hs(() => {
      window.removeEventListener("smartcut/load", ho), rc(), delete window.smartcutCheckout;
    }), e({
      init: Nl,
      clear: $n,
      getAvailablePricingOptions: Qi,
      getExtrasPrice: ec,
      formatPrice: ce.formatPrice,
      findExtrasPrice: ce.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: co,
      createAndAddInputShape: On,
      updateShapeMaterialThickness: lc,
      initMaterialsThicknesses: ro
    }), (h, v) => {
      const w = hi("FontAwesomeIcon");
      return S(), P(Te, null, [
        Ti.value ? H("", !0) : (S(), ve(Jo, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        Oi.value?.machining && Pe.value ? (S(), ve(k(n), {
          key: 1,
          "input-shape": Oi.value,
          "onUpdate:inputShape": v[0] || (v[0] = (p) => Oi.value = p),
          translate: !0,
          options: Vt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": k(ea),
          "get-available-pricing-options": Qi,
          "format-price": t.formatPrice,
          onClose: Hl
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : H("", !0),
        Ti.value ? (S(), P("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ie(["smartcut-content", { fullscreen: Oe.value }])
        }, [
          Ae.value && !t.readonly ? (S(), P("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: Je(ws.value),
            onClick: v[1] || (v[1] = (p) => Zl())
          }, [
            Le(w, { icon: ["fass", "expand"] }),
            ns(" " + Z(k(q)("general.full_screen")), 1)
          ], 4)) : H("", !0),
          no.value ? (S(), P("a", {
            key: 1,
            id: "credit",
            style: Vl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, Z(k(gu)(k(q)("general.powered_by"))), 1)) : H("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Je({ "grid-template-columns": Bl.value })
          }, [
            k(r).inputShapes.value.length ? (S(), P("div", cy, [
              v[5] || (v[5] = O("div", { class: "cell id" }, null, -1)),
              (S(!0), P(Te, null, Be(Xi.value, (p) => (S(), P("div", {
                key: p.name,
                class: Ie(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(p.name) || p.type === "boolean" }])
              }, Z(k(q)(p.label)), 3))), 128)),
              k(U) === "development" && aa ? (S(), P("div", uy, " Info ")) : H("", !0),
              v[6] || (v[6] = O("div", { class: "cell del" }, null, -1))
            ])) : H("", !0),
            (S(!0), P(Te, null, Be(z.value, (p, G) => (S(), P("div", {
              key: G,
              class: "row inputs"
            }, [
              O("div", dy, [
                O("div", {
                  class: "id",
                  style: Je({
                    background: ye.colors.partA,
                    color: ye.colors.text
                  })
                }, Z(G + 1), 5)
              ]),
              (S(!0), P(Te, null, Be(Xi.value, (de) => (S(), P("div", {
                key: de.name,
                class: "cell"
              }, [
                p ? (S(), ve(ly, {
                  key: 0,
                  field: de,
                  item: p,
                  index: G,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": ye.numberFormat,
                  "stock-grain": k(c)(p),
                  "material-options": Re.value?.map((ke) => ({ label: ke.name, value: ke.name })) || [],
                  "thickness-options": de.name === "t" ? Kl(p) : [],
                  "banding-enabled": Ft.banding === G ? p : null,
                  onUpdate: (ke) => Gl(p, de.name, ke),
                  onValidation: (ke, He) => ql(ke, He, p, [de.name]),
                  onOpenBanding: (ke) => xs("banding", p),
                  onOpenMachining: (ke) => Wl(p),
                  onOpenFinish: (ke) => xs("finish", p),
                  onOpenPlaning: (ke) => xs("planing", p)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onValidation", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : H("", !0)
              ]))), 128)),
              k(U) === "development" && aa ? (S(), P("div", fy, [
                O("button", {
                  class: Ie(["c-btn", { selected: Ft.info === G }]),
                  style: Je(ws.value),
                  type: "button",
                  onClick: (de) => xs("info", p)
                }, " i ", 14, hy)
              ])) : H("", !0),
              O("div", py, [
                O("button", {
                  disabled: k(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${k(q)("actions.remove")} ${k(mu)(k(q)("woodwork.part"))}`,
                  onClick: (de) => k(I)(p.autoId)
                }, [
                  Le(w, { icon: ["fass", "trash"] })
                ], 8, gy)
              ]),
              Le(k(s), {
                item: p,
                "num-columns": Ji.value
              }, null, 8, ["item", "num-columns"]),
              Ft.banding === G && $e.options.length > 0 && Tn.value ? (S(), ve(js, {
                key: 1,
                shape: p,
                "shape-index": G,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": $e.keys,
                "all-options": $e.options,
                pricing: $e.pricing,
                labels: $e.labels,
                locations: $i.locations,
                "location-groups": $i.groups,
                "user-friendly-field-map": k(Ut),
                "part-columns": Ji.value,
                "format-price": t.formatPrice,
                "find-extras-price": ce.findExtrasPrice,
                "get-price": An,
                "orientation-model": ye.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : H("", !0),
              Ft.finish === G && je.options.length > 0 && Tn.value ? (S(), ve(js, {
                key: 2,
                shape: p,
                "shape-index": G,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": je.keys,
                "all-options": je.options,
                pricing: je.pricing,
                labels: je.labels,
                locations: Fi.locations,
                "location-groups": Fi.groups,
                "user-friendly-field-map": k(Ut),
                "part-columns": Ji.value,
                "format-price": t.formatPrice,
                "find-extras-price": ce.findExtrasPrice,
                "get-price": An,
                "orientation-model": ye.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : H("", !0),
              Ft.planing === G && Ge.options.length > 0 && Tn.value && (console.log("[CheckoutCalculator] Rendering planing ExtrasInputs with location-groups:", ye.extrasLocationGroups?.planing), !0) ? (S(), ve(js, {
                key: 3,
                shape: p,
                "shape-index": G,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Ge.keys,
                "all-options": Ge.options,
                pricing: Ge.pricing,
                labels: Ge.labels,
                locations: Li.locations,
                "location-groups": Li.groups,
                "user-friendly-field-map": k(Ut),
                "part-columns": Ji.value,
                "format-price": t.formatPrice,
                "find-extras-price": ce.findExtrasPrice,
                "get-price": An,
                "orientation-model": ye.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : H("", !0),
              Ft.info === G ? (S(), P("div", {
                key: 4,
                id: "shape-info",
                style: Je({ "grid-column-end": "span " + Ji.value })
              }, [
                O("div", null, Z(p?.banding), 1),
                O("div", null, Z(to.value?.banding?.options || "No options"), 1)
              ], 4)) : H("", !0)
            ]))), 128))
          ], 4),
          O("div", my, [
            t.readonly ? H("", !0) : (S(), P("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${k(q)("actions.add")} ${k(q)("woodwork.part")}`,
              style: Je(ws.value),
              onClick: v[2] || (v[2] = (p) => ic())
            }, [
              Le(w, { icon: ["fass", "plus-large"] }),
              ns(" " + Z(`${k(q)("actions.add")} ${k(q)("woodwork.part")}`), 1)
            ], 12, yy)),
            O("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": k(q)("actions.calculate"),
              style: Je(ws.value),
              disabled: !k(r).inputStock.value?.length || et.value,
              onClick: v[3] || (v[3] = (p) => nc())
            }, [
              Le(w, { icon: ["fass", "calculator"] }),
              ns(Z(k(q)("actions.calculate")), 1)
            ], 12, by),
            t.readonly ? H("", !0) : (S(), P("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": k(q)("actions.clear"),
              onClick: v[4] || (v[4] = (p) => $n())
            }, [
              Le(w, { icon: ["fass", "trash"] })
            ], 8, vy)),
            O("div", wy, Z(k(l)) + Z(ye?.maxParts ? "/" + ye.maxParts : ""), 1)
          ]),
          ue.value && !t.readonly ? (S(), ve(k(a), {
            key: 2,
            ref: "import",
            "number-format": ye.numberFormat,
            "custom-fields": io.value,
            "banding-options": $e.options,
            "banding-labels": $e.labels,
            "finish-options": je.options,
            "finish-labels": je.labels,
            onImport: oc
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : H("", !0),
          Cn.value ? (S(), P("div", Sy, [
            Zi.value ? (S(), P("div", xy, Z(Zi.value), 1)) : H("", !0),
            O("pre", ky, Z(Pn.value), 1)
          ])) : H("", !0),
          (ye.enable.diagram ? et.value && !k(T).complete : et.value || k(T).complete) ? (S(), P("div", Iy, [
            Le(Jo, {
              size: 50,
              number: k(T).shapeCount,
              complete: k(T).complete,
              "show-number": ye.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : H("", !0),
          fs(O("div", Cy, [
            k(J)?.saw?.stockType !== "roll" ? (S(), P("div", Py, Z(k(J)?.stack ? k(J)?.stack : 1), 1)) : H("", !0),
            Le(jg, {
              "element-id": "diagram",
              "number-format": ye.numberFormat,
              "decimal-places": ye.decimalPlaces,
              colors: ye.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [rn, ye.enable.diagram && k(T).complete]
          ]),
          ye.enable.diagram && k(W).length > 1 && k(T).complete ? (S(), ve(tg, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": k(M),
            "stock-list": k(W),
            onShowStock: k(ae)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : H("", !0)
        ], 2)) : H("", !0),
        k(U) === "development" && aa ? (S(), P("div", Ty, [
          Le(k(o), {
            data: [k(r).inputStock.value],
            paths: ["inputStock"]
          }, null, 8, ["data"]),
          Le(k(o), {
            data: [k(r).inputShapes.value],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          Le(k(o), {
            data: [Re.value],
            paths: ["materials"]
          }, null, 8, ["data"]),
          Le(k(o), {
            data: [Ne.value],
            paths: ["thicknesses"]
          }, null, 8, ["data"]),
          v[7] || (v[7] = O("div", null, "Result data", -1)),
          Le(k(o), {
            data: [yt.value],
            paths: ["Result"]
          }, null, 8, ["data"])
        ])) : H("", !0)
      ], 64);
    };
  }
}), bS = /* @__PURE__ */ Ot(Ay, [["__scopeId", "data-v-0307dd44"]]), El = fe(["select", "multiselect", "range", "boolean", "search"]), Dl = fe(["asc", "desc"]), Rl = fe(["grid", "list"]), Oy = B({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: b().optional().describe("User-friendly display name"),
  description: b().optional().describe("Detailed description"),
  // Categorization
  supplier: b().optional().describe("Supplier name"),
  category: b().optional().describe("Stock category"),
  // UI metadata
  leadTime: d().int().optional().describe("Lead time in days"),
  minQuantity: d().int().positive().optional().describe("Minimum order quantity")
});
xi.merge(Oy).describe("Stock option with filtering and display metadata");
const $y = B({
  field: b().describe("Property name to filter on"),
  type: El,
  label: b().describe("Display label"),
  custom: R().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: d().optional().describe("Minimum value for range filter"),
  max: d().optional().describe("Maximum value for range filter"),
  step: d().optional().describe("Step size for range filter"),
  // Select filter options
  options: ee(B({
    label: b(),
    value: xe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: R().default(!0).describe("Whether filter is visible"),
  collapsible: R().default(!0).describe("Whether filter panel is collapsible"),
  order: d().int().optional().describe("Display order")
}), Fy = B({
  field: b().describe("Field to sort by"),
  order: Dl,
  label: b().optional().describe("Display label for sort option")
}), Ly = B({
  // Filter configuration
  availableFilters: ee($y).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ee(b()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Fy.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Rl.default("grid").describe("Default display mode"),
  itemsPerPage: d().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: R().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: R().default(!0).describe("Allow multiple stock selection"),
  maxSelection: d().int().positive().optional().describe("Maximum number of stock items to select")
}), Ey = B({
  field: b(),
  value: xe(),
  type: El
});
B({
  // Active filters
  activeFilters: ee(Ey).default([]).describe("Currently active filters"),
  // Search
  searchQuery: b().default("").describe("Current search query"),
  // Sort
  sortBy: b().default("cost").describe("Current sort field"),
  sortOrder: Dl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Rl.default("grid").describe("Current display mode"),
  currentPage: d().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ee(b()).default([]).describe("IDs of selected stock items")
});
function Dy() {
  return Ly.parse({});
}
const Ry = /* @__PURE__ */ De({
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
    return (i, s) => (S(), P(Te, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (S(), P("div", {
        key: 0,
        class: "group issues",
        style: Je({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, Z(e.item.issues.filter((n) => n.type === "error").flatMap((n) => k(Hi)(n.message)).join(`
`)), 1)
      ], 4)) : H("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (S(), P("div", {
        key: 1,
        class: "group warnings",
        style: Je({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, Z(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => k(Hi)(n.message)).join(`
`)), 1)
      ], 4)) : H("", !0)
    ], 64));
  }
}), My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ry }, Symbol.toStringTag, { value: "Module" })), dt = {
  precisionFixed: _c,
  format: Mc,
  select: st,
  selectAll: ur,
  scaleLinear: Dt,
  scaleSequential: as,
  axisTop: lr,
  axisBottom: qs,
  axisRight: cr,
  axisLeft: zs,
  symbol: Rc,
  path: Dc,
  arc: Ec,
  symbolTriangle: Lc,
  symbolSquare: Fc
};
class _y {
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
      f && f.type ? (r.push(f.size ? K({ v: f.size ?? 0, o: this }) : 0), l.push(f.type)) : (r.push(0), l.push(null));
    });
    const c = (u, f, g, m, I) => {
      l[u] === "radius" ? o.arcTo(
        this.xScale(f),
        this.getYScale()(g),
        this.xScale(m),
        this.getYScale()(I),
        this.measurementScale(r[u])
      ) : l[u] === "bevel" ? o.lineTo(this.xScale(m), this.getYScale()(I)) : (o.lineTo(this.xScale(f), this.getYScale()(g)), o.lineTo(this.xScale(m), this.getYScale()(I)));
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
    for (const l of Ci)
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
      let u, f, g;
      switch (l) {
        case 0:
          if (!Se(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, g = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!Se(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, f = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, g = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(K({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!Se(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - K({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, g = {
            x: this.xScale(this.shapeL - K({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!Se(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(K({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, g = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - K({ v: c.size ?? 0, o: this })) + i
          };
          break;
        default:
          return;
      }
      if (r.moveTo(u.x, u.y), c.type === "radius")
        switch (r.arcTo(
          f.x,
          f.y,
          g.x,
          g.y,
          this.measurementScale(c.size ?? 0)
        ), l) {
          case 0:
          case 2:
            r.lineTo(g.x + i, g.y);
            break;
          case 1:
          case 3:
            r.lineTo(g.x, g.y - (this.currentSide === 0 ? i : -1));
            break;
        }
      else c.type === "bevel" && r.lineTo(g.x, g.y);
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
const By = { id: "machining" }, jy = { class: "inputs" }, Vy = {
  key: 0,
  class: "debug"
}, Ny = {
  key: 1,
  class: "shape-name"
}, Gy = { class: "shape-dimensions" }, qy = {
  key: 2,
  class: "sides-wrapper"
}, zy = { class: "menu" }, Wy = {
  key: 4,
  class: "button-wrapper"
}, Hy = { class: "grid-table" }, Uy = { class: "row table-heading" }, Yy = {
  key: 0,
  class: "cell id"
}, Ky = {
  key: 0,
  class: "cell"
}, Zy = { class: "id" }, Xy = { class: "cell" }, Jy = ["onClick"], Qy = {
  key: 6,
  class: "menu-prompt"
}, eb = !1, tb = /* @__PURE__ */ De({
  __name: "Machining",
  props: /* @__PURE__ */ po({
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
  emits: /* @__PURE__ */ po(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = _i(() => Promise.resolve().then(() => eo)), s = t, n = e, a = "production", o = te(), r = X(() => Ll(U.value)), l = X(() => {
      if (!f.value?.length) return 0;
      if (Q.value === "banding") return 1;
      let le = Object.values(u.value).filter((ue) => ue.enabled).length;
      return le += 2, le;
    }), c = X(() => {
      if (!f.value.length || Q.value === "banding") return;
      const le = {
        id: "34px",
        del: "30px"
      }, ue = [];
      return f.value.forEach((Ae) => {
        const Oe = u.value[Ae];
        Oe.enabled && ue.push(Oe.w ?? "1fr");
      }), ue.unshift(le.id), ue.push(le.del), ue.join(" ");
    }), u = X(() => !Q.value || Q.value === "banding" ? null : yt[Q.value]), f = X(() => !Q.value || Q.value === "banding" ? [] : Object.keys(yt[Q.value]).filter((le) => yt[Q.value][le].enabled)), g = X(() => Q.value ? $() : []), m = X(() => {
      const le = U.value?.machining?.corners?.map((ue) => ue?.isPresent?.() ? ue.getCorner() : null)?.filter((ue) => ue) ?? [];
      return [...Ci, ...le];
    }), I = (le = !0) => {
      le ? gi.value = le : Pt(() => gi.value = !1);
    }, L = () => {
      J(), ae(), T(), _();
    }, E = (le) => {
      if (Q.value === "corners")
        switch (le) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return le;
        }
      return le + 1;
    }, C = () => Q.value !== "banding", A = (le, ue = null) => {
      if (!le?.length) return [];
      let Ae = "None";
      ue === "depth" && (Ae = "Through");
      const Oe = [{ label: Ae, value: null }];
      return le.forEach((Xe) => {
        const ot = Xe.toString().charAt(0).toUpperCase() + Xe.toString().slice(1);
        Oe.push({ label: ot, value: Xe });
      }), Oe;
    }, $ = () => {
      if (!Q.value) return [];
      if (Q.value === "banding") return [];
      const le = U.value.machining[Q.value];
      return Array.isArray(le) ? le : [le];
    };
    let x = null;
    const j = () => {
      if (!U.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), x = new _y({
        HTMLElement: o.value,
        shape: U.value,
        vueComponent: null
      }), x.init(), x.updateSize(), $t.value = !0;
    }, D = yc(() => {
      $t.value && x && x.updateSize();
    }, 10);
    nr(o, () => {
      D();
    });
    const F = () => {
      jt.value = jt.value === 0 ? 1 : 0, x.flip();
    }, W = () => {
      switch (Q.value) {
        case "holes":
          V();
          break;
        case "hingeHoles":
          y();
          break;
        case "corners":
          M();
          break;
      }
    }, V = () => {
      U.value.machining.addHole({
        x: K({ v: U.value.longSide }) / 2,
        y: K({ v: U.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? K({ v: U.value.t }) ?? 0,
        face: jt.value
      }), x.createHoles();
    }, y = () => {
      U.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: jt.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), x.createHingeHoles();
    }, M = () => {
      const le = s.options.corners.types?.[0] || "radius", ue = s.options.corners.minValue || 5;
      for (let Ae = 0; Ae < 4; Ae++)
        U.value.machining.setCorner({
          index: Ae,
          type: le,
          size: ue
        });
      x.createCorners();
    }, J = () => {
      U.value.machining.holes.length = 0;
    }, ae = () => {
      U.value.machining.hingeHoles.length = 0;
    }, T = () => {
      U.value.machining.corners.forEach((le) => {
        le.size = null, le.type = null;
      }), U.value.banding.sides.a = !1, U.value.banding.sides.b = !1, U.value.banding.sides.c = !1, U.value.banding.sides.d = !1;
    }, _ = () => {
      U.value.banding = {
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
    }, N = (le) => {
      switch (Q.value) {
        case "holes":
          return U.value.machining.holes.splice(le, 1);
        case "hingeHoles":
          return U.value.machining.hingeHoles.splice(le, 1);
        case "corners":
          U.value.machining.corners[le].size = null, U.value.machining.corners[le].type = null;
          return;
      }
    }, z = () => {
      switch (Q.value) {
        case "holes":
          return J();
        case "hingeHoles":
          return ae();
        case "corners":
          return T();
      }
    }, Y = () => {
      if (Ze.value = [], !!s.options.banding.enabled) {
        I();
        for (const le in U.value.banding)
          U.value.banding[le] ? s.options.banding.enableTypes && s.options.banding.types?.length && (U.value.banding[le] || Ze.value.push({
            index: le,
            message: "Please select a type"
          })) : U.value.banding[le] = "";
        I(!1);
      }
    }, oe = (le) => {
      const ue = Ze.value.filter((Ae) => Ae.index === le);
      return ue.length ? ue.map((Ae) => Ae.message) : [];
    }, pe = (le) => {
      const ue = Ze.value.filter((Oe) => Oe.index === le && Oe?.fields), Ae = ue.flatMap((Oe) => Oe.fields);
      return ue.length ? Ae : [];
    }, ce = (le, ue) => {
      const Ae = pe(le);
      return Ae?.length ? Ae.includes(ue) : !1;
    }, re = () => n("close"), Pe = (le) => le && typeof le.disabled == "function" ? le.disabled : !1, U = mc(t, "inputShape");
    if (!U.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const at = te(!1), $t = te(!1), gi = te(!1), jt = te(0), Q = te(null), Ze = te([]), yt = bt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: q("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: q("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: q("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? A(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof U.value.t < "u" && K({ v: U.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? A(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: q("faces.a"),
              value: 0
            },
            {
              label: q("faces.a"),
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
          label: q("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: q("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: q("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof U.value.t < "u" && K({ v: U.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? A(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: q("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? A(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: q("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: q("faces.a"),
              value: 0
            },
            {
              label: q("faces.b"),
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
              label: q("sides.w1"),
              value: "x1"
            },
            {
              label: q("sides.w2"),
              value: "x2"
            },
            {
              label: q("sides.l1"),
              value: "y1"
            },
            {
              label: q("sides.l2"),
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
          label: q("machining.type"),
          type: "select",
          output: "string",
          options: A(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: q("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? K({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? K({ v: s.options.corners.maxValue, o: s.options }) : K({ v: U.value.shortSide, o: s.options }) / 2
        }
      }
    }), Xt = bt({
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
    }), Ti = (le) => {
      le.target === le.currentTarget && re();
    }, et = () => !(!U?.value?.machining || !at.value || gi.value);
    return Me(() => U.value?.autoId, () => {
      et() && j();
    }), Me(() => U.value?.id, () => {
      et() && j();
    }), Me(Q, (le) => {
      if (!et()) return;
      if (le === "banding") {
        I(), Y(), I(!1);
        return;
      }
      if (!le) {
        Ze.value = [];
        return;
      }
      I();
      const ue = U.value.machining.validate(
        U.value,
        le,
        Xt?.[le]
      );
      Ze.value = ue?.map((Ae, Oe) => ({
        index: Oe,
        message: Ae.message || "Validation error",
        fields: Ae.field || []
      })) || [], I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => U?.value?.machining?.holes, () => {
      if (!et()) return;
      I();
      const le = U.value.machining.validate(
        U.value,
        "holes",
        Xt?.holes
      );
      Ze.value = le?.map((ue, Ae) => ({
        index: Ae,
        message: ue.message || "Validation error",
        fields: ue.field || []
      })) || [], x.createHoles(), I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => U?.value?.machining?.hingeHoles, () => {
      if (!et()) return;
      I();
      const le = U.value.machining.validate(
        U.value,
        "hingeHoles",
        Xt?.hingeHoles
      );
      Ze.value = le?.map((ue, Ae) => ({
        index: Ae,
        message: ue.message || "Validation error",
        fields: ue.field || []
      })) || [], x.createHingeHoles(), I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => U?.value?.machining?.corners, () => {
      if (!et()) return;
      I();
      const le = U.value.machining.validate(
        U.value,
        "corners",
        Xt?.corners
      );
      Ze.value = le?.map((ue, Ae) => ({
        index: Ae,
        message: ue.message || "Validation error",
        fields: ue.field || []
      })) || [], U.value.machining.validate(U.value, "holes"), U.value.machining.validate(U.value, "hingeHoles"), x.createShape(), x.createHoles(), x.createHingeHoles();
      for (const ue of U.value.machining.corners)
        U.value.banding && ue?.getCorner && (U.value.banding[ue.getCorner()] = "");
      x.createBanding(), I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => U?.value?.banding, () => {
      et() && (Y(), x.createBanding());
    }, { deep: !0, immediate: !0 }), Kt(() => {
      if (document.body.style.overflow = "hidden", !U.value || !U.value.l || !U.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      Pt(() => j()), at.value = !0;
    }), hs(() => document.body.style.overflow = ""), (le, ue) => {
      const Ae = hi("FontAwesomeIcon");
      return S(), ve(Ea, { to: "body" }, [
        O("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: Ti
        }, [
          O("div", By, [
            O("div", jy, [
              k(a) === "development" && eb ? (S(), P("div", Vy, [
                Le(k(i), {
                  data: [U.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : H("", !0),
              O("button", {
                class: "c-btn close",
                type: "button",
                onClick: ue[0] || (ue[0] = (Oe) => re())
              }, "×"),
              U.value?.name ? (S(), P("div", Ny, Z(U.value.name), 1)) : H("", !0),
              O("div", Gy, Z(U.value?.l) + " x " + Z(U.value?.w) + " " + Z(U.value?.t ? "x " + U.value?.t : null), 1),
              t.options.faces.enabled ? (S(), P("div", qy, [
                O("div", {
                  ref: "sides",
                  class: Ie(["sides", { flipped: jt.value === 1 }]),
                  onClick: F
                }, [...ue[6] || (ue[6] = [
                  O("div", { class: "side-a" }, " A ", -1),
                  O("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                ue[7] || (ue[7] = O("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : H("", !0),
              r.value ? (S(), P("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: L
              }, " Delete all machining ")) : H("", !0),
              O("div", zy, [
                t.options.holes.enabled ? (S(), P("div", {
                  key: 0,
                  class: Ie({ selected: Q.value === "holes" }),
                  onClick: ue[1] || (ue[1] = (Oe) => Q.value = "holes")
                }, " Holes ", 2)) : H("", !0),
                t.options.hingeHoles.enabled ? (S(), P("div", {
                  key: 1,
                  class: Ie({ selected: Q.value === "hingeHoles" }),
                  onClick: ue[2] || (ue[2] = (Oe) => Q.value = "hingeHoles")
                }, " Hinge holes ", 2)) : H("", !0),
                t.options.corners.enabled ? (S(), P("div", {
                  key: 2,
                  class: Ie({ selected: Q.value === "corners" }),
                  onClick: ue[3] || (ue[3] = (Oe) => Q.value = "corners")
                }, " Corners ", 2)) : H("", !0),
                t.options.banding.enabled ? (S(), P("div", {
                  key: 3,
                  class: Ie({ selected: Q.value === "banding" }),
                  onClick: ue[4] || (ue[4] = (Oe) => Q.value = "banding")
                }, " Banding ", 2)) : H("", !0)
              ]),
              Q.value === "holes" || Q.value === "hingeHoles" || Q.value && Q.value !== "banding" ? (S(), P("div", Wy, [
                Q.value === "holes" || Q.value === "hingeHoles" || Q.value === "corners" ? (S(), P("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: W
                }, " Create ")) : H("", !0),
                Q.value && Q.value !== "banding" ? (S(), P("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: z
                }, " Delete all ")) : H("", !0)
              ])) : H("", !0),
              O("div", Hy, [
                Q.value === "banding" && U.value ? (S(), ve(js, {
                  key: 0,
                  shape: U.value,
                  "onUpdate:shape": ue[5] || (ue[5] = (Oe) => U.value = Oe),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": m.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": k(Ut),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : H("", !0)
              ]),
              Q.value !== "banding" && g.value.length ? (S(), P("div", {
                key: 5,
                class: Ie(["grid-table", Q.value]),
                style: Je({ "grid-template-columns": c.value })
              }, [
                O("div", Uy, [
                  C() ? (S(), P("div", Yy)) : H("", !0),
                  (S(!0), P(Te, null, Be(u.value, (Oe, Xe) => fs((S(), P("div", {
                    key: Xe,
                    class: "cell"
                  }, Z(Oe.label ?? Xe), 1)), [
                    [rn, Oe.enabled]
                  ])), 128)),
                  ue[8] || (ue[8] = O("div", { class: "cell" }, null, -1))
                ]),
                (S(!0), P(Te, null, Be(g.value, (Oe, Xe) => (S(), P("div", {
                  key: Xe,
                  class: "row"
                }, [
                  C() ? (S(), P("div", Ky, [
                    O("div", Zy, Z(E(Xe)), 1)
                  ])) : H("", !0),
                  (S(!0), P(Te, null, Be(f.value, (ot, Ai) => (S(), P("div", {
                    key: Ai,
                    class: "cell"
                  }, [
                    Le(ki, {
                      type: u.value[ot].type,
                      id: ot + "-" + Ai,
                      warning: ce(Xe, ot),
                      "enable-label": !1,
                      placeholder: u.value[ot].label ?? ot,
                      disabled: Pe(u.value[ot]),
                      value: k(ci)(Oe, ot),
                      output: u.value[ot].output,
                      options: u.value[ot].options,
                      "onUpdate:value": (mi) => k(ts)(Oe, ot, mi)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", Xy, [
                    O("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (ot) => N(Xe)
                    }, [
                      Le(Ae, { icon: ["fass", "trash"] })
                    ], 8, Jy)
                  ]),
                  (S(!0), P(Te, null, Be(oe(Xe), (ot, Ai) => (S(), P("div", {
                    key: Ai,
                    class: "group validation",
                    style: Je({ "grid-column-end": "span " + l.value })
                  }, Z(ot), 5))), 128))
                ]))), 128))
              ], 6)) : Q.value ? H("", !0) : (S(), P("div", Qy, "Please select from the menu above"))
            ]),
            O("div", {
              id: "machining-diagram",
              class: Ie(["diagram", { flipped: jt.value === 1 }]),
              ref_key: "diagramRef",
              ref: o
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), ib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: tb }, Symbol.toStringTag, { value: "Module" })), sb = {
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
      files: bc([])
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
function nb(t, e, i, s, n, a) {
  return S(), P("div", {
    id: "drop",
    class: Ie({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = ar((...o) => a.onDrop && a.onDrop(...o), ["prevent"]))
  }, [
    O("div", null, Z(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const ab = /* @__PURE__ */ Ot(sb, [["render", nb]]), ob = { id: "import-file" }, rb = /* @__PURE__ */ De({
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
    const i = t, s = e, n = te([]), a = te([]), o = te([]), r = te([]), l = te({}), c = te([]), u = te(!1), f = te(null), g = te(null), m = [
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
    ], I = X(() => {
      const T = {};
      return n.value.forEach((_, N) => {
        T[N] = {};
        for (const [z, Y] of Object.entries(_)) {
          if (!m.includes(z)) continue;
          const oe = C(z, Y);
          (oe === !0 || oe === !1) && (T[N][z] = oe);
        }
      }), T;
    }), L = X(() => i.customFields.map((T) => T.label)), E = (T, _) => {
      if (_) {
        const N = Object.keys(_), z = [[]];
        N.forEach((oe) => {
          const pe = _[oe], ce = [];
          z.forEach((re) => {
            pe.forEach((Pe) => ce.push([...re, Pe]));
          }), z.splice(0, z.length, ...ce);
        });
        const Y = /* @__PURE__ */ new Set();
        z.forEach((oe) => Y.add(oe.join("|").toLowerCase())), T === "banding" ? f.value = Y : g.value = Y;
      }
    }, C = (T, _) => {
      if (_ === "???") return !0;
      function N(Y) {
        return Y ? (Y = Y?.trim()?.toLowerCase(), Y === "l" || Y === "w") : !0;
      }
      const z = {
        banding: (Y) => A(Y, f.value, "banding"),
        finish: (Y) => A(Y, g.value, "finish"),
        orientationLock: N
      };
      return T in z ? z[T](_) : null;
    }, A = (T, _, N) => {
      if (T = y(T), !T) return !0;
      const z = T.split(","), Y = z.every((oe) => !oe || _.has(oe.toLowerCase()));
      if (!Y) {
        const oe = z.filter((pe) => !_.has(pe.toLowerCase()));
        console.log(`Valid ${N} choices...`), console.table(Array.from(_)), console.log(`The following ${N} choices are invalid`, oe);
      }
      return Y;
    }, $ = (T, _) => {
      const N = {
        bandingOptions: (z) => x(z, i.bandingOptions, i.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (z) => x(z, i.finishOptions, i.finishLabels, ["a", "b"])
      };
      return T in N ? N[T](_) : null;
    }, x = (T, _, N, z) => {
      if (T = y(T), !T)
        return z.reduce((pe, ce) => ({ ...pe, [ce]: {} }), {});
      const Y = T.split(",").map((pe) => pe.toLowerCase()), oe = {};
      return z.forEach((pe, ce) => {
        oe[pe] = {}, Object.keys(_).forEach((re, Pe) => {
          oe[pe][N[Pe]] = Y[ce]?.split("|")[Pe] || "";
        });
      }), oe;
    }, j = () => n.value.map((T, _) => ({
      l: i.numberFormat === "decimal" ? Rs(T.l) : T.l,
      w: i.numberFormat === "decimal" ? Rs(T.w) : T.w,
      t: i.numberFormat === "decimal" ? Rs(T.t) : T.t,
      q: T.q,
      orientationLock: T.orientationLock,
      name: T.name,
      material: T.material,
      bandingOptions: I.value[_].banding ? $("bandingOptions", T.banding) : null,
      finishOptions: I.value[_].finish ? $("finishOptions", T.finish) : null,
      numberFormat: i.numberFormat,
      customData: J(T)
    })), D = (T) => {
      const _ = T?.[0]?.data;
      _ && su.parse(_, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (N) => F(N),
        error: () => s("error")
      });
    }, F = (T) => {
      a.value = T.data.filter((_) => _.some((N) => N)), o.value = a.value[0], l.value = {};
      for (let _ = o.value.length; _--; ) {
        const N = o.value[_], z = W(N);
        z ? l.value[_] = z : (l.value[_] = null, L.value.includes(N) && (l.value[_] = "customData." + i.customFields.find((Y) => Y.label === N).id));
      }
      V(), a.value.shift(), M(), ae();
    }, W = (T) => {
      const _ = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", q("l"), q("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", q("w"), q("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", q("t"), q("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", q("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", q("quantity"), q("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", q("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", q("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", q("banding")],
        finish: ["finish", "paint"]
      }, N = Object.entries(_).reduce(
        (z, [Y, oe]) => (oe.some((pe) => T && T.toLowerCase() === pe) && z.push(Y), z),
        []
      );
      return N.length > 1 ? null : N[0];
    }, V = () => {
      u.value = !1, r.value = Object.values(l.value).map((_) => !_ || _ === "N" ? null : m.includes(_) ? _ : (u.value = !0, null));
      const T = r.value.filter((_, N) => r.value.indexOf(_) !== N);
      c.value = T.map((_) => r.value.reduce(
        (N, z, Y) => (z && z === _ && N.push(Y), N),
        []
      ));
    }, y = (T) => T && T.replace(/\s*,\s*/g, ","), M = () => {
      const T = a.value.map((_) => {
        const N = {};
        return o.value.forEach((z, Y) => {
          if (c.value.flat().includes(Y))
            return N[l.value[Y]] = "???";
          N[l.value[Y]] = _[Y];
        }), N;
      });
      n.value = T;
    }, J = (T) => {
      let _ = {};
      for (let N in T)
        if (N.startsWith("customData.")) {
          let z = N.slice(11);
          _[z] = T[N];
        }
      return _;
    }, ae = () => {
      const T = j();
      T?.length && s("import", T);
    };
    return Kt(() => {
      E("banding", i.bandingOptions), E("finish", i.finishOptions);
    }), (T, _) => (S(), P("div", ob, [
      Le(ab, {
        label: k(q)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: D
      }, null, 8, ["label"])
    ]));
  }
}), lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: rb }, Symbol.toStringTag, { value: "Module" })), cb = {
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
}, ub = { class: "smartcut-object-viewer" }, db = ["onClick"], fb = { class: "toggle-icon" }, hb = { class: "path-label" }, pb = {
  key: 0,
  class: "object-properties"
}, gb = {
  key: 0,
  class: "key"
}, mb = {
  key: 1,
  class: "null-value"
}, yb = { key: 2 };
function bb(t, e, i, s, n, a) {
  const o = hi("ObjectViewer", !0);
  return S(), P("div", ub, [
    (S(!0), P(Te, null, Be(i.data, (r, l) => (S(), P("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        O("div", fb, Z(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", hb, Z(i.paths[l] || l), 1)
      ], 8, db),
      n.expanded[l] ? (S(), P("div", pb, [
        (S(!0), P(Te, null, Be(r, (c, u) => (S(), P("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (S(), P("div", gb, Z(u) + ": ", 1)) : H("", !0),
          O("div", {
            class: Ie(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (S(), ve(o, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (S(), P("span", mb, "null")) : (S(), P("span", yb, Z(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : H("", !0)
    ]))), 128))
  ]);
}
const vb = /* @__PURE__ */ Ot(cb, [["render", bb]]), eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: vb }, Symbol.toStringTag, { value: "Module" })), wb = { class: "stock-filter-search" }, Sb = { class: "search-input-wrapper" }, xb = ["placeholder"], kb = /* @__PURE__ */ De({
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
    Me(() => i.modelValue, (l) => {
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
    return (l, c) => (S(), P("div", wb, [
      O("div", Sb, [
        fs(O("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: o
        }, null, 40, xb), [
          [vc, n.value]
        ]),
        n.value ? (S(), P("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: r
        }, " × ")) : H("", !0)
      ])
    ]));
  }
}), Ib = /* @__PURE__ */ Ot(kb, [["__scopeId", "data-v-45127fff"]]), Cb = { class: "filter-panel-header" }, Pb = { class: "filter-panel-title" }, Tb = { class: "filter-panel-content" }, Ab = {
  key: 0,
  class: "filter-summary"
}, Ob = { class: "filter-summary__count" }, $b = { class: "filter-groups" }, Fb = { class: "filter-group__header" }, Lb = { class: "filter-group__label" }, Eb = { class: "filter-group__content" }, Db = {
  key: 0,
  class: "filter-select"
}, Rb = ["checked", "onChange"], Mb = ["value", "onChange"], _b = { value: "" }, Bb = ["value"], jb = {
  key: 1,
  class: "filter-range"
}, Vb = { class: "filter-range__inputs" }, Nb = ["value", "min", "max", "step", "onInput"], Gb = ["value", "min", "max", "step", "onInput"], qb = {
  key: 2,
  class: "filter-boolean"
}, zb = { class: "filter-checkbox" }, Wb = ["checked", "onChange"], Hb = /* @__PURE__ */ De({
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
    function l(A) {
      return {
        material: q("woodwork.material"),
        t: q("woodwork.thickness") + " (mm)",
        cost: q("stockFilter.price"),
        color: q("fields.color"),
        l: q("woodwork.length"),
        w: q("woodwork.width"),
        weight: q("fields.weight"),
        name: q("fields.name"),
        category: q("general.category"),
        leadTime: q("stockFilter.lead_time")
      }[A.field] || A.label;
    }
    function c(A) {
      return A.options?.length ? A.options : i.getUniqueValues(A.field).map((x) => A.field === "color" && typeof x == "object" && x !== null ? "name" in x && x.name ? {
        label: x.name,
        value: x
      } : {
        label: x.hex || String(x),
        value: x
      } : {
        label: String(x),
        value: x
      });
    }
    function u(A) {
      return i.activeFilters.find((x) => x.field === A)?.value;
    }
    function f(A, $) {
      const x = u(A);
      return Array.isArray(x) ? A === "color" && typeof $ == "object" && $ !== null && "hex" in $ ? x.some(
        (j) => typeof j == "object" && j !== null && "hex" in j && j.hex === $.hex
      ) : x.includes($) : A === "color" && typeof $ == "object" && $ !== null && "hex" in $ ? typeof x == "object" && x !== null && "hex" in x && x.hex === $.hex : x === $;
    }
    function g(A, $) {
      const j = $.target.value;
      j === "" ? s("remove-filter", A) : s("apply-filter", A, j, "select");
    }
    function m(A, $, x) {
      const j = x.target, D = u(A) || [], F = Array.isArray(D) ? [...D] : [];
      if (j.checked)
        F.includes($) || F.push($);
      else {
        const W = F.indexOf($);
        W !== -1 && F.splice(W, 1);
      }
      F.length === 0 ? s("remove-filter", A) : s("apply-filter", A, F, "multiselect");
    }
    function I(A, $) {
      if (a.value[A]?.[$] !== void 0)
        return a.value[A][$];
      const x = i.activeFilters.find((j) => j.field === A);
      if (x?.value && typeof x.value == "object")
        return x.value[$];
    }
    function L(A, $, x) {
      const j = x.target, D = j.value ? Number(j.value) : void 0;
      a.value[A] || (a.value[A] = {}), a.value[A][$] = D;
      const F = a.value[A].min, W = a.value[A].max;
      F !== void 0 || W !== void 0 ? s("apply-filter", A, { min: F, max: W }, "range") : s("remove-filter", A);
    }
    function E(A, $) {
      $.target.checked ? s("apply-filter", A, !0, "boolean") : s("remove-filter", A);
    }
    function C() {
      a.value = {}, s("clear-filters");
    }
    return (A, $) => (S(), P("div", {
      class: Ie(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      O("div", Cb, [
        O("h3", Pb, Z(k(q)("stockFilter.filters")), 1),
        O("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: r
        }, Z(n.value ? "−" : "+"), 1)
      ]),
      Le(wc, { name: "filter-panel-content" }, {
        default: Ii(() => [
          fs(O("div", Tb, [
            o.value > 0 ? (S(), P("div", Ab, [
              O("span", Ob, Z(k(q)("stockFilter.active_filters", [o.value])), 1),
              O("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: C
              }, Z(k(q)("stockFilter.clear_all")), 1)
            ])) : H("", !0),
            O("div", $b, [
              (S(!0), P(Te, null, Be(t.filterConfigs, (x) => (S(), P("div", {
                key: x.field,
                class: "filter-group"
              }, [
                O("div", Fb, [
                  O("label", Lb, Z(l(x)), 1)
                ]),
                O("div", Eb, [
                  x.type === "select" || x.type === "multiselect" ? (S(), P("div", Db, [
                    x.type === "multiselect" ? (S(!0), P(Te, { key: 0 }, Be(c(x), (j) => (S(), P("label", {
                      key: j.value,
                      class: "filter-checkbox"
                    }, [
                      O("input", {
                        checked: f(x.field, j.value),
                        type: "checkbox",
                        onChange: (D) => m(x.field, j.value, D)
                      }, null, 40, Rb),
                      O("span", null, Z(j.label), 1)
                    ]))), 128)) : (S(), P("select", {
                      key: 1,
                      value: u(x.field),
                      class: "filter-select-input",
                      onChange: (j) => g(x.field, j)
                    }, [
                      O("option", _b, Z(k(q)("stockFilter.all")), 1),
                      (S(!0), P(Te, null, Be(c(x), (j) => (S(), P("option", {
                        key: j.value,
                        value: j.value
                      }, Z(j.label), 9, Bb))), 128))
                    ], 40, Mb))
                  ])) : x.type === "range" ? (S(), P("div", jb, [
                    O("div", Vb, [
                      O("input", {
                        value: I(x.field, "min"),
                        min: x.min,
                        max: x.max,
                        step: x.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (j) => L(x.field, "min", j)
                      }, null, 40, Nb),
                      $[0] || ($[0] = O("span", { class: "filter-range__separator" }, "–", -1)),
                      O("input", {
                        value: I(x.field, "max"),
                        min: x.min,
                        max: x.max,
                        step: x.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (j) => L(x.field, "max", j)
                      }, null, 40, Gb)
                    ])
                  ])) : x.type === "boolean" ? (S(), P("div", qb, [
                    O("label", zb, [
                      O("input", {
                        checked: u(x.field) === !0,
                        type: "checkbox",
                        onChange: (j) => E(x.field, j)
                      }, null, 40, Wb),
                      O("span", null, Z(x.label), 1)
                    ])
                  ])) : H("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [rn, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Ub = /* @__PURE__ */ Ot(Hb, [["__scopeId", "data-v-096696f3"]]), Yb = { class: "stock-filter-sort" }, Kb = { class: "sort-controls" }, Zb = { class: "sort-label" }, Xb = ["value"], Jb = ["value"], Qb = ["title"], ev = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, tv = {
  key: 0,
  d: "M8 3l4 5H4z"
}, iv = {
  key: 1,
  d: "M8 13l4-5H4z"
}, sv = /* @__PURE__ */ De({
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
        cost: q("stockFilter.price"),
        material: q("woodwork.material"),
        t: q("woodwork.thickness"),
        l: q("woodwork.length"),
        w: q("woodwork.width"),
        pricePerKg: q("stockFilter.price") + " per kg",
        pricePerM2: q("stockFilter.price") + " per m²",
        weight: q("fields.weight"),
        name: q("fields.name"),
        leadTime: q("stockFilter.lead_time")
      }[l] || l.charAt(0).toUpperCase() + l.slice(1);
    }
    function o(l) {
      const c = l.target;
      s("update:sortBy", c.value);
    }
    function r() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, c) => (S(), P("div", Yb, [
      O("div", Kb, [
        O("label", Zb, Z(k(q)("stockFilter.sort_by")) + ":", 1),
        O("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: o
        }, [
          (S(!0), P(Te, null, Be(k(n), (u) => (S(), P("option", {
            key: u.value,
            value: u.value
          }, Z(u.label), 9, Jb))), 128))
        ], 40, Xb),
        O("button", {
          type: "button",
          class: Ie(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? k(q)("options.by_dimensions") : k(q)("options.by_dimensions"),
          onClick: r
        }, [
          (S(), P("svg", ev, [
            t.sortOrder === "asc" ? (S(), P("path", tv)) : (S(), P("path", iv))
          ]))
        ], 10, Qb)
      ])
    ]));
  }
}), nv = /* @__PURE__ */ Ot(sv, [["__scopeId", "data-v-bb32c593"]]), av = { class: "stock-filter-results" }, ov = { class: "results-header" }, rv = { class: "results-info" }, lv = { class: "results-count" }, cv = { class: "results-controls" }, uv = { class: "display-mode-toggle" }, dv = ["title"], fv = ["title"], hv = {
  key: 0,
  class: "results-loading"
}, pv = {
  key: 1,
  class: "results-empty"
}, gv = { class: "empty-message" }, mv = {
  key: 3,
  class: "results-pagination"
}, yv = ["disabled"], bv = { class: "pagination-pages" }, vv = ["onClick"], wv = ["disabled"], Sv = /* @__PURE__ */ De({
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
    return (s, n) => (S(), P("div", av, [
      O("div", ov, [
        O("div", rv, [
          O("span", lv, Z(t.totalResults) + " " + Z(t.totalResults === 1 ? k(q)("stockFilter.result_one") : k(q)("stockFilter.result_other")), 1)
        ]),
        O("div", cv, [
          O("div", uv, [
            O("button", {
              type: "button",
              class: Ie(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: k(q)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              or('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-702dc044><rect x="1" y="1" width="6" height="6" data-v-702dc044></rect><rect x="9" y="1" width="6" height="6" data-v-702dc044></rect><rect x="1" y="9" width="6" height="6" data-v-702dc044></rect><rect x="9" y="9" width="6" height="6" data-v-702dc044></rect></svg>', 1)
            ])], 10, dv),
            O("button", {
              type: "button",
              class: Ie(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: k(q)("stockFilter.list_view"),
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
            ])], 10, fv)
          ])
        ])
      ]),
      t.loading ? (S(), P("div", hv, [
        n[7] || (n[7] = O("div", { class: "spinner" }, null, -1)),
        O("p", null, Z(k(q)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (S(), P("div", pv, [
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
        O("p", gv, Z(k(q)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (S(), P("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, Z(k(q)("stockFilter.clear_filters")), 1)) : H("", !0)
      ])) : (S(), P("div", {
        key: 2,
        class: Ie(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Gs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (S(), P("div", mv, [
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, Z(k(q)("pagination.previous")), 9, yv),
        O("div", bv, [
          (S(!0), P(Te, null, Be(i.value, (a) => (S(), P("button", {
            key: a,
            type: "button",
            class: Ie(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (o) => s.$emit("go-to-page", a)
          }, Z(a), 11, vv))), 128))
        ]),
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, Z(k(q)("pagination.next")), 9, wv)
      ])) : H("", !0)
    ]));
  }
}), xv = /* @__PURE__ */ Ot(Sv, [["__scopeId", "data-v-702dc044"]]), kv = {
  key: 0,
  class: "stock-filter-card__image"
}, Iv = ["src", "alt"], Cv = { class: "stock-filter-card__content" }, Pv = { class: "stock-filter-card__title" }, Tv = { class: "stock-filter-card__specs" }, Av = { class: "spec" }, Ov = { class: "spec__label" }, $v = { class: "spec__value" }, Fv = { class: "spec" }, Lv = { class: "spec__label" }, Ev = { class: "spec__value" }, Dv = {
  key: 0,
  class: "spec"
}, Rv = { class: "spec__label" }, Mv = { class: "spec__value spec__value--color" }, _v = {
  key: 1,
  class: "spec"
}, Bv = { class: "spec__label" }, jv = { class: "spec__value" }, Vv = {
  key: 0,
  class: "stock-filter-card__description"
}, Nv = { class: "stock-filter-card__footer" }, Gv = {
  key: 0,
  class: "stock-filter-card__price"
}, qv = { class: "price__label" }, zv = { class: "price__value" }, Wv = ["disabled"], Hv = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, Uv = /* @__PURE__ */ De({
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
    const i = t, s = e, n = X(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), a = X(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), o = X(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), r = X(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": l(i.buttonColor, -8)
    }));
    function l(u, f) {
      const g = u.replace("#", ""), m = parseInt(g, 16), I = Math.round(2.55 * f), L = (m >> 16) + I, E = (m >> 8 & 255) + I, C = (m & 255) + I;
      return `#${(16777216 + (L < 255 ? L < 1 ? 0 : L : 255) * 65536 + (E < 255 ? E < 1 ? 0 : E : 255) * 256 + (C < 255 ? C < 1 ? 0 : C : 255)).toString(16).slice(1)}`;
    }
    function c() {
      s("toggle-selection", i.stock);
    }
    return (u, f) => (S(), P("div", {
      class: Ie(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !t.stock.available
      }])
    }, [
      t.stock.imageUrl ? (S(), P("div", kv, [
        O("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, Iv)
      ])) : H("", !0),
      O("div", Cv, [
        O("h3", Pv, Z(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        O("div", Tv, [
          O("div", Av, [
            O("span", Ov, Z(k(q)("woodwork.material")) + ":", 1),
            O("span", $v, Z(t.stock.material || k(q)("general.na")), 1)
          ]),
          O("div", Fv, [
            O("span", Lv, Z(k(q)("stockFilter.dimensions")) + ":", 1),
            O("span", Ev, Z(t.stock.l) + " × " + Z(t.stock.w) + Z(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (S(), P("div", Dv, [
            O("span", Rv, Z(k(q)("fields.color")) + ":", 1),
            O("span", Mv, [
              O("span", {
                class: "color-swatch",
                style: Je({ backgroundColor: a.value })
              }, null, 4),
              ns(" " + Z(o.value), 1)
            ])
          ])) : H("", !0),
          t.stock.weight ? (S(), P("div", _v, [
            O("span", Bv, Z(k(q)("fields.weight")) + ":", 1),
            O("span", jv, Z(t.stock.weight) + " kg", 1)
          ])) : H("", !0)
        ]),
        t.stock.description ? (S(), P("div", Vv, Z(t.stock.description), 1)) : H("", !0),
        O("div", Nv, [
          t.stock.cost ? (S(), P("div", Gv, [
            O("span", qv, Z(k(q)("stockFilter.price")) + ":", 1),
            O("span", zv, Z(n.value), 1)
          ])) : H("", !0),
          O("button", {
            type: "button",
            class: Ie(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: Je(r.value),
            disabled: !t.stock.available,
            onClick: c
          }, Z(t.isSelected ? k(q)("stockFilter.remove") : t.stock.available ? k(q)("stockFilter.select") : k(q)("stockFilter.unavailable")), 15, Wv)
        ]),
        t.stock.leadTime ? (S(), P("div", Hv, Z(k(q)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : H("", !0)
      ])
    ], 2));
  }
}), Yv = /* @__PURE__ */ Ot(Uv, [["__scopeId", "data-v-1ce32550"]]), Kv = { class: "stock-filter" }, Zv = /* @__PURE__ */ De({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => Dy()
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
      displayMode: g,
      currentPage: m,
      filteredStock: I,
      paginatedStock: L,
      selectedStock: E,
      totalPages: C,
      applyFilter: A,
      removeFilter: $,
      clearFilters: x,
      goToPage: j,
      toggleStockSelection: D,
      isStockSelected: F,
      clearSelection: W,
      createInputStock: V,
      getUniqueValues: y,
      getFieldRange: M
    } = $c({
      stockOptions: a,
      config: o,
      numberFormat: r
    }), J = X(() => s.config.availableFilters.filter((_) => {
      const N = y(_.field);
      return N.length > 0 && N.some((z) => z != null);
    }));
    X(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": ae(s.colors.button, -8)
    }));
    function ae(_, N) {
      const z = _.replace("#", ""), Y = parseInt(z, 16), oe = Math.round(2.55 * N), pe = (Y >> 16) + oe, ce = (Y >> 8 & 255) + oe, re = (Y & 255) + oe;
      return `#${(16777216 + (pe < 255 ? pe < 1 ? 0 : pe : 255) * 65536 + (ce < 255 ? ce < 1 ? 0 : ce : 255) * 256 + (re < 255 ? re < 1 ? 0 : re : 255)).toString(16).slice(1)}`;
    }
    function T(_) {
      const N = F(_);
      if (D(_), N) {
        const z = V(_);
        n("stock-removed", z);
      } else {
        const z = V(_);
        n("stock-added", [z]);
      }
    }
    return e({
      applyFilter: A,
      removeFilter: $,
      clearFilters: x,
      clearSelection: W,
      selectedStock: E,
      filteredStock: I,
      getUniqueValues: y,
      getFieldRange: M
    }), (_, N) => (S(), P("div", Kv, [
      t.config.enableSearch ? (S(), ve(Ib, {
        key: 0,
        modelValue: k(c),
        "onUpdate:modelValue": N[0] || (N[0] = (z) => En(c) ? c.value = z : null)
      }, null, 8, ["modelValue"])) : H("", !0),
      J.value.length > 0 ? (S(), ve(Ub, {
        key: 1,
        "filter-configs": J.value,
        "active-filters": k(l),
        "get-unique-values": k(y),
        "get-field-range": k(M),
        onApplyFilter: k(A),
        onRemoveFilter: k($),
        onClearFilters: k(x)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : H("", !0),
      t.config.sortOptions.length > 0 ? (S(), ve(nv, {
        key: 2,
        "sort-by": k(u),
        "onUpdate:sortBy": N[1] || (N[1] = (z) => En(u) ? u.value = z : null),
        "sort-order": k(f),
        "onUpdate:sortOrder": N[2] || (N[2] = (z) => En(f) ? f.value = z : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : H("", !0),
      Le(xv, {
        "total-results": k(L).length,
        "display-mode": k(g),
        loading: t.loading,
        "has-active-filters": k(l).length > 0,
        "current-page": k(m),
        "total-pages": k(C),
        "onUpdate:displayMode": N[3] || (N[3] = (z) => g.value = z),
        onClearFilters: k(x),
        onGoToPage: k(j)
      }, {
        default: Ii(() => [
          (S(!0), P(Te, null, Be(k(L), (z) => (S(), ve(Yv, {
            key: z.id || `${z.material}-${z.l}-${z.w}-${z.t}`,
            stock: z,
            "is-selected": k(F)(z),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            onToggleSelection: T
          }, null, 8, ["stock", "is-selected", "format-price", "button-color", "button-text-color", "locale"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), Xv = /* @__PURE__ */ Ot(Zv, [["__scopeId", "data-v-7b1c1d8d"]]), vS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Xv }, Symbol.toStringTag, { value: "Module" }));
class li extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class ir {
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
      if (i === 0) throw new li("Division by zero", "DIVISION_BY_ZERO");
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
        const L = n[c];
        if (L)
          return u === "q" ? L.q : L[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (o.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const f = e.nodes.get(l);
      if (typeof f.formula == "number")
        return a.set(l, f.formula), f.formula;
      o.add(l);
      const g = e.edges.get(l) || /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
      for (const L of g)
        if (L.startsWith("input.")) {
          const E = L.split(".")[1];
          m.set(L, s[E]);
        } else
          m.set(L, r(L));
      const I = this.evaluateFormulaWithDeps(f.formula, m, s);
      return a.set(l, I), o.delete(l), I;
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
    if (!this.spec?.inputs) throw new li("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new li(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new li(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new li("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new li(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], o = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new li(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < o.min || n.value > o.max)
        throw new li(`Field ${s} value ${n.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
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
const Jv = {
  key: 0,
  class: "debug"
}, Qv = { id: "formula-pricing" }, ew = {
  key: 1,
  class: "extras"
}, tw = { class: "heading" }, iw = { id: "hardware-total" }, sw = { class: "heading panels" }, nw = !1, aw = /* @__PURE__ */ De({
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
    const i = _i(() => Promise.resolve().then(() => eo)), s = t, n = e, a = Sc("calculator"), o = X(() => a()), r = te("production");
    let l = null;
    const c = te(null), u = te([]), f = te(!1), g = te(""), m = X(() => {
      if (!f.value || !u.value.length || u.value.every((F) => F.value === null)) return null;
      const D = $();
      return Pt(() => n("panel-result", D)), D;
    }), I = X(() => {
      if (!o.value || !f.value || !u.value.length || u.value.every((F) => F.value === null)) return;
      const D = x();
      return Pt(() => n("hardware-result", D, L.value)), D;
    }), L = X(() => {
      if (I.value)
        return Object.values(I.value).reduce((D, F) => D + F.totalCost, 0);
    });
    Me(m, (D) => {
      if (!f.value || !D || !o.value || !o.value?.inputShapes) return;
      const F = (y) => y?.name ? y.name.toLowerCase() : "", W = new Map(
        o.value.inputShapes.map((y) => [F(y), y])
      ), V = /* @__PURE__ */ new Set();
      for (const y of Object.values(m.value)) {
        if (!y.name) continue;
        const M = F(y), J = W.get(M), ae = {
          ...y,
          name: y.name.toUpperCase() || J?.name.toUpperCase(),
          material: y.material?.toUpperCase() || J?.material?.toUpperCase(),
          bandingOptions: y.bandingOptions || {},
          finishOptions: y.finishOptions || {},
          orientationLock: y.orientationLock || null,
          notes: g.value,
          readonly: !0
        }, T = J || o.value.createInputShape(ae);
        if (J) {
          Object.assign(J, ae);
          for (const _ of ["banding", "finish"])
            o.value.initExtrasOptions(J, _);
        } else
          o.value.inputShapes.push(T);
        V.add(M);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (y) => V.has(F(y))
      );
    }, { immediate: !1 }), Kt(() => j());
    const E = (D) => {
      s.debug && console.log(D);
    }, C = () => {
      u.value = Object.values(c.value.inputs).map((D) => ({
        value: D.default ?? null
      })), console.log(u.value);
    }, A = (D, F) => {
      u.value[D] && (u.value[D].value = F);
    }, $ = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (D) {
        return o.value.inputShapes.length = 0, console.error(D), null;
      }
    }, x = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (D) {
        return console.error(D), null;
      }
    }, j = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (E(`SmartCut - Formula calculator init from url: ${s.url}`), l = new ir({ url: s.url }), c.value = await l.getSpec()) : s.spec && (E("SmartCut - Formula calculator init with JSON"), l = new ir({ spec: s.spec }), c.value = await l.getSpec()), C(), f.value = !0;
    };
    return (D, F) => (S(), P(Te, null, [
      r.value === "development" && nw ? (S(), P("div", Jv, [
        F[1] || (F[1] = O("div", null, "Developer information", -1)),
        Le(k(i), {
          data: [m.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : H("", !0),
      O("div", Qv, [
        c.value?.projectName ? (S(), ve(ki, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: g.value,
          "onUpdate:value": F[0] || (F[0] = (W) => g.value = W)
        }, null, 8, ["value"])) : H("", !0),
        (S(!0), P(Te, null, Be(c.value?.inputs, (W, V, y) => (S(), ve(ki, {
          id: "formula-field-" + y,
          key: y,
          type: W.type,
          label: W.label,
          placeholder: W.label,
          min: W.min ?? 0,
          max: W.max ?? null,
          default: W.default ?? 0,
          value: u.value[y]?.value,
          "onUpdate:value": (M) => A(y, M)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        I.value ? (S(), P("div", ew, [
          O("div", tw, Z(k(q)("Hardware")), 1),
          (S(!0), P(Te, null, Be(I.value, (W, V) => (S(), P("div", { key: V }, Z(W.name) + " x" + Z(W.q) + " = " + Z(t.formatPrice(W.totalCost)), 1))), 128)),
          O("div", iw, Z(k(q)("Hardware total")) + " = " + Z(t.formatPrice(L.value)), 1)
        ])) : H("", !0),
        O("div", sw, Z(k(q)("Panels")), 1)
      ])
    ], 64));
  }
}), wS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: aw }, Symbol.toStringTag, { value: "Module" })), ow = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, rw = { class: "content" }, lw = ["onClick"], cw = ["innerHTML"], uw = /* @__PURE__ */ De({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = Ra(), n = te({}), a = X(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, r) => {
      const l = hi("FontAwesomeIcon");
      return S(), ve(Ea, { to: "body" }, [
        O("div", ow, [
          Le(xc, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ie(["notices-container", e.position])
          }, {
            default: Ii(() => [
              (S(!0), P(Te, null, Be(k(i), (c) => (S(), P("div", {
                key: c.id,
                ref_for: !0,
                ref: (u) => {
                  u && (n.value[c.id] = u);
                },
                class: Ie([
                  "notice",
                  `notice--${c.type}`
                ])
              }, [
                O("div", rw, [
                  O("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, Z(c.message), 9, lw),
                  O("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, cw)
                ]),
                c.persistent ? H("", !0) : (S(), ve(l, {
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
}), SS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: uw }, Symbol.toStringTag, { value: "Module" }));
export {
  ne as $,
  Cw as A,
  cs as B,
  Na as C,
  ie as D,
  kh as E,
  xi as F,
  Ww as G,
  os as H,
  el as I,
  Ah as J,
  Hw as K,
  Iu as L,
  Hi as M,
  Ce as N,
  yf as O,
  Jn as P,
  K as Q,
  Ew as R,
  Qr as S,
  We as T,
  mr as U,
  Ct as V,
  tt as W,
  ap as X,
  nf as Y,
  yw as Z,
  ei as _,
  en as a,
  ze as a$,
  Vi as a0,
  Ht as a1,
  Fw as a2,
  ti as a3,
  Uw as a4,
  Iw as a5,
  Ke as a6,
  Xd as a7,
  Lw as a8,
  Mt as a9,
  Nw as aA,
  tS as aB,
  yr as aC,
  np as aD,
  iS as aE,
  Xh as aF,
  eS as aG,
  yn as aH,
  ul as aI,
  Se as aJ,
  Dr as aK,
  Zh as aL,
  br as aM,
  $o as aN,
  Jw as aO,
  Qw as aP,
  Pw as aQ,
  dp as aR,
  fp as aS,
  Qe as aT,
  ni as aU,
  cp as aV,
  pl as aW,
  sS as aX,
  ga as aY,
  ll as aZ,
  zw as a_,
  ju as aa,
  xd as ab,
  Xw as ac,
  Yd as ad,
  Mw as ae,
  $w as af,
  pn as ag,
  Yi as ah,
  Dw as ai,
  jw as aj,
  wt as ak,
  Rw as al,
  au as am,
  lu as an,
  hu as ao,
  vw as ap,
  bw as aq,
  Zw as ar,
  Kw as as,
  ps as at,
  gr as au,
  nt as av,
  id as aw,
  St as ax,
  Gw as ay,
  vi as az,
  mn as b,
  nS as b0,
  aS as b1,
  se as b2,
  Aw as b3,
  Ow as b4,
  ht as b5,
  _w as b6,
  Bw as b7,
  qw as b8,
  Vw as b9,
  oS as bA,
  eo as bB,
  vS as bC,
  wS as bD,
  SS as bE,
  Qd as ba,
  Sw as bb,
  Rt as bc,
  qi as bd,
  Ve as be,
  vt as bf,
  Qs as bg,
  Wt as bh,
  Tw as bi,
  sh as bj,
  al as bk,
  Ga as bl,
  ui as bm,
  hn as bn,
  xw as bo,
  Dy as bp,
  bS as bq,
  ci as br,
  yS as bs,
  bo as bt,
  Ci as bu,
  ft as bv,
  ww as bw,
  vu as bx,
  vo as by,
  Ot as bz,
  Fa as c,
  Mo as d,
  bl as e,
  vl as f,
  _u as g,
  uS as h,
  lS as i,
  cS as j,
  yi as k,
  xn as l,
  Hp as m,
  fS as n,
  mS as o,
  gS as p,
  pS as q,
  Yw as r,
  Yt as s,
  q as t,
  kw as u,
  hS as v,
  Up as w,
  dS as x,
  rS as y,
  mw as z
};
