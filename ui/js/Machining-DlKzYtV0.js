import { d as Ue, J as Ke, y as Xe, K as pe, k as W, l as Je, I as ge, z as Ze, r as Qe, o as g, c as v, a as L, u as T, m as te, b as y, t as F, g as E, j as ve, n as me, F as I, f as J, A as _e, w as et, B as fe, C as tt, s as q, x as Y, h as st, v as it, L as at } from "./vendor-vue-CrNGqS0k.js";
import { Y as C, Z as Se, _ as Z, $ as be } from "./NestingShape-JAVnw-aP.js";
import { c as xe, a as nt, h as lt, s as rt, g as ot, I as ht } from "./EcommerceCalculator-CTmE4c2O.js";
import { t as c } from "./i18n-DGE8ywV5.js";
import { l as ct, a as dt, b as ut, c as pt, p as gt, S as vt, e as mt, f as ft, g as bt, h as xt, i as St, j as yt, s as wt, k as Ht, m as Ct } from "./vendor-d3-DI9vO-24.js";
const A = {
  precisionFixed: Ct,
  format: Ht,
  select: wt,
  selectAll: yt,
  scaleLinear: ct,
  scaleSequential: St,
  axisTop: xt,
  axisBottom: bt,
  axisRight: ft,
  axisLeft: mt,
  symbol: vt,
  path: gt,
  arc: pt,
  symbolTriangle: ut,
  symbolSquare: dt
};
class kt {
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
  xScale = A.scaleLinear();
  yScale = A.scaleLinear();
  yScaleFlipped = A.scaleLinear();
  measurementScale = A.scaleLinear();
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
  edgeHoleGroup;
  grooveGroup;
  cornerGroup;
  legendGroup;
  pointGroup;
  loaded = !1;
  constructor({
    HTMLElement: a,
    vueComponent: n = null,
    shape: e,
    numberFormat: d = "decimal",
    decimalPlaces: m = 2
  }) {
    this.HTMLElement = a, this.numberFormat = d, this.decimalPlaces = m, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = n, this.shape = e, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = A.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = A.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const a = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (a === null) return;
          this.svgCanvas = a;
        } else
          this.svgCanvas = A.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const a = this.shouldShowAxes(), n = a ? this.edgePadding : 0, e = a ? this.edgePadding : 0, d = a ? this.axisPadding : 0, m = a ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (n + d) < 0 || this.h - (m + e) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.edgeHoleGroup = this.svgCanvas.append("g").attr("class", "edge-hole-group"), this.grooveGroup = this.svgCanvas.append("g").attr("class", "groove-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createEdgeHoles(), this.createGrooves(), this.createBanding(), a && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${m})`).attr("class", "axis x"), this.xAxis.call(
      A.axisTop(this.xScale).ticks(10).tickSize(-this.h + (m + e))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(p, h, u) {
      (h === 0 || h === u.length - 1) && A.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - d}, 0)`).attr("class", "axis y"), this.yAxis.call(
      A.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + d))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(p, h, u) {
      (h === 0 || h === u.length - 1) && A.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px")), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(a, n) {
    this.pointGroup.append("circle").attr("cx", this.xScale(a)).attr("cy", this.getYScale()(n)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const a = this.shouldShowAxes(), n = a ? this.edgePadding : 0, e = a ? this.edgePadding : 0, d = a ? this.axisPadding : 0, m = a ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", n).attr("y", m).attr("width", this.w - (n + d)).attr("height", this.h - (m + e)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", n).attr("y", m).attr("width", this.w - (n + d)).attr("height", this.h - (m + e)).style("fill", "url(#stripes)");
    const p = A.path(), h = [], u = [];
    [0, 1, 2, 3].forEach((D) => {
      const H = this.shape.machining.getCorner(D);
      H && H.type ? (h.push(H.size ? C({ v: H.size ?? 0, o: this }) : 0), u.push(H.type)) : (h.push(0), u.push(null));
    });
    const S = (D, H, k, $, O) => {
      u[D] === "radius" ? p.arcTo(
        this.xScale(H),
        this.getYScale()(k),
        this.xScale($),
        this.getYScale()(O),
        this.measurementScale(h[D])
      ) : u[D] === "bevel" ? p.lineTo(this.xScale($), this.getYScale()(O)) : (p.lineTo(this.xScale(H), this.getYScale()(k)), p.lineTo(this.xScale($), this.getYScale()(O)));
    };
    p.moveTo(this.xScale(0), this.getYScale()(h[0])), S(0, 0, 0, h[0], 0), (u[0] === "bevel" || u[1] === "bevel") && p.lineTo(this.xScale(this.shapeL - h[1]), this.getYScale()(0)), S(1, this.shapeL, 0, this.shapeL, h[1]), (u[1] === "bevel" || u[2] === "bevel") && p.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - h[2])
    ), S(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - h[2],
      this.shapeW
    ), (u[2] === "bevel" || u[3] === "bevel") && p.lineTo(this.xScale(h[3]), this.getYScale()(this.shapeW)), S(3, 0, this.shapeW, 0, this.shapeW - h[3]), p.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", p.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let a;
    a = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), a.attr(
      "dy",
      a.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), a = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), a.attr(
      "dy",
      a.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), a = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), a.attr(
      "dy",
      a.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), a = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), a.attr(
      "dy",
      a.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), a = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), a.attr(
      "dy",
      a.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), a = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), a.attr(
      "dy",
      a.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("circle").data(
      this.shape.machining.holes.filter((a) => !a.isEdgeHole() && a.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (a) => a.isValid === !1).classed("partial", (a) => !a.isThroughShape(this.shape)).attr("cx", (a) => this.xScale(a.x)).attr("cy", (a) => {
      const n = a.getYDrawPosition(this.shape, this.currentSide);
      return this.getYScale()(n);
    }).attr("r", (a) => this.measurementScale(a.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const n = this.shape.machining.getAllHingeHoles(this.shape).filter((e) => e.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("circle").data(n).join("circle").attr("class", "hole").classed("invalid", (e) => e.isValid === !1).classed("partial", (e) => !e.isThroughShape(this.shape)).attr("cx", (e) => this.xScale(e.x)).attr("cy", (e) => this.getYScale()(e.getYDrawPosition(this.shape, this.currentSide))).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createEdgeHoles() {
    this.svgCanvas.selectAll(".edge-hole-group > *").remove(), this.shape.machining.holes.filter((n) => n.isEdgeHole()).forEach((n) => {
      const e = n.getEdgeBoreRect(this.shape);
      e && this.edgeHoleGroup.append("rect").attr("class", "edge-hole").classed("invalid", n.isValid === !1).attr("x", this.xScale(e.x)).attr("y", this.getYScale()(e.y + e.h)).attr("width", Math.abs(this.xScale(e.x + e.w) - this.xScale(e.x))).attr("height", Math.abs(this.getYScale()(e.y) - this.getYScale()(e.y + e.h))).attr("rx", 1);
    });
  }
  createGrooves() {
    this.svgCanvas.selectAll(".groove-group > *").remove(), (this.shape.machining?.grooves ?? []).filter((e) => e.shouldShow(this.currentSide)).forEach((e) => {
      const d = e.getDrawRect(this.shape);
      this.grooveGroup.append("rect").attr("class", "groove").classed("invalid", e.isValid === !1).attr("x", this.xScale(d.x)).attr("y", this.getYScale()(d.y + d.h)).attr("width", Math.abs(this.xScale(d.x + d.w) - this.xScale(d.x))).attr("height", Math.abs(this.getYScale()(d.y) - this.getYScale()(d.y + d.h)));
    });
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const a = this.shape.banding;
    if (!a) return;
    const n = -1, e = this.shouldShowAxes(), d = e ? this.edgePadding : 0, m = e ? this.axisPadding : 0, p = [];
    for (const u of Se)
      if (a.getSide(u))
        switch (u) {
          case "l1":
            p.push({
              x1: d - n,
              x2: d - n,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            p.push({
              x1: this.w - m + n,
              x2: this.w - m + n,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            p.push({
              x1: d + this.getCornerBandingSize(0),
              x2: this.w - m - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? n : -n),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
            });
            break;
          case "w2":
            p.push({
              x1: d + this.getCornerBandingSize(3),
              x2: this.w - m - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(p).join("line").attr("class", "banding").attr("x1", (u) => u.x1).attr("x2", (u) => u.x2).attr("y1", (u) => u.y1).attr("y2", (u) => u.y2).attr("stroke-width", this.bandingStrokeWidth);
    const h = A.path();
    [0, 1, 2, 3].forEach((u) => {
      const S = this.shape.machining.getCorner(u);
      if (!S?.type) return;
      let D, H, k;
      switch (u) {
        case 0:
          if (!Z(a.sides.a) || a.sides.a === !1) return;
          D = {
            x: this.xScale(0) - n,
            y: this.getYScale()(C({ v: S.size ?? 0, o: this }))
          }, H = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, k = {
            x: this.xScale(C({ v: S.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          };
          break;
        case 1:
          if (!Z(a.sides.b) || a.sides.b === !1) return;
          D = {
            x: this.xScale(this.shapeL - C({ v: S.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          }, H = {
            x: this.xScale(this.shapeL) - n,
            y: this.getYScale()(0)
          }, k = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(C({ v: S.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!Z(a.sides.c) || a.sides.c === !1) return;
          D = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(this.shapeW - C({ v: S.size ?? 0, o: this }))
          }, H = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, k = {
            x: this.xScale(this.shapeL - C({ v: S.size ?? 0, o: this })) - n,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          };
          break;
        case 3:
          if (!Z(a.sides.d) || a.sides.d === !1) return;
          D = {
            x: this.xScale(C({ v: S.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          }, H = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, k = {
            x: this.xScale(0) - n,
            y: this.getYScale()(this.shapeW - C({ v: S.size ?? 0, o: this })) + n
          };
          break;
        default:
          return;
      }
      if (h.moveTo(D.x, D.y), S.type === "radius")
        switch (h.arcTo(
          H.x,
          H.y,
          k.x,
          k.y,
          this.measurementScale(S.size ?? 0)
        ), u) {
          case 0:
          case 2:
            h.lineTo(k.x + n, k.y);
            break;
          case 1:
          case 3:
            h.lineTo(k.x, k.y - (this.currentSide === 0 ? n : -1));
            break;
        }
      else S.type === "bevel" && h.lineTo(k.x, k.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][u]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", h.toString());
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
    const a = this.shouldShowAxes(), n = a ? this.edgePadding : 0, e = a ? this.axisPadding : 0;
    if (a && this.yAxis) {
      const d = this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
      this.yAxis.call(
        A.axisRight(d).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + e))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(m, p, h) {
        (p === 0 || p === h.length - 1) && A.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createEdgeHoles(), this.createGrooves(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(a) {
    const n = this.shape.machining.getCorner(a);
    return n?.type ? this.measurementScale(n.size ?? 0) : 0;
  }
  updateSize() {
    if (this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let a = this.shape.shortSide / this.shape.longSide;
    this.w = this.HTMLElementWidth;
    const n = this.shouldShowAxes(), e = n ? this.edgePadding : 0, d = n ? this.edgePadding : 0, m = n ? this.axisPadding : 0, p = n ? this.axisPadding : 0;
    if (this.w - (e + m) < 0) return;
    let h = window.innerHeight - (p + d) - 20;
    h > 600 && (h = 600), this.xScale.domain([0, this.shapeL]).range([e, this.w - m]), a > 0.3 ? this.h = this.xScale(this.shape.shortSide) + p : (a = 0.3, this.h = this.w * a), this.h > h && (this.h = h, this.w = this.h / a, this.xScale.domain([0, this.shapeL]).range([e, this.w - m])), this.yScale.domain([this.shapeW, 0]).range([p, this.h - d]), this.yScaleFlipped.domain([0, this.shapeW]).range([p, this.h - d]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (e + m)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const Dt = { class: "inputs" }, Lt = {
  key: 0,
  class: "debug"
}, At = {
  key: 1,
  class: "shape-name"
}, Pt = { class: "shape-dimensions" }, Yt = {
  key: 2,
  class: "sides-wrapper"
}, Gt = { class: "menu" }, Tt = {
  key: 4,
  class: "button-wrapper"
}, Et = { class: "grid-table" }, zt = { class: "row table-heading" }, Bt = {
  key: 0,
  class: "cell id"
}, Mt = {
  key: 0,
  class: "row"
}, Wt = {
  key: 0,
  class: "cell"
}, qt = { class: "id" }, Vt = { class: "cell" }, Ft = ["onClick"], Rt = {
  key: 6,
  class: "menu-prompt"
}, $t = !1, Kt = /* @__PURE__ */ Ue({
  __name: "Machining",
  props: /* @__PURE__ */ fe({
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
      grooves: {
        enabled: !0,
        defaultWidth: 5,
        defaultDepth: 5
      },
      banding: {
        enabled: !1,
        options: [[]],
        labels: [],
        pricing: {},
        enableCorners: !1
      }
    }) },
    customMachiningProducts: { default: () => [] }
  }, {
    inputShape: {
      required: !0
    },
    inputShapeModifiers: {}
  }),
  emits: /* @__PURE__ */ fe(["update:shape", "close"], ["update:inputShape"]),
  setup(w, { emit: a }) {
    const n = tt(() => import("./ObjectViewer-IjOsrd1T.js")), e = w, d = a, m = "production", p = q(), h = q(), { show: u, close: S, onToggle: D, onClosed: H, cleanup: k, isShown: $ } = nt(p), O = Y(() => lt(i.value)), se = Y(() => (e.customMachiningProducts?.length ?? 0) > 0), ie = Y(() => {
      const t = /* @__PURE__ */ new Set();
      for (const s of e.customMachiningProducts ?? [])
        (s.labels ?? []).forEach((o) => t.add(o));
      return [...t];
    }), ye = Y(() => {
      const t = (e.customMachiningProducts ?? []).map((o) => o.name).filter((o) => !!o), s = [];
      t.length && s.push(t);
      for (const o of ie.value) {
        const r = /* @__PURE__ */ new Set();
        for (const b of e.customMachiningProducts ?? [])
          if (b.labels?.includes(o) && b.pricing) {
            const f = b.labels.indexOf(o);
            Object.keys(b.pricing).forEach((R) => {
              const X = R.split("|");
              X[f] && r.add(X[f]);
            });
          }
        s.push([...r]);
      }
      return s;
    }), we = Y(() => {
      const t = {};
      for (const s of e.customMachiningProducts ?? [])
        if (s.price && s.name && (t[s.name] = s.price), s.pricing && s.name)
          for (const [o, r] of Object.entries(s.pricing))
            t[`${s.name}|${o}`] = r;
      return t;
    }), He = Y(() => {
      if (!U.value?.length) return 0;
      if (l.value === "banding") return 1;
      let t = Object.values(z.value).filter((s) => s.enabled).length;
      return t += 2, t;
    }), Ce = Y(() => {
      if (!U.value.length || l.value === "banding") return;
      const t = {
        id: "34px",
        del: "30px"
      }, s = [];
      return U.value.forEach((o) => {
        const r = z.value[o];
        r.enabled && s.push(r.w ?? "1fr");
      }), s.unshift(t.id), s.push(t.del), s.join(" ");
    }), z = Y(() => !l.value || l.value === "banding" ? null : ee[l.value]), U = Y(() => !l.value || l.value === "banding" ? [] : Object.keys(ee[l.value]).filter((t) => ee[l.value][t].enabled)), ae = Y(() => l.value ? Ge() : []), ke = Y(() => {
      const t = i.value?.machining?.corners?.map((s) => s?.isPresent?.() ? s.getCorner() : null)?.filter((s) => s) ?? [];
      return [...Se, ...t];
    }), De = Y(() => {
      const t = e.options.banding?.options?.[0];
      return !t || !Array.isArray(t) ? [] : t.filter((s) => typeof s == "string");
    }), Le = Y(() => {
      const t = i.value?.extras?.banding;
      if (!t) return [];
      const s = [], o = (r) => {
        r && Object.values(r).forEach((b) => {
          typeof b == "string" && b.trim() && b.split("|").forEach((f) => {
            f.trim() && !s.includes(f.trim()) && s.push(f.trim());
          });
        });
      };
      return t.faces && o(t.faces), t.sides && o(t.sides), s;
    }), P = (t = !0) => {
      t ? _.value = t : ge(() => _.value = !1);
    }, Ae = () => {
      le(), re(), oe(), he(), Ve();
    }, Pe = (t) => {
      if (l.value === "corners")
        switch (t) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return t;
        }
      return t + 1;
    }, ne = () => l.value !== "banding", Ye = (t) => l.value === "corners" || l.value === "holes" && t?.edge || t?.face === void 0 || t?.face === null ? !0 : t.face === B.value, V = (t, s = null) => {
      if (!t?.length) return [];
      let o = "None";
      s === "depth" && (o = "Through");
      const r = [{ label: o, value: null }];
      return t.forEach((b) => {
        const f = b.toString().charAt(0).toUpperCase() + b.toString().slice(1);
        r.push({ label: f, value: b });
      }), r;
    }, Ge = () => {
      if (!l.value) return [];
      if (l.value === "banding") return [];
      const t = i.value.machining[l.value];
      return t ? Array.isArray(t) ? t : [t] : [];
    };
    let x = null;
    const Q = () => {
      if (!i.value || !h.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      x = new kt({
        HTMLElement: h.value,
        shape: i.value,
        vueComponent: null
      }), x.init(), x.updateSize(), ue.value = !0;
    }, Te = at(() => {
      ue.value && x && x.updateSize();
    }, 10);
    Ke(h, () => {
      Te();
    });
    const Ee = () => {
      B.value = B.value === 0 ? 1 : 0, x.flip();
    }, ze = () => {
      switch (l.value) {
        case "holes":
          Be();
          break;
        case "hingeHoles":
          Me();
          break;
        case "corners":
          We();
          break;
        case "grooves":
          qe();
          break;
      }
    }, Be = () => {
      i.value.machining.addHole({
        x: C({ v: i.value.longSide }) / 2,
        y: C({ v: i.value.shortSide }) / 2,
        diameter: e.options.holes.defaultDiameter ?? 1,
        depth: e.options.holes.defaultDepth ?? C({ v: i.value.t }) ?? 0,
        face: B.value,
        edge: null
      }), x.createHoles();
    }, Me = () => {
      i.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: e.options.holes.defaultDiameter ?? 0,
        depth: e.options.holes.defaultDepth ?? 0,
        side: "w1",
        face: B.value,
        distanceFromEdge: e.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: e.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: e.options.hingeHoles.minimumHoleDistance,
        hingeLength: e.options.hingeHoles.defaultHingeLength
      }), x.createHingeHoles();
    }, We = () => {
      const t = e.options.corners.types?.[0] || "radius", s = e.options.corners.minValue || 5;
      for (let o = 0; o < 4; o++)
        i.value.machining.setCorner({
          index: o,
          type: t,
          size: s
        });
      x.createCorners();
    }, qe = () => {
      i.value.machining.addGroove({
        direction: "l",
        position: C({ v: i.value.shortSide }) / 2,
        width: e.options.grooves?.defaultWidth ?? 5,
        depth: e.options.grooves?.defaultDepth ?? 5,
        start: 0,
        face: B.value
      }), x.createGrooves();
    }, le = () => {
      i.value.machining.holes.length = 0;
    }, re = () => {
      i.value.machining.hingeHoles.length = 0;
    }, oe = () => {
      i.value.machining.corners.forEach((t) => {
        t.size = null, t.type = null;
      }), i.value.banding.sides.a = !1, i.value.banding.sides.b = !1, i.value.banding.sides.c = !1, i.value.banding.sides.d = !1;
    }, Ve = () => {
      i.value.banding = {
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
    }, he = () => {
      i.value.machining.grooves.length = 0;
    }, Fe = (t) => {
      switch (l.value) {
        case "holes":
          return i.value.machining.holes.splice(t, 1);
        case "hingeHoles":
          return i.value.machining.hingeHoles.splice(t, 1);
        case "corners":
          i.value.machining.corners[t].size = null, i.value.machining.corners[t].type = null;
          return;
        case "grooves":
          return i.value.machining.grooves.splice(t, 1);
      }
    }, Re = () => {
      switch (l.value) {
        case "holes":
          return le();
        case "hingeHoles":
          return re();
        case "corners":
          return oe();
        case "grooves":
          return he();
      }
    }, ce = () => {
      if (G.value = [], !!e.options.banding.enabled) {
        P();
        for (const t in i.value.banding.sides)
          i.value.banding.sides[t] ? e.options.banding.enableTypes && e.options.banding.types?.length && (i.value.banding.sides[t] || G.value.push({
            index: t,
            message: "Please select a type"
          })) : i.value.banding.sides[t] = "";
        P(!1);
      }
    }, N = (t) => (t ?? []).map((s, o) => ({
      index: s?.index?.[0] ?? o,
      message: s?.message || "Validation error",
      fields: (s?.field ?? []).flat()
    })), $e = (t) => {
      const s = G.value.filter((o) => o.index === t);
      return s.length ? s.map((o) => o.message) : [];
    }, Oe = (t) => {
      const s = G.value.filter((r) => r.index === t && r?.fields), o = s.flatMap((r) => r.fields);
      return s.length ? o : [];
    }, Ne = (t, s) => {
      const o = Oe(t);
      return o?.length ? o.includes(s) : !1;
    }, K = () => {
      S(), d("close");
    }, je = (t) => t ? typeof t.disabled == "function" ? t.disabled() : !!t.disabled : !1, i = Xe(w, "inputShape");
    if (!i.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const de = q(!1), ue = q(!1), _ = q(!1), B = q(0), l = q(null), G = q([]), ee = pe({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: c("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: c("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: e.options.holes.diameters?.length ? "select" : "unitDependent",
          label: c("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? V(e.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && C({ v: i.value.t }) > 0,
          required: !1,
          type: e.options.holes.depths?.length ? "select" : "unitDependent",
          output: e.options.holes.depths?.length ? "float" : void 0,
          options: e.options.holes.depths?.length ? V(e.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: !1,
          // face is governed by the main face selector
          type: "select",
          output: "integer",
          options: [
            {
              label: c("faces.a"),
              value: 0
            },
            {
              label: c("faces.b"),
              value: 1
            }
          ]
        },
        edge: {
          enabled: !0,
          required: !1,
          label: c("machining.edge"),
          type: "select",
          output: "string",
          options: [
            { label: "None", value: null },
            { label: c("sides.l1"), value: "l1" },
            { label: c("sides.l2"), value: "l2" },
            { label: c("sides.w1"), value: "w1" },
            { label: c("sides.w2"), value: "w2" }
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
          label: c("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: c("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: c("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && C({ v: i.value.t }) > 0,
          required: !1,
          type: e.options.holes.depths?.length ? "select" : "unitDependent",
          output: e.options.holes.depths?.length ? "float" : void 0,
          options: e.options.holes.depths?.length ? V(e.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: e.options.holes.diameters?.length ? "select" : "unitDependent",
          label: c("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? V(e.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: c("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: !1,
          // face is governed by the main face selector
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: c("faces.a"),
              value: 0
            },
            {
              label: c("faces.b"),
              value: 1
            }
          ]
        },
        side: {
          enabled: !0,
          required: !0,
          label: c("machining.edge"),
          type: "select",
          output: "string",
          options: [
            {
              label: c("sides.w1"),
              value: "w1"
            },
            {
              label: c("sides.w2"),
              value: "w2"
            },
            {
              label: c("sides.l1"),
              value: "l1"
            },
            {
              label: c("sides.l2"),
              value: "l2"
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
          label: c("machining.type"),
          type: "select",
          output: "string",
          options: V(e.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: c("machining.size"),
          type: "unitDependent",
          min: () => typeof e.options.corners.minValue < "u" ? C({ v: e.options.corners.minValue, o: e.options }) : 0,
          max: () => typeof e.options.corners.maxValue < "u" ? C({ v: e.options.corners.maxValue, o: e.options }) : C({ v: i.value.shortSide, o: e.options }) / 2
        }
      },
      grooves: {
        direction: {
          enabled: !0,
          required: !0,
          label: c("machining.direction"),
          type: "select",
          output: "string",
          options: [
            { label: c("machining.groove_direction_horizontal"), value: "l" },
            { label: c("machining.groove_direction_vertical"), value: "w" }
          ]
        },
        position: {
          enabled: !0,
          required: !0,
          label: c("machining.position"),
          type: "unitDependent",
          min: 0
        },
        width: {
          enabled: !0,
          required: !0,
          label: c("machining.width"),
          type: e.options.grooves?.widths?.length ? "select" : "unitDependent",
          output: e.options.grooves?.widths?.length ? "float" : void 0,
          options: e.options.grooves?.widths?.length ? V(e.options.grooves.widths) : void 0,
          min: 0
        },
        depth: {
          enabled: !0,
          required: !0,
          label: c("machining.depth"),
          type: e.options.grooves?.depths?.length ? "select" : "unitDependent",
          output: e.options.grooves?.depths?.length ? "float" : void 0,
          options: e.options.grooves?.depths?.length ? V(e.options.grooves.depths) : void 0,
          min: 0
        },
        start: {
          enabled: !0,
          required: !1,
          label: c("machining.start_offset"),
          type: "unitDependent",
          min: 0
        },
        length: {
          enabled: !0,
          required: !1,
          label: c("machining.length"),
          type: "unitDependent",
          min: 0
        },
        face: {
          enabled: !1,
          // face is governed by the main face selector
          required: !0,
          type: "select",
          output: "integer",
          options: [
            { label: c("faces.a"), value: 0 },
            { label: c("faces.b"), value: 1 }
          ]
        }
      }
    }), j = pe({
      holes: {
        diameter: {
          min: e.options.holes.minDiameter,
          max: e.options.holes.maxDiameter
        },
        depth: {
          min: e.options.holes.minDepth,
          max: e.options.holes.maxDepth
        }
      },
      hingeHoles: {
        holeDistance: {
          min: e.options.hingeHoles.minimumHoleDistance
        }
      },
      corners: {
        size: {
          min: e.options.corners.minValue,
          max: e.options.corners.maxValue
        }
      },
      grooves: {
        depth: {
          min: e.options.grooves?.minDepth,
          max: e.options.grooves?.maxDepth
        }
      }
    }), Ie = (t) => {
      const s = p.value;
      if (!s) return;
      const o = s.getBoundingClientRect();
      t.clientX >= o.left && t.clientX <= o.right && t.clientY >= o.top && t.clientY <= o.bottom || K();
    }, M = () => !(!i?.value?.machining || !de.value || _.value);
    return W(() => i.value?.autoId, () => {
      M() && Q();
    }), W(() => i.value?.id, () => {
      M() && Q();
    }), W(l, (t) => {
      if (!M()) return;
      if (t === "banding") {
        P(), ce(), P(!1);
        return;
      }
      if (!t) {
        G.value = [];
        return;
      }
      P();
      const s = i.value.machining.validate(
        i.value,
        t,
        j?.[t]
      );
      G.value = N(s), P(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.machining?.holes, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "holes",
        j?.holes
      );
      G.value = N(t), x.createHoles(), x.createEdgeHoles(), P(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.machining?.hingeHoles, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "hingeHoles",
        j?.hingeHoles
      );
      G.value = N(t), x.createHingeHoles(), P(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.machining?.corners, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "corners",
        j?.corners
      );
      G.value = N(t), i.value.machining.validate(i.value, "holes"), i.value.machining.validate(i.value, "hingeHoles"), x.createShape(), x.createHoles(), x.createEdgeHoles(), x.createHingeHoles();
      for (const s of i.value.machining.corners)
        i.value.banding && s?.getCorner && (i.value.banding.sides[s.getCorner()] = "");
      x.createBanding(), P(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.machining?.grooves, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "grooves",
        j?.grooves
      );
      G.value = N(t), x.createGrooves(), P(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.banding, () => {
      M() && (ce(), x.createBanding());
    }, { deep: !0, immediate: !0 }), Je(() => {
      if ($(p.value) || u(), !i.value || !i.value.l || !i.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      ge(() => Q()), de.value = !0;
    }), Ze(() => k()), (t, s) => {
      const o = Qe("Icon");
      return g(), v("dialog", {
        id: "machining",
        ref_key: "dialogRef",
        ref: p,
        popover: "manual",
        onCancel: et(K, ["prevent"]),
        onClick: Ie,
        onToggle: s[9] || (s[9] = //@ts-ignore
        (...r) => T(D) && T(D)(...r)),
        onClose: s[10] || (s[10] = //@ts-ignore
        (...r) => T(H) && T(H)(...r)),
        onKeydown: _e(K, ["esc"])
      }, [
        L("div", Dt, [
          T(m) === "development" && $t ? (g(), v("div", Lt, [
            te(T(n), {
              data: [i.value.machining],
              paths: ["shape.machining"]
            }, null, 8, ["data"])
          ])) : y("", !0),
          L("button", {
            class: "c-btn close",
            type: "button",
            onClick: s[0] || (s[0] = (r) => K())
          }, "×"),
          i.value?.name ? (g(), v("div", At, F(i.value.name), 1)) : y("", !0),
          L("div", Pt, F(i.value?.l) + " x " + F(i.value?.w) + " " + F(i.value?.t ? "x " + i.value?.t : null), 1),
          w.options.faces.enabled ? (g(), v("div", Yt, [
            L("div", {
              ref: "sides",
              class: E(["sides", { flipped: B.value === 1 }]),
              onClick: Ee
            }, [...s[11] || (s[11] = [
              L("div", { class: "side-a" }, " A ", -1),
              L("div", { class: "side-b" }, " B ", -1)
            ])], 2),
            s[12] || (s[12] = L("div", { class: "text" }, " [Click to flip] ", -1))
          ])) : y("", !0),
          O.value ? (g(), v("button", {
            key: 3,
            class: "c-btn c-btn--delete",
            type: "button",
            onClick: Ae
          }, " Delete all machining ")) : y("", !0),
          L("div", Gt, [
            w.options.holes.enabled ? (g(), v("div", {
              key: 0,
              class: E({ selected: l.value === "holes" }),
              onClick: s[1] || (s[1] = (r) => l.value = "holes")
            }, " Holes ", 2)) : y("", !0),
            w.options.hingeHoles.enabled ? (g(), v("div", {
              key: 1,
              class: E({ selected: l.value === "hingeHoles" }),
              onClick: s[2] || (s[2] = (r) => l.value = "hingeHoles")
            }, " Hinge holes ", 2)) : y("", !0),
            w.options.corners.enabled ? (g(), v("div", {
              key: 2,
              class: E({ selected: l.value === "corners" }),
              onClick: s[3] || (s[3] = (r) => l.value = "corners")
            }, " Corners ", 2)) : y("", !0),
            w.options.grooves?.enabled ? (g(), v("div", {
              key: 3,
              class: E({ selected: l.value === "grooves" }),
              onClick: s[4] || (s[4] = (r) => l.value = "grooves")
            }, " Grooves ", 2)) : y("", !0),
            w.options.banding.enabled ? (g(), v("div", {
              key: 4,
              class: E({ selected: l.value === "banding" }),
              onClick: s[5] || (s[5] = (r) => l.value = "banding")
            }, " Banding ", 2)) : y("", !0),
            se.value ? (g(), v("div", {
              key: 5,
              class: E({ selected: l.value === "custom" }),
              onClick: s[6] || (s[6] = (r) => l.value = "custom")
            }, " Custom ", 2)) : y("", !0)
          ]),
          l.value && l.value !== "banding" ? (g(), v("div", Tt, [
            l.value === "holes" || l.value === "hingeHoles" || l.value === "corners" || l.value === "grooves" ? (g(), v("button", {
              key: 0,
              class: "c-btn",
              type: "button",
              onClick: ze
            }, " Create ")) : y("", !0),
            l.value && l.value !== "banding" ? (g(), v("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              onClick: Re
            }, " Delete all ")) : y("", !0)
          ])) : y("", !0),
          L("div", Et, [
            l.value === "banding" && i.value ? (g(), ve(xe, {
              key: 0,
              shape: i.value,
              "onUpdate:shape": s[7] || (s[7] = (r) => i.value = r),
              "extra-type": "banding",
              "extra-label": "Banding",
              "extra-keys": ke.value,
              labels: w.options.banding.labels,
              "all-options": w.options.banding.options,
              "user-friendly-field-map": T(be),
              "part-columns": 1,
              "allow-custom-names": !0,
              "custom-names": De.value,
              "used-names": Le.value,
              "enable-pricing": !0,
              pricing: w.options.banding.pricing,
              "get-price": w.getExtrasPrice,
              "format-price": w.formatPrice,
              "get-available-pricing-options": w.getAvailablePricingOptions
            }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "custom-names", "used-names", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : y("", !0),
            l.value === "custom" && i.value && se.value ? (g(), ve(xe, {
              key: 1,
              shape: i.value,
              "onUpdate:shape": s[8] || (s[8] = (r) => i.value = r),
              "extra-type": "machining",
              "extra-label": "Custom",
              labels: ie.value,
              "all-options": ye.value,
              "user-friendly-field-map": T(be),
              "part-columns": 1,
              "enable-pricing": !0,
              pricing: we.value,
              "get-price": w.getExtrasPrice,
              "format-price": w.formatPrice,
              "get-available-pricing-options": w.getAvailablePricingOptions
            }, null, 8, ["shape", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : y("", !0)
          ]),
          l.value !== "banding" && ae.value.length ? (g(), v("div", {
            key: 5,
            class: E(["grid-table", l.value]),
            style: me({ "grid-template-columns": Ce.value })
          }, [
            L("div", zt, [
              ne() ? (g(), v("div", Bt)) : y("", !0),
              (g(!0), v(I, null, J(z.value, (r, b) => st((g(), v("div", {
                key: b,
                class: "cell"
              }, F(r.label ?? b), 1)), [
                [it, r.enabled]
              ])), 128)),
              s[13] || (s[13] = L("div", { class: "cell" }, null, -1))
            ]),
            (g(!0), v(I, null, J(ae.value, (r, b) => (g(), v(I, { key: b }, [
              Ye(r) ? (g(), v("div", Mt, [
                ne() ? (g(), v("div", Wt, [
                  L("div", qt, F(Pe(b)), 1)
                ])) : y("", !0),
                (g(!0), v(I, null, J(U.value, (f, R) => (g(), v("div", {
                  key: R,
                  class: "cell"
                }, [
                  te(ht, {
                    type: z.value[f].type,
                    id: f + "-" + R,
                    warning: Ne(b, f),
                    "enable-label": !1,
                    placeholder: z.value[f].label ?? f,
                    disabled: je(z.value[f]),
                    value: T(ot)(r, f),
                    output: z.value[f].output,
                    options: z.value[f].options,
                    "onUpdate:value": (X) => T(rt)(r, f, X)
                  }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                ]))), 128)),
                L("div", Vt, [
                  L("button", {
                    class: "c-btn delete",
                    type: "button",
                    onClick: (f) => Fe(b)
                  }, [
                    te(o, { icon: ["fass", "trash"] })
                  ], 8, Ft)
                ]),
                (g(!0), v(I, null, J($e(b), (f, R) => (g(), v("div", {
                  key: R,
                  class: "group validation",
                  style: me({ "grid-column-end": "span " + He.value })
                }, F(f), 5))), 128))
              ])) : y("", !0)
            ], 64))), 128))
          ], 6)) : l.value ? y("", !0) : (g(), v("div", Rt, "Please select from the menu above"))
        ]),
        L("div", {
          id: "machining-diagram",
          class: E(["diagram", { flipped: B.value === 1 }]),
          ref_key: "diagramRef",
          ref: h
        }, null, 2)
      ], 544);
    };
  }
});
export {
  Kt as default
};
