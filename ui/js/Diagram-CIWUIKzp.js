import { d as oe, l as ae, J as le, U as re, k as B, I as ce, o as he, c as ue, g as de, s as N, K as fe, x as E } from "./vendor-vue-D6ZfZC0P.js";
import { e as Ct, z as pe, A as ge, B as me } from "./EcommerceCalculator-D4REKTU7.js";
import { h as ye, f as xe, l as R, g as et, e as st, s as b, r as C, i as J, j as be } from "./vendor-d3-DI9vO-24.js";
import { L as ve, a8 as Se, P as W, a9 as ke, aa as M, h as it, i as we, ab as U } from "./InputUserGroup-pBQzFMX3.js";
import { P as $ } from "./PointCollection-CeWat79f.js";
import "./vendor-i18next-BVRe4kPe.js";
import { g as Ae } from "./vendor-lodash-wbyiOdVF.js";
function T(e, t, s, i, n = null, o = null) {
  return new ve({ x1: e, y1: t, x2: s, y2: i, origin: n, type: o });
}
function Pe(e, t) {
  const s = e.getCorners(), i = {};
  return s.bottomLeft.x > 0 && s.bottomLeft.y > 0 && (i.bottomLeftDown = T(s.bottomLeft.x, s.bottomLeft.y, s.bottomLeft.x, 0, "bottomLeft", "bottomLeftDown"), i.bottomLeftLeft = T(s.bottomLeft.x, s.bottomLeft.y, 0, s.bottomLeft.y, "bottomLeft", "bottomLeftLeft")), s.topLeft.x > 0 && s.topLeft.y < t.w && (i.topLeftLeft = T(s.topLeft.x, s.topLeft.y, 0, s.topLeft.y, "topLeft", "topLeftLeft"), i.topLeftTop = T(s.topLeft.x, s.topLeft.y, s.topLeft.x, t.w, "topLeft", "topLeftTop")), s.topRight.y < t.w && s.topRight.x < t.l && (i.topRightTop = T(s.topRight.x, s.topRight.y, s.topRight.x, t.w, "topRight", "topRightTop"), i.topRightRight = T(s.topRight.x, s.topRight.y, t.l, s.topRight.y, "topRight", "topRightRight")), s.bottomRight.x < t.l && s.bottomRight.y > 0 && (i.bottomRightRight = T(s.bottomRight.x, s.bottomRight.y, t.l, s.bottomRight.y, "bottomRight", "bottomRightRight"), i.bottomRightDown = T(s.bottomRight.x, s.bottomRight.y, s.bottomRight.x, 0, "bottomRight", "bottomRightDown")), i;
}
class H {
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
  constructor(t, s, i = 0) {
    this.x = t, this.y = s, this.z = i, this.raycast = !1, this.collision = !1, this.tooClose = !1, this.adjustedForMinSpacing = !1;
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
  cloneAt(t = null, s = null) {
    const i = new H(t ?? this.x, s ?? this.y, this.z);
    return this.a !== void 0 && (i.a = this.a), this.b !== void 0 && (i.b = this.b), this.stock && (i.stock = this.stock), this.direction && (i.direction = this.direction), this.type && (i.type = this.type), this.corner && (i.corner = this.corner), this.shapePosition && (i.shapePosition = this.shapePosition), this.grid && (i.grid = this.grid), this.raycast && (i.raycast = this.raycast), this.collision && (i.collision = this.collision), this.tooClose && (i.tooClose = this.tooClose), this.adjustedForMinSpacing && (i.adjustedForMinSpacing = this.adjustedForMinSpacing), i;
  }
  /** Accepts shapes whose `l`/`w` are technically optional in the schema —
   *  treats missing dims as zero so a non-placed shape never matches. */
  collidesWith(t) {
    const s = t.l ?? 0, i = t.w ?? 0;
    return this.x >= t.x && this.x <= t.x + s && this.y >= t.y && this.y <= t.y + i;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  getAvailableShapePositions(t) {
    return Se(this, t);
  }
  static fromCoords(t, s, i) {
    return new H(t, s, i ?? 0);
  }
}
function Y(e, t, s = null) {
  if (e.has(t.x, t.y)) {
    const i = e.get(t.x, t.y);
    i.type === "group" && !s && (i.type = void 0);
    return;
  }
  s && (t.type = s), e.add(t);
}
function Z(e, t, s = null) {
  for (const i of t) {
    if (!i)
      return;
    Y(e, i, s);
  }
}
function m(e, t, s, i, n) {
  const o = Ce[e](t, s);
  return i && (o.corner = i), n && (o.direction = n), o;
}
const Ce = {
  bottom: (e, t) => {
    const s = e.cloneAt(e.x, e.y - t);
    return s.grid = "bottom", s;
  },
  bottomLeft: (e, t) => {
    const s = e.cloneAt(e.x - t, e.y - t);
    return s.grid = "bottomLeft", s;
  },
  bottomRight: (e, t) => {
    const s = e.cloneAt(e.x + t, e.y - t);
    return s.grid = "bottomRight", s;
  },
  left: (e, t) => {
    const s = e.cloneAt(e.x - t, e.y);
    return s.grid = "left", s;
  },
  centre: (e) => {
    const t = e.cloneAt(e.x, e.y);
    return t.grid = "centre", t;
  },
  right: (e, t) => {
    const s = e.cloneAt(e.x + t, e.y);
    return s.grid = "right", s;
  },
  top: (e, t) => {
    const s = e.cloneAt(e.x, e.y + t);
    return s.grid = "top", s;
  },
  topLeft: (e, t) => {
    const s = e.cloneAt(e.x - t, e.y + t);
    return s.grid = "topLeft", s;
  },
  topRight: (e, t) => {
    const s = e.cloneAt(e.x + t, e.y + t);
    return s.grid = "topRight", s;
  }
};
function Re(e, t, s) {
  const i = new $(), n = s.toArray().sort(Rt), o = t.bladeWidth;
  if (n.forEach((a) => {
    const r = a.corner, l = a.type;
    if (!o)
      i.add(a);
    else
      switch (r) {
        case "topRight":
          {
            const h = m("top", a, o, r);
            l && (h.type = l), i.add(h);
            const c = m("right", a, o, r);
            l && (c.type = l), i.add(c);
          }
          break;
        case "topLeft":
          {
            const h = m("top", a, o, r);
            l && (h.type = l), i.add(h);
            const c = m("left", a, o, r);
            l && (c.type = l), i.add(c);
          }
          break;
        case "bottomRight":
          {
            const h = m("bottom", a, o, r);
            l && (h.type = l), i.add(h);
            const c = m("right", a, o, r);
            l && (c.type = l), i.add(c);
          }
          break;
        case "bottomLeft":
          {
            const h = m("bottom", a, o, r);
            l && (h.type = l), i.add(h);
            const c = m("left", a, o, r);
            l && (c.type = l), i.add(c);
          }
          break;
      }
  }), o) {
    const a = i.toArray();
    for (let r = a.length; r--; ) {
      const l = a[r];
      s.has(l.x, l.y) && i.remove(l.x, l.y);
    }
  } else {
    const a = i.toArray();
    for (let r = a.length; r--; ) {
      const l = a[r];
      for (let h = e.length; h--; ) {
        const c = e[h];
        if (l.x === c.x && l.y === c.y) {
          i.remove(l.x, l.y);
          break;
        }
      }
    }
  }
  if (o) {
    const a = /* @__PURE__ */ new Set();
    let r, l, h, c;
    t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (r = t.x, l = t.y, h = t.x + t.l, c = t.y + t.w) : (r = t.x + (t?.trim?.w1 ?? 0), l = t.y + (t?.trim?.l1 ?? 0), h = t.x + t.l - (t?.trim?.w2 ?? 0), c = t.y + t.w - (t?.trim?.l2 ?? 0));
    let d = i.toArray();
    for (let g = d.length; g--; ) {
      const x = d[g];
      (M.lessThan(x.x, r) || M.lessThan(x.y, l) || M.greaterThan(x.x, h) || M.greaterThan(x.y, c)) && d.splice(g, 1);
    }
    i.clear(), d.forEach((g) => i.add(g)), a.clear(), d = i.toArray();
    for (let g = d.length; g--; ) {
      const x = d[g];
      for (let f = e.length; f--; ) {
        const v = e[f];
        if (x.collidesWith(v)) {
          i.remove(x.x, x.y);
          break;
        }
      }
    }
  }
  return i;
}
function Ge(e, t, s) {
  let i = [];
  const n = e.getMinSpacing(s.saw), o = t.corner, a = t.direction;
  if (t.type === "shape")
    switch (o) {
      case "topLeft":
        a === "rl" && (i.push(m("right", t, n, o, a)), i.push(m("topRight", t, n, o, a))), a === "bt" && (i.push(m("bottom", t, n, o, a)), i.push(m("bottomLeft", t, n, o, a)));
        break;
      case "topRight":
        a === "lr" && (i.push(m("left", t, n, o, a)), i.push(m("topLeft", t, n, o, a))), a === "bt" && (i.push(m("bottom", t, n, o, a)), i.push(m("bottomRight", t, n, o, a)));
        break;
      case "bottomRight":
        a === "lr" && (i.push(m("left", t, n, o, a)), i.push(m("bottomLeft", t, n, o, a))), a === "tb" && (i.push(m("top", t, n, o, a)), i.push(m("topRight", t, n, o, a)));
        break;
      case "bottomLeft":
        a === "rl" && (i.push(m("right", t, n, o, a)), i.push(m("bottomRight", t, n, o, a))), a === "tb" && (i.push(m("top", t, n, o, a)), i.push(m("topLeft", t, n, o, a)));
        break;
    }
  else if (t.type === "edge")
    switch (a) {
      case "rl":
      case "lr":
        i.push(m("top", t, 0)), i.push(m("centre", t, 0)), i.push(m("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        i.push(m("left", t, 0)), i.push(m("right", t, 0)), i.push(m("centre", t, 0));
        break;
    }
  if (i = i.filter((l) => l.x >= 0 && l.y >= 0), !i.length)
    return null;
  const r = new $();
  for (const l of i)
    l.raycast = !0, Z(r, Tt(e, l, s).toArray());
  return It(e, s, r), r;
}
function Le(e, t) {
  const s = new $();
  return e.sort(Rt), e.forEach((i) => {
    ke(i) ? (Z(s, i.getCoords(t)), i.shapes.forEach((n) => {
      const o = n.getCoords(t);
      Z(s, o, "group");
    })) : Z(s, i.getCoords(t));
  }), s.points.forEach((i) => {
    i.stock = t.getStock;
  }), s;
}
function Te(e = [], t, s) {
  const i = Le(e === null ? t : e, s);
  return Re(t, s, i);
}
function Rt(e, t) {
  return e.y === t.y ? t.x - e.x : t.y - e.y;
}
function Gt(e, t, s, i, n, o) {
  e.a = t.id, e.b = s ? s.id : null, e.direction = i, e.raycast = !0, e.type = n, e.corner = o;
}
function Ie(e, t) {
  if (e.saw.cutType !== "efficiency" || t.length <= 1)
    return null;
  let s = new $();
  const i = Lt(t, e);
  for (const r of t)
    for (const l of i) {
      if (l.shape.id === r.id)
        continue;
      const h = Object.values(l.rays).filter((c) => c !== void 0);
      for (const c of h)
        We(c, l.shape, r, s);
    }
  const o = e.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", a = t.reduce((r, l) => (o === "tb" ? r.x + r.l > l.x + l.l : r.y + r.w > l.y + l.w) ? r : l);
  return i.filter(({ shape: r }) => r.id === a.id).forEach(({ shape: r, rays: l }) => {
    const h = Object.values(l).filter((c) => c !== void 0);
    for (const c of h) {
      const d = new W(c.x2, c.y2);
      o === c.direction && (Gt(d, r, null, c.direction, "edge"), Y(s, d));
    }
  }), s = Me(s), s;
}
function Lt(e, t) {
  return e.map((s) => {
    const i = Pe(s, t);
    return {
      shape: s,
      rays: i
    };
  });
}
function We(e, t, s, i) {
  switch (e.direction) {
    case "rl":
      q(e, t, s, i, s.x + s.l);
      break;
    case "lr":
      q(e, t, s, i, s.x);
      break;
    case "tb":
      q(e, t, s, i, s.y + s.w);
      break;
    case "bt":
      q(e, t, s, i, s.y);
      break;
  }
}
function q(e, t, s, i, n) {
  const o = e.dimension === "w", a = o ? "y" : "x", r = o ? "x" : "y", l = o ? "l" : "w";
  if (e[`${r}1`] >= s[r] && e[`${r}1`] <= s[r] + s[l]) {
    const h = e.direction === "lr" && e[`${a}1`] <= n && e[`${a}2`] >= n, c = e.direction === "rl" && e[`${a}1`] >= n && e[`${a}2`] <= n, d = e.direction === "bt" && e[`${a}1`] <= n && e[`${a}2`] >= n, g = e.direction === "tb" && e[`${a}1`] >= n && e[`${a}2`] <= n;
    if (h || c || d || g) {
      const f = o ? e[`${r}1`] : n, v = o ? n : e[`${r}1`], L = new W(f, v), y = e.origin;
      Gt(L, t, s, e.direction, "shape", y), Y(i, L);
    }
  }
}
function Me(e) {
  const t = new $();
  return e.points.size === 0 || new Set(e.toArray().map((i) => i.a)).forEach((i) => {
    const n = e.toArray().filter((o) => o.a === i);
    ["right", "left", "top", "bottom"].forEach((o) => {
      const a = Be(n, o);
      a && Y(t, a);
    });
  }), t;
}
function Be(e, t) {
  return e.length === 0 ? null : e.reduce((s, i) => {
    switch (t) {
      case "left":
        return !s || i.x < s.x ? i : s;
      case "right":
        return !s || i.x > s.x ? i : s;
      case "top":
        return !s || i.y > s.y ? i : s;
      case "bottom":
        return !s || i.y < s.y ? i : s;
      default:
        return null;
    }
  }, null);
}
function Tt(e, t, s) {
  const i = new $(), n = t.getAvailableShapePositions(s), o = De(t, e, s), a = $e(o);
  for (const r of n) {
    let l;
    switch (r) {
      case "bottomLeft":
        l = a.cloneAt(a.x - e.l, a.y - e.w), l.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        l = a.cloneAt(a.x, a.y - e.w), l.shapePosition = "bottomRight";
        break;
      case "topLeft":
        l = a.cloneAt(a.x - e.l, a.y), l.shapePosition = "topLeft";
        break;
      case "topRight":
        l = a.cloneAt(a.x, a.y), l.shapePosition = "topRight";
        break;
      default:
        continue;
    }
    Y(i, l);
  }
  return It(e, s, i), i;
}
function $e(e) {
  if (e instanceof H)
    return e;
  const t = new H(e.x, e.y, e.z);
  return e.a !== void 0 && (t.a = e.a), e.b !== void 0 && (t.b = e.b), e.stock && (t.stock = e.stock), e.direction && (t.direction = e.direction), e.type && (t.type = e.type), e.corner && (t.corner = e.corner), e.shapePosition && (t.shapePosition = e.shapePosition), e.grid && (t.grid = e.grid), e.raycast && (t.raycast = e.raycast), e.collision && (t.collision = e.collision), e.tooClose && (t.tooClose = e.tooClose), e.adjustedForMinSpacing && (t.adjustedForMinSpacing = e.adjustedForMinSpacing), t;
}
function De(e, t, s) {
  if (s.saw.cutType !== "efficiency")
    return e;
  const i = t.getMinSpacing(s.saw), n = s.bladeWidth;
  if (!i || i === n)
    return e;
  let o;
  if (!e.grid)
    return e;
  switch (e.grid) {
    case "bottom":
      o = e.cloneAt(e.x, e.y - i + n);
      break;
    case "top":
      o = e.cloneAt(e.x, e.y + i - n);
      break;
    case "left":
      o = e.cloneAt(e.x - i + n, e.y);
      break;
    case "right":
      o = e.cloneAt(e.x + i - n, e.y);
      break;
  }
  return o ? (o.x < 0 && (o.x = 0), o.y < 0 && (o.y = 0), o.adjustedForMinSpacing = !0, o) : e;
}
function It(e, t, s) {
  let i, n, o, a;
  t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (i = 0, n = 0, o = t.x + t.l - e.l, a = t.y + t.w - e.w) : (i = t?.trim?.w1 ?? 0, n = t?.trim?.l1 ?? 0, o = t.l - (t?.trim?.w2 ?? 0) - e.l, a = t.w - (t?.trim?.l2 ?? 0) - e.w);
  const r = s.toArray();
  for (let l = r.length; l--; ) {
    const h = r[l];
    (M.lessThan(h.x, i) || M.lessThan(h.y, n) || M.greaterThan(h.x, o) || M.greaterThan(h.y, a) || h.x < 0 || h.y < 0) && s.remove(h.x, h.y);
  }
}
function Oe(e) {
  const t = e.x, s = e.x + e.l, i = R().domain([t, s]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(s)]), n = e.y, o = e.y + e.w, a = R().domain([n, o]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(o)]), r = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).call(et(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + r})`).attr("class", "axis shape x").call(et(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), e?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - r}, 0)`).call(st(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - r}, 0)`).attr("class", "axis shape y").call(st(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Fe() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(ye(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const e = this.requiresStretch(this.props.stock.value);
  (!e || e && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(xe(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function Wt(e, t, s) {
  !s || !e?.length || e.forEach((i, n) => {
    const [o, a] = i;
    s === "x" ? Ne.call(this, o, a, t[n]) : Ee.call(this, o, a, t[n]);
  });
}
function Ne(e, t, s) {
  const i = R().domain([e, t]).range([
    this.scales.xPositionScale(e),
    this.scales.xPositionScale(t)
  ]), n = Mt(i.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(et(i).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(s)));
  o.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (a, r, l) => l[r]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(o);
}
function Ee(e, t, s) {
  const i = R().domain([e, t]).range([
    this.scales.yPositionScale(e),
    this.scales.yPositionScale(t)
  ]), n = Mt(i.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(st(i).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(s)));
  He(o), this.axes.cutMeasurementYAxes.push(o);
}
function Mt(e) {
  return (e[1] - e[0]) / 2 + e[0];
}
function He(e) {
  e.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (t, s, i) => i[s]?.getBBox()?.height + 10).attr("dx", (t, s, i) => i[s]?.getBBox()?.width / 4).attr("transform", (t, s, i) => "rotate(90) translate(" + i[s]?.getBBox()?.width / 4 + ")");
}
function j() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function je() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Q() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function nt(e) {
  return e.autoId;
}
function Ye(e, t) {
  const s = /* @__PURE__ */ new Set();
  function i(n) {
    if (!(!n || s.has(n.autoId))) {
      if (s.add(n.autoId), n.autoId === t)
        return n;
      if (n.children && Array.isArray(n.children)) {
        for (const o of n.children)
          if (o && o.autoId !== n.autoId) {
            const a = i(o);
            if (a) return a;
          }
      }
    }
  }
  return i(e);
}
function tt({ parent: e, near: t, far: s, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const n = [e, t, s, ...i].filter((o) => o);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(n, nt).join(
    (o) => o.append("rect").attr("class", "segment").call((a) => ht.call(this, a)),
    (o) => o.call((a) => ht.call(this, a)),
    (o) => o.remove()
  ), this.state.env === "development" && Xe.call(this, n), !this.settings.app && this.state.env === "development" && ze.call(this);
}
function ht(e) {
  return e.classed("offcut", (t) => t.offcut).classed("near", (t) => t.type === "near").classed("far", (t) => t.type === "far").classed("parent", (t, s) => t.id !== "root" && s === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function Xe(e) {
  this.selections.segmentGroup.selectAll("text").data(e, nt).join(
    (t) => t.append("text").attr("class", "segment-text").call((s) => ut.call(this, s)),
    (t) => t.call((s) => ut.call(this, s)),
    (t) => t.remove()
  );
}
function ut(e) {
  return e.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function ze() {
  this.selections.segmentRectangles.on("mousedown", function(e, t) {
    console.log("segment", `[${t?.parentId || "-"}]->[${t.id}] {P${t.phase}} ${t.l}x${t.w} ${t.cutDirection} ${t.hasHeadCut ? "HEAD" : "NORM"}`), console.log(t);
  });
}
function Bt(e) {
  const t = e?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let s;
  if (t) {
    for (const n of this.props.segments.value)
      if (s = Ye(n, t), s) break;
  } else {
    const n = e?.stock?.autoId;
    s = this.props.segments.value.find((o) => o.stock?.autoId === n);
  }
  if (s === void 0)
    return !1;
  const i = s?.children;
  return i?.length ? {
    parent: s,
    children: i
  } : !1;
}
function $t(e, t = []) {
  if (!e) return t;
  if (e.offcut && t.push(e), e.children && Array.isArray(e.children))
    for (const s of e.children)
      $t(s, t);
  return t;
}
function Ue() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const e = [];
  for (const s of this.props.segments.value)
    $t(s, e);
  if (!e.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const t = (s) => s.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(e, nt).join(
    (s) => s.append("rect").attr("class", "segment offcut").call(t),
    (s) => s.call(t),
    (s) => s.remove()
  );
}
const { currentCutIndex: qe } = Ct();
function Ve() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (e, t) => t).join(
    (e) => e.append("line").attr("class", "cut").call((t) => dt.call(this, t)),
    (e) => e.call((t) => dt.call(this, t)),
    (e) => e.remove()
  ), Ft.call(this));
}
function dt(e) {
  return e.attr("stroke-width", (t) => {
    const s = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return s < 1 ? 1 : Math.ceil(s);
  }).attr("x1", (t) => {
    let s = t.x1;
    if (t.isTrim && t.stock?.cutType === "beam") {
      const i = this.getBladeWidth(t.stock) / 2;
      t.x1 === t.x2 && (s = t.x1 < t.stock.l / 2 ? t.x1 - i : t.x1 + i);
    }
    return this.scales.xPositionScale(s);
  }).attr("x2", (t) => {
    let s = t.x2;
    if (t.isTrim && t.stock?.cutType === "beam") {
      const i = this.getBladeWidth(t.stock) / 2;
      t.x1 === t.x2 && (s = t.x2 < t.stock.l / 2 ? t.x2 - i : t.x2 + i);
    }
    return this.scales.xPositionScale(s);
  }).attr("y1", (t) => {
    let s = t.y1;
    if (t.isTrim && t.stock?.cutType === "beam") {
      const i = this.getBladeWidth(t.stock) / 2;
      t.y1 === t.y2 && (s = t.y1 < t.stock.w / 2 ? t.y1 - i : t.y1 + i);
    }
    return this.scales.yPositionScale(s);
  }).attr("y2", (t) => {
    let s = t.y2;
    if (t.isTrim && t.stock?.cutType === "beam") {
      const i = this.getBladeWidth(t.stock) / 2;
      t.y1 === t.y2 && (s = t.y2 < t.stock.w / 2 ? t.y2 - i : t.y2 + i);
    }
    return this.scales.yPositionScale(s);
  }).classed("trim", (t) => t.isTrim).classed("head", (t) => t.isHead);
}
function Dt(e, t, s) {
  return e.guillotineState.parentSegmentID === t && s && e.guillotineState.segmentCutOrder < s;
}
function Ot(e, t) {
  return e.guillotineState?.parentSegmentID !== null && !e?.isTrim ? e.guillotineState.parentSegmentID === t : !1;
}
function _e(e, t, s) {
  this.selections.cutLines.style("visibility", (i) => typeof e.guillotineState?.[s] == "number" && typeof i.guillotineState?.[s] == "number" && i.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, n) => n === t);
}
function Je(e, t, s, i) {
  this.selections.cutLines.style("visibility", (o) => typeof e.guillotineState[s] == "number" && o.guillotineState[s] <= e.guillotineState[s] || !i && o.guillotineState.parentSegmentID === t ? "visible" : "hidden"), qe.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o) => typeof e.guillotineState[s] == "number" && o.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o) => typeof e.guillotineState[s] == "number" && o.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o) => e.stock.cutType === "guillotine" && o.isTrim ? o.position === e.type : o.guillotineState[s] === e.guillotineState[s]), this.selections.cutLines.classed("ptx-dummy", (o) => o?.ptxData?.isDummy), i || Qe.call(this, e, t);
}
function Ze(e, t, s, i, n) {
  this.selections.cutLines.style("visibility", (a, r) => r <= t ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a, r) => r <= t ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a, r) => r <= t ? "visible" : "hidden"));
  let o;
  if (e?.dimension === "l" ? o = [
    [0 + (s.l1 ?? 0), e.y1 - n],
    [e.y1 + n, e.stock.w - (s?.y2 ? s.y2 : 0)]
  ] : e?.dimension === "w" && (o = [
    [0 + (s.w1 ?? 0), e.x1 - n],
    [e.x1 + n, e.stock.l - (s?.x2 ? s.x2 : 0)]
  ]), o?.length) {
    const a = [
      o[0][1] - o[0][0],
      o[1][1] - o[1][0]
    ];
    this.state.device === "desktop" && !e.isTrim && Wt.call(this, o, a, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a, r) => r === t);
}
function Ft() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (e) => {
    const t = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return Math.max(1, Math.ceil(t));
  }), j.call(this), Q.call(this);
}
function Qe(e, t) {
  const s = e?.guillotineState?.segmentCutOrder;
  if (s == null) return;
  this.selections.cutLines.classed("completed", (d) => Dt(d, t, s)), this.selections.cutLines.classed("inside-segment", (d) => Ot(d, t));
  const i = Bt.call(this, e);
  if (i === !1) return;
  const { parent: n, children: o } = i, { near: a } = Nt(e, o);
  if (!a) return;
  let r = [], l;
  const h = this.getHalfBladeWidth(e.stock), c = e.dimension === "l" ? "y" : "x";
  e?.dimension === "l" ? (r = [
    [
      a.y,
      a.y + a.w
    ],
    [
      e.y1 + h,
      n.y + n.w
    ]
  ], l = [e?.distances?.bottom, e?.distances.top]) : e?.dimension === "w" && (r = [
    [
      a.x,
      a.x + a.l
    ],
    [
      e.x1 + h,
      n.x + n.l
    ]
  ], l = [e?.distances?.left, e?.distances?.right]), this.state.device === "desktop" && !e.isTrim && l && Wt.call(this, r, l, c);
}
function Ke(e = null, t = "") {
  if (e === null || this.selections.cutLines.empty()) return;
  const s = this.props.cuts.value[e];
  if (!s) return;
  if (j.call(this), Q.call(this), e !== null && e >= 0 && e < this.selections.cutLines.size()) {
    const f = this.selections.cutLines.nodes()[e].parentElement;
    if (!f) return;
    b(f).raise();
  }
  const i = s.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(s.stock), o = s.dimension === "l" ? "y" : "x", a = s?.stock?.trim, r = t === "ptx" ? "ptxOrder" : "order";
  if (s.isTrim && ["guillotine", "beam"].includes(s?.stock?.cutType)) {
    _e.call(this, s, e, r), ft.call(this, s, e, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(s?.stock?.cutType) && i !== null && typeof i < "u" ? Je.call(this, s, i, r, t) : Ze.call(this, s, e, a, o, n), ft.call(this, s, e, i), t === "ptx") {
    this.removeSegments();
    return;
  }
  const l = Bt.call(this, s);
  if (l === !1)
    return;
  const { parent: h, children: c } = l;
  if (!s?.guillotineState?.parentSegmentID)
    return tt.call(this, { parent: h });
  if (s.stock?.cutType === "beam" && h.phase === 0) {
    const v = this.props.segments.value.find((k) => k.stock?.autoId === s.stock?.autoId)?.children || c, L = v.find((k) => k.offcut === !0 && k.y === 0 && k.isTrimOffcut === !0), y = v.find((k) => k.offcut === !0 && k !== L && k.y + k.w >= s.stock.w - (s.stock.trim?.l2 || 0)), A = v.filter((k) => !k.offcut), w = A.find((k) => k.type === "near"), P = A.find((k) => k.type === "far"), S = [L, y].filter(Boolean);
    return tt.call(this, { parent: h, near: w, far: P, offcuts: S });
  }
  const { near: d, far: g, offcuts: x } = Nt(s, c);
  tt.call(this, { parent: h, near: d, far: g, offcuts: x });
}
function Nt(e, t) {
  const s = e.dimension === "l" ? "y" : "x", i = e.dimension === "l" ? "w" : "l", n = e.stock?.cutType === "beam";
  let o, a;
  if (n)
    o = t.find((l) => l.type === "near" && !l.offcut), a = t.find((l) => l.type === "far" && !l.offcut);
  else {
    const h = e[s + "1"], c = e.stock.halfBladeWidth;
    o = t.find((d) => d.type === "near" && Math.abs(d[s] + d[i] - (h - c)) < 1e-6), a = t.find((d) => d.type === "far" && Math.abs(d[s] - (h + c)) < 1e-6);
  }
  const r = t.filter((l) => l.offcut === !0 && l !== o && l !== a);
  return { near: o, far: a, offcuts: r };
}
function ft(e, t, s) {
  this.selections.cutLines.attr("stroke-width", (i, n) => {
    const o = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let a = Math.max(1, Math.ceil(o));
    const r = e?.guillotineState?.segmentCutOrder;
    return (Dt(i, s, r) || Ot(i, s)) && (a += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (a = 5), a;
  });
}
function ts() {
  if (!this.settings.main || !this.props.cuttingPlan?.value) return;
  const e = this.props.cuttingPlan.value;
  if (!e.contours?.length) return;
  this.selections.cuttingPathGroup || (this.selections.cuttingPathGroup = this.selections.svgCanvas.append("g").attr("class", "cutting-path")), this.selections.cuttingPathGroup.selectAll("*").remove();
  const t = this.scales.xPositionScale, s = this.scales.yPositionScale;
  let i = null;
  e.contours.forEach((n, o) => {
    const a = n.leadIn.length > 0 ? n.leadIn[0] : n.contour[0];
    if (!a) return;
    i && o > 0 && this.selections.cuttingPathGroup.append("line").attr("x1", t(i.x)).attr("y1", s(i.y)).attr("x2", t(a.x)).attr("y2", s(a.y)).attr("stroke", "#000").attr("stroke-width", 0.5).attr("stroke-dasharray", "2,3").attr("fill", "none"), i = n.leadOut.length > 0 ? n.leadOut[n.leadOut.length - 1] : n.contour.length > 0 ? n.contour[n.contour.length - 1] : a;
  }), e.contours.forEach((n) => {
    const o = [
      ...n.leadIn,
      ...n.contour,
      ...n.leadOut
    ];
    if (o.length < 2) return;
    const a = o.map(
      (r, l) => `${l === 0 ? "M" : "L"} ${t(r.x)} ${s(r.y)}`
    ).join(" ");
    this.selections.cuttingPathGroup.append("path").attr("d", a).attr("stroke", "#ff00ff").attr("stroke-width", 1).attr("fill", "none");
  });
}
function es(e) {
  if (this.selections.cuttingPathGroup) {
    if (e === null) {
      this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", 1);
      return;
    }
    this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", (t, s) => s <= e ? 1 : 0.15), this.selections.cuttingPathGroup.selectAll(".contour").classed("active", (t, s) => s === e);
  }
}
function ss() {
  Et.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const G = /* @__PURE__ */ new WeakMap();
function is(e, t, s) {
  const i = [];
  let n = 0, o = t(0), a = s(0);
  const r = (l, h, c) => {
    const d = l - o, g = h - a;
    n += Math.sqrt(d * d + g * g), i.push({ sx: l, sy: h, type: c, cumDist: n }), o = l, a = h;
  };
  return i.push({ sx: o, sy: a, type: "rapid", cumDist: 0 }), e.contours.forEach((l, h) => {
    const c = l.leadIn.length > 0 ? l.leadIn[0] : l.contour[0];
    if (!c) return;
    r(t(c.x), s(c.y), "rapid");
    const d = [
      ...l.leadIn,
      ...l.contour,
      ...l.leadOut
    ];
    for (let g = 1; g < d.length; g++) {
      const x = d[g];
      r(t(x.x), s(x.y), "cutting");
    }
  }), i;
}
function ns(e, t) {
  if (t <= 0) return { sx: e[0].sx, sy: e[0].sy, type: e[0].type };
  for (let i = 1; i < e.length; i++)
    if (e[i].cumDist >= t) {
      const n = e[i - 1], o = e[i], a = o.cumDist - n.cumDist;
      if (a === 0) return { sx: o.sx, sy: o.sy, type: o.type };
      const r = (t - n.cumDist) / a;
      return {
        sx: n.sx + (o.sx - n.sx) * r,
        sy: n.sy + (o.sy - n.sy) * r,
        type: o.type
      };
    }
  const s = e[e.length - 1];
  return { sx: s.sx, sy: s.sy, type: s.type };
}
function os() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const e = this.props.cuttingPlan.value;
  if (!e.contours?.length) return;
  let t = G.get(this);
  if (!t || !t.waypoints.length) {
    const o = this.scales.xPositionScale, a = this.scales.yPositionScale, r = is(e, o, a);
    if (r.length < 2) return;
    const l = r[r.length - 1].cumDist;
    t = {
      waypoints: r,
      totalDistance: l,
      progress: 0,
      playing: !0,
      speed: 1 / 8,
      // complete full path in ~8 seconds
      rafId: null,
      lastTime: null
    }, G.set(this, t);
  } else
    t.playing = !0, t.lastTime = null;
  this.selections.cuttingPathGroup.select(".cutting-path-dot").empty() && this.selections.cuttingPathGroup.append("circle").attr("class", "cutting-path-dot").attr("r", 4).attr("fill", "#000").attr("stroke", "#fff").attr("stroke-width", 1.5), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-cut").attr("fill", "none").attr("stroke-width", 2).attr("stroke", "#000").attr("opacity", 0.6), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-rapid").attr("fill", "none").attr("stroke-width", 1.5).attr("stroke", "#000").attr("stroke-dasharray", "2,3").attr("opacity", 0.6);
  const i = this, n = (o) => {
    if (!t.playing) return;
    t.lastTime === null && (t.lastTime = o);
    const a = (o - t.lastTime) / 1e3;
    t.lastTime = o, t.progress += t.speed * a, t.progress >= 1 && (t.progress = 1, t.playing = !1);
    const r = t.progress * t.totalDistance, l = ns(t.waypoints, r);
    i.selections.cuttingPathGroup.select(".cutting-path-dot").attr("cx", l.sx).attr("cy", l.sy).attr("fill", "#000");
    let c = "", d = "", g = null;
    for (let x = 0; x < t.waypoints.length; x++) {
      const f = t.waypoints[x];
      if (f.cumDist > r) break;
      f.type === "cutting" ? ((!g || g.type !== "cutting") && (c += ` M ${g ? g.sx : f.sx} ${g ? g.sy : f.sy}`), c += ` L ${f.sx} ${f.sy}`) : ((!g || g.type !== "rapid") && (d += ` M ${g ? g.sx : f.sx} ${g ? g.sy : f.sy}`), d += ` L ${f.sx} ${f.sy}`), g = f;
    }
    t.progress < 1 && g && (l.type === "cutting" ? c += ` L ${l.sx} ${l.sy}` : d += ` L ${l.sx} ${l.sy}`), i.selections.cuttingPathGroup.select(".cutting-path-trail-cut").attr("d", c), i.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").attr("d", d), t.playing && (t.rafId = requestAnimationFrame(n));
  };
  t.rafId && cancelAnimationFrame(t.rafId), t.rafId = requestAnimationFrame(n);
}
function as() {
  const e = G.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), e.lastTime = null);
}
function Et() {
  const e = G.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), G.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function ls() {
  const e = G.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), e.lastTime = null), G.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function rs() {
  return G.get(this)?.playing ?? !1;
}
function cs(e) {
  const t = G.get(this);
  t && (t.speed = e);
}
function hs(e) {
  if (console.log("[Diagram] drawPositions called:", {
    shapeId: e?.id,
    shapeRot: e?.rot,
    stockId: this.props.stock?.value?.id,
    hasStock: !!this.props.stock,
    isMain: this.settings.main
  }), !this.props.stock)
    return console.warn("[Diagram] drawPositions: no stock"), !1;
  if (!e || !this.settings.main)
    return console.warn("[Diagram] drawPositions: no shape or not main", {
      hasShape: !!e,
      isMain: this.settings.main
    }), !1;
  let t;
  const s = e.willItFit(this.props.stock.value, e.rot);
  if (console.log("[Diagram] drawPositions: willItFit check:", {
    willFit: s,
    shapeL: e.l,
    shapeW: e.w,
    shapeRot: e.rot,
    stockL: this.props.stock.value.l,
    stockW: this.props.stock.value.w
  }), !s) return !1;
  const i = Te(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let n;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let a = function(c) {
        return `${c.x1}-${c.y1}-${c.x2}-${c.y2}`;
      }, r = function(c) {
        c.attr("class", "ray").attr("x1", (d) => this.scales.xPositionScale(d.x1)).attr("x2", (d) => this.scales.xPositionScale(d.x2)).attr("y1", (d) => this.scales.yPositionScale(d.y1)).attr("y2", (d) => this.scales.yPositionScale(d.y2));
      };
      if (this.state.env !== "development") return;
      const h = Lt(this.props.shapes.value, this.props.stock.value).flatMap((c) => Object.values(c.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(h, a).join(
        (c) => c.append("line").call((d) => r.call(this, d)),
        (c) => c.call((d) => r.call(this, d)),
        (c) => c.remove()
      );
    }
    n = Ie(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const o = new $();
  for (const a of i.toArray()) {
    const r = Tt(e, a, this.props.stock.value);
    r && o.addPoints(r.toArray());
  }
  if (n) {
    const a = n.toArray();
    for (const r of a) {
      const l = Ge(e, r, this.props.stock.value);
      l && o.addPoints(l.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const a = this.props.stock.value;
    [
      new W(a.trim.w1 ?? 0, a.trim.l1 ?? 0),
      new W(a.trim.w1 ?? 0, a.trim.l1 ?? 0),
      new W(
        a.l - e.l - (a.trim.w2 ?? 0),
        a.trim.l1 ?? 0
      ),
      new W(
        a.trim.w1 ?? 0,
        a.w - e.w - (a.trim.l2 ?? 0)
      ),
      new W(
        a.l - e.l - (a.trim.w2 ?? 0),
        a.w - e.w - (a.trim.l2 ?? 0)
      )
    ].forEach((r) => o.add(r)), t = o.toArray();
  } else {
    const a = this.props.stock.value;
    o.add(new W(a.trim.w1 ?? 0, a.trim.l1 ?? 0)), t = o.toArray();
  }
  for (let a = t.length; a--; ) {
    const r = t[a];
    e.x = r.x, e.y = r.y;
    for (const l of this.props.shapes.value)
      if (this.collision(e, l, this.props.stock.value)) {
        t.splice(a, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", t?.length), us.call(this, t, e), ds.call(this, t, e), t?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function us(e, t) {
  function s(n) {
    return `${n.x}-${n.y}`;
  }
  function i(n, o) {
    n.attr("data-id", (a, r) => r).attr("class", "shape ghost").attr("x", (a) => (o.x = a.x, this.getRectangleCoordinate(o, "x"))).attr("y", (a) => (o.y = a.y, this.getRectangleCoordinate(o, "y"))).attr("width", this.getWidthAttribute(o)).attr("height", this.getHeightAttribute(o)).on("mousedown", (a, r) => {
      console.log("[Diagram] ghostShape mousedown (position click):", {
        shapeId: o.id,
        shapeParentId: o.parentId,
        position: { x: r.x, y: r.y },
        shapeRot: o.rot
      }), this.callbacks.onMoveShape(o, r);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(e, s).join(
    (n) => n.append("rect").call((o) => i.call(this, o, t)),
    (n) => n.call((o) => i.call(this, o, t)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), b(this).classed("hover", !0), b(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), b(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function ds(e, t) {
  function s(n) {
    return `${n.x}-${n.y}`;
  }
  function i(n) {
    n.attr("class", "dot").attr("cx", (o) => this.scales.xPositionScale(o.x)).attr("cy", (o) => this.scales.yPositionScale(o.y)).attr("r", 6).on("mousedown", (o, a) => {
      this.callbacks.onMoveShape(t, a);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(e, s).join(
    (n) => n.append("circle").call((o) => i.call(this, o)),
    (n) => n.call((o) => i.call(this, o)),
    (n) => n.remove()
  ), t.x = 0, t.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), b(this).classed("hover", !0);
      const o = b(this).attr("data-id"), a = b(`.ghost[data-id="${o}"]`);
      a.raise(), a.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), b(this).classed("hover", !1);
      const o = b(this).attr("data-id");
      b(`.ghost[data-id="${o}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function I(e) {
  return e?.color ? pe(e.color) : this.config.colors.text.toString();
}
function V(e) {
  return e.outline && Array.isArray(e.outline) && e.outline.length >= 3;
}
function fs() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((e) => V(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text id").text((t) => pt.call(this, t)).classed("hidden", (t, s, i) => this.isTextHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (e) => e.classed("hidden", !1).text((t) => pt.call(this, t)).classed("hidden", (t, s, i) => this.isTextHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((e) => V(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text name").text((t) => gt.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, s, i) => this.isNameHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const n = i[s];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (e) => e.classed("hidden", !1).text((t) => gt.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, s, i) => this.isNameHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const n = i[s];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((e) => V(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text length").text((t) => mt.call(this, t)).classed("hidden", (t, s, i) => this.isLengthHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const o = i[s].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(o / 2 + 2));
    }),
    (e) => e.classed("hidden", !1).text((t) => mt.call(this, t)).classed("hidden", (t, s, i) => this.isLengthHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const o = i[s].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(o / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((e) => V(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text width").text((t) => yt.call(this, t)).classed("hidden", (t, s, i) => this.isWidthHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("transform", (t, s, i) => {
      const n = i[s], o = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), a = this.getRectangleCoordinate(t, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${a}) rotate(${r})`;
    }),
    (e) => e.classed("hidden", !1).text((t) => yt.call(this, t)).classed("hidden", (t, s, i) => this.isWidthHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("transform", (t, s, i) => {
      const n = i[s], o = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), a = this.getRectangleCoordinate(t, "y", "center"), r = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${a}) rotate(${r})`;
    })
  );
}
function pt(e) {
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const t = e.guillotineState.myStripDirection, s = e.group.addedAsGroup;
          let i = "";
          if (t === "l" ? i = `→ ${e.id}` : t === "w" && (i = `↑ ${e.id}`), e?.priority?.[e?.stock?.parentId] && (i += "P"), s && (i += "G"), i.length) return i;
        }
        break;
      case "groups":
        {
          const t = e.group.reference, s = e.group.addedAsGroup;
          let i = null;
          if (t?.id ? i = t.id : s && (i = s.id.split(".")[0]), i) {
            const n = i.replace(/-[hv]$/, "").toUpperCase();
            return i.endsWith("-h") ? `→ ${n}` : i.endsWith("-v") ? `↑ ${n}` : n;
          }
        }
        break;
      case "positions":
        return e.id;
      case "placementOrder":
        return e.placementOrder?.toString() || "";
    }
  return e.parentId, e.parentId;
}
function gt(e) {
  return !e?.name || typeof e?.name != "string" ? null : e.name.toUpperCase().trim();
}
function mt(e) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : it({ v: e.l, o: this.numberConfig }).toString();
}
function yt(e) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : it({ v: e.w, o: this.numberConfig }).toString();
}
function ps() {
  const e = this.props.shapes.value;
  if (!e?.length) {
    this.removeGroups();
    return;
  }
  const t = /* @__PURE__ */ new Map();
  for (const i of e) {
    const n = i?.group?.addedAsGroup;
    if (!n || !(typeof n == "object" ? n.__entityType === "userGroup" || n.type === "user" : i?.group?.reference?.type === "user")) continue;
    const a = typeof n == "string" ? n : n.autoId || n.id;
    a && (t.has(a) || t.set(a, []), t.get(a).push(i));
  }
  if (t.size === 0) {
    this.removeGroups();
    return;
  }
  const s = [];
  for (const [, i] of t) {
    const n = Math.min(...i.map((l) => l.x)), o = Math.min(...i.map((l) => l.y)), a = Math.max(...i.map((l) => l.x + l.l)) - n, r = Math.max(...i.map((l) => l.y + l.w)) - o;
    s.push({ x: n, y: o, l: a, w: r, shapes: i });
  }
  this.initGroups(s);
}
const gs = (e) => e.id;
function ms() {
  if (!this.props.containerWidth) return;
  j.call(this);
  const e = this.props.shapes.value.reduce((t, s) => {
    const i = parseInt(s.parentId);
    return i > t ? i : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, e]), this.state.env === "development" && xs.call(this), ys.call(this), ps.call(this);
}
function ys() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, gs).join(
    (e) => {
      const t = e.append("g").attr("class", "shape-group");
      return xt.call(this, t), bt.call(this, t), t.on("mousedown", vt.bind(this)), t;
    },
    (e) => (xt.call(this, e), bt.call(this, e), e.on("mousedown", vt.bind(this)), e),
    (e) => e.remove()
  ), Cs.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => fs.call(this)), this.selections.shapeWrappers.size() > 0;
}
function xs() {
  let e = 1 / 0, t = -1 / 0;
  for (const n of this.props.shapes.value) {
    const o = n?.bestScore?.total;
    if (o !== 0 && o !== null && o !== void 0) {
      e = o, t = o;
      break;
    }
  }
  const s = this.props.shapes.value.reduce((n, o) => {
    const a = o?.bestScore?.total;
    return a === 0 || a === null || a === void 0 ? n : a < n ? a : n;
  }, e), i = this.props.shapes.value.reduce((n, o) => {
    const a = o?.bestScore?.total;
    return a == null ? n : a > n ? a : n;
  }, t);
  this.scales.scoreColorScale = J([C(251, 224, 255), C(122, 0, 138)]).domain([s, i]);
}
function bs(e) {
  return e.outline && Array.isArray(e.outline) && e.outline.length >= 3;
}
function vs(e, t) {
  const s = t.outline;
  if (!s || s.length < 3) return "";
  const i = t.nestingRotation || 0, n = t.placementOutline && t.placementOutline.length >= 3 ? t.placementOutline : s;
  let o;
  if (t.holes?.length) {
    let y = 1 / 0, A = 1 / 0, w = -1 / 0, P = -1 / 0;
    for (const S of s)
      S.x < y && (y = S.x), S.y < A && (A = S.y), S.x > w && (w = S.x), S.y > P && (P = S.y);
    o = [
      { x: y, y: A },
      { x: w, y: A },
      { x: w, y: P },
      { x: y, y: P },
      { x: y, y: A }
    ];
  } else
    o = s;
  const a = [o];
  if (t.holes?.length)
    for (const y of t.holes)
      y.length >= 3 && a.push(y);
  let r = 0, l = 0;
  for (const y of n)
    r += y.x, l += y.y;
  r /= n.length, l /= n.length;
  const h = Math.cos(i), c = Math.sin(i), d = (y) => y.map((A) => {
    if (i === 0) return { x: A.x, y: A.y };
    const w = A.x - r, P = A.y - l;
    return {
      x: h * w - c * P + r,
      y: c * w + h * P + l
    };
  }), g = a.map(d), x = n === s ? t.holes?.length ? d(s) : g[0] : d(n);
  let f = 1 / 0, v = 1 / 0;
  for (const y of x)
    y.x < f && (f = y.x), y.y < v && (v = y.y);
  return g.map((y) => y.map((w) => ({
    x: e.scales.xPositionScale(w.x - f + (t.x || 0)),
    y: e.scales.yPositionScale(w.y - v + (t.y || 0))
  })).map(
    (w, P) => (P === 0 ? "M" : "L") + ` ${w.x} ${w.y}`
  ).join(" ") + " Z").join(" ");
}
function xt(e) {
  const t = this;
  e.selectAll(".shape").remove(), e.each(function(i) {
    const n = b(this);
    bs(i) ? n.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (o) => vs(t, o)).attr("fill-rule", "evenodd").style("fill", (o) => O.call(t, o)) : n.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (o) => t.getRectangleCoordinate(o, "x")).attr("y", (o) => t.getRectangleCoordinate(o, "y")).attr("width", (o) => t.getWidthAttribute(o)).attr("height", (o) => t.getHeightAttribute(o)).style("fill", (o) => O.call(t, o));
  });
  const s = e.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = be(
    this.selections.shapeRectangles.nodes().concat(s.nodes())
  ) : this.selections.shapeRectangles = s;
}
function bt(e) {
  !this.settings.main || this.settings.app || this.state.hasTouch || e.on("mouseover", (t) => {
    if (this?.props.moveMode && this.state.moving) return;
    const s = b(t.target);
    s.classed("hover", !0), s.classed("selected") || s.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (t, s) => {
    const i = b(t.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", O.call(this, s));
  }, { passive: !0 });
}
function vt(e, t) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Ss.call(this, e, t), (this.settings.app || this.settings.embed) && As.call(this, e, t), this.state.device === "desktop" && !this.props.moveMode.value && (Q.call(this), Oe.call(this, t)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: t.id
  }), this.callbacks.onAddToPartsBin(t)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: t.id
  }), this.findShape.call(this, t.id));
}
function Ss(e, t) {
  if (t) {
    let s;
    switch (this.state.debug) {
      case "guillotine":
        s = [
          "id",
          "placementOrder",
          "priority",
          "guillotineState.myPhase",
          "guillotineState.myStripDirection",
          "guillotineState.myStripParent.id",
          "group.addedAsGroup"
        ], ws.call(this, t);
        break;
      case "groups":
        s = ["id", "placementOrder", "group.addedAsGroup", "group.reference"];
        break;
      case "score":
        s = ["id", "placementOrder", "bestScore.score"];
        break;
      default:
        s = ["id", "placementOrder", "priority", "group.addedAsGroup", "bestScore.score", "upDirection"];
    }
    console.table(ks(t, s));
  }
}
function ks(e, t) {
  return t.reduce((s, i) => {
    const n = Is(e, i);
    return s[i] = Array.isArray(n) ? n.join(", ") : n, s;
  }, {});
}
function ws(e) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = e.guillotineState?.myStripParent;
  t && this.selections.shapeWrappers.filter((n) => n.id === t || n.group.addedAsGroup === t).select(".shape").classed("highlight-a", !0);
  const s = this.props.shapes.value.find((i) => i.id === t)?.guillotineState?.myStripParent;
  s && this.selections.shapeWrappers.filter((n) => n.id === s || n.group.addedAsGroup === t).select(".shape").classed("highlight-b", !0);
}
function As(e, t) {
  if (this.settings.app || this.settings.embed) {
    const s = {
      name: t.name,
      id: t.id,
      x: t.x,
      y: t.y,
      l: t.l,
      w: t.w,
      banding: t?.extras?.banding && typeof t.extras.banding == "object" ? t.extras.banding : null,
      rot: t.rot,
      stock: t?.stock?.id,
      color: O.call(this, t),
      notes: t?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function O(e) {
  const t = C(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (e.group.addedAsGroup)
          return C(43, 156, 16);
        if (e.firstShape.isFirstShape)
          return C(255, 171, 231);
        if (typeof e.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], o = [176, 255, 231];
          return `rgb(${n.map((r, l) => Math.round(r + e.guillotineState.myPhase / 5 * (o[l] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (e.group.addedAsGroup)
          return C(43, 156, 16);
        break;
      case "priorityShapes":
        if (e?.priority && e.priority?.[e.stock.parentId])
          return C(139, 171, 46);
        break;
      case "placementOrder": {
        const n = this.props.shapes.value.reduce((o, a) => {
          const r = a.placementOrder ?? 0;
          return r > o ? r : o;
        }, 0);
        if (n > 0 && typeof e.placementOrder == "number") {
          const o = [0, 115, 255], a = [255, 50, 50], r = e.placementOrder / n;
          return `rgb(${o.map((h, c) => Math.round(h + r * (a[c] - h))).join(",")})`;
        }
        break;
      }
      case "score": {
        const n = e?.bestScore?.total ? this.scales.scoreColorScale(e.bestScore.total) : null;
        if (n != null && typeof n.toString == "function")
          return n;
        if (n != null && typeof n.r == "number" && typeof n.g == "number" && typeof n.b == "number")
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", e), C(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  if (e.color) {
    const n = C(e.color);
    if (n && !isNaN(n.r)) return n;
  }
  const s = parseInt(e.parentId);
  let i;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? i = this.scales.shapeColorScale(s) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), i = null), i != null && typeof i.toString == "function" ? i : i != null && typeof i.r == "number" && typeof i.g == "number" && typeof i.b == "number" ? C(i.r, i.g, i.b, i.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", e, i), t);
}
const St = 3;
function Ps(e) {
  const t = [];
  for (const s of e) {
    const i = s.extras?.banding;
    if (s.added && i?.sides) {
      const n = s.color ? ge(s.color) : "white";
      for (const [o, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(o)) continue;
        let r = o;
        if (s.rot) {
          const h = me({ [o]: !0 }, "cc");
          r = Object.keys(h)[0];
        }
        const l = Rs.call(this, s, r);
        l && t.push({ ...l, stroke: n });
      }
    }
  }
  return t;
}
function kt(e) {
  const t = St / 2;
  return e.attr("class", "banding").attr("x1", (s) => this.scales.xPositionScale(s.l1) + _.call(this, s.type, "x", t)).attr("x2", (s) => this.scales.xPositionScale(s.l2) + _.call(this, s.type, "x", t)).attr("y1", (s) => this.scales.yPositionScale(s.w1) + _.call(this, s.type, "y", t)).attr("y2", (s) => this.scales.yPositionScale(s.w2) + _.call(this, s.type, "y", t)).attr("stroke-width", St).attr("stroke", (s) => s.stroke);
}
function Cs(e) {
  if (!this.settings.main) return;
  const t = Ps.call(this, e);
  if (t.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t, (s, i) => i).join(
    (s) => s.append("line").call((i) => kt.call(this, i)),
    (s) => s.call((i) => kt.call(this, i)),
    (s) => s.remove()
  );
}
function _(e, t, s) {
  return {
    l1: { x: 0, y: (this.flipY, -s) },
    // length side 1 (bottom): move up in screen space (inward)
    l2: { x: 0, y: (this.flipY, s) },
    // length side 2 (top): move down in screen space (inward)
    w1: { x: this.flipX ? -s : s, y: 0 },
    // width side 1 (left): move right (inward)
    w2: { x: this.flipX ? s : -s, y: 0 }
    // width side 2 (right): move left (inward)
  }[e]?.[t] ?? 0;
}
function Rs(e, t) {
  const s = {
    l1: e.x,
    l2: e.x,
    w1: e.y,
    w2: e.y,
    type: t
  };
  switch (t) {
    case "l1":
      s.w1 = s.w2 = e.y, s.l2 = e.x + e.l;
      break;
    case "l2":
      s.w1 = s.w2 = e.y + e.w, s.l2 = e.x + e.l;
      break;
    case "w1":
      s.l1 = s.l2 = e.x, s.w2 = e.y + e.w;
      break;
    case "w2":
      s.l1 = s.l2 = e.x + e.l, s.w2 = e.y + e.w;
      break;
    default:
      return null;
  }
  return s;
}
function Gs(e) {
  this.selections.shapeWrappers.style("visibility", (t) => t?.placementOrder >= e ? "hidden" : "visible");
}
const wt = (e) => e.id;
function At(e) {
  return e.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Pt(e) {
  return e.style("fill", (t) => `url(#grain-${t.grain || "n"})`).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Ls() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Fe.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], wt).join(
    (e) => e.append("rect").attr("class", "background stock").call((t) => At.call(this, t)),
    (e) => e.call((t) => At.call(this, t)),
    (e) => e.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], wt).join(
    (e) => e.append("rect").attr("class", "stock-pattern").call((t) => Pt.call(this, t)),
    (e) => e.call((t) => Pt.call(this, t)),
    (e) => e.remove()
  );
}
function Ts(e) {
  return typeof e == "string" && e.length === 6 && !isNaN(+("0x" + e.replace("#", "")));
}
function Is(e, t) {
  return Ae(e, t);
}
class Ws {
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
  constructor(t) {
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = b(t.elementID), this.selections.el === null)) return;
    const s = this.selections.el.node();
    s !== null && (this.selections.htmlEl = s, this.scales = {
      xScale: R(),
      yScale: R(),
      yPositionScale: R(),
      xPositionScale: R(),
      yAxisScale: R(),
      measurementScale: R(),
      shapeColorScale: J(),
      scoreColorScale: J()
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
    }, this.props = t.props, this.settings = t.settings, this.options = t.options, this.callbacks = t.callbacks, this.numberConfig = t.numberConfig, this.initColors(t), this.initNumbers(t), this.init());
  }
  initColors(t) {
    const s = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, i = (n, o) => C("#" + (Ts(n?.replace("#", "")) ? n.replace("#", "") : o.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(s).map(([n, o]) => [
        n,
        i(t.colors?.[n], o)
      ])
    ), this.scales.shapeColorScale = J([
      this.config.colors.partA,
      this.config.colors.partB
    ]);
  }
  initNumbers(t) {
    this.numberConfig = t.numberConfig, (this.numberConfig.decimalPlaces === null || this.numberConfig.decimalPlaces === void 0 || isNaN(this.numberConfig.decimalPlaces)) && (this.numberConfig.decimalPlaces = 2), (this.numberConfig.fractionRoundTo === null || this.numberConfig.fractionRoundTo === void 0 || isNaN(this.numberConfig.fractionRoundTo)) && (this.numberConfig.fractionRoundTo = 0);
  }
  init() {
    this.state.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    const t = this.selections.htmlEl.querySelector("svg");
    if (t === null) {
      const s = this.selections.el.append("svg").attr("class", "vis");
      if (s === null) return;
      s.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), s.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), s.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), s.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "grain-n").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = s;
    } else
      this.selections.svgCanvas = b(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, s, i) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), s && (this.numberConfig.decimalPlaces = s), i && (this.numberConfig.fractionRoundTo = i));
  }
  formatNumber = (t) => {
    const s = it({
      v: t,
      o: this.numberConfig
    });
    if (s !== null) return s.toString();
  };
  trimNameToFit(t, s) {
    function i(n, o, a) {
      const r = a[o], l = b(r);
      l.text(n.name);
      let h = l.text();
      const c = l.node();
      if (!c) return;
      let d = c.getComputedTextLength();
      const g = this.getWidthAttribute(n) - 20;
      for (; d > g && h.length > 0; )
        h = h.slice(0, -1), l.text(h.length ? h + "..." : ""), d = l.node().getComputedTextLength();
    }
    t.each(i.bind(s));
  }
  setDevice() {
    if (!(!this.selections.htmlEl || this.selections.htmlEl.style.display === "none") && this.selections.htmlEl.offsetWidth) {
      if (this.props.containerWidth.value === 0) return !1;
      this.settings.main ? this.props.containerWidth.value <= this.state.mobileBreakpoint || this.settings.app ? (this.state.device = "mobile", this.state.padding = 0) : (this.state.device = "desktop", this.state.padding = 50) : this.state.padding = 0, this.state.w = this.props.containerWidth.value;
    }
  }
  // find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const t = this.props.stockList.value.filter((n) => n.used);
    if (!t) return [null, null];
    const s = t.reduce((n, o) => n.l > o.l ? n : o), i = t.reduce((n, o) => n.w > o.w ? n : o);
    return [s, i];
  }
  debounce(t, s, i = !1) {
    let n;
    return (...o) => new Promise((a) => {
      const r = () => {
        n = null, i || a(t.apply(this, o));
      };
      clearTimeout(n), i && !n && a(t.apply(this, o)), n = setTimeout(r, s);
    });
  }
  requiresStretch(t, s = null) {
    return t ? (s === null && (s = t.w / t.l), s < 0.15) : !1;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value || !this.selections.htmlEl) return;
    const t = this.props.stock.value, s = this.props.containerWidth.value;
    if (s <= 0) return;
    const i = s - 2 * this.state.padding;
    if (i <= 0) return;
    this.scales.xScale.domain([0, t.l]), this.scales.yScale.domain([0, t.w]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, t.w] : [t.w, 0]), this.scales.xPositionScale.domain([0, t.l]), this.scales.yPositionScale.domain([0, t.w]), this.scales.measurementScale.domain([0, t.l]);
    const n = t.l > 0 ? i * t.w / t.l : 0;
    this.state.w = i + 2 * this.state.padding, this.state.h = n + 2 * this.state.padding;
    const o = t.l > 0 ? t.w / t.l : 0;
    this.state.stretched = !1, this.requiresStretch(t, o) && this.options.enableStretch && (this.state.h = s * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
      this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]
    ), this.scales.yPositionScale.range(
      this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]
      // Use calculated h
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("height", this.state.h + "px"), this.props.containerHeight.value = this.state.h, this.selections.svgCanvas.attr("width", this.state.w).attr("height", this.state.h).attr("viewBox", `0 0 ${this.state.w} ${this.state.h}`)) : (this.selections.el.style("height", null), this.props.containerHeight.value = 0, this.selections.svgCanvas.attr("width", null).attr("height", null).attr("viewBox", null));
  }
  //--------------------------------------------------------
  // FIND
  //--------------------------------------------------------
  findShapeElement(t) {
    const s = this.selections.shapeWrappers.filter((i) => i.id === t || i.autoId === t);
    return s.empty() ? null : s.node();
  }
  findShape(t) {
    const s = this.findShapeElement.call(this, t);
    s && this.selectShape.call(this, s);
  }
  selectShape(t) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => O.call(this, i));
    const s = b(t).select(".shape");
    if (s) {
      s.classed("selected", !0), s.style("fill", this.config.colors.partSelected.toString());
      const i = b(t).datum();
      this.callbacks.onShapeSelect(i, t);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    ms.call(this);
  }
  drawStock() {
    Ls.call(this);
  }
  drawCuts() {
    Ve.call(this);
  }
  drawCuttingPath() {
    ts.call(this);
  }
  removeCuttingPath() {
    ss.call(this);
  }
  showCuttingPathStep(t) {
    es.call(this, t);
  }
  animateCuttingPath() {
    os.call(this);
  }
  pauseCuttingPathAnimation() {
    as.call(this);
  }
  stopCuttingPathAnimation() {
    Et.call(this);
  }
  resetCuttingPathAnimation() {
    ls.call(this);
  }
  isCuttingPathAnimating() {
    return rs.call(this);
  }
  setCuttingPathAnimationSpeed(t) {
    cs.call(this, t);
  }
  drawAllOffcuts() {
    Ue.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts(), this.drawCuttingPath(), this.state.debug === "offcuts" && this.drawAllOffcuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(t) {
    return t?.l ? this.scales.xScale(t.l) - this.state.padding : 0;
  }
  getHeightAttribute(t) {
    return t?.w ? this.scales.yScale(t.w) - this.state.padding : 0;
  }
  getRectangleCoordinate(t, s, i, n) {
    let o;
    const a = t.x ?? 0, r = t.y ?? 0, l = t.l ?? 0, h = t.w ?? 0;
    if (s === "x") {
      let c;
      switch (i) {
        case "center":
          c = this.scales.xPositionScale(a + l / 2), n && (c += n);
          break;
        case "right":
          c = this.scales.xPositionScale(a + l), n && (c -= n);
          break;
        default:
          c = this.scales.xPositionScale(this.settings.flipX ? a - l : a), n && (c -= n);
      }
      o = c;
    } else if (s === "y") {
      let c;
      switch (i) {
        case "center":
          c = this.scales.yPositionScale(r + h / 2), n && (c += n);
          break;
        case "bottom":
          c = this.scales.yPositionScale(this.settings.flipY ? r + h : r), n && (c += n);
          break;
        default:
          c = this.scales.yPositionScale(this.settings.flipY ? r : r + h), n && (c -= n);
      }
      o = c;
    }
    return o;
  }
  // Blade Width Methods
  getBladeWidth(t = null) {
    return we(t) && t !== null ? t.bladeWidth : 0;
  }
  getHalfBladeWidth(t = null) {
    const s = t.bladeWidth;
    return s !== void 0 && s > 0 ? s / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), j.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), je.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Q.call(this);
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
  collision(t, s, i) {
    if (t.id === s.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      t.x < s.x + s.l + this.getBladeWidth(i) && // 2 right
      t.x + t.l + this.getBladeWidth(i) > s.x && // 3 bottom
      t.y < s.y + s.w + this.getBladeWidth(i) && // 4 top
      t.y + t.w + this.getBladeWidth(i) > s.y
    );
  }
  // TOGGLE
  //--------------------------------------------------------
  toggleShapes(t = !1) {
    this.selections.shapeGroup && (t ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none")));
  }
  toggleSegments(t = !0) {
    this.selections.segmentGroup && (t ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none"));
  }
  toggleCuts(t = !0) {
    this.selections.cutGroup && (t ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none"));
  }
  // Padding Helper
  addPadding(t) {
    return t + this.state.padding;
  }
  // Text Visibility Helpers
  isTextHidden(t, s, i) {
    if (U(t) && t.outline?.length >= 3)
      return !0;
    const n = i[s];
    if (!n)
      return !0;
    const o = n.getBBox();
    if (o.width === 0 && o.height === 0)
      return !1;
    const a = this.scales.measurementScale(t.l), r = this.scales.yScale(t.w);
    return o.width >= a || o.height >= r - this.state.padding;
  }
  isNameHidden(t, s, i) {
    if (U(t) && t.outline?.length >= 3) return !0;
    const n = i[s];
    if (!n) return !0;
    const o = n.getBBox();
    if (o.width === 0 && o.height === 0) return !1;
    const a = this.scales.measurementScale(t.l), r = this.scales.measurementScale(t.w);
    return o.width >= a || r < 40;
  }
  isLengthHidden(t, s, i) {
    if (U(t) && t.outline?.length >= 3) return !0;
    if (this.settings.app) {
      const l = this.scales.measurementScale(t.l), h = this.scales.measurementScale(t.w);
      return l < 50 || h < 50;
    }
    if (t?.stock?.saw?.stockType === "linear") return !1;
    const n = i[s];
    if (!n) return !0;
    const o = n.getBBox();
    if (o.width === 0 && o.height === 0) return !1;
    const a = this.scales.measurementScale(t.l), r = this.scales.measurementScale(t.w);
    return o.width >= a || r < 30;
  }
  isWidthHidden(t, s, i) {
    if (U(t) && t.outline?.length >= 3) return !0;
    if (this.settings.app)
      return this.scales.measurementScale(t.l) < 50 || this.scales.measurementScale(t.w) < 50;
    const o = i[s].getBBox();
    return o.width === 0 && o.height === 0 ? !1 : this.scales.measurementScale(t.l) < 30 || o.height >= this.scales.measurementScale(t.w);
  }
  // Group Management
  initGroups(t) {
    if (!t || !t?.length || !this.settings.main || !this.props.containerWidth)
      return !1;
    this.removeGroups(), this.selections.groupRectangles = this.selections.groupGroup.selectAll("rect").data(t).join("rect").attr("class", "group").attr("x", (s) => this.getRectangleCoordinate(s, "x")).attr("y", (s) => this.getRectangleCoordinate(s, "y")).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)), this.selections.groupGroup.attr("display", "block"), this.state.env === "development" && this.setupGroupDebugEvents();
  }
  setupGroupDebugEvents() {
    this.state.hasTouch || this.selections.groupRectangles.on("mouseover", function() {
      b(this).classed("hover", !0);
    }).on("mouseout", function() {
      b(this).classed("hover", !1);
    });
  }
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (t) => O.call(this, t)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (t) => {
      const s = this.scales.measurementScale(this.getBladeWidth(t.stock));
      return s < 1 ? 1 : Math.ceil(s);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    j.call(this);
  }
  updateShapeVisibility() {
    Gs.call(this);
  }
  drawPositions(t) {
    return hs.call(this, t);
  }
  showCut(t) {
    Ke.call(this, t);
  }
  resetCuts() {
    Ft.call(this);
  }
}
const Ms = ["id"], qs = /* @__PURE__ */ oe({
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
    flipY: { type: Boolean, default: !1 },
    moveMode: { default: () => N(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "part-click", "resize"],
  setup(e, { expose: t, emit: s }) {
    const {
      r: i,
      activeStock: n,
      activeShapes: o,
      activeCuts: a,
      activeSegments: r,
      currentCutIndex: l,
      getStock: h,
      getShapes: c,
      getSegments: d,
      getCuts: g,
      cuttingPlan: x
    } = Ct(), f = e, v = s, L = (p) => {
      v("part-click", p);
    }, y = (p) => {
      v("shape-colour-update", p);
    }, A = (p, D) => {
      p?.autoId && v("shape-select", p.autoId, D);
    }, w = (p) => {
      p && v("add-to-parts-bin", p);
    }, P = (p, D) => {
      p && v("move-shape", p, D);
    }, S = N(0), k = N(0), ot = N(null);
    let u, at = N(!1);
    const F = fe({
      debug: "",
      stretched: !1
    }), X = () => {
      u?.state && (F.stretched = u.state.stretched);
    };
    ae(() => Yt());
    const Ht = E(() => ({
      format: f.numberFormat,
      decimals: f.decimalPlaces
    })), lt = E(() => f.stockAutoId ? h(f.stockAutoId) : n.value), rt = E(() => f.stockAutoId ? c(f.stockAutoId) : o.value), ct = E(() => f.main ? f.stockAutoId ? g(f.stockAutoId) : a.value : []), jt = E(() => f.main ? f.stockAutoId ? d(f.stockAutoId) : r.value : []);
    le(ot, (p) => {
      const D = p[0], { width: K, height: ne } = D.contentRect;
      K > 0 && (S.value = K), v("resize", { width: K, height: ne });
    }), re(
      S,
      (p) => {
        u && (p <= 0 || (u.setDevice(), u.resetShapeAxes(), u.removeCuttingPath(), u.drawAll(), X(), l.value !== null && (u.toggleSegments(!0), u.showCut(l.value))));
      },
      { throttle: 100 }
    );
    let z = !1;
    B(() => lt.value, (p) => {
      p && (S.value <= 0 || (z = !0, u.setDevice(), u.resetCuts(), u.removeSegments(), u.resetShapeAxes(), u.removeCuttingPath(), u.drawAll(), X(), ce(() => z = !1)));
    }, { immediate: !1 }), B(() => rt.value, (p) => {
      z || p && (S.value <= 0 || (u.setDevice(), u.drawShapes()));
    }, { immediate: !1, deep: !0 }), f.main && (B(() => ct.value, () => {
      z || S.value <= 0 || u.drawCuts();
    }, { immediate: !1, deep: !0 }), B(l, () => {
      l.value !== null && (S.value <= 0 || (u.toggleSegments(!0), u.showCut(l.value)));
    }, { immediate: !1 }), B(Ht, (p) => {
      u.updateNumberFormat(p.format, p.decimals, null);
    }, { immediate: !1 }));
    const Yt = () => {
      const p = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${f.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: f.numberFormat,
          decimalPlaces: f.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: f.colors || null,
        settings: {
          main: f.main,
          app: f.app,
          embed: f.embed,
          flipY: f.flipY,
          flipX: !1
        },
        props: {
          containerHeight: k,
          containerWidth: S,
          stock: lt,
          shapes: rt,
          cuts: ct,
          segments: jt,
          stockList: i.stockList,
          cuttingPlan: x,
          moveMode: f.moveMode,
          app: f.app
        },
        options: {
          disableClick: f.disableClick,
          enableStretch: f.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: y,
          onShapeSelect: A,
          onAddToPartsBin: w,
          onMoveShape: P,
          onPartClick: L
        }
      };
      u = new Ws(p), F.debug = u.state.debug, at.value = !0;
    }, Xt = (p = !1) => {
      u && u.toggleShapes(p);
    }, zt = (p = !1) => {
      u && u.toggleCuts(p);
    }, Ut = (p = !1) => {
      u && u.toggleSegments(p);
    }, qt = () => {
      u && u.drawShapes();
    }, Vt = () => {
      u && (u.drawStock(), X());
    }, _t = () => {
      u && (u.toggleSegments(!1), u.resetCuts());
    }, Jt = (p) => {
      u && (u.toggleSegments(!0), u.showCut(p));
    }, Zt = (p) => u ? u.drawPositions(p) : !1, Qt = () => {
      u && u.removePositions();
    }, Kt = (p) => {
      u && u.findShape(p);
    }, te = () => {
      u && u.clearSelection();
    }, ee = (p) => u ? u.requiresStretch(p) : !1, se = (p) => {
      u?.options && (u.options.enableStretch = p, u.setAspectRatio(), u.drawAll(), X());
    }, ie = () => u?.options?.enableStretch ?? !0;
    return B(() => f.flipY, (p) => {
      u?.settings && (u.settings.flipY = p, u.setAspectRatio(), u.drawAll());
    }), B(() => F.debug, (p) => {
      u?.state && (u.state.debug = p);
    }), t({
      loaded: at,
      toggleShapes: Xt,
      toggleCuts: zt,
      toggleSegments: Ut,
      drawShapes: qt,
      drawStock: Vt,
      drawPositions: Zt,
      resetPositions: Qt,
      findShape: Kt,
      clearSelection: te,
      resetCuts: _t,
      showCut: Jt,
      requiresStretch: ee,
      setEnableStretch: se,
      getEnableStretch: ie,
      animateCuttingPath: () => {
        u && u.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        u && u.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        u && u.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        u && u.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => u?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (p) => {
        u && u.setCuttingPathAnimationSpeed(p);
      },
      state: F,
      get stretched() {
        return F.stretched;
      },
      set moving(p) {
        u?.state && (u.state.moving = p);
      }
    }), (p, D) => (he(), ue("div", {
      id: e.elementId,
      ref_key: "diagramContainerRef",
      ref: ot,
      class: de([{ app: e.app }, "diagram-container"])
    }, null, 10, Ms));
  }
});
export {
  qs as default
};
