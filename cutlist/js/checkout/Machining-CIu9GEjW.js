var B = Object.defineProperty;
var Y = (e, t, s) => t in e ? B(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var h = (e, t, s) => Y(e, typeof t != "symbol" ? t + "" : t, s);
import { j as v, k as u, l as E, v as T, p as O, I as V, E as M, u as G, q as F, s as I, w as $, x as P, y as A, z as R, A as j, B as U, D as N, G as K, H as q, J, K as Q, L as X, M as Z, d as _, _ as ee, r as W, o as r, b as d, e as L, i as b, h as m, t as y, n as x, N as D, O as z, F as k, f as C, P as te, Q as se } from "./main-BZ3wIwF-.js";
class ie {
  constructor({
    HTMLElement: t,
    vueComponent: s,
    shape: i,
    units: a = "decimal",
    decimalPlaces: n = 2
  }) {
    h(this, "HTMLElement");
    h(this, "HTMLElementWidth");
    h(this, "el");
    h(this, "units");
    h(this, "decimalPlaces");
    h(this, "vueComponent");
    h(this, "shape");
    h(this, "h");
    h(this, "w");
    h(this, "shapeL");
    h(this, "shapeW");
    h(this, "padding", 40);
    h(this, "xScale", v.scaleLinear());
    h(this, "yScale", v.scaleLinear());
    h(this, "yScaleFlipped", v.scaleLinear());
    h(this, "measurementScale", v.scaleLinear());
    h(this, "xAxis");
    h(this, "yAxis");
    h(this, "formatDp");
    h(this, "svgCanvas");
    h(this, "currentSide", 0);
    h(this, "bandingStrokeWidth", 4);
    h(this, "shapeGroup");
    h(this, "bandingGroup");
    h(this, "holeGroup");
    h(this, "hingeHoleGroup");
    h(this, "cornerGroup");
    h(this, "legendGroup");
    h(this, "pointGroup");
    h(this, "loaded", !1);
    this.HTMLElement = t, this.units = a, this.decimalPlaces = n, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = s, this.shape = i, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = v.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = v.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
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
      v.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      v.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, s) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(s)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = v.path(), s = this.shape.machining.corners, i = [], a = [];
    [0, 1, 2, 3].forEach((g) => {
      const c = s[g];
      c && c.type ? (i.push(c.size ? u(c.size) : 0), a.push(c.type)) : (i.push(0), a.push(null));
    });
    const n = (g, c, S, p, o) => {
      a[g] === "radius" ? t.arcTo(
        this.xScale(c),
        this.getYScale()(S),
        this.xScale(p),
        this.getYScale()(o),
        this.measurementScale(i[g])
      ) : a[g] === "bevel" ? t.lineTo(this.xScale(p), this.getYScale()(o)) : (t.lineTo(this.xScale(c), this.getYScale()(S)), t.lineTo(this.xScale(p), this.getYScale()(o)));
    };
    t.moveTo(this.xScale(0), this.getYScale()(i[0])), n(0, 0, 0, i[0], 0), (a[0] === "bevel" || a[1] === "bevel") && t.lineTo(this.xScale(this.shapeL - i[1]), this.getYScale()(0)), n(1, this.shapeL, 0, this.shapeL, i[1]), (a[1] === "bevel" || a[2] === "bevel") && t.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - i[2])
    ), n(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - i[2],
      this.shapeW
    ), (a[2] === "bevel" || a[3] === "bevel") && t.lineTo(this.xScale(i[3]), this.getYScale()(this.shapeW)), n(3, 0, this.shapeW, 0, this.shapeW - i[3]), t.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", t.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let t;
    t = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), t = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
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
    for (const n of E)
      if (t[n])
        switch (n) {
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
    this.bandingGroup.selectAll("g").data(i).join("line").attr("class", "banding").attr("x1", (n) => n.x1).attr("x2", (n) => n.x2).attr("y1", (n) => n.y1).attr("y2", (n) => n.y2).attr("stroke-width", this.bandingStrokeWidth);
    const a = v.path();
    this.shape.machining.corners.forEach((n, g) => {
      if (!n.type) return;
      let c, S, p;
      switch (g) {
        case 0:
          if (!T(t.a) || t.a === !1) return;
          c = {
            x: this.xScale(0) - s,
            y: this.getYScale()(u(n.size ?? 0))
          }, S = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, p = {
            x: this.xScale(u(n.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          };
          break;
        case 1:
          if (!T(t.b) || t.b === !1) return;
          c = {
            x: this.xScale(this.shapeL - u(n.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          }, S = {
            x: this.xScale(this.shapeL) - s,
            y: this.getYScale()(0)
          }, p = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(u(n.size ?? 0))
          };
          break;
        case 2:
          if (!T(t.c) || t.c === !1) return;
          c = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(this.shapeW - u(n.size ?? 0))
          }, S = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, p = {
            x: this.xScale(this.shapeL - u(n.size ?? 0)) - s,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          };
          break;
        case 3:
          if (!T(t.d) || t.d === !1) return;
          c = {
            x: this.xScale(u(n.size ?? 0)),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          }, S = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, p = {
            x: this.xScale(0) - s,
            y: this.getYScale()(this.shapeW - u(n.size ?? 0)) + s
          };
          break;
        default:
          return;
      }
      if (a.moveTo(c.x, c.y), n.type === "radius")
        switch (a.arcTo(
          S.x,
          S.y,
          p.x,
          p.y,
          this.measurementScale(n.size ?? 0)
        ), g) {
          case 0:
          case 2:
            a.lineTo(p.x + s, p.y);
            break;
          case 1:
          case 3:
            a.lineTo(p.x, p.y - (this.currentSide === 0 ? s : -1));
            break;
        }
      else n.type === "bevel" && a.lineTo(p.x, p.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][g]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", a.toString());
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
      v.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
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
    s > 600 && (s = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), t > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (t = 0.3, this.h = this.w * t), this.h > s && (this.h = s, this.w = this.h / t, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
const ae = _(() => import("./ObjectViewer-Bu9x0GW7.js")), ne = O({
  name: "Machining",
  components: { InputField: V, ExtrasInputs: M, ObjectViewer: ae },
  props: {
    env: {
      type: String,
      default: "production"
    },
    translate: {
      type: Boolean,
      default: !1
    },
    findExtrasPrice: {
      type: Function,
      required: !0
    },
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
        faces: {
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
          enabled: !1,
          //[x]
          options: [[]],
          //[x]
          labels: [],
          pricing: {},
          enableCorners: !1
          //[x]
        }
      })
    }
  },
  emits: ["update:shape", "close"],
  setup(e) {
    if (!e.translate) return { t: (s) => s };
    const { t } = G({
      inheritLocale: !0,
      useScope: "global"
    });
    return { t };
  },
  data() {
    var e, t, s, i, a, n, g, c, S, p, o, f;
    return {
      showDevInfo: !1,
      loaded: !1,
      vis: F({}),
      visInit: !1,
      disableWatchers: !1,
      listeners: {},
      suppressResizeObserver: !1,
      currentFace: 0,
      currentType: null,
      visWrapperWidth: 0,
      validationIssues: [],
      userFriendlyFieldMap: I,
      fieldDefinitions: {
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
            enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && u(this.shape.t) > 0,
            //[]
            allowBlank: !0,
            type: (i = this.options.holes.depths) != null && i.length ? "select" : "unitDependent",
            output: (a = this.options.holes.depths) != null && a.length ? "float" : void 0,
            options: (n = this.options.holes.depths) != null && n.length ? this.getSelectOptions(this.options.holes.depths) : void 0
          },
          face: {
            enabled: this.options.faces.enabled,
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
            enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && u(this.shape.t) > 0,
            allowBlank: !0,
            type: (g = this.options.holes.depths) != null && g.length ? "select" : "unitDependent",
            output: (c = this.options.holes.depths) != null && c.length ? "float" : void 0,
            options: (S = this.options.holes.depths) != null && S.length ? this.getSelectOptions(this.options.holes.depths) : void 0
          },
          //[] separate option for hinges
          diameter: {
            enabled: !0,
            type: (p = this.options.holes.diameters) != null && p.length ? "select" : "unitDependent",
            label: "Diameter",
            output: (o = this.options.holes.diameters) != null && o.length ? "float" : void 0,
            options: (f = this.options.holes.diameters) != null && f.length ? this.getSelectOptions(this.options.holes.diameters) : void 0
          },
          numHoles: {
            enabled: !0,
            type: "integer",
            label: "Num holes",
            min: 2
          },
          face: {
            enabled: this.options.faces.enabled,
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
            min: () => typeof this.options.corners.minValue < "u" ? u(this.options.corners.minValue) : 0,
            max: () => typeof this.options.corners.maxValue < "u" ? u(this.options.corners.maxValue) : u(this.shape.getShortSide() / 2)
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
      return $.call(this, ["units"]);
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
      return P(this.localShape);
    },
    columns() {
      var t;
      if (!((t = this.currentFieldKeys) != null && t.length)) return 0;
      if (this.currentType === "banding") return 1;
      let e = Object.values(this.currentFields).filter((s) => s.enabled).length;
      return e += 2, e;
    },
    columnsStyle() {
      if (!this.currentFieldKeys.length || this.currentType === "banding") return;
      const e = {
        id: "34px",
        del: "30px"
      }, t = [];
      return this.currentFieldKeys.forEach((i) => {
        const a = this.currentFields[i];
        a.enabled && t.push(a.w ?? "1fr");
      }), t.unshift(e.id), t.push(e.del), t.join(" ");
    },
    currentFields() {
      return !this.currentType || this.currentType === "banding" ? null : this.fieldDefinitions[this.currentType];
    },
    /**
     * @remarks these form the columns & the table headings
     */
    currentFieldKeys() {
      return !this.currentType || this.currentType === "banding" ? [] : Object.keys(this.fieldDefinitions[this.currentType]).filter((e) => this.fieldDefinitions[this.currentType][e].enabled);
    },
    /**
     * @remarks these are the individual line items in the table
     */
    currentShapeFields() {
      return this.currentType ? this.getCurrentShapeFields() : [];
    },
    availableBandingSides() {
      const e = this.shape.machining.corners.map((t) => t.isPresent() ? t.getCorner() : null).filter((t) => t);
      return [...E, ...e];
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
    currentType: {
      handler(e) {
        var t;
        if (e === "banding") {
          this.suppressWatchers(), this.validateBanding(), this.suppressWatchers(!1);
          return;
        }
        if (!e) return this.validationIssues = [];
        this.suppressWatchers(), this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          e,
          (t = this.extraValidation) == null ? void 0 : t[e]
        ), e === "hingeHoles" && this.localShape.machining.hingeHoles.forEach((s, i) => {
          var a;
          A(s, (a = this.extraValidation) == null ? void 0 : a.holes, this.validationIssues, i);
        }), this.suppressWatchers(!1);
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
          A(t, (i = this.extraValidation) == null ? void 0 : i.holes, this.validationIssues, s);
        }), this.vis.createHingeHoles(), this.suppressWatchers(!1)));
      },
      deep: !0,
      immediate: !1
    },
    "shape.machining.corners": {
      handler() {
        var e;
        if (this.loaded && !this.disableWatchers) {
          this.suppressWatchers(), this.validationIssues = this.localShape.machining.validate(
            this.localShape,
            "corners",
            (e = this.extraValidation) == null ? void 0 : e.corners
          ), this.localShape.machining.validate(this.localShape, "holes"), this.localShape.machining.validate(this.localShape, "hingeHoles"), this.vis.createShape(), this.vis.createHoles(), this.vis.createHingeHoles();
          for (const t of this.localShape.machining.corners)
            t.isPresent() || R(this.shape, "banding", t.getCorner(), !0);
          this.vis.createBanding(), this.suppressWatchers(!1);
        }
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
      for (const t of Object.keys(this.localShape.banding))
        this.localShape.banding[t] && !this.bandingTypes.includes(this.localShape.banding[t]) && this.bandingTypes.push(this.localShape.banding[t]);
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
      if (this.currentType === "corners")
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
      return this.currentType !== "banding";
    },
    getMinValue(e) {
      return j(e);
    },
    getMaxValue(e) {
      return U(e);
    },
    getMaxHoleDepth() {
      const e = typeof this.shape.t < "u" ? u(this.shape.t) : null, t = typeof this.options.holes.maxDepth < "u" ? u(this.options.holes.maxDepth) : null;
      return t === null ? e || null : e ? t < e ? t : e : null;
    },
    getMaxHoleDiameter() {
      const e = typeof this.options.holes.maxDiameter < "u" ? u(this.options.holes.maxDiameter) : null;
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
      return e.forEach((a) => {
        const g = {
          label: a.charAt(0).toUpperCase() + a.slice(1),
          value: a
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
      if (!this.currentType) return [];
      if (this.currentType === "banding") return [];
      const e = this.localShape.machining[this.currentType];
      return Array.isArray(e) ? e : [e];
    },
    initVis() {
      this.shape && (this.vis = F(new ie({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: this.localShape,
        vueComponent: this
      })), this.vis.init(), this.visInit = !0, setTimeout(() => {
        this.vis.updateSize();
      }, 100));
    },
    isFieldEnabled(e, t) {
      return N(
        this.fieldDefinitions,
        this.saw.stockType,
        e,
        t
      );
    },
    isFieldPresent(e, t) {
      return K(
        this.fieldDefinitions,
        this.saw.stockType,
        e,
        t
      );
    },
    setFieldEnabled(e, t, s = !0) {
      return q(
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
      this.currentFace = this.currentFace === 0 ? 1 : 0, this.vis.flip();
    },
    create() {
      switch (this.currentType) {
        case "holes":
          this.createHole();
          break;
        case "hingeHoles":
          this.createHingeHoles();
          break;
      }
    },
    setExtrasOption(e, t, s, i, a) {
      J.call(this, e, t, s, i, a);
    },
    setAllExtrasOptions(e, t, s, i, a) {
      Q.call(this, e, t, s, i, a);
    },
    createHole() {
      this.localShape.machining.createHole(
        u(this.shape.getLongSide()) / 2,
        u(this.shape.getShortSide()) / 2,
        this.options.holes.defaultDiameter ?? 1,
        this.options.holes.defaultDepth ?? 0,
        this.currentFace
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
        face: this.currentFace,
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
      }, this.localShape.banding = {
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
      switch (this.currentType) {
        case "holes":
          return this.localShape.machining.holes.splice(e, 1);
        case "hingeHoles":
          return this.localShape.machining.hingeHoles.splice(e, 1);
        case "corners":
          this.localShape.machining.corners[e].size = null, this.localShape.machining.corners[e].type = null;
          return;
      }
    },
    removeAll() {
      switch (this.currentType) {
        case "holes":
          return this.deleteHoles();
        case "hingeHoles":
          return this.deleteHingeHoles();
        case "corners":
          return this.deleteCorners();
      }
    },
    getShapeId() {
      if (this.shape.constructor.name === "InputShape")
        return this.shape.listId;
      if (this.shape.constructor.name === "Shape")
        return this.shape.id;
    },
    getInputMode(e) {
      return X(e.type, this.units);
    },
    getInputType(e) {
      return Z(e.type, this.units);
    },
    isFieldDisabled(e, t) {
      return typeof e.disabled == "function" ? e.disabled(t) : !1;
    },
    validateBanding() {
      var e;
      if (this.validationIssues = [], !!this.options.banding.enabled) {
        this.suppressWatchers();
        for (const t in this.localShape.banding)
          this.localShape.banding[t] ? this.options.banding.enableTypes && ((e = this.options.banding.types) != null && e.length) && (this.localShape.banding[t] || this.validationIssues.push({
            index: t,
            message: "Please select a type"
          })) : this.localShape.banding[t] = "";
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
    },
    getAvailablePricingOptions(e, t = [], s) {
      return typeof this.$parent.$parent.getAvailablePricingOptions == "function" ? this.$parent.$parent.getAvailablePricingOptions(e, t, s) : [];
    },
    formatPrice(e) {
      return this.$parent.$parent.formatPrice(e);
    },
    getExtrasPrice(e, t, s) {
      return this.$parent.$parent.getExtrasPrice(e, t, s);
    }
  }
}), le = { id: "machining" }, he = {
  key: 0,
  class: "debug"
}, re = { class: "inputs" }, oe = {
  key: 0,
  class: "shape-name"
}, pe = { class: "shape-dimensions" }, de = {
  key: 1,
  class: "sides-wrapper"
}, ce = { class: "menu" }, ue = { class: "button-wrapper" }, ge = { class: "row table-heading" }, me = {
  key: 0,
  class: "id"
}, fe = {
  key: 0,
  class: "cell"
}, be = { class: "id" }, Se = ["onClick"], ve = { class: "remove" }, ye = { key: 5 };
function xe(e, t, s, i, a, n) {
  const g = W("ObjectViewer"), c = W("font-awesome-icon"), S = W("ExtrasInputs"), p = W("InputField");
  return r(), d("div", le, [
    e.env === "development" && e.showDevInfo ? (r(), d("div", he, [
      L(g, {
        data: [e.shape.machining],
        paths: ["shape.machining"]
      }, null, 8, ["data"])
    ])) : b("", !0),
    m("div", null, [
      m("div", re, [
        m("button", {
          type: "button",
          class: "close",
          onClick: t[0] || (t[0] = (o) => e.close())
        }, [
          L(c, { icon: ["fass", "xmark"] })
        ]),
        e.shape.name ? (r(), d("div", oe, y(e.shape.name), 1)) : b("", !0),
        m("div", pe, y(e.shape.l) + " x " + y(e.shape.w) + " " + y(e.shape.t ? "x " + e.shape.t : null), 1),
        e.options.faces.enabled ? (r(), d("div", de, [
          m("div", {
            ref: "sides",
            class: x(["sides", { flipped: e.currentFace === 1 }]),
            onClick: t[1] || (t[1] = (o) => e.flip())
          }, t[9] || (t[9] = [
            m("div", { class: "side-a" }, " A ", -1),
            m("div", { class: "side-b" }, " B ", -1)
          ]), 2),
          t[10] || (t[10] = m("div", { class: "text" }, " [Click to flip] ", -1))
        ])) : b("", !0),
        e.hasMachining ? (r(), d("button", {
          key: 2,
          onClick: t[2] || (t[2] = (...o) => e.deleteAll && e.deleteAll(...o))
        }, " Delete all machining ")) : b("", !0),
        m("div", ce, [
          e.options.holes.enabled ? (r(), d("div", {
            key: 0,
            class: x({ selected: e.currentType === "holes" }),
            onClick: t[3] || (t[3] = (o) => e.currentType = "holes")
          }, " Holes ", 2)) : b("", !0),
          e.options.hingeHoles.enabled ? (r(), d("div", {
            key: 1,
            class: x({ selected: e.currentType === "hingeHoles" }),
            onClick: t[4] || (t[4] = (o) => e.currentType = "hingeHoles")
          }, " Hinge holes ", 2)) : b("", !0),
          e.options.corners.enabled ? (r(), d("div", {
            key: 2,
            class: x({ selected: e.currentType === "corners" }),
            onClick: t[5] || (t[5] = (o) => e.currentType = "corners")
          }, " Corners ", 2)) : b("", !0),
          e.options.banding.enabled ? (r(), d("div", {
            key: 3,
            class: x({ selected: e.currentType === "banding" }),
            onClick: t[6] || (t[6] = (o) => e.currentType = "banding")
          }, " Banding ", 2)) : b("", !0)
        ]),
        m("div", ue, [
          e.currentType === "holes" || e.currentType === "hingeHoles" ? (r(), d("button", {
            key: 0,
            type: "button",
            onClick: t[7] || (t[7] = (o) => e.create())
          }, " Create ")) : b("", !0),
          e.currentType && e.currentType !== "banding" ? (r(), d("button", {
            key: 1,
            type: "button",
            onClick: t[8] || (t[8] = (o) => e.removeAll())
          }, " Delete all ")) : b("", !0)
        ]),
        e.currentType === "banding" ? (r(), D(S, {
          key: 3,
          shape: e.shape,
          env: e.env,
          "extra-key": "banding",
          "extra-label": "banding",
          "extra-keys": e.availableBandingSides,
          labels: e.options.banding.labels,
          "all-options": e.options.banding.options,
          pricing: e.options.banding.pricing,
          "user-friendly-field-map": e.userFriendlyFieldMap,
          "part-columns": 1,
          translate: e.translate,
          onSet: e.setExtrasOption,
          onUpdateAll: e.setAllExtrasOptions
        }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "onSet", "onUpdateAll"])) : b("", !0),
        e.currentType !== "banding" && e.currentShapeFields.length ? (r(), d("div", {
          key: 4,
          class: x(["grid-table", e.currentType]),
          style: z({
            "grid-template-columns": e.columnsStyle
          })
        }, [
          m("div", ge, [
            e.shouldShowId() ? (r(), d("div", me)) : b("", !0),
            (r(!0), d(k, null, C(e.currentFields, (o, f, l) => te((r(), d("div", {
              key: l,
              class: "cell"
            }, y(o.label ?? f), 1)), [
              [se, o.enabled]
            ])), 128)),
            t[11] || (t[11] = m("div", { class: "del" }, null, -1))
          ]),
          (r(!0), d(k, null, C(e.currentShapeFields, (o, f) => (r(), d("div", {
            key: f,
            class: "row"
          }, [
            e.shouldShowId() ? (r(), d("div", fe, [
              m("div", be, y(e.getIndex(f)), 1)
            ])) : b("", !0),
            (r(!0), d(k, null, C(e.currentFieldKeys, (l, H) => (r(), d("div", {
              key: H,
              class: "cell"
            }, [
              e.currentFields[l].type !== "select" && e.currentFields[l].type !== "checkbox" ? (r(), D(p, {
                key: 0,
                id: l + "-" + H,
                warning: e.isInvalid(f, l),
                type: e.currentFields[l].output ?? "unitDependent",
                "enable-label": !1,
                placeholder: e.currentFields[l].label ?? l,
                disabled: e.isFieldDisabled(e.currentFields[l], f),
                value: o[l],
                units: e.units,
                output: e.currentFields[l].output,
                onUpdate: (w) => e.updateField(o, l, w)
              }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate"])) : e.currentFields[l].type === "checkbox" ? (r(), D(p, {
                key: 1,
                id: l + "-" + H,
                type: "checkbox",
                warning: e.isInvalid(f, l),
                "enable-label": !1,
                disabled: e.isFieldDisabled(e.currentFields[l], f),
                value: o[l],
                output: e.currentFields[l].output,
                onUpdate: (w) => e.updateField(o, l, w)
              }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate"])) : e.currentFields[l].type === "select" ? (r(), D(p, {
                key: 2,
                id: l + "-" + H,
                type: "select",
                "enable-label": !1,
                warning: e.isInvalid(f, l),
                disabled: e.isFieldDisabled(e.currentFields[l], f),
                value: o[l],
                options: e.currentFields[l].options,
                output: e.currentFields[l].output,
                onUpdate: (w) => e.updateField(o, l, w)
              }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate"])) : b("", !0)
            ]))), 128)),
            m("div", {
              class: "cell",
              onClick: (l) => e.remove(f)
            }, [
              m("div", ve, [
                L(c, { icon: ["fass", "trash"] })
              ])
            ], 8, Se),
            (r(!0), d(k, null, C(e.getValidationIssues(
              f
            ), (l, H) => (r(), d("div", {
              key: H,
              class: "group validation",
              style: z({
                "grid-column-end": "span " + e.columns
              })
            }, y(l), 5))), 128))
          ]))), 128))
        ], 6)) : e.currentType !== "banding" ? (r(), d("div", ye, " Please select from the menu above ")) : b("", !0)
      ]),
      m("div", {
        id: "machining-diagram",
        class: x(["diagram", { flipped: e.currentFace === 1 }])
      }, null, 2)
    ])
  ]);
}
const Te = /* @__PURE__ */ ee(ne, [["render", xe]]);
export {
  Te as default
};
