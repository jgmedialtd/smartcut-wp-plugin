import { h as W, z as m, i as I, D as J, j as X, k as Y, m as Z, C as f, E as i, n as ee, o as h, p as s, q as te, L as S, P as y, R as E, G as x, s as C, u as w, O as T, w as b, x as P, B as v, y as z, A as k, F as M, H as B, J as $, K as A, M as R, N as O, Q as F, T as N, I as G, U as D, V as H, W as L, X as j } from "./NestingShape-JAVnw-aP.js";
import { j as l, n as o, k as d, o as K, l as U, h as u, q as g } from "./vendor-CIXsT6Bd.js";
import { P as _ } from "./PointCollection-BWf2NSit.js";
import { i as se } from "./environment-BCYVY3oS.js";
const Q = ["root", "firstShape", "near", "far", ""], ae = W.extend({
  // Cutting information
  cuts: I("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: m("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: o().int().min(0).nullable().default(null),
  cutDirection: d(J).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: l().default(!1),
  firstShape: m("Shape"),
  children: I("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: m("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: d(Q).nullable().default(null),
  placementOrder: o().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: l().default(!1),
  hasHeadCut: l().default(!1),
  isInitial: l().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: l().default(!1),
  // Visualization flags
  completed: l().optional(),
  rowSegment: l().optional()
});
K({
  x: o().optional(),
  y: o().optional(),
  l: o().optional(),
  w: o().optional(),
  type: d(Q),
  parent: U(),
  // Segment instance
  stock: U(),
  // Stock instance
  offcut: l().optional(),
  merged: l().optional(),
  cutDirection: d(J).nullable().optional()
});
const ie = {
  ...X,
  // Include parent computed properties
  root: {
    compute: (r) => {
      let t = r;
      for (; t.parent; )
        t = t.parent;
      return t;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "any"
    }
  },
  depth: {
    compute: (r) => {
      let t = 0, e = r.parent;
      for (; e; )
        t++, e = e.parent;
      return t;
    },
    metadata: {
      cache: !1,
      // Don't cache as parent relationships can change
      dependencies: [],
      returnType: "number"
    }
  }
}, ne = K({
  id: u().optional(),
  url: u().optional(),
  size: o().optional(),
  mimeType: u().optional(),
  name: u().optional(),
  width: o().optional(),
  height: o().optional()
}), re = Y.extend({
  // ImageUpload specific properties
  images: g(ne).default([]).describe("Array of uploaded images"),
  maxImages: o().default(5).describe("Maximum number of images allowed"),
  allowedTypes: g(u()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: o().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: u().optional().describe("Description of uploaded images"),
  tags: g(u()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), oe = {
  // Inherit computed properties from Extra base class
  ...Z,
  // Check if any images are uploaded
  hasAnyImages: {
    compute: (r) => r.faces ? Object.keys(r.faces).some((t) => {
      const e = r.faces[t];
      return e !== void 0 && e !== !1 && e !== "";
    }) : !1,
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "boolean"
    }
  },
  // Get all faces with images
  activeFaces: {
    compute: (r) => r.faces ? Object.keys(r.faces).filter((t) => {
      const e = r.faces[t];
      return e !== void 0 && e !== !1 && e !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
};
class V extends f {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ae;
  static computedProperties = ie;
  // Note: children is defined in the schema as zRefArray<Segment>
  // No need for getter/setter or backing field - SchemaClass handles it automatically
  constructor(t = {}) {
    const e = { ...t };
    if (e.preventAutoRotation = !0, e.skipValidation = !0, e.fastConstruct === void 0 && (e.fastConstruct = !0), e.parent && e.autoId && e.parent.autoId === e.autoId && delete e.autoId, e.children || (e.children = []), Array.isArray(e.children) && e.autoId && (e.children = e.children.filter(
      (a) => a && a.autoId !== e.autoId
    )), super(e), this.parent && this.autoId === this.parent.autoId)
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
    return i.Segment;
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
  reset(t = []) {
    if (this.stock && (this.stock.used = !1), this.children && this.children.length > 0)
      for (const e of this.children)
        e && e.parent === this && (e.parent = null);
    this.shapes = t, this.children = [], this.parent = null, this.cuts = [], this.phase = null;
  }
  /**
   * Clear all children and their parent references
   */
  clearChildren() {
    if (this.children && this.children.length > 0) {
      for (const t of this.children)
        t && t.parent === this && (t.parent = null);
      this.children = [];
    }
  }
  /**
   * Add segment to stock (when used as an offcut)
   * Similar to Placeable.addToStock but for segments
   */
  addToStock(t) {
    this.stock = t;
  }
  /**
   * Check if this segment is a descendant of another segment
   */
  isDescendantOf(t) {
    let e = this.parent;
    const a = /* @__PURE__ */ new Set();
    for (; e; ) {
      if (e.autoId === t.autoId)
        return !0;
      if (a.has(e.autoId))
        return console.warn(`[INFINITE LOOP] Parent chain has a loop at segment ${e.autoId}`), !1;
      a.add(e.autoId), e = e.parent;
    }
    return !1;
  }
  /**
   * Add child segment (mainly for changing parents after creation)
   * Note: Most parent-child relationships are now established automatically in the constructor
   */
  addChild(t) {
    if (this.autoId === t.autoId)
      throw console.error(`[SELF-REFERENCE ATTEMPT] Trying to add segment ${this.autoId} as its own child!`), console.error(new Error().stack), new Error(`[SELF-REFERENCE] Cannot add segment ${this.autoId} as its own child`);
    if (this === t)
      throw console.error(`[SELF-REFERENCE OBJECT] Same object reference! Segment ${this.autoId}`), console.error(new Error().stack), new Error("[SELF-REFERENCE] Cannot add segment to itself");
    if (!(t.parent && t.parent.autoId === this.autoId)) {
      if (this.isDescendantOf(t))
        throw new Error(`Circular reference: parent ${this.autoId} would become a descendant of child ${t.autoId}`);
      if (Array.isArray(this.children) || (this.children = []), t.parent && t.parent !== this) {
        const e = t.parent;
        if (Array.isArray(e.children)) {
          const a = e.children.indexOf(t);
          a !== -1 && e.children.splice(a, 1);
        }
        se() && console.log(`[PARENT CHANGE] Moving ${t.autoId} from parent ${e.autoId} to ${this.autoId}`);
      }
      this.children.some((e) => e.autoId === t.autoId) || (this.children = [...this.children, t], t.parent = this);
    }
  }
  /**
   * Remove child segment
   */
  removeChild(t) {
    const e = this.children;
    if (Array.isArray(e)) {
      const a = e.indexOf(t);
      a !== -1 && (e.splice(a, 1), t.parent = null);
    }
  }
}
class q extends ee {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = re;
  static computedProperties = oe;
  /**
   * Get entity type
   */
  getType() {
    return "imageUpload";
  }
  constructor(t = {}) {
    super(t), this.validate();
  }
  /**
   * Validate image upload configuration
   */
  validate(t) {
    const e = [];
    if (this.images && this.images.length > this.maxImages && e.push(new h({
      item: t,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let a = 0; a < this.images.length; a++) {
        const n = this.images[a];
        if (n.url || e.push(new h({
          message: `Image ${a + 1} is missing URL`,
          type: "error"
        })), n.mimeType && !this.allowedTypes.includes(n.mimeType) && e.push(new h({
          message: `Image ${a + 1} has unsupported type: ${n.mimeType}`,
          type: "warning"
        })), n.size && n.size > this.maxSizeBytes) {
          const c = (n.size / 1048576).toFixed(2), p = (this.maxSizeBytes / 1048576).toFixed(2);
          e.push(new h({
            message: `Image ${a + 1} is too large: ${c}MB exceeds ${p}MB`,
            type: "warning"
          }));
        }
      }
    return this.issues = e, e;
  }
  /**
   * Calculate storage cost
   */
  getCost(t) {
    const a = (this.images || []).reduce((c, p) => c + (p.size || 0), 0) / 1048576;
    return Math.ceil(a * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const t = this.images ? this.images.length : 0, a = ((this.images || []).reduce((n, c) => n + (c.size || 0), 0) / 1048576).toFixed(2);
    return `${t} image${t !== 1 ? "s" : ""} (${a}MB)`;
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
  isApplicable(t) {
    return this.enabled;
  }
  /**
   * Clone
   */
  // clone() method removed - using base class implementation from AutoSerializable
  /**
   * Add an image
   */
  addImage(t) {
    return this.images || (this.images = []), this.images.length >= (this.maxImages || 5) ? !1 : (this.images.push(t), !0);
  }
  /**
   * Remove an image by URL
   */
  removeImage(t) {
    if (!this.images) return !1;
    const e = this.images.findIndex((a) => a.url === t);
    return e !== -1 ? (this.images.splice(e, 1), !0) : !1;
  }
  /**
   * Get image by URL
   */
  getImage(t) {
    return this.images ? this.images.find((e) => e.url === t) : void 0;
  }
  /**
   * Get total size in bytes
   */
  getTotalSize() {
    return this.images.reduce((t, e) => t + (e.size || 0), 0);
  }
  /**
   * Get images by tag
   */
  getImagesByTag(t) {
    return this.tags && this.tags.includes(t) ? this.images || [] : [];
  }
  /**
   * Add a tag
   */
  addTag(t) {
    this.tags || (this.tags = []), this.tags.includes(t) || this.tags.push(t);
  }
  /**
   * Remove a tag
   */
  removeTag(t) {
    if (!this.tags) return;
    const e = this.tags.indexOf(t);
    e !== -1 && this.tags.splice(e, 1);
  }
}
function de() {
  s("Issue", h), s("Line", S), s(i.Line, S), s("Point", y), s(i.Point, y), s("Rectangle", E), s(i.Rectangle, E), s("Container", f), s(i.Container, f), s("GuillotineState", x), s(i.GuillotineState, x), s("Placeable", C), s(i.Placeable, C), s("Group", w), s(i.Group, w), s("Offcut", T), s(i.Offcut, T), s("Segment", V), s(i.Segment, V), s("Shape", b), s(i.Shape, b), s("Stock", P), s(i.Stock, P), s("Banding", v), s("banding", v), s("Corner", z), s("corner", z), s("Cut", k), s(i.Cut, k), s("Extras", M), s(i.Extras, M), s("Finish", B), s("finish", B), s("Groove", $), s("groove", $), s("HingeHole", A), s("hingeHole", A), s("Hole", R), s("hole", R), s("ImageUpload", q), s("imageUpload", q), s("InputSaw", O), s(i.InputSaw, O), s("InputShape", F), s(i.InputShape, F), s("InputStock", N), s(i.InputStock, N), s("InputUserGroup", G), s(i.InputUserGroup, G), s("Machining", D), s(i.Machining, D), s("NestingShape", H), s(i.NestingShape, H), s("Planing", L), s("planing", L), s("PointCollection", _), s(i.PointCollection, _), s("Saw", j), s(i.Saw, j), te();
}
export {
  de as initializeStaticRegistry
};
