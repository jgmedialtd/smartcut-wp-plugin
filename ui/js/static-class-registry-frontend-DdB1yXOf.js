import { m as te, z as y, n as w, D as Q, o as ie, p as ne, q as se, w as ae, x as re, C as I, E as r, y as oe, A as m, B as S, F as C, G as le, H as i, L as E, P as O, R as T, J as R, K as A, N as z, O as v, Q as B, T as M, U as k, V as $, W as N, X as F, Y as G, Z as H, _ as D, $ as L, a0 as j, I as U, a1 as Y, a2 as X, a3 as _ } from "./InputUserGroup-BS7MVA1o.js";
import { j as d, n as u, k as g, o as b, l as q, h as p, q as f } from "./vendor-C76etQCp.js";
import { P as J } from "./PointCollection-C6s8auHZ.js";
import { i as ue } from "./environment-BeBZzWz6.js";
const Z = ["root", "firstShape", "near", "far", ""], ce = te.extend({
  // Cutting information
  cuts: w("Cut").default([]).behavior({ compress: "exclude" }),
  // Stock reference - serialize as reference only (default zRef behavior)
  stock: y("Stock", { nullable: !0, description: "Stock reference for this segment" }),
  phase: u().int().min(0).nullable().default(null),
  cutDirection: g(Q).nullable().default(null).describe("The primary cut direction for this segment"),
  // Segment properties
  merged: d().default(!1),
  firstShape: y("Shape"),
  children: w("Segment", {
    description: "Child segments"
  }).behavior({
    serialize: "full",
    // Serialize the full segment objects
    compress: "full",
    // Even in compressed mode, keep full objects
    clone: "copy"
  }),
  parent: y("Segment", { nullable: !0 }).behavior({
    serialize: "reference",
    // Parent can stay as reference
    compress: "exclude"
    // Exclude parent in compressed mode to avoid circular refs
  }),
  type: g(Z).nullable().default(null),
  placementOrder: u().int().min(0).optional(),
  // Beam saw specific
  hasBeamTrim: d().default(!1),
  hasHeadCut: d().default(!1),
  isInitial: d().default(!1),
  // Trim offcut flag - marks segments that represent trim areas (W1, W2, L1 for beam)
  isTrimOffcut: d().default(!1),
  // Visualization flags
  completed: d().optional(),
  rowSegment: d().optional()
});
b({
  x: u().optional(),
  y: u().optional(),
  l: u().optional(),
  w: u().optional(),
  type: g(Z),
  parent: q(),
  // Segment instance
  stock: q(),
  // Stock instance
  offcut: d().optional(),
  merged: d().optional(),
  cutDirection: g(Q).nullable().optional()
});
const he = {
  ...ie,
  // Include parent computed properties
  root: {
    compute: (o) => {
      let t = o;
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
    compute: (o) => {
      let t = 0, e = o.parent;
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
}, de = b({
  id: p().optional(),
  url: p().optional(),
  size: u().optional(),
  mimeType: p().optional(),
  name: p().optional(),
  width: u().optional(),
  height: u().optional()
}), pe = ne.extend({
  // ImageUpload specific properties
  images: f(de).default([]).describe("Array of uploaded images"),
  maxImages: u().default(5).describe("Maximum number of images allowed"),
  allowedTypes: f(p()).default(["image/jpeg", "image/png", "image/gif"]).describe("Allowed MIME types"),
  maxSizeBytes: u().default(5242880).describe("Maximum file size in bytes (default 5MB)"),
  description: p().optional().describe("Description of uploaded images"),
  tags: f(p()).default([]).describe("Tags associated with images")
  // Note: faces and sides inherited from Extra base
}), fe = {
  // Inherit computed properties from Extra base class
  ...se,
  // Check if any images are uploaded
  hasAnyImages: {
    compute: (o) => o.faces ? Object.keys(o.faces).some((t) => {
      const e = o.faces[t];
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
    compute: (o) => o.faces ? Object.keys(o.faces).filter((t) => {
      const e = o.faces[t];
      return e !== void 0 && e !== !1 && e !== "";
    }) : [],
    metadata: {
      cache: !1,
      dependencies: ["faces"],
      returnType: "string[]"
    }
  }
}, x = b({
  x: u(),
  y: u()
}), P = ae.extend({
  // ========== Polygon Outline ==========
  // Closed polygon vertices, origin-normalized (bounding box origin at 0,0)
  // First vertex should equal last vertex (closed polygon)
  outline: f(x).default([]).describe("Closed polygon outline vertices (origin-normalized)"),
  // Continuous rotation angle for nesting (radians, 0 to 2*PI)
  // The inherited rot (0|1) is not used for nesting shapes
  nestingRotation: u().min(0).max(Math.PI * 2).default(0).describe("Continuous rotation angle for nesting (radians)"),
  // Actual polygon area computed via shoelace formula
  // Different from inherited area which is the bounding box area (l * w)
  trueArea: u().min(0).default(0).describe("Actual polygon area (vs bounding box area)"),
  // Inner contour holes (for hollow shapes like frames)
  // Each hole is a closed polygon (first vertex = last vertex), wound CW
  // The main `outline` contains the slit-connected polygon for geometry ops;
  // `holes` stores the clean inner contours for stroke-correct rendering
  holes: f(f(x)).default([]).describe("Inner contour holes for rendering (CW wound)"),
  // Simplified outline used for NFP computation and placement (hull or DP-simplified).
  // When set, placement math (rotation pivot + normalisation) uses THIS polygon, while
  // rendering + cutting continue to use `outline` for full fidelity. The two representations
  // must agree on the transform reference frame, so client rendering also consults this.
  // Absent when the full outline was used directly (e.g. ≤24 vertices or hull wasn't smaller).
  placementOutline: f(x).nullable().optional().describe("Simplified polygon used for NFP/placement; transform reference for render")
}), ee = {
  // Include all Shape computed properties
  ...re,
  // Fill ratio: how much of the bounding box the polygon actually fills
  fillRatio: {
    compute: (o) => {
      const t = o.l * o.w;
      return t === 0 ? 0 : o.trueArea / t;
    },
    metadata: {
      cache: !0,
      dependencies: ["trueArea", "l", "w"],
      returnType: "number"
    }
  },
  // Whether this shape has a valid polygon outline
  hasOutline: {
    compute: (o) => o.outline && o.outline.length >= 3,
    metadata: {
      cache: !1,
      dependencies: ["outline"],
      returnType: "boolean"
    }
  }
};
P.describe(JSON.stringify({
  name: "NestingShape",
  description: "Irregular shape with polygon outline for nesting optimization",
  version: "1.0.0",
  extends: "Shape",
  computedProperties: Object.keys(ee)
}));
class V extends I {
  // Required: Define schema and computed properties for SchemaClass
  static schema = ce;
  static computedProperties = he;
  // Note: children is defined in the schema as zRefArray<Segment>
  // No need for getter/setter or backing field - SchemaClass handles it automatically
  constructor(t = {}) {
    const e = { ...t };
    if (e.preventAutoRotation = !0, e.skipValidation = !0, e.parent && e.autoId && e.parent.autoId === e.autoId && delete e.autoId, e.children || (e.children = []), Array.isArray(e.children) && e.autoId && (e.children = e.children.filter((n) => n && n.autoId !== e.autoId)), super(e), this.parent && this.autoId === this.parent.autoId)
      throw new Error(`Segment cannot have same autoId as parent: ${this.autoId}`);
    if (this.parent) {
      if (this.type === "firstShape")
        return;
      if (Array.isArray(this.parent.children) || (this.parent.children = []), this.parent.autoId === this.autoId) {
        this.parent = null;
        return;
      }
      if (!this.parent.children.some((s) => s.autoId === this.autoId)) {
        if (this.parent === this) {
          this.parent = null;
          return;
        }
        const s = [...this.parent.children, this];
        this.parent.children = s;
      }
    }
  }
  /**
   * Get entity type
   */
  getType() {
    return r.Segment;
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
    const n = /* @__PURE__ */ new Set();
    for (; e; ) {
      if (e.autoId === t.autoId)
        return !0;
      if (n.has(e.autoId))
        return console.warn(`[INFINITE LOOP] Parent chain has a loop at segment ${e.autoId}`), !1;
      n.add(e.autoId), e = e.parent;
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
          const n = e.children.indexOf(t);
          n !== -1 && e.children.splice(n, 1);
        }
        ue() && console.log(`[PARENT CHANGE] Moving ${t.autoId} from parent ${e.autoId} to ${this.autoId}`);
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
      const n = e.indexOf(t);
      n !== -1 && (e.splice(n, 1), t.parent = null);
    }
  }
}
class W extends oe {
  // Properties are dynamically created from schema via SchemaClass
  // Static schema reference for automatic updates
  static schema = pe;
  static computedProperties = fe;
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
    if (this.images && this.images.length > this.maxImages && e.push(new m({
      item: t,
      message: `Too many images: ${this.images.length} exceeds maximum of ${this.maxImages}`,
      type: "error"
    })), this.images)
      for (let n = 0; n < this.images.length; n++) {
        const s = this.images[n];
        if (s.url || e.push(new m({
          message: `Image ${n + 1} is missing URL`,
          type: "error"
        })), s.mimeType && !this.allowedTypes.includes(s.mimeType) && e.push(new m({
          message: `Image ${n + 1} has unsupported type: ${s.mimeType}`,
          type: "warning"
        })), s.size && s.size > this.maxSizeBytes) {
          const l = (s.size / 1048576).toFixed(2), a = (this.maxSizeBytes / 1048576).toFixed(2);
          e.push(new m({
            message: `Image ${n + 1} is too large: ${l}MB exceeds ${a}MB`,
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
    const n = (this.images || []).reduce((l, a) => l + (a.size || 0), 0) / 1048576;
    return Math.ceil(n * 0.01 * 100) / 100;
  }
  /**
   * Get description
   */
  getDescription() {
    if (!this.images || this.images.length === 0)
      return "No images uploaded";
    const t = this.images ? this.images.length : 0, n = ((this.images || []).reduce((s, l) => s + (l.size || 0), 0) / 1048576).toFixed(2);
    return `${t} image${t !== 1 ? "s" : ""} (${n}MB)`;
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
    if (!this.images)
      return !1;
    const e = this.images.findIndex((n) => n.url === t);
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
    if (!this.tags)
      return;
    const e = this.tags.indexOf(t);
    e !== -1 && this.tags.splice(e, 1);
  }
}
class K extends S {
  static schema = P;
  static computedProperties = ee;
  static defaults = P.parse({});
  constructor(t = {}) {
    super(t);
  }
  getType() {
    return r.NestingShape;
  }
  /**
   * Returns the polygon used as the rotation/normalisation REFERENCE during placement.
   * When `placementOutline` is set (DP-simplified or convex hull), the placement algorithm
   * rotated around its centroid and normalised against its bbox — rendering must do the same
   * so final positions agree. When absent, the outline itself is the reference.
   */
  getTransformReference() {
    return this.placementOutline && this.placementOutline.length >= 3 ? this.placementOutline : this.outline;
  }
  /** Arithmetic centroid of a polygon (matches geometry.ts rotatePolygon pivot). */
  centroidOf(t) {
    let e = 0, n = 0;
    for (const s of t)
      e += s.x, n += s.y;
    return e /= t.length, n /= t.length, { cx: e, cy: n };
  }
  /** Min x/y of a polygon — used as normalisation offset after rotation. */
  minOf(t) {
    let e = 1 / 0, n = 1 / 0;
    for (const s of t)
      s.x < e && (e = s.x), s.y < n && (n = s.y);
    return { minX: e, minY: n };
  }
  /** Rotate a polygon around an arbitrary pivot. */
  rotateAround(t, e, n) {
    if (n === 0)
      return t;
    const s = Math.cos(n), l = Math.sin(n);
    return t.map((a) => {
      const h = a.x - e.cx, c = a.y - e.cy;
      return {
        x: s * h - l * c + e.cx,
        y: l * h + s * c + e.cy
      };
    });
  }
  /**
   * Get the rotated outline vertices, applying nestingRotation around the arithmetic centroid
   * of the placement reference (so rendering agrees with placement when a placementOutline is used).
   */
  getRotatedOutline() {
    if (!this.outline || this.outline.length < 3)
      return [];
    if (this.nestingRotation === 0)
      return this.outline;
    const t = this.getTransformReference(), e = this.centroidOf(t);
    return this.rotateAround(this.outline, e, this.nestingRotation);
  }
  /**
   * Get the rotated + normalized outline (bounding box starts at 0,0)
   * Matches the placement algorithm: rotate around reference centroid, normalise against
   * rotated-reference bbox (not against the outline's own rotated bbox).
   */
  getNormalizedRotatedOutline() {
    if (!this.outline || this.outline.length < 3)
      return [];
    const t = this.getTransformReference(), e = this.centroidOf(t), n = this.rotateAround(this.outline, e, this.nestingRotation), s = t === this.outline ? n : this.rotateAround(t, e, this.nestingRotation), { minX: l, minY: a } = this.minOf(s);
    return n.map((h) => ({
      x: h.x - l,
      y: h.y - a
    }));
  }
  /**
   * Get the translated outline vertices at the shape's current position on stock
   * Uses normalized rotation matching the placement algorithm
   */
  getPositionedOutline() {
    const t = this.getNormalizedRotatedOutline();
    return t.length ? t.map((e) => ({
      x: e.x + (this.x || 0),
      y: e.y + (this.y || 0)
    })) : [];
  }
  /**
   * Get the positioned outer boundary for cutting (bounding box for hollow shapes, outline for solid)
   * Uses the same rotation + normalization as getPositionedOutline()
   */
  getPositionedOuterBoundary() {
    if (!this.holes?.length)
      return this.getPositionedOutline();
    let t = 1 / 0, e = 1 / 0, n = -1 / 0, s = -1 / 0;
    for (const a of this.outline)
      a.x < t && (t = a.x), a.y < e && (e = a.y), a.x > n && (n = a.x), a.y > s && (s = a.y);
    const l = [
      { x: t, y: e },
      { x: n, y: e },
      { x: n, y: s },
      { x: t, y: s }
    ];
    return this.positionContour(l);
  }
  /**
   * Get the positioned hole contours for cutting
   * Each hole is rotated + normalized + translated consistently with the outline
   */
  getPositionedHoles() {
    return this.holes?.length ? this.holes.filter((t) => t.length >= 3).map((t) => {
      const e = t[0].x === t[t.length - 1].x && t[0].y === t[t.length - 1].y ? t.slice(0, -1) : t;
      return this.positionContour(e);
    }) : [];
  }
  /**
   * Position an arbitrary contour using the same transform as getPositionedOutline():
   * rotate around the placement reference's centroid, normalise using the reference's
   * rotated bbox, translate by (x, y).
   */
  positionContour(t) {
    if (!this.outline || this.outline.length < 3)
      return t;
    if (!this.nestingRotation || this.nestingRotation === 0)
      return t.map((c) => ({
        x: c.x + (this.x || 0),
        y: c.y + (this.y || 0)
      }));
    const e = this.getTransformReference(), n = this.centroidOf(e), s = this.rotateAround(t, n, this.nestingRotation), l = this.rotateAround(e, n, this.nestingRotation), { minX: a, minY: h } = this.minOf(l);
    return s.map((c) => ({
      x: c.x - a + (this.x || 0),
      y: c.y - h + (this.y || 0)
    }));
  }
  /**
   * Override createPerimeterCuts to generate polygon-outline cuts instead of bounding-box cuts
   * Each edge of the polygon outline becomes a separate Cut line segment
   */
  createPerimeterCuts(t = null) {
    if (t = t || this.stock, !t)
      throw new Error("stock is required to create a cut");
    const e = this.getPositionedOutline();
    if (e.length < 3)
      return [];
    const n = [], l = e[0].x === e[e.length - 1].x && e[0].y === e[e.length - 1].y ? e.length - 1 : e.length;
    for (let a = 0; a < l; a++) {
      const h = e[a], c = e[(a + 1) % e.length];
      n.push(new C({
        stock: le(this.stock) ? this.stock : t,
        x1: h.x,
        y1: h.y,
        x2: c.x,
        y2: c.y
      }));
    }
    return n;
  }
  /**
   * Check if this shape's outline is identical to another nesting shape's outline
   * Used for NFP cache deduplication
   */
  isOutlineIdentical(t) {
    if (this.outline.length !== t.outline.length)
      return !1;
    for (let e = 0; e < this.outline.length; e++)
      if (this.outline[e].x !== t.outline[e].x || this.outline[e].y !== t.outline[e].y)
        return !1;
    return !0;
  }
}
function Ie() {
  i("Issue", m), i("Line", E), i(r.Line, E), i("Point", O), i(r.Point, O), i("Rectangle", T), i(r.Rectangle, T), i("Container", I), i(r.Container, I), i("GuillotineState", R), i(r.GuillotineState, R), i("Placeable", A), i(r.Placeable, A), i("Group", z), i(r.Group, z), i("Offcut", v), i(r.Offcut, v), i("Segment", V), i(r.Segment, V), i("Shape", S), i(r.Shape, S), i("Stock", B), i(r.Stock, B), i("Banding", M), i("banding", M), i("Corner", k), i("corner", k), i("Cut", C), i(r.Cut, C), i("Extras", $), i(r.Extras, $), i("Finish", N), i("finish", N), i("Groove", F), i("groove", F), i("HingeHole", G), i("hingeHole", G), i("Hole", H), i("hole", H), i("ImageUpload", W), i("imageUpload", W), i("InputSaw", D), i(r.InputSaw, D), i("InputShape", L), i(r.InputShape, L), i("InputStock", j), i(r.InputStock, j), i("InputUserGroup", U), i(r.InputUserGroup, U), i("Machining", Y), i(r.Machining, Y), i("NestingShape", K), i(r.NestingShape, K), i("Planing", X), i("planing", X), i("PointCollection", J), i(r.PointCollection, J), i("Saw", _), i(r.Saw, _);
}
export {
  Ie as initializeStaticRegistry
};
