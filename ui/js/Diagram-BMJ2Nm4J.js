import { d as Ut, r as $, f as qt, I as _t, U as Vt, w as B, H as Jt, m as L, J as Zt, c as Qt, o as Kt, l as te } from "./vendor-vue-BgOQH8dC.js";
import { d as xt, k as ee, l as se, r as ie } from "./EcommerceCalculator-CIJmnT15.js";
import { h as ne, f as ae, l as P, g as q, e as _, s as y, r as C, i as j, j as oe } from "./vendor-d3-DI9vO-24.js";
import { P as R, e as V, h as le, y as E } from "./result.zod-n9AiX9Qf.js";
import { g as re, p as ce, a as he, P as ue, c as de, b as pe } from "./coordinates-C1iiQvtt.js";
import "./vendor-i18next-DIDhOEvY.js";
import { g as fe } from "./vendor-lodash-ICw93SXE.js";
function ge(e) {
  const t = e.x, s = e.x + e.l, i = P().domain([t, s]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(s)]), n = e.y, a = e.y + e.w, o = P().domain([n, a]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(a)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(q(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(q(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), e?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(_(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(_(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function me() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(ne(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const e = this.requiresStretch(this.props.stock.value);
  (!e || e && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(ae(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function vt(e, t, s) {
  !s || !e?.length || e.forEach((i, n) => {
    const [a, o] = i;
    s === "x" ? ye.call(this, a, o, t[n]) : xe.call(this, a, o, t[n]);
  });
}
function ye(e, t, s) {
  const i = P().domain([e, t]).range([
    this.scales.xPositionScale(e),
    this.scales.xPositionScale(t)
  ]), n = St(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(q(i).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(s)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function xe(e, t, s) {
  const i = P().domain([e, t]).range([
    this.scales.yPositionScale(e),
    this.scales.yPositionScale(t)
  ]), n = St(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(_(i).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(s)));
  ve(a), this.axes.cutMeasurementYAxes.push(a);
}
function St(e) {
  return (e[1] - e[0]) / 2 + e[0];
}
function ve(e) {
  e.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (t, s, i) => i[s]?.getBBox()?.height + 10).attr("dx", (t, s, i) => i[s]?.getBBox()?.width / 4).attr("transform", (t, s, i) => "rotate(90) translate(" + i[s]?.getBBox()?.width / 4 + ")");
}
function O() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Se() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function X() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function J(e) {
  return e.autoId;
}
function be(e, t) {
  const s = /* @__PURE__ */ new Set();
  function i(n) {
    if (!(!n || s.has(n.autoId))) {
      if (s.add(n.autoId), n.autoId === t)
        return n;
      if (n.children && Array.isArray(n.children)) {
        for (const a of n.children)
          if (a && a.autoId !== n.autoId) {
            const o = i(a);
            if (o) return o;
          }
      }
    }
  }
  return i(e);
}
function U({ parent: e, near: t, far: s, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const n = [e, t, s, ...i].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(n, J).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => st.call(this, o)),
    (a) => a.call((o) => st.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && ke.call(this, n), !this.settings.app && this.state.env === "development" && we.call(this);
}
function st(e) {
  return e.classed("offcut", (t) => t.offcut).classed("near", (t) => t.type === "near").classed("far", (t) => t.type === "far").classed("parent", (t, s) => t.id !== "root" && s === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function ke(e) {
  this.selections.segmentGroup.selectAll("text").data(e, J).join(
    (t) => t.append("text").attr("class", "segment-text").call((s) => it.call(this, s)),
    (t) => t.call((s) => it.call(this, s)),
    (t) => t.remove()
  );
}
function it(e) {
  return e.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function we() {
  this.selections.segmentRectangles.on("mousedown", function(e, t) {
    console.log("segment", `[${t?.parentId || "-"}]->[${t.id}] {P${t.phase}} ${t.l}x${t.w} ${t.cutDirection} ${t.hasHeadCut ? "HEAD" : "NORM"}`), console.log(t);
  });
}
function bt(e) {
  const t = e?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let s;
  if (t) {
    for (const n of this.props.segments.value)
      if (s = be(n, t), s) break;
  } else {
    const n = e?.stock?.autoId;
    s = this.props.segments.value.find((a) => a.stock?.autoId === n);
  }
  if (s === void 0)
    return !1;
  const i = s?.children;
  return i?.length ? {
    parent: s,
    children: i
  } : !1;
}
function kt(e, t = []) {
  if (!e) return t;
  if (e.offcut && t.push(e), e.children && Array.isArray(e.children))
    for (const s of e.children)
      kt(s, t);
  return t;
}
function Ae() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const e = [];
  for (const s of this.props.segments.value)
    kt(s, e);
  if (!e.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const t = (s) => s.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(e, J).join(
    (s) => s.append("rect").attr("class", "segment offcut").call(t),
    (s) => s.call(t),
    (s) => s.remove()
  );
}
const { currentCutIndex: Ce } = xt();
function Pe() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (e, t) => t).join(
    (e) => e.append("line").attr("class", "cut").call((t) => nt.call(this, t)),
    (e) => e.call((t) => nt.call(this, t)),
    (e) => e.remove()
  ), Ct.call(this));
}
function nt(e) {
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
function wt(e, t, s) {
  return e.guillotineState.parentSegmentID === t && s && e.guillotineState.segmentCutOrder < s;
}
function At(e, t) {
  return e.guillotineState?.parentSegmentID !== null && !e?.isTrim ? e.guillotineState.parentSegmentID === t : !1;
}
function Ge(e, t, s) {
  this.selections.cutLines.style("visibility", (i) => typeof e.guillotineState?.[s] == "number" && typeof i.guillotineState?.[s] == "number" && i.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, n) => n === t);
}
function Ie(e, t, s, i) {
  this.selections.cutLines.style("visibility", (a) => typeof e.guillotineState[s] == "number" && a.guillotineState[s] <= e.guillotineState[s] || !i && a.guillotineState.parentSegmentID === t ? "visible" : "hidden"), Ce.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof e.guillotineState[s] == "number" && a.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof e.guillotineState[s] == "number" && a.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a) => e.stock.cutType === "guillotine" && a.isTrim ? a.position === e.type : a.guillotineState[s] === e.guillotineState[s]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), i || Te.call(this, e, t);
}
function Be(e, t, s, i, n) {
  this.selections.cutLines.style("visibility", (o, l) => l <= t ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o, l) => l <= t ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o, l) => l <= t ? "visible" : "hidden"));
  let a;
  if (e?.dimension === "l" ? a = [
    [0 + (s.l1 ?? 0), e.y1 - n],
    [e.y1 + n, e.stock.w - (s?.y2 ? s.y2 : 0)]
  ] : e?.dimension === "w" && (a = [
    [0 + (s.w1 ?? 0), e.x1 - n],
    [e.x1 + n, e.stock.l - (s?.x2 ? s.x2 : 0)]
  ]), a?.length) {
    const o = [
      a[0][1] - a[0][0],
      a[1][1] - a[1][0]
    ];
    this.state.device === "desktop" && !e.isTrim && vt.call(this, a, o, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function Ct() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (e) => {
    const t = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return Math.max(1, Math.ceil(t));
  }), O.call(this), X.call(this);
}
function Te(e, t) {
  const s = e?.guillotineState?.segmentCutOrder;
  if (s == null) return;
  this.selections.cutLines.classed("completed", (d) => wt(d, t, s)), this.selections.cutLines.classed("inside-segment", (d) => At(d, t));
  const i = bt.call(this, e);
  if (i === !1) return;
  const { parent: n, children: a } = i, { near: o } = Pt(e, a);
  if (!o) return;
  let l = [], r;
  const f = this.getHalfBladeWidth(e.stock), p = e.dimension === "l" ? "y" : "x";
  e?.dimension === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      e.y1 + f,
      n.y + n.w
    ]
  ], r = [e?.distances?.bottom, e?.distances.top]) : e?.dimension === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      e.x1 + f,
      n.x + n.l
    ]
  ], r = [e?.distances?.left, e?.distances?.right]), this.state.device === "desktop" && !e.isTrim && r && vt.call(this, l, r, p);
}
function Re(e = null, t = "") {
  if (e === null || this.selections.cutLines.empty()) return;
  const s = this.props.cuts.value[e];
  if (!s) return;
  if (O.call(this), X.call(this), e !== null && e >= 0 && e < this.selections.cutLines.size()) {
    const u = this.selections.cutLines.nodes()[e].parentElement;
    if (!u) return;
    y(u).raise();
  }
  const i = s.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(s.stock), a = s.dimension === "l" ? "y" : "x", o = s?.stock?.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (s.isTrim && ["guillotine", "beam"].includes(s?.stock?.cutType)) {
    Ge.call(this, s, e, l), at.call(this, s, e, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(s?.stock?.cutType) && i !== null && typeof i < "u" ? Ie.call(this, s, i, l, t) : Be.call(this, s, e, o, a, n), at.call(this, s, e, i), t === "ptx") {
    this.removeSegments();
    return;
  }
  const r = bt.call(this, s);
  if (r === !1)
    return;
  const { parent: f, children: p } = r;
  if (!s?.guillotineState?.parentSegmentID)
    return U.call(this, { parent: f });
  if (s.stock?.cutType === "beam" && f.phase === 0) {
    const k = this.props.segments.value.find((v) => v.stock?.autoId === s.stock?.autoId)?.children || p, M = k.find((v) => v.offcut === !0 && v.y === 0 && v.isTrimOffcut === !0), m = k.find((v) => v.offcut === !0 && v !== M && v.y + v.w >= s.stock.w - (s.stock.trim?.l2 || 0)), b = k.filter((v) => !v.offcut), S = b.find((v) => v.type === "near"), w = b.find((v) => v.type === "far"), x = [M, m].filter(Boolean);
    return U.call(this, { parent: f, near: S, far: w, offcuts: x });
  }
  const { near: d, far: g, offcuts: A } = Pt(s, p);
  U.call(this, { parent: f, near: d, far: g, offcuts: A });
}
function Pt(e, t) {
  const s = e.dimension === "l" ? "y" : "x", i = e.dimension === "l" ? "w" : "l", n = e.stock?.cutType === "beam";
  let a, o;
  if (n)
    a = t.find((r) => r.type === "near" && !r.offcut), o = t.find((r) => r.type === "far" && !r.offcut);
  else {
    const f = e[s + "1"], p = e.stock.halfBladeWidth;
    a = t.find((d) => d.type === "near" && Math.abs(d[s] + d[i] - (f - p)) < 1e-6), o = t.find((d) => d.type === "far" && Math.abs(d[s] - (f + p)) < 1e-6);
  }
  const l = t.filter((r) => r.offcut === !0 && r !== a && r !== o);
  return { near: a, far: o, offcuts: l };
}
function at(e, t, s) {
  this.selections.cutLines.attr("stroke-width", (i, n) => {
    const a = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let o = Math.max(1, Math.ceil(a));
    const l = e?.guillotineState?.segmentCutOrder;
    return (wt(i, s, l) || At(i, s)) && (o += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (o = 5), o;
  });
}
function We() {
  if (!this.settings.main || !this.props.cuttingPlan?.value) return;
  const e = this.props.cuttingPlan.value;
  if (!e.contours?.length) return;
  this.selections.cuttingPathGroup || (this.selections.cuttingPathGroup = this.selections.svgCanvas.append("g").attr("class", "cutting-path")), this.selections.cuttingPathGroup.selectAll("*").remove();
  const t = this.scales.xPositionScale, s = this.scales.yPositionScale;
  let i = null;
  e.contours.forEach((n, a) => {
    const o = n.leadIn.length > 0 ? n.leadIn[0] : n.contour[0];
    if (!o) return;
    i && a > 0 && this.selections.cuttingPathGroup.append("line").attr("x1", t(i.x)).attr("y1", s(i.y)).attr("x2", t(o.x)).attr("y2", s(o.y)).attr("stroke", "#000").attr("stroke-width", 0.5).attr("stroke-dasharray", "2,3").attr("fill", "none"), i = n.leadOut.length > 0 ? n.leadOut[n.leadOut.length - 1] : n.contour.length > 0 ? n.contour[n.contour.length - 1] : o;
  }), e.contours.forEach((n) => {
    const a = [
      ...n.leadIn,
      ...n.contour,
      ...n.leadOut
    ];
    if (a.length < 2) return;
    const o = a.map(
      (l, r) => `${r === 0 ? "M" : "L"} ${t(l.x)} ${s(l.y)}`
    ).join(" ");
    this.selections.cuttingPathGroup.append("path").attr("d", o).attr("stroke", "#ff00ff").attr("stroke-width", 1).attr("fill", "none");
  });
}
function Me(e) {
  if (this.selections.cuttingPathGroup) {
    if (e === null) {
      this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", 1);
      return;
    }
    this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", (t, s) => s <= e ? 1 : 0.15), this.selections.cuttingPathGroup.selectAll(".contour").classed("active", (t, s) => s === e);
  }
}
function De() {
  Gt.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const G = /* @__PURE__ */ new WeakMap();
function $e(e, t, s) {
  const i = [];
  let n = 0, a = t(0), o = s(0);
  const l = (r, f, p) => {
    const d = r - a, g = f - o;
    n += Math.sqrt(d * d + g * g), i.push({ sx: r, sy: f, type: p, cumDist: n }), a = r, o = f;
  };
  return i.push({ sx: a, sy: o, type: "rapid", cumDist: 0 }), e.contours.forEach((r, f) => {
    const p = r.leadIn.length > 0 ? r.leadIn[0] : r.contour[0];
    if (!p) return;
    l(t(p.x), s(p.y), "rapid");
    const d = [
      ...r.leadIn,
      ...r.contour,
      ...r.leadOut
    ];
    for (let g = 1; g < d.length; g++) {
      const A = d[g];
      l(t(A.x), s(A.y), "cutting");
    }
  }), i;
}
function Le(e, t) {
  if (t <= 0) return { sx: e[0].sx, sy: e[0].sy, type: e[0].type };
  for (let i = 1; i < e.length; i++)
    if (e[i].cumDist >= t) {
      const n = e[i - 1], a = e[i], o = a.cumDist - n.cumDist;
      if (o === 0) return { sx: a.sx, sy: a.sy, type: a.type };
      const l = (t - n.cumDist) / o;
      return {
        sx: n.sx + (a.sx - n.sx) * l,
        sy: n.sy + (a.sy - n.sy) * l,
        type: a.type
      };
    }
  const s = e[e.length - 1];
  return { sx: s.sx, sy: s.sy, type: s.type };
}
function Oe() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const e = this.props.cuttingPlan.value;
  if (!e.contours?.length) return;
  let t = G.get(this);
  if (!t || !t.waypoints.length) {
    const a = this.scales.xPositionScale, o = this.scales.yPositionScale, l = $e(e, a, o);
    if (l.length < 2) return;
    const r = l[l.length - 1].cumDist;
    t = {
      waypoints: l,
      totalDistance: r,
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
  const i = this, n = (a) => {
    if (!t.playing) return;
    t.lastTime === null && (t.lastTime = a);
    const o = (a - t.lastTime) / 1e3;
    t.lastTime = a, t.progress += t.speed * o, t.progress >= 1 && (t.progress = 1, t.playing = !1);
    const l = t.progress * t.totalDistance, r = Le(t.waypoints, l);
    i.selections.cuttingPathGroup.select(".cutting-path-dot").attr("cx", r.sx).attr("cy", r.sy).attr("fill", "#000");
    let p = "", d = "", g = null;
    for (let A = 0; A < t.waypoints.length; A++) {
      const u = t.waypoints[A];
      if (u.cumDist > l) break;
      u.type === "cutting" ? ((!g || g.type !== "cutting") && (p += ` M ${g ? g.sx : u.sx} ${g ? g.sy : u.sy}`), p += ` L ${u.sx} ${u.sy}`) : ((!g || g.type !== "rapid") && (d += ` M ${g ? g.sx : u.sx} ${g ? g.sy : u.sy}`), d += ` L ${u.sx} ${u.sy}`), g = u;
    }
    t.progress < 1 && g && (r.type === "cutting" ? p += ` L ${r.sx} ${r.sy}` : d += ` L ${r.sx} ${r.sy}`), i.selections.cuttingPathGroup.select(".cutting-path-trail-cut").attr("d", p), i.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").attr("d", d), t.playing && (t.rafId = requestAnimationFrame(n));
  };
  t.rafId && cancelAnimationFrame(t.rafId), t.rafId = requestAnimationFrame(n);
}
function He() {
  const e = G.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), e.lastTime = null);
}
function Gt() {
  const e = G.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), G.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Ne() {
  const e = G.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), e.lastTime = null), G.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Ee() {
  return G.get(this)?.playing ?? !1;
}
function Ye(e) {
  const t = G.get(this);
  t && (t.speed = e);
}
function Fe(e) {
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
  const i = re(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let n;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let o = function(p) {
        return `${p.x1}-${p.y1}-${p.x2}-${p.y2}`;
      }, l = function(p) {
        p.attr("class", "ray").attr("x1", (d) => this.scales.xPositionScale(d.x1)).attr("x2", (d) => this.scales.xPositionScale(d.x2)).attr("y1", (d) => this.scales.yPositionScale(d.y1)).attr("y2", (d) => this.scales.yPositionScale(d.y2));
      };
      if (this.state.env !== "development") return;
      const f = ce(this.props.shapes.value, this.props.stock.value).flatMap((p) => Object.values(p.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(f, o).join(
        (p) => p.append("line").call((d) => l.call(this, d)),
        (p) => p.call((d) => l.call(this, d)),
        (p) => p.remove()
      );
    }
    n = he(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new ue();
  for (const o of i.toArray()) {
    const l = de(e, o, this.props.stock.value);
    l && a.addPoints(l.toArray());
  }
  if (n) {
    const o = n.toArray();
    for (const l of o) {
      const r = pe(e, l, this.props.stock.value);
      r && a.addPoints(r.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const o = this.props.stock.value;
    [
      new R(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new R(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new R(
        o.l - e.l - (o.trim.w2 ?? 0),
        o.trim.l1 ?? 0
      ),
      new R(
        o.trim.w1 ?? 0,
        o.w - e.w - (o.trim.l2 ?? 0)
      ),
      new R(
        o.l - e.l - (o.trim.w2 ?? 0),
        o.w - e.w - (o.trim.l2 ?? 0)
      )
    ].forEach((l) => a.add(l)), t = a.toArray();
  } else {
    const o = this.props.stock.value;
    a.add(new R(o.trim.w1 ?? 0, o.trim.l1 ?? 0)), t = a.toArray();
  }
  for (let o = t.length; o--; ) {
    const l = t[o];
    e.x = l.x, e.y = l.y;
    for (const r of this.props.shapes.value)
      if (this.collision(e, r, this.props.stock.value)) {
        t.splice(o, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", t?.length), je.call(this, t, e), Xe.call(this, t, e), t?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function je(e, t) {
  function s(n) {
    return `${n.x}-${n.y}`;
  }
  function i(n, a) {
    n.attr("data-id", (o, l) => l).attr("class", "shape ghost").attr("x", (o) => (a.x = o.x, this.getRectangleCoordinate(a, "x"))).attr("y", (o) => (a.y = o.y, this.getRectangleCoordinate(a, "y"))).attr("width", this.getWidthAttribute(a)).attr("height", this.getHeightAttribute(a)).on("mousedown", (o, l) => {
      console.log("[Diagram] ghostShape mousedown (position click):", {
        shapeId: a.id,
        shapeParentId: a.parentId,
        position: { x: l.x, y: l.y },
        shapeRot: a.rot
      }), this.callbacks.onMoveShape(a, l);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(e, s).join(
    (n) => n.append("rect").call((a) => i.call(this, a, t)),
    (n) => n.call((a) => i.call(this, a, t)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), y(this).classed("hover", !0), y(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), y(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Xe(e, t) {
  function s(n) {
    return `${n.x}-${n.y}`;
  }
  function i(n) {
    n.attr("class", "dot").attr("cx", (a) => this.scales.xPositionScale(a.x)).attr("cy", (a) => this.scales.yPositionScale(a.y)).attr("r", 6).on("mousedown", (a, o) => {
      this.callbacks.onMoveShape(t, o);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(e, s).join(
    (n) => n.append("circle").call((a) => i.call(this, a)),
    (n) => n.call((a) => i.call(this, a)),
    (n) => n.remove()
  ), t.x = 0, t.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), y(this).classed("hover", !0);
      const a = y(this).attr("data-id"), o = y(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), y(this).classed("hover", !1);
      const a = y(this).attr("data-id");
      y(`.ghost[data-id="${a}"]`).classed(
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
  return e?.color ? ee(e.color) : this.config.colors.text.toString();
}
function Y(e) {
  return e.outline && Array.isArray(e.outline) && e.outline.length >= 3;
}
function ze() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((e) => Y(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text id").text((t) => ot.call(this, t)).classed("hidden", (t, s, i) => this.isTextHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (e) => e.classed("hidden", !1).text((t) => ot.call(this, t)).classed("hidden", (t, s, i) => this.isTextHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((e) => Y(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text name").text((t) => lt.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, s, i) => this.isNameHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const n = i[s];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (e) => e.classed("hidden", !1).text((t) => lt.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, s, i) => this.isNameHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const n = i[s];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((e) => Y(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text length").text((t) => rt.call(this, t)).classed("hidden", (t, s, i) => this.isLengthHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const a = i[s].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(a / 2 + 2));
    }),
    (e) => e.classed("hidden", !1).text((t) => rt.call(this, t)).classed("hidden", (t, s, i) => this.isLengthHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const a = i[s].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((e) => Y(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text width").text((t) => ct.call(this, t)).classed("hidden", (t, s, i) => this.isWidthHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => I.call(this, t)).attr("transform", (t, s, i) => {
      const n = i[s], a = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    }),
    (e) => e.classed("hidden", !1).text((t) => ct.call(this, t)).classed("hidden", (t, s, i) => this.isWidthHidden(t, s, i)).style("fill", (t) => I.call(this, t)).attr("transform", (t, s, i) => {
      const n = i[s], a = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    })
  );
}
function ot(e) {
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
function lt(e) {
  return !e?.name || typeof e?.name != "string" ? null : e.name.toUpperCase().trim();
}
function rt(e) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : V({ v: e.l, o: this.numberConfig }).toString();
}
function ct(e) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : V({ v: e.w, o: this.numberConfig }).toString();
}
function Ue() {
  const e = this.props.shapes.value;
  if (!e?.length) {
    this.removeGroups();
    return;
  }
  const t = /* @__PURE__ */ new Map();
  for (const i of e) {
    const n = i?.group?.addedAsGroup;
    if (!n || !(typeof n == "object" ? n.__entityType === "userGroup" || n.type === "user" : i?.group?.reference?.type === "user")) continue;
    const o = typeof n == "string" ? n : n.autoId || n.id;
    o && (t.has(o) || t.set(o, []), t.get(o).push(i));
  }
  if (t.size === 0) {
    this.removeGroups();
    return;
  }
  const s = [];
  for (const [, i] of t) {
    const n = Math.min(...i.map((r) => r.x)), a = Math.min(...i.map((r) => r.y)), o = Math.max(...i.map((r) => r.x + r.l)) - n, l = Math.max(...i.map((r) => r.y + r.w)) - a;
    s.push({ x: n, y: a, l: o, w: l, shapes: i });
  }
  this.initGroups(s);
}
const qe = (e) => e.id;
function _e() {
  if (!this.props.containerWidth) return;
  O.call(this);
  const e = this.props.shapes.value.reduce((t, s) => {
    const i = parseInt(s.parentId);
    return i > t ? i : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, e]), this.state.env === "development" && Je.call(this), Ve.call(this), Ue.call(this);
}
function Ve() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, qe).join(
    (e) => {
      const t = e.append("g").attr("class", "shape-group");
      return ht.call(this, t), ut.call(this, t), t.on("mousedown", dt.bind(this)), t;
    },
    (e) => (ht.call(this, e), ut.call(this, e), e.on("mousedown", dt.bind(this)), e),
    (e) => e.remove()
  ), ns.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => ze.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Je() {
  let e = 1 / 0, t = -1 / 0;
  for (const n of this.props.shapes.value) {
    const a = n?.bestScore?.total;
    if (a !== 0 && a !== null && a !== void 0) {
      e = a, t = a;
      break;
    }
  }
  const s = this.props.shapes.value.reduce((n, a) => {
    const o = a?.bestScore?.total;
    return o === 0 || o === null || o === void 0 ? n : o < n ? o : n;
  }, e), i = this.props.shapes.value.reduce((n, a) => {
    const o = a?.bestScore?.total;
    return o == null ? n : o > n ? o : n;
  }, t);
  this.scales.scoreColorScale = j([C(251, 224, 255), C(122, 0, 138)]).domain([s, i]);
}
function Ze(e) {
  return e.outline && Array.isArray(e.outline) && e.outline.length >= 3;
}
function Qe(e, t) {
  const s = t.outline;
  if (!s || s.length < 3) return "";
  const i = t.nestingRotation || 0, n = t.placementOutline && t.placementOutline.length >= 3 ? t.placementOutline : s;
  let a;
  if (t.holes?.length) {
    let m = 1 / 0, b = 1 / 0, S = -1 / 0, w = -1 / 0;
    for (const x of s)
      x.x < m && (m = x.x), x.y < b && (b = x.y), x.x > S && (S = x.x), x.y > w && (w = x.y);
    a = [
      { x: m, y: b },
      { x: S, y: b },
      { x: S, y: w },
      { x: m, y: w },
      { x: m, y: b }
    ];
  } else
    a = s;
  const o = [a];
  if (t.holes?.length)
    for (const m of t.holes)
      m.length >= 3 && o.push(m);
  let l = 0, r = 0;
  for (const m of n)
    l += m.x, r += m.y;
  l /= n.length, r /= n.length;
  const f = Math.cos(i), p = Math.sin(i), d = (m) => m.map((b) => {
    if (i === 0) return { x: b.x, y: b.y };
    const S = b.x - l, w = b.y - r;
    return {
      x: f * S - p * w + l,
      y: p * S + f * w + r
    };
  }), g = o.map(d), A = n === s ? t.holes?.length ? d(s) : g[0] : d(n);
  let u = 1 / 0, k = 1 / 0;
  for (const m of A)
    m.x < u && (u = m.x), m.y < k && (k = m.y);
  return g.map((m) => m.map((S) => ({
    x: e.scales.xPositionScale(S.x - u + (t.x || 0)),
    y: e.scales.yPositionScale(S.y - k + (t.y || 0))
  })).map(
    (S, w) => (w === 0 ? "M" : "L") + ` ${S.x} ${S.y}`
  ).join(" ") + " Z").join(" ");
}
function ht(e) {
  const t = this;
  e.selectAll(".shape").remove(), e.each(function(i) {
    const n = y(this);
    Ze(i) ? n.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (a) => Qe(t, a)).attr("fill-rule", "evenodd").style("fill", (a) => W.call(t, a)) : n.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (a) => t.getRectangleCoordinate(a, "x")).attr("y", (a) => t.getRectangleCoordinate(a, "y")).attr("width", (a) => t.getWidthAttribute(a)).attr("height", (a) => t.getHeightAttribute(a)).style("fill", (a) => W.call(t, a));
  });
  const s = e.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = oe(
    this.selections.shapeRectangles.nodes().concat(s.nodes())
  ) : this.selections.shapeRectangles = s;
}
function ut(e) {
  !this.settings.main || this.settings.app || this.state.hasTouch || e.on("mouseover", (t) => {
    if (this?.props.moveMode && this.state.moving) return;
    const s = y(t.target);
    s.classed("hover", !0), s.classed("selected") || s.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (t, s) => {
    const i = y(t.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", W.call(this, s));
  }, { passive: !0 });
}
function dt(e, t) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Ke.call(this, e, t), (this.settings.app || this.settings.embed) && ss.call(this, e, t), this.state.device === "desktop" && !this.props.moveMode.value && (X.call(this), ge.call(this, t)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: t.id
  }), this.callbacks.onAddToPartsBin(t)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: t.id
  }), this.findShape.call(this, t.id));
}
function Ke(e, t) {
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
        ], es.call(this, t);
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
    console.table(ts(t, s));
  }
}
function ts(e, t) {
  return t.reduce((s, i) => {
    const n = cs(e, i);
    return s[i] = Array.isArray(n) ? n.join(", ") : n, s;
  }, {});
}
function es(e) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = e.guillotineState?.myStripParent;
  t && this.selections.shapeWrappers.filter((n) => n.id === t || n.group.addedAsGroup === t).select(".shape").classed("highlight-a", !0);
  const s = this.props.shapes.value.find((i) => i.id === t)?.guillotineState?.myStripParent;
  s && this.selections.shapeWrappers.filter((n) => n.id === s || n.group.addedAsGroup === t).select(".shape").classed("highlight-b", !0);
}
function ss(e, t) {
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
      color: W.call(this, t),
      notes: t?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function W(e) {
  const t = C(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (e.group.addedAsGroup)
          return C(43, 156, 16);
        if (e.firstShape.isFirstShape)
          return C(255, 171, 231);
        if (typeof e.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${n.map((l, r) => Math.round(l + e.guillotineState.myPhase / 5 * (a[r] - l))).join(",")})`;
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
        const n = this.props.shapes.value.reduce((a, o) => {
          const l = o.placementOrder ?? 0;
          return l > a ? l : a;
        }, 0);
        if (n > 0 && typeof e.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], l = e.placementOrder / n;
          return `rgb(${a.map((f, p) => Math.round(f + l * (o[p] - f))).join(",")})`;
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
const pt = 3;
function is(e) {
  const t = [];
  for (const s of e) {
    const i = s.extras?.banding;
    if (s.added && i?.sides) {
      const n = s.color ? se(s.color) : "white";
      for (const [a, o] of Object.entries(i.sides)) {
        if (!o || ["a", "b", "c", "d"].includes(a)) continue;
        let l = a;
        if (s.rot) {
          const f = ie({ [a]: !0 }, "cc");
          l = Object.keys(f)[0];
        }
        const r = as.call(this, s, l);
        r && t.push({ ...r, stroke: n });
      }
    }
  }
  return t;
}
function ft(e) {
  const t = pt / 2;
  return e.attr("class", "banding").attr("x1", (s) => this.scales.xPositionScale(s.l1) + F.call(this, s.type, "x", t)).attr("x2", (s) => this.scales.xPositionScale(s.l2) + F.call(this, s.type, "x", t)).attr("y1", (s) => this.scales.yPositionScale(s.w1) + F.call(this, s.type, "y", t)).attr("y2", (s) => this.scales.yPositionScale(s.w2) + F.call(this, s.type, "y", t)).attr("stroke-width", pt).attr("stroke", (s) => s.stroke);
}
function ns(e) {
  if (!this.settings.main) return;
  const t = is.call(this, e);
  if (t.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t, (s, i) => i).join(
    (s) => s.append("line").call((i) => ft.call(this, i)),
    (s) => s.call((i) => ft.call(this, i)),
    (s) => s.remove()
  );
}
function F(e, t, s) {
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
function as(e, t) {
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
function os(e) {
  this.selections.shapeWrappers.style("visibility", (t) => t?.placementOrder >= e ? "hidden" : "visible");
}
const gt = (e) => e.id;
function mt(e) {
  return e.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function yt(e) {
  return e.style("fill", (t) => `url(#grain-${t.grain || "n"})`).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function ls() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), me.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], gt).join(
    (e) => e.append("rect").attr("class", "background stock").call((t) => mt.call(this, t)),
    (e) => e.call((t) => mt.call(this, t)),
    (e) => e.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], gt).join(
    (e) => e.append("rect").attr("class", "stock-pattern").call((t) => yt.call(this, t)),
    (e) => e.call((t) => yt.call(this, t)),
    (e) => e.remove()
  );
}
function rs(e) {
  return typeof e == "string" && e.length === 6 && !isNaN(+("0x" + e.replace("#", "")));
}
function cs(e, t) {
  return fe(e, t);
}
class hs {
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
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = y(t.elementID), this.selections.el === null)) return;
    const s = this.selections.el.node();
    s !== null && (this.selections.htmlEl = s, this.scales = {
      xScale: P(),
      yScale: P(),
      yPositionScale: P(),
      xPositionScale: P(),
      yAxisScale: P(),
      measurementScale: P(),
      shapeColorScale: j(),
      scoreColorScale: j()
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
    }, i = (n, a) => C("#" + (rs(n?.replace("#", "")) ? n.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(s).map(([n, a]) => [
        n,
        i(t.colors?.[n], a)
      ])
    ), this.scales.shapeColorScale = j([
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
      this.selections.svgCanvas = y(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, s, i) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), s && (this.numberConfig.decimalPlaces = s), i && (this.numberConfig.fractionRoundTo = i));
  }
  formatNumber = (t) => {
    const s = V({
      v: t,
      o: this.numberConfig
    });
    if (s !== null) return s.toString();
  };
  trimNameToFit(t, s) {
    function i(n, a, o) {
      const l = o[a], r = y(l);
      r.text(n.name);
      let f = r.text();
      const p = r.node();
      if (!p) return;
      let d = p.getComputedTextLength();
      const g = this.getWidthAttribute(n) - 20;
      for (; d > g && f.length > 0; )
        f = f.slice(0, -1), r.text(f.length ? f + "..." : ""), d = r.node().getComputedTextLength();
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
    const s = t.reduce((n, a) => n.l > a.l ? n : a), i = t.reduce((n, a) => n.w > a.w ? n : a);
    return [s, i];
  }
  debounce(t, s, i = !1) {
    let n;
    return (...a) => new Promise((o) => {
      const l = () => {
        n = null, i || o(t.apply(this, a));
      };
      clearTimeout(n), i && !n && o(t.apply(this, a)), n = setTimeout(l, s);
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
    const a = t.l > 0 ? t.w / t.l : 0;
    this.state.stretched = !1, this.requiresStretch(t, a) && this.options.enableStretch && (this.state.h = s * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => W.call(this, i));
    const s = y(t).select(".shape");
    if (s) {
      s.classed("selected", !0), s.style("fill", this.config.colors.partSelected.toString());
      const i = y(t).datum();
      this.callbacks.onShapeSelect(i, t);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    _e.call(this);
  }
  drawStock() {
    ls.call(this);
  }
  drawCuts() {
    Pe.call(this);
  }
  drawCuttingPath() {
    We.call(this);
  }
  removeCuttingPath() {
    De.call(this);
  }
  showCuttingPathStep(t) {
    Me.call(this, t);
  }
  animateCuttingPath() {
    Oe.call(this);
  }
  pauseCuttingPathAnimation() {
    He.call(this);
  }
  stopCuttingPathAnimation() {
    Gt.call(this);
  }
  resetCuttingPathAnimation() {
    Ne.call(this);
  }
  isCuttingPathAnimating() {
    return Ee.call(this);
  }
  setCuttingPathAnimationSpeed(t) {
    Ye.call(this, t);
  }
  drawAllOffcuts() {
    Ae.call(this);
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
    let a;
    if (s === "x") {
      let o;
      switch (i) {
        case "center":
          o = this.scales.xPositionScale(t.x + t.l / 2), n && (o += n);
          break;
        case "right":
          o = this.scales.xPositionScale(t.x + t.l), n && (o -= n);
          break;
        default:
          o = this.scales.xPositionScale(this.settings.flipX ? t.x - t.l : t.x), n && (o -= n);
      }
      a = o;
    } else if (s === "y") {
      let o;
      switch (i) {
        case "center":
          o = this.scales.yPositionScale(t.y + t.w / 2), n && (o += n);
          break;
        case "bottom":
          o = this.scales.yPositionScale(this.settings.flipY ? t.y + t.w : t.y), n && (o += n);
          break;
        default:
          o = this.scales.yPositionScale(this.settings.flipY ? t.y : t.y + t.w), n && (o -= n);
      }
      a = o;
    }
    return a;
  }
  // Blade Width Methods
  getBladeWidth(t = null) {
    return le(t) && t !== null ? t.bladeWidth : 0;
  }
  getHalfBladeWidth(t = null) {
    const s = t.bladeWidth;
    return s !== void 0 && s > 0 ? s / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), O.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Se.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), X.call(this);
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
    if (E(t) && t.outline?.length >= 3)
      return !0;
    const n = i[s];
    if (!n)
      return !0;
    const a = n.getBBox();
    if (a.width === 0 && a.height === 0)
      return !1;
    const o = this.scales.measurementScale(t.l), l = this.scales.yScale(t.w);
    return a.width >= o || a.height >= l - this.state.padding;
  }
  isNameHidden(t, s, i) {
    if (E(t) && t.outline?.length >= 3) return !0;
    const n = i[s];
    if (!n) return !0;
    const a = n.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return a.width >= o || l < 40;
  }
  isLengthHidden(t, s, i) {
    if (E(t) && t.outline?.length >= 3) return !0;
    if (this.settings.app) {
      const r = this.scales.measurementScale(t.l), f = this.scales.measurementScale(t.w);
      return r < 50 || f < 50;
    }
    if (t?.stock?.saw?.stockType === "linear") return !1;
    const n = i[s];
    if (!n) return !0;
    const a = n.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return a.width >= o || l < 30;
  }
  isWidthHidden(t, s, i) {
    if (E(t) && t.outline?.length >= 3) return !0;
    if (this.settings.app)
      return this.scales.measurementScale(t.l) < 50 || this.scales.measurementScale(t.w) < 50;
    const a = i[s].getBBox();
    return a.width === 0 && a.height === 0 ? !1 : this.scales.measurementScale(t.l) < 30 || a.height >= this.scales.measurementScale(t.w);
  }
  // Group Management
  initGroups(t) {
    if (!t || !t?.length || !this.settings.main || !this.props.containerWidth)
      return !1;
    this.removeGroups(), this.selections.groupRectangles = this.selections.groupGroup.selectAll("rect").data(t).join("rect").attr("class", "group").attr("x", (s) => this.getRectangleCoordinate(s, "x")).attr("y", (s) => this.getRectangleCoordinate(s, "y")).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)), this.selections.groupGroup.attr("display", "block"), this.state.env === "development" && this.setupGroupDebugEvents();
  }
  setupGroupDebugEvents() {
    this.state.hasTouch || this.selections.groupRectangles.on("mouseover", function() {
      y(this).classed("hover", !0);
    }).on("mouseout", function() {
      y(this).classed("hover", !1);
    });
  }
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (t) => W.call(this, t)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (t) => {
      const s = this.scales.measurementScale(this.getBladeWidth(t.stock));
      return s < 1 ? 1 : Math.ceil(s);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    O.call(this);
  }
  updateShapeVisibility() {
    os.call(this);
  }
  drawPositions(t) {
    return Fe.call(this, t);
  }
  showCut(t) {
    Re.call(this, t);
  }
  resetCuts() {
    Ct.call(this);
  }
}
const us = ["id"], Cs = /* @__PURE__ */ Ut({
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
    moveMode: { default: () => $(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "part-click", "resize"],
  setup(e, { expose: t, emit: s }) {
    const {
      r: i,
      activeStock: n,
      activeShapes: a,
      activeCuts: o,
      activeSegments: l,
      currentCutIndex: r,
      getStock: f,
      getShapes: p,
      getSegments: d,
      getCuts: g,
      cuttingPlan: A
    } = xt(), u = e, k = s, M = (h) => {
      k("part-click", h);
    }, m = (h) => {
      k("shape-colour-update", h);
    }, b = (h, T) => {
      h?.autoId && k("shape-select", h.autoId, T);
    }, S = (h) => {
      h && k("add-to-parts-bin", h);
    }, w = (h, T) => {
      h && k("move-shape", h, T);
    }, x = $(0), v = $(0), Z = $(null);
    let c, Q = $(!1);
    const D = Zt({
      debug: "",
      stretched: !1
    }), H = () => {
      c?.state && (D.stretched = c.state.stretched);
    };
    qt(() => Tt());
    const It = L(() => ({
      format: u.numberFormat,
      decimals: u.decimalPlaces
    })), K = L(() => u.stockAutoId ? f(u.stockAutoId) : n.value), tt = L(() => u.stockAutoId ? p(u.stockAutoId) : a.value), et = L(() => u.main ? u.stockAutoId ? g(u.stockAutoId) : o.value : []), Bt = L(() => u.main ? u.stockAutoId ? d(u.stockAutoId) : l.value : []);
    _t(Z, (h) => {
      const T = h[0], { width: z, height: zt } = T.contentRect;
      z > 0 && (x.value = z), k("resize", { width: z, height: zt });
    }), Vt(
      x,
      (h) => {
        c && (h <= 0 || (c.setDevice(), c.resetShapeAxes(), c.removeCuttingPath(), c.drawAll(), H(), r.value !== null && (c.toggleSegments(!0), c.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let N = !1;
    B(() => K.value, (h) => {
      h && (x.value <= 0 || (N = !0, c.setDevice(), c.resetCuts(), c.removeSegments(), c.resetShapeAxes(), c.removeCuttingPath(), c.drawAll(), H(), Jt(() => N = !1)));
    }, { immediate: !1 }), B(() => tt.value, (h) => {
      N || h && (x.value <= 0 || (c.setDevice(), c.drawShapes()));
    }, { immediate: !1, deep: !0 }), u.main && (B(() => et.value, () => {
      N || x.value <= 0 || c.drawCuts();
    }, { immediate: !1, deep: !0 }), B(r, () => {
      r.value !== null && (x.value <= 0 || (c.toggleSegments(!0), c.showCut(r.value)));
    }, { immediate: !1 }), B(It, (h) => {
      c.updateNumberFormat(h.format, h.decimals, null);
    }, { immediate: !1 }));
    const Tt = () => {
      const h = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${u.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: u.numberFormat,
          decimalPlaces: u.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: u.colors || null,
        settings: {
          main: u.main,
          app: u.app,
          embed: u.embed,
          flipY: u.flipY,
          flipX: !1
        },
        props: {
          containerHeight: v,
          containerWidth: x,
          stock: K,
          shapes: tt,
          cuts: et,
          segments: Bt,
          stockList: i.stockList,
          cuttingPlan: A,
          moveMode: u.moveMode,
          app: u.app
        },
        options: {
          disableClick: u.disableClick,
          enableStretch: u.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: m,
          onShapeSelect: b,
          onAddToPartsBin: S,
          onMoveShape: w,
          onPartClick: M
        }
      };
      c = new hs(h), D.debug = c.state.debug, Q.value = !0;
    }, Rt = (h = !1) => {
      c && c.toggleShapes(h);
    }, Wt = (h = !1) => {
      c && c.toggleCuts(h);
    }, Mt = (h = !1) => {
      c && c.toggleSegments(h);
    }, Dt = () => {
      c && c.drawShapes();
    }, $t = () => {
      c && (c.drawStock(), H());
    }, Lt = () => {
      c && (c.toggleSegments(!1), c.resetCuts());
    }, Ot = (h) => {
      c && (c.toggleSegments(!0), c.showCut(h));
    }, Ht = (h) => c ? c.drawPositions(h) : !1, Nt = () => {
      c && c.removePositions();
    }, Et = (h) => {
      c && c.findShape(h);
    }, Yt = () => {
      c && c.clearSelection();
    }, Ft = (h) => c ? c.requiresStretch(h) : !1, jt = (h) => {
      c?.options && (c.options.enableStretch = h, c.setAspectRatio(), c.drawAll(), H());
    }, Xt = () => c?.options?.enableStretch ?? !0;
    return B(() => u.flipY, (h) => {
      c?.settings && (c.settings.flipY = h, c.setAspectRatio(), c.drawAll());
    }), B(() => D.debug, (h) => {
      c?.state && (c.state.debug = h);
    }), t({
      loaded: Q,
      toggleShapes: Rt,
      toggleCuts: Wt,
      toggleSegments: Mt,
      drawShapes: Dt,
      drawStock: $t,
      drawPositions: Ht,
      resetPositions: Nt,
      findShape: Et,
      clearSelection: Yt,
      resetCuts: Lt,
      showCut: Ot,
      requiresStretch: Ft,
      setEnableStretch: jt,
      getEnableStretch: Xt,
      animateCuttingPath: () => {
        c && c.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        c && c.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        c && c.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        c && c.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => c?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (h) => {
        c && c.setCuttingPathAnimationSpeed(h);
      },
      state: D,
      get stretched() {
        return D.stretched;
      },
      set moving(h) {
        c?.state && (c.state.moving = h);
      }
    }), (h, T) => (Kt(), Qt("div", {
      id: e.elementId,
      ref_key: "diagramContainerRef",
      ref: Z,
      class: te([{ app: e.app }, "diagram-container"])
    }, null, 10, us));
  }
});
export {
  Cs as default
};
