import { d as Te, D as le, E as We, G as Pe, H as re, w as W, r as P, o as Be, n as oe, m as Ee, a as g, b as p, f as D, e as C, u as $, g as J, h as Me, t as q, q as B, c as z, j as qe, l as he, F as N, k as j, x as Ve, I as Fe, y as Re, J as $e } from "./vendor-vue-BJlZsQnE.js";
import { c as w, M as de, v as I, u as Oe, s as Ne, g as je } from "./result.zod-B05sXwuC.js";
import { E as Ie, h as Ue, b as Ke } from "./EcommerceCalculator-jfzcy_Dy.js";
import { t as b } from "./i18n-Ck7sLK64.js";
import { l as Xe, s as _e, a as Je, b as Qe, p as Ze, S as et, c as tt, d as st, e as it, f as at, g as nt, h as lt, i as rt, j as ot, k as ht } from "./vendor-d3-DNaL3zcO.js";
const L = {
  precisionFixed: ht,
  format: ot,
  select: rt,
  selectAll: lt,
  scaleLinear: Xe,
  scaleSequential: nt,
  axisTop: at,
  axisBottom: it,
  axisRight: st,
  axisLeft: tt,
  symbol: et,
  path: Ze,
  arc: Qe,
  symbolTriangle: Je,
  symbolSquare: _e
};
class dt {
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
  xScale = L.scaleLinear();
  yScale = L.scaleLinear();
  yScaleFlipped = L.scaleLinear();
  measurementScale = L.scaleLinear();
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
    HTMLElement: i,
    vueComponent: n = null,
    shape: e,
    numberFormat: h = "decimal",
    decimalPlaces: m = 2
  }) {
    this.HTMLElement = i, this.numberFormat = h, this.decimalPlaces = m, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = n, this.shape = e, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = L.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = L.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const i = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (i === null) return;
          this.svgCanvas = i;
        } else
          this.svgCanvas = L.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const i = this.shouldShowAxes(), n = i ? this.edgePadding : 0, e = i ? this.edgePadding : 0, h = i ? this.axisPadding : 0, m = i ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (n + h) < 0 || this.h - (m + e) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.grooveGroup = this.svgCanvas.append("g").attr("class", "groove-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createGrooves(), this.createBanding(), i && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${m})`).attr("class", "axis x"), this.xAxis.call(
      L.axisTop(this.xScale).ticks(10).tickSize(-this.h + (m + e))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(d, o, c) {
      (o === 0 || o === c.length - 1) && L.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - h}, 0)`).attr("class", "axis y"), this.yAxis.call(
      L.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + h))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(d, o, c) {
      (o === 0 || o === c.length - 1) && L.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(i, n) {
    this.pointGroup.append("circle").attr("cx", this.xScale(i)).attr("cy", this.getYScale()(n)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const i = this.shouldShowAxes(), n = i ? this.edgePadding : 0, e = i ? this.edgePadding : 0, h = i ? this.axisPadding : 0, m = i ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", n).attr("y", m).attr("width", this.w - (n + h)).attr("height", this.h - (m + e)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", n).attr("y", m).attr("width", this.w - (n + h)).attr("height", this.h - (m + e)).style("fill", "url(#stripes)");
    const d = L.path(), o = [], c = [];
    [0, 1, 2, 3].forEach((A) => {
      const v = this.shape.machining.getCorner(A);
      v && v.type ? (o.push(v.size ? w({ v: v.size ?? 0, o: this }) : 0), c.push(v.type)) : (o.push(0), c.push(null));
    });
    const x = (A, v, f, V, F) => {
      c[A] === "radius" ? d.arcTo(
        this.xScale(v),
        this.getYScale()(f),
        this.xScale(V),
        this.getYScale()(F),
        this.measurementScale(o[A])
      ) : c[A] === "bevel" ? d.lineTo(this.xScale(V), this.getYScale()(F)) : (d.lineTo(this.xScale(v), this.getYScale()(f)), d.lineTo(this.xScale(V), this.getYScale()(F)));
    };
    d.moveTo(this.xScale(0), this.getYScale()(o[0])), x(0, 0, 0, o[0], 0), (c[0] === "bevel" || c[1] === "bevel") && d.lineTo(this.xScale(this.shapeL - o[1]), this.getYScale()(0)), x(1, this.shapeL, 0, this.shapeL, o[1]), (c[1] === "bevel" || c[2] === "bevel") && d.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - o[2])
    ), x(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - o[2],
      this.shapeW
    ), (c[2] === "bevel" || c[3] === "bevel") && d.lineTo(this.xScale(o[3]), this.getYScale()(this.shapeW)), x(3, 0, this.shapeW, 0, this.shapeW - o[3]), d.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", d.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let i;
    i = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), i.attr(
      "dy",
      i.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), i = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), i.attr(
      "dy",
      i.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), i = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), i.attr(
      "dy",
      i.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), i = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), i.attr(
      "dy",
      i.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), i = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), i.attr(
      "dy",
      i.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), i = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), i.attr(
      "dy",
      i.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("circle").data(
      this.shape.machining.holes.filter((i) => i.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (i) => i.isValid === !1).classed("partial", (i) => !i.isThroughShape(this.shape)).attr("cx", (i) => this.xScale(i.x)).attr("cy", (i) => {
      const n = i.getYDrawPosition(this.shape, this.currentSide);
      return this.getYScale()(n);
    }).attr("r", (i) => this.measurementScale(i.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const n = this.shape.machining.getAllHingeHoles(this.shape).filter((e) => e.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("circle").data(n).join("circle").attr("class", "hole").classed("invalid", (e) => e.isValid === !1).classed("partial", (e) => !e.isThroughShape(this.shape)).attr("cx", (e) => this.xScale(e.x)).attr("cy", (e) => this.getYScale()(e.getYDrawPosition(this.shape, this.currentSide))).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createGrooves() {
    this.svgCanvas.selectAll(".groove-group > *").remove(), (this.shape.machining?.grooves ?? []).filter((e) => e.shouldShow(this.currentSide)).forEach((e) => {
      const h = e.getDrawRect(this.shape);
      this.grooveGroup.append("rect").attr("class", "groove").classed("invalid", e.isValid === !1).attr("x", this.xScale(h.x)).attr("y", this.getYScale()(h.y + h.h)).attr("width", Math.abs(this.xScale(h.x + h.w) - this.xScale(h.x))).attr("height", Math.abs(this.getYScale()(h.y) - this.getYScale()(h.y + h.h)));
    });
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const i = this.shape.banding;
    if (!i) return;
    const n = -1, e = this.shouldShowAxes(), h = e ? this.edgePadding : 0, m = e ? this.axisPadding : 0, d = [];
    for (const c of de)
      if (i.getSide(c))
        switch (c) {
          case "l1":
            d.push({
              x1: h - n,
              x2: h - n,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            d.push({
              x1: this.w - m + n,
              x2: this.w - m + n,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            d.push({
              x1: h + this.getCornerBandingSize(0),
              x2: this.w - m - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? n : -n),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
            });
            break;
          case "w2":
            d.push({
              x1: h + this.getCornerBandingSize(3),
              x2: this.w - m - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(d).join("line").attr("class", "banding").attr("x1", (c) => c.x1).attr("x2", (c) => c.x2).attr("y1", (c) => c.y1).attr("y2", (c) => c.y2).attr("stroke-width", this.bandingStrokeWidth);
    const o = L.path();
    [0, 1, 2, 3].forEach((c) => {
      const x = this.shape.machining.getCorner(c);
      if (!x?.type) return;
      let A, v, f;
      switch (c) {
        case 0:
          if (!I(i.sides.a) || i.sides.a === !1) return;
          A = {
            x: this.xScale(0) - n,
            y: this.getYScale()(w({ v: x.size ?? 0, o: this }))
          }, v = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, f = {
            x: this.xScale(w({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          };
          break;
        case 1:
          if (!I(i.sides.b) || i.sides.b === !1) return;
          A = {
            x: this.xScale(this.shapeL - w({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          }, v = {
            x: this.xScale(this.shapeL) - n,
            y: this.getYScale()(0)
          }, f = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(w({ v: x.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!I(i.sides.c) || i.sides.c === !1) return;
          A = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(this.shapeW - w({ v: x.size ?? 0, o: this }))
          }, v = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, f = {
            x: this.xScale(this.shapeL - w({ v: x.size ?? 0, o: this })) - n,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          };
          break;
        case 3:
          if (!I(i.sides.d) || i.sides.d === !1) return;
          A = {
            x: this.xScale(w({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          }, v = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, f = {
            x: this.xScale(0) - n,
            y: this.getYScale()(this.shapeW - w({ v: x.size ?? 0, o: this })) + n
          };
          break;
        default:
          return;
      }
      if (o.moveTo(A.x, A.y), x.type === "radius")
        switch (o.arcTo(
          v.x,
          v.y,
          f.x,
          f.y,
          this.measurementScale(x.size ?? 0)
        ), c) {
          case 0:
          case 2:
            o.lineTo(f.x + n, f.y);
            break;
          case 1:
          case 3:
            o.lineTo(f.x, f.y - (this.currentSide === 0 ? n : -1));
            break;
        }
      else x.type === "bevel" && o.lineTo(f.x, f.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][c]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", o.toString());
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
    const i = this.shouldShowAxes(), n = i ? this.edgePadding : 0, e = i ? this.axisPadding : 0;
    if (i && this.yAxis) {
      const h = this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
      this.yAxis.call(
        L.axisRight(h).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + e))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(m, d, o) {
        (d === 0 || d === o.length - 1) && L.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createGrooves(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(i) {
    const n = this.shape.machining.getCorner(i);
    return n?.type ? this.measurementScale(n.size ?? 0) : 0;
  }
  updateSize() {
    if (this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let i = this.shape.shortSide / this.shape.longSide;
    this.w = this.HTMLElementWidth;
    const n = this.shouldShowAxes(), e = n ? this.edgePadding : 0, h = n ? this.edgePadding : 0, m = n ? this.axisPadding : 0, d = n ? this.axisPadding : 0;
    if (this.w - (e + m) < 0) return;
    let o = window.innerHeight - (d + h) - 20;
    o > 600 && (o = 600), this.xScale.domain([0, this.shapeL]).range([e, this.w - m]), i > 0.3 ? this.h = this.xScale(this.shape.shortSide) + d : (i = 0.3, this.h = this.w * i), this.h > o && (this.h = o, this.w = this.h / i, this.xScale.domain([0, this.shapeL]).range([e, this.w - m])), this.yScale.domain([this.shapeW, 0]).range([d, this.h - h]), this.yScaleFlipped.domain([0, this.shapeW]).range([d, this.h - h]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (e + m)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const ct = { class: "inputs" }, ut = {
  key: 0,
  class: "debug"
}, pt = {
  key: 1,
  class: "shape-name"
}, gt = { class: "shape-dimensions" }, vt = {
  key: 2,
  class: "sides-wrapper"
}, mt = { class: "menu" }, ft = {
  key: 4,
  class: "button-wrapper"
}, bt = { class: "grid-table" }, xt = { class: "row table-heading" }, St = {
  key: 0,
  class: "cell id"
}, yt = {
  key: 0,
  class: "cell"
}, wt = { class: "id" }, Ht = { class: "cell" }, Ct = ["onClick"], kt = {
  key: 6,
  class: "menu-prompt"
}, Dt = !1, Tt = /* @__PURE__ */ Te({
  __name: "Machining",
  props: /* @__PURE__ */ le({
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
    }) }
  }, {
    inputShape: {
      required: !0
    },
    inputShapeModifiers: {}
  }),
  emits: /* @__PURE__ */ le(["update:shape", "close"], ["update:inputShape"]),
  setup(k, { emit: i }) {
    const n = Me(() => import("./EcommerceCalculator-jfzcy_Dy.js").then((t) => t.O)), e = k, h = i, m = "production", d = P(), o = P(), c = z(() => Ue(s.value)), x = z(() => {
      if (!f.value?.length) return 0;
      if (l.value === "banding") return 1;
      let t = Object.values(v.value).filter((a) => a.enabled).length;
      return t += 2, t;
    }), A = z(() => {
      if (!f.value.length || l.value === "banding") return;
      const t = {
        id: "34px",
        del: "30px"
      }, a = [];
      return f.value.forEach((r) => {
        const u = v.value[r];
        u.enabled && a.push(u.w ?? "1fr");
      }), a.unshift(t.id), a.push(t.del), a.join(" ");
    }), v = z(() => !l.value || l.value === "banding" ? null : _[l.value]), f = z(() => !l.value || l.value === "banding" ? [] : Object.keys(_[l.value]).filter((t) => _[l.value][t].enabled)), V = z(() => l.value ? ve() : []), F = z(() => {
      const t = s.value?.machining?.corners?.map((a) => a?.isPresent?.() ? a.getCorner() : null)?.filter((a) => a) ?? [];
      return [...de, ...t];
    }), ce = z(() => {
      const t = e.options.banding?.options?.[0];
      return !t || !Array.isArray(t) ? [] : t.filter((a) => typeof a == "string");
    }), ue = z(() => {
      const t = s.value?.extras?.banding;
      if (!t) return [];
      const a = [], r = (u) => {
        u && Object.values(u).forEach((H) => {
          typeof H == "string" && H.trim() && H.split("|").forEach((S) => {
            S.trim() && !a.includes(S.trim()) && a.push(S.trim());
          });
        });
      };
      return t.faces && r(t.faces), t.sides && r(t.sides), a;
    }), Y = (t = !0) => {
      t ? X.value = t : oe(() => X.value = !1);
    }, pe = () => {
      Z(), ee(), te(), se(), He();
    }, ge = (t) => {
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
    }, Q = () => l.value !== "banding", E = (t, a = null) => {
      if (!t?.length) return [];
      let r = "None";
      a === "depth" && (r = "Through");
      const u = [{ label: r, value: null }];
      return t.forEach((H) => {
        const S = H.toString().charAt(0).toUpperCase() + H.toString().slice(1);
        u.push({ label: S, value: H });
      }), u;
    }, ve = () => {
      if (!l.value) return [];
      if (l.value === "banding") return [];
      const t = s.value.machining[l.value];
      return t ? Array.isArray(t) ? t : [t] : [];
    };
    let y = null;
    const U = () => {
      if (!s.value || !o.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", o.value), y = new dt({
        HTMLElement: o.value,
        shape: s.value,
        vueComponent: null
      }), y.init(), y.updateSize(), ne.value = !0;
    }, me = Fe(() => {
      ne.value && y && y.updateSize();
    }, 10);
    We(o, () => {
      me();
    });
    const fe = () => {
      M.value = M.value === 0 ? 1 : 0, y.flip();
    }, be = () => {
      switch (l.value) {
        case "holes":
          xe();
          break;
        case "hingeHoles":
          Se();
          break;
        case "corners":
          ye();
          break;
        case "grooves":
          we();
          break;
      }
    }, xe = () => {
      s.value.machining.addHole({
        x: w({ v: s.value.longSide }) / 2,
        y: w({ v: s.value.shortSide }) / 2,
        diameter: e.options.holes.defaultDiameter ?? 1,
        depth: e.options.holes.defaultDepth ?? w({ v: s.value.t }) ?? 0,
        face: M.value
      }), y.createHoles();
    }, Se = () => {
      s.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: e.options.holes.defaultDiameter ?? 0,
        depth: e.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: M.value,
        distanceFromEdge: e.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: e.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: e.options.hingeHoles.minimumHoleDistance,
        hingeLength: e.options.hingeHoles.defaultHingeLength
      }), y.createHingeHoles();
    }, ye = () => {
      const t = e.options.corners.types?.[0] || "radius", a = e.options.corners.minValue || 5;
      for (let r = 0; r < 4; r++)
        s.value.machining.setCorner({
          index: r,
          type: t,
          size: a
        });
      y.createCorners();
    }, we = () => {
      s.value.machining.addGroove({
        direction: "l",
        position: w({ v: s.value.shortSide }) / 2,
        width: e.options.grooves?.defaultWidth ?? 5,
        depth: e.options.grooves?.defaultDepth ?? 5,
        start: 0,
        face: M.value
      }), y.createGrooves();
    }, Z = () => {
      s.value.machining.holes.length = 0;
    }, ee = () => {
      s.value.machining.hingeHoles.length = 0;
    }, te = () => {
      s.value.machining.corners.forEach((t) => {
        t.size = null, t.type = null;
      }), s.value.banding.sides.a = !1, s.value.banding.sides.b = !1, s.value.banding.sides.c = !1, s.value.banding.sides.d = !1;
    }, He = () => {
      s.value.banding = {
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
    }, se = () => {
      s.value.machining.grooves.length = 0;
    }, Ce = (t) => {
      switch (l.value) {
        case "holes":
          return s.value.machining.holes.splice(t, 1);
        case "hingeHoles":
          return s.value.machining.hingeHoles.splice(t, 1);
        case "corners":
          s.value.machining.corners[t].size = null, s.value.machining.corners[t].type = null;
          return;
        case "grooves":
          return s.value.machining.grooves.splice(t, 1);
      }
    }, ke = () => {
      switch (l.value) {
        case "holes":
          return Z();
        case "hingeHoles":
          return ee();
        case "corners":
          return te();
        case "grooves":
          return se();
      }
    }, ie = () => {
      if (G.value = [], !!e.options.banding.enabled) {
        Y();
        for (const t in s.value.banding.sides)
          s.value.banding.sides[t] ? e.options.banding.enableTypes && e.options.banding.types?.length && (s.value.banding.sides[t] || G.value.push({
            index: t,
            message: "Please select a type"
          })) : s.value.banding.sides[t] = "";
        Y(!1);
      }
    }, De = (t) => {
      const a = G.value.filter((r) => r.index === t);
      return a.length ? a.map((r) => r.message) : [];
    }, Le = (t) => {
      const a = G.value.filter((u) => u.index === t && u?.fields), r = a.flatMap((u) => u.fields);
      return a.length ? r : [];
    }, Ae = (t, a) => {
      const r = Le(t);
      return r?.length ? r.includes(a) : !1;
    }, K = () => {
      d.value?.close(), h("close");
    }, Ye = (t) => t && typeof t.disabled == "function" ? t.disabled : !1, s = Pe(k, "inputShape");
    if (!s.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const ae = P(!1), ne = P(!1), X = P(!1), M = P(0), l = P(null), G = P([]), _ = re({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: b("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: b("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: e.options.holes.diameters?.length ? "select" : "unitDependent",
          label: b("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? E(e.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: e.options.holes.enableDepth && typeof s.value.t < "u" && w({ v: s.value.t }) > 0,
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
              label: b("faces.a"),
              value: 0
            },
            {
              label: b("faces.a"),
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
          label: b("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: b("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: b("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: e.options.holes.enableDepth && typeof s.value.t < "u" && w({ v: s.value.t }) > 0,
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
          label: b("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? E(e.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: b("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: e.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: b("faces.a"),
              value: 0
            },
            {
              label: b("faces.b"),
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
              label: b("sides.w1"),
              value: "x1"
            },
            {
              label: b("sides.w2"),
              value: "x2"
            },
            {
              label: b("sides.l1"),
              value: "y1"
            },
            {
              label: b("sides.l2"),
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
          label: b("machining.type"),
          type: "select",
          output: "string",
          options: E(e.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: b("machining.size"),
          type: "unitDependent",
          min: () => typeof e.options.corners.minValue < "u" ? w({ v: e.options.corners.minValue, o: e.options }) : 0,
          max: () => typeof e.options.corners.maxValue < "u" ? w({ v: e.options.corners.maxValue, o: e.options }) : w({ v: s.value.shortSide, o: e.options }) / 2
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
            { label: b("faces.a"), value: 0 },
            { label: b("faces.b"), value: 1 }
          ]
        }
      }
    }), R = re({
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
    }), Ge = (t) => {
      const a = d.value;
      if (!a) return;
      const r = a.getBoundingClientRect();
      t.clientX >= r.left && t.clientX <= r.right && t.clientY >= r.top && t.clientY <= r.bottom || K();
    }, T = () => !(!s?.value?.machining || !ae.value || X.value);
    return W(() => s.value?.autoId, () => {
      T() && U();
    }), W(() => s.value?.id, () => {
      T() && U();
    }), W(l, (t) => {
      if (!T()) return;
      if (t === "banding") {
        Y(), ie(), Y(!1);
        return;
      }
      if (!t) {
        G.value = [];
        return;
      }
      Y();
      const a = s.value.machining.validate(
        s.value,
        t,
        R?.[t]
      );
      G.value = a?.map((r, u) => ({
        index: u,
        message: r.message || "Validation error",
        fields: r.field || []
      })) || [], Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => s?.value?.machining?.holes, () => {
      if (!T()) return;
      Y();
      const t = s.value.machining.validate(
        s.value,
        "holes",
        R?.holes
      );
      G.value = t?.map((a, r) => ({
        index: r,
        message: a.message || "Validation error",
        fields: a.field || []
      })) || [], y.createHoles(), Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => s?.value?.machining?.hingeHoles, () => {
      if (!T()) return;
      Y();
      const t = s.value.machining.validate(
        s.value,
        "hingeHoles",
        R?.hingeHoles
      );
      G.value = t?.map((a, r) => ({
        index: r,
        message: a.message || "Validation error",
        fields: a.field || []
      })) || [], y.createHingeHoles(), Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => s?.value?.machining?.corners, () => {
      if (!T()) return;
      Y();
      const t = s.value.machining.validate(
        s.value,
        "corners",
        R?.corners
      );
      G.value = t?.map((a, r) => ({
        index: r,
        message: a.message || "Validation error",
        fields: a.field || []
      })) || [], s.value.machining.validate(s.value, "holes"), s.value.machining.validate(s.value, "hingeHoles"), y.createShape(), y.createHoles(), y.createHingeHoles();
      for (const a of s.value.machining.corners)
        s.value.banding && a?.getCorner && (s.value.banding.sides[a.getCorner()] = "");
      y.createBanding(), Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => s?.value?.machining?.grooves, () => {
      if (!T()) return;
      Y();
      const t = s.value.machining.validate(
        s.value,
        "grooves",
        R?.grooves
      );
      G.value = t?.map((a, r) => ({
        index: r,
        message: a.message || "Validation error",
        fields: a.field || []
      })) || [], y.createGrooves(), Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => s?.value?.banding, () => {
      T() && (ie(), y.createBanding());
    }, { deep: !0, immediate: !0 }), Be(() => {
      if (d.value?.open || d.value?.showModal(), !s.value || !s.value.l || !s.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      oe(() => U()), ae.value = !0;
    }), (t, a) => {
      const r = Ee("FontAwesomeIcon");
      return p(), g("dialog", {
        id: "machining",
        ref_key: "dialogRef",
        ref: d,
        onCancel: Ve(K, ["prevent"]),
        onClick: Ge
      }, [
        D("div", ct, [
          $(m) === "development" && Dt ? (p(), g("div", ut, [
            J($(n), {
              data: [s.value.machining],
              paths: ["shape.machining"]
            }, null, 8, ["data"])
          ])) : C("", !0),
          D("button", {
            class: "c-btn close",
            type: "button",
            onClick: a[0] || (a[0] = (u) => K())
          }, "×"),
          s.value?.name ? (p(), g("div", pt, q(s.value.name), 1)) : C("", !0),
          D("div", gt, q(s.value?.l) + " x " + q(s.value?.w) + " " + q(s.value?.t ? "x " + s.value?.t : null), 1),
          k.options.faces.enabled ? (p(), g("div", vt, [
            D("div", {
              ref: "sides",
              class: B(["sides", { flipped: M.value === 1 }]),
              onClick: fe
            }, [...a[7] || (a[7] = [
              D("div", { class: "side-a" }, " A ", -1),
              D("div", { class: "side-b" }, " B ", -1)
            ])], 2),
            a[8] || (a[8] = D("div", { class: "text" }, " [Click to flip] ", -1))
          ])) : C("", !0),
          c.value ? (p(), g("button", {
            key: 3,
            class: "c-btn c-btn--delete",
            type: "button",
            onClick: pe
          }, " Delete all machining ")) : C("", !0),
          D("div", mt, [
            k.options.holes.enabled ? (p(), g("div", {
              key: 0,
              class: B({ selected: l.value === "holes" }),
              onClick: a[1] || (a[1] = (u) => l.value = "holes")
            }, " Holes ", 2)) : C("", !0),
            k.options.hingeHoles.enabled ? (p(), g("div", {
              key: 1,
              class: B({ selected: l.value === "hingeHoles" }),
              onClick: a[2] || (a[2] = (u) => l.value = "hingeHoles")
            }, " Hinge holes ", 2)) : C("", !0),
            k.options.corners.enabled ? (p(), g("div", {
              key: 2,
              class: B({ selected: l.value === "corners" }),
              onClick: a[3] || (a[3] = (u) => l.value = "corners")
            }, " Corners ", 2)) : C("", !0),
            k.options.grooves?.enabled ? (p(), g("div", {
              key: 3,
              class: B({ selected: l.value === "grooves" }),
              onClick: a[4] || (a[4] = (u) => l.value = "grooves")
            }, " Grooves ", 2)) : C("", !0),
            k.options.banding.enabled ? (p(), g("div", {
              key: 4,
              class: B({ selected: l.value === "banding" }),
              onClick: a[5] || (a[5] = (u) => l.value = "banding")
            }, " Banding ", 2)) : C("", !0)
          ]),
          l.value && l.value !== "banding" ? (p(), g("div", ft, [
            l.value === "holes" || l.value === "hingeHoles" || l.value === "corners" || l.value === "grooves" ? (p(), g("button", {
              key: 0,
              class: "c-btn",
              type: "button",
              onClick: be
            }, " Create ")) : C("", !0),
            l.value && l.value !== "banding" ? (p(), g("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              onClick: ke
            }, " Delete all ")) : C("", !0)
          ])) : C("", !0),
          D("div", bt, [
            l.value === "banding" && s.value ? (p(), qe(Ie, {
              key: 0,
              shape: s.value,
              "onUpdate:shape": a[6] || (a[6] = (u) => s.value = u),
              "extra-type": "banding",
              "extra-label": "Banding",
              "extra-keys": F.value,
              labels: k.options.banding.labels,
              "all-options": k.options.banding.options,
              "user-friendly-field-map": $(Oe),
              "part-columns": 1,
              "allow-custom-names": !0,
              "custom-names": ce.value,
              "used-names": ue.value,
              "enable-pricing": !0,
              pricing: k.options.banding.pricing,
              "get-price": k.getExtrasPrice,
              "format-price": k.formatPrice,
              "get-available-pricing-options": k.getAvailablePricingOptions
            }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "custom-names", "used-names", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : C("", !0)
          ]),
          l.value !== "banding" && V.value.length ? (p(), g("div", {
            key: 5,
            class: B(["grid-table", l.value]),
            style: he({ "grid-template-columns": A.value })
          }, [
            D("div", xt, [
              Q() ? (p(), g("div", St)) : C("", !0),
              (p(!0), g(N, null, j(v.value, (u, H) => Re((p(), g("div", {
                key: H,
                class: "cell"
              }, q(u.label ?? H), 1)), [
                [$e, u.enabled]
              ])), 128)),
              a[9] || (a[9] = D("div", { class: "cell" }, null, -1))
            ]),
            (p(!0), g(N, null, j(V.value, (u, H) => (p(), g("div", {
              key: H,
              class: "row"
            }, [
              Q() ? (p(), g("div", yt, [
                D("div", wt, q(ge(H)), 1)
              ])) : C("", !0),
              (p(!0), g(N, null, j(f.value, (S, O) => (p(), g("div", {
                key: O,
                class: "cell"
              }, [
                J(Ke, {
                  type: v.value[S].type,
                  id: S + "-" + O,
                  warning: Ae(H, S),
                  "enable-label": !1,
                  placeholder: v.value[S].label ?? S,
                  disabled: Ye(v.value[S]),
                  value: $(je)(u, S),
                  output: v.value[S].output,
                  options: v.value[S].options,
                  "onUpdate:value": (ze) => $(Ne)(u, S, ze)
                }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
              ]))), 128)),
              D("div", Ht, [
                D("button", {
                  class: "c-btn delete",
                  type: "button",
                  onClick: (S) => Ce(H)
                }, [
                  J(r, { icon: ["fass", "trash"] })
                ], 8, Ct)
              ]),
              (p(!0), g(N, null, j(De(H), (S, O) => (p(), g("div", {
                key: O,
                class: "group validation",
                style: he({ "grid-column-end": "span " + x.value })
              }, q(S), 5))), 128))
            ]))), 128))
          ], 6)) : l.value ? C("", !0) : (p(), g("div", kt, "Please select from the menu above"))
        ]),
        D("div", {
          id: "machining-diagram",
          class: B(["diagram", { flipped: M.value === 1 }]),
          ref_key: "diagramRef",
          ref: o
        }, null, 2)
      ], 544);
    };
  }
});
export {
  Tt as default
};
