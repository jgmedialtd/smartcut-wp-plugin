import { i as sr, B as cc } from "./vendor-i18n-BuJwRgtG.js";
import { d as De, c as T, o as v, F as Te, r as je, n as Je, a as Ie, b as O, w as ls, t as J, v as ln, e as te, f as mt, g as Wt, h as Q, u as nr, i as uc, j as Me, k as yt, l as dc, m as cs, p as ve, q as I, s as U, x as Ns, T as Do, y as or, z as fc, A as wi, B as Ii, C as Gs, D as oi, E as pi, G as Ee, H as hc, I as ar, J as ts, K as pc, L as fa, M as Mi, N as ha, O as gc, P as mc, Q as yc, R as bc, S as vc, U as En, V as wc, W as Sc } from "./vendor-vue-V1I1Po2P.js";
import { u as Ro, a as xc, b as kc, c as Ic, d as Cc, e as Mo, f as rr, g as Pc, h as Tc, i as Ac, j as Oc } from "./composables-BlKEMPYv.js";
import { a as lr, b as cr, l as Ft, c as qs, d as zs, s as st, r as jt, e as is, f as ur, g as $c, h as Fc, i as Lc, p as Ec, S as Dc, j as Rc, k as Mc } from "./vendor-d3-DUCHe88K.js";
import { _ as ue, o as B, a as ee, s as m, n as d, b as D, c as xe, r as we, u as he, d as wt, e as ao, z as _c, Z as Dn, f as Bc, l as me, p as Ci, g as _e, h as jc, i as Vc, F as ns, j as dr, k as Nc, m as Gc, q as qc, t as zc, v as Wc, w as Hc, x as fr, y as Uc, A as Rn, B as hr, C as pa, D as Yc, E as Kc, G as Zc, H as ft, I as Ws, J as Ke, K as Si, L as ga, M as Xc, N as It, O as Hs, P as it, Q as Jc, R as Qc, S as eu, T as tu, U as iu, V as su } from "./vendor-4AnxBRif.js";
function Ct() {
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
function yw() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const bw = {
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
}, Mn = {
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
function nu(t) {
  if (t in Mn) {
    const e = t;
    return Ct() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${Mn[e]}"`), Mn[e];
  }
  return t;
}
var se = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(se || {}), ou = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(ou || {});
class St {
  static guardCache = /* @__PURE__ */ new Map();
  /**
   * Create a type guard function for a specific entity type
   */
  static create(e, i, s) {
    const n = `${e}-${i}`;
    if (this.guardCache.has(n))
      return this.guardCache.get(n);
    const o = (a) => {
      if (!a || typeof a != "object") return !1;
      if (a._type === e)
        return s ? s(a) : !0;
      const l = a.constructor?.name === i, u = "getType" in a && typeof a.getType == "function" && a.getType() === e, f = l || u, h = s ? s(a) : !0;
      return f && h;
    };
    return this.guardCache.set(n, o), o;
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
const au = (t) => (_n || (_n = St.create(se.Cut, "Cut")), _n(t));
let Bn = null;
const Ze = (t) => (Bn || (Bn = St.create(se.Shape, "Shape", (e) => !("shapes" in e))), Bn(t));
let jn = null;
const Et = (t) => (jn || (jn = St.create(se.Stock, "Stock")), jn(t));
let Vn = null;
const gr = (t) => (Vn || (Vn = St.create(se.Group, "Group", (e) => "shapes" in e && Array.isArray(e.shapes) && e.type !== "user" && e.type !== "strip")), Vn(t));
let Nn = null;
const us = (t) => (Nn || (Nn = St.create(se.UserGroup, "Group", (e) => "shapes" in e && e.type === "user")), Nn(t));
let Gn = null;
const mr = (t) => (Gn || (Gn = St.create(se.StripGroup, "Group", (e) => "shapes" in e && e.type === "strip")), Gn(t));
let qn = null;
const yr = (t) => (qn || (qn = St.create(se.FirstShapeGroup, "Group", (e) => "shapes" in e && e.type === "firstShape")), qn(t)), He = (t) => gr(t) || us(t) || mr(t) || yr(t);
let zn = null;
const Vt = (t) => (zn || (zn = St.create(se.InputUserGroup, "InputUserGroup")), zn(t));
let Wn = null;
const ji = (t) => (Wn || (Wn = St.create(se.Segment, "Segment")), Wn(t));
let Hn = null;
const ru = (t) => (Hn || (Hn = St.create(se.Offcut, "Offcut")), Hn(t)), br = (t) => {
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
const lu = (t) => (Un || (Un = St.create(se.Saw, "Saw")), Un(t)), vr = (t) => {
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
const be = (t) => (Yn || (Yn = St.create(se.InputShape, "InputShape")), Yn(t));
let Kn = null;
const Vi = (t) => (Kn || (Kn = St.create(se.InputStock, "InputStock")), Kn(t));
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
  return au(t) ? se.Cut : be(t) ? se.InputShape : Vi(t) ? se.InputStock : Vt(t) ? se.InputUserGroup : us(t) ? se.UserGroup : mr(t) ? se.StripGroup : yr(t) ? se.FirstShapeGroup : gr(t) ? se.Group : Ze(t) ? se.Shape : Et(t) ? se.Stock : br(t) ? se.Container : ji(t) ? se.Segment : ru(t) ? se.Offcut : vr(t) ? se.Rectangle : cu(t) ? se.Placeable : null;
}
const ai = (t) => {
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
}, fu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
function hu(t) {
  return t?.__entityType === se.Shape;
}
function vw(t) {
  return t?.__entityType === se.Group || t?.__entityType === se.StripGroup || t?.__entityType === se.FirstShapeGroup;
}
function ww(t) {
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
const pu = B({
  item: xe().nullable().default(null),
  message: m().default(""),
  params: we(m(), he([m(), d(), D(), wt()])).optional(),
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
function Ti(t) {
  return !(!t || typeof t != "string");
}
function gu(t) {
  return !Ti(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function mu(t) {
  return !Ti(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function yu(t) {
  return Ti(t) ? t.trim().split(" ").map((e) => zi(e)).join(" ") : "";
}
function zi(t) {
  return Ti(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function bu(t) {
  return Ti(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function vu(t) {
  return Ti(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function Sw(t, e = 100) {
  return Ti(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let kr = sr;
function wu(t) {
  kr = t;
}
function Dt(t, e) {
  if (pr())
    return t;
  const i = kr.t(t, { ...e });
  return !i || i === t ? t : zi(i);
}
function Su(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function xu(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Su(s)) {
      const n = Dt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function ku(t, e) {
  const i = nu(t), s = t.startsWith("errors.validation.") ? t : i, n = xu(e);
  return {
    message: Dt(s, n),
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
    const o = i.shouldTranslate !== !1 ? Iu(i.message, i.params) : i.message;
    if (this.message = o, this.identifier = s, this.field = i.field.map((a) => [...a]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const a = `Issue created for ${du(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
      throw new Error(a);
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
    const s = this.field.some((o) => this.isFieldPathEqual(o, e)), n = this.index.includes(i);
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
ao(
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
function cn() {
  return Cu(), Ir;
}
function xw(t, e) {
  Ir.set(t, e);
}
function kw() {
  Cr = !0;
}
function un(t, e) {
  const i = t;
  return i._fieldBehavior = { fieldBehavior: e }, i;
}
function ma(t, e) {
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
      const o = ma(n);
      o && (e[s] = o);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const o = ma(n);
      o && (e[s] = o);
    }
  }
  return e;
}
typeof _c < "u" && Dn && Dn.prototype && (Dn.prototype.behavior = function(t) {
  return un(this, t);
});
function ge(t, e = {}) {
  let s = xe().refine((a) => a == null ? !0 : typeof a == "object" && a !== null ? ("autoId" in a || "id" in a, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((a) => {
    if (a == null || typeof a == "object" && a !== null && typeof a.getType == "function" || typeof a == "object" && a !== null && a.__ref === !0 || typeof a == "object" && a !== null && "__entityType" in a)
      return a;
    if (typeof a == "object" && a !== null && !a.__ref)
      try {
        const l = cn().get(t);
        if (l && typeof l == "function")
          return typeof l.fromData == "function" ? l.fromData(a) : new l(a);
      } catch (r) {
        console.warn(`Failed to recreate ${t} instance:`, r);
      }
    return a;
  });
  e.nullable && (s = s.nullable());
  let n = s.default(null).describe(e.description || `Reference to ${t}`);
  const o = e.fieldBehavior || {
    serialize: "reference",
    // References should always serialize as references for efficiency
    compress: "reference",
    // Compressed mode also uses references
    clone: "copy",
    // Default clone behavior
    description: `Reference to ${t}`
  };
  return n = un(n, o), n;
}
function Fe(t, e = {}) {
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
  const i = t.map((o) => ge(o));
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
const Pr = m().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Pu = m().max(200).default("").describe("User input name"), Tu = m().default("").describe("Parent identifier for tracking copies and relationships"), Au = D().default(!1).describe("Prevent automatic rotation optimization"), Ou = D().default(!1).describe("Whether this is an offcut piece"), Tr = ee(m()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Wi = he([
  me(""),
  me("l"),
  me("w"),
  me(" ").transform(() => ""),
  wt().transform(() => "")
]).default("").describe("Grain direction of the material"), Ar = he([
  // String format (legacy support - color name or hex)
  m(),
  // Object format with hex and name
  B({
    hex: m().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: m().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Or = Ci(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  ue(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), $u = B({
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
  wt()
]).default(null);
we(m(), d()).nullable().default(null);
we(m(), d()).nullable().default(null);
const _o = he([
  me(0),
  me(1)
]), Fu = B({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: _o.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: d().optional().describe("Order of the batch"),
  id: m().optional().describe("Batch ID"),
  stockId: m().optional().describe("Associated stock ID"),
  rerunning: D().optional().describe("Whether the batch is being rerun"),
  priorityShape: m().nullable().describe("Priority shape identifier (null if none specified)")
});
B({
  subsetUsed: D().optional().describe("Whether a subset was used for strip shape batches"),
  groups: we(m(), Fu).describe("Groups of strip shape batches keyed by ID")
});
const Lu = ["x", "y"];
ue(Lu);
const Eu = ["l", "w"];
ue(Eu);
const Bo = ["l", "w"], hi = ue(Bo);
he([
  me(0),
  me(1),
  me(2)
]);
he([
  me(0),
  me(1),
  wt()
]);
const Du = ["sheet", "linear", "roll"], dn = Ci(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  he([
    ue(Du),
    wt()
  ]).nullable().default(null)
).describe("Type of stock material"), $r = B({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: D().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: D().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: D().default(!1).describe("Automatically add stock as needed")
}), Ru = ue(["none", "schema", "business", "full"]), Rt = B({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: Fe("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: Fe("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: D().optional(),
  // New validation control properties
  skipSchemaValidation: D().optional(),
  skipBusinessValidation: D().optional(),
  validationMode: Ru.optional(),
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
function Mu(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const jo = Rt.extend({
  // Identity
  id: Pr,
  // Description
  name: Pu,
  // Dimensions
  l: Ci((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Length (long side dimension)"),
  w: Ci((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Width (short side dimension)"),
  t: d().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: d().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: d().positive().default(1).describe("Calculated area (l * w)"),
  longSide: d().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: d().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: m().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: D().default(!1).describe("Whether this is a duplicate"),
  offcut: Ou,
  // Grain
  grain: Wi,
  preventGrainRotation: D().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Au,
  orientationLock: Or,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: d().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: d().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: m().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: $u.describe("Reduce the dimensions by specified trim values"),
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
}), Vo = {
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
}, fn = jo.extend({
  // Identity - override id to be required for containers
  id: m().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: Tu,
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
  ...Vo,
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
    compute: (t) => Et(t) ? t : ji(t) || He(t) ? t.stock : null,
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
function ya(t, e) {
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
function ba(t, e = !1) {
  if (!Se(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => Se(s) && s) : i.some((s) => Se(s));
}
function Iw(t) {
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
function Cw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function Gt(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function ju(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function Vu(t, e) {
  if (!t || !e) return 0;
  const i = t.split(".").map(Number), s = e.split(".").map(Number), n = Math.max(i.length, s.length);
  for (let o = 0; o < n; o++) {
    const a = i[o] || 0, r = s[o] || 0;
    if (a > r) return 1;
    if (a < r) return -1;
  }
  return 0;
}
function va(t, e) {
  return Vu(t, e) > 0;
}
const Ri = 1e-10, Nu = 10, Gu = Number.MAX_SAFE_INTEGER, qu = 4294967295, gt = (t) => typeof t == "number" && Number.isFinite(t), Ds = (t) => Array.isArray(t) && t.length > 0;
function Xi(t, e, i = Ri) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const zu = {
  greaterThan: (t, e, i = Ri) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Ri) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) >= 0,
  lessThan: (t, e, i = Ri) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Ri) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) <= 0,
  equalTo: (t, e, i = Ri) => !gt(t) || !gt(e) ? !1 : Xi(t, e, i) === 0
};
function Wu(t) {
  return gt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Nu)) : !1;
}
function Hu(t) {
  if (!gt(t) || t < 0 || t > Gu)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (qu + 1) * t);
}
function Uu(t, e) {
  if (!Ds(t))
    throw new Error("Invalid array parameter");
  if (!gt(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [i[n], i[o]] = [i[o], i[n]];
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
    const s = i ?? this.calculateMean(e), n = e.reduce((o, a) => {
      const r = a - s;
      return o + r * r;
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
  ...zu,
  isNumber: gt,
  round: Wu,
  getRandom: Hu,
  getRandomSample: Uu,
  calculateStandardDeviation: ks.calculateStandardDeviation.bind(ks),
  calculateCoefficientOfVariation: ks.calculateCoefficientOfVariation.bind(ks)
}, Zn = 10, wa = 0;
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
function Yu(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new ns(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Ku(t, e) {
  const i = new ns(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new ns(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Zu(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const o = Fr(n, !0), a = parseFloat(o ?? ""), r = o !== null && o !== "" && !isNaN(a) && isFinite(a);
    return {
      value: r ? a : t,
      valid: r,
      message: r ? void 0 : "invalid_number",
      messageData: r ? void 0 : "Could not parse as decimal."
    };
  } catch (o) {
    return {
      value: t,
      valid: !1,
      message: "errors.validation.field.invalid_number",
      messageData: o.message || "Parsing error"
    };
  }
  return {
    value: t,
    valid: !1,
    message: "errors.validation.field.invalid_format",
    messageData: e
  };
}
function Xu(t = "en-US") {
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
    const { thousandsSeparator: i, decimalSeparator: s } = Xu(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), o = Number(n);
    return isFinite(o) ? o : null;
  } catch (i) {
    throw new Us(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function No(t) {
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
    const n = Object.keys(Qi).join(""), o = new RegExp(`^(-?)(\\d+)([${n}])$`), a = new RegExp(`^(-?)([${n}])$`), r = i.match(o), l = i.match(a);
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
    } else if (No(i)) {
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
function Pw(t, e, i = null, s = null) {
  if (t && !(!be(t) && !Vi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const o in t[n])
          Object.prototype.hasOwnProperty.call(t[n], o) && (t[n][o] = Z({ v: t[n][o], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = Z({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function Ju(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function Qu(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function Z(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Zn, n = t.pl ?? e?.parseLocale ?? !1, o = t.fr ?? e?.fractionRoundTo ?? wa;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Zn) {
        const a = Math.pow(10, s);
        return Math.round(t.v * a) / a;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const a = t.v.trim();
      if (Ju(a) && !n) {
        const r = parseFloat(a);
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
    const a = t.v.trim();
    if (Qu(a))
      try {
        const r = new ns(a);
        if (isFinite(r.valueOf())) {
          if (o === 0 || o === wa)
            return r.toFraction(!0);
          const l = r.mul(o), c = Math.round(l.valueOf());
          return new ns(c, o).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const a = Fr(t.v, n);
    return a === null || a === "" ? i === "decimal" ? null : "" : i === "decimal" ? Yu(a, s) : Ku(a, o);
  } catch (a) {
    throw a instanceof Us ? a : new Us(
      `Failed to convert number format: "${t.v}" to ${i}. ${a.message}`
    );
  }
}
function Ni(t, e = !1) {
  const i = typeof t.l == "string" ? Z({ v: t.l }) : t.l, s = typeof t.w == "string" ? Z({ v: t.w }) : t.w;
  if (!e)
    return { l: i, w: s };
  if (!("trim" in t))
    return { l: i, w: s };
  if (wr(t))
    return { l: i, w: s };
  if (vr(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, o = Z({ v: n.l1 ?? 0 }) + Z({ v: n.l2 ?? 0 }), a = Z({ v: n.w1 ?? 0 }) + Z({ v: n.w2 ?? 0 });
  return {
    l: i - (typeof o == "string" ? Z({ v: o }) : o),
    w: s - (typeof a == "string" ? Z({ v: a }) : a)
  };
}
function ed(t, e) {
  if ("trim" in t && !wr(t)) {
    const i = t.trim;
    e.l = e.l - (Z({ v: i.l1 ?? 0 }) + Z({ v: i.l2 ?? 0 })), e.w = e.w - (Z({ v: i.w1 ?? 0 }) + Z({ v: i.w2 ?? 0 }));
  }
  return e;
}
function Fi(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (Vi(t) || be(t) || us(t)) && (s = {
    l: Z({ v: t.l }),
    w: Z({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = ed(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Lr(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function td(t) {
  He(t) || (Lr(t), [t.l, t.w] = [t.w, t.l]);
}
function Hi(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && lu(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = Z({ v: s.options.minSpacing }) : br(e) && (n = e?.saw?.options.minSpacing);
  const o = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, a = Ni(e, !0), r = o ? Ni(e, !1) : a, l = Ni(t, !0);
  let c = a;
  if (o && (ne.equalTo(l.l, r.l) && ne.equalTo(l.w, r.w) || ne.equalTo(l.l, r.w) && ne.equalTo(l.w, r.l)) && (c = r), l.l * l.w > c.l * c.w)
    return !1;
  function u(E, L) {
    return ne.equalTo(E, L) || ne.lessThanOrEqualTo(E, L - n * 2);
  }
  function f(E) {
    return u(E.l, c.l) && u(E.w, c.w);
  }
  const h = Er(t, e);
  if (t.orientationLock || i !== null) {
    const E = i ?? (h === "w" ? 1 : 0), L = Fi(t, E, !0);
    if (o) {
      const C = Fi(t, E, !1);
      if (ne.equalTo(C.l, r.l) && ne.equalTo(C.w, r.w))
        return f(C);
    }
    return f(L);
  }
  const p = Fi(t, 0, !0);
  if (o) {
    const E = Fi(t, 0, !1);
    if (ne.equalTo(E.l, r.l) && ne.equalTo(E.w, r.w) && f(E)) return !0;
  }
  if (f(p)) return !0;
  const k = Fi(t, 1, !0);
  if (o) {
    const E = Fi(t, 1, !1);
    if (ne.equalTo(E.l, r.l) && ne.equalTo(E.w, r.w) && f(E)) return !0;
  }
  return f(k);
}
function id(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (He(t) || us(t) || Ze(t) || be(t)) && (e = t.orientationLock), e;
}
function Er(t, e) {
  const i = id(t);
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
  if (He(t))
    return Hi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    vt(t, s, e) && Hi(t, e, s) && i.push(s);
  return i;
}
function vt(t, e = null, i = null) {
  if (!Se(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !He(t) && od(t) && e || i && !Hi(t, i, e))
    return !1;
  const s = Er(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function sd(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), vt(t, e, i) ? (s === e || td(t), !0) : !1;
}
function nt(t, e = null, i = null) {
  e ? e = 1 : e = 0;
  const s = t.id || t.autoId || "unknown";
  return i && e && !Hi(t, i, e) ? (console.warn(`[setRotation] ${s}: Cannot rotate to ${e} - won't fit in container`), !1) : sd(t, e, i);
}
function Tw(t, e) {
  if (He(t)) return t.rot;
  if (!Se(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !Se(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function Sa(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const o = Ni(t);
  if (o.l >= e && o.l <= i || o.w >= e && o.w <= i) {
    if (t.l === t.w) return !0;
    const a = Math.max(o.l, o.w), r = Math.min(o.l, o.w);
    if (n) {
      if (s === "l") {
        if (a >= e && a <= i && vt(t, 0, n) || r >= e && r <= i && vt(t, 1, n)) return !0;
      } else if (s === "w" && (r >= e && r <= i && vt(t, 0, n) || a >= e && a <= i && vt(t, 1, n)))
        return !0;
    } else if (t.orientationLock) {
      if (t.orientationLock === "l")
        return s === "l" && a >= e && a <= i;
      if (t.orientationLock === "w")
        return s === "l" && r >= e && r <= i;
    }
  }
  return !1;
}
function nd(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = Ni(t), o = Math.max(n.l, n.w), a = Math.min(n.l, n.w);
  if (i === "l") {
    if (o === e && vt(t, 0, s)) return nt(t, 0);
    if (a === e && vt(t, 1, s)) return nt(t, 1);
  } else if (i === "w") {
    if (a === e && vt(t, 0, s)) return nt(t, 0);
    if (o === e && vt(t, 1, s)) return nt(t, 1);
  }
  return !1;
}
function od(t) {
  Lr(t);
  const e = Ni(t);
  return ne.equalTo(e.l, e.w);
}
function xa(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let ka = 0, Ia = Date.now();
const ad = 1e4;
function rd() {
  return ka % ad === 0 && (Ia = Date.now()), `${Ia}-${(ka++).toString(36)}`;
}
class ld {
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
    this.autoId = e?.autoId || rd(), Object.defineProperty(this, "_serializationMode", {
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
    for (const [n, o] of Object.entries(e))
      if (o && typeof o == "object" && "_def" in o) {
        let a = o;
        for (; a && a._def; ) {
          const l = a._def.typeName || a.constructor?.name;
          if (l === "ZodDefault" || l === "ZodOptional" || l === "ZodNullable") {
            if (a = a._def.innerType || a._def.type, !a) break;
          } else
            break;
        }
        const r = xs(a);
        for (const [l, c] of Object.entries(r)) {
          const u = s ? `${s}.${n}.${l}` : `${n}.${l}`;
          i[u] = c;
        }
        if (a && a.shape) {
          const l = s ? `${s}.${n}` : n;
          this.extractNestedBehaviors(a.shape, i, l);
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
    const i = {}, s = this.getSerializationFields(), n = this.getFieldBehaviors(), o = e === "compressed" ? "compressed" : "full";
    if (s.length === 0) {
      const a = /* @__PURE__ */ new Set();
      Object.getOwnPropertyNames(this).forEach((r) => a.add(r));
      for (const r in this) a.add(r);
      for (const r of a) {
        if (r.startsWith("_")) continue;
        const l = this.constructor.serializationExcludedProperties;
        if (l && l.includes(r) || this.isGetterProperty(r)) continue;
        const c = this[r];
        if (typeof c == "function" || c === void 0) continue;
        const u = n[r];
        o === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude" || (i[r] = this.serializeValue(c, u, o, r, n));
      }
    } else
      for (const a of s) {
        const r = this[a], l = n[a];
        o === "compressed" && l?.compress === "exclude" || l?.serialize === "exclude" || (i[a] = this.serializeValue(r, l, o, a, n));
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
      const a = e.validationMode === "none" || e.skipSchemaValidation;
      let r;
      a ? r = e : r = s.partial().parse(e);
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
      for (const a in e)
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          const r = e[a];
          if (r !== void 0 && a in this) {
            const l = Object.getOwnPropertyDescriptor(this, a) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), a);
            if (l && l.get && !l.set)
              continue;
            this[a] = r;
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
          const n = s.issues.map((o) => new ie({
            message: o.message,
            type: "error",
            field: o.path.length > 0 ? [o.path.map(String)] : void 0,
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
      const p = s.pop() || "0", k = parseInt(p, 10);
      isNaN(k) && s.push(p), n = String(e);
    } else {
      const p = s.pop() || "0", k = parseInt(p, 10);
      isNaN(k) ? (s.push(p), n = "1") : n = String(k + 1);
    }
    s.push(n);
    const o = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let f = {};
    u && (f = xs(u));
    const h = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [p, k] of Object.entries(f))
      k.clone === "reset" && (p in h ? c[p] = h[p] : delete c[p]);
    return "id" in c && (c.id = o), c.autoId = r, c.duplicate = !0, c.skipValidation = !0, new l(c);
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
        let o = !1;
        const a = Object.getOwnPropertyDescriptor(this, n);
        if (a && a.get && !a.set)
          o = !0;
        else if (!a) {
          let l = Object.getPrototypeOf(this);
          for (; l && l !== Object.prototype; ) {
            const c = Object.getOwnPropertyDescriptor(l, n);
            if (c && c.get) {
              o = !0;
              break;
            }
            l = Object.getPrototypeOf(l);
          }
        }
        if (o) continue;
        const r = this[n];
        typeof r == "function" || r === void 0 || (i[n] = this.handleReferenceForCloning(r, n, e));
      }
    else
      for (const n of s) {
        const o = this[n];
        i[n] = this.handleReferenceForCloning(o, n, e);
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
    const o = this.constructor.schema;
    let a = null;
    if (o && (a = xs(o)[i] || null), a?.clone)
      switch (a.clone) {
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
  serializeValue(e, i, s, n, o) {
    if (e == null)
      return e;
    if (Array.isArray(e))
      return e.map((a) => {
        if (xa(a)) {
          if (i?.serialize === "reference" || s === "compressed" && i?.compress === "reference") {
            const c = "autoId" in a && a.autoId, u = typeof a.getType == "function";
            if (c) {
              const f = u ? a.getType() : a.constructor.name;
              return {
                __ref: !0,
                id: a?.id,
                autoId: a.autoId,
                __entityType: f
              };
            }
          }
          const l = s === "compressed" ? "compressed" : "full";
          return a.toData(l);
        }
        return a;
      });
    if (xa(e)) {
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
      const a = {}, r = o || this.getFieldBehaviors();
      for (const l in e)
        if (Object.prototype.hasOwnProperty.call(e, l)) {
          const c = n ? `${n}.${l}` : l, u = r[c];
          if (s === "compressed" && u?.compress === "exclude" || u?.serialize === "exclude")
            continue;
          a[l] = this.serializeValue(e[l], u, s, c, r);
        }
      return a;
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
      const { ...o } = e;
      try {
        return "fromData" in n && typeof n.fromData == "function" ? n.fromData(o) : new n(o);
      } catch (a) {
        return console.warn(`Failed to recreate ${i}:`, a), e;
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
      for (const [o, a] of Object.entries(e))
        n[o] = this.deserializeValue(a, void 0, s);
      return n;
    }
    return e;
  }
}
class We extends ld {
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
    We.recreateFunc = e;
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
    const s = this.extractValidationOptions(e), o = e._validated === !0 || s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let a;
    if (o)
      a = e;
    else if (s.enableStrictMode)
      a = i.parse(e);
    else {
      const r = i.safeParse(e);
      r.success ? a = r.data : a = i.partial().parse(e);
    }
    a = this.recreateNestedClasses(a, i), Object.assign(this, a), this.applyComputedProperties(), Object.defineProperty(this, "_type", {
      value: this.getType(),
      writable: !0,
      enumerable: !1,
      // CRITICAL: Must be non-enumerable to prevent serialization
      configurable: !0
    }), o || Object.defineProperty(this, "_validated", {
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
    for (const [o, a] of Object.entries(n)) {
      const r = s[o];
      r != null && (s[o] = this.deserializeValue(r));
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
        const a = s.stockList.find((r) => r.id === n || r.autoId === n);
        if (a) return a;
      }
      if (i === "Shape" && s.shapeList) {
        const a = s.shapeList.find((r) => r.id === n || r.autoId === n);
        if (a) return a;
      }
      if (i === "Group" && s.groupList) {
        const a = s.groupList.find((r) => r.id === n || r.autoId === n);
        if (a) return a;
      }
      const o = i.toLowerCase() + "List";
      if (s[o] && Array.isArray(s[o])) {
        const a = s[o].find((r) => r.id === n || r.autoId === n);
        if (a) return a;
      }
    }
    return e && typeof e == "object" ? (s && (e.id || e.autoId), We.recreateFunc ? We.recreateFunc(e, s, i) : { ...e, __ref: i }) : e;
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
    let o;
    n ? o = e : o = i.partial().parse(e), o = this.recreateNestedClasses(o, i.partial()), super.update(o);
    for (const a in o)
      if (Object.prototype.hasOwnProperty.call(o, a)) {
        const r = Object.getOwnPropertyDescriptor(this, a) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this), a);
        if (r && r.get && !r.set)
          continue;
        this[a] = o[a];
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
      return e.map((s) => We.cleanEntityForAPI(s));
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
    for (const [n, o] of Object.entries(s)) {
      if (n.startsWith("_"))
        continue;
      if (n === "trim") {
        i.push(n);
        continue;
      }
      const a = this.unwrapSchema(o);
      if (a instanceof Nc) {
        const r = a.options.some((c) => c instanceof Gc), l = a.options.some((c) => c instanceof qc);
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
const cd = ["lr", "rl", "bt", "tb"];
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
  direction: ue(cd).nullable().optional(),
  type: m().nullable().optional()
});
const ud = B({
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
}), dd = {
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
class vi extends We {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ud;
  static computedProperties = dd;
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
    const o = i.filter((a) => a.added);
    for (const a of o) {
      let r = !1, l = !1;
      if (this.dimension === "l" ? (r = ne.greaterThan(this.x2, a.x) && ne.lessThan(this.x1, a.x + a.l), l = ne.greaterThan(this.y1 + n, a.y) && ne.lessThan(this.y1 - n, a.y + a.w)) : this.dimension === "w" && (r = ne.greaterThan(this.x1 + n, a.x) && ne.lessThan(this.x1 - n, a.x + a.l), l = ne.greaterThan(this.y2, a.y) && ne.lessThan(this.y1, a.y + a.w)), r && l)
        if (s)
          this.shapeCollisions.push(a);
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
  static fromCoordinates(e, i, s, n, o, a) {
    return new vi({ x1: e, y1: i, x2: s, y2: n, origin: o, type: a });
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
const Ca = ["topLeft", "topRight", "bottomLeft", "bottomRight"], fd = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], hd = ["lr", "rl", "bt", "tb"], pd = B({
  // ========== Coordinates ==========
  x: d().default(0),
  y: d().default(0),
  z: d().default(0),
  // ========== Shape References ==========
  a: m().optional(),
  b: m().optional(),
  stock: ge("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: ue(hd).nullable().optional(),
  type: m().optional(),
  corner: ue(Ca).optional(),
  shapePosition: ue(Ca).optional(),
  grid: ue(fd).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: D().default(!1),
  collision: D().default(!1),
  tooClose: D().default(!1),
  adjustedForMinSpacing: D().default(!1)
}), gd = {
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
}, md = {
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
class Qe extends We {
  // Required: Define schema and computed properties for SchemaClass
  static schema = pd;
  static computedProperties = gd;
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
      const s = md[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (Is[this.corner] && (this.grid ? Is[this.corner][this.grid] && Is[this.corner][this.grid].forEach((s) => i.add(s)) : Is[this.corner].default?.forEach((s) => i.add(s))), i) : (Cs[this.corner] && (this.grid ? Cs[this.corner][this.grid] && Cs[this.corner][this.grid].forEach((s) => i.add(s)) : Cs[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
class pn extends We {
  // Zod schema for validation and serialization
  static schema = jo;
  static computedProperties = Vo;
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
const yd = B({
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
    groups: we(m(), yd).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Rr.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const bd = {};
class Xt extends We {
  // Required: Define schema and computed properties
  static schema = Rr;
  static computedProperties = bd;
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
function vd(t, e = "cc", i = {
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
    for (const [o, a] of Object.entries(i))
      n[a] = t[o];
    for (const [o, a] of Object.entries(s))
      a in t && (n[a] = t[o]);
  } else if (e === "cc") {
    for (const [o, a] of Object.entries(i))
      n[o] = t[a];
    for (const [o, a] of Object.entries(s))
      a in t && (n[o] = t[a]);
  }
  return n;
}
function ro(t = 0, e, i = null, s = null, n = null) {
  if (!be(i) && !Vt || s === "stock") return !1;
  let o, a;
  if (be(i) ? o = i.orientationLock : Vt(i) ? o = i.direction : s === "shape" && (o = n), t === 0 || Vt(i))
    switch (e) {
      case "n":
        a = o === "w" || n === "w";
        break;
      case "l":
      case "y":
        a = o === "w" || n === "w";
        break;
      case "w":
        a = o === "l" || n === "l";
        break;
      default:
        a = n === "w";
    }
  else if (t === 1)
    if (i) a = i.w > i.l;
    else return !1;
  else if (t === 2) {
    if (!i) return !1;
    switch (e) {
      case "n":
        a = i.w > i.l;
        break;
      case "y":
      case "l":
        a = i.w > i.l;
        break;
      case "w":
        a = i.l >= i.w;
        break;
      default:
        a = !1;
    }
  }
  return a;
}
function wd(t, e, i = null, s = null, n = null) {
  if (!be(i) || s === "shape") return !1;
  let o;
  return t === 0 || t === 1 ? ro(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : o;
}
const Sd = ["l", "w"], xd = ["top", "bottom", "left", "right", "merged"], kd = B({
  // Coordinates
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // Dimension and position
  dimension: ue(Sd).optional(),
  position: ue(xd).optional(),
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
}), Id = {
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
class Go extends We {
  // Required: Define schema and computed properties for SchemaClass
  static schema = kd;
  static computedProperties = Id;
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
  static fromCoordinates(e, i, s, n, o, a) {
    return new Go({ x1: e, y1: i, x2: s, y2: n, position: a, stock: o });
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
const Cd = B({
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
}).behavior({ clone: "reset" }), Pd = B({
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
}).behavior({ clone: "reset" }), Pa = he([
  Cd,
  Pd,
  // Also support the generic object with catchall for backward compatibility
  B({
    cutDirection: hi.optional(),
    myStripParent: he([
      ge("Shape", { nullable: !0 }),
      ge("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: hi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), ds = jo.extend({
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
    serialize: Ct() ? "full" : "exclude",
    compress: Ct() ? "full" : "exclude"
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
    score: Pa.optional(),
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
    serialize: Ct() ? "full" : "exclude"
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Pa.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: Ct() ? "full" : "exclude"
  }),
  // Minimum spacing
  minSpacing: d().min(0).default(0).describe("Minimum spacing around shape or group")
}), fs = {
  // Include all Rectangle computed properties
  ...Vo
  // Placeable doesn't define additional computed properties
};
ds.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(fs)
}));
class qo extends pn {
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
        const o = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), o && (this.guillotineState.stripShapeBatches = o);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new Xt();
    Ze(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = "")), He(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((o) => {
      "reset" in o && typeof o.reset == "function" && o.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !He(this) && e?.grain && this.rot && (this.grain = Gt(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, Ze(this) && (this.group.addedAsGroup = "", this.firstShape.isFirstShape = !1), He(this) && this.shapes.forEach((e) => {
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
      const o = e.options?.minSpacingDimension?.dimension;
      (this.l <= o || this.w <= o) && (n = e.options?.minSpacingDimension?.minSpacing || n);
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
    const o = new Qe(this.x, this.y);
    o.corner = "bottomLeft";
    const a = new Qe(this.x + this.l, this.y + this.w);
    return a.corner = "topRight", [o, n, a, s];
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
    const { w: i, l: s } = this, { w: n, l: o } = e;
    return i === n && s === o;
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
    const { w: s, l: n } = this, { w: o, l: a } = e;
    if (!(s === o && n === a) && !(s === a && n === o)) return !1;
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Go({
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
function ze(t, e) {
  if (e?.returnKey)
    return `fields.${t}`;
  const i = `fields.${t}`, s = Dt(i);
  if (s === i) {
    const n = qt[t] || t;
    return Ct() && !qt[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Ct() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const Mr = (t, e, i, s, n, o) => {
  const a = _e(t, e);
  if (a == null || a === "") return;
  if (typeof a != "string") {
    new ie({
      item: t,
      message: Dt("errors.validation.must_be_string", {
        0: qt[e]
      }),
      shouldTranslate: !1,
      field: [[e]],
      index: s !== void 0 ? [s] : null,
      type: n ? "warning" : "error",
      issues: o
    });
    return;
  }
  const r = a?.toLowerCase();
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
    issues: o
  });
};
function _r(t) {
  return t.filter((e) => e.type === "error");
}
function Td(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Ad(t) {
  return Td(t, "issues") && Array.isArray(t.issues);
}
function Ta(t, e, i = !1) {
  if (!Ad(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((a) => a.type === s).some((a) => a.field?.length ? a.field.some((r) => r.every((l, c) => l === $d(e[c]))) : !1);
}
const Od = {
  partMaterial: "material",
  stockMaterial: "material"
};
function $d(t) {
  return Od[t] ?? t;
}
const Fd = ["banding", "finish", "planing", "info"], Xn = m().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), xt = he([
  D(),
  m(),
  we(m(), he([D(), m()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), hs = Rt.extend({
  // ========== Identity ==========
  type: ue(Fd).optional().describe("Type of extra"),
  enabled: D().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: B({
    a: xt.optional(),
    b: xt.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: B({
    a: xt.optional(),
    b: xt.optional(),
    c: xt.optional(),
    d: xt.optional(),
    l1: xt.optional(),
    l2: xt.optional(),
    w1: xt.optional(),
    w2: xt.optional()
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
  xt
);
we(
  ue(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  xt
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
const Ld = B({
  location: m().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: we(m(), Br).optional(),
  disabledMessage: m().optional().describe("Message when location is disabled")
}), Ed = B({
  global: we(m(), Br).optional(),
  locations: ee(Ld).optional().describe("Location-specific constraints"),
  defaultMessage: m().optional().describe("Default message when constraints not met")
});
B({
  scope: ee(ue(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ee(ao()).optional().describe("Available face locations"),
  sides: ee(ao()).optional().describe("Available side locations"),
  constraints: Ed.optional()
});
const jr = hs, Dd = {
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
class os extends We {
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
class Lt extends os {
  // Required: Define schema and computed properties for SchemaClass
  static schema = jr;
  static computedProperties = {
    ...os.computedProperties,
    ...Dd
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
    for (const o in this.sides)
      this.hasSide(o) && n[o] && (s += n[o]);
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
const Rd = Rt.extend({
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
}), Md = {
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
}, Pi = ["l1", "l2", "w1", "w2"], _d = ["a", "b", "c", "d"], Pt = [...Pi, ..._d], ut = ["a", "b"], Vr = hs, Bd = {
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
class bt extends os {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Vr;
  static computedProperties = Bd;
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
const Nr = hs, jd = {
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
class di extends os {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Nr;
  static computedProperties = jd;
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
      for (const o of ut)
        this.hasFace(o) && (s += n);
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
      for (const o of Pt)
        this.hasSide(o) && n[o] && (s += n[o]);
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
      const o = this.sides ? this.getActiveSides().length : 0;
      if (e.t) {
        const a = e.l * e.t, r = e.w * e.t;
        i += o * ((a + r) / 2) * 0.01;
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
class Ge extends We {
  // Zod schema for validation and serialization
  static schema = Rd;
  static computedProperties = Md;
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
    if (ai(this.banding)) {
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
    return ai(this.banding) && (i += this.banding.getCost(e)), Kt(this.finish) && (i += this.finish.getCost(e)), Zt(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return ai(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Kt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Zt(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(ai(this.banding) && this.banding.hasValues() || Kt(this.finish) && this.finish.hasValues() || Zt(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    ai(this.banding) && this.banding.clear(), Kt(this.finish) && this.finish.clear(), Zt(this.planing) && this.planing.clear();
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
    return !!(ai(this.banding) && this.banding.isApplicable(e) || Kt(this.finish) && this.finish.isApplicable(e) || Zt(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: ai(this.banding) && this.banding.hasValues() || !1,
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
    return s ? ai(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
      const o = s.sides[n];
      return o !== void 0 && o !== !1 && o !== "";
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
      const o = s.faces[n];
      return o !== void 0 && o !== !1 && o !== "";
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
    return s ? Zt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((o) => {
      const a = s.sides[o];
      return a !== void 0 && a !== !1 && a !== "";
    }) ? !0 : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
      const o = s.faces[n];
      return o !== void 0 && o !== !1 && o !== "";
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
const Vd = B({
  id: m().optional(),
  url: m().optional(),
  size: d().optional(),
  mimeType: m().optional(),
  name: m().optional(),
  width: d().optional(),
  height: d().optional()
}), Nd = hs.extend({
  // ImageUpload specific properties
  images: ee(Vd).default([]).describe("Array of uploaded images"),
  maxImages: d().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ee(m()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: d().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: m().optional().describe("Description of uploaded images"),
  tags: ee(m()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), Gd = {
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
class Aw extends os {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = Nd;
  static computedProperties = Gd;
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
          const o = (n.size / 1048576).toFixed(2), a = (this.maxSizeBytes / 1048576).toFixed(2);
          i.push(new ie({
            message: `Image ${s + 1} is too large: ${o}MB exceeds ${a}MB`,
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
    const s = (this.images || []).reduce((o, a) => o + (a.size || 0), 0) / 1048576;
    return Math.ceil(s * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const e = this.images ? this.images.length : 0, s = ((this.images || []).reduce((n, o) => n + (o.size || 0), 0) / 1048576).toFixed(2);
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
const qd = {
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
}, zd = {
  cacheResults: !0
};
let Gr;
Gr = fr({}, qd, zd);
let dt = Gr;
function Wd() {
  if (dt.guillotine.secondPass && !dt.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (dt.captureProfile && dt.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
Wd();
function Ow(t, e = null) {
  if (!t) return dt;
  const i = Hd(t, e);
  if (!i) return dt;
  const s = fr({}, dt, i);
  return console.log(`[CONFIG] custom config applied for ${t?.username}`), s;
}
function Hd(t, e = null) {
  if (!t || !t?.config) return null;
  switch (t.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in e ? e.shapeList : e.inputShapes, s = i ? i.reduce((n, o) => n + (o.q || 0), 0) : 0;
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
function $w(t, e, i) {
  return Uc(t, e, i);
}
try {
  typeof Rn < "u" && Rn && (Rn.showDiff = !0);
} catch (t) {
  console.warn("Error accessing chaiConfig, skipping configuration:", t);
}
const Aa = hr("tests");
hr("timers");
let tt;
if (typeof pa == "function")
  tt = pa;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const t = new Proxy({}, { get: () => () => t });
  tt = () => t;
}
function kt(t = [], e = null) {
  if (!t?.length) return;
  if (Ct() && dt && dt.runTests)
    for (const s of t) {
      if (!s || typeof s != "function") {
        console.error("Invalid test function provided:", s);
        continue;
      }
      try {
        s();
      } catch (n) {
        const o = n instanceof Error ? n.message : String(n);
        if (e ? Aa(e, o) : Aa(o), dt && dt.throwErrorsOnFailedTests) throw n;
      }
    }
}
function Ys(t) {
  return t && typeof t == "object" && "area" in t;
}
const lo = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, Ye = (t, e, i) => e in t ? t[e] : (console.warn(lo.missingProperty(String(e), i)), null), Ps = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Li = (t, e) => {
  if (Ys(t) && Ys(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, $t = (t, e) => {
  const i = Ye(t, "id", "first item"), s = Ye(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), o = s.toString().split(".");
  return n[0] !== o[0] ? parseInt(n[0]) - parseInt(o[0]) : parseInt(n[1]) - parseInt(o[1]);
};
function Bt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: o } of e) {
      const a = Ye(i, n, "first item"), r = Ye(s, n, "second item");
      if (!(a === null || r === null) && a !== r)
        return o === "desc" ? a < r ? 1 : -1 : a < r ? -1 : 1;
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
function Ud(t) {
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
  AD: (t, e) => -Li(t, e),
  AA: Li,
  AAID: Ps(
    Li,
    $t
  ),
  ADID: Ps(
    (t, e) => -Li(t, e),
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
    return n !== 0 ? n : -Li(t, e);
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
    const i = Ye(t, "offcut", "first item"), s = Ye(e, "offcut", "second item"), n = Ye(t, "placementOrder", "first item") ?? 0, o = Ye(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - o;
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
    const o = Ye(t, "offcut", "first item"), a = Ye(e, "offcut", "second item");
    if (o && !a) return 1;
    if (!o && a) return -1;
    const r = Ye(t, "placementOrder", "first item") ?? 0, l = Ye(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = $t(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const o = Ye(t, "placementOrder", "first item") ?? 0, a = Ye(e, "placementOrder", "second item") ?? 0;
      return o - a;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = Ye(t, "placementOrder", "first item") ?? 0, s = Ye(e, "placementOrder", "second item") ?? 0, n = i - s;
    if (n !== 0) return n;
    const o = t.group?.placementOrder ?? 0, a = e.group?.placementOrder ?? 0;
    return o - a;
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
      return console.warn(lo.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(lo.missingLongSide), 0) : i[t] === e[t] ? -Li(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: qr,
  getSmallest: Ud
};
function Fw(t, e) {
  return Math.random() * (e - t) + t;
}
function Lw(t, e, i = "x") {
  if (!e) return !1;
  const s = i === "x" ? "l" : "w";
  return !!(ne.greaterThanOrEqualTo(t[i], e[i]) && ne.lessThanOrEqualTo(t[i] + t[s], e[i] + e[s]));
}
function Ew(t, e, i = "x") {
  if (!e) return !1;
  const s = Kd(i);
  return !!(ne.greaterThanOrEqualTo(t[i], e[i]) && ne.lessThan(t[i], e[i] + e[s]));
}
function Dw(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function Yd(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Oa(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
function Kd(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
const Zd = ju;
function Rw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function $a(t, e) {
  if (!Se(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function Mw(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(o) {
    if (s === !0) return o.added;
    if (s === !1) return !o.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((o) => n(o) && $a(o, e) && o.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Et(e) ? t[i]((o) => n(o) && $a(o, e) && o.willItFit(e)) : t[i]((o) => n(o) && o.willItFit(e));
  }
  return t[i]((o) => n(o));
}
function _w(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((r) => r.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), o = i ? /* @__PURE__ */ new Map() : null, a = [];
  for (const r of s) {
    let l;
    if (Ze(r))
      l = r.parentId;
    else if (He(r))
      l = r.id;
    else
      continue;
    if (!n.has(l)) {
      if (n.set(l, !0), o) {
        const c = r.l <= r.w, u = c ? r.l : r.w, f = c ? r.w : r.l, h = u + "-" + f + "-" + r.orientationLock;
        if (o.has(h)) continue;
        o.set(h, !0);
      }
      a.push(r);
    }
  }
  return a;
}
function Xd(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const o = t[n], a = Dr(o, e.getStock), r = o.shortSide, l = o.longSide;
    a.forEach((c) => {
      if (!o.willItFit(e, c)) return;
      let u;
      !i || i === "l" ? u = c === 0 ? l : r : i === "w" && (u = c === 0 ? r : l), u && s.set(u, s.has(u) ? s.get(u) + 1 : 1);
    });
  }
  return s;
}
function Bw(t, e = null) {
  const i = t.filter((o) => !o?.unusable && (e === null || o.used === e)), s = /* @__PURE__ */ new Map();
  for (const o of i) {
    const a = o.parentId;
    s.has(a) || s.set(a, o);
  }
  return Array.from(s.values());
}
function jw(t, e = null) {
  function i(n) {
    if (e === !0) return n.used;
    if (e === !1) return !n.used;
    if (e === null) return !0;
  }
  t.sort((n, o) => n.material && o.material && n.material !== o.material ? n.material.localeCompare(o.material) : n.t && o.t && n.t !== o.t ? n.t - o.t : n.id.localeCompare(o.id));
  const s = /* @__PURE__ */ new Map();
  for (const n of t) {
    if (!i(n)) continue;
    const o = `${n.l}-${n.w}-${n.t}-${n.material}`;
    s.has(o) || s.set(o, n);
  }
  return Array.from(s.values());
}
function Vw(t, e, i) {
  const s = t.filter((o) => o[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((o, a, r) => r > 0 ? o + a[n] + i : o + a[n], 0);
}
function Jd(t, e) {
  const i = e === "x" ? "l" : "w", s = Zd(e);
  if (!t?.length) return null;
  const n = t.reduce((a, r) => a[e] + a[i] > r[e] + r[i] ? a : r);
  return t.filter((a) => a[e] === n[e] && a[i] === n[i]).sort((a, r) => a[s] - r[s])[0];
}
function Qd(t, e, i) {
  if (e.length <= 1) return t;
  const s = sf(e, i), n = t.reduce((r, l) => (r[l.id] = nf(l, s), r), {}), o = Math.min(...Object.values(n));
  return t.filter((r) => !r.added && n[r.id] === o);
}
function ef(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function tf(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function Nw(t, e) {
  return ef(t, e) < e.q;
}
function sf(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = tf(e, s)), i;
}
function nf(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function of(t, e, i = !1) {
  const s = /* @__PURE__ */ new Map(), n = [], o = /* @__PURE__ */ new Set();
  for (let a = 0; a < t.length; a++) {
    const r = t[a], l = r.autoId;
    if (s.has(l)) {
      const c = s.get(l);
      c && (n.push(c.item), s.set(l, null)), n.push(r), o.add(a);
    } else
      s.set(l, { item: r, index: a });
  }
  if (n.length > 0) {
    const a = e ? ` [${e}]` : "", r = [...new Set(n.map((l) => l.autoId))];
    if (console.warn(`[duplicateIdsPresent]${a} Found duplicates!`), console.warn(`  Total items: ${t.length}`), console.warn(`  Duplicate autoIds: ${r.join(", ")}`), n.forEach((l) => {
      console.warn(`  ${l.id} (autoId=${l.autoId}): added=${l.added}, x=${l.x}, y=${l.y}, isGroup=${!!l.shapes}`);
    }), i) {
      const l = Array.from(o).sort((c, u) => u - c);
      for (const c of l)
        t.splice(c, 1);
      console.warn(`  Removed ${l.length} duplicate items. New length: ${t.length}`);
    }
  }
  return n.length > 0;
}
function Gw(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function af(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, o = t.y + t.w, a = e.x, r = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= a || // shape1 is completely to the left of shape2
  r <= i || // shape2 is completely to the left of shape1
  o <= l || // shape1 is completely below shape2
  c <= n);
}
function qw(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      af(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function zw(t) {
  t.sort(zt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function Ww(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
const zr = ee(m()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), rf = ue(["l", "w"]).nullable().default(null), Wr = he([
  me("l"),
  me("w"),
  wt()
]).default(null), lf = B({
  stockId: m().optional(),
  material: m().optional(),
  thickness: d().optional(),
  grain: Wi.optional()
}).describe("Which stock(s) this shape is a match for "), cf = we(m(), xe()).default({});
zr.describe("IDs of stocks this shape is locked to");
const uf = Wr.describe("Direction that should face up");
B({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: uf
});
const df = B({
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
}).describe("Group metadata and reference"), co = ds.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: df,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: m().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Tr,
  // Whether this is a duplicate
  duplicate: D().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: rf.describe("Direction that should face up"),
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
co.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Hr)
}));
class yn extends qo {
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
  static schema = co;
  static computedProperties = Hr;
  static defaults = co.parse({});
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
const Ur = ["horizontal", "vertical"], Yr = ["auto", "user", "strip", "firstShape"], zo = ue(Ur).optional(), ff = B({
  x: d(),
  y: d(),
  autoId: m().optional(),
  rot: _o
}), hf = ds.extend({
  // Override quantity - always 1 for groups
  q: d().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: D().default(!0),
  // Group-specific fields
  shapes: Fe("Shape").default([]),
  direction: zo,
  container: he([
    ge("Segment"),
    ge("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ee(ff).default([]),
  type: ue(Yr).default("auto"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: D().default(!1),
  collision: D().default(!1),
  counter: d().int().min(0).default(0),
  inputId: m().optional()
}), pf = {
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
  shapes: Fe("Shape"),
  direction: ue(Ur),
  type: ue(Yr),
  container: he([
    ge("Segment"),
    ge("Stock")
  ]).optional()
});
class bn extends qo {
  // Required: Define schema and computed properties for SchemaClass
  static schema = hf;
  static computedProperties = pf;
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
      if (!Ze(s) && !hu(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (Ze(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const o = i.shapeList.find((a) => a.autoId === s.autoId);
        if (o)
          return o.group.reference = this, o.group.inGroup = !0, o;
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
    const o = this.clone();
    return this.shapes = i, this.container = s, this.stock = n, o.container = s, o.shapes = e, o.skipValidation = !0, o.positions = [], o.container && o.updatePositions(), o;
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
        const a = s.guillotineState?.stripShapeBatches;
        if (this.guillotineState) {
          const r = this.guillotineState.constructor, l = this.guillotineState.toData();
          s.guillotineState = new r(l), a && (s.guillotineState.stripShapeBatches = a);
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
    const s = Yd(this.direction), n = Oa(this.direction);
    let o = 0;
    for (const l of this.shapes) {
      if (!l) continue;
      const c = o === this.shapes.length - 1 ? 0 : l.getMinSpacing(this.container.saw), u = e.get(l.autoId) ?? l.rot.valueOf();
      let f;
      u !== l.rot ? f = n === "l" ? l.w : l.l : f = l[n];
      const h = {
        autoId: l.autoId,
        x: 0,
        y: 0,
        rot: u
      };
      s === "x" ? h.x = i : h.y = i, this.positions.push(h), l.group.inGroup = !0, i += o === this.shapes.length - 1 ? f : f + c, o++;
    }
    this.groupLength = i;
    const a = Gt(n), r = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let f;
        return u !== void 0 && u !== c.rot ? f = a === "l" ? c.w : c.l : f = c[a], f > l ? f : l;
      },
      0
    );
    if (this.groupWidth = r, Ct()) {
      const l = this.shapes.slice(0, -1).reduce((f, h) => f + h.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, h) => f + h[n], 0) + l;
      kt([
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
    const e = Oa(this.direction), i = Gt(e);
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
const gf = (t, e) => Ce(t, e), Kr = () => Ce(
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
), mf = () => Ce(
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
  Ci(
    (e) => e === "" || e === null ? null : e,
    he([
      // Remove custom messages - let the error map handle translation with TOO_SMALL key
      t.allowZero ? d().min(0) : d().gt(0),
      m(),
      wt()
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
), yf = () => Ce(
  Ci(
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
), bf = (t) => Ce(
  m().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), vf = () => Ce(
  m().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), wf = () => Ce(
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
), Sf = () => Ce(
  Yc().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), xf = (t) => Ce(
  D().default(!1),
  t
), kf = (t, e) => Ce(
  ue(t),
  e
), Qt = {
  field: Ce,
  boolean: xf,
  enum: kf,
  custom: gf
}, If = B({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: m().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: m().optional().describe("Reference marker for object recreation")
}), Cf = B({
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
}), Pf = Ci(
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
), Tf = B({
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
  q: yf(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: bf(),
  material: vf(),
  // ========== Cost ==========
  cost: wf(),
  // ========== Trim Configuration ==========
  trim: Pf,
  // ========== Rotation (Runtime) ==========
  rot: _o.default(0),
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
  notes: Sf()
}), Ks = B({
  ...If.shape,
  // System properties from AutoSerializable
  ...Rt.shape,
  ...Tf.shape,
  // Core business fields
  ...Cf.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: m().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), Wo = {
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
function Af(t, e, i) {
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
function Of(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(Pi.map((r) => [r, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
  if (!t) return n;
  const a = t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t) ? {
    l1: t.x1 ?? t.l1 ?? 0,
    l2: t.x2 ?? t.l2 ?? 0,
    w1: t.y1 ?? t.w1 ?? 0,
    w2: t.y2 ?? t.w2 ?? 0
  } : t;
  return i ? Object.keys(n).forEach((r) => {
    n[r] = a[r] ?? 0;
  }) : Object.keys(n).forEach((r) => {
    const l = a[r];
    l != null && (n[r] = Z({ v: l, nf: e }));
  }), n;
}
const $f = ["efficiency", "guillotine", "beam", "none"], uo = ["l", "w", "flex", "none"], Ff = ["efficiency", "time"], Lf = ["l", "w"], Zr = ["efficiency", "smallest"], Ef = ["dimensions", "identical", "none"], Zs = ["sheet", "linear", "roll"], vn = he([
  d().int().positive(),
  wt(),
  Kc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), wn = ue($f).nullable().optional().transform((t) => t === null ? void 0 : t), Sn = ue(uo).nullable().optional().transform((t) => t === null ? void 0 : t), Ho = ue(Zr).default("efficiency").describe("Method for selecting stocks"), Uo = ue(Ef).default("identical").describe("How to stack identical parts"), xn = B({
  strategy: ue(Ff).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: D().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Yo = B({
  primaryCompression: ue(Lf).default("w")
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
  efficiencyOptions: Yo,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Ho,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Uo
});
const Ko = d().min(0).default(0), Zo = d().min(0).default(0), Xs = d().min(0).default(0), Df = B({
  dimension: Zo,
  minSpacing: Xs
});
function fo(t) {
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
function ho(t, e) {
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
const Rf = Ce(
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
), Mf = Ce(
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
), _f = Ce(
  Ho,
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
), Bf = Ce(
  Uo,
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
), jf = Ce(
  xn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Vf = Ce(
  Yo,
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
      Ko,
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
  cutType: Rf,
  cutPreference: Mf,
  // ========== Guillotine Options ==========
  guillotineOptions: jf,
  // ========== Efficiency Options ==========
  efficiencyOptions: Vf,
  // ========== General Options ==========
  options: B({
    stockSelection: _f,
    minSpacing: he([
      m(),
      Xs
    ]),
    stackingMode: Bf,
    minSpacingDimension: B({
      dimension: he([
        m(),
        Zo,
        wt()
      ]).optional(),
      minSpacing: he([
        m(),
        Xs,
        wt()
      ]).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Nf = {
  // Include validation computed properties (isValid)
  ...ei,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => fo(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => ho(t.stockType, t.cutType),
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
  orientationLock: mf(),
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
  stockMatch: lf.nullable().optional(),
  // ========== Custom Data ==========
  customData: Ce(
    cf,
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
}), Gf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Wo,
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
}), qf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Wo
  // InputStock doesn't define additional computed properties
}, Xo = Rt.extend({
  // ========== Identification ==========
  id: m().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ee(m()).default([]).describe("List of shape IDs in this group"),
  shapes: ee(m()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: zo,
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
}), zf = {
  // Include validation computed properties (isValid)
  ...ei
  // InputUserGroup doesn't define additional computed properties
};
B({
  parts: ee(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: zo,
  q: d().int().min(1).describe("Quantity of groups")
});
function Qs() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function _i(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ui(t) {
  return t.issues.map((e) => {
    const i = {}, s = e.path.length > 0 ? e.path[e.path.length - 1] : "field", n = typeof s == "symbol" ? String(s) : s;
    if (i.field = `fields.${n}`, e.code === "too_small") {
      const o = e;
      o.minimum !== void 0 && (i.minimum = o.minimum, i.min = o.minimum);
    }
    if (e.code === "too_big") {
      const o = e;
      o.maximum !== void 0 && (i.maximum = o.maximum, i.max = o.maximum);
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
function Fa(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Ui(i.error);
}
const Xr = {
  clearValidation: Qs,
  addIssue: _i,
  validateWithSchema: Fa,
  zodErrorsToIssues: Ui,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return Qs.call(this), e.skipSchemaValidation || Fa(t, this).forEach((s) => _i.call(this, s)), this.issues || [];
  }
};
class Jr extends We {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ks;
  static computedProperties = Wo;
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
    const s = { ...e }, n = !!s.skipValidation, o = ["l", "w", "t", "cost"];
    for (const a of o)
      s[a] === null || s[a] === void 0 ? delete s[a] : s[a] !== void 0 && (s[a] = Af(s[a], i, n), s[a] === null && delete s[a]);
    s.name?.length ? s.name = bu(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Of(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
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
    const e = typeof this.l == "number" ? this.l : parseFloat(String(this.l)) || 0, i = typeof this.w == "number" ? this.w : parseFloat(String(this.w)) || 0, s = e > i ? e : i, n = e < i ? e : i, o = {
      l: Z({ v: s }),
      w: Z({ v: n })
    }, a = typeof this.trim.l1 == "number" ? this.trim.l1 : parseFloat(String(this.trim.l1)) || 0, r = typeof this.trim.l2 == "number" ? this.trim.l2 : parseFloat(String(this.trim.l2)) || 0, l = typeof this.trim.w1 == "number" ? this.trim.w1 : parseFloat(String(this.trim.w1)) || 0, c = typeof this.trim.w2 == "number" ? this.trim.w2 : parseFloat(String(this.trim.w2)) || 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: o.l - (Z({ v: a }) + Z({ v: r })),
      w: o.w - (Z({ v: l }) + Z({ v: c }))
    };
  }
}
const po = Rt.extend({
  // Core properties from shared schema
  stockType: dn,
  stackHeight: vn.describe("Maximum stack height"),
  cutType: wn,
  cutPreference: Sn,
  // Blade width (numeric for runtime)
  bladeWidth: Ko.describe("Blade width"),
  // Guillotine options
  guillotineOptions: xn,
  // Efficiency options
  efficiencyOptions: Yo,
  // General options (nested stockSelection and stackingMode)
  options: B({
    stockSelection: Ho,
    minSpacing: Xs,
    stackingMode: Uo,
    minSpacingDimension: Df
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), Wf = {
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
po.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
class Qr extends We {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = po;
  static computedProperties = Wf;
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
  static defaults = po.parse({});
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
function Jo(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, o] of Object.entries(e)) {
    const a = t[n];
    switch (o.type) {
      case "number":
        a != null ? s[n] = typeof a == "string" ? Z({ v: a, nf: i }) : a : a === null && (s[n] = null);
        break;
      case "trim":
        if (a) {
          const r = {};
          for (const [l, c] of Object.entries(a))
            r[l] = typeof c == "string" ? Z({ v: c, nf: i }) : c;
          s[n] = r;
        }
        break;
      case "omit":
        delete s[n];
        break;
      case "set":
        s[n] = o.value;
        break;
      case "transform":
        s[n] = o.transform(a);
        break;
      case "rename":
        a !== void 0 && (s[o.to] = a, delete s[n]);
        break;
    }
  }
  return s;
}
const Hf = {
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
}, Uf = {
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
}, Yf = {
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
class el extends We {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Js;
  static computedProperties = Nf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = fo(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = ho(this.stockType, this.cutType);
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
        isNaN(i) || i < 0 ? _i.call(this, new ie({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && _i.call(this, new ie({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? _i.call(this, new ie({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && _i.call(this, new ie({
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
    const n = fo(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const o = i !== this.stockType, a = s !== this.cutType;
    if (o || a) {
      const r = ho(this.stockType, this.cutType);
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
    const e = this.toData(), i = Jo(
      e,
      Yf
    );
    return new Qr(i);
  }
}
const tl = Pt, La = ut;
Pi.map((t) => `side.${t}`), La.map((t) => `face.${t}`), La.map((t) => `face.${t}`), tl.map((t) => `side.${t}`);
const il = ["radius", "bevel"], Kf = Rt.extend({
  // Corner type
  type: ue(il).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Zf = {
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
class Gi extends We {
  // Zod schema for validation and serialization
  static schema = Kf;
  static computedProperties = Zf;
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
    return new Gi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Gi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Gi({ type: "bevel", size: e, index: i });
  }
}
const sl = ["l1", "l2", "w1", "w2"], Xf = Rt.extend({
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
}), Jf = {
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
}, Qf = ["regular", "hinge", "shelf"], eh = Rt.extend({
  // Position
  x: d().min(0).default(0).describe("X position from left edge"),
  y: d().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: d().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: d().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: d().default(0).describe("Face index (0=front, 1=back)"),
  type: ue(Qf).default("regular").describe("Type of hole")
}), th = {
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
class Nt extends We {
  // Zod schema for validation and serialization
  static schema = eh;
  static computedProperties = th;
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
class en extends We {
  // Zod schema for validation and serialization
  static schema = Xf;
  static computedProperties = Jf;
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
    return this.generateHoles(i, s).map((o) => new Nt(o));
  }
  /**
   * Generate individual holes from this hinge hole set
   */
  generateHoles(e, i) {
    const s = [];
    if (this.numHoles <= 0) return s;
    const n = this.numHoles > 1 ? (this.hingeLength - 2 * this.outerSpacing) / (this.numHoles - 1) : 0;
    for (let o = 0; o < this.numHoles; o++) {
      const a = this.outerSpacing + o * n;
      let r, l;
      switch (this.side) {
        case "l1":
          r = this.distanceFromEdge, l = this.position + a;
          break;
        case "l2":
          r = e - this.distanceFromEdge, l = this.position + a;
          break;
        case "w1":
          r = this.position + a, l = this.distanceFromEdge;
          break;
        case "w2":
          r = this.position + a, l = i - this.distanceFromEdge;
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
const ih = Rt.extend({
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
  enabled: D().default(!0).describe("Whether machining is enabled")
}), sh = {
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
let nh = class go extends We {
  // Zod schema for validation and serialization
  static schema = ih;
  static computedProperties = sh;
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
    return i === "holes" ? this.holes.forEach((o, a) => {
      (o.x < 0 || o.y < 0) && n.push(new ie({
        message: `Hole ${a + 1}: Position cannot be negative`,
        type: "error"
      })), o.diameter <= 0 && n.push(new ie({
        message: `Hole ${a + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((o, a) => {
      o.position < 0 && n.push(new ie({
        message: `Hinge ${a + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((o, a) => {
      o.size <= 0 && n.push(new ie({
        message: `Corner ${a + 1}: Size must be positive`,
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
    const i = e instanceof Gi ? e : new Gi(e);
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
      this.generateHingeHoles(s, e).forEach((o) => {
        i.push(o instanceof Nt ? o : new Nt(o));
      });
    }), i;
  }
  /**
    * Generate individual holes from a hinge hole set
    */
  generateHingeHoles(e, i) {
    const s = [];
    if (e.numHoles <= 0) return s;
    const n = e.numHoles > 1 ? (e.hingeLength - 2 * e.outerSpacing) / (e.numHoles - 1) : 0, o = i?.l || i?.longSide || 0, a = i?.w || i?.shortSide || 0;
    for (let r = 0; r < e.numHoles; r++) {
      const l = e.outerSpacing + r * n;
      let c, u;
      switch (e.side) {
        case "l1":
          c = e.distanceFromEdge, u = e.position + l;
          break;
        case "l2":
          c = o - e.distanceFromEdge, u = e.position + l;
          break;
        case "w1":
          c = e.position + l, u = e.distanceFromEdge;
          break;
        case "w2":
          c = e.position + l, u = a - e.distanceFromEdge;
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
    return new go();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new go(e);
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
const oh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Mr(t, "orientationLock", ["l", "w"], e, i, s), s;
}, ah = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Mr(t, "grain", ["l", "w"], e, i, s), s;
}, rh = ({ item: t, index: e, isWarning: i = !1 }) => {
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
}, lh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = _e(t, "customData");
  if (o == null) return n;
  if (typeof o != "object" || o === null)
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
  for (const [, a] of Object.entries(o))
    if (a != null) {
      const r = typeof a;
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
}, ch = ({ item: t, index: e }) => {
  const i = _e(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, uh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = _e(t, "x");
  return a === null || a === "" || a === void 0 || i != null && Z({ v: a }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: ze("x", { returnKey: !0 }),
      // positional (legacy)
      field: ze("x", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["x"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, dh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = _e(t, "y");
  return a === null || a === "" || a === void 0 || i != null && Z({ v: a }) > i && new ie({
    item: t,
    message: "errors.validation.less_than_or_equal",
    params: {
      0: ze("y", { returnKey: !0 }),
      // positional (legacy)
      field: ze("y", { returnKey: !0 }),
      // named (new)
      1: i,
      // positional (legacy)
      max: i
      // named (new)
    },
    field: [["y"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, fh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = _e(t, "l");
  return (a === null || a === "" || a === void 0) && new ie({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: ze("l", { returnKey: !0 }),
      // positional (legacy)
      field: ze("l", { returnKey: !0 })
      // named (new)
    },
    field: [["l"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, hh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = _e(t, "w");
  return (a === null || a === "" || a === void 0) && new ie({
    item: t,
    message: "errors.validation.not_set",
    params: {
      0: ze("w", { returnKey: !0 }),
      // positional (legacy)
      field: ze("w", { returnKey: !0 })
      // named (new)
    },
    field: [["w"]],
    index: e !== void 0 ? [e] : null,
    type: s ? "warning" : "error",
    issues: o,
    category: n
  }), o;
}, ph = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: o = [] }) => {
  const a = [], r = _e(t, "t");
  return n?.cutType === "beam" && !r && new ie({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: a,
    category: o
  }), a;
}, gh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = _e(t, "q"), a = _e(t, "autoAdd");
  return o == null || a === !0, n;
}, mh = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: o = ["group"]
}) => {
  const a = [];
  return i.length < s && new ie({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: a,
    category: o
  }), a;
}, yh = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const o = [];
  return i.forEach((a, r) => {
    !(typeof a.isSquare == "function", a.isSquare) && !["l", "w"].includes(a.orientationLock) && new ie({
      item: t,
      message: Dt("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: o,
      category: n
    });
  }), o;
}, bh = ({
  item: t,
  index: e,
  shapes: i,
  joinDirection: s,
  isWarning: n = !1,
  category: o = ["group"]
}) => {
  const a = [];
  if (i.length < 2) return a;
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
      issues: a,
      category: o
    });
  }), a;
}, vh = ({
  item: t,
  index: e,
  shapeId: i,
  requiredQuantity: s,
  availableQuantity: n,
  shapeName: o,
  shapeIndex: a,
  isWarning: r = !1,
  category: l = ["group"]
}) => {
  const c = [];
  return s > n && new ie({
    item: t,
    message: Dt("errors.groups.not_enough_of_part", {
      0: o || (a ?? 0) + 1,
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
function wh(t) {
  return be(t) || Ze(t) || us(t);
}
function Sh(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function xh(t, e, i) {
  return i ? !Se(t.t) || !Se(e.t) ? !1 : Ze(t) ? ne.equalTo(Z({ v: t.t }), Z({ v: e.t })) : t.t === e.t : !0;
}
function kh(t, e, i) {
  return i?.stockType !== "linear" || !Ze(t) && !be(t) ? !0 : vt(t, 0, e) && ne.equalTo(Z({ v: t.w }), Z({ v: e.w })) || vt(t, 1, e) && ne.equalTo(Z({ v: t.l }), Z({ v: e.w }));
}
function Ih(t, e, i, s = 0) {
  const n = be(t[0]), o = i.stockType;
  if (t.some((C) => Se(C.stockLock) && C.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((C) => n || C.autoAdd === !0 || Se(C.q) && C.q > 0);
  const r = e.some((C) => Se(C.material)), l = e.some((C) => Se(C.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), p = [];
  let k = s;
  for (const C of t) {
    const A = e.map((V, R) => {
      const F = wh(C) && Hi(C, V, void 0, i), H = Sh(C, V, r), j = xh(C, V, l), g = kh(C, V, i);
      return {
        stockItem: V,
        stockIndex: R,
        fit: F,
        material: H,
        thickness: j,
        width: g,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: F && H && j && (o !== "linear" || g)
      };
    });
    C.stockMatch = {
      fit: A.some((V) => V.fit),
      material: !r || A.some((V) => V.material),
      thickness: !l || A.some((V) => V.thickness),
      width: o !== "linear" || A.some((V) => V.width)
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
      index: [k],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !C.stockMatch.thickness && (h.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["t"]],
      index: [k],
      message: "errors.validation.no_matching_stock_thickness"
    }))), o === "linear" && !C.stockMatch.width && (f.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["w"]],
      index: [k],
      message: "errors.validation.no_matching_stock_width"
    }))), C.stockMatch.material && C.stockMatch.thickness && (o !== "linear" || C.stockMatch.width) && (h.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["material"], ["t"]],
      index: [k],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(C), p.push(new ie({
      category: ["part", "stock"],
      item: C,
      field: [["l"], ["w"]],
      index: [k],
      message: "errors.validation.will_not_fit"
    }))), k++;
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
function Ch(t) {
  return t?.issues?.length > 0;
}
const Ph = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const o = [], a = i.stockType, r = _e(t, "q"), l = _e(t, "l"), c = _e(t, "w");
  return !r || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, a), Ch(t)) || Ih([t], e, i, n).newIssues.forEach((f) => {
    o.push(f);
  }), o;
}, Th = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const o = _e(t, "l"), a = _e(t, "w");
  if (!o || !a) return n;
  try {
    const r = Z({ v: e }), l = Z({ v: o }), c = Z({ v: a }), u = l - r * 2, f = c - r * 2;
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
}, Ah = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], o = _e(t, "l"), a = _e(t, "w"), r = _e(t, "trim");
  if (!o || !a || !r) return n;
  if ((!Et(t) || Et(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
    try {
      const c = Z({ v: o }), u = Z({ v: a }), f = (E) => {
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
      }, p = h.w1 + h.w2, k = h.l1 + h.l2;
      p >= c && new ie({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${ze("w1").toUpperCase()} + ${ze("w2").toUpperCase()}`,
          // positional (legacy)
          1: ze("l"),
          // positional (legacy)
          2: c,
          // positional (legacy)
          trimFields: `${ze("l1", { returnKey: !0 })} + ${ze("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: ze("l", { returnKey: !0 }),
          // named (new)
          maxValue: c
          // named (new)
        },
        field: [["trim", "w1"], ["trim", "w2"]],
        index: [e],
        type: i ? "warning" : "error",
        issues: n,
        category: s
      }), k >= u && new ie({
        item: t,
        message: "errors.trim.too_much",
        params: {
          0: `${ze("l1").toUpperCase()} + ${ze("l2").toUpperCase()}`,
          // positional (legacy)
          1: ze("w"),
          // positional (legacy)
          2: u,
          // positional (legacy)
          trimFields: `${ze("l1", { returnKey: !0 })} + ${ze("l2", { returnKey: !0 })}`,
          // named (new)
          dimension: ze("w", { returnKey: !0 }),
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
}, ot = {
  // Dimensions
  x: uh,
  y: dh,
  l: fh,
  w: hh,
  t: ph,
  q: gh,
  // Trim
  trim: Ah,
  partTrim: Th,
  // Custom
  customData: lh,
  banding: rh,
  orientationLock: oh,
  grain: ah,
  machining: ch,
  // Stock
  stockMatch: Ph,
  // Groups
  groupShapeCount: mh,
  groupOrientationLock: yh,
  groupDimensions: bh,
  groupQuantity: vh
};
class Oh extends Jr {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return ss;
  }
  static get computedProperties() {
    return Gf;
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
      machining: e.machining || new nh({
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
      fields: o = null
    } = e, a = (l) => !o || o.includes(l);
    a("l") && ot.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), a("w") && ot.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), a("t") && ot.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), a("q") && ot.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), a("trim") && ot.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, a("customData") && ot.customData({
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
    const i = Jo(
      this.toData(),
      Hf,
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
const $h = B({
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
}), Fh = B({
  stock: ge("Stock", { nullable: !0 }).optional(),
  number: d().int().min(1).optional()
}), mo = B({
  ...fn.shape,
  ...$r.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: d().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: d().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: $h.optional().behavior({ clone: "reset" }),
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
  stack: Fh.optional().describe("Stack information").behavior({ clone: "reset" }),
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
mo.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(nl)
}));
class tn extends gn {
  static schema = mo;
  static computedProperties = nl;
  static defaults = mo.parse({});
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
      const n = ot.q({ item: e, index: e?.index });
      i.push(...n);
    }
    const s = ot.grain({ item: e, index: e?.index });
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
    return e.reduce((n, o) => {
      const a = o.l * o.w * (o.q || 1);
      return n + a;
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
    const s = [...e].sort((n, o) => {
      const a = n.l * n.w;
      return o.l * o.w - a;
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
    const s = Jd(e.filter((o) => o.added && o.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ne.equalTo(n, this.l) ? n : n + i;
  }
}
class Hw extends Jr {
  // Required: Define schema and computed properties for SchemaClass
  static schema = xi;
  static computedProperties = qf;
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
        this.issues[h].field.some((k) => c.includes(k[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((k) => c.includes(k[0])) && this.warnings.splice(h, 1);
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
          const k = Ui(p.error);
          this.issues = [...this.issues, ...k];
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
    const o = e?.fields, a = (c) => !o || o.includes(c);
    ["l", "w", "t"].forEach((c) => {
      a(c) && ot[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), a("grain") && ot.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), a("trim") && ot.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), a("q") && ot.q({
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
    const o = Jo(
      s,
      Uf,
      e
    );
    return (i || this.saw) && (o.saw = i || this.saw), new tn(o);
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
class Uw extends We {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Xo;
  static computedProperties = zf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    const i = {
      ...e,
      shapes: e.shapes?.map(String) ?? []
    };
    if (super(i), this.validateInputUserGroup(i), e.shapeList?.length) {
      const s = this.validateWithShapes(e.shapeList);
      this.issues.push(...s.filter((n) => !this.issues.find((o) => o.message === n.message)));
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
    this.clearValidation(), e.q !== void 0 && ot.q({ item: e, index: "index" in e && typeof e.index == "number" ? e.index : 0 }).filter((s) => s).forEach((s) => this.addIssue(s));
  }
  /**
    * Validate with actual shape data
    */
  validateWithShapes(e = []) {
    if (!e.length)
      throw new Error("A shapeList is required to validate an InputUserGroup.");
    const i = [...this.issues], s = this.findShapes(e), n = ot.groupShapeCount({
      item: this,
      index: 0,
      shapes: s,
      requiredCount: 2
    });
    if (i.push(...n), i.length) return i;
    const o = ot.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...o), i.length) return i;
    const a = this.joinDimension, r = ot.groupDimensions({
      item: this,
      index: 0,
      shapes: s,
      joinDirection: a
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
        const o = e.find((a) => !!(a.autoId === n || be(a) && a.autoId === n || "id" in a && a.id === n));
        o && (be(o) || Ze(o)) && s.push(o);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ie({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((o) => !!(o.autoId === s || String(o.autoId) === String(s) || "id" in o && (o.id === s || String(o.id) === String(s)) || be(o) && (o.autoId === s || String(o.autoId) === String(s))));
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
      const h = s.filter((k) => be(k) || Ze(k)), p = this.validateWithShapes(h);
      if (p.filter((k) => k.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${p[0].message}`);
    }
    const o = this.findShapes(s || []);
    if (o.length === 0)
      throw new Error("No shapes found for Group creation");
    const a = o.map((h) => be(h) ? h.toShape() : h), r = a[0];
    a.forEach((h) => {
      if (s && Array.isArray(s)) {
        const p = s.findIndex((k) => "group" in k && k.group?.inUserGroup ? !1 : "parentId" in k && "parentId" in h && k.parentId === h.parentId || "id" in k && "id" in h && k.id === h.id);
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
    this.direction === "horizontal" ? (c = r.w, a.forEach((h) => l += h.l)) : (l = r.l, a.forEach((h) => c += h.w));
    const u = {
      autoId: this.autoId,
      // Use the same autoId as the InputUserGroup
      shapes: a,
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
const Lh = B({
  id: m(),
  x: d(),
  y: d(),
  diameter: d(),
  depth: d(),
  face: he([me(0), me(1)]),
  type: m().nullable().optional(),
  valid: D().optional()
}), Eh = B({
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
}), Dh = B({
  type: ue(il).nullable(),
  size: d(),
  valid: D().optional()
});
B({
  holes: ee(Lh).optional(),
  hingeHoles: ee(Eh).optional(),
  corners: we(m(), Dh).optional()
});
B({});
const Rh = ["l", "w"], Mh = ds.extend({
  // Identity - offcuts need IDs for tracking and export
  id: m().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: D().default(!1),
  flex: ue(Rh).optional(),
  // Cost is calculated, not set
  cost: d().min(0).nullable().default(0)
}), _h = {
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
class ol extends qo {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Mh;
  static computedProperties = _h;
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
    return new ol({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
const Bh = B({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: he([
    Zc(m(), ge("Point")),
    we(m(), ge("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), jh = {
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
class ti extends We {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Bh;
  static computedProperties = jh;
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
const al = ["root", "firstShape", "near", "far", ""], Vh = fn.extend({
  // Cutting information
  cuts: Fe("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: ge("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: d().int().min(0).nullable().default(null),
  cutDirection: ue(Bo).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: D().default(!1),
  firstShape: ge("Shape"),
  children: Fe("Segment", {
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
  type: ue(al).nullable().default(null),
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
  type: ue(al),
  parent: xe(),
  // Segment instance
  stock: xe(),
  // Stock instance
  offcut: D().optional(),
  merged: D().optional(),
  cutDirection: ue(Bo).nullable().optional()
});
const Nh = {
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
class Yw extends gn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Vh;
  static computedProperties = Nh;
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
        Ct() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${i.autoId} to ${this.autoId}`);
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
function Gh(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function yo(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => yo(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return Gh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = yo(i[s], e));
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
  const n = t.__ref || s, o = cn();
  if (n && o.has(n)) {
    const a = o.get(n), { __ref: r, __entityType: l, __context: c, ...u } = t, f = new a(u);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((h) => h instanceof ie ? h : ie.fromData(h, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((h) => h instanceof ie ? h : ie.fromData(h, f))), f;
  }
  return delete t.__context, t;
}
function bi(t, e) {
  if (e || (e = rl()), Array.isArray(t)) {
    const n = [];
    for (const o of t) {
      const a = bi(o, e);
      n.push(a), a && typeof a == "object" && (a.autoId || a.id) && _s(e, [a]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && _s(e, [t]), t;
  const i = yo(t, e), s = ll(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && _s(e, [s]), s;
}
function Kw(t, e) {
  const i = rl(e), s = t?.saw ? bi(t.saw, i) : void 0;
  s && _s(i, [s]);
  const n = t?.stockList ? bi(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const o = t?.shapeList ? bi(t.shapeList, i) : [];
  o.length > 0 && (i.shapeList = o);
  const a = t?.cutList ? bi(t.cutList, i) : [], r = t?.segmentList ? bi(t.segmentList, i) : [];
  r.length > 0 && (i.segmentList = r);
  const l = t?.offcuts ? bi(t.offcuts, i) : [];
  return {
    saw: s,
    stockList: n,
    shapeList: o,
    cutList: a,
    segmentList: r,
    offcuts: l,
    context: i
  };
}
function Zw(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => qh(n, e, i)).filter((n) => He(n)) : [] : [];
}
function qh(t, e, i) {
  if (t.type === "user") {
    const n = e.find((o) => o.id === t.id);
    n && (e = n.shapes);
  }
  t.container = i;
  let s = [];
  t.shapes && (s = t.shapes.map((n) => {
    if (n && n.__ref && (n.autoId || n.id)) {
      const o = n.autoId || n.id;
      return e.find((a) => a.autoId === o || a.id === o);
    }
    return n && n.id ? e.find((o) => o.id === n.id) : n;
  }).filter(Boolean)), t.shapes = s;
  try {
    const n = cn(), o = n.get("Group") || n.get(se.Group);
    if (o) {
      const a = new o(t);
      return a.shapes && Array.isArray(a.shapes) && a.shapes.forEach((r) => {
        r && typeof r == "object" && r.group && (r.group.reference = a, r.group.inGroup = !0, a.added && (r.group.addedAsGroup = a.id || a.autoId));
      }), a;
    }
    return !1;
  } catch {
    return !1;
  }
}
function Xw(t, e) {
  Ct() && (t.stocks && t.stocks.forEach((i, s) => {
    Et(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !Ze(i) && !He(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    ji(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    He(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
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
const Bi = ft("logs"), bo = ft("cuts"), sn = ft("groups"), nn = ft("guillotine"), vo = ft("results"), wo = ft("scoring"), So = ft("firstShapes"), xo = ft("calculations"), ko = ft("subset"), Io = ft("secondRun"), Co = ft("stack"), on = ft("errors"), Po = ft("allStock"), an = ft("reset");
on.color = 1;
sn.color = 14;
nn.color = 159;
an.color = 11;
function zh(t = "info", e, i) {
  const s = e.map((a) => {
    const r = { ...a };
    for (const l in r)
      typeof r[l] == "string" && r[l].length > 30 && (r[l] = r[l].slice(0, 50) + "...");
    return r;
  }), n = console.table;
  let o = "";
  switch (console.table = (a, r) => {
    const l = console.log;
    console.log = (c) => {
      o += c + `
`;
    }, n(a, r), console.log = l;
  }, console.table(s, i), t) {
    case "info":
      Bi(o);
      break;
    case "guillotine":
      nn(o);
      break;
    case "results":
      vo(o);
      break;
    case "secondRun":
      Io(o);
      break;
    case "cuts":
      bo(o);
      break;
    case "scoring":
      wo(o);
      break;
    case "calculations":
      xo(o);
      break;
    case "stack":
      Co(o);
      break;
    case "subset":
      ko(o);
      break;
    case "errors":
      on(o);
      break;
    case "allStock":
      Po(o);
      break;
    case "firstShapes":
      So(o);
      break;
    case "groups":
      sn(o);
      break;
    case "reset":
      an(o);
      break;
    default:
      Bi(o);
  }
  console.table = n;
}
const Wh = "\x1B[31m", Hh = "\x1B[0m", Jt = (t = "info", e, i = null, s = null, n = !1) => {
  if (n) {
    switch (t) {
      case "info":
        Bi(e);
        break;
      case "guillotine":
        nn(e);
        break;
      case "results":
        vo(e);
        break;
      case "secondRun":
        Io(e);
        break;
      case "cuts":
        bo(e);
        break;
      case "scoring":
        wo(e);
        break;
      case "calculations":
        xo(e);
        break;
      case "stack":
        Co(e);
        break;
      case "subset":
        ko(e);
        break;
      case "errors":
        on(`${Wh}${e}${Hh}`);
        break;
      case "allStock":
        Po(e);
        break;
      case "firstShapes":
        So(e);
        break;
      case "groups":
        sn(e);
        break;
      case "reset":
        an(e);
        break;
      default:
        Bi(e);
    }
    if (i)
      switch (t) {
        case "info":
          Bi(i);
          break;
        case "guillotine":
          nn(i);
          break;
        case "results":
          vo(i);
          break;
        case "secondRun":
          Io(i);
          break;
        case "cuts":
          bo(i);
          break;
        case "scoring":
          wo(i);
          break;
        case "calculations":
          xo(i);
          break;
        case "stack":
          Co(i);
          break;
        case "subset":
          ko(i);
          break;
        case "errors":
          on(i);
          break;
        case "allStock":
          Po(i);
          break;
        case "firstShapes":
          So(i);
          break;
        case "groups":
          sn(i);
          break;
        case "reset":
          an(i);
          break;
        default:
          Bi(i);
      }
    s && zh(t, s);
  }
};
function Jw(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((o) => o.added);
  for (const o of i) {
    let a = !1, r = !1;
    if (t.dimension === "l" ? (a = ne.greaterThan(t.x2, o.x) && ne.lessThan(t.x1, o.x + o.l), r = ne.greaterThan(t.y1 + n, o.y) && ne.lessThan(t.y1 - n, o.y + o.w)) : t.dimension === "w" && (a = ne.greaterThan(t.x1 + n, o.x) && ne.lessThan(t.x1 - n, o.x + o.l), r = ne.greaterThan(t.y2, o.y) && ne.lessThan(t.y1, o.y + o.w)), a && r)
      if (s) t.shapeCollisions.push(o);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function ri(t, e, i, s, n = null, o = null) {
  return new vi({ x1: t, y1: e, x2: i, y2: s, origin: n, type: o });
}
function Uh(t, e) {
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
function To(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      Yh(
        s,
        e
      );
    }
}
function Yh(t, e) {
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
function Qw(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), To(
    e,
    t
  );
  const n = t.bladeWidth, o = [];
  let a = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (a = 1), i === "l" ? e.sort(
    zt.LD
  ) : e.sort(
    zt.WD
  ), s || (s = e[0]);
  function r(u, f = !0) {
    f && zt.shuffle(
      e
    );
    const h = Ao(
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
    o,
    !1
  );
  for (let u = a; u--; ) r(
    o
  );
  if (o.sort(
    (u, f) => f.score.efficiency - u.score.efficiency
  ), !o.length) return !1;
  const l = o[0];
  let c = null;
  return l.totalLength + n < t.l && (c = t.l - (l.totalLength + n), l.offcut = c), l;
}
function Kh(t, e, i, s = "l", n, o = !1, a = this.config.subset.shuffles, r = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (k, E) => E[s] - k[s],
    // Largest first
    (k, E) => k[s] - E[s],
    // Smallest first
    (k, E) => E[s] / E.area - k[s] / k.area,
    // Best dimension-to-area ratio
    (k, E) => E.area - k.area,
    // Largest area first
    (k, E) => k.area - E.area
    // Smallest area first
  ], f = e.every(
    (k, E, L) => E === 0 || k.isIdentical(L[E - 1])
  );
  if (!o) {
    const k = e.reduce((E, L) => E + L[s] + t, 0) - t;
    if (k <= n)
      return k / n > l ? {
        totalLength: k,
        shapes: e,
        firstShape: e[0],
        firstShapeRotation: e[0].rot,
        stock: i,
        cutType: "guillotine",
        type: "subset",
        score: {
          efficiency: k / n,
          totalShapesPlaced: e.length
        },
        area: e.reduce((E, L) => E + L.area, 0)
      } : !1;
  }
  const h = Ao(t, e, i, s, n, o, r);
  if (h !== !1 && (c.push(h), h.score.efficiency > 0.95 && e.length > 10))
    return h;
  if (f)
    return c[0] || !1;
  const p = Math.min(a, u.length);
  for (let k = 0; k < p; k++) {
    const E = [...e];
    E.sort(u[k % u.length]);
    const L = Ao(t, E, i, s, n, o, r);
    if (L !== !1 && (c.push(L), L.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((k, E) => E.score.efficiency - k.score.efficiency), c[0] || !1;
}
function Ao(t, e, i, s = "l", n, o = !1, a = null) {
  if (!n || n <= 0 || e?.length < 1) return !1;
  let r = 0;
  const l = [];
  if (a || (a = e[0]), l.push(a), r = a[s], r > n) return !1;
  const c = e.findIndex(
    (u) => u.id === a?.id
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
  if (a && e.splice(
    c,
    0,
    a
  ), !o && r <= n || o && r + t >= n && r <= n) {
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
      firstShape: a,
      firstShapeRotation: a?.rot,
      area: l.reduce(
        (f, h) => f + h.area,
        0
      )
    };
  }
  return !1;
}
function Zh(t, e, i = null, s = "l", n = !0, o = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const a = s === "l" ? "x" : "y", r = s === "l" ? "y" : "x";
  let l = 0;
  He(i) ? To(
    t,
    i
  ) : To(
    t,
    i ?? e
  ), o && (s === "l" ? t.sort(
    zt.LDIDA
  ) : t.sort(
    zt.WDIDA
  )), t.forEach(
    (c, u) => {
      c[a] = i ? i[a] + l : l, i && (c[r] = i[r]), l += c[a === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), kt(
        [() => tt(
          l
        ).to.be.a(
          "number"
        )]
      ), He(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function eS(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    zt.ID
  );
  const n = t.shapes;
  return Zh(
    n,
    e,
    null,
    s
  ), n;
}
function tS(t, e, i) {
  Jt("subset", `guillotine subset for segment ${t.id}`);
  function s($, x = []) {
    const { shapes: V } = a($);
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
  function o($, x, V, R = null) {
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
    if (Ct() && (n(
      F,
      $
    ), kt(
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
  function a($) {
    const x = $;
    return A.has(x) || A.set(x, { shapes: [], priorities: [] }), A.get(x);
  }
  function r($ = null) {
    function x(R, F, H) {
      const { shapes: j, priorities: g } = a(F);
      j.includes(R) || (j.push(R), g.push(H));
    }
    if (!k?.length) return A;
    const V = t.getStock;
    for (const R of k) {
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
        if (kt([() => tt(j.length).to.equal(1)]), nt(
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
    if (!k?.length) return [];
    if (!A.size) return [];
    const x = /* @__PURE__ */ new Map();
    let V = 0;
    const R = [], F = [], H = [];
    let j = null, g = !0;
    for (let P = 0; P < this.config.subset.guillotine.shuffles; P++) {
      V = 0, R.length = 0, F.length = 0, H.length = 0, j = null, g = !0;
      const _ = l();
      for (const W of _) {
        if (g ? j = W : j = h + W, V + j > p) continue;
        const N = o(
          W,
          F,
          H,
          $
        );
        N && (V = c(
          W,
          g ? 0 : h,
          V,
          R,
          H,
          N,
          F
        ), g = !1);
      }
      if (V) {
        const W = V / p;
        if (kt([() => tt(W).to.lessThanOrEqual(1)]), W < this.config.subset.efficiency.limit) continue;
        const N = F.map((fe, de) => de);
        N.sort((fe, de) => H[de] !== H[fe] ? H[de] - H[fe] : R[de] - R[fe]);
        const G = N.map(
          (fe) => R[fe]
        ), le = N.map(
          (fe) => F[fe]
        );
        kt([
          () => tt(of(le)).to.be.false
        ]), x.set(
          G.join("-"),
          {
            usedDimensions: G,
            usedShapes: le,
            efficiency: W,
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
          (_, W) => {
            const N = P.usedDimensions[W];
            kt([() => tt([_.l, _.w].includes(N)).to.be.true]);
            let G;
            _.isSquare ? G = 0 : _.longSide === N ? G = t.getStock.cutPreference === "l" ? 1 : 0 : G = t.getStock.cutPreference === "l" ? 0 : 1, _.guillotineState || (_.guillotineState = new Xt({})), _.guillotineState.setStripShapeBatchGroup(C, {
              stockId: t.getStock.autoId,
              dimension: N,
              rot: G,
              order: W,
              //by this point sorting should have taken place
              priorityShape: P.priorityShape
            });
          }
        ), C++, kt(
          [
            () => {
              const _ = P.usedDimensions.reduce(
                (G, le) => G + le,
                0
              ), W = (P.usedDimensions.length - 1) * h, N = _ + W;
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
  kt([() => tt(p).to.be.a("number")]);
  const k = Qd(
    t.shapes,
    e,
    i
  ), E = t.getStock;
  k.sort(($, x) => {
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
function Xh(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, o = t.x + t.l + n, a = e.x + e.l + n;
  if (!ne.lessThan(t.x, a) || !ne.greaterThan(o, e.x))
    return !1;
  const r = t.y + t.w + n, l = e.y + e.w + n;
  return ne.lessThan(t.y, l) && ne.greaterThan(r, e.y);
}
function Jh(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && Xh(t, s, i))
      return !0;
  return !1;
}
function Qh(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function ep(t, e, i = !0) {
  const s = Qh(t), n = [];
  for (const o in s) {
    const a = s[o], r = e.findIndex((u) => u.autoId === o), l = e[r], c = ot.groupQuantity({
      item: null,
      // No specific item context for this validation
      index: r >= 0 ? r : 0,
      shapeId: o,
      requiredQuantity: a,
      availableQuantity: l?.q ?? 0,
      shapeName: l?.name,
      shapeIndex: r >= 0 ? r : void 0
    });
    n.push(...c);
  }
  return i && t.forEach((o) => {
    const a = o.validateWithShapes(e);
    a?.length && n.push(...a);
  }), n;
}
function cl(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    d: n,
    id: o,
    exact: a,
    groupDirection: r = "horizontal",
    firstShape: l = null,
    iterations: c,
    type: u = "auto",
    tolerance: f = 1e-3,
    config: h
  } = t, p = c ?? h?.subset?.shuffles ?? 10;
  kt([
    () => tt(s).to.be.greaterThan(0)
  ]);
  const k = tp(e, r, n, i, f);
  if (k.length < 2) return !1;
  const E = { config: h }, L = Kh.call(
    E,
    i.bladeWidth,
    k,
    i.getStock,
    sp(r),
    s,
    a,
    p,
    l
  );
  if (!L) return !1;
  if (L?.shapes?.length > 1 && L?.totalLength) {
    let C;
    try {
      C = new bn({
        id: o,
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
function iS(t) {
  const {
    shapes: e,
    container: i,
    targetSize: s,
    exact: n = !1,
    direction: o = "l",
    firstShape: a = null,
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
  const k = ul(o), E = Gt(o), L = k === "horizontal" ? i.w : i.l, C = i.getStock;
  let A = [...e], $ = a;
  if ($)
    if (nd(
      $,
      $[E],
      E,
      C
    ) === !1)
      $ = null;
    else {
      const Y = $[E], ae = Y * (1 - p);
      let P = Y * (1 + p);
      P > i[E] && (P = i[E]), A = e.filter((_) => !Ze(_) || _.autoId === $.autoId ? !1 : Sa(
        _,
        ae,
        P,
        E,
        C
      ));
    }
  const x = Xd(
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
      const W = Sa(
        M,
        P,
        _,
        E,
        C
      );
      Y.set(ae, W);
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
          const W = Y[Y.length - 1], N = W.shapes.slice(), G = /* @__PURE__ */ new Set(), le = new Set(ae.map((ye) => ye.autoId)), fe = [];
          let de = !0;
          for (const ye of N) {
            let Oe = !1;
            if (le.has(ye.autoId) && !G.has(ye.autoId)) {
              const K = ae.find((at) => at.autoId === ye.autoId);
              K && (fe.push(K), G.add(ye.autoId), Oe = !0);
            }
            if (!Oe)
              for (const K of ae) {
                if (G.has(K.autoId)) continue;
                const at = `${K.autoId}-${ye.autoId}`;
                if (g.has(at) || g.set(at, K.isIdentical(ye)), g.get(at)) {
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
            if (_ = !0, W.positions?.length === fe.length)
              for (let ye = 0; ye < fe.length; ye++) {
                const Oe = fe[ye], K = N[ye], at = W.positions[ye]?.rot ?? K.rot;
                if (Oe.rot !== at && !nt(Oe, at, i)) {
                  console.warn(`  Failed to rotate ${Oe.id} to ${at} - skipping clone`), _ = !1;
                  break;
                }
              }
            _ && (kt([
              () => tt(fe.every((ye, Oe) => {
                const K = W.positions[Oe]?.rot ?? N[Oe].rot;
                return ye.rot === K;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), P = W.cloneWithNewShapes(fe));
          }
        }
        if (_ || (P = cl({
          shapes: ae,
          container: i,
          targetSize: s,
          d: M,
          id: "g" + (typeof f?.group == "number" ? f.group : 0),
          exact: n,
          groupDirection: k,
          firstShape: $,
          tolerance: p,
          config: u,
          type: h
        })), P) {
          typeof f?.group == "number" && f.group++, Y.push(P), P.shapes.forEach((N) => j.add(N.autoId));
          const W = [];
          for (const N of ae)
            j.has(N.autoId) || W.push(N);
          if (ae = W, ae.length < 2) break;
        } else
          break;
      }
      H.push(...Y);
    }
  }
  return H;
}
function tp(t, e, i, s, n = 1e-3) {
  return t.filter((o) => {
    if (o.isSquare) return !0;
    const a = i * (1 - n), r = i * (1 + n), l = o.l >= a && o.l <= r, c = o.w >= a && o.w <= r;
    let u = null;
    if (l && c) {
      const f = Math.abs(o.l - i), h = Math.abs(o.w - i);
      u = f <= h ? "l" : "w";
    } else l ? u = "l" : c && (u = "w");
    if (u !== null) {
      const f = ip(
        u,
        e,
        o.rot
      );
      return vt(o, f, s) ? nt(o, f, s) : !1;
    }
    return !1;
  });
}
function ip(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function ul(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function sp(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function np(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function op(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const o of n.shapes)
        s.add(o.autoId);
  return t.filter((n) => He(n) || !s.has(n.autoId));
}
function ap(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(He).forEach((a) => {
    a.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((a) => Ze(a)).filter((a) => i.has(a.autoId)), o = e ? ` [${e}]` : "";
  tt(
    n.length,
    `${o} Found ${n.length} shapes that exist both in groups and independently: ${n.map((a) => a.id || a.autoId).join(", ")}`
  ).to.equal(0);
}
function sS(t) {
  const e = [], i = t.filter((n) => He(n)), s = t.filter((n) => Ze(n));
  for (const n of i)
    n.added && e.push(n);
  for (const n of s)
    n.added && !n.group.inGroup && e.push(n);
  return e;
}
function rp(t, e) {
  t.push(e), t.sort((s, n) => (n.score?.total || 0) - (s.score?.total || 0));
  const i = t[0];
  if (i.score?.total && He(i) && (i.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(i), e.bestScore.group = i, i;
}
function nS(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: o, config: a, scoreFunction: r } = t;
  if (s.length < 3) return;
  Jt("groups", `[POSITION GROUPS] Creating groups at position (${o.x},${o.y}) for shape ${n.id} in container ${e.id} (${e.cutType})`);
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  ji(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const p of u) {
    const k = Gt(p), E = p === "l" ? "x" : "y", L = e[p] - n[E] - e.bladeWidth, C = e[p] - n[E], A = e[p] * 0.6;
    if (L <= 0 || C < A) continue;
    const $ = np(
      s,
      n,
      k
    );
    if ($.length < 2) continue;
    const x = cl({
      shapes: $,
      container: e,
      targetSize: L,
      d: n[k],
      id: "g" + n.id,
      exact: !1,
      groupDirection: ul(p),
      firstShape: n,
      iterations: 40,
      config: {
        subset: a.subset
      }
    });
    x && c.push(x);
  }
  c.sort((p, k) => k.efficiency - p.efficiency), c = c.slice(0, a.sample.groupSize);
  for (const p of c)
    p.x = o.x, p.y = o.y, p.outOfBounds = p.x + p.l > e.l || p.y + p.w > e.w, !p.outOfBounds && (Jh(p, i, e) || r(p, e, i, s, o));
  s.forEach((p) => p.resetGroupData());
  const f = rp(c, n), h = c.filter((p) => He(p) && p !== f);
  if (h.length > 0 && (Jt("groups", `[POSITION GROUPS] Destroying ${h.length} non-winning groups`), h.forEach((p) => {
    Jt("groups", `  Destroying group ${p.id} (${p.shapes?.length || 0} shapes)`), p.destroy();
  })), f) {
    if (Jt("groups", `[POSITION GROUPS] Winner: group ${f.id} with score ${f.score.total.toFixed(2)} (beat shape ${n.id} score ${n.score?.total?.toFixed(2) || 0})`), ji(e)) {
      e.shapes.push(f);
      const p = e.shapes.length;
      e.shapes = op(e.shapes, f);
      const k = p - e.shapes.length;
      k > 0 && Jt("groups", `[POSITION GROUPS] Removed ${k} child shapes from segment after adding group ${f.id}`);
    }
  } else c.length > 0 && Jt("groups", `[POSITION GROUPS] No winning group - shape ${n.id} scored better than ${c.length} groups`);
  return l && (n.orientationLock = null), f && ji(e) && kt([
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
  const o = lp[t](e, i);
  return s && (o.corner = s), n && (o.direction = n), o;
}
const lp = {
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
function cp(t, e, i) {
  const s = new ti(), n = i.toArray().sort(dl), o = e.bladeWidth;
  if (n.forEach((a) => {
    const r = a.corner, l = a.type;
    if (!o)
      s.add(a);
    else
      switch (r) {
        case "topRight":
          {
            const c = $e("top", a, o, r);
            l && (c.type = l), s.add(c);
            const u = $e("right", a, o, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = $e("top", a, o, r);
            l && (c.type = l), s.add(c);
            const u = $e("left", a, o, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = $e("bottom", a, o, r);
            l && (c.type = l), s.add(c);
            const u = $e("right", a, o, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = $e("bottom", a, o, r);
            l && (c.type = l), s.add(c);
            const u = $e("left", a, o, r);
            l && (u.type = l), s.add(u);
          }
          break;
      }
  }), o) {
    const a = s.toArray();
    for (let r = a.length; r--; ) {
      const l = a[r];
      i.has(l.x, l.y) && s.remove(l.x, l.y);
    }
  } else {
    const a = s.toArray();
    for (let r = a.length; r--; ) {
      const l = a[r];
      for (let c = t.length; c--; ) {
        const u = t[c];
        if (l.x === u.x && l.y === u.y) {
          s.remove(l.x, l.y);
          break;
        }
      }
    }
  }
  if (o) {
    const a = /* @__PURE__ */ new Set();
    let r, l, c, u;
    e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (r = e.x, l = e.y, c = e.x + e.l, u = e.y + e.w) : (r = e.x + e?.trim?.l1, l = e.y + e?.trim?.w1, c = e.x + e.l - e?.trim?.l2, u = e.y + e.w - e?.trim?.w2);
    let f = s.toArray();
    for (let h = f.length; h--; ) {
      const p = f[h];
      (ne.lessThan(p.x, r) || ne.lessThan(p.y, l) || ne.greaterThan(p.x, c) || ne.greaterThan(p.y, u)) && f.splice(h, 1);
    }
    s.clear(), f.forEach((h) => s.add(h)), a.clear(), f = s.toArray();
    for (let h = f.length; h--; ) {
      const p = f[h];
      for (let k = t.length; k--; ) {
        const E = t[k];
        if (p.collidesWith(E)) {
          s.remove(p.x, p.y);
          break;
        }
      }
    }
  }
  return s;
}
function up(t, e, i) {
  let s = [];
  const n = t.minSpacing, o = e.corner, a = e.direction;
  if (e.type === "shape")
    switch (o) {
      case "topLeft":
        a === "rl" && (s.push($e("right", e, n, o, a)), s.push($e("topRight", e, n, o, a))), a === "bt" && (s.push($e("bottom", e, n, o, a)), s.push($e("bottomLeft", e, n, o, a)));
        break;
      case "topRight":
        a === "lr" && (s.push($e("left", e, n, o, a)), s.push($e("topLeft", e, n, o, a))), a === "bt" && (s.push($e("bottom", e, n, o, a)), s.push($e("bottomRight", e, n, o, a)));
        break;
      case "bottomRight":
        a === "lr" && (s.push($e("left", e, n, o, a)), s.push($e("bottomLeft", e, n, o, a))), a === "tb" && (s.push($e("top", e, n, o, a)), s.push($e("topRight", e, n, o, a)));
        break;
      case "bottomLeft":
        a === "rl" && (s.push($e("right", e, n, o, a)), s.push($e("bottomRight", e, n, o, a))), a === "tb" && (s.push($e("top", e, n, o, a)), s.push($e("topLeft", e, n, o, a)));
        break;
    }
  else if (e.type === "edge")
    switch (a) {
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
function dp(t, e) {
  const i = new ti();
  return t.sort(dl), t.forEach((s) => {
    He(s) ? (Bs(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const o = n.getCoords(e);
      Bs(i, o, "group");
    })) : Bs(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function fp(t = [], e, i) {
  const s = dp(
    t === null ? e : t,
    i
  );
  return cp(
    e,
    i,
    s
  );
}
function dl(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function fl(t, e, i, s, n, o) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = o;
}
function hp(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new ti();
  const s = hl(e, t);
  for (const r of e)
    for (const l of s) {
      if (l.shape.id === r.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        pp(
          u,
          l.shape,
          r,
          i
        );
    }
  const o = t.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", a = e.reduce((r, l) => (o === "tb" ? r.x + r.l > l.x + l.l : r.y + r.w > l.y + l.w) ? r : l);
  return s.filter(({ shape: r }) => r.id === a.id).forEach(({ shape: r, rays: l }) => {
    const c = Object.values(l).filter((u) => u !== void 0);
    for (const u of c) {
      const f = new Qe(u.x2, u.y2);
      o === u.direction && (fl(f, r, null, u.direction, "edge"), ps(i, f));
    }
  }), i = gp(i), i;
}
function hl(t, e) {
  return t.map((i) => {
    const s = Uh(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function pp(t, e, i, s) {
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
  const o = t.dimension === "w", a = o ? "y" : "x", r = o ? "x" : "y", l = o ? "l" : "w";
  if (t[`${r}1`] >= i[r] && t[`${r}1`] <= i[r] + i[l]) {
    const c = t.direction === "lr" && t[`${a}1`] <= n && t[`${a}2`] >= n, u = t.direction === "rl" && t[`${a}1`] >= n && t[`${a}2`] <= n, f = t.direction === "bt" && t[`${a}1`] <= n && t[`${a}2`] >= n, h = t.direction === "tb" && t[`${a}1`] >= n && t[`${a}2`] <= n;
    if (c || u || f || h) {
      const k = o ? t[`${r}1`] : n, E = o ? n : t[`${r}1`], L = new Qe(k, E), C = t.origin;
      fl(L, e, i, t.direction, "shape", C), ps(s, L);
    }
  }
}
function gp(t) {
  const e = new ti();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((o) => o.a === s);
    ["right", "left", "top", "bottom"].forEach((o) => {
      const a = mp(
        n,
        o
      );
      a && ps(e, a);
    });
  }), e;
}
function mp(t, e) {
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
  for (const o of n) {
    let a;
    switch (a = yp(e, t, i), o) {
      case "bottomLeft":
        a = a.cloneAt(a.x - t.l, a.y - t.w), a.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        a = a.cloneAt(a.x, a.y - t.w), a.shapePosition = "bottomRight";
        break;
      case "topLeft":
        a = a.cloneAt(a.x - t.l, a.y), a.shapePosition = "topLeft";
        break;
      case "topRight":
        a = a.cloneAt(a.x, a.y), a.shapePosition = "topRight";
        break;
    }
    ps(s, a);
  }
  return gl(t, i, s), s;
}
function yp(t, e, i) {
  if (i.saw.cutType !== "efficiency") return t;
  const s = e.minSpacing, n = i.bladeWidth;
  if (!s || s === n) return t;
  let o;
  if (!t.grid) return t;
  switch (t.grid) {
    case "bottom":
      o = t.cloneAt(t.x, t.y - s + n);
      break;
    case "top":
      o = t.cloneAt(t.x, t.y + s - n);
      break;
    case "left":
      o = t.cloneAt(t.x - s + n, t.y);
      break;
    case "right":
      o = t.cloneAt(t.x + s - n, t.y);
      break;
  }
  return o ? (o.x < 0 && (o.x = 0), o.y < 0 && (o.y = 0), o.adjustedForMinSpacing = !0, o) : t;
}
function gl(t, e, i) {
  let s, n, o, a;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, o = e.x + e.l - t.l, a = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, o = e.l - e?.trim?.l2 - t.l, a = e.w - e?.trim?.w2 - t.w);
  const r = i.toArray();
  for (let l = r.length; l--; ) {
    const c = r[l];
    (ne.lessThan(c.x, s) || ne.lessThan(c.y, n) || ne.greaterThan(c.x, o) || ne.greaterThan(c.y, a) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
const bp = B({
  id: m(),
  count: d(),
  name: m(),
  l: d(),
  w: d(),
  t: d(),
  material: m()
}), Qo = B({
  inputStock: ee(xi),
  inputShapes: ee(ss),
  inputSaw: Js,
  inputUserGroups: ee(Xo),
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
}).optional(), vp = B({
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
}), ea = vp.extend({
  bandingLengthByType: we(m(), d()).default({}),
  unplacedParts: ee(bp).default([])
}), wp = B({
  // Core optimization results
  stockList: Fe("Stock"),
  shapeList: Fe("Shape"),
  cutList: Fe("Cut").optional(),
  segmentList: Fe("Segment").optional(),
  offcuts: Fe("Offcut").optional(),
  saw: ge("Saw"),
  unusableShapes: Fe("Shape").optional(),
  unavailableStock: Fe("Stock").optional(),
  evolutionVisData: ee(B({})).optional(),
  performance: m().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: ea.optional(),
  credits: d().optional(),
  // Optional input data for debugging/API reporting
  inputs: Qo
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
  inputs: Qo,
  // The actual optimization results
  optimisation: wp
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
  stockList: Fe("Stock"),
  shapeList: Fe("Shape"),
  cutList: Fe("Cut").optional(),
  segmentList: Fe("Segment").optional(),
  offcuts: Fe("Offcut").optional(),
  saw: ge("Saw"),
  unusableShapes: Fe("Shape").optional(),
  unavailableStock: Fe("Stock").optional(),
  performance: m().optional(),
  metadata: ea.optional(),
  apiVersion: d().optional(),
  credits: d().optional(),
  // Input data
  inputs: Qo,
  // Computed fields for easier querying/display
  numParts: d().optional(),
  numStock: d().optional()
});
const Sp = B({
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
    wt()
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
}), xp = B({
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
    wt()
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
}), oS = Ws({
  // Context - using z.any() for complex external types
  job: it().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: It().nullable().default(null).describe("Socket.io connection ID"),
  user: it().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: it().describe("Configuration object"),
  // Type: Config
  api: Ke().nullable().default(null).describe("API mode flag"),
  app: Ke().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ge("Saw").describe("Saw configuration"),
  stockList: Fe("Stock").default([]).describe("List of stock materials"),
  shapeList: Es(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  userGroups: Fe("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Fe("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Es(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Es(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: dn,
  // Results storage
  cutList: Fe("Cut").default([]).describe("List of cuts to make"),
  segmentList: Fe("Segment").default([]).describe("List of segments"),
  offcuts: Fe("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Fe("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Ke().default(!1).describe("Use inventory system"),
  successMetric: It().default(dt.successMetric).describe("Metric for optimization success"),
  enableEvo: Ke().default(!0).describe("Enable evolutionary algorithm"),
  weighting: ga(It(), it()).default({}).describe("Weighting configuration"),
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
  evolutionVisData: Si(ga(It(), Xc())).default([]).describe("Evolution visualization data"),
  final: Ke().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Ke().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: Ke().default(!1).describe("Has shape-level minimum spacing")
}), aS = {}, kp = Jc(["decimal", "fraction"]), Ip = Ws({
  job: it().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Preserve system properties like __entityType and autoId
  inputSaw: Js,
  inputShapes: Si(ss),
  inputStock: Si(xi),
  inputUserGroups: Si(Xo).optional(),
  // Number format for conversion
  numberFormat: kp.optional(),
  // Algorithm configuration
  enableEvo: Ke().default(!0),
  weighting: it().optional(),
  successMetric: It().optional(),
  useInventory: Ke().default(!1),
  // Context
  socketId: It().optional(),
  user: it().optional(),
  // IUser type
  // Application flags
  widget: Ke().optional(),
  api: Ke().optional(),
  app: Ke().optional(),
  domain: It().optional(),
  // API specific
  config: it().optional(),
  v: Hs().optional(),
  // API version
  webhook: It().optional()
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
  successMetric: It().optional(),
  useInventory: Ke(),
  socketId: It().optional(),
  user: it().optional(),
  widget: Ke().optional(),
  api: Ke().optional(),
  app: Ke().optional(),
  domain: It().optional(),
  config: it().optional(),
  v: Hs().optional(),
  webhook: It().optional()
});
const Cp = (t, e, i) => {
  const s = t[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((n, o) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      o.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + e + (e.split("/").length !== i ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, Pp = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), rn = Object.keys(Pp).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
rn.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const Oo = "en", qi = sr.createInstance();
function z(t, e) {
  if (pr())
    return t;
  if (!qi.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = qi.t(t, e);
  return i = typeof i == "string" ? i : String(i), zi(i);
}
const As = {}, Tp = {
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
      const s = await Cp(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), `../translation/${t}.json`, 3);
      As[t] = s.default, i(null, As[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function Ap() {
  return wu(qi), await qi.use(cc).use(Tp).init({
    debug: !1,
    fallbackLng: Oo,
    supportedLngs: rn.length > 0 ? rn : [Oo],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? yu(t) : e === "sc" ? zi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), qi;
}
const Op = Ap().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
}), rS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: Oo, SUPPORTED_LANGUAGES: rn, i18nextInstance: qi, i18nextReady: Op, t: z }, Symbol.toStringTag, { value: "Module" }));
function li(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function $o(t) {
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
function Ea(t) {
  if (!t) return t;
  const e = { ...t };
  return "l1" in e && (e.x1 = e.l1, delete e.l1), "l2" in e && (e.x2 = e.l2, delete e.l2), "w1" in e && (e.y1 = e.w1, delete e.w1), "w2" in e && (e.y2 = e.w2, delete e.w2), e;
}
function $p(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {}, s = Ea(e);
    Se(s.x1) && (i.x1 = s.x1), Se(s.x2) && (i.x2 = s.x2), Se(s.y1) && (i.y1 = s.y1), Se(s.y2) && (i.y2 = s.y2), Se(e.a) && (i.x1 = e.a), Se(e.b) && (i.y1 = e.b), Se(e.c) && (i.x2 = e.c), Se(e.d) && (i.y2 = e.d), Object.keys(i).length > 0 && (t.banding = i);
  }
  if (t.extras?.finish?.faces && (t.finish = t.extras.finish.faces), t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = Ea(e.sides || {});
    e.sides && (Se(s.x1) && (i.x1 = s.x1), Se(s.x2) && (i.x2 = s.x2), Se(s.y1) && (i.y1 = s.y1), Se(s.y2) && (i.y2 = s.y2)), e.faces && (Se(e.faces.a) && (i.a = e.faces.a), Se(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function Fp(t) {
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
function Lp(t) {
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
function Ep(t) {
  return t ? {
    __entityType: "InputSaw",
    stockType: t.stockType || "sheet",
    bladeWidth: t.bladeWidth || 0,
    cutType: t.cutType || "guillotine",
    cutPreference: t.cutPreference || "l",
    guillotineOptions: t.guillotineOptions ? {
      ...t.guillotineOptions,
      strategy: Fp(t.guillotineOptions.strategy)
    } : void 0,
    efficiencyOptions: t.efficiencyOptions ? {
      ...t.efficiencyOptions,
      primaryCompression: Lp(t.efficiencyOptions.primaryCompression)
    } : void 0
  } : {};
}
function Fo(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(Fo);
  const e = {};
  for (const [i, s] of Object.entries(t))
    i === "__entityType" || i === "autoId" || (e[i] = Fo(s));
  return e;
}
function Dp(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: i,
    autoId: s,
    ...n
  } = t;
  return Fo(n);
}
function Rp(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function Mp(t) {
  return t.rot !== void 0 ? !!t.rot : t.rotated !== void 0 ? !!t.rotated : t.isRotated !== void 0 ? !!t.isRotated : !1;
}
function _p(t) {
  return t ? {
    // Map saw object directly
    saw: Ep(t.saw),
    // Map stock array
    stock: Bp(t.stock || []),
    // Map parts with modern extras structure
    parts: jp(t.parts || []),
    // Groups and webhook
    groups: t.groups || [],
    webhook: t.webhook
  } : null;
}
function Bp(t) {
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
    return e.trim && (i.trim = $o(e.trim)), i;
  });
}
function jp(t) {
  return !t || !Array.isArray(t) ? [] : t.map((e) => {
    const i = { ...e };
    if (e.banding && !e.extras?.banding) {
      const s = $o(e.banding);
      s && Object.keys(s).length > 0 && (i.extras = {
        ...i.extras,
        banding: { sides: s }
      });
    }
    if (e.extras?.banding?.sides) {
      const s = $o(e.extras.banding.sides);
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
function Da(t) {
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
      rot: Mp(e),
      notes: e.notes || ""
    };
    e.added && e.x !== void 0 && (i.x = e.x), e.added && e.y !== void 0 && (i.y = e.y), e.stock && (i.stock = { id: Rp(e.stock) });
    const s = { ...e };
    return $p(s), s.banding && (i.banding = s.banding), s.finish && (i.finish = s.finish), s.planing && (i.planing = s.planing), e.machining && (i.machining = Dp(e.machining)), e.customData && (i.customData = e.customData), i;
  });
}
class Ra {
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
      let o = s;
      s === "x1" ? o = "l1" : s === "x2" ? o = "l2" : s === "y1" ? o = "w1" : s === "y2" && (o = "w2"), i[o] = n;
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
    const o = {}, a = {}, r = { sides: {} };
    if (i && typeof i == "object") {
      const u = this.migrateSideNames(i);
      for (const [f, h] of Object.entries(u))
        Pt.includes(f) && (o[f] = h);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [f, h] of Object.entries(u))
        Pt.includes(f) && (a[f] = h);
    }
    if (n && typeof n == "object") {
      n.all && (r.sides.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && Pt.includes(u) && f && (r.sides[u] = f);
    }
    const l = new Lt(Object.keys(o).length > 0 ? { sides: o } : {}), c = Object.keys(a).length > 0 ? new Lt({ sides: a }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : be(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), be(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = be(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof bt)
      return !1;
    const o = {}, a = {}, r = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, f] of Object.entries(i))
        ut.includes(u) && (o[u] = f);
    if (s && typeof s == "object")
      for (const [u, f] of Object.entries(s))
        ut.includes(u) && (a[u] = f);
    if (n && typeof n == "object") {
      n.all && (r.faces.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && ut.includes(u) && f && (r.faces[u] = f);
    }
    const l = new bt(Object.keys(o).length > 0 ? { faces: o } : {}), c = Object.keys(a).length > 0 ? new bt({ faces: a }) : void 0;
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
          const n = Object.keys(i.sides).filter((o) => !Pt.includes(o));
          if (n.length > 0)
            throw new Error(`Invalid side keys in banding: ${n.join(", ")}`);
        }
      }
      const s = e.finish;
      if (s) {
        if ("sides" in s && s.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in s && s.faces) {
          const n = Object.keys(s.faces).filter((o) => !ut.includes(o));
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
function Vp(t) {
  t?.type && delete t.type, Np.call(this, t), Gp.call(this, t), qp.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Lo(e));
}
function Np(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Gp(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function qp(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function Lo(t) {
  !t || typeof t != "object" || (Ra.needsMigration(t) && Ra.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Os(t) {
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
function yl(t) {
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
function lS(t) {
  if (!(!t || typeof t != "object")) {
    if (Vp(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = Os(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = Os(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = Os(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: Os(e.trim)
    } : e)), t.options) {
      if (yl(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ei(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ei(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ei(t.options.planingLocations)), t.options.extrasLocationGroups)
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Lo(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && Lo(t);
  }
}
let bl = {};
const cS = (t, e) => {
  bl[t] = e;
}, kn = (t) => bl[t] || null, Qn = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: o } = gi(i), a = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  a[o] = s;
}, In = (t, e, i) => {
  const { scope: s, key: n } = gi(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] || null;
}, zp = (t, e, i) => {
  const { scope: s, key: n } = gi(i), o = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  o && n in o && delete o[n];
}, Wp = (t) => {
  const e = kn(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
}, Ma = !1;
function Hp() {
  return {
    banding: {
      scope: ["sides"],
      sides: Pi.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: ut.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: ut.map((t) => `face.${t}`),
      sides: Pi.map((t) => `side.${t}`),
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
const Up = Hp(), Ht = (t) => Up[t] || {
  scope: ["sides"],
  sides: Pt.map((e) => `side.${e}`)
}, Eo = (t) => {
  const e = Ht(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, uS = (t) => (Ht(t).faces || []).map((i) => {
  const s = gi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), dS = (t) => (Ht(t).sides || []).map((i) => {
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
}, _a = (t) => gi(t).scope, vl = (t) => Ht(t).scope.includes("faces"), wl = (t) => Ht(t).scope.includes("sides"), fS = (t) => {
  const e = Ht(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, Yp = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((o) => typeof o == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, Kp = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  vl(e) && (s.faces || (s.faces = {})), wl(e) && (s.sides || (s.sides = {}));
}, Zp = (t, e, i) => {
  Kp(t, e);
  const n = t.extras[e], { scope: o } = gi(i);
  return o === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, fi = (t, e, i) => !!In(t, e, i), Xp = (t, e, i, s, n) => {
  const o = kn(e);
  if (o) {
    const a = In(t, e, i);
    if (a !== null) {
      if (typeof a == "boolean")
        return a;
      if (typeof a == "string") {
        const r = o.labels.indexOf(s);
        return r !== -1 && o.options[r] && Array.isArray(o.options[r]) && !o.options[r].includes(a) ? null : a;
      }
      if (typeof a == "object" && s in a) {
        const r = a[s];
        if (r === !0) {
          const l = o.labels.indexOf(s);
          if (l !== -1 && o.options[l] && Array.isArray(o.options[l])) {
            const c = o.options[l];
            if (c.length === 1)
              return c[0];
          }
          return s;
        }
        if (typeof r == "string") {
          const l = o.labels.indexOf(s);
          if (l !== -1 && o.options[l] && Array.isArray(o.options[l]) && !o.options[l].includes(r))
            return null;
        }
        return r;
      }
    }
  }
  return !1;
}, hS = (t, e, i, s, n, o, a) => {
  const r = kn(e);
  if (r)
    switch (Wp(e)) {
      case "boolean":
        Qn(t, e, i, !!n);
        break;
      case "string":
        Qn(t, e, i, String(n));
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
          Qn(t, e, i, c);
        }
        break;
    }
}, Jp = (t, e, i, s) => {
  zp(t, e, i);
}, pS = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const o = i.map((a) => Xp(t, e, a, s));
  if (n === "boolean" || n === "single") {
    const a = o.every((l) => !!l), r = o.every((l) => !l);
    return a ? !0 : r ? !1 : null;
  }
  if (n === "multiple") {
    const a = o[0];
    return o.every((l) => l === a) ? a : null;
  }
  return null;
}, gS = (t, e, i, s) => {
  i.forEach((n) => {
    Jp(t, e, n);
  });
}, eo = (t, e, i, s, n, o) => {
  const a = In(t, e, i), r = [];
  if (a && o?.length)
    if (typeof a == "object" && !Array.isArray(a)) {
      const c = a;
      for (const u of o) {
        const f = c[u];
        if (f)
          if (f === !0) {
            const h = kn(e);
            if (h) {
              const p = h.labels.indexOf(u);
              if (p !== -1 && h.options[p] && Array.isArray(h.options[p])) {
                const k = h.options[p];
                k.length === 1 ? r.push(k[0]) : r.push(u);
              } else
                r.push(u);
            } else
              r.push(u);
          } else
            r.push(String(f));
      }
    } else
      r.push(String(a));
  else a && r.push(String(a));
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
}, mS = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Ht(e);
  if (t.forEach((o) => {
    const r = o.extras[e];
    r && (n.faces && "faces" in r && r.faces && Object.values(r.faces).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }), n.sides && "sides" in r && r.sides && Object.values(r.sides).forEach((l) => {
      typeof l == "string" && l.trim() && l !== "Y" && s.add(l);
    }));
  }), s.size > 0) {
    const o = [.../* @__PURE__ */ new Set([...i.value, ...Array.from(s)])];
    i.value = o;
  }
}, yS = (t, e, i, s) => {
  const n = s[0], o = Ht(e);
  n && t.forEach((a) => {
    const l = a.extras[e];
    if (!l) return;
    l.options || (l.options = {});
    const c = l.options;
    if (o.faces && l.faces) {
      c.faces || (c.faces = {});
      for (const u in l.faces)
        l.faces[u] === !0 && (l.faces[u] = i);
    }
    if (o.sides && l.sides) {
      c.sides || (c.sides = {});
      for (const u in l.sides)
        l.sides[u] === !0 && (l.sides[u] = i);
    }
  });
}, bS = (t, e, i) => {
  const s = Ht(e);
  t.forEach((n) => {
    const a = n.extras[e];
    if (a) {
      if (a.options || (a.options = {}), s.faces && a.faces)
        for (const r in a.faces)
          a.faces[r] === i && (a.faces[r] = !0);
      if (s.sides && a.sides)
        for (const r in a.sides)
          a.sides[r] === i && (a.sides[r] = !0);
    }
  });
}, Qp = (t, e, i, s = !1) => {
  const n = Ht(e), o = t;
  o.extras[e] || (o.extras[e] = {});
  const a = o.extras[e];
  a.options || (a.options = {});
  const r = a.options;
  if (vl(e) && (a.faces || (a.faces = {}), r.faces || (r.faces = {})), wl(e) && (a.sides || (a.sides = {}), r.sides || (r.sides = {})), s) {
    if (n.faces && a.faces) {
      for (const l in a.faces) {
        const c = a.faces[l];
        typeof c == "string" && (a.faces[l] = c.trim() !== "");
      }
      r.faces && Object.keys(r.faces).forEach((l) => {
        l !== "all" && delete r.faces[l];
      });
    }
    if (n.sides && a.sides) {
      for (const l in a.sides) {
        const c = a.sides[l];
        typeof c == "string" && (a.sides[l] = c.trim() !== "");
      }
      r.sides && Object.keys(r.sides).forEach((l) => {
        l !== "all" && delete r.sides[l];
      });
    }
  } else
    n.faces && r.faces, n.sides && r.sides;
}, yi = (t, e, i, s = [], n = []) => {
  const o = Yp(i, n);
  Qp(t, e, o === "boolean" ? [] : s, o === "boolean");
}, eg = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], o = [], a = Eo(e), r = Object.keys(i), l = Math.max(...r.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of a) {
    const { extraContainer: f } = Zp(t, e, u), { key: h } = gi(u), p = f[h];
    if (!p)
      continue;
    let k;
    if (typeof p == "object" && !Array.isArray(p) && p !== null)
      if ("value" in p && typeof p.value == "string") {
        const $ = p.value;
        k = $.includes("|") ? $.split("|") : [$];
      } else
        k = Object.values(p).filter(($) => $ != null && $ !== "" && $ !== !1).map(($) => String($));
    else typeof p == "string" ? k = p.includes("|") ? p.split("|") : [p] : typeof p == "boolean" ? k = p ? ["true"] : [] : k = [String(p)];
    const E = k.length;
    if (E === 0)
      continue;
    let L = !1, C = !1, A = "";
    if (E > 0) {
      if (s)
        try {
          const $ = k.filter((V) => V.trim() !== ""), x = s(e, $);
          C = x !== null && x > 0;
        } catch ($) {
          console.error("[validateExtrasCompleteness] Error getting price:", $), C = !1;
        }
      else {
        const $ = k.join("|");
        C = r.some((x) => x === $ || x.startsWith($ + "|"));
      }
      if (E < l) {
        L = !0;
        const $ = k.join("|");
        if (r.some((V) => V.startsWith($ + "|")) && !C) {
          const V = l - E, R = k.join(", ");
          A = `${e} selection incomplete for ${u}. Selected: "${R}" but ${V} more level${V > 1 ? "s" : ""} required.`;
        }
      }
      !C && !L && (A = `${e} selection invalid for ${u}. No pricing available for "${k.join(", ")}".`);
    }
    E > 0 && !C && (o.push(u), n.push(A || `${e} pricing incomplete for ${u}: ${E}/${l} levels selected`));
  }
  return { valid: o.length === 0, messages: n, incompleteLocations: o };
}, tg = (t, e, i) => {
  if (!i || !i[e])
    return { valid: !0, violations: [] };
  const s = i[e], n = [], o = (r, l, c) => {
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
  o("longSide", t.longSide, s.longSide), o("shortSide", t.shortSide, s.shortSide);
  const a = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(a) || o("t", a, s.t), {
    valid: n.length === 0,
    violations: n,
    message: s.message
  };
}, ig = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
}, sg = { id: "mini-stock-nav" }, ng = ["onMousedown"], og = { class: "id" }, ag = /* @__PURE__ */ De({
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
    const i = t, s = e, n = (o) => {
      s("show-stock", o);
    };
    return (o, a) => (v(), T("div", sg, [
      (v(!0), T(Te, null, je(i.stockList, (r, l) => (v(), T("button", {
        type: "button",
        key: l,
        class: Ie(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockAutoId }]),
        style: Je({
          backgroundColor: r.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(r.autoId)
      }, [
        O("div", og, J(l + 1), 1),
        ls(O("div", { class: "stack legibility" }, J(r.stack), 513), [
          [ln, typeof r?.stack == "number" && r.stack > 1]
        ])
      ], 46, ng))), 128))
    ]));
  }
});
function rg(t) {
  const e = t.x, i = t.x + t.l, s = Ft().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, o = t.y + t.w, a = Ft().domain([n, o]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(o)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(qs(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(zs(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(zs(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function lg() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(lr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(cr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Sl(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [o, a] = s;
    i === "x" ? cg.call(this, o, a, e[n]) : ug.call(this, o, a, e[n]);
  });
}
function cg(t, e, i) {
  const s = Ft().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = xl(s.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(qs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  o.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (a, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(o);
}
function ug(t, e, i) {
  const s = Ft().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = xl(s.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(zs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  dg(o), this.axes.cutMeasurementYAxes.push(o);
}
function xl(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function dg(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function as() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function fg() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Cn() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function kl(t) {
  return t.autoId;
}
function hg(t, e) {
  const i = /* @__PURE__ */ new Set();
  function s(n) {
    if (!(!n || i.has(n.autoId))) {
      if (i.add(n.autoId), n.autoId === e)
        return n;
      if (n.children && Array.isArray(n.children)) {
        for (const o of n.children)
          if (o && o.autoId !== n.autoId) {
            const a = s(o);
            if (a) return a;
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
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, kl).join(
    (n) => n.append("rect").attr("class", "segment").call((o) => Ba.call(this, o)),
    (n) => n.call((o) => Ba.call(this, o)),
    (n) => n.remove()
  ), this.state.env === "development" && pg.call(this, s), !this.settings.app && this.state.env === "development" && gg.call(this);
}
function Ba(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function pg(t) {
  this.selections.segmentGroup.selectAll("text").data(t, kl).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => ja.call(this, i)),
    (e) => e.call((i) => ja.call(this, i)),
    (e) => e.remove()
  );
}
function ja(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function gg() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Il(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = hg(n, e), i) break;
  } else {
    const n = t?.stock?.autoId;
    i = this.props.segments.value.find((o) => o.stock?.autoId === n);
  }
  if (i === void 0)
    return !1;
  const s = i?.children;
  return s?.length ? {
    parent: i,
    children: s
  } : !1;
}
const { currentCutIndex: Cl } = Ro();
function mg() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Va.call(this, e)),
    (t) => t.call((e) => Va.call(this, e)),
    (t) => t.remove()
  ), Al.call(this));
}
function Va(t) {
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
function Pl(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function Tl(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function yg(t, e, i, s) {
  this.selections.cutLines.style("visibility", (o) => typeof t.guillotineState[i] == "number" && o.guillotineState[i] <= t.guillotineState[i] || !s && o.guillotineState.parentSegmentID === e ? "visible" : "hidden"), Cl.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o) => typeof t.guillotineState[i] == "number" && o.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o) => typeof t.guillotineState[i] == "number" && o.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (o) => t.stock.cutType === "guillotine" && o.isTrim ? o.position === t.type : o.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (o) => o?.ptxData?.isDummy), s || vg.call(this, t, e);
}
function bg(t, e, i, s, n) {
  this.selections.cutLines.style("visibility", (a, r) => r <= e ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a, r) => r <= e ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a, r) => r <= e ? "visible" : "hidden"));
  let o;
  if (t?.dimension === "l" ? o = [
    [0 + (i.l1 ?? 0), t.y1 - n],
    [t.y1 + n, t.stock.w - (i?.y2 ? i.y2 : 0)]
  ] : t?.dimension === "w" && (o = [
    [0 + (i.w1 ?? 0), t.x1 - n],
    [t.x1 + n, t.stock.l - (i?.x2 ? i.x2 : 0)]
  ]), o?.length) {
    const a = [
      o[0][1] - o[0][0],
      o[1][1] - o[1][0]
    ];
    this.state.device === "desktop" && !t.isTrim && Sl.call(this, o, a, s);
  }
  this.selections.cutLines.classed("highlight", (a, r) => r === e);
}
function Al() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), as.call(this), Cn.call(this);
}
function vg(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (f) => Pl(f, e, i)), this.selections.cutLines.classed("inside-segment", (f) => Tl(f, e));
  const s = Il.call(this, t);
  if (s === !1) return;
  const { parent: n, children: o } = s, { near: a } = Ol(t, o);
  if (!a) return;
  let r = [], l;
  const c = this.getHalfBladeWidth(t.stock), u = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (r = [
    [
      a.y,
      a.y + a.w
    ],
    [
      t.y1 + c,
      n.y + n.w
    ]
  ], l = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (r = [
    [
      a.x,
      a.x + a.l
    ],
    [
      t.x1 + c,
      n.x + n.l
    ]
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && Sl.call(this, r, l, u);
}
function wg(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const p = this.props.cuts.value.filter((k) => k.isTrim);
    t = t + p.length, t - p.length >= this.props.cuts.value.length - p.length && (Cl.value = this.props.cuts.value.length - p.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (as.call(this), Cn.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const p = this.selections.cutLines.nodes()[t].parentElement;
    if (!p) return;
    st(p).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), o = i.dimension === "l" ? "y" : "x", a = i?.stock?.trim, r = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? yg.call(this, i, s, r, e) : bg.call(this, i, t, a, o, n), Sg.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = Il.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return $s.call(this, { parent: c });
  const { near: f, far: h } = Ol(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const p = u.find((L) => L.offcut === !0 && L.x === 0 && L.l === i.stock?.trim?.l1), k = u.find((L) => L.type === "near" && L !== p), E = u.find((L) => L.type === "far" && L !== p && L.phase > c.phase);
      if (p)
        return $s.call(this, { parent: p, near: k, far: E });
    } else if (i.beamTrimW1) {
      const p = u.find((L) => L.offcut === !0 && L.y === 0 && L.w === i.stock?.trim?.w1);
      let k = u.find((L) => L.type === "near" && L !== p);
      const E = u.find((L) => L.type === "far" && L !== p && L.y > (p?.y || 0));
      if (k && i.stock && (k = {
        ...k,
        x: 0,
        l: i.stock.l
      }), p)
        return $s.call(this, { parent: p, near: k, far: E });
    }
  }
  $s.call(this, { parent: c, near: f, far: h });
}
function Ol(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((a) => a.type === "near" && a[i] + a[s] === t[i + "1"] - t.stock.halfBladeWidth), o = e.find((a) => a.type === "far" && a[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: o };
}
function Sg(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const o = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let a = Math.max(1, Math.ceil(o));
    const r = t?.guillotineState?.segmentCutOrder;
    return (Pl(s, i, r) || Tl(s, i)) && (a += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (a = 5), a;
  });
}
function xg(t) {
  if (!this.props.stock || !t || !this.settings.main) return !1;
  let e;
  if (!t.willItFit(this.props.stock.value, t.rot)) return !1;
  const i = fp(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let o = function(c) {
        return `${c.x1}-${c.y1}-${c.x2}-${c.y2}`;
      }, a = function(c) {
        c.attr("class", "ray").attr("x1", (u) => this.scales.xPositionScale(u.x1)).attr("x2", (u) => this.scales.xPositionScale(u.x2)).attr("y1", (u) => this.scales.yPositionScale(u.y1)).attr("y2", (u) => this.scales.yPositionScale(u.y2));
      };
      if (this.state.env !== "development") return;
      const l = hl(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(l, o).join(
        (c) => c.append("line").call((u) => a.call(this, u)),
        (c) => c.call((u) => a.call(this, u)),
        (c) => c.remove()
      );
    }
    s = hp(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new ti();
  for (const o of i.toArray()) {
    const a = pl(t, o, this.props.stock.value);
    a && n.addPoints(a.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const a of o) {
      const r = up(t, a, this.props.stock.value);
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
  ].forEach((o) => n.add(o)), e = n.toArray()) : (n.add(new Qe(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = n.toArray());
  for (let o = e.length; o--; ) {
    const a = e[o];
    t.x = a.x, t.y = a.y;
    for (const r of this.props.shapes.value)
      if (this.collision(t, r, this.props.stock.value)) {
        e.splice(o, 1);
        break;
      }
  }
  return kg.call(this, e, t), Ig.call(this, e, t), !!e?.length;
}
function kg(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n, o) {
    n.attr("data-id", (a, r) => r).attr("class", "shape ghost").attr("x", (a) => (o.x = a.x, this.getRectangleCoordinate(o, "x"))).attr("y", (a) => (o.y = a.y, this.getRectangleCoordinate(o, "y"))).attr("width", this.getWidthAttribute(o)).attr("height", this.getHeightAttribute(o)).on("mousedown", (a, r) => {
      this.callbacks.onMoveShape(o, r);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(t, i).join(
    (n) => n.append("rect").call((o) => s.call(this, o, e)),
    (n) => n.call((o) => s.call(this, o, e)),
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
function Ig(t, e) {
  function i(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n) {
    n.attr("class", "dot").attr("cx", (o) => this.scales.xPositionScale(o.x)).attr("cy", (o) => this.scales.yPositionScale(o.y)).attr("r", 6).on("mousedown", (o, a) => {
      this.callbacks.onMoveShape(e, a);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(t, i).join(
    (n) => n.append("circle").call((o) => s.call(this, o)),
    (n) => n.call((o) => s.call(this, o)),
    (n) => n.remove()
  ), e.x = 0, e.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), st(this).classed("hover", !0);
      const o = st(this).attr("data-id"), a = st(`.ghost[data-id="${o}"]`);
      a.raise(), a.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), st(this).classed("hover", !1);
      const o = st(this).attr("data-id");
      st(`.ghost[data-id="${o}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Cg() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Na.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => Na.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Ga.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => Ga.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => qa.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const o = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(o / 2 + 2));
    }),
    (t) => t.text((e) => qa.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const o = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(o / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => za.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], o = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), a = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${a}) rotate(${r})`;
    }),
    (t) => t.text((e) => za.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
      const n = s[i], o = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), a = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${a}) rotate(${r})`;
    })
  );
}
function Na(t) {
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
function Ga(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function qa(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : Z({ v: t.l, o: this.numberConfig }).toString();
}
function za(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : Z({ v: t.w, o: this.numberConfig }).toString();
}
const Pg = (t) => t.id;
function Tg() {
  if (!this.props.containerWidth) return;
  as.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Og.call(this), Ag.call(this);
}
function Ag() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Pg).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Wa.call(this, e), Ha.call(this, e), e.on("mousedown", Ua.bind(this)), e;
    },
    (t) => (Wa.call(this, t), Ha.call(this, t), t.on("mousedown", Ua.bind(this)), t),
    (t) => t.remove()
  ), Mg.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Cg.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Og() {
  let t = 1 / 0, e = -1 / 0;
  for (const n of this.props.shapes.value) {
    const o = n?.bestScore?.total;
    if (o !== 0 && o !== null && o !== void 0) {
      t = o, e = o;
      break;
    }
  }
  const i = this.props.shapes.value.reduce((n, o) => {
    const a = o?.bestScore?.total;
    return a === 0 || a === null || a === void 0 ? n : a < n ? a : n;
  }, t), s = this.props.shapes.value.reduce((n, o) => {
    const a = o?.bestScore?.total;
    return a == null ? n : a > n ? a : n;
  }, e);
  this.scales.scoreColorScale = is([jt(251, 224, 255), jt(122, 0, 138)]).domain([i, s]);
}
function Wa(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => rs.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = ur(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function $g(t) {
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
function Ha(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = st(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = st(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", rs.call(this, i));
  }, { passive: !0 });
}
function Ua(t, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Fg.call(this, t, e), (this.settings.app || this.settings.embed) && Dg.call(this, t, e), this.state.device === "desktop" && (Cn.call(this), rg.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
}
function Fg(t, e) {
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
        ], Eg.call(this, e);
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
    console.table(Lg(e, i));
  }
}
function Lg(t, e) {
  return e.reduce((i, s) => {
    const n = Ng(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function Eg(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Dg(t, e) {
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
          const n = [0, 115, 255], o = [176, 255, 231];
          return `rgb(${n.map((r, l) => Math.round(r + t.guillotineState.myPhase / 5 * (o[l] - r))).join(",")})`;
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
        const n = this.props.shapes.value.reduce((o, a) => {
          const r = a.placementOrder ?? 0;
          return r > o ? r : o;
        }, 0);
        if (n > 0 && typeof t.placementOrder == "number") {
          const o = [0, 115, 255], a = [255, 50, 50], r = t.placementOrder / n;
          return `rgb(${o.map((c, u) => Math.round(c + r * (a[u] - c))).join(",")})`;
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
const $l = 3;
function Rg(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, o] of Object.entries(s.sides)) {
        if (!o || ["a", "b", "c", "d"].includes(n)) continue;
        let a = n;
        i.rot && (a = $g.call(this, n));
        const r = _g.call(this, i, a);
        r && e.push(r);
      }
  }
  return e;
}
function Ya(t) {
  return t.attr("class", "banding").attr("x1", (e) => this.scales.xPositionScale(e.l1) + Fs.call(this, e.type, "x")).attr("x2", (e) => this.scales.xPositionScale(e.l2) + Fs.call(this, e.type, "x")).attr("y1", (e) => this.scales.yPositionScale(e.w1) + Fs.call(this, e.type, "y")).attr("y2", (e) => this.scales.yPositionScale(e.w2) + Fs.call(this, e.type, "y")).attr("stroke-width", $l).attr("stroke", "white");
}
function Mg(t) {
  if (!this.settings.main) return;
  const e = Rg.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Ya.call(this, s)),
    (i) => i.call((s) => Ya.call(this, s)),
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
function _g(t, e) {
  const i = $l / 2, s = {
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
function Bg(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Ka = (t) => t.id;
function Za(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Xa(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function jg() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), lg.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Ka).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Za.call(this, e)),
    (t) => t.call((e) => Za.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Ka).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => Xa.call(this, e)),
    (t) => t.call((e) => Xa.call(this, e)),
    (t) => t.remove()
  );
}
function Vg(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function Ng(t, e) {
  return _e(t, e);
}
class Gg {
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
    }, s = (n, o) => jt("#" + (Vg(n?.replace("#", "")) ? n.replace("#", "") : o.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, o]) => [
        n,
        s(e.colors?.[n], o)
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
    function s(n, o, a) {
      const r = a[o], l = st(r);
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
    const i = e.reduce((n, o) => n.l > o.l ? n : o), s = e.reduce((n, o) => n.w > o.w ? n : o);
    return [i, s];
  }
  debounce(e, i, s = !1) {
    let n;
    return (...o) => new Promise((a) => {
      const r = () => {
        n = null, s || a(e.apply(this, o));
      };
      clearTimeout(n), s && !n && a(e.apply(this, o)), n = setTimeout(r, i);
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
    const o = e.l > 0 ? e.w / e.l : 0;
    this.state.stretched = !1, this.requiresStretch(e, o) && this.options.enableStretch && (this.state.h = i * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
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
    Tg.call(this);
  }
  drawStock() {
    jg.call(this);
  }
  drawCuts() {
    mg.call(this);
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
    let o;
    if (i === "x") {
      let a;
      switch (s) {
        case "center":
          a = this.scales.xPositionScale(e.x + e.l / 2), n && (a += n);
          break;
        case "right":
          a = this.scales.xPositionScale(e.x + e.l), n && (a -= n);
          break;
        case "left":
        default:
          a = this.scales.xPositionScale(this.settings.flipX ? e.x - e.l : e.x), n && (a -= n);
      }
      o = a;
    } else if (i === "y") {
      let a;
      switch (s) {
        case "center":
          a = this.scales.yPositionScale(e.y + e.w / 2), n && (a += n);
          break;
        case "bottom":
          a = this.scales.yPositionScale(this.settings.flipY ? e.y + e.w : e.y), n && (a += n);
          break;
        case "top":
        default:
          a = this.scales.yPositionScale(this.settings.flipY ? e.y : e.y + e.w), n && (a -= n);
      }
      o = a;
    }
    return o;
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), as.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), fg.call(this);
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
    const o = n.getBBox(), a = this.scales.measurementScale(e.l), r = this.scales.yScale(e.w);
    return o.width >= a || o.height >= r - this.state.padding;
  }
  isNameHidden(e, i, s) {
    const n = s[i];
    if (!n) return !0;
    const o = n.getBBox(), a = this.scales.measurementScale(e.l), r = this.scales.measurementScale(e.w);
    return o.width >= a || r < 40;
  }
  isLengthHidden(e, i, s) {
    if (this.settings.app) {
      const l = this.scales.measurementScale(e.l), c = this.scales.measurementScale(e.w);
      return l < 50 || c < 50;
    }
    if (e?.stock?.saw?.stockType === "linear") return !1;
    const n = s[i];
    if (!n) return !0;
    const o = n.getBBox(), a = this.scales.measurementScale(e.l), r = this.scales.measurementScale(e.w);
    return o.width >= a || r < 30;
  }
  isWidthHidden(e, i, s) {
    if (this.settings.app)
      return this.scales.measurementScale(e.l) < 50 || this.scales.measurementScale(e.w) < 50;
    const o = s[i].getBBox();
    return this.scales.measurementScale(e.l) < 30 || o.height >= this.scales.measurementScale(e.w);
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
    as.call(this);
  }
  updateShapeVisibility() {
    Bg.call(this);
  }
  drawPositions(e) {
    xg.call(this, e);
  }
  showCut(e) {
    wg.call(this, e);
  }
  resetCuts() {
    Al.call(this);
  }
}
const qg = ["id"], zg = /* @__PURE__ */ De({
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
      activeShapes: o,
      activeCuts: a,
      activeSegments: r,
      currentCutIndex: l,
      getStock: c,
      getShapes: u,
      getSegments: f,
      getCuts: h
    } = Ro(), p = t, k = i, E = (X) => {
      k("part-click", X);
    }, L = (X) => {
      k("shape-colour-update", X);
    }, C = (X, qe) => {
      X?.autoId && k("shape-select", X.autoId, qe);
    }, A = (X) => {
      X && k("add-to-parts-bin", X);
    }, $ = (X, qe) => {
      X && k("move-shape", X, qe);
    }, x = te(0), V = te(0), R = te(null);
    let F, H = te(!1);
    const j = mt({
      debug: ""
    });
    Wt(() => W());
    const g = Q(() => ({
      format: p.numberFormat,
      decimals: p.decimalPlaces
    })), M = Q(() => p.stockAutoId ? c(p.stockAutoId) : n.value), Y = Q(() => p.stockAutoId ? u(p.stockAutoId) : o.value), ae = Q(() => p.main ? p.stockAutoId ? h(p.stockAutoId) : a.value : []), P = Q(() => p.main ? p.stockAutoId ? f(p.stockAutoId) : r.value : []);
    nr(R, (X) => {
      const qe = X[0], { width: et, height: si } = qe.contentRect;
      et > 0 && (x.value = et), k("resize", { width: et, height: si });
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
    const W = () => {
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
      F = new Gg(X), j.debug = F.state.debug, H.value = !0;
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
    }, at = () => {
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
      resetPositions: at,
      findShape: ii,
      clearSelection: Ut,
      resetCuts: ye,
      showCut: Oe,
      requiresStretch: ht,
      state: j
    }), (X, qe) => (v(), T("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: R,
      class: Ie([{ app: t.app }, "diagram-container"])
    }, null, 10, qg));
  }
}), Wg = { class: "action-menu" }, Hg = ["textContent"], Ug = {
  key: 0,
  class: "menu-divider"
}, Yg = {
  key: 1,
  class: "group-label"
}, Kg = /* @__PURE__ */ De({
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
    const i = t, s = e, { isOpen: n, close: o, toggle: a } = xc(i.menuId), r = te(), l = te(), c = Q(() => i.disabled), u = Q(() => i.label), f = Q(() => i.showLabel), h = Q(() => i.icon), { floatingStyles: p } = dc(r, l, {
      placement: i.placement,
      whileElementsMounted: iu,
      middleware: [
        Qc(i.offset),
        eu(),
        tu({ padding: 8 })
      ]
    }), k = (g) => {
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
    }, E = Q(() => k(h.value)), L = (g) => typeof g.active == "function" ? g.active(i) : typeof g.active == "boolean" ? g.active : !1, C = (g) => {
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
      g.stopPropagation(), g.preventDefault(), !c.value && a();
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
      }), g.href && i.closeOnLinkClick ? o() : g.href || o();
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
      n.value && r.value && l.value && !r.value.contains(M) && !l.value.contains(M) && o();
    }, j = (g) => {
      g.key === "Escape" && n.value && o();
    };
    return Wt(() => {
      document.addEventListener("click", H), document.addEventListener("keydown", j);
    }), cs(() => {
      document.removeEventListener("click", H), document.removeEventListener("keydown", j);
    }), (g, M) => (v(), T("div", Wg, [
      O("div", {
        ref_key: "trigger",
        ref: r,
        onClick: V,
        class: Ie(["actions-btn", { active: I(n), disabled: c.value }])
      }, [
        h.value ? (v(), ve(I(Ns), {
          key: 0,
          icon: E.value,
          class: "icon"
        }, null, 8, ["icon"])) : U("", !0),
        f.value ? (v(), T("span", {
          key: 1,
          class: "label",
          textContent: J(u.value)
        }, null, 8, Hg)) : U("", !0)
      ], 2),
      (v(), ve(Do, { to: "body" }, [
        I(n) && !c.value ? (v(), T("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: Je(I(p)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: M[0] || (M[0] = or(() => {
          }, ["stop"]))
        }, [
          (v(!0), T(Te, null, je(x.value, (Y, ae) => (v(), T(Te, { key: ae }, [
            Y.type === "divider" ? (v(), T("div", Ug)) : Y.type === "group" ? (v(), T("div", Yg, J(Y.label), 1)) : Y.show !== !1 ? (v(), ve(fc(A(Y)), wi({
              key: 2,
              ref_for: !0
            }, $(Y), {
              onClick: (P) => R(Y, P),
              id: Y.id,
              class: ["menu-item", F(Y)],
              disabled: Y.disabled && !Y.href
            }), {
              default: Ii(() => [
                Y.icon || L(Y) ? (v(), ve(I(Ns), {
                  key: 0,
                  icon: L(Y) ? ["fass", "check"] : k(Y.icon)
                }, null, 8, ["icon"])) : U("", !0),
                O("span", null, J(Y.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : U("", !0)
          ], 64))), 128))
        ], 4)) : U("", !0),
        I(n) && !c.value ? (v(), T("div", {
          key: 1,
          class: "backdrop",
          onClick: M[1] || (M[1] = //@ts-ignore
          (...Y) => I(o) && I(o)(...Y))
        })) : U("", !0)
      ]))
    ]));
  }
}), Ja = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = No(t);
      return {
        value: t,
        valid: s || n
      };
    } else {
      const n = /^-?\d*\.?\d*$/.test(t);
      if (n && t !== "" && t !== "-" && t !== "." && !t.endsWith(".")) {
        const o = parseFloat(t);
        if (!isNaN(o))
          return {
            value: o,
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
      const o = parseInt(t, 10);
      if (!isNaN(o))
        return {
          value: o,
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
      const o = parseFloat(t);
      if (!isNaN(o))
        return {
          value: o,
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
function Zg({
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
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Zu(r, "decimal", u);
    }
    const c = String(r);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return Ja(c, t.type, t.numberFormat);
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
          return Ja(c, t.type);
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
          let p = !0, k;
          return typeof t.min == "number" && h < t.min && (h = t.min, p = !1, k = "below_min"), typeof t.max == "number" && h > t.max && (h = t.max, p = !1, k = "above_max"), { value: h, valid: p, message: k };
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
  }, o = (r, l = !1) => l && t.type === "unitDependent" && t.numberFormat === "fraction" ? !1 : l && (t.type === "integer" || t.type === "float" || t.type === "unitDependent" && t.numberFormat === "decimal") ? typeof r.value == "number" && r.valid : r.valid ? !0 : r.message === "zero_not_allowed" ? !1 : r.message === "below_min" || r.message === "above_max" || r.message === "errors.validation.field.required" && !t.disableRequiredValidation;
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
          o(u, !1) && (e("update:value", u.value), e("validation", u, t.id)), s.value.isMouseDown = !1;
          return;
        }
        s.value.isTyping = !0;
        const c = n(l.value, !0);
        e("validation", c, t.id), e("input", l.value), o(c, !0) && e("update:value", c.value);
      },
      handleBlur: (r) => {
        if (!i.value) return;
        s.value.isTyping = !1;
        const l = r.target, c = n(l.value, !1);
        e("validation", c, t.id), o(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("blur", r);
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
            e("validation", c, t.id), o(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? "")), e("enter", c);
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
        e("validation", c, t.id), o(c) && (e("update:value", c.value), s.value.lastValidValue = String(c.value ?? ""));
      },
      handlePaste: (r) => {
        if (!i.value) return;
        const l = r.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const c = l.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!No(c)) {
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
function Xg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = te({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (o) => {
    if (!t?.output || t.output === "string")
      return {
        value: o,
        valid: !0
      };
    if (t.options && t.options.length > 0) {
      let a = o;
      return t.numberFormat && (t.numberFormat === "fraction" ? a = String(o) : a = Number(o)), t.options.some((l) => l.value === a) ? {
        value: a,
        valid: !0
      } : {
        value: a,
        valid: !1,
        message: "invalid_option"
      };
    }
    return {
      value: o,
      valid: !0
    };
  };
  return {
    state: s,
    processValue: n,
    handleSelectChange: (o) => {
      if (!i.value) return;
      const a = o.target;
      if (t.multiEdit && a.value === " ") {
        e("update:value", null);
        return;
      }
      const r = n(a.value);
      e("validation", r, t.id), r.valid && e("update:value", r.value);
    }
  };
}
function Jg({
  props: t,
  emit: e,
  isMounted: i
}) {
  return {
    handleCheckboxChange: (s) => {
      if (!i.value) return;
      const o = s.target.checked ? t.trueValue : t.falseValue;
      if (o === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      e("update:value", o);
    },
    handleFocus: (s) => {
      i.value && e("focus", s);
    },
    handleBlur: (s) => {
      i.value && e("blur", s);
    }
  };
}
const Qg = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], em = /* @__PURE__ */ De({
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
    const i = t, s = e, n = te(!0), o = te(null), a = Q(() => i.value === i.trueValue), {
      handleCheckboxChange: r,
      handleFocus: l,
      handleBlur: c
    } = Jg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, f) => (v(), T("input", {
      id: i.id,
      ref_key: "inputRef",
      ref: o,
      type: "checkbox",
      checked: a.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: f[0] || (f[0] = //@ts-ignore
      (...h) => I(r) && I(r)(...h)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...h) => I(l) && I(l)(...h)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...h) => I(c) && I(c)(...h))
    }, null, 40, Qg));
  }
}), tm = ["for"], Ls = /* @__PURE__ */ De({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, i) => (v(), T("label", {
      for: t.id,
      class: "input-label"
    }, J(t.label), 9, tm));
  }
}), im = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], sm = ["disabled", "selected"], nm = {
  key: 0,
  value: " "
}, om = ["hidden", "value", "disabled"], am = /* @__PURE__ */ De({
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
    const i = t, s = e, n = te(!0), o = te(null), a = Q(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = Xg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (v(), T("select", wi(l.$attrs, {
      id: i.id,
      ref_key: "inputRef",
      ref: o,
      value: i.value,
      disabled: i.readonly || i.disabled,
      required: i.required,
      "aria-label": i.ariaLabel,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.errorId,
      onChange: c[0] || (c[0] = //@ts-ignore
      (...u) => I(r) && I(r)(...u))
    }), [
      O("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, J(i.text?.select?.toUpperCase() ?? "SELECT"), 9, sm),
      i.multiEdit ? (v(), T("option", nm, J(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : U("", !0),
      (v(!0), T(Te, null, je(a.value, (u) => (v(), T("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, J(u.label), 9, om))), 128))
    ], 16, im));
  }
}), rm = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Fl = /* @__PURE__ */ De({
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
    const i = t, s = e, n = te(!0), o = te(null), {
      handleInput: a,
      handleMouseDown: r,
      handleMouseUp: l,
      handleFocus: c,
      handleBlur: u,
      handleKeydown: f,
      handleCompositionStart: h,
      handleCompositionEnd: p,
      handlePaste: k
    } = Zg({
      props: i,
      emit: s,
      isMounted: n
    }), E = (L) => {
      const C = L.getBoundingClientRect(), A = window.getComputedStyle(L);
      return C.width > 0 && C.height > 0 && A.display !== "none" && A.visibility !== "hidden";
    };
    return Wt(() => {
      (Se(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && o.value && E(o.value) && yt(() => o.value.focus());
    }), cs(() => {
      n.value = !1;
    }), (L, C) => (v(), T("input", wi(L.$attrs, {
      id: i.id,
      ref_key: "inputRef",
      ref: o,
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
      (...A) => I(a) && I(a)(...A)),
      onFocus: C[1] || (C[1] = //@ts-ignore
      (...A) => I(c) && I(c)(...A)),
      onBlur: C[2] || (C[2] = //@ts-ignore
      (...A) => I(u) && I(u)(...A)),
      onKeydown: C[3] || (C[3] = //@ts-ignore
      (...A) => I(f) && I(f)(...A)),
      onCompositionstart: C[4] || (C[4] = //@ts-ignore
      (...A) => I(h) && I(h)(...A)),
      onCompositionend: C[5] || (C[5] = //@ts-ignore
      (...A) => I(p) && I(p)(...A)),
      onPaste: C[6] || (C[6] = //@ts-ignore
      (...A) => I(k) && I(k)(...A)),
      onMousedown: C[7] || (C[7] = //@ts-ignore
      (...A) => I(r) && I(r)(...A)),
      onMouseup: C[8] || (C[8] = //@ts-ignore
      (...A) => I(l) && I(l)(...A))
    }), null, 16, rm));
  }
}), lm = ["data-field-id"], cm = {
  key: 0,
  class: "input-label-group"
}, um = ["disabled", "selected"], dm = {
  key: 0,
  value: " "
}, fm = ["hidden", "value", "disabled"], ki = /* @__PURE__ */ De({
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
    const i = e, s = t, n = te(null), o = te(null), a = te(!0), r = te(s.numberFormat), l = Q(() => s.custom ? "custom-" + s.id : s.id), c = Q(() => `${l.value}-error`), u = Q(() => s.label || s.placeholder), f = Q(() => g(s.type, s.numberFormat)), h = Q(() => M(s.type, s.numberFormat)), p = Q(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), k = Q(() => {
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
      const _ = P.label ? z(P.label) : P.value?.toString();
      return {
        ...P,
        // Translate the label key first, then uppercase the translated result
        label: _?.toUpperCase() || P.value?.toString().toUpperCase()
      };
    })), C = Q(() => ({
      input: !0,
      issue: s.issue || !a.value,
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
      o.value = P;
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
      P.valid === void 0 || P.valid === !0 ? (a.value = !0, i("validation", n.value, P)) : P.valid === !1 && P.message && (a.value = !1, console.warn(`Field validation error for field ${_} - ${P.message}`), i("validation", n.value, P));
    };
    return Me(() => s.numberFormat, (P, _) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && P !== _ && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const W = Z({ v: s.value, nf: P });
            i("update:value", W);
          } catch {
            i("update:value", P === "decimal" ? 0 : "0");
          }
        r.value = P;
      }
    }), (P, _) => (v(), T("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ie(["input-wrapper", C.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (v(), T("div", cm, [
        j("first") ? (v(), ve(Ls, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        t.type === "checkbox" ? (v(), ve(em, wi({
          key: 1,
          ref: H,
          type: "checkbox"
        }, x.value, {
          value: t.value,
          "onUpdate:value": _[0] || (_[0] = (W) => i("update:value", W))
        }), null, 16, ["value"])) : U("", !0),
        j("last") ? (v(), ve(Ls, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ])) : (v(), T(Te, { key: 1 }, [
        j("first") ? (v(), ve(Ls, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0),
        p.value ? (v(), ve(Fl, wi({
          key: 1,
          ref: H
        }, $.value, {
          "input-type": f.value,
          "input-mode": h.value,
          value: k.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: ae,
          "onUpdate:value": Y
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (v(), ve(am, wi({
          key: 2,
          ref: H
        }, V.value, {
          "onUpdate:value": _[1] || (_[1] = (W) => i("update:value", W))
        }), {
          default: Ii(() => [
            O("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, J(R.value), 9, um),
            t.multiEdit ? (v(), T("option", dm, J(F.value), 1)) : U("", !0),
            (v(!0), T(Te, null, je(L.value, (W) => (v(), T("option", {
              key: W.value,
              hidden: W.hidden,
              value: W.value,
              disabled: W.disabled
            }, J(W.label), 9, fm))), 128))
          ]),
          _: 1
        }, 16)) : U("", !0),
        j("last") ? (v(), ve(Ls, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : U("", !0)
      ], 64)),
      Gs(P.$slots, "default")
    ], 10, lm));
  }
}), hm = {
  key: 0,
  class: "action-bar"
}, pm = { class: "add-custom" }, gm = ["disabled"], mm = ["disabled", "title", "onClick"], ym = {
  key: 1,
  class: "price"
}, bm = /* @__PURE__ */ De({
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
      shouldShowAll: o,
      supportsFaces: a,
      supportsSides: r,
      canDelete: l,
      getLocationLabel: c,
      getInputType: u,
      getInputConfigForLocation: f,
      getSelectOptions: h,
      getPriceDisplay: p,
      shouldShowDeleteButton: k,
      getLocationGroup: E,
      isLocationVisible: L,
      handleInputChange: C,
      handleDelete: A
    } = kc({
      shape: oi(i, "shape"),
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: oi(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: oi(i, "locations"),
      locationGroups: oi(i, "locationGroups")
    }), {
      newCustomName: $,
      canAddCustomName: x,
      isActionMenuDisabled: V,
      customNameActions: R,
      handleAddCustomName: F,
      handleCustomNameAction: H
    } = Ic({
      extraType: i.extraType,
      customNames: oi(i, "customNames"),
      usedNames: oi(i, "usedNames"),
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
      shouldShowAll: o,
      getInputType: u,
      getInputConfig: (G, le) => f(G, le),
      getAllInputConfig: (G) => f("all", G),
      getInputConfigForLocation: f,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: k,
      locations: oi(i, "locations"),
      locationGroups: oi(i, "locationGroups")
    }), ae = te(!1), P = Q(() => (G) => {
      const le = E(G);
      return le === "all" || le === "faces" || le === "sides";
    }), _ = Q(() => (G) => Eo(i.extraType).includes(G) ? _a(G) === "face" : !1), W = Q(() => (G) => Eo(i.extraType).includes(G) ? _a(G) === "side" : !1), N = Q(() => (G) => i.shape.issues?.some((le) => le.category?.includes("extras") && le.field?.some((fe) => fe[0] === "extras" && fe[1] === i.extraType && fe[2] === G)) ?? !1);
    return Wt(() => {
      const le = i.shape.extras?.[i.extraType];
      if (!le || typeof le != "object") {
        ae.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (a.value && !("faces" in le)) {
        ae.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in le)) {
        ae.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (G, le) => {
      const fe = pi("FontAwesomeIcon");
      return ae.value ? U("", !0) : (v(), T("div", {
        key: 0,
        class: Ie(["extras group", [t.extraType]]),
        style: Je({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (v(), T("div", hm, [
          O("div", pm, [
            Ee(Fl, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: I($),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": le[0] || (le[0] = (de) => $.value = de || ""),
              onKeydown: hc(I(F), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            O("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !I(x),
              onClick: le[1] || (le[1] = //@ts-ignore
              (...de) => I(F) && I(F)(...de))
            }, " Add ", 8, gm)
          ]),
          Ee(Kg, {
            "menu-items": I(R),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: I(V),
            onAction: I(H)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : U("", !0),
        O("div", {
          class: "inputs grid-layout",
          style: Je({ "grid-template-columns": I(g) })
        }, [
          (v(!0), T(Te, null, je(I(j), (de) => (v(), T(Te, { key: de }, [
            I(L)(de) ? (v(), T(Te, { key: 0 }, [
              O("div", {
                class: Ie(["label", {
                  "group-label": P.value(de),
                  "face-label": _.value(de),
                  "side-label": W.value(de),
                  "has-validation-issue": N.value(de)
                }])
              }, J(I(c)(de)), 3),
              (v(!0), T(Te, null, je(t.allOptions, (ye, Oe) => (v(), T("div", {
                key: `${de}-${Oe}`,
                class: "input-cell"
              }, [
                Ee(ki, wi({
                  id: I(M)(de, Oe),
                  "data-field": `${t.extraType}-${de}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Oe
                }, { ref_for: !0 }, I(f)(de, Oe), {
                  "onUpdate:value": (K) => I(C)(de, Oe, K)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              I(Y)(de).show ? (v(), T("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !I(Y)(de).enabled,
                title: I(Y)(de).ariaLabel,
                onClick: (ye) => I(A)(de)
              }, [
                Ee(fe, { icon: ["fass", "trash"] })
              ], 8, mm)) : U("", !0),
              t.enablePricing ? (v(), T("div", ym, J(I(p)(de)), 1)) : U("", !0)
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
}, js = /* @__PURE__ */ Tt(bm, [["__scopeId", "data-v-0aa91058"]]), vm = {
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
}, wm = { id: "spinner" }, Sm = ["width", "height"], xm = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function km(t, e, i, s, n, o) {
  return v(), T("div", wm, [
    i.complete ? U("", !0) : (v(), T("svg", {
      key: 0,
      class: "loading",
      style: Je({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      ar('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Sm)),
    i.complete ? (v(), T("svg", {
      key: 1,
      class: "complete",
      style: Je({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      O("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : U("", !0),
    i.showNumber ? (v(), T("div", xm, J(i.number), 1)) : U("", !0)
  ]);
}
const Qa = /* @__PURE__ */ Tt(vm, [["render", km]]), { addNotice: Di } = Mo();
let to = null;
function Im() {
  return to || (to = rr()), to;
}
function er(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Cm(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: o } = Im(), a = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = er(a), u = er(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const L = c.reduce((A, $) => A + ($.q || 1), 0), C = u.reduce((A, $) => A + ($.q || 1), 0);
      if (L > t.maxShapes || C > t.maxStock)
        return Di({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return Di({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return Di({
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
      const L = o(f);
      i.push(...L);
    }
    if (l.length > 0) {
      l.forEach((C) => C.populateParentID(c));
      const L = ep(l, c);
      i.push(...L);
    }
    await Pm(c, t, i);
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
          Di({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: C }),
            additional: A.map(($) => e($.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const k = {
      inputSaw: f,
      inputShapes: c.map((L) => L.toData()),
      inputStock: u.map((L) => L.toData()),
      inputGroups: l.map((L) => L.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, E = Ip.safeParse(k);
    return E.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", E.error.issues), Di({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: E.error.issues.map((L) => `${L.path.join(".")}: ${L.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Di({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Pm(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: o, pricing: a } of s) {
      if (e.extrasValidationRules && Ge.hasExtras(n, o)) {
        const c = tg(n, o, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const f = ig(o, u, c.message);
          i.push(new ie({
            item: n,
            category: ["part", "extras"],
            message: f,
            field: [["extras", o]],
            shouldTranslate: !1
          }));
        });
      }
      if (!a || !Object.keys(a).length)
        continue;
      const r = eg(n, o, a, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((l) => {
        i.push(new ie({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${o}`,
            // Translation key for extra type (banding, finish, planing)
            location: ze(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", o, l]]
        }));
      });
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
}), Tm = B({
  banding: ee(Vs).optional(),
  finish: ee(Vs).optional(),
  planing: ee(Vs).optional()
}).optional(), io = B({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), so = B({
  // Shape dimension constraints
  longSide: io,
  shortSide: io,
  t: io,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: m().optional(),
  // Custom validation message (optional)
  message: m().optional()
}), Am = B({
  banding: so.optional(),
  finish: so.optional(),
  planing: so.optional()
}).optional(), Om = ue(["decimal", "fraction"]), $m = ue(Zr), Fm = he([
  me(0),
  me(1),
  me(2)
]).catch(0), Lm = B({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: m().optional(),
  partB: m().optional(),
  partSelected: m().optional(),
  stock: m().optional(),
  text: m().optional(),
  // Checkout-specific colors
  button: m(),
  buttonText: m()
}), Em = B({
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
}), Dm = B({
  // Localization
  locale: m().default("en-US"),
  currency: m().default("USD"),
  // Number formatting
  numberFormat: Om.default("decimal"),
  decimalPlaces: d().min(0).max(10).optional(),
  fractionRoundTo: d().optional(),
  // Stock configuration
  stockSelection: $m.optional(),
  stockGrain: Wi.optional(),
  // Part configuration
  minSpacing: Zo.optional(),
  maxParts: d().min(0).optional(),
  orientationModel: Fm.default(0),
  minDimension: d().min(0).optional(),
  partTrim: d().min(0).optional(),
  // UI configuration
  debug: D().default(!1),
  enable: Em.optional(),
  colors: Lm.optional(),
  // Custom fields
  customFields: ee(xe()).optional(),
  fieldOrder: ee(m()).optional(),
  // Extras location filtering
  bandingLocations: ee(Xn).optional(),
  finishLocations: ee(Xn).optional(),
  planingLocations: ee(Xn).optional(),
  // Extras location groups
  extrasLocationGroups: Tm,
  // Extras validation rules
  extrasValidationRules: Am
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
).default({}), Rm = B({
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
}), no = B({
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
const Mm = B({
  stockType: ue([...Zs]).optional(),
  bladeWidth: he([
    Ko,
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
    wt()
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
const _m = B({
  // Required fields
  stock: ee(xi).default([]),
  options: Dm,
  // Optional fields
  type: m().optional(),
  // variable | simple
  materials: ee(Rm).optional(),
  banding: no.nullable().optional(),
  finish: no.nullable().optional(),
  planing: no.nullable().optional(),
  machining: xe().optional(),
  bandingPricing: es.optional(),
  finishPricing: es.optional(),
  planingPricing: es.optional(),
  machiningPricing: es.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: xe().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Saw configuration
  saw: Mm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: B({
    enabled: D(),
    config: xe().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
}), Bm = B({
  l: d(),
  w: d(),
  t: d().nullable(),
  q: d()
}), jm = B({
  jobId: d(),
  metadata: ea.optional(),
  parts: ee(ml),
  // Use lightweight mapped schema
  stock: ee(xp),
  // Use lightweight mapped schema
  offcuts: ee(Bm),
  inputs: B({
    parts: ee(Sp)
    // Use lightweight input schema
  })
});
jm.extend({
  checkout: B({
    formattedTotalStockCost: m(),
    formattedBandingCost: we(m(), m()),
    formattedFinishCost: we(m(), m())
  }).optional()
});
function Vm(t) {
  const e = _m.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function Nm(t) {
  const e = Vm(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
const Gm = ["id", "data-index"], qm = /* @__PURE__ */ De({
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
    }), o = () => {
      if (!i.inputShape) return;
      let l = {
        l1: fi(i.inputShape, "banding", "side.l1"),
        l2: fi(i.inputShape, "banding", "side.l2"),
        w1: fi(i.inputShape, "banding", "side.w1"),
        w2: fi(i.inputShape, "banding", "side.w2")
      };
      const c = wd(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = vd(l, c, {
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
      o();
    }, { deep: !0, immediate: !0 });
    const a = (l) => {
      (l.key === "Enter" || l.key === " ") && r();
    }, r = () => {
      i.disabled || s("clicked");
    };
    return Wt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", a);
    }), cs(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", a);
    }), (l, c) => (v(), T("div", {
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
    ], 10, Gm));
  }
}), zm = ["id", "data-index", "disabled"], Wm = /* @__PURE__ */ De({
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
    const i = t, s = e, n = Q(() => i.inputShape ? fi(i.inputShape, "finish", "face.a") : !1), o = Q(() => i.inputShape ? fi(i.inputShape, "finish", "face.b") : !1), a = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = pi("FontAwesomeIcon");
      return v(), T("button", {
        id: t.id,
        class: Ie(["c-btn finish-button", {
          "face-a": n.value,
          // Use computed property
          "face-b": o.value,
          // Use computed property
          selected: t.open
        }]),
        "data-field": "finish",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: a
      }, [
        Ee(c, { icon: ["fass", "spray-can"] })
      ], 10, zm);
    };
  }
});
function Hm(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Ll(t) {
  const e = Hm(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const Um = De({
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
}), Ym = ["id", "disabled"];
function Km(t, e, i, s, n, o) {
  const a = pi("FontAwesomeIcon");
  return v(), T("button", {
    id: t.id,
    class: Ie(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Ee(a, { icon: ["fass", "hammer"] })
  ], 10, Ym);
}
const Zm = /* @__PURE__ */ Tt(Um, [["render", Km]]), Xm = ["id"], Jm = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Qm = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ey = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, ty = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, iy = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, sy = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, ny = {
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
    const i = t, s = e, n = te(0), o = te(!1), a = (j, g, M, Y) => {
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
    }, k = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !x.value) {
        L("");
        return;
      }
      const j = a(
        x.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (j !== x.value) {
        L(j);
        return;
      }
      if (!o.value || n.value === -1) {
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
      j.forEach((W) => {
        g.forEach((N) => {
          M.forEach((G) => {
            const le = new Oh({
              l: W.l,
              w: W.w
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
      }), _.sort((W, N) => {
        if (W.Model !== N.Model)
          return W.Model - N.Model;
        if (W["Stock grain"] !== N["Stock grain"])
          return W["Stock grain"].localeCompare(N["Stock grain"]);
        const G = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return G[W.Dimensions] - G[N.Dimensions];
      }), console.table(_);
    }, A = Q(() => {
      if (!i.rectangle) return ["l", "w"];
      if (Vt(i.rectangle)) return ["l", "w"];
      let j = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : ($.value && (j = j.filter((g) => g !== "w")), j);
    }), $ = Q(() => be(i.rectangle) || Vi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), x = Q(() => {
      let j = "";
      if (Vt(i.rectangle))
        j = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (be(i.rectangle))
        j = i.rectangle.orientationLock ?? "";
      else if (Vi(i.rectangle)) {
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
    }), R = Q(() => !V.value.l && !V.value.w), F = Q(() => Vt(i.rectangle) ? !1 : ro(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), H = Q(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (Vi(i.rectangle) || i.rectangleType === "stock") {
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
      if (!o.value) {
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
      j !== g && k();
    }, { immediate: !0 }), Wt(() => {
      k(), yt(() => {
        o.value = !0, i.debug && C();
      });
    }), (j, g) => (v(), T("button", {
      type: "button",
      id: t.id,
      class: Ie(["c-btn orientation-button", { rot: F.value, square: $.value, disabled: t.disabled, [H.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      H.value === "delete" ? (v(), T("svg", Jm, [...g[0] || (g[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : U("", !0),
      H.value === "noChange" ? (v(), T("svg", Qm, [...g[1] || (g[1] = [
        O("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : U("", !0),
      H.value === "freeRotation" ? (v(), T("svg", ey, [...g[2] || (g[2] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : U("", !0),
      H.value === "leftRight" ? (v(), T("svg", ty, [...g[3] || (g[3] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : U("", !0),
      H.value === "topBottom" ? (v(), T("svg", iy, [...g[4] || (g[4] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : U("", !0),
      H.value === "grainLeftRight" ? (v(), T("svg", sy, [...g[5] || (g[5] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : U("", !0),
      H.value === "grainTopBottom" ? (v(), T("svg", ny, [...g[6] || (g[6] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : U("", !0)
    ], 10, Xm));
  }
}), oy = ["id", "data-index", "disabled"], ay = /* @__PURE__ */ De({
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
    const i = t, s = e, n = Q(() => i.inputShape ? fi(i.inputShape, "planing", "face.a") : !1), o = Q(() => i.inputShape ? fi(i.inputShape, "planing", "face.b") : !1), a = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = pi("FontAwesomeIcon");
      return v(), T("button", {
        id: t.id,
        class: Ie(["c-btn planing-button", {
          "face-a": n.value,
          "face-b": o.value,
          selected: t.open
        }]),
        "data-field": "planing",
        "data-index": t.index,
        type: "button",
        tabindex: "0",
        disabled: t.disabled,
        onClick: a
      }, [
        Ee(c, { icon: ["fass", "hammer-brush"] })
      ], 10, oy);
    };
  }
}), ry = {
  key: 0,
  class: "info"
}, ly = ["disabled"], cy = /* @__PURE__ */ De({
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
    const i = t, s = e, n = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = Q(() => n.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0), a = Q(() => {
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
    }), l = Q(() => i.field.output ? i.field.output : null), c = Q(() => i.field.options || []), u = Q(() => !1), f = Q(() => Ta(i.item, [i.field.name])), h = Q(() => Ta(i.item, [i.field.name], !0)), p = Q(() => i.multiEdit || !1), k = Q(() => i.materialOptions?.length > 0 && be(i.item) ? !i.item.material : !1), E = Q(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && a.value !== null && i.field.info[a.value] || null : null), L = (A) => {
      s("update", A);
    }, C = (A, $) => {
      s("validation", A, $);
    };
    return (A, $) => o.value ? (v(), T(Te, { key: 1 }, [
      t.field.name === "orientationLock" ? (v(), ve(tr, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: L
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (v(), ve(tr, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: L
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (v(), ve(qm, {
        key: 2,
        "input-shape": I(be)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: $[0] || ($[0] = (x) => A.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (v(), ve(Wm, {
        key: 3,
        "input-shape": I(be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[1] || ($[1] = (x) => A.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (v(), ve(ay, {
        key: 4,
        "input-shape": I(be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[2] || ($[2] = (x) => A.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (v(), ve(Zm, {
        key: 5,
        "input-shape": I(be)(t.item) ? t.item : null,
        onOpen: $[3] || ($[3] = (x) => A.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (v(), ve(ki, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: a.value,
        label: I(z)(t.field.label || "fields.material"),
        placeholder: I(z)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !1,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: I(z)("actions.select"),
          delete: I(z)("actions.delete")
        },
        "onUpdate:value": L,
        onValidation: C
      }, {
        default: Ii(() => [
          Gs(A.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (v(), ve(ki, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: a.value,
        label: I(z)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: k.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: I(z)("actions.select"),
          delete: I(z)("actions.delete")
        },
        output: "number",
        "onUpdate:value": L,
        onValidation: C
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (v(), T("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: $[4] || ($[4] = (x) => A.$emit("open-image-upload"))
      }, [
        Ee(I(Ns), { icon: ["fass", "image"] })
      ], 8, ly)) : U("", !0)
    ], 64)) : (v(), ve(ki, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: a.value,
      label: I(z)(t.field.label || t.field.name),
      placeholder: I(z)(t.field.placeholder || t.field.name),
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
        E.value ? (v(), T("p", ry, [
          Ee(I(Ns), { icon: ["fass", "info-circle"] }),
          ts(" " + J(E.value), 1)
        ])) : U("", !0),
        Gs(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), uy = {
  key: 0,
  class: "row table-heading"
}, dy = {
  key: 0,
  class: "cell center"
}, fy = { class: "cell" }, hy = {
  key: 0,
  class: "cell"
}, py = ["onClick"], gy = { class: "cell" }, my = ["disabled", "aria-label", "onClick"], yy = { class: "button-wrapper main" }, by = ["aria-label"], vy = ["aria-label", "disabled"], wy = ["aria-label"], Sy = { id: "part-count" }, xy = {
  key: 3,
  id: "messages"
}, ky = {
  key: 0,
  class: "heading"
}, Iy = { class: "content" }, Cy = {
  key: 4,
  id: "progress"
}, Py = { id: "diagram-wrapper" }, Ty = {
  key: 0,
  id: "stack"
}, Ay = {
  key: 3,
  class: "debug"
}, oo = !0, Oy = /* @__PURE__ */ De({
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
    const s = Mi(() => Promise.resolve().then(() => _y)), n = Mi(() => Promise.resolve().then(() => sb)), o = Mi(() => Promise.resolve().then(() => cb)), a = Mi(() => Promise.resolve().then(() => ta)), {
      inputs: r,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: f,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: h,
      addInputShape: p,
      addInputStock: k,
      cloneInputShape: E,
      updateInputShape: L,
      validationIssues: C,
      setExtrasOptionsFromPricing: A,
      getCentralizedOptions: $
    } = rr(), { r: x, updateFromResult: V, stackedStock: R, uniqueAddedShapes: F, uniqueUsedStock: H, activeStockAutoId: j, activeStock: g, setActiveStockAutoId: M } = Ro(), { progress: Y, reset: ae } = Ac(), { addNotice: P } = Mo(), _ = Q(() => r.inputShapes.value.filter(be)), W = (b) => !b || !Array.isArray(b) ? [] : b.some((S) => {
      const y = S.banding && typeof S.banding == "object" && !S.banding.sides, q = S.finish && typeof S.finish == "object" && !S.finish.faces;
      return y || q;
    }) ? (console.log("[CheckoutCalculator] Converting V2 format to internal format"), _p({ parts: b }).parts || []) : b, N = t, G = i, le = te(!1), fe = "production", de = te(navigator?.language || "en-US"), ye = pc(null), Oe = window.location.hostname, K = te(!1), at = te(!0), ii = fa("Checkout/currentURL", window.location.href), Ut = fa("Checkout/lastMigrationVersion", "0.0.0"), ht = te(null), X = te(!1), qe = te(!1), et = te(!1), si = te(!1), gs = te(!1), Yt = te(Bu()), re = te(!1), { socket: ce } = Pc({
      refs: {
        connected: K,
        thinking: et
      },
      callbacks: {
        onResult(b) {
          const w = b.optimisation;
          if (V(w), !w.shapeList?.length || !w.stockList?.length) {
            ae(), P({
              type: "error",
              message: z("errors.calculation.no_result"),
              additional: [z("errors.validation.check_inputs")]
            }), et.value = !1;
            return;
          }
          if (ht.value = {
            jobId: b.jobId,
            metadata: x.metadata.value,
            parts: Da(F.value.map((S) => ({
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
              parts: Da(r.inputShapes.value)
            }
          }, x?.metadata?.value?.unplacedParts?.length) {
            const S = x.metadata.value.unplacedParts.map((y) => y.id).join();
            P({
              type: "warning",
              message: z("woodwork.parts_not_fit") + ": " + S
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
            message: z("errors.network.cannot_connect"),
            additional: [b]
          });
        },
        onError(b) {
          P({
            type: "error",
            message: z("errors.general.error_occurred"),
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
    }, oe = mt(ke), Le = mt({
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
      b?.length > 0 ? (ni.value = !0, mi.value = "Validation Errors", Pn.value = b.map((w) => `${w.message} (${w.category.join(", ")})`).join(`

`)) : mi.value === "Validation Errors" && (ni.value = !1, mi.value = "", Pn.value = "");
    }, { deep: !0 });
    const At = mt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Re = te([]), Ue = te([]), ms = te([]), Mt = mt({
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
    }), ia = te(null), Ai = mt({}), Oi = mt({}), $i = mt({}), Ml = Q(() => ({
      banding: Ai.rules,
      finish: Oi.rules,
      planing: $i.rules
    })), _l = Q(() => Tc({
      stockType: Le.stockType,
      materials: Re.value,
      minDimension: oe.minDimension,
      ...oe.fieldOrder && oe.fieldOrder.length > 0 ? { allowedFieldIds: oe.fieldOrder } : {}
    })), Tn = te([]), ys = te({
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
      const b = _l.value.fields.value, w = b.filter((q) => ys.value[q.name] ?? !0), S = Tn.value || [], y = [...w, ...S];
      return console.log("[relevantFieldDefinitions] Schema fields:", b.map((q) => q.name)), console.log("[relevantFieldDefinitions] Custom fields:", S.map((q) => q.id || q.name)), console.log("[relevantFieldDefinitions] fieldEnabledStates:", ys.value), console.log("[relevantFieldDefinitions] All fields (including custom):", y.map((q) => q.id || q.name)), y;
    }), Ki = Q(() => Yi.value.length + 2), Bl = Q(() => {
      const b = {
        id: 34,
        del: 32
      }, w = {
        id: `${b.id}px`,
        del: `${b.del}px`
      }, S = [];
      for (const y of Yi.value) {
        if (y.name === "trim") continue;
        const q = y.w ?? "minmax(20px, 1fr)";
        S.push(q);
      }
      return S.unshift(w.id), S.push(w.del), S.join(" ");
    }), bs = Q(() => ({
      "--btn-color": oe.colors.buttonText,
      "--btn-bg": oe.colors.button,
      "--btn-hover-bg": jl(oe.colors.button, -8),
      "--btn-focus-ring": oe.colors.button
    }));
    function jl(b, w) {
      const S = b.replace("#", ""), y = parseInt(S, 16), q = Math.round(2.55 * w), pe = (y >> 16) + q, Pe = (y >> 8 & 255) + q, Xe = (y & 255) + q;
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
    }, sa = Q(() => ye.value ? !(ye.value && ye.value?.api?.whiteLabel) : !0), vs = {
      stockSelection: (b) => {
        const w = ["efficiency", "smallest"];
        b && !w.includes(b) ? console.warn(`${b} is not a valid stockSelection, expected ${w.join("|")}`) : Le.options.stockSelection = b;
      },
      minSpacing: (b) => {
        Le.options.minSpacing = b;
      },
      maxParts: (b) => {
        oe.maxParts = b;
      },
      locale: (b) => {
        de.value = b.replace(/_/g, "-");
      },
      enable: (b) => {
        const w = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const S in ke.enable)
          S in b && (oe.enable[S] = b[S]);
        for (const S in w)
          _t(S, ui(b, [w[S]]) ?? ke.enable[w[S]]);
        gs.value = ui(b, ["csvImport"]) ?? ke.enable.csvImport;
      },
      colors: (b) => {
        for (const w in ke.colors)
          w in b && (oe.colors[w] = b[w]);
      },
      orientationModel: (b) => {
        if (![0, 1, 2].includes(b)) {
          oe.orientationModel = 0;
          return;
        }
        oe.orientationModel = b;
      },
      numberFormat: (b) => {
        if (!["decimal", "fraction"].includes(b)) {
          oe.numberFormat = "decimal";
          return;
        }
        oe.numberFormat = b;
      },
      customFields: (b) => {
        if (console.log("[optionHandlers.customFields] Received custom fields:", b), !Array.isArray(b) || !b?.length) {
          console.log("[optionHandlers.customFields] No custom fields provided");
          return;
        }
        const w = [];
        b.forEach((S) => {
          const y = na(S.id), q = {
            ...S,
            custom: !0,
            id: y,
            name: y,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + y,
            fieldMap: "customData." + y
          };
          S.type === "checkbox" && (q.w = "32px"), S.type === "select" && (q.output = S.outputType ?? S.output ?? "string", q.options = S.options), w.push(q);
        }), console.log("[optionHandlers.customFields] Processed custom field definitions:", w), Tn.value = w, yt(() => {
          for (const S of r.inputShapes.value)
            S.customData = b.reduce((y, q) => {
              const pe = na(q.id);
              return y[pe] = S.customData[pe] || q.default || "", y;
            }, {});
          console.log("[optionHandlers.customFields] Updated shapes customData");
        });
      }
    }, Nl = (b) => {
      N.debug && G("log", ["checkout init...", b]), b?.parts && (b.parts = W(b.parts));
      let w;
      try {
        w = Nm(b);
      } catch (y) {
        G("error", y.message || "Invalid init data");
        return;
      }
      if (w.saw) {
        const y = w.saw;
        if (y.stockType !== void 0 && (Zs.includes(y.stockType) || console.warn(`${y.stockType} is not a valid stockType, expected ${Zs.join("|")}`), Le.stockType = y.stockType, y.stockType === "linear" && (Le.cutType = null, Le.cutPreference = null)), y.bladeWidth !== void 0) {
          const q = typeof y.bladeWidth == "string" ? parseFloat(y.bladeWidth) : y.bladeWidth;
          q >= 0 ? Le.bladeWidth = q : console.warn(`SmartCut - you provided an incorrect blade width of: ${y.bladeWidth}`);
        }
        if (y.cutType !== void 0 && (Le.cutType = y.cutType), y.cutPreference !== void 0 && (uo.includes(y.cutPreference) ? Le.cutPreference = y.cutPreference : console.warn(`SmartCut - cut preference ${y.cutPreference || "N/A"} is not valid. Expected: ${uo.join("|")}`)), y.guillotineOptions !== void 0 && typeof y.guillotineOptions == "object" && Object.assign(Le.guillotineOptions, y.guillotineOptions), y.stackHeight !== void 0) {
          const q = typeof y.stackHeight == "string" ? parseFloat(y.stackHeight) : y.stackHeight;
          Le.stackHeight = q;
        }
      }
      if (w?.options) {
        const y = w.options;
        yl(y), w.saw ? ["stockType", "cutPreference", "bladeWidth"].forEach((Pe) => {
          Pe in w.saw || G("error", `${Pe} is a required saw property`);
        }) : G("error", "saw configuration is required");
        const q = ["enable", "colors"];
        for (const pe in y)
          q.includes(pe) || (oe[pe] = y[pe]), pe in vs && vs[pe](y[pe]);
      }
      if (w.options.colors && "colors" in vs && vs.colors(w.options.colors), w.banding) {
        const y = w.banding;
        "locations" in y && y.locations && (Ai.locations = y.locations), "groups" in y && y.groups && (Ai.groups = y.groups), "rules" in y && y.rules && (Ai.rules = y.rules);
      }
      if (w.finish) {
        const y = w.finish;
        "locations" in y && y.locations && (Oi.locations = y.locations), "groups" in y && y.groups && (Oi.groups = y.groups), "rules" in y && y.rules && (Oi.rules = y.rules);
      }
      if (w.planing) {
        const y = w.planing;
        "locations" in y && y.locations && ($i.locations = y.locations), "groups" in y && y.groups && ($i.groups = y.groups), "rules" in y && y.rules && ($i.rules = y.rules);
      }
      Fn("banding", w), Fn("finish", w), Fn("planing", w), zl(w), aa(w), qe.value = !0, N.debug && G("log", ["init complete"]);
      const S = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(S), yt(() => {
        sa.value && !Ql() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, _t = (b, w = !1) => {
      ys.value[b] = w;
    }, na = (b) => b ? vu(b)?.toLowerCase() : null, Gl = (b, w, S) => {
      try {
        if (!b || !w) return;
        const y = S !== null && S !== "" && S !== void 0 && S !== 0;
        if (w === "material" && (!S || S === "")) {
          const Pe = { material: null, t: null };
          L(b.autoId, Pe) || (console.log("[CHECKOUT] Material update failed - using fallback"), Ji(b, "material", null), Ji(b, "t", null), b.isNew || b.validate());
          return;
        }
        if (b.isNew)
          if (y)
            b.isNew = !1;
          else {
            Ji(b, w, S);
            return;
          }
        const q = { [w]: S };
        L(b.autoId, q) || (console.log("[CHECKOUT] Field update failed - using fallback"), Ji(b, w, S), b.validate());
      } catch (y) {
        console.error("[CHECKOUT] Error updating field:", y);
      }
    }, ql = () => {
    }, zl = (b) => {
      if (ui(oe, ["enable", "machining"]) && b?.machining) {
        for (const w in Mt)
          b.machining[w] && (Mt[w] = b.machining[w]);
        if (["holes", "hingeHoles"].forEach((w) => {
          b?.machining?.[w] && (Mt[w].enabled = b?.machining?.[w].enabled);
        }), b?.machining?.corners?.types?.length && (Mt.corners.enabled = !0, Mt.corners.types = b.machining.corners.types), b.banding && b?.options?.enable?.banding) {
          if (!Ae) return;
          Mt.banding = {
            enabled: !0
          }, Ae.options.length && (Mt.banding.options = Ae.options), Ae.labels.length && (Mt.banding.labels = Ae.labels), ba(Ae.pricing) && (Mt.banding.pricing = Ae.pricing);
        }
      }
    }, Wl = (b = null) => {
      Ve.value = b, b && be(b) && b.l && b.w ? le.value = !0 : alert(z("machining.enter_dimensions_first"));
    }, Hl = () => {
      le.value = !1;
    }, oa = (b = []) => {
      if (Ue.value = [], ms.value = [], _t("t", !1), !!b.length) {
        for (const w of b)
          if (w?.t)
            if (typeof w.t == "string" && w.t.includes(",")) {
              const S = ra(w.t, !0);
              S.length === 2 ? (Yl(S), _t("t", !0), w.t = Ue.value[0]) : G("error", "bonded thickness found which does not have 2 options");
            } else Ue.value.includes(w.t) || Ue.value.push(w.t);
        Ue.value.length > 1 && _t("t", !0);
      }
    }, Ul = (b) => {
      if (!b) return { thicknesses: [], bondedThicknesses: [] };
      if (!Re.value?.length)
        return {
          thicknesses: Ue.value,
          bondedThicknesses: []
        };
      if (!b.material)
        return {
          thicknesses: Ue.value,
          bondedThicknesses: []
        };
      const w = Re.value.find((q) => q.name === b.material);
      if (!w)
        return {
          thicknesses: Ue.value,
          bondedThicknesses: []
        };
      const S = [...w.thicknesses], y = [];
      for (let q = 0; q < S.length; q++) {
        const pe = S[q], Pe = ra(pe), Xe = [];
        if (Pe.length) {
          for (const pt of Pe)
            S[q] = pt, Xe.push(q);
          q++;
        }
        Xe.length && y.push(Xe);
      }
      return {
        thicknesses: S,
        bondedThicknesses: y
      };
    }, aa = (b) => {
      if (b?.stock?.some((w) => w?.material)) {
        Re.value = [], Ue.value = [], ms.value = [];
        const w = /* @__PURE__ */ new Map();
        for (const y of b.stock) {
          if (!y.material) continue;
          const q = y.material.toUpperCase();
          w.has(q) || w.set(q, /* @__PURE__ */ new Set()), y.t != null && w.get(q)?.add(Z({ v: y.t }));
        }
        Re.value = Array.from(w.entries()).map(([y, q]) => ({
          name: y,
          thicknesses: Array.from(q).sort((Pe, Xe) => Pe - Xe)
        }));
        const S = /* @__PURE__ */ new Set();
        for (const y of Re.value)
          for (const q of y.thicknesses)
            S.add(Z({ v: q }));
        Ue.value = Array.from(S).sort((y, q) => y - q), Re.value.length > 1 ? _t("material", !0) : _t("material", !1), Ue.value.length > 1 ? _t("t", !0) : _t("t", !1);
      } else
        oa(b.stock);
    }, Yl = (b, w = null) => {
      if (!Array.isArray(b)) {
        G("error", "addBondedThicknesses expects an array");
        return;
      }
      const S = [];
      for (let y of b)
        oe.numberFormat === "decimal" && (y = parseFloat(y)), Ue.value.push(y), w && w.thicknesses.push(y), S.push(Ue.value.length - 1);
      ms.value.push(S);
    }, Kl = (b) => {
      const { thicknesses: w } = Ul(b);
      return w?.length ? w.map((S) => ({
        label: S?.toString(),
        value: S
      })) : [];
    }, ra = (b, w = !1) => {
      if (typeof b == "string" && b.includes(",")) {
        const S = b.split(",");
        return w ? S.map((y) => Z({ v: y })) : S;
      }
      return [];
    }, Zl = () => {
      re.value ? Jl() : Xl();
    }, Xl = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), re.value = !0;
    }, Jl = () => {
      document.exitFullscreen && document.exitFullscreen(), re.value = !1;
    }, Ql = () => {
      if (ye.value?.api?.whiteLabel) return !0;
      let b = !0;
      const w = document.querySelector("#smartcut-checkout a#credit");
      if (!w) return b = !1;
      const S = window.getComputedStyle(w);
      return S.display === "none" || S.display === "hidden" || S.opacity === "0" || S.color === "transparent" || S.position !== "absolute" || S.color !== "#4e4e4e" && S.color !== "rgb(78, 78, 78)" ? b = !1 : (at.value = b, b);
    }, An = Q(() => typeof N.findExtrasPrice == "function"), la = (b, w) => {
      let S, y;
      switch (w) {
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
      yi(b, w, S, y);
    }, ca = (b) => {
      const w = Object.keys(b);
      return Math.max(...w.map((y) => y.split("|").length));
    }, Zi = (b, w, S) => {
      if (!b)
        return [];
      if (S > 0 && !w[S - 1])
        return [];
      const y = /* @__PURE__ */ new Set();
      for (const pe of Object.keys(b)) {
        const Pe = pe.split("|");
        if (Pe.length > S) {
          let Xe = !0;
          for (let pt = 0; pt < S; pt++) {
            const lt = w[pt], rt = Pe[pt];
            if (lt && lt !== rt) {
              Xe = !1;
              break;
            }
          }
          Xe && y.add(Pe[S]);
        }
      }
      return Array.from(y);
    }, On = (b, w, S, y) => {
      let q, pe;
      switch (w) {
        case "banding":
          q = Ae.options, pe = Ae.labels;
          break;
        case "finish":
          q = Be.options, pe = Be.labels;
          break;
        case "planing":
          q = Ne.options, pe = Ne.labels;
          break;
        default:
          q = [], pe = [];
      }
      return eo(b, w, S, y, q, pe);
    }, ec = (b, w, S) => {
      let y, q;
      switch (w) {
        case "banding":
          y = Ae.options, q = Ae.labels;
          break;
        case "finish":
          y = Be.options, q = Be.labels;
          break;
        case "planing":
          y = Ne.options, q = Ne.labels;
          break;
        default:
          y = [], q = [];
      }
      return eo(b, w, S, N.findExtrasPrice, y, q);
    }, tc = te({}), ic = (b = 1) => {
      for (let w = b; w--; ) {
        let S = {
          l: null,
          w: Le.stockType === "linear" ? r.inputStock.value[0]?.w : null,
          t: Ue.value.length ? Ue.value[0] : null,
          q: 1,
          material: Re.value?.length === 1 ? Re.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const q = r.inputShapes.value[r.inputShapes.value.length - 1];
          S.material = q.material, S.t = q.t;
        }
        const y = p(S);
        y && (Ae?.labels?.length && yi(y, "banding", Ae.options, Ae.labels), Be?.labels?.length && yi(y, "finish", Be.options, Be.labels), Ne?.labels?.length && yi(y, "planing", Ne.options, Ne.labels));
      }
    }, $n = (b = {}) => {
      const w = {
        q: 1,
        // Always set quantity to 1
        ...b
      }, S = p(w);
      return S && (Le.stockType === "linear" && r.inputStock.value[0]?.w && (S.w = r.inputStock.value[0].w), Ue.value.length && (S.t = Ue.value[0]), Re.value?.length === 1 && (S.material = Re.value[0].name), Ae?.labels?.length && yi(S, "banding", Ae.options, Ae.labels), Be?.labels?.length && yi(S, "finish", Be.options, Be.labels), Ne?.labels?.length && yi(S, "planing", Ne.options, Ne.labels)), S;
    }, sc = (b) => {
      if (Ue.value.length)
        for (const w of b) {
          if (!w.t) return;
          const S = Ue.value.findIndex(
            (pe) => Z({ v: pe }) === w.t
          ), y = ms.value.find((pe) => pe.includes(S));
          if (!y) return;
          const q = Math.min(
            ...y.map((pe) => Ue.value[pe])
          );
          Z({ v: w.t }) > q && (w.q = w.q * (Z({ v: w.t }) / q), w.notes = `Bond to form ${w.t.valueOf()}`, w.t = q);
        }
    }, ua = () => {
      ae(), M(null), x.stockList.value = [], x.shapeList.value = [], x.cutList.value = [];
    }, ws = () => {
      r.inputShapes.value.length = 0, N.inputType !== "formula" && yt(() => p({}));
    }, nc = async () => {
      if (G("calculating"), et.value) return !1;
      if (et.value = !0, si.value = !1, !(await Cm({
        t: z,
        partTrim: oe.partTrim,
        maxShapes: oe.maxParts || 1e3,
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
            message: z("limits.max_parts") + " " + oe.maxParts
          });
        }
      })).valid) {
        G("validation-error"), et.value = !1;
        return;
      }
      ua();
      const w = r.inputShapes.value.map((y) => E(y)).filter(Boolean);
      if (w.length !== r.inputShapes.value.length)
        return P({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), et.value = !1, !1;
      sc(w), N.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((y) => ({ l: y.l, w: y.w })),
        "parts",
        w.map((y) => ({ l: y.l, w: y.w }))
      );
      const S = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: w.map((y) => y.toData()),
        inputStock: r.inputStock.value.map((y) => y.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Oe,
        extrasOptions: $(),
        source: "checkout",
        sourceVersion: "4.0.8"
      };
      await ce.connect(), ce.emit("calculate", S);
    }, Fn = (b, w) => {
      if (console.log(`[initExtra] Starting init for ${b}`), console.log(`[initExtra] initData[${b}]:`, w?.[b]), console.log(`[initExtra] options.enable[${b}]:`, oe.enable?.[b]), _t(b, !1), !b || !w || !w?.[b]) {
        console.log(`[initExtra] Early return: missing extraType or initData[${b}]`);
        return;
      }
      if (!ui(oe, ["enable", b])) {
        console.log(`[initExtra] Early return: ${b} not enabled in options`);
        return;
      }
      const S = [b, "pricing"];
      if (!ya(w, S)) {
        G("error", `${S.join(".")} not found in sent data`);
        return;
      }
      const y = ui(w, S);
      if (typeof y != "object") {
        G("error", `${S.join(".")} data must be an object`);
        return;
      }
      if (!ba(y)) {
        G("error", `if provided, ${S.join(".")} data must contain some values`);
        return;
      }
      const q = Object.keys(y), pe = Object.values(y);
      if (!q.length) {
        G("error", `no ${S.join(".")} pricing found`);
        return;
      }
      const Pe = /,/;
      for (const rt of q)
        if (Pe.test(rt)) {
          G("error", `${S} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (pe.some((rt) => isNaN(rt))) {
        G("error", `${S} values must be a number`);
        return;
      }
      const Xe = ca(y), pt = [b, "labels"];
      let lt = [];
      if (ya(w, pt))
        lt = ui(w, pt);
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
          const rt = Ln(y);
          Ae.options = rt, A("banding", rt, lt, y);
          break;
        }
        case "finish": {
          Be.labels = lt, Be.pricing = y;
          const rt = Ln(y);
          Be.options = rt, A("finish", rt, lt, y);
          break;
        }
        case "planing": {
          Ne.labels = lt, Ne.pricing = y;
          const rt = Ln(y);
          Ne.options = rt, A("planing", rt, lt, y);
          break;
        }
      }
      if (ia.value = $(), console.log(`[initExtra] Enabling field: ${b}`), _t(b, !0), console.log("[initExtra] Field enabled state:", ys.value[b]), console.log(`[initExtra] ${b} data:`, b === "banding" ? Ae : b === "finish" ? Be : Ne), !!r.inputShapes.value?.length)
        for (const rt of r.inputShapes.value)
          la(rt, b);
    }, Ln = (b) => {
      const w = [], S = Object.keys(b), y = ca(b);
      for (let q = y; q--; ) w.push(/* @__PURE__ */ new Set());
      for (const q of S)
        q.split("|").forEach((Pe, Xe) => w[Xe].add(Pe));
      for (let q = 0; q < y; q++)
        w[q] = Array.from(w[q]);
      return w;
    }, Ss = (b, w) => {
      if (!w) return;
      b !== "info" && Object.keys(At).forEach((y) => {
        y !== b && y !== "info" && (At[y] = null);
      });
      const S = r.inputShapes.value.indexOf(w);
      At[b] === S ? (Ve.value = null, At[b] = null, tc.value[b] = void 0) : (Ve.value = w, At[b] = S);
    }, da = (b) => {
      if (G("log", ["load event received"]), !qe.value) {
        G("log", ["load event received"]);
        return;
      }
      oc(b.detail);
    }, oc = (b) => {
      if (G("log", ["loading parts..."]), !b || !b?.inputs?.parts?.length) {
        G("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let w = 0;
      for (const y of b.inputs.parts) {
        const q = $n(y);
        q ? q.issues?.length && G("log", [`SmartCut - issues found while importing part at index ${w}`, q.issues]) : G("log", [`SmartCut - error loading part at index ${w}`, y]), w++;
      }
      r.inputShapes.value.flatMap((y) => _r(y.issues)).length && P({
        type: "error",
        message: z("errors.general.issues_found")
      }), G("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, ac = (b) => {
      r.inputShapes.value.length = 0, yt(() => {
        for (const w of b)
          w.t = r.inputStock.value?.[0]?.t ?? null, $n(w);
      });
    };
    Me(() => N.inputStock, (b) => {
      if (ua(), Array.isArray(b) || console.warn("SmartCut - stock must be passed as an array"), !!b?.length) {
        r.inputStock.value.length = 0, Re.value.length || oa(b);
        for (const w of b)
          k({
            ...w,
            autoAdd: !0
            // type: sawData.stockType
          }) || (console.error("Failed to add stock item:", w), P({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? yt(() => {
            r.inputShapes.value.forEach((S) => {
              const y = S.material ? Re.value.find((q) => q.name === S.material) : null;
              if (y)
                y.thicknesses.includes(Z({ v: S.t })) || (S.t = Z({ v: y.thicknesses[0] }));
              else if (Re.value?.length === 1) {
                S.material = Re.value[0].name;
                const q = Re.value[0];
                q.thicknesses.includes(Z({ v: S.t })) || (S.t = Z({ v: q.thicknesses[0] }));
              } else if (Re.value?.length > 1 && S.t) {
                const q = Re.value.find((pe) => pe.thicknesses.some((Pe) => Z({ v: Pe }) === Z({ v: S.t })));
                q ? S.material = q.name : (S.material = Re.value[0].name, S.t = Z({ v: Re.value[0].thicknesses[0] }));
              } else Re.value?.length > 1 ? (S.material = Re.value[0].name, S.t = Z({ v: Re.value[0].thicknesses[0] })) : !S.t && r.inputStock.value[0]?.t && (S.t = Z({ v: r.inputStock.value[0].t }));
            });
          }) : N.inputType !== "formula" && yt(() => p());
          const w = f(r.inputSaw.value);
          w.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(w))), P({
            type: "error",
            message: z("errors.validation.stock_issue"),
            additional: w.map((S) => S.message)
          }));
        }
      }
    }, { immediate: !0 }), Me(r.inputShapes, (b) => {
      G("inputs-changed"), b.forEach((w) => {
        Le.stockType === "linear" && (w.w = r.inputShapes.value[0]?.w);
        const S = Re.value.find((y) => y.name === w.material);
        S && (S.thicknesses.includes(Z({ v: w.t })) || (w.t = Z({ v: S.thicknesses[0] })));
      });
    }, { deep: !0 }), Me(() => oe.numberFormat, (b) => {
      u(b);
    }), Me(() => Le, (b) => {
      r.inputSaw.value = new el(b);
    }, { deep: !0 }), Wt(async () => {
      if (X.value) return;
      const b = "4.0.8", w = "4.0.0";
      va(b, w) && !va(Ut.value, w) && (console.log(`[CheckoutCalculator] Clearing parts for migration from ${Ut.value} to ${b}`), ws(), Ut.value = b);
      const S = new URL(window.location.href), y = S.searchParams.toString(), q = S.origin + S.pathname + (y ? `?${y}` : "");
      ii.value !== q && ws(), ii.value = q, de.value = oe.locale, await ce.connect(), ce.emit("getUserFromDomain"), window.addEventListener("smartcut/load", da), X.value = !0, N.debug && G("log", [
        "ready...",
        "fields:",
        Yi.value.map((pe) => pe.name)
      ]);
    });
    const rc = () => {
      ce && ce.disconnect();
    }, lc = (b, w) => {
      r.inputShapes.value.forEach((S) => {
        S.update({ material: b, t: w });
      }), console.log(r.inputShapes.value.map((S) => S.t)), G("log", [`Updated ${r.inputShapes.value.length} shapes with material: ${b}, thickness: ${w}`]);
    };
    return cs(() => {
      window.removeEventListener("smartcut/load", da), rc(), delete window.smartcutCheckout;
    }), e({
      init: Nl,
      clear: ws,
      getAvailablePricingOptions: Zi,
      getExtrasPrice: ec,
      formatPrice: N.formatPrice,
      findExtrasPrice: N.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: la,
      createAndAddInputShape: $n,
      updateShapeMaterialThickness: lc,
      initMaterialsThicknesses: aa
    }), (b, w) => {
      const S = pi("FontAwesomeIcon");
      return v(), T(Te, null, [
        qe.value ? U("", !0) : (v(), ve(Qa, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        Ve.value?.machining && le.value ? (v(), ve(I(n), {
          key: 1,
          "input-shape": Ve.value,
          "onUpdate:inputShape": w[0] || (w[0] = (y) => Ve.value = y),
          translate: !0,
          options: Mt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": I(eo),
          "get-available-pricing-options": Zi,
          "format-price": t.formatPrice,
          onClose: Hl
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : U("", !0),
        qe.value ? (v(), T("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ie(["smartcut-content", { fullscreen: re.value }])
        }, [
          Yt.value && !t.readonly ? (v(), T("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: Je(bs.value),
            onClick: w[1] || (w[1] = (y) => Zl())
          }, [
            Ee(S, { icon: ["fass", "expand"] }),
            ts(" " + J(I(z)("general.full_screen")), 1)
          ], 4)) : U("", !0),
          sa.value ? (v(), T("a", {
            key: 1,
            id: "credit",
            style: Vl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, J(I(gu)(I(z)("general.powered_by"))), 1)) : U("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Je({ "grid-template-columns": Bl.value })
          }, [
            I(r).inputShapes.value.length ? (v(), T("div", uy, [
              w[6] || (w[6] = O("div", { class: "cell id" }, null, -1)),
              (v(!0), T(Te, null, je(Yi.value, (y) => (v(), T("div", {
                key: y.name,
                class: Ie(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(y.name) || y.type === "boolean" }])
              }, J(I(z)(y.label)), 3))), 128)),
              I(fe) === "development" && oo ? (v(), T("div", dy, " Info ")) : U("", !0),
              w[7] || (w[7] = O("div", { class: "cell del" }, null, -1))
            ])) : U("", !0),
            (v(!0), T(Te, null, je(_.value, (y, q) => (v(), T("div", {
              key: q,
              class: "row inputs"
            }, [
              O("div", fy, [
                O("div", {
                  class: "id",
                  style: Je({
                    background: oe.colors.partA,
                    color: oe.colors.text
                  })
                }, J(q + 1), 5)
              ]),
              (v(!0), T(Te, null, je(Yi.value, (pe) => (v(), T("div", {
                key: pe.name,
                class: "cell"
              }, [
                y ? (v(), ve(cy, {
                  key: 0,
                  field: pe,
                  item: y,
                  index: q,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": oe.numberFormat,
                  "orientation-model": oe.orientationModel,
                  "stock-grain": I(c)(y),
                  "material-options": Re.value?.map((Pe) => ({ label: Pe.name, value: Pe.name })) || [],
                  "thickness-options": pe.name === "t" ? Kl(y) : [],
                  "banding-enabled": At.banding === q ? y : null,
                  onUpdate: (Pe) => Gl(y, pe.name, Pe),
                  onValidation: w[2] || (w[2] = (Pe, Xe) => ql()),
                  onOpenBanding: (Pe) => Ss("banding", y),
                  onOpenMachining: (Pe) => Wl(y),
                  onOpenFinish: (Pe) => Ss("finish", y),
                  onOpenPlaning: (Pe) => Ss("planing", y)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : U("", !0)
              ]))), 128)),
              I(fe) === "development" && oo ? (v(), T("div", hy, [
                O("button", {
                  class: Ie(["c-btn", { selected: At.info === q }]),
                  style: Je(bs.value),
                  type: "button",
                  onClick: (pe) => Ss("info", y)
                }, " i ", 14, py)
              ])) : U("", !0),
              O("div", gy, [
                O("button", {
                  disabled: I(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${I(z)("actions.remove")} ${I(mu)(I(z)("woodwork.part"))}`,
                  onClick: (pe) => I(h)(y.autoId)
                }, [
                  Ee(S, { icon: ["fass", "trash"] })
                ], 8, my)
              ]),
              Ee(I(s), {
                item: y,
                "num-columns": Ki.value
              }, null, 8, ["item", "num-columns"]),
              At.banding === q && Ae.options.length > 0 && An.value ? (v(), ve(js, {
                key: 1,
                shape: y,
                "shape-index": q,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Ae.keys,
                "all-options": Ae.options,
                pricing: Ae.pricing,
                labels: Ae.labels,
                locations: Ai.locations,
                "location-groups": Ai.groups,
                "user-friendly-field-map": I(qt),
                "part-columns": Ki.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": On,
                "orientation-model": oe.orientationModel,
                "get-available-pricing-options": Zi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : U("", !0),
              At.finish === q && Be.options.length > 0 && An.value ? (v(), ve(js, {
                key: 2,
                shape: y,
                "shape-index": q,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Be.keys,
                "all-options": Be.options,
                pricing: Be.pricing,
                labels: Be.labels,
                locations: Oi.locations,
                "location-groups": Oi.groups,
                "user-friendly-field-map": I(qt),
                "part-columns": Ki.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": On,
                "orientation-model": oe.orientationModel,
                "get-available-pricing-options": Zi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : U("", !0),
              At.planing === q && Ne.options.length > 0 && An.value && (console.log("[CheckoutCalculator] Rendering planing ExtrasInputs with location-groups:", oe.extrasLocationGroups?.planing), !0) ? (v(), ve(js, {
                key: 3,
                shape: y,
                "shape-index": q,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Ne.keys,
                "all-options": Ne.options,
                pricing: Ne.pricing,
                labels: Ne.labels,
                locations: $i.locations,
                "location-groups": $i.groups,
                "user-friendly-field-map": I(qt),
                "part-columns": Ki.value,
                "format-price": t.formatPrice,
                "find-extras-price": N.findExtrasPrice,
                "get-price": On,
                "orientation-model": oe.orientationModel,
                "get-available-pricing-options": Zi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : U("", !0),
              At.info === q ? (v(), T("div", {
                key: 4,
                id: "shape-info",
                style: Je({ "grid-column-end": "span " + Ki.value })
              }, [
                O("div", null, J(y?.banding), 1),
                O("div", null, J(ia.value?.banding?.options || "No options"), 1)
              ], 4)) : U("", !0)
            ]))), 128))
          ], 4),
          O("div", yy, [
            t.readonly ? U("", !0) : (v(), T("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${I(z)("actions.add")} ${I(z)("woodwork.part")}`,
              style: Je(bs.value),
              onClick: w[3] || (w[3] = (y) => ic())
            }, [
              Ee(S, { icon: ["fass", "plus-large"] }),
              ts(" " + J(`${I(z)("actions.add")} ${I(z)("woodwork.part")}`), 1)
            ], 12, by)),
            O("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": I(z)("actions.calculate"),
              style: Je(bs.value),
              disabled: !I(r).inputStock.value?.length || et.value,
              onClick: w[4] || (w[4] = (y) => nc())
            }, [
              Ee(S, { icon: ["fass", "calculator"] }),
              ts(J(I(z)("actions.calculate")), 1)
            ], 12, vy),
            t.readonly ? U("", !0) : (v(), T("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": I(z)("actions.clear"),
              onClick: w[5] || (w[5] = (y) => ws())
            }, [
              Ee(S, { icon: ["fass", "trash"] })
            ], 8, wy)),
            O("div", Sy, J(I(l)) + J(oe?.maxParts ? "/" + oe.maxParts : ""), 1)
          ]),
          gs.value && !t.readonly ? (v(), ve(I(o), {
            key: 2,
            ref: "import",
            "number-format": oe.numberFormat,
            "custom-fields": Tn.value,
            "banding-options": Ae.options,
            "banding-labels": Ae.labels,
            "finish-options": Be.options,
            "finish-labels": Be.labels,
            onImport: ac
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : U("", !0),
          ni.value ? (v(), T("div", xy, [
            mi.value ? (v(), T("div", ky, J(mi.value), 1)) : U("", !0),
            O("pre", Iy, J(Pn.value), 1)
          ])) : U("", !0),
          (oe.enable.diagram ? et.value && !I(Y).complete : et.value || I(Y).complete) ? (v(), T("div", Cy, [
            Ee(Qa, {
              size: 50,
              number: I(Y).shapeCount,
              complete: I(Y).complete,
              "show-number": oe.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : U("", !0),
          ls(O("div", Py, [
            I(g)?.saw?.stockType !== "roll" ? (v(), T("div", Ty, J(I(g)?.stack ? I(g)?.stack : 1), 1)) : U("", !0),
            Ee(zg, {
              "element-id": "diagram",
              "number-format": oe.numberFormat,
              "decimal-places": oe.decimalPlaces,
              colors: oe.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [ln, oe.enable.diagram && I(Y).complete]
          ]),
          oe.enable.diagram && I(R).length > 1 && I(Y).complete ? (v(), ve(ag, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": I(j),
            "stock-list": I(R),
            onShowStock: I(M)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : U("", !0)
        ], 2)) : U("", !0),
        I(fe) === "development" && oo ? (v(), T("div", Ay, [
          Ee(I(a), {
            data: [oe],
            paths: ["options"]
          }, null, 8, ["data"]),
          w[8] || (w[8] = O("div", null, "Result data", -1)),
          Ee(I(a), {
            data: [ht.value],
            paths: ["Result"]
          }, null, 8, ["data"])
        ])) : U("", !0)
      ], 64);
    };
  }
}), vS = /* @__PURE__ */ Tt(Oy, [["__scopeId", "data-v-6a5260f8"]]), El = ue(["select", "multiselect", "range", "boolean", "search"]), Dl = ue(["asc", "desc"]), Rl = ue(["grid", "list"]), $y = B({
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
xi.merge($y).describe("Stock option with filtering and display metadata");
const Fy = B({
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
}), Ly = B({
  field: m().describe("Field to sort by"),
  order: Dl,
  label: m().optional().describe("Display label for sort option")
}), Ey = B({
  // Filter configuration
  availableFilters: ee(Fy).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ee(m()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Ly.default({
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
}), Dy = B({
  field: m(),
  value: xe(),
  type: El
});
B({
  // Active filters
  activeFilters: ee(Dy).default([]).describe("Currently active filters"),
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
function Ry() {
  return Ey.parse({});
}
const My = /* @__PURE__ */ De({
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
    return (i, s) => (v(), T(Te, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (v(), T("div", {
        key: 0,
        class: "group issues",
        style: Je({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, J(e.item.issues.filter((n) => n.type === "error").flatMap((n) => I(zi)(n.message)).join(`
`)), 1)
      ], 4)) : U("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (v(), T("div", {
        key: 1,
        class: "group warnings",
        style: Je({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, J(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => I(zi)(n.message)).join(`
`)), 1)
      ], 4)) : U("", !0)
    ], 64));
  }
}), _y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: My }, Symbol.toStringTag, { value: "Module" })), ct = {
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
class By {
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
    decimalPlaces: o = 2
  }) {
    this.HTMLElement = e, this.numberFormat = n, this.decimalPlaces = o, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = i, this.shape = s, this.w = 0, this.h = 0;
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
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, o = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (o + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${o})`).attr("class", "axis x"), this.xAxis.call(
      ct.axisTop(this.xScale).ticks(10).tickSize(-this.h + (o + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(a, r, l) {
      (r === 0 || r === l.length - 1) && ct.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      ct.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, r, l) {
      (r === 0 || r === l.length - 1) && ct.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, o = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", o).attr("width", this.w - (i + n)).attr("height", this.h - (o + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", o).attr("width", this.w - (i + n)).attr("height", this.h - (o + s)).style("fill", "url(#stripes)");
    const a = ct.path(), r = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const f = this.shape.machining.getCorner(u);
      f && f.type ? (r.push(f.size ? Z({ v: f.size ?? 0, o: this }) : 0), l.push(f.type)) : (r.push(0), l.push(null));
    });
    const c = (u, f, h, p, k) => {
      l[u] === "radius" ? a.arcTo(
        this.xScale(f),
        this.getYScale()(h),
        this.xScale(p),
        this.getYScale()(k),
        this.measurementScale(r[u])
      ) : l[u] === "bevel" ? a.lineTo(this.xScale(p), this.getYScale()(k)) : (a.lineTo(this.xScale(f), this.getYScale()(h)), a.lineTo(this.xScale(p), this.getYScale()(k)));
    };
    a.moveTo(this.xScale(0), this.getYScale()(r[0])), c(0, 0, 0, r[0], 0), (l[0] === "bevel" || l[1] === "bevel") && a.lineTo(this.xScale(this.shapeL - r[1]), this.getYScale()(0)), c(1, this.shapeL, 0, this.shapeL, r[1]), (l[1] === "bevel" || l[2] === "bevel") && a.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - r[2])
    ), c(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - r[2],
      this.shapeW
    ), (l[2] === "bevel" || l[3] === "bevel") && a.lineTo(this.xScale(r[3]), this.getYScale()(this.shapeW)), c(3, 0, this.shapeW, 0, this.shapeW - r[3]), a.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", a.toString());
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
    const i = -1, s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, o = s ? this.axisPadding : 0, a = [];
    for (const l of Pi)
      if (e[l])
        switch (l) {
          case "l1":
            a.push({
              x1: n - i,
              x2: n - i,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            a.push({
              x1: this.w - o + i,
              x2: this.w - o + i,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            a.push({
              x1: n + this.getCornerBandingSize(0),
              x2: this.w - o - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? i : -i),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
            });
            break;
          case "w2":
            a.push({
              x1: n + this.getCornerBandingSize(3),
              x2: this.w - o - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -i : i)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(a).join("line").attr("class", "banding").attr("x1", (l) => l.x1).attr("x2", (l) => l.x2).attr("y1", (l) => l.y1).attr("y2", (l) => l.y2).attr("stroke-width", this.bandingStrokeWidth);
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
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, a, r) {
        (a === 0 || a === r.length - 1) && ct.select(this).select("line").style("display", "none");
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
    const i = this.shouldShowAxes(), s = i ? this.edgePadding : 0, n = i ? this.edgePadding : 0, o = i ? this.axisPadding : 0, a = i ? this.axisPadding : 0;
    if (this.w - (s + o) < 0) return;
    let r = window.innerHeight - (a + n) - 20;
    r > 600 && (r = 600), this.xScale.domain([0, this.shapeL]).range([s, this.w - o]), e > 0.3 ? this.h = this.xScale(this.shape.shortSide) + a : (e = 0.3, this.h = this.w * e), this.h > r && (this.h = r, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([s, this.w - o])), this.yScale.domain([this.shapeW, 0]).range([a, this.h - n]), this.yScaleFlipped.domain([0, this.shapeW]).range([a, this.h - n]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (s + o)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const jy = { id: "machining" }, Vy = { class: "inputs" }, Ny = {
  key: 0,
  class: "debug"
}, Gy = {
  key: 1,
  class: "shape-name"
}, qy = { class: "shape-dimensions" }, zy = {
  key: 2,
  class: "sides-wrapper"
}, Wy = { class: "menu" }, Hy = {
  key: 4,
  class: "button-wrapper"
}, Uy = { class: "grid-table" }, Yy = { class: "row table-heading" }, Ky = {
  key: 0,
  class: "cell id"
}, Zy = {
  key: 0,
  class: "cell"
}, Xy = { class: "id" }, Jy = { class: "cell" }, Qy = ["onClick"], eb = {
  key: 6,
  class: "menu-prompt"
}, tb = !1, ib = /* @__PURE__ */ De({
  __name: "Machining",
  props: /* @__PURE__ */ ha({
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
  emits: /* @__PURE__ */ ha(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = Mi(() => Promise.resolve().then(() => ta)), s = t, n = e, o = "production", a = te(), r = Q(() => Ll(K.value)), l = Q(() => {
      if (!f.value?.length) return 0;
      if (X.value === "banding") return 1;
      let re = Object.values(u.value).filter((ce) => ce.enabled).length;
      return re += 2, re;
    }), c = Q(() => {
      if (!f.value.length || X.value === "banding") return;
      const re = {
        id: "34px",
        del: "30px"
      }, ce = [];
      return f.value.forEach((ke) => {
        const oe = u.value[ke];
        oe.enabled && ce.push(oe.w ?? "1fr");
      }), ce.unshift(re.id), ce.push(re.del), ce.join(" ");
    }), u = Q(() => !X.value || X.value === "banding" ? null : et[X.value]), f = Q(() => !X.value || X.value === "banding" ? [] : Object.keys(et[X.value]).filter((re) => et[X.value][re].enabled)), h = Q(() => X.value ? $() : []), p = Q(() => {
      const re = K.value?.machining?.corners?.map((ce) => ce?.isPresent?.() ? ce.getCorner() : null)?.filter((ce) => ce) ?? [];
      return [...Pi, ...re];
    }), k = (re = !0) => {
      re ? Ut.value = re : yt(() => Ut.value = !1);
    }, E = () => {
      Y(), ae(), P(), _();
    }, L = (re) => {
      if (X.value === "corners")
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
    }, C = () => X.value !== "banding", A = (re, ce = null) => {
      if (!re?.length) return [];
      let ke = "None";
      ce === "depth" && (ke = "Through");
      const oe = [{ label: ke, value: null }];
      return re.forEach((Le) => {
        const Ve = Le.toString().charAt(0).toUpperCase() + Le.toString().slice(1);
        oe.push({ label: Ve, value: Le });
      }), oe;
    }, $ = () => {
      if (!X.value) return [];
      if (X.value === "banding") return [];
      const re = K.value.machining[X.value];
      return Array.isArray(re) ? re : [re];
    };
    let x = null;
    const V = () => {
      if (!K.value || !a.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", a.value), x = new By({
        HTMLElement: a.value,
        shape: K.value,
        vueComponent: null
      }), x.init(), x.updateSize(), ii.value = !0;
    }, R = mc(() => {
      ii.value && x && x.updateSize();
    }, 10);
    nr(a, () => {
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
      const re = s.options.corners.types?.[0] || "radius", ce = s.options.corners.minValue || 5;
      for (let ke = 0; ke < 4; ke++)
        K.value.machining.setCorner({
          index: ke,
          type: re,
          size: ce
        });
      x.createCorners();
    }, Y = () => {
      K.value.machining.holes.length = 0;
    }, ae = () => {
      K.value.machining.hingeHoles.length = 0;
    }, P = () => {
      K.value.machining.corners.forEach((re) => {
        re.size = null, re.type = null;
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
    }, W = (re) => {
      switch (X.value) {
        case "holes":
          return K.value.machining.holes.splice(re, 1);
        case "hingeHoles":
          return K.value.machining.hingeHoles.splice(re, 1);
        case "corners":
          K.value.machining.corners[re].size = null, K.value.machining.corners[re].type = null;
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
        k();
        for (const re in K.value.banding)
          K.value.banding[re] ? s.options.banding.enableTypes && s.options.banding.types?.length && (K.value.banding[re] || qe.value.push({
            index: re,
            message: "Please select a type"
          })) : K.value.banding[re] = "";
        k(!1);
      }
    }, le = (re) => {
      const ce = qe.value.filter((ke) => ke.index === re);
      return ce.length ? ce.map((ke) => ke.message) : [];
    }, fe = (re) => {
      const ce = qe.value.filter((oe) => oe.index === re && oe?.fields), ke = ce.flatMap((oe) => oe.fields);
      return ce.length ? ke : [];
    }, de = (re, ce) => {
      const ke = fe(re);
      return ke?.length ? ke.includes(ce) : !1;
    }, ye = () => n("close"), Oe = (re) => re && typeof re.disabled == "function" ? re.disabled : !1, K = gc(t, "inputShape");
    if (!K.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const at = te(!1), ii = te(!1), Ut = te(!1), ht = te(0), X = te(null), qe = te([]), et = mt({
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
          label: z("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? A(s.options.holes.diameters) : void 0
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
          options: A(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: z("machining.size"),
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
    }), gs = (re) => {
      re.target === re.currentTarget && ye();
    }, Yt = () => !(!K?.value?.machining || !at.value || Ut.value);
    return Me(() => K.value?.autoId, () => {
      Yt() && V();
    }), Me(() => K.value?.id, () => {
      Yt() && V();
    }), Me(X, (re) => {
      if (!Yt()) return;
      if (re === "banding") {
        k(), G(), k(!1);
        return;
      }
      if (!re) {
        qe.value = [];
        return;
      }
      k();
      const ce = K.value.machining.validate(
        K.value,
        re,
        si?.[re]
      );
      qe.value = ce?.map((ke, oe) => ({
        index: oe,
        message: ke.message || "Validation error",
        fields: ke.field || []
      })) || [], k(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.machining?.holes, () => {
      if (!Yt()) return;
      k();
      const re = K.value.machining.validate(
        K.value,
        "holes",
        si?.holes
      );
      qe.value = re?.map((ce, ke) => ({
        index: ke,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], x.createHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.machining?.hingeHoles, () => {
      if (!Yt()) return;
      k();
      const re = K.value.machining.validate(
        K.value,
        "hingeHoles",
        si?.hingeHoles
      );
      qe.value = re?.map((ce, ke) => ({
        index: ke,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], x.createHingeHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.machining?.corners, () => {
      if (!Yt()) return;
      k();
      const re = K.value.machining.validate(
        K.value,
        "corners",
        si?.corners
      );
      qe.value = re?.map((ce, ke) => ({
        index: ke,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], K.value.machining.validate(K.value, "holes"), K.value.machining.validate(K.value, "hingeHoles"), x.createShape(), x.createHoles(), x.createHingeHoles();
      for (const ce of K.value.machining.corners)
        K.value.banding && ce?.getCorner && (K.value.banding[ce.getCorner()] = "");
      x.createBanding(), k(!1);
    }, { deep: !0, immediate: !0 }), Me(() => K?.value?.banding, () => {
      Yt() && (G(), x.createBanding());
    }, { deep: !0, immediate: !0 }), Wt(() => {
      if (document.body.style.overflow = "hidden", !K.value || !K.value.l || !K.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      yt(() => V()), at.value = !0;
    }), cs(() => document.body.style.overflow = ""), (re, ce) => {
      const ke = pi("FontAwesomeIcon");
      return v(), ve(Do, { to: "body" }, [
        O("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: gs
        }, [
          O("div", jy, [
            O("div", Vy, [
              I(o) === "development" && tb ? (v(), T("div", Ny, [
                Ee(I(i), {
                  data: [K.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : U("", !0),
              O("button", {
                class: "c-btn close",
                type: "button",
                onClick: ce[0] || (ce[0] = (oe) => ye())
              }, "×"),
              K.value?.name ? (v(), T("div", Gy, J(K.value.name), 1)) : U("", !0),
              O("div", qy, J(K.value?.l) + " x " + J(K.value?.w) + " " + J(K.value?.t ? "x " + K.value?.t : null), 1),
              t.options.faces.enabled ? (v(), T("div", zy, [
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
              r.value ? (v(), T("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: E
              }, " Delete all machining ")) : U("", !0),
              O("div", Wy, [
                t.options.holes.enabled ? (v(), T("div", {
                  key: 0,
                  class: Ie({ selected: X.value === "holes" }),
                  onClick: ce[1] || (ce[1] = (oe) => X.value = "holes")
                }, " Holes ", 2)) : U("", !0),
                t.options.hingeHoles.enabled ? (v(), T("div", {
                  key: 1,
                  class: Ie({ selected: X.value === "hingeHoles" }),
                  onClick: ce[2] || (ce[2] = (oe) => X.value = "hingeHoles")
                }, " Hinge holes ", 2)) : U("", !0),
                t.options.corners.enabled ? (v(), T("div", {
                  key: 2,
                  class: Ie({ selected: X.value === "corners" }),
                  onClick: ce[3] || (ce[3] = (oe) => X.value = "corners")
                }, " Corners ", 2)) : U("", !0),
                t.options.banding.enabled ? (v(), T("div", {
                  key: 3,
                  class: Ie({ selected: X.value === "banding" }),
                  onClick: ce[4] || (ce[4] = (oe) => X.value = "banding")
                }, " Banding ", 2)) : U("", !0)
              ]),
              X.value === "holes" || X.value === "hingeHoles" || X.value && X.value !== "banding" ? (v(), T("div", Hy, [
                X.value === "holes" || X.value === "hingeHoles" || X.value === "corners" ? (v(), T("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: H
                }, " Create ")) : U("", !0),
                X.value && X.value !== "banding" ? (v(), T("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: N
                }, " Delete all ")) : U("", !0)
              ])) : U("", !0),
              O("div", Uy, [
                X.value === "banding" && K.value ? (v(), ve(js, {
                  key: 0,
                  shape: K.value,
                  "onUpdate:shape": ce[5] || (ce[5] = (oe) => K.value = oe),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": p.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": I(qt),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : U("", !0)
              ]),
              X.value !== "banding" && h.value.length ? (v(), T("div", {
                key: 5,
                class: Ie(["grid-table", X.value]),
                style: Je({ "grid-template-columns": c.value })
              }, [
                O("div", Yy, [
                  C() ? (v(), T("div", Ky)) : U("", !0),
                  (v(!0), T(Te, null, je(u.value, (oe, Le) => ls((v(), T("div", {
                    key: Le,
                    class: "cell"
                  }, J(oe.label ?? Le), 1)), [
                    [ln, oe.enabled]
                  ])), 128)),
                  ce[8] || (ce[8] = O("div", { class: "cell" }, null, -1))
                ]),
                (v(!0), T(Te, null, je(h.value, (oe, Le) => (v(), T("div", {
                  key: Le,
                  class: "row"
                }, [
                  C() ? (v(), T("div", Zy, [
                    O("div", Xy, J(L(Le)), 1)
                  ])) : U("", !0),
                  (v(!0), T(Te, null, je(f.value, (Ve, ni) => (v(), T("div", {
                    key: ni,
                    class: "cell"
                  }, [
                    Ee(ki, {
                      type: u.value[Ve].type,
                      id: Ve + "-" + ni,
                      warning: de(Le, Ve),
                      "enable-label": !1,
                      placeholder: u.value[Ve].label ?? Ve,
                      disabled: Oe(u.value[Ve]),
                      value: I(ui)(oe, Ve),
                      output: u.value[Ve].output,
                      options: u.value[Ve].options,
                      "onUpdate:value": (mi) => I(Ji)(oe, Ve, mi)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", Jy, [
                    O("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (Ve) => W(Le)
                    }, [
                      Ee(ke, { icon: ["fass", "trash"] })
                    ], 8, Qy)
                  ]),
                  (v(!0), T(Te, null, je(le(Le), (Ve, ni) => (v(), T("div", {
                    key: ni,
                    class: "group validation",
                    style: Je({ "grid-column-end": "span " + l.value })
                  }, J(Ve), 5))), 128))
                ]))), 128))
              ], 6)) : X.value ? U("", !0) : (v(), T("div", eb, "Please select from the menu above"))
            ]),
            O("div", {
              id: "machining-diagram",
              class: Ie(["diagram", { flipped: ht.value === 1 }]),
              ref_key: "diagramRef",
              ref: a
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), sb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ib }, Symbol.toStringTag, { value: "Module" })), nb = {
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
        const o = {
          data: n,
          name: s.name
        };
        this.files.push(o);
        const a = i / e.length * 100;
        this.loadingProgress = a;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(t) {
      this.dropClass = t?.type ?? null, t.preventDefault();
    }
  }
};
function ob(t, e, i, s, n, o) {
  return v(), T("div", {
    id: "drop",
    class: Ie({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = or((...a) => o.onDrop && o.onDrop(...a), ["prevent"]))
  }, [
    O("div", null, J(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const ab = /* @__PURE__ */ Tt(nb, [["render", ob]]), rb = { id: "import-file" }, lb = /* @__PURE__ */ De({
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
    const i = t, s = e, n = te([]), o = te([]), a = te([]), r = te([]), l = te({}), c = te([]), u = te(!1), f = te(null), h = te(null), p = [
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
    ], k = Q(() => {
      const P = {};
      return n.value.forEach((_, W) => {
        P[W] = {};
        for (const [N, G] of Object.entries(_)) {
          if (!p.includes(N)) continue;
          const le = C(N, G);
          (le === !0 || le === !1) && (P[W][N] = le);
        }
      }), P;
    }), E = Q(() => i.customFields.map((P) => P.label)), L = (P, _) => {
      if (_) {
        const W = Object.keys(_), N = [[]];
        W.forEach((le) => {
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
      function W(G) {
        return G ? (G = G?.trim()?.toLowerCase(), G === "l" || G === "w") : !0;
      }
      const N = {
        banding: (G) => A(G, f.value, "banding"),
        finish: (G) => A(G, h.value, "finish"),
        orientationLock: W
      };
      return P in N ? N[P](_) : null;
    }, A = (P, _, W) => {
      if (P = g(P), !P) return !0;
      const N = P.split(","), G = N.every((le) => !le || _.has(le.toLowerCase()));
      if (!G) {
        const le = N.filter((fe) => !_.has(fe.toLowerCase()));
        console.log(`Valid ${W} choices...`), console.table(Array.from(_)), console.log(`The following ${W} choices are invalid`, le);
      }
      return G;
    }, $ = (P, _) => {
      const W = {
        bandingOptions: (N) => x(N, i.bandingOptions, i.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (N) => x(N, i.finishOptions, i.finishLabels, ["a", "b"])
      };
      return P in W ? W[P](_) : null;
    }, x = (P, _, W, N) => {
      if (P = g(P), !P)
        return N.reduce((fe, de) => ({ ...fe, [de]: {} }), {});
      const G = P.split(",").map((fe) => fe.toLowerCase()), le = {};
      return N.forEach((fe, de) => {
        le[fe] = {}, Object.keys(_).forEach((ye, Oe) => {
          le[fe][W[Oe]] = G[de]?.split("|")[Oe] || "";
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
      bandingOptions: k.value[_].banding ? $("bandingOptions", P.banding) : null,
      finishOptions: k.value[_].finish ? $("finishOptions", P.finish) : null,
      numberFormat: i.numberFormat,
      customData: Y(P)
    })), R = (P) => {
      const _ = P?.[0]?.data;
      _ && su.parse(_, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (W) => F(W),
        error: () => s("error")
      });
    }, F = (P) => {
      o.value = P.data.filter((_) => _.some((W) => W)), a.value = o.value[0], l.value = {};
      for (let _ = a.value.length; _--; ) {
        const W = a.value[_], N = H(W);
        N ? l.value[_] = N : (l.value[_] = null, E.value.includes(W) && (l.value[_] = "customData." + i.customFields.find((G) => G.label === W).id));
      }
      j(), o.value.shift(), M(), ae();
    }, H = (P) => {
      const _ = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", z("l"), z("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", z("w"), z("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", z("t"), z("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", z("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", z("quantity"), z("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", z("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", z("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", z("banding")],
        finish: ["finish", "paint"]
      }, W = Object.entries(_).reduce(
        (N, [G, le]) => (le.some((fe) => P && P.toLowerCase() === fe) && N.push(G), N),
        []
      );
      return W.length > 1 ? null : W[0];
    }, j = () => {
      u.value = !1, r.value = Object.values(l.value).map((_) => !_ || _ === "N" ? null : p.includes(_) ? _ : (u.value = !0, null));
      const P = r.value.filter((_, W) => r.value.indexOf(_) !== W);
      c.value = P.map((_) => r.value.reduce(
        (W, N, G) => (N && N === _ && W.push(G), W),
        []
      ));
    }, g = (P) => P && P.replace(/\s*,\s*/g, ","), M = () => {
      const P = o.value.map((_) => {
        const W = {};
        return a.value.forEach((N, G) => {
          if (c.value.flat().includes(G))
            return W[l.value[G]] = "???";
          W[l.value[G]] = _[G];
        }), W;
      });
      n.value = P;
    }, Y = (P) => {
      let _ = {};
      for (let W in P)
        if (W.startsWith("customData.")) {
          let N = W.slice(11);
          _[N] = P[W];
        }
      return _;
    }, ae = () => {
      const P = V();
      P?.length && s("import", P);
    };
    return Wt(() => {
      L("banding", i.bandingOptions), L("finish", i.finishOptions);
    }), (P, _) => (v(), T("div", rb, [
      Ee(ab, {
        label: I(z)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: R
      }, null, 8, ["label"])
    ]));
  }
}), cb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: lb }, Symbol.toStringTag, { value: "Module" })), ub = {
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
}, db = { class: "smartcut-object-viewer" }, fb = ["onClick"], hb = { class: "toggle-icon" }, pb = { class: "path-label" }, gb = {
  key: 0,
  class: "object-properties"
}, mb = {
  key: 0,
  class: "key"
}, yb = {
  key: 1,
  class: "null-value"
}, bb = { key: 2 };
function vb(t, e, i, s, n, o) {
  const a = pi("ObjectViewer", !0);
  return v(), T("div", db, [
    (v(!0), T(Te, null, je(i.data, (r, l) => (v(), T("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (c) => o.toggle(l)
      }, [
        O("div", hb, J(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", pb, J(i.paths[l] || l), 1)
      ], 8, fb),
      n.expanded[l] ? (v(), T("div", gb, [
        (v(!0), T(Te, null, je(r, (c, u) => (v(), T("div", {
          key: u,
          class: "property-item"
        }, [
          !o.isObjectOrArray(c) || c === null || Array.isArray(c) ? (v(), T("div", mb, J(u) + ": ", 1)) : U("", !0),
          O("div", {
            class: Ie(["value", o.getValueType(c)])
          }, [
            o.isObjectOrArray(c) && c !== null ? (v(), ve(a, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: o.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (v(), T("span", yb, "null")) : (v(), T("span", bb, J(o.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : U("", !0)
    ]))), 128))
  ]);
}
const wb = /* @__PURE__ */ Tt(ub, [["render", vb]]), ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: wb }, Symbol.toStringTag, { value: "Module" })), Sb = { class: "stock-filter-search" }, xb = { class: "search-input-wrapper" }, kb = ["placeholder"], Ib = /* @__PURE__ */ De({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials, colors, tags..." },
    debounce: { default: 300 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(i.modelValue);
    let o = null;
    Me(() => i.modelValue, (l) => {
      n.value = l;
    });
    function a() {
      o && clearTimeout(o), o = setTimeout(() => {
        s("update:modelValue", n.value);
      }, i.debounce);
    }
    function r() {
      n.value = "", s("update:modelValue", "");
    }
    return (l, c) => (v(), T("div", Sb, [
      O("div", xb, [
        ls(O("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: a
        }, null, 40, kb), [
          [bc, n.value]
        ]),
        n.value ? (v(), T("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: r
        }, " × ")) : U("", !0)
      ])
    ]));
  }
}), Cb = /* @__PURE__ */ Tt(Ib, [["__scopeId", "data-v-45127fff"]]), Pb = { class: "filter-panel-header" }, Tb = { class: "filter-panel-title" }, Ab = { class: "filter-panel-content" }, Ob = {
  key: 0,
  class: "filter-summary"
}, $b = { class: "filter-summary__count" }, Fb = { class: "filter-groups" }, Lb = { class: "filter-group__header" }, Eb = { class: "filter-group__label" }, Db = { class: "filter-group__content" }, Rb = {
  key: 0,
  class: "filter-select"
}, Mb = ["checked", "onChange"], _b = ["value", "onChange"], Bb = { value: "" }, jb = ["value"], Vb = {
  key: 1,
  class: "filter-range"
}, Nb = { class: "filter-range__inputs" }, Gb = ["value", "min", "max", "step", "onInput"], qb = ["value", "min", "max", "step", "onInput"], zb = {
  key: 2,
  class: "filter-boolean"
}, Wb = { class: "filter-checkbox" }, Hb = ["checked", "onChange"], Ub = /* @__PURE__ */ De({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = te(!0), o = te({}), a = Q(() => i.activeFilters.length);
    function r() {
      n.value = !n.value;
    }
    function l(A) {
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
    function k(A, $) {
      if (o.value[A]?.[$] !== void 0)
        return o.value[A][$];
      const x = i.activeFilters.find((V) => V.field === A);
      if (x?.value && typeof x.value == "object")
        return x.value[$];
    }
    function E(A, $, x) {
      const V = x.target, R = V.value ? Number(V.value) : void 0;
      o.value[A] || (o.value[A] = {}), o.value[A][$] = R;
      const F = o.value[A].min, H = o.value[A].max;
      F !== void 0 || H !== void 0 ? s("apply-filter", A, { min: F, max: H }, "range") : s("remove-filter", A);
    }
    function L(A, $) {
      $.target.checked ? s("apply-filter", A, !0, "boolean") : s("remove-filter", A);
    }
    function C() {
      o.value = {}, s("clear-filters");
    }
    return (A, $) => (v(), T("div", {
      class: Ie(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      O("div", Pb, [
        O("h3", Tb, J(I(z)("stockFilter.filters")), 1),
        O("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: r
        }, J(n.value ? "−" : "+"), 1)
      ]),
      Ee(vc, { name: "filter-panel-content" }, {
        default: Ii(() => [
          ls(O("div", Ab, [
            a.value > 0 ? (v(), T("div", Ob, [
              O("span", $b, J(I(z)("stockFilter.active_filters", [a.value])), 1),
              O("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: C
              }, J(I(z)("stockFilter.clear_all")), 1)
            ])) : U("", !0),
            O("div", Fb, [
              (v(!0), T(Te, null, je(t.filterConfigs, (x) => (v(), T("div", {
                key: x.field,
                class: "filter-group"
              }, [
                O("div", Lb, [
                  O("label", Eb, J(l(x)), 1)
                ]),
                O("div", Db, [
                  x.type === "select" || x.type === "multiselect" ? (v(), T("div", Rb, [
                    x.type === "multiselect" ? (v(!0), T(Te, { key: 0 }, je(c(x), (V) => (v(), T("label", {
                      key: V.value,
                      class: "filter-checkbox"
                    }, [
                      O("input", {
                        checked: f(x.field, V.value),
                        type: "checkbox",
                        onChange: (R) => p(x.field, V.value, R)
                      }, null, 40, Mb),
                      O("span", null, J(V.label), 1)
                    ]))), 128)) : (v(), T("select", {
                      key: 1,
                      value: u(x.field),
                      class: "filter-select-input",
                      onChange: (V) => h(x.field, V)
                    }, [
                      O("option", Bb, J(I(z)("stockFilter.all")), 1),
                      (v(!0), T(Te, null, je(c(x), (V) => (v(), T("option", {
                        key: V.value,
                        value: V.value
                      }, J(V.label), 9, jb))), 128))
                    ], 40, _b))
                  ])) : x.type === "range" ? (v(), T("div", Vb, [
                    O("div", Nb, [
                      O("input", {
                        value: k(x.field, "min"),
                        min: x.min,
                        max: x.max,
                        step: x.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (V) => E(x.field, "min", V)
                      }, null, 40, Gb),
                      $[0] || ($[0] = O("span", { class: "filter-range__separator" }, "–", -1)),
                      O("input", {
                        value: k(x.field, "max"),
                        min: x.min,
                        max: x.max,
                        step: x.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (V) => E(x.field, "max", V)
                      }, null, 40, qb)
                    ])
                  ])) : x.type === "boolean" ? (v(), T("div", zb, [
                    O("label", Wb, [
                      O("input", {
                        checked: u(x.field) === !0,
                        type: "checkbox",
                        onChange: (V) => L(x.field, V)
                      }, null, 40, Hb),
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
}), Yb = /* @__PURE__ */ Tt(Ub, [["__scopeId", "data-v-096696f3"]]), Kb = { class: "stock-filter-sort" }, Zb = { class: "sort-controls" }, Xb = { class: "sort-label" }, Jb = ["value"], Qb = ["value"], ev = ["title"], tv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, iv = {
  key: 0,
  d: "M8 3l4 5H4z"
}, sv = {
  key: 1,
  d: "M8 13l4-5H4z"
}, nv = /* @__PURE__ */ De({
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
      label: o(l)
    }));
    function o(l) {
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
    function a(l) {
      const c = l.target;
      s("update:sortBy", c.value);
    }
    function r() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, c) => (v(), T("div", Kb, [
      O("div", Zb, [
        O("label", Xb, J(I(z)("stockFilter.sort_by")) + ":", 1),
        O("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: a
        }, [
          (v(!0), T(Te, null, je(I(n), (u) => (v(), T("option", {
            key: u.value,
            value: u.value
          }, J(u.label), 9, Qb))), 128))
        ], 40, Jb),
        O("button", {
          type: "button",
          class: Ie(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? I(z)("options.by_dimensions") : I(z)("options.by_dimensions"),
          onClick: r
        }, [
          (v(), T("svg", tv, [
            t.sortOrder === "asc" ? (v(), T("path", iv)) : (v(), T("path", sv))
          ]))
        ], 10, ev)
      ])
    ]));
  }
}), ov = /* @__PURE__ */ Tt(nv, [["__scopeId", "data-v-bb32c593"]]), av = { class: "stock-filter-results" }, rv = { class: "results-header" }, lv = { class: "results-info" }, cv = { class: "results-count" }, uv = { class: "results-controls" }, dv = { class: "display-mode-toggle" }, fv = ["title"], hv = ["title"], pv = {
  key: 0,
  class: "results-loading"
}, gv = {
  key: 1,
  class: "results-empty"
}, mv = { class: "empty-message" }, yv = {
  key: 3,
  class: "results-pagination"
}, bv = ["disabled"], vv = { class: "pagination-pages" }, wv = ["onClick"], Sv = ["disabled"], xv = /* @__PURE__ */ De({
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
      const s = [], o = Math.floor(2.5);
      let a = Math.max(1, e.currentPage - o), r = Math.min(e.totalPages, a + 5 - 1);
      r === e.totalPages && (a = Math.max(1, r - 5 + 1));
      for (let l = a; l <= r; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (v(), T("div", av, [
      O("div", rv, [
        O("div", lv, [
          O("span", cv, J(t.totalResults) + " " + J(t.totalResults === 1 ? I(z)("stockFilter.result_one") : I(z)("stockFilter.result_other")), 1)
        ]),
        O("div", uv, [
          O("div", dv, [
            O("button", {
              type: "button",
              class: Ie(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: I(z)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (o) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              ar('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-702dc044><rect x="1" y="1" width="6" height="6" data-v-702dc044></rect><rect x="9" y="1" width="6" height="6" data-v-702dc044></rect><rect x="1" y="9" width="6" height="6" data-v-702dc044></rect><rect x="9" y="9" width="6" height="6" data-v-702dc044></rect></svg>', 1)
            ])], 10, fv),
            O("button", {
              type: "button",
              class: Ie(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: I(z)("stockFilter.list_view"),
              onClick: n[1] || (n[1] = (o) => s.$emit("update:displayMode", "list"))
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
            ])], 10, hv)
          ])
        ])
      ]),
      t.loading ? (v(), T("div", pv, [
        n[7] || (n[7] = O("div", { class: "spinner" }, null, -1)),
        O("p", null, J(I(z)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (v(), T("div", gv, [
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
        O("p", mv, J(I(z)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (v(), T("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (o) => s.$emit("clear-filters"))
        }, J(I(z)("stockFilter.clear_filters")), 1)) : U("", !0)
      ])) : (v(), T("div", {
        key: 2,
        class: Ie(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Gs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (v(), T("div", yv, [
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (o) => s.$emit("go-to-page", t.currentPage - 1))
        }, J(I(z)("pagination.previous")), 9, bv),
        O("div", vv, [
          (v(!0), T(Te, null, je(i.value, (o) => (v(), T("button", {
            key: o,
            type: "button",
            class: Ie(["pagination-page", { "pagination-page--active": o === t.currentPage }]),
            onClick: (a) => s.$emit("go-to-page", o)
          }, J(o), 11, wv))), 128))
        ]),
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (o) => s.$emit("go-to-page", t.currentPage + 1))
        }, J(I(z)("pagination.next")), 9, Sv)
      ])) : U("", !0)
    ]));
  }
}), kv = /* @__PURE__ */ Tt(xv, [["__scopeId", "data-v-702dc044"]]), Iv = {
  key: 0,
  class: "stock-filter-card__image"
}, Cv = ["src", "alt"], Pv = { class: "stock-filter-card__content" }, Tv = { class: "stock-filter-card__title" }, Av = { class: "stock-filter-card__specs" }, Ov = { class: "spec" }, $v = { class: "spec__label" }, Fv = { class: "spec__value" }, Lv = { class: "spec" }, Ev = { class: "spec__label" }, Dv = { class: "spec__value" }, Rv = {
  key: 0,
  class: "spec"
}, Mv = { class: "spec__label" }, _v = { class: "spec__value spec__value--color" }, Bv = {
  key: 1,
  class: "spec"
}, jv = { class: "spec__label" }, Vv = { class: "spec__value" }, Nv = {
  key: 0,
  class: "stock-filter-card__description"
}, Gv = { class: "stock-filter-card__footer" }, qv = {
  key: 0,
  class: "stock-filter-card__price"
}, zv = { class: "price__label" }, Wv = { class: "price__value" }, Hv = ["disabled"], Uv = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, Yv = /* @__PURE__ */ De({
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
    const i = t, s = e, n = Q(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), o = Q(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), a = Q(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), r = Q(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": l(i.buttonColor, -8)
    }));
    function l(u, f) {
      const h = u.replace("#", ""), p = parseInt(h, 16), k = Math.round(2.55 * f), E = (p >> 16) + k, L = (p >> 8 & 255) + k, C = (p & 255) + k;
      return `#${(16777216 + (E < 255 ? E < 1 ? 0 : E : 255) * 65536 + (L < 255 ? L < 1 ? 0 : L : 255) * 256 + (C < 255 ? C < 1 ? 0 : C : 255)).toString(16).slice(1)}`;
    }
    function c() {
      s("toggle-selection", i.stock);
    }
    return (u, f) => (v(), T("div", {
      class: Ie(["stock-filter-card", {
        "stock-filter-card--selected": t.isSelected,
        "stock-filter-card--unavailable": !t.stock.available
      }])
    }, [
      t.stock.imageUrl ? (v(), T("div", Iv, [
        O("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, Cv)
      ])) : U("", !0),
      O("div", Pv, [
        O("h3", Tv, J(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        O("div", Av, [
          O("div", Ov, [
            O("span", $v, J(I(z)("woodwork.material")) + ":", 1),
            O("span", Fv, J(t.stock.material || I(z)("general.na")), 1)
          ]),
          O("div", Lv, [
            O("span", Ev, J(I(z)("stockFilter.dimensions")) + ":", 1),
            O("span", Dv, J(t.stock.l) + " × " + J(t.stock.w) + J(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (v(), T("div", Rv, [
            O("span", Mv, J(I(z)("fields.color")) + ":", 1),
            O("span", _v, [
              O("span", {
                class: "color-swatch",
                style: Je({ backgroundColor: o.value })
              }, null, 4),
              ts(" " + J(a.value), 1)
            ])
          ])) : U("", !0),
          t.stock.weight ? (v(), T("div", Bv, [
            O("span", jv, J(I(z)("fields.weight")) + ":", 1),
            O("span", Vv, J(t.stock.weight) + " kg", 1)
          ])) : U("", !0)
        ]),
        t.stock.description ? (v(), T("div", Nv, J(t.stock.description), 1)) : U("", !0),
        O("div", Gv, [
          t.stock.cost ? (v(), T("div", qv, [
            O("span", zv, J(I(z)("stockFilter.price")) + ":", 1),
            O("span", Wv, J(n.value), 1)
          ])) : U("", !0),
          O("button", {
            type: "button",
            class: Ie(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: Je(r.value),
            disabled: !t.stock.available,
            onClick: c
          }, J(t.isSelected ? I(z)("stockFilter.remove") : t.stock.available ? I(z)("stockFilter.select") : I(z)("stockFilter.unavailable")), 15, Hv)
        ]),
        t.stock.leadTime ? (v(), T("div", Uv, J(I(z)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : U("", !0)
      ])
    ], 2));
  }
}), Kv = /* @__PURE__ */ Tt(Yv, [["__scopeId", "data-v-1ce32550"]]), Zv = { class: "stock-filter" }, Xv = /* @__PURE__ */ De({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => Ry()
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
    const s = t, n = i, o = te(s.stockOptions), a = te(s.config), r = te(s.numberFormat), {
      activeFilters: l,
      searchQuery: c,
      sortBy: u,
      sortOrder: f,
      displayMode: h,
      currentPage: p,
      filteredStock: k,
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
      stockOptions: o,
      config: a,
      numberFormat: r
    }), Y = Q(() => s.config.availableFilters.filter((_) => {
      const W = g(_.field);
      return W.length > 0 && W.some((N) => N != null);
    }));
    Q(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": ae(s.colors.button, -8)
    }));
    function ae(_, W) {
      const N = _.replace("#", ""), G = parseInt(N, 16), le = Math.round(2.55 * W), fe = (G >> 16) + le, de = (G >> 8 & 255) + le, ye = (G & 255) + le;
      return `#${(16777216 + (fe < 255 ? fe < 1 ? 0 : fe : 255) * 65536 + (de < 255 ? de < 1 ? 0 : de : 255) * 256 + (ye < 255 ? ye < 1 ? 0 : ye : 255)).toString(16).slice(1)}`;
    }
    function P(_) {
      const W = F(_);
      if (R(_), W) {
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
      filteredStock: k,
      getUniqueValues: g,
      getFieldRange: M
    }), (_, W) => (v(), T("div", Zv, [
      t.config.enableSearch ? (v(), ve(Cb, {
        key: 0,
        modelValue: I(c),
        "onUpdate:modelValue": W[0] || (W[0] = (N) => En(c) ? c.value = N : null)
      }, null, 8, ["modelValue"])) : U("", !0),
      Y.value.length > 0 ? (v(), ve(Yb, {
        key: 1,
        "filter-configs": Y.value,
        "active-filters": I(l),
        "get-unique-values": I(g),
        "get-field-range": I(M),
        onApplyFilter: I(A),
        onRemoveFilter: I($),
        onClearFilters: I(x)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : U("", !0),
      t.config.sortOptions.length > 0 ? (v(), ve(ov, {
        key: 2,
        "sort-by": I(u),
        "onUpdate:sortBy": W[1] || (W[1] = (N) => En(u) ? u.value = N : null),
        "sort-order": I(f),
        "onUpdate:sortOrder": W[2] || (W[2] = (N) => En(f) ? f.value = N : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : U("", !0),
      Ee(kv, {
        "total-results": I(E).length,
        "display-mode": I(h),
        loading: t.loading,
        "has-active-filters": I(l).length > 0,
        "current-page": I(p),
        "total-pages": I(C),
        "onUpdate:displayMode": W[3] || (W[3] = (N) => h.value = N),
        onClearFilters: I(x),
        onGoToPage: I(V)
      }, {
        default: Ii(() => [
          (v(!0), T(Te, null, je(I(E), (N) => (v(), ve(Kv, {
            key: N.id || `${N.material}-${N.l}-${N.w}-${N.t}`,
            stock: N,
            "is-selected": I(F)(N),
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
}), Jv = /* @__PURE__ */ Tt(Xv, [["__scopeId", "data-v-7b1c1d8d"]]), wS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Jv }, Symbol.toStringTag, { value: "Module" }));
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
    const [o, a] = n.map((r) => this.evaluate(r, i));
    return [">", "<", ">=", "<=", "=="].includes(s) ? this.evaluateComparison(s, o, a) : this.operations[s](o, a);
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
      for (const a of s)
        i.add(`${a[1]}.${a[2]}`);
      const n = Array.from(e.matchAll(/inputs\.(\w+)/g));
      for (const a of n)
        i.add(`input.${a[1]}`);
      const o = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const a of o)
        e.includes(a) && i.add(`input.${a}`);
    }
    return i;
  }
  buildFormulaGraph(e, i) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (o, a) => {
      const r = `${e}.${o}`;
      s.nodes.set(r, {
        panelKey: e,
        attribute: o,
        formula: a
      }), s.edges.set(r, this.isFormula(a) ? this.extractDependencies(this.stripFormulaPrefix(a.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", i.l), n("w", i.w), n("t", i.t), n("q", i.q), s;
  }
  resolveFormulas(e, i, s, n = {}) {
    const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), r = (l) => {
      if (o.has(l))
        return o.get(l);
      const [c, u] = l.split(".");
      if (!e.nodes.has(l)) {
        const E = n[c];
        if (E)
          return u === "q" ? E.q : E[u];
        throw new Error(`Node not found: ${l}`);
      }
      if (a.has(l))
        throw new Error(`Circular dependency detected at ${l}`);
      const f = e.nodes.get(l);
      if (typeof f.formula == "number")
        return o.set(l, f.formula), f.formula;
      a.add(l);
      const h = e.edges.get(l) || /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
      for (const E of h)
        if (E.startsWith("input.")) {
          const L = E.split(".")[1];
          p.set(E, s[L]);
        } else
          p.set(E, r(E));
      const k = this.evaluateFormulaWithDeps(f.formula, p, s);
      return o.set(l, k), a.delete(l), k;
    };
    for (const l of e.nodes.keys())
      r(l);
    return Object.fromEntries(o);
  }
  evaluateFormulaWithDeps(e, i, s, n) {
    if (!this.isFormula(e)) return e;
    let o = this.stripFormulaPrefix(e.toString());
    return o = o.replace(
      /inputs\.(\w+)/g,
      (a, r) => s[r]?.toString() || "0"
    ), o = o.replace(
      /panels\.(\w+)\.(\w+)/g,
      (a, r, l) => {
        if (r === n?.panelKey && n[l] !== void 0)
          return n[l].toString();
        if (i.has(`${r}.${l}`))
          return i.get(`${r}.${l}`).toString();
        throw new Error(`Undefined variable in formula: ${a}`);
      }
    ), this.evaluate(this.parse(o), s);
  }
  calculatePanels(e) {
    if (!this.spec?.panels) return {};
    const i = {};
    for (const [s, n] of Object.entries(this.spec.panels)) {
      const o = this.buildFormulaGraph(s, n), a = this.resolveFormulas(o, n, e, i), r = {
        panelKey: s,
        l: a[`${s}.l`],
        w: a[`${s}.w`],
        t: a[`${s}.t`],
        q: a[`${s}.q`] || 1
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
      const n = e.replace(/inputs\.(\w+)/g, (a, r) => {
        if (!(r in i))
          throw new Error(`Input not found: ${r}`);
        return i[r].toString();
      }), o = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (o) {
        const [, a, r] = o;
        if (!s[a])
          throw new Error(`Panel not found: ${a}`);
        return r === "q" ? s[a].q ?? 1 : s[a].dimensions[r];
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
        const n = i.pop(), o = i.pop(), a = i.pop();
        i.push({
          operation: "ternary",
          condition: a,
          trueExpr: o,
          falseExpr: n
        });
      } else {
        if (i.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const n = i.pop(), o = i.pop();
        i.push({
          operation: this.getOperation(s.toString()),
          operands: [o, n]
        });
      }
    if (i.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return i[0];
  }
  calculateHardware(e) {
    return this.spec?.hardware ? Object.entries(this.spec.hardware).reduce((i, [s, n]) => {
      const o = this.evaluateValue(n.q, e);
      return i[s] = {
        name: n.name,
        q: Math.ceil(o),
        totalCost: Math.ceil(o) * n.cost
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
      const o = i[s], a = this.spec.inputs[o];
      if (n.value === null || n.value === void 0)
        throw new ci(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < a.min || n.value > a.max)
        throw new ci(`Field ${s} value ${n.value} out of range [min: ${a.min}, max: ${a.max}]`, "FIELD_OUT_OF_RANGE");
      s++;
    }
  }
  fieldsToInputs(e) {
    const i = Object.keys(this.spec?.inputs || {});
    return e.reduce((s, n, o) => {
      const a = i[o];
      return a && (s[a] = n.value), s;
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
const Qv = {
  key: 0,
  class: "debug"
}, ew = { id: "formula-pricing" }, tw = {
  key: 1,
  class: "extras"
}, iw = { class: "heading" }, sw = { id: "hardware-total" }, nw = { class: "heading panels" }, ow = !1, aw = /* @__PURE__ */ De({
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
    const i = Mi(() => Promise.resolve().then(() => ta)), s = t, n = e, o = wc("calculator"), a = Q(() => o()), r = te("production");
    let l = null;
    const c = te(null), u = te([]), f = te(!1), h = te(""), p = Q(() => {
      if (!f.value || !u.value.length || u.value.every((F) => F.value === null)) return null;
      const R = $();
      return yt(() => n("panel-result", R)), R;
    }), k = Q(() => {
      if (!a.value || !f.value || !u.value.length || u.value.every((F) => F.value === null)) return;
      const R = x();
      return yt(() => n("hardware-result", R, E.value)), R;
    }), E = Q(() => {
      if (k.value)
        return Object.values(k.value).reduce((R, F) => R + F.totalCost, 0);
    });
    Me(p, (R) => {
      if (!f.value || !R || !a.value || !a.value?.inputShapes) return;
      const F = (g) => g?.name ? g.name.toLowerCase() : "", H = new Map(
        a.value.inputShapes.map((g) => [F(g), g])
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
        }, P = Y || a.value.createInputShape(ae);
        if (Y) {
          Object.assign(Y, ae);
          for (const _ of ["banding", "finish"])
            a.value.initExtrasOptions(Y, _);
        } else
          a.value.inputShapes.push(P);
        j.add(M);
      }
      a.value.inputShapes = a.value.inputShapes.filter(
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
        return a.value.inputShapes.length = 0, console.error(R), null;
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
    return (R, F) => (v(), T(Te, null, [
      r.value === "development" && ow ? (v(), T("div", Qv, [
        F[1] || (F[1] = O("div", null, "Developer information", -1)),
        Ee(I(i), {
          data: [p.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : U("", !0),
      O("div", ew, [
        c.value?.projectName ? (v(), ve(ki, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: h.value,
          "onUpdate:value": F[0] || (F[0] = (H) => h.value = H)
        }, null, 8, ["value"])) : U("", !0),
        (v(!0), T(Te, null, je(c.value?.inputs, (H, j, g) => (v(), ve(ki, {
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
        k.value ? (v(), T("div", tw, [
          O("div", iw, J(I(z)("Hardware")), 1),
          (v(!0), T(Te, null, je(k.value, (H, j) => (v(), T("div", { key: j }, J(H.name) + " x" + J(H.q) + " = " + J(t.formatPrice(H.totalCost)), 1))), 128)),
          O("div", sw, J(I(z)("Hardware total")) + " = " + J(t.formatPrice(E.value)), 1)
        ])) : U("", !0),
        O("div", nw, J(I(z)("Panels")), 1)
      ])
    ], 64));
  }
}), SS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: aw }, Symbol.toStringTag, { value: "Module" })), rw = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, lw = { class: "content" }, cw = ["onClick"], uw = ["innerHTML"], dw = /* @__PURE__ */ De({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = Mo(), n = te({}), o = Q(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (a, r) => {
      const l = pi("FontAwesomeIcon");
      return v(), ve(Do, { to: "body" }, [
        O("div", rw, [
          Ee(Sc, {
            name: o.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ie(["notices-container", e.position])
          }, {
            default: Ii(() => [
              (v(!0), T(Te, null, je(I(i), (c) => (v(), T("div", {
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
                O("div", lw, [
                  O("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, J(c.message), 9, cw),
                  O("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, uw)
                ]),
                c.persistent ? U("", !0) : (v(), ve(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (u) => I(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), xS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: dw }, Symbol.toStringTag, { value: "Module" }));
export {
  ne as $,
  Pw as A,
  Js as B,
  Go as C,
  ie as D,
  Ih as E,
  xi as F,
  Hw as G,
  ss as H,
  el as I,
  Oh as J,
  Uw as K,
  Iu as L,
  zi as M,
  Ce as N,
  bf as O,
  Jn as P,
  Z as Q,
  Dw as R,
  Qr as S,
  He as T,
  mr as U,
  kt as V,
  tt as W,
  ap as X,
  of as Y,
  bw as Z,
  Xt as _,
  tn as a,
  We as a$,
  ji as a0,
  Gt as a1,
  Lw as a2,
  Jt as a3,
  Yw as a4,
  Cw as a5,
  Ze as a6,
  Jd as a7,
  Ew as a8,
  Et as a9,
  Gw as aA,
  iS as aB,
  yr as aC,
  op as aD,
  sS as aE,
  Jh as aF,
  tS as aG,
  bn as aH,
  ul as aI,
  Se as aJ,
  Dr as aK,
  Xh as aL,
  br as aM,
  $a as aN,
  Qw as aO,
  eS as aP,
  Tw as aQ,
  fp as aR,
  hp as aS,
  Qe as aT,
  ti as aU,
  up as aV,
  pl as aW,
  nS as aX,
  mo as aY,
  ll as aZ,
  Ww as a_,
  ju as aa,
  kd as ab,
  Jw as ac,
  Kd as ad,
  _w as ae,
  Fw as af,
  gn as ag,
  Hi as ah,
  Rw as ai,
  Vw as aj,
  Ct as ak,
  Mw as al,
  ou as am,
  lu as an,
  hu as ao,
  ww as ap,
  vw as aq,
  Xw as ar,
  Zw as as,
  us as at,
  gr as au,
  nt as av,
  sd as aw,
  vt as ax,
  qw as ay,
  vi as az,
  yn as b,
  oS as b0,
  aS as b1,
  se as b2,
  Ow as b3,
  $w as b4,
  dt as b5,
  Bw as b6,
  jw as b7,
  zw as b8,
  Nw as b9,
  rS as bA,
  ta as bB,
  wS as bC,
  SS as bD,
  xS as bE,
  ef as ba,
  xw as bb,
  Lt as bc,
  Gi as bd,
  Ge as be,
  bt as bf,
  en as bg,
  Nt as bh,
  Aw as bi,
  nh as bj,
  ol as bk,
  qo as bl,
  di as bm,
  pn as bn,
  kw as bo,
  Ry as bp,
  vS as bq,
  ui as br,
  lS as bs,
  ya as bt,
  Pi as bu,
  ut as bv,
  Sw as bw,
  vu as bx,
  ba as by,
  Tt as bz,
  Eo as c,
  _a as d,
  vl as e,
  wl as f,
  _u as g,
  fS as h,
  uS as i,
  dS as j,
  yi as k,
  kn as l,
  Xp as m,
  pS as n,
  bS as o,
  yS as p,
  mS as q,
  Kw as r,
  zt as s,
  z as t,
  Iw as u,
  gS as v,
  Jp as w,
  hS as x,
  cS as y,
  yw as z
};
