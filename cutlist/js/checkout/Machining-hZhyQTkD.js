var W = Object.defineProperty;
var L = (t, e, s) => e in t ? W(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var c = (t, e, s) => (L(t, typeof e != "symbol" ? e + "" : e, s), s);
import { d as S, a as u, v as k, m as F, g as z, b as P, e as M, i as Y, f as A, s as V, h as O, j as B, _ as G, r as E, o as l, k as h, l as o, n as w, t as f, p as y, q as H, F as v, u as x, w as T, x as U, y as _, z as D, A as C, B as j, D as R } from "./main-iQ6YSuOZ.js";
class N {
  constructor({
    HTMLElement: e,
    vueComponent: s,
    shape: p,
    units: a = "decimal",
    decimalPlaces: i = 2
  }) {
    c(this, "HTMLElement");
    c(this, "HTMLElementWidth");
    c(this, "el");
    c(this, "units");
    c(this, "decimalPlaces");
    c(this, "vueComponent");
    c(this, "shape");
    c(this, "h");
    c(this, "w");
    c(this, "shapeL");
    c(this, "shapeW");
    c(this, "padding", 40);
    c(this, "xScale", S.scaleLinear());
    c(this, "yScale", S.scaleLinear());
    c(this, "yScaleFlipped", S.scaleLinear());
    c(this, "measurementScale", S.scaleLinear());
    c(this, "xAxis");
    c(this, "yAxis");
    c(this, "formatDp");
    c(this, "svgCanvas");
    c(this, "currentSide", 0);
    c(this, "bandingStrokeWidth", 2);
    c(this, "shapeGroup");
    c(this, "bandingGroup");
    c(this, "holeGroup");
    c(this, "hingeHoleGroup");
    c(this, "cornerGroup");
    c(this, "legendGroup");
    c(this, "pointGroup");
    c(this, "loaded", !1);
    this.HTMLElement = e, this.units = a, this.decimalPlaces = i, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = s, this.shape = p, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w)
        return !1;
      if (this.el = S.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = S.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
        const e = this.el.append("svg").attr("class", "vis");
        if (e === null)
          return;
        this.svgCanvas = e;
      }
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x").call(
      S.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ).selectAll("text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y").call(
      S.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ).selectAll("text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createShape(), this.createLegend(), this.createHoles(), this.createHingeHoles(), this.createBanding();
  }
  addPoint(e, s) {
    this.pointGroup.append("circle").attr("cx", this.xScale(e)).attr("cy", this.getYScale()(s)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h)
      return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const e = S.path(), s = this.shape.machining.corners, p = [], a = [];
    [0, 1, 2, 3].forEach((g) => {
      const r = s[g];
      r && r.type ? (p.push(r.size ? u(r.size) : 0), a.push(r.type)) : (p.push(0), a.push(null));
    });
    const i = (g, r, d, n, m) => {
      a[g] === "radius" ? e.arcTo(
        this.xScale(r),
        this.getYScale()(d),
        this.xScale(n),
        this.getYScale()(m),
        this.measurementScale(p[g])
      ) : a[g] === "bevel" ? e.lineTo(this.xScale(n), this.getYScale()(m)) : (e.lineTo(this.xScale(r), this.getYScale()(d)), e.lineTo(this.xScale(n), this.getYScale()(m)));
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
    for (const [i, g] of Object.entries(e))
      if (g)
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
    const a = S.path();
    this.shape.machining.corners.forEach((i, g) => {
      if (!i.type)
        return;
      let r, d, n;
      switch (g) {
        case 0:
          if (!k(e.a) || e.a === !1)
            return;
          r = {
            x: this.xScale(0) - s,
            y: this.getYScale()(u(i.size ?? 0))
          }, d = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, n = {
            x: this.xScale(u(i.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          };
          break;
        case 1:
          if (!k(e.b) || e.b === !1)
            return;
          r = {
            x: this.xScale(this.shapeL - u(i.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? s : -s)
          }, d = {
            x: this.xScale(this.shapeL) - s,
            y: this.getYScale()(0)
          }, n = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(u(i.size ?? 0))
          };
          break;
        case 2:
          if (!k(e.c) || e.c === !1)
            return;
          r = {
            x: this.xScale(this.shapeL) + s,
            y: this.getYScale()(this.shapeW - u(i.size ?? 0))
          }, d = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, n = {
            x: this.xScale(this.shapeL - u(i.size ?? 0)) - s,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          };
          break;
        case 3:
          if (!k(e.d) || e.d === !1)
            return;
          r = {
            x: this.xScale(u(i.size ?? 0)),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? s : -s)
          }, d = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, n = {
            x: this.xScale(0) - s,
            y: this.getYScale()(this.shapeW - u(i.size ?? 0)) + s
          };
          break;
        default:
          return;
      }
      if (a.moveTo(r.x, r.y), i.type === "radius")
        switch (a.arcTo(
          d.x,
          d.y,
          n.x,
          n.y,
          this.measurementScale(i.size ?? 0)
        ), g) {
          case 0:
          case 2:
            a.lineTo(n.x + s, n.y);
            break;
          case 1:
          case 3:
            a.lineTo(n.x, n.y - (this.currentSide === 0 ? s : -1));
            break;
        }
      else
        i.type === "bevel" && a.lineTo(n.x, n.y);
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
    this.currentSide = this.currentSide === 0 ? 1 : 0, this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(e) {
    return this.shape.machining.corners[e].type ? this.measurementScale(this.shape.machining.corners[e].size ?? 0) : 0;
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0), this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0)
      return;
    this.reset();
    let e = this.shape.getShortSide() / this.shape.getLongSide();
    if (this.w = this.HTMLElementWidth, this.w - this.padding * 2 < 0)
      return;
    let s = window.innerHeight - this.padding * 2 - 20;
    s > 600 && (s = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), e > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (e = 0.3, this.h = this.w * e), this.h > s && (this.h = s, this.w = this.h / e, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), console.assert(this.xScale(0) === this.yScaleFlipped(0)), console.assert(this.xScale(100) === this.yScaleFlipped(100)), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
const q = {
  name: "Machining",
  components: {},
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
    var t, e, s, p, a, i, g, r, d, n, m, b;
    return {
      loaded: !1,
      vis: F({}),
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
              min: () => typeof this.options.holes.minDiameter < "u" ? u(this.options.holes.minDiameter) : 0,
              max: this.getMaxHoleDiameter(),
              childType: (e = this.options.holes.diameters) != null && e.length ? "number" : void 0,
              options: (s = this.options.holes.diameters) != null && s.length ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && u(this.shape.t) > 0,
              //[]
              type: (p = this.options.holes.depths) != null && p.length ? "select" : "unitDependent",
              min: () => typeof this.options.holes.minDepth < "u" ? u(this.options.holes.minDepth) : 0,
              max: this.getMaxHoleDepth(),
              childType: (a = this.options.holes.depths) != null && a.length ? "number" : void 0,
              options: (i = this.options.holes.depths) != null && i.length ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            side: {
              enabled: this.options.sides.enabled,
              type: "select",
              childType: "string",
              options: [
                {
                  key: "A",
                  value: 0
                },
                {
                  key: "B",
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
              enabled: this.options.holes.enableDepth && typeof this.shape.t < "u" && u(this.shape.t) > 0,
              type: (g = this.options.holes.depths) != null && g.length ? "select" : "unitDependent",
              min: () => typeof this.options.holes.minDepth < "u" ? u(this.options.holes.minDepth) : 0,
              max: this.getMaxHoleDepth(),
              childType: (r = this.options.holes.depths) != null && r.length ? "number" : void 0,
              options: (d = this.options.holes.depths) != null && d.length ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            //[] separate option for hinges
            diameter: {
              enabled: !0,
              type: (n = this.options.holes.diameters) != null && n.length ? "select" : "unitDependent",
              label: "Diameter",
              min: () => typeof this.options.holes.minDiameter < "u" ? u(this.options.holes.minDiameter) : 0,
              max: this.getMaxHoleDiameter(),
              childType: (m = this.options.holes.diameters) != null && m.length ? "number" : void 0,
              options: (b = this.options.holes.diameters) != null && b.length ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            numHoles: {
              enabled: !0,
              type: "unitDependent",
              min: 2
            },
            side: {
              enabled: this.options.sides.enabled,
              type: "select",
              childType: "string",
              options: [
                {
                  key: "A",
                  value: 0
                },
                {
                  key: "B",
                  value: 1
                }
              ]
            },
            edge: {
              enabled: !0,
              type: "select",
              childType: "string",
              options: [
                {
                  key: "W1",
                  value: "x1"
                },
                {
                  key: "W2",
                  value: "x2"
                },
                {
                  key: "L1",
                  value: "y1"
                },
                {
                  key: "L2",
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
              childType: "string",
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
        banding: {
          a: {
            enabled: this.options.banding.enableCorners,
            type: "boolean",
            label: "A",
            disabled: () => !this.shape.machining.corners[0].size
          },
          b: {
            enabled: this.options.banding.enableCorners,
            type: "boolean",
            label: "B",
            disabled: () => !this.shape.machining.corners[1].size
          },
          c: {
            enabled: this.options.banding.enableCorners,
            type: "boolean",
            label: "C",
            disabled: () => !this.shape.machining.corners[2].size
          },
          d: {
            enabled: this.options.banding.enableCorners,
            type: "boolean",
            label: "D",
            disabled: () => !this.shape.machining.corners[3].size
          },
          y1: {
            enabled: !0,
            type: "boolean",
            label: "L1"
          },
          y2: {
            enabled: !0,
            type: "boolean",
            label: "L2"
          },
          x1: {
            enabled: !0,
            type: "boolean",
            label: "W1"
          },
          x2: {
            enabled: !0,
            type: "boolean",
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
      if (!((e = this.currentFieldKeys) != null && e.length))
        return 0;
      let t = Object.values(this.currentFields).filter(
        (s) => s.enabled
      ).length;
      return t += 1, this.currentPrimary === "machining" && (t += 1), t;
    },
    columnsStyle() {
      if (!this.currentFieldKeys.length)
        return;
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
      return this.currentPrimary && this.currentSecondary ? Object.keys(
        this.fieldDefinitions[this.currentPrimary][this.currentSecondary]
      ).filter(
        (t) => this.fieldDefinitions[this.currentPrimary][this.currentSecondary][t].enabled
      ) : this.currentPrimary ? Object.keys(this.fieldDefinitions[this.currentPrimary]).filter(
        (t) => this.fieldDefinitions[this.currentPrimary][t].enabled
      ) : [];
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
          if (!t)
            return this.validationMessages = [];
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
    const t = document.querySelector(
      "#smartcut-app #machining .diagram"
    );
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
      return P(t);
    },
    getMaxValue(t) {
      return M(t);
    },
    getMaxHoleDepth() {
      const t = typeof this.shape.t < "u" ? u(this.shape.t) : null, e = typeof this.options.holes.maxDepth < "u" ? u(this.options.holes.maxDepth) : null;
      return e === null ? t || null : t ? e < t ? e : t : null;
    },
    getMaxHoleDiameter() {
      const t = typeof this.options.holes.maxDiameter < "u" ? u(this.options.holes.maxDiameter) : null;
      return t !== null ? t < this.shape.getLongSide() ? t : this.shape.getLongSide() : null;
    },
    getSelectOptions(t, e = null) {
      if (!(t != null && t.length))
        return [];
      let s = "None";
      switch (e) {
        case "depth":
          s = "Through";
          break;
      }
      const p = [
        {
          key: s,
          value: null
        }
      ];
      return t.forEach((a) => {
        const i = a.charAt(0).toUpperCase() + a.slice(1);
        p.push({
          key: i,
          value: a
        });
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
      this.shape && (this.vis = new N({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: this.shape,
        vueComponent: this
      }), this.vis.init(), this.visInit = !0, setTimeout(() => {
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
      return A(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    setFieldEnabled(t, e, s = !0) {
      return V(
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
        u(this.shape.l) / 2,
        u(this.shape.w) / 2,
        this.options.holes.defaultDiameter ?? 0,
        this.options.holes.defaultDepth ?? 0,
        this.currentSide
      ), this.focus(), this.vis.createHoles();
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
          return this.localShape.machining.holes.splice(t, 1);
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
    focus() {
      this.$nextTick(() => {
        var t, e, s;
        (t = this == null ? void 0 : this.$refs) != null && t.inputFocus && (Array.isArray((e = this == null ? void 0 : this.$refs) == null ? void 0 : e.inputFocus) ? (s = this.$refs) == null || s.inputFocus.pop().focus() : this.$refs.inputFocus.focus());
      });
    },
    getShapeId() {
      if (this.shape.constructor.name === "InputShape")
        return this.shape.listId;
      if (this.shape.constructor.name === "Shape")
        return this.shape.id;
    },
    getInputMode(t) {
      return O(t, this.units);
    },
    getInputType(t) {
      return B(t, this.units);
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
}, I = { id: "machining" }, X = { class: "inputs" }, J = {
  key: 0,
  class: "shape-name"
}, Q = { class: "shape-dimensions" }, Z = {
  key: 1,
  class: "sides-wrapper"
}, K = /* @__PURE__ */ o("div", { class: "side-a" }, " A ", -1), $ = /* @__PURE__ */ o("div", { class: "side-b" }, " B ", -1), ee = [
  K,
  $
], te = /* @__PURE__ */ o("div", { class: "text" }, " [Click to flip] ", -1), se = { class: "menu" }, ie = { class: "button-wrapper" }, ae = {
  key: 2,
  class: "grid-table banding-types"
}, ne = /* @__PURE__ */ o("div", { class: "row table-heading" }, [
  /* @__PURE__ */ o("div", { class: "cell" }, " Type definition "),
  /* @__PURE__ */ o("div", { class: "cell" })
], -1), re = { class: "cell" }, le = ["onUpdate:modelValue"], he = ["onClick"], de = { class: "remove" }, oe = {
  key: 3,
  class: "grid-table banding"
}, ce = /* @__PURE__ */ o("div", { class: "cell id" }, null, -1), pe = /* @__PURE__ */ o("div", { class: "cell" }, " Add ", -1), ue = {
  key: 0,
  class: "cell"
}, ge = /* @__PURE__ */ o("div", { class: "cell del" }, null, -1), me = { class: "cell" }, ye = { class: "id" }, be = { class: "cell" }, fe = ["id", "onUpdate:modelValue", "disabled"], Se = {
  key: 0,
  class: "cell"
}, ve = ["id", "onUpdate:modelValue"], xe = { value: "" }, He = ["value", "disabled"], Te = ["onClick"], _e = { class: "remove" }, ke = {
  key: 0,
  class: "id"
}, we = /* @__PURE__ */ o("div", { class: "del" }, null, -1), De = {
  key: 0,
  class: "cell"
}, Ce = { class: "id" }, We = ["id", "onUpdate:modelValue", "type", "inputmode", "disabled", "placeholder", "min", "max"], Le = ["id", "onUpdate:modelValue", "disabled"], Fe = ["id", "onUpdate:modelValue", "aria-label"], ze = ["value", "disabled"], Pe = ["onClick"], Me = { class: "remove" }, Ye = { key: 5 }, Ae = { key: 6 };
function Ve(t, e, s, p, a, i) {
  const g = E("font-awesome-icon");
  return l(), h("div", I, [
    o("div", null, [
      o("div", X, [
        o("button", {
          type: "button",
          class: "close",
          onClick: e[0] || (e[0] = (r) => i.close())
        }, [
          w(g, { icon: ["fass", "xmark"] })
        ]),
        s.shape.name ? (l(), h("div", J, f(s.shape.name), 1)) : y("", !0),
        o("div", Q, f(s.shape.l) + " x " + f(s.shape.w) + " " + f(s.shape.t ? "x " + s.shape.t : null), 1),
        s.options.sides.enabled ? (l(), h("div", Z, [
          o("div", {
            ref: "sides",
            class: H(["sides", { flipped: a.currentSide === 1 }]),
            onClick: e[1] || (e[1] = (r) => i.flip())
          }, ee, 2),
          te
        ])) : y("", !0),
        o("div", se, [
          s.options.holes.enabled ? (l(), h("div", {
            key: 0,
            class: H({ selected: a.currentSecondary === "holes" }),
            onClick: e[2] || (e[2] = (r) => {
              a.currentPrimary = "machining", a.currentSecondary = "holes";
            })
          }, " Holes ", 2)) : y("", !0),
          s.options.hingeHoles.enabled ? (l(), h("div", {
            key: 1,
            class: H({ selected: a.currentSecondary === "hingeHoles" }),
            onClick: e[3] || (e[3] = (r) => {
              a.currentPrimary = "machining", a.currentSecondary = "hingeHoles";
            })
          }, " Hinge holes ", 2)) : y("", !0),
          s.options.corners.enabled ? (l(), h("div", {
            key: 2,
            class: H({ selected: a.currentSecondary === "corners" }),
            onClick: e[4] || (e[4] = (r) => {
              a.currentPrimary = "machining", a.currentSecondary = "corners";
            })
          }, " Corners ", 2)) : y("", !0),
          s.options.banding.enabled ? (l(), h("div", {
            key: 3,
            class: H({ selected: a.currentPrimary === "banding" }),
            onClick: e[5] || (e[5] = (r) => {
              a.currentPrimary = "banding", a.currentSecondary = null;
            })
          }, " Banding ", 2)) : y("", !0)
        ]),
        o("div", ie, [
          a.currentSecondary === "holes" || a.currentSecondary === "hingeHoles" ? (l(), h("button", {
            key: 0,
            type: "button",
            onClick: e[6] || (e[6] = (r) => i.create())
          }, " Create ")) : y("", !0),
          a.currentPrimary ? (l(), h("button", {
            key: 1,
            type: "button",
            onClick: e[7] || (e[7] = (r) => i.removeAll())
          }, " Delete all ")) : y("", !0),
          a.currentPrimary === "banding" && s.options.banding.enableTypes && s.options.banding.types === null ? (l(), h("button", {
            key: 2,
            type: "button",
            onClick: e[8] || (e[8] = (r) => a.bandingTypes.push(""))
          }, " Add banding type ")) : y("", !0)
        ]),
        a.currentPrimary === "banding" && s.options.banding.enableTypes && s.options.banding.types === null ? (l(), h("div", ae, [
          ne,
          (l(!0), h(v, null, x(a.bandingTypes, (r, d) => (l(), h("div", {
            key: d,
            class: "row"
          }, [
            o("div", re, [
              T(o("input", {
                "onUpdate:modelValue": (n) => a.bandingTypes[d] = n,
                type: "text"
              }, null, 8, le), [
                [
                  U,
                  a.bandingTypes[d],
                  void 0,
                  { trim: !0 }
                ]
              ])
            ]),
            o("div", {
              class: "cell",
              onClick: (n) => a.bandingTypes.splice(d, 1)
            }, [
              o("div", de, [
                w(g, { icon: ["fass", "trash"] })
              ])
            ], 8, he)
          ]))), 128))
        ])) : y("", !0),
        a.currentPrimary === "banding" ? (l(), h("div", oe, [
          o("div", {
            class: "row table-heading",
            style: _({ "grid-template-columns": i.columnsStyle })
          }, [
            ce,
            pe,
            s.options.banding.enableTypes ? (l(), h("div", ue, " Type ")) : y("", !0),
            ge
          ], 4),
          (l(!0), h(v, null, x(i.currentFieldKeys, (r) => (l(), h("div", {
            key: r,
            class: "row",
            style: _({ "grid-template-columns": i.columnsStyle })
          }, [
            o("div", me, [
              o("div", ye, f(i.currentFields[r].label.toUpperCase()), 1)
            ]),
            o("div", be, [
              T(o("input", {
                id: "banding-" + r,
                "onUpdate:modelValue": (d) => i.localShape.banding[r] = d,
                type: "checkbox",
                disabled: i.isFieldDisabled(i.currentFields[r], void 0)
              }, null, 8, fe), [
                [
                  D,
                  i.localShape.banding[r],
                  void 0,
                  {
                    lazy: !0,
                    trim: !0
                  }
                ]
              ])
            ]),
            s.options.banding.enableTypes ? (l(), h("div", Se, [
              T(o("select", {
                id: "banding-type-" + r,
                "onUpdate:modelValue": (d) => i.localShape.bandingType[r] = d,
                "aria-label": "Banding type"
              }, [
                o("option", xe, f(i.isFieldDisabled(i.currentFields[r], void 0) ? "N/A" : "Select type"), 1),
                (l(!0), h(v, null, x(a.bandingTypes, (d) => (l(), h("option", {
                  key: d,
                  value: d.toLowerCase(),
                  disabled: i.isFieldDisabled(i.currentFields[r], void 0)
                }, f(d.toUpperCase()), 9, He))), 128))
              ], 8, ve), [
                [
                  C,
                  i.localShape.bandingType[r],
                  void 0,
                  {
                    lazy: !0,
                    trim: !0
                  }
                ]
              ])
            ])) : y("", !0),
            o("div", {
              class: "cell",
              onClick: (d) => i.remove(r)
            }, [
              o("div", _e, [
                w(g, { icon: ["fass", "trash"] })
              ])
            ], 8, Te),
            (l(!0), h(v, null, x(i.getValidationMessages(r), (d, n) => (l(), h("div", {
              key: n,
              class: "group validation",
              style: _({
                "grid-column-end": "span " + i.columns
              })
            }, f(d), 5))), 128))
          ], 4))), 128))
        ])) : y("", !0),
        a.currentPrimary !== "banding" && i.currentShapeFields.length ? (l(), h("div", {
          key: 4,
          class: H(["grid-table", a.currentPrimary])
        }, [
          o("div", {
            class: "row table-heading",
            style: _({ "grid-template-columns": i.columnsStyle })
          }, [
            i.shouldShowId() ? (l(), h("div", ke)) : y("", !0),
            (l(!0), h(v, null, x(i.currentFields, (r, d, n) => T((l(), h("div", {
              key: n,
              class: "cell"
            }, f(r.label ?? d), 1)), [
              [j, r.enabled]
            ])), 128)),
            we
          ], 4),
          (l(!0), h(v, null, x(i.currentShapeFields, (r, d) => (l(), h("div", {
            key: d,
            class: "row",
            style: _({ "grid-template-columns": i.columnsStyle })
          }, [
            i.shouldShowId() ? (l(), h("div", De, [
              o("div", Ce, f(i.getIndex(d)), 1)
            ])) : y("", !0),
            (l(!0), h(v, null, x(i.currentFieldKeys, (n, m) => (l(), h("div", {
              key: m,
              class: "cell"
            }, [
              i.currentFields[n].type !== "select" && i.currentFields[n].type !== "boolean" ? T((l(), h("input", {
                key: 0,
                id: n + "-" + m,
                ref_for: !0,
                ref: m === 0 && m === i.currentShapeFields.length - 1 ? "inputFocus" : "",
                "onUpdate:modelValue": (b) => r[n] = b,
                type: i.getInputType(i.currentFields[n]),
                inputmode: i.getInputMode(i.currentFields[n]),
                disabled: i.isFieldDisabled(i.currentFields[n], d),
                placeholder: i.currentFields[n].label ?? n,
                min: i.getMinValue(i.currentFields[n]),
                max: i.getMaxValue(i.currentFields[n])
              }, null, 8, We)), [
                [
                  R,
                  r[n],
                  void 0,
                  {
                    lazy: !0,
                    trim: !0
                  }
                ]
              ]) : i.currentFields[n].type === "boolean" ? T((l(), h("input", {
                key: 1,
                id: n + "-" + m,
                "onUpdate:modelValue": (b) => r[n] = b,
                type: "checkbox",
                disabled: i.isFieldDisabled(i.currentFields[n], d)
              }, null, 8, Le)), [
                [D, r[n]]
              ]) : i.currentFields[n].type === "select" ? T((l(), h("select", {
                key: 2,
                id: n + "-" + m,
                ref_for: !0,
                ref: m === 0 && m === i.currentShapeFields.length - 1 ? "inputFocus" : "",
                "onUpdate:modelValue": (b) => r[n] = b,
                "aria-label": i.currentFields[n].label
              }, [
                (l(!0), h(v, null, x(i.currentFields[n].options, (b) => (l(), h("option", {
                  key: b.key,
                  value: b.value,
                  disabled: i.isFieldDisabled(b, d)
                }, f(b.key), 9, ze))), 128))
              ], 8, Fe)), [
                [
                  C,
                  r[n],
                  void 0,
                  {
                    lazy: !0,
                    trim: !0
                  }
                ]
              ]) : y("", !0)
            ]))), 128)),
            o("div", {
              class: "cell",
              onClick: (n) => i.remove(d)
            }, [
              o("div", Me, [
                w(g, { icon: ["fass", "trash"] })
              ])
            ], 8, Pe),
            (l(!0), h(v, null, x(i.getValidationMessages(d), (n, m) => (l(), h("div", {
              key: m,
              class: "group validation",
              style: _({
                "grid-column-end": "span " + i.columns
              })
            }, f(n), 5))), 128))
          ], 4))), 128))
        ], 2)) : a.currentSecondary ? (l(), h("div", Ye, " Nothing yet... ")) : a.currentPrimary !== "banding" ? (l(), h("div", Ae, " Please select from the menu above ")) : y("", !0)
      ]),
      o("div", {
        id: "machining-diagram",
        class: H(["diagram", { flipped: a.currentSide === 1 }])
      }, null, 2)
    ])
  ]);
}
const Ge = /* @__PURE__ */ G(q, [["render", Ve]]);
export {
  Ge as default
};
