import { d as Re, I as $e, y as Oe, J as de, k as B, l as Ne, H as ue, r as je, o as g, c as v, a as D, u as R, m as te, b as y, t as V, g as E, j as pe, n as ge, F as I, f as X, w as Ie, z as ve, B as Ue, s as W, x as Y, h as Ke, v as Xe, K as Je } from "./vendor-vue-DcIxm_xE.js";
import { h as H, M as be, i as J, u as me } from "./InputUserGroup-BS7MVA1o.js";
import { b as fe, h as Qe, s as Ze, g as _e, I as et } from "./EcommerceCalculator-xTmaI3ss.js";
import { t as c } from "./i18n-BsG8Q9fA.js";
import { l as tt, a as st, b as it, c as at, p as nt, S as lt, e as rt, f as ot, g as ht, h as ct, i as dt, j as ut, s as pt, k as gt, m as vt } from "./vendor-d3-DI9vO-24.js";
const A = {
  precisionFixed: vt,
  format: gt,
  select: pt,
  selectAll: ut,
  scaleLinear: tt,
  scaleSequential: dt,
  axisTop: ct,
  axisBottom: ht,
  axisRight: ot,
  axisLeft: rt,
  symbol: lt,
  path: nt,
  arc: at,
  symbolTriangle: it,
  symbolSquare: st
};
class mt {
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
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(u, h, p) {
      (h === 0 || h === p.length - 1) && A.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - d}, 0)`).attr("class", "axis y"), this.yAxis.call(
      A.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + d))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(u, h, p) {
      (h === 0 || h === p.length - 1) && A.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px")), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(a, n) {
    this.pointGroup.append("circle").attr("cx", this.xScale(a)).attr("cy", this.getYScale()(n)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const a = this.shouldShowAxes(), n = a ? this.edgePadding : 0, e = a ? this.edgePadding : 0, d = a ? this.axisPadding : 0, m = a ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", n).attr("y", m).attr("width", this.w - (n + d)).attr("height", this.h - (m + e)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", n).attr("y", m).attr("width", this.w - (n + d)).attr("height", this.h - (m + e)).style("fill", "url(#stripes)");
    const u = A.path(), h = [], p = [];
    [0, 1, 2, 3].forEach((L) => {
      const C = this.shape.machining.getCorner(L);
      C && C.type ? (h.push(C.size ? H({ v: C.size ?? 0, o: this }) : 0), p.push(C.type)) : (h.push(0), p.push(null));
    });
    const x = (L, C, k, $, O) => {
      p[L] === "radius" ? u.arcTo(
        this.xScale(C),
        this.getYScale()(k),
        this.xScale($),
        this.getYScale()(O),
        this.measurementScale(h[L])
      ) : p[L] === "bevel" ? u.lineTo(this.xScale($), this.getYScale()(O)) : (u.lineTo(this.xScale(C), this.getYScale()(k)), u.lineTo(this.xScale($), this.getYScale()(O)));
    };
    u.moveTo(this.xScale(0), this.getYScale()(h[0])), x(0, 0, 0, h[0], 0), (p[0] === "bevel" || p[1] === "bevel") && u.lineTo(this.xScale(this.shapeL - h[1]), this.getYScale()(0)), x(1, this.shapeL, 0, this.shapeL, h[1]), (p[1] === "bevel" || p[2] === "bevel") && u.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - h[2])
    ), x(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - h[2],
      this.shapeW
    ), (p[2] === "bevel" || p[3] === "bevel") && u.lineTo(this.xScale(h[3]), this.getYScale()(this.shapeW)), x(3, 0, this.shapeW, 0, this.shapeW - h[3]), u.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", u.toString());
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
    const n = -1, e = this.shouldShowAxes(), d = e ? this.edgePadding : 0, m = e ? this.axisPadding : 0, u = [];
    for (const p of be)
      if (a.getSide(p))
        switch (p) {
          case "l1":
            u.push({
              x1: d - n,
              x2: d - n,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            u.push({
              x1: this.w - m + n,
              x2: this.w - m + n,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            u.push({
              x1: d + this.getCornerBandingSize(0),
              x2: this.w - m - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? n : -n),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
            });
            break;
          case "w2":
            u.push({
              x1: d + this.getCornerBandingSize(3),
              x2: this.w - m - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(u).join("line").attr("class", "banding").attr("x1", (p) => p.x1).attr("x2", (p) => p.x2).attr("y1", (p) => p.y1).attr("y2", (p) => p.y2).attr("stroke-width", this.bandingStrokeWidth);
    const h = A.path();
    [0, 1, 2, 3].forEach((p) => {
      const x = this.shape.machining.getCorner(p);
      if (!x?.type) return;
      let L, C, k;
      switch (p) {
        case 0:
          if (!J(a.sides.a) || a.sides.a === !1) return;
          L = {
            x: this.xScale(0) - n,
            y: this.getYScale()(H({ v: x.size ?? 0, o: this }))
          }, C = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, k = {
            x: this.xScale(H({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          };
          break;
        case 1:
          if (!J(a.sides.b) || a.sides.b === !1) return;
          L = {
            x: this.xScale(this.shapeL - H({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          }, C = {
            x: this.xScale(this.shapeL) - n,
            y: this.getYScale()(0)
          }, k = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(H({ v: x.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!J(a.sides.c) || a.sides.c === !1) return;
          L = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(this.shapeW - H({ v: x.size ?? 0, o: this }))
          }, C = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, k = {
            x: this.xScale(this.shapeL - H({ v: x.size ?? 0, o: this })) - n,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          };
          break;
        case 3:
          if (!J(a.sides.d) || a.sides.d === !1) return;
          L = {
            x: this.xScale(H({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          }, C = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, k = {
            x: this.xScale(0) - n,
            y: this.getYScale()(this.shapeW - H({ v: x.size ?? 0, o: this })) + n
          };
          break;
        default:
          return;
      }
      if (h.moveTo(L.x, L.y), x.type === "radius")
        switch (h.arcTo(
          C.x,
          C.y,
          k.x,
          k.y,
          this.measurementScale(x.size ?? 0)
        ), p) {
          case 0:
          case 2:
            h.lineTo(k.x + n, k.y);
            break;
          case 1:
          case 3:
            h.lineTo(k.x, k.y - (this.currentSide === 0 ? n : -1));
            break;
        }
      else x.type === "bevel" && h.lineTo(k.x, k.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][p]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", h.toString());
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
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(m, u, h) {
        (u === 0 || u === h.length - 1) && A.select(this).select("line").style("display", "none");
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
    const n = this.shouldShowAxes(), e = n ? this.edgePadding : 0, d = n ? this.edgePadding : 0, m = n ? this.axisPadding : 0, u = n ? this.axisPadding : 0;
    if (this.w - (e + m) < 0) return;
    let h = window.innerHeight - (u + d) - 20;
    h > 600 && (h = 600), this.xScale.domain([0, this.shapeL]).range([e, this.w - m]), a > 0.3 ? this.h = this.xScale(this.shape.shortSide) + u : (a = 0.3, this.h = this.w * a), this.h > h && (this.h = h, this.w = this.h / a, this.xScale.domain([0, this.shapeL]).range([e, this.w - m])), this.yScale.domain([this.shapeW, 0]).range([u, this.h - d]), this.yScaleFlipped.domain([0, this.shapeW]).range([u, this.h - d]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (e + m)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const ft = { class: "inputs" }, bt = {
  key: 0,
  class: "debug"
}, xt = {
  key: 1,
  class: "shape-name"
}, St = { class: "shape-dimensions" }, yt = {
  key: 2,
  class: "sides-wrapper"
}, wt = { class: "menu" }, Ht = {
  key: 4,
  class: "button-wrapper"
}, Ct = { class: "grid-table" }, kt = { class: "row table-heading" }, Lt = {
  key: 0,
  class: "cell id"
}, Dt = {
  key: 0,
  class: "row"
}, At = {
  key: 0,
  class: "cell"
}, Pt = { class: "id" }, Yt = { class: "cell" }, Gt = ["onClick"], Et = {
  key: 6,
  class: "menu-prompt"
}, Mt = !1, Vt = /* @__PURE__ */ Re({
  __name: "Machining",
  props: /* @__PURE__ */ ve({
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
  emits: /* @__PURE__ */ ve(["update:shape", "close"], ["update:inputShape"]),
  setup(w, { emit: a }) {
    const n = Ue(() => import("./ObjectViewer-BvG3JkRw.js")), e = w, d = a, m = "production", u = W(), h = W(), p = Y(() => Qe(i.value)), x = Y(() => (e.customMachiningProducts?.length ?? 0) > 0), L = Y(() => {
      const t = /* @__PURE__ */ new Set();
      for (const s of e.customMachiningProducts ?? [])
        (s.labels ?? []).forEach((r) => t.add(r));
      return [...t];
    }), C = Y(() => {
      const t = (e.customMachiningProducts ?? []).map((r) => r.name).filter((r) => !!r), s = [];
      t.length && s.push(t);
      for (const r of L.value) {
        const o = /* @__PURE__ */ new Set();
        for (const b of e.customMachiningProducts ?? [])
          if (b.labels?.includes(r) && b.pricing) {
            const f = b.labels.indexOf(r);
            Object.keys(b.pricing).forEach((F) => {
              const K = F.split("|");
              K[f] && o.add(K[f]);
            });
          }
        s.push([...o]);
      }
      return s;
    }), k = Y(() => {
      const t = {};
      for (const s of e.customMachiningProducts ?? [])
        if (s.price && s.name && (t[s.name] = s.price), s.pricing && s.name)
          for (const [r, o] of Object.entries(s.pricing))
            t[`${s.name}|${r}`] = o;
      return t;
    }), $ = Y(() => {
      if (!U.value?.length) return 0;
      if (l.value === "banding") return 1;
      let t = Object.values(M.value).filter((s) => s.enabled).length;
      return t += 2, t;
    }), O = Y(() => {
      if (!U.value.length || l.value === "banding") return;
      const t = {
        id: "34px",
        del: "30px"
      }, s = [];
      return U.value.forEach((r) => {
        const o = M.value[r];
        o.enabled && s.push(o.w ?? "1fr");
      }), s.unshift(t.id), s.push(t.del), s.join(" ");
    }), M = Y(() => !l.value || l.value === "banding" ? null : ee[l.value]), U = Y(() => !l.value || l.value === "banding" ? [] : Object.keys(ee[l.value]).filter((t) => ee[l.value][t].enabled)), se = Y(() => l.value ? ke() : []), xe = Y(() => {
      const t = i.value?.machining?.corners?.map((s) => s?.isPresent?.() ? s.getCorner() : null)?.filter((s) => s) ?? [];
      return [...be, ...t];
    }), Se = Y(() => {
      const t = e.options.banding?.options?.[0];
      return !t || !Array.isArray(t) ? [] : t.filter((s) => typeof s == "string");
    }), ye = Y(() => {
      const t = i.value?.extras?.banding;
      if (!t) return [];
      const s = [], r = (o) => {
        o && Object.values(o).forEach((b) => {
          typeof b == "string" && b.trim() && b.split("|").forEach((f) => {
            f.trim() && !s.includes(f.trim()) && s.push(f.trim());
          });
        });
      };
      return t.faces && r(t.faces), t.sides && r(t.sides), s;
    }), P = (t = !0) => {
      t ? _.value = t : ue(() => _.value = !1);
    }, we = () => {
      ae(), ne(), le(), re(), Me();
    }, He = (t) => {
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
    }, ie = () => l.value !== "banding", Ce = (t) => l.value === "corners" || l.value === "holes" && t?.edge || t?.face === void 0 || t?.face === null ? !0 : t.face === z.value, q = (t, s = null) => {
      if (!t?.length) return [];
      let r = "None";
      s === "depth" && (r = "Through");
      const o = [{ label: r, value: null }];
      return t.forEach((b) => {
        const f = b.toString().charAt(0).toUpperCase() + b.toString().slice(1);
        o.push({ label: f, value: b });
      }), o;
    }, ke = () => {
      if (!l.value) return [];
      if (l.value === "banding") return [];
      const t = i.value.machining[l.value];
      return t ? Array.isArray(t) ? t : [t] : [];
    };
    let S = null;
    const Q = () => {
      if (!i.value || !h.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      S = new mt({
        HTMLElement: h.value,
        shape: i.value,
        vueComponent: null
      }), S.init(), S.updateSize(), ce.value = !0;
    }, Le = Je(() => {
      ce.value && S && S.updateSize();
    }, 10);
    $e(h, () => {
      Le();
    });
    const De = () => {
      z.value = z.value === 0 ? 1 : 0, S.flip();
    }, Ae = () => {
      switch (l.value) {
        case "holes":
          Pe();
          break;
        case "hingeHoles":
          Ye();
          break;
        case "corners":
          Ge();
          break;
        case "grooves":
          Ee();
          break;
      }
    }, Pe = () => {
      i.value.machining.addHole({
        x: H({ v: i.value.longSide }) / 2,
        y: H({ v: i.value.shortSide }) / 2,
        diameter: e.options.holes.defaultDiameter ?? 1,
        depth: e.options.holes.defaultDepth ?? H({ v: i.value.t }) ?? 0,
        face: z.value,
        edge: null
      }), S.createHoles();
    }, Ye = () => {
      i.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: e.options.holes.defaultDiameter ?? 0,
        depth: e.options.holes.defaultDepth ?? 0,
        side: "w1",
        face: z.value,
        distanceFromEdge: e.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: e.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: e.options.hingeHoles.minimumHoleDistance,
        hingeLength: e.options.hingeHoles.defaultHingeLength
      }), S.createHingeHoles();
    }, Ge = () => {
      const t = e.options.corners.types?.[0] || "radius", s = e.options.corners.minValue || 5;
      for (let r = 0; r < 4; r++)
        i.value.machining.setCorner({
          index: r,
          type: t,
          size: s
        });
      S.createCorners();
    }, Ee = () => {
      i.value.machining.addGroove({
        direction: "l",
        position: H({ v: i.value.shortSide }) / 2,
        width: e.options.grooves?.defaultWidth ?? 5,
        depth: e.options.grooves?.defaultDepth ?? 5,
        start: 0,
        face: z.value
      }), S.createGrooves();
    }, ae = () => {
      i.value.machining.holes.length = 0;
    }, ne = () => {
      i.value.machining.hingeHoles.length = 0;
    }, le = () => {
      i.value.machining.corners.forEach((t) => {
        t.size = null, t.type = null;
      }), i.value.banding.sides.a = !1, i.value.banding.sides.b = !1, i.value.banding.sides.c = !1, i.value.banding.sides.d = !1;
    }, Me = () => {
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
    }, re = () => {
      i.value.machining.grooves.length = 0;
    }, ze = (t) => {
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
    }, Te = () => {
      switch (l.value) {
        case "holes":
          return ae();
        case "hingeHoles":
          return ne();
        case "corners":
          return le();
        case "grooves":
          return re();
      }
    }, oe = () => {
      if (G.value = [], !!e.options.banding.enabled) {
        P();
        for (const t in i.value.banding.sides)
          i.value.banding.sides[t] ? e.options.banding.enableTypes && e.options.banding.types?.length && (i.value.banding.sides[t] || G.value.push({
            index: t,
            message: "Please select a type"
          })) : i.value.banding.sides[t] = "";
        P(!1);
      }
    }, N = (t) => (t ?? []).map((s, r) => ({
      index: s?.index?.[0] ?? r,
      message: s?.message || "Validation error",
      fields: (s?.field ?? []).flat()
    })), Be = (t) => {
      const s = G.value.filter((r) => r.index === t);
      return s.length ? s.map((r) => r.message) : [];
    }, We = (t) => {
      const s = G.value.filter((o) => o.index === t && o?.fields), r = s.flatMap((o) => o.fields);
      return s.length ? r : [];
    }, qe = (t, s) => {
      const r = We(t);
      return r?.length ? r.includes(s) : !1;
    }, Z = () => {
      u.value?.close(), d("close");
    }, Ve = (t) => t ? typeof t.disabled == "function" ? t.disabled() : !!t.disabled : !1, i = Oe(w, "inputShape");
    if (!i.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const he = W(!1), ce = W(!1), _ = W(!1), z = W(0), l = W(null), G = W([]), ee = de({
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
          options: e.options.holes.diameters?.length ? q(e.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && H({ v: i.value.t }) > 0,
          required: !1,
          type: e.options.holes.depths?.length ? "select" : "unitDependent",
          output: e.options.holes.depths?.length ? "float" : void 0,
          options: e.options.holes.depths?.length ? q(e.options.holes.depths) : void 0
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
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && H({ v: i.value.t }) > 0,
          required: !1,
          type: e.options.holes.depths?.length ? "select" : "unitDependent",
          output: e.options.holes.depths?.length ? "float" : void 0,
          options: e.options.holes.depths?.length ? q(e.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: e.options.holes.diameters?.length ? "select" : "unitDependent",
          label: c("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? q(e.options.holes.diameters) : void 0
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
          options: q(e.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: c("machining.size"),
          type: "unitDependent",
          min: () => typeof e.options.corners.minValue < "u" ? H({ v: e.options.corners.minValue, o: e.options }) : 0,
          max: () => typeof e.options.corners.maxValue < "u" ? H({ v: e.options.corners.maxValue, o: e.options }) : H({ v: i.value.shortSide, o: e.options }) / 2
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
          options: e.options.grooves?.widths?.length ? q(e.options.grooves.widths) : void 0,
          min: 0
        },
        depth: {
          enabled: !0,
          required: !0,
          label: c("machining.depth"),
          type: e.options.grooves?.depths?.length ? "select" : "unitDependent",
          output: e.options.grooves?.depths?.length ? "float" : void 0,
          options: e.options.grooves?.depths?.length ? q(e.options.grooves.depths) : void 0,
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
    }), j = de({
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
    }), Fe = (t) => {
      const s = u.value;
      if (!s) return;
      const r = s.getBoundingClientRect();
      t.clientX >= r.left && t.clientX <= r.right && t.clientY >= r.top && t.clientY <= r.bottom || Z();
    }, T = () => !(!i?.value?.machining || !he.value || _.value);
    return B(() => i.value?.autoId, () => {
      T() && Q();
    }), B(() => i.value?.id, () => {
      T() && Q();
    }), B(l, (t) => {
      if (!T()) return;
      if (t === "banding") {
        P(), oe(), P(!1);
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
    }, { deep: !0, immediate: !0 }), B(() => i?.value?.machining?.holes, () => {
      if (!T()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "holes",
        j?.holes
      );
      G.value = N(t), S.createHoles(), S.createEdgeHoles(), P(!1);
    }, { deep: !0, immediate: !0 }), B(() => i?.value?.machining?.hingeHoles, () => {
      if (!T()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "hingeHoles",
        j?.hingeHoles
      );
      G.value = N(t), S.createHingeHoles(), P(!1);
    }, { deep: !0, immediate: !0 }), B(() => i?.value?.machining?.corners, () => {
      if (!T()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "corners",
        j?.corners
      );
      G.value = N(t), i.value.machining.validate(i.value, "holes"), i.value.machining.validate(i.value, "hingeHoles"), S.createShape(), S.createHoles(), S.createEdgeHoles(), S.createHingeHoles();
      for (const s of i.value.machining.corners)
        i.value.banding && s?.getCorner && (i.value.banding.sides[s.getCorner()] = "");
      S.createBanding(), P(!1);
    }, { deep: !0, immediate: !0 }), B(() => i?.value?.machining?.grooves, () => {
      if (!T()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "grooves",
        j?.grooves
      );
      G.value = N(t), S.createGrooves(), P(!1);
    }, { deep: !0, immediate: !0 }), B(() => i?.value?.banding, () => {
      T() && (oe(), S.createBanding());
    }, { deep: !0, immediate: !0 }), Ne(() => {
      if (u.value?.open || u.value?.showModal(), !i.value || !i.value.l || !i.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      ue(() => Q()), he.value = !0;
    }), (t, s) => {
      const r = je("Icon");
      return g(), v("dialog", {
        id: "machining",
        ref_key: "dialogRef",
        ref: u,
        onCancel: Ie(Z, ["prevent"]),
        onClick: Fe
      }, [
        D("div", ft, [
          R(m) === "development" && Mt ? (g(), v("div", bt, [
            te(R(n), {
              data: [i.value.machining],
              paths: ["shape.machining"]
            }, null, 8, ["data"])
          ])) : y("", !0),
          D("button", {
            class: "c-btn close",
            type: "button",
            onClick: s[0] || (s[0] = (o) => Z())
          }, "×"),
          i.value?.name ? (g(), v("div", xt, V(i.value.name), 1)) : y("", !0),
          D("div", St, V(i.value?.l) + " x " + V(i.value?.w) + " " + V(i.value?.t ? "x " + i.value?.t : null), 1),
          w.options.faces.enabled ? (g(), v("div", yt, [
            D("div", {
              ref: "sides",
              class: E(["sides", { flipped: z.value === 1 }]),
              onClick: De
            }, [...s[9] || (s[9] = [
              D("div", { class: "side-a" }, " A ", -1),
              D("div", { class: "side-b" }, " B ", -1)
            ])], 2),
            s[10] || (s[10] = D("div", { class: "text" }, " [Click to flip] ", -1))
          ])) : y("", !0),
          p.value ? (g(), v("button", {
            key: 3,
            class: "c-btn c-btn--delete",
            type: "button",
            onClick: we
          }, " Delete all machining ")) : y("", !0),
          D("div", wt, [
            w.options.holes.enabled ? (g(), v("div", {
              key: 0,
              class: E({ selected: l.value === "holes" }),
              onClick: s[1] || (s[1] = (o) => l.value = "holes")
            }, " Holes ", 2)) : y("", !0),
            w.options.hingeHoles.enabled ? (g(), v("div", {
              key: 1,
              class: E({ selected: l.value === "hingeHoles" }),
              onClick: s[2] || (s[2] = (o) => l.value = "hingeHoles")
            }, " Hinge holes ", 2)) : y("", !0),
            w.options.corners.enabled ? (g(), v("div", {
              key: 2,
              class: E({ selected: l.value === "corners" }),
              onClick: s[3] || (s[3] = (o) => l.value = "corners")
            }, " Corners ", 2)) : y("", !0),
            w.options.grooves?.enabled ? (g(), v("div", {
              key: 3,
              class: E({ selected: l.value === "grooves" }),
              onClick: s[4] || (s[4] = (o) => l.value = "grooves")
            }, " Grooves ", 2)) : y("", !0),
            w.options.banding.enabled ? (g(), v("div", {
              key: 4,
              class: E({ selected: l.value === "banding" }),
              onClick: s[5] || (s[5] = (o) => l.value = "banding")
            }, " Banding ", 2)) : y("", !0),
            x.value ? (g(), v("div", {
              key: 5,
              class: E({ selected: l.value === "custom" }),
              onClick: s[6] || (s[6] = (o) => l.value = "custom")
            }, " Custom ", 2)) : y("", !0)
          ]),
          l.value && l.value !== "banding" ? (g(), v("div", Ht, [
            l.value === "holes" || l.value === "hingeHoles" || l.value === "corners" || l.value === "grooves" ? (g(), v("button", {
              key: 0,
              class: "c-btn",
              type: "button",
              onClick: Ae
            }, " Create ")) : y("", !0),
            l.value && l.value !== "banding" ? (g(), v("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              onClick: Te
            }, " Delete all ")) : y("", !0)
          ])) : y("", !0),
          D("div", Ct, [
            l.value === "banding" && i.value ? (g(), pe(fe, {
              key: 0,
              shape: i.value,
              "onUpdate:shape": s[7] || (s[7] = (o) => i.value = o),
              "extra-type": "banding",
              "extra-label": "Banding",
              "extra-keys": xe.value,
              labels: w.options.banding.labels,
              "all-options": w.options.banding.options,
              "user-friendly-field-map": R(me),
              "part-columns": 1,
              "allow-custom-names": !0,
              "custom-names": Se.value,
              "used-names": ye.value,
              "enable-pricing": !0,
              pricing: w.options.banding.pricing,
              "get-price": w.getExtrasPrice,
              "format-price": w.formatPrice,
              "get-available-pricing-options": w.getAvailablePricingOptions
            }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "custom-names", "used-names", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : y("", !0),
            l.value === "custom" && i.value && x.value ? (g(), pe(fe, {
              key: 1,
              shape: i.value,
              "onUpdate:shape": s[8] || (s[8] = (o) => i.value = o),
              "extra-type": "machining",
              "extra-label": "Custom",
              labels: L.value,
              "all-options": C.value,
              "user-friendly-field-map": R(me),
              "part-columns": 1,
              "enable-pricing": !0,
              pricing: k.value,
              "get-price": w.getExtrasPrice,
              "format-price": w.formatPrice,
              "get-available-pricing-options": w.getAvailablePricingOptions
            }, null, 8, ["shape", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : y("", !0)
          ]),
          l.value !== "banding" && se.value.length ? (g(), v("div", {
            key: 5,
            class: E(["grid-table", l.value]),
            style: ge({ "grid-template-columns": O.value })
          }, [
            D("div", kt, [
              ie() ? (g(), v("div", Lt)) : y("", !0),
              (g(!0), v(I, null, X(M.value, (o, b) => Ke((g(), v("div", {
                key: b,
                class: "cell"
              }, V(o.label ?? b), 1)), [
                [Xe, o.enabled]
              ])), 128)),
              s[11] || (s[11] = D("div", { class: "cell" }, null, -1))
            ]),
            (g(!0), v(I, null, X(se.value, (o, b) => (g(), v(I, { key: b }, [
              Ce(o) ? (g(), v("div", Dt, [
                ie() ? (g(), v("div", At, [
                  D("div", Pt, V(He(b)), 1)
                ])) : y("", !0),
                (g(!0), v(I, null, X(U.value, (f, F) => (g(), v("div", {
                  key: F,
                  class: "cell"
                }, [
                  te(et, {
                    type: M.value[f].type,
                    id: f + "-" + F,
                    warning: qe(b, f),
                    "enable-label": !1,
                    placeholder: M.value[f].label ?? f,
                    disabled: Ve(M.value[f]),
                    value: R(_e)(o, f),
                    output: M.value[f].output,
                    options: M.value[f].options,
                    "onUpdate:value": (K) => R(Ze)(o, f, K)
                  }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
                ]))), 128)),
                D("div", Yt, [
                  D("button", {
                    class: "c-btn delete",
                    type: "button",
                    onClick: (f) => ze(b)
                  }, [
                    te(r, { icon: ["fass", "trash"] })
                  ], 8, Gt)
                ]),
                (g(!0), v(I, null, X(Be(b), (f, F) => (g(), v("div", {
                  key: F,
                  class: "group validation",
                  style: ge({ "grid-column-end": "span " + $.value })
                }, V(f), 5))), 128))
              ])) : y("", !0)
            ], 64))), 128))
          ], 6)) : l.value ? y("", !0) : (g(), v("div", Et, "Please select from the menu above"))
        ]),
        D("div", {
          id: "machining-diagram",
          class: E(["diagram", { flipped: z.value === 1 }]),
          ref_key: "diagramRef",
          ref: h
        }, null, 2)
      ], 544);
    };
  }
});
export {
  Vt as default
};
