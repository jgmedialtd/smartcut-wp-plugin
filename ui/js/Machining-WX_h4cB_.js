import { d as Te, G as ne, H as ze, I as Pe, J as le, w as W, r as P, o as Be, n as re, m as We, a as g, b as u, f as C, e as k, u as R, g as J, h as Ee, t as E, p as M, c as z, j as Me, l as oe, F as O, k as j, x as Ge, K as Fe, y as Ve, L as qe } from "./vendor-vue-XczpOw2V.js";
import { c as y, M as he, v as I, u as Re, s as $e, a as Ne } from "./result.zod-Jpm7fspL.js";
import { b as Oe, h as je, _ as Ie } from "./EcommerceCalculator-B91faSfl.js";
import { t as S } from "./i18n-CYUWq18B.js";
import { l as _e, s as Ue, a as Ke, b as Xe, p as Je, S as Qe, c as Ze, d as et, e as tt, f as st, g as it, h as at, i as nt, j as lt, k as rt } from "./vendor-d3-DNaL3zcO.js";
const L = {
  precisionFixed: rt,
  format: lt,
  select: nt,
  selectAll: at,
  scaleLinear: _e,
  scaleSequential: it,
  axisTop: st,
  axisBottom: tt,
  axisRight: et,
  axisLeft: Ze,
  symbol: Qe,
  path: Je,
  arc: Xe,
  symbolTriangle: Ke,
  symbolSquare: Ue
};
class ot {
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
  cornerGroup;
  legendGroup;
  pointGroup;
  loaded = !1;
  constructor({
    HTMLElement: s,
    vueComponent: n = null,
    shape: e,
    numberFormat: m = "decimal",
    decimalPlaces: v = 2
  }) {
    this.HTMLElement = s, this.numberFormat = m, this.decimalPlaces = v, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = n, this.shape = e, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = L.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = L.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.longSide, this.shapeW = this.shape.shortSide, !this.svgCanvas)
        if (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null) {
          const s = this.el.append("svg").attr("class", "vis").attr("width", "100%").attr("height", "100%");
          if (s === null) return;
          this.svgCanvas = s;
        } else
          this.svgCanvas = L.select(this.svgCanvas);
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape) return !1;
    const s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, e = s ? this.edgePadding : 0, m = s ? this.axisPadding : 0, v = s ? this.axisPadding : 0;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - (n + m) < 0 || this.h - (v + e) < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), s && (this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${v})`).attr("class", "axis x"), this.xAxis.call(
      L.axisTop(this.xScale).ticks(10).tickSize(-this.h + (v + e))
    ), this.svgCanvas.selectAll(".axis.x .tick").each(function(h, r, d) {
      (r === 0 || r === d.length - 1) && L.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - m}, 0)`).attr("class", "axis y"), this.yAxis.call(
      L.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + m))
    ), this.svgCanvas.selectAll(".axis.y .tick").each(function(h, r, d) {
      (r === 0 || r === d.length - 1) && L.select(this).select("line").style("display", "none");
    }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px"), console.log("Axes created:", { xAxis: !!this.xAxis, yAxis: !!this.yAxis })), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(s, n) {
    this.pointGroup.append("circle").attr("cx", this.xScale(s)).attr("cy", this.getYScale()(n)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    const s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, e = s ? this.edgePadding : 0, m = s ? this.axisPadding : 0, v = s ? this.axisPadding : 0;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", n).attr("y", v).attr("width", this.w - (n + m)).attr("height", this.h - (v + e)), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", n).attr("y", v).attr("width", this.w - (n + m)).attr("height", this.h - (v + e)).style("fill", "url(#stripes)");
    const h = L.path(), r = [], d = [];
    [0, 1, 2, 3].forEach((D) => {
      const p = this.shape.machining.getCorner(D);
      p && p.type ? (r.push(p.size ? y({ v: p.size ?? 0, o: this }) : 0), d.push(p.type)) : (r.push(0), d.push(null));
    });
    const x = (D, p, f, G, V) => {
      d[D] === "radius" ? h.arcTo(
        this.xScale(p),
        this.getYScale()(f),
        this.xScale(G),
        this.getYScale()(V),
        this.measurementScale(r[D])
      ) : d[D] === "bevel" ? h.lineTo(this.xScale(G), this.getYScale()(V)) : (h.lineTo(this.xScale(p), this.getYScale()(f)), h.lineTo(this.xScale(G), this.getYScale()(V)));
    };
    h.moveTo(this.xScale(0), this.getYScale()(r[0])), x(0, 0, 0, r[0], 0), (d[0] === "bevel" || d[1] === "bevel") && h.lineTo(this.xScale(this.shapeL - r[1]), this.getYScale()(0)), x(1, this.shapeL, 0, this.shapeL, r[1]), (d[1] === "bevel" || d[2] === "bevel") && h.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - r[2])
    ), x(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - r[2],
      this.shapeW
    ), (d[2] === "bevel" || d[3] === "bevel") && h.lineTo(this.xScale(r[3]), this.getYScale()(this.shapeW)), x(3, 0, this.shapeW, 0, this.shapeW - r[3]), h.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", h.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let s;
    s = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), s.attr(
      "dy",
      s.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), s = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), s.attr(
      "dy",
      s.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), s = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), s.attr(
      "dy",
      s.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), s = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), s.attr(
      "dy",
      s.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), s = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), s.attr(
      "dy",
      s.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), s = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), s.attr(
      "dy",
      s.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("circle").data(
      this.shape.machining.holes.filter((s) => s.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (s) => s.isValid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => {
      const n = s.getYDrawPosition(this.shape, this.currentSide);
      return this.getYScale()(n);
    }).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const n = this.shape.machining.getAllHingeHoles(this.shape).filter((e) => e.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("circle").data(n).join("circle").attr("class", "hole").classed("invalid", (e) => e.isValid === !1).classed("partial", (e) => !e.isThroughShape(this.shape)).attr("cx", (e) => this.xScale(e.x)).attr("cy", (e) => this.getYScale()(e.getYDrawPosition(this.shape, this.currentSide))).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const s = this.shape.banding;
    if (!s) return;
    const n = -1, e = this.shouldShowAxes(), m = e ? this.edgePadding : 0, v = e ? this.axisPadding : 0, h = [];
    for (const d of he)
      if (s.getSide(d))
        switch (d) {
          case "l1":
            h.push({
              x1: m - n,
              x2: m - n,
              y1: this.getYScale()(this.shape.machining.getCorner(0)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(3)?.size ?? 0)
              )
            });
            break;
          case "l2":
            h.push({
              x1: this.w - v + n,
              x2: this.w - v + n,
              y1: this.getYScale()(this.shape.machining.getCorner(1)?.size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.getCorner(2)?.size ?? 0)
              )
            });
            break;
          case "w1":
            h.push({
              x1: m + this.getCornerBandingSize(0),
              x2: this.w - v - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? n : -n),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
            });
            break;
          case "w2":
            h.push({
              x1: m + this.getCornerBandingSize(3),
              x2: this.w - v - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n)
            });
            break;
        }
    this.bandingGroup.selectAll("line").data(h).join("line").attr("class", "banding").attr("x1", (d) => d.x1).attr("x2", (d) => d.x2).attr("y1", (d) => d.y1).attr("y2", (d) => d.y2).attr("stroke-width", this.bandingStrokeWidth);
    const r = L.path();
    [0, 1, 2, 3].forEach((d) => {
      const x = this.shape.machining.getCorner(d);
      if (!x?.type) return;
      let D, p, f;
      switch (d) {
        case 0:
          if (!I(s.sides.a) || s.sides.a === !1) return;
          D = {
            x: this.xScale(0) - n,
            y: this.getYScale()(y({ v: x.size ?? 0, o: this }))
          }, p = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, f = {
            x: this.xScale(y({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          };
          break;
        case 1:
          if (!I(s.sides.b) || s.sides.b === !1) return;
          D = {
            x: this.xScale(this.shapeL - y({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          }, p = {
            x: this.xScale(this.shapeL) - n,
            y: this.getYScale()(0)
          }, f = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(y({ v: x.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!I(s.sides.c) || s.sides.c === !1) return;
          D = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(this.shapeW - y({ v: x.size ?? 0, o: this }))
          }, p = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, f = {
            x: this.xScale(this.shapeL - y({ v: x.size ?? 0, o: this })) - n,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          };
          break;
        case 3:
          if (!I(s.sides.d) || s.sides.d === !1) return;
          D = {
            x: this.xScale(y({ v: x.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          }, p = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, f = {
            x: this.xScale(0) - n,
            y: this.getYScale()(this.shapeW - y({ v: x.size ?? 0, o: this })) + n
          };
          break;
        default:
          return;
      }
      if (r.moveTo(D.x, D.y), x.type === "radius")
        switch (r.arcTo(
          p.x,
          p.y,
          f.x,
          f.y,
          this.measurementScale(x.size ?? 0)
        ), d) {
          case 0:
          case 2:
            r.lineTo(f.x + n, f.y);
            break;
          case 1:
          case 3:
            r.lineTo(f.x, f.y - (this.currentSide === 0 ? n : -1));
            break;
        }
      else x.type === "bevel" && r.lineTo(f.x, f.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][d]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", r.toString());
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
    const s = this.shouldShowAxes(), n = s ? this.edgePadding : 0, e = s ? this.axisPadding : 0;
    if (s && this.yAxis) {
      const m = this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
      this.yAxis.call(
        L.axisRight(m).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + (n + e))
      ), this.svgCanvas.selectAll(".axis.y .tick").each(function(v, h, r) {
        (h === 0 || h === r.length - 1) && L.select(this).select("line").style("display", "none");
      }), this.svgCanvas.selectAll(".axis.y text").attr("dx", "5px");
    }
    this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(s) {
    const n = this.shape.machining.getCorner(s);
    return n?.type ? this.measurementScale(n.size ?? 0) : 0;
  }
  updateSize() {
    if (this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let s = this.shape.shortSide / this.shape.longSide;
    this.w = this.HTMLElementWidth;
    const n = this.shouldShowAxes(), e = n ? this.edgePadding : 0, m = n ? this.edgePadding : 0, v = n ? this.axisPadding : 0, h = n ? this.axisPadding : 0;
    if (this.w - (e + v) < 0) return;
    let r = window.innerHeight - (h + m) - 20;
    r > 600 && (r = 600), this.xScale.domain([0, this.shapeL]).range([e, this.w - v]), s > 0.3 ? this.h = this.xScale(this.shape.shortSide) + h : (s = 0.3, this.h = this.w * s), this.h > r && (this.h = r, this.w = this.h / s, this.xScale.domain([0, this.shapeL]).range([e, this.w - v])), this.yScale.domain([this.shapeW, 0]).range([h, this.h - m]), this.yScaleFlipped.domain([0, this.shapeW]).range([h, this.h - m]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - (e + v)]), this.HTMLElement.style.height = this.h + "px", this.HTMLElement.style.width = this.w + "px", this.svgCanvas && this.svgCanvas.attr("width", this.w).attr("height", this.h).attr("viewBox", `0 0 ${this.w} ${this.h}`), this.create();
  }
}
const ht = { class: "inputs" }, dt = {
  key: 0,
  class: "debug"
}, ct = {
  key: 1,
  class: "shape-name"
}, ut = { class: "shape-dimensions" }, pt = {
  key: 2,
  class: "sides-wrapper"
}, gt = { class: "menu" }, vt = {
  key: 4,
  class: "button-wrapper"
}, mt = { class: "grid-table" }, ft = { class: "row table-heading" }, xt = {
  key: 0,
  class: "cell id"
}, bt = {
  key: 0,
  class: "cell"
}, St = { class: "id" }, yt = { class: "cell" }, wt = ["onClick"], Ht = {
  key: 6,
  class: "menu-prompt"
}, Ct = !1, Tt = /* @__PURE__ */ Te({
  __name: "Machining",
  props: /* @__PURE__ */ ne({
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
  emits: /* @__PURE__ */ ne(["update:shape", "close"], ["update:inputShape"]),
  setup(A, { emit: s }) {
    const n = Ee(() => import("./ObjectViewer-DZKwr4_x.js")), e = A, m = s, v = "production", h = P(), r = P(), d = z(() => je(i.value)), x = z(() => {
      if (!f.value?.length) return 0;
      if (l.value === "banding") return 1;
      let t = Object.values(p.value).filter((a) => a.enabled).length;
      return t += 2, t;
    }), D = z(() => {
      if (!f.value.length || l.value === "banding") return;
      const t = {
        id: "34px",
        del: "30px"
      }, a = [];
      return f.value.forEach((o) => {
        const c = p.value[o];
        c.enabled && a.push(c.w ?? "1fr");
      }), a.unshift(t.id), a.push(t.del), a.join(" ");
    }), p = z(() => !l.value || l.value === "banding" ? null : X[l.value]), f = z(() => !l.value || l.value === "banding" ? [] : Object.keys(X[l.value]).filter((t) => X[l.value][t].enabled)), G = z(() => l.value ? ge() : []), V = z(() => {
      const t = i.value?.machining?.corners?.map((a) => a?.isPresent?.() ? a.getCorner() : null)?.filter((a) => a) ?? [];
      return [...he, ...t];
    }), de = z(() => {
      const t = e.options.banding?.options?.[0];
      return !t || !Array.isArray(t) ? [] : t.filter((a) => typeof a == "string");
    }), ce = z(() => {
      const t = i.value?.extras?.banding;
      if (!t) return [];
      const a = [], o = (c) => {
        c && Object.values(c).forEach((H) => {
          typeof H == "string" && H.trim() && H.split("|").forEach((b) => {
            b.trim() && !a.includes(b.trim()) && a.push(b.trim());
          });
        });
      };
      return t.faces && o(t.faces), t.sides && o(t.sides), a;
    }), Y = (t = !0) => {
      t ? K.value = t : re(() => K.value = !1);
    }, ue = () => {
      Z(), ee(), te(), ye();
    }, pe = (t) => {
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
    }, Q = () => l.value !== "banding", q = (t, a = null) => {
      if (!t?.length) return [];
      let o = "None";
      a === "depth" && (o = "Through");
      const c = [{ label: o, value: null }];
      return t.forEach((H) => {
        const b = H.toString().charAt(0).toUpperCase() + H.toString().slice(1);
        c.push({ label: b, value: H });
      }), c;
    }, ge = () => {
      if (!l.value) return [];
      if (l.value === "banding") return [];
      const t = i.value.machining[l.value];
      return Array.isArray(t) ? t : [t];
    };
    let w = null;
    const _ = () => {
      if (!i.value || !r.value) {
        console.warn("Missing shape or diagram ref for vis initialization");
        return;
      }
      console.log("Initializing vis with diagramRef:", r.value), w = new ot({
        HTMLElement: r.value,
        shape: i.value,
        vueComponent: null
      }), w.init(), w.updateSize(), ae.value = !0;
    }, ve = Fe(() => {
      ae.value && w && w.updateSize();
    }, 10);
    ze(r, () => {
      ve();
    });
    const me = () => {
      F.value = F.value === 0 ? 1 : 0, w.flip();
    }, fe = () => {
      switch (l.value) {
        case "holes":
          xe();
          break;
        case "hingeHoles":
          be();
          break;
        case "corners":
          Se();
          break;
      }
    }, xe = () => {
      i.value.machining.addHole({
        x: y({ v: i.value.longSide }) / 2,
        y: y({ v: i.value.shortSide }) / 2,
        diameter: e.options.holes.defaultDiameter ?? 1,
        depth: e.options.holes.defaultDepth ?? y({ v: i.value.t }) ?? 0,
        face: F.value
      }), w.createHoles();
    }, be = () => {
      i.value.machining.addHingeHole({
        numHoles: 3,
        position: 0,
        diameter: e.options.holes.defaultDiameter ?? 0,
        depth: e.options.holes.defaultDepth ?? 0,
        side: "x1",
        face: F.value,
        distanceFromEdge: e.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: e.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: e.options.hingeHoles.minimumHoleDistance,
        hingeLength: e.options.hingeHoles.defaultHingeLength
      }), w.createHingeHoles();
    }, Se = () => {
      const t = e.options.corners.types?.[0] || "radius", a = e.options.corners.minValue || 5;
      for (let o = 0; o < 4; o++)
        i.value.machining.setCorner({
          index: o,
          type: t,
          size: a
        });
      w.createCorners();
    }, Z = () => {
      i.value.machining.holes.length = 0;
    }, ee = () => {
      i.value.machining.hingeHoles.length = 0;
    }, te = () => {
      i.value.machining.corners.forEach((t) => {
        t.size = null, t.type = null;
      }), i.value.banding.sides.a = !1, i.value.banding.sides.b = !1, i.value.banding.sides.c = !1, i.value.banding.sides.d = !1;
    }, ye = () => {
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
    }, we = (t) => {
      switch (l.value) {
        case "holes":
          return i.value.machining.holes.splice(t, 1);
        case "hingeHoles":
          return i.value.machining.hingeHoles.splice(t, 1);
        case "corners":
          i.value.machining.corners[t].size = null, i.value.machining.corners[t].type = null;
          return;
      }
    }, He = () => {
      switch (l.value) {
        case "holes":
          return Z();
        case "hingeHoles":
          return ee();
        case "corners":
          return te();
      }
    }, se = () => {
      if (T.value = [], !!e.options.banding.enabled) {
        Y();
        for (const t in i.value.banding.sides)
          i.value.banding.sides[t] ? e.options.banding.enableTypes && e.options.banding.types?.length && (i.value.banding.sides[t] || T.value.push({
            index: t,
            message: "Please select a type"
          })) : i.value.banding.sides[t] = "";
        Y(!1);
      }
    }, Ce = (t) => {
      const a = T.value.filter((o) => o.index === t);
      return a.length ? a.map((o) => o.message) : [];
    }, ke = (t) => {
      const a = T.value.filter((c) => c.index === t && c?.fields), o = a.flatMap((c) => c.fields);
      return a.length ? o : [];
    }, Le = (t, a) => {
      const o = ke(t);
      return o?.length ? o.includes(a) : !1;
    }, U = () => {
      h.value?.close(), m("close");
    }, Ae = (t) => t && typeof t.disabled == "function" ? t.disabled : !1, i = Pe(A, "inputShape");
    if (!i.value?.machining)
      throw new Error("Machining component requires a shape with machining initialized");
    const ie = P(!1), ae = P(!1), K = P(!1), F = P(0), l = P(null), T = P([]), X = le({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: S("woodwork.x"),
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: S("woodwork.y"),
          required: !0
        },
        diameter: {
          enabled: !0,
          type: e.options.holes.diameters?.length ? "select" : "unitDependent",
          label: S("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? q(e.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && y({ v: i.value.t }) > 0,
          required: !1,
          type: e.options.holes.depths?.length ? "select" : "unitDependent",
          output: e.options.holes.depths?.length ? "float" : void 0,
          options: e.options.holes.depths?.length ? q(e.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: e.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: S("faces.a"),
              value: 0
            },
            {
              label: S("faces.a"),
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
          label: S("machining.hinge_length"),
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: S("machining.outer_spacing"),
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: S("machining.distance_from_edge"),
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: e.options.holes.enableDepth && typeof i.value.t < "u" && y({ v: i.value.t }) > 0,
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
          label: S("machining.diameter"),
          output: e.options.holes.diameters?.length ? "float" : void 0,
          options: e.options.holes.diameters?.length ? q(e.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: S("machining.num_holes"),
          min: 2
        },
        face: {
          enabled: e.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: S("faces.a"),
              value: 0
            },
            {
              label: S("faces.b"),
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
              label: S("sides.w1"),
              value: "x1"
            },
            {
              label: S("sides.w2"),
              value: "x2"
            },
            {
              label: S("sides.l1"),
              value: "y1"
            },
            {
              label: S("sides.l2"),
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
          label: S("machining.type"),
          type: "select",
          output: "string",
          options: q(e.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: S("machining.size"),
          type: "unitDependent",
          min: () => typeof e.options.corners.minValue < "u" ? y({ v: e.options.corners.minValue, o: e.options }) : 0,
          max: () => typeof e.options.corners.maxValue < "u" ? y({ v: e.options.corners.maxValue, o: e.options }) : y({ v: i.value.shortSide, o: e.options }) / 2
        }
      }
    }), $ = le({
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
      }
    }), De = (t) => {
      const a = h.value;
      if (!a) return;
      const o = a.getBoundingClientRect();
      t.clientX >= o.left && t.clientX <= o.right && t.clientY >= o.top && t.clientY <= o.bottom || U();
    }, B = () => !(!i?.value?.machining || !ie.value || K.value);
    return W(() => i.value?.autoId, () => {
      B() && _();
    }), W(() => i.value?.id, () => {
      B() && _();
    }), W(l, (t) => {
      if (!B()) return;
      if (t === "banding") {
        Y(), se(), Y(!1);
        return;
      }
      if (!t) {
        T.value = [];
        return;
      }
      Y();
      const a = i.value.machining.validate(
        i.value,
        t,
        $?.[t]
      );
      T.value = a?.map((o, c) => ({
        index: c,
        message: o.message || "Validation error",
        fields: o.field || []
      })) || [], Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.machining?.holes, () => {
      if (!B()) return;
      Y();
      const t = i.value.machining.validate(
        i.value,
        "holes",
        $?.holes
      );
      T.value = t?.map((a, o) => ({
        index: o,
        message: a.message || "Validation error",
        fields: a.field || []
      })) || [], w.createHoles(), Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.machining?.hingeHoles, () => {
      if (!B()) return;
      Y();
      const t = i.value.machining.validate(
        i.value,
        "hingeHoles",
        $?.hingeHoles
      );
      T.value = t?.map((a, o) => ({
        index: o,
        message: a.message || "Validation error",
        fields: a.field || []
      })) || [], w.createHingeHoles(), Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.machining?.corners, () => {
      if (!B()) return;
      Y();
      const t = i.value.machining.validate(
        i.value,
        "corners",
        $?.corners
      );
      T.value = t?.map((a, o) => ({
        index: o,
        message: a.message || "Validation error",
        fields: a.field || []
      })) || [], i.value.machining.validate(i.value, "holes"), i.value.machining.validate(i.value, "hingeHoles"), w.createShape(), w.createHoles(), w.createHingeHoles();
      for (const a of i.value.machining.corners)
        i.value.banding && a?.getCorner && (i.value.banding.sides[a.getCorner()] = "");
      w.createBanding(), Y(!1);
    }, { deep: !0, immediate: !0 }), W(() => i?.value?.banding, () => {
      B() && (se(), w.createBanding());
    }, { deep: !0, immediate: !0 }), Be(() => {
      if (h.value?.open || h.value?.showModal(), !i.value || !i.value.l || !i.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      re(() => _()), ie.value = !0;
    }), (t, a) => {
      const o = We("FontAwesomeIcon");
      return u(), g("dialog", {
        id: "machining",
        ref_key: "dialogRef",
        ref: h,
        onCancel: Ge(U, ["prevent"]),
        onClick: De
      }, [
        C("div", ht, [
          R(v) === "development" && Ct ? (u(), g("div", dt, [
            J(R(n), {
              data: [i.value.machining],
              paths: ["shape.machining"]
            }, null, 8, ["data"])
          ])) : k("", !0),
          C("button", {
            class: "c-btn close",
            type: "button",
            onClick: a[0] || (a[0] = (c) => U())
          }, "×"),
          i.value?.name ? (u(), g("div", ct, E(i.value.name), 1)) : k("", !0),
          C("div", ut, E(i.value?.l) + " x " + E(i.value?.w) + " " + E(i.value?.t ? "x " + i.value?.t : null), 1),
          A.options.faces.enabled ? (u(), g("div", pt, [
            C("div", {
              ref: "sides",
              class: M(["sides", { flipped: F.value === 1 }]),
              onClick: me
            }, [...a[6] || (a[6] = [
              C("div", { class: "side-a" }, " A ", -1),
              C("div", { class: "side-b" }, " B ", -1)
            ])], 2),
            a[7] || (a[7] = C("div", { class: "text" }, " [Click to flip] ", -1))
          ])) : k("", !0),
          d.value ? (u(), g("button", {
            key: 3,
            class: "c-btn c-btn--delete",
            type: "button",
            onClick: ue
          }, " Delete all machining ")) : k("", !0),
          C("div", gt, [
            A.options.holes.enabled ? (u(), g("div", {
              key: 0,
              class: M({ selected: l.value === "holes" }),
              onClick: a[1] || (a[1] = (c) => l.value = "holes")
            }, " Holes ", 2)) : k("", !0),
            A.options.hingeHoles.enabled ? (u(), g("div", {
              key: 1,
              class: M({ selected: l.value === "hingeHoles" }),
              onClick: a[2] || (a[2] = (c) => l.value = "hingeHoles")
            }, " Hinge holes ", 2)) : k("", !0),
            A.options.corners.enabled ? (u(), g("div", {
              key: 2,
              class: M({ selected: l.value === "corners" }),
              onClick: a[3] || (a[3] = (c) => l.value = "corners")
            }, " Corners ", 2)) : k("", !0),
            A.options.banding.enabled ? (u(), g("div", {
              key: 3,
              class: M({ selected: l.value === "banding" }),
              onClick: a[4] || (a[4] = (c) => l.value = "banding")
            }, " Banding ", 2)) : k("", !0)
          ]),
          l.value === "holes" || l.value === "hingeHoles" || l.value && l.value !== "banding" ? (u(), g("div", vt, [
            l.value === "holes" || l.value === "hingeHoles" || l.value === "corners" ? (u(), g("button", {
              key: 0,
              class: "c-btn",
              type: "button",
              onClick: fe
            }, " Create ")) : k("", !0),
            l.value && l.value !== "banding" ? (u(), g("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              onClick: He
            }, " Delete all ")) : k("", !0)
          ])) : k("", !0),
          C("div", mt, [
            l.value === "banding" && i.value ? (u(), Me(Oe, {
              key: 0,
              shape: i.value,
              "onUpdate:shape": a[5] || (a[5] = (c) => i.value = c),
              "extra-type": "banding",
              "extra-label": "Banding",
              "extra-keys": V.value,
              labels: A.options.banding.labels,
              "all-options": A.options.banding.options,
              "user-friendly-field-map": R(Re),
              "part-columns": 1,
              "allow-custom-names": !0,
              "custom-names": de.value,
              "used-names": ce.value,
              "enable-pricing": !0,
              pricing: A.options.banding.pricing,
              "get-price": A.getExtrasPrice,
              "format-price": A.formatPrice,
              "get-available-pricing-options": A.getAvailablePricingOptions
            }, null, 8, ["shape", "extra-keys", "labels", "all-options", "user-friendly-field-map", "custom-names", "used-names", "pricing", "get-price", "format-price", "get-available-pricing-options"])) : k("", !0)
          ]),
          l.value !== "banding" && G.value.length ? (u(), g("div", {
            key: 5,
            class: M(["grid-table", l.value]),
            style: oe({ "grid-template-columns": D.value })
          }, [
            C("div", ft, [
              Q() ? (u(), g("div", xt)) : k("", !0),
              (u(!0), g(O, null, j(p.value, (c, H) => Ve((u(), g("div", {
                key: H,
                class: "cell"
              }, E(c.label ?? H), 1)), [
                [qe, c.enabled]
              ])), 128)),
              a[8] || (a[8] = C("div", { class: "cell" }, null, -1))
            ]),
            (u(!0), g(O, null, j(G.value, (c, H) => (u(), g("div", {
              key: H,
              class: "row"
            }, [
              Q() ? (u(), g("div", bt, [
                C("div", St, E(pe(H)), 1)
              ])) : k("", !0),
              (u(!0), g(O, null, j(f.value, (b, N) => (u(), g("div", {
                key: N,
                class: "cell"
              }, [
                J(Ie, {
                  type: p.value[b].type,
                  id: b + "-" + N,
                  warning: Le(H, b),
                  "enable-label": !1,
                  placeholder: p.value[b].label ?? b,
                  disabled: Ae(p.value[b]),
                  value: R(Ne)(c, b),
                  output: p.value[b].output,
                  options: p.value[b].options,
                  "onUpdate:value": (Ye) => R($e)(c, b, Ye)
                }, null, 8, ["type", "id", "warning", "placeholder", "disabled", "value", "output", "options", "onUpdate:value"])
              ]))), 128)),
              C("div", yt, [
                C("button", {
                  class: "c-btn delete",
                  type: "button",
                  onClick: (b) => we(H)
                }, [
                  J(o, { icon: ["fass", "trash"] })
                ], 8, wt)
              ]),
              (u(!0), g(O, null, j(Ce(H), (b, N) => (u(), g("div", {
                key: N,
                class: "group validation",
                style: oe({ "grid-column-end": "span " + x.value })
              }, E(b), 5))), 128))
            ]))), 128))
          ], 6)) : l.value ? k("", !0) : (u(), g("div", Ht, "Please select from the menu above"))
        ]),
        C("div", {
          id: "machining-diagram",
          class: M(["diagram", { flipped: F.value === 1 }]),
          ref_key: "diagramRef",
          ref: r
        }, null, 2)
      ], 544);
    };
  }
});
export {
  Tt as default
};
