import { i as sr, B as cc } from "./vendor-i18n-BuJwRgtG.js";
import { d as De, c as T, o as w, F as Te, r as je, n as Je, a as Ie, b as O, w as ls, t as J, v as ln, e as te, f as mt, g as Wt, h as Q, u as nr, i as uc, j as Me, k as yt, l as dc, m as cs, p as ve, q as k, s as U, x as Ns, T as La, y as ar, z as fc, A as wi, B as Ii, C as Gs, D as ai, E as pi, G as Fe, H as hc, I as or, J as ts, K as pc, L as fo, M as Ri, N as ho, O as gc, P as mc, Q as yc, R as bc, S as vc, U as Ln, V as wc, W as Sc } from "./vendor-vue-U4l9SdFr.js";
import { u as Ea, a as xc, b as kc, c as Ic, d as Cc, e as Da, f as rr, g as Pc, h as Tc, i as Ac, j as Oc } from "./composables-ChY8cvfG.js";
import { a as lr, b as cr, l as Ft, c as qs, d as zs, s as st, r as jt, e as is, f as ur, g as $c, h as Fc, i as Lc, p as Ec, S as Dc, j as Rc, k as Mc } from "./vendor-d3-DUCHe88K.js";
import { _ as ue, o as B, a as ee, s as m, n as d, b as D, c as xe, r as we, u as he, d as St, e as aa, z as _c, Z as En, f as Bc, l as me, p as qi, g as _e, h as jc, i as Vc, F as ns, j as dr, k as Nc, m as Gc, q as qc, t as zc, v as Wc, w as Hc, x as fr, y as Uc, A as Dn, B as hr, C as po, D as Yc, E as Kc, G as ft, H as Ws, I as Ke, J as Si, K as go, L as Zc, M as Ct, N as Hs, O as it, P as Xc, Q as Jc, R as Qc, S as eu, T as tu, U as iu } from "./vendor-pIOdV8fk.js";
function vt() {
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
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const yw = {
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
}, Rn = {
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
function su(t) {
  if (t in Rn) {
    const e = t;
    return vt() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${Rn[e]}"`), Rn[e];
  }
  return t;
}
var se = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(se || {}), nu = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(nu || {});
class xt {
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
      const l = o.constructor?.name === i, u = "getType" in o && typeof o.getType == "function" && o.getType() === e, f = l || u, h = s ? s(o) : !0;
      return f && h;
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
let Mn = null;
const au = (t) => (Mn || (Mn = xt.create(se.Cut, "Cut")), Mn(t));
let _n = null;
const Ze = (t) => (_n || (_n = xt.create(se.Shape, "Shape", (e) => !("shapes" in e))), _n(t));
let Bn = null;
const Et = (t) => (Bn || (Bn = xt.create(se.Stock, "Stock")), Bn(t));
let jn = null;
const gr = (t) => (jn || (jn = xt.create(se.Group, "Group", (e) => "shapes" in e && Array.isArray(e.shapes) && e.type !== "user" && e.type !== "strip")), jn(t));
let Vn = null;
const us = (t) => (Vn || (Vn = xt.create(se.UserGroup, "Group", (e) => "shapes" in e && e.type === "user")), Vn(t));
let Nn = null;
const mr = (t) => (Nn || (Nn = xt.create(se.StripGroup, "Group", (e) => "shapes" in e && e.type === "strip")), Nn(t));
let Gn = null;
const yr = (t) => (Gn || (Gn = xt.create(se.FirstShapeGroup, "Group", (e) => "shapes" in e && e.type === "firstShape")), Gn(t)), Ue = (t) => gr(t) || us(t) || mr(t) || yr(t);
let qn = null;
const Vt = (t) => (qn || (qn = xt.create(se.InputUserGroup, "InputUserGroup")), qn(t));
let zn = null;
const Bi = (t) => (zn || (zn = xt.create(se.Segment, "Segment")), zn(t));
let Wn = null;
const ou = (t) => (Wn || (Wn = xt.create(se.Offcut, "Offcut")), Wn(t)), br = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
};
let Hn = null;
const ru = (t) => (Hn || (Hn = xt.create(se.Saw, "Saw")), Hn(t)), vr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Rectangle")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Rectangle";
}, lu = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Placeable")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Placeable";
};
let Un = null;
const be = (t) => (Un || (Un = xt.create(se.InputShape, "InputShape")), Un(t));
let Yn = null;
const ji = (t) => (Yn || (Yn = xt.create(se.InputStock, "InputStock")), Yn(t));
function cu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function wr(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function uu(t) {
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
  return au(t) ? se.Cut : be(t) ? se.InputShape : ji(t) ? se.InputStock : Vt(t) ? se.InputUserGroup : us(t) ? se.UserGroup : mr(t) ? se.StripGroup : yr(t) ? se.FirstShapeGroup : gr(t) ? se.Group : Ze(t) ? se.Shape : Et(t) ? se.Stock : br(t) ? se.Container : Bi(t) ? se.Segment : ou(t) ? se.Offcut : vr(t) ? se.Rectangle : lu(t) ? se.Placeable : null;
}
const oi = (t) => {
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
}, du = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
function fu(t) {
  return t?.__entityType === se.Shape;
}
function bw(t) {
  return t?.__entityType === se.Group || t?.__entityType === se.StripGroup || t?.__entityType === se.FirstShapeGroup;
}
function vw(t) {
  return t?.__entityType === se.UserGroup;
}
const Sr = ue(["error", "warning"]), xr = ue(["saw", "stock", "part", "group", "machining", "extras"]);
B({
  message: m(),
  identifier: m(),
  field: ee(ee(m())),
  index: ee(d()),
  id: m(),
  // Source object's autoId for linking back
  type: Sr,
  category: ee(xr)
});
const hu = B({
  item: xe().nullable().default(null),
  message: m().default(""),
  params: we(m(), he([m(), d(), D(), St()])).optional(),
  // Translation parameters
  field: ee(ee(m())).default([]),
  index: ee(d()).nullable().default(null),
  id: m().nullable().default(null),
  // Source object's autoId
  issues: ee(xe()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Sr.default("error"),
  category: ee(xr).nullable().default(null),
  throwError: D().default(!1),
  shouldTranslate: D().default(!0)
});
function Pi(t) {
  return !(!t || typeof t != "string");
}
function pu(t) {
  return !Pi(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function gu(t) {
  return !Pi(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function mu(t) {
  return Pi(t) ? t.trim().split(" ").map((e) => zi(e)).join(" ") : "";
}
function zi(t) {
  return Pi(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function yu(t) {
  return Pi(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function bu(t) {
  return Pi(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function ww(t, e = 100) {
  return Pi(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let kr = sr;
function vu(t) {
  kr = t;
}
function Dt(t, e) {
  if (pr())
    return t;
  const i = kr.t(t, { ...e });
  return !i || i === t ? (vt() && console.warn(`[i18n] Translation not found - Key: "${t}"`), t) : zi(i);
}
function wu(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function Su(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (wu(s)) {
      const n = Dt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function xu(t, e) {
  const i = su(t), s = t.startsWith("errors.validation.") ? t : i, n = Su(e);
  return {
    message: Dt(s, n),
    translationKey: s,
    params: n
  };
}
function ku(t, e) {
  return xu(t, e).message;
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
    const i = hu.parse(e), s = ie.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? ku(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((o) => [...o]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const o = `Issue created for ${uu(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
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
aa(
  (t) => t instanceof ie,
  { message: "Must be an Issue instance" }
);
const Ir = /* @__PURE__ */ new Map();
let Cr = !1;
function Iu() {
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
function cn() {
  return Iu(), Ir;
}
function Sw(t, e) {
  Ir.set(t, e);
}
function xw() {
  Cr = !0;
}
function un(t, e) {
  const i = t;
  return i._fieldBehavior = { fieldBehavior: e }, i;
}
function mo(t, e) {
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
function xs(t) {
  const e = {};
  if (t instanceof Bc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = mo(n);
      a && (e[s] = a);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = mo(n);
      a && (e[s] = a);
    }
  }
  return e;
}
typeof _c < "u" && En && En.prototype && (En.prototype.behavior = function(t) {
  return un(this, t);
});
function ge(t, e = {}) {
  let s = xe().refine((o) => o == null ? !0 : typeof o == "object" && o !== null ? ("autoId" in o || "id" in o, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((o) => {
    if (o == null || typeof o == "object" && o !== null && typeof o.getType == "function" || typeof o == "object" && o !== null && o.__ref === !0 || typeof o == "object" && o !== null && "__entityType" in o)
      return o;
    if (typeof o == "object" && o !== null && !o.__ref)
      try {
        const l = cn().get(t);
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
  return n = un(n, a), n;
}
function Le(t, e = {}) {
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
  return i = un(i, s), i;
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
  return s = un(s, n), s;
}
const Pr = m().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Cu = m().max(200).default("").describe("User input name"), Pu = m().default("").describe("Parent identifier for tracking copies and relationships"), Tu = D().default(!1).describe("Prevent automatic rotation optimization"), Au = D().default(!1).describe("Whether this is an offcut piece"), Tr = ee(m()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Wi = he([
  me(""),
  me("l"),
  me("w"),
  me(" ").transform(() => ""),
  St().transform(() => "")
]).default("").describe("Grain direction of the material"), Ar = he([
  // String format (legacy support - color name or hex)
  m(),
  // Object format with hex and name
  B({
    hex: m().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: m().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Or = qi(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  ue(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), Ou = B({
  l1: d().default(0).describe("Long side 1 trim value"),
  l2: d().default(0).describe("Long side 2 trim value"),
  w1: d().default(0).describe("Short side 1 trim value"),
  w2: d().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
B({
  material: D(),
  thickness: D(),
  fit: D(),
  width: D()
}).nullable().default(null);
he([
  me(""),
  me("l"),
  me("w"),
  St()
]).default(null);
we(m(), d()).nullable().default(null);
we(m(), d()).nullable().default(null);
const Ra = he([
  me(0),
  me(1)
]), $u = B({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: Ra.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: d().optional().describe("Order of the batch"),
  id: m().optional().describe("Batch ID"),
  stockId: m().optional().describe("Associated stock ID"),
  rerunning: D().optional().describe("Whether the batch is being rerun"),
  priorityShape: m().nullable().describe("Priority shape identifier (null if none specified)")
});
B({
  subsetUsed: D().optional().describe("Whether a subset was used for strip shape batches"),
  groups: we(m(), $u).describe("Groups of strip shape batches keyed by ID")
});
const Fu = ["x", "y"];
ue(Fu);
const Lu = ["l", "w"];
ue(Lu);
const Ma = ["l", "w"], hi = ue(Ma);
he([
  me(0),
  me(1),
  me(2)
]);
he([
  me(0),
  me(1),
  St()
]);
const Eu = ["sheet", "linear", "roll"], dn = qi(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  he([
    ue(Eu),
    St()
  ]).nullable().default(null)
).describe("Type of stock material"), $r = B({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: D().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: D().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: D().default(!1).describe("Automatically add stock as needed")
}), Du = ue(["none", "schema", "business", "full"]), Rt = B({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: Le("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: Le("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: D().optional(),
  // New validation control properties
  skipSchemaValidation: D().optional(),
  skipBusinessValidation: D().optional(),
  validationMode: Du.optional(),
  enableStrictMode: D().optional()
}), ei = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function Ru(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const _a = Rt.extend({
  // Identity
  id: Pr,
  // Description
  name: Cu,
  // Dimensions
  l: qi((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Length (long side dimension)"),
  w: qi((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Width (short side dimension)"),
  t: d().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: d().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: d().positive().default(1).describe("Calculated area (l * w)"),
  longSide: d().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: d().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: m().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: D().default(!1).describe("Whether this is a duplicate"),
  offcut: Au,
  // Grain
  grain: Wi,
  preventGrainRotation: D().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Tu,
  orientationLock: Or,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: d().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: d().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: m().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: Ou.describe("Reduce the dimensions by specified trim values"),
  trimmed: D().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: B({
    rectangle: ge("Rectangle").nullable().default(null),
    distance: d().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: d().min(0).nullable().default(0).describe("Cost per unit"),
  customData: we(m(), xe()).default({}).describe("Custom user-defined data"),
  identicalTo: Tr,
  notes: m().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), Ba = {
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
}, fn = _a.extend({
  // Identity - override id to be required for containers
  id: m().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: Pu,
  // Container-specific fields
  stockType: dn,
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
  isContainer: D().default(!0).describe("Flag indicating this is a container")
}), hn = {
  // Include all Rectangle computed properties
  ...Ba,
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
    compute: (t) => Et(t) ? t : Bi(t) || Ue(t) ? t.stock : null,
    metadata: {
      cache: !1,
      returnType: "Stock | null"
    }
  }
};
fn.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(hn)
}));
function yo(t, e) {
  return jc(t, e);
}
function ui(t, e) {
  return _e(t, e);
}
function Ji(t, e, i) {
  Vc(t, e, i);
}
function Se(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function bo(t, e = !1) {
  if (!Se(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => Se(s) && s) : i.some((s) => Se(s));
}
function kw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added).map((s) => s), i = {};
  return e.forEach((s) => {
    const n = Mu(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot);
  }), Object.values(i);
}
function Mu(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function _u() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Iw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function Gt(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function Bu(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function ju(t, e) {
  if (!t || !e) return 0;
  const i = t.split(".").map(Number), s = e.split(".").map(Number), n = Math.max(i.length, s.length);
  for (let a = 0; a < n; a++) {
    const o = i[a] || 0, r = s[a] || 0;
    if (o > r) return 1;
    if (o < r) return -1;
  }
  return 0;
}
function vo(t, e) {
  return ju(t, e) > 0;
}
const Di = 1e-10, Vu = 10, Nu = Number.MAX_SAFE_INTEGER, Gu = 4294967295, gt = (t) => typeof t == "number" && Number.isFinite(t), Ds = (t) => Array.isArray(t) && t.length > 0;
function Xi(t, e, i = Di) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const qu = {
  greaterThan: (t, e, i = Di) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Di) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) >= 0,
  lessThan: (t, e, i = Di) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Di) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) <= 0,
  equalTo: (t, e, i = Di) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) === 0
};
function zu(t) {
  return gt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Vu)) : !1;
}
function Wu(t) {
  if (!gt(t) || t < 0 || t > Nu)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Gu + 1) * t);
}
function Hu(t, e) {
  if (!Ds(t))
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
class ks {
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
  isNumber: gt,
  round: zu,
  getRandom: Wu,
  getRandomSample: Hu,
  calculateStandardDeviation: ks.calculateStandardDeviation.bind(ks),
  calculateCoefficientOfVariation: ks.calculateCoefficientOfVariation.bind(ks)
}, Kn = 10, wo = 0;
class Us extends Error {
  constructor(e) {
    super(e), this.name = "NumberFormatError";
  }
}
const Qi = {
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
  if (typeof t == "number" ? i = t : i = new ns(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Yu(t, e) {
  const i = new ns(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new ns(n, e).toFraction(!0);
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
function ja(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(Qi).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function Fr(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(Qi).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(Qi).join(""), a = new RegExp(`^(-?)(\\d+)([${n}])$`), o = new RegExp(`^(-?)([${n}])$`), r = i.match(a), l = i.match(o);
    if (r) {
      const c = r[1], u = r[2], f = r[3], h = Qi[f];
      if (h)
        return `${c}${u} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], f = Qi[u];
      if (f)
        return `${c}${f}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (ja(i)) {
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
  if (t && !(!be(t) && !ji(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const a in t[n])
          Object.prototype.hasOwnProperty.call(t[n], a) && (t[n][a] = Z({ v: t[n][a], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = Z({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function Xu(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function Ju(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function Z(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Kn, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? wo;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Kn) {
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
          if (typeof s == "number" && s !== Kn) {
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
        const r = new ns(o);
        if (isFinite(r.valueOf())) {
          if (a === 0 || a === wo)
            return r.toFraction(!0);
          const l = r.mul(a), c = Math.round(l.valueOf());
          return new ns(c, a).toFraction(!0);
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
function Vi(t, e = !1) {
  const i = typeof t.l == "string" ? Z({ v: t.l }) : t.l, s = typeof t.w == "string" ? Z({ v: t.w }) : t.w;
  if (!e)
    return { l: i, w: s };
  if (!("trim" in t))
    return { l: i, w: s };
  if (wr(t))
    return { l: i, w: s };
  if (vr(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = Z({ v: n.l1 ?? 0 }) + Z({ v: n.l2 ?? 0 }), o = Z({ v: n.w1 ?? 0 }) + Z({ v: n.w2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? Z({ v: a }) : a),
    w: s - (typeof o == "string" ? Z({ v: o }) : o)
  };
}
function Qu(t, e) {
  if ("trim" in t && !wr(t)) {
    const i = t.trim;
    e.l = e.l - (Z({ v: i.l1 ?? 0 }) + Z({ v: i.l2 ?? 0 })), e.w = e.w - (Z({ v: i.w1 ?? 0 }) + Z({ v: i.w2 ?? 0 }));
  }
  return e;
}
function $i(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (ji(t) || be(t) || us(t)) && (s = {
    l: Z({ v: t.l }),
    w: Z({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = Qu(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Lr(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function ed(t) {
  Ue(t) || (Lr(t), [t.l, t.w] = [t.w, t.l]);
}
function Hi(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && ru(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = Z({ v: s.options.minSpacing }) : br(e) && (n = e?.saw?.options.minSpacing);
  const a = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = Vi(e, !0), r = a ? Vi(e, !1) : o, l = Vi(t, !0);
  let c = o;
  if (a && (ne.equalTo(l.l, r.l) && ne.equalTo(l.w, r.w) || ne.equalTo(l.l, r.w) && ne.equalTo(l.w, r.l)) && (c = r), l.l * l.w > c.l * c.w)
    return !1;
  function u(E, L) {
    return ne.equalTo(E, L) || ne.lessThanOrEqualTo(E, L - n * 2);
  }
  function f(E) {
    return u(E.l, c.l) && u(E.w, c.w);
  }
  const h = Er(t, e);
  if (t.orientationLock || i !== null) {
    const E = i ?? (h === "w" ? 1 : 0), L = $i(t, E, !0);
    if (a) {
      const C = $i(t, E, !1);
      if (ne.equalTo(C.l, r.l) && ne.equalTo(C.w, r.w))
        return f(C);
    }
    return f(L);
  }
  const p = $i(t, 0, !0);
  if (a) {
    const E = $i(t, 0, !1);
    if (ne.equalTo(E.l, r.l) && ne.equalTo(E.w, r.w) && f(E)) return !0;
  }
  if (f(p)) return !0;
  const I = $i(t, 1, !0);
  if (a) {
    const E = $i(t, 1, !1);
    if (ne.equalTo(E.l, r.l) && ne.equalTo(E.w, r.w) && f(E)) return !0;
  }
  return f(I);
}
function td(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Ue(t) || us(t) || Ze(t) || be(t)) && (e = t.orientationLock), e;
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
  if (Ue(t))
    return Hi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    wt(t, s, e) && Hi(t, e, s) && i.push(s);
  return i;
}
function wt(t, e = null, i = null) {
  if (!Se(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Ue(t) && nd(t) && e || i && !Hi(t, i, e))
    return !1;
  const s = Er(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function id(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), wt(t, e, i) ? (s === e || ed(t), !0) : !1;
}
function nt(t, e = null, i = null) {
  e ? e = 1 : e = 0;
  const s = t.id || t.autoId || "unknown";
  return i && e && !Hi(t, i, e) ? (console.warn(`[setRotation] ${s}: Cannot rotate to ${e} - won't fit in container`), !1) : id(t, e, i);
}
function Pw(t, e) {
  if (Ue(t)) return t.rot;
  if (!Se(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !Se(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function So(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = Vi(t);
  if (a.l >= e && a.l <= i || a.w >= e && a.w <= i) {
    if (t.l === t.w) return !0;
    const o = Math.max(a.l, a.w), r = Math.min(a.l, a.w);
    if (n) {
      if (s === "l") {
        if (o >= e && o <= i && wt(t, 0, n) || r >= e && r <= i && wt(t, 1, n)) return !0;
      } else if (s === "w" && (r >= e && r <= i && wt(t, 0, n) || o >= e && o <= i && wt(t, 1, n)))
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
  const n = Vi(t), a = Math.max(n.l, n.w), o = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && wt(t, 0, s)) return nt(t, 0);
    if (o === e && wt(t, 1, s)) return nt(t, 1);
  } else if (i === "w") {
    if (o === e && wt(t, 0, s)) return nt(t, 0);
    if (a === e && wt(t, 1, s)) return nt(t, 1);
  }
  return !1;
}
function nd(t) {
  Lr(t);
  const e = Vi(t);
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
      const i = xs(e.schema), s = e.schema;
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
        const r = xs(o);
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
      const p = s.pop() || "0", I = parseInt(p, 10);
      isNaN(I) && s.push(p), n = String(e);
    } else {
      const p = s.pop() || "0", I = parseInt(p, 10);
      isNaN(I) ? (s.push(p), n = "1") : n = String(I + 1);
    }
    s.push(n);
    const a = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let f = {};
    u && (f = xs(u));
    const h = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [p, I] of Object.entries(f))
      I.clone === "reset" && (p in h ? c[p] = h[p] : delete c[p]);
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
    if (a && (o = xs(a)[i] || null), o?.clone)
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
    const n = cn().get(i);
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
class He extends rd {
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
    He.recreateFunc = e;
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
    return e && typeof e == "object" ? (s && (e.id || e.autoId), He.recreateFunc ? He.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
      return e.map((s) => He.cleanEntityForAPI(s));
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
      if (o instanceof Nc) {
        const r = o.options.some((c) => c instanceof Gc), l = o.options.some((c) => c instanceof qc);
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
    if (e instanceof zc || e instanceof Wc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Hc)
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
  dimension: ue(["l", "w"]).optional(),
  shapeCollisions: ee(xe()).optional()
});
B({
  id: m().nullable().optional(),
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  origin: m().optional(),
  dimension: ue(["l", "w"]).optional(),
  direction: ue(ld).nullable().optional(),
  type: m().nullable().optional()
});
const cd = B({
  // ========== Identification ==========
  // Unique identifier for this line
  id: m(),
  // Type classification for this line
  type: m().optional(),
  // ========== Coordinates ==========
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: m().optional(),
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
class vi extends He {
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
  a: m().optional(),
  b: m().optional(),
  stock: ge("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: ue(fd).nullable().optional(),
  type: m().optional(),
  corner: ue(Co).optional(),
  shapePosition: ue(Co).optional(),
  grid: ue(dd).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: D().default(!1),
  collision: D().default(!1),
  tooClose: D().default(!1),
  adjustedForMinSpacing: D().default(!1)
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
}, Is = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Cs = {
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
class Qe extends He {
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
    return e?.cutType !== "efficiency" ? (Is[this.corner] && (this.grid ? Is[this.corner][this.grid] && Is[this.corner][this.grid].forEach((s) => i.add(s)) : Is[this.corner].default?.forEach((s) => i.add(s))), i) : (Cs[this.corner] && (this.grid ? Cs[this.corner][this.grid] && Cs[this.corner][this.grid].forEach((s) => i.add(s)) : Cs[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
class pn extends He {
  // Zod schema for validation and serialization
  static schema = _a;
  static computedProperties = Ba;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Et(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && nt(this, 0), this.orientationLock === "w" && nt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = Gt(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = Ru(this.id);
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
    const s = new pn({
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
class gn extends pn {
  // Zod schema for validation and serialization
  static schema = fn;
  static computedProperties = hn;
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
    const i = gn.schema.partial().parse(e);
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
  id: m().optional().describe("Batch ID"),
  stockId: m().optional().describe("Associated stock ID"),
  rerunning: D().optional().describe("Whether the batch is being rerun"),
  priorityShape: m().nullable().describe("Priority shape identifier (null if none specified)")
}), Rr = B({
  // Strip direction
  myStripDirection: hi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: he([
    ge("Shape", { nullable: !0 }),
    ge("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization"),
  // Phase number
  myPhase: d().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: B({
    subsetUsed: D().optional().describe("Whether a subset was used for strip shape batches"),
    groups: we(m(), md).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Rr.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const yd = {};
class Xt extends He {
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
function oa(t = 0, e, i = null, s = null, n = null) {
  if (!be(i) && !Vt || s === "stock") return !1;
  let a, o;
  if (be(i) ? a = i.orientationLock : Vt(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || Vt(i))
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
  return t === 0 || t === 1 ? oa(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : a;
}
const wd = ["l", "w"], Sd = ["top", "bottom", "left", "right", "merged"], xd = B({
  // Coordinates
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // Dimension and position
  dimension: ue(wd).optional(),
  position: ue(Sd).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: ge("Stock"),
  // Guillotine properties
  isGuillotine: D().default(!1),
  guillotineState: B({
    order: d().nullable().optional(),
    parentSegmentID: m().nullable().optional(),
    phase: d().nullable().optional(),
    segmentCutOrder: d().nullable().optional(),
    partProduced: m().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: B({
    order: d().nullable().optional(),
    function: d().nullable().optional(),
    isDummy: D().nullable().optional(),
    headCutStrip: D().nullable().optional()
  }).nullable().optional(),
  // Cut properties
  isHead: D().default(!1),
  isTrim: D().default(!1),
  beamTrimL1: D().default(!1),
  beamTrimL2: D().default(!1),
  beamTrimW1: D().default(!1),
  beamTrimW2: D().default(!1),
  // Distances
  distances: B({
    bottom: d().nullable().optional(),
    left: d().nullable().optional(),
    right: d().nullable().optional(),
    top: d().nullable().optional(),
    partSize: d().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: D().optional().behavior({ compress: "exclude" })
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
class Va extends He {
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
    return new Va({ x1: e, y1: i, x2: s, y2: n, position: o, stock: a });
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
  cutDirection: hi.optional()
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
  cutDirection: hi,
  myStripDirection: hi.optional(),
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
    cutDirection: hi.optional(),
    myStripParent: he([
      ge("Shape", { nullable: !0 }),
      ge("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: hi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), ds = _a.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ee(m()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: B({
    material: D(),
    thickness: D(),
    fit: D(),
    width: D()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: ge("GuillotineState", {
    nullable: !0,
    // Nullable in schema but always initialized in constructor
    description: "Data for guillotine cutting optimization (always initialized as instance)"
  }).nullable().default(null).behavior({
    clone: "unique",
    serialize: vt() ? "full" : "exclude",
    compress: vt() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: we(m(), d()).default({}).describe("Priority levels for optimization"),
  weighting: we(m(), d()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: D().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: B({
    sampleRotations: ee(d().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: D().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: D().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: d().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: ge("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: we(
    m(),
    we(m(), D())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: B({
    x: d().nullable().default(null),
    y: d().nullable().default(null),
    rot: he([me(0), me(1)]).nullable().default(null),
    total: d().nullable().default(null),
    weighting: we(m(), d()).optional(),
    group: ge("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Po.optional(),
    point: xe().optional().describe("Associated point for placement"),
    myStripParent: he([
      ge("Shape", { nullable: !0 }),
      ge("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: hi.optional(),
    myStripDirection: hi.optional(),
    stock: ge("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: vt() ? "full" : "exclude"
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Po.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: vt() ? "full" : "exclude"
  }),
  // Minimum spacing
  minSpacing: d().min(0).default(0).describe("Minimum spacing around shape or group")
}), fs = {
  // Include all Rectangle computed properties
  ...Ba
  // Placeable doesn't define additional computed properties
};
ds.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(fs)
}));
class Na extends pn {
  // Zod schema for validation and serialization
  static schema = ds;
  static computedProperties = fs;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new Xt();
    else if (!(this.guillotineState instanceof Xt)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new Xt(i);
    }
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), Ze(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof Xt)
      if (i) {
        const a = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), a && (this.guillotineState.stripShapeBatches = a);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new Xt();
    Ze(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = "")), Ue(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
      "reset" in a && typeof a.reset == "function" && a.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !Ue(this) && e?.grain && this.rot && (this.grain = Gt(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, Ze(this) && (this.group.addedAsGroup = "", this.firstShape.isFirstShape = !1), Ue(this) && this.shapes.forEach((e) => {
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
    return !i || cu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: Ze(e) ? e.group.reference : null,
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
    return Et(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Hi(this, e, i);
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Va({
      stock: Et(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
const qt = {
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
function We(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = Dt(i);
  if (s === i) {
    const n = qt[t] || t;
    return vt() && !qt[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return vt() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const Mr = (t, e, i, s, n, a) => {
  const o = _e(t, e);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new ie({
      item: t,
      message: Dt("errors.validation.must_be_string", {
        0: qt[e]
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
      0: qt[e],
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
const $d = ["banding", "finish", "planing", "info"], Zn = m().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), kt = he([
  D(),
  m(),
  we(m(), he([D(), m()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), hs = Rt.extend({
  // ========== Identity ==========
  type: ue($d).optional().describe("Type of extra"),
  enabled: D().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: B({
    a: kt.optional(),
    b: kt.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: B({
    a: kt.optional(),
    b: kt.optional(),
    c: kt.optional(),
    d: kt.optional(),
    l1: kt.optional(),
    l2: kt.optional(),
    w1: kt.optional(),
    w2: kt.optional()
  }).optional().describe("Partial mapping of side keys to extra values")
  // NOTE: Options are now centralized in CalculationData.extrasOptions
  // No per-shape options are stored - all extras use centralized configuration
}), mn = {
  // Inherit computed properties from validation base
  ...ei
  // Add any extra-specific computed properties here
};
we(
  ue(["a", "b"]),
  kt
);
we(
  ue(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  kt
);
const Br = B({
  min: d().optional().describe("Minimum value"),
  max: d().optional().describe("Maximum value"),
  message: m().optional().describe("Custom error message")
});
B({
  scope: ue(["face", "side"]),
  key: m(),
  // Face or Side key
  original: m()
  // Original ExtraLocation string
});
const Fd = B({
  location: m().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: we(m(), Br).optional(),
  disabledMessage: m().optional().describe("Message when location is disabled")
}), Ld = B({
  global: we(m(), Br).optional(),
  locations: ee(Fd).optional().describe("Location-specific constraints"),
  defaultMessage: m().optional().describe("Default message when constraints not met")
});
B({
  scope: ee(ue(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ee(aa()).optional().describe("Available face locations"),
  sides: ee(aa()).optional().describe("Available side locations"),
  constraints: Ld.optional()
});
const jr = hs, Ed = {
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
class as extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = hs;
  static computedProperties = mn;
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
class Lt extends as {
  // Required: Define schema and computed properties for SchemaClass
  static schema = jr;
  static computedProperties = {
    ...as.computedProperties,
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
const Dd = Rt.extend({
  // Identity
  id: m().optional().describe("Unique identifier for the extras container"),
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
}, Ci = ["l1", "l2", "w1", "w2"], Md = ["a", "b", "c", "d"], Pt = [...Ci, ...Md], ut = ["a", "b"], Vr = hs, _d = {
  // Inherit computed properties from Extra base (includes validation base)
  ...mn,
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
class bt extends as {
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
      for (const s of ut)
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
      for (const e of ut)
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
    for (const i of ut)
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
    return new bt(e);
  }
  /**
   * Create empty finish
   */
  static empty() {
    return new bt();
  }
  /**
   * Create with both faces
   */
  static bothFaces(e = !0) {
    const i = new bt();
    return i.setBothFaces(e), i;
  }
  /**
   * Create with front face only
   */
  static frontOnly(e = !0) {
    const i = new bt();
    return i.setFace("a", e), i;
  }
  /**
   * Create with back face only
   */
  static backOnly(e = !0) {
    const i = new bt();
    return i.setFace("b", e), i;
  }
}
const Nr = hs, Bd = {
  // Inherit computed properties from Extra base
  ...mn,
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
class di extends as {
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
      for (const s of ut)
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
      for (const s of Pt)
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
      for (const e of ut)
        this.faces[e] = !1;
    if (this.sides)
      for (const e of Pt)
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
    for (const i of ut)
      this.setFace(i, e);
  }
  /**
   * Set all sides to the same value
   */
  setAllSides(e) {
    for (const i of Pt)
      this.setSide(i, e);
  }
  /**
   * Calculate total planing area
   */
  calculateArea(e, i) {
    let s = 0;
    if (this.faces) {
      const n = e * i;
      for (const a of ut)
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
      for (const a of Pt)
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
    return new di(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new di();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new di();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new di();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new di();
    return i.setAllSides(e), i;
  }
}
class Ge extends He {
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
    return oi(this.banding) && (i += this.banding.getCost(e)), Kt(this.finish) && (i += this.finish.getCost(e)), Zt(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return oi(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Kt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Zt(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(oi(this.banding) && this.banding.hasValues() || Kt(this.finish) && this.finish.hasValues() || Zt(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    oi(this.banding) && this.banding.clear(), Kt(this.finish) && this.finish.clear(), Zt(this.planing) && this.planing.clear();
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
    e ? e instanceof bt ? this.finish = e : this.finish = new bt(e) : this.finish = void 0;
  }
  /**
   * Set planing
   */
  setPlaning(e) {
    e ? e instanceof di ? this.planing = e : this.planing = new di(e) : this.planing = void 0;
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
    return new Ge(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new Ge();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new Ge(e);
  }
  /**
   * Check if any extras are applicable to shape
   * Used for UI validation to determine if extras tab should be enabled
   */
  isApplicable(e) {
    return !!(oi(this.banding) && this.banding.isApplicable(e) || Kt(this.finish) && this.finish.isApplicable(e) || Zt(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: oi(this.banding) && this.banding.hasValues() || !1,
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
    return s ? du(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return Ge.hasBanding(e);
        case "finish":
          return Ge.hasFinish(e);
        case "planing":
          return Ge.hasPlaning(e);
        case "imageUpload":
          return Ge.hasImageUpload(e);
      }
    return Ge.hasBanding(e) || Ge.hasFinish(e) || Ge.hasPlaning(e) || Ge.hasImageUpload(e);
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
    return Ge.hasBanding(e) && i.push("banding"), Ge.hasFinish(e) && i.push("finish"), Ge.hasPlaning(e) && i.push("planing"), Ge.hasImageUpload(e) && i.push("imageUpload"), i;
  }
}
const jd = B({
  id: m().optional(),
  url: m().optional(),
  size: d().optional(),
  mimeType: m().optional(),
  name: m().optional(),
  width: d().optional(),
  height: d().optional()
}), Vd = hs.extend({
  // ImageUpload specific properties
  images: ee(jd).default([]).describe("Array of uploaded images"),
  maxImages: d().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ee(m()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: d().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: m().optional().describe("Description of uploaded images"),
  tags: ee(m()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), Nd = {
  // Inherit computed properties from Extra base class
  ...mn,
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
class Tw extends as {
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
let dt = Gr;
function zd() {
  if (dt.guillotine.secondPass && !dt.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (dt.captureProfile && dt.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
zd();
function Aw(t, e = null) {
  if (!t) return dt;
  const i = Wd(t, e);
  if (!i) return dt;
  const s = fr({}, dt, i);
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
        return n.groups.guillotine.strips = dt.groups.guillotine.strips, n.groups.guillotine.segments = dt.groups.guillotine.segments, n.sample.guillotine = 4, n.guillotine.stripShapes.iterations = dt.guillotine.stripShapes.iterations, n;
      } else
        return t.config;
      else return t.config;
    }
  }
  return t.config;
}
function Ow(t, e, i) {
  return Uc(t, e, i);
}
try {
  typeof Dn < "u" && Dn && (Dn.showDiff = !0);
} catch (t) {
  console.warn("Error accessing chaiConfig, skipping configuration:", t);
}
const Ao = hr("tests");
hr("timers");
let tt;
if (typeof po == "function")
  tt = po;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const t = new Proxy({}, { get: () => () => t });
  tt = () => t;
}
function It(t = [], e = null) {
  if (!t?.length) return;
  if (vt() && dt && dt.runTests)
    for (const s of t) {
      if (!s || typeof s != "function") {
        console.error("Invalid test function provided:", s);
        continue;
      }
      try {
        s();
      } catch (n) {
        const a = n instanceof Error ? n.message : String(n);
        if (e ? Ao(e, a) : Ao(a), dt && dt.throwErrorsOnFailedTests) throw n;
      }
    }
}
function Ys(t) {
  return t && typeof t == "object" && "area" in t;
}
const ra = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, Ye = (t, e, i) => e in t ? t[e] : (console.warn(ra.missingProperty(String(e), i)), null), Ps = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Fi = (t, e) => {
  if (Ys(t) && Ys(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, $t = (t, e) => {
  const i = Ye(t, "id", "first item"), s = Ye(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Bt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const o = Ye(i, n, "first item"), r = Ye(s, n, "second item");
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
const zt = {
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
  LDIDA: Ps(
    Bt([["l", "desc"]]),
    $t
  ),
  WDIDA: Ps(
    Bt([["w", "desc"]]),
    $t
  ),
  // Area-based sorts
  AD: (t, e) => -Fi(t, e),
  AA: Fi,
  AAID: Ps(
    Fi,
    $t
  ),
  ADID: Ps(
    (t, e) => -Fi(t, e),
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
    return n !== 0 ? n : -Fi(t, e);
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
    const i = Ye(t, "placementOrder", "first item") ?? 0, s = Ye(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = Ye(t, "offcut", "first item"), s = Ye(e, "offcut", "second item"), n = Ye(t, "placementOrder", "first item") ?? 0, a = Ye(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = Ye(t, "offcut", "first item"), s = Ye(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : $t(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = $t(i, s);
    if (n !== 0) return n;
    const a = Ye(t, "offcut", "first item"), o = Ye(e, "offcut", "second item");
    if (a && !o) return 1;
    if (!a && o) return -1;
    const r = Ye(t, "placementOrder", "first item") ?? 0, l = Ye(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = $t(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = Ye(t, "placementOrder", "first item") ?? 0, o = Ye(e, "placementOrder", "second item") ?? 0;
      return a - o;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = Ye(t, "placementOrder", "first item") ?? 0, s = Ye(e, "placementOrder", "second item") ?? 0, n = i - s;
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
      return console.warn(ra.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(ra.missingLongSide), 0) : i[t] === e[t] ? -Fi(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
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
const Kd = Bu;
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
      return e && Et(e) ? t[i]((a) => n(a) && $o(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && a.willItFit(e));
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
    if (Ze(r))
      l = r.parentId;
    else if (Ue(r))
      l = r.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), a) {
        const c = r.l <= r.w, u = c ? r.l : r.w, f = c ? r.w : r.l, h = u + "-" + f + "-" + r.orientationLock;
        if (a.has(h)) continue;
        a.set(h, !0);
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
  t.sort(zt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function zw(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
const zr = ee(m()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), of = ue(["l", "w"]).nullable().default(null), Wr = he([
  me("l"),
  me("w"),
  St()
]).default(null), rf = B({
  stockId: m().optional(),
  material: m().optional(),
  thickness: d().optional(),
  grain: Wi.optional()
}).describe("Which stock(s) this shape is a match for "), lf = we(m(), xe()).default({});
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
  inUserGroup: D().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: D().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: d().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: ge("Group", {
    nullable: !0,
    description: "Group this shape belongs to"
  }).optional().behavior({ clone: "reset", compress: "reference" }),
  // ID of group this was added as part of (preserved during serialization)
  addedAsGroup: m().default("").describe("ID of group this was added as part of")
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: ""
}).describe("Group metadata and reference"), la = ds.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: uf,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: m().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Tr,
  // Whether this is a duplicate
  duplicate: D().default(!1).describe("Whether this is a duplicate shape"),
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
  ...fs,
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
la.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Hr)
}));
class yn extends Na {
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
  static schema = la;
  static computedProperties = Hr;
  static defaults = la.parse({});
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
    const i = new yn(e.data);
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
const Ur = ["horizontal", "vertical"], Yr = ["auto", "user", "strip", "firstShape"], Ga = ue(Ur).optional(), df = B({
  x: d(),
  y: d(),
  autoId: m().optional(),
  rot: Ra
}), ff = ds.extend({
  // Override quantity - always 1 for groups
  q: d().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: D().default(!0),
  // Group-specific fields
  shapes: Le("Shape").default([]),
  direction: Ga,
  container: he([
    ge("Segment"),
    ge("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ee(df).default([]),
  type: ue(Yr).default("auto"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: D().default(!1),
  collision: D().default(!1),
  counter: d().int().min(0).default(0),
  inputId: m().optional()
}), hf = {
  ...fs,
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
  id: m(),
  x: d(),
  y: d(),
  shapes: Le("Shape"),
  direction: ue(Ur),
  type: ue(Yr),
  container: he([
    ge("Segment"),
    ge("Stock")
  ]).optional()
});
class bn extends Na {
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
      if (!Ze(s) && !fu(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (Ze(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((o) => o.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new yn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new bn(i);
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
      const h = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? h.x = i : h.y = i, this.positions.push(h), l.group.inGroup = !0, i += a === this.shapes.length - 1 ? f : f + c, a++;
    }
    this.groupLength = i;
    const o = Gt(n), r = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let f;
        return u !== void 0 && u !== c.rot ? f = o === "l" ? c.w : c.l : f = c[o], f > l ? f : l;
      },
      0
    );
    if (this.groupWidth = r, vt()) {
      const l = this.shapes.slice(0, -1).reduce((f, h) => f + h.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, h) => f + h[n], 0) + l;
      It([
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
    const e = Oo(this.direction), i = Gt(e);
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
  Wi,
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
), Xn = (t) => Ce(
  qi(
    (e) => e === "" || e === null ? null : e,
    he([
      // Remove custom messages - let the error map handle translation with TOO_SMALL key
      t.allowZero ? d().min(0) : d().gt(0),
      m(),
      St()
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
  m().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), bf = () => Ce(
  m().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), vf = () => Ce(
  he([
    d().min(0),
    m()
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
  m().max(500).optional().transform((t) => typeof t == "string" ? t.replace(/,/g, " ") : ""),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Sf = (t) => Ce(
  D().default(!1),
  t
), xf = (t, e) => Ce(
  ue(t),
  e
), Qt = {
  field: Ce,
  boolean: Sf,
  enum: xf,
  custom: pf
}, kf = B({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: m().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: m().optional().describe("Reference marker for object recreation")
}), If = B({
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
}), Cf = qi(
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
      he([d(), m()]).default(0),
      { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    l2: Ce(
      he([d(), m()]).default(0),
      { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    w1: Ce(
      he([d(), m()]).default(0),
      { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    w2: Ce(
      he([d(), m()]).default(0),
      { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
    )
  }).default({ l1: 0, l2: 0, w1: 0, w2: 0 })
), Pf = B({
  // ========== Identity ==========
  id: Pr,
  index: d().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: Xn({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: Xn({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: Xn({
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
  rot: Ra.default(0),
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
  notes: wf()
}), Ks = B({
  ...kf.shape,
  // System properties from AutoSerializable
  ...Rt.shape,
  ...Pf.shape,
  // Core business fields
  ...If.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: m().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), qa = {
  // Include validation computed properties (isValid)
  ...ei,
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
    const s = t ? Z({ v: t, nf: e }) : null;
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
    l != null && (n[r] = Z({ v: l, nf: e }));
  }), n;
}
const Of = ["efficiency", "guillotine", "beam", "none"], ca = ["l", "w", "flex", "none"], $f = ["efficiency", "time"], Ff = ["l", "w"], Zr = ["efficiency", "smallest"], Lf = ["dimensions", "identical", "none"], Zs = ["sheet", "linear", "roll"], vn = he([
  d().int().positive(),
  St(),
  Yc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), wn = ue(Of).nullable().optional().transform((t) => t === null ? void 0 : t), Sn = ue(ca).nullable().optional().transform((t) => t === null ? void 0 : t), za = ue(Zr).default("efficiency").describe("Method for selecting stocks"), Wa = ue(Lf).default("identical").describe("How to stack identical parts"), xn = B({
  strategy: ue($f).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: D().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Ha = B({
  primaryCompression: ue(Ff).default("w")
}).default({
  primaryCompression: "w"
});
B({
  stockType: dn,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: vn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: wn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: Sn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: xn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Ha,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: za,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Wa
});
const Ua = d().min(0).default(0), Ya = d().min(0).default(0), Xs = d().min(0).default(0), Ef = B({
  dimension: Ya,
  minSpacing: Xs
});
function ua(t) {
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
function da(t, e) {
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
  wn,
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
  Sn,
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
  za,
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
  Wa,
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
  xn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), jf = Ce(
  Ha,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), Js = B({
  ...Rt.shape,
  // ========== Stock Type ==========
  stockType: Ce(
    ue([...Zs]).default("sheet"),
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
      Ua,
      m().default("0")
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
    vn,
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
      m(),
      Xs
    ]),
    stackingMode: _f,
    minSpacingDimension: B({
      dimension: he([
        m(),
        Ya,
        St()
      ]).optional(),
      minSpacing: he([
        m(),
        Xs,
        St()
      ]).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Vf = {
  // Include validation computed properties (isValid)
  ...ei,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => ua(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => da(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, ss = Ks.extend({
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
  ...qa,
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
    m().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: Ce(
    ee(m()).optional(),
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
  ...qa
  // InputStock doesn't define additional computed properties
}, Ka = Rt.extend({
  // ========== Identification ==========
  id: m().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ee(m()).default([]).describe("List of shape IDs in this group"),
  shapes: ee(m()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: Ga,
  // 'horizontal' | 'vertical'
  q: d().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: D().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: m().optional().describe("Group name"),
  material: m().optional().describe("Material type"),
  grain: Wi.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: B({
    stockId: m().optional(),
    material: m().optional(),
    thickness: d().optional(),
    grain: Wi.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ee(xe()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), qf = {
  // Include validation computed properties (isValid)
  ...ei
  // InputUserGroup doesn't define additional computed properties
};
B({
  parts: ee(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: Ga,
  q: d().int().min(1).describe("Quantity of groups")
});
function Qs() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Mi(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ui(t) {
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
  return i.success ? [] : Ui(i.error);
}
const Xr = {
  clearValidation: Qs,
  addIssue: Mi,
  validateWithSchema: Fo,
  zodErrorsToIssues: Ui,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return Qs.call(this), e.skipSchemaValidation || Fo(t, this).forEach((s) => Mi.call(this, s)), this.issues || [];
  }
};
class Jr extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ks;
  static computedProperties = qa;
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
    s.name?.length ? s.name = yu(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Af(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
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
    return Qs.call(this), e?.skipSchemaValidation || Xr.runValidation.call(
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
      l: Z({ v: s }),
      w: Z({ v: n })
    }, o = typeof this.trim.l1 == "number" ? this.trim.l1 : parseFloat(String(this.trim.l1)) || 0, r = typeof this.trim.l2 == "number" ? this.trim.l2 : parseFloat(String(this.trim.l2)) || 0, l = typeof this.trim.w1 == "number" ? this.trim.w1 : parseFloat(String(this.trim.w1)) || 0, c = typeof this.trim.w2 == "number" ? this.trim.w2 : parseFloat(String(this.trim.w2)) || 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: a.l - (Z({ v: o }) + Z({ v: r })),
      w: a.w - (Z({ v: l }) + Z({ v: c }))
    };
  }
}
const fa = Rt.extend({
  // Core properties from shared schema
  stockType: dn,
  stackHeight: vn.describe("Maximum stack height"),
  cutType: wn,
  cutPreference: Sn,
  // Blade width (numeric for runtime)
  bladeWidth: Ua.describe("Blade width"),
  // Guillotine options
  guillotineOptions: xn,
  // Efficiency options
  efficiencyOptions: Ha,
  // General options (nested stockSelection and stackingMode)
  options: B({
    stockSelection: za,
    minSpacing: Xs,
    stackingMode: Wa,
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
  ...ei,
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
fa.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
class Qr extends He {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = fa;
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
  static defaults = fa.parse({});
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
function Za(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, a] of Object.entries(e)) {
    const o = t[n];
    switch (a.type) {
      case "number":
        o != null ? s[n] = typeof o == "string" ? Z({ v: o, nf: i }) : o : o === null && (s[n] = null);
        break;
      case "trim":
        if (o) {
          const r = {};
          for (const [l, c] of Object.entries(o))
            r[l] = typeof c == "string" ? Z({ v: c, nf: i }) : c;
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
      minSpacing: typeof t?.minSpacing == "string" ? Z({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? Z({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? Z({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
class el extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Js;
  static computedProperties = Vf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = ua(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = da(this.stockType, this.cutType);
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
    if (Qs.call(this), e?.skipSchemaValidation || Xr.runValidation.call(
      this,
      Js,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = typeof this.bladeWidth == "string" ? parseFloat(this.bladeWidth) : this.bladeWidth;
        isNaN(i) || i < 0 ? Mi.call(this, new ie({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Mi.call(this, new ie({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Mi.call(this, new ie({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Mi.call(this, new ie({
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
    const n = ua(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, o = s !== this.cutType;
    if (a || o) {
      const r = da(this.stockType, this.cutType);
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
    const e = this.toData(), i = Za(
      e,
      Uf
    );
    return new Qr(i);
  }
}
const tl = Pt, Lo = ut;
Ci.map((t) => `side.${t}`), Lo.map((t) => `face.${t}`), Lo.map((t) => `face.${t}`), tl.map((t) => `side.${t}`);
const il = ["radius", "bevel"], Yf = Rt.extend({
  // Corner type
  type: ue(il).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Kf = {
  // Inherit computed properties from validation base
  ...ei,
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
class Ni extends He {
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
    return new Ni(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Ni({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Ni({ type: "bevel", size: e, index: i });
  }
}
const sl = ["l1", "l2", "w1", "w2"], Zf = Rt.extend({
  // Position
  position: d().min(0).default(0).describe("Position along the side"),
  side: ue(sl).describe("Side where hinge is placed"),
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
  ...ei,
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
}, Jf = ["regular", "hinge", "shelf"], Qf = Rt.extend({
  // Position
  x: d().min(0).default(0).describe("X position from left edge"),
  y: d().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: d().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: d().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: d().default(0).describe("Face index (0=front, 1=back)"),
  type: ue(Jf).default("regular").describe("Type of hole")
}), eh = {
  // Inherit computed properties from validation base
  ...ei,
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
class Nt extends He {
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
    return new Nt({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new Nt(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class en extends He {
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
    return this.generateHoles(i, s).map((a) => new Nt(a));
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
      s.push(new Nt({
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
    return new en(e);
  }
}
const th = Rt.extend({
  // Collections of machining operations
  holes: Le("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: Le("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: Le("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: D().default(!0).describe("Whether machining is enabled")
}), ih = {
  // Inherit computed properties from validation base
  ...ei,
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
let sh = class ha extends He {
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
    this.holes.push(e instanceof Nt ? e : new Nt(e)), this.validate();
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
    this.hingeHoles.push(e instanceof en ? e : new en(e)), this.validate();
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
    const i = e instanceof Ni ? e : new Ni(e);
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
        i.push(a instanceof Nt ? a : new Nt(a));
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
    return new ha();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new ha(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new Nt(n));
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
    message: Dt("errors.validation.must_be_object", { 0: "banding" }),
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
      message: Dt("errors.validation.must_be_object", {
        0: qt.customData
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
          0: qt.customData
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
  return o === null || o === "" || o === void 0 || i != null && Z({ v: o }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: We("x", { returnKey: !0 }),
      // positional (legacy)
      field: We("x", { returnKey: !0 }),
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
  return o === null || o === "" || o === void 0 || i != null && Z({ v: o }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: We("y", { returnKey: !0 }),
      // positional (legacy)
      field: We("y", { returnKey: !0 }),
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
      0: We("l", { returnKey: !0 }),
      // positional (legacy)
      field: We("l", { returnKey: !0 })
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
      0: We("w", { returnKey: !0 }),
      // positional (legacy)
      field: We("w", { returnKey: !0 })
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
      message: Dt("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
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
function vh(t) {
  return be(t) || Ze(t) || us(t);
}
function wh(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function Sh(t, e, i) {
  return i ? !Se(t.t) || !Se(e.t) ? !1 : Ze(t) ? ne.equalTo(Z({ v: t.t }), Z({ v: e.t })) : t.t === e.t : !0;
}
function xh(t, e, i) {
  return i?.stockType !== "linear" || !Ze(t) && !be(t) ? !0 : wt(t, 0, e) && ne.equalTo(Z({ v: t.w }), Z({ v: e.w })) || wt(t, 1, e) && ne.equalTo(Z({ v: t.l }), Z({ v: e.w }));
}
function kh(t, e, i, s = 0) {
  const n = be(t[0]), a = i.stockType;
  if (t.some((C) => Se(C.stockLock) && C.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((C) => n || C.autoAdd === !0 || Se(C.q) && C.q > 0);
  const r = e.some((C) => Se(C.material)), l = e.some((C) => Se(C.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), p = [];
  let I = s;
  for (const C of t) {
    const A = e.map((V, R) => {
      const F = vh(C) && Hi(C, V, void 0, i), H = wh(C, V, r), j = Sh(C, V, l), g = xh(C, V, i);
      return {
        stockItem: V,
        stockIndex: R,
        fit: F,
        material: H,
        thickness: j,
        width: g,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: F && H && j && (a !== "linear" || g)
      };
    });
    C.stockMatch = {
      fit: A.some((V) => V.fit),
      material: !r || A.some((V) => V.material),
      thickness: !l || A.some((V) => V.thickness),
      width: a !== "linear" || A.some((V) => V.width)
    };
    const $ = A.filter((V) => V.satisfiesAll), x = $.length > 0;
    if (!n && x) {
      const V = $.map((R) => R.stockItem.parentId);
      C.stockLock = V, V.forEach((R) => c.add(R));
    }
    C.stockMatch.fit ? x || (r && !C.stockMatch.material && (h.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["material"]],
      index: [I],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !C.stockMatch.thickness && (h.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["t"]],
      index: [I],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !C.stockMatch.width && (f.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["w"]],
      index: [I],
      message: "errors.validation.no_matching_stock_width"
    }))), C.stockMatch.material && C.stockMatch.thickness && (a !== "linear" || C.stockMatch.width) && (h.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["material"], ["t"]],
      index: [I],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["l"], ["w"]],
      index: [I],
      message: "errors.validation.will_not_fit"
    }))), I++;
  }
  t.forEach((C) => C.stockMatch = null);
  let E, L;
  return n ? (E = t.filter((C) => u.has(C) || f.has(C) || h.has(C)).sort(zt.ID), L = []) : (E = t.filter((C) => u.has(C) || f.has(C) || h.has(C) || !C.stockLock || !C.stockLock.length).sort(zt.ID), L = e.filter((C) => !c.has(C.parentId)).sort(zt.ID), e = e.filter((C) => Et(C)).filter((C) => c.has(C.parentId)), t = t.filter((C) => !u.has(C) && !f.has(C) && !h.has(C) && C?.stockLock?.length)), {
    stockList: e,
    unusableStock: L,
    shapeList: t,
    unusableShapes: E,
    newIssues: p
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
    const r = Z({ v: e }), l = Z({ v: a }), c = Z({ v: o }), u = l - r * 2, f = c - r * 2;
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
  if ((!Et(t) || Et(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
    try {
      const c = Z({ v: a }), u = Z({ v: o }), f = (E) => {
        if (E == null) return 0;
        if (typeof E == "number" || typeof E == "string")
          try {
            return Z({ v: E }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, h = {
        w1: f(_e(r, "w1")),
        w2: f(_e(r, "w2")),
        l1: f(_e(r, "l1")),
        l2: f(_e(r, "l2"))
      }, p = h.w1 + h.w2, I = h.l1 + h.l2;
      p >= c && new ie({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${We("w1").toUpperCase()} + ${We("w2").toUpperCase()}`,
          // positional (legacy)
          1: We("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${We("l1", { returnKey: !0 })} + ${We("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: We("l", { returnKey: !0 }),
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
          0: `${We("l1").toUpperCase()} + ${We("l2").toUpperCase()}`,
          // positional (legacy)
          1: We("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${We("l1", { returnKey: !0 })} + ${We("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: We("w", { returnKey: !0 }),
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
}, at = {
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
    return ss;
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
    this.extras || (this.extras = new Ge()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new Ge()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new Ge()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new Ge()), this.extras.imageUpload = e;
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
      extras: e.extras || new Ge()
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
      if (e = Z({ v: e }), this.trim) {
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
      for (let h = this.issues.length - 1; h >= 0; h--)
        this.issues[h].field.some((p) => l.includes(p[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((p) => l.includes(p[0])) && this.warnings.splice(h, 1);
      const c = e.fields.reduce((h, p) => (h[p] = !0, h), {}), f = ss.pick(c).safeParse(this.toData());
      if (!f.success) {
        const h = Ui(f.error);
        this.issues.push(...h);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = ss.safeParse(this.toData());
      if (!l.success) {
        const c = Ui(l.error);
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
    o("l") && at.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("w") && at.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("t") && at.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), o("q") && at.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), o("trim") && at.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, o("customData") && at.customData({
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
    const i = Za(
      this.toData(),
      Wf,
      e
    );
    return new yn(i);
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
  fitsAll: D().default(!1),
  fitsAny: D().default(!1),
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
}), pa = B({
  ...fn.shape,
  ...$r.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: d().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: d().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: Oh.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: D().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: m().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: ge("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: xe().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: $h.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: D().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: ue(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: D().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: D().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: m().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Ar.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: d().positive().optional().describe("Weight in kg"),
  imageUrl: m().url().optional().describe("Image URL for stock display")
}), nl = {
  // Include all Container computed properties
  ...hn,
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
pa.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(nl)
}));
class tn extends gn {
  static schema = pa;
  static computedProperties = nl;
  static defaults = pa.parse({});
  constructor(e = {}) {
    const i = tn.preprocessData(e);
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
      const n = at.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = at.grain({ item: e, index: e?.index });
    i.push(...s), this.issues.push(...i.filter((n) => n));
  }
  /**
    * Create stock instance with live objects
    */
  static create(e) {
    const i = { ...e.data };
    e.saw && (i.saw = e.saw);
    const s = new tn(i);
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
      for (let h = this.issues.length - 1; h >= 0; h--)
        this.issues[h].field.some((I) => c.includes(I[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((I) => c.includes(I[0])) && this.warnings.splice(h, 1);
      const u = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", u);
      const f = e.fields.reduce((h, p) => (h[p] = !0, h), {});
      try {
        const h = xi.pick(f);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(f));
        const p = h.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", p.success ? "SUCCESS" : "FAILED"), p.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", p.error.issues);
          const I = Ui(p.error);
          this.issues = [...this.issues, ...I];
        }
      } catch (h) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, h);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = xi.safeParse(this.toData());
      if (!c.success) {
        const u = Ui(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const a = e?.fields, o = (c) => !a || a.includes(c);
    ["l", "w", "t"].forEach((c) => {
      o(c) && at[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), o("grain") && at.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("trim") && at.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), o("q") && at.q({
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
    const a = Za(
      s,
      Hf,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new tn(a);
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
class Hw extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ka;
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
    this.clearValidation(), e.q !== void 0 && at.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = at.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const a = at.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...a), i.length) return i;
    const o = this.joinDimension, r = at.groupDimensions({
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
        a && (be(a) || Ze(a)) && s.push(a);
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
      n && (be(n) || Ze(n)) && i.push(n);
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
      const h = s.filter((I) => be(I) || Ze(I)), p = this.validateWithShapes(h);
      if (p.filter((I) => I.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${p[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const o = a.map((h) => be(h) ? h.toShape() : h), r = o[0];
    o.forEach((h) => {
      if (s && Array.isArray(s)) {
        const p = s.findIndex((I) => "group" in I && I.group?.inUserGroup ? !1 : "parentId" in I && "parentId" in h && I.parentId === h.parentId || "id" in I && "id" in h && I.id === h.id);
        p !== -1 && s.splice(p, 1);
      }
      if ("setRotationToOrientationLockWithoutContainer" in h && typeof h.setRotationToOrientationLockWithoutContainer == "function")
        h.setRotationToOrientationLockWithoutContainer();
      else if ("orientationLock" in h && h.orientationLock) {
        const p = h.orientationLock;
        try {
          p === "l" && "rot" in h ? h.rot = 0 : p === "w" && "rot" in h && (h.rot = 1);
        } catch {
        }
      }
      "group" in h && h.group && (h.group.inUserGroup = !0);
    });
    let l = 0, c = 0;
    this.direction === "horizontal" ? (c = r.w, o.forEach((h) => l += h.l)) : (l = r.l, o.forEach((h) => c += h.w));
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
    }, f = new bn(u);
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
  min: he([m(), d()]).optional(),
  max: he([m(), d()]).optional()
});
we(m(), Ms);
B({
  holes: we(m(), Ms),
  hingeHoles: we(m(), Ms),
  corners: we(m(), Ms)
});
B({
  numberFormat: xe().optional(),
  // NumberFormat type
  decimalPlaces: d().optional(),
  fractionRoundTo: d().optional(),
  faces: B({
    enabled: D()
  }).optional(),
  holes: B({
    enabled: D(),
    defaultDiameter: d().optional(),
    diameters: ee(d()).optional(),
    minDiameter: d().optional(),
    maxDiameter: d().optional(),
    enableDepth: D().optional(),
    depths: ee(d()).optional(),
    defaultDepth: d().optional(),
    minDepth: d().optional(),
    maxDepth: d().optional()
  }).optional(),
  hingeHoles: B({
    enabled: D(),
    minimumHoleDistance: d().optional(),
    defaultDistanceFromEdge: d().optional(),
    defaultOuterSpacing: d().optional(),
    defaultHingeLength: d().optional()
  }).optional(),
  shelfHoles: B({
    enabled: D(),
    diameters: ee(d()).optional(),
    depths: ee(d()).optional()
  }).optional(),
  corners: B({
    enabled: D(),
    minValue: d().optional(),
    maxValue: d().optional(),
    types: ee(ue(["bevel", "radius"])).optional(),
    enableBanding: D().optional()
  }).optional(),
  banding: B({
    enabled: D(),
    labels: ee(m()).optional(),
    options: xe().optional(),
    // ExtrasOptions
    pricing: we(m(), d()).optional(),
    enableCorners: D().optional(),
    enableTypes: D().optional(),
    types: ee(m()).optional()
  }).optional()
});
const Fh = B({
  id: m(),
  x: d(),
  y: d(),
  diameter: d(),
  depth: d(),
  face: he([me(0), me(1)]),
  type: m().nullable().optional(),
  valid: D().optional()
}), Lh = B({
  id: m(),
  position: d(),
  side: ue(sl),
  face: he([me(0), me(1)]),
  numHoles: d(),
  diameter: d(),
  depth: d(),
  hingeLength: d(),
  distanceFromEdge: d(),
  outerSpacing: d(),
  minimumHoleDistance: d().optional(),
  positionLimit: d().optional(),
  valid: D().optional()
}), Eh = B({
  type: ue(il).nullable(),
  size: d(),
  valid: D().optional()
});
B({
  holes: ee(Fh).optional(),
  hingeHoles: ee(Lh).optional(),
  corners: we(m(), Eh).optional()
});
B({});
const Dh = ["l", "w"], Rh = ds.extend({
  // Identity - offcuts need IDs for tracking and export
  id: m().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: D().default(!1),
  flex: ue(Dh).optional(),
  // Cost is calculated, not set
  cost: d().min(0).nullable().default(0)
}), Mh = {
  ...fs,
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
class al extends Na {
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
    Kc(m(), ge("Point")),
    we(m(), ge("Point"))
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
class ti extends He {
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
    const i = new ti();
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
const ol = ["root", "firstShape", "near", "far", ""], jh = fn.extend({
  // Cutting information
  cuts: Le("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: ge("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: d().int().min(0).nullable().default(null),
  cutDirection: ue(Ma).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: D().default(!1),
  firstShape: ge("Shape"),
  children: Le("Segment", {
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
  type: ue(ol).nullable().default(null),
  placementOrder: d().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: D().default(!1),
  hasHeadCut: D().default(!1),
  isInitial: D().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: D().default(!1),
  // Visualization flags
  completed: D().optional(),
  rowSegment: D().optional()
});
B({
  x: d().optional(),
  y: d().optional(),
  l: d().optional(),
  w: d().optional(),
  type: ue(ol),
  parent: xe(),
  // Segment instance
  stock: xe(),
  // Stock instance
  offcut: D().optional(),
  merged: D().optional(),
  cutDirection: ue(Ma).nullable().optional()
});
const Vh = {
  ...hn,
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
class Uw extends gn {
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
        vt() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${i.autoId} to ${this.autoId}`);
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
function ga(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => ga(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Nh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = ga(i[s], e));
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
  const n = t.__ref || s, a = cn();
  if (n && a.has(n)) {
    const o = a.get(n), { __ref: r, __entityType: l, __context: c, ...u } = t, f = new o(u);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((h) => h instanceof ie ? h : ie.fromData(h, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((h) => h instanceof ie ? h : ie.fromData(h, f))), f;
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
  const i = ga(t, e), s = ll(i, e);
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
  return t?.length ? e?.length ? t.map((n) => Gh(n, e, i)).filter((n) => Ue(n)) : [] : [];
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
    const n = cn(), a = n.get("Group") || n.get(se.Group);
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
  vt() && (t.stocks && t.stocks.forEach((i, s) => {
    Et(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !Ze(i) && !Ue(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    Bi(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    Ue(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    Vt(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
ft.colors = [
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
const _i = ft("logs"), ma = ft("cuts"), sn = ft("groups"), nn = ft("guillotine"), ya = ft("results"), ba = ft("scoring"), va = ft("firstShapes"), wa = ft("calculations"), Sa = ft("subset"), xa = ft("secondRun"), ka = ft("stack"), an = ft("errors"), Ia = ft("allStock"), on = ft("reset");
an.color = 1;
sn.color = 14;
nn.color = 159;
on.color = 11;
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
      _i(a);
      break;
    case "guillotine":
      nn(a);
      break;
    case "results":
      ya(a);
      break;
    case "secondRun":
      xa(a);
      break;
    case "cuts":
      ma(a);
      break;
    case "scoring":
      ba(a);
      break;
    case "calculations":
      wa(a);
      break;
    case "stack":
      ka(a);
      break;
    case "subset":
      Sa(a);
      break;
    case "errors":
      an(a);
      break;
    case "allStock":
      Ia(a);
      break;
    case "firstShapes":
      va(a);
      break;
    case "groups":
      sn(a);
      break;
    case "reset":
      on(a);
      break;
    default:
      _i(a);
  }
  console.table = n;
}
const zh = "\x1B[31m", Wh = "\x1B[0m", Jt = (t = "info", e, i = null, s = null, n = !1) => {
  if (n) {
    switch (t) {
      case "info":
        _i(e);
        break;
      case "guillotine":
        nn(e);
        break;
      case "results":
        ya(e);
        break;
      case "secondRun":
        xa(e);
        break;
      case "cuts":
        ma(e);
        break;
      case "scoring":
        ba(e);
        break;
      case "calculations":
        wa(e);
        break;
      case "stack":
        ka(e);
        break;
      case "subset":
        Sa(e);
        break;
      case "errors":
        an(`${zh}${e}${Wh}`);
        break;
      case "allStock":
        Ia(e);
        break;
      case "firstShapes":
        va(e);
        break;
      case "groups":
        sn(e);
        break;
      case "reset":
        on(e);
        break;
      default:
        _i(e);
    }
    if (i)
      switch (t) {
        case "info":
          _i(i);
          break;
        case "guillotine":
          nn(i);
          break;
        case "results":
          ya(i);
          break;
        case "secondRun":
          xa(i);
          break;
        case "cuts":
          ma(i);
          break;
        case "scoring":
          ba(i);
          break;
        case "calculations":
          wa(i);
          break;
        case "stack":
          ka(i);
          break;
        case "subset":
          Sa(i);
          break;
        case "errors":
          an(i);
          break;
        case "allStock":
          Ia(i);
          break;
        case "firstShapes":
          va(i);
          break;
        case "groups":
          sn(i);
          break;
        case "reset":
          on(i);
          break;
        default:
          _i(i);
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
function Ca(t, e) {
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
  e.forEach((u) => u.orientationLock = null), Ca(
    e,
    t
  );
  const n = t.bladeWidth, a = [];
  let o = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (o = 1), i === "l" ? e.sort(
    zt.LD
  ) : e.sort(
    zt.WD
  ), s || (s = e[0]);
  function r(u, f = !0) {
    f && zt.shuffle(
      e
    );
    const h = Pa(
      n,
      e,
      t.getStock,
      i,
      t[i],
      !1,
      s
    );
    h !== !1 && u.push(
      h
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
    (I, E) => E[s] - I[s],
    // Largest first
    (I, E) => I[s] - E[s],
    // Smallest first
    (I, E) => E[s] / E.area - I[s] / I.area,
    // Best dimension-to-area ratio
    (I, E) => E.area - I.area,
    // Largest area first
    (I, E) => I.area - E.area
    // Smallest area first
  ], f = e.every(
    (I, E, L) => E === 0 || I.isIdentical(L[E - 1])
  );
  if (!a) {
    const I = e.reduce((E, L) => E + L[s] + t, 0) - t;
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
        area: e.reduce((E, L) => E + L.area, 0)
      } : !1;
  }
  const h = Pa(t, e, i, s, n, a, r);
  if (h !== !1 && (c.push(h), h.score.efficiency > 0.95 && e.length > 10))
    return h;
  if (f)
    return c[0] || !1;
  const p = Math.min(o, u.length);
  for (let I = 0; I < p; I++) {
    const E = [...e];
    E.sort(u[I % u.length]);
    const L = Pa(t, E, i, s, n, a, r);
    if (L !== !1 && (c.push(L), L.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((I, E) => E.score.efficiency - I.score.efficiency), c[0] || !1;
}
function Pa(t, e, i, s = "l", n, a = !1, o = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let r = 0;
  const l = [];
  if (o || (o = e[0]), l.push(o), r = o[s], r > n) return !1;
  const c = e.findIndex(
    (u) => u.id === o?.id
  );
  c > -1 && e.splice(c, 1);
  for (const u of e) {
    const f = u[s], h = u.getMinSpacing(
      i.saw,
      !0
    );
    if (!(r + t + h + f > n) && (r += t + h + f, l.push(u), r + t + h >= n))
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
        (f, h) => f + h.area,
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
  Ue(i) ? Ca(
    t,
    i
  ) : Ca(
    t,
    i ?? e
  ), a && (s === "l" ? t.sort(
    zt.LDIDA
  ) : t.sort(
    zt.WDIDA
  )), t.forEach(
    (c, u) => {
      c[o] = i ? i[o] + l : l, i && (c[r] = i[r]), l += c[o === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), It(
        [() => tt(
          l
        ).to.be.a(
          "number"
        )]
      ), Ue(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function Qw(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    zt.ID
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
  Jt("subset", `guillotine subset for segment ${t.id}`);
  function s($, x = []) {
    const { shapes: V } = o($);
    return V.filter((R) => {
      if (R.added || x.find((F) => F.id === R.id)) return !1;
      if (R.orientationLock)
        return ne.equalTo(R[f], $) ? ne.lessThanOrEqualTo(R.l, t.l) && ne.lessThanOrEqualTo(R.w, t.w) : !1;
      if (ne.equalTo(R.l, $) || ne.equalTo(R.w, $)) {
        const F = ne.equalTo(R.l, $) ? R.w : R.l;
        return ne.lessThanOrEqualTo(F, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n($, x) {
    for (const V of $)
      if (x !== V[Gt(t.getStock.cutPreference)] && nt(
        V,
        V.rot === 1 ? 0 : 1,
        t.getStock
      ) === !1)
        throw new Error(
          "rotateShapesToDimension - could not rotate strip shape correctly"
        );
  }
  function a($, x, V, R = null) {
    let F = s(
      $,
      x
    );
    if (R) {
      const g = F.find(
        (M) => M.parentId === R.parentId
      );
      if (g) return g;
    }
    if (vt() && (n(
      F,
      $
    ), It(
      [
        () => tt(F.every((g) => g.l === $ || g.w === $)).to.be.true
      ]
    )), !F.length) return !1;
    const H = [];
    for (const g of F) {
      const M = g.l === $ ? g.w : g.l;
      V.includes(M) && H.push(g);
    }
    return F = H.length ? H : F, qr(F);
  }
  function o($) {
    const x = $;
    return A.has(x) || A.set(x, { shapes: [], priorities: [] }), A.get(x);
  }
  function r($ = null) {
    function x(R, F, H) {
      const { shapes: j, priorities: g } = o(F);
      j.includes(R) || (j.push(R), g.push(H));
    }
    if (!I?.length) return A;
    const V = t.getStock;
    for (const R of I) {
      let F = R.getPriority(V);
      $ && R.parentId !== $.parentId && (F = 0);
      const H = Gt(f);
      if (!R.orientationLock)
        R.longSide <= p && R.shortSide <= t[H] && x(R, R.l, F), !R.isSquare && R.shortSide <= p && R.longSide <= t[H] && x(R, R.w, F);
      else {
        const j = Dr(
          R,
          t.getStock
        );
        if (It([() => tt(j.length).to.equal(1)]), nt(
          R,
          j[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const M = Gt(f);
        R[f] <= p && R[M] <= t[M] && x(R, R[f], F);
      }
    }
    return A;
  }
  function l() {
    const $ = [], x = Array.from(A.entries()).map(([R, { shapes: F, priorities: H }]) => ({
      dimension: R,
      count: F.length,
      totalPriority: F.length * Math.max(...H, 0)
    }));
    let V = x.reduce((R, { totalPriority: F }) => R + F, 0);
    for (; x.length > 0; )
      if (V <= 0 || !Number.isFinite(V)) {
        const R = [];
        x.forEach(({ dimension: F, count: H }) => {
          R.push(...Array(H).fill(F));
        });
        for (let F = R.length - 1; F > 0; F--) {
          const H = Math.floor(Math.random() * (F + 1));
          [R[F], R[H]] = [R[H], R[F]];
        }
        $.push(...R);
        break;
      } else {
        const R = Math.random() * V;
        let F = 0, H = -1;
        for (let Y = 0; Y < x.length; Y++)
          if (F += x[Y].totalPriority, F > R) {
            H = Y;
            break;
          }
        H === -1 && (H = Math.floor(Math.random() * x.length));
        const { dimension: j, count: g, totalPriority: M } = x[H];
        $.push(j), x[H].count--, x[H].totalPriority -= M / g, x[H].count === 0 ? (V -= M, x.splice(H, 1)) : V -= M / g;
      }
    return $;
  }
  function c($, x, V, R, F, H, j) {
    return V += $ + x, R.push($), F.push(
      H.l === $ ? H.w : H.l
    ), j.push(H), V;
  }
  function u($ = null) {
    if (!I?.length) return [];
    if (!A.size) return [];
    const x = /* @__PURE__ */ new Map();
    let V = 0;
    const R = [], F = [], H = [];
    let j = null, g = !0;
    for (let P = 0; P < this.config.subset.guillotine.shuffles; P++) {
      V = 0, R.length = 0, F.length = 0, H.length = 0, j = null, g = !0;
      const _ = l();
      for (const z of _) {
        if (g ? j = z : j = h + z, V + j > p) continue;
        const N = a(
          z,
          F,
          H,
          $
        );
        N && (V = c(
          z,
          g ? 0 : h,
          V,
          R,
          H,
          N,
          F
        ), g = !1);
      }
      if (V) {
        const z = V / p;
        if (It([() => tt(z).to.lessThanOrEqual(1)]), z < this.config.subset.efficiency.limit) continue;
        const N = F.map((fe, de) => de);
        N.sort((fe, de) => H[de] !== H[fe] ? H[de] - H[fe] : R[de] - R[fe]);
        const G = N.map(
          (fe) => R[fe]
        ), le = N.map(
          (fe) => F[fe]
        );
        It([
          () => tt(nf(le)).to.be.false
        ]), x.set(
          G.join("-"),
          {
            usedDimensions: G,
            usedShapes: le,
            efficiency: z,
            target: p,
            totalLength: V,
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
      (P, _) => P.efficiency > _.efficiency ? -1 : P.efficiency < _.efficiency ? 1 : P.efficiency === _.efficiency ? _.usedDimensions.length - P.usedDimensions.length : 0
    );
    const Y = M.slice(
      0,
      20
    );
    if (!Y.length) return [];
    const ae = Y.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return ae.length ? (ae.forEach(
      (P) => {
        P.usedShapes.forEach(
          (_, z) => {
            const N = P.usedDimensions[z];
            It([() => tt([_.l, _.w].includes(N)).to.be.true]);
            let G;
            _.isSquare ? G = 0 : _.longSide === N ? G = t.getStock.cutPreference === "l" ? 1 : 0 : G = t.getStock.cutPreference === "l" ? 0 : 1, _.guillotineState || (_.guillotineState = new Xt({})), _.guillotineState.setStripShapeBatchGroup(C, {
              stockId: t.getStock.autoId,
              dimension: N,
              rot: G,
              order: z,
              //by this point sorting should have taken place
              priorityShape: P.priorityShape
            });
          }
        ), C++, It(
          [
            () => {
              const _ = P.usedDimensions.reduce(
                (G, le) => G + le,
                0
              ), z = (P.usedDimensions.length - 1) * h, N = _ + z;
              return tt(ne.lessThanOrEqualTo(N, p)).to.be.true;
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
  const f = Gt(t.cutPreference), h = t.getStock.bladeWidth, p = t[f];
  It([() => tt(p).to.be.a("number")]);
  const I = Jd(
    t.shapes,
    e,
    i
  ), E = t.getStock;
  I.sort(($, x) => {
    const V = x.getPriority(E) - $.getPriority(E);
    if (V !== 0) return V;
    const R = $.id.toString().split("."), F = x.id.toString().split(".");
    return R[0] !== F[0] ? parseInt(R[0]) - parseInt(F[0]) : parseInt(R[1]) - parseInt(F[1]);
  });
  const L = [];
  let C = 0;
  const A = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(E)) {
    r();
    const $ = u.call(this);
    L.push(...$);
  } else {
    const $ = t.shapes[0];
    r($);
    const x = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let V = 0; V < x; V++) {
      const R = u.call(this, $);
      L.push(...R);
    }
  }
  return Jt("subset", `${L.length} strip shape results ${L.map(($) => $.usedShapes.map((x) => x.id).join()).join(" | ")}`), L?.length ? L.length : 0;
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
    const o = s[a], r = e.findIndex((u) => u.autoId === a), l = e[r], c = at.groupQuantity({
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
    config: h
  } = t, p = c ?? h?.subset?.shuffles ?? 10;
  It([
    () => tt(s).to.be.greaterThan(0)
  ]);
  const I = ep(e, r, n, i, f);
  if (I.length < 2) return !1;
  const E = { config: h }, L = Yh.call(
    E,
    i.bladeWidth,
    I,
    i.getStock,
    ip(r),
    s,
    o,
    p,
    l
  );
  if (!L) return !1;
  if (L?.shapes?.length > 1 && L?.totalLength) {
    let C;
    try {
      C = new bn({
        id: a,
        direction: r,
        shapes: L.shapes,
        container: i,
        type: u
      }), Jt("groups", `[createGroup] Created group ${C.id} direction=${r} dims=${C.l}x${C.w} with ${C.shapes.length} shapes, [${C.shapes.map((A) => A.id).join()} for ${i.getType()} ${i.id}]`);
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
    type: h
  } = t, p = l ?? u?.groups?.tolerance ?? 0.05;
  if (!Se(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!Se(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const I = ul(a), E = Gt(a), L = I === "horizontal" ? i.w : i.l, C = i.getStock;
  let A = [...e], $ = o;
  if ($)
    if (sd(
      $,
      $[E],
      E,
      C
    ) === !1)
      $ = null;
    else {
      const Y = $[E], ae = Y * (1 - p);
      let P = Y * (1 + p);
      P > i[E] && (P = i[E]), A = e.filter((_) => !Ze(_) || _.autoId === $.autoId ? !1 : So(
        _,
        ae,
        P,
        E,
        C
      ));
    }
  const x = Zd(
    A,
    i,
    E
  ), V = Array.from(x.keys()).filter((M) => M <= L).sort((M, Y) => Y - M);
  if (V.length === 0) return [];
  const R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
  for (const M of A) {
    const Y = /* @__PURE__ */ new Map();
    for (const ae of V) {
      const P = ae * (1 - p);
      let _ = ae * (1 + p);
      _ > i[E] && (_ = i[E]);
      const z = So(
        M,
        P,
        _,
        E,
        C
      );
      Y.set(ae, z);
    }
    F.set(M.autoId, Y);
  }
  for (const M of V) {
    const Y = [];
    for (const ae of A) {
      if (!Ze(ae)) continue;
      F.get(ae.autoId)?.get(M) && Y.push(ae);
    }
    R.set(M, Y);
  }
  const H = [], j = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
  for (const M of V) {
    if (c !== void 0 && H.length >= c)
      break;
    const Y = [];
    let ae = R.get(M).filter((P) => !j.has(P.autoId));
    if (!(ae.length < 2)) {
      for (; ae.length >= 2 && !(c !== void 0 && H.length >= c); ) {
        let P, _ = !1;
        if (Y.length && !r) {
          const z = Y[Y.length - 1], N = z.shapes.slice(), G = /* @__PURE__ */ new Set(), le = new Set(ae.map((ye) => ye.autoId)), fe = [];
          let de = !0;
          for (const ye of N) {
            let Oe = !1;
            if (le.has(ye.autoId) && !G.has(ye.autoId)) {
              const K = ae.find((ot) => ot.autoId === ye.autoId);
              K && (fe.push(K), G.add(ye.autoId), Oe = !0);
            }
            if (!Oe)
              for (const K of ae) {
                if (G.has(K.autoId)) continue;
                const ot = `${K.autoId}-${ye.autoId}`;
                if (g.has(ot) || g.set(ot, K.isIdentical(ye)), g.get(ot)) {
                  fe.push(K), G.add(K.autoId), Oe = !0;
                  break;
                }
              }
            if (!Oe) {
              de = !1;
              break;
            }
          }
          if (de && fe.length === N.length) {
            if (_ = !0, z.positions?.length === fe.length)
              for (let ye = 0; ye < fe.length; ye++) {
                const Oe = fe[ye], K = N[ye], ot = z.positions[ye]?.rot ?? K.rot;
                if (Oe.rot !== ot && !nt(Oe, ot, i)) {
                  console.warn(`  Failed to rotate ${Oe.id} to ${ot} - skipping clone`), _ = !1;
                  break;
                }
              }
            _ && (It([
              () => tt(fe.every((ye, Oe) => {
                const K = z.positions[Oe]?.rot ?? N[Oe].rot;
                return ye.rot === K;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), P = z.cloneWithNewShapes(fe));
          }
        }
        if (_ || (P = cl({
          shapes: ae,
          container: i,
          targetSize: s,
          d: M,
          id: "g" + (typeof f?.group == "number" ? f.group : 0),
          exact: n,
          groupDirection: I,
          firstShape: $,
          tolerance: p,
          config: u,
          type: h
        })), P) {
          typeof f?.group == "number" && f.group++, Y.push(P), P.shapes.forEach((N) => j.add(N.autoId));
          const z = [];
          for (const N of ae)
            j.has(N.autoId) || z.push(N);
          if (ae = z, ae.length < 2) break;
        } else
          break;
      }
      H.push(...Y);
    }
  }
  return H;
}
function ep(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    if (a.isSquare) return !0;
    const o = i * (1 - n), r = i * (1 + n), l = a.l >= o && a.l <= r, c = a.w >= o && a.w <= r;
    let u = null;
    if (l && c) {
      const f = Math.abs(a.l - i), h = Math.abs(a.w - i);
      u = f <= h ? "l" : "w";
    } else l ? u = "l" : c && (u = "w");
    if (u !== null) {
      const f = tp(
        u,
        e,
        a.rot
      );
      return wt(a, f, s) ? nt(a, f, s) : !1;
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
  return t.filter((n) => Ue(n) || !s.has(n.autoId));
}
function ap(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Ue).forEach((o) => {
    o.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((o) => Ze(o)).filter((o) => i.has(o.autoId)), a = e ? ` [${e}]` : "";
  tt(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((o) => o.id || o.autoId).join(", ")}`
  ).to.equal(0);
}
function iS(t) {
  const e = [], i = t.filter((n) => Ue(n)), s = t.filter((n) => Ze(n));
  for (const n of i)
    n.added && e.push(n);
  for (const n of s)
    n.added && !n.group.inGroup && e.push(n);
  return e;
}
function op(t, e) {
  t.push(e), t.sort((s, n) => (n.score?.total || 0) - (s.score?.total || 0));
  const i = t[0];
  if (i.score?.total && Ue(i) && (i.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(i), e.bestScore.group = i, i;
}
function sS(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: o, scoreFunction: r } = t;
  if (s.length < 3) return;
  Jt("groups", `[POSITION GROUPS] Creating groups at position (${a.x},${a.y}) for shape ${n.id} in container ${e.id} (${e.cutType})`);
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  Bi(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const p of u) {
    const I = Gt(p), E = p === "l" ? "x" : "y", L = e[p] - n[E] - e.bladeWidth, C = e[p] - n[E], A = e[p] * 0.6;
    if (L <= 0 || C < A) continue;
    const $ = sp(
      s,
      n,
      I
    );
    if ($.length < 2) continue;
    const x = cl({
      shapes: $,
      container: e,
      targetSize: L,
      d: n[I],
      id: "g" + n.id,
      exact: !1,
      groupDirection: ul(p),
      firstShape: n,
      iterations: 40,
      config: {
        subset: o.subset
      }
    });
    x && c.push(x);
  }
  c.sort((p, I) => I.efficiency - p.efficiency), c = c.slice(0, o.sample.groupSize);
  for (const p of c)
    p.x = a.x, p.y = a.y, p.outOfBounds = p.x + p.l > e.l || p.y + p.w > e.w, !p.outOfBounds && (Xh(p, i, e) || r(p, e, i, s, a));
  s.forEach((p) => p.resetGroupData());
  const f = op(c, n), h = c.filter((p) => Ue(p) && p !== f);
  if (h.length > 0 && (Jt("groups", `[POSITION GROUPS] Destroying ${h.length} non-winning groups`), h.forEach((p) => {
    Jt("groups", `  Destroying group ${p.id} (${p.shapes?.length || 0} shapes)`), p.destroy();
  })), f) {
    if (Jt("groups", `[POSITION GROUPS] Winner: group ${f.id} with score ${f.score.total.toFixed(2)} (beat shape ${n.id} score ${n.score?.total?.toFixed(2) || 0})`), Bi(e)) {
      e.shapes.push(f);
      const p = e.shapes.length;
      e.shapes = np(e.shapes, f);
      const I = p - e.shapes.length;
      I > 0 && Jt("groups", `[POSITION GROUPS] Removed ${I} child shapes from segment after adding group ${f.id}`);
    }
  } else c.length > 0 && Jt("groups", `[POSITION GROUPS] No winning group - shape ${n.id} scored better than ${c.length} groups`);
  return l && (n.orientationLock = null), f && Bi(e) && It([
    () => ap(e.shapes, "POSITION GROUPS")
  ]), f;
}
function ps(t, e, i = null) {
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
    ps(t, s, i);
  }
}
function $e(t, e, i, s, n) {
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
  const s = new ti(), n = i.toArray().sort(dl), a = e.bladeWidth;
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
    for (let h = f.length; h--; ) {
      const p = f[h];
      (ne.lessThan(p.x, r) || ne.lessThan(p.y, l) || ne.greaterThan(p.x, c) || ne.greaterThan(p.y, u)) && f.splice(h, 1);
    }
    s.clear(), f.forEach((h) => s.add(h)), o.clear(), f = s.toArray();
    for (let h = f.length; h--; ) {
      const p = f[h];
      for (let I = t.length; I--; ) {
        const E = t[I];
        if (p.collidesWith(E)) {
          s.remove(p.x, p.y);
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
  const r = new ti();
  for (const l of s)
    l.raycast = !0, Bs(r, pl(t, l, i).toArray());
  return gl(t, i, r), r;
}
function up(t, e) {
  const i = new ti();
  return t.sort(dl), t.forEach((s) => {
    Ue(s) ? (Bs(i, s.getCoords(e)), s.shapes.forEach((n) => {
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
  let i = new ti();
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
      a === u.direction && (fl(f, r, null, u.direction, "edge"), ps(i, f));
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
      Ts(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      Ts(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      Ts(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      Ts(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function Ts(t, e, i, s, n) {
  const a = t.dimension === "w", o = a ? "y" : "x", r = a ? "x" : "y", l = a ? "l" : "w";
  if (t[`${r}1`] >= i[r] && t[`${r}1`] <= i[r] + i[l]) {
    const c = t.direction === "lr" && t[`${o}1`] <= n && t[`${o}2`] >= n, u = t.direction === "rl" && t[`${o}1`] >= n && t[`${o}2`] <= n, f = t.direction === "bt" && t[`${o}1`] <= n && t[`${o}2`] >= n, h = t.direction === "tb" && t[`${o}1`] >= n && t[`${o}2`] <= n;
    if (c || u || f || h) {
      const I = a ? t[`${r}1`] : n, E = a ? n : t[`${r}1`], L = new Qe(I, E), C = t.origin;
      fl(L, e, i, t.direction, "shape", C), ps(s, L);
    }
  }
}
function pp(t) {
  const e = new ti();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const o = gp(
        n,
        a
      );
      o && ps(e, o);
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
  const s = new ti(), n = e.getAvailableShapePositions(i);
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
    ps(s, o);
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
  id: m(),
  count: d(),
  name: m(),
  l: d(),
  w: d(),
  t: d(),
  material: m()
}), Xa = B({
  inputStock: ee(xi),
  inputShapes: ee(ss),
  inputSaw: Js,
  inputUserGroups: ee(Ka),
  // Centralized extras options for UI dropdowns
  extrasOptions: B({
    banding: B({
      options: ee(m())
    }).optional(),
    finish: B({
      options: ee(m())
    }).optional(),
    planing: B({
      options: ee(m())
    }).optional()
  }).optional()
}).optional(), bp = B({
  // Banding metrics
  bandingLengthByType: we(m(), d()).default({}),
  // Finish metrics (by face)
  finishAreaByType: we(m(), d()).default({}),
  // Material summary with nested structure
  materialSummary: we(
    m(),
    // material name
    we(
      m(),
      // thickness
      B({
        used: d(),
        stacks: d(),
        bandingLengthByType: we(m(), d())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: we(m(), d()).default({}),
  addedPartTally: we(m(), d()).default({}),
  // Cost metrics
  stockAreaCost: d().default(0),
  totalStockCost: d().default(0),
  // Machining metrics
  hasMachining: D().default(!1),
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
}), Ja = bp.extend({
  bandingLengthByType: we(m(), d()).default({}),
  unplacedParts: ee(yp).default([])
}), vp = B({
  // Core optimization results
  stockList: Le("Stock"),
  shapeList: Le("Shape"),
  cutList: Le("Cut").optional(),
  segmentList: Le("Segment").optional(),
  offcuts: Le("Offcut").optional(),
  saw: ge("Saw"),
  unusableShapes: Le("Shape").optional(),
  unavailableStock: Le("Stock").optional(),
  evolutionVisData: ee(B({})).optional(),
  performance: m().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: Ja.optional(),
  credits: d().optional(),
  // Optional input data for debugging/API reporting
  inputs: Xa
});
B({
  // Job execution metadata
  success: D(),
  socketId: m().nullable().default(null),
  userId: m(),
  api: D(),
  app: D(),
  widget: D().optional(),
  cached: D().optional(),
  hash: m().optional(),
  webhook: m().optional(),
  config: xe().optional(),
  error: m().optional(),
  jobId: d().optional(),
  // Input data
  inputs: Xa,
  // The actual optimization results
  optimisation: vp
});
B({
  // Database metadata
  jobId: d().optional(),
  // Job execution data
  success: D(),
  socketId: m().nullable().default(null),
  userId: m(),
  api: D(),
  app: D(),
  widget: D().optional(),
  cached: D().optional(),
  hash: m().optional(),
  webhook: m().optional(),
  config: xe().optional(),
  error: m().optional(),
  // Optimization results (flattened from optimization object)
  stockList: Le("Stock"),
  shapeList: Le("Shape"),
  cutList: Le("Cut").optional(),
  segmentList: Le("Segment").optional(),
  offcuts: Le("Offcut").optional(),
  saw: ge("Saw"),
  unusableShapes: Le("Shape").optional(),
  unavailableStock: Le("Stock").optional(),
  performance: m().optional(),
  metadata: Ja.optional(),
  apiVersion: d().optional(),
  credits: d().optional(),
  // Input data
  inputs: Xa,
  // Computed fields for easier querying/display
  numParts: d().optional(),
  numStock: d().optional()
});
const wp = B({
  id: m().optional(),
  name: m().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: m().optional(),
  q: d().optional(),
  orientationLock: he([
    me(""),
    me("l"),
    me("w"),
    St()
  ]).nullable().optional(),
  // Basic extras for display
  banding: xe().optional(),
  finish: xe().optional()
}), ml = B({
  issues: ee(m()),
  id: m(),
  duplicate: D(),
  name: m(),
  added: D(),
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
  material: m(),
  banding: xe(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: xe(),
  // Legacy field
  finish: xe(),
  // Using any for now, could use finishPropertiesSchema
  stock: B({ id: m() }),
  rot: D(),
  notes: m(),
  customData: we(m(), he([m(), d(), D()]))
}), Sp = B({
  issues: ee(m()),
  id: m(),
  duplicate: D().optional(),
  name: m(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: m(),
  cost: d(),
  used: D(),
  grain: he([
    me(""),
    me("l"),
    me("w"),
    St()
  ]).nullable(),
  trim: B({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  parts: ee(ml),
  efficiency: d(),
  notes: m().optional(),
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
  socketId: Ct().nullable().default(null).describe("Socket.io connection ID"),
  user: it().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: it().describe("Configuration object"),
  // Type: Config
  api: Ke().nullable().default(null).describe("API mode flag"),
  app: Ke().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ge("Saw").describe("Saw configuration"),
  stockList: Le("Stock").default([]).describe("List of stock materials"),
  shapeList: Es(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  userGroups: Le("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Le("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Es(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Es(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: dn,
  // Results storage
  cutList: Le("Cut").default([]).describe("List of cuts to make"),
  segmentList: Le("Segment").default([]).describe("List of segments"),
  offcuts: Le("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Le("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Ke().default(!1).describe("Use inventory system"),
  successMetric: Ct().default(dt.successMetric).describe("Metric for optimization success"),
  enableEvo: Ke().default(!0).describe("Enable evolutionary algorithm"),
  weighting: go(Ct(), it()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: it().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: it().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: Ws({
    placement: Hs().default(0),
    group: Hs().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: Ke().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: Ke().default(!1).describe("Run guillotine second pass"),
  runningEvo: Ke().default(!1).describe("Currently running evolution"),
  evolutionVisData: Si(go(Ct(), Zc())).default([]).describe("Evolution visualization data"),
  final: Ke().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Ke().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: Ke().default(!1).describe("Has shape-level minimum spacing")
}), aS = {}, xp = Xc(["decimal", "fraction"]), kp = Ws({
  job: it().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Preserve system properties like __entityType and autoId
  inputSaw: Js,
  inputShapes: Si(ss),
  inputStock: Si(xi),
  inputUserGroups: Si(Ka).optional(),
  // Number format for conversion
  numberFormat: xp.optional(),
  // Algorithm configuration
  enableEvo: Ke().default(!0),
  weighting: it().optional(),
  successMetric: Ct().optional(),
  useInventory: Ke().default(!1),
  // Context
  socketId: Ct().optional(),
  user: it().optional(),
  // IUser type
  // Application flags
  widget: Ke().optional(),
  api: Ke().optional(),
  app: Ke().optional(),
  domain: Ct().optional(),
  // API specific
  config: it().optional(),
  v: Hs().optional(),
  // API version
  webhook: Ct().optional()
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
  enableEvo: Ke(),
  weighting: it().optional(),
  successMetric: Ct().optional(),
  useInventory: Ke(),
  socketId: Ct().optional(),
  user: it().optional(),
  widget: Ke().optional(),
  api: Ke().optional(),
  app: Ke().optional(),
  domain: Ct().optional(),
  config: it().optional(),
  v: Hs().optional(),
  webhook: Ct().optional()
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
}, Cp = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), rn = Object.keys(Cp).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
rn.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const Ta = "en", Gi = sr.createInstance();
function q(t, e) {
  if (pr())
    return t;
  if (!Gi.isInitialized) {
    const n = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${n}. Returning key.`), n;
  }
  let i = Gi.t(t, e);
  const s = Array.isArray(t) ? t[0] : t;
  return i = typeof i == "string" ? i : String(i), zi(i);
}
const As = {}, Pp = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if (As[t]) {
        i(null, As[t]);
        return;
      }
      const s = await Ip(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), `../translation/${t}.json`, 3);
      As[t] = s.default, i(null, As[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function Tp() {
  return vu(Gi), await Gi.use(cc).use(Pp).init({
    debug: !1,
    fallbackLng: Ta,
    supportedLngs: rn.length > 0 ? rn : [Ta],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? mu(t) : e === "sc" ? zi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), Gi;
}
const Ap = Tp().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
}), oS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: Ta, SUPPORTED_LANGUAGES: rn, i18nextInstance: Gi, i18nextReady: Ap, t: q }, Symbol.toStringTag, { value: "Module" }));
function li(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function Aa(t) {
  if (!t) return t;
  if ("x1" in t || "x2" in t || "y1" in t || "y2" in t)
    return {
      l1: li(t.x1 ?? t.l1),
      l2: li(t.x2 ?? t.l2),
      w1: li(t.y1 ?? t.w1),
      w2: li(t.y2 ?? t.w2)
    };
  const i = {};
  return "l1" in t && (i.l1 = li(t.l1)), "l2" in t && (i.l2 = li(t.l2)), "w1" in t && (i.w1 = li(t.w1)), "w2" in t && (i.w2 = li(t.w2)), Object.keys(i).length > 0 ? i : t;
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
  if (t)
    switch (t) {
      case "stock":
        return "efficiency";
      // legacy stock strategy
      case "efficiency":
        return "efficiency";
      case "time":
        return "time";
      default:
        return "efficiency";
    }
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
    guillotineOptions: t.guillotineOptions ? {
      ...t.guillotineOptions,
      strategy: $p(t.guillotineOptions.strategy)
    } : void 0,
    efficiencyOptions: t.efficiencyOptions ? {
      ...t.efficiencyOptions,
      primaryCompression: Fp(t.efficiencyOptions.primaryCompression)
    } : void 0
  } : {};
}
function Oa(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(Oa);
  const e = {};
  for (const [i, s] of Object.entries(t))
    i === "__entityType" || i === "autoId" || (e[i] = Oa(s));
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
  return Oa(n);
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
      q: parseInt(e.q) || 1,
      material: e.material || void 0,
      // Handle infiniteLength (V2 feature)
      infiniteLength: e.infiniteLength || !1
    };
    return e.trim && (i.trim = Aa(e.trim)), i;
  });
}
function Bp(t) {
  return !t || !Array.isArray(t) ? [] : t.map((e) => {
    const i = { ...e };
    if (e.banding && !e.extras?.banding) {
      const s = Aa(e.banding);
      s && Object.keys(s).length > 0 && (i.extras = {
        ...i.extras,
        banding: { sides: s }
      });
    }
    if (e.extras?.banding?.sides) {
      const s = Aa(e.extras.banding.sides);
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
      q: parseInt(i.q) || 1,
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
}, kn = (t) => yl[t] || null, Jn = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = gi(i), o = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  o[a] = s;
}, In = (t, e, i) => {
  const { scope: s, key: n } = gi(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] || null;
}, jp = (t, e, i) => {
  const { scope: s, key: n } = gi(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, Vp = (t) => {
  const e = kn(t);
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
      faces: ut.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: ut.map((t) => `face.${t}`),
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
      sides: Pt.map((t) => `side.${t}`)
    }
    /* imageUpload: {
    	scope: [ 'sides' ],
    	sides: ALL_SIDES.map( side => `side.${side}` as const )
    } */
  };
}
const Gp = Np(), Ht = (t) => Gp[t] || {
  scope: ["sides"],
  sides: Pt.map((e) => `side.${e}`)
}, $a = (t) => {
  const e = Ht(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, lS = (t) => (Ht(t).faces || []).map((i) => {
  const s = gi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), cS = (t) => (Ht(t).sides || []).map((i) => {
  const s = gi(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), gi = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !ut.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !Pt.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, Mo = (t) => gi(t).scope, bl = (t) => Ht(t).scope.includes("faces"), vl = (t) => Ht(t).scope.includes("sides"), uS = (t) => {
  const e = Ht(t);
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
  const n = t.extras[e], { scope: a } = gi(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, fi = (t, e, i) => !!In(t, e, i), Hp = (t, e, i, s, n) => {
  const a = kn(e);
  if (a) {
    const o = In(t, e, i);
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
  const r = kn(e);
  if (r)
    switch (Vp(e)) {
      case "boolean":
        Jn(t, e, i, !!n);
        break;
      case "string":
        Jn(t, e, i, String(n));
        break;
      case "object":
        {
          let c = In(t, e, i) || {};
          typeof c != "object" && (c = {});
          const u = r.labels.indexOf(s);
          if (u !== -1 && r.options[u] && Array.isArray(r.options[u])) {
            const f = r.options[u];
            f.length === 1 && f[0] === n ? c[s] = !0 : c[s] = n;
          } else
            c[s] = n;
          Jn(t, e, i, c);
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
}, Qn = (t, e, i, s, n, a) => {
  const o = In(t, e, i), r = [];
  if (o && a?.length)
    if (typeof o == "object" && !Array.isArray(o)) {
      const c = o;
      for (const u of a) {
        const f = c[u];
        if (f)
          if (f === !0) {
            const h = kn(e);
            if (h) {
              const p = h.labels.indexOf(u);
              if (p !== -1 && h.options[p] && Array.isArray(h.options[p])) {
                const I = h.options[p];
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
    const c = l.map((f, h) => {
      if (typeof f == "boolean" && f === !0 && n) {
        const p = n[h];
        if (p && p.length === 1)
          return String(p[0]);
      }
      return String(f);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, pS = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Ht(e);
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
  const n = s[0], a = Ht(e);
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
  const s = Ht(e);
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
  const n = Ht(e), a = t;
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
  const n = [], a = [], o = $a(e), r = Object.keys(i), l = Math.max(...r.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of o) {
    const { extraContainer: f } = Wp(t, e, u), { key: h } = gi(u), p = f[h];
    if (!p)
      continue;
    let I;
    if (typeof p == "object" && !Array.isArray(p) && p !== null)
      if ("value" in p && typeof p.value == "string") {
        const $ = p.value;
        I = $.includes("|") ? $.split("|") : [$];
      } else
        I = Object.values(p).filter(($) => $ != null && $ !== "" && $ !== !1).map(($) => String($));
    else typeof p == "string" ? I = p.includes("|") ? p.split("|") : [p] : typeof p == "boolean" ? I = p ? ["true"] : [] : I = [String(p)];
    const E = I.length;
    if (E === 0)
      continue;
    let L = !1, C = !1, A = "";
    if (E > 0) {
      if (s)
        try {
          const $ = I.filter((V) => V.trim() !== ""), x = s(e, $);
          C = x !== null && x > 0;
        } catch ($) {
          console.error("[validateExtrasCompleteness] Error getting price:", $), C = !1;
        }
      else {
        const $ = I.join("|");
        C = r.some((x) => x === $ || x.startsWith($ + "|"));
      }
      if (E < l) {
        L = !0;
        const $ = I.join("|");
        if (r.some((V) => V.startsWith($ + "|")) && !C) {
          const V = l - E, R = I.join(", ");
          A = `${e} selection incomplete for ${u}. Selected: "${R}" but ${V} more level${V > 1 ? "s" : ""} required.`;
        }
      }
      !C && !L && (A = `${e} selection invalid for ${u}. No pricing available for "${I.join(", ")}".`);
    }
    E > 0 && !C && (a.push(u), n.push(A || `${e} pricing incomplete for ${u}: ${E}/${l} levels selected`));
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
    return (a, o) => (w(), T("div", Jp, [
      (w(!0), T(Te, null, je(i.stockList, (r, l) => (w(), T("button", {
        type: "button",
        key: l,
        class: Ie(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockAutoId }]),
        style: Je({
          backgroundColor: r.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(r.autoId)
      }, [
        O("div", eg, J(l + 1), 1),
        ls(O("div", { class: "stack legibility" }, J(r.stack), 513), [
          [ln, typeof r?.stack == "number" && r.stack > 1]
        ])
      ], 46, Qp))), 128))
    ]));
  }
});
function ig(t) {
  const e = t.x, i = t.x + t.l, s = Ft().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, o = Ft().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), r = 8;
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
  const s = Ft().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = Sl(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(qs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function ag(t, e, i) {
  const s = Ft().domain([t, e]).range([
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
function os() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function rg() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Cn() {
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
function Os({ parent: t, near: e, far: i }) {
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
const { currentCutIndex: Il } = Ea();
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
  }), os.call(this), Cn.call(this);
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
    const p = this.props.cuts.value.filter((I) => I.isTrim);
    t = t + p.length, t - p.length >= this.props.cuts.value.length - p.length && (Il.value = this.props.cuts.value.length - p.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (os.call(this), Cn.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const p = this.selections.cutLines.nodes()[t].parentElement;
    if (!p) return;
    st(p).raise();
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
    return Os.call(this, { parent: c });
  const { near: f, far: h } = Al(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const p = u.find((L) => L.offcut === !0 && L.x === 0 && L.l === i.stock?.trim?.l1), I = u.find((L) => L.type === "near" && L !== p), E = u.find((L) => L.type === "far" && L !== p && L.phase > c.phase);
      if (p)
        return Os.call(this, { parent: p, near: I, far: E });
    } else if (i.beamTrimW1) {
      const p = u.find((L) => L.offcut === !0 && L.y === 0 && L.w === i.stock?.trim?.w1);
      let I = u.find((L) => L.type === "near" && L !== p);
      const E = u.find((L) => L.type === "far" && L !== p && L.y > (p?.y || 0));
      if (I && i.stock && (I = {
        ...I,
        x: 0,
        l: i.stock.l
      }), p)
        return Os.call(this, { parent: p, near: I, far: E });
    }
  }
  Os.call(this, { parent: c, near: f, far: h });
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
  const n = new ti();
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
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : Z({ v: t.l, o: this.numberConfig }).toString();
}
function qo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : Z({ v: t.w, o: this.numberConfig }).toString();
}
const Sg = (t) => t.id;
function xg() {
  if (!this.props.containerWidth) return;
  os.call(this);
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
  this.scales.scoreColorScale = is([jt(251, 224, 255), jt(122, 0, 138)]).domain([i, s]);
}
function zo(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => rs.call(this, i));
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
    s.classed("hover", !1), s.classed("selected") || s.style("fill", rs.call(this, i));
  }, { passive: !0 });
}
function Ho(t, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Pg.call(this, t, e), (this.settings.app || this.settings.embed) && Og.call(this, t, e), this.state.device === "desktop" && (Cn.call(this), ig.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
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
      color: rs.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function rs(t) {
  const e = jt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return jt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return jt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((r, l) => Math.round(r + t.guillotineState.myPhase / 5 * (a[l] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return jt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return jt(139, 171, 46);
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
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), jt(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? jt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
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
  return t.attr("class", "banding").attr("x1", (e) => this.scales.xPositionScale(e.l1) + $s.call(this, e.type, "x")).attr("x2", (e) => this.scales.xPositionScale(e.l2) + $s.call(this, e.type, "x")).attr("y1", (e) => this.scales.yPositionScale(e.w1) + $s.call(this, e.type, "y")).attr("y2", (e) => this.scales.yPositionScale(e.w2) + $s.call(this, e.type, "y")).attr("stroke-width", Ol).attr("stroke", "white");
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
function $s(t, e) {
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
      xScale: Ft(),
      yScale: Ft(),
      yPositionScale: Ft(),
      xPositionScale: Ft(),
      yAxisScale: Ft(),
      measurementScale: Ft(),
      shapeColorScale: is(),
      scoreColorScale: is()
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
    }, s = (n, a) => jt("#" + (Rg(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, a]) => [
        n,
        s(e.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = is([
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
    const i = Z({
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
      const h = this.getWidthAttribute(n) - 20;
      for (; f > h && c.length > 0; )
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => rs.call(this, s));
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), os.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), rg.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Cn.call(this);
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
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => rs.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    os.call(this);
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
      getCuts: h
    } = Ea(), p = t, I = i, E = (X) => {
      I("part-click", X);
    }, L = (X) => {
      I("shape-colour-update", X);
    }, C = (X, qe) => {
      X?.autoId && I("shape-select", X.autoId, qe);
    }, A = (X) => {
      X && I("add-to-parts-bin", X);
    }, $ = (X, qe) => {
      X && I("move-shape", X, qe);
    }, x = te(0), V = te(0), R = te(null);
    let F, H = te(!1);
    const j = mt({
      debug: ""
    });
    Wt(() => z());
    const g = Q(() => ({
      format: p.numberFormat,
      decimals: p.decimalPlaces
    })), M = Q(() => p.stockAutoId ? c(p.stockAutoId) : n.value), Y = Q(() => p.stockAutoId ? u(p.stockAutoId) : a.value), ae = Q(() => p.main ? p.stockAutoId ? h(p.stockAutoId) : o.value : []), P = Q(() => p.main ? p.stockAutoId ? f(p.stockAutoId) : r.value : []);
    nr(R, (X) => {
      const qe = X[0], { width: et, height: si } = qe.contentRect;
      et > 0 && (x.value = et), I("resize", { width: et, height: si });
    }), uc(
      x,
      (X) => {
        F && (X <= 0 || (F.setDevice(), F.resetShapeAxes(), F.drawAll(), l.value !== null && (F.toggleSegments(!0), F.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let _ = !1;
    Me(() => M.value, (X) => {
      X && (x.value <= 0 || (_ = !0, F.setDevice(), F.resetCuts(), F.removeSegments(), F.drawStock(), F.drawShapes(), F.drawCuts(), yt(() => _ = !1)));
    }, { immediate: !1 }), Me(() => Y.value, (X) => {
      _ || X && (x.value <= 0 || (F.setDevice(), F.drawShapes()));
    }, { immediate: !1, deep: !0 }), p.main && (Me(() => ae.value, () => {
      _ || x.value <= 0 || F.drawCuts();
    }, { immediate: !1, deep: !0 }), Me(l, () => {
      l.value !== null && (x.value <= 0 || (F.toggleSegments(!0), F.showCut(l.value)));
    }, { immediate: !1 }), Me(g, (X) => {
      F.updateNumberFormat(X.format, X.decimals, null);
    }, { immediate: !1 }));
    const z = () => {
      const X = {
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
          containerHeight: V,
          containerWidth: x,
          stock: M,
          shapes: Y,
          cuts: ae,
          segments: P,
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
          onShapeColourUpdate: L,
          onShapeSelect: C,
          onAddToPartsBin: A,
          onMoveShape: $,
          onPartClick: E
        }
      };
      F = new _g(X), j.debug = F.state.debug, H.value = !0;
    }, N = (X = !1) => {
      F && F.toggleShapes(X);
    }, G = (X = !1) => {
      F && F.toggleCuts(X);
    }, le = (X = !1) => {
      F && F.toggleSegments(X);
    }, fe = () => {
      F && F.drawShapes();
    }, de = () => {
      F && F.drawStock();
    }, ye = () => {
      F && (F.toggleSegments(!1), F.resetCuts());
    }, Oe = (X) => {
      F && (F.toggleSegments(!0), F.showCut(X));
    }, K = (X) => {
      F && F.drawPositions(X);
    }, ot = () => {
      F && F.removePositions();
    }, ii = (X) => {
      F && F.findShape(X);
    }, Ut = () => {
      F && F.clearSelection();
    }, ht = (X) => {
      F && F.requiresStretch(X);
    };
    return Me(() => j.debug, (X) => {
      F?.state && (F.state.debug = X);
    }), e({
      loaded: H,
      toggleShapes: N,
      toggleCuts: G,
      toggleSegments: le,
      drawShapes: fe,
      drawStock: de,
      drawPositions: K,
      resetPositions: ot,
      findShape: ii,
      clearSelection: Ut,
      resetCuts: ye,
      showCut: Oe,
      requiresStretch: ht,
      state: j
    }), (X, qe) => (w(), T("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: R,
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
    const i = t, s = e, { isOpen: n, close: a, toggle: o } = xc(i.menuId), r = te(), l = te(), c = Q(() => i.disabled), u = Q(() => i.label), f = Q(() => i.showLabel), h = Q(() => i.icon), { floatingStyles: p } = dc(r, l, {
      placement: i.placement,
      whileElementsMounted: tu,
      middleware: [
        Jc(i.offset),
        Qc(),
        eu({ padding: 8 })
      ]
    }), I = (g) => {
      if (!g) return ["fas", "question"];
      if (typeof g == "function" && (g = g(i)), Array.isArray(g))
        return g;
      if (typeof g == "string") {
        const M = g.split(" ");
        if (M.length >= 2) {
          const Y = M[0], ae = M.slice(1).join("-").replace("fa-", "");
          return [Y, ae];
        }
        return ["fas", g.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, E = Q(() => I(h.value)), L = (g) => typeof g.active == "function" ? g.active(i) : typeof g.active == "boolean" ? g.active : !1, C = (g) => {
      if (!g.href) return !1;
      try {
        const M = typeof g.href == "function" ? g.href(i) : g.href;
        return new URL(M, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, A = (g) => g.href ? "a" : "div", $ = (g) => {
      const M = {};
      if (g.href) {
        const Y = typeof g.href == "function" ? g.href(i) : g.href;
        if (M.href = Y, C(g)) {
          const ae = typeof g.target == "function" ? g.target(i) : g.target;
          M.target = ae || "_blank", M.rel = g.rel || "noopener noreferrer";
        } else if (g.target) {
          const ae = typeof g.target == "function" ? g.target(i) : g.target;
          M.target = ae;
        }
        g.rel && (M.rel = g.rel);
      }
      return g.attrs && Object.assign(M, g.attrs), M;
    }, x = Q(() => i.menuItems.map((g) => {
      const M = { ...g };
      return typeof g.href == "function" && (M.href = g.href(i)), typeof g.icon == "function" && (M.icon = g.icon(i)), typeof g.disabled == "function" && (M.disabled = g.disabled(i)), typeof g.label == "function" && (M.label = g.label(i)), typeof g.variant == "function" && (M.variant = g.variant(i)), typeof g.active == "function" && (M.active = g.active(i)), typeof g.target == "function" && (M.target = g.target(i)), typeof g.show == "function" && (M.show = g.show(i)), M;
    })), V = (g) => {
      g.stopPropagation(), g.preventDefault(), !c.value && o();
    }, R = (g, M) => {
      if (M.stopPropagation(), g.disabled && !g.href) {
        M.preventDefault();
        return;
      }
      if (typeof g.action == "function" && g.action(g) === !1 && g.href) {
        M.preventDefault();
        return;
      }
      s("action", {
        id: g.id,
        item: g
      }), g.href && i.closeOnLinkClick ? a() : g.href || a();
    }, F = (g) => {
      const M = [];
      if (g.variant) {
        const ae = typeof g.variant == "function" ? g.variant(i) : g.variant;
        M.push(`variant-${ae}`);
      }
      if ((typeof g.disabled == "function" ? g.disabled(i) : g.disabled) && !g.href && M.push("disabled"), L(g) && M.push("active"), g.href && M.push("menu-link"), C(g) && M.push("external-link"), g.class) {
        const ae = typeof g.class == "function" ? g.class(i) : g.class;
        M.push(ae);
      }
      return M.join(" ");
    }, H = (g) => {
      const M = g.target;
      n.value && r.value && l.value && !r.value.contains(M) && !l.value.contains(M) && a();
    }, j = (g) => {
      g.key === "Escape" && n.value && a();
    };
    return Wt(() => {
      document.addEventListener("click", H), document.addEventListener("keydown", j);
    }), cs(() => {
      document.removeEventListener("click", H), document.removeEventListener("keydown", j);
    }), (g, M) => (w(), T("div", Vg, [
      O("div", {
        ref_key: "trigger",
        ref: r,
        onClick: V,
        class: Ie(["actions-btn", { active: k(n), disabled: c.value }])
      }, [
        h.value ? (w(), ve(k(Ns), {
          key: 0,
          icon: E.value,
          class: "icon"
        }, null, 8, ["icon"])) : U("", !0),
        f.value ? (w(), T("span", {
          key: 1,
          class: "label",
          textContent: J(u.value)
        }, null, 8, Ng)) : U("", !0)
      ], 2),
      (w(), ve(La, { to: "body" }, [
        k(n) && !c.value ? (w(), T("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: Je(k(p)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: M[0] || (M[0] = ar(() => {
          }, ["stop"]))
        }, [
          (w(!0), T(Te, null, je(x.value, (Y, ae) => (w(), T(Te, { key: ae }, [
            Y.type === "divider" ? (w(), T("div", Gg)) : Y.type === "group" ? (w(), T("div", qg, J(Y.label), 1)) : Y.show !== !1 ? (w(), ve(fc(A(Y)), wi({
              key: 2,
              ref_for: !0
            }, $(Y), {
              onClick: (P) => R(Y, P),
              id: Y.id,
              class: ["menu-item", F(Y)],
              disabled: Y.disabled && !Y.href
            }), {
              default: Ii(() => [
                Y.icon || L(Y) ? (w(), ve(k(Ns), {
                  key: 0,
                  icon: L(Y) ? ["fass", "check"] : I(Y.icon)
                }, null, 8, ["icon"])) : U("", !0),
                O("span", null, J(Y.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : U("", !0)
          ], 64))), 128))
        ], 4)) : U("", !0),
        k(n) && !c.value ? (w(), T("div", {
          key: 1,
          class: "backdrop",
          onClick: M[1] || (M[1] = //@ts-ignore
          (...Y) => k(a) && k(a)(...Y))
        })) : U("", !0)
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
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = ja(t);
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
          const u = Z({
            v: r,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let f = u, h = !0, p;
            return typeof t.min == "number" && f < t.min && (f = t.min, h = !1, p = "below_min"), typeof t.max == "number" && f > t.max && (f = t.max, h = !1, p = "above_max"), { value: f, valid: h, message: p };
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
          const f = Z({
            v: r,
            nf: "decimal"
          });
          if (f === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let h = f;
          if (t.type === "integer" && (h = Math.round(h)), t.allowZero === !1 && h === 0)
            return {
              value: h,
              valid: !1,
              message: "zero_not_allowed"
            };
          let p = !0, I;
          return typeof t.min == "number" && h < t.min && (h = t.min, p = !1, I = "below_min"), typeof t.max == "number" && h > t.max && (h = t.max, p = !1, I = "above_max"), { value: h, valid: p, message: I };
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
          if (!ja(c)) {
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
    const i = t, s = e, n = te(!0), a = te(null), o = Q(() => i.value === i.trueValue), {
      handleCheckboxChange: r,
      handleFocus: l,
      handleBlur: c
    } = Ug({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, f) => (w(), T("input", {
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
      (...h) => k(r) && k(r)(...h)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...h) => k(l) && k(l)(...h)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...h) => k(c) && k(c)(...h))
    }, null, 40, Yg));
  }
}), Zg = ["for"], Fs = /* @__PURE__ */ De({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (w(), T("label", {
      for: t.id,
      class: "input-label"
    }, J(t.label), 9, Zg));
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
    const i = t, s = e, n = te(!0), a = te(null), o = Q(() => i.options.map((l) => ({
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
    return (l, c) => (w(), T("select", wi(l.$attrs, {
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
      }, J(i.text?.select?.toUpperCase() ?? "SELECT"), 9, Jg),
      i.multiEdit ? (w(), T("option", Qg, J(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : U("", !0),
      (w(!0), T(Te, null, je(o.value, (u) => (w(), T("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, J(u.label), 9, em))), 128))
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
      handleCompositionStart: h,
      handleCompositionEnd: p,
      handlePaste: I
    } = Wg({
      props: i,
      emit: s,
      isMounted: n
    }), E = (L) => {
      const C = L.getBoundingClientRect(), A = window.getComputedStyle(L);
      return C.width > 0 && C.height > 0 && A.display !== "none" && A.visibility !== "hidden";
    };
    return Wt(() => {
      (Se(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && E(a.value) && yt(() => a.value.focus());
    }), cs(() => {
      n.value = !1;
    }), (L, C) => (w(), T("input", wi(L.$attrs, {
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
      (...A) => k(h) && k(h)(...A)),
      onCompositionend: C[5] || (C[5] = //@ts-ignore
      (...A) => k(p) && k(p)(...A)),
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
    const i = e, s = t, n = te(null), a = te(null), o = te(!0), r = te(s.numberFormat), l = Q(() => s.custom ? "custom-" + s.id : s.id), c = Q(() => `${l.value}-error`), u = Q(() => s.label || s.placeholder), f = Q(() => g(s.type, s.numberFormat)), h = Q(() => M(s.type, s.numberFormat)), p = Q(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), I = Q(() => {
      let P = s.value;
      if (s.type !== "unitDependent" || !P) return P;
      try {
        return Z({ v: P, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), E = Q(() => s.options.map((P) => ({
      value: P.value,
      label: P.label || P.value?.toString(),
      hidden: P.hidden || !1,
      disabled: P.disabled || !1
    }))), L = Q(() => E.value.map((P) => {
      const _ = P.label ? q(P.label) : P.value?.toString();
      return {
        ...P,
        // Translate the label key first, then uppercase the translated result
        label: _?.toUpperCase() || P.value?.toString().toUpperCase()
      };
    })), C = Q(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), A = Q(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), $ = Q(() => ({
      ...A.value,
      type: s.type,
      inputMode: h.value,
      inputType: f.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default,
      disableRequiredValidation: s.disableRequiredValidation
    })), x = Q(() => ({
      ...A.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), V = Q(() => ({
      ...A.value,
      options: L.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), R = Q(() => (s.text?.select || "SELECT").toUpperCase()), F = Q(() => (s.text?.delete || "DELETE").toUpperCase()), H = (P) => {
      a.value = P;
    }, j = (P) => s.label && s.enableLabel && s.labelPosition === P, g = (P, _) => {
      switch (P) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return _ === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, M = (P, _) => {
      if (P === "unitDependent")
        return _ === "fraction" ? "text" : "decimal";
      switch (P) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, Y = (P) => {
      i("update:value", P);
    }, ae = (P, _) => {
      P.valid === void 0 || P.valid === !0 ? (o.value = !0, i("validation", n.value, P)) : P.valid === !1 && P.message && (o.value = !1, console.warn(`Field validation error for field ${_} - ${P.message}`), i("validation", n.value, P));
    };
    return Me(() => s.numberFormat, (P, _) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && P !== _ && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const z = Z({ v: s.value, nf: P });
            i("update:value", z);
          } catch {
            i("update:value", P === "decimal" ? 0 : "0");
          }
        r.value = P;
      }
    }), (P, _) => (w(), T("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ie(["input-wrapper", C.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (w(), T("div", nm, [
        j("first") ? (w(), ve(Fs, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        t.type === "checkbox" ? (w(), ve(Kg, wi({
          key: 1,
          ref: H,
          type: "checkbox"
        }, x.value, {
          value: t.value,
          "onUpdate:value": _[0] || (_[0] = (z) => i("update:value", z))
        }), null, 16, ["value"])) : U("", !0),
        j("last") ? (w(), ve(Fs, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ])) : (w(), T(Te, { key: 1 }, [
        j("first") ? (w(), ve(Fs, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        p.value ? (w(), ve($l, wi({
          key: 1,
          ref: H
        }, $.value, {
          "input-type": f.value,
          "input-mode": h.value,
          value: I.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: ae,
          "onUpdate:value": Y
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (w(), ve(tm, wi({
          key: 2,
          ref: H
        }, V.value, {
          "onUpdate:value": _[1] || (_[1] = (z) => i("update:value", z))
        }), {
          default: Ii(() => [
            O("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, J(R.value), 9, am),
            t.multiEdit ? (w(), T("option", om, J(F.value), 1)) : U("", !0),
            (w(!0), T(Te, null, je(L.value, (z) => (w(), T("option", {
              key: z.value,
              hidden: z.hidden,
              value: z.value,
              disabled: z.disabled
            }, J(z.label), 9, rm))), 128))
          ]),
          _: 1
        }, 16)) : U("", !0),
        j("last") ? (w(), ve(Fs, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ], 64)),
      Gs(P.$slots, "default")
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
      getSelectOptions: h,
      getPriceDisplay: p,
      shouldShowDeleteButton: I,
      getLocationGroup: E,
      isLocationVisible: L,
      handleInputChange: C,
      handleDelete: A
    } = kc({
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
      isActionMenuDisabled: V,
      customNameActions: R,
      handleAddCustomName: F,
      handleCustomNameAction: H
    } = Ic({
      extraType: i.extraType,
      customNames: ai(i, "customNames"),
      usedNames: ai(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: h,
      onCustomNameAdded: (G) => s("custom-name-added", i.extraType, G),
      onCustomNameDeleted: (G) => s("custom-name-deleted", i.extraType, G)
    }), {
      renderLocations: j,
      gridStyle: g,
      getInputId: M,
      getDeleteConfig: Y
    } = Cc({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: a,
      getInputType: u,
      getInputConfig: (G, le) => f(G, le),
      getAllInputConfig: (G) => f("all", G),
      getInputConfigForLocation: f,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: I,
      locations: ai(i, "locations"),
      locationGroups: ai(i, "locationGroups")
    }), ae = te(!1), P = Q(() => (G) => {
      const le = E(G);
      return le === "all" || le === "faces" || le === "sides";
    }), _ = Q(() => (G) => $a(i.extraType).includes(G) ? Mo(G) === "face" : !1), z = Q(() => (G) => $a(i.extraType).includes(G) ? Mo(G) === "side" : !1), N = Q(() => (G) => i.shape.issues?.some((le) => le.category?.includes("extras") && le.field?.some((fe) => fe[0] === "extras" && fe[1] === i.extraType && fe[2] === G)) ?? !1);
    return Wt(() => {
      const le = i.shape.extras?.[i.extraType];
      if (!le || typeof le != "object") {
        ae.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (o.value && !("faces" in le)) {
        ae.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in le)) {
        ae.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (G, le) => {
      const fe = pi("FontAwesomeIcon");
      return ae.value ? U("", !0) : (w(), T("div", {
        key: 0,
        class: Ie(["extras group", [t.extraType]]),
        style: Je({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (w(), T("div", lm, [
          O("div", cm, [
            Fe($l, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: k($),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": le[0] || (le[0] = (de) => $.value = de || ""),
              onKeydown: hc(k(F), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            O("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !k(x),
              onClick: le[1] || (le[1] = //@ts-ignore
              (...de) => k(F) && k(F)(...de))
            }, " Add ", 8, um)
          ]),
          Fe(zg, {
            "menu-items": k(R),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: k(V),
            onAction: k(H)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : U("", !0),
        O("div", {
          class: "inputs grid-layout",
          style: Je({ "grid-template-columns": k(g) })
        }, [
          (w(!0), T(Te, null, je(k(j), (de) => (w(), T(Te, { key: de }, [
            k(L)(de) ? (w(), T(Te, { key: 0 }, [
              O("div", {
                class: Ie(["label", {
                  "group-label": P.value(de),
                  "face-label": _.value(de),
                  "side-label": z.value(de),
                  "has-validation-issue": N.value(de)
                }])
              }, J(k(c)(de)), 3),
              (w(!0), T(Te, null, je(t.allOptions, (ye, Oe) => (w(), T("div", {
                key: `${de}-${Oe}`,
                class: "input-cell"
              }, [
                Fe(ki, wi({
                  id: k(M)(de, Oe),
                  "data-field": `${t.extraType}-${de}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Oe
                }, { ref_for: !0 }, k(f)(de, Oe), {
                  "onUpdate:value": (K) => k(C)(de, Oe, K)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              k(Y)(de).show ? (w(), T("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !k(Y)(de).enabled,
                title: k(Y)(de).ariaLabel,
                onClick: (ye) => k(A)(de)
              }, [
                Fe(fe, { icon: ["fass", "trash"] })
              ], 8, dm)) : U("", !0),
              t.enablePricing ? (w(), T("div", fm, J(k(p)(de)), 1)) : U("", !0)
            ], 64)) : U("", !0)
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
}, js = /* @__PURE__ */ Tt(hm, [["__scopeId", "data-v-0aa91058"]]), pm = {
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
  return w(), T("div", gm, [
    i.complete ? U("", !0) : (w(), T("svg", {
      key: 0,
      class: "loading",
      style: Je({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      or('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, mm)),
    i.complete ? (w(), T("svg", {
      key: 1,
      class: "complete",
      style: Je({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      O("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : U("", !0),
    i.showNumber ? (w(), T("div", ym, J(i.number), 1)) : U("", !0)
  ]);
}
const Jo = /* @__PURE__ */ Tt(pm, [["render", bm]]), { addNotice: Li } = Da();
let ea = null;
function vm() {
  return ea || (ea = rr()), ea;
}
function Qo(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function wm(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = vm(), o = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = Qo(o), u = Qo(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const L = c.reduce((A, $) => A + ($.q || 1), 0), C = u.reduce((A, $) => A + ($.q || 1), 0);
      if (L > t.maxShapes || C > t.maxStock)
        return Li({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return Li({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return Li({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let f;
    if (t.useInventory && t.selectedSaw)
      f = t.selectedSaw;
    else if (t.inputSaw instanceof el) {
      const L = t.inputSaw.validate();
      i.push(...L), f = t.inputSaw.toData();
    } else {
      f = t.inputSaw;
      const L = new Qr(f);
      i.push(...L.issues);
    }
    const h = n({
      saw: f,
      partTrim: Z({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...h), t.useInventory) {
      if (t.materialStore)
        for (const L of c)
          L.material || i.push(new ie({
            item: L,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const L = a(f);
      i.push(...L);
    }
    if (l.length > 0) {
      l.forEach((C) => C.populateParentID(c));
      const L = Qh(l, c);
      i.push(...L);
    }
    await Sm(c, t, i);
    const p = _r(i);
    if (p.length > 0) {
      const L = {
        saw: p.filter((C) => C.category?.includes("saw")),
        stock: p.filter((C) => C.category?.includes("stock")),
        part: p.filter((C) => C.category?.includes("part") && !C.category?.includes("extras")),
        extras: p.filter((C) => C.category?.includes("extras")),
        group: p.filter((C) => C.category?.includes("group"))
      };
      for (const [C, A] of Object.entries(L))
        if (A.length > 0) {
          Li({
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
      inputShapes: c.map((L) => L.toData()),
      inputStock: u.map((L) => L.toData()),
      inputGroups: l.map((L) => L.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, E = kp.safeParse(I);
    return E.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", E.error.issues), Li({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: E.error.issues.map((L) => `${L.path.join(".")}: ${L.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Li({
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
      if (e.extrasValidationRules && Ge.hasExtras(n, a)) {
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
            location: We(l, { returnKey: !0 })
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
    if (i && i instanceof Lt) {
      const u = i.sides;
      if (u && typeof u == "object" && ("x1" in u || "x2" in u || "y1" in u || "y2" in u)) {
        const h = this.migrateSideNames(u);
        return i.sides = h, !0;
      }
      return !1;
    }
    const a = {}, o = {}, r = { sides: {} };
    if (i && typeof i == "object") {
      const u = this.migrateSideNames(i);
      for (const [f, h] of Object.entries(u))
        Pt.includes(f) && (a[f] = h);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [f, h] of Object.entries(u))
        Pt.includes(f) && (o[f] = h);
    }
    if (n && typeof n == "object") {
      n.all && (r.sides.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && Pt.includes(u) && f && (r.sides[u] = f);
    }
    const l = new Lt(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(o).length > 0 ? new Lt({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : be(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), be(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = be(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof bt)
      return !1;
    const a = {}, o = {}, r = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, f] of Object.entries(i))
        ut.includes(u) && (a[u] = f);
    if (s && typeof s == "object")
      for (const [u, f] of Object.entries(s))
        ut.includes(u) && (o[u] = f);
    if (n && typeof n == "object") {
      n.all && (r.faces.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && ut.includes(u) && f && (r.faces[u] = f);
    }
    const l = new bt(Object.keys(a).length > 0 ? { faces: a } : {}), c = Object.keys(o).length > 0 ? new bt({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : be(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), be(e) && n && (e.finishOptions = r), !0;
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
    if (s && typeof s == "object" && !(s instanceof bt) && !("sides" in s) && !("faces" in s))
      return !0;
    if ("_finish" in e) {
      const n = e._finish;
      if (n && typeof n == "object" && !(n instanceof bt) && !("sides" in n) && !("faces" in n))
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
          const n = Object.keys(i.sides).filter((a) => !Pt.includes(a));
          if (n.length > 0)
            throw new Error(`Invalid side keys in banding: ${n.join(", ")}`);
        }
      }
      const s = e.finish;
      if (s) {
        if ("sides" in s && s.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in s && s.faces) {
          const n = Object.keys(s.faces).filter((a) => !ut.includes(a));
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
  t?.type && delete t.type, km.call(this, t), Im.call(this, t), Cm.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Fa(e));
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
function Fa(t) {
  !t || typeof t != "object" || (er.needsMigration(t) && er.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Ls(t) {
  return t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t ? {
    l1: t.x1 ?? t.l1,
    l2: t.x2 ?? t.l2,
    w1: t.y1 ?? t.w1,
    w2: t.y2 ?? t.w2
  } : t);
}
function Ei(t) {
  if (!t || !Array.isArray(t)) return t;
  const e = {
    "side.x1": "side.l1",
    "side.x2": "side.l2",
    "side.y1": "side.w1",
    "side.y2": "side.w2"
  };
  return t.map((i) => e[i] || i);
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
  if (!(!t || typeof t != "object")) {
    if (xm(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = Ls(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = Ls(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = Ls(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: Ls(e.trim)
    } : e)), t.options) {
      if (Fl(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ei(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ei(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ei(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const i = t.options.extrasLocationGroups[e];
          i && Array.isArray(i) && i.forEach((s) => {
            s.locations && (s.locations = Ei(s.locations));
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
        i.locations && Array.isArray(i.locations) && (i.locations = Ei(i.locations)), i.groups && Array.isArray(i.groups) && i.groups.forEach((s) => {
          s.locations && (s.locations = Ei(s.locations));
        });
      }
    if (t.saw?.cutPreference && ["efficiency", "length", "width", "beam"].includes(t.saw.cutPreference)) {
      const s = {
        efficiency: { cutType: "guillotine", cutPreference: null },
        length: { cutType: "guillotine", cutPreference: "l" },
        width: { cutType: "guillotine", cutPreference: "w" },
        beam: { cutType: "beam", cutPreference: null }
      }[t.saw.cutPreference];
      s && (t.saw.cutType = s.cutType, t.saw.cutPreference = s.cutPreference);
    }
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Fa(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && Fa(t);
  }
}
const Vs = B({
  // Unique identifier for this group (used internally)
  id: m().min(1),
  // Display label for the group (shown in UI)
  label: m().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ee(m().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: d().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: D().optional().default(!1)
}), Pm = B({
  banding: ee(Vs).optional(),
  finish: ee(Vs).optional(),
  planing: ee(Vs).optional()
}).optional(), ta = B({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), ia = B({
  // Shape dimension constraints
  longSide: ta,
  shortSide: ta,
  t: ta,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: m().optional(),
  // Custom validation message (optional)
  message: m().optional()
}), Tm = B({
  banding: ia.optional(),
  finish: ia.optional(),
  planing: ia.optional()
}).optional(), Am = ue(["decimal", "fraction"]), Om = ue(Zr), $m = he([
  me(0),
  me(1),
  me(2)
]).catch(0), Fm = B({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: m().optional(),
  partB: m().optional(),
  partSelected: m().optional(),
  stock: m().optional(),
  text: m().optional(),
  // Checkout-specific colors
  button: m(),
  buttonText: m()
}), Lm = B({
  banding: D().default(!1),
  finish: D().default(!1),
  planing: D().default(!1),
  orientation: D().default(!1),
  diagram: D().default(!1),
  focus: D().default(!1),
  machining: D().default(!1),
  csvImport: D().default(!1),
  click: D().default(!1),
  partName: D().default(!1),
  progressNumber: D().default(!1)
  // imageUpload: z.boolean().default( false )
}), Em = B({
  // Localization
  locale: m().default("en-US"),
  currency: m().default("USD"),
  // Number formatting
  numberFormat: Am.default("decimal"),
  decimalPlaces: d().min(0).max(10).optional(),
  fractionRoundTo: d().optional(),
  // Stock configuration
  stockSelection: Om.optional(),
  stockGrain: Wi.optional(),
  // Part configuration
  minSpacing: Ya.optional(),
  maxParts: d().min(0).optional(),
  orientationModel: $m.default(0),
  minDimension: d().min(0).optional(),
  partTrim: d().min(0).optional(),
  // UI configuration
  debug: D().default(!1),
  enable: Lm.optional(),
  colors: Fm.optional(),
  // Custom fields
  customFields: ee(xe()).optional(),
  fieldOrder: ee(m()).optional(),
  // Extras location filtering
  bandingLocations: ee(Zn).optional(),
  finishLocations: ee(Zn).optional(),
  planingLocations: ee(Zn).optional(),
  // Extras location groups
  extrasLocationGroups: Pm,
  // Extras validation rules
  extrasValidationRules: Tm
});
ue([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const es = we(
  m(),
  d().min(0)
).default({}), Dm = B({
  name: m().trim().min(1),
  thicknesses: ee(
    he([
      m().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      d()
    ])
  ).min(1)
}), sa = B({
  labels: ee(m()),
  pricing: we(m(), d().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: xe().optional(),
  keys: ee(m()).optional(),
  // if not all the default keys should be set
  locations: ee(m()).optional(),
  // available locations for this extras type
  groups: ee(Vs).optional(),
  // custom location groups
  rules: xe().optional()
  // validation rules for this extras type
});
B({
  success: D(),
  price: d().optional(),
  error: m().optional(),
  cacheHit: D().optional()
});
B({
  valid: D(),
  errors: ee(m()),
  warnings: ee(m())
});
B({
  pricing: es,
  labels: ee(m()),
  options: ee(ee(m())),
  // Simplified to string arrays only
  keys: ee(m()),
  maxLevels: d().min(1)
});
B({
  enableCaching: D().default(!0),
  enableLogging: D().default(!1),
  maxCacheSize: d().min(1).default(1e3)
});
const Rm = B({
  stockType: ue([...Zs]).optional(),
  bladeWidth: he([
    Ua,
    m()
  ]).optional(),
  cutType: wn,
  cutPreference: Sn,
  stackHeight: vn,
  guillotineOptions: xn
}).optional();
B({
  l: d().nullable(),
  w: d().nullable(),
  t: he([d(), m()]).nullable().optional(),
  material: m().nullable().optional(),
  orientationLock: he([
    me("l"),
    me("w"),
    me(""),
    St()
  ]).nullable().optional(),
  q: d().min(1).nullable().optional(),
  name: m().nullable().optional(),
  // Import existing schemas for extras
  banding: jr.nullable().optional(),
  finish: Vr.nullable().optional(),
  planing: Nr.nullable().optional(),
  // Custom data as record
  customData: we(m(), xe()).nullable().optional(),
  stockId: m().nullable().optional()
});
const Mm = B({
  // Required fields
  stock: ee(xi).default([]),
  options: Em,
  // Optional fields
  type: m().optional(),
  // variable | simple
  materials: ee(Dm).optional(),
  banding: sa.nullable().optional(),
  finish: sa.nullable().optional(),
  planing: sa.nullable().optional(),
  machining: xe().optional(),
  bandingPricing: es.optional(),
  finishPricing: es.optional(),
  planingPricing: es.optional(),
  machiningPricing: es.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: xe().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Saw configuration
  saw: Rm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: B({
    enabled: D(),
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
  metadata: Ja.optional(),
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
    formattedTotalStockCost: m(),
    formattedBandingCost: we(m(), m()),
    formattedFinishCost: we(m(), m())
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
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
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
        l1: fi(i.inputShape, "banding", "side.l1"),
        l2: fi(i.inputShape, "banding", "side.l2"),
        w1: fi(i.inputShape, "banding", "side.w1"),
        w2: fi(i.inputShape, "banding", "side.w2")
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
    return Wt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", o);
    }), cs(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", o);
    }), (l, c) => (w(), T("div", {
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
    const i = t, s = e, n = Q(() => i.inputShape ? fi(i.inputShape, "finish", "face.a") : !1), a = Q(() => i.inputShape ? fi(i.inputShape, "finish", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = pi("FontAwesomeIcon");
      return w(), T("button", {
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
        Fe(c, { icon: ["fass", "spray-can"] })
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
  const o = pi("FontAwesomeIcon");
  return w(), T("button", {
    id: t.id,
    class: Ie(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Fe(o, { icon: ["fass", "hammer"] })
  ], 10, Um);
}
const Km = /* @__PURE__ */ Tt(Hm, [["render", Ym]]), Zm = ["id"], Xm = {
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
    const i = t, s = e, n = te(0), a = te(!1), o = (j, g, M, Y) => {
      if (!be(M) || g === 0)
        return j;
      const ae = r();
      return g === 1 || g === 2 && Y !== "n" && j ? ae : j;
    }, r = (j) => {
      const g = { ...i, ...j };
      if (!g.rectangle || !be(g.rectangle)) return "";
      let M = "";
      switch (g.orientationModel) {
        case 0:
          M = x.value;
          break;
        case 1:
          g.stockGrain === "y" || g.stockGrain === "n" ? M = g.rectangle.l >= g.rectangle.w ? "l" : "w" : g.rectangle.l >= g.rectangle.w ? M = g.stockGrain : M = M = g.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          M = g.rectangle.l >= g.rectangle.w ? "l" : "w";
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
      const j = c(x.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && x.value === "" && n.value !== j && n.value === 0 && (console.log("🔄 Syncing orientation index for multi-edit", { from: n.value, to: j }), n.value = j);
      let M = null;
      [1, 2].includes(i.orientationModel) ? (console.log("🔀 Toggling orientation (model 1 or 2)"), M = f()) : (console.log("🔄 Iterating through orientation options (model 0)"), M = u()), console.log("✅ Setting new orientation", {
        oldIndex: n.value,
        newIndex: M,
        oldValue: A.value[n.value],
        newValue: A.value[M]
      }), n.value = M;
    }, c = (j) => {
      const g = A.value.findIndex((M) => M === j);
      return g === -1 ? 0 : g;
    }, u = () => {
      let j = n.value + 1;
      return j > A.value.length - 1 && (j = 0), j;
    }, f = () => {
      let j = 0;
      if (x.value === "") {
        const g = r();
        j = A.value.findIndex((M) => M === g);
      } else
        j = A.value.findIndex((g) => g === "");
      return j;
    }, h = (j) => {
      console.log("📤 Emitting updateOrientation event", { newValue: j }), s("updateOrientation", j);
    }, p = () => {
      const j = x.value;
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
    }, I = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !x.value) {
        L("");
        return;
      }
      const j = o(
        x.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (j !== x.value) {
        L(j);
        return;
      }
      if (!a.value || n.value === -1) {
        const g = c(x.value);
        n.value = g;
      }
      if (be(i.rectangle)) {
        if (i.orientationModel === 1) {
          const g = R.value ? r() : x.value;
          L(g);
          return;
        }
        if (i.orientationModel === 2) {
          let g;
          R.value ? g = i.stockGrain !== "n" ? r() : "" : g = x.value, L(g);
        }
      }
    }, E = te(!1), L = (j) => {
      const g = c(j);
      E.value = !0, n.value = g, E.value = !1, h(j);
    }, C = () => {
      const j = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], g = ["l", "w", "y", "n"], M = [0, 1, 2], Y = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, ae = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, P = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, _ = [];
      j.forEach((z) => {
        g.forEach((N) => {
          M.forEach((G) => {
            const le = new Ah({
              l: z.l,
              w: z.w
            }), de = r({
              orientationModel: G,
              rectangle: le,
              stockGrain: N
            });
            let ye = "";
            le.l === le.w ? ye = "l === w" : le.l > le.w ? ye = "l >= w" : ye = "w > l";
            const Oe = ["l", "w", "y"].includes(N) ? Y : ae;
            _.push({
              Model: G,
              "Stock grain": N,
              "Stock grain description": P[N],
              Dimensions: ye,
              "Orientation lock": de || "N/A",
              "Orientation Lock description": Oe[de] || "N/A"
            });
          });
        });
      }), _.sort((z, N) => {
        if (z.Model !== N.Model)
          return z.Model - N.Model;
        if (z["Stock grain"] !== N["Stock grain"])
          return z["Stock grain"].localeCompare(N["Stock grain"]);
        const G = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return G[z.Dimensions] - G[N.Dimensions];
      }), console.table(_);
    }, A = Q(() => {
      if (!i.rectangle) return ["l", "w"];
      if (Vt(i.rectangle)) return ["l", "w"];
      let j = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : ($.value && (j = j.filter((g) => g !== "w")), j);
    }), $ = Q(() => be(i.rectangle) || ji(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), x = Q(() => {
      let j = "";
      if (Vt(i.rectangle))
        j = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (be(i.rectangle))
        j = i.rectangle.orientationLock ?? "";
      else if (ji(i.rectangle)) {
        const M = i.rectangle.grain ?? "";
        M === "l" || M === "w" || M === "" ? j = M : j = "";
      }
      return j;
    }), V = Q(() => Vt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), R = Q(() => !V.value.l && !V.value.w), F = Q(() => Vt(i.rectangle) ? !1 : oa(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), H = Q(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (ji(i.rectangle) || i.rectangleType === "stock") {
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
      const j = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, g = i.stockGrain || "default";
      let M = "default";
      be(i.rectangle) || i.rectangleType === "shape" ? M = p() : Vt(i.rectangle) && (M = i.rectangle.direction || "default");
      const Y = j[g]?.[M];
      return Y || j[g]?.default || "freeRotation";
    });
    return Me(n, (j, g) => {
      if (!a.value) {
        console.log("⏭️ Skipping: not mounted yet");
        return;
      }
      if (g === void 0) {
        console.log("⏭️ Skipping: oldIndex is undefined");
        return;
      }
      if (E.value) {
        console.log("⏭️ Skipping: updating programmatically");
        return;
      }
      h(A.value[j]);
    }, { immediate: !1 }), Me(V, (j, g) => {
      if (!i.rectangle || i.orientationModel === 0 || !be(i.rectangle) || be(i.rectangle) && (i.orientationModel === 2 && g.l && g.w && !x.value || i.stockGrain === "n" && !x.value))
        return;
      const M = r();
      x.value !== M && h(M);
    }, { immediate: !1 }), Me(() => i.stockGrain, (j, g) => {
      j !== g && I();
    }, { immediate: !0 }), Wt(() => {
      I(), yt(() => {
        a.value = !0, i.debug && C();
      });
    }), (j, g) => (w(), T("button", {
      type: "button",
      id: t.id,
      class: Ie(["c-btn orientation-button", { rot: F.value, square: $.value, disabled: t.disabled, [H.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      H.value === "delete" ? (w(), T("svg", Xm, [...g[0] || (g[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : U("", !0),
      H.value === "noChange" ? (w(), T("svg", Jm, [...g[1] || (g[1] = [
        O("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : U("", !0),
      H.value === "freeRotation" ? (w(), T("svg", Qm, [...g[2] || (g[2] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : U("", !0),
      H.value === "leftRight" ? (w(), T("svg", ey, [...g[3] || (g[3] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : U("", !0),
      H.value === "topBottom" ? (w(), T("svg", ty, [...g[4] || (g[4] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : U("", !0),
      H.value === "grainLeftRight" ? (w(), T("svg", iy, [...g[5] || (g[5] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : U("", !0),
      H.value === "grainTopBottom" ? (w(), T("svg", sy, [...g[6] || (g[6] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : U("", !0)
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
    const i = t, s = e, n = Q(() => i.inputShape ? fi(i.inputShape, "planing", "face.a") : !1), a = Q(() => i.inputShape ? fi(i.inputShape, "planing", "face.b") : !1), o = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = pi("FontAwesomeIcon");
      return w(), T("button", {
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
        Fe(c, { icon: ["fass", "hammer-brush"] })
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
    const i = t, s = e, n = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], a = Q(() => n.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0), o = Q(() => {
      try {
        const A = i.field.propertyPath || i.field.name;
        return A.includes(".") ? ui(i.item, A) ?? null : i.item[A] ?? null;
      } catch (A) {
        return console.error("[CheckoutField] Error getting field value:", A), null;
      }
    }), r = Q(() => {
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
    }), l = Q(() => i.field.output ? i.field.output : null), c = Q(() => i.field.options || []), u = Q(() => !1), f = Q(() => To(i.item, [i.field.name])), h = Q(() => To(i.item, [i.field.name], !0)), p = Q(() => i.multiEdit || !1), I = Q(() => i.materialOptions?.length > 0 && be(i.item) ? !i.item.material : !1), E = Q(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && o.value !== null && i.field.info[o.value] || null : null), L = (A) => {
      s("update", A);
    }, C = (A, $) => {
      s("validation", A, $);
    };
    return (A, $) => a.value ? (w(), T(Te, { key: 1 }, [
      t.field.name === "orientationLock" ? (w(), ve(tr, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "button-background": "#2c8d8f",
        onUpdateOrientation: L
      }, null, 8, ["rectangle", "stock-grain"])) : t.field.name === "grain" ? (w(), ve(tr, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        onUpdateOrientation: L
      }, null, 8, ["rectangle", "stock-grain"])) : t.field.name === "banding" ? (w(), ve(Gm, {
        key: 2,
        "input-shape": k(be)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: $[0] || ($[0] = (x) => A.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (w(), ve(zm, {
        key: 3,
        "input-shape": k(be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[1] || ($[1] = (x) => A.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (w(), ve(ay, {
        key: 4,
        "input-shape": k(be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[2] || ($[2] = (x) => A.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (w(), ve(Km, {
        key: 5,
        "input-shape": k(be)(t.item) ? t.item : null,
        onOpen: $[3] || ($[3] = (x) => A.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (w(), ve(ki, {
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
        "onUpdate:value": L,
        onValidation: C
      }, {
        default: Ii(() => [
          Gs(A.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (w(), ve(ki, {
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
        "onUpdate:value": L,
        onValidation: C
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (w(), T("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: $[4] || ($[4] = (x) => A.$emit("open-image-upload"))
      }, [
        Fe(k(Ns), { icon: ["fass", "image"] })
      ], 8, ry)) : U("", !0)
    ], 64)) : (w(), ve(ki, {
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
      warning: h.value,
      "disable-required-validation": p.value,
      "onUpdate:value": L,
      onValidation: C
    }, {
      default: Ii(() => [
        E.value ? (w(), T("p", oy, [
          Fe(k(Ns), { icon: ["fass", "info-circle"] }),
          ts(" " + J(E.value), 1)
        ])) : U("", !0),
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
}, na = !1, Ay = /* @__PURE__ */ De({
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
    const s = Ri(() => Promise.resolve().then(() => My)), n = Ri(() => Promise.resolve().then(() => ib)), a = Ri(() => Promise.resolve().then(() => lb)), o = Ri(() => Promise.resolve().then(() => Qa)), {
      inputs: r,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: f,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: h,
      addInputShape: p,
      addInputStock: I,
      cloneInputShape: E,
      updateInputShape: L,
      validationIssues: C,
      setExtrasOptionsFromPricing: A,
      getCentralizedOptions: $
    } = rr(), { r: x, updateFromResult: V, stackedStock: R, uniqueAddedShapes: F, uniqueUsedStock: H, activeStockAutoId: j, activeStock: g, setActiveStockAutoId: M } = Ea(), { progress: Y, reset: ae } = Ac(), { addNotice: P } = Da(), _ = Q(() => r.inputShapes.value.filter(be)), z = (b) => !b || !Array.isArray(b) ? [] : b.some((S) => {
      const y = S.banding && typeof S.banding == "object" && !S.banding.sides, W = S.finish && typeof S.finish == "object" && !S.finish.faces;
      return y || W;
    }) ? (console.log("[CheckoutCalculator] Converting V2 format to internal format"), Mp({ parts: b }).parts || []) : b, N = t, G = i, le = te(!1), fe = "production", de = te(navigator?.language || "en-US"), ye = pc(null), Oe = window.location.hostname, K = te(!1), ot = te(!0), ii = fo("Checkout/currentURL", window.location.href), Ut = fo("Checkout/lastMigrationVersion", "0.0.0"), ht = te(null), X = te(!1), qe = te(!1), et = te(!1), si = te(!1), gs = te(!1), Yt = te(_u()), oe = te(!1), { socket: ce } = Pc({
      refs: {
        connected: K,
        thinking: et
      },
      callbacks: {
        onResult(b) {
          const v = b.optimisation;
          if (V(v), !v.shapeList?.length || !v.stockList?.length) {
            ae(), P({
              type: "error",
              message: q("errors.calculation.no_result"),
              additional: [q("errors.validation.check_inputs")]
            }), et.value = !1;
            return;
          }
          if (ht.value = {
            jobId: b.jobId,
            metadata: x.metadata.value,
            parts: Do(F.value.map((S) => ({
              ...S,
              q: x.metadata.value?.addedPartTally?.[S.parentId],
              stock: { id: S?.stock?.id || S?.stockId }
            }))),
            stock: H.value.map((S) => ({
              id: S.id,
              name: S?.name,
              l: S.l,
              w: S.w,
              t: S?.t,
              material: S.material,
              q: x.metadata.value?.usedStockTally?.[S.parentId],
              trim: S?.trim,
              cost: S?.cost,
              analysis: S?.analysis
              // type: s?.type
            })),
            offcuts: x.offcuts?.value?.map((S) => ({
              l: S.l,
              w: S.w,
              t: S?.t ?? null,
              q: S.q,
              stockId: S.stockId
            })),
            inputs: {
              parts: Do(r.inputShapes.value)
            }
          }, x?.metadata?.value?.unplacedParts?.length) {
            const S = x.metadata.value.unplacedParts.map((y) => y.id).join();
            P({
              type: "warning",
              message: q("woodwork.parts_not_fit") + ": " + S
            });
          }
          ht.value && (console.log(ht.value), G("result", ht.value)), et.value = !1;
        },
        onUser(b) {
          ye.value = b;
        },
        onConnectError(b) {
          P({
            type: "error",
            message: q("errors.network.cannot_connect"),
            additional: [b]
          });
        },
        onError(b) {
          P({
            type: "error",
            message: q("errors.general.error_occurred"),
            additional: [b]
          });
        }
      }
    }), ke = {
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
    }, re = mt(ke), Ee = mt({
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
    }), Ve = te(null), ni = te(!1), mi = te(""), Pn = te("");
    Me(C, (b) => {
      b?.length > 0 ? (ni.value = !0, mi.value = "Validation Errors", Pn.value = b.map((v) => `${v.message} (${v.category.join(", ")})`).join(`

`)) : mi.value === "Validation Errors" && (ni.value = !1, mi.value = "", Pn.value = "");
    }, { deep: !0 });
    const At = mt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Re = te([]), ze = te([]), ms = te([]), Mt = mt({
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
    }), Be = mt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), Ne = mt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), eo = te(null), Ti = mt({}), Ai = mt({}), Oi = mt({}), Ml = Q(() => ({
      banding: Ti.rules,
      finish: Ai.rules,
      planing: Oi.rules
    })), _l = Q(() => Tc({
      stockType: Ee.stockType,
      materials: Re.value,
      minDimension: re.minDimension,
      ...re.fieldOrder && re.fieldOrder.length > 0 ? { allowedFieldIds: re.fieldOrder } : {}
    })), to = te([]), ys = te({
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
    }), Yi = Q(() => {
      const b = _l.value.fields.value, v = b.filter((S) => ys.value[S.name] ?? !0);
      return console.log("[relevantFieldDefinitions] All fields:", b.map((S) => S.name)), console.log("[relevantFieldDefinitions] fieldEnabledStates:", ys.value), console.log("[relevantFieldDefinitions] Filtered fields:", v.map((S) => S.name)), v;
    }), Ki = Q(() => Yi.value.length + 2), Bl = Q(() => {
      const b = {
        id: 34,
        del: 32
      }, v = {
        id: `${b.id}px`,
        del: `${b.del}px`
      }, S = [];
      for (const y of Yi.value) {
        if (y.name === "trim") continue;
        const W = y.w ?? "minmax(20px, 1fr)";
        S.push(W);
      }
      return S.unshift(v.id), S.push(v.del), S.join(" ");
    }), bs = Q(() => ({
      "--btn-color": re.colors.buttonText,
      "--btn-bg": re.colors.button,
      "--btn-hover-bg": jl(re.colors.button, -8),
      "--btn-focus-ring": re.colors.button
    }));
    function jl(b, v) {
      const S = b.replace("#", ""), y = parseInt(S, 16), W = Math.round(2.55 * v), pe = (y >> 16) + W, Pe = (y >> 8 & 255) + W, Xe = (y & 255) + W;
      return `#${(16777216 + (pe < 255 ? pe < 1 ? 0 : pe : 255) * 65536 + (Pe < 255 ? Pe < 1 ? 0 : Pe : 255) * 256 + (Xe < 255 ? Xe < 1 ? 0 : Xe : 255)).toString(16).slice(1)}`;
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
    }, io = Q(() => ye.value ? !(ye.value && ye.value?.api?.whiteLabel) : !0), vs = {
      stockSelection: (b) => {
        const v = ["efficiency", "smallest"];
        b && !v.includes(b) ? console.warn(`${b} is not a valid stockSelection, expected ${v.join("|")}`) : Ee.options.stockSelection = b;
      },
      minSpacing: (b) => {
        Ee.options.minSpacing = b;
      },
      maxParts: (b) => {
        re.maxParts = b;
      },
      locale: (b) => {
        de.value = b.replace(/_/g, "-");
      },
      enable: (b) => {
        const v = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const S in ke.enable)
          S in b && (re.enable[S] = b[S]);
        for (const S in v)
          _t(S, ui(b, [v[S]]) ?? ke.enable[v[S]]);
        gs.value = ui(b, ["csvImport"]) ?? ke.enable.csvImport;
      },
      colors: (b) => {
        for (const v in ke.colors)
          v in b && (re.colors[v] = b[v]);
      },
      orientationModel: (b) => {
        if (![0, 1, 2].includes(b)) {
          re.orientationModel = 0;
          return;
        }
        re.orientationModel = b;
      },
      numberFormat: (b) => {
        if (!["decimal", "fraction"].includes(b)) {
          re.numberFormat = "decimal";
          return;
        }
        re.numberFormat = b;
      },
      customFields: (b) => {
        if (!Array.isArray(b) || !b?.length) return;
        const v = [];
        b.forEach((S, y) => {
          v.push(S), v[y].custom = !0;
          const W = so(S.id);
          v[y].id = W, v[y].fieldMap = "customData." + W, S.type === "checkbox" && (v[y].w = "32px"), S.type === "select" && (v[y].output = S.output ?? "string", v[y].options = S.options);
        }), to.value = v, yt(() => {
          for (const S of r.inputShapes.value)
            S.customData = b.reduce((y, W) => {
              const pe = so(W.id);
              return y[pe] = S.customData[pe] || W.default || "", y;
            }, {});
        });
      }
    }, Nl = (b) => {
      N.debug && G("log", ["checkout init...", b]), b?.parts && (b.parts = z(b.parts));
      let v;
      try {
        v = Vm(b);
      } catch (y) {
        G("error", y.message || "Invalid init data");
        return;
      }
      if (v.saw) {
        const y = v.saw;
        if (y.stockType !== void 0 && (Zs.includes(y.stockType) || console.warn(`${y.stockType} is not a valid stockType, expected ${Zs.join("|")}`), Ee.stockType = y.stockType, y.stockType === "linear" && (Ee.cutType = null, Ee.cutPreference = null)), y.bladeWidth !== void 0) {
          const W = typeof y.bladeWidth == "string" ? parseFloat(y.bladeWidth) : y.bladeWidth;
          W >= 0 ? Ee.bladeWidth = W : console.warn(`SmartCut - you provided an incorrect blade width of: ${y.bladeWidth}`);
        }
        if (y.cutType !== void 0 && (Ee.cutType = y.cutType), y.cutPreference !== void 0 && (ca.includes(y.cutPreference) ? Ee.cutPreference = y.cutPreference : console.warn(`SmartCut - cut preference ${y.cutPreference || "N/A"} is not valid. Expected: ${ca.join("|")}`)), y.guillotineOptions !== void 0 && typeof y.guillotineOptions == "object" && Object.assign(Ee.guillotineOptions, y.guillotineOptions), y.stackHeight !== void 0) {
          const W = typeof y.stackHeight == "string" ? parseFloat(y.stackHeight) : y.stackHeight;
          Ee.stackHeight = W;
        }
      }
      if (v?.options) {
        const y = v.options;
        Fl(y), v.saw ? ["stockType", "cutPreference", "bladeWidth"].forEach((Pe) => {
          Pe in v.saw || G("error", `${Pe} is a required saw property`);
        }) : G("error", "saw configuration is required");
        const W = ["enable", "colors"];
        for (const pe in y)
          W.includes(pe) || (re[pe] = y[pe]), pe in vs && vs[pe](y[pe]);
      }
      if (v.options.colors && "colors" in vs && vs.colors(v.options.colors), v.banding) {
        const y = v.banding;
        "locations" in y && y.locations && (Ti.locations = y.locations), "groups" in y && y.groups && (Ti.groups = y.groups), "rules" in y && y.rules && (Ti.rules = y.rules);
      }
      if (v.finish) {
        const y = v.finish;
        "locations" in y && y.locations && (Ai.locations = y.locations), "groups" in y && y.groups && (Ai.groups = y.groups), "rules" in y && y.rules && (Ai.rules = y.rules);
      }
      if (v.planing) {
        const y = v.planing;
        "locations" in y && y.locations && (Oi.locations = y.locations), "groups" in y && y.groups && (Oi.groups = y.groups), "rules" in y && y.rules && (Oi.rules = y.rules);
      }
      $n("banding", v), $n("finish", v), $n("planing", v), zl(v), ao(v), qe.value = !0, N.debug && G("log", ["init complete"]);
      const S = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(S), yt(() => {
        io.value && !Ql() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, _t = (b, v = !1) => {
      ys.value[b] = v;
    }, so = (b) => b ? bu(b)?.toLowerCase() : null, Gl = (b, v, S) => {
      try {
        if (!b || !v) return;
        const y = S !== null && S !== "" && S !== void 0 && S !== 0;
        if (v === "material" && (!S || S === "")) {
          const Pe = { material: null, t: null };
          L(b.autoId, Pe) || (console.log("[CHECKOUT] Material update failed - using fallback"), Ji(b, "material", null), Ji(b, "t", null), b.isNew || b.validate());
          return;
        }
        if (b.isNew)
          if (y)
            b.isNew = !1;
          else {
            Ji(b, v, S);
            return;
          }
        const W = { [v]: S };
        L(b.autoId, W) || (console.log("[CHECKOUT] Field update failed - using fallback"), Ji(b, v, S), b.validate());
      } catch (y) {
        console.error("[CHECKOUT] Error updating field:", y);
      }
    }, ql = () => {
    }, zl = (b) => {
      if (ui(re, ["enable", "machining"]) && b?.machining) {
        for (const v in Mt)
          b.machining[v] && (Mt[v] = b.machining[v]);
        if (["holes", "hingeHoles"].forEach((v) => {
          b?.machining?.[v] && (Mt[v].enabled = b?.machining?.[v].enabled);
        }), b?.machining?.corners?.types?.length && (Mt.corners.enabled = !0, Mt.corners.types = b.machining.corners.types), b.banding && b?.options?.enable?.banding) {
          if (!Ae) return;
          Mt.banding = {
            enabled: !0
          }, Ae.options.length && (Mt.banding.options = Ae.options), Ae.labels.length && (Mt.banding.labels = Ae.labels), bo(Ae.pricing) && (Mt.banding.pricing = Ae.pricing);
        }
      }
    }, Wl = (b = null) => {
      Ve.value = b, b && be(b) && b.l && b.w ? le.value = !0 : alert(q("machining.enter_dimensions_first"));
    }, Hl = () => {
      le.value = !1;
    }, no = (b = []) => {
      if (ze.value = [], ms.value = [], _t("t", !1), !!b.length) {
        for (const v of b)
          if (v?.t)
            if (typeof v.t == "string" && v.t.includes(",")) {
              const S = oo(v.t, !0);
              S.length === 2 ? (Yl(S), _t("t", !0), v.t = ze.value[0]) : G("error", "bonded thickness found which does not have 2 options");
            } else ze.value.includes(v.t) || ze.value.push(v.t);
        ze.value.length > 1 && _t("t", !0);
      }
    }, Ul = (b) => {
      if (!b) return { thicknesses: [], bondedThicknesses: [] };
      if (!Re.value?.length)
        return {
          thicknesses: ze.value,
          bondedThicknesses: []
        };
      if (!b.material)
        return {
          thicknesses: ze.value,
          bondedThicknesses: []
        };
      const v = Re.value.find((W) => W.name === b.material);
      if (!v)
        return {
          thicknesses: ze.value,
          bondedThicknesses: []
        };
      const S = [...v.thicknesses], y = [];
      for (let W = 0; W < S.length; W++) {
        const pe = S[W], Pe = oo(pe), Xe = [];
        if (Pe.length) {
          for (const pt of Pe)
            S[W] = pt, Xe.push(W);
          W++;
        }
        Xe.length && y.push(Xe);
      }
      return {
        thicknesses: S,
        bondedThicknesses: y
      };
    }, ao = (b) => {
      if (b?.stock?.some((v) => v?.material)) {
        Re.value = [], ze.value = [], ms.value = [];
        const v = /* @__PURE__ */ new Map();
        for (const y of b.stock) {
          if (!y.material) continue;
          const W = y.material.toUpperCase();
          v.has(W) || v.set(W, /* @__PURE__ */ new Set()), y.t != null && v.get(W)?.add(Z({ v: y.t }));
        }
        Re.value = Array.from(v.entries()).map(([y, W]) => ({
          name: y,
          thicknesses: Array.from(W).sort((Pe, Xe) => Pe - Xe)
        }));
        const S = /* @__PURE__ */ new Set();
        for (const y of Re.value)
          for (const W of y.thicknesses)
            S.add(Z({ v: W }));
        ze.value = Array.from(S).sort((y, W) => y - W), Re.value.length > 1 ? _t("material", !0) : _t("material", !1), ze.value.length > 1 ? _t("t", !0) : _t("t", !1);
      } else
        no(b.stock);
    }, Yl = (b, v = null) => {
      if (!Array.isArray(b)) {
        G("error", "addBondedThicknesses expects an array");
        return;
      }
      const S = [];
      for (let y of b)
        re.numberFormat === "decimal" && (y = parseFloat(y)), ze.value.push(y), v && v.thicknesses.push(y), S.push(ze.value.length - 1);
      ms.value.push(S);
    }, Kl = (b) => {
      const { thicknesses: v } = Ul(b);
      return v?.length ? v.map((S) => ({
        label: S?.toString(),
        value: S
      })) : [];
    }, oo = (b, v = !1) => {
      if (typeof b == "string" && b.includes(",")) {
        const S = b.split(",");
        return v ? S.map((y) => Z({ v: y })) : S;
      }
      return [];
    }, Zl = () => {
      oe.value ? Jl() : Xl();
    }, Xl = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), oe.value = !0;
    }, Jl = () => {
      document.exitFullscreen && document.exitFullscreen(), oe.value = !1;
    }, Ql = () => {
      if (ye.value?.api?.whiteLabel) return !0;
      let b = !0;
      const v = document.querySelector("#smartcut-checkout a#credit");
      if (!v) return b = !1;
      const S = window.getComputedStyle(v);
      return S.display === "none" || S.display === "hidden" || S.opacity === "0" || S.color === "transparent" || S.position !== "absolute" || S.color !== "#4e4e4e" && S.color !== "rgb(78, 78, 78)" ? b = !1 : (ot.value = b, b);
    }, Tn = Q(() => typeof N.findExtrasPrice == "function"), ro = (b, v) => {
      let S, y;
      switch (v) {
        case "banding":
          S = Ae.options, y = Ae.labels;
          break;
        case "finish":
          S = Be.options, y = Be.labels;
          break;
        case "planing":
          S = Ne.options, y = Ne.labels;
          break;
        default:
          S = [], y = [];
      }
      yi(b, v, S, y);
    }, lo = (b) => {
      const v = Object.keys(b);
      return Math.max(...v.map((y) => y.split("|").length));
    }, Zi = (b, v, S) => {
      if (!b)
        return [];
      if (S > 0 && !v[S - 1])
        return [];
      const y = /* @__PURE__ */ new Set();
      for (const pe of Object.keys(b)) {
        const Pe = pe.split("|");
        if (Pe.length > S) {
          let Xe = !0;
          for (let pt = 0; pt < S; pt++) {
            const lt = v[pt], rt = Pe[pt];
            if (lt && lt !== rt) {
              Xe = !1;
              break;
            }
          }
          Xe && y.add(Pe[S]);
        }
      }
      return Array.from(y);
    }, An = (b, v, S, y) => {
      let W, pe;
      switch (v) {
        case "banding":
          W = Ae.options, pe = Ae.labels;
          break;
        case "finish":
          W = Be.options, pe = Be.labels;
          break;
        case "planing":
          W = Ne.options, pe = Ne.labels;
          break;
        default:
          W = [], pe = [];
      }
      return Qn(b, v, S, y, W, pe);
    }, ec = (b, v, S) => {
      let y, W;
      switch (v) {
        case "banding":
          y = Ae.options, W = Ae.labels;
          break;
        case "finish":
          y = Be.options, W = Be.labels;
          break;
        case "planing":
          y = Ne.options, W = Ne.labels;
          break;
        default:
          y = [], W = [];
      }
      return Qn(b, v, S, N.findExtrasPrice, y, W);
    }, tc = te({}), ic = (b = 1) => {
      for (let v = b; v--; ) {
        let S = {
          l: null,
          w: Ee.stockType === "linear" ? r.inputStock.value[0]?.w : null,
          t: ze.value.length ? ze.value[0] : null,
          q: 1,
          material: Re.value?.length === 1 ? Re.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const W = r.inputShapes.value[r.inputShapes.value.length - 1];
          S.material = W.material, S.t = W.t;
        }
        const y = p(S);
        y && (Ae?.labels?.length && yi(y, "banding", Ae.options, Ae.labels), Be?.labels?.length && yi(y, "finish", Be.options, Be.labels), Ne?.labels?.length && yi(y, "planing", Ne.options, Ne.labels));
      }
    }, On = (b = {}) => {
      const v = {
        q: 1,
        // Always set quantity to 1
        ...b
      }, S = p(v);
      return S && (Ee.stockType === "linear" && r.inputStock.value[0]?.w && (S.w = r.inputStock.value[0].w), ze.value.length && (S.t = ze.value[0]), Re.value?.length === 1 && (S.material = Re.value[0].name), Ae?.labels?.length && yi(S, "banding", Ae.options, Ae.labels), Be?.labels?.length && yi(S, "finish", Be.options, Be.labels), Ne?.labels?.length && yi(S, "planing", Ne.options, Ne.labels)), S;
    }, sc = (b) => {
      if (ze.value.length)
        for (const v of b) {
          if (!v.t) return;
          const S = ze.value.findIndex(
            (pe) => Z({ v: pe }) === v.t
          ), y = ms.value.find((pe) => pe.includes(S));
          if (!y) return;
          const W = Math.min(
            ...y.map((pe) => ze.value[pe])
          );
          Z({ v: v.t }) > W && (v.q = v.q * (Z({ v: v.t }) / W), v.notes = `Bond to form ${v.t.valueOf()}`, v.t = W);
        }
    }, co = () => {
      ae(), M(null), x.stockList.value = [], x.shapeList.value = [], x.cutList.value = [];
    }, ws = () => {
      r.inputShapes.value.length = 0, N.inputType !== "formula" && yt(() => p({}));
    }, nc = async () => {
      if (G("calculating"), et.value) return !1;
      if (et.value = !0, si.value = !1, !(await wm({
        t: q,
        partTrim: re.partTrim,
        maxShapes: re.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Ae.pricing,
        finishPricing: Be.pricing,
        planingPricing: Ne.pricing,
        findExtrasPrice: N.findExtrasPrice,
        extrasValidationRules: Ml.value,
        onLimit: () => {
          P({
            type: "error",
            message: q("limits.max_parts") + " " + re.maxParts
          });
        }
      })).valid) {
        G("validation-error"), et.value = !1;
        return;
      }
      co();
      const v = r.inputShapes.value.map((y) => E(y)).filter(Boolean);
      if (v.length !== r.inputShapes.value.length)
        return P({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), et.value = !1, !1;
      sc(v), N.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((y) => ({ l: y.l, w: y.w })),
        "parts",
        v.map((y) => ({ l: y.l, w: y.w }))
      );
      const S = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: v.map((y) => y.toData()),
        inputStock: r.inputStock.value.map((y) => y.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Oe,
        extrasOptions: $(),
        source: "checkout",
        sourceVersion: "4.0.6"
      };
      await ce.connect(), ce.emit("calculate", S);
    }, $n = (b, v) => {
      if (console.log(`[initExtra] Starting init for ${b}`), console.log(`[initExtra] initData[${b}]:`, v?.[b]), console.log(`[initExtra] options.enable[${b}]:`, re.enable?.[b]), _t(b, !1), !b || !v || !v?.[b]) {
        console.log(`[initExtra] Early return: missing extraType or initData[${b}]`);
        return;
      }
      if (!ui(re, ["enable", b])) {
        console.log(`[initExtra] Early return: ${b} not enabled in options`);
        return;
      }
      const S = [b, "pricing"];
      if (!yo(v, S)) {
        G("error", `${S.join(".")} not found in sent data`);
        return;
      }
      const y = ui(v, S);
      if (typeof y != "object") {
        G("error", `${S.join(".")} data must be an object`);
        return;
      }
      if (!bo(y)) {
        G("error", `if provided, ${S.join(".")} data must contain some values`);
        return;
      }
      const W = Object.keys(y), pe = Object.values(y);
      if (!W.length) {
        G("error", `no ${S.join(".")} pricing found`);
        return;
      }
      const Pe = /,/;
      for (const rt of W)
        if (Pe.test(rt)) {
          G("error", `${S} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (pe.some((rt) => isNaN(rt))) {
        G("error", `${S} values must be a number`);
        return;
      }
      const Xe = lo(y), pt = [b, "labels"];
      let lt = [];
      if (yo(v, pt))
        lt = ui(v, pt);
      else {
        G("error", `${pt.join(".")} not found`);
        return;
      }
      if (!lt) {
        G("error", `${pt.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(lt)) {
        G("error", `${pt.join(".")} data must be an array`);
        return;
      }
      if (!lt?.length) {
        G("error", `if provided, ${pt.join(".")} data must contain values`);
        return;
      }
      if (lt.length !== Xe) {
        G("error", `${pt.join(".")} length (${lt.length}) must match the number of levels in ${S.join(".")} (${Xe})`);
        return;
      }
      switch (b) {
        case "banding": {
          Ae.labels = lt, Ae.pricing = y;
          const rt = Fn(y);
          Ae.options = rt, A("banding", rt, lt, y);
          break;
        }
        case "finish": {
          Be.labels = lt, Be.pricing = y;
          const rt = Fn(y);
          Be.options = rt, A("finish", rt, lt, y);
          break;
        }
        case "planing": {
          Ne.labels = lt, Ne.pricing = y;
          const rt = Fn(y);
          Ne.options = rt, A("planing", rt, lt, y);
          break;
        }
      }
      if (eo.value = $(), console.log(`[initExtra] Enabling field: ${b}`), _t(b, !0), console.log("[initExtra] Field enabled state:", ys.value[b]), console.log(`[initExtra] ${b} data:`, b === "banding" ? Ae : b === "finish" ? Be : Ne), !!r.inputShapes.value?.length)
        for (const rt of r.inputShapes.value)
          ro(rt, b);
    }, Fn = (b) => {
      const v = [], S = Object.keys(b), y = lo(b);
      for (let W = y; W--; ) v.push(/* @__PURE__ */ new Set());
      for (const W of S)
        W.split("|").forEach((Pe, Xe) => v[Xe].add(Pe));
      for (let W = 0; W < y; W++)
        v[W] = Array.from(v[W]);
      return v;
    }, Ss = (b, v) => {
      if (!v) return;
      b !== "info" && Object.keys(At).forEach((y) => {
        y !== b && y !== "info" && (At[y] = null);
      });
      const S = r.inputShapes.value.indexOf(v);
      At[b] === S ? (Ve.value = null, At[b] = null, tc.value[b] = void 0) : (Ve.value = v, At[b] = S);
    }, uo = (b) => {
      if (G("log", ["load event received"]), !qe.value) {
        G("log", ["load event received"]);
        return;
      }
      ac(b.detail);
    }, ac = (b) => {
      if (G("log", ["loading parts..."]), !b || !b?.inputs?.parts?.length) {
        G("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let v = 0;
      for (const y of b.inputs.parts) {
        const W = On(y);
        W ? W.issues?.length && G("log", [`SmartCut - issues found while importing part at index ${v}`, W.issues]) : G("log", [`SmartCut - error loading part at index ${v}`, y]), v++;
      }
      r.inputShapes.value.flatMap((y) => _r(y.issues)).length && P({
        type: "error",
        message: q("errors.general.issues_found")
      }), G("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, oc = (b) => {
      r.inputShapes.value.length = 0, yt(() => {
        for (const v of b)
          v.t = r.inputStock.value?.[0]?.t ?? null, On(v);
      });
    };
    Me(() => N.inputStock, (b) => {
      if (co(), Array.isArray(b) || console.warn("SmartCut - stock must be passed as an array"), !!b?.length) {
        r.inputStock.value.length = 0, Re.value.length || no(b);
        for (const v of b)
          I({
            ...v,
            autoAdd: !0
            // type: sawData.stockType
          }) || (console.error("Failed to add stock item:", v), P({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? yt(() => {
            r.inputShapes.value.forEach((S) => {
              const y = S.material ? Re.value.find((W) => W.name === S.material) : null;
              if (y)
                y.thicknesses.includes(Z({ v: S.t })) || (S.t = Z({ v: y.thicknesses[0] }));
              else if (Re.value?.length === 1) {
                S.material = Re.value[0].name;
                const W = Re.value[0];
                W.thicknesses.includes(Z({ v: S.t })) || (S.t = Z({ v: W.thicknesses[0] }));
              } else if (Re.value?.length > 1 && S.t) {
                const W = Re.value.find((pe) => pe.thicknesses.some((Pe) => Z({ v: Pe }) === Z({ v: S.t })));
                W ? S.material = W.name : (S.material = Re.value[0].name, S.t = Z({ v: Re.value[0].thicknesses[0] }));
              } else Re.value?.length > 1 ? (S.material = Re.value[0].name, S.t = Z({ v: Re.value[0].thicknesses[0] })) : !S.t && r.inputStock.value[0]?.t && (S.t = Z({ v: r.inputStock.value[0].t }));
            });
          }) : N.inputType !== "formula" && yt(() => p());
          const v = f(r.inputSaw.value);
          v.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(v))), P({
            type: "error",
            message: q("errors.validation.stock_issue"),
            additional: v.map((S) => S.message)
          }));
        }
      }
    }, { immediate: !0 }), Me(r.inputShapes, (b) => {
      G("inputs-changed"), b.forEach((v) => {
        Ee.stockType === "linear" && (v.w = r.inputShapes.value[0]?.w);
        const S = Re.value.find((y) => y.name === v.material);
        S && (S.thicknesses.includes(Z({ v: v.t })) || (v.t = Z({ v: S.thicknesses[0] })));
      });
    }, { deep: !0 }), Me(() => re.numberFormat, (b) => {
      u(b);
    }), Me(() => Ee, (b) => {
      r.inputSaw.value = new el(b);
    }, { deep: !0 }), Wt(async () => {
      if (X.value) return;
      const b = "4.0.6", v = "4.0.0";
      vo(b, v) && !vo(Ut.value, v) && (console.log(`[CheckoutCalculator] Clearing parts for migration from ${Ut.value} to ${b}`), ws(), Ut.value = b);
      const S = new URL(window.location.href), y = S.searchParams.toString(), W = S.origin + S.pathname + (y ? `?${y}` : "");
      ii.value !== W && ws(), ii.value = W, de.value = re.locale, await ce.connect(), ce.emit("getUserFromDomain"), window.addEventListener("smartcut/load", uo), X.value = !0, N.debug && G("log", [
        "ready...",
        "fields:",
        Yi.value.map((pe) => pe.name)
      ]);
    });
    const rc = () => {
      ce && ce.disconnect();
    }, lc = (b, v) => {
      r.inputShapes.value.forEach((S) => {
        S.update({ material: b, t: v });
      }), console.log(r.inputShapes.value.map((S) => S.t)), G("log", [`Updated ${r.inputShapes.value.length} shapes with material: ${b}, thickness: ${v}`]);
    };
    return cs(() => {
      window.removeEventListener("smartcut/load", uo), rc(), delete window.smartcutCheckout;
    }), e({
      init: Nl,
      clear: ws,
      getAvailablePricingOptions: Zi,
      getExtrasPrice: ec,
      formatPrice: N.formatPrice,
      findExtrasPrice: N.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: ro,
      createAndAddInputShape: On,
      updateShapeMaterialThickness: lc,
      initMaterialsThicknesses: ao
    }), (b, v) => {
      const S = pi("FontAwesomeIcon");
      return w(), T(Te, null, [
        qe.value ? U("", !0) : (w(), ve(Jo, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        Ve.value?.machining && le.value ? (w(), ve(k(n), {
          key: 1,
          "input-shape": Ve.value,
          "onUpdate:inputShape": v[0] || (v[0] = (y) => Ve.value = y),
          translate: !0,
          options: Mt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": k(Qn),
          "get-available-pricing-options": Zi,
          "format-price": t.formatPrice,
          onClose: Hl
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : U("", !0),
        qe.value ? (w(), T("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ie(["smartcut-content", { fullscreen: oe.value }])
        }, [
          Yt.value && !t.readonly ? (w(), T("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: Je(bs.value),
            onClick: v[1] || (v[1] = (y) => Zl())
          }, [
            Fe(S, { icon: ["fass", "expand"] }),
            ts(" " + J(k(q)("general.full_screen")), 1)
          ], 4)) : U("", !0),
          io.value ? (w(), T("a", {
            key: 1,
            id: "credit",
            style: Vl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, J(k(pu)(k(q)("general.powered_by"))), 1)) : U("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Je({ "grid-template-columns": Bl.value })
          }, [
            k(r).inputShapes.value.length ? (w(), T("div", cy, [
              v[6] || (v[6] = O("div", { class: "cell id" }, null, -1)),
              (w(!0), T(Te, null, je(Yi.value, (y) => (w(), T("div", {
                key: y.name,
                class: Ie(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(y.name) || y.type === "boolean" }])
              }, J(k(q)(y.label)), 3))), 128)),
              k(fe) === "development" && na ? (w(), T("div", uy, " Info ")) : U("", !0),
              v[7] || (v[7] = O("div", { class: "cell del" }, null, -1))
            ])) : U("", !0),
            (w(!0), T(Te, null, je(_.value, (y, W) => (w(), T("div", {
              key: W,
              class: "row inputs"
            }, [
              O("div", dy, [
                O("div", {
                  class: "id",
                  style: Je({
                    background: re.colors.partA,
                    color: re.colors.text
                  })
                }, J(W + 1), 5)
              ]),
              (w(!0), T(Te, null, je(Yi.value, (pe) => (w(), T("div", {
                key: pe.name,
                class: "cell"
              }, [
                y ? (w(), ve(ly, {
                  key: 0,
                  field: pe,
                  item: y,
                  index: W,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": re.numberFormat,
                  "stock-grain": k(c)(y),
                  "material-options": Re.value?.map((Pe) => ({ label: Pe.name, value: Pe.name })) || [],
                  "thickness-options": pe.name === "t" ? Kl(y) : [],
                  "banding-enabled": At.banding === W ? y : null,
                  onUpdate: (Pe) => Gl(y, pe.name, Pe),
                  onValidation: v[2] || (v[2] = (Pe, Xe) => ql()),
                  onOpenBanding: (Pe) => Ss("banding", y),
                  onOpenMachining: (Pe) => Wl(y),
                  onOpenFinish: (Pe) => Ss("finish", y),
                  onOpenPlaning: (Pe) => Ss("planing", y)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : U("", !0)
              ]))), 128)),
              k(fe) === "development" && na ? (w(), T("div", fy, [
                O("button", {
                  class: Ie(["c-btn", { selected: At.info === W }]),
                  style: Je(bs.value),
                  type: "button",
                  onClick: (pe) => Ss("info", y)
                }, " i ", 14, hy)
              ])) : U("", !0),
              O("div", py, [
                O("button", {
                  disabled: k(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${k(q)("actions.remove")} ${k(gu)(k(q)("woodwork.part"))}`,
                  onClick: (pe) => k(h)(y.autoId)
                }, [
                  Fe(S, { icon: ["fass", "trash"] })
                ], 8, gy)
              ]),
              Fe(k(s), {
                item: y,
                "num-columns": Ki.value
              }, null, 8, ["item", "num-columns"]),
              At.banding === W && Ae.options.length > 0 && Tn.value ? (w(), ve(js, {
                key: 1,
                shape: y,
                "shape-index": W,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Ae.keys,
                "all-options": Ae.options,
                pricing: Ae.pricing,
                labels: Ae.labels,
                locations: Ti.locations,
                "location-groups": Ti.groups,
                "user-friendly-field-map": k(qt),
                "part-columns": Ki.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": An,
                "orientation-model": re.orientationModel,
                "get-available-pricing-options": Zi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : U("", !0),
              At.finish === W && Be.options.length > 0 && Tn.value ? (w(), ve(js, {
                key: 2,
                shape: y,
                "shape-index": W,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Be.keys,
                "all-options": Be.options,
                pricing: Be.pricing,
                labels: Be.labels,
                locations: Ai.locations,
                "location-groups": Ai.groups,
                "user-friendly-field-map": k(qt),
                "part-columns": Ki.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": An,
                "orientation-model": re.orientationModel,
                "get-available-pricing-options": Zi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : U("", !0),
              At.planing === W && Ne.options.length > 0 && Tn.value && (console.log("[CheckoutCalculator] Rendering planing ExtrasInputs with location-groups:", re.extrasLocationGroups?.planing), !0) ? (w(), ve(js, {
                key: 3,
                shape: y,
                "shape-index": W,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Ne.keys,
                "all-options": Ne.options,
                pricing: Ne.pricing,
                labels: Ne.labels,
                locations: Oi.locations,
                "location-groups": Oi.groups,
                "user-friendly-field-map": k(qt),
                "part-columns": Ki.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": An,
                "orientation-model": re.orientationModel,
                "get-available-pricing-options": Zi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : U("", !0),
              At.info === W ? (w(), T("div", {
                key: 4,
                id: "shape-info",
                style: Je({ "grid-column-end": "span " + Ki.value })
              }, [
                O("div", null, J(y?.banding), 1),
                O("div", null, J(eo.value?.banding?.options || "No options"), 1)
              ], 4)) : U("", !0)
            ]))), 128))
          ], 4),
          O("div", my, [
            t.readonly ? U("", !0) : (w(), T("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${k(q)("actions.add")} ${k(q)("woodwork.part")}`,
              style: Je(bs.value),
              onClick: v[3] || (v[3] = (y) => ic())
            }, [
              Fe(S, { icon: ["fass", "plus-large"] }),
              ts(" " + J(`${k(q)("actions.add")} ${k(q)("woodwork.part")}`), 1)
            ], 12, yy)),
            O("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": k(q)("actions.calculate"),
              style: Je(bs.value),
              disabled: !k(r).inputStock.value?.length || et.value,
              onClick: v[4] || (v[4] = (y) => nc())
            }, [
              Fe(S, { icon: ["fass", "calculator"] }),
              ts(J(k(q)("actions.calculate")), 1)
            ], 12, by),
            t.readonly ? U("", !0) : (w(), T("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": k(q)("actions.clear"),
              onClick: v[5] || (v[5] = (y) => ws())
            }, [
              Fe(S, { icon: ["fass", "trash"] })
            ], 8, vy)),
            O("div", wy, J(k(l)) + J(re?.maxParts ? "/" + re.maxParts : ""), 1)
          ]),
          gs.value && !t.readonly ? (w(), ve(k(a), {
            key: 2,
            ref: "import",
            "number-format": re.numberFormat,
            "custom-fields": to.value,
            "banding-options": Ae.options,
            "banding-labels": Ae.labels,
            "finish-options": Be.options,
            "finish-labels": Be.labels,
            onImport: oc
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : U("", !0),
          ni.value ? (w(), T("div", Sy, [
            mi.value ? (w(), T("div", xy, J(mi.value), 1)) : U("", !0),
            O("pre", ky, J(Pn.value), 1)
          ])) : U("", !0),
          (re.enable.diagram ? et.value && !k(Y).complete : et.value || k(Y).complete) ? (w(), T("div", Iy, [
            Fe(Jo, {
              size: 50,
              number: k(Y).shapeCount,
              complete: k(Y).complete,
              "show-number": re.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : U("", !0),
          ls(O("div", Cy, [
            k(g)?.saw?.stockType !== "roll" ? (w(), T("div", Py, J(k(g)?.stack ? k(g)?.stack : 1), 1)) : U("", !0),
            Fe(jg, {
              "element-id": "diagram",
              "number-format": re.numberFormat,
              "decimal-places": re.decimalPlaces,
              colors: re.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [ln, re.enable.diagram && k(Y).complete]
          ]),
          re.enable.diagram && k(R).length > 1 && k(Y).complete ? (w(), ve(tg, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": k(j),
            "stock-list": k(R),
            onShowStock: k(M)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : U("", !0)
        ], 2)) : U("", !0),
        k(fe) === "development" && na ? (w(), T("div", Ty, [
          Fe(k(o), {
            data: [k(r).inputStock.value],
            paths: ["inputStock"]
          }, null, 8, ["data"]),
          Fe(k(o), {
            data: [k(r).inputShapes.value],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          Fe(k(o), {
            data: [Re.value],
            paths: ["materials"]
          }, null, 8, ["data"]),
          Fe(k(o), {
            data: [ze.value],
            paths: ["thicknesses"]
          }, null, 8, ["data"]),
          v[8] || (v[8] = O("div", null, "Result data", -1)),
          Fe(k(o), {
            data: [ht.value],
            paths: ["Result"]
          }, null, 8, ["data"])
        ])) : U("", !0)
      ], 64);
    };
  }
}), bS = /* @__PURE__ */ Tt(Ay, [["__scopeId", "data-v-764b74b2"]]), El = ue(["select", "multiselect", "range", "boolean", "search"]), Dl = ue(["asc", "desc"]), Rl = ue(["grid", "list"]), Oy = B({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: m().optional().describe("User-friendly display name"),
  description: m().optional().describe("Detailed description"),
  // Categorization
  supplier: m().optional().describe("Supplier name"),
  category: m().optional().describe("Stock category"),
  // UI metadata
  leadTime: d().int().optional().describe("Lead time in days"),
  minQuantity: d().int().positive().optional().describe("Minimum order quantity")
});
xi.merge(Oy).describe("Stock option with filtering and display metadata");
const $y = B({
  field: m().describe("Property name to filter on"),
  type: El,
  label: m().describe("Display label"),
  custom: D().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: d().optional().describe("Minimum value for range filter"),
  max: d().optional().describe("Maximum value for range filter"),
  step: d().optional().describe("Step size for range filter"),
  // Select filter options
  options: ee(B({
    label: m(),
    value: xe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: D().default(!0).describe("Whether filter is visible"),
  collapsible: D().default(!0).describe("Whether filter panel is collapsible"),
  order: d().int().optional().describe("Display order")
}), Fy = B({
  field: m().describe("Field to sort by"),
  order: Dl,
  label: m().optional().describe("Display label for sort option")
}), Ly = B({
  // Filter configuration
  availableFilters: ee($y).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ee(m()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Fy.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Rl.default("grid").describe("Default display mode"),
  itemsPerPage: d().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: D().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: D().default(!0).describe("Allow multiple stock selection"),
  maxSelection: d().int().positive().optional().describe("Maximum number of stock items to select")
}), Ey = B({
  field: m(),
  value: xe(),
  type: El
});
B({
  // Active filters
  activeFilters: ee(Ey).default([]).describe("Currently active filters"),
  // Search
  searchQuery: m().default("").describe("Current search query"),
  // Sort
  sortBy: m().default("cost").describe("Current sort field"),
  sortOrder: Dl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Rl.default("grid").describe("Current display mode"),
  currentPage: d().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ee(m()).default([]).describe("IDs of selected stock items")
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
    return (i, s) => (w(), T(Te, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (w(), T("div", {
        key: 0,
        class: "group issues",
        style: Je({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, J(e.item.issues.filter((n) => n.type === "error").flatMap((n) => k(zi)(n.message)).join(`
`)), 1)
      ], 4)) : U("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (w(), T("div", {
        key: 1,
        class: "group warnings",
        style: Je({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, J(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => k(zi)(n.message)).join(`
`)), 1)
      ], 4)) : U("", !0)
    ], 64));
  }
}), My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ry }, Symbol.toStringTag, { value: "Module" })), ct = {
  precisionFixed: Mc,
  format: Rc,
  select: st,
  selectAll: ur,
  scaleLinear: Ft,
  scaleSequential: is,
  axisTop: lr,
  axisBottom: qs,
  axisRight: cr,
  axisLeft: zs,
  symbol: Dc,
  path: Ec,
  arc: Lc,
  symbolTriangle: Fc,
  symbolSquare: $c
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
  xScale = ct.scaleLinear();
  yScale = ct.scaleLinear();
  yScaleFlipped = ct.scaleLinear();
  measurementScale = ct.scaleLinear();
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
      if (this.el = ct.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = ct.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = ct.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (a + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${a})`).attr("class", "axis x"), this.xAxis.call(
      ct.axisTop(this.xScale).ticks(10).tickSize(-this.h + (a + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && ct.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      ct.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, r, l) {
      (r === 0 || r === l.length - 1) && ct.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, a = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", a).attr("width", this.w - (i + n)).attr("height", this.h - (a + s)).style("fill", "url(#stripes)");
    const o = ct.path(), r = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const f = this.shape.machining.getCorner(u);
      f && f.type ? (r.push(f.size ? Z({ v: f.size ?? 0, o: this }) : 0), l.push(f.type)) : (r.push(0), l.push(null));
    });
    const c = (u, f, h, p, I) => {
      l[u] === "radius" ? o.arcTo(
        this.xScale(f),
        this.getYScale()(h),
        this.xScale(p),
        this.getYScale()(I),
        this.measurementScale(r[u])
      ) : l[u] === "bevel" ? o.lineTo(this.xScale(p), this.getYScale()(I)) : (o.lineTo(this.xScale(f), this.getYScale()(h)), o.lineTo(this.xScale(p), this.getYScale()(I)));
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
    const r = ct.path();
    [0, 1, 2, 3].forEach((l) => {
      const c = this.shape.machining.getCorner(l);
      if (!c?.type) return;
      let u, f, h;
      switch (l) {
        case 0:
          if (!Se(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(Z({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(Z({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!Se(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - Z({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, f = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(Z({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!Se(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - Z({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - Z({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!Se(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(Z({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - Z({ v: c.size ?? 0, o: this })) + i
          };
          break;
        default:
          return;
      }
      if (r.moveTo(u.x, u.y), c.type === "radius")
        switch (r.arcTo(
          f.x,
          f.y,
          h.x,
          h.y,
          this.measurementScale(c.size ?? 0)
        ), l) {
          case 0:
          case 2:
            r.lineTo(h.x + i, h.y);
            break;
          case 1:
          case 3:
            r.lineTo(h.x, h.y - (this.currentSide === 0 ? i : -1));
            break;
        }
      else c.type === "bevel" && r.lineTo(h.x, h.y);
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
        ct.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, o, r) {
        (o === 0 || o === r.length - 1) && ct.select(this).select("line").style("display", "none");
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
  props: /* @__PURE__ */ ho({
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
  emits: /* @__PURE__ */ ho(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = Ri(() => Promise.resolve().then(() => Qa)), s = t, n = e, a = "production", o = te(), r = Q(() => Ll(K.value)), l = Q(() => {
      if (!f.value?.length) return 0;
      if (X.value === "banding") return 1;
      let oe = Object.values(u.value).filter((ce) => ce.enabled).length;
      return oe += 2, oe;
    }), c = Q(() => {
      if (!f.value.length || X.value === "banding") return;
      const oe = {
        id: "34px",
        del: "30px"
      }, ce = [];
      return f.value.forEach((ke) => {
        const re = u.value[ke];
        re.enabled && ce.push(re.w ?? "1fr");
      }), ce.unshift(oe.id), ce.push(oe.del), ce.join(" ");
    }), u = Q(() => !X.value || X.value === "banding" ? null : et[X.value]), f = Q(() => !X.value || X.value === "banding" ? [] : Object.keys(et[X.value]).filter((oe) => et[X.value][oe].enabled)), h = Q(() => X.value ? $() : []), p = Q(() => {
      const oe = K.value?.machining?.corners?.map((ce) => ce?.isPresent?.() ? ce.getCorner() : null)?.filter((ce) => ce) ?? [];
      return [...Ci, ...oe];
    }), I = (oe = !0) => {
      oe ? Ut.value = oe : yt(() => Ut.value = !1);
    }, E = () => {
      Y(), ae(), P(), _();
    }, L = (oe) => {
      if (X.value === "corners")
        switch (oe) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return oe;
        }
      return oe + 1;
    }, C = () => X.value !== "banding", A = (oe, ce = null) => {
      if (!oe?.length) return [];
      let ke = "None";
      ce === "depth" && (ke = "Through");
      const re = [{ label: ke, value: null }];
      return oe.forEach((Ee) => {
        const Ve = Ee.toString().charAt(0).toUpperCase() + Ee.toString().slice(1);
        re.push({ label: Ve, value: Ee });
      }), re;
    }, $ = () => {
      if (!X.value) return [];
      if (X.value === "banding") return [];
      const oe = K.value.machining[X.value];
      return Array.isArray(oe) ? oe : [oe];
    };
    let x = null;
    const V = () => {
      if (!K.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), x = new _y({
        HTMLElement: o.value,
        shape: K.value,
        vueComponent: null
      }), x.init(), x.updateSize(), ii.value = !0;
    }, R = mc(() => {
      ii.value && x && x.updateSize();
    }, 10);
    nr(o, () => {
      R();
    });
    const F = () => {
      ht.value = ht.value === 0 ? 1 : 0, x.flip();
    }, H = () => {
      switch (X.value) {
        case "holes":
          j();
          break;
        case "hingeHoles":
          g();
          break;
        case "corners":
          M();
          break;
      }
    }, j = () => {
      K.value.machining.addHole({
        x: Z({ v: K.value.longSide }) / 2,
        y: Z({ v: K.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? Z({ v: K.value.t }) ?? 0,
        face: ht.value
      }), x.createHoles();
    }, g = () => {
      K.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: ht.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), x.createHingeHoles();
    }, M = () => {
      const oe = s.options.corners.types?.[0] || "radius", ce = s.options.corners.minValue || 5;
      for (let ke = 0; ke < 4; ke++)
        K.value.machining.setCorner({
          index: ke,
          type: oe,
          size: ce
        });
      x.createCorners();
    }, Y = () => {
      K.value.machining.holes.length = 0;
    }, ae = () => {
      K.value.machining.hingeHoles.length = 0;
    }, P = () => {
      K.value.machining.corners.forEach((oe) => {
        oe.size = null, oe.type = null;
      }), K.value.banding.sides.a = !1, K.value.banding.sides.b = !1, K.value.banding.sides.c = !1, K.value.banding.sides.d = !1;
    }, _ = () => {
      K.value.banding = {
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
    }, z = (oe) => {
      switch (X.value) {
        case "holes":
          return K.value.machining.holes.splice(oe, 1);
        case "hingeHoles":
          return K.value.machining.hingeHoles.splice(oe, 1);
        case "corners":
          K.value.machining.corners[oe].size = null, K.value.machining.corners[oe].type = null;
          return;
      }
    }, N = () => {
      switch (X.value) {
        case "holes":
          return Y();
        case "hingeHoles":
          return ae();
        case "corners":
          return P();
      }
    }, G = () => {
      if (qe.value = [], !!s.options.banding.enabled) {
        I();
        for (const oe in K.value.banding)
          K.value.banding[oe] ? s.options.banding.enableTypes && s.options.banding.types?.length && (K.value.banding[oe] || qe.value.push({
            index: oe,
            message: "Please select a type"
          })) : K.value.banding[oe] = "";
        I(!1);
      }
    }, le = (oe) => {
      const ce = qe.value.filter((ke) => ke.index === oe);
      return ce.length ? ce.map((ke) => ke.message) : [];
    }, fe = (oe) => {
      const ce = qe.value.filter((re) => re.index === oe && re?.fields), ke = ce.flatMap((re) => re.fields);
      return ce.length ? ke : [];
    }, de = (oe, ce) => {
      const ke = fe(oe);
      return ke?.length ? ke.includes(ce) : !1;
    }, ye = () => n("close"), Oe = (oe) => oe && typeof oe.disabled == "function" ? oe.disabled : !1, K = gc(t, "inputShape");
    if (!K.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const ot = te(!1), ii = te(!1), Ut = te(!1), ht = te(0), X = te(null), qe = te([]), et = mt({
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
          enabled: s.options.holes.enableDepth && typeof K.value.t < "u" && Z({ v: K.value.t }) > 0,
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
          enabled: s.options.holes.enableDepth && typeof K.value.t < "u" && Z({ v: K.value.t }) > 0,
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
          min: () => typeof s.options.corners.minValue < "u" ? Z({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? Z({ v: s.options.corners.maxValue, o: s.options }) : Z({ v: K.value.shortSide, o: s.options }) / 2
        }
      }
    }), si = mt({
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
    }), gs = (oe) => {
      oe.target === oe.currentTarget && ye();
    }, Yt = () => !(!K?.value?.machining || !ot.value || Ut.value);
    return Me(() => K.value?.autoId, () => {
      Yt() && V();
    }), Me(() => K.value?.id, () => {
      Yt() && V();
    }), Me(X, (oe) => {
      if (!Yt()) return;
      if (oe === "banding") {
        I(), G(), I(!1);
        return;
      }
      if (!oe) {
        qe.value = [];
        return;
      }
      I();
      const ce = K.value.machining.validate(
        K.value,
        oe,
        si?.[oe]
      );
      qe.value = ce?.map((ke, re) => ({
        index: re,
        message: ke.message || "Validation error",
        fields: ke.field || []
      })) || [], I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.machining?.holes, () => {
      if (!Yt()) return;
      I();
      const oe = K.value.machining.validate(
        K.value,
        "holes",
        si?.holes
      );
      qe.value = oe?.map((ce, ke) => ({
        index: ke,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], x.createHoles(), I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.machining?.hingeHoles, () => {
      if (!Yt()) return;
      I();
      const oe = K.value.machining.validate(
        K.value,
        "hingeHoles",
        si?.hingeHoles
      );
      qe.value = oe?.map((ce, ke) => ({
        index: ke,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], x.createHingeHoles(), I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.machining?.corners, () => {
      if (!Yt()) return;
      I();
      const oe = K.value.machining.validate(
        K.value,
        "corners",
        si?.corners
      );
      qe.value = oe?.map((ce, ke) => ({
        index: ke,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], K.value.machining.validate(K.value, "holes"), K.value.machining.validate(K.value, "hingeHoles"), x.createShape(), x.createHoles(), x.createHingeHoles();
      for (const ce of K.value.machining.corners)
        K.value.banding && ce?.getCorner && (K.value.banding[ce.getCorner()] = "");
      x.createBanding(), I(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.banding, () => {
      Yt() && (G(), x.createBanding());
    }, { deep: !0, immediate: !0 }), Wt(() => {
      if (document.body.style.overflow = "hidden", !K.value || !K.value.l || !K.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      yt(() => V()), ot.value = !0;
    }), cs(() => document.body.style.overflow = ""), (oe, ce) => {
      const ke = pi("FontAwesomeIcon");
      return w(), ve(La, { to: "body" }, [
        O("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: gs
        }, [
          O("div", By, [
            O("div", jy, [
              k(a) === "development" && eb ? (w(), T("div", Vy, [
                Fe(k(i), {
                  data: [K.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : U("", !0),
              O("button", {
                class: "c-btn close",
                type: "button",
                onClick: ce[0] || (ce[0] = (re) => ye())
              }, "×"),
              K.value?.name ? (w(), T("div", Ny, J(K.value.name), 1)) : U("", !0),
              O("div", Gy, J(K.value?.l) + " x " + J(K.value?.w) + " " + J(K.value?.t ? "x " + K.value?.t : null), 1),
              t.options.faces.enabled ? (w(), T("div", qy, [
                O("div", {
                  ref: "sides",
                  class: Ie(["sides", { flipped: ht.value === 1 }]),
                  onClick: F
                }, [...ce[6] || (ce[6] = [
                  O("div", { class: "side-a" }, " A ", -1),
                  O("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                ce[7] || (ce[7] = O("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : U("", !0),
              r.value ? (w(), T("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: E
              }, " Delete all machining ")) : U("", !0),
              O("div", zy, [
                t.options.holes.enabled ? (w(), T("div", {
                  key: 0,
                  class: Ie({ selected: X.value === "holes" }),
                  onClick: ce[1] || (ce[1] = (re) => X.value = "holes")
                }, " Holes ", 2)) : U("", !0),
                t.options.hingeHoles.enabled ? (w(), T("div", {
                  key: 1,
                  class: Ie({ selected: X.value === "hingeHoles" }),
                  onClick: ce[2] || (ce[2] = (re) => X.value = "hingeHoles")
                }, " Hinge holes ", 2)) : U("", !0),
                t.options.corners.enabled ? (w(), T("div", {
                  key: 2,
                  class: Ie({ selected: X.value === "corners" }),
                  onClick: ce[3] || (ce[3] = (re) => X.value = "corners")
                }, " Corners ", 2)) : U("", !0),
                t.options.banding.enabled ? (w(), T("div", {
                  key: 3,
                  class: Ie({ selected: X.value === "banding" }),
                  onClick: ce[4] || (ce[4] = (re) => X.value = "banding")
                }, " Banding ", 2)) : U("", !0)
              ]),
              X.value === "holes" || X.value === "hingeHoles" || X.value && X.value !== "banding" ? (w(), T("div", Wy, [
                X.value === "holes" || X.value === "hingeHoles" || X.value === "corners" ? (w(), T("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: H
                }, " Create ")) : U("", !0),
                X.value && X.value !== "banding" ? (w(), T("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: N
                }, " Delete all ")) : U("", !0)
              ])) : U("", !0),
              O("div", Hy, [
                X.value === "banding" && K.value ? (w(), ve(js, {
                  key: 0,
                  shape: K.value,
                  "onUpdate:shape": ce[5] || (ce[5] = (re) => K.value = re),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": p.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": k(qt),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : U("", !0)
              ]),
              X.value !== "banding" && h.value.length ? (w(), T("div", {
                key: 5,
                class: Ie(["grid-table", X.value]),
                style: Je({ "grid-template-columns": c.value })
              }, [
                O("div", Uy, [
                  C() ? (w(), T("div", Yy)) : U("", !0),
                  (w(!0), T(Te, null, je(u.value, (re, Ee) => ls((w(), T("div", {
                    key: Ee,
                    class: "cell"
                  }, J(re.label ?? Ee), 1)), [
                    [ln, re.enabled]
                  ])), 128)),
                  ce[8] || (ce[8] = O("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), T(Te, null, je(h.value, (re, Ee) => (w(), T("div", {
                  key: Ee,
                  class: "row"
                }, [
                  C() ? (w(), T("div", Ky, [
                    O("div", Zy, J(L(Ee)), 1)
                  ])) : U("", !0),
                  (w(!0), T(Te, null, je(f.value, (Ve, ni) => (w(), T("div", {
                    key: ni,
                    class: "cell"
                  }, [
                    Fe(ki, {
                      type: u.value[Ve].type,
                      id: Ve + "-" + ni,
                      warning: de(Ee, Ve),
                      "enable-label": !1,
                      placeholder: u.value[Ve].label ?? Ve,
                      disabled: Oe(u.value[Ve]),
                      value: k(ui)(re, Ve),
                      output: u.value[Ve].output,
                      options: u.value[Ve].options,
                      "onUpdate:value": (mi) => k(Ji)(re, Ve, mi)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", Xy, [
                    O("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (Ve) => z(Ee)
                    }, [
                      Fe(ke, { icon: ["fass", "trash"] })
                    ], 8, Jy)
                  ]),
                  (w(!0), T(Te, null, je(le(Ee), (Ve, ni) => (w(), T("div", {
                    key: ni,
                    class: "group validation",
                    style: Je({ "grid-column-end": "span " + l.value })
                  }, J(Ve), 5))), 128))
                ]))), 128))
              ], 6)) : X.value ? U("", !0) : (w(), T("div", Qy, "Please select from the menu above"))
            ]),
            O("div", {
              id: "machining-diagram",
              class: Ie(["diagram", { flipped: ht.value === 1 }]),
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
      files: yc([])
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
  return w(), T("div", {
    id: "drop",
    class: Ie({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = ar((...o) => a.onDrop && a.onDrop(...o), ["prevent"]))
  }, [
    O("div", null, J(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const ab = /* @__PURE__ */ Tt(sb, [["render", nb]]), ob = { id: "import-file" }, rb = /* @__PURE__ */ De({
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
    const i = t, s = e, n = te([]), a = te([]), o = te([]), r = te([]), l = te({}), c = te([]), u = te(!1), f = te(null), h = te(null), p = [
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
    ], I = Q(() => {
      const P = {};
      return n.value.forEach((_, z) => {
        P[z] = {};
        for (const [N, G] of Object.entries(_)) {
          if (!p.includes(N)) continue;
          const le = C(N, G);
          (le === !0 || le === !1) && (P[z][N] = le);
        }
      }), P;
    }), E = Q(() => i.customFields.map((P) => P.label)), L = (P, _) => {
      if (_) {
        const z = Object.keys(_), N = [[]];
        z.forEach((le) => {
          const fe = _[le], de = [];
          N.forEach((ye) => {
            fe.forEach((Oe) => de.push([...ye, Oe]));
          }), N.splice(0, N.length, ...de);
        });
        const G = /* @__PURE__ */ new Set();
        N.forEach((le) => G.add(le.join("|").toLowerCase())), P === "banding" ? f.value = G : h.value = G;
      }
    }, C = (P, _) => {
      if (_ === "???") return !0;
      function z(G) {
        return G ? (G = G?.trim()?.toLowerCase(), G === "l" || G === "w") : !0;
      }
      const N = {
        banding: (G) => A(G, f.value, "banding"),
        finish: (G) => A(G, h.value, "finish"),
        orientationLock: z
      };
      return P in N ? N[P](_) : null;
    }, A = (P, _, z) => {
      if (P = g(P), !P) return !0;
      const N = P.split(","), G = N.every((le) => !le || _.has(le.toLowerCase()));
      if (!G) {
        const le = N.filter((fe) => !_.has(fe.toLowerCase()));
        console.log(`Valid ${z} choices...`), console.table(Array.from(_)), console.log(`The following ${z} choices are invalid`, le);
      }
      return G;
    }, $ = (P, _) => {
      const z = {
        bandingOptions: (N) => x(N, i.bandingOptions, i.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (N) => x(N, i.finishOptions, i.finishLabels, ["a", "b"])
      };
      return P in z ? z[P](_) : null;
    }, x = (P, _, z, N) => {
      if (P = g(P), !P)
        return N.reduce((fe, de) => ({ ...fe, [de]: {} }), {});
      const G = P.split(",").map((fe) => fe.toLowerCase()), le = {};
      return N.forEach((fe, de) => {
        le[fe] = {}, Object.keys(_).forEach((ye, Oe) => {
          le[fe][z[Oe]] = G[de]?.split("|")[Oe] || "";
        });
      }), le;
    }, V = () => n.value.map((P, _) => ({
      l: i.numberFormat === "decimal" ? Rs(P.l) : P.l,
      w: i.numberFormat === "decimal" ? Rs(P.w) : P.w,
      t: i.numberFormat === "decimal" ? Rs(P.t) : P.t,
      q: P.q,
      orientationLock: P.orientationLock,
      name: P.name,
      material: P.material,
      bandingOptions: I.value[_].banding ? $("bandingOptions", P.banding) : null,
      finishOptions: I.value[_].finish ? $("finishOptions", P.finish) : null,
      numberFormat: i.numberFormat,
      customData: Y(P)
    })), R = (P) => {
      const _ = P?.[0]?.data;
      _ && iu.parse(_, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (z) => F(z),
        error: () => s("error")
      });
    }, F = (P) => {
      a.value = P.data.filter((_) => _.some((z) => z)), o.value = a.value[0], l.value = {};
      for (let _ = o.value.length; _--; ) {
        const z = o.value[_], N = H(z);
        N ? l.value[_] = N : (l.value[_] = null, E.value.includes(z) && (l.value[_] = "customData." + i.customFields.find((G) => G.label === z).id));
      }
      j(), a.value.shift(), M(), ae();
    }, H = (P) => {
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
      }, z = Object.entries(_).reduce(
        (N, [G, le]) => (le.some((fe) => P && P.toLowerCase() === fe) && N.push(G), N),
        []
      );
      return z.length > 1 ? null : z[0];
    }, j = () => {
      u.value = !1, r.value = Object.values(l.value).map((_) => !_ || _ === "N" ? null : p.includes(_) ? _ : (u.value = !0, null));
      const P = r.value.filter((_, z) => r.value.indexOf(_) !== z);
      c.value = P.map((_) => r.value.reduce(
        (z, N, G) => (N && N === _ && z.push(G), z),
        []
      ));
    }, g = (P) => P && P.replace(/\s*,\s*/g, ","), M = () => {
      const P = a.value.map((_) => {
        const z = {};
        return o.value.forEach((N, G) => {
          if (c.value.flat().includes(G))
            return z[l.value[G]] = "???";
          z[l.value[G]] = _[G];
        }), z;
      });
      n.value = P;
    }, Y = (P) => {
      let _ = {};
      for (let z in P)
        if (z.startsWith("customData.")) {
          let N = z.slice(11);
          _[N] = P[z];
        }
      return _;
    }, ae = () => {
      const P = V();
      P?.length && s("import", P);
    };
    return Wt(() => {
      L("banding", i.bandingOptions), L("finish", i.finishOptions);
    }), (P, _) => (w(), T("div", ob, [
      Fe(ab, {
        label: k(q)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: R
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
  const o = pi("ObjectViewer", !0);
  return w(), T("div", ub, [
    (w(!0), T(Te, null, je(i.data, (r, l) => (w(), T("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        O("div", fb, J(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", hb, J(i.paths[l] || l), 1)
      ], 8, db),
      n.expanded[l] ? (w(), T("div", pb, [
        (w(!0), T(Te, null, je(r, (c, u) => (w(), T("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (w(), T("div", gb, J(u) + ": ", 1)) : U("", !0),
          O("div", {
            class: Ie(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (w(), ve(o, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (w(), T("span", mb, "null")) : (w(), T("span", yb, J(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : U("", !0)
    ]))), 128))
  ]);
}
const vb = /* @__PURE__ */ Tt(cb, [["render", bb]]), Qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: vb }, Symbol.toStringTag, { value: "Module" })), wb = { class: "stock-filter-search" }, Sb = { class: "search-input-wrapper" }, xb = ["placeholder"], kb = /* @__PURE__ */ De({
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
    return (l, c) => (w(), T("div", wb, [
      O("div", Sb, [
        ls(O("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: o
        }, null, 40, xb), [
          [bc, n.value]
        ]),
        n.value ? (w(), T("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: r
        }, " × ")) : U("", !0)
      ])
    ]));
  }
}), Ib = /* @__PURE__ */ Tt(kb, [["__scopeId", "data-v-45127fff"]]), Cb = { class: "filter-panel-header" }, Pb = { class: "filter-panel-title" }, Tb = { class: "filter-panel-content" }, Ab = {
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
    const i = t, s = e, n = te(!0), a = te({}), o = Q(() => i.activeFilters.length);
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
        (V) => typeof V == "object" && V !== null && "hex" in V && V.hex === $.hex
      ) : x.includes($) : A === "color" && typeof $ == "object" && $ !== null && "hex" in $ ? typeof x == "object" && x !== null && "hex" in x && x.hex === $.hex : x === $;
    }
    function h(A, $) {
      const V = $.target.value;
      V === "" ? s("remove-filter", A) : s("apply-filter", A, V, "select");
    }
    function p(A, $, x) {
      const V = x.target, R = u(A) || [], F = Array.isArray(R) ? [...R] : [];
      if (V.checked)
        F.includes($) || F.push($);
      else {
        const H = F.indexOf($);
        H !== -1 && F.splice(H, 1);
      }
      F.length === 0 ? s("remove-filter", A) : s("apply-filter", A, F, "multiselect");
    }
    function I(A, $) {
      if (a.value[A]?.[$] !== void 0)
        return a.value[A][$];
      const x = i.activeFilters.find((V) => V.field === A);
      if (x?.value && typeof x.value == "object")
        return x.value[$];
    }
    function E(A, $, x) {
      const V = x.target, R = V.value ? Number(V.value) : void 0;
      a.value[A] || (a.value[A] = {}), a.value[A][$] = R;
      const F = a.value[A].min, H = a.value[A].max;
      F !== void 0 || H !== void 0 ? s("apply-filter", A, { min: F, max: H }, "range") : s("remove-filter", A);
    }
    function L(A, $) {
      $.target.checked ? s("apply-filter", A, !0, "boolean") : s("remove-filter", A);
    }
    function C() {
      a.value = {}, s("clear-filters");
    }
    return (A, $) => (w(), T("div", {
      class: Ie(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      O("div", Cb, [
        O("h3", Pb, J(k(q)("stockFilter.filters")), 1),
        O("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: r
        }, J(n.value ? "−" : "+"), 1)
      ]),
      Fe(vc, { name: "filter-panel-content" }, {
        default: Ii(() => [
          ls(O("div", Tb, [
            o.value > 0 ? (w(), T("div", Ab, [
              O("span", Ob, J(k(q)("stockFilter.active_filters", [o.value])), 1),
              O("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: C
              }, J(k(q)("stockFilter.clear_all")), 1)
            ])) : U("", !0),
            O("div", $b, [
              (w(!0), T(Te, null, je(t.filterConfigs, (x) => (w(), T("div", {
                key: x.field,
                class: "filter-group"
              }, [
                O("div", Fb, [
                  O("label", Lb, J(l(x)), 1)
                ]),
                O("div", Eb, [
                  x.type === "select" || x.type === "multiselect" ? (w(), T("div", Db, [
                    x.type === "multiselect" ? (w(!0), T(Te, { key: 0 }, je(c(x), (V) => (w(), T("label", {
                      key: V.value,
                      class: "filter-checkbox"
                    }, [
                      O("input", {
                        checked: f(x.field, V.value),
                        type: "checkbox",
                        onChange: (R) => p(x.field, V.value, R)
                      }, null, 40, Rb),
                      O("span", null, J(V.label), 1)
                    ]))), 128)) : (w(), T("select", {
                      key: 1,
                      value: u(x.field),
                      class: "filter-select-input",
                      onChange: (V) => h(x.field, V)
                    }, [
                      O("option", _b, J(k(q)("stockFilter.all")), 1),
                      (w(!0), T(Te, null, je(c(x), (V) => (w(), T("option", {
                        key: V.value,
                        value: V.value
                      }, J(V.label), 9, Bb))), 128))
                    ], 40, Mb))
                  ])) : x.type === "range" ? (w(), T("div", jb, [
                    O("div", Vb, [
                      O("input", {
                        value: I(x.field, "min"),
                        min: x.min,
                        max: x.max,
                        step: x.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (V) => E(x.field, "min", V)
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
                        onInput: (V) => E(x.field, "max", V)
                      }, null, 40, Gb)
                    ])
                  ])) : x.type === "boolean" ? (w(), T("div", qb, [
                    O("label", zb, [
                      O("input", {
                        checked: u(x.field) === !0,
                        type: "checkbox",
                        onChange: (V) => L(x.field, V)
                      }, null, 40, Wb),
                      O("span", null, J(x.label), 1)
                    ])
                  ])) : U("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [ln, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Ub = /* @__PURE__ */ Tt(Hb, [["__scopeId", "data-v-096696f3"]]), Yb = { class: "stock-filter-sort" }, Kb = { class: "sort-controls" }, Zb = { class: "sort-label" }, Xb = ["value"], Jb = ["value"], Qb = ["title"], ev = {
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
    return (l, c) => (w(), T("div", Yb, [
      O("div", Kb, [
        O("label", Zb, J(k(q)("stockFilter.sort_by")) + ":", 1),
        O("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: o
        }, [
          (w(!0), T(Te, null, je(k(n), (u) => (w(), T("option", {
            key: u.value,
            value: u.value
          }, J(u.label), 9, Jb))), 128))
        ], 40, Xb),
        O("button", {
          type: "button",
          class: Ie(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? k(q)("options.by_dimensions") : k(q)("options.by_dimensions"),
          onClick: r
        }, [
          (w(), T("svg", ev, [
            t.sortOrder === "asc" ? (w(), T("path", tv)) : (w(), T("path", iv))
          ]))
        ], 10, Qb)
      ])
    ]));
  }
}), nv = /* @__PURE__ */ Tt(sv, [["__scopeId", "data-v-bb32c593"]]), av = { class: "stock-filter-results" }, ov = { class: "results-header" }, rv = { class: "results-info" }, lv = { class: "results-count" }, cv = { class: "results-controls" }, uv = { class: "display-mode-toggle" }, dv = ["title"], fv = ["title"], hv = {
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
    const e = t, i = Q(() => {
      const s = [], a = Math.floor(2.5);
      let o = Math.max(1, e.currentPage - a), r = Math.min(e.totalPages, o + 5 - 1);
      r === e.totalPages && (o = Math.max(1, r - 5 + 1));
      for (let l = o; l <= r; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (w(), T("div", av, [
      O("div", ov, [
        O("div", rv, [
          O("span", lv, J(t.totalResults) + " " + J(t.totalResults === 1 ? k(q)("stockFilter.result_one") : k(q)("stockFilter.result_other")), 1)
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
      t.loading ? (w(), T("div", hv, [
        n[7] || (n[7] = O("div", { class: "spinner" }, null, -1)),
        O("p", null, J(k(q)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (w(), T("div", pv, [
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
        O("p", gv, J(k(q)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (w(), T("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, J(k(q)("stockFilter.clear_filters")), 1)) : U("", !0)
      ])) : (w(), T("div", {
        key: 2,
        class: Ie(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Gs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (w(), T("div", mv, [
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, J(k(q)("pagination.previous")), 9, yv),
        O("div", bv, [
          (w(!0), T(Te, null, je(i.value, (a) => (w(), T("button", {
            key: a,
            type: "button",
            class: Ie(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (o) => s.$emit("go-to-page", a)
          }, J(a), 11, vv))), 128))
        ]),
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, J(k(q)("pagination.next")), 9, wv)
      ])) : U("", !0)
    ]));
  }
}), xv = /* @__PURE__ */ Tt(Sv, [["__scopeId", "data-v-702dc044"]]), kv = {
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
    const i = t, s = e, n = Q(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), a = Q(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), o = Q(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), r = Q(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": l(i.buttonColor, -8)
    }));
    function l(u, f) {
      const h = u.replace("#", ""), p = parseInt(h, 16), I = Math.round(2.55 * f), E = (p >> 16) + I, L = (p >> 8 & 255) + I, C = (p & 255) + I;
      return `#${(16777216 + (E < 255 ? E < 1 ? 0 : E : 255) * 65536 + (L < 255 ? L < 1 ? 0 : L : 255) * 256 + (C < 255 ? C < 1 ? 0 : C : 255)).toString(16).slice(1)}`;
    }
    function c() {
      s("toggle-selection", i.stock);
    }
    return (u, f) => (w(), T("div", {
      class: Ie(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !t.stock.available
      }])
    }, [
      t.stock.imageUrl ? (w(), T("div", kv, [
        O("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, Iv)
      ])) : U("", !0),
      O("div", Cv, [
        O("h3", Pv, J(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        O("div", Tv, [
          O("div", Av, [
            O("span", Ov, J(k(q)("woodwork.material")) + ":", 1),
            O("span", $v, J(t.stock.material || k(q)("general.na")), 1)
          ]),
          O("div", Fv, [
            O("span", Lv, J(k(q)("stockFilter.dimensions")) + ":", 1),
            O("span", Ev, J(t.stock.l) + " × " + J(t.stock.w) + J(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (w(), T("div", Dv, [
            O("span", Rv, J(k(q)("fields.color")) + ":", 1),
            O("span", Mv, [
              O("span", {
                class: "color-swatch",
                style: Je({ backgroundColor: a.value })
              }, null, 4),
              ts(" " + J(o.value), 1)
            ])
          ])) : U("", !0),
          t.stock.weight ? (w(), T("div", _v, [
            O("span", Bv, J(k(q)("fields.weight")) + ":", 1),
            O("span", jv, J(t.stock.weight) + " kg", 1)
          ])) : U("", !0)
        ]),
        t.stock.description ? (w(), T("div", Vv, J(t.stock.description), 1)) : U("", !0),
        O("div", Nv, [
          t.stock.cost ? (w(), T("div", Gv, [
            O("span", qv, J(k(q)("stockFilter.price")) + ":", 1),
            O("span", zv, J(n.value), 1)
          ])) : U("", !0),
          O("button", {
            type: "button",
            class: Ie(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: Je(r.value),
            disabled: !t.stock.available,
            onClick: c
          }, J(t.isSelected ? k(q)("stockFilter.remove") : t.stock.available ? k(q)("stockFilter.select") : k(q)("stockFilter.unavailable")), 15, Wv)
        ]),
        t.stock.leadTime ? (w(), T("div", Hv, J(k(q)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : U("", !0)
      ])
    ], 2));
  }
}), Yv = /* @__PURE__ */ Tt(Uv, [["__scopeId", "data-v-1ce32550"]]), Kv = { class: "stock-filter" }, Zv = /* @__PURE__ */ De({
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
      displayMode: h,
      currentPage: p,
      filteredStock: I,
      paginatedStock: E,
      selectedStock: L,
      totalPages: C,
      applyFilter: A,
      removeFilter: $,
      clearFilters: x,
      goToPage: V,
      toggleStockSelection: R,
      isStockSelected: F,
      clearSelection: H,
      createInputStock: j,
      getUniqueValues: g,
      getFieldRange: M
    } = Oc({
      stockOptions: a,
      config: o,
      numberFormat: r
    }), Y = Q(() => s.config.availableFilters.filter((_) => {
      const z = g(_.field);
      return z.length > 0 && z.some((N) => N != null);
    }));
    Q(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": ae(s.colors.button, -8)
    }));
    function ae(_, z) {
      const N = _.replace("#", ""), G = parseInt(N, 16), le = Math.round(2.55 * z), fe = (G >> 16) + le, de = (G >> 8 & 255) + le, ye = (G & 255) + le;
      return `#${(16777216 + (fe < 255 ? fe < 1 ? 0 : fe : 255) * 65536 + (de < 255 ? de < 1 ? 0 : de : 255) * 256 + (ye < 255 ? ye < 1 ? 0 : ye : 255)).toString(16).slice(1)}`;
    }
    function P(_) {
      const z = F(_);
      if (R(_), z) {
        const N = j(_);
        n("stock-removed", N);
      } else {
        const N = j(_);
        n("stock-added", [N]);
      }
    }
    return e({
      applyFilter: A,
      removeFilter: $,
      clearFilters: x,
      clearSelection: H,
      selectedStock: L,
      filteredStock: I,
      getUniqueValues: g,
      getFieldRange: M
    }), (_, z) => (w(), T("div", Kv, [
      t.config.enableSearch ? (w(), ve(Ib, {
        key: 0,
        modelValue: k(c),
        "onUpdate:modelValue": z[0] || (z[0] = (N) => Ln(c) ? c.value = N : null)
      }, null, 8, ["modelValue"])) : U("", !0),
      Y.value.length > 0 ? (w(), ve(Ub, {
        key: 1,
        "filter-configs": Y.value,
        "active-filters": k(l),
        "get-unique-values": k(g),
        "get-field-range": k(M),
        onApplyFilter: k(A),
        onRemoveFilter: k($),
        onClearFilters: k(x)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : U("", !0),
      t.config.sortOptions.length > 0 ? (w(), ve(nv, {
        key: 2,
        "sort-by": k(u),
        "onUpdate:sortBy": z[1] || (z[1] = (N) => Ln(u) ? u.value = N : null),
        "sort-order": k(f),
        "onUpdate:sortOrder": z[2] || (z[2] = (N) => Ln(f) ? f.value = N : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : U("", !0),
      Fe(xv, {
        "total-results": k(E).length,
        "display-mode": k(h),
        loading: t.loading,
        "has-active-filters": k(l).length > 0,
        "current-page": k(p),
        "total-pages": k(C),
        "onUpdate:displayMode": z[3] || (z[3] = (N) => h.value = N),
        onClearFilters: k(x),
        onGoToPage: k(V)
      }, {
        default: Ii(() => [
          (w(!0), T(Te, null, je(k(E), (N) => (w(), ve(Yv, {
            key: N.id || `${N.material}-${N.l}-${N.w}-${N.t}`,
            stock: N,
            "is-selected": k(F)(N),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            onToggleSelection: P
          }, null, 8, ["stock", "is-selected", "format-price", "button-color", "button-text-color", "locale"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
}), Xv = /* @__PURE__ */ Tt(Zv, [["__scopeId", "data-v-7b1c1d8d"]]), vS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Xv }, Symbol.toStringTag, { value: "Module" }));
class ci extends Error {
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
      if (i === 0) throw new ci("Division by zero", "DIVISION_BY_ZERO");
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
        const E = n[c];
        if (E)
          return u === "q" ? E.q : E[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (o.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const f = e.nodes.get(l);
      if (typeof f.formula == "number")
        return a.set(l, f.formula), f.formula;
      o.add(l);
      const h = e.edges.get(l) || /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
      for (const E of h)
        if (E.startsWith("input.")) {
          const L = E.split(".")[1];
          p.set(E, s[L]);
        } else
          p.set(E, r(E));
      const I = this.evaluateFormulaWithDeps(f.formula, p, s);
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
    if (!this.spec?.inputs) throw new ci("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new ci(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new ci(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new ci("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new ci(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const a = i[s], o = this.spec.inputs[a];
      if (n.value === null || n.value === void 0)
        throw new ci(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < o.min || n.value > o.max)
        throw new ci(`Field ${s} value ${n.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
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
    const i = Ri(() => Promise.resolve().then(() => Qa)), s = t, n = e, a = wc("calculator"), o = Q(() => a()), r = te("production");
    let l = null;
    const c = te(null), u = te([]), f = te(!1), h = te(""), p = Q(() => {
      if (!f.value || !u.value.length || u.value.every((F) => F.value === null)) return null;
      const R = $();
      return yt(() => n("panel-result", R)), R;
    }), I = Q(() => {
      if (!o.value || !f.value || !u.value.length || u.value.every((F) => F.value === null)) return;
      const R = x();
      return yt(() => n("hardware-result", R, E.value)), R;
    }), E = Q(() => {
      if (I.value)
        return Object.values(I.value).reduce((R, F) => R + F.totalCost, 0);
    });
    Me(p, (R) => {
      if (!f.value || !R || !o.value || !o.value?.inputShapes) return;
      const F = (g) => g?.name ? g.name.toLowerCase() : "", H = new Map(
        o.value.inputShapes.map((g) => [F(g), g])
      ), j = /* @__PURE__ */ new Set();
      for (const g of Object.values(p.value)) {
        if (!g.name) continue;
        const M = F(g), Y = H.get(M), ae = {
          ...g,
          name: g.name.toUpperCase() || Y?.name.toUpperCase(),
          material: g.material?.toUpperCase() || Y?.material?.toUpperCase(),
          bandingOptions: g.bandingOptions || {},
          finishOptions: g.finishOptions || {},
          orientationLock: g.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, P = Y || o.value.createInputShape(ae);
        if (Y) {
          Object.assign(Y, ae);
          for (const _ of ["banding", "finish"])
            o.value.initExtrasOptions(Y, _);
        } else
          o.value.inputShapes.push(P);
        j.add(M);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (g) => j.has(F(g))
      );
    }, { immediate: !1 }), Wt(() => V());
    const L = (R) => {
      s.debug && console.log(R);
    }, C = () => {
      u.value = Object.values(c.value.inputs).map((R) => ({
        value: R.default ?? null
      })), console.log(u.value);
    }, A = (R, F) => {
      u.value[R] && (u.value[R].value = F);
    }, $ = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (R) {
        return o.value.inputShapes.length = 0, console.error(R), null;
      }
    }, x = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (R) {
        return console.error(R), null;
      }
    }, V = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (L(`SmartCut - Formula calculator init from url: ${s.url}`), l = new ir({ url: s.url }), c.value = await l.getSpec()) : s.spec && (L("SmartCut - Formula calculator init with JSON"), l = new ir({ spec: s.spec }), c.value = await l.getSpec()), C(), f.value = !0;
    };
    return (R, F) => (w(), T(Te, null, [
      r.value === "development" && nw ? (w(), T("div", Jv, [
        F[1] || (F[1] = O("div", null, "Developer information", -1)),
        Fe(k(i), {
          data: [p.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : U("", !0),
      O("div", Qv, [
        c.value?.projectName ? (w(), ve(ki, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: h.value,
          "onUpdate:value": F[0] || (F[0] = (H) => h.value = H)
        }, null, 8, ["value"])) : U("", !0),
        (w(!0), T(Te, null, je(c.value?.inputs, (H, j, g) => (w(), ve(ki, {
          id: "formula-field-" + g,
          key: g,
          type: H.type,
          label: H.label,
          placeholder: H.label,
          min: H.min ?? 0,
          max: H.max ?? null,
          default: H.default ?? 0,
          value: u.value[g]?.value,
          "onUpdate:value": (M) => A(g, M)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        I.value ? (w(), T("div", ew, [
          O("div", tw, J(k(q)("Hardware")), 1),
          (w(!0), T(Te, null, je(I.value, (H, j) => (w(), T("div", { key: j }, J(H.name) + " x" + J(H.q) + " = " + J(t.formatPrice(H.totalCost)), 1))), 128)),
          O("div", iw, J(k(q)("Hardware total")) + " = " + J(t.formatPrice(E.value)), 1)
        ])) : U("", !0),
        O("div", sw, J(k(q)("Panels")), 1)
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
    const e = t, { notices: i, dismissNotice: s } = Da(), n = te({}), a = Q(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, r) => {
      const l = pi("FontAwesomeIcon");
      return w(), ve(La, { to: "body" }, [
        O("div", ow, [
          Fe(Sc, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ie(["notices-container", e.position])
          }, {
            default: Ii(() => [
              (w(!0), T(Te, null, je(k(i), (c) => (w(), T("div", {
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
                  }, J(c.message), 9, lw),
                  O("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, cw)
                ]),
                c.persistent ? U("", !0) : (w(), ve(l, {
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
  Js as B,
  Va as C,
  ie as D,
  kh as E,
  xi as F,
  Ww as G,
  ss as H,
  el as I,
  Ah as J,
  Hw as K,
  ku as L,
  zi as M,
  Ce as N,
  yf as O,
  Xn as P,
  Z as Q,
  Ew as R,
  Qr as S,
  Ue as T,
  mr as U,
  It as V,
  tt as W,
  ap as X,
  nf as Y,
  yw as Z,
  Xt as _,
  tn as a,
  He as a$,
  Bi as a0,
  Gt as a1,
  Fw as a2,
  Jt as a3,
  Uw as a4,
  Iw as a5,
  Ze as a6,
  Xd as a7,
  Lw as a8,
  Et as a9,
  Nw as aA,
  tS as aB,
  yr as aC,
  np as aD,
  iS as aE,
  Xh as aF,
  eS as aG,
  bn as aH,
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
  ti as aU,
  cp as aV,
  pl as aW,
  sS as aX,
  pa as aY,
  ll as aZ,
  zw as a_,
  Bu as aa,
  xd as ab,
  Xw as ac,
  Yd as ad,
  Mw as ae,
  $w as af,
  gn as ag,
  Hi as ah,
  Dw as ai,
  jw as aj,
  vt as ak,
  Rw as al,
  nu as am,
  ru as an,
  fu as ao,
  vw as ap,
  bw as aq,
  Zw as ar,
  Kw as as,
  us as at,
  gr as au,
  nt as av,
  id as aw,
  wt as ax,
  Gw as ay,
  vi as az,
  yn as b,
  nS as b0,
  aS as b1,
  se as b2,
  Aw as b3,
  Ow as b4,
  dt as b5,
  _w as b6,
  Bw as b7,
  qw as b8,
  Vw as b9,
  oS as bA,
  Qa as bB,
  vS as bC,
  wS as bD,
  SS as bE,
  Qd as ba,
  Sw as bb,
  Lt as bc,
  Ni as bd,
  Ge as be,
  bt as bf,
  en as bg,
  Nt as bh,
  Tw as bi,
  sh as bj,
  al as bk,
  Na as bl,
  di as bm,
  pn as bn,
  xw as bo,
  Dy as bp,
  bS as bq,
  ui as br,
  yS as bs,
  yo as bt,
  Ci as bu,
  ut as bv,
  ww as bw,
  bu as bx,
  bo as by,
  Tt as bz,
  $a as c,
  Mo as d,
  bl as e,
  vl as f,
  Mu as g,
  uS as h,
  lS as i,
  cS as j,
  yi as k,
  kn as l,
  Hp as m,
  fS as n,
  mS as o,
  gS as p,
  pS as q,
  Yw as r,
  zt as s,
  q as t,
  kw as u,
  hS as v,
  Up as w,
  dS as x,
  rS as y,
  mw as z
};
