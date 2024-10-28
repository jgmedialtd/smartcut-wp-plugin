var z = Object.defineProperty;
var P = (e, t, s) => t in e ? z(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var p = (e, t, s) => P(e, typeof t != "symbol" ? t + "" : t, s);
import { i as y, j as b, v as W, k as B, I as A, l as C, p as Y, q as O, s as L, u as E, w as V, x as G, y as M, z as I, A as $, B as U, _ as R, r as F, o as r, e as d, h as c, D as x, t as f, d as m, n as v, E as T, F as H, f as w, G as j, H as N, b as D } from "./main-BHS4DK-s.js";
class q {
  constructor({
    HTMLElement: t,
    vueComponent: s,
    shape: i,
    units: h = "decimal",
    decimalPlaces: o = 2
  }) {
    p(this, "HTMLElement");
    p(this, "HTMLElementWidth");
    p(this, "el");
    p(this, "units");
    p(this, "decimalPlaces");
    p(this, "vueComponent");
    p(this, "shape");
    p(this, "h");
    p(this, "w");
    p(this, "shapeL");
    p(this, "shapeW");
    p(this, "padding", 40);
    p(this, "xScale", y.scaleLinear());
    p(this, "yScale", y.scaleLinear());
    p(this, "yScaleFlipped", y.scaleLinear());
    p(this, "measurementScale", y.scaleLinear());
    p(this, "xAxis");
    p(this, "yAxis");
    p(this, "formatDp");
    p(this, "svgCanvas");
    p(this, "currentSide", 0);
    p(this, "bandingStrokeWidth", 2);
    p(this, "shapeGroup");
    p(this, "bandingGroup");
    p(this, "holeGroup");
    p(this, "hingeHoleGroup");
    p(this, "cornerGroup");
    p(this, "legendGroup");
    p(this, "pointGroup");
    p(this, "loaded", !1);
    this.HTMLElement = t, this.units = h, this.decimalPlaces = o, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = s, this.shape = i, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = y.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = y.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
        const t = this.el.append("svg").attr("class", "vis");
        if (t === null) return;
        this.svgCanvas = t;
      }
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x"), this.xAxis.call(
      y.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      y.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, s) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(s)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = y.path(), s = this.shape.machining.corners, i = [], h = [];
    [0, 1, 2, 3].forEach((g) => {
      const u = s[g];
      u && u.type ? (i.push(u.size ? b(u.size) : 0), h.push(u.type)) : (i.push(0), h.push(null));
    });
    const o = (g, u, a, n, l) => {
      h[g] === "radius" ? t.arcTo(
        this.xScale(u),
        this.getYScale()(a),
        this.xScale(n),
        this.getYScale()(l),
        this.measurementScale(i[g])
      ) : h[g] === "bevel" ? t.lineTo(this.xScale(n), this.getYScale()(l)) : (t.lineTo(this.xScale(u), this.getYScale()(a)), t.lineTo(this.xScale(n), this.getYScale()(l)));
    };
    t.moveTo(this.xScale(0), this.getYScale()(i[0])), o(0, 0, 0, i[0], 0), (h[0] === "bevel" || h[1] === "bevel") && t.lineTo(this.xScale(this.shapeL - i[1]), this.getYScale()(0)), o(1, this.shapeL, 0, this.shapeL, i[1]), (h[1] === "bevel" || h[2] === "bevel") && t.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - i[2])
    ), o(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - i[2],
      this.shapeW
    ), (h[2] === "bevel" || h[3] === "bevel") && t.lineTo(this.xScale(i[3]), this.getYScale()(this.shapeW)), o(3, 0, this.shapeW, 0, this.shapeW - i[3]), t.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", t.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let t;
    t = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "bottom").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1) + "px"
    ), t = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "bottom").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), t = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "bottom").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1) + "px"
    ), t = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1) + "px"
    ), t = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1) + "px"
    ), t = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter((t) => t.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (t) => t.valid === !1).classed("partial", (t) => !t.isThroughShape(this.shape)).attr("cx", (t) => this.xScale(t.x)).attr("cy", (t) => {
      const s = t.getYDrawPosition(this.shape, this.currentSide);
      return this.yScale(s);
    }).attr("r", (t) => this.measurementScale(t.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const s = this.shape.machining.getAllHingeHoles(this.shape).filter((i) => i.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("g").data(s).join("circle").attr("class", "hole").classed("invalid", (i) => i.valid === !1).classed("partial", (i) => !i.isThroughShape(this.shape)).attr("cx", (i) => this.xScale(i.x)).attr("cy", (i) => this.yScale(i.getYDrawPosition(this.shape, this.currentSide))).attr("r", (i) => this.measurementScale(i.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const t = this.shape.banding, s = -1, i = [];
    for (const [o, g] of Object.entries(t))
      if (g)
        switch (o) {
          case "x1":
            i.push({
              x1: this.padding - s,
              x2: this.padding - s,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            i.push({
              x1: this.w - this.padding + s,
              x2: this.w - this.padding + s,
              y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[2].size ?? 0)
              )
            });
            break;
          case "y1":
            i.push({
              x1: this.padding + this.getCornerBandingSize(0),
              x2: this.w - this.padding - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? s : -s),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
            });
            break;
          case "y2":
            i.push({
              x1: this.padding + this.getCornerBandingSize(3),
              x2: this.w - this.padding - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -s : s),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -s : s)
            });
            break;
        }
    this.bandingGroup.selectAll("g").data(i).join("line").attr("class", "banding").attr("x1", (o) => o.x1).attr("x2", (o) => o.x2).attr("y1", (o) => o.y1).attr("y2", (o) => o.y2).attr("stroke-width", this.bandingStrokeWidth);
    const h = y.path();
    this.shape.machining.corners.forEach((o, g) => {
      if (!o.type) return;
      let u, a, n;
      switch (g) {
        case 0:
          if (!W(t.a) || t.a === !1) return;
          u = {
            x: this.xScale(0) - s,
            y: this.getYScale()(b(o.size ?? 0))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, n = {
            x: this.xScale(b(o.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          };
          break;
        case 1:
          if (!W(t.b) || t.b === !1) return;
          u = {
            x: this.xScale(this.shapeL - b(o.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          }, a = {
            x: this.xScale(this.shapeL) - s,
            y: this.getYScale()(0)
          }, n = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(b(o.size ?? 0))
          };
          break;
        case 2:
          if (!W(t.c) || t.c === !1) return;
          u = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(this.shapeW - b(o.size ?? 0))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, n = {
            x: this.xScale(this.shapeL - b(o.size ?? 0)) - s,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          };
          break;
        case 3:
          if (!W(t.d) || t.d === !1) return;
          u = {
            x: this.xScale(b(o.size ?? 0)),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, n = {
            x: this.xScale(0) - s,
            y: this.getYScale()(this.shapeW - b(o.size ?? 0)) + s
          };
          break;
        default:
          return;
      }
      if (h.moveTo(u.x, u.y), o.type === "radius")
        switch (h.arcTo(
          a.x,
          a.y,
          n.x,
          n.y,
          this.measurementScale(o.size ?? 0)
        ), g) {
          case 0:
          case 2:
            h.lineTo(n.x + s, n.y);
            break;
          case 1:
          case 3:
            h.lineTo(n.x, n.y - (this.currentSide === 0 ? s : -1));
            break;
        }
      else o.type === "bevel" && h.lineTo(n.x, n.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][g]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", h.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    this.svgCanvas && this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0, this.yAxis.call(
      y.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dx", "5px"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(t) {
    return this.shape.machining.corners[t].type ? this.measurementScale(this.shape.machining.corners[t].size ?? 0) : 0;
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0), this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let t = this.shape.getShortSide() / this.shape.getLongSide();
    if (this.w = this.HTMLElementWidth, this.w - this.padding * 2 < 0) return;
    let s = window.innerHeight - this.padding * 2 - 20;
    s > 600 && (s = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), t > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (t = 0.3, this.h = this.w * t), this.h > s && (this.h = s, this.w = this.h / t, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), console.assert(this.xScale(0) === this.yScaleFlipped(0)), console.assert(this.xScale(100) === this.yScaleFlipped(100)), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
const X = B({
  name: "Machining",
  components: { InputField: A },
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
          defaultDiameter: 10,
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
          minDepth: 0
          //[x]
          // maxDepth: 100 //[x]
        },
        hingeHoles: {
          enabled: !0,
          //[x]
          // enableDepth: true, //[]
          minimumHoleDistance: 0,
          //[x]
          defaultDistanceFromEdge: 22,
          //[x]
          defaultOuterSpacing: 10,
          //[x]
          defaultHingeLength: 50
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
          minValue: 0,
          //[x]
          // maxValue: 200, //[x]
          types: ["bevel", "radius"]
          //[x]
        },
        banding: {
          enabled: !0,
          //[x]
          enableTypes: !1,
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
    var e, t, s, i, h, o, g, u, a, n, l, S;
    return {
      loaded: !1,
      vis: C({}),
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
      validationIssues: [],
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
              type: (e = this.options.holes.diameters) != null && e.length ? "select" : "unitDependent",
              label: "Diameter",
              output: (t = this.options.holes.diameters) != null && t.length ? "float" : void 0,
              options: (s = this.options.holes.diameters) != null && s.length ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && b(this.shape.t) > 0,
              //[]
              allowBlank: !0,
              type: (i = this.options.holes.depths) != null && i.length ? "select" : "unitDependent",
              output: (h = this.options.holes.depths) != null && h.length ? "float" : void 0,
              options: (o = this.options.holes.depths) != null && o.length ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            side: {
              enabled: this.options.sides.enabled,
              type: "select",
              output: "integer",
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
            outerSpacing: {
              enabled: !0,
              type: "unitDependent",
              label: "Outer spacing",
              min: 0
            },
            distanceFromEdge: {
              enabled: !0,
              type: "unitDependent",
              label: "Distance from edge",
              min: 0
            },
            //[] separate option for hinges
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && b(this.shape.t) > 0,
              allowBlank: !0,
              type: (g = this.options.holes.depths) != null && g.length ? "select" : "unitDependent",
              output: (u = this.options.holes.depths) != null && u.length ? "float" : void 0,
              options: (a = this.options.holes.depths) != null && a.length ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            //[] separate option for hinges
            diameter: {
              enabled: !0,
              type: (n = this.options.holes.diameters) != null && n.length ? "select" : "unitDependent",
              label: "Diameter",
              output: (l = this.options.holes.diameters) != null && l.length ? "float" : void 0,
              options: (S = this.options.holes.diameters) != null && S.length ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            numHoles: {
              enabled: !0,
              type: "integer",
              label: "Num holes",
              min: 2
            },
            side: {
              enabled: this.options.sides.enabled,
              type: "select",
              output: "integer",
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
              output: "string",
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
              allowBlank: !0,
              enabled: !0,
              type: "unitDependent"
            }
          },
          corners: {
            type: {
              enabled: !0,
              label: "Type",
              type: "select",
              output: "string",
              options: this.getSelectOptions(this.options.corners.types)
            },
            size: {
              enabled: !0,
              label: "Size",
              type: "unitDependent",
              min: () => typeof this.options.corners.minValue < "u" ? b(this.options.corners.minValue) : 0,
              max: () => typeof this.options.corners.maxValue < "u" ? b(this.options.corners.maxValue) : b(this.shape.getShortSide() / 2)
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
      },
      //[] add for all fields
      extraValidation: {
        holes: {
          diameter: {
            min: this.options.holes.minDiameter,
            max: this.options.holes.maxDiameter
          },
          depth: {
            min: this.options.holes.minDepth,
            max: this.options.holes.maxDepth
          }
        },
        hingeHoles: {
          holeDistance: {
            min: this.options.hingeHoles.minimumHoleDistance
          }
        },
        corners: {
          size: {
            min: this.options.corners.minValue,
            max: this.options.corners.maxValue
          }
        }
      }
    };
  },
  computed: {
    units() {
      return Y.call(this, ["units"]);
    },
    localShape: {
      get() {
        return this.shape;
      },
      set(e) {
        this.$emit("update:shape", e);
      }
    },
    hasMachining() {
      return O(this.localShape);
    },
    columns() {
      var t;
      if (this.currentPrimary === "banding")
        return this.options.banding.enableTypes ? 4 : 3;
      if (!((t = this.currentFieldKeys) != null && t.length)) return 0;
      let e = Object.values(this.currentFields).filter((s) => s.enabled).length;
      return e += 1, this.currentPrimary === "machining" && (e += 1), e;
    },
    columnsStyle() {
      if (!this.currentFieldKeys.length) return;
      const e = {
        id: "34px",
        del: "30px"
      };
      if (this.currentPrimary === "banding")
        return [
          e.id,
          "1fr",
          this.options.banding.enableTypes ? "1fr" : void 0,
          e.del
        ].join(" ");
      const t = [];
      return this.currentFieldKeys.forEach((i) => {
        const h = this.currentFields[i];
        h.enabled && t.push(h.w ?? "1fr");
      }), this.currentPrimary === "machining" && t.unshift(e.id), t.push(e.del), t.join(" ");
    },
    currentFields() {
      return this.currentPrimary && this.currentSecondary ? this.fieldDefinitions[this.currentPrimary][this.currentSecondary] : this.currentPrimary ? this.fieldDefinitions[this.currentPrimary] : null;
    },
    /**
     * @remarks these form the columns & the table headings
     */
    currentFieldKeys() {
      return this.currentPrimary && this.currentSecondary ? Object.keys(this.fieldDefinitions[this.currentPrimary][this.currentSecondary]).filter((e) => this.fieldDefinitions[this.currentPrimary][this.currentSecondary][e].enabled) : this.currentPrimary ? Object.keys(this.fieldDefinitions[this.currentPrimary]).filter((e) => this.fieldDefinitions[this.currentPrimary][e].enabled) : [];
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
    currentPrimary: {
      handler(e) {
        e === "banding" && (this.suppressWatchers(), this.validateBanding(), this.suppressWatchers(!1));
      },
      deep: !0,
      immediate: !0
    },
    currentSecondary: {
      handler(e) {
        var t;
        if (this.currentPrimary !== "banding") {
          if (!e) return this.validationIssues = [];
          this.suppressWatchers(), this.validationIssues = this.localShape.machining.validate(
            this.localShape,
            e,
            (t = this.extraValidation) == null ? void 0 : t[e]
          ), e === "hingeHoles" && this.localShape.machining.hingeHoles.forEach((s, i) => {
            var h;
            L(s, (h = this.extraValidation) == null ? void 0 : h.holes, this.validationIssues, i);
          }), this.suppressWatchers(!1);
        }
      },
      deep: !0,
      immediate: !0
    },
    "shape.machining.holes": {
      handler() {
        var e;
        this.loaded && (this.disableWatchers || (this.suppressWatchers(), this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          "holes",
          (e = this.extraValidation) == null ? void 0 : e.holes
        ), this.vis.createHoles(), this.suppressWatchers(!1)));
      },
      deep: !0,
      immediate: !1
    },
    "shape.machining.hingeHoles": {
      handler() {
        var e;
        this.loaded && (this.disableWatchers || (this.suppressWatchers(), this.localShape.machining.updateHingeHoles(this.localShape), this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          "hingeHoles",
          (e = this.extraValidation) == null ? void 0 : e.hingeHoles
        ), this.localShape.machining.hingeHoles.forEach((t, s) => {
          var i;
          L(t, (i = this.extraValidation) == null ? void 0 : i.holes, this.validationIssues, s);
        }), this.vis.createHingeHoles(), this.suppressWatchers(!1)));
      },
      deep: !0,
      immediate: !1
    },
    "shape.machining.corners": {
      handler() {
        var e;
        this.loaded && (this.disableWatchers || (this.suppressWatchers(), this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          "corners",
          (e = this.extraValidation) == null ? void 0 : e.corners
        ), this.localShape.machining.validate(this.localShape, "holes"), this.localShape.machining.validate(this.localShape, "hingeHoles"), this.vis.createShape(), this.vis.createHoles(), this.vis.createHingeHoles(), this.vis.createBanding(), this.suppressWatchers(!1)));
      },
      deep: !0,
      immediate: !1
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
    const e = document.querySelector("#smartcut-app #machining .diagram");
    if (this.visWrapperResizeObserver || (this.visWrapperResizeObserver = new ResizeObserver((t) => {
      clearTimeout(this == null ? void 0 : this.visWrapperResizeTimer), this.visInit && (this.visWrapperResizeTimer = setTimeout(() => {
        if (this.suppressResizeObserver) {
          this.suppressResizeObserver = !1;
          return;
        }
        t[0].contentRect.width !== this.visWrapperWidth && (this.visWrapperWidth = t[0].contentRect.width, this.visWrapperWidth && this.vis.updateSize());
      }, 10));
    }).observe(e)), this.bandingTypes = this.options.banding.types ?? [], Array.isArray(this.bandingTypes) && this.bandingTypes.length)
      for (const t of Object.keys(this.localShape.bandingType))
        this.localShape.bandingType[t] && !this.bandingTypes.includes(this.localShape.bandingType[t]) && this.bandingTypes.push(this.localShape.bandingType[t]);
    this.loaded = !0;
  },
  methods: {
    suppressWatchers(e = !0) {
      e ? this.disableWatchers = e : this.$nextTick(() => this.disableWatchers = !1);
    },
    deleteAll() {
      this.deleteHoles(), this.deleteHingeHoles(), this.deleteCorners(), this.deleteBanding();
    },
    updateField(e, t, s) {
      this.$nextTick(() => {
        e[t] = s;
      });
    },
    getIndex(e) {
      if (this.currentSecondary === "corners")
        switch (e) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return e;
        }
      return e + 1;
    },
    shouldShowId() {
      return this.currentPrimary !== "banding";
    },
    getMinValue(e) {
      return E(e);
    },
    getMaxValue(e) {
      return V(e);
    },
    getMaxHoleDepth() {
      const e = typeof this.shape.t < "u" ? b(this.shape.t) : null, t = typeof this.options.holes.maxDepth < "u" ? b(this.options.holes.maxDepth) : null;
      return t === null ? e || null : e ? t < e ? t : e : null;
    },
    getMaxHoleDiameter() {
      const e = typeof this.options.holes.maxDiameter < "u" ? b(this.options.holes.maxDiameter) : null;
      return e !== null ? e < this.shape.getLongSide() ? e : this.shape.getLongSide() : null;
    },
    getSelectOptions(e, t = null) {
      if (!(e != null && e.length)) return [];
      let s = "None";
      switch (t) {
        case "depth":
          s = "Through";
          break;
      }
      const i = [
        {
          label: s,
          value: null
        }
      ];
      return e.forEach((h) => {
        const g = {
          label: h.charAt(0).toUpperCase() + h.slice(1),
          value: h
        };
        i.push(g);
      }), i;
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
      let e = null;
      return this.currentPrimary && this.currentSecondary ? e = this.localShape[this.currentPrimary][this.currentSecondary] : this.currentPrimary && (e = this.localShape[this.currentPrimary]), Array.isArray(e) ? e : [e];
    },
    initVis() {
      this.shape && (this.vis = C(new q({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: this.localShape,
        vueComponent: this
      })), this.vis.init(), this.visInit = !0, setTimeout(() => {
        this.vis.updateSize();
      }, 100));
    },
    isFieldEnabled(e, t) {
      return G(
        this.fieldDefinitions,
        this.saw.stockType,
        e,
        t
      );
    },
    isFieldPresent(e, t) {
      return M(
        this.fieldDefinitions,
        this.saw.stockType,
        e,
        t
      );
    },
    setFieldEnabled(e, t, s = !0) {
      return I(
        this.fieldDefinitions,
        this.saw.stockType,
        e,
        t,
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
        b(this.shape.getLongSide()) / 2,
        b(this.shape.getShortSide()) / 2,
        this.options.holes.defaultDiameter ?? 1,
        this.options.holes.defaultDepth ?? 0,
        this.currentSide
      ), this.vis.createHoles();
    },
    //this creates hinge holes with the defaults set in options
    createHingeHoles() {
      this.shape.machining.createHingeHoles({
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
      this.localShape.machining.corners.forEach((e) => {
        e.size = null, e.type = null;
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
    remove(e) {
      switch (this.currentSecondary) {
        case "holes":
          return this.localShape.machining.holes.splice(e, 1);
        case "hingeHoles":
          return this.localShape.machining.hingeHoles.splice(e, 1);
        case "corners":
          this.localShape.machining.corners[e].size = null, this.localShape.machining.corners[e].type = null;
          return;
      }
      switch (this.currentPrimary) {
        case "banding":
          this.localShape.banding[e] = !1, this.localShape.bandingType[e] = "";
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
    getInputMode(e) {
      return $(e.type, this.units);
    },
    getInputType(e) {
      return U(e.type, this.units);
    },
    isFieldDisabled(e, t) {
      return typeof e.disabled == "function" ? e.disabled(t) : !1;
    },
    validateBanding() {
      var e;
      if (this.validationIssues = [], !!this.options.banding.enabled) {
        this.suppressWatchers();
        for (const t in this.localShape.banding)
          this.localShape.banding[t] ? this.options.banding.enableTypes && ((e = this.options.banding.types) != null && e.length) && (this.localShape.bandingType[t] || this.validationIssues.push({
            index: t,
            message: "Please select a type"
          })) : this.localShape.bandingType[t] = "";
        this.suppressWatchers(!1);
      }
    },
    getValidationIssues(e) {
      const t = this.validationIssues.filter((s) => s.index === e);
      return t.length ? t.map((s) => s.message) : [];
    },
    getValidationIssueFields(e) {
      const t = this.validationIssues.filter((i) => i.index === e && (i == null ? void 0 : i.fields)), s = t.map((i) => i.fields).flat();
      return t.length ? s : [];
    },
    isInvalid(e, t) {
      const s = this.getValidationIssueFields(e);
      return s != null && s.length ? !!s.includes(t) : !1;
    }
  }
}), J = { id: "machining" }, Q = { class: "inputs" }, Z = {
  key: 0,
  class: "shape-name"
}, K = { class: "shape-dimensions" }, _ = {
  key: 1,
  class: "sides-wrapper"
}, ee = { class: "menu" }, te = { class: "button-wrapper" }, se = { class: "cell" }, ie = ["onClick"], ae = { class: "remove" }, ne = { class: "row table-heading" }, le = {
  key: 0,
  class: "cell"
}, re = { class: "cell" }, he = { class: "id" }, oe = { class: "cell" }, de = {
  key: 0,
  class: "cell"
}, pe = ["onClick"], ce = { class: "remove" }, ue = { class: "row table-heading" }, ge = {
  key: 0,
  class: "id"
}, be = {
  key: 0,
  class: "cell"
}, me = { class: "id" }, ye = ["onClick"], Se = { class: "remove" }, fe = { key: 6 }, ve = { key: 7 };
function xe(e, t, s, i, h, o) {
  const g = F("font-awesome-icon"), u = F("InputField");
  return r(), d("div", J, [
    c("div", null, [
      c("div", Q, [
        c("button", {
          type: "button",
          class: "close",
          onClick: t[0] || (t[0] = (a) => e.close())
        }, [
          x(g, { icon: ["fass", "xmark"] })
        ]),
        e.shape.name ? (r(), d("div", Z, f(e.shape.name), 1)) : m("", !0),
        c("div", K, f(e.shape.l) + " x " + f(e.shape.w) + " " + f(e.shape.t ? "x " + e.shape.t : null), 1),
        e.options.sides.enabled ? (r(), d("div", _, [
          c("div", {
            ref: "sides",
            class: v(["sides", { flipped: e.currentSide === 1 }]),
            onClick: t[1] || (t[1] = (a) => e.flip())
          }, t[10] || (t[10] = [
            c("div", { class: "side-a" }, " A ", -1),
            c("div", { class: "side-b" }, " B ", -1)
          ]), 2),
          t[11] || (t[11] = c("div", { class: "text" }, " [Click to flip] ", -1))
        ])) : m("", !0),
        e.hasMachining ? (r(), d("button", {
          key: 2,
          onClick: t[2] || (t[2] = (...a) => e.deleteAll && e.deleteAll(...a))
        }, " Delete all machining ")) : m("", !0),
        c("div", ee, [
          e.options.holes.enabled ? (r(), d("div", {
            key: 0,
            class: v({ selected: e.currentSecondary === "holes" }),
            onClick: t[3] || (t[3] = (a) => {
              e.currentPrimary = "machining", e.currentSecondary = "holes";
            })
          }, " Holes ", 2)) : m("", !0),
          e.options.hingeHoles.enabled ? (r(), d("div", {
            key: 1,
            class: v({ selected: e.currentSecondary === "hingeHoles" }),
            onClick: t[4] || (t[4] = (a) => {
              e.currentPrimary = "machining", e.currentSecondary = "hingeHoles";
            })
          }, " Hinge holes ", 2)) : m("", !0),
          e.options.corners.enabled ? (r(), d("div", {
            key: 2,
            class: v({ selected: e.currentSecondary === "corners" }),
            onClick: t[5] || (t[5] = (a) => {
              e.currentPrimary = "machining", e.currentSecondary = "corners";
            })
          }, " Corners ", 2)) : m("", !0),
          e.options.banding.enabled ? (r(), d("div", {
            key: 3,
            class: v({ selected: e.currentPrimary === "banding" }),
            onClick: t[6] || (t[6] = (a) => {
              e.currentPrimary = "banding", e.currentSecondary = null;
            })
          }, " Banding ", 2)) : m("", !0)
        ]),
        c("div", te, [
          e.currentSecondary === "holes" || e.currentSecondary === "hingeHoles" ? (r(), d("button", {
            key: 0,
            type: "button",
            onClick: t[7] || (t[7] = (a) => e.create())
          }, " Create ")) : m("", !0),
          e.currentPrimary ? (r(), d("button", {
            key: 1,
            type: "button",
            onClick: t[8] || (t[8] = (a) => e.removeAll())
          }, " Delete all ")) : m("", !0),
          e.currentPrimary === "banding" && e.options.banding.enableTypes && e.options.banding.types === null ? (r(), d("button", {
            key: 2,
            type: "button",
            onClick: t[9] || (t[9] = (a) => e.bandingTypes.push(""))
          }, " Add banding type ")) : m("", !0)
        ]),
        e.currentPrimary === "banding" && e.options.banding.enableTypes && e.options.banding.types === null ? (r(), d("div", {
          key: 3,
          class: "grid-table banding-types",
          style: T({
            "grid-template-columns": e.columnsStyle
          })
        }, [
          t[12] || (t[12] = c("div", { class: "row table-heading" }, [
            c("div", { class: "cell" }, " Type definition "),
            c("div", { class: "cell" })
          ], -1)),
          (r(!0), d(H, null, w(e.bandingTypes, (a, n) => (r(), d("div", {
            key: n,
            class: "row"
          }, [
            c("div", se, [
              x(u, {
                id: a + "-" + n,
                type: "text",
                "enable-label": !1,
                value: e.bandingTypes[n],
                onUpdate: (l) => e.bandingTypes[n] = l
              }, null, 8, ["id", "value", "onUpdate"])
            ]),
            c("div", {
              class: "cell",
              onClick: (l) => e.bandingTypes.splice(n, 1)
            }, [
              c("div", ae, [
                x(g, { icon: ["fass", "trash"] })
              ])
            ], 8, ie)
          ]))), 128))
        ], 4)) : m("", !0),
        e.currentPrimary === "banding" ? (r(), d("div", {
          key: 4,
          class: "grid-table banding",
          style: T({
            "grid-template-columns": e.columnsStyle
          })
        }, [
          c("div", ne, [
            t[13] || (t[13] = c("div", { class: "cell id" }, null, -1)),
            t[14] || (t[14] = c("div", { class: "cell" }, " Add ", -1)),
            e.options.banding.enableTypes ? (r(), d("div", le, " Type ")) : m("", !0),
            t[15] || (t[15] = c("div", { class: "cell del" }, null, -1))
          ]),
          (r(!0), d(H, null, w(e.currentFieldKeys, (a) => (r(), d("div", {
            key: a,
            class: "row"
          }, [
            c("div", re, [
              c("div", he, f(e.currentFields[a].label.toUpperCase()), 1)
            ]),
            c("div", oe, [
              x(u, {
                id: "banding-" + a,
                type: "checkbox",
                "enable-label": !1,
                disabled: e.isFieldDisabled(e.currentFields[a], void 0),
                value: e.shape.banding[a],
                onUpdate: (n) => e.localShape.banding[a] = n
              }, null, 8, ["id", "disabled", "value", "onUpdate"])
            ]),
            e.options.banding.enableTypes ? (r(), d("div", de, [
              x(u, {
                id: "banding-type-" + a,
                type: "select",
                "enable-label": !1,
                disabled: e.isFieldDisabled(e.currentFields[a], void 0),
                options: e.bandingTypes.map((n) => ({
                  label: n.toUpperCase(),
                  value: n,
                  disabled: e.isFieldDisabled(
                    e.currentFields[a],
                    void 0
                  )
                })),
                value: e.shape.bandingType[a],
                onUpdate: (n) => e.localShape.bandingType[a] = n
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate"])
            ])) : m("", !0),
            c("div", {
              class: "cell",
              onClick: (n) => e.remove(a)
            }, [
              c("div", ce, [
                x(g, { icon: ["fass", "trash"] })
              ])
            ], 8, pe),
            (r(!0), d(H, null, w(e.getValidationIssues(
              a
            ), (n, l) => (r(), d("div", {
              key: l,
              class: "group validation",
              style: T({
                "grid-column-end": "span " + e.columns
              })
            }, f(n), 5))), 128))
          ]))), 128))
        ], 4)) : m("", !0),
        e.currentPrimary !== "banding" && e.currentShapeFields.length ? (r(), d("div", {
          key: 5,
          class: v(["grid-table", e.currentPrimary]),
          style: T({
            "grid-template-columns": e.columnsStyle
          })
        }, [
          c("div", ue, [
            e.shouldShowId() ? (r(), d("div", ge)) : m("", !0),
            (r(!0), d(H, null, w(e.currentFields, (a, n, l) => j((r(), d("div", {
              key: l,
              class: "cell"
            }, f(a.label ?? n), 1)), [
              [N, a.enabled]
            ])), 128)),
            t[16] || (t[16] = c("div", { class: "del" }, null, -1))
          ]),
          (r(!0), d(H, null, w(e.currentShapeFields, (a, n) => (r(), d("div", {
            key: n,
            class: "row"
          }, [
            e.shouldShowId() ? (r(), d("div", be, [
              c("div", me, f(e.getIndex(n)), 1)
            ])) : m("", !0),
            (r(!0), d(H, null, w(e.currentFieldKeys, (l, S) => (r(), d("div", {
              key: S,
              class: v(["cell", { invalid: e.isInvalid(n, l) }])
            }, [
              e.currentFields[l].type !== "select" && e.currentFields[l].type !== "checkbox" ? (r(), D(u, {
                key: 0,
                id: l + "-" + S,
                type: e.currentFields[l].output ?? "unitDependent",
                "enable-label": !1,
                placeholder: e.currentFields[l].label ?? l,
                disabled: e.isFieldDisabled(e.currentFields[l], n),
                value: a[l],
                units: e.units,
                output: e.currentFields[l].output,
                onUpdate: (k) => e.updateField(a, l, k)
              }, null, 8, ["id", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate"])) : e.currentFields[l].type === "checkbox" ? (r(), D(u, {
                key: 1,
                id: l + "-" + S,
                type: "checkbox",
                "enable-label": !1,
                disabled: e.isFieldDisabled(e.currentFields[l], n),
                value: a[l],
                output: e.currentFields[l].output,
                onUpdate: (k) => e.updateField(a, l, k)
              }, null, 8, ["id", "disabled", "value", "output", "onUpdate"])) : e.currentFields[l].type === "select" ? (r(), D(u, {
                key: 2,
                id: l + "-" + S,
                type: "select",
                "enable-label": !1,
                disabled: e.isFieldDisabled(e.currentFields[l], n),
                value: a[l],
                options: e.currentFields[l].options,
                output: e.currentFields[l].output,
                onUpdate: (k) => e.updateField(a, l, k)
              }, null, 8, ["id", "disabled", "value", "options", "output", "onUpdate"])) : m("", !0)
            ], 2))), 128)),
            c("div", {
              class: "cell",
              onClick: (l) => e.remove(n)
            }, [
              c("div", Se, [
                x(g, { icon: ["fass", "trash"] })
              ])
            ], 8, ye),
            (r(!0), d(H, null, w(e.getValidationIssues(
              n
            ), (l, S) => (r(), d("div", {
              key: S,
              class: "group validation",
              style: T({
                "grid-column-end": "span " + e.columns
              })
            }, f(l), 5))), 128))
          ]))), 128))
        ], 6)) : e.currentSecondary ? (r(), d("div", fe, " Nothing yet... ")) : e.currentPrimary !== "banding" ? (r(), d("div", ve, " Please select from the menu above ")) : m("", !0)
      ]),
      c("div", {
        id: "machining-diagram",
        class: v(["diagram", { flipped: e.currentSide === 1 }])
      }, null, 2)
    ])
  ]);
}
const ke = /* @__PURE__ */ R(X, [["render", xe]]);
export {
  ke as default
};
