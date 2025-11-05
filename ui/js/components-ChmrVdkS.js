import { i as ar, B as fc } from "./vendor-i18n-BuJwRgtG.js";
import { d as Re, c as T, o as w, F as Ae, r as Ne, n as et, a as Ie, b as O, w as ds, t as X, v as un, e as se, f as gt, g as Yt, h as J, u as rr, i as hc, j as Be, k as mt, l as pc, m as fs, p as ve, q as k, s as Y, x as zs, T as Mo, y as lr, z as gc, A as xi, B as Pi, C as qs, D as ai, E as gi, G as Me, H as mc, I as cr, J as ns, K as yc, L as ga, M as Bi, N as ma, O as bc, P as vc, Q as wc, R as Sc, S as xc, U as Rn, V as kc, W as Ic } from "./vendor-vue-V1I1Po2P.js";
import { u as _o, a as Cc, b as Pc, c as Tc, d as Ac, e as Bo, f as ur, g as Oc, h as $c, i as Fc, j as Lc } from "./composables-Db3BGJOY.js";
import { a as dr, b as fr, l as Lt, c as Ws, d as Hs, s as at, r as Gt, e as os, f as hr, g as Ec, h as Dc, i as Rc, p as Mc, S as _c, j as Bc, k as jc } from "./vendor-d3-DUCHe88K.js";
import { _ as fe, o as B, a as ee, s as y, n as d, b as D, c as xe, r as Se, u as pe, d as Rt, e as lo, z as Vc, Z as Mn, f as Nc, l as me, p as Ti, g as je, h as Gc, i as zc, F as rs, j as pr, k as qc, m as Wc, q as Hc, t as Uc, v as Yc, w as Kc, x as gr, y as Zc, A as _n, B as mr, C as ya, D as Xc, E as Jc, G as Qc, H as ht, I as Us, J as Xe, K as ki, L as ba, M as eu, N as kt, O as Ys, P as ot, Q as tu, R as iu, S as su, T as nu, U as ou, V as au } from "./vendor-4AnxBRif.js";
function It() {
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
function yr() {
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
function Sw() {
  return typeof globalVariables < "u" || typeof globalThis.__runtimeVersion < "u" || typeof window < "u" && typeof window.__runtimeVersion < "u";
}
const xw = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, $t = {
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
}, Bn = {
  field_required: $t.FIELD_REQUIRED,
  invalid_number: $t.INVALID_NUMBER,
  invalid_decimal: $t.INVALID_DECIMAL,
  invalid_fraction: $t.INVALID_FRACTION,
  invalid_fraction_chars: $t.INVALID_FRACTION_CHARS,
  invalid_fraction_format: $t.INVALID_FRACTION_FORMAT,
  invalid_format: $t.INVALID_FORMAT,
  above_max: $t.ABOVE_MAX,
  below_min: $t.BELOW_MIN,
  zero_not_allowed: $t.ZERO_NOT_ALLOWED,
  division_by_zero: $t.DIVISION_BY_ZERO
};
function ru(t) {
  if (t in Bn) {
    const e = t;
    return It() && console.warn(`[Validation] Using legacy validation key "${t}". Please migrate to "${Bn[e]}"`), Bn[e];
  }
  return t;
}
var oe = /* @__PURE__ */ ((t) => (t.InputRectangle = "inputRectangle", t.InputShape = "inputShape", t.InputStock = "inputStock", t.InputUserGroup = "inputUserGroup", t.InputSaw = "inputSaw", t.Rectangle = "rectangle", t.Container = "container", t.Saw = "saw", t.Shape = "shape", t.Stock = "stock", t.Group = "group", t.UserGroup = "userGroup", t.StripGroup = "stripGroup", t.FirstShapeGroup = "firstShapeGroup", t.Segment = "segment", t.Offcut = "offcut", t.Cut = "cut", t.Line = "line", t.Placeable = "placeable", t.GuillotineState = "guillotineState", t.Point = "point", t.PointCollection = "pointCollection", t.Optimiser = "optimiser", t.Machining = "machining", t.Extras = "extras", t.Issue = "issue", t))(oe || {}), lu = /* @__PURE__ */ ((t) => (t.Full = "full", t.Compressed = "compressed", t))(lu || {});
class vt {
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
let jn = null;
const cu = (t) => (jn || (jn = vt.create(oe.Cut, "Cut")), jn(t));
let Vn = null;
const Je = (t) => (Vn || (Vn = vt.create(oe.Shape, "Shape", (e) => !("shapes" in e))), Vn(t));
let Nn = null;
const Dt = (t) => (Nn || (Nn = vt.create(oe.Stock, "Stock")), Nn(t));
let Gn = null;
const br = (t) => (Gn || (Gn = vt.create(oe.Group, "Group", (e) => "shapes" in e && Array.isArray(e.shapes) && e.type !== "user" && e.type !== "strip")), Gn(t));
let zn = null;
const hs = (t) => (zn || (zn = vt.create(oe.UserGroup, "Group", (e) => "shapes" in e && e.type === "user")), zn(t));
let qn = null;
const vr = (t) => (qn || (qn = vt.create(oe.StripGroup, "Group", (e) => "shapes" in e && e.type === "strip")), qn(t));
let Wn = null;
const wr = (t) => (Wn || (Wn = vt.create(oe.FirstShapeGroup, "Group", (e) => "shapes" in e && e.type === "firstShape")), Wn(t)), Ue = (t) => br(t) || hs(t) || vr(t) || wr(t);
let Hn = null;
const zt = (t) => (Hn || (Hn = vt.create(oe.InputUserGroup, "InputUserGroup")), Hn(t));
let Un = null;
const Ni = (t) => (Un || (Un = vt.create(oe.Segment, "Segment")), Un(t));
let Yn = null;
const uu = (t) => (Yn || (Yn = vt.create(oe.Offcut, "Offcut")), Yn(t)), Sr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Container")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
};
let Kn = null;
const du = (t) => (Kn || (Kn = vt.create(oe.Saw, "Saw")), Kn(t)), xr = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Rectangle")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Rectangle";
}, fu = (t) => {
  if (!t || typeof t != "object") return !1;
  let e = Object.getPrototypeOf(t);
  for (; e; ) {
    if (e.constructor?.name === "Placeable")
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return t.constructor?.name === "Placeable";
};
let Zn = null;
const ye = (t) => (Zn || (Zn = vt.create(oe.InputShape, "InputShape")), Zn(t));
let Xn = null;
const Gi = (t) => (Xn || (Xn = vt.create(oe.InputStock, "InputStock")), Xn(t));
function hu(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "__ref" in e && "autoId" in e && typeof e.__ref == "string" && typeof e.autoId == "string";
}
function kr(t) {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "trimmed" in e && e.trimmed === !0;
}
function pu(t) {
  if (!t || typeof t != "object") return null;
  const e = t.__entityType;
  if (e && Object.values(oe).includes(e))
    return e;
  if ("getType" in t && typeof t.getType == "function")
    try {
      const i = t.getType();
      if (Object.values(oe).includes(i))
        return i;
    } catch {
    }
  return cu(t) ? oe.Cut : ye(t) ? oe.InputShape : Gi(t) ? oe.InputStock : zt(t) ? oe.InputUserGroup : hs(t) ? oe.UserGroup : vr(t) ? oe.StripGroup : wr(t) ? oe.FirstShapeGroup : br(t) ? oe.Group : Je(t) ? oe.Shape : Dt(t) ? oe.Stock : Sr(t) ? oe.Container : Ni(t) ? oe.Segment : uu(t) ? oe.Offcut : xr(t) ? oe.Rectangle : fu(t) ? oe.Placeable : null;
}
const ri = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "sides" in e && (!("type" in e) || e.type === "banding") && (!("validate" in e) || typeof e.validate == "function");
}, Xt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && (!("type" in e) || e.type === "finish") && (!("validate" in e) || typeof e.validate == "function");
}, Jt = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "faces" in e && "sides" in e && (!("type" in e) || e.type === "planing") && (!("validate" in e) || typeof e.validate == "function");
}, gu = (t) => {
  if (!t || typeof t != "object") return !1;
  const e = t;
  return "images" in e && (!("type" in e) || e.type === "imageUpload") && (!("validate" in e) || typeof e.validate == "function");
};
function mu(t) {
  return t?.__entityType === oe.Shape;
}
function kw(t) {
  return t?.__entityType === oe.Group || t?.__entityType === oe.StripGroup || t?.__entityType === oe.FirstShapeGroup;
}
function Iw(t) {
  return t?.__entityType === oe.UserGroup;
}
const Ir = fe(["error", "warning"]), Cr = fe(["saw", "stock", "part", "group", "machining", "extras"]);
B({
  message: y(),
  identifier: y(),
  field: ee(ee(y())),
  index: ee(d()),
  id: y(),
  // Source object's autoId for linking back
  type: Ir,
  category: ee(Cr)
});
const yu = B({
  item: xe().nullable().default(null),
  message: y().default(""),
  params: Se(y(), pe([y(), d(), D(), Rt()])).optional(),
  // Translation parameters
  field: ee(ee(y())).default([]),
  index: ee(d()).nullable().default(null),
  id: y().nullable().default(null),
  // Source object's autoId
  issues: ee(xe()).nullable().default(null),
  // Will be Issue[] at runtime
  type: Ir.default("error"),
  category: ee(Cr).nullable().default(null),
  throwError: D().default(!1),
  shouldTranslate: D().default(!0)
});
function Ai(t) {
  return !(!t || typeof t != "string");
}
function bu(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t.toUpperCase();
}
function vu(t) {
  return !Ai(t) || !t || typeof t != "string" ? "" : t?.toLowerCase();
}
function wu(t) {
  return Ai(t) ? t.trim().split(" ").map((e) => Hi(e)).join(" ") : "";
}
function Hi(t) {
  return Ai(t) ? t.trim().charAt(0).toUpperCase() + t.slice(1) : "";
}
function Su(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z\u00C0-\u024F0-9._\-|\s]/g, ""), t.trim()) : "";
}
function xu(t) {
  return Ai(t) ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), t.trim()) : "";
}
function Cw(t, e = 100) {
  return Ai(t) ? (t = t.trim(), t = t.substring(0, e), t) : "";
}
let Pr = ar;
function ku(t) {
  Pr = t;
}
function Mt(t, e) {
  if (yr())
    return t;
  const i = Pr.t(t, { ...e });
  return !i || i === t ? t : Hi(i);
}
function Iu(t) {
  return typeof t == "string" && (t.startsWith("fields.") || t.startsWith("extras.") || t.startsWith("woodwork.") || t.startsWith("errors."));
}
function Cu(t) {
  if (!t) return;
  const e = {};
  for (const [i, s] of Object.entries(t))
    if (Iu(s)) {
      const n = Mt(s);
      e[i] = n;
    } else
      e[i] = s;
  return e;
}
function Pu(t, e) {
  const i = ru(t), s = t.startsWith("errors.validation.") ? t : i, n = Cu(e);
  return {
    message: Mt(s, n),
    translationKey: s,
    params: n
  };
}
function Tu(t, e) {
  return Pu(t, e).message;
}
class ne {
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
    const i = yu.parse(e), s = ne.determineIdentifier(i.item, i.index || []);
    let n = i.id || "";
    !n && i.item && "autoId" in i.item && i.item.autoId && (n = i.item.autoId);
    const o = i.shouldTranslate !== !1 ? Tu(i.message, i.params) : i.message;
    if (this.message = o, this.identifier = s, this.field = i.field.map((a) => [...a]), this.index = i.index ? [...i.index] : [], this.id = n, this.type = i.type, this.category = i.category || [], this.item = i.item, this.addToItemIssues(i.item), Array.isArray(i.issues) && i.issues.push(this), i.throwError) {
      const a = `Issue created for ${pu(i.item)}: ${this.identifier || "N/A"} - ${this.field.map((r) => r.join(".")).join(", ")}`;
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
    return new ne({
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
lo(
  (t) => t instanceof ne,
  { message: "Must be an Issue instance" }
);
const Tr = /* @__PURE__ */ new Map();
let Ar = !1;
function Au() {
  if (!Ar) {
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
function ps() {
  return Au(), Tr;
}
function Pw(t, e) {
  Tr.set(t, e);
}
function Tw() {
  Ar = !0;
}
function dn(t, e) {
  const i = t;
  return i._fieldBehavior = { fieldBehavior: e }, i;
}
function va(t, e) {
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
function Is(t) {
  const e = {};
  if (t instanceof Nc) {
    const i = t.shape;
    for (const [s, n] of Object.entries(i)) {
      const o = va(n);
      o && (e[s] = o);
    }
  }
  if (t._def && t._def.shape) {
    const i = t._def.shape;
    for (const [s, n] of Object.entries(i)) {
      const o = va(n);
      o && (e[s] = o);
    }
  }
  return e;
}
typeof Vc < "u" && Mn && Mn.prototype && (Mn.prototype.behavior = function(t) {
  return dn(this, t);
});
function ge(t, e = {}) {
  let s = xe().refine((a) => a == null ? !0 : typeof a == "object" && a !== null ? ("autoId" in a || "id" in a, !0) : !1, {
    message: `Invalid reference to ${t}`
  }).transform((a) => {
    if (a == null || typeof a == "object" && a !== null && typeof a.getType == "function" || typeof a == "object" && a !== null && a.__ref === !0)
      return a;
    if (typeof a == "object" && a !== null && !a.__ref)
      try {
        const r = ps(), l = a.__entityType || t, c = r.get(l);
        if (c && typeof c == "function")
          return typeof c.fromData == "function" ? c.fromData(a) : new c(a);
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
  return n = dn(n, o), Object.defineProperty(n, "__zRefClassName", {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !1
  }), n;
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
  return i = dn(i, s), i;
}
function Rs(t, e = {}) {
  const i = t.map((o) => ge(o));
  let s = ee(pe(i)).default([]).describe(
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
  return s = dn(s, n), s;
}
const Or = y().default("").describe('Unique identifier (e.g., "1.0" for shapes/stock, "g1" for groups, "ss-1_a2b3" for segments, "1.0-proximity" for proximity rectangles)'), Ou = y().max(200).default("").describe("User input name"), $u = y().default("").describe("Parent identifier for tracking copies and relationships"), Fu = D().default(!1).describe("Prevent automatic rotation optimization"), Lu = D().default(!1).describe("Whether this is an offcut piece"), $r = ee(y()).default([]).describe("IDs of identical items").behavior({ clone: "copy" }), Ui = pe([
  me(""),
  me("l"),
  me("w"),
  me(" ").transform(() => ""),
  Rt().transform(() => "")
]).default("").describe("Grain direction of the material"), Fr = pe([
  // String format (legacy support - color name or hex)
  y(),
  // Object format with hex and name
  B({
    hex: y().regex(/^#[0-9A-Fa-f]{6}$/, "Must be valid hex color (#RRGGBB)"),
    name: y().min(1)
  })
]).optional().describe("Material color (hex code + name or legacy string)"), Lr = Ti(
  (t) => t === null || t === " " || t === "n" || t === "none" || !["", "l", "w"].includes(t) ? "" : t,
  fe(["", "l", "w"]).default("").describe("Orientation lock for rotation constraints")
), Eu = B({
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
pe([
  me(""),
  me("l"),
  me("w"),
  Rt()
]).default(null);
Se(y(), d()).nullable().default(null);
Se(y(), d()).nullable().default(null);
const jo = pe([
  me(0),
  me(1)
]), Du = B({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: jo.describe("Rotation: 0 (no rotation) or 1 (90 degrees)"),
  order: d().optional().describe("Order of the batch"),
  id: y().optional().describe("Batch ID"),
  stockId: y().optional().describe("Associated stock ID"),
  rerunning: D().optional().describe("Whether the batch is being rerun"),
  priorityShape: y().nullable().describe("Priority shape identifier (null if none specified)")
});
B({
  subsetUsed: D().optional().describe("Whether a subset was used for strip shape batches"),
  groups: Se(y(), Du).describe("Groups of strip shape batches keyed by ID")
});
const Ru = ["x", "y"];
fe(Ru);
const Mu = ["l", "w"];
fe(Mu);
const Vo = ["l", "w"], pi = fe(Vo);
pe([
  me(0),
  me(1),
  me(2)
]);
pe([
  me(0),
  me(1),
  Rt()
]);
const _u = ["sheet", "linear", "roll"], fn = Ti(
  // Normalize to lowercase before validation
  (t) => typeof t == "string" ? t.toLowerCase() : t,
  pe([
    fe(_u),
    Rt()
  ]).nullable().default(null)
).describe("Type of stock material"), Er = B({
  // Infinite length flag for rolls and other continuous stock
  infiniteLength: D().default(!1).describe("Whether stock has infinite length (e.g., for rolls)"),
  // Allow shapes that exactly fit the stock dimensions
  allowExactFitShapes: D().default(!1).describe("Allow shapes that exactly fit"),
  // Automatically add stock as needed
  autoAdd: D().default(!1).describe("Automatically add stock as needed")
}), Bu = fe(["none", "schema", "business", "full"]), _t = B({
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
  validationMode: Bu.optional(),
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
function ju(t) {
  if (!t) return "";
  const e = t.indexOf(".");
  return e === -1 ? t : t.substring(0, e);
}
const No = _t.extend({
  // Identity
  id: Or,
  // Description
  name: Ou,
  // Dimensions
  l: Ti((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Length (long side dimension)"),
  w: Ti((t) => typeof t == "number" && !isFinite(t) ? 1 : t, d().positive()).default(1).describe("Width (short side dimension)"),
  t: d().positive().nullable().optional().describe("Thickness (z-axis dimension)"),
  q: d().positive().int().default(1).describe("Quantity"),
  // Calculated dimensions (computed once on init for performance)
  area: d().positive().default(1).describe("Calculated area (l * w)"),
  longSide: d().positive().default(1).describe("Calculated long side Math.max(l, w)"),
  shortSide: d().positive().default(1).describe("Calculated short side Math.min(l, w)"),
  parentId: y().default("").describe("Parent ID extracted from id (integer part before decimal)"),
  // Flags
  duplicate: D().default(!1).describe("Whether this is a duplicate"),
  offcut: Lu,
  // Grain
  grain: Ui,
  preventGrainRotation: D().default(!1).describe("Prevent rotation that would change grain direction"),
  // Orientation
  preventAutoRotation: Fu,
  orientationLock: Lr,
  // Position (reset during cloning - cloned shapes should not have preset positions)
  x: d().nullable().default(null).describe("X coordinate position").behavior({ clone: "reset" }),
  y: d().nullable().default(null).describe("Y coordinate position").behavior({ clone: "reset" }),
  // Stock matching
  material: y().max(200).default("").transform((t) => t ? t.trim().toLowerCase() : "").describe("Material name"),
  // Trim
  trim: Eu.describe("Reduce the dimensions by specified trim values"),
  trimmed: D().default(!1).describe("Whether trim has been applied to dimensions"),
  // Proximity data (excluded from compression)
  proximity: B({
    rectangle: ge("Rectangle").nullable().default(null),
    distance: d().nullable().default(null)
  }).default({ rectangle: null, distance: null }).behavior({ compress: "exclude" }),
  // Other properties
  cost: d().min(0).nullable().default(0).describe("Cost per unit"),
  customData: Se(y(), xe()).default({}).describe("Custom user-defined data"),
  identicalTo: $r,
  notes: y().max(500).default("").transform((t) => typeof t == "string" && t.length ? t.replace(/,/g, "").substring(0, 200) : "").describe("Description")
}), Go = {
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
}, hn = No.extend({
  // Identity - override id to be required for containers
  id: y().default("").describe("Unique identifier for containers (required for Stock and Segment)"),
  // Parent identifier for tracking copies
  parentId: $u,
  // Container-specific fields
  stockType: fn,
  // Array of shapes or groups (excluded from compression - runtime only)
  shapes: Rs(["Shape", "Group"], {
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
}), pn = {
  // Include all Rectangle computed properties
  ...Go,
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
    compute: (t) => Dt(t) ? t : Ni(t) || Ue(t) ? t.stock : null,
    metadata: {
      cache: !1,
      returnType: "Stock | null"
    }
  }
};
hn.describe(JSON.stringify({
  name: "Container",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(pn)
}));
function wa(t, e) {
  return Gc(t, e);
}
function di(t, e) {
  return je(t, e);
}
function ts(t, e, i) {
  zc(t, e, i);
}
function ke(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function Sa(t, e = !1) {
  if (!ke(t) || typeof t != "object") return !1;
  const i = Object.values(t);
  return i.length === 0 ? !1 : e ? i.some((s) => ke(s) && s) : i.some((s) => ke(s));
}
function Aw(t) {
  if (!t?.length) return [];
  const e = t.filter((s) => !s.added).map((s) => s), i = {};
  return e.forEach((s) => {
    const n = Vu(s.stock) || 1;
    i[s.parentId] ? i[s.parentId].count += n : (i[s.parentId] = {}, i[s.parentId].count = n, i[s.parentId].id = s.parentId, i[s.parentId].name = s?.name ? s.name : s.id, i[s.parentId].l = s.l, i[s.parentId].w = s.w, i[s.parentId].t = s.t, i[s.parentId].material = s.material, i[s.parentId].rot = s.rot);
  }), Object.values(i);
}
function Vu(t, e = []) {
  if (!t) return 1;
  if (t?.stack?.number) return t.stack.number;
  if (t?.stack?.stock) {
    const i = typeof t.stack.stock == "string" ? t.stack.stock : t.stack.stock?.id;
    if (i && e.length > 0)
      return e.find((n) => n.id === i)?.stack?.number || 1;
  }
  return typeof t?.stack == "string" && e.find((s) => s.id === t.stack)?.stack?.number || 1;
}
function Nu() {
  const t = document.documentElement;
  return "requestFullscreen" in t || "webkitRequestFullscreen" in t || "mozRequestFullScreen" in t || "msRequestFullscreen" in t;
}
function Ow(t, e) {
  if (t == null) return "-";
  let i = Math.round(t).toString();
  for (; i.length < e; ) i = "0" + i;
  return i;
}
function Wt(t) {
  return t ? t === "l" ? "w" : "l" : null;
}
function Gu(t) {
  return t ? t === "x" ? "y" : "x" : null;
}
function zu(t, e) {
  if (!t || !e) return 0;
  const i = t.split(".").map(Number), s = e.split(".").map(Number), n = Math.max(i.length, s.length);
  for (let o = 0; o < n; o++) {
    const a = i[o] || 0, r = s[o] || 0;
    if (a > r) return 1;
    if (a < r) return -1;
  }
  return 0;
}
function xa(t, e) {
  return zu(t, e) > 0;
}
const _i = 1e-10, qu = 10, Wu = Number.MAX_SAFE_INTEGER, Hu = 4294967295, pt = (t) => typeof t == "number" && Number.isFinite(t), Ms = (t) => Array.isArray(t) && t.length > 0;
function es(t, e, i = _i) {
  if (t === e) return 0;
  if (Number.isInteger(t) && Number.isInteger(e))
    return t > e ? 1 : -1;
  const s = t - e;
  return Math.abs(s) < i ? 0 : s;
}
const Uu = {
  greaterThan: (t, e, i = _i) => !pt(t) || !pt(e) ? !1 : es(t, e, i) > 0,
  greaterThanOrEqualTo: (t, e, i = _i) => !pt(t) || !pt(e) ? !1 : es(t, e, i) >= 0,
  lessThan: (t, e, i = _i) => !pt(t) || !pt(e) ? !1 : es(t, e, i) < 0,
  lessThanOrEqualTo: (t, e, i = _i) => !pt(t) || !pt(e) ? !1 : es(t, e, i) <= 0,
  equalTo: (t, e, i = _i) => !pt(t) || !pt(e) ? !1 : es(t, e, i) === 0
};
function Yu(t) {
  return pt(t) ? Number.isInteger(t) ? t : Number(t.toFixed(qu)) : !1;
}
function Ku(t) {
  if (!pt(t) || t < 0 || t > Wu)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Hu + 1) * t);
}
function Zu(t, e) {
  if (!Ms(t))
    throw new Error("Invalid array parameter");
  if (!pt(e) || e < 0 || e > t.length)
    throw new Error("Invalid size parameter");
  const i = t.slice(), s = t.length - e;
  for (let n = t.length - 1; n >= s; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [i[n], i[o]] = [i[o], i[n]];
  }
  return i.slice(s);
}
class Cs {
  static calculateMean(e) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    return e.reduce((i, s) => i + s, 0) / e.length;
  }
  static calculateStandardDeviation(e, i = null) {
    if (!Ms(e))
      throw new Error("Invalid input array");
    const s = i ?? this.calculateMean(e), n = e.reduce((o, a) => {
      const r = a - s;
      return o + r * r;
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
const ae = {
  ...Uu,
  isNumber: pt,
  round: Yu,
  getRandom: Ku,
  getRandomSample: Zu,
  calculateStandardDeviation: Cs.calculateStandardDeviation.bind(Cs),
  calculateCoefficientOfVariation: Cs.calculateCoefficientOfVariation.bind(Cs)
}, Jn = 10, ka = 0;
class Ks extends Error {
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
function Xu(t, e) {
  let i;
  if (typeof t == "number" ? i = t : i = new rs(t).valueOf(), typeof e == "number") {
    const s = Math.pow(10, e);
    return Math.round(i * s) / s;
  }
  return i;
}
function Ju(t, e) {
  const i = new rs(t);
  if (e > 0) {
    const s = i.mul(e), n = Math.round(s.valueOf());
    return new rs(n, e).toFraction(!0);
  }
  return i.simplify().toFraction(!0);
}
function Qu(t, e, i = !1) {
  const s = t == null || String(t).trim() === "";
  if (i && s)
    return { value: null, valid: !1, message: "errors.validation.field.required" };
  if (!i && s)
    return { value: null, valid: !0 };
  const n = String(t);
  try {
    const o = Dr(n, !0), a = parseFloat(o ?? ""), r = o !== null && o !== "" && !isNaN(a) && isFinite(a);
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
function ed(t = "en-US") {
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
function _s(t) {
  if (t == null || t === "") return null;
  const e = String(t).trim();
  if (!e) return null;
  try {
    const { thousandsSeparator: i, decimalSeparator: s } = ed(), n = e.replace(new RegExp(`\\${i}`, "g"), "").replace(new RegExp(`\\${s}`, "g"), "."), o = Number(n);
    return isFinite(o) ? o : null;
  } catch (i) {
    throw new Ks(`Failed to parse locale number: "${t}". ${i.message || "Parsing error"}`);
  }
}
function zo(t) {
  if (!t) return !1;
  const e = t.toString().trim();
  if (!e) return !1;
  const i = Object.keys(is).join("");
  return new RegExp(
    `^-?((\\d+\\s+)?\\d+\\/\\d+|\\d+|\\d+[${i}]|[${i}]|\\d+'(?:\\s*\\d+(?:\\/\\d+)?"?)?|(\\d+\\s+)?\\d+\\/\\d+"|\\d+")$`
  ).test(e);
}
function Dr(t, e = !1) {
  if (t == null || t === "") return null;
  let i = String(t).trim();
  if (!i) return null;
  const s = Object.keys(is).join("");
  i = i.replace(new RegExp(`(\\d)\\s+([${s}])`, "g"), "$1$2");
  try {
    const n = Object.keys(is).join(""), o = new RegExp(`^(-?)(\\d+)([${n}])$`), a = new RegExp(`^(-?)([${n}])$`), r = i.match(o), l = i.match(a);
    if (r) {
      const c = r[1], u = r[2], f = r[3], h = is[f];
      if (h)
        return `${c}${u} ${h}`;
      throw new Error(`Unknown vulgar fraction character: ${f}`);
    } else if (l) {
      const c = l[1] || "", u = l[2], f = is[u];
      if (f)
        return `${c}${f}`;
      throw new Error(`Unknown vulgar fraction character: ${u}`);
    } else if (zo(i)) {
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
      const u = e ? _s(i) : parseFloat(i);
      return u === null || isNaN(u) || !isFinite(u) ? null : u.toString();
    }
  } catch (n) {
    throw new Ks(
      `Failed to clean numeric input: "${t}". ${n.message || "Cleaning error"}`
    );
  }
}
function $w(t, e, i = null, s = null) {
  if (t && !(!ye(t) && !Gi(t))) {
    if (!["decimal", "fraction"].includes(e)) {
      console.warn("Attempting to update to an invalid number format:", e);
      return;
    }
    for (const n of t.numberFormatKeys)
      if (typeof t[n] == "object" && t[n] !== null)
        for (const o in t[n])
          Object.prototype.hasOwnProperty.call(t[n], o) && (t[n][o] = H({ v: t[n][o], nf: e, dp: i, pl: !1, fr: s }));
      else
        t[n] = H({ v: t[n], nf: e, dp: i, pl: !1, fr: s });
  }
}
function td(t) {
  return /^-?\d*\.?\d+$/.test(t);
}
function id(t) {
  return /^-?(\d+\s+)?\d+\/\d+$/.test(t) || /^-?\d+$/.test(t);
}
function H(t) {
  if (t.v == null || t.v === "")
    return t.nf === "decimal" || !t.nf && t.o?.numberFormat !== "fraction" ? null : "";
  const e = t.o ?? {}, i = t.nf ?? e?.numberFormat ?? "decimal", s = t.dp ?? e?.decimalPlaces ?? Jn, n = t.pl ?? e?.parseLocale ?? !1, o = t.fr ?? e?.fractionRoundTo ?? ka;
  if (i === "decimal") {
    if (typeof t.v == "number") {
      if (typeof s == "number" && s !== Jn) {
        const a = Math.pow(10, s);
        return Math.round(t.v * a) / a;
      }
      return t.v;
    }
    if (typeof t.v == "string") {
      const a = t.v.trim();
      if (td(a) && !n) {
        const r = parseFloat(a);
        if (isFinite(r)) {
          if (typeof s == "number" && s !== Jn) {
            const l = Math.pow(10, s);
            return Math.round(r * l) / l;
          }
          return r;
        }
      }
    }
  } else if (i === "fraction" && typeof t.v == "string") {
    const a = t.v.trim();
    if (id(a))
      try {
        const r = new rs(a);
        if (isFinite(r.valueOf())) {
          if (o === 0 || o === ka)
            return r.toFraction(!0);
          const l = r.mul(o), c = Math.round(l.valueOf());
          return new rs(c, o).toFraction(!0);
        }
      } catch {
      }
  }
  try {
    const a = Dr(t.v, n);
    return a === null || a === "" ? i === "decimal" ? null : "" : i === "decimal" ? Xu(a, s) : Ju(a, o);
  } catch (a) {
    throw a instanceof Ks ? a : new Ks(
      `Failed to convert number format: "${t.v}" to ${i}. ${a.message}`
    );
  }
}
function zi(t, e = !1) {
  const i = typeof t.l == "string" ? H({ v: t.l }) : t.l, s = typeof t.w == "string" ? H({ v: t.w }) : t.w;
  if (!e)
    return { l: i, w: s };
  if (!("trim" in t))
    return { l: i, w: s };
  if (kr(t))
    return { l: i, w: s };
  if (xr(t) && !t.hasTrim)
    return { l: i, w: s };
  const n = t.trim, o = H({ v: n.l1 ?? 0 }) + H({ v: n.l2 ?? 0 }), a = H({ v: n.w1 ?? 0 }) + H({ v: n.w2 ?? 0 });
  return {
    l: i - (typeof o == "string" ? H({ v: o }) : o),
    w: s - (typeof a == "string" ? H({ v: a }) : a)
  };
}
function sd(t, e) {
  if ("trim" in t && !kr(t)) {
    const i = t.trim;
    e.l = e.l - (H({ v: i.w1 ?? 0 }) + H({ v: i.w2 ?? 0 })), e.w = e.w - (H({ v: i.l1 ?? 0 }) + H({ v: i.l2 ?? 0 }));
  }
  return e;
}
function Ei(t, e, i = !1) {
  let s = {
    l: t.l,
    w: t.w
  };
  (Gi(t) || ye(t) || hs(t)) && (s = {
    l: H({ v: t.l }),
    w: H({ v: t.w })
  });
  const n = ("rot" in t ? t.rot : 0) ?? 0;
  return i && (s = sd(t, s)), n === e || ([s.l, s.w] = [s.w, s.l]), s;
}
function Rr(t) {
  if (!("l" in t) || !("w" in t)) throw new Error("rotatable item must have l & w properties");
}
function nd(t) {
  Ue(t) || (Rr(t), [t.l, t.w] = [t.w, t.l]);
}
function Yi(t, e, i = null, s) {
  if (!e || !t)
    throw new Error("Container and shape are required");
  let n = 0;
  s && du(s) ? n = s.options.minSpacing : s && s?.options?.minSpacing ? n = H({ v: s.options.minSpacing }) : Sr(e) && (n = e?.saw?.options.minSpacing);
  const o = "allowExactFitShapes" in e && e.allowExactFitShapes === !0, a = zi(e, !0), r = o ? zi(e, !1) : a, l = zi(t, !0);
  let c = a;
  if (o && (ae.equalTo(l.l, r.l) && ae.equalTo(l.w, r.w) || ae.equalTo(l.l, r.w) && ae.equalTo(l.w, r.l)) && (c = r), l.l * l.w > c.l * c.w)
    return !1;
  function u(E, L) {
    return ae.equalTo(E, L) || ae.lessThanOrEqualTo(E, L - n * 2);
  }
  function f(E) {
    return u(E.l, c.l) && u(E.w, c.w);
  }
  const h = Mr(t, e);
  if (t.orientationLock || i !== null) {
    const E = i ?? (h === "w" ? 1 : 0), L = Ei(t, E, !0);
    if (o) {
      const C = Ei(t, E, !1);
      if (ae.equalTo(C.l, r.l) && ae.equalTo(C.w, r.w))
        return f(C);
    }
    return f(L);
  }
  const g = Ei(t, 0, !0);
  if (o) {
    const E = Ei(t, 0, !1);
    if (ae.equalTo(E.l, r.l) && ae.equalTo(E.w, r.w) && f(E)) return !0;
  }
  if (f(g)) return !0;
  const x = Ei(t, 1, !0);
  if (o) {
    const E = Ei(t, 1, !1);
    if (ae.equalTo(E.l, r.l) && ae.equalTo(E.w, r.w) && f(E)) return !0;
  }
  return f(x);
}
function od(t) {
  if ("orientationLock" in t)
    return t.orientationLock;
  let e = null;
  return (Ue(t) || hs(t) || Je(t) || ye(t)) && (e = t.orientationLock), e;
}
function Mr(t, e) {
  const i = od(t);
  if (!ke(i)) return null;
  if (!e || "direction" in t) return i;
  if ("getStock" in e) {
    const s = e.getStock;
    if (s && ke(s.grain))
      return i === s.grain ? "l" : "w";
  }
  return i;
}
function _r(t, e) {
  if (Ue(t))
    return Yi(t, e, t.rot) ? [t.rot] : [];
  const i = [];
  for (let s = 0; s <= 1; s++)
    bt(t, s, e) && Yi(t, e, s) && i.push(s);
  return i;
}
function bt(t, e = null, i = null) {
  if (!ke(e))
    throw new Error("no rotation provided to canRotate");
  if (e === !0 && (e = 1), e === !1 && (e = 0), t.preventAutoRotation && e !== 0 || !Ue(t) && ld(t) && e || i && !Yi(t, i, e))
    return !1;
  const s = Mr(t, i);
  return !(s === "l" && e === 1 || s === "w" && e === 0);
}
function ad(t, e = null, i = null) {
  const s = "rot" in t ? t.rot : 0;
  return e === null && (e = s === 0 ? 1 : 0), bt(t, e, i) ? (s === e || nd(t), !0) : !1;
}
function rt(t, e = null, i = null) {
  e ? e = 1 : e = 0;
  const s = t.id || t.autoId || "unknown";
  return i && e && !Yi(t, i, e) ? (console.warn(`[setRotation] ${s}: Cannot rotate to ${e} - won't fit in container`), !1) : ad(t, e, i);
}
function Fw(t, e) {
  if (Ue(t)) return t.rot;
  if (!ke(t.orientationLock)) return null;
  const i = e.getStock;
  return !t.orientationLock || !ke(i?.grain) ? null : t.orientationLock === i?.grain ? 0 : 1;
}
function Ia(t, e, i, s, n = null) {
  if (!s) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
  const o = zi(t);
  if (o.l >= e && o.l <= i || o.w >= e && o.w <= i) {
    if (t.l === t.w) return !0;
    const a = Math.max(o.l, o.w), r = Math.min(o.l, o.w);
    if (n) {
      if (s === "l") {
        if (a >= e && a <= i && bt(t, 0, n) || r >= e && r <= i && bt(t, 1, n)) return !0;
      } else if (s === "w" && (r >= e && r <= i && bt(t, 0, n) || a >= e && a <= i && bt(t, 1, n)))
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
function rd(t, e, i, s) {
  if (!i) throw new Error("requiredSide not supplied to rotateToDimension");
  if (t.l !== e && t.w !== e) return !1;
  if (t.l === t.w) return !0;
  const n = zi(t), o = Math.max(n.l, n.w), a = Math.min(n.l, n.w);
  if (i === "l") {
    if (o === e && bt(t, 0, s)) return rt(t, 0);
    if (a === e && bt(t, 1, s)) return rt(t, 1);
  } else if (i === "w") {
    if (a === e && bt(t, 0, s)) return rt(t, 0);
    if (o === e && bt(t, 1, s)) return rt(t, 1);
  }
  return !1;
}
function ld(t) {
  Rr(t);
  const e = zi(t);
  return ae.equalTo(e.l, e.w);
}
function Ca(t) {
  return t && typeof t == "object" && typeof t.toData == "function";
}
let Pa = 0, Ta = Date.now();
const cd = 1e4;
function ud() {
  return Pa % cd === 0 && (Ta = Date.now()), `${Ta}-${(Pa++).toString(36)}`;
}
class dd {
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
    this.autoId = e?.autoId || ud(), Object.defineProperty(this, "_serializationMode", {
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
      const i = Is(e.schema), s = e.schema;
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
        const r = Is(a);
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
        if (s instanceof pr) {
          const n = s.issues.map((o) => new ne({
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
      const g = s.pop() || "0", x = parseInt(g, 10);
      isNaN(x) && s.push(g), n = String(e);
    } else {
      const g = s.pop() || "0", x = parseInt(g, 10);
      isNaN(x) ? (s.push(g), n = "1") : n = String(x + 1);
    }
    s.push(n);
    const o = s.join("."), r = `${this.autoId.includes(".") ? this.autoId.substring(0, this.autoId.indexOf(".")) : this.autoId}.${n}`, l = this.constructor, c = this.getDirectPropertyCopy(i), u = l.schema;
    let f = {};
    u && (f = Is(u));
    const h = l.defaults || (u ? u.parse({}) : {}) || {};
    for (const [g, x] of Object.entries(f))
      x.clone === "reset" && (g in h ? c[g] = h[g] : delete c[g]);
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
    if (o && (a = Is(o)[i] || null), a?.clone)
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
        if (Ca(a)) {
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
    if (Ca(e)) {
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
    const n = ps().get(i);
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
class He extends dd {
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
    const s = this.extractValidationOptions(e), o = e._validated === !0 || s.skipSchemaValidation || s.validationMode === "none" || s.validationMode === "business";
    let a;
    if (o)
      a = this.recreateNestedClasses(e, i);
    else if (s.enableStrictMode)
      a = i.parse(e);
    else {
      const r = i.safeParse(e);
      r.success ? a = r.data : a = i.partial().parse(e);
    }
    Object.assign(this, a), this.applyComputedProperties(), Object.defineProperty(this, "_type", {
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
   * This handles zRef and zRefArray fields automatically when schema validation is skipped
   *
   * When validation runs, the zRef transforms handle instantiation automatically.
   * This method is only used when skipValidation=true to ensure nested classes are still instantiated.
   */
  recreateNestedClasses(e, i) {
    if (!e || typeof e != "object" || Array.isArray(e)) return e;
    const s = { ...e }, n = i.shape;
    for (const [o, a] of Object.entries(n)) {
      const r = s[o];
      if (r == null || typeof r == "object" && typeof r.getType == "function")
        continue;
      const l = this.extractClassNameFromSchema(a);
      l ? s[o] = this.deserializeValueWithClassName(r, l) : s[o] = this.deserializeValue(r);
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
      const s = e.__entityType || i, o = ps().get(s);
      if (o)
        try {
          return typeof o.fromData == "function" ? o.fromData(e) : new o(e);
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
    let o;
    n ? o = this.recreateNestedClasses(e, i) : o = i.partial().parse(e), super.update(o);
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
      if (i instanceof pr)
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
    for (const [n, o] of Object.entries(s)) {
      if (n.startsWith("_"))
        continue;
      if (n === "trim") {
        i.push(n);
        continue;
      }
      const a = this.unwrapSchema(o);
      if (a instanceof qc) {
        const r = a.options.some((c) => c instanceof Wc), l = a.options.some((c) => c instanceof Hc);
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
    if (e instanceof Uc || e instanceof Yc)
      return this.unwrapSchema(e._def?.innerType);
    if (e instanceof Kc)
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
const fd = ["lr", "rl", "bt", "tb"];
B({
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  dimension: fe(["l", "w"]).optional(),
  shapeCollisions: ee(xe()).optional()
});
B({
  id: y().nullable().optional(),
  x1: d(),
  x2: d(),
  y1: d(),
  y2: d(),
  origin: y().optional(),
  dimension: fe(["l", "w"]).optional(),
  direction: fe(fd).nullable().optional(),
  type: y().nullable().optional()
});
const hd = B({
  // ========== Identification ==========
  // Unique identifier for this line
  id: y(),
  // Type classification for this line
  type: y().optional(),
  // ========== Coordinates ==========
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // ========== Origin Information ==========
  // Origin point of the line
  origin: y().optional(),
  // ========== Collision Tracking ==========
  // Shapes that collide with this line
  shapeCollisions: ee(xe()).default([]),
  // ========== Validation ==========
  // Validation issues found with this line
  issues: ee(xe()).default([])
}), pd = {
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
class Si extends He {
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
    return oe.Line;
  }
  /**
    * Validate line
    */
  validate() {
    const e = [];
    return (!ae.isNumber(this.x1) || !ae.isNumber(this.x2) || !ae.isNumber(this.y1) || !ae.isNumber(this.y2)) && e.push(new ne({
      message: "Line coordinates must be valid numbers",
      type: "error"
    })), this.x1 === this.x2 && this.y1 === this.y2 && e.push(new ne({
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
      if (this.dimension === "l" ? (r = ae.greaterThan(this.x2, a.x) && ae.lessThan(this.x1, a.x + a.l), l = ae.greaterThan(this.y1 + n, a.y) && ae.lessThan(this.y1 - n, a.y + a.w)) : this.dimension === "w" && (r = ae.greaterThan(this.x1 + n, a.x) && ae.lessThan(this.x1 - n, a.x + a.l), l = ae.greaterThan(this.y2, a.y) && ae.lessThan(this.y1, a.y + a.w)), r && l)
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
    return new Si({ x1: e, y1: i, x2: s, y2: n, origin: o, type: a });
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
const Aa = ["topLeft", "topRight", "bottomLeft", "bottomRight"], gd = [
  "left",
  "centre",
  "right",
  "top",
  "bottom",
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight"
], md = ["lr", "rl", "bt", "tb"], yd = B({
  // ========== Coordinates ==========
  x: d().default(0),
  y: d().default(0),
  z: d().default(0),
  // ========== Shape References ==========
  a: y().optional(),
  b: y().optional(),
  stock: ge("Stock", { nullable: !0 }).optional(),
  // ========== Direction and Positioning ==========
  direction: fe(md).nullable().optional(),
  type: y().optional(),
  corner: fe(Aa).optional(),
  shapePosition: fe(Aa).optional(),
  grid: fe(gd).optional(),
  // ========== Collision and Raycast Flags ==========
  raycast: D().default(!1),
  collision: D().default(!1),
  tooClose: D().default(!1),
  adjustedForMinSpacing: D().default(!1)
}), bd = {
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
}, vd = {
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
}, Ps = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Ts = {
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
class tt extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = yd;
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
    return oe.Point;
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
      const s = vd[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && i.add(s[this.corner][this.grid]), i;
    }
    return e?.cutType !== "efficiency" ? (Ps[this.corner] && (this.grid ? Ps[this.corner][this.grid] && Ps[this.corner][this.grid].forEach((s) => i.add(s)) : Ps[this.corner].default?.forEach((s) => i.add(s))), i) : (Ts[this.corner] && (this.grid ? Ts[this.corner][this.grid] && Ts[this.corner][this.grid].forEach((s) => i.add(s)) : Ts[this.corner].default?.forEach((s) => i.add(s))), i);
  }
}
class gn extends He {
  // Zod schema for validation and serialization
  static schema = No;
  static computedProperties = Go;
  constructor(e = {}) {
    super(e);
    let i = !1;
    Dt(this) && (i = this.infiniteLength), !e?.preventAutoRotation && !i && (this.orientationLock ? (this.orientationLock === "l" && rt(this, 0), this.orientationLock === "w" && rt(this, 1)) : this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !e?.preventGrainRotation && (this.grain = Wt(this.grain)))), this.calculateDimensions(), e.skipValidation || e.skipBusinessValidation || e.validationMode === "none" || e.validationMode === "schema" || this.validate();
  }
  /**
   * Calculate derived dimensions (area, longSide, shortSide, parentId)
   * Called automatically in constructor and after dimension changes
   */
  calculateDimensions() {
    this.area = this.l * this.w, this.longSide = Math.max(this.l, this.w), this.shortSide = Math.min(this.l, this.w), this.parentId = ju(this.id);
  }
  /**
   * Get entity type
   */
  getType() {
    return oe.Rectangle;
  }
  /**
   * Validate business rules for the rectangle
   * This is separate from schema validation which happens in the constructor
   * Override this method in subclasses for domain-specific validation
   */
  validate() {
    if (this.issues = [], this.warnings = [], (this.l <= 0 || this.w <= 0) && this.issues.push(new ne({
      message: "Rectangle dimensions must be positive",
      type: "error",
      field: [["l"], ["w"]],
      item: this
    })), this.hasTrim) {
      const e = {
        x: (this.trim.w1 || 0) + (this.trim.w2 || 0),
        y: (this.trim.l1 || 0) + (this.trim.l2 || 0)
      };
      e.x >= this.l && this.warnings.push(new ne({
        message: "Trim values exceed length",
        type: "warning",
        field: [["trim"]],
        item: this
      })), e.y >= this.w && this.warnings.push(new ne({
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
        return new Si({
          x1: i,
          x2: i + this.l,
          y1: s,
          y2: s,
          type: "bottom",
          validationMode: "none"
          // parentId: this.id
        });
      case "right":
        return new Si({
          x1: i + this.l,
          x2: i + this.l,
          y1: s,
          y2: s + this.w,
          type: "right",
          validationMode: "none"
          // parentId: this.id
        });
      case "top":
        return new Si({
          x1: i,
          x2: i + this.l,
          y1: s + this.w,
          y2: s + this.w,
          type: "top",
          validationMode: "none"
          // parentId: this.id
        });
      case "left":
        return new Si({
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
    const s = new gn({
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
class mn extends gn {
  // Zod schema for validation and serialization
  static schema = hn;
  static computedProperties = pn;
  constructor(e = {}) {
    super(e), e.skipValidation || this.validateContainer(e);
  }
  // applyComputedProperties removed - handled by SchemaClass base
  // Container.computedProperties includes Rectangle.computedProperties via spread
  /**
    * Get entity type
    */
  getType() {
    return oe.Container;
  }
  /**
    * Validate container-specific properties
    */
  validateContainer(e) {
    const i = ["sheet", "linear", "roll", null, void 0, ""], s = this?.stockType;
    if (!i.includes(s)) {
      const n = new ne({
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
    const i = mn.schema.partial().parse(e);
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
const wd = B({
  dimension: d().describe("Dimension of the strip shape batch"),
  rot: pe([
    me(0),
    me(1)
  ]).describe("Rotation"),
  order: d().optional().describe("Order of the batch"),
  id: y().optional().describe("Batch ID"),
  stockId: y().optional().describe("Associated stock ID"),
  rerunning: D().optional().describe("Whether the batch is being rerun"),
  priorityShape: y().nullable().describe("Priority shape identifier (null if none specified)")
}), Br = B({
  // Strip direction
  myStripDirection: pi.optional(),
  // Strip parent (can be shape or group)
  myStripParent: pe([
    ge("Shape", { nullable: !0 }),
    ge("Group", { nullable: !0 })
  ]).default(null).describe("Parent strip shape or group for guillotine optimization"),
  // Phase number
  myPhase: d().int().min(0).optional().describe("Phase of the strip this shape belongs to"),
  // Strip shape batches optimization data
  stripShapeBatches: B({
    subsetUsed: D().optional().describe("Whether a subset was used for strip shape batches"),
    groups: Se(y(), wd).default({}).describe("Groups of strip shape batches keyed by ID")
  }).default({ groups: {} }).describe("Strip shape batch optimization data")
});
Br.describe(JSON.stringify({
  name: "GuillotineState",
  version: "1.0.0"
}));
const Sd = {};
class Qt extends He {
  // Required: Define schema and computed properties
  static schema = Br;
  static computedProperties = Sd;
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
    return oe.GuillotineState;
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
function jr(t, e = "cc") {
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
  }, o = {}, r = Object.keys(t).some((l) => ["x1", "x2", "y1", "y2"].includes(l)) ? s : i;
  if (e === "cc") {
    for (const [l, c] of Object.entries(r))
      l in t && (o[c] = t[l]);
    for (const [l, c] of Object.entries(n))
      l in t && (o[c] = t[l]);
  } else {
    for (const [l, c] of Object.entries(r))
      c in t && (o[l] = t[c]);
    for (const [l, c] of Object.entries(n))
      c in t && (o[l] = t[c]);
  }
  return o;
}
function co(t = 0, e, i = null, s = null, n = null) {
  if (!ye(i) && !zt || s === "stock") return !1;
  let o, a;
  if (ye(i) ? o = i.orientationLock : zt(i) ? o = i.direction : s === "shape" && (o = n), t === 0 || zt(i))
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
function xd(t, e, i = null, s = null, n = null) {
  if (!ye(i) || s === "shape") return !1;
  let o;
  return t === 0 || t === 1 ? co(t, e, i, s, n) ? "cc" : !1 : t === 2 ? e === "w" ? i.l < i.w ? "c" : "cc" : !1 : o;
}
const kd = ["l", "w"], Id = ["top", "bottom", "left", "right", "merged"], Cd = B({
  // Coordinates
  x1: d().default(0),
  x2: d().default(0),
  y1: d().default(0),
  y2: d().default(0),
  // Dimension and position
  dimension: fe(kd).optional(),
  position: fe(Id).optional(),
  // Stock reference - required as cuts cannot exist without a stock
  stock: ge("Stock"),
  // Guillotine properties
  isGuillotine: D().default(!1),
  guillotineState: B({
    order: d().nullable().optional(),
    parentSegmentID: y().nullable().optional(),
    phase: d().nullable().optional(),
    segmentCutOrder: d().nullable().optional(),
    partProduced: y().nullable().optional()
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
}), Pd = {
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
class qo extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Cd;
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
    return oe.Cut;
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
    return new qo({ x1: e, y1: i, x2: s, y2: n, position: a, stock: o });
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
const Td = B({
  fill: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  cohesion: d().default(0),
  area: d().default(0),
  edge: d().default(0),
  alignment: d().default(0),
  exactFit: d().default(0),
  total: d().default(0),
  shapes: pe([
    ge("Shape", { nullable: !0 }),
    ge("Group", { nullable: !0 })
  ]).optional(),
  group: ge("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
  cutDirection: pi.optional()
}).behavior({ clone: "reset" }), Ad = B({
  exactStripFill: d().default(0),
  fill: d().default(0),
  cohesion: d().default(0),
  fenceConsistency: d().default(0),
  similarDimensions: d().default(0),
  compression: d().default(0),
  sameStripBonus: d().default(0),
  aspectRatio: d().optional(),
  total: d().default(0),
  cutDirection: pi,
  myStripDirection: pi.optional(),
  myStripParent: pe([
    ge("Shape", { nullable: !0 }),
    ge("Group", { nullable: !0 })
  ]).optional().describe("Parent strip shape or group for guillotine optimization"),
  myPhase: d().optional()
}).behavior({ clone: "reset" }), Oa = pe([
  Td,
  Ad,
  // Also support the generic object with catchall for backward compatibility
  B({
    cutDirection: pi.optional(),
    myStripParent: pe([
      ge("Shape", { nullable: !0 }),
      ge("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group"),
    myStripDirection: pi.optional()
  }).catchall(d())
]).behavior({ clone: "reset" }), gs = No.extend({
  // Stock lock (shared schema) - original was stockLock: define.array(define.string())
  stockLock: ee(y()).default([]).describe("Stock lock configuration"),
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
    serialize: It() ? "full" : "exclude",
    compress: It() ? "full" : "exclude"
    // Consistent with serialize behavior
  }),
  // Priority and weighting (records) - exact match from original
  priority: Se(y(), d()).default({}).describe("Priority levels for optimization"),
  weighting: Se(y(), d()).optional().describe("Shape weighting for optimization"),
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
  fitsStock: Se(
    y(),
    Se(y(), D())
  ).nullable().default(null).describe("Information about which stocks this shape fits"),
  // Scoring properties
  bestScore: B({
    x: d().nullable().default(null),
    y: d().nullable().default(null),
    rot: pe([me(0), me(1)]).nullable().default(null),
    total: d().nullable().default(null),
    weighting: Se(y(), d()).optional(),
    group: ge("Group", { nullable: !0 }).optional().describe("Associated group when shape is scored as part of a group"),
    score: Oa.optional(),
    point: xe().optional().describe("Associated point for placement"),
    myStripParent: pe([
      ge("Shape", { nullable: !0 }),
      ge("Group", { nullable: !0 })
    ]).optional().describe("Parent strip shape or group for this score"),
    cutDirection: pi.optional(),
    myStripDirection: pi.optional(),
    stock: ge("Stock", {
      nullable: !0,
      description: "Stock reference for this score"
    })
  }).nullable().default(null).optional().describe("Best optimization score achieved").behavior({
    clone: "reset",
    serialize: It() ? "full" : "exclude"
  }),
  // Current optimization score (can be efficiency or guillotine type, reset during cloning)
  score: Oa.nullable().optional().describe("Current optimization score").behavior({
    clone: "reset",
    serialize: It() ? "full" : "exclude"
  }),
  // Minimum spacing
  minSpacing: d().min(0).default(0).describe("Minimum spacing around shape or group")
}), ms = {
  // Include all Rectangle computed properties
  ...Go
  // Placeable doesn't define additional computed properties
};
gs.describe(JSON.stringify({
  name: "Placeable",
  version: "1.0.0",
  extends: "Rectangle",
  computedProperties: Object.keys(ms)
}));
class Wo extends gn {
  // Zod schema for validation and serialization
  static schema = gs;
  static computedProperties = ms;
  constructor(e = {}) {
    if (super(e), !this.guillotineState)
      this.guillotineState = new Qt();
    else if (!(this.guillotineState instanceof Qt)) {
      const i = typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new Qt(i);
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
    if (!this.guillotineState || !(this.guillotineState instanceof Qt)) {
      const e = this.guillotineState && typeof this.guillotineState == "object" && !Array.isArray(this.guillotineState) ? this.guillotineState : {};
      this.guillotineState = new Qt(e);
    }
  }
  /**
   * Override update to ensure guillotineState is properly handled
   */
  update(e) {
    const i = this.guillotineState instanceof Qt ? this.guillotineState : null;
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
    return oe.Placeable;
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
    if (this.added = !1, this.stock = null, this.placementOrder = void 0, this.x = 0, this.y = 0, e || (this.score = null, this.bestScore = null), this.firstShape.isFirstShape = !1, n || (this.firstShape.sampleRotations = []), this.patternMatch = !1, this.fitsStock = null, this.guillotineState instanceof Qt)
      if (i) {
        const o = this.guillotineState.stripShapeBatches;
        this.guillotineState.reset(), o && (this.guillotineState.stripShapeBatches = o);
      } else
        this.guillotineState.reset();
    else
      this.guillotineState = new Qt();
    Je(this) && (s || "group" in this && this.group && (delete this.group.placementOrder, this.group.inGroup = !1, this.group.inUserGroup = !1, this.group.reference = null, this.group.addedAsGroup = "")), Ue(this) && "shapes" in this && Array.isArray(this.shapes) && this.shapes.forEach((o) => {
      "reset" in o && typeof o.reset == "function" && o.reset(e, i, s);
    });
  }
  /**
   * Add shape to stock (placeholder for optimization logic)
   */
  addToStock(e) {
    this.stock = e, this.added = !0, e.used = !0, this.grain = e.grain, !Ue(this) && e?.grain && this.rot && (this.grain = Wt(e.grain));
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1, Je(this) && (this.group.addedAsGroup = "", this.firstShape.isFirstShape = !1), Ue(this) && this.shapes.forEach((e) => {
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
    return !i || hu(i) || !i.stripShapeBatches?.groups || !(e in i.stripShapeBatches.groups) ? !1 : i.stripShapeBatches.groups[e];
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
    return Dt(e) && typeof this.fitsStock?.[e.parentId] < "u" ? this.fitsStock?.[e.parentId]?.[i ?? "any"] === !0 : Yi(this, e, i);
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
    const s = new tt(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new tt(this.x, this.y + this.w);
    if (n.corner = "topLeft", e?.cutType !== "efficiency" && !i)
      return [n, s];
    const o = new tt(this.x, this.y);
    o.corner = "bottomLeft";
    const a = new tt(this.x + this.l, this.y + this.w);
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
    if (this.getType() === oe.Shape && this.identicalTo?.length && (this.parentId === e.parentId || this.identicalTo.includes(e.parentId)))
      return !0;
    if (this.getType() !== oe.Group) {
      if (e.parentId === this.parentId) return !0;
      if (this.getType() === oe.Shape && i && this.parentId !== e.parentId) return !1;
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
    return this.getPerimeterCutVectors().forEach((n) => i.push(new qo({
      stock: Dt(this.stock) ? this.stock : e,
      x1: n.x1,
      x2: n.x2,
      y1: n.y1,
      y2: n.y2,
      position: n.type
    }))), i = i.filter((n) => n.isInsideStock), i;
  }
}
const ii = ["l1", "l2", "w1", "w2"], Od = ["a", "b", "c", "d"], Ct = [...ii, ...Od], dt = ["a", "b"], Ht = {
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
  const i = `fields.${t}`, s = Mt(i);
  if (s === i) {
    const n = Ht[t] || t;
    return It() && !Ht[t] && console.warn(`[field-mappings] No translation or fallback for field: "${t}"`), n;
  }
  return It() && console.log(`[field-mappings] Translated "${t}" -> "${s}"`), s;
}
const Vr = (t, e, i, s, n, o) => {
  const a = je(t, e);
  if (a == null || a === "") return;
  if (typeof a != "string") {
    new ne({
      item: t,
      message: Mt("errors.validation.must_be_string", {
        0: Ht[e]
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
  i.includes(r) || new ne({
    item: t,
    message: Mt("errors.validation.must_be_values", {
      0: Ht[e],
      1: i.join(", ")
    }),
    shouldTranslate: !1,
    field: [[e]],
    index: s !== void 0 ? [s] : null,
    type: n ? "warning" : "error",
    issues: o
  });
};
function Nr(t) {
  return t.filter((e) => e.type === "error");
}
function $d(t, e) {
  return typeof t == "object" && t !== null && e in t;
}
function Fd(t) {
  return $d(t, "issues") && Array.isArray(t.issues);
}
function $a(t, e, i = !1) {
  if (!Fd(t) || !t.issues?.length)
    return !1;
  const s = i ? "warning" : "error";
  return t.issues.filter((a) => a.type === s).some((a) => a.field?.length ? a.field.some((r) => r.every((l, c) => l === Ed(e[c]))) : !1);
}
const Ld = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Ed(t) {
  return Ld[t] ?? t;
}
const Dd = ["banding", "finish", "planing", "info"], Qn = y().refine(
  (t) => t.startsWith("side.") || t.startsWith("face."),
  { message: 'Location must start with "side." or "face."' }
).transform((t) => t), St = pe([
  D(),
  y(),
  Se(y(), pe([D(), y()]))
  // Object-based values: { type: 'oak', thickness: '1mm', test: true }
]), ys = _t.extend({
  // ========== Identity ==========
  type: fe(Dd).optional().describe("Type of extra"),
  enabled: D().default(!0).describe("Whether extra is enabled"),
  // ========== Face/Side mappings (superset - each extra uses what it needs) ==========
  // Face values (front/back) - partial record to allow any subset of faces
  faces: B({
    a: St.optional(),
    b: St.optional()
  }).optional().describe("Partial mapping of face keys to extra values"),
  // Side values (edges) - partial record to allow any subset of sides
  sides: B({
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
Se(
  fe(["a", "b"]),
  St
);
Se(
  fe(["l1", "l2", "w1", "w2", "a", "b", "c", "d"]),
  St
);
const Gr = B({
  min: d().optional().describe("Minimum value"),
  max: d().optional().describe("Maximum value"),
  message: y().optional().describe("Custom error message")
});
B({
  scope: fe(["face", "side"]),
  key: y(),
  // Face or Side key
  original: y()
  // Original ExtraLocation string
});
const Rd = B({
  location: y().describe("Location identifier (e.g., face.a, side.l1)"),
  properties: Se(y(), Gr).optional(),
  disabledMessage: y().optional().describe("Message when location is disabled")
}), Md = B({
  global: Se(y(), Gr).optional(),
  locations: ee(Rd).optional().describe("Location-specific constraints"),
  defaultMessage: y().optional().describe("Default message when constraints not met")
});
B({
  scope: ee(fe(["faces", "sides"])).describe("Scopes this extra type supports"),
  faces: ee(lo()).optional().describe("Available face locations"),
  sides: ee(lo()).optional().describe("Available side locations"),
  constraints: Md.optional()
});
const zr = ys, _d = {
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
class ls extends He {
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
class Et extends ls {
  // Required: Define schema and computed properties for SchemaClass
  static schema = zr;
  static computedProperties = {
    ...ls.computedProperties,
    ..._d
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
      ii.includes(s) || i.push(new ne({
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
    for (const i of ii)
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
    return new Et(e);
  }
  /**
   * Create empty banding
   */
  static empty() {
    return new Et();
  }
  /**
   * Create with all sides
   */
  static allSides(e = !0) {
    const i = new Et();
    return i.setAllSides(e), i;
  }
}
const Bd = _t.extend({
  // Identity
  id: y().optional().describe("Unique identifier for the extras container"),
  // Individual extras - using ref for proper typing
  // Override default reference behavior to serialize full data for proper __entityType markers
  banding: ge("Banding", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Edge banding configuration"),
  finish: ge("Finish", {
    nullable: !0,
    fieldBehavior: {
      serialize: "full",
      // Serialize full object with __entityType
      compress: "full",
      clone: "copy"
    }
  }).describe("Surface finish configuration"),
  planing: ge("Planing", {
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
}), jd = {
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
}, qr = ys, Vd = {
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
class yt extends ls {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = qr;
  static computedProperties = Vd;
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
      s.includes(n) || i.push(new ne({
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
      for (const s of dt)
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
      for (const e of dt)
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
    for (const i of dt)
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
const Wr = ys, Nd = {
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
class fi extends ls {
  // Properties are dynamically created from schema via SchemaClass
  // Type declarations are auto-generated in .properties.ts file
  // Static schema reference for automatic updates
  static schema = Wr;
  static computedProperties = Nd;
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
        s.includes(n) || i.push(new ne({
          message: `Invalid planing face: ${n}. Valid faces are 'a' (front) and 'b' (back)`,
          type: "warning"
        }));
    }
    if (this.sides) {
      const s = ["a", "b", "c", "d", "l1", "l2", "w1", "w2"];
      for (const n in this.sides)
        s.includes(n) || i.push(new ne({
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
    return this.faces && Object.keys(this.faces).length > 0 && e < 15 && i.push(new ne({
      message: `Face planing requires at least 15mm thickness (current: ${e}mm)`,
      type: "error"
    })), this.hasAnyPlaning && e < 10 && i.push(new ne({
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
      for (const s of dt)
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
      for (const e of dt)
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
    for (const i of dt)
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
      for (const o of dt)
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
      for (const o of Ct)
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
    return new fi(e);
  }
  /**
   * Create empty planing
   */
  static empty() {
    return new fi();
  }
  /**
   * Create with all faces and sides
   */
  static full(e = !0) {
    const i = new fi();
    return i.setAllFaces(e), i.setAllSides(e), i;
  }
  /**
   * Create with faces only
   */
  static facesOnly(e = !0) {
    const i = new fi();
    return i.setAllFaces(e), i;
  }
  /**
   * Create with sides only
   */
  static sidesOnly(e = !0) {
    const i = new fi();
    return i.setAllSides(e), i;
  }
}
class qe extends He {
  // Zod schema for validation and serialization
  static schema = Bd;
  static computedProperties = jd;
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
    return oe.Extras;
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
    if (ri(this.banding)) {
      const s = this.banding.validate(e);
      i.push(...s);
    }
    if (Xt(this.finish)) {
      const s = this.finish.validate(e);
      i.push(...s);
    }
    if (Jt(this.planing)) {
      const s = this.planing.validate(e);
      i.push(...s);
    }
    if (Jt(this.planing) && Xt(this.finish) && e?.t) {
      const s = this.planing.getTotalFacePlaning();
      s > 0 && e.t - s < 5 && i.push(new ne({
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
    return ri(this.banding) && (i += this.banding.getCost(e)), Xt(this.finish) && (i += this.finish.getCost(e)), Jt(this.planing) && (i += this.planing.getCost(e)), i;
  }
  /**
   * Get human-readable description of all extras
   */
  getDescription() {
    const e = [];
    return ri(this.banding) && this.banding.hasValues() && e.push(this.banding.getDescription()), Xt(this.finish) && this.finish.hasValues() && e.push(this.finish.getDescription()), Jt(this.planing) && this.planing.hasValues() && e.push(this.planing.getDescription()), e.length > 0 ? e.join("; ") : "No extras";
  }
  /**
   * Check if any extras are applied
   */
  hasExtras() {
    return !!(ri(this.banding) && this.banding.hasValues() || Xt(this.finish) && this.finish.hasValues() || Jt(this.planing) && this.planing.hasValues());
  }
  /**
   * Clear all extras
   */
  clear() {
    ri(this.banding) && this.banding.clear(), Xt(this.finish) && this.finish.clear(), Jt(this.planing) && this.planing.clear();
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
    e ? e instanceof Et ? this.banding = e : this.banding = new Et(e) : this.banding = void 0;
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
    e ? e instanceof fi ? this.planing = e : this.planing = new fi(e) : this.planing = void 0;
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
    return !!(ri(this.banding) && this.banding.isApplicable(e) || Xt(this.finish) && this.finish.isApplicable(e) || Jt(this.planing) && this.planing.isApplicable(e));
  }
  /**
   * Get summary of active extras
   */
  getSummary() {
    return {
      hasBanding: ri(this.banding) && this.banding.hasValues() || !1,
      hasFinish: Xt(this.finish) && this.finish.hasValues() || !1,
      hasPlaning: Jt(this.planing) && this.planing.hasValues() || !1,
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
    return s ? ri(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" ? Object.keys(s.sides).some((n) => {
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
    return s ? Xt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.faces && typeof s.faces == "object" ? Object.keys(s.faces).some((n) => {
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
    return s ? Jt(s) && typeof s.hasValues == "function" ? s.hasValues() : s.sides && typeof s.sides == "object" && Object.keys(s.sides).some((o) => {
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
    return s ? gu(s) && typeof s.hasValues == "function" ? s.hasValues() : s.images && Array.isArray(s.images) ? s.images.length > 0 : !1 : !1;
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
const Gd = B({
  id: y().optional(),
  url: y().optional(),
  size: d().optional(),
  mimeType: y().optional(),
  name: y().optional(),
  width: d().optional(),
  height: d().optional()
}), zd = ys.extend({
  // ImageUpload specific properties
  images: ee(Gd).default([]).describe("Array of uploaded images"),
  maxImages: d().default(5).describe("Maximum number of images allowed"),
  allowedTypes: ee(y()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: d().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: y().optional().describe("Description of uploaded images"),
  tags: ee(y()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), qd = {
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
class Lw extends ls {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = zd;
  static computedProperties = qd;
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
    if (this.images && this.images.length > this.maxImages && i.push(new ne({
      item: e,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let s = 0; s < this.images.length; s++) {
        const n = this.images[s];
        if (n.url || i.push(new ne({
          message: `Image ${s + 1} is missing URL`,
          type: "error"
        })), n.mimeType && !this.allowedTypes.includes(n.mimeType) && i.push(new ne({
          message: `Image ${s + 1} has unsupported type: ${n.mimeType}`,
          type: "warning"
        })), n.size && n.size > this.maxSizeBytes) {
          const o = (n.size / 1048576).toFixed(2), a = (this.maxSizeBytes / 1048576).toFixed(2);
          i.push(new ne({
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
const Wd = {
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
}, Hd = {
  cacheResults: !0
};
let Hr;
Hr = gr({}, Wd, Hd);
let ft = Hr;
function Ud() {
  if (ft.guillotine.secondPass && !ft.guillotine.strips.rearrange)
    throw new Error("config.guillotine.secondPass requires config.guillotine.strips.rearrange to be enabled");
  if (ft.captureProfile && ft.runTests)
    throw new Error("config.captureProfile and config.runTests should not be both enabled");
}
Ud();
function Ew(t, e = null) {
  if (!t) return ft;
  const i = Yd(t, e);
  if (!i) return ft;
  const s = gr({}, ft, i);
  return console.log(`[CONFIG] custom config applied for ${t?.username}`), s;
}
function Yd(t, e = null) {
  if (!t || !t?.config) return null;
  switch (t.id) {
    //Glassense Kolu
    case "662a2f8ad28745b63665e68a": {
      const i = "shapeList" in e ? e.shapeList : e.inputShapes, s = i ? i.reduce((n, o) => n + (o.q || 0), 0) : 0;
      if (e) if (s <= 80) {
        const n = { ...t.config };
        return n.groups.guillotine.strips = ft.groups.guillotine.strips, n.groups.guillotine.segments = ft.groups.guillotine.segments, n.sample.guillotine = 4, n.guillotine.stripShapes.iterations = ft.guillotine.stripShapes.iterations, n;
      } else
        return t.config;
      else return t.config;
    }
  }
  return t.config;
}
function Dw(t, e, i) {
  return Zc(t, e, i);
}
try {
  typeof _n < "u" && _n && (_n.showDiff = !0);
} catch (t) {
  console.warn("Error accessing chaiConfig, skipping configuration:", t);
}
const Fa = mr("tests");
mr("timers");
let nt;
if (typeof ya == "function")
  nt = ya;
else {
  console.warn("Using dummy 'expect' function (chai not found/aliased)");
  const t = new Proxy({}, { get: () => () => t });
  nt = () => t;
}
function xt(t = [], e = null) {
  if (!t?.length) return;
  if (It() && ft && ft.runTests)
    for (const s of t) {
      if (!s || typeof s != "function") {
        console.error("Invalid test function provided:", s);
        continue;
      }
      try {
        s();
      } catch (n) {
        const o = n instanceof Error ? n.message : String(n);
        if (e ? Fa(e, o) : Fa(o), ft && ft.throwErrorsOnFailedTests) throw n;
      }
    }
}
function Zs(t) {
  return t && typeof t == "object" && "area" in t;
}
const uo = {
  missingProperty: (t, e) => `[Sorting Warning] Missing property "${t}" in ${e}`,
  missingMethod: (t, e) => `[Sorting Warning] Missing method "${t}" in ${e}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
}, Ze = (t, e, i) => e in t ? t[e] : (console.warn(uo.missingProperty(String(e), i)), null), As = (t, e) => (i, s) => {
  const n = t(i, s);
  return n !== 0 ? n : e(i, s);
}, Di = (t, e) => {
  if (Zs(t) && Zs(e))
    return t.area < e.area ? -1 : t.area > e.area ? 1 : 0;
  const i = "l" in t && "w" in t ? Number(t.l) * Number(t.w) : 0, s = "l" in e && "w" in e ? Number(e.l) * Number(e.w) : 0;
  return i < s ? -1 : i > s ? 1 : 0;
}, Ft = (t, e) => {
  const i = Ze(t, "id", "first item"), s = Ze(e, "id", "second item");
  if (i === null || s === null || i === void 0 || s === void 0) return 0;
  const n = i.toString().split("."), o = s.toString().split(".");
  return n[0] !== o[0] ? parseInt(n[0]) - parseInt(o[0]) : parseInt(n[1]) - parseInt(o[1]);
};
function Nt(t) {
  const e = Array.isArray(t[0]) ? t.map(([i, s]) => ({ key: i, direction: s })) : t;
  return (i, s) => {
    for (const { key: n, direction: o } of e) {
      const a = Ze(i, n, "first item"), r = Ze(s, n, "second item");
      if (!(a === null || r === null) && a !== r)
        return o === "desc" ? a < r ? 1 : -1 : a < r ? -1 : 1;
    }
    return 0;
  };
}
function Ur(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s > n ? i : e;
  }) : null;
}
function Kd(t) {
  return t.length ? t.reduce((e, i) => {
    let s = 0, n = 0;
    return "area" in i && typeof i.area == "number" ? s = i.area : "l" in i && "w" in i && (s = Number(i.l) * Number(i.w)), "area" in e && typeof e.area == "number" ? n = e.area : "l" in e && "w" in e && (n = Number(e.l) * Number(e.w)), s < n ? i : e;
  }) : null;
}
const Ut = {
  // Dimension-based sorts
  WDLD: Nt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: Nt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: Nt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: Nt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: Nt([["w", "desc"]]),
  LD: Nt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: As(
    Nt([["l", "desc"]]),
    Ft
  ),
  WDIDA: As(
    Nt([["w", "desc"]]),
    Ft
  ),
  // Area-based sorts
  AD: (t, e) => -Di(t, e),
  AA: Di,
  AAID: As(
    Di,
    Ft
  ),
  ADID: As(
    (t, e) => -Di(t, e),
    Ft
  ),
  // ID sorts
  ID: Ft,
  IDDesc: (t, e) => -Ft(t, e),
  StockID: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    return !i || !s ? 0 : Ft(i, s);
  },
  StockIDAD: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Ft(i, s);
    return n !== 0 ? n : -Di(t, e);
  },
  // Position sorts
  YX: Nt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: Nt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (t, e) => {
    const i = Ze(t, "placementOrder", "first item") ?? 0, s = Ze(e, "placementOrder", "second item") ?? 0;
    return i - s;
  },
  typePlacementOrder: (t, e) => {
    const i = Ze(t, "offcut", "first item"), s = Ze(e, "offcut", "second item"), n = Ze(t, "placementOrder", "first item") ?? 0, o = Ze(e, "placementOrder", "second item") ?? 0;
    return i && !s ? 1 : !i && s ? -1 : n - o;
  },
  typeID: (t, e) => {
    const i = Ze(t, "offcut", "first item"), s = Ze(e, "offcut", "second item");
    return i && !s ? 1 : !i && s ? -1 : Ft(t, e);
  },
  stockIDTypePlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i || !s) return 0;
    const n = Ft(i, s);
    if (n !== 0) return n;
    const o = Ze(t, "offcut", "first item"), a = Ze(e, "offcut", "second item");
    if (o && !a) return 1;
    if (!o && a) return -1;
    const r = Ze(t, "placementOrder", "first item") ?? 0, l = Ze(e, "placementOrder", "second item") ?? 0;
    return r - l;
  },
  offcutPlacementOrder: (t, e) => {
    const i = "stock" in t ? t.stock : null, s = "stock" in e ? e.stock : null;
    if (!i?.id || !s?.id) return 0;
    const n = Ft(i, s);
    if (n !== 0) return n;
    if ("placementOrder" in t && "placementOrder" in e) {
      const o = Ze(t, "placementOrder", "first item") ?? 0, a = Ze(e, "placementOrder", "second item") ?? 0;
      return o - a;
    }
    return 0;
  },
  groupPlacementOrder: (t, e) => {
    const i = Ze(t, "placementOrder", "first item") ?? 0, s = Ze(e, "placementOrder", "second item") ?? 0, n = i - s;
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
    if (Zs(t) && Zs(e) && t.aspect && e.aspect)
      return e.aspect - t.aspect;
    if (!("l" in t) || !("w" in t) || !("l" in e) || !("w" in e))
      return console.warn(uo.missingAspect), 0;
    const i = Math.max(Number(t.l), Number(t.w)) / Math.min(Number(t.l), Number(t.w));
    return Math.max(Number(e.l), Number(e.w)) / Math.min(Number(e.l), Number(e.w)) - i;
  },
  fillThenArea(t) {
    return (e, i) => !("l" in e) || !("w" in e) || !("l" in i) || !("w" in i) ? (console.warn(uo.missingLongSide), 0) : i[t] === e[t] ? -Di(e, i) : parseFloat(String(i[t])) - parseFloat(String(e[t]));
  },
  // Utility functions
  getLargest: Ur,
  getSmallest: Kd
};
function Rw(t, e) {
  return Math.random() * (e - t) + t;
}
function Mw(t, e, i = "x") {
  if (!e) return !1;
  const s = i === "x" ? "l" : "w";
  return !!(ae.greaterThanOrEqualTo(t[i], e[i]) && ae.lessThanOrEqualTo(t[i] + t[s], e[i] + e[s]));
}
function _w(t, e, i = "x") {
  if (!e) return !1;
  const s = Xd(i);
  return !!(ae.greaterThanOrEqualTo(t[i], e[i]) && ae.lessThan(t[i], e[i] + e[s]));
}
function Bw(t) {
  return t === "l" ? "x" : t === "w" ? "y" : null;
}
function Zd(t) {
  return t === "horizontal" ? "x" : t === "vertical" ? "y" : null;
}
function La(t) {
  return t === "horizontal" ? "l" : t === "vertical" ? "w" : null;
}
function Xd(t) {
  return t === "x" ? "l" : t === "y" ? "w" : null;
}
const Jd = Gu;
function jw(t, e = null) {
  return e ? t.filter((i) => i.added && i?.stock?.id === e.id) : t.filter((i) => i.added);
}
function Ea(t, e) {
  if (!ke(t.stockLock) || Array.isArray(t.stockLock) && !t?.stockLock?.length)
    return !0;
  if (Array.isArray(t.stockLock)) {
    if (t.stockLock.includes(e.parentId)) return !0;
  } else if (t.stockLock === e.parentId) return !0;
  return !1;
}
function Vw(t, e = null, i = "filter", s = !1) {
  if (!t?.length) return [];
  function n(o) {
    if (s === !0) return o.added;
    if (s === !1) return !o.added;
    if (s === null) return !0;
  }
  if (e) {
    if (e?.saw?.stockType === "linear")
      return t[i]((o) => n(o) && Ea(o, e) && o.l <= e.l);
    if (e?.saw?.stockType !== "roll")
      return e && Dt(e) ? t[i]((o) => n(o) && Ea(o, e) && o.willItFit(e)) : t[i]((o) => n(o) && o.willItFit(e));
  }
  return t[i]((o) => n(o));
}
function Nw(t, e = !1, i = !1) {
  if (!t?.length) return [];
  let s = t;
  if (e !== null && (s = t.filter((r) => r.added === e), !s.length))
    return [];
  const n = /* @__PURE__ */ new Map(), o = i ? /* @__PURE__ */ new Map() : null, a = [];
  for (const r of s) {
    let l;
    if (Je(r))
      l = r.parentId;
    else if (Ue(r))
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
function Qd(t, e, i = null) {
  const s = /* @__PURE__ */ new Map();
  for (let n = t.length; n--; ) {
    const o = t[n], a = _r(o, e.getStock), r = o.shortSide, l = o.longSide;
    a.forEach((c) => {
      if (!o.willItFit(e, c)) return;
      let u;
      !i || i === "l" ? u = c === 0 ? l : r : i === "w" && (u = c === 0 ? r : l), u && s.set(u, s.has(u) ? s.get(u) + 1 : 1);
    });
  }
  return s;
}
function Gw(t, e = null) {
  const i = t.filter((o) => !o?.unusable && (e === null || o.used === e)), s = /* @__PURE__ */ new Map();
  for (const o of i) {
    const a = o.parentId;
    s.has(a) || s.set(a, o);
  }
  return Array.from(s.values());
}
function zw(t, e = null) {
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
function qw(t, e, i) {
  const s = t.filter((o) => o[e] === 0), n = e === "y" ? "l" : "w";
  return s.reduce((o, a, r) => r > 0 ? o + a[n] + i : o + a[n], 0);
}
function ef(t, e) {
  const i = e === "x" ? "l" : "w", s = Jd(e);
  if (!t?.length) return null;
  const n = t.reduce((a, r) => a[e] + a[i] > r[e] + r[i] ? a : r);
  return t.filter((a) => a[e] === n[e] && a[i] === n[i]).sort((a, r) => a[s] - r[s])[0];
}
function tf(t, e, i) {
  if (e.length <= 1) return t;
  const s = of(e, i), n = t.reduce((r, l) => (r[l.id] = af(l, s), r), {}), o = Math.min(...Object.values(n));
  return t.filter((r) => !r.added && n[r.id] === o);
}
function sf(t, e) {
  const i = e.parentId;
  return t.filter((s) => s.parentId === i).length;
}
function nf(t, e) {
  const i = e.parentId, s = t.filter((n) => n.used && n.parentId === i).length;
  return e.q - s;
}
function Ww(t, e) {
  return sf(t, e) < e.q;
}
function of(t, e) {
  const i = {};
  return t.forEach((s) => i[s.parentId] = nf(e, s)), i;
}
function af(t, e) {
  return t.stockLock.reduce((s, n) => s + (e?.[n] ? e[n] : 0), 0);
}
function rf(t, e, i = !1) {
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
function Hw(t, e) {
  return t.filter((i) => i.l >= e && i.w >= e);
}
function lf(t, e) {
  if (t.stock?.autoId !== e.stock?.autoId) return !1;
  const i = t.x, s = t.x + t.l, n = t.y, o = t.y + t.w, a = e.x, r = e.x + e.l, l = e.y, c = e.y + e.w;
  return !(s <= a || // shape1 is completely to the left of shape2
  r <= i || // shape2 is completely to the left of shape1
  o <= l || // shape1 is completely below shape2
  c <= n);
}
function Uw(t) {
  const e = [], i = t.filter((s) => s.added);
  for (let s = 0; s < i.length; s++)
    for (let n = s + 1; n < i.length; n++)
      lf(i[s], i[n]) && e.push({
        shape1: i[s],
        shape2: i[n]
      });
  return e;
}
function Yw(t) {
  t.sort(Ut.groupPlacementOrder);
  for (let e = 0; e < t.length; e++)
    t[e].placementOrder = e;
}
function Kw(t, e) {
  e && t && (e.score = t.score, e.duplicatePattern = t.id);
}
const Yr = ee(y()).default([]).describe("Parent IDs of stock(s) this shape is locked to"), cf = fe(["l", "w"]).nullable().default(null), Kr = pe([
  me("l"),
  me("w"),
  Rt()
]).default(null), uf = B({
  stockId: y().optional(),
  material: y().optional(),
  thickness: d().optional(),
  grain: Ui.optional()
}).describe("Which stock(s) this shape is a match for "), df = Se(y(), xe()).default({});
Yr.describe("IDs of stocks this shape is locked to");
const ff = Kr.describe("Direction that should face up");
B({
  /**
   * Up direction - Direction that should face up during optimization
   */
  upDirection: ff
});
const hf = B({
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
  addedAsGroup: y().default("").describe("ID of group this was added as part of")
}).default({
  inUserGroup: !1,
  inGroup: !1,
  placementOrder: void 0,
  reference: null,
  addedAsGroup: ""
}).describe("Group metadata and reference"), fo = gs.extend({
  // ========== Group Metadata ==========
  // Nested object containing all group-related properties
  group: hf,
  // ========== Identity ==========
  // Unique identifier for referencing items (required for shapes)
  id: y().default("").describe("Unique identifier for referencing items"),
  // Array of IDs this shape is identical to
  identicalTo: $r,
  // Whether this is a duplicate
  duplicate: D().default(!1).describe("Whether this is a duplicate shape"),
  // ========== Orientation ==========
  // Direction that should face up during optimization
  upDirection: cf.describe("Direction that should face up"),
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
}), Zr = {
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
fo.describe(JSON.stringify({
  name: "Shape",
  description: "Shape to be cut from stock material",
  version: "1.0.0",
  extends: "Placeable",
  computedProperties: Object.keys(Zr)
}));
class bn extends Wo {
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
  static schema = fo;
  static computedProperties = Zr;
  static defaults = fo.parse({});
  constructor(e = {}) {
    super(e);
  }
  /**
    * Get entity type
    */
  getType() {
    return oe.Shape;
  }
  /**
    * Create shape with live objects
    */
  static create(e) {
    const i = new bn(e.data);
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
const Xr = ["horizontal", "vertical"], Jr = ["auto", "user", "strip", "firstShape"], Ho = fe(Xr).optional(), pf = B({
  x: d(),
  y: d(),
  autoId: y().optional(),
  rot: jo
}), gf = gs.extend({
  // Override quantity - always 1 for groups
  q: d().min(1).max(1).int().default(1),
  // Groups have fixed orientation
  preventAutoRotation: D().default(!0),
  // Group-specific fields
  shapes: Le("Shape").default([]),
  direction: Ho,
  container: pe([
    ge("Segment"),
    ge("Stock")
  ]).behavior({ compress: "exclude" }),
  positions: ee(pf).default([]),
  type: fe(Jr).default("auto"),
  efficiency: d().min(0).max(100).default(0),
  groupLength: d().min(0).default(0),
  groupWidth: d().min(0).default(0),
  outOfBounds: D().default(!1),
  collision: D().default(!1),
  counter: d().int().min(0).default(0),
  inputId: y().optional()
}), mf = {
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
  id: y(),
  x: d(),
  y: d(),
  shapes: Le("Shape"),
  direction: fe(Xr),
  type: fe(Jr),
  container: pe([
    ge("Segment"),
    ge("Stock")
  ]).optional()
});
class vn extends Wo {
  // Required: Define schema and computed properties for SchemaClass
  static schema = gf;
  static computedProperties = mf;
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
    return this.type === "user" ? oe.UserGroup : this.type === "strip" ? oe.StripGroup : this.type === "firstShape" ? oe.FirstShapeGroup : oe.Group;
  }
  /**
    * Initialize shapes array with optional context for reference resolution
    */
  initShapes(e, i) {
    return e.map((s) => {
      if (!Je(s) && !mu(s))
        throw console.log(s), new Error("[GROUP] attempted to init a group with an item other than a shape");
      if (Je(s))
        return s.group.reference = this, s.group.inGroup = !0, s;
      if (i && i.shapeList && s) {
        const o = i.shapeList.find((a) => a.autoId === s.autoId);
        if (o)
          return o.group.reference = this, o.group.inGroup = !0, o;
      }
      const n = i ? { ...s, __context: i } : s;
      return new bn(n);
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
    const i = { ...e.data, shapes: e.shapes }, s = new vn(i);
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
        u && u.rot !== c && rt(u, c);
      }
    }
    this.positions = [], this.type !== "user" && this.sortShapes();
    let i = 0;
    const s = Zd(this.direction), n = La(this.direction);
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
    const a = Wt(n), r = this.shapes.reduce(
      (l, c) => {
        const u = e.get(c.autoId);
        let f;
        return u !== void 0 && u !== c.rot ? f = a === "l" ? c.w : c.l : f = c[a], f > l ? f : l;
      },
      0
    );
    if (this.groupWidth = r, It()) {
      const l = this.shapes.slice(0, -1).reduce((f, h) => f + h.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, h) => f + h[n], 0) + l;
      xt([
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
    const e = La(this.direction), i = Wt(e);
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
const yf = (t, e) => Ce(t, e), Qr = () => Ce(
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
), bf = () => Ce(
  Lr,
  {
    label: "fields.orientationLock",
    group: "properties",
    options: [
      { value: "", label: "fields.orientationLock.free" },
      { value: "l", label: "fields.orientationLock.length" },
      { value: "w", label: "fields.orientationLock.width" }
    ]
  }
), eo = (t) => Ce(
  Ti(
    (e) => e === "" || e === null ? null : e,
    pe([
      // Remove custom messages - let the error map handle translation with TOO_SMALL key
      t.allowZero ? d().min(0) : d().gt(0),
      y(),
      Rt()
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
), vf = () => Ce(
  Ti(
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
), wf = (t) => Ce(
  y().max(200).optional().transform((e) => e ? e.trim().toUpperCase() : ""),
  {
    label: "fields.name",
    placeholder: t?.placeholder || "",
    group: "general"
  }
), Sf = () => Ce(
  y().max(200).optional().transform((t) => t ? t.trim().toUpperCase() : ""),
  {
    label: "fields.material",
    placeholder: "fields.material",
    group: "properties"
  }
), xf = () => Ce(
  pe([
    d().min(0),
    y()
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
), kf = () => Ce(
  Xc().max(500).transform((t) => t.replace(/,/g, " ")).optional(),
  {
    label: "fields.notes",
    placeholder: "fields.notes",
    group: "general"
  }
), If = (t) => Ce(
  D().default(!1),
  t
), Cf = (t, e) => Ce(
  fe(t),
  e
), ti = {
  field: Ce,
  boolean: If,
  enum: Cf,
  custom: yf
}, Pf = B({
  // Entity type added during serialization by toData() method
  // Used for automatic class recreation during deserialization
  __entityType: y().optional().describe("Entity type added during serialization by AutoSerializable.toData()"),
  // Reference marker for reference-based recreation
  // Used when objects reference each other
  __ref: y().optional().describe("Reference marker for object recreation")
}), Tf = B({
  // ========== Selection State (excluded from compression) ==========
  selected: ti.boolean({
    label: "fields.selected",
    description: "Whether item is selected for multi-edit"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  multiEdit: ti.boolean({
    label: "fields.multiEdit",
    description: "Whether this is the multi-edit item"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  readonly: ti.boolean({
    label: "fields.readonly",
    description: "Whether input is readonly"
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Validation State (excluded from compression and serialization) ==========
  isNew: ti.boolean({
    label: "fields.isNew",
    description: "Whether this is a newly created item that should skip validation until first user interaction",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" })
}), Af = Ti(
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
      pe([d(), y()]).default(0),
      { label: "fields.l1", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    l2: Ce(
      pe([d(), y()]).default(0),
      { label: "fields.l2", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    w1: Ce(
      pe([d(), y()]).default(0),
      { label: "fields.w1", group: "trim", allowZero: !0, min: 0, required: !1 }
    ),
    w2: Ce(
      pe([d(), y()]).default(0),
      { label: "fields.w2", group: "trim", allowZero: !0, min: 0, required: !1 }
    )
  }).default({ l1: 0, l2: 0, w1: 0, w2: 0 })
), Of = B({
  // ========== Identity ==========
  id: Or,
  index: d().int().min(0).optional(),
  // ========== Dimensions ==========
  // Input dimensions can be strings (for fractions) or numbers
  l: eo({
    label: "fields.l",
    placeholder: "fields.l"
  }),
  w: eo({
    label: "fields.w",
    placeholder: "fields.w"
  }),
  t: eo({
    label: "fields.t",
    placeholder: "fields.t"
  }),
  q: vf(),
  // ========== Material Properties ==========
  // Input name with uppercase transform
  name: wf(),
  material: Sf(),
  // ========== Cost ==========
  cost: xf(),
  // ========== Trim Configuration ==========
  trim: Af,
  // ========== Rotation (Runtime) ==========
  rot: jo.default(0),
  // ========== Flags ==========
  preventAutoRotation: ti.boolean({
    label: "fields.preventAutoRotation",
    description: "Prevent automatic rotation during optimization",
    group: "options"
  }),
  offcut: ti.boolean({
    label: "fields.offcut",
    description: "Mark as offcut material",
    group: "options"
  }),
  processed: ti.boolean({
    label: "fields.processed",
    description: "Has been processed",
    hidden: !0
  }).behavior({ compress: "exclude", serialize: "exclude" }),
  // ========== Notes ==========
  notes: kf()
}), Xs = B({
  ...Pf.shape,
  // System properties from AutoSerializable
  ..._t.shape,
  ...Of.shape,
  // Core business fields
  ...Tf.shape,
  // Input-specific UI fields
  // Override id with strict validation for input shapes/stock (allows blank)
  id: y().regex(/^(\d+\.\d+)?$/, 'ID must be blank or in format "1.0" (e.g., "1.0", "2.1")').default("").describe('Structured identifier for input shapes/stock in format 1.0 (e.g., "1.0") or blank')
}), Uo = {
  // Include validation computed properties (isValid)
  ...si,
  // Get the longer side dimension
  longSide: {
    compute: (t) => {
      const e = H({ v: t.l }) ?? 0, i = H({ v: t.w }) ?? 0;
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
      const e = H({ v: t.l }) ?? 0, i = H({ v: t.w }) ?? 0;
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
      const e = H({ v: t.l }) ?? 0, i = H({ v: t.w }) ?? 0;
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
function $f(t, e, i) {
  if (i) {
    if (typeof t == "number")
      return isNaN(t) ? null : t;
    if (!t) return null;
    const s = Number(t);
    return isNaN(s) ? null : s;
  } else {
    const s = t ? H({ v: t, nf: e }) : null;
    if (typeof s == "string") {
      const n = Number(s);
      return isNaN(n) ? null : n;
    }
    return s;
  }
}
function Ff(t, e, i, s = !1) {
  const n = s ? Object.fromEntries(ii.map((r) => [r, 0])) : { l1: 0, l2: 0, w1: 0, w2: 0 };
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
    l != null && (n[r] = H({ v: l, nf: e }));
  }), n;
}
const Lf = ["efficiency", "guillotine", "beam", "none"], ho = ["l", "w", "flex", "none"], Ef = ["efficiency", "time"], Df = ["l", "w"], el = ["efficiency", "smallest"], Rf = ["dimensions", "identical", "none"], Js = ["sheet", "linear", "roll"], wn = pe([
  d().int().positive(),
  Rt(),
  Jc()
]).transform((t) => t ?? 100).describe("Maximum stack height for beam saw stacking"), Sn = fe(Lf).nullable().optional().transform((t) => t === null ? void 0 : t), xn = fe(ho).nullable().optional().transform((t) => t === null ? void 0 : t), Yo = fe(el).default("efficiency").describe("Method for selecting stocks"), Ko = fe(Rf).default("identical").describe("How to stack identical parts"), kn = B({
  strategy: fe(Ef).default("efficiency"),
  maxPhase: d().int().min(0).max(10).default(0),
  headCuts: D().default(!1)
}).default({
  strategy: "efficiency",
  maxPhase: 0,
  headCuts: !1
}), Zo = B({
  primaryCompression: fe(Df).default("w")
}).default({
  primaryCompression: "w"
});
B({
  stockType: fn,
  /**
   * Stack height - Maximum stack height
   */
  stackHeight: wn,
  /**
   * Cut type - Type of cutting algorithm
   */
  cutType: Sn,
  /**
   * Cut preference - Preferred cutting direction
   */
  cutPreference: xn,
  /**
   * Guillotine options - Configuration for guillotine cutting
   */
  guillotineOptions: kn,
  /**
   * Efficiency options - Configuration for efficiency optimization
   */
  efficiencyOptions: Zo,
  /**
   * Stock selection - Method for selecting stocks
   */
  stockSelection: Yo,
  /**
   * Stacking mode - How to stack identical parts
   */
  stackingMode: Ko
});
const Xo = d().min(0).default(0), Jo = d().min(0).default(0), Qs = d().min(0).default(0), Mf = B({
  dimension: Jo,
  minSpacing: Qs
});
function po(t) {
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
function go(t, e) {
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
const _f = Ce(
  Sn,
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
), Bf = Ce(
  xn,
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
), jf = Ce(
  Yo,
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
), Vf = Ce(
  Ko,
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
), Nf = Ce(
  kn,
  {
    label: "fields.guillotineOptions",
    group: "guillotine",
    order: 1,
    type: "object"
  }
), Gf = Ce(
  Zo,
  {
    label: "fields.efficiencyOptions",
    group: "efficiency",
    order: 1,
    type: "object"
  }
), en = B({
  ..._t.shape,
  // ========== Stock Type ==========
  stockType: Ce(
    fe([...Js]).default("sheet"),
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
    pe([
      Xo,
      y().default("0")
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
    wn,
    {
      label: "fields.stackHeight",
      group: "stacking",
      order: 1,
      step: 1,
      info: "If your saw supports cutting multiple stock simultaneously, set the maximum total allowed height."
    }
  ),
  cutType: _f,
  cutPreference: Bf,
  // ========== Guillotine Options ==========
  guillotineOptions: Nf,
  // ========== Efficiency Options ==========
  efficiencyOptions: Gf,
  // ========== General Options ==========
  options: B({
    stockSelection: jf,
    minSpacing: pe([
      y(),
      Qs
    ]),
    stackingMode: Vf,
    minSpacingDimension: B({
      dimension: pe([
        y(),
        Jo,
        Rt()
      ]).optional(),
      minSpacing: pe([
        y(),
        Qs,
        Rt()
      ]).optional()
    }).optional()
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical"
  })
}), zf = {
  // Include validation computed properties (isValid)
  ...si,
  // Get valid cut types for current stock type
  validCutTypes: {
    compute: (t) => po(t.stockType),
    metadata: {
      cache: !0,
      dependencies: ["stockType"],
      description: "Valid cut types for current stock type",
      returnType: "CutType[]"
    }
  },
  // Get valid cut preferences for current stock type and cut type
  validCutPreferences: {
    compute: (t) => go(t.stockType, t.cutType),
    metadata: {
      cache: !0,
      dependencies: ["stockType", "cutType"],
      description: "Valid cut preferences for current stock type and cut type",
      returnType: "CutPreference[]"
    }
  }
}, as = Xs.extend({
  // Add grain field for shapes
  //[] is grain needed for inputs?
  grain: Qr(),
  // Add orientationLock with input-specific transform
  orientationLock: bf(),
  // ========== Shared Shape Properties ==========
  upDirection: Ce(
    Kr,
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
    Yr,
    { label: "fields.stockLock" }
  ),
  // ========== Stock Matching ==========
  stockMatch: uf.nullable().optional(),
  // ========== Custom Data ==========
  customData: Ce(
    df,
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
}), qf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Uo,
  // Check if has grain direction
  hasGrain: {
    compute: (t) => t.grain === "l" || t.grain === "w",
    metadata: {
      cache: !1,
      dependencies: ["grain"],
      returnType: "boolean"
    }
  }
}, Ii = B({
  ...Xs.shape,
  ...Er.shape,
  // ========== Stock-specific Properties ==========
  // Add grain field for stock
  grain: Qr(),
  preventGrainRotation: ti.boolean({
    label: "fields.preventGrainRotation",
    description: "Prevent rotation that would change grain direction",
    group: "options",
    order: 4
  }),
  // Stock-specific flags (infiniteLength is now in sharedStockPropertiesSchema from merge above)
  used: ti.boolean({
    label: "fields.used",
    description: "Whether stock has been used"
  }),
  // Display and filtering properties
  color: Ce(
    Fr,
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
    y().url().optional(),
    {
      label: "fields.imageUrl",
      description: "Image URL for stock display",
      group: "display",
      order: 3
    }
  ),
  // Stock filter and categorization properties
  tags: Ce(
    ee(y()).optional(),
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
}), Wf = {
  // Inherit all computed properties from InputRectangle (including isValid)
  ...Uo
  // InputStock doesn't define additional computed properties
}, Qo = _t.extend({
  // ========== Identification ==========
  id: y().optional().describe("Unique identifier"),
  // ========== Shape References ==========
  shapeIds: ee(y()).default([]).describe("List of shape IDs in this group"),
  shapes: ee(y()).default([]).transform((t) => t?.map(String) ?? []).describe("Shape identifiers"),
  // ========== Group Properties ==========
  direction: Ho,
  // 'horizontal' | 'vertical'
  q: d().int().min(1).default(1).describe("Quantity of groups"),
  duplicate: D().default(!1).describe("If a duplicate"),
  // ========== Material Properties (from Group) ==========
  name: y().optional().describe("Group name"),
  material: y().optional().describe("Material type"),
  grain: Ui.describe("Grain direction"),
  // ========== Stock Matching (excluded during compression) ==========
  stockMatch: B({
    stockId: y().optional(),
    material: y().optional(),
    thickness: d().optional(),
    grain: Ui.optional()
  }).optional().describe("Matching stock information").behavior({ compress: "exclude" }),
  // ========== Runtime Properties ==========
  shapeList: ee(xe()).optional().describe("Runtime shape list for validation").behavior({ compress: "exclude" })
}), Hf = {
  // Include validation computed properties (isValid)
  ...si
  // InputUserGroup doesn't define additional computed properties
};
B({
  parts: ee(d()).describe("Indices of shapes/parts in the parts array (user-friendly name for shapes)"),
  direction: Ho,
  q: d().int().min(1).describe("Quantity of groups")
});
function tn() {
  this.issues = [], this.warnings && (this.warnings = []);
}
function ji(t) {
  t.type === "warning" && this.warnings ? this.warnings.push(t) : this.issues.push(t);
}
function Ki(t) {
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
    return new ne({
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
function Da(t, e) {
  const i = t.safeParse(e);
  return i.success ? [] : Ki(i.error);
}
const tl = {
  clearValidation: tn,
  addIssue: ji,
  validateWithSchema: Da,
  zodErrorsToIssues: Ki,
  /**
   * Run standard validation flow
   */
  runValidation(t, e = {}) {
    return tn.call(this), e.skipSchemaValidation || Da(t, this).forEach((s) => ji.call(this, s)), this.issues || [];
  }
};
class il extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Xs;
  static computedProperties = Uo;
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
      s[a] === null || s[a] === void 0 ? delete s[a] : s[a] !== void 0 && (s[a] = $f(s[a], i, n), s[a] === null && delete s[a]);
    s.name?.length ? s.name = Su(s.name)?.toUpperCase() : s.name = "", s.material ? s.material = s.material.trim().toUpperCase() : s.material = "", typeof s.notes == "string" ? s.notes = s.notes.replace(/,/g, " ") : s.notes = "", s.trim && (s.trim = Ff(s.trim, i, n, !0)), super(s), this.issues || (this.issues = []), this.warnings || (this.warnings = []);
  }
  /**
   * Get entity type
   */
  getType() {
    return oe.InputRectangle;
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
    return tn.call(this), e?.skipSchemaValidation || tl.runValidation.call(
      this,
      Xs,
      e
    ), this.issues;
  }
  // isValid is provided as a computed property from validationBaseComputedProperties
  /**
   * Get trimmed dimensions
   */
  get trimmedDimensions() {
    const e = this.longSide, i = this.shortSide, s = H({ v: this.trim.l1 }) ?? 0, n = H({ v: this.trim.l2 }) ?? 0, o = H({ v: this.trim.w1 }) ?? 0, a = H({ v: this.trim.w2 }) ?? 0;
    return {
      name: this.name,
      id: this.id,
      autoId: this.autoId,
      l: e - (o + a),
      w: i - (s + n)
    };
  }
}
const mo = _t.extend({
  // Core properties from shared schema
  stockType: fn,
  stackHeight: wn.describe("Maximum stack height"),
  cutType: Sn,
  cutPreference: xn,
  // Blade width (numeric for runtime)
  bladeWidth: Xo.describe("Blade width"),
  // Guillotine options
  guillotineOptions: kn,
  // Efficiency options
  efficiencyOptions: Zo,
  // General options (nested stockSelection and stackingMode)
  options: B({
    stockSelection: Yo,
    minSpacing: Qs,
    stackingMode: Ko,
    minSpacingDimension: Mf
  }).default({
    stockSelection: "efficiency",
    minSpacing: 0,
    stackingMode: "identical",
    minSpacingDimension: {
      dimension: 0,
      minSpacing: 0
    }
  }).describe("General saw options")
}), Uf = {
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
mo.describe(JSON.stringify({
  name: "Saw",
  description: "Runtime saw configuration for optimization",
  version: "1.0.0",
  category: "configuration"
}));
class sl extends He {
  // Validation properties (issues, warnings) are inherited from validationBasePropertiesSchema
  // via sawPropertiesSchema which extends it - they are initialized automatically
  // when the Zod schema is parsed in the constructor
  // isValid is also provided as a computed property from validationBaseComputedProperties
  // Zod schema for validation and serialization
  static schema = mo;
  static computedProperties = Uf;
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
  static defaults = mo.parse({});
  constructor(e = {}) {
    super(e), this.stockType === "linear" && (this.cutType = void 0, this.cutPreference = void 0);
  }
  /**
   * Get entity type
   */
  getType() {
    return oe.Saw;
  }
  /**
    * Validate the saw data
    * For backward compatibility, returns Issue[] synchronously
    * Delegates to async validation which uses the schema
    */
  validate() {
    return this.issues = [], this.warnings = [], this.bladeWidth < 0 && this.issues.push(new ne({
      message: "Blade width cannot be negative",
      field: [["bladeWidth"]],
      type: "error",
      shouldTranslate: !1
    })), this.issues;
  }
}
function ea(t, e, i = "decimal") {
  const s = { ...t };
  for (const [n, o] of Object.entries(e)) {
    const a = t[n];
    switch (o.type) {
      case "number":
        a != null ? s[n] = typeof a == "string" ? H({ v: a, nf: i }) : a : a === null && (s[n] = null);
        break;
      case "trim":
        if (a) {
          const r = {};
          for (const [l, c] of Object.entries(a))
            r[l] = typeof c == "string" ? H({ v: c, nf: i }) : c;
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
const Yf = {
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
}, Kf = {
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
}, Zf = {
  // Numeric field that needs conversion
  bladeWidth: { type: "number" },
  // Stack height should ensure it's a number
  stackHeight: { type: "transform", transform: (t) => typeof t == "number" ? t : t ? Number(t) : 100 },
  // Convert options field to handle minSpacing string/number conversions
  options: {
    type: "transform",
    transform: (t) => ({
      ...t,
      minSpacing: typeof t?.minSpacing == "string" ? H({ v: t.minSpacing, nf: "decimal" }) : t?.minSpacing ?? 0,
      minSpacingDimension: {
        dimension: typeof t?.minSpacingDimension?.dimension == "string" ? H({ v: t.minSpacingDimension.dimension, nf: "decimal" }) : t?.minSpacingDimension?.dimension ?? 0,
        minSpacing: typeof t?.minSpacingDimension?.minSpacing == "string" ? H({ v: t.minSpacingDimension.minSpacing, nf: "decimal" }) : t?.minSpacingDimension?.minSpacing ?? 0
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
class nl extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = en;
  static computedProperties = zf;
  // Legacy compressionExcludedProperties removed - using schema-based compression behaviors
  constructor(e = {}) {
    super(e);
    const i = po(this.stockType);
    i.includes(this.cutType) || (this.cutType = i.length > 0 ? i[0] : void 0);
    const s = go(this.stockType, this.cutType);
    this.cutPreference && !s.includes(this.cutPreference) ? this.cutPreference = s[0] || void 0 : !this.cutPreference && s.length > 0 && (this.cutPreference = s.includes("l") ? "l" : s[0]);
  }
  /**
   * Get entity type
   */
  getType() {
    return oe.InputSaw;
  }
  // Validation properties (issues, warnings, isValid) come from the schema via SchemaClass
  // clearValidation and addIssue are provided by validation-helpers
  /**
   * Validate to perform InputSaw-specific validation
   * Implements the Validatable interface requirement
   */
  validate(e) {
    if (tn.call(this), e?.skipSchemaValidation || tl.runValidation.call(
      this,
      en,
      e
    ), !e?.skipBusinessValidation) {
      if (this.bladeWidth !== void 0 && this.bladeWidth !== null) {
        const i = H({ v: this.bladeWidth });
        i === null || isNaN(i) || i < 0 ? ji.call(this, new ne({
          message: "Blade width must be a non-negative number",
          type: "error",
          field: [["bladeWidth"]]
        })) : i > 100 && ji.call(this, new ne({
          message: "Blade width seems unusually large (> 100)",
          type: "warning",
          field: [["bladeWidth"]]
        }));
      }
      this.stackHeight !== void 0 && this.stackHeight !== null && (this.stackHeight < 1 ? ji.call(this, new ne({
        message: "Stack height must be at least 1",
        type: "error",
        field: [["stackHeight"]]
      })) : this.stackHeight > 1e3 && ji.call(this, new ne({
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
    const n = po(this.stockType);
    n.includes(this.cutType) || (this.cutType = n.length > 0 ? n[0] : void 0);
    const o = i !== this.stockType, a = s !== this.cutType;
    if (o || a) {
      const r = go(this.stockType, this.cutType);
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
    const e = this.toData(), i = ea(
      e,
      Zf
    );
    return new sl(i);
  }
}
const ol = Ct, Ra = dt;
ii.map((t) => `side.${t}`), Ra.map((t) => `face.${t}`), Ra.map((t) => `face.${t}`), ol.map((t) => `side.${t}`);
const al = ["radius", "bevel"], Xf = _t.extend({
  // Corner type
  type: fe(al).nullable().optional().describe("Type of corner modification"),
  // Size of the corner modification
  size: d().nonnegative().nullable().default(0).describe("Size of the corner modification in mm"),
  // Corner index
  index: d().min(0).max(3).default(0).describe("Corner index (0=BL, 1=BR, 2=TR, 3=TL)")
}), Jf = {
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
class qi extends He {
  // Zod schema for validation and serialization
  static schema = Xf;
  static computedProperties = Jf;
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
    return this.type && this.size !== null && this.size <= 0 && e.push(new ne({
      message: `Corner ${this.index + 1}: Size must be positive`,
      type: "error"
    })), (this.index < 0 || this.index > 3) && e.push(new ne({
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
    return this.size > n / 2 && s.push(new ne({
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
const rl = ["l1", "l2", "w1", "w2"], Qf = _t.extend({
  // Position
  position: d().min(0).default(0).describe("Position along the side"),
  side: fe(rl).describe("Side where hinge is placed"),
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
}), eh = {
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
}, th = ["regular", "hinge", "shelf"], ih = _t.extend({
  // Position
  x: d().min(0).default(0).describe("X position from left edge"),
  y: d().min(0).default(0).describe("Y position from bottom edge"),
  // Dimensions
  diameter: d().min(0.1).default(5).describe("Hole diameter in mm"),
  depth: d().min(0).optional().describe("Hole depth (undefined for through hole)"),
  // Configuration
  face: d().default(0).describe("Face index (0=front, 1=back)"),
  type: fe(th).default("regular").describe("Type of hole")
}), sh = {
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
class qt extends He {
  // Zod schema for validation and serialization
  static schema = ih;
  static computedProperties = sh;
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
    return (this.x < 0 || this.y < 0) && e.push(new ne({
      message: "Position cannot be negative",
      type: "error"
    })), this.diameter <= 0 && e.push(new ne({
      message: "Diameter must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ne({
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
    return new qt({ x: e, y: i, diameter: s, face: n });
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new qt(e);
  }
  get area() {
    const e = this.diameter / 2;
    return Math.PI * e * e;
  }
}
class sn extends He {
  // Zod schema for validation and serialization
  static schema = Qf;
  static computedProperties = eh;
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
    if (this.position < 0 && e.push(new ne({
      message: "Position cannot be negative",
      type: "error"
    })), this.numHoles <= 0 && e.push(new ne({
      message: "Number of holes must be positive",
      type: "error"
    })), this.diameter <= 0 && e.push(new ne({
      message: "Diameter must be positive",
      type: "error"
    })), this.hingeLength <= 0 && e.push(new ne({
      message: "Hinge length must be positive",
      type: "error"
    })), this.depth !== void 0 && this.depth < 0 && e.push(new ne({
      message: "Depth cannot be negative",
      type: "error"
    })), this.numHoles > 1) {
      const i = this.hingeLength - 2 * this.outerSpacing;
      this.diameter * this.numHoles > i && e.push(new ne({
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
    return this.generateHoles(i, s).map((o) => new qt(o));
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
      s.push(new qt({
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
const nh = _t.extend({
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
}), oh = {
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
let ah = class yo extends He {
  // Zod schema for validation and serialization
  static schema = nh;
  static computedProperties = oh;
  /**
   * Get entity type (required for AutoSerializable)
   */
  getType() {
    return oe.Machining;
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
      (o.x < 0 || o.y < 0) && n.push(new ne({
        message: `Hole ${a + 1}: Position cannot be negative`,
        type: "error"
      })), o.diameter <= 0 && n.push(new ne({
        message: `Hole ${a + 1}: Diameter must be positive`,
        type: "error"
      }));
    }) : i === "hingeHoles" ? this.hingeHoles.forEach((o, a) => {
      o.position < 0 && n.push(new ne({
        message: `Hinge ${a + 1}: Position cannot be negative`,
        type: "error"
      }));
    }) : i === "corners" ? this.corners.forEach((o, a) => {
      o.size <= 0 && n.push(new ne({
        message: `Corner ${a + 1}: Size must be positive`,
        type: "error"
      }));
    }) : (n.push(...this.validate(e, "holes", s)), n.push(...this.validate(e, "hingeHoles", s)), n.push(...this.validate(e, "corners", s))), i || (this.issues = n), n;
  }
  /**
    * Add a hole
    */
  addHole(e) {
    this.holes.push(e instanceof qt ? e : new qt(e)), this.validate();
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
      this.generateHingeHoles(s, e).forEach((o) => {
        i.push(o instanceof qt ? o : new qt(o));
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
    return new yo();
  }
  /**
    * Create from plain data (for deserialization)
    */
  static fromData(e) {
    return new yo(e);
  }
  get allHoles() {
    const e = [...this.holes];
    return this.hingeHoles.forEach((i) => {
      this.generateHingeHoles(i, null).forEach((n) => {
        e.push(new qt(n));
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
const rh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Vr(t, "orientationLock", ["l", "w"], e, i, s), s;
}, lh = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [];
  return Vr(t, "grain", ["l", "w"], e, i, s), s;
}, ch = ({ item: t, index: e, isWarning: i = !1 }) => {
  const s = [], n = je(t, "banding");
  return n != null && (typeof n != "object" || n === null) && new ne({
    item: t,
    message: Mt("errors.validation.must_be_object", { 0: "banding" }),
    shouldTranslate: !1,
    field: [["banding"]],
    index: [e],
    type: i ? "warning" : "error",
    issues: s,
    category: ["part"]
  }), s;
}, uh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = je(t, "customData");
  if (o == null) return n;
  if (typeof o != "object" || o === null)
    return new ne({
      item: t,
      message: Mt("errors.validation.must_be_object", {
        0: Ht.customData
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
      ["string", "number", "boolean"].includes(r) || new ne({
        item: t,
        message: Mt("errors.validation.must_be_string_number_boolean", {
          0: Ht.customData
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
}, dh = ({ item: t, index: e }) => {
  const i = je(t, "machining");
  i && "validateEverything" in i && i.validateEverything(t, e);
}, fh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = je(t, "x");
  return a === null || a === "" || a === void 0 || i != null && H({ v: a }) > i && new ne({
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
    issues: o,
    category: n
  }), o;
}, hh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = je(t, "y");
  return a === null || a === "" || a === void 0 || i != null && H({ v: a }) > i && new ne({
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
    issues: o,
    category: n
  }), o;
}, ph = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = je(t, "l");
  return (a === null || a === "" || a === void 0) && new ne({
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
    issues: o,
    category: n
  }), o;
}, gh = ({ item: t, index: e, max: i, isWarning: s = !1, category: n = [] }) => {
  const o = [], a = je(t, "w");
  return (a === null || a === "" || a === void 0) && new ne({
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
    issues: o,
    category: n
  }), o;
}, mh = ({ item: t, index: e, max: i, isWarning: s = !1, saw: n, category: o = [] }) => {
  const a = [], r = je(t, "t");
  return n?.cutType === "beam" && !r && new ne({
    item: t,
    message: "errors.saw.thickness_required_for_beam_saw",
    field: [["t"]],
    index: [e],
    type: "error",
    issues: a,
    category: o
  }), a;
}, yh = ({ item: t, index: e, isWarning: i = !1, category: s = [] }) => {
  const n = [], o = je(t, "q"), a = je(t, "autoAdd");
  return o == null || a === !0, n;
}, bh = ({
  item: t,
  index: e,
  shapes: i,
  requiredCount: s = 2,
  isWarning: n = !1,
  category: o = ["group"]
}) => {
  const a = [];
  return i.length < s && new ne({
    item: t,
    message: "errors.groups.min_parts",
    index: [e],
    type: n ? "warning" : "error",
    issues: a,
    category: o
  }), a;
}, vh = ({
  item: t,
  index: e,
  shapes: i,
  isWarning: s = !1,
  category: n = ["group"]
}) => {
  const o = [];
  return i.forEach((a, r) => {
    !(typeof a.isSquare == "function", a.isSquare) && !["l", "w"].includes(a.orientationLock) && new ne({
      item: t,
      message: Mt("errors.groups.part_needs_orientation_lock", { 0: r + 1 }),
      shouldTranslate: !1,
      field: [["orientationLock"]],
      index: [e],
      type: s ? "warning" : "error",
      issues: o,
      category: n
    });
  }), o;
}, wh = ({
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
    ae.equalTo(f, l) || new ne({
      item: t,
      message: Mt("errors.groups.dimension_not_correct", {
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
}, Sh = ({
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
  return s > n && new ne({
    item: t,
    message: Mt("errors.groups.not_enough_of_part", {
      0: o || (a ?? 0) + 1,
      1: s,
      2: n
    }),
    shouldTranslate: !1,
    index: [e],
    type: r ? "warning" : "error",
    issues: c,
    category: l
  }), n === 0 && new ne({
    item: t,
    message: "errors.groups.no_parts",
    index: [e],
    type: r ? "warning" : "error",
    issues: c,
    category: l
  }), c;
};
function xh(t) {
  return ye(t) || Je(t) || hs(t);
}
function kh(t, e, i) {
  if (!i) return !0;
  const s = e?.material?.toLowerCase(), n = t?.material?.toLowerCase();
  return !s && !n || s === n;
}
function Ih(t, e, i) {
  return i ? !ke(t.t) || !ke(e.t) ? !1 : Je(t) ? ae.equalTo(H({ v: t.t }), H({ v: e.t })) : t.t === e.t : !0;
}
function Ch(t, e, i) {
  return i?.stockType !== "linear" || !Je(t) && !ye(t) ? !0 : bt(t, 0, e) && ae.equalTo(H({ v: t.w }), H({ v: e.w })) || bt(t, 1, e) && ae.equalTo(H({ v: t.l }), H({ v: e.w }));
}
function Ph(t, e, i, s = 0) {
  const n = ye(t[0]), o = i.stockType;
  if (t.some((C) => ke(C.stockLock) && C.stockLock.length))
    return { stockList: e, shapeList: t, unusableShapes: [], unusableStock: [], newIssues: [] };
  e = e.filter((C) => n || C.autoAdd === !0 || ke(C.q) && C.q > 0);
  const r = e.some((C) => ke(C.material)), l = e.some((C) => ke(C.t)), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = [];
  let x = s;
  for (const C of t) {
    const A = e.map((V, R) => {
      const F = xh(C) && Yi(C, V, void 0, i), W = kh(C, V, r), j = Ih(C, V, l), m = Ch(C, V, i);
      return {
        stockItem: V,
        stockIndex: R,
        fit: F,
        material: W,
        thickness: j,
        width: m,
        // For this stock item, does it satisfy all requirements?
        satisfiesAll: F && W && j && (o !== "linear" || m)
      };
    });
    C.stockMatch = {
      fit: A.some((V) => V.fit),
      material: !r || A.some((V) => V.material),
      thickness: !l || A.some((V) => V.thickness),
      width: o !== "linear" || A.some((V) => V.width)
    };
    const $ = A.filter((V) => V.satisfiesAll), S = $.length > 0;
    if (!n && S) {
      const V = $.map((R) => R.stockItem.parentId);
      C.stockLock = V, V.forEach((R) => c.add(R));
    }
    C.stockMatch.fit ? S || (r && !C.stockMatch.material && (h.add(C), g.push(new ne({
      category: ["part", "stock"],
      item: C,
      field: [["material"]],
      index: [x],
      message: "errors.validation.no_matching_stock_material"
    }))), l && !C.stockMatch.thickness && (h.add(C), g.push(new ne({
      category: ["part", "stock"],
      item: C,
      field: [["t"]],
      index: [x],
      message: "errors.validation.no_matching_stock_thickness"
    }))), o === "linear" && !C.stockMatch.width && (f.add(C), g.push(new ne({
      category: ["part", "stock"],
      item: C,
      field: [["w"]],
      index: [x],
      message: "errors.validation.no_matching_stock_width"
    }))), C.stockMatch.material && C.stockMatch.thickness && (o !== "linear" || C.stockMatch.width) && (h.add(C), g.push(new ne({
      category: ["part", "stock"],
      item: C,
      field: [["material"], ["t"]],
      index: [x],
      message: "errors.validation.no_stock_matches_all_requirements"
    })))) : (u.add(C), g.push(new ne({
      category: ["part", "stock"],
      item: C,
      field: [["l"], ["w"]],
      index: [x],
      message: "errors.validation.will_not_fit"
    }))), x++;
  }
  t.forEach((C) => C.stockMatch = null);
  let E, L;
  return n ? (E = t.filter((C) => u.has(C) || f.has(C) || h.has(C)).sort(Ut.ID), L = []) : (E = t.filter((C) => u.has(C) || f.has(C) || h.has(C) || !C.stockLock || !C.stockLock.length).sort(Ut.ID), L = e.filter((C) => !c.has(C.parentId)).sort(Ut.ID), e = e.filter((C) => Dt(C)).filter((C) => c.has(C.parentId)), t = t.filter((C) => !u.has(C) && !f.has(C) && !h.has(C) && C?.stockLock?.length)), {
    stockList: e,
    unusableStock: L,
    shapeList: t,
    unusableShapes: E,
    newIssues: g
  };
}
function Th(t) {
  return t?.issues?.length > 0;
}
const Ah = ({
  item: t,
  inputStockList: e,
  saw: i,
  partTrim: s = 0,
  index: n
}) => {
  const o = [], a = i.stockType, r = je(t, "q"), l = je(t, "l"), c = je(t, "w");
  return !r || !l || !c || ("applyPartTrim" in t && typeof t.applyPartTrim == "function" && t.applyPartTrim(s, a), Th(t)) || Ph([t], e, i, n).newIssues.forEach((f) => {
    o.push(f);
  }), o;
}, Oh = ({
  item: t,
  partTrim: e,
  index: i,
  isWarning: s = !1
}) => {
  const n = [];
  if (!e) return n;
  const o = je(t, "l"), a = je(t, "w");
  if (!o || !a) return n;
  try {
    const r = H({ v: e }), l = H({ v: o }), c = H({ v: a }), u = l - r * 2, f = c - r * 2;
    (u <= 0 || f <= 0) && new ne({
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
}, $h = ({
  item: t,
  index: e,
  isWarning: i = !1,
  category: s = []
}) => {
  const n = [], o = je(t, "l"), a = je(t, "w"), r = je(t, "trim");
  if (!o || !a || !r) return n;
  if ((!Dt(t) || Dt(t) && !("trimmed" in t && t.trimmed)) && typeof r == "object" && r !== null)
    try {
      const c = H({ v: o }), u = H({ v: a }), f = (E) => {
        if (E == null) return 0;
        if (typeof E == "number" || typeof E == "string")
          try {
            return H({ v: E }) || 0;
          } catch {
            return 0;
          }
        return 0;
      }, h = {
        w1: f(je(r, "w1")),
        w2: f(je(r, "w2")),
        l1: f(je(r, "l1")),
        l2: f(je(r, "l2"))
      }, g = h.w1 + h.w2, x = h.l1 + h.l2;
      g >= c && new ne({
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
      }), x >= u && new ne({
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
}, lt = {
  // Dimensions
  x: fh,
  y: hh,
  l: ph,
  w: gh,
  t: mh,
  q: yh,
  // Trim
  trim: $h,
  partTrim: Oh,
  // Custom
  customData: uh,
  banding: ch,
  orientationLock: rh,
  grain: lh,
  machining: dh,
  // Stock
  stockMatch: Ah,
  // Groups
  groupShapeCount: bh,
  groupOrientationLock: vh,
  groupDimensions: wh,
  groupQuantity: Sh
};
class Fh extends il {
  // Required: Define schema and computed properties for SchemaClass
  // Use getters to defer schema access and avoid circular dependency
  static get schema() {
    return as;
  }
  static get computedProperties() {
    return qf;
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
      machining: e.machining || new ah({
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
    return oe.InputShape;
  }
  /**
    * Apply part trim
    */
  applyPartTrim(e, i) {
    if (!this.readonly)
      if (e = H({ v: e }), this.trim) {
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
        this.issues[h].field.some((g) => l.includes(g[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((g) => l.includes(g[0])) && this.warnings.splice(h, 1);
      const c = e.fields.reduce((h, g) => (h[g] = !0, h), {}), f = as.pick(c).safeParse(this.toData());
      if (!f.success) {
        const h = Ki(f.error);
        this.issues.push(...h);
      }
    } else {
      this.issues.length = 0, this.warnings.length = 0;
      const l = as.safeParse(this.toData());
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
      fields: o = null
    } = e, a = (l) => !o || o.includes(l);
    a("l") && lt.l({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), a("w") && lt.w({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), a("t") && lt.t({
      item: this,
      index: s ?? this.index,
      category: ["part"],
      saw: e.saw
    }), a("q") && lt.q({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), a("trim") && lt.trim({
      item: this,
      index: s ?? this.index,
      category: ["part"]
    }), !n && i.length > 0, a("customData") && lt.customData({
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
    const i = ea(
      this.toData(),
      Yf,
      e
    );
    return new bn(i);
  }
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          ol.map((i) => [i, !1])
        );
        break;
    }
  }
}
const Lh = B({
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
}), Eh = B({
  stock: ge("Stock", { nullable: !0 }).optional(),
  number: d().int().min(1).optional()
}), bo = B({
  ...hn.shape,
  ...Er.shape,
  // Override x and y to default to 0 for Stock (containers are positioned at origin)
  x: d().nullable().default(0).describe("X coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  y: d().nullable().default(0).describe("Y coordinate position (always 0 for stock)").behavior({ clone: "reset" }),
  // Stock analysis results
  analysis: Lh.optional().behavior({ clone: "reset" }),
  // Automatically add stock as needed during optimization
  autoAdd: D().optional().describe("Automatically add stock as needed during optimization"),
  // Pattern for identifying duplicate stock sheets
  duplicatePattern: y().default("").describe("Pattern for identifying duplicate stock sheets"),
  // Root segment for guillotine cutting (excluded from compression, reset during cloning)
  rootSegment: ge("Segment", {
    nullable: !0
  }).optional().behavior({ clone: "reset", compress: "exclude" }),
  // Optimization score (excluded from compression, reset during cloning)
  score: xe().nullable().default(null).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stack information (reset during cloning - cloned stocks start fresh)
  stack: Eh.optional().describe("Stack information").behavior({ clone: "reset" }),
  // Whether the stock layout has been tidied (excluded from compression, reset during cloning)
  tidy: D().default(!1).behavior({ compress: "exclude" }).behavior({ clone: "reset" }),
  // Stock type (sheet, linear, roll) - inherited from shared stockType
  type: fe(["sheet", "linear", "roll"]).optional().describe("Type of stock material"),
  // Whether this stock is unusable for optimization
  unusable: D().default(!1).describe("Whether this stock is unusable for optimization"),
  // Whether this stock has been used in the optimization (reset during cloning)
  used: D().default(!1).describe("Whether this stock has been used in the optimization").behavior({ clone: "reset" }),
  // The optimization strategy that selected this stock (reset during cloning)
  winningStrategy: y().optional().describe("The optimization strategy that selected this stock").behavior({ clone: "reset" }),
  // Display and filtering properties
  color: Fr.describe('Material color ({ hex: "#FF5733", name: "Red" } or legacy string)'),
  weight: d().positive().optional().describe("Weight in kg"),
  imageUrl: y().url().optional().describe("Image URL for stock display")
}), ll = {
  // Include all Container computed properties
  ...pn,
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
bo.describe(JSON.stringify({
  name: "Stock",
  description: "Stock material for cutting optimization",
  version: "1.0.0",
  extends: "Container",
  computedProperties: Object.keys(ll)
}));
class nn extends mn {
  static schema = bo;
  static computedProperties = ll;
  static defaults = bo.parse({});
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
    return oe.Stock;
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
    const s = ef(e.filter((o) => o.added && o.stock.id === this.id), "x"), n = s.x + s.l;
    if (n > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ae.equalTo(n, this.l) ? n : n + i;
  }
}
class Zw extends il {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Ii;
  static computedProperties = Wf;
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
    return oe.InputStock;
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
        this.issues[h].field.some((x) => c.includes(x[0])) && this.issues.splice(h, 1);
      for (let h = this.warnings.length - 1; h >= 0; h--)
        this.warnings[h].field.some((x) => c.includes(x[0])) && this.warnings.splice(h, 1);
      const u = this.toData();
      console.log("[InputStock.validate] Field-level validation requested for fields:", e.fields), console.log("[InputStock.validate] Data to validate:", u);
      const f = e.fields.reduce((h, g) => (h[g] = !0, h), {});
      try {
        const h = Ii.pick(f);
        console.log("[InputStock.validate] Created partial schema for fields:", Object.keys(f));
        const g = h.safeParse(u);
        if (console.log("[InputStock.validate] Validation result:", g.success ? "SUCCESS" : "FAILED"), g.success)
          console.log("[InputStock.validate] No validation errors found");
        else {
          console.log("[InputStock.validate] Validation errors:", g.error.issues);
          const x = Ki(g.error);
          this.issues = [...this.issues, ...x];
        }
      } catch (h) {
        console.warn(`Failed to validate fields ${e.fields.join(", ")}:`, h);
      }
      this.isNew && (console.log("[InputStock.validate] Clearing isNew flag"), this.isNew = !1);
    } else {
      this.issues = [], this.warnings = [];
      const c = Ii.safeParse(this.toData());
      if (!c.success) {
        const u = Ki(c.error);
        this.issues = u;
      }
    }
    if (e?.skipBusinessValidation)
      return this.issues;
    const o = e?.fields, a = (c) => !o || o.includes(c);
    ["l", "w", "t"].forEach((c) => {
      a(c) && lt[c]({
        item: this,
        saw: s,
        index: n ?? this.index,
        category: ["stock"]
      });
    }), a("grain") && lt.grain({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), a("trim") && lt.trim({
      item: this,
      index: n ?? this.index,
      category: ["stock"]
    }), a("q") && lt.q({
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
    const o = ea(
      s,
      Kf,
      e
    );
    return (i || this.saw) && (o.saw = i || this.saw), new nn(o);
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
class Xw extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Qo;
  static computedProperties = Hf;
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
    return oe.Group;
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
    const o = lt.groupOrientationLock({
      item: this,
      index: 0,
      shapes: s
    });
    if (i.push(...o), i.length) return i;
    const a = this.joinDimension, r = lt.groupDimensions({
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
        const o = e.find((a) => !!(a.autoId === n || ye(a) && a.autoId === n || "id" in a && a.id === n));
        o && (ye(o) || Je(o)) && s.push(o);
      }
      return s.length < this.shapeIds.length && this.addIssue(new ne({
        message: "Could not find all shapes in the shape list",
        type: "error"
      })), s;
    }
    if (!this.shapes.length) return [];
    const i = [];
    for (const s of this.shapes) {
      const n = e.find((o) => !!(o.autoId === s || String(o.autoId) === String(s) || "id" in o && (o.id === s || String(o.id) === String(s)) || ye(o) && (o.autoId === s || String(o.autoId) === String(s))));
      n && (ye(n) || Je(n)) && i.push(n);
    }
    return i;
  }
  // isValid is now provided as a computed property from the validation schema
  /**
   * Populate parent IDs from shape list IDs
   */
  populateParentID(e) {
    e?.length && this?.shapeIds?.length && (this.shapes = this.shapeIds.map((i) => {
      const s = e.find((n) => n.autoId === i || ye(n) && n.autoId === i);
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
      const h = s.filter((x) => ye(x) || Je(x)), g = this.validateWithShapes(h);
      if (g.filter((x) => x.type === "error").length > 0)
        throw new Error(`Cannot create Group: ${g[0].message}`);
    }
    const o = this.findShapes(s || []);
    if (o.length === 0)
      throw new Error("No shapes found for Group creation");
    const a = o.map((h) => ye(h) ? h.toShape() : h), r = a[0];
    a.forEach((h) => {
      if (s && Array.isArray(s)) {
        const g = s.findIndex((x) => "group" in x && x.group?.inUserGroup ? !1 : "parentId" in x && "parentId" in h && x.parentId === h.parentId || "id" in x && "id" in h && x.id === h.id);
        g !== -1 && s.splice(g, 1);
      }
      if ("setRotationToOrientationLockWithoutContainer" in h && typeof h.setRotationToOrientationLockWithoutContainer == "function")
        h.setRotationToOrientationLockWithoutContainer();
      else if ("orientationLock" in h && h.orientationLock) {
        const g = h.orientationLock;
        try {
          g === "l" && "rot" in h ? h.rot = 0 : g === "w" && "rot" in h && (h.rot = 1);
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
    }, f = new vn(u);
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
const Bs = B({
  min: pe([y(), d()]).optional(),
  max: pe([y(), d()]).optional()
});
Se(y(), Bs);
B({
  holes: Se(y(), Bs),
  hingeHoles: Se(y(), Bs),
  corners: Se(y(), Bs)
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
    types: ee(fe(["bevel", "radius"])).optional(),
    enableBanding: D().optional()
  }).optional(),
  banding: B({
    enabled: D(),
    labels: ee(y()).optional(),
    options: xe().optional(),
    // ExtrasOptions
    pricing: Se(y(), d()).optional(),
    enableCorners: D().optional(),
    enableTypes: D().optional(),
    types: ee(y()).optional()
  }).optional()
});
const Dh = B({
  id: y(),
  x: d(),
  y: d(),
  diameter: d(),
  depth: d(),
  face: pe([me(0), me(1)]),
  type: y().nullable().optional(),
  valid: D().optional()
}), Rh = B({
  id: y(),
  position: d(),
  side: fe(rl),
  face: pe([me(0), me(1)]),
  numHoles: d(),
  diameter: d(),
  depth: d(),
  hingeLength: d(),
  distanceFromEdge: d(),
  outerSpacing: d(),
  minimumHoleDistance: d().optional(),
  positionLimit: d().optional(),
  valid: D().optional()
}), Mh = B({
  type: fe(al).nullable(),
  size: d(),
  valid: D().optional()
});
B({
  holes: ee(Dh).optional(),
  hingeHoles: ee(Rh).optional(),
  corners: Se(y(), Mh).optional()
});
B({});
const _h = ["l", "w"], Bh = gs.extend({
  // Identity - offcuts need IDs for tracking and export
  id: y().default(""),
  // Note: offcut property is inherited from Rectangle schema (boolean default false)
  // The Offcut constructor ensures it's always true
  // Offcut-specific fields
  addToInventory: D().default(!1),
  flex: fe(_h).optional(),
  // Cost is calculated, not set
  cost: d().min(0).nullable().default(0)
}), jh = {
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
class cl extends Wo {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Bh;
  static computedProperties = jh;
  constructor(e = {}) {
    const i = { ...e, offcut: !0 };
    super(i), this.offcut = !0;
  }
  /**
    * Get entity type
    */
  getType() {
    return oe.Offcut;
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
    return new cl({
      ...e,
      // Include all rectangle properties (l, w, x, y, material)
      flex: e.flex,
      offcut: !0,
      addToInventory: !1,
      added: !1
    });
  }
}
const Vh = B({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: pe([
    Qc(y(), ge("Point")),
    Se(y(), ge("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), Nh = {
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
class ni extends He {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Vh;
  static computedProperties = Nh;
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
    return oe.PointCollection;
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
const ul = ["root", "firstShape", "near", "far", ""], Gh = hn.extend({
  // Cutting information
  cuts: Le("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: ge("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: d().int().min(0).nullable().default(null),
  cutDirection: fe(Vo).nullable().default(null).describe("The primary cut direction for this segment"),
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
  type: fe(ul).nullable().default(null),
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
  type: fe(ul),
  parent: xe(),
  // Segment instance
  stock: xe(),
  // Stock instance
  offcut: D().optional(),
  merged: D().optional(),
  cutDirection: fe(Vo).nullable().optional()
});
const zh = {
  ...pn,
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
class Jw extends mn {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Gh;
  static computedProperties = zh;
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
    return oe.Segment;
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
        It() && console.log(`[PARENT CHANGE] Moving ${e.autoId} from parent ${i.autoId} to ${this.autoId}`);
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
function dl(t) {
  return {
    entities: /* @__PURE__ */ new Map(),
    stockList: [],
    shapeList: [],
    ...t
  };
}
function js(t, e) {
  if (Array.isArray(e))
    for (const i of e)
      i && typeof i == "object" && (i.autoId && t.entities.set(i.autoId, i), i.id && i.id !== i.autoId && t.entities.set(i.id, i));
}
function qh(t, e) {
  if (e) {
    if (e && typeof e == "object" && typeof e.getType == "function")
      return e;
    if (typeof e == "string")
      return t.entities.get(e);
    if (e && typeof e == "object" && e.autoId)
      return t.entities.get(e.autoId);
  }
}
function vo(t, e) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t))
    return t.map((s) => vo(s, e));
  if (typeof t.getType == "function")
    return t;
  if (t.__ref && (t.id || t.autoId)) {
    const s = t.autoId || t.id;
    return qh(e, s) || t;
  }
  const i = { ...t };
  for (const s in i)
    Object.prototype.hasOwnProperty.call(i, s) && (i[s] = vo(i[s], e));
  return i;
}
function fl(t, e, i) {
  if (t == null || t && typeof t == "object" && typeof t.getType == "function")
    return t;
  if (Array.isArray(t))
    return t.every((r) => r && typeof r == "object" && typeof r.getType == "function") ? t : t.map((r) => fl(r, e));
  if (!t || typeof t != "object" || !t.__entityType && !t.__ref && !t.type)
    return t;
  const s = t.__entityType;
  e?.preventAutoRotation && s && (s === oe.Rectangle || s === oe.Placeable || s === oe.Container || s === oe.Shape || s === oe.Group || s === oe.Offcut || s === oe.Stock || s === oe.Segment) && (t.preventAutoRotation = !0), e && (t.__context = e);
  const n = t.__ref || s, o = ps();
  if (n && o.has(n)) {
    const a = o.get(n), { __ref: r, __entityType: l, __context: c, ...u } = t, f = new a(u);
    return f.issues && Array.isArray(f.issues) && (f.issues = f.issues.map((h) => h instanceof ne ? h : ne.fromData(h, f))), f.warnings && Array.isArray(f.warnings) && (f.warnings = f.warnings.map((h) => h instanceof ne ? h : ne.fromData(h, f))), f;
  }
  return delete t.__context, t;
}
function wi(t, e) {
  if (e || (e = dl()), Array.isArray(t)) {
    const n = [];
    for (const o of t) {
      const a = wi(o, e);
      n.push(a), a && typeof a == "object" && (a.autoId || a.id) && js(e, [a]);
    }
    return n;
  }
  if (t && typeof t == "object" && typeof t.getType == "function")
    return (t.autoId || t.id) && js(e, [t]), t;
  const i = vo(t, e), s = fl(i, e);
  return s && typeof s == "object" && (s.autoId || s.id) && js(e, [s]), s;
}
function Qw(t, e) {
  const i = dl(e), s = t?.saw ? wi(t.saw, i) : void 0;
  s && js(i, [s]);
  const n = t?.stockList ? wi(t.stockList, i) : [];
  n.length > 0 && (i.stockList = n);
  const o = t?.shapeList ? wi(t.shapeList, i) : [];
  o.length > 0 && (i.shapeList = o);
  const a = t?.cutList ? wi(t.cutList, i) : [], r = t?.segmentList ? wi(t.segmentList, i) : [];
  r.length > 0 && (i.segmentList = r);
  const l = t?.offcuts ? wi(t.offcuts, i) : [];
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
function eS(t, e = [], i) {
  return t?.length ? e?.length ? t.map((n) => Wh(n, e, i)).filter((n) => Ue(n)) : [] : [];
}
function Wh(t, e, i) {
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
    const n = ps(), o = n.get("Group") || n.get(oe.Group);
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
function tS(t, e) {
  It() && (t.stocks && t.stocks.forEach((i, s) => {
    Dt(i) || console.warn(`[${e}] Stock at index ${s} is not a proper Stock instance:`, i);
  }), t.shapes && t.shapes.forEach((i, s) => {
    !Je(i) && !Ue(i) && console.warn(`[${e}] Shape at index ${s} is not a proper Shape/Group instance:`, i);
  }), t.segments && t.segments.forEach((i, s) => {
    Ni(i) || console.warn(`[${e}] Segment at index ${s} is not a proper Segment instance:`, i);
  }), t.groups && t.groups.forEach((i, s) => {
    Ue(i) || console.warn(`[${e}] Group at index ${s} is not a proper Group instance:`, i);
  }), t.inputUserGroups && t.inputUserGroups.forEach((i, s) => {
    zt(i) || console.warn(`[${e}] InputUserGroup at index ${s} is not a proper InputUserGroup instance:`, i);
  }));
}
ht.colors = [
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
const Vi = ht("logs"), wo = ht("cuts"), on = ht("groups"), an = ht("guillotine"), So = ht("results"), xo = ht("scoring"), ko = ht("firstShapes"), Io = ht("calculations"), Co = ht("subset"), Po = ht("secondRun"), To = ht("stack"), rn = ht("errors"), Ao = ht("allStock"), ln = ht("reset");
rn.color = 1;
on.color = 14;
an.color = 159;
ln.color = 11;
function Hh(t = "info", e, i) {
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
      Vi(o);
      break;
    case "guillotine":
      an(o);
      break;
    case "results":
      So(o);
      break;
    case "secondRun":
      Po(o);
      break;
    case "cuts":
      wo(o);
      break;
    case "scoring":
      xo(o);
      break;
    case "calculations":
      Io(o);
      break;
    case "stack":
      To(o);
      break;
    case "subset":
      Co(o);
      break;
    case "errors":
      rn(o);
      break;
    case "allStock":
      Ao(o);
      break;
    case "firstShapes":
      ko(o);
      break;
    case "groups":
      on(o);
      break;
    case "reset":
      ln(o);
      break;
    default:
      Vi(o);
  }
  console.table = n;
}
const Uh = "\x1B[31m", Yh = "\x1B[0m", ei = (t = "info", e, i = null, s = null, n = !1) => {
  if (n) {
    switch (t) {
      case "info":
        Vi(e);
        break;
      case "guillotine":
        an(e);
        break;
      case "results":
        So(e);
        break;
      case "secondRun":
        Po(e);
        break;
      case "cuts":
        wo(e);
        break;
      case "scoring":
        xo(e);
        break;
      case "calculations":
        Io(e);
        break;
      case "stack":
        To(e);
        break;
      case "subset":
        Co(e);
        break;
      case "errors":
        rn(`${Uh}${e}${Yh}`);
        break;
      case "allStock":
        Ao(e);
        break;
      case "firstShapes":
        ko(e);
        break;
      case "groups":
        on(e);
        break;
      case "reset":
        ln(e);
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
          an(i);
          break;
        case "results":
          So(i);
          break;
        case "secondRun":
          Po(i);
          break;
        case "cuts":
          wo(i);
          break;
        case "scoring":
          xo(i);
          break;
        case "calculations":
          Io(i);
          break;
        case "stack":
          To(i);
          break;
        case "subset":
          Co(i);
          break;
        case "errors":
          rn(i);
          break;
        case "allStock":
          Ao(i);
          break;
        case "firstShapes":
          ko(i);
          break;
        case "groups":
          on(i);
          break;
        case "reset":
          ln(i);
          break;
        default:
          Vi(i);
      }
    s && Hh(t, s);
  }
};
function iS(t, e, i, s = !1) {
  if (!i || !i.length) return !1;
  if (!t?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const n = e.bladeWidth / 2;
  t.shapeCollisions = t.shapeCollisions || [], i = i.filter((o) => o.added);
  for (const o of i) {
    let a = !1, r = !1;
    if (t.dimension === "l" ? (a = ae.greaterThan(t.x2, o.x) && ae.lessThan(t.x1, o.x + o.l), r = ae.greaterThan(t.y1 + n, o.y) && ae.lessThan(t.y1 - n, o.y + o.w)) : t.dimension === "w" && (a = ae.greaterThan(t.x1 + n, o.x) && ae.lessThan(t.x1 - n, o.x + o.l), r = ae.greaterThan(t.y2, o.y) && ae.lessThan(t.y1, o.y + o.w)), a && r)
      if (s) t.shapeCollisions.push(o);
      else return !0;
  }
  return s ? t.shapeCollisions : t.shapeCollisions.length > 0;
}
function li(t, e, i, s, n = null, o = null) {
  return new Si({ x1: t, y1: e, x2: i, y2: s, origin: n, type: o });
}
function Kh(t, e) {
  const i = t.getCorners(), s = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (s.bottomLeftDown = li(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = li(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < e.w && (s.topLeftLeft = li(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = li(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    e.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < e.w && i.topRight.x < e.l && (s.topRightTop = li(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    e.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = li(
    i.topRight.x,
    i.topRight.y,
    e.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < e.l && i.bottomRight.y > 0 && (s.bottomRightRight = li(
    i.bottomRight.x,
    i.bottomRight.y,
    e.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = li(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
function Oo(t, e) {
  if (t?.length)
    for (let i = t.length; i--; ) {
      const s = t[i];
      Zh(
        s,
        e
      );
    }
}
function Zh(t, e) {
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
function sS(t, e, i = "l", s = null) {
  if (!t || !e?.length) return !1;
  e.forEach((u) => u.orientationLock = null), Oo(
    e,
    t
  );
  const n = t.bladeWidth, o = [];
  let a = this.config.subset.shuffles;
  (e.length === 1 || e[0].parentId === e[e.length - 1].parentId) && (a = 1), i === "l" ? e.sort(
    Ut.LD
  ) : e.sort(
    Ut.WD
  ), s || (s = e[0]);
  function r(u, f = !0) {
    f && Ut.shuffle(
      e
    );
    const h = $o(
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
function Xh(t, e, i, s = "l", n, o = !1, a = this.config.subset.shuffles, r = null, l = this.config.subset.efficiency.limit) {
  if (!e?.length) return !1;
  const c = [], u = [
    (x, E) => E[s] - x[s],
    // Largest first
    (x, E) => x[s] - E[s],
    // Smallest first
    (x, E) => E[s] / E.area - x[s] / x.area,
    // Best dimension-to-area ratio
    (x, E) => E.area - x.area,
    // Largest area first
    (x, E) => x.area - E.area
    // Smallest area first
  ], f = e.every(
    (x, E, L) => E === 0 || x.isIdentical(L[E - 1])
  );
  if (!o) {
    const x = e.reduce((E, L) => E + L[s] + t, 0) - t;
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
        area: e.reduce((E, L) => E + L.area, 0)
      } : !1;
  }
  const h = $o(t, e, i, s, n, o, r);
  if (h !== !1 && (c.push(h), h.score.efficiency > 0.95 && e.length > 10))
    return h;
  if (f)
    return c[0] || !1;
  const g = Math.min(a, u.length);
  for (let x = 0; x < g; x++) {
    const E = [...e];
    E.sort(u[x % u.length]);
    const L = $o(t, E, i, s, n, o, r);
    if (L !== !1 && (c.push(L), L.score.efficiency > 0.98 && e.length > 30))
      break;
  }
  return c.sort((x, E) => E.score.efficiency - x.score.efficiency), c[0] || !1;
}
function $o(t, e, i, s = "l", n, o = !1, a = null) {
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
function Jh(t, e, i = null, s = "l", n = !0, o = !0) {
  if (!t?.length) return;
  if (!e) throw new Error(
    "positionShapes requires stock"
  );
  const a = s === "l" ? "x" : "y", r = s === "l" ? "y" : "x";
  let l = 0;
  Ue(i) ? Oo(
    t,
    i
  ) : Oo(
    t,
    i ?? e
  ), o && (s === "l" ? t.sort(
    Ut.LDIDA
  ) : t.sort(
    Ut.WDIDA
  )), t.forEach(
    (c, u) => {
      c[a] = i ? i[a] + l : l, i && (c[r] = i[r]), l += c[a === "x" ? "l" : "w"] + e.bladeWidth + c.getMinSpacing(e.saw, !0), xt(
        [() => nt(
          l
        ).to.be.a(
          "number"
        )]
      ), Ue(i) ? c.group.placementOrder = u : c.placementOrder = u, n && c.addToStock(e);
    }
  );
}
function nS(t = null, e, i, s = "l") {
  if (!e) return [];
  if (!t) return [];
  i.sort(
    Ut.ID
  );
  const n = t.shapes;
  return Jh(
    n,
    e,
    null,
    s
  ), n;
}
function oS(t, e, i) {
  ei("subset", `guillotine subset for segment ${t.id}`);
  function s($, S = []) {
    const { shapes: V } = a($);
    return V.filter((R) => {
      if (R.added || S.find((F) => F.id === R.id)) return !1;
      if (R.orientationLock)
        return ae.equalTo(R[f], $) ? ae.lessThanOrEqualTo(R.l, t.l) && ae.lessThanOrEqualTo(R.w, t.w) : !1;
      if (ae.equalTo(R.l, $) || ae.equalTo(R.w, $)) {
        const F = ae.equalTo(R.l, $) ? R.w : R.l;
        return ae.lessThanOrEqualTo(F, t[t.cutPreference]);
      }
      return !1;
    });
  }
  function n($, S) {
    for (const V of $)
      if (S !== V[Wt(t.getStock.cutPreference)] && rt(
        V,
        V.rot === 1 ? 0 : 1,
        t.getStock
      ) === !1)
        throw new Error(
          "rotateShapesToDimension - could not rotate strip shape correctly"
        );
  }
  function o($, S, V, R = null) {
    let F = s(
      $,
      S
    );
    if (R) {
      const m = F.find(
        (M) => M.parentId === R.parentId
      );
      if (m) return m;
    }
    if (It() && (n(
      F,
      $
    ), xt(
      [
        () => nt(F.every((m) => m.l === $ || m.w === $)).to.be.true
      ]
    )), !F.length) return !1;
    const W = [];
    for (const m of F) {
      const M = m.l === $ ? m.w : m.l;
      V.includes(M) && W.push(m);
    }
    return F = W.length ? W : F, Ur(F);
  }
  function a($) {
    const S = $;
    return A.has(S) || A.set(S, { shapes: [], priorities: [] }), A.get(S);
  }
  function r($ = null) {
    function S(R, F, W) {
      const { shapes: j, priorities: m } = a(F);
      j.includes(R) || (j.push(R), m.push(W));
    }
    if (!x?.length) return A;
    const V = t.getStock;
    for (const R of x) {
      let F = R.getPriority(V);
      $ && R.parentId !== $.parentId && (F = 0);
      const W = Wt(f);
      if (!R.orientationLock)
        R.longSide <= g && R.shortSide <= t[W] && S(R, R.l, F), !R.isSquare && R.shortSide <= g && R.longSide <= t[W] && S(R, R.w, F);
      else {
        const j = _r(
          R,
          t.getStock
        );
        if (xt([() => nt(j.length).to.equal(1)]), rt(
          R,
          j[0],
          t.getStock
        ) === !1)
          throw new Error(
            "could not rotate shape correctly for subset calculation"
          );
        const M = Wt(f);
        R[f] <= g && R[M] <= t[M] && S(R, R[f], F);
      }
    }
    return A;
  }
  function l() {
    const $ = [], S = Array.from(A.entries()).map(([R, { shapes: F, priorities: W }]) => ({
      dimension: R,
      count: F.length,
      totalPriority: F.length * Math.max(...W, 0)
    }));
    let V = S.reduce((R, { totalPriority: F }) => R + F, 0);
    for (; S.length > 0; )
      if (V <= 0 || !Number.isFinite(V)) {
        const R = [];
        S.forEach(({ dimension: F, count: W }) => {
          R.push(...Array(W).fill(F));
        });
        for (let F = R.length - 1; F > 0; F--) {
          const W = Math.floor(Math.random() * (F + 1));
          [R[F], R[W]] = [R[W], R[F]];
        }
        $.push(...R);
        break;
      } else {
        const R = Math.random() * V;
        let F = 0, W = -1;
        for (let K = 0; K < S.length; K++)
          if (F += S[K].totalPriority, F > R) {
            W = K;
            break;
          }
        W === -1 && (W = Math.floor(Math.random() * S.length));
        const { dimension: j, count: m, totalPriority: M } = S[W];
        $.push(j), S[W].count--, S[W].totalPriority -= M / m, S[W].count === 0 ? (V -= M, S.splice(W, 1)) : V -= M / m;
      }
    return $;
  }
  function c($, S, V, R, F, W, j) {
    return V += $ + S, R.push($), F.push(
      W.l === $ ? W.w : W.l
    ), j.push(W), V;
  }
  function u($ = null) {
    if (!x?.length) return [];
    if (!A.size) return [];
    const S = /* @__PURE__ */ new Map();
    let V = 0;
    const R = [], F = [], W = [];
    let j = null, m = !0;
    for (let P = 0; P < this.config.subset.guillotine.shuffles; P++) {
      V = 0, R.length = 0, F.length = 0, W.length = 0, j = null, m = !0;
      const _ = l();
      for (const z of _) {
        if (m ? j = z : j = h + z, V + j > g) continue;
        const q = o(
          z,
          F,
          W,
          $
        );
        q && (V = c(
          z,
          m ? 0 : h,
          V,
          R,
          W,
          q,
          F
        ), m = !1);
      }
      if (V) {
        const z = V / g;
        if (xt([() => nt(z).to.lessThanOrEqual(1)]), z < this.config.subset.efficiency.limit) continue;
        const q = F.map((te, he) => he);
        q.sort((te, he) => W[he] !== W[te] ? W[he] - W[te] : R[he] - R[te]);
        const Q = q.map(
          (te) => R[te]
        ), ie = q.map(
          (te) => F[te]
        );
        xt([
          () => nt(rf(ie)).to.be.false
        ]), S.set(
          Q.join("-"),
          {
            usedDimensions: Q,
            usedShapes: ie,
            efficiency: z,
            target: g,
            totalLength: V,
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
      (P, _) => P.efficiency > _.efficiency ? -1 : P.efficiency < _.efficiency ? 1 : P.efficiency === _.efficiency ? _.usedDimensions.length - P.usedDimensions.length : 0
    );
    const K = M.slice(
      0,
      20
    );
    if (!K.length) return [];
    const re = K.slice(
      0,
      typeof this.config.guillotine.stripShapes.iterations == "number" ? this.config.guillotine.stripShapes.iterations : 1
    );
    return re.length ? (re.forEach(
      (P) => {
        P.usedShapes.forEach(
          (_, z) => {
            const q = P.usedDimensions[z];
            xt([() => nt([_.l, _.w].includes(q)).to.be.true]);
            let Q;
            _.isSquare ? Q = 0 : _.longSide === q ? Q = t.getStock.cutPreference === "l" ? 1 : 0 : Q = t.getStock.cutPreference === "l" ? 0 : 1, _.guillotineState || (_.guillotineState = new Qt({})), _.guillotineState.setStripShapeBatchGroup(C, {
              stockId: t.getStock.autoId,
              dimension: q,
              rot: Q,
              order: z,
              //by this point sorting should have taken place
              priorityShape: P.priorityShape
            });
          }
        ), C++, xt(
          [
            () => {
              const _ = P.usedDimensions.reduce(
                (Q, ie) => Q + ie,
                0
              ), z = (P.usedDimensions.length - 1) * h, q = _ + z;
              return nt(ae.lessThanOrEqualTo(q, g)).to.be.true;
            },
            () => nt(
              re.every((_) => _.efficiency >= this.config.subset.efficiency.limit)
            ).to.be.true,
            () => nt(
              re.every(
                (_) => _.usedDimensions.length === _.usedShapes.length
              )
            ).to.be.true
          ]
        );
      }
    ), re) : [];
  }
  const f = Wt(t.cutPreference), h = t.getStock.bladeWidth, g = t[f];
  xt([() => nt(g).to.be.a("number")]);
  const x = tf(
    t.shapes,
    e,
    i
  ), E = t.getStock;
  x.sort(($, S) => {
    const V = S.getPriority(E) - $.getPriority(E);
    if (V !== 0) return V;
    const R = $.id.toString().split("."), F = S.id.toString().split(".");
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
    const S = Math.min(t.shapes.length, this.config.guillotine.stripShapes.numPriorityShapes);
    for (let V = 0; V < S; V++) {
      const R = u.call(this, $);
      L.push(...R);
    }
  }
  return ei("subset", `${L.length} strip shape results ${L.map(($) => $.usedShapes.map((S) => S.id).join()).join(" | ")}`), L?.length ? L.length : 0;
}
function Qh(t, e, i, s = !0) {
  if (!t || !e || !i) return !1;
  if (t.autoId === e.autoId)
    throw console.error("[collision] ERROR: Shape/group is in testShapes array!"), console.error(`  thisShape: ${t.autoId} (${t.id})`), console.error(`  testShape: ${e.autoId} (${e.id})`), console.error(`  thisShape === testShape: ${t === e}`), new Error(`collision comparing to self ${t.autoId}, ${e.autoId}`);
  const n = s ? i.bladeWidth : 0, o = t.x + t.l + n, a = e.x + e.l + n;
  if (!ae.lessThan(t.x, a) || !ae.greaterThan(o, e.x))
    return !1;
  const r = t.y + t.w + n, l = e.y + e.w + n;
  return ae.lessThan(t.y, l) && ae.greaterThan(r, e.y);
}
function ep(t, e, i) {
  for (const s of e)
    if (t.autoId !== s.autoId && Qh(t, s, i))
      return !0;
  return !1;
}
function tp(t) {
  const e = {};
  return t.forEach((i) => {
    i.shapeIds.forEach((s) => {
      const n = i.q || 1;
      e[s] ? e[s] += n : e[s] = n;
    });
  }), e;
}
function ip(t, e, i = !0) {
  const s = tp(t), n = [];
  for (const o in s) {
    const a = s[o], r = e.findIndex((u) => u.autoId === o), l = e[r], c = lt.groupQuantity({
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
function hl(t) {
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
  } = t, g = c ?? h?.subset?.shuffles ?? 10;
  xt([
    () => nt(s).to.be.greaterThan(0)
  ]);
  const x = sp(e, r, n, i, f);
  if (x.length < 2) return !1;
  const E = { config: h }, L = Xh.call(
    E,
    i.bladeWidth,
    x,
    i.getStock,
    op(r),
    s,
    a,
    g,
    l
  );
  if (!L) return !1;
  if (L?.shapes?.length > 1 && L?.totalLength) {
    let C;
    try {
      C = new vn({
        id: o,
        direction: r,
        shapes: L.shapes,
        container: i,
        type: u
      }), ei("groups", `[createGroup] Created group ${C.id} direction=${r} dims=${C.l}x${C.w} with ${C.shapes.length} shapes, [${C.shapes.map((A) => A.id).join()} for ${i.getType()} ${i.id}]`);
    } catch (A) {
      return console.log("group error", A), !1;
    }
    return C;
  }
  return !1;
}
function aS(t) {
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
  } = t, g = l ?? u?.groups?.tolerance ?? 0.05;
  if (!ke(s))
    throw new Error("attempting to create a group with no target size");
  if (s <= 0)
    return console.warn(`Invalid targetSize ${s} - cannot create groups with zero or negative target size`), [];
  if (!ke(i))
    throw new Error("attempting to create a group with no container");
  if (!e?.length || e.length < 2) return [];
  const x = pl(o), E = Wt(o), L = x === "horizontal" ? i.w : i.l, C = i.getStock;
  let A = [...e], $ = a;
  if ($)
    if (rd(
      $,
      $[E],
      E,
      C
    ) === !1)
      $ = null;
    else {
      const K = $[E], re = K * (1 - g);
      let P = K * (1 + g);
      P > i[E] && (P = i[E]), A = e.filter((_) => !Je(_) || _.autoId === $.autoId ? !1 : Ia(
        _,
        re,
        P,
        E,
        C
      ));
    }
  const S = Qd(
    A,
    i,
    E
  ), V = Array.from(S.keys()).filter((M) => M <= L).sort((M, K) => K - M);
  if (V.length === 0) return [];
  const R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
  for (const M of A) {
    const K = /* @__PURE__ */ new Map();
    for (const re of V) {
      const P = re * (1 - g);
      let _ = re * (1 + g);
      _ > i[E] && (_ = i[E]);
      const z = Ia(
        M,
        P,
        _,
        E,
        C
      );
      K.set(re, z);
    }
    F.set(M.autoId, K);
  }
  for (const M of V) {
    const K = [];
    for (const re of A) {
      if (!Je(re)) continue;
      F.get(re.autoId)?.get(M) && K.push(re);
    }
    R.set(M, K);
  }
  const W = [], j = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
  for (const M of V) {
    if (c !== void 0 && W.length >= c)
      break;
    const K = [];
    let re = R.get(M).filter((P) => !j.has(P.autoId));
    if (!(re.length < 2)) {
      for (; re.length >= 2 && !(c !== void 0 && W.length >= c); ) {
        let P, _ = !1;
        if (K.length && !r) {
          const z = K[K.length - 1], q = z.shapes.slice(), Q = /* @__PURE__ */ new Set(), ie = new Set(re.map((be) => be.autoId)), te = [];
          let he = !0;
          for (const be of q) {
            let Oe = !1;
            if (ie.has(be.autoId) && !Q.has(be.autoId)) {
              const U = re.find((ct) => ct.autoId === be.autoId);
              U && (te.push(U), Q.add(be.autoId), Oe = !0);
            }
            if (!Oe)
              for (const U of re) {
                if (Q.has(U.autoId)) continue;
                const ct = `${U.autoId}-${be.autoId}`;
                if (m.has(ct) || m.set(ct, U.isIdentical(be)), m.get(ct)) {
                  te.push(U), Q.add(U.autoId), Oe = !0;
                  break;
                }
              }
            if (!Oe) {
              he = !1;
              break;
            }
          }
          if (he && te.length === q.length) {
            if (_ = !0, z.positions?.length === te.length)
              for (let be = 0; be < te.length; be++) {
                const Oe = te[be], U = q[be], ct = z.positions[be]?.rot ?? U.rot;
                if (Oe.rot !== ct && !rt(Oe, ct, i)) {
                  console.warn(`  Failed to rotate ${Oe.id} to ${ct} - skipping clone`), _ = !1;
                  break;
                }
              }
            _ && (xt([
              () => nt(te.every((be, Oe) => {
                const U = z.positions[Oe]?.rot ?? q[Oe].rot;
                return be.rot === U;
              }), "at least one identical group shape not rotated correctly").to.be.true
            ]), P = z.cloneWithNewShapes(te));
          }
        }
        if (_ || (P = hl({
          shapes: re,
          container: i,
          targetSize: s,
          d: M,
          id: "g" + (typeof f?.group == "number" ? f.group : 0),
          exact: n,
          groupDirection: x,
          firstShape: $,
          tolerance: g,
          config: u,
          type: h
        })), P) {
          typeof f?.group == "number" && f.group++, K.push(P), P.shapes.forEach((q) => j.add(q.autoId));
          const z = [];
          for (const q of re)
            j.has(q.autoId) || z.push(q);
          if (re = z, re.length < 2) break;
        } else
          break;
      }
      W.push(...K);
    }
  }
  return W;
}
function sp(t, e, i, s, n = 1e-3) {
  return t.filter((o) => {
    if (o.isSquare) return !0;
    const a = i * (1 - n), r = i * (1 + n), l = o.l >= a && o.l <= r, c = o.w >= a && o.w <= r;
    let u = null;
    if (l && c) {
      const f = Math.abs(o.l - i), h = Math.abs(o.w - i);
      u = f <= h ? "l" : "w";
    } else l ? u = "l" : c && (u = "w");
    if (u !== null) {
      const f = np(
        u,
        e,
        o.rot
      );
      return bt(o, f, s) ? rt(o, f, s) : !1;
    }
    return !1;
  });
}
function np(t, e, i) {
  return e === null ? t === "l" : t === (e === "vertical" ? "l" : "w") ? i === 1 : i === 0;
}
function pl(t) {
  if (!["l", "w"].includes(t)) throw new Error("incorrect direction value");
  if (t === "l") return "horizontal";
  if (t === "w") return "vertical";
}
function op(t) {
  if (!["horizontal", "vertical"].includes(t)) throw new Error("incorrect groupDirection value");
  if (t === "horizontal") return "l";
  if (t === "vertical") return "w";
}
function ap(t, e, i) {
  return t.filter((s) => s.l === e[i] || s.w === e[i]);
}
function rp(t, e) {
  const i = Array.isArray(e) ? e : [e], s = /* @__PURE__ */ new Set();
  for (const n of i)
    if (n.shapes?.length)
      for (const o of n.shapes)
        s.add(o.autoId);
  return t.filter((n) => Ue(n) || !s.has(n.autoId));
}
function lp(t, e = "") {
  const i = /* @__PURE__ */ new Set();
  t.filter(Ue).forEach((a) => {
    a.shapes?.forEach((r) => {
      i.add(r.autoId);
    });
  });
  const n = t.filter((a) => Je(a)).filter((a) => i.has(a.autoId)), o = e ? ` [${e}]` : "";
  nt(
    n.length,
    `${o} Found ${n.length} shapes that exist both in groups and independently: ${n.map((a) => a.id || a.autoId).join(", ")}`
  ).to.equal(0);
}
function rS(t) {
  const e = [], i = t.filter((n) => Ue(n)), s = t.filter((n) => Je(n));
  for (const n of i)
    n.added && e.push(n);
  for (const n of s)
    n.added && !n.group.inGroup && e.push(n);
  return e;
}
function cp(t, e) {
  t.push(e), t.sort((s, n) => (n.score?.total || 0) - (s.score?.total || 0));
  const i = t[0];
  if (i.score?.total && Ue(i) && (i.score?.total ?? 0) > (e.bestScore?.total ?? 0))
    return e.setBestScore(i), e.bestScore.group = i, i;
}
function lS(t) {
  const { container: e, containerPlacedShapes: i, unplacedShapes: s, shape: n, point: o, config: a, scoreFunction: r } = t;
  if (s.length < 3) return;
  ei("groups", `[POSITION GROUPS] Creating groups at position (${o.x},${o.y}) for shape ${n.id} in container ${e.id} (${e.cutType})`);
  let l = !1;
  n.orientationLock || (l = !0, n.orientationLock = n.rot === 1 ? "w" : "l");
  let c = [], u = [];
  Ni(e) ? u = [e.cutDirection] : u = e?.saw?.stockType === "roll" ? ["w"] : ["l", "w"];
  for (const g of u) {
    const x = Wt(g), E = g === "l" ? "x" : "y", L = e[g] - n[E] - e.bladeWidth, C = e[g] - n[E], A = e[g] * 0.6;
    if (L <= 0 || C < A) continue;
    const $ = ap(
      s,
      n,
      x
    );
    if ($.length < 2) continue;
    const S = hl({
      shapes: $,
      container: e,
      targetSize: L,
      d: n[x],
      id: "g" + n.id,
      exact: !1,
      groupDirection: pl(g),
      firstShape: n,
      iterations: 40,
      config: {
        subset: a.subset
      }
    });
    S && c.push(S);
  }
  c.sort((g, x) => x.efficiency - g.efficiency), c = c.slice(0, a.sample.groupSize);
  for (const g of c)
    g.x = o.x, g.y = o.y, g.outOfBounds = g.x + g.l > e.l || g.y + g.w > e.w, !g.outOfBounds && (ep(g, i, e) || r(g, e, i, s, o));
  s.forEach((g) => g.resetGroupData());
  const f = cp(c, n), h = c.filter((g) => Ue(g) && g !== f);
  if (h.length > 0 && (ei("groups", `[POSITION GROUPS] Destroying ${h.length} non-winning groups`), h.forEach((g) => {
    ei("groups", `  Destroying group ${g.id} (${g.shapes?.length || 0} shapes)`), g.destroy();
  })), f) {
    if (ei("groups", `[POSITION GROUPS] Winner: group ${f.id} with score ${f.score.total.toFixed(2)} (beat shape ${n.id} score ${n.score?.total?.toFixed(2) || 0})`), Ni(e)) {
      e.shapes.push(f);
      const g = e.shapes.length;
      e.shapes = rp(e.shapes, f);
      const x = g - e.shapes.length;
      x > 0 && ei("groups", `[POSITION GROUPS] Removed ${x} child shapes from segment after adding group ${f.id}`);
    }
  } else c.length > 0 && ei("groups", `[POSITION GROUPS] No winning group - shape ${n.id} scored better than ${c.length} groups`);
  return l && (n.orientationLock = null), f && Ni(e) && xt([
    () => lp(e.shapes, "POSITION GROUPS")
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
function Vs(t, e, i = null) {
  for (const s of e) {
    if (!s) return;
    bs(t, s, i);
  }
}
function Fe(t, e, i, s, n) {
  const o = up[t](e, i);
  return s && (o.corner = s), n && (o.direction = n), o;
}
const up = {
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
function dp(t, e, i) {
  const s = new ni(), n = i.toArray().sort(gl), o = e.bladeWidth;
  if (n.forEach((a) => {
    const r = a.corner, l = a.type;
    if (!o)
      s.add(a);
    else
      switch (r) {
        case "topRight":
          {
            const c = Fe("top", a, o, r);
            l && (c.type = l), s.add(c);
            const u = Fe("right", a, o, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "topLeft":
          {
            const c = Fe("top", a, o, r);
            l && (c.type = l), s.add(c);
            const u = Fe("left", a, o, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomRight":
          {
            const c = Fe("bottom", a, o, r);
            l && (c.type = l), s.add(c);
            const u = Fe("right", a, o, r);
            l && (u.type = l), s.add(u);
          }
          break;
        case "bottomLeft":
          {
            const c = Fe("bottom", a, o, r);
            l && (c.type = l), s.add(c);
            const u = Fe("left", a, o, r);
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
      const g = f[h];
      (ae.lessThan(g.x, r) || ae.lessThan(g.y, l) || ae.greaterThan(g.x, c) || ae.greaterThan(g.y, u)) && f.splice(h, 1);
    }
    s.clear(), f.forEach((h) => s.add(h)), a.clear(), f = s.toArray();
    for (let h = f.length; h--; ) {
      const g = f[h];
      for (let x = t.length; x--; ) {
        const E = t[x];
        if (g.collidesWith(E)) {
          s.remove(g.x, g.y);
          break;
        }
      }
    }
  }
  return s;
}
function fp(t, e, i) {
  let s = [];
  const n = t.minSpacing, o = e.corner, a = e.direction;
  if (e.type === "shape")
    switch (o) {
      case "topLeft":
        a === "rl" && (s.push(Fe("right", e, n, o, a)), s.push(Fe("topRight", e, n, o, a))), a === "bt" && (s.push(Fe("bottom", e, n, o, a)), s.push(Fe("bottomLeft", e, n, o, a)));
        break;
      case "topRight":
        a === "lr" && (s.push(Fe("left", e, n, o, a)), s.push(Fe("topLeft", e, n, o, a))), a === "bt" && (s.push(Fe("bottom", e, n, o, a)), s.push(Fe("bottomRight", e, n, o, a)));
        break;
      case "bottomRight":
        a === "lr" && (s.push(Fe("left", e, n, o, a)), s.push(Fe("bottomLeft", e, n, o, a))), a === "tb" && (s.push(Fe("top", e, n, o, a)), s.push(Fe("topRight", e, n, o, a)));
        break;
      case "bottomLeft":
        a === "rl" && (s.push(Fe("right", e, n, o, a)), s.push(Fe("bottomRight", e, n, o, a))), a === "tb" && (s.push(Fe("top", e, n, o, a)), s.push(Fe("topLeft", e, n, o, a)));
        break;
    }
  else if (e.type === "edge")
    switch (a) {
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
    l.raycast = !0, Vs(r, bl(t, l, i).toArray());
  return vl(t, i, r), r;
}
function hp(t, e) {
  const i = new ni();
  return t.sort(gl), t.forEach((s) => {
    Ue(s) ? (Vs(i, s.getCoords(e)), s.shapes.forEach((n) => {
      const o = n.getCoords(e);
      Vs(i, o, "group");
    })) : Vs(i, s.getCoords(e));
  }), i.points.forEach((s) => {
    s.stock = e.getStock;
  }), i;
}
function pp(t = [], e, i) {
  const s = hp(
    t === null ? e : t,
    i
  );
  return dp(
    e,
    i,
    s
  );
}
function gl(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function ml(t, e, i, s, n, o) {
  t.a = e.id, t.b = i ? i.id : null, t.direction = s, t.raycast = !0, t.type = n, t.corner = o;
}
function gp(t, e) {
  if (t.saw.cutType !== "efficiency" || e.length <= 1) return null;
  let i = new ni();
  const s = yl(e, t);
  for (const r of e)
    for (const l of s) {
      if (l.shape.id === r.id) continue;
      const c = Object.values(l.rays).filter((u) => u !== void 0);
      for (const u of c)
        mp(
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
      const f = new tt(u.x2, u.y2);
      o === u.direction && (ml(f, r, null, u.direction, "edge"), bs(i, f));
    }
  }), i = yp(i), i;
}
function yl(t, e) {
  return t.map((i) => {
    const s = Kh(i, e);
    return {
      shape: i,
      rays: s
    };
  });
}
function mp(t, e, i, s) {
  switch (t.direction) {
    case "rl":
      Os(
        t,
        e,
        i,
        s,
        i.x + i.l
      );
      break;
    case "lr":
      Os(
        t,
        e,
        i,
        s,
        i.x
      );
      break;
    case "tb":
      Os(
        t,
        e,
        i,
        s,
        i.y + i.w
      );
      break;
    case "bt":
      Os(
        t,
        e,
        i,
        s,
        i.y
      );
      break;
  }
}
function Os(t, e, i, s, n) {
  const o = t.dimension === "w", a = o ? "y" : "x", r = o ? "x" : "y", l = o ? "l" : "w";
  if (t[`${r}1`] >= i[r] && t[`${r}1`] <= i[r] + i[l]) {
    const c = t.direction === "lr" && t[`${a}1`] <= n && t[`${a}2`] >= n, u = t.direction === "rl" && t[`${a}1`] >= n && t[`${a}2`] <= n, f = t.direction === "bt" && t[`${a}1`] <= n && t[`${a}2`] >= n, h = t.direction === "tb" && t[`${a}1`] >= n && t[`${a}2`] <= n;
    if (c || u || f || h) {
      const x = o ? t[`${r}1`] : n, E = o ? n : t[`${r}1`], L = new tt(x, E), C = t.origin;
      ml(L, e, i, t.direction, "shape", C), bs(s, L);
    }
  }
}
function yp(t) {
  const e = new ni();
  return t.points.size === 0 || new Set(t.toArray().map((s) => s.a)).forEach((s) => {
    const n = t.toArray().filter((o) => o.a === s);
    ["right", "left", "top", "bottom"].forEach((o) => {
      const a = bp(
        n,
        o
      );
      a && bs(e, a);
    });
  }), e;
}
function bp(t, e) {
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
function bl(t, e, i) {
  const s = new ni(), n = e.getAvailableShapePositions(i);
  for (const o of n) {
    let a;
    switch (a = vp(e, t, i), o) {
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
    bs(s, a);
  }
  return vl(t, i, s), s;
}
function vp(t, e, i) {
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
function vl(t, e, i) {
  let s, n, o, a;
  e?.constructor?.name === "Stock" && e?.trimmed || e?.constructor?.name === "Segment" ? (s = 0, n = 0, o = e.x + e.l - t.l, a = e.y + e.w - t.w) : (s = e?.trim?.l1, n = e?.trim?.w1, o = e.l - e?.trim?.l2 - t.l, a = e.w - e?.trim?.w2 - t.w);
  const r = i.toArray();
  for (let l = r.length; l--; ) {
    const c = r[l];
    (ae.lessThan(c.x, s) || ae.lessThan(c.y, n) || ae.greaterThan(c.x, o) || ae.greaterThan(c.y, a) || c.x < 0 || c.y < 0) && i.remove(c.x, c.y);
  }
}
const wp = B({
  id: y(),
  count: d(),
  name: y(),
  l: d(),
  w: d(),
  t: d(),
  material: y()
}), ta = B({
  inputStock: ee(Ii),
  inputShapes: ee(as),
  inputSaw: en,
  inputUserGroups: ee(Qo),
  // Centralized extras options for UI dropdowns
  extrasOptions: B({
    banding: B({
      options: ee(y())
    }).optional(),
    finish: B({
      options: ee(y())
    }).optional(),
    planing: B({
      options: ee(y())
    }).optional()
  }).optional()
}).optional(), Sp = B({
  // Banding metrics
  bandingLengthByType: Se(y(), d()).default({}),
  // Finish metrics (by face)
  finishAreaByType: Se(y(), d()).default({}),
  // Material summary with nested structure
  materialSummary: Se(
    y(),
    // material name
    Se(
      y(),
      // thickness
      B({
        used: d(),
        stacks: d(),
        bandingLengthByType: Se(y(), d())
      })
    )
  ).default({}),
  // Tallies
  usedStockTally: Se(y(), d()).default({}),
  addedPartTally: Se(y(), d()).default({}),
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
}), ia = Sp.extend({
  bandingLengthByType: Se(y(), d()).default({}),
  unplacedParts: ee(wp).default([])
}), xp = B({
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
  performance: y().optional(),
  apiVersion: d().optional(),
  // Renamed from 'v'
  metadata: ia.optional(),
  credits: d().optional(),
  // Optional input data for debugging/API reporting
  inputs: ta
});
B({
  // Job execution metadata
  success: D(),
  socketId: y().nullable().default(null),
  userId: y(),
  api: D(),
  app: D(),
  widget: D().optional(),
  cached: D().optional(),
  hash: y().optional(),
  webhook: y().optional(),
  config: xe().optional(),
  error: y().optional(),
  jobId: d().optional(),
  // Input data
  inputs: ta,
  // The actual optimization results
  optimisation: xp
});
B({
  // Database metadata
  jobId: d().optional(),
  // Job execution data
  success: D(),
  socketId: y().nullable().default(null),
  userId: y(),
  api: D(),
  app: D(),
  widget: D().optional(),
  cached: D().optional(),
  hash: y().optional(),
  webhook: y().optional(),
  config: xe().optional(),
  error: y().optional(),
  // Optimization results (flattened from optimization object)
  stockList: Le("Stock"),
  shapeList: Le("Shape"),
  cutList: Le("Cut").optional(),
  segmentList: Le("Segment").optional(),
  offcuts: Le("Offcut").optional(),
  saw: ge("Saw"),
  unusableShapes: Le("Shape").optional(),
  unavailableStock: Le("Stock").optional(),
  performance: y().optional(),
  metadata: ia.optional(),
  apiVersion: d().optional(),
  credits: d().optional(),
  // Input data
  inputs: ta,
  // Computed fields for easier querying/display
  numParts: d().optional(),
  numStock: d().optional()
});
const kp = B({
  id: y().optional(),
  name: y().optional(),
  l: d(),
  w: d(),
  t: d().nullable().optional(),
  material: y().optional(),
  q: d().optional(),
  orientationLock: pe([
    me(""),
    me("l"),
    me("w")
  ]).nullable().optional(),
  // Basic extras for display
  banding: xe().optional(),
  finish: xe().optional(),
  planing: xe().optional()
}), wl = B({
  issues: ee(y()),
  id: y(),
  duplicate: D(),
  name: y(),
  added: D(),
  x: d(),
  y: d(),
  l: d(),
  w: d(),
  t: d(),
  q: d().optional(),
  // Add quantity for checkout compatibility
  orientationLock: pe([
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
  material: y(),
  banding: xe(),
  // Using any for now, could use bandingPropertiesSchema
  bandingType: xe(),
  // Legacy field
  finish: xe(),
  // Using any for now, could use finishPropertiesSchema
  stock: B({ id: y() }),
  rot: D(),
  notes: y(),
  customData: Se(y(), pe([y(), d(), D()]))
}), Ip = B({
  issues: ee(y()),
  id: y(),
  duplicate: D().optional(),
  name: y(),
  l: d(),
  w: d(),
  t: d().nullable(),
  material: y(),
  cost: d(),
  used: D(),
  grain: pe([
    me(""),
    me("l"),
    me("w"),
    Rt()
  ]).nullable(),
  trim: B({
    l1: d(),
    l2: d(),
    w1: d(),
    w2: d()
  }),
  parts: ee(wl),
  efficiency: d(),
  notes: y().optional(),
  // Legacy V1 fields
  blade: B({
    width: d()
  }).optional(),
  cutPreference: pe([
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
}), cS = Us({
  // Context - using z.any() for complex external types
  job: ot().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: kt().nullable().default(null).describe("Socket.io connection ID"),
  user: ot().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: ot().describe("Configuration object"),
  // Type: Config
  api: Xe().nullable().default(null).describe("API mode flag"),
  app: Xe().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: ge("Saw").describe("Saw configuration"),
  stockList: Le("Stock").default([]).describe("List of stock materials"),
  shapeList: Rs(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  userGroups: Le("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Le("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Rs(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Rs(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: fn,
  // Results storage
  cutList: Le("Cut").default([]).describe("List of cuts to make"),
  segmentList: Le("Segment").default([]).describe("List of segments"),
  offcuts: Le("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Le("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: Xe().default(!1).describe("Use inventory system"),
  successMetric: kt().default(ft.successMetric).describe("Metric for optimization success"),
  enableEvo: Xe().default(!0).describe("Enable evolutionary algorithm"),
  weighting: ba(kt(), ot()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: ot().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: ot().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: Us({
    placement: Ys().default(0),
    group: Ys().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: Xe().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: Xe().default(!1).describe("Run guillotine second pass"),
  runningEvo: Xe().default(!1).describe("Currently running evolution"),
  evolutionVisData: ki(ba(kt(), eu())).default([]).describe("Evolution visualization data"),
  final: Xe().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: Xe().default(!1).describe("Has minimum spacing requirement"),
  hasShapeLevelMinSpacing: Xe().default(!1).describe("Has shape-level minimum spacing")
}), uS = {}, Cp = tu(["decimal", "fraction"]), Pp = Us({
  job: ot().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Preserve system properties like __entityType and autoId
  inputSaw: en,
  inputShapes: ki(as),
  inputStock: ki(Ii),
  inputUserGroups: ki(Qo).optional(),
  // Number format for conversion
  numberFormat: Cp.optional(),
  // Algorithm configuration
  enableEvo: Xe().default(!0),
  weighting: ot().optional(),
  successMetric: kt().optional(),
  useInventory: Xe().default(!1),
  // Context
  socketId: kt().optional(),
  user: ot().optional(),
  // IUser type
  // Application flags
  widget: Xe().optional(),
  api: Xe().optional(),
  app: Xe().optional(),
  domain: kt().optional(),
  // API specific
  config: ot().optional(),
  v: Ys().optional(),
  // API version
  webhook: kt().optional()
});
Us({
  job: ot().optional(),
  // Type: Job from BullMQ
  saw: ot(),
  // Runtime Saw instance
  shapeList: ki(ot()),
  // Runtime Shape instances
  stockList: ki(ot()),
  // Runtime Stock instances
  userGroups: ki(ot()).optional(),
  // Runtime Group instances
  enableEvo: Xe(),
  weighting: ot().optional(),
  successMetric: kt().optional(),
  useInventory: Xe(),
  socketId: kt().optional(),
  user: ot().optional(),
  widget: Xe().optional(),
  api: Xe().optional(),
  app: Xe().optional(),
  domain: kt().optional(),
  config: ot().optional(),
  v: Ys().optional(),
  webhook: kt().optional()
});
const Tp = (t, e, i) => {
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
}, Ap = /* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), cn = Object.keys(Ap).map((t) => {
  const e = t.match(/\/([a-zA-Z0-9_-]+)\.json$/);
  return e ? e[1] : "";
}).filter((t) => t !== "");
cn.length === 0 && console.warn("[i18n] No language files found in ../translation/. Check paths and bundler setup for import.meta.glob.");
const Fo = "en", Wi = ar.createInstance();
function G(t, e) {
  if (yr())
    return t;
  if (!Wi.isInitialized) {
    const s = Array.isArray(t) ? t.join(", ") : String(t);
    return console.warn(`[i18n] t function called before i18next was initialized. Key: ${s}. Returning key.`), s;
  }
  let i = Wi.t(t, e);
  return i = typeof i == "string" ? i : String(i), Hi(i);
}
const $s = {}, Op = {
  type: "backend",
  init: () => {
  },
  // The `namespace` parameter will now be ignored by your backend logic
  read: async (t, e, i) => {
    try {
      if ($s[t]) {
        i(null, $s[t]);
        return;
      }
      const s = await Tp(/* @__PURE__ */ Object.assign({ "../translation/ca.json": () => import("./ca-DEuuAbQh.js"), "../translation/cs.json": () => import("./cs-CnD9BRu-.js"), "../translation/da.json": () => import("./da-D6MoqAc1.js"), "../translation/de.json": () => import("./de-u5BK8GFN.js"), "../translation/el.json": () => import("./el-DlfuuCk-.js"), "../translation/en.json": () => import("./en-BRXrqSW9.js"), "../translation/es.json": () => import("./es-2akjOdjG.js"), "../translation/fi.json": () => import("./fi-CzLrqI0h.js"), "../translation/fr.json": () => import("./fr-Dist6drR.js"), "../translation/hi.json": () => import("./hi-Dbvp9Tyv.js"), "../translation/hr.json": () => import("./hr-v8qeOH6E.js"), "../translation/hu.json": () => import("./hu-dYojl_PC.js"), "../translation/id.json": () => import("./id-84Fqjk34.js"), "../translation/it.json": () => import("./it-CnQIBJCJ.js"), "../translation/ja.json": () => import("./ja-BDI0LBOr.js"), "../translation/ko.json": () => import("./ko-BbVakhKG.js"), "../translation/ms.json": () => import("./ms-Cjc3qvp4.js"), "../translation/nl.json": () => import("./nl-CgEEvu3H.js"), "../translation/no.json": () => import("./no-BY7n6LG8.js"), "../translation/pl.json": () => import("./pl-CqrNkBkC.js"), "../translation/pt.json": () => import("./pt-Bu027J1f.js"), "../translation/ro.json": () => import("./ro-CL9WvTqA.js"), "../translation/ru.json": () => import("./ru-BxeD3kJr.js"), "../translation/sk.json": () => import("./sk-CVgmLKjU.js"), "../translation/sv.json": () => import("./sv-B-puVIOr.js"), "../translation/th.json": () => import("./th-DeZXyNCC.js"), "../translation/tr.json": () => import("./tr-DGG_3I6I.js"), "../translation/uk.json": () => import("./uk-QnbOtvjl.js"), "../translation/vi.json": () => import("./vi-C7fdL88Y.js"), "../translation/zh.json": () => import("./zh-CZOeNrxM.js") }), `../translation/${t}.json`, 3);
      $s[t] = s.default, i(null, $s[t]);
    } catch (s) {
      const n = `[i18n] Failed to load local resource module for language '${t}'. Error: ${s.message}`;
      console.warn(n, s), i(s, null);
    }
  }
};
async function $p() {
  return ku(Wi), await Wi.use(fc).use(Op).init({
    debug: !1,
    fallbackLng: Fo,
    supportedLngs: cn.length > 0 ? cn : [Fo],
    interpolation: {
      format: function(t, e) {
        return e === "c" ? wu(t) : e === "sc" ? Hi(t) : t;
      }
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    }
  }), Wi;
}
const Fp = $p().catch((t) => {
  console.error("[i18n] CRITICAL: Initialization failed.", t);
}), dS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, FALLBACK_LANGUAGE: Fo, SUPPORTED_LANGUAGES: cn, i18nextInstance: Wi, i18nextReady: Fp, t: G }, Symbol.toStringTag, { value: "Module" }));
class Ma {
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
    const i = e.banding, s = "_banding" in e ? e._banding : void 0, n = ye(e) ? e.bandingOptions : void 0;
    if (!i && !s && !n) return !1;
    if (i && i instanceof Et) {
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
        Ct.includes(f) && (o[f] = h);
    }
    if (s && typeof s == "object") {
      const u = this.migrateSideNames(s);
      for (const [f, h] of Object.entries(u))
        Ct.includes(f) && (a[f] = h);
    }
    if (n && typeof n == "object") {
      n.all && (r.sides.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && Ct.includes(u) && f && (r.sides[u] = f);
    }
    const l = new Et(Object.keys(o).length > 0 ? { sides: o } : {}), c = Object.keys(a).length > 0 ? new Et({ sides: a }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = l : ye(e) && (e.banding = l), c && "_banding" in e && (e._banding = c), ye(e) && n && (e.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const i = e.finish, s = "_finish" in e ? e._finish : void 0, n = ye(e) ? e.finishOptions : void 0;
    if (!i && !s && !n || i && i instanceof yt)
      return !1;
    const o = {}, a = {}, r = { faces: {} };
    if (i && typeof i == "object")
      for (const [u, f] of Object.entries(i))
        dt.includes(u) && (o[u] = f);
    if (s && typeof s == "object")
      for (const [u, f] of Object.entries(s))
        dt.includes(u) && (a[u] = f);
    if (n && typeof n == "object") {
      n.all && (r.faces.all = n.all);
      for (const [u, f] of Object.entries(n))
        u !== "all" && dt.includes(u) && f && (r.faces[u] = f);
    }
    const l = new yt(Object.keys(o).length > 0 ? { faces: o } : {}), c = Object.keys(a).length > 0 ? new yt({ faces: a }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = l : ye(e) && (e.finish = l), c && "_finish" in e && (e._finish = c), ye(e) && n && (e.finishOptions = r), !0;
  }
  /**
   * Check if shape needs migration (has old structure)
   */
  static needsMigration(e) {
    const i = e.banding;
    if (i && typeof i == "object" && !(i instanceof Et) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_banding" in e) {
      const n = e._banding;
      if (n && typeof n == "object" && !(n instanceof Et) && !("sides" in n) && !("faces" in n))
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
          const n = Object.keys(i.sides).filter((o) => !Ct.includes(o));
          if (n.length > 0)
            throw new Error(`Invalid side keys in banding: ${n.join(", ")}`);
        }
      }
      const s = e.finish;
      if (s) {
        if ("sides" in s && s.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in s && s.faces) {
          const n = Object.keys(s.faces).filter((o) => !dt.includes(o));
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
    return "_banding" in e && e._banding && (i._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (i._finish = JSON.parse(JSON.stringify(e._finish))), ye(e) && (e.bandingOptions && (i.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (i.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), i;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, i) {
    "extras" in e && e.extras ? (i.banding && (e.extras.banding = i.banding), i.finish && (e.extras.finish = i.finish)) : ye(e) && (i.banding && (e.banding = i.banding), i.finish && (e.finish = i.finish)), i._banding && "_banding" in e && (e._banding = i._banding), i._finish && "_finish" in e && (e._finish = i._finish), ye(e) && (i.bandingOptions && (e.bandingOptions = i.bandingOptions), i.finishOptions && (e.finishOptions = i.finishOptions));
  }
}
function Lp(t) {
  t?.type && delete t.type, Ep.call(this, t), Dp.call(this, t), Rp.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Lo(e));
}
function Ep(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Dp(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const i = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((s) => i.includes(s)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Rp(t) {
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
  !t || typeof t != "object" || (Ma.needsMigration(t) && Ma.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Fs(t) {
  return t && ("x1" in t || "x2" in t || "y1" in t || "y2" in t ? {
    l1: t.x1 ?? t.l1,
    l2: t.x2 ?? t.l2,
    w1: t.y1 ?? t.w1,
    w2: t.y2 ?? t.w2
  } : t);
}
function Ri(t) {
  if (!t || !Array.isArray(t)) return t;
  const e = {
    "side.x1": "side.l1",
    "side.x2": "side.l2",
    "side.y1": "side.w1",
    "side.y2": "side.w2"
  };
  return t.map((i) => e[i] || i);
}
function Sl(t) {
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
function fS(t) {
  if (!(!t || typeof t != "object")) {
    if (Lp(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = Fs(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = Fs(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = Fs(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: Fs(e.trim)
    } : e)), t.options) {
      if (Sl(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ri(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ri(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ri(t.options.planingLocations)), t.options.extrasLocationGroups)
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
        beam: { cutType: "beam", cutPreference: null }
      }[t.saw.cutPreference];
      s && (t.saw.cutType = s.cutType, t.saw.cutPreference = s.cutPreference);
    }
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => Lo(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && Lo(t);
  }
}
function ci(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function Eo(t) {
  if (!t) return t;
  if ("x1" in t || "x2" in t || "y1" in t || "y2" in t)
    return {
      l1: ci(t.x1 ?? t.l1),
      l2: ci(t.x2 ?? t.l2),
      w1: ci(t.y1 ?? t.w1),
      w2: ci(t.y2 ?? t.w2)
    };
  const i = {};
  return "l1" in t && (i.l1 = ci(t.l1)), "l2" in t && (i.l2 = ci(t.l2)), "w1" in t && (i.w1 = ci(t.w1)), "w2" in t && (i.w2 = ci(t.w2)), Object.keys(i).length > 0 ? i : t;
}
function _a(t) {
  if (!t) return t;
  const e = { ...t };
  return "l1" in e && (e.x1 = e.l1, delete e.l1), "l2" in e && (e.x2 = e.l2, delete e.l2), "w1" in e && (e.y1 = e.w1, delete e.w1), "w2" in e && (e.y2 = e.w2, delete e.w2), e;
}
function Mp(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, i = {}, s = _a(e);
    ke(s.x1) && (i.x1 = s.x1), ke(s.x2) && (i.x2 = s.x2), ke(s.y1) && (i.y1 = s.y1), ke(s.y2) && (i.y2 = s.y2), ke(e.a) && (i.x1 = e.a), ke(e.b) && (i.y1 = e.b), ke(e.c) && (i.x2 = e.c), ke(e.d) && (i.y2 = e.d), Object.keys(i).length > 0 && (t.banding = i);
  }
  if (t.extras?.finish?.faces && (t.finish = t.extras.finish.faces), t.extras?.planing) {
    const e = t.extras.planing, i = {}, s = _a(e.sides || {});
    e.sides && (ke(s.x1) && (i.x1 = s.x1), ke(s.x2) && (i.x2 = s.x2), ke(s.y1) && (i.y1 = s.y1), ke(s.y2) && (i.y2 = s.y2)), e.faces && (ke(e.faces.a) && (i.a = e.faces.a), ke(e.faces.b) && (i.b = e.faces.b)), Object.keys(i).length > 0 && (t.planing = i);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function _p(t) {
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
function Bp(t) {
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
function jp(t) {
  return t ? {
    __entityType: "InputSaw",
    stockType: t.stockType || "sheet",
    bladeWidth: t.bladeWidth || 0,
    cutType: t.cutType || "guillotine",
    cutPreference: t.cutPreference || "l",
    guillotineOptions: t.guillotineOptions ? {
      ...t.guillotineOptions,
      strategy: _p(t.guillotineOptions.strategy)
    } : void 0,
    efficiencyOptions: t.efficiencyOptions ? {
      ...t.efficiencyOptions,
      primaryCompression: Bp(t.efficiencyOptions.primaryCompression)
    } : void 0
  } : {};
}
function Do(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(Do);
  const e = {};
  for (const [i, s] of Object.entries(t))
    i === "__entityType" || i === "autoId" || (e[i] = Do(s));
  return e;
}
function Vp(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: i,
    autoId: s,
    ...n
  } = t;
  return Do(n);
}
function Np(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function Gp(t) {
  return t.rot !== void 0 ? !!t.rot : t.rotated !== void 0 ? !!t.rotated : t.isRotated !== void 0 ? !!t.isRotated : !1;
}
function zp(t) {
  return t ? {
    // Map saw object directly
    saw: jp(t.saw),
    // Map stock array
    stock: qp(t.stock || []),
    // Map parts with modern extras structure
    parts: Wp(t.parts || []),
    // Groups and webhook
    groups: t.groups || [],
    webhook: t.webhook
  } : null;
}
function qp(t) {
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
    return e.trim && (i.trim = Eo(e.trim)), i;
  });
}
function Wp(t) {
  return !t || !Array.isArray(t) ? [] : t.map((e) => {
    const i = { ...e };
    if (e.banding && !e.extras?.banding) {
      const s = Eo(e.banding);
      s && Object.keys(s).length > 0 && (i.extras = {
        ...i.extras,
        banding: { sides: s }
      });
    }
    if (e.extras?.banding?.sides) {
      const s = Eo(e.extras.banding.sides);
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
function Hp(t) {
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
      rot: Gp(e),
      notes: e.notes || ""
    };
    e.added && e.x !== void 0 && (i.x = e.x), e.added && e.y !== void 0 && (i.y = e.y), e.stock && (i.stock = { id: Np(e.stock) });
    const s = { ...e };
    return Mp(s), s.banding && (i.banding = s.banding), s.finish && (i.finish = s.finish), s.planing && (i.planing = s.planing), e.machining && (i.machining = Vp(e.machining)), e.customData && (i.customData = e.customData), i;
  });
}
let xl = {};
const hS = (t, e) => {
  xl[t] = e;
}, In = (t) => xl[t] || null, to = (t, e, i, s) => {
  t.extras || (t.extras = {}), t.extras[e] || (t.extras[e] = { sides: {}, faces: {} });
  const { scope: n, key: o } = mi(i), a = n === "face" ? t.extras[e].faces : t.extras[e].sides;
  a[o] = s;
}, Cn = (t, e, i) => {
  const { scope: s, key: n } = mi(i);
  return (s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides)?.[n] || null;
}, Up = (t, e, i) => {
  const { scope: s, key: n } = mi(i), o = s === "face" ? t.extras?.[e]?.faces : t.extras?.[e]?.sides;
  o && n in o && delete o[n];
}, Yp = (t) => {
  const e = In(t);
  return !e || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 1 && e.options[0][0] === !0 || e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].length === 0 ? "boolean" : e.options.length === 1 && Array.isArray(e.options[0]) && e.options[0].every((i) => typeof i == "string") ? "string" : e.options.length > 1 ? "object" : "string";
}, Ba = !1;
function Kp() {
  return {
    banding: {
      scope: ["sides"],
      sides: ii.map((t) => `side.${t}`)
      // Only use main sides (l1/l2/w1/w2), not corners
    },
    finish: {
      scope: ["faces"],
      faces: dt.map((t) => `face.${t}`)
    },
    planing: {
      scope: ["faces", "sides"],
      faces: dt.map((t) => `face.${t}`),
      sides: ii.map((t) => `side.${t}`),
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
const Zp = Kp(), Kt = (t) => Zp[t] || {
  scope: ["sides"],
  sides: Ct.map((e) => `side.${e}`)
}, Ro = (t) => {
  const e = Kt(t), i = [];
  return e.faces && i.push(...e.faces), e.sides && i.push(...e.sides), i;
}, pS = (t) => (Kt(t).faces || []).map((i) => {
  const s = mi(i);
  return s.scope === "face" ? s.key : void 0;
}).filter((i) => i !== void 0), gS = (t) => (Kt(t).sides || []).map((i) => {
  const s = mi(i);
  return s.scope === "side" ? s.key : void 0;
}).filter((i) => typeof i == "string"), mi = (t) => {
  const e = t.split(".");
  if (e.length !== 2 || e[0] !== "face" && e[0] !== "side")
    throw new Error(`Invalid ExtraLocation format: ${t}. Must be 'face.X' or 'side.X'`);
  const i = e[0], s = e[1];
  if (i === "face" && !dt.includes(s))
    throw new Error(`Invalid face key '${s}' in location '${t}'`);
  if (i === "side" && !Ct.includes(s))
    throw new Error(`Invalid side key '${s}' in location '${t}'`);
  return {
    scope: i,
    key: s,
    original: t
  };
}, ja = (t) => mi(t).scope, kl = (t) => Kt(t).scope.includes("faces"), Il = (t) => Kt(t).scope.includes("sides"), mS = (t) => {
  const e = Kt(t);
  return e.scope.includes("faces") && e.scope.includes("sides");
}, Xp = (t, e) => {
  if (t.length === 1 && t[0].length === 1 && t[0][0] === !0)
    return "boolean";
  const i = t.flat().filter((o) => typeof o == "string"), n = [.../* @__PURE__ */ new Set([...i, ...e || []])].length;
  return n === 0 ? "multiple" : n === 1 ? "single" : "multiple";
}, Jp = (t, e) => {
  const i = t;
  i.extras || (i.extras = {}), i.extras[e] || (i.extras[e] = {});
  const s = i.extras[e];
  kl(e) && (s.faces || (s.faces = {})), Il(e) && (s.sides || (s.sides = {}));
}, Qp = (t, e, i) => {
  Jp(t, e);
  const n = t.extras[e], { scope: o } = mi(i);
  return o === "face" ? {
    extraContainer: n.faces || {}
  } : {
    extraContainer: n.sides || {}
  };
}, hi = (t, e, i) => !!Cn(t, e, i), eg = (t, e, i, s, n) => {
  const o = In(e);
  if (o) {
    const a = Cn(t, e, i);
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
}, yS = (t, e, i, s, n, o, a) => {
  const r = In(e);
  if (r)
    switch (Yp(e)) {
      case "boolean":
        to(t, e, i, !!n);
        break;
      case "string":
        to(t, e, i, String(n));
        break;
      case "object":
        {
          let c = Cn(t, e, i) || {};
          typeof c != "object" && (c = {});
          const u = r.labels.indexOf(s);
          if (u !== -1 && r.options[u] && Array.isArray(r.options[u])) {
            const f = r.options[u];
            f.length === 1 && f[0] === n ? c[s] = !0 : c[s] = n;
          } else
            c[s] = n;
          to(t, e, i, c);
        }
        break;
    }
}, tg = (t, e, i, s) => {
  Up(t, e, i);
}, bS = (t, e, i, s, n) => {
  if (i.length === 0) return null;
  const o = i.map((a) => eg(t, e, a, s));
  if (n === "boolean" || n === "single") {
    const a = o.every((l) => !!l), r = o.every((l) => !l);
    return a ? !0 : r ? !1 : null;
  }
  if (n === "multiple") {
    const a = o[0];
    return o.every((l) => l === a) ? a : null;
  }
  return null;
}, vS = (t, e, i, s) => {
  i.forEach((n) => {
    tg(t, e, n);
  });
}, io = (t, e, i, s, n, o) => {
  const a = Cn(t, e, i), r = [];
  if (a && o?.length)
    if (typeof a == "object" && !Array.isArray(a)) {
      const c = a;
      for (const u of o) {
        const f = c[u];
        if (f)
          if (f === !0) {
            const h = In(e);
            if (h) {
              const g = h.labels.indexOf(u);
              if (g !== -1 && h.options[g] && Array.isArray(h.options[g])) {
                const x = h.options[g];
                x.length === 1 ? r.push(x[0]) : r.push(u);
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
        const g = n[h];
        if (g && g.length === 1)
          return String(g[0]);
      }
      return String(f);
    });
    return s(e, c);
  } catch (c) {
    return console.error("Error calculating extras price:", c), !1;
  }
}, wS = (t, e, i) => {
  const s = /* @__PURE__ */ new Set(), n = Kt(e);
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
}, SS = (t, e, i, s) => {
  const n = s[0], o = Kt(e);
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
}, xS = (t, e, i) => {
  const s = Kt(e);
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
}, ig = (t, e, i, s = !1) => {
  const n = Kt(e), o = t;
  o.extras[e] || (o.extras[e] = {});
  const a = o.extras[e];
  a.options || (a.options = {});
  const r = a.options;
  if (kl(e) && (a.faces || (a.faces = {}), r.faces || (r.faces = {})), Il(e) && (a.sides || (a.sides = {}), r.sides || (r.sides = {})), s) {
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
}, vi = (t, e, i, s = [], n = []) => {
  const o = Xp(i, n);
  ig(t, e, o === "boolean" ? [] : s, o === "boolean");
}, sg = (t, e, i, s) => {
  if (!i || !Object.keys(i).length)
    return { valid: !0, messages: [], incompleteLocations: [] };
  const n = [], o = [], a = Ro(e), r = Object.keys(i), l = Math.max(...r.map((u) => u.split("|").length));
  if (l <= 1)
    return { valid: !0, messages: [], incompleteLocations: [] };
  for (const u of a) {
    const { extraContainer: f } = Qp(t, e, u), { key: h } = mi(u), g = f[h];
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
    const E = x.length;
    if (E === 0)
      continue;
    let L = !1, C = !1, A = "";
    if (E > 0) {
      if (s)
        try {
          const $ = x.filter((V) => V.trim() !== ""), S = s(e, $);
          C = S !== null && S > 0;
        } catch ($) {
          console.error("[validateExtrasCompleteness] Error getting price:", $), C = !1;
        }
      else {
        const $ = x.join("|");
        C = r.some((S) => S === $ || S.startsWith($ + "|"));
      }
      if (E < l) {
        L = !0;
        const $ = x.join("|");
        if (r.some((V) => V.startsWith($ + "|")) && !C) {
          const V = l - E, R = x.join(", ");
          A = `${e} selection incomplete for ${u}. Selected: "${R}" but ${V} more level${V > 1 ? "s" : ""} required.`;
        }
      }
      !C && !L && (A = `${e} selection invalid for ${u}. No pricing available for "${x.join(", ")}".`);
    }
    E > 0 && !C && (o.push(u), n.push(A || `${e} pricing incomplete for ${u}: ${E}/${l} levels selected`));
  }
  return { valid: o.length === 0, messages: n, incompleteLocations: o };
}, ng = (t, e, i) => {
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
}, og = (t, e, i) => {
  if (i)
    return i;
  const s = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", n = e.constraint === "min" ? "minimum" : "maximum";
  return `${t.charAt(0).toUpperCase() + t.slice(1)} requires ${s} ${n} of ${e.limit} (current: ${e.value})`;
}, ag = { id: "mini-stock-nav" }, rg = ["onMousedown"], lg = { class: "id" }, cg = /* @__PURE__ */ Re({
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
    return (o, a) => (w(), T("div", ag, [
      (w(!0), T(Ae, null, Ne(i.stockList, (r, l) => (w(), T("button", {
        type: "button",
        key: l,
        class: Ie(["c-btn c-btn--col-4 c-btn--sm", { selected: r.autoId === i.activeStockAutoId }]),
        style: et({
          backgroundColor: r.autoId === i.activeStockAutoId ? "#" + i.secondaryColor : "#" + i.primaryColor
        }),
        onMousedown: (c) => n(r.autoId)
      }, [
        O("div", lg, X(l + 1), 1),
        ds(O("div", { class: "stack legibility" }, X(r.stack), 513), [
          [un, typeof r?.stack == "number" && r.stack > 1]
        ])
      ], 46, rg))), 128))
    ]));
  }
});
function ug(t) {
  const e = t.x, i = t.x + t.l, s = Lt().domain([e, i]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(i)]), n = t.y, o = t.y + t.w, a = Lt().domain([n, o]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(o)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(Ws(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(Ws(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(Hs(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(Hs(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function dg() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(dr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(fr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Cl(t, e, i) {
  !i || !t?.length || t.forEach((s, n) => {
    const [o, a] = s;
    i === "x" ? fg.call(this, o, a, e[n]) : hg.call(this, o, a, e[n]);
  });
}
function fg(t, e, i) {
  const s = Lt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), n = Pl(s.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Ws(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  o.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (a, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(o);
}
function hg(t, e, i) {
  const s = Lt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), n = Pl(s.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Hs(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(i)));
  pg(o), this.axes.cutMeasurementYAxes.push(o);
}
function Pl(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function pg(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, i, s) => s[i]?.getBBox()?.height + 10).attr("dx", (e, i, s) => s[i]?.getBBox()?.width / 4).attr("transform", (e, i, s) => "rotate(90) translate(" + s[i]?.getBBox()?.width / 4 + ")");
}
function cs() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function gg() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Pn() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Tl(t) {
  return t.autoId;
}
function mg(t, e) {
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
function Ls({ parent: t, near: e, far: i }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, i].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, Tl).join(
    (n) => n.append("rect").attr("class", "segment").call((o) => Va.call(this, o)),
    (n) => n.call((o) => Va.call(this, o)),
    (n) => n.remove()
  ), this.state.env === "development" && yg.call(this, s), !this.settings.app && this.state.env === "development" && bg.call(this);
}
function Va(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, i) => e.id !== "root" && i === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function yg(t) {
  this.selections.segmentGroup.selectAll("text").data(t, Tl).join(
    (e) => e.append("text").attr("class", "segment-text").call((i) => Na.call(this, i)),
    (e) => e.call((i) => Na.call(this, i)),
    (e) => e.remove()
  );
}
function Na(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function bg() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Al(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let i;
  if (e) {
    for (const n of this.props.segments.value)
      if (i = mg(n, e), i) break;
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
const { currentCutIndex: Ol } = _o();
function vg() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Ga.call(this, e)),
    (t) => t.call((e) => Ga.call(this, e)),
    (t) => t.remove()
  ), Ll.call(this));
}
function Ga(t) {
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
function $l(t, e, i) {
  return t.guillotineState.parentSegmentID === e && i && t.guillotineState.segmentCutOrder < i;
}
function Fl(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function wg(t, e, i, s) {
  this.selections.cutLines.style("visibility", (o) => typeof t.guillotineState[i] == "number" && o.guillotineState[i] <= t.guillotineState[i] || !s && o.guillotineState.parentSegmentID === e ? "visible" : "hidden"), Ol.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o) => typeof t.guillotineState[i] == "number" && o.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o) => typeof t.guillotineState[i] == "number" && o.guillotineState[i] <= t.guillotineState[i] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (o) => t.stock.cutType === "guillotine" && o.isTrim ? o.position === t.type : o.guillotineState[i] === t.guillotineState[i]), this.selections.cutLines.classed("ptx-dummy", (o) => o?.ptxData?.isDummy), s || xg.call(this, t, e);
}
function Sg(t, e, i, s, n) {
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
    this.state.device === "desktop" && !t.isTrim && Cl.call(this, o, a, s);
  }
  this.selections.cutLines.classed("highlight", (a, r) => r === e);
}
function Ll() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), cs.call(this), Pn.call(this);
}
function xg(t, e) {
  const i = t?.guillotineState?.segmentCutOrder;
  if (i == null) return;
  this.selections.cutLines.classed("completed", (f) => $l(f, e, i)), this.selections.cutLines.classed("inside-segment", (f) => Fl(f, e));
  const s = Al.call(this, t);
  if (s === !1) return;
  const { parent: n, children: o } = s, { near: a } = El(t, o);
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
  ], l = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && l && Cl.call(this, r, l, u);
}
function kg(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const g = this.props.cuts.value.filter((x) => x.isTrim);
    t = t + g.length, t - g.length >= this.props.cuts.value.length - g.length && (Ol.value = this.props.cuts.value.length - g.length - 1);
  }
  const i = this.props.cuts.value[t];
  if (!i) return;
  if (cs.call(this), Pn.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const g = this.selections.cutLines.nodes()[t].parentElement;
    if (!g) return;
    at(g).raise();
  }
  const s = i.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(i.stock), o = i.dimension === "l" ? "y" : "x", a = i?.stock?.trim, r = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(i?.stock?.cutType) && s !== null && typeof s < "u" ? wg.call(this, i, s, r, e) : Sg.call(this, i, t, a, o, n), Ig.call(this, i, t, s), e === "ptx") {
    this.removeSegments();
    return;
  }
  const l = Al.call(this, i);
  if (l === !1)
    return;
  const { parent: c, children: u } = l;
  if (!i?.guillotineState?.parentSegmentID)
    return Ls.call(this, { parent: c });
  const { near: f, far: h } = El(i, u);
  if (i.beamTrimL1 || i.beamTrimW1) {
    if (i.beamTrimL1) {
      const g = u.find((L) => L.offcut === !0 && L.x === 0 && L.l === i.stock?.trim?.l1), x = u.find((L) => L.type === "near" && L !== g), E = u.find((L) => L.type === "far" && L !== g && L.phase > c.phase);
      if (g)
        return Ls.call(this, { parent: g, near: x, far: E });
    } else if (i.beamTrimW1) {
      const g = u.find((L) => L.offcut === !0 && L.y === 0 && L.w === i.stock?.trim?.w1);
      let x = u.find((L) => L.type === "near" && L !== g);
      const E = u.find((L) => L.type === "far" && L !== g && L.y > (g?.y || 0));
      if (x && i.stock && (x = {
        ...x,
        x: 0,
        l: i.stock.l
      }), g)
        return Ls.call(this, { parent: g, near: x, far: E });
    }
  }
  Ls.call(this, { parent: c, near: f, far: h });
}
function El(t, e) {
  const i = t.dimension === "l" ? "y" : "x", s = t.dimension === "l" ? "w" : "l", n = e.find((a) => a.type === "near" && a[i] + a[s] === t[i + "1"] - t.stock.halfBladeWidth), o = e.find((a) => a.type === "far" && a[i] === t[i + "1"] + t.stock.halfBladeWidth);
  return { near: n, far: o };
}
function Ig(t, e, i) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    const o = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let a = Math.max(1, Math.ceil(o));
    const r = t?.guillotineState?.segmentCutOrder;
    return ($l(s, i, r) || Fl(s, i)) && (a += 1), n === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (a = 5), a;
  });
}
function Cg(t) {
  if (!this.props.stock || !t || !this.settings.main) return !1;
  let e;
  if (!t.willItFit(this.props.stock.value, t.rot)) return !1;
  const i = pp(
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
      const l = yl(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(l, o).join(
        (c) => c.append("line").call((u) => a.call(this, u)),
        (c) => c.call((u) => a.call(this, u)),
        (c) => c.remove()
      );
    }
    s = gp(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new ni();
  for (const o of i.toArray()) {
    const a = bl(t, o, this.props.stock.value);
    a && n.addPoints(a.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const a of o) {
      const r = fp(t, a, this.props.stock.value);
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
  ].forEach((o) => n.add(o)), e = n.toArray()) : (n.add(new tt(0 + (this.props.stock.value.trim.l1 ?? 0), 0 + (this.props.stock.value.trim.w1 ?? 0))), e = n.toArray());
  for (let o = e.length; o--; ) {
    const a = e[o];
    t.x = a.x, t.y = a.y;
    for (const r of this.props.shapes.value)
      if (this.collision(t, r, this.props.stock.value)) {
        e.splice(o, 1);
        break;
      }
  }
  return Pg.call(this, e, t), Tg.call(this, e, t), !!e?.length;
}
function Pg(t, e) {
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
      n.stopPropagation(), at(this).classed("hover", !0), at(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), at(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Tg(t, e) {
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
      n.stopPropagation(), at(this).classed("hover", !0);
      const o = at(this).attr("data-id"), a = at(`.ghost[data-id="${o}"]`);
      a.raise(), a.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), at(this).classed("hover", !1);
      const o = at(this).attr("data-id");
      at(`.ghost[data-id="${o}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function Ag() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => za.call(this, e)).classed("hidden", (e, i, s) => this.isTextHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => za.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => qa.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => qa.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, i, s) => this.isNameHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const n = s[i];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => Wa.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const o = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(o / 2 + 2));
    }),
    (t) => t.text((e) => Wa.call(this, e)).classed("hidden", (e, i, s) => this.isLengthHidden(e, i, s)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, i, s) => {
      const o = s[i].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(o / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Ha.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, i, s) => {
      const n = s[i], o = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), a = this.getRectangleCoordinate(e, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${a}) rotate(${r})`;
    }),
    (t) => t.text((e) => Ha.call(this, e)).classed("hidden", (e, i, s) => this.isWidthHidden(e, i, s)).attr("transform", (e, i, s) => {
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
function za(t) {
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
function qa(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function Wa(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : H({ v: t.l, o: this.numberConfig }).toString();
}
function Ha(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : H({ v: t.w, o: this.numberConfig }).toString();
}
const Og = (t) => t.id;
function $g() {
  if (!this.props.containerWidth) return;
  cs.call(this);
  const t = this.props.shapes.value.reduce((e, i) => {
    const s = parseInt(i.parentId);
    return s > e ? s : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Lg.call(this), Fg.call(this);
}
function Fg() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Og).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Ua.call(this, e), Ya.call(this, e), e.on("mousedown", Ka.bind(this)), e;
    },
    (t) => (Ua.call(this, t), Ya.call(this, t), t.on("mousedown", Ka.bind(this)), t),
    (t) => t.remove()
  ), Bg.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Ag.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Lg() {
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
  this.scales.scoreColorScale = os([Gt(251, 224, 255), Gt(122, 0, 138)]).domain([i, s]);
}
function Ua(t) {
  const e = t.selectAll("rect.shape").data((i) => [i]).join("rect").attr("class", "shape").attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i)).style("fill", (i) => us.call(this, i));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = hr(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function Ya(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const i = at(e.target);
    i.classed("hover", !0), i.classed("selected") || i.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, i) => {
    const s = at(e.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", us.call(this, i));
  }, { passive: !0 });
}
function Ka(t, e) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Eg.call(this, t, e), (this.settings.app || this.settings.embed) && Mg.call(this, t, e), this.state.device === "desktop" && (Pn.call(this), ug.call(this, e)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(e) : this.findShape.call(this, e.id);
}
function Eg(t, e) {
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
        ], Rg.call(this, e);
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
    console.table(Dg(e, i));
  }
}
function Dg(t, e) {
  return e.reduce((i, s) => {
    const n = zg(t, s);
    return i[s] = Array.isArray(n) ? n.join(", ") : n, i;
  }, {});
}
function Rg(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((n) => n.id === e || n.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const i = this.props.shapes.value.find((s) => s.id === e)?.guillotineState?.myStripParent;
  i && this.selections.shapeWrappers.filter((n) => n.id === i || n.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Mg(t, e) {
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
      color: us.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(i), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function us(t) {
  const e = Gt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return Gt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return Gt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], o = [176, 255, 231];
          return `rgb(${n.map((r, l) => Math.round(r + t.guillotineState.myPhase / 5 * (o[l] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return Gt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return Gt(139, 171, 46);
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
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", t), Gt(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  const i = parseInt(t.parentId);
  let s;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? s = this.scales.shapeColorScale(i) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), s = null), s != null && typeof s.toString == "function" ? s : s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number" ? Gt(s.r, s.g, s.b, s.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, s), e);
}
const Za = 3;
function _g(t) {
  const e = [];
  for (const i of t) {
    const s = i.extras?.banding;
    if (i.added && s?.sides)
      for (const [n, o] of Object.entries(s.sides)) {
        if (!o || ["a", "b", "c", "d"].includes(n)) continue;
        let a = n;
        if (i.rot) {
          const l = jr({ [n]: !0 }, "cc");
          a = Object.keys(l)[0];
        }
        const r = jg.call(this, i, a);
        r && e.push(r);
      }
  }
  return e;
}
function Xa(t) {
  const e = Za / 2;
  return t.attr("class", "banding").attr("x1", (i) => this.scales.xPositionScale(i.l1) + Es.call(this, i.type, "x", e)).attr("x2", (i) => this.scales.xPositionScale(i.l2) + Es.call(this, i.type, "x", e)).attr("y1", (i) => this.scales.yPositionScale(i.w1) + Es.call(this, i.type, "y", e)).attr("y2", (i) => this.scales.yPositionScale(i.w2) + Es.call(this, i.type, "y", e)).attr("stroke-width", Za).attr("stroke", "white");
}
function Bg(t) {
  if (!this.settings.main) return;
  const e = _g.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (i, s) => s).join(
    (i) => i.append("line").call((s) => Xa.call(this, s)),
    (i) => i.call((s) => Xa.call(this, s)),
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
function jg(t, e) {
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
function Vg(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Ja = (t) => t.id;
function Qa(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function er(t) {
  return t.style("fill", "url(#stripes)").attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Ng() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), dg.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Ja).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Qa.call(this, e)),
    (t) => t.call((e) => Qa.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Ja).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => er.call(this, e)),
    (t) => t.call((e) => er.call(this, e)),
    (t) => t.remove()
  );
}
function Gg(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function zg(t, e) {
  return je(t, e);
}
class qg {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = at(e.elementID), this.selections.el === null)) return;
    const i = this.selections.el.node();
    i !== null && (this.selections.htmlEl = i, this.scales = {
      xScale: Lt(),
      yScale: Lt(),
      yPositionScale: Lt(),
      xPositionScale: Lt(),
      yAxisScale: Lt(),
      measurementScale: Lt(),
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
    }, s = (n, o) => Gt("#" + (Gg(n?.replace("#", "")) ? n.replace("#", "") : o.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(i).map(([n, o]) => [
        n,
        s(e.colors?.[n], o)
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
      this.selections.svgCanvas = at(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, i, s) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), i && (this.numberConfig.decimalPlaces = i), s && (this.numberConfig.fractionRoundTo = s));
  }
  formatNumber = (e) => {
    const i = H({
      v: e,
      o: this.numberConfig
    });
    if (i !== null) return i.toString();
  };
  trimNameToFit(e, i) {
    function s(n, o, a) {
      const r = a[o], l = at(r);
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => us.call(this, s));
    const i = at(e).select("rect");
    if (i) {
      i.classed("selected", !0), i.style("fill", this.config.colors.partSelected.toString());
      const s = at(e).datum();
      this.callbacks.onShapeSelect(s, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    $g.call(this);
  }
  drawStock() {
    Ng.call(this);
  }
  drawCuts() {
    vg.call(this);
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
    return ke(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const i = e.bladeWidth;
    return i !== void 0 && i > 0 ? i / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), cs.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), gg.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Pn.call(this);
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
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => us.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const i = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return i < 1 ? 1 : Math.ceil(i);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    cs.call(this);
  }
  updateShapeVisibility() {
    Vg.call(this);
  }
  drawPositions(e) {
    Cg.call(this, e);
  }
  showCut(e) {
    kg.call(this, e);
  }
  resetCuts() {
    Ll.call(this);
  }
}
const Wg = ["id"], Hg = /* @__PURE__ */ Re({
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
    moveMode: { default: () => se(!1) }
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
    } = _o(), g = t, x = i, E = (Z) => {
      x("part-click", Z);
    }, L = (Z) => {
      x("shape-colour-update", Z);
    }, C = (Z, Ge) => {
      Z?.autoId && x("shape-select", Z.autoId, Ge);
    }, A = (Z) => {
      Z && x("add-to-parts-bin", Z);
    }, $ = (Z, Ge) => {
      Z && x("move-shape", Z, Ge);
    }, S = se(0), V = se(0), R = se(null);
    let F, W = se(!1);
    const j = gt({
      debug: ""
    });
    Yt(() => z());
    const m = J(() => ({
      format: g.numberFormat,
      decimals: g.decimalPlaces
    })), M = J(() => g.stockAutoId ? c(g.stockAutoId) : n.value), K = J(() => g.stockAutoId ? u(g.stockAutoId) : o.value), re = J(() => g.main ? g.stockAutoId ? h(g.stockAutoId) : a.value : []), P = J(() => g.main ? g.stockAutoId ? f(g.stockAutoId) : r.value : []);
    rr(R, (Z) => {
      const Ge = Z[0], { width: Bt, height: At } = Ge.contentRect;
      Bt > 0 && (S.value = Bt), x("resize", { width: Bt, height: At });
    }), hc(
      S,
      (Z) => {
        F && (Z <= 0 || (F.setDevice(), F.resetShapeAxes(), F.drawAll(), l.value !== null && (F.toggleSegments(!0), F.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let _ = !1;
    Be(() => M.value, (Z) => {
      Z && (S.value <= 0 || (_ = !0, F.setDevice(), F.resetCuts(), F.removeSegments(), F.drawStock(), F.drawShapes(), F.drawCuts(), mt(() => _ = !1)));
    }, { immediate: !1 }), Be(() => K.value, (Z) => {
      _ || Z && (S.value <= 0 || (F.setDevice(), F.drawShapes()));
    }, { immediate: !1, deep: !0 }), g.main && (Be(() => re.value, () => {
      _ || S.value <= 0 || F.drawCuts();
    }, { immediate: !1, deep: !0 }), Be(l, () => {
      l.value !== null && (S.value <= 0 || (F.toggleSegments(!0), F.showCut(l.value)));
    }, { immediate: !1 }), Be(m, (Z) => {
      F.updateNumberFormat(Z.format, Z.decimals, null);
    }, { immediate: !1 }));
    const z = () => {
      const Z = {
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
          stock: M,
          shapes: K,
          cuts: re,
          segments: P,
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
          onShapeColourUpdate: L,
          onShapeSelect: C,
          onAddToPartsBin: A,
          onMoveShape: $,
          onPartClick: E
        }
      };
      F = new qg(Z), j.debug = F.state.debug, W.value = !0;
    }, q = (Z = !1) => {
      F && F.toggleShapes(Z);
    }, Q = (Z = !1) => {
      F && F.toggleCuts(Z);
    }, ie = (Z = !1) => {
      F && F.toggleSegments(Z);
    }, te = () => {
      F && F.drawShapes();
    }, he = () => {
      F && F.drawStock();
    }, be = () => {
      F && (F.toggleSegments(!1), F.resetCuts());
    }, Oe = (Z) => {
      F && (F.toggleSegments(!0), F.showCut(Z));
    }, U = (Z) => {
      F && F.drawPositions(Z);
    }, ct = () => {
      F && F.removePositions();
    }, yi = (Z) => {
      F && F.findShape(Z);
    }, bi = () => {
      F && F.clearSelection();
    }, Tt = (Z) => {
      F && F.requiresStretch(Z);
    };
    return Be(() => j.debug, (Z) => {
      F?.state && (F.state.debug = Z);
    }), e({
      loaded: W,
      toggleShapes: q,
      toggleCuts: Q,
      toggleSegments: ie,
      drawShapes: te,
      drawStock: he,
      drawPositions: U,
      resetPositions: ct,
      findShape: yi,
      clearSelection: bi,
      resetCuts: be,
      showCut: Oe,
      requiresStretch: Tt,
      state: j
    }), (Z, Ge) => (w(), T("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: R,
      class: Ie([{ app: t.app }, "diagram-container"])
    }, null, 10, Wg));
  }
}), Ug = { class: "action-menu" }, Yg = ["textContent"], Kg = {
  key: 0,
  class: "menu-divider"
}, Zg = {
  key: 1,
  class: "group-label"
}, Xg = /* @__PURE__ */ Re({
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
    const i = t, s = e, { isOpen: n, close: o, toggle: a } = Cc(i.menuId), r = se(), l = se(), c = J(() => i.disabled), u = J(() => i.label), f = J(() => i.showLabel), h = J(() => i.icon), { floatingStyles: g } = pc(r, l, {
      placement: i.placement,
      whileElementsMounted: ou,
      middleware: [
        iu(i.offset),
        su(),
        nu({ padding: 8 })
      ]
    }), x = (m) => {
      if (!m) return ["fas", "question"];
      if (typeof m == "function" && (m = m(i)), Array.isArray(m))
        return m;
      if (typeof m == "string") {
        const M = m.split(" ");
        if (M.length >= 2) {
          const K = M[0], re = M.slice(1).join("-").replace("fa-", "");
          return [K, re];
        }
        return ["fas", m.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, E = J(() => x(h.value)), L = (m) => typeof m.active == "function" ? m.active(i) : typeof m.active == "boolean" ? m.active : !1, C = (m) => {
      if (!m.href) return !1;
      try {
        const M = typeof m.href == "function" ? m.href(i) : m.href;
        return new URL(M, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, A = (m) => m.href ? "a" : "div", $ = (m) => {
      const M = {};
      if (m.href) {
        const K = typeof m.href == "function" ? m.href(i) : m.href;
        if (M.href = K, C(m)) {
          const re = typeof m.target == "function" ? m.target(i) : m.target;
          M.target = re || "_blank", M.rel = m.rel || "noopener noreferrer";
        } else if (m.target) {
          const re = typeof m.target == "function" ? m.target(i) : m.target;
          M.target = re;
        }
        m.rel && (M.rel = m.rel);
      }
      return m.attrs && Object.assign(M, m.attrs), M;
    }, S = J(() => i.menuItems.map((m) => {
      const M = { ...m };
      return typeof m.href == "function" && (M.href = m.href(i)), typeof m.icon == "function" && (M.icon = m.icon(i)), typeof m.disabled == "function" && (M.disabled = m.disabled(i)), typeof m.label == "function" && (M.label = m.label(i)), typeof m.variant == "function" && (M.variant = m.variant(i)), typeof m.active == "function" && (M.active = m.active(i)), typeof m.target == "function" && (M.target = m.target(i)), typeof m.show == "function" && (M.show = m.show(i)), M;
    })), V = (m) => {
      m.stopPropagation(), m.preventDefault(), !c.value && a();
    }, R = (m, M) => {
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
      }), m.href && i.closeOnLinkClick ? o() : m.href || o();
    }, F = (m) => {
      const M = [];
      if (m.variant) {
        const re = typeof m.variant == "function" ? m.variant(i) : m.variant;
        M.push(`variant-${re}`);
      }
      if ((typeof m.disabled == "function" ? m.disabled(i) : m.disabled) && !m.href && M.push("disabled"), L(m) && M.push("active"), m.href && M.push("menu-link"), C(m) && M.push("external-link"), m.class) {
        const re = typeof m.class == "function" ? m.class(i) : m.class;
        M.push(re);
      }
      return M.join(" ");
    }, W = (m) => {
      const M = m.target;
      n.value && r.value && l.value && !r.value.contains(M) && !l.value.contains(M) && o();
    }, j = (m) => {
      m.key === "Escape" && n.value && o();
    };
    return Yt(() => {
      document.addEventListener("click", W), document.addEventListener("keydown", j);
    }), fs(() => {
      document.removeEventListener("click", W), document.removeEventListener("keydown", j);
    }), (m, M) => (w(), T("div", Ug, [
      O("div", {
        ref_key: "trigger",
        ref: r,
        onClick: V,
        class: Ie(["actions-btn", { active: k(n), disabled: c.value }])
      }, [
        h.value ? (w(), ve(k(zs), {
          key: 0,
          icon: E.value,
          class: "icon"
        }, null, 8, ["icon"])) : Y("", !0),
        f.value ? (w(), T("span", {
          key: 1,
          class: "label",
          textContent: X(u.value)
        }, null, 8, Yg)) : Y("", !0)
      ], 2),
      (w(), ve(Mo, { to: "body" }, [
        k(n) && !c.value ? (w(), T("div", {
          key: 0,
          ref_key: "floating",
          ref: l,
          style: et(k(g)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: M[0] || (M[0] = lr(() => {
          }, ["stop"]))
        }, [
          (w(!0), T(Ae, null, Ne(S.value, (K, re) => (w(), T(Ae, { key: re }, [
            K.type === "divider" ? (w(), T("div", Kg)) : K.type === "group" ? (w(), T("div", Zg, X(K.label), 1)) : K.show !== !1 ? (w(), ve(gc(A(K)), xi({
              key: 2,
              ref_for: !0
            }, $(K), {
              onClick: (P) => R(K, P),
              id: K.id,
              class: ["menu-item", F(K)],
              disabled: K.disabled && !K.href
            }), {
              default: Pi(() => [
                K.icon || L(K) ? (w(), ve(k(zs), {
                  key: 0,
                  icon: L(K) ? ["fass", "check"] : x(K.icon)
                }, null, 8, ["icon"])) : Y("", !0),
                O("span", null, X(K.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : Y("", !0)
          ], 64))), 128))
        ], 4)) : Y("", !0),
        k(n) && !c.value ? (w(), T("div", {
          key: 1,
          class: "backdrop",
          onClick: M[1] || (M[1] = //@ts-ignore
          (...K) => k(o) && k(o)(...K))
        })) : Y("", !0)
      ]))
    ]));
  }
}), tr = (t, e, i) => {
  if (e === "unitDependent")
    if (i === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const s = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), n = zo(t);
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
function Jg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = se({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), n = (r, l = !1) => {
    if (r == null || r === "") {
      const u = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? u ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Qu(r, "decimal", u);
    }
    const c = String(r);
    switch (t.type) {
      case "string":
        return { value: c, valid: !0 };
      case "unitDependent":
        if (l)
          return tr(c, t.type, t.numberFormat);
        try {
          const u = H({
            v: r,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof u == "number") {
            let f = u, h = !0, g;
            return typeof t.min == "number" && f < t.min && (f = t.min, h = !1, g = "below_min"), typeof t.max == "number" && f > t.max && (f = t.max, h = !1, g = "above_max"), { value: f, valid: h, message: g };
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
          return tr(c, t.type);
        try {
          const f = H({
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
          let g = !0, x;
          return typeof t.min == "number" && h < t.min && (h = t.min, g = !1, x = "below_min"), typeof t.max == "number" && h > t.max && (h = t.max, g = !1, x = "above_max"), { value: h, valid: g, message: x };
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
          if (!zo(c)) {
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
function Qg({
  props: t,
  emit: e,
  isMounted: i
}) {
  const s = se({
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
function em({
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
const tm = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], im = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = se(!0), o = se(null), a = J(() => i.value === i.trueValue), {
      handleCheckboxChange: r,
      handleFocus: l,
      handleBlur: c
    } = em({
      props: i,
      emit: s,
      isMounted: n
    });
    return (u, f) => (w(), T("input", {
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
      (...h) => k(r) && k(r)(...h)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...h) => k(l) && k(l)(...h)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...h) => k(c) && k(c)(...h))
    }, null, 40, tm));
  }
}), sm = ["for"], Ds = /* @__PURE__ */ Re({
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
    }, X(t.label), 9, sm));
  }
}), nm = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], om = ["disabled", "selected"], am = {
  key: 0,
  value: " "
}, rm = ["hidden", "value", "disabled"], lm = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = se(!0), o = se(null), a = J(() => i.options.map((l) => ({
      value: l.value,
      label: l.label?.toUpperCase() ?? l.value?.toString()?.toUpperCase(),
      hidden: l.hidden ?? !1,
      disabled: l.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = Qg({
      props: i,
      emit: s,
      isMounted: n
    });
    return (l, c) => (w(), T("select", xi(l.$attrs, {
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
      (...u) => k(r) && k(r)(...u))
    }), [
      O("option", {
        value: "",
        disabled: i.selectFirstOptionDisabled,
        selected: !i.value
      }, X(i.text?.select?.toUpperCase() ?? "SELECT"), 9, om),
      i.multiEdit ? (w(), T("option", am, X(i.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : Y("", !0),
      (w(!0), T(Ae, null, Ne(a.value, (u) => (w(), T("option", {
        key: u.value,
        hidden: u.hidden,
        value: u.value,
        disabled: u.disabled
      }, X(u.label), 9, rm))), 128))
    ], 16, nm));
  }
}), cm = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Dl = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = se(!0), o = se(null), {
      handleInput: a,
      handleMouseDown: r,
      handleMouseUp: l,
      handleFocus: c,
      handleBlur: u,
      handleKeydown: f,
      handleCompositionStart: h,
      handleCompositionEnd: g,
      handlePaste: x
    } = Jg({
      props: i,
      emit: s,
      isMounted: n
    }), E = (L) => {
      const C = L.getBoundingClientRect(), A = window.getComputedStyle(L);
      return C.width > 0 && C.height > 0 && A.display !== "none" && A.visibility !== "hidden";
    };
    return Yt(() => {
      (ke(i.default) && i.value === void 0 || i.value === null) && s("update:value", i.default), i.focus && o.value && E(o.value) && mt(() => o.value.focus());
    }), fs(() => {
      n.value = !1;
    }), (L, C) => (w(), T("input", xi(L.$attrs, {
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
      (...A) => k(a) && k(a)(...A)),
      onFocus: C[1] || (C[1] = //@ts-ignore
      (...A) => k(c) && k(c)(...A)),
      onBlur: C[2] || (C[2] = //@ts-ignore
      (...A) => k(u) && k(u)(...A)),
      onKeydown: C[3] || (C[3] = //@ts-ignore
      (...A) => k(f) && k(f)(...A)),
      onCompositionstart: C[4] || (C[4] = //@ts-ignore
      (...A) => k(h) && k(h)(...A)),
      onCompositionend: C[5] || (C[5] = //@ts-ignore
      (...A) => k(g) && k(g)(...A)),
      onPaste: C[6] || (C[6] = //@ts-ignore
      (...A) => k(x) && k(x)(...A)),
      onMousedown: C[7] || (C[7] = //@ts-ignore
      (...A) => k(r) && k(r)(...A)),
      onMouseup: C[8] || (C[8] = //@ts-ignore
      (...A) => k(l) && k(l)(...A))
    }), null, 16, cm));
  }
}), um = ["data-field-id"], dm = {
  key: 0,
  class: "input-label-group"
}, fm = ["disabled", "selected"], hm = {
  key: 0,
  value: " "
}, pm = ["hidden", "value", "disabled"], Ci = /* @__PURE__ */ Re({
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
    const i = e, s = t, n = se(null), o = se(null), a = se(!0), r = se(s.numberFormat), l = J(() => s.custom ? "custom-" + s.id : s.id), c = J(() => `${l.value}-error`), u = J(() => s.label || s.placeholder), f = J(() => m(s.type, s.numberFormat)), h = J(() => M(s.type, s.numberFormat)), g = J(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), x = J(() => {
      let P = s.value;
      if (s.type !== "unitDependent" || !P) return P;
      try {
        return H({ v: P, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), E = J(() => s.options.map((P) => ({
      value: P.value,
      label: P.label || P.value?.toString(),
      hidden: P.hidden || !1,
      disabled: P.disabled || !1
    }))), L = J(() => E.value.map((P) => {
      const _ = P.label ? G(P.label) : P.value?.toString();
      return {
        ...P,
        // Translate the label key first, then uppercase the translated result
        label: _?.toUpperCase() || P.value?.toString().toUpperCase()
      };
    })), C = J(() => ({
      input: !0,
      issue: s.issue || !a.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), A = J(() => ({
      id: l.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": u.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? c.value : void 0
    })), $ = J(() => ({
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
    })), S = J(() => ({
      ...A.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), V = J(() => ({
      ...A.value,
      options: L.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), R = J(() => (s.text?.select || "SELECT").toUpperCase()), F = J(() => (s.text?.delete || "DELETE").toUpperCase()), W = (P) => {
      o.value = P;
    }, j = (P) => s.label && s.enableLabel && s.labelPosition === P, m = (P, _) => {
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
    }, K = (P) => {
      i("update:value", P);
    }, re = (P, _) => {
      P.valid === void 0 || P.valid === !0 ? (a.value = !0, i("validation", n.value, P)) : P.valid === !1 && P.message && (a.value = !1, console.warn(`Field validation error for field ${_} - ${P.message}`), i("validation", n.value, P));
    };
    return Be(() => s.numberFormat, (P, _) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && P !== _ && s.value !== null && s.value !== void 0 && s.value !== "")
          try {
            const z = H({ v: s.value, nf: P });
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
      t.type === "checkbox" ? (w(), T("div", dm, [
        j("first") ? (w(), ve(Ds, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0),
        t.type === "checkbox" ? (w(), ve(im, xi({
          key: 1,
          ref: W,
          type: "checkbox"
        }, S.value, {
          value: t.value,
          "onUpdate:value": _[0] || (_[0] = (z) => i("update:value", z))
        }), null, 16, ["value"])) : Y("", !0),
        j("last") ? (w(), ve(Ds, {
          key: 2,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0)
      ])) : (w(), T(Ae, { key: 1 }, [
        j("first") ? (w(), ve(Ds, {
          key: 0,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0),
        g.value ? (w(), ve(Dl, xi({
          key: 1,
          ref: W
        }, $.value, {
          "input-type": f.value,
          "input-mode": h.value,
          value: x.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: re,
          "onUpdate:value": K
        }), null, 16, ["input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (w(), ve(lm, xi({
          key: 2,
          ref: W
        }, V.value, {
          "onUpdate:value": _[1] || (_[1] = (z) => i("update:value", z))
        }), {
          default: Pi(() => [
            O("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, X(R.value), 9, fm),
            t.multiEdit ? (w(), T("option", hm, X(F.value), 1)) : Y("", !0),
            (w(!0), T(Ae, null, Ne(L.value, (z) => (w(), T("option", {
              key: z.value,
              hidden: z.hidden,
              value: z.value,
              disabled: z.disabled
            }, X(z.label), 9, pm))), 128))
          ]),
          _: 1
        }, 16)) : Y("", !0),
        j("last") ? (w(), ve(Ds, {
          key: 3,
          id: l.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : Y("", !0)
      ], 64)),
      qs(P.$slots, "default")
    ], 10, um));
  }
}), gm = {
  key: 0,
  class: "action-bar"
}, mm = { class: "add-custom" }, ym = ["disabled"], bm = ["disabled", "title", "onClick"], vm = {
  key: 1,
  class: "price"
}, wm = /* @__PURE__ */ Re({
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
      getPriceDisplay: g,
      shouldShowDeleteButton: x,
      getLocationGroup: E,
      isLocationVisible: L,
      handleInputChange: C,
      handleDelete: A
    } = Pc({
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
      canAddCustomName: S,
      isActionMenuDisabled: V,
      customNameActions: R,
      handleAddCustomName: F,
      handleCustomNameAction: W
    } = Tc({
      extraType: i.extraType,
      customNames: ai(i, "customNames"),
      usedNames: ai(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: h,
      onCustomNameAdded: (Q) => s("custom-name-added", i.extraType, Q),
      onCustomNameDeleted: (Q) => s("custom-name-deleted", i.extraType, Q)
    }), {
      renderLocations: j,
      gridStyle: m,
      getInputId: M,
      getDeleteConfig: K
    } = Ac({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      mode: n,
      shouldShowAll: o,
      getInputType: u,
      getInputConfig: (Q, ie) => f(Q, ie),
      getAllInputConfig: (Q) => f("all", Q),
      getInputConfigForLocation: f,
      canDelete: l,
      getLocationLabel: c,
      shouldShowDeleteButton: x,
      locations: ai(i, "locations"),
      locationGroups: ai(i, "locationGroups")
    }), re = se(!1), P = J(() => (Q) => {
      const ie = E(Q);
      return ie === "all" || ie === "faces" || ie === "sides";
    }), _ = J(() => (Q) => Ro(i.extraType).includes(Q) ? ja(Q) === "face" : !1), z = J(() => (Q) => Ro(i.extraType).includes(Q) ? ja(Q) === "side" : !1), q = J(() => (Q) => i.shape.issues?.some((ie) => ie.category?.includes("extras") && ie.field?.some((te) => te[0] === "extras" && te[1] === i.extraType && te[2] === Q)) ?? !1);
    return Yt(() => {
      const ie = i.shape.extras?.[i.extraType];
      if (!ie || typeof ie != "object") {
        re.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (a.value && !("faces" in ie)) {
        re.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in ie)) {
        re.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (Q, ie) => {
      const te = gi("FontAwesomeIcon");
      return re.value ? Y("", !0) : (w(), T("div", {
        key: 0,
        class: Ie(["extras group", [t.extraType]]),
        style: et({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (w(), T("div", gm, [
          O("div", mm, [
            Me(Dl, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: k($),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": ie[0] || (ie[0] = (he) => $.value = he || ""),
              onKeydown: mc(k(F), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            O("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !k(S),
              onClick: ie[1] || (ie[1] = //@ts-ignore
              (...he) => k(F) && k(F)(...he))
            }, " Add ", 8, ym)
          ]),
          Me(Xg, {
            "menu-items": k(R),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: k(V),
            onAction: k(W)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : Y("", !0),
        O("div", {
          class: "inputs grid-layout",
          style: et({ "grid-template-columns": k(m) })
        }, [
          (w(!0), T(Ae, null, Ne(k(j), (he) => (w(), T(Ae, { key: he }, [
            k(L)(he) ? (w(), T(Ae, { key: 0 }, [
              O("div", {
                class: Ie(["label", {
                  "group-label": P.value(he),
                  "face-label": _.value(he),
                  "side-label": z.value(he),
                  "has-validation-issue": q.value(he)
                }])
              }, X(k(c)(he)), 3),
              (w(!0), T(Ae, null, Ne(t.allOptions, (be, Oe) => (w(), T("div", {
                key: `${he}-${Oe}`,
                class: "input-cell"
              }, [
                Me(Ci, xi({
                  id: k(M)(he, Oe),
                  "data-field": `${t.extraType}-${he}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Oe
                }, { ref_for: !0 }, k(f)(he, Oe), {
                  "onUpdate:value": (U) => k(C)(he, Oe, U)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              k(K)(he).show ? (w(), T("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !k(K)(he).enabled,
                title: k(K)(he).ariaLabel,
                onClick: (be) => k(A)(he)
              }, [
                Me(te, { icon: ["fass", "trash"] })
              ], 8, bm)) : Y("", !0),
              t.enablePricing ? (w(), T("div", vm, X(k(g)(he)), 1)) : Y("", !0)
            ], 64)) : Y("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), Pt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
}, Ns = /* @__PURE__ */ Pt(wm, [["__scopeId", "data-v-0aa91058"]]), Sm = {
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
}, xm = { id: "spinner" }, km = ["width", "height"], Im = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Cm(t, e, i, s, n, o) {
  return w(), T("div", xm, [
    i.complete ? Y("", !0) : (w(), T("svg", {
      key: 0,
      class: "loading",
      style: et({ width: i.size + "px", height: i.size + "px" }),
      width: i.size,
      height: i.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      cr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, km)),
    i.complete ? (w(), T("svg", {
      key: 1,
      class: "complete",
      style: et({ width: i.size + "px", height: i.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      O("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : Y("", !0),
    i.showNumber ? (w(), T("div", Im, X(i.number), 1)) : Y("", !0)
  ]);
}
const ir = /* @__PURE__ */ Pt(Sm, [["render", Cm]]), { addNotice: Mi } = Bo();
let so = null;
function Pm() {
  return so || (so = ur()), so;
}
function sr(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Tm(t) {
  const e = t.t, i = [];
  try {
    const { inputs: s, validateInputShapes: n, validateInputStock: o } = Pm(), a = t.inputShapes ?? s.inputShapes.value, r = t.inputStock ?? s.inputStock.value, l = t.inputUserGroups ?? s.inputUserGroups?.value ?? [], c = sr(a), u = sr(r);
    if (!t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const L = c.reduce((A, $) => A + ($.q || 1), 0), C = u.reduce((A, $) => A + ($.q || 1), 0);
      if (L > t.maxShapes || C > t.maxStock)
        return Mi({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: i };
    }
    if (!c.length)
      return Mi({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: i };
    if (!t.useInventory && !u.length)
      return Mi({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: i };
    let f;
    if (t.useInventory && t.selectedSaw)
      f = t.selectedSaw;
    else if (t.inputSaw instanceof nl) {
      const L = t.inputSaw.validate();
      i.push(...L), f = t.inputSaw.toData();
    } else {
      f = t.inputSaw;
      const L = new sl(f);
      i.push(...L.issues);
    }
    const h = n({
      saw: f,
      partTrim: H({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: c
    });
    if (i.push(...h), t.useInventory) {
      if (t.materialStore)
        for (const L of c)
          L.material || i.push(new ne({
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
      const L = ip(l, c);
      i.push(...L);
    }
    await Am(c, t, i);
    const g = Nr(i);
    if (g.length > 0) {
      const L = {
        saw: g.filter((C) => C.category?.includes("saw")),
        stock: g.filter((C) => C.category?.includes("stock")),
        part: g.filter((C) => C.category?.includes("part") && !C.category?.includes("extras")),
        extras: g.filter((C) => C.category?.includes("extras")),
        group: g.filter((C) => C.category?.includes("group"))
      };
      for (const [C, A] of Object.entries(L))
        if (A.length > 0) {
          Mi({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: C }),
            additional: A.map(($) => e($.message))
          });
          break;
        }
      return { valid: !1, issues: i };
    }
    const x = {
      inputSaw: f,
      inputShapes: c.map((L) => L.toData()),
      inputStock: u.map((L) => L.toData()),
      inputGroups: l.map((L) => L.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, E = Pp.safeParse(x);
    return E.success ? {
      valid: !0,
      issues: i,
      sawData: f
    } : (console.error("[Validation] Zod validation failed:", E.error.issues), Mi({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: E.error.issues.map((L) => `${L.path.join(".")}: ${L.message}`)
    }), { valid: !1, issues: i });
  } catch (s) {
    return console.error("[Validation] error:", s), Mi({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [s?.message ?? ""]
    }), { valid: !1, issues: i };
  }
}
async function Am(t, e, i) {
  if (!e.findExtrasPrice)
    return;
  const s = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const n of t)
    for (const { type: o, pricing: a } of s) {
      if (e.extrasValidationRules && qe.hasExtras(n, o)) {
        const c = ng(n, o, e.extrasValidationRules);
        c.valid || c.violations.forEach((u) => {
          const f = og(o, u, c.message);
          i.push(new ne({
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
      const r = sg(n, o, a, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((l) => {
        i.push(new ne({
          item: n,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${o}`,
            // Translation key for extra type (banding, finish, planing)
            location: We(l, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", o, l]]
        }));
      });
    }
}
const Gs = B({
  // Unique identifier for this group (used internally)
  id: y().min(1),
  // Display label for the group (shown in UI)
  label: y().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ee(y().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: d().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: D().optional().default(!1)
}), Om = B({
  banding: ee(Gs).optional(),
  finish: ee(Gs).optional(),
  planing: ee(Gs).optional()
}).optional(), no = B({
  min: d().min(0).optional(),
  max: d().min(0).optional()
}).optional(), oo = B({
  // Shape dimension constraints
  longSide: no,
  shortSide: no,
  t: no,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: y().optional(),
  // Custom validation message (optional)
  message: y().optional()
}), $m = B({
  banding: oo.optional(),
  finish: oo.optional(),
  planing: oo.optional()
}).optional(), Fm = fe(["decimal", "fraction"]), Lm = fe(el), Em = pe([
  me(0),
  me(1),
  me(2)
]).catch(0), Dm = B({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: y().optional(),
  partB: y().optional(),
  partSelected: y().optional(),
  stock: y().optional(),
  text: y().optional(),
  // Checkout-specific colors
  button: y(),
  buttonText: y()
}), Rm = B({
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
}), Mm = B({
  // Localization
  locale: y().default("en-US"),
  currency: y().default("USD"),
  // Number formatting
  numberFormat: Fm.default("decimal"),
  decimalPlaces: d().min(0).max(10).default(2),
  fractionRoundTo: d().default(0),
  // Stock configuration
  stockSelection: Lm.optional(),
  stockGrain: Ui.optional(),
  // Part configuration
  minSpacing: Jo.optional(),
  maxParts: d().min(0).default(10),
  orientationModel: Em.default(0),
  minDimension: d().min(0).default(0),
  partTrim: d().min(0).default(0),
  // UI configuration
  debug: D().default(!1),
  enable: Rm.optional(),
  colors: Dm.optional(),
  // Custom fields
  customFields: ee(xe()).optional(),
  fieldOrder: ee(y()).optional(),
  // Extras location filtering
  bandingLocations: ee(Qn).optional(),
  finishLocations: ee(Qn).optional(),
  planingLocations: ee(Qn).optional(),
  // Extras location groups
  extrasLocationGroups: Om,
  // Extras validation rules
  extrasValidationRules: $m
});
fe([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const ss = Se(
  y(),
  d().min(0)
).default({}), _m = B({
  name: y().trim().min(1),
  thicknesses: ee(
    pe([
      y().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      d()
    ])
  ).min(1)
}), ao = B({
  labels: ee(y()),
  pricing: Se(y(), d().min(0)).refine((t) => Object.keys(t).length > 0, {
    message: "Pricing must contain at least one value"
  }),
  options: xe().optional(),
  keys: ee(y()).optional(),
  // if not all the default keys should be set
  locations: ee(y()).optional(),
  // available locations for this extras type
  groups: ee(Gs).optional(),
  // custom location groups
  rules: xe().optional()
  // validation rules for this extras type
});
B({
  success: D(),
  price: d().optional(),
  error: y().optional(),
  cacheHit: D().optional()
});
B({
  valid: D(),
  errors: ee(y()),
  warnings: ee(y())
});
B({
  pricing: ss,
  labels: ee(y()),
  options: ee(ee(y())),
  // Simplified to string arrays only
  keys: ee(y()),
  maxLevels: d().min(1)
});
B({
  enableCaching: D().default(!0),
  enableLogging: D().default(!1),
  maxCacheSize: d().min(1).default(1e3)
});
const Bm = B({
  stockType: fe([...Js]).optional(),
  bladeWidth: pe([
    Xo,
    y()
  ]).optional(),
  cutType: Sn,
  cutPreference: xn,
  stackHeight: wn,
  guillotineOptions: kn
}).optional();
B({
  l: d().nullable(),
  w: d().nullable(),
  t: pe([d(), y()]).nullable().optional(),
  material: y().nullable().optional(),
  orientationLock: pe([
    me("l"),
    me("w"),
    me("")
  ]).nullable().optional(),
  q: d().min(1).nullable().optional(),
  name: y().nullable().optional(),
  // Import existing schemas for extras
  banding: zr.nullable().optional(),
  finish: qr.nullable().optional(),
  planing: Wr.nullable().optional(),
  // Custom data as record
  customData: Se(y(), xe()).nullable().optional(),
  stockId: y().nullable().optional()
});
const jm = B({
  // Required fields
  stock: ee(Ii).default([]),
  options: Mm,
  // Optional fields
  type: y().optional(),
  // variable | simple
  materials: ee(_m).optional(),
  banding: ao.nullable().optional(),
  finish: ao.nullable().optional(),
  planing: ao.nullable().optional(),
  machining: xe().optional(),
  bandingPricing: ss.optional(),
  finishPricing: ss.optional(),
  planingPricing: ss.optional(),
  machiningPricing: ss.optional(),
  // colors field removed in version 6.1.0 - was deprecated and unused
  variations: xe().optional(),
  // NOTE: extrasValidationRules and extrasLocationGroups moved to optionsSchema
  // Saw configuration
  saw: Bm,
  // Stock filter (optional)
  // When enabled, the stock array is used as available filter options
  // and the actual stock list starts empty (built by user selections)
  stockFilter: B({
    enabled: D(),
    config: xe().optional()
    // Use any to avoid circular dependency
    // Note: availableStock removed - uses stock array instead
  }).optional()
}), Vm = B({
  l: d(),
  w: d(),
  t: d().nullable(),
  q: d()
}), Nm = B({
  jobId: d(),
  metadata: ia.optional(),
  parts: ee(wl),
  // Use lightweight mapped schema
  stock: ee(Ip),
  // Use lightweight mapped schema
  offcuts: ee(Vm),
  inputs: B({
    parts: ee(kp)
    // Use lightweight input schema
  })
});
Nm.extend({
  checkout: B({
    formattedTotalStockCost: y(),
    formattedBandingCost: Se(y(), y()),
    formattedFinishCost: Se(y(), y())
  }).optional()
});
function Gm(t) {
  const e = jm.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function zm(t) {
  const e = Gm(t);
  if (!e.success) {
    const i = e.error?.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", i), new Error(`Invalid checkout data: ${i}`);
  }
  return e.data;
}
const qm = ["id", "data-index"], Wm = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = se({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), o = () => {
      if (!i.inputShape) return;
      let l = {
        l1: hi(i.inputShape, "banding", "side.l1"),
        l2: hi(i.inputShape, "banding", "side.l2"),
        w1: hi(i.inputShape, "banding", "side.w1"),
        w2: hi(i.inputShape, "banding", "side.w2")
      };
      const c = xd(
        i.orientationModel,
        i.stockGrain,
        i.inputShape
      );
      c && (l = jr(l, c)), n.value = l;
    };
    Be([
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
    return Yt(() => {
      document.getElementById(i.id)?.addEventListener("keydown", a);
    }), fs(() => {
      document.getElementById(i.id)?.removeEventListener("keydown", a);
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
    ], 10, qm));
  }
}), Hm = ["id", "data-index", "disabled"], Um = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = J(() => i.inputShape ? hi(i.inputShape, "finish", "face.a") : !1), o = J(() => i.inputShape ? hi(i.inputShape, "finish", "face.b") : !1), a = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = gi("FontAwesomeIcon");
      return w(), T("button", {
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
        Me(c, { icon: ["fass", "spray-can"] })
      ], 10, Hm);
    };
  }
});
function Ym(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Rl(t) {
  const e = Ym(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((i) => i && i.type && i.size > 0)) : !1;
}
const Km = Re({
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
      return Rl(this.inputShape);
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
}), Zm = ["id", "disabled"];
function Xm(t, e, i, s, n, o) {
  const a = gi("FontAwesomeIcon");
  return w(), T("button", {
    id: t.id,
    class: Ie(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...r) => t.openMachining && t.openMachining(...r))
  }, [
    Me(a, { icon: ["fass", "hammer"] })
  ], 10, Zm);
}
const Jm = /* @__PURE__ */ Pt(Km, [["render", Xm]]), Qm = ["id"], ey = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, ty = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, iy = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, sy = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, ny = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, oy = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, ay = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, nr = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = se(0), o = se(!1), a = (j, m, M, K) => {
      if (!ye(M) || m === 0)
        return j;
      const re = r();
      return m === 1 || m === 2 && K !== "n" && j ? re : j;
    }, r = (j) => {
      const m = { ...i, ...j };
      if (!m.rectangle || !ye(m.rectangle)) return "";
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
        orientationOptionsLength: A.value.length,
        orientationOptions: A.value,
        currentOrientation: S.value,
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
      const j = c(S.value);
      "multiEdit" in i.rectangle && i.rectangle.multiEdit && S.value === "" && n.value !== j && n.value === 0 && (console.log("🔄 Syncing orientation index for multi-edit", { from: n.value, to: j }), n.value = j);
      let M = null;
      [1, 2].includes(i.orientationModel) ? (console.log("🔀 Toggling orientation (model 1 or 2)"), M = f()) : (console.log("🔄 Iterating through orientation options (model 0)"), M = u()), console.log("✅ Setting new orientation", {
        oldIndex: n.value,
        newIndex: M,
        oldValue: A.value[n.value],
        newValue: A.value[M]
      }), n.value = M;
    }, c = (j) => {
      const m = A.value.findIndex((M) => M === j);
      return m === -1 ? 0 : m;
    }, u = () => {
      let j = n.value + 1;
      return j > A.value.length - 1 && (j = 0), j;
    }, f = () => {
      let j = 0;
      if (S.value === "") {
        const m = r();
        j = A.value.findIndex((M) => M === m);
      } else
        j = A.value.findIndex((m) => m === "");
      return j;
    }, h = (j) => {
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
        L("");
        return;
      }
      const j = a(
        S.value,
        i.orientationModel,
        i.rectangle,
        i.stockGrain
      );
      if (j !== S.value) {
        L(j);
        return;
      }
      if (!o.value || n.value === -1) {
        const m = c(S.value);
        n.value = m;
      }
      if (ye(i.rectangle)) {
        if (i.orientationModel === 1) {
          const m = R.value ? r() : S.value;
          L(m);
          return;
        }
        if (i.orientationModel === 2) {
          let m;
          R.value ? m = i.stockGrain !== "n" ? r() : "" : m = S.value, L(m);
        }
      }
    }, E = se(!1), L = (j) => {
      const m = c(j);
      E.value = !0, n.value = m, E.value = !1, h(j);
    }, C = () => {
      const j = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], m = ["l", "w", "y", "n"], M = [0, 1, 2], K = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, re = {
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
        m.forEach((q) => {
          M.forEach((Q) => {
            const ie = new Fh({
              l: z.l,
              w: z.w
            }), he = r({
              orientationModel: Q,
              rectangle: ie,
              stockGrain: q
            });
            let be = "";
            ie.l === ie.w ? be = "l === w" : ie.l > ie.w ? be = "l >= w" : be = "w > l";
            const Oe = ["l", "w", "y"].includes(q) ? K : re;
            _.push({
              Model: Q,
              "Stock grain": q,
              "Stock grain description": P[q],
              Dimensions: be,
              "Orientation lock": he || "N/A",
              "Orientation Lock description": Oe[he] || "N/A"
            });
          });
        });
      }), _.sort((z, q) => {
        if (z.Model !== q.Model)
          return z.Model - q.Model;
        if (z["Stock grain"] !== q["Stock grain"])
          return z["Stock grain"].localeCompare(q["Stock grain"]);
        const Q = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return Q[z.Dimensions] - Q[q.Dimensions];
      }), console.table(_);
    }, A = J(() => {
      if (!i.rectangle) return ["l", "w"];
      if (zt(i.rectangle)) return ["l", "w"];
      let j = ["", "l", "w"];
      return i.rectangle.multiEdit ? [" ", "", "l", "w"] : ($.value && (j = j.filter((m) => m !== "w")), j);
    }), $ = J(() => ye(i.rectangle) || Gi(i.rectangle) ? i.rectangle.isSquare : i.rectangleType && i.rectangle?.l && i.rectangle?.w ? i.rectangle?.l === i.rectangle?.w : !1), S = J(() => {
      let j = "";
      if (zt(i.rectangle))
        j = i.rectangle.direction === "horizontal" ? "l" : "w";
      else if (ye(i.rectangle))
        j = i.rectangle.orientationLock ?? "";
      else if (Gi(i.rectangle)) {
        const M = i.rectangle.grain ?? "";
        M === "l" || M === "w" || M === "" ? j = M : j = "";
      }
      return j;
    }), V = J(() => zt(i.rectangle) || !i.rectangle ? {
      l: null,
      w: null
    } : {
      l: i.rectangle.l,
      w: i.rectangle.w
    }), R = J(() => !V.value.l && !V.value.w), F = J(() => zt(i.rectangle) ? !1 : co(
      i.orientationModel,
      i.stockGrain,
      i.rectangle,
      i.rectangleType,
      i.shapeOrientation
    )), W = J(() => {
      if (!i.rectangle)
        return i.shapeOrientation ? "noGrain" : "freeRotation";
      if (Gi(i.rectangle) || i.rectangleType === "stock") {
        const re = i.rectangle.grain;
        return "multiEdit" in i.rectangle && i.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[re] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[re] || "noGrain";
      }
      const j = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, m = i.stockGrain || "default";
      let M = "default";
      ye(i.rectangle) || i.rectangleType === "shape" ? M = g() : zt(i.rectangle) && (M = i.rectangle.direction || "default");
      const K = j[m]?.[M];
      return K || j[m]?.default || "freeRotation";
    });
    return Be(n, (j, m) => {
      if (!o.value) {
        console.log("⏭️ Skipping: not mounted yet");
        return;
      }
      if (m === void 0) {
        console.log("⏭️ Skipping: oldIndex is undefined");
        return;
      }
      if (E.value) {
        console.log("⏭️ Skipping: updating programmatically");
        return;
      }
      h(A.value[j]);
    }, { immediate: !1 }), Be(V, (j, m) => {
      if (!i.rectangle || i.orientationModel === 0 || !ye(i.rectangle) || ye(i.rectangle) && (i.orientationModel === 2 && m.l && m.w && !S.value || i.stockGrain === "n" && !S.value))
        return;
      const M = r();
      S.value !== M && h(M);
    }, { immediate: !1 }), Be(() => i.stockGrain, (j, m) => {
      j !== m && x();
    }, { immediate: !0 }), Yt(() => {
      x(), mt(() => {
        o.value = !0, i.debug && C();
      });
    }), (j, m) => (w(), T("button", {
      type: "button",
      id: t.id,
      class: Ie(["c-btn orientation-button", { rot: F.value, square: $.value, disabled: t.disabled, [W.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: l
    }, [
      W.value === "delete" ? (w(), T("svg", ey, [...m[0] || (m[0] = [
        O("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : Y("", !0),
      W.value === "noChange" ? (w(), T("svg", ty, [...m[1] || (m[1] = [
        O("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : Y("", !0),
      W.value === "freeRotation" ? (w(), T("svg", iy, [...m[2] || (m[2] = [
        O("g", null, [
          O("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          O("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          O("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          O("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : Y("", !0),
      W.value === "leftRight" ? (w(), T("svg", sy, [...m[3] || (m[3] = [
        O("g", null, [
          O("path", { d: "m5.408 19.408h61.095" }),
          O("g", null, [
            O("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            O("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : Y("", !0),
      W.value === "topBottom" ? (w(), T("svg", ny, [...m[4] || (m[4] = [
        O("g", null, [
          O("path", { d: "m19.408 66.503v-61.095" }),
          O("g", null, [
            O("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            O("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : Y("", !0),
      W.value === "grainLeftRight" ? (w(), T("svg", oy, [...m[5] || (m[5] = [
        O("g", null, [
          O("path", { d: "m3 3h99.887" }),
          O("path", { d: "m3.113 32h99.887" }),
          O("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : Y("", !0),
      W.value === "grainTopBottom" ? (w(), T("svg", ay, [...m[6] || (m[6] = [
        O("g", null, [
          O("path", { d: "m61 3v99.887" }),
          O("path", { d: "m32 3.113v99.887" }),
          O("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : Y("", !0)
    ], 10, Qm));
  }
}), ry = ["id", "data-index", "disabled"], ly = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = J(() => i.inputShape ? hi(i.inputShape, "planing", "face.a") : !1), o = J(() => i.inputShape ? hi(i.inputShape, "planing", "face.b") : !1), a = () => {
      i.disabled || s("clicked");
    };
    return (r, l) => {
      const c = gi("FontAwesomeIcon");
      return w(), T("button", {
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
        Me(c, { icon: ["fass", "hammer"] })
      ], 10, ry);
    };
  }
}), cy = {
  key: 0,
  class: "info"
}, uy = ["disabled"], dy = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = J(() => n.includes(i.field.name) || i.field.name === "material" && i.typePrefix === "part" || i.field.name === "t" && i.thicknessOptions?.length > 0), a = J(() => {
      try {
        const A = i.field.propertyPath || i.field.name;
        return A.includes(".") ? di(i.item, A) ?? null : i.item[A] ?? null;
      } catch (A) {
        return console.error("[CheckoutField] Error getting field value:", A), null;
      }
    }), r = J(() => {
      if (i.field.custom && i.field.type) {
        const S = i.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(S))
          return S;
      }
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
    }), l = J(() => i.field.output ? i.field.output : null), c = J(() => i.field.options || []), u = J(() => !1), f = J(() => $a(i.item, [i.field.name])), h = J(() => $a(i.item, [i.field.name], !0)), g = J(() => i.multiEdit || !1), x = J(() => i.materialOptions?.length > 0 && ye(i.item) ? !i.item.material : !1), E = J(() => i.field.info ? typeof i.field.info == "string" ? i.field.info : typeof i.field.info == "object" && a.value !== null && i.field.info[a.value] || null : null), L = (A) => {
      s("update", A);
    }, C = (A, $) => {
      s("validation", A, $);
    };
    return (A, $) => o.value ? (w(), T(Ae, { key: 1 }, [
      t.field.name === "orientationLock" ? (w(), ve(nr, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        onUpdateOrientation: L
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "grain" ? (w(), ve(nr, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        onUpdateOrientation: L
      }, null, 8, ["rectangle", "stock-grain", "orientation-model"])) : t.field.name === "banding" ? (w(), ve(Wm, {
        key: 2,
        "input-shape": k(ye)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        index: t.index,
        onClicked: $[0] || ($[0] = (S) => A.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "index"])) : t.field.name === "finish" ? (w(), ve(Um, {
        key: 3,
        "input-shape": k(ye)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[1] || ($[1] = (S) => A.$emit("open-finish"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "planing" ? (w(), ve(ly, {
        key: 4,
        "input-shape": k(ye)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        onClicked: $[2] || ($[2] = (S) => A.$emit("open-planing"))
      }, null, 8, ["input-shape", "index"])) : t.field.name === "machining" ? (w(), ve(Jm, {
        key: 5,
        "input-shape": k(ye)(t.item) ? t.item : null,
        onOpen: $[3] || ($[3] = (S) => A.$emit("open-machining"))
      }, null, 8, ["input-shape"])) : t.field.name === "material" && t.typePrefix === "part" ? (w(), ve(Ci, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: a.value,
        label: k(G)(t.field.label || "fields.material"),
        placeholder: k(G)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !1,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: k(G)("actions.select"),
          delete: k(G)("actions.delete")
        },
        "onUpdate:value": L,
        onValidation: C
      }, {
        default: Pi(() => [
          qs(A.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (w(), ve(Ci, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: a.value,
        label: k(G)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: x.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: k(G)("actions.select"),
          delete: k(G)("actions.delete")
        },
        output: "number",
        "onUpdate:value": L,
        onValidation: C
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (w(), T("button", {
        key: 8,
        type: "button",
        disabled: t.readonly,
        onClick: $[4] || ($[4] = (S) => A.$emit("open-image-upload"))
      }, [
        Me(k(zs), { icon: ["fass", "image"] })
      ], 8, uy)) : Y("", !0)
    ], 64)) : (w(), ve(Ci, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: a.value,
      label: k(G)(t.field.label || t.field.name),
      placeholder: k(G)(t.field.placeholder || t.field.name),
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
      "disable-required-validation": g.value,
      "onUpdate:value": L,
      onValidation: C
    }, {
      default: Pi(() => [
        E.value ? (w(), T("p", cy, [
          Me(k(zs), { icon: ["fass", "info-circle"] }),
          ns(" " + X(E.value), 1)
        ])) : Y("", !0),
        qs(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), fy = {
  key: 0,
  class: "row table-heading"
}, hy = {
  key: 0,
  class: "cell center"
}, py = { class: "cell" }, gy = {
  key: 0,
  class: "cell"
}, my = ["onClick"], yy = { class: "cell" }, by = ["disabled", "aria-label", "onClick"], vy = { class: "button-wrapper main" }, wy = ["aria-label"], Sy = ["aria-label", "disabled"], xy = ["aria-label"], ky = { id: "part-count" }, Iy = {
  key: 3,
  id: "messages"
}, Cy = {
  key: 0,
  class: "heading"
}, Py = { class: "content" }, Ty = {
  key: 4,
  id: "progress"
}, Ay = { id: "diagram-wrapper" }, Oy = {
  key: 0,
  id: "stack"
}, $y = {
  key: 3,
  class: "debug"
}, ro = !0, Fy = /* @__PURE__ */ Re({
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
    const s = Bi(() => Promise.resolve().then(() => jy)), n = Bi(() => Promise.resolve().then(() => ob)), o = Bi(() => Promise.resolve().then(() => db)), a = Bi(() => Promise.resolve().then(() => sa)), {
      inputs: r,
      totalInputShapes: l,
      getShapeGrainSummary: c,
      updateNumberFormat: u,
      validateInputStock: f,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: h,
      addInputShape: g,
      addInputStock: x,
      cloneInputShape: E,
      updateInputShape: L,
      validationIssues: C,
      setExtrasOptionsFromPricing: A,
      getCentralizedOptions: $
    } = ur(), { r: S, updateFromResult: V, stackedStock: R, uniqueAddedShapes: F, uniqueUsedStock: W, activeStockAutoId: j, activeStock: m, setActiveStockAutoId: M } = _o(), { progress: K, reset: re } = Fc(), { addNotice: P } = Bo(), _ = J(() => r.inputShapes.value.filter(ye)), z = (b) => !b || !Array.isArray(b) ? [] : b.some((I) => {
      const p = I.banding && typeof I.banding == "object" && !I.banding.sides, N = I.finish && typeof I.finish == "object" && !I.finish.faces;
      return p || N;
    }) ? (console.log("[CheckoutCalculator] Converting V2 format to internal format"), zp({ parts: b }).parts || []) : b, q = (b, v, I) => b.map((p, N) => {
      const { x: de, y: we, ...Ee } = p, Qe = v[N]?.parentId;
      let De = Ee.machining;
      if (De) {
        const { issues: pw, warnings: gw, ...dc } = De;
        De = dc;
      }
      return {
        // Set defaults for any missing required fields
        issues: [],
        orientationLock: "",
        trim: { l1: 0, l2: 0, w1: 0, w2: 0 },
        banding: null,
        bandingType: null,
        finish: null,
        // Spread rest to override defaults with actual values
        ...Ee,
        // Override machining with cleaned version (no issues/warnings)
        ...De && { machining: De },
        // Add quantity from metadata tally using parentId from original part
        q: I?.addedPartTally?.[Qe],
        // Ensure stock is in correct format
        stock: { id: p?.stock?.id || p?.stockId }
      };
    }), Q = (b) => b.map((v) => ({
      id: v.id,
      name: v.name || "",
      l: v.l,
      w: v.w,
      t: v.t ?? null,
      material: v.material || "",
      q: v.q || 1,
      orientationLock: v.orientationLock ?? null,
      banding: v.banding,
      finish: v.finish,
      planing: v.planing
    })), ie = t, te = i, he = se(!1), be = "production", Oe = se(navigator?.language || "en-US"), U = yc(null), ct = window.location.hostname, yi = se(!1), bi = se(!0), Tt = ga("Checkout/currentURL", window.location.href), Z = ga("Checkout/lastMigrationVersion", "0.0.0"), Ge = se(null), Bt = se(!1), At = se(!1), wt = se(!1), Zt = se(!1), le = se(!1), ce = se(Nu()), Pe = se(!1), { socket: Te } = Oc({
      refs: {
        connected: yi,
        thinking: wt
      },
      callbacks: {
        onResult(b) {
          const v = b.optimisation;
          if (V(v), !v.shapeList?.length || !v.stockList?.length) {
            re(), P({
              type: "error",
              message: G("errors.calculation.no_result"),
              additional: [G("errors.validation.check_inputs")]
            }), wt.value = !1;
            return;
          }
          const I = q(
            Hp(F.value),
            F.value,
            S.metadata.value
          );
          if (Ge.value = {
            jobId: b.jobId,
            metadata: S.metadata.value,
            // Map result parts - ensure all required MappedPart schema fields are present
            parts: I,
            stock: W.value.map((p) => ({
              id: p.id,
              name: p?.name,
              l: p.l,
              w: p.w,
              t: p?.t,
              material: p.material,
              q: S.metadata.value?.usedStockTally?.[p.parentId],
              trim: p?.trim,
              cost: p?.cost,
              analysis: p?.analysis
              // type: s?.type
            })),
            offcuts: S.offcuts?.value?.map((p) => ({
              l: p.l,
              w: p.w,
              t: p?.t ?? null,
              q: p.q,
              stockId: p.stockId
            })),
            // Map input parts using simpler MappedInputPart schema (no x, y, rot, etc.)
            inputs: {
              parts: Q(r.inputShapes.value)
            }
          }, S?.metadata?.value?.unplacedParts?.length) {
            const p = S.metadata.value.unplacedParts.map((N) => N.id).join();
            P({
              type: "warning",
              message: G("woodwork.parts_not_fit") + ": " + p
            });
          }
          Ge.value && (console.log(Ge.value), te("result", Ge.value)), wt.value = !1;
        },
        onUser(b) {
          U.value = b;
        },
        onConnectError(b) {
          P({
            type: "error",
            message: G("errors.network.cannot_connect"),
            additional: [b]
          });
        },
        onError(b) {
          P({
            type: "error",
            message: G("errors.general.error_occurred"),
            additional: [b]
          });
        }
      }
    }), it = {
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
    }, ue = gt(it), Ye = gt({
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
    }), oi = se(null), Tn = se(!1), Zi = se(""), An = se("");
    Be(C, (b) => {
      b?.length > 0 ? (Tn.value = !0, Zi.value = "Validation Errors", An.value = b.map((v) => `${v.message} (${v.category.join(", ")})`).join(`

`)) : Zi.value === "Validation Errors" && (Tn.value = !1, Zi.value = "", An.value = "");
    }, { deep: !0 });
    const Ot = gt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), _e = se([]), Ke = se([]), vs = se([]), jt = gt({
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
    }), $e = gt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), Ve = gt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), ze = gt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), na = se(null), Oi = gt({}), $i = gt({}), Fi = gt({}), jl = J(() => ({
      banding: Oi.rules,
      finish: $i.rules,
      planing: Fi.rules
    })), oa = J(() => $c({
      stockType: Ye.stockType,
      materials: _e.value,
      minDimension: ue.minDimension,
      ...ue.fieldOrder && ue.fieldOrder.length > 0 ? { allowedFieldIds: ue.fieldOrder } : {}
    })), On = se([]), ws = se({
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
    }), Xi = J(() => {
      const b = oa.value.fields.value, v = oa.value.allFieldsMap.value, I = b.filter((Ee) => ws.value[Ee.name] ?? !0), p = ["banding", "finish", "planing", "machining", "imageUpload"], N = [];
      for (const Ee of p) {
        const st = ws.value[Ee], Qe = I.find((De) => De.name === Ee);
        if (st && !Qe) {
          const De = v.get(Ee);
          De && N.push(De);
        }
      }
      const de = On.value || [];
      return [...I, ...N, ...de];
    }), Ji = J(() => Xi.value.length + 2), Vl = J(() => {
      const b = {
        id: 34,
        del: 32
      }, v = {
        id: `${b.id}px`,
        del: `${b.del}px`
      }, I = [];
      for (const p of Xi.value) {
        if (p.name === "trim") continue;
        const N = p.w ?? "minmax(20px, 1fr)";
        I.push(N);
      }
      return I.unshift(v.id), I.push(v.del), I.join(" ");
    }), Ss = J(() => ({
      "--btn-color": ue.colors.buttonText,
      "--btn-bg": ue.colors.button,
      "--btn-hover-bg": Nl(ue.colors.button, -8),
      "--btn-focus-ring": ue.colors.button
    }));
    function Nl(b, v) {
      const I = b.replace("#", ""), p = parseInt(I, 16), N = Math.round(2.55 * v), de = (p >> 16) + N, we = (p >> 8 & 255) + N, Ee = (p & 255) + N;
      return `#${(16777216 + (de < 255 ? de < 1 ? 0 : de : 255) * 65536 + (we < 255 ? we < 1 ? 0 : we : 255) * 256 + (Ee < 255 ? Ee < 1 ? 0 : Ee : 255)).toString(16).slice(1)}`;
    }
    const Gl = {
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
    }, aa = J(() => U.value ? !(U.value && U.value?.api?.whiteLabel) : !0), Li = {
      stockSelection: (b) => {
        const v = ["efficiency", "smallest"];
        b && !v.includes(b) ? console.warn(`${b} is not a valid stockSelection, expected ${v.join("|")}`) : Ye.options.stockSelection = b;
      },
      minSpacing: (b) => {
        Ye.options.minSpacing = b;
      },
      maxParts: (b) => {
        ue.maxParts = b;
      },
      locale: (b) => {
        Oe.value = b.replace(/_/g, "-");
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
        for (const I in it.enable)
          I in b && (ue.enable[I] = b[I]);
        for (const I in v) {
          const p = v[I], N = di(b, [p]), de = it.enable[p], we = N !== void 0 ? N : de;
          console.log(`[optionHandlers.enable] Setting ${I} to ${we} (sentEnable.${p}=${N}, default=${de})`), Vt(I, we);
        }
        le.value = di(b, ["csvImport"]) ?? it.enable.csvImport;
      },
      colors: (b) => {
        for (const v in it.colors)
          v in b && (ue.colors[v] = b[v]);
      },
      orientationModel: (b) => {
        if (![0, 1, 2].includes(b)) {
          ue.orientationModel = 0;
          return;
        }
        ue.orientationModel = b;
      },
      numberFormat: (b) => {
        if (!["decimal", "fraction"].includes(b)) {
          ue.numberFormat = "decimal";
          return;
        }
        ue.numberFormat = b;
      },
      customFields: (b) => {
        if (console.log("[optionHandlers.customFields] Received custom fields:", b), !Array.isArray(b) || !b?.length) {
          console.log("[optionHandlers.customFields] No custom fields provided");
          return;
        }
        const v = [];
        b.forEach((I) => {
          const p = ra(I.id), N = {
            ...I,
            custom: !0,
            id: p,
            name: p,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + p,
            fieldMap: "customData." + p
          };
          I.type === "checkbox" && (N.w = "32px"), I.type === "select" && (N.output = I.output ?? "string", N.options = I.options), v.push(N);
        }), console.log("[optionHandlers.customFields] Processed custom field definitions:", v), On.value = v, mt(() => {
          for (const I of r.inputShapes.value)
            I.customData = b.reduce((p, N) => {
              const de = ra(N.id);
              return p[de] = I.customData[de] || N.default || "", p;
            }, {});
          console.log("[optionHandlers.customFields] Updated shapes customData");
        });
      }
    }, zl = (b) => {
      console.log("[init] Starting initialization with data:", b), ie.debug && te("log", ["checkout init...", b]), b?.parts && (b.parts = z(b.parts));
      let v;
      try {
        v = zm(b), console.log("[init] Validated data:", v);
      } catch (p) {
        te("error", p.message || "Invalid init data");
        return;
      }
      if (v.saw) {
        const p = v.saw;
        if (p.stockType !== void 0 && (Js.includes(p.stockType) || console.warn(`${p.stockType} is not a valid stockType, expected ${Js.join("|")}`), Ye.stockType = p.stockType, p.stockType === "linear" && (Ye.cutType = null, Ye.cutPreference = null)), p.bladeWidth !== void 0) {
          const N = typeof p.bladeWidth == "string" ? parseFloat(p.bladeWidth) : p.bladeWidth;
          N >= 0 ? Ye.bladeWidth = N : console.warn(`SmartCut - you provided an incorrect blade width of: ${p.bladeWidth}`);
        }
        if (p.cutType !== void 0 && (Ye.cutType = p.cutType), p.cutPreference !== void 0 && (ho.includes(p.cutPreference) ? Ye.cutPreference = p.cutPreference : console.warn(`SmartCut - cut preference ${p.cutPreference || "N/A"} is not valid. Expected: ${ho.join("|")}`)), p.guillotineOptions !== void 0 && typeof p.guillotineOptions == "object" && Object.assign(Ye.guillotineOptions, p.guillotineOptions), p.stackHeight !== void 0) {
          const N = typeof p.stackHeight == "string" ? parseFloat(p.stackHeight) : p.stackHeight;
          Ye.stackHeight = N;
        }
      }
      if (v?.options) {
        const p = v.options;
        console.log("[init] sentOptions:", p), console.log("[init] available optionHandlers:", Object.keys(Li)), Sl(p), v.saw ? ["stockType", "cutPreference", "bladeWidth"].forEach((we) => {
          we in v.saw || te("error", `${we} is a required saw property`);
        }) : te("error", "saw configuration is required");
        const N = ["enable", "colors"];
        console.log("[init] Processing options...");
        for (const de in p)
          console.log(`[init] Processing option: ${de}, hasHandler: ${de in Li}`), N.includes(de) || (ue[de] = p[de]), de in Li && (console.log(`[init] Calling option handler for: ${de}`), Li[de](p[de]));
      }
      if (v.options.colors && "colors" in Li && Li.colors(v.options.colors), v.banding) {
        const p = v.banding;
        "locations" in p && p.locations && (Oi.locations = p.locations), "groups" in p && p.groups && (Oi.groups = p.groups), "rules" in p && p.rules && (Oi.rules = p.rules);
      }
      if (v.finish) {
        const p = v.finish;
        "locations" in p && p.locations && ($i.locations = p.locations), "groups" in p && p.groups && ($i.groups = p.groups), "rules" in p && p.rules && ($i.rules = p.rules);
      }
      if (v.planing) {
        const p = v.planing;
        "locations" in p && p.locations && (Fi.locations = p.locations), "groups" in p && p.groups && (Fi.groups = p.groups), "rules" in p && p.rules && (Fi.rules = p.rules);
      }
      En("banding", v), En("finish", v), En("planing", v), Hl(v), ca(v), At.value = !0, ie.debug && te("log", ["init complete"]);
      const I = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(I), mt(() => {
        aa.value && !tc() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Vt = (b, v = !1) => {
      ws.value[b] = v;
    }, ra = (b) => b ? xu(b)?.toLowerCase() : null, ql = (b, v, I) => {
      try {
        if (!b || !v) return;
        const p = I !== null && I !== "" && I !== void 0 && I !== 0;
        if (v === "material" && (!I || I === "")) {
          const we = { material: null, t: null };
          L(b.autoId, we) || (console.log("[CHECKOUT] Material update failed - using fallback"), ts(b, "material", null), ts(b, "t", null), b.isNew || b.validate());
          return;
        }
        if (b.isNew)
          if (p)
            b.isNew = !1;
          else {
            ts(b, v, I);
            return;
          }
        const N = { [v]: I };
        L(b.autoId, N) || (console.log("[CHECKOUT] Field update failed - using fallback"), ts(b, v, I), b.validate());
      } catch (p) {
        console.error("[CHECKOUT] Error updating field:", p);
      }
    }, Wl = () => {
    }, Hl = (b) => {
      if (di(ue, ["enable", "machining"]) && b?.machining) {
        for (const v in jt)
          b.machining[v] && (jt[v] = b.machining[v]);
        if (["holes", "hingeHoles"].forEach((v) => {
          b?.machining?.[v] && (jt[v].enabled = b?.machining?.[v].enabled);
        }), b?.machining?.corners?.types?.length && (jt.corners.enabled = !0, jt.corners.types = b.machining.corners.types), b.banding && b?.options?.enable?.banding) {
          if (!$e) return;
          jt.banding = {
            enabled: !0
          }, $e.options.length && (jt.banding.options = $e.options), $e.labels.length && (jt.banding.labels = $e.labels), Sa($e.pricing) && (jt.banding.pricing = $e.pricing);
        }
      }
    }, Ul = (b = null) => {
      oi.value = b, b && ye(b) && b.l && b.w ? he.value = !0 : alert(G("machining.enter_dimensions_first"));
    }, Yl = () => {
      he.value = !1;
    }, la = (b = []) => {
      if (Ke.value = [], vs.value = [], Vt("t", !1), !!b.length) {
        for (const v of b)
          if (v?.t)
            if (typeof v.t == "string" && v.t.includes(",")) {
              const I = ua(v.t, !0);
              I.length === 2 ? (Zl(I), Vt("t", !0), v.t = Ke.value[0]) : te("error", "bonded thickness found which does not have 2 options");
            } else Ke.value.includes(v.t) || Ke.value.push(v.t);
        Ke.value.length > 1 && Vt("t", !0);
      }
    }, Kl = (b) => {
      if (!b) return { thicknesses: [], bondedThicknesses: [] };
      if (!_e.value?.length)
        return {
          thicknesses: Ke.value,
          bondedThicknesses: []
        };
      if (!b.material)
        return {
          thicknesses: Ke.value,
          bondedThicknesses: []
        };
      const v = _e.value.find((N) => N.name === b.material);
      if (!v)
        return {
          thicknesses: Ke.value,
          bondedThicknesses: []
        };
      const I = [...v.thicknesses], p = [];
      for (let N = 0; N < I.length; N++) {
        const de = I[N], we = ua(de), Ee = [];
        if (we.length) {
          for (const st of we)
            I[N] = st, Ee.push(N);
          N++;
        }
        Ee.length && p.push(Ee);
      }
      return {
        thicknesses: I,
        bondedThicknesses: p
      };
    }, ca = (b) => {
      if (b?.stock?.some((v) => v?.material)) {
        _e.value = [], Ke.value = [], vs.value = [];
        const v = /* @__PURE__ */ new Map();
        for (const p of b.stock) {
          if (!p.material) continue;
          const N = p.material.toUpperCase();
          v.has(N) || v.set(N, /* @__PURE__ */ new Set()), p.t != null && v.get(N)?.add(H({ v: p.t }));
        }
        _e.value = Array.from(v.entries()).map(([p, N]) => ({
          name: p,
          thicknesses: Array.from(N).sort((we, Ee) => we - Ee)
        }));
        const I = /* @__PURE__ */ new Set();
        for (const p of _e.value)
          for (const N of p.thicknesses)
            I.add(H({ v: N }));
        Ke.value = Array.from(I).sort((p, N) => p - N), _e.value.length > 1 ? Vt("material", !0) : Vt("material", !1), Ke.value.length > 1 ? Vt("t", !0) : Vt("t", !1);
      } else
        la(b.stock);
    }, Zl = (b, v = null) => {
      if (!Array.isArray(b)) {
        te("error", "addBondedThicknesses expects an array");
        return;
      }
      const I = [];
      for (let p of b)
        ue.numberFormat === "decimal" && (p = parseFloat(p)), Ke.value.push(p), v && v.thicknesses.push(p), I.push(Ke.value.length - 1);
      vs.value.push(I);
    }, Xl = (b) => {
      const { thicknesses: v } = Kl(b);
      return v?.length ? v.map((I) => ({
        label: I?.toString(),
        value: I
      })) : [];
    }, ua = (b, v = !1) => {
      if (typeof b == "string" && b.includes(",")) {
        const I = b.split(",");
        return v ? I.map((p) => H({ v: p })) : I;
      }
      return [];
    }, Jl = () => {
      Pe.value ? ec() : Ql();
    }, Ql = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Pe.value = !0;
    }, ec = () => {
      document.exitFullscreen && document.exitFullscreen(), Pe.value = !1;
    }, tc = () => {
      if (U.value?.api?.whiteLabel) return !0;
      let b = !0;
      const v = document.querySelector("#smartcut-checkout a#credit");
      if (!v) return b = !1;
      const I = window.getComputedStyle(v);
      return I.display === "none" || I.display === "hidden" || I.opacity === "0" || I.color === "transparent" || I.position !== "absolute" || I.color !== "#4e4e4e" && I.color !== "rgb(78, 78, 78)" ? b = !1 : (bi.value = b, b);
    }, $n = J(() => typeof ie.findExtrasPrice == "function"), da = (b, v) => {
      let I, p;
      switch (v) {
        case "banding":
          I = $e.options, p = $e.labels;
          break;
        case "finish":
          I = Ve.options, p = Ve.labels;
          break;
        case "planing":
          I = ze.options, p = ze.labels;
          break;
        default:
          I = [], p = [];
      }
      vi(b, v, I, p);
    }, fa = (b) => {
      const v = Object.keys(b);
      return Math.max(...v.map((p) => p.split("|").length));
    }, Qi = (b, v, I) => {
      if (!b)
        return [];
      if (I > 0 && !v[I - 1])
        return [];
      const p = /* @__PURE__ */ new Set();
      for (const de of Object.keys(b)) {
        const we = de.split("|");
        if (we.length > I) {
          let Ee = !0;
          for (let st = 0; st < I; st++) {
            const Qe = v[st], De = we[st];
            if (Qe && Qe !== De) {
              Ee = !1;
              break;
            }
          }
          Ee && p.add(we[I]);
        }
      }
      return Array.from(p);
    }, Fn = (b, v, I, p) => {
      let N, de;
      switch (v) {
        case "banding":
          N = $e.options, de = $e.labels;
          break;
        case "finish":
          N = Ve.options, de = Ve.labels;
          break;
        case "planing":
          N = ze.options, de = ze.labels;
          break;
        default:
          N = [], de = [];
      }
      return io(b, v, I, p, N, de);
    }, ic = (b, v, I) => {
      let p, N;
      switch (v) {
        case "banding":
          p = $e.options, N = $e.labels;
          break;
        case "finish":
          p = Ve.options, N = Ve.labels;
          break;
        case "planing":
          p = ze.options, N = ze.labels;
          break;
        default:
          p = [], N = [];
      }
      return io(b, v, I, ie.findExtrasPrice, p, N);
    }, sc = se({}), nc = (b = 1) => {
      for (let v = b; v--; ) {
        let I = {
          l: null,
          w: Ye.stockType === "linear" ? r.inputStock.value[0]?.w : null,
          t: Ke.value.length ? Ke.value[0] : null,
          q: 1,
          material: _e.value?.length === 1 ? _e.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const N = r.inputShapes.value[r.inputShapes.value.length - 1];
          I.material = N.material, I.t = N.t;
        }
        const p = g(I);
        p && ($e?.labels?.length && vi(p, "banding", $e.options, $e.labels), Ve?.labels?.length && vi(p, "finish", Ve.options, Ve.labels), ze?.labels?.length && vi(p, "planing", ze.options, ze.labels));
      }
    }, Ln = (b = {}) => {
      const v = {
        q: 1,
        // Always set quantity to 1
        ...b
      }, I = g(v);
      return I && (Ye.stockType === "linear" && r.inputStock.value[0]?.w && (I.w = r.inputStock.value[0].w), Ke.value.length && (I.t = Ke.value[0]), _e.value?.length === 1 && (I.material = _e.value[0].name), $e?.labels?.length && vi(I, "banding", $e.options, $e.labels), Ve?.labels?.length && vi(I, "finish", Ve.options, Ve.labels), ze?.labels?.length && vi(I, "planing", ze.options, ze.labels)), I;
    }, oc = (b) => {
      if (Ke.value.length)
        for (const v of b) {
          if (!v.t) return;
          const I = Ke.value.findIndex(
            (de) => H({ v: de }) === v.t
          ), p = vs.value.find((de) => de.includes(I));
          if (!p) return;
          const N = Math.min(
            ...p.map((de) => Ke.value[de])
          );
          H({ v: v.t }) > N && (v.q = v.q * (H({ v: v.t }) / N), v.notes = `Bond to form ${v.t.valueOf()}`, v.t = N);
        }
    }, ha = () => {
      re(), M(null), S.stockList.value = [], S.shapeList.value = [], S.cutList.value = [];
    }, xs = () => {
      r.inputShapes.value.length = 0, ie.inputType !== "formula" && mt(() => g({}));
    }, ac = async () => {
      if (te("calculating"), wt.value) return !1;
      if (wt.value = !0, Zt.value = !1, !(await Tm({
        t: G,
        partTrim: ue.partTrim,
        maxShapes: ue.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: $e.pricing,
        finishPricing: Ve.pricing,
        planingPricing: ze.pricing,
        findExtrasPrice: ie.findExtrasPrice,
        extrasValidationRules: jl.value,
        onLimit: () => {
          P({
            type: "error",
            message: G("limits.max_parts") + " " + ue.maxParts
          });
        }
      })).valid) {
        te("validation-error"), wt.value = !1;
        return;
      }
      ha();
      const v = r.inputShapes.value.map((p) => E(p)).filter(Boolean);
      if (v.length !== r.inputShapes.value.length)
        return P({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), wt.value = !1, !1;
      oc(v), ie.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((p) => ({ l: p.l, w: p.w })),
        "parts",
        v.map((p) => ({ l: p.l, w: p.w }))
      );
      const I = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: v.map((p) => p.toData()),
        inputStock: r.inputStock.value.map((p) => p.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: ct,
        extrasOptions: $(),
        source: "checkout",
        sourceVersion: "4.0.20"
      };
      await Te.connect(), Te.emit("calculate", I);
    }, En = (b, v) => {
      if (console.log(`[initExtra] Starting init for ${b}`), console.log(`[initExtra] initData[${b}]:`, v?.[b]), console.log(`[initExtra] options.enable[${b}]:`, ue.enable?.[b]), Vt(b, !1), !b || !v || !v?.[b]) {
        console.log(`[initExtra] Early return: missing extraType or initData[${b}]`);
        return;
      }
      if (!di(ue, ["enable", b])) {
        console.log(`[initExtra] Early return: ${b} not enabled in options`);
        return;
      }
      const I = [b, "pricing"];
      if (!wa(v, I)) {
        te("error", `${I.join(".")} not found in sent data`);
        return;
      }
      const p = di(v, I);
      if (typeof p != "object") {
        te("error", `${I.join(".")} data must be an object`);
        return;
      }
      if (!Sa(p)) {
        te("error", `if provided, ${I.join(".")} data must contain some values`);
        return;
      }
      const N = Object.keys(p), de = Object.values(p);
      if (!N.length) {
        te("error", `no ${I.join(".")} pricing found`);
        return;
      }
      const we = /,/;
      for (const De of N)
        if (we.test(De)) {
          te("error", `${I} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (de.some((De) => isNaN(De))) {
        te("error", `${I} values must be a number`);
        return;
      }
      const Ee = fa(p), st = [b, "labels"];
      let Qe = [];
      if (wa(v, st))
        Qe = di(v, st);
      else {
        te("error", `${st.join(".")} not found`);
        return;
      }
      if (!Qe) {
        te("error", `${st.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Qe)) {
        te("error", `${st.join(".")} data must be an array`);
        return;
      }
      if (!Qe?.length) {
        te("error", `if provided, ${st.join(".")} data must contain values`);
        return;
      }
      if (Qe.length !== Ee) {
        te("error", `${st.join(".")} length (${Qe.length}) must match the number of levels in ${I.join(".")} (${Ee})`);
        return;
      }
      switch (b) {
        case "banding": {
          $e.labels = Qe, $e.pricing = p;
          const De = Dn(p);
          $e.options = De, A("banding", De, Qe, p);
          break;
        }
        case "finish": {
          Ve.labels = Qe, Ve.pricing = p;
          const De = Dn(p);
          Ve.options = De, A("finish", De, Qe, p);
          break;
        }
        case "planing": {
          ze.labels = Qe, ze.pricing = p;
          const De = Dn(p);
          ze.options = De, A("planing", De, Qe, p);
          break;
        }
      }
      if (na.value = $(), console.log(`[initExtra] Enabling field: ${b}`), Vt(b, !0), console.log("[initExtra] Field enabled state:", ws.value[b]), console.log(`[initExtra] ${b} data:`, b === "banding" ? $e : b === "finish" ? Ve : ze), !!r.inputShapes.value?.length)
        for (const De of r.inputShapes.value)
          da(De, b);
    }, Dn = (b) => {
      const v = [], I = Object.keys(b), p = fa(b);
      for (let N = p; N--; ) v.push(/* @__PURE__ */ new Set());
      for (const N of I)
        N.split("|").forEach((we, Ee) => v[Ee].add(we));
      for (let N = 0; N < p; N++)
        v[N] = Array.from(v[N]);
      return v;
    }, ks = (b, v) => {
      if (!v) return;
      b !== "info" && Object.keys(Ot).forEach((p) => {
        p !== b && p !== "info" && (Ot[p] = null);
      });
      const I = r.inputShapes.value.indexOf(v);
      Ot[b] === I ? (oi.value = null, Ot[b] = null, sc.value[b] = void 0) : (oi.value = v, Ot[b] = I);
    }, pa = (b) => {
      if (te("log", ["load event received"]), !At.value) {
        te("log", ["load event received"]);
        return;
      }
      rc(b.detail);
    }, rc = (b) => {
      if (te("log", ["loading parts..."]), !b || !b?.inputs?.parts?.length) {
        te("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let v = 0;
      for (const p of b.inputs.parts) {
        const N = Ln(p);
        N ? N.issues?.length && te("log", [`SmartCut - issues found while importing part at index ${v}`, N.issues]) : te("log", [`SmartCut - error loading part at index ${v}`, p]), v++;
      }
      r.inputShapes.value.flatMap((p) => Nr(p.issues)).length && P({
        type: "error",
        message: G("errors.general.issues_found")
      }), te("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, lc = (b) => {
      r.inputShapes.value.length = 0, mt(() => {
        for (const v of b)
          v.t = r.inputStock.value?.[0]?.t ?? null, Ln(v);
      });
    };
    Be(() => ie.inputStock, (b) => {
      if (ha(), Array.isArray(b) || console.warn("SmartCut - stock must be passed as an array"), !!b?.length) {
        r.inputStock.value.length = 0, _e.value.length || la(b);
        for (const v of b)
          x({
            ...v,
            autoAdd: !0
            // type: sawData.stockType
          }) || (console.error("Failed to add stock item:", v), P({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? mt(() => {
            r.inputShapes.value.forEach((I) => {
              const p = I.material ? _e.value.find((N) => N.name === I.material) : null;
              if (p)
                p.thicknesses.includes(H({ v: I.t })) || (I.t = H({ v: p.thicknesses[0] }));
              else if (_e.value?.length === 1) {
                I.material = _e.value[0].name;
                const N = _e.value[0];
                N.thicknesses.includes(H({ v: I.t })) || (I.t = H({ v: N.thicknesses[0] }));
              } else if (_e.value?.length > 1 && I.t) {
                const N = _e.value.find((de) => de.thicknesses.some((we) => H({ v: we }) === H({ v: I.t })));
                N ? I.material = N.name : (I.material = _e.value[0].name, I.t = H({ v: _e.value[0].thicknesses[0] }));
              } else _e.value?.length > 1 ? (I.material = _e.value[0].name, I.t = H({ v: _e.value[0].thicknesses[0] })) : !I.t && r.inputStock.value[0]?.t && (I.t = H({ v: r.inputStock.value[0].t }));
            });
          }) : ie.inputType !== "formula" && mt(() => g());
          const v = f(r.inputSaw.value);
          v.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(v))), P({
            type: "error",
            message: G("errors.validation.stock_issue"),
            additional: v.map((I) => I.message)
          }));
        }
      }
    }, { immediate: !0 }), Be(r.inputShapes, (b) => {
      te("inputs-changed"), b.forEach((v) => {
        Ye.stockType === "linear" && (v.w = r.inputShapes.value[0]?.w);
        const I = _e.value.find((p) => p.name === v.material);
        I && (I.thicknesses.includes(H({ v: v.t })) || (v.t = H({ v: I.thicknesses[0] })));
      });
    }, { deep: !0 }), Be(() => ue.numberFormat, (b) => {
      u(b);
    }), Be(() => Ye, (b) => {
      r.inputSaw.value = new nl(b);
    }, { deep: !0 }), Yt(async () => {
      if (Bt.value) return;
      const b = "4.0.20", v = "4.0.0";
      xa(b, v) && !xa(Z.value, v) && (console.log(`[CheckoutCalculator] Clearing parts for migration from ${Z.value} to ${b}`), xs(), Z.value = b);
      const I = new URL(window.location.href), p = I.searchParams.toString(), N = I.origin + I.pathname + (p ? `?${p}` : "");
      Tt.value !== N && xs(), Tt.value = N, Oe.value = ue.locale, await Te.connect(), Te.emit("getUserFromDomain"), window.addEventListener("smartcut/load", pa), Bt.value = !0, ie.debug && te("log", [
        "ready...",
        "fields:",
        Xi.value.map((de) => de.name)
      ]);
    });
    const cc = () => {
      Te && Te.disconnect();
    }, uc = (b, v) => {
      r.inputShapes.value.forEach((I) => {
        I.update({ material: b, t: v });
      }), console.log(r.inputShapes.value.map((I) => I.t)), te("log", [`Updated ${r.inputShapes.value.length} shapes with material: ${b}, thickness: ${v}`]);
    };
    return fs(() => {
      window.removeEventListener("smartcut/load", pa), cc(), delete window.smartcutCheckout;
    }), e({
      init: zl,
      clear: xs,
      getAvailablePricingOptions: Qi,
      getExtrasPrice: ic,
      formatPrice: ie.formatPrice,
      findExtrasPrice: ie.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: da,
      createAndAddInputShape: Ln,
      updateShapeMaterialThickness: uc,
      initMaterialsThicknesses: ca
    }), (b, v) => {
      const I = gi("FontAwesomeIcon");
      return w(), T(Ae, null, [
        At.value ? Y("", !0) : (w(), ve(ir, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        oi.value?.machining && he.value ? (w(), ve(k(n), {
          key: 1,
          "input-shape": oi.value,
          "onUpdate:inputShape": v[0] || (v[0] = (p) => oi.value = p),
          translate: !0,
          options: jt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": k(io),
          "get-available-pricing-options": Qi,
          "format-price": t.formatPrice,
          onClose: Yl
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : Y("", !0),
        At.value ? (w(), T("section", {
          key: 2,
          id: "smartcut-checkout",
          class: Ie(["smartcut-content", { fullscreen: Pe.value }])
        }, [
          ce.value && !t.readonly ? (w(), T("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            style: et(Ss.value),
            onClick: v[1] || (v[1] = (p) => Jl())
          }, [
            Me(I, { icon: ["fass", "expand"] }),
            ns(" " + X(k(G)("general.full_screen")), 1)
          ], 4)) : Y("", !0),
          aa.value ? (w(), T("a", {
            key: 1,
            id: "credit",
            style: Gl,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, X(k(bu)(k(G)("general.powered_by"))), 1)) : Y("", !0),
          O("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: et({ "grid-template-columns": Vl.value })
          }, [
            k(r).inputShapes.value.length ? (w(), T("div", fy, [
              v[6] || (v[6] = O("div", { class: "cell id" }, null, -1)),
              (w(!0), T(Ae, null, Ne(Xi.value, (p) => (w(), T("div", {
                key: p.name,
                class: Ie(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(p.name) || p.type === "boolean" }])
              }, X(k(G)(p.label)), 3))), 128)),
              k(be) === "development" && ro ? (w(), T("div", hy, " Info ")) : Y("", !0),
              v[7] || (v[7] = O("div", { class: "cell del" }, null, -1))
            ])) : Y("", !0),
            (w(!0), T(Ae, null, Ne(_.value, (p, N) => (w(), T("div", {
              key: N,
              class: "row inputs"
            }, [
              O("div", py, [
                O("div", {
                  class: "id",
                  style: et({
                    background: ue.colors.partA,
                    color: ue.colors.text
                  })
                }, X(N + 1), 5)
              ]),
              (w(!0), T(Ae, null, Ne(Xi.value, (de) => (w(), T("div", {
                key: de.name,
                class: "cell"
              }, [
                p ? (w(), ve(dy, {
                  key: 0,
                  field: de,
                  item: p,
                  index: N,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": ue.numberFormat,
                  "orientation-model": ue.orientationModel,
                  "stock-grain": k(c)(p),
                  "material-options": _e.value?.map((we) => ({ label: we.name, value: we.name })) || [],
                  "thickness-options": de.name === "t" ? Xl(p) : [],
                  "banding-enabled": Ot.banding === N ? p : null,
                  onUpdate: (we) => ql(p, de.name, we),
                  onValidation: v[2] || (v[2] = (we, Ee) => Wl()),
                  onOpenBanding: (we) => ks("banding", p),
                  onOpenMachining: (we) => Ul(p),
                  onOpenFinish: (we) => ks("finish", p),
                  onOpenPlaning: (we) => ks("planing", p)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "banding-enabled", "onUpdate", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning"])) : Y("", !0)
              ]))), 128)),
              k(be) === "development" && ro ? (w(), T("div", gy, [
                O("button", {
                  class: Ie(["c-btn", { selected: Ot.info === N }]),
                  style: et(Ss.value),
                  type: "button",
                  onClick: (de) => ks("info", p)
                }, " i ", 14, my)
              ])) : Y("", !0),
              O("div", yy, [
                O("button", {
                  disabled: k(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${k(G)("actions.remove")} ${k(vu)(k(G)("woodwork.part"))}`,
                  onClick: (de) => k(h)(p.autoId)
                }, [
                  Me(I, { icon: ["fass", "trash"] })
                ], 8, by)
              ]),
              Me(k(s), {
                item: p,
                "num-columns": Ji.value
              }, null, 8, ["item", "num-columns"]),
              Ot.banding === N && $e.options.length > 0 && $n.value ? (w(), ve(Ns, {
                key: 1,
                shape: p,
                "shape-index": N,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": $e.keys,
                "all-options": $e.options,
                pricing: $e.pricing,
                labels: $e.labels,
                locations: Oi.locations,
                "location-groups": Oi.groups,
                "user-friendly-field-map": k(Ht),
                "part-columns": Ji.value,
                "format-price": t.formatPrice,
                "find-extras-price": ie.findExtrasPrice,
                "get-price": Fn,
                "orientation-model": ue.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              Ot.finish === N && Ve.options.length > 0 && $n.value ? (w(), ve(Ns, {
                key: 2,
                shape: p,
                "shape-index": N,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ve.keys,
                "all-options": Ve.options,
                pricing: Ve.pricing,
                labels: Ve.labels,
                locations: $i.locations,
                "location-groups": $i.groups,
                "user-friendly-field-map": k(Ht),
                "part-columns": Ji.value,
                "format-price": t.formatPrice,
                "find-extras-price": ie.findExtrasPrice,
                "get-price": Fn,
                "orientation-model": ue.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              Ot.planing === N && ze.options.length > 0 && $n.value && (console.log("[CheckoutCalculator] Rendering planing ExtrasInputs with location-groups:", ue.extrasLocationGroups?.planing), !0) ? (w(), ve(Ns, {
                key: 3,
                shape: p,
                "shape-index": N,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": ze.keys,
                "all-options": ze.options,
                pricing: ze.pricing,
                labels: ze.labels,
                locations: Fi.locations,
                "location-groups": Fi.groups,
                "user-friendly-field-map": k(Ht),
                "part-columns": Ji.value,
                "format-price": t.formatPrice,
                "find-extras-price": ie.findExtrasPrice,
                "get-price": Fn,
                "orientation-model": ue.orientationModel,
                "get-available-pricing-options": Qi,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model"])) : Y("", !0),
              Ot.info === N ? (w(), T("div", {
                key: 4,
                id: "shape-info",
                style: et({ "grid-column-end": "span " + Ji.value })
              }, [
                O("div", null, X(p?.banding), 1),
                O("div", null, X(na.value?.banding?.options || "No options"), 1)
              ], 4)) : Y("", !0)
            ]))), 128))
          ], 4),
          O("div", vy, [
            t.readonly ? Y("", !0) : (w(), T("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${k(G)("actions.add")} ${k(G)("woodwork.part")}`,
              style: et(Ss.value),
              onClick: v[3] || (v[3] = (p) => nc())
            }, [
              Me(I, { icon: ["fass", "plus-large"] }),
              ns(" " + X(`${k(G)("actions.add")} ${k(G)("woodwork.part")}`), 1)
            ], 12, wy)),
            O("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": k(G)("actions.calculate"),
              style: et(Ss.value),
              disabled: !k(r).inputStock.value?.length || wt.value,
              onClick: v[4] || (v[4] = (p) => ac())
            }, [
              Me(I, { icon: ["fass", "calculator"] }),
              ns(X(k(G)("actions.calculate")), 1)
            ], 12, Sy),
            t.readonly ? Y("", !0) : (w(), T("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": k(G)("actions.clear"),
              onClick: v[5] || (v[5] = (p) => xs())
            }, [
              Me(I, { icon: ["fass", "trash"] })
            ], 8, xy)),
            O("div", ky, X(k(l)) + X(ue?.maxParts ? "/" + ue.maxParts : ""), 1)
          ]),
          le.value && !t.readonly ? (w(), ve(k(o), {
            key: 2,
            ref: "import",
            "number-format": ue.numberFormat,
            "custom-fields": On.value,
            "banding-options": $e.options,
            "banding-labels": $e.labels,
            "finish-options": Ve.options,
            "finish-labels": Ve.labels,
            onImport: lc
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : Y("", !0),
          Tn.value ? (w(), T("div", Iy, [
            Zi.value ? (w(), T("div", Cy, X(Zi.value), 1)) : Y("", !0),
            O("pre", Py, X(An.value), 1)
          ])) : Y("", !0),
          (ue.enable.diagram ? wt.value && !k(K).complete : wt.value || k(K).complete) ? (w(), T("div", Ty, [
            Me(ir, {
              size: 50,
              number: k(K).shapeCount,
              complete: k(K).complete,
              "show-number": ue.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : Y("", !0),
          ds(O("div", Ay, [
            k(m)?.saw?.stockType !== "roll" ? (w(), T("div", Oy, X(k(m)?.stack ? k(m)?.stack : 1), 1)) : Y("", !0),
            Me(Hg, {
              "element-id": "diagram",
              "number-format": ue.numberFormat,
              "decimal-places": ue.decimalPlaces,
              colors: ue.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [un, ue.enable.diagram && k(K).complete]
          ]),
          ue.enable.diagram && k(R).length > 1 && k(K).complete ? (w(), ve(cg, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-auto-id": k(j),
            "stock-list": k(R),
            onShowStock: k(M)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : Y("", !0)
        ], 2)) : Y("", !0),
        k(be) === "development" && ro ? (w(), T("div", $y, [
          v[8] || (v[8] = O("div", null, "Result data", -1)),
          Me(k(a), {
            data: [Ge.value],
            paths: ["Result"]
          }, null, 8, ["data"])
        ])) : Y("", !0)
      ], 64);
    };
  }
}), kS = /* @__PURE__ */ Pt(Fy, [["__scopeId", "data-v-60c57643"]]), Ml = fe(["select", "multiselect", "range", "boolean", "search"]), _l = fe(["asc", "desc"]), Bl = fe(["grid", "list"]), Ly = B({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: y().optional().describe("User-friendly display name"),
  description: y().optional().describe("Detailed description"),
  // Categorization
  supplier: y().optional().describe("Supplier name"),
  category: y().optional().describe("Stock category"),
  // UI metadata
  leadTime: d().int().optional().describe("Lead time in days"),
  minQuantity: d().int().positive().optional().describe("Minimum order quantity")
});
Ii.merge(Ly).describe("Stock option with filtering and display metadata");
const Ey = B({
  field: y().describe("Property name to filter on"),
  type: Ml,
  label: y().describe("Display label"),
  custom: D().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: d().optional().describe("Minimum value for range filter"),
  max: d().optional().describe("Maximum value for range filter"),
  step: d().optional().describe("Step size for range filter"),
  // Select filter options
  options: ee(B({
    label: y(),
    value: xe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: D().default(!0).describe("Whether filter is visible"),
  collapsible: D().default(!0).describe("Whether filter panel is collapsible"),
  order: d().int().optional().describe("Display order")
}), Dy = B({
  field: y().describe("Field to sort by"),
  order: _l,
  label: y().optional().describe("Display label for sort option")
}), Ry = B({
  // Filter configuration
  availableFilters: ee(Ey).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ee(y()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Dy.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Bl.default("grid").describe("Default display mode"),
  itemsPerPage: d().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: D().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: D().default(!0).describe("Allow multiple stock selection"),
  maxSelection: d().int().positive().optional().describe("Maximum number of stock items to select")
}), My = B({
  field: y(),
  value: xe(),
  type: Ml
});
B({
  // Active filters
  activeFilters: ee(My).default([]).describe("Currently active filters"),
  // Search
  searchQuery: y().default("").describe("Current search query"),
  // Sort
  sortBy: y().default("cost").describe("Current sort field"),
  sortOrder: _l.default("asc").describe("Current sort order"),
  // Display
  displayMode: Bl.default("grid").describe("Current display mode"),
  currentPage: d().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ee(y()).default([]).describe("IDs of selected stock items")
});
function _y() {
  return Ry.parse({});
}
const By = /* @__PURE__ */ Re({
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
    return (i, s) => (w(), T(Ae, null, [
      e.item.issues?.filter((n) => n.type === "error")?.length ? (w(), T("div", {
        key: 0,
        class: "group issues",
        style: et({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, X(e.item.issues.filter((n) => n.type === "error").flatMap((n) => k(Hi)(n.message)).join(`
`)), 1)
      ], 4)) : Y("", !0),
      e.item.issues?.filter((n) => n.type === "warning")?.length ? (w(), T("div", {
        key: 1,
        class: "group warnings",
        style: et({
          "grid-column-end": "span " + e.numColumns
        })
      }, [
        O("pre", null, X(e.item.issues.filter((n) => n.type === "warning").flatMap((n) => k(Hi)(n.message)).join(`
`)), 1)
      ], 4)) : Y("", !0)
    ], 64));
  }
}), jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: By }, Symbol.toStringTag, { value: "Module" })), ut = {
  precisionFixed: jc,
  format: Bc,
  select: at,
  selectAll: hr,
  scaleLinear: Lt,
  scaleSequential: os,
  axisTop: dr,
  axisBottom: Ws,
  axisRight: fr,
  axisLeft: Hs,
  symbol: _c,
  path: Mc,
  arc: Rc,
  symbolTriangle: Dc,
  symbolSquare: Ec
};
class Vy {
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
  xScale = ut.scaleLinear();
  yScale = ut.scaleLinear();
  yScaleFlipped = ut.scaleLinear();
  measurementScale = ut.scaleLinear();
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
      if (this.el = ut.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = ut.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const e = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (e === null) return;
          this.svgCanvas = e;
        } else
          this.svgCanvas = ut.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, o = e ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (i + n) < 0 || this.h - (o + s) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), e && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${o})`).attr("class", "axis x"), this.xAxis.call(
      ut.axisTop(this.xScale).ticks(10).tickSize(-this.h + (o + s))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(a, r, l) {
      (r === 0 || r === l.length - 1) && ut.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - n}, 0)`).attr("class", "axis y"), this.yAxis.call(
      ut.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + n))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(a, r, l) {
      (r === 0 || r === l.length - 1) && ut.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(e, i) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(i)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const e = this.shouldShowAxes(), i = e ? this.edgePadding : 0, s = e ? this.edgePadding : 0, n = e ? this.axisPadding : 0, o = e ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", i).attr("y", o).attr("width", this.w - (i + n)).attr("height", this.h - (o + s)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", i).attr("y", o).attr("width", this.w - (i + n)).attr("height", this.h - (o + s)).style("fill", "url(#stripes)");
    const a = ut.path(), r = [], l = [];
    [0, 1, 2, 3].forEach((u) => {
      const f = this.shape.machining.getCorner(u);
      f && f.type ? (r.push(f.size ? H({ v: f.size ?? 0, o: this }) : 0), l.push(f.type)) : (r.push(0), l.push(null));
    });
    const c = (u, f, h, g, x) => {
      l[u] === "radius" ? a.arcTo(
        this.xScale(f),
        this.getYScale()(h),
        this.xScale(g),
        this.getYScale()(x),
        this.measurementScale(r[u])
      ) : l[u] === "bevel" ? a.lineTo(this.xScale(g), this.getYScale()(x)) : (a.lineTo(this.xScale(f), this.getYScale()(h)), a.lineTo(this.xScale(g), this.getYScale()(x)));
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
    for (const l of ii)
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
    const r = ut.path();
    [0, 1, 2, 3].forEach((l) => {
      const c = this.shape.machining.getCorner(l);
      if (!c?.type) return;
      let u, f, h;
      switch (l) {
        case 0:
          if (!ke(e.sides.a) || e.sides.a === !1) return;
          u = {
            x: this.xScale(0) - i,
            y: this.getYScale()(H({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(H({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          };
          break;
        case 1:
          if (!ke(e.sides.b) || e.sides.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - H({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? i : -i)
          }, f = {
            x: this.xScale(this.shapeL) - i,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(H({ v: c.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!ke(e.sides.c) || e.sides.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + i,
            y: this.getYScale()(this.shapeW - H({ v: c.size ?? 0, o: this }))
          }, f = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - H({ v: c.size ?? 0, o: this })) - i,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          };
          break;
        case 3:
          if (!ke(e.sides.d) || e.sides.d === !1) return;
          u = {
            x: this.xScale(H({ v: c.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? i : -i)
          }, f = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - i,
            y: this.getYScale()(this.shapeW - H({ v: c.size ?? 0, o: this })) + i
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
        ut.axisRight(n).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (i + s))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(o, a, r) {
        (a === 0 || a === r.length - 1) && ut.select(this).select("line").style("display", "none");
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
const Ny = { id: "machining" }, Gy = { class: "inputs" }, zy = {
  key: 0,
  class: "debug"
}, qy = {
  key: 1,
  class: "shape-name"
}, Wy = { class: "shape-dimensions" }, Hy = {
  key: 2,
  class: "sides-wrapper"
}, Uy = { class: "menu" }, Yy = {
  key: 4,
  class: "button-wrapper"
}, Ky = { class: "grid-table" }, Zy = { class: "row table-heading" }, Xy = {
  key: 0,
  class: "cell id"
}, Jy = {
  key: 0,
  class: "cell"
}, Qy = { class: "id" }, eb = { class: "cell" }, tb = ["onClick"], ib = {
  key: 6,
  class: "menu-prompt"
}, sb = !1, nb = /* @__PURE__ */ Re({
  __name: "Machining",
  props: /* @__PURE__ */ ma({
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
  emits: /* @__PURE__ */ ma(["update:shape", "close"], ["update:inputShape"]),
  setup(t, { emit: e }) {
    const i = Bi(() => Promise.resolve().then(() => sa)), s = t, n = e, o = "production", a = se(), r = J(() => Rl(U.value)), l = J(() => {
      if (!f.value?.length) return 0;
      if (Z.value === "banding") return 1;
      let le = Object.values(u.value).filter((ce) => ce.enabled).length;
      return le += 2, le;
    }), c = J(() => {
      if (!f.value.length || Z.value === "banding") return;
      const le = {
        id: "34px",
        del: "30px"
      }, ce = [];
      return f.value.forEach((Pe) => {
        const Te = u.value[Pe];
        Te.enabled && ce.push(Te.w ?? "1fr");
      }), ce.unshift(le.id), ce.push(le.del), ce.join(" ");
    }), u = J(() => !Z.value || Z.value === "banding" ? null : Bt[Z.value]), f = J(() => !Z.value || Z.value === "banding" ? [] : Object.keys(Bt[Z.value]).filter((le) => Bt[Z.value][le].enabled)), h = J(() => Z.value ? $() : []), g = J(() => {
      const le = U.value?.machining?.corners?.map((ce) => ce?.isPresent?.() ? ce.getCorner() : null)?.filter((ce) => ce) ?? [];
      return [...ii, ...le];
    }), x = (le = !0) => {
      le ? bi.value = le : mt(() => bi.value = !1);
    }, E = () => {
      K(), re(), P(), _();
    }, L = (le) => {
      if (Z.value === "corners")
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
    }, C = () => Z.value !== "banding", A = (le, ce = null) => {
      if (!le?.length) return [];
      let Pe = "None";
      ce === "depth" && (Pe = "Through");
      const Te = [{ label: Pe, value: null }];
      return le.forEach((it) => {
        const ue = it.toString().charAt(0).toUpperCase() + it.toString().slice(1);
        Te.push({ label: ue, value: it });
      }), Te;
    }, $ = () => {
      if (!Z.value) return [];
      if (Z.value === "banding") return [];
      const le = U.value.machining[Z.value];
      return Array.isArray(le) ? le : [le];
    };
    let S = null;
    const V = () => {
      if (!U.value || !a.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", a.value), S = new Vy({
        HTMLElement: a.value,
        shape: U.value,
        vueComponent: null
      }), S.init(), S.updateSize(), yi.value = !0;
    }, R = vc(() => {
      yi.value && S && S.updateSize();
    }, 10);
    rr(a, () => {
      R();
    });
    const F = () => {
      Tt.value = Tt.value === 0 ? 1 : 0, S.flip();
    }, W = () => {
      switch (Z.value) {
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
      U.value.machining.addHole({
        x: H({ v: U.value.longSide }) / 2,
        y: H({ v: U.value.shortSide }) / 2,
        diameter: s.options.holes.defaultDiameter ?? 1,
        depth: s.options.holes.defaultDepth ?? H({ v: U.value.t }) ?? 0,
        face: Tt.value
      }), S.createHoles();
    }, m = () => {
      U.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: Tt.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), S.createHingeHoles();
    }, M = () => {
      const le = s.options.corners.types?.[0] || "radius", ce = s.options.corners.minValue || 5;
      for (let Pe = 0; Pe < 4; Pe++)
        U.value.machining.setCorner({
          index: Pe,
          type: le,
          size: ce
        });
      S.createCorners();
    }, K = () => {
      U.value.machining.holes.length = 0;
    }, re = () => {
      U.value.machining.hingeHoles.length = 0;
    }, P = () => {
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
    }, z = (le) => {
      switch (Z.value) {
        case "holes":
          return U.value.machining.holes.splice(le, 1);
        case "hingeHoles":
          return U.value.machining.hingeHoles.splice(le, 1);
        case "corners":
          U.value.machining.corners[le].size = null, U.value.machining.corners[le].type = null;
          return;
      }
    }, q = () => {
      switch (Z.value) {
        case "holes":
          return K();
        case "hingeHoles":
          return re();
        case "corners":
          return P();
      }
    }, Q = () => {
      if (Ge.value = [], !!s.options.banding.enabled) {
        x();
        for (const le in U.value.banding)
          U.value.banding[le] ? s.options.banding.enableTypes && s.options.banding.types?.length && (U.value.banding[le] || Ge.value.push({
            index: le,
            message: "Please select a type"
          })) : U.value.banding[le] = "";
        x(!1);
      }
    }, ie = (le) => {
      const ce = Ge.value.filter((Pe) => Pe.index === le);
      return ce.length ? ce.map((Pe) => Pe.message) : [];
    }, te = (le) => {
      const ce = Ge.value.filter((Te) => Te.index === le && Te?.fields), Pe = ce.flatMap((Te) => Te.fields);
      return ce.length ? Pe : [];
    }, he = (le, ce) => {
      const Pe = te(le);
      return Pe?.length ? Pe.includes(ce) : !1;
    }, be = () => n("close"), Oe = (le) => le && typeof le.disabled == "function" ? le.disabled : !1, U = bc(t, "inputShape");
    if (!U.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const ct = se(!1), yi = se(!1), bi = se(!1), Tt = se(0), Z = se(null), Ge = se([]), Bt = gt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: G("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: G("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: s.options.holes.diameters?.length ? "select" : "unitDependent",
          label: G("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? A(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof U.value.t < "u" && H({ v: U.value.t }) > 0,
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
              label: G("faces.a"),
              value: 0
            },
            {
              label: G("faces.a"),
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
          label: G("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: G("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: G("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof U.value.t < "u" && H({ v: U.value.t }) > 0,
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
          label: G("machining.diameter"),
          output: s.options.holes.diameters?.length ? "float" : void 0,
          options: s.options.holes.diameters?.length ? A(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: G("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: G("faces.a"),
              value: 0
            },
            {
              label: G("faces.b"),
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
              label: G("sides.w1"),
              value: "x1"
            },
            {
              label: G("sides.w2"),
              value: "x2"
            },
            {
              label: G("sides.l1"),
              value: "y1"
            },
            {
              label: G("sides.l2"),
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
          label: G("machining.type"),
          type: "select",
          output: "string",
          options: A(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: G("machining.size"),
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? H({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? H({ v: s.options.corners.maxValue, o: s.options }) : H({ v: U.value.shortSide, o: s.options }) / 2
        }
      }
    }), At = gt({
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
    }), wt = (le) => {
      le.target === le.currentTarget && be();
    }, Zt = () => !(!U?.value?.machining || !ct.value || bi.value);
    return Be(() => U.value?.autoId, () => {
      Zt() && V();
    }), Be(() => U.value?.id, () => {
      Zt() && V();
    }), Be(Z, (le) => {
      if (!Zt()) return;
      if (le === "banding") {
        x(), Q(), x(!1);
        return;
      }
      if (!le) {
        Ge.value = [];
        return;
      }
      x();
      const ce = U.value.machining.validate(
        U.value,
        le,
        At?.[le]
      );
      Ge.value = ce?.map((Pe, Te) => ({
        index: Te,
        message: Pe.message || "Validation error",
        fields: Pe.field || []
      })) || [], x(!1);
    }, { deep: !0, immediate: !0 }), Be(() => U?.value?.machining?.holes, () => {
      if (!Zt()) return;
      x();
      const le = U.value.machining.validate(
        U.value,
        "holes",
        At?.holes
      );
      Ge.value = le?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], S.createHoles(), x(!1);
    }, { deep: !0, immediate: !0 }), Be(() => U?.value?.machining?.hingeHoles, () => {
      if (!Zt()) return;
      x();
      const le = U.value.machining.validate(
        U.value,
        "hingeHoles",
        At?.hingeHoles
      );
      Ge.value = le?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], S.createHingeHoles(), x(!1);
    }, { deep: !0, immediate: !0 }), Be(() => U?.value?.machining?.corners, () => {
      if (!Zt()) return;
      x();
      const le = U.value.machining.validate(
        U.value,
        "corners",
        At?.corners
      );
      Ge.value = le?.map((ce, Pe) => ({
        index: Pe,
        message: ce.message || "Validation error",
        fields: ce.field || []
      })) || [], U.value.machining.validate(U.value, "holes"), U.value.machining.validate(U.value, "hingeHoles"), S.createShape(), S.createHoles(), S.createHingeHoles();
      for (const ce of U.value.machining.corners)
        U.value.banding && ce?.getCorner && (U.value.banding[ce.getCorner()] = "");
      S.createBanding(), x(!1);
    }, { deep: !0, immediate: !0 }), Be(() => U?.value?.banding, () => {
      Zt() && (Q(), S.createBanding());
    }, { deep: !0, immediate: !0 }), Yt(() => {
      if (document.body.style.overflow = "hidden", !U.value || !U.value.l || !U.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      mt(() => V()), ct.value = !0;
    }), fs(() => document.body.style.overflow = ""), (le, ce) => {
      const Pe = gi("FontAwesomeIcon");
      return w(), ve(Mo, { to: "body" }, [
        O("section", {
          id: "smartcut-machining",
          class: "smartcut-content",
          onClick: wt
        }, [
          O("div", Ny, [
            O("div", Gy, [
              k(o) === "development" && sb ? (w(), T("div", zy, [
                Me(k(i), {
                  data: [U.value.machining],
                  paths: ["shape.machining"]
                }, null, 8, ["data"])
              ])) : Y("", !0),
              O("button", {
                class: "c-btn close",
                type: "button",
                onClick: ce[0] || (ce[0] = (Te) => be())
              }, "×"),
              U.value?.name ? (w(), T("div", qy, X(U.value.name), 1)) : Y("", !0),
              O("div", Wy, X(U.value?.l) + " x " + X(U.value?.w) + " " + X(U.value?.t ? "x " + U.value?.t : null), 1),
              t.options.faces.enabled ? (w(), T("div", Hy, [
                O("div", {
                  ref: "sides",
                  class: Ie(["sides", { flipped: Tt.value === 1 }]),
                  onClick: F
                }, [...ce[6] || (ce[6] = [
                  O("div", { class: "side-a" }, " A ", -1),
                  O("div", { class: "side-b" }, " B ", -1)
                ])], 2),
                ce[7] || (ce[7] = O("div", { class: "text" }, " [Click to flip] ", -1))
              ])) : Y("", !0),
              r.value ? (w(), T("button", {
                key: 3,
                class: "c-btn c-btn--delete",
                type: "button",
                onClick: E
              }, " Delete all machining ")) : Y("", !0),
              O("div", Uy, [
                t.options.holes.enabled ? (w(), T("div", {
                  key: 0,
                  class: Ie({ selected: Z.value === "holes" }),
                  onClick: ce[1] || (ce[1] = (Te) => Z.value = "holes")
                }, " Holes ", 2)) : Y("", !0),
                t.options.hingeHoles.enabled ? (w(), T("div", {
                  key: 1,
                  class: Ie({ selected: Z.value === "hingeHoles" }),
                  onClick: ce[2] || (ce[2] = (Te) => Z.value = "hingeHoles")
                }, " Hinge holes ", 2)) : Y("", !0),
                t.options.corners.enabled ? (w(), T("div", {
                  key: 2,
                  class: Ie({ selected: Z.value === "corners" }),
                  onClick: ce[3] || (ce[3] = (Te) => Z.value = "corners")
                }, " Corners ", 2)) : Y("", !0),
                t.options.banding.enabled ? (w(), T("div", {
                  key: 3,
                  class: Ie({ selected: Z.value === "banding" }),
                  onClick: ce[4] || (ce[4] = (Te) => Z.value = "banding")
                }, " Banding ", 2)) : Y("", !0)
              ]),
              Z.value === "holes" || Z.value === "hingeHoles" || Z.value && Z.value !== "banding" ? (w(), T("div", Yy, [
                Z.value === "holes" || Z.value === "hingeHoles" || Z.value === "corners" ? (w(), T("button", {
                  key: 0,
                  class: "c-btn",
                  type: "button",
                  onClick: W
                }, " Create ")) : Y("", !0),
                Z.value && Z.value !== "banding" ? (w(), T("button", {
                  key: 1,
                  class: "c-btn c-btn--delete",
                  type: "button",
                  onClick: q
                }, " Delete all ")) : Y("", !0)
              ])) : Y("", !0),
              O("div", Ky, [
                Z.value === "banding" && U.value ? (w(), ve(Ns, {
                  key: 0,
                  shape: U.value,
                  "onUpdate:shape": ce[5] || (ce[5] = (Te) => U.value = Te),
                  "extra-type": "banding",
                  "extra-label": "Banding",
                  "extra-keys": g.value,
                  labels: t.options.banding.labels,
                  "all-options": t.options.banding.options,
                  "user-friendly-field-map": k(Ht),
                  "part-columns": 1,
                  "allow-custom-names": !0,
                  "enable-pricing": !0,
                  pricing: t.options.banding.pricing,
                  "get-price": t.getExtrasPrice,
                  "format-price": t.formatPrice,
                  "get-available-pricing-options": t.getAvailablePricingOptions
                }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : Y("", !0)
              ]),
              Z.value !== "banding" && h.value.length ? (w(), T("div", {
                key: 5,
                class: Ie(["grid-table", Z.value]),
                style: et({ "grid-template-columns": c.value })
              }, [
                O("div", Zy, [
                  C() ? (w(), T("div", Xy)) : Y("", !0),
                  (w(!0), T(Ae, null, Ne(u.value, (Te, it) => ds((w(), T("div", {
                    key: it,
                    class: "cell"
                  }, X(Te.label ?? it), 1)), [
                    [un, Te.enabled]
                  ])), 128)),
                  ce[8] || (ce[8] = O("div", { class: "cell" }, null, -1))
                ]),
                (w(!0), T(Ae, null, Ne(h.value, (Te, it) => (w(), T("div", {
                  key: it,
                  class: "row"
                }, [
                  C() ? (w(), T("div", Jy, [
                    O("div", Qy, X(L(it)), 1)
                  ])) : Y("", !0),
                  (w(!0), T(Ae, null, Ne(f.value, (ue, Ye) => (w(), T("div", {
                    key: Ye,
                    class: "cell"
                  }, [
                    Me(Ci, {
                      type: u.value[ue].type,
                      id: ue + "-" + Ye,
                      warning: he(it, ue),
                      "enable-label": !1,
                      placeholder: u.value[ue].label ?? ue,
                      disabled: Oe(u.value[ue]),
                      value: k(di)(Te, ue),
                      output: u.value[ue].output,
                      options: u.value[ue].options,
                      "onUpdate:value": (oi) => k(ts)(Te, ue, oi)
                    }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                  ]))), 128)),
                  O("div", eb, [
                    O("button", {
                      class: "c-btn delete",
                      type: "button",
                      onClick: (ue) => z(it)
                    }, [
                      Me(Pe, { icon: ["fass", "trash"] })
                    ], 8, tb)
                  ]),
                  (w(!0), T(Ae, null, Ne(ie(it), (ue, Ye) => (w(), T("div", {
                    key: Ye,
                    class: "group validation",
                    style: et({ "grid-column-end": "span " + l.value })
                  }, X(ue), 5))), 128))
                ]))), 128))
              ], 6)) : Z.value ? Y("", !0) : (w(), T("div", ib, "Please select from the menu above"))
            ]),
            O("div", {
              id: "machining-diagram",
              class: Ie(["diagram", { flipped: Tt.value === 1 }]),
              ref_key: "diagramRef",
              ref: a
            }, null, 2)
          ])
        ])
      ]);
    };
  }
}), ob = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: nb }, Symbol.toStringTag, { value: "Module" })), ab = {
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
      files: wc([])
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
function rb(t, e, i, s, n, o) {
  return w(), T("div", {
    id: "drop",
    class: Ie({ thinking: i.thinking, [n.dropClass]: !0 }),
    onDrop: e[0] || (e[0] = lr((...a) => o.onDrop && o.onDrop(...a), ["prevent"]))
  }, [
    O("div", null, X(i.thinking ? "Loading, please wait..." : i.label), 1)
  ], 34);
}
const lb = /* @__PURE__ */ Pt(ab, [["render", rb]]), cb = { id: "import-file" }, ub = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = se([]), o = se([]), a = se([]), r = se([]), l = se({}), c = se([]), u = se(!1), f = se(null), h = se(null), g = [
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
    ], x = J(() => {
      const P = {};
      return n.value.forEach((_, z) => {
        P[z] = {};
        for (const [q, Q] of Object.entries(_)) {
          if (!g.includes(q)) continue;
          const ie = C(q, Q);
          (ie === !0 || ie === !1) && (P[z][q] = ie);
        }
      }), P;
    }), E = J(() => i.customFields.map((P) => P.label)), L = (P, _) => {
      if (_) {
        const z = Object.keys(_), q = [[]];
        z.forEach((ie) => {
          const te = _[ie], he = [];
          q.forEach((be) => {
            te.forEach((Oe) => he.push([...be, Oe]));
          }), q.splice(0, q.length, ...he);
        });
        const Q = /* @__PURE__ */ new Set();
        q.forEach((ie) => Q.add(ie.join("|").toLowerCase())), P === "banding" ? f.value = Q : h.value = Q;
      }
    }, C = (P, _) => {
      if (_ === "???") return !0;
      function z(Q) {
        return Q ? (Q = Q?.trim()?.toLowerCase(), Q === "l" || Q === "w") : !0;
      }
      const q = {
        banding: (Q) => A(Q, f.value, "banding"),
        finish: (Q) => A(Q, h.value, "finish"),
        orientationLock: z
      };
      return P in q ? q[P](_) : null;
    }, A = (P, _, z) => {
      if (P = m(P), !P) return !0;
      const q = P.split(","), Q = q.every((ie) => !ie || _.has(ie.toLowerCase()));
      if (!Q) {
        const ie = q.filter((te) => !_.has(te.toLowerCase()));
        console.log(`Valid ${z} choices...`), console.table(Array.from(_)), console.log(`The following ${z} choices are invalid`, ie);
      }
      return Q;
    }, $ = (P, _) => {
      const z = {
        bandingOptions: (q) => S(q, i.bandingOptions, i.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (q) => S(q, i.finishOptions, i.finishLabels, ["a", "b"])
      };
      return P in z ? z[P](_) : null;
    }, S = (P, _, z, q) => {
      if (P = m(P), !P)
        return q.reduce((te, he) => ({ ...te, [he]: {} }), {});
      const Q = P.split(",").map((te) => te.toLowerCase()), ie = {};
      return q.forEach((te, he) => {
        ie[te] = {}, Object.keys(_).forEach((be, Oe) => {
          ie[te][z[Oe]] = Q[he]?.split("|")[Oe] || "";
        });
      }), ie;
    }, V = () => n.value.map((P, _) => ({
      l: i.numberFormat === "decimal" ? _s(P.l) : P.l,
      w: i.numberFormat === "decimal" ? _s(P.w) : P.w,
      t: i.numberFormat === "decimal" ? _s(P.t) : P.t,
      q: P.q,
      orientationLock: P.orientationLock,
      name: P.name,
      material: P.material,
      bandingOptions: x.value[_].banding ? $("bandingOptions", P.banding) : null,
      finishOptions: x.value[_].finish ? $("finishOptions", P.finish) : null,
      numberFormat: i.numberFormat,
      customData: K(P)
    })), R = (P) => {
      const _ = P?.[0]?.data;
      _ && au.parse(_, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (z) => F(z),
        error: () => s("error")
      });
    }, F = (P) => {
      o.value = P.data.filter((_) => _.some((z) => z)), a.value = o.value[0], l.value = {};
      for (let _ = a.value.length; _--; ) {
        const z = a.value[_], q = W(z);
        q ? l.value[_] = q : (l.value[_] = null, E.value.includes(z) && (l.value[_] = "customData." + i.customFields.find((Q) => Q.label === z).id));
      }
      j(), o.value.shift(), M(), re();
    }, W = (P) => {
      const _ = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", G("l"), G("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", G("w"), G("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", G("t"), G("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", G("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", G("quantity"), G("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", G("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", G("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", G("banding")],
        finish: ["finish", "paint"]
      }, z = Object.entries(_).reduce(
        (q, [Q, ie]) => (ie.some((te) => P && P.toLowerCase() === te) && q.push(Q), q),
        []
      );
      return z.length > 1 ? null : z[0];
    }, j = () => {
      u.value = !1, r.value = Object.values(l.value).map((_) => !_ || _ === "N" ? null : g.includes(_) ? _ : (u.value = !0, null));
      const P = r.value.filter((_, z) => r.value.indexOf(_) !== z);
      c.value = P.map((_) => r.value.reduce(
        (z, q, Q) => (q && q === _ && z.push(Q), z),
        []
      ));
    }, m = (P) => P && P.replace(/\s*,\s*/g, ","), M = () => {
      const P = o.value.map((_) => {
        const z = {};
        return a.value.forEach((q, Q) => {
          if (c.value.flat().includes(Q))
            return z[l.value[Q]] = "???";
          z[l.value[Q]] = _[Q];
        }), z;
      });
      n.value = P;
    }, K = (P) => {
      let _ = {};
      for (let z in P)
        if (z.startsWith("customData.")) {
          let q = z.slice(11);
          _[q] = P[z];
        }
      return _;
    }, re = () => {
      const P = V();
      P?.length && s("import", P);
    };
    return Yt(() => {
      L("banding", i.bandingOptions), L("finish", i.finishOptions);
    }), (P, _) => (w(), T("div", cb, [
      Me(lb, {
        label: k(G)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: R
      }, null, 8, ["label"])
    ]));
  }
}), db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ub }, Symbol.toStringTag, { value: "Module" })), fb = {
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
}, hb = { class: "smartcut-object-viewer" }, pb = ["onClick"], gb = { class: "toggle-icon" }, mb = { class: "path-label" }, yb = {
  key: 0,
  class: "object-properties"
}, bb = {
  key: 0,
  class: "key"
}, vb = {
  key: 1,
  class: "null-value"
}, wb = { key: 2 };
function Sb(t, e, i, s, n, o) {
  const a = gi("ObjectViewer", !0);
  return w(), T("div", hb, [
    (w(!0), T(Ae, null, Ne(i.data, (r, l) => (w(), T("div", {
      key: l,
      class: "array-item"
    }, [
      O("div", {
        class: "item-header",
        onClick: (c) => o.toggle(l)
      }, [
        O("div", gb, X(n.expanded[l] ? "▼" : "▶"), 1),
        O("div", mb, X(i.paths[l] || l), 1)
      ], 8, pb),
      n.expanded[l] ? (w(), T("div", yb, [
        (w(!0), T(Ae, null, Ne(r, (c, u) => (w(), T("div", {
          key: u,
          class: "property-item"
        }, [
          !o.isObjectOrArray(c) || c === null || Array.isArray(c) ? (w(), T("div", bb, X(u) + ": ", 1)) : Y("", !0),
          O("div", {
            class: Ie(["value", o.getValueType(c)])
          }, [
            o.isObjectOrArray(c) && c !== null ? (w(), ve(a, {
              key: 0,
              data: Array.isArray(c) ? c : [c],
              paths: o.getArrayPaths(c, u),
              root: !1
            }, null, 8, ["data", "paths"])) : c === null ? (w(), T("span", vb, "null")) : (w(), T("span", wb, X(o.formatValue(c)), 1))
          ], 2)
        ]))), 128))
      ])) : Y("", !0)
    ]))), 128))
  ]);
}
const xb = /* @__PURE__ */ Pt(fb, [["render", Sb]]), sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: xb }, Symbol.toStringTag, { value: "Module" })), kb = { class: "stock-filter-search" }, Ib = { class: "search-input-wrapper" }, Cb = ["placeholder"], Pb = /* @__PURE__ */ Re({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials, colors, tags..." },
    debounce: { default: 300 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = se(i.modelValue);
    let o = null;
    Be(() => i.modelValue, (l) => {
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
    return (l, c) => (w(), T("div", kb, [
      O("div", Ib, [
        ds(O("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (u) => n.value = u),
          type: "text",
          class: "search-input",
          placeholder: t.placeholder,
          onInput: a
        }, null, 40, Cb), [
          [Sc, n.value]
        ]),
        n.value ? (w(), T("button", {
          key: 0,
          type: "button",
          class: "search-clear",
          onClick: r
        }, " × ")) : Y("", !0)
      ])
    ]));
  }
}), Tb = /* @__PURE__ */ Pt(Pb, [["__scopeId", "data-v-45127fff"]]), Ab = { class: "filter-panel-header" }, Ob = { class: "filter-panel-title" }, $b = { class: "filter-panel-content" }, Fb = {
  key: 0,
  class: "filter-summary"
}, Lb = { class: "filter-summary__count" }, Eb = { class: "filter-groups" }, Db = { class: "filter-group__header" }, Rb = { class: "filter-group__label" }, Mb = { class: "filter-group__content" }, _b = {
  key: 0,
  class: "filter-select"
}, Bb = ["checked", "onChange"], jb = ["value", "onChange"], Vb = { value: "" }, Nb = ["value"], Gb = {
  key: 1,
  class: "filter-range"
}, zb = { class: "filter-range__inputs" }, qb = ["value", "min", "max", "step", "onInput"], Wb = ["value", "min", "max", "step", "onInput"], Hb = {
  key: 2,
  class: "filter-boolean"
}, Ub = { class: "filter-checkbox" }, Yb = ["checked", "onChange"], Kb = /* @__PURE__ */ Re({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: e }) {
    const i = t, s = e, n = se(!0), o = se({}), a = J(() => i.activeFilters.length);
    function r() {
      n.value = !n.value;
    }
    function l(A) {
      return {
        material: G("woodwork.material"),
        t: G("woodwork.thickness") + " (mm)",
        cost: G("stockFilter.price"),
        color: G("fields.color"),
        l: G("woodwork.length"),
        w: G("woodwork.width"),
        weight: G("fields.weight"),
        name: G("fields.name"),
        category: G("general.category"),
        leadTime: G("stockFilter.lead_time")
      }[A.field] || A.label;
    }
    function c(A) {
      return A.options?.length ? A.options : i.getUniqueValues(A.field).map((S) => A.field === "color" && typeof S == "object" && S !== null ? "name" in S && S.name ? {
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
    function u(A) {
      return i.activeFilters.find((S) => S.field === A)?.value;
    }
    function f(A, $) {
      const S = u(A);
      return Array.isArray(S) ? A === "color" && typeof $ == "object" && $ !== null && "hex" in $ ? S.some(
        (V) => typeof V == "object" && V !== null && "hex" in V && V.hex === $.hex
      ) : S.includes($) : A === "color" && typeof $ == "object" && $ !== null && "hex" in $ ? typeof S == "object" && S !== null && "hex" in S && S.hex === $.hex : S === $;
    }
    function h(A, $) {
      const V = $.target.value;
      V === "" ? s("remove-filter", A) : s("apply-filter", A, V, "select");
    }
    function g(A, $, S) {
      const V = S.target, R = u(A) || [], F = Array.isArray(R) ? [...R] : [];
      if (V.checked)
        F.includes($) || F.push($);
      else {
        const W = F.indexOf($);
        W !== -1 && F.splice(W, 1);
      }
      F.length === 0 ? s("remove-filter", A) : s("apply-filter", A, F, "multiselect");
    }
    function x(A, $) {
      if (o.value[A]?.[$] !== void 0)
        return o.value[A][$];
      const S = i.activeFilters.find((V) => V.field === A);
      if (S?.value && typeof S.value == "object")
        return S.value[$];
    }
    function E(A, $, S) {
      const V = S.target, R = V.value ? Number(V.value) : void 0;
      o.value[A] || (o.value[A] = {}), o.value[A][$] = R;
      const F = o.value[A].min, W = o.value[A].max;
      F !== void 0 || W !== void 0 ? s("apply-filter", A, { min: F, max: W }, "range") : s("remove-filter", A);
    }
    function L(A, $) {
      $.target.checked ? s("apply-filter", A, !0, "boolean") : s("remove-filter", A);
    }
    function C() {
      o.value = {}, s("clear-filters");
    }
    return (A, $) => (w(), T("div", {
      class: Ie(["stock-filter-panel", { "stock-filter-panel--open": n.value }])
    }, [
      O("div", Ab, [
        O("h3", Ob, X(k(G)("stockFilter.filters")), 1),
        O("button", {
          type: "button",
          class: "filter-panel-toggle",
          onClick: r
        }, X(n.value ? "−" : "+"), 1)
      ]),
      Me(xc, { name: "filter-panel-content" }, {
        default: Pi(() => [
          ds(O("div", $b, [
            a.value > 0 ? (w(), T("div", Fb, [
              O("span", Lb, X(k(G)("stockFilter.active_filters", [a.value])), 1),
              O("button", {
                type: "button",
                class: "filter-summary__clear",
                onClick: C
              }, X(k(G)("stockFilter.clear_all")), 1)
            ])) : Y("", !0),
            O("div", Eb, [
              (w(!0), T(Ae, null, Ne(t.filterConfigs, (S) => (w(), T("div", {
                key: S.field,
                class: "filter-group"
              }, [
                O("div", Db, [
                  O("label", Rb, X(l(S)), 1)
                ]),
                O("div", Mb, [
                  S.type === "select" || S.type === "multiselect" ? (w(), T("div", _b, [
                    S.type === "multiselect" ? (w(!0), T(Ae, { key: 0 }, Ne(c(S), (V) => (w(), T("label", {
                      key: V.value,
                      class: "filter-checkbox"
                    }, [
                      O("input", {
                        checked: f(S.field, V.value),
                        type: "checkbox",
                        onChange: (R) => g(S.field, V.value, R)
                      }, null, 40, Bb),
                      O("span", null, X(V.label), 1)
                    ]))), 128)) : (w(), T("select", {
                      key: 1,
                      value: u(S.field),
                      class: "filter-select-input",
                      onChange: (V) => h(S.field, V)
                    }, [
                      O("option", Vb, X(k(G)("stockFilter.all")), 1),
                      (w(!0), T(Ae, null, Ne(c(S), (V) => (w(), T("option", {
                        key: V.value,
                        value: V.value
                      }, X(V.label), 9, Nb))), 128))
                    ], 40, jb))
                  ])) : S.type === "range" ? (w(), T("div", Gb, [
                    O("div", zb, [
                      O("input", {
                        value: x(S.field, "min"),
                        min: S.min,
                        max: S.max,
                        step: S.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (V) => E(S.field, "min", V)
                      }, null, 40, qb),
                      $[0] || ($[0] = O("span", { class: "filter-range__separator" }, "–", -1)),
                      O("input", {
                        value: x(S.field, "max"),
                        min: S.min,
                        max: S.max,
                        step: S.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (V) => E(S.field, "max", V)
                      }, null, 40, Wb)
                    ])
                  ])) : S.type === "boolean" ? (w(), T("div", Hb, [
                    O("label", Ub, [
                      O("input", {
                        checked: u(S.field) === !0,
                        type: "checkbox",
                        onChange: (V) => L(S.field, V)
                      }, null, 40, Yb),
                      O("span", null, X(S.label), 1)
                    ])
                  ])) : Y("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [un, n.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Zb = /* @__PURE__ */ Pt(Kb, [["__scopeId", "data-v-096696f3"]]), Xb = { class: "stock-filter-sort" }, Jb = { class: "sort-controls" }, Qb = { class: "sort-label" }, ev = ["value"], tv = ["value"], iv = ["title"], sv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, nv = {
  key: 0,
  d: "M8 3l4 5H4z"
}, ov = {
  key: 1,
  d: "M8 13l4-5H4z"
}, av = /* @__PURE__ */ Re({
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
        cost: G("stockFilter.price"),
        material: G("woodwork.material"),
        t: G("woodwork.thickness"),
        l: G("woodwork.length"),
        w: G("woodwork.width"),
        pricePerKg: G("stockFilter.price") + " per kg",
        pricePerM2: G("stockFilter.price") + " per m²",
        weight: G("fields.weight"),
        name: G("fields.name"),
        leadTime: G("stockFilter.lead_time")
      }[l] || l.charAt(0).toUpperCase() + l.slice(1);
    }
    function a(l) {
      const c = l.target;
      s("update:sortBy", c.value);
    }
    function r() {
      s("update:sortOrder", i.sortOrder === "asc" ? "desc" : "asc");
    }
    return (l, c) => (w(), T("div", Xb, [
      O("div", Jb, [
        O("label", Qb, X(k(G)("stockFilter.sort_by")) + ":", 1),
        O("select", {
          value: t.sortBy,
          class: "sort-select",
          onChange: a
        }, [
          (w(!0), T(Ae, null, Ne(k(n), (u) => (w(), T("option", {
            key: u.value,
            value: u.value
          }, X(u.label), 9, tv))), 128))
        ], 40, ev),
        O("button", {
          type: "button",
          class: Ie(["sort-order-btn", { "sort-order-btn--desc": t.sortOrder === "desc" }]),
          title: t.sortOrder === "asc" ? k(G)("options.by_dimensions") : k(G)("options.by_dimensions"),
          onClick: r
        }, [
          (w(), T("svg", sv, [
            t.sortOrder === "asc" ? (w(), T("path", nv)) : (w(), T("path", ov))
          ]))
        ], 10, iv)
      ])
    ]));
  }
}), rv = /* @__PURE__ */ Pt(av, [["__scopeId", "data-v-bb32c593"]]), lv = { class: "stock-filter-results" }, cv = { class: "results-header" }, uv = { class: "results-info" }, dv = { class: "results-count" }, fv = { class: "results-controls" }, hv = { class: "display-mode-toggle" }, pv = ["title"], gv = ["title"], mv = {
  key: 0,
  class: "results-loading"
}, yv = {
  key: 1,
  class: "results-empty"
}, bv = { class: "empty-message" }, vv = {
  key: 3,
  class: "results-pagination"
}, wv = ["disabled"], Sv = { class: "pagination-pages" }, xv = ["onClick"], kv = ["disabled"], Iv = /* @__PURE__ */ Re({
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
    const e = t, i = J(() => {
      const s = [], o = Math.floor(2.5);
      let a = Math.max(1, e.currentPage - o), r = Math.min(e.totalPages, a + 5 - 1);
      r === e.totalPages && (a = Math.max(1, r - 5 + 1));
      for (let l = a; l <= r; l++)
        s.push(l);
      return s;
    });
    return (s, n) => (w(), T("div", lv, [
      O("div", cv, [
        O("div", uv, [
          O("span", dv, X(t.totalResults) + " " + X(t.totalResults === 1 ? k(G)("stockFilter.result_one") : k(G)("stockFilter.result_other")), 1)
        ]),
        O("div", fv, [
          O("div", hv, [
            O("button", {
              type: "button",
              class: Ie(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "grid" }]),
              title: k(G)("stockFilter.grid_view"),
              onClick: n[0] || (n[0] = (o) => s.$emit("update:displayMode", "grid"))
            }, [...n[5] || (n[5] = [
              cr('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-702dc044><rect x="1" y="1" width="6" height="6" data-v-702dc044></rect><rect x="9" y="1" width="6" height="6" data-v-702dc044></rect><rect x="1" y="9" width="6" height="6" data-v-702dc044></rect><rect x="9" y="9" width="6" height="6" data-v-702dc044></rect></svg>', 1)
            ])], 10, pv),
            O("button", {
              type: "button",
              class: Ie(["display-mode-btn", { "display-mode-btn--active": t.displayMode === "list" }]),
              title: k(G)("stockFilter.list_view"),
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
            ])], 10, gv)
          ])
        ])
      ]),
      t.loading ? (w(), T("div", mv, [
        n[7] || (n[7] = O("div", { class: "spinner" }, null, -1)),
        O("p", null, X(k(G)("actions.loading")) + "...", 1)
      ])) : t.totalResults === 0 ? (w(), T("div", yv, [
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
        O("p", bv, X(k(G)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (w(), T("button", {
          key: 0,
          type: "button",
          class: "clear-filters-btn",
          onClick: n[2] || (n[2] = (o) => s.$emit("clear-filters"))
        }, X(k(G)("stockFilter.clear_filters")), 1)) : Y("", !0)
      ])) : (w(), T("div", {
        key: 2,
        class: Ie(["results-grid", { "results-grid--list": t.displayMode === "list" }])
      }, [
        qs(s.$slots, "default", {}, void 0, !0)
      ], 2)),
      t.totalPages > 1 ? (w(), T("div", vv, [
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === 1,
          onClick: n[3] || (n[3] = (o) => s.$emit("go-to-page", t.currentPage - 1))
        }, X(k(G)("pagination.previous")), 9, wv),
        O("div", Sv, [
          (w(!0), T(Ae, null, Ne(i.value, (o) => (w(), T("button", {
            key: o,
            type: "button",
            class: Ie(["pagination-page", { "pagination-page--active": o === t.currentPage }]),
            onClick: (a) => s.$emit("go-to-page", o)
          }, X(o), 11, xv))), 128))
        ]),
        O("button", {
          type: "button",
          class: "pagination-btn",
          disabled: t.currentPage === t.totalPages,
          onClick: n[4] || (n[4] = (o) => s.$emit("go-to-page", t.currentPage + 1))
        }, X(k(G)("pagination.next")), 9, kv)
      ])) : Y("", !0)
    ]));
  }
}), Cv = /* @__PURE__ */ Pt(Iv, [["__scopeId", "data-v-702dc044"]]), Pv = {
  key: 0,
  class: "stock-filter-card__image"
}, Tv = ["src", "alt"], Av = { class: "stock-filter-card__content" }, Ov = { class: "stock-filter-card__title" }, $v = { class: "stock-filter-card__specs" }, Fv = { class: "spec" }, Lv = { class: "spec__label" }, Ev = { class: "spec__value" }, Dv = { class: "spec" }, Rv = { class: "spec__label" }, Mv = { class: "spec__value" }, _v = {
  key: 0,
  class: "spec"
}, Bv = { class: "spec__label" }, jv = { class: "spec__value spec__value--color" }, Vv = {
  key: 1,
  class: "spec"
}, Nv = { class: "spec__label" }, Gv = { class: "spec__value" }, zv = {
  key: 0,
  class: "stock-filter-card__description"
}, qv = { class: "stock-filter-card__footer" }, Wv = {
  key: 0,
  class: "stock-filter-card__price"
}, Hv = { class: "price__label" }, Uv = { class: "price__value" }, Yv = ["disabled"], Kv = {
  key: 1,
  class: "stock-filter-card__lead-time"
}, Zv = /* @__PURE__ */ Re({
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
    const i = t, s = e, n = J(() => i.stock.cost ? i.formatPrice(i.stock.cost, i.locale) : "N/A"), o = J(() => i.stock.color ? typeof i.stock.color == "object" && "hex" in i.stock.color ? i.stock.color.hex : typeof i.stock.color == "string" ? i.stock.color : "" : ""), a = J(() => i.stock.color ? typeof i.stock.color == "object" && "name" in i.stock.color ? i.stock.color.name : typeof i.stock.color == "string" ? i.stock.color : "" : ""), r = J(() => ({
      "--btn-color": i.buttonTextColor,
      "--btn-bg": i.buttonColor,
      "--btn-hover-bg": l(i.buttonColor, -8)
    }));
    function l(u, f) {
      const h = u.replace("#", ""), g = parseInt(h, 16), x = Math.round(2.55 * f), E = (g >> 16) + x, L = (g >> 8 & 255) + x, C = (g & 255) + x;
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
      t.stock.imageUrl ? (w(), T("div", Pv, [
        O("img", {
          src: t.stock.imageUrl,
          alt: t.stock.name || t.stock.name || t.stock.material,
          loading: "lazy"
        }, null, 8, Tv)
      ])) : Y("", !0),
      O("div", Av, [
        O("h3", Ov, X(t.stock.name || t.stock.name || `${t.stock.material} ${t.stock.l}×${t.stock.w}`), 1),
        O("div", $v, [
          O("div", Fv, [
            O("span", Lv, X(k(G)("woodwork.material")) + ":", 1),
            O("span", Ev, X(t.stock.material || k(G)("general.na")), 1)
          ]),
          O("div", Dv, [
            O("span", Rv, X(k(G)("stockFilter.dimensions")) + ":", 1),
            O("span", Mv, X(t.stock.l) + " × " + X(t.stock.w) + X(t.stock.t ? ` × ${t.stock.t}mm` : ""), 1)
          ]),
          t.stock.color ? (w(), T("div", _v, [
            O("span", Bv, X(k(G)("fields.color")) + ":", 1),
            O("span", jv, [
              O("span", {
                class: "color-swatch",
                style: et({ backgroundColor: o.value })
              }, null, 4),
              ns(" " + X(a.value), 1)
            ])
          ])) : Y("", !0),
          t.stock.weight ? (w(), T("div", Vv, [
            O("span", Nv, X(k(G)("fields.weight")) + ":", 1),
            O("span", Gv, X(t.stock.weight) + " kg", 1)
          ])) : Y("", !0)
        ]),
        t.stock.description ? (w(), T("div", zv, X(t.stock.description), 1)) : Y("", !0),
        O("div", qv, [
          t.stock.cost ? (w(), T("div", Wv, [
            O("span", Hv, X(k(G)("stockFilter.price")) + ":", 1),
            O("span", Uv, X(n.value), 1)
          ])) : Y("", !0),
          O("button", {
            type: "button",
            class: Ie(["stock-filter-card__btn", { "stock-filter-card__btn--selected": t.isSelected }]),
            style: et(r.value),
            disabled: !t.stock.available,
            onClick: c
          }, X(t.isSelected ? k(G)("stockFilter.remove") : t.stock.available ? k(G)("stockFilter.select") : k(G)("stockFilter.unavailable")), 15, Yv)
        ]),
        t.stock.leadTime ? (w(), T("div", Kv, X(k(G)("stockFilter.lead_time_days", [t.stock.leadTime])), 1)) : Y("", !0)
      ])
    ], 2));
  }
}), Xv = /* @__PURE__ */ Pt(Zv, [["__scopeId", "data-v-1ce32550"]]), Jv = { class: "stock-filter" }, Qv = /* @__PURE__ */ Re({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => _y()
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
    const s = t, n = i, o = se(s.stockOptions), a = se(s.config), r = se(s.numberFormat), {
      activeFilters: l,
      searchQuery: c,
      sortBy: u,
      sortOrder: f,
      displayMode: h,
      currentPage: g,
      filteredStock: x,
      paginatedStock: E,
      selectedStock: L,
      totalPages: C,
      applyFilter: A,
      removeFilter: $,
      clearFilters: S,
      goToPage: V,
      toggleStockSelection: R,
      isStockSelected: F,
      clearSelection: W,
      createInputStock: j,
      getUniqueValues: m,
      getFieldRange: M
    } = Lc({
      stockOptions: o,
      config: a,
      numberFormat: r
    }), K = J(() => s.config.availableFilters.filter((_) => {
      const z = m(_.field);
      return z.length > 0 && z.some((q) => q != null);
    }));
    J(() => ({
      "--btn-color": s.colors.buttonText,
      "--btn-bg": s.colors.button,
      "--btn-hover-bg": re(s.colors.button, -8)
    }));
    function re(_, z) {
      const q = _.replace("#", ""), Q = parseInt(q, 16), ie = Math.round(2.55 * z), te = (Q >> 16) + ie, he = (Q >> 8 & 255) + ie, be = (Q & 255) + ie;
      return `#${(16777216 + (te < 255 ? te < 1 ? 0 : te : 255) * 65536 + (he < 255 ? he < 1 ? 0 : he : 255) * 256 + (be < 255 ? be < 1 ? 0 : be : 255)).toString(16).slice(1)}`;
    }
    function P(_) {
      const z = F(_);
      if (R(_), z) {
        const q = j(_);
        n("stock-removed", q);
      } else {
        const q = j(_);
        n("stock-added", [q]);
      }
    }
    return e({
      applyFilter: A,
      removeFilter: $,
      clearFilters: S,
      clearSelection: W,
      selectedStock: L,
      filteredStock: x,
      getUniqueValues: m,
      getFieldRange: M
    }), (_, z) => (w(), T("div", Jv, [
      t.config.enableSearch ? (w(), ve(Tb, {
        key: 0,
        modelValue: k(c),
        "onUpdate:modelValue": z[0] || (z[0] = (q) => Rn(c) ? c.value = q : null)
      }, null, 8, ["modelValue"])) : Y("", !0),
      K.value.length > 0 ? (w(), ve(Zb, {
        key: 1,
        "filter-configs": K.value,
        "active-filters": k(l),
        "get-unique-values": k(m),
        "get-field-range": k(M),
        onApplyFilter: k(A),
        onRemoveFilter: k($),
        onClearFilters: k(S)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : Y("", !0),
      t.config.sortOptions.length > 0 ? (w(), ve(rv, {
        key: 2,
        "sort-by": k(u),
        "onUpdate:sortBy": z[1] || (z[1] = (q) => Rn(u) ? u.value = q : null),
        "sort-order": k(f),
        "onUpdate:sortOrder": z[2] || (z[2] = (q) => Rn(f) ? f.value = q : null),
        "available-fields": t.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : Y("", !0),
      Me(Cv, {
        "total-results": k(E).length,
        "display-mode": k(h),
        loading: t.loading,
        "has-active-filters": k(l).length > 0,
        "current-page": k(g),
        "total-pages": k(C),
        "onUpdate:displayMode": z[3] || (z[3] = (q) => h.value = q),
        onClearFilters: k(S),
        onGoToPage: k(V)
      }, {
        default: Pi(() => [
          (w(!0), T(Ae, null, Ne(k(E), (q) => (w(), ve(Xv, {
            key: q.id || `${q.material}-${q.l}-${q.w}-${q.t}`,
            stock: q,
            "is-selected": k(F)(q),
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
}), ew = /* @__PURE__ */ Pt(Qv, [["__scopeId", "data-v-7b1c1d8d"]]), IS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ew }, Symbol.toStringTag, { value: "Module" }));
class ui extends Error {
  constructor(e, i) {
    super(e), this.code = i, this.name = "FormulaError";
  }
}
class or {
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
      if (i === 0) throw new ui("Division by zero", "DIVISION_BY_ZERO");
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
      const h = e.edges.get(l) || /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (const E of h)
        if (E.startsWith("input.")) {
          const L = E.split(".")[1];
          g.set(E, s[L]);
        } else
          g.set(E, r(E));
      const x = this.evaluateFormulaWithDeps(f.formula, g, s);
      return o.set(l, x), a.delete(l), x;
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
    if (!this.spec?.inputs) throw new ui("No input specifications defined", "NO_INPUTS");
    for (const [i, s] of Object.entries(this.spec.inputs)) {
      const n = e[i];
      if (n === void 0)
        throw new ui(`Missing required input: ${i}`, "MISSING_INPUT");
      if (n < s.min || n > s.max)
        throw new ui(`Input ${i} value ${n} out of range [min: ${s.min}, max: ${s.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new ui("No input specifications defined", "NO_INPUTS");
    const i = Object.keys(this.spec.inputs);
    if (e.length !== i.length)
      throw new ui(`Expected ${i.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const n of e) {
      const o = i[s], a = this.spec.inputs[o];
      if (n.value === null || n.value === void 0)
        throw new ui(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < a.min || n.value > a.max)
        throw new ui(`Field ${s} value ${n.value} out of range [min: ${a.min}, max: ${a.max}]`, "FIELD_OUT_OF_RANGE");
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
const tw = {
  key: 0,
  class: "debug"
}, iw = { id: "formula-pricing" }, sw = {
  key: 1,
  class: "extras"
}, nw = { class: "heading" }, ow = { id: "hardware-total" }, aw = { class: "heading panels" }, rw = !1, lw = /* @__PURE__ */ Re({
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
    const i = Bi(() => Promise.resolve().then(() => sa)), s = t, n = e, o = kc("calculator"), a = J(() => o()), r = se("production");
    let l = null;
    const c = se(null), u = se([]), f = se(!1), h = se(""), g = J(() => {
      if (!f.value || !u.value.length || u.value.every((F) => F.value === null)) return null;
      const R = $();
      return mt(() => n("panel-result", R)), R;
    }), x = J(() => {
      if (!a.value || !f.value || !u.value.length || u.value.every((F) => F.value === null)) return;
      const R = S();
      return mt(() => n("hardware-result", R, E.value)), R;
    }), E = J(() => {
      if (x.value)
        return Object.values(x.value).reduce((R, F) => R + F.totalCost, 0);
    });
    Be(g, (R) => {
      if (!f.value || !R || !a.value || !a.value?.inputShapes) return;
      const F = (m) => m?.name ? m.name.toLowerCase() : "", W = new Map(
        a.value.inputShapes.map((m) => [F(m), m])
      ), j = /* @__PURE__ */ new Set();
      for (const m of Object.values(g.value)) {
        if (!m.name) continue;
        const M = F(m), K = W.get(M), re = {
          ...m,
          name: m.name.toUpperCase() || K?.name.toUpperCase(),
          material: m.material?.toUpperCase() || K?.material?.toUpperCase(),
          bandingOptions: m.bandingOptions || {},
          finishOptions: m.finishOptions || {},
          orientationLock: m.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, P = K || a.value.createInputShape(re);
        if (K) {
          Object.assign(K, re);
          for (const _ of ["banding", "finish"])
            a.value.initExtrasOptions(K, _);
        } else
          a.value.inputShapes.push(P);
        j.add(M);
      }
      a.value.inputShapes = a.value.inputShapes.filter(
        (m) => j.has(F(m))
      );
    }, { immediate: !1 }), Yt(() => V());
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
    }, S = () => {
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
      s.url ? (L(`SmartCut - Formula calculator init from url: ${s.url}`), l = new or({ url: s.url }), c.value = await l.getSpec()) : s.spec && (L("SmartCut - Formula calculator init with JSON"), l = new or({ spec: s.spec }), c.value = await l.getSpec()), C(), f.value = !0;
    };
    return (R, F) => (w(), T(Ae, null, [
      r.value === "development" && rw ? (w(), T("div", tw, [
        F[1] || (F[1] = O("div", null, "Developer information", -1)),
        Me(k(i), {
          data: [g.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : Y("", !0),
      O("div", iw, [
        c.value?.projectName ? (w(), ve(Ci, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: h.value,
          "onUpdate:value": F[0] || (F[0] = (W) => h.value = W)
        }, null, 8, ["value"])) : Y("", !0),
        (w(!0), T(Ae, null, Ne(c.value?.inputs, (W, j, m) => (w(), ve(Ci, {
          id: "formula-field-" + m,
          key: m,
          type: W.type,
          label: W.label,
          placeholder: W.label,
          min: W.min ?? 0,
          max: W.max ?? null,
          default: W.default ?? 0,
          value: u.value[m]?.value,
          "onUpdate:value": (M) => A(m, M)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        x.value ? (w(), T("div", sw, [
          O("div", nw, X(k(G)("Hardware")), 1),
          (w(!0), T(Ae, null, Ne(x.value, (W, j) => (w(), T("div", { key: j }, X(W.name) + " x" + X(W.q) + " = " + X(t.formatPrice(W.totalCost)), 1))), 128)),
          O("div", ow, X(k(G)("Hardware total")) + " = " + X(t.formatPrice(E.value)), 1)
        ])) : Y("", !0),
        O("div", aw, X(k(G)("Panels")), 1)
      ])
    ], 64));
  }
}), CS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: lw }, Symbol.toStringTag, { value: "Module" })), cw = {
  id: "smartcut-notices",
  class: "smartcut-content"
}, uw = { class: "content" }, dw = ["onClick"], fw = ["innerHTML"], hw = /* @__PURE__ */ Re({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(t) {
    const e = t, { notices: i, dismissNotice: s } = Bo(), n = se({}), o = J(() => e.position.includes("right") ? "notice-right" : "notice-left");
    return (a, r) => {
      const l = gi("FontAwesomeIcon");
      return w(), ve(Mo, { to: "body" }, [
        O("div", cw, [
          Me(Ic, {
            name: o.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ie(["notices-container", e.position])
          }, {
            default: Pi(() => [
              (w(!0), T(Ae, null, Ne(k(i), (c) => (w(), T("div", {
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
                O("div", uw, [
                  O("div", {
                    class: "message",
                    onClick: (u) => c.action()
                  }, X(c.message), 9, dw),
                  O("div", {
                    class: "additional-info",
                    innerHTML: c.additional
                  }, null, 8, fw)
                ]),
                c.persistent ? Y("", !0) : (w(), ve(l, {
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
}), PS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: hw }, Symbol.toStringTag, { value: "Module" }));
export {
  ae as $,
  $w as A,
  en as B,
  qo as C,
  ne as D,
  Ph as E,
  Ii as F,
  Zw as G,
  as as H,
  nl as I,
  Fh as J,
  Xw as K,
  Tu as L,
  Hi as M,
  Ce as N,
  wf as O,
  eo as P,
  H as Q,
  Bw as R,
  sl as S,
  Ue as T,
  vr as U,
  xt as V,
  nt as W,
  lp as X,
  rf as Y,
  xw as Z,
  Qt as _,
  nn as a,
  He as a$,
  Ni as a0,
  Wt as a1,
  Mw as a2,
  ei as a3,
  Jw as a4,
  Ow as a5,
  Je as a6,
  ef as a7,
  _w as a8,
  Dt as a9,
  Hw as aA,
  aS as aB,
  wr as aC,
  rp as aD,
  rS as aE,
  ep as aF,
  oS as aG,
  vn as aH,
  pl as aI,
  ke as aJ,
  _r as aK,
  Qh as aL,
  Sr as aM,
  Ea as aN,
  sS as aO,
  nS as aP,
  Fw as aQ,
  pp as aR,
  gp as aS,
  tt as aT,
  ni as aU,
  fp as aV,
  bl as aW,
  lS as aX,
  bo as aY,
  fl as aZ,
  Kw as a_,
  Gu as aa,
  Cd as ab,
  iS as ac,
  Xd as ad,
  Nw as ae,
  Rw as af,
  mn as ag,
  Yi as ah,
  jw as ai,
  qw as aj,
  It as ak,
  Vw as al,
  lu as am,
  du as an,
  mu as ao,
  Iw as ap,
  kw as aq,
  tS as ar,
  eS as as,
  hs as at,
  br as au,
  rt as av,
  ad as aw,
  bt as ax,
  Uw as ay,
  Si as az,
  bn as b,
  cS as b0,
  uS as b1,
  oe as b2,
  Ew as b3,
  Dw as b4,
  ft as b5,
  Gw as b6,
  zw as b7,
  Yw as b8,
  Ww as b9,
  dS as bA,
  sa as bB,
  IS as bC,
  CS as bD,
  PS as bE,
  sf as ba,
  Pw as bb,
  Et as bc,
  qi as bd,
  qe as be,
  yt as bf,
  sn as bg,
  qt as bh,
  Lw as bi,
  ah as bj,
  cl as bk,
  Wo as bl,
  fi as bm,
  gn as bn,
  Tw as bo,
  _y as bp,
  kS as bq,
  di as br,
  fS as bs,
  wa as bt,
  ii as bu,
  dt as bv,
  Cw as bw,
  xu as bx,
  Sa as by,
  Pt as bz,
  Ro as c,
  ja as d,
  kl as e,
  Il as f,
  Vu as g,
  mS as h,
  pS as i,
  gS as j,
  vi as k,
  In as l,
  eg as m,
  bS as n,
  xS as o,
  SS as p,
  wS as q,
  Qw as r,
  Ut as s,
  G as t,
  Aw as u,
  vS as v,
  tg as w,
  yS as x,
  hS as y,
  Sw as z
};
