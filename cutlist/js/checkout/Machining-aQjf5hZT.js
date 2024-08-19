var L = Object.defineProperty;
var P = (t, e, s) => e in t ? L(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var o = (t, e, s) => P(t, typeof e != "symbol" ? e + "" : e, s);
import { d as y, a as g, v as k, m as W, b as z, e as F, f as M, i as Y, h as O, s as A, j as B, k as G, _ as E, r as _, o as h, l as d, n as c, p as v, t as S, q as b, u as x, F as H, w as T, x as w, y as V, z as U, c as C } from "./main-BApwSDY5.js";
import j from "./InputField-CTOO6hs8.js";
class R {
  constructor({
    HTMLElement: e,
    vueComponent: s,
    shape: p,
    units: a = "decimal",
    decimalPlaces: i = 2
  }) {
    o(this, "HTMLElement");
    o(this, "HTMLElementWidth");
    o(this, "el");
    o(this, "units");
    o(this, "decimalPlaces");
    o(this, "vueComponent");
    o(this, "shape");
    o(this, "h");
    o(this, "w");
    o(this, "shapeL");
    o(this, "shapeW");
    o(this, "padding", 40);
    o(this, "xScale", y.scaleLinear());
    o(this, "yScale", y.scaleLinear());
    o(this, "yScaleFlipped", y.scaleLinear());
    o(this, "measurementScale", y.scaleLinear());
    o(this, "xAxis");
    o(this, "yAxis");
    o(this, "formatDp");
    o(this, "svgCanvas");
    o(this, "currentSide", 0);
    o(this, "bandingStrokeWidth", 2);
    o(this, "shapeGroup");
    o(this, "bandingGroup");
    o(this, "holeGroup");
    o(this, "hingeHoleGroup");
    o(this, "cornerGroup");
    o(this, "legendGroup");
    o(this, "pointGroup");
    o(this, "loaded", !1);
    this.HTMLElement = e, this.units = a, this.decimalPlaces = i, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = s, this.shape = p, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = y.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = y.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
        const e = this.el.append("svg").attr("class", "vis");
        if (e === null) return;
        this.svgCanvas = e;
      }
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x").call(
      y.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ).selectAll("text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y").call(
      y.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ).selectAll("text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createShape(), this.createLegend(), this.createHoles(), this.createHingeHoles(), this.createBanding();
  }
  addPoint(e, s) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(s)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const e = y.path(), s = this.shape.machining.corners, p = [], a = [];
    [0, 1, 2, 3].forEach((m) => {
      const u = s[m];
      u && u.type ? (p.push(u.size ? g(u.size) : 0), a.push(u.type)) : (p.push(0), a.push(null));
    });
    const i = (m, u, n, l, r) => {
      a[m] === "radius" ? e.arcTo(
        this.xScale(u),
        this.getYScale()(n),
        this.xScale(l),
        this.getYScale()(r),
        this.measurementScale(p[m])
      ) : a[m] === "bevel" ? e.lineTo(this.xScale(l), this.getYScale()(r)) : (e.lineTo(this.xScale(u), this.getYScale()(n)), e.lineTo(this.xScale(l), this.getYScale()(r)));
    };
    e.moveTo(this.xScale(0), this.getYScale()(p[0])), i(0, 0, 0, p[0], 0), (a[0] === "bevel" || a[1] === "bevel") && e.lineTo(this.xScale(this.shapeL - p[1]), this.getYScale()(0)), i(1, this.shapeL, 0, this.shapeL, p[1]), (a[1] === "bevel" || a[2] === "bevel") && e.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - p[2])
    ), i(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - p[2],
      this.shapeW
    ), (a[2] === "bevel" || a[3] === "bevel") && e.lineTo(this.xScale(p[3]), this.getYScale()(this.shapeW)), i(3, 0, this.shapeW, 0, this.shapeW - p[3]), e.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", e.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let e;
    e = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "bottom").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1) + "px"
    ), e = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "bottom").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), e.attr(
      "dy",
      e.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "-5px"), this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.getYScale()(0)).attr("dx", -this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 0 ? 1 : -1) + "px"
    ), this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("y", this.getYScale()(0)).attr("dx", this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 0 ? 1 : -1) + "px"
    ), this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("y", this.getYScale()(this.shapeW)).attr("dx", this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 1 ? 1 : -1) + "px"
    ), this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.getYScale()(this.shapeW)).attr("dx", -this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 1 ? 1 : -1) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter(
        (e) => e.shouldShow(this.shape, this.currentSide)
      )
    ).join("circle").attr("class", (e) => e.valid === !1 ? "hole invalid" : "hole valid").attr("cx", (e) => this.xScale(e.x)).attr(
      "cy",
      (e) => this.yScale(e.getYDrawPosition(this.shape, this.currentSide))
    ).attr("r", (e) => this.measurementScale(e.diameter / 2));
  }
  createHingeHoles() {
    this.vueComponent.suppressWatchers(), this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const e = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("g").data(e).join("circle").attr(
      "class",
      (s) => s.valid === !1 ? "hole hinge invalid" : "hole hinge valid"
    ).attr("cx", (s) => this.xScale(s.x)).attr(
      "cy",
      (s) => this.yScale(s.getYDrawPosition(this.shape, this.currentSide))
    ).attr("r", (s) => this.measurementScale(s.diameter / 2)), this.vueComponent.suppressWatchers(!1);
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const e = this.shape.banding, s = -1, p = [];
    for (const [i, m] of Object.entries(e))
      if (m)
        switch (i) {
          case "x1":
            p.push({
              x1: this.padding - s,
              x2: this.padding - s,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            p.push({
              x1: this.w - this.padding + s,
              x2: this.w - this.padding + s,
              y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[2].size ?? 0)
              )
            });
            break;
          case "y1":
            p.push({
              x1: this.padding + this.getCornerBandingSize(0),
              x2: this.w - this.padding - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? s : -s),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
            });
            break;
          case "y2":
            p.push({
              x1: this.padding + this.getCornerBandingSize(3),
              x2: this.w - this.padding - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -s : s),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -s : s)
            });
            break;
        }
    this.bandingGroup.selectAll("g").data(p).join("line").attr("class", "banding").attr("x1", (i) => i.x1).attr("x2", (i) => i.x2).attr("y1", (i) => i.y1).attr("y2", (i) => i.y2).attr("stroke-width", this.bandingStrokeWidth);
    const a = y.path();
    this.shape.machining.corners.forEach((i, m) => {
      if (!i.type) return;
      let u, n, l;
      switch (m) {
        case 0:
          if (!k(e.a) || e.a === !1) return;
          u = {
            x: this.xScale(0) - s,
            y: this.getYScale()(g(i.size ?? 0))
          }, n = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, l = {
            x: this.xScale(g(i.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          };
          break;
        case 1:
          if (!k(e.b) || e.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - g(i.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          }, n = {
            x: this.xScale(this.shapeL) - s,
            y: this.getYScale()(0)
          }, l = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(g(i.size ?? 0))
          };
          break;
        case 2:
          if (!k(e.c) || e.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(this.shapeW - g(i.size ?? 0))
          }, n = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, l = {
            x: this.xScale(this.shapeL - g(i.size ?? 0)) - s,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          };
          break;
        case 3:
          if (!k(e.d) || e.d === !1) return;
          u = {
            x: this.xScale(g(i.size ?? 0)),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          }, n = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, l = {
            x: this.xScale(0) - s,
            y: this.getYScale()(this.shapeW - g(i.size ?? 0)) + s
          };
          break;
        default:
          return;
      }
      if (a.moveTo(u.x, u.y), i.type === "radius")
        switch (a.arcTo(
          n.x,
          n.y,
          l.x,
          l.y,
          this.measurementScale(i.size ?? 0)
        ), m) {
          case 0:
          case 2:
            a.lineTo(l.x + s, l.y);
            break;
          case 1:
          case 3:
            a.lineTo(l.x, l.y - (this.currentSide === 0 ? s : -1));
            break;
        }
      else i.type === "bevel" && a.lineTo(l.x, l.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][m]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", a.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    this.svgCanvas && this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0, this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(e) {
    return this.shape.machining.corners[e].type ? this.measurementScale(this.shape.machining.corners[e].size ?? 0) : 0;
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0), this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let e = this.shape.getShortSide() / this.shape.getLongSide();
    if (this.w = this.HTMLElementWidth, this.w - this.padding * 2 < 0) return;
    let s = window.innerHeight - this.padding * 2 - 20;
    s > 600 && (s = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), e > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (e = 0.3, this.h = this.w * e), this.h > s && (this.h = s, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), console.assert(this.xScale(0) === this.yScaleFlipped(0)), console.assert(this.xScale(100) === this.yScaleFlipped(100)), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
const N = {
  name: "Machining",
  components: { InputField: j },
  props: {
    shape: {
      type: Object,
      default: null
    },
    saw: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: () => ({
        units: "decimal",
        sides: {
          enabled: !0
        },
        //[] set defaults here based on units
        holes: {
          enabled: !0,
          //[x]
          defaultDiameter: 0,
          //[x]
          diameters: [],
          //[x]
          minDiameter: 0,
          //[x]
          maxDiameter: 100,
          //[x]
          enableDepth: !0,
          //[x]
          depths: [],
          //[x]
          defaultDepth: 0,
          //[x]
          minDepth: 2,
          //[x]
          maxDepth: 100
          //[x]
        },
        hingeHoles: {
          enabled: !0,
          //[x]
          // enableDepth: true, //[]
          minimumHoleDistance: 50,
          //[x]
          defaultDistanceFromEdge: 22,
          //[x]
          defaultOuterSpacing: 100,
          //[x]
          defaultHingeLength: 1e3
          //[x]
        },
        shelfHoles: {
          enabled: !1,
          //[]
          diameters: [],
          //[]
          depths: []
          //[]
        },
        corners: {
          //default value set based on part size
          enabled: !0,
          //[x]
          minValue: 5,
          //[x]
          maxValue: 200,
          //[x]
          types: ["bevel", "radius"]
          //[x]
        },
        banding: {
          enabled: !0,
          //[x]
          enableTypes: !0,
          //[x]
          types: ["type a", "type b", "type c"],
          //[x]
          enableCorners: !0
          //[x]
        }
      })
    }
  },
  emits: ["update:shape", "close"],
  data() {
    var t, e, s, p, a, i, m, u, n, l, r, f;
    return {
      loaded: !1,
      vis: W({}),
      visInit: !1,
      disableWatchers: !1,
      listeners: {},
      suppressResizeObserver: !1,
      currentSide: 0,
      currentPrimary: null,
      currentSecondary: null,
      bandingTypes: [],
      //used for manual entry
      visWrapperWidth: 0,
      validationMessages: [],
      fieldDefinitions: {
        machining: {
          holes: {
            x: {
              enabled: !0,
              type: "unitDependent",
              label: "X position"
            },
            y: {
              enabled: !0,
              type: "unitDependent",
              label: "Y position"
            },
            diameter: {
              enabled: !0,
              type: (t = this.options.holes.diameters) != null && t.length ? "select" : "unitDependent",
              label: "Diameter",
              min: () => typeof this.options.holes.minDiameter < "u" ? g(this.options.holes.minDiameter) : 0,
              max: this.getMaxHoleDiameter(),
              outputType: (e = this.options.holes.diameters) != null && e.length ? "float" : void 0,
              options: (s = this.options.holes.diameters) != null && s.length ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && g(this.shape.t) > 0,
              //[]
              type: (p = this.options.holes.depths) != null && p.length ? "select" : "unitDependent",
              min: () => typeof this.options.holes.minDepth < "u" ? g(this.options.holes.minDepth) : 0,
              max: this.getMaxHoleDepth(),
              outputType: (a = this.options.holes.depths) != null && a.length ? "float" : void 0,
              options: (i = this.options.holes.depths) != null && i.length ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            side: {
              enabled: this.options.sides.enabled,
              type: "select",
              outputType: "string",
              options: [
                {
                  label: "A",
                  value: 0
                },
                {
                  label: "B",
                  value: 1
                }
              ]
            }
          },
          hingeHoles: {
            position: {
              enabled: !0,
              type: "unitDependent",
              min: 0
            },
            hingeLength: {
              enabled: !0,
              type: "unitDependent",
              label: "Hinge length",
              min: 0
            },
            //[] separate option for hinges
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && g(this.shape.t) > 0,
              type: (m = this.options.holes.depths) != null && m.length ? "select" : "unitDependent",
              min: () => typeof this.options.holes.minDepth < "u" ? g(this.options.holes.minDepth) : 0,
              max: this.getMaxHoleDepth(),
              outputType: (u = this.options.holes.depths) != null && u.length ? "float" : void 0,
              options: (n = this.options.holes.depths) != null && n.length ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            //[] separate option for hinges
            diameter: {
              enabled: !0,
              type: (l = this.options.holes.diameters) != null && l.length ? "select" : "unitDependent",
              label: "Diameter",
              min: () => typeof this.options.holes.minDiameter < "u" ? g(this.options.holes.minDiameter) : 0,
              max: this.getMaxHoleDiameter(),
              outputType: (r = this.options.holes.diameters) != null && r.length ? "float" : void 0,
              options: (f = this.options.holes.diameters) != null && f.length ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            numHoles: {
              enabled: !0,
              type: "unitDependent",
              min: 2
            },
            side: {
              enabled: this.options.sides.enabled,
              type: "select",
              outputType: "string",
              options: [
                {
                  label: "A",
                  value: 0
                },
                {
                  label: "B",
                  value: 1
                }
              ]
            },
            edge: {
              enabled: !0,
              type: "select",
              outputType: "string",
              options: [
                {
                  label: "W1",
                  value: "x1"
                },
                {
                  label: "W2",
                  value: "x2"
                },
                {
                  label: "L1",
                  value: "y1"
                },
                {
                  label: "L2",
                  value: "y2"
                }
              ]
            }
          },
          shelfHoles: {
            x: {
              enabled: !0,
              type: "unitDependent"
            },
            y: {
              enabled: !0,
              type: "unitDependent"
            },
            depth: {
              enabled: !0,
              type: "unitDependent"
            }
          },
          corners: {
            type: {
              enabled: !0,
              label: "Type",
              type: "select",
              outputType: "string",
              options: this.getSelectOptions(this.options.corners.types)
            },
            size: {
              enabled: !0,
              label: "Size",
              type: "unitDependent",
              min: () => typeof this.options.corners.minValue < "u" ? g(this.options.corners.minValue) : 0,
              max: () => typeof this.options.corners.maxValue < "u" ? g(this.options.corners.maxValue) : g(this.shape.getShortSide() / 2)
            }
          }
        },
        banding: {
          a: {
            enabled: this.options.banding.enableCorners,
            type: "checkbox",
            label: "A",
            disabled: () => !this.shape.machining.corners[0].size
          },
          b: {
            enabled: this.options.banding.enableCorners,
            type: "checkbox",
            label: "B",
            disabled: () => !this.shape.machining.corners[1].size
          },
          c: {
            enabled: this.options.banding.enableCorners,
            type: "checkbox",
            label: "C",
            disabled: () => !this.shape.machining.corners[2].size
          },
          d: {
            enabled: this.options.banding.enableCorners,
            type: "checkbox",
            label: "D",
            disabled: () => !this.shape.machining.corners[3].size
          },
          y1: {
            enabled: !0,
            type: "checkbox",
            label: "L1"
          },
          y2: {
            enabled: !0,
            type: "checkbox",
            label: "L2"
          },
          x1: {
            enabled: !0,
            type: "checkbox",
            label: "W1"
          },
          x2: {
            enabled: !0,
            type: "checkbox",
            label: "W2"
          }
        },
        bandingType: {
          a: {
            enabled: this.options.banding.enableCorners,
            type: "select",
            label: "A",
            options: this.getSelectOptions(this.options.banding.types),
            disabled: () => !this.shape.machining.corners[0].size
          },
          b: {
            enabled: this.options.banding.enableCorners,
            type: "select",
            label: "B",
            options: this.getSelectOptions(this.options.banding.types),
            disabled: () => !this.shape.machining.corners[1].size
          },
          c: {
            enabled: this.options.banding.enableCorners,
            type: "select",
            label: "C",
            options: this.getSelectOptions(this.options.banding.types),
            disabled: () => !this.shape.machining.corners[2].size
          },
          d: {
            enabled: this.options.banding.enableCorners,
            type: "select",
            label: "D",
            options: this.getSelectOptions(this.options.banding.types),
            disabled: () => !this.shape.machining.corners[3].size
          },
          y1: {
            enabled: !0,
            type: "select",
            label: "L1",
            options: this.getSelectOptions(this.options.banding.types)
          },
          y2: {
            enabled: !0,
            type: "select",
            label: "L2",
            options: this.getSelectOptions(this.options.banding.types)
          },
          x1: {
            enabled: !0,
            type: "select",
            label: "W1",
            options: this.getSelectOptions(this.options.banding.types)
          },
          x2: {
            enabled: !0,
            type: "select",
            label: "W2",
            options: this.getSelectOptions(this.options.banding.types)
          }
        }
      }
    };
  },
  computed: {
    units() {
      return z.call(this, ["units"]);
    },
    localShape() {
      return this.shape;
    },
    columns() {
      var e;
      if (this.currentPrimary === "banding")
        return this.options.banding.enableTypes ? 4 : 3;
      if (!((e = this.currentFieldKeys) != null && e.length)) return 0;
      let t = Object.values(this.currentFields).filter((s) => s.enabled).length;
      return t += 1, this.currentPrimary === "machining" && (t += 1), t;
    },
    columnsStyle() {
      if (!this.currentFieldKeys.length) return;
      const t = {
        id: "34px",
        del: "30px"
      };
      if (this.currentPrimary === "banding")
        return [
          t.id,
          "1fr",
          this.options.banding.enableTypes ? "1fr" : void 0,
          t.del
        ].join(" ");
      const e = [];
      return this.currentFieldKeys.forEach((p) => {
        const a = this.currentFields[p];
        a.enabled && e.push(a.w ?? "1fr");
      }), this.currentPrimary === "machining" && e.unshift(t.id), e.push(t.del), e.join(" ");
    },
    currentFields() {
      return this.currentPrimary && this.currentSecondary ? this.fieldDefinitions[this.currentPrimary][this.currentSecondary] : this.currentPrimary ? this.fieldDefinitions[this.currentPrimary] : null;
    },
    /**
    	 * @remarks these form the columns & the table headings
    	 */
    currentFieldKeys() {
      return this.currentPrimary && this.currentSecondary ? Object.keys(this.fieldDefinitions[this.currentPrimary][this.currentSecondary]).filter((t) => this.fieldDefinitions[this.currentPrimary][this.currentSecondary][t].enabled) : this.currentPrimary ? Object.keys(this.fieldDefinitions[this.currentPrimary]).filter((t) => this.fieldDefinitions[this.currentPrimary][t].enabled) : [];
    },
    currentShapeFieldsType() {
      if (!this.currentPrimary || this.currentPrimary === "machining" && !this.currentSecondary)
        return null;
      const t = this.getCurrentShapeFields();
      return Array.isArray(t) ? "array" : "object";
    },
    /**
    	 * @remarks these are the individual line items in the table
    	 */
    currentShapeFields() {
      return this.currentPrimary ? this.currentPrimary === "machining" && !this.currentSecondary ? [] : this.getCurrentShapeFields() : [];
    }
  },
  watch: {
    "shape.listId": {
      handler() {
        this.initVis();
      },
      immediate: !1
    },
    "shape.id": {
      handler() {
        this.initVis();
      },
      immediate: !1
    },
    "shape.machining.holes": {
      handler() {
        this.loaded && (this.disableWatchers || (this.validationMessages = this.shape.machining.validate(
          this.shape,
          "holes"
        ), this.vis.createHoles()));
      },
      deep: !0,
      immediate: !1
    },
    "shape.machining.hingeHoles": {
      handler() {
        this.loaded && (this.disableWatchers || (this.suppressWatchers(), this.shape.machining.updateHingeHoles(this.shape), this.validationMessages = this.shape.machining.validate(
          this.shape,
          "hingeHoles"
        ), this.vis.createHingeHoles(), this.suppressWatchers(!1)));
      },
      deep: !0,
      immediate: !1
    },
    "shape.machining.corners": {
      handler() {
        this.loaded && (this.disableWatchers || (this.validationMessages = this.shape.machining.validate(
          this.shape,
          "corners"
        ), this.shape.machining.validate(this.shape, "holes"), this.shape.machining.validate(this.shape, "hingeHoles"), this.vis.createShape(), this.vis.createHoles(), this.vis.createHingeHoles(), this.vis.createBanding()));
      },
      deep: !0,
      immediate: !1
    },
    currentPrimary: {
      handler(t) {
        t === "banding" && (this.suppressWatchers(), this.validateBanding(), this.suppressWatchers(!1));
      },
      deep: !0,
      immediate: !0
    },
    currentSecondary: {
      handler(t) {
        if (this.currentPrimary !== "banding") {
          if (!t) return this.validationMessages = [];
          this.suppressWatchers(), this.validationMessages = this.shape.machining.validate(
            this.shape,
            t
          ), this.suppressWatchers(!1);
        }
      },
      deep: !0,
      immediate: !0
    },
    "shape.banding": {
      handler() {
        this.validateBanding(), this.vis.createBanding();
      },
      deep: !0,
      immediate: !1
    },
    "shape.bandingType": {
      handler() {
        this.validateBanding(), this.vis.createBanding();
      },
      deep: !0,
      immediate: !1
    }
  },
  mounted() {
    if (document.getElementById("machining").requestFullscreen(), !this.shape || !this.shape.l || !this.shape.w)
      return console.warn("no part provided to machining");
    this.$nextTick(() => this.initVis());
    const t = document.querySelector("#smartcut-app #machining .diagram");
    if (this.visWrapperResizeObserver || (this.visWrapperResizeObserver = new ResizeObserver((e) => {
      clearTimeout(this == null ? void 0 : this.visWrapperResizeTimer), this.visInit && (this.visWrapperResizeTimer = setTimeout(() => {
        if (this.suppressResizeObserver) {
          this.suppressResizeObserver = !1;
          return;
        }
        e[0].contentRect.width !== this.visWrapperWidth && (this.visWrapperWidth = e[0].contentRect.width, this.visWrapperWidth && this.vis.updateSize());
      }, 10));
    }).observe(t)), this.bandingTypes = this.options.banding.types ?? [], Array.isArray(this.bandingTypes) && this.bandingTypes.length)
      for (const e of Object.keys(this.shape.bandingType))
        this.shape.bandingType[e] && !this.bandingTypes.includes(this.shape.bandingType[e]) && this.bandingTypes.push(this.shape.bandingType[e]);
    this.loaded = !0;
  },
  methods: {
    suppressWatchers(t = !0) {
      t ? this.disableWatchers = t : this.$nextTick(() => {
        this.disableWatchers = !1;
      });
    },
    getIndex(t) {
      if (this.currentSecondary === "corners")
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
    },
    shouldShowId() {
      return this.currentPrimary !== "banding";
    },
    getMinValue(t) {
      return F(t);
    },
    getMaxValue(t) {
      return M(t);
    },
    getMaxHoleDepth() {
      const t = typeof this.shape.t < "u" ? g(this.shape.t) : null, e = typeof this.options.holes.maxDepth < "u" ? g(this.options.holes.maxDepth) : null;
      return e === null ? t || null : t ? e < t ? e : t : null;
    },
    getMaxHoleDiameter() {
      const t = typeof this.options.holes.maxDiameter < "u" ? g(this.options.holes.maxDiameter) : null;
      return t !== null ? t < this.shape.getLongSide() ? t : this.shape.getLongSide() : null;
    },
    getSelectOptions(t, e = null) {
      if (!(t != null && t.length)) return [];
      let s = "None";
      switch (e) {
        case "depth":
          s = "Through";
          break;
      }
      const p = [
        {
          label: s,
          value: null
        }
      ];
      return t.forEach((a) => {
        const m = {
          label: a.charAt(0).toUpperCase() + a.slice(1),
          value: a
        };
        p.push(m);
      }), p;
    },
    /* getCornerTypeOptions(): { key: string; value: string }[]
    			   {
    			   const options = [
    			   {
    			   key: 'None',
    			   value: null
    			   }
    			   ];
    
    			   ( this.options.corners.types as string[] ).forEach( ( type ) =>
    			   {
    			   const key = type.charAt( 0 ).toUpperCase() + type.slice( 1 );
    
    			   options.push( {
    			   key,
    			   value: type
    			   } );
    			   } );
    
    			   return options;
    			   }, */
    /**
    	 * @remarks these are the individual line items in the table
    	 * @remarks always returns an array
    	 */
    getCurrentShapeFields() {
      let t = null;
      return this.currentPrimary && this.currentSecondary ? t = this.localShape[this.currentPrimary][this.currentSecondary] : this.currentPrimary && (t = this.localShape[this.currentPrimary]), Array.isArray(t) ? t : [t];
    },
    initVis() {
      this.shape && (this.vis = W(new R({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: this.shape,
        vueComponent: this
      })), this.vis.init(), this.visInit = !0, setTimeout(() => {
        this.vis.updateSize();
      }, 100));
    },
    isFieldEnabled(t, e) {
      return Y(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    isFieldPresent(t, e) {
      return O(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    setFieldEnabled(t, e, s = !0) {
      return A(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e,
        s
      );
    },
    close() {
      this.$emit("close");
    },
    flip() {
      this.currentSide = this.currentSide === 0 ? 1 : 0, this.vis.flip();
    },
    create() {
      switch (this.currentSecondary) {
        case "holes":
          this.createHole();
          break;
        case "hingeHoles":
          this.createHingeHoles();
          break;
      }
    },
    createHole() {
      this.localShape.machining.createHole(
        g(this.shape.l) / 2,
        g(this.shape.w) / 2,
        this.options.holes.defaultDiameter ?? 0,
        this.options.holes.defaultDepth ?? 0,
        this.currentSide
      ), this.vis.createHoles();
    },
    //this creates hinge holes with the defaults set in options
    createHingeHoles() {
      this.localShape.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: this.options.holes.defaultDiameter ?? 0,
        depth: this.options.holes.defaultDepth ?? 0,
        edge: "x1",
        side: this.currentSide,
        distanceFromEdge: this.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: this.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: this.options.hingeHoles.minimumHoleDistance,
        hingeLength: this.options.hingeHoles.defaultHingeLength
      }), this.vis.createHingeHoles();
    },
    deleteHingeHoles() {
      this.localShape.machining.hingeHoles.length = 0;
    },
    deleteHoles() {
      this.localShape.machining.holes.length = 0;
    },
    deleteCorners() {
      this.localShape.machining.corners.forEach((t) => {
        t.size = null, t.type = null;
      }), this.localShape.banding.a = !1, this.localShape.banding.b = !1, this.localShape.banding.c = !1, this.localShape.banding.d = !1;
    },
    deleteBanding() {
      this.localShape.banding = {
        a: !1,
        b: !1,
        c: !1,
        d: !1,
        y1: !1,
        y2: !1,
        x1: !1,
        x2: !1
      }, this.localShape.bandingType = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    },
    remove(t) {
      switch (this.currentSecondary) {
        case "holes":
          return this.localShape.machining.holes.splice(
            t,
            1
          );
        case "hingeHoles":
          return this.localShape.machining.hingeHoles.splice(
            t,
            1
          );
        case "corners":
          this.localShape.machining.corners[t].size = null, this.localShape.machining.corners[t].type = null;
          return;
      }
      switch (this.currentPrimary) {
        case "banding":
          this.localShape.banding[t] = !1, this.localShape.bandingType[t] = "";
          return;
      }
    },
    removeAll() {
      switch (this.currentSecondary) {
        case "holes":
          return this.deleteHoles();
        case "hingeHoles":
          return this.deleteHingeHoles();
        case "corners":
          return this.deleteCorners();
      }
      switch (this.currentPrimary) {
        case "banding":
          return this.deleteBanding();
      }
    },
    getShapeId() {
      if (this.shape.constructor.name === "InputShape")
        return this.shape.listId;
      if (this.shape.constructor.name === "Shape")
        return this.shape.id;
    },
    getInputMode(t) {
      return B(t.type, this.units);
    },
    getInputType(t) {
      return G(t.type, this.units);
    },
    isFieldDisabled(t, e) {
      return typeof t.disabled == "function" ? t.disabled(e) : !1;
    },
    validateBanding() {
      var t;
      if (this.validationMessages = [], !!this.options.banding.enabled) {
        this.suppressWatchers();
        for (const e in this.shape.banding)
          this.localShape.banding[e] ? this.options.banding.enableTypes && ((t = this.options.banding.types) != null && t.length) && (this.localShape.bandingType[e] || this.validationMessages.push({
            index: e,
            message: "Please select a type"
          })) : this.localShape.bandingType[e] = "";
        this.suppressWatchers(!1);
      }
    },
    getValidationMessages(t) {
      const e = this.validationMessages.filter((s) => s.index === t);
      return e.length ? e.map((s) => s.message) : [];
    }
  }
}, I = { id: "machining" }, q = { class: "inputs" }, X = {
  key: 0,
  class: "shape-name"
}, J = { class: "shape-dimensions" }, Q = {
  key: 1,
  class: "sides-wrapper"
}, Z = /* @__PURE__ */ c("div", { class: "side-a" }, " A ", -1), K = /* @__PURE__ */ c("div", { class: "side-b" }, " B ", -1), $ = [
  Z,
  K
], ee = /* @__PURE__ */ c("div", { class: "text" }, " [Click to flip] ", -1), te = { class: "menu" }, se = { class: "button-wrapper" }, ie = {
  key: 2,
  class: "grid-table banding-types"
}, ae = /* @__PURE__ */ c("div", { class: "row table-heading" }, [
  /* @__PURE__ */ c("div", { class: "cell" }, " Type definition "),
  /* @__PURE__ */ c("div", { class: "cell" })
], -1), ne = { class: "cell" }, le = ["onClick"], re = { class: "remove" }, he = {
  key: 3,
  class: "grid-table banding"
}, de = /* @__PURE__ */ c("div", { class: "cell id" }, null, -1), oe = /* @__PURE__ */ c("div", { class: "cell" }, " Add ", -1), ce = {
  key: 0,
  class: "cell"
}, pe = /* @__PURE__ */ c("div", { class: "cell del" }, null, -1), ue = { class: "cell" }, ge = { class: "id" }, me = { class: "cell" }, be = {
  key: 0,
  class: "cell"
}, ye = ["onClick"], fe = { class: "remove" }, Se = {
  key: 0,
  class: "id"
}, ve = /* @__PURE__ */ c("div", { class: "del" }, null, -1), xe = {
  key: 0,
  class: "cell"
}, He = { class: "id" }, Te = ["onClick"], we = { class: "remove" }, De = { key: 5 }, ke = { key: 6 };
function Ce(t, e, s, p, a, i) {
  const m = _("font-awesome-icon"), u = _("InputField");
  return h(), d("div", I, [
    c("div", null, [
      c("div", q, [
        c("button", {
          type: "button",
          class: "close",
          onClick: e[0] || (e[0] = (n) => i.close())
        }, [
          v(m, { icon: ["fass", "xmark"] })
        ]),
        s.shape.name ? (h(), d("div", X, S(s.shape.name), 1)) : b("", !0),
        c("div", J, S(s.shape.l) + " x " + S(s.shape.w) + " " + S(s.shape.t ? "x " + s.shape.t : null), 1),
        s.options.sides.enabled ? (h(), d("div", Q, [
          c("div", {
            ref: "sides",
            class: x(["sides", { flipped: a.currentSide === 1 }]),
            onClick: e[1] || (e[1] = (n) => i.flip())
          }, $, 2),
          ee
        ])) : b("", !0),
        c("div", te, [
          s.options.holes.enabled ? (h(), d("div", {
            key: 0,
            class: x({ selected: a.currentSecondary === "holes" }),
            onClick: e[2] || (e[2] = (n) => {
              a.currentPrimary = "machining", a.currentSecondary = "holes";
            })
          }, " Holes ", 2)) : b("", !0),
          s.options.hingeHoles.enabled ? (h(), d("div", {
            key: 1,
            class: x({ selected: a.currentSecondary === "hingeHoles" }),
            onClick: e[3] || (e[3] = (n) => {
              a.currentPrimary = "machining", a.currentSecondary = "hingeHoles";
            })
          }, " Hinge holes ", 2)) : b("", !0),
          s.options.corners.enabled ? (h(), d("div", {
            key: 2,
            class: x({ selected: a.currentSecondary === "corners" }),
            onClick: e[4] || (e[4] = (n) => {
              a.currentPrimary = "machining", a.currentSecondary = "corners";
            })
          }, " Corners ", 2)) : b("", !0),
          s.options.banding.enabled ? (h(), d("div", {
            key: 3,
            class: x({ selected: a.currentPrimary === "banding" }),
            onClick: e[5] || (e[5] = (n) => {
              a.currentPrimary = "banding", a.currentSecondary = null;
            })
          }, " Banding ", 2)) : b("", !0)
        ]),
        c("div", se, [
          a.currentSecondary === "holes" || a.currentSecondary === "hingeHoles" ? (h(), d("button", {
            key: 0,
            type: "button",
            onClick: e[6] || (e[6] = (n) => i.create())
          }, " Create ")) : b("", !0),
          a.currentPrimary ? (h(), d("button", {
            key: 1,
            type: "button",
            onClick: e[7] || (e[7] = (n) => i.removeAll())
          }, " Delete all ")) : b("", !0),
          a.currentPrimary === "banding" && s.options.banding.enableTypes && s.options.banding.types === null ? (h(), d("button", {
            key: 2,
            type: "button",
            onClick: e[8] || (e[8] = (n) => a.bandingTypes.push(""))
          }, " Add banding type ")) : b("", !0)
        ]),
        a.currentPrimary === "banding" && s.options.banding.enableTypes && s.options.banding.types === null ? (h(), d("div", ie, [
          ae,
          (h(!0), d(H, null, T(a.bandingTypes, (n, l) => (h(), d("div", {
            key: l,
            class: "row"
          }, [
            c("div", ne, [
              v(u, {
                id: n + "-" + l,
                type: "text",
                "enable-label": !1,
                value: a.bandingTypes[l],
                onUpdate: (r) => a.bandingTypes[l] = r
              }, null, 8, ["id", "value", "onUpdate"])
            ]),
            c("div", {
              class: "cell",
              onClick: (r) => a.bandingTypes.splice(l, 1)
            }, [
              c("div", re, [
                v(m, { icon: ["fass", "trash"] })
              ])
            ], 8, le)
          ]))), 128))
        ])) : b("", !0),
        a.currentPrimary === "banding" ? (h(), d("div", he, [
          c("div", {
            class: "row table-heading",
            style: w({ "grid-template-columns": i.columnsStyle })
          }, [
            de,
            oe,
            s.options.banding.enableTypes ? (h(), d("div", ce, " Type ")) : b("", !0),
            pe
          ], 4),
          (h(!0), d(H, null, T(i.currentFieldKeys, (n) => (h(), d("div", {
            key: n,
            class: "row",
            style: w({ "grid-template-columns": i.columnsStyle })
          }, [
            c("div", ue, [
              c("div", ge, S(i.currentFields[n].label.toUpperCase()), 1)
            ]),
            c("div", me, [
              v(u, {
                id: "banding-" + n,
                type: "checkbox",
                "enable-label": !1,
                disabled: i.isFieldDisabled(i.currentFields[n], void 0),
                value: i.localShape.banding[n],
                onUpdate: (l) => i.localShape.banding[n] = l
              }, null, 8, ["id", "disabled", "value", "onUpdate"])
            ]),
            s.options.banding.enableTypes ? (h(), d("div", be, [
              v(u, {
                id: "banding-type-" + n,
                type: "select",
                "enable-label": !1,
                disabled: i.isFieldDisabled(i.currentFields[n], void 0),
                options: a.bandingTypes.map((l) => ({
                  label: l.toUpperCase(),
                  value: l,
                  disabled: i.isFieldDisabled(
                    i.currentFields[n],
                    void 0
                  )
                })),
                value: i.localShape.bandingType[n],
                onUpdate: (l) => i.localShape.bandingType[n] = l
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate"])
            ])) : b("", !0),
            c("div", {
              class: "cell",
              onClick: (l) => i.remove(n)
            }, [
              c("div", fe, [
                v(m, { icon: ["fass", "trash"] })
              ])
            ], 8, ye),
            (h(!0), d(H, null, T(i.getValidationMessages(
              n
            ), (l, r) => (h(), d("div", {
              key: r,
              class: "group validation",
              style: w({
                "grid-column-end": "span " + i.columns
              })
            }, S(l), 5))), 128))
          ], 4))), 128))
        ])) : b("", !0),
        a.currentPrimary !== "banding" && i.currentShapeFields.length ? (h(), d("div", {
          key: 4,
          class: x(["grid-table", a.currentPrimary])
        }, [
          c("div", {
            class: "row table-heading",
            style: w({ "grid-template-columns": i.columnsStyle })
          }, [
            i.shouldShowId() ? (h(), d("div", Se)) : b("", !0),
            (h(!0), d(H, null, T(i.currentFields, (n, l, r) => V((h(), d("div", {
              key: r,
              class: "cell"
            }, S(n.label ?? l), 1)), [
              [U, n.enabled]
            ])), 128)),
            ve
          ], 4),
          (h(!0), d(H, null, T(i.currentShapeFields, (n, l) => (h(), d("div", {
            key: l,
            class: "row",
            style: w({ "grid-template-columns": i.columnsStyle })
          }, [
            i.shouldShowId() ? (h(), d("div", xe, [
              c("div", He, S(i.getIndex(l)), 1)
            ])) : b("", !0),
            (h(!0), d(H, null, T(i.currentFieldKeys, (r, f) => (h(), d("div", {
              key: f,
              class: "cell"
            }, [
              i.currentFields[r].type !== "select" && i.currentFields[r].type !== "checkbox" ? (h(), C(u, {
                key: 0,
                id: r + "-" + f,
                type: "unitDependent",
                "enable-label": !1,
                placeholder: i.currentFields[r].label ?? r,
                disabled: i.isFieldDisabled(i.currentFields[r], l),
                value: n[r],
                min: i.getMinValue(i.currentFields[r]),
                max: i.getMaxValue(i.currentFields[r]),
                units: i.units,
                onUpdate: (D) => n[r] = D
              }, null, 8, ["id", "placeholder", "disabled", "value", "min", "max", "units", "onUpdate"])) : i.currentFields[r].type === "checkbox" ? (h(), C(u, {
                key: 1,
                id: r + "-" + f,
                type: "checkbox",
                "enable-label": !1,
                disabled: i.isFieldDisabled(i.currentFields[r], l),
                value: n[r],
                onUpdate: (D) => n[r] = D
              }, null, 8, ["id", "disabled", "value", "onUpdate"])) : i.currentFields[r].type === "select" ? (h(), C(u, {
                key: 2,
                id: r + "-" + f,
                type: "select",
                "enable-label": !1,
                disabled: i.isFieldDisabled(i.currentFields[r], l),
                value: n[r],
                options: i.currentFields[r].options,
                onUpdate: (D) => n[r] = D
              }, null, 8, ["id", "disabled", "value", "options", "onUpdate"])) : b("", !0)
            ]))), 128)),
            c("div", {
              class: "cell",
              onClick: (r) => i.remove(l)
            }, [
              c("div", we, [
                v(m, { icon: ["fass", "trash"] })
              ])
            ], 8, Te),
            (h(!0), d(H, null, T(i.getValidationMessages(
              l
            ), (r, f) => (h(), d("div", {
              key: f,
              class: "group validation",
              style: w({
                "grid-column-end": "span " + i.columns
              })
            }, S(r), 5))), 128))
          ], 4))), 128))
        ], 2)) : a.currentSecondary ? (h(), d("div", De, " Nothing yet... ")) : a.currentPrimary !== "banding" ? (h(), d("div", ke, " Please select from the menu above ")) : b("", !0)
      ]),
      c("div", {
        id: "machining-diagram",
        class: x(["diagram", { flipped: a.currentSide === 1 }])
      }, null, 2)
    ])
  ]);
}
const Pe = /* @__PURE__ */ E(N, [["render", Ce]]);
export {
  Pe as default
};
