import { z as A, S as M, E, d as F, m as d, L as z, P as T, i as O } from "./result.zod-n9AiX9Qf.js";
import { o as W, u as D, m as K, h as X, i as C } from "./vendor-CN6j6kBQ.js";
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
class b extends M {
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
    return E.PointCollection;
  }
  /**
   * Add a point to the collection
   */
  add(t, i) {
    if (this.contains(t)) {
      const c = this.getPoint(t);
      c.type === "group" && !i && (c.type = void 0);
      return;
    }
    t.validate(), i && (t.type = i);
    const e = this.createKey(t);
    this.points.set(e, t);
  }
  /**
   * Add multiple points to the collection
   */
  addPoints(t, i) {
    for (const e of t) {
      if (!e) return;
      e.validate(), this.add(e, i);
    }
  }
  /**
   * Get a point by coordinates
   */
  get(t, i) {
    const e = `${t},${i}`;
    return this.points.get(e);
  }
  /**
   * Check if a point exists
   */
  has(t, i) {
    const e = `${t},${i}`;
    return this.points.has(e);
  }
  /**
   * Remove a point
   */
  remove(t, i) {
    const e = `${t},${i}`;
    return this.points.delete(e);
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
    const i = new b();
    return t.forEach((e) => i.add(e)), i;
  }
  /**
   * Add multiple points at once
   */
  addMultiple(t) {
    t.forEach((i) => this.add(i));
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
    for (const i of t)
      i.validate(), this.deletePoint(i);
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
  constructor(t, i, e = 0) {
    this.x = t, this.y = i, this.z = e, this.raycast = !1, this.collision = !1, this.tooClose = !1, this.adjustedForMinSpacing = !1;
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
  cloneAt(t = null, i = null) {
    const e = new p(t ?? this.x, i ?? this.y, this.z);
    return this.a !== void 0 && (e.a = this.a), this.b !== void 0 && (e.b = this.b), this.stock && (e.stock = this.stock), this.direction && (e.direction = this.direction), this.type && (e.type = this.type), this.corner && (e.corner = this.corner), this.shapePosition && (e.shapePosition = this.shapePosition), this.grid && (e.grid = this.grid), this.raycast && (e.raycast = this.raycast), this.collision && (e.collision = this.collision), this.tooClose && (e.tooClose = this.tooClose), this.adjustedForMinSpacing && (e.adjustedForMinSpacing = this.adjustedForMinSpacing), e;
  }
  /** Accepts shapes whose `l`/`w` are technically optional in the schema —
   *  treats missing dims as zero so a non-placed shape never matches. */
  collidesWith(t) {
    const i = t.l ?? 0, e = t.w ?? 0;
    return this.x >= t.x && this.x <= t.x + i && this.y >= t.y && this.y <= t.y + e;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  getAvailableShapePositions(t) {
    return F(this, t);
  }
  static fromCoords(t, i, e) {
    return new p(t, i, e ?? 0);
  }
}
function it(o, t, i, e = !1) {
  if (!i || !i.length) return !1;
  if (!o?.dimension)
    throw new Error("no line direction provided to collisionWithShapes");
  const c = t.bladeWidth / 2;
  o.shapeCollisions = o.shapeCollisions || [], i = i.filter((s) => s.added);
  for (const s of i) {
    let r = !1, a = !1;
    if (o.dimension === "l" ? (r = d.greaterThan(o.x2, s.x) && d.lessThan(o.x1, s.x + s.l), a = d.greaterThan(o.y1 + c, s.y) && d.lessThan(o.y1 - c, s.y + s.w)) : o.dimension === "w" && (r = d.greaterThan(o.x1 + c, s.x) && d.lessThan(o.x1 - c, s.x + s.l), a = d.greaterThan(o.y2, s.y) && d.lessThan(o.y1, s.y + s.w)), r && a)
      if (e) o.shapeCollisions.push(s);
      else return !0;
  }
  return e ? o.shapeCollisions : o.shapeCollisions.length > 0;
}
function m(o, t, i, e, c = null, s = null) {
  return new z({ x1: o, y1: t, x2: i, y2: e, origin: c, type: s });
}
function G(o, t) {
  const i = o.getCorners(), e = {};
  return i.bottomLeft.x > 0 && i.bottomLeft.y > 0 && (e.bottomLeftDown = m(
    i.bottomLeft.x,
    i.bottomLeft.y,
    i.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), e.bottomLeftLeft = m(
    i.bottomLeft.x,
    i.bottomLeft.y,
    0,
    i.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), i.topLeft.x > 0 && i.topLeft.y < t.w && (e.topLeftLeft = m(
    i.topLeft.x,
    i.topLeft.y,
    0,
    i.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), e.topLeftTop = m(
    i.topLeft.x,
    i.topLeft.y,
    i.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), i.topRight.y < t.w && i.topRight.x < t.l && (e.topRightTop = m(
    i.topRight.x,
    i.topRight.y,
    i.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), e.topRightRight = m(
    i.topRight.x,
    i.topRight.y,
    t.l,
    i.topRight.y,
    "topRight",
    "topRightRight"
  )), i.bottomRight.x < t.l && i.bottomRight.y > 0 && (e.bottomRightRight = m(
    i.bottomRight.x,
    i.bottomRight.y,
    t.l,
    i.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), e.bottomRightDown = m(
    i.bottomRight.x,
    i.bottomRight.y,
    i.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), e;
}
function x(o, t, i = null) {
  if (o.has(t.x, t.y)) {
    const e = o.get(t.x, t.y);
    e.type === "group" && !i && (e.type = void 0);
    return;
  }
  i && (t.type = i), o.add(t);
}
function P(o, t, i = null) {
  for (const e of t) {
    if (!e) return;
    x(o, e, i);
  }
}
function h(o, t, i, e, c) {
  const s = I[o](t, i);
  return e && (s.corner = e), c && (s.direction = c), s;
}
const I = {
  bottom: (o, t) => {
    const i = o.cloneAt(o.x, o.y - t);
    return i.grid = "bottom", i;
  },
  bottomLeft: (o, t) => {
    const i = o.cloneAt(o.x - t, o.y - t);
    return i.grid = "bottomLeft", i;
  },
  bottomRight: (o, t) => {
    const i = o.cloneAt(o.x + t, o.y - t);
    return i.grid = "bottomRight", i;
  },
  left: (o, t) => {
    const i = o.cloneAt(o.x - t, o.y);
    return i.grid = "left", i;
  },
  centre: (o) => {
    const t = o.cloneAt(o.x, o.y);
    return t.grid = "centre", t;
  },
  right: (o, t) => {
    const i = o.cloneAt(o.x + t, o.y);
    return i.grid = "right", i;
  },
  top: (o, t) => {
    const i = o.cloneAt(o.x, o.y + t);
    return i.grid = "top", i;
  },
  topLeft: (o, t) => {
    const i = o.cloneAt(o.x - t, o.y + t);
    return i.grid = "topLeft", i;
  },
  topRight: (o, t) => {
    const i = o.cloneAt(o.x + t, o.y + t);
    return i.grid = "topRight", i;
  }
};
function q(o, t, i) {
  const e = new b(), c = i.toArray().sort(v), s = t.bladeWidth;
  if (c.forEach((r) => {
    const a = r.corner, n = r.type;
    if (!s)
      e.add(r);
    else
      switch (a) {
        case "topRight":
          {
            const f = h("top", r, s, a);
            n && (f.type = n), e.add(f);
            const l = h("right", r, s, a);
            n && (l.type = n), e.add(l);
          }
          break;
        case "topLeft":
          {
            const f = h("top", r, s, a);
            n && (f.type = n), e.add(f);
            const l = h("left", r, s, a);
            n && (l.type = n), e.add(l);
          }
          break;
        case "bottomRight":
          {
            const f = h("bottom", r, s, a);
            n && (f.type = n), e.add(f);
            const l = h("right", r, s, a);
            n && (l.type = n), e.add(l);
          }
          break;
        case "bottomLeft":
          {
            const f = h("bottom", r, s, a);
            n && (f.type = n), e.add(f);
            const l = h("left", r, s, a);
            n && (l.type = n), e.add(l);
          }
          break;
      }
  }), s) {
    const r = e.toArray();
    for (let a = r.length; a--; ) {
      const n = r[a];
      i.has(n.x, n.y) && e.remove(n.x, n.y);
    }
  } else {
    const r = e.toArray();
    for (let a = r.length; a--; ) {
      const n = r[a];
      for (let f = o.length; f--; ) {
        const l = o[f];
        if (n.x === l.x && n.y === l.y) {
          e.remove(n.x, n.y);
          break;
        }
      }
    }
  }
  if (s) {
    const r = /* @__PURE__ */ new Set();
    let a, n, f, l;
    t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (a = t.x, n = t.y, f = t.x + t.l, l = t.y + t.w) : (a = t.x + (t?.trim?.w1 ?? 0), n = t.y + (t?.trim?.l1 ?? 0), f = t.x + t.l - (t?.trim?.w2 ?? 0), l = t.y + t.w - (t?.trim?.l2 ?? 0));
    let u = e.toArray();
    for (let g = u.length; g--; ) {
      const y = u[g];
      (d.lessThan(y.x, a) || d.lessThan(y.y, n) || d.greaterThan(y.x, f) || d.greaterThan(y.y, l)) && u.splice(g, 1);
    }
    e.clear(), u.forEach((g) => e.add(g)), r.clear(), u = e.toArray();
    for (let g = u.length; g--; ) {
      const y = u[g];
      for (let w = o.length; w--; ) {
        const L = o[w];
        if (y.collidesWith(L)) {
          e.remove(y.x, y.y);
          break;
        }
      }
    }
  }
  return e;
}
function et(o, t, i) {
  let e = [];
  const c = o.getMinSpacing(i.saw), s = t.corner, r = t.direction;
  if (t.type === "shape")
    switch (s) {
      case "topLeft":
        r === "rl" && (e.push(h("right", t, c, s, r)), e.push(h("topRight", t, c, s, r))), r === "bt" && (e.push(h("bottom", t, c, s, r)), e.push(h("bottomLeft", t, c, s, r)));
        break;
      case "topRight":
        r === "lr" && (e.push(h("left", t, c, s, r)), e.push(h("topLeft", t, c, s, r))), r === "bt" && (e.push(h("bottom", t, c, s, r)), e.push(h("bottomRight", t, c, s, r)));
        break;
      case "bottomRight":
        r === "lr" && (e.push(h("left", t, c, s, r)), e.push(h("bottomLeft", t, c, s, r))), r === "tb" && (e.push(h("top", t, c, s, r)), e.push(h("topRight", t, c, s, r)));
        break;
      case "bottomLeft":
        r === "rl" && (e.push(h("right", t, c, s, r)), e.push(h("bottomRight", t, c, s, r))), r === "tb" && (e.push(h("top", t, c, s, r)), e.push(h("topLeft", t, c, s, r)));
        break;
    }
  else if (t.type === "edge")
    switch (r) {
      case "rl":
      case "lr":
        e.push(h("top", t, 0)), e.push(h("centre", t, 0)), e.push(h("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        e.push(h("left", t, 0)), e.push(h("right", t, 0)), e.push(h("centre", t, 0));
        break;
    }
  if (e = e.filter((n) => n.x >= 0 && n.y >= 0), !e.length) return null;
  const a = new b();
  for (const n of e)
    n.raycast = !0, P(a, Z(o, n, i).toArray());
  return $(o, i, a), a;
}
function V(o, t) {
  const i = new b();
  return o.sort(v), o.forEach((e) => {
    O(e) ? (P(i, e.getCoords(t)), e.shapes.forEach((c) => {
      const s = c.getCoords(t);
      P(i, s, "group");
    })) : P(i, e.getCoords(t));
  }), i.points.forEach((e) => {
    e.stock = t.getStock;
  }), i;
}
function st(o = [], t, i) {
  const e = V(
    o === null ? t : o,
    i
  );
  return q(
    t,
    i,
    e
  );
}
function v(o, t) {
  return o.y === t.y ? t.x - o.x : t.y - o.y;
}
function S(o, t, i, e, c, s) {
  o.a = t.id, o.b = i ? i.id : null, o.direction = e, o.raycast = !0, o.type = c, o.corner = s;
}
function rt(o, t) {
  if (o.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let i = new b();
  const e = H(t, o);
  for (const a of t)
    for (const n of e) {
      if (n.shape.id === a.id) continue;
      const f = Object.values(n.rays).filter((l) => l !== void 0);
      for (const l of f)
        J(
          l,
          n.shape,
          a,
          i
        );
    }
  const s = o.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", r = t.reduce((a, n) => (s === "tb" ? a.x + a.l > n.x + n.l : a.y + a.w > n.y + n.w) ? a : n);
  return e.filter(({ shape: a }) => a.id === r.id).forEach(({ shape: a, rays: n }) => {
    const f = Object.values(n).filter((l) => l !== void 0);
    for (const l of f) {
      const u = new T(l.x2, l.y2);
      s === l.direction && (S(u, a, null, l.direction, "edge"), x(i, u));
    }
  }), i = Q(i), i;
}
function H(o, t) {
  return o.map((i) => {
    const e = G(i, t);
    return {
      shape: i,
      rays: e
    };
  });
}
function J(o, t, i, e) {
  switch (o.direction) {
    case "rl":
      R(
        o,
        t,
        i,
        e,
        i.x + i.l
      );
      break;
    case "lr":
      R(
        o,
        t,
        i,
        e,
        i.x
      );
      break;
    case "tb":
      R(
        o,
        t,
        i,
        e,
        i.y + i.w
      );
      break;
    case "bt":
      R(
        o,
        t,
        i,
        e,
        i.y
      );
      break;
  }
}
function R(o, t, i, e, c) {
  const s = o.dimension === "w", r = s ? "y" : "x", a = s ? "x" : "y", n = s ? "l" : "w";
  if (o[`${a}1`] >= i[a] && o[`${a}1`] <= i[a] + i[n]) {
    const f = o.direction === "lr" && o[`${r}1`] <= c && o[`${r}2`] >= c, l = o.direction === "rl" && o[`${r}1`] >= c && o[`${r}2`] <= c, u = o.direction === "bt" && o[`${r}1`] <= c && o[`${r}2`] >= c, g = o.direction === "tb" && o[`${r}1`] >= c && o[`${r}2`] <= c;
    if (f || l || u || g) {
      const w = s ? o[`${a}1`] : c, L = s ? c : o[`${a}1`], k = new T(w, L), j = o.origin;
      S(k, t, i, o.direction, "shape", j), x(e, k);
    }
  }
}
function Q(o) {
  const t = new b();
  return o.points.size === 0 || new Set(o.toArray().map((e) => e.a)).forEach((e) => {
    const c = o.toArray().filter((s) => s.a === e);
    ["right", "left", "top", "bottom"].forEach((s) => {
      const r = U(
        c,
        s
      );
      r && x(t, r);
    });
  }), t;
}
function U(o, t) {
  return o.length === 0 ? null : o.reduce((i, e) => {
    switch (t) {
      case "left":
        return !i || e.x < i.x ? e : i;
      case "right":
        return !i || e.x > i.x ? e : i;
      case "top":
        return !i || e.y > i.y ? e : i;
      case "bottom":
        return !i || e.y < i.y ? e : i;
      default:
        return null;
    }
  }, null);
}
function Z(o, t, i) {
  const e = new b(), c = t.getAvailableShapePositions(i), s = B(t, o, i), r = _(s);
  for (const a of c) {
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
    x(e, n);
  }
  return $(o, i, e), e;
}
function _(o) {
  if (o instanceof p) return o;
  const t = new p(o.x, o.y, o.z);
  return o.a !== void 0 && (t.a = o.a), o.b !== void 0 && (t.b = o.b), o.stock && (t.stock = o.stock), o.direction && (t.direction = o.direction), o.type && (t.type = o.type), o.corner && (t.corner = o.corner), o.shapePosition && (t.shapePosition = o.shapePosition), o.grid && (t.grid = o.grid), o.raycast && (t.raycast = o.raycast), o.collision && (t.collision = o.collision), o.tooClose && (t.tooClose = o.tooClose), o.adjustedForMinSpacing && (t.adjustedForMinSpacing = o.adjustedForMinSpacing), t;
}
function B(o, t, i) {
  if (i.saw.cutType !== "efficiency") return o;
  const e = t.getMinSpacing(i.saw), c = i.bladeWidth;
  if (!e || e === c) return o;
  let s;
  if (!o.grid) return o;
  switch (o.grid) {
    case "bottom":
      s = o.cloneAt(o.x, o.y - e + c);
      break;
    case "top":
      s = o.cloneAt(o.x, o.y + e - c);
      break;
    case "left":
      s = o.cloneAt(o.x - e + c, o.y);
      break;
    case "right":
      s = o.cloneAt(o.x + e - c, o.y);
      break;
  }
  return s ? (s.x < 0 && (s.x = 0), s.y < 0 && (s.y = 0), s.adjustedForMinSpacing = !0, s) : o;
}
function $(o, t, i) {
  let e, c, s, r;
  t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (e = 0, c = 0, s = t.x + t.l - o.l, r = t.y + t.w - o.w) : (e = t?.trim?.w1 ?? 0, c = t?.trim?.l1 ?? 0, s = t.l - (t?.trim?.w2 ?? 0) - o.l, r = t.w - (t?.trim?.l2 ?? 0) - o.w);
  const a = i.toArray();
  for (let n = a.length; n--; ) {
    const f = a[n];
    (d.lessThan(f.x, e) || d.lessThan(f.y, c) || d.greaterThan(f.x, s) || d.greaterThan(f.y, r) || f.x < 0 || f.y < 0) && i.remove(f.x, f.y);
  }
}
export {
  b as P,
  rt as a,
  et as b,
  Z as c,
  it as d,
  st as g,
  H as p
};
