import { d as Ve, W as Fe, X as Re, R as de, w as T, h as $e, n as ce, L as Oe, o as p, e as g, j as D, u as R, i as ee, f as w, t as V, y as W, b as ue, B as pe, F as U, C as X, A as Ne, Y as ge, a as je, g as B, c as Y, J as Ie, M as Ue, Z as Xe } from "./vendor-vue-QD0FJS8o.js";
import { aB as C, bc as fe, aq as K, cy as ve, cz as Ke, bf as Je } from "./result.zod-B0BoTcpc.js";
import { e as me, h as Ze, I as Qe } from "./EcommerceCalculator-ClNeqZHE.js";
import { t as x } from "./i18n-Dj6izb6_.js";
import { l as _e, s as et, a as tt, b as st, p as it, S as at, c as nt, d as lt, e as rt, f as ot, g as ht, h as dt, i as ct, j as ut, k as pt } from "./vendor-d3-DC0ueG10.js";
const A = {
  precisionFixed: pt,
  format: ut,
  select: ct,
  selectAll: dt,
  scaleLinear: _e,
  scaleSequential: ht,
  axisTop: ot,
  axisBottom: rt,
  axisRight: lt,
  axisLeft: nt,
  symbol: at,
  path: it,
  arc: st,
  symbolTriangle: tt,
  symbolSquare: et
};
class gt {
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
    decimalPlaces: v = 2
  }) {
    this.HTMLElement = a, this.numberFormat = d, this.decimalPlaces = v, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = n, this.shape = e, this.w = 0, this.h = 0;
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
    const a = this.shouldShowAxes(), n = a ? this.edgePadding : 0, e = a ? this.edgePadding : 0, d = a ? this.axisPadding : 0, v = a ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (n + d) < 0 || this.h - (v + e) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.grooveGroup = this.svgCanvas.append("g").attr("class", "groove-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createGrooves(), this.createBanding(), a && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${v})`).attr("class", "axis x"), this.xAxis.call(
      A.axisTop(this.xScale).ticks(10).tickSize(-this.h + (v + e))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(c, h, u) {
      (h === 0 || h === u.length - 1) && A.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - d}, 0)`).attr("class", "axis y"), this.yAxis.call(
      A.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + d))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(c, h, u) {
      (h === 0 || h === u.length - 1) && A.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(a, n) {
    this.pointGroup.append("circle").attr("cx", this.xScale(a)).attr("cy", this.getYScale()(n)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const a = this.shouldShowAxes(), n = a ? this.edgePadding : 0, e = a ? this.edgePadding : 0, d = a ? this.axisPadding : 0, v = a ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", n).attr("y", v).attr("width", this.w - (n + d)).attr("height", this.h - (v + e)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", n).attr("y", v).attr("width", this.w - (n + d)).attr("height", this.h - (v + e)).style("fill", "url(#stripes)");
    const c = A.path(), h = [], u = [];
    [0, 1, 2, 3].forEach((L) => {
      const H = this.shape.machining.getCorner(L);
      H && H.type ? (h.push(H.size ? C({ v: H.size ?? 0, o: this }) : 0), u.push(H.type)) : (h.push(0), u.push(null));
    });
    const b = (L, H, k, $, O) => {
      u[L] === "radius" ? c.arcTo(
        this.xScale(H),
        this.getYScale()(k),
        this.xScale($),
        this.getYScale()(O),
        this.measurementScale(h[L])
      ) : u[L] === "bevel" ? c.lineTo(this.xScale($), this.getYScale()(O)) : (c.lineTo(this.xScale(H), this.getYScale()(k)), c.lineTo(this.xScale($), this.getYScale()(O)));
    };
    c.moveTo(this.xScale(0), this.getYScale()(h[0])), b(0, 0, 0, h[0], 0), (u[0] === "bevel" || u[1] === "bevel") && c.lineTo(this.xScale(this.shapeL - h[1]), this.getYScale()(0)), b(1, this.shapeL, 0, this.shapeL, h[1]), (u[1] === "bevel" || u[2] === "bevel") && c.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - h[2])
    ), b(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - h[2],
      this.shapeW
    ), (u[2] === "bevel" || u[3] === "bevel") && c.lineTo(this.xScale(h[3]), this.getYScale()(this.shapeW)), b(3, 0, this.shapeW, 0, this.shapeW - h[3]), c.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", c.toString());
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
      this.shape.machining.holes.filter((a) => a.shouldShow(this.shape, this.currentSide))
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
    const n = -1, e = this.shouldShowAxes(), d = e ? this.edgePadding : 0, v = e ? this.axisPadding : 0, c = [];
    for (const u of fe)
      if (a.getSide(u))
        switch (u) {
          case "l1":
            c.push({
              x1: d - n,
              x2: d - n,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            c.push({
              x1: this.w - v + n,
              x2: this.w - v + n,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            c.push({
              x1: d + this.getCornerBandingSize(0),
              x2: this.w - v - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? n : -n),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
            });
            break;
          case "w2":
            c.push({
              x1: d + this.getCornerBandingSize(3),
              x2: this.w - v - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(c).join("line").attr("class", "banding").attr("x1", (u) => u.x1).attr("x2", (u) => u.x2).attr("y1", (u) => u.y1).attr("y2", (u) => u.y2).attr("stroke-width", this.bandingStrokeWidth);
    const h = A.path();
    [0, 1, 2, 3].forEach((u) => {
      const b = this.shape.machining.getCorner(u);
      if (!b?.type) return;
      let L, H, k;
      switch (u) {
        case 0:
          if (!K(a.sides.a) || a.sides.a === !1) return;
          L = {
            x: this.xScale(0) - n,
            y: this.getYScale()(C({ v: b.size ?? 0, o: this }))
          }, H = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, k = {
            x: this.xScale(C({ v: b.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          };
          break;
        case 1:
          if (!K(a.sides.b) || a.sides.b === !1) return;
          L = {
            x: this.xScale(this.shapeL - C({ v: b.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          }, H = {
            x: this.xScale(this.shapeL) - n,
            y: this.getYScale()(0)
          }, k = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(C({ v: b.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!K(a.sides.c) || a.sides.c === !1) return;
          L = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(this.shapeW - C({ v: b.size ?? 0, o: this }))
          }, H = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, k = {
            x: this.xScale(this.shapeL - C({ v: b.size ?? 0, o: this })) - n,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          };
          break;
        case 3:
          if (!K(a.sides.d) || a.sides.d === !1) return;
          L = {
            x: this.xScale(C({ v: b.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          }, H = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, k = {
            x: this.xScale(0) - n,
            y: this.getYScale()(this.shapeW - C({ v: b.size ?? 0, o: this })) + n
          };
          break;
        default:
          return;
      }
      if (h.moveTo(L.x, L.y), b.type === "radius")
        switch (h.arcTo(
          H.x,
          H.y,
          k.x,
          k.y,
          this.measurementScale(b.size ?? 0)
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
      else b.type === "bevel" && h.lineTo(k.x, k.y);
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
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(v, c, h) {
        (c === 0 || c === h.length - 1) && A.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createGrooves(), this.createLegend(), this.createBanding();
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
    const n = this.shouldShowAxes(), e = n ? this.edgePadding : 0, d = n ? this.edgePadding : 0, v = n ? this.axisPadding : 0, c = n ? this.axisPadding : 0;
    if (this.w - (e + v) < 0) return;
    let h = window.innerHeight - (c + d) - 20;
    h > 600 && (h = 600), this.xScale.domain([0, this.shapeL]).range([e, this.w - v]), a > 0.3 ? this.h = this.xScale(this.shape.shortSide) + c : (a = 0.3, this.h = this.w * a), this.h > h && (this.h = h, this.w = this.h / a, this.xScale.domain([0, this.shapeL]).range([e, this.w - v])), this.yScale.domain([this.shapeW, 0]).range([c, this.h - d]), this.yScaleFlipped.domain([0, this.shapeW]).range([c, this.h - d]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (e + v)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const vt = { class: "inputs" }, mt = {
  key: 0,
  class: "debug"
}, ft = {
  key: 1,
  class: "shape-name"
}, bt = { class: "shape-dimensions" }, xt = {
  key: 2,
  class: "sides-wrapper"
}, yt = { class: "menu" }, St = {
  key: 4,
  class: "button-wrapper"
}, wt = { class: "grid-table" }, Ct = { class: "row table-heading" }, Ht = {
  key: 0,
  class: "cell id"
}, kt = {
  key: 0,
  class: "cell"
}, Lt = { class: "id" }, Dt = { class: "cell" }, At = ["onClick"], Pt = {
  key: 6,
  class: "menu-prompt"
}, Yt = !1, Bt = /* @__PURE__ */ Ve({
  __name: "Machining",
  props: /* @__PURE__ */ ge({
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
        enabled: !1,
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
  emits: /* @__PURE__ */ ge(["update:shape", "close"], ["update:inputShape"]),
  setup(y, { emit: a }) {
    const n = je(() => import("./EcommerceCalculator-ClNeqZHE.js").then((t) => t.w)), e = y, d = a, v = "production", c = B(), h = B(), u = Y(() => Ze(i.value)), b = Y(() => (e.customMachiningProducts?.length ?? 0) > 0), L = Y(() => {
      const t = /* @__PURE__ */ new Set();
      for (const s of e.customMachiningProducts ?? [])
        (s.labels ?? []).forEach((l) => t.add(l));
      return [...t];
    }), H = Y(() => {
      const t = (e.customMachiningProducts ?? []).map((l) => l.name).filter((l) => !!l), s = [];
      t.length && s.push(t);
      for (const l of L.value) {
        const o = /* @__PURE__ */ new Set();
        for (const f of e.customMachiningProducts ?? [])
          if (f.labels?.includes(l) && f.pricing) {
            const m = f.labels.indexOf(l);
            Object.keys(f.pricing).forEach((F) => {
              const I = F.split("|");
              I[m] && o.add(I[m]);
            });
          }
        s.push([...o]);
      }
      return s;
    }), k = Y(() => {
      const t = {};
      for (const s of e.customMachiningProducts ?? [])
        if (s.price && s.name && (t[s.name] = s.price), s.pricing && s.name)
          for (const [l, o] of Object.entries(s.pricing))
            t[`${s.name}|${l}`] = o;
      return t;
    }), $ = Y(() => {
      if (!j.value?.length) return 0;
      if (r.value === "banding") return 1;
      let t = Object.values(G.value).filter((s) => s.enabled).length;
      return t += 2, t;
    }), O = Y(() => {
      if (!j.value.length || r.value === "banding") return;
      const t = {
        id: "34px",
        del: "30px"
      }, s = [];
      return j.value.forEach((l) => {
        const o = G.value[l];
        o.enabled && s.push(o.w ?? "1fr");
      }), s.unshift(t.id), s.push(t.del), s.join(" ");
    }), G = Y(() => !r.value || r.value === "banding" ? null : _[r.value]), j = Y(() => !r.value || r.value === "banding" ? [] : Object.keys(_[r.value]).filter((t) => _[r.value][t].enabled)), te = Y(() => r.value ? Ce() : []), be = Y(() => {
      const t = i.value?.machining?.corners?.map((s) => s?.isPresent?.() ? s.getCorner() : null)?.filter((s) => s) ?? [];
      return [...fe, ...t];
    }), xe = Y(() => {
      const t = e.options.banding?.options?.[0];
      return !t || !Array.isArray(t) ? [] : t.filter((s) => typeof s == "string");
    }), ye = Y(() => {
      const t = i.value?.extras?.banding;
      if (!t) return [];
      const s = [], l = (o) => {
        o && Object.values(o).forEach((f) => {
          typeof f == "string" && f.trim() && f.split("|").forEach((m) => {
            m.trim() && !s.includes(m.trim()) && s.push(m.trim());
          });
        });
      };
      return t.faces && l(t.faces), t.sides && l(t.sides), s;
    }), P = (t = !0) => {
      t ? Q.value = t : ce(() => Q.value = !1);
    }, Se = () => {
      ie(), ae(), ne(), le(), ze();
    }, we = (t) => {
      if (r.value === "corners")
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
    }, se = () => r.value !== "banding", E = (t, s = null) => {
      if (!t?.length) return [];
      let l = "None";
      s === "depth" && (l = "Through");
      const o = [{ label: l, value: null }];
      return t.forEach((f) => {
        const m = f.toString().charAt(0).toUpperCase() + f.toString().slice(1);
        o.push({ label: m, value: f });
      }), o;
    }, Ce = () => {
      if (!r.value) return [];
      if (r.value === "banding") return [];
      const t = i.value.machining[r.value];
      return t ? Array.isArray(t) ? t : [t] : [];
    };
    let S = null;
    const J = () => {
      if (!i.value || !h.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", h.value), S = new gt({
        HTMLElement: h.value,
        shape: i.value,
        vueComponent: null
      }), S.init(), S.updateSize(), he.value = !0;
    }, He = Xe(() => {
      he.value && S && S.updateSize();
    }, 10);
    Fe(h, () => {
      He();
    });
    const ke = () => {
      q.value = q.value === 0 ? 1 : 0, S.flip();
    }, Le = () => {
      switch (r.value) {
        case "holes":
          De();
          break;
        case "hingeHoles":
          Ae();
          break;
        case "corners":
          Pe();
          break;
        case "grooves":
          Ye();
          break;
      }
    }, De = () => {
      i.value.machining.addHole({
        x: C({ v: i.value.longSide }) / 2,
        y: C({ v: i.value.shortSide }) / 2,
        diameter: e.options.holes.defaultDiameter ?? 1,
        depth: e.options.holes.defaultDepth ?? C({ v: i.value.t }) ?? 0,
        face: q.value
      }), S.createHoles();
    }, Ae = () => {
      i.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: e.options.holes.defaultDiameter ?? 0,
        depth: e.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: q.value,
        distanceFromEdge: e.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: e.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: e.options.hingeHoles.minimumHoleDistance,
        hingeLength: e.options.hingeHoles.defaultHingeLength
      }), S.createHingeHoles();
    }, Pe = () => {
      const t = e.options.corners.types?.[0] || "radius", s = e.options.corners.minValue || 5;
      for (let l = 0; l < 4; l++)
        i.value.machining.setCorner({
          index: l,
          type: t,
          size: s
        });
      S.createCorners();
    }, Ye = () => {
      i.value.machining.addGroove({
        direction: "l",
        position: C({ v: i.value.shortSide }) / 2,
        width: e.options.grooves?.defaultWidth ?? 5,
        depth: e.options.grooves?.defaultDepth ?? 5,
        start: 0,
        face: q.value
      }), S.createGrooves();
    }, ie = () => {
      i.value.machining.holes.length = 0;
    }, ae = () => {
      i.value.machining.hingeHoles.length = 0;
    }, ne = () => {
      i.value.machining.corners.forEach((t) => {
        t.size = null, t.type = null;
      }), i.value.banding.sides.a = !1, i.value.banding.sides.b = !1, i.value.banding.sides.c = !1, i.value.banding.sides.d = !1;
    }, ze = () => {
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
    }, le = () => {
      i.value.machining.grooves.length = 0;
    }, We = (t) => {
      switch (r.value) {
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
    }, Ge = () => {
      switch (r.value) {
        case "holes":
          return ie();
        case "hingeHoles":
          return ae();
        case "corners":
          return ne();
        case "grooves":
          return le();
      }
    }, re = () => {
      if (z.value = [], !!e.options.banding.enabled) {
        P();
        for (const t in i.value.banding.sides)
          i.value.banding.sides[t] ? e.options.banding.enableTypes && e.options.banding.types?.length && (i.value.banding.sides[t] || z.value.push({
            index: t,
            message: "Please select a type"
          })) : i.value.banding.sides[t] = "";
        P(!1);
      }
    }, Me = (t) => {
      const s = z.value.filter((l) => l.index === t);
      return s.length ? s.map((l) => l.message) : [];
    }, Te = (t) => {
      const s = z.value.filter((o) => o.index === t && o?.fields), l = s.flatMap((o) => o.fields);
      return s.length ? l : [];
    }, Be = (t, s) => {
      const l = Te(t);
      return l?.length ? l.includes(s) : !1;
    }, Z = () => {
      c.value?.close(), d("close");
    }, Ee = (t) => t && typeof t.disabled == "function" ? t.disabled : !1, i = Re(y, "inputShape");
    if (!i.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const oe = B(!1), he = B(!1), Q = B(!1), q = B(0), r = B(null), z = B([]), _ = de({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: x("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: x("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: e.options.holes.diameters?.length ? "select" : "unitDependent",
          label: x("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? E(e.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && C({ v: i.value.t }) > 0,
          required: !1,
          type: e.options.holes.depths?.length ? "select" : "unitDependent",
          output: e.options.holes.depths?.length ? "float" : void 0,
          options: e.options.holes.depths?.length ? E(e.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: e.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: x("faces.a"),
              value: 0
            },
            {
              label: x("faces.a"),
              value: 1
            }
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
          label: x("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: x("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: x("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && C({ v: i.value.t }) > 0,
          required: !1,
          type: e.options.holes.depths?.length ? "select" : "unitDependent",
          output: e.options.holes.depths?.length ? "float" : void 0,
          options: e.options.holes.depths?.length ? E(e.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: e.options.holes.diameters?.length ? "select" : "unitDependent",
          label: x("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? E(e.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: x("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: e.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: x("faces.a"),
              value: 0
            },
            {
              label: x("faces.b"),
              value: 1
            }
          ]
        },
        edge: {
          enabled: !0,
          required: !0,
          type: "select",
          output: "string",
          options: [
            {
              label: x("sides.w1"),
              value: "x1"
            },
            {
              label: x("sides.w2"),
              value: "x2"
            },
            {
              label: x("sides.l1"),
              value: "y1"
            },
            {
              label: x("sides.l2"),
              value: "y2"
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
          label: x("machining.type"),
          type: "select",
          output: "string",
          options: E(e.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: x("machining.size"),
          type: "unitDependent",
          min: () => typeof e.options.corners.minValue < "u" ? C({ v: e.options.corners.minValue, o: e.options }) : 0,
          max: () => typeof e.options.corners.maxValue < "u" ? C({ v: e.options.corners.maxValue, o: e.options }) : C({ v: i.value.shortSide, o: e.options }) / 2
        }
      },
      grooves: {
        direction: {
          enabled: !0,
          required: !0,
          label: "Direction",
          type: "select",
          output: "string",
          options: [
            { label: "Horizontal (L)", value: "l" },
            { label: "Vertical (W)", value: "w" }
          ]
        },
        position: {
          enabled: !0,
          required: !0,
          label: "Position",
          type: "unitDependent",
          min: 0
        },
        width: {
          enabled: !0,
          required: !0,
          label: "Width",
          type: e.options.grooves?.widths?.length ? "select" : "unitDependent",
          output: e.options.grooves?.widths?.length ? "float" : void 0,
          options: e.options.grooves?.widths?.length ? E(e.options.grooves.widths) : void 0,
          min: 0
        },
        depth: {
          enabled: !0,
          required: !0,
          label: "Depth",
          type: e.options.grooves?.depths?.length ? "select" : "unitDependent",
          output: e.options.grooves?.depths?.length ? "float" : void 0,
          options: e.options.grooves?.depths?.length ? E(e.options.grooves.depths) : void 0,
          min: 0
        },
        start: {
          enabled: !0,
          required: !1,
          label: "Start offset",
          type: "unitDependent",
          min: 0
        },
        length: {
          enabled: !0,
          required: !1,
          label: "Length",
          type: "unitDependent",
          min: 0
        },
        face: {
          enabled: e.options.faces?.enabled ?? !0,
          required: !0,
          type: "select",
          output: "integer",
          options: [
            { label: x("faces.a"), value: 0 },
            { label: x("faces.b"), value: 1 }
          ]
        }
      }
    }), N = de({
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
    }), qe = (t) => {
      const s = c.value;
      if (!s) return;
      const l = s.getBoundingClientRect();
      t.clientX >= l.left && t.clientX <= l.right && t.clientY >= l.top && t.clientY <= l.bottom || Z();
    }, M = () => !(!i?.value?.machining || !oe.value || Q.value);
    return T(() => i.value?.autoId, () => {
      M() && J();
    }), T(() => i.value?.id, () => {
      M() && J();
    }), T(r, (t) => {
      if (!M()) return;
      if (t === "banding") {
        P(), re(), P(!1);
        return;
      }
      if (!t) {
        z.value = [];
        return;
      }
      P();
      const s = i.value.machining.validate(
        i.value,
        t,
        N?.[t]
      );
      z.value = s?.map((l, o) => ({
        index: o,
        message: l.message || "Validation error",
        fields: l.field || []
      })) || [], P(!1);
    }, { deep: !0, immediate: !0 }), T(() => i?.value?.machining?.holes, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "holes",
        N?.holes
      );
      z.value = t?.map((s, l) => ({
        index: l,
        message: s.message || "Validation error",
        fields: s.field || []
      })) || [], S.createHoles(), P(!1);
    }, { deep: !0, immediate: !0 }), T(() => i?.value?.machining?.hingeHoles, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "hingeHoles",
        N?.hingeHoles
      );
      z.value = t?.map((s, l) => ({
        index: l,
        message: s.message || "Validation error",
        fields: s.field || []
      })) || [], S.createHingeHoles(), P(!1);
    }, { deep: !0, immediate: !0 }), T(() => i?.value?.machining?.corners, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "corners",
        N?.corners
      );
      z.value = t?.map((s, l) => ({
        index: l,
        message: s.message || "Validation error",
        fields: s.field || []
      })) || [], i.value.machining.validate(i.value, "holes"), i.value.machining.validate(i.value, "hingeHoles"), S.createShape(), S.createHoles(), S.createHingeHoles();
      for (const s of i.value.machining.corners)
        i.value.banding && s?.getCorner && (i.value.banding.sides[s.getCorner()] = "");
      S.createBanding(), P(!1);
    }, { deep: !0, immediate: !0 }), T(() => i?.value?.machining?.grooves, () => {
      if (!M()) return;
      P();
      const t = i.value.machining.validate(
        i.value,
        "grooves",
        N?.grooves
      );
      z.value = t?.map((s, l) => ({
        index: l,
        message: s.message || "Validation error",
        fields: s.field || []
      })) || [], S.createGrooves(), P(!1);
    }, { deep: !0, immediate: !0 }), T(() => i?.value?.banding, () => {
      M() && (re(), S.createBanding());
    }, { deep: !0, immediate: !0 }), $e(() => {
      if (c.value?.open || c.value?.showModal(), !i.value || !i.value.l || !i.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      ce(() => J()), oe.value = !0;
    }), (t, s) => {
      const l = Oe("FontAwesomeIcon");
      return p(), g("dialog", {
        id: "machining",
        ref_key: "dialogRef",
        ref: c,
        onCancel: Ne(Z, ["prevent"]),
        onClick: qe
      }, [
        D("div", vt, [
          R(v) === "development" && Yt ? (p(), g("div", mt, [
            ee(R(n), {
              data: [i.value.machining],
              paths: ["shape.machining"]
            }, null, 8, ["data"])
          ])) : w("", !0),
          D("button", {
            class: "c-btn close",
            type: "button",
            onClick: s[0] || (s[0] = (o) => Z())
          }, "×"),
          i.value?.name ? (p(), g("div", ft, V(i.value.name), 1)) : w("", !0),
          D("div", bt, V(i.value?.l) + " x " + V(i.value?.w) + " " + V(i.value?.t ? "x " + i.value?.t : null), 1),
          y.options.faces.enabled ? (p(), g("div", xt, [
            D("div", {
              ref: "sides",
              class: W(["sides", { flipped: q.value === 1 }]),
              onClick: ke
            }, [...s[9] || (s[9] = [
              D("div", { class: "side-a" }, " A ", -1),
              D("div", { class: "side-b" }, " B ", -1)
            ])], 2),
            s[10] || (s[10] = D("div", { class: "text" }, " [Click to flip] ", -1))
          ])) : w("", !0),
          u.value ? (p(), g("button", {
            key: 3,
            class: "c-btn c-btn--delete",
            type: "button",
            onClick: Se
          }, " Delete all machining ")) : w("", !0),
          D("div", yt, [
            y.options.holes.enabled ? (p(), g("div", {
              key: 0,
              class: W({ selected: r.value === "holes" }),
              onClick: s[1] || (s[1] = (o) => r.value = "holes")
            }, " Holes ", 2)) : w("", !0),
            y.options.hingeHoles.enabled ? (p(), g("div", {
              key: 1,
              class: W({ selected: r.value === "hingeHoles" }),
              onClick: s[2] || (s[2] = (o) => r.value = "hingeHoles")
            }, " Hinge holes ", 2)) : w("", !0),
            y.options.corners.enabled ? (p(), g("div", {
              key: 2,
              class: W({ selected: r.value === "corners" }),
              onClick: s[3] || (s[3] = (o) => r.value = "corners")
            }, " Corners ", 2)) : w("", !0),
            y.options.grooves?.enabled ? (p(), g("div", {
              key: 3,
              class: W({ selected: r.value === "grooves" }),
              onClick: s[4] || (s[4] = (o) => r.value = "grooves")
            }, " Grooves ", 2)) : w("", !0),
            y.options.banding.enabled ? (p(), g("div", {
              key: 4,
              class: W({ selected: r.value === "banding" }),
              onClick: s[5] || (s[5] = (o) => r.value = "banding")
            }, " Banding ", 2)) : w("", !0),
            b.value ? (p(), g("div", {
              key: 5,
              class: W({ selected: r.value === "custom" }),
              onClick: s[6] || (s[6] = (o) => r.value = "custom")
            }, " Custom ", 2)) : w("", !0)
          ]),
          r.value && r.value !== "banding" ? (p(), g("div", St, [
            r.value === "holes" || r.value === "hingeHoles" || r.value === "corners" || r.value === "grooves" ? (p(), g("button", {
              key: 0,
              class: "c-btn",
              type: "button",
              onClick: Le
            }, " Create ")) : w("", !0),
            r.value && r.value !== "banding" ? (p(), g("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              onClick: Ge
            }, " Delete all ")) : w("", !0)
          ])) : w("", !0),
          D("div", wt, [
            r.value === "banding" && i.value ? (p(), ue(me, {
              key: 0,
              shape: i.value,
              "onUpdate:shape": s[7] || (s[7] = (o) => i.value = o),
              "extra-type": "banding",
              "extra-label": "Banding",
              "extra-keys": be.value,
              labels: y.options.banding.labels,
              "all-options": y.options.banding.options,
              "user-friendly-field-map": R(ve),
              "part-columns": 1,
              "allow-custom-names": !0,
              "custom-names": xe.value,
              "used-names": ye.value,
              "enable-pricing": !0,
              pricing: y.options.banding.pricing,
              "get-price": y.getExtrasPrice,
              "format-price": y.formatPrice,
              "get-available-pricing-options": y.getAvailablePricingOptions
            }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "custom-names", "used-names", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : w("", !0),
            r.value === "custom" && i.value && b.value ? (p(), ue(me, {
              key: 1,
              shape: i.value,
              "onUpdate:shape": s[8] || (s[8] = (o) => i.value = o),
              "extra-type": "machining",
              "extra-label": "Custom",
              labels: L.value,
              "all-options": H.value,
              "user-friendly-field-map": R(ve),
              "part-columns": 1,
              "enable-pricing": !0,
              pricing: k.value,
              "get-price": y.getExtrasPrice,
              "format-price": y.formatPrice,
              "get-available-pricing-options": y.getAvailablePricingOptions
            }, null, 8, ["shape", "labels", "all-options", "user-friendly-field-map", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : w("", !0)
          ]),
          r.value !== "banding" && te.value.length ? (p(), g("div", {
            key: 5,
            class: W(["grid-table", r.value]),
            style: pe({ "grid-template-columns": O.value })
          }, [
            D("div", Ct, [
              se() ? (p(), g("div", Ht)) : w("", !0),
              (p(!0), g(U, null, X(G.value, (o, f) => Ie((p(), g("div", {
                key: f,
                class: "cell"
              }, V(o.label ?? f), 1)), [
                [Ue, o.enabled]
              ])), 128)),
              s[11] || (s[11] = D("div", { class: "cell" }, null, -1))
            ]),
            (p(!0), g(U, null, X(te.value, (o, f) => (p(), g("div", {
              key: f,
              class: "row"
            }, [
              se() ? (p(), g("div", kt, [
                D("div", Lt, V(we(f)), 1)
              ])) : w("", !0),
              (p(!0), g(U, null, X(j.value, (m, F) => (p(), g("div", {
                key: F,
                class: "cell"
              }, [
                ee(Qe, {
                  type: G.value[m].type,
                  id: m + "-" + F,
                  warning: Be(f, m),
                  "enable-label": !1,
                  placeholder: G.value[m].label ?? m,
                  disabled: Ee(G.value[m]),
                  value: R(Je)(o, m),
                  output: G.value[m].output,
                  options: G.value[m].options,
                  "onUpdate:value": (I) => R(Ke)(o, m, I)
                }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
              ]))), 128)),
              D("div", Dt, [
                D("button", {
                  class: "c-btn delete",
                  type: "button",
                  onClick: (m) => We(f)
                }, [
                  ee(l, { icon: ["fass", "trash"] })
                ], 8, At)
              ]),
              (p(!0), g(U, null, X(Me(f), (m, F) => (p(), g("div", {
                key: F,
                class: "group validation",
                style: pe({ "grid-column-end": "span " + $.value })
              }, V(m), 5))), 128))
            ]))), 128))
          ], 6)) : r.value ? w("", !0) : (p(), g("div", Pt, "Please select from the menu above"))
        ]),
        D("div", {
          id: "machining-diagram",
          class: W(["diagram", { flipped: q.value === 1 }]),
          ref_key: "diagramRef",
          ref: h
        }, null, 2)
      ], 544);
    };
  }
});
export {
  Bt as default
};
