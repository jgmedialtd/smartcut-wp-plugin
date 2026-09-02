import { d as me, l as ye, J as xe, Z as ve, k as F, I as be, o as Se, c as we, g as ke, s as H, K as Ae, x as j } from "./vendor-vue-CrNGqS0k.js";
import { k as Wt, A as Pe, D as Ce, G as Ge } from "./EcommerceCalculator-CTmE4c2O.js";
import { h as Re, f as Le, l as M, g as ot, e as at, s as S, r as T, i as K, j as Te, d as Ie } from "./vendor-d3-DI9vO-24.js";
import { a5 as Me, L as We, P, a6 as De, a7 as B, Y as rt, _ as $e, a8 as V } from "./NestingShape-JAVnw-aP.js";
import { P as O } from "./PointCollection-BWf2NSit.js";
import { g as Be } from "./vendor-lodash-wbyiOdVF.js";
function Oe(e) {
  const t = e.x, s = e.x + e.l, i = M().domain([t, s]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(s)]), n = e.y, o = e.y + e.w, a = M().domain([n, o]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(o)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(ot(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(ot(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), e?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(at(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(at(a).tickValues(a.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Fe() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(Re(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const e = this.requiresStretch(this.props.stock.value);
  (!e || e && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(Le(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function Dt(e, t, s) {
  !s || !e?.length || e.forEach((i, n) => {
    const [o, a] = i;
    s === "x" ? Ne.call(this, o, a, t[n]) : Ee.call(this, o, a, t[n]);
  });
}
function Ne(e, t, s) {
  const i = M().domain([e, t]).range([
    this.scales.xPositionScale(e),
    this.scales.xPositionScale(t)
  ]), n = $t(i.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(ot(i).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(s)));
  o.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (a, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(o);
}
function Ee(e, t, s) {
  const i = M().domain([e, t]).range([
    this.scales.yPositionScale(e),
    this.scales.yPositionScale(t)
  ]), n = $t(i.domain()), o = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(at(i).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(s)));
  He(o), this.axes.cutMeasurementYAxes.push(o);
}
function $t(e) {
  return (e[1] - e[0]) / 2 + e[0];
}
function He(e) {
  e.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (t, s, i) => i[s]?.getBBox()?.height + 10).attr("dx", (t, s, i) => i[s]?.getBBox()?.width / 4).attr("transform", (t, s, i) => "rotate(90) translate(" + i[s]?.getBBox()?.width / 4 + ")");
}
function Y() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function je() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function st() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function ct(e) {
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
function nt({ parent: e, near: t, far: s, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const n = [e, t, s, ...i].filter((o) => o);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(n, ct).join(
    (o) => o.append("rect").attr("class", "segment").call((a) => mt.call(this, a)),
    (o) => o.call((a) => mt.call(this, a)),
    (o) => o.remove()
  ), this.state.env === "development" && Xe.call(this, n), !this.settings.app && this.state.env === "development" && ze.call(this);
}
function mt(e) {
  return e.classed("offcut", (t) => t.offcut).classed("near", (t) => t.type === "near").classed("far", (t) => t.type === "far").classed("parent", (t, s) => t.id !== "root" && s === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function Xe(e) {
  this.selections.segmentGroup.selectAll("text").data(e, ct).join(
    (t) => t.append("text").attr("class", "segment-text").call((s) => yt.call(this, s)),
    (t) => t.call((s) => yt.call(this, s)),
    (t) => t.remove()
  );
}
function yt(e) {
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
function Ot(e, t = []) {
  if (!e) return t;
  if (e.offcut && t.push(e), e.children && Array.isArray(e.children))
    for (const s of e.children)
      Ot(s, t);
  return t;
}
function Ue() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const e = [];
  for (const s of this.props.segments.value)
    Ot(s, e);
  if (!e.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const t = (s) => s.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(e, ct).join(
    (s) => s.append("rect").attr("class", "segment offcut").call(t),
    (s) => s.call(t),
    (s) => s.remove()
  );
}
const { currentCutIndex: _e } = Wt();
function qe() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (e, t) => t).join(
    (e) => e.append("line").attr("class", "cut").call((t) => xt.call(this, t)),
    (e) => e.call((t) => xt.call(this, t)),
    (e) => e.remove()
  ), Et.call(this));
}
function xt(e) {
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
function Ft(e, t, s) {
  return e.guillotineState.parentSegmentID === t && s && e.guillotineState.segmentCutOrder < s;
}
function Nt(e, t) {
  return e.guillotineState?.parentSegmentID !== null && !e?.isTrim ? e.guillotineState.parentSegmentID === t : !1;
}
function Ve(e, t, s) {
  this.selections.cutLines.style("visibility", (i) => typeof e.guillotineState?.[s] == "number" && typeof i.guillotineState?.[s] == "number" && i.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, n) => n === t);
}
function Ze(e, t, s, i) {
  this.selections.cutLines.style("visibility", (o) => typeof e.guillotineState[s] == "number" && o.guillotineState[s] <= e.guillotineState[s] || !i && o.guillotineState.parentSegmentID === t ? "visible" : "hidden"), _e.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o) => typeof e.guillotineState[s] == "number" && o.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o) => typeof e.guillotineState[s] == "number" && o.guillotineState[s] <= e.guillotineState[s] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o) => e.stock.cutType === "guillotine" && o.isTrim ? o.position === e.type : o.guillotineState[s] === e.guillotineState[s]), this.selections.cutLines.classed("ptx-dummy", (o) => o?.ptxData?.isDummy), i || Qe.call(this, e, t);
}
function Je(e, t, s, i, n) {
  this.selections.cutLines.style("visibility", (a, l) => l <= t ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a, l) => l <= t ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a, l) => l <= t ? "visible" : "hidden"));
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
    this.state.device === "desktop" && !e.isTrim && Dt.call(this, o, a, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a, l) => l === t);
}
function Et() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (e) => {
    const t = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return Math.max(1, Math.ceil(t));
  }), Y.call(this), st.call(this);
}
function Qe(e, t) {
  const s = e?.guillotineState?.segmentCutOrder;
  if (s == null) return;
  this.selections.cutLines.classed("completed", (p) => Ft(p, t, s)), this.selections.cutLines.classed("inside-segment", (p) => Nt(p, t));
  const i = Bt.call(this, e);
  if (i === !1) return;
  const { parent: n, children: o } = i, { near: a } = Ht(e, o);
  if (!a) return;
  let l = [], r;
  const c = this.getHalfBladeWidth(e.stock), h = e.dimension === "l" ? "y" : "x";
  e?.dimension === "l" ? (l = [
    [
      a.y,
      a.y + a.w
    ],
    [
      e.y1 + c,
      n.y + n.w
    ]
  ], r = [e?.distances?.bottom, e?.distances.top]) : e?.dimension === "w" && (l = [
    [
      a.x,
      a.x + a.l
    ],
    [
      e.x1 + c,
      n.x + n.l
    ]
  ], r = [e?.distances?.left, e?.distances?.right]), this.state.device === "desktop" && !e.isTrim && r && Dt.call(this, l, r, h);
}
function Ke(e = null, t = "") {
  if (e === null || this.selections.cutLines.empty()) return;
  const s = this.props.cuts.value[e];
  if (!s) return;
  if (Y.call(this), st.call(this), e !== null && e >= 0 && e < this.selections.cutLines.size()) {
    const d = this.selections.cutLines.nodes()[e].parentElement;
    if (!d) return;
    S(d).raise();
  }
  const i = s.guillotineState?.parentSegmentID, n = this.getHalfBladeWidth(s.stock), o = s.dimension === "l" ? "y" : "x", a = s?.stock?.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (s.isTrim && ["guillotine", "beam"].includes(s?.stock?.cutType)) {
    Ve.call(this, s, e, l), vt.call(this, s, e, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(s?.stock?.cutType) && i !== null && typeof i < "u" ? Ze.call(this, s, i, l, t) : Je.call(this, s, e, a, o, n), vt.call(this, s, e, i), t === "ptx") {
    this.removeSegments();
    return;
  }
  const r = Bt.call(this, s);
  if (r === !1)
    return;
  const { parent: c, children: h } = r;
  if (!s?.guillotineState?.parentSegmentID)
    return nt.call(this, { parent: c });
  if (s.stock?.cutType === "beam" && c.phase === 0) {
    const y = this.props.segments.value.find((b) => b.stock?.autoId === s.stock?.autoId)?.children || h, A = y.find((b) => b.offcut === !0 && b.y === 0 && b.isTrimOffcut === !0), x = y.find((b) => b.offcut === !0 && b !== A && b.y + b.w >= s.stock.w - (s.stock.trim?.l2 || 0)), w = y.filter((b) => !b.offcut), k = w.find((b) => b.type === "near"), C = w.find((b) => b.type === "far"), G = [A, x].filter(Boolean);
    return nt.call(this, { parent: c, near: k, far: C, offcuts: G });
  }
  const { near: p, far: u, offcuts: m } = Ht(s, h);
  nt.call(this, { parent: c, near: p, far: u, offcuts: m });
}
function Ht(e, t) {
  const s = e.dimension === "l" ? "y" : "x", i = e.dimension === "l" ? "w" : "l", n = e.stock?.cutType === "beam";
  let o, a;
  if (n)
    o = t.find((r) => r.type === "near" && !r.offcut), a = t.find((r) => r.type === "far" && !r.offcut);
  else {
    const c = e[s + "1"], h = e.stock.halfBladeWidth;
    o = t.find((p) => p.type === "near" && Math.abs(p[s] + p[i] - (c - h)) < 1e-6), a = t.find((p) => p.type === "far" && Math.abs(p[s] - (c + h)) < 1e-6);
  }
  const l = t.filter((r) => r.offcut === !0 && r !== o && r !== a);
  return { near: o, far: a, offcuts: l };
}
function vt(e, t, s) {
  this.selections.cutLines.attr("stroke-width", (i, n) => {
    const o = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let a = Math.max(1, Math.ceil(o));
    const l = e?.guillotineState?.segmentCutOrder;
    return (Ft(i, s, l) || Nt(i, s)) && (a += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (a = 5), a;
  });
}
function ts(e) {
  if (e.length < 2) return [];
  const t = (o) => o.type !== "rapid", s = [];
  let i = [e[0]], n = t(e[1]);
  for (let o = 1; o < e.length; o++)
    t(e[o]) !== n && (s.push({ points: i, cutting: n }), i = [e[o - 1]], n = t(e[o])), i.push(e[o]);
  return s.push({ points: i, cutting: n }), s;
}
function es() {
  if (!this.settings.main || !this.props.cuttingPlan?.value) return;
  const e = this.props.cuttingPlan.value;
  if (!e.contours?.length) return;
  this.selections.cuttingPathGroup || (this.selections.cuttingPathGroup = this.selections.svgCanvas.append("g").attr("class", "cutting-path")), this.selections.cuttingPathGroup.selectAll("*").remove();
  const t = this.scales.xPositionScale, s = this.scales.yPositionScale;
  let i = { x: 0, y: 0 };
  e.contours.forEach((n, o) => {
    const a = n.leadIn.length > 0 ? n.leadIn[0] : n.contour[0];
    if (!a) return;
    this.selections.cuttingPathGroup.append("line").attr("class", "contour rapid").datum({ contourIndex: o }).attr("x1", t(i.x)).attr("y1", s(i.y)).attr("x2", t(a.x)).attr("y2", s(a.y)).attr("stroke", "#000").attr("stroke-width", 0.5).attr("stroke-dasharray", "2,3").attr("fill", "none"), i = n.leadOut.length > 0 ? n.leadOut[n.leadOut.length - 1] : n.contour.length > 0 ? n.contour[n.contour.length - 1] : a;
  }), e.contours.forEach((n, o) => {
    const a = [
      ...n.leadIn,
      ...n.contour,
      ...n.leadOut
    ];
    for (const l of ts(a)) {
      const r = l.points.map(
        (h, p) => `${p === 0 ? "M" : "L"} ${t(h.x)} ${s(h.y)}`
      ).join(" "), c = this.selections.cuttingPathGroup.append("path").attr("class", `contour ${l.cutting ? "cut" : "rapid"}`).datum({ contourIndex: o }).attr("d", r).attr("fill", "none");
      l.cutting ? c.attr("stroke", "#ff00ff").attr("stroke-width", 1) : c.attr("stroke", "#000").attr("stroke-width", 0.5).attr("stroke-dasharray", "2,3");
    }
  });
}
function ss(e) {
  if (!this.selections.cuttingPathGroup) return;
  const t = this.selections.cuttingPathGroup.selectAll(".contour");
  if (e === null) {
    t.style("opacity", 1).classed("active", !1);
    return;
  }
  t.style("opacity", (s) => s.contourIndex <= e ? 1 : 0.15).classed("active", (s) => s.contourIndex === e);
}
function is() {
  jt.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const W = /* @__PURE__ */ new WeakMap();
function ns(e, t, s) {
  const i = [];
  let n = 0, o = t(0), a = s(0);
  const l = (r, c, h) => {
    const p = r - o, u = c - a;
    n += Math.sqrt(p * p + u * u), i.push({ sx: r, sy: c, type: h, cumDist: n }), o = r, a = c;
  };
  return i.push({ sx: o, sy: a, type: "rapid", cumDist: 0 }), e.contours.forEach((r) => {
    const c = r.leadIn.length > 0 ? r.leadIn[0] : r.contour[0];
    if (!c) return;
    l(t(c.x), s(c.y), "rapid");
    const h = [
      ...r.leadIn,
      ...r.contour,
      ...r.leadOut
    ];
    for (let p = 1; p < h.length; p++) {
      const u = h[p];
      l(t(u.x), s(u.y), u.type === "rapid" ? "rapid" : "cutting");
    }
  }), i;
}
function os(e, t) {
  if (t <= 0) return { sx: e[0].sx, sy: e[0].sy, type: e[0].type };
  for (let i = 1; i < e.length; i++)
    if (e[i].cumDist >= t) {
      const n = e[i - 1], o = e[i], a = o.cumDist - n.cumDist;
      if (a === 0) return { sx: o.sx, sy: o.sy, type: o.type };
      const l = (t - n.cumDist) / a;
      return {
        sx: n.sx + (o.sx - n.sx) * l,
        sy: n.sy + (o.sy - n.sy) * l,
        type: o.type
      };
    }
  const s = e[e.length - 1];
  return { sx: s.sx, sy: s.sy, type: s.type };
}
function as() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const e = this.props.cuttingPlan.value;
  if (!e.contours?.length) return;
  let t = W.get(this);
  if (!t || !t.waypoints.length) {
    const o = this.scales.xPositionScale, a = this.scales.yPositionScale, l = ns(e, o, a);
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
    }, W.set(this, t);
  } else
    t.playing = !0, t.lastTime = null;
  this.selections.cuttingPathGroup.select(".cutting-path-dot").empty() && this.selections.cuttingPathGroup.append("circle").attr("class", "cutting-path-dot").attr("r", 4).attr("fill", "#000").attr("stroke", "#fff").attr("stroke-width", 1.5), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-cut").attr("fill", "none").attr("stroke-width", 2).attr("stroke", "#000").attr("opacity", 0.6), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-rapid").attr("fill", "none").attr("stroke-width", 1.5).attr("stroke", "#000").attr("stroke-dasharray", "2,3").attr("opacity", 0.6);
  const i = this, n = (o) => {
    if (!t.playing) return;
    t.lastTime === null && (t.lastTime = o);
    const a = (o - t.lastTime) / 1e3;
    t.lastTime = o, t.progress += t.speed * a, t.progress >= 1 && (t.progress = 1, t.playing = !1);
    const l = t.progress * t.totalDistance, r = os(t.waypoints, l);
    i.selections.cuttingPathGroup.select(".cutting-path-dot").attr("cx", r.sx).attr("cy", r.sy).attr("fill", "#000");
    let h = "", p = "", u = null;
    for (let m = 0; m < t.waypoints.length; m++) {
      const d = t.waypoints[m];
      if (d.cumDist > l) break;
      d.type === "cutting" ? ((!u || u.type !== "cutting") && (h += ` M ${u ? u.sx : d.sx} ${u ? u.sy : d.sy}`), h += ` L ${d.sx} ${d.sy}`) : ((!u || u.type !== "rapid") && (p += ` M ${u ? u.sx : d.sx} ${u ? u.sy : d.sy}`), p += ` L ${d.sx} ${d.sy}`), u = d;
    }
    t.progress < 1 && u && (r.type === "cutting" ? h += ` L ${r.sx} ${r.sy}` : p += ` L ${r.sx} ${r.sy}`), i.selections.cuttingPathGroup.select(".cutting-path-trail-cut").attr("d", h), i.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").attr("d", p), t.playing && (t.rafId = requestAnimationFrame(n));
  };
  t.rafId && cancelAnimationFrame(t.rafId), t.rafId = requestAnimationFrame(n);
}
function ls() {
  const e = W.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), e.lastTime = null);
}
function jt() {
  const e = W.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), W.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function rs() {
  const e = W.get(this);
  e && (e.playing = !1, e.rafId && (cancelAnimationFrame(e.rafId), e.rafId = null), e.lastTime = null), W.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function cs() {
  return W.get(this)?.playing ?? !1;
}
function hs(e) {
  const t = W.get(this);
  t && (t.speed = e);
}
class X {
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
    const i = new X(t ?? this.x, s ?? this.y, this.z);
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
  getAvailableShapePositions(t, s = !1) {
    return Me(this, t, s);
  }
  static fromCoords(t, s, i) {
    return new X(t, s, i ?? 0);
  }
}
function D(e, t, s, i, n = null, o = null) {
  return new We({ x1: e, y1: t, x2: s, y2: i, origin: n, type: o });
}
function us(e, t) {
  const s = e.getCorners(), i = {};
  return s.bottomLeft.x > 0 && s.bottomLeft.y > 0 && (i.bottomLeftDown = D(
    s.bottomLeft.x,
    s.bottomLeft.y,
    s.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), i.bottomLeftLeft = D(
    s.bottomLeft.x,
    s.bottomLeft.y,
    0,
    s.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), s.topLeft.x > 0 && s.topLeft.y < t.w && (i.topLeftLeft = D(
    s.topLeft.x,
    s.topLeft.y,
    0,
    s.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), i.topLeftTop = D(
    s.topLeft.x,
    s.topLeft.y,
    s.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), s.topRight.y < t.w && s.topRight.x < t.l && (i.topRightTop = D(
    s.topRight.x,
    s.topRight.y,
    s.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), i.topRightRight = D(
    s.topRight.x,
    s.topRight.y,
    t.l,
    s.topRight.y,
    "topRight",
    "topRightRight"
  )), s.bottomRight.x < t.l && s.bottomRight.y > 0 && (i.bottomRightRight = D(
    s.bottomRight.x,
    s.bottomRight.y,
    t.l,
    s.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), i.bottomRightDown = D(
    s.bottomRight.x,
    s.bottomRight.y,
    s.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), i;
}
function z(e, t, s = null) {
  if (e.has(t.x, t.y)) {
    const i = e.get(t.x, t.y);
    i.type === "group" && !s && (i.type = void 0);
    return;
  }
  s && (t.type = s), e.add(t);
}
function tt(e, t, s = null) {
  for (const i of t) {
    if (!i) return;
    z(e, i, s);
  }
}
function v(e, t, s, i, n) {
  const o = ds[e](t, s);
  return i && (o.corner = i), n && (o.direction = n), o;
}
const ds = {
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
function fs(e, t, s) {
  const i = new O(), n = s.toArray().sort(zt), o = t.bladeWidth;
  if (n.forEach((a) => {
    const l = a.corner, r = a.type;
    if (!o)
      i.add(a);
    else
      switch (l) {
        case "topRight":
          {
            const c = v("top", a, o, l);
            r && (c.type = r), i.add(c);
            const h = v("right", a, o, l);
            r && (h.type = r), i.add(h);
          }
          break;
        case "topLeft":
          {
            const c = v("top", a, o, l);
            r && (c.type = r), i.add(c);
            const h = v("left", a, o, l);
            r && (h.type = r), i.add(h);
          }
          break;
        case "bottomRight":
          {
            const c = v("bottom", a, o, l);
            r && (c.type = r), i.add(c);
            const h = v("right", a, o, l);
            r && (h.type = r), i.add(h);
          }
          break;
        case "bottomLeft":
          {
            const c = v("bottom", a, o, l);
            r && (c.type = r), i.add(c);
            const h = v("left", a, o, l);
            r && (h.type = r), i.add(h);
          }
          break;
      }
  }), o) {
    const a = i.toArray();
    for (let l = a.length; l--; ) {
      const r = a[l];
      s.has(r.x, r.y) && i.remove(r.x, r.y);
    }
  } else {
    const a = i.toArray();
    for (let l = a.length; l--; ) {
      const r = a[l];
      for (let c = e.length; c--; ) {
        const h = e[c];
        if (r.x === h.x && r.y === h.y) {
          i.remove(r.x, r.y);
          break;
        }
      }
    }
  }
  if (o) {
    const a = /* @__PURE__ */ new Set();
    let l, r, c, h;
    t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (l = t.x, r = t.y, c = t.x + t.l, h = t.y + t.w) : (l = t.x + (t?.trim?.w1 ?? 0), r = t.y + (t?.trim?.l1 ?? 0), c = t.x + t.l - (t?.trim?.w2 ?? 0), h = t.y + t.w - (t?.trim?.l2 ?? 0));
    let p = i.toArray();
    for (let u = p.length; u--; ) {
      const m = p[u];
      (B.lessThan(m.x, l) || B.lessThan(m.y, r) || B.greaterThan(m.x, c) || B.greaterThan(m.y, h)) && p.splice(u, 1);
    }
    i.clear(), p.forEach((u) => i.add(u)), a.clear(), p = i.toArray();
    for (let u = p.length; u--; ) {
      const m = p[u];
      for (let d = e.length; d--; ) {
        const y = e[d];
        if (m.collidesWith(y)) {
          i.remove(m.x, m.y);
          break;
        }
      }
    }
  }
  return i;
}
function Yt(e, t, s) {
  let i = [];
  const n = e.getMinSpacing(s.saw), o = t.corner, a = t.direction;
  if (t.type === "shape")
    switch (o) {
      case "topLeft":
        a === "rl" && (i.push(v("right", t, n, o, a)), i.push(v("topRight", t, n, o, a))), a === "bt" && (i.push(v("bottom", t, n, o, a)), i.push(v("bottomLeft", t, n, o, a)));
        break;
      case "topRight":
        a === "lr" && (i.push(v("left", t, n, o, a)), i.push(v("topLeft", t, n, o, a))), a === "bt" && (i.push(v("bottom", t, n, o, a)), i.push(v("bottomRight", t, n, o, a)));
        break;
      case "bottomRight":
        a === "lr" && (i.push(v("left", t, n, o, a)), i.push(v("bottomLeft", t, n, o, a))), a === "tb" && (i.push(v("top", t, n, o, a)), i.push(v("topRight", t, n, o, a)));
        break;
      case "bottomLeft":
        a === "rl" && (i.push(v("right", t, n, o, a)), i.push(v("bottomRight", t, n, o, a))), a === "tb" && (i.push(v("top", t, n, o, a)), i.push(v("topLeft", t, n, o, a)));
        break;
    }
  else if (t.type === "edge")
    switch (a) {
      case "rl":
      case "lr":
        i.push(v("top", t, 0)), i.push(v("centre", t, 0)), i.push(v("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        i.push(v("left", t, 0)), i.push(v("right", t, 0)), i.push(v("centre", t, 0));
        break;
    }
  if (i = i.filter((r) => r.x >= 0 && r.y >= 0), !i.length) return null;
  const l = new O();
  for (const r of i)
    r.raycast = !0, tt(l, ut(e, r, s).toArray());
  return qt(e, s, l), l;
}
function ps(e, t, s = !1) {
  const i = new O();
  return e.sort(zt), e.forEach((n) => {
    De(n) ? (tt(i, n.getCoords(t, s)), n.shapes.forEach((o) => {
      if (o.x === null || o.x === void 0 || o.y === null || o.y === void 0) return;
      const a = o.getCoords(t, s);
      tt(i, a, "group");
    })) : tt(i, n.getCoords(t, s));
  }), i.points.forEach((n) => {
    n.stock = t.getStock;
  }), i;
}
function Xt(e = [], t, s, i = !1) {
  const n = ps(
    e === null ? t : e,
    s,
    i
  );
  return fs(
    t,
    s,
    n
  );
}
function zt(e, t) {
  return e.y === t.y ? t.x - e.x : t.y - e.y;
}
function Ut(e, t, s, i, n, o) {
  e.a = t.id, e.b = s ? s.id : null, e.direction = i, e.raycast = !0, e.type = n, e.corner = o;
}
function _t(e, t) {
  if (e.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let s = new O();
  const i = ht(t, e);
  for (const l of t)
    for (const r of i) {
      if (r.shape.id === l.id) continue;
      const c = Object.values(r.rays).filter((h) => h !== void 0);
      for (const h of c)
        gs(
          h,
          r.shape,
          l,
          s
        );
    }
  const o = e.saw.efficiencyOptions.primaryCompression === "l" ? "lr" : "tb", a = t.reduce((l, r) => (o === "tb" ? l.x + l.l > r.x + r.l : l.y + l.w > r.y + r.w) ? l : r);
  return i.filter(({ shape: l }) => l.id === a.id).forEach(({ shape: l, rays: r }) => {
    const c = Object.values(r).filter((h) => h !== void 0);
    for (const h of c) {
      const p = new P(h.x2, h.y2);
      o === h.direction && (Ut(p, l, null, h.direction, "edge"), z(s, p));
    }
  }), s = ms(s), s;
}
function ht(e, t) {
  return e.map((s) => {
    const i = us(s, t);
    return {
      shape: s,
      rays: i
    };
  });
}
function gs(e, t, s, i) {
  switch (e.direction) {
    case "rl":
      Z(
        e,
        t,
        s,
        i,
        s.x + s.l
      );
      break;
    case "lr":
      Z(
        e,
        t,
        s,
        i,
        s.x
      );
      break;
    case "tb":
      Z(
        e,
        t,
        s,
        i,
        s.y + s.w
      );
      break;
    case "bt":
      Z(
        e,
        t,
        s,
        i,
        s.y
      );
      break;
  }
}
function Z(e, t, s, i, n) {
  const o = e.dimension === "w", a = o ? "y" : "x", l = o ? "x" : "y", r = o ? "l" : "w";
  if (e[`${l}1`] >= s[l] && e[`${l}1`] <= s[l] + s[r]) {
    const c = e.direction === "lr" && e[`${a}1`] <= n && e[`${a}2`] >= n, h = e.direction === "rl" && e[`${a}1`] >= n && e[`${a}2`] <= n, p = e.direction === "bt" && e[`${a}1`] <= n && e[`${a}2`] >= n, u = e.direction === "tb" && e[`${a}1`] >= n && e[`${a}2`] <= n;
    if (c || h || p || u) {
      const d = o ? e[`${l}1`] : n, y = o ? n : e[`${l}1`], A = new P(d, y), x = e.origin;
      Ut(A, t, s, e.direction, "shape", x), z(i, A);
    }
  }
}
function ms(e) {
  const t = new O();
  return e.points.size === 0 || new Set(e.toArray().map((i) => i.a)).forEach((i) => {
    const n = e.toArray().filter((o) => o.a === i);
    ["right", "left", "top", "bottom"].forEach((o) => {
      const a = ys(
        n,
        o
      );
      a && z(t, a);
    });
  }), t;
}
function ys(e, t) {
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
function ut(e, t, s, i = !1) {
  const n = new O(), o = t.getAvailableShapePositions(s, i), a = vs(t, e, s), l = xs(a);
  for (const r of o) {
    let c;
    switch (r) {
      case "bottomLeft":
        c = l.cloneAt(l.x - e.l, l.y - e.w), c.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        c = l.cloneAt(l.x, l.y - e.w), c.shapePosition = "bottomRight";
        break;
      case "topLeft":
        c = l.cloneAt(l.x - e.l, l.y), c.shapePosition = "topLeft";
        break;
      case "topRight":
        c = l.cloneAt(l.x, l.y), c.shapePosition = "topRight";
        break;
      default:
        continue;
    }
    z(n, c);
  }
  return qt(e, s, n), n;
}
function xs(e) {
  if (e instanceof X) return e;
  const t = new X(e.x, e.y, e.z);
  return e.a !== void 0 && (t.a = e.a), e.b !== void 0 && (t.b = e.b), e.stock && (t.stock = e.stock), e.direction && (t.direction = e.direction), e.type && (t.type = e.type), e.corner && (t.corner = e.corner), e.shapePosition && (t.shapePosition = e.shapePosition), e.grid && (t.grid = e.grid), e.raycast && (t.raycast = e.raycast), e.collision && (t.collision = e.collision), e.tooClose && (t.tooClose = e.tooClose), e.adjustedForMinSpacing && (t.adjustedForMinSpacing = e.adjustedForMinSpacing), t;
}
function vs(e, t, s) {
  if (s.saw.cutType !== "efficiency") return e;
  const i = t.getMinSpacing(s.saw), n = s.bladeWidth;
  if (!i || i === n) return e;
  let o;
  if (!e.grid) return e;
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
function qt(e, t, s) {
  let i, n, o, a;
  t?.constructor?.name === "Stock" && t?.trimmed || t?.constructor?.name === "Segment" ? (i = 0, n = 0, o = t.x + t.l - e.l, a = t.y + t.w - e.w) : (i = t?.trim?.w1 ?? 0, n = t?.trim?.l1 ?? 0, o = t.l - (t?.trim?.w2 ?? 0) - e.l, a = t.w - (t?.trim?.l2 ?? 0) - e.w);
  const l = s.toArray();
  for (let r = l.length; r--; ) {
    const c = l[r];
    (B.lessThan(c.x, i) || B.lessThan(c.y, n) || B.greaterThan(c.x, o) || B.greaterThan(c.y, a) || c.x < 0 || c.y < 0) && s.remove(c.x, c.y);
  }
}
const lt = (e, t) => `${Math.round(e * 100)}:${Math.round(t * 100)}`;
function bs(e, t, s, i, n = {}) {
  e.selectAll("g.canvas-grid").remove();
  const o = e.append("g").attr("class", "canvas-grid");
  o.selectAll("line.grid-v").data(t.ticks(n.x ?? 8)).join("line").attr("class", "grid-v").attr("x1", (a) => t(a)).attr("x2", (a) => t(a)).attr("y1", Math.min(i.y0, i.y1)).attr("y2", Math.max(i.y0, i.y1)), o.selectAll("line.grid-h").data(s.ticks(n.y ?? 6)).join("line").attr("class", "grid-h").attr("x1", Math.min(i.x0, i.x1)).attr("x2", Math.max(i.x0, i.x1)).attr("y1", (a) => s(a)).attr("y2", (a) => s(a));
}
function Vt(e, t, s, i, n = {}) {
  const o = n.r ?? 3, a = `snap-dot${n.extraClass ? ` ${n.extraClass}` : ""}`;
  e.classed("snap-layer", !0).classed("snap-layer--passive", !!n.passive);
  const l = e.selectAll("circle.snap-dot").data(t, (r) => lt(r.x, r.y)).join("circle").attr("class", a).attr("data-key", (r) => lt(r.x, r.y)).attr("data-id", (r, c) => c).attr("cx", (r) => s(r.x)).attr("cy", (r) => i(r.y)).attr("r", o);
  n.passive || (n.onSelect && l.on("mousedown", (r, c) => n.onSelect(c, r)), n.onHoverChange && l.on("mouseover", function(r, c) {
    S(this).classed("hover", !0), n.onHoverChange(c, r);
  }, { passive: !0 }).on("mouseout", function(r) {
    S(this).classed("hover", !1), n.onHoverChange(null, r);
  }, { passive: !0 }));
}
function Ss(e, t, s = {}) {
  const i = s.r ?? 3, n = s.activeR ?? i + 1.5;
  e.selectAll("circle.snap-dot").classed("active", function() {
    return S(this).attr("data-key") === t;
  }).attr("r", function() {
    return S(this).attr("data-key") === t ? n : i;
  });
}
function et(e) {
  const t = e?.group?.addedAsGroup;
  return !t || !(typeof t == "object" ? t.__entityType === "userGroup" || t.type === "user" : e.group?.inUserGroup || e.group?.reference?.type === "user") ? null : typeof t == "string" ? t : t.autoId || t.id || null;
}
function Zt(e, t = null) {
  const s = /* @__PURE__ */ new Map();
  for (const i of e) {
    if (!i?.added) continue;
    const n = et(i);
    !n || n === t || (s.has(n) || s.set(n, []), s.get(n).push(i));
  }
  return [...s.entries()].map(([i, n]) => {
    const o = Math.min(...n.map((c) => c.x.valueOf())), a = Math.min(...n.map((c) => c.y.valueOf())), l = Math.max(...n.map((c) => c.x.valueOf() + c.l.valueOf())), r = Math.max(...n.map((c) => c.y.valueOf() + c.w.valueOf()));
    return { id: `__group-bbox-${i}`, x: o, y: a, l: l - o, w: r - a };
  });
}
function ws() {
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
    const n = Math.min(...i.map((r) => r.x)), o = Math.min(...i.map((r) => r.y)), a = Math.max(...i.map((r) => r.x + r.l)) - n, l = Math.max(...i.map((r) => r.y + r.w)) - o;
    s.push({ x: n, y: o, l: a, w: l, shapes: i });
  }
  this.initGroups(s);
}
function ks(e) {
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
  const i = Xt(
    null,
    this.props.shapes.value,
    this.props.stock.value,
    !0
  );
  let n;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let l = function(p) {
        return `${p.x1}-${p.y1}-${p.x2}-${p.y2}`;
      }, r = function(p) {
        p.attr("class", "ray").attr("x1", (u) => this.scales.xPositionScale(u.x1)).attr("x2", (u) => this.scales.xPositionScale(u.x2)).attr("y1", (u) => this.scales.yPositionScale(u.y1)).attr("y2", (u) => this.scales.yPositionScale(u.y2));
      };
      if (this.state.env !== "development") return;
      const h = ht(this.props.shapes.value, this.props.stock.value).flatMap((p) => Object.values(p.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(h, l).join(
        (p) => p.append("line").call((u) => r.call(this, u)),
        (p) => p.call((u) => r.call(this, u)),
        (p) => p.remove()
      );
    }
    n = _t(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const o = new O();
  for (const l of i.toArray()) {
    const r = ut(e, l, this.props.stock.value, !0);
    r && o.addPoints(r.toArray());
  }
  if (n) {
    const l = n.toArray();
    for (const r of l) {
      const c = Yt(e, r, this.props.stock.value);
      c && o.addPoints(c.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const l = this.props.stock.value;
    [
      new P(l.trim.w1 ?? 0, l.trim.l1 ?? 0),
      new P(l.trim.w1 ?? 0, l.trim.l1 ?? 0),
      new P(
        l.l - e.l - (l.trim.w2 ?? 0),
        l.trim.l1 ?? 0
      ),
      new P(
        l.trim.w1 ?? 0,
        l.w - e.w - (l.trim.l2 ?? 0)
      ),
      new P(
        l.l - e.l - (l.trim.w2 ?? 0),
        l.w - e.w - (l.trim.l2 ?? 0)
      )
    ].forEach((r) => o.add(r)), t = o.toArray();
  } else {
    const l = this.props.stock.value;
    o.add(new P(l.trim.w1 ?? 0, l.trim.l1 ?? 0)), t = o.toArray();
  }
  const a = [
    ...this.props.shapes.value,
    ...Zt(this.props.shapes.value)
  ];
  for (let l = t.length; l--; ) {
    const r = t[l];
    e.x = r.x, e.y = r.y;
    for (const c of a)
      if (this.collision(e, c, this.props.stock.value)) {
        t.splice(l, 1);
        break;
      }
  }
  return console.log("[Diagram] drawPositions: filtered positions count:", t?.length), Jt.call(this), Ps.call(this, t, e), Cs.call(this, t, e), t?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Jt() {
  const e = this.selections.moveGridGroup, t = this.props.stock?.value;
  !e || !t || bs(
    e,
    this.scales.xPositionScale,
    this.scales.yPositionScale,
    {
      x0: this.scales.xPositionScale(0),
      x1: this.scales.xPositionScale(t.l),
      y0: this.scales.yPositionScale(0),
      y1: this.scales.yPositionScale(t.w)
    },
    { x: 10, y: 8 }
  );
}
function As(e, t, s, i) {
  return e.filter((n) => (t.x = n.x, t.y = n.y, !s.some((o) => this.collision(t, o, i))));
}
function Ps(e, t) {
  function s(n) {
    return `${n.x}-${n.y}`;
  }
  function i(n, o) {
    n.attr("data-id", (a, l) => l).attr("class", "shape ghost").attr("x", (a) => (o.x = a.x, this.getRectangleCoordinate(o, "x"))).attr("y", (a) => (o.y = a.y, this.getRectangleCoordinate(o, "y"))).attr("width", this.getWidthAttribute(o)).attr("height", this.getHeightAttribute(o)).on("mousedown", (a, l) => {
      console.log("[Diagram] ghostShape mousedown (position click):", {
        shapeId: o.id,
        shapeParentId: o.parentId,
        position: { x: l.x, y: l.y },
        shapeRot: o.rot
      }), this.callbacks.onMoveShape(o, l);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(e, s).join(
    (n) => n.append("rect").call((o) => i.call(this, o, t)),
    (n) => n.call((o) => i.call(this, o, t)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), S(this).classed("hover", !0), S(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), S(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Cs(e, t) {
  Vt(
    this.selections.dotGroup,
    e,
    this.scales.xPositionScale,
    this.scales.yPositionScale,
    {
      r: 6,
      extraClass: "dot",
      onSelect: (s) => this.callbacks.onMoveShape(t, s),
      onHoverChange: this.state.hasTouch ? void 0 : (s, i) => {
        const o = S(i.target).attr("data-id"), a = S(`.ghost[data-id="${o}"]`);
        s ? (a.raise(), a.classed("highlight", !0)) : a.classed("highlight", !1);
      }
    }
  ), t.x = 0, t.y = 0;
}
function $(e) {
  return e?.color ? Pe(e.color) : this.config.colors.text.toString();
}
function J(e) {
  return e.outline && Array.isArray(e.outline) && e.outline.length >= 3;
}
function Gs() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((e) => J(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text id").text((t) => bt.call(this, t)).classed("hidden", (t, s, i) => this.isTextHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => $.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (e) => e.classed("hidden", !1).text((t) => bt.call(this, t)).classed("hidden", (t, s, i) => this.isTextHidden(t, s, i)).style("fill", (t) => $.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((e) => J(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text name").text((t) => St.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, s, i) => this.isNameHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => $.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const n = i[s];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (e) => e.classed("hidden", !1).text((t) => St.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, s, i) => this.isNameHidden(t, s, i)).style("fill", (t) => $.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const n = i[s];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((e) => J(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text length").text((t) => wt.call(this, t)).classed("hidden", (t, s, i) => this.isLengthHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => $.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const o = i[s].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(o / 2 + 2));
    }),
    (e) => e.classed("hidden", !1).text((t) => wt.call(this, t)).classed("hidden", (t, s, i) => this.isLengthHidden(t, s, i)).style("fill", (t) => $.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, s, i) => {
      const o = i[s].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(o / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((e) => J(e) ? [] : [e]).join(
    (e) => e.append("text").attr("class", "shape-text width").text((t) => kt.call(this, t)).classed("hidden", (t, s, i) => this.isWidthHidden(t, s, i)).attr("dominant-baseline", "middle").style("fill", (t) => $.call(this, t)).attr("transform", (t, s, i) => {
      const n = i[s], o = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), a = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${a}) rotate(${l})`;
    }),
    (e) => e.classed("hidden", !1).text((t) => kt.call(this, t)).classed("hidden", (t, s, i) => this.isWidthHidden(t, s, i)).style("fill", (t) => $.call(this, t)).attr("transform", (t, s, i) => {
      const n = i[s], o = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), a = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${a}) rotate(${l})`;
    })
  );
}
function bt(e) {
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
function St(e) {
  return !e?.name || typeof e?.name != "string" ? null : e.name.toUpperCase().trim();
}
function wt(e) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : rt({ v: e.l, o: this.numberConfig }).toString();
}
function kt(e) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : rt({ v: e.w, o: this.numberConfig }).toString();
}
const Rs = (e) => e.id;
function Ls() {
  if (!this.props.containerWidth) return;
  Y.call(this);
  const e = this.props.shapes.value.reduce((t, s) => {
    const i = parseInt(s.parentId);
    return i > t ? i : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, e]), this.state.env === "development" && Is.call(this), Ts.call(this), ws.call(this);
}
function Ts() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Rs).join(
    (e) => {
      const t = e.append("g").attr("class", "shape-group");
      return At.call(this, t), Ct.call(this, t), t.on("mousedown", Gt.bind(this)), Pt.call(this, t), t;
    },
    (e) => (At.call(this, e), Ct.call(this, e), e.on("mousedown", Gt.bind(this)), Pt.call(this, e), e),
    (e) => e.remove()
  ), js.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Gs.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Is() {
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
  this.scales.scoreColorScale = K([T(251, 224, 255), T(122, 0, 138)]).domain([s, i]);
}
function Ms(e) {
  return e.outline && Array.isArray(e.outline) && e.outline.length >= 3;
}
function Ws(e, t) {
  const s = t.outline;
  if (!s || s.length < 3) return "";
  const i = t.nestingRotation || 0, n = t.placementOutline && t.placementOutline.length >= 3 ? t.placementOutline : s;
  let o;
  if (t.holes?.length) {
    let x = 1 / 0, w = 1 / 0, k = -1 / 0, C = -1 / 0;
    for (const G of s)
      G.x < x && (x = G.x), G.y < w && (w = G.y), G.x > k && (k = G.x), G.y > C && (C = G.y);
    o = [
      { x, y: w },
      { x: k, y: w },
      { x: k, y: C },
      { x, y: C },
      { x, y: w }
    ];
  } else
    o = s;
  const a = [o];
  if (t.holes?.length)
    for (const x of t.holes)
      x.length >= 3 && a.push(x);
  let l = 0, r = 0;
  for (const x of n)
    l += x.x, r += x.y;
  l /= n.length, r /= n.length;
  const c = Math.cos(i), h = Math.sin(i), p = (x) => x.map((w) => {
    if (i === 0) return { x: w.x, y: w.y };
    const k = w.x - l, C = w.y - r;
    return {
      x: c * k - h * C + l,
      y: h * k + c * C + r
    };
  }), u = a.map(p), m = n === s ? t.holes?.length ? p(s) : u[0] : p(n);
  let d = 1 / 0, y = 1 / 0;
  for (const x of m)
    x.x < d && (d = x.x), x.y < y && (y = x.y);
  return u.map((x) => x.map((k) => ({
    x: e.scales.xPositionScale(k.x - d + (t.x || 0)),
    y: e.scales.yPositionScale(k.y - y + (t.y || 0))
  })).map(
    (k, C) => (C === 0 ? "M" : "L") + ` ${k.x} ${k.y}`
  ).join(" ") + " Z").join(" ");
}
function At(e) {
  const t = this;
  e.selectAll(".shape").remove(), e.each(function(i) {
    const n = S(this);
    Ms(i) ? n.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (o) => Ws(t, o)).attr("fill-rule", "evenodd").style("fill", (o) => N.call(t, o)) : n.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (o) => t.getRectangleCoordinate(o, "x")).attr("y", (o) => t.getRectangleCoordinate(o, "y")).attr("width", (o) => t.getWidthAttribute(o)).attr("height", (o) => t.getHeightAttribute(o)).style("fill", (o) => N.call(t, o));
  });
  const s = e.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Te(
    this.selections.shapeRectangles.nodes().concat(s.nodes())
  ) : this.selections.shapeRectangles = s;
}
function Ds(e, t, s = null) {
  if (!t) return [];
  if (!e || !this.settings.main) return [];
  let i;
  t.applyTrim();
  const n = e.willItFit(t, e.rot);
  if (t.removeTrim(), !n) return [];
  const o = new Set(Array.isArray(s) ? s : s ? [s] : []), a = this.props.shapes.value.filter((u) => !o.has(u) && u.added && u?.stock?.id === t.id), l = [...o].map((u) => et(u)).find(Boolean) ?? null, r = [
    ...a,
    ...Zt(a, l)
  ], c = Xt(
    null,
    a,
    t,
    !0
  );
  let h;
  if (t.cutType === "efficiency") {
    if (this.state.env === "development") {
      const u = ht(a, t);
      this.selections.ghostShapeGroup.selectAll("line").remove();
      const m = u.flatMap((d) => Object.values(d.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(m).enter().append("line").attr("x1", (d) => this.scales.xPositionScale(d.x1)).attr("x2", (d) => this.scales.xPositionScale(d.x2)).attr("y1", (d) => this.scales.yPositionScale(d.y1)).attr("y2", (d) => this.scales.yPositionScale(d.y2)).attr("stroke", "rgba(245, 66, 227, 0.5)").attr("stroke-width", 2).on("mousedown", (d, y) => console.log(y));
    }
    h = _t(
      t,
      a
    );
  }
  const p = new O();
  for (const u of c.toArray()) {
    const m = ut(e, u, t, !0);
    m && p.addPoints(m.toArray());
  }
  if (h) {
    const u = h.toArray();
    for (const m of u) {
      const d = Yt(e, m, t);
      d && p.addPoints(d.toArray());
    }
  }
  return t.cutType === "efficiency" ? ([
    new P(t.trim.w1 ?? 0, t.trim.l1 ?? 0),
    new P(t.trim.w1 ?? 0, t.trim.l1 ?? 0),
    new P(
      t.l - e.l - (t.trim.w2 ?? 0),
      t.trim.l1 ?? 0
    ),
    new P(
      t.trim.w1 ?? 0,
      t.w - e.w - (t.trim.l2 ?? 0)
    ),
    new P(
      t.l - e.l - (t.trim.w2 ?? 0),
      t.w - e.w - (t.trim.l2 ?? 0)
    )
  ].forEach((u) => p.add(u)), i = p.toArray()) : (p.add(new P(t.trim.w1 ?? 0, t.trim.l1 ?? 0)), i = p.toArray()), i = As.call(this, i, e, r, t), i;
}
const $s = 24;
function Bs(e) {
  const t = et(e);
  return t ? this.props.shapes.value.filter((s) => s.added && s?.stock?.id === e?.stock?.id && et(s) === t) : [e];
}
function Pt(e) {
  const t = this;
  let s = !1, i = [], n = { x: 0, y: 0 }, o = 0, a = 0, l = null, r = [], c = null;
  const h = () => {
    t.selections.dotGroup?.selectAll("*").remove(), t.selections.moveGridGroup?.selectAll("*").remove();
    const u = c;
    u && u.attr("transform", null).select(".shape").classed("drag-invalid", !1).classed("drag-snapped", !1);
  }, p = Ie().filter((u) => !!t.props.moveMode?.value && !t.state.moving && t.settings.main && !t.settings.app && !u.button).on("start", function(u, m) {
    s = !1, l = null, r = Bs.call(t, m), c = t.selections.shapeWrappers ? t.selections.shapeWrappers.filter((d) => r.includes(d)) : S(this), r.length > 1 ? n = {
      x: Math.min(...r.map((d) => d.x.valueOf())),
      y: Math.min(...r.map((d) => d.y.valueOf()))
    } : n = { x: m.x.valueOf(), y: m.y.valueOf() }, o = t.scales.xPositionScale.invert(u.x) - n.x, a = t.scales.yPositionScale.invert(u.y) - n.y;
  }).on("drag", function(u, m) {
    if (!s) {
      s = !0;
      let b = m;
      if (r.length > 1) {
        const R = Math.max(...r.map((L) => L.x.valueOf() + L.l.valueOf())) - n.x, U = Math.max(...r.map((L) => L.y.valueOf() + L.w.valueOf())) - n.y;
        b = {
          id: `__group-move-${m.id}`,
          x: n.x,
          y: n.y,
          l: R,
          w: U,
          rot: 0,
          willItFit: (L) => R <= L.l && U <= L.w
        };
      }
      i = Ds.call(t, b, t.props.stock.value, r), b.x = n.x, b.y = n.y, i.push(new P(n.x, n.y)), Jt.call(t), Vt(
        t.selections.dotGroup,
        i,
        t.scales.xPositionScale,
        t.scales.yPositionScale,
        { r: 5, passive: !0 }
      ), c?.raise(), S(this).attr("cursor", "grabbing"), t.state.moving = !0;
    }
    const d = t.scales.xPositionScale.invert(u.x) - o, y = t.scales.yPositionScale.invert(u.y) - a;
    let A = null, x = 1 / 0;
    for (const b of i) {
      const R = Math.hypot(
        t.scales.xPositionScale(b.x) - t.scales.xPositionScale(d),
        t.scales.yPositionScale(b.y) - t.scales.yPositionScale(y)
      );
      R < x && (x = R, A = b);
    }
    const w = !!A && x <= $s;
    l = w ? { x: A.x, y: A.y, valid: !0 } : { x: d, y, valid: !1 };
    const k = t.scales.xPositionScale(l.x) - t.scales.xPositionScale(n.x), C = t.scales.yPositionScale(l.y) - t.scales.yPositionScale(n.y), G = c ?? S(this);
    G.attr("transform", `translate(${k}, ${C})`), G.select(".shape").classed("drag-invalid", !w).classed("drag-snapped", w), Ss(t.selections.dotGroup, w ? lt(A.x, A.y) : null, { r: 5 });
  }).on("end", function(u, m) {
    const d = s, y = l;
    if (s = !1, l = null, S(this).attr("cursor", null), !d) {
      r = [], c = null, t.callbacks.onAddToPartsBin(m);
      return;
    }
    t.state.moving = !1, h();
    const A = y && y.x === n.x && y.y === n.y;
    y?.valid && !A && (r.length > 1 ? t.callbacks.onDirectMoveGroup?.(r, {
      dx: y.x - n.x,
      dy: y.y - n.y
    }) : t.callbacks.onDirectMoveShape?.(m, new P(y.x, y.y))), r = [], c = null;
  });
  e.call(p);
}
function Ct(e) {
  !this.settings.main || this.settings.app || this.state.hasTouch || e.on("mouseover", (t) => {
    if (this?.props.moveMode && this.state.moving) return;
    const s = S(t.target);
    s.classed("hover", !0), s.classed("selected") || s.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (t, s) => {
    const i = S(t.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", N.call(this, s));
  }, { passive: !0 });
}
function Gt(e, t) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Os.call(this, e, t), (this.settings.app || this.settings.embed) && Es.call(this, e, t), this.state.device === "desktop" && !this.props.moveMode.value && (st.call(this), Oe.call(this, t)), this.props.moveMode.value || (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: t.id
  }), this.findShape.call(this, t.id));
}
function Os(e, t) {
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
        ], Ns.call(this, t);
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
    console.table(Fs(t, s));
  }
}
function Fs(e, t) {
  return t.reduce((s, i) => {
    const n = _s(e, i);
    return s[i] = Array.isArray(n) ? n.join(", ") : n, s;
  }, {});
}
function Ns(e) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = e.guillotineState?.myStripParent;
  t && this.selections.shapeWrappers.filter((n) => n.id === t || n.group.addedAsGroup === t).select(".shape").classed("highlight-a", !0);
  const s = this.props.shapes.value.find((i) => i.id === t)?.guillotineState?.myStripParent;
  s && this.selections.shapeWrappers.filter((n) => n.id === s || n.group.addedAsGroup === t).select(".shape").classed("highlight-b", !0);
}
function Es(e, t) {
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
      color: N.call(this, t),
      notes: t?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(s), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function N(e) {
  const t = T(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (e.group.addedAsGroup)
          return T(43, 156, 16);
        if (e.firstShape.isFirstShape)
          return T(255, 171, 231);
        if (typeof e.guillotineState.myPhase == "number") {
          const n = [0, 115, 255], o = [176, 255, 231];
          return `rgb(${n.map((l, r) => Math.round(l + e.guillotineState.myPhase / 5 * (o[r] - l))).join(",")})`;
        }
        break;
      case "groups":
        if (e.group.addedAsGroup)
          return T(43, 156, 16);
        break;
      case "priorityShapes":
        if (e?.priority && e.priority?.[e.stock.parentId])
          return T(139, 171, 46);
        break;
      case "placementOrder": {
        const n = this.props.shapes.value.reduce((o, a) => {
          const l = a.placementOrder ?? 0;
          return l > o ? l : o;
        }, 0);
        if (n > 0 && typeof e.placementOrder == "number") {
          const o = [0, 115, 255], a = [255, 50, 50], l = e.placementOrder / n;
          return `rgb(${o.map((c, h) => Math.round(c + l * (a[h] - c))).join(",")})`;
        }
        break;
      }
      case "score": {
        const n = e?.bestScore?.total ? this.scales.scoreColorScale(e.bestScore.total) : null;
        if (n != null && typeof n.toString == "function")
          return n;
        if (n != null && typeof n.r == "number" && typeof n.g == "number" && typeof n.b == "number")
          return console.warn("Detected corrupted score color object from scale:", n, "for shape:", e), T(n.r, n.g, n.b, n.opacity ?? 1);
      }
    }
  if (e.color) {
    const n = T(e.color);
    if (n && !isNaN(n.r)) return n;
  }
  const s = parseInt(e.parentId);
  let i;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? i = this.scales.shapeColorScale(s) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), i = null), i != null && typeof i.toString == "function" ? i : i != null && typeof i.r == "number" && typeof i.g == "number" && typeof i.b == "number" ? T(i.r, i.g, i.b, i.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", e, i), t);
}
const Rt = 3;
function Hs(e) {
  const t = [];
  for (const s of e) {
    const i = s.extras?.banding;
    if (s.added && i?.sides) {
      const n = s.color ? Ce(s.color) : "white";
      for (const [o, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(o)) continue;
        let l = o;
        if (s.rot) {
          const c = Ge({ [o]: !0 }, "cc");
          l = Object.keys(c)[0];
        }
        const r = Ys.call(this, s, l);
        r && t.push({ ...r, stroke: n });
      }
    }
  }
  return t;
}
function Lt(e) {
  const t = Rt / 2;
  return e.attr("class", "banding").attr("x1", (s) => this.scales.xPositionScale(s.l1) + Q.call(this, s.type, "x", t)).attr("x2", (s) => this.scales.xPositionScale(s.l2) + Q.call(this, s.type, "x", t)).attr("y1", (s) => this.scales.yPositionScale(s.w1) + Q.call(this, s.type, "y", t)).attr("y2", (s) => this.scales.yPositionScale(s.w2) + Q.call(this, s.type, "y", t)).attr("stroke-width", Rt).attr("stroke", (s) => s.stroke);
}
function js(e) {
  if (!this.settings.main) return;
  const t = Hs.call(this, e);
  if (t.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t, (s, i) => i).join(
    (s) => s.append("line").call((i) => Lt.call(this, i)),
    (s) => s.call((i) => Lt.call(this, i)),
    (s) => s.remove()
  );
}
function Q(e, t, s) {
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
function Ys(e, t) {
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
function Xs(e) {
  this.selections.shapeWrappers.style("visibility", (t) => t?.placementOrder >= e ? "hidden" : "visible");
}
const Tt = (e) => e.id;
function It(e) {
  return e.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Mt(e) {
  return e.style("fill", (t) => `url(#grain-${t.grain || "n"})`).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function zs() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Fe.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Tt).join(
    (e) => e.append("rect").attr("class", "background stock").call((t) => It.call(this, t)),
    (e) => e.call((t) => It.call(this, t)),
    (e) => e.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Tt).join(
    (e) => e.append("rect").attr("class", "stock-pattern").call((t) => Mt.call(this, t)),
    (e) => e.call((t) => Mt.call(this, t)),
    (e) => e.remove()
  );
}
function Us(e) {
  return typeof e == "string" && e.length === 6 && !isNaN(+("0x" + e.replace("#", "")));
}
function _s(e, t) {
  return Be(e, t);
}
class qs {
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
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = S(t.elementID), this.selections.el === null)) return;
    const s = this.selections.el.node();
    s !== null && (this.selections.htmlEl = s, this.scales = {
      xScale: M(),
      yScale: M(),
      yPositionScale: M(),
      xPositionScale: M(),
      yAxisScale: M(),
      measurementScale: M(),
      shapeColorScale: K(),
      scoreColorScale: K()
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
      partA: "#2fb7e0",
      partB: "#0e7fa6",
      partSelected: "#10b981",
      stock: "#ffc53d",
      text: "#ffffff"
    }, i = (n, o) => T("#" + (Us(n?.replace("#", "")) ? n.replace("#", "") : o.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(s).map(([n, o]) => [
        n,
        i(t.colors?.[n], o)
      ])
    ), this.scales.shapeColorScale = K([
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
      this.selections.svgCanvas = S(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.moveGridGroup = this.selections.svgCanvas.append("g").attr("class", "move-grid"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, s, i) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), s && (this.numberConfig.decimalPlaces = s), i && (this.numberConfig.fractionRoundTo = i));
  }
  formatNumber = (t) => {
    const s = rt({
      v: t,
      o: this.numberConfig
    });
    if (s !== null) return s.toString();
  };
  trimNameToFit(t, s) {
    function i(n, o, a) {
      const l = a[o], r = S(l);
      r.text(n.name);
      let c = r.text();
      const h = r.node();
      if (!h) return;
      let p = h.getComputedTextLength();
      const u = this.getWidthAttribute(n) - 20;
      for (; p > u && c.length > 0; )
        c = c.slice(0, -1), r.text(c.length ? c + "..." : ""), p = r.node().getComputedTextLength();
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
      const l = () => {
        n = null, i || a(t.apply(this, o));
      };
      clearTimeout(n), i && !n && a(t.apply(this, o)), n = setTimeout(l, s);
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => N.call(this, i));
    const s = S(t).select(".shape");
    if (s) {
      s.classed("selected", !0), s.style("fill", this.config.colors.partSelected.toString());
      const i = S(t).datum();
      this.callbacks.onShapeSelect(i, t);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Ls.call(this);
  }
  drawStock() {
    zs.call(this);
  }
  drawCuts() {
    qe.call(this);
  }
  drawCuttingPath() {
    es.call(this);
  }
  removeCuttingPath() {
    is.call(this);
  }
  showCuttingPathStep(t) {
    ss.call(this, t);
  }
  animateCuttingPath() {
    as.call(this);
  }
  pauseCuttingPathAnimation() {
    ls.call(this);
  }
  stopCuttingPathAnimation() {
    jt.call(this);
  }
  resetCuttingPathAnimation() {
    rs.call(this);
  }
  isCuttingPathAnimating() {
    return cs.call(this);
  }
  setCuttingPathAnimationSpeed(t) {
    hs.call(this, t);
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
    const a = t.x ?? 0, l = t.y ?? 0, r = t.l ?? 0, c = t.w ?? 0;
    if (s === "x") {
      let h;
      switch (i) {
        case "center":
          h = this.scales.xPositionScale(a + r / 2), n && (h += n);
          break;
        case "right":
          h = this.scales.xPositionScale(a + r), n && (h -= n);
          break;
        default:
          h = this.scales.xPositionScale(this.settings.flipX ? a - r : a), n && (h -= n);
      }
      o = h;
    } else if (s === "y") {
      let h;
      switch (i) {
        case "center":
          h = this.scales.yPositionScale(l + c / 2), n && (h += n);
          break;
        case "bottom":
          h = this.scales.yPositionScale(this.settings.flipY ? l + c : l), n && (h += n);
          break;
        default:
          h = this.scales.yPositionScale(this.settings.flipY ? l : l + c), n && (h -= n);
      }
      o = h;
    }
    return o;
  }
  // Blade Width Methods
  getBladeWidth(t = null) {
    return $e(t) && t !== null ? t.bladeWidth : 0;
  }
  getHalfBladeWidth(t = null) {
    const s = t.bladeWidth;
    return s !== void 0 && s > 0 ? s / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), Y.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), je.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), st.call(this);
  }
  removeSegments() {
    this.selections.segmentGroup && this.selections.segmentGroup.selectAll("*").remove();
  }
  removeGroups() {
    this.selections.groupGroup && this.selections.groupGroup.selectAll("*").remove();
  }
  removePositions() {
    this.selections.ghostShapeGroup && this.selections.ghostShapeGroup.selectAll("*").remove(), this.selections.moveGridGroup && this.selections.moveGridGroup.selectAll("*").remove(), this.removePlacementPositions();
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
    if (V(t) && t.outline?.length >= 3)
      return !0;
    const n = i[s];
    if (!n)
      return !0;
    const o = n.getBBox();
    if (o.width === 0 && o.height === 0)
      return !1;
    const a = this.scales.measurementScale(t.l), l = this.scales.yScale(t.w);
    return o.width >= a || o.height >= l - this.state.padding;
  }
  isNameHidden(t, s, i) {
    if (V(t) && t.outline?.length >= 3) return !0;
    const n = i[s];
    if (!n) return !0;
    const o = n.getBBox();
    if (o.width === 0 && o.height === 0) return !1;
    const a = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return o.width >= a || l < 40;
  }
  isLengthHidden(t, s, i) {
    if (V(t) && t.outline?.length >= 3) return !0;
    if (this.settings.app) {
      const r = this.scales.measurementScale(t.l), c = this.scales.measurementScale(t.w);
      return r < 50 || c < 50;
    }
    if (t?.stock?.saw?.stockType === "linear") return !1;
    const n = i[s];
    if (!n) return !0;
    const o = n.getBBox();
    if (o.width === 0 && o.height === 0) return !1;
    const a = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return o.width >= a || l < 30;
  }
  isWidthHidden(t, s, i) {
    if (V(t) && t.outline?.length >= 3) return !0;
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
      S(this).classed("hover", !0);
    }).on("mouseout", function() {
      S(this).classed("hover", !1);
    });
  }
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (t) => N.call(this, t)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (t) => {
      const s = this.scales.measurementScale(this.getBladeWidth(t.stock));
      return s < 1 ? 1 : Math.ceil(s);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    Y.call(this);
  }
  updateShapeVisibility() {
    Xs.call(this);
  }
  drawPositions(t) {
    return ks.call(this, t);
  }
  showCut(t) {
    Ke.call(this, t);
  }
  resetCuts() {
    Et.call(this);
  }
}
const Vs = ["id"], ri = /* @__PURE__ */ me({
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
    moveMode: { default: () => H(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape", "direct-move-shape", "direct-move-group", "part-click", "resize"],
  setup(e, { expose: t, emit: s }) {
    const {
      r: i,
      activeStock: n,
      activeShapes: o,
      activeCuts: a,
      activeSegments: l,
      currentCutIndex: r,
      getStock: c,
      getShapes: h,
      getSegments: p,
      getCuts: u,
      cuttingPlan: m
    } = Wt(), d = e, y = s, A = (g) => {
      y("part-click", g);
    }, x = (g) => {
      y("shape-colour-update", g);
    }, w = (g, I) => {
      g?.autoId && y("shape-select", g.autoId, I);
    }, k = (g) => {
      g && y("add-to-parts-bin", g);
    }, C = (g, I) => {
      g && y("move-shape", g, I);
    }, G = (g, I) => {
      g && y("direct-move-shape", g, I);
    }, b = (g, I) => {
      g?.length && y("direct-move-group", g, I);
    }, R = H(0), U = H(0), L = H(null);
    let f, dt = H(!1);
    const E = Ae({
      debug: "",
      stretched: !1
    }), _ = () => {
      f?.state && (E.stretched = f.state.stretched);
    };
    ye(() => te());
    const Qt = j(() => ({
      format: d.numberFormat,
      decimals: d.decimalPlaces
    })), ft = j(() => d.stockAutoId ? c(d.stockAutoId) : n.value), pt = j(() => d.stockAutoId ? h(d.stockAutoId) : o.value), gt = j(() => d.main ? d.stockAutoId ? u(d.stockAutoId) : a.value : []), Kt = j(() => d.main ? d.stockAutoId ? p(d.stockAutoId) : l.value : []);
    xe(L, (g) => {
      const I = g[0], { width: it, height: ge } = I.contentRect;
      it > 0 && (R.value = it), y("resize", { width: it, height: ge });
    }), ve(
      R,
      (g) => {
        f && (g <= 0 || (f.setDevice(), f.resetShapeAxes(), f.removeCuttingPath(), f.drawAll(), _(), r.value !== null && (f.toggleSegments(!0), f.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let q = !1;
    F(() => ft.value, (g) => {
      g && (R.value <= 0 || (q = !0, f.setDevice(), f.resetCuts(), f.removeSegments(), f.resetShapeAxes(), f.removeCuttingPath(), f.drawAll(), _(), be(() => q = !1)));
    }, { immediate: !1 }), F(() => pt.value, (g) => {
      q || g && (R.value <= 0 || (f.setDevice(), f.drawShapes()));
    }, { immediate: !1, deep: !0 }), d.main && (F(() => gt.value, () => {
      q || R.value <= 0 || f.drawCuts();
    }, { immediate: !1, deep: !0 }), F(r, () => {
      r.value !== null && (R.value <= 0 || (f.toggleSegments(!0), f.showCut(r.value)));
    }, { immediate: !1 }), F(Qt, (g) => {
      f.updateNumberFormat(g.format, g.decimals, null);
    }, { immediate: !1 }));
    const te = () => {
      const g = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${d.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: d.numberFormat,
          decimalPlaces: d.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: d.colors || null,
        settings: {
          main: d.main,
          app: d.app,
          embed: d.embed,
          flipY: d.flipY,
          flipX: !1
        },
        props: {
          containerHeight: U,
          containerWidth: R,
          stock: ft,
          shapes: pt,
          cuts: gt,
          segments: Kt,
          stockList: i.stockList,
          cuttingPlan: m,
          moveMode: d.moveMode,
          app: d.app
        },
        options: {
          disableClick: d.disableClick,
          enableStretch: d.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: x,
          onShapeSelect: w,
          onAddToPartsBin: k,
          onMoveShape: C,
          onDirectMoveShape: G,
          onDirectMoveGroup: b,
          onPartClick: A
        }
      };
      f = new qs(g), E.debug = f.state.debug, dt.value = !0;
    }, ee = (g = !1) => {
      f && f.toggleShapes(g);
    }, se = (g = !1) => {
      f && f.toggleCuts(g);
    }, ie = (g = !1) => {
      f && f.toggleSegments(g);
    }, ne = () => {
      f && f.drawShapes();
    }, oe = () => {
      f && (f.drawStock(), _());
    }, ae = () => {
      f && (f.toggleSegments(!1), f.resetCuts());
    }, le = (g) => {
      f && (f.toggleSegments(!0), f.showCut(g));
    }, re = (g) => f ? f.drawPositions(g) : !1, ce = () => {
      f && f.removePositions();
    }, he = (g) => {
      f && f.findShape(g);
    }, ue = () => {
      f && f.clearSelection();
    }, de = (g) => f ? f.requiresStretch(g) : !1, fe = (g) => {
      f?.options && (f.options.enableStretch = g, f.setAspectRatio(), f.drawAll(), _());
    }, pe = () => f?.options?.enableStretch ?? !0;
    return F(() => d.flipY, (g) => {
      f?.settings && (f.settings.flipY = g, f.setAspectRatio(), f.drawAll());
    }), F(() => E.debug, (g) => {
      f?.state && (f.state.debug = g);
    }), t({
      loaded: dt,
      toggleShapes: ee,
      toggleCuts: se,
      toggleSegments: ie,
      drawShapes: ne,
      drawStock: oe,
      drawPositions: re,
      resetPositions: ce,
      findShape: he,
      clearSelection: ue,
      resetCuts: ae,
      showCut: le,
      requiresStretch: de,
      setEnableStretch: fe,
      getEnableStretch: pe,
      animateCuttingPath: () => {
        f && f.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        f && f.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        f && f.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        f && f.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => f?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (g) => {
        f && f.setCuttingPathAnimationSpeed(g);
      },
      state: E,
      get stretched() {
        return E.stretched;
      },
      set moving(g) {
        f?.state && (f.state.moving = g);
      }
    }), (g, I) => (Se(), we("div", {
      id: e.elementId,
      ref_key: "diagramContainerRef",
      ref: L,
      class: ke([{ app: e.app }, "diagram-container"])
    }, null, 10, Vs));
  }
});
export {
  ri as default
};
