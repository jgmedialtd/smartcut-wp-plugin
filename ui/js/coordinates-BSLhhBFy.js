import { z as A, x as d, aj as M, aH as E, E as F, b9 as z, ay as T, M as O } from "./result.zod-B0BoTcpc.js";
import { o as W, E as D, X as K, k as C, D as X } from "./vendor-BnSUeZfc.js";
const Y = W({
  // ========== Storage ==========
  // Points stored as a map (will be converted to/from Map in class)
  // In serialized form this is a record, at runtime it's a Map
  points: D([
    K(C(), A("Point")),
    X(C(), A("Point"))
  ]).default(() => /* @__PURE__ */ new Map())
}), N = {
  // Get the number of points in the collection
  size: {
    compute: (o) => o.points instanceof Map ? o.points.size : Object.keys(o.points || {}).length,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "number"
    }
  },
  // Check if the collection is empty
  isEmpty: {
    compute: (o) => o.points instanceof Map ? o.points.size === 0 : Object.keys(o.points || {}).length === 0,
    metadata: {
      cache: !1,
      dependencies: ["points"],
      returnType: "boolean"
    }
  }
};
function et(o, t, e, i = !1) {
  if (!e || !e.length)
    return !1;
  if (!o?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const f = t.bladeWidth / 2;
  o.shapeCollisions = o.shapeCollisions || [], e = e.filter((s) => s.added);
  for (const s of e) {
    let r = !1, a = !1;
    if (o.dimension === "l" ? (r = d.greaterThan(o.x2, s.x) && d.lessThan(o.x1, s.x + s.l), a = d.greaterThan(o.y1 + f, s.y) && d.lessThan(o.y1 - f, s.y + s.w)) : o.dimension === "w" && (r = d.greaterThan(o.x1 + f, s.x) && d.lessThan(o.x1 - f, s.x + s.l), a = d.greaterThan(o.y2, s.y) && d.lessThan(o.y1, s.y + s.w)), r && a)
      if (i)
        o.shapeCollisions.push(s);
      else
        return !0;
  }
  return i ? o.shapeCollisions : o.shapeCollisions.length > 0;
}
function m(o, t, e, i, f = null, s = null) {
  return new M({ x1: o, y1: t, x2: e, y2: i, origin: f, type: s });
}
function G(o, t) {
  const e = o.getCorners(), i = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (i.bottomLeftDown = m(e.bottomLeft.x, e.bottomLeft.y, e.bottomLeft.x, 0, "bottomLeft", "bottomLeftDown"), i.bottomLeftLeft = m(e.bottomLeft.x, e.bottomLeft.y, 0, e.bottomLeft.y, "bottomLeft", "bottomLeftLeft")), e.topLeft.x > 0 && e.topLeft.y < t.w && (i.topLeftLeft = m(e.topLeft.x, e.topLeft.y, 0, e.topLeft.y, "topLeft", "topLeftLeft"), i.topLeftTop = m(e.topLeft.x, e.topLeft.y, e.topLeft.x, t.w, "topLeft", "topLeftTop")), e.topRight.y < t.w && e.topRight.x < t.l && (i.topRightTop = m(e.topRight.x, e.topRight.y, e.topRight.x, t.w, "topRight", "topRightTop"), i.topRightRight = m(e.topRight.x, e.topRight.y, t.l, e.topRight.y, "topRight", "topRightRight")), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (i.bottomRightRight = m(e.bottomRight.x, e.bottomRight.y, t.l, e.bottomRight.y, "bottomRight", "bottomRightRight"), i.bottomRightDown = m(e.bottomRight.x, e.bottomRight.y, e.bottomRight.x, 0, "bottomRight", "bottomRightDown")), i;
}
class b extends E {
  // Required: Define schema and computed properties for SchemaClass
  static schema = Y;
  static computedProperties = N;
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
    return F.PointCollection;
  }
  /**
   * Add a point to the collection
   */
  add(t, e) {
    if (this.contains(t)) {
      const f = this.getPoint(t);
      f.type === "group" && !e && (f.type = void 0);
      return;
    }
    t.validate(), e && (t.type = e);
    const i = this.createKey(t);
    this.points.set(i, t);
  }
  /**
   * Add multiple points to the collection
   */
  addPoints(t, e) {
    for (const i of t) {
      if (!i)
        return;
      i.validate(), this.add(i, e);
    }
  }
  /**
   * Get a point by coordinates
   */
  get(t, e) {
    const i = `${t},${e}`;
    return this.points.get(i);
  }
  /**
   * Check if a point exists
   */
  has(t, e) {
    const i = `${t},${e}`;
    return this.points.has(i);
  }
  /**
   * Remove a point
   */
  remove(t, e) {
    const i = `${t},${e}`;
    return this.points.delete(i);
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
    const e = new b();
    return t.forEach((i) => e.add(i)), e;
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
class p {
  x;
  y;
  z;
  a;
  b;
  stock;
  direction;
  type;
  corner;
  shapePosition;
  grid;
  raycast;
  collision;
  tooClose;
  adjustedForMinSpacing;
  constructor(t, e, i = 0) {
    this.x = t, this.y = e, this.z = i, this.raycast = !1, this.collision = !1, this.tooClose = !1, this.adjustedForMinSpacing = !1;
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid FastPoint coordinates");
  }
  /** Map key — must match Point.getKey() so PointCollection can hold both. */
  getKey() {
    return `${this.x},${this.y}`;
  }
  /**
   * Clone with optional new (x, y). Mirrors Point.cloneAt so callers in the
   * placement loop don't need to branch on type.
   */
  cloneAt(t = null, e = null) {
    const i = new p(t ?? this.x, e ?? this.y, this.z);
    return this.a !== void 0 && (i.a = this.a), this.b !== void 0 && (i.b = this.b), this.stock && (i.stock = this.stock), this.direction && (i.direction = this.direction), this.type && (i.type = this.type), this.corner && (i.corner = this.corner), this.shapePosition && (i.shapePosition = this.shapePosition), this.grid && (i.grid = this.grid), this.raycast && (i.raycast = this.raycast), this.collision && (i.collision = this.collision), this.tooClose && (i.tooClose = this.tooClose), this.adjustedForMinSpacing && (i.adjustedForMinSpacing = this.adjustedForMinSpacing), i;
  }
  /** Accepts shapes whose `l`/`w` are technically optional in the schema —
   *  treats missing dims as zero so a non-placed shape never matches. */
  collidesWith(t) {
    const e = t.l ?? 0, i = t.w ?? 0;
    return this.x >= t.x && this.x <= t.x + e && this.y >= t.y && this.y <= t.y + i;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  getAvailableShapePositions(t) {
    return z(this, t);
  }
  static fromCoords(t, e, i) {
    return new p(t, e, i ?? 0);
  }
}
function x(o, t, e = null) {
  if (o.has(t.x, t.y)) {
    const i = o.get(t.x, t.y);
    i.type === "group" && !e && (i.type = void 0);
    return;
  }
  e && (t.type = e), o.add(t);
}
function P(o, t, e = null) {
  for (const i of t) {
    if (!i)
      return;
    x(o, i, e);
  }
}
function h(o, t, e, i, f) {
  const s = I[o](t, e);
  return i && (s.corner = i), f && (s.direction = f), s;
}
const I = {
  bottom: (o, t) => {
    const e = o.cloneAt(o.x, o.y - t);
    return e.grid = "bottom", e;
  },
  bottomLeft: (o, t) => {
    const e = o.cloneAt(o.x - t, o.y - t);
    return e.grid = "bottomLeft", e;
  },
  bottomRight: (o, t) => {
    const e = o.cloneAt(o.x + t, o.y - t);
    return e.grid = "bottomRight", e;
  },
  left: (o, t) => {
    const e = o.cloneAt(o.x - t, o.y);
    return e.grid = "left", e;
  },
  centre: (o) => {
    const t = o.cloneAt(o.x, o.y);
    return t.grid = "centre", t;
  },
  right: (o, t) => {
    const e = o.cloneAt(o.x + t, o.y);
    return e.grid = "right", e;
  },
  top: (o, t) => {
    const e = o.cloneAt(o.x, o.y + t);
    return e.grid = "top", e;
  },
  topLeft: (o, t) => {
    const e = o.cloneAt(o.x - t, o.y + t);
    return e.grid = "topLeft", e;
  },
  topRight: (o, t) => {
    const e = o.cloneAt(o.x + t, o.y + t);
    return e.grid = "topRight", e;
  }
};
function q(o, t, e) {
  const i = new b(), f = e.toArray().sort(S), s = t.bladeWidth;
  if (f.forEach((r) => {
    const a = r.corner, n = r.type;
    if (!s)
      i.add(r);
    else
      switch (a) {
        case "topRight":
          {
            const c = h("top", r, s, a);
            n && (c.type = n), i.add(c);
            const l = h("right", r, s, a);
            n && (l.type = n), i.add(l);
          }
          break;
        case "topLeft":
          {
            const c = h("top", r, s, a);
            n && (c.type = n), i.add(c);
            const l = h("left", r, s, a);
            n && (l.type = n), i.add(l);
          }
          break;
        case "bottomRight":
          {
            const c = h("bottom", r, s, a);
            n && (c.type = n), i.add(c);
            const l = h("right", r, s, a);
            n && (l.type = n), i.add(l);
          }
          break;
        case "bottomLeft":
          {
            const c = h("bottom", r, s, a);
            n && (c.type = n), i.add(c);
            const l = h("left", r, s, a);
            n && (l.type = n), i.add(l);
          }
          break;
      }
  }), s) {
    const r = i.toArray();
    for (let a = r.length; a--; ) {
      const n = r[a];
      e.has(n.x, n.y) && i.remove(n.x, n.y);
    }
  } else {
    const r = i.toArray();
    for (let a = r.length; a--; ) {
      const n = r[a];
      for (let c = o.length; c--; ) {
        const l = o[c];
        if (n.x === l.x && n.y === l.y) {
          i.remove(n.x, n.y);
          break;
        }
      }
    }
  }
  if (s) {
    const r = /* @__PURE__ */ new Set();
    let a, n, c, l;
    t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (a = t.x, n = t.y, c = t.x + t.l, l = t.y + t.w) : (a = t.x + (t?.trim?.w1 ?? 0), n = t.y + (t?.trim?.l1 ?? 0), c = t.x + t.l - (t?.trim?.w2 ?? 0), l = t.y + t.w - (t?.trim?.l2 ?? 0));
    let u = i.toArray();
    for (let g = u.length; g--; ) {
      const y = u[g];
      (d.lessThan(y.x, a) || d.lessThan(y.y, n) || d.greaterThan(y.x, c) || d.greaterThan(y.y, l)) && u.splice(g, 1);
    }
    i.clear(), u.forEach((g) => i.add(g)), r.clear(), u = i.toArray();
    for (let g = u.length; g--; ) {
      const y = u[g];
      for (let w = o.length; w--; ) {
        const L = o[w];
        if (y.collidesWith(L)) {
          i.remove(y.x, y.y);
          break;
        }
      }
    }
  }
  return i;
}
function it(o, t, e) {
  let i = [];
  const f = o.getMinSpacing(e.saw), s = t.corner, r = t.direction;
  if (t.type === "shape")
    switch (s) {
      case "topLeft":
        r === "rl" && (i.push(h("right", t, f, s, r)), i.push(h("topRight", t, f, s, r))), r === "bt" && (i.push(h("bottom", t, f, s, r)), i.push(h("bottomLeft", t, f, s, r)));
        break;
      case "topRight":
        r === "lr" && (i.push(h("left", t, f, s, r)), i.push(h("topLeft", t, f, s, r))), r === "bt" && (i.push(h("bottom", t, f, s, r)), i.push(h("bottomRight", t, f, s, r)));
        break;
      case "bottomRight":
        r === "lr" && (i.push(h("left", t, f, s, r)), i.push(h("bottomLeft", t, f, s, r))), r === "tb" && (i.push(h("top", t, f, s, r)), i.push(h("topRight", t, f, s, r)));
        break;
      case "bottomLeft":
        r === "rl" && (i.push(h("right", t, f, s, r)), i.push(h("bottomRight", t, f, s, r))), r === "tb" && (i.push(h("top", t, f, s, r)), i.push(h("topLeft", t, f, s, r)));
        break;
    }
  else if (t.type === "edge")
    switch (r) {
      case "rl":
      case "lr":
        i.push(h("top", t, 0)), i.push(h("centre", t, 0)), i.push(h("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        i.push(h("left", t, 0)), i.push(h("right", t, 0)), i.push(h("centre", t, 0));
        break;
    }
  if (i = i.filter((n) => n.x >= 0 && n.y >= 0), !i.length)
    return null;
  const a = new b();
  for (const n of i)
    n.raycast = !0, P(a, Z(o, n, e).toArray());
  return $(o, e, a), a;
}
function H(o, t) {
  const e = new b();
  return o.sort(S), o.forEach((i) => {
    O(i) ? (P(e, i.getCoords(t)), i.shapes.forEach((f) => {
      const s = f.getCoords(t);
      P(e, s, "group");
    })) : P(e, i.getCoords(t));
  }), e.points.forEach((i) => {
    i.stock = t.getStock;
  }), e;
}
function st(o = [], t, e) {
  const i = H(o === null ? t : o, e);
  return q(t, e, i);
}
function S(o, t) {
  return o.y === t.y ? t.x - o.x : t.y - o.y;
}
function v(o, t, e, i, f, s) {
  o.a = t.id, o.b = e ? e.id : null, o.direction = i, o.raycast = !0, o.type = f, o.corner = s;
}
function rt(o, t) {
  if (o.saw.cutType !== "efficiency" || t.length <= 1)
    return null;
  let e = new b();
  const i = V(t, o);
  for (const a of t)
    for (const n of i) {
      if (n.shape.id === a.id)
        continue;
      const c = Object.values(n.rays).filter((l) => l !== void 0);
      for (const l of c)
        J(l, n.shape, a, e);
    }
  const s = o.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", r = t.reduce((a, n) => (s === "tb" ? a.x + a.l > n.x + n.l : a.y + a.w > n.y + n.w) ? a : n);
  return i.filter(({ shape: a }) => a.id === r.id).forEach(({ shape: a, rays: n }) => {
    const c = Object.values(n).filter((l) => l !== void 0);
    for (const l of c) {
      const u = new T(l.x2, l.y2);
      s === l.direction && (v(u, a, null, l.direction, "edge"), x(e, u));
    }
  }), e = Q(e), e;
}
function V(o, t) {
  return o.map((e) => {
    const i = G(e, t);
    return {
      shape: e,
      rays: i
    };
  });
}
function J(o, t, e, i) {
  switch (o.direction) {
    case "rl":
      R(o, t, e, i, e.x + e.l);
      break;
    case "lr":
      R(o, t, e, i, e.x);
      break;
    case "tb":
      R(o, t, e, i, e.y + e.w);
      break;
    case "bt":
      R(o, t, e, i, e.y);
      break;
  }
}
function R(o, t, e, i, f) {
  const s = o.dimension === "w", r = s ? "y" : "x", a = s ? "x" : "y", n = s ? "l" : "w";
  if (o[`${a}1`] >= e[a] && o[`${a}1`] <= e[a] + e[n]) {
    const c = o.direction === "lr" && o[`${r}1`] <= f && o[`${r}2`] >= f, l = o.direction === "rl" && o[`${r}1`] >= f && o[`${r}2`] <= f, u = o.direction === "bt" && o[`${r}1`] <= f && o[`${r}2`] >= f, g = o.direction === "tb" && o[`${r}1`] >= f && o[`${r}2`] <= f;
    if (c || l || u || g) {
      const w = s ? o[`${a}1`] : f, L = s ? f : o[`${a}1`], k = new T(w, L), j = o.origin;
      v(k, t, e, o.direction, "shape", j), x(i, k);
    }
  }
}
function Q(o) {
  const t = new b();
  return o.points.size === 0 || new Set(o.toArray().map((i) => i.a)).forEach((i) => {
    const f = o.toArray().filter((s) => s.a === i);
    ["right", "left", "top", "bottom"].forEach((s) => {
      const r = U(f, s);
      r && x(t, r);
    });
  }), t;
}
function U(o, t) {
  return o.length === 0 ? null : o.reduce((e, i) => {
    switch (t) {
      case "left":
        return !e || i.x < e.x ? i : e;
      case "right":
        return !e || i.x > e.x ? i : e;
      case "top":
        return !e || i.y > e.y ? i : e;
      case "bottom":
        return !e || i.y < e.y ? i : e;
      default:
        return null;
    }
  }, null);
}
function Z(o, t, e) {
  const i = new b(), f = t.getAvailableShapePositions(e), s = B(t, o, e), r = _(s);
  for (const a of f) {
    let n;
    switch (a) {
      case "bottomLeft":
        n = r.cloneAt(r.x - o.l, r.y - o.w), n.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        n = r.cloneAt(r.x, r.y - o.w), n.shapePosition = "bottomRight";
        break;
      case "topLeft":
        n = r.cloneAt(r.x - o.l, r.y), n.shapePosition = "topLeft";
        break;
      case "topRight":
        n = r.cloneAt(r.x, r.y), n.shapePosition = "topRight";
        break;
      default:
        continue;
    }
    x(i, n);
  }
  return $(o, e, i), i;
}
function _(o) {
  if (o instanceof p)
    return o;
  const t = new p(o.x, o.y, o.z);
  return o.a !== void 0 && (t.a = o.a), o.b !== void 0 && (t.b = o.b), o.stock && (t.stock = o.stock), o.direction && (t.direction = o.direction), o.type && (t.type = o.type), o.corner && (t.corner = o.corner), o.shapePosition && (t.shapePosition = o.shapePosition), o.grid && (t.grid = o.grid), o.raycast && (t.raycast = o.raycast), o.collision && (t.collision = o.collision), o.tooClose && (t.tooClose = o.tooClose), o.adjustedForMinSpacing && (t.adjustedForMinSpacing = o.adjustedForMinSpacing), t;
}
function B(o, t, e) {
  if (e.saw.cutType !== "efficiency")
    return o;
  const i = t.getMinSpacing(e.saw), f = e.bladeWidth;
  if (!i || i === f)
    return o;
  let s;
  if (!o.grid)
    return o;
  switch (o.grid) {
    case "bottom":
      s = o.cloneAt(o.x, o.y - i + f);
      break;
    case "top":
      s = o.cloneAt(o.x, o.y + i - f);
      break;
    case "left":
      s = o.cloneAt(o.x - i + f, o.y);
      break;
    case "right":
      s = o.cloneAt(o.x + i - f, o.y);
      break;
  }
  return s ? (s.x < 0 && (s.x = 0), s.y < 0 && (s.y = 0), s.adjustedForMinSpacing = !0, s) : o;
}
function $(o, t, e) {
  let i, f, s, r;
  t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (i = 0, f = 0, s = t.x + t.l - o.l, r = t.y + t.w - o.w) : (i = t?.trim?.w1 ?? 0, f = t?.trim?.l1 ?? 0, s = t.l - (t?.trim?.w2 ?? 0) - o.l, r = t.w - (t?.trim?.l2 ?? 0) - o.w);
  const a = e.toArray();
  for (let n = a.length; n--; ) {
    const c = a[n];
    (d.lessThan(c.x, i) || d.lessThan(c.y, f) || d.greaterThan(c.x, s) || d.greaterThan(c.y, r) || c.x < 0 || c.y < 0) && e.remove(c.x, c.y);
  }
}
export {
  b as P,
  rt as a,
  it as b,
  et as c,
  Z as d,
  st as g,
  V as p
};
