import { z as r, S as c, E as p } from "./InputUserGroup-BS7MVA1o.js";
import { o as d, u as h, m as u, h as a, i as f } from "./vendor-C76etQCp.js";
const l = d({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: h([
    u(a(), r("Point")),
    f(a(), r("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), y = {
  // Get the number of points in the collection
  size: {
    compute: (i) => i.points instanceof Map ? i.points.size : Object.keys(i.points || {}).length,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "number"
    }
  },
  // Check if the collection is empty
  isEmpty: {
    compute: (i) => i.points instanceof Map ? i.points.size === 0 : Object.keys(i.points || {}).length === 0,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "boolean"
    }
  }
};
class o extends c {
  // Required: Define schema and computed properties for SchemaClass
  static schema = l;
  static computedProperties = y;
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
  constructor(t = {}) {
    super(t), this.points instanceof Map || (this.points = new Map(Object.entries(this.points || {})));
  }
  /**
   * Get entity type
   */
  getType() {
    return p.PointCollection;
  }
  /**
   * Add a point to the collection
   */
  add(t, e) {
    if (this.contains(t)) {
      const n = this.getPoint(t);
      n.type === "group" && !e && (n.type = void 0);
      return;
    }
    t.validate(), e && (t.type = e);
    const s = this.createKey(t);
    this.points.set(s, t);
  }
  /**
   * Add multiple points to the collection
   */
  addPoints(t, e) {
    for (const s of t) {
      if (!s)
        return;
      s.validate(), this.add(s, e);
    }
  }
  /**
   * Get a point by coordinates
   */
  get(t, e) {
    const s = `${t},${e}`;
    return this.points.get(s);
  }
  /**
   * Check if a point exists
   */
  has(t, e) {
    const s = `${t},${e}`;
    return this.points.has(s);
  }
  /**
   * Remove a point
   */
  remove(t, e) {
    const s = `${t},${e}`;
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
  forEach(t) {
    this.points.forEach(t);
  }
  /**
   * Create from array of points
   */
  static fromArray(t) {
    const e = new o();
    return t.forEach((s) => e.add(s)), e;
  }
  /**
   * Add multiple points at once
   */
  addMultiple(t) {
    t.forEach((e) => this.add(e));
  }
  /**
   * Alias for addMultiple
   */
  adds(t) {
    this.addMultiple(t);
  }
  /**
   * Create a key from a point
   */
  createKey(t) {
    return `${t.x},${t.y}`;
  }
  /**
   * Get a point by Point object
   */
  getPoint(t) {
    return this.points.get(this.createKey(t));
  }
  /**
   * Check if a point exists by Point object
   */
  contains(t) {
    return this.points.has(this.createKey(t));
  }
  /**
   * Delete a point by Point object
   */
  deletePoint(t) {
    t.validate(), this.points.delete(this.createKey(t));
  }
  /**
   * Delete multiple points
   */
  deletePoints(t) {
    for (const e of t)
      e.validate(), this.deletePoint(e);
  }
}
export {
  o as P
};
