import { i as lr, B as vc } from "./vendor-i18n-BuJwRgtG.js";
import { d as Re, c as A, o as w, F as Te, r as Ne, n as tt, a as Ce, b as O, w as fs, t as ee, v as fn, e as te, f as bt, g as Ht, h as X, u as cr, i as wc, j as Be, k as mt, l as Sc, m as hs, p as ke, q as x, s as Y, x as Ws, T as ja, y as ur, z as xc, A as ki, B as Ti, C as Hs, D as ci, E as bi, G as Ee, H as kc, I as dr, J as as, K as Ic, L as bo, M as Bi, N as yo, O as Pc, P as Cc, Q as Tc, R as Ac, S as Oc, U as Nn, V as Lc, W as $c } from "./vendor-vue-V1I1Po2P.js";
import { _ as he, o as F, a as J, s as h, n as d, b as D, c as ve, r as fe, u as ue, d as ii, e as fa, z as Fc, Z as Vn, f as Dc, l as de, p as Ui, g as _e, h as Ec, i as Rc, F as ls, j as fr, k as _c, m as Mc, q as Bc, t as jc, v as Nc, w as Vc, x as hr, y as Gc, A as Gn, B as pr, C as vo, D as qc, E as zc, G as Wc, H as pt, I as Us, J as Xe, K as Ii, L as wo, M as Hc, N as It, O as Ys, P as at, Q as Uc, R as Yc, S as Kc, T as Zc, U as Xc, V as Jc } from "./vendor-4AnxBRif.js";
import { u as Na, a as Qc, b as eu, c as tu, d as iu, e as Va, f as gr, g as su, h as nu, i as au, j as ou } from "./composables-DSQtSYAm.js";
import { a as mr, b as br, l as $t, c as Ks, d as Zs, s as ot, r as Nt, e as os, f as yr, g as ru, h as lu, i as cu, p as uu, S as du, j as fu, k as hu } from "./vendor-d3-DUCHe88K.js";
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
function vr() {
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
function Gw() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const qw = {
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
}, qn = {
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
function pu(t) {
  if (t in qn) {
    const e = t;
    return Pt() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${qn[e]}"`), qn[e];
  }
  return t;
}
var se = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(se || {}), gu = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(gu || {});
class St {
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
let zn = null;
const mu = (t) => (zn || (zn = St.create(se.Cut, "Cut")), zn(t));
let Wn = null;
const Je = (t) => (Wn || (Wn = St.create(se.Shape, "Shape", (e) => !("shapes" in e))), Wn(t));
let Hn = null;
const Dt = (t) => (Hn || (Hn = St.create(se.Stock, "Stock")), Hn(t));
let Un = null;
const wr = (t) => (Un || (Un = St.create(se.Group, "Group", (e) => "shapes" in e && Array.isArray(e.shapes) && e.type !== "user" && e.type !== "strip")), Un(t));
let Yn = null;
const ps = (t) => (Yn || (Yn = St.create(se.UserGroup, "Group", (e) => "shapes" in e && e.type === "user")), Yn(t));
let Kn = null;
const Sr = (t) => (Kn || (Kn = St.create(se.StripGroup, "Group", (e) => "shapes" in e && e.type === "strip")), Kn(t));
let Zn = null;
const xr = (t) => (Zn || (Zn = St.create(se.FirstShapeGroup, "Group", (e) => "shapes" in e && e.type === "firstShape")), Zn(t)), Ye = (t) => wr(t) || ps(t) || Sr(t) || xr(t);
let Xn = null;
const Vt = (t) => (Xn || (Xn = St.create(se.InputUserGroup, "InputUserGroup")), Xn(t));
let Jn = null;
const Gi = (t) => (Jn || (Jn = St.create(se.Segment, "Segment")), Jn(t));
let Qn = null;
const bu = (t) => (Qn || (Qn = St.create(se.Offcut, "Offcut")), Qn(t)), kr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
};
let ea = null;
const yu = (t) => (ea || (ea = St.create(se.Saw, "Saw")), ea(t)), Ir = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Rectangle")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Rectangle";
}, vu = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Placeable")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Placeable";
};
let ta = null;
const Se = (t) => (ta || (ta = St.create(se.InputShape, "InputShape")), ta(t));
let ia = null;
const qi = (t) => (ia || (ia = St.create(se.InputStock, "InputStock")), ia(t));
function wu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function Pr(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function Su(t) {
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
  return mu(t) ? se.Cut : Se(t) ? se.InputShape : qi(t) ? se.InputStock : Vt(t) ? se.InputUserGroup : ps(t) ? se.UserGroup : Sr(t) ? se.StripGroup : xr(t) ? se.FirstShapeGroup : wr(t) ? se.Group : Je(t) ? se.Shape : Dt(t) ? se.Stock : kr(t) ? se.Container : Gi(t) ? se.Segment : bu(t) ? se.Offcut : Ir(t) ? se.Rectangle : vu(t) ? se.Placeable : null;
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
}, xu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
function ku(t) {
  return t?.__entityType === se.Shape;
}
function zw(t) {
  return t?.__entityType === se.Group || t?.__entityType === se.StripGroup || t?.__entityType === se.FirstShapeGroup;
}
function Ww(t) {
  return t?.__entityType === se.UserGroup;
}
const Cr = he(["error", "warning"]), Tr = he(["saw", "stock", "part", "group", "machining", "extras"]);
F({
  message: h(),
  identifier: h(),
  field: J(J(h())),
  index: J(d()),
  id: h(),
  // Source object's autoId for linking back
  type: Cr,
  category: J(Tr)
});
const Iu = F({
  item: ve().nullable().default(null),
  message: h().default(""),
  params: fe(h(), ue([h(), d(), D(), ii()])).optional(),
  // Translation parameters
  field: J(J(h())).default([]),
  index: J(d()).nullable().default(null),
  id: h().nullable().default(null),
  // Source object's autoId
  issues: J(ve()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Cr.default("error"),
  category: J(Tr).nullable().default(null),
  throwError: D().default(!1),
  shouldTranslate: D().default(!0)
});
function Ai(t) {
  return !(!t || typeof t != "string");
}
function Pu(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function Cu(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function Tu(t) {
  return Ai(t) ? t.trim().split(" ").map((e) => Yi(e)).join(" ") : "";
}
function Yi(t) {
  return Ai(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function Au(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function Ou(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function Hw(t, e = 100) {
  return Ai(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let Ar = lr;
function Lu(t) {
  Ar = t;
}
function Et(t, e) {
  if (vr())
    return t;
  const i = Ar.t(t, { ...e });
  return !i || i === t ? t : Yi(i);
}
function $u(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function Fu(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if ($u(s)) {
      const n = Et(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Du(t, e) {
  const i = pu(t), s = t.startsWith("errors.validation.") ? t : i, n = Fu(e);
  return {
    message: Et(s, n),
    translationKey: s,
    params: n
  };
}
function Eu(t, e) {
  return Du(t, e).message;
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
    const i = Iu.parse(e), s = ie.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const a = i.shouldTranslate !== !1 ? Eu(i.message, i.params) : i.message;
    if (this.message = a, this.identifier = s, this.field = i.field.map((o) => [...o]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const o = `Issue created for ${Su(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
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
fa(
  (t) => t instanceof ie,
  { message: "Must be an Issue instance" }
);
const Or = /* @__PURE__ */ new Map();
let Lr = !1;
function Ru() {
  if (!Lr) {
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
  return Ru(), Or;
}
function Uw(t, e) {
  Or.set(t, e);
}
function Yw() {
  Lr = !0;
}
function hn(t, e) {
  const i = t;
  return i._fieldBehavior = { fieldBehavior: e }, i;
}
function So(t, e) {
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
function Cs(t) {
  const e = {};
  if (t instanceof Dc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = So(n);
      a && (e[s] = a);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const a = So(n);
      a && (e[s] = a);
    }
  }
  return e;
}
typeof Fc < "u" && Vn && Vn.prototype && (Vn.prototype.behavior = function(t) {
  return hn(this, t);
});
function ye(t, e = {}) {
  let s = ve().refine((o) => o == null ? !0 : typeof o == "object" && o !== null ? ("autoId" in o || "id" in o, !0) : !1, {
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
  return n = hn(n, a), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
}
function $e(t, e = {}) {
  let i = J(ye(t)).default([]).describe(
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
  return i = hn(i, s), i;
}
function _s(t, e = {}) {
  const i = t.map((a) => ye(a));
  let s = J(ue(i)).default([]).describe(
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
  return s = hn(s, n), s;
}
const $r = h().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), _u = h().max(200).default("").describe("User input name"), Mu = h().default("").describe("Parent identifier for tracking copies and relationships"), Bu = D().default(!1).describe("Prevent automatic rotation optimization"), ju = D().default(!1).describe("Whether this is an offcut piece"), Fr = J(h()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Ki = ue([
  de(""),
  de("l"),
  de("w"),
  de(" ").transform(() => ""),
  ii().transform(() => "")
]).default("").describe("Grain direction of the material"), Dr = ue([
  // String format (legacy support - color name or hex)
  h(),
  // Object format with hex and name
  F({
    hex: h().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: h().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Er = Ui(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  he(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), Nu = F({
  l1: d().default(0).describe("Long side 1 trim value"),
  l2: d().default(0).describe("Long side 2 trim value"),
  w1: d().default(0).describe("Short side 1 trim value"),
  w2: d().default(0).describe("Short side 2 trim value")
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 });
F({
  material: D(),
  thickness: D(),
  fit: D(),
  width: D()
}).nullable().default(null);
ue([
  de(""),
  de("l"),
  de("w"),
  ii()
]).default(null);
fe(h(), d()).nullable().default(null);
fe(h(), d()).nullable().default(null);
const Ga = ue([
  de(0),
  de(1)
]), Vu = F({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: Ga.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: d().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: D().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
});
F({
  subsetUsed: D().optional().describe("Whether a subset was used for strip shape batches"),
  groups: fe(h(), Vu).describe("Groups of strip shape batches keyed by ID")
});
const Gu = ["x", "y"];
he(Gu);
const qu = ["l", "w"];
he(qu);
const qa = ["l", "w"], mi = he(qa);
ue([
  de(0),
  de(1),
  de(2)
]);
ue([
  de(0),
  de(1),
  ii()
]);
const zu = ["sheet", "linear", "roll"], pn = Ui(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  ue([
    he(zu),
    ii()
  ]).nullable().default(null)
).describe("Type of stock material"), Rr = F({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: D().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: D().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: D().default(!1).describe("Automatically add stock as needed")
}), Wu = he(["none", "schema", "business", "full"]), Rt = F({
  // Validation issues (errors) - uses zRefArray to avoid type duplication across modules
  issues: $e("Issue", {
    description: "Validation issues (errors)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Validation warnings (non-critical issues) - uses zRefArray to avoid type duplication
  warnings: $e("Issue", {
    description: "Validation warnings (non-critical)"
  }).behavior({ compress: "exclude", serialize: "full" }),
  // Legacy flag to skip validation (backward compatibility)
  skipValidation: D().optional(),
  // New validation control properties
  skipSchemaValidation: D().optional(),
  skipBusinessValidation: D().optional(),
  validationMode: Wu.optional(),
  enableStrictMode: D().optional()
}), si = {
  // Check if valid (no errors)
  isValid: {
    compute: (t) => (t.issues || []).filter((i) => i.type === "error").length === 0,
    cache: !0,
    dependencies: ["issues"],
    returnType: "boolean"
  }
};
function Hu(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const za = Rt.extend({
  // Identity
  id: $r,
  // Description
  name: _u,
  // Dimensions
  l: Ui((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Length (long side dimension)"),
  w: Ui((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Width (short side dimension)"),
  t: d().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: d().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: d().positive().default(1).describe("Calculated area (l * w)"),
  longSide: d().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: d().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: h().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: D().default(!1).describe("Whether this is a duplicate"),
  offcut: ju,
  // Grain
  grain: Ki,
  preventGrainRotation: D().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Bu,
  orientationLock: Er,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: d().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: d().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: h().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: Nu.describe("Reduce the dimensions by specified trim values"),
  trimmed: D().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: F({
    rectangle: ye("Rectangle").nullable().default(null),
    distance: d().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: d().min(0).nullable().default(0).describe("Cost per unit"),
  customData: fe(h(), ve()).default({}).describe("Custom user-defined data"),
  identicalTo: Fr,
  notes: h().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), Wa = {
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
}, gn = za.extend({
  // Identity - override id to be required for containers
  id: h().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: Mu,
  // Container-specific fields
  stockType: pn,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: _s(["Shape", "Group"], {
    description: "Array of Shape or Group objects contained within this container"
  }).behavior({ clone: "reset", compress: "exclude" }),
  // Saw reference - using zRef for define.ref<Saw>('Saw') (share exact instance during cloning, serialize as reference)
  saw: ye("Saw", {
    nullable: !0,
    description: "Reference to Saw class"
  }).behavior({ clone: "share", compress: "reference" }),
  // Algorithm benchmark results (reset during cloning)
  algoBenchmark: ve().optional().describe("Benchmark results from optimization algorithms").behavior({ clone: "reset" }),
  // Container flag
  isContainer: D().default(!0).describe("Flag indicating this is a container")
}), mn = {
  // Include all Rectangle computed properties
  ...Wa,
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
    compute: (t) => Dt(t) ? t : Gi(t) || Ye(t) ? t.stock : null,
    metadata: {
      cache: !1,
      returnType: "Stock | null"
    }
  }
};
gn.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(mn)
}));
function xo(t, e) {
  return Ec(t, e);
}
function hi(t, e) {
  return _e(t, e);
}
function _i(t, e, i) {
  Rc(t, e, i);
}
function be(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function ko(t, e = !1) {
  if (!be(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => be(s) && s) : i.some((s) => be(s));
}
function Kw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added).map((s) => s), i = {};
  return e.forEach((s) => {
    const n = Uu(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot);
  }), Object.values(i);
}
function Uu(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function Yu() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Zw(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function qt(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function Ku(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function Zu(t, e) {
  if (!t || !e) return 0;
  const i = t.split(".").map(Number), s = e.split(".").map(Number), n = Math.max(i.length, s.length);
  for (let a = 0; a < n; a++) {
    const o = i[a] || 0, r = s[a] || 0;
    if (o > r) return 1;
    if (o < r) return -1;
  }
  return 0;
}
function Io(t, e) {
  return Zu(t, e) > 0;
}
function Xu(t, e, i, s, n, a) {
  const o = {
    get: (r) => localStorage.getItem(r),
    set: (r, l) => localStorage.setItem(r, l),
    clear: () => localStorage.clear(),
    reload: () => location.reload()
  };
  return Io(t, e) && !Io(i, e) ? (console.log(`[Migration] Clearing for migration from ${i} to ${t}`), n(), o.set(s, t), !0) : !1;
}
function Ju(t, e, i = !1) {
  const s = {
    get: (n) => localStorage.getItem(n),
    set: (n, a) => localStorage.setItem(n, a),
    clear: () => localStorage.clear(),
    reload: () => location.reload()
  };
  s.clear(), i && s.reload();
}
const Mi = 1e-10, Qu = 10, ed = Number.MAX_SAFE_INTEGER, td = 4294967295, gt = (t) => typeof t == "number" && Number.isFinite(t), Ms = (t) => Array.isArray(t) && t.length > 0;
function ts(t, e, i = Mi) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const id = {
  greaterThan: (t, e, i = Mi) => !gt(t) || !gt(e) ? !1 : ts(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = Mi) => !gt(t) || !gt(e) ? !1 : ts(t, e, i) >= 0,
  lessThan: (t, e, i = Mi) => !gt(t) || !gt(e) ? !1 : ts(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = Mi) => !gt(t) || !gt(e) ? !1 : ts(t, e, i) <= 0,
  equalTo: (t, e, i = Mi) => !gt(t) || !gt(e) ? !1 : ts(t, e, i) === 0
};
function sd(t) {
  return gt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(Qu)) : !1;
}
function nd(t) {
  if (!gt(t) || t < 0 || t > ed)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (td + 1) * t);
}
function ad(t, e) {
  if (!Ms(t))
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
class Ts {
  static calculateMean(e) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((a, o) => {
      const r = o - s;
      return a + r * r;
    }, 0) / e.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(e) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    const i = this.calculateMean(e);
    if (i === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(e, i) / i;
  }
}
const ne = {
  ...id,
  isNumber: gt,
  round: sd,
  getRandom: nd,
  getRandomSample: ad,
  calculateStandardDeviation: Ts.calculateStandardDeviation.bind(Ts),
  calculateCoefficientOfVariation: Ts.calculateCoefficientOfVariation.bind(Ts)
}, sa = 10, Po = 0;
class Xs extends Error {
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
function od(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new ls(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function rd(t, e) {
  const i = new ls(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new ls(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function ld(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const a = _r(n, !0), o = parseFloat(a ?? ""), r = a !== null && a !== "" && !isNaN(o) && isFinite(o);
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
function cd(t = "en-US") {
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
function Bs(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = cd(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), a = Number(n);
    return isFinite(a) ? a : null;
  } catch (i) {
    throw new Xs(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function Ha(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(ss).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function _r(t, e = !1) {
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
    } else if (Ha(i)) {
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
      const u = e ? Bs(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new Xs(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function Xw(t, e, i = null, s = null) {
  if (t && !(!Se(t) && !qi(t))) {
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
function ud(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function dd(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function U(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? sa, n = t.pl ?? e?.parseLocale ?? !1, a = t.fr ?? e?.fractionRoundTo ?? Po;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== sa) {
        const o = Math.pow(10, s);
        return Math.round(t.v * o) / o;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const o = t.v.trim();
      if (ud(o) && !n) {
        const r = parseFloat(o);
        if (isFinite(r)) {
          if (typeof s == "number" && s !== sa) {
            const l = Math.pow(10, s);
            return Math.round(r * l) / l;
          }
          return r;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const o = t.v.trim();
    if (dd(o))
      try {
        const r = new ls(o);
        if (isFinite(r.valueOf())) {
          if (a === 0 || a === Po)
            return r.toFraction(!0);
          const l = r.mul(a), c = Math.round(l.valueOf());
          return new ls(c, a).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const o = _r(t.v, n);
    return o === null || o === "" ? i === "decimal" ? null : "" : i === "decimal" ? od(o, s) : rd(o, a);
  } catch (o) {
    throw o instanceof Xs ? o : new Xs(
      `Failed to convert number format: "${t.v}" to ${i}. ${o.message}`
    );
  }
}
function zi(t, e = !1) {
  const i = typeof t.l == "string" ? U({ v: t.l }) : t.l, s = typeof t.w == "string" ? U({ v: t.w }) : t.w;
  if (!e)
    return { l: i, w: s };
  if (!("trim" in t))
    return { l: i, w: s };
  if (Pr(t))
    return { l: i, w: s };
  if (Ir(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, a = U({ v: n.l1 ?? 0 }) + U({ v: n.l2 ?? 0 }), o = U({ v: n.w1 ?? 0 }) + U({ v: n.w2 ?? 0 });
  return {
    l: i - (typeof a == "string" ? U({ v: a }) : a),
    w: s - (typeof o == "string" ? U({ v: o }) : o)
  };
}
function fd(t, e) {
  if ("trim" in t && !Pr(t)) {
    const i = t.trim;
    e.l = e.l - (U({ v: i.w1 ?? 0 }) + U({ v: i.w2 ?? 0 })), e.w = e.w - (U({ v: i.l1 ?? 0 }) + U({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Fi(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (qi(t) || Se(t) || ps(t)) && (s = {
    l: U({ v: t.l }),
    w: U({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = fd(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Mr(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function hd(t) {
  Ye(t) || (Mr(t), [t.l, t.w] = [t.w, t.l]);
}
function Zi(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && yu(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = U({ v: s.options.minSpacing }) : kr(e) && (n = e?.saw?.options.minSpacing);
  const a = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, o = zi(e, !0), r = a ? zi(e, !1) : o, l = zi(t, !0);
  let c = o;
  if (a && (ne.equalTo(l.l, r.l) && ne.equalTo(l.w, r.w) || ne.equalTo(l.l, r.w) && ne.equalTo(l.w, r.l)) && (c = r), l.l * l.w > c.l * c.w)
    return !1;
  function u(R, E) {
    return ne.equalTo(R, E) || ne.lessThanOrEqualTo(R, E - n * 2);
  }
  function f(R) {
    return u(R.l, c.l) && u(R.w, c.w);
  }
  const p = Br(t, e);
  if (t.orientationLock || i !== null) {
    const R = i ?? (p === "w" ? 1 : 0), E = Fi(t, R, !0);
    if (a) {
      const P = Fi(t, R, !1);
      if (ne.equalTo(P.l, r.l) && ne.equalTo(P.w, r.w))
        return f(P);
    }
    return f(E);
  }
  const g = Fi(t, 0, !0);
  if (a) {
    const R = Fi(t, 0, !1);
    if (ne.equalTo(R.l, r.l) && ne.equalTo(R.w, r.w) && f(R)) return !0;
  }
  if (f(g)) return !0;
  const k = Fi(t, 1, !0);
  if (a) {
    const R = Fi(t, 1, !1);
    if (ne.equalTo(R.l, r.l) && ne.equalTo(R.w, r.w) && f(R)) return !0;
  }
  return f(k);
}
function pd(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Ye(t) || ps(t) || Je(t) || Se(t)) && (e = t.orientationLock), e;
}
function Br(t, e) {
  const i = pd(t);
  if (!be(i)) return null;
  if (!e || "direction" in t) return i;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && be(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function jr(t, e) {
  if (Ye(t))
    return Zi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    wt(t, s, e) && Zi(t, e, s) && i.push(s);
  return i;
}
function wt(t, e = null, i = null) {
  if (!be(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Ye(t) && bd(t) && e || i && !Zi(t, i, e))
    return !1;
  const s = Br(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function gd(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), wt(t, e, i) ? (s === e || hd(t), !0) : !1;
}
function rt(t, e = null, i = null) {
  e ? e = 1 : e = 0;
  const s = t.id || t.autoId || "unknown";
  return i && e && !Zi(t, i, e) ? (console.warn(`[setRotation] ${s}: Cannot rotate to ${e} - won't fit in container`), !1) : gd(t, e, i);
}
function Jw(t, e) {
  if (Ye(t)) return t.rot;
  if (!be(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !be(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function Co(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const a = zi(t);
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
function md(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = zi(t), a = Math.max(n.l, n.w), o = Math.min(n.l, n.w);
  if (i === "l") {
    if (a === e && wt(t, 0, s)) return rt(t, 0);
    if (o === e && wt(t, 1, s)) return rt(t, 1);
  } else if (i === "w") {
    if (o === e && wt(t, 0, s)) return rt(t, 0);
    if (a === e && wt(t, 1, s)) return rt(t, 1);
  }
  return !1;
}
function bd(t) {
  Mr(t);
  const e = zi(t);
  return ne.equalTo(e.l, e.w);
}
function To(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let Ao = 0, Oo = Date.now();
const yd = 1e4;
function vd() {
  return Ao % yd === 0 && (Oo = Date.now()), `${Oo}-${(Ao++).toString(36)}`;
}
class wd {
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
    this.autoId = e?.autoId || vd(), Object.defineProperty(this, "_serializationMode", {
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
      const i = Cs(e.schema), s = e.schema;
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
        const r = Cs(o);
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
        if (s instanceof fr) {
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
      const g = s.pop() || "0", k = parseInt(g, 10);
      isNaN(k) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", k = parseInt(g, 10);
      isNaN(k) ? (s.push(g), n = "1") : n = String(k + 1);
    }
    s.push(n);
    const a = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let f = {};
    u && (f = Cs(u));
    const p = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [g, k] of Object.entries(f))
      k.clone === "reset" && (g in p ? c[g] = p[g] : delete c[g]);
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
    if (a && (o = Cs(a)[i] || null), o?.clone)
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
        if (To(o)) {
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
    if (To(e)) {
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
class Ue extends wd {
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
      if (i instanceof fr)
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
      if (o instanceof _c) {
        const r = o.options.some((c) => c instanceof Mc), l = o.options.some((c) => c instanceof Bc);
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
    if (e instanceof jc || e instanceof Nc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Vc)
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
const Sd = ["lr", "rl", "bt", "tb"];
F({
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  dimension: he(["l", "w"]).optional(),
  shapeCollisions: J(ve()).optional()
});
F({
  id: h().nullable().optional(),
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  origin: h().optional(),
  dimension: he(["l", "w"]).optional(),
  direction: he(Sd).nullable().optional(),
  type: h().nullable().optional()
});
const xd = F({
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
  shapeCollisions: J(ve()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: J(ve()).default([])
}), kd = {
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
    return new xi({ x1: e, y1: i, x2: s, y2: n, origin: a, type: o });
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
const Lo = ["topLeft", "topRight", "bottomLeft", "bottomRight"], Id = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], Pd = ["lr", "rl", "bt", "tb"], Cd = F({
  // ========== Coordinates ==========
  x: d().default(0),
  y: d().default(0),
  z: d().default(0),
  // ========== Shape References ==========
  a: h().optional(),
  b: h().optional(),
  stock: ye("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: he(Pd).nullable().optional(),
  type: h().optional(),
  corner: he(Lo).optional(),
  shapePosition: he(Lo).optional(),
  grid: he(Id).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: D().default(!1),
  collision: D().default(!1),
  tooClose: D().default(!1),
  adjustedForMinSpacing: D().default(!1)
}), Td = {
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
}, Ad = {
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
}, As = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Os = {
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
class it extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Cd;
  static computedProperties = Td;
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
    return new it(e, i, s);
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
    const s = new it(e ?? this.x, i ?? this.y);
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
      const s = Ad[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (As[this.corner] && (this.grid ? As[this.corner][this.grid] && As[this.corner][this.grid].forEach((s) => i.add(s)) : As[this.corner].default?.forEach((s) => i.add(s))), i) : (Os[this.corner] && (this.grid ? Os[this.corner][this.grid] && Os[this.corner][this.grid].forEach((s) => i.add(s)) : Os[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
class bn extends Ue {
  // Zod schema for validation and serialization
  static schema = za;
  static computedProperties = Wa;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Dt(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && rt(this, 0), this.orientationLock === "w" && rt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = qt(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = Hu(this.id);
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
      bottomLeft: new it(this.x, this.y),
      topLeft: new it(this.x, this.y + this.w),
      topRight: new it(this.x + this.l, this.y + this.w),
      bottomRight: new it(this.x + this.l, this.y)
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
    const s = new bn({
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
class yn extends bn {
  // Zod schema for validation and serialization
  static schema = gn;
  static computedProperties = mn;
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
    const i = yn.schema.partial().parse(e);
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
const Od = F({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: ue([
    de(0),
    de(1)
  ]).describe("Rotation"),
  order: d().optional().describe("Order of the batch"),
  id: h().optional().describe("Batch ID"),
  stockId: h().optional().describe("Associated stock ID"),
  rerunning: D().optional().describe("Whether the batch is being rerun"),
  priorityShape: h().nullable().describe("Priority shape identifier (null if none specified)")
}), Nr = F({
  // Strip direction
  myStripDirection: mi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: ue([
    ye("Shape", { nullable: !0 }),
    ye("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization"),
  // Phase number
  myPhase: d().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: F({
    subsetUsed: D().optional().describe("Whether a subset was used for strip shape batches"),
    groups: fe(h(), Od).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Nr.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const Ld = {};
class Xt extends Ue {
  // Required: Define schema and computed properties
  static schema = Nr;
  static computedProperties = Ld;
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
function Vr(t, e = "cc") {
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
function ha(t = 0, e, i = null, s = null, n = null) {
  if (!Se(i) && !Vt || s === "stock") return !1;
  let a, o;
  if (Se(i) ? a = i.orientationLock : Vt(i) ? a = i.direction : s === "shape" && (a = n), t === 0 || Vt(i))
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
function $d(t, e, i = null, s = null, n = null) {
  if (!Se(i) || s === "shape") return !1;
  let a;
  return t === 0 || t === 1 ? ha(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : a;
}
const Fd = ["l", "w"], Dd = ["top", "bottom", "left", "right", "merged"], Ed = F({
  // Coordinates
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // Dimension and position
  dimension: he(Fd).optional(),
  position: he(Dd).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: ye("Stock"),
  // Guillotine properties
  isGuillotine: D().default(!1),
  guillotineState: F({
    order: d().nullable().optional(),
    parentSegmentID: h().nullable().optional(),
    phase: d().nullable().optional(),
    segmentCutOrder: d().nullable().optional(),
    partProduced: h().nullable().optional()
  }).nullable().default({}),
  // PTX properties
  ptxData: F({
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
  distances: F({
    bottom: d().nullable().optional(),
    left: d().nullable().optional(),
    right: d().nullable().optional(),
    top: d().nullable().optional(),
    partSize: d().nullable().optional()
  }).nullable().optional(),
  // Runtime flags
  remove: D().optional().behavior({ compress: "exclude" })
}), Rd = {
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
class Ua extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ed;
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
    return new Ua({ x1: e, y1: i, x2: s, y2: n, position: o, stock: a });
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
const _d = F({
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
    ye("Shape", { nullable: !0 }),
    ye("Group", { nullable: !0 })
  ]).optional(),
  group: ye("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: mi.optional()
}).behavior({ clone: "reset" }), Md = F({
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
    ye("Shape", { nullable: !0 }),
    ye("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: d().optional()
}).behavior({ clone: "reset" }), $o = ue([
  _d,
  Md,
  // Also support the generic object with catchall for backward compatibility
  F({
    cutDirection: mi.optional(),
    myStripParent: ue([
      ye("Shape", { nullable: !0 }),
      ye("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: mi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), ms = za.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: J(h()).default([]).describe("Stock lock configuration"),
  // Stock matching - original object structure
  stockMatch: F({
    material: D(),
    thickness: D(),
    fit: D(),
    width: D()
  }).nullish().describe("Matching stock information"),
  // Guillotine state - reference that will be initialized in constructor (reset during cloning)
  // This ensures guillotineState is always a proper GuillotineState instance with methods
  guillotineState: ye("GuillotineState", {
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
  priority: fe(h(), d()).default({}).describe("Priority levels for optimization"),
  weighting: fe(h(), d()).optional().describe("Shape weighting for optimization"),
  // Pattern matching for stack detection (reset during cloning)
  patternMatch: D().default(!1).describe("Used for stack detection").behavior({ clone: "reset" }),
  firstShape: F({
    sampleRotations: J(d().int().min(0).max(1)).default([]).describe("Sample rotations (0 or 1) for first shape optimization").behavior({ clone: "reset" }),
    isFirstShape: D().default(!1).describe("Whether this is the first shape in optimization").behavior({ clone: "reset" })
  }).default({ sampleRotations: [], isFirstShape: !1 }),
  // Placement properties (reset during cloning)
  added: D().default(!1).describe("Whether shape has been added to a stock").behavior({ clone: "reset" }),
  placementOrder: d().int().min(0).optional().describe("Order in which shape was placed").behavior({ clone: "reset" }),
  // Stock reference (reset during cloning - cloned shapes should not be pre-placed)
  stock: ye("Stock", {
    nullable: !0,
    description: "Reference to the stock this item is placed on"
  }).behavior({ clone: "reset" }),
  // Stock fitting data
  fitsStock: fe(
    h(),
    fe(h(), D())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: F({
    x: d().nullable().default(null),
    y: d().nullable().default(null),
    rot: ue([de(0), de(1)]).nullable().default(null),
    total: d().nullable().default(null),
    weighting: fe(h(), d()).optional(),
    group: ye("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: $o.optional(),
    point: ve().optional().describe("Associated point for placement"),
    myStripParent: ue([
      ye("Shape", { nullable: !0 }),
      ye("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: mi.optional(),
    myStripDirection: mi.optional(),
    stock: ye("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: Pt() ? "full" : "exclude"
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: $o.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: Pt() ? "full" : "exclude"
  }),
  // Minimum spacing
  minSpacing: d().min(0).default(0).describe("Minimum spacing around shape or group")
}), bs = {
  // Include all Rectangle computed properties
  ...Wa
  // Placeable doesn't define additional computed properties
};
ms.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(bs)
}));
class Ya extends bn {
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
    (!this.firstShape || typeof this.firstShape != "object") && (this.firstShape = { sampleRotations: [], isFirstShape: !1 }), (!this.priority || typeof this.priority != "object") && (this.priority = {}), Je(this) && (!this.group || typeof this.group != "object") && (this.group = {
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
    Je(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = "")), Ye(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((a) => {
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
    this.placementOrder = null, this.stock = null, this.added = !1, Je(this) && (this.group.addedAsGroup = "", this.firstShape.isFirstShape = !1), Ye(this) && this.shapes.forEach((e) => {
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
    return !i || wu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
      group: Je(e) ? e.group.reference : null,
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
    return Dt(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Zi(this, e, i);
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
    const s = new it(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new it(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const a = new it(this.x, this.y);
    a.corner = "bottomLeft";
    const o = new it(this.x + this.l, this.y + this.w);
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
    return e === null && (e = Dt(this.stock) ? this.stock.bladeWidth / 2 : 0), [
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new Ua({
      stock: Dt(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
const ti = ["l1", "l2", "w1", "w2"], Bd = ["a", "b", "c", "d"], Ct = [...ti, ...Bd], ft = ["a", "b"], zt = {
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
  const i = `fields.${t}`, s = Et(i);
  if (s === i) {
    const n = zt[t] || t;
    return Pt() && !zt[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return Pt() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const Gr = (t, e, i, s, n, a) => {
  const o = _e(t, e);
  if (o == null || o === "") return;
  if (typeof o != "string") {
    new ie({
      item: t,
      message: Et("errors.validation.must_be_string", {
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
    message: Et("errors.validation.must_be_values", {
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
function qr(t) {
  return t.filter((e) => e.type === "error");
}
function jd(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Nd(t) {
  return jd(t, "issues") && Array.isArray(t.issues);
}
function Fo(t, e, i = !1) {
  if (!Nd(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((o) => o.type === s).some((o) => o.field?.length ? o.field.some((r) => r.every((l, c) => l === Gd(e[c]))) : !1);
}
const Vd = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Gd(t) {
  return Vd[t] ?? t;
}
const qd = ["banding", "finish", "planing", "info"], na = h().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), xt = ue([
  D(),
  h(),
  fe(h(), ue([D(), h()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), ys = Rt.extend({
  // ========== Identity ==========
  type: he(qd).optional().describe("Type of extra"),
  enabled: D().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: F({
    a: xt.optional(),
    b: xt.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: F({
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
}), vn = {
  // Inherit computed properties from validation base
  ...si
  // Add any extra-specific computed properties here
};
fe(
  he(["a", "b"]),
  xt
);
fe(
  he(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  xt
);
const zr = F({
  min: d().optional().describe("Minimum value"),
  max: d().optional().describe("Maximum value"),
  message: h().optional().describe("Custom error message")
});
F({
  scope: he(["face", "side"]),
  key: h(),
  // Face or Side key
  original: h()
  // Original ExtraLocation string
});
const zd = F({
  location: h().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: fe(h(), zr).optional(),
  disabledMessage: h().optional().describe("Message when location is disabled")
}), Wd = F({
  global: fe(h(), zr).optional(),
  locations: J(zd).optional().describe("Location-specific constraints"),
  defaultMessage: h().optional().describe("Default message when constraints not met")
});
F({
  scope: J(he(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: J(fa()).optional().describe("Available face locations"),
  sides: J(fa()).optional().describe("Available side locations"),
  constraints: Wd.optional()
});
const Wr = ys, Hd = {
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
  static computedProperties = vn;
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
class Ft extends cs {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Wr;
  static computedProperties = {
    ...cs.computedProperties,
    ...Hd
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
    return new Ft(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new Ft();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new Ft();
    return i.setAllSides(e), i;
  }
}
const Ud = Rt.extend({
  // Identity
  id: h().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: ye("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: ye("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: ye("Planing", {
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
}), Yd = {
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
}, Hr = ys, Kd = {
  // Inherit computed properties from Extra base (includes validation base)
  ...vn,
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
class vt extends cs {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Hr;
  static computedProperties = Kd;
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
const Ur = ys, Zd = {
  // Inherit computed properties from Extra base
  ...vn,
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
  static schema = Ur;
  static computedProperties = Zd;
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
class qe extends Ue {
  // Zod schema for validation and serialization
  static schema = Ud;
  static computedProperties = Yd;
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
    e ? e instanceof Ft ? this.banding = e : this.banding = new Ft(e) : this.banding = void 0;
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
    return new qe(e);
  }
  /**
   * Create empty extras container
   */
  static empty() {
    return new qe();
  }
  /**
   * Create with specific extras
   */
  static create(e) {
    return new qe(e);
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
    return s ? xu(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
          return qe.hasBanding(e);
        case "finish":
          return qe.hasFinish(e);
        case "planing":
          return qe.hasPlaning(e);
        case "imageUpload":
          return qe.hasImageUpload(e);
      }
    return qe.hasBanding(e) || qe.hasFinish(e) || qe.hasPlaning(e) || qe.hasImageUpload(e);
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
    return qe.hasBanding(e) && i.push("banding"), qe.hasFinish(e) && i.push("finish"), qe.hasPlaning(e) && i.push("planing"), qe.hasImageUpload(e) && i.push("imageUpload"), i;
  }
}
const Xd = F({
  id: h().optional(),
  url: h().optional(),
  size: d().optional(),
  mimeType: h().optional(),
  name: h().optional(),
  width: d().optional(),
  height: d().optional()
}), Jd = ys.extend({
  // ImageUpload specific properties
  images: J(Xd).default([]).describe("Array of uploaded images"),
  maxImages: d().default(5).describe("Maximum number of images allowed"),
  allowedTypes: J(h()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: d().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: h().optional().describe("Description of uploaded images"),
  tags: J(h()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), Qd = {
  // Inherit computed properties from Extra base class
  ...vn,
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
class Qw extends cs {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = Jd;
  static computedProperties = Qd;
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
const ef = {
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
}, tf = {
  cacheResults: !0
};
let Yr;
Yr = hr({}, ef, tf);
let ht = Yr;
function sf() {
  if (ht.guillotine.secondPass && !ht.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (ht.captureProfile && ht.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
sf();
function eS(t, e = null) {
  if (!t) return ht;
  const i = nf(t, e);
  if (!i) return ht;
  const s = hr({}, ht, i);
  return console.log(`[CONFIG] custom config applied for ${t?.username}`), s;
}
function nf(t, e = null) {
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
function tS(t, e, i) {
  return Gc(t, e, i);
}
try {
  typeof Gn < "u" && Gn && (Gn.showDiff = !0);
} catch (t) {
  console.warn("Error accessing chaiConfig, skipping configuration:", t);
}
const Do = pr("tests");
pr("timers");
let nt;
if (typeof vo == "function")
  nt = vo;
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
        if (e ? Do(e, a) : Do(a), ht && ht.throwErrorsOnFailedTests) throw n;
      }
    }
}
function Js(t) {
  return t && typeof t == "object" && "area" in t;
}
const pa = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, Ze = (t, e, i) => e in t ? t[e] : (console.warn(pa.missingProperty(String(e), i)), null), Ls = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Di = (t, e) => {
  if (Js(t) && Js(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Lt = (t, e) => {
  const i = Ze(t, "id", "first item"), s = Ze(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), a = s.toString().split(".");
  return n[0] !== a[0] ? parseInt(n[0]) - parseInt(a[0]) : parseInt(n[1]) - parseInt(a[1]);
};
function Bt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: a } of e) {
      const o = Ze(i, n, "first item"), r = Ze(s, n, "second item");
      if (!(o === null || r === null) && o !== r)
        return a === "desc" ? o < r ? 1 : -1 : o < r ? -1 : 1;
    }
    return 0;
  };
}
function Kr(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function af(t) {
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
  LDIDA: Ls(
    Bt([["l", "desc"]]),
    Lt
  ),
  WDIDA: Ls(
    Bt([["w", "desc"]]),
    Lt
  ),
  // Area-based sorts
  AD: (t, e) => -Di(t, e),
  AA: Di,
  AAID: Ls(
    Di,
    Lt
  ),
  ADID: Ls(
    (t, e) => -Di(t, e),
    Lt
  ),
  // ID sorts
  ID: Lt,
  IDDesc: (t, e) => -Lt(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Lt(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Lt(i, s);
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
    const i = Ze(t, "placementOrder", "first item") ?? 0, s = Ze(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = Ze(t, "offcut", "first item"), s = Ze(e, "offcut", "second item"), n = Ze(t, "placementOrder", "first item") ?? 0, a = Ze(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - a;
  },
  typeID: (t, e) => {
    const i = Ze(t, "offcut", "first item"), s = Ze(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Lt(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Lt(i, s);
    if (n !== 0) return n;
    const a = Ze(t, "offcut", "first item"), o = Ze(e, "offcut", "second item");
    if (a && !o) return 1;
    if (!a && o) return -1;
    const r = Ze(t, "placementOrder", "first item") ?? 0, l = Ze(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Lt(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const a = Ze(t, "placementOrder", "first item") ?? 0, o = Ze(e, "placementOrder", "second item") ?? 0;
      return a - o;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = Ze(t, "placementOrder", "first item") ?? 0, s = Ze(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (Js(t) && Js(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(pa.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(pa.missingLongSide), 0) : i[t] === e[t] ? -Di(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Kr,
  getSmallest: af
};
function iS(t, e) {
  return Math.random() * (e - t) + t;
}
function sS(t, e, i = "x") {
  if (!e) return !1;
  const s = i === "x" ? "l" : "w";
  return !!(ne.greaterThanOrEqualTo(t[i], e[i]) && ne.lessThanOrEqualTo(t[i] + t[s], e[i] + e[s]));
}
function nS(t, e, i = "x") {
  if (!e) return !1;
  const s = rf(i);
  return !!(ne.greaterThanOrEqualTo(t[i], e[i]) && ne.lessThan(t[i], e[i] + e[s]));
}
function aS(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function of(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function Eo(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
function rf(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
const lf = Ku;
function oS(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function Ro(t, e) {
  if (!be(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function rS(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(a) {
    if (s === !0) return a.added;
    if (s === !1) return !a.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((a) => n(a) && Ro(a, e) && a.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Dt(e) ? t[i]((a) => n(a) && Ro(a, e) && a.willItFit(e)) : t[i]((a) => n(a) && a.willItFit(e));
  }
  return t[i]((a) => n(a));
}
function lS(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((r) => r.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), a = i ? /* @__PURE__ */ new Map() : null, o = [];
  for (const r of s) {
    let l;
    if (Je(r))
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
function cf(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const a = t[n], o = jr(a, e.getStock), r = a.shortSide, l = a.longSide;
    o.forEach((c) => {
      if (!a.willItFit(e, c)) return;
      let u;
      !i || i === "l" ? u = c === 0 ? l : r : i === "w" && (u = c === 0 ? r : l), u && s.set(u, s.has(u) ? s.get(u) + 1 : 1);
    });
  }
  return s;
}
function cS(t, e = null) {
  const i = t.filter((a) => !a?.unusable && (e === null || a.used === e)), s = /* @__PURE__ */ new Map();
  for (const a of i) {
    const o = a.parentId;
    s.has(o) || s.set(o, a);
  }
  return Array.from(s.values());
}
function uS(t, e = null) {
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
function dS(t, e, i) {
  const s = t.filter((a) => a[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((a, o, r) => r > 0 ? a + o[n] + i : a + o[n], 0);
}
function uf(t, e) {
  const i = e === "x" ? "l" : "w", s = lf(e);
  if (!t?.length) return null;
  const n = t.reduce((o, r) => o[e] + o[i] > r[e] + r[i] ? o : r);
  return t.filter((o) => o[e] === n[e] && o[i] === n[i]).sort((o, r) => o[s] - r[s])[0];
}
function df(t, e, i) {
  if (e.length <= 1) return t;
  const s = pf(e, i), n = t.reduce((r, l) => (r[l.id] = gf(l, s), r), {}), a = Math.min(...Object.values(n));
  return t.filter((r) => !r.added && n[r.id] === a);
}
function ff(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function hf(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function fS(t, e) {
  return ff(t, e) < e.q;
}
function pf(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = hf(e, s)), i;
}
function gf(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function mf(t, e, i = !1) {
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
function hS(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function bf(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, a = t.y + t.w, o = e.x, r = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= o || // shape1 is completely to the left of shape2
  r <= i || // shape2 is completely to the left of shape1
  a <= l || // shape1 is completely below shape2
  c <= n);
}
function pS(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      bf(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function gS(t) {
  t.sort(Wt.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function mS(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
const Zr = J(h()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), yf = he(["l", "w"]).nullable().default(null), Xr = ue([
  de("l"),
  de("w"),
  ii()
]).default(null), vf = F({
  stockId: h().optional(),
  material: h().optional(),
  thickness: d().optional(),
  grain: Ki.optional()
}).describe("Which stock(s) this shape is a match for "), wf = fe(h(), ve()).default({});
Zr.describe("IDs of stocks this shape is locked to");
const Sf = Xr.describe("Direction that should face up");
F({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: Sf
});
const xf = F({
  // Whether shape is in a user-defined group
  inUserGroup: D().default(!1).describe("Whether shape is in a user-defined group"),
  // Whether shape is in any group
  inGroup: D().default(!1).describe("Whether shape is currently in a group"),
  // Placement order within group
  placementOrder: d().int().min(0).optional().describe("Placement order within group"),
  // Group reference (the actual Group class instance)
  reference: ye("Group", {
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
}).describe("Group metadata and reference"), ga = ms.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: xf,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: h().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: Fr,
  // Whether this is a duplicate
  duplicate: D().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: yf.describe("Direction that should face up"),
  // ========== Extras ==========
  // Extras container for banding, finish, planing, etc.
  // Override default reference behavior to preserve full data in compressed mode
  extras: ye("Extras", {
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
  machining: ye("Machining", {
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
}), Jr = {
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
ga.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Jr)
}));
class wn extends Ya {
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
  static schema = ga;
  static computedProperties = Jr;
  static defaults = ga.parse({});
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
    const i = new wn(e.data);
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
const Qr = ["horizontal", "vertical"], el = ["auto", "user", "strip", "firstShape"], Ka = he(Qr).optional(), kf = F({
  x: d(),
  y: d(),
  autoId: h().optional(),
  rot: Ga
}), If = ms.extend({
  // Override quantity - always 1 for groups
  q: d().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: D().default(!0),
  // Group-specific fields
  shapes: $e("Shape").default([]),
  direction: Ka,
  container: ue([
    ye("Segment"),
    ye("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: J(kf).default([]),
  type: he(el).default("auto"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: D().default(!1),
  collision: D().default(!1),
  counter: d().int().min(0).default(0),
  inputId: h().optional()
}), Pf = {
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
F({
  id: h(),
  x: d(),
  y: d(),
  shapes: $e("Shape"),
  direction: he(Qr),
  type: he(el),
  container: ue([
    ye("Segment"),
    ye("Stock")
  ]).optional()
});
class Sn extends Ya {
  // Required: Define schema and computed properties for SchemaClass
  static schema = If;
  static computedProperties = Pf;
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
      if (!Je(s) && !ku(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (Je(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const a = i.shapeList.find((o) => o.autoId === s.autoId);
        if (a)
          return a.group.reference = this, a.group.inGroup = !0, a;
      }
      const n = i ? { ...s, __context: i } : s;
      return new wn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new Sn(i);
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
    const s = of(this.direction), n = Eo(this.direction);
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
          ne.equalTo(u, this.groupLength),
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
    const e = Eo(this.direction), i = qt(e);
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
const Cf = (t, e) => Ie(t, e), ji = (t) => {
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
}, tl = () => Ie(
  Ki,
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
), Tf = () => Ie(
  Er,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), js = (t) => Ie(
  ji({ allowZero: t.allowZero, nullable: !0 }).default(null),
  {
    label: t.label,
    placeholder: t.placeholder || "",
    group: "dimensions",
    allowZero: t.allowZero || !1,
    output: "number"
  }
), Af = () => Ie(
  Ui(
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
), Of = (t) => Ie(
  h().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), Lf = () => Ie(
  h().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), $f = () => Ie(
  ji({ allowZero: !0, nullable: !0 }).optional().transform((t) => {
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
), Ff = () => Ie(
  qc().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), Df = (t) => Ie(
  D().default(!1),
  t
), Ef = (t, e) => Ie(
  he(t),
  e
), Qt = {
  field: Ie,
  boolean: Df,
  enum: Ef,
  custom: Cf
}, Rf = F({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: h().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: h().optional().describe("Reference marker for object recreation")
}), _f = F({
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
}), Mf = F({
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
}).default({ l1: 0, l2: 0, w1: 0, w2: 0 }), Bf = Ui(
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
  Mf
), jf = F({
  // ========== Identity ==========
  id: $r,
  index: d().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: js({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: js({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: js({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: Af(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: Of(),
  material: Lf(),
  // ========== Cost ==========
  cost: $f(),
  // ========== Trim Configuration ==========
  trim: Bf,
  // ========== Rotation (Runtime) ==========
  rot: Ga.default(0),
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
  notes: Ff()
}), Qs = F({
  ...Rf.shape,
  // System properties from AutoSerializable
  ...Rt.shape,
  ...jf.shape,
  // Core business fields
  ..._f.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: h().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), Za = {
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
function Nf(t, e, i) {
  return i ? typeof t == "number" ? isNaN(t) ? null : t : typeof t == "string" ? t : null : e === "decimal" ? t ? U({ v: t, nf: "decimal" }) : null : t;
}
function Vf(t, e, i, s = !1) {
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
const Gf = ["efficiency", "guillotine", "beam", "none"], ma = ["l", "w", "flex", "none"], qf = ["efficiency", "time"], zf = ["l", "w"], il = ["efficiency", "smallest"], Wf = ["dimensions", "identical", "none"], en = ["sheet", "linear", "roll"], xn = ue([
  d().int().positive(),
  ii(),
  zc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), kn = he(Gf).nullable().optional().transform((t) => t === null ? void 0 : t), In = he(ma).nullable().optional().transform((t) => t === null ? void 0 : t), Xa = he(il).default("efficiency").describe("Method for selecting stocks"), Ja = he(Wf).default("identical").describe("How to stack identical parts"), Pn = F({
  strategy: he(qf).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: D().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Qa = F({
  primaryCompression: he(zf).default("w")
}).default({
  primaryCompression: "w"
});
F({
  stockType: pn,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: xn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: kn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: In,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: Pn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Qa,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Xa,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Ja
});
const sl = d().min(0).default(0), nl = d().min(0).default(0), al = d().min(0).default(0), Hf = F({
  dimension: nl,
  minSpacing: al
});
function ba(t) {
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
function ya(t, e) {
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
const Uf = Ie(
  kn,
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
), Yf = Ie(
  In,
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
), Kf = Ie(
  Xa,
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
), Zf = Ie(
  Ja,
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
), Xf = Ie(
  Pn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Jf = Ie(
  Qa,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), tn = F({
  ...Rt.shape,
  // ========== Stock Type ==========
  stockType: Ie(
    he([...en]).default("sheet"),
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
    ji({ allowZero: !0, nullable: !1 }).default(0),
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
    xn,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: Uf,
  cutPreference: Yf,
  // ========== Guillotine Options ==========
  guillotineOptions: Xf,
  // ========== Efficiency Options ==========
  efficiencyOptions: Jf,
  // ========== General Options ==========
  options: F({
    stockSelection: Kf,
    minSpacing: ji({ allowZero: !0, nullable: !1 }).default(0),
    stackingMode: Zf,
    minSpacingDimension: F({
      dimension: ji({ allowZero: !0, nullable: !0 }).optional(),
      minSpacing: ji({ allowZero: !0, nullable: !0 }).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), Qf = {
  // Include validation computed properties (isValid)
  ...si,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => ba(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => ya(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, rs = Qs.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: tl(),
  // Add orientationLock with input-specific transform
  orientationLock: Tf(),
  // ========== Shared Shape Properties ==========
  upDirection: Ie(
    Xr,
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
    Zr,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: vf.nullable().optional(),
  // ========== Custom Data ==========
  customData: Ie(
    wf,
    { label: "fields.customData", description: "Custom user-defined data" }
  ),
  // ========== UI Extension (excluded from compression) ==========
  selectedMaterial: Ie(
    ve().optional(),
    { label: "fields.selectedMaterial", description: "Selected material object" }
  ).behavior({ compress: "exclude" }),
  // ========== Machining ==========
  // Override default reference behavior to serialize full data
  machining: ye("Machining", {
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
  extras: ye("Extras", {
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
}), eh = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Za,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Pi = F({
  ...Qs.shape,
  ...Rr.shape,
  // ========== Stock-specific Properties ==========
  // Override l to allow 0 for infinite length rolls
  l: js({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !0
  }),
  // Add grain field for stock
  grain: tl(),
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
    Dr,
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
    J(h()).optional(),
    {
      label: "fields.tags",
      description: "Searchable tags for filtering",
      group: "display",
      order: 4
    }
  ),
  available: Ie(
    D().optional(),
    {
      label: "fields.available",
      description: "Whether stock is available for selection (defaults to true)",
      group: "display",
      order: 5
    }
  ),
  // Saw configuration (excluded from compression)
  saw: Ie(
    ve().optional(),
    { label: "fields.saw", description: "Saw configuration data" }
  ).behavior({ compress: "exclude" })
}), th = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Za
  // InputStock doesn't define additional computed properties
}, eo = Rt.extend({
  // ========== Identification ==========
  id: h().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: J(h()).default([]).describe("List of shape IDs in this group"),
  shapes: J(h()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: Ka,
  // 'horizontal' | 'vertical'
  q: d().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: D().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: h().optional().describe("Group name"),
  material: h().optional().describe("Material type"),
  grain: Ki.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: F({
    stockId: h().optional(),
    material: h().optional(),
    thickness: d().optional(),
    grain: Ki.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: J(ve()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), ih = {
  // Include validation computed properties (isValid)
  ...si
  // InputUserGroup doesn't define additional computed properties
};
F({
  parts: J(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: Ka,
  q: d().int().min(1).describe("Quantity of groups")
});
function sn() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function Ni(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Xi(t) {
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
function _o(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Xi(i.error);
}
const ol = {
  clearValidation: sn,
  addIssue: Ni,
  validateWithSchema: _o,
  zodErrorsToIssues: Xi,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return sn.call(this), e.skipSchemaValidation || _o(t, this).forEach((s) => Ni.call(this, s)), this.issues || [];
  }
};
class rl extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Qs;
  static computedProperties = Za;
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
      s[o] === null || s[o] === void 0 ? delete s[o] : s[o] !== void 0 && (s[o] = Nf(s[o], i, n), s[o] === null && delete s[o]);
    s.name?.length ? s.name = Au(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Vf(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
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
    return sn.call(this), e?.skipSchemaValidation || ol.runValidation.call(
      this,
      Qs,
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
const va = Rt.extend({
  // Core properties from shared schema
  stockType: pn,
  stackHeight: xn.describe("Maximum stack height"),
  cutType: kn,
  cutPreference: In,
  // Blade width (numeric for runtime)
  bladeWidth: sl.describe("Blade width"),
  // Guillotine options
  guillotineOptions: Pn,
  // Efficiency options
  efficiencyOptions: Qa,
  // General options (nested stockSelection and stackingMode)
  options: F({
    stockSelection: Xa,
    minSpacing: al,
    stackingMode: Ja,
    minSpacingDimension: Hf
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), sh = {
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
va.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
class ll extends Ue {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = va;
  static computedProperties = sh;
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
  static defaults = va.parse({});
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
function to(t, e, i = "decimal") {
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
const nh = {
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
}, ah = {
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
}, oh = {
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
class cl extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = tn;
  static computedProperties = Qf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = ba(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = ya(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]);
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
    if (sn.call(this), e?.skipSchemaValidation || ol.runValidation.call(
      this,
      tn,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = U({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? Ni.call(this, new ie({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && Ni.call(this, new ie({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? Ni.call(this, new ie({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && Ni.call(this, new ie({
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
    const n = ba(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const a = i !== this.stockType, o = s !== this.cutType;
    if (a || o) {
      const r = ya(this.stockType, this.cutType);
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
    const e = this.toData(), i = to(
      e,
      oh
    );
    return new ll(i);
  }
}
const ul = Ct, Mo = ft;
ti.map((t) => `side.${t}`), Mo.map((t) => `face.${t}`), Mo.map((t) => `face.${t}`), ul.map((t) => `side.${t}`);
const dl = ["radius", "bevel"], rh = Rt.extend({
  // Corner type
  type: he(dl).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), lh = {
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
class Wi extends Ue {
  // Zod schema for validation and serialization
  static schema = rh;
  static computedProperties = lh;
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
    return new Wi(e);
  }
  /**
   * Create a radius corner
   */
  static radius(e, i) {
    return new Wi({ type: "radius", size: e, index: i });
  }
  /**
   * Create a bevel corner
   */
  static bevel(e, i) {
    return new Wi({ type: "bevel", size: e, index: i });
  }
}
const fl = ["l1", "l2", "w1", "w2"], ch = Rt.extend({
  // Position
  position: d().min(0).default(0).describe("Position along the side"),
  side: he(fl).describe("Side where hinge is placed"),
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
}), uh = {
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
}, dh = ["regular", "hinge", "shelf"], fh = Rt.extend({
  // Position
  x: d().min(0).default(0).describe("X position from left edge"),
  y: d().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: d().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: d().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: d().default(0).describe("Face index (0=front, 1=back)"),
  type: he(dh).default("regular").describe("Type of hole")
}), hh = {
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
  static schema = fh;
  static computedProperties = hh;
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
class nn extends Ue {
  // Zod schema for validation and serialization
  static schema = ch;
  static computedProperties = uh;
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
    return new nn(e);
  }
}
const ph = Rt.extend({
  // Collections of machining operations
  holes: $e("Hole").default([]).describe("Array of holes").behavior({
    serialize: "full",
    clone: "copy"
  }),
  hingeHoles: $e("HingeHole").default([]).describe("Array of hinge hole sets").behavior({
    serialize: "full",
    clone: "copy"
  }),
  corners: $e("Corner").default([]).describe("Array of corner operations").behavior({
    serialize: "full",
    clone: "copy"
  }),
  // Validation
  enabled: D().default(!0).describe("Whether machining is enabled")
}), gh = {
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
let mh = class wa extends Ue {
  // Zod schema for validation and serialization
  static schema = ph;
  static computedProperties = gh;
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
    this.hingeHoles.push(e instanceof nn ? e : new nn(e)), this.validate();
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
    const i = e instanceof Wi ? e : new Wi(e);
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
    return new wa();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new wa(e);
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
const bh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Gr(t, "orientationLock", ["l", "w"], e, i, s), s;
}, yh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Gr(t, "grain", ["l", "w"], e, i, s), s;
}, vh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = _e(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ie({
    item: t,
    message: Et("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, wh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = _e(t, "customData");
  if (a == null) return n;
  if (typeof a != "object" || a === null)
    return new ie({
      item: t,
      message: Et("errors.validation.must_be_object", {
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
        message: Et("errors.validation.must_be_string_number_boolean", {
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
}, Sh = ({ item: t, index: e }) => {
  const i = _e(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, xh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
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
}, kh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
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
}, Ih = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const a = [], o = _e(t, "l");
  return _e(t, "infiniteLength") || (o === null || o === "" || o === void 0 || o === 0) && new ie({
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
}, Ph = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
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
}, Ch = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: a = [] }) => {
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
}, Th = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], a = _e(t, "q"), o = _e(t, "autoAdd");
  return a == null || o === !0, n;
}, Ah = ({
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
}, Oh = ({
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
      message: Et("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: a,
      category: n
    });
  }), a;
}, Lh = ({
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
      message: Et("errors.groups.dimension_not_correct", {
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
}, $h = ({
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
    message: Et("errors.groups.not_enough_of_part", {
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
function Fh(t) {
  return Se(t) || Je(t) || ps(t);
}
function Dh(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function Eh(t, e, i) {
  return i ? !be(t.t) || !be(e.t) ? !1 : Je(t) ? ne.equalTo(U({ v: t.t }), U({ v: e.t })) : t.t === e.t : !0;
}
function Rh(t, e, i) {
  return i?.stockType !== "linear" || !Je(t) && !Se(t) ? !0 : wt(t, 0, e) && ne.equalTo(U({ v: t.w }), U({ v: e.w })) || wt(t, 1, e) && ne.equalTo(U({ v: t.l }), U({ v: e.w }));
}
function _h(t, e, i, s = 0) {
  const n = Se(t[0]), a = i.stockType;
  if (t.some((P) => be(P.stockLock) && P.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((P) => n || P.autoAdd === !0 || be(P.q) && Number(P.q) > 0);
  const r = e.some((P) => be(P.material)), l = e.some((P) => be(P.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), g = [];
  let k = s;
  for (const P of t) {
    const T = e.map((V, M) => {
      const $ = Fh(P) && Zi(P, V, void 0, i), H = Dh(P, V, r), N = Eh(P, V, l), m = Rh(P, V, i);
      return {
        stockItem: V,
        stockIndex: M,
        fit: $,
        material: H,
        thickness: N,
        width: m,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: $ && H && N && (a !== "linear" || m)
      };
    });
    P.stockMatch = {
      fit: T.some((V) => V.fit),
      material: !r || T.some((V) => V.material),
      thickness: !l || T.some((V) => V.thickness),
      width: a !== "linear" || T.some((V) => V.width)
    };
    const L = T.filter((V) => V.satisfiesAll), S = L.length > 0;
    if (!n && S) {
      const V = L.map((M) => M.stockItem.parentId);
      P.stockLock = V, V.forEach((M) => c.add(M));
    }
    P.stockMatch.fit ? S || (r && !P.stockMatch.material && (p.add(P), g.push(new ie({
      category: ["part", "stock"],
      item: P,
      field: [["material"]],
      index: [k],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !P.stockMatch.thickness && (p.add(P), g.push(new ie({
      category: ["part", "stock"],
      item: P,
      field: [["t"]],
      index: [k],
      message: "errors.validation.no_matching_stock_thickness"
    }))), a === "linear" && !P.stockMatch.width && (f.add(P), g.push(new ie({
      category: ["part", "stock"],
      item: P,
      field: [["w"]],
      index: [k],
      message: "errors.validation.no_matching_stock_width"
    }))), P.stockMatch.material && P.stockMatch.thickness && (a !== "linear" || P.stockMatch.width) && (p.add(P), g.push(new ie({
      category: ["part", "stock"],
      item: P,
      field: [["material"], ["t"]],
      index: [k],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(P), g.push(new ie({
      category: ["part", "stock"],
      item: P,
      field: [["l"], ["w"]],
      index: [k],
      message: "errors.validation.will_not_fit"
    }))), k++;
  }
  t.forEach((P) => P.stockMatch = null);
  let R, E;
  return n ? (R = t.filter((P) => u.has(P) || f.has(P) || p.has(P)).sort(Wt.ID), E = []) : (R = t.filter((P) => u.has(P) || f.has(P) || p.has(P) || !P.stockLock || !P.stockLock.length).sort(Wt.ID), E = e.filter((P) => !c.has(P.parentId)).sort(Wt.ID), e = e.filter((P) => Dt(P)).filter((P) => c.has(P.parentId)), t = t.filter((P) => !u.has(P) && !f.has(P) && !p.has(P) && P?.stockLock?.length)), {
    stockList: e,
    unusableStock: E,
    shapeList: t,
    unusableShapes: R,
    newIssues: g
  };
}
function Mh(t) {
  return t?.issues?.length > 0;
}
const Bh = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const a = [], o = i.stockType, r = _e(t, "q"), l = _e(t, "l"), c = _e(t, "w");
  return !r || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, o), Mh(t)) || _h([t], e, i, n).newIssues.forEach((f) => {
    a.push(f);
  }), a;
}, jh = ({
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
}, Nh = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], a = _e(t, "l"), o = _e(t, "w"), r = _e(t, "trim");
  if (!a || !o || !r) return n;
  if ((!Dt(t) || Dt(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
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
      }, g = p.w1 + p.w2, k = p.l1 + p.l2;
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
      }), k >= u && new ie({
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
  x: xh,
  y: kh,
  l: Ih,
  w: Ph,
  t: Ch,
  q: Th,
  // Trim
  trim: Nh,
  partTrim: jh,
  // Custom
  customData: wh,
  banding: vh,
  orientationLock: bh,
  grain: yh,
  machining: Sh,
  // Stock
  stockMatch: Bh,
  // Groups
  groupShapeCount: Ah,
  groupOrientationLock: Oh,
  groupDimensions: Lh,
  groupQuantity: $h
};
class Vh extends rl {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return rs;
  }
  static get computedProperties() {
    return eh;
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
    this.extras || (this.extras = new qe()), this.extras.banding = e;
  }
  get finish() {
    return this.extras?.finish;
  }
  set finish(e) {
    this.extras || (this.extras = new qe()), this.extras.finish = e;
  }
  get planing() {
    return this.extras?.planing;
  }
  set planing(e) {
    this.extras || (this.extras = new qe()), this.extras.planing = e;
  }
  get imageUpload() {
    return this.extras?.imageUpload;
  }
  set imageUpload(e) {
    this.extras || (this.extras = new qe()), this.extras.imageUpload = e;
  }
  // Note: Options getters/setters removed - options now centralized in CalculationData.extrasOptions
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}, i = "decimal") {
    const s = {
      ...e,
      // orientationLock transform is now handled by Zod schema
      machining: e.machining || new mh({
        holes: [],
        hingeHoles: [],
        corners: []
      }),
      extras: e.extras || new qe()
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
        const p = Xi(f.error);
        this.issues.push(...p);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = rs.safeParse(this.toData());
      if (!l.success) {
        const c = Xi(l.error);
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
    const i = to(
      this.toData(),
      nh,
      e
    );
    return new wn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          ul.map((i) => [i, !1])
        );
        break;
    }
  }
}
const Gh = F({
  // Internal-only fields (not exposed in API)
  fitsAll: D().default(!1),
  fitsAny: D().default(!1),
  largestShape: ve().nullable(),
  smallestShape: ve().nullable(),
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
}), qh = F({
  stock: ye("Stock", { nullable: !0 }).optional(),
  number: d().int().min(1).optional()
}), Sa = F({
  ...gn.shape,
  ...Rr.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: d().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: d().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: Gh.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: D().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: h().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: ye("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: ve().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: qh.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: D().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: he(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: D().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: D().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: h().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Dr.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: d().positive().optional().describe("Weight in kg"),
  imageUrl: h().url().optional().describe("Image URL for stock display")
}), hl = {
  // Include all Container computed properties
  ...mn,
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
Sa.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(hl)
}));
class an extends yn {
  static schema = Sa;
  static computedProperties = hl;
  static defaults = Sa.parse({});
  constructor(e = {}) {
    const i = an.preprocessData(e);
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
    const s = new an(i);
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
    const s = uf(e.filter((a) => a.added && a.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ne.equalTo(n, this.l) ? n : n + i;
  }
}
class bS extends rl {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Pi;
  static computedProperties = th;
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
      for (let p = this.issues.length - 1; p >= 0; p--)
        this.issues[p].field.some((k) => c.includes(k[0])) && this.issues.splice(p, 1);
      for (let p = this.warnings.length - 1; p >= 0; p--)
        this.warnings[p].field.some((k) => c.includes(k[0])) && this.warnings.splice(p, 1);
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
          const k = Xi(g.error);
          this.issues = [...this.issues, ...k];
        }
      } catch (p) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, p);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Pi.safeParse(this.toData());
      if (!c.success) {
        const u = Xi(c.error);
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
    const a = to(
      s,
      ah,
      e
    );
    return (i || this.saw) && (a.saw = i || this.saw), new an(a);
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
class yS extends Ue {
  // Required: Define schema and computed properties for SchemaClass
  static schema = eo;
  static computedProperties = ih;
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
        const a = e.find((o) => !!(o.autoId === n || Se(o) && o.autoId === n || "id" in o && o.id === n));
        a && (Se(a) || Je(a)) && s.push(a);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ie({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((a) => !!(a.autoId === s || String(a.autoId) === String(s) || "id" in a && (a.id === s || String(a.id) === String(s)) || Se(a) && (a.autoId === s || String(a.autoId) === String(s))));
      n && (Se(n) || Je(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || Se(n) && n.autoId === i);
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
      const p = s.filter((k) => Se(k) || Je(k)), g = this.validateWithShapes(p);
      if (g.filter((k) => k.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const a = this.findShapes(s || []);
    if (a.length === 0)
      throw new Error("No shapes found for Group creation");
    const o = a.map((p) => Se(p) ? p.toShape() : p), r = o[0];
    o.forEach((p) => {
      if (s && Array.isArray(s)) {
        const g = s.findIndex((k) => "group" in k && k.group?.inUserGroup ? !1 : "parentId" in k && "parentId" in p && k.parentId === p.parentId || "id" in k && "id" in p && k.id === p.id);
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
    }, f = new Sn(u);
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
const Ns = F({
  min: ue([h(), d()]).optional(),
  max: ue([h(), d()]).optional()
});
fe(h(), Ns);
F({
  holes: fe(h(), Ns),
  hingeHoles: fe(h(), Ns),
  corners: fe(h(), Ns)
});
F({
  numberFormat: ve().optional(),
  // NumberFormat type
  decimalPlaces: d().optional(),
  fractionRoundTo: d().optional(),
  faces: F({
    enabled: D()
  }).optional(),
  holes: F({
    enabled: D(),
    defaultDiameter: d().optional(),
    diameters: J(d()).optional(),
    minDiameter: d().optional(),
    maxDiameter: d().optional(),
    enableDepth: D().optional(),
    depths: J(d()).optional(),
    defaultDepth: d().optional(),
    minDepth: d().optional(),
    maxDepth: d().optional()
  }).optional(),
  hingeHoles: F({
    enabled: D(),
    minimumHoleDistance: d().optional(),
    defaultDistanceFromEdge: d().optional(),
    defaultOuterSpacing: d().optional(),
    defaultHingeLength: d().optional()
  }).optional(),
  shelfHoles: F({
    enabled: D(),
    diameters: J(d()).optional(),
    depths: J(d()).optional()
  }).optional(),
  corners: F({
    enabled: D(),
    minValue: d().optional(),
    maxValue: d().optional(),
    types: J(he(["bevel", "radius"])).optional(),
    enableBanding: D().optional()
  }).optional(),
  banding: F({
    enabled: D(),
    labels: J(h()).optional(),
    options: ve().optional(),
    // ExtrasOptions
    pricing: fe(h(), d()).optional(),
    enableCorners: D().optional(),
    enableTypes: D().optional(),
    types: J(h()).optional()
  }).optional()
});
const zh = F({
  id: h(),
  x: d(),
  y: d(),
  diameter: d(),
  depth: d(),
  face: ue([de(0), de(1)]),
  type: h().nullable().optional(),
  valid: D().optional()
}), Wh = F({
  id: h(),
  position: d(),
  side: he(fl),
  face: ue([de(0), de(1)]),
  numHoles: d(),
  diameter: d(),
  depth: d(),
  hingeLength: d(),
  distanceFromEdge: d(),
  outerSpacing: d(),
  minimumHoleDistance: d().optional(),
  positionLimit: d().optional(),
  valid: D().optional()
}), Hh = F({
  type: he(dl).nullable(),
  size: d(),
  valid: D().optional()
});
F({
  holes: J(zh).optional(),
  hingeHoles: J(Wh).optional(),
  corners: fe(h(), Hh).optional()
});
F({});
const Uh = ["l", "w"], Yh = ms.extend({
  // Identity - offcuts need IDs for tracking and export
  id: h().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: D().default(!1),
  flex: he(Uh).optional(),
  // Cost is calculated, not set
  cost: d().min(0).nullable().default(0)
}), Kh = {
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
class pl extends Ya {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Yh;
  static computedProperties = Kh;
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
    return new pl({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
const Zh = F({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: ue([
    Wc(h(), ye("Point")),
    fe(h(), ye("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), Xh = {
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
  static schema = Zh;
  static computedProperties = Xh;
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
const gl = ["root", "firstShape", "near", "far", ""], Jh = gn.extend({
  // Cutting information
  cuts: $e("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: ye("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: d().int().min(0).nullable().default(null),
  cutDirection: he(qa).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: D().default(!1),
  firstShape: ye("Shape"),
  children: $e("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: ye("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: he(gl).nullable().default(null),
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
F({
  x: d().optional(),
  y: d().optional(),
  l: d().optional(),
  w: d().optional(),
  type: he(gl),
  parent: ve(),
  // Segment instance
  stock: ve(),
  // Stock instance
  offcut: D().optional(),
  merged: D().optional(),
  cutDirection: he(qa).nullable().optional()
});
const Qh = {
  ...mn,
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
class vS extends yn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Jh;
  static computedProperties = Qh;
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
function ml(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function Vs(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function ep(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function xa(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => xa(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return ep(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = xa(i[s], e));
  return i;
}
function bl(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? t : t.map((r) => bl(r, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === se.Rectangle || s === se.Placeable || s === se.Container || s === se.Shape || s === se.Group || s === se.Offcut || s === se.Stock || s === se.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, a = gs();
  if (n && a.has(n)) {
    const o = a.get(n), { __ref: r, __entityType: l, __context: c, ...u } = t, f = new o(u);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((p) => p instanceof ie ? p : ie.fromData(p, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((p) => p instanceof ie ? p : ie.fromData(p, f))), f;
  }
  return delete t.__context, t;
}
function Si(t, e) {
  if (e || (e = ml()), Array.isArray(t)) {
    const n = [];
    for (const a of t) {
      const o = Si(a, e);
      n.push(o), o && typeof o == "object" && (o.autoId || o.id) && Vs(e, [o]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && Vs(e, [t]), t;
  const i = xa(t, e), s = bl(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && Vs(e, [s]), s;
}
function wS(t, e) {
  const i = ml(e), s = t?.saw ? Si(t.saw, i) : void 0;
  s && Vs(i, [s]);
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
function SS(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => tp(n, e, i)).filter((n) => Ye(n)) : [] : [];
}
function tp(t, e, i) {
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
    const n = gs(), a = n.get("Group") || n.get(se.Group);
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
function xS(t, e) {
  Pt() && (t.stocks && t.stocks.forEach((i, s) => {
    Dt(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !Je(i) && !Ye(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    Gi(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
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
const Vi = pt("logs"), ka = pt("cuts"), on = pt("groups"), rn = pt("guillotine"), Ia = pt("results"), Pa = pt("scoring"), Ca = pt("firstShapes"), Ta = pt("calculations"), Aa = pt("subset"), Oa = pt("secondRun"), La = pt("stack"), ln = pt("errors"), $a = pt("allStock"), cn = pt("reset");
ln.color = 1;
on.color = 14;
rn.color = 159;
cn.color = 11;
function ip(t = "info", e, i) {
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
      Vi(a);
      break;
    case "guillotine":
      rn(a);
      break;
    case "results":
      Ia(a);
      break;
    case "secondRun":
      Oa(a);
      break;
    case "cuts":
      ka(a);
      break;
    case "scoring":
      Pa(a);
      break;
    case "calculations":
      Ta(a);
      break;
    case "stack":
      La(a);
      break;
    case "subset":
      Aa(a);
      break;
    case "errors":
      ln(a);
      break;
    case "allStock":
      $a(a);
      break;
    case "firstShapes":
      Ca(a);
      break;
    case "groups":
      on(a);
      break;
    case "reset":
      cn(a);
      break;
    default:
      Vi(a);
  }
  console.table = n;
}
const sp = "\x1B[31m", np = "\x1B[0m", Jt = (t = "info", e, i = null, s = null, n = !1) => {
  if (n) {
    switch (t) {
      case "info":
        Vi(e);
        break;
      case "guillotine":
        rn(e);
        break;
      case "results":
        Ia(e);
        break;
      case "secondRun":
        Oa(e);
        break;
      case "cuts":
        ka(e);
        break;
      case "scoring":
        Pa(e);
        break;
      case "calculations":
        Ta(e);
        break;
      case "stack":
        La(e);
        break;
      case "subset":
        Aa(e);
        break;
      case "errors":
        ln(`${sp}${e}${np}`);
        break;
      case "allStock":
        $a(e);
        break;
      case "firstShapes":
        Ca(e);
        break;
      case "groups":
        on(e);
        break;
      case "reset":
        cn(e);
        break;
      default:
        Vi(e);
    }
    if (i)
      switch (t) {
        case "info":
          Vi(i);
          break;
        case "guillotine":
          rn(i);
          break;
        case "results":
          Ia(i);
          break;
        case "secondRun":
          Oa(i);
          break;
        case "cuts":
          ka(i);
          break;
        case "scoring":
          Pa(i);
          break;
        case "calculations":
          Ta(i);
          break;
        case "stack":
          La(i);
          break;
        case "subset":
          Aa(i);
          break;
        case "errors":
          ln(i);
          break;
        case "allStock":
          $a(i);
          break;
        case "firstShapes":
          Ca(i);
          break;
        case "groups":
          on(i);
          break;
        case "reset":
          cn(i);
          break;
        default:
          Vi(i);
      }
    s && ip(t, s);
  }
};
function kS(t, e, i, s = !1) {
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
function di(t, e, i, s, n = null, a = null) {
  return new xi({ x1: t, y1: e, x2: i, y2: s, origin: n, type: a });
}
function ap(t, e) {
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
function Fa(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      op(
        s,
        e
      );
    }
}
function op(t, e) {
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
function IS(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), Fa(
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
    const p = Da(
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
function rp(t, e, i, s = "l", n, a = !1, o = this.config.subset.shuffles, r = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (k, R) => R[s] - k[s],
    // Largest first
    (k, R) => k[s] - R[s],
    // Smallest first
    (k, R) => R[s] / R.area - k[s] / k.area,
    // Best dimension-to-area ratio
    (k, R) => R.area - k.area,
    // Largest area first
    (k, R) => k.area - R.area
    // Smallest area first
  ], f = e.every(
    (k, R, E) => R === 0 || k.isIdentical(E[R - 1])
  );
  if (!a) {
    const k = e.reduce((R, E) => R + E[s] + t, 0) - t;
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
        area: e.reduce((R, E) => R + E.area, 0)
      } : !1;
  }
  const p = Da(t, e, i, s, n, a, r);
  if (p !== !1 && (c.push(p), p.score.efficiency > 0.95 && e.length > 10))
    return p;
  if (f)
    return c[0] || !1;
  const g = Math.min(o, u.length);
  for (let k = 0; k < g; k++) {
    const R = [...e];
    R.sort(u[k % u.length]);
    const E = Da(t, R, i, s, n, a, r);
    if (E !== !1 && (c.push(E), E.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((k, R) => R.score.efficiency - k.score.efficiency), c[0] || !1;
}
function Da(t, e, i, s = "l", n, a = !1, o = null) {
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
function lp(t, e, i = null, s = "l", n = !0, a = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const o = s === "l" ? "x" : "y", r = s === "l" ? "y" : "x";
  let l = 0;
  Ye(i) ? Fa(
    t,
    i
  ) : Fa(
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
function PS(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    Wt.ID
  );
  const n = t.shapes;
  return lp(
    n,
    e,
    null,
    s
  ), n;
}
function CS(t, e, i) {
  Jt("subset", `guillotine subset for segment ${t.id}`);
  function s(L, S = []) {
    const { shapes: V } = o(L);
    return V.filter((M) => {
      if (M.added || S.find(($) => $.id === M.id)) return !1;
      if (M.orientationLock)
        return ne.equalTo(M[f], L) ? ne.lessThanOrEqualTo(M.l, t.l) && ne.lessThanOrEqualTo(M.w, t.w) : !1;
      if (ne.equalTo(M.l, L) || ne.equalTo(M.w, L)) {
        const $ = ne.equalTo(M.l, L) ? M.w : M.l;
        return ne.lessThanOrEqualTo($, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n(L, S) {
    for (const V of L)
      if (S !== V[qt(t.getStock.cutPreference)] && rt(
        V,
        V.rot === 1 ? 0 : 1,
        t.getStock
      ) === !1)
        throw new Error(
          "rotateShapesToDimension - could not rotate strip shape correctly"
        );
  }
  function a(L, S, V, M = null) {
    let $ = s(
      L,
      S
    );
    if (M) {
      const m = $.find(
        (B) => B.parentId === M.parentId
      );
      if (m) return m;
    }
    if (Pt() && (n(
      $,
      L
    ), kt(
      [
        () => nt($.every((m) => m.l === L || m.w === L)).to.be.true
      ]
    )), !$.length) return !1;
    const H = [];
    for (const m of $) {
      const B = m.l === L ? m.w : m.l;
      V.includes(B) && H.push(m);
    }
    return $ = H.length ? H : $, Kr($);
  }
  function o(L) {
    const S = L;
    return T.has(S) || T.set(S, { shapes: [], priorities: [] }), T.get(S);
  }
  function r(L = null) {
    function S(M, $, H) {
      const { shapes: N, priorities: m } = o($);
      N.includes(M) || (N.push(M), m.push(H));
    }
    if (!k?.length) return T;
    const V = t.getStock;
    for (const M of k) {
      let $ = M.getPriority(V);
      L && M.parentId !== L.parentId && ($ = 0);
      const H = qt(f);
      if (!M.orientationLock)
        M.longSide <= g && M.shortSide <= t[H] && S(M, M.l, $), !M.isSquare && M.shortSide <= g && M.longSide <= t[H] && S(M, M.w, $);
      else {
        const N = jr(
          M,
          t.getStock
        );
        if (kt([() => nt(N.length).to.equal(1)]), rt(
          M,
          N[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const B = qt(f);
        M[f] <= g && M[B] <= t[B] && S(M, M[f], $);
      }
    }
    return T;
  }
  function l() {
    const L = [], S = Array.from(T.entries()).map(([M, { shapes: $, priorities: H }]) => ({
      dimension: M,
      count: $.length,
      totalPriority: $.length * Math.max(...H, 0)
    }));
    let V = S.reduce((M, { totalPriority: $ }) => M + $, 0);
    for (; S.length > 0; )
      if (V <= 0 || !Number.isFinite(V)) {
        const M = [];
        S.forEach(({ dimension: $, count: H }) => {
          M.push(...Array(H).fill($));
        });
        for (let $ = M.length - 1; $ > 0; $--) {
          const H = Math.floor(Math.random() * ($ + 1));
          [M[$], M[H]] = [M[H], M[$]];
        }
        L.push(...M);
        break;
      } else {
        const M = Math.random() * V;
        let $ = 0, H = -1;
        for (let K = 0; K < S.length; K++)
          if ($ += S[K].totalPriority, $ > M) {
            H = K;
            break;
          }
        H === -1 && (H = Math.floor(Math.random() * S.length));
        const { dimension: N, count: m, totalPriority: B } = S[H];
        L.push(N), S[H].count--, S[H].totalPriority -= B / m, S[H].count === 0 ? (V -= B, S.splice(H, 1)) : V -= B / m;
      }
    return L;
  }
  function c(L, S, V, M, $, H, N) {
    return V += L + S, M.push(L), $.push(
      H.l === L ? H.w : H.l
    ), N.push(H), V;
  }
  function u(L = null) {
    if (!k?.length) return [];
    if (!T.size) return [];
    const S = /* @__PURE__ */ new Map();
    let V = 0;
    const M = [], $ = [], H = [];
    let N = null, m = !0;
    for (let C = 0; C < this.config.subset.guillotine.shuffles; C++) {
      V = 0, M.length = 0, $.length = 0, H.length = 0, N = null, m = !0;
      const j = l();
      for (const W of j) {
        if (m ? N = W : N = p + W, V + N > g) continue;
        const z = a(
          W,
          $,
          H,
          L
        );
        z && (V = c(
          W,
          m ? 0 : p,
          V,
          M,
          H,
          z,
          $
        ), m = !1);
      }
      if (V) {
        const W = V / g;
        if (kt([() => nt(W).to.lessThanOrEqual(1)]), W < this.config.subset.efficiency.limit) continue;
        const z = $.map((me, ge) => ge);
        z.sort((me, ge) => H[ge] !== H[me] ? H[ge] - H[me] : M[ge] - M[me]);
        const G = z.map(
          (me) => M[me]
        ), le = z.map(
          (me) => $[me]
        );
        kt([
          () => nt(mf(le)).to.be.false
        ]), S.set(
          G.join("-"),
          {
            usedDimensions: G,
            usedShapes: le,
            efficiency: W,
            target: g,
            totalLength: V,
            priorityShape: L ? L.parentId : null
          }
        );
      }
    }
    if (S.size === 0) return [];
    const B = Array.from(
      S.values()
    );
    B.sort(
      (C, j) => C.efficiency > j.efficiency ? -1 : C.efficiency < j.efficiency ? 1 : C.efficiency === j.efficiency ? j.usedDimensions.length - C.usedDimensions.length : 0
    );
    const K = B.slice(
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
          (j, W) => {
            const z = C.usedDimensions[W];
            kt([() => nt([j.l, j.w].includes(z)).to.be.true]);
            let G;
            j.isSquare ? G = 0 : j.longSide === z ? G = t.getStock.cutPreference === "l" ? 1 : 0 : G = t.getStock.cutPreference === "l" ? 0 : 1, j.guillotineState || (j.guillotineState = new Xt({})), j.guillotineState.setStripShapeBatchGroup(P, {
              stockId: t.getStock.autoId,
              dimension: z,
              rot: G,
              order: W,
              //by this point sorting should have taken place
              priorityShape: C.priorityShape
            });
          }
        ), P++, kt(
          [
            () => {
              const j = C.usedDimensions.reduce(
                (G, le) => G + le,
                0
              ), W = (C.usedDimensions.length - 1) * p, z = j + W;
              return nt(ne.lessThanOrEqualTo(z, g)).to.be.true;
            },
            () => nt(
              oe.every((j) => j.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => nt(
              oe.every(
                (j) => j.usedDimensions.length === j.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), oe) : [];
  }
  const f = qt(t.cutPreference), p = t.getStock.bladeWidth, g = t[f];
  kt([() => nt(g).to.be.a("number")]);
  const k = df(
    t.shapes,
    e,
    i
  ), R = t.getStock;
  k.sort((L, S) => {
    const V = S.getPriority(R) - L.getPriority(R);
    if (V !== 0) return V;
    const M = L.id.toString().split("."), $ = S.id.toString().split(".");
    return M[0] !== $[0] ? parseInt(M[0]) - parseInt($[0]) : parseInt(M[1]) - parseInt($[1]);
  });
  const E = [];
  let P = 0;
  const T = /* @__PURE__ */ new Map();
  if (!this.config.priority.enable || t.type !== "root" || !t.shapes[0].getPriority(R)) {
    r();
    const L = u.call(this);
    E.push(...L);
  } else {
    const L = t.shapes[0];
    r(L);
    const S = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let V = 0; V < S; V++) {
      const M = u.call(this, L);
      E.push(...M);
    }
  }
  return Jt("subset", `${E.length} strip shape results ${E.map((L) => L.usedShapes.map((S) => S.id).join()).join(" | ")}`), E?.length ? E.length : 0;
}
function cp(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, a = t.x + t.l + n, o = e.x + e.l + n;
  if (!ne.lessThan(t.x, o) || !ne.greaterThan(a, e.x))
    return !1;
  const r = t.y + t.w + n, l = e.y + e.w + n;
  return ne.lessThan(t.y, l) && ne.greaterThan(r, e.y);
}
function up(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && cp(t, s, i))
      return !0;
  return !1;
}
function dp(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function fp(t, e, i = !0) {
  const s = dp(t), n = [];
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
function yl(t) {
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
  const k = hp(e, r, n, i, f);
  if (k.length < 2) return !1;
  const R = { config: p }, E = rp.call(
    R,
    i.bladeWidth,
    k,
    i.getStock,
    gp(r),
    s,
    o,
    g,
    l
  );
  if (!E) return !1;
  if (E?.shapes?.length > 1 && E?.totalLength) {
    let P;
    try {
      P = new Sn({
        id: a,
        direction: r,
        shapes: E.shapes,
        container: i,
        type: u
      }), Jt("groups", `[createGroup] Created group ${P.id} direction=${r} dims=${P.l}x${P.w} with ${P.shapes.length} shapes, [${P.shapes.map((T) => T.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (T) {
      return console.log("group error", T), !1;
    }
    return P;
  }
  return !1;
}
function TS(t) {
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
  if (!be(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!be(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const k = vl(a), R = qt(a), E = k === "horizontal" ? i.w : i.l, P = i.getStock;
  let T = [...e], L = o;
  if (L)
    if (md(
      L,
      L[R],
      R,
      P
    ) === !1)
      L = null;
    else {
      const K = L[R], oe = K * (1 - g);
      let C = K * (1 + g);
      C > i[R] && (C = i[R]), T = e.filter((j) => !Je(j) || j.autoId === L.autoId ? !1 : Co(
        j,
        oe,
        C,
        R,
        P
      ));
    }
  const S = cf(
    T,
    i,
    R
  ), V = Array.from(S.keys()).filter((B) => B <= E).sort((B, K) => K - B);
  if (V.length === 0) return [];
  const M = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
  for (const B of T) {
    const K = /* @__PURE__ */ new Map();
    for (const oe of V) {
      const C = oe * (1 - g);
      let j = oe * (1 + g);
      j > i[R] && (j = i[R]);
      const W = Co(
        B,
        C,
        j,
        R,
        P
      );
      K.set(oe, W);
    }
    $.set(B.autoId, K);
  }
  for (const B of V) {
    const K = [];
    for (const oe of T) {
      if (!Je(oe)) continue;
      $.get(oe.autoId)?.get(B) && K.push(oe);
    }
    M.set(B, K);
  }
  const H = [], N = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
  for (const B of V) {
    if (c !== void 0 && H.length >= c)
      break;
    const K = [];
    let oe = M.get(B).filter((C) => !N.has(C.autoId));
    if (!(oe.length < 2)) {
      for (; oe.length >= 2 && !(c !== void 0 && H.length >= c); ) {
        let C, j = !1;
        if (K.length && !r) {
          const W = K[K.length - 1], z = W.shapes.slice(), G = /* @__PURE__ */ new Set(), le = new Set(oe.map((we) => we.autoId)), me = [];
          let ge = !0;
          for (const we of z) {
            let Ae = !1;
            if (le.has(we.autoId) && !G.has(we.autoId)) {
              const Z = oe.find((ct) => ct.autoId === we.autoId);
              Z && (me.push(Z), G.add(we.autoId), Ae = !0);
            }
            if (!Ae)
              for (const Z of oe) {
                if (G.has(Z.autoId)) continue;
                const ct = `${Z.autoId}-${we.autoId}`;
                if (m.has(ct) || m.set(ct, Z.isIdentical(we)), m.get(ct)) {
                  me.push(Z), G.add(Z.autoId), Ae = !0;
                  break;
                }
              }
            if (!Ae) {
              ge = !1;
              break;
            }
          }
          if (ge && me.length === z.length) {
            if (j = !0, W.positions?.length === me.length)
              for (let we = 0; we < me.length; we++) {
                const Ae = me[we], Z = z[we], ct = W.positions[we]?.rot ?? Z.rot;
                if (Ae.rot !== ct && !rt(Ae, ct, i)) {
                  console.warn(`  Failed to rotate ${Ae.id} to ${ct} - skipping clone`), j = !1;
                  break;
                }
              }
            j && (kt([
              () => nt(me.every((we, Ae) => {
                const Z = W.positions[Ae]?.rot ?? z[Ae].rot;
                return we.rot === Z;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), C = W.cloneWithNewShapes(me));
          }
        }
        if (j || (C = yl({
          shapes: oe,
          container: i,
          targetSize: s,
          d: B,
          id: "g" + (typeof f?.group == "number" ? f.group : 0),
          exact: n,
          groupDirection: k,
          firstShape: L,
          tolerance: g,
          config: u,
          type: p
        })), C) {
          typeof f?.group == "number" && f.group++, K.push(C), C.shapes.forEach((z) => N.add(z.autoId));
          const W = [];
          for (const z of oe)
            N.has(z.autoId) || W.push(z);
          if (oe = W, oe.length < 2) break;
        } else
          break;
      }
      H.push(...K);
    }
  }
  return H;
}
function hp(t, e, i, s, n = 1e-3) {
  return t.filter((a) => {
    if (a.isSquare) return !0;
    const o = i * (1 - n), r = i * (1 + n), l = a.l >= o && a.l <= r, c = a.w >= o && a.w <= r;
    let u = null;
    if (l && c) {
      const f = Math.abs(a.l - i), p = Math.abs(a.w - i);
      u = f <= p ? "l" : "w";
    } else l ? u = "l" : c && (u = "w");
    if (u !== null) {
      const f = pp(
        u,
        e,
        a.rot
      );
      return wt(a, f, s) ? rt(a, f, s) : !1;
    }
    return !1;
  });
}
function pp(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function vl(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function gp(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function mp(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function bp(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const a of n.shapes)
        s.add(a.autoId);
  return t.filter((n) => Ye(n) || !s.has(n.autoId));
}
function yp(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Ye).forEach((o) => {
    o.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((o) => Je(o)).filter((o) => i.has(o.autoId)), a = e ? ` [${e}]` : "";
  nt(
    n.length,
    `${a} Found ${n.length} shapes that exist both in groups and independently: ${n.map((o) => o.id || o.autoId).join(", ")}`
  ).to.equal(0);
}
function AS(t) {
  const e = [], i = t.filter((n) => Ye(n)), s = t.filter((n) => Je(n));
  for (const n of i)
    n.added && e.push(n);
  for (const n of s)
    n.added && !n.group.inGroup && e.push(n);
  return e;
}
function vp(t, e) {
  t.push(e), t.sort((s, n) => (n.score?.total || 0) - (s.score?.total || 0));
  const i = t[0];
  if (i.score?.total && Ye(i) && (i.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(i), e.bestScore.group = i, i;
}
function OS(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: a, config: o, scoreFunction: r } = t;
  if (s.length < 3) return;
  Jt("groups", `[POSITION GROUPS] Creating groups at position (${a.x},${a.y}) for shape ${n.id} in container ${e.id} (${e.cutType})`);
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  Gi(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of u) {
    const k = qt(g), R = g === "l" ? "x" : "y", E = e[g] - n[R] - e.bladeWidth, P = e[g] - n[R], T = e[g] * 0.6;
    if (E <= 0 || P < T) continue;
    const L = mp(
      s,
      n,
      k
    );
    if (L.length < 2) continue;
    const S = yl({
      shapes: L,
      container: e,
      targetSize: E,
      d: n[k],
      id: "g" + n.id,
      exact: !1,
      groupDirection: vl(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: o.subset
      }
    });
    S && c.push(S);
  }
  c.sort((g, k) => k.efficiency - g.efficiency), c = c.slice(0, o.sample.groupSize);
  for (const g of c)
    g.x = a.x, g.y = a.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (up(g, i, e) || r(g, e, i, s, a));
  s.forEach((g) => g.resetGroupData());
  const f = vp(c, n), p = c.filter((g) => Ye(g) && g !== f);
  if (p.length > 0 && (Jt("groups", `[POSITION GROUPS] Destroying ${p.length} non-winning groups`), p.forEach((g) => {
    Jt("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  })), f) {
    if (Jt("groups", `[POSITION GROUPS] Winner: group ${f.id} with score ${f.score.total.toFixed(2)} (beat shape ${n.id} score ${n.score?.total?.toFixed(2) || 0})`), Gi(e)) {
      e.shapes.push(f);
      const g = e.shapes.length;
      e.shapes = bp(e.shapes, f);
      const k = g - e.shapes.length;
      k > 0 && Jt("groups", `[POSITION GROUPS] Removed ${k} child shapes from segment after adding group ${f.id}`);
    }
  } else c.length > 0 && Jt("groups", `[POSITION GROUPS] No winning group - shape ${n.id} scored better than ${c.length} groups`);
  return l && (n.orientationLock = null), f && Gi(e) && kt([
    () => yp(e.shapes, "POSITION GROUPS")
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
function Gs(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    vs(t, s, i);
  }
}
function Le(t, e, i, s, n) {
  const a = wp[t](e, i);
  return s && (a.corner = s), n && (a.direction = n), a;
}
const wp = {
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
function Sp(t, e, i) {
  const s = new ni(), n = i.toArray().sort(wl), a = e.bladeWidth;
  if (n.forEach((o) => {
    const r = o.corner, l = o.type;
    if (!a)
      s.add(o);
    else
      switch (r) {
        case "topRight":
          {
            const c = Le("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Le("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = Le("top", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Le("left", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = Le("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Le("right", o, a, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = Le("bottom", o, a, r);
            l && (c.type = l), s.add(c);
            const u = Le("left", o, a, r);
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
      (ne.lessThan(g.x, r) || ne.lessThan(g.y, l) || ne.greaterThan(g.x, c) || ne.greaterThan(g.y, u)) && f.splice(p, 1);
    }
    s.clear(), f.forEach((p) => s.add(p)), o.clear(), f = s.toArray();
    for (let p = f.length; p--; ) {
      const g = f[p];
      for (let k = t.length; k--; ) {
        const R = t[k];
        if (g.collidesWith(R)) {
          s.remove(g.x, g.y);
          break;
        }
      }
    }
  }
  return s;
}
function xp(t, e, i) {
  let s = [];
  const n = t.minSpacing, a = e.corner, o = e.direction;
  if (e.type === "shape")
    switch (a) {
      case "topLeft":
        o === "rl" && (s.push(Le("right", e, n, a, o)), s.push(Le("topRight", e, n, a, o))), o === "bt" && (s.push(Le("bottom", e, n, a, o)), s.push(Le("bottomLeft", e, n, a, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(Le("left", e, n, a, o)), s.push(Le("topLeft", e, n, a, o))), o === "bt" && (s.push(Le("bottom", e, n, a, o)), s.push(Le("bottomRight", e, n, a, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(Le("left", e, n, a, o)), s.push(Le("bottomLeft", e, n, a, o))), o === "tb" && (s.push(Le("top", e, n, a, o)), s.push(Le("topRight", e, n, a, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(Le("right", e, n, a, o)), s.push(Le("bottomRight", e, n, a, o))), o === "tb" && (s.push(Le("top", e, n, a, o)), s.push(Le("topLeft", e, n, a, o)));
        break;
    }
  else if (e.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(Le("top", e, 0)), s.push(Le("centre", e, 0)), s.push(Le("bottom", e, 0));
        break;
      case "tb":
      case "bt":
        s.push(Le("left", e, 0)), s.push(Le("right", e, 0)), s.push(Le("centre", e, 0));
        break;
    }
  if (s = s.filter((l) => l.x >= 0 && l.y >= 0), !s.length) return null;
  const r = new ni();
  for (const l of s)
    l.raycast = !0, Gs(r, kl(t, l, i).toArray());
  return Il(t, i, r), r;
}
function kp(t, e) {
  const i = new ni();
  return t.sort(wl), t.forEach((s) => {
    Ye(s) ? (Gs(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const a = n.getCoords(e);
      Gs(i, a, "group");
    })) : Gs(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function Ip(t = [], e, i) {
  const s = kp(
    t === null ? e : t,
    i
  );
  return Sp(
    e,
    i,
    s
  );
}
function wl(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function Sl(t, e, i, s, n, a) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = a;
}
function Pp(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new ni();
  const s = xl(e, t);
  for (const r of e)
    for (const l of s) {
      if (l.shape.id === r.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        Cp(
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
      const f = new it(u.x2, u.y2);
      a === u.direction && (Sl(f, r, null, u.direction, "edge"), vs(i, f));
    }
  }), i = Tp(i), i;
}
function xl(t, e) {
  return t.map((i) => {
    const s = ap(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function Cp(t, e, i, s) {
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
      const k = a ? t[`${r}1`] : n, R = a ? n : t[`${r}1`], E = new it(k, R), P = t.origin;
      Sl(E, e, i, t.direction, "shape", P), vs(s, E);
    }
  }
}
function Tp(t) {
  const e = new ni();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((a) => a.a === s);
    ["right", "left", "top", "bottom"].forEach((a) => {
      const o = Ap(
        n,
        a
      );
      o && vs(e, o);
    });
  }), e;
}
function Ap(t, e) {
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
function kl(t, e, i) {
  const s = new ni(), n = e.getAvailableShapePositions(i);
  for (const a of n) {
    let o;
    switch (o = Op(e, t, i), a) {
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
  return Il(t, i, s), s;
}
function Op(t, e, i) {
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
function Il(t, e, i) {
  let s, n, a, o;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, a = e.x + e.l - t.l, o = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, a = e.l - e?.trim?.l2 - t.l, o = e.w - e?.trim?.w2 - t.w);
  const r = i.toArray();
  for (let l = r.length; l--; ) {
    const c = r[l];
    (ne.lessThan(c.x, s) || ne.lessThan(c.y, n) || ne.greaterThan(c.x, a) || ne.greaterThan(c.y, o) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
const Lp = F({
  id: h(),
  count: d(),
  name: h(),
  l: d(),
  w: d(),
  t: d(),
  material: h()
}), io = F({
  inputStock: J(Pi),
  inputShapes: J(rs),
  inputSaw: tn,
  inputUserGroups: J(eo),
  // Centralized extras options for UI dropdowns
  extrasOptions: F({
    banding: F({
      options: J(h())
    }).optional(),
    finish: F({
      options: J(h())
    }).optional(),
    planing: F({
      options: J(h())
    }).optional()
  }).optional()
}).optional(), $p = F({
  // Banding metrics
  bandingLengthByType: fe(h(), d()).default({}),
  // Finish metrics (by face)
  finishAreaByType: fe(h(), d()).default({}),
  // Material summary with nested structure
  materialSummary: fe(
    h(),
    // material name
    fe(
      h(),
      // thickness
      F({
        used: d(),
        stacks: d(),
        bandingLengthByType: fe(h(), d())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: fe(h(), d()).default({}),
  addedPartTally: fe(h(), d()).default({}),
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
  totalRollLength: d().optional(),
  totalStockWeight: d().optional(),
  totalPartWeight: d().optional()
}), Cn = $p.extend({
  bandingLengthByType: fe(h(), d()).default({}),
  unplacedParts: J(Lp).default([])
}), Fp = F({
  // Core optimization results
  stockList: $e("Stock"),
  shapeList: $e("Shape"),
  cutList: $e("Cut").optional(),
  segmentList: $e("Segment").optional(),
  offcuts: $e("Offcut").optional(),
  saw: ye("Saw"),
  unusableShapes: $e("Shape").optional(),
  unavailableStock: $e("Stock").optional(),
  evolutionVisData: J(F({})).optional(),
  performance: h().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: Cn.optional(),
  credits: d().optional(),
  // Optional input data for debugging/API reporting
  inputs: io
});
F({
  // Job execution metadata
  success: D(),
  socketId: h().nullable().default(null),
  userId: h(),
  api: D(),
  app: D(),
  widget: D().optional(),
  cached: D().optional(),
  hash: h().optional(),
  webhook: h().optional(),
  config: ve().optional(),
  error: h().optional(),
  jobId: d().optional(),
  // Input data
  inputs: io,
  // The actual optimization results
  optimisation: Fp
});
F({
  // Database metadata
  jobId: d().optional(),
  // Job execution data
  success: D(),
  socketId: h().nullable().default(null),
  userId: h(),
  api: D(),
  app: D(),
  widget: D().optional(),
  cached: D().optional(),
  hash: h().optional(),
  webhook: h().optional(),
  config: ve().optional(),
  error: h().optional(),
  // Optimization results (flattened from optimization object)
  stockList: $e("Stock"),
  shapeList: $e("Shape"),
  cutList: $e("Cut").optional(),
  segmentList: $e("Segment").optional(),
  offcuts: $e("Offcut").optional(),
  saw: ye("Saw"),
  unusableShapes: $e("Shape").optional(),
  unavailableStock: $e("Stock").optional(),
  performance: h().optional(),
  metadata: Cn.optional(),
  apiVersion: d().optional(),
  credits: d().optional(),
  // Input data
  inputs: io,
  // Computed fields for easier querying/display
  numParts: d().optional(),
  numStock: d().optional()
});
F({
  id: h().optional(),
  name: h().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: h().optional(),
  q: d().optional(),
  orientationLock: ue([
    de(""),
    de("l"),
    de("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: ve().optional(),
  finish: ve().optional(),
  planing: ve().optional()
});
const Dp = F({
  issues: J(h()),
  id: h(),
  duplicate: D(),
  name: h(),
  added: D(),
  x: d(),
  y: d(),
  l: d(),
  w: d(),
  t: d(),
  q: d().optional(),
  // Add quantity for checkout compatibility
  orientationLock: ue([
    de(""),
    de("l"),
    de("w")
  ]),
  trim: F({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  material: h(),
  banding: ve(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: ve(),
  // Legacy field
  finish: ve(),
  // Using any for now, could use finishPropertiesSchema
  stock: F({ id: h() }),
  rot: D(),
  notes: h(),
  customData: fe(h(), ue([h(), d(), D()]))
});
F({
  issues: J(h()),
  id: h(),
  duplicate: D().optional(),
  name: h(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h(),
  cost: d(),
  used: D(),
  grain: ue([
    de(""),
    de("l"),
    de("w"),
    ii()
  ]).nullable(),
  trim: F({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  parts: J(Dp),
  efficiency: d(),
  notes: h().optional(),
  // Legacy V1 fields
  blade: F({
    width: d()
  }).optional(),
  cutPreference: ue([
    de("l"),
    de("w"),
    de("flex")
  ]).optional(),
  // Analysis data
  analysis: F({
    partArea: d(),
    totalParts: d(),
    areaEfficiency: d(),
    cutLength: d(),
    bandingLength: d(),
    numberOfCuts: d(),
    rollLength: d().optional()
  }).optional(),
  // Stack info
  stack: ve().optional(),
  // Stock quantity for checkout compatibility
  q: d().optional()
});
const LS = Us({
  // Context - using z.any() for complex external types
  job: at().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: It().nullable().default(null).describe("Socket.io connection ID"),
  user: at().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: at().describe("Configuration object"),
  // Type: Config
  api: Xe().nullable().default(null).describe("API mode flag"),
  app: Xe().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ye("Saw").describe("Saw configuration"),
  stockList: $e("Stock").default([]).describe("List of stock materials"),
  shapeList: _s(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  userGroups: $e("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: $e("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: _s(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: _s(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: pn,
  // Results storage
  cutList: $e("Cut").default([]).describe("List of cuts to make"),
  segmentList: $e("Segment").default([]).describe("List of segments"),
  offcuts: $e("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: $e("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Xe().default(!1).describe("Use inventory system"),
  successMetric: It().default(ht.successMetric).describe("Metric for optimization success"),
  enableEvo: Xe().default(!0).describe("Enable evolutionary algorithm"),
  weighting: wo(It(), at()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: at().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: at().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: Us({
    placement: Ys().default(0),
    group: Ys().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: Xe().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: Xe().default(!1).describe("Run guillotine second pass"),
  runningEvo: Xe().default(!1).describe("Currently running evolution"),
  evolutionVisData: Ii(wo(It(), Hc())).default([]).describe("Evolution visualization data"),
  final: Xe().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Xe().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: Xe().default(!1).describe("Has shape-level minimum spacing")
}), $S = {}, Ep = Uc(["decimal", "fraction"]), Rp = Us({
  job: at().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Preserve system properties like __entityType and autoId
  inputSaw: tn,
  inputShapes: Ii(rs),
  inputStock: Ii(Pi),
  inputUserGroups: Ii(eo).optional(),
  // Number format for conversion
  numberFormat: Ep.optional(),
  // Algorithm configuration
  enableEvo: Xe().default(!0),
  weighting: at().optional(),
  successMetric: It().optional(),
  useInventory: Xe().default(!1),
  // Context
  socketId: It().optional(),
  user: at().optional(),
  // IUser type
  // Application flags
  widget: Xe().optional(),
  api: Xe().optional(),
  app: Xe().optional(),
  domain: It().optional(),
  // API specific
  config: at().optional(),
  v: Ys().optional(),
  // API version
  webhook: It().optional()
});
Us({
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
  enableEvo: Xe(),
  weighting: at().optional(),
  successMetric: It().optional(),
  useInventory: Xe(),
  socketId: It().optional(),
  user: at().optional(),
  widget: Xe().optional(),
  api: Xe().optional(),
  app: Xe().optional(),
  domain: It().optional(),
  config: at().optional(),
  v: Ys().optional(),
  webhook: It().optional()
});
const _p = (t, e, i) => {
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
}, Mp = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BkVTCMq3.js"), "../translation/cs.json": () => import("./cs-6xa64o5s.js"), "../translation/da.json": () => import("./da-1PEYKEed.js"), "../translation/de.json": () => import("./de-B7VIAymf.js"), "../translation/el.json": () => import("./el-DqNEv-Pj.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-GqzMhJm4.js"), "../translation/fi.json": () => import("./fi-CeGrBotz.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-DR_091vb.js"), "../translation/hr.json": () => import("./hr-B3GJIcEf.js"), "../translation/hu.json": () => import("./hu-BwX49689.js"), "../translation/id.json": () => import("./id-Clx1rgUG.js"), "../translation/it.json": () => import("./it-DBaVPj4x.js"), "../translation/ja.json": () => import("./ja-DtVrx_AJ.js"), "../translation/ko.json": () => import("./ko-Ydpx1FvA.js"), "../translation/ms.json": () => import("./ms-BRSLxLjB.js"), "../translation/nl.json": () => import("./nl-D8ZZOFrs.js"), "../translation/no.json": () => import("./no-CYT2mmiH.js"), "../translation/pl.json": () => import("./pl-DIiaEWZJ.js"), "../translation/pt.json": () => import("./pt-ITE4boWm.js"), "../translation/ro.json": () => import("./ro-eCPozDM_.js"), "../translation/ru.json": () => import("./ru-NBxgH2nA.js"), "../translation/sk.json": () => import("./sk-D5k0XQUV.js"), "../translation/sv.json": () => import("./sv-Cp7OBv3a.js"), "../translation/th.json": () => import("./th-h2y4nqDR.js"), "../translation/tr.json": () => import("./tr-Cpskz7mx.js"), "../translation/uk.json": () => import("./uk-CALvBL53.js"), "../translation/vi.json": () => import("./vi-1PhXPb61.js"), "../translation/zh.json": () => import("./zh-ChMwqH6k.js") }), un = Object.keys(Mp).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
un.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const Ea = "en", Hi = lr.createInstance();
function q(t, e) {
  if (vr())
    return t;
  if (!Hi.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = Hi.t(t, e);
  return i = typeof i == "string" ? i : String(i), Yi(i);
}
const Fs = {}, Bp = {
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
      const s = await _p(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-BkVTCMq3.js"), "../translation/cs.json": () => import("./cs-6xa64o5s.js"), "../translation/da.json": () => import("./da-1PEYKEed.js"), "../translation/de.json": () => import("./de-B7VIAymf.js"), "../translation/el.json": () => import("./el-DqNEv-Pj.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-GqzMhJm4.js"), "../translation/fi.json": () => import("./fi-CeGrBotz.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-DR_091vb.js"), "../translation/hr.json": () => import("./hr-B3GJIcEf.js"), "../translation/hu.json": () => import("./hu-BwX49689.js"), "../translation/id.json": () => import("./id-Clx1rgUG.js"), "../translation/it.json": () => import("./it-DBaVPj4x.js"), "../translation/ja.json": () => import("./ja-DtVrx_AJ.js"), "../translation/ko.json": () => import("./ko-Ydpx1FvA.js"), "../translation/ms.json": () => import("./ms-BRSLxLjB.js"), "../translation/nl.json": () => import("./nl-D8ZZOFrs.js"), "../translation/no.json": () => import("./no-CYT2mmiH.js"), "../translation/pl.json": () => import("./pl-DIiaEWZJ.js"), "../translation/pt.json": () => import("./pt-ITE4boWm.js"), "../translation/ro.json": () => import("./ro-eCPozDM_.js"), "../translation/ru.json": () => import("./ru-NBxgH2nA.js"), "../translation/sk.json": () => import("./sk-D5k0XQUV.js"), "../translation/sv.json": () => import("./sv-Cp7OBv3a.js"), "../translation/th.json": () => import("./th-h2y4nqDR.js"), "../translation/tr.json": () => import("./tr-Cpskz7mx.js"), "../translation/uk.json": () => import("./uk-CALvBL53.js"), "../translation/vi.json": () => import("./vi-1PhXPb61.js"), "../translation/zh.json": () => import("./zh-ChMwqH6k.js") }), `../translation/${t}.json`, 3);
      Fs[t] = s.default, i(null, Fs[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function jp() {
  return Lu(Hi), await Hi.use(vc).use(Bp).init({
    debug: !1,
    fallbackLng: Ea,
    supportedLngs: un.length > 0 ? un : [Ea],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? Tu(t) : e === "sc" ? Yi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), Hi;
}
const Np = jp().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
}), FS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: Ea, SUPPORTED_LANGUAGES: un, i18nextInstance: Hi, i18nextReady: Np, t: q }, Symbol.toStringTag, { value: "Module" }));
class Bo {
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
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = Se(e) ? e.bandingOptions : void 0;
    if (!i && !s && !n) return !1;
    if (i && i instanceof Ft) {
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
    const l = new Ft(Object.keys(a).length > 0 ? { sides: a } : {}), c = Object.keys(o).length > 0 ? new Ft({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : Se(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), Se(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = Se(e) ? e.finishOptions : void 0;
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
    return "extras" in e && e.extras ? e.extras.finish = l : Se(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), Se(e) && n && (e.finishOptions = r), !0;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(e) {
    const i = e.banding;
    if (i && typeof i == "object" && !(i instanceof Ft) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof Ft) && !("sides" in n) && !("faces" in n))
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
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), Se(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : Se(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), Se(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
const Vp = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Gp = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function Ra(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function qp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function dn(t = !1) {
  return {
    a: t,
    b: t
  };
}
function zp(t = !1) {
  return {
    sides: Ra(t),
    faces: dn(t)
  };
}
function Wp(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function Hp(t) {
  const e = {};
  for (const [i, s] of Object.entries(Vp))
    i in t && (e[s] = t[i]);
  return e;
}
function Up(t) {
  const e = {};
  for (const [i, s] of Object.entries(Gp))
    i in t && (e[s] = t[i]);
  return e;
}
function yt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function ei(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, i = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && i && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const n = Hp(t), a = {};
    return "l1" in n && (a.l1 = yt(n.l1)), "l2" in n && (a.l2 = yt(n.l2)), "w1" in n && (a.w1 = yt(n.w1)), "w2" in n && (a.w2 = yt(n.w2)), a;
  }
  const s = {};
  return "l1" in t && (s.l1 = yt(t.l1)), "l2" in t && (s.l2 = yt(t.l2)), "w1" in t && (s.w1 = yt(t.w1)), "w2" in t && (s.w2 = yt(t.w2)), Object.keys(s).length > 0 ? s : t;
}
function Yp(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Ei(t) {
  return !t || !Array.isArray(t) ? t : t.map(Yp);
}
function Kp(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [i, s] of Object.entries(t.banding))
      s === !0 || s === !1 ? e[i] = s : typeof s == "number" ? e[i] = yt(s) : typeof s == "string" && s.length > 0 && (e[i] = s);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [i, s] of Object.entries(t.bandingType))
      if (t.banding) {
        const n = e[i];
        (n === !0 || typeof n == "string" && n.length > 0) && (typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s)));
      } else
        typeof s == "string" && s.length > 0 ? e[i] = s : typeof s == "number" && s !== 0 && (e[i] = String(s));
  return Object.keys(e).length > 0 ? e : void 0;
}
function _a(t) {
  return t && Up(t);
}
function Zp(t) {
  t?.type && delete t.type, Xp.call(this, t), Jp.call(this, t), Qp.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ma(e));
}
function Xp(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Jp(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Qp(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function Ma(t) {
  !t || typeof t != "object" || (Bo.needsMigration(t) && Bo.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Pl(t) {
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
function DS(t) {
  if (!(!t || typeof t != "object")) {
    if (Zp(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = ei(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = ei(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = ei(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: ei(e.trim)
    } : e)), t.options) {
      if (Pl(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ei(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ei(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ei(t.options.planingLocations)), t.options.extrasLocationGroups)
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
        beam: { cutType: "beam", cutPreference: "l" }
      }[t.saw.cutPreference];
      s && (t.saw.cutType = s.cutType, t.saw.cutPreference = s.cutPreference);
    }
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Ma(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && Ma(t);
  }
}
function eg(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = tg(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(ig)), Array.isArray(e.parts) && (e.parts = e.parts.map(sg)), e;
}
function tg(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const i = e.efficiencyOptions.primaryCompression;
    i === "x" ? e.efficiencyOptions.primaryCompression = "l" : i === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function ig(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = ei(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function sg(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const i = Kp(e);
    i && Object.keys(i).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = ei(i)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = ei(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const i = {};
      "a" in e.finish && (i.a = yt(e.finish.a)), "b" in e.finish && (i.b = yt(e.finish.b)), e.extras.finish.faces = i;
    } else
      e.extras.finish.sides = ei(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = ei(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const i = e.extras.finish.faces;
    "a" in i && (i.a = yt(i.a)), "b" in i && (i.b = yt(i.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
let Cl = {};
const ES = (t, e) => {
  Cl[t] = e;
}, Tn = (t) => Cl[t] || null, aa = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: a } = yi(i), o = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  o[a] = s;
}, An = (t, e, i) => {
  const { scope: s, key: n } = yi(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] || null;
}, ng = (t, e, i) => {
  const { scope: s, key: n } = yi(i), a = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  a && n in a && delete a[n];
}, ag = (t) => {
  const e = Tn(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
}, jo = !1;
function og() {
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
const rg = og(), Ut = (t) => rg[t] || {
  scope: ["sides"],
  sides: Ct.map((e) => `side.${e}`)
}, Ba = (t) => {
  const e = Ut(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, RS = (t) => (Ut(t).faces || []).map((i) => {
  const s = yi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), _S = (t) => (Ut(t).sides || []).map((i) => {
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
}, No = (t) => yi(t).scope, Tl = (t) => Ut(t).scope.includes("faces"), Al = (t) => Ut(t).scope.includes("sides"), MS = (t) => {
  const e = Ut(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, lg = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((a) => typeof a == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, cg = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  Tl(e) && (s.faces || (s.faces = {})), Al(e) && (s.sides || (s.sides = {}));
}, ug = (t, e, i) => {
  cg(t, e);
  const n = t.extras[e], { scope: a } = yi(i);
  return a === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, gi = (t, e, i) => !!An(t, e, i), dg = (t, e, i, s, n) => {
  const a = Tn(e);
  if (a) {
    const o = An(t, e, i);
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
}, BS = (t, e, i, s, n, a, o) => {
  const r = Tn(e);
  if (r)
    switch (ag(e)) {
      case "boolean":
        aa(t, e, i, !!n);
        break;
      case "string":
        aa(t, e, i, String(n));
        break;
      case "object":
        {
          let c = An(t, e, i) || {};
          typeof c != "object" && (c = {});
          const u = r.labels.indexOf(s);
          if (u !== -1 && r.options[u] && Array.isArray(r.options[u])) {
            const f = r.options[u];
            f.length === 1 && f[0] === n ? c[s] = !0 : c[s] = n;
          } else
            c[s] = n;
          aa(t, e, i, c);
        }
        break;
    }
}, fg = (t, e, i, s) => {
  ng(t, e, i);
}, jS = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const a = i.map((o) => dg(t, e, o, s));
  if (n === "boolean" || n === "single") {
    const o = a.every((l) => !!l), r = a.every((l) => !l);
    return o ? !0 : r ? !1 : null;
  }
  if (n === "multiple") {
    const o = a[0];
    return a.every((l) => l === o) ? o : null;
  }
  return null;
}, NS = (t, e, i, s) => {
  i.forEach((n) => {
    fg(t, e, n);
  });
}, oa = (t, e, i, s, n, a) => {
  const o = An(t, e, i), r = [];
  if (o && a?.length)
    if (typeof o == "object" && !Array.isArray(o)) {
      const c = o;
      for (const u of a) {
        const f = c[u];
        if (f)
          if (f === !0) {
            const p = Tn(e);
            if (p) {
              const g = p.labels.indexOf(u);
              if (g !== -1 && p.options[g] && Array.isArray(p.options[g])) {
                const k = p.options[g];
                k.length === 1 ? r.push(k[0]) : r.push(u);
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
}, VS = (t, e, i) => {
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
}, GS = (t, e, i, s) => {
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
}, qS = (t, e, i) => {
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
}, hg = (t, e, i, s = !1) => {
  const n = Ut(e), a = t;
  a.extras[e] || (a.extras[e] = {});
  const o = a.extras[e];
  o.options || (o.options = {});
  const r = o.options;
  if (Tl(e) && (o.faces || (o.faces = {}), r.faces || (r.faces = {})), Al(e) && (o.sides || (o.sides = {}), r.sides || (r.sides = {})), s) {
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
  const a = lg(i, n);
  hg(t, e, a === "boolean" ? [] : s, a === "boolean");
}, pg = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], a = [], o = Ba(e), r = Object.keys(i), l = Math.max(...r.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of o) {
    const { extraContainer: f } = ug(t, e, u), { key: p } = yi(u), g = f[p];
    if (!g)
      continue;
    let k;
    if (typeof g == "object" && !Array.isArray(g) && g !== null)
      if ("value" in g && typeof g.value == "string") {
        const L = g.value;
        k = L.includes("|") ? L.split("|") : [L];
      } else
        k = Object.values(g).filter((L) => L != null && L !== "" && L !== !1).map((L) => String(L));
    else typeof g == "string" ? k = g.includes("|") ? g.split("|") : [g] : typeof g == "boolean" ? k = g ? ["true"] : [] : k = [String(g)];
    const R = k.length;
    if (R === 0)
      continue;
    let E = !1, P = !1, T = "";
    if (R > 0) {
      if (s)
        try {
          const L = k.filter((V) => V.trim() !== ""), S = s(e, L);
          P = S !== null && S > 0;
        } catch (L) {
          console.error("[validateExtrasCompleteness] Error getting price:", L), P = !1;
        }
      else {
        const L = k.join("|");
        P = r.some((S) => S === L || S.startsWith(L + "|"));
      }
      if (R < l) {
        E = !0;
        const L = k.join("|");
        if (r.some((V) => V.startsWith(L + "|")) && !P) {
          const V = l - R, M = k.join(", ");
          T = `${e} selection incomplete for ${u}. Selected: "${M}" but ${V} more level${V > 1 ? "s" : ""} required.`;
        }
      }
      !P && !E && (T = `${e} selection invalid for ${u}. No pricing available for "${k.join(", ")}".`);
    }
    R > 0 && !P && (a.push(u), n.push(T || `${e} pricing incomplete for ${u}: ${R}/${l} levels selected`));
  }
  return { valid: a.length === 0, messages: n, incompleteLocations: a };
}, gg = (t, e, i) => {
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
}, mg = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
}, is = F({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), bg = F({
  // Basic dimension constraints
  l: is,
  w: is,
  t: is,
  longSide: is,
  shortSide: is,
  // Cross-dimensional rules
  // These require that at least one dimension meets a threshold while the other meets a different threshold
  crossDimensionalRule: F({
    // At least one side must be >= primaryMin
    primaryMin: d().min(0).optional(),
    // The other side must be >= secondaryMin
    secondaryMin: d().min(0).optional()
  }).optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, t, longSide, shortSide
  // Examples: "(l * w) > 100", "l >= 50 || w >= 50"
  formula: h().optional(),
  // Custom validation message (optional)
  message: h().optional()
});
function yg(t, e) {
  const i = [], s = (a, o, r) => {
    o == null || r === void 0 || (r.min !== void 0 && o < r.min && i.push({
      valid: !1,
      dimension: a,
      value: o,
      constraint: "min",
      limit: r.min
    }), r.max !== void 0 && o > r.max && i.push({
      valid: !1,
      dimension: a,
      value: o,
      constraint: "max",
      limit: r.max
    }));
  };
  s("l", t.l, e.l), s("w", t.w, e.w), s("longSide", t.longSide, e.longSide), s("shortSide", t.shortSide, e.shortSide);
  const n = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  if (isNaN(n) || s("t", n, e.t), e.crossDimensionalRule) {
    const { primaryMin: a, secondaryMin: o } = e.crossDimensionalRule, r = t.l || 0, l = t.w || 0;
    if (a !== void 0 && o !== void 0) {
      const c = r >= a && l >= o, u = l >= a && r >= o;
      !c && !u && i.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${a} mm and the other side must be ≥ ${o} mm`
      });
    }
  }
  return e.formula && (vg(e.formula, {
    l: t.l,
    w: t.w,
    t: n,
    longSide: t.longSide,
    shortSide: t.shortSide
  }) || i.push({
    valid: !1,
    dimension: "longSide",
    value: t.longSide || 0,
    constraint: "min",
    limit: 0,
    message: e.message || "Part does not meet validation requirements"
  })), {
    valid: i.length === 0,
    violations: i
  };
}
function vg(t, e) {
  try {
    const { FormulaCalculator: i } = require("../js/formula"), s = new i({}), n = s.parse(t);
    return !!s.evaluate(n, {
      l: e.l || 0,
      w: e.w || 0,
      t: e.t || 0,
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0
    });
  } catch (i) {
    return console.warn("Formula evaluation error:", i, "Formula:", t), !0;
  }
}
function wg(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, i = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${i} of ${t.limit} (current: ${t.value})`;
}
const Sg = { id: "mini-stock-nav" }, xg = ["onMousedown"], kg = { class: "id" }, Ig = /* @__PURE__ */ Re({
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
    return (a, o) => (w(), A("div", Sg, [
      (w(!0), A(Te, null, Ne(i.stockList, (r, l) => (w(), A("button", {
        type: "button",
        key: l,
        class: Ce(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockAutoId }]),
        style: tt({
          backgroundColor: r.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(r.autoId)
      }, [
        O("div", kg, ee(l + 1), 1),
        fs(O("div", { class: "stack legibility" }, ee(r.stack), 513), [
          [fn, typeof r?.stack == "number" && r.stack > 1]
        ])
      ], 46, xg))), 128))
    ]));
  }
});
function Pg(t) {
  const e = t.x, i = t.x + t.l, s = $t().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, a = t.y + t.w, o = $t().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(Ks(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(Ks(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(Zs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(Zs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Cg() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(mr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(br(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Ol(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [a, o] = s;
    i === "x" ? Tg.call(this, a, o, e[n]) : Ag.call(this, a, o, e[n]);
  });
}
function Tg(t, e, i) {
  const s = $t().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = Ll(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Ks(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function Ag(t, e, i) {
  const s = $t().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = Ll(s.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Zs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  Og(a), this.axes.cutMeasurementYAxes.push(a);
}
function Ll(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function Og(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function us() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Lg() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function On() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function $l(t) {
  return t.autoId;
}
function $g(t, e) {
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
function Ds({ parent: t, near: e, far: i }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, i].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, $l).join(
    (n) => n.append("rect").attr("class", "segment").call((a) => Vo.call(this, a)),
    (n) => n.call((a) => Vo.call(this, a)),
    (n) => n.remove()
  ), this.state.env === "development" && Fg.call(this, s), !this.settings.app && this.state.env === "development" && Dg.call(this);
}
function Vo(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Fg(t) {
  this.selections.segmentGroup.selectAll("text").data(t, $l).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => Go.call(this, i)),
    (e) => e.call((i) => Go.call(this, i)),
    (e) => e.remove()
  );
}
function Go(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Dg() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Fl(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = $g(n, e), i) break;
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
const { currentCutIndex: Dl } = Na();
function Eg() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => qo.call(this, e)),
    (t) => t.call((e) => qo.call(this, e)),
    (t) => t.remove()
  ), _l.call(this));
}
function qo(t) {
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
function El(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function Rl(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function Rg(t, e, i, s) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] || !s && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), Dl.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[i] == "number" && a.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), s || Mg.call(this, t, e);
}
function _g(t, e, i, s, n) {
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
    this.state.device === "desktop" && !t.isTrim && Ol.call(this, a, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, r) => r === e);
}
function _l() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), us.call(this), On.call(this);
}
function Mg(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (f) => El(f, e, i)), this.selections.cutLines.classed("inside-segment", (f) => Rl(f, e));
  const s = Fl.call(this, t);
  if (s === !1) return;
  const { parent: n, children: a } = s, { near: o } = Ml(t, a);
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
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && Ol.call(this, r, l, u);
}
function Bg(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const g = this.props.cuts.value.filter((k) => k.isTrim);
    t = t + g.length, t - g.length >= this.props.cuts.value.length - g.length && (Dl.value = this.props.cuts.value.length - g.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (us.call(this), On.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const g = this.selections.cutLines.nodes()[t].parentElement;
    if (!g) return;
    ot(g).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), a = i.dimension === "l" ? "y" : "x", o = i?.stock?.trim, r = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? Rg.call(this, i, s, r, e) : _g.call(this, i, t, o, a, n), jg.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = Fl.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return Ds.call(this, { parent: c });
  const { near: f, far: p } = Ml(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const g = u.find((E) => E.offcut === !0 && E.x === 0 && E.l === i.stock?.trim?.l1), k = u.find((E) => E.type === "near" && E !== g), R = u.find((E) => E.type === "far" && E !== g && E.phase > c.phase);
      if (g)
        return Ds.call(this, { parent: g, near: k, far: R });
    } else if (i.beamTrimW1) {
      const g = u.find((E) => E.offcut === !0 && E.y === 0 && E.w === i.stock?.trim?.w1);
      let k = u.find((E) => E.type === "near" && E !== g);
      const R = u.find((E) => E.type === "far" && E !== g && E.y > (g?.y || 0));
      if (k && i.stock && (k = {
        ...k,
        x: 0,
        l: i.stock.l
      }), g)
        return Ds.call(this, { parent: g, near: k, far: R });
    }
  }
  Ds.call(this, { parent: c, near: f, far: p });
}
function Ml(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((o) => o.type === "near" && o[i] + o[s] === t[i + "1"] - t.stock.halfBladeWidth), a = e.find((o) => o.type === "far" && o[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: a };
}
function jg(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(a));
    const r = t?.guillotineState?.segmentCutOrder;
    return (El(s, i, r) || Rl(s, i)) && (o += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Ng(t) {
  if (!this.props.stock || !t || !this.settings.main) return !1;
  let e;
  if (!t.willItFit(this.props.stock.value, t.rot)) return !1;
  const i = Ip(
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
      const l = xl(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(l, a).join(
        (c) => c.append("line").call((u) => o.call(this, u)),
        (c) => c.call((u) => o.call(this, u)),
        (c) => c.remove()
      );
    }
    s = Pp(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new ni();
  for (const a of i.toArray()) {
    const o = kl(t, a, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const a = s.toArray();
    for (const o of a) {
      const r = xp(t, o, this.props.stock.value);
      r && n.addPoints(r.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new it(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new it(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0)),
    new it(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      0 + (this.props.stock.value.trim.w1 ?? 0)
    ),
    new it(
      0 + (this.props.stock.value.trim.l1 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    ),
    new it(
      this.props.stock.value.l - t.l - (this.props.stock.value.trim.l2 ?? 0),
      this.props.stock.value.w - t.w - (this.props.stock.value.trim.w2 ?? 0)
    )
  ].forEach((a) => n.add(a)), e = n.toArray()) : (n.add(new it(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = n.toArray());
  for (let a = e.length; a--; ) {
    const o = e[a];
    t.x = o.x, t.y = o.y;
    for (const r of this.props.shapes.value)
      if (this.collision(t, r, this.props.stock.value)) {
        e.splice(a, 1);
        break;
      }
  }
  return Vg.call(this, e, t), Gg.call(this, e, t), !!e?.length;
}
function Vg(t, e) {
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
function Gg(t, e) {
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
function qg() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => zo.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => zo.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Wo.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => Wo.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => Ho.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => Ho.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const a = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Uo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${r})`;
    }),
    (t) => t.text((e) => Uo.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
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
function zo(t) {
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
function Wo(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function Ho(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : U({ v: t.l, o: this.numberConfig }).toString();
}
function Uo(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : U({ v: t.w, o: this.numberConfig }).toString();
}
const zg = (t) => t.id;
function Wg() {
  if (!this.props.containerWidth) return;
  us.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Ug.call(this), Hg.call(this);
}
function Hg() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, zg).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Yo.call(this, e), Ko.call(this, e), e.on("mousedown", Zo.bind(this)), e;
    },
    (t) => (Yo.call(this, t), Ko.call(this, t), t.on("mousedown", Zo.bind(this)), t),
    (t) => t.remove()
  ), Qg.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => qg.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Ug() {
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
function Yo(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => ds.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = yr(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Ko(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = ot(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = ot(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", ds.call(this, i));
  }, { passive: !0 });
}
function Zo(t, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Yg.call(this, t, e), (this.settings.app || this.settings.embed) && Xg.call(this, t, e), this.state.device === "desktop" && (On.call(this), Pg.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
}
function Yg(t, e) {
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
        ], Zg.call(this, e);
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
    console.table(Kg(e, i));
  }
}
function Kg(t, e) {
  return e.reduce((i, s) => {
    const n = nm(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function Zg(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Xg(t, e) {
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
const Xo = 3;
function Jg(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, a] of Object.entries(s.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(n)) continue;
        let o = n;
        if (i.rot) {
          const l = Vr({ [n]: !0 }, "cc");
          o = Object.keys(l)[0];
        }
        const r = em.call(this, i, o);
        r && e.push(r);
      }
  }
  return e;
}
function Jo(t) {
  const e = Xo / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + Es.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + Es.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + Es.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + Es.call(this, i.type, "y", e)).attr("stroke-width", Xo).attr("stroke", "white");
}
function Qg(t) {
  if (!this.settings.main) return;
  const e = Jg.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Jo.call(this, s)),
    (i) => i.call((s) => Jo.call(this, s)),
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
function em(t, e) {
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
function tm(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Qo = (t) => t.id;
function er(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function tr(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function im() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Cg.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Qo).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => er.call(this, e)),
    (t) => t.call((e) => er.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Qo).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => tr.call(this, e)),
    (t) => t.call((e) => tr.call(this, e)),
    (t) => t.remove()
  );
}
function sm(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function nm(t, e) {
  return _e(t, e);
}
class am {
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
      xScale: $t(),
      yScale: $t(),
      yPositionScale: $t(),
      xPositionScale: $t(),
      yAxisScale: $t(),
      measurementScale: $t(),
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
    }, s = (n, a) => Nt("#" + (sm(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
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
    Wg.call(this);
  }
  drawStock() {
    im.call(this);
  }
  drawCuts() {
    Eg.call(this);
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
    return be(e) && e !== null ? e.bladeWidth : 0;
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
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Lg.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), On.call(this);
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
    tm.call(this);
  }
  drawPositions(e) {
    Ng.call(this, e);
  }
  showCut(e) {
    Bg.call(this, e);
  }
  resetCuts() {
    _l.call(this);
  }
}
const om = ["id"], rm = /* @__PURE__ */ Re({
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
    } = Na(), g = t, k = i, R = (Q) => {
      k("part-click", Q);
    }, E = (Q) => {
      k("shape-colour-update", Q);
    }, P = (Q, ze) => {
      Q?.autoId && k("shape-select", Q.autoId, ze);
    }, T = (Q) => {
      Q && k("add-to-parts-bin", Q);
    }, L = (Q, ze) => {
      Q && k("move-shape", Q, ze);
    }, S = te(0), V = te(0), M = te(null);
    let $, H = te(!1);
    const N = bt({
      debug: ""
    });
    Ht(() => W());
    const m = X(() => ({
      format: g.numberFormat,
      decimals: g.decimalPlaces
    })), B = X(() => g.stockAutoId ? c(g.stockAutoId) : n.value), K = X(() => g.stockAutoId ? u(g.stockAutoId) : a.value), oe = X(() => g.main ? g.stockAutoId ? p(g.stockAutoId) : o.value : []), C = X(() => g.main ? g.stockAutoId ? f(g.stockAutoId) : r.value : []);
    cr(M, (Q) => {
      const ze = Q[0], { width: Qe, height: ri } = ze.contentRect;
      Qe > 0 && (S.value = Qe), k("resize", { width: Qe, height: ri });
    }), wc(
      S,
      (Q) => {
        $ && (Q <= 0 || ($.setDevice(), $.resetShapeAxes(), $.drawAll(), l.value !== null && ($.toggleSegments(!0), $.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let j = !1;
    Be(() => B.value, (Q) => {
      Q && (S.value <= 0 || (j = !0, $.setDevice(), $.resetCuts(), $.removeSegments(), $.drawStock(), $.drawShapes(), $.drawCuts(), mt(() => j = !1)));
    }, { immediate: !1 }), Be(() => K.value, (Q) => {
      j || Q && (S.value <= 0 || ($.setDevice(), $.drawShapes()));
    }, { immediate: !1, deep: !0 }), g.main && (Be(() => oe.value, () => {
      j || S.value <= 0 || $.drawCuts();
    }, { immediate: !1, deep: !0 }), Be(l, () => {
      l.value !== null && (S.value <= 0 || ($.toggleSegments(!0), $.showCut(l.value)));
    }, { immediate: !1 }), Be(m, (Q) => {
      $.updateNumberFormat(Q.format, Q.decimals, null);
    }, { immediate: !1 }));
    const W = () => {
      const Q = {
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
          containerHeight: V,
          containerWidth: S,
          stock: B,
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
          onShapeColourUpdate: E,
          onShapeSelect: P,
          onAddToPartsBin: T,
          onMoveShape: L,
          onPartClick: R
        }
      };
      $ = new am(Q), N.debug = $.state.debug, H.value = !0;
    }, z = (Q = !1) => {
      $ && $.toggleShapes(Q);
    }, G = (Q = !1) => {
      $ && $.toggleCuts(Q);
    }, le = (Q = !1) => {
      $ && $.toggleSegments(Q);
    }, me = () => {
      $ && $.drawShapes();
    }, ge = () => {
      $ && $.drawStock();
    }, we = () => {
      $ && ($.toggleSegments(!1), $.resetCuts());
    }, Ae = (Q) => {
      $ && ($.toggleSegments(!0), $.showCut(Q));
    }, Z = (Q) => {
      $ && $.drawPositions(Q);
    }, ct = () => {
      $ && $.removePositions();
    }, ai = (Q) => {
      $ && $.findShape(Q);
    }, oi = () => {
      $ && $.clearSelection();
    }, ut = (Q) => {
      $ && $.requiresStretch(Q);
    };
    return Be(() => N.debug, (Q) => {
      $?.state && ($.state.debug = Q);
    }), e({
      loaded: H,
      toggleShapes: z,
      toggleCuts: G,
      toggleSegments: le,
      drawShapes: me,
      drawStock: ge,
      drawPositions: Z,
      resetPositions: ct,
      findShape: ai,
      clearSelection: oi,
      resetCuts: we,
      showCut: Ae,
      requiresStretch: ut,
      state: N
    }), (Q, ze) => (w(), A("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: M,
      class: Ce([{ app: t.app }, "diagram-container"])
    }, null, 10, om));
  }
}), lm = { class: "action-menu" }, cm = ["textContent"], um = {
  key: 0,
  class: "menu-divider"
}, dm = {
  key: 1,
  class: "group-label"
}, fm = /* @__PURE__ */ Re({
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
    const i = t, s = e, { isOpen: n, close: a, toggle: o } = Qc(i.menuId), r = te(), l = te(), c = X(() => i.disabled), u = X(() => i.label), f = X(() => i.showLabel), p = X(() => i.icon), { floatingStyles: g } = Sc(r, l, {
      placement: i.placement,
      whileElementsMounted: Xc,
      middleware: [
        Yc(i.offset),
        Kc(),
        Zc({ padding: 8 })
      ]
    }), k = (m) => {
      if (!m) return ["fas", "question"];
      if (typeof m == "function" && (m = m(i)), Array.isArray(m))
        return m;
      if (typeof m == "string") {
        const B = m.split(" ");
        if (B.length >= 2) {
          const K = B[0], oe = B.slice(1).join("-").replace("fa-", "");
          return [K, oe];
        }
        return ["fas", m.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, R = X(() => k(p.value)), E = (m) => typeof m.active == "function" ? m.active(i) : typeof m.active == "boolean" ? m.active : !1, P = (m) => {
      if (!m.href) return !1;
      try {
        const B = typeof m.href == "function" ? m.href(i) : m.href;
        return new URL(B, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, T = (m) => m.href ? "a" : "div", L = (m) => {
      const B = {};
      if (m.href) {
        const K = typeof m.href == "function" ? m.href(i) : m.href;
        if (B.href = K, P(m)) {
          const oe = typeof m.target == "function" ? m.target(i) : m.target;
          B.target = oe || "_blank", B.rel = m.rel || "noopener noreferrer";
        } else if (m.target) {
          const oe = typeof m.target == "function" ? m.target(i) : m.target;
          B.target = oe;
        }
        m.rel && (B.rel = m.rel);
      }
      return m.attrs && Object.assign(B, m.attrs), B;
    }, S = X(() => i.menuItems.map((m) => {
      const B = { ...m };
      return typeof m.href == "function" && (B.href = m.href(i)), typeof m.icon == "function" && (B.icon = m.icon(i)), typeof m.disabled == "function" && (B.disabled = m.disabled(i)), typeof m.label == "function" && (B.label = m.label(i)), typeof m.variant == "function" && (B.variant = m.variant(i)), typeof m.active == "function" && (B.active = m.active(i)), typeof m.target == "function" && (B.target = m.target(i)), typeof m.show == "function" && (B.show = m.show(i)), B;
    })), V = (m) => {
      m.stopPropagation(), m.preventDefault(), !c.value && o();
    }, M = (m, B) => {
      if (B.stopPropagation(), m.disabled && !m.href) {
        B.preventDefault();
        return;
      }
      if (typeof m.action == "function" && m.action(m) === !1 && m.href) {
        B.preventDefault();
        return;
      }
      s("action", {
        id: m.id,
        item: m
      }), m.href && i.closeOnLinkClick ? a() : m.href || a();
    }, $ = (m) => {
      const B = [];
      if (m.variant) {
        const oe = typeof m.variant == "function" ? m.variant(i) : m.variant;
        B.push(`variant-${oe}`);
      }
      if ((typeof m.disabled == "function" ? m.disabled(i) : m.disabled) && !m.href && B.push("disabled"), E(m) && B.push("active"), m.href && B.push("menu-link"), P(m) && B.push("external-link"), m.class) {
        const oe = typeof m.class == "function" ? m.class(i) : m.class;
        B.push(oe);
      }
      return B.join(" ");
    }, H = (m) => {
      const B = m.target;
      n.value && r.value && l.value && !r.value.contains(B) && !l.value.contains(B) && a();
    }, N = (m) => {
      m.key === "Escape" && n.value && a();
    };
    return Ht(() => {
      document.addEventListener("click", H), document.addEventListener("keydown", N);
    }), hs(() => {
      document.removeEventListener("click", H), document.removeEventListener("keydown", N);
    }), (m, B) => (w(), A("div", lm, [
      O("div", {
        ref_key: "trigger",
        ref: r,
        onClick: V,
        class: Ce(["actions-btn", { active: x(n), disabled: c.value }])
      }, [
        p.value ? (w(), ke(x(Ws), {
          key: 0,
          icon: R.value,
          class: "icon"
        }, null, 8, ["icon"])) : Y("", !0),
        f.value ? (w(), A("span", {
          key: 1,
          class: "label",
          textContent: ee(u.value)
        }, null, 8, cm)) : Y("", !0)
      ], 2),
      (w(), ke(ja, { to: "body" }, [
        x(n) && !c.value ? (w(), A("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: tt(x(g)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: B[0] || (B[0] = ur(() => {
          }, ["stop"]))
        }, [
          (w(!0), A(Te, null, Ne(S.value, (K, oe) => (w(), A(Te, { key: oe }, [
            K.type === "divider" ? (w(), A("div", um)) : K.type === "group" ? (w(), A("div", dm, ee(K.label), 1)) : K.show !== !1 ? (w(), ke(xc(T(K)), ki({
              key: 2,
              ref_for: !0
            }, L(K), {
              onClick: (C) => M(K, C),
              id: K.id,
              class: ["menu-item", $(K)],
              disabled: K.disabled && !K.href
            }), {
              default: Ti(() => [
                K.icon || E(K) ? (w(), ke(x(Ws), {
                  key: 0,
                  icon: E(K) ? ["fass", "check"] : k(K.icon)
                }, null, 8, ["icon"])) : Y("", !0),
                O("span", null, ee(K.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : Y("", !0)
          ], 64))), 128))
        ], 4)) : Y("", !0),
        x(n) && !c.value ? (w(), A("div", {
          key: 1,
          class: "backdrop",
          onClick: B[1] || (B[1] = //@ts-ignore
          (...K) => x(a) && x(a)(...K))
        })) : Y("", !0)
      ]))
    ]));
  }
}), ir = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = Ha(t);
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
function hm({
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
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : ld(r, "decimal", u);
    }
    const c = String(r);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return ir(c, t.type, t.numberFormat);
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
          return ir(c, t.type);
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
          let g = !0, k;
          return typeof t.min == "number" && p < t.min && (p = t.min, g = !1, k = "below_min"), typeof t.max == "number" && p > t.max && (p = t.max, g = !1, k = "above_max"), { value: p, valid: g, message: k };
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
          if (!Ha(c)) {
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
function pm({
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
function gm({
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
const mm = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], bm = /* @__PURE__ */ Re({
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
    } = gm({
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
      (...p) => x(r) && x(r)(...p)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...p) => x(l) && x(l)(...p)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...p) => x(c) && x(c)(...p))
    }, null, 40, mm));
  }
}), ym = ["for"], Rs = /* @__PURE__ */ Re({
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
    }, ee(t.label), 9, ym));
  }
}), vm = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], wm = ["disabled", "selected"], Sm = {
  key: 0,
  value: " "
}, xm = ["hidden", "value", "disabled"], km = /* @__PURE__ */ Re({
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
    } = pm({
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
      (...u) => x(r) && x(r)(...u))
    }), [
      O("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, ee(i.text?.select?.toUpperCase() ?? "SELECT"), 9, wm),
      i.multiEdit ? (w(), A("option", Sm, ee(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : Y("", !0),
      (w(!0), A(Te, null, Ne(o.value, (u) => (w(), A("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, ee(u.label), 9, xm))), 128))
    ], 16, vm));
  }
}), Im = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Bl = /* @__PURE__ */ Re({
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
      handlePaste: k
    } = hm({
      props: i,
      emit: s,
      isMounted: n
    }), R = (E) => {
      const P = E.getBoundingClientRect(), T = window.getComputedStyle(E);
      return P.width > 0 && P.height > 0 && T.display !== "none" && T.visibility !== "hidden";
    };
    return Ht(() => {
      (be(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && a.value && R(a.value) && mt(() => a.value.focus());
    }), hs(() => {
      n.value = !1;
    }), (E, P) => (w(), A("input", ki(E.$attrs, {
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
      onInput: P[0] || (P[0] = //@ts-ignore
      (...T) => x(o) && x(o)(...T)),
      onFocus: P[1] || (P[1] = //@ts-ignore
      (...T) => x(c) && x(c)(...T)),
      onBlur: P[2] || (P[2] = //@ts-ignore
      (...T) => x(u) && x(u)(...T)),
      onKeydown: P[3] || (P[3] = //@ts-ignore
      (...T) => x(f) && x(f)(...T)),
      onCompositionstart: P[4] || (P[4] = //@ts-ignore
      (...T) => x(p) && x(p)(...T)),
      onCompositionend: P[5] || (P[5] = //@ts-ignore
      (...T) => x(g) && x(g)(...T)),
      onPaste: P[6] || (P[6] = //@ts-ignore
      (...T) => x(k) && x(k)(...T)),
      onMousedown: P[7] || (P[7] = //@ts-ignore
      (...T) => x(r) && x(r)(...T)),
      onMouseup: P[8] || (P[8] = //@ts-ignore
      (...T) => x(l) && x(l)(...T))
    }), null, 16, Im));
  }
}), Pm = ["data-field-id"], Cm = {
  key: 0,
  class: "input-label-group"
}, Tm = ["disabled", "selected"], Am = {
  key: 0,
  value: " "
}, Om = ["hidden", "value", "disabled"], Ci = /* @__PURE__ */ Re({
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
    const i = e, s = t, n = te(null), a = te(null), o = te(!0), r = te(s.numberFormat), l = X(() => s.custom ? "custom-" + s.id : s.id), c = X(() => `${l.value}-error`), u = X(() => s.label || s.placeholder), f = X(() => m(s.type, s.numberFormat)), p = X(() => B(s.type, s.numberFormat)), g = X(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), k = X(() => {
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
    }))), E = X(() => R.value.map((C) => {
      const j = C.label ? q(C.label) : C.value?.toString();
      return {
        ...C,
        // Translate the label key first, then uppercase the translated result
        label: j?.toUpperCase() || C.value?.toString().toUpperCase()
      };
    })), P = X(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), T = X(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), L = X(() => ({
      ...T.value,
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
      ...T.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), V = X(() => ({
      ...T.value,
      options: E.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), M = X(() => (s.text?.select || "SELECT").toUpperCase()), $ = X(() => (s.text?.delete || "DELETE").toUpperCase()), H = (C) => {
      a.value = C;
    }, N = (C) => s.label && s.enableLabel && s.labelPosition === C, m = (C, j) => {
      switch (C) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return j === "fraction" ? "text" : "number";
        case "string":
        default:
          return "text";
      }
    }, B = (C, j) => {
      if (C === "unitDependent")
        return j === "fraction" ? "text" : "decimal";
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
    }, oe = (C, j) => {
      C.valid === void 0 || C.valid === !0 ? (o.value = !0, i("validation", n.value, C)) : C.valid === !1 && C.message && (o.value = !1, console.warn(`Field validation error for field ${j} - ${C.message}`), i("validation", n.value, C));
    };
    return Be(() => s.numberFormat, (C, j) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && C !== j && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const W = U({ v: s.value, nf: C });
            i("update:value", W);
          } catch {
            i("update:value", C === "decimal" ? 0 : "0");
          }
        r.value = C;
      }
    }), (C, j) => (w(), A("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ce(["input-wrapper", P.value]),
      "data-field-id": l.value
    }, [
      t.type === "checkbox" ? (w(), A("div", Cm, [
        N("first") ? (w(), ke(Rs, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0),
        t.type === "checkbox" ? (w(), ke(bm, ki({
          key: 1,
          ref: H,
          type: "checkbox"
        }, S.value, {
          value: t.value,
          "onUpdate:value": j[0] || (j[0] = (W) => i("update:value", W))
        }), null, 16, ["value"])) : Y("", !0),
        N("last") ? (w(), ke(Rs, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0)
      ])) : (w(), A(Te, { key: 1 }, [
        N("first") ? (w(), ke(Rs, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0),
        g.value ? (w(), ke(Bl, ki({
          key: 1,
          ref: H
        }, L.value, {
          "input-type": f.value,
          "input-mode": p.value,
          value: k.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: oe,
          "onUpdate:value": K
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (w(), ke(km, ki({
          key: 2,
          ref: H
        }, V.value, {
          "onUpdate:value": j[1] || (j[1] = (W) => i("update:value", W))
        }), {
          default: Ti(() => [
            O("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, ee(M.value), 9, Tm),
            t.multiEdit ? (w(), A("option", Am, ee($.value), 1)) : Y("", !0),
            (w(!0), A(Te, null, Ne(E.value, (W) => (w(), A("option", {
              key: W.value,
              hidden: W.hidden,
              value: W.value,
              disabled: W.disabled
            }, ee(W.label), 9, Om))), 128))
          ]),
          _: 1
        }, 16)) : Y("", !0),
        N("last") ? (w(), ke(Rs, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0)
      ], 64)),
      Hs(C.$slots, "default")
    ], 10, Pm));
  }
}), Lm = {
  key: 0,
  class: "action-bar"
}, $m = { class: "add-custom" }, Fm = ["disabled"], Dm = ["disabled", "title", "onClick"], Em = {
  key: 1,
  class: "price"
}, Rm = /* @__PURE__ */ Re({
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
      shouldShowDeleteButton: k,
      getLocationGroup: R,
      isLocationVisible: E,
      handleInputChange: P,
      handleDelete: T
    } = eu({
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
      newCustomName: L,
      canAddCustomName: S,
      isActionMenuDisabled: V,
      customNameActions: M,
      handleAddCustomName: $,
      handleCustomNameAction: H
    } = tu({
      extraType: i.extraType,
      customNames: ci(i, "customNames"),
      usedNames: ci(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: p,
      onCustomNameAdded: (G) => s("custom-name-added", i.extraType, G),
      onCustomNameDeleted: (G) => s("custom-name-deleted", i.extraType, G)
    }), {
      renderLocations: N,
      gridStyle: m,
      getInputId: B,
      getDeleteConfig: K
    } = iu({
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
      shouldShowDeleteButton: k,
      locations: ci(i, "locations"),
      locationGroups: ci(i, "locationGroups")
    }), oe = te(!1), C = X(() => (G) => {
      const le = R(G);
      return le === "all" || le === "faces" || le === "sides";
    }), j = X(() => (G) => Ba(i.extraType).includes(G) ? No(G) === "face" : !1), W = X(() => (G) => Ba(i.extraType).includes(G) ? No(G) === "side" : !1), z = X(() => (G) => i.shape.issues?.some((le) => le.category?.includes("extras") && le.field?.some((me) => me[0] === "extras" && me[1] === i.extraType && me[2] === G)) ?? !1);
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
    }), (G, le) => {
      const me = bi("FontAwesomeIcon");
      return oe.value ? Y("", !0) : (w(), A("div", {
        key: 0,
        class: Ce(["extras group", [t.extraType]]),
        style: tt({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (w(), A("div", Lm, [
          O("div", $m, [
            Ee(Bl, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: x(L),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": le[0] || (le[0] = (ge) => L.value = ge || ""),
              onKeydown: kc(x($), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            O("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !x(S),
              onClick: le[1] || (le[1] = //@ts-ignore
              (...ge) => x($) && x($)(...ge))
            }, " Add ", 8, Fm)
          ]),
          Ee(fm, {
            "menu-items": x(M),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: x(V),
            onAction: x(H)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : Y("", !0),
        O("div", {
          class: "inputs grid-layout",
          style: tt({ "grid-template-columns": x(m) })
        }, [
          (w(!0), A(Te, null, Ne(x(N), (ge) => (w(), A(Te, { key: ge }, [
            x(E)(ge) ? (w(), A(Te, { key: 0 }, [
              O("div", {
                class: Ce(["label", {
                  "group-label": C.value(ge),
                  "face-label": j.value(ge),
                  "side-label": W.value(ge),
                  "has-validation-issue": z.value(ge)
                }])
              }, ee(x(c)(ge)), 3),
              (w(!0), A(Te, null, Ne(t.allOptions, (we, Ae) => (w(), A("div", {
                key: `${ge}-${Ae}`,
                class: "input-cell"
              }, [
                Ee(Ci, ki({
                  id: x(B)(ge, Ae),
                  "data-field": `${t.extraType}-${ge}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Ae
                }, { ref_for: !0 }, x(f)(ge, Ae), {
                  "onUpdate:value": (Z) => x(P)(ge, Ae, Z)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              x(K)(ge).show ? (w(), A("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !x(K)(ge).enabled,
                title: x(K)(ge).ariaLabel,
                onClick: (we) => x(T)(ge)
              }, [
                Ee(me, { icon: ["fass", "trash"] })
              ], 8, Dm)) : Y("", !0),
              t.enablePricing ? (w(), A("div", Em, ee(x(g)(ge)), 1)) : Y("", !0)
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
}, qs = /* @__PURE__ */ Tt(Rm, [["__scopeId", "data-v-0aa91058"]]), _m = {
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
}, Mm = { id: "spinner" }, Bm = ["width", "height"], jm = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Nm(t, e, i, s, n, a) {
  return w(), A("div", Mm, [
    i.complete ? Y("", !0) : (w(), A("svg", {
      key: 0,
      class: "loading",
      style: tt({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      dr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Bm)),
    i.complete ? (w(), A("svg", {
      key: 1,
      class: "complete",
      style: tt({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      O("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : Y("", !0),
    i.showNumber ? (w(), A("div", jm, ee(i.number), 1)) : Y("", !0)
  ]);
}
const sr = /* @__PURE__ */ Tt(_m, [["render", Nm]]), { addNotice: Ri } = Va();
let ra = null;
function Vm() {
  return ra || (ra = gr()), ra;
}
function nr(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Gm(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: a } = Vm(), o = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = nr(o), u = nr(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const E = c.reduce((T, L) => T + (L.q || 1), 0), P = u.reduce((T, L) => T + (L.q || 1), 0);
      if (E > t.maxShapes || P > t.maxStock)
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
    else if (t.inputSaw instanceof cl) {
      const E = t.inputSaw.validate();
      i.push(...E), f = t.inputSaw.toData();
    } else {
      f = t.inputSaw;
      const E = new ll(f);
      i.push(...E.issues);
    }
    const p = n({
      saw: f,
      partTrim: U({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...p), t.useInventory) {
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
      l.forEach((P) => P.populateParentID(c));
      const E = fp(l, c);
      i.push(...E);
    }
    await qm(c, t, i);
    const g = qr(i);
    if (g.length > 0) {
      const E = {
        saw: g.filter((P) => P.category?.includes("saw")),
        stock: g.filter((P) => P.category?.includes("stock")),
        part: g.filter((P) => P.category?.includes("part") && !P.category?.includes("extras")),
        extras: g.filter((P) => P.category?.includes("extras")),
        group: g.filter((P) => P.category?.includes("group"))
      };
      for (const [P, T] of Object.entries(E))
        if (T.length > 0) {
          Ri({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: P }),
            additional: T.map((L) => e(L.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const k = {
      inputSaw: f,
      inputShapes: c.map((E) => E.toData()),
      inputStock: u.map((E) => E.toData()),
      inputGroups: l.map((E) => E.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, R = Rp.safeParse(k);
    return R.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", R.error.issues), Ri({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: R.error.issues.map((E) => `${E.path.join(".")}: ${E.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Ri({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function qm(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: a, pricing: o } of s) {
      if (e.extrasValidationRules && qe.hasExtras(n, a)) {
        const c = gg(n, a, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const f = mg(a, u, c.message);
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
      const r = pg(n, a, o, e.findExtrasPrice);
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
const zs = F({
  // Unique identifier for this group (used internally)
  id: h().min(1),
  // Display label for the group (shown in UI)
  label: h().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: J(h().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: d().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: D().optional().default(!1)
}), zm = F({
  banding: J(zs).optional(),
  finish: J(zs).optional(),
  planing: J(zs).optional()
}).optional(), la = F({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), ca = F({
  // Shape dimension constraints
  longSide: la,
  shortSide: la,
  t: la,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: h().optional(),
  // Custom validation message (optional)
  message: h().optional()
}), Wm = F({
  banding: ca.optional(),
  finish: ca.optional(),
  planing: ca.optional()
}).optional(), Hm = he(["decimal", "fraction"]), Um = he(il), ar = ue([
  de(0),
  de(1),
  de(2)
]).catch(0), Ym = F({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: h().optional(),
  partB: h().optional(),
  partSelected: h().optional(),
  stock: h().optional(),
  text: h().optional(),
  // Checkout-specific colors
  button: h(),
  buttonText: h()
}), Km = F({
  banding: D().default(!1),
  finish: D().default(!1),
  planing: D().default(!1),
  orientation: D().default(!0),
  diagram: D().default(!0),
  focus: D().default(!0),
  machining: D().default(!1),
  csvImport: D().default(!1),
  click: D().default(!0),
  partName: D().default(!0),
  progressNumber: D().default(!0)
  // imageUpload: z.boolean().default( false )
}), Zm = F({
  // Localization
  locale: h().default("en-US"),
  currency: h().default("USD"),
  apiVersion: d().min(2).default(3),
  // Number formatting
  numberFormat: Hm.default("decimal"),
  decimalPlaces: d().min(0).max(10).default(2),
  fractionRoundTo: d().default(0),
  // Stock configuration
  stockSelection: Um.optional(),
  stockGrain: Ki.optional(),
  // Part configuration
  minSpacing: nl.optional(),
  maxParts: d().min(0).default(0),
  orientationModel: ar.default(0),
  resultOrientationModel: ar.default(0),
  minDimension: d().min(0).default(0),
  partTrim: d().min(0).default(0),
  // UI configuration
  debug: D().default(!1),
  enable: Km.optional(),
  colors: Ym.optional(),
  // Custom fields
  customFields: J(ve()).optional(),
  fieldOrder: J(h()).optional(),
  // Extras location filtering
  bandingLocations: J(na).optional(),
  finishLocations: J(na).optional(),
  planingLocations: J(na).optional(),
  // Extras location groups
  extrasLocationGroups: zm,
  // Extras validation rules
  extrasValidationRules: Wm
});
he([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const ns = fe(
  h(),
  d().min(0)
).default({}), Xm = F({
  name: h().trim().min(1),
  thicknesses: J(
    ue([
      h().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      d()
    ])
  ).min(1)
}), ua = F({
  labels: J(h()),
  pricing: fe(h(), d().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: ve().optional(),
  keys: J(h()).optional(),
  // if not all the default keys should be set
  locations: J(h()).optional(),
  // available locations for this extras type
  groups: J(zs).optional(),
  // custom location groups
  rules: ve().optional()
  // validation rules for this extras type
});
F({
  success: D(),
  price: d().optional(),
  error: h().optional(),
  cacheHit: D().optional()
});
F({
  valid: D(),
  errors: J(h()),
  warnings: J(h())
});
F({
  pricing: ns,
  labels: J(h()),
  options: J(J(h())),
  // Simplified to string arrays only
  keys: J(h()),
  maxLevels: d().min(1)
});
F({
  enableCaching: D().default(!0),
  enableLogging: D().default(!1),
  maxCacheSize: d().min(1).default(1e3)
});
const jl = F({
  l: d(),
  w: d(),
  t: d().nullable(),
  q: d(),
  stockId: h()
}), Nl = F({
  areaEfficiency: d(),
  finishArea: d(),
  bandingLength: d(),
  partArea: d(),
  totalParts: d(),
  stackedNumberOfCuts: d(),
  numberOfCuts: d(),
  stackedCutLength: d(),
  cutLength: d(),
  rollLength: d()
}), Jm = F({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  orientationLock: ue([
    de(""),
    de("l"),
    de("w")
  ]).nullable(),
  q: d(),
  name: h().nullable(),
  rot: ue([de(0), de(1)]).default(0),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: fe(h(), ue([h(), D()])).nullable().optional(),
  finish: fe(h(), ue([h(), D()])).nullable().optional(),
  planing: fe(h(), ue([h(), D()])).nullable().optional(),
  customData: fe(h(), ve()).nullable().optional(),
  stockId: h().nullable()
}), Qm = F({
  id: h(),
  name: h().nullable(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  q: d(),
  trim: F({
    x1: d(),
    x2: d(),
    y1: d(),
    y2: d()
  }).nullable().optional(),
  cost: d().nullable().optional(),
  analysis: Nl.nullable().optional()
}), eb = F({
  id: h().optional(),
  name: h().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: h().optional(),
  q: d().optional(),
  orientationLock: ue([
    de(""),
    de("l"),
    de("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: fe(h(), ue([h(), D()])).nullable().optional(),
  finish: fe(h(), ue([h(), D()])).nullable().optional(),
  planing: fe(h(), ue([h(), D()])).nullable().optional(),
  customData: fe(h(), ve()).nullable().optional()
});
F({
  jobId: d(),
  metadata: Cn.optional(),
  parts: J(Jm),
  stock: J(Qm),
  offcuts: J(jl),
  inputs: F({
    parts: J(eb)
  })
});
const tb = F({
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  orientationLock: ue([
    de(""),
    de("l"),
    de("w")
  ]).nullable(),
  q: d(),
  name: h().nullable(),
  rot: ue([de(0), de(1)]).default(0),
  // V3 format: nested extras structure
  extras: F({
    banding: F({
      sides: fe(h(), ue([h(), D()]))
    }).nullable().optional(),
    finish: F({
      faces: fe(h(), ue([h(), D()]))
    }).nullable().optional(),
    planing: F({
      sides: fe(h(), ue([h(), D()])).optional(),
      faces: fe(h(), ue([h(), D()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: fe(h(), ve()).nullable().optional(),
  stockId: h().nullable()
}), ib = F({
  id: h(),
  name: h().nullable(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: h().nullable(),
  q: d(),
  trim: F({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }).nullable().optional(),
  cost: d().nullable().optional(),
  analysis: Nl.nullable().optional(),
  // New stock fields
  color: ue([
    F({
      hex: h(),
      name: h()
    }),
    h()
  ]).nullable().optional(),
  weight: d().positive().nullable().optional(),
  imageUrl: h().nullable().optional(),
  tags: J(h()).nullable().optional(),
  available: D().nullable().optional()
}), sb = F({
  id: h().optional(),
  name: h().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: h().optional(),
  q: d().optional(),
  orientationLock: ue([
    de(""),
    de("l"),
    de("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: F({
    banding: F({
      sides: fe(h(), ue([h(), D()]))
    }).nullable().optional(),
    finish: F({
      faces: fe(h(), ue([h(), D()]))
    }).nullable().optional(),
    planing: F({
      sides: fe(h(), ue([h(), D()])).optional(),
      faces: fe(h(), ue([h(), D()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: fe(h(), ve()).nullable().optional()
});
F({
  jobId: d(),
  metadata: Cn.optional(),
  parts: J(tb),
  stock: J(ib),
  offcuts: J(jl),
  inputs: F({
    parts: J(sb)
  })
});
function Vl(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    stockId: t?.stock?.id || t?.stockId || ""
  };
}
function Gl(t) {
  return t ? {
    areaEfficiency: t.areaEfficiency ?? 0,
    finishArea: t.finishArea ?? 0,
    bandingLength: t.bandingLength ?? 0,
    partArea: t.partArea ?? 0,
    totalParts: t.totalParts ?? 0,
    stackedNumberOfCuts: t.stackedNumberOfCuts ?? 0,
    numberOfCuts: t.numberOfCuts ?? 0,
    stackedCutLength: t.stackedCutLength ?? 0,
    cutLength: t.cutLength ?? 0,
    rollLength: t.rollLength ?? 0
  } : null;
}
const nb = F({
  stockType: he([...en]).optional(),
  bladeWidth: ue([
    sl,
    h()
  ]).optional(),
  cutType: kn,
  cutPreference: In,
  stackHeight: xn,
  guillotineOptions: Pn
}).optional();
F({
  l: d().nullable(),
  w: d().nullable(),
  t: ue([d(), h()]).nullable().optional(),
  material: h().nullable().optional(),
  orientationLock: ue([
    de("l"),
    de("w"),
    de("")
  ]).nullable().optional(),
  q: d().min(1).nullable().optional(),
  name: h().nullable().optional(),
  // Import existing schemas for extras
  banding: Wr.nullable().optional(),
  finish: Hr.nullable().optional(),
  planing: Ur.nullable().optional(),
  // Custom data as record
  customData: fe(h(), ve()).nullable().optional(),
  stockId: h().nullable().optional()
});
const ab = F({
  // Required fields
  stock: J(Pi).default([]),
  options: Zm,
  // Optional fields
  type: h().optional(),
  // variable | simple
  materials: J(Xm).optional(),
  banding: ua.nullable().optional(),
  finish: ua.nullable().optional(),
  planing: ua.nullable().optional(),
  machining: ve().optional(),
  bandingPricing: ns.optional(),
  finishPricing: ns.optional(),
  planingPricing: ns.optional(),
  machiningPricing: ns.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: ve().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Part validation rules
  partRules: bg.optional(),
  // Saw configuration
  saw: nb,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: F({
    enabled: D(),
    config: ve().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
});
function ob(t) {
  const e = ab.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function rb(t) {
  const e = ob(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
function jt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function lb(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {};
    if (be(e.a) || be(e.b) || be(e.c) || be(e.d))
      i.x1 = be(e.a) ? jt(e.a) : !1, i.y1 = be(e.b) ? jt(e.b) : !1, i.x2 = be(e.c) ? jt(e.c) : !1, i.y2 = be(e.d) ? jt(e.d) : !1;
    else {
      const n = _a(e);
      i.x1 = be(n.x1) ? jt(n.x1) : !1, i.x2 = be(n.x2) ? jt(n.x2) : !1, i.y1 = be(n.y1) ? jt(n.y1) : !1, i.y2 = be(n.y2) ? jt(n.y2) : !1;
    }
    t.banding = i;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, i = {};
    i.a = be(e.a) ? jt(e.a) : !1, i.b = be(e.b) ? jt(e.b) : !1, t.finish = i;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = _a(e.sides || {});
    e.sides && (be(s.x1) && (i.x1 = s.x1), be(s.x2) && (i.x2 = s.x2), be(s.y1) && (i.y1 = s.y1), be(s.y2) && (i.y2 = s.y2)), e.faces && (be(e.faces.a) && (i.a = e.faces.a), be(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function cb(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const i = Math.max(t.l, t.w), s = Math.min(t.l, t.w);
    t.w > t.l && (t.l = i, t.w = s);
  }
  return t;
}
function ql(t, e = 0) {
  return e === 0 || t.forEach((i) => cb(i, e)), t;
}
function ub(t, e, i, s, n, a, o) {
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
      banding: qp(),
      finish: dn(),
      planing: Wp()
    }, p = { ...u };
    return lb(p), p.banding && (f.banding = p.banding), p.finish && (f.finish = p.finish), p.planing && (f.planing = p.planing), f;
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
      analysis: Gl(u?.analysis)
    };
    return u?.trim && (f.trim = _a(u.trim)), f;
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
  return o && ql(r, o), {
    jobId: t,
    metadata: a,
    parts: r,
    stock: l,
    offcuts: s?.map(Vl) || [],
    inputs: c
  };
}
function db(t, e, i, s, n, a, o) {
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
        banding: { sides: Ra() },
        finish: { faces: dn() },
        planing: zp()
      }
    };
    return u.extras && (u.extras.banding?.sides && (f.extras.banding = { sides: u.extras.banding.sides }), u.extras.finish?.faces && (f.extras.finish = { faces: u.extras.finish.faces }), u.extras.planing && (f.extras.planing = {
      sides: u.extras.planing.sides || Ra(),
      faces: u.extras.planing.faces || dn()
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
    analysis: Gl(u?.analysis),
    // New stock fields
    color: u?.color ?? null,
    weight: u?.weight ?? null,
    imageUrl: u?.imageUrl ?? null,
    tags: u?.tags ?? null,
    available: u?.available ?? null
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
  return o && ql(r, o), {
    jobId: t,
    metadata: a,
    parts: r,
    stock: l,
    offcuts: s?.map(Vl) || [],
    inputs: c
  };
}
const fb = ["id", "data-index"], hb = /* @__PURE__ */ Re({
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
      const c = $d(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = Vr(l, c)), n.value = l;
    };
    Be([
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
    ], 10, fb));
  }
}), pb = ["id", "data-index", "disabled"], gb = /* @__PURE__ */ Re({
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
        Ee(c, { icon: ["fass", "spray-can"] })
      ], 10, pb);
    };
  }
});
function mb(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function zl(t) {
  const e = mb(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const bb = Re({
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
      return zl(this.inputShape);
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
}), yb = ["id", "disabled"];
function vb(t, e, i, s, n, a) {
  const o = bi("FontAwesomeIcon");
  return w(), A("button", {
    id: t.id,
    class: Ce(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Ee(o, { icon: ["fass", "hammer"] })
  ], 10, yb);
}
const wb = /* @__PURE__ */ Tt(bb, [["render", vb]]), Sb = ["id"], xb = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, kb = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Ib = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Pb = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Cb = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Tb = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Ab = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, or = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = te(0), a = te(!1), o = (N, m, B, K) => {
      if (!Se(B) || m === 0)
        return N;
      const oe = r();
      return m === 1 || m === 2 && K !== "n" && N ? oe : N;
    }, r = (N) => {
      const m = { ...i, ...N };
      if (!m.rectangle || !Se(m.rectangle)) return "";
      let B = "";
      switch (m.orientationModel) {
        case 0:
          B = S.value;
          break;
        case 1:
          m.stockGrain === "y" || m.stockGrain === "n" ? B = m.rectangle.l >= m.rectangle.w ? "l" : "w" : m.rectangle.l >= m.rectangle.w ? B = m.stockGrain : B = B = m.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          B = m.rectangle.l >= m.rectangle.w ? "l" : "w";
          break;
      }
      return B;
    }, l = () => {
      if (console.log("🔵 OrientationButton clicked", {
        disabled: i.disabled,
        orientationOptionsLength: T.value.length,
        orientationOptions: T.value,
        currentOrientation: S.value,
        orientationIndex: n.value,
        orientationModel: i.orientationModel,
        rectangleType: i.rectangleType,
        stockGrain: i.stockGrain
      }), i.disabled) {
        console.log("❌ Click blocked: button is disabled");
        return;
      }
      if (T.value.length <= 1) {
        console.log("❌ Click blocked: not enough orientation options");
        return;
      }
      const N = c(S.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && S.value === "" && n.value !== N && n.value === 0 && (console.log("🔄 Syncing orientation index for multi-edit", { from: n.value, to: N }), n.value = N);
      let B = null;
      [1, 2].includes(i.orientationModel) ? (console.log("🔀 Toggling orientation (model 1 or 2)"), B = f()) : (console.log("🔄 Iterating through orientation options (model 0)"), B = u()), console.log("✅ Setting new orientation", {
        oldIndex: n.value,
        newIndex: B,
        oldValue: T.value[n.value],
        newValue: T.value[B]
      }), n.value = B;
    }, c = (N) => {
      const m = T.value.findIndex((B) => B === N);
      return m === -1 ? 0 : m;
    }, u = () => {
      let N = n.value + 1;
      return N > T.value.length - 1 && (N = 0), N;
    }, f = () => {
      let N = 0;
      if (S.value === "") {
        const m = r();
        N = T.value.findIndex((B) => B === m);
      } else
        N = T.value.findIndex((m) => m === "");
      return N;
    }, p = (N) => {
      console.log("📤 Emitting updateOrientation event", { newValue: N }), s("updateOrientation", N);
    }, g = () => {
      const N = S.value;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit)
        return N === " " ? " " : N === "" ? "" : N === "l" ? "l" : N === "w" ? "w" : "default";
      switch (i.orientationModel) {
        case 0:
          return N === " " ? " " : N ? i.stockGrain === "n" ? N || i.shapeOrientation || "default" : i.stockGrain === "w" ? N === "w" ? "w" : "l" : N === "l" ? "l" : "w" : "default";
        case 1:
          return N === " " ? " " : N ? i.stockGrain === "n" ? N || i.shapeOrientation || "default" : i.stockGrain === "w" ? N === "w" ? "w" : "l" : N === "l" ? "l" : "w" : "default";
        case 2:
          return N === " " ? " " : N ? i.stockGrain === "n" ? N || i.shapeOrientation || "default" : i.stockGrain === "w" ? N === "w" ? "w" : "l" : N === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, k = () => {
      if (!i.rectangle)
        return;
      if ("multiEdit" in i.rectangle && i.rectangle.multiEdit && !S.value) {
        E("");
        return;
      }
      const N = o(
        S.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (N !== S.value) {
        E(N);
        return;
      }
      if (!a.value || n.value === -1) {
        const m = c(S.value);
        n.value = m;
      }
      if (Se(i.rectangle)) {
        if (i.orientationModel === 1) {
          const m = M.value ? r() : S.value;
          E(m);
          return;
        }
        if (i.orientationModel === 2) {
          let m;
          M.value ? m = i.stockGrain !== "n" ? r() : "" : m = S.value, E(m);
        }
      }
    }, R = te(!1), E = (N) => {
      const m = c(N);
      R.value = !0, n.value = m, R.value = !1, p(N);
    }, P = () => {
      const N = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], m = ["l", "w", "y", "n"], B = [0, 1, 2], K = {
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
      }, j = [];
      N.forEach((W) => {
        m.forEach((z) => {
          B.forEach((G) => {
            const le = new Vh({
              l: W.l,
              w: W.w
            }), ge = r({
              orientationModel: G,
              rectangle: le,
              stockGrain: z
            });
            let we = "";
            le.l === le.w ? we = "l === w" : le.l > le.w ? we = "l >= w" : we = "w > l";
            const Ae = ["l", "w", "y"].includes(z) ? K : oe;
            j.push({
              Model: G,
              "Stock grain": z,
              "Stock grain description": C[z],
              Dimensions: we,
              "Orientation lock": ge || "N/A",
              "Orientation Lock description": Ae[ge] || "N/A"
            });
          });
        });
      }), j.sort((W, z) => {
        if (W.Model !== z.Model)
          return W.Model - z.Model;
        if (W["Stock grain"] !== z["Stock grain"])
          return W["Stock grain"].localeCompare(z["Stock grain"]);
        const G = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return G[W.Dimensions] - G[z.Dimensions];
      }), console.table(j);
    }, T = X(() => {
      if (!i.rectangle) return ["l", "w"];
      if (Vt(i.rectangle)) return ["l", "w"];
      let N = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : (L.value && (N = N.filter((m) => m !== "w")), N);
    }), L = X(() => Se(i.rectangle) || qi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), S = X(() => {
      let N = "";
      if (Vt(i.rectangle))
        N = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Se(i.rectangle))
        N = i.rectangle.orientationLock ?? "";
      else if (qi(i.rectangle)) {
        const B = i.rectangle.grain ?? "";
        B === "l" || B === "w" || B === "" ? N = B : N = "";
      }
      return N;
    }), V = X(() => Vt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), M = X(() => !V.value.l && !V.value.w), $ = X(() => Vt(i.rectangle) ? !1 : ha(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), H = X(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (qi(i.rectangle) || i.rectangleType === "stock") {
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
      const N = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, m = i.stockGrain || "default";
      let B = "default";
      Se(i.rectangle) || i.rectangleType === "shape" ? B = g() : Vt(i.rectangle) && (B = i.rectangle.direction || "default");
      const K = N[m]?.[B];
      return K || N[m]?.default || "freeRotation";
    });
    return Be(n, (N, m) => {
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
      p(T.value[N]);
    }, { immediate: !1 }), Be(V, (N, m) => {
      if (!i.rectangle || i.orientationModel === 0 || !Se(i.rectangle) || Se(i.rectangle) && (i.orientationModel === 2 && m.l && m.w && !S.value || i.stockGrain === "n" && !S.value))
        return;
      const B = r();
      S.value !== B && p(B);
    }, { immediate: !1 }), Be(() => i.stockGrain, (N, m) => {
      N !== m && k();
    }, { immediate: !0 }), Ht(() => {
      k(), mt(() => {
        a.value = !0, i.debug && P();
      });
    }), (N, m) => (w(), A("button", {
      type: "button",
      id: t.id,
      class: Ce(["c-btn orientation-button", { rot: $.value, square: L.value, disabled: t.disabled, [H.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      H.value === "delete" ? (w(), A("svg", xb, [...m[0] || (m[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : Y("", !0),
      H.value === "noChange" ? (w(), A("svg", kb, [...m[1] || (m[1] = [
        O("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : Y("", !0),
      H.value === "freeRotation" ? (w(), A("svg", Ib, [...m[2] || (m[2] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : Y("", !0),
      H.value === "leftRight" ? (w(), A("svg", Pb, [...m[3] || (m[3] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : Y("", !0),
      H.value === "topBottom" ? (w(), A("svg", Cb, [...m[4] || (m[4] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : Y("", !0),
      H.value === "grainLeftRight" ? (w(), A("svg", Tb, [...m[5] || (m[5] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : Y("", !0),
      H.value === "grainTopBottom" ? (w(), A("svg", Ab, [...m[6] || (m[6] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : Y("", !0)
    ], 10, Sb));
  }
}), Ob = ["id", "data-index", "disabled"], Lb = /* @__PURE__ */ Re({
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
        Ee(c, { icon: ["fass", "hammer"] })
      ], 10, Ob);
    };
  }
}), $b = {
  key: 0,
  class: "info"
}, Fb = ["disabled"], Db = /* @__PURE__ */ Re({
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
        const T = i.field.propertyPath || i.field.name;
        return T.includes(".") ? hi(i.item, T) ?? null : i.item[T] ?? null;
      } catch (T) {
        return console.error("[CheckoutField] Error getting field value:", T), null;
      }
    }), r = X(() => {
      if (i.field.custom && i.field.type) {
        const S = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(S))
          return S;
      }
      const T = {
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
      const L = T[i.field.type];
      return L || "string";
    }), l = X(() => i.field.output ? i.field.output : null), c = X(() => i.field.options || []), u = X(() => !1), f = X(() => Fo(i.item, [i.field.name])), p = X(() => Fo(i.item, [i.field.name], !0)), g = X(() => i.multiEdit || !1), k = X(() => i.materialOptions?.length > 0 && Se(i.item) ? !i.item.material : !1), R = X(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && o.value !== null && i.field.info[o.value] || null : null), E = (T) => {
      s("update", T);
    }, P = (T, L) => {
      s("validation", T, L);
    };
    return (T, L) => a.value ? (w(), A(Te, { key: 1 }, [
      t.field.name === "orientationLock" ? (w(), ke(or, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: E
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (w(), ke(or, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: E
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (w(), ke(hb, {
        key: 2,
        "input-shape": x(Se)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: L[0] || (L[0] = (S) => T.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (w(), ke(gb, {
        key: 3,
        "input-shape": x(Se)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: L[1] || (L[1] = (S) => T.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (w(), ke(Lb, {
        key: 4,
        "input-shape": x(Se)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: L[2] || (L[2] = (S) => T.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (w(), ke(wb, {
        key: 5,
        "input-shape": x(Se)(t.item) ? t.item : null,
        onOpen: L[3] || (L[3] = (S) => T.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (w(), ke(Ci, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: x(q)(t.field.label || "fields.material"),
        placeholder: x(q)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !1,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: x(q)("actions.select"),
          delete: x(q)("actions.delete")
        },
        "onUpdate:value": E,
        onValidation: P
      }, {
        default: Ti(() => [
          Hs(T.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (w(), ke(Ci, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: o.value,
        label: x(q)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: k.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: x(q)("actions.select"),
          delete: x(q)("actions.delete")
        },
        output: "number",
        "onUpdate:value": E,
        onValidation: P
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (w(), A("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: L[4] || (L[4] = (S) => T.$emit("open-image-upload"))
      }, [
        Ee(x(Ws), { icon: ["fass", "image"] })
      ], 8, Fb)) : Y("", !0)
    ], 64)) : (w(), ke(Ci, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: o.value,
      label: x(q)(t.field.label || t.field.name),
      placeholder: x(q)(t.field.placeholder || t.field.name),
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
      "onUpdate:value": E,
      onValidation: P
    }, {
      default: Ti(() => [
        R.value ? (w(), A("p", $b, [
          Ee(x(Ws), { icon: ["fass", "info-circle"] }),
          as(" " + ee(R.value), 1)
        ])) : Y("", !0),
        Hs(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Eb = { class: "checkout-calculator-wrapper" }, Rb = {
  key: 0,
  class: "row table-heading"
}, _b = {
  key: 0,
  class: "cell center"
}, Mb = { class: "cell" }, Bb = {
  key: 0,
  class: "cell"
}, jb = ["onClick"], Nb = { class: "cell" }, Vb = ["disabled", "aria-label", "onClick"], Gb = { class: "button-wrapper main" }, qb = ["aria-label"], zb = ["aria-label", "disabled"], Wb = ["aria-label"], Hb = { id: "part-count" }, Ub = {
  key: 3,
  id: "messages"
}, Yb = {
  key: 0,
  class: "heading"
}, Kb = { class: "content" }, Zb = {
  key: 4,
  id: "progress"
}, Xb = { id: "diagram-wrapper" }, Jb = {
  key: 0,
  id: "stack"
}, Qb = {
  key: 3,
  class: "debug"
}, da = !0, ey = /* @__PURE__ */ Re({
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
    const s = Bi(() => Promise.resolve().then(() => ly)), n = Bi(() => Promise.resolve().then(() => Ay)), a = Bi(() => Promise.resolve().then(() => Ey)), o = Bi(() => Promise.resolve().then(() => so)), {
      inputs: r,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: f,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: p,
      addInputShape: g,
      addInputStock: k,
      cloneInputShape: R,
      updateInputShape: E,
      validationIssues: P,
      setExtrasOptionsFromPricing: T,
      getCentralizedOptions: L
    } = gr(), { r: S, updateFromResult: V, stackedStock: M, uniqueAddedShapes: $, uniqueUsedStock: H, activeStockAutoId: N, activeStock: m, setActiveStockAutoId: B } = Na(), { progress: K, reset: oe } = au(), { addNotice: C } = Va(), j = X(() => r.inputShapes.value.filter(Se)), W = (y) => !y || !Array.isArray(y) ? [] : y.map((v) => eg({ parts: [v] }).parts?.[0] || v), z = t, G = i, le = te(!1), me = "production", ge = te(navigator?.language || "en-US"), we = Ic(null), Ae = window.location.hostname, Z = te(!1), ct = te(!0), ai = bo("Checkout/currentURL", window.location.href), oi = bo("Checkout/lastMigrationVersion", "0.0.0"), ut = te(null), Q = te(!1), ze = te(!1), Qe = te(!1), ri = te(!1), ws = te(!1), Yt = te(Yu()), re = te(!1), { socket: ce } = su({
      refs: {
        connected: Z,
        thinking: Qe
      },
      callbacks: {
        onResult(y) {
          const v = y.optimisation;
          if (V(v), !v.shapeList?.length || !v.stockList?.length) {
            oe(), C({
              type: "error",
              message: q("errors.calculation.no_result"),
              additional: [q("errors.validation.check_inputs")]
            }), Qe.value = !1;
            return;
          }
          if ((ae.apiVersion || 3) === 2 ? ut.value = ub(
            y.jobId,
            $.value,
            H.value,
            S.offcuts?.value || [],
            r.inputShapes.value,
            S.metadata.value,
            ae.resultOrientationModel
          ) : ut.value = db(
            y.jobId,
            $.value,
            H.value,
            S.offcuts?.value || [],
            r.inputShapes.value,
            S.metadata.value,
            ae.resultOrientationModel
          ), S?.metadata?.value?.unplacedParts?.length) {
            const b = S.metadata.value.unplacedParts.map((_) => _.id).join();
            C({
              type: "warning",
              message: q("woodwork.parts_not_fit") + ": " + b
            });
          }
          ut.value && G("result", ut.value), Qe.value = !1;
        },
        onUser(y) {
          we.value = y;
        },
        onConnectError(y) {
          C({
            type: "error",
            message: q("errors.network.cannot_connect"),
            additional: [y]
          });
        },
        onError(y) {
          C({
            type: "error",
            message: q("errors.general.error_occurred"),
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
    }, ae = bt(Pe), Fe = bt({
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
    }), Ge = te(null), li = te(!1), vi = te(""), Ln = te("");
    Be(P, (y) => {
      y?.length > 0 ? (li.value = !0, vi.value = "Validation Errors", Ln.value = y.map((v) => `${v.message} (${v.category.join(", ")})`).join(`

`)) : vi.value === "Validation Errors" && (li.value = !1, vi.value = "", Ln.value = "");
    }, { deep: !0 });
    const At = bt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Me = te([]), Ke = te([]), Ss = te([]), _t = bt({
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
    }), Oe = bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), Ve = bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), We = bt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), no = te(null), Oi = bt({}), Li = bt({}), $i = bt({}), xs = te(null), Yl = X(() => ({
      banding: Oi.rules,
      finish: Li.rules,
      planing: $i.rules
    })), ao = X(() => nu({
      stockType: Fe.stockType,
      materials: Me.value,
      minDimension: ae.minDimension,
      ...ae.fieldOrder && ae.fieldOrder.length > 0 ? { allowedFieldIds: ae.fieldOrder } : {}
    })), $n = te([]), Fn = te({
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
    }), Ji = X(() => {
      const y = ao.value.fields.value, v = ao.value.allFieldsMap.value, I = y.filter((De) => Fn.value[De.name] ?? !0), b = ["banding", "finish", "planing", "machining", "imageUpload"], _ = [];
      for (const De of b) {
        const et = Fn.value[De], st = I.find((je) => je.name === De);
        if (et && !st) {
          const je = v.get(De);
          je && _.push(je);
        }
      }
      const pe = $n.value || [];
      return [...I, ..._, ...pe];
    }), Qi = X(() => Ji.value.length + 2), Kl = X(() => {
      const y = {
        id: 34,
        del: 32
      }, v = {
        id: `${y.id}px`,
        del: `${y.del}px`
      }, I = [];
      for (const b of Ji.value) {
        if (b.name === "trim") continue;
        const _ = b.w ?? "minmax(20px, 1fr)";
        I.push(_);
      }
      return I.unshift(v.id), I.push(v.del), I.join(" ");
    }), ks = X(() => ({
      "--btn-color": ae.colors.buttonText,
      "--btn-bg": ae.colors.button,
      "--btn-hover-bg": Zl(ae.colors.button, -8),
      "--btn-focus-ring": ae.colors.button
    }));
    function Zl(y, v) {
      const I = y.replace("#", ""), b = parseInt(I, 16), _ = Math.round(2.55 * v), pe = (b >> 16) + _, xe = (b >> 8 & 255) + _, De = (b & 255) + _;
      return `#${(16777216 + (pe < 255 ? pe < 1 ? 0 : pe : 255) * 65536 + (xe < 255 ? xe < 1 ? 0 : xe : 255) * 256 + (De < 255 ? De < 1 ? 0 : De : 255)).toString(16).slice(1)}`;
    }
    const Xl = {
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
    }, oo = X(() => we.value ? !(we.value && we.value?.api?.whiteLabel) : !0), Is = {
      stockSelection: (y) => {
        const v = ["efficiency", "smallest"];
        y && !v.includes(y) ? console.warn(`${y} is not a valid stockSelection, expected ${v.join("|")}`) : Fe.options.stockSelection = y;
      },
      minSpacing: (y) => {
        Fe.options.minSpacing = y;
      },
      maxParts: (y) => {
        ae.maxParts = y;
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
        for (const I in Pe.enable)
          I in y && (ae.enable[I] = y[I]);
        for (const I in v) {
          const b = v[I], _ = hi(y, [b]), pe = Pe.enable[b];
          Mt(I, _ !== void 0 ? _ : pe);
        }
        ws.value = hi(y, ["csvImport"]) ?? Pe.enable.csvImport;
      },
      colors: (y) => {
        for (const v in Pe.colors)
          v in y && (ae.colors[v] = y[v]);
      },
      orientationModel: (y) => {
        if (![0, 1, 2].includes(y)) {
          ae.orientationModel = 0;
          return;
        }
        ae.orientationModel = y;
      },
      numberFormat: (y) => {
        if (!["decimal", "fraction"].includes(y)) {
          ae.numberFormat = "decimal";
          return;
        }
        ae.numberFormat = y;
      },
      customFields: (y) => {
        if (!Array.isArray(y) || !y?.length)
          return;
        const v = [];
        y.forEach((I) => {
          const b = ro(I.id), _ = {
            ...I,
            custom: !0,
            id: b,
            name: b,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + b,
            fieldMap: "customData." + b
          };
          I.type === "checkbox" && (_.w = "32px"), I.type === "integer" || I.type === "float" ? _.output = I.output ?? "number" : I.type === "select" && (_.output = I.output ?? "string", _.options = I.options), v.push(_);
        }), $n.value = v, mt(() => {
          for (const I of r.inputShapes.value)
            I.customData = y.reduce((b, _) => {
              const pe = ro(_.id);
              return b[pe] = I.customData[pe] || _.default || "", b;
            }, {});
        });
      }
    }, Jl = (y) => {
      z.debug && G("log", ["checkout init...", y]), y?.stockFilterEnabled && (localStorage.removeItem("inputs/inputStock"), r.inputStock.value = []), y?.parts && (y.parts = W(y.parts));
      let v;
      try {
        v = rb(y);
      } catch (b) {
        G("error", b.message || "Invalid init data");
        return;
      }
      if (v.saw) {
        const b = v.saw;
        if (b.stockType !== void 0 && (en.includes(b.stockType) || console.warn(`${b.stockType} is not a valid stockType, expected ${en.join("|")}`), Fe.stockType = b.stockType, b.stockType === "linear" && (Fe.cutType = null, Fe.cutPreference = null)), b.bladeWidth !== void 0) {
          const _ = typeof b.bladeWidth == "string" ? parseFloat(b.bladeWidth) : b.bladeWidth;
          _ >= 0 ? Fe.bladeWidth = _ : console.warn(`SmartCut - you provided an incorrect blade width of: ${b.bladeWidth}`);
        }
        if (b.cutType !== void 0 && (Fe.cutType = b.cutType), b.cutPreference !== void 0 && (ma.includes(b.cutPreference) ? Fe.cutPreference = b.cutPreference : console.warn(`SmartCut - cut preference ${b.cutPreference || "N/A"} is not valid. Expected: ${ma.join("|")}`)), b.guillotineOptions !== void 0 && typeof b.guillotineOptions == "object" && Object.assign(Fe.guillotineOptions, b.guillotineOptions), b.stackHeight !== void 0) {
          const _ = typeof b.stackHeight == "string" ? parseFloat(b.stackHeight) : b.stackHeight;
          Fe.stackHeight = _;
        }
      }
      if (v?.options) {
        const b = v.options;
        Pl(b), v.saw ? (["stockType", "bladeWidth"].forEach((xe) => {
          xe in v.saw || G("error", `${xe} is a required saw property`);
        }), (v.saw.cutType === "guillotine" || v.saw.cutType === "beam") && !("cutPreference" in v.saw) && G("error", "cutPreference is a required saw property for guillotine and beam cut types")) : G("error", "saw configuration is required");
        const _ = ["enable", "colors"];
        for (const pe in b)
          _.includes(pe) || (ae[pe] = b[pe]), pe in Is && Is[pe](b[pe]);
      }
      if (v.options.colors && "colors" in Is && Is.colors(v.options.colors), v.banding) {
        const b = v.banding;
        "locations" in b && b.locations && (Oi.locations = b.locations), "groups" in b && b.groups && (Oi.groups = b.groups), "rules" in b && b.rules && (Oi.rules = b.rules);
      }
      if (v.finish) {
        const b = v.finish;
        "locations" in b && b.locations && (Li.locations = b.locations), "groups" in b && b.groups && (Li.groups = b.groups), "rules" in b && b.rules && (Li.rules = b.rules);
      }
      if (v.planing) {
        const b = v.planing;
        "locations" in b && b.locations && ($i.locations = b.locations), "groups" in b && b.groups && ($i.groups = b.groups), "rules" in b && b.rules && ($i.rules = b.rules);
      }
      v.partRules && (xs.value = v.partRules), Bn("banding", v), Bn("finish", v), Bn("planing", v), tc(v), uo(v), ze.value = !0, z.debug && G("log", ["init complete"]);
      const I = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(I), mt(() => {
        oo.value && !uc() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Mt = (y, v = !1) => {
      Fn.value[y] = v;
    }, ro = (y) => y ? Ou(y)?.toLowerCase() : null, Ql = (y, v, I) => {
      try {
        if (!y || !v) return;
        const b = I !== null && I !== "" && I !== void 0 && I !== 0;
        if (v === "material" && (!I || I === "")) {
          const xe = { material: null, t: null };
          E(y.autoId, xe) || (_i(y, "material", null), _i(y, "t", null), y.isNew || y.validate());
          return;
        }
        if (y.isNew)
          if (b)
            y.isNew = !1;
          else {
            _i(y, v, I);
            return;
          }
        let _;
        if (v.includes(".")) {
          const xe = v.split("."), De = xe[0], et = xe.slice(1).join("."), je = { ...y[De] || {} };
          _i(je, et, I), _ = { [De]: je };
        } else
          _ = { [v]: I };
        E(y.autoId, _) || (_i(y, v, I), y.validate()), ["l", "w", "t"].includes(v) && mt(() => {
          lo(y);
        });
      } catch (b) {
        console.error("[CHECKOUT] Error updating field:", b);
      }
    }, ec = () => {
    }, lo = (y) => {
      if (xs.value && y && !y.isNew && !(!y.l && !y.w))
        try {
          const v = yg(y, xs.value);
          if (y.issues && (y.issues = y.issues.filter(
            (I) => !(I.category?.includes("part") && I.identifier === "part-validation-rules")
          )), !v.valid && v.violations.length > 0)
            for (const I of v.violations) {
              const b = wg(I);
              new ie({
                item: y,
                type: "error",
                category: ["part"],
                message: b,
                shouldTranslate: !1,
                issues: y.issues || []
              });
            }
        } catch (v) {
          console.error("[CHECKOUT] Error validating part:", v);
        }
    }, tc = (y) => {
      if (hi(ae, ["enable", "machining"]) && y?.machining) {
        for (const v in _t)
          y.machining[v] && (_t[v] = y.machining[v]);
        if (["holes", "hingeHoles"].forEach((v) => {
          y?.machining?.[v] && (_t[v].enabled = y?.machining?.[v].enabled);
        }), y?.machining?.corners?.types?.length && (_t.corners.enabled = !0, _t.corners.types = y.machining.corners.types), y.banding && y?.options?.enable?.banding) {
          if (!Oe) return;
          _t.banding = {
            enabled: !0
          }, Oe.options.length && (_t.banding.options = Oe.options), Oe.labels.length && (_t.banding.labels = Oe.labels), ko(Oe.pricing) && (_t.banding.pricing = Oe.pricing);
        }
      }
    }, ic = (y = null) => {
      Ge.value = y, y && Se(y) && y.l && y.w ? le.value = !0 : alert(q("machining.enter_dimensions_first"));
    }, sc = () => {
      le.value = !1;
    }, co = (y = []) => {
      if (Ke.value = [], Ss.value = [], Mt("t", !1), !!y.length) {
        for (const v of y)
          if (v?.t)
            if (typeof v.t == "string" && v.t.includes(",")) {
              const I = fo(v.t, !0);
              I.length === 2 ? (ac(I), Mt("t", !0), v.t = Ke.value[0]) : G("error", "bonded thickness found which does not have 2 options");
            } else Ke.value.includes(v.t) || Ke.value.push(v.t);
        Ke.value.length > 1 && Mt("t", !0);
      }
    }, nc = (y) => {
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
      const v = Me.value.find((_) => _.name === y.material);
      if (!v)
        return {
          thicknesses: Ke.value,
          bondedThicknesses: []
        };
      const I = [...v.thicknesses], b = [];
      for (let _ = 0; _ < I.length; _++) {
        const pe = I[_], xe = fo(pe), De = [];
        if (xe.length) {
          for (const et of xe)
            I[_] = et, De.push(_);
          _++;
        }
        De.length && b.push(De);
      }
      return {
        thicknesses: I,
        bondedThicknesses: b
      };
    }, uo = (y) => {
      if (y?.stock?.some((v) => v?.material)) {
        Me.value = [], Ke.value = [], Ss.value = [];
        const v = /* @__PURE__ */ new Map();
        for (const b of y.stock) {
          if (!b.material) continue;
          const _ = b.material.toUpperCase();
          v.has(_) || v.set(_, /* @__PURE__ */ new Set()), b.t != null && v.get(_)?.add(U({ v: b.t }));
        }
        Me.value = Array.from(v.entries()).map(([b, _]) => ({
          name: b,
          thicknesses: Array.from(_).sort((xe, De) => xe - De)
        }));
        const I = /* @__PURE__ */ new Set();
        for (const b of Me.value)
          for (const _ of b.thicknesses)
            I.add(U({ v: _ }));
        Ke.value = Array.from(I).sort((b, _) => b - _), Me.value.length > 1 ? Mt("material", !0) : Mt("material", !1), Ke.value.length > 1 ? Mt("t", !0) : Mt("t", !1);
      } else
        co(y.stock);
    }, ac = (y, v = null) => {
      if (!Array.isArray(y)) {
        G("error", "addBondedThicknesses expects an array");
        return;
      }
      const I = [];
      for (let b of y)
        ae.numberFormat === "decimal" && (b = parseFloat(b)), Ke.value.push(b), v && v.thicknesses.push(b), I.push(Ke.value.length - 1);
      Ss.value.push(I);
    }, oc = (y) => {
      const { thicknesses: v } = nc(y);
      return v?.length ? v.map((I) => ({
        label: I?.toString(),
        value: I
      })) : [];
    }, fo = (y, v = !1) => {
      if (typeof y == "string" && y.includes(",")) {
        const I = y.split(",");
        return v ? I.map((b) => U({ v: b })) : I;
      }
      return [];
    }, rc = () => {
      re.value ? cc() : lc();
    }, lc = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), re.value = !0;
    }, cc = () => {
      document.exitFullscreen && document.exitFullscreen(), re.value = !1;
    }, uc = () => {
      if (we.value?.api?.whiteLabel) return !0;
      let y = !0;
      const v = document.querySelector("#smartcut-checkout a#credit");
      if (!v) return y = !1;
      const I = window.getComputedStyle(v);
      return I.display === "none" || I.display === "hidden" || I.opacity === "0" || I.color === "transparent" || I.position !== "absolute" || I.color !== "#4e4e4e" && I.color !== "rgb(78, 78, 78)" ? y = !1 : (ct.value = y, y);
    }, Dn = X(() => typeof z.findExtrasPrice == "function"), ho = (y, v) => {
      let I, b;
      switch (v) {
        case "banding":
          I = Oe.options, b = Oe.labels;
          break;
        case "finish":
          I = Ve.options, b = Ve.labels;
          break;
        case "planing":
          I = We.options, b = We.labels;
          break;
        default:
          I = [], b = [];
      }
      wi(y, v, I, b);
    }, po = (y) => {
      const v = Object.keys(y);
      return Math.max(...v.map((b) => b.split("|").length));
    }, es = (y, v, I) => {
      if (!y)
        return [];
      if (I > 0 && !v[I - 1])
        return [];
      const b = /* @__PURE__ */ new Set();
      for (const pe of Object.keys(y)) {
        const xe = pe.split("|");
        if (xe.length > I) {
          let De = !0;
          for (let et = 0; et < I; et++) {
            const st = v[et], je = xe[et];
            if (st && st !== je) {
              De = !1;
              break;
            }
          }
          De && b.add(xe[I]);
        }
      }
      return Array.from(b);
    }, En = (y, v, I, b) => {
      let _, pe;
      switch (v) {
        case "banding":
          _ = Oe.options, pe = Oe.labels;
          break;
        case "finish":
          _ = Ve.options, pe = Ve.labels;
          break;
        case "planing":
          _ = We.options, pe = We.labels;
          break;
        default:
          _ = [], pe = [];
      }
      return oa(y, v, I, b, _, pe);
    }, dc = (y, v, I) => {
      let b, _;
      switch (v) {
        case "banding":
          b = Oe.options, _ = Oe.labels;
          break;
        case "finish":
          b = Ve.options, _ = Ve.labels;
          break;
        case "planing":
          b = We.options, _ = We.labels;
          break;
        default:
          b = [], _ = [];
      }
      return oa(y, v, I, z.findExtrasPrice, b, _);
    }, fc = te({}), Rn = (y = 1) => {
      for (let v = y; v--; ) {
        let I = {
          l: null,
          w: Fe.stockType === "linear" ? r.inputStock.value[0]?.w : null,
          t: Ke.value.length ? Ke.value[0] : null,
          q: 1,
          material: Me.value?.length === 1 ? Me.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const _ = r.inputShapes.value[r.inputShapes.value.length - 1];
          I.material = _.material, I.t = _.t;
        }
        const b = g(I);
        b && (Oe?.labels?.length && wi(b, "banding", Oe.options, Oe.labels), Ve?.labels?.length && wi(b, "finish", Ve.options, Ve.labels), We?.labels?.length && wi(b, "planing", We.options, We.labels));
      }
    }, _n = (y = {}) => {
      const v = {
        q: 1,
        // Always set quantity to 1
        ...y
      }, I = g(v);
      return I && (Fe.stockType === "linear" && r.inputStock.value[0]?.w && (I.w = r.inputStock.value[0].w), Ke.value.length && (I.t = Ke.value[0]), Me.value?.length === 1 && (I.material = Me.value[0].name), Oe?.labels?.length && wi(I, "banding", Oe.options, Oe.labels), Ve?.labels?.length && wi(I, "finish", Ve.options, Ve.labels), We?.labels?.length && wi(I, "planing", We.options, We.labels)), I;
    }, hc = (y) => {
      if (Ke.value.length)
        for (const v of y) {
          if (!v.t) return;
          const I = Ke.value.findIndex(
            (pe) => U({ v: pe }) === v.t
          ), b = Ss.value.find((pe) => pe.includes(I));
          if (!b) return;
          const _ = Math.min(
            ...b.map((pe) => Ke.value[pe])
          );
          U({ v: v.t }) > _ && (v.q = Number(v.q) * (U({ v: v.t }) / _), v.notes = `Bond to form ${v.t.valueOf()}`, v.t = _);
        }
    }, go = () => {
      oe(), B(null), S.stockList.value = [], S.shapeList.value = [], S.cutList.value = [];
    }, Mn = () => {
      r.inputShapes.value.length = 0, z.inputType !== "formula" && mt(() => Rn());
    }, pc = () => {
      Ju();
    }, gc = async () => {
      if (G("calculating"), Qe.value) return !1;
      Qe.value = !0, ri.value = !1;
      const y = await Gm({
        t: q,
        partTrim: ae.partTrim,
        maxShapes: ae.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Oe.pricing,
        finishPricing: Ve.pricing,
        planingPricing: We.pricing,
        findExtrasPrice: z.findExtrasPrice,
        extrasValidationRules: Yl.value,
        onLimit: () => {
          C({
            type: "error",
            message: q("limits.max_parts") + " " + ae.maxParts
          });
        }
      });
      if (xs.value)
        for (const _ of r.inputShapes.value)
          lo(_);
      const v = r.inputShapes.value.flatMap((_) => _.issues || []).filter((_) => _.type === "error" && _.category?.includes("part"));
      if (v.length > 0) {
        C({
          type: "error",
          message: q("errors.validation.inputs_issue", { 0: "part" }),
          additional: v.map((_) => _.message)
        }), G("validation-error"), Qe.value = !1;
        return;
      }
      if (!y.valid) {
        G("validation-error"), Qe.value = !1;
        return;
      }
      go();
      const I = r.inputShapes.value.map((_) => R(_)).filter(Boolean);
      if (I.length !== r.inputShapes.value.length)
        return C({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), Qe.value = !1, !1;
      hc(I), z.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((_) => ({ l: _.l, w: _.w })),
        "parts",
        I.map((_) => ({ l: _.l, w: _.w }))
      );
      const b = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: I.map((_) => _.toData()),
        inputStock: r.inputStock.value.map((_) => _.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Ae,
        extrasOptions: L(),
        source: "checkout",
        sourceVersion: "4.0.34"
      };
      await ce.connect(), ce.emit("calculate", b);
    }, Bn = (y, v) => {
      if (Mt(y, !1), !y || !v || !v?.[y] || !hi(ae, ["enable", y]))
        return;
      const I = [y, "pricing"];
      if (!xo(v, I)) {
        G("error", `${I.join(".")} not found in sent data`);
        return;
      }
      const b = hi(v, I);
      if (typeof b != "object") {
        G("error", `${I.join(".")} data must be an object`);
        return;
      }
      if (!ko(b)) {
        G("error", `if provided, ${I.join(".")} data must contain some values`);
        return;
      }
      const _ = Object.keys(b), pe = Object.values(b);
      if (!_.length) {
        G("error", `no ${I.join(".")} pricing found`);
        return;
      }
      const xe = /,/;
      for (const je of _)
        if (xe.test(je)) {
          G("error", `${I} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (pe.some((je) => isNaN(je))) {
        G("error", `${I} values must be a number`);
        return;
      }
      const De = po(b), et = [y, "labels"];
      let st = [];
      if (xo(v, et))
        st = hi(v, et);
      else {
        G("error", `${et.join(".")} not found`);
        return;
      }
      if (!st) {
        G("error", `${et.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(st)) {
        G("error", `${et.join(".")} data must be an array`);
        return;
      }
      if (!st?.length) {
        G("error", `if provided, ${et.join(".")} data must contain values`);
        return;
      }
      if (st.length !== De) {
        G("error", `${et.join(".")} length (${st.length}) must match the number of levels in ${I.join(".")} (${De})`);
        return;
      }
      switch (y) {
        case "banding": {
          Oe.labels = st, Oe.pricing = b;
          const je = jn(b);
          Oe.options = je, T("banding", je, st, b);
          break;
        }
        case "finish": {
          Ve.labels = st, Ve.pricing = b;
          const je = jn(b);
          Ve.options = je, T("finish", je, st, b);
          break;
        }
        case "planing": {
          We.labels = st, We.pricing = b;
          const je = jn(b);
          We.options = je, T("planing", je, st, b);
          break;
        }
      }
      if (no.value = L(), Mt(y, !0), !!r.inputShapes.value?.length)
        for (const je of r.inputShapes.value)
          ho(je, y);
    }, jn = (y) => {
      const v = [], I = Object.keys(y), b = po(y);
      for (let _ = b; _--; ) v.push(/* @__PURE__ */ new Set());
      for (const _ of I)
        _.split("|").forEach((xe, De) => v[De].add(xe));
      for (let _ = 0; _ < b; _++)
        v[_] = Array.from(v[_]);
      return v;
    }, Ps = (y, v) => {
      if (!v) return;
      y !== "info" && Object.keys(At).forEach((b) => {
        b !== y && b !== "info" && (At[b] = null);
      });
      const I = r.inputShapes.value.indexOf(v);
      At[y] === I ? (Ge.value = null, At[y] = null, fc.value[y] = void 0) : (Ge.value = v, At[y] = I);
    }, mo = (y) => {
      if (G("log", ["load event received"]), !ze.value) {
        G("log", ["load event received"]);
        return;
      }
      mc(y.detail);
    }, mc = (y) => {
      if (G("log", ["loading parts..."]), !y || !y?.inputs?.parts?.length) {
        G("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let v = 0;
      for (const b of y.inputs.parts) {
        const _ = _n(b);
        _ ? _.issues?.length && G("log", [`SmartCut - issues found while importing part at index ${v}`, _.issues]) : G("log", [`SmartCut - error loading part at index ${v}`, b]), v++;
      }
      r.inputShapes.value.flatMap((b) => qr(b.issues)).length && C({
        type: "error",
        message: q("errors.general.issues_found")
      }), G("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, bc = (y) => {
      r.inputShapes.value.length = 0, mt(() => {
        for (const v of y)
          v.t = r.inputStock.value?.[0]?.t ?? null, _n(v);
      });
    };
    Be(() => z.inputStock, (y) => {
      if (go(), Array.isArray(y) || console.warn("SmartCut - stock must be passed as an array"), !!y?.length) {
        r.inputStock.value.length = 0, Me.value.length || co(y.map((v) => v.toData()));
        for (const v of y)
          k({
            ...v.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", v), C({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? mt(() => {
            r.inputShapes.value.forEach((I) => {
              const b = I.material ? Me.value.find((_) => _.name === I.material) : null;
              if (b)
                b.thicknesses.includes(U({ v: I.t })) || (I.t = U({ v: b.thicknesses[0] }));
              else if (Me.value?.length === 1) {
                I.material = Me.value[0].name;
                const _ = Me.value[0];
                _.thicknesses.includes(U({ v: I.t })) || (I.t = U({ v: _.thicknesses[0] }));
              } else if (Me.value?.length > 1 && I.t) {
                const _ = Me.value.find((pe) => pe.thicknesses.some((xe) => U({ v: xe }) === U({ v: I.t })));
                _ ? I.material = _.name : (I.material = Me.value[0].name, I.t = U({ v: Me.value[0].thicknesses[0] }));
              } else Me.value?.length > 1 ? (I.material = Me.value[0].name, I.t = U({ v: Me.value[0].thicknesses[0] })) : !I.t && r.inputStock.value[0]?.t && (I.t = U({ v: r.inputStock.value[0].t }));
            });
          }) : z.inputType !== "formula" && mt(() => Rn());
          const v = f(r.inputSaw.value);
          v.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(v))), C({
            type: "error",
            message: q("errors.validation.stock_issue"),
            additional: v.map((I) => I.message)
          }));
        }
      }
    }, { immediate: !0 }), Be(r.inputShapes, (y) => {
      G("inputs-changed"), y.forEach((v) => {
        Fe.stockType === "linear" && (v.w = r.inputShapes.value[0]?.w);
        const I = Me.value.find((b) => b.name === v.material);
        I && (I.thicknesses.includes(U({ v: v.t })) || (v.t = U({ v: I.thicknesses[0] })));
      });
    }, { deep: !0 }), Be(() => ae.numberFormat, (y) => {
      u(y);
    }), Be(() => Fe, (y) => {
      r.inputSaw.value = new cl(y);
    }, { deep: !0 }), Ht(async () => {
      if (Q.value) return;
      Q.value = !0;
      const y = "4.0.34";
      Xu(
        y,
        "4.0.23",
        oi.value,
        "Checkout/lastMigrationVersion",
        pc
      ) && (oi.value = y);
      const b = new URL(window.location.href), _ = b.searchParams.toString(), pe = b.origin + b.pathname + (_ ? `?${_}` : "");
      ai.value !== pe && Mn(), ai.value = pe, ge.value = ae.locale, await ce.connect(), ce.emit("getUserFromDomain"), window.addEventListener("smartcut/load", mo), z.debug && G("log", [
        "ready...",
        "fields:",
        Ji.value.map((xe) => xe.name)
      ]);
    });
    const yc = () => {
      ce && ce.disconnect();
    };
    return hs(() => {
      window.removeEventListener("smartcut/load", mo), yc(), delete window.smartcutCheckout;
    }), e({
      init: Jl,
      clear: Mn,
      getAvailablePricingOptions: es,
      getExtrasPrice: dc,
      formatPrice: z.formatPrice,
      findExtrasPrice: z.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: ho,
      createAndAddInputShape: _n,
      initMaterialsThicknesses: uo
    }), (y, v) => {
      const I = bi("FontAwesomeIcon");
      return w(), A("div", Eb, [
        ze.value ? Y("", !0) : (w(), ke(sr, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        Ge.value?.machining && le.value ? (w(), ke(x(n), {
          key: 1,
          "input-shape": Ge.value,
          "onUpdate:inputShape": v[0] || (v[0] = (b) => Ge.value = b),
          translate: !0,
          options: _t,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": x(oa),
          "get-available-pricing-options": es,
          "format-price": t.formatPrice,
          onClose: sc
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : Y("", !0),
        ze.value ? (w(), A("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ce(["smartcut-content", { fullscreen: re.value }])
        }, [
          Yt.value && !t.readonly ? (w(), A("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: tt(ks.value),
            onClick: v[1] || (v[1] = (b) => rc())
          }, [
            Ee(I, { icon: ["fass", "expand"] }),
            as(" " + ee(x(q)("general.full_screen")), 1)
          ], 4)) : Y("", !0),
          oo.value ? (w(), A("a", {
            key: 1,
            id: "credit",
            style: Xl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, ee(x(Pu)(x(q)("general.powered_by"))), 1)) : Y("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: tt({ "grid-template-columns": Kl.value })
          }, [
            x(r).inputShapes.value.length ? (w(), A("div", Rb, [
              v[6] || (v[6] = O("div", { class: "cell id" }, null, -1)),
              (w(!0), A(Te, null, Ne(Ji.value, (b) => (w(), A("div", {
                key: b.name,
                class: Ce(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(b.name) || b.type === "boolean" }])
              }, ee(x(q)(b.label)), 3))), 128)),
              x(me) === "development" && da ? (w(), A("div", _b, " Info ")) : Y("", !0),
              v[7] || (v[7] = O("div", { class: "cell del" }, null, -1))
            ])) : Y("", !0),
            (w(!0), A(Te, null, Ne(j.value, (b, _) => (w(), A("div", {
              key: _,
              class: "row inputs"
            }, [
              O("div", Mb, [
                O("div", {
                  class: "id",
                  style: tt({
                    background: ae.colors.partA,
                    color: ae.colors.text
                  })
                }, ee(_ + 1), 5)
              ]),
              (w(!0), A(Te, null, Ne(Ji.value, (pe) => (w(), A("div", {
                key: pe.name,
                class: "cell"
              }, [
                b ? (w(), ke(Db, {
                  key: 0,
                  field: pe,
                  item: b,
                  index: _,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": ae.numberFormat,
                  "orientation-model": ae.orientationModel,
                  "stock-grain": x(c)(b),
                  "material-options": Me.value?.map((xe) => ({ label: xe.name, value: xe.name })) || [],
                  "thickness-options": pe.name === "t" ? oc(b) : [],
                  "banding-enabled": At.banding === _ ? b : null,
                  onUpdate: (xe) => Ql(b, pe.propertyPath || pe.fieldMap || pe.name, xe),
                  onValidation: v[2] || (v[2] = (xe, De) => ec()),
                  onOpenBanding: (xe) => Ps("banding", b),
                  onOpenMachining: (xe) => ic(b),
                  onOpenFinish: (xe) => Ps("finish", b),
                  onOpenPlaning: (xe) => Ps("planing", b)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : Y("", !0)
              ]))), 128)),
              x(me) === "development" && da ? (w(), A("div", Bb, [
                O("button", {
                  class: Ce(["c-btn", { selected: At.info === _ }]),
                  style: tt(ks.value),
                  type: "button",
                  onClick: (pe) => Ps("info", b)
                }, " i ", 14, jb)
              ])) : Y("", !0),
              O("div", Nb, [
                O("button", {
                  disabled: x(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${x(q)("actions.remove")} ${x(Cu)(x(q)("woodwork.part"))}`,
                  onClick: (pe) => x(p)(b.autoId)
                }, [
                  Ee(I, { icon: ["fass", "trash"] })
                ], 8, Vb)
              ]),
              Ee(x(s), {
                item: b,
                "num-columns": Qi.value
              }, null, 8, ["item", "num-columns"]),
              At.banding === _ && Oe.options.length > 0 && Dn.value ? (w(), ke(qs, {
                key: 1,
                shape: b,
                "shape-index": _,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Oe.keys,
                "all-options": Oe.options,
                pricing: Oe.pricing,
                labels: Oe.labels,
                locations: Oi.locations,
                "location-groups": Oi.groups,
                "user-friendly-field-map": x(zt),
                "part-columns": Qi.value,
                "format-price": t.formatPrice,
                "find-extras-price": z.findExtrasPrice,
                "get-price": En,
                "orientation-model": ae.orientationModel,
                "get-available-pricing-options": es,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              At.finish === _ && Ve.options.length > 0 && Dn.value ? (w(), ke(qs, {
                key: 2,
                shape: b,
                "shape-index": _,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ve.keys,
                "all-options": Ve.options,
                pricing: Ve.pricing,
                labels: Ve.labels,
                locations: Li.locations,
                "location-groups": Li.groups,
                "user-friendly-field-map": x(zt),
                "part-columns": Qi.value,
                "format-price": t.formatPrice,
                "find-extras-price": z.findExtrasPrice,
                "get-price": En,
                "orientation-model": ae.orientationModel,
                "get-available-pricing-options": es,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              At.planing === _ && We.options.length > 0 && Dn.value && !0 ? (w(), ke(qs, {
                key: 3,
                shape: b,
                "shape-index": _,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": We.keys,
                "all-options": We.options,
                pricing: We.pricing,
                labels: We.labels,
                locations: $i.locations,
                "location-groups": $i.groups,
                "user-friendly-field-map": x(zt),
                "part-columns": Qi.value,
                "format-price": t.formatPrice,
                "find-extras-price": z.findExtrasPrice,
                "get-price": En,
                "orientation-model": ae.orientationModel,
                "get-available-pricing-options": es,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              At.info === _ ? (w(), A("div", {
                key: 4,
                id: "shape-info",
                style: tt({ "grid-column-end": "span " + Qi.value })
              }, [
                O("div", null, ee(b?.banding), 1),
                O("div", null, ee(no.value?.banding?.options || "No options"), 1)
              ], 4)) : Y("", !0)
            ]))), 128))
          ], 4),
          O("div", Gb, [
            t.readonly ? Y("", !0) : (w(), A("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${x(q)("actions.add")} ${x(q)("woodwork.part")}`,
              style: tt(ks.value),
              onClick: v[3] || (v[3] = (b) => Rn())
            }, [
              Ee(I, { icon: ["fass", "plus-large"] }),
              as(" " + ee(`${x(q)("actions.add")} ${x(q)("woodwork.part")}`), 1)
            ], 12, qb)),
            O("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": x(q)("actions.calculate"),
              style: tt(ks.value),
              disabled: !x(r).inputStock.value?.length || Qe.value,
              onClick: v[4] || (v[4] = (b) => gc())
            }, [
              Ee(I, { icon: ["fass", "calculator"] }),
              as(ee(x(q)("actions.calculate")), 1)
            ], 12, zb),
            t.readonly ? Y("", !0) : (w(), A("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": x(q)("actions.clear"),
              onClick: v[5] || (v[5] = (b) => Mn())
            }, [
              Ee(I, { icon: ["fass", "trash"] })
            ], 8, Wb)),
            O("div", Hb, ee(x(l)) + ee(ae?.maxParts ? "/" + ae.maxParts : ""), 1)
          ]),
          ws.value && !t.readonly ? (w(), ke(x(a), {
            key: 2,
            ref: "import",
            "number-format": ae.numberFormat,
            "custom-fields": $n.value,
            "banding-options": Oe.options,
            "banding-labels": Oe.labels,
            "finish-options": Ve.options,
            "finish-labels": Ve.labels,
            onImport: bc
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : Y("", !0),
          li.value ? (w(), A("div", Ub, [
            vi.value ? (w(), A("div", Yb, ee(vi.value), 1)) : Y("", !0),
            O("pre", Kb, ee(Ln.value), 1)
          ])) : Y("", !0),
          (ae.enable.diagram ? Qe.value && !x(K).complete : Qe.value || x(K).complete) ? (w(), A("div", Zb, [
            Ee(sr, {
              size: 50,
              number: x(K).shapeCount,
              complete: x(K).complete,
              "show-number": ae.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : Y("", !0),
          fs(O("div", Xb, [
            x(m)?.saw?.stockType !== "roll" ? (w(), A("div", Jb, ee(x(m)?.stack?.number ? x(m).stack.number : 1), 1)) : Y("", !0),
            Ee(rm, {
              "element-id": "diagram",
              "number-format": ae.numberFormat,
              "decimal-places": ae.decimalPlaces,
              colors: ae.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [fn, ae.enable.diagram && x(K).complete]
          ]),
          ae.enable.diagram && x(M).length > 1 && x(K).complete ? (w(), ke(Ig, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": x(N),
            "stock-list": x(M),
            onShowStock: x(B)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : Y("", !0)
        ], 2)) : Y("", !0),
        x(me) === "development" && da ? (w(), A("div", Qb, [
          Ee(x(o), {
            data: [x(r)?.inputStock?.value[0]],
            paths: ["inputStock"]
          }, null, 8, ["data"]),
          v[8] || (v[8] = O("div", null, "Result data", -1)),
          Ee(x(o), {
            data: [ut.value?.stock?.[0]],
            paths: ["checkoutResult.stock"]
          }, null, 8, ["data"]),
          Ee(x(o), {
            data: [ut.value?.metadata],
            paths: ["checkoutResult.metadata"]
          }, null, 8, ["data"])
        ])) : Y("", !0)
      ]);
    };
  }
}), zS = /* @__PURE__ */ Tt(ey, [["__scopeId", "data-v-45b92d1f"]]), Wl = he(["select", "multiselect", "range", "boolean", "search"]), Hl = he(["asc", "desc"]), Ul = he(["grid", "list"]), ty = F({
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
Pi.merge(ty).describe("Stock option with filtering and display metadata");
const iy = F({
  field: h().describe("Property name to filter on"),
  type: Wl,
  label: h().describe("Display label"),
  custom: D().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: d().optional().describe("Minimum value for range filter"),
  max: d().optional().describe("Maximum value for range filter"),
  step: d().optional().describe("Step size for range filter"),
  // Select filter options
  options: J(F({
    label: h(),
    value: ve()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: D().default(!0).describe("Whether filter is visible"),
  collapsible: D().default(!0).describe("Whether filter panel is collapsible"),
  order: d().int().optional().describe("Display order")
}), sy = F({
  field: h().describe("Field to sort by"),
  order: Hl,
  label: h().optional().describe("Display label for sort option")
}), ny = F({
  // Filter configuration
  availableFilters: J(iy).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: J(h()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: sy.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Ul.default("grid").describe("Default display mode"),
  itemsPerPage: d().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: D().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: D().default(!0).describe("Allow multiple stock selection"),
  maxSelection: d().int().positive().optional().describe("Maximum number of stock items to select")
}), ay = F({
  field: h(),
  value: ve(),
  type: Wl
});
F({
  // Active filters
  activeFilters: J(ay).default([]).describe("Currently active filters"),
  // Search
  searchQuery: h().default("").describe("Current search query"),
  // Sort
  sortBy: h().default("cost").describe("Current sort field"),
  sortOrder: Hl.default("asc").describe("Current sort order"),
  // Display
  displayMode: Ul.default("grid").describe("Current display mode"),
  currentPage: d().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: J(h()).default([]).describe("IDs of selected stock items")
});
function oy() {
  return ny.parse({});
}
const ry = /* @__PURE__ */ Re({
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
        style: tt({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, ee(e.item.issues.filter((n) => n.type === "error").flatMap((n) => x(Yi)(n.message)).join(`
`)), 1)
      ], 4)) : Y("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (w(), A("div", {
        key: 1,
        class: "group warnings",
        style: tt({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, ee(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => x(Yi)(n.message)).join(`
`)), 1)
      ], 4)) : Y("", !0)
    ], 64));
  }
}), ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ry }, Symbol.toStringTag, { value: "Module" })), dt = {
  precisionFixed: hu,
  format: fu,
  select: ot,
  selectAll: yr,
  scaleLinear: $t,
  scaleSequential: os,
  axisTop: mr,
  axisBottom: Ks,
  axisRight: br,
  axisLeft: Zs,
  symbol: du,
  path: uu,
  arc: cu,
  symbolTriangle: lu,
  symbolSquare: ru
};
class cy {
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
    const c = (u, f, p, g, k) => {
      l[u] === "radius" ? o.arcTo(
        this.xScale(f),
        this.getYScale()(p),
        this.xScale(g),
        this.getYScale()(k),
        this.measurementScale(r[u])
      ) : l[u] === "bevel" ? o.lineTo(this.xScale(g), this.getYScale()(k)) : (o.lineTo(this.xScale(f), this.getYScale()(p)), o.lineTo(this.xScale(g), this.getYScale()(k)));
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
          if (!be(e.sides.a) || e.sides.a === !1) return;
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
          if (!be(e.sides.b) || e.sides.b === !1) return;
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
          if (!be(e.sides.c) || e.sides.c === !1) return;
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
          if (!be(e.sides.d) || e.sides.d === !1) return;
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
const uy = { id: "machining" }, dy = { class: "inputs" }, fy = {
  key: 0,
  class: "debug"
}, hy = {
  key: 1,
  class: "shape-name"
}, py = { class: "shape-dimensions" }, gy = {
  key: 2,
  class: "sides-wrapper"
}, my = { class: "menu" }, by = {
  key: 4,
  class: "button-wrapper"
}, yy = { class: "grid-table" }, vy = { class: "row table-heading" }, wy = {
  key: 0,
  class: "cell id"
}, Sy = {
  key: 0,
  class: "cell"
}, xy = { class: "id" }, ky = { class: "cell" }, Iy = ["onClick"], Py = {
  key: 6,
  class: "menu-prompt"
}, Cy = !1, Ty = /* @__PURE__ */ Re({
  __name: "Machining",
  props: /* @__PURE__ */ yo({
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
  emits: /* @__PURE__ */ yo(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = Bi(() => Promise.resolve().then(() => so)), s = t, n = e, a = "production", o = te(), r = X(() => zl(Z.value)), l = X(() => {
      if (!f.value?.length) return 0;
      if (Q.value === "banding") return 1;
      let re = Object.values(u.value).filter((ce) => ce.enabled).length;
      return re += 2, re;
    }), c = X(() => {
      if (!f.value.length || Q.value === "banding") return;
      const re = {
        id: "34px",
        del: "30px"
      }, ce = [];
      return f.value.forEach((Pe) => {
        const ae = u.value[Pe];
        ae.enabled && ce.push(ae.w ?? "1fr");
      }), ce.unshift(re.id), ce.push(re.del), ce.join(" ");
    }), u = X(() => !Q.value || Q.value === "banding" ? null : Qe[Q.value]), f = X(() => !Q.value || Q.value === "banding" ? [] : Object.keys(Qe[Q.value]).filter((re) => Qe[Q.value][re].enabled)), p = X(() => Q.value ? L() : []), g = X(() => {
      const re = Z.value?.machining?.corners?.map((ce) => ce?.isPresent?.() ? ce.getCorner() : null)?.filter((ce) => ce) ?? [];
      return [...ti, ...re];
    }), k = (re = !0) => {
      re ? oi.value = re : mt(() => oi.value = !1);
    }, R = () => {
      K(), oe(), C(), j();
    }, E = (re) => {
      if (Q.value === "corners")
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
    }, P = () => Q.value !== "banding", T = (re, ce = null) => {
      if (!re?.length) return [];
      let Pe = "None";
      ce === "depth" && (Pe = "Through");
      const ae = [{ label: Pe, value: null }];
      return re.forEach((Fe) => {
        const Ge = Fe.toString().charAt(0).toUpperCase() + Fe.toString().slice(1);
        ae.push({ label: Ge, value: Fe });
      }), ae;
    }, L = () => {
      if (!Q.value) return [];
      if (Q.value === "banding") return [];
      const re = Z.value.machining[Q.value];
      return Array.isArray(re) ? re : [re];
    };
    let S = null;
    const V = () => {
      if (!Z.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), S = new cy({
        HTMLElement: o.value,
        shape: Z.value,
        vueComponent: null
      }), S.init(), S.updateSize(), ai.value = !0;
    }, M = Cc(() => {
      ai.value && S && S.updateSize();
    }, 10);
    cr(o, () => {
      M();
    });
    const $ = () => {
      ut.value = ut.value === 0 ? 1 : 0, S.flip();
    }, H = () => {
      switch (Q.value) {
        case "holes":
          N();
          break;
        case "hingeHoles":
          m();
          break;
        case "corners":
          B();
          break;
      }
    }, N = () => {
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
    }, B = () => {
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
    }, j = () => {
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
      switch (Q.value) {
        case "holes":
          return Z.value.machining.holes.splice(re, 1);
        case "hingeHoles":
          return Z.value.machining.hingeHoles.splice(re, 1);
        case "corners":
          Z.value.machining.corners[re].size = null, Z.value.machining.corners[re].type = null;
          return;
      }
    }, z = () => {
      switch (Q.value) {
        case "holes":
          return K();
        case "hingeHoles":
          return oe();
        case "corners":
          return C();
      }
    }, G = () => {
      if (ze.value = [], !!s.options.banding.enabled) {
        k();
        for (const re in Z.value.banding)
          Z.value.banding[re] ? s.options.banding.enableTypes && s.options.banding.types?.length && (Z.value.banding[re] || ze.value.push({
            index: re,
            message: "Please select a type"
          })) : Z.value.banding[re] = "";
        k(!1);
      }
    }, le = (re) => {
      const ce = ze.value.filter((Pe) => Pe.index === re);
      return ce.length ? ce.map((Pe) => Pe.message) : [];
    }, me = (re) => {
      const ce = ze.value.filter((ae) => ae.index === re && ae?.fields), Pe = ce.flatMap((ae) => ae.fields);
      return ce.length ? Pe : [];
    }, ge = (re, ce) => {
      const Pe = me(re);
      return Pe?.length ? Pe.includes(ce) : !1;
    }, we = () => n("close"), Ae = (re) => re && typeof re.disabled == "function" ? re.disabled : !1, Z = Pc(t, "inputShape");
    if (!Z.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const ct = te(!1), ai = te(!1), oi = te(!1), ut = te(0), Q = te(null), ze = te([]), Qe = bt({
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
          options: s.options.holes.diameters?.length ? T(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof Z.value.t < "u" && U({ v: Z.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? T(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof Z.value.t < "u" && U({ v: Z.value.t }) > 0,
          required: !1,
          type: s.options.holes.depths?.length ? "select" : "unitDependent",
          output: s.options.holes.depths?.length ? "float" : void 0,
          options: s.options.holes.depths?.length ? T(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: q("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? T(s.options.holes.diameters) : void 0
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
          options: T(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: q("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? U({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? U({ v: s.options.corners.maxValue, o: s.options }) : U({ v: Z.value.shortSide, o: s.options }) / 2
        }
      }
    }), ri = bt({
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
      re.target === re.currentTarget && we();
    }, Yt = () => !(!Z?.value?.machining || !ct.value || oi.value);
    return Be(() => Z.value?.autoId, () => {
      Yt() && V();
    }), Be(() => Z.value?.id, () => {
      Yt() && V();
    }), Be(Q, (re) => {
      if (!Yt()) return;
      if (re === "banding") {
        k(), G(), k(!1);
        return;
      }
      if (!re) {
        ze.value = [];
        return;
      }
      k();
      const ce = Z.value.machining.validate(
        Z.value,
        re,
        ri?.[re]
      );
      ze.value = ce?.map((Pe, ae) => ({
        index: ae,
        message: Pe.message || "Validation error",
        fields: Pe.field || []
      })) || [], k(!1);
    }, { deep: !0, immediate: !0 }), Be(() => Z?.value?.machining?.holes, () => {
      if (!Yt()) return;
      k();
      const re = Z.value.machining.validate(
        Z.value,
        "holes",
        ri?.holes
      );
      ze.value = re?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], S.createHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), Be(() => Z?.value?.machining?.hingeHoles, () => {
      if (!Yt()) return;
      k();
      const re = Z.value.machining.validate(
        Z.value,
        "hingeHoles",
        ri?.hingeHoles
      );
      ze.value = re?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], S.createHingeHoles(), k(!1);
    }, { deep: !0, immediate: !0 }), Be(() => Z?.value?.machining?.corners, () => {
      if (!Yt()) return;
      k();
      const re = Z.value.machining.validate(
        Z.value,
        "corners",
        ri?.corners
      );
      ze.value = re?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], Z.value.machining.validate(Z.value, "holes"), Z.value.machining.validate(Z.value, "hingeHoles"), S.createShape(), S.createHoles(), S.createHingeHoles();
      for (const ce of Z.value.machining.corners)
        Z.value.banding && ce?.getCorner && (Z.value.banding[ce.getCorner()] = "");
      S.createBanding(), k(!1);
    }, { deep: !0, immediate: !0 }), Be(() => Z?.value?.banding, () => {
      Yt() && (G(), S.createBanding());
    }, { deep: !0, immediate: !0 }), Ht(() => {
      if (document.body.style.overflow = "hidden", !Z.value || !Z.value.l || !Z.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      mt(() => V()), ct.value = !0;
    }), hs(() => document.body.style.overflow = ""), (re, ce) => {
      const Pe = bi("FontAwesomeIcon");
      return w(), ke(ja, { to: "body" }, [
        O("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: ws
        }, [
          O("div", uy, [
            O("div", dy, [
              x(a) === "development" && Cy ? (w(), A("div", fy, [
                Ee(x(i), {
                  data: [Z.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : Y("", !0),
              O("button", {
                class: "c-btn close",
                type: "button",
                onClick: ce[0] || (ce[0] = (ae) => we())
              }, "×"),
              Z.value?.name ? (w(), A("div", hy, ee(Z.value.name), 1)) : Y("", !0),
              O("div", py, ee(Z.value?.l) + " x " + ee(Z.value?.w) + " " + ee(Z.value?.t ? "x " + Z.value?.t : null), 1),
              t.options.faces.enabled ? (w(), A("div", gy, [
                O("div", {
                  ref: "sides",
                  class: Ce(["sides", { flipped: ut.value === 1 }]),
                  onClick: $
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
              O("div", my, [
                t.options.holes.enabled ? (w(), A("div", {
                  key: 0,
                  class: Ce({ selected: Q.value === "holes" }),
                  onClick: ce[1] || (ce[1] = (ae) => Q.value = "holes")
                }, " Holes ", 2)) : Y("", !0),
                t.options.hingeHoles.enabled ? (w(), A("div", {
                  key: 1,
                  class: Ce({ selected: Q.value === "hingeHoles" }),
                  onClick: ce[2] || (ce[2] = (ae) => Q.value = "hingeHoles")
                }, " Hinge holes ", 2)) : Y("", !0),
                t.options.corners.enabled ? (w(), A("div", {
                  key: 2,
                  class: Ce({ selected: Q.value === "corners" }),
                  onClick: ce[3] || (ce[3] = (ae) => Q.value = "corners")
                }, " Corners ", 2)) : Y("", !0),
                t.options.banding.enabled ? (w(), A("div", {
                  key: 3,
                  class: Ce({ selected: Q.value === "banding" }),
                  onClick: ce[4] || (ce[4] = (ae) => Q.value = "banding")
                }, " Banding ", 2)) : Y("", !0)
              ]),
              Q.value === "holes" || Q.value === "hingeHoles" || Q.value && Q.value !== "banding" ? (w(), A("div", by, [
                Q.value === "holes" || Q.value === "hingeHoles" || Q.value === "corners" ? (w(), A("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: H
                }, " Create ")) : Y("", !0),
                Q.value && Q.value !== "banding" ? (w(), A("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: z
                }, " Delete all ")) : Y("", !0)
              ])) : Y("", !0),
              O("div", yy, [
                Q.value === "banding" && Z.value ? (w(), ke(qs, {
                  key: 0,
                  shape: Z.value,
                  "onUpdate:shape": ce[5] || (ce[5] = (ae) => Z.value = ae),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": g.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": x(zt),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : Y("", !0)
              ]),
              Q.value !== "banding" && p.value.length ? (w(), A("div", {
                key: 5,
                class: Ce(["grid-table", Q.value]),
                style: tt({ "grid-template-columns": c.value })
              }, [
                O("div", vy, [
                  P() ? (w(), A("div", wy)) : Y("", !0),
                  (w(!0), A(Te, null, Ne(u.value, (ae, Fe) => fs((w(), A("div", {
                    key: Fe,
                    class: "cell"
                  }, ee(ae.label ?? Fe), 1)), [
                    [fn, ae.enabled]
                  ])), 128)),
                  ce[8] || (ce[8] = O("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), A(Te, null, Ne(p.value, (ae, Fe) => (w(), A("div", {
                  key: Fe,
                  class: "row"
                }, [
                  P() ? (w(), A("div", Sy, [
                    O("div", xy, ee(E(Fe)), 1)
                  ])) : Y("", !0),
                  (w(!0), A(Te, null, Ne(f.value, (Ge, li) => (w(), A("div", {
                    key: li,
                    class: "cell"
                  }, [
                    Ee(Ci, {
                      type: u.value[Ge].type,
                      id: Ge + "-" + li,
                      warning: ge(Fe, Ge),
                      "enable-label": !1,
                      placeholder: u.value[Ge].label ?? Ge,
                      disabled: Ae(u.value[Ge]),
                      value: x(hi)(ae, Ge),
                      output: u.value[Ge].output,
                      options: u.value[Ge].options,
                      "onUpdate:value": (vi) => x(_i)(ae, Ge, vi)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", ky, [
                    O("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (Ge) => W(Fe)
                    }, [
                      Ee(Pe, { icon: ["fass", "trash"] })
                    ], 8, Iy)
                  ]),
                  (w(!0), A(Te, null, Ne(le(Fe), (Ge, li) => (w(), A("div", {
                    key: li,
                    class: "group validation",
                    style: tt({ "grid-column-end": "span " + l.value })
                  }, ee(Ge), 5))), 128))
                ]))), 128))
              ], 6)) : Q.value ? Y("", !0) : (w(), A("div", Py, "Please select from the menu above"))
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
}), Ay = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ty }, Symbol.toStringTag, { value: "Module" })), Oy = {
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
      files: Tc([])
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
function Ly(t, e, i, s, n, a) {
  return w(), A("div", {
    id: "drop",
    class: Ce({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = ur((...o) => a.onDrop && a.onDrop(...o), ["prevent"]))
  }, [
    O("div", null, ee(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const $y = /* @__PURE__ */ Tt(Oy, [["render", Ly]]), Fy = { id: "import-file" }, Dy = /* @__PURE__ */ Re({
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
    ], k = X(() => {
      const C = {};
      return n.value.forEach((j, W) => {
        C[W] = {};
        for (const [z, G] of Object.entries(j)) {
          if (!g.includes(z)) continue;
          const le = P(z, G);
          (le === !0 || le === !1) && (C[W][z] = le);
        }
      }), C;
    }), R = X(() => i.customFields.map((C) => C.label)), E = (C, j) => {
      if (j) {
        const W = Object.keys(j), z = [[]];
        W.forEach((le) => {
          const me = j[le], ge = [];
          z.forEach((we) => {
            me.forEach((Ae) => ge.push([...we, Ae]));
          }), z.splice(0, z.length, ...ge);
        });
        const G = /* @__PURE__ */ new Set();
        z.forEach((le) => G.add(le.join("|").toLowerCase())), C === "banding" ? f.value = G : p.value = G;
      }
    }, P = (C, j) => {
      if (j === "???") return !0;
      function W(G) {
        return G ? (G = G?.trim()?.toLowerCase(), G === "l" || G === "w") : !0;
      }
      const z = {
        banding: (G) => T(G, f.value, "banding"),
        finish: (G) => T(G, p.value, "finish"),
        orientationLock: W
      };
      return C in z ? z[C](j) : null;
    }, T = (C, j, W) => {
      if (C = m(C), !C) return !0;
      const z = C.split(","), G = z.every((le) => !le || j.has(le.toLowerCase()));
      if (!G) {
        const le = z.filter((me) => !j.has(me.toLowerCase()));
        console.log(`Valid ${W} choices...`), console.table(Array.from(j)), console.log(`The following ${W} choices are invalid`, le);
      }
      return G;
    }, L = (C, j) => {
      const W = {
        bandingOptions: (z) => S(z, i.bandingOptions, i.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (z) => S(z, i.finishOptions, i.finishLabels, ["a", "b"])
      };
      return C in W ? W[C](j) : null;
    }, S = (C, j, W, z) => {
      if (C = m(C), !C)
        return z.reduce((me, ge) => ({ ...me, [ge]: {} }), {});
      const G = C.split(",").map((me) => me.toLowerCase()), le = {};
      return z.forEach((me, ge) => {
        le[me] = {}, Object.keys(j).forEach((we, Ae) => {
          le[me][W[Ae]] = G[ge]?.split("|")[Ae] || "";
        });
      }), le;
    }, V = () => n.value.map((C, j) => ({
      l: i.numberFormat === "decimal" ? Bs(C.l) : C.l,
      w: i.numberFormat === "decimal" ? Bs(C.w) : C.w,
      t: i.numberFormat === "decimal" ? Bs(C.t) : C.t,
      q: C.q,
      orientationLock: C.orientationLock,
      name: C.name,
      material: C.material,
      bandingOptions: k.value[j].banding ? L("bandingOptions", C.banding) : null,
      finishOptions: k.value[j].finish ? L("finishOptions", C.finish) : null,
      numberFormat: i.numberFormat,
      customData: K(C)
    })), M = (C) => {
      const j = C?.[0]?.data;
      j && Jc.parse(j, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (W) => $(W),
        error: () => s("error")
      });
    }, $ = (C) => {
      a.value = C.data.filter((j) => j.some((W) => W)), o.value = a.value[0], l.value = {};
      for (let j = o.value.length; j--; ) {
        const W = o.value[j], z = H(W);
        z ? l.value[j] = z : (l.value[j] = null, R.value.includes(W) && (l.value[j] = "customData." + i.customFields.find((G) => G.label === W).id));
      }
      N(), a.value.shift(), B(), oe();
    }, H = (C) => {
      const j = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", q("l"), q("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", q("w"), q("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", q("t"), q("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", q("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", q("quantity"), q("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", q("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", q("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", q("banding")],
        finish: ["finish", "paint"]
      }, W = Object.entries(j).reduce(
        (z, [G, le]) => (le.some((me) => C && C.toLowerCase() === me) && z.push(G), z),
        []
      );
      return W.length > 1 ? null : W[0];
    }, N = () => {
      u.value = !1, r.value = Object.values(l.value).map((j) => !j || j === "N" ? null : g.includes(j) ? j : (u.value = !0, null));
      const C = r.value.filter((j, W) => r.value.indexOf(j) !== W);
      c.value = C.map((j) => r.value.reduce(
        (W, z, G) => (z && z === j && W.push(G), W),
        []
      ));
    }, m = (C) => C && C.replace(/\s*,\s*/g, ","), B = () => {
      const C = a.value.map((j) => {
        const W = {};
        return o.value.forEach((z, G) => {
          if (c.value.flat().includes(G))
            return W[l.value[G]] = "???";
          W[l.value[G]] = j[G];
        }), W;
      });
      n.value = C;
    }, K = (C) => {
      let j = {};
      for (let W in C)
        if (W.startsWith("customData.")) {
          let z = W.slice(11);
          j[z] = C[W];
        }
      return j;
    }, oe = () => {
      const C = V();
      C?.length && s("import", C);
    };
    return Ht(() => {
      E("banding", i.bandingOptions), E("finish", i.finishOptions);
    }), (C, j) => (w(), A("div", Fy, [
      Ee($y, {
        label: x(q)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: M
      }, null, 8, ["label"])
    ]));
  }
}), Ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Dy }, Symbol.toStringTag, { value: "Module" })), Ry = {
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
}, _y = { class: "smartcut-object-viewer" }, My = ["onClick"], By = { class: "toggle-icon" }, jy = { class: "path-label" }, Ny = {
  key: 0,
  class: "object-properties"
}, Vy = {
  key: 0,
  class: "key"
}, Gy = {
  key: 1,
  class: "null-value"
}, qy = { key: 2 };
function zy(t, e, i, s, n, a) {
  const o = bi("ObjectViewer", !0);
  return w(), A("div", _y, [
    (w(!0), A(Te, null, Ne(i.data, (r, l) => (w(), A("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (c) => a.toggle(l)
      }, [
        O("div", By, ee(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", jy, ee(i.paths[l] || l), 1)
      ], 8, My),
      n.expanded[l] ? (w(), A("div", Ny, [
        (w(!0), A(Te, null, Ne(r, (c, u) => (w(), A("div", {
          key: u,
          class: "property-item"
        }, [
          !a.isObjectOrArray(c) || c === null || Array.isArray(c) ? (w(), A("div", Vy, ee(u) + ": ", 1)) : Y("", !0),
          O("div", {
            class: Ce(["value", a.getValueType(c)])
          }, [
            a.isObjectOrArray(c) && c !== null ? (w(), ke(o, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: a.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (w(), A("span", Gy, "null")) : (w(), A("span", qy, ee(a.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : Y("", !0)
    ]))), 128))
  ]);
}
const Wy = /* @__PURE__ */ Tt(Ry, [["render", zy]]), so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Wy }, Symbol.toStringTag, { value: "Module" })), Hy = { class: "stock-filter-search" }, Uy = { class: "search-input-wrapper" }, Yy = ["placeholder"], Ky = /* @__PURE__ */ Re({
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
    Be(() => i.modelValue, (l) => {
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
    return (l, c) => (w(), A("div", Hy, [
      O("div", Uy, [
        fs(O("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: o
        }, null, 40, Yy), [
          [Ac, n.value]
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
}), Zy = /* @__PURE__ */ Tt(Ky, [["__scopeId", "data-v-45127fff"]]), Xy = { class: "filter-panel-header" }, Jy = { class: "filter-panel-title" }, Qy = { class: "filter-panel-content" }, ev = {
  key: 0,
  class: "filter-summary"
}, tv = { class: "filter-summary__count" }, iv = { class: "filter-groups" }, sv = { class: "filter-group__header" }, nv = { class: "filter-group__label" }, av = { class: "filter-group__content" }, ov = {
  key: 0,
  class: "filter-select"
}, rv = ["checked", "onChange"], lv = ["value", "onChange"], cv = { value: "" }, uv = ["value"], dv = {
  key: 1,
  class: "filter-range"
}, fv = { class: "filter-range__inputs" }, hv = ["value", "min", "max", "step", "onInput"], pv = ["value", "min", "max", "step", "onInput"], gv = {
  key: 2,
  class: "filter-boolean"
}, mv = { class: "filter-checkbox" }, bv = ["checked", "onChange"], yv = /* @__PURE__ */ Re({
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
    function l(T) {
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
      }[T.field] || T.label;
    }
    function c(T) {
      return T.options?.length ? T.options : i.getUniqueValues(T.field).map((S) => T.field === "color" && typeof S == "object" && S !== null ? "name" in S && S.name ? {
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
    function u(T) {
      return i.activeFilters.find((S) => S.field === T)?.value;
    }
    function f(T, L) {
      const S = u(T);
      return Array.isArray(S) ? T === "color" && typeof L == "object" && L !== null && "hex" in L ? S.some(
        (V) => typeof V == "object" && V !== null && "hex" in V && V.hex === L.hex
      ) : S.includes(L) : T === "color" && typeof L == "object" && L !== null && "hex" in L ? typeof S == "object" && S !== null && "hex" in S && S.hex === L.hex : S === L;
    }
    function p(T, L) {
      const V = L.target.value;
      V === "" ? s("remove-filter", T) : s("apply-filter", T, V, "select");
    }
    function g(T, L, S) {
      const V = S.target, M = u(T) || [], $ = Array.isArray(M) ? [...M] : [];
      if (V.checked)
        $.includes(L) || $.push(L);
      else {
        const H = $.indexOf(L);
        H !== -1 && $.splice(H, 1);
      }
      $.length === 0 ? s("remove-filter", T) : s("apply-filter", T, $, "multiselect");
    }
    function k(T, L) {
      if (a.value[T]?.[L] !== void 0)
        return a.value[T][L];
      const S = i.activeFilters.find((V) => V.field === T);
      if (S?.value && typeof S.value == "object")
        return S.value[L];
    }
    function R(T, L, S) {
      const V = S.target, M = V.value ? Number(V.value) : void 0;
      a.value[T] || (a.value[T] = {}), a.value[T][L] = M;
      const $ = a.value[T].min, H = a.value[T].max;
      $ !== void 0 || H !== void 0 ? s("apply-filter", T, { min: $, max: H }, "range") : s("remove-filter", T);
    }
    function E(T, L) {
      L.target.checked ? s("apply-filter", T, !0, "boolean") : s("remove-filter", T);
    }
    function P() {
      a.value = {}, s("clear-filters");
    }
    return (T, L) => (w(), A("div", {
      class: Ce(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      O("div", Xy, [
        O("h3", Jy, ee(x(q)("stockFilter.filters")), 1),
        O("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: r
        }, ee(n.value ? "−" : "+"), 1)
      ]),
      Ee(Oc, { name: "filter-panel-content" }, {
        default: Ti(() => [
          fs(O("div", Qy, [
            o.value > 0 ? (w(), A("div", ev, [
              O("span", tv, ee(x(q)("stockFilter.active_filters", [o.value])), 1),
              O("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: P
              }, ee(x(q)("stockFilter.clear_all")), 1)
            ])) : Y("", !0),
            O("div", iv, [
              (w(!0), A(Te, null, Ne(t.filterConfigs, (S) => (w(), A("div", {
                key: S.field,
                class: "filter-group"
              }, [
                O("div", sv, [
                  O("label", nv, ee(l(S)), 1)
                ]),
                O("div", av, [
                  S.type === "select" || S.type === "multiselect" ? (w(), A("div", ov, [
                    S.type === "multiselect" ? (w(!0), A(Te, { key: 0 }, Ne(c(S), (V) => (w(), A("label", {
                      key: V.value,
                      class: "filter-checkbox"
                    }, [
                      O("input", {
                        checked: f(S.field, V.value),
                        type: "checkbox",
                        onChange: (M) => g(S.field, V.value, M)
                      }, null, 40, rv),
                      O("span", null, ee(V.label), 1)
                    ]))), 128)) : (w(), A("select", {
                      key: 1,
                      value: u(S.field),
                      class: "filter-select-input",
                      onChange: (V) => p(S.field, V)
                    }, [
                      O("option", cv, ee(x(q)("stockFilter.all")), 1),
                      (w(!0), A(Te, null, Ne(c(S), (V) => (w(), A("option", {
                        key: V.value,
                        value: V.value
                      }, ee(V.label), 9, uv))), 128))
                    ], 40, lv))
                  ])) : S.type === "range" ? (w(), A("div", dv, [
                    O("div", fv, [
                      O("input", {
                        value: k(S.field, "min"),
                        min: S.min,
                        max: S.max,
                        step: S.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (V) => R(S.field, "min", V)
                      }, null, 40, hv),
                      L[0] || (L[0] = O("span", { class: "filter-range__separator" }, "–", -1)),
                      O("input", {
                        value: k(S.field, "max"),
                        min: S.min,
                        max: S.max,
                        step: S.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (V) => R(S.field, "max", V)
                      }, null, 40, pv)
                    ])
                  ])) : S.type === "boolean" ? (w(), A("div", gv, [
                    O("label", mv, [
                      O("input", {
                        checked: u(S.field) === !0,
                        type: "checkbox",
                        onChange: (V) => E(S.field, V)
                      }, null, 40, bv),
                      O("span", null, ee(S.label), 1)
                    ])
                  ])) : Y("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [fn, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), vv = /* @__PURE__ */ Tt(yv, [["__scopeId", "data-v-096696f3"]]), wv = { class: "stock-filter-sort" }, Sv = { class: "sort-controls" }, xv = { class: "sort-label" }, kv = ["value"], Iv = ["value"], Pv = ["title"], Cv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Tv = {
  key: 0,
  d: "M8 3l4 5H4z"
}, Av = {
  key: 1,
  d: "M8 13l4-5H4z"
}, Ov = /* @__PURE__ */ Re({
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
    return (l, c) => (w(), A("div", wv, [
      O("div", Sv, [
        O("label", xv, ee(x(q)("stockFilter.sort_by")) + ":", 1),
        O("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: o
        }, [
          (w(!0), A(Te, null, Ne(x(n), (u) => (w(), A("option", {
            key: u.value,
            value: u.value
          }, ee(u.label), 9, Iv))), 128))
        ], 40, kv),
        O("button", {
          type: "button",
          class: Ce(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? x(q)("options.by_dimensions") : x(q)("options.by_dimensions"),
          onClick: r
        }, [
          (w(), A("svg", Cv, [
            t.sortOrder === "asc" ? (w(), A("path", Tv)) : (w(), A("path", Av))
          ]))
        ], 10, Pv)
      ])
    ]));
  }
}), Lv = /* @__PURE__ */ Tt(Ov, [["__scopeId", "data-v-bb32c593"]]), $v = { class: "stock-filter-results" }, Fv = { class: "results-header" }, Dv = { class: "results-info" }, Ev = { class: "results-count" }, Rv = { class: "results-controls" }, _v = { class: "display-mode-toggle" }, Mv = ["title"], Bv = ["title"], jv = {
  key: 0,
  class: "results-loading"
}, Nv = {
  key: 1,
  class: "results-empty"
}, Vv = { class: "empty-message" }, Gv = {
  key: 3,
  class: "results-pagination"
}, qv = ["disabled"], zv = { class: "pagination-pages" }, Wv = ["onClick"], Hv = ["disabled"], Uv = /* @__PURE__ */ Re({
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
    return (s, n) => (w(), A("div", $v, [
      O("div", Fv, [
        O("div", Dv, [
          O("span", Ev, ee(t.totalResults) + " " + ee(t.totalResults === 1 ? x(q)("stockFilter.result_one") : x(q)("stockFilter.result_other")), 1)
        ]),
        O("div", Rv, [
          O("div", _v, [
            O("button", {
              type: "button",
              class: Ce(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: x(q)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (a) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              dr('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-702dc044><rect x="1" y="1" width="6" height="6" data-v-702dc044></rect><rect x="9" y="1" width="6" height="6" data-v-702dc044></rect><rect x="1" y="9" width="6" height="6" data-v-702dc044></rect><rect x="9" y="9" width="6" height="6" data-v-702dc044></rect></svg>', 1)
            ])], 10, Mv),
            O("button", {
              type: "button",
              class: Ce(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: x(q)("stockFilter.list_view"),
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
            ])], 10, Bv)
          ])
        ])
      ]),
      t.loading ? (w(), A("div", jv, [
        n[7] || (n[7] = O("div", { class: "spinner" }, null, -1)),
        O("p", null, ee(x(q)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (w(), A("div", Nv, [
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
        O("p", Vv, ee(x(q)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (w(), A("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (a) => s.$emit("clear-filters"))
        }, ee(x(q)("stockFilter.clear_filters")), 1)) : Y("", !0)
      ])) : (w(), A("div", {
        key: 2,
        class: Ce(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        Hs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (w(), A("div", Gv, [
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (a) => s.$emit("go-to-page", t.currentPage - 1))
        }, ee(x(q)("pagination.previous")), 9, qv),
        O("div", zv, [
          (w(!0), A(Te, null, Ne(i.value, (a) => (w(), A("button", {
            key: a,
            type: "button",
            class: Ce(["pagination-page", { "pagination-page--active": a === t.currentPage }]),
            onClick: (o) => s.$emit("go-to-page", a)
          }, ee(a), 11, Wv))), 128))
        ]),
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (a) => s.$emit("go-to-page", t.currentPage + 1))
        }, ee(x(q)("pagination.next")), 9, Hv)
      ])) : Y("", !0)
    ]));
  }
}), Yv = /* @__PURE__ */ Tt(Uv, [["__scopeId", "data-v-702dc044"]]), Kv = {
  key: 0,
  class: "stock-filter-card__image"
}, Zv = ["src", "alt"], Xv = { class: "stock-filter-card__content" }, Jv = { class: "stock-filter-card__title" }, Qv = { class: "stock-filter-card__specs" }, ew = { class: "spec" }, tw = { class: "spec__label" }, iw = { class: "spec__value" }, sw = { class: "spec" }, nw = { class: "spec__label" }, aw = { class: "spec__value" }, ow = {
  key: 0,
  class: "spec"
}, rw = { class: "spec__label" }, lw = { class: "spec__value spec__value--color" }, cw = {
  key: 1,
  class: "spec"
}, uw = { class: "spec__label" }, dw = { class: "spec__value" }, fw = {
  key: 0,
  class: "stock-filter-card__description"
}, hw = { class: "stock-filter-card__footer" }, pw = {
  key: 0,
  class: "stock-filter-card__price"
}, gw = { class: "price__label" }, mw = { class: "price__value" }, bw = ["disabled"], yw = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, vw = /* @__PURE__ */ Re({
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
      const g = f.replace("#", ""), k = parseInt(g, 16), R = Math.round(2.55 * p), E = (k >> 16) + R, P = (k >> 8 & 255) + R, T = (k & 255) + R;
      return `#${(16777216 + (E < 255 ? E < 1 ? 0 : E : 255) * 65536 + (P < 255 ? P < 1 ? 0 : P : 255) * 256 + (T < 255 ? T < 1 ? 0 : T : 255)).toString(16).slice(1)}`;
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
      t.stock.imageUrl ? (w(), A("div", Kv, [
        O("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, Zv)
      ])) : Y("", !0),
      O("div", Xv, [
        O("h3", Jv, ee(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        O("div", Qv, [
          O("div", ew, [
            O("span", tw, ee(x(q)("woodwork.material")) + ":", 1),
            O("span", iw, ee(t.stock.material || x(q)("general.na")), 1)
          ]),
          O("div", sw, [
            O("span", nw, ee(x(q)("stockFilter.dimensions")) + ":", 1),
            O("span", aw, ee(t.stock.l) + " × " + ee(t.stock.w) + ee(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (w(), A("div", ow, [
            O("span", rw, ee(x(q)("fields.color")) + ":", 1),
            O("span", lw, [
              O("span", {
                class: "color-swatch",
                style: tt({ backgroundColor: o.value })
              }, null, 4),
              as(" " + ee(r.value), 1)
            ])
          ])) : Y("", !0),
          t.stock.weight ? (w(), A("div", cw, [
            O("span", uw, ee(x(q)("fields.weight")) + ":", 1),
            O("span", dw, ee(t.stock.weight) + " kg", 1)
          ])) : Y("", !0)
        ]),
        t.stock.description ? (w(), A("div", fw, ee(t.stock.description), 1)) : Y("", !0),
        O("div", hw, [
          t.stock.cost ? (w(), A("div", pw, [
            O("span", gw, ee(x(q)("stockFilter.price")) + ":", 1),
            O("span", mw, ee(a.value), 1)
          ])) : Y("", !0),
          O("button", {
            type: "button",
            class: Ce(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: tt(l.value),
            disabled: !n.value,
            onClick: u
          }, ee(t.isSelected ? x(q)("stockFilter.remove") : n.value ? x(q)("stockFilter.select") : x(q)("stockFilter.unavailable")), 15, bw)
        ]),
        t.stock.leadTime ? (w(), A("div", yw, ee(x(q)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : Y("", !0)
      ])
    ], 2));
  }
}), ww = /* @__PURE__ */ Tt(vw, [["__scopeId", "data-v-9056cd2a"]]), Sw = { class: "stock-filter" }, xw = /* @__PURE__ */ Re({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => oy()
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
      filteredStock: k,
      paginatedStock: R,
      selectedStock: E,
      totalPages: P,
      applyFilter: T,
      removeFilter: L,
      clearFilters: S,
      goToPage: V,
      toggleStockSelection: M,
      isStockSelected: $,
      clearSelection: H,
      createInputStock: N,
      getUniqueValues: m,
      getFieldRange: B
    } = ou({
      stockOptions: a,
      config: o,
      numberFormat: r
    }), K = X(() => s.config.availableFilters.filter((j) => {
      const W = m(j.field);
      return W.length > 0 && W.some((z) => z != null);
    }));
    X(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": oe(s.colors.button, -8)
    }));
    function oe(j, W) {
      const z = j.replace("#", ""), G = parseInt(z, 16), le = Math.round(2.55 * W), me = (G >> 16) + le, ge = (G >> 8 & 255) + le, we = (G & 255) + le;
      return `#${(16777216 + (me < 255 ? me < 1 ? 0 : me : 255) * 65536 + (ge < 255 ? ge < 1 ? 0 : ge : 255) * 256 + (we < 255 ? we < 1 ? 0 : we : 255)).toString(16).slice(1)}`;
    }
    function C(j) {
      const W = $(j);
      if (M(j), W) {
        const z = N(j);
        n("stock-removed", z);
      } else {
        const z = N(j);
        n("stock-added", [z]);
      }
    }
    return e({
      applyFilter: T,
      removeFilter: L,
      clearFilters: S,
      clearSelection: H,
      selectedStock: E,
      filteredStock: k,
      getUniqueValues: m,
      getFieldRange: B
    }), (j, W) => (w(), A("div", Sw, [
      t.config.enableSearch ? (w(), ke(Zy, {
        key: 0,
        modelValue: x(c),
        "onUpdate:modelValue": W[0] || (W[0] = (z) => Nn(c) ? c.value = z : null)
      }, null, 8, ["modelValue"])) : Y("", !0),
      K.value.length > 0 ? (w(), ke(vv, {
        key: 1,
        "filter-configs": K.value,
        "active-filters": x(l),
        "get-unique-values": x(m),
        "get-field-range": x(B),
        onApplyFilter: x(T),
        onRemoveFilter: x(L),
        onClearFilters: x(S)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : Y("", !0),
      t.config.sortOptions.length > 0 ? (w(), ke(Lv, {
        key: 2,
        "sort-by": x(u),
        "onUpdate:sortBy": W[1] || (W[1] = (z) => Nn(u) ? u.value = z : null),
        "sort-order": x(f),
        "onUpdate:sortOrder": W[2] || (W[2] = (z) => Nn(f) ? f.value = z : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : Y("", !0),
      Ee(Yv, {
        "total-results": x(R).length,
        "display-mode": x(p),
        loading: t.loading,
        "has-active-filters": x(l).length > 0,
        "current-page": x(g),
        "total-pages": x(P),
        "onUpdate:displayMode": W[3] || (W[3] = (z) => p.value = z),
        onClearFilters: x(S),
        onGoToPage: x(V)
      }, {
        default: Ti(() => [
          (w(!0), A(Te, null, Ne(x(R), (z) => (w(), ke(ww, {
            key: z.id || `${z.material}-${z.l}-${z.w}-${z.t}`,
            stock: z,
            "is-selected": x($)(z),
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
}), kw = /* @__PURE__ */ Tt(xw, [["__scopeId", "data-v-7b1c1d8d"]]), WS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: kw }, Symbol.toStringTag, { value: "Module" }));
class fi extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class rr {
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
          const E = R.split(".")[1];
          g.set(R, s[E]);
        } else
          g.set(R, r(R));
      const k = this.evaluateFormulaWithDeps(f.formula, g, s);
      return a.set(l, k), o.delete(l), k;
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
const Iw = {
  key: 0,
  class: "debug"
}, Pw = { id: "formula-pricing" }, Cw = {
  key: 1,
  class: "extras"
}, Tw = { class: "heading" }, Aw = { id: "hardware-total" }, Ow = { class: "heading panels" }, Lw = !1, $w = /* @__PURE__ */ Re({
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
    const i = Bi(() => Promise.resolve().then(() => so)), s = t, n = e, a = Lc("calculator"), o = X(() => a()), r = te("production");
    let l = null;
    const c = te(null), u = te([]), f = te(!1), p = te(""), g = X(() => {
      if (!f.value || !u.value.length || u.value.every(($) => $.value === null)) return null;
      const M = L();
      return mt(() => n("panel-result", M)), M;
    }), k = X(() => {
      if (!o.value || !f.value || !u.value.length || u.value.every(($) => $.value === null)) return;
      const M = S();
      return mt(() => n("hardware-result", M, R.value)), M;
    }), R = X(() => {
      if (k.value)
        return Object.values(k.value).reduce((M, $) => M + $.totalCost, 0);
    });
    Be(g, (M) => {
      if (!f.value || !M || !o.value || !o.value?.inputShapes) return;
      const $ = (m) => m?.name ? m.name.toLowerCase() : "", H = new Map(
        o.value.inputShapes.map((m) => [$(m), m])
      ), N = /* @__PURE__ */ new Set();
      for (const m of Object.values(g.value)) {
        if (!m.name) continue;
        const B = $(m), K = H.get(B), oe = {
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
          for (const j of ["banding", "finish"])
            o.value.initExtrasOptions(K, j);
        } else
          o.value.inputShapes.push(C);
        N.add(B);
      }
      o.value.inputShapes = o.value.inputShapes.filter(
        (m) => N.has($(m))
      );
    }, { immediate: !1 }), Ht(() => V());
    const E = (M) => {
      s.debug && console.log(M);
    }, P = () => {
      u.value = Object.values(c.value.inputs).map((M) => ({
        value: M.default ?? null
      })), console.log(u.value);
    }, T = (M, $) => {
      u.value[M] && (u.value[M].value = $);
    }, L = () => {
      try {
        return l.calculatePanelsFromFields(u.value);
      } catch (M) {
        return o.value.inputShapes.length = 0, console.error(M), null;
      }
    }, S = () => {
      try {
        return l.calculateHardwareFromFields(u.value);
      } catch (M) {
        return console.error(M), null;
      }
    }, V = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (E(`SmartCut - Formula calculator init from url: ${s.url}`), l = new rr({ url: s.url }), c.value = await l.getSpec()) : s.spec && (E("SmartCut - Formula calculator init with JSON"), l = new rr({ spec: s.spec }), c.value = await l.getSpec()), P(), f.value = !0;
    };
    return (M, $) => (w(), A(Te, null, [
      r.value === "development" && Lw ? (w(), A("div", Iw, [
        $[1] || ($[1] = O("div", null, "Developer information", -1)),
        Ee(x(i), {
          data: [g.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : Y("", !0),
      O("div", Pw, [
        c.value?.projectName ? (w(), ke(Ci, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: p.value,
          "onUpdate:value": $[0] || ($[0] = (H) => p.value = H)
        }, null, 8, ["value"])) : Y("", !0),
        (w(!0), A(Te, null, Ne(c.value?.inputs, (H, N, m) => (w(), ke(Ci, {
          id: "formula-field-" + m,
          key: m,
          type: H.type,
          label: H.label,
          placeholder: H.label,
          min: H.min ?? 0,
          max: H.max ?? null,
          default: H.default ?? 0,
          value: u.value[m]?.value,
          "onUpdate:value": (B) => T(m, B)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        k.value ? (w(), A("div", Cw, [
          O("div", Tw, ee(x(q)("Hardware")), 1),
          (w(!0), A(Te, null, Ne(k.value, (H, N) => (w(), A("div", { key: N }, ee(H.name) + " x" + ee(H.q) + " = " + ee(t.formatPrice(H.totalCost)), 1))), 128)),
          O("div", Aw, ee(x(q)("Hardware total")) + " = " + ee(t.formatPrice(R.value)), 1)
        ])) : Y("", !0),
        O("div", Ow, ee(x(q)("Panels")), 1)
      ])
    ], 64));
  }
}), HS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: $w }, Symbol.toStringTag, { value: "Module" })), Fw = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, Dw = { class: "content" }, Ew = ["onClick"], Rw = ["innerHTML"], _w = /* @__PURE__ */ Re({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = Va(), n = te({}), a = X(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (o, r) => {
      const l = bi("FontAwesomeIcon");
      return w(), ke(ja, { to: "body" }, [
        O("div", Fw, [
          Ee($c, {
            name: a.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ce(["notices-container", e.position])
          }, {
            default: Ti(() => [
              (w(!0), A(Te, null, Ne(x(i), (c) => (w(), A("div", {
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
                O("div", Dw, [
                  O("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, ee(c.message), 9, Ew),
                  O("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, Rw)
                ]),
                c.persistent ? Y("", !0) : (w(), ke(l, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (u) => x(s)(c.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), US = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: _w }, Symbol.toStringTag, { value: "Module" }));
export {
  sS as $,
  ie as A,
  _h as B,
  Pi as C,
  bS as D,
  rs as E,
  Vh as F,
  yS as G,
  Eu as H,
  cl as I,
  Yi as J,
  Ie as K,
  Of as L,
  js as M,
  U as N,
  aS as O,
  Ye as P,
  Sr as Q,
  kt as R,
  ll as S,
  nt as T,
  yp as U,
  mf as V,
  Xt as W,
  ne as X,
  Gi as Y,
  qw as Z,
  qt as _,
  Ba as a,
  LS as a$,
  Jt as a0,
  vS as a1,
  Zw as a2,
  Je as a3,
  uf as a4,
  nS as a5,
  Dt as a6,
  Ku as a7,
  Ed as a8,
  Ua as a9,
  xr as aA,
  bp as aB,
  AS as aC,
  up as aD,
  CS as aE,
  Sn as aF,
  vl as aG,
  be as aH,
  jr as aI,
  cp as aJ,
  kr as aK,
  Ro as aL,
  IS as aM,
  PS as aN,
  Jw as aO,
  Ip as aP,
  Pp as aQ,
  it as aR,
  ni as aS,
  xp as aT,
  kl as aU,
  OS as aV,
  Sa as aW,
  an as aX,
  bl as aY,
  mS as aZ,
  Ue as a_,
  kS as aa,
  rf as ab,
  lS as ac,
  iS as ad,
  yn as ae,
  Zi as af,
  oS as ag,
  dS as ah,
  Pt as ai,
  rS as aj,
  gu as ak,
  yu as al,
  ku as am,
  Ww as an,
  zw as ao,
  xS as ap,
  SS as aq,
  ps as ar,
  wr as as,
  rt as at,
  gd as au,
  wt as av,
  pS as aw,
  xi as ax,
  hS as ay,
  TS as az,
  No as b,
  $S as b0,
  se as b1,
  eS as b2,
  tS as b3,
  ht as b4,
  cS as b5,
  uS as b6,
  gS as b7,
  fS as b8,
  ff as b9,
  FS as bA,
  so as bB,
  WS as bC,
  HS as bD,
  US as bE,
  Uw as ba,
  Ft as bb,
  Wi as bc,
  qe as bd,
  vt as be,
  nn as bf,
  Gt as bg,
  Qw as bh,
  mh as bi,
  pl as bj,
  Ya as bk,
  pi as bl,
  bn as bm,
  wn as bn,
  Yw as bo,
  oy as bp,
  zS as bq,
  hi as br,
  DS as bs,
  xo as bt,
  ti as bu,
  ft as bv,
  Hw as bw,
  Ou as bx,
  ko as by,
  Tt as bz,
  Al as c,
  MS as d,
  Tl as e,
  RS as f,
  Uu as g,
  _S as h,
  wi as i,
  Tn as j,
  dg as k,
  jS as l,
  qS as m,
  GS as n,
  VS as o,
  NS as p,
  fg as q,
  wS as r,
  Wt as s,
  q as t,
  Kw as u,
  BS as v,
  ES as w,
  Gw as x,
  Xw as y,
  tn as z
};
